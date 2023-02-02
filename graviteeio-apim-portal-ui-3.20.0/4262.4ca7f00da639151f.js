"use strict";(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[4262],{54262:(B,h,g)=>{function d(w){function k(t,e){t.cmdState.push(e)}function b(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function i(t,e,n){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var r={};function u(t,e){t.f=e}function l(t,e){var n;if(t.match(/^\\[a-zA-Z@]+/)){var a=t.current().slice(1);return k(e,n=new(n=r.hasOwnProperty(a)?r[a]:r.DEFAULT)),u(e,s),n.style}if(t.match(/^\\[$&%#{}_]/)||t.match(/^\\[,;!\/\\]/))return"tag";if(t.match("\\["))return u(e,function(c,m){return o(c,m,"\\]")}),"keyword";if(t.match("\\("))return u(e,function(c,m){return o(c,m,"\\)")}),"keyword";if(t.match("$$"))return u(e,function(c,m){return o(c,m,"$$")}),"keyword";if(t.match("$"))return u(e,function(c,m){return o(c,m,"$")}),"keyword";var f=t.next();return"%"==f?(t.skipToEnd(),"comment"):"}"==f||"]"==f?(n=b(e))?(n.closeBracket(f),u(e,s),"bracket"):"error":"{"==f||"["==f?(k(e,n=new(n=r.DEFAULT)),"bracket"):/\d/.test(f)?(t.eatWhile(/[\w.%]/),"atom"):(t.eatWhile(/[\w\-_]/),n=function S(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var a=e[n];if("DEFAULT"!=a.name)return a}return{styleIdentifier:function(){return null}}}(e),"begin"==n.name&&(n.argument=t.current()),n.styleIdentifier())}function o(t,e,n){if(t.eatSpace())return null;if(n&&t.match(n))return u(e,l),"keyword";if(t.match(/^\\[a-zA-Z@]+/))return"tag";if(t.match(/^[a-zA-Z]+/))return"variableName.special";if(t.match(/^\\[$&%#{}_]/)||t.match(/^\\[,;!\/]/)||t.match(/^[\^_&]/))return"tag";if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null;if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number";var a=t.next();return"{"==a||"}"==a||"["==a||"]"==a||"("==a||")"==a?"bracket":"%"==a?(t.skipToEnd(),"comment"):"error"}function s(t,e){var n=t.peek();return"{"==n||"["==n?(b(e).openBracket(n),t.eat(n),u(e,l),"bracket"):/[ \t\r]/.test(n)?(t.eat(n),null):(u(e,l),function v(t){var e=t.cmdState.pop();e&&e.closeBracket()}(e),l(t,e))}return r.importmodule=i("importmodule","tag",["string","builtin"]),r.documentclass=i("documentclass","tag",["","atom"]),r.usepackage=i("usepackage","tag",["atom"]),r.begin=i("begin","tag",["atom"]),r.end=i("end","tag",["atom"]),r.label=i("label","tag",["atom"]),r.ref=i("ref","tag",["atom"]),r.eqref=i("eqref","tag",["atom"]),r.cite=i("cite","tag",["atom"]),r.bibitem=i("bibitem","tag",["atom"]),r.Bibitem=i("Bibitem","tag",["atom"]),r.RBibitem=i("RBibitem","tag",["atom"]),r.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}},{startState:function(){return{cmdState:[],f:w?function(e,n){return o(e,n)}:l}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,e){return e.f(t,e)},blankLine:function(t){t.f=l,t.cmdState.length=0},languageData:{commentTokens:{line:"%"}}}}g.r(h),g.d(h,{stex:()=>p,stexMath:()=>y});const p=d(!1),y=d(!0)}}]);