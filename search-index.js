var searchIndex = JSON.parse('{\
"fluent_uri":{"doc":"A URI parser that strictly adheres to IETF RFC 3986.","t":[3,4,13,13,13,13,13,3,13,3,3,4,13,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,3,4,4,13,13,18,3,3,3,3,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,3,4,13,13,13,3,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12],"n":["Authority","Host","InvalidIpLiteral","InvalidOctet","Ipv4","Ipv6","IpvFuture","Path","RegName","Scheme","SyntaxError","SyntaxErrorKind","UnexpectedChar","Uri","as_estr","as_str","as_str","as_str","as_str","authority","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","drop","encoding","eq","eq","eq","eq_lowercase","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fragment","from","from","from","from","from","host","host_raw","index","into","into","into","into","into","into_mut_bytes","into_owned","into_path_mut","into_string","is_absolute","is_absolute","is_relative","is_rootless","kind","make_lowercase","mutable","ne","ne","parse","parse_from","parse_mut","path","port","port_raw","query","scheme","scheme_mut","segments","take_authority_mut","take_fragment_mut","take_query_mut","to_lowercase","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","to_string","to_string","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","userinfo","0","0","0","addr","ver","Decode","DecodeInPlace","DecodeRef","Dst","Dst","EMPTY","EStr","EStrMut","Split","SplitMut","Src","Src","as_bytes","as_bytes","as_bytes","as_ref","as_ref","as_str","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","decode","decode_in_place","decode_with","decoded_any","decoded_any","decoded_any","deref","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","hash","into","into","into","into","into","into","into_bytes","into_iter","into_iter","into_mut_bytes","into_mut_bytes","into_string","into_string_lossy","new","next","next","next_back","next_back","size_hint","size_hint","split","split_mut","split_once","split_once_mut","to_owned","to_str","to_str","to_string","to_string_lossy","to_string_lossy","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","0","0","0","0","AuthorityMut","HostMut","Ipv4","Ipv6","IpvFuture","PathMut","RegName","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","deref","deref","drop","fmt","fmt","fmt","from","from","from","into","into","into","into_estr_mut","into_host_mut","into_host_raw_mut","into_mut_bytes","segments_mut","take_userinfo_mut","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","0","0","0","addr","ver"],"q":["fluent_uri","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fluent_uri::Host","","","","","fluent_uri::encoding","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fluent_uri::encoding::DecodeInPlace","","fluent_uri::encoding::DecodeRef","","fluent_uri::mutable","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fluent_uri::mutable::HostMut","","","",""],"d":["The authority component of URI reference.","The host subcomponent of authority.","Invalid IP literal.","Invalid percent-encoded octet that is either …","An IPv4 address.","An IPv6 address.","An IP address of future version.","The path component of URI reference.","A registered name.","The scheme component of URI reference.","A syntax error occurred when parsing, decoding or …","Detailed cause of a <code>SyntaxError</code>.","Unexpected character that is not allowed by the URI syntax.","A URI reference defined in RFC 3986.","Returns the path as an <code>EStr</code> slice.","Returns the URI reference as a string slice.","Returns the raw authority component as a string slice.","Returns the scheme as a string slice in the raw form.","Returns the path as a string slice.","Returns the authority component.","Borrows this <code>Uri&lt;String&gt;</code> as a reference to <code>Uri&lt;&amp;str&gt;</code>.","","","","","","","","","","","","","","","","","","","","","","","","Utilities for percent-encoding.","","","","Checks if the scheme equals case-insensitively with a …","","","","","","","","","","","","","","","","","","","","Returns the fragment component.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the parsed host subcomponent.","Returns the raw host subcomponent as a string slice.","Returns the index where the error occurred in the input …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Consumes this <code>Uri</code> and yields the underlying mutable byte …","Consumes this <code>Uri&lt;&amp;str&gt;</code> and creates a new <code>Uri&lt;String&gt;</code> by …","Consumes this <code>Uri</code> and returns the mutable path component.","Consumes the <code>Uri</code> and yields the <code>String</code> storage.","Returns <code>true</code> if the URI reference is absolute, i.e., with …","Returns <code>true</code> if the path is absolute, i.e., beginning with …","Returns <code>true</code> if the URI reference is relative, i.e., …","Returns <code>true</code> if the path is rootless, i.e., not beginning …","Returns the detailed cause of the error.","Converts the scheme to its lowercase equivalent in-place.","Mutable URI components that allow in-place …","","","Parses a URI reference from a byte sequence into a …","Parses a URI reference from a <code>String</code> or <code>Vec&lt;u8&gt;</code> into a …","Parses a URI reference from a mutable byte sequence into a …","Returns the path component.","Parses the port subcomponent as <code>u16</code>.","Returns the raw port subcomponent as a string slice.","Returns the query component.","Returns the scheme component.","Returns the mutable scheme component.","Returns an iterator over the segments of the path.","Takes the mutable authority component out of the <code>Uri</code>, …","Takes the mutable fragment component out of the <code>Uri</code>, …","Takes the mutable query component out of the <code>Uri</code>, leaving …","Returns the scheme as a string in the lowercase form.","","Creates a new <code>Uri&lt;String&gt;</code> by cloning the contents of this …","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the userinfo subcomponent.","","","","The address.","The version.","A wrapper of percent-decoded bytes.","A wrapper of in-place percent-decoded bytes.","A wrapper of borrowed percent-decoded bytes.","Something decoded, i.e., borrowed from the buffer.","Something decoded.","An empty <code>EStr</code>.","Percent-encoded string slices.","A wrapper around a mutable <code>EStr</code> slice that allows in-place …","An iterator over subslices of an <code>EStr</code> separated by a …","An iterator over mutable subslices of an <code>EStrMut</code> separated …","Nothing decoded, i.e., borrowed from the source.","Nothing decoded.","Returns a reference to the decoded bytes.","Returns a reference to the decoded bytes.","Returns a reference to the decoded bytes.","","","Yields the underlying string slice.","","","","","","","","","","","","","","","","","Decodes the <code>EStr</code>.","Decodes the <code>EStrMut</code> in-place.","Decodes the <code>EStr</code> with a buffer.","Returns <code>true</code> if anything is decoded, i.e., the underlying …","Returns <code>true</code> if anything is decoded.","Returns <code>true</code> if anything is decoded.","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Yields the underlying decoded bytes.","","","Consumes this <code>EStrMut</code> and yields the underlying mutable …","Consumes this <code>DecodeInPlace</code> and yields the underlying …","Converts the decoded bytes to a string.","Converts the decoded bytes to a string lossily.","Converts a string slice to an <code>EStr</code>.","","","","","","","Returns an iterator over subslices separated by the given …","Returns an iterator over mutable subslices separated by …","Splits the <code>EStr</code> on the first occurrence of the given …","Splits the <code>EStrMut</code> on the first occurrence of the given …","","Converts the decoded bytes to a string slice.","Converts the decoded bytes to a string slice.","","Converts the decoded bytes to a string lossily.","Converts the decoded bytes to a string lossily.","","","","","","","","","","","","","","","","","","","","","","","","A mutable authority component.","A mutable host subcomponent of authority.","An IPv4 address.","An IPv6 address.","An IP address of future version.","A mutable path component.","A registered name.","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Consumes this <code>PathMut</code> and yields the underlying <code>EStrMut</code>.","Consumes this <code>AuthorityMut</code> and returns the parsed mutable …","Consumes this <code>AuthorityMut</code> and returns the raw mutable …","Consumes this <code>AuthorityMut</code> and yields the underlying …","Returns an iterator over the mutable segments of the path.","Takes the mutable userinfo subcomponent out of the …","","","","","","","","","","","","","The address.","The version."],"i":[0,0,1,1,2,2,2,0,2,0,0,0,1,0,3,4,5,6,3,4,4,4,5,1,7,6,2,3,4,5,1,7,6,2,3,4,1,7,2,4,1,7,2,4,0,1,7,2,6,4,4,4,4,4,5,5,5,5,5,1,7,7,6,6,2,2,3,3,4,4,5,1,7,2,5,5,7,4,5,1,7,2,4,4,4,4,4,3,4,3,7,6,0,7,2,4,4,4,4,5,5,4,4,4,3,4,4,4,6,4,4,1,7,2,4,5,7,6,2,3,4,5,1,7,2,4,5,1,7,2,4,5,1,7,6,2,3,5,8,9,10,11,11,0,0,0,12,13,14,0,0,0,0,12,13,15,12,13,14,14,14,14,16,15,12,13,17,18,14,16,15,12,13,17,18,12,12,14,16,14,15,12,13,16,14,14,14,14,16,15,12,13,17,18,16,15,12,13,17,18,14,16,15,12,13,17,18,15,17,18,16,13,15,15,14,17,18,17,18,17,18,14,16,14,16,12,12,13,14,12,13,16,15,12,13,17,18,16,15,12,13,17,18,14,16,15,12,13,17,18,19,20,21,22,0,0,23,23,23,0,23,24,23,25,24,23,25,24,25,24,24,23,25,24,23,25,24,23,25,25,24,24,24,25,24,24,23,25,24,23,25,24,23,25,26,27,28,29,29],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["estr",3]],[[["",0]],["str",0]],[[["",0]],["str",0]],[[["",0]],["str",0]],[[["",0]],["str",0]],[[["",0]],["option",4,[["authority",3]]]],[[["",0]],["uri",3]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[["",0]],["syntaxerrorkind",4]],[[["",0]],["syntaxerror",3]],[[["",0]],["host",4]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0]]],null,[[["",0],["syntaxerrorkind",4]],["bool",0]],[[["",0],["syntaxerror",3]],["bool",0]],[[["",0],["host",4]],["bool",0]],[[["",0],["str",0]],["bool",0]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0]],["option",4,[["estr",3]]]],[[]],[[]],[[]],[[]],[[]],[[["",0]],["host",4]],[[["",0]],["str",0]],[[],["usize",0]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["uri",3,[["string",3]]]],[[],["pathmut",3]],[[],["string",3]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[],["syntaxerrorkind",4]],[[["",0]],["str",0]],null,[[["",0],["syntaxerror",3]],["bool",0]],[[["",0],["host",4]],["bool",0]],[[["",0]],["result",4,[["uri",3,[["str",0]]],["syntaxerror",3]]]],[[["buf",8]],["result",4,[["uri",3,[["string",3]]]]]],[[["",0]],["result",4,[["uri",3],["syntaxerror",3]]]],[[["",0]],["path",3]],[[["",0]],["option",4,[["result",4,[["u16",0],["str",0]]]]]],[[["",0]],["option",4,[["str",0]]]],[[["",0]],["option",4,[["estr",3]]]],[[["",0]],["option",4,[["scheme",3]]]],[[["",0]],["option",4,[["scheme",3]]]],[[["",0]],["split",3]],[[["",0]],["option",4,[["authoritymut",3]]]],[[["",0]],["option",4,[["estrmut",3]]]],[[["",0]],["option",4,[["estrmut",3]]]],[[["",0]],["string",3]],[[["",0]]],[[["",0]],["uri",3,[["string",3]]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["option",4,[["estr",3]]]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]],["str",0]],[[["",0]]],[[["",0]],["str",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["decoderef",4]],[[["",0],["",0]]],[[["",0]],["decode",3]],[[],["decodeinplace",4]],[[["",0],["vec",3]],["decoderef",4]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[["",0]],["estr",3]],[[["",0],["str",0]],["bool",0]],[[["",0],["estr",3]],["bool",0]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[["",0],["",0]]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["cow",4]],[[]],[[]],[[]],[[]],[[],["result",4,[["cow",4,[["str",0]]],["fromutf8error",3]]]],[[],["cow",4,[["str",0]]]],[[["str",0]],["estr",3]],[[["",0]],["option",4,[["estr",3]]]],[[["",0]],["option",4,[["estrmut",3]]]],[[["",0]],["option",4,[["estr",3]]]],[[["",0]],["option",4,[["estrmut",3]]]],[[["",0]]],[[["",0]]],[[["",0],["char",0]],["split",3]],[[["char",0]],["splitmut",3]],[[["",0],["char",0]],["option",4]],[[["char",0]],["result",4]],[[["",0]]],[[["",0]],["result",4,[["str",0],["utf8error",3]]]],[[["",0]],["result",4,[["str",0],["utf8error",3]]]],[[["",0]],["string",3]],[[["",0]],["cow",4,[["str",0]]]],[[["",0]],["cow",4,[["str",0]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["authority",3]],[[["",0]],["path",3]],[[["",0]]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["estrmut",3]],[[],["hostmut",4]],[[]],[[]],[[],["splitmut",3]],[[["",0]],["option",4,[["estrmut",3]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null,null,null,null,null],"p":[[4,"SyntaxErrorKind"],[4,"Host"],[3,"Path"],[3,"Uri"],[3,"Authority"],[3,"Scheme"],[3,"SyntaxError"],[13,"Ipv4"],[13,"Ipv6"],[13,"RegName"],[13,"IpvFuture"],[4,"DecodeRef"],[4,"DecodeInPlace"],[3,"EStr"],[3,"Decode"],[3,"EStrMut"],[3,"Split"],[3,"SplitMut"],[13,"Src"],[13,"Dst"],[13,"Src"],[13,"Dst"],[4,"HostMut"],[3,"AuthorityMut"],[3,"PathMut"],[13,"Ipv4"],[13,"Ipv6"],[13,"RegName"],[13,"IpvFuture"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};