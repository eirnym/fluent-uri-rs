var searchIndex = JSON.parse('{\
"fluent_uri":{"doc":"A URI parser that strictly adheres to IETF RFC 3986.","t":[3,3,4,13,13,13,13,13,3,4,3,13,3,13,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,4,4,13,13,3,3,3,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12],"n":["Authority","Host","HostData","InvalidIpLiteral","InvalidOctet","Ipv4","Ipv6","IpvFuture","ParseError","ParseErrorKind","Path","RegName","Scheme","UnexpectedChar","Uri","View","as_estr","as_ref","as_str","as_str","as_str","as_str","as_str","authority","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","data","decode_in_place","deref","dup","enc","eq","eq","eq","eq_lowercase","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fragment","from","from","from","from","from","from","from","host","index","into","into","into","into","into","into","into","into_bytes","into_estr_view","into_ref","into_str_view","into_str_view","into_string","is_absolute","is_absolute","is_relative","is_rootless","kind","make_lowercase","ne","ne","parse","parse_from","parse_mut","path","port","query","scheme","segments","segments_view","split_once_view","split_view","take_authority","take_fragment","take_host","take_path","take_port","take_query","take_scheme","take_userinfo","to_lowercase","to_owned","to_owned","to_owned","to_owned","to_owned","to_string","to_string","to_string","to_string","to_string","to_string","to_string","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","unwrap_reg_name","userinfo","0","0","addr","addr","ver","zone_id","Decode","DecodeInPlace","Dst","Dst","EStr","Split","SplitView","Src","Src","as_bytes","as_bytes","as_ref","as_ref","as_str","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","decode","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","hash","into","into","into","into","into_bytes","into_bytes","into_iter","into_iter","into_str","into_str_view","into_string","into_string_lossy","into_string_lossy","new","next","next","next_back","next_back","size_hint","size_hint","split","split_once","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","0","0","0","0"],"q":["fluent_uri","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fluent_uri::HostData","","","","","","fluent_uri::enc","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fluent_uri::enc::Decode","","fluent_uri::enc::DecodeInPlace",""],"d":["The authority component of URI reference.","The host subcomponent of authority.","Structured host data.","Invalid IP literal address.","Invalid percent-encoded octet that is either …","An IPv4 address.","An IPv6 address.","An IP address of future version.","An error occurred when parsing URI references.","Detailed cause of a <code>ParseError</code>.","The path component of URI reference.","A registered name.","The scheme component of URI reference.","Unexpected character that is not allowed by the URI syntax.","A URI reference defined in RFC 3986.","A smart pointer that allows viewing a mutable byte slice …","Yields the underlying <code>EStr</code>.","","Returns the URI reference as a string slice.","Returns the raw scheme as a string slice.","Returns the authority as a string slice.","Returns the host as a string slice.","Returns the path as a string slice.","Returns the authority component.","","","Borrows this <code>Uri&lt;String&gt;</code> as a reference to <code>Uri&lt;&amp;str&gt;</code>.","","","","","","","","","","","","","","","","","","","","","","","","","Returns the structured host data.","Decodes the <code>View&lt;EStr&gt;</code> in-place.","","Duplicates this <code>Uri&lt;&amp;str&gt;</code>.","Utilities for percent-encoding.","","","","Checks if the scheme equals case-insensitively with a …","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the fragment component.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the host subcomponent.","Returns the index where the error occurred in the input …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Consumes this <code>View</code> and yields the underlying mutable byte …","Consumes this <code>View&lt;Path&gt;</code> and yields the underlying …","Consumes this <code>View</code> and yields the underlying <code>&amp;T</code>.","Consumes this <code>View&lt;Host&gt;</code> and yields the underlying …","Consumes this <code>View&lt;Authority&gt;</code> and yields the underlying …","Consumes this <code>Uri</code> and yields the underlying <code>String</code> storage.","Returns <code>true</code> if the URI reference is absolute, i.e., with …","Returns <code>true</code> if the path is absolute, i.e., beginning with …","Returns <code>true</code> if the URI reference is relative, i.e., …","Returns <code>true</code> if the path is rootless, i.e., not beginning …","Returns the detailed cause of the error.","Converts the scheme to lower case in-place.","","","Parses a URI reference from a byte sequence into a …","Parses a URI reference from a <code>String</code> or <code>Vec&lt;u8&gt;</code> into a …","Parses a URI reference from a mutable byte sequence into a …","Returns the path component.","Returns the port subcomponent.","Returns the query component.","Returns the scheme component.","Returns an iterator over the path segments.","Returns an iterator over the views of path segments.","Splits the <code>View&lt;EStr&gt;</code> on the first occurrence of the given …","Returns an iterator over subslices of the <code>View&lt;EStr&gt;</code> …","Takes a view of the authority component, leaving a <code>None</code> in …","Takes a view of the fragment component, leaving a <code>None</code> in …","Takes a view of the host subcomponent.","Takes a view of the path component.","Takes a view of the port subcomponent, leaving a <code>None</code> in …","Takes a view of the query component, leaving a <code>None</code> in its …","Takes a view of the scheme component, leaving a <code>None</code> in …","Takes a view of the userinfo subcomponent, leaving a <code>None</code> …","Returns the scheme as a string in lower case.","Creates a new <code>Uri&lt;String&gt;</code> by cloning the contents of this …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Consumes this <code>View&lt;Host&gt;</code> and yields the underlying …","Returns the userinfo subcomponent.","","","The address.","The address.","The version.","An optional zone identifier.","A wrapper of percent-decoded bytes.","A wrapper of in-place percent-decoded bytes.","One or more percent-encoded octets are decoded.","One or more percent-encoded octets are decoded.","Percent-encoded string slices.","An iterator over subslices of an <code>EStr</code> separated by a …","An iterator over subslices of a <code>View&lt;EStr&gt;</code> separated by a …","No percent-encoded octets are decoded.","No percent-encoded octets are decoded.","Returns a reference to the decoded bytes.","Returns a reference to the decoded bytes.","","","Yields the underlying string slice.","","","","","","","","","","","Decodes the <code>EStr</code>.","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Consumes this <code>Decode</code> and yields the underlying decoded …","Consumes this <code>DecodeInPlace</code> and yields the underlying …","","","Converts the decoded bytes to a string slice.","Converts the decoded bytes to a <code>View&lt;str&gt;</code>.","Converts the decoded bytes to a string.","Converts the decoded bytes to a string lossily.","Converts the decoded bytes to a string lossily.","Converts a string slice to an <code>EStr</code>.","","","","","","","Returns an iterator over subslices of the <code>EStr</code> separated …","Splits the <code>EStr</code> on the first occurrence of the given …","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,1,1,2,2,2,0,0,0,2,0,1,0,0,3,4,5,6,7,8,3,5,4,5,5,6,7,8,3,1,9,2,4,5,6,7,8,3,1,9,2,5,1,9,2,5,1,9,2,8,4,4,5,0,1,9,2,6,4,4,5,5,5,5,5,6,6,7,7,7,7,7,8,8,8,8,8,8,3,3,1,9,9,2,5,4,5,7,8,1,9,2,7,9,4,5,7,8,1,9,2,4,4,4,4,4,5,5,3,5,3,9,4,9,2,5,5,5,5,7,5,5,3,4,4,4,5,5,4,5,4,5,5,4,6,5,5,1,9,2,4,5,6,7,8,3,9,4,5,7,8,1,9,2,4,5,7,8,1,9,2,4,5,6,7,8,3,1,9,2,4,7,10,11,12,13,13,12,0,0,14,15,0,0,0,14,15,14,15,16,16,16,16,14,15,17,18,16,14,15,17,18,16,16,16,16,16,14,15,17,18,14,15,17,18,16,14,15,17,18,14,15,17,18,15,15,14,14,15,16,17,18,17,18,17,18,16,16,16,14,15,17,18,14,15,17,18,16,14,15,17,18,19,20,21,22],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]],["estr",3]],[[["",0]],["",0]],[[["",0]],["str",0]],[[["",0]],["str",0]],[[["",0]],["str",0]],[[["",0]],["str",0]],[[["",0]],["str",0]],[[["",0]],["option",4,[["authority",3]]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["uri",3]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]]],[[["",0]],["parseerrorkind",4]],[[["",0]],["parseerror",3]],[[["",0]],["hostdata",4]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0]],["hostdata",4]],[[],["decodeinplace",4]],[[["",0]],["",0]],[[["",0]],["uri",3,[["str",0]]]],null,[[["",0],["parseerrorkind",4]],["bool",0]],[[["",0],["parseerror",3]],["bool",0]],[[["",0],["hostdata",4]],["bool",0]],[[["",0],["str",0]],["bool",0]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0]],["option",4,[["estr",3]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[["",0]],["host",3]],[[["",0]],["usize",0]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["view",3,[["estr",3]]]],[[],["",0]],[[],["view",3,[["str",0]]]],[[],["view",3,[["str",0]]]],[[],["string",3]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[["",0]],["bool",0]],[[["",0]],["parseerrorkind",4]],[[["",0]]],[[["",0],["parseerror",3]],["bool",0]],[[["",0],["hostdata",4]],["bool",0]],[[["",0]],["result",4,[["uri",3,[["str",0]]],["parseerror",3]]]],[[["intoowneduri",8]],["result",4,[["uri",3,[["string",3]]]]]],[[["",0]],["result",4,[["uri",3],["parseerror",3]]]],[[["",0]],["path",3]],[[["",0]],["option",4,[["str",0]]]],[[["",0]],["option",4,[["estr",3]]]],[[["",0]],["option",4,[["scheme",3]]]],[[["",0]],["split",3]],[[],["splitview",3]],[[["char",0]],["result",4]],[[["char",0]],["splitview",3]],[[["",0]],["option",4,[["view",3,[["authority",3]]]]]],[[["",0]],["option",4,[["view",3,[["estr",3]]]]]],[[["",0]],["view",3,[["host",3]]]],[[["",0]],["view",3,[["path",3]]]],[[["",0]],["option",4,[["view",3,[["str",0]]]]]],[[["",0]],["option",4,[["view",3,[["estr",3]]]]]],[[["",0]],["option",4,[["view",3,[["scheme",3]]]]]],[[["",0]],["option",4,[["view",3,[["estr",3]]]]]],[[["",0]],["string",3]],[[["",0]],["uri",3,[["string",3]]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[["",0]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[],["view",3,[["estr",3]]]],[[["",0]],["option",4,[["estr",3]]]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[["",0]]],[[["",0]]],[[["",0]],["str",0]],[[["",0]]],[[["",0]],["str",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["decode",4]],[[["",0],["estr",3]],["bool",0]],[[["",0],["str",0]],["bool",0]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[["",0],["",0]]],[[]],[[]],[[]],[[]],[[],["cow",4]],[[]],[[]],[[]],[[],["result",4,[["str",0]]]],[[],["result",4,[["view",3,[["str",0]]]]]],[[],["result",4,[["cow",4,[["str",0]]],["fromutf8error",3]]]],[[],["cow",4,[["str",0]]]],[[],["cow",4,[["str",0]]]],[[["str",0]],["estr",3]],[[["",0]],["option",4,[["estr",3]]]],[[["",0]],["option",4,[["view",3,[["estr",3]]]]]],[[["",0]],["option",4,[["estr",3]]]],[[["",0]],["option",4,[["view",3,[["estr",3]]]]]],[[["",0]]],[[["",0]]],[[["",0],["char",0]],["split",3]],[[["",0],["char",0]],["option",4]],[[["",0]],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null,null,null,null],"p":[[4,"ParseErrorKind"],[4,"HostData"],[3,"Path"],[3,"View"],[3,"Uri"],[3,"Scheme"],[3,"Authority"],[3,"Host"],[3,"ParseError"],[13,"Ipv4"],[13,"RegName"],[13,"Ipv6"],[13,"IpvFuture"],[4,"Decode"],[4,"DecodeInPlace"],[3,"EStr"],[3,"Split"],[3,"SplitView"],[13,"Src"],[13,"Dst"],[13,"Src"],[13,"Dst"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};