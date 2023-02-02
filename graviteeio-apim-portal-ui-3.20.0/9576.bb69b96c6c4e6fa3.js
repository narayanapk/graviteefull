"use strict";(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[9576],{9576:(he,P,B)=>{function o(e){return{type:e,style:"keyword"}}B.r(P),B.d(P,{haxe:()=>de,hxml:()=>pe});var $,I=o("keyword a"),W=o("keyword b"),m=o("keyword c"),R=o("operator"),_={type:"atom",style:"atom"},y={type:"attribute",style:"attribute"},c=o("typedef"),H={if:I,while:I,else:W,do:W,try:W,return:m,break:m,continue:m,new:m,throw:m,var:o("var"),inline:y,static:y,using:o("import"),public:y,private:y,cast:o("cast"),import:o("import"),macro:o("macro"),function:o("function"),catch:o("catch"),untyped:o("untyped"),callback:o("cb"),for:o("for"),switch:o("switch"),case:o("case"),default:o("default"),in:R,never:o("property_access"),trace:o("trace"),class:c,abstract:c,enum:c,interface:c,typedef:c,extends:c,implements:c,dynamic:c,true:_,false:_,null:_},z=/[+\-*&%=<>!?|]/;function L(e,r,n){return r.tokenize=n,n(e,r)}function N(e,r){for(var i,n=!1;null!=(i=e.next());){if(i==r&&!n)return!0;n=!n&&"\\"==i}}function p(e,r,n){return c=e,$=n,r}function A(e,r){var n=e.next();if('"'==n||"'"==n)return L(e,r,function X(e){return function(r,n){return N(r,e)&&(n.tokenize=A),p("string","string")}}(n));if(/[\[\]{}\(\),;\:\.]/.test(n))return p(n);if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),p("number","number");if(/\d/.test(n)||"-"==n&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),p("number","number");if(r.reAllowed&&"~"==n&&e.eat(/\//))return N(e,"/"),e.eatWhile(/[gimsu]/),p("regexp","string.special");if("/"==n)return e.eat("*")?L(e,r,Y):e.eat("/")?(e.skipToEnd(),p("comment","comment")):(e.eatWhile(z),p("operator",null,e.current()));if("#"==n)return e.skipToEnd(),p("conditional","meta");if("@"==n)return e.eat(/:/),e.eatWhile(/[\w_]/),p("metadata","meta");if(z.test(n))return e.eatWhile(z),p("operator",null,e.current());if(/[A-Z]/.test(n))return e.eatWhile(/[\w_<>]/),p("type","type",i=e.current());e.eatWhile(/[\w_]/);var i=e.current(),u=H.propertyIsEnumerable(i)&&H[i];return u&&r.kwAllowed?p(u.type,u.style,i):p("variable","variable",i)}function Y(e,r){for(var i,n=!1;i=e.next();){if("/"==i&&n){r.tokenize=A;break}n="*"==i}return p("comment","comment")}var j={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function F(e,r,n,i,u,d){this.indented=e,this.column=r,this.type=n,this.prev=u,this.info=d,null!=i&&(this.align=i)}function q(e,r){for(var n=e.localVars;n;n=n.next)if(n.name==r)return!0}function re(e,r){if(/[a-z]/.test(r.charAt(0)))return!1;for(var n=e.importedtypes.length,i=0;i<n;i++)if(e.importedtypes[i]==r)return!0}function U(e){for(var r=a.state,n=r.importedtypes;n;n=n.next)if(n.name==e)return;r.importedtypes={name:e,next:r.importedtypes}}var a={state:null,column:null,marked:null,cc:null};function b(){for(var e=arguments.length-1;e>=0;e--)a.cc.push(arguments[e])}function t(){return b.apply(null,arguments),!0}function G(e,r){for(var n=r;n;n=n.next)if(n.name==e)return!0;return!1}function V(e){var r=a.state;if(r.context){if(a.marked="def",G(e,r.localVars))return;r.localVars={name:e,next:r.localVars}}else if(r.globalVars){if(G(e,r.globalVars))return;r.globalVars={name:e,next:r.globalVars}}}var ne={name:"this",next:null};function E(){a.state.context||(a.state.localVars=ne),a.state.context={prev:a.state.context,vars:a.state.localVars}}function S(){a.state.localVars=a.state.context.vars,a.state.context=a.state.context.prev}function l(e,r){var n=function(){var i=a.state;i.lexical=new F(i.indented,a.stream.column(),e,null,i.lexical,r)};return n.lex=!0,n}function f(){var e=a.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function s(e){return function r(n){return n==e?t():";"==e?b():t(r)}}function x(e){return"@"==e?t(O):"var"==e?t(l("vardef"),Z,s(";"),f):"keyword a"==e?t(l("form"),h,x,f):"keyword b"==e?t(l("form"),x,f):"{"==e?t(l("}"),E,D,f,S):";"==e?t():"attribute"==e?t(J):"function"==e?t(g):"for"==e?t(l("form"),s("("),l(")"),oe,s(")"),f,x,f):"variable"==e?t(l("stat"),ue):"switch"==e?t(l("form"),h,l("}","switch"),s("{"),D,f,f):"case"==e?t(h,s(":")):"default"==e?t(s(":")):"catch"==e?t(l("form"),E,s("("),Q,s(")"),x,f,S):"import"==e?t(K,s(";")):"typedef"==e?t(ie):b(l("stat"),h,s(";"),f)}function h(e){return j.hasOwnProperty(e)||"type"==e?t(v):"function"==e?t(g):"keyword c"==e?t(C):"("==e?t(l(")"),C,s(")"),f,v):"operator"==e?t(h):"["==e?t(l("]"),k(C,"]"),f,v):"{"==e?t(l("}"),k(fe,"}"),f,v):t()}function C(e){return e.match(/[;\}\)\],]/)?b():b(h)}function v(e,r){if("operator"==e&&/\+\+|--/.test(r))return t(v);if("operator"==e||":"==e)return t(h);if(";"!=e){if("("==e)return t(l(")"),k(h,")"),f,v);if("."==e)return t(ae,v);if("["==e)return t(l("]"),h,s("]"),f,v)}}function J(e){return"attribute"==e?t(J):"function"==e?t(g):"var"==e?t(Z):void 0}function O(e){return":"==e||"variable"==e?t(O):"("==e?t(l(")"),k(te,")"),f,x):void 0}function te(e){if("variable"==e)return t()}function K(e,r){return"variable"==e&&/[A-Z]/.test(r.charAt(0))?(U(r),t()):"variable"==e||"property"==e||"."==e||"*"==r?t(K):void 0}function ie(e,r){return"variable"==e&&/[A-Z]/.test(r.charAt(0))?(U(r),t()):"type"==e&&/[A-Z]/.test(r.charAt(0))?t():void 0}function ue(e){return":"==e?t(f,x):b(v,s(";"),f)}function ae(e){if("variable"==e)return a.marked="property",t()}function fe(e){if("variable"==e&&(a.marked="property"),j.hasOwnProperty(e))return t(s(":"),h)}function k(e,r){function n(i){return","==i?t(e,n):i==r?t():t(s(r))}return function(i){return i==r?t():b(e,n)}}function D(e){return"}"==e?t():b(x,D)}function Z(e,r){return"variable"==e?(V(r),t(T,M)):t()}function M(e,r){return"="==r?t(h,M):","==e?t(Z):void 0}function oe(e,r){return"variable"==e?(V(r),t(le,h)):b()}function le(e,r){if("in"==r)return t()}function g(e,r){return"variable"==e||"type"==e?(V(r),t(g)):"new"==r?t(g):"("==e?t(l(")"),E,k(Q,")"),f,T,x,S):void 0}function T(e){if(":"==e)return t(ce)}function ce(e){return"type"==e||"variable"==e?t():"{"==e?t(l("}"),k(se,"}"),f):void 0}function se(e){if("variable"==e)return t(T)}function Q(e,r){if("variable"==e)return V(r),t(T)}S.lex=!0,f.lex=!0;const de={startState:function(e){return{tokenize:A,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new F(-e,0,"block",!1),importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:null,indented:0}},token:function(e,r){if(e.sol()&&(r.lexical.hasOwnProperty("align")||(r.lexical.align=!1),r.indented=e.indentation()),e.eatSpace())return null;var n=r.tokenize(e,r);return"comment"==c?n:(r.reAllowed=!("operator"!=c&&"keyword c"!=c&&!c.match(/^[\[{}\(,;:]$/)),r.kwAllowed="."!=c,function ee(e,r,n,i,u){var d=e.cc;for(a.state=e,a.stream=u,a.marked=null,a.cc=d,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((d.length?d.pop():x)(n,i)){for(;d.length&&d[d.length-1].lex;)d.pop()();return a.marked?a.marked:"variable"==n&&q(e,i)?"variableName.local":"variable"==n&&re(e,i)?"variableName.special":r}}(r,n,c,$,e))},indent:function(e,r,n){if(e.tokenize!=A)return 0;var i=r&&r.charAt(0),u=e.lexical;"stat"==u.type&&"}"==i&&(u=u.prev);var d=u.type,w=i==d;return"vardef"==d?u.indented+4:"form"==d&&"{"==i?u.indented:"stat"==d||"form"==d?u.indented+n.unit:"switch"!=u.info||w?u.align?u.column+(w?0:1):u.indented+(w?0:n.unit):u.indented+(/^(?:case|default)\b/.test(r)?n.unit:2*n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}},pe={startState:function(){return{define:!1,inString:!1}},token:function(e,r){var u=e.peek(),n=e.sol();if("#"==u)return e.skipToEnd(),"comment";if(n&&"-"==u){var i="variable-2";return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),i="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),i="keyword c",r.define=!0),e.eatWhile(/[A-Z]/i),i}return u=e.peek(),0==r.inString&&"'"==u&&(r.inString=!0,e.next()),1==r.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),r.inString=!1),"string"):(e.next(),null)},languageData:{commentTokens:{line:"#"}}}}}]);