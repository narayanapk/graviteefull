"use strict";(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[4613],{74613:(j,a,f)=>{f.r(a),f.d(a,{vb:()=>D});var u="error";function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var m=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),x=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),I=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),R=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),C=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),O=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),h=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],s=["else","elseif","case","catch","finally"],v=["next","loop"],p=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],z=o(p),g=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],y=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],E=o(g),_=o(y),T=o(h),w=o(s),b=o(v),k=o(["end"]),F=o(["do"]);function l(e,n){n.currentIndent++}function c(e,n){n.currentIndent--}function d(e,n){if(e.eatSpace())return null;if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var r=!1;if((e.match(/^\d*\.\d+F?/i)||e.match(/^\d+\.\d*F?/)||e.match(/^\.\d+F?/))&&(r=!0),r)return e.eat(/J/i),"number";var t=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?t=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),t=!0):e.match(/^0(?![\dx])/i)&&(t=!0),t)return e.eat(/L/i),"number"}return e.match('"')?(n.tokenize=function L(e){var n=1==e.length,i="string";return function(r,t){for(;!r.eol();){if(r.eatWhile(/[^'"]/),r.match(e))return t.tokenize=d,i;r.eat(/['"]/)}return n&&(t.tokenize=d),i}}(e.current()),n.tokenize(e,n)):e.match(C)||e.match(R)?null:e.match(I)||e.match(m)||e.match(z)?"operator":e.match(x)?null:e.match(F)?(l(0,n),n.doInCurrentLine=!0,"keyword"):e.match(T)?(n.doInCurrentLine?n.doInCurrentLine=!1:l(0,n),"keyword"):e.match(w)?"keyword":e.match(k)?(c(0,n),c(0,n),"keyword"):e.match(b)?(c(0,n),"keyword"):e.match(_)||e.match(E)?"keyword":e.match(O)?"variable":(e.next(),u)}const D={startState:function(){return{tokenize:d,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,n){e.sol()&&(n.currentIndent+=n.nextLineIndent,n.nextLineIndent=0,n.doInCurrentLine=0);var i=function A(e,n){var i=n.tokenize(e,n),r=e.current();if("."===r)return"variable"===(i=n.tokenize(e,n))?"variable":u;var t="[({".indexOf(r);return-1!==t&&l(0,n),-1!==(t="])}".indexOf(r))&&c(0,n)?u:i}(e,n);return n.lastToken={style:i,content:e.current()},i},indent:function(e,n,i){var r=n.replace(/^\s+|\s+$/g,"");return r.match(b)||r.match(k)||r.match(w)?i.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*i.unit},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:"'"},autocomplete:h.concat(s).concat(v).concat(p).concat(g).concat(y)}}}}]);