"use strict";(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[946],{60946:(R,h,u)=>{u.r(h),u.d(h,{asciidoc:()=>A});var m=1e3,v=function(n){for(var r in this.states=n,this.regExps={},this.matchMappings={},this.states){for(var t=this.states[r],o=[],i=0,g=this.matchMappings[r]={defaultToken:"text"},s="g",c=[],l=0;l<t.length;l++){var e=t[l];if(e.defaultToken&&(g.defaultToken=e.defaultToken),e.caseInsensitive&&(s="gi"),null!=e.regex){e.regex instanceof RegExp&&(e.regex=e.regex.toString().slice(1,-1));var a=e.regex,k=new RegExp("(?:("+a+")|(.))").exec("a").length-2;if(Array.isArray(e.token))if(1==e.token.length||1==k)e.token=e.token[0];else{if(k-1!=e.token.length)throw new Error("number of classes and regexp groups in '"+e.token+"'\n'"+e.regex+"' doesn't match\n"+(k-1)+"!="+e.token.length);e.tokenArray=e.token,e.token=null,e.onMatch=this.$arrayTokens}else"function"==typeof e.token&&!e.onMatch&&(e.onMatch=k>1?this.$applyToken:e.token);k>1&&(/\\\d/.test(e.regex)?a=e.regex.replace(/\\([0-9]+)/g,function(x,d){return"\\"+(parseInt(d,10)+i+1)}):(k=1,a=this.removeCapturingGroups(e.regex)),!e.splitRegex&&"string"!=typeof e.token&&c.push(e)),g[i]=l,i+=k,o.push(a),e.onMatch||(e.onMatch=null)}}c.forEach(function(x){x.splitRegex=this.createSplitterRegexp(x.regex,s)},this),this.regExps[r]=new RegExp("("+o.join(")|(")+")|($)",s)}};(function(){this.$setMaxTokenCount=function(n){m=0|n},this.$applyToken=function(n){var r=this.splitRegex.exec(n).slice(1),t=this.token.apply(this,r);if("string"==typeof t)return[{type:t,value:n}];for(var o=[],i=0,g=t.length;i<g;i++)r[i]&&(o[o.length]={type:t[i],value:r[i]});return o},this.$arrayTokens=function(n){if(!n)return[];var r=this.splitRegex.exec(n);if(!r)return"text";for(var t=[],o=this.tokenArray,i=0,g=o.length;i<g;i++)r[i+1]&&(t[t.length]={type:o[i],value:r[i+1]});return t},this.removeCapturingGroups=function(n){return n.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g,function(t,o){return o?"(?:":t})},this.createSplitterRegexp=function(n,r){if(-1!=n.indexOf("(?=")){var t=0,o=!1,i={};n.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,function(g,s,c,l,e,a){return o?o="]"!=e:e?o=!0:l?(t==i.stack&&(i.end=a+1,i.stack=-1),t--):c&&(t++,1!=c.length&&(i.stack=t,i.start=a)),g}),null!=i.end&&/^\)*$/.test(n.substr(i.end))&&(n=n.substring(0,i.start)+n.substr(i.end))}return new RegExp(n,(r||"").replace("g",""))},this.getLineTokens=function(n,r){if(r&&"string"!=typeof r){var t=r.slice(0);r=t[0]}else t=[];var o=r||"start",i=this.states[o];i||(i=this.states[o="start"]);var g=this.matchMappings[o],s=this.regExps[o];s.lastIndex=0;for(var c,l=[],e=0,a={type:null,value:""};c=s.exec(n);){var k=g.defaultToken,x=null,d=c[0],p=s.lastIndex;if(p-d.length>e){var b=n.substring(e,p-d.length);a.type==k?a.value+=b:(a.type&&l.push(a),a={type:k,value:b})}for(var f=0;f<c.length-2;f++)if(void 0!==c[f+1]){k=(x=i[g[f]]).onMatch?x.onMatch(d,o,t):x.token,x.next&&(o="string"==typeof x.next?x.next:x.next(o,t),(i=this.states[o])||(window.console&&console.error&&console.error(o,"doesn't exist"),i=this.states[o="start"]),g=this.matchMappings[o],e=p,(s=this.regExps[o]).lastIndex=p);break}if(d)if("string"==typeof k)x&&!1===x.merge||a.type!==k?(a.type&&l.push(a),a={type:k,value:d}):a.value+=d;else if(k)for(a.type&&l.push(a),a={type:null,value:""},f=0;f<k.length;f++)l.push(k[f]);if(e==n.length)break;if(e=p,l.length>m){for(;e<n.length;)a.type&&l.push(a),a={value:n.substring(e,e+=2e3),type:"overflow"};o="start",t=[];break}}return a.type&&l.push(a),t.length>1&&t[0]!==o&&t.unshift(o),{tokens:l,state:t.length?t:o}}}).call(v.prototype);var w={empty:null,text:null,keyword:"keyword",control:"keyword",operator:"operator",constant:"atom",numeric:"number",character:"atom",escape:"atom",variable:"variable",parameter:"variable-3",language:"variable-2",comment:"comment",line:"comment","double-slash":"comment","double-dash":"comment","number-sign":"comment",percentage:"comment",block:"comment",doc:"comment",string:"string",quoted:"string",single:"string",double:"string",triple:"string",unquoted:"string",interpolated:"string",regexp:"string-2",meta:"keyword",literal:"qualifier",support:"builtin",markup:"tag",underline:"link",link:"link",strong:"strong",heading:"header",em:"em",list:"variable-2",numbered:"variable-2",unnumbered:"variable-2",quote:"quote",raw:"variable-2",invalid:"error",illegal:"invalidchar",deprecated:"error"},$=function(n,r){var t=r.plannedTokens.shift();return void 0===t?null:(n.match(t.value),function(n){for(var r=null,t=0;t<n.length;t++)void 0!==w[n[t]]&&(r=w[n[t]]);return r}(t.type.split(".")))},y=function(n,r){if(r.plannedTokens.length>0)return $(n,r);var t=r.current,o=n.match(/.*$/,!1)[0],i=E.getLineTokens(o,t);return r.plannedTokens=i.tokens,r.current=i.state,$(n,r)},E=new v((new function(){var n="[a-zA-Z\xa1-\uffff]+\\b";function r(l){return(/\w/.test(l)?"\\b":"(?:\\B|^)")+l+"[^"+l+"].*?"+l+"(?![\\w*])"}this.$rules={start:[{token:"empty",regex:/$/},{token:"literal",regex:/^\.{4,}\s*$/,next:"listingBlock"},{token:"literal",regex:/^-{4,}\s*$/,next:"literalBlock"},{token:"literal",regex:/^\+{4,}\s*$/,next:"passthroughBlock"},{token:"keyword",regex:/^={4,}\s*$/},{token:"text",regex:/^\s*$/},{token:"empty",regex:"",next:"dissallowDelimitedBlock"}],dissallowDelimitedBlock:[{include:"paragraphEnd"},{token:"comment",regex:"^//.+$"},{token:"keyword",regex:"^(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s"},{include:"listStart"},{token:"literal",regex:/^\s+.+$/,next:"indentedBlock"},{token:"empty",regex:"",next:"text"}],paragraphEnd:[{token:"doc.comment",regex:/^\/{4,}\s*$/,next:"commentBlock"},{token:"tableBlock",regex:/^\s*[|!]=+\s*$/,next:"tableBlock"},{token:"keyword",regex:/^(?:--|''')\s*$/,next:"start"},{token:"option",regex:/^\[.*\]\s*$/,next:"start"},{token:"pageBreak",regex:/^>{3,}$/,next:"start"},{token:"literal",regex:/^\.{4,}\s*$/,next:"listingBlock"},{token:"titleUnderline",regex:/^(?:={2,}|-{2,}|~{2,}|\^{2,}|\+{2,})\s*$/,next:"start"},{token:"singleLineTitle",regex:/^={1,6}\s+\S.*$/,next:"start"},{token:"otherBlock",regex:/^(?:\*{2,}|_{2,})\s*$/,next:"start"},{token:"optionalTitle",regex:/^\.[^.\s].+$/,next:"start"}],listStart:[{token:"keyword",regex:/^\s*(?:\d+\.|[a-zA-Z]\.|[ixvmIXVM]+\)|\*{1,5}|-|\.{1,5})\s/,next:"listText"},{token:"meta.tag",regex:/^.+(?::{2,4}|;;)(?: |$)/,next:"listText"},{token:"keyword",regex:/^\+\s*$/,next:"start"}],text:[{token:["link","link"],regex:/((?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+)(\[.*?\])/},{token:["link","link"],regex:/(?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+/},{token:"link",regex:/\b[\w\.\/\-]+@[\w\.\/\-]+\b/},{include:"macros"},{include:"paragraphEnd"},{token:"literal",regex:/\+{3,}/,next:"smallPassthrough"},{token:"escape",regex:/\((?:C|TM|R)\)|\.{3}|->|<-|=>|<=|&#(?:\d+|x[a-fA-F\d]+);|(?: |^)--(?=\s+\S)/},{token:"escape",regex:/\\[_*'`+#]|\\{2}[_*'`+#]{2}/},{token:"keyword",regex:/\s\+$/},{token:"text",regex:n},{token:["keyword","string","keyword"],regex:/(<<[\w\d\-$]+,)(.*?)(>>|$)/},{token:"keyword",regex:/<<[\w\d\-$]+,?|>>/},{token:"constant.character",regex:/\({2,3}.*?\){2,3}/},{token:"support.function.list.callout",regex:/^(?:<\d+>|\d+>|>) /,next:"text"},{token:"keyword",regex:/\[\[.+?\]\]/},{token:"support",regex:/^\[{3}[\w\d =\-]+\]{3}/},{include:"quotes"},{token:"empty",regex:/^\s*$/,next:"start"}],listText:[{include:"listStart"},{include:"text"}],indentedBlock:[{token:"literal",regex:/^[\s\w].+$/,next:"indentedBlock"},{token:"literal",regex:"",next:"start"}],listingBlock:[{token:"literal",regex:/^\.{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"constant.numeric",regex:"<\\d+>"},{token:"literal",regex:"[^<]+"},{token:"literal",regex:"<"}],literalBlock:[{token:"literal",regex:/^-{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"constant.numeric",regex:"<\\d+>"},{token:"literal",regex:"[^<]+"},{token:"literal",regex:"<"}],passthroughBlock:[{token:"literal",regex:/^\+{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"literal",regex:n+"|\\d+"},{include:"macros"},{token:"literal",regex:"."}],smallPassthrough:[{token:"literal",regex:/[+]{3,}/,next:"dissallowDelimitedBlock"},{token:"literal",regex:/^\s*$/,next:"dissallowDelimitedBlock"},{token:"literal",regex:n+"|\\d+"},{include:"macros"}],commentBlock:[{token:"doc.comment",regex:/^\/{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"doc.comment",regex:"^.*$"}],tableBlock:[{token:"tableBlock",regex:/^\s*\|={3,}\s*$/,next:"dissallowDelimitedBlock"},{token:"tableBlock",regex:/^\s*!={3,}\s*$/,next:"innerTableBlock"},{token:"tableBlock",regex:/\|/},{include:"text",noEscape:!0}],innerTableBlock:[{token:"tableBlock",regex:/^\s*!={3,}\s*$/,next:"tableBlock"},{token:"tableBlock",regex:/^\s*|={3,}\s*$/,next:"dissallowDelimitedBlock"},{token:"tableBlock",regex:/\!/}],macros:[{token:"macro",regex:/{[\w\-$]+}/},{token:["text","string","text","constant.character","text"],regex:/({)([\w\-$]+)(:)?(.+)?(})/},{token:["text","markup.list.macro","keyword","string"],regex:/(\w+)(footnote(?:ref)?::?)([^\s\[]+)?(\[.*?\])?/},{token:["markup.list.macro","keyword","string"],regex:/([a-zA-Z\-][\w\.\/\-]*::?)([^\s\[]+)(\[.*?\])?/},{token:["markup.list.macro","keyword"],regex:/([a-zA-Z\-][\w\.\/\-]+::?)(\[.*?\])/},{token:"keyword",regex:/^:.+?:(?= |$)/}],quotes:[{token:"string.italic",regex:/__[^_\s].*?__/},{token:"string.italic",regex:r("_")},{token:"keyword.bold",regex:/\*\*[^*\s].*?\*\*/},{token:"keyword.bold",regex:r("\\*")},{token:"literal",regex:/\+\+[^+\s].*?\+\+/},{token:"literal",regex:r("\\+")},{token:"literal",regex:/\$\$.+?\$\$/},{token:"literal",regex:r("\\$")},{token:"literal",regex:/``[^`\s].*?``/},{token:"literal",regex:r("`")},{token:"keyword",regex:/\^[^\^].*?\^/},{token:"keyword",regex:r("\\^")},{token:"keyword",regex:/~[^~].*?~/},{token:"keyword",regex:r("~")},{token:"keyword",regex:/##?/},{token:"keyword",regex:/(?:\B|^)``|\b''/}]};var t={macro:"constant.character",tableBlock:"doc.comment",titleUnderline:"markup.heading",singleLineTitle:"markup.heading",pageBreak:"string",option:"string.regexp",otherBlock:"markup.list",literal:"support.function",optionalTitle:"constant.numeric",escape:"constant.language.escape",link:"markup.underline.list"};for(var o in this.$rules)for(var i=this.$rules[o],g=i.length;g--;){var s=i[g];if(s.include||"string"==typeof s){var c=[g,1].concat(this.$rules[s.include||s]);s.noEscape&&(c=c.filter(function(l){return!l.next})),i.splice.apply(i,c)}else s.token in t&&(s.token=t[s.token])}}).$rules);const A={startState:function(){return{current:"start",plannedTokens:[]}},blankLine:function(n){y("",n)},token:y}}}]);