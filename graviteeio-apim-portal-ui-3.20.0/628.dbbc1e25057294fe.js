"use strict";(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[628],{20628:(w,u,s)=>{function r(e){return new RegExp("^(?:"+e.join("|")+")$","i")}s.r(u),s.d(u,{lua:()=>v});var f=r(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),h=r(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),p=r(["function","if","repeat","do","\\(","{"]),m=r(["end","until","\\)","}"]),b=function g(e){return new RegExp("^(?:"+e.join("|")+")","i")}(["end","until","\\)","}","else","elseif"]);function c(e){for(var t=0;e.eat("=");)++t;return e.eat("["),t}function l(e,t){var n=e.next();return"-"==n&&e.eat("-")?e.eat("[")&&e.eat("[")?(t.cur=d(c(e),"comment"))(e,t):(e.skipToEnd(),"comment"):'"'==n||"'"==n?(t.cur=function k(e){return function(t,n){for(var i,a=!1;null!=(i=t.next())&&(i!=e||a);)a=!a&&"\\"==i;return a||(n.cur=l),"string"}}(n))(e,t):"["==n&&/[\[=]/.test(e.peek())?(t.cur=d(c(e),"string"))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function d(e,t){return function(n,a){for(var o,i=null;null!=(o=n.next());)if(null==i)"]"==o&&(i=0);else if("="==o)++i;else{if("]"==o&&i==e){a.cur=l;break}i=null}return t}}const v={startState:function(e){return{basecol:0,indentDepth:0,cur:l}},token:function(e,t){if(e.eatSpace())return null;var n=t.cur(e,t),a=e.current();return"variable"==n&&(h.test(a)?n="keyword":f.test(a)&&(n="builtin")),"comment"!=n&&"string"!=n&&(p.test(a)?++t.indentDepth:m.test(a)&&--t.indentDepth),n},indent:function(e,t,n){var a=b.test(t);return e.basecol+n.unit*(e.indentDepth-(a?1:0))},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:"--",block:{open:"--[[",close:"]]--"}}}}}}]);