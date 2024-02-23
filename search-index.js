var searchIndex = new Map(JSON.parse('[\
["fluent_uri",{"doc":"An RFC 3986 compliant generic URI parser and builder.","t":"FFFNNNNNNNNNNNNNNNNNNNNCNCNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNFGPPPPFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNPGFFPFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNCNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNCNNNNNNNNNNNNNNNNNNKFFFFFTFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSFSSNNNNNNNNNNNNNNNNNN","n":["Builder","ParseError","Uri","advance","as_ref","as_str","authority","authority","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","build","builder","clone","clone","clone_into","clone_into","cmp","component","default","encoding","eq","fmt","fmt","fmt","fmt","fragment","fragment","from","from","from","from","from_str","hash","host","host_port_from_socket_addr","into","into","into","into_input","into_string","is_absolute","is_relative","optional","parse","partial_cmp","path","path","plain","port","port_with_default","query","query","scheme","scheme","to_owned","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","userinfo","Authority","Host","Ipv4","Ipv6","IpvFuture","RegName","Scheme","as_str","as_str","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","eq","fmt","fmt","fmt","fmt","fmt","from","from","host","host_parsed","into","into","new","port","port_to_u16","to_owned","to_socket_addrs","to_string","to_string","try_from","try_from","try_into","try_into","try_new","type_id","type_id","type_id","userinfo","Borrowed","Decode","EStr","EString","Owned","Split","as_bytes","as_estr","as_ref","as_ref","as_ref","as_ref","as_str","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","capacity","clear","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","cmp","cmp","decode","default","default","deref","encode","encoder","eq","eq","eq","eq","eq","eq","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","hash","hash","into","into","into","into_bytes","into_iter","into_string","into_string","into_string_lossy","is_absolute","is_empty","is_rootless","len","new","new","next","next_back","partial_cmp","partial_cmp","push_byte","push_estr","reserve","reserve_exact","segments","split","split_once","table","to_owned","to_owned","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_into","try_into","try_into","try_new","type_id","type_id","type_id","type_id","with_capacity","Encoder","Fragment","Path","PathSegment","Query","RegName","TABLE","Userinfo","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","from","from","from","from","from","from","into","into","into","into","into","into","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","ALPHA","DIGIT","FRAGMENT","GEN_DELIMS","HEXDIG","IPV_FUTURE","PATH","PCHAR","QUERY","REG_NAME","RESERVED","SCHEME","SEGMENT_NZ_NC","SUB_DELIMS","Table","UNRESERVED","USERINFO","allows","allows_enc","borrow","borrow_mut","clone","clone_into","enc","fmt","from","gen","into","is_subset","or","sub","to_owned","try_from","try_into","type_id"],"q":[[0,"fluent_uri"],[75,"fluent_uri::component"],[120,"fluent_uri::encoding"],[224,"fluent_uri::encoding::encoder"],[274,"fluent_uri::encoding::table"],[309,"core::ops::function"],[310,"core::option"],[311,"alloc::string"],[312,"core::clone"],[313,"core::cmp"],[314,"core::fmt"],[315,"core::fmt"],[316,"core::hash"],[317,"core::net::socket_addr"],[318,"core::convert"],[319,"core::any"],[320,"core::num::error"],[321,"core::iter::traits::iterator"],[322,"std::io::error"],[323,"core::default"],[324,"core::convert"],[325,"core::fmt"],[326,"alloc::string"]],"d":["A builder for URI reference.","An error occurred when parsing URI references.","A URI reference defined in RFC 3986.","Advances the builder state, skipping optional components …","","Returns the value of the URI reference as a string slice.","Builds the authority component with the given function.","Returns the authority component.","","","","","Borrows this <code>Uri&lt;String&gt;</code> as <code>Uri&lt;&amp;str&gt;</code>.","","","","Builds the URI reference.","Creates a new builder for URI reference.","","","","","","Components of URI reference.","Creates an empty URI reference.","Utilities for percent-encoding.","","","","","","Sets the fragment component.","Returns the fragment component.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","Sets the host subcomponent of authority.","Sets the host and the port subcomponent of authority to …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Recovers the input that was attempted to parse into a <code>Uri</code>.","Consumes this <code>Uri&lt;String&gt;</code> and yields the underlying <code>String</code>.","Checks whether the URI reference is absolute, i.e., with a …","Checks whether the URI reference is relative, i.e., …","Optionally calls a builder method with a value.","Parses a URI reference from a string into a <code>Uri</code>.","","Sets the path component.","Returns the path component.","Returns the error with input erased.","Sets the port subcomponent of authority.","Sets the port subcomponent of authority, omitting it when …","Sets the query component.","Returns the query component.","Sets the scheme component.","Returns the scheme component.","","","Creates a new <code>Uri&lt;String&gt;</code> by cloning the contents of this …","","","","","","","","","","","","Sets the userinfo subcomponent of authority.","The authority component of URI reference.","The parsed host component of URI reference.","An IPv4 address.","An IPv6 address.","An IP address of future version.","A registered name.","The scheme component of URI reference.","Returns the scheme as a string slice.","Returns the authority as a string slice.","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the host subcomponent as a string slice.","Returns the parsed host subcomponent.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Converts a string slice to <code>&amp;Scheme</code>.","Returns the port subcomponent.","Converts the port subcomponent to <code>u16</code>.","","Converts the authority to an iterator of resolved …","","","","","","","Converts a string slice to <code>&amp;Scheme</code>, returning <code>None</code> if the …","","","","Returns the userinfo subcomponent.","No percent-encoded octets are decoded.","A wrapper of percent-decoded bytes.","Percent-encoded string slices.","A percent-encoded, growable string.","One or more percent-encoded octets are decoded.","An iterator over subslices of an <code>EStr</code> slice separated by a …","Returns a reference to the decoded bytes.","Coerces to an <code>EStr</code> slice.","","","","","Yields the underlying string slice.","","","","","","","","","","Invokes <code>capacity</code> on the underlying <code>String</code>.","Truncates this <code>EString</code> to zero length and casts it to …","","","","","","","","","","Decodes the <code>EStr</code> slice.","","Creates an empty <code>EStr</code> slice.","","Encodes a byte sequence with a sub-encoder and appends the …","Percent-encoders for URI components.","","","","","","","","","","","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Consumes this <code>Decode</code> and yields the underlying decoded …","","Consumes this <code>EString</code> and yields the underlying <code>String</code>.","Converts the decoded bytes to a string.","Converts the decoded bytes to a string, including invalid …","Checks whether the path is absolute, i.e., starting with …","Checks whether the <code>EStr</code> slice is empty.","Checks whether the path is rootless, i.e., not starting …","Returns the length of the <code>EStr</code> slice in bytes.","Creates a new empty <code>EString</code>.","Converts a string slice to an <code>EStr</code> slice.","","","","","Appends an unencoded byte onto the end of this <code>EString</code>.","Appends an <code>EStr</code> slice onto the end of this <code>EString</code>.","Invokes <code>reserve</code> on the underlying <code>String</code>.","Invokes <code>reserve_exact</code> on the underlying <code>String</code>.","Returns an iterator over the path segments.","Returns an iterator over subslices of the <code>EStr</code> slice …","Splits the <code>EStr</code> slice on the first occurrence of the given …","Byte pattern tables from RFC 3986.","","","","","","","","","","","","","Converts a string slice to an <code>EStr</code> slice, returning <code>None</code> …","","","","","Creates a new empty <code>EString</code> with a particular capacity.","A trait used by <code>EStr</code> and <code>EString</code> to specify the table used …","An encoder for fragment.","An encoder for path.","An encoder for path segment.","An encoder for query.","An encoder for registered name.","The table used for encoding.","An encoder for userinfo.","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","<code>ALPHA = %x41-5A / %x61-7A</code>","<code>DIGIT = %x30-39</code>","<code>fragment = *( pchar / &quot;/&quot; / &quot;?&quot; )</code>","<code>gen-delims = &quot;:&quot; / &quot;/&quot; / &quot;?&quot; / &quot;#&quot; / &quot;[&quot; / &quot;]&quot; / &quot;@&quot;</code>","<code>HEXDIG = DIGIT / &quot;A&quot; / &quot;B&quot; / &quot;C&quot; / &quot;D&quot; / &quot;E&quot; / &quot;F&quot;</code>","…","<code>path = *( pchar / &quot;/&quot; )</code>","<code>pchar = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</code>","<code>query = *( pchar / &quot;/&quot; / &quot;?&quot; )</code>","<code>reg-name = *( unreserved / pct-encoded / sub-delims )</code>","<code>reserved = gen-delims / sub-delims</code>","<code>scheme = ALPHA *( ALPHA / DIGIT / &quot;+&quot; / &quot;-&quot; / &quot;.&quot; )</code>","…","…","A table determining the byte patterns allowed in a string.","<code>unreserved = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</code>","<code>userinfo = *( unreserved / pct-encoded / sub-delims / &quot;:&quot; )</code>","Checks whether the given unencoded byte is allowed by the …","Checks whether percent-encoded octets are allowed by the …","","","","","Marks this table as allowing percent-encoded octets.","","Returns the argument unchanged.","Generates a table that only allows the given unencoded …","Calls <code>U::from(self)</code>.","Checks whether the table is a subset of another, i.e., …","Combines two tables into one.","Subtracts from this table.","","","",""],"i":[0,0,0,1,2,2,1,2,1,9,2,2,2,1,9,2,1,2,9,2,9,2,2,0,2,0,2,9,9,2,2,1,2,1,9,2,2,2,2,1,1,1,9,2,9,2,2,2,1,2,2,1,2,9,1,1,1,2,1,2,9,2,2,9,2,1,9,2,1,9,2,1,9,2,1,0,0,20,20,20,20,0,27,6,27,6,20,27,6,20,20,20,20,27,27,6,6,20,6,20,6,6,6,20,27,6,6,20,6,27,6,6,20,6,20,27,27,6,20,6,34,0,0,0,34,0,34,37,37,37,17,17,17,37,37,17,34,40,37,17,34,40,37,37,37,34,40,37,17,34,40,37,17,17,37,17,37,37,0,37,37,37,37,37,17,17,17,17,37,37,17,17,34,40,37,37,34,40,37,17,37,34,40,34,40,37,34,34,17,17,17,17,37,17,40,40,37,17,37,37,37,37,17,17,17,0,37,17,34,40,37,17,37,34,40,37,34,40,17,37,17,34,40,37,0,0,0,0,0,0,38,0,29,51,25,47,26,16,29,51,25,47,26,16,29,51,25,47,26,16,29,51,25,47,26,16,29,51,25,47,26,16,29,51,25,47,26,16,29,51,25,47,26,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50],"f":"```{{{b{e}}}{{b{c}}}`{{`{c}}}}{{{d{c}}}f`}0{{{b{c}}g}{{b{`}}}{{`{`}}}{{`{`}}}{{j{{b{`}}}{{h{{b{e}}}}}}}}{{{d{c}}}{{n{{l{c}}}}}`}{ce{}{}}003{{{d{A`}}}{{d{f}}}}111{{{b{c}}}{{d{A`}}}{{`{`}}}}{{}b}{{{Ab{c}}}{{Ab{c}}}Ad}{{{d{c}}}{{d{c}}}Ad}{{ce}Af{}{}}0{{{d{c}}{d{c}}}Ah`}`{{}{{d{c}}}`}`{{{d{c}}{d{e}}}Aj``}{{{Ab{c}}Al}An{}}0{{{d{c}}Al}An`}0{{{b{c}}{Bb{B`}}}{{b{`}}}{{`{`}}}}{{{d{c}}}{{n{{Bb{B`}}}}}`}{cc{}}00{{{d{f}}}{{d{A`}}}}{f{{Bd{{d{A`}}c}}}{}}{{{d{c}}e}Af`Bf}{{{b{c}}Bh}{{b{`}}}{{`{`}}}}{{{b{c}}eBj}{{b{`}}}{{`{`}}}{{Bn{Bl}}}}{ce{}{}}00{{{Ab{c}}}c`}{{{d{A`}}}A`}{{{d{c}}}Aj`}0{{{b{e}}i{n{g}}}{{b{c}}}`{{`{c}}}{}{{j{{b{e}}g}{{h{{b{c}}}}}}}}{e{{Bd{{d{c}}}}}{}{{`{}{{C`{c}}}}}}{{{d{c}}{d{c}}}{{n{Ah}}}`}{{{b{c}}{Bb{Cb}}}{{b{`}}}{{`{`}}}}{{{d{c}}}{{Bb{Cb}}}`}{{{Ab{c}}}Ab`}{{{b{c}}e}{{b{`}}}{{`{`}}}`}{{{b{c}}BjBj}{{b{`}}}{{`{`}}}}{{{b{c}}{Bb{Cd}}}{{b{`}}}{{`{`}}}}{{{d{c}}}{{n{{Bb{Cd}}}}}`}{{{b{c}}Cf}{{b{`}}}{{`{`}}}}{{{d{c}}}{{n{Cf}}}`}??{{{d{f}}}{{d{A`}}}}{cA`{}}0{c{{Bd{e}}}{}{}}00000{cCh{}}00{{{b{c}}{Bb{Cj}}}{{b{`}}}{{`{`}}}}```````{Cff}{{{l{c}}}f`}{ce{}{}}00000{BhBh}{{ce}Af{}{}}{{BhBh}Aj}{{CfAl}An}0{{{l{c}}Al}An`}0{{BhAl}An}{cc{}}08{{{l{c}}}Bh`}88{fCf}{{{l{c}}}{{n{f}}}`}{{{l{c}}}{{Bd{{n{Bj}}Cl}}}`};{{{l{c}}Bj}{{Db{{`{{D`{}{{Cn{Bl}}}}}}}}}`}{cA`{}}0{c{{Bd{e}}}{}{}}000{f{{n{Cf}}}}{cCh{}}00{{{l{c}}}{{n{{Bb{Cj}}}}}`}``````{Dd{{Dh{Df}}}}{{{Dj{c}}}{{Bb{c}}}Dl}{{{Dj{c}}}fDl}1{{{Bb{c}}}fDl}{{{Bb{c}}}{{Bb{c}}}Dl}13{ce{}{}}0000000{{{Dj{c}}}DnDl}{{{Dj{c}}}{{Dj{e}}}DlDl}{{{Dj{c}}}{{Dj{c}}}{AdDl}}{DdDd}{{{E`{c}}}{{E`{c}}}{AdDl}}{{ce}Af{}{}}{{{Bb{c}}{Dj{c}}}AfDl}11{{{Dj{c}}{Dj{c}}}AhDl}{{{Bb{c}}{Bb{c}}}AhDl}{{{Bb{c}}}DdDl}{{}{{Dj{c}}}{EbDl}}{{}{{Bb{c}}}Dl}{{{Dj{c}}}{{Bb{c}}}Dl}{{{Dj{c}}e}AfDl{{Ed{{Dh{Df}}}}Ef}}`{{{Dj{c}}f}AjDl}{{{Dj{c}}{Bb{c}}}AjDl}{{{Dj{c}}{Dj{c}}}AjDl}12{{{Bb{c}}{Dj{c}}}AjDl}{{{Bb{c}}{Bb{c}}}AjDl}{{{Bb{c}}f}AjDl}2{{{Dj{c}}Al}AnDl}0{{{Bb{c}}Al}AnDl}0{{DdAl}An}{{{E`{c}}Al}An{EhDl}}{cc{}}{{{Bb{c}}}{{Dj{c}}}Dl}11{{{Dj{c}}e}AfDlBf}{{{Bb{c}}e}AfDlBf}{ce{}{}}00{Dd{{Ej{{Dh{Df}}}}}}1{{{Dj{c}}}A`Dl}{Dd{{Bd{{Ej{f}}El}}}}{Dd{{Ej{f}}}}{{{Bb{Cb}}}Aj}{{{Bb{c}}}AjDl}1{{{Bb{c}}}DnDl}{{}{{Dj{c}}}Dl}{f{{Bb{c}}}Dl}{{{E`{c}}}{{n{{Bb{c}}}}}Dl}0{{{Dj{c}}{Dj{c}}}{{n{Ah}}}Dl}{{{Bb{c}}{Bb{c}}}{{n{Ah}}}Dl}{{{Dj{c}}Df}AfDl}{{{Dj{c}}{Bb{e}}}AfDlDl}{{{Dj{c}}Dn}AfDl}0{{{Bb{Cb}}}{{E`{En}}}}{{{Bb{c}}F`}{{E`{c}}}Dl}{{{Bb{c}}F`}{{n{{Fb{{Bb{c}}{Bb{c}}}}}}}Dl}`{ce{}{}}{{{Bb{c}}}{{Dj{c}}}Dl}11{cA`{}}0{c{{Bd{e}}}{}{}}00000{f{{n{{Bb{c}}}}}Dl}{cCh{}}000{Dn{{Dj{c}}}Dl}````````666666666666{cc{}}00000777777444444444444222222`````````````````{{FdDf}Aj}{FdAj}99{FdFd}{{ce}Af{}{}}1{{FdAl}An}5{{{Dh{Df}}}Fd}={{FdFd}Aj}{{FdFd}Fd}0?<<:","c":[],"p":[[5,"Builder",0],[5,"Uri",0],[1,"str"],[17,"Output"],[10,"FnOnce",309],[5,"Authority",75],[6,"Option",310],[5,"String",311],[5,"ParseError",0],[10,"Clone",312],[1,"unit"],[6,"Ordering",313],[1,"bool"],[5,"Formatter",314],[8,"Result",314],[5,"Fragment",224],[5,"EStr",120],[6,"Result",315],[10,"Hasher",316],[6,"Host",75],[1,"u16"],[6,"SocketAddr",317],[10,"Into",318],[17,"Data"],[5,"Path",224],[5,"Query",224],[5,"Scheme",75],[5,"TypeId",319],[5,"Userinfo",224],[5,"ParseIntError",320],[17,"Item"],[10,"Iterator",321],[8,"Result",322],[6,"Decode",120],[1,"u8"],[1,"slice"],[5,"EString",120],[10,"Encoder",224],[1,"usize"],[5,"Split",120],[10,"Default",323],[10,"AsRef",318],[10,"Sized",324],[10,"Debug",314],[6,"Cow",325],[5,"FromUtf8Error",311],[5,"PathSegment",224],[1,"char"],[1,"tuple"],[5,"Table",274],[5,"RegName",224]],"b":[[11,"impl-Borrow%3Cstr%3E-for-Uri%3CT%3E"],[12,"impl-Uri%3CString%3E"],[27,"impl-Display-for-ParseError%3CI%3E"],[28,"impl-Debug-for-ParseError%3CI%3E"],[29,"impl-Display-for-Uri%3CT%3E"],[30,"impl-Debug-for-Uri%3CT%3E"],[93,"impl-Debug-for-Scheme"],[94,"impl-Display-for-Scheme"],[95,"impl-Debug-for-Authority%3CT%3E"],[96,"impl-Display-for-Authority%3CT%3E"],[128,"impl-AsRef%3Cstr%3E-for-EString%3CE%3E"],[129,"impl-AsRef%3CEStr%3CE%3E%3E-for-EString%3CE%3E"],[130,"impl-AsRef%3Cstr%3E-for-EStr%3CE%3E"],[131,"impl-AsRef%3CEStr%3CE%3E%3E-for-EStr%3CE%3E"],[159,"impl-PartialEq%3Cstr%3E-for-EString%3CE%3E"],[160,"impl-PartialEq%3CEStr%3CE%3E%3E-for-EString%3CE%3E"],[161,"impl-PartialEq-for-EString%3CE%3E"],[162,"impl-PartialEq%3C%26EStr%3CE%3E%3E-for-EString%3CE%3E"],[163,"impl-PartialEq%3C%26str%3E-for-EString%3CE%3E"],[164,"impl-PartialEq%3CEString%3CE%3E%3E-for-%26EStr%3CE%3E"],[165,"impl-PartialEq-for-EStr%3CE%3E"],[166,"impl-PartialEq%3Cstr%3E-for-EStr%3CE%3E"],[167,"impl-PartialEq%3CEString%3CE%3E%3E-for-EStr%3CE%3E"],[168,"impl-Debug-for-EString%3CE%3E"],[169,"impl-Display-for-EString%3CE%3E"],[170,"impl-Display-for-EStr%3CE%3E"],[171,"impl-Debug-for-EStr%3CE%3E"]]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
