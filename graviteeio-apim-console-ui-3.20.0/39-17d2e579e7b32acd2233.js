(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1718:function(t,e,n){"use strict";n.r(e),n.d(e,"commonLisp",(function(){return f}));var r,o=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,c=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,a=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,i=/[^\s'`,@()\[\]";]/;function l(t){for(var e;e=t.next();)if("\\"==e)t.next();else if(!i.test(e)){t.backUp(1);break}return t.current()}function u(t,e){if(t.eatSpace())return r="ws",null;if(t.match(a))return"number";var n;if("\\"==(n=t.next())&&(n=t.next()),'"'==n)return(e.tokenize=s)(t,e);if("("==n)return r="open","bracket";if(")"==n||"]"==n)return r="close","bracket";if(";"==n)return t.skipToEnd(),r="ws","comment";if(/['`,@]/.test(n))return null;if("|"==n)return t.skipTo("|")?(t.next(),"variableName"):(t.skipToEnd(),"error");if("#"==n)return"("==(n=t.next())?(r="open","bracket"):/[+\-=\.']/.test(n)||/\d/.test(n)&&t.match(/^\d*#/)?null:"|"==n?(e.tokenize=d)(t,e):":"==n?(l(t),"meta"):"\\"==n?(t.next(),l(t),"string.special"):"error";var i=l(t);return"."==i?null:(r="symbol","nil"==i||"t"==i||":"==i.charAt(0)?"atom":"open"==e.lastType&&(o.test(i)||c.test(i))?"keyword":"&"==i.charAt(0)?"variableName.special":"variableName")}function s(t,e){for(var n,r=!1;n=t.next();){if('"'==n&&!r){e.tokenize=u;break}r=!r&&"\\"==n}return"string"}function d(t,e){for(var n,o;n=t.next();){if("#"==n&&"|"==o){e.tokenize=u;break}o=n}return r="ws","comment"}const f={startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:u}},token:function(t,e){t.sol()&&"number"!=typeof e.ctx.indentTo&&(e.ctx.indentTo=e.ctx.start+1),r=null;var n=e.tokenize(t,e);return"ws"!=r&&(null==e.ctx.indentTo?"symbol"==r&&c.test(t.current())?e.ctx.indentTo=e.ctx.start+t.indentUnit:e.ctx.indentTo="next":"next"==e.ctx.indentTo&&(e.ctx.indentTo=t.column()),e.lastType=r),"open"==r?e.ctx={prev:e.ctx,start:t.column(),indentTo:null}:"close"==r&&(e.ctx=e.ctx.prev||e.ctx),n},indent:function(t){var e=t.ctx.indentTo;return"number"==typeof e?e:t.ctx.start+1},languageData:{commentTokens:{line:";;",block:{open:"#|",close:"|#"}},closeBrackets:{brackets:["(","[","{",'"']}}}}}]);