"use strict";(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[3592],{3592:(p,u,l)=>{l.r(u),l.d(u,{mathematica:()=>k});var c="[a-zA-Z\\$][a-zA-Z0-9\\$]*",f="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",o="(?:`(?:`?"+f+")?)",A=new RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)"+o+"?(?:\\*\\^[+-]?\\d+)?))"),Z=new RegExp("(?:"+f+o+"?(?:\\*\\^[+-]?\\d+)?)"),$=new RegExp("(?:`?)(?:"+c+")(?:`(?:"+c+"))*(?:`?)");function i(e,a){var n;return'"'===(n=e.next())?(a.tokenize=v,a.tokenize(e,a)):"("===n&&e.eat("*")?(a.commentLevel++,a.tokenize=h,a.tokenize(e,a)):(e.backUp(1),e.match(A,!0,!1)||e.match(Z,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string.special":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variableName.special":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"character":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variableName.constant":e.match($,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function v(e,a){for(var n,r=!1,t=!1;null!=(n=e.next());){if('"'===n&&!t){r=!0;break}t=!t&&"\\"===n}return r&&!t&&(a.tokenize=i),"string"}function h(e,a){for(var n,r;a.commentLevel>0&&null!=(r=e.next());)"("===n&&"*"===r&&a.commentLevel++,"*"===n&&")"===r&&a.commentLevel--,n=r;return a.commentLevel<=0&&(a.tokenize=i),"comment"}const k={startState:function(){return{tokenize:i,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},languageData:{commentTokens:{block:{open:"(*",close:"*)"}}}}}}]);