(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1711:function(n,e,t){"use strict";t.r(e),t.d(e,"brainfuck",(function(){return i}));var o="><+-.,[]".split("");const i={startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(n,e){if(n.eatSpace())return null;n.sol()&&(e.commentLine=!1);var t=n.next().toString();return-1===o.indexOf(t)?(e.commentLine=!0,n.eol()&&(e.commentLine=!1),"comment"):!0===e.commentLine?(n.eol()&&(e.commentLine=!1),"comment"):"]"===t||"["===t?("["===t?e.left++:e.right++,"bracket"):"+"===t||"-"===t?"keyword":"<"===t||">"===t?"atom":"."===t||","===t?"def":void(n.eol()&&(e.commentLine=!1))}}}}]);