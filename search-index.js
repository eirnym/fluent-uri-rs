var searchIndex = new Map(JSON.parse('[\
["fluent_uri",{"doc":"An RFC 3986 compliant generic URI parser and builder.","t":"FFFNNNNNNNNNNNNNNNNNNNNNNNNNNCNCNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNFGPPPPFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNPGFFPFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNCNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNCNNNNNNNNNNNNNNNNNNKFFFFTFNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNSSSSSSSSSSSSSSFSSNNNNNNNNNNNNNNNNNNNN","n":["Builder","ParseError","Uri","advance","as_ref","as_str","authority","authority","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","build","builder","clone","clone","clone_into","clone_into","cmp","component","default","encoding","eq","fmt","fmt","fmt","fmt","fragment","fragment","from","from","from","from","from_str","hash","host","host_port_from_socket_addr","into","into","into","into_input","into_string","is_absolute_uri","is_relative_reference","optional","parse","partial_cmp","path","path","plain","port","port_with_default","query","query","scheme","scheme","to_owned","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","userinfo","Authority","Host","Ipv4","Ipv6","IpvFuture","RegName","Scheme","as_str","as_str","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","clone","clone_into","eq","fmt","fmt","fmt","fmt","fmt","from","from","host","host_parsed","into","into","new","port","port_to_u16","to_owned","to_socket_addrs","to_string","to_string","try_from","try_from","try_into","try_into","try_new","type_id","type_id","type_id","userinfo","Borrowed","Decode","EStr","EString","Owned","Split","as_bytes","as_estr","as_ref","as_ref","as_ref","as_ref","as_str","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","capacity","clear","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","cmp","cmp","decode","default","default","deref","encode","encoder","eq","eq","eq","eq","eq","eq","eq","eq","eq","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","hash","hash","into","into","into","into_bytes","into_iter","into_string","into_string","into_string_lossy","is_absolute","is_empty","is_rootless","len","new","new","next","next_back","partial_cmp","partial_cmp","push_byte","push_estr","reserve","reserve_exact","split","split_once","table","to_owned","to_owned","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_into","try_into","try_into","try_new","type_id","type_id","type_id","type_id","with_capacity","Encoder","Fragment","Path","Query","RegName","TABLE","Userinfo","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","borrow_or_share","from","from","from","from","from","into","into","into","into","into","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","ALPHA","DIGIT","FRAGMENT","GEN_DELIMS","HEXDIG","IPV_FUTURE","PATH","PCHAR","QUERY","REG_NAME","RESERVED","SCHEME","SEGMENT_NZ_NC","SUB_DELIMS","Table","UNRESERVED","USERINFO","allows","allows_enc","borrow","borrow_mut","borrow_or_share","borrow_or_share","clone","clone_into","enc","fmt","from","gen","into","is_subset","or","sub","to_owned","try_from","try_into","type_id"],"q":[[0,"fluent_uri"],[81,"fluent_uri::component"],[132,"fluent_uri::encoding"],[243,"fluent_uri::encoding::encoder"],[295,"fluent_uri::encoding::table"],[332,"borrow_or_share"],[333,"borrow_or_share"],[334,"core::option"],[335,"alloc::string"],[336,"core::clone"],[337,"core::cmp"],[338,"core::fmt"],[339,"core::fmt"],[340,"core::hash"],[341,"core::net::socket_addr"],[342,"core::convert"],[343,"core::any"],[344,"core::num::error"],[345,"core::iter::traits::iterator"],[346,"std::io::error"],[347,"core::default"],[348,"core::convert"],[349,"core::fmt"],[350,"alloc::string"]],"d":["A builder for URI reference.","An error occurred when parsing URI references.","A URI reference defined in RFC 3986.","Advances the builder state, skipping optional components …","","Returns the URI reference as a string slice.","Builds the authority component with the given function.","Returns the authority component.","","","Borrows this <code>Uri&lt;String&gt;</code> as <code>Uri&lt;&amp;str&gt;</code>.","","","","","","","","","","","","Builds the URI reference.","Creates a new builder for URI reference.","","","","","","Components of URI reference.","Creates an empty URI reference.","Utilities for percent-encoding.","","","","","","Sets the fragment component.","Returns the fragment component.","Returns the argument unchanged.","Returns the argument unchanged.","","Returns the argument unchanged.","","","Sets the host subcomponent of authority.","Sets the host and the port subcomponent of authority to …","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Recovers the input that was attempted to parse into a <code>Uri</code>.","Consumes this <code>Uri&lt;String&gt;</code> and yields the underlying <code>String</code>.","Checks whether the URI reference is an absolute URI, i.e., …","Checks whether the URI reference is a relative reference, …","Optionally calls a builder method with a value.","Parses a URI reference from a string into a <code>Uri</code>.","","Sets the path component.","Returns the path component.","Returns the error with input erased.","Sets the port subcomponent of authority.","Sets the port subcomponent of authority, omitting it when …","Sets the query component.","Returns the query component.","Sets the scheme component.","Returns the scheme component.","","","Creates a new <code>Uri&lt;String&gt;</code> by cloning the contents of this …","","","","","","","","","","","","Sets the userinfo subcomponent of authority.","The authority component of URI reference.","The parsed host component of URI reference.","An IPv4 address.","An IPv6 address.","An IP address of future version.","A registered name.","The scheme component of URI reference.","Returns the scheme as a string slice.","Returns the authority as a string slice.","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the host subcomponent as a string slice.","Returns the parsed host subcomponent.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Converts a string slice to <code>&amp;Scheme</code>.","Returns the port subcomponent.","Converts the port subcomponent to <code>u16</code>.","","Converts the authority to an iterator of resolved …","","","","","","","Converts a string slice to <code>&amp;Scheme</code>, returning <code>None</code> if the …","","","","Returns the userinfo subcomponent.","No percent-encoded octets are decoded.","A wrapper of percent-decoded bytes.","Percent-encoded string slices.","A percent-encoded, growable string.","One or more percent-encoded octets are decoded.","An iterator over subslices of an <code>EStr</code> slice separated by a …","Returns a reference to the decoded bytes.","Coerces to an <code>EStr</code> slice.","","","","","Yields the underlying string slice.","","","","","","","","","","","","","","","","","","Invokes <code>capacity</code> on the underlying <code>String</code>.","Truncates this <code>EString</code> to zero length and casts it to …","","","","","","","","","","Decodes the <code>EStr</code> slice.","","Creates an empty <code>EStr</code> slice.","","Encodes a byte sequence with a sub-encoder and appends the …","Percent-encoders for URI components.","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Consumes this <code>Decode</code> and yields the underlying decoded …","","Consumes this <code>EString</code> and yields the underlying <code>String</code>.","Converts the decoded bytes to a string.","Converts the decoded bytes to a string, including invalid …","Checks whether the path is absolute, i.e., starting with …","Checks whether the <code>EStr</code> slice is empty.","Checks whether the path is rootless, i.e., not starting …","Returns the length of the <code>EStr</code> slice in bytes.","Creates a new empty <code>EString</code>.","Converts a string slice to an <code>EStr</code> slice.","","","","","Appends an unencoded byte onto the end of this <code>EString</code>.","Appends an <code>EStr</code> slice onto the end of this <code>EString</code>.","Invokes <code>reserve</code> on the underlying <code>String</code>.","Invokes <code>reserve_exact</code> on the underlying <code>String</code>.","Returns an iterator over subslices of the <code>EStr</code> slice …","Splits the <code>EStr</code> slice on the first occurrence of the given …","Byte pattern tables from RFC 3986.","","","","","","","","","","","","","Converts a string slice to an <code>EStr</code> slice, returning <code>None</code> …","","","","","Creates a new empty <code>EString</code> with a particular capacity.","A trait used by <code>EStr</code> and <code>EString</code> to specify the table used …","An encoder for fragment.","An encoder for path.","An encoder for query.","An encoder for registered name.","The table used for encoding.","An encoder for userinfo.","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","<code>ALPHA = %x41-5A / %x61-7A</code>","<code>DIGIT = %x30-39</code>","<code>fragment = *( pchar / &quot;/&quot; / &quot;?&quot; )</code>","<code>gen-delims = &quot;:&quot; / &quot;/&quot; / &quot;?&quot; / &quot;#&quot; / &quot;[&quot; / &quot;]&quot; / &quot;@&quot;</code>","<code>HEXDIG = DIGIT / &quot;A&quot; / &quot;B&quot; / &quot;C&quot; / &quot;D&quot; / &quot;E&quot; / &quot;F&quot;</code>","…","<code>path = *( pchar / &quot;/&quot; )</code>","<code>pchar = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</code>","<code>query = *( pchar / &quot;/&quot; / &quot;?&quot; )</code>","<code>reg-name = *( unreserved / pct-encoded / sub-delims )</code>","<code>reserved = gen-delims / sub-delims</code>","<code>scheme = ALPHA *( ALPHA / DIGIT / &quot;+&quot; / &quot;-&quot; / &quot;.&quot; )</code>","…","…","A table determining the byte patterns allowed in a string.","<code>unreserved = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</code>","<code>userinfo = *( unreserved / pct-encoded / sub-delims / &quot;:&quot; )</code>","Checks whether the given unencoded byte is allowed by the …","Checks whether percent-encoded octets are allowed by the …","","","","","","","Marks this table as allowing percent-encoded octets.","","Returns the argument unchanged.","Generates a table that only allows the given unencoded …","Calls <code>U::from(self)</code>.","Checks whether the table is a subset of another, i.e., …","Combines two tables into one.","Subtracts from this table.","","","",""],"i":[0,0,0,1,2,2,1,2,1,11,2,2,2,1,11,2,1,1,11,11,2,2,1,2,11,2,11,2,2,0,2,0,2,11,11,2,2,1,2,1,11,2,2,2,2,1,1,1,11,2,11,2,2,2,1,2,2,1,2,11,1,1,1,2,1,2,11,2,2,11,2,1,11,2,1,11,2,1,11,2,1,0,0,22,22,22,22,0,29,8,29,8,22,29,8,22,29,29,8,8,22,22,22,22,22,29,29,8,8,22,8,22,8,8,8,22,29,8,8,22,8,29,8,8,22,8,22,29,29,8,22,8,36,0,0,0,36,0,36,39,39,39,19,19,19,39,39,19,36,42,39,19,36,42,39,39,19,19,36,36,42,42,39,39,39,36,42,39,19,36,42,39,19,19,39,19,39,39,0,39,39,39,39,39,19,19,19,19,39,39,19,19,36,42,39,39,36,42,39,19,39,36,42,36,42,39,36,36,19,19,19,19,39,19,42,42,39,19,39,39,39,39,19,19,0,39,19,36,42,39,19,39,36,42,39,36,42,19,39,19,36,42,39,0,0,0,0,0,40,0,31,52,27,28,18,31,52,27,28,18,31,31,52,52,27,27,28,28,18,18,31,52,27,28,18,31,52,27,28,18,31,52,27,28,18,31,52,27,28,18,31,52,27,28,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51,51],"f":"```{{{b{e}}}{{b{c}}}`{{`{c}}}}{{{d{c}}}f{{h{f}}}}{{{d{c}}}f{{j{f}}}}{{{b{c}}g}{{b{`}}}{{`{`}}}{{`{`}}}{{n{{b{`}}}{{l{{b{e}}}}}}}}{{{d{c}}}{{Ab{{A`{c}}}}}{{j{f}}}}{ce{}{}}0{{{d{Ad}}}{{d{f}}}}511111{c{}{}}2002{{{b{c}}}{{d{Ad}}}{{`{`}}}}{{}b}{{{Af{c}}}{{Af{c}}}Ah}{{{d{c}}}{{d{c}}}Ah}{{ce}Aj{}{}}0{{{d{c}}{d{c}}}Al{{h{f}}}}`{{}{{d{c}}}`}`{{{d{c}}{d{e}}}An{{h{f}}}{{h{f}}}}{{{Af{c}}B`}Bb{}}0{{{d{c}}B`}Bb{{h{f}}}}0{{{b{c}}{Bf{Bd}}}{{b{`}}}{{`{`}}}}{{{d{c}}}{{Ab{{Bf{Bd}}}}}{{j{f}}}}{cc{}}0{{{d{f}}}{{d{Ad}}}}1{f{{Bh{{d{Ad}}c}}}{}}{{{d{c}}e}Aj{{h{f}}}Bj}{{{b{c}}Bl}{{b{`}}}{{`{`}}}}{{{b{c}}eBn}{{b{`}}}{{`{`}}}{{Cb{C`}}}}{ce{}{}}00{{{Af{c}}}c`}{{{d{Ad}}}Ad}{{{d{c}}}An{{j{f}}}}0{{{b{e}}i{Ab{g}}}{{b{c}}}`{{`{c}}}{}{{n{{b{e}}g}{{l{{b{c}}}}}}}}{e{{Bh{{d{c}}}}}{}{{`{}{{Cd{c}}}}}}{{{d{c}}{d{c}}}{{Ab{Al}}}{{h{f}}}}{{{b{c}}{Bf{Cf}}}{{b{`}}}{{`{`}}}}{{{d{c}}}{{Bf{Cf}}}{{j{f}}}}{{{Af{c}}}Af`}{{{b{c}}e}{{b{`}}}{{`{`}}}`}{{{b{c}}BnBn}{{b{`}}}{{`{`}}}}{{{b{c}}{Bf{Ch}}}{{b{`}}}{{`{`}}}}{{{d{c}}}{{Ab{{Bf{Ch}}}}}{{j{f}}}}{{{b{c}}Cj}{{b{`}}}{{`{`}}}}{{{d{c}}}{{Ab{Cj}}}{{j{f}}}}??{{{d{f}}}{{d{Ad}}}}{cAd{}}0{c{{Bh{e}}}{}{}}00000{cCl{}}00{{{b{c}}{Bf{Cn}}}{{b{`}}}{{`{`}}}}```````{Cjf}{{{A`{c}}}f{{j{f}}}}{ce{}{}}00000{c{}{}}11010{BlBl}{{ce}Aj{}{}}{{BlBl}An}{{CjB`}Bb}0{{{A`{c}}B`}Bb{{h{f}}}}0{{BlB`}Bb}{cc{}}09{{{A`{c}}}Bl{{j{f}}}}99{fCj}{{{A`{c}}}{{Ab{f}}}{{j{f}}}}{{{A`{c}}}{{Bh{{Ab{Bn}}D`}}}{{j{f}}}}<{{{A`{c}}Bn}{{Df{{`{{Dd{}{{Db{C`}}}}}}}}}{{j{f}}}}{cAd{}}0{c{{Bh{e}}}{}{}}000{f{{Ab{Cj}}}}{cCl{}}00{{{A`{c}}}{{Ab{{Bf{Cn}}}}}{{j{f}}}}``````{Dh{{Dl{Dj}}}}{{{Dn{c}}}{{Bf{c}}}E`}0{{{Dn{c}}}fE`}{{{Bf{c}}}{{Bf{c}}}E`}{{{Bf{c}}}fE`}03{ce{}{}}00000000{c{}{}}101001{{{Dn{c}}}EbE`}{{{Dn{c}}}{{Dn{e}}}E`E`}{{{Dn{c}}}{{Dn{c}}}{AhE`}}{DhDh}{{{Ed{c}}}{{Ed{c}}}{AhE`}}{{ce}Aj{}{}}{{{Bf{c}}{Dn{c}}}AjE`}11{{{Dn{c}}{Dn{c}}}AlE`}{{{Bf{c}}{Bf{c}}}AlE`}{{{Bf{c}}}DhE`}{{}{{Dn{c}}}{EfE`}}{{}{{Bf{c}}}E`}{{{Dn{c}}}{{Bf{c}}}E`}{{{Dn{c}}e}AjE`{{Eh{{Dl{Dj}}}}Ej}}`{{{Dn{c}}{Bf{c}}}AnE`}{{{Dn{c}}f}AnE`}0{{{Dn{c}}{Dn{c}}}AnE`}2{{{Bf{c}}f}AnE`}{{{Bf{c}}{Dn{c}}}AnE`}0{{{Bf{c}}{Bf{c}}}AnE`}{{{Dn{c}}B`}BbE`}0{{{Bf{c}}B`}BbE`}0{{DhB`}Bb}{{{Ed{c}}B`}Bb{ElE`}}{{{Bf{c}}}{{Dn{c}}}E`}{cc{}}00{{{Dn{c}}e}AjE`Bj}{{{Bf{c}}e}AjE`Bj}{ce{}{}}00{Dh{{En{{Dl{Dj}}}}}}1{{{Dn{c}}}AdE`}{Dh{{Bh{{En{f}}F`}}}}{Dh{{En{f}}}}{{{Bf{Cf}}}An}{{{Bf{c}}}AnE`}1{{{Bf{c}}}EbE`}{{}{{Dn{c}}}E`}{f{{Bf{c}}}E`}{{{Ed{c}}}{{Ab{{Bf{c}}}}}E`}0{{{Dn{c}}{Dn{c}}}{{Ab{Al}}}E`}{{{Bf{c}}{Bf{c}}}{{Ab{Al}}}E`}{{{Dn{c}}Dj}AjE`}{{{Dn{c}}{Bf{c}}}AjE`}{{{Dn{c}}Eb}AjE`}0{{{Bf{c}}Fb}{{Ed{c}}}E`}{{{Bf{c}}Fb}{{Ab{{Fd{{Bf{c}}{Bf{c}}}}}}}E`}`{ce{}{}}{{{Bf{c}}}{{Dn{c}}}E`}11{cAd{}}0{c{{Bh{e}}}{}{}}00000{f{{Ab{{Bf{c}}}}}E`}{cCl{}}000{Eb{{Dn{c}}}E`}```````66666666666{c{}{}}07700770{cc{}}000088888555555555533333`````````````````{{FfDj}An}{FfAn}:::3{FfFf}{{ce}Aj{}{}}1{{FfB`}Bb}5{{{Dl{Dj}}}Ff}>{{FfFf}An}{{FfFf}Ff}0{ce{}{}}>><","c":[],"p":[[5,"Builder",0],[5,"Uri",0],[1,"str"],[10,"Bos",332],[10,"BorrowOrShare",332],[17,"Output"],[10,"FnOnce",333],[5,"Authority",81],[6,"Option",334],[5,"String",335],[5,"ParseError",0],[10,"Clone",336],[1,"unit"],[6,"Ordering",337],[1,"bool"],[5,"Formatter",338],[8,"Result",338],[5,"Fragment",243],[5,"EStr",132],[6,"Result",339],[10,"Hasher",340],[6,"Host",81],[1,"u16"],[6,"SocketAddr",341],[10,"Into",342],[17,"Val"],[5,"Path",243],[5,"Query",243],[5,"Scheme",81],[5,"TypeId",343],[5,"Userinfo",243],[5,"ParseIntError",344],[17,"Item"],[10,"Iterator",345],[8,"Result",346],[6,"Decode",132],[1,"u8"],[1,"slice"],[5,"EString",132],[10,"Encoder",243],[1,"usize"],[5,"Split",132],[10,"Default",347],[10,"AsRef",342],[10,"Sized",348],[10,"Debug",338],[6,"Cow",349],[5,"FromUtf8Error",335],[1,"char"],[1,"tuple"],[5,"Table",295],[5,"RegName",243]],"b":[[10,"impl-Uri%3CString%3E"],[11,"impl-Borrow%3Cstr%3E-for-Uri%3CT%3E"],[33,"impl-Display-for-ParseError%3CI%3E"],[34,"impl-Debug-for-ParseError%3CI%3E"],[35,"impl-Display-for-Uri%3CT%3E"],[36,"impl-Debug-for-Uri%3CT%3E"],[105,"impl-Display-for-Scheme"],[106,"impl-Debug-for-Scheme"],[107,"impl-Display-for-Authority%3CT%3E"],[108,"impl-Debug-for-Authority%3CT%3E"],[140,"impl-AsRef%3CEStr%3CE%3E%3E-for-EString%3CE%3E"],[141,"impl-AsRef%3Cstr%3E-for-EString%3CE%3E"],[142,"impl-AsRef%3CEStr%3CE%3E%3E-for-EStr%3CE%3E"],[143,"impl-AsRef%3Cstr%3E-for-EStr%3CE%3E"],[179,"impl-PartialEq%3C%26EStr%3CE%3E%3E-for-EString%3CE%3E"],[180,"impl-PartialEq%3Cstr%3E-for-EString%3CE%3E"],[181,"impl-PartialEq%3C%26str%3E-for-EString%3CE%3E"],[182,"impl-PartialEq-for-EString%3CE%3E"],[183,"impl-PartialEq%3CEStr%3CE%3E%3E-for-EString%3CE%3E"],[184,"impl-PartialEq%3Cstr%3E-for-EStr%3CE%3E"],[185,"impl-PartialEq%3CEString%3CE%3E%3E-for-EStr%3CE%3E"],[186,"impl-PartialEq%3CEString%3CE%3E%3E-for-%26EStr%3CE%3E"],[187,"impl-PartialEq-for-EStr%3CE%3E"],[188,"impl-Debug-for-EString%3CE%3E"],[189,"impl-Display-for-EString%3CE%3E"],[190,"impl-Display-for-EStr%3CE%3E"],[191,"impl-Debug-for-EStr%3CE%3E"]]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
