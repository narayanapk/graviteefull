"use strict";(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[3987],{93987:(D,f,d)=>{function o(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}d.r(f),d.d(f,{ttcn:()=>B});const i={name:"ttcn",keywords:o("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:o("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:o("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:o("read running start stop timeout"),portOps:o("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:o("create connect disconnect done kill killed map unmap"),verdictOps:o("getverdict setverdict"),sutOps:o("action"),functionOps:o("apply derefers refers"),verdictConsts:o("error fail inconc none pass"),booleanConsts:o("true false"),otherConsts:o("null NULL omit"),visibilityModifiers:o("private public friend"),templateMatch:o("complement ifpresent subset superset permutation"),multiLineStrings:!0};var m=[];function a(e){if(e)for(var t in e)e.hasOwnProperty(t)&&m.push(t)}a(i.keywords),a(i.builtin),a(i.timerOps),a(i.portOps);var l,g=i.keywords||{},x=i.builtin||{},k=i.timerOps||{},w=i.portOps||{},O=i.configOps||{},C=i.verdictOps||{},E=i.sutOps||{},I=i.functionOps||{},L=i.verdictConsts||{},z=i.booleanConsts||{},S=i.otherConsts||{},M=i.types||{},W=i.visibilityModifiers||{},_=i.templateMatch||{},T=i.multiLineStrings,N=!1!==i.indentStatements,h=/[+\-*&@=<>!\/]/;function P(e,t){var n=e.next();if('"'==n||"'"==n)return t.tokenize=function $(e){return function(t,n){for(var c,r=!1,v=!1;null!=(c=t.next());){if(c==e&&!r){var s=t.peek();s&&("b"==(s=s.toLowerCase())||"h"==s||"o"==s)&&t.next(),v=!0;break}r=!r&&"\\"==c}return(v||!(r||T))&&(n.tokenize=null),"string"}}(n),t.tokenize(e,t);if(/[\[\]{}\(\),;\\:\?\.]/.test(n))return l=n,"punctuation";if("#"==n)return e.skipToEnd(),"atom";if("%"==n)return e.eatWhile(/\b/),"atom";if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if("/"==n){if(e.eat("*"))return t.tokenize=b,b(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(h.test(n))return"@"==n&&(e.match("try")||e.match("catch")||e.match("lazy"))?"keyword":(e.eatWhile(h),"operator");e.eatWhile(/[\w\$_\xa1-\uffff]/);var r=e.current();return g.propertyIsEnumerable(r)?"keyword":x.propertyIsEnumerable(r)?"builtin":k.propertyIsEnumerable(r)||O.propertyIsEnumerable(r)||C.propertyIsEnumerable(r)||w.propertyIsEnumerable(r)||E.propertyIsEnumerable(r)||I.propertyIsEnumerable(r)?"def":L.propertyIsEnumerable(r)||z.propertyIsEnumerable(r)||S.propertyIsEnumerable(r)?"string":M.propertyIsEnumerable(r)?"typeName.standard":W.propertyIsEnumerable(r)?"modifier":_.propertyIsEnumerable(r)?"atom":"variable"}function b(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=null;break}n="*"==r}return"comment"}function y(e,t,n,r,c){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=c}function p(e,t,n){var r=e.indented;return e.context&&"statement"==e.context.type&&(r=e.context.indented),e.context=new y(r,t,n,null,e.context)}function u(e){var t=e.context.type;return(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}const B={startState:function(){return{tokenize:null,context:new y(0,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;l=null;var r=(t.tokenize||P)(e,t);if("comment"==r)return r;if(null==n.align&&(n.align=!0),";"!=l&&":"!=l&&","!=l||"statement"!=n.type)if("{"==l)p(t,e.column(),"}");else if("["==l)p(t,e.column(),"]");else if("("==l)p(t,e.column(),")");else if("}"==l){for(;"statement"==n.type;)n=u(t);for("}"==n.type&&(n=u(t));"statement"==n.type;)n=u(t)}else l==n.type?u(t):N&&(("}"==n.type||"top"==n.type)&&";"!=l||"statement"==n.type&&"newstatement"==l)&&p(t,e.column(),"statement");else u(t);return t.startOfLine=!1,r},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},autocomplete:m}}}}]);