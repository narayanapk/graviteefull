(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1777:function(t,n,e){"use strict";e.r(n),e.d(n,"solr",(function(){return c}));var r=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,o=/[\|\!\+\-\*\?\~\^\&]/,i=/^(OR|AND|NOT|TO)$/i;function u(t){return function(n,e){for(var o=t;(t=n.peek())&&null!=t.match(r);)o+=n.next();return e.tokenize=a,i.test(o)?"operator":function(t){return parseFloat(t).toString()===t}(o)?"number":":"==n.peek()?"propertyName":"string"}}function a(t,n){var e,i,c=t.next();return'"'==c?n.tokenize=(i=c,function(t,n){for(var e,r=!1;null!=(e=t.next())&&(e!=i||r);)r=!r&&"\\"==e;return r||(n.tokenize=a),"string"}):o.test(c)?n.tokenize=(e=c,function(t,n){return"|"==e?t.eat(/\|/):"&"==e&&t.eat(/\&/),n.tokenize=a,"operator"}):r.test(c)&&(n.tokenize=u(c)),n.tokenize!=a?n.tokenize(t,n):null}const c={startState:function(){return{tokenize:a}},token:function(t,n){return t.eatSpace()?null:n.tokenize(t,n)}}}}]);