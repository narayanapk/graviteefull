(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1792:function(t,n,e){"use strict";var o;function r(t){return new RegExp("^(?:"+t.join("|")+")$","i")}e.r(n),e.d(n,"turtle",(function(){return p}));r([]);var i=r(["@prefix","@base","a"]),c=/[*+\-<>=&|]/;function a(t,n){var e,r=t.next();if(o=null,"<"!=r||t.match(/^[\s\u00a0=]/,!1)){if('"'==r||"'"==r)return n.tokenize=(e=r,function(t,n){for(var o,r=!1;null!=(o=t.next());){if(o==e&&!r){n.tokenize=a;break}r=!r&&"\\"==o}return"string"}),n.tokenize(t,n);if(/[{}\(\),\.;\[\]]/.test(r))return o=r,null;if("#"==r)return t.skipToEnd(),"comment";if(c.test(r))return t.eatWhile(c),null;if(":"==r)return"operator";if(t.eatWhile(/[_\w\d]/),":"==t.peek())return"variableName.special";var l=t.current();return i.test(l)?"meta":r>="A"&&r<="Z"?"comment":"keyword"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function l(t,n,e){t.context={prev:t.context,indent:t.indent,col:e,type:n}}function u(t){t.indent=t.context.indent,t.context=t.context.prev}const p={startState:function(){return{tokenize:a,context:null,indent:0,col:0}},token:function(t,n){if(t.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=t.indentation()),t.eatSpace())return null;var e=n.tokenize(t,n);if("comment"!=e&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==o)l(n,")",t.column());else if("["==o)l(n,"]",t.column());else if("{"==o)l(n,"}",t.column());else if(/[\]\}\)]/.test(o)){for(;n.context&&"pattern"==n.context.type;)u(n);n.context&&o==n.context.type&&u(n)}else"."==o&&n.context&&"pattern"==n.context.type?u(n):/atom|string|variable/.test(e)&&n.context&&(/[\}\]]/.test(n.context.type)?l(n,"pattern",t.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=t.column()));return e},indent:function(t,n,e){var o=n&&n.charAt(0),r=t.context;if(/[\]\}]/.test(o))for(;r&&"pattern"==r.type;)r=r.prev;var i=r&&o==r.type;return r?"pattern"==r.type?r.col:r.align?r.col+(i?0:1):r.indent+(i?0:e.unit):0},languageData:{commentTokens:{line:"#"}}}}}]);