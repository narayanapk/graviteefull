"use strict";(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[6890],{86890:(h,u,f)=>{f.r(u),f.d(u,{puppet:()=>d});var c={},l=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;function t(e,n){for(var i=n.split(" "),o=0;o<i.length;o++)c[i[o]]=e}function s(e,n){for(var i,o,a=!1;!e.eol()&&(i=e.next())!=n.pending;){if("$"===i&&"\\"!=o&&'"'==n.pending){a=!0;break}o=i}return a&&e.backUp(1),n.continueString=i!=n.pending,"string"}t("keyword","class define site node include import inherits"),t("keyword","case if else in and elsif default or"),t("atom","false true running present absent file directory undef"),t("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");const d={startState:function(){return{inDefinition:!1,inInclude:!1,continueString:!1,pending:!1}},token:function(e,n){return e.eatSpace()?null:function p(e,n){var i=e.match(/[\w]+/,!1),o=e.match(/(\s+)?\w+\s+=>.*/,!1),a=e.match(/(\s+)?[\w:_]+(\s+)?{/,!1),g=e.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),r=e.next();if("$"===r)return e.match(l)?n.continueString?"variableName.special":"variable":"error";if(n.continueString)return e.backUp(1),s(e,n);if(n.inDefinition){if(e.match(/(\s+)?[\w:_]+(\s+)?/))return"def";e.match(/\s+{/),n.inDefinition=!1}return n.inInclude?(e.match(/(\s+)?\S+(\s+)?/),n.inInclude=!1,"def"):e.match(/(\s+)?\w+\(/)?(e.backUp(1),"def"):o?(e.match(/(\s+)?\w+/),"tag"):i&&c.hasOwnProperty(i)?(e.backUp(1),e.match(/[\w]+/),e.match(/\s+\S+\s+{/,!1)&&(n.inDefinition=!0),"include"==i&&(n.inInclude=!0),c[i]):/(^|\s+)[A-Z][\w:_]+/.test(i)?(e.backUp(1),e.match(/(^|\s+)[A-Z][\w:_]+/),"def"):a?(e.match(/(\s+)?[\w:_]+/),"def"):g?(e.match(/(\s+)?[@]{1,2}/),"atom"):"#"==r?(e.skipToEnd(),"comment"):"'"==r||'"'==r?(n.pending=r,s(e,n)):"{"==r||"}"==r?"bracket":"/"==r?(e.match(/^[^\/]*\//),"string.special"):r.match(/[0-9]/)?(e.eatWhile(/[0-9]+/),"number"):"="==r?(">"==e.peek()&&e.next(),"operator"):(e.eatWhile(/[\w-]/),null)}(e,n)}}}}]);