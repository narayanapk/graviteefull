(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1767:function(e,n,t){"use strict";t.r(n),t.d(n,"puppet",(function(){return c}));var i={},a=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;function o(e,n){for(var t=n.split(" "),a=0;a<t.length;a++)i[t[a]]=e}function s(e,n){for(var t,i,a=!1;!e.eol()&&(t=e.next())!=n.pending;){if("$"===t&&"\\"!=i&&'"'==n.pending){a=!0;break}i=t}return a&&e.backUp(1),t==n.pending?n.continueString=!1:n.continueString=!0,"string"}o("keyword","class define site node include import inherits"),o("keyword","case if else in and elsif default or"),o("atom","false true running present absent file directory undef"),o("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");const c={startState:function(){var e={inDefinition:!1,inInclude:!1,continueString:!1,pending:!1};return e},token:function(e,n){return e.eatSpace()?null:function(e,n){var t=e.match(/[\w]+/,!1),o=e.match(/(\s+)?\w+\s+=>.*/,!1),c=e.match(/(\s+)?[\w:_]+(\s+)?{/,!1),r=e.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),u=e.next();if("$"===u)return e.match(a)?n.continueString?"variableName.special":"variable":"error";if(n.continueString)return e.backUp(1),s(e,n);if(n.inDefinition){if(e.match(/(\s+)?[\w:_]+(\s+)?/))return"def";e.match(/\s+{/),n.inDefinition=!1}return n.inInclude?(e.match(/(\s+)?\S+(\s+)?/),n.inInclude=!1,"def"):e.match(/(\s+)?\w+\(/)?(e.backUp(1),"def"):o?(e.match(/(\s+)?\w+/),"tag"):t&&i.hasOwnProperty(t)?(e.backUp(1),e.match(/[\w]+/),e.match(/\s+\S+\s+{/,!1)&&(n.inDefinition=!0),"include"==t&&(n.inInclude=!0),i[t]):/(^|\s+)[A-Z][\w:_]+/.test(t)?(e.backUp(1),e.match(/(^|\s+)[A-Z][\w:_]+/),"def"):c?(e.match(/(\s+)?[\w:_]+/),"def"):r?(e.match(/(\s+)?[@]{1,2}/),"atom"):"#"==u?(e.skipToEnd(),"comment"):"'"==u||'"'==u?(n.pending=u,s(e,n)):"{"==u||"}"==u?"bracket":"/"==u?(e.match(/^[^\/]*\//),"string.special"):u.match(/[0-9]/)?(e.eatWhile(/[0-9]+/),"number"):"="==u?(">"==e.peek()&&e.next(),"operator"):(e.eatWhile(/[\w-]/),null)}(e,n)}}}}]);