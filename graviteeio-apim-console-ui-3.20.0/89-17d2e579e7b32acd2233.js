(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1775:function(n,e,t){"use strict";function r(n){for(var e={},t=n.split(" "),r=0;r<t.length;++r)e[t[r]]=!0;return e}t.r(e),t.d(e,"sieve",(function(){return s}));var i=r("if elsif else stop require"),u=r("true false not");function o(n,e){var t,r=n.next();if("/"==r&&n.eat("*"))return e.tokenize=a,a(n,e);if("#"===r)return n.skipToEnd(),"comment";if('"'==r)return e.tokenize=(t=r,function(n,e){for(var r,i=!1;null!=(r=n.next())&&(r!=t||i);)i=!i&&"\\"==r;return i||(e.tokenize=o),"string"}),e.tokenize(n,e);if("("==r)return e._indent.push("("),e._indent.push("{"),null;if("{"===r)return e._indent.push("{"),null;if(")"==r&&(e._indent.pop(),e._indent.pop()),"}"===r)return e._indent.pop(),null;if(","==r)return null;if(";"==r)return null;if(/[{}\(\),;]/.test(r))return null;if(/\d/.test(r))return n.eatWhile(/[\d]/),n.eat(/[KkMmGg]/),"number";if(":"==r)return n.eatWhile(/[a-zA-Z_]/),n.eatWhile(/[a-zA-Z0-9_]/),"operator";n.eatWhile(/\w/);var s=n.current();return"text"==s&&n.eat(":")?(e.tokenize=l,"string"):i.propertyIsEnumerable(s)?"keyword":u.propertyIsEnumerable(s)?"atom":null}function l(n,e){return e._multiLineString=!0,n.sol()?("."==n.next()&&n.eol()&&(e._multiLineString=!1,e.tokenize=o),"string"):(n.eatSpace(),"#"==n.peek()?(n.skipToEnd(),"comment"):(n.skipToEnd(),"string"))}function a(n,e){for(var t,r=!1;null!=(t=n.next());){if(r&&"/"==t){e.tokenize=o;break}r="*"==t}return"comment"}const s={startState:function(n){return{tokenize:o,baseIndent:n||0,_indent:[]}},token:function(n,e){return n.eatSpace()?null:(e.tokenize||o)(n,e)},indent:function(n,e,t){var r=n._indent.length;return e&&"}"==e[0]&&r--,r<0&&(r=0),r*t.unit},languageData:{indentOnInput:/^\s*\}$/}}}}]);