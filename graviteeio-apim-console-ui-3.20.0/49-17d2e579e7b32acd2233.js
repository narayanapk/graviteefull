(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1730:function(t,e,n){"use strict";function r(t,e,n){return e(n),n(t,e)}n.r(e),n.d(e,"elm",(function(){return w}));var i=/[a-z]/,o=/[A-Z]/,u=/[a-zA-Z0-9_]/,f=/[0-9]/,a=/[0-9A-Fa-f]/,s=/[-&*+.\\/<>=?^|:]/,c=/[(),[\]{}]/,l=/[ \v\f]/;function p(){return function(t,e){if(t.eatWhile(l))return null;var n=t.next();if(c.test(n))return"{"===n&&t.eat("-")?r(t,e,function t(e){if(0==e)return p();return function(n,r){for(;!n.eol();){var i=n.next();if("{"==i&&n.eat("-"))++e;else if("-"==i&&n.eat("}")&&0===--e)return r(p()),"comment"}return r(t(e)),"comment"}}(1)):"["===n&&t.match("glsl|")?r(t,e,x):"builtin";if("'"===n)return r(t,e,m);if('"'===n)return t.eat('"')?t.eat('"')?r(t,e,h):"string":r(t,e,k);if(o.test(n))return t.eatWhile(u),"type";if(i.test(n)){var d=1===t.pos;return t.eatWhile(u),d?"def":"variable"}if(f.test(n)){if("0"===n){if(t.eat(/[xX]/))return t.eatWhile(a),"number"}else t.eatWhile(f);return t.eat(".")&&t.eatWhile(f),t.eat(/[eE]/)&&(t.eat(/[-+]/),t.eatWhile(f)),"number"}return s.test(n)?"-"===n&&t.eat("-")?(t.skipToEnd(),"comment"):(t.eatWhile(s),"keyword"):"_"===n?"keyword":"error"}}function h(t,e){for(;!t.eol();){if('"'===t.next()&&t.eat('"')&&t.eat('"'))return e(p()),"string"}return"string"}function k(t,e){for(;t.skipTo('\\"');)t.next(),t.next();return t.skipTo('"')?(t.next(),e(p()),"string"):(t.skipToEnd(),e(p()),"error")}function m(t,e){for(;t.skipTo("\\'");)t.next(),t.next();return t.skipTo("'")?(t.next(),e(p()),"string"):(t.skipToEnd(),e(p()),"error")}function x(t,e){for(;!t.eol();){if("|"===t.next()&&t.eat("]"))return e(p()),"string"}return"string"}var d={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};const w={startState:function(){return{f:p()}},copyState:function(t){return{f:t.f}},token:function(t,e){var n=e.f(t,(function(t){e.f=t})),r=t.current();return d.hasOwnProperty(r)?"keyword":n}}}}]);