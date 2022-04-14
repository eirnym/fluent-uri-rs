pub mod table;

mod imp;
pub use imp::*;

use self::table::Table;
use crate::Result;
use beef::Cow;
use std::{
    borrow::{self, Cow::*},
    fmt, hash,
    str::{self, Utf8Error},
    string::FromUtf8Error,
};

/// Returns immediately with a syntax error.
macro_rules! err {
    ($index:expr, $kind:ident) => {
        return Err(crate::SyntaxError {
            index: $index,
            kind: crate::SyntaxErrorKind::$kind,
        })
    };
}

pub(crate) use err;

mod internal {
    pub trait Buf {
        unsafe fn as_mut_vec(&mut self) -> &mut Vec<u8>;
    }

    impl Buf for Vec<u8> {
        #[inline]
        unsafe fn as_mut_vec(&mut self) -> &mut Vec<u8> {
            self
        }
    }

    impl Buf for String {
        #[inline]
        unsafe fn as_mut_vec(&mut self) -> &mut Vec<u8> {
            unsafe { self.as_mut_vec() }
        }
    }
}

/// Percent-encodes a byte sequence.
///
/// # Panics
///
/// Panics if the table is not for encoding.
#[inline]
pub fn encode<'a, S: AsRef<[u8]> + ?Sized>(s: &'a S, table: &Table) -> Cow<'a, str> {
    assert!(table.allow_enc(), "table not for encoding");
    imp::encode(s.as_ref(), table)
}

/// Percent-encodes a byte sequence with a buffer.
///
/// Returns `None` if the bytes need no encoding.
///
/// The buffer may either be a [`String`] or a [`Vec<u8>`].
///
/// The argument `append_always` indicates whether the bytes
/// should be appended to the buffer if they need no encoding.
///
/// # Panics
///
/// Panics if the table is not for encoding.
#[inline]
pub fn encode_with<'a, S: AsRef<[u8]> + ?Sized, B: internal::Buf>(
    s: &S,
    table: &Table,
    buf: &'a mut B,
    append_always: bool,
) -> Option<&'a str> {
    assert!(table.allow_enc(), "table not for encoding");
    // SAFETY: The encoded bytes are valid UTF-8.
    let buf = unsafe { buf.as_mut_vec() };
    imp::encode_with(s.as_ref(), table, buf, append_always)
}

/// Decodes a percent-encoded string.
#[inline]
pub fn decode<S: AsRef<[u8]> + ?Sized>(s: &S) -> Result<Cow<'_, [u8]>> {
    imp::decode(s.as_ref())
}

/// Decodes a percent-encoded string with a buffer.
///
/// Returns `None` if the string needs no decoding.
///
/// The argument `append_always` indicates whether the string
/// should be appended to the buffer if it needs no decoding.
#[inline]
pub fn decode_with<'a, S: AsRef<[u8]> + ?Sized>(
    s: &S,
    buf: &'a mut Vec<u8>,
    append_always: bool,
) -> Result<Option<&'a [u8]>> {
    imp::decode_with(s.as_ref(), buf, append_always)
}

/// Checks if all characters in a string are allowed by the given table.
#[inline]
pub fn validate<S: AsRef<[u8]> + ?Sized>(s: &S, table: &Table) -> Result<()> {
    let s = s.as_ref();
    if table.allow_enc() {
        validate_enc(s, table)
    } else {
        match s.iter().position(|&x| !table.contains(x)) {
            Some(i) => err!(i, UnexpectedChar),
            None => Ok(()),
        }
    }
}

/// Percent-encoded string slices.
#[repr(transparent)]
pub struct EStr {
    inner: str,
}

impl AsRef<str> for EStr {
    #[inline]
    fn as_ref(&self) -> &str {
        &self.inner
    }
}

impl AsRef<[u8]> for EStr {
    #[inline]
    fn as_ref(&self) -> &[u8] {
        self.inner.as_bytes()
    }
}

impl PartialEq<EStr> for EStr {
    #[inline]
    fn eq(&self, other: &EStr) -> bool {
        self.inner == other.inner
    }
}

impl PartialEq<str> for EStr {
    #[inline]
    fn eq(&self, other: &str) -> bool {
        self.inner == *other
    }
}

impl Eq for EStr {}

impl fmt::Debug for EStr {
    #[inline]
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Debug::fmt(self.as_str(), f)
    }
}

impl fmt::Display for EStr {
    #[inline]
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        fmt::Display::fmt(self.as_str(), f)
    }
}

impl Default for &EStr {
    #[inline]
    fn default() -> Self {
        EStr::EMPTY
    }
}

impl hash::Hash for EStr {
    #[inline]
    fn hash<H: hash::Hasher>(&self, state: &mut H) {
        self.inner.hash(state)
    }
}

impl borrow::Borrow<str> for &EStr {
    #[inline]
    fn borrow(&self) -> &str {
        self.as_str()
    }
}

impl EStr {
    /// An empty `EStr`.
    pub const EMPTY: &'static EStr = EStr::new("");

    /// Converts a string slice to an `EStr`.
    ///
    /// # Panics
    ///
    /// Panics if the string is not properly encoded.
    pub const fn new(s: &str) -> &EStr {
        if imp::validate_const(s.as_bytes()) {
            // SAFETY: We have done the validation.
            unsafe { EStr::new_unchecked(s) }
        } else {
            panic!("invalid percent-encoded string");
        }
    }

    /// Converts a string slice to an `EStr` without checking that the string is properly encoded.
    ///
    /// # Safety
    ///
    /// The `decode` function assumes that the string is properly encoded,
    /// and parses the encoded octets without checking bounds or validating them.
    /// Any invalid encoded octet in the string will result in undefined behavior.
    #[inline]
    pub const unsafe fn new_unchecked(s: &str) -> &EStr {
        // SAFETY: The caller must ensure that the string is properly encoded.
        unsafe { &*(s as *const str as *const EStr) }
    }

    /// Converts a byte slice into an `EStr` assuming validity.
    // This function should be inlined since it is called by inlined public functions.
    #[inline]
    unsafe fn from_bytes(s: &[u8]) -> &EStr {
        // SAFETY: The caller must ensure that the byte slice is valid percent-encoded UTF-8.
        unsafe { &*(s as *const [u8] as *const EStr) }
    }

    /// Yields the underlying string slice.
    #[inline]
    pub fn as_str(&self) -> &str {
        &self.inner
    }

    /// Decodes the `EStr`.
    ///
    /// # Examples
    ///
    /// ```
    /// use fluent_uri::encoding::EStr;
    ///
    /// let dec = EStr::new("%C2%BF").decode();
    /// assert_eq!(dec.as_bytes(), &[0xc2, 0xbf]);
    /// assert_eq!(dec.into_string().unwrap(), "¿");
    /// ```
    #[inline]
    pub fn decode(&self) -> Decode<'_> {
        // SAFETY: An `EStr` may only be created through `new_unchecked`,
        // of which the caller must guarantee that the string is properly encoded.
        Decode(unsafe { decode_unchecked(self.inner.as_bytes()) })
    }

    /// Decodes the `EStr` with a buffer.
    ///
    /// The argument `append_always` indicates whether the string
    /// should be appended to the buffer if it needs no decoding.
    ///
    /// Note that the buffer is not cleared prior to decoding.
    ///
    /// # Examples
    ///
    /// ```
    /// use fluent_uri::encoding::EStr;
    ///
    /// let mut buf = Vec::new();
    /// let dec = EStr::new("233").decode_with(&mut buf, false);
    /// assert_eq!(dec.to_str().unwrap(), "233");
    /// assert!(buf.is_empty());
    ///
    /// EStr::new("2").decode_with(&mut buf, true);
    /// assert_eq!(buf, b"2");
    ///
    /// let dec = EStr::new("3%33").decode_with(&mut buf, false);
    /// assert_eq!(dec.to_str().unwrap(), "33");
    /// assert_eq!(buf, b"233");
    /// ```
    #[inline]
    pub fn decode_with<'a>(&'a self, buf: &'a mut Vec<u8>, append_always: bool) -> DecodeRef<'a> {
        let bytes = self.inner.as_bytes();

        // SAFETY: An `EStr` may only be created through `new_unchecked`,
        // of which the caller must guarantee that the string is properly encoded.
        let decoded = unsafe { decode_with_unchecked(bytes, buf, append_always) };

        DecodeRef {
            bytes: decoded.unwrap_or(bytes),
            buffered: decoded.is_some(),
        }
    }

    /// Splits the `EStr` on the occurrences of the specified delimiter.
    ///
    /// # Panics
    ///
    /// Panics if the delimiter is not a [reserved] character.
    ///
    /// [reserved]: https://datatracker.ietf.org/doc/html/rfc3986/#section-2.2
    ///
    /// # Examples
    ///
    /// ```
    /// use std::collections::HashMap;
    /// use fluent_uri::encoding::EStr;
    ///
    /// let s = "name=%E5%BC%A0%E4%B8%89&speech=%C2%A1Ol%C3%A9%21";
    /// let map: HashMap<_, _> = EStr::new(s)
    ///     .split('&')
    ///     .filter_map(|s| s.split_once('='))
    ///     .map(|(k, v)| (k.decode(), v.decode()))
    ///     .filter_map(|(k, v)| k.into_string().ok().zip(v.into_string().ok()))
    ///     .collect();
    /// assert_eq!(map["name"], "张三");
    /// assert_eq!(map["speech"], "¡Olé!");
    /// ```
    #[inline]
    pub fn split(&self, delim: char) -> Split<'_> {
        assert!(
            delim.is_ascii() && table::RESERVED.contains(delim as u8),
            "splitting with non-reserved character"
        );

        Split {
            s: self.inner.as_bytes(),
            delim: delim as u8,
            finished: false,
        }
    }

    /// Splits the `EStr` on the first occurrence of the specified delimiter and
    /// returns prefix before delimiter and suffix after delimiter.
    ///
    /// # Panics
    ///
    /// Panics if the delimiter is not a [reserved] character.
    ///
    /// [reserved]: https://datatracker.ietf.org/doc/html/rfc3986/#section-2.2
    ///
    /// # Examples
    ///
    /// ```
    /// use fluent_uri::encoding::EStr;
    ///
    /// let (k, v) = EStr::new("key=value").split_once('=').unwrap();
    /// assert_eq!(k, "key");
    /// assert_eq!(v, "value");
    ///
    /// assert!(EStr::new("abc").split_once(';').is_none());
    /// ```
    #[inline]
    pub fn split_once(&self, delim: char) -> Option<(&EStr, &EStr)> {
        assert!(
            delim.is_ascii() && table::RESERVED.contains(delim as u8),
            "splitting with non-reserved character"
        );
        let bytes = self.inner.as_bytes();

        let i = bytes.iter().position(|&x| x == delim as u8)?;
        let (head, tail) = (&bytes[..i], &bytes[i + 1..]);
        // SAFETY: Splitting at a reserved character leaves valid percent-encoded UTF-8.
        unsafe { Some((EStr::from_bytes(head), EStr::from_bytes(tail))) }
    }
}

/// A wrapper of percent-decoded bytes.
///
/// This struct is created by calling [`decode`] on an `EStr`.
///
/// [`decode`]: EStr::decode
#[derive(Debug)]
pub struct Decode<'a>(Cow<'a, [u8]>);

impl<'a> Decode<'a> {
    /// Returns a reference to the decoded bytes.
    #[inline]
    pub fn as_bytes(&self) -> &[u8] {
        &self.0
    }

    /// Yields the underlying decoded bytes.
    #[inline]
    pub fn into_bytes(self) -> Cow<'a, [u8]> {
        self.0
    }

    /// Converts the decoded bytes to a string.
    ///
    /// An error is returned if the decoded bytes are not valid UTF-8.
    #[inline]
    pub fn into_string(self) -> Result<Cow<'a, str>, FromUtf8Error> {
        // FIXME: A (maybe) more efficient approach: only validating encoded sequences.
        if self.0.is_borrowed() {
            let bytes = self.0.unwrap_borrowed();
            // SAFETY: If the bytes are borrowed, they must be valid UTF-8.
            Ok(Cow::borrowed(unsafe { str::from_utf8_unchecked(bytes) }))
        } else {
            String::from_utf8(self.0.into_owned()).map(Cow::owned)
        }
    }

    /// Converts the decoded bytes to a string lossily.
    #[inline]
    pub fn into_string_lossy(self) -> Cow<'a, str> {
        if self.0.is_borrowed() {
            let bytes = self.0.unwrap_borrowed();
            // SAFETY: If the bytes are borrowed, they must be valid UTF-8.
            Cow::borrowed(unsafe { str::from_utf8_unchecked(bytes) })
        } else {
            let bytes = self.0.into_owned();
            Cow::owned(match String::from_utf8_lossy(&bytes) {
                // SAFETY: If a borrowed string slice is returned, the bytes must be valid UTF-8.
                Borrowed(_) => unsafe { String::from_utf8_unchecked(bytes) },
                Owned(s) => s,
            })
        }
    }
}

/// A wrapper of borrowed percent-decoded bytes.
///
/// This struct is created by calling [`decode_with`] on an `EStr`.
///
/// [`decode_with`]: EStr::decode_with
#[derive(Clone, Copy, Debug)]
pub struct DecodeRef<'a> {
    bytes: &'a [u8],
    buffered: bool,
}

impl<'a> DecodeRef<'a> {
    /// Returns a reference to the decoded bytes.
    #[inline]
    pub fn as_bytes(self) -> &'a [u8] {
        self.bytes
    }

    /// Converts the decoded bytes to a string slice.
    ///
    /// An error is returned if the decoded bytes are not valid UTF-8.
    #[inline]
    pub fn to_str(self) -> Result<&'a str, Utf8Error> {
        if !self.buffered {
            // SAFETY: If the bytes are not buffered, they must be valid UTF-8.
            Ok(unsafe { str::from_utf8_unchecked(self.bytes) })
        } else {
            str::from_utf8(self.bytes)
        }
    }

    /// Converts the decoded bytes to a string lossily.
    #[inline]
    pub fn to_string_lossy(self) -> Cow<'a, str> {
        if !self.buffered {
            // SAFETY: If the bytes are not buffered, they must be valid UTF-8.
            Cow::borrowed(unsafe { str::from_utf8_unchecked(self.bytes) })
        } else {
            String::from_utf8_lossy(self.bytes).into()
        }
    }
}

/// An iterator over substrings of an `EStr` separated by a delimiter.
#[derive(Debug)]
pub struct Split<'a> {
    s: &'a [u8],
    delim: u8,
    pub(crate) finished: bool,
}

impl<'a> Iterator for Split<'a> {
    type Item = &'a EStr;

    #[inline]
    fn next(&mut self) -> Option<&'a EStr> {
        if self.finished {
            return None;
        }
        let res;
        match self.s.iter().position(|&x| x == self.delim) {
            Some(i) => {
                res = &self.s[..i];
                self.s = &self.s[i + 1..];
            }
            None => {
                self.finished = true;
                res = self.s;
            }
        }
        // SAFETY: Splitting at a reserved character leaves valid percent-encoded UTF-8.
        Some(unsafe { EStr::from_bytes(res) })
    }

    #[inline]
    fn size_hint(&self) -> (usize, Option<usize>) {
        if self.finished {
            (0, Some(0))
        } else {
            (1, Some(self.s.len() + 1))
        }
    }
}

impl<'a> DoubleEndedIterator for Split<'a> {
    #[inline]
    fn next_back(&mut self) -> Option<&'a EStr> {
        if self.finished {
            return None;
        }
        let res;
        match self.s.iter().rposition(|&x| x == self.delim) {
            Some(i) => {
                res = &self.s[i + 1..];
                self.s = &self.s[..i];
            }
            None => {
                self.finished = true;
                res = self.s;
            }
        }
        // SAFETY: Splitting at a reserved character leaves valid percent-encoded UTF-8.
        Some(unsafe { EStr::from_bytes(res) })
    }
}

#[cfg(test)]
mod tests {
    use super::{table::*, *};

    #[test]
    fn enc_dec_validate() {
        // TODO: Fuzz test
        let raw = "te😃a 测1`~!@试#$%st^&+=";
        let s = encode(raw, QUERY_FRAGMENT);
        assert_eq!(
            "te%F0%9F%98%83a%20%E6%B5%8B1%60~!@%E8%AF%95%23$%25st%5E&+=",
            s
        );
        assert!(validate(&*s, QUERY_FRAGMENT).is_ok());
        assert_eq!(Ok(raw.as_bytes()), decode(&*s).as_deref());
        assert_eq!(raw.as_bytes(), unsafe { decode_unchecked(s.as_bytes()) });

        assert_eq!(Ok(b"\x2d\xe6\xb5" as _), decode("%2D%E6%B5").as_deref());

        let s = "%2d%";
        assert_eq!(3, decode(s).unwrap_err().index());

        let s = "%2d%fg";
        assert_eq!(3, decode(s).unwrap_err().index());

        // We used to use slot 0 to indicate that percent-encoded octets are allowed,
        // which was totally wrong since it just allows zero bytes. Glad we fixed it.
        assert!(validate("\0", QUERY_FRAGMENT).is_err());
    }

    #[test]
    fn split() {
        let s = EStr::new("id=3&name=%E5%BC%A0%E4%B8%89");
        let mut split = s.split('&');

        let it = split.next().unwrap();
        assert_eq!(it, "id=3");
        assert_eq!(it.decode().as_bytes(), b"id=3");
        assert_eq!(it.decode().into_string().as_deref(), Ok("id=3"));

        let (k, v) = it.split_once('=').unwrap();
        assert_eq!(k, "id");
        assert_eq!(v, "3");

        let it = split.next().unwrap();
        assert_eq!(it, "name=%E5%BC%A0%E4%B8%89");
        assert_eq!(it.decode().into_string().unwrap(), "name=张三");

        let (k, v) = it.split_once('=').unwrap();
        assert_eq!(k.decode().into_string().unwrap(), "name");
        assert_eq!(v.decode().into_string().unwrap(), "张三");
    }
}
