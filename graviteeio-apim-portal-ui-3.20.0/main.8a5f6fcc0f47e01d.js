(self.webpackChunkgravitee_portal_webui=self.webpackChunkgravitee_portal_webui||[]).push([[179],{97520:(Ue,Ae,d)=>{"use strict";function f(n){return n}d.d(Ae,{J:()=>f})},68948:(Ue,Ae)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.BestAvailableLocale=void 0,Ae.BestAvailableLocale=function d(f,n){for(var E=n;;){if(f.has(E))return E;var m=E.lastIndexOf("-");if(!~m)return;m>=2&&"-"===E[m-2]&&(m-=2),E=E.slice(0,m)}}},64190:(Ue,Ae,d)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.BestFitMatcher=void 0;var f=d(68948),n=d(29429);Ae.BestFitMatcher=function E(m,y,b){var k={},j={},L={},O=new Set;m.forEach(function(ze){var Be=new Intl.Locale(ze).minimize().toString(),Ve=Intl.getCanonicalLocales(ze)[0]||ze;k[Be]=ze,j[ze]=ze,L[Ve]=ze,O.add(Be),O.add(ze),O.add(Ve)});for(var H,R=0,V=y;R<V.length;R++){var Z=V[R];if(H)break;var de=Z.replace(n.UNICODE_EXTENSION_SEQUENCE_REGEX,"");if(m.has(de)){H=de;break}if(O.has(de)){H=de;break}var Oe=new Intl.Locale(de),Ne=Oe.maximize().toString(),it=Oe.minimize().toString();if(O.has(it)){H=it;break}H=(0,f.BestAvailableLocale)(O,Ne)}return H?{locale:j[H]||L[H]||k[H]||H}:{locale:b()}}},22021:(Ue,Ae)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.CanonicalizeLocaleList=void 0,Ae.CanonicalizeLocaleList=function d(f){return Intl.getCanonicalLocales(f)}},13057:(Ue,Ae,d)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.LookupMatcher=void 0;var f=d(29429),n=d(68948);Ae.LookupMatcher=function E(m,y,b){for(var k={locale:""},j=0,L=y;j<L.length;j++){var O=L[j],H=O.replace(f.UNICODE_EXTENSION_SEQUENCE_REGEX,""),R=(0,n.BestAvailableLocale)(m,H);if(R)return k.locale=R,O!==H&&(k.extension=O.slice(H.length+1,O.length)),k}return k.locale=b(),k}},7887:(Ue,Ae,d)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.LookupSupportedLocales=void 0;var f=d(29429),n=d(68948);Ae.LookupSupportedLocales=function E(m,y){for(var b=[],k=0,j=y;k<j.length;k++){var O=j[k].replace(f.UNICODE_EXTENSION_SEQUENCE_REGEX,""),H=(0,n.BestAvailableLocale)(m,O);H&&b.push(H)}return b}},12334:(Ue,Ae,d)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.ResolveLocale=void 0;var f=d(13057),n=d(64190),E=d(29429),m=d(96450);Ae.ResolveLocale=function y(b,k,j,L,O,H){for(var V,Z=(V="lookup"===j.localeMatcher?(0,f.LookupMatcher)(b,k,H):(0,n.BestFitMatcher)(b,k,H)).locale,de={locale:"",dataLocale:Z},Oe="-u",Ne=0,it=L;Ne<it.length;Ne++){var ze=it[Ne];(0,E.invariant)(Z in O,"Missing locale data for ".concat(Z));var Be=O[Z];(0,E.invariant)("object"==typeof Be&&null!==Be,"locale data ".concat(ze," must be an object"));var Ve=Be[ze];(0,E.invariant)(Array.isArray(Ve),"keyLocaleData for ".concat(ze," must be an array"));var Re=Ve[0];(0,E.invariant)("string"==typeof Re||null===Re,"value must be string or null but got ".concat(typeof Re," in key ").concat(ze));var at="";if(V.extension){var Tt=(0,m.UnicodeExtensionValue)(V.extension,ze);void 0!==Tt&&(""!==Tt?~Ve.indexOf(Tt)&&(Re=Tt,at="-".concat(ze,"-").concat(Re)):~Tt.indexOf("true")&&(Re="true",at="-".concat(ze)))}if(ze in j){var Ye=j[ze];(0,E.invariant)("string"==typeof Ye||typeof Ye>"u"||null===Ye,"optionsValue must be String, Undefined or Null"),~Ve.indexOf(Ye)&&Ye!==Re&&(Re=Ye,at="")}de[ze]=Re,Oe+=at}if(Oe.length>2){var M=Z.indexOf("-x-");if(-1===M)Z+=Oe;else{var P=Z.slice(0,M),J=Z.slice(M,Z.length);Z=P+Oe+J}Z=Intl.getCanonicalLocales(Z)[0]}return de.locale=Z,de}},96450:(Ue,Ae,d)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.UnicodeExtensionValue=void 0;var f=d(29429);Ae.UnicodeExtensionValue=function n(E,m){(0,f.invariant)(2===m.length,"key must have 2 elements");var y=E.length,b="-".concat(m,"-"),k=E.indexOf(b);if(-1!==k){for(var j=k+4,L=j,O=j,H=!1;!H;){var R=E.indexOf("-",O);2==(-1===R?y-O:R-O)?H=!0:-1===R?(L=y,H=!0):(L=R,O=R+1)}return E.slice(j,L)}if(b="-".concat(m),-1!==(k=E.indexOf(b))&&k+3===y)return""}},29429:(Ue,Ae)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.invariant=Ae.UNICODE_EXTENSION_SEQUENCE_REGEX=void 0,Ae.UNICODE_EXTENSION_SEQUENCE_REGEX=/-u(?:-[0-9a-z]{2,8})+/gi,Ae.invariant=function d(f,n,E){if(void 0===E&&(E=Error),!f)throw new E(n)}},73540:(Ue,Ae,d)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.ResolveLocale=Ae.LookupSupportedLocales=Ae.match=void 0;var f=d(22021),n=d(12334);Ae.match=function E(b,k,j,L){var O=k.reduce(function(H,R){return H.add(R),H},new Set);return(0,n.ResolveLocale)(O,(0,f.CanonicalizeLocaleList)(b),{localeMatcher:(null==L?void 0:L.algorithm)||"best fit"},[],{},function(){return j}).locale};var m=d(7887);Object.defineProperty(Ae,"LookupSupportedLocales",{enumerable:!0,get:function(){return m.LookupSupportedLocales}});var y=d(12334);Object.defineProperty(Ae,"ResolveLocale",{enumerable:!0,get:function(){return y.ResolveLocale}})},61300:(Ue,Ae,d)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.shouldPolyfill=void 0;var f=d(73540),n=d(90953);Ae.shouldPolyfill=function y(b){if(void 0===b&&(b="en"),!("RelativeTimeFormat"in Intl)||!function E(b){if(!b)return!0;var k=Array.isArray(b)?b:[b];return Intl.RelativeTimeFormat.supportedLocalesOf(k).length===k.length}(b)||!function m(b){try{return"numberingSystem"in new Intl.RelativeTimeFormat(b||"en",{numeric:"auto"}).resolvedOptions()}catch{return!1}}(b))return(0,f.match)([b],n.supportedLocales,"en")}},90953:(Ue,Ae)=>{"use strict";Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.supportedLocales=void 0,Ae.supportedLocales=["af-NA","af","agq","ak","am","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-EH","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SS","ar-SY","ar-TD","ar-TN","ar-YE","ar","as","asa","ast","az-Cyrl","az-Latn","az","bas","be-tarask","be","bem","bez","bg","bm","bn-IN","bn","bo-IN","bo","br","brx","bs-Cyrl","bs-Latn","bs","ca-AD","ca-ES-valencia","ca-FR","ca-IT","ca","ccp-IN","ccp","ce","ceb","cgg","chr","ckb-IR","ckb","cs","cy","da-GL","da","dav","de-AT","de-BE","de-CH","de-IT","de-LI","de-LU","de","dje","doi","dsb","dua","dyo","dz","ebu","ee-TG","ee","el-CY","el","en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en","eo","es-419","es-AR","es-BO","es-BR","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EA","es-EC","es-GQ","es-GT","es-HN","es-IC","es-MX","es-NI","es-PA","es-PE","es-PH","es-PR","es-PY","es-SV","es-US","es-UY","es-VE","es","et","eu","ewo","fa-AF","fa","ff-Adlm-BF","ff-Adlm-CM","ff-Adlm-GH","ff-Adlm-GM","ff-Adlm-GW","ff-Adlm-LR","ff-Adlm-MR","ff-Adlm-NE","ff-Adlm-NG","ff-Adlm-SL","ff-Adlm-SN","ff-Adlm","ff-Latn-BF","ff-Latn-CM","ff-Latn-GH","ff-Latn-GM","ff-Latn-GN","ff-Latn-GW","ff-Latn-LR","ff-Latn-MR","ff-Latn-NE","ff-Latn-NG","ff-Latn-SL","ff-Latn","ff","fi","fil","fo-DK","fo","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-DZ","fr-GA","fr-GF","fr-GN","fr-GP","fr-GQ","fr-HT","fr-KM","fr-LU","fr-MA","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-MR","fr-MU","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-SY","fr-TD","fr-TG","fr-TN","fr-VU","fr-WF","fr-YT","fr","fur","fy","ga-GB","ga","gd","gl","gsw-FR","gsw-LI","gsw","gu","guz","gv","ha-GH","ha-NE","ha","haw","he","hi","hr-BA","hr","hsb","hu","hy","ia","id","ig","ii","is","it-CH","it-SM","it-VA","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","kgp","khq","ki","kk","kkj","kl","kln","km","kn","ko-KP","ko","kok","ks-Arab","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln-AO","ln-CF","ln-CG","ln","lo","lrc-IQ","lrc","lt","lu","luo","luy","lv","mai","mas-TZ","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni-Beng","mni","mr","ms-BN","ms-ID","ms-SG","ms","mt","mua","my","mzn","naq","nb-SJ","nb","nd","nds-NL","nds","ne-IN","ne","nl-AW","nl-BE","nl-BQ","nl-CW","nl-SR","nl-SX","nl","nmg","nn","nnh","no","nus","nyn","om-KE","om","or","os-RU","os","pa-Arab","pa-Guru","pa","pcm","pl","ps-PK","ps","pt-AO","pt-CH","pt-CV","pt-GQ","pt-GW","pt-LU","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","pt","qu-BO","qu-EC","qu","rm","rn","ro-MD","ro","rof","ru-BY","ru-KG","ru-KZ","ru-MD","ru-UA","ru","rw","rwk","sa","sah","saq","sat-Olck","sat","sbp","sc","sd-Arab","sd-Deva","sd","se-FI","se-SE","se","seh","ses","sg","shi-Latn","shi-Tfng","shi","si","sk","sl","smn","sn","so-DJ","so-ET","so-KE","so","sq-MK","sq-XK","sq","sr-Cyrl-BA","sr-Cyrl-ME","sr-Cyrl-XK","sr-Cyrl","sr-Latn-BA","sr-Latn-ME","sr-Latn-XK","sr-Latn","sr","su-Latn","su","sv-AX","sv-FI","sv","sw-CD","sw-KE","sw-UG","sw","ta-LK","ta-MY","ta-SG","ta","te","teo-KE","teo","tg","th","ti-ER","ti","tk","to","tr-CY","tr","tt","twq","tzm","ug","uk","und","ur-IN","ur","uz-Arab","uz-Cyrl","uz-Latn","uz","vai-Latn","vai-Vaii","vai","vi","vun","wae","wo","xh","xog","yav","yi","yo-BJ","yo","yrl-CO","yrl-VE","yrl","yue-Hans","yue-Hant","yue","zgh","zh-Hans-HK","zh-Hans-MO","zh-Hans-SG","zh-Hans","zh-Hant-HK","zh-Hant-MO","zh-Hant","zh","zu"]},59042:(Ue,Ae,d)=>{"use strict";var f=d(98539),n=d(91028),E=d(21033),m=d(14451),b=(d(19007),d(67278)),k=d(79313);class O extends(function L(H){return class extends H{constructor(){super(),this._controller={},this._handleKeyDown=this._onKeyDown.bind(this),this._handleKeyUp=this._onKeyUp.bind(this)}connectedCallback(){super.connectedCallback(),this.keyboardTarget.addEventListener("keydown",this._handleKeyDown),this.keyboardTarget.addEventListener("keyup",this._handleKeyUp)}disconnectedCallback(){this.keyboardTarget.removeEventListener("keydown",this._handleKeyDown),this.keyboardTarget.removeEventListener("keyup",this._handleKeyUp),super.disconnectedCallback()}_onKeyDown(R){this._controller[R.keyCode]=!0,this.onKeyboard(this._controller,R)}_onKeyUp(R){this._controller[R.keyCode]&&(this._controller[R.keyCode]=null)}isPressed(...R){return null==R.find(V=>null==this._controller[V])}get keyboardTarget(){return this}onKeyboard(R,V){}}}(n.oi)){static get properties(){return{type:{type:String},danger:{type:Boolean},disabled:{type:Boolean},primary:{type:Boolean},outlined:{type:Boolean},link:{type:Boolean},href:{type:String},skeleton:{type:Boolean},icon:{type:String},iconRight:{type:String,attribute:"icon-right"},loading:{type:Boolean},title:{type:String,reflect:!0},provider:{type:String},small:{type:Boolean},tabindex:{type:Number,reflect:!0},_hasContent:{type:Boolean,attribute:!1}}}static get styles(){return[n.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          margin: 0.2rem;
          vertical-align: middle;
          --gv-icon--s: 23px;
          --github--c: #444;
          --google--c: #4285f4;
          --oidc--c: var(--gv-button-oidc--bgc, #000000);
          --gravitee--c: var(--gv-button-graviteeio_am--bgc, #86c3d0);
        }

        :host(:not([link])) {
          outline: 0;
        }

        .github {
          --gv-button--bgc: var(--github--c);
        }

        .google {
          --gv-button--bgc: var(--google--c);
        }

        .oidc {
          --gv-button--bgc: var(--oidc--c);
          --gv-button-icon--c: #fff;
        }

        .oidc.outlined {
          --gv-button-icon--c: var(--oidc--c);
        }

        .button.graviteeio_am {
          --gv-button--bgc: var(--gravitee--c);
          color: #383e3f;
        }

        /* RESET */
        .button {
          background: #fff;
          border: 1px solid #000;
          font-size: var(--gv-button--fz, var(--gv-theme-font-size-m, 14px));
          margin: 0;
          padding: 0;
          height: 100%;
          text-decoration: none;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          outline: 0;
        }

        .button.small {
          --gv-icon--s: 16px;
        }

        .button.small:not(.link) {
          max-height: 25px;
          min-height: 25px;
          min-width: 25px;
          --gv-button--p: 1px 4px;
        }

        /* BASE */
        .button:not(.link) {
          border-radius: var(--gv-button--bdrs, 0.15rem);
          cursor: pointer;
          min-height: 39px;
          min-width: 39px;
          padding: var(--gv-button--p, 7px 14px);
          text-transform: uppercase;
          user-select: none;
          width: 100%;
        }

        .button.iconLeft:not(.noContent) slot {
          margin-left: 7px;
        }

        .button.iconRight:not(.noContent) slot {
          margin-right: 7px;
        }

        /* COLORS */
        .default {
          --c: var(--gv-button--c, var(--gv-theme-font-color-light, #ffffff));
          --bgc: var(--gv-button--bgc, var(--gv-theme-color-dark, #28444f));
          --icon--c: var(--gv-button--c, var(--gv-theme-font-color-light, #ffffff));
          --gv-icon--c: var(--icon--c);
          --gv-icon-opacity--c: var(--icon--c);
        }

        .primary {
          --c: var(--gv-button-primary--c, var(--gv-theme-font-color-light, #ffffff));
          --bgc: var(--gv-button-primary--bgc, var(--gv-theme-color, #5a7684));
          --icon--c: var(--gv-button-primary--c, var(--gv-theme-font-color-light, #ffffff));
          --gv-icon--c: var(--icon--c);
          --gv-icon-opacity--c: var(--icon--c);
          font-weight: 500;
        }

        .danger {
          --c: var(--gv-button-danger--c, var(--gv-theme-font-color-light, #ffffff));
          --bgc: var(--gv-button-danger--bgc, var(--gv-theme-color-danger, #ff5722));
          --icon--c: var(--gv-button-danger--c, var(--gv-theme-font-color-light, #ffffff));
          --gv-icon--c: var(--icon--c);
          --gv-icon-opacity--c: var(--icon--c);
        }

        /* MODES */
        :host([skeleton]) .button:not(.link) {
          border-color: var(--gv-theme-skeleton-color, #bfbfbf);
        }

        .button:not(.link) {
          background-color: var(--bgc);
          border-color: var(--bgc);
          color: var(--c);
        }

        .button.outlined {
          background-color: var(--c);
          color: var(--bgc);
          --gv-icon--c: var(--bgc);
          --gv-icon-opacity--c: var(--bgc);
        }

        :host(:focus) .button:not(.link):not(.disabled),
        :host(:hover) .button:not(.link):not(.disabled) {
          box-shadow: 0 1px 3px var(--gv-theme-color-darker, #383e3f);
        }

        :host(:active) .button {
          box-shadow: none;
        }

        .button.disabled {
          cursor: default;
          opacity: 0.5;
        }

        .button.skeleton > gv-icon {
          opacity: 0;
        }

        /* TRANSITIONS */
        .button {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          transition: all 75ms ease-in-out;
        }

        /* We can do this because we set a visible focus state */
        .button::-moz-focus-inner {
          border: 0;
        }

        .button slot {
          flex: 1;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .button.noContent slot {
          display: none;
        }

        .loading gv-icon {
          animation: spinner 1.6s linear infinite;
          --gv-icon--s: 20px;
        }

        .loading.small gv-icon {
          --gv-icon--s: 18px;
        }

        @keyframes spinner {
          to {
            transform: rotate(360deg);
          }
        }

        .link {
          border: 0;
          cursor: pointer;
          background-color: transparent;
        }

        button.link {
          text-decoration: underline;
        }

        :host([skeleton]) .link {
          color: transparent;
        }
      `,E.F,m.p]}constructor(){super(),this.tabindex=0,this.type="button",this.addEventListener("click",this._onClick.bind(this))}onKeyboard(R,V){(this.isPressed("13")||this.isPressed("32"))&&this._onClick(V)}_onClick(R){if(this.href&&R.preventDefault(),!this.disabled&&!this.loading&&!this.skeleton){const V=this.closest("form");V&&"submit"===this.type&&V.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0})),(0,k.h)(this,"click")}}render(){const R={button:!0,primary:this.primary&&!this.danger,danger:this.danger,skeleton:this.skeleton&&!this.link,default:!this.primary&&!this.danger&&!this.link,outlined:this.outlined,icon:this.icon||this.iconRight,iconLeft:this._hasIconLeft(),iconRight:this.iconRight,loading:this.loading&&!this.link,link:this.link&&!this.primary&&!this.danger,disabled:this.disabled,small:this.small,noContent:!this._hasContent};return this.provider&&(R[this.provider]=!0,this.icon=`thirdparty:${this.provider}`,R.icon=!0,R.iconLeft=!0),this.href?n.dy`<a tabindex="-1" .href="${this.href}" .title="${(0,b.o)(this.title)}" class=${(0,f.$)(R)}>
        ${this._getIconLeft()}
        <slot></slot>
        ${this._getIconRight()}
      </a>`:n.dy`<button
        tabindex="-1"
        type=${this.type||"button"}
        .title="${(0,b.o)(this.title)}"
        class=${(0,f.$)(R)}
        .disabled=${this.disabled||this.skeleton}
      >
        ${this._getIconLeft()}
        <slot></slot>
        ${this._getIconRight()}
      </button>`}_getIconRight(){return this.iconRight?!this.loading||this.icon||this.link?n.dy`<gv-icon shape="${this.iconRight}" .title="${(0,b.o)(this.title)}"></gv-icon>`:n.dy`<gv-icon shape="navigation:waiting" .title="${(0,b.o)(this.title)}"></gv-icon>`:""}_hasIconLeft(){return(this.icon||this.loading)&&!this.iconRight}_getIconLeft(){return this._hasIconLeft()?this.loading&&!this.link?n.dy`<gv-icon shape="navigation:waiting" .title="${(0,b.o)(this.title)}"></gv-icon>`:n.dy`<gv-icon shape="${this.icon}" .title="${(0,b.o)(this.title)}"></gv-icon>`:""}updated(R){super.updated(R);const V=this.shadowRoot.querySelector("slot");this._hasContent=V.assignedNodes().map(Z=>Z.textContent).filter(Z=>""!==Z.trim()).length>0}}window.customElements.define("gv-button",O)},19007:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(98539);class E extends f.oi{static get properties(){return{shape:{type:String}}}static get excludedShapes(){return["thirdparty:google","thirdparty:graviteeio_am"]}canCustomize(){return!["thirdparty:google","thirdparty:graviteeio_am","thirdparty:http","thirdparty:jdbc","thirdparty:microsoft","thirdparty:mongodb"].includes(this.shape)}static get styles(){return[f.iv`
        :host {
          box-sizing: border-box;
          display: inline-flex;
          vertical-align: middle;
          --color: var(--gv-icon--c, var(--gv-theme-font-color-dark, #262626));
          --opacity: var(--gv-icon-opacity--c, var(--gv-theme-font-color-dark, #262626));
          --size: var(--gv-icon--s, 32px);
        }

        svg {
          height: var(--size);
          width: var(--size);
          fill: var(--color);
        }
      `]}static getHref(y){const[b,k]=y.split(":");return`./icons/${b}.svg#${k}`}render(){const y=f.YP`<use href="${E.getHref(this.shape)}" />`;return f.dy`<svg xmlns="http://www.w3.org/2000/svg" class="${(0,n.$)({"no-color":!this.canCustomize()})}">${y}</svg>`}}window.customElements.define("gv-icon",E)},75773:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(79313),E=d(98539),m=d(67278),y=d(21033);window.customElements.define("gv-image",class b extends f.oi{static get properties(){return{src:{type:String},skeleton:{type:Boolean,reflect:!0},alt:{type:String},_loaded:{type:Boolean,reflect:!0},_error:{type:Boolean}}}static get styles(){return[f.iv`
        :host {
          display: inline-block;
          overflow: hidden;
        }

        .wrapper,
        img {
          height: 100%;
          width: 100%;
          transition: opacity 0.3s ease-in-out;
        }

        .wrapper {
          align-items: center;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .wrapper.text:not('.skeleton') {
          background-color: var(--gv-theme-neutral-color);
        }

        img {
          display: block;
          object-fit: var(--gv-image--of, cover);
          object-position: center center;
          opacity: 0;
          position: absolute;
          top: 0;
          transition: opacity 150ms ease-in-out;
          left: 0;
        }

        .wrapper.loaded img {
          opacity: 1;
        }

        .error-msg {
          font-size: 0.9rem;
          overflow: hidden;
          padding: 0.25rem;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `,y.F]}constructor(){super(),this.skeleton=!1,this._error=!1,this._loaded=!1}set src(j){const L=this._src;this._src=j,this.requestUpdate("src",L),this._error=!1,this._loaded=!1}get src(){return this._src}_onLoad(j){this._loaded=!0,this.skeleton=!1,(0,n.h)(this,"loaded",{src:this.src,alt:this.alt})}_onError(j){this._error=!0,this.skeleton=!1,this.dispatchEvent(new Event("error"),j)}render(){const j=null==this.src||this._error;return f.dy`
      <div class="wrapper ${(0,E.$)({skeleton:this.skeleton,loaded:this._loaded,text:j})}">
        <img src=${(0,m.o)(this.src)} @load=${this._onLoad} @error=${this._onError} alt="" />
        ${j?f.dy` <div class="error-msg">${this.alt}</div> `:""}
      </div>
    `}})},47026:(Ue,Ae,d)=>{"use strict";d.d(Ae,{D:()=>R});var f=d(98539),n=d(91028),E=d(21033),m=d(79613),y=d(14451),b=d(79313),L=(d(19007),d(53022),d(9455)),O=d(90213),H=d(984);class R extends((0,O.k)(n.oi)){static get properties(){return Object.assign(Object.assign({},super.properties),{type:{type:String,reflect:!0},large:{type:Boolean},medium:{type:Boolean},small:{type:Boolean},icon:{type:String},iconLeft:{type:String,attribute:"icon-left"},loading:{type:Boolean},min:{type:Number},max:{type:Number},autocomplete:{type:String},clipboard:{type:Boolean},clickable:{type:Boolean},clearable:{type:Boolean},noSubmit:{type:Boolean,attribute:"no-submit"},pattern:{type:String,reflect:!0},description:{type:String},_type:{type:String,attribute:!1}})}static get styles(){return[...super.styles,E.F,m.q,y.p,n.iv`
        .clickable input,
        .clickable ::slotted(input) {
          cursor: pointer;
        }

        .clickable input:hover,
        .clickable ::slotted(input:hover) {
          box-shadow: 0 1px 3px var(--gv-theme-neutral-color-dark, #bfbfbf);
        }

        gv-icon {
          --gv-icon--s: 22px;
        }

        .copied {
          --gv-input--bdc: var(--gv-theme-color-success-light, #81c784);
        }

        .copied .box-icon gv-icon {
          --gv-icon--c: var(--gv-theme-color-success-dark, #388e3c);
        }

        div.box-icon gv-icon.loading,
        .loading ::slotted(input) {
          animation: spinner 1.6s linear infinite;
          --gv-icon--s: 20px;
        }

        .loading.small gv-icon {
          --gv-icon--s: 18px;
        }

        @keyframes spinner {
          to {
            transform: rotate(360deg);
          }
        }

        .clipboard input,
        .clipboard ::slotted(input) {
          cursor: copy;
        }

        .clipboard input:read-only:hover,
        .clipboard ::slotted(input:read-only:hover) {
          cursor: not-allowed;
        }

        .clipboard__popover {
          --gv-popover--bgc: var(--gv-theme-color-darker, #383e3f);
          --gv-popover--c: var(--gv-theme-font-color-light, #ffffff);
          --gv-popover--p: 0rem 0.4rem 0rem 0.2rem;
          font-size: 11px;
        }

        .clipboard__popover-content {
          display: flex;
          justify-content: center;
          align-items: center;
          --gv-icon--c: var(--gv-theme-font-color-light, #ffffff);
        }
      `]}static get shapeSearch(){return"general:search"}static get shapeClear(){return"code:error"}static get shapeInvisible(){return"general:invisible"}static get shapeVisible(){return"general:visible"}constructor(){super(),this._type="text",this._showPassword=!1,this.value="",this.autocomplete="off",this.noSubmit=!1}reset(){this.value="",this.getInputElement().blur()}focus(){this.getInputElement().focus()}getInputElement(){return this._input||super.getInputElement()}updated(Z){if(Z.has("_type")&&(this.getInputElement().type=this._type),Z.has("autocomplete")&&(this.getInputElement().autocomplete=this.autocomplete),Z.has("name")&&null!=this.name&&(this.getInputElement().name=this.name),Z.has("required")&&(this.getInputElement().required=this.required,this.getInputElement()["aria-required"]=!!this.required,(null==this.value||""===this.value.trim())&&(this.invalid=!0)),this.readonly?this.getInputElement().setAttribute("readonly",!0):this.getInputElement().removeAttribute("readonly"),Z.has("label")||Z.has("title")){const de=this.title||this.label;null!=de&&(this.getInputElement().title=de)}Z.has("label")&&this.label&&(this.getInputElement()["aria-label"]=this.label),Z.has("pattern")&&(this.getInputElement().pattern=this.pattern,this._regexPattern=new RegExp(this.pattern)),(Z.has("disabled")||Z.has("skeleton"))&&(this.getInputElement().disabled=this.disabled||this.skeleton),Z.has("placeholder")&&null!=this.placeholder&&(this.getInputElement().placeholder=this.placeholder),Z.has("value")&&(this.getInputElement().value=this.value,this.updateState(this.value)),Z.has("min")&&null!=this.min&&(this.getInputElement().min=this.min),Z.has("max")&&null!=this.max&&(this.getInputElement().max=this.max)}_setClipboardIcon(Z){null!=this.icon&&this.icon!==H.Q&&this.icon!==H.x?this.iconLeft=Z:this.icon=Z}firstUpdated(){if(super.firstUpdated(),this.catchSlot(),this.clipboard)Promise.all([d.e(8592),d.e(4191)]).then(d.t.bind(d,44191,23)).then(Z=>this.copy=()=>{Z.default(this.value),this._copied=!0,this._setClipboardIcon(H.Q),setTimeout(()=>{this._copied=!1,this._setClipboardIcon(H.x)},1e3)}),this._setClipboardIcon(H.x),setTimeout(()=>{this.shadowRoot.querySelector(".clipboard__popover").addEventListener("click",de=>{de.preventDefault(),de.stopPropagation(),this.copy(this.value)})},0);else{const Z=this.shadowRoot.querySelector("gv-icon.link");Z&&Z.addEventListener("click",this._onIconClick.bind(this))}this.getInputElement().id=this._id,this.bindInputEvents()}bindInputEvents(){this.getInputElement().addEventListener("input",this._onInput.bind(this)),this.getInputElement().addEventListener("keyup",this._onKeyUp.bind(this)),this.getInputElement().addEventListener("keypress",this._onKeyPress.bind(this))}catchSlot(){const Z=this.getInputElement();for(const de of this.childNodes)if(1===de.nodeType){const Oe="input"===de.nodeName.toLowerCase()?de:de.querySelector("input");if(Oe){this._input=Oe;break}}this._input&&Z.remove()}updateState(Z){if(super.updateState(Z),!0===this.valid&&!this.readonly)if(this._regexPattern){if(null!=Z&&""!==Z.trim()){const de=Z.match(this._regexPattern);this.setValidity(null==de,`field not respect the pattern ${this._regexPattern}`)}}else if("number"===this._type&&null!=Z&&("number"==typeof Z||""!==Z.trim())){const de=Number(Z).valueOf();isNaN(de)?this.setValidity(!0,"field is not number"):null!=this.min&&this.min>de?this.setValidity(!0,`field is < ${this.min}`):null!=this.max&&this.max<de?this.setValidity(!0,`field is > ${this.max}`):this.setValidity(!1)}}_onInput(Z){this.updateState(Z.target.value),this.value=Z.target.value,(0,b.h)(this,"input",this.value)}_onKeyPress(Z){if("number"===this._type){let de;de="paste"===Z.type?Z.clipboardData.getData("text/plain"):String.fromCharCode(Z.keyCode);let Oe=/[0-9]/;(null==this.min||this.min<0)&&(Oe=/[0-9-]/),Oe.test(de)||Z.preventDefault()}}_onKeyUp(Z){if(13===Z.keyCode){if(!this.noSubmit){const de=this.closest("form");de&&de.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}(0,b.h)(this,"submit",this.value)}}get isClearable(){return this.clearable&&!this.disabled&&!this.readonly&&!this.loading&&null!=this.value&&""!==this.value}set type(Z){["text","password","email","search","number","url"].includes(Z)&&(this._type=Z),"url"===this._type&&(this.pattern="(https?://.w*)(:\\d*)?\\/?(.*)"),"email"===this._type&&(this.pattern=/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),"search"===this._type&&null==this.icon&&null==this.iconLeft&&(this.icon=R.shapeSearch,this.clearable=!0),"password"===this._type&&(this.icon=R.shapeSearch)}get type(){return this._type}_onIconClick(){(0,b.h)(this,"icon-click",this.value),(0,b.h)(this,"submit",this.value)}_onIconVisibleClick(Z){this.isPassword&&(Z.preventDefault(),Z.stopPropagation(),this._showPassword=!this._showPassword,this._type=this._showPassword?"text":"password")}get isPassword(){return!this.disabled&&("password"===this._type||"text"===this._type&&this._showPassword)}get hasClickableIcon(){return!this.disabled&&!this.readonly&&(this.clickable||"search"===this._type||this.clipboard)}get hasClipboard(){return!this.disabled&&this.clipboard}clear(){this.focus(),this.value="",(0,b.h)(this,"clear",this.value)}_renderClearIcon(){return this.isClearable?n.dy`<div class="box-icon box-icon-clear">
        <gv-icon class="link" shape="code:error" title="${(0,L.ag)("gv-input.clear")}" @click="${this.clear}"></gv-icon>
      </div>`:""}_shapePassword(){return this._showPassword?"general:visible":"general:hidden"}_renderPasswordIcon(){if(this.isPassword){const Z=this._shapePassword();return n.dy`<div class="box-icon">
        <gv-icon class="link" shape="${Z}" title="${this._showPassword?"Show":"Hide"}" @click="${this._onIconVisibleClick}"></gv-icon>
      </div>`}return""}get hasBackground(){return!this.loading}renderIcon(){let Z=null;if((!this.isPassword&&this.icon||this.iconLeft)&&(Z=!this.isPassword&&this.icon||this.iconLeft),this.loading&&(Z="navigation:waiting"),Z){const de={"box-icon":!0,"box-icon-left":null!=this.iconLeft||this.clearable,"box-icon-bgc":this.hasBackground},Oe={link:this.hasClickableIcon,loading:this.loading};let Ne="";if("search"===this._type)Ne=(0,L.ag)("gv-input.search");else{if(this.hasClipboard)return Ne=(0,L.ag)("gv-input.copy"),n.dy`<div class="${(0,f.$)(de)}">
          <gv-popover class="clipboard__popover" event="click" delay="750" .arrow="${!1}">
            <gv-icon class="${(0,f.$)(Oe)}" shape="${Z}" title="${Ne}"></gv-icon>
            <div slot="popover" class="clipboard__popover-content">
              <gv-icon shape="code:check"></gv-icon>
              <div>Copied</div>
            </div>
          </gv-popover>
        </div>`;this.placeholder&&(Ne=this.placeholder)}return n.dy`<div class="${(0,f.$)(de)}">
        <gv-icon class="${(0,f.$)(Oe)}" shape="${Z}" title="${Ne}"></gv-icon>
      </div>`}return""}render(){return n.dy`
      <div class="${(0,f.$)({"box-input":!0,skeleton:this.skeleton,large:this.large,medium:this.medium||!this.large&&!this.small,small:this.small,icon:!!this.icon&&!this.clearable,clearable:this.clearable,"icon-left":!!this.iconLeft||!!this.icon&&this.clearable,clipboard:this.hasClipboard,required:this.required,copied:this.hasClipboard&&this._copied})}">
        ${this.renderLabel()}
        <input />
        <slot></slot>
        ${this._renderClearIcon()} ${this.renderIcon()} ${this._renderPasswordIcon()}
      </div>
      ${null!=this.description?n.dy`<div class="description" .innerHTML="${this.description}"></div>`:""}
    `}}window.customElements.define("gv-input",R)},73513:(Ue,Ae,d)=>{"use strict";var f=d(9455),n=d(91028),E=d(62967),m=d(61300),y=function(L,O,H,R){return new(H||(H=Promise))(function(Z,de){function Oe(ze){try{it(R.next(ze))}catch(Be){de(Be)}}function Ne(ze){try{it(R.throw(ze))}catch(Be){de(Be)}}function it(ze){ze.done?Z(ze.value):function V(Z){return Z instanceof H?Z:new H(function(de){de(Z)})}(ze.value).then(Oe,Ne)}it((R=R.apply(L,O||[])).next())})};const b={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"},k=[{unit:"year",duration:315576e5},{unit:"month",duration:26298e5},{unit:"week",duration:6048e5},{unit:"day",duration:864e5},{unit:"hour",duration:36e5},{unit:"minute",duration:6e4},{unit:"second",duration:1e3}];window.customElements.define("gv-relative-time",class j extends n.oi{static get properties(){return{datetime:{type:String},title:{type:String,reflect:!0},noFuture:{type:Boolean},_relativeTime:{type:String,attribute:!1},_updateIntervalId:{type:String,attribute:!1}}}constructor(){super(),this._formatter=null}getFormatter(){return y(this,void 0,void 0,function*(){return this._formatter??((0,m.shouldPolyfill)()?Promise.all([d.e(4454),d.e(1547)]).then(d.bind(d,41547)).then(()=>Promise.all([d.e(4454),d.e(3609)]).then(d.bind(d,83609))).then(()=>Promise.all([...Object.values((0,f.Bz)()).map(O=>d(22926)(`./${O}`))])).then(()=>(this._formatter=Intl.RelativeTimeFormat,this._formatter)).catch(O=>{throw console.error(O),new Error("Cannot load @formatjs/intl polyfills")}):(this._formatter=Intl.RelativeTimeFormat,this._formatter))})}set datetime(O){O=this.noFuture?this._formatDateInThePast(O):O;const H=new Intl.DateTimeFormat((0,f.G3)(),b);this.title=H.format(new Date(O)),this._datetime=O}_formatDateInThePast(O){if(O){const H=new Date;H.getTime()<new Date(O).getTime()&&(O=H)}return O}_format(O,H){return y(this,void 0,void 0,function*(){const R=yield this.getFormatter(),V=(Oe,Ne)=>{if(!isNaN(Oe))return new R(H,{numeric:"auto"}).format(-Oe,Ne)},de=(new Date).getTime()-new Date(O).getTime();for(const{unit:Oe,duration:Ne}of k){const it=de/Ne,ze=Math.round(it);if(Math.abs(it)>=1)return V(ze,Oe)}return V(Math.round(de/1e3),"second")})}connectedCallback(){super.connectedCallback(),null==this.updateIntervalId&&(setTimeout(()=>{this.performUpdate()}),this.updateIntervalId=setInterval(()=>{this.performUpdate()},1e4))}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.updateIntervalId),this.updateIntervalId=null}render(){return n.dy`<span title="${this.title}">${(0,E.C)(this._format(this._datetime,(0,f.G3)()))}</span>`}})},39110:(Ue,Ae,d)=>{"use strict";var f=d(98539),n=d(91028),E=d(21033),m=d(14451),b=(d(19007),d(79313));window.customElements.define("gv-tag",class k extends n.oi{static get properties(){return{icon:{type:String},iconRight:{type:String,attribute:"icon-right"},major:{type:Boolean},minor:{type:Boolean},skeleton:{type:Boolean},clickable:{type:Boolean}}}static get styles(){return[E.F,m.p,n.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          margin: 0.2rem;
          vertical-align: middle;
        }

        div.default {
          --bgc: var(--gv-tag--bgc, var(--gv-theme-neutral-color-lighter, #fafafa));
          --bdc: var(--gv-tag--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          --bds: var(--gv-tag--bds, solid);
          --bdw: var(--gv-tag--bdw, 1px);
          --c: var(--gv-tag--c, var(--gv-theme-font-color-dark, #262626));
        }

        div.major {
          --bgc: var(--gv-tag-major--bgc, var(--gv-theme-color, #5a7684));
          --bdc: var(--gv-tag-major--bdc, var(--gv-theme-color, #5a7684));
          --bds: var(--gv-tag-major--bds, solid);
          --bdw: var(--gv-tag-major--bdw, 1px);
          --c: var(--gv-tag-major--c, var(--gv-theme-font-color-light, #ffffff));
        }

        div.minor {
          --bgc: var(--gv-tag-minor--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          --bdc: var(--gv-tag-minor--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          --bds: var(--gv-tag-minor--bds, dashed);
          --bdw: var(--gv-tag-minor--bdw, 1px);
          --c: var(--gv-tag-minor--c, var(--gv-theme-font-color-dark, #262626));
        }

        div {
          background-color: var(--bgc);
          border-color: var(--bdc);
          border-radius: var(--gv-tag--bdr, 4px);
          border-style: var(--bds);
          border-width: var(--bdw);
          box-shadow: var(--gv-tag--bsw, none);
          color: var(--c);
          --fz: var(--gv-tag--fz, var(--gv-theme-font-size-s, 12px));
          font-size: var(--fz);
          line-height: var(--fz);
          padding: var(--gv-tag--p, 4px 8px);
          --gv-icon--s: var(--gv-tag-icon--s, 18px);
          --gv-icon--c: var(--c);
          --gv-icon-opacity--c: var(--c);

          word-break: normal;
        }

        div > * {
          vertical-align: middle;
          display: inline-flex;
        }
      `]}_onTagClick(L){this.clickable&&(L.stopPropagation(),(0,b.h)(this,"click",{}))}render(){return n.dy`
      <div class=${(0,f.$)({default:!this.major&&!this.minor,major:this.major,minor:this.minor&&!this.major,skeleton:this.skeleton,link:this.clickable})} @click="${this._onTagClick}">
        ${this.icon?n.dy`<gv-icon shape="${this.icon}"></gv-icon>`:""}<slot></slot>${this.iconRight?n.dy`<gv-icon shape="${this.iconRight}"></gv-icon>`:""}
      </div>
    `}})},79313:(Ue,Ae,d)=>{"use strict";function f(n,E,m,y={}){const b=`${n.nodeName.toLocaleLowerCase()}:${E}`,k=new CustomEvent(b,Object.assign({detail:m,bubbles:!0,composed:!0},y));n.dispatchEvent(k)}d.d(Ae,{h:()=>f})},9455:(Ue,Ae,d)=>{"use strict";d.d(Ae,{hk:()=>z,Bz:()=>re,G3:()=>Pe,ag:()=>M,m0:()=>xe});var f=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof f<"u"&&f,n_searchParams="URLSearchParams"in f,n_iterable="Symbol"in f&&"iterator"in Symbol,n_blob="FileReader"in f&&"Blob"in f&&function(){try{return new Blob,!0}catch{return!1}}(),n_formData="FormData"in f,n_arrayBuffer="ArrayBuffer"in f;if(n_arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],y=ArrayBuffer.isView||function(A){return A&&m.indexOf(Object.prototype.toString.call(A))>-1};function b(A){if("string"!=typeof A&&(A=String(A)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(A)||""===A)throw new TypeError('Invalid character in header field name: "'+A+'"');return A.toLowerCase()}function k(A){return"string"!=typeof A&&(A=String(A)),A}function j(A){var B={next:function(){var q=A.shift();return{done:void 0===q,value:q}}};return n_iterable&&(B[Symbol.iterator]=function(){return B}),B}function L(A){this.map={},A instanceof L?A.forEach(function(B,q){this.append(q,B)},this):Array.isArray(A)?A.forEach(function(B){this.append(B[0],B[1])},this):A&&Object.getOwnPropertyNames(A).forEach(function(B){this.append(B,A[B])},this)}function O(A){if(A.bodyUsed)return Promise.reject(new TypeError("Already read"));A.bodyUsed=!0}function H(A){return new Promise(function(B,q){A.onload=function(){B(A.result)},A.onerror=function(){q(A.error)}})}function R(A){var B=new FileReader,q=H(B);return B.readAsArrayBuffer(A),q}function de(A){if(A.slice)return A.slice(0);var B=new Uint8Array(A.byteLength);return B.set(new Uint8Array(A)),B.buffer}function Oe(){return this.bodyUsed=!1,this._initBody=function(A){this.bodyUsed=this.bodyUsed,this._bodyInit=A,A?"string"==typeof A?this._bodyText=A:n_blob&&Blob.prototype.isPrototypeOf(A)?this._bodyBlob=A:n_formData&&FormData.prototype.isPrototypeOf(A)?this._bodyFormData=A:n_searchParams&&URLSearchParams.prototype.isPrototypeOf(A)?this._bodyText=A.toString():n_arrayBuffer&&n_blob&&function E(A){return A&&DataView.prototype.isPrototypeOf(A)}(A)?(this._bodyArrayBuffer=de(A.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n_arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(A)||y(A))?this._bodyArrayBuffer=de(A):this._bodyText=A=Object.prototype.toString.call(A):this._bodyText="",this.headers.get("content-type")||("string"==typeof A?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n_searchParams&&URLSearchParams.prototype.isPrototypeOf(A)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n_blob&&(this.blob=function(){var A=O(this);if(A)return A;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?O(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(R)}),this.text=function(){var A=O(this);if(A)return A;if(this._bodyBlob)return function V(A){var B=new FileReader,q=H(B);return B.readAsText(A),q}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function Z(A){for(var B=new Uint8Array(A),q=new Array(B.length),Q=0;Q<B.length;Q++)q[Q]=String.fromCharCode(B[Q]);return q.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n_formData&&(this.formData=function(){return this.text().then(Be)}),this.json=function(){return this.text().then(JSON.parse)},this}L.prototype.append=function(A,B){A=b(A),B=k(B);var q=this.map[A];this.map[A]=q?q+", "+B:B},L.prototype.delete=function(A){delete this.map[b(A)]},L.prototype.get=function(A){return A=b(A),this.has(A)?this.map[A]:null},L.prototype.has=function(A){return this.map.hasOwnProperty(b(A))},L.prototype.set=function(A,B){this.map[b(A)]=k(B)},L.prototype.forEach=function(A,B){for(var q in this.map)this.map.hasOwnProperty(q)&&A.call(B,this.map[q],q,this)},L.prototype.keys=function(){var A=[];return this.forEach(function(B,q){A.push(q)}),j(A)},L.prototype.values=function(){var A=[];return this.forEach(function(B){A.push(B)}),j(A)},L.prototype.entries=function(){var A=[];return this.forEach(function(B,q){A.push([q,B])}),j(A)},n_iterable&&(L.prototype[Symbol.iterator]=L.prototype.entries);var Ne=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ze(A,B){if(!(this instanceof ze))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var q=(B=B||{}).body;if(A instanceof ze){if(A.bodyUsed)throw new TypeError("Already read");this.url=A.url,this.credentials=A.credentials,B.headers||(this.headers=new L(A.headers)),this.method=A.method,this.mode=A.mode,this.signal=A.signal,!q&&null!=A._bodyInit&&(q=A._bodyInit,A.bodyUsed=!0)}else this.url=String(A);if(this.credentials=B.credentials||this.credentials||"same-origin",(B.headers||!this.headers)&&(this.headers=new L(B.headers)),this.method=function it(A){var B=A.toUpperCase();return Ne.indexOf(B)>-1?B:A}(B.method||this.method||"GET"),this.mode=B.mode||this.mode||null,this.signal=B.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&q)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(q),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==B.cache&&"no-cache"!==B.cache)){var Q=/([?&])_=[^&]*/;Q.test(this.url)?this.url=this.url.replace(Q,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function Be(A){var B=new FormData;return A.trim().split("&").forEach(function(q){if(q){var Q=q.split("="),ne=Q.shift().replace(/\+/g," "),Y=Q.join("=").replace(/\+/g," ");B.append(decodeURIComponent(ne),decodeURIComponent(Y))}}),B}function Ve(A){var B=new L;return A.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(Q){return 0===Q.indexOf("\n")?Q.substr(1,Q.length):Q}).forEach(function(Q){var ne=Q.split(":"),Y=ne.shift().trim();if(Y){var W=ne.join(":").trim();B.append(Y,W)}}),B}function Re(A,B){if(!(this instanceof Re))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');B||(B={}),this.type="default",this.status=void 0===B.status?200:B.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===B.statusText?"":""+B.statusText,this.headers=new L(B.headers),this.url=B.url||"",this._initBody(A)}ze.prototype.clone=function(){return new ze(this,{body:this._bodyInit})},Oe.call(ze.prototype),Oe.call(Re.prototype),Re.prototype.clone=function(){return new Re(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new L(this.headers),url:this.url})},Re.error=function(){var A=new Re(null,{status:0,statusText:""});return A.type="error",A};var at=[301,302,303,307,308];Re.redirect=function(A,B){if(-1===at.indexOf(B))throw new RangeError("Invalid status code");return new Re(null,{status:B,headers:{location:A}})};var Tt=f.DOMException;try{new Tt}catch{(Tt=function(B,q){this.message=B,this.name=q;var Q=Error(B);this.stack=Q.stack}).prototype=Object.create(Error.prototype),Tt.prototype.constructor=Tt}function Ye(A,B){return new Promise(function(q,Q){var ne=new ze(A,B);if(ne.signal&&ne.signal.aborted)return Q(new Tt("Aborted","AbortError"));var Y=new XMLHttpRequest;function W(){Y.abort()}Y.onload=function(){var ie={status:Y.status,statusText:Y.statusText,headers:Ve(Y.getAllResponseHeaders()||"")};ie.url="responseURL"in Y?Y.responseURL:ie.headers.get("X-Request-URL");var Ce="response"in Y?Y.response:Y.responseText;setTimeout(function(){q(new Re(Ce,ie))},0)},Y.onerror=function(){setTimeout(function(){Q(new TypeError("Network request failed"))},0)},Y.ontimeout=function(){setTimeout(function(){Q(new TypeError("Network request failed"))},0)},Y.onabort=function(){setTimeout(function(){Q(new Tt("Aborted","AbortError"))},0)},Y.open(ne.method,function G(ie){try{return""===ie&&f.location.href?f.location.href:ie}catch{return ie}}(ne.url),!0),"include"===ne.credentials?Y.withCredentials=!0:"omit"===ne.credentials&&(Y.withCredentials=!1),"responseType"in Y&&(n_blob?Y.responseType="blob":n_arrayBuffer&&ne.headers.get("Content-Type")&&-1!==ne.headers.get("Content-Type").indexOf("application/octet-stream")&&(Y.responseType="arraybuffer")),!B||"object"!=typeof B.headers||B.headers instanceof L?ne.headers.forEach(function(ie,Ce){Y.setRequestHeader(Ce,ie)}):Object.getOwnPropertyNames(B.headers).forEach(function(ie){Y.setRequestHeader(ie,k(B.headers[ie]))}),ne.signal&&(ne.signal.addEventListener("abort",W),Y.onreadystatechange=function(){4===Y.readyState&&ne.signal.removeEventListener("abort",W)}),Y.send(typeof ne._bodyInit>"u"?null:ne._bodyInit)})}function M(A,B=null){const q=function P(A){try{return A.split(".").reduce((B,q)=>B&&B[q],M._translations[M._lang])}catch{return null}}(A);return null==q?"unknown":B?M._messageFormatter.compile(q)(B):q}Ye.polyfill=!0,f.fetch||(f.fetch=Ye,f.Headers=L,f.Request=ze,f.Response=Re),M._translations={};const J=d(7561);function xe(A){M._lang=A}function Pe(){return M._lang}function z(A,B,q){M._translations[A]=Object.assign({LANGUAGE:q||A},B)}function re(){const A={};for(const B in M._translations){const{LANGUAGE:q}=M._translations[B];A[q]=B}return A}M._messageFormatter=new J(M._lang)},89729:(Ue,Ae,d)=>{"use strict";d.d(Ae,{Eb:()=>H,Pz:()=>k,Qu:()=>Z,Vu:()=>b,YQ:()=>m,an:()=>y,bo:()=>E,ei:()=>R,g7:()=>j,h1:()=>L,kU:()=>V});var f=d(93369),n=d(91028);function E(de){if(de){if(de.version)return de.version;if(de.applicationType){const Oe=(0,f.Od)(de.applicationType);return n.dy`<gv-icon shape="${Oe}"></gv-icon>`}}return null}function m(de){return de?de.name:""}function y(de){if(de){if(de.picture)return de.picture;if(de._links&&de._links.picture)return de._links.picture}return null}function b(de){if(de){if(de.background)return de.background;if(de._links&&de._links.background)return de._links.background}return null}function k(de){return de?de.states:null}function j(de){return de?de.labels:null}function L(de){return de?de.rating_summary:null}function H(de){return de?de.description:""}function R(de){return de&&de.owner?de.owner.display_name:""}function V(de){return de&&null!=de.total_apis?de.total_apis:null}function Z(de){if(de){if(de.version)return`${m(de)}  ${de.version}`;if(de.applicationType)return`${m(de)}  ${de.applicationType}  ${R(de)}`}return m(de)}},91456:(Ue,Ae,d)=>{"use strict";function f(m,y,b){return getComputedStyle(m).getPropertyValue(y).trim()||b}d.d(Ae,{$:()=>E,M:()=>n});const n=function(y,b,k){return y?b.startsWith("--")?f(y,b,k):f(y,`--${b}`,k):k};function E(m){const y=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(m.trim());return y?{r:parseInt(y[1],16),g:parseInt(y[2],16),b:parseInt(y[3],16)}:null}},93369:(Ue,Ae,d)=>{"use strict";function f(y){if(y){const k=y._links?y._links.optionalLogo:y.optionalLogo,j=y._links?y._links.backgroundImage:y.backgroundImage;n("--gv-theme-logo",y._links?y._links.logo:y.logo),n("--gv-theme-optional-logo",k),n("--gv-theme-homepage-background-image",j),function E(y,b){let k=document.querySelector("link[rel~='icon']");k||(k=document.createElement("link"),k.rel="icon",document.getElementsByTagName("head")[0].appendChild(k)),k.href=y||b}(y._links?y._links.favicon:y.favicon,"images/gravitee-favicon.png"),y.definition.data.forEach(O=>{O.css.forEach(H=>{document.documentElement.style.setProperty(H.name,H.value)})})}}function n(y,b,k){setTimeout(()=>{document.documentElement.style.setProperty(y,b?`url(${b})`:"none")},0)}function m(y){switch(y.toLowerCase()){case"browser":case"web":return"devices:laptop";case"native":return"devices:android";case"backend_to_backend":return"devices:server";default:return"layout:layout-top-panel-2"}}d.d(Ae,{Od:()=>m,_v:()=>f})},22385:(Ue,Ae,d)=>{"use strict";function f(O,H=250,R="..."){return O&&O.length>H?`${O.substring(0,H)}${R}`:O}function n(O,H){return!(!O||!H)&&JSON.stringify(O.map(R=>R.path+R.active))===JSON.stringify(H.map(R=>R.path+R.active))}function k(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,O=>{const H=16*Math.random()|0;return("x"===O?H:3&H|8).toString(16)})}d.d(Ae,{$G:()=>f,Vj:()=>k,YW:()=>n})},90213:(Ue,Ae,d)=>{"use strict";d.d(Ae,{k:()=>n});var f=d(91028);function n(E){return class extends E{static get properties(){return{disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},skeleton:{type:Boolean},value:{type:String,reflect:!0},label:{type:String},title:{type:String},name:{type:String},placeholder:{type:String},description:{type:String},autofocus:{type:Boolean},invalid:{type:Boolean,reflect:!0},valid:{type:Boolean,reflect:!0}}}static get styles(){return[f.iv`
          :host {
            box-sizing: border-box;
            margin: 0.2rem;
            display: block;
          }

          :host([invalid]) :not(.clipboard) input,
          :host([invalid]) :not(.clipboard) ::slotted(.input),
          :host([invalid]) :not(.clipboard) .box-icon-left,
          :host([invalid]) :not(.clipboard) textarea,
          :host([invalid]) :not(.clipboard) select,
          :host([invalid]) :not(.clipboard) .input {
            box-shadow: inset 3px 0 0 var(--gv-input-invalid--bxshc, var(--gv-theme-color-error, #da1a1b));
          }

          :host([readonly]) :not(.clipboard) input,
          :host([readonly]) :not(.clipboard) ::slotted(.input),
          :host([readonly]) .textarea,
          :host([readonly]) :not(.clipboard) select,
          :host([readonly]) .input {
            border-left: 1px solid var(--gv-input--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          }

          :host([readonly]) input::placeholder {
            color: transparent;
          }
        `]}constructor(){super(),this._id=`gv-input-${(new Date).getTime()}`,this.valid=!0,this.invalid=!1}updateState(m){this.required&&!this.readonly?this.setValidity(null==m||0===m.length||"string"==typeof m&&""===m.trim(),"field is required"):this.setValidity()}setValidity(m=!1,y=""){const b=this.getInputElement();b&&b.setCustomValidity&&(m?((null==y||""===y.trim())&&(y="field is not valid"),b.setCustomValidity(y)):b.setCustomValidity("")),this.invalid=m,this.valid=!this.invalid}firstUpdated(){this.autofocus&&null!=this.getInputElement()&&this.getInputElement().focus(),this.updateState(this.value)}updated(m){m.has("value")&&this.updateState(this.value)}getInputElement(){return this.shadowRoot?this.shadowRoot.querySelector("input"):null}get offsetHeight(){if(null!=this.description){const m=this.shadowRoot.querySelector(".description");if(null!=m)return super.offsetHeight-m.offsetHeight}return super.offsetHeight}renderLabel(){return this.label?f.dy`<label for=${this.id} title="${this.label}">${this.label}</label>`:""}}}},81918:(Ue,Ae,d)=>{"use strict";d.d(Ae,{J:()=>b});var f=d(91028),n=d(48498),m=(d(2012),d(89729)),y=d(94774);function b(k){return class extends((0,y.k)(k)){static get properties(){return Object.assign(Object.assign({},super.properties),{item:{type:Object},href:{type:String},metrics:{type:Object},_item:{type:Object,attribute:!1}})}constructor(){super(),this._skeletonAttribute="item"}_onImageLoaded(){this._item&&(this._skeleton=!1)}_renderImage(){return this._item&&!this._empty?f.dy`<gv-identity-picture
          .skeleton="${this._skeleton}"
          .display_name="${(0,m.Qu)(this._item)}"
          .picture="${(0,m.an)(this._item)}"
          @load="${this._onImageLoaded}"
        ></gv-identity-picture>`:""}_onTagClick(j,L){L.detail.tagValue=j}_renderLabels(j){const L=(0,m.g7)(this._item);return L?(0,n.r)(L,O=>O,O=>f.dy`<gv-tag ?clickable="${j}" @gv-tag:click="${this._onTagClick.bind(this,O)}" ?skeleton="${this._skeleton}" major
              >${O}</gv-tag
            >`):""}_renderStates(){const j=(0,m.Pz)(this._item);return j?(0,n.r)(j,L=>L,({value:L,major:O,minor:H})=>f.dy`
            <gv-state ?skeleton="${this._skeleton}" ?major="${!0===O}" ?minor="${!0===H}">${L}</gv-state>
          `):""}_onClickToMetrics(j){j.detail.item=this._item}_renderMetricsWithRating(){return this.metrics?f.dy`
          <gv-metrics .metrics="${this.metrics}" @gv-metrics:click="${this._onClickToMetrics}"> ${this._renderInfoRating()} </gv-metrics>
        `:this._renderInfoRating()}_renderInfoRating(){const j=(0,m.h1)(this._item);return j&&j.count?f.dy`<gv-rating readonly .skeleton="${this._skeleton}" .value="${j.average}" .count="${j.count}"></gv-rating>`:""}}}},43830:(Ue,Ae,d)=>{"use strict";d.d(Ae,{P:()=>n});function n(E){const m="ResizeObserver"in window?Promise.resolve(window.ResizeObserver):d.e(1347).then(d.bind(d,31347)).then(y=>y.default);return class extends E{_onResize({width:y}){null!=this.onResize&&this.onResize({width:y}),null!=this.breakpoints&&this.breakpoints.width.forEach(b=>{const k="w-gte-"+b;b<=y?this.setAttribute(k,""):this.removeAttribute(k);const j="w-lt-"+b;y<b?this.setAttribute(j,""):this.removeAttribute(j)})}connectedCallback(){const y=Object.create(null,{connectedCallback:{get:()=>super.connectedCallback}});return function(E,m,y,b){return new(y||(y=Promise))(function(j,L){function O(V){try{R(b.next(V))}catch(Z){L(Z)}}function H(V){try{R(b.throw(V))}catch(Z){L(Z)}}function R(V){V.done?j(V.value):function k(j){return j instanceof y?j:new y(function(L){L(j)})}(V.value).then(O,H)}R((b=b.apply(E,m||[])).next())})}(this,void 0,void 0,function*(){null!=y.connectedCallback&&y.connectedCallback.call(this);const k=new(yield m)(j=>{window.requestAnimationFrame(()=>{if(!Array.isArray(j)||!j.length)return;const{width:L}=this.getBoundingClientRect();this._onResize({width:L})})});k.observe(this),this._unobserveResize=()=>k.unobserve(this)})}disconnectedCallback(){null!=super.connectedCallback&&super.disconnectedCallback(),this._unobserveResize&&this._unobserveResize()}}}},94774:(Ue,Ae,d)=>{"use strict";d.d(Ae,{k:()=>b});var f=d(91028),n=d(21033),E=d(14129);const y=1e3;function b(k){return class extends k{static get properties(){return{_invisible:{type:Boolean,reflect:!0},_skeleton:{type:Boolean,attribute:!1},_error:{type:Boolean,attribute:!1},_empty:{type:Boolean,attribute:!1}}}static get styles(){return[n.F,E.c,f.iv`
          :host([_invisible]) {
            visibility: hidden;
          }
        `]}constructor(){super(),this._invisible=!0,this._skeleton=!1,this._error=!1,this._empty=!1}updated(j){if(null!=this._skeletonAttribute&&j.has(this._skeletonAttribute)){this._error=!1,this._empty=!1;const L=(new Date).getTime();let O=null;const H=setTimeout(()=>{this._invisible=!1,this._skeleton=!0,O=(new Date).getTime()},500);Promise.resolve(this[this._skeletonAttribute]).then(V=>{clearTimeout(H),O&&O-L<y?setTimeout(()=>{this[this._skeletonAttribute]=V},y-(O-L)):(this._invisible=void 0===V,this._skeleton=null===V,V&&(this._empty=Array.isArray(V)?0===V.length:0===Object.keys(V).length,this[`_${this._skeletonAttribute}`]=V))}).catch(V=>{clearTimeout(H),O&&O-L<y?setTimeout(()=>{this[this._skeletonAttribute]=Promise.reject(V)},y-(O-L)):(this._error=!0,this._skeleton=!1,this._empty=!1,this._invisible=!1)})}}}}},96009:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(21033),E=d(98539);d(75773),d(59042),d(77190),d(50843),window.customElements.define("gv-state",class j extends f.oi{static get properties(){return{default:{type:Boolean},error:{type:Boolean},major:{type:Boolean},skeleton:{type:Boolean},success:{type:Boolean},warn:{type:Boolean}}}static get styles(){return[n.F,f.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          margin: 0.2rem;
          vertical-align: middle;
        }

        div.default {
          --bgc: var(--gv-state--bgc, #f0f5ff);
          --c: var(--gv-state--c, #597ef7);
        }

        div.error {
          --bgc: var(--gv-theme-color-error-light, #e57373);
          --c: var(--gv-theme-neutral-color-lightest, #ffffff);
        }

        div.major {
          --bgc: var(--gv-state-major--bgc, var(--gv-theme-color-light, #d5fdcb));
          --c: var(--gv-state-major--c, var(--gv-theme-color, #009b5b));
        }

        div.success {
          --bgc: var(--gv-theme-color-success-light, #81c784);
          --c: var(--gv-theme-neutral-color-lightest, #ffffff);
        }

        div.warn {
          --bgc: var(--gv-theme-color-warning-light, #ffb74d);
          --c: var(--gv-theme-neutral-color-lightest, #ffffff);
        }

        div {
          background-color: var(--bgc);
          border-radius: var(--gv-state--bdr, 17px);
          color: var(--c);

          --fz: var(--gv-state--fz, var(--gv-theme-font-size-s, 12px));
          font-size: var(--fz);

          font-weight: var(--gv-state--fw, bold);
          text-transform: var(--gv-state--tt, uppercase);
          line-height: var(--fz);
          padding: var(--gv-state--p, 4px 8px);
        }
      `]}render(){return f.dy`
      <div class=${(0,E.$)({default:!(this.major||this.error||this.success||this.warn),error:this.error,major:this.major,skeleton:this.skeleton,success:this.success,warn:this.warn})}>
        <slot></slot>
      </div>
    `}}),d(39110);var O=d(22385),H=d(9455),R=d(81918),V=d(79313),Z=d(89729);class de extends((0,R.J)(f.oi)){static get properties(){return{metrics:{type:Object}}}static get styles(){return[...super.styles,f.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          margin: 0.2rem;

          vertical-align: middle;
          width: 100%;
          max-height: 281px;
          line-height: 22px;
          font-size: var(--gv-theme-font-size-m, 14px);
        }

        gv-identity-picture {
          height: var(--gv-card-full-image--h, 65px);
          width: var(--gv-card-full-image--w, 110px);
          --gv-image--of: contain;
        }

        .card {
          display: flex;
          flex-direction: column;
          height: 250px;
          border-radius: 4px;
          background-color: var(--gv-card-full--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          color: var(--gv-theme-font-color-dark, #262626);
          padding: 16px;
          box-shadow: 0 0 0 1px var(--gv-theme-neutral-color, #f5f5f5), 0 1px 3px var(--gv-theme-neutral-color-dark, #bfbfbf);
          transition: transform 0.3s;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -14px var(--gv-theme-neutral-color-dark, #bfbfbf);
          cursor: pointer;
        }

        .card > div {
          display: flex;
        }

        .image {
          min-height: 65px;
          min-width: 0;
          position: relative;
          padding-top: 0.2rem;
        }

        .title {
          line-height: 22px;
          font-size: var(--gv-theme-font-size-l, 16px);
          text-transform: capitalize;
          font-weight: bold;
          padding-bottom: 5px;
        }

        .owner {
          --gv-icon--c: var(--gv-theme-neutral-color-dark, #bfbfbf);
          --gv-icon--s: 16px;
          color: var(--gv-theme-neutral-color-dark, #bfbfbf);
          display: flex;
          padding-bottom: 2px;
          line-height: initial;
        }

        .content {
          flex: 1;
          padding: 0 10px 10px 10px;
        }

        .version {
          color: var(--gv-theme-neutral-color-dark, #d9d9d9);
          padding: 10px 8px;
          font-size: var(--gv-theme-font-size-s, 12px);
        }

        .description {
          padding: 0 16px;
          margin: 6px 0;
          flex: 1;
          flex-grow: 1;
          max-height: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .infos {
          display: flex;
          border-bottom: 1px solid var(--gv-theme-neutral-color-dark, #d9d9d9);
          padding: 0.5rem 0;
          justify-content: flex-end;
        }

        gv-metrics {
          display: flex;
          height: 100%;
          justify-content: flex-end;
          align-items: stretch;
        }

        .skeleton .infos {
          border-bottom: none;
        }

        .labels {
          padding: 0 16px;
        }

        .error .labels,
        .error .infos,
        .error .states {
          visibility: hidden;
        }
      `,n.F]}constructor(){super(),this.limit=150}_onClick(Ne){!this._empty&&!this._error&&!this._skeleton&&!Ne.target.tagName.toLowerCase().startsWith("gv-metrics")&&(0,V.h)(this,"click",this._item)}render(){const Ne=(0,Z.YQ)(this._item),it=(0,Z.ei)(this._item);return f.dy`<div class="${(0,E.$)({error:this._error||this._empty,card:!0})}" title="${Ne}" @click="${this._onClick}">
      <div class="${(0,E.$)({skeleton:this._skeleton})}">
        <div class="${(0,E.$)({image:!0})}">${this._renderImage()}</div>
        <div class="content">
          <div class="${(0,E.$)({title:!0})}">${Ne}</div>
          ${null!=it&&it.trim().length>0?f.dy`<div class="owner"><gv-icon shape="general:user" size="8px"></gv-icon>${it}</div>`:""}
          <div class="states">${this._renderStates()}</div>
        </div>
        <div class="version"><span class="${(0,E.$)({skeleton:this._skeleton})}">${(0,Z.bo)(this._item)}</span></div>
      </div>
      <div class="${(0,E.$)({skeleton:this._skeleton,description:!0})}">
        ${(0,O.$G)(this._error?(0,H.ag)("gv-card-full.error"):this._empty?(0,H.ag)("gv-card-full.empty"):(0,Z.Eb)(this._item),this.limit)}
      </div>
      <span class="${(0,E.$)({skeleton:this._skeleton})}">
        <div class="infos">${this._renderMetricsWithRating()}</div>

        <div class="labels">${this._renderLabels(!0)}</div>
      </span>
    </div>`}}window.customElements.define("gv-card-full",de)},62905:(Ue,Ae,d)=>{"use strict";d.d(Ae,{d:()=>b});var f=d(91028),n=d(48498),E=d(43830),m=d(9455);d(96009);class b extends((0,E.P)(f.oi)){static get properties(){return{items:{type:Array}}}constructor(){super(),this.breakpoints={width:[845,1270]}}static get styles(){return[f.iv`
        :host {
          box-sizing: border-box;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 0.5rem;
        }

        :host([w-lt-1270]) .container {
          grid-template-columns: repeat(2, 1fr);
        }

        :host([w-lt-845]) .container {
          display: flex;
          flex-direction: column;
        }

        :host([w-lt-845]) .container > .item {
          flex: 0 1 auto;
        }

        .item {
          opacity: 0;
          transition: opacity 100ms ease-in-out;
        }

        .item.show {
          opacity: 1;
        }
      `]}renderItem(j,L){return f.dy`<gv-card-full class="item" .item="${j&&j.item?j.item:null}" .metrics="${j&&j.metrics?j.metrics:null}"> </gv-card-full>`}render(){return this._error?f.dy`<div>${(0,m.ag)("gv-card-list.error")}</div>`:this.items?f.dy`${(0,n.r)(this.items,j=>j,(j,L)=>this.renderItem(j,L))}`:""}updated(j){j.has("items")&&this.items&&this.items.length>0&&this.shadowRoot.querySelectorAll(".item").forEach((O,H)=>{setTimeout(()=>{O.classList.add("show")},100*H)})}}window.customElements.define("gv-card-list",b)},65246:(Ue,Ae,d)=>{"use strict";var f=d(91028),m=(d(59042),d(19007),d(9455)),y=d(53022),b=d(79313);window.customElements.define("gv-confirm",class k extends y.k{static get properties(){return{cancelLabel:{type:String},okLabel:{type:String},message:{type:String},icon:{type:String},danger:{type:Boolean,reflect:!0},disabled:{type:Boolean},_disabled:{type:Boolean}}}static get styles(){return[y.k.styles,f.iv`
        :host {
          --gv-icon--s: 24px;
          margin: 0.2rem;
          box-sizing: border-box;
        }

        :host([danger]) .message gv-icon {
          --gv-icon--c: var(--gv-theme-color-danger, #ff5722);
        }

        .popover {
          --bgc: var(--gv-confirm--bgc, var(--gv-theme-neutral-color-lighter, #fafafa));
          --maw: var(--gv-confirm--maw, 350px);
        }

        .message {
          display: flex;
          align-items: center;
          margin: 1rem 0.5rem;
        }

        .message gv-icon {
          margin-right: 0.5rem;
        }

        .text {
          text-align: center;
          line-height: 24px;
          width: 100%;
        }

        .actions {
          text-align: right;
        }

        ::slotted(*) {
          margin: 0;
          width: 100%;
        }
      `]}constructor(){super(),this.event="click",this.arrow=!0,this.auto=!0,this.icon="code:info",this.cancelLabel=(0,m.ag)("gv-confirm.cancel"),this.okLabel=(0,m.ag)("gv-confirm.ok")}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._closeHandler),window.addEventListener("scroll",this._closeHandler)}disconnectedCallback(){window.removeEventListener("resize",this._closeHandler),window.removeEventListener("scroll",this._closeHandler),super.disconnectedCallback()}_onCancel(){this.close(),(0,b.h)(this,"cancel")}_onOk(){this.close(),(0,b.h)(this,"ok")}_open(L){this._disabled||super._open(L)}renderContent(){return f.dy`
      <div class="message">
        ${this.icon?f.dy`<gv-icon shape="${this.icon}"></gv-icon>`:""}
        <div class="text" .innerHTML="${this.message}"></div>
      </div>
      <div class="actions">
        <gv-button primary small outlined @click="${this._onCancel}">${this.cancelLabel}</gv-button>
        <gv-button primary small @click="${this._onOk}">${this.okLabel}</gv-button>
      </div>
    `}firstUpdated(){super.firstUpdated(),this.danger&&this.shadowRoot.querySelectorAll("gv-button").forEach(L=>L.setAttribute("danger","")),this._disabled=this._calculateIsDisabled(),this.disabled&&this._reflectDisabledOnSlot()}_reflectDisabledOnSlot(){this.shadowRoot.querySelector("slot").assignedNodes({flatten:!0}).forEach(H=>{H.disabled=!0})}_calculateIsDisabled(){const H=this.shadowRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(R=>R.nodeType===Node.ELEMENT_NODE).some(R=>!0===Boolean(R.getAttribute("disabled")));return this.disabled||H}})},2012:(Ue,Ae,d)=>{"use strict";var f=d(91028);function n(Te,ae,ee){return parseInt(Te.substr(ae,ee),16)}function E(Te){return(Te|=0)<0?"00":Te<16?"0"+Te.toString(16):Te<256?Te.toString(16):"ff"}function m(Te,ae,ee){return E(255*((ee=ee<0?ee+6:ee>6?ee-6:ee)<1?Te+(ae-Te)*ee:ee<3?ae:ee<4?Te+(ae-Te)*(4-ee):Te))}function y(Te){if(/^#[0-9a-f]{3,8}$/i.test(Te)){let ae;const ee=Te.length;if(ee<6){const ke=Te[1],me=Te[2],Fe=Te[3],ut=Te[4]||"";ae="#"+ke+ke+me+me+Fe+Fe+ut+ut}return(7==ee||ee>8)&&(ae=Te),ae}}function j(Te,ae,ee){const me=[.55,.5,.5,.46,.6,.55,.55][6*Te+.5|0];return function k(Te,ae,ee){let ke;if(0==ae){const me=E(255*ee);ke=me+me+me}else{const me=ee<=.5?ee*(ae+1):ee+ae-ee*ae,Fe=2*ee-me;ke=m(Fe,me,6*Te+2)+m(Fe,me,6*Te)+m(Fe,me,6*Te-2)}return"#"+ke}(Te,ae,ee=ee<.5?ee*me*2:me+(ee-.5)*(1-me)*2)}const L=typeof window<"u"?window:typeof self<"u"?self:typeof global<"u"?global:{};var H={};class Z{constructor(ae,ee){this.x=ae,this.y=ee}}class de{constructor(ae,ee,ke,me){this.q=ae,this.t=ee,this.H=ke,this.Y=me}I(ae,ee,ke,me){const Fe=this.q+this.H,ut=this.t+this.H,St=this.Y;return 1===St?new Z(Fe-ee-(me||0),this.t+ae):2===St?new Z(Fe-ae-(ke||0),ut-ee-(me||0)):3===St?new Z(this.q+ee,ut-ae-(ke||0)):new Z(this.q+ae,this.t+ee)}}const Oe=new de(0,0,0,0);class Ne{constructor(ae){this.J=ae,this.u=Oe}g(ae,ee){const ke=ee?-2:2,me=[];for(let Fe=ee?ae.length-2:0;Fe<ae.length&&Fe>=0;Fe+=ke)me.push(this.u.I(ae[Fe],ae[Fe+1]));this.J.g(me)}h(ae,ee,ke,me){const Fe=this.u.I(ae,ee,ke,ke);this.J.h(Fe,ke,me)}i(ae,ee,ke,me,Fe){this.g([ae,ee,ae+ke,ee,ae+ke,ee+me,ae,ee+me],Fe)}j(ae,ee,ke,me,Fe,ut){const St=[ae+ke,ee,ae+ke,ee+me,ae,ee+me,ae,ee];St.splice((Fe||0)%4*2,2),this.g(St,ut)}K(ae,ee,ke,me,Fe){this.g([ae+ke/2,ee,ae+ke,ee+me/2,ae+ke/2,ee+me,ae,ee+me/2],Fe)}}function it(Te,ae,ee,ke){let me,Fe,ut,St,gt,mt;(Te%=14)?1==Te?(ut=0|.5*ee,St=0|.8*ee,ae.j(ee-ut,0,ut,St,2)):2==Te?(ut=0|ee/3,ae.i(ut,ut,ee-ut,ee-ut)):3==Te?(gt=.1*ee,mt=ee<6?1:ee<8?2:0|.25*ee,gt=gt>1?0|gt:gt>.5?1:gt,ae.i(mt,mt,ee-gt-mt,ee-gt-mt)):4==Te?(Fe=0|.15*ee,ut=0|.5*ee,ae.h(ee-ut-Fe,ee-ut-Fe,ut)):5==Te?(gt=.1*ee,mt=4*gt,mt>3&&(mt|=0),ae.i(0,0,ee,ee),ae.g([mt,mt,ee-gt,mt,mt+(ee-mt-gt)/2,ee-gt],!0)):6==Te?ae.g([0,0,ee,0,ee,.7*ee,.4*ee,.4*ee,.7*ee,ee,0,ee]):7==Te?ae.j(ee/2,ee/2,ee/2,ee/2,3):8==Te?(ae.i(0,0,ee,ee/2),ae.i(0,ee/2,ee/2,ee/2),ae.j(ee/2,ee/2,ee/2,ee/2,1)):9==Te?(gt=.14*ee,mt=ee<4?1:ee<6?2:0|.35*ee,gt=ee<8?gt:0|gt,ae.i(0,0,ee,ee),ae.i(mt,mt,ee-mt-gt,ee-mt-gt,!0)):10==Te?(gt=.12*ee,mt=3*gt,ae.i(0,0,ee,ee),ae.h(mt,mt,ee-gt-mt,!0)):11==Te?ae.j(ee/2,ee/2,ee/2,ee/2,3):12==Te?(Fe=.25*ee,ae.i(0,0,ee,ee),ae.K(Fe,Fe,ee-Fe,ee-Fe,!0)):!ke&&(Fe=.4*ee,ut=1.2*ee,ae.h(Fe,Fe,ut)):(me=.42*ee,ae.g([0,0,ee,0,ee,ee-2*me,ee-me,ee,0,ee]))}function ze(Te,ae,ee){let ke;(Te%=4)?1==Te?ae.j(0,ee/2,ee,ee/2,0):2==Te?ae.K(0,0,ee,ee):(ke=ee/6,ae.h(ke,ke,ee-2*ke)):ae.j(0,0,ee,ee,0)}function P(Te){return(10*Te+.5|0)/10}class J{constructor(){this.v=""}g(ae){let ee="";for(let ke=0;ke<ae.length;ke++)ee+=(ke?"L":"M")+P(ae[ke].x)+" "+P(ae[ke].y);this.v+=ee+"Z"}h(ae,ee,ke){const me=ke?0:1,Fe=P(ee/2),ut=P(ee),St="a"+Fe+","+Fe+" 0 1,"+me+" ";this.v+="M"+P(ae.x)+" "+P(ae.y+ee/2)+St+ut+",0"+St+-ut+",0"}}class xe{constructor(ae){this.B={},this.N=ae,this.k=ae.k}m(ae){const ee=/^(#......)(..)?/.exec(ae),ke=ee[2]?n(ee[2],0)/255:1;this.N.m(ee[1],ke)}L(ae){this.A=this.B[ae]||(this.B[ae]=new J)}M(){}g(ae){this.A.g(ae)}h(ae,ee,ke){this.A.h(ae,ee,ke)}finish(){const ae=this.B;for(let ee in ae)ae.hasOwnProperty(ee)&&this.N.O(ee,ae[ee].v)}}class z{constructor(ae){this.k=ae,this.C='<svg xmlns="http://www.w3.org/2000/svg" width="'+ae+'" height="'+ae+'" viewBox="0 0 '+ae+" "+ae+'">'}m(ae,ee){ee&&(this.C+='<rect width="100%" height="100%" fill="'+ae+'" opacity="'+ee.toFixed(2)+'"/>')}O(ae,ee){this.C+='<path fill="'+ae+'" d="'+ee+'"/>'}toString(){return this.C+"</svg>"}}typeof document<"u"&&document.querySelectorAll.bind(document);var ce=d(21033),je=d(87567);d(75773),window.customElements.define("gv-identity-picture",class tt extends f.oi{static get properties(){return{picture:{type:String},display_name:{type:String},_error:{type:Boolean,attribute:!1},notification:{type:Boolean},rounded:{type:Boolean,reflect:!0},skeleton:{type:Boolean}}}static get styles(){return[ce.F,f.iv`
        :host {
          display: block;
          position: relative;
        }

        div {
          text-align: center;
        }

        svg,
        .skeleton {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }

        gv-image {
          width: 100%;
          height: 100%;
          --gv-image--of: contain;
        }

        :host([rounded]) gv-image,
        :host([rounded]) svg {
          border: 2px solid var(--gv-theme-neutral-color-lighter, #fafafa);
          border-radius: 50%;
          box-sizing: border-box;
          --gv-image--of: cover;
        }

        .notification {
          position: absolute;
          width: 8px;
          height: 8px;
          background-clip: padding-box;
          border-radius: 50%;
          background-color: var(--gv-identity-picture-notification--bgc, var(--gv-theme-color-light, #86c3d0));
        }
      `]}_onError(){this._error=!0}_toNumber(ae){return parseInt(ae.replace("px",""),10)}_onLoaded(){this._error=!1}_getMaxSize(ae,ee){return Math.min(this._toNumber(ae),this._toNumber(ee))}updated(ae){ae.has("picture")&&(this._error=!1)}render(){const{width:ae,height:ee}=window.getComputedStyle(this);if((!this.picture||this._error)&&ae&&ee){const ke=this._getMaxSize(ae,ee),me=document.createElement("div");if(this.skeleton&&me.classList.add("skeleton"),me.title=this.display_name,me.innerHTML=function re(Te,ae,ee){const ke=new z(ae);return function Ve(Te,ae,ee){const ke=function V(Te,ae){const ee="object"==typeof Te&&Te||H.config||L.jdenticon_config||{},ke=ee.lightness||{},me=ee.saturation||{},Fe="color"in me?me.color:me,ut=me.grayscale,St=ee.backColor,gt=ee.padding;function mt(we,be){let ye=ke[we];return ye&&ye.length>1||(ye=be),function(Me){return(Me=ye[0]+Me*(ye[1]-ye[0]))<0?0:Me>1?1:Me}}return{W:function rt(we){const be=ee.hues;let ye;return be&&be.length>0&&(ye=be[0|.999*we*be.length]),"number"==typeof ye?(ye/360%1+1)%1:we},o:"number"==typeof Fe?Fe:.5,D:"number"==typeof ut?ut:0,p:mt("color",[.4,.8]),F:mt("grayscale",[.3,.9]),G:y(St),X:"number"==typeof Te?Te:"number"==typeof gt?gt:ae}}(ee,.08);ke.G&&Te.m(ke.G);let me=Te.k;const Fe=.5+me*ke.X|0;me-=2*Fe;const ut=new Ne(Te),St=0|me/4,gt=0|Fe+me/2-2*St,mt=0|Fe+me/2-2*St;function rt(st,lt,At,kt,Ut){const an=n(ae,At,1);let $t=kt?n(ae,kt,1):0;Te.L(be[ye[st]]);for(let zt=0;zt<Ut.length;zt++)ut.u=new de(gt+Ut[zt][0]*St,mt+Ut[zt][1]*St,St,$t++%4),lt(an,ut,St,zt);Te.M()}const be=function Be(Te,ae){return[j(Te=ae.W(Te),ae.D,ae.F(0)),j(Te,ae.o,ae.p(.5)),j(Te,ae.D,ae.F(1)),j(Te,ae.o,ae.p(1)),j(Te,ae.o,ae.p(0))]}(n(ae,-7)/268435455,ke),ye=[];let Me;function We(st){if(st.indexOf(Me)>=0)for(let lt=0;lt<st.length;lt++)if(ye.indexOf(st[lt])>=0)return!0}for(let st=0;st<3;st++)Me=n(ae,8+st,1)%be.length,(We([0,4])||We([2,3]))&&(Me=1),ye.push(Me);rt(0,ze,2,3,[[1,0],[2,0],[2,3],[1,3],[0,1],[3,1],[3,2],[0,2]]),rt(1,ze,4,5,[[0,0],[3,0],[3,3],[0,3]]),rt(2,it,1,null,[[1,1],[2,1],[2,2],[1,2]]),Te.finish()}(new xe(ke),function at(Te){return/^[0-9a-f]{11,}$/i.test(Te)&&Te}(Te)||function Tt(Te){return function Re(Te){var St,ke=0,me=0,Fe=encodeURI(Te)+"%80",ut=[],gt=[],mt=1732584193,rt=4023233417,we=~mt,be=~rt,ye=3285377520,Me=[mt,rt,we,be,ye],We=0,st="";function lt(At,kt){return At<<kt|At>>>32-kt}for(;ke<Fe.length;me++)ut[me>>2]=ut[me>>2]|("%"==Fe[ke]?parseInt(Fe.substring(ke+1,ke+=3),16):Fe.charCodeAt(ke++))<<8*(3-(3&me));for(ut[(St=16*(1+(me+7>>6)))-1]=8*me-8;We<St;We+=16){for(ke=0;ke<80;ke++)me=lt(mt,5)+ye+(ke<20?1518500249+(rt&we^~rt&be):ke<40?1859775393+(rt^we^be):ke<60?2400959708+(rt&we^rt&be^we&be):3395469782+(rt^we^be))+(gt[ke]=ke<16?0|ut[We+ke]:lt(gt[ke-3]^gt[ke-8]^gt[ke-14]^gt[ke-16],1)),ye=be,be=we,we=lt(rt,30),rt=mt,mt=me;Me[0]=mt=Me[0]+mt|0,Me[1]=rt=Me[1]+rt|0,Me[2]=we=Me[2]+we|0,Me[3]=be=Me[3]+be|0,Me[4]=ye=Me[4]+ye|0}for(ke=0;ke<40;ke++)st+=(Me[ke>>3]>>>4*(7-(7&ke))&15).toString(16);return st}(null==Te?"":""+Te)}(Te),ee),ke.toString()}(this.display_name,ke,{backColor:"#FFF"}),this.notification){const Fe=document.createElement("span");Fe.className="notification",Fe.style.left=ae,me.appendChild(Fe)}return f.dy`${me}`}return f.dy`
      <gv-image
        src="${this.picture}"
        alt="${this.display_name}"
        title="${this.display_name}"
        @error="${this._onError}"
        @gv-image:loaded="${this._onLoaded}"
      ></gv-image>
      ${this.notification?f.dy`<span class="notification" style="${(0,je.V)({left:ae})}"></span>`:""}
    `}})},77190:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(98539),E=d(21033);d(19007),window.customElements.define("gv-metric",class y extends f.oi{static get properties(){return{icon:{type:String},name:{type:String},value:{type:String},skeleton:{type:Boolean}}}static get styles(){return[f.iv`
        :host {
          box-sizing: border-box;
        }

        .metric {
          --gv-icon--s: var(--gv-metric-icon--s, 24px);
          --gv-icon--c: var(--gv-metric--c, var(--gv-theme-color, #5a7684));
          min-width: 75px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: row;
        }

        .icon {
          align-self: center;
          margin-right: 4px;
        }

        div {
          display: block;
        }

        .metric-data {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .metric-value {
          font-size: var(--gv-theme-font-size-m, 14px);
          line-height: var(--gv-theme-font-size-m, 14px);
        }

        .metric-name {
          font-size: var(--gv-theme-font-size-xs, 10px);
          line-height: var(--gv-theme-font-size-xs, 10px);
          opacity: 0.5;
        }
      `,E.F]}render(){return f.dy`
      <div class=${(0,n.$)({skeleton:this.skeleton,metric:!0})}>
        ${this.value?f.dy`
              <div class="icon">
                <gv-icon shape="${this.icon}"></gv-icon>
              </div>
              <div class="metric-data">
                <div class="metric-value">${this.value}</div>
                <div class="metric-name">${this.name}</div>
              </div>
            `:""}
      </div>
    `}});var b=d(9455),k=d(14451),j=d(94774),L=d(79313),O=d(67278);class H extends((0,j.k)(f.oi)){static get properties(){return{metrics:{type:Object},_metrics:{type:Object,attribute:!1}}}static get styles(){return[...super.styles,k.p,f.iv`
        :host {
          box-sizing: border-box;
          margin: 0.2rem;
          width: 100%;
          height: 100%;
          min-height: 25px;
          min-width: 25px;
          display: flex;
          width: 100%;
        }

        :host > * {
          flex: 1 1 auto;
        }
      `]}constructor(){super(),this._skeletonAttribute="metrics",this.skeleton=!1,this._error=!1,this._empty=!1}_isClickable(V){return!(!this._metrics||"object"!=typeof this._metrics[V])&&this._metrics[V].clickable}_getValue(V){return"object"==typeof V?V.value:V}_getSubscribers(){return this._metrics?this._getValue(this._metrics.subscribers):null}_getHits(){return this._metrics?this._getValue(this._metrics.hits):null}_getHealth(){if(this._metrics){const V=this._getValue(this._metrics.health);return isNaN(V)?"":Intl.NumberFormat.call(this,navigator.language,{style:"percent",maximumFractionDigits:2}).format(V)}return null}_getTitle(V){return this._metrics&&"object"==typeof this._metrics[V]?this._metrics[V].title:null}_onClick(V){(0,L.h)(this,"click",{key:V})}_renderMetric(V,Z,de,Oe){const Ne=this._isClickable(V);return Oe||this._skeleton?f.dy`<gv-metric
          @click="${Ne?this._onClick.bind(this,V):null}"
          .skeleton="${this._skeleton}"
          icon="${Z}"
          name="${de}"
          value="${Oe}"
          class="${(0,n.$)({link:Ne})}"
          title="${(0,O.o)(this._getTitle(V))}"
        ></gv-metric>`:f.dy``}render(){if(this._error)return f.dy`<div class="error">${(0,b.ag)("gv-metrics.error")}</div>`;const V=this._getSubscribers(),Z=this._getHits(),de=this._getHealth();return f.dy`
      ${this._renderMetric("subscribers","communication:group",(0,b.ag)("gv-metrics.subscribers",{count:V}),V)}
      ${this._renderMetric("hits","general:cursor",(0,b.ag)("gv-metrics.hits",{count:Z}),Z)}
      ${this._renderMetric("health","general:heart",(0,b.ag)("gv-metrics.health"),de)}
      <slot></slot>
    `}}window.customElements.define("gv-metrics",H)},53022:(Ue,Ae,d)=>{"use strict";d.d(Ae,{k:()=>E});var f=d(91028),n=d(98539);class E extends f.oi{static get properties(){return{event:{type:String},delay:{type:Number},arrow:{type:Boolean,reflect:!0},small:{type:Boolean,reflect:!0},medium:{type:Boolean,reflect:!0},large:{type:Boolean,reflect:!0},width:{type:String},position:{type:String,reflect:!0},auto:{type:Boolean},_opened:{type:Boolean,attribute:!1}}}static get styles(){return[f.iv`
        :host {
          cursor: pointer;
          box-sizing: border-box;
          display: inline-block;
          position: relative;
        }

        .popover {
          --bgc: var(--gv-popover--bgc, var(--gv-theme-neutral-color-lighter, #fafafa));
          color: var(--gv-popover--c, var(--gv-theme-font-color-dark, #262626));
          position: absolute;
          background-color: var(--bgc);
          padding: var(--gv-popover--p, 0.5rem);
          border-radius: 4px;
          z-index: 1000;
          margin: 0 auto;
          text-align: center;
          width: auto;
          box-sizing: content-box;
        }

        :host([position='bottom']) .popover {
          top: calc(100% + 0.4rem);
          transform: translateX(-50%);
          left: 50%;
          box-shadow: 1px 0 0 0 var(--gv-theme-neutral-color, #f5f5f5), 0 2px 3px var(--gv-theme-neutral-color-dark, #bfbfbf);
        }

        :host([position='bottom'][arrow]) .popover {
          top: calc(100% + 0.4rem + 10px);
        }

        :host([position='bottom'][arrow]) .arrow {
          top: calc(100% - 8px);
          transform: translateX(-50%);
          left: 50%;
        }

        :host([position='top']) .popover {
          bottom: calc(100% + 0.4rem);
          transform: translateX(-50%);
          left: 50%;
          box-shadow: 1px 0 0 0 var(--gv-theme-neutral-color, #f5f5f5), 0 -2px 3px var(--gv-theme-neutral-color-dark, #bfbfbf);
        }

        :host([position='top'][arrow]) .popover {
          bottom: calc(100% + 0.4rem + 10px);
        }

        :host([position='top'][arrow]) .arrow {
          bottom: calc(100% - 8px);
          transform: translateX(-50%) rotate(180deg);
          left: 50%;
        }

        :host([position='left']) .popover {
          top: 50%;
          transform: translateY(-50%);
          right: calc(100% + 0.4rem);
          box-shadow: -1px 0 0 0 var(--gv-theme-neutral-color, #f5f5f5), -1px 2px 3px var(--gv-theme-neutral-color-dark, #bfbfbf);
        }

        :host([position='left'][arrow]) .popover {
          right: calc(100% + 0.4rem + 10px);
        }

        :host([position='left'][arrow]) .arrow {
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          right: calc(100% - 8px);
        }

        :host([position='right']) .popover {
          top: 50%;
          transform: translateY(-50%);
          left: calc(100% + 0.4rem);
          box-shadow: 1px 0 0 1px var(--gv-theme-neutral-color, #f5f5f5), 1px 1px 1px var(--gv-theme-neutral-color-dark, #bfbfbf);
        }

        :host([position='right'][arrow]) .popover {
          left: calc(100% + 0.4rem + 10px);
        }

        :host([position='right'][arrow]) .arrow {
          left: calc(100% - 8px);
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
        }

        .inline .popover {
          white-space: nowrap;
        }

        :host([small]) .popover {
          width: 200px;
        }

        :host([medium]) .popover {
          width: 350px;
        }

        :host([large]) .popover {
          width: 500px;
        }

        .content {
          width: 100%;
        }

        .popover,
        .arrow {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out;
        }

        .open .popover,
        .open .arrow {
          display: block;
          opacity: 1;
          visibility: visible;
        }

        .close .popover,
        .close .arrow {
        }

        .arrow {
          width: 25px;
          height: 25px;
          z-index: 101;
          position: absolute;
          overflow: hidden;
        }

        .arrow:after {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          background: var(--gv-popover--bgc, var(--gv-theme-neutral-color-lighter, #fafafa));
          transform: rotate(45deg);
          top: 19px;
          left: 6px;
          border: 1px solid var(--gv-popover--bdc, var(--gv-theme-neutral-color, #f5f5f5));
        }
      `]}constructor(){super(),this.event="mouseover",this._closeHandler=this._close.bind(this),this.delay=0,this.arrow=!1,this.position="bottom",this.auto=!1}_open(y){"click"===this.event&&window.removeEventListener(this.event,this._closeHandler),this._opened=!0,"click"===this.event&&setTimeout(()=>window.addEventListener(this.event,this._closeHandler)),this.delay>0&&setTimeout(()=>this._close({}),this.delay)}close(){this._close({})}_close(y){if(this._opened&&(y.target!==this.firstElementChild||"click"!==this.event)){const b=this.shadowRoot.querySelector(".open");b.classList.add("close"),setTimeout(()=>{b.classList.remove("close"),this._opened=!1},200)}}render(){return f.dy` <div class="${(0,n.$)({open:this._opened,content:!0,inline:null==this.width&&!this.small&&!this.medium&&!this.large})}">
      <slot></slot>
      ${this.arrow?f.dy`<div class="arrow"></div>`:""}
      <div class="popover">${this.renderContent()}</div>
    </div>`}renderContent(){return f.dy`<slot name="popover"></slot>`}firstUpdated(){setTimeout(()=>{this.addEventListener(this.event,this._open.bind(this)),this.event.startsWith("mouse")&&0===this.delay&&this.addEventListener("mouseleave",this._close.bind(this))})}_getContentSize(){const y=this.shadowRoot.querySelector(".popover");return{width:y.offsetWidth,height:y.offsetHeight}}_getPositionPadding(){return 10}_getCenterPosition(){return{x:this.target.x+this.target.width/2+window.scrollX,y:this.target.y+this.target.height/2+window.scrollY}}_updatePosition(){if(null!=this.position&&this.auto&&this.shadowRoot.querySelector(".popover")&&(this.target=this.firstElementChild.getBoundingClientRect(),"top"===this.position&&!this._hasTopSpace()||"bottom"===this.position&&!this._hasBottomSpace()||"left"===this.position&&!this._hasLeftSpace()||"right"===this.position&&!this._hasRightSpace())){const b=[this._hasTopSpace(),this._hasRightSpace(),this._hasBottomSpace(),this._hasLeftSpace()].indexOf(!0);b>-1&&(this.position=["top","right","bottom","left"][b])}}_getMaxX(){return window.innerWidth-this._getPositionPadding()}_getMaxY(){return window.innerHeight-this._getPositionPadding()}_hasBottomSpace(){return this.target.y+this.target.height+this._getContentSize().height+this._getPositionPadding()<=this._getMaxY()}_hasRightSpace(){return this.target.x+this.target.width+this._getContentSize().width+this._getPositionPadding()<=this._getMaxX()}_hasTopSpace(){return this.target.y-this._getContentSize().height-this._getPositionPadding()>=this._getPositionPadding()}_hasLeftSpace(){return this.target.x-this._getContentSize().width-this._getPositionPadding()>=this._getPositionPadding()}updated(y){y.has("width")&&this.shadowRoot.querySelector(".popover").style.setProperty("width",this.width),this._updatePosition()}}window.customElements.define("gv-popover",E)},50843:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(48498),m=(d(19007),d(21033)),y=d(98539),b=d(9455);window.customElements.define("gv-rating",class j extends f.oi{static get properties(){return{value:{type:Number,reflect:!0},count:{type:String},skeleton:{type:Boolean},readonly:{type:Boolean},_candidate:{type:Number,attribute:!1},withDescription:{type:Boolean,attribute:"with-description"}}}static get styles(){return[f.iv`
        :host {
          --gv-icon--c: var(--gv-rating--c, var(--gv-theme-color, #5a7684));
          --size: var(--gv-rating--s, 13px);
          --gv-icon--s: var(--size);

          font-size: var(--gv-theme-font-size-m, 14px);
          cursor: default;
        }

        .content,
        .rate {
          justify-content: space-evenly;
          display: inline-flex;
          align-items: flex-end;
          vertical-align: middle;
          height: 100%;
        }

        .info-title {
          font-size: var(--gv-theme-font-size-m, 14px);
          line-height: 16px;
          align-self: center;
          min-width: 35px;
          text-align: center;
        }

        .info-subtitle {
          font-size: var(--gv-theme-font-size-xs, 10px);
          line-height: 10px;
          opacity: 0.5;
          text-align: center;
        }

        .icon {
          display: inline-flex;
          align-self: center;
          margin-right: calc(var(--size) / 4);
          align-items: center;
        }

        .edit {
          cursor: pointer;
        }

        .edit gv-icon:hover {
          transform: translateY(-0.5px);
        }

        gv-input {
          flex: 1;
        }

        .icon {
          min-height: 30px;
        }

        .description {
          min-width: 100px;
          line-height: calc(var(--size) + 4px);
          margin: auto 4px;
        }
      `,m.F]}constructor(){super(),this.value=0,this.count=0,this.readonly=!1,this._candidate=-1,this.isSelected=!1}_getTitle(){return`${this._getAverage()}/5`}_onMouseEnter(O){if(this._candidate=O+1,this.withDescription)switch(this._candidate){case 1:this.description=(0,b.ag)("gv-rating.description-1");break;case 2:this.description=(0,b.ag)("gv-rating.description-2");break;case 3:this.description=(0,b.ag)("gv-rating.description-3");break;case 4:this.description=(0,b.ag)("gv-rating.description-4");break;case 5:this.description=(0,b.ag)("gv-rating.description-5")}}_onMouseOut(){this._candidate=-1,this.withDescription&&!this.isSelected&&(this.description=null)}_onClick(O){this._candidate=-1,this.isSelected=!0,this.value=O+1,this.dispatchEvent(new Event("input"),{bubbles:!0,cancelable:!0})}_getAverage(){const O=parseFloat(this.value);return O>=0&&O<=5?O:0}_renderStar(O,H){return this.readonly?f.dy`<gv-icon shape="general:${O}"></gv-icon>`:f.dy`<gv-icon
        @mouseenter=${this._onMouseEnter.bind(this,H)}
        @click=${this._onClick.bind(this,H)}
        shape="general:${O}"
      ></gv-icon>`}render(){const O=this._getAverage();let H=1*O;this.readonly||(H=this._candidate>-1?this._candidate:O);const R=[];for(let V=1;V<=5;V+=1)R.push(H>=V?"star":H>=V-.7?"half-star":"no-star");return f.dy`
      <div class="${(0,y.$)({skeleton:this.skeleton,edit:!this.readonly,content:!0})}">
        <div class="${(0,y.$)({content:!0})}">
          <div class="${(0,y.$)({rate:!0})}">
            <div class="icon" title="${this._getTitle()}">
              ${this.withDescription?f.dy`<div class="description">${this.description}</div>`:""}
              ${(0,n.r)(R,V=>V,(V,Z)=>f.dy` ${this._renderStar(V,Z)} `)}
            </div>
            ${this.count?f.dy`<div>
                  <div class="info-title">${this.count||""}</div>
                  <div class="info-subtitle">${this._getCountTitle()}</div>
                </div>`:""}
          </div>
        </div>
      </div>
    `}firstUpdated(){this.readonly||this.shadowRoot.querySelector(".edit").addEventListener("mouseout",this._onMouseOut.bind(this))}_getCountTitle(){return this.count?(0,b.ag)(this.count>1?"gv-rating.notes":"gv-rating.note"):""}})},14129:(Ue,Ae,d)=>{"use strict";d.d(Ae,{c:()=>n});const n=d(91028).iv`
  .empty,
  .error {
    align-items: center;
    box-sizing: border-box;
    color: var(--gv-theme-font-color-dark);
    font-size: var(--gv-theme-font-size-l, 20px);
    font-weight: bold;
    height: 100%;
    opacity: 0.5;
    padding: 3rem;
    text-align: center;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`},79613:(Ue,Ae,d)=>{"use strict";d.d(Ae,{q:()=>n});const n=d(91028).iv`
  :host {
    box-sizing: border-box;
    display: inline-block;
    margin: 0.2rem;
    vertical-align: middle;
    background-color: transparent;
    --bdw: var(--gv-input--bdw, 1px);
    --2xbdw: calc(var(--gv-input--bdw, 1px) * 2);
    --input-small--p: 4px 4px;
    --input-small--fz: 12px;
    --input-small--lh: 15px;
    --icon-small--w: calc(15px + 4px + 4px);
    --input-small--h: calc(var(--icon-small--w) + var(--2xbdw));

    --input-medium--p: 10px 5px;
    --input-medium--fz: 14px;
    --input-medium--lh: 17px;
    --icon-medium--w: calc(17px + 10px + 10px);
    --input-medium--h: calc(var(--icon-medium--w) + var(--2xbdw));

    --input-large--p: 12px 8px;
    --input-large--fz: 16px;
    --input-large--lh: 18px;
    --icon-large--w: calc(18px + 12px + 12px);
    --input-large--h: calc(var(--icon-large--w) + var(--2xbdw));
  }

  .box-icon {
    box-sizing: border-box;
    height: var(--input-medium--h);
    width: calc(var(--input-medium--h) - 4px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: initial;
    border-radius: 0 3px 3px 0;
  }

  .small .box-icon {
    height: var(--input-small--h);
    width: calc(var(--input-small--h) - 4px);
  }

  .box-icon-left {
    right: initial;
    left: 0px;
    border-radius: 3px 0 0 3px;
  }

  .box-icon gv-icon {
    --gv-icon--s: 22px;
    --gv-icon--c: var(--gv-theme-font-color-dark);
  }

  .small .box-icon gv-icon {
    --gv-icon--s: 16px;
  }

  .box-icon.box-icon-clear gv-icon,
  :host([large]) .box-icon.box-icon-clear gv-icon {
    width: 16px;
  }

  .box-icon.box-icon-bgc {
    background-color: var(--gv-input-icon--bgc, var(--gv-theme-neutral-color, #f5f5f5));
    border: var(--gv-input--bdw, 1px) var(--gv-input--bds, solid) var(--gv-input--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
  }

  :host([large]) .box-icon {
    height: var(--input-large--h);
    width: var(--input-large--h);
  }

  :host([large]) .box-icon gv-icon {
    width: 24px;
    --gv-icon--s: 24px;
  }

  :host([small]) .box-icon {
    height: var(--input-small--h);
    width: var(--input-small--h);
  }

  :host([small]) .box-icon gv-icon {
    width: 18px;
  }

  :host([small]) .box-icon-clear gv-icon {
    width: 14px;
  }

  .box-input {
    position: relative;
    line-height: 0;
  }

  /* BASE */
  input,
  ::slotted(input),
  ::slotted(.input),
  .input {
    border: var(--gv-input--bdw, 1px) var(--gv-input--bds, solid) var(--gv-input--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
    transition: border 10ms ease-in-out;
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    font-weight: normal;
    outline: none;
    width: 100%;
    height: 100%;
    -webkit-appearance: none;
  }

  input::-webkit-search-decoration,
  ::slotted(input::-webkit-search-decoration) {
    -webkit-appearance: none;
  }

  /* SIZE */
  .large input,
  .large ::slotted(input),
  .large ::slotted(.input),
  .large .input {
    padding: var(--input-large--p);
    font-size: var(--input-large--fz);
    line-height: var(--input-large--lh);
    height: var(--input-large--h);
  }

  .medium input,
  .medium ::slotted(input),
  .medium ::slotted(.input),
  .medium .input {
    padding: var(--input-medium--p);
    font-size: var(--input-medium--fz);
    line-height: var(--input-medium--lh);
    height: var(--input-medium--h);
  }

  .small input,
  .small ::slotted(input),
  .small ::slotted(.input),
  .small .input {
    padding: var(--input-small--p);
    font-size: var(--input-small--fz);
    line-height: var(--input-small--lh);
    height: var(--input-small--h);
  }

  .large.icon input,
  .large.icon ::slotted(input) {
    padding-right: 45px;
  }

  .large.clearable input,
  .large.clearable ::slotted(input) {
    padding-right: 50px;
  }

  .medium.icon input,
  .medium.icon ::slotted(input) {
    padding-right: 36px;
  }

  .medium.clearable input,
  .medium.clearable ::slotted(input) {
    padding-right: 32px;
  }

  .small.icon input,
  .small ::slotted(input) {
    padding-right: 26px;
  }

  .small.clearable inpu,
  .small.clearable ::slotted(input) {
    padding-right: 22px;
  }

  .large.icon-left input,
  .large.icon-left ::slotted(input) {
    padding-left: 45px;
  }

  .large.clearable input,
  .large.clearable ::slotted(input) {
    padding-right: 40px;
  }

  .medium.icon-left input,
  .medium.icon-left ::slotted(input) {
    padding-left: 36px;
  }

  .small.icon-left input,
  .small.icon-left ::slotted(input) {
    padding-left: 26px;
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  /* STATES */
  :host([disabled]) {
    --gv-icon--c: var(--gv-theme-neutral-color-darker, #d9d9d9);
  }

  :host([disabled]) .box-icon-bgc {
    background-color: transparent;
  }

  :host([disabled]) input,
  :host([disabled]) .input,
  :host([disabled]) ::slotted(input) {
    cursor: default;
    opacity: 0.5;
  }

  input:required,
  .input:required,
  ::slotted(input:required),
  ::slotted(.input:required),
  input:invalid,
  .input:invalid,
  ::slotted(input:invalid),
  ::slotted(.input:invalid) {
    box-shadow: none;
  }

  label {
    display: block;
    line-height: 15px;
    padding: 0 0 0.2rem 0;
  }

  .description {
    opacity: 0.6;
    font-size: var(--gv-theme-font-size-s, 12px);
  }
`},14451:(Ue,Ae,d)=>{"use strict";d.d(Ae,{p:()=>n});const n=d(91028).iv`
  .link,
  .link:visited {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.15s ease-in;
    text-decoration: none;
  }

  .link:hover {
    opacity: 0.7;
    transition: opacity 0.15s ease-in;
  }
`},984:(Ue,Ae,d)=>{"use strict";d.d(Ae,{Q:()=>n,x:()=>f});const f="general:clipboard",n="communication:clipboard-check"},21033:(Ue,Ae,d)=>{"use strict";d.d(Ae,{F:()=>n});const n=d(91028).iv`
  @keyframes skeleton-pulse {
    from {
      opacity: 0.85;
    }
    to {
      opacity: 0.45;
    }
  }
  .skeleton,
  :host([skeleton]) {
    animation-direction: alternate;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-name: skeleton-pulse;
    color: transparent;
    cursor: progress !important;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: var(--gv-theme-skeleton-color, #bfbfbf) !important;
    border-color: var(--gv-theme-skeleton-color, #bfbfbf);
  }

  .skeleton svg,
  :host([skeleton]) svg,
  :host([skeleton]) gv-icon,
  .skeleton gv-icon,
  .skeleton > *,
  .skeleton ::slotted(*),
  :host([skeleton]) ::slotted(*) {
    visibility: hidden;
  }
`},80501:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(79313),E=d(48498),m=d(98539),y=d(87567);window.customElements.define("gv-autocomplete",class O extends f.oi{static get properties(){return{options:{type:Array,reflect:!0},value:{type:String,reflect:!0},style:{type:String},minChars:{type:Number},filter:{type:Boolean|Function},size:{type:Number},_options:{type:Array,attribute:!1},_forceOpen:{type:Boolean,attribute:!1}}}static get styles(){return[f.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          width: 100%;
        }

        ::slotted(*) {
          width: 100%;
        }

        .container {
          position: relative;
        }

        .container .options.open {
          display: block;
          visibility: visible;
          opacity: 1;
          -webkit-transform: -webkit-translateY(0%);
          transform: translateY(0%);
          z-index: 100;
        }

        .options {
          background-color: var(--gv-autocomplete--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          color: var(--gv-autocomplete--c, var(--gv-theme-font-color, #262626));
          margin: 0.2rem;
          position: absolute;
          box-shadow: 0 0 0 1px var(--gv-theme-neutral-color, #f5f5f5), 0 1px 3px var(--gv-theme-neutral-color-dark, #bfbfbf);
          border-radius: 2px;
          display: block;
          width: 100%;
          cursor: pointer;
          left: 0;
          right: 0;
          visibility: hidden;
          opacity: 0;
          -webkit-transform: -webkit-translateY(-2em);
          transform: translateY(-2em);
          -webkit-transition: -webkit-transform 150ms ease-in-out, opacity 150ms ease-in-out;
          -moz-transition: all 150ms ease-in-out;
          -ms-transition: all 150ms ease-in-out;
          -o-transition: all 150ms ease-in-out;
          overflow: auto;
        }

        .option {
          padding: 0.2rem;
          min-height: 30px;
          word-break: break-all;
        }

        .option.match ~ .option.match {
          background-color: transparent;
        }

        .option:hover,
        .option.hover,
        .keyboard .option.hover:hover {
          background-color: var(--gv-autocomplete-hover--bgc, var(--gv-theme-neutral-color-lighter, #fafafa));
        }

        .keyboard .option:hover {
          background-color: transparent;
        }

        .show {
          display: block;
        }

        .hide {
          display: none;
        }
      `]}constructor(){super(),this._options=[],this._candidateIndex=-1,this.minChars=1,this.value="",this.style="",this.filter=!1,this.size=5,this._handleOpened=this._onOpened.bind(this)}set options(R){this._options=R}get options(){return this._options}reset(){this._getInput().reset(),this._options=[]}_getFilteredOptions(){return this.filter&&this.value&&this.value.length>=this.minChars&&"*"!==this.value?this._options.filter("function"==typeof this.filter?R=>this.filter(this.value,R):R=>-1!==R.value.indexOf(this.value)):this._options}_onInput(R){clearTimeout(this._cancellableTimeout),this.value=R.target.value,null!=this.value&&this.value.trim().length>=this.minChars?this._cancellableTimeout=setTimeout(()=>{this._open(),(0,n.h)(this,"search",this.value)},200):this.options=[]}_onSelect(R,V){null==V&&(V=this._options.find(Z=>Z.value===R)),this.value=this._getInput().value=R,this._close(),(0,n.h)(this,"select",V)}_onMouseOver(){this.shadowRoot.firstElementChild.classList.remove("keyboard"),this._clearHover(),this._shouldSelect=!0}_onMouseLeave(){this._shouldSelect=!1}_renderOption(R){if(R.element)return R.element;if(R.innerHTML){const V=document.createElement("div");return V.innerHTML=R.innerHTML,V}return R.value}_renderStyle(){if(this.style){const R=document.createElement("div");return R.innerHTML=(0,f.$m)(this.style),R}return""}_hasNoOptionSlot(){for(const R of this.childNodes)if("noOption"===R.slot)return!0;return!1}render(){const R=this._getFilteredOptions();let V=!1;R&&R.length>0&&this._forceOpen&&(V=0===this.minChars||this.value.trim().length>=this.minChars);const Z=this._getInput();let de=0;null!=Z&&(de=Z.offsetHeight);const Oe={options:!0,open:V};return f.dy` <div class="container">
      ${this._renderStyle()}
      <slot></slot>
      ${this._hasNoOptionSlot()&&this._forceOpen?f.dy`<div class="options open" style="${(0,y.V)({top:`${de}px`})}">
            <slot name="noOption" class="${R&&0!==R.length?"hide":"show"}"></slot>
          </div>`:""}
      <div class="${(0,m.$)(Oe)}" @mouseleave="${this._onMouseLeave}" style="${(0,y.V)({top:`${de}px`})}">
        ${(0,E.r)(R,Ne=>Ne,(Ne,it)=>f.dy`
            <div
              class="${(0,m.$)({option:!0})}"
              data-value="${Ne.value}"
              @mouseover="${()=>this._onMouseOver(Ne,it)}"
              @click="${()=>this._onSelect(Ne.value,Ne)}"
            >
              ${this._renderOption(Ne)}
            </div>
          `)}
      </div>
    </div>`}_clearHover(){this.shadowRoot.querySelectorAll(".option.hover").forEach(R=>R.classList.remove("hover"))}_updateHover(){if(this._clearHover(),this._candidateIndex>-1){this.shadowRoot.firstElementChild.classList.add("keyboard");const R=this.shadowRoot.querySelectorAll(".option")[this._candidateIndex];if(R){const V=this.shadowRoot.querySelector(".options"),{top:Z,left:de}=R.getBoundingClientRect(),Oe=V.getBoundingClientRect();V.scrollTo(de-Oe.left,Z-Oe.top),R.classList.add("hover")}}}_onKeydown(R){switch(R.keyCode){case 13:{const Z=this.shadowRoot.querySelectorAll(".option")[this._candidateIndex];Z&&(R.preventDefault(),R.stopPropagation(),this._candidateIndex=-1,this._onSelect(Z.getAttribute("data-value")),this._updateHover()),this._close();break}case 40:this._candidateIndex<this.shadowRoot.querySelectorAll(".option").length-1&&(R.preventDefault(),R.stopPropagation(),this._candidateIndex+=1,this._updateHover());break;case 38:this._candidateIndex>0&&(R.preventDefault(),R.stopPropagation(),this._candidateIndex-=1,this._updateHover());break;case 27:R.preventDefault(),R.stopPropagation(),this._candidateIndex=-1,this._updateHover();break;default:this.value=this._getInput().value,this._candidateIndex=-1,this._updateHover()}}_open(){this._forceOpen=!0,(0,n.h)(this,"opened",{target:this})}_close(){this._forceOpen=!1}_onFocus(){this._open()}_onBlur(){!1===this._shouldSelect&&this._close()}_getInput(){for(const R of this.childNodes)if("input"===R.slot)return R;return this.firstElementChild}_onClear(R){this.value=R.target.value}updated(){setTimeout(()=>{const R=this.shadowRoot.querySelector(".option");if(R){const V=R.clientHeight*parseInt(this.size,10),Z=this.shadowRoot.querySelector(".options");Z.style.maxHeight=`${V}px`,Z.scrollTo(0,0)}},0)}firstUpdated(){this._handlers={input:this._onInput.bind(this),focus:this._onFocus.bind(this),blur:this._onBlur.bind(this),keydown:this._onKeydown.bind(this),clear:this._onClear.bind(this)},this.shadowRoot.addEventListener("input",this._handlers.input),this.shadowRoot.addEventListener("keydown",this._handlers.keydown);const R=this._getInput();R.addEventListener("focus",this._handlers.focus),R.addEventListener("blur",this._handlers.blur),R.addEventListener("gv-input:clear",this._handlers.clear),"gv-input"===R.tagName.toLowerCase()&&R.setAttribute("no-submit",!0)}_onOpened({detail:R}){R.target!==this&&this._close()}connectedCallback(){super.connectedCallback(),window.addEventListener("gv-autocomplete:opened",this._handleOpened)}disconnectedCallback(){if(this._handlers){this.shadowRoot.removeEventListener("input",this._handlers.input),this.shadowRoot.removeEventListener("keydown",this._handlers.keydown);const R=this._getInput();R.removeEventListener("focus",this._handlers.focus),R.removeEventListener("blur",this._handlers.blur),R.removeEventListener("gv-input:clear",this._handlers.clear)}window.removeEventListener("gv-autocomplete:open",this._handleOpened),super.disconnectedCallback()}})},17441:(Ue,Ae,d)=>{"use strict";d(59042)},3120:(Ue,Ae,d)=>{"use strict";d(62905)},25619:(Ue,Ae,d)=>{"use strict";d(65246)},71256:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(14451),E=d(79313),m=d(67278),y=d(9455),b=d(98539);window.customElements.define("gv-file-upload",class k extends f.oi{static get properties(){return{label:{type:String},accept:{type:String},except:{type:String},limit:{type:Number},value:{type:Array,reflect:!0},_preview:{type:String,attribute:!1},_files:{type:Array,attribute:!1},_errors:{type:Array,attribute:!1}}}static get styles(){return[n.p,f.iv`
        :host {
          box-sizing: border-box;
          display: block;
          width: 100%;
          color: var(--gv-theme-color-dark, #28444f);
        }

        .box {
          font-size: 1.25rem;
          background-color: var(--gv-theme-neutral-color-lighter, #fafafa);
          position: relative;
          padding: 2rem;
          text-align: center;
          display: block;
          border: 1px dashed #28444f;
          border-radius: 4px;
          transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
          height: 100%;
        }

        .box .box__icon {
          width: 100%;
          height: 80px;
          display: block;
          margin-bottom: 40px;
          --gv-icon--s: 5rem;
          --gv-icon--c: var(--gv-theme-color-dark, #28444f);
        }

        .box__file {
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          z-index: -1;
        }

        .box__file + label {
          max-width: 80%;
          text-overflow: ellipsis;
          white-space: nowrap;
          cursor: pointer;
          display: inline-block;
          overflow: hidden;
        }

        .box.is-dragover {
          background-color: var(--gv-theme-color-light, #28444f);
          border: none;
          outline: 1px dashed #28444f;
          outline-offset: -10px;
        }

        .box .box__dragndrop {
          display: inline;
        }

        .files {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          --gv-icon--s: 16px;
          padding: 1rem 0.5rem 0;
        }

        .filename {
          flex: 1;
          padding: 0.2rem;
          word-break: break-all;
        }

        .error {
          font-style: italic;
          --gv-icon--c: red;
        }

        gv-image {
          position: absolute;
        }

        .preview {
          transition: all 300ms ease-in-out;
        }

        .box__input {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          z-index: 10;
        }

        .preview .box__input {
          visibility: hidden;
        }

        .preview:hover .box__input {
          visibility: visible;
        }

        .preview:hover gv-image {
          opacity: 0.3;
        }
      `]}constructor(){super(),this.reader=new FileReader,this._files=[],this._errors=[],this._counter=0}_onDragOver(L){L.preventDefault(),L.stopPropagation(),this._counter++,this.shadowRoot.querySelector(".box").classList.add("is-dragover")}_onDragEnd(L){L.preventDefault(),L.stopPropagation(),0==--this._counter&&this.shadowRoot.querySelector(".box").classList.remove("is-dragover")}_onDrop(L){L.preventDefault(),L.stopPropagation(),this.setFiles(L.dataTransfer.files)}_getRegex(L){return`(${L.toString().replace(" ","").replace(/,/g,".+|").replace(/\*/g,".+").replace(".+.+",".+")})`}setFiles(L){const O=[];this._files=[...L].filter(R=>this.accept&&null==R.type.match(this._getRegex(this.accept))||this.except&&null!=R.type.match(this._getRegex(this.except))?(O.push({file:R,error:(0,y.ag)("gv-file-upload.error.typeNotAllowed")}),!1):!(this.limit&&R.size>parseInt(this.limit,10)&&(O.push({file:R,error:(0,y.ag)("gv-file-upload.error.maxSize")}),1))),this._errors=O,this._errors.length>0&&((0,E.h)(this,"error",{errors:this._errors}),this.dispatchEvent(new Event("invalid",{bubbles:!0,cancelable:!0}))),this.shadowRoot.querySelector(".box").classList.remove("is-dragover"),this._files.length>0&&(this.reader.readAsDataURL(this._files[0]),this.reader.onload=R=>{this._preview=this._files[0].type.match(this._getRegex("image/*"))?R.target.result:null,this.value=R.target.result,this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),(0,E.h)(this,"drop",{files:[this.value]})})}_cancelEvent(L){L.preventDefault(),L.stopPropagation()}_removeFile(){this._errors=[],this._files=[],this._preview=null,this.value=null,this.shadowRoot.querySelector("#file").value=null,this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))}_onChange(L){this.setFiles(L.target.files)}get icon(){return this._files.length>0?"general:clip":"general:upload"}render(){const L=(0,y.ag)(this._errors.length>0||this._files.length>0?"gv-file-upload.chooseAnotherFile":"gv-file-upload.chooseFile");return f.dy`
      <label for="file">${this.label}</label>
      <div
        class="${(0,b.$)({box:!0,preview:null!=this._preview})}"
        @drop="${this._onDrop}"
        @ondrop="${this._onDrop}"
        @drag="${this._cancelEvent}"
        @dragstart="${this._cancelEvent}"
        @dragover="${this._onDragOver}"
        @dragenter="${this._onDragOver}"
        @dragleave="${this._onDragEnd}"
        @dragend="${this._onDragEnd}"
      >
        ${null!=this._preview?f.dy`<gv-image .src="${this._preview}" @error="${this._onPreviewError}"></gv-image>`:""}
        <div class="box__input">
          <gv-icon class="box__icon" shape="${this.icon}"></gv-icon>
          <label for="file" class="link">
            <strong>${L}</strong>
            <span class="box__dragndrop">${(0,y.ag)("gv-file-upload.orDragIt")}</span>
          </label>
          <input
            class="box__file"
            type="file"
            name="files[]"
            id="file"
            files="${this.files}"
            accept="${(0,m.o)(this.accept)}"
            @change="${this._onChange}"
          />
        </div>
      </div>
      ${this._files.length>0?f.dy`
            <div class="files">
              <gv-icon shape="general:clip"></gv-icon>
              <div class="filename">${this._files[0].name}</div>
              <gv-icon class="link" @click="${this._removeFile.bind(this,0)}" shape="general:trash"></gv-icon>
            </div>
          `:""}
      ${this._errors.length>0?f.dy`
            <div class="files">
              <gv-icon class="error" shape="code:stop"></gv-icon>
              <div class="filename">${this._errors[0].file.name} <span class="error">(${this._errors[0].error})</span></div>
            </div>
          `:""}
      ${this.value&&0===this._files.length&&0===this._errors.length?f.dy`
            <div class="files">
              <div class="filename"></div>
              <gv-button link @click="${this._removeFile.bind(this,0)}">${(0,y.ag)("gv-file-upload.removePicture")}</gv-button>
            </div>
          `:""}
    `}_onPreviewError(){this.value=null}updated(L){L.has("value")&&(this.value?(this._preview=this.value,this._files&&this._files[0]&&(this.reader.readAsDataURL(this._files[0]),this.reader.onload=H=>{this.value!==H.target.result&&(this._files=[])})):(this._preview=null,this._files=[]));const O=this.shadowRoot.querySelector(".preview");if(O){const{width:H,height:R}=O.getBoundingClientRect(),V=this.shadowRoot.querySelector("gv-image");V.style.width=H-20+"px",V.style.height=R-20+"px",V.style.left="10px",V.style.top="10px"}}})},26967:(Ue,Ae,d)=>{"use strict";var f=d(91028),m=(d(59042),d(39110),d(9455)),y=d(22385),b=d(48498),k=d(62967),j=d(79313),L=d(98539),O=d(43830),H=d(81918),R=d(89729),V=d(87567);class Z extends((0,O.P)((0,H.J)(f.oi))){static get properties(){return{breadcrumbs:{type:Array},sticky:{type:Boolean,reflect:!0},_breadcrumbs:{type:Array,attribute:!1},canSubscribe:{type:Boolean,attribute:"can-subscribe"}}}static get styles(){return[...super.styles,f.iv`
        :host {
          --img-w: 120px;
          --img-h: 120px;
          --gv-button--fz: var(--gv-header-button--fz, var(--gv-theme-font-size-l, 16px));
          --gv-button--p: var(--gv-header-button--p, 10px 24px);
          --gv-link--bgc: transparent;
          --gv-link-active-bgc: transparent;
          --c: var(--gv-header--c, var(--gv-theme-font-color-dark, #262626));
          --gv-link--c: var(--c);
          --gv-link-active--c: var(--c);
          --gv-link-a--ph: 5px;
          --gv-link--td: underline;
          --bgc: var(--gv-header--bgc, var(--gv-theme-color-light, #86c3d0));
          box-sizing: border-box;
          display: block;
        }

        :host([w-lt-768]) {
          --img--w: calc(var(--img-w) / 2);
          --img--h: calc(var(--img-h) / 2);
          --gv-button--fz: var(--gv-theme-font-size-s, 12px);
          font-size: var(--gv-theme-font-size-s, 12px);
        }

        :host([w-lt-580]) {
          --gv-button--p: 3px 9px;
          --gv-link-a--ph: 0px;
        }

        :host([w-lt-580]) .actions {
          display: flex;
          flex-direction: column;
        }

        :host([w-lt-580]) .version {
          font-size: var(--gv-theme-font-size-s, 12px);
          line-height: var(--gv-theme-font-size-s, 12px);
        }

        :host([w-lt-580]) .image gv-image {
          top: -5px;
        }

        :host([w-lt-580]) h1 {
          font-size: calc(var(--gv-theme-font-size-xl, 26px) - 4px);
          line-height: calc(var(--gv-theme-font-size-xl, 26px) - 4px);
        }

        :host([w-lt-400]) h1 {
          font-size: calc(var(--gv-theme-font-size-xl, 26px) - 8px);
        }

        .header {
          display: flex;
          background-color: var(--bgc);
          flex-direction: row;
          color: var(--c);
          transition: all 350ms ease-in-out;
          padding: 0.5rem var(--gv-theme-layout--pr, 4rem) 0.5rem var(--gv-theme-layout--pl, 4rem);
          position: relative;
        }

        .title {
          flex: 1;
          margin: 0.5rem 0 0.5rem var(--img-w);
          padding-left: 2rem;
        }

        :host([sticky]) .title {
          margin-left: calc(var(--img-w) / 2);
          transition: all 250ms ease-in-out;
        }

        .title,
        .actions {
          align-self: flex-end;
        }

        gv-link:last-child {
          --gv-link--td: none;
        }

        gv-link::after {
          content: '>';
          color: var(--gv-theme-font-color-dark, #262626);
          align-self: center;
        }

        gv-link:last-child::after {
          content: '';
        }

        .error {
          text-align: center;
          margin-right: 125px;
        }

        .version {
          letter-spacing: 0.05em;
          opacity: 0.5;
          font-size: var(--gv-theme-font-size-l, 16px);
          line-height: var(--gv-theme-font-size-l, 16px);
          font-weight: 500;
        }

        gv-identity-picture {
          height: var(--img-h);
          width: var(--img-w);
          position: absolute;
          --gv-image--of: contain;
          transition: all 150ms ease-in-out;
        }

        :host([sticky]) gv-identity-picture {
          height: calc(var(--img-h) / 2);
          width: calc(var(--img-w) / 2);
          transition: all 150ms ease;
          top: 20%;
        }

        h1 {
          margin: 0;
          font-size: var(--gv-theme-font-size-xl, 26px);
          font-weight: 500;
          line-height: var(--gv-theme-font-size-xl, 26px);
          letter-spacing: 0.05em;
        }

        h1 span {
          opacity: 0.5;
          font-size: var(--gv-theme-font-size-l, 16px);
        }

        .skeleton gv-button,
        .skeleton .error {
          visibility: hidden;
        }
      `]}constructor(){super(),this.breakpoints={width:[400,580,768]},this._breadcrumbs=[],this.canSubscribe=!1}set breadcrumbs(Oe){Oe?Promise.resolve(Oe).then(Ne=>{Ne?Promise.all(Ne).then(it=>{(0,y.YW)(this._breadcrumbs,it)||(this._breadcrumbs=it.filter(ze=>null!=ze))}):this._breadcrumbs=null}):this._breadcrumbs=null}_getLink(Oe,Ne){return Promise.resolve(Oe).then(it=>{const ze=Ne===this._breadcrumbs.length-1?(0,R.YQ)(this._item):it.title;return f.dy` <gv-link
          @gv-link:click=${this._onClick}
          .active="${it.active}"
          .icon="${it.icon}"
          .path="${it.path}"
          .title="${ze}"
          .help="${(0,k.C)(it.help,null)}"
        ></gv-link>`}).catch(()=>{delete this._routes[Ne]})}_renderBreadcrumbs(){return f.dy`<nav>
      ${(0,b.r)(this._breadcrumbs,Oe=>Oe,(Oe,Ne)=>(0,k.C)(this._getLink(Oe,Ne),f.dy`<gv-link skeleton></gv-link>`))}
    </nav>`}_onSubscribe(Oe){Oe.stopPropagation(),(0,j.h)(this,"subscribe",this._item)}render(){const Oe=(0,R.kU)(this._item);return f.dy`
      <div
        class="${(0,L.$)({header:!0,skeleton:this._skeleton})}"
        style="${(0,V.V)({background:'url("'+(0,R.Vu)(this._item)+'") var(--bgc) center center no-repeat'})}"
      >
        ${this._renderImage()}
        <div class="title">
          ${this._error||this._empty||this.sticky?"":f.dy`<div class="version">${(0,R.bo)(this._item)}</div>`}
          ${this._error||this._empty?f.dy`<div class="error">${(0,m.ag)(this._error?"gv-header.error":"gv-header.empty")}</div>`:f.dy`<h1>${(0,R.YQ)(this._item)} ${null!==Oe?f.dy`<span>(${Oe})</span>`:""}</h1>`}
        </div>
        ${this._error||this._empty||!this.canSubscribe?"":f.dy`<div class="actions">
              <gv-button primary @click="${this._onSubscribe}">${(0,m.ag)("gv-header.subscribe")}</gv-button>
            </div>`}
      </div>
    `}}window.customElements.define("gv-header",Z)},70835:(Ue,Ae,d)=>{"use strict";d(19007)},96750:(Ue,Ae,d)=>{"use strict";d(47026)},64405:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(48498),E=d(98539),m=d(9455),y=d(14451),k=(d(2012),d(79313)),j=d(89729),L=d(94774);class O extends((0,L.k)(f.oi)){static get properties(){return Object.assign(Object.assign({},super.styles),{items:{type:Object},title:{type:String},clickable:{type:Boolean},_items:{type:Object,attribute:!1}})}static get styles(){return[...super.styles,y.p,f.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          width: 280px;
          border-radius: 4px;
          background-color: var(--gv-list--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          --gv-icon--s: var(--gv-list-icon--s, 20px);
        }

        gv-identity-picture {
          width: var(--gv-list-image--w, 40px);
          height: var(--gv-list-image--h, 40px);
        }

        .list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        h3 {
          padding: 24px;
          font-size: var(--gv-theme-font-size-m);
          line-height: var(--gv-theme-font-size-m);
          opacity: 0.6;
          letter-spacing: 0.05rem;
          border-bottom: 1px solid var(--gv-theme-neutral-color);
          margin: 0;
        }

        h4 {
          font-size: var(--gv-theme-font-size-m);
          line-height: var(--gv-theme-font-size-m);
          opacity: 0.9;
          letter-spacing: 0.05rem;
        }

        h4 span {
          font-size: var(--gv-theme-font-size-s, 12px);
          margin-left: 8px;
        }

        .item {
          display: flex;
          margin: 24px;
        }

        .item__image {
          align-self: center;
          margin-right: 4px;
        }

        .item__content {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }

        .item__title {
          margin: 0;
        }

        .item__description {
          font-size: var(--gv-theme-font-size-m, 14px);
          line-height: 22px;
          opacity: 0.5;

          display: -webkit-box;
          max-width: 200px;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .scrollable-container {
          max-height: 400px;
          overflow: auto;
        }
      `]}constructor(){super(),this._skeletonAttribute="items"}_onClick(R){(0,k.h)(this,"click",R)}_renderImage(R){return f.dy`<gv-identity-picture .picture="${(0,j.an)(R)}" .display_name="${(0,j.Qu)(R)}"></gv-identity-picture>`}_renderStatus(R){if(R){if(R.filter(de=>"PAUSED"===de.status.toUpperCase()).length>0)return f.dy` <gv-icon title="${(0,m.ag)("gv-list.paused")}" shape="media:pause"></gv-icon>`;if(R.filter(de=>"PENDING"===de.status.toUpperCase()).length>0)return f.dy` <gv-icon title="${(0,m.ag)("gv-list.pending")}" shape="home:timer"></gv-icon>`}return""}_renderItem(R){return R?f.dy`
        <div class="item__image">${this._renderImage(R.item)}</div>
        <div class="item__content">
          <h4 class="item__title">${this._renderStatus(R.subscriptions)}${R.item.name} <span>${(0,j.bo)(R.item)}</span></h4>
          <div class="item__description">${R.item.description}</div>
        </div>
      `:f.dy`<p>xxxx-xxxx-xxxx-xxxx</p>`}_renderItems(){return this._empty&&!this._skeleton?"":this._skeleton?f.dy`
        <ul class="list">
          <h4 class="skeleton">xxxx-xxxx-xxxx-xxxx</h4>
          <div class="scrollable-container">
            <li class="item skeleton">${this._renderItem()}</li>
            <li class="item skeleton">${this._renderItem()}</li>
          </div>
        </ul>
      `:f.dy`
      <ul class="list">
        <h3>${this.title?this.title:""} ${this._items&&this._items.length>0?f.dy`<span>(${this._items.length})</span>`:""}</h3>
        <div class="scrollable-container">
          ${this._items?(0,n.r)(this._items,R=>R,R=>this.clickable?f.dy`<li class="${(0,E.$)({item:!0,link:!0})}" @click="${this._onClick.bind(this,R)}">
                      ${this._renderItem(R)}
                    </li>`:f.dy`<li class="${(0,E.$)({item:!0})}">${this._renderItem(R)}</li>`):""}
        </div>
      </ul>
    `}render(){return f.dy` <div>${this._error?f.dy`<div class="error">${(0,m.ag)("gv-list.error")}</div>`:this._renderItems()}</div> `}}window.customElements.define("gv-list",O)},84834:(Ue,Ae,d)=>{"use strict";var f=d(91028),E=(d(59042),d(48498)),m=d(98539),y=d(79313),b=d(67278),k=d(87567);window.customElements.define("gv-option",class L extends f.oi{static get properties(){return{options:{type:Array},_options:{type:Array,attribute:!1},_hasDescription:{type:Array,attribute:!1},value:{type:String,reflect:!0},multiple:{type:Boolean},reverse:{type:Boolean},small:{type:Boolean},outlined:{type:Boolean},disabled:{type:Boolean,reflect:!0}}}static get styles(){return[f.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          --gv-button--p: 5px;
          margin: 0.2rem;
          --bdrs: var(--gv-option--bdrs, 0.15rem);
          --maw: var(--gv-option-button--maw, 200px);
        }

        .box.description {
          display: grid;
          grid-gap: 0.5rem;
        }

        gv-button {
          margin: 0;
        }

        gv-button.description {
          flex: 1 1 var(--maw);
          max-width: var(--maw);
        }

        gv-button:not(.description) {
          margin: 0;
          --gv-button--bdrs: 0;
          --gv-button--bgc: var(--gv-option--bgc, var(--gv-theme-neutral-color-dark, #bfbfbf));
        }

        gv-button:not(.description).entry {
          --gv-button--bdrs: var(--bdrs) 0 0 var(--bdrs);
        }

        gv-button:not(.description).exit {
          --gv-button--bdrs: 0 var(--bdrs) var(--bdrs) 0;
        }

        .content {
          white-space: pre-line;
          --gv-icon--s: var(--gv-option-icon--s, 64px);
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          text-transform: none;
        }

        gv-image {
          height: 64px;
          width: 64px;
          --gv-image--of: fill;
          display: inline-flex;
        }

        .reverse .content {
          flex-direction: column-reverse;
        }

        .title {
          font-size: var(--gv-theme-font-size-l, 18px);
          font-weight: bold;
          margin: 0.5rem 0;
        }

        gv-button.description {
          margin: 0.5rem;
        }
      `]}constructor(){super(),this.multiple=!1,this.reverse=!1}_onClick(H){this.setValue(H),(0,y.h)(this,"select",H),this.dispatchEvent(new Event("input"),{bubbles:!0,cancelable:!0})}performUpdate(){const H=Object.create(null,{performUpdate:{get:()=>super.performUpdate}});return function(O,H,R,V){return new(R||(R=Promise))(function(de,Oe){function Ne(Be){try{ze(V.next(Be))}catch(Ve){Oe(Ve)}}function it(Be){try{ze(V.throw(Be))}catch(Ve){Oe(Ve)}}function ze(Be){Be.done?de(Be.value):function Z(de){return de instanceof R?de:new R(function(Oe){Oe(de)})}(Be.value).then(Ne,it)}ze((V=V.apply(O,H||[])).next())})}(this,void 0,void 0,function*(){return this.shadowRoot.querySelectorAll("gv-button").forEach(R=>R.performUpdate()),H.performUpdate.call(this)})}setValue(H){H&&(this.value=this.multiple?this.value.includes(H.id)?this.value.filter(R=>R!==H.id):[...this.value,H.id]:H.id)}set options(H){H&&Promise.all(H).then(R=>{this._options=R,this._hasDescription=null!=this._options.find(V=>null!=V.description)})}isActive(H){return!!this.value&&(this.multiple?this.value.includes(H.id):this.value===H.id)}_renderOption(H,R){const V=this.isActive(H),Z=this.outlined||!V&&this._hasDescription;return f.dy`<gv-button
      .icon=${(0,b.o)(this._hasDescription?null:H.icon)}
      .iconRight=${(0,b.o)(!H.icon&&H.iconRight?H.iconRight:null)}
      .title="${(0,b.o)(H.title)}"
      .primary="${V}"
      .small="${this.small}"
      .disabled="${H.disabled||this.disabled}"
      @click="${this._onClick.bind(this,H)}"
      .outlined="${Z}"
      class="${(0,m.$)({active:V,entry:0===R,exit:R===this._options.length-1,description:null!=H.description})}"
    >
      ${this._hasDescription?f.dy`<div class="content">
            ${H.icon?f.dy`<gv-icon shape="${H.icon}"></gv-icon>`:H.image?f.dy`<gv-image src="${H.image}"></gv-image>`:""}
            <div class="title">${H.title}</div>
            <div class="description-content" .innerHTML="${H.description}"></div>
          </div>`:null!=H.title?H.label||H.title:""}
    </gv-button>`}render(){return this._options?f.dy`<div
        class="${(0,m.$)({box:!0,description:this._hasDescription,reverse:this.reverse})}"
        style="${(0,k.V)({"grid-template-columns":`repeat(${this._options.length}, auto)`})}"
      >
        ${(0,E.r)(this._options,R=>R,(R,V)=>f.dy`${this._renderOption(R,V)}`)}
      </div>`:f.dy``}})},30087:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(48498),k=(d(73513),d(2012),d(50843),d(65246),d(21033)),j=d(14451),L=d(9455),O=d(98539),H=d(79313);window.customElements.define("gv-rating-list",class R extends f.oi{static get properties(){return{ratings:{type:Array},user:{type:Object},permissions:{type:Object},required:{type:Boolean,attribute:"required"},_permissions:{type:Object,attribute:!1},_ratings:{type:Array,attribute:!1}}}static get styles(){return[k.F,j.p,f.iv`
        :host {
          --s: var(--gv-rating-list--s, 18px);
          --gv-icon--s: var(--s);
          --gv-rating--s: var(--s);
          margin: 0.2rem;
          box-sizing: border-box;
        }

        .rating-list {
          background-color: var(--gv-rating-list--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
        }

        .rating.parent {
          border-bottom: 1px solid var(--gv-rating-list--bdc, var(--gv-theme-neutral-color, #f5f5f5));
        }

        .rating {
          display: flex;
          padding: 1rem 0;
        }

        .answer .rating {
          padding: 1rem 0 0 0;
        }

        .sub-title {
          color: grey;
          display: flex;
          line-height: 20px;
        }

        gv-confirm {
          align-self: center;
        }

        .sub-title a.link {
          text-decoration: underline;
        }

        gv-identity-picture {
          margin: 0 1rem;
          height: 60px;
          width: 60px;
        }

        .title {
          display: flex;
          line-height: 20px;
        }

        .title b,
        .rating-content {
          flex: 1;
        }

        .link-answer {
          display: inline-block;
          padding: 1rem 0;
        }

        .link-answer gv-icon {
          margin-right: 0.2rem;
          --gv-icon--s: var(--s);
        }

        .delete-rating,
        .delete-answer,
        .fake-icon {
          --gv-icon--s: var(--s);
          min-width: var(--s);
          display: inline-flex;
        }

        .delete-rating {
          padding-right: 1rem;
        }

        .answer {
          padding: 1rem;
          margin-top: 1rem;
          background-color: var(--gv-rating-list-answer--bgc, var(--gv-theme-neutral-color-lighter, #fafafa));
        }

        .answer-form {
          display: flex;
          flex-direction: column;
        }

        .display-name:after {
          content: '|';
          margin: 2px;
        }

        .actions {
          text-align: right;
        }
      `]}constructor(){super(),this._ratings=[],this._permissions={update:!1,delete:!1,addAnswer:!1,deleteAnswer:!1},this._hasValidAnswer=!1}set ratings(Z){Promise.resolve(Z).then(de=>{de?(this._skeleton=!1,this._ratings=de):this._skeleton=!0}).catch(()=>{this._skeleton=!1})}set permissions(Z){Z&&"object"==typeof Z&&(this._permissions=Object.assign({},this._permissions,Z))}render(){return f.dy` <div class="rating-list">${(0,n.r)(this._ratings,Z=>this._render(Z))}</div> `}_editAnswer(Z,de){de.stopPropagation(),this._ratings.forEach(Oe=>Oe._edit=!1),Z._edit=!0,this.requestUpdate()}_getAnswerValue(){const Z=this.shadowRoot.querySelector("gv-text");return Z?Z.value:""}_onAnswer(Z){const de=this._getAnswerValue();de.trim().length>0&&(0,H.h)(this,"add-answer",{rating:Z,answer:de})}_onClose(Z){delete Z._edit,this._hasValidAnswer=!1,this.requestUpdate()}_renderAnswer(Z,de){return f.dy`<div class="answer">${this._render(de,Z)}</div>`}_onResponseInput(){const Z=this._getAnswerValue();this._hasValidAnswer=Z.trim().length>0,this.requestUpdate()}_renderAnswers(Z){return f.dy` ${Z.answers?f.dy` ${this._canAddAnswer()?f.dy`<a class="link link-answer" @click="${this._editAnswer.bind(this,Z)}">
                <gv-icon class="link" shape="communication:chat#5"></gv-icon> ${(0,L.ag)("gv-rating-list.reply")}</a
              >`:""}
          ${Z._edit?f.dy`
                <div class="answer answer-form">
                  <gv-text
                    rows="4"
                    label="${(0,L.ag)("gv-rating-list.answerLabel")}"
                    required
                    @input="${this._onResponseInput.bind(this)}"
                  ></gv-text>
                  <div class="actions">
                    <gv-button primary outlined @click="${this._onClose.bind(this,Z)}">${(0,L.ag)("gv-rating-list.cancel")}</gv-button>
                    <gv-button primary @click="${this._onAnswer.bind(this,Z)}" .disabled="${!this._hasValidAnswer}"
                      >${(0,L.ag)("gv-rating-list.send")}</gv-button
                    >
                  </div>
                </div>
              `:""}
          <div>${(0,n.r)(Z.answers,de=>this._renderAnswer(Z,de))}</div>`:""}`}_onDelete(Z){(0,H.h)(this,"delete",{rating:Z})}_onDeleteAnswer(Z,de){(0,H.h)(this,"delete-answer",{rating:Z,answer:de})}_renderActions(Z,de){return de?f.dy`
        ${this._canDeleteAnswer()?f.dy`<gv-confirm
              danger
              icon="home:trash"
              @gv-confirm:ok="${this._onDeleteAnswer.bind(this,de,Z)}"
              message="${(0,L.ag)("gv-rating-list.confirmAnswerDelete")}"
            >
              <gv-icon title="${(0,L.ag)("gv-rating-list.deleteAnswer")}" class="link delete-answer" shape="home:trash"></gv-icon>
            </gv-confirm>`:""}
      `:f.dy`
        ${this._canDelete(Z.id)?f.dy`<gv-confirm
              danger
              icon="home:trash"
              @gv-confirm:ok="${this._onDelete.bind(this,Z)}"
              message="${(0,L.ag)("gv-rating-list.confirmRatingDelete")}"
            >
              <gv-icon title="${(0,L.ag)("gv-rating-list.deleteRating")}" class="link delete-rating" shape="home:trash"></gv-icon>
            </gv-confirm>`:f.dy`<div class="fake-icon"></div>`}
      `}_render(Z,de){const Ne=Z.author&&Z.author.display_name?Z.author.display_name:null,it=Z.author&&Z.author._links&&Z.author._links.avatar?Z.author._links.avatar:null;return f.dy`
      <div class="${(0,O.$)({rating:!0,skeleton:this._skeleton,parent:null==de})}">
        <gv-identity-picture rounded .display_name="${Ne}" .picture="${it}"></gv-identity-picture>
        <div class="rating-content">
          <div class="title">
            <b>${Z.title?Z.title:Z.author.display_name}</b>${de?"":f.dy`<gv-rating
                  .readonly="${!this._canUpdate(Z.id)}"
                  @input="${this._onUpdateRating.bind(this,Z)}"
                  value="${Z.value}"
                ></gv-rating>`}${this._renderActions(Z,de)}
          </div>
          <div class="sub-title">${this._getDisplayName(Z)}<gv-relative-time datetime="${Z.date}" noFuture></gv-relative-time></div>
          <p class="comment">${Z.comment}</p>
          ${de?"":this._renderAnswers(Z)}
        </div>
      </div>
    `}_onUpdateRating(Z,de){Z.value=de.target.value,(0,H.h)(this,"update",{rating:Z})}_canAddAnswer(){return!0===this._permissions.addAnswer}_canDeleteAnswer(){return!0===this._permissions.deleteAnswer}_canUpdate(Z){return Array.isArray(this._permissions.update)?this._permissions.update.includes(Z):!0===this._permissions.update}_canDelete(Z){return Array.isArray(this._permissions.delete)?this._permissions.delete.includes(Z):!0===this._permissions.delete}_getDisplayName(Z){return Z.title?f.dy`<span class="display-name">${Z.author.display_name}</span>`:""}})},8653:(Ue,Ae,d)=>{"use strict";var f=d(98539),n=d(67278),E=d(91028),m=d(21033),y=d(14451),b=d(79613),k=d(48498),L=(d(19007),d(79313)),O=d(90213),H=d(43830);class R extends((0,H.P)((0,O.k)(E.oi))){static get properties(){return Object.assign(Object.assign({},super.properties),{options:{type:Array},_options:{type:Array,attribute:!1},large:{type:Boolean},medium:{type:Boolean},small:{type:Boolean},label:{type:String},title:{type:String},name:{type:String},placeholder:{type:String},description:{type:String},multiple:{type:Boolean,reflect:!0},_isClosed:{type:Boolean,attribute:!1}})}static get styles(){return[...super.styles,m.F,b.q,y.p,E.iv`
        .box {
          --bdc: var(--gv-select--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          --c: var(--gv-select--c, var(--gv-theme-font-color-dark, #262626));
          --bgc: var(--gv-select--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          --bgc-list: var(--gv-select--list-bgc, var(--gv-select--bgc, var(--gv-theme-neutral-color-lightest, #ffffff)));
          --hover-bgc: var(--gv-select-hover--bgc, var(--gv-theme-color-light, #86c3d0));
          --selected-bgc: var(--gv-select-selected--bgc, var(--gv-theme-neutral-color-light, #efefef));
          position: relative;
        }

        div,
        input {
          user-select: none;
          color: var(--c);

          cursor: pointer;
        }

        input {
          background-color: var(--bgc);
          border-color: var(--bdc);
          text-overflow: ellipsis;

          /* Required for text-overflow to do anything */
          white-space: nowrap;
          overflow: hidden;
        }

        :host([readonly]) div,
        :host([readonly]) input,
        :host([readonly]) input:read-only:hover {
          user-select: auto;
          cursor: text;
        }

        input:read-only:hover {
          cursor: pointer;
        }

        .box-icon gv-icon {
          --gv-icon--c: var(--c);
        }

        gv-icon {
          transform: rotate(180deg);
          --gv-icon--s: 19px;
        }

        .medium gv-icon {
          --gv-icon--s: 14px;
        }

        .small gv-icon {
          --gv-icon--s: 11px;
        }

        .closed .select__list {
          display: none;
          opacity: 0;
          transform: translateY(-2em);
          z-index: -1;
        }

        .select__list {
          color: var(--c);
          list-style: none;
          position: absolute;
          background-color: var(--bgc-list);
          list-style: none;
          padding: 0;
          transition: all 0.3s ease 0s;
          margin: 0;
          width: 100%;
          cursor: pointer;
          z-index: 110;
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
          max-height: 340px;
          overflow: auto;
        }

        .select__list .selected {
          background-color: var(--selected-bgc);
        }

        .select__list__item {
          border-left: 1px solid var(--bdc);
          display: flex;
          align-items: center;
          transition: all 0.5s ease;

          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        .select__list__item.disabled {
          opacity: 0.5;
        }

        .select__list__item.disabled:hover {
          cursor: not-allowed;
        }

        .large .select__list__item {
          padding: var(--input-large--p);
          font-size: var(--input-large--fz);
          height: var(--input-large--h);
        }

        .medium .select__list__item {
          padding: 0 5px;
          font-size: var(--input-medium--fz);
          height: var(--input-medium--h);
        }

        .small .select__list__item {
          padding: var(--input-small--p);
          font-size: var(--input-small--fz);
          height: var(--input-small--h);
        }

        .select__list__item:hover {
          background-color: var(--hover-bgc);
          border-left: 1px dotted var(--bdc);
        }

        .medium.icon input,
        .large.icon input,
        .small.icon input {
          padding-right: 25px;
        }
      `]}constructor(){super(),this._type="text",this._isClosed=!0,this._options=[{label:"",value:"",disabled:!1,title:null}],this._handleDocumentClick=this._onDocumentClick.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._handleDocumentClick)}disconnectedCallback(){window.removeEventListener("click",this._handleDocumentClick),super.disconnectedCallback()}willUpdate(Z){Z.has("value")&&this.updateState(this.value)}updateState(Z){if(super.updateState(Z),Z&&this._options&&this.valid){if(this.multiple){if(this.required&&this.setValidity(0===Z.length,"field is required"),Z.length>0&&this.valid){const de=this._options.map(Oe=>Oe.value);this.setValidity(!Z.some(Oe=>de.includes(Oe)),"value is not included in the possible values")}}else this.setValidity(this.required&&null==this._options.find(de=>de.value===Z),"value is not included in the possible values");this.invalid=!this.valid}}close(){this._isClosed=!0}_onDocumentClick(){this._isClosed=!0}_onClick(Z){!this.disabled&&!this.skeleton&&(Z.preventDefault(),Z.stopPropagation(),this._isClosed&&this.dispatchEvent(new Event("click",{bubbles:!0,cancelable:!0,composed:!0})),this._isClosed=!this._isClosed)}_onSelect(Z,de){if(de.stopPropagation(),!0!==Z.disabled){if(this.multiple)if(this.value||(this.value=[]),this.value.includes(de.target.dataset.value)){const Oe=this.value.indexOf(de.target.dataset.value);Oe>-1&&("string"==typeof this.value?this.value=[]:(this.value.splice(Oe,1),this.value=[...this.value]))}else this.value=[...this.value,de.target.dataset.value];else this.value=de.target.dataset.value,this._isClosed=!this._isClosed;(0,L.h)(this,"select",this.value),(0,L.h)(this,"input",this.value),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))}}_onClear(){this.value=[],(0,L.h)(this,"select",this.value),(0,L.h)(this,"input",this.value),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))}_renderIcon(){return this.readonly?"":this.multiple&&null!=this.value&&this.value.length>0?E.dy`<div class="box-icon">
        <gv-icon class="link" shape="code:error" @click=${this._onClear}></gv-icon>
      </div>`:E.dy`<div class="box-icon">
      <gv-icon class="link" shape="design:triangle" @click=${this._onClick}></gv-icon>
    </div>`}set options(Z){Z&&(this._options=Z.map(de=>"object"!=typeof de?{value:de,label:de}:de.label?de:{value:de.value,label:de.value}))}selectedLabel(){if(null!=this.value){const Z=this._options.filter(de=>this.isSelected(de));if(Z)return Z.map(de=>de.label).join(", ")}return""}onResize(){const Z=this.shadowRoot.querySelector("input"),{width:de}=window.getComputedStyle(Z),Oe=this.shadowRoot.querySelector(".select__list");null!=Oe&&(Oe.style.width=de)}render(){const Z={box:!0,closed:this._isClosed,large:this.large,medium:this.medium||!this.large&&!this.small,small:this.small,icon:!0,skeleton:this.skeleton,required:this.required},de=this.selectedLabel();return E.dy`
      <div class="${(0,f.$)(Z)}">
        <div class="box-input">
          ${this.renderLabel()}
          <input
            id=${this._id}
            .type=${this._type}
            .name=${(0,n.o)(this.name)}
            .title=${(0,n.o)(de||this.title||this.label)}
            .required=${this.required}
            aria-required=${!!this.required}
            ?disabled=${this.disabled||this.skeleton}
            .placeholder=${(0,n.o)(this.placeholder)}
            .value=${de}
            @click=${this._onClick}
            readonly="readonly"
          />
          ${this._renderIcon()}
        </div>
        ${this.readonly?"":E.dy` <ul class="${(0,f.$)(Object.assign({select__list:!0}))}" role="listbox" ?aria-expanded="${!this._isClosed}">
              ${this._options&&(0,k.r)(this._options,Oe=>Oe,Oe=>E.dy`
                  <li
                    class="${(0,f.$)({select__list__item:!0,selected:this.isSelected(Oe),disabled:Oe.disabled})}"
                    @click=${this._onSelect.bind(this,Oe)}
                    data-value="${Oe.value}"
                    .title="${(0,n.o)(Oe.title)}"
                    role="option"
                    ?aria-selected="${this.isSelected(Oe)}"
                  >
                    ${Oe.label}
                  </li>
                `)}
            </ul>`}
      </div>
      ${null!=this.description?E.dy`<div class="description" .innerHTML="${this.description}"></div>`:""}
    `}isSelected(Z){return this.multiple?this.value&&this.value.includes(Z.value):""+this.value==""+Z.value}}window.customElements.define("gv-select",R)},84769:(Ue,Ae,d)=>{"use strict";var f=d(91028),m=(d(59042),d(39110),d(48498)),y=d(98539),b=d(9455),k=d(94774);class j extends((0,k.k)(f.oi)){static get properties(){return{stats:{type:Object},options:{type:Array}}}static get styles(){return[...super.styles,f.iv`
        .stats {
          align-content: center;
          justify-content: center;
          display: flex;
          flex-wrap: wrap;
          height: 100%;
        }

        .stats-container {
          border: 1px solid;
          border-radius: 8px;
          margin: 15px;
          padding: 15px;
        }

        .stats-value {
          font-size: 30px;
          text-align: center;
        }

        .stats-label {
          font-size: 15px;
          text-align: center;
        }
      `]}constructor(){super(),this._skeletonAttribute="stats"}_getStat(O){if(!this.stats)return"<div></div>";let H=Math.round(this.stats[O.key]);if(isNaN(H)&&(H=0),0===H&&O.fallback){const R=O.fallback.find(V=>Math.round(this.stats[V.key])>0);R&&(O.key=R.key,O.label=R.label,H=Math.round(this.stats[O.key]))}return f.dy`
      <div class="stats-container" style="color: ${O.color}">
        <div class="stats-value">${H}${O.unit}</div>
        <div class="stats-label">${O.label||O.key}</div>
      </div>
    `}render(){return this._error?f.dy`<div class="error">${(0,b.ag)("gv-stats.error")}</div>`:this._empty?f.dy`<div class="empty">${(0,b.ag)("gv-stats.empty")}</div>`:f.dy`<div class="${(0,y.$)({stats:!0,skeleton:this._skeleton})}">
      ${(0,m.r)(this.options,O=>O,O=>this._getStat(O))}
    </div> `}}window.customElements.define("gv-stats",j)},30423:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(48498),E=d(98539),m=d(14451),y=d(79313),b=d(9455);window.customElements.define("gv-stepper",class j extends f.oi{static get properties(){return{current:{type:Number,reflect:!0},steps:{type:Array},disabled:{type:Boolean},_error:{type:Boolean}}}static get styles(){return[m.p,f.iv`
        :host {
          box-sizing: border-box;
          --passed--bgc: var(--gv-stepper-valid--bgc, var(--gv-theme-color, #5a7684));
          --passed--bdc: var(--gv-stepper-passed--bdc, var(--gv-theme-color-light, #86c3d0));
          --bdc: var(--gv-stepper--bdc, var(--gv-theme-neutral-color-dark, #bfbfbf));
          --bgc: var(--gv-stepper--bgc, var(--gv-theme-neutral-color-dark, #bfbfbf));
          --passed--c: var(--gv-stepper-passed--c, #595959);
          --c: var(--gv-stepper--c, var(--gv-theme-neutral-color-dark, #bfbfbf));
        }

        .stepper {
          display: flex;
          justify-content: center;
        }

        .disabled .step {
          cursor: not-allowed;
        }

        .step {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .graph {
          display: flex;
          flex-direction: row;
          min-height: 22px;
          min-width: 250px;
        }

        .round {
          min-width: 6px;
          width: 6px;
          min-height: 6px;
          height: 6px;
          border-radius: 50%;
          margin: 2px 7px 2px 7px;
        }

        .border {
          margin-top: 4px;
          min-width: 100px;
          width: 100%;
          height: 2px;
          clear: both;
        }

        .round {
          background-color: var(--bgc);
          transition: all 0.2s ease-in;
        }

        .border {
          background-color: var(--bdc);
          margin-bottom: 5px;
          transition: all 0.2s ease-in;
        }

        .passed .round {
          background-color: var(--passed--bgc);
        }

        .passed .border {
          background-color: var(--passed--bdc);
        }

        .passed .round {
          height: 10px;
          width: 10px;
          min-height: 10px;
          min-width: 10px;
          margin: 0 5px 0 5px;
        }

        .first .border:first-of-type {
          visibility: hidden;
        }

        .end .border:last-of-type {
          visibility: hidden;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;

          padding: 5px;
          line-height: 24px;
          font-size: var(--gv-theme-font-size-l, 16px);
          color: var(--c);
        }

        .passed .content {
          color: var(--passed--c);
        }

        .title {
          font-weight: bold;
        }

        .description {
          font-size: var(--gv-theme-font-size-m, 14px);
        }

        .error {
          text-align: center;
        }

        .circle {
          border: 1px solid var(--passed--bgc);
          margin-top: -12px;
          border-radius: 50%;
          animation: validate 0.2s ease-in;
        }

        .invalid.circle {
        }

        gv-icon {
          --gv-icon--c: var(--passed--bgc);
          --gv-icon--s: var(--gv-stepper-icon--s, 32px);
        }

        .invalid gv-icon {
          --gv-icon--c: var(--gv-theme-color-danger);
        }

        @keyframes validate {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `]}constructor(){super(),this.current=0,this._steps=[],this._error=!1,this._empty=!0}_onClick(O){!0!==this.disabled&&(this.current=O+1,(0,y.h)(this,"change",{current:this.current}))}performUpdate(){const O=Object.create(null,{performUpdate:{get:()=>super.performUpdate}});return function(L,O,H,R){return new(H||(H=Promise))(function(Z,de){function Oe(ze){try{it(R.next(ze))}catch(Be){de(Be)}}function Ne(ze){try{it(R.throw(ze))}catch(Be){de(Be)}}function it(ze){ze.done?Z(ze.value):function V(Z){return Z instanceof H?Z:new H(function(de){de(Z)})}(ze.value).then(Oe,Ne)}it((R=R.apply(L,O||[])).next())})}(this,void 0,void 0,function*(){yield Promise.all([this.steps,this.current]).then(([H,R])=>{this._steps=H.map((V,Z)=>(V.passed=!0===V.valid||R>0&&Z+1<=R,V)),this._error=!1,this._empty=!(this._steps&&this._steps.length>0)}).catch(()=>{this._error=!0,this._empty=!1}),O.performUpdate.call(this)})}_getIcon(O){return O.invalid?f.dy`<div class="circle invalid"><gv-icon shape="code:error"></gv-icon></div>`:O.valid?f.dy`<div class="circle"><gv-icon shape="code:check"></gv-icon></div>`:f.dy`<div class="round"></div>`}_getStep(O,H){const V={content:!0,link:!this.disabled};return f.dy`
      <div class="${(0,E.$)({passed:O.passed,valid:O.valid,step:!0,first:0===H,end:H===this._steps.length-1})}" @click="${this._onClick.bind(this,H)}" title="${O.title}">
        <div class="graph">
          <div class="border"></div>
          ${this._getIcon(O)}
          <div class="border"></div>
        </div>
        <div class="${(0,E.$)(V)}">
          <div class="title">${O.title}</div>
          <div class="description">${O.description}</div>
        </div>
      </div>
    `}render(){return this._error?f.dy`<div class="error">${(0,b.ag)("gv-stepper.error")}</div>`:this._empty?f.dy`<div></div>`:f.dy`<div class="${(0,E.$)({stepper:!0,disabled:this.disabled})}">
      ${(0,n.r)(this._steps,H=>H,(H,R)=>this._getStep(H,R))}
    </div> `}})},42715:(Ue,Ae,d)=>{"use strict";var f=d(98539),n=d(67278),E=d(91028),m=d(21033),y=d(79313);window.customElements.define("gv-switch",class b extends E.oi{static get properties(){return{disabled:{type:Boolean,reflect:!0},skeleton:{type:Boolean},value:{type:String,reflect:!0},label:{type:String},description:{type:String},small:{type:Boolean,reflect:!0},checked:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0}}}static get styles(){return[m.F,E.iv`
        :host {
          --off-bgc: var(--gv-switch-off--bgc, var(--gv-theme-neutral-color-dark, #bfbfbf));
          --on-bgc: var(--gv-switch-on--bgc, var(--gv-theme-color, #5a7684));
          box-sizing: border-box;
          margin: 0.2rem;
        }

        .container {
          display: flex;
        }

        .labels {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          margin-right: 0.4rem;
          box-sizing: border-box;
          text-align: var(--gv-switch--ta, left);
        }

        .switch-title {
          font-weight: 600;
        }

        .switch-description {
          opacity: 0.6;
        }

        .switch-container {
          display: flex;
          align-items: center;
        }

        .switch {
          position: relative;
          width: 40px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          border-radius: 16px;
        }

        :host([small]) .switch {
          width: 25px;
        }

        :host([small]) .switch-label:before {
          width: 10px;
          border-radius: 10px;
          right: 10px;
        }

        :host([small]) .switch-label {
          height: 10px;
          line-height: 10px;
          border-radius: 10px;
        }

        :host([small]) .switch-title {
          font-weight: 400;
          font-size: 11px;
        }

        .switch input {
          display: none;
        }

        .switch-label {
          display: block;
          overflow: hidden;
          cursor: pointer;
          height: 16px;
          padding: 0;
          line-height: 16px;
          border: 2px solid transparent;
          border-radius: 16px;
          background-color: var(--off-bgc);
          transition: background-color 0.3s ease-in;
        }

        .switch-label:before {
          content: '';
          display: block;
          width: 16px;
          margin: 0;
          background: var(--gv-switch--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          position: absolute;
          top: 0;
          bottom: 0;
          right: 20px;
          border: 2px solid var(--off-bgc);
          border-radius: 16px;
          transition: all 0.3s ease-in 0s;
        }

        :host([checked]) .switch-label {
          background-color: var(--on-bgc);
        }

        :host([checked]) .switch-label,
        :host([checked]) .switch-label:before {
          border-color: var(--on-bgc);
        }

        :host([checked]) .switch-label:before {
          right: 0;
        }

        :host([disabled]) .switch-label,
        :host([readonly]) .switch-label {
          cursor: default;
        }

        :host([disabled]) .switch-label {
          opacity: 0.5;
        }
      `]}constructor(){super(),this._id="gv-id",this.checked=!1}_onInput(){this.disabled||this.skeleton||this.readonly||(this.value=!this.checked,(0,y.h)(this,"input",this.value))}updated(j){super.updated(j),j.has("value")&&(this.checked=null!=this.value&&"true"===this.value.toString())}render(){const j={skeleton:this.skeleton,disabled:this.disabled,small:this.small,switch:!0};return E.dy`
      <div class="container">
        ${this.label||this.description?E.dy`<div class="${(0,f.$)({labels:!0,skeleton:this.skeleton})}">
              ${this.label?E.dy`<label class="switch-title">${this.label}</label>`:""}
              ${this.description?E.dy`<label class="switch-description" .innerHTML="${this.description}"></label>`:""}
            </div>`:""}
        <div class="switch-container">
          <div class=${(0,f.$)(j)}>
            <input
              id=${this._id}
              type="checkbox"
              .title=${(0,n.o)(this.label||this.description)}
              ?disabled=${this.disabled||this.skeleton}
              ?readonly="${this.readonly}"
              ?checked=${this.checked}
              @input=${this._onInput}
            />
            <label class="switch-label" for="${this._id}"></label>
          </div>
        </div>
      </div>
    `}})},85713:(Ue,Ae,d)=>{"use strict";var f=d(91028),n=d(21033),E=d(14129),m=d(14451),y=d(98539),b=d(48498),k=d(79313),j=d(9455),L=d(62967),O=d(87567),H=d(43830),R=d(67278),Z=(d(75773),d(92266)),Ne=(d(59042),d(47026),d(79613)),it=d(90213);class Be extends((0,it.k)(f.oi)){static get properties(){return Object.assign(Object.assign({},super.properties),{options:{type:Array},_options:{type:Array,attribute:!1},large:{type:Boolean},medium:{type:Boolean},small:{type:Boolean},label:{type:String},title:{type:String},name:{type:String},placeholder:{type:String},description:{type:String},multiple:{type:Boolean,reflect:!0}})}static get styles(){return[...super.styles,n.F,Ne.q,m.p,f.iv`
        .box {
          --bdc: var(--gv-select--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          --c: var(--gv-select--c, var(--gv-theme-font-color-dark, #262626));
          --bgc: var(--gv-select--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          --bgc-list: var(--gv-select--list-bgc, var(--gv-select--bgc, var(--gv-theme-neutral-color-lightest, #ffffff)));
          --hover-bgc: var(--gv-select-hover--bgc, var(--gv-theme-color-light, #86c3d0));
          --selected-bgc: var(--gv-select-selected--bgc, var(--gv-theme-neutral-color-light, #efefef));
          position: relative;
          color: var(--c);
        }

        :host([readonly]) div,
        :host([readonly]) input,
        :host([readonly]) input:read-only:hover {
          user-select: auto;
          cursor: text;
        }

        input:read-only:hover {
          cursor: pointer;
        }

        label {
          color: var(--c);
        }

        select,
        .multiple .input {
          background-image: linear-gradient(45deg, transparent 50%, var(--c) 50%), linear-gradient(135deg, var(--c) 50%, transparent 50%),
            linear-gradient(to right, #ccc, #ccc);
          background-position: calc(100% - 17px) calc(1em + 2px), calc(100% - 12px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
          background-size: 5px 5px, 5px 5px, 1px 1.5em;
          background-repeat: no-repeat;
          -webkit-appearance: none;
          appearance: none;
          background-color: var(--bgc);
        }

        .multiple .input {
          padding-right: 35px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        .multiple gv-icon {
          display: none;
        }

        .multiple.not-empty :not(.show) .input {
          background-image: none, linear-gradient(155deg, var(--c) 0%, transparent 0%), linear-gradient(to right, #ccc, #ccc);
        }
        .multiple.not-empty gv-icon {
          display: block;
        }

        .small .multiple .input {
          padding-right: 30px;
        }

        .small select,
        .small.multiple .input {
          background-position: calc(100% - 16px) calc(0.8em), calc(100% - 11px) calc(0.8em), calc(100% - 2.5em) 0.5em;
          background-size: 5px 5px, 5px 5px, 1px 1em;
        }

        .multiple select {
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
          max-height: var(--input-medium--h);
        }

        .multiple .show {
          min-height: 75px;
        }

        .multiple .show select {
          opacity: 1;
          z-index: 1000;
          max-height: 300px;
        }

        gv-icon {
          --gv-icon--s: 19px;
        }

        .medium gv-icon {
          --gv-icon--s: 14px;
        }

        .small gv-icon {
          --gv-icon--s: 11px;
        }
      `]}constructor(){super(),this._options=[{label:"",value:"",disabled:!1,title:null}]}getInputElement(){return this.shadowRoot.querySelector("select")}firstUpdated(){const M=Object.create(null,{firstUpdated:{get:()=>super.firstUpdated}});return function(Ye,M,P,J){return new(P||(P=Promise))(function(Pe,z){function re(B){try{A(J.next(B))}catch(q){z(q)}}function Se(B){try{A(J.throw(B))}catch(q){z(q)}}function A(B){B.done?Pe(B.value):function xe(Pe){return Pe instanceof P?Pe:new P(function(z){z(Pe)})}(B.value).then(re,Se)}A((J=J.apply(Ye,M||[])).next())})}(this,void 0,void 0,function*(){M.firstUpdated.call(this),yield new Promise(J=>setTimeout(J,0));const P=this.getInputElement();P&&(P.addEventListener("input",this._onInput.bind(this)),this.multiple&&(P.addEventListener("mousedown",this._onEnter.bind(this)),P.addEventListener("focus",this._onEnter.bind(this)),P.addEventListener("mouseleave",this._onLeave.bind(this)),P.addEventListener("blur",this._onLeave.bind(this))))})}willUpdate(M){M.has("value")&&this.updateState(this.value)}updateState(M){if(super.updateState(M),M&&this._options&&this.valid){if(this.multiple){if(this.required&&this.setValidity(0===M.length,"field is required"),M.length>0&&this.valid){const P=this._options.map(J=>J.value);this.setValidity(!M.some(J=>P.includes(J)),"value is not included in the possible values")}}else this.setValidity(this.required&&null==this._options.find(P=>P.value===M),"value is not included in the possible values");this.invalid=!this.valid}}_onEnter(M){const P=this.getInputElement();P.parentNode.classList.contains("show")||(M.stopPropagation(),M.preventDefault(),P.parentNode.classList.add("show"))}_onLeave(){this.getInputElement().parentNode.classList.remove("show")}_onInput(M){if(M.stopPropagation(),this.multiple){const P=this.getInputElement().querySelectorAll("option:checked");this.value=Array.from(P).map(J=>J.value)}else this.value=M.target.value;this.updateState(this.value),(0,k.h)(this,"select",this.value),(0,k.h)(this,"input",this.value),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))}_onClear(){Array.from(this.getInputElement().querySelectorAll("option:checked")).forEach(M=>M.removeAttribute("checked")),this.value=[],(0,k.h)(this,"select",this.value),(0,k.h)(this,"input",this.value),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0}))}set options(M){M&&(this._options=M.map(P=>"object"!=typeof P?{value:P,label:P}:P.label?P:{value:P.value,label:P.value}))}selectedLabel(){if(null!=this.value){const M=this._options.filter(P=>this.isSelected(P));if(M)return M.map(P=>P.label).join(", ")}return""}renderSelect(){const M=this.selectedLabel();if(this.readonly)return f.dy`
        <input
          id=${this._id}
          type="text"
          .name=${(0,R.o)(this.name)}
          .title=${(0,R.o)(M||this.title||this.label)}
          .required=${this.required}
          aria-required=${!!this.required}
          .placeholder=${(0,R.o)(this.placeholder)}
          .value=${M}
          readonly="readonly"
        />
      `;if(this.multiple){const P=this._options?this._options.length*(this.small?20:25):50;return f.dy`
        <input
          class="input"
          type="text"
          .name=${(0,R.o)(this.name)}
          .title=${(0,R.o)(M||this.title||this.label)}
          .required=${this.required}
          aria-required=${!!this.required}
          .placeholder=${(0,R.o)(this.placeholder)}
          .value=${M}
          readonly="readonly"
        />
        <select
          class="input"
          id=${this._id}
          .name=${(0,R.o)(this.name)}
          .title=${(0,R.o)(M||this.title||this.label)}
          .required=${this.required}
          aria-required=${!!this.required}
          ?disabled=${this.disabled||this.skeleton}
          .placeholder=${(0,R.o)(this.placeholder)}
          multiple
          .size="${this._options.length}"
          style="height: ${P}px"
        >
          ${this._options&&(0,b.r)(this._options,J=>J,J=>f.dy` <option value="${J.value||""}" ?selected="${this.isSelected(J)}">${J.label}</option> `)}
        </select>
        <div class="box-icon box-icon-clear">
          <gv-icon class="link" shape="code:error" title="${(0,j.ag)("gv-input.clear")}" @click="${this._onClear}"></gv-icon>
        </div>
      `}return f.dy`<select
        class="input"
        id=${this._id}
        .name=${(0,R.o)(this.name)}
        .title=${(0,R.o)(M||this.title||this.label)}
        .required=${this.required}
        aria-required=${!!this.required}
        ?disabled=${this.disabled||this.skeleton}
        .placeholder=${(0,R.o)(this.placeholder)}
      >
        ${this._options&&(0,b.r)(this._options,P=>P,P=>f.dy` <option value="${P.value||""}" ?selected="${this.isSelected(P)}">${P.label}</option>`)}
      </select>`}render(){return f.dy`
      <div class="${(0,y.$)({box:!0,large:this.large,medium:this.medium||!this.large&&!this.small,small:this.small,skeleton:this.skeleton,required:this.required,multiple:this.multiple,"not-empty":this._options&&this.multiple&&this.value&&this.value.length>0})}">
        <div class="box-input">${this.renderLabel()} ${this.renderSelect()}</div>
      </div>
      ${null!=this.description?f.dy`<div class="description" .innerHTML="${this.description}"></div>`:""}
    `}isSelected(M){return this.multiple?this.value&&this.value.includes(M.value):""+this.value==""+M.value}}window.customElements.define("gv-select-native",Be);var Ve=function(Ye,M,P,J){var z,xe=arguments.length,Pe=xe<3?M:null===J?J=Object.getOwnPropertyDescriptor(M,P):J;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)Pe=Reflect.decorate(Ye,M,P,J);else for(var re=Ye.length-1;re>=0;re--)(z=Ye[re])&&(Pe=(xe<3?z(Pe):xe>3?z(M,P,Pe):z(M,P))||Pe);return xe>3&&Pe&&Object.defineProperty(M,P,Pe),Pe};let Re=class extends f.oi{constructor(){super(...arguments),this.hideEmpty=!1,this.widget=!1,this.disabled=!1,this.hasSearch=!1,this.max=10,this.hasSelect=!1,this.small=!0,this.medium=!1,this.large=!1,this.center=this.max/2-1}static get styles(){return[f.iv`
        .pagination {
          --font-size: var(--gv-pagination--fz, var(--gv-theme-font-size-s, 12px));
          font-size: var(--fz);
          --gv-button--fz: var(--fz);
          display: flex;
          align-items: center;
        }

        gv-button {
          --gv-icon--s: var(--gv-pagination-icon--s, 18px);
          min-width: 29px;
        }

        gv-input {
          width: 50px;
        }

        .medium gv-input,
        .large gv-input {
          width: 60px;
        }

        gv-select-native {
          width: 65px;
        }

        .medium gv-select-native,
        .large gv-select-native {
          width: 75px;
        }
      `]}willUpdate(M){M.has("data")&&this.data&&(this.max=Math.min(this.data.total_pages,10)),M.has("max")&&null!=this.max&&(this.center=this.max/2-1),M.has("large")&&this.large?(this.small=!1,this.medium=!1):M.has("medium")&&this.medium?(this.small=!1,this.large=!1):M.has("small")&&this.small&&(this.medium=!1,this.large=!1)}goToPage(M){this.data.current_page=M,this.requestUpdate("data"),(0,k.h)(this,"paginate",{page:M,size:this.data.size})}onSubmit(M){const P=M.detail;null!=P&&P<=this.data.total_pages&&P>0&&this.goToPage(P)}onClickToSearch(){if(this.input){const M=this.input.value;M&&this.goToPage(M)}}renderPagination(){const M=[];for(let z=0;z<this.data.total_pages;z++)M.push(z+1);let P=M.slice(0,this.data.current_page-1),J=M.slice(this.data.current_page);if(M.length>this.max){let re=P.length-this.center-1,Se=this.max-this.data.current_page>this.center?this.max-this.data.current_page:this.center;if(re>0){Se=this.center;const A=this.data.last-this.data.current_page-Se;A<0&&(re+=A),P=P.slice(re)}J=J.slice(0,Se)}const xe=P.map(z=>f.dy`<gv-button
        ?small="${this.small}"
        ?medium="${this.medium}"
        ?large="${this.large}"
        outlined
        @gv-button:click="${this.goToPage.bind(this,z)}"
        >${z}</gv-button
      >`),Pe=J.map(z=>f.dy`<gv-button
        ?small="${this.small}"
        ?medium="${this.medium}"
        ?large="${this.large}"
        outlined
        @gv-button:click="${this.goToPage.bind(this,z)}"
        >${z}</gv-button
      >`);return xe.unshift(f.dy`<gv-button
        ?small="${this.small}"
        ?medium="${this.medium}"
        ?large="${this.large}"
        .disabled="${this.disabled||0===xe.length}"
        .icon="${this.widget?"navigation:angle-left":null}"
        .title="${(0,j.ag)("gv-pagination.previous")}"
        outlined
        @gv-button:click="${0===xe.length?()=>{}:this.goToPage.bind(this,this.data.current_page-1)}"
        >${this.widget?"":(0,j.ag)("gv-pagination.previous")}</gv-button
      >`),Pe.push(f.dy`<gv-button
        ?small="${this.small}"
        ?medium="${this.medium}"
        ?large="${this.large}"
        .disabled="${this.disabled||0===Pe.length}"
        .icon="${this.widget?"navigation:angle-right":null}"
        .title="${(0,j.ag)("gv-pagination.next")}"
        outlined
        @gv-button:click="${0===Pe.length?()=>{}:this.goToPage.bind(this,this.data.current_page+1)}"
        >${this.widget?"":(0,j.ag)("gv-pagination.next")}</gv-button
      >`),f.dy`${this.widget?xe.slice(0,1):xe}
    ${f.dy`<gv-button
      .disabled="${this.disabled}"
      ?small="${this.small}"
      ?medium="${this.medium}"
      ?large="${this.large}"
      primary
      .title="${this.widget?(0,j.ag)("gv-pagination.results",{count:this.data.total}):this.data.current_page+" / "+M.length}"
      >${this.widget?this.data.current_page+" / "+M.length:this.data.current_page}</gv-button
    >`}
    ${this.widget?Pe.slice(Pe.length-1,Pe.length):Pe}`}get hasData(){var M,P,J;return(null===(M=this.data)||void 0===M?void 0:M.total_pages)&&(null===(P=this.data)||void 0===P?void 0:P.last)&&(null===(J=this.data)||void 0===J?void 0:J.current_page)}get hide(){var M;return this.hideEmpty&&(null===(M=this.data)||void 0===M?void 0:M.total_pages)<2}get pageSize(){var M,P;return this.hasSelect?(null===(M=this.data)||void 0===M?void 0:M.size)||(null===(P=this.data)||void 0===P?void 0:P.sizes[0]):null}onChangePageSize({detail:M}){this.data.size=Number(M).valueOf(),this.goToPage(1)}render(){var M,P;return this.hasData&&!this.hide?f.dy`<div class="${(0,y.$)({pagination:!0,small:this.small,medium:this.medium,large:this.large})}">
        ${this.hasSearch?f.dy`<gv-input
                class="goto"
                @gv-input:submit="${this.onSubmit}"
                type="number"
                min="1"
                .disabled="${this.disabled}"
                .value="${null===(M=this.data)||void 0===M?void 0:M.current_page}"
                max="${this.data.total_pages}"
                placeholder="Page"
                ?small="${this.small}"
                ?medium="${this.medium}"
                ?large="${this.large}"
                .title="${(null===(P=this.data)||void 0===P?void 0:P.current_page)+" / "+this.data.total_pages}"
              ></gv-input>
              <gv-button
                ?small="${this.small}"
                ?medium="${this.medium}"
                ?large="${this.large}"
                outlined
                @gv-button:click="${this.onClickToSearch}"
                icon="general:search"
                .title="${(0,j.ag)("gv-pagination.goTo")}"
              ></gv-button>`:""}
        ${this.hasSelect?f.dy`<gv-select-native
              .value="${this.pageSize}"
              .options="${this.data.sizes}"
              .disabled="${this.disabled}"
              @gv-select-native:input="${this.onChangePageSize}"
              ?small="${this.small}"
              ?medium="${this.medium}"
              ?large="${this.large}"
            ></gv-select-native>`:""}
        ${this.renderPagination()}
      </div>`:f.dy``}};Ve([(0,Z.Cb)({type:Object})],Re.prototype,"data",void 0),Ve([(0,Z.Cb)({type:Boolean,attribute:"hide-empty"})],Re.prototype,"hideEmpty",void 0),Ve([(0,Z.Cb)({type:Boolean})],Re.prototype,"widget",void 0),Ve([(0,Z.Cb)({type:Boolean})],Re.prototype,"disabled",void 0),Ve([(0,Z.Cb)({type:Boolean,attribute:"has-search"})],Re.prototype,"hasSearch",void 0),Ve([(0,Z.Cb)({type:Number,attribute:!1})],Re.prototype,"max",void 0),Ve([(0,Z.Cb)({type:Boolean,attribute:"has-select"})],Re.prototype,"hasSelect",void 0),Ve([(0,Z.Cb)({type:Boolean,reflect:!0})],Re.prototype,"small",void 0),Ve([(0,Z.Cb)({type:Boolean,reflect:!0})],Re.prototype,"medium",void 0),Ve([(0,Z.Cb)({type:Boolean,reflect:!0})],Re.prototype,"large",void 0),Ve([(0,Z.Cb)({type:Number,attribute:!1})],Re.prototype,"center",void 0),Ve([(0,Z.IO)("gv-input")],Re.prototype,"input",void 0),Re=Ve([(0,Z.Mo)("gv-pagination")],Re);var at=d(91456);class Tt extends((0,H.P)(f.oi)){static get properties(){return{items:{type:Array},title:{type:String},order:{type:String},options:{type:Array},noheader:{type:Boolean},nosort:{type:Boolean},rowsheight:{type:String},rowheight:{type:String},emptymessage:{type:String},format:{type:Function},compareFn:{type:Function},selected:{type:Array,reflect:!0},total:{type:String},skeleton:{type:Boolean},_items:{type:Array,attribute:!1},_skeleton:{type:Boolean,attribute:!1},_error:{type:Boolean,attribute:!1},_empty:{type:Boolean,attribute:!1},_itemsProvider:{type:Array,attribute:!1},_page:{type:Number,attribute:!1}}}static get styles(){return[m.p,n.F,E.c,f.iv`
        :host {
          --selected--bgc: var(--gv-table-selected--bgc, var(--gv-theme-color, #5a7684));
          --hover-bgc: var(--gv-table-hover--bgc, var(--gv-theme-neutral-color-lighter, #fafafa));
          --bgc: var(--gv-table--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          --bdc: var(--gv-table--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          display: block;
          height: 100%;
          margin: 0.2rem;
          box-sizing: border-box;
        }

        .table {
          background-color: var(--bgc);
          flex-direction: column;
          height: 100%;
          display: flex;
          width: 100%;
        }

        .rows {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow: var(--gv-table-rows--ov, auto);
          flex: 1;
          height: 100%;
          transition: height 250ms ease-in-out;
        }

        .rows::-webkit-scrollbar {
          display: none;
        }

        :host([w-lt-768]) .row {
          height: 70px;
        }

        :host([w-lt-580]) .row {
          height: 60px;
        }

        :host([w-lt-400]) .row {
          height: 50px;
        }

        .theader {
          background-color: var(--gv-theme-neutral-color-lighter);
          font-weight: bold;
          padding: 0 0.2rem;
        }

        .row,
        .theader {
          align-items: var(--gv-table-row--ai, center);
          align-content: var(--gv-table-row--ac, center);
          border-right: solid thick transparent;
          display: grid;
        }

        div {
          box-sizing: border-box;
        }

        .cell {
          height: 100%;
          display: var(--gv-table-cell--d, flex);
          align-items: center;
        }

        .row:not(:last-child) {
          box-shadow: 0 5px 3px -6px var(--bdc);
        }

        .row:hover,
        .row.selected {
          background-color: var(--hover-bgc);
        }

        .row.selected {
          border-color: var(--selected--bgc);
          box-sizing: border-box;
        }

        .header {
          border-bottom: 1px solid var(--bdc);
          padding: var(--gv-table-header--p, 2rem 4rem);
        }

        .title {
          margin: 0;
          text-transform: uppercase;
          font-size: var(--gv-table-header--fz, var(--gv-theme-font-size-l, 20px));
          line-height: var(--gv-table-header--fz, var(--gv-theme-font-size-l, 20px));
          opacity: 0.6;
        }

        .title span {
          font-weight: 600;
          font-size: var(--gv-theme-font-size-s);
          line-height: var(--gv-theme-font-size-s);
          margin-left: 8px;
          opacity: 0.7;
        }

        gv-identity-picture {
          height: 35px;
          width: 35px;
          --gv-image--of: contain;
          margin-left: 20px;
        }

        gv-icon {
          transform: rotate(0deg);
          --gv-icon--s: 18px;
        }

        gv-icon.desc {
          transform: rotate(180deg);
        }

        gv-pagination {
          align-self: flex-end;
        }

        .cell > *:not(gv-tag) {
          margin: auto;
          width: 100%;
        }
      `]}constructor(){super(),this._id=(new Date).getTime(),this.breakpoints={width:[400,580,768]},this._empty=!1,this.order="",this._page=1,this._itemsProvider=[],this.selected=[],this.compareFn=(M,P,J)=>{const xe=this._getDataFromField(M,J)&&this._getDataFromField(M,J).toLowerCase?this._getDataFromField(M,J).toLowerCase():"",Pe=this._getDataFromField(P,J)&&this._getDataFromField(P,J).toLowerCase?this._getDataFromField(P,J).toLowerCase():"";return this.order.startsWith("-")?Pe.localeCompare(xe):xe.localeCompare(Pe)},this.addEventListener("gv-pagination:paginate",M=>{this._page=M.detail.page})}set items(M){this._skeleton=!0,Promise.resolve(M).then(P=>{P&&(this._itemsProvider=P.map((J,xe)=>(J._id=J.id??xe,J)),this._onSortChanged(),this._empty=0===this._itemsProvider.length,this._skeleton=!1)}).catch(P=>{console.error(P),this._error=!0,this._skeleton=!1,this._itemsProvider=[]})}get items(){return this._itemsProvider}_onSortChanged(M,P){if(P&&P.preventDefault(),this._itemsProvider&&this.order){const J=this.order.startsWith("-"),xe=J?this.order.substring(1):this.order,Pe=M||xe;M&&(this.order=xe===Pe?J?Pe:"-"+Pe:Pe),this._itemsProvider=this._itemsProvider.sort((z,re)=>this.compareFn(z,re,Pe)),M&&(0,k.h)(this,"sort",{order:this.order})}}get _items(){return this._itemsProvider?this.options&&this.options.paging&&this.options.paging<this._itemsProvider.length?[...this._itemsProvider].splice((this._page-1)*this.options.paging,this.options.paging):this._itemsProvider:[]}_getItemId(M){return M.id??M._id}_onSelect(M,P){if(!this._skeleton&&!P.target.dataset.preventSelect)if(this.options.selectable){const J=this._getItemId(M);this.selected=this._isSelected(M)?this.selected.filter(xe=>J!==xe):"multi"===this.options.selectable?[...this.selected,J]:[J],(0,k.h)(this,"select",{items:this.selectedItems,options:this.options})}else(0,k.h)(this,"select",{items:[M]})}get selectedItems(){return this.selected&&this._itemsProvider?this._itemsProvider.filter(M=>this.selected&&this.selected.includes(this._getItemId(M))):[]}_onMouseEnter(M){!(this.selected&&this.selected.length>0)&&!this._skeleton&&(0,k.h)(this,"mouseenter",{item:M})}_onMouseLeave(){!(this.selected&&this.selected.length>0)&&!this._skeleton&&(0,k.h)(this,"mouseleave")}_renderHeader(M){if(this.noheader)return"";{const P=Object.assign(Object.assign({},M),{height:this.rowheight,"grid-auto-rows":this.rowheight?null:"minmax(80px, auto)"});return f.dy` <div class=${(0,y.$)({theader:!0})} style=${(0,O.V)(P)}>
        ${this.options&&this.options.data&&this._items&&this._items.length?(0,b.r)(this.options.data,J=>J,J=>{const xe=this.order&&this.order.startsWith("-")?this.order.substring(1):this.order,Pe=this.format&&J.label?this.format(J.label):J.label,z="function"==typeof J.headerStyle?J.headerStyle(Pe):J.headerStyle;return f.dy` <div style="${z||""}">
                  ${this.order&&!this.nosort?f.dy`
                   <gv-button link @click="${this._onSortChanged.bind(this,J.field||J.tag)}">${(0,L.C)(Pe)}</gv-button>
                      ${xe===J.tag||xe===J.field&&"image"!==J.type?f.dy` <gv-icon class=${(0,y.$)({desc:this.order.startsWith("-")})} shape="design:triangle"></gv-icon>`:""}
                    </a>`:(0,L.C)(Pe)}
                </div>`}):""}
      </div>`}}_renderIcon(M,P,J){const xe="function"==typeof J.icon?J.icon(M):J.icon,Pe="function"==typeof J.iconTitle?J.iconTitle(M):J.iconTitle;return xe?f.dy` <gv-icon shape="${xe}" title="${Pe}"></gv-icon>`:""}_renderComponent(M,P,J,xe,Pe){if(J.condition&&!J.condition(M))return"";const z=document.createElement(Pe);z.value=xe,J.attributes&&Object.keys(J.attributes).forEach(Se=>{if(Se.startsWith("on")){const A=Se.replace("on","").toLowerCase();"click"===A&&z.classList.add("link"),z.dataset.preventSelect=!0,z.addEventListener(A,B=>{null==("function"==typeof J.confirm?J.confirm(M):J.confirm)&&setTimeout(()=>{J.attributes[Se](M,B,z,this)},0)})}else if("function"==typeof J.attributes[Se]){const A=J.attributes[Se](M);null!=A&&(z[Se]=A)}else this.format&&"string"==typeof J.attributes[Se]?this.format(J.attributes[Se]).then(A=>{z[Se]=A}):z[Se]=J.attributes[Se]}),z.addEventListener("input",Se=>{this._items[P][J.field]=Se.target.value});const re="function"==typeof J.confirm?J.confirm(M):J.confirm;if(re){const Se=document.createElement("gv-confirm");return this.format?this.format(re.msg).then(A=>Se.message=A):Se.message=re.msg,re.danger&&(Se.danger=!0),re.position&&(Se.position=re.position),Se.addEventListener("click",A=>A.stopPropagation()),Se.addEventListener("gv-confirm:ok",A=>{A.stopPropagation(),J.attributes.onClick(M,A,z)}),Se.appendChild(z),Se}return z}_renderCell(M,P,J,xe){if(P.type){if("image"===P.type){let Pe="";return P.alt&&(Pe="function"==typeof P.alt?P.alt(J):this._getDataFromField(J,P.alt)),this._renderImage(M,Pe)}if("function"==typeof P.type)return this._renderComponent(J,xe,P,M,P.type(J));if(P.type.startsWith("gv-"))return this._renderComponent(J,xe,P,M,P.type)}return(0,L.C)(M)}_getFormattedCellValue(M,P){let J=M.field?this._getDataFromField(P,M.field):"";return J&&("date"===M.type?J=new Date(J).toLocaleDateString((0,j.G3)()):"datetime"===M.type?J=new Date(J).toLocaleString((0,j.G3)()):"time"===M.type&&(J=new Date(J).toLocaleTimeString((0,j.G3)()))),M.format&&(J=M.format(J)),J}_isSelected(M){return this.selected&&this.selected.includes(this._getItemId(M))}_renderRows(M){return f.dy` <div
      class="rows"
      style=${(0,O.V)({height:this.rowsheight,"user-select":this.options.selectable?"none":""})}
      @mouseleave="${this._onMouseLeave.bind(this)}"
    >
      ${this._items&&this._items.length?(0,b.r)(this._items,P=>P,(P,J)=>f.dy`
          <div class=${(0,y.$)({row:!0,skeleton:this._skeleton,selected:this._isSelected(P)})} style=${(0,O.V)(Object.assign(Object.assign({},M),{height:this.rowheight,"grid-auto-rows":this.rowheight?null:"minmax(80px, auto)",cursor:this.options.selectable?"pointer":"","border-color":this.options.selectable&&this._isSelected(P)?"var(--selected--bgc)":"","column-gap":"var(--gv-table--colmg, 0.2rem)"}))}
            @click="${this._onSelect.bind(this,P)}"
            @mouseenter="${this._onMouseEnter.bind(this,P)}">
            ${this.options&&this.options.data?(0,b.r)(this.options.data,xe=>xe,xe=>{const Pe="function"==typeof xe.style?xe.style(P):xe.style,z=this._getFormattedCellValue(xe,P);return f.dy`<div class="cell" style="${(0,R.o)(Pe)}" title="${z}">
                        ${this._renderCell(z,xe,P,J)}${this._renderTag(xe,P)}${xe.icon?this._renderIcon(P,J,xe):""}
                      </div> `}):""}
          </div>
        </div>`):""}
    </div>`}_renderItems(){let M=this.options.data.map(Pe=>Pe.width?Pe.width:"image"===Pe.type?"80px":"icon"===Pe.type?"40px":null);const P=M.filter(Pe=>null!==Pe),J=P.reduce((Pe,z)=>Pe+parseInt(z.replace("px",""),10),0);M=M.map(Pe=>{if(null==Pe){const z=(0,at.M)(this,"--gv-table--colmg","0.2rem");return`calc((100% - ( ${J}px + ${this.options.data.length-1} * ${z} ) ) / ${this.options.data.length-P.length})`}return Pe});const xe={"grid-template-columns":M.join(" ")};return f.dy` ${this._renderHeader(xe)} ${this._renderRows(xe)} ${this._renderPagination()} `}_renderPagination(){if(this.options&&this.options.paging&&this._itemsProvider)return f.dy`<gv-pagination .data="${{first:1,last:this._itemsProvider.length/this.options.paging,total:this._itemsProvider.length,current_page:this._page,total_pages:this._itemsProvider.length/this.options.paging}}" widget="true"></gv-pagination>`}_getDataFromField(M,P){return"function"==typeof P?P(M):P.split(".").reduce((J,xe)=>J&&J[xe],M)}_renderTag(M,P){if(M.tag){let J;if(J="function"==typeof M.tag?M.tag(P):M.format?M.format(this._getDataFromField(P,M.tag)):this._getDataFromField(P,M.tag),J)return f.dy` <gv-tag ?skeleton="${this._skeleton}">${J}</gv-tag>`}return""}_onImageLoaded(){this._skeleton=!1}_renderImage(M,P){return f.dy`<gv-identity-picture .picture="${M}" .display_name="${P}"></gv-identity-picture>`}updated(M){this._onSortChanged()}render(){if(this._error)return f.dy`<div class="error">${(0,j.ag)("gv-table.error")}</div>`;const P={height:this.rowsheight?this.rowsheight:""};return f.dy`
      <div class=${(0,y.$)({table:!0,skeleton:this._skeleton||this.skeleton})} style="${(0,O.V)({display:this.rowsheight?"block":"flex"})}">
        ${this.title?f.dy` <div class="header">
              <h3 class="title">
                ${this.title} ${this._empty?"":f.dy`<span>(${this.total||this._items&&this._items.length})</span>`}
              </h3>
            </div>`:""}
        ${!this._empty&&this.options&&this.options.data?this._renderItems():f.dy` <div class="empty" style="${(0,O.V)(P)}">
              ${this.emptymessage?this.emptymessage:(0,j.ag)("gv-table.empty")}
            </div>`}
      </div>
    `}}window.customElements.define("gv-table",Tt)},59680:(Ue,Ae,d)=>{"use strict";d.d(Ae,{jK:()=>ze,NK:()=>Be,eg:()=>Ve,au:()=>z,sM:()=>j,IX:()=>L,$h:()=>O,GW:()=>m,ex:()=>Re,lT:()=>H,w$:()=>at,rU:()=>Ye,Rx:()=>R,T3:()=>M,kY:()=>P,qQ:()=>V,fU:()=>J,EA:()=>Z,wS:()=>xe,w0:()=>Pe,FF:()=>de,KD:()=>Oe,fz:()=>Ne});var f=d(80529);class n{encodeKey(Se){return encodeURIComponent(Se)}encodeValue(Se){return encodeURIComponent(Se)}decodeKey(Se){return decodeURIComponent(Se)}decodeValue(Se){return decodeURIComponent(Se)}}var E=d(55062);const m=new E.OlP("basePath");class b{constructor(Se={}){this.apiKeys=Se.apiKeys,this.username=Se.username,this.password=Se.password,this.accessToken=Se.accessToken,this.basePath=Se.basePath,this.withCredentials=Se.withCredentials,this.encoder=Se.encoder}selectHeaderContentType(Se){if(0===Se.length)return;const A=Se.find(B=>this.isJsonMime(B));return void 0===A?Se[0]:A}selectHeaderAccept(Se){if(0===Se.length)return;const A=Se.find(B=>this.isJsonMime(B));return void 0===A?Se[0]:A}isJsonMime(Se){const A=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==Se&&(A.test(Se)||"application/json-patch+json"===Se.toLowerCase())}}let j=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}createApiRating(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling createApiRating.");const Y=A.ratingInput;let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));const Ce=this.configuration.selectHeaderContentType(["application/json"]);void 0!==Ce&&(W=W.set("Content-Type",Ce));let N="json";return G&&G.startsWith("text")&&(N="text"),this.httpClient.post(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/ratings`,Y,{responseType:N,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}createApiRatingAnswer(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling createApiRatingAnswer.");const Y=A.ratingId;if(null==Y)throw new Error("Required parameter ratingId was null or undefined when calling createApiRatingAnswer.");const W=A.ratingAnswerInput;let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));const N=this.configuration.selectHeaderContentType(["application/json"]);void 0!==N&&(G=G.set("Content-Type",N));let le="json";return ie&&ie.startsWith("text")&&(le="text"),this.httpClient.post(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/ratings/${encodeURIComponent(String(Y))}/answers`,W,{responseType:le,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}deleteApiRating(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling deleteApiRating.");const Y=A.ratingId;if(null==Y)throw new Error("Required parameter ratingId was null or undefined when calling deleteApiRating.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.delete(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/ratings/${encodeURIComponent(String(Y))}`,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}deleteApiRatingAnswer(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling deleteApiRatingAnswer.");const Y=A.ratingId;if(null==Y)throw new Error("Required parameter ratingId was null or undefined when calling deleteApiRatingAnswer.");const W=A.answerId;if(null==W)throw new Error("Required parameter answerId was null or undefined when calling deleteApiRatingAnswer.");let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.delete(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/ratings/${encodeURIComponent(String(Y))}/answers/${encodeURIComponent(String(W))}`,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}getApiByApiId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getApiByApiId.");const Y=A.include;let W=new f.LE({encoder:this.encoder});Y&&Y.forEach(N=>{W=this.addToHttpParams(W,N,"include")});let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}`,{params:W,responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}getApiLinks(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getApiLinks.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/links`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApiMedia(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getApiMedia.");const Y=A.mediaHash;if(null==Y)throw new Error("Required parameter mediaHash was null or undefined when calling getApiMedia.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;return void 0===G&&(G=this.configuration.selectHeaderAccept(["*","application/json"])),void 0!==G&&(W=W.set("Accept",G)),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/media/${encodeURIComponent(String(Y))}`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}getApiMetricsByApiId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getApiMetricsByApiId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/metrics`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApiPlansByApiId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getApiPlansByApiId.");const Y=A.page,W=A.size;let G=new f.LE({encoder:this.encoder});null!=Y&&(G=this.addToHttpParams(G,Y,"page")),null!=W&&(G=this.addToHttpParams(G,W,"size"));let ie=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ie=ie.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ce=Q&&Q.httpHeaderAccept;void 0===Ce&&(Ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ce&&(ie=ie.set("Accept",Ce));let N="json";return Ce&&Ce.startsWith("text")&&(N="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/plans`,{params:G,responseType:N,withCredentials:this.configuration.withCredentials,headers:ie,observe:B,reportProgress:q})}getApiRatingsByApiId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getApiRatingsByApiId.");const Y=A.page,W=A.size,G=A.mine,ie=A.order;let Ce=new f.LE({encoder:this.encoder});null!=Y&&(Ce=this.addToHttpParams(Ce,Y,"page")),null!=W&&(Ce=this.addToHttpParams(Ce,W,"size")),null!=G&&(Ce=this.addToHttpParams(Ce,G,"mine")),null!=ie&&(Ce=this.addToHttpParams(Ce,ie,"order"));let N=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(N=N.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let le=Q&&Q.httpHeaderAccept;void 0===le&&(le=this.configuration.selectHeaderAccept(["application/json"])),void 0!==le&&(N=N.set("Accept",le));let ce="json";return le&&le.startsWith("text")&&(ce="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/ratings`,{params:Ce,responseType:ce,withCredentials:this.configuration.withCredentials,headers:N,observe:B,reportProgress:q})}getApis(A,B="body",q=!1,Q){const ne=A.page,Y=A.size,W=A.contextPath,G=A.label,ie=A.version,Ce=A.name,N=A.category,le=A.filter,ce=A.filter2,je=A.promoted;let Ge=new f.LE({encoder:this.encoder});null!=ne&&(Ge=this.addToHttpParams(Ge,ne,"page")),null!=Y&&(Ge=this.addToHttpParams(Ge,Y,"size")),null!=W&&(Ge=this.addToHttpParams(Ge,W,"context-path")),null!=G&&(Ge=this.addToHttpParams(Ge,G,"label")),null!=ie&&(Ge=this.addToHttpParams(Ge,ie,"version")),null!=Ce&&(Ge=this.addToHttpParams(Ge,Ce,"name")),null!=N&&(Ge=this.addToHttpParams(Ge,N,"category")),null!=le&&(Ge=this.addToHttpParams(Ge,le,"filter")),null!=ce&&(Ge=this.addToHttpParams(Ge,ce,"-filter")),null!=je&&(Ge=this.addToHttpParams(Ge,je,"promoted"));let tt=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(tt=tt.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Te=Q&&Q.httpHeaderAccept;void 0===Te&&(Te=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Te&&(tt=tt.set("Accept",Te));let ae="json";return Te&&Te.startsWith("text")&&(ae="text"),this.httpClient.get(`${this.configuration.basePath}/apis`,{params:Ge,responseType:ae,withCredentials:this.configuration.withCredentials,headers:tt,observe:B,reportProgress:q})}getBackgroundByApiId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getBackgroundByApiId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;return void 0===W&&(W=this.configuration.selectHeaderAccept(["image/_*","application/json"])),void 0!==W&&(Y=Y.set("Accept",W)),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/background`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getPageByApiIdAndPageId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getPageByApiIdAndPageId.");const Y=A.pageId;if(null==Y)throw new Error("Required parameter pageId was null or undefined when calling getPageByApiIdAndPageId.");const W=A.include;let G=new f.LE({encoder:this.encoder});W&&W.forEach(le=>{G=this.addToHttpParams(G,le,"include")});let ie=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ie=ie.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ce=Q&&Q.httpHeaderAccept;void 0===Ce&&(Ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ce&&(ie=ie.set("Accept",Ce));let N="json";return Ce&&Ce.startsWith("text")&&(N="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/pages/${encodeURIComponent(String(Y))}`,{params:G,responseType:N,withCredentials:this.configuration.withCredentials,headers:ie,observe:B,reportProgress:q})}getPageContentByApiIdAndPageId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getPageContentByApiIdAndPageId.");const Y=A.pageId;if(null==Y)throw new Error("Required parameter pageId was null or undefined when calling getPageContentByApiIdAndPageId.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["text/plain","application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/pages/${encodeURIComponent(String(Y))}/content`,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}getPagesByApiId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getPagesByApiId.");const Y=A.page,W=A.size,G=A.homepage,ie=A.parent;let Ce=new f.LE({encoder:this.encoder});null!=Y&&(Ce=this.addToHttpParams(Ce,Y,"page")),null!=W&&(Ce=this.addToHttpParams(Ce,W,"size")),null!=G&&(Ce=this.addToHttpParams(Ce,G,"homepage")),null!=ie&&(Ce=this.addToHttpParams(Ce,ie,"parent"));let N=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(N=N.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let le=Q&&Q.httpHeaderAccept;void 0===le&&(le=this.configuration.selectHeaderAccept(["application/json"])),void 0!==le&&(N=N.set("Accept",le));let ce="json";return le&&le.startsWith("text")&&(ce="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/pages`,{params:Ce,responseType:ce,withCredentials:this.configuration.withCredentials,headers:N,observe:B,reportProgress:q})}getPictureByApiId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getPictureByApiId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;return void 0===W&&(W=this.configuration.selectHeaderAccept(["image/_*","application/json"])),void 0!==W&&(Y=Y.set("Accept",W)),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/picture`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getSubscriberApplicationsByApiId(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getSubscriberApplicationsByApiId.");const Y=A.page,W=A.size,G=A.statuses;let ie=new f.LE({encoder:this.encoder});null!=Y&&(ie=this.addToHttpParams(ie,Y,"page")),null!=W&&(ie=this.addToHttpParams(ie,W,"size")),G&&G.forEach(ce=>{ie=this.addToHttpParams(ie,ce,"statuses")});let Ce=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Ce=Ce.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let N=Q&&Q.httpHeaderAccept;void 0===N&&(N=this.configuration.selectHeaderAccept(["application/json"])),void 0!==N&&(Ce=Ce.set("Accept",N));let le="json";return N&&N.startsWith("text")&&(le="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/subscribers`,{params:ie,responseType:le,withCredentials:this.configuration.withCredentials,headers:Ce,observe:B,reportProgress:q})}listCategories(A,B="body",q=!1,Q){const ne=A.filter;let Y=new f.LE({encoder:this.encoder});null!=ne&&(Y=this.addToHttpParams(Y,ne,"filter"));let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.get(`${this.configuration.basePath}/apis/categories`,{params:Y,responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}searchApis(A,B="body",q=!1,Q){const ne=A.q;if(null==ne)throw new Error("Required parameter q was null or undefined when calling searchApis.");const Y=A.page,W=A.size;let G=new f.LE({encoder:this.encoder});null!=Y&&(G=this.addToHttpParams(G,Y,"page")),null!=W&&(G=this.addToHttpParams(G,W,"size")),null!=ne&&(G=this.addToHttpParams(G,ne,"q"));let ie=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ie=ie.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ce=Q&&Q.httpHeaderAccept;void 0===Ce&&(Ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ce&&(ie=ie.set("Accept",Ce));let N="json";return Ce&&Ce.startsWith("text")&&(N="text"),this.httpClient.post(`${this.configuration.basePath}/apis/_search`,null,{params:G,responseType:N,withCredentials:this.configuration.withCredentials,headers:ie,observe:B,reportProgress:q})}updateApiRating(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling updateApiRating.");const Y=A.ratingId;if(null==Y)throw new Error("Required parameter ratingId was null or undefined when calling updateApiRating.");const W=A.ratingInput;let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));const N=this.configuration.selectHeaderContentType(["application/json"]);void 0!==N&&(G=G.set("Content-Type",N));let le="json";return ie&&ie.startsWith("text")&&(le="text"),this.httpClient.put(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/ratings/${encodeURIComponent(String(Y))}`,W,{responseType:le,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),L=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}createApplication(A,B="body",q=!1,Q){const ne=A.applicationInput;let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));const ie=this.configuration.selectHeaderContentType(["application/json"]);void 0!==ie&&(Y=Y.set("Content-Type",ie));let Ce="json";return W&&W.startsWith("text")&&(Ce="text"),this.httpClient.post(`${this.configuration.basePath}/applications`,ne,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}createApplicationAlert(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling createApplicationAlert.");const Y=A.alertInput;let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));const Ce=this.configuration.selectHeaderContentType(["application/json"]);void 0!==Ce&&(W=W.set("Content-Type",Ce));let N="json";return G&&G.startsWith("text")&&(N="text"),this.httpClient.post(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/alerts`,Y,{responseType:N,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}createApplicationMember(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling createApplicationMember.");const Y=A.memberInput;let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));const Ce=this.configuration.selectHeaderContentType(["application/json"]);void 0!==Ce&&(W=W.set("Content-Type",Ce));let N="json";return G&&G.startsWith("text")&&(N="text"),this.httpClient.post(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/members`,Y,{responseType:N,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}createApplicationMetadata(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling createApplicationMetadata.");const Y=A.referenceMetadataInput;let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));const Ce=this.configuration.selectHeaderContentType(["application/json"]);void 0!==Ce&&(W=W.set("Content-Type",Ce));let N="json";return G&&G.startsWith("text")&&(N="text"),this.httpClient.post(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/metadata`,Y,{responseType:N,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}deleteApplicationAlert(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling deleteApplicationAlert.");const Y=A.alertId;if(null==Y)throw new Error("Required parameter alertId was null or undefined when calling deleteApplicationAlert.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.delete(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/alerts/${encodeURIComponent(String(Y))}`,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}deleteApplicationByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling deleteApplicationByApplicationId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.delete(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}deleteApplicationMember(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling deleteApplicationMember.");const Y=A.memberId;if(null==Y)throw new Error("Required parameter memberId was null or undefined when calling deleteApplicationMember.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.delete(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/members/${encodeURIComponent(String(Y))}`,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}deleteApplicationMetadata(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling deleteApplicationMetadata.");const Y=A.metadataId;if(null==Y)throw new Error("Required parameter metadataId was null or undefined when calling deleteApplicationMetadata.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.delete(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/metadata/${encodeURIComponent(String(Y))}`,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}exportApplicationLogsByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling exportApplicationLogsByApplicationId.");const Y=A.page,W=A.size,G=A.from,ie=A.to,Ce=A.query,N=A.field,le=A.order;let ce=new f.LE({encoder:this.encoder});null!=Y&&(ce=this.addToHttpParams(ce,Y,"page")),null!=W&&(ce=this.addToHttpParams(ce,W,"size")),null!=G&&(ce=this.addToHttpParams(ce,G,"from")),null!=ie&&(ce=this.addToHttpParams(ce,ie,"to")),null!=Ce&&(ce=this.addToHttpParams(ce,Ce,"query")),null!=N&&(ce=this.addToHttpParams(ce,N,"field")),null!=le&&(ce=this.addToHttpParams(ce,le,"order"));let je=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(je=je.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ge=Q&&Q.httpHeaderAccept;void 0===Ge&&(Ge=this.configuration.selectHeaderAccept(["text/plain","application/json"])),void 0!==Ge&&(je=je.set("Accept",Ge));let tt="json";return Ge&&Ge.startsWith("text")&&(tt="text"),this.httpClient.post(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/logs/_export`,null,{params:ce,responseType:tt,withCredentials:this.configuration.withCredentials,headers:je,observe:B,reportProgress:q})}getAlertsByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getAlertsByApplicationId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/alerts`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApplicationAlertStatus(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationAlertStatus.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/alerts/status`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApplicationAnalytics(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationAnalytics.");const Y=A.page,W=A.size,G=A.from,ie=A.to,Ce=A.interval,N=A.query,le=A.field,ce=A.type,je=A.ranges,Ge=A.aggs,tt=A.order;let Te=new f.LE({encoder:this.encoder});null!=Y&&(Te=this.addToHttpParams(Te,Y,"page")),null!=W&&(Te=this.addToHttpParams(Te,W,"size")),null!=G&&(Te=this.addToHttpParams(Te,G,"from")),null!=ie&&(Te=this.addToHttpParams(Te,ie,"to")),null!=Ce&&(Te=this.addToHttpParams(Te,Ce,"interval")),null!=N&&(Te=this.addToHttpParams(Te,N,"query")),null!=le&&(Te=this.addToHttpParams(Te,le,"field")),null!=ce&&(Te=this.addToHttpParams(Te,ce,"type")),null!=je&&(Te=this.addToHttpParams(Te,je,"ranges")),null!=Ge&&(Te=this.addToHttpParams(Te,Ge,"aggs")),null!=tt&&(Te=this.addToHttpParams(Te,tt,"order"));let ae=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ae=ae.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ee=Q&&Q.httpHeaderAccept;void 0===ee&&(ee=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ee&&(ae=ae.set("Accept",ee));let ke="json";return ee&&ee.startsWith("text")&&(ke="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/analytics`,{params:Te,responseType:ke,withCredentials:this.configuration.withCredentials,headers:ae,observe:B,reportProgress:q})}getApplicationBackgroundByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationBackgroundByApplicationId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;return void 0===W&&(W=this.configuration.selectHeaderAccept(["image/_*","application/json"])),void 0!==W&&(Y=Y.set("Accept",W)),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/background`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApplicationByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationByApplicationId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApplicationLogByApplicationIdAndLogId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationLogByApplicationIdAndLogId.");const Y=A.logId;if(null==Y)throw new Error("Required parameter logId was null or undefined when calling getApplicationLogByApplicationIdAndLogId.");const W=A.timestamp;let G=new f.LE({encoder:this.encoder});null!=W&&(G=this.addToHttpParams(G,W,"timestamp"));let ie=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ie=ie.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ce=Q&&Q.httpHeaderAccept;void 0===Ce&&(Ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ce&&(ie=ie.set("Accept",Ce));let N="json";return Ce&&Ce.startsWith("text")&&(N="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/logs/${encodeURIComponent(String(Y))}`,{params:G,responseType:N,withCredentials:this.configuration.withCredentials,headers:ie,observe:B,reportProgress:q})}getApplicationLogs(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationLogs.");const Y=A.page,W=A.size,G=A.from,ie=A.to,Ce=A.query,N=A.field,le=A.order;let ce=new f.LE({encoder:this.encoder});null!=Y&&(ce=this.addToHttpParams(ce,Y,"page")),null!=W&&(ce=this.addToHttpParams(ce,W,"size")),null!=G&&(ce=this.addToHttpParams(ce,G,"from")),null!=ie&&(ce=this.addToHttpParams(ce,ie,"to")),null!=Ce&&(ce=this.addToHttpParams(ce,Ce,"query")),null!=N&&(ce=this.addToHttpParams(ce,N,"field")),null!=le&&(ce=this.addToHttpParams(ce,le,"order"));let je=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(je=je.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ge=Q&&Q.httpHeaderAccept;void 0===Ge&&(Ge=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ge&&(je=je.set("Accept",Ge));let tt="json";return Ge&&Ge.startsWith("text")&&(tt="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/logs`,{params:ce,responseType:tt,withCredentials:this.configuration.withCredentials,headers:je,observe:B,reportProgress:q})}getApplicationMemberByApplicationIdAndMemberId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationMemberByApplicationIdAndMemberId.");const Y=A.memberId;if(null==Y)throw new Error("Required parameter memberId was null or undefined when calling getApplicationMemberByApplicationIdAndMemberId.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/members/${encodeURIComponent(String(Y))}`,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}getApplicationMetadataByApplicationIdAndMetadataId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationMetadataByApplicationIdAndMetadataId.");const Y=A.metadataId;if(null==Y)throw new Error("Required parameter metadataId was null or undefined when calling getApplicationMetadataByApplicationIdAndMetadataId.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/metadata/${encodeURIComponent(String(Y))}`,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}getApplicationPictureByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationPictureByApplicationId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;return void 0===W&&(W=this.configuration.selectHeaderAccept(["image/_*","application/json"])),void 0!==W&&(Y=Y.set("Accept",W)),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/picture`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApplicationType(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getApplicationType.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/configuration`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApplications(A,B="body",q=!1,Q){const ne=A.page,Y=A.size,W=A.forSubscription,G=A.order;let ie=new f.LE({encoder:this.encoder});null!=ne&&(ie=this.addToHttpParams(ie,ne,"page")),null!=Y&&(ie=this.addToHttpParams(ie,Y,"size")),null!=W&&(ie=this.addToHttpParams(ie,W,"forSubscription")),null!=G&&(ie=this.addToHttpParams(ie,G,"order"));let Ce=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Ce=Ce.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let N=Q&&Q.httpHeaderAccept;void 0===N&&(N=this.configuration.selectHeaderAccept(["application/json"])),void 0!==N&&(Ce=Ce.set("Accept",N));let le="json";return N&&N.startsWith("text")&&(le="text"),this.httpClient.get(`${this.configuration.basePath}/applications`,{params:ie,responseType:le,withCredentials:this.configuration.withCredentials,headers:Ce,observe:B,reportProgress:q})}getHooks(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/applications/hooks`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getMembersByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getMembersByApplicationId.");const Y=A.page,W=A.size;let G=new f.LE({encoder:this.encoder});null!=Y&&(G=this.addToHttpParams(G,Y,"page")),null!=W&&(G=this.addToHttpParams(G,W,"size"));let ie=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ie=ie.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ce=Q&&Q.httpHeaderAccept;void 0===Ce&&(Ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ce&&(ie=ie.set("Accept",Ce));let N="json";return Ce&&Ce.startsWith("text")&&(N="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/members`,{params:G,responseType:N,withCredentials:this.configuration.withCredentials,headers:ie,observe:B,reportProgress:q})}getMetadataByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getMetadataByApplicationId.");const Y=A.page,W=A.size;let G=new f.LE({encoder:this.encoder});null!=Y&&(G=this.addToHttpParams(G,Y,"page")),null!=W&&(G=this.addToHttpParams(G,W,"size"));let ie=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ie=ie.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ce=Q&&Q.httpHeaderAccept;void 0===Ce&&(Ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ce&&(ie=ie.set("Accept",Ce));let N="json";return Ce&&Ce.startsWith("text")&&(N="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/metadata`,{params:G,responseType:N,withCredentials:this.configuration.withCredentials,headers:ie,observe:B,reportProgress:q})}getNotificationsByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getNotificationsByApplicationId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/notifications`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getSubscriberApisByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling getSubscriberApisByApplicationId.");const Y=A.page,W=A.size,G=A.statuses;let ie=new f.LE({encoder:this.encoder});null!=Y&&(ie=this.addToHttpParams(ie,Y,"page")),null!=W&&(ie=this.addToHttpParams(ie,W,"size")),G&&G.forEach(ce=>{ie=this.addToHttpParams(ie,ce,"statuses")});let Ce=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Ce=Ce.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let N=Q&&Q.httpHeaderAccept;void 0===N&&(N=this.configuration.selectHeaderAccept(["application/json"])),void 0!==N&&(Ce=Ce.set("Accept",N));let le="json";return N&&N.startsWith("text")&&(le="text"),this.httpClient.get(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/subscribers`,{params:ie,responseType:le,withCredentials:this.configuration.withCredentials,headers:Ce,observe:B,reportProgress:q})}renewApplicationSecret(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling renewApplicationSecret.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.post(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/_renew_secret`,null,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}renewSharedKey(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling renewSharedKey.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.post(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/keys/_renew`,null,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}revokeSharedKey(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling revokeSharedKey.");const Y=A.apiKey;if(null==Y)throw new Error("Required parameter apiKey was null or undefined when calling revokeSharedKey.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.post(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/keys/${encodeURIComponent(String(Y))}/_revoke`,null,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}transferMemberOwnership(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling transferMemberOwnership.");const Y=A.transferOwnershipInput;let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));const Ce=this.configuration.selectHeaderContentType(["application/json"]);void 0!==Ce&&(W=W.set("Content-Type",Ce));let N="json";return G&&G.startsWith("text")&&(N="text"),this.httpClient.post(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/members/_transfer_ownership`,Y,{responseType:N,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}updateAlert(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling updateAlert.");const Y=A.alertId;if(null==Y)throw new Error("Required parameter alertId was null or undefined when calling updateAlert.");const W=A.alertInput;let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));const N=this.configuration.selectHeaderContentType(["application/json"]);void 0!==N&&(G=G.set("Content-Type",N));let le="json";return ie&&ie.startsWith("text")&&(le="text"),this.httpClient.put(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/alerts/${encodeURIComponent(String(Y))}`,W,{responseType:le,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}updateApplicationByApplicationId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling updateApplicationByApplicationId.");const Y=A.application;let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));const Ce=this.configuration.selectHeaderContentType(["application/json"]);void 0!==Ce&&(W=W.set("Content-Type",Ce));let N="json";return G&&G.startsWith("text")&&(N="text"),this.httpClient.put(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}`,Y,{responseType:N,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}updateApplicationMemberByApplicationIdAndMemberId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling updateApplicationMemberByApplicationIdAndMemberId.");const Y=A.memberId;if(null==Y)throw new Error("Required parameter memberId was null or undefined when calling updateApplicationMemberByApplicationIdAndMemberId.");const W=A.memberInput;let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));const N=this.configuration.selectHeaderContentType(["application/json"]);void 0!==N&&(G=G.set("Content-Type",N));let le="json";return ie&&ie.startsWith("text")&&(le="text"),this.httpClient.put(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/members/${encodeURIComponent(String(Y))}`,W,{responseType:le,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}updateApplicationMetadataByApplicationIdAndMetadataId(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling updateApplicationMetadataByApplicationIdAndMetadataId.");const Y=A.metadataId;if(null==Y)throw new Error("Required parameter metadataId was null or undefined when calling updateApplicationMetadataByApplicationIdAndMetadataId.");const W=A.referenceMetadataInput;let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));const N=this.configuration.selectHeaderContentType(["application/json"]);void 0!==N&&(G=G.set("Content-Type",N));let le="json";return ie&&ie.startsWith("text")&&(le="text"),this.httpClient.put(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/metadata/${encodeURIComponent(String(Y))}`,W,{responseType:le,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}updateApplicationNotifications(A,B="body",q=!1,Q){const ne=A.applicationId;if(null==ne)throw new Error("Required parameter applicationId was null or undefined when calling updateApplicationNotifications.");const Y=A.notificationInput;let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));const Ce=this.configuration.selectHeaderContentType(["application/json"]);void 0!==Ce&&(W=W.set("Content-Type",Ce));let N="json";return G&&G.startsWith("text")&&(N="text"),this.httpClient.put(`${this.configuration.basePath}/applications/${encodeURIComponent(String(ne))}/notifications`,Y,{responseType:N,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),O=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}canConsumeForm(A){for(const q of A)if("multipart/form-data"===q)return!0;return!1}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}exchangeAuthorizationCode(A,B="body",q=!1,Q){const ne=A.identity;if(null==ne)throw new Error("Required parameter identity was null or undefined when calling exchangeAuthorizationCode.");const Y=A.clientId,W=A.redirectUri,G=A.code,ie=A.grantType,Ce=A.codeVerifier,N=A.state;let le=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(le=le.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let tt,ce=Q&&Q.httpHeaderAccept;void 0===ce&&(ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ce&&(le=le.set("Accept",ce)),this.canConsumeForm(["application/x-www-form-urlencoded"]),tt=new f.LE({encoder:this.encoder}),void 0!==Y&&(tt=tt.append("client_id",Y)||tt),void 0!==W&&(tt=tt.append("redirect_uri",W)||tt),void 0!==G&&(tt=tt.append("code",G)||tt),void 0!==ie&&(tt=tt.append("grant_type",ie)||tt),void 0!==Ce&&(tt=tt.append("code_verifier",Ce)||tt),void 0!==N&&(tt=tt.append("state",N)||tt);let ee="json";return ce&&ce.startsWith("text")&&(ee="text"),this.httpClient.post(`${this.configuration.basePath}/auth/oauth2/${encodeURIComponent(String(ne))}`,tt,{responseType:ee,withCredentials:this.configuration.withCredentials,headers:le,observe:B,reportProgress:q})}login(A,B="body",q=!1,Q){const ne=A.authorization;if(null==ne)throw new Error("Required parameter authorization was null or undefined when calling login.");let Y=this.defaultHeaders;null!=ne&&(Y=Y.set("Authorization",String(ne))),(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.post(`${this.configuration.basePath}/auth/login`,null,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}logout(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.post(`${this.configuration.basePath}/auth/logout`,null,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}tokenExchange(A,B="body",q=!1,Q){const ne=A.identity;if(null==ne)throw new Error("Required parameter identity was null or undefined when calling tokenExchange.");const Y=A.token;if(null==Y)throw new Error("Required parameter token was null or undefined when calling tokenExchange.");let W=new f.LE({encoder:this.encoder});null!=Y&&(W=this.addToHttpParams(W,Y,"token"));let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.post(`${this.configuration.basePath}/auth/oauth2/${encodeURIComponent(String(ne))}/_exchange`,null,{params:W,responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),H=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}getGroups(A,B="body",q=!1,Q){const ne=A.page,Y=A.size;let W=new f.LE({encoder:this.encoder});null!=ne&&(W=this.addToHttpParams(W,ne,"page")),null!=Y&&(W=this.addToHttpParams(W,Y,"size"));let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.get(`${this.configuration.basePath}/groups`,{params:W,responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}getMembersByGroupId(A,B="body",q=!1,Q){const ne=A.groupId;if(null==ne)throw new Error("Required parameter groupId was null or undefined when calling getMembersByGroupId.");const Y=A.page,W=A.size;let G=new f.LE({encoder:this.encoder});null!=Y&&(G=this.addToHttpParams(G,Y,"page")),null!=W&&(G=this.addToHttpParams(G,W,"size"));let ie=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ie=ie.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ce=Q&&Q.httpHeaderAccept;void 0===Ce&&(Ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ce&&(ie=ie.set("Accept",Ce));let N="json";return Ce&&Ce.startsWith("text")&&(N="text"),this.httpClient.get(`${this.configuration.basePath}/groups/${encodeURIComponent(String(ne))}/members`,{params:G,responseType:N,withCredentials:this.configuration.withCredentials,headers:ie,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),R=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}getNotifiers(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/notifiers`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),V=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}getCurrentUserPermissions(A,B="body",q=!1,Q){const ne=A.apiId,Y=A.applicationId;let W=new f.LE({encoder:this.encoder});null!=ne&&(W=this.addToHttpParams(W,ne,"apiId")),null!=Y&&(W=this.addToHttpParams(W,Y,"applicationId"));let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.get(`${this.configuration.basePath}/permissions`,{params:W,responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),Z=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}createTicket(A,B="body",q=!1,Q){const ne=A.ticketInput;let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));const ie=this.configuration.selectHeaderContentType(["application/json"]);void 0!==ie&&(Y=Y.set("Content-Type",ie));let Ce="json";return W&&W.startsWith("text")&&(Ce="text"),this.httpClient.post(`${this.configuration.basePath}/tickets`,ne,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApiInformations(A,B="body",q=!1,Q){const ne=A.apiId;if(null==ne)throw new Error("Required parameter apiId was null or undefined when calling getApiInformations.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/apis/${encodeURIComponent(String(ne))}/informations`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getApplicationRoles(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/configuration/applications/roles`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getBackgroundByCategoryId(A,B="body",q=!1,Q){const ne=A.categoryId;if(null==ne)throw new Error("Required parameter categoryId was null or undefined when calling getBackgroundByCategoryId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;return void 0===W&&(W=this.configuration.selectHeaderAccept(["image/_*","application/json"])),void 0!==W&&(Y=Y.set("Accept",W)),this.httpClient.get(`${this.configuration.basePath}/categories/${encodeURIComponent(String(ne))}/background`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getCategories(A,B="body",q=!1,Q){const ne=A.page,Y=A.size;let W=new f.LE({encoder:this.encoder});null!=ne&&(W=this.addToHttpParams(W,ne,"page")),null!=Y&&(W=this.addToHttpParams(W,Y,"size"));let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.get(`${this.configuration.basePath}/categories`,{params:W,responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}getCategoryByCategoryId(A,B="body",q=!1,Q){const ne=A.categoryId;if(null==ne)throw new Error("Required parameter categoryId was null or undefined when calling getCategoryByCategoryId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/categories/${encodeURIComponent(String(ne))}`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getDashboards(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/dashboards`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getEnabledApplicationTypes(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/configuration/applications/types`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getPageByPageId(A,B="body",q=!1,Q){const ne=A.pageId;if(null==ne)throw new Error("Required parameter pageId was null or undefined when calling getPageByPageId.");const Y=A.include;let W=new f.LE({encoder:this.encoder});Y&&Y.forEach(N=>{W=this.addToHttpParams(W,N,"include")});let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.get(`${this.configuration.basePath}/pages/${encodeURIComponent(String(ne))}`,{params:W,responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}getPageContentByPageId(A,B="body",q=!1,Q){const ne=A.pageId;if(null==ne)throw new Error("Required parameter pageId was null or undefined when calling getPageContentByPageId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["text/plain","application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/pages/${encodeURIComponent(String(ne))}/content`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getPages(A,B="body",q=!1,Q){const ne=A.page,Y=A.size,W=A.homepage,G=A.parent;let ie=new f.LE({encoder:this.encoder});null!=ne&&(ie=this.addToHttpParams(ie,ne,"page")),null!=Y&&(ie=this.addToHttpParams(ie,Y,"size")),null!=W&&(ie=this.addToHttpParams(ie,W,"homepage")),null!=G&&(ie=this.addToHttpParams(ie,G,"parent"));let Ce=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Ce=Ce.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let N=Q&&Q.httpHeaderAccept;void 0===N&&(N=this.configuration.selectHeaderAccept(["application/json"])),void 0!==N&&(Ce=Ce.set("Accept",N));let le="json";return N&&N.startsWith("text")&&(le="text"),this.httpClient.get(`${this.configuration.basePath}/pages`,{params:ie,responseType:le,withCredentials:this.configuration.withCredentials,headers:Ce,observe:B,reportProgress:q})}getPictureByCategoryId(A,B="body",q=!1,Q){const ne=A.categoryId;if(null==ne)throw new Error("Required parameter categoryId was null or undefined when calling getPictureByCategoryId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;return void 0===W&&(W=this.configuration.selectHeaderAccept(["image/_*","application/json"])),void 0!==W&&(Y=Y.set("Accept",W)),this.httpClient.get(`${this.configuration.basePath}/categories/${encodeURIComponent(String(ne))}/picture`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getPortalConfiguration(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/configuration`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getPortalIdentityProvider(A,B="body",q=!1,Q){const ne=A.identityProviderId;if(null==ne)throw new Error("Required parameter identityProviderId was null or undefined when calling getPortalIdentityProvider.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.get(`${this.configuration.basePath}/configuration/identities/${encodeURIComponent(String(ne))}`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getPortalIdentityProviders(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/configuration/identities`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getPortalInformation(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/info`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getPortalLinks(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/configuration/links`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getPortalMedia(A,B="body",q=!1,Q){const ne=A.mediaHash;if(null==ne)throw new Error("Required parameter mediaHash was null or undefined when calling getPortalMedia.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;return void 0===W&&(W=this.configuration.selectHeaderAccept(["*","application/json"])),void 0!==W&&(Y=Y.set("Accept",W)),this.httpClient.get(`${this.configuration.basePath}/media/${encodeURIComponent(String(ne))}`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getPortalTheme(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/theme`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getTickets(A,B="body",q=!1,Q){const ne=A.apiId,Y=A.applicationId,W=A.page,G=A.size,ie=A.order;let Ce=new f.LE({encoder:this.encoder});null!=ne&&(Ce=this.addToHttpParams(Ce,ne,"apiId")),null!=Y&&(Ce=this.addToHttpParams(Ce,Y,"applicationId")),null!=W&&(Ce=this.addToHttpParams(Ce,W,"page")),null!=G&&(Ce=this.addToHttpParams(Ce,G,"size")),null!=ie&&(Ce=this.addToHttpParams(Ce,ie,"order"));let N=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(N=N.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let le=Q&&Q.httpHeaderAccept;void 0===le&&(le=this.configuration.selectHeaderAccept(["application/json"])),void 0!==le&&(N=N.set("Accept",le));let ce="json";return le&&le.startsWith("text")&&(ce="text"),this.httpClient.get(`${this.configuration.basePath}/tickets`,{params:Ce,responseType:ce,withCredentials:this.configuration.withCredentials,headers:N,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),de=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}closeSubscription(A,B="body",q=!1,Q){const ne=A.subscriptionId;if(null==ne)throw new Error("Required parameter subscriptionId was null or undefined when calling closeSubscription.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.post(`${this.configuration.basePath}/subscriptions/${encodeURIComponent(String(ne))}/_close`,null,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}createSubscription(A,B="body",q=!1,Q){const ne=A.subscriptionInput;let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));const ie=this.configuration.selectHeaderContentType(["application/json"]);void 0!==ie&&(Y=Y.set("Content-Type",ie));let Ce="json";return W&&W.startsWith("text")&&(Ce="text"),this.httpClient.post(`${this.configuration.basePath}/subscriptions`,ne,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getSubscriptionById(A,B="body",q=!1,Q){const ne=A.subscriptionId;if(null==ne)throw new Error("Required parameter subscriptionId was null or undefined when calling getSubscriptionById.");const Y=A.include;let W=new f.LE({encoder:this.encoder});Y&&Y.forEach(N=>{W=this.addToHttpParams(W,N,"include")});let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.get(`${this.configuration.basePath}/subscriptions/${encodeURIComponent(String(ne))}`,{params:W,responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}getSubscriptions(A,B="body",q=!1,Q){const ne=A.apiId,Y=A.applicationId,W=A.statuses,G=A.page,ie=A.size;let Ce=new f.LE({encoder:this.encoder});null!=ne&&(Ce=this.addToHttpParams(Ce,ne,"apiId")),null!=Y&&(Ce=this.addToHttpParams(Ce,Y,"applicationId")),W&&W.forEach(je=>{Ce=this.addToHttpParams(Ce,je,"statuses")}),null!=G&&(Ce=this.addToHttpParams(Ce,G,"page")),null!=ie&&(Ce=this.addToHttpParams(Ce,ie,"size"));let N=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(N=N.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let le=Q&&Q.httpHeaderAccept;void 0===le&&(le=this.configuration.selectHeaderAccept(["application/json"])),void 0!==le&&(N=N.set("Accept",le));let ce="json";return le&&le.startsWith("text")&&(ce="text"),this.httpClient.get(`${this.configuration.basePath}/subscriptions`,{params:Ce,responseType:ce,withCredentials:this.configuration.withCredentials,headers:N,observe:B,reportProgress:q})}renewKeySubscription(A,B="body",q=!1,Q){const ne=A.subscriptionId;if(null==ne)throw new Error("Required parameter subscriptionId was null or undefined when calling renewKeySubscription.");const Y=A.requestBody;let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));const Ce=this.configuration.selectHeaderContentType(["application/json"]);void 0!==Ce&&(W=W.set("Content-Type",Ce));let N="json";return G&&G.startsWith("text")&&(N="text"),this.httpClient.post(`${this.configuration.basePath}/subscriptions/${encodeURIComponent(String(ne))}/keys/_renew`,Y,{responseType:N,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}revokeKeySubscription(A,B="body",q=!1,Q){const ne=A.subscriptionId;if(null==ne)throw new Error("Required parameter subscriptionId was null or undefined when calling revokeKeySubscription.");const Y=A.apiKey;if(null==Y)throw new Error("Required parameter apiKey was null or undefined when calling revokeKeySubscription.");let W=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(W=W.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let G=Q&&Q.httpHeaderAccept;void 0===G&&(G=this.configuration.selectHeaderAccept(["application/json"])),void 0!==G&&(W=W.set("Accept",G));let ie="json";return G&&G.startsWith("text")&&(ie="text"),this.httpClient.post(`${this.configuration.basePath}/subscriptions/${encodeURIComponent(String(ne))}/keys/${encodeURIComponent(String(Y))}/_revoke`,null,{responseType:ie,withCredentials:this.configuration.withCredentials,headers:W,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),Oe=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}deleteAllCurrentUserNotifications(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.delete(`${this.configuration.basePath}/user/notifications`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}deleteCurrentUserNotificationByNotificationId(A,B="body",q=!1,Q){const ne=A.notificationId;if(null==ne)throw new Error("Required parameter notificationId was null or undefined when calling deleteCurrentUserNotificationByNotificationId.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));let G="json";return W&&W.startsWith("text")&&(G="text"),this.httpClient.delete(`${this.configuration.basePath}/user/notifications/${encodeURIComponent(String(ne))}`,{responseType:G,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getCurrentUser(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/user`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getCurrentUserAvatar(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;return void 0===ne&&(ne=this.configuration.selectHeaderAccept(["image/_*","application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne)),this.httpClient.get(`${this.configuration.basePath}/user/avatar`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}getCurrentUserNotifications(A,B="body",q=!1,Q){const ne=A.page,Y=A.size;let W=new f.LE({encoder:this.encoder});null!=ne&&(W=this.addToHttpParams(W,ne,"page")),null!=Y&&(W=this.addToHttpParams(W,Y,"size"));let G=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(G=G.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ie=Q&&Q.httpHeaderAccept;void 0===ie&&(ie=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ie&&(G=G.set("Accept",ie));let Ce="json";return ie&&ie.startsWith("text")&&(Ce="text"),this.httpClient.get(`${this.configuration.basePath}/user/notifications`,{params:W,responseType:Ce,withCredentials:this.configuration.withCredentials,headers:G,observe:B,reportProgress:q})}updateCurrentUser(A,B="body",q=!1,Q){const ne=A.userInput;let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));const ie=this.configuration.selectHeaderContentType(["application/json"]);void 0!==ie&&(Y=Y.set("Content-Type",ie));let Ce="json";return W&&W.startsWith("text")&&(Ce="text"),this.httpClient.put(`${this.configuration.basePath}/user`,ne,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})(),Ne=(()=>{class re{constructor(A,B,q){this.httpClient=A,this.basePath="http://localhost:8083/portal/environments/DEFAULT",this.defaultHeaders=new f.WM,this.configuration=new b,q&&(this.configuration=q),"string"!=typeof this.configuration.basePath&&("string"!=typeof B&&(B=this.basePath),this.configuration.basePath=B),this.encoder=this.configuration.encoder||new n}addToHttpParams(A,B,q){return"object"!=typeof B||B instanceof Date?this.addToHttpParamsRecursive(A,B,q):this.addToHttpParamsRecursive(A,B)}addToHttpParamsRecursive(A,B,q){if(null==B)return A;if("object"==typeof B)if(Array.isArray(B))B.forEach(Q=>A=this.addToHttpParamsRecursive(A,Q,q));else if(B instanceof Date){if(null==q)throw Error("key may not be null if value is Date");A=A.append(q,B.toISOString().substr(0,10))}else Object.keys(B).forEach(Q=>A=this.addToHttpParamsRecursive(A,B[Q],null!=q?`${q}.${Q}`:Q));else{if(null==q)throw Error("key may not be null if value is not object or array");A=A.append(q,B)}return A}changeUserPassword(A,B="body",q=!1,Q){const ne=A.changeUserPasswordInput;let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));const ie=this.configuration.selectHeaderContentType(["application/json"]);void 0!==ie&&(Y=Y.set("Content-Type",ie));let Ce="json";return W&&W.startsWith("text")&&(Ce="text"),this.httpClient.post(`${this.configuration.basePath}/users/_change_password`,ne,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}finalizeUserRegistration(A,B="body",q=!1,Q){const ne=A.finalizeRegistrationInput;let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));const ie=this.configuration.selectHeaderContentType(["application/json"]);void 0!==ie&&(Y=Y.set("Content-Type",ie));let Ce="json";return W&&W.startsWith("text")&&(Ce="text"),this.httpClient.post(`${this.configuration.basePath}/users/registration/_finalize`,ne,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getUserAvatar(A,B="body",q=!1,Q){const ne=A.userId;if(null==ne)throw new Error("Required parameter userId was null or undefined when calling getUserAvatar.");let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;return void 0===W&&(W=this.configuration.selectHeaderAccept(["image/_*","application/json"])),void 0!==W&&(Y=Y.set("Accept",W)),this.httpClient.get(`${this.configuration.basePath}/users/${encodeURIComponent(String(ne))}/avatar`,{responseType:"blob",withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}getUsers(A,B="body",q=!1,Q){const ne=A.page,Y=A.size,W=A.q;let G=new f.LE({encoder:this.encoder});null!=ne&&(G=this.addToHttpParams(G,ne,"page")),null!=Y&&(G=this.addToHttpParams(G,Y,"size")),null!=W&&(G=this.addToHttpParams(G,W,"q"));let ie=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(ie=ie.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let Ce=Q&&Q.httpHeaderAccept;void 0===Ce&&(Ce=this.configuration.selectHeaderAccept(["application/json"])),void 0!==Ce&&(ie=ie.set("Accept",Ce));let N="json";return Ce&&Ce.startsWith("text")&&(N="text"),this.httpClient.post(`${this.configuration.basePath}/users/_search`,null,{params:G,responseType:N,withCredentials:this.configuration.withCredentials,headers:ie,observe:B,reportProgress:q})}listCustomUserFields(A="body",B=!1,q){let Q=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Q=Q.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let ne=q&&q.httpHeaderAccept;void 0===ne&&(ne=this.configuration.selectHeaderAccept(["application/json"])),void 0!==ne&&(Q=Q.set("Accept",ne));let Y="json";return ne&&ne.startsWith("text")&&(Y="text"),this.httpClient.get(`${this.configuration.basePath}/configuration/users/custom-fields`,{responseType:Y,withCredentials:this.configuration.withCredentials,headers:Q,observe:A,reportProgress:B})}registerNewUser(A,B="body",q=!1,Q){const ne=A.registerUserInput;let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));const ie=this.configuration.selectHeaderContentType(["application/json"]);void 0!==ie&&(Y=Y.set("Content-Type",ie));let Ce="json";return W&&W.startsWith("text")&&(Ce="text"),this.httpClient.post(`${this.configuration.basePath}/users/registration`,ne,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}resetUserPassword(A,B="body",q=!1,Q){const ne=A.resetUserPasswordInput;let Y=this.defaultHeaders;(this.configuration.username||this.configuration.password)&&(Y=Y.set("Authorization","Basic "+btoa(this.configuration.username+":"+this.configuration.password)));let W=Q&&Q.httpHeaderAccept;void 0===W&&(W=this.configuration.selectHeaderAccept(["application/json"])),void 0!==W&&(Y=Y.set("Accept",W));const ie=this.configuration.selectHeaderContentType(["application/json"]);void 0!==ie&&(Y=Y.set("Content-Type",ie));let Ce="json";return W&&W.startsWith("text")&&(Ce="text"),this.httpClient.post(`${this.configuration.basePath}/users/_reset_password`,ne,{responseType:Ce,withCredentials:this.configuration.withCredentials,headers:Y,observe:B,reportProgress:q})}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(f.eN),E.LFG(m,8),E.LFG(b,8))},re.\u0275prov=E.Yz7({token:re,factory:re.\u0275fac,providedIn:"root"}),re})();const ze={SECONDS:"SECONDS",MINUTES:"MINUTES",HOURS:"HOURS"},Be={STATUS:"STATUS",RESPONSETIME:"RESPONSE_TIME"},Ve={SHARED:"SHARED",EXCLUSIVE:"EXCLUSIVE",UNSPECIFIED:"UNSPECIFIED"},Re={ALL:"ALL",FEATURED:"FEATURED",MINE:"MINE",STARRED:"STARRED",TRENDINGS:"TRENDINGS"},at={CONNECT:"CONNECT",DELETE:"DELETE",GET:"GET",HEAD:"HEAD",OPTIONS:"OPTIONS",PATCH:"PATCH",POST:"POST",PUT:"PUT",TRACE:"TRACE",OTHER:"OTHER"};var Ye=(()=>((Ye||(Ye={})).ResourceTypeEnum={External:"external",Page:"page",Category:"category"},Ye))(),M=(()=>((M||(M={})).TypeEnum={ASCIIDOC:"ASCIIDOC",ASYNCAPI:"ASYNCAPI",SWAGGER:"SWAGGER",MARKDOWN:"MARKDOWN",FOLDER:"FOLDER",ROOT:"ROOT",LINK:"LINK"},M))(),P=(()=>{return(re=P||(P={})).DocExpansionEnum={List:"list",Full:"full",None:"none"},re.ViewerEnum={Swagger:"Swagger",Redoc:"Redoc"},P;var re})(),J=(()=>{return(re=J||(J={})).SecurityEnum={APIKEY:"API_KEY",KEYLESS:"KEY_LESS",JWT:"JWT",OAUTH2:"OAUTH2"},re.ValidationEnum={AUTO:"AUTO",MANUAL:"MANUAL"},J;var re})();const xe={STRING:"STRING",NUMERIC:"NUMERIC",BOOLEAN:"BOOLEAN",DATE:"DATE",MAIL:"MAIL",URL:"URL"};var Pe=(()=>((Pe||(Pe={})).StatusEnum={PENDING:"PENDING",ACCEPTED:"ACCEPTED",CLOSED:"CLOSED",REJECTED:"REJECTED",PAUSED:"PAUSED"},Pe))();let z=(()=>{class re{constructor(A,B){if(A)throw new Error("ApiModule is already loaded. Import in your base AppModule only.");if(!B)throw new Error("You need to import the HttpClientModule in your AppModule! \nSee also https://github.com/angular/angular/issues/20575")}static forRoot(A){return{ngModule:re,providers:[{provide:b,useFactory:A}]}}}return re.\u0275fac=function(A){return new(A||re)(E.LFG(re,12),E.LFG(f.eN,8))},re.\u0275mod=E.oAB({type:re}),re.\u0275inj=E.cJS({providers:[],imports:[[]]}),re})()},85799:(Ue,Ae,d)=>{"use strict";d.d(Ae,{F:()=>Ye});var f=d(91028),n=d(48498),y=(d(59042),d(19007),d(79313)),b=d(98539);window.customElements.define("gv-tree",class k extends f.oi{static get properties(){return{items:{type:Array},closed:{type:Boolean,reflect:!0},selectedItem:{type:Object}}}static get styles(){return[f.iv`
        :host {
          --c: var(--gv-tree--c, var(--gv-theme-font-color-dark, #262626));
          --bgc: var(--gv-tree--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          --active-bdc: var(--gv-tree-active--bdc, var(--gv-theme-color, #5a7684));
          --active-bgc: var(--gv-tree-active--bgc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          --gv-icon--s: var(--gv-tree-icon--s, 20px);
          --gv-icon--c: var(--c);
          background-color: var(--bgc);
          color: var(--c);
          display: flex;
          flex-direction: row;
          height: 100%;
        }

        .tree {
          padding-top: 10px;
          transition: all 350ms ease-in-out;
          width: 300px;
        }

        .tree.closed {
          width: 42px;
        }

        .main-tree-menu {
          user-select: none;
          overflow-y: auto;
          overflow-x: hidden;
          height: calc(100% - 20px);
          direction: rtl;
        }

        .main-tree-menu > ul {
          position: relative;
        }

        ul {
          display: block;
          line-height: 2;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        ul li {
          display: block;
          padding: 0.5em 0.5em 0.5em 1em;
        }

        ul li ul {
          margin-bottom: -0.5em;
          margin-top: 0.5em;
        }

        ul li:hover:not(.folder):not(.selected) > label::before {
          border-right-width: 4px;
          border-right-style: solid;
          border-right-color: var(--active-bgc);
          box-sizing: border-box;
        }

        ul label {
          cursor: pointer;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          direction: ltr;
        }

        ul label::before {
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          content: '';
          height: 3em;
          left: 0;
          position: absolute;
          right: 0;
        }

        .selected > label::before {
          border-right-width: 4px;
          border-right-style: solid;
          border-right-color: var(--active-bdc);
          box-sizing: border-box;
        }

        .folder > label {
          font-weight: bold;
        }

        .tree-arrow {
          transform: rotate(90deg);
          cursor: pointer;
          opacity: 0.5;
          width: 20px;
          height: 20px;
        }

        .closed .tree-arrow {
          transform: rotate(0deg);
        }

        .closed .tree-menu {
          height: 0;
          transition: height 0.8s;
          display: none;
        }

        .switch {
          cursor: pointer;
          opacity: 0.7;
          position: sticky;
          margin: 0 11px 0 11px;
          display: flex;
          justify-content: flex-end;
        }
      `]}constructor(){super(),this.closed=!1}_onSelect(P,J){J.stopPropagation(),this.selectedItem=P,(0,y.h)(this,"select",P)}_onClick(P,J){J&&J.stopPropagation(),P.expanded=!P.expanded,this.requestUpdate()}_getMenuItemPage(P){return f.dy`<label @click=${this._onSelect.bind(this,P)}> ${P.name} </label>`}_getMenuItemFolder(P){return f.dy` <label @click=${this._onClick.bind(this,P)} class="${(0,b.$)({closed:!P.expanded})}">
        ${P.name}
        <gv-icon class="tree-arrow" shape="code:right-circle"></gv-icon>
      </label>
      <span class="${(0,b.$)({closed:!P.expanded})}"> ${this._getMenu(P.children)} </span>`}_getMenu(P){return P?f.dy`<ul
        class="${(0,b.$)({"tree-menu":!0,closed:this.closed})}"
      >
        ${(0,n.r)(P,J=>this._getMenuItem(J))}
      </ul>`:""}_getMenuItem(P){return f.dy` ${P.children&&P.children.length>0?f.dy`<li class="tree-menu__item folder">${this._getMenuItemFolder(P)}</li>`:f.dy`<li class="tree-menu__item page ${P===this.selectedItem?"selected":""}">
          ${this._getMenuItemPage(P)}
        </li>`}`}_toggleMenu(){this.closed=!this.closed,(0,y.h)(this,"toggle",{closed:this.closed})}render(){return f.dy`
      <div class=${(0,b.$)({tree:!0,closed:this.closed})}>
        <div class="switch">
          <gv-icon shape="${this.closed?"text:menu":"navigation:angle-double-left"}" @click=${this._toggleMenu}></gv-icon>
        </div>
        ${f.dy`<div class="main-tree-menu">${this._getMenu(this.items)}</div>`}
      </div>
    `}});var j=d(37340),L=d(59680);class O{constructor(P,J,xe){this.name=P,this.value=J,this.children=xe,this.expanded=!1}}var H=d(10550),R=d(55062),V=d(97963),Z=d(22465),de=d(36895),Oe=d(5562),Ne=d(58490);const it=["treeMenu"];function ze(M,P){1&M&&(R.TgZ(0,"div",8),R._UZ(1,"gv-icon",9),R.qZA())}const Be=function(M,P,J){return{"gv-documentation__content_swagger":M,show:P,fullscreen:J}};function Ve(M,P){if(1&M&&R._UZ(0,"app-gv-page",10),2&M){const J=R.oxw(2);R.Q6J("page",J.currentPage)("ngClass",R.kEZ(3,Be,J.isSwagger(J.currentPage),J.isLoaded,J.hasTreeClosed))("fragment",J.fragment)}}const Re=function(M){return{show:M}};function at(M,P){if(1&M&&(R.TgZ(0,"div",2),R.YNc(1,ze,2,0,"div",3),R.TgZ(2,"div",4,5),R._UZ(4,"gv-tree",6),R.qZA(),R.YNc(5,Ve,1,7,"app-gv-page",7),R.qZA()),2&M){const J=R.oxw();R.xp6(1),R.Q6J("ngIf",!J.isLoaded),R.xp6(1),R.Q6J("ngClass",R.VKq(5,Re,J.isLoaded)),R.xp6(2),R.Q6J("items",J.menu)("selectedItem",J.currentMenuItem),R.xp6(1),R.Q6J("ngIf",J.currentPage)}}function Tt(M,P){1&M&&(R.TgZ(0,"div",11)(1,"section")(2,"gv-message",12),R._UZ(3,"gv-icon",13),R.TgZ(4,"div",14),R._uU(5),R.ALo(6,"translate"),R.qZA()()()()),2&M&&(R.xp6(5),R.hij(" ",R.lcZ(6,1,"gv-documentation.empty")," "))}let Ye=(()=>{class M{constructor(J,xe,Pe){this.notificationService=J,this.route=xe,this.router=Pe,this.isLoaded=!1,this.hasTreeClosed=!1}set pages(J){if(clearTimeout(this.loadingTimer),J&&J.length&&this._pages!==J){let xe;this._pages=J;const Pe=this.route.snapshot.queryParams.page,z=this.route.snapshot.queryParams.folder;if(Pe)xe=this.getFirstPage(J,Pe);else if(z){const re=J.filter(Se=>Se.parent===z);xe=this.getFirstPage(re)}else xe=this.getFirstPage(J);xe?(this.onPageChange(xe),this.menu=this.initTree(J,xe.id),this.expandMenu(this.menu)):this.menu=[]}this.loadingTimer=setTimeout(()=>{this.isLoaded=!0},700)}static updateMenuHeight(J){if(J){const xe=Math.max(document.documentElement.clientHeight,window.innerHeight||0);J.style.height=xe-(H.a.getHeaderHeight()+2*M.PAGE_PADDING_TOP_BOTTOM)+"px"}}static updateMenuPosition(J){if(J){const xe=document.scrollingElement.scrollTop;if(document.querySelector(this.PAGE_COMPONENT)){const Pe=document.querySelector(this.PAGE_COMPONENT).getBoundingClientRect().height,re=Math.max(document.documentElement.clientHeight,window.innerHeight||0)-(H.a.getHeaderHeight()+2*M.PAGE_PADDING_TOP_BOTTOM),Se=Math.max(Pe,re)-xe;J.style["max-height"]=0===Se?"100%":`${Se}px`}M.reset(J)}}static reset(J){if(J){const xe=H.a.getHeaderHeight()+M.PAGE_PADDING_TOP_BOTTOM;J.style.bottom=`${M.PAGE_PADDING_TOP_BOTTOM}px`,J.style.top=`${xe}px`,J.style.position="fixed",this.updateMenuHeight(J)}}initTree(J,xe){let Pe=J;return Pe.forEach(z=>{if(z.parent){const re=Pe.find(Se=>Se.id===z.parent);re&&(re.children?re.children.push(z):re.children=[z])}}),Pe=Pe.filter(z=>!z.parent&&z.type.toUpperCase()!==L.T3.TypeEnum.ROOT||z.parent&&z.parent===this.rootDir).sort((z,re)=>z.order-re.order),this.buildMenu(Pe,xe)}buildMenu(J,xe){const Pe=[];return J.forEach(z=>{let Se;Se=new O(z.name,z,z.children?this.buildMenu(z.children,xe):[]),Pe.push(Se),xe&&xe===z.id&&(this.currentMenuItem=Se)}),Pe}expandMenu(J,xe,Pe=!0){J.forEach(z=>{z===this.currentMenuItem&&xe?xe.forEach(re=>re.expanded=!0):z.children&&(xe&&!Pe?xe.push(z):xe=[z],this.expandMenu(z.children,xe,!1))})}ngAfterViewInit(){setTimeout(()=>{M.reset(this.treeMenu.nativeElement)},0)}onResize(){this.treeMenu&&window.requestAnimationFrame(()=>{M.updateMenuHeight(this.treeMenu.nativeElement)})}onScroll(){this.treeMenu&&window.requestAnimationFrame(()=>{M.updateMenuPosition(this.treeMenu.nativeElement)})}onPageChange(J){this.router.navigate([],{queryParams:{page:J.id}}).then(()=>{M.reset(this.treeMenu.nativeElement)}),this.currentPage=J,this.currentMenuItem=this.findMenuItem(this.menu,J)}onToggleTree(J){this.hasTreeClosed=J}isAsciiDoc(J){return J&&J.type.toUpperCase()===L.T3.TypeEnum.ASCIIDOC}isAsyncApi(J){return J&&J.type.toUpperCase()===L.T3.TypeEnum.ASYNCAPI}isMarkdown(J){return J&&J.type.toUpperCase()===L.T3.TypeEnum.MARKDOWN}isSwagger(J){return J&&J.type.toUpperCase()===L.T3.TypeEnum.SWAGGER}getFirstPage(J,xe){return J.filter(Pe=>this.isAsciiDoc(Pe)||this.isAsyncApi(Pe)||this.isSwagger(Pe)||this.isMarkdown(Pe)).find(Pe=>!xe||xe===Pe.id)}isEmpty(){return this.isLoaded&&(!this.menu||0===this.menu.length)}onInternalLinkClick(J){if(J){const xe=this._pages.find(Pe=>Pe.id===J);this.onPageChange(xe)}}findMenuItem(J,xe){if(J)for(const Pe of J){if(Pe.value===xe)return Pe;if(Pe.children&&Pe.children.length>0){const z=this.findMenuItem(Pe.children,xe);if(z)return z}}return null}}return M.PAGE_PADDING_TOP_BOTTOM=44,M.PAGE_COMPONENT="app-gv-page",M.\u0275fac=function(J){return new(J||M)(R.Y36(V.g),R.Y36(Z.gz),R.Y36(Z.F0))},M.\u0275cmp=R.Xpm({type:M,selectors:[["app-gv-documentation"]],viewQuery:function(J,xe){if(1&J&&R.Gf(it,5),2&J){let Pe;R.iGM(Pe=R.CRH())&&(xe.treeMenu=Pe.first)}},hostBindings:function(J,xe){1&J&&R.NdJ("resize",function(){return xe.onResize()},!1,R.Jf7)("scroll",function(){return xe.onScroll()},!1,R.Jf7)("gv-tree:select",function(z){return xe.onPageChange(z.detail.value)})("gv-tree:toggle",function(z){return xe.onToggleTree(z.detail.closed)})("gv-button:click",function(z){return xe.onInternalLinkClick(z.srcElement.dataset.pageId)})},inputs:{pages:"pages",rootDir:"rootDir",fragment:"fragment"},decls:2,vars:2,consts:[["class","gv-documentation",4,"ngIf"],["class","page__content",4,"ngIf"],[1,"gv-documentation"],["class","gv-documentation__loading",4,"ngIf"],[1,"gv-documentation__menu",3,"ngClass"],["treeMenu",""],[3,"items","selectedItem"],["withToc","true","class","gv-documentation__content",3,"page","ngClass","fragment",4,"ngIf"],[1,"gv-documentation__loading"],["shape","navigation:waiting"],["withToc","true",1,"gv-documentation__content",3,"page","ngClass","fragment"],[1,"page__content"],[1,"message-empty"],["shape","home:library"],[1,"title"]],template:function(J,xe){1&J&&(R.YNc(0,at,6,7,"div",0),R.YNc(1,Tt,7,3,"div",1)),2&J&&(R.Q6J("ngIf",!xe.isEmpty()),R.xp6(1),R.Q6J("ngIf",xe.isEmpty()))},directives:[de.O5,de.mk,Oe.G],pipes:[Ne.X$],styles:[".gv-documentation[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;padding:42px;background-color:var(--gv-theme-neutral-color);height:100%}.gv-documentation__menu[_ngcontent-%COMP%]{display:none;position:fixed;left:42px;z-index:100;height:75vh;bottom:42px}@media screen and (max-width: 1440px){.gv-documentation[_ngcontent-%COMP%]{padding:42px 5px}.gv-documentation__menu[_ngcontent-%COMP%]{left:5px}}.gv-documentation__menu.show[_ngcontent-%COMP%]{display:block}.gv-documentation__content[_ngcontent-%COMP%]{background-color:var(--gv-theme-neutral-color);flex:1;margin-left:calc(300px + 1rem);transition:margin-left .35s ease-in-out}.gv-documentation__content.fullscreen[_ngcontent-%COMP%]{margin-left:calc(42px + 1rem)}app-gv-page[_ngcontent-%COMP%]{overflow:auto;display:none;opacity:0;transition:opacity 1s ease-in-out}app-gv-page.show[_ngcontent-%COMP%]{display:block;opacity:1}.gv-documentation__loading[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;flex:1;height:100vh}.gv-documentation__loading[_ngcontent-%COMP%]   gv-icon[_ngcontent-%COMP%]{--gv-icon--s: 32px;-webkit-animation:spinner 1.6s linear infinite;animation:spinner 1.6s linear infinite}@-webkit-keyframes spinner{to{transform:rotate(360deg)}}@keyframes spinner{to{transform:rotate(360deg)}}"],data:{animation:[(0,j.X$)("grow",[(0,j.eR)("void <=> *",[]),(0,j.eR)("* <=> *",[(0,j.oB)({height:"{{startHeight}}px",opacity:0}),(0,j.jt)(".5s ease")],{params:{startHeight:0}})])]}}),M})()},43877:(Ue,Ae,d)=>{"use strict";d.d(Ae,{t:()=>H}),d(26967);var n=d(22465),E=d(55062),m=d(19490),y=d(48910),b=d(59680),k=d(19426),j=d(10722),L=d(36895);function O(R,V){if(1&R){const Z=E.EpF();E.TgZ(0,"gv-header",1),E.NdJ("gv-header:subscribe",function(){return E.CHM(Z),E.oxw().onSubscribe()}),E.qZA()}if(2&R){const Z=E.oxw();E.Q6J("item",Z.item)("canSubscribe",Z.canSubscribe())}}let H=(()=>{class R{constructor(Z,de,Oe,Ne,it,ze,Be){this.router=Z,this.activatedRoute=de,this.navRouteService=Oe,this.currentUserService=Ne,this.portalService=it,this.eventService=ze,this.applicationResolver=Be}ngOnInit(){this.loadData(),this.router.events.subscribe(Z=>{Z instanceof n.m2&&this.loadData()}),this.eventService.subscribe(Z=>{Z.type===R.RELOAD_EVENT?this.loadData(!0):Z.type===R.UPDATE_PICTURE?this.item=Object.assign({},this.item,{picture:Z.details.data}):Z.type===R.UPDATE_BACKGROUND?this.item=Object.assign({},this.item,{background:Z.details.data}):Z.type===R.UPDATE_NAME&&(this.item=Object.assign({},this.item,{name:Z.details.data}))})}ngOnDestroy(){this.eventService.unsubscribe()}loadData(Z=!1){if(this.currentRoute=this.navRouteService.findCurrentRoute(this.activatedRoute),this.currentRoute){const de=this.currentRoute.snapshot.params;de.apiId&&this.itemId!==de.apiId?(this.itemId=de.apiId,this._subscribeUrl=`catalog/api/${this.itemId}/subscribe`,this.item=this.currentRoute.snapshot.data.api):de.applicationId&&(Z||de.applicationId!==this.itemId)?(this.itemId=de.applicationId,Z&&(this.currentRoute.snapshot.data.application=this.applicationResolver.resolve(this.currentRoute).toPromise()),this.item=this.currentRoute.snapshot.data.application):de.categoryId&&de.categoryId!==this.itemId&&(this.itemId=de.categoryId,this.item=this.currentRoute.snapshot.data.category)}this.currentUserService.get().subscribe(de=>{this.currentUser=de})}onRefresh(){this.loadData()}canSubscribe(){return this._subscribeUrl&&!this.router.isActive(this._subscribeUrl,!0)}onSubscribe(){this.router.navigate([this._subscribeUrl])}}return R.RELOAD_EVENT=":gv-header-item:reload",R.UPDATE_PICTURE=":gv-header-item:picture",R.UPDATE_BACKGROUND=":gv-header-item:background",R.UPDATE_NAME=":gv-header-item:name",R.\u0275fac=function(Z){return new(Z||R)(E.Y36(n.F0),E.Y36(n.gz),E.Y36(m.Z),E.Y36(y.S),E.Y36(b.EA),E.Y36(k.P),E.Y36(j.s))},R.\u0275cmp=E.Xpm({type:R,selectors:[["app-gv-header-item"]],hostBindings:function(Z,de){1&Z&&E.NdJ("gv-header-item:refresh",function(){return de.onRefresh()},!1,E.evT)},decls:1,vars:1,consts:[["slot","header",3,"item","canSubscribe","gv-header:subscribe",4,"ngIf"],["slot","header",3,"item","canSubscribe","gv-header:subscribe"]],template:function(Z,de){1&Z&&E.YNc(0,O,1,2,"gv-header",0),2&Z&&E.Q6J("ngIf",de.item)},directives:[L.O5],encapsulation:2}),R})()},5562:(Ue,Ae,d)=>{"use strict";d.d(Ae,{G:()=>j});var f=d(49671),n=d(55062),E=d(59680);let m=(()=>{class L{constructor(H){this.viewContainerRef=H}}return L.\u0275fac=function(H){return new(H||L)(n.Y36(n.s_b))},L.\u0275dir=n.lG2({type:L,selectors:[["","gvPageContentSlot",""]]}),L})();var y=d(22465),b=d(49450);function k(L,O){}let j=(()=>{class L{constructor(H,R,V,Z,de){this.componentFactoryResolver=H,this.portalService=R,this.apiService=V,this.route=Z,this.pageService=de,this.loaded=new n.vpe}ngOnChanges(H){H.page&&this._loadViewer()}ngOnDestroy(){this.pageService.disposePage()}_loadViewer(){var H=this;return(0,f.Z)(function*(){if(H.page){let R;if(H.page.type.toUpperCase()===E.T3.TypeEnum.MARKDOWN){const{GvPageMarkdownComponent:V}=yield Promise.all([d.e(6806),d.e(8592),d.e(8731)]).then(d.bind(d,28731));R=H.componentFactoryResolver.resolveComponentFactory(V)}else if(H.page.type.toUpperCase()===E.T3.TypeEnum.SWAGGER){const V=H.page.configuration?H.page.configuration.viewer:"";if(V&&V.toUpperCase()===E.kY.ViewerEnum.Redoc.toUpperCase()){const{GvPageRedocComponent:Z}=yield Promise.all([d.e(9052),d.e(2523)]).then(d.bind(d,12523));R=H.componentFactoryResolver.resolveComponentFactory(Z)}else{const{GvPageSwaggerUIComponent:Z}=yield Promise.all([d.e(9052),d.e(2133)]).then(d.bind(d,92133));R=H.componentFactoryResolver.resolveComponentFactory(Z)}}else if(H.page.type.toUpperCase()===E.T3.TypeEnum.ASCIIDOC){const{GvPageAsciiDocComponent:V}=yield Promise.all([d.e(8592),d.e(7709)]).then(d.bind(d,67709));R=H.componentFactoryResolver.resolveComponentFactory(V)}else if(H.page.type.toUpperCase()===E.T3.TypeEnum.ASYNCAPI){const{GvPageAsyncApiComponent:V}=yield Promise.all([d.e(8592),d.e(4249)]).then(d.bind(d,64249));R=H.componentFactoryResolver.resolveComponentFactory(V)}H.appGvPageContentSlot.viewContainerRef.clear(),R&&H._loadPageWithContent(H.page).then(V=>{H.pageService.disposePage();const Z=H.appGvPageContentSlot.viewContainerRef.createComponent(R);H.pageService.set(V),Z.instance.fragment=H.fragment,Z.instance.withToc=H.withToc,H.loaded.emit(!0)})}})()}_loadPageWithContent(H){const R=this.route.snapshot.params.apiId;return R?this.apiService.getPageByApiIdAndPageId({apiId:R,pageId:H.id,include:["content"]}).toPromise():this.portalService.getPageByPageId({pageId:H.id,include:["content"]}).toPromise()}}return L.\u0275fac=function(H){return new(H||L)(n.Y36(n._Vd),n.Y36(E.EA),n.Y36(E.sM),n.Y36(y.gz),n.Y36(b.P))},L.\u0275cmp=n.Xpm({type:L,selectors:[["app-gv-page"]],viewQuery:function(H,R){if(1&H&&n.Gf(m,7),2&H){let V;n.iGM(V=n.CRH())&&(R.appGvPageContentSlot=V.first)}},inputs:{page:"page",withToc:"withToc",fragment:"fragment"},outputs:{loaded:"loaded"},features:[n.TTD],decls:1,vars:0,consts:[["gvPageContentSlot",""]],template:function(H,R){1&H&&n.YNc(0,k,0,0,"ng-template",0)},directives:[m],styles:["[_nghost-%COMP%]{display:block}"]}),L})()},65073:(Ue,Ae,d)=>{"use strict";d.d(Ae,{I:()=>m});var f=d(55062),n=d(24006);const E={provide:n.JU,useExisting:(0,f.Gpc)(()=>m),multi:!0};let m=(()=>{class y extends n.Wl{constructor(k,j){super(k,j)}}return y.\u0275fac=function(k){return new(k||y)(f.Y36(f.Qsj),f.Y36(f.SBq))},y.\u0275dir=f.lG2({type:y,selectors:[["gv-checkbox","formControlName",""],["gv-checkbox","formControl",""],["gv-checkbox","ngModel",""],["gv-checkbox","gvControl",""]],features:[f._Bn([E]),f.qOj]}),y})()},33281:(Ue,Ae,d)=>{"use strict";d.d(Ae,{T:()=>E});var f=d(24006),n=d(55062);let E=(()=>{class m extends f.JJ{constructor(b,k){super(b),this.elementRef=k,this.control=b}update(b){setTimeout(()=>{"VALID"===b?(this.elementRef.nativeElement.setAttribute("valid",!0),this.elementRef.nativeElement.removeAttribute("invalid")):"INVALID"===b&&(this.elementRef.nativeElement.setAttribute("invalid",!0),this.elementRef.nativeElement.removeAttribute("valid"))},0)}ngAfterViewInit(){this.update(this.control.status),this.control.statusChanges&&this.control.statusChanges.subscribe(b=>{this.update(b)})}}return m.\u0275fac=function(b){return new(b||m)(n.Y36(f.a5),n.Y36(n.SBq))},m.\u0275dir=n.lG2({type:m,selectors:[["gv-input","formControl",""],["gv-input","formControlName",""],["gv-text","formControl",""],["gv-text","formControlName",""],["gv-select","formControl",""],["gv-select","formControlName",""],["gv-date-picker","formControl",""],["gv-date-picker","formControlName",""],["","gvControl",""]],features:[n.qOj]}),m})()},55302:(Ue,Ae,d)=>{"use strict";d.d(Ae,{l:()=>f});var f=(()=>{return(n=f||(f={})).applicationCreation="portal.applicationCreation.enabled",n.contact="portal.support.enabled",n.forceLogin="authentication.forceLogin.enabled",n.googleAnalytics="portal.analytics.enabled",n.localLogin="authentication.localLogin.enabled",n.rating="portal.rating.enabled",n.ratingCommentMandatory="portal.rating.comment.mandatory",n.userRegistration="portal.userCreation.enabled",n.categoryMode="portal.apis.categoryMode.enabled",n.promotedApiMode="portal.apis.promotedApiMode.enabled",n.alert="alert.enabled",n.sharedApiKey="plan.security.sharedApiKey.enabled",f;var n})()},11704:(Ue,Ae,d)=>{"use strict";d.d(Ae,{m:()=>f});var f=(()=>{return(n=f||(f={})).API="api",n.APPLICATION="application",f;var n})()},69628:(Ue,Ae,d)=>{"use strict";d.d(Ae,{u:()=>f});var f=(()=>{return(n=f||(f={})).GUEST="guest",n.AUTH_USER="auth-user",f;var n})()},35786:(Ue,Ae,d)=>{"use strict";d.d(Ae,{y:()=>n});var f=d(55062);let n=(()=>{class E{transform(y){return y.labels}}return E.\u0275fac=function(y){return new(y||E)},E.\u0275pipe=f.Yjl({name:"apiLabels",type:E,pure:!0}),E})()},92095:(Ue,Ae,d)=>{"use strict";d.d(Ae,{t:()=>n});var f=d(55062);let n=(()=>{class E{transform(y){const b=[];return y.draft&&b.push({value:"draft"}),y.running&&b.push({value:"running",major:!0}),b}}return E.\u0275fac=function(y){return new(y||E)},E.\u0275pipe=f.Yjl({name:"apiStates",type:E,pure:!0}),E})()},8809:(Ue,Ae,d)=>{"use strict";d.d(Ae,{g:()=>n});var f=d(55062);let n=(()=>{class E{transform(y,b="shortDate",k=null){return null==y&&null!=k?k:"longDate"===b?new Date(y).toLocaleString():"time"===b?new Date(y).toLocaleTimeString():new Date(y).toLocaleDateString()}}return E.\u0275fac=function(y){return new(y||E)},E.\u0275pipe=f.Yjl({name:"localizedDate",type:E,pure:!0}),E})()},10722:(Ue,Ae,d)=>{"use strict";d.d(Ae,{s:()=>m});var f=d(22465),n=d(55062),E=d(59680);let m=(()=>{class y{constructor(k){this.applicationService=k}resolve(k){return this.applicationService.getApplicationByApplicationId({applicationId:k instanceof f.De?k.params.applicationId:k.snapshot.params.applicationId})}}return y.\u0275fac=function(k){return new(k||y)(n.LFG(E.IX))},y.\u0275prov=n.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},3009:(Ue,Ae,d)=>{"use strict";d.d(Ae,{T:()=>b});var f=d(55302),n=d(55062),E=d(59680),m=d(48910),y=d(74937);let b=(()=>{class k{constructor(L,O,H){this.permissionsService=L,this.currentUserService=O,this.configurationService=H}resolve(L){if(this.currentUserService.exist()){const O=L.params;if(O.applicationId)return this.permissionsService.getCurrentUserPermissions({applicationId:O.applicationId}).toPromise().catch(()=>({}));if(O.apiId&&this.configurationService.hasFeature(f.l.rating))return this.permissionsService.getCurrentUserPermissions({apiId:O.apiId}).toPromise().catch(()=>({}))}return Promise.resolve({})}}return k.\u0275fac=function(L){return new(L||k)(n.LFG(E.qQ),n.LFG(m.S),n.LFG(y.e))},k.\u0275prov=n.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})()},65260:(Ue,Ae,d)=>{"use strict";d.d(Ae,{y:()=>b});var f=d(97520),n=d(42193),E=d(55062),m=d(58490),y=d(22465);let b=(()=>{class k{constructor(L,O){this.translateService=L,this.route=O,this.removableQueryParams=["from","to","log","timestamp",...Object.values(n.O)],this.queryParams=["dashboard","timeframe",...Object.values(this.removableQueryParams)],this.advancedQueryParams=["_id","transaction","method","uri","response-time","status","api","body"],this.fragment="h",this.methods=[{value:"3",label:"GET"},{value:"7",label:"POST"},{value:"8",label:"PUT"},{value:"2",label:"DELETE"},{value:"6",label:"PATCH"},{value:"5",label:"OPTIONS"},{value:"4",label:"HEAD"},{value:"9",label:"TRACE"},{value:"1",label:"CONNECT"},{value:"0",label:"OTHER"}],this.responseTimes=[{value:"[0 TO 100]",label:"0 to 100ms"},{value:"[100 TO 200]",label:"100 to 200ms"},{value:"[200 TO 300]",label:"200 to 300ms"},{value:"[300 TO 400]",label:"300 to 400ms"},{value:"[400 TO 500]",label:"400 to 500ms"},{value:"[500 TO 1000]",label:"500 to 1000ms"},{value:"[1000 TO 2000]",label:"1000 to 2000ms"},{value:"[2000 TO 5000]",label:"2000 to 5000ms"},{value:"[5000 TO *]",label:"> 5000ms"}],this.httpStatus=[{value:"100",label:"100 - CONTINUE"},{value:"101",label:"101 - SWITCHING PROTOCOLS"},{value:"102",label:"102 - PROCESSING"},{value:"200",label:"200 - OK"},{value:"201",label:"201 - CREATED"},{value:"202",label:"202 - ACCEPTED"},{value:"203",label:"203 - NON AUTHORITATIVE INFORMATION"},{value:"204",label:"204 - NO CONTENT"},{value:"205",label:"205 - RESET CONTENT"},{value:"206",label:"206 - PARTIAL CONTENT"},{value:"207",label:"207 - MULTI STATUS"},{value:"300",label:"300 - MULTIPLE CHOICES"},{value:"301",label:"301 - MOVED PERMANENTLY"},{value:"302",label:"302 - FOUND"},{value:"303",label:"303 - SEE OTHER"},{value:"304",label:"304 - NOT MODIFIED"},{value:"305",label:"305 - USE PROXY"},{value:"307",label:"307 - TEMPORARY REDIRECT"},{value:"400",label:"400 - BAD REQUEST"},{value:"401",label:"401 - UNAUTHORIZED"},{value:"402",label:"402 - PAYMENT REQUIRED"},{value:"403",label:"403 - FORBIDDEN"},{value:"404",label:"404 - NOT FOUND"},{value:"405",label:"405 - METHOD NOT ALLOWED"},{value:"406",label:"406 - NOT ACCEPTABLE"},{value:"407",label:"407 - PROXY AUTHENTICATION REQUIRED"},{value:"408",label:"408 - REQUEST TIMEOUT"},{value:"409",label:"409 - CONFLICT"},{value:"410",label:"410 - GONE"},{value:"411",label:"411 - LENGTH REQUIRED"},{value:"412",label:"412 - PRECONDITION FAILED"},{value:"413",label:"413 - REQUEST ENTITY TOO LARGE"},{value:"414",label:"414 - REQUEST URI TOO LONG"},{value:"415",label:"415 - UNSUPPORTED MEDIA TYPE"},{value:"416",label:"416 - REQUESTED RANGE NOT SATISFIABLE"},{value:"417",label:"417 - EXPECTATION FAILED"},{value:"422",label:"422 - UNPROCESSABLE ENTITY"},{value:"423",label:"423 - LOCKED"},{value:"424",label:"424 - FAILED DEPENDENCY"},{value:"429",label:"429 - TOO MANY REQUESTS"},{value:"500",label:"500 - INTERNAL SERVER ERROR"},{value:"501",label:"501 - NOT IMPLEMENTED"},{value:"502",label:"502 - BAD GATEWAY"},{value:"503",label:"503 - SERVICE UNAVAILABLE"},{value:"504",label:"504 - GATEWAY TIMEOUT"},{value:"505",label:"505 - HTTP VERSION NOT SUPPORTED"},{value:"507",label:"507 - INSUFFICIENT STORAGE"}],L.get([(0,f.J)("analytics.timeframes.minutes"),(0,f.J)("analytics.timeframes.hour"),(0,f.J)("analytics.timeframes.hours"),(0,f.J)("analytics.timeframes.day"),(0,f.J)("analytics.timeframes.days")]).toPromise().then(H=>{const R=Object.values(H),V=R[0],de=R[2],Ne=R[4];this.timeframes=[{id:"5m",title:"5",description:V,range:3e5,interval:1e4},{id:"30m",title:"30",description:V,range:18e5,interval:15e3},{id:"1h",title:"1",description:R[1],range:36e5,interval:3e4},{id:"3h",title:"3",description:de,range:108e5,interval:6e4},{id:"6h",title:"6",description:de,range:216e5,interval:12e4},{id:"12h",title:"12",description:de,range:432e5,interval:3e5},{id:"1d",title:"1",description:R[3],range:864e5,interval:6e5},{id:"3d",title:"3",description:Ne,range:2592e5,interval:18e5},{id:"7d",title:"7",description:Ne,range:6048e5,interval:36e5},{id:"14d",title:"14",description:Ne,range:12096e5,interval:108e5},{id:"30d",title:"30",description:Ne,range:2592e6,interval:216e5},{id:"90d",title:"90",description:Ne,range:7776e6,interval:432e5}]})}static buildQueryParam(L,O){return"body"===O?L=`*${this.escapeReservedCharacters(L)}*`:"uri"===O?L=`${this.escapeReservedCharacters(L)}*`:"?"!==L&&(L=(L='\\"'+L+'\\"').replace(/\//g,"\\\\/")),L}static escapeReservedCharacters(L){return L.replace(/(\+|-|=|&{2}|\|{2}|>|<|!|\(|\)|{|}|\[|]|\^|"|~|\?|:|\\|\/)/g,"\\\\$1")}getQueryFromPath(L,O){const H=Object.keys(this.route.snapshot.queryParams).filter(R=>!this.queryParams.includes(R)).filter(R=>this.route.snapshot.queryParams[R].length).filter(R=>O&&O.length||!L||R!==L).map(R=>{const V=this.route.snapshot.queryParams[R];return"string"==typeof V?R+":"+k.buildQueryParam(V,R):"("+R+":"+V.map(Z=>k.buildQueryParam(Z,R)).join(" OR ")+")"});return H&&H.length?{query:H.join(" AND ")}:{}}getTimeSlotFromQueryParams(){const L=this.route.snapshot.queryParams.timeframe;let R,O=parseInt(this.route.snapshot.queryParams.from,10),H=parseInt(this.route.snapshot.queryParams.to,10);const V=Date.now();if(O&&H){const Z=H-O;let de;this.timeframes.forEach(Oe=>{Oe.range<Z&&(de=Oe)}),de||(de=this.timeframes[0]),R=de.interval}else{let Z=this.timeframes.find(de=>de.id===L);Z||(Z=this.timeframes.find(de=>"1d"===de.id)),O=V-Z.range,H=V,R=Z.interval}return{from:O,to:H,interval:R}}getRemovableQueryParams(){return this.removableQueryParams.reduce((L,O)=>(L[O]=null,L),{})}getDefaultStatsOptions(){return this.translateService.get(["dashboard.stats.min","dashboard.stats.max","dashboard.stats.avg","dashboard.stats.rps","dashboard.stats.rpm","dashboard.stats.rph","dashboard.stats.total","dashboard.stats.ms"]).toPromise().then(L=>{const O=Object.values(L);return[{key:"min",label:O[0],unit:O[7],color:"#66bb6a"},{key:"max",label:O[1],unit:O[7],color:"#ef5350"},{key:"avg",label:O[2],unit:O[7],color:"#42a5f5"},{key:"rps",label:O[3],color:"#ff8f2d",fallback:[{key:"rpm",label:O[4]},{key:"rph",label:O[5]}]},{key:"count",label:O[6]}]})}}return k.\u0275fac=function(L){return new(L||k)(E.LFG(m.sK),E.LFG(y.gz))},k.\u0275prov=E.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})()},78968:(Ue,Ae,d)=>{"use strict";d.d(Ae,{P:()=>b});var f=d(69628),n=d(55062),E=d(48910),m=d(22465),y=d(51214);let b=(()=>{class k{constructor(L,O,H){this.currentUserService=L,this.router=O,this.oauthService=H}canActivate(L){if(L&&L.data){const O=L.data.expectedRole;return O?new Promise(H=>{const R=this.currentUserService.get().getValue();H(!(O===f.u.AUTH_USER&&null==R||O===f.u.GUEST&&R)||this.router.parseUrl(decodeURIComponent(this.oauthService.state??"/")))}):Promise.resolve(!0)}return Promise.resolve(!0)}}return k.\u0275fac=function(L){return new(L||k)(n.LFG(E.S),n.LFG(m.F0),n.LFG(y.Ct))},k.\u0275prov=n.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"}),k})()},74937:(Ue,Ae,d)=>{"use strict";d.d(Ae,{e:()=>m});var f=d(93369),n=d(55062),E=d(80529);let m=(()=>{class y{constructor(k){this.http=k}get(k,j){return k.split(".").reduce((O,H)=>O&&O[H],this.config)??j}load(){return new Promise(k=>{this.http.get("./assets/config.json").subscribe(j=>{document.documentElement.style.setProperty("--gv-theme-loader",`url('${j.loaderURL}')`),j.baseURL.endsWith("/")&&(j.baseURL=j.baseURL.slice(0,-1)),this.http.get(j.baseURL+"/theme").toPromise().then(L=>{(0,f._v)(L)}),this.http.get(j.baseURL+"/configuration").subscribe(L=>{this.config=this._deepMerge(j,L),k(!0)},()=>k(!1))})})}hasFeature(k){return this.get(k)}_deepMerge(k,j){for(const L of Object.keys(j))j[L]instanceof Object&&L in k&&Object.assign(j[L],this._deepMerge(k[L],j[L]));return Object.assign(k||{},j),k}}return y.\u0275fac=function(k){return new(k||y)(n.LFG(E.eN))},y.\u0275prov=n.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},48910:(Ue,Ae,d)=>{"use strict";d.d(Ae,{S:()=>y});var f=d(591),n=d(55062),E=d(80529),m=d(74937);let y=(()=>{class b{constructor(j,L){this.http=j,this.configurationService=L,this.currentUserSource=new f.X(null)}revokeUser(){this.currentUserSource.next(null)}get(){return this.currentUserSource}set(j){this.currentUserSource.next(j)}load(){const j=this.configurationService.get("baseURL");return new Promise(L=>{this.http.get(j+"/user").toPromise().then(O=>{this.currentUserSource.next(O)}).catch(()=>this.currentUserSource.next(null)).finally(()=>L(!0))})}getUser(){return this.currentUserSource.getValue()}exist(){return null!=this.getUser()}}return b.\u0275fac=function(j){return new(j||b)(n.LFG(E.eN),n.LFG(m.e))},b.\u0275prov=n.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})()},19426:(Ue,Ae,d)=>{"use strict";d.d(Ae,{P:()=>E,u:()=>m});var f=d(591),n=d(55062);let E=(()=>{class y{constructor(){this.eventSource=new f.X(new m(void 0)),this.events=this.eventSource.asObservable()}dispatch(k){this.eventSource.next(k)}subscribe(k,j,L){return this.events.subscribe(k,j,L)}unsubscribe(){this.eventSource.complete()}}return y.\u0275fac=function(k){return new(k||y)},y.\u0275prov=n.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();class m{constructor(b,k={}){this.type=b,this.details=k}}},32979:(Ue,Ae,d)=>{"use strict";d.d(Ae,{j:()=>m});var f=d(55062),n=d(74937),E=d(22465);let m=(()=>{class y{constructor(k,j){this.config=k,this.router=j}canActivate(k){return!(k.data&&k.data.expectedFeature&&!this.config.hasFeature(k.data.expectedFeature))||this.router.parseUrl(k.data.fallbackRedirectTo)}}return y.\u0275fac=function(k){return new(k||y)(f.LFG(n.e),f.LFG(E.F0))},y.\u0275prov=f.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},19490:(Ue,Ae,d)=>{"use strict";d.d(Ae,{Z:()=>L});var f=d(49671),n=d(22465),E=d(55062),m=d(58490),y=d(32979),b=d(48910),k=d(78968),j=d(37432);let L=(()=>{class O{constructor(R,V,Z,de,Oe,Ne){this.router=R,this.translateService=V,this.featureGuardService=Z,this.currentUserService=de,this.authGuardService=Oe,this.permissionGuardService=Ne}getUserNav(){var R=this;return(0,f.Z)(function*(){const V="user",Z=R.getRouteByPath(V),de=R.getManagementNav(),Oe=R.getChildrenNav(Z,V,[]);return Promise.all([de,Oe]).then(Ne=>{const it=Ne[1];if(it.length>1&&Ne[0]){const ze=it.pop();it.push(Ne[0]),it.push(ze)}return it})})()}getManagementNav(){var R=this;return(0,f.Z)(function*(){const V=R.currentUserService.getUser();if(V&&V.config&&V.config.management_url)return R.translateService.get("route.management").toPromise().then(Z=>({path:V.config.management_url,icon:"code:settings",title:Z,target:"_blank"}))})()}getChildrenNav(R,V,Z){var de=this;return(0,f.Z)(function*(){const Oe=R instanceof n.gz?R.snapshot:R,Ne=Oe.data;if(Ne&&Ne.menu){const it="object"==typeof Ne.menu?Ne.menu:{hiddenPaths:[]},ze=Z||it.hiddenPaths||[],Be=V||(Oe.pathFromRoot||[]).filter(Re=>Re.routeConfig).map(Re=>Re.routeConfig.path).join("/");let Ve=Oe.routeConfig?Oe.routeConfig.children:Oe.children;return Oe.routeConfig&&Oe.routeConfig.loadChildren&&(Ve=Oe.routeConfig._loadedConfig.routes),Promise.all(Ve.filter(Re=>null!=Re.data&&Re.data.title).filter(de.isVisiblePath(ze)).map(Re=>{const at=Object.assign({},Re);return at.data={...Ne,...Re.data},at}).filter(Re=>!0===de.featureGuardService.canActivate(Re)).filter(Re=>!0===de.permissionGuardService.canActivate(Re)).map(function(){var Re=(0,f.Z)(function*(at){if(!0===(yield de.authGuardService.canActivate(at))){let Ye=`${Be}/${at.path}`;Ye.endsWith("/")&&(Ye=Ye.substring(0,Ye.length-1));const M=de.router.isActive(Ye,!1)||de.isActive(Ye,de.router.url);return de.translateService.get(at.data.title).toPromise().then(P=>({path:Ye,icon:at.data.icon,title:P,active:M,separator:at.data.separator}))}return null});return function(at){return Re.apply(this,arguments)}}())).then(Re=>Re.filter(at=>null!=at))}return null})()}isActive(R,V){const Z="^"+R.replace(/\/:([^/])+/,"/([^/])+")+"$";return new RegExp(Z).test(V.substring(1).split("?")[0].split("#")[0])}isVisiblePath(R){return V=>!R.includes(V.path)}getSiblingsNav(R){var V=this;return(0,f.Z)(function*(){const Z=R.snapshot.data;if(Z.menu&&!Z.menu.hide){const de=R.snapshot.params,Oe=V.getChildrenNav(R.parent);return de?Oe.then(Ne=>{if(Ne)return Ne.map(it=>{for(const ze of Object.keys(de))it.active=V.isActive(it.path,V.router.url),it.path=it.path.replace(`:${ze}`,de[ze]);return it})}):Oe}return null})()}findCurrentRoute(R){let V=R.firstChild,Z=V;for(;Z;)Z.firstChild?(Z=Z.firstChild,V=Z):Z=null;return V}getRouteByPath(R){return this._getRouteByPath(this.router.config,R)}_getRouteByPath(R,V){return R?R.find(de=>de.path===V)??R.map(de=>this._getRouteByPath(de.children,V)).find(de=>de&&de.path===V):null}navigateForceRefresh(R,V){this.router.navigate([],{...V,queryParams:{skipRefresh:!0},skipLocationChange:!0}).then(()=>{V&&V.queryParams&&(V.queryParams.skipRefresh=null),this.router.navigate(R,V)})}}return O.\u0275fac=function(R){return new(R||O)(E.LFG(n.F0),E.LFG(m.sK),E.LFG(y.j),E.LFG(b.S),E.LFG(k.P),E.LFG(j.n))},O.\u0275prov=E.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"}),O})()},97963:(Ue,Ae,d)=>{"use strict";d.d(Ae,{g:()=>m});var f=d(591);class n{}var E=d(55062);let m=(()=>{class y{constructor(){this.notificationSource=new f.X(void 0),this.notification=this.notificationSource.asObservable()}success(k,j,L,O){this.notify("success",k,j,L,O)}error(k,j,L,O){this.notify("error",k,j,L,O)}info(k,j,L,O){this.notify("info",k,j,L,O)}warning(k,j,L,O){this.notify("warning",k,j,L,O)}notify(k,j,L,O,H){const R=new n;R.type=k,R.code=j,R.parameters=L,R.message=O,R.closable=void 0===H||H,this.notificationSource.next(R)}reset(){this.notificationSource.next(void 0)}}return y.\u0275fac=function(k){return new(k||y)},y.\u0275prov=E.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},49450:(Ue,Ae,d)=>{"use strict";d.d(Ae,{P:()=>E});var f=d(591),n=d(55062);let E=(()=>{class m{constructor(){this.currentPageSource=new f.X(null)}disposePage(){this.currentPageSource.next(null)}get(){return this.currentPageSource}set(b){this.currentPageSource.next(b)}getCurrentPage(){return this.currentPageSource.getValue()}}return m.\u0275fac=function(b){return new(b||m)},m.\u0275prov=n.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},37432:(Ue,Ae,d)=>{"use strict";d.d(Ae,{n:()=>m});var f=d(55062),n=d(22465),E=d(48910);let m=(()=>{class y{constructor(k,j){this.router=k,this.currentUserService=j}canActivate(k){let j=!0;const H={...k.data.permissions||{},...this.currentUserService.get().getValue()&&this.currentUserService.get().getValue().permissions||{}};if(H&&k.data&&k.data.expectedPermissions){const V={};k.data.expectedPermissions.map(Z=>{const de=Z.split("-");V[de[0]]?V[de[0]].push(de[1]):V[de[0]]=[de[1]]}),Object.keys(V).forEach(Z=>{const de=H[Z];(!de||de&&!this.includesAll(de,V[Z]))&&(j=this.router.parseUrl("/"))})}return j}includesAll(k,j){let L=!0;return j.forEach(O=>{k.includes(O)||(L=!1)}),L}}return y.\u0275fac=function(k){return new(k||y)(f.LFG(n.F0),f.LFG(E.S))},y.\u0275prov=f.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},10550:(Ue,Ae,d)=>{"use strict";d.d(Ae,{a:()=>n});var f=d(55062);let n=(()=>{class E{static pxToInt(y){const b=parseInt(y.replace("px",""),10);return isNaN(b)?0:b}static getHeaderHeight(){const y=document.querySelector(".layout__header__homepage__background"),b=document.querySelector("header"),k=y?this.pxToInt(window.getComputedStyle(y).height)-window.scrollY:0,j=b?this.pxToInt(window.getComputedStyle(b).height):0;return Math.max(k,j)}static getAnchorElement(y){return y.startsWith("#")?document.querySelector(y)||document.querySelector(`a[name=${y.substr(1)}]`):document.getElementById(y)}scrollToAnchor(y){return new Promise((b,k)=>{setTimeout(()=>{const j=E.getAnchorElement(y);j?(this.scrollToStickyMenu(),setTimeout(()=>{const{top:L,left:O}=j.getBoundingClientRect(),H=L-E.getHeaderHeight();let R=500,V="smooth";Math.abs(H)>5e3&&(R=250,V="auto"),window.scrollBy({top:H,left:O,behavior:V}),setTimeout(()=>{b()},R)},50)):k()},0)})}scrollToStickyMenu(){window.pageYOffset<100&&window.scrollBy({top:100,left:0})}}return E.\u0275fac=function(y){return new(y||E)},E.\u0275prov=f.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()},44466:(Ue,Ae,d)=>{"use strict";d.d(Ae,{m:()=>R});var f=d(80529),n=d(36895),E=d(24006),m=d(58490),y=d(19832),b=d(51214),k=d(27801),j=d(8809),L=d(92095),O=d(35786),H=d(55062);let R=(()=>{class V{}return V.\u0275fac=function(de){return new(de||V)},V.\u0275mod=H.oAB({type:V}),V.\u0275inj=H.cJS({providers:[O.y,L.t,j.g],imports:[[n.ez,f.JF,E.UX,b.zr.forRoot(),m.aw.forChild({loader:{provide:m.Zw,useFactory:Z=>new y.w(Z,"./assets/i18n/"),deps:[f.eN]},compiler:{provide:m.k2,useClass:k.Fq}})],f.JF,E.UX,b.zr]}),V})()},58521:(Ue,Ae,d)=>{"use strict";function f(E){return Array.isArray(E)?0===E.filter(m=>null!=m).length:null==E||""===E.trim()}d.d(Ae,{d:()=>n});let n=(()=>{class E{static oneRequired(y){return b=>f(b.value)&&f(y.value)?{oneRequired:{value:b.value}}:null}static sameValueValidator(y){return b=>y.valid&&y.value!==b.value?{passwordError:{value:b.value}}:null}}return E.dateRange=m=>{let y=null;if(m.value)if(2!==m.value.length)y={dateRangeError:{value:m.value}};else{const b=m.value[0],k=m.value[1];(b&&!k||!b&&k||b&&k&&b===k)&&(y={dateRangeError:{value:m.value}})}return y},E})()},42193:(Ue,Ae,d)=>{"use strict";d.d(Ae,{M:()=>n,O:()=>f});var f=(()=>{return(E=f||(f={})).PAGE="page",E.SIZE="size",E.QUERY="q",E.FIELD="field",E.ORDER="order",E.CATEGORY="c",E.APPLICATION="app",E.API_QUERY="aq",f;var E})();class n{constructor(m,y,b){this.q=m,this.page=b,this.size=y}}},49860:(Ue,Ae,d)=>{"use strict";function f(E){const m=[];return{list:new Array(E).fill(null).map(()=>new Promise((b,k)=>m.push({resolve:b,reject:k}))),deferredList:m}}function n(E,...m){return`curl${m.reduce((b,k)=>b+`--header "${k.name}: ${k.value}" \\\n     `," ")}${E}`}d.d(Ae,{B:()=>n,o:()=>f})},81092:(Ue,Ae,d)=>{"use strict";var f=d(11481),n=d(55062),E=d(91028);window.customElements.define("gv-spinner",class m extends E.oi{static get styles(){return[E.iv`
        :host {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
        }

        .spinner {
          display: flex;
          margin: 0 auto;
          position: relative;
          height: 100%;
          width: 100%;
          background-image: var(--gv-theme-loader, url('images/gravitee-loader.gif'));
          background-size: 200px;
          background-repeat: no-repeat;
          background-position: center center;
        }
      `]}render(){return E.dy`<div class="spinner"></div>`}});var y=d(37340);const b=!1;function j(l){return new n.vHH(3e3,b)}function N(){return typeof window<"u"&&typeof window.document<"u"}function le(){return typeof process<"u"&&"[object process]"==={}.toString.call(process)}function ce(l){switch(l.length){case 0:return new y.ZN;case 1:return l[0];default:return new y.ZE(l)}}function je(l,c,s,u,v={},w={}){const U=[],fe=[];let De=-1,et=null;if(u.forEach(wt=>{const Gt=wt.offset,fn=Gt==De,kn=fn&&et||{};Object.keys(wt).forEach(Sn=>{let jn=Sn,vi=wt[Sn];if("offset"!==Sn)switch(jn=c.normalizePropertyName(jn,U),vi){case y.k1:vi=v[Sn];break;case y.l3:vi=w[Sn];break;default:vi=c.normalizeStyleValue(Sn,jn,vi,U)}kn[jn]=vi}),fn||fe.push(kn),et=kn,De=Gt}),U.length)throw function re(l){return new n.vHH(3502,b)}();return fe}function Ge(l,c,s,u){switch(c){case"start":l.onStart(()=>u(s&&tt(s,"start",l)));break;case"done":l.onDone(()=>u(s&&tt(s,"done",l)));break;case"destroy":l.onDestroy(()=>u(s&&tt(s,"destroy",l)))}}function tt(l,c,s){const w=Te(l.element,l.triggerName,l.fromState,l.toState,c||l.phaseName,s.totalTime??l.totalTime,!!s.disabled),U=l._data;return null!=U&&(w._data=U),w}function Te(l,c,s,u,v="",w=0,U){return{element:l,triggerName:c,fromState:s,toState:u,phaseName:v,totalTime:w,disabled:!!U}}function ae(l,c,s){let u;return l instanceof Map?(u=l.get(c),u||l.set(c,u=s)):(u=l[c],u||(u=l[c]=s)),u}function ee(l){const c=l.indexOf(":");return[l.substring(1,c),l.substr(c+1)]}let ke=(l,c)=>!1,me=(l,c,s)=>[],Fe=null;function ut(l){const c=l.parentNode||l.host;return c===Fe?null:c}(le()||typeof Element<"u")&&(N()?(Fe=(()=>document.documentElement)(),ke=(l,c)=>{for(;c;){if(c===l)return!0;c=ut(c)}return!1}):ke=(l,c)=>l.contains(c),me=(l,c,s)=>{if(s)return Array.from(l.querySelectorAll(c));const u=l.querySelector(c);return u?[u]:[]});let mt=null,rt=!1;function we(l){mt||(mt=function be(){return typeof document<"u"?document.body:null}()||{},rt=!!mt.style&&"WebkitAppearance"in mt.style);let c=!0;return mt.style&&!function gt(l){return"ebkit"==l.substring(1,6)}(l)&&(c=l in mt.style,!c&&rt&&(c="Webkit"+l.charAt(0).toUpperCase()+l.substr(1)in mt.style)),c}const ye=ke,Me=me;let st=(()=>{class l{validateStyleProperty(s){return we(s)}matchesElement(s,u){return!1}containsElement(s,u){return ye(s,u)}getParentElement(s){return ut(s)}query(s,u,v){return Me(s,u,v)}computeStyle(s,u,v){return v||""}animate(s,u,v,w,U,fe=[],De){return new y.ZN(v,w)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac}),l})(),lt=(()=>{class l{}return l.NOOP=new st,l})();const an="ng-enter",$t="ng-leave",zt="ng-trigger",Kt=".ng-trigger",On="ng-animating",Pn=".ng-animating";function gn(l){if("number"==typeof l)return l;const c=l.match(/^(-?[\.\d]+)(m?s)/);return!c||c.length<2?0:ni(parseFloat(c[1]),c[2])}function ni(l,c){return"s"===c?1e3*l:l}function Ai(l,c,s){return l.hasOwnProperty("duration")?l:function Ri(l,c,s){let v,w=0,U="";if("string"==typeof l){const fe=l.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===fe)return c.push(j()),{duration:0,delay:0,easing:""};v=ni(parseFloat(fe[1]),fe[2]);const De=fe[3];null!=De&&(w=ni(parseFloat(De),fe[4]));const et=fe[5];et&&(U=et)}else v=l;if(!s){let fe=!1,De=c.length;v<0&&(c.push(function L(){return new n.vHH(3100,b)}()),fe=!0),w<0&&(c.push(function O(){return new n.vHH(3101,b)}()),fe=!0),fe&&c.splice(De,0,j())}return{duration:v,delay:w,easing:U}}(l,c,s)}function Qn(l,c={}){return Object.keys(l).forEach(s=>{c[s]=l[s]}),c}function yi(l,c,s={}){if(c)for(let u in l)s[u]=l[u];else Qn(l,s);return s}function ar(l,c,s){return s?c+":"+s+";":""}function Ji(l){let c="";for(let s=0;s<l.style.length;s++){const u=l.style.item(s);c+=ar(0,u,l.style.getPropertyValue(u))}for(const s in l.style)l.style.hasOwnProperty(s)&&!s.startsWith("_")&&(c+=ar(0,Et(s),l.style[s]));l.setAttribute("style",c)}function Ii(l,c,s){l.style&&(Object.keys(c).forEach(u=>{const v=ft(u);s&&!s.hasOwnProperty(u)&&(s[u]=l.style[v]),l.style[v]=c[u]}),le()&&Ji(l))}function xt(l,c){l.style&&(Object.keys(c).forEach(s=>{const u=ft(s);l.style[u]=""}),le()&&Ji(l))}function bt(l){return Array.isArray(l)?1==l.length?l[0]:(0,y.vP)(l):l}const Pt=new RegExp("{{\\s*(.+?)\\s*}}","g");function qt(l){let c=[];if("string"==typeof l){let s;for(;s=Pt.exec(l);)c.push(s[1]);Pt.lastIndex=0}return c}function ht(l,c,s){const u=l.toString(),v=u.replace(Pt,(w,U)=>{let fe=c[U];return c.hasOwnProperty(U)||(s.push(function R(l){return new n.vHH(3003,b)}()),fe=""),fe.toString()});return v==u?l:v}function Je(l){const c=[];let s=l.next();for(;!s.done;)c.push(s.value),s=l.next();return c}const nt=/-+([a-z0-9])/g;function ft(l){return l.replace(nt,(...c)=>c[1].toUpperCase())}function Et(l){return l.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Jt(l,c,s){switch(c.type){case 7:return l.visitTrigger(c,s);case 0:return l.visitState(c,s);case 1:return l.visitTransition(c,s);case 2:return l.visitSequence(c,s);case 3:return l.visitGroup(c,s);case 4:return l.visitAnimate(c,s);case 5:return l.visitKeyframes(c,s);case 6:return l.visitStyle(c,s);case 8:return l.visitReference(c,s);case 9:return l.visitAnimateChild(c,s);case 10:return l.visitAnimateRef(c,s);case 11:return l.visitQuery(c,s);case 12:return l.visitStagger(c,s);default:throw function V(l){return new n.vHH(3004,b)}()}}function It(l,c){return window.getComputedStyle(l)[c]}function Bi(l,c){const s=[];return"string"==typeof l?l.split(/\s*,\s*/).forEach(u=>function mn(l,c,s){if(":"==l[0]){const De=function Vi(l,c){switch(l){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(s,u)=>parseFloat(u)>parseFloat(s);case":decrement":return(s,u)=>parseFloat(u)<parseFloat(s);default:return c.push(function J(l){return new n.vHH(3016,b)}()),"* => *"}}(l,s);if("function"==typeof De)return void c.push(De);l=De}const u=l.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==u||u.length<4)return s.push(function P(l){return new n.vHH(3015,b)}()),c;const v=u[1],w=u[2],U=u[3];c.push(Fi(v,U));"<"==w[0]&&!("*"==v&&"*"==U)&&c.push(Fi(U,v))}(u,s,c)):s.push(l),s}const Vn=new Set(["true","1"]),hi=new Set(["false","0"]);function Fi(l,c){const s=Vn.has(l)||hi.has(l),u=Vn.has(c)||hi.has(c);return(v,w)=>{let U="*"==l||l==v,fe="*"==c||c==w;return!U&&s&&"boolean"==typeof v&&(U=v?Vn.has(l):hi.has(l)),!fe&&u&&"boolean"==typeof w&&(fe=w?Vn.has(c):hi.has(c)),U&&fe}}const ki=new RegExp("s*:selfs*,?","g");function Ni(l,c,s,u){return new Xn(l).build(c,s,u)}class Xn{constructor(c){this._driver=c}build(c,s,u){const v=new Gn(s);this._resetContextStyleTimingState(v);const w=Jt(this,bt(c),v);return v.unsupportedCSSPropertiesFound.size&&v.unsupportedCSSPropertiesFound.keys(),w}_resetContextStyleTimingState(c){c.currentQuerySelector="",c.collectedStyles={},c.collectedStyles[""]={},c.currentTime=0}visitTrigger(c,s){let u=s.queryCount=0,v=s.depCount=0;const w=[],U=[];return"@"==c.name.charAt(0)&&s.errors.push(function de(){return new n.vHH(3006,b)}()),c.definitions.forEach(fe=>{if(this._resetContextStyleTimingState(s),0==fe.type){const De=fe,et=De.name;et.toString().split(/\s*,\s*/).forEach(wt=>{De.name=wt,w.push(this.visitState(De,s))}),De.name=et}else if(1==fe.type){const De=this.visitTransition(fe,s);u+=De.queryCount,v+=De.depCount,U.push(De)}else s.errors.push(function Oe(){return new n.vHH(3007,b)}())}),{type:7,name:c.name,states:w,transitions:U,queryCount:u,depCount:v,options:null}}visitState(c,s){const u=this.visitStyle(c.styles,s),v=c.options&&c.options.params||null;if(u.containsDynamicStyles){const w=new Set,U=v||{};u.styles.forEach(fe=>{if(Dt(fe)){const De=fe;Object.keys(De).forEach(et=>{qt(De[et]).forEach(wt=>{U.hasOwnProperty(wt)||w.add(wt)})})}}),w.size&&(Je(w.values()),s.errors.push(function Ne(l,c){return new n.vHH(3008,b)}()))}return{type:0,name:c.name,style:u,options:v?{params:v}:null}}visitTransition(c,s){s.queryCount=0,s.depCount=0;const u=Jt(this,bt(c.animation),s);return{type:1,matchers:Bi(c.expr,s.errors),animation:u,queryCount:s.queryCount,depCount:s.depCount,options:Wt(c.options)}}visitSequence(c,s){return{type:2,steps:c.steps.map(u=>Jt(this,u,s)),options:Wt(c.options)}}visitGroup(c,s){const u=s.currentTime;let v=0;const w=c.steps.map(U=>{s.currentTime=u;const fe=Jt(this,U,s);return v=Math.max(v,s.currentTime),fe});return s.currentTime=v,{type:3,steps:w,options:Wt(c.options)}}visitAnimate(c,s){const u=function jt(l,c){let s=null;if(l.hasOwnProperty("duration"))s=l;else if("number"==typeof l)return Bt(Ai(l,c).duration,0,"");const u=l;if(u.split(/\s+/).some(w=>"{"==w.charAt(0)&&"{"==w.charAt(1))){const w=Bt(0,0,"");return w.dynamic=!0,w.strValue=u,w}return s=s||Ai(u,c),Bt(s.duration,s.delay,s.easing)}(c.timings,s.errors);s.currentAnimateTimings=u;let v,w=c.styles?c.styles:(0,y.oB)({});if(5==w.type)v=this.visitKeyframes(w,s);else{let U=c.styles,fe=!1;if(!U){fe=!0;const et={};u.easing&&(et.easing=u.easing),U=(0,y.oB)(et)}s.currentTime+=u.duration+u.delay;const De=this.visitStyle(U,s);De.isEmptyStep=fe,v=De}return s.currentAnimateTimings=null,{type:4,timings:u,style:v,options:null}}visitStyle(c,s){const u=this._makeStyleAst(c,s);return this._validateStyleAst(u,s),u}_makeStyleAst(c,s){const u=[];Array.isArray(c.styles)?c.styles.forEach(U=>{"string"==typeof U?U==y.l3?u.push(U):s.errors.push(function it(l){return new n.vHH(3002,b)}()):u.push(U)}):u.push(c.styles);let v=!1,w=null;return u.forEach(U=>{if(Dt(U)){const fe=U,De=fe.easing;if(De&&(w=De,delete fe.easing),!v)for(let et in fe)if(fe[et].toString().indexOf("{{")>=0){v=!0;break}}}),{type:6,styles:u,easing:w,offset:c.offset,containsDynamicStyles:v,options:null}}_validateStyleAst(c,s){const u=s.currentAnimateTimings;let v=s.currentTime,w=s.currentTime;u&&w>0&&(w-=u.duration+u.delay),c.styles.forEach(U=>{"string"!=typeof U&&Object.keys(U).forEach(fe=>{if(!this._driver.validateStyleProperty(fe))return delete U[fe],void s.unsupportedCSSPropertiesFound.add(fe);const De=s.collectedStyles[s.currentQuerySelector],et=De[fe];let wt=!0;et&&(w!=v&&w>=et.startTime&&v<=et.endTime&&(s.errors.push(function Be(l,c,s,u,v){return new n.vHH(3010,b)}()),wt=!1),w=et.startTime),wt&&(De[fe]={startTime:w,endTime:v}),s.options&&function ct(l,c,s){const u=c.params||{},v=qt(l);v.length&&v.forEach(w=>{u.hasOwnProperty(w)||s.push(function H(l){return new n.vHH(3001,b)}())})}(U[fe],s.options,s.errors)})})}visitKeyframes(c,s){const u={type:5,styles:[],options:null};if(!s.currentAnimateTimings)return s.errors.push(function Ve(){return new n.vHH(3011,b)}()),u;let w=0;const U=[];let fe=!1,De=!1,et=0;const wt=c.steps.map(Mi=>{const er=this._makeStyleAst(Mi,s);let $r=null!=er.offset?er.offset:function ii(l){if("string"==typeof l)return null;let c=null;if(Array.isArray(l))l.forEach(s=>{if(Dt(s)&&s.hasOwnProperty("offset")){const u=s;c=parseFloat(u.offset),delete u.offset}});else if(Dt(l)&&l.hasOwnProperty("offset")){const s=l;c=parseFloat(s.offset),delete s.offset}return c}(er.styles),br=0;return null!=$r&&(w++,br=er.offset=$r),De=De||br<0||br>1,fe=fe||br<et,et=br,U.push(br),er});De&&s.errors.push(function Re(){return new n.vHH(3012,b)}()),fe&&s.errors.push(function at(){return new n.vHH(3200,b)}());const Gt=c.steps.length;let fn=0;w>0&&w<Gt?s.errors.push(function Tt(){return new n.vHH(3202,b)}()):0==w&&(fn=1/(Gt-1));const kn=Gt-1,Sn=s.currentTime,jn=s.currentAnimateTimings,vi=jn.duration;return wt.forEach((Mi,er)=>{const $r=fn>0?er==kn?1:fn*er:U[er],br=$r*vi;s.currentTime=Sn+jn.delay+br,jn.duration=br,this._validateStyleAst(Mi,s),Mi.offset=$r,u.styles.push(Mi)}),u}visitReference(c,s){return{type:8,animation:Jt(this,bt(c.animation),s),options:Wt(c.options)}}visitAnimateChild(c,s){return s.depCount++,{type:9,options:Wt(c.options)}}visitAnimateRef(c,s){return{type:10,animation:this.visitReference(c.animation,s),options:Wt(c.options)}}visitQuery(c,s){const u=s.currentQuerySelector,v=c.options||{};s.queryCount++,s.currentQuery=c;const[w,U]=function ps(l){const c=!!l.split(/\s*,\s*/).find(s=>":self"==s);return c&&(l=l.replace(ki,"")),l=l.replace(/@\*/g,Kt).replace(/@\w+/g,s=>Kt+"-"+s.substr(1)).replace(/:animating/g,Pn),[l,c]}(c.selector);s.currentQuerySelector=u.length?u+" "+w:w,ae(s.collectedStyles,s.currentQuerySelector,{});const fe=Jt(this,bt(c.animation),s);return s.currentQuery=null,s.currentQuerySelector=u,{type:11,selector:w,limit:v.limit||0,optional:!!v.optional,includeSelf:U,animation:fe,originalSelector:c.selector,options:Wt(c.options)}}visitStagger(c,s){s.currentQuery||s.errors.push(function Ye(){return new n.vHH(3013,b)}());const u="full"===c.timings?{duration:0,delay:0,easing:"full"}:Ai(c.timings,s.errors,!0);return{type:12,animation:Jt(this,bt(c.animation),s),timings:u,options:null}}}class Gn{constructor(c){this.errors=c,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null,this.unsupportedCSSPropertiesFound=new Set}}function Dt(l){return!Array.isArray(l)&&"object"==typeof l}function Wt(l){return l?(l=Qn(l)).params&&(l.params=function Cr(l){return l?Qn(l):null}(l.params)):l={},l}function Bt(l,c,s){return{duration:l,delay:c,easing:s}}function wn(l,c,s,u,v,w,U=null,fe=!1){return{type:1,element:l,keyframes:c,preStyleProps:s,postStyleProps:u,duration:v,delay:w,totalTime:v+w,easing:U,subTimeline:fe}}class Mn{constructor(){this._map=new Map}get(c){return this._map.get(c)||[]}append(c,s){let u=this._map.get(c);u||this._map.set(c,u=[]),u.push(...s)}has(c){return this._map.has(c)}clear(){this._map.clear()}}const ci=new RegExp(":enter","g"),vn=new RegExp(":leave","g");function li(l,c,s,u,v,w={},U={},fe,De,et=[]){return(new Ci).buildKeyframes(l,c,s,u,v,w,U,fe,De,et)}class Ci{buildKeyframes(c,s,u,v,w,U,fe,De,et,wt=[]){et=et||new Mn;const Gt=new qn(c,s,et,v,w,wt,[]);Gt.options=De,Gt.currentTimeline.setStyles([U],null,Gt.errors,De),Jt(this,u,Gt);const fn=Gt.timelines.filter(kn=>kn.containsAnimation());if(Object.keys(fe).length){let kn;for(let Sn=fn.length-1;Sn>=0;Sn--){const jn=fn[Sn];if(jn.element===s){kn=jn;break}}kn&&!kn.allowOnlyTimelineStyles()&&kn.setStyles([fe],null,Gt.errors,De)}return fn.length?fn.map(kn=>kn.buildKeyframes()):[wn(s,[],[],[],0,0,"",!1)]}visitTrigger(c,s){}visitState(c,s){}visitTransition(c,s){}visitAnimateChild(c,s){const u=s.subInstructions.get(s.element);if(u){const v=s.createSubContext(c.options),w=s.currentTimeline.currentTime,U=this._visitSubInstructions(u,v,v.options);w!=U&&s.transformIntoNewTimeline(U)}s.previousNode=c}visitAnimateRef(c,s){const u=s.createSubContext(c.options);u.transformIntoNewTimeline(),this.visitReference(c.animation,u),s.transformIntoNewTimeline(u.currentTimeline.currentTime),s.previousNode=c}_visitSubInstructions(c,s,u){let w=s.currentTimeline.currentTime;const U=null!=u.duration?gn(u.duration):null,fe=null!=u.delay?gn(u.delay):null;return 0!==U&&c.forEach(De=>{const et=s.appendInstructionToTimeline(De,U,fe);w=Math.max(w,et.duration+et.delay)}),w}visitReference(c,s){s.updateOptions(c.options,!0),Jt(this,c.animation,s),s.previousNode=c}visitSequence(c,s){const u=s.subContextCount;let v=s;const w=c.options;if(w&&(w.params||w.delay)&&(v=s.createSubContext(w),v.transformIntoNewTimeline(),null!=w.delay)){6==v.previousNode.type&&(v.currentTimeline.snapshotCurrentStyles(),v.previousNode=di);const U=gn(w.delay);v.delayNextStep(U)}c.steps.length&&(c.steps.forEach(U=>Jt(this,U,v)),v.currentTimeline.applyStylesToKeyframe(),v.subContextCount>u&&v.transformIntoNewTimeline()),s.previousNode=c}visitGroup(c,s){const u=[];let v=s.currentTimeline.currentTime;const w=c.options&&c.options.delay?gn(c.options.delay):0;c.steps.forEach(U=>{const fe=s.createSubContext(c.options);w&&fe.delayNextStep(w),Jt(this,U,fe),v=Math.max(v,fe.currentTimeline.currentTime),u.push(fe.currentTimeline)}),u.forEach(U=>s.currentTimeline.mergeTimelineCollectedStyles(U)),s.transformIntoNewTimeline(v),s.previousNode=c}_visitTiming(c,s){if(c.dynamic){const u=c.strValue;return Ai(s.params?ht(u,s.params,s.errors):u,s.errors)}return{duration:c.duration,delay:c.delay,easing:c.easing}}visitAnimate(c,s){const u=s.currentAnimateTimings=this._visitTiming(c.timings,s),v=s.currentTimeline;u.delay&&(s.incrementTime(u.delay),v.snapshotCurrentStyles());const w=c.style;5==w.type?this.visitKeyframes(w,s):(s.incrementTime(u.duration),this.visitStyle(w,s),v.applyStylesToKeyframe()),s.currentAnimateTimings=null,s.previousNode=c}visitStyle(c,s){const u=s.currentTimeline,v=s.currentAnimateTimings;!v&&u.getCurrentStyleProperties().length&&u.forwardFrame();const w=v&&v.easing||c.easing;c.isEmptyStep?u.applyEmptyStep(w):u.setStyles(c.styles,w,s.errors,s.options),s.previousNode=c}visitKeyframes(c,s){const u=s.currentAnimateTimings,v=s.currentTimeline.duration,w=u.duration,fe=s.createSubContext().currentTimeline;fe.easing=u.easing,c.styles.forEach(De=>{fe.forwardTime((De.offset||0)*w),fe.setStyles(De.styles,De.easing,s.errors,s.options),fe.applyStylesToKeyframe()}),s.currentTimeline.mergeTimelineCollectedStyles(fe),s.transformIntoNewTimeline(v+w),s.previousNode=c}visitQuery(c,s){const u=s.currentTimeline.currentTime,v=c.options||{},w=v.delay?gn(v.delay):0;w&&(6===s.previousNode.type||0==u&&s.currentTimeline.getCurrentStyleProperties().length)&&(s.currentTimeline.snapshotCurrentStyles(),s.previousNode=di);let U=u;const fe=s.invokeQuery(c.selector,c.originalSelector,c.limit,c.includeSelf,!!v.optional,s.errors);s.currentQueryTotal=fe.length;let De=null;fe.forEach((et,wt)=>{s.currentQueryIndex=wt;const Gt=s.createSubContext(c.options,et);w&&Gt.delayNextStep(w),et===s.element&&(De=Gt.currentTimeline),Jt(this,c.animation,Gt),Gt.currentTimeline.applyStylesToKeyframe(),U=Math.max(U,Gt.currentTimeline.currentTime)}),s.currentQueryIndex=0,s.currentQueryTotal=0,s.transformIntoNewTimeline(U),De&&(s.currentTimeline.mergeTimelineCollectedStyles(De),s.currentTimeline.snapshotCurrentStyles()),s.previousNode=c}visitStagger(c,s){const u=s.parentContext,v=s.currentTimeline,w=c.timings,U=Math.abs(w.duration),fe=U*(s.currentQueryTotal-1);let De=U*s.currentQueryIndex;switch(w.duration<0?"reverse":w.easing){case"reverse":De=fe-De;break;case"full":De=u.currentStaggerTime}const wt=s.currentTimeline;De&&wt.delayNextStep(De);const Gt=wt.currentTime;Jt(this,c.animation,s),s.previousNode=c,u.currentStaggerTime=v.currentTime-Gt+(v.startTime-u.currentTimeline.startTime)}}const di={};class qn{constructor(c,s,u,v,w,U,fe,De){this._driver=c,this.element=s,this.subInstructions=u,this._enterClassName=v,this._leaveClassName=w,this.errors=U,this.timelines=fe,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=di,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=De||new wr(this._driver,s,0),fe.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(c,s){if(!c)return;const u=c;let v=this.options;null!=u.duration&&(v.duration=gn(u.duration)),null!=u.delay&&(v.delay=gn(u.delay));const w=u.params;if(w){let U=v.params;U||(U=this.options.params={}),Object.keys(w).forEach(fe=>{(!s||!U.hasOwnProperty(fe))&&(U[fe]=ht(w[fe],U,this.errors))})}}_copyOptions(){const c={};if(this.options){const s=this.options.params;if(s){const u=c.params={};Object.keys(s).forEach(v=>{u[v]=s[v]})}}return c}createSubContext(c=null,s,u){const v=s||this.element,w=new qn(this._driver,v,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(v,u||0));return w.previousNode=this.previousNode,w.currentAnimateTimings=this.currentAnimateTimings,w.options=this._copyOptions(),w.updateOptions(c),w.currentQueryIndex=this.currentQueryIndex,w.currentQueryTotal=this.currentQueryTotal,w.parentContext=this,this.subContextCount++,w}transformIntoNewTimeline(c){return this.previousNode=di,this.currentTimeline=this.currentTimeline.fork(this.element,c),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(c,s,u){const v={duration:s??c.duration,delay:this.currentTimeline.currentTime+(u??0)+c.delay,easing:""},w=new ts(this._driver,c.element,c.keyframes,c.preStyleProps,c.postStyleProps,v,c.stretchStartingKeyframe);return this.timelines.push(w),v}incrementTime(c){this.currentTimeline.forwardTime(this.currentTimeline.duration+c)}delayNextStep(c){c>0&&this.currentTimeline.delayNextStep(c)}invokeQuery(c,s,u,v,w,U){let fe=[];if(v&&fe.push(this.element),c.length>0){c=(c=c.replace(ci,"."+this._enterClassName)).replace(vn,"."+this._leaveClassName);let et=this._driver.query(this.element,c,1!=u);0!==u&&(et=u<0?et.slice(et.length+u,et.length):et.slice(0,u)),fe.push(...et)}return!w&&0==fe.length&&U.push(function M(l){return new n.vHH(3014,b)}()),fe}}class wr{constructor(c,s,u,v){this._driver=c,this.element=s,this.startTime=u,this._elementTimelineStylesLookup=v,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(s),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(s,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(c){const s=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||s?(this.forwardTime(this.currentTime+c),s&&this.snapshotCurrentStyles()):this.startTime+=c}fork(c,s){return this.applyStylesToKeyframe(),new wr(this._driver,c,s||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(c){this.applyStylesToKeyframe(),this.duration=c,this._loadKeyframe()}_updateStyle(c,s){this._localTimelineStyles[c]=s,this._globalTimelineStyles[c]=s,this._styleSummary[c]={time:this.currentTime,value:s}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(c){c&&(this._previousKeyframe.easing=c),Object.keys(this._globalTimelineStyles).forEach(s=>{this._backFill[s]=this._globalTimelineStyles[s]||y.l3,this._currentKeyframe[s]=y.l3}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(c,s,u,v){s&&(this._previousKeyframe.easing=s);const w=v&&v.params||{},U=function zr(l,c){const s={};let u;return l.forEach(v=>{"*"===v?(u=u||Object.keys(c),u.forEach(w=>{s[w]=y.l3})):yi(v,!1,s)}),s}(c,this._globalTimelineStyles);Object.keys(U).forEach(fe=>{const De=ht(U[fe],w,u);this._pendingStyles[fe]=De,this._localTimelineStyles.hasOwnProperty(fe)||(this._backFill[fe]=this._globalTimelineStyles.hasOwnProperty(fe)?this._globalTimelineStyles[fe]:y.l3),this._updateStyle(fe,De)})}applyStylesToKeyframe(){const c=this._pendingStyles,s=Object.keys(c);0!=s.length&&(this._pendingStyles={},s.forEach(u=>{this._currentKeyframe[u]=c[u]}),Object.keys(this._localTimelineStyles).forEach(u=>{this._currentKeyframe.hasOwnProperty(u)||(this._currentKeyframe[u]=this._localTimelineStyles[u])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(c=>{const s=this._localTimelineStyles[c];this._pendingStyles[c]=s,this._updateStyle(c,s)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const c=[];for(let s in this._currentKeyframe)c.push(s);return c}mergeTimelineCollectedStyles(c){Object.keys(c._styleSummary).forEach(s=>{const u=this._styleSummary[s],v=c._styleSummary[s];(!u||v.time>u.time)&&this._updateStyle(s,v.value)})}buildKeyframes(){this.applyStylesToKeyframe();const c=new Set,s=new Set,u=1===this._keyframes.size&&0===this.duration;let v=[];this._keyframes.forEach((fe,De)=>{const et=yi(fe,!0);Object.keys(et).forEach(wt=>{const Gt=et[wt];Gt==y.k1?c.add(wt):Gt==y.l3&&s.add(wt)}),u||(et.offset=De/this.duration),v.push(et)});const w=c.size?Je(c.values()):[],U=s.size?Je(s.values()):[];if(u){const fe=v[0],De=Qn(fe);fe.offset=0,De.offset=1,v=[fe,De]}return wn(this.element,v,w,U,this.duration,this.startTime,this.easing,!1)}}class ts extends wr{constructor(c,s,u,v,w,U,fe=!1){super(c,s,U.delay),this.keyframes=u,this.preStyleProps=v,this.postStyleProps=w,this._stretchStartingKeyframe=fe,this.timings={duration:U.duration,delay:U.delay,easing:U.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let c=this.keyframes,{delay:s,duration:u,easing:v}=this.timings;if(this._stretchStartingKeyframe&&s){const w=[],U=u+s,fe=s/U,De=yi(c[0],!1);De.offset=0,w.push(De);const et=yi(c[0],!1);et.offset=Rr(fe),w.push(et);const wt=c.length-1;for(let Gt=1;Gt<=wt;Gt++){let fn=yi(c[Gt],!1);fn.offset=Rr((s+fn.offset*u)/U),w.push(fn)}u=U,s=0,v="",c=w}return wn(this.element,c,this.preStyleProps,this.postStyleProps,u,s,v,!0)}}function Rr(l,c=3){const s=Math.pow(10,c-1);return Math.round(l*s)/s}class Gr{}class Tr extends Gr{normalizePropertyName(c,s){return ft(c)}normalizeStyleValue(c,s,u,v){let w="";const U=u.toString().trim();if(Js[s]&&0!==u&&"0"!==u)if("number"==typeof u)w="px";else{const fe=u.match(/^[+-]?[\d\.]+([a-z]*)$/);fe&&0==fe[1].length&&v.push(function Z(l,c){return new n.vHH(3005,b)}())}return U+w}}const Js=(()=>function Is(l){const c={};return l.forEach(s=>c[s]=!0),c}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function ns(l,c,s,u,v,w,U,fe,De,et,wt,Gt,fn){return{type:0,element:l,triggerName:c,isRemovalTransition:v,fromState:s,fromStyles:w,toState:u,toStyles:U,timelines:fe,queriedElements:De,preStyleProps:et,postStyleProps:wt,totalTime:Gt,errors:fn}}const gs={};class is{constructor(c,s,u){this._triggerName=c,this.ast=s,this._stateStyles=u}match(c,s,u,v){return function Co(l,c,s,u,v){return l.some(w=>w(c,s,u,v))}(this.ast.matchers,c,s,u,v)}buildStyles(c,s,u){const v=this._stateStyles["*"],w=this._stateStyles[c],U=v?v.buildStyles(s,u):{};return w?w.buildStyles(s,u):U}build(c,s,u,v,w,U,fe,De,et,wt){const Gt=[],fn=this.ast.options&&this.ast.options.params||gs,Sn=this.buildStyles(u,fe&&fe.params||gs,Gt),jn=De&&De.params||gs,vi=this.buildStyles(v,jn,Gt),Mi=new Set,er=new Map,$r=new Map,br="void"===v,Ca={params:{...fn,...jn}},hs=wt?[]:li(c,s,this.ast.animation,w,U,Sn,vi,Ca,et,Gt);let jr=0;if(hs.forEach(_o=>{jr=Math.max(_o.duration+_o.delay,jr)}),Gt.length)return ns(s,this._triggerName,u,v,br,Sn,vi,[],[],er,$r,jr,Gt);hs.forEach(_o=>{const Zs=_o.element,Zl=ae(er,Zs,{});_o.preStyleProps.forEach(Ro=>Zl[Ro]=!0);const wa=ae($r,Zs,{});_o.postStyleProps.forEach(Ro=>wa[Ro]=!0),Zs!==s&&Mi.add(Zs)});const yo=Je(Mi.values());return ns(s,this._triggerName,u,v,br,Sn,vi,hs,yo,er,$r,jr)}}class ms{constructor(c,s,u){this.styles=c,this.defaultParams=s,this.normalizer=u}buildStyles(c,s){const u={},v=Qn(this.defaultParams);return Object.keys(c).forEach(w=>{const U=c[w];null!=U&&(v[w]=U)}),this.styles.styles.forEach(w=>{if("string"!=typeof w){const U=w;Object.keys(U).forEach(fe=>{let De=U[fe];De.length>1&&(De=ht(De,v,s));const et=this.normalizer.normalizePropertyName(fe,s);De=this.normalizer.normalizeStyleValue(fe,et,De,s),u[et]=De})}}),u}}class rs{constructor(c,s,u){this.name=c,this.ast=s,this._normalizer=u,this.transitionFactories=[],this.states={},s.states.forEach(v=>{this.states[v.name]=new ms(v.style,v.options&&v.options.params||{},u)}),wo(this.states,"true","1"),wo(this.states,"false","0"),s.transitions.forEach(v=>{this.transitionFactories.push(new is(c,v,this.states))}),this.fallbackTransition=function vr(l,c,s){return new is(l,{type:1,animation:{type:2,steps:[],options:null},matchers:[(U,fe)=>!0],options:null,queryCount:0,depCount:0},c)}(c,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(c,s,u,v){return this.transitionFactories.find(U=>U.match(c,s,u,v))||null}matchStyles(c,s,u){return this.fallbackTransition.buildStyles(c,s,u)}}function wo(l,c,s){l.hasOwnProperty(c)?l.hasOwnProperty(s)||(l[s]=l[c]):l.hasOwnProperty(s)&&(l[c]=l[s])}const rr=new Mn;class Os{constructor(c,s,u){this.bodyNode=c,this._driver=s,this._normalizer=u,this._animations={},this._playersById={},this.players=[]}register(c,s){const u=[],w=Ni(this._driver,s,u,[]);if(u.length)throw function Se(l){return new n.vHH(3503,b)}();this._animations[c]=w}_buildPlayer(c,s,u){const v=c.element,w=je(0,this._normalizer,0,c.keyframes,s,u);return this._driver.animate(v,w,c.duration,c.delay,c.easing,[],!0)}create(c,s,u={}){const v=[],w=this._animations[c];let U;const fe=new Map;if(w?(U=li(this._driver,s,w,an,$t,{},{},u,rr,v),U.forEach(wt=>{const Gt=ae(fe,wt.element,{});wt.postStyleProps.forEach(fn=>Gt[fn]=null)})):(v.push(function A(){return new n.vHH(3300,b)}()),U=[]),v.length)throw function B(l){return new n.vHH(3504,b)}();fe.forEach((wt,Gt)=>{Object.keys(wt).forEach(fn=>{wt[fn]=this._driver.computeStyle(Gt,fn,y.l3)})});const et=ce(U.map(wt=>{const Gt=fe.get(wt.element);return this._buildPlayer(wt,{},Gt)}));return this._playersById[c]=et,et.onDestroy(()=>this.destroy(c)),this.players.push(et),et}destroy(c){const s=this._getPlayer(c);s.destroy(),delete this._playersById[c];const u=this.players.indexOf(s);u>=0&&this.players.splice(u,1)}_getPlayer(c){const s=this._playersById[c];if(!s)throw function q(l){return new n.vHH(3301,b)}();return s}listen(c,s,u,v){const w=Te(s,"","","");return Ge(this._getPlayer(c),u,w,v),()=>{}}command(c,s,u,v){if("register"==u)return void this.register(c,v[0]);if("create"==u)return void this.create(c,s,v[0]||{});const w=this._getPlayer(c);switch(u){case"play":w.play();break;case"pause":w.pause();break;case"reset":w.reset();break;case"restart":w.restart();break;case"finish":w.finish();break;case"init":w.init();break;case"setPosition":w.setPosition(parseFloat(v[0]));break;case"destroy":this.destroy(c)}}}const Kr="ng-animate-queued",Rs="ng-animate-disabled",Zr=[],Pi={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Qs={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Ti="__ng_removed";class Lr{constructor(c,s=""){this.namespaceId=s;const u=c&&c.hasOwnProperty("value");if(this.value=function ve(l){return l??null}(u?c.value:c),u){const w=Qn(c);delete w.value,this.options=w}else this.options={};this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(c){const s=c.params;if(s){const u=this.options.params;Object.keys(s).forEach(v=>{null==u[v]&&(u[v]=s[v])})}}}const yr="void",Fr=new Lr(yr);class Ls{constructor(c,s,u){this.id=c,this.hostElement=s,this._engine=u,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+c,Jn(s,this._hostClassName)}listen(c,s,u,v){if(!this._triggers.hasOwnProperty(s))throw function Q(l,c){return new n.vHH(3302,b)}();if(null==u||0==u.length)throw function ne(l){return new n.vHH(3303,b)}();if(!function vt(l){return"start"==l||"done"==l}(u))throw function Y(l,c){return new n.vHH(3400,b)}();const w=ae(this._elementListeners,c,[]),U={name:s,phase:u,callback:v};w.push(U);const fe=ae(this._engine.statesByElement,c,{});return fe.hasOwnProperty(s)||(Jn(c,zt),Jn(c,zt+"-"+s),fe[s]=Fr),()=>{this._engine.afterFlush(()=>{const De=w.indexOf(U);De>=0&&w.splice(De,1),this._triggers[s]||delete fe[s]})}}register(c,s){return!this._triggers[c]&&(this._triggers[c]=s,!0)}_getTrigger(c){const s=this._triggers[c];if(!s)throw function W(l){return new n.vHH(3401,b)}();return s}trigger(c,s,u,v=!0){const w=this._getTrigger(s),U=new ge(this.id,s,c);let fe=this._engine.statesByElement.get(c);fe||(Jn(c,zt),Jn(c,zt+"-"+s),this._engine.statesByElement.set(c,fe={}));let De=fe[s];const et=new Lr(u,this.id);if(!(u&&u.hasOwnProperty("value"))&&De&&et.absorbOptions(De.options),fe[s]=et,De||(De=Fr),et.value!==yr&&De.value===et.value){if(!function fi(l,c){const s=Object.keys(l),u=Object.keys(c);if(s.length!=u.length)return!1;for(let v=0;v<s.length;v++){const w=s[v];if(!c.hasOwnProperty(w)||l[w]!==c[w])return!1}return!0}(De.params,et.params)){const jn=[],vi=w.matchStyles(De.value,De.params,jn),Mi=w.matchStyles(et.value,et.params,jn);jn.length?this._engine.reportError(jn):this._engine.afterFlush(()=>{xt(c,vi),Ii(c,Mi)})}return}const fn=ae(this._engine.playersByElement,c,[]);fn.forEach(jn=>{jn.namespaceId==this.id&&jn.triggerName==s&&jn.queued&&jn.destroy()});let kn=w.matchTransition(De.value,et.value,c,et.params),Sn=!1;if(!kn){if(!v)return;kn=w.fallbackTransition,Sn=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:c,triggerName:s,transition:kn,fromState:De,toState:et,player:U,isFallbackTransition:Sn}),Sn||(Jn(c,Kr),U.onStart(()=>{gi(c,Kr)})),U.onDone(()=>{let jn=this.players.indexOf(U);jn>=0&&this.players.splice(jn,1);const vi=this._engine.playersByElement.get(c);if(vi){let Mi=vi.indexOf(U);Mi>=0&&vi.splice(Mi,1)}}),this.players.push(U),fn.push(U),U}deregister(c){delete this._triggers[c],this._engine.statesByElement.forEach((s,u)=>{delete s[c]}),this._elementListeners.forEach((s,u)=>{this._elementListeners.set(u,s.filter(v=>v.name!=c))})}clearElementCache(c){this._engine.statesByElement.delete(c),this._elementListeners.delete(c);const s=this._engine.playersByElement.get(c);s&&(s.forEach(u=>u.destroy()),this._engine.playersByElement.delete(c))}_signalRemovalForInnerTriggers(c,s){const u=this._engine.driver.query(c,Kt,!0);u.forEach(v=>{if(v[Ti])return;const w=this._engine.fetchNamespacesByElement(v);w.size?w.forEach(U=>U.triggerLeaveAnimation(v,s,!1,!0)):this.clearElementCache(v)}),this._engine.afterFlushAnimationsDone(()=>u.forEach(v=>this.clearElementCache(v)))}triggerLeaveAnimation(c,s,u,v){const w=this._engine.statesByElement.get(c),U=new Map;if(w){const fe=[];if(Object.keys(w).forEach(De=>{if(U.set(De,w[De].value),this._triggers[De]){const et=this.trigger(c,De,yr,v);et&&fe.push(et)}}),fe.length)return this._engine.markElementAsRemoved(this.id,c,!0,s,U),u&&ce(fe).onDone(()=>this._engine.processLeaveNode(c)),!0}return!1}prepareLeaveAnimationListeners(c){const s=this._elementListeners.get(c),u=this._engine.statesByElement.get(c);if(s&&u){const v=new Set;s.forEach(w=>{const U=w.name;if(v.has(U))return;v.add(U);const De=this._triggers[U].fallbackTransition,et=u[U]||Fr,wt=new Lr(yr),Gt=new ge(this.id,U,c);this._engine.totalQueuedPlayers++,this._queue.push({element:c,triggerName:U,transition:De,fromState:et,toState:wt,player:Gt,isFallbackTransition:!0})})}}removeNode(c,s){const u=this._engine;if(c.childElementCount&&this._signalRemovalForInnerTriggers(c,s),this.triggerLeaveAnimation(c,s,!0))return;let v=!1;if(u.totalAnimations){const w=u.players.length?u.playersByQueriedElement.get(c):[];if(w&&w.length)v=!0;else{let U=c;for(;U=U.parentNode;)if(u.statesByElement.get(U)){v=!0;break}}}if(this.prepareLeaveAnimationListeners(c),v)u.markElementAsRemoved(this.id,c,!1,s);else{const w=c[Ti];(!w||w===Pi)&&(u.afterFlush(()=>this.clearElementCache(c)),u.destroyInnerAnimations(c),u._onRemovalComplete(c,s))}}insertNode(c,s){Jn(c,this._hostClassName)}drainQueuedTransitions(c){const s=[];return this._queue.forEach(u=>{const v=u.player;if(v.destroyed)return;const w=u.element,U=this._elementListeners.get(w);U&&U.forEach(fe=>{if(fe.name==u.triggerName){const De=Te(w,u.triggerName,u.fromState.value,u.toState.value);De._data=c,Ge(u.player,fe.phase,De,fe.callback)}}),v.markedForDestroy?this._engine.afterFlush(()=>{v.destroy()}):s.push(u)}),this._queue=[],s.sort((u,v)=>{const w=u.transition.ast.depCount,U=v.transition.ast.depCount;return 0==w||0==U?w-U:this._engine.driver.containsElement(u.element,v.element)?1:-1})}destroy(c){this.players.forEach(s=>s.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,c)}elementContainsData(c){let s=!1;return this._elementListeners.has(c)&&(s=!0),s=!!this._queue.find(u=>u.element===c)||s,s}}class nr{constructor(c,s,u){this.bodyNode=c,this.driver=s,this._normalizer=u,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(v,w)=>{}}_onRemovalComplete(c,s){this.onRemovalComplete(c,s)}get queuedPlayers(){const c=[];return this._namespaceList.forEach(s=>{s.players.forEach(u=>{u.queued&&c.push(u)})}),c}createNamespace(c,s){const u=new Ls(c,s,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,s)?this._balanceNamespaceList(u,s):(this.newHostElements.set(s,u),this.collectEnterElement(s)),this._namespaceLookup[c]=u}_balanceNamespaceList(c,s){const u=this._namespaceList,v=this.namespacesByHostElement,w=u.length-1;if(w>=0){let U=!1;if(void 0!==this.driver.getParentElement){let fe=this.driver.getParentElement(s);for(;fe;){const De=v.get(fe);if(De){const et=u.indexOf(De);u.splice(et+1,0,c),U=!0;break}fe=this.driver.getParentElement(fe)}}else for(let fe=w;fe>=0;fe--)if(this.driver.containsElement(u[fe].hostElement,s)){u.splice(fe+1,0,c),U=!0;break}U||u.unshift(c)}else u.push(c);return v.set(s,c),c}register(c,s){let u=this._namespaceLookup[c];return u||(u=this.createNamespace(c,s)),u}registerTrigger(c,s,u){let v=this._namespaceLookup[c];v&&v.register(s,u)&&this.totalAnimations++}destroy(c,s){if(!c)return;const u=this._fetchNamespace(c);this.afterFlush(()=>{this.namespacesByHostElement.delete(u.hostElement),delete this._namespaceLookup[c];const v=this._namespaceList.indexOf(u);v>=0&&this._namespaceList.splice(v,1)}),this.afterFlushAnimationsDone(()=>u.destroy(s))}_fetchNamespace(c){return this._namespaceLookup[c]}fetchNamespacesByElement(c){const s=new Set,u=this.statesByElement.get(c);if(u){const v=Object.keys(u);for(let w=0;w<v.length;w++){const U=u[v[w]].namespaceId;if(U){const fe=this._fetchNamespace(U);fe&&s.add(fe)}}}return s}trigger(c,s,u,v){if(Xe(s)){const w=this._fetchNamespace(c);if(w)return w.trigger(s,u,v),!0}return!1}insertNode(c,s,u,v){if(!Xe(s))return;const w=s[Ti];if(w&&w.setForRemoval){w.setForRemoval=!1,w.setForMove=!0;const U=this.collectedLeaveElements.indexOf(s);U>=0&&this.collectedLeaveElements.splice(U,1)}if(c){const U=this._fetchNamespace(c);U&&U.insertNode(s,u)}v&&this.collectEnterElement(s)}collectEnterElement(c){this.collectedEnterElements.push(c)}markElementAsDisabled(c,s){s?this.disabledNodes.has(c)||(this.disabledNodes.add(c),Jn(c,Rs)):this.disabledNodes.has(c)&&(this.disabledNodes.delete(c),gi(c,Rs))}removeNode(c,s,u,v){if(Xe(s)){const w=c?this._fetchNamespace(c):null;if(w?w.removeNode(s,v):this.markElementAsRemoved(c,s,!1,v),u){const U=this.namespacesByHostElement.get(s);U&&U.id!==c&&U.removeNode(s,v)}}else this._onRemovalComplete(s,v)}markElementAsRemoved(c,s,u,v,w){this.collectedLeaveElements.push(s),s[Ti]={namespaceId:c,setForRemoval:v,hasAnimation:u,removedBeforeQueried:!1,previousTriggersValues:w}}listen(c,s,u,v,w){return Xe(s)?this._fetchNamespace(c).listen(s,u,v,w):()=>{}}_buildInstruction(c,s,u,v,w){return c.transition.build(this.driver,c.element,c.fromState.value,c.toState.value,u,v,c.fromState.options,c.toState.options,s,w)}destroyInnerAnimations(c){let s=this.driver.query(c,Kt,!0);s.forEach(u=>this.destroyActiveAnimationsForElement(u)),0!=this.playersByQueriedElement.size&&(s=this.driver.query(c,Pn,!0),s.forEach(u=>this.finishActiveQueriedAnimationOnElement(u)))}destroyActiveAnimationsForElement(c){const s=this.playersByElement.get(c);s&&s.forEach(u=>{u.queued?u.markedForDestroy=!0:u.destroy()})}finishActiveQueriedAnimationOnElement(c){const s=this.playersByQueriedElement.get(c);s&&s.forEach(u=>u.finish())}whenRenderingDone(){return new Promise(c=>{if(this.players.length)return ce(this.players).onDone(()=>c());c()})}processLeaveNode(c){const s=c[Ti];if(s&&s.setForRemoval){if(c[Ti]=Pi,s.namespaceId){this.destroyInnerAnimations(c);const u=this._fetchNamespace(s.namespaceId);u&&u.clearElementCache(c)}this._onRemovalComplete(c,s.setForRemoval)}c.classList?.contains(Rs)&&this.markElementAsDisabled(c,!1),this.driver.query(c,".ng-animate-disabled",!0).forEach(u=>{this.markElementAsDisabled(u,!1)})}flush(c=-1){let s=[];if(this.newHostElements.size&&(this.newHostElements.forEach((u,v)=>this._balanceNamespaceList(u,v)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let u=0;u<this.collectedEnterElements.length;u++)Jn(this.collectedEnterElements[u],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const u=[];try{s=this._flushAnimations(u,c)}finally{for(let v=0;v<u.length;v++)u[v]()}}else for(let u=0;u<this.collectedLeaveElements.length;u++)this.processLeaveNode(this.collectedLeaveElements[u]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(u=>u()),this._flushFns=[],this._whenQuietFns.length){const u=this._whenQuietFns;this._whenQuietFns=[],s.length?ce(s).onDone(()=>{u.forEach(v=>v())}):u.forEach(v=>v())}}reportError(c){throw function G(l){return new n.vHH(3402,b)}()}_flushAnimations(c,s){const u=new Mn,v=[],w=new Map,U=[],fe=new Map,De=new Map,et=new Map,wt=new Set;this.disabledNodes.forEach(Dn=>{wt.add(Dn);const Hn=this.driver.query(Dn,".ng-animate-queued",!0);for(let Kn=0;Kn<Hn.length;Kn++)wt.add(Hn[Kn])});const Gt=this.bodyNode,fn=Array.from(this.statesByElement.keys()),kn=pn(fn,this.collectedEnterElements),Sn=new Map;let jn=0;kn.forEach((Dn,Hn)=>{const Kn=an+jn++;Sn.set(Hn,Kn),Dn.forEach(wi=>Jn(wi,Kn))});const vi=[],Mi=new Set,er=new Set;for(let Dn=0;Dn<this.collectedLeaveElements.length;Dn++){const Hn=this.collectedLeaveElements[Dn],Kn=Hn[Ti];Kn&&Kn.setForRemoval&&(vi.push(Hn),Mi.add(Hn),Kn.hasAnimation?this.driver.query(Hn,".ng-star-inserted",!0).forEach(wi=>Mi.add(wi)):er.add(Hn))}const $r=new Map,br=pn(fn,Array.from(Mi));br.forEach((Dn,Hn)=>{const Kn=$t+jn++;$r.set(Hn,Kn),Dn.forEach(wi=>Jn(wi,Kn))}),c.push(()=>{kn.forEach((Dn,Hn)=>{const Kn=Sn.get(Hn);Dn.forEach(wi=>gi(wi,Kn))}),br.forEach((Dn,Hn)=>{const Kn=$r.get(Hn);Dn.forEach(wi=>gi(wi,Kn))}),vi.forEach(Dn=>{this.processLeaveNode(Dn)})});const Ca=[],hs=[];for(let Dn=this._namespaceList.length-1;Dn>=0;Dn--)this._namespaceList[Dn].drainQueuedTransitions(s).forEach(Kn=>{const wi=Kn.player,mr=Kn.element;if(Ca.push(wi),this.collectedEnterElements.length){const Vr=mr[Ti];if(Vr&&Vr.setForMove){if(Vr.previousTriggersValues&&Vr.previousTriggersValues.has(Kn.triggerName)){const Aa=Vr.previousTriggersValues.get(Kn.triggerName),ia=this.statesByElement.get(Kn.element);ia&&ia[Kn.triggerName]&&(ia[Kn.triggerName].value=Aa)}return void wi.destroy()}}const bo=!Gt||!this.driver.containsElement(Gt,mr),ds=$r.get(mr),na=Sn.get(mr),tr=this._buildInstruction(Kn,u,na,ds,bo);if(tr.errors&&tr.errors.length)return void hs.push(tr);if(bo)return wi.onStart(()=>xt(mr,tr.fromStyles)),wi.onDestroy(()=>Ii(mr,tr.toStyles)),void v.push(wi);if(Kn.isFallbackTransition)return wi.onStart(()=>xt(mr,tr.fromStyles)),wi.onDestroy(()=>Ii(mr,tr.toStyles)),void v.push(wi);const yp=[];tr.timelines.forEach(Vr=>{Vr.stretchStartingKeyframe=!0,this.disabledNodes.has(Vr.element)||yp.push(Vr)}),tr.timelines=yp,u.append(mr,tr.timelines),U.push({instruction:tr,player:wi,element:mr}),tr.queriedElements.forEach(Vr=>ae(fe,Vr,[]).push(wi)),tr.preStyleProps.forEach((Vr,Aa)=>{const ia=Object.keys(Vr);if(ia.length){let xa=De.get(Aa);xa||De.set(Aa,xa=new Set),ia.forEach(Mh=>xa.add(Mh))}}),tr.postStyleProps.forEach((Vr,Aa)=>{const ia=Object.keys(Vr);let xa=et.get(Aa);xa||et.set(Aa,xa=new Set),ia.forEach(Mh=>xa.add(Mh))})});if(hs.length){const Dn=[];hs.forEach(Hn=>{Dn.push(function Ce(l,c){return new n.vHH(3505,b)}())}),Ca.forEach(Hn=>Hn.destroy()),this.reportError(Dn)}const jr=new Map,yo=new Map;U.forEach(Dn=>{const Hn=Dn.element;u.has(Hn)&&(yo.set(Hn,Hn),this._beforeAnimationBuild(Dn.player.namespaceId,Dn.instruction,jr))}),v.forEach(Dn=>{const Hn=Dn.element;this._getPreviousPlayers(Hn,!1,Dn.namespaceId,Dn.triggerName,null).forEach(wi=>{ae(jr,Hn,[]).push(wi),wi.destroy()})});const _o=vi.filter(Dn=>Oi(Dn,De,et)),Zs=new Map;ln(Zs,this.driver,er,et,y.l3).forEach(Dn=>{Oi(Dn,De,et)&&_o.push(Dn)});const wa=new Map;kn.forEach((Dn,Hn)=>{ln(wa,this.driver,new Set(Dn),De,y.k1)}),_o.forEach(Dn=>{const Hn=Zs.get(Dn),Kn=wa.get(Dn);Zs.set(Dn,{...Hn,...Kn})});const Ro=[],Th=[],Dh={};U.forEach(Dn=>{const{element:Hn,player:Kn,instruction:wi}=Dn;if(u.has(Hn)){if(wt.has(Hn))return Kn.onDestroy(()=>Ii(Hn,wi.toStyles)),Kn.disabled=!0,Kn.overrideTotalTime(wi.totalTime),void v.push(Kn);let mr=Dh;if(yo.size>1){let ds=Hn;const na=[];for(;ds=ds.parentNode;){const tr=yo.get(ds);if(tr){mr=tr;break}na.push(ds)}na.forEach(tr=>yo.set(tr,mr))}const bo=this._buildAnimation(Kn.namespaceId,wi,jr,w,wa,Zs);if(Kn.setRealPlayer(bo),mr===Dh)Ro.push(Kn);else{const ds=this.playersByElement.get(mr);ds&&ds.length&&(Kn.parentPlayer=ce(ds)),v.push(Kn)}}else xt(Hn,wi.fromStyles),Kn.onDestroy(()=>Ii(Hn,wi.toStyles)),Th.push(Kn),wt.has(Hn)&&v.push(Kn)}),Th.forEach(Dn=>{const Hn=w.get(Dn.element);if(Hn&&Hn.length){const Kn=ce(Hn);Dn.setRealPlayer(Kn)}}),v.forEach(Dn=>{Dn.parentPlayer?Dn.syncPlayerEvents(Dn.parentPlayer):Dn.destroy()});for(let Dn=0;Dn<vi.length;Dn++){const Hn=vi[Dn],Kn=Hn[Ti];if(gi(Hn,$t),Kn&&Kn.hasAnimation)continue;let wi=[];if(fe.size){let bo=fe.get(Hn);bo&&bo.length&&wi.push(...bo);let ds=this.driver.query(Hn,Pn,!0);for(let na=0;na<ds.length;na++){let tr=fe.get(ds[na]);tr&&tr.length&&wi.push(...tr)}}const mr=wi.filter(bo=>!bo.destroyed);mr.length?_i(this,Hn,mr):this.processLeaveNode(Hn)}return vi.length=0,Ro.forEach(Dn=>{this.players.push(Dn),Dn.onDone(()=>{Dn.destroy();const Hn=this.players.indexOf(Dn);this.players.splice(Hn,1)}),Dn.play()}),Ro}elementContainsData(c,s){let u=!1;const v=s[Ti];return v&&v.setForRemoval&&(u=!0),this.playersByElement.has(s)&&(u=!0),this.playersByQueriedElement.has(s)&&(u=!0),this.statesByElement.has(s)&&(u=!0),this._fetchNamespace(c).elementContainsData(s)||u}afterFlush(c){this._flushFns.push(c)}afterFlushAnimationsDone(c){this._whenQuietFns.push(c)}_getPreviousPlayers(c,s,u,v,w){let U=[];if(s){const fe=this.playersByQueriedElement.get(c);fe&&(U=fe)}else{const fe=this.playersByElement.get(c);if(fe){const De=!w||w==yr;fe.forEach(et=>{et.queued||!De&&et.triggerName!=v||U.push(et)})}}return(u||v)&&(U=U.filter(fe=>!(u&&u!=fe.namespaceId||v&&v!=fe.triggerName))),U}_beforeAnimationBuild(c,s,u){const w=s.element,U=s.isRemovalTransition?void 0:c,fe=s.isRemovalTransition?void 0:s.triggerName;for(const De of s.timelines){const et=De.element,wt=et!==w,Gt=ae(u,et,[]);this._getPreviousPlayers(et,wt,U,fe,s.toState).forEach(kn=>{const Sn=kn.getRealPlayer();Sn.beforeDestroy&&Sn.beforeDestroy(),kn.destroy(),Gt.push(kn)})}xt(w,s.fromStyles)}_buildAnimation(c,s,u,v,w,U){const fe=s.triggerName,De=s.element,et=[],wt=new Set,Gt=new Set,fn=s.timelines.map(Sn=>{const jn=Sn.element;wt.add(jn);const vi=jn[Ti];if(vi&&vi.removedBeforeQueried)return new y.ZN(Sn.duration,Sn.delay);const Mi=jn!==De,er=function Ln(l){const c=[];return Ui(l,c),c}((u.get(jn)||Zr).map(jr=>jr.getRealPlayer())).filter(jr=>!!jr.element&&jr.element===jn),$r=w.get(jn),br=U.get(jn),Ca=je(0,this._normalizer,0,Sn.keyframes,$r,br),hs=this._buildPlayer(Sn,Ca,er);if(Sn.subTimeline&&v&&Gt.add(jn),Mi){const jr=new ge(c,fe,jn);jr.setRealPlayer(hs),et.push(jr)}return hs});et.forEach(Sn=>{ae(this.playersByQueriedElement,Sn.element,[]).push(Sn),Sn.onDone(()=>function Ke(l,c,s){let u;if(l instanceof Map){if(u=l.get(c),u){if(u.length){const v=u.indexOf(s);u.splice(v,1)}0==u.length&&l.delete(c)}}else if(u=l[c],u){if(u.length){const v=u.indexOf(s);u.splice(v,1)}0==u.length&&delete l[c]}return u}(this.playersByQueriedElement,Sn.element,Sn))}),wt.forEach(Sn=>Jn(Sn,On));const kn=ce(fn);return kn.onDestroy(()=>{wt.forEach(Sn=>gi(Sn,On)),Ii(De,s.toStyles)}),Gt.forEach(Sn=>{ae(v,Sn,[]).push(kn)}),kn}_buildPlayer(c,s,u){return s.length>0?this.driver.animate(c.element,s,c.duration,c.delay,c.easing,u):new y.ZN(c.duration,c.delay)}}class ge{constructor(c,s,u){this.namespaceId=c,this.triggerName=s,this.element=u,this._player=new y.ZN,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(c){this._containsRealPlayer||(this._player=c,Object.keys(this._queuedCallbacks).forEach(s=>{this._queuedCallbacks[s].forEach(u=>Ge(c,s,void 0,u))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(c.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(c){this.totalTime=c}syncPlayerEvents(c){const s=this._player;s.triggerCallback&&c.onStart(()=>s.triggerCallback("start")),c.onDone(()=>this.finish()),c.onDestroy(()=>this.destroy())}_queueEvent(c,s){ae(this._queuedCallbacks,c,[]).push(s)}onDone(c){this.queued&&this._queueEvent("done",c),this._player.onDone(c)}onStart(c){this.queued&&this._queueEvent("start",c),this._player.onStart(c)}onDestroy(c){this.queued&&this._queueEvent("destroy",c),this._player.onDestroy(c)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(c){this.queued||this._player.setPosition(c)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(c){const s=this._player;s.triggerCallback&&s.triggerCallback(c)}}function Xe(l){return l&&1===l.nodeType}function Vt(l,c){const s=l.style.display;return l.style.display=c??"none",s}function ln(l,c,s,u,v){const w=[];s.forEach(De=>w.push(Vt(De)));const U=[];u.forEach((De,et)=>{const wt={};De.forEach(Gt=>{const fn=wt[Gt]=c.computeStyle(et,Gt,v);(!fn||0==fn.length)&&(et[Ti]=Qs,U.push(et))}),l.set(et,wt)});let fe=0;return s.forEach(De=>Vt(De,w[fe++])),U}function pn(l,c){const s=new Map;if(l.forEach(fe=>s.set(fe,[])),0==c.length)return s;const v=new Set(c),w=new Map;function U(fe){if(!fe)return 1;let De=w.get(fe);if(De)return De;const et=fe.parentNode;return De=s.has(et)?et:v.has(et)?1:U(et),w.set(fe,De),De}return c.forEach(fe=>{const De=U(fe);1!==De&&s.get(De).push(fe)}),s}function Jn(l,c){l.classList?.add(c)}function gi(l,c){l.classList?.remove(c)}function _i(l,c,s){ce(s).onDone(()=>l.processLeaveNode(c))}function Ui(l,c){for(let s=0;s<l.length;s++){const u=l[s];u instanceof y.ZE?Ui(u.players,c):c.push(u)}}function Oi(l,c,s){const u=s.get(l);if(!u)return!1;let v=c.get(l);return v?u.forEach(w=>v.add(w)):c.set(l,u),s.delete(l),!0}class _e{constructor(c,s,u){this.bodyNode=c,this._driver=s,this._normalizer=u,this._triggerCache={},this.onRemovalComplete=(v,w)=>{},this._transitionEngine=new nr(c,s,u),this._timelineEngine=new Os(c,s,u),this._transitionEngine.onRemovalComplete=(v,w)=>this.onRemovalComplete(v,w)}registerTrigger(c,s,u,v,w){const U=c+"-"+v;let fe=this._triggerCache[U];if(!fe){const De=[],wt=Ni(this._driver,w,De,[]);if(De.length)throw function z(l,c){return new n.vHH(3404,b)}();fe=function ks(l,c,s){return new rs(l,c,s)}(v,wt,this._normalizer),this._triggerCache[U]=fe}this._transitionEngine.registerTrigger(s,v,fe)}register(c,s){this._transitionEngine.register(c,s)}destroy(c,s){this._transitionEngine.destroy(c,s)}onInsert(c,s,u,v){this._transitionEngine.insertNode(c,s,u,v)}onRemove(c,s,u,v){this._transitionEngine.removeNode(c,s,v||!1,u)}disableAnimations(c,s){this._transitionEngine.markElementAsDisabled(c,s)}process(c,s,u,v){if("@"==u.charAt(0)){const[w,U]=ee(u);this._timelineEngine.command(w,s,U,v)}else this._transitionEngine.trigger(c,s,u,v)}listen(c,s,u,v,w){if("@"==u.charAt(0)){const[U,fe]=ee(u);return this._timelineEngine.listen(U,s,fe,w)}return this._transitionEngine.listen(c,s,u,v,w)}flush(c=-1){this._transitionEngine.flush(c)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}let se=(()=>{class l{constructor(s,u,v){this._element=s,this._startStyles=u,this._endStyles=v,this._state=0;let w=l.initialStylesByElement.get(s);w||l.initialStylesByElement.set(s,w={}),this._initialStyles=w}start(){this._state<1&&(this._startStyles&&Ii(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Ii(this._element,this._initialStyles),this._endStyles&&(Ii(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(l.initialStylesByElement.delete(this._element),this._startStyles&&(xt(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(xt(this._element,this._endStyles),this._endStyles=null),Ii(this._element,this._initialStyles),this._state=3)}}return l.initialStylesByElement=new WeakMap,l})();function Ze(l){let c=null;const s=Object.keys(l);for(let u=0;u<s.length;u++){const v=s[u];Nt(v)&&(c=c||{},c[v]=l[v])}return c}function Nt(l){return"display"===l||"position"===l}class An{constructor(c,s,u,v){this.element=c,this.keyframes=s,this.options=u,this._specialStyles=v,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=u.duration,this._delay=u.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(c=>c()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const c=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,c,this.options),this._finalKeyframe=c.length?c[c.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(c,s,u){return c.animate(s,u)}onStart(c){this._onStartFns.push(c)}onDone(c){this._onDoneFns.push(c)}onDestroy(c){this._onDestroyFns.push(c)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(c=>c()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(c=>c()),this._onDestroyFns=[])}setPosition(c){void 0===this.domPlayer&&this.init(),this.domPlayer.currentTime=c*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const c={};if(this.hasStarted()){const s=this._finalKeyframe;Object.keys(s).forEach(u=>{"offset"!=u&&(c[u]=this._finished?s[u]:It(this.element,u))})}this.currentSnapshot=c}triggerCallback(c){const s="start"==c?this._onStartFns:this._onDoneFns;s.forEach(u=>u()),s.length=0}}class ei{validateStyleProperty(c){return we(c)}matchesElement(c,s){return!1}containsElement(c,s){return ye(c,s)}getParentElement(c){return ut(c)}query(c,s,u){return Me(c,s,u)}computeStyle(c,s,u){return window.getComputedStyle(c)[s]}animate(c,s,u,v,w,U=[]){const De={duration:u,delay:v,fill:0==v?"both":"forwards"};w&&(De.easing=w);const et={},wt=U.filter(fn=>fn instanceof An);(function Lt(l,c){return 0===l||0===c})(u,v)&&wt.forEach(fn=>{let kn=fn.currentSnapshot;Object.keys(kn).forEach(Sn=>et[Sn]=kn[Sn])}),s=function He(l,c,s){const u=Object.keys(s);if(u.length&&c.length){let w=c[0],U=[];if(u.forEach(fe=>{w.hasOwnProperty(fe)||U.push(fe),w[fe]=s[fe]}),U.length)for(var v=1;v<c.length;v++){let fe=c[v];U.forEach(function(De){fe[De]=It(l,De)})}}return c}(c,s=s.map(fn=>yi(fn,!1)),et);const Gt=function ue(l,c){let s=null,u=null;return Array.isArray(c)&&c.length?(s=Ze(c[0]),c.length>1&&(u=Ze(c[c.length-1]))):c&&(s=Ze(c)),s||u?new se(l,s,u):null}(c,s);return new An(c,s,De,Gt)}}var tn=d(36895);let ys=(()=>{class l extends y._j{constructor(s,u){super(),this._nextAnimationId=0,this._renderer=s.createRenderer(u.body,{id:"0",encapsulation:n.ifc.None,styles:[],data:{animation:[]}})}build(s){const u=this._nextAnimationId.toString();this._nextAnimationId++;const v=Array.isArray(s)?(0,y.vP)(s):s;return Fs(this._renderer,null,u,"register",[v]),new Xs(u,this._renderer)}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(n.FYo),n.LFG(tn.K0))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac}),l})();class Xs extends y.LC{constructor(c,s){super(),this._id=c,this._renderer=s}create(c,s){return new sl(this._id,c,s||{},this._renderer)}}class sl{constructor(c,s,u,v){this.id=c,this.element=s,this._renderer=v,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",u)}_listen(c,s){return this._renderer.listen(this.element,`@@${this.id}:${c}`,s)}_command(c,...s){return Fs(this._renderer,this.element,this.id,c,s)}onDone(c){this._listen("done",c)}onStart(c){this._listen("start",c)}onDestroy(c){this._listen("destroy",c)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(c){this._command("setPosition",c)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}}function Fs(l,c,s,u,v){return l.setProperty(c,`@@${s}:${u}`,v)}const qs="@.disabled";let ol=(()=>{class l{constructor(s,u,v){this.delegate=s,this.engine=u,this._zone=v,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),u.onRemovalComplete=(w,U)=>{const fe=U?.parentNode(w);fe&&U.removeChild(fe,w)}}createRenderer(s,u){const w=this.delegate.createRenderer(s,u);if(!(s&&u&&u.data&&u.data.animation)){let wt=this._rendererCache.get(w);return wt||(wt=new rn("",w,this.engine),this._rendererCache.set(w,wt)),wt}const U=u.id,fe=u.id+"-"+this._currentId;this._currentId++,this.engine.register(fe,s);const De=wt=>{Array.isArray(wt)?wt.forEach(De):this.engine.registerTrigger(U,fe,s,wt.name,wt)};return u.data.animation.forEach(De),new ri(this,fe,w,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(s,u,v){s>=0&&s<this._microtaskId?this._zone.run(()=>u(v)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(w=>{const[U,fe]=w;U(fe)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([u,v]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(n.FYo),n.LFG(_e),n.LFG(n.R0b))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac}),l})();class rn{constructor(c,s,u){this.namespaceId=c,this.delegate=s,this.engine=u,this.destroyNode=this.delegate.destroyNode?v=>s.destroyNode(v):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(c,s){return this.delegate.createElement(c,s)}createComment(c){return this.delegate.createComment(c)}createText(c){return this.delegate.createText(c)}appendChild(c,s){this.delegate.appendChild(c,s),this.engine.onInsert(this.namespaceId,s,c,!1)}insertBefore(c,s,u,v=!0){this.delegate.insertBefore(c,s,u),this.engine.onInsert(this.namespaceId,s,c,v)}removeChild(c,s,u){this.engine.onRemove(this.namespaceId,s,this.delegate,u)}selectRootElement(c,s){return this.delegate.selectRootElement(c,s)}parentNode(c){return this.delegate.parentNode(c)}nextSibling(c){return this.delegate.nextSibling(c)}setAttribute(c,s,u,v){this.delegate.setAttribute(c,s,u,v)}removeAttribute(c,s,u){this.delegate.removeAttribute(c,s,u)}addClass(c,s){this.delegate.addClass(c,s)}removeClass(c,s){this.delegate.removeClass(c,s)}setStyle(c,s,u,v){this.delegate.setStyle(c,s,u,v)}removeStyle(c,s,u){this.delegate.removeStyle(c,s,u)}setProperty(c,s,u){"@"==s.charAt(0)&&s==qs?this.disableAnimations(c,!!u):this.delegate.setProperty(c,s,u)}setValue(c,s){this.delegate.setValue(c,s)}listen(c,s,u){return this.delegate.listen(c,s,u)}disableAnimations(c,s){this.engine.disableAnimations(c,s)}}class ri extends rn{constructor(c,s,u,v){super(s,u,v),this.factory=c,this.namespaceId=s}setProperty(c,s,u){"@"==s.charAt(0)?"."==s.charAt(1)&&s==qs?this.disableAnimations(c,u=void 0===u||!!u):this.engine.process(this.namespaceId,c,s.substr(1),u):this.delegate.setProperty(c,s,u)}listen(c,s,u){if("@"==s.charAt(0)){const v=function oa(l){switch(l){case"body":return document.body;case"document":return document;case"window":return window;default:return l}}(c);let w=s.substr(1),U="";return"@"!=w.charAt(0)&&([w,U]=function zi(l){const c=l.indexOf(".");return[l.substring(0,c),l.substr(c+1)]}(w)),this.engine.listen(this.namespaceId,v,w,U,fe=>{this.factory.scheduleListenerCallback(fe._data||-1,u,fe)})}return this.delegate.listen(c,s,u)}}let Ea=(()=>{class l extends _e{constructor(s,u,v){super(s.body,u,v)}ngOnDestroy(){this.flush()}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(tn.K0),n.LFG(lt),n.LFG(Gr))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac}),l})();const Eo=new n.OlP("AnimationModuleType"),Ho=[{provide:y._j,useClass:ys},{provide:Gr,useFactory:function _s(){return new Tr}},{provide:_e,useClass:Ea},{provide:n.FYo,useFactory:function Nr(l,c,s){return new ol(l,c,s)},deps:[f.se,_e,n.R0b]}],Sa=[{provide:lt,useFactory:()=>new ei},{provide:Eo,useValue:"BrowserAnimations"},...Ho],al=[{provide:lt,useClass:st},{provide:Eo,useValue:"NoopAnimations"},...Ho];let ss=(()=>{class l{static withConfig(s){return{ngModule:l,providers:s.disableAnimations?al:Sa}}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({providers:Sa,imports:[f.b2]}),l})(),Qi=(()=>{class l{constructor(s,u){this.document=s,this.platformId=u,this.documentIsAccessible=(0,tn.NF)(this.platformId)}static getCookieRegExp(s){const u=s.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+u+"|;\\s*"+u+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(s){try{return decodeURIComponent(s)}catch{return s}}check(s){return!!this.documentIsAccessible&&(s=encodeURIComponent(s),l.getCookieRegExp(s).test(this.document.cookie))}get(s){if(this.documentIsAccessible&&this.check(s)){s=encodeURIComponent(s);const v=l.getCookieRegExp(s).exec(this.document.cookie);return v[1]?l.safeDecodeURIComponent(v[1]):""}return""}getAll(){if(!this.documentIsAccessible)return{};const s={},u=this.document;return u.cookie&&""!==u.cookie&&u.cookie.split(";").forEach(v=>{const[w,U]=v.split("=");s[l.safeDecodeURIComponent(w.replace(/^ /,""))]=l.safeDecodeURIComponent(U)}),s}set(s,u,v,w,U,fe,De){if(!this.documentIsAccessible)return;if("number"==typeof v||v instanceof Date||w||U||fe||De)return void this.set(s,u,{expires:v,path:w,domain:U,secure:fe,sameSite:De||"Lax"});let et=encodeURIComponent(s)+"="+encodeURIComponent(u)+";";const wt=v||{};wt.expires&&(et+="number"==typeof wt.expires?"expires="+new Date((new Date).getTime()+1e3*wt.expires*60*60*24).toUTCString()+";":"expires="+wt.expires.toUTCString()+";"),wt.path&&(et+="path="+wt.path+";"),wt.domain&&(et+="domain="+wt.domain+";"),!1===wt.secure&&"None"===wt.sameSite&&(wt.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${s} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),wt.secure&&(et+="secure;"),wt.sameSite||(wt.sameSite="Lax"),et+="sameSite="+wt.sameSite+";",this.document.cookie=et}delete(s,u,v,w,U="Lax"){if(!this.documentIsAccessible)return;const fe=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(s,"",{expires:fe,path:u,domain:v,secure:w,sameSite:U})}deleteAll(s,u,v,w="Lax"){if(!this.documentIsAccessible)return;const U=this.getAll();for(const fe in U)U.hasOwnProperty(fe)&&this.delete(fe,s,u,v,w)}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(tn.K0),n.LFG(n.Lbi))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var Dr=d(92198),to=d(80529),bs=d(27801),En=d(22465),Ta=d(19832),ui=d(58490),Cn=d(59680);const Cs={locales:["en","fr","cs"],production:!0};var Bo=d(22868),yn=d(97520),Yr=d(48910),Mr=d(97963),cr=d(74937),ur=d(49671);let Jr=(()=>{class l{constructor(s,u){this.configurationService=s,this.router=u,this.headerName="X-Recaptcha-Token",this.scriptId="reCaptcha",this.enabled=!1,this.loaded=!1,this.display=!1,this.router.events.pipe((0,Dr.h)(v=>v instanceof En.m2)).subscribe(()=>{this.hideBadge()})}load(){const s=this;return this.enabled=this.configurationService.get("recaptcha.enabled"),this.siteKey=this.configurationService.get("recaptcha.siteKey"),new Promise((u,v)=>{if(this.enabled&&!document.getElementById(this.scriptId))if(this.siteKey){const w=document.createElement("script");w.id=this.scriptId,w.src=`https://www.google.com/recaptcha/api.js?render=${this.siteKey}`,w.async=!0,w.onload=()=>grecaptcha.ready(()=>{u({}),s.loaded=!0,s.displayOrHideBadge()}),document.head.appendChild(w)}else v("[reCaptchaService] Missing public site_key");else u({})})}execute(s){var u=this;return(0,ur.Z)(function*(){return u.enabled?(u.loaded||(yield u.load()),grecaptcha.execute(u.siteKey,{action:s}).then(v=>{u.reCaptchaToken=v})):Promise.resolve(null)})()}getCurrentToken(){return this.reCaptchaToken}getHeaderName(){return this.headerName}isEnabled(){return this.enabled}displayBadge(){this.display=!0,this.enabled&&this.loaded&&document.getElementsByClassName("grecaptcha-badge")[0].style.setProperty("visibility","initial")}hideBadge(){this.display=!1,this.enabled&&this.loaded&&document.getElementsByClassName("grecaptcha-badge")[0].style.setProperty("visibility","collapse","important")}displayOrHideBadge(){!0===this.display?this.displayBadge():this.hideBadge()}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(cr.e),n.LFG(En.F0))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();const Ns=["errors.rating.disabled","errors.analytics.calculate","errors.identityProvider.notFound"],Da=["/user/notifications"];class Uo{constructor(c=0){this.timeouts=[],this.delay=c}push(c){this.timeouts.push(setTimeout(()=>c(),this.delay))}cancel(){this.timeouts.forEach(c=>clearTimeout(c)),this.timeouts=[]}}let aa=(()=>{class l{constructor(s,u,v,w,U){this.router=s,this.currentUserService=u,this.notificationService=v,this.configService=w,this.reCaptchaService=U}intercept(s,u){const v={"X-Requested-With":"XMLHttpRequest"};this.xsrfToken&&(v["X-Xsrf-Token"]=this.xsrfToken);const w=this.reCaptchaService.getCurrentToken();return w&&(v["X-Recaptcha-Token"]=w),s=s.clone({setHeaders:v,withCredentials:!0}),u.handle(s).pipe((0,Bo.b)(U=>{s.url.endsWith("_export")&&(s.responseType="text"),U instanceof to.Zn&&this.saveXsrfToken(U)},U=>{const fe=new Uo,De=Da.find(et=>U.url.includes(et));if(U instanceof to.UA&&(this.saveXsrfToken(U),0===U.status?De||this.notificationService.error((0,yn.J)("errors.server.unavailable")):401===U.status?this.currentUserService.revokeUser():404===U.status&&!Ns.includes(U.error.errors[0].code)&&!De&&fe.push(()=>this.router.navigate(["/404"])),U.error&&U.error.errors)){const et=U.error.errors[0];!Ns.includes(et.code)&&!De&&fe.push(()=>this.notificationService.error(et.code,et.parameters,et.message)),"503"===et.status&&this.configService.load()}fe&&(U.interceptorFuture=fe)}))}saveXsrfToken(s){const u=s.headers.get("X-Xsrf-Token");null!==u&&(this.xsrfToken=u)}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(En.F0),n.LFG(Yr.S),n.LFG(Mr.g),n.LFG(cr.e),n.LFG(Jr))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac}),l})();d(26967);var no=d(48498),Hs=d(21033),sr=d(14451),si=d(98539),$i=d(87567),Bs=d(62967),_r=d(79313),Wi=(d(19007),d(67278));window.customElements.define("gv-link",class Ma extends E.oi{static get properties(){return{active:{type:Boolean,reflect:!0},icon:{type:String},path:{type:String},title:{type:String},target:{type:String},_title:{type:String,attribute:!1},help:{type:String},skeleton:{type:Boolean},small:{type:Boolean}}}static get styles(){return[sr.p,E.iv`
        :host {
          display: inline-flex;
          vertical-align: middle;
          --gv-icon--s: var(--gv-link-icon--s, 24px);
          --link-active--c: var(--gv-link-active--c, var(--gv-theme-font-color-light, #ffffff));
          --link--c: var(--gv-link--c, var(--gv-theme-font-color-dark, #262626));
          --pv: var(--gv-link-a--pv, 15px);
          --ph: var(--gv-link-a--ph, 15px);
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        a {
          opacity: 1;
          padding: var(--pv) var(--ph);
          color: var(--link--c);
          background-color: var(--gv-link--bgc, transparent);
          width: 100%;
          display: inline-flex;
          align-content: center;
          text-align: var(--gv-link--ta, center);
          text-shadow: var(--gv-link--tsh, none);
          border-color: var(--gv-link--bgc, transparent);
          border-style: var(--gv-link-active--bds, none);
          border-width: var(--gv-link-active--bdw, none);
        }

        a > * {
          align-self: center;
        }

        .active {
          color: var(--link-active--c);
          background-color: var(--gv-link-active--bgc, var(--gv-theme-color-dark, #28444f));
          border-color: var(--gv-link-active--bdc, none);
        }

        .link.active:hover {
          opacity: 1;
        }

        a span,
        a gv-icon {
          align-self: center;
        }

        a span {
          flex: 1;
          align-self: center;
          white-space: nowrap;
          margin: 0.3rem 0.5rem;
          text-decoration: var(--gv-link--td, none);
          text-overflow: ellipsis;
          overflow: hidden;
        }

        a.small span {
          margin: 0.3rem 0;
          width: 0;
          visibility: hidden;
        }

        .help {
          margin: 0 0.2rem;
          opacity: 0.5;
          font-size: var(--gv-theme-font-size-xs, 10px);
        }

        .help::before {
          content: '(';
        }

        .help::after {
          content: ')';
        }

        .skeleton {
          min-width: 100px;
          margin: 0 0.2rem;
          opacity: 0.5;
        }
      `,Hs.F]}_onClick(c){return function(l,c,s,u){return new(s||(s=Promise))(function(w,U){function fe(wt){try{et(u.next(wt))}catch(Gt){U(Gt)}}function De(wt){try{et(u.throw(wt))}catch(Gt){U(Gt)}}function et(wt){wt.done?w(wt.value):function v(w){return w instanceof s?w:new s(function(U){U(w)})}(wt.value).then(fe,De)}et((u=u.apply(l,c||[])).next())})}(this,void 0,void 0,function*(){c.preventDefault(),(0,_r.h)(this,"click",{active:this.active,icon:this.icon,path:this.path,title:this._title,target:this.target})})}set title(c){Promise.resolve(c).then(s=>{this._title=s}).catch(s=>{})}render(){const s=this.active?{"--gv-icon--c":"var(--link-active--c)","--gv-icon-opacity--c":"var(--link-active--c)"}:{"--gv-icon--c":"var(--link--c)","--gv-icon-opacity--c":"var(--link--c)"};return E.dy`
      <a
        @click=${this._onClick}
        class="${(0,si.$)({active:this.active,link:!0,skeleton:this.skeleton,small:this.small})}"
        .href="${(0,Wi.o)(this.path)}"
        .target="${(0,Wi.o)(this.target)}"
        ?title="${(0,Bs.C)(this._title,"")}"
      >
        ${this.icon?E.dy`<gv-icon shape=${this.icon} style=${(0,$i.V)(s)}></gv-icon>`:""}
        <span>${(0,Bs.C)(this._title,"")}${this.help?E.dy`<span class="help">${(0,Bs.C)(this.help,"")}</span>`:""}</span>
      </a>
    `}});var Pr=d(22385);window.customElements.define("gv-nav",class xs extends E.oi{static get properties(){return{routes:{type:Array},_routes:{type:Array},small:{type:Boolean},_compact:{type:Boolean,attribute:!1},vertical:{type:Boolean,reflect:!0}}}static get styles(){return[E.iv`
        nav {
          position: relative;
          transition: all 150ms ease-in-out;
        }

        gv-link {
          --gv-link--ta: end;
        }

        .vertical {
          display: flex;
          flex-direction: column;
        }

        .vertical gv-link {
          width: 100%;
        }

        .compact {
          --gv-link-a--ph: 10px;
        }

        #shadowLink {
          position: absolute;
          display: inline-flex;
          opacity: 0.5;
          top: 0;
          left: 0;
          transition: transform 250ms ease-in-out, width 250ms;
        }
      `]}_onClick(c){c.stopPropagation();const{detail:s}=c,{title:u,target:v}=s;if("_blank"===v)(0,_r.h)(this,"click",s);else if(!this._isLocked){this._isLocked=!0;let w=0;this._routes.forEach((De,et)=>(De.title===u?(De.active=!0,w=et):delete De.active,De));const U=this.shadowRoot.querySelector("gv-link[active]"),fe=this.shadowRoot.querySelectorAll("gv-link")[w];if(U){const De=U.cloneNode(!0),{height:et,width:wt}=U.getBoundingClientRect();De.id="shadowLink",De.style.top=`${U.offsetTop}px`,De.style.left=`${U.offsetLeft}px`,De.style.width=`${wt}px`,De.style.height=`${et}px`,U.removeAttribute("active"),U.style.height=`${et}px`,this.shadowRoot.querySelector("nav").prepend(De),De.style.transform=`translate(${fe.offsetLeft-U.offsetLeft}px,${fe.offsetTop-U.offsetTop}px)`,setTimeout(()=>{fe.setAttribute("active",!0),this.shadowRoot.querySelector("nav").removeChild(De),this._isLocked=!1,(0,_r.h)(this,"click",s)},250)}else fe.setAttribute("active",!0),this._isLocked=!1,(0,_r.h)(this,"click",s)}}constructor(){super(),this._routes=[],this.vertical=!1}set routes(c){c&&Promise.resolve(c).then(s=>{(0,Pr.YW)(this._routes,s)||(this._routes=s)})}_getLink(c,s){return Promise.resolve(c).then(u=>E.dy` <gv-link
          @gv-link:click=${this._onClick}
          .active="${u.active}"
          .icon="${u.icon}"
          .path="${u.path}"
          .target="${u.target}"
          ?small="${this.small}"
          .title="${u.title}"
          .help="${(0,Bs.C)(u.help,null)}"
          ?vertical="${this.vertical}"
        ></gv-link>`).catch(()=>{delete this._routes[s]})}updated(c){c.has("_routes")&&(this._compact=this._routes&&this._routes.length>5)}render(){return this._routes?E.dy`<nav class="${(0,si.$)({compact:this._compact,vertical:this.vertical})}">
        ${(0,no.r)(this._routes,c=>c,(c,s)=>(0,Bs.C)(this._getLink(c,s),E.dy`<gv-link skeleton .vertical="${this.vertical}"></gv-link>`))}
      </nav>`:E.dy``}});var Hr=d(43830);class Us extends((0,Hr.P)(E.oi)){static get properties(){return{routes:{type:Array},sticky:{type:Boolean,reflect:!0},_small:{type:Boolean,attribute:!1},_routes:{type:Array,attribute:!1},_hasHeader:{type:Boolean,attribute:!1}}}static get styles(){return[E.iv`
        :host {
          --gv-link--c: var(--gv-menu--c, var(--gv-theme-font-color-light, #ffffff));
          --gv-link-active--c: var(--gv-menu--c, var(--gv-theme-font-color-light, #ffffff));
          --gv-link--bgc: var(--gv-menu-link--bgc, transparent);
          --gv-link-active--bgc: var(--gv-menu-link-active--bgc, transparent);
          --gv-link-active--bdc: var(--gv-menu-link-active--bdc, var(--gv-theme-color-light, #86c3d0));
          --gv-link-active--bds: var(--gv-menu-link-active--bds, solid);
          --gv-link-active--bdw: var(--gv-menu-link-active--bdw, 0 0 3px 0);
          --pr: var(--gv-theme-layout--pr, 4rem);
          --pl: var(--gv-theme-layout--pl, 4rem);
          box-sizing: border-box;
          display: block;
          font-size: var(--gv-theme-font-size-s, 12px);
        }

        :host([sticky]) gv-nav {
          line-height: 14px;
          --gv-link-icon--s: 20px;
        }

        :host([sticky]) .has-header gv-nav {
          line-height: 34px;
        }

        :host([sticky]) ::slotted([slot='top']) {
          transition: height 250ms ease-in-out;
        }

        :host([w-lt-1024]) {
          --pr: 5px;
          --pl: 5px;
        }

        :host([w-lt-768]) .nav-container {
          width: 100%;
          padding-left: var(--pl);
          --gv-link-a--pv: var(--gv-menu-link-a--pv, 0px);
        }

        :host([w-lt-580]) .nav-container {
          flex: auto;
          padding-left: 0;
        }

        :host([w-lt-580]) gv-nav {
          flex: auto;
        }

        :host([w-lt-580]) .right {
          flex: auto;
        }

        :host([w-lt-380]) .nav-container {
          display: flex;
          flex-direction: column-reverse;
        }

        :host([w-lt-380]) gv-nav {
          align-self: flex-start;
          flex: 1;
        }

        :host([w-lt-380]) .right {
          align-self: flex-end;
          flex: 1;
          width: 100%;
          padding-right: 0;
        }

        gv-nav {
          display: table-cell;
          line-height: 50px;
          vertical-align: middle;
        }

        .nav-container {
          display: grid;
          grid-template-columns: auto auto;
          background-color: var(--gv-menu--bgc, var(--gv-theme-color-dark, #28444f));
          color: var(--gv-menu--c, var(--gv-theme-font-color-light, #ffffff));
        }

        .has-header .nav-container {
          width: calc(100% - 10rem);
          padding-left: 10rem;
          --gv-link-a--pv: 0;
        }

        :host([sticky]) .has-header .nav-container {
          width: calc(100% - 5rem);
          padding-left: 5rem;
          transition: all 250ms ease-in-out;
        }

        .right {
          display: flex;
          padding-right: var(--pr);
          justify-content: center;
          flex-direction: column;
        }

        gv-nav {
          padding-left: var(--pl);
          transition: width 250ms ease-in-out;
        }

        slot[name='right-transition'],
        slot[name='right'] {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }

        .right ::slotted([slot='right']),
        .right ::slotted([slot='right-transition']) {
          align-self: center;
        }

        .right ::slotted([slot='right-transition']) {
          transition: width 250ms ease 250ms;
          width: 70%;
        }

        .right:focus-within ::slotted([slot='right-transition']) {
          animation: slide 250ms 250ms;
          transition: width 250ms ease-in-out 250ms;
          width: 100%;
        }

        .right ::slotted([slot='right']) {
          --gv-button--p: 7px 16px;
          --gv-button--fz: 15px;
        }
      `]}constructor(){super(),this._routes=[],this.sticky=!1,this.breakpoints={width:[380,580,768,1024]}}set routes(c){c?Promise.resolve(c).then(s=>{s?Promise.all(s).then(u=>{(0,Pr.YW)(this._routes,u)||(this._routes=u)}):this._routes=[]}):this._routes=[]}onResize({width:c}){this._small=c<=1024}render(){return E.dy`
      <div class="${(0,si.$)({"has-header":this._hasHeader})}">
        <slot name="top"></slot>
        <div class="nav-container">
          <gv-nav .routes="${this._routes}" ?small="${this._small}"></gv-nav>
          <div class="right"><slot name="right-transition"></slot><slot name="right"></slot></div>
        </div>
      </div>
    `}updated(c){super.updated(c);let s=!1;for(const u of this.childNodes)if(1===u.nodeType){const v="gv-header"===u.nodeName.toLowerCase()?u:u.querySelector("gv-header");if(v){v.sticky=this.sticky,s=!0;break}}this._hasHeader=s}}window.customElements.define("gv-menu",Us);var $o=d(92266),So=function(l,c,s,u){var U,v=arguments.length,w=v<3?c:null===u?u=Object.getOwnPropertyDescriptor(c,s):u;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(l,c,s,u);else for(var fe=l.length-1;fe>=0;fe--)(U=l[fe])&&(w=(v<3?U(w):v>3?U(c,s,w):U(c,s))||w);return v>3&&w&&Object.defineProperty(c,s,w),w};let Ir=class extends E.oi{constructor(){super(...arguments),this._close=!1,this.closable=!1,this.type=""}_onClick(){this._close=!0,setTimeout(()=>{(0,_r.h)(this,"close")},250)}render(){return E.dy`
      <div class=${(0,si.$)({box:!0,simple:!this.type||"info"!==this.type&&"success"!==this.type&&"error"!==this.type&&"warning"!==this.type,info:"info"===this.type,warning:"warning"===this.type,success:"success"===this.type,error:"error"===this.type,close:this._close})}>
        <div class="content">
          <slot></slot>
        </div>
        ${this.closable?E.dy`<gv-icon shape="general:close" @click="${this._onClick}"></gv-icon>`:""}
      </div>
    `}};Ir.styles=E.iv`
    :host {
      display: block;
      vertical-align: middle;
    }

    .box {
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      padding: 12px 0px;
      text-align: center;
      width: 100%;
    }

    .info {
      background-color: var(--gv-theme-color-info-light, #64b5f6);
    }

    .success {
      background-color: var(--gv-theme-color-success-light, #81c784);
    }

    .warning {
      background-color: var(--gv-theme-color-warning-light, #ffb74d);
    }

    .error {
      background-color: var(--gv-theme-color-error-light, #e57373);
    }

    .close {
      transition: opacity 250ms ease-in-out;
      opacity: 0;
    }

    gv-icon {
      --gv-icon--s: 24px;
      margin-right: 12px;
    }

    gv-icon:hover {
      cursor: pointer;
    }
    .content {
      flex: 1 1 auto;
      margin-left: 12px;
    }
  `,So([(0,$o.Cb)()],Ir.prototype,"closable",void 0),So([(0,$o.Cb)()],Ir.prototype,"type",void 0),Ir=So([(0,$o.Mo)("gv-message")],Ir),window.customElements.define("gv-user-menu",class $s extends E.oi{static get properties(){return{avatar:{type:String},routes:{type:Array},_routes:{type:Array,attribute:!1},_isClosed:{type:Boolean,attribute:!1},username:{type:String}}}static get styles(){return[E.iv`
        :host {
          --bdc: var(--gv-user-menu--bdc, lightgrey);
          --c: var(--gv-user-menu--c, var(--gv-theme-font-color-dark, #262626));
          --bgc: var(--gv-user-menu--bgc, transparent);
          --list-bgc: var(--gv-user-menu-list--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          --hover-bgc: var(--gv-user-menu-hover--bgc, var(--gv-theme-color-light, #86c3d0));
          --gv-link-active--c: var(--gv-user-menu-hover--c, var(--gv-theme-color-dark, #28444f));
          --gv-icon--c: var(--gv-user-menu-icon--c, var(--gv-theme-neutral-color-darkest, #000000));
          --gv-icon--s: var(--gv-user-menu-icon--s, 16px);
          --gv-link-a--ph: var(--gv-user-menu-link-a--ph, 0px);
          --gv-link--ta: var(--gv-user-menu-link--ta, right);
          user-select: none;
        }

        .user-menu {
          list-style: none;
          margin: 0;
          padding: 0;
          display: inline-block;
          position: relative;
        }

        .user-menu__title {
          background-color: var(--bgc);
          border-left: 1px solid var(--bdc);
          color: var(--c);
          cursor: pointer;
          line-height: 40px;
          padding: 8px 24px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          min-width: 175px;
          text-shadow: var(--gv-user-menu--tsh, none);
        }

        ::slotted(*) {
          height: 40px;
          width: 40px;
        }

        .user-menu__title.no-user {
          padding: 5px 24px;
        }

        .user-menu__title gv-link {
          --gv-link-a--ph: 0;
          --gv-link-a--pv: 0;
        }

        .user-menu__title span {
          flex: 1;
          text-align: center;
          margin: 0 0.4rem;
        }

        .user-menu__title > gv-icon {
          transition: all 0.3s ease 0s;
        }

        .user-menu__list {
          position: absolute;
          background-color: var(--list-bgc);
          list-style: none;
          padding: 0;
          transition: all 0.3s ease 0s;
          width: 100%;
        }

        .user-menu__list__item {
          border-left: 1px solid var(--bdc);
          display: flex;
          align-items: center;
          transition: all 0.5s ease;
          padding: 2px 30px;
        }

        .user-menu__list__item:last-child {
          border-bottom: 1px solid var(--bdc);
        }

        .user-menu__list__item:hover {
          background-color: var(--hover-bgc);
          border-left: 1px dotted var(--bdc);
          font-weight: 500;
        }

        gv-link {
          margin: 0px;
          display: flex;
          width: 100%;
        }

        .separator {
          border-top: 1px solid var(--bdc);
        }

        .active {
          background-color: var(--gv-theme-neutral-color-dark, #d9d9d9);
          font-weight: bold;
        }

        /** for animations */
        .user-menu__list {
          visibility: visible;
          opacity: 1;
          transform: translateY(0%);
          z-index: 100;
          transition-delay: 0s, 0s, 0.2s;
        }

        .user-menu__list__group {
          border-top: 1px solid var(--bdc);
          background-color: var(--gv-theme-neutral-color-light, #efefef);
          padding-left: 0;
        }

        .user-menu__list__group__title {
          font-size: small;
          color: var(--gv-theme-color-darker, #383e3f);
          border-left: 1px solid var(--bdc);
          padding-left: 10px;
        }

        .closed .user-menu__list {
          visibility: hidden;
          opacity: 0;
          transform: translateY(-2em);
          z-index: -1;
        }

        gv-icon {
          transform: rotate(0deg);
        }

        .closed gv-icon {
          transform: rotate(-180deg);
        }
      `]}constructor(){super(),this._isClosed=!0}_onClick(c){c.preventDefault(),this._isClosed=!this._isClosed}_onMouseLeave(){this._isClosed=!0}_onSelect(){this._isClosed=!0}_hasOneItem(){return null==this.username&&this._routes&&1===this._routes.length}set routes(c){c?Promise.resolve(c).then(s=>{s?Promise.all(s).then(u=>{(0,Pr.YW)(this._routes,u)||(this._routes=u.filter(v=>null!=v))}):this._routes=null}):this._routes=null}_renderFirstItem(){if(this._routes){if(this.username)return E.dy`<li class="user-menu__title" @click=${this._onClick}>
          <div>
            <slot></slot>
          </div>
          <span>${this.username}</span>
          <gv-icon shape="design:triangle"></gv-icon>
        </li>`;if(this._hasOneItem()){const c=this._routes[0];return E.dy`<li class="user-menu__title no-user" @click=${this._onClick}>
          <gv-link .icon="${c.icon}" .path="${c.path}" .title="${c.title}" @click=${this._onSelect}></gv-link>
        </li>`}}return E.dy``}render(){return this._routes?E.dy`
        <nav class="${(0,si.$)({closed:this._isClosed})}">
          <ul class="user-menu" @mouseleave=${this._onMouseLeave}>
            ${this._renderFirstItem()}

            <li class="user-menu__content">
              <ul class="user-menu__list">
                ${(0,no.r)(this._routes,s=>s,(s,u)=>E.dy` ${this._hasOneItem()?E.dy``:this._renderItem(s)} `)}
              </ul>
            </li>
          </ul>
        </nav>
      `:E.dy``}_renderItem(c){return c.routes?E.dy`<ul class="user-menu__list__group">
        <span class="user-menu__list__group__title">${c.title}</span>
        ${(0,no.r)(c.routes,s=>s,(s,u)=>E.dy` ${this._renderItem(s)} `)}
      </ul>`:E.dy`<li
        class="user-menu__list__item ${c.separator?"separator":""} ${c.active?"active":""}"
        style="${c.style}"
      >
        <gv-link
          .icon="${c.icon}"
          .path="${c.path}"
          .title="${c.title}"
          .target="${c.target}"
          @click=${this._onSelect}
        ></gv-link>
      </li>`}});var la=d(93369);window.customElements.define("gv-theme",class jo extends E.oi{static get properties(){return{_theme:{type:Object,attribute:!1},_lastDate:{type:Number,attribute:!1}}}static get styles(){return[E.iv`
        :host {
          --gv-theme-color-darker: var(--gv-theme-color-darker, #383e3f);
          --gv-theme-color-dark: var(--gv-theme-color-dark, #28444f);
          --gv-theme-color: var(--gv-theme-color, #5a7684);
          --gv-theme-color-light: var(--gv-theme-color-light, #86c3d0);

          --gv-theme-color-danger: var(--gv-theme-color-danger, #ff5722);

          --gv-theme-color-error-dark: var(--gv-theme-color-error-dark, #d32f2f);
          --gv-theme-color-error: var(--gv-theme-color-error, #f44336);
          --gv-theme-color-error-light: var(--gv-theme-color-error-light, #e57373);
          --gv-theme-color-info-dark: var(--gv-theme-color-info-dark, #1976d2);
          --gv-theme-color-info: var(--gv-theme-color-info, #2196f3);
          --gv-theme-color-info-light: var(--gv-theme-color-info-light, #64b5f6);
          --gv-theme-color-success-dark: var(--gv-theme-color-success-dark, #388e3c);
          --gv-theme-color-success: var(--gv-theme-color-success, #4caf50);
          --gv-theme-color-success-light: var(--gv-theme-color-success-light, #81c784);
          --gv-theme-color-warning-dark: var(--gv-theme-color-warning-dark, #f57c00);
          --gv-theme-color-warning: var(--gv-theme-color-warning, #ff9800);
          --gv-theme-color-warning-light: var(--gv-theme-color-warning-light, #ffb74d);

          --gv-theme-neutral-color-darkest: var(--gv-theme-neutral-color-darkest, #000000);
          --gv-theme-neutral-color-darker: var(--gv-theme-neutral-color-darker, #bfbfbf);
          --gv-theme-neutral-color-dark: var(--gv-theme-neutral-color-dark, #d9d9d9);
          --gv-theme-neutral-color: var(--gv-theme-neutral-color, #f5f5f5);
          --gv-theme-neutral-color-light: var(--gv-theme-neutral-color-light, #efefef);
          --gv-theme-neutral-color-lighter: var(--gv-theme-neutral-color-lighter, #fafafa);
          --gv-theme-neutral-color-lightest: var(--gv-theme-neutral-color-lightest, #ffffff);

          --gv-theme-font-color-dark: var(--gv-theme-font-color-dark, #262626);
          --gv-theme-font-color-light: var(--gv-theme-font-color-light, #ffffff);
          --gv-theme-font-size-xs: var(--gv-theme-font-size-xs, 10px);
          --gv-theme-font-size-s: var(--gv-theme-font-size-s, 12px);
          --gv-theme-font-size-m: var(--gv-theme-font-size-m, 14px);
          --gv-theme-font-size-l: var(--gv-theme-font-size-l, 16px);
          --gv-theme-font-size-xl: var(--gv-theme-font-size-xl, 26px);
          --gv-theme-font-size-xxl: var(--gv-theme-font-size-xxl, 30px);
          --gv-theme-skeleton-color: var(--gv-theme-skeleton-color, #bfbfbf);
          --gv-theme-font-family: var(--gv-theme-font-family, 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif);

          --gv-theme-homepage-background-image: var(--gv-theme-homepage-background-image, none);
          --gv-theme-homepage-background-color: var(--gv-theme-homepage-background-color, #5a7684);
          --gv-theme-homepage-background-height: var(--gv-theme-homepage-background-height, 400px);
          --gv-theme-logo: var(--gv-theme-logo, url('/images/gravitee-logo-cyan.svg'));
          --gv-theme-optional-logo: var(--gv-theme-optional-logo, url('/images/gravitee-logo-white.svg'));
          --gv-theme-favicon: var(--gv-theme-favicon, '/images/gravitee-favicon.png');
        }
      `]}constructor(){super(),this._lastDate=0}handleEvent(c){"gravitee"===c.data.type?(this.source=c.source,this.origin=c.origin,this.isDetached=c.data.isDetached,this._lastDate=c.data.date,c.data.requestAnswer&&this.sendMessage(),c.data.theme?this._theme=c.data.theme:console.warn("Theme not found",c.data)):console.warn("Unknown message",c.data)}getData(){return{type:"gravitee",href:window.location.href,date:Date.now()}}sendMessage(c={},s=0){if(this.source&&this.origin){const u=Object.assign({},this.getData(),c);this.source.postMessage(u,this.origin)}else console.warn("Unknown source & origin for send message")}render(){(0,la._v)(this._theme)}firstUpdated(){window.addEventListener("message",this.handleEvent.bind(this),!1),window.addEventListener("unload",c=>{this.isDetached?this.sendMessage({unload:!0}):this.sendMessage(),clearInterval(this.intervalID)}),this.intervalID=setInterval(()=>{this._lastDate-Date.now()<-3e4&&(0,_r.h)(this,"error",{message:"Connection for preview has been lost, please close this tab and refresh your browser."})},3e4)}});var $n=d(42193),hr=d(19426);function ul(l,c){if(1&l&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.hij("(",s.total,")")}}function hl(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div",9)(1,"gv-select",10),n.NdJ("gv-select:select",function(v){return n.CHM(s),n.oxw().onSelectSize(v.detail)}),n.qZA(),n._UZ(2,"gv-pagination",11),n.qZA()}if(2&l){const s=n.oxw();n.xp6(1),n.Q6J("options",s.pageSizes)("value",s.size),n.xp6(1),n.Q6J("data",s.paginationData)}}d(85713);let io=(()=>{class l{constructor(s,u,v,w,U,fe,De){this.userService=s,this.translateService=u,this.route=v,this.router=w,this.config=U,this.eventService=fe,this.ref=De,this.paginationData={}}ngOnInit(){this.pageSizes=this.config.get("pagination.size.values"),this.size=this.route.snapshot.queryParams[$n.O.SIZE]?parseInt(this.route.snapshot.queryParams[$n.O.SIZE],10):this.config.get("pagination.size.default"),this.format=s=>this.translateService.get(s).toPromise(),this.options={data:[{field:"title",width:"150px"},{field:"message"},{type:"gv-relative-time",width:"150px",attributes:{datetime:s=>s.created_at},style:()=>"text-align: right"},{type:"gv-icon",width:"30px",style:()=>"text-align: right",attributes:{onClick:s=>this.markAsRead(s.id),shape:"code:check",title:(0,yn.J)("user.notifications.read")}}]},this.loadNotifications(),this.eventService.subscribe(({type:s})=>{s===l.NEW&&this.loadNotifications()})}ngOnDestroy(){this.eventService.unsubscribe()}loadNotifications(){return this.userService.getCurrentUserNotifications({size:this.size,page:this.route.snapshot.queryParams[$n.O.PAGE]||1}).toPromise().then(s=>{this.notifications=s.data,this.total=s.metadata.pagination?s.metadata.pagination.total:0,this.buildPaginationData()})}buildPaginationData(){const s=this.total/this.size;this.paginationData={first:1,last:s,current_page:this.route.snapshot.queryParams[$n.O.PAGE]||1,total_pages:s,total:this.total}}markAsRead(s){this.userService.deleteCurrentUserNotificationByNotificationId({notificationId:s}).toPromise().then(()=>{this.eventService.dispatch(new hr.u(l.REMOVE)),this.loadNotifications().then(()=>{this.ref.detectChanges()})})}_onPaginate({page:s}){const u={};u[$n.O.PAGE]=s,u[$n.O.SIZE]=this.size,u.log=null,this.router.navigate([],{queryParams:u,queryParamsHandling:"merge"}).then(()=>{this.loadNotifications()})}onSelectSize(s){this.router.navigate([],{queryParams:{size:s,page:null,log:null},queryParamsHandling:"merge"}).then(()=>{this.size=s,this.loadNotifications()})}}return l.NEW="gv-notifications:onNew",l.REMOVE="gv-notifications:onRemove",l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.KD),n.Y36(ui.sK),n.Y36(En.gz),n.Y36(En.F0),n.Y36(cr.e),n.Y36(hr.P),n.Y36(n.sBO))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-user-notification"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-pagination:paginate",function(w){return u._onPaginate(w.detail)})},decls:12,vars:12,consts:[[1,"page__content"],[1,"main"],[1,"page__box"],[1,"page__box-title"],[1,"title"],[4,"ngIf"],[1,"page__box-content"],["rowheight","50px","noheader","",3,"items","options","total","format","emptymessage"],["class","page__box-footer pagination__block",4,"ngIf"],[1,"page__box-footer","pagination__block"],["small","",1,"pagination__size__block",3,"options","value","gv-select:select"],[1,"pagination__pagination__block",3,"data"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),n._uU(5),n.ALo(6,"translate"),n.YNc(7,ul,2,1,"span",5),n.qZA()(),n.TgZ(8,"div",6),n._UZ(9,"gv-table",7),n.ALo(10,"translate"),n.qZA(),n.YNc(11,hl,3,3,"div",8),n.qZA()()()),2&s&&(n.xp6(5),n.hij(" ",n.lcZ(6,8,"user.notifications.title")," "),n.xp6(2),n.Q6J("ngIf",u.total),n.xp6(2),n.Q6J("items",u.notifications)("options",u.options)("total",u.total)("format",u.format)("emptymessage",n.lcZ(10,10,"user.notifications.empty")),n.xp6(2),n.Q6J("ngIf",u.notifications&&u.notifications.length&&u.total>u.size))},directives:[tn.O5],pipes:[ui.X$],styles:[""]}),l})();function To(l,c){return l&&"slide"===l.type&&c&&"slide"===c.type&&l.group===c.group}const Ia=(0,y.X$)("routeAnimations",[(0,y.eR)(function Vo(l,c){return!!To(l,c)&&l.index>c.index},[(0,y.oB)({position:"relative"}),(0,y.IO)(":enter, :leave",[(0,y.oB)({position:"absolute",left:0,width:"100%"})],{optional:!0}),(0,y.IO)(":enter",[(0,y.oB)({left:"-100%"})]),(0,y.ru)([(0,y.IO)(":leave",[(0,y.jt)("500ms ease-in-out",(0,y.oB)({left:"100%"}))],{optional:!0}),(0,y.IO)(":enter",[(0,y.jt)("500ms ease-in-out",(0,y.oB)({left:"0%"}))])])]),(0,y.eR)(function Pa(l,c){return!!To(l,c)&&l.index<c.index},[(0,y.oB)({position:"relative"}),(0,y.IO)(":enter, :leave",[(0,y.oB)({position:"absolute",right:0,width:"100%"})],{optional:!0}),(0,y.IO)(":enter",[(0,y.oB)({right:"-100%"})]),(0,y.ru)([(0,y.IO)(":leave",[(0,y.jt)("500ms ease-in-out",(0,y.oB)({right:"100%"}))],{optional:!0}),(0,y.IO)(":enter",[(0,y.jt)("500ms ease-in-out",(0,y.oB)({right:"0%"}))])])]),(0,y.eR)(function Do(l,c){return!(!c||"fade"!==c.type)||!(!c||"slide"!==c.type||null!=l&&"slide"===l.type&&("slide"!==l.type||l.group===c.group))},[(0,y.oB)({position:"relative"}),(0,y.IO)(":enter, :leave",[(0,y.oB)({position:"absolute",width:"100%"})],{optional:!0}),(0,y.IO)(":enter",[(0,y.oB)({opacity:0})],{optional:!0}),(0,y.IO)(":leave",[(0,y.oB)({opacity:0}),(0,y.jt)("0ms",(0,y.oB)({opacity:0}))],{optional:!0}),(0,y.IO)(":enter",[(0,y.oB)({opacity:0}),(0,y.jt)("200ms",(0,y.oB)({opacity:1}))],{optional:!0})])]);class ro{constructor(c){this.viewContainerRef=c}getViewContainerRef(){return this.viewContainerRef}clear(){this.currentComponentFactory=null,this.viewContainerRef.clear()}setComponent(c){this.currentComponentFactory?this.currentComponentFactory.componentType!==c.componentType&&(this.clear(),this.createComponent(c)):this.createComponent(c)}createComponent(c){this.viewContainerRef.createComponent(c),this.viewContainerRef.element.nativeElement.previousSibling&&(this.viewContainerRef.element.nativeElement.previousSibling.slot=this.getName()),this.currentComponentFactory=c}}let js=(()=>{class l extends ro{constructor(s){super(s)}getName(){return"top"}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(n.s_b))},l.\u0275dir=n.lG2({type:l,selectors:[["","gvMenuTopSlot",""]],features:[n.qOj]}),l})(),zo=(()=>{class l extends ro{constructor(s){super(s)}getName(){return"right-transition"}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(n.s_b))},l.\u0275dir=n.lG2({type:l,selectors:[["","gvMenuRightTransitionSlot",""]],features:[n.qOj]}),l})();var Li=d(55302);let Go=(()=>{class l extends ro{constructor(s){super(s)}getName(){return"right"}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(n.s_b))},l.\u0275dir=n.lG2({type:l,selectors:[["","gvMenuRightSlot",""]],features:[n.qOj]}),l})();var Es=d(19490),ka=d(591),kr=(()=>((kr||(kr={})).googleAnalytics="_ga.enabled",kr))();let X=(()=>{class l{constructor(s,u,v){this.configurationService=s,this.cookieService=u,this.router=v,this.scriptGAId="GA_ID",this.scriptGtagId="Gtag_ID",this.isGAEnabled=new ka.X(void 0),this.isGALoaded=new ka.X(void 0),this.router.events.subscribe(w=>{w instanceof En.m2&&this.isEnabled()&&this.sendTag(w.urlAfterRedirects)})}_initScriptTags(){if(!document.getElementById(this.scriptGAId)){const s=document.createElement("script");s.id=this.scriptGAId,s.async=!0,s.src=`https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`,document.head.appendChild(s)}if(!document.getElementById(this.scriptGtagId)){const s=document.createElement("script");s.id=this.scriptGtagId,s.async=!0,s.innerHTML='function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date);',document.head.appendChild(s)}}load(){const s=this.configurationService.hasFeature(Li.l.googleAnalytics);this.trackingId=this.configurationService.get("portal.analytics.trackingId"),s&&this.trackingId?(this._initScriptTags(),this.cookieService.check(kr.googleAnalytics)&&"1"!==this.cookieService.get("_ga.enabled")?this.isGAEnabled.next(!1):this.isGAEnabled.next(!0),this.isGALoaded.next(!0)):this.isGALoaded.next(!1)}enableGA(){this._initScriptTags(),this.isGAEnabled.next(!0)}disableGA(){this.isGAEnabled.next(!1);const s=document.getElementById(this.scriptGAId);s&&s.remove();const u=document.getElementById(this.scriptGtagId);u&&u.remove(),this._removeGACookies()}sendTag(s){gtag("config",this.trackingId,{page_path:s,cookieDomain:"none"})}isEnabled(){return this.isGAEnabled.getValue()}isLoaded(){return this.isGALoaded.getValue()}_removeGACookies(){this.cookieService.delete("_ga"),this.cookieService.delete("_gid"),this.cookieService.delete("_gat_gtag_"+this.trackingId.replace(/-/g,"_"))}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(cr.e),n.LFG(Qi),n.LFG(En.F0))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),F=(()=>{class l{constructor(s){this.notificationService=s,this.previewSource=new ka.X(!1)}isActive(){const s=this.previewSource.getValue();return!0===s&&this.notificationService.info("On preview mode"),s}activate(){this.previewSource.next(!0)}deactivate(){this.previewSource.next(!1)}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(Mr.g))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();function he(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-message",1)(1,"div",2)(2,"p"),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._UZ(5,"p",3),n.ALo(6,"translate"),n.TgZ(7,"p"),n._uU(8),n.ALo(9,"translate"),n.qZA(),n.TgZ(10,"div",4)(11,"gv-button",5),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw().onAcceptClick()}),n._uU(12),n.ALo(13,"translate"),n.qZA(),n.TgZ(14,"gv-button",6),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw().onDeclineClick()}),n._uU(15),n.ALo(16,"translate"),n.qZA()()()()}2&l&&(n.xp6(3),n.Oqu(n.lcZ(4,5,"cookies.information.common")),n.xp6(2),n.Q6J("innerHTML",n.lcZ(6,7,"cookies.information.withAnalytics"),n.oJD),n.xp6(3),n.Oqu(n.lcZ(9,9,"cookies.confirmation")),n.xp6(4),n.Oqu(n.lcZ(13,11,"cookies.actions.ok")),n.xp6(3),n.Oqu(n.lcZ(16,13,"cookies.actions.decline")))}d(17441);let Ee=(()=>{class l{constructor(s,u){this.googleAnalyticsService=s,this.cookieService=u}_disableGA(){this.googleAnalyticsService.disableGA(),this.cookieService.set(kr.googleAnalytics,"0",365,"/")}_dispose(){document.querySelector(".cookie__consent").remove()}_enableGA(){this.cookieService.set(kr.googleAnalytics,"1",365,"/"),this.googleAnalyticsService.enableGA()}displayCookieConsent(){const s=this.cookieService.check(kr.googleAnalytics);return this.googleAnalyticsService.isLoaded()&&!s}onAcceptClick(){this._enableGA(),this._dispose()}onDeclineClick(){this._disableGA(),this._dispose()}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(X),n.Y36(Qi))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-gv-cookie-consent"]],decls:1,vars:1,consts:[["class","cookie__consent","type","success",4,"ngIf"],["type","success",1,"cookie__consent"],[1,"cookie__consent__content"],[3,"innerHTML"],[1,"cookie__consent__actions"],["primary","",3,"gv-button:click"],["primary","","outlined","",3,"gv-button:click"]],template:function(s,u){1&s&&n.YNc(0,he,17,15,"gv-message",0),2&s&&n.Q6J("ngIf",u.displayCookieConsent())},directives:[tn.O5],pipes:[ui.X$],styles:[".cookie__consent[_ngcontent-%COMP%]{position:fixed;bottom:0px;width:100%;z-index:1000;display:flex;flex-direction:column}.cookie__consent__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:1000px;margin:0 auto}.cookie__consent__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:left}.cookie__consent__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),l})();d(96750),d(80501);const yt=["searchAutocomplete"];let Zt=(()=>{class l{constructor(s,u,v){this.router=s,this.activatedRoute=u,this.apiService=v,this._selected=!1}ngOnInit(){this.options=[],this.activatedRoute.queryParamMap.subscribe(s=>{this.query=s.has($n.O.QUERY)?s.get($n.O.QUERY):""})}onSearch({detail:s}){return this.apiService.searchApis(new $n.M(s,5)).toPromise().then(u=>{this.options=u.data.length?u.data.map(v=>{const w=document.createElement("gv-row");return w.small=!0,w.item=v,{value:v.name,element:w,id:v.id}}):[]}).catch(u=>{u&&u.interceptorFuture&&u.interceptorFuture.cancel()})}onSelect({detail:s}){this._selected=!0,setTimeout(()=>{this.router.navigate(["/catalog/api/"+s.id]).then(()=>{this._selected=!1,this.searchAutocomplete.nativeElement.reset()})},300)}onSubmit({detail:s}){if(!1===this._selected&&""!==s.trim()){const u={};u[$n.O.QUERY]=s,this.router.navigate(["/catalog/search"],{queryParams:u})}}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(En.F0),n.Y36(En.gz),n.Y36(Cn.sM))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-gv-search-api"]],viewQuery:function(s,u){if(1&s&&n.Gf(yt,7),2&s){let v;n.iGM(v=n.CRH())&&(u.searchAutocomplete=v.first)}},decls:4,vars:5,consts:[[3,"options","gv-autocomplete:search","gv-autocomplete:select"],["searchAutocomplete",""],["type","search",2,"width","100%",3,"gv-input:submit"]],template:function(s,u){1&s&&(n.TgZ(0,"gv-autocomplete",0,1),n.NdJ("gv-autocomplete:search",function(w){return u.onSearch(w)})("gv-autocomplete:select",function(w){return u.onSelect(w)}),n.TgZ(2,"gv-input",2),n.NdJ("gv-input:submit",function(w){return u.onSubmit(w)}),n.ALo(3,"translate"),n.qZA()()),2&s&&(n.Q6J("options",u.options),n.xp6(2),n.uIk("value",u.query)("placeholder",n.lcZ(3,3,"catalog.search")))},pipes:[ui.X$],encapsulation:2}),l})();const xn=["homepageBackground"];function mi(l,c){1&l&&n._UZ(0,"gv-theme")}function In(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",26),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw(2).goTo("/user/registration")}),n._uU(1),n.ALo(2,"translate"),n.qZA()}2&l&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"homepage.signup")))}function Di(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div",22)(1,"h1"),n._uU(2),n.qZA(),n.TgZ(3,"div",23),n._UZ(4,"app-gv-search-api",24),n.TgZ(5,"div",25)(6,"gv-button",26),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw().goTo("/catalog")}),n._uU(7),n.ALo(8,"translate"),n.qZA(),n.YNc(9,In,3,3,"gv-button",27),n.qZA()()()}if(2&l){const s=n.oxw();n.xp6(2),n.Oqu(s.homepageTitle),n.xp6(5),n.Oqu(n.lcZ(8,3,"homepage.explore")),n.xp6(2),n.Q6J("ngIf",s.displaySignUp())}}const S=function(l){return{layout__nav:l}};function p(l,c){if(1&l&&n._UZ(0,"gv-nav",28),2&l){const s=n.oxw();n.Q6J("routes",s.mainRoutes)("ngClass",n.VKq(2,S,s.isHomepage))}}function _(l,c){if(1&l&&n._UZ(0,"gv-identity-picture",32),2&l){const s=n.oxw(2);n.Q6J("display_name",s.currentUser.display_name)("picture",s.userPicture)("notification",s.numberOfPortalNotifications)}}const x=function(l){return{"layout__user-menu":l}};function D(l,c){if(1&l&&(n.TgZ(0,"div",29)(1,"gv-user-menu",30),n.YNc(2,_,1,3,"gv-identity-picture",31),n.qZA()()),2&l){const s=n.oxw();n.Q6J("ngClass",n.VKq(5,S,s.displayShadowNav())),n.xp6(1),n.Q6J("routes",s.userRoutes)("ngClass",n.VKq(7,x,s.isHomepage))("username",s.userName),n.xp6(1),n.Q6J("ngIf",s.currentUser)}}function te(l,c){}function pe(l,c){}function Le(l,c){}function qe(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-message",33),n.NdJ("gv-message:close",function(){return n.CHM(s),n.oxw().onCloseNotification()}),n.qZA()}if(2&l){const s=n.oxw();n.Q6J("type",s.notification.type)("innerHtml",s.notification.message,n.oJD)("closable",s.notification.closable)}}function dt(l,c){if(1&l&&(n.TgZ(0,"li"),n._UZ(1,"gv-link",42),n.ALo(2,"translate"),n.qZA()),2&l){const s=c.$implicit;n.xp6(1),n.s9C("title",n.lcZ(2,3,s.title)),n.Q6J("path",s.path)("target",s.target)}}function _t(l,c){if(1&l&&(n.TgZ(0,"div",37)(1,"span",38),n._uU(2),n.ALo(3,"translate"),n.qZA(),n._UZ(4,"div",39),n.TgZ(5,"ul",40),n.YNc(6,dt,3,5,"li",41),n.qZA()()),2&l){const s=c.$implicit;n.xp6(2),n.Oqu(n.lcZ(3,2,s.title)),n.xp6(4),n.Q6J("ngForOf",s.links)}}function Mt(l,c){if(1&l&&(n.TgZ(0,"section",34),n._UZ(1,"a",35),n.ALo(2,"translate"),n.YNc(3,_t,7,4,"div",36),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.s9C("title",n.lcZ(2,3,"site.title")),n.Q6J("routerLink","/"),n.xp6(2),n.Q6J("ngForOf",s.links.topfooter)}}function Xt(l,c){if(1&l&&(n.TgZ(0,"li"),n._UZ(1,"gv-link",42),n.ALo(2,"translate"),n.qZA()),2&l){const s=c.$implicit;n.xp6(1),n.s9C("title",n.lcZ(2,3,s.title)),n.Q6J("path",s.path)("target",s.target)}}function Yt(l,c){if(1&l&&(n.TgZ(0,"ul"),n.YNc(1,Xt,3,5,"li",41),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Q6J("ngForOf",s.links.footer)}}const cn=function(l,c,s){return{sticky:l,"sticky-homepage":c,layout__homepage:s}},Fn=function(l){return{layout__header__homepage__logo:l}},Zn=function(l){return{layout__content__homepage:l}};let Yn=(()=>{class l{constructor(s,u,v,w,U,fe,De,et,wt,Gt,fn,kn,Sn,jn,vi){this.titleService=s,this.translateService=u,this.router=v,this.currentUserService=w,this.navRouteService=U,this.notificationService=fe,this.activatedRoute=De,this.componentFactoryResolver=et,this.configurationService=wt,this.portalService=Gt,this.userService=fn,this.eventService=kn,this.ref=Sn,this.googleAnalyticsService=jn,this.previewService=vi,this.isPreview=!1,this.isSticky=!1,this.isHomepage=!1,this.isStickyHomepage=!1,this.links={},this.activatedRoute.queryParamMap.subscribe(Mi=>{Mi.has("preview")&&"on"===Mi.get("preview")&&this.previewService.activate()}),this.router.events.subscribe(Mi=>{if(Mi instanceof En.OD)this.notificationService.reset(),this.currentUserService.exist()||this.isInLoginOrRegistration(Mi.url)||!this.forceLogin()||this.router.navigate(["/user/login"],{replaceUrl:!0,queryParams:{redirectUrl:Mi.url}});else if(Mi instanceof En.m2){const er=this.navRouteService.findCurrentRoute(this.activatedRoute);this._setBrowserTitle(er),this.isPreview=vi.isActive(),this._onNavigationEnd(Mi)}})}ngOnInit(){var s=this;return(0,ur.Z)(function*(){s.homepageTitle=s.configurationService.get("portal.homepageTitle")||(yield s.translateService.get((0,yn.J)("homepage.title")).toPromise()),s.googleAnalyticsService.load(),s.currentUserService.get().subscribe(u=>{s.currentUser=u,s.userRoutes=s.navRouteService.getUserNav(),s.currentUser?(setTimeout(()=>{s.userPicture=s.currentUser._links?s.currentUser._links.avatar:null}),s.loadNotifications(),s.interval=setInterval(()=>{s.loadNotifications()},1e3*s.configurationService.get("scheduler.notificationsInSeconds"))):(s.userPicture=null,clearInterval(s.interval))}),s.notificationService.notification.subscribe(u=>{u?s.translateService.get(u.code,u.parameters).subscribe(v=>{(u.code!==v||!u.message)&&(u.message=v),s.notification=u}):delete s.notification,s.ref.detectChanges()})})()}loadNotifications(){this.userService.getCurrentUserNotifications({size:1}).toPromise().then(s=>{if(s.data&&s.data[0]){const u=s.data[0],v=s.metadata.pagination?s.metadata.pagination.total:0;if(null!==this.numberOfPortalNotifications&&v>this.numberOfPortalNotifications){this.eventService.dispatch(new hr.u(io.NEW));const w=window.Notification;w&&w.requestPermission().then(U=>{"granted"===U&&new w(u.title,{body:u.message})})}this.numberOfPortalNotifications=v,this.ref.detectChanges()}})}ngAfterViewInit(){const s=document.querySelector("#loader");s&&s.remove(),this.slots=[this.appGvMenuRightSlot,this.appGvMenuRightTransitionSlot,this.appGvMenuTopSlot],this.eventService.subscribe(u=>{u.type===io.REMOVE?this.loadNotifications():u.type===l.UPDATE_USER_AVATAR&&(this.userPicture=u.details.data)})}onCloseNotification(){this.notificationService.reset()}ngOnDestroy(){var s=this;return(0,ur.Z)(function*(){clearInterval(s.interval),s.eventService.unsubscribe()})()}onThemeError(s){this.notificationService.error(s.message)}onScroll(){this.computeMenuMode()}computeMenuMode(){const s=window.pageYOffset;window.requestAnimationFrame(()=>{this.isHomepage&&(this.isStickyHomepage=s>=this.homepageBackgroundHeight-70),this.isSticky=this.isSticky?0!==s:s>50})}computeHomepageHeight(){this.isHomepage&&setTimeout(()=>{this.homepageBackground.nativeElement&&(this.homepageBackgroundHeight=parseInt(window.getComputedStyle(this.homepageBackground.nativeElement).height,10))},0)}prepareRoute(s){return s&&s.activatedRouteData&&s.activatedRouteData.animation}_setBrowserTitle(s){this.translateService.get((0,yn.J)("site.title")).subscribe(u=>{const v=s.snapshot.data;v&&v.title?this.translateService.get(v.title).subscribe(w=>this.titleService.setTitle(`${w} | ${u}`)):this.titleService.setTitle(u)})}_buildLinks(s){return s.map(u=>{let v,w;switch(u.resourceType){case Cn.rU.ResourceTypeEnum.External:v=u.resourceRef,w=v&&v.toLowerCase().startsWith("http")?"_blank":"_self";break;case Cn.rU.ResourceTypeEnum.Page:u.folder?(v="/documentation",u.resourceRef&&(v+="/"+u.resourceRef)):v="/pages/"+u.resourceRef,w="_self";break;case Cn.rU.ResourceTypeEnum.Category:v="/catalog/categories/"+u.resourceRef,w="_self"}return{active:this.router.isActive(v,!1),path:v,target:w,title:u.name}})}get userName(){return this.currentUser?this.currentUser.first_name&&this.currentUser.last_name?`${this.currentUser.first_name[0].toUpperCase()+this.currentUser.first_name.slice(1)} ${this.currentUser.last_name[0].toUpperCase()}.`:this.currentUser.display_name:null}onNavChange(s){if(s.target&&"_blank"===s.target)window.open(s.path,s.target);else{const u=this.router.parseUrl(s.path),v=u.root.children[En.eC].segments.join("/");this.router.navigate([v],{queryParams:u.queryParams})}}isHomepageUrl(s){return null==this.router.parseUrl(s).root.children[En.eC]}_onNavigationEnd(s){this.isHomepage=this.isHomepageUrl(s.url),this.portalService.getPortalLinks().subscribe(v=>{if(v.slots){if(this.mainRoutes=this.navRouteService.getChildrenNav({data:{menu:!0},children:this.router.config.filter(w=>w.data&&w.data.menu)}),v.slots.header){const w=v.slots.header.find(U=>U.root);if(w){const U=this._buildLinks(w.links),fe=U.find(De=>De.active);this.mainRoutes=this.mainRoutes.then(De=>{if(fe){const et=De.find(wt=>wt.active);et&&(et.active=!1)}return[...De,...U]})}}if(v.slots.footer){const w=v.slots.footer.find(U=>U.root);w&&(this.links.footer=this._buildLinks(w.links))}v.slots.topfooter&&(this.links.topfooter=v.slots.topfooter.filter(w=>!w.root).map(w=>({title:w.category,links:this._buildLinks(w.links)})))}});const u=this.navRouteService.findCurrentRoute(this.activatedRoute);if(this.menuRoutes=this.navRouteService.getSiblingsNav(u),this.menuRoutes){const v=u.snapshot.data.menu;"object"==typeof v?this._injectMenuSlots({...v.slots,...u.parent&&u.parent.snapshot.data.menu&&u.parent.snapshot.data.menu.slots}):this._clearMenuSlots()}else this._clearMenuSlots();this.computeMenuMode(),this.computeHomepageHeight()}_clearMenuSlots(){this.slots.forEach(s=>{s.clear()})}_injectMenuSlots(s){this.slots.forEach(u=>{const v=u.getName();let w=s?s[v]:null;if(s&&s.expectedFeature&&!this.configurationService.hasFeature(s.expectedFeature)&&(w=null),s&&s.expectedPermissions){const U=this.currentUserService.get().getValue()&&this.currentUserService.get().getValue().permissions||{},De={};s.expectedPermissions.map(et=>{const wt=et.split("-");De[wt[0]]?De[wt[0]].push(wt[1]):De[wt[0]]=[wt[1]]}),Object.keys(De).forEach(et=>{const wt=U[et];null!==w&&(!wt||wt&&!this._includesAll(wt,De[et]))&&(w=null)})}this._updateSlot(w,u)})}_includesAll(s,u){let v=!0;return u.forEach(w=>{s.includes(w)||(v=!1)}),v}_updateSlot(s,u){if(null==s)u.clear();else{const v=this.componentFactoryResolver.resolveComponentFactory(s);u.setComponent(v)}}isAuthenticated(){return null!==this.currentUserService.get().getValue()}displaySignUp(){return this.configurationService.hasFeature(Li.l.userRegistration)&&!this.isAuthenticated()}displayShadowNav(){return this.isHomepage&&!this.isAuthenticated()}goTo(s){this.router.navigate([s])}isInLoginOrRegistration(s=this.router.routerState.snapshot.url){return s.startsWith("/user/login")||s.startsWith("/user/registration")||s.startsWith("/user/resetPassword")}forceLogin(){return this.configurationService.hasFeature(Li.l.forceLogin)}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(f.Dx),n.Y36(ui.sK),n.Y36(En.F0),n.Y36(Yr.S),n.Y36(Es.Z),n.Y36(Mr.g),n.Y36(En.gz),n.Y36(n._Vd),n.Y36(cr.e),n.Y36(Cn.EA),n.Y36(Cn.KD),n.Y36(hr.P),n.Y36(n.sBO),n.Y36(X),n.Y36(F))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-root"]],viewQuery:function(s,u){if(1&s&&(n.Gf(js,7),n.Gf(zo,7),n.Gf(Go,7),n.Gf(xn,7)),2&s){let v;n.iGM(v=n.CRH())&&(u.appGvMenuTopSlot=v.first),n.iGM(v=n.CRH())&&(u.appGvMenuRightTransitionSlot=v.first),n.iGM(v=n.CRH())&&(u.appGvMenuRightSlot=v.first),n.iGM(v=n.CRH())&&(u.homepageBackground=v.first)}},hostBindings:function(s,u){1&s&&n.NdJ("beforeunload",function(){return u.ngOnDestroy()},!1,n.Jf7)("gv-theme:error",function(w){return u.onThemeError(w.detail)})("scroll",function(){return u.onScroll()},!1,n.Jf7)("gv-nav:click",function(w){return u.onNavChange(w.detail)})("gv-link:click",function(w){return u.onNavChange(w.detail)})},decls:33,vars:31,consts:[[4,"ngIf"],[1,"layout",3,"ngClass"],[1,"layout__header__homepage__background"],["homepageBackground",""],["class","layout__header__homepage__title",4,"ngIf"],[1,"layer"],[1,"layout__header"],[1,"layout__header__container"],[1,"layout__header__logo",3,"routerLink","title","ngClass"],[3,"routes","ngClass",4,"ngIf"],["class","layout__nav__container",3,"ngClass",4,"ngIf"],[3,"routes","sticky"],["gvMenuTopSlot",""],["gvMenuRightTransitionSlot",""],["gvMenuRightSlot",""],[3,"type","innerHtml","closable","gv-message:close",4,"ngIf"],[1,"layout__content",3,"ngClass"],["outlet","outlet"],[1,"layout__footer"],["class","layout__footer__top",4,"ngIf"],[1,"layout__footer__bottom"],["path","cookies",3,"title"],[1,"layout__header__homepage__title"],[1,"layout__api"],[1,"layout__api__search"],[1,"layout__api__actions"],["outlined","",3,"gv-button:click"],["outlined","",3,"gv-button:click",4,"ngIf"],[3,"routes","ngClass"],[1,"layout__nav__container",3,"ngClass"],[3,"routes","ngClass","username"],["rounded","",3,"display_name","picture","notification",4,"ngIf"],["rounded","",3,"display_name","picture","notification"],[3,"type","innerHtml","closable","gv-message:close"],[1,"layout__footer__top"],[1,"layout__footer__top__logo",3,"routerLink","title"],["class","layout__footer__top__category",4,"ngFor","ngForOf"],[1,"layout__footer__top__category"],[1,"layout__footer__top__category__title"],[1,"layout__footer__top__category__title_border"],[1,"layout__footer__top__category__links"],[4,"ngFor","ngForOf"],[3,"path","target","title"]],template:function(s,u){if(1&s&&(n.YNc(0,mi,1,0,"gv-theme",0),n._UZ(1,"app-gv-cookie-consent"),n.TgZ(2,"div",1)(3,"div",2,3),n.YNc(5,Di,10,5,"div",4),n._UZ(6,"div",5),n.qZA(),n.TgZ(7,"header",6)(8,"div",7),n._UZ(9,"a",8),n.ALo(10,"translate"),n.YNc(11,p,1,4,"gv-nav",9),n.YNc(12,D,3,9,"div",10),n.qZA(),n.TgZ(13,"gv-menu",11),n.YNc(14,te,0,0,"ng-template",12),n.YNc(15,pe,0,0,"ng-template",13),n.YNc(16,Le,0,0,"ng-template",14),n.qZA(),n.YNc(17,qe,1,3,"gv-message",15),n.qZA(),n.TgZ(18,"div",16)(19,"div"),n._UZ(20,"router-outlet",null,17),n.qZA()(),n.TgZ(22,"footer",18),n.YNc(23,Mt,4,5,"section",19),n.TgZ(24,"section",20)(25,"ul")(26,"li"),n._UZ(27,"gv-link",21),n.ALo(28,"translate"),n.qZA(),n.TgZ(29,"li"),n._uU(30),n.ALo(31,"translate"),n.qZA()(),n.YNc(32,Yt,2,1,"ul",0),n.qZA()()()),2&s){const v=n.MAs(21);n.Q6J("ngIf",u.isPreview),n.xp6(2),n.Q6J("ngClass",n.kEZ(23,cn,u.isSticky,u.isStickyHomepage,u.isHomepage)),n.xp6(3),n.Q6J("ngIf",u.isHomepage),n.xp6(4),n.s9C("title",n.lcZ(10,17,"site.title")),n.Q6J("routerLink","/")("ngClass",n.VKq(27,Fn,u.isHomepage)),n.xp6(2),n.Q6J("ngIf",!u.forceLogin()||u.forceLogin()&&!u.isInLoginOrRegistration()),n.xp6(1),n.Q6J("ngIf",!u.isInLoginOrRegistration()),n.xp6(1),n.Q6J("routes",u.menuRoutes)("sticky",u.isSticky),n.xp6(4),n.Q6J("ngIf",u.notification),n.xp6(1),n.Q6J("ngClass",n.VKq(29,Zn,u.isHomepage)),n.xp6(1),n.Q6J("@routeAnimations",u.prepareRoute(v)),n.xp6(4),n.Q6J("ngIf",u.links.topfooter),n.xp6(4),n.s9C("title",n.lcZ(28,19,"route.cookies")),n.xp6(3),n.Oqu(n.lcZ(31,21,"footer.rights")),n.xp6(2),n.Q6J("ngIf",u.links.footer)}},directives:[tn.O5,Ee,tn.mk,Zt,En.yS,js,zo,Go,En.lC,tn.sg],pipes:[ui.X$],styles:[".layout[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column}.layout__header[_ngcontent-%COMP%]{background-color:var(--gv-theme-neutral-color-lightest);width:100%;position:-webkit-sticky;position:sticky;top:0;z-index:110}.layout__header[_ngcontent-%COMP%]   gv-message[_ngcontent-%COMP%]{height:0}.layout__homepage[_ngcontent-%COMP%]   .layout__header[_ngcontent-%COMP%]{position:fixed;background-color:transparent;transition:height .35s ease-in-out}.layout__header__background[_ngcontent-%COMP%]{background-color:transparent}.layout__header__block[_ngcontent-%COMP%]{background-color:var(--gv-theme-neutral-color)}.sticky[_ngcontent-%COMP%]   .layout__header__container[_ngcontent-%COMP%]{padding-bottom:.2rem;padding-top:.2rem;--gv-link-a--pv: .5rem;transition:all .25s ease-in-out}.layout__api[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.layout__api__search[_ngcontent-%COMP%]{margin-right:25px}.layout__api__search[_ngcontent-%COMP%], .layout__api__actions[_ngcontent-%COMP%]{flex:1}.layout__api__actions[_ngcontent-%COMP%]{border-left:1px solid lightgrey;padding-left:20px}.layout__header__homepage__background[_ngcontent-%COMP%]{display:none}.layout__homepage[_ngcontent-%COMP%]   .layout__header__homepage__background[_ngcontent-%COMP%]{background-size:cover;background-color:var(--gv-theme-homepage-background-color);background-image:var(--gv-theme-homepage-background-image);background-repeat:no-repeat;background-position:center center;height:var(--gv-theme-homepage-background-height);color:var(--gv-theme-neutral-color-lightest);position:relative;display:flex;flex-direction:column;justify-content:center}.sticky-homepage[_ngcontent-%COMP%]   .layout__header__homepage__background[_ngcontent-%COMP%]{height:70px;overflow:hidden;color:transparent;position:fixed;width:100%;z-index:105}.layer[_ngcontent-%COMP%]{transition:all .25s ease-in-out}.sticky-homepage[_ngcontent-%COMP%]   .layer[_ngcontent-%COMP%]{background-color:var(--gv-theme-homepage-background-color);opacity:.8;position:absolute;top:0;left:0;width:100%;height:100%}.sticky-homepage[_ngcontent-%COMP%]   .layout__content__homepage[_ngcontent-%COMP%]{padding-top:var(--gv-theme-homepage-background-height)}.sticky[_ngcontent-%COMP%]   .layout__header__homepage__container[_ngcontent-%COMP%]{display:none}.layout__header__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:75px 1fr auto;grid-gap:.5rem;padding:var(--gv-theme-layout--pt) var(--gv-theme-layout--pr) var(--gv-theme-layout--pb) var(--gv-theme-layout--pl)}.layout__header__logo[_ngcontent-%COMP%]{background-image:var(--gv-theme-logo);background-size:contain;background-repeat:no-repeat;background-position:center;height:var(--gv-theme-layout-header--h)}.layout__header__homepage__logo[_ngcontent-%COMP%]{background-image:var(--gv-theme-optional-logo)}.layout__header__homepage__title[_ngcontent-%COMP%]{--gv-button--p: 1rem 2rem;--gv-button--bdrs: 5px;transition:opacity .25s ease-in-out;padding:var(--gv-theme-layout--pt) var(--gv-theme-layout--pl)}.sticky[_ngcontent-%COMP%]   .layout__header__homepage__title[_ngcontent-%COMP%]{opacity:0}.layout__header__homepage__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:45px;font-weight:700;line-height:1.4em;text-shadow:1px 1px 1px #000;color:var(--gv-theme-neutral-color-lightest)}.layout__nav__container[_ngcontent-%COMP%]{text-align:right}.layout__nav[_ngcontent-%COMP%]{--gv-link--c: var(--gv-theme-neutral-color-lightest);--gv-link--tsh: 1px 1px 1px #000}.layout__user-menu[_ngcontent-%COMP%]{--gv-user-menu--c: var(--gv-theme-neutral-color-lightest);--gv-user-menu-icon--c: var(--gv-theme-neutral-color-lightest);--gv-user-menu--tsh: 1px 1px 1px #000}.layout__content[_ngcontent-%COMP%]{background-color:var(--gv-theme-neutral-color);flex-grow:1}.layout__footer[_ngcontent-%COMP%]{height:0px;z-index:100;display:flex;flex-direction:column}.layout__footer__top[_ngcontent-%COMP%]{background-color:var(--gv-theme-color-dark);color:var(--gv-theme-font-color-light);height:var(--gv-theme-layout-footer-top--h);padding:var(--gv-theme-layout--pt) var(--gv-theme-layout--pl);display:grid;grid-template-columns:20% repeat(7,1fr);grid-column-gap:10px;-moz-column-gap:10px;column-gap:10px}.layout__footer__top__category[_ngcontent-%COMP%]{padding-top:70px}.layout__footer__top__category__title[_ngcontent-%COMP%], .layout__footer__top__category__title_border[_ngcontent-%COMP%]{margin:.3rem .5rem}.layout__footer__top__category__title_border[_ngcontent-%COMP%]{border-bottom:2px solid var(--gv-theme-color-light);padding-top:10px;width:15%}.layout__footer__top__category__links[_ngcontent-%COMP%]{list-style:none;padding:15px 0;--gv-link--c: var(--gv-theme-font-color-light);--gv-link-a--pv: 0px;--gv-link-a--ph: 0px}.layout__footer__top__category__links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{opacity:.4;padding-top:7px}.layout__footer__top__logo[_ngcontent-%COMP%]{background-image:var(--gv-theme-optional-logo);background-size:contain;background-repeat:no-repeat;background-position:center;max-height:158px}.layout__footer__bottom[_ngcontent-%COMP%]{background-color:var(--gv-theme-color-darker);color:var(--gv-theme-font-color-light);height:var(--gv-theme-layout-footer-bottom--h);padding:55px 0;display:flex;flex-direction:row-reverse;justify-content:space-between}.layout__footer__bottom[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;padding-right:30px;vertical-align:middle}.layout__footer__bottom[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{--gv-link--c: var(--gv-theme-font-color-light);--gv-link-a--pv: 0px;--gv-link-a--ph: 0px}gv-menu[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%]{width:100%}gv-nav[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:flex-end}"],data:{animation:[Ia]}}),l})();var Ht=d(24006),Nn=d(33281),Zi=d(65073);function dr(l,c){if(1&l&&(n._UZ(0,"gv-select",15),n.ALo(1,"translate"),n.ALo(2,"translate")),2&l){const s=n.oxw();n.s9C("label",n.lcZ(1,3,"gv-contact.apis.title")),n.s9C("placeholder",n.lcZ(2,5,"gv-contact.apis.label")),n.Q6J("options",s.apis)}}let so=(()=>{class l{constructor(s,u,v,w,U,fe){this.applicationService=s,this.apiService=u,this.portalService=v,this.formBuilder=w,this.notificationService=U,this.currentUserService=fe}ngOnInit(){this.contactForm=this.formBuilder.group({api:this.apiId||null,application:null,subject:new Ht.NI(null,Ht.kI.required),content:new Ht.NI(null,Ht.kI.required),copy_to_sender:!1}),this.applicationService.getApplications({size:-1}).subscribe(u=>{this.applications=u.data.map(v=>({label:`${v.name} (${v.owner.display_name})`,value:v.id}))}),this.apiService.getApis({size:-1}).subscribe(u=>{this.apis=u.data.map(v=>({label:`${v.name} (${v.version})`,value:v.id}))});const s=this.currentUserService.get().getValue();s&&!s.email&&(this.notificationService.warning((0,yn.J)("errors.email.required")),setTimeout(()=>{this.contactForm.disable()},0))}reset(){this.contactForm.reset({api:this.apiId||null,copy_to_sender:!1})}submit(){this.isSending=!0,this.portalService.createTicket({ticketInput:this.contactForm.value}).toPromise().then(()=>{this.notificationService.success((0,yn.J)("gv-contact.success")),this.reset()}).finally(()=>this.isSending=!1)}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.IX),n.Y36(Cn.sM),n.Y36(Cn.EA),n.Y36(Ht.qu),n.Y36(Mr.g),n.Y36(Yr.S))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-gv-contact"]],inputs:{apiId:"apiId"},decls:33,vars:39,consts:[[1,"page__content","page__content-with-aside","form",3,"formGroup","ngSubmit"],[1,"main"],[1,"page__box"],[1,"page__box-title"],[1,"title"],[1,"page__box-content"],["formControlName","api","name","api","class","form__control","ngDefaultControl","",3,"label","placeholder","options",4,"ngIf"],["formControlName","application","name","application","ngDefaultControl","",1,"form__control",3,"label","placeholder","options"],["required","","formControlName","subject","name","subject","ngDefaultControl","",1,"form__control",3,"label","placeholder"],["required","","formControlName","content","name","content","ngDefaultControl","",1,"form__control",3,"label","placeholder"],["formControlName","copy_to_sender","name","copy_to_sender","ngDefaultControl","",1,"form__control",3,"label"],[1,"aside"],[1,"page__box-content","form__actions"],["type","submit","primary","","icon","communication:send",3,"disabled","loading"],["outlined","",3,"disabled","gv-button:click"],["formControlName","api","name","api","ngDefaultControl","",1,"form__control",3,"label","placeholder","options"]],template:function(s,u){1&s&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return u.submit()}),n.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),n._uU(5),n.ALo(6,"translate"),n.qZA()(),n.TgZ(7,"div",5),n.YNc(8,dr,3,7,"gv-select",6),n._UZ(9,"gv-select",7),n.ALo(10,"translate"),n.ALo(11,"translate"),n._UZ(12,"gv-input",8),n.ALo(13,"translate"),n.ALo(14,"translate"),n._UZ(15,"gv-text",9),n.ALo(16,"translate"),n.ALo(17,"translate"),n._UZ(18,"gv-checkbox",10),n.ALo(19,"translate"),n.qZA()()(),n.TgZ(20,"aside",11)(21,"div",2)(22,"div",3)(23,"h4",4),n._uU(24),n.ALo(25,"translate"),n.qZA()(),n.TgZ(26,"div",12)(27,"gv-button",13),n._uU(28),n.ALo(29,"translate"),n.qZA(),n.TgZ(30,"gv-button",14),n.NdJ("gv-button:click",function(){return u.reset()}),n._uU(31),n.ALo(32,"translate"),n.qZA()()()()()),2&s&&(n.Q6J("formGroup",u.contactForm),n.xp6(5),n.Oqu(n.lcZ(6,17,"gv-contact.title")),n.xp6(3),n.Q6J("ngIf",!u.apiId),n.xp6(1),n.s9C("label",n.lcZ(10,19,"gv-contact.applications.title")),n.s9C("placeholder",n.lcZ(11,21,"gv-contact.applications.label")),n.Q6J("options",u.applications),n.xp6(3),n.s9C("label",n.lcZ(13,23,"gv-contact.subject.title")),n.s9C("placeholder",n.lcZ(14,25,"gv-contact.subject.label")),n.xp6(3),n.s9C("label",n.lcZ(16,27,"gv-contact.content.title")),n.s9C("placeholder",n.lcZ(17,29,"gv-contact.content.label")),n.xp6(3),n.s9C("label",n.lcZ(19,31,"gv-contact.receiveCopy")),n.xp6(6),n.Oqu(n.lcZ(25,33,"common.options")),n.xp6(3),n.Q6J("disabled",u.contactForm.invalid||u.contactForm.disabled)("loading",u.isSending),n.xp6(1),n.hij(" ",n.lcZ(29,35,"gv-contact.button")," "),n.xp6(2),n.Q6J("disabled",u.contactForm.pristine),n.xp6(1),n.hij(" ",n.lcZ(32,37,"common.reset")," "))},directives:[Ht._Y,Ht.JL,Ht.sg,tn.O5,Nn.T,Ht.JJ,Ht.u,Ht.Fj,Ht.Q7,Zi.I],pipes:[ui.X$],styles:[".form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{padding:24px}.form[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]{flex-direction:column;text-align:center;align-items:stretch}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%]{align-self:center}.form[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:.2rem .2rem 1rem;box-sizing:border-box;width:100%}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 0 .2rem;align-self:flex-end}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin:0}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%]{align-content:center;align-items:center;background-color:var(--gv-theme-color);border-radius:2px;color:var(--gv-theme-font-color-light);--gv-icon--c: var(--gv-theme-font-color-light);--gv-icon--s: 100px;display:flex;flex-direction:column;font-size:var(--gv-theme-font-size-xs);justify-content:space-around;line-height:22px;padding:2rem;text-align:center}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:1rem 0}"]}),l})(),Mo=(()=>{class l{constructor(s){this.route=s}ngOnInit(){this.apiId=this.route.snapshot.params.apiId}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(En.gz))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-api-contact"]],decls:1,vars:1,consts:[[3,"apiId"]],template:function(s,u){1&s&&n._UZ(0,"app-gv-contact",0),2&s&&n.Q6J("apiId",u.apiId)},directives:[so],encapsulation:2}),l})();var Oa=d(85799);let Jc=(()=>{class l{constructor(s,u){this.apiService=s,this.route=u}ngOnInit(){this.route.params.subscribe(s=>{s.apiId&&this.apiService.getPagesByApiId({apiId:s.apiId,homepage:!1,size:-1}).subscribe(v=>this.pages=v.data)})}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.sM),n.Y36(En.gz))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-api-documentation"]],decls:1,vars:1,consts:[[3,"pages"]],template:function(s,u){1&s&&n._UZ(0,"app-gv-documentation",0),2&s&&n.Q6J("pages",u.pages)},directives:[Oa.F],encapsulation:2}),l})();d(25619),d(64405),d(50843),d(30087);var Vs=d(11704),Qr=d(10550),oo=d(5562);function ao(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",9),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw(2).goBack()}),n._uU(1),n.qZA()}if(2&l){const s=n.oxw(2);n.xp6(1),n.hij(" ",s.backButton.label," ")}}function or(l,c){if(1&l&&(n.TgZ(0,"div",10)(1,"div",11)(2,"h3",12),n._uU(3),n.ALo(4,"translate"),n.qZA()(),n.TgZ(5,"div",13),n._uU(6),n.qZA()()),2&l){const s=n.oxw(2);n.xp6(3),n.Oqu(n.lcZ(4,2,"apiGeneral.description")),n.xp6(3),n.hij(" ",s.description," ")}}function lo(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"app-gv-page",14),n.NdJ("loaded",function(){return n.CHM(s),n.oxw(2).apiHomepageLoaded=!0}),n.qZA()}if(2&l){const s=n.oxw(2);n.Q6J("page",s.apiHomepage)}}function Uh(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"form",16),n.NdJ("ngSubmit",function(){return n.CHM(s),n.oxw(3).rate()}),n.TgZ(1,"div",13),n._UZ(2,"gv-input",17),n.ALo(3,"translate"),n.ALo(4,"translate"),n._UZ(5,"gv-text",18),n.ALo(6,"translate"),n.qZA(),n.TgZ(7,"div",19),n._UZ(8,"gv-rating",20),n.TgZ(9,"gv-button",21),n._uU(10),n.ALo(11,"translate"),n.qZA()()()}if(2&l){const s=n.oxw(3);n.Q6J("formGroup",s.ratingForm),n.xp6(2),n.s9C("label",n.lcZ(3,9,"apiGeneral.rateTitle")),n.s9C("placeholder",n.lcZ(4,11,"apiGeneral.rateTitlePlaceholder")),n.Q6J("value",null==s.userRating?null:s.userRating.title),n.xp6(3),n.s9C("placeholder",n.lcZ(6,13,"apiGeneral.rateComment")),n.Q6J("value",null==s.userRating?null:s.userRating.comment),n.xp6(3),n.Q6J("value",null==s.userRating?null:s.userRating.value),n.xp6(1),n.Q6J("disabled",!s.hasValidRatingForm()),n.xp6(1),n.Oqu(n.lcZ(11,15,"apiGeneral.rate"))}}function ql(l,c){if(1&l&&(n.TgZ(0,"div",10)(1,"div",11)(2,"h3",12),n._uU(3),n.ALo(4,"translate"),n.qZA()(),n.YNc(5,Uh,12,17,"form",15),n.qZA()),2&l){const s=n.oxw(2);n.xp6(3),n.Oqu(n.lcZ(4,2,"apiGeneral.giveRating")),n.xp6(2),n.Q6J("ngIf",s.hasRatingForm())}}function dl(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",27),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw(3).onShowMoreRatings()}),n._uU(1),n.ALo(2,"translate"),n.qZA()}if(2&l){const s=n.oxw(3);n.xp6(1),n.AsE("",n.lcZ(2,2,"apiGeneral.showMore")," (",s.getShowMoreLength(),") ")}}function $h(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div",22)(1,"div",11)(2,"h3",12),n._uU(3),n.ALo(4,"translate"),n.TgZ(5,"span"),n._uU(6),n.qZA()(),n.TgZ(7,"gv-select",23),n.NdJ("input",function(v){return n.CHM(s),n.oxw(2).onSortRatings(v)}),n.qZA()(),n.TgZ(8,"div",13),n._UZ(9,"gv-rating-list",24),n.TgZ(10,"div",25),n.YNc(11,dl,3,4,"gv-button",26),n.qZA()()()}if(2&l){const s=n.oxw(2);n.xp6(3),n.hij(" ",n.lcZ(4,8,"apiGeneral.userRatings")," "),n.xp6(3),n.hij("(",s.getRatingsLength(),")"),n.xp6(1),n.Q6J("options",s.ratingsSortOptions)("value",s.currentOrder),n.xp6(2),n.Q6J("permissions",s.ratingListPermissions)("ratings",s.ratings)("user",s.currentUser),n.xp6(2),n.Q6J("ngIf",s.hasMoreRatings())}}function Op(l,c){if(1&l&&(n.TgZ(0,"div",10)(1,"div",11)(2,"h4",12),n._uU(3),n.ALo(4,"translate"),n.qZA()(),n.TgZ(5,"div",13),n._uU(6),n.qZA()()),2&l){const s=n.oxw(2);n.xp6(3),n.Oqu(n.lcZ(4,2,"apiGeneral.description")),n.xp6(3),n.hij(" ",s.description," ")}}function Rp(l,c){if(1&l&&(n.ynx(0),n.TgZ(1,"span"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"a",34),n._uU(5),n.qZA(),n.BQk()),2&l){const s=n.oxw().$implicit,u=n.oxw(4);n.xp6(2),n.Oqu(n.lcZ(3,3,s.name)),n.xp6(2),n.Q6J("href",u.getSearchUrl(s.name,s.value),n.LSH),n.xp6(1),n.Oqu(s.value)}}function Vv(l,c){if(1&l&&(n.ynx(0),n.TgZ(1,"span"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n._uU(4),n.BQk()),2&l){const s=n.oxw().$implicit;n.xp6(2),n.Oqu(n.lcZ(3,2,s.name)),n.xp6(2),n.hij(" ",s.value," ")}}function zv(l,c){if(1&l&&(n.TgZ(0,"li",32),n.YNc(1,Rp,6,5,"ng-container",33),n.YNc(2,Vv,5,4,"ng-container",33),n.qZA()),2&l){const s=c.$implicit,u=n.oxw(4);n.xp6(1),n.Q6J("ngIf",u.isSearchable(s.name)),n.xp6(1),n.Q6J("ngIf",!u.isSearchable(s.name))}}function jh(l,c){if(1&l&&(n.TgZ(0,"div",29)(1,"ul",30),n.YNc(2,zv,3,2,"li",31),n.qZA()()),2&l){const s=n.oxw(3);n.xp6(2),n.Q6J("ngForOf",s.apiInformations)}}function os(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div",36)(1,"gv-button",37),n.NdJ("gv-button:click",function(){const w=n.CHM(s).$implicit;return n.oxw(4).goToExtern(w)}),n.TgZ(2,"span"),n._uU(3),n.qZA()()()}if(2&l){const s=c.$implicit;n.xp6(1),n.Q6J("href",s),n.xp6(2),n.Oqu(s)}}function Qc(l,c){if(1&l&&(n.TgZ(0,"div",29)(1,"h4",12),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.YNc(4,os,4,2,"div",35),n.qZA()),2&l){const s=n.oxw(3);n.xp6(2),n.Oqu(n.lcZ(3,2,"api.information.entrypoints")),n.xp6(2),n.Q6J("ngForOf",s.currentApi.entrypoints)}}function Ra(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-tag",39),n.NdJ("gv-tag:click",function(){const w=n.CHM(s).$implicit;return n.oxw(4).goToCategory(w)}),n._uU(1),n.qZA()}if(2&l){const s=c.$implicit;n.Q6J("clickable",!0),n.xp6(1),n.Oqu(s)}}function Gv(l,c){if(1&l&&(n.TgZ(0,"div",29)(1,"h4",12),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"span"),n.YNc(5,Ra,2,2,"gv-tag",38),n.qZA()()),2&l){const s=n.oxw(3);n.xp6(2),n.Oqu(n.lcZ(3,2,"api.information.categories")),n.xp6(3),n.Q6J("ngForOf",s.currentApi.categories)}}function Vh(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-tag",41),n.NdJ("gv-tag:click",function(){const w=n.CHM(s).$implicit;return n.oxw(4).goToSearch("labels",w)}),n._uU(1),n.qZA()}if(2&l){const s=c.$implicit;n.Q6J("clickable",!0),n.xp6(1),n.Oqu(s)}}function Lp(l,c){if(1&l&&(n.TgZ(0,"div",29)(1,"h4",12),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"span"),n.YNc(5,Vh,2,2,"gv-tag",40),n.qZA()()),2&l){const s=n.oxw(3);n.xp6(2),n.Oqu(n.lcZ(3,2,"api.information.labels")),n.xp6(3),n.Q6J("ngForOf",s.currentApi.labels)}}function Fp(l,c){1&l&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"api.information.beFirstToRate")))}function Np(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div",29)(1,"h4",12),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"span",42),n.YNc(5,Fp,3,3,"span",33),n.TgZ(6,"gv-rating",43),n.NdJ("click",function(){return n.CHM(s),n.oxw(3).onInfoRating()}),n.qZA()()()}if(2&l){const s=n.oxw(3);n.xp6(2),n.Oqu(n.lcZ(3,4,"api.information.ratings")),n.xp6(3),n.Q6J("ngIf",!s.currentApi.rating_summary.count),n.xp6(1),n.Q6J("count",s.currentApi.rating_summary.count)("value",s.currentApi.rating_summary.average)}}function Hp(l,c){if(1&l&&(n.TgZ(0,"div",29)(1,"h4",12),n._uU(2),n.ALo(3,"translate"),n.qZA(),n._UZ(4,"gv-metrics",44),n.qZA()),2&l){const s=n.oxw(3);n.xp6(2),n.Oqu(n.lcZ(3,2,"api.information.metrics")),n.xp6(2),n.Q6J("metrics",s.currentApiMetrics)}}function Bp(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div",36)(1,"gv-button",37),n.NdJ("gv-button:click",function(){const w=n.CHM(s).$implicit;return n.oxw(4).onNavChange(w)}),n.TgZ(2,"span"),n._uU(3),n.qZA()()()}if(2&l){const s=c.$implicit;n.xp6(1),n.Q6J("href",s.path),n.xp6(2),n.Oqu(s.title)}}function zh(l,c){if(1&l&&(n.TgZ(0,"div",29)(1,"h4",12),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"span"),n.YNc(5,Bp,4,2,"div",35),n.qZA()()),2&l){const s=n.oxw(3);n.xp6(2),n.Oqu(n.lcZ(3,2,"api.information.resources")),n.xp6(3),n.Q6J("ngForOf",s.resources)}}function Xc(l,c){if(1&l&&(n.TgZ(0,"div",10)(1,"div",13),n.YNc(2,jh,3,1,"div",28),n.YNc(3,Qc,5,4,"div",28),n.YNc(4,Gv,6,4,"div",28),n.YNc(5,Lp,6,4,"div",28),n.YNc(6,Np,7,6,"div",28),n.YNc(7,Hp,5,4,"div",28),n.YNc(8,zh,6,4,"div",28),n.qZA()()),2&l){const s=n.oxw(2);n.xp6(2),n.Q6J("ngIf",s.apiInformations.length>0),n.xp6(1),n.Q6J("ngIf",s.currentApi.entrypoints&&s.currentApi.entrypoints.length>0),n.xp6(1),n.Q6J("ngIf",s.currentApi.categories&&s.currentApi.categories.length>0),n.xp6(1),n.Q6J("ngIf",s.currentApi.labels&&s.currentApi.labels.length>0),n.xp6(1),n.Q6J("ngIf",s.hasRatingFeature&&s.canRate&&s.currentApi.rating_summary),n.xp6(1),n.Q6J("ngIf",s.currentApiMetrics&&(s.currentApiMetrics.subscribers||s.currentApiMetrics.health||s.currentApiMetrics.hits)),n.xp6(1),n.Q6J("ngIf",s.resources)}}function ec(l,c){if(1&l&&(n._UZ(0,"gv-list",45),n.ALo(1,"translate")),2&l){const s=n.oxw(2);n.s9C("title",n.lcZ(1,2,"api.list.connectedApps")),n.Q6J("items",s.connectedApps)}}function Kv(l,c){if(1&l&&(n.TgZ(0,"div",1)(1,"div",2),n.YNc(2,ao,2,1,"gv-button",3),n.YNc(3,or,7,4,"div",4),n.YNc(4,lo,1,1,"app-gv-page",5),n.YNc(5,ql,6,4,"div",4),n.YNc(6,$h,12,10,"div",6),n.qZA(),n.TgZ(7,"aside",7),n.YNc(8,Op,7,4,"div",4),n.YNc(9,Xc,9,7,"div",4),n.YNc(10,ec,2,4,"gv-list",8),n.qZA()()),2&l){const s=n.oxw();n.xp6(2),n.Q6J("ngIf",null!==s.backButton.label),n.xp6(1),n.Q6J("ngIf",s.description&&!s.apiHomepage),n.xp6(1),n.Q6J("ngIf",s.apiHomepage),n.xp6(1),n.Q6J("ngIf",s.canRate),n.xp6(1),n.Q6J("ngIf",s.hasRatings()&&s.apiHomepageLoaded),n.xp6(2),n.Q6J("ngIf",s.description&&s.apiHomepage),n.xp6(1),n.Q6J("ngIf",s.currentApi),n.xp6(1),n.Q6J("ngIf",s.connectedApps)}}const fl=Cn.w0.StatusEnum,tc={labels:"labels","api.owner":"ownerName"};let nc=(()=>{class l{constructor(s,u,v,w,U,fe,De,et,wt,Gt,fn,kn,Sn){this.apiService=s,this.route=u,this.translateService=v,this.router=w,this.currentUserService=U,this.permissionsService=fe,this.notificationService=De,this.configService=et,this.formBuilder=wt,this.scrollService=Gt,this.location=fn,this.portalService=kn,this.applicationService=Sn,this.permissions={},this.ratingListPermissions={update:[],delete:!1,addAnswer:!1,deleteAnswer:!1},this.backButton={}}ngOnInit(){const s=this.route.snapshot.params.apiId;this.permissions=this.route.snapshot.data.permissions,this.apiHomepage=this.route.snapshot.data.apiHomepage,this.apiInformations=this.route.snapshot.data.apiInformations,null==this.apiHomepage&&(this.apiHomepageLoaded=!0),this.hasRatingFeature=this.configService.hasFeature(Li.l.rating),this.route.params.subscribe(()=>{if(s)return this.hasRatingFeature&&(this.translateService.get([(0,yn.J)("apiGeneral.ratingsSortOptions.newest"),(0,yn.J)("apiGeneral.ratingsSortOptions.oldest"),(0,yn.J)("apiGeneral.ratingsSortOptions.best"),(0,yn.J)("apiGeneral.ratingsSortOptions.worst"),(0,yn.J)("apiGeneral.ratingsSortOptions.answers")]).toPromise().then(u=>{const v=Object.values(u).map(w=>({label:w,value:"date"}));v[1].value="-date",v[2].value="value",v[3].value="-value",v[4].value="answers",this.ratingsSortOptions=v}),this.ratingPageSize=3,this.currentOrder="date"),this.apiId=s,this.apiService.getApiMetricsByApiId({apiId:s}).toPromise().then(u=>this.currentApiMetrics=u),this.currentApi=this.route.snapshot.data.api,this.apiService.getApiLinks({apiId:s}).subscribe(u=>{u.slots&&u.slots.aside&&u.slots.aside.forEach(v=>{v.root&&(this.resources=this._buildLinks(s,v.links))})}),this.currentUser=this.currentUserService.getUser(),this.currentUser&&(this._updateRatings(),this.connectedApps=this.apiService.getSubscriberApplicationsByApiId({apiId:s,statuses:[fl.ACCEPTED]}).toPromise().then(u=>u.data.map(v=>({item:v,type:Vs.m.APPLICATION}))).catch(()=>[])),this.description=this.currentApi.description,this.computeBackButton(),this.currentApi})}_updateRatings(){if(this.hasRatingFeature){this.ratingForm=this.formBuilder.group({title:new Ht.NI(""),comment:new Ht.NI(""),value:new Ht.NI(null,[Ht.kI.required])}),this.configService.hasFeature(Li.l.ratingCommentMandatory)&&(this.ratingForm.get("title").setValidators([Ht.kI.required]),this.ratingForm.get("comment").setValidators([Ht.kI.required]));const s=this.apiId;this.currentUser&&this.apiService.getApiRatingsByApiId({apiId:s,mine:!0}).toPromise().then(v=>{this.userRating=v.data.find(w=>w.author.id===this.currentUser.id),this.canRate=this.permissions.RATING&&this.permissions.RATING.includes("C")&&null==this.userRating,this._updateRatingForm()}),this.apiService.getApiRatingsByApiId({apiId:s,page:1,size:this.ratingPageSize,order:this.currentOrder}).toPromise().then(u=>{this.ratings=u.data,this.currentUser&&(this.ratingListPermissions.update=this.ratings.filter(v=>v.author.id===this.currentUser.id).map(v=>v.id),this.ratingListPermissions.delete=this.permissions.RATING&&this.permissions.RATING.includes("D"),this.ratingListPermissions.addAnswer=this.permissions.RATING_ANSWER&&this.permissions.RATING_ANSWER.includes("C"),this.ratingListPermissions.deleteAnswer=this.permissions.RATING_ANSWER&&this.permissions.RATING_ANSWER.includes("D")),this.ratingsMetadata=u.metadata})}}_buildLinks(s,u){return u.map(v=>{let w,U;switch(v.resourceType){case Cn.rU.ResourceTypeEnum.External:w=v.resourceRef,w.toLowerCase().startsWith("http")&&(U="_blank");break;case Cn.rU.ResourceTypeEnum.Page:w="/catalog/api/"+s+"/doc",v.folder&&"root"!==v.resourceRef?w+="?folder="+v.resourceRef:v.folder||(w+="?page="+v.resourceRef),U="_self";break;case Cn.rU.ResourceTypeEnum.Category:w="/catalog/categories/"+v.resourceRef,U="_self"}return{title:v.name,path:w,target:U}})}goToCategory(s){this.router.navigate(["/catalog/categories",s])}isSearchable(s){return Object.keys(tc).includes(s)}goToSearch(s,u){return this.router.navigateByUrl(this.getSearchUrlTree(s,u))}getSearchUrl(s,u){return this.getSearchUrlTree(s,u).toString()}getSearchUrlTree(s,u){return this.router.createUrlTree(["catalog/search"],{queryParams:{q:`${tc[s]}:"${u}"`}})}goToExtern(s){this.onNavChange({path:s,title:null,target:"_blank"})}onNavChange(s){if(s.target&&"_blank"===s.target)window.open(s.path,s.target);else{const u=this.router.parseUrl(s.path),v=u.root.children[En.eC].segments.join("/");this.router.navigate([v],{queryParams:u.queryParams})}}onUpdate({rating:s}){const u=this.apiId;this.apiService.updateApiRating({apiId:u,ratingId:s.id,ratingInput:{title:s.title,value:s.value,comment:s.comment}}).toPromise().then(w=>{this.ratingForm=null,this._updateRatings(),this.apiService.getApiByApiId({apiId:u}).toPromise().then(U=>this.currentApi=U)}).then(()=>this.notificationService.info((0,yn.J)("apiGeneral.ratingUpdated")))}onDeleteRating({rating:s}){const u=this.apiId;this.apiService.deleteApiRating({apiId:u,ratingId:s.id}).toPromise().then(()=>{this.notificationService.info((0,yn.J)("apiGeneral.ratingDeleted"))}).finally(()=>{this._updateRatings(),this.apiService.getApiByApiId({apiId:u}).toPromise().then(v=>this.currentApi=v)})}onDeleteRatingAnswer({rating:s,answer:u}){this.apiService.deleteApiRatingAnswer({apiId:this.apiId,ratingId:s.id,answerId:u.id}).toPromise().then(()=>{this.notificationService.info((0,yn.J)("apiGeneral.ratingAnswerDeleted"))}).finally(()=>{this._updateRatings()})}onAnswer({rating:s,answer:u}){this.apiService.createApiRatingAnswer({apiId:this.apiId,ratingId:s.id,ratingAnswerInput:{comment:u}}).toPromise().then(()=>{this.notificationService.info((0,yn.J)("apiGeneral.ratingAnswerCreated"))}).finally(()=>{this._updateRatings()})}hasRatings(){return this.ratings&&this.ratings.length>0}hasRatingForm(){return null!=this.ratingForm}hasValidRatingForm(){return this.hasRatingForm()&&this.ratingForm.valid}rate(){const s=this.apiId,u=this.ratingForm.getRawValue();this.apiService.createApiRating({apiId:s,ratingInput:u}).toPromise().then(v=>{this.ratingForm=null,this.notificationService.info((0,yn.J)("apiGeneral.ratingCreated")),this._updateRatings(),this.apiService.getApiByApiId({apiId:s}).toPromise().then(w=>this.currentApi=w)})}_updateRatingForm(){this.userRating&&(this.ratingForm.controls.comment.setValue(this.userRating.comment),this.ratingForm.controls.title.setValue(this.userRating.title),this.ratingForm.controls.value.setValue(this.userRating.value))}onInfoRating(){this.scrollService.scrollToAnchor("apiRatingForm").catch(()=>{this.scrollService.scrollToAnchor("apiRatings")})}hasMoreRatings(){return this.ratingsMetadata&&this.ratingsMetadata.pagination.total>this.ratingPageSize}getRatingsLength(){return this.ratingsMetadata&&this.ratingsMetadata.pagination.total?this.ratingsMetadata.pagination.total:0}getShowMoreLength(){return this.getRatingsLength()-this.ratingPageSize}onShowMoreRatings(){this.ratingPageSize=this.getRatingsLength(),this._updateRatings()}onSortRatings({target:s}){this.currentOrder=s.value,this._updateRatings()}onInternalLinkClick(s){this.router.navigate(["/catalog/api/"+this.currentApi.id+"/doc"],{queryParams:{page:s}})}goBack(){this.router.navigate([this.backButton.url],{queryParams:this.backButton.queryParams})}computeBackButton(){var s=this;return(0,ur.Z)(function*(){let u,v,w;const U=s.route.snapshot.queryParamMap;if(U.has($n.O.QUERY))u=yield s.translateService.get((0,yn.J)("apiGeneral.backToSearch")).toPromise(),v="/catalog/search",w=s.route.snapshot.queryParams;else if(U.has($n.O.CATEGORY)){const fe=U.get($n.O.CATEGORY);try{const De=yield s.portalService.getCategoryByCategoryId({categoryId:fe}).toPromise();u=yield s.translateService.get((0,yn.J)("apiGeneral.backToCategory"),{name:De.name}).toPromise(),v=`/catalog/categories/${fe}`}catch(De){De&&De.interceptorFuture&&De.interceptorFuture.cancel()}}else if(U.has($n.O.APPLICATION)){const fe=U.get($n.O.APPLICATION);try{const De=yield s.applicationService.getApplicationByApplicationId({applicationId:fe}).toPromise();u=yield s.translateService.get((0,yn.J)("apiGeneral.backToApplication"),{name:De.name}).toPromise(),v=`/applications/${fe}`}catch(De){De&&De.interceptorFuture&&De.interceptorFuture.cancel()}}else if(U.has($n.O.API_QUERY)){const fe=U.get($n.O.API_QUERY);Object.values(Cn.ex).includes(fe)&&(u=yield s.translateService.get((0,yn.J)("apiGeneral.backToCatalog")).toPromise(),v=`/catalog/${fe.toLowerCase()}`)}s.backButton={label:u,url:v,queryParams:w}})()}onGvListClick(s){this.router.navigate([`/applications/${s.item.id}`])}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.sM),n.Y36(En.gz),n.Y36(ui.sK),n.Y36(En.F0),n.Y36(Yr.S),n.Y36(Cn.qQ),n.Y36(Mr.g),n.Y36(cr.e),n.Y36(Ht.qu),n.Y36(Qr.a),n.Y36(tn.Ye),n.Y36(Cn.EA),n.Y36(Cn.IX))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-api-general"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-rating-list:update",function(w){return u.onUpdate(w.detail)})("gv-rating-list:delete",function(w){return u.onDeleteRating(w.detail)})("gv-rating-list:delete-answer",function(w){return u.onDeleteRatingAnswer(w.detail)})("gv-rating-list:add-answer",function(w){return u.onAnswer(w.detail)})("app-gv-page-markdown:navigate",function(w){return u.onInternalLinkClick(w.detail.pageId)})("gv-list:click",function(w){return u.onGvListClick(w.detail)})},decls:1,vars:1,consts:[["class","page__content page__content-with-aside",4,"ngIf"],[1,"page__content","page__content-with-aside"],[1,"main"],["link","","icon","navigation:angle-left","class","page__content-back-button",3,"gv-button:click",4,"ngIf"],["class","page__box",4,"ngIf"],["class","page__box",3,"page","loaded",4,"ngIf"],["id","apiRatings","class","page__box",4,"ngIf"],[1,"aside"],["clickable","",3,"items","title",4,"ngIf"],["link","","icon","navigation:angle-left",1,"page__content-back-button",3,"gv-button:click"],[1,"page__box"],[1,"page__box-title"],[1,"title"],[1,"page__box-content"],[1,"page__box",3,"page","loaded"],["id","apiRatingForm","class","form rating-form",3,"formGroup","ngSubmit",4,"ngIf"],["id","apiRatingForm",1,"form","rating-form",3,"formGroup","ngSubmit"],["formControlName","title","name","title","ngDefaultControl","",1,"form__control",3,"value","label","placeholder"],["formControlName","comment","name","comment","ngDefaultControl","","rows","5",1,"form__control",3,"value","placeholder"],[1,"page__box-footer","form__actions","form__actions-rating"],["formControlName","value","name","value","ngDefaultControl","","required","","with-description","",3,"value"],["primary","","type","submit",3,"disabled"],["id","apiRatings",1,"page__box"],["small","",3,"options","value","input"],[3,"permissions","ratings","user"],[1,"rating-list-actions"],["outlined","","primary","",3,"gv-button:click",4,"ngIf"],["outlined","","primary","",3,"gv-button:click"],["class","info",4,"ngIf"],[1,"info"],[1,"info__miscellaneous"],["class","info__miscellaneous_item",4,"ngFor","ngForOf"],[1,"info__miscellaneous_item"],[4,"ngIf"],[3,"href"],["class","info__resources",4,"ngFor","ngForOf"],[1,"info__resources"],["link","",3,"href","gv-button:click"],[3,"clickable","gv-tag:click",4,"ngFor","ngForOf"],[3,"clickable","gv-tag:click"],["major","",3,"clickable","gv-tag:click",4,"ngFor","ngForOf"],["major","",3,"clickable","gv-tag:click"],[1,"info__figures"],["readonly","",3,"count","value","click"],[3,"metrics"],["clickable","",3,"items","title"]],template:function(s,u){1&s&&n.YNc(0,Kv,11,8,"div",0),2&s&&n.Q6J("ngIf",u.currentApi)},directives:[tn.O5,oo.G,Ht._Y,Ht.JL,Ht.sg,Nn.T,Ht.JJ,Ht.u,Ht.Fj,Ht.Q7,tn.sg],pipes:[ui.X$],styles:[".form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{padding:24px}.form[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]{flex-direction:column;text-align:center;align-items:stretch}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%]{align-self:center}.form[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:.2rem .2rem 1rem;box-sizing:border-box;width:100%}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 0 .2rem;align-self:flex-end}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin:0}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%]{align-content:center;align-items:center;background-color:var(--gv-theme-color);border-radius:2px;color:var(--gv-theme-font-color-light);--gv-icon--c: var(--gv-theme-font-color-light);--gv-icon--s: 100px;display:flex;flex-direction:column;font-size:var(--gv-theme-font-size-xs);justify-content:space-around;line-height:22px;padding:2rem;text-align:center}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:1rem 0}.rating-form[_ngcontent-%COMP%]{--gv-rating--s: 26px}.rating-list-actions[_ngcontent-%COMP%]{text-align:center}.info[_ngcontent-%COMP%]{margin:12px 0}.info__description[_ngcontent-%COMP%]{background-color:#fafafa;background-color:var(--gv-theme-neutral-color-lighter, #fafafa);border-radius:2px;margin-top:0;padding:16px}.info__resources[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:normal;text-align:left}.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:10px}.info__figures[_ngcontent-%COMP%]{display:flex;flex-direction:column}.info[_ngcontent-%COMP%]   gv-rating[_ngcontent-%COMP%]{cursor:pointer;--gv-rating--s: 24px}.info[_ngcontent-%COMP%]   gv-metrics[_ngcontent-%COMP%]{display:grid;grid-gap:.5rem}.info__miscellaneous[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.info__miscellaneous_item[_ngcontent-%COMP%]{padding:1px 0;line-height:22px;vertical-align:middle}.info__miscellaneous_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:1px 5px 1px 0;opacity:.6}.link[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]:visited{cursor:pointer;opacity:1;transition:opacity .15s ease-in;text-decoration:none}.link[_ngcontent-%COMP%]:hover{opacity:.7;transition:opacity .15s ease-in}"]}),l})(),Up=(()=>{class l{constructor(s){this.apiService=s}resolve(s){return this.apiService.getPagesByApiId({apiId:s.params.apiId,homepage:!0}).toPromise().then(v=>v.data[0])}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(Cn.sM))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),$p=(()=>{class l{constructor(s){this.portalService=s}resolve(s){return this.portalService.getApiInformations({apiId:s.params.apiId})}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(Cn.EA))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})(),jp=(()=>{class l{constructor(s){this.apiService=s}resolve(s){return this.apiService.getApiByApiId({apiId:s.params.apiId})}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(Cn.sM))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();d(30423);var Gh=d(91456),Yi=d(9455),qc=d(14129);window.customElements.define("gv-plans",class zp extends E.oi{static get properties(){return{plans:{type:Array},current:{type:Number},value:{type:String,reflect:!0},skeleton:{type:Boolean},size:{type:Number},_empty:{type:Boolean},_plans:{type:Array}}}static get styles(){return[qc.c,sr.p,E.iv`
        :host {
          display: block;
          box-sizing: border-box;
          margin: 0.2rem;
          --bgc: var(--gv-plans--bgc, var(--gv-theme-color, #5a7684));
          --fc: var(--gv-plans-font--c, var(--gv-theme-font-color-light, #ffffff));
          --gv-icon--c: var(--bgc);
        }

        .plans {
          display: flex;
          list-style-type: none;
          border-radius: 2px;
          padding: 0;
          margin: 0;
          height: 80px;
        }

        .plan {
          flex: 1;
          padding: 16px;
          line-height: 24px;
          cursor: pointer;
        }

        .plan.active {
          background-color: var(--bgc);
          color: var(--fc);
          transition: all 0.2s ease-in;
        }

        .name {
          font-size: var(--gv-theme-font-size-l, 16px);
          font-weight: bold;
        }

        .description {
          font-size: var(--gv-theme-font-size-s, 12px);
          --lh: var(--gv-theme-font-size-s, 12px);
          line-height: var(--lh);
          --max-lines: 2;
          max-height: calc(var(--lh) * var(--max-lines));
          overflow: hidden;
        }

        .selectors {
          display: flex;
        }

        .selector {
          position: relative;
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .active .triangle {
          width: 0;
          height: 0;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 9px solid var(--bgc);
        }

        .characteristics {
          margin-top: 34px;
          border: 1px solid var(--gv-plans-characteristics--bdc, var(--gv-theme-neutral-color, #f5f5f5));
          border-radius: 4px;
          display: flex;
          padding: 34px;
          text-align: center;
          justify-content: center;
          user-select: none;
        }

        .characteristic {
          font-size: var(--gv-theme-font-size-m, 14px);
          line-height: 22px;
          font-weight: bold;
          flex: 1;
          margin: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .circle {
          background-color: var(--gv-plans-characteristic--bgc, var(--gv-theme-color-light, #86c3d0));
          border-radius: 50%;
          width: 32px;
          height: 32px;
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        gv-icon {
          --gv-icon--s: var(--gv-plans-icon--s, 24px);
        }

        .skeleton {
          min-height: 400px;
          margin: 0 0.2rem;
          opacity: 0.5;
        }

        .link {
          text-decoration: underline;
        }

        .pagination {
          display: flex;
          height: 0;
        }
      `,Hs.F]}constructor(){super(),this.current=1,this.size=4,this._plans=[],this._empty=!0}get _characteristics(){if(this._plans.length>=this.current){const c=this._plans[this.current-1];if(c.characteristics&&c.characteristics.length>0)return c.characteristics;let s=[];if(c.validation)switch(c.validation.toUpperCase()){case"AUTO":s.push((0,Yi.ag)("gv-plans.validation.auto"));break;case"MANUAL":s.push((0,Yi.ag)("gv-plans.validation.manual"))}if(c.security)switch(c.security.toUpperCase()){case"API_KEY":s.push((0,Yi.ag)("gv-plans.security.apiKey"));break;case"JWT":s.push((0,Yi.ag)("gv-plans.security.jwt"));break;case"OAUTH2":s.push((0,Yi.ag)("gv-plans.security.oauth2"));break;case"KEY_LESS":s=[],s.push((0,Yi.ag)("gv-plans.security.keyLess"))}return 0===s.length&&s.push((0,Yi.ag)("gv-plans.characteristics.empty")),s}return[]}set plans(c){this.skeleton=!0,Promise.resolve(c).then(s=>{if(s){if(this._empty=0===s.length,this._plans=s,!this._empty){const u=this._plans.find(v=>v.active);null==u?(this._plans[0].active=!0,this.value=this._plans[0].id):this.value=u.id}this.skeleton=!1}}).catch(s=>{this._error=!0,this._plans=[],this.skeleton=!1})}to(c){c&&(this.value=c.id,this._plans=this._plans.map((s,u)=>(JSON.stringify(s)===JSON.stringify(c)?(s.active=!0,this.current=u+1):s.active=!1,s)),this.dispatchEvent(new Event("input"),{bubbles:!0,cancelable:!0}))}_getPlanTitle(c){let s=c.name;return c.description&&(s+=`: ${c.description}`),s}_onRedirect(){(0,_r.h)(this,"redirect")}get hasPagination(){return this.size<this._plans.length}get hasLeft(){return this.hasPagination&&this.current>1}get hasRight(){return this.hasPagination&&this.current<this._plans.length}get plans(){if(this.hasPagination){const c=this._plans.slice(0,this.current),s=this._plans.slice(this.current),u=[c.pop()];return new Array(this.size-1).fill("").forEach((v,w)=>{if(w%2==0&&c.length>0||0===s.length){const U=c.pop();u.unshift(U)}else if(s.length>0){const U=s.shift();u.push(U)}}),u}return this._plans}_renderHeader(c){return c.map((s,u)=>E.dy`<li
        @click="${this.to.bind(this,s)}"
        title="${this._getPlanTitle(s)}"
        class="${(0,si.$)({plan:!0,active:s.active})}"
      >
        <div class="name">${s.name}</div>
        <div class="description">${s.description}</div>
      </li>`)}_renderTriangles(c){return c.map((s,u)=>E.dy`<div
        class="${(0,si.$)({selector:!0,active:s.active})}"
      >
        <div class="triangle"></div>
      </div>`)}_renderPagination(){return this.hasPagination?E.dy` <div class="pagination">
        ${this.hasLeft?E.dy`<gv-icon @click="${this.toLeft}" shape="navigation:angle-left" class="link"></gv-icon>`:""}
        <div style="flex: 1;"></div>
        ${this.hasRight?E.dy`<gv-icon @click="${this.toRight}" shape="navigation:angle-right" class="link"></gv-icon>`:""}
      </div>`:""}render(){const c=(0,Gh.M)(this,"--gv-plans--bgc","#5A7684"),{r:s,g:u,b:v}=(0,Gh.$)(c),w={backgroundColor:`rgba(${s}, ${u}, ${v}, 0.1)`,color:`rgba(${s}, ${u}, ${v}, 0.5)`};if(!this.skeleton){if(this._error)return E.dy`<div class="error">
          <p>${(0,Yi.ag)("gv-plans.error")}</p>
        </div>`;if(this._empty)return E.dy` <div class="empty">
          <p>${(0,Yi.ag)("gv-plans.empty.title")}</p>
          <a class="link" @click="${this._onRedirect}">${(0,Yi.ag)("gv-plans.empty.redirect")}</a>
        </div>`}const fe=this.plans;return E.dy`<div class="${(0,si.$)({skeleton:this.skeleton})}">
      <ul class="plans" style="${(0,$i.V)(w)}">
        ${this._renderHeader(fe)}
      </ul>
      <div class="selectors">${this._renderTriangles(fe)}</div>
      ${this._renderPagination()}
      ${this.skeleton?"":E.dy`<div class="characteristics">
            ${(0,no.r)(this._characteristics,De=>De,(De,et)=>E.dy`<div class="characteristic">
                  <div class="circle"><gv-icon shape="home:flower#2"></gv-icon></div>
                  <div>${De}</div>
                </div>`)}
          </div>`}
    </div> `}toLeft(){this.to(this._plans[this.current-2])}toRight(){this.to(this._plans[this.current])}}),d(84834);var dn=d(9511),en=d(35559);const pl=en.q6.define(),gl=en.q6.define(),Gp=en.r$.define(),Kh=en.r$.define({combine:l=>(0,en.BO)(l,{minDepth:100,newGroupDelay:500},{minDepth:Math.max,newGroupDelay:Math.min})}),La=en.QQ.define({create:()=>Zo.empty,update(l,c){let s=c.state.facet(Kh),u=c.annotation(pl);if(u){let De=c.docChanged?en.jT.single(function Kp(l){let c=0;return l.iterChangedRanges((s,u)=>c=u),c}(c.changes)):void 0,et=pr.fromTransaction(c,De),wt=u.side,Gt=0==wt?l.undone:l.done;return Gt=et?Wo(Gt,Gt.length,s.minDepth,et):Zh(Gt,c.startState.selection),new Zo(0==wt?u.rest:Gt,0==wt?Gt:u.rest)}let v=c.annotation(gl);if(("full"==v||"before"==v)&&(l=l.isolate()),!1===c.annotation(en.YW.addToHistory))return c.changes.empty?l:l.addMapping(c.changes.desc);let w=pr.fromTransaction(c),U=c.annotation(en.YW.time),fe=c.annotation(en.YW.userEvent);return w?l=l.addChanges(w,U,fe,s.newGroupDelay,s.minDepth):c.selection&&(l=l.addSelection(c.startState.selection,U,fe,s.newGroupDelay)),("full"==v||"after"==v)&&(l=l.isolate()),l},toJSON:l=>({done:l.done.map(c=>c.toJSON()),undone:l.undone.map(c=>c.toJSON())}),fromJSON:l=>new Zo(l.done.map(pr.fromJSON),l.undone.map(pr.fromJSON))});function ml(l={}){return[La,Kh.of(l),dn.tk.domEventHandlers({beforeinput(c,s){let u="historyUndo"==c.inputType?Wh:"historyRedo"==c.inputType?eu:null;return!!u&&(c.preventDefault(),u(s))}})]}function Ko(l,c){return function({state:s,dispatch:u}){if(!c&&s.readOnly)return!1;let v=s.field(La,!1);if(!v)return!1;let w=v.pop(l,s,c);return!!w&&(u(w),!0)}}const Wh=Ko(0,!1),eu=Ko(1,!1),tu=Ko(0,!0),ic=Ko(1,!0);class pr{constructor(c,s,u,v,w){this.changes=c,this.effects=s,this.mapped=u,this.startSelection=v,this.selectionsAfter=w}setSelAfter(c){return new pr(this.changes,this.effects,this.mapped,this.startSelection,c)}toJSON(){var c,s,u;return{changes:null===(c=this.changes)||void 0===c?void 0:c.toJSON(),mapped:null===(s=this.mapped)||void 0===s?void 0:s.toJSON(),startSelection:null===(u=this.startSelection)||void 0===u?void 0:u.toJSON(),selectionsAfter:this.selectionsAfter.map(v=>v.toJSON())}}static fromJSON(c){return new pr(c.changes&&en.as.fromJSON(c.changes),[],c.mapped&&en.n0.fromJSON(c.mapped),c.startSelection&&en.jT.fromJSON(c.startSelection),c.selectionsAfter.map(en.jT.fromJSON))}static fromTransaction(c,s){let u=Ss;for(let v of c.startState.facet(Gp)){let w=v(c);w.length&&(u=u.concat(w))}return!u.length&&c.changes.empty?null:new pr(c.changes.invert(c.startState.doc),u,void 0,s||c.startState.selection,Ss)}static selection(c){return new pr(void 0,Ss,void 0,void 0,c)}}function Wo(l,c,s,u){let w=l.slice(c+1>s+20?c-s-1:0,c);return w.push(u),w}function nu(l,c){return l.length?c.length?l.concat(c):l:c}const Ss=[];function Zh(l,c){if(l.length){let s=l[l.length-1],u=s.selectionsAfter.slice(Math.max(0,s.selectionsAfter.length-200));return u.length&&u[u.length-1].eq(c)?l:(u.push(c),Wo(l,l.length-1,1e9,s.setSelAfter(u)))}return[pr.selection([c])]}function Jp(l){let c=l[l.length-1],s=l.slice();return s[l.length-1]=c.setSelAfter(c.selectionsAfter.slice(0,c.selectionsAfter.length-1)),s}function iu(l,c){if(!l.length)return l;let s=l.length,u=Ss;for(;s;){let v=rc(l[s-1],c,u);if(v.changes&&!v.changes.empty||v.effects.length){let w=l.slice(0,s);return w[s-1]=v,w}c=v.mapped,s--,u=v.selectionsAfter}return u.length?[pr.selection(u)]:Ss}function rc(l,c,s){let u=nu(l.selectionsAfter.length?l.selectionsAfter.map(fe=>fe.map(c)):Ss,s);if(!l.changes)return pr.selection(u);let v=l.changes.map(c),w=c.mapDesc(l.changes,!0),U=l.mapped?l.mapped.composeDesc(w):w;return new pr(v,en.Py.mapEffects(l.effects,c),U,l.startSelection.map(w),u)}const ru=/^(input\.type|delete)($|\.)/;let Zo=(()=>{class l{constructor(s,u,v=0,w){this.done=s,this.undone=u,this.prevTime=v,this.prevUserEvent=w}isolate(){return this.prevTime?new l(this.done,this.undone):this}addChanges(s,u,v,w,U){let fe=this.done,De=fe[fe.length-1];return fe=De&&De.changes&&!De.changes.empty&&s.changes&&(!v||ru.test(v))&&(!De.selectionsAfter.length&&u-this.prevTime<w&&function Yp(l,c){let s=[],u=!1;return l.iterChangedRanges((v,w)=>s.push(v,w)),c.iterChangedRanges((v,w,U,fe)=>{for(let De=0;De<s.length;){let et=s[De++],wt=s[De++];fe>=et&&U<=wt&&(u=!0)}}),u}(De.changes,s.changes)||"input.type.compose"==v)?Wo(fe,fe.length-1,U,new pr(s.changes.compose(De.changes),nu(s.effects,De.effects),De.mapped,De.startSelection,Ss)):Wo(fe,fe.length,U,s),new l(fe,Ss,u,v)}addSelection(s,u,v,w){let U=this.done.length?this.done[this.done.length-1].selectionsAfter:Ss;return U.length>0&&u-this.prevTime<w&&v==this.prevUserEvent&&v&&/^select($|\.)/.test(v)&&function Yv(l,c){return l.ranges.length==c.ranges.length&&0===l.ranges.filter((s,u)=>s.empty!=c.ranges[u].empty).length}(U[U.length-1],s)?this:new l(Zh(this.done,s),this.undone,u,v)}addMapping(s){return new l(iu(this.done,s),iu(this.undone,s),this.prevTime,this.prevUserEvent)}pop(s,u,v){let w=0==s?this.done:this.undone;if(0==w.length)return null;let U=w[w.length-1];if(v&&U.selectionsAfter.length)return u.update({selection:U.selectionsAfter[U.selectionsAfter.length-1],annotations:pl.of({side:s,rest:Jp(w)}),userEvent:0==s?"select.undo":"select.redo",scrollIntoView:!0});if(U.changes){let fe=1==w.length?Ss:w.slice(0,w.length-1);return U.mapped&&(fe=iu(fe,U.mapped)),u.update({changes:U.changes,selection:U.startSelection,effects:U.effects,annotations:pl.of({side:s,rest:fe}),filter:!1,userEvent:0==s?"undo":"redo",scrollIntoView:!0})}return null}}return l.empty=new l(Ss,Ss),l})();const Qp=[{key:"Mod-z",run:Wh,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:eu,preventDefault:!0},{key:"Mod-u",run:tu,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:ic,preventDefault:!0}];var Ft=d(35733),Xr=d(22332);class as extends Xr.uU{compare(c){return this==c||this.constructor==c.constructor&&this.eq(c)}eq(c){return!1}destroy(c){}}as.prototype.elementClass="",as.prototype.toDOM=void 0,as.prototype.mapMode=en.gc.TrackBefore,as.prototype.startSide=as.prototype.endSide=-1,as.prototype.point=!0;const Fa=en.r$.define(),Yh={class:"",renderEmptyElements:!1,elementStyle:"",markers:()=>Xr.Xs.empty,lineMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{}},Na=en.r$.define();function su(l){return[Jh(),Na.of(Object.assign(Object.assign({},Yh),l))]}const ua=dn.tk.baseTheme({".cm-gutters":{display:"flex",height:"100%",boxSizing:"border-box",left:0,zIndex:200},"&light .cm-gutters":{backgroundColor:"#f5f5f5",color:"#999",borderRight:"1px solid #ddd"},"&dark .cm-gutters":{backgroundColor:"#333338",color:"#ccc"},".cm-gutter":{display:"flex !important",flexDirection:"column",flexShrink:0,boxSizing:"border-box",minHeight:"100%",overflow:"hidden"},".cm-gutterElement":{boxSizing:"border-box"},".cm-lineNumbers .cm-gutterElement":{padding:"0 3px 0 5px",minWidth:"20px",textAlign:"right",whiteSpace:"nowrap"},"&light .cm-activeLineGutter":{backgroundColor:"#e2f2ff"},"&dark .cm-activeLineGutter":{backgroundColor:"#222227"}}),ou=en.r$.define({combine:l=>l.some(c=>c)});function Jh(l){let c=[Xp,ua];return l&&!1===l.fixed&&c.push(ou.of(!0)),c}const Xp=dn.lg.fromClass(class{constructor(l){this.view=l,this.prevViewport=l.viewport,this.dom=document.createElement("div"),this.dom.className="cm-gutters",this.dom.setAttribute("aria-hidden","true"),this.dom.style.minHeight=this.view.contentHeight+"px",this.gutters=l.state.facet(Na).map(c=>new ha(l,c));for(let c of this.gutters)this.dom.appendChild(c.dom);this.fixed=!l.state.facet(ou),this.fixed&&(this.dom.style.position="sticky"),this.syncGutters(!1),l.scrollDOM.insertBefore(this.dom,l.contentDOM)}update(l){if(this.updateGutters(l)){let c=this.prevViewport,s=l.view.viewport,u=Math.min(c.to,s.to)-Math.max(c.from,s.from);this.syncGutters(u<.8*(s.to-s.from))}l.geometryChanged&&(this.dom.style.minHeight=this.view.contentHeight+"px"),this.view.state.facet(ou)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?"sticky":""),this.prevViewport=l.view.viewport}syncGutters(l){let c=this.dom.nextSibling;l&&this.dom.remove();let s=Xr.Xs.iter(this.view.state.facet(Fa),this.view.viewport.from),u=[],v=this.gutters.map(w=>new Io(w,this.view.viewport,-this.view.documentPadding.top));for(let w of this.view.viewportLineBlocks){let U;if(Array.isArray(w.type)){for(let fe of w.type)if(fe.type==dn.kH.Text){U=fe;break}}else U=w.type==dn.kH.Text?w:void 0;if(U){u.length&&(u=[]),Xh(s,u,w.from);for(let fe of v)fe.line(this.view,U,u)}}for(let w of v)w.finish();l&&this.view.scrollDOM.insertBefore(this.dom,c)}updateGutters(l){let c=l.startState.facet(Na),s=l.state.facet(Na),u=l.docChanged||l.heightChanged||l.viewportChanged||!Xr.Xs.eq(l.startState.facet(Fa),l.state.facet(Fa),l.view.viewport.from,l.view.viewport.to);if(c==s)for(let v of this.gutters)v.update(l)&&(u=!0);else{u=!0;let v=[];for(let w of s){let U=c.indexOf(w);U<0?v.push(new ha(this.view,w)):(this.gutters[U].update(l),v.push(this.gutters[U]))}for(let w of this.gutters)w.dom.remove(),v.indexOf(w)<0&&w.destroy();for(let w of v)this.dom.appendChild(w.dom);this.gutters=v}return u}destroy(){for(let l of this.gutters)l.destroy();this.dom.remove()}},{provide:dn.BF.scrollMargins.from(l=>0!=l.gutters.length&&l.fixed?l.view.textDirection==dn.Nm.LTR?{left:l.dom.offsetWidth}:{right:l.dom.offsetWidth}:null)});function Qh(l){return Array.isArray(l)?l:[l]}function Xh(l,c,s){for(;l.value&&l.from<=s;)l.from==s&&c.push(l.value),l.next()}class Io{constructor(c,s,u){this.gutter=c,this.height=u,this.localMarkers=[],this.i=0,this.cursor=Xr.Xs.iter(c.markers,s.from)}line(c,s,u){this.localMarkers.length&&(this.localMarkers=[]),Xh(this.cursor,this.localMarkers,s.from);let v=u.length?this.localMarkers.concat(u):this.localMarkers,w=this.gutter.config.lineMarker(c,s,v);w&&v.unshift(w);let U=this.gutter;if(0==v.length&&!U.config.renderEmptyElements)return;let fe=s.top-this.height;if(this.i==U.elements.length){let De=new au(c,s.height,fe,v);U.elements.push(De),U.dom.appendChild(De.dom)}else U.elements[this.i].update(c,s.height,fe,v);this.height=s.bottom,this.i++}finish(){let c=this.gutter;for(;c.elements.length>this.i;){let s=c.elements.pop();c.dom.removeChild(s.dom),s.destroy()}}}class ha{constructor(c,s){this.view=c,this.config=s,this.elements=[],this.spacer=null,this.dom=document.createElement("div"),this.dom.className="cm-gutter"+(this.config.class?" "+this.config.class:"");for(let u in s.domEventHandlers)this.dom.addEventListener(u,v=>{let w=c.lineBlockAtHeight(v.clientY-c.documentTop);s.domEventHandlers[u](c,w,v)&&v.preventDefault()});this.markers=Qh(s.markers(c)),s.initialSpacer&&(this.spacer=new au(c,0,0,[s.initialSpacer(c)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+="visibility: hidden; pointer-events: none")}update(c){let s=this.markers;if(this.markers=Qh(this.config.markers(c.view)),this.spacer&&this.config.updateSpacer){let v=this.config.updateSpacer(this.spacer.markers[0],c);v!=this.spacer.markers[0]&&this.spacer.update(c.view,0,0,[v])}let u=c.view.viewport;return!Xr.Xs.eq(this.markers,s,u.from,u.to)||!!this.config.lineMarkerChange&&this.config.lineMarkerChange(c)}destroy(){for(let c of this.elements)c.destroy()}}class au{constructor(c,s,u,v){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement("div"),this.update(c,s,u,v)}update(c,s,u,v){this.height!=s&&(this.dom.style.height=(this.height=s)+"px"),this.above!=u&&(this.dom.style.marginTop=(this.above=u)?u+"px":""),function qp(l,c){if(l.length!=c.length)return!1;for(let s=0;s<l.length;s++)if(!l[s].compare(c[s]))return!1;return!0}(this.markers,v)||this.setMarkers(c,v)}setMarkers(c,s){let u="cm-gutterElement",v=this.dom.firstChild;for(let w=0,U=0;;){let fe=U,De=w<s.length?s[w++]:null,et=!1;if(De){let wt=De.elementClass;wt&&(u+=" "+wt);for(let Gt=U;Gt<this.markers.length;Gt++)if(this.markers[Gt].compare(De)){fe=Gt,et=!0;break}}else fe=this.markers.length;for(;U<fe;){let wt=this.markers[U++];if(wt.toDOM){wt.destroy(v);let Gt=v.nextSibling;v.remove(),v=Gt}}if(!De)break;De.toDOM&&(et?v=v.nextSibling:this.dom.insertBefore(De.toDOM(c),v)),et&&U++}this.dom.className=u,this.markers=s}destroy(){this.setMarkers(null,[])}}const eg=en.r$.define(),Ha=en.r$.define({combine:l=>(0,en.BO)(l,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(c,s){let u=Object.assign({},c);for(let v in s){let w=u[v],U=s[v];u[v]=w?(fe,De,et)=>w(fe,De,et)||U(fe,De,et):U}return u}})});class lu extends as{constructor(c){super(),this.number=c}eq(c){return this.number==c.number}toDOM(){return document.createTextNode(this.number)}}function cu(l,c){return l.state.facet(Ha).formatNumber(c,l.state)}const qh=Na.compute([Ha],l=>({class:"cm-lineNumbers",renderEmptyElements:!1,markers:c=>c.state.facet(eg),lineMarker:(c,s,u)=>u.some(v=>v.toDOM)?null:new lu(cu(c,c.state.doc.lineAt(s.from).number)),lineMarkerChange:c=>c.startState.facet(Ha)!=c.state.facet(Ha),initialSpacer:c=>new lu(cu(c,ed(c.state.doc.lines))),updateSpacer(c,s){let u=cu(s.view,ed(s.view.state.doc.lines));return u==c.number?c:new lu(u)},domEventHandlers:l.facet(Ha).domEventHandlers}));function tg(l={}){return[Ha.of(l),Jh(),qh]}function ed(l){let c=9;for(;c<l;)c=10*c+9;return c}const ng=new class extends as{constructor(){super(...arguments),this.elementClass="cm-activeLineGutter"}},ig=Fa.compute(["selection"],l=>{let c=[],s=-1;for(let u of l.selection.ranges)if(u.empty){let v=l.doc.lineAt(u.head).from;v>s&&(s=v,c.push(ng.range(v)))}return Xr.Xs.of(c)});function Qv(){return ig}function td(l,c){let s=c.mapPos(l.from,1),u=c.mapPos(l.to,-1);return s>=u?void 0:{from:s,to:u}}const Yo=en.Py.define({map:td}),Ba=en.Py.define({map:td});function zs(l){let c=[];for(let{head:s}of l.state.selection.ranges)c.some(u=>u.from<=s&&u.to>=s)||c.push(l.lineBlockAt(s));return c}const Ts=en.QQ.define({create:()=>dn.p.none,update(l,c){l=l.map(c.changes);for(let s of c.effects)s.is(Yo)&&!nd(l,s.value.from,s.value.to)?l=l.update({add:[og.range(s.value.from,s.value.to)]}):s.is(Ba)&&(l=l.update({filter:(u,v)=>s.value.from!=u||s.value.to!=v,filterFrom:s.value.from,filterTo:s.value.to}));if(c.selection){let s=!1,{head:u}=c.selection.main;l.between(u,u,(v,w)=>{v<u&&w>u&&(s=!0)}),s&&(l=l.update({filterFrom:u,filterTo:u,filter:(v,w)=>w<=u||v>=u}))}return l},provide:l=>dn.tk.decorations.from(l)});function vl(l,c,s){var u;let v=null;return null===(u=l.field(Ts,!1))||void 0===u||u.between(c,s,(w,U)=>{(!v||v.from>w)&&(v={from:w,to:U})}),v}function nd(l,c,s){let u=!1;return l.between(c,c,(v,w)=>{v==c&&w==s&&(u=!0)}),u}function sg(l,c){return l.field(Ts,!1)?c:c.concat(en.Py.appendConfig.of(sd()))}function sc(l,c,s=!0){let u=l.state.doc.lineAt(c.from).number,v=l.state.doc.lineAt(c.to).number;return dn.tk.announce.of(`${l.state.phrase(s?"Folded lines":"Unfolded lines")} ${u} ${l.state.phrase("to")} ${v}.`)}const ey=[{key:"Ctrl-Shift-[",mac:"Cmd-Alt-[",run:l=>{for(let c of zs(l)){let s=(0,Ft.Fw)(l.state,c.from,c.to);if(s)return l.dispatch({effects:sg(l.state,[Yo.of(s),sc(l,s)])}),!0}return!1}},{key:"Ctrl-Shift-]",mac:"Cmd-Alt-]",run:l=>{if(!l.state.field(Ts,!1))return!1;let c=[];for(let s of zs(l)){let u=vl(l.state,s.from,s.to);u&&c.push(Ba.of(u),sc(l,u,!1))}return c.length&&l.dispatch({effects:c}),c.length>0}},{key:"Ctrl-Alt-[",run:l=>{let{state:c}=l,s=[];for(let u=0;u<c.doc.length;){let v=l.lineBlockAt(u),w=(0,Ft.Fw)(c,v.from,v.to);w&&s.push(Yo.of(w)),u=(w?l.lineBlockAt(w.to):v).to+1}return s.length&&l.dispatch({effects:sg(l.state,s)}),!!s.length}},{key:"Ctrl-Alt-]",run:l=>{let c=l.state.field(Ts,!1);if(!c||!c.size)return!1;let s=[];return c.between(0,l.state.doc.length,(u,v)=>{s.push(Ba.of({from:u,to:v}))}),l.dispatch({effects:s}),!0}}],ty={placeholderDOM:null,placeholderText:"\u2026"},uu=en.r$.define({combine:l=>(0,en.BO)(l,ty)});function sd(l){let c=[Ts,oc];return l&&c.push(uu.of(l)),c}const og=dn.p.replace({widget:new class extends dn.l9{toDOM(l){let{state:c}=l,s=c.facet(uu),u=w=>{let U=l.lineBlockAt(l.posAtDOM(w.target)),fe=vl(l.state,U.from,U.to);fe&&l.dispatch({effects:Ba.of(fe)}),w.preventDefault()};if(s.placeholderDOM)return s.placeholderDOM(l,u);let v=document.createElement("span");return v.textContent=s.placeholderText,v.setAttribute("aria-label",c.phrase("folded code")),v.title=c.phrase("unfold"),v.className="cm-foldPlaceholder",v.onclick=u,v}}}),ag={openText:"\u2304",closedText:"\u203a",markerDOM:null,domEventHandlers:{}};class hu extends as{constructor(c,s){super(),this.config=c,this.open=s}eq(c){return this.config==c.config&&this.open==c.open}toDOM(c){if(this.config.markerDOM)return this.config.markerDOM(this.open);let s=document.createElement("span");return s.textContent=this.open?this.config.openText:this.config.closedText,s.title=c.state.phrase(this.open?"Fold line":"Unfold line"),s}}function od(l={}){let c=Object.assign(Object.assign({},ag),l),s=new hu(c,!0),u=new hu(c,!1),v=dn.lg.fromClass(class{constructor(U){this.from=U.viewport.from,this.markers=this.buildMarkers(U)}update(U){(U.docChanged||U.viewportChanged||U.startState.facet(Ft.dK)!=U.state.facet(Ft.dK)||U.startState.field(Ts,!1)!=U.state.field(Ts,!1))&&(this.markers=this.buildMarkers(U.view))}buildMarkers(U){let fe=new Xr.f_;for(let De of U.viewportLineBlocks){let et=vl(U.state,De.from,De.to)?u:(0,Ft.Fw)(U.state,De.from,De.to)?s:null;et&&fe.add(De.from,De.from,et)}return fe.finish()}}),{domEventHandlers:w}=c;return[v,su({class:"cm-foldGutter",markers(U){var fe;return(null===(fe=U.plugin(v))||void 0===fe?void 0:fe.markers)||Xr.Xs.empty},initialSpacer:()=>new hu(c,!1),domEventHandlers:Object.assign(Object.assign({},w),{click:(U,fe,De)=>{if(w.click&&w.click(U,fe,De))return!0;let et=vl(U.state,fe.from,fe.to);if(et)return U.dispatch({effects:Ba.of(et)}),!0;let wt=(0,Ft.Fw)(U.state,fe.from,fe.to);return!!wt&&(U.dispatch({effects:Yo.of(wt)}),!0)}})}),sd()]}const oc=dn.tk.baseTheme({".cm-foldPlaceholder":{backgroundColor:"#eee",border:"1px solid #ddd",color:"#888",borderRadius:".2em",margin:"0 1px",padding:"0 1px",cursor:"pointer"},".cm-foldGutter span":{padding:"0 1px",cursor:"pointer"}});var Xi=d(84023),da=d(55340);const lg=dn.tk.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}}),ad=en.r$.define({combine:l=>(0,en.BO)(l,{afterCursor:!0,brackets:"()[]{}",maxScanDistance:1e4})}),fu=dn.p.mark({class:"cm-matchingBracket"}),ld=dn.p.mark({class:"cm-nonmatchingBracket"}),cg=[en.QQ.define({create:()=>dn.p.none,update(l,c){if(!c.docChanged&&!c.selection)return l;let s=[],u=c.state.facet(ad);for(let v of c.state.selection.ranges){if(!v.empty)continue;let w=co(c.state,v.head,-1,u)||v.head>0&&co(c.state,v.head-1,1,u)||u.afterCursor&&(co(c.state,v.head,1,u)||v.head<c.state.doc.length&&co(c.state,v.head+1,-1,u));if(!w)continue;let U=w.matched?fu:ld;s.push(U.range(w.start.from,w.start.to)),w.end&&s.push(U.range(w.end.from,w.end.to))}return dn.p.set(s,!0)},provide:l=>dn.tk.decorations.from(l)}),lg];function ug(l={}){return[ad.of(l),cg]}function pu(l,c,s){let u=l.prop(c<0?da.md.openedBy:da.md.closedBy);if(u)return u;if(1==l.name.length){let v=s.indexOf(l.name);if(v>-1&&v%2==(c<0?1:0))return[s[v+c]]}return null}function co(l,c,s,u={}){let v=u.maxScanDistance||1e4,w=u.brackets||"()[]{}",U=(0,Ft.qz)(l),fe=U.resolveInner(c,s);for(let De=fe;De;De=De.parent){let et=pu(De.type,s,w);if(et&&De.from<De.to)return iy(0,0,s,De,et,w)}return function ry(l,c,s,u,v,w,U){let fe=s<0?l.sliceDoc(c-1,c):l.sliceDoc(c,c+1),De=U.indexOf(fe);if(De<0||De%2==0!=s>0)return null;let et={from:s<0?c-1:c,to:s>0?c+1:c},wt=l.doc.iterRange(c,s>0?l.doc.length:0),Gt=0;for(let fn=0;!wt.next().done&&fn<=w;){let kn=wt.value;s<0&&(fn+=kn.length);let Sn=c+fn*s;for(let jn=s>0?0:kn.length-1,vi=s>0?kn.length:-1;jn!=vi;jn+=s){let Mi=U.indexOf(kn[jn]);if(!(Mi<0||u.resolve(Sn+jn,1).type!=v))if(Mi%2==0==s>0)Gt++;else{if(1==Gt)return{start:et,end:{from:Sn+jn,to:Sn+jn+1},matched:Mi>>1==De>>1};Gt--}}s>0&&(fn+=kn.length)}return wt.done?{start:et,matched:!1}:null}(l,c,s,U,fe.type,v,w)}function iy(l,c,s,u,v,w){let U=u.parent,fe={from:u.from,to:u.to},De=0,et=null==U?void 0:U.cursor;if(et&&(s<0?et.childBefore(u.from):et.childAfter(u.to)))do{if(s<0?et.to<=u.from:et.from>=u.to){if(0==De&&v.indexOf(et.type.name)>-1&&et.from<et.to)return{start:fe,end:{from:et.from,to:et.to},matched:!0};if(pu(et.type,s,w))De++;else if(pu(et.type,-s,w)&&(De--,0==De))return{start:fe,end:et.from==et.to?void 0:{from:et.from,to:et.to},matched:!1}}}while(s<0?et.prevSibling():et.nextSibling());return{start:fe,matched:!1}}function uo(l,c){return en.jT.create(l.ranges.map(c),l.mainIndex)}function qi(l,c){return l.update({selection:c,scrollIntoView:!0,userEvent:"select"})}function Ds({state:l,dispatch:c},s){let u=uo(l.selection,s);return!u.eq(l.selection)&&(c(qi(l,u)),!0)}function Ua(l,c){return en.jT.cursor(c?l.to:l.from)}function yl(l,c){return Ds(l,s=>s.empty?l.moveByChar(s,c):Ua(s,c))}const xr=l=>yl(l,l.textDirection!=dn.Nm.LTR),$a=l=>yl(l,l.textDirection==dn.Nm.LTR);function ac(l,c){return Ds(l,s=>s.empty?l.moveByGroup(s,c):Ua(s,c))}function fg(l,c,s){if(c.type.prop(s))return!0;let u=c.to-c.from;return u&&(u>2||/[^\s,.;:]/.test(l.sliceDoc(c.from,c.to)))||c.firstChild}function lc(l,c,s){let U,fe,u=(0,Ft.qz)(l).resolveInner(c.head),v=s?da.md.closedBy:da.md.openedBy;for(let De=c.head;;){let et=s?u.childAfter(De):u.childBefore(De);if(!et)break;fg(l,et,v)?u=et:De=s?et.to:et.from}return fe=u.type.prop(v)&&(U=s?co(l,u.from,1):co(l,u.to,-1))&&U.matched?s?U.end.to:U.end.from:s?u.to:u.from,en.jT.cursor(fe,s?-1:1)}function fd(l,c){return Ds(l,s=>{if(!s.empty)return Ua(s,c);let u=l.moveVertically(s,c);return u.head!=s.head?u:l.moveToLineBoundary(s,c)})}const _l=l=>fd(l,!1),pd=l=>fd(l,!0);function gd(l,c){let{state:s}=l,u=uo(s.selection,U=>U.empty?l.moveVertically(U,c,l.dom.clientHeight):Ua(U,c));if(u.eq(s.selection))return!1;let v=l.coordsAtPos(s.selection.main.head),w=l.scrollDOM.getBoundingClientRect();return l.dispatch(qi(s,u),{effects:v&&v.top>w.top&&v.bottom<w.bottom?dn.tk.scrollIntoView(u.main.head,{y:"start",yMargin:v.top-w.top}):void 0}),!0}const md=l=>gd(l,!1),vu=l=>gd(l,!0);function cc(l,c,s){let u=l.lineBlockAt(c.head),v=l.moveToLineBoundary(c,s);if(v.head==c.head&&v.head!=(s?u.to:u.from)&&(v=l.moveToLineBoundary(c,s,!1)),!s&&v.head==u.from&&u.length){let w=/^\s*/.exec(l.state.sliceDoc(u.from,Math.min(u.from+100,u.to)))[0].length;w&&c.head!=u.from+w&&(v=en.jT.cursor(u.from+w))}return v}const yu=l=>Ds(l,c=>cc(l,c,!0)),vd=l=>Ds(l,c=>cc(l,c,!1));function Ms(l,c){let s=uo(l.state.selection,u=>{let v=c(u);return en.jT.range(u.anchor,v.head,v.goalColumn)});return!s.eq(l.state.selection)&&(l.dispatch(qi(l.state,s)),!0)}function uc(l,c){return Ms(l,s=>l.moveByChar(s,c))}const fa=l=>uc(l,l.textDirection!=dn.Nm.LTR),Gs=l=>uc(l,l.textDirection==dn.Nm.LTR);function bl(l,c){return Ms(l,s=>l.moveByGroup(s,c))}function dc(l,c){return Ms(l,s=>l.moveVertically(s,c))}const fc=l=>dc(l,!1),_u=l=>dc(l,!0);function bg(l,c){return Ms(l,s=>l.moveVertically(s,c,l.dom.clientHeight))}const pa=l=>bg(l,!1),pc=l=>bg(l,!0),bu=l=>Ms(l,c=>cc(l,c,!0)),xd=l=>Ms(l,c=>cc(l,c,!1)),Ed=({state:l,dispatch:c})=>(c(qi(l,{anchor:0})),!0),Sd=({state:l,dispatch:c})=>(c(qi(l,{anchor:l.doc.length})),!0),Td=({state:l,dispatch:c})=>(c(qi(l,{anchor:l.selection.main.anchor,head:0})),!0),Dd=({state:l,dispatch:c})=>(c(qi(l,{anchor:l.selection.main.anchor,head:l.doc.length})),!0);function ja({state:l,dispatch:c},s){if(l.readOnly)return!1;let u="delete.selection",v=l.changeByRange(w=>{let{from:U,to:fe}=w;if(U==fe){let De=s(U);De<U?u="delete.backward":De>U&&(u="delete.forward"),U=Math.min(U,De),fe=Math.max(fe,De)}return U==fe?{range:w}:{changes:{from:U,to:fe},range:en.jT.cursor(U)}});return!v.changes.empty&&(c(l.update(v,{scrollIntoView:!0,userEvent:u})),!0)}function gc(l,c,s){if(l instanceof dn.tk)for(let u of l.pluginField(dn.BF.atomicRanges))u.between(c,c,(v,w)=>{v<c&&w>c&&(c=s?w:v)});return c}const Id=(l,c)=>ja(l,s=>{let w,U,{state:u}=l,v=u.doc.lineAt(s);if(!c&&s>v.from&&s<v.from+200&&!/[^ \t]/.test(w=v.text.slice(0,s-v.from))){if("\t"==w[w.length-1])return s-1;let De=(0,Xi.IS)(w,u.tabSize)%(0,Ft.y1)(u)||(0,Ft.y1)(u);for(let et=0;et<De&&" "==w[w.length-1-et];et++)s--;U=s}else U=(0,Xi.cp)(v.text,s-v.from,c,c)+v.from,U==s&&v.number!=(c?u.doc.lines:1)&&(U+=c?1:-1);return gc(l,U,c)}),mc=l=>Id(l,!1),Au=l=>Id(l,!0),Jo=(l,c)=>ja(l,s=>{let u=s,{state:v}=l,w=v.doc.lineAt(u),U=v.charCategorizer(u);for(let fe=null;;){if(u==(c?w.to:w.from)){u==s&&w.number!=(c?v.doc.lines:1)&&(u+=c?1:-1);break}let De=(0,Xi.cp)(w.text,u-w.from,c)+w.from,et=w.text.slice(Math.min(u,De)-w.from,Math.max(u,De)-w.from),wt=U(et);if(null!=fe&&wt!=fe)break;(" "!=et||u!=s)&&(fe=wt),u=De}return gc(l,u,c)}),xu=l=>Jo(l,!1),Od=l=>ja(l,c=>{let s=l.lineBlockAt(c).to;return gc(l,c<s?s:Math.min(l.state.doc.length,c+1),!0)});function Cl(l){let c=[],s=-1;for(let u of l.selection.ranges){let v=l.doc.lineAt(u.from),w=l.doc.lineAt(u.to);if(!u.empty&&u.to==w.from&&(w=l.doc.lineAt(u.to-1)),s>=v.number){let U=c[c.length-1];U.to=w.to,U.ranges.push(u)}else c.push({from:v.from,to:w.to,ranges:[u]});s=w.number+1}return c}function yc(l,c,s){if(l.readOnly)return!1;let u=[],v=[];for(let w of Cl(l)){if(s?w.to==l.doc.length:0==w.from)continue;let U=l.doc.lineAt(s?w.to+1:w.from-1),fe=U.length+1;if(s){u.push({from:w.to,to:U.to},{from:w.from,insert:U.text+l.lineBreak});for(let De of w.ranges)v.push(en.jT.range(Math.min(l.doc.length,De.anchor+fe),Math.min(l.doc.length,De.head+fe)))}else{u.push({from:U.from,to:w.from},{from:w.to,insert:l.lineBreak+U.text});for(let De of w.ranges)v.push(en.jT.range(De.anchor-fe,De.head-fe))}}return!!u.length&&(c(l.update({changes:u,scrollIntoView:!0,selection:en.jT.create(v,l.selection.mainIndex),userEvent:"move.line"})),!0)}function wl(l,c,s){if(l.readOnly)return!1;let u=[];for(let v of Cl(l))u.push(s?{from:v.from,insert:l.doc.slice(v.from,v.to)+l.lineBreak}:{from:v.to,insert:l.lineBreak+l.doc.slice(v.from,v.to)});return c(l.update({changes:u,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Ag=$d(!1);function $d(l){return({state:c,dispatch:s})=>{if(c.readOnly)return!1;let u=c.changeByRange(v=>{let{from:w,to:U}=v,fe=c.doc.lineAt(w),De=!l&&w==U&&function Al(l,c){if(/\(\)|\[\]|\{\}/.test(l.sliceDoc(c-1,c+1)))return{from:c,to:c};let w,s=(0,Ft.qz)(l).resolveInner(c),u=s.childBefore(c),v=s.childAfter(c);return u&&v&&u.to<=c&&v.from>=c&&(w=u.type.prop(da.md.closedBy))&&w.indexOf(v.name)>-1&&l.doc.lineAt(u.to).from==l.doc.lineAt(v.from).from?{from:u.to,to:v.from}:null}(c,w);l&&(w=U=(U<=fe.to?fe:c.doc.lineAt(U)).to);let et=new Ft.Gn(c,{simulateBreak:w,simulateDoubleBreak:!!De}),wt=(0,Ft.K0)(et,w);for(null==wt&&(wt=/^\s*/.exec(c.doc.lineAt(w).text)[0].length);U<fe.to&&/\s/.test(fe.text[U-fe.from]);)U++;De?({from:w,to:U}=De):w>fe.from&&w<fe.from+100&&!/\S/.test(fe.text.slice(0,w))&&(w=fe.from);let Gt=["",(0,Ft.SS)(c,wt)];return De&&Gt.push((0,Ft.SS)(c,et.lineIndent(fe.from,-1))),{changes:{from:w,to:U,insert:Xi.xv.of(Gt)},range:en.jT.cursor(w+1+Gt[1].length)}});return s(c.update(u,{scrollIntoView:!0,userEvent:"input"})),!0}}function Su(l,c){let s=-1;return l.changeByRange(u=>{let v=[];for(let U=u.from;U<=u.to;){let fe=l.doc.lineAt(U);fe.number>s&&(u.empty||u.to>fe.from)&&(c(fe,v,u),s=fe.number),U=fe.to+1}let w=l.changes(v);return{changes:v,range:en.jT.range(w.mapPos(u.anchor,1),w.mapPos(u.head,1))}})}const zd=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:l=>Ds(l,c=>lc(l.state,c,l.textDirection!=dn.Nm.LTR)),shift:l=>Ms(l,c=>lc(l.state,c,l.textDirection!=dn.Nm.LTR))},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:l=>Ds(l,c=>lc(l.state,c,l.textDirection==dn.Nm.LTR)),shift:l=>Ms(l,c=>lc(l.state,c,l.textDirection==dn.Nm.LTR))},{key:"Alt-ArrowUp",run:({state:l,dispatch:c})=>yc(l,c,!1)},{key:"Shift-Alt-ArrowUp",run:({state:l,dispatch:c})=>wl(l,c,!1)},{key:"Alt-ArrowDown",run:({state:l,dispatch:c})=>yc(l,c,!0)},{key:"Shift-Alt-ArrowDown",run:({state:l,dispatch:c})=>wl(l,c,!0)},{key:"Escape",run:({state:l,dispatch:c})=>{let s=l.selection,u=null;return s.ranges.length>1?u=en.jT.create([s.main]):s.main.empty||(u=en.jT.create([en.jT.cursor(s.main.head)])),!!u&&(c(qi(l,u)),!0)}},{key:"Mod-Enter",run:$d(!0)},{key:"Alt-l",mac:"Ctrl-l",run:({state:l,dispatch:c})=>{let s=Cl(l).map(({from:u,to:v})=>en.jT.range(u,Math.min(v+1,l.doc.length)));return c(l.update({selection:en.jT.create(s),userEvent:"select"})),!0}},{key:"Mod-i",run:({state:l,dispatch:c})=>{let s=uo(l.selection,u=>{var v;let w=(0,Ft.qz)(l).resolveInner(u.head,1);for(;!(w.from<u.from&&w.to>=u.to||w.to>u.to&&w.from<=u.from)&&(null===(v=w.parent)||void 0===v?void 0:v.parent);)w=w.parent;return en.jT.range(w.to,w.from)});return c(qi(l,s)),!0},preventDefault:!0},{key:"Mod-[",run:({state:l,dispatch:c})=>!l.readOnly&&(c(l.update(Su(l,(s,u)=>{let v=/^\s*/.exec(s.text)[0];if(!v)return;let w=(0,Xi.IS)(v,l.tabSize),U=0,fe=(0,Ft.SS)(l,Math.max(0,w-(0,Ft.y1)(l)));for(;U<v.length&&U<fe.length&&v.charCodeAt(U)==fe.charCodeAt(U);)U++;u.push({from:s.from+U,to:s.from+v.length,insert:fe.slice(U)})}),{userEvent:"delete.dedent"})),!0)},{key:"Mod-]",run:({state:l,dispatch:c})=>!l.readOnly&&(c(l.update(Su(l,(s,u)=>{u.push({from:s.from,insert:l.facet(Ft.c)})}),{userEvent:"input.indent"})),!0)},{key:"Mod-Alt-\\",run:({state:l,dispatch:c})=>{if(l.readOnly)return!1;let s=Object.create(null),u=new Ft.Gn(l,{overrideIndentation:w=>s[w]??-1}),v=Su(l,(w,U,fe)=>{let De=(0,Ft.K0)(u,w.from);if(null==De)return;/\S/.test(w.text)||(De=0);let et=/^\s*/.exec(w.text)[0],wt=(0,Ft.SS)(l,De);(et!=wt||fe.from<w.from+et.length)&&(s[w.from]=De,U.push({from:w.from,to:w.from+et.length,insert:wt}))});return v.changes.empty||c(l.update(v,{userEvent:"indent"})),!0}},{key:"Shift-Mod-k",run:l=>{if(l.state.readOnly)return!1;let{state:c}=l,s=c.changes(Cl(c).map(({from:v,to:w})=>(v>0?v--:w<c.doc.length&&w++,{from:v,to:w}))),u=uo(c.selection,v=>l.moveVertically(v,!0)).map(s);return l.dispatch({changes:s,selection:u,scrollIntoView:!0,userEvent:"delete.line"}),!0}},{key:"Shift-Mod-\\",run:({state:l,dispatch:c})=>function yd(l,c,s){let u=!1,v=uo(l.selection,w=>{let U=co(l,w.head,-1)||co(l,w.head,1)||w.head>0&&co(l,w.head-1,1)||w.head<l.doc.length&&co(l,w.head+1,-1);if(!U||!U.end)return w;u=!0;let fe=U.start.from==w.head?U.end.to:U.end.from;return s?en.jT.range(w.anchor,fe):en.jT.cursor(fe)});return!!u&&(c(qi(l,v)),!0)}(l,c,!1)}].concat([{key:"ArrowLeft",run:xr,shift:fa,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:l=>ac(l,l.textDirection!=dn.Nm.LTR),shift:l=>bl(l,l.textDirection!=dn.Nm.LTR)},{mac:"Cmd-ArrowLeft",run:vd,shift:xd},{key:"ArrowRight",run:$a,shift:Gs,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:l=>ac(l,l.textDirection==dn.Nm.LTR),shift:l=>bl(l,l.textDirection==dn.Nm.LTR)},{mac:"Cmd-ArrowRight",run:yu,shift:bu},{key:"ArrowUp",run:_l,shift:fc,preventDefault:!0},{mac:"Cmd-ArrowUp",run:Ed,shift:Td},{mac:"Ctrl-ArrowUp",run:md,shift:pa},{key:"ArrowDown",run:pd,shift:_u,preventDefault:!0},{mac:"Cmd-ArrowDown",run:Sd,shift:Dd},{mac:"Ctrl-ArrowDown",run:vu,shift:pc},{key:"PageUp",run:md,shift:pa},{key:"PageDown",run:vu,shift:pc},{key:"Home",run:vd,shift:xd},{key:"Mod-Home",run:Ed,shift:Td},{key:"End",run:yu,shift:bu},{key:"Mod-End",run:Sd,shift:Dd},{key:"Enter",run:Ag},{key:"Mod-a",run:({state:l,dispatch:c})=>(c(l.update({selection:{anchor:0,head:l.doc.length},userEvent:"select"})),!0)},{key:"Backspace",run:mc,shift:mc},{key:"Delete",run:Au},{key:"Mod-Backspace",mac:"Alt-Backspace",run:xu},{key:"Mod-Delete",mac:"Alt-Delete",run:l=>Jo(l,!0)},{mac:"Mod-Backspace",run:l=>ja(l,c=>{let s=l.lineBlockAt(c).from;return gc(l,c>s?s:Math.max(0,c-1),!1)})},{mac:"Mod-Delete",run:Od}].concat([{key:"Ctrl-b",run:xr,shift:fa,preventDefault:!0},{key:"Ctrl-f",run:$a,shift:Gs},{key:"Ctrl-p",run:_l,shift:fc},{key:"Ctrl-n",run:pd,shift:_u},{key:"Ctrl-a",run:l=>Ds(l,c=>en.jT.cursor(l.lineBlockAt(c.head).from,1)),shift:l=>Ms(l,c=>en.jT.cursor(l.lineBlockAt(c.head).from))},{key:"Ctrl-e",run:l=>Ds(l,c=>en.jT.cursor(l.lineBlockAt(c.head).to,-1)),shift:l=>Ms(l,c=>en.jT.cursor(l.lineBlockAt(c.head).to))},{key:"Ctrl-d",run:Au},{key:"Ctrl-h",run:mc},{key:"Ctrl-k",run:Od},{key:"Ctrl-Alt-h",run:xu},{key:"Ctrl-o",run:({state:l,dispatch:c})=>{if(l.readOnly)return!1;let s=l.changeByRange(u=>({changes:{from:u.from,to:u.to,insert:Xi.xv.of(["",""])},range:en.jT.cursor(u.from)}));return c(l.update(s,{scrollIntoView:!0,userEvent:"input"})),!0}},{key:"Ctrl-t",run:({state:l,dispatch:c})=>{if(l.readOnly)return!1;let s=l.changeByRange(u=>{if(!u.empty||0==u.from||u.from==l.doc.length)return{range:u};let v=u.from,w=l.doc.lineAt(v),U=v==w.from?v-1:(0,Xi.cp)(w.text,v-w.from,!1)+w.from,fe=v==w.to?v+1:(0,Xi.cp)(w.text,v-w.from,!0)+w.from;return{changes:{from:U,to:fe,insert:l.doc.slice(v,fe).append(l.doc.slice(U,v))},range:en.jT.cursor(fe)}});return!s.changes.empty&&(c(l.update(s,{scrollIntoView:!0,userEvent:"move.character"})),!0)}},{key:"Ctrl-v",run:vu}].map(l=>({mac:l.key,run:l.run,shift:l.shift})))),bc={brackets:["(","[","{","'",'"'],before:")]}'\":;>"},Er=en.Py.define({map:(l,c)=>c.mapPos(l,-1,en.gc.TrackAfter)??void 0}),Du=en.Py.define({map:(l,c)=>c.mapPos(l)}),Cc=new class extends Xr.uU{};Cc.startSide=1,Cc.endSide=-1;const Gd=en.QQ.define({create:()=>Xr.Xs.empty,update(l,c){if(c.selection){let s=c.state.doc.lineAt(c.selection.main.head).from,u=c.startState.doc.lineAt(c.startState.selection.main.head).from;s!=c.changes.mapPos(u,-1)&&(l=Xr.Xs.empty)}l=l.map(c.changes);for(let s of c.effects)s.is(Er)?l=l.update({add:[Cc.range(s.value,s.value+1)]}):s.is(Du)&&(l=l.update({filter:u=>u!=s.value}));return l}});function Eg(){return[Tg,Gd]}const Mu="()[]{}<>";function Kd(l){for(let c=0;c<Mu.length;c+=2)if(Mu.charCodeAt(c)==l)return Mu.charAt(c+1);return(0,Xi.bg)(l<128?l:l+1)}function Pu(l,c){return l.languageDataAt("closeBrackets",c)[0]||bc}const Sg="object"==typeof navigator&&/Android\b/.test(navigator.userAgent),Tg=dn.tk.inputHandler.of((l,c,s,u)=>{if((Sg?l.composing:l.compositionStarted)||l.state.readOnly)return!1;let v=l.state.selection.main;if(u.length>2||2==u.length&&1==(0,Xi.nZ)((0,Xi.gm)(u,0))||c!=v.from||s!=v.to)return!1;let w=function Wd(l,c){let s=Pu(l,l.selection.main.head),u=s.brackets||bc.brackets;for(let v of u){let w=Kd((0,Xi.gm)(v,0));if(c==v)return w==v?Dg(l,v,u.indexOf(v+v+v)>-1):Ks(l,v,w,s.before||bc.before);if(c==w&&Iu(l,l.selection.main.from))return Zd(l,0,w)}return null}(l.state,u);return!!w&&(l.dispatch(w),!0)}),ti=[{key:"Backspace",run:({state:l,dispatch:c})=>{if(l.readOnly)return!1;let u=Pu(l,l.selection.main.head).brackets||bc.brackets,v=null,w=l.changeByRange(U=>{if(U.empty){let fe=function wc(l,c){let s=l.sliceString(c-2,c);return(0,Xi.nZ)((0,Xi.gm)(s,0))==s.length?s:s.slice(1)}(l.doc,U.head);for(let De of u)if(De==fe&&El(l.doc,U.head)==Kd((0,Xi.gm)(De,0)))return{changes:{from:U.head-De.length,to:U.head+De.length},range:en.jT.cursor(U.head-De.length),userEvent:"delete.backward"}}return{range:v=U}});return v||c(l.update(w,{scrollIntoView:!0})),!v}}];function Iu(l,c){let s=!1;return l.field(Gd).between(0,l.doc.length,u=>{u==c&&(s=!0)}),s}function El(l,c){let s=l.sliceString(c,c+2);return s.slice(0,(0,Xi.nZ)((0,Xi.gm)(s,0)))}function Ks(l,c,s,u){let v=null,w=l.changeByRange(U=>{if(!U.empty)return{changes:[{insert:c,from:U.from},{insert:s,from:U.to}],effects:Er.of(U.to+c.length),range:en.jT.range(U.anchor+c.length,U.head+c.length)};let fe=El(l.doc,U.head);return!fe||/\s/.test(fe)||u.indexOf(fe)>-1?{changes:{insert:c+s,from:U.head},effects:Er.of(U.head+c.length),range:en.jT.cursor(U.head+c.length)}:{range:v=U}});return v?null:l.update(w,{scrollIntoView:!0,userEvent:"input.type"})}function Zd(l,c,s){let u=null,v=l.selection.ranges.map(w=>w.empty&&El(l.doc,w.head)==s?en.jT.cursor(w.head+s.length):u=w);return u?null:l.update({selection:en.jT.create(v,l.selection.mainIndex),scrollIntoView:!0,effects:l.selection.ranges.map(({from:w})=>Du.of(w))})}function Dg(l,c,s){let u=null,v=l.changeByRange(w=>{if(!w.empty)return{changes:[{insert:c,from:w.from},{insert:c,from:w.to}],effects:Er.of(w.to+c.length),range:en.jT.range(w.anchor+c.length,w.head+c.length)};let U=w.head,fe=El(l.doc,U);if(fe==c){if(Ac(l,U))return{changes:{insert:c+c,from:U},effects:Er.of(U+c.length),range:en.jT.cursor(U+c.length)};if(Iu(l,U)){let De=s&&l.sliceDoc(U,U+3*c.length)==c+c+c;return{range:en.jT.cursor(U+c.length*(De?3:1)),effects:Du.of(U)}}}else{if(s&&l.sliceDoc(U-2*c.length,U)==c+c&&Ac(l,U-2*c.length))return{changes:{insert:c+c+c+c,from:U},effects:Er.of(U+c.length),range:en.jT.cursor(U+c.length)};if(l.charCategorizer(U)(fe)!=en.D0.Word){let De=l.sliceDoc(U-1,U);if(De!=c&&l.charCategorizer(U)(De)!=en.D0.Word&&!function ko(l,c,s){let u=(0,Ft.qz)(l).resolveInner(c,-1);for(let v=0;v<5;v++){if(l.sliceDoc(u.from,u.from+s.length)==s)return!0;let w=u.to==c&&u.parent;if(!w)break;u=w}return!1}(l,U,c))return{changes:{insert:c+c,from:U},effects:Er.of(U+c.length),range:en.jT.cursor(U+c.length)}}}return{range:u=w}});return u?null:l.update(v,{scrollIntoView:!0,userEvent:"input.type"})}function Ac(l,c){let s=(0,Ft.qz)(l).resolveInner(c+1);return s.parent&&s.from==c}const Sl=en.r$.define({combine(l){let c,s;for(let u of l)c=c||u.topContainer,s=s||u.bottomContainer;return{topContainer:c,bottomContainer:s}}});function ga(l,c){let s=l.plugin(Pg),u=s?s.specs.indexOf(c):-1;return u>-1?s.panels[u]:null}const Pg=dn.lg.fromClass(class{constructor(l){this.input=l.state.facet(Qo),this.specs=this.input.filter(s=>s),this.panels=this.specs.map(s=>s(l));let c=l.state.facet(Sl);this.top=new Tl(l,!0,c.topContainer),this.bottom=new Tl(l,!1,c.bottomContainer),this.top.sync(this.panels.filter(s=>s.top)),this.bottom.sync(this.panels.filter(s=>!s.top));for(let s of this.panels)s.dom.classList.add("cm-panel"),s.mount&&s.mount()}update(l){let c=l.state.facet(Sl);this.top.container!=c.topContainer&&(this.top.sync([]),this.top=new Tl(l.view,!0,c.topContainer)),this.bottom.container!=c.bottomContainer&&(this.bottom.sync([]),this.bottom=new Tl(l.view,!1,c.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let s=l.state.facet(Qo);if(s!=this.input){let u=s.filter(De=>De),v=[],w=[],U=[],fe=[];for(let De of u){let wt,et=this.specs.indexOf(De);et<0?(wt=De(l.view),fe.push(wt)):(wt=this.panels[et],wt.update&&wt.update(l)),v.push(wt),(wt.top?w:U).push(wt)}this.specs=u,this.panels=v,this.top.sync(w),this.bottom.sync(U);for(let De of fe)De.dom.classList.add("cm-panel"),De.mount&&De.mount()}else for(let u of this.panels)u.update&&u.update(l)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:dn.BF.scrollMargins.from(l=>({top:l.top.scrollMargin(),bottom:l.bottom.scrollMargin()}))});class Tl{constructor(c,s,u){this.view=c,this.top=s,this.container=u,this.dom=void 0,this.classes="",this.panels=[],this.syncClasses()}sync(c){for(let s of this.panels)s.destroy&&c.indexOf(s)<0&&s.destroy();this.panels=c,this.syncDOM()}syncDOM(){if(0==this.panels.length)return void(this.dom&&(this.dom.remove(),this.dom=void 0));if(!this.dom){this.dom=document.createElement("div"),this.dom.className=this.top?"cm-panels cm-panels-top":"cm-panels cm-panels-bottom",this.dom.style[this.top?"top":"bottom"]="0";let s=this.container||this.view.dom;s.insertBefore(this.dom,this.top?s.firstChild:null)}let c=this.dom.firstChild;for(let s of this.panels)if(s.dom.parentNode==this.dom){for(;c!=s.dom;)c=Ig(c);c=c.nextSibling}else this.dom.insertBefore(s.dom,c);for(;c;)c=Ig(c)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(this.container&&this.classes!=this.view.themeClasses){for(let c of this.classes.split(" "))c&&this.container.classList.remove(c);for(let c of(this.classes=this.view.themeClasses).split(" "))c&&this.container.classList.add(c)}}}function Ig(l){let c=l.nextSibling;return l.remove(),c}const Qo=en.r$.define({enables:[Pg,dn.tk.baseTheme({".cm-panels":{boxSizing:"border-box",position:"sticky",left:0,right:0},"&light .cm-panels":{backgroundColor:"#f5f5f5",color:"black"},"&light .cm-panels-top":{borderBottom:"1px solid #ddd"},"&light .cm-panels-bottom":{borderTop:"1px solid #ddd"},"&dark .cm-panels":{backgroundColor:"#333338",color:"white"}})]});function Gi(){var l=arguments[0];"string"==typeof l&&(l=document.createElement(l));var c=1,s=arguments[1];if(s&&"object"==typeof s&&null==s.nodeType&&!Array.isArray(s)){for(var u in s)if(Object.prototype.hasOwnProperty.call(s,u)){var v=s[u];"string"==typeof v?l.setAttribute(u,v):null!=v&&(l[u]=v)}c++}for(;c<arguments.length;c++)Ec(l,arguments[c]);return l}function Ec(l,c){if("string"==typeof c)l.appendChild(document.createTextNode(c));else if(null!=c)if(null!=c.nodeType)l.appendChild(c);else{if(!Array.isArray(c))throw new RangeError("Unsupported child node: "+c);for(var s=0;s<c.length;s++)Ec(l,c[s])}}const Sc="function"==typeof String.prototype.normalize?l=>l.normalize("NFKD"):l=>l;class Dl{constructor(c,s,u=0,v=c.length,w){this.value={from:0,to:0},this.done=!1,this.matches=[],this.buffer="",this.bufferPos=0,this.iter=c.iterRange(u,v),this.bufferStart=u,this.normalize=w?U=>w(Sc(U)):Sc,this.query=this.normalize(s)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return(0,Xi.gm)(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let c=this.peek();if(c<0)return this.done=!0,this;let s=(0,Xi.bg)(c),u=this.bufferStart+this.bufferPos;this.bufferPos+=(0,Xi.nZ)(c);let v=this.normalize(s);for(let w=0,U=u;;w++){let fe=v.charCodeAt(w),De=this.match(fe,U);if(De)return this.value=De,this;if(w==v.length-1)break;U==u&&w<s.length&&s.charCodeAt(w)==fe&&U++}}}match(c,s){let u=null;for(let v=0;v<this.matches.length;v+=2){let w=this.matches[v],U=!1;this.query.charCodeAt(w)==c&&(w==this.query.length-1?u={from:this.matches[v+1],to:s+1}:(this.matches[v]++,U=!0)),U||(this.matches.splice(v,2),v-=2)}return this.query.charCodeAt(0)==c&&(1==this.query.length?u={from:s,to:s+1}:this.matches.push(1,s)),u}}typeof Symbol<"u"&&(Dl.prototype[Symbol.iterator]=function(){return this});const Yd={from:-1,to:-1,match:/.*/.exec("")},ku="gm"+(null==/x/.unicode?"":"u");class Jd{constructor(c,s,u,v=0,w=c.length){if(this.to=w,this.curLine="",this.done=!1,this.value=Yd,/\\[sWDnr]|\n|\r|\[\^/.test(s))return new kg(c,s,u,v,w);this.re=new RegExp(s,ku+((null==u?void 0:u.ignoreCase)?"i":"")),this.iter=c.iter();let U=c.lineAt(v);this.curLineStart=U.from,this.matchPos=v,this.getLine(this.curLineStart)}getLine(c){this.iter.next(c),this.iter.lineBreak?this.curLine="":(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine="":this.getLine(0)}next(){for(let c=this.matchPos-this.curLineStart;;){this.re.lastIndex=c;let s=this.matchPos<=this.to&&this.re.exec(this.curLine);if(s){let u=this.curLineStart+s.index,v=u+s[0].length;if(this.matchPos=v+(u==v?1:0),u==this.curLine.length&&this.nextLine(),u<v||u>this.value.to)return this.value={from:u,to:v,match:s},this;c=this.matchPos-this.curLineStart}else{if(!(this.curLineStart+this.curLine.length<this.to))return this.done=!0,this;this.nextLine(),c=0}}}}const Ou=new WeakMap;class ma{constructor(c,s){this.from=c,this.text=s}get to(){return this.from+this.text.length}static get(c,s,u){let v=Ou.get(c);if(!v||v.from>=u||v.to<=s){let fe=new ma(s,c.sliceString(s,u));return Ou.set(c,fe),fe}if(v.from==s&&v.to==u)return v;let{text:w,from:U}=v;return U>s&&(w=c.sliceString(s,U)+w,U=s),v.to<u&&(w+=c.sliceString(v.to,u)),Ou.set(c,new ma(U,w)),new ma(s,w.slice(s-U,u-U))}}class kg{constructor(c,s,u,v,w){this.text=c,this.to=w,this.done=!1,this.value=Yd,this.matchPos=v,this.re=new RegExp(s,ku+((null==u?void 0:u.ignoreCase)?"i":"")),this.flat=ma.get(c,v,this.chunkEnd(v+5e3))}chunkEnd(c){return c>=this.to?this.to:this.text.lineAt(c).to}next(){for(;;){let c=this.re.lastIndex=this.matchPos-this.flat.from,s=this.re.exec(this.flat.text);if(s&&!s[0]&&s.index==c&&(this.re.lastIndex=c+1,s=this.re.exec(this.flat.text)),s&&this.flat.to<this.to&&s.index+s[0].length>this.flat.text.length-10&&(s=null),s){let u=this.flat.from+s.index,v=u+s[0].length;return this.value={from:u,to:v,match:s},this.matchPos=v+(u==v?1:0),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=ma.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+2*this.flat.text.length))}}}function Qd(l){let c=Gi("input",{class:"cm-textfield",name:"line"});function u(){let v=/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(c.value);if(!v)return;let{state:w}=l,U=w.doc.lineAt(w.selection.main.head),[,fe,De,et,wt]=v,Gt=et?+et.slice(1):0,fn=De?+De:U.number;if(De&&wt){let Sn=fn/100;fe&&(Sn=Sn*("-"==fe?-1:1)+U.number/w.doc.lines),fn=Math.round(w.doc.lines*Sn)}else De&&fe&&(fn=fn*("-"==fe?-1:1)+U.number);let kn=w.doc.line(Math.max(1,Math.min(w.doc.lines,fn)));l.dispatch({effects:Ml.of(!1),selection:en.jT.cursor(kn.from+Math.max(0,Math.min(Gt,kn.length))),scrollIntoView:!0}),l.focus()}return{dom:Gi("form",{class:"cm-gotoLine",onkeydown:v=>{27==v.keyCode?(v.preventDefault(),l.dispatch({effects:Ml.of(!1)}),l.focus()):13==v.keyCode&&(v.preventDefault(),u())},onsubmit:v=>{v.preventDefault(),u()}},Gi("label",l.state.phrase("Go to line"),": ",c)," ",Gi("button",{class:"cm-button",type:"submit"},l.state.phrase("go"))),pos:-10}}typeof Symbol<"u"&&(Jd.prototype[Symbol.iterator]=kg.prototype[Symbol.iterator]=function(){return this});const Ml=en.Py.define(),Ru=en.QQ.define({create:()=>!0,update(l,c){for(let s of c.effects)s.is(Ml)&&(l=s.value);return l},provide:l=>Qo.from(l,c=>c?Qd:null)}),Lu=dn.tk.baseTheme({".cm-panel.cm-gotoLine":{padding:"2px 6px 4px","& label":{fontSize:"80%"}}}),dy={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!0},Lg=en.r$.define({combine:l=>(0,en.BO)(l,dy,{highlightWordAroundCursor:(c,s)=>c||s,minSelectionLength:Math.min,maxMatches:Math.min})});function fy(l){let c=[yy,vy];return l&&c.push(Lg.of(l)),c}const py=dn.p.mark({class:"cm-selectionMatch"}),gy=dn.p.mark({class:"cm-selectionMatch cm-selectionMatch-main"});function Fg(l,c,s,u){return!(0!=s&&l(c.sliceDoc(s-1,s))==en.D0.Word||u!=c.doc.length&&l(c.sliceDoc(u,u+1))==en.D0.Word)}const vy=dn.lg.fromClass(class{constructor(l){this.decorations=this.getDeco(l)}update(l){(l.selectionSet||l.docChanged||l.viewportChanged)&&(this.decorations=this.getDeco(l.view))}getDeco(l){let c=l.state.facet(Lg),{state:s}=l,u=s.selection;if(u.ranges.length>1)return dn.p.none;let w,v=u.main,U=null;if(v.empty){if(!c.highlightWordAroundCursor)return dn.p.none;let De=s.wordAt(v.head);if(!De)return dn.p.none;U=s.charCategorizer(v.head),w=s.sliceDoc(De.from,De.to)}else{let De=v.to-v.from;if(De<c.minSelectionLength||De>200)return dn.p.none;if(c.wholeWords){if(w=s.sliceDoc(v.from,v.to),U=s.charCategorizer(v.head),!Fg(U,s,v.from,v.to)||!function my(l,c,s,u){return l(c.sliceDoc(s,s+1))==en.D0.Word&&l(c.sliceDoc(u-1,u))==en.D0.Word}(U,s,v.from,v.to))return dn.p.none}else if(w=s.sliceDoc(v.from,v.to).trim(),!w)return dn.p.none}let fe=[];for(let De of l.visibleRanges){let et=new Dl(s.doc,w,De.from,De.to);for(;!et.next().done;){let{from:wt,to:Gt}=et.value;if((!U||Fg(U,s,wt,Gt))&&(v.empty&&wt<=v.from&&Gt>=v.to?fe.push(gy.range(wt,Gt)):(wt>=v.to||Gt<=v.from)&&fe.push(py.range(wt,Gt)),fe.length>c.maxMatches))return dn.p.none}}return dn.p.set(fe)}},{decorations:l=>l.decorations}),yy=dn.tk.baseTheme({".cm-selectionMatch":{backgroundColor:"#99ff7780"},".cm-searchMatch .cm-selectionMatch":{backgroundColor:"transparent"}}),Tc=en.r$.define({combine(l){var c;return{top:l.reduce((s,u)=>s??u.top,void 0)||!1,caseSensitive:l.reduce((s,u)=>s??(u.caseSensitive||u.matchCase),void 0)||!1,createPanel:(null===(c=l.find(s=>s.createPanel))||void 0===c?void 0:c.createPanel)||(s=>new Cy(s))}}});class Nu{constructor(c){this.search=c.search,this.caseSensitive=!!c.caseSensitive,this.regexp=!!c.regexp,this.replace=c.replace||"",this.valid=!!this.search&&(!this.regexp||function Og(l){try{return new RegExp(l,ku),!0}catch{return!1}}(this.search)),this.unquoted=this.search.replace(/\\([nrt\\])/g,(s,u)=>"n"==u?"\n":"r"==u?"\r":"t"==u?"\t":"\\")}eq(c){return this.search==c.search&&this.replace==c.replace&&this.caseSensitive==c.caseSensitive&&this.regexp==c.regexp}create(){return this.regexp?new Hg(this):new qo(this)}getCursor(c,s=0,u=c.length){return this.regexp?va(this,c,s,u):Va(this,c,s,u)}}class Dc{constructor(c){this.spec=c}}function Va(l,c,s,u){return new Dl(c,l.unquoted,s,u,l.caseSensitive?void 0:v=>v.toLowerCase())}class qo extends Dc{constructor(c){super(c)}nextMatch(c,s,u){let v=Va(this.spec,c,u,c.length).nextOverlapping();return v.done&&(v=Va(this.spec,c,0,s).nextOverlapping()),v.done?null:v.value}prevMatchInRange(c,s,u){for(let v=u;;){let w=Math.max(s,v-1e4-this.spec.unquoted.length),U=Va(this.spec,c,w,v),fe=null;for(;!U.nextOverlapping().done;)fe=U.value;if(fe)return fe;if(w==s)return null;v-=1e4}}prevMatch(c,s,u){return this.prevMatchInRange(c,0,s)||this.prevMatchInRange(c,u,c.length)}getReplacement(c){return this.spec.replace}matchAll(c,s){let u=Va(this.spec,c,0,c.length),v=[];for(;!u.next().done;){if(v.length>=s)return null;v.push(u.value)}return v}highlight(c,s,u,v){let w=Va(this.spec,c,Math.max(0,s-this.spec.unquoted.length),Math.min(u+this.spec.unquoted.length,c.length));for(;!w.next().done;)v(w.value.from,w.value.to)}}function va(l,c,s,u){return new Jd(c,l.search,l.caseSensitive?void 0:{ignoreCase:!0},s,u)}class Hg extends Dc{nextMatch(c,s,u){let v=va(this.spec,c,u,c.length).next();return v.done&&(v=va(this.spec,c,0,s).next()),v.done?null:v.value}prevMatchInRange(c,s,u){for(let v=1;;v++){let w=Math.max(s,u-1e4*v),U=va(this.spec,c,w,u),fe=null;for(;!U.next().done;)fe=U.value;if(fe&&(w==s||fe.from>w+10))return fe;if(w==s)return null}}prevMatch(c,s,u){return this.prevMatchInRange(c,0,s)||this.prevMatchInRange(c,u,c.length)}getReplacement(c){return this.spec.replace.replace(/\$([$&\d+])/g,(s,u)=>"$"==u?"$":"&"==u?c.match[0]:"0"!=u&&+u<c.match.length?c.match[u]:s)}matchAll(c,s){let u=va(this.spec,c,0,c.length),v=[];for(;!u.next().done;){if(v.length>=s)return null;v.push(u.value)}return v}highlight(c,s,u,v){let w=va(this.spec,c,Math.max(0,s-250),Math.min(u+250,c.length));for(;!w.next().done;)v(w.value.from,w.value.to)}}const ya=en.Py.define(),Hu=en.Py.define(),fo=en.QQ.define({create:l=>new Bu(kl(l).create(),null),update(l,c){for(let s of c.effects)s.is(ya)?l=new Bu(s.value.create(),l.panel):s.is(Hu)&&(l=new Bu(l.query,s.value?Il:null));return l},provide:l=>Qo.from(l,c=>c.panel)});class Bu{constructor(c,s){this.query=c,this.panel=s}}const Pl=dn.p.mark({class:"cm-searchMatch"}),za=dn.p.mark({class:"cm-searchMatch cm-searchMatch-selected"}),Uu=dn.lg.fromClass(class{constructor(l){this.view=l,this.decorations=this.highlight(l.state.field(fo))}update(l){let c=l.state.field(fo);(c!=l.startState.field(fo)||l.docChanged||l.selectionSet)&&(this.decorations=this.highlight(c))}highlight({query:l,panel:c}){if(!c||!l.spec.valid)return dn.p.none;let{view:s}=this,u=new Xr.f_;for(let v=0,w=s.visibleRanges,U=w.length;v<U;v++){let{from:fe,to:De}=w[v];for(;v<U-1&&De>w[v+1].from-500;)De=w[++v].to;l.highlight(s.state.doc,fe,De,(et,wt)=>{let Gt=s.state.selection.ranges.some(fn=>fn.from==et&&fn.to==wt);u.add(et,wt,Gt?za:Pl)})}return u.finish()}},{decorations:l=>l.decorations});function po(l){return c=>{let s=c.state.field(fo,!1);return s&&s.query.spec.valid?l(c,s):Ol(c)}}const ea=po((l,{query:c})=>{let{from:s,to:u}=l.state.selection.main,v=c.nextMatch(l.state.doc,s,u);return!(!v||v.from==s&&v.to==u||(l.dispatch({selection:{anchor:v.from,head:v.to},scrollIntoView:!0,effects:Pc(l,v),userEvent:"select.search"}),0))}),Oo=po((l,{query:c})=>{let{state:s}=l,{from:u,to:v}=s.selection.main,w=c.prevMatch(s.doc,u,v);return!!w&&(l.dispatch({selection:{anchor:w.from,head:w.to},scrollIntoView:!0,effects:Pc(l,w),userEvent:"select.search"}),!0)}),Bg=po((l,{query:c})=>{let s=c.matchAll(l.state.doc,1e3);return!(!s||!s.length||(l.dispatch({selection:en.jT.create(s.map(u=>en.jT.range(u.from,u.to))),userEvent:"select.search.matches"}),0))}),$u=po((l,{query:c})=>{let{state:s}=l,{from:u,to:v}=s.selection.main;if(s.readOnly)return!1;let w=c.nextMatch(s.doc,u,u);if(!w)return!1;let fe,De,U=[];if(w.from==u&&w.to==v&&(De=s.toText(c.getReplacement(w)),U.push({from:w.from,to:w.to,insert:De}),w=c.nextMatch(s.doc,w.from,w.to)),w){let et=0==U.length||U[0].from>=w.to?0:w.to-w.from-De.length;fe={anchor:w.from-et,head:w.to-et}}return l.dispatch({changes:U,selection:fe,scrollIntoView:!!fe,effects:w?Pc(l,w):void 0,userEvent:"input.replace"}),!0}),ju=po((l,{query:c})=>{if(l.state.readOnly)return!1;let s=c.matchAll(l.state.doc,1e9).map(u=>{let{from:v,to:w}=u;return{from:v,to:w,insert:c.getReplacement(u)}});return!!s.length&&(l.dispatch({changes:s,userEvent:"input.replace.all"}),!0)});function Il(l){return l.state.facet(Tc).createPanel(l)}function kl(l,c){var s;let u=l.selection.main,v=u.empty||u.to>u.from+100?"":l.sliceDoc(u.from,u.to),w=null!==(s=null==c?void 0:c.caseSensitive)&&void 0!==s?s:l.facet(Tc).caseSensitive;return c&&!v?c:new Nu({search:v.replace(/\n/g,"\\n"),caseSensitive:w})}const Ol=l=>{let c=l.state.field(fo,!1);if(c&&c.panel){let s=ga(l,Il);if(!s)return!1;let u=s.dom.querySelector("[name=search]");if(u!=l.root.activeElement){let v=kl(l.state,c.query.spec);v.valid&&l.dispatch({effects:ya.of(v)}),u.focus(),u.select()}}else l.dispatch({effects:[Hu.of(!0),c?ya.of(kl(l.state,c.query.spec)):en.Py.appendConfig.of(Vu)]});return!0},ef=l=>{let c=l.state.field(fo,!1);if(!c||!c.panel)return!1;let s=ga(l,Il);return s&&s.dom.contains(l.root.activeElement)&&l.focus(),l.dispatch({effects:Hu.of(!1)}),!0},tf=[{key:"Mod-f",run:Ol,scope:"editor search-panel"},{key:"F3",run:ea,shift:Oo,scope:"editor search-panel",preventDefault:!0},{key:"Mod-g",run:ea,shift:Oo,scope:"editor search-panel",preventDefault:!0},{key:"Escape",run:ef,scope:"editor search-panel"},{key:"Mod-Shift-l",run:({state:l,dispatch:c})=>{let s=l.selection;if(s.ranges.length>1||s.main.empty)return!1;let{from:u,to:v}=s.main,w=[],U=0;for(let fe=new Dl(l.doc,l.sliceDoc(u,v));!fe.next().done;){if(w.length>1e3)return!1;fe.value.from==u&&(U=w.length),w.push(en.jT.range(fe.value.from,fe.value.to))}return c(l.update({selection:en.jT.create(w,U),userEvent:"select.search.matches"})),!0}},{key:"Alt-g",run:l=>{let c=ga(l,Qd);if(!c){let s=[Ml.of(!0)];null==l.state.field(Ru,!1)&&s.push(en.Py.appendConfig.of([Ru,Lu])),l.dispatch({effects:s}),c=ga(l,Qd)}return c&&c.dom.querySelector("input").focus(),!0}},{key:"Mod-d",run:({state:l,dispatch:c})=>{let{ranges:s}=l.selection;if(s.some(w=>w.from===w.to))return(({state:l,dispatch:c})=>{let{selection:s}=l,u=en.jT.create(s.ranges.map(v=>l.wordAt(v.head)||en.jT.cursor(v.head)),s.mainIndex);return!u.eq(s)&&(c(l.update({selection:u})),!0)})({state:l,dispatch:c});let u=l.sliceDoc(s[0].from,s[0].to);if(l.selection.ranges.some(w=>l.sliceDoc(w.from,w.to)!=u))return!1;let v=function Xo(l,c){let{main:s,ranges:u}=l.selection,v=l.wordAt(s.head),w=v&&v.from==s.from&&v.to==s.to;for(let U=!1,fe=new Dl(l.doc,c,u[u.length-1].to);;){if(fe.next(),!fe.done){if(U&&u.some(De=>De.from==fe.value.from))continue;if(w){let De=l.wordAt(fe.value.from);if(!De||De.from!=fe.value.from||De.to!=fe.value.to)continue}return fe.value}if(U)return null;fe=new Dl(l.doc,c,0,Math.max(0,u[u.length-1].from-1)),U=!0}}(l,u);return!!v&&(c(l.update({selection:l.selection.addRange(en.jT.range(v.from,v.to),!1),effects:dn.tk.scrollIntoView(v.to)})),!0)},preventDefault:!0}];class Cy{constructor(c){this.view=c;let s=this.query=c.state.field(fo).query.spec;function u(v,w,U){return Gi("button",{class:"cm-button",name:v,onclick:w,type:"button"},U)}this.commit=this.commit.bind(this),this.searchField=Gi("input",{value:s.search,placeholder:ls(c,"Find"),"aria-label":ls(c,"Find"),class:"cm-textfield",name:"search",onchange:this.commit,onkeyup:this.commit}),this.replaceField=Gi("input",{value:s.replace,placeholder:ls(c,"Replace"),"aria-label":ls(c,"Replace"),class:"cm-textfield",name:"replace",onchange:this.commit,onkeyup:this.commit}),this.caseField=Gi("input",{type:"checkbox",name:"case",checked:s.caseSensitive,onchange:this.commit}),this.reField=Gi("input",{type:"checkbox",name:"re",checked:s.regexp,onchange:this.commit}),this.dom=Gi("div",{onkeydown:v=>this.keydown(v),class:"cm-search"},[this.searchField,u("next",()=>ea(c),[ls(c,"next")]),u("prev",()=>Oo(c),[ls(c,"previous")]),u("select",()=>Bg(c),[ls(c,"all")]),Gi("label",null,[this.caseField,ls(c,"match case")]),Gi("label",null,[this.reField,ls(c,"regexp")]),...c.state.readOnly?[]:[Gi("br"),this.replaceField,u("replace",()=>$u(c),[ls(c,"replace")]),u("replaceAll",()=>ju(c),[ls(c,"replace all")]),Gi("button",{name:"close",onclick:()=>ef(c),"aria-label":ls(c,"close"),type:"button"},["\xd7"])]])}commit(){let c=new Nu({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,replace:this.replaceField.value});c.eq(this.query)||(this.query=c,this.view.dispatch({effects:ya.of(c)}))}keydown(c){(0,dn.$1)(this.view,c,"search-panel")?c.preventDefault():13==c.keyCode&&c.target==this.searchField?(c.preventDefault(),(c.shiftKey?Oo:ea)(this.view)):13==c.keyCode&&c.target==this.replaceField&&(c.preventDefault(),$u(this.view))}update(c){for(let s of c.transactions)for(let u of s.effects)u.is(ya)&&!u.value.eq(this.query)&&this.setQuery(u.value)}setQuery(c){this.query=c,this.searchField.value=c.search,this.replaceField.value=c.replace,this.caseField.checked=c.caseSensitive,this.reField.checked=c.regexp}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(Tc).top}}function ls(l,c){return l.state.phrase(c)}const Mc=/[\s\.,:;?!]/;function Pc(l,{from:c,to:s}){let u=l.state.doc.lineAt(c).from,v=l.state.doc.lineAt(s).to,w=Math.max(u,c-30),U=Math.min(v,s+30),fe=l.state.sliceDoc(w,U);if(w!=u)for(let De=0;De<30;De++)if(!Mc.test(fe[De+1])&&Mc.test(fe[De])){fe=fe.slice(De);break}if(U!=v)for(let De=fe.length-1;De>fe.length-30;De--)if(!Mc.test(fe[De-1])&&Mc.test(fe[De])){fe=fe.slice(0,De);break}return dn.tk.announce.of(`${l.state.phrase("current match")}. ${fe} ${l.state.phrase("on line")} ${l.state.doc.lineAt(c).number}`)}const Ug=dn.tk.baseTheme({".cm-panel.cm-search":{padding:"2px 6px 4px",position:"relative","& [name=close]":{position:"absolute",top:"0",right:"4px",backgroundColor:"inherit",border:"none",font:"inherit",padding:0,margin:0},"& input, & button, & label":{margin:".2em .6em .2em 0"},"& input[type=checkbox]":{marginRight:".2em"},"& label":{fontSize:"80%",whiteSpace:"pre"}},"&light .cm-searchMatch":{backgroundColor:"#ffff0054"},"&dark .cm-searchMatch":{backgroundColor:"#00ffff8a"},"&light .cm-searchMatch-selected":{backgroundColor:"#ff6a0054"},"&dark .cm-searchMatch-selected":{backgroundColor:"#ff00ff8a"}}),Vu=[fo,en.Wl.lowest(Uu),Ug];var Br=d(37883);function zu(l,c){return({state:s,dispatch:u})=>{if(s.readOnly)return!1;let v=l(c,s);return!!v&&(u(s.update(v)),!0)}}const wy=zu(Gg,0),Ay=zu(Ku,0),rf=zu((l,c)=>Ku(l,c,function zg(l){let c=[];for(let s of l.selection.ranges){let u=l.doc.lineAt(s.from),v=s.to<=u.to?u:l.doc.lineAt(s.to),w=c.length-1;w>=0&&c[w].to>u.from?c[w].to=v.to:c.push({from:u.from,to:v.to})}return c}(c)),0),Vg=[{key:"Mod-/",run:l=>{let c=Gu(l.state);return c.line?wy(l):!!c.block&&rf(l)}},{key:"Alt-A",run:Ay}];function Gu(l,c=l.selection.main.head){let s=l.languageDataAt("commentTokens",c);return s.length?s[0]:{}}function Ku(l,c,s=c.selection.ranges){let u=s.map(w=>Gu(c,w.from).block);if(!u.every(w=>w))return null;let v=s.map((w,U)=>function sf(l,{open:c,close:s},u,v){let wt,Gt,w=l.sliceDoc(u-50,u),U=l.sliceDoc(v,v+50),fe=/\s*$/.exec(w)[0].length,De=/^\s*/.exec(U)[0].length,et=w.length-fe;if(w.slice(et-c.length,et)==c&&U.slice(De,De+s.length)==s)return{open:{pos:u-fe,margin:fe&&1},close:{pos:v+De,margin:De&&1}};v-u<=100?wt=Gt=l.sliceDoc(u,v):(wt=l.sliceDoc(u,u+50),Gt=l.sliceDoc(v-50,v));let fn=/^\s*/.exec(wt)[0].length,kn=/\s*$/.exec(Gt)[0].length,Sn=Gt.length-kn-s.length;return wt.slice(fn,fn+c.length)==c&&Gt.slice(Sn,Sn+s.length)==s?{open:{pos:u+fn+c.length,margin:/\s/.test(wt.charAt(fn+c.length))?1:0},close:{pos:v-kn-s.length,margin:/\s/.test(Gt.charAt(Sn-1))?1:0}}:null}(c,u[U],w.from,w.to));if(2!=l&&!v.every(w=>w))return{changes:c.changes(s.map((w,U)=>v[U]?[]:[{from:w.from,insert:u[U].open+" "},{from:w.to,insert:" "+u[U].close}]))};if(1!=l&&v.some(w=>w)){let w=[];for(let fe,U=0;U<v.length;U++)if(fe=v[U]){let De=u[U],{open:et,close:wt}=fe;w.push({from:et.pos-De.open.length,to:et.pos+et.margin},{from:wt.pos-wt.margin,to:wt.pos+De.close.length})}return{changes:w}}return null}function Gg(l,c,s=c.selection.ranges){let u=[],v=-1;for(let{from:w,to:U}of s){let fe=u.length,De=1e9;for(let et=w;et<=U;){let wt=c.doc.lineAt(et);if(wt.from>v&&(w==U||U>wt.from)){v=wt.from;let Gt=Gu(c,et).line;if(!Gt)continue;let fn=/^\s*/.exec(wt.text)[0].length,kn=fn==wt.length,Sn=wt.text.slice(fn,fn+Gt.length)==Gt?fn:-1;fn<wt.text.length&&fn<De&&(De=fn),u.push({line:wt,comment:Sn,token:Gt,indent:fn,empty:kn,single:!1})}et=wt.to+1}if(De<1e9)for(let et=fe;et<u.length;et++)u[et].indent<u[et].line.text.length&&(u[et].indent=De);u.length==fe+1&&(u[fe].single=!0)}if(2!=l&&u.some(w=>w.comment<0&&(!w.empty||w.single))){let w=[];for(let{line:fe,token:De,indent:et,empty:wt,single:Gt}of u)(Gt||!wt)&&w.push({from:fe.from+et,insert:De+" "});let U=c.changes(w);return{changes:U,selection:c.selection.map(U,1)}}if(1!=l&&u.some(w=>w.comment>=0)){let w=[];for(let{line:U,comment:fe,token:De}of u)if(fe>=0){let et=U.from+fe,wt=et+De.length;" "==U.text[wt-U.from]&&wt++,w.push({from:et,to:wt})}return{changes:w}}return null}function lf(l,c){let s=l.posAtCoords({x:c.clientX,y:c.clientY},!1),u=l.state.doc.lineAt(s),v=s-u.from,w=v>2e3?-1:v==u.length?function af(l,c){let s=l.coordsAtPos(l.viewport.from);return s?Math.round(Math.abs((s.left-c)/l.defaultCharacterWidth)):-1}(l,c.clientX):(0,Xi.IS)(u.text,l.state.tabSize,s-u.from);return{line:u.number,col:w,off:v}}function Zu(l){let c=(null==l?void 0:l.eventFilter)||(s=>s.altKey&&0==s.button);return dn.tk.mouseSelectionStyle.of((s,u)=>c(u)?function go(l,c){let s=lf(l,c),u=l.state.selection;return s?{update(v){if(v.docChanged){let w=v.changes.mapPos(v.startState.doc.line(s.line).from),U=v.state.doc.lineAt(w);s={line:U.number,col:s.col,off:Math.min(s.off,U.length)},u=u.map(v.changes)}},get(v,w,U){let fe=lf(l,v);if(!fe)return u;let De=function of(l,c,s){let u=Math.min(c.line,s.line),v=Math.max(c.line,s.line),w=[];if(c.off>2e3||s.off>2e3||c.col<0||s.col<0){let U=Math.min(c.off,s.off),fe=Math.max(c.off,s.off);for(let De=u;De<=v;De++){let et=l.doc.line(De);et.length<=fe&&w.push(en.jT.range(et.from+U,et.to+fe))}}else{let U=Math.min(c.col,s.col),fe=Math.max(c.col,s.col);for(let De=u;De<=v;De++){let et=l.doc.line(De),wt=(0,Xi.Gz)(et.text,U,l.tabSize,!0);if(wt>-1){let Gt=(0,Xi.Gz)(et.text,fe,l.tabSize);w.push(en.jT.range(et.from+wt,et.from+Gt))}}}return w}(l.state,s,fe);return De.length?en.jT.create(U?De.concat(u.ranges):De):u}}:null}(s,u):null)}var Kg=d(99526),cf=d(38132);class Ey{constructor(c,s,u){this.from=c,this.to=s,this.diagnostic=u}}class ta{constructor(c,s,u){this.diagnostics=c,this.panel=s,this.selected=u}static init(c,s,u){let v=dn.p.set(c.map(w=>w.from==w.to||w.from==w.to-1&&u.doc.lineAt(w.from).to==w.from?dn.p.widget({widget:new gf(w),diagnostic:w}).range(w.from):dn.p.mark({attributes:{class:"cm-lintRange cm-lintRange-"+w.severity},diagnostic:w}).range(w.from,w.to)),!0);return new ta(v,s,Ga(v))}}function Ga(l,c=null,s=0){let u=null;return l.between(s,1e9,(v,w,{spec:U})=>{if(!c||U.diagnostic==c)return u=new Ey(v,w,U.diagnostic),!1}),u}function uf(l,c){return l.field(Sr,!1)?c:c.concat(en.Py.appendConfig.of([Sr,dn.tk.decorations.compute([Sr],s=>{let{selected:u,panel:v}=s.field(Sr);return u&&v&&u.from!=u.to?dn.p.set([Zg.range(u.from,u.to)]):dn.p.none}),(0,cf.bF)(Ju),Ty]))}const Fl=en.Py.define(),Yu=en.Py.define(),hf=en.Py.define(),Sr=en.QQ.define({create:()=>new ta(dn.p.none,null,null),update(l,c){if(c.docChanged){let s=l.diagnostics.map(c.changes),u=null;if(l.selected){let v=c.changes.mapPos(l.selected.from,1);u=Ga(s,l.selected.diagnostic,v)||Ga(s,null,v)}l=new ta(s,l.panel,u)}for(let s of c.effects)s.is(Fl)?l=ta.init(s.value,l.panel,c.state):s.is(Yu)?l=new ta(l.diagnostics,s.value?_a.open:null,l.selected):s.is(hf)&&(l=new ta(l.diagnostics,l.panel,s.value));return l},provide:l=>[Qo.from(l,c=>c.panel),dn.tk.decorations.from(l,c=>c.diagnostics)]}),Zg=dn.p.mark({class:"cm-lintRange cm-lintRange-active"});function Ju(l,c,s){let{diagnostics:u}=l.state.field(Sr),v=[],w=2e8,U=0;return u.between(c-(s<0?1:0),c+(s>0?1:0),(fe,De,{spec:et})=>{c>=fe&&c<=De&&(fe==De||(c>fe||s>0)&&(c<De||s<0))&&(v.push(et.diagnostic),w=Math.min(fe,w),U=Math.max(De,U))}),v.length?{pos:w,end:U,above:l.state.doc.lineAt(w).to<U,create:()=>({dom:Ic(l,v)})}:null}function Ic(l,c){return Gi("ul",{class:"cm-tooltip-lint"},c.map(s=>qu(l,s,!1)))}const pf=l=>{let c=l.state.field(Sr,!1);return!(!c||!c.panel||(l.dispatch({effects:Yu.of(!1)}),0))},Qu=[{key:"Mod-Shift-m",run:l=>{let c=l.state.field(Sr,!1);(!c||!c.panel)&&l.dispatch({effects:uf(l.state,[Yu.of(!0)])});let s=ga(l,_a.open);return s&&s.dom.querySelector(".cm-panel-lint ul").focus(),!0}},{key:"F8",run:l=>{let c=l.state.field(Sr,!1);if(!c)return!1;let s=l.state.selection.main,u=c.diagnostics.iter(s.to+1);return!(!u.value&&(u=c.diagnostics.iter(0),!u.value||u.from==s.from&&u.to==s.to)||(l.dispatch({selection:{anchor:u.from,head:u.to},scrollIntoView:!0}),0))}}];function Xu(l){let c=[];if(l)e:for(let{name:s}of l){for(let u=0;u<s.length;u++){let v=s[u];if(/[a-zA-Z]/.test(v)&&!c.some(w=>w.toLowerCase()==v.toLowerCase())){c.push(v);continue e}}c.push("")}return c}function qu(l,c,s){var u;let v=s?Xu(c.actions):[];return Gi("li",{class:"cm-diagnostic cm-diagnostic-"+c.severity},Gi("span",{class:"cm-diagnosticText"},c.message),null===(u=c.actions)||void 0===u?void 0:u.map((w,U)=>{let fe=Gt=>{Gt.preventDefault();let fn=Ga(l.state.field(Sr).diagnostics,c);fn&&w.apply(l,fn.from,fn.to)},{name:De}=w,et=v[U]?De.indexOf(v[U]):-1,wt=et<0?De:[De.slice(0,et),Gi("u",De.slice(et,et+1)),De.slice(et+1)];return Gi("button",{type:"button",class:"cm-diagnosticAction",onclick:fe,onmousedown:fe,"aria-label":` Action: ${De}${et<0?"":` (access key "${v[U]})"`}.`},wt)}),c.source&&Gi("div",{class:"cm-diagnosticSource"},c.source))}class gf extends dn.l9{constructor(c){super(),this.diagnostic=c}eq(c){return c.diagnostic==this.diagnostic}toDOM(){return Gi("span",{class:"cm-lintPoint cm-lintPoint-"+this.diagnostic.severity})}}class mo{constructor(c,s){this.diagnostic=s,this.id="item_"+Math.floor(4294967295*Math.random()).toString(16),this.dom=qu(c,s,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class _a{constructor(c){this.view=c,this.items=[],this.list=Gi("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:v=>{if(27==v.keyCode)pf(this.view),this.view.focus();else if(38==v.keyCode||33==v.keyCode)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(40==v.keyCode||34==v.keyCode)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(36==v.keyCode)this.moveSelection(0);else if(35==v.keyCode)this.moveSelection(this.items.length-1);else if(13==v.keyCode)this.view.focus();else{if(!(v.keyCode>=65&&v.keyCode<=90&&this.selectedIndex>=0))return;{let{diagnostic:w}=this.items[this.selectedIndex],U=Xu(w.actions);for(let fe=0;fe<U.length;fe++)if(U[fe].toUpperCase().charCodeAt(0)==v.keyCode){let De=Ga(this.view.state.field(Sr).diagnostics,w);De&&w.actions[fe].apply(c,De.from,De.to)}}}v.preventDefault()},onclick:v=>{for(let w=0;w<this.items.length;w++)this.items[w].dom.contains(v.target)&&this.moveSelection(w)}}),this.dom=Gi("div",{class:"cm-panel-lint"},this.list,Gi("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>pf(this.view)},"\xd7")),this.update()}get selectedIndex(){let c=this.view.state.field(Sr).selected;if(!c)return-1;for(let s=0;s<this.items.length;s++)if(this.items[s].diagnostic==c.diagnostic)return s;return-1}update(){let{diagnostics:c,selected:s}=this.view.state.field(Sr),u=0,v=!1,w=null;for(c.between(0,this.view.state.doc.length,(U,fe,{spec:De})=>{let wt,et=-1;for(let Gt=u;Gt<this.items.length;Gt++)if(this.items[Gt].diagnostic==De.diagnostic){et=Gt;break}et<0?(wt=new mo(this.view,De.diagnostic),this.items.splice(u,0,wt),v=!0):(wt=this.items[et],et>u&&(this.items.splice(u,et-u),v=!0)),s&&wt.diagnostic==s.diagnostic?wt.dom.hasAttribute("aria-selected")||(wt.dom.setAttribute("aria-selected","true"),w=wt):wt.dom.hasAttribute("aria-selected")&&wt.dom.removeAttribute("aria-selected"),u++});u<this.items.length&&!(1==this.items.length&&this.items[0].diagnostic.from<0);)v=!0,this.items.pop();0==this.items.length&&(this.items.push(new mo(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),v=!0),w?(this.list.setAttribute("aria-activedescendant",w.id),this.view.requestMeasure({key:this,read:()=>({sel:w.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:U,panel:fe})=>{U.top<fe.top?this.list.scrollTop-=fe.top-U.top:U.bottom>fe.bottom&&(this.list.scrollTop+=U.bottom-fe.bottom)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),v&&this.sync()}sync(){let c=this.list.firstChild;function s(){let u=c;c=u.nextSibling,u.remove()}for(let u of this.items)if(u.dom.parentNode==this.list){for(;c!=u.dom;)s();c=u.dom.nextSibling}else this.list.insertBefore(u.dom,c);for(;c;)s()}moveSelection(c){if(this.selectedIndex<0)return;let u=Ga(this.view.state.field(Sr).diagnostics,this.items[c].diagnostic);!u||this.view.dispatch({selection:{anchor:u.from,head:u.to},scrollIntoView:!0,effects:hf.of(u)})}static open(c){return new _a(c)}}function eh(l){return function kc(l,c='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${c}>${encodeURIComponent(l)}</svg>')`}(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${l}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const Ty=dn.tk.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:eh("#d11")},".cm-lintRange-warning":{backgroundImage:eh("orange")},".cm-lintRange-info":{backgroundImage:eh("#999")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}}),qg=[tg(),Qv(),(0,dn.AE)(),ml(),od(),(0,dn.Uw)(),(0,dn.qr)(),en.yy.allowMultipleSelections.of(!0),(0,Ft.nY)(),Kg.R_.fallback,ug(),Eg(),(0,Br.ys)(),Zu(),(0,dn.ZO)(),fy(),dn.$f.of([...ti,...zd,...tf,...Qp,...ey,...Vg,...Br.B1,...Qu])];var em=d(79955);function nn(l){return d.e(4041).then(d.bind(d,44041)).then(c=>new Ft.ri(c.StreamLanguage.define(l)))}function cs(l){return d.e(3773).then(d.bind(d,93773)).then(c=>c.sql({dialect:c[l]}))}const rh=[Ft.c6.of({name:"C",extensions:["c","h","ino"],load:()=>d.e(2054).then(d.bind(d,82054)).then(l=>l.cpp())}),Ft.c6.of({name:"C++",alias:["cpp"],extensions:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],load:()=>d.e(2054).then(d.bind(d,82054)).then(l=>l.cpp())}),Ft.c6.of({name:"CQL",alias:["cassandra"],extensions:["cql"],load:()=>cs("Cassandra")}),Ft.c6.of({name:"CSS",extensions:["css"],load:()=>d.e(596).then(d.bind(d,10596)).then(l=>l.css())}),Ft.c6.of({name:"HTML",alias:["xhtml"],extensions:["html","htm","handlebars","hbs"],load:()=>Promise.all([d.e(6736),d.e(596),d.e(7220)]).then(d.bind(d,47220)).then(l=>l.html())}),Ft.c6.of({name:"Java",extensions:["java"],load:()=>d.e(2853).then(d.bind(d,62853)).then(l=>l.java())}),Ft.c6.of({name:"JavaScript",alias:["ecmascript","js","node"],extensions:["js","mjs","cjs"],load:()=>d.e(6736).then(d.bind(d,66736)).then(l=>l.javascript())}),Ft.c6.of({name:"JSON",alias:["json5"],extensions:["json","map"],load:()=>Promise.resolve().then(d.bind(d,79955)).then(l=>l.json())}),Ft.c6.of({name:"JSX",extensions:["jsx"],load:()=>d.e(6736).then(d.bind(d,66736)).then(l=>l.javascript({jsx:!0}))}),Ft.c6.of({name:"MariaDB SQL",load:()=>cs("MariaSQL")}),Ft.c6.of({name:"Markdown",extensions:["md","markdown","mkd"],load:()=>Promise.all([d.e(6736),d.e(596),d.e(7220),d.e(6107)]).then(d.bind(d,96107)).then(l=>l.markdown())}),Ft.c6.of({name:"MS SQL",load:()=>cs("MSSQL")}),Ft.c6.of({name:"MySQL",load:()=>cs("MySQL")}),Ft.c6.of({name:"PHP",extensions:["php","php3","php4","php5","php7","phtml"],load:()=>Promise.all([d.e(6736),d.e(596),d.e(7220),d.e(2235)]).then(d.bind(d,62235)).then(l=>l.php())}),Ft.c6.of({name:"PLSQL",extensions:["pls"],load:()=>cs("PLSQL")}),Ft.c6.of({name:"PostgreSQL",load:()=>cs("PostgreSQL")}),Ft.c6.of({name:"Python",extensions:["BUILD","bzl","py","pyw"],filename:/^(BUCK|BUILD)$/,load:()=>d.e(7696).then(d.bind(d,47696)).then(l=>l.python())}),Ft.c6.of({name:"Rust",extensions:["rs"],load:()=>d.e(1879).then(d.bind(d,71879)).then(l=>l.rust())}),Ft.c6.of({name:"SQL",extensions:["sql"],load:()=>cs("StandardSQL")}),Ft.c6.of({name:"SQLite",load:()=>cs("SQLite")}),Ft.c6.of({name:"TSX",extensions:["tsx"],load:()=>d.e(6736).then(d.bind(d,66736)).then(l=>l.javascript({jsx:!0,typescript:!0}))}),Ft.c6.of({name:"TypeScript",alias:["ts"],extensions:["ts"],load:()=>d.e(6736).then(d.bind(d,66736)).then(l=>l.javascript({typescript:!0}))}),Ft.c6.of({name:"WebAssembly",extensions:["wat","wast"],load:()=>d.e(8401).then(d.bind(d,78401)).then(l=>l.wast())}),Ft.c6.of({name:"XML",alias:["rss","wsdl","xsd"],extensions:["xml","xsl","xsd","svg"],load:()=>d.e(4603).then(d.bind(d,14603)).then(l=>l.xml())}),Ft.c6.of({name:"APL",extensions:["dyalog","apl"],load:()=>d.e(2992).then(d.bind(d,62992)).then(l=>nn(l.apl))}),Ft.c6.of({name:"PGP",alias:["asciiarmor"],extensions:["asc","pgp","sig"],load:()=>d.e(9008).then(d.bind(d,59008)).then(l=>nn(l.asciiArmor))}),Ft.c6.of({name:"ASN.1",extensions:["asn","asn1"],load:()=>d.e(5800).then(d.bind(d,35800)).then(l=>nn(l.asn1({})))}),Ft.c6.of({name:"Asterisk",filename:/^extensions\.conf$/i,load:()=>d.e(5158).then(d.bind(d,25158)).then(l=>nn(l.asterisk))}),Ft.c6.of({name:"Brainfuck",extensions:["b","bf"],load:()=>d.e(7655).then(d.bind(d,27655)).then(l=>nn(l.brainfuck))}),Ft.c6.of({name:"Cobol",extensions:["cob","cpy"],load:()=>d.e(5424).then(d.bind(d,35424)).then(l=>nn(l.cobol))}),Ft.c6.of({name:"C#",alias:["csharp","cs"],extensions:["cs"],load:()=>d.e(3225).then(d.bind(d,23225)).then(l=>nn(l.csharp))}),Ft.c6.of({name:"Clojure",extensions:["clj","cljc","cljx"],load:()=>d.e(7576).then(d.bind(d,27576)).then(l=>nn(l.clojure))}),Ft.c6.of({name:"ClojureScript",extensions:["cljs"],load:()=>d.e(7576).then(d.bind(d,27576)).then(l=>nn(l.clojure))}),Ft.c6.of({name:"Closure Stylesheets (GSS)",extensions:["gss"],load:()=>d.e(2691).then(d.bind(d,62691)).then(l=>nn(l.gss))}),Ft.c6.of({name:"CMake",extensions:["cmake","cmake.in"],filename:/^CMakeLists\.txt$/,load:()=>d.e(420).then(d.bind(d,420)).then(l=>nn(l.cmake))}),Ft.c6.of({name:"CoffeeScript",alias:["coffee","coffee-script"],extensions:["coffee"],load:()=>d.e(747).then(d.bind(d,747)).then(l=>nn(l.coffeeScript))}),Ft.c6.of({name:"Common Lisp",alias:["lisp"],extensions:["cl","lisp","el"],load:()=>d.e(8702).then(d.bind(d,48702)).then(l=>nn(l.commonLisp))}),Ft.c6.of({name:"Cypher",extensions:["cyp","cypher"],load:()=>d.e(1751).then(d.bind(d,21751)).then(l=>nn(l.cypher))}),Ft.c6.of({name:"Cython",extensions:["pyx","pxd","pxi"],load:()=>d.e(2613).then(d.bind(d,2613)).then(l=>nn(l.cython))}),Ft.c6.of({name:"Crystal",extensions:["cr"],load:()=>d.e(3774).then(d.bind(d,73774)).then(l=>nn(l.crystal))}),Ft.c6.of({name:"D",extensions:["d"],load:()=>d.e(4261).then(d.bind(d,44261)).then(l=>nn(l.d))}),Ft.c6.of({name:"Dart",extensions:["dart"],load:()=>d.e(3225).then(d.bind(d,23225)).then(l=>nn(l.dart))}),Ft.c6.of({name:"diff",extensions:["diff","patch"],load:()=>d.e(2604).then(d.bind(d,42604)).then(l=>nn(l.diff))}),Ft.c6.of({name:"Dockerfile",filename:/^Dockerfile$/,load:()=>Promise.all([d.e(8592),d.e(6995)]).then(d.bind(d,26995)).then(l=>nn(l.dockerFile))}),Ft.c6.of({name:"DTD",extensions:["dtd"],load:()=>d.e(2024).then(d.bind(d,62024)).then(l=>nn(l.dtd))}),Ft.c6.of({name:"Dylan",extensions:["dylan","dyl","intr"],load:()=>d.e(5379).then(d.bind(d,15379)).then(l=>nn(l.dylan))}),Ft.c6.of({name:"EBNF",load:()=>d.e(2771).then(d.bind(d,12771)).then(l=>nn(l.ebnf))}),Ft.c6.of({name:"ECL",extensions:["ecl"],load:()=>d.e(180).then(d.bind(d,60180)).then(l=>nn(l.ecl))}),Ft.c6.of({name:"edn",extensions:["edn"],load:()=>d.e(7576).then(d.bind(d,27576)).then(l=>nn(l.clojure))}),Ft.c6.of({name:"Eiffel",extensions:["e"],load:()=>d.e(7521).then(d.bind(d,37521)).then(l=>nn(l.eiffel))}),Ft.c6.of({name:"Elm",extensions:["elm"],load:()=>d.e(5298).then(d.bind(d,85298)).then(l=>nn(l.elm))}),Ft.c6.of({name:"Erlang",extensions:["erl"],load:()=>d.e(8379).then(d.bind(d,28379)).then(l=>nn(l.erlang))}),Ft.c6.of({name:"Esper",load:()=>d.e(2861).then(d.bind(d,92861)).then(l=>nn(l.esper))}),Ft.c6.of({name:"Factor",extensions:["factor"],load:()=>Promise.all([d.e(8592),d.e(731)]).then(d.bind(d,40731)).then(l=>nn(l.factor))}),Ft.c6.of({name:"FCL",load:()=>d.e(8728).then(d.bind(d,99352)).then(l=>nn(l.fcl))}),Ft.c6.of({name:"Forth",extensions:["forth","fth","4th"],load:()=>d.e(5920).then(d.bind(d,55920)).then(l=>nn(l.forth))}),Ft.c6.of({name:"Fortran",extensions:["f","for","f77","f90","f95"],load:()=>d.e(4991).then(d.bind(d,84991)).then(l=>nn(l.fortran))}),Ft.c6.of({name:"F#",alias:["fsharp"],extensions:["fs"],load:()=>d.e(9308).then(d.bind(d,19308)).then(l=>nn(l.fSharp))}),Ft.c6.of({name:"Gas",extensions:["s"],load:()=>d.e(9654).then(d.bind(d,69654)).then(l=>nn(l.gas))}),Ft.c6.of({name:"Gherkin",extensions:["feature"],load:()=>d.e(5898).then(d.bind(d,35898)).then(l=>nn(l.gherkin))}),Ft.c6.of({name:"Go",extensions:["go"],load:()=>d.e(818).then(d.bind(d,20818)).then(l=>nn(l.go))}),Ft.c6.of({name:"Groovy",extensions:["groovy","gradle"],filename:/^Jenkinsfile$/,load:()=>d.e(7781).then(d.bind(d,77781)).then(l=>nn(l.groovy))}),Ft.c6.of({name:"Haskell",extensions:["hs"],load:()=>d.e(4833).then(d.bind(d,14833)).then(l=>nn(l.haskell))}),Ft.c6.of({name:"Haxe",extensions:["hx"],load:()=>d.e(9576).then(d.bind(d,9576)).then(l=>nn(l.haxe))}),Ft.c6.of({name:"HXML",extensions:["hxml"],load:()=>d.e(9576).then(d.bind(d,9576)).then(l=>nn(l.hxml))}),Ft.c6.of({name:"HTTP",load:()=>d.e(5055).then(d.bind(d,45055)).then(l=>nn(l.http))}),Ft.c6.of({name:"IDL",extensions:["pro"],load:()=>d.e(4776).then(d.bind(d,4776)).then(l=>nn(l.idl))}),Ft.c6.of({name:"JSON-LD",alias:["jsonld"],extensions:["jsonld"],load:()=>d.e(3677).then(d.bind(d,53677)).then(l=>nn(l.jsonld))}),Ft.c6.of({name:"Jinja2",extensions:["j2","jinja","jinja2"],load:()=>d.e(8587).then(d.bind(d,48587)).then(l=>nn(l.jinja2))}),Ft.c6.of({name:"Julia",extensions:["jl"],load:()=>d.e(6814).then(d.bind(d,66814)).then(l=>nn(l.julia))}),Ft.c6.of({name:"Kotlin",extensions:["kt"],load:()=>d.e(3225).then(d.bind(d,23225)).then(l=>nn(l.kotlin))}),Ft.c6.of({name:"LESS",extensions:["less"],load:()=>d.e(2691).then(d.bind(d,62691)).then(l=>nn(l.less))}),Ft.c6.of({name:"LiveScript",alias:["ls"],extensions:["ls"],load:()=>d.e(5734).then(d.bind(d,95734)).then(l=>nn(l.liveScript))}),Ft.c6.of({name:"Lua",extensions:["lua"],load:()=>d.e(628).then(d.bind(d,20628)).then(l=>nn(l.lua))}),Ft.c6.of({name:"mIRC",extensions:["mrc"],load:()=>d.e(5454).then(d.bind(d,65454)).then(l=>nn(l.mirc))}),Ft.c6.of({name:"Mathematica",extensions:["m","nb","wl","wls"],load:()=>d.e(3592).then(d.bind(d,3592)).then(l=>nn(l.mathematica))}),Ft.c6.of({name:"Modelica",extensions:["mo"],load:()=>d.e(4305).then(d.bind(d,94305)).then(l=>nn(l.modelica))}),Ft.c6.of({name:"MUMPS",extensions:["mps"],load:()=>d.e(2610).then(d.bind(d,12610)).then(l=>nn(l.mumps))}),Ft.c6.of({name:"Mbox",extensions:["mbox"],load:()=>d.e(5597).then(d.bind(d,25597)).then(l=>nn(l.mbox))}),Ft.c6.of({name:"Nginx",filename:/nginx.*\.conf$/i,load:()=>d.e(1425).then(d.bind(d,21425)).then(l=>nn(l.nginx))}),Ft.c6.of({name:"NSIS",extensions:["nsh","nsi"],load:()=>Promise.all([d.e(8592),d.e(3965)]).then(d.bind(d,93965)).then(l=>nn(l.nsis))}),Ft.c6.of({name:"NTriples",extensions:["nt","nq"],load:()=>d.e(540).then(d.bind(d,90540)).then(l=>nn(l.ntriples))}),Ft.c6.of({name:"Objective-C",alias:["objective-c","objc"],extensions:["m"],load:()=>d.e(3225).then(d.bind(d,23225)).then(l=>nn(l.objectiveC))}),Ft.c6.of({name:"Objective-C++",alias:["objective-c++","objc++"],extensions:["mm"],load:()=>d.e(3225).then(d.bind(d,23225)).then(l=>nn(l.objectiveCpp))}),Ft.c6.of({name:"OCaml",extensions:["ml","mli","mll","mly"],load:()=>d.e(9308).then(d.bind(d,19308)).then(l=>nn(l.oCaml))}),Ft.c6.of({name:"Octave",extensions:["m"],load:()=>d.e(9369).then(d.bind(d,49369)).then(l=>nn(l.octave))}),Ft.c6.of({name:"Oz",extensions:["oz"],load:()=>d.e(6829).then(d.bind(d,16829)).then(l=>nn(l.oz))}),Ft.c6.of({name:"Pascal",extensions:["p","pas"],load:()=>d.e(4927).then(d.bind(d,74927)).then(l=>nn(l.pascal))}),Ft.c6.of({name:"Perl",extensions:["pl","pm"],load:()=>d.e(3946).then(d.bind(d,63946)).then(l=>nn(l.perl))}),Ft.c6.of({name:"Pig",extensions:["pig"],load:()=>d.e(7590).then(d.bind(d,37590)).then(l=>nn(l.pig))}),Ft.c6.of({name:"PowerShell",extensions:["ps1","psd1","psm1"],load:()=>d.e(2528).then(d.bind(d,82528)).then(l=>nn(l.powerShell))}),Ft.c6.of({name:"Properties files",alias:["ini","properties"],extensions:["properties","ini","in"],load:()=>d.e(1372).then(d.bind(d,21372)).then(l=>nn(l.properties))}),Ft.c6.of({name:"ProtoBuf",extensions:["proto"],load:()=>d.e(7001).then(d.bind(d,17001)).then(l=>nn(l.protobuf))}),Ft.c6.of({name:"Puppet",extensions:["pp"],load:()=>d.e(6890).then(d.bind(d,86890)).then(l=>nn(l.puppet))}),Ft.c6.of({name:"Q",extensions:["q"],load:()=>d.e(3685).then(d.bind(d,33685)).then(l=>nn(l.q))}),Ft.c6.of({name:"R",alias:["rscript"],extensions:["r","R"],load:()=>d.e(4714).then(d.bind(d,34714)).then(l=>nn(l.r))}),Ft.c6.of({name:"RPM Changes",load:()=>d.e(4533).then(d.bind(d,14533)).then(l=>nn(l.rpmChanges))}),Ft.c6.of({name:"RPM Spec",extensions:["spec"],load:()=>d.e(4533).then(d.bind(d,14533)).then(l=>nn(l.rpmSpec))}),Ft.c6.of({name:"Ruby",alias:["jruby","macruby","rake","rb","rbx"],extensions:["rb"],load:()=>d.e(7566).then(d.bind(d,47566)).then(l=>nn(l.ruby))}),Ft.c6.of({name:"SAS",extensions:["sas"],load:()=>d.e(5346).then(d.bind(d,75346)).then(l=>nn(l.sas))}),Ft.c6.of({name:"Scala",extensions:["scala"],load:()=>d.e(3225).then(d.bind(d,23225)).then(l=>nn(l.scala))}),Ft.c6.of({name:"Scheme",extensions:["scm","ss"],load:()=>d.e(2289).then(d.bind(d,92289)).then(l=>nn(l.scheme))}),Ft.c6.of({name:"SCSS",extensions:["scss"],load:()=>d.e(2691).then(d.bind(d,62691)).then(l=>nn(l.sCSS))}),Ft.c6.of({name:"Shell",alias:["bash","sh","zsh"],extensions:["sh","ksh","bash"],filename:/^PKGBUILD$/,load:()=>d.e(8673).then(d.bind(d,78673)).then(l=>nn(l.shell))}),Ft.c6.of({name:"Sieve",extensions:["siv","sieve"],load:()=>d.e(3488).then(d.bind(d,53488)).then(l=>nn(l.sieve))}),Ft.c6.of({name:"Smalltalk",extensions:["st"],load:()=>d.e(7588).then(d.bind(d,17588)).then(l=>nn(l.smalltalk))}),Ft.c6.of({name:"Solr",load:()=>d.e(1213).then(d.bind(d,71213)).then(l=>nn(l.solr))}),Ft.c6.of({name:"SML",extensions:["sml","sig","fun","smackspec"],load:()=>d.e(9308).then(d.bind(d,19308)).then(l=>nn(l.sml))}),Ft.c6.of({name:"SPARQL",alias:["sparul"],extensions:["rq","sparql"],load:()=>d.e(9677).then(d.bind(d,89677)).then(l=>nn(l.sparql))}),Ft.c6.of({name:"Spreadsheet",alias:["excel","formula"],load:()=>d.e(3979).then(d.bind(d,83979)).then(l=>nn(l.spreadsheet))}),Ft.c6.of({name:"Squirrel",extensions:["nut"],load:()=>d.e(3225).then(d.bind(d,23225)).then(l=>nn(l.squirrel))}),Ft.c6.of({name:"Stylus",extensions:["styl"],load:()=>d.e(3101).then(d.bind(d,73101)).then(l=>nn(l.stylus))}),Ft.c6.of({name:"Swift",extensions:["swift"],load:()=>d.e(9574).then(d.bind(d,89574)).then(l=>nn(l.swift))}),Ft.c6.of({name:"sTeX",load:()=>d.e(4262).then(d.bind(d,54262)).then(l=>nn(l.stex))}),Ft.c6.of({name:"LaTeX",alias:["tex"],extensions:["text","ltx","tex"],load:()=>d.e(4262).then(d.bind(d,54262)).then(l=>nn(l.stex))}),Ft.c6.of({name:"SystemVerilog",extensions:["v","sv","svh"],load:()=>d.e(5429).then(d.bind(d,45429)).then(l=>nn(l.verilog))}),Ft.c6.of({name:"Tcl",extensions:["tcl"],load:()=>d.e(8006).then(d.bind(d,48006)).then(l=>nn(l.tcl))}),Ft.c6.of({name:"Textile",extensions:["textile"],load:()=>d.e(8978).then(d.bind(d,68978)).then(l=>nn(l.textile))}),Ft.c6.of({name:"TiddlyWiki",load:()=>d.e(7652).then(d.bind(d,27652)).then(l=>nn(l.tiddlyWiki))}),Ft.c6.of({name:"Tiki wiki",load:()=>d.e(1413).then(d.bind(d,31413)).then(l=>nn(l.tiki))}),Ft.c6.of({name:"TOML",extensions:["toml"],load:()=>d.e(5345).then(d.bind(d,58761)).then(l=>nn(l.toml))}),Ft.c6.of({name:"Troff",extensions:["1","2","3","4","5","6","7","8","9"],load:()=>d.e(8589).then(d.bind(d,88589)).then(l=>nn(l.troff))}),Ft.c6.of({name:"TTCN",extensions:["ttcn","ttcn3","ttcnpp"],load:()=>d.e(3987).then(d.bind(d,93987)).then(l=>nn(l.ttcn))}),Ft.c6.of({name:"TTCN_CFG",extensions:["cfg"],load:()=>d.e(284).then(d.bind(d,90284)).then(l=>nn(l.ttcnCfg))}),Ft.c6.of({name:"Turtle",extensions:["ttl"],load:()=>d.e(5150).then(d.bind(d,15150)).then(l=>nn(l.turtle))}),Ft.c6.of({name:"Web IDL",extensions:["webidl"],load:()=>d.e(6071).then(d.bind(d,6071)).then(l=>nn(l.webIDL))}),Ft.c6.of({name:"VB.NET",extensions:["vb"],load:()=>d.e(4613).then(d.bind(d,74613)).then(l=>nn(l.vb))}),Ft.c6.of({name:"VBScript",extensions:["vbs"],load:()=>d.e(7466).then(d.bind(d,47466)).then(l=>nn(l.vbScript))}),Ft.c6.of({name:"Velocity",extensions:["vtl"],load:()=>d.e(9077).then(d.bind(d,39077)).then(l=>nn(l.velocity))}),Ft.c6.of({name:"Verilog",extensions:["v"],load:()=>d.e(5429).then(d.bind(d,45429)).then(l=>nn(l.verilog))}),Ft.c6.of({name:"VHDL",extensions:["vhd","vhdl"],load:()=>d.e(7140).then(d.bind(d,47140)).then(l=>nn(l.vhdl))}),Ft.c6.of({name:"XQuery",extensions:["xy","xquery"],load:()=>d.e(4562).then(d.bind(d,64562)).then(l=>nn(l.xQuery))}),Ft.c6.of({name:"Yacas",extensions:["ys"],load:()=>d.e(4800).then(d.bind(d,14800)).then(l=>nn(l.yacas))}),Ft.c6.of({name:"YAML",alias:["yml"],extensions:["yaml","yml"],load:()=>d.e(4376).then(d.bind(d,24376)).then(l=>nn(l.yaml))}),Ft.c6.of({name:"Z80",extensions:["z80"],load:()=>d.e(1052).then(d.bind(d,91052)).then(l=>nn(l.z80))}),Ft.c6.of({name:"MscGen",extensions:["mscgen","mscin","msc"],load:()=>d.e(4544).then(d.bind(d,34544)).then(l=>nn(l.mscgen))}),Ft.c6.of({name:"X\xf9",extensions:["xu"],load:()=>d.e(4544).then(d.bind(d,34544)).then(l=>nn(l.xu))}),Ft.c6.of({name:"MsGenny",extensions:["msgenny"],load:()=>d.e(4544).then(d.bind(d,34544)).then(l=>nn(l.msgenny))})];var tm=d(984),nm=d(47026),Ka=d(79613),sh=function(l,c,s,u){return new(s||(s=Promise))(function(w,U){function fe(wt){try{et(u.next(wt))}catch(Gt){U(Gt)}}function De(wt){try{et(u.throw(wt))}catch(Gt){U(Gt)}}function et(wt){wt.done?w(wt.value):function v(w){return w instanceof s?w:new s(function(U){U(w)})}(wt.value).then(fe,De)}et((u=u.apply(l,c||[])).next())})};class Lc extends nm.D{static get properties(){return Object.assign(Object.assign({},super.properties),{options:{type:Object},rows:{type:Number},_error:{type:String,attribute:!1}})}constructor(){super(),this._id=`gv-code-${(0,Pr.Vj)()}`,this.value="",this.readonly=!1,this.autofocus=!1,this.clipboard=!1,this._clipboardIcon=tm.x,this.languageCompartment=new en.F6,this.readonlyCompartment=new en.F6,this.placeholderCompartment=new en.F6}render(){const s={content:!0,code:!this.hasInputStyle,input:this.hasInputStyle};return E.dy`
      <div class="${(0,si.$)({box:!0,"box-invisible":this.skeleton,large:this.large,medium:this.medium||!this.large&&!this.small,small:this.small,copied:this.hasClipboard&&this._copied})}">
        ${this.label?E.dy`<label for="code">${this.label}</label>`:""}
        <div id="${this._id}" class="${(0,si.$)(s)}">
          <!-- No format please -->
          ${this.renderIcon()}
        </div>
      </div>
      ${null!=this.description?E.dy`<div class="description" .innerHTML="${this.description}"></div>`:""}
    `}bindInputEvents(){(0,_r.h)(this,"ready",{currentTarget:this})}get hasInputStyle(){return 1===this.rows}_autocomplete(c){const{handler:s,match:u}=this.findBestAutocompleteHandler(c);return s.run.call(this,c,u)}findBestAutocompleteHandler(c){return{handler:this.defaultCompletionHandler,match:!0}}get defaultCompletionHandler(){return{run(c){const s=c.state.languageDataAt("autocomplete",c.pos);return s.length>0?s[0](c):{from:c.pos,options:[]}}}}_getExtensions(){return[qg,Lc.codemirrorTheme,this.languageCompartment.of((0,em.json)()),this.placeholderCompartment.of((0,dn.W$)(this.placeholder||"")),en.yy.transactionFilter.of(c=>this.hasInputStyle&&c.newDoc.lines>1?[]:c),this.readonlyCompartment.of(dn.tk.editable.of(!this.readonly&&!this.disabled)),dn.tk.updateListener.of(c=>{const s=this._editorView.state.doc.toString();this.value!==s&&c.docChanged&&(this._lockReflectValue=!0,this.value=s,(0,_r.h)(this,"input",this.value),setTimeout(()=>{this._lockReflectValue=!1}))}),(0,Br.ys)({activateOnTyping:!0,override:[this._autocomplete.bind(this)]}),...this.getExtensions()]}getExtensions(){return[]}getInputElement(){return this.shadowRoot.querySelector(`[id=${this._id}]`)}firstUpdated(){super.firstUpdated();const c=en.yy.create({doc:this.value,extensions:this._getExtensions()}),s=this.getInputElement();this._editorView=new dn.tk({root:this.shadowRoot,parent:s,state:c,dispatch:u=>{try{this._editorView.update([u])}catch{}}}),s.appendChild(this._editorView.dom)}updated(c){const s=Object.create(null,{updated:{get:()=>super.updated}});return sh(this,void 0,void 0,function*(){s.updated.call(this,c),c.has("placeholder")&&this._reflectPlaceholder(),c.has("value")&&this._reflectValue(),(c.has("readonly")||c.has("disabled"))&&this._reflectReadonlyDisabled(),c.has("options")&&this.options&&(yield this._reflectOptions())})}_reflectPlaceholder(){this._editorView.dispatch({effects:this.placeholderCompartment.reconfigure((0,dn.W$)(this.placeholder))})}_reflectValue(){if(!0===this._lockReflectValue)return;const c=this._editorView.state.update({changes:{from:0,to:this._editorView.state.doc.length,insert:this.value}});this._editorView.update([c])}_reflectReadonlyDisabled(){this._editorView.dispatch({effects:this.readonlyCompartment.reconfigure(dn.tk.editable.of(!this.readonly&&!this.disabled))})}static findLanguage(c){return sh(this,void 0,void 0,function*(){if(c){const s=c.split("/").pop();if("asciidoc"===s){const[{asciidoc:u},{StreamLanguage:v}]=yield Promise.all([d.e(946).then(d.bind(d,60946)),d.e(4041).then(d.bind(d,44041))]);return{name:"asciidoc",support:{extension:v.define(u)}}}{const u=rh.find(v=>v.name.toUpperCase()===s.toUpperCase()||v.alias.includes(s));return null==u&&console.warn(`Cannot find language ${c}, please use language supported by CodeMirror 6`,rh.map(v=>v.name)),u}}return null})}_reflectOptions(){return sh(this,void 0,void 0,function*(){const c=yield Lc.findLanguage(this.options.mode);null!=c&&(null==c.support&&(yield c.load()),this._editorView.dispatch({effects:this.languageCompartment.reconfigure(c.support.extension)}))})}static get codemirrorTheme(){return dn.tk.theme({"&.cm-editor.cm-focused":{outline:"none"},".cm-gutters":{backgroundColor:"var(--gv-input-icon--bgc, var(--gv-theme-neutral-color, #f5f5f5))",color:"var(--gv-theme-font-color-dark, #262626)",borderLeft:"5px solid",borderColor:"var(--gv-input--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9))"}})}static get styles(){return[...super.styles,Hs.F,qc.c,Ka.q,E.iv`
        :host {
          box-sizing: border-box;
          display: block;
          margin: 0 0.2rem 0.2rem 0.2rem;
        }

        .content {
          position: relative;
          border: var(--gv-input--bdw, 1px) var(--gv-input--bds, solid) var(--gv-input--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          box-sizing: border-box;
          border-radius: 4px;
        }

        .btn_copy {
        }

        .box-icon {
          bottom: -1px;
          right: -1px;
          z-index: 1;
        }

        .code .box-icon {
          border-radius: 3px;
        }

        .code .cm-content {
          min-height: var(--input-medium--h);
        }

        .large .code .cm-content {
          min-height: var(--input-large--h);
        }

        .small .code .cm-content {
          min-height: var(--input-small--h);
        }

        .input .cm-content,
        .code .cm-gutters {
          height: var(--input-medium--h);
        }

        .large .input .cm-content,
        .large .code .cm-gutters {
          height: var(--input-large--h);
        }

        .small .input .cm-content,
        .small .code .cm-gutters {
          height: var(--input-small--h);
        }

        /**  Override Codemirror theme */
        .input .cm-gutters {
          display: none;
        }

        .input .cm-scroller {
          overflow: hidden;
        }

        .input .cm-activeLine,
        :host([readonly]) .cm-activeLine {
          background-color: transparent;
        }

        .input .cm-content {
          padding: 0;
        }

        :host([invalid]) .cm-gutters {
          border-color: var(--gv-theme-color-error, #da1a1b);
        }
      `]}}window.customElements.define("gv-code",Lc);var Fc=d(75778),qr=d(89729),Ur=d(49860);function oh(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div",22)(1,"gv-stepper",23),n.NdJ("gv-stepper:change",function(v){return n.CHM(s),n.oxw().onChangeStep(v)}),n.qZA()()}if(2&l){const s=n.oxw();n.xp6(1),n.Q6J("steps",s.steps)("current",s.currentStep)("disabled",s.isKeyLess()||s.hasSubscription())}}const ah=function(){return{mode:"shell",lineNumbers:!0,lineWrapping:!0}};function bf(l,c){if(1&l&&(n.TgZ(0,"div")(1,"h3"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n._UZ(4,"gv-code",24),n.qZA()),2&l){const s=n.oxw();n.xp6(2),n.Oqu(n.lcZ(3,3,"apiSubscribe.plans.sample")),n.xp6(2),n.Q6J("options",n.DdM(5,ah))("value",s.apiSample)}}const Cf=function(l,c){return{count:l,apiName:c}};function wf(l,c){if(1&l&&(n._UZ(0,"p",25),n.ALo(1,"translate")),2&l){const s=n.oxw();n.Q6J("innerHTML",n.xi3(1,1,"apiSubscribe.apps.connectedApps",n.WLB(4,Cf,s.getConnectedAppsCount(),s.apiName)),n.oJD)}}function im(l,c){1&l&&(n.TgZ(0,"p")(1,"strong"),n._uU(2),n.ALo(3,"translate"),n.qZA()()),2&l&&(n.xp6(2),n.Oqu(n.lcZ(3,1,"apiSubscribe.apps.noAvailableApplications")))}const rm=function(){return["/applications/creation"]},sm=function(l){return{api:l}};function om(l,c){if(1&l&&(n.TgZ(0,"a",26),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l){const s=n.oxw();n.Q6J("routerLink",n.DdM(5,rm))("queryParams",n.VKq(6,sm,s.apiId)),n.xp6(1),n.Oqu(n.lcZ(2,3,"apiSubscribe.apps.createApp"))}}function Af(l,c){if(1&l&&(n._UZ(0,"gv-select",27),n.ALo(1,"translate")),2&l){const s=n.oxw();n.s9C("label",n.lcZ(1,2,"apiSubscribe.apps.chooseApp")),n.Q6J("options",s.availableApplications)}}function Dy(l,c){if(1&l&&n._UZ(0,"gv-text",28),2&l){const s=n.oxw();n.Q6J("required",s.hasRequiredComment()),n.uIk("label",s.getCommentLabel())}}function xf(l,c){if(1&l&&n._UZ(0,"app-gv-page",31),2&l){const s=n.oxw(2);n.Q6J("page",s.getCurrentGeneralConditions())}}function am(l,c){if(1&l&&(n.TgZ(0,"div")(1,"h3"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.YNc(4,xf,1,1,"app-gv-page",29),n._UZ(5,"gv-checkbox",30),n.ALo(6,"translate"),n.qZA()),2&l){const s=n.oxw();n.xp6(2),n.Oqu(n.lcZ(3,3,"common.general_conditions.title")),n.xp6(2),n.Q6J("ngIf",!s.subscribeForm.valid),n.xp6(1),n.s9C("label",n.lcZ(6,5,"common.general_conditions.accept"))}}const lm=function(l){return{apiName:l}};function My(l,c){if(1&l&&(n.TgZ(0,"div",9),n._UZ(1,"p",25),n.ALo(2,"translate"),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Q6J("innerHTML",n.xi3(2,1,"apiSubscribe.validate.notCompleted",n.VKq(4,lm,s.apiName)),n.oJD)}}const lh=function(l,c,s){return{planName:l,appName:c,apiName:s}},ch=function(l){return{hasAutoValidation:l}};function cm(l,c){if(1&l&&(n.TgZ(0,"div",9),n._UZ(1,"p",25),n.ALo(2,"translate"),n._UZ(3,"p",25),n.ALo(4,"translate"),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Q6J("innerHTML",n.xi3(2,2,"apiSubscribe.validate.askConfirmation",n.kEZ(8,lh,s.getPlanName(),s.getApplicationName(),s.apiName)),n.oJD),n.xp6(2),n.Q6J("innerHTML",n.xi3(4,5,"apiSubscribe.validate.information",n.VKq(12,ch,s.hasAutoValidation())),n.oJD)}}function Ef(l,c){if(1&l&&(n.TgZ(0,"p"),n._uU(1),n.qZA()),2&l){const s=n.oxw(2);n.xp6(1),n.Oqu(s.subscriptionError)}}function Sf(l,c){if(1&l&&(n.TgZ(0,"div",9),n._UZ(1,"gv-icon",32),n.TgZ(2,"h2"),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._UZ(5,"p",25),n.ALo(6,"translate"),n.YNc(7,Ef,2,1,"p",7),n.qZA()),2&l){const s=n.oxw();n.xp6(3),n.Oqu(n.lcZ(4,3,"apiSubscribe.errors.sorry")),n.xp6(2),n.Q6J("innerHTML",n.lcZ(6,5,"apiSubscribe.errors.information"),n.oJD),n.xp6(2),n.Q6J("ngIf",s.subscriptionError)}}function Py(l,c){if(1&l&&(n.TgZ(0,"p")(1,"span"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n._UZ(4,"gv-input",38),n.qZA()),2&l){const s=n.oxw(2);n.xp6(2),n.Oqu(n.lcZ(3,2,"apiSubscribe.success.subscriptionKey")),n.xp6(2),n.Q6J("value",s.getSubscriptionKey())}}function Ws(l,c){1&l&&(n.TgZ(0,"p")(1,"span"),n._uU(2),n.ALo(3,"translate"),n.qZA()()),2&l&&(n.xp6(2),n.Oqu(n.lcZ(3,1,"apiSubscribe.success.oauth2")))}const um=function(){return["/"]},hm=function(l){return["/catalog/api",l]};function Tf(l,c){if(1&l&&(n.TgZ(0,"div")(1,"div",33),n._UZ(2,"gv-icon",34),n.TgZ(3,"h2"),n._uU(4),n.ALo(5,"translate"),n.qZA(),n._UZ(6,"p",25),n.ALo(7,"translate"),n.YNc(8,Py,5,4,"p",7),n.YNc(9,Ws,4,3,"p",7),n.TgZ(10,"div",35)(11,"a",36),n._uU(12),n.ALo(13,"translate"),n._UZ(14,"gv-icon",37),n.qZA(),n.TgZ(15,"a",36),n._uU(16),n.ALo(17,"translate"),n._UZ(18,"gv-icon",37),n.qZA()()(),n.TgZ(19,"div")(20,"h3"),n._uU(21),n.ALo(22,"translate"),n.qZA(),n._UZ(23,"gv-code",24),n.qZA()()),2&l){const s=n.oxw();n.xp6(4),n.Oqu(n.lcZ(5,11,"apiSubscribe.success.congratulations")),n.xp6(2),n.Q6J("innerHTML",n.xi3(7,13,"apiSubscribe.success.subscriptionAccepted",n.kEZ(22,lh,s.getPlanName(),s.getApplicationName(),s.apiName)),n.oJD),n.xp6(2),n.Q6J("ngIf",s.getSubscriptionKey()),n.xp6(1),n.Q6J("ngIf",s.isOAuth2()||s.isJWT()),n.xp6(2),n.Q6J("routerLink",n.DdM(26,um)),n.xp6(1),n.Oqu(n.lcZ(13,16,"apiSubscribe.success.goToHome")),n.xp6(3),n.Q6J("routerLink",n.VKq(27,hm,s.apiId)),n.xp6(1),n.Oqu(n.lcZ(17,18,"apiSubscribe.success.discoverApi")),n.xp6(5),n.Oqu(n.lcZ(22,20,"apiSubscribe.plans.sample")),n.xp6(2),n.Q6J("options",n.DdM(29,ah))("value",s.apiSample)}}function Df(l,c){if(1&l&&(n.TgZ(0,"div",9),n._UZ(1,"gv-icon",39),n.TgZ(2,"h2"),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._UZ(5,"p",25),n.ALo(6,"translate"),n.TgZ(7,"div",35)(8,"a",36),n._uU(9),n.ALo(10,"translate"),n._UZ(11,"gv-icon",37),n.qZA(),n.TgZ(12,"a",36),n._uU(13),n.ALo(14,"translate"),n._UZ(15,"gv-icon",37),n.qZA()()()),2&l){const s=n.oxw();n.xp6(3),n.Oqu(n.lcZ(4,6,"apiSubscribe.success.congratulations")),n.xp6(2),n.Q6J("innerHTML",n.xi3(6,8,"apiSubscribe.success.subscriptionPending",n.kEZ(15,lh,s.getPlanName(),s.getApplicationName(),s.apiName)),n.oJD),n.xp6(3),n.Q6J("routerLink",n.DdM(19,um)),n.xp6(1),n.Oqu(n.lcZ(10,11,"apiSubscribe.success.goToHome")),n.xp6(3),n.Q6J("routerLink",n.VKq(20,hm,s.apiId)),n.xp6(1),n.Oqu(n.lcZ(14,13,"apiSubscribe.success.discoverApi"))}}function Mf(l,c){if(1&l&&(n.TgZ(0,"div",9),n._UZ(1,"p",25),n.ALo(2,"translate"),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Q6J("innerHTML",n.xi3(2,1,"apiSubscribe.success.subscriptionRejected",n.kEZ(4,lh,s.getPlanName(),s.getApplicationName(),s.apiName)),n.oJD)}}function dm(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",45),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw(2).onExit()}),n._uU(1),n.ALo(2,"translate"),n.qZA()}2&l&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"apiSubscribe.exit")))}function Iy(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",46),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw(2).onPrevious()}),n._uU(1),n.ALo(2,"translate"),n.qZA()}if(2&l){const s=n.oxw(2);n.Q6J("disabled",!s.canPrevious()),n.xp6(1),n.Oqu(n.lcZ(2,2,"apiSubscribe.previousStep"))}}function Pf(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",47),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw(2).onNext()}),n._uU(1),n.ALo(2,"translate"),n.qZA()}2&l&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"apiSubscribe.nextStep")))}function uh(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",48),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw(2).onValidate()}),n._uU(1),n.ALo(2,"translate"),n.qZA()}if(2&l){const s=n.oxw(2);n.Q6J("disabled",!s.subscribeForm.valid)("loading",s.showValidateLoader),n.xp6(1),n.Oqu(n.lcZ(2,3,"apiSubscribe.validate.subscription"))}}function fm(l,c){if(1&l&&(n.TgZ(0,"div",40)(1,"div"),n.YNc(2,dm,3,3,"gv-button",41),n.YNc(3,Iy,3,4,"gv-button",42),n.qZA(),n.YNc(4,Pf,3,3,"gv-button",43),n.YNc(5,uh,3,5,"gv-button",44),n.qZA()),2&l){const s=n.oxw();n.xp6(2),n.Q6J("ngIf",!s.hasSubscription()),n.xp6(1),n.Q6J("ngIf",s.hasPreviousAction()),n.xp6(1),n.Q6J("ngIf",s.hasNextAction()),n.xp6(1),n.Q6J("ngIf",s.hasValidateAction())}}function hh(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div",58)(1,"gv-button",59),n.NdJ("gv-button:click",function(){const w=n.CHM(s).$implicit;return n.oxw(3).goToExtern(w)}),n.TgZ(2,"span"),n._uU(3),n.qZA()()()}if(2&l){const s=c.$implicit;n.xp6(1),n.Q6J("href",s),n.xp6(2),n.Oqu(s)}}function pm(l,c){if(1&l&&(n.TgZ(0,"div",56)(1,"h4",52),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.YNc(4,hh,4,2,"div",57),n.qZA()),2&l){const s=n.oxw(2);n.xp6(2),n.Oqu(n.lcZ(3,2,"api.information.entrypoints")),n.xp6(2),n.Q6J("ngForOf",s.api.entrypoints)}}function gm(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-tag",61),n.NdJ("gv-tag:click",function(){const w=n.CHM(s).$implicit;return n.oxw(3).goToCategory(w)}),n._uU(1),n.qZA()}if(2&l){const s=c.$implicit;n.Q6J("clickable",!0),n.xp6(1),n.Oqu(s)}}function mm(l,c){if(1&l&&(n.TgZ(0,"div",56)(1,"h4",52),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"span"),n.YNc(5,gm,2,2,"gv-tag",60),n.qZA()()),2&l){const s=n.oxw(2);n.xp6(2),n.Oqu(n.lcZ(3,2,"api.information.categories")),n.xp6(3),n.Q6J("ngForOf",s.api.categories)}}function vm(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-tag",63),n.NdJ("gv-tag:click",function(){const w=n.CHM(s).$implicit;return n.oxw(3).goToSearch(w)}),n._uU(1),n.qZA()}if(2&l){const s=c.$implicit;n.Q6J("clickable",!0),n.xp6(1),n.Oqu(s)}}function ym(l,c){if(1&l&&(n.TgZ(0,"div",56)(1,"h4",52),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"span"),n.YNc(5,vm,2,2,"gv-tag",62),n.qZA()()),2&l){const s=n.oxw(2);n.xp6(2),n.Oqu(n.lcZ(3,2,"api.information.labels")),n.xp6(3),n.Q6J("ngForOf",s.api.labels)}}function _m(l,c){if(1&l&&(n.TgZ(0,"div",49)(1,"div",50),n._UZ(2,"gv-identity-picture",51),n.TgZ(3,"h4",52),n._uU(4),n.TgZ(5,"span"),n._uU(6),n.qZA()()(),n.TgZ(7,"div",53)(8,"div",54)(9,"h4",52),n._uU(10),n.ALo(11,"translate"),n.qZA(),n._uU(12),n.qZA(),n.YNc(13,pm,5,4,"div",55),n.YNc(14,mm,6,4,"div",55),n.YNc(15,ym,6,4,"div",55),n.qZA()()),2&l){const s=n.oxw();n.xp6(2),n.Q6J("display_name",s.displayName)("picture",s.picture),n.xp6(2),n.hij(" ",s.api.name,""),n.xp6(2),n.Oqu(s.api.version),n.xp6(4),n.Oqu(n.lcZ(11,9,"api.information.about")),n.xp6(2),n.hij(" ",s.api.description," "),n.xp6(1),n.Q6J("ngIf",s.api.entrypoints&&s.api.entrypoints.length>0),n.xp6(1),n.Q6J("ngIf",s.api.categories&&s.api.categories.length>0),n.xp6(1),n.Q6J("ngIf",s.api.labels&&s.api.labels.length>0)}}const Nc=function(l,c,s,u){return{"step-content":!0,one:l,two:c,three:s,four:u}},Wa=function(l,c){return{planName:l,count:c}},Za=Cn.w0.StatusEnum,Bl=Cn.fU.SecurityEnum;let bm=(()=>{class l{constructor(s,u,v,w,U,fe,De,et){this.apiService=s,this.router=u,this.route=v,this.translateService=w,this.applicationService=U,this.subscriptionService=fe,this.formBuilder=De,this.configurationService=et,this._allApplicationSubscriptionsWithMetadata=[]}ngOnInit(){var s=this;return(0,ur.Z)(function*(){s.currentStep=1,s._currentPlan=null,s.skeleton=!0,s._applications=[],s._canSubscribe=!0,s._generalConditions=new Map,s._currentGeneralConditions=null,s.connectedApps=[],s.subscribeForm=s.formBuilder.group({application:new Ht.NI(null,[Ht.kI.required]),apiKeyMode:new Ht.NI(null),plan:new Ht.NI(null,[Ht.kI.required]),request:new Ht.NI(""),general_conditions_accepted:new Ht.NI(null),general_conditions_content_revision:new Ht.NI(null)}),s.translateService.get([(0,yn.J)("apiSubscribe.apps.comment"),(0,yn.J)("apiSubscribe.plan"),(0,yn.J)("apiSubscribe.apps.missingClientId")]).toPromise().then(v=>{const w=Object.values(v);s._commentLabel=w[0],s._planLabel=w[1],s._missingClientIdLabel=w[2]}),s.apiId=s.route.snapshot.params.apiId,s.api=s.route.snapshot.data.api,s.apiSample=(0,Ur.B)(s.api.entrypoints[0]),s.apiName=s.api.name,s.canConfigureSharedApiKey()&&s.translateService.get([(0,yn.J)("apiKeyMode.exclusive.title"),(0,yn.J)("apiKeyMode.exclusive.description"),(0,yn.J)("apiKeyMode.shared.title"),(0,yn.J)("apiKeyMode.shared.description")]).toPromise().then(v=>{const w=Object.values(v);s.apiKeyModeOptions=[{id:Cn.eg.EXCLUSIVE,title:w[0],description:w[1]},{id:Cn.eg.SHARED,title:w[2],description:w[3]}]}),Promise.all([s.applicationService.getApplications({size:-1,forSubscription:!0}).toPromise(),s.apiService.getApiPlansByApiId({apiId:s.apiId,size:-1}).toPromise(),s.getSubscriptions()]).then(([v,w])=>{s.plans=w.data,s._applications=v.data,s.subscribeForm.valueChanges.pipe((0,Fc.x)((fe,De)=>JSON.stringify(fe)===JSON.stringify(De))).subscribe(()=>s.updateSteps()),s.subscribeForm.valueChanges.pipe((0,Fc.x)((fe,De)=>fe.application===De.application)).subscribe(()=>{s.canConfigureSharedApiKey()?s.updateSelectedAppSubscriptions().then(()=>{s.updateSteps(),s.canDisplayApiKeyModeStep()?s.subscribeForm.get("apiKeyMode").setValidators(Ht.kI.required):s.subscribeForm.get("apiKeyMode").clearValidators(),s.subscribeForm.get("apiKeyMode").setValue(null),s.subscribeForm.get("apiKeyMode").updateValueAndValidity()}):s.updateSteps()}),s.subscribeForm.valueChanges.pipe((0,Fc.x)((fe,De)=>fe.plan===De.plan)).subscribe(()=>{s.subscribeForm.controls.application.setValue(null),s.updateApplications(),s.planHasGeneralConditions()?s.subscribeForm.get("general_conditions_accepted").setValidators(Ht.kI.requiredTrue):s.subscribeForm.get("general_conditions_accepted").clearValidators(),s.subscribeForm.get("general_conditions_accepted").setValue(!1),s.subscribeForm.get("general_conditions_content_revision").setValue(null)}),s.subscribeForm.valueChanges.pipe((0,Fc.x)((fe,De)=>fe.general_conditions_accepted===De.general_conditions_accepted)).subscribe(()=>{!0===s.subscribeForm.get("general_conditions_accepted").value?s.subscribeForm.get("general_conditions_content_revision").setValue(s._currentGeneralConditions.contentRevisionId):s.subscribeForm.get("general_conditions_content_revision").setValue(null)});const U=s.hasPlans()?s.plans[0].id:null;s.subscribeForm.controls.plan.setValue(U),s.skeleton=!1}).catch(()=>s.connectedApps=[]);const u=[(0,yn.J)("apiSubscribe.choosePlan.title"),(0,yn.J)("apiSubscribe.chooseApp.title"),(0,yn.J)("apiSubscribe.validate.title")];s.canConfigureSharedApiKey()&&u.splice(2,0,(0,yn.J)("apiSubscribe.chooseKeyMode.title")),s._allSteps=yield Promise.all(u.map(v=>s.translateService.get(v).toPromise().then(w=>({title:w})))),s.steps=s._allSteps})()}updateSteps(){const s=null==this.subscribeForm.get("application").errors&&null==this.subscribeForm.get("request").errors,u=null==this.subscribeForm.get("apiKeyMode").errors,v=[{description:this.getPlanName()},{description:this.getApplicationName(),valid:s},{description:this.getCreatedAt(),valid:null!=this._subscription}];this.canConfigureSharedApiKey()&&v.splice(2,0,{description:this.getApplicationKeyMode(),valid:u}),this.steps=v.map(({description:w,valid:U},fe)=>{const De=this._allSteps[fe];return De.description=w,De.valid=!!w&&("boolean"!=typeof U||U),De}).slice(0,this.isKeyLess()?1:this._allSteps.length),this.canConfigureSharedApiKey()&&!this.canDisplayApiKeyModeStep()&&this.steps.splice(2,1)}onChangeStep({detail:{current:s}}){this.isKeyLess()||(this.currentStep=this.canDisplayApiKeyModeStep()||3!==s?s:4)}getPlanName(){const s=this.getCurrentPlan();return s?s.name:""}getCurrentPlan(){const s=this.subscribeForm.value.plan;return this.hasPlans()?((null==this._currentPlan||this._currentPlan.id!==s)&&(this._currentPlan=this.findPlanById(s),this.planHasGeneralConditions()?null==this._generalConditions.get(this._currentPlan.general_conditions)?this.apiService.getPageByApiIdAndPageId({apiId:this.apiId,pageId:this._currentPlan.general_conditions,include:["content"]}).toPromise().then(u=>{this._generalConditions.set(u.id,u),this._currentGeneralConditions=u}):this._currentGeneralConditions=this._generalConditions.get(this._currentPlan.general_conditions):this._currentGeneralConditions=null),this._currentPlan):null}getPlanValidation(){const s=this.getCurrentPlan();return s?s.validation.toUpperCase():null}hasAutoValidation(){return this.getPlanValidation()===Cn.fU.ValidationEnum.AUTO}getSelectedApplication(){const s=this.subscribeForm.value.application;if(s)return this._applications.find(u=>u.id===s)}getApplicationName(){const s=this.getSelectedApplication();return s?s.name:""}getApplicationKeyMode(){const s=this.subscribeForm.value.apiKeyMode;if(s){const u=this.apiKeyModeOptions.find(v=>v.id===s);return u?u.title:""}return""}onNext(){this.canNext()&&(this.currentStep+=1)}canNext(){return this._allSteps&&this.currentStep<this._allSteps.length}canPrevious(){return this.currentStep>1}onPrevious(){this.hasSubscriptionError=!1,this.currentStep-=1}hasPlans(){return this.plans&&this.plans.length>0}getCurrentGeneralConditions(){return this._currentGeneralConditions}planHasGeneralConditions(){return this._currentPlan&&this._currentPlan.general_conditions&&""!==this._currentPlan.general_conditions}hasStepper(){return this.hasPlans()&&this.plans.filter(s=>s.security.toUpperCase()!==Cn.fU.SecurityEnum.KEYLESS).length>0}isApiKey(){const s=this.getCurrentPlan();return!(!s||s.security.toUpperCase()!==Cn.fU.SecurityEnum.APIKEY)}isKeyLess(){const s=this.getCurrentPlan();return!(!s||s.security.toUpperCase()!==Cn.fU.SecurityEnum.KEYLESS)}isOAuth2(){const s=this.getCurrentPlan();return!(!s||s.security.toUpperCase()!==Cn.fU.SecurityEnum.OAUTH2)}isJWT(){const s=this.getCurrentPlan();return!(!s||s.security.toUpperCase()!==Cn.fU.SecurityEnum.JWT)}getCommentLabel(){const s=this.getCurrentPlan();let u=this._commentLabel;return s&&s.comment_question&&(u=s.comment_question),u}hasRequiredComment(){const s=this.getCurrentPlan();return s&&!0===s.comment_required}hasConnectedApps(){return this.connectedApps&&this.connectedApps.length>0}getConnectedAppsCount(){return this.connectedApps?this.connectedApps.length:0}onValidate(){var s=this;return(0,ur.Z)(function*(){if(s.subscribeForm.valid)try{s.showValidateLoader=!0;const u=s.subscribeForm.value.apiKeyMode;if(u){const w=s.getSelectedApplication();if(w.api_key_mode===Cn.eg.UNSPECIFIED){const U=yield s.applicationService.getApplicationByApplicationId({applicationId:w.id}).toPromise();U.api_key_mode=u,yield s.applicationService.updateApplicationByApplicationId({application:U,applicationId:U.id}).toPromise()}}let v=yield s.subscriptionService.createSubscription({subscriptionInput:{application:s.subscribeForm.value.application,plan:s.subscribeForm.value.plan,request:s.subscribeForm.value.request,general_conditions_accepted:s.subscribeForm.value.general_conditions_accepted,general_conditions_content_revision:s.subscribeForm.value.general_conditions_content_revision}}).toPromise();if(s.hasAutoValidation()){v=yield s.subscriptionService.getSubscriptionById({subscriptionId:v.id,include:["keys"]}).toPromise();const w=s.getCurrentPlan();if(w.security.toUpperCase()===Cn.fU.SecurityEnum.APIKEY){const U=s.configurationService.get("portal.apikeyHeader");s.apiSample=(0,Ur.B)(s.api.entrypoints[0],{name:U,value:v.keys[0].key})}else s.apiSample=w.security.toUpperCase()===Cn.fU.SecurityEnum.OAUTH2||w.security.toUpperCase()===Cn.fU.SecurityEnum.JWT?(0,Ur.B)(s.api.entrypoints[0],{name:"Authorization",value:"Bearer xxxx-xxxx-xxxx-xxxx"}):null}else s.apiSample=null;s._subscription=v}catch(u){if(u.error&&u.error.errors){const v=u.error.errors[0];if("errors.plan.general_conditions_revision"===v.code)return s.ngOnInit();{const w=yield s.translateService.get(v.code).toPromise();s.subscriptionError=w}}s.hasSubscriptionError=!0}finally{s.updateApplications(),s.updateSteps(),s.showValidateLoader=!1}})()}onExit(){this.router.navigate(["../"],{relativeTo:this.route})}findPlanById(s){return this.plans.find(u=>u.id===s)}hasSubscription(){return null!=this._subscription&&this.subscribeForm.valid}hasSubscriptionAccepted(){return this.hasSubscription()&&this._subscription.status.toUpperCase()===Za.ACCEPTED}hasSubscriptionPending(){return this.hasSubscription()&&this._subscription.status.toUpperCase()===Za.PENDING}hasSubscriptionRejected(){return this.hasSubscription()&&this._subscription.status.toUpperCase()===Za.REJECTED}hasPreviousAction(){return!this.isKeyLess()&&!this.hasSubscription()}hasNextAction(){return this.canNext()&&!this.isKeyLess()&&!this.hasSubscription()&&!this.hasSubscriptionError}hasValidateAction(){return!(!0!==this._canSubscribe||this.canNext()||this.isKeyLess()||this.hasSubscription()||this.hasSubscriptionError)}displayGeneralConditions(){if(this.planHasGeneralConditions()){if(this.hasSubscription()||this.hasSubscriptionError)return!1;if(this.subscribeForm.valid)return!0;const s=Object.values(this.subscribeForm.controls).filter(u=>u.invalid);if(1===s.length&&s[0]===this.subscribeForm.get("general_conditions_accepted"))return!0}return!1}getSubscriptionKey(){return this._subscription&&this._subscription.keys&&this._subscription.keys[0]?this._subscription.keys[0].key:null}updateApplications(){if(this._allApiSubscriptions){const s=[];this._subscription&&(this._allApiSubscriptions=[this._subscription].concat(this._allApiSubscriptions));const u=this.getCurrentPlan();if(u){let w,v=!1;this.availableApplications=this._applications.map(U=>{v=!1,w=void 0;const fe=`${U.name} (${U.owner.display_name})`,De=this._allApiSubscriptions.filter(et=>et.application===U.id);if(De.length>0){const et=De.filter(wt=>wt.plan===u.id);if(et.length>0&&(s.push({item:U,subscriptions:et,type:Vs.m.APPLICATION}),!this.canSubscribe(et,u)))return null}return v||(v=!this.isSecure(U,u),v&&(w=this._missingClientIdLabel)),{label:fe,value:U.id,disabled:v,title:w}}).filter(U=>null!==U),this.connectedApps=s}}}on(){this.router.navigate(["/catalog/api",this.apiId,"contact"])}getCreatedAt(){return this._subscription?new Date(this._subscription.created_at).toLocaleString(this.translateService.currentLang):""}canSubscribe(s,u){return!(s&&s.length>0)||null==s.find(v=>v.plan===u.id)}isSecure(s,u){return!u||u.security.toUpperCase()!==Cn.fU.SecurityEnum.OAUTH2&&u.security.toUpperCase()!==Cn.fU.SecurityEnum.JWT||s.hasClientId}hasAvailableApplications(){return this.availableApplications&&this.availableApplications.length>0}getSubscriptions(){return this.subscriptionService.getSubscriptions({apiId:this.apiId,size:-1,statuses:[Za.ACCEPTED,Za.PENDING,Za.PAUSED]}).toPromise().then(s=>{this._allApiSubscriptions=s.data}).catch(s=>{403===s.status&&(this._canSubscribe=!1)})}canCreateApp(){return this.configurationService.hasFeature(Li.l.applicationCreation)}canConfigureSharedApiKey(){return this.configurationService.hasFeature(Li.l.sharedApiKey)}canDisplayApiKeyModeStep(){return this.canConfigureSharedApiKey()&&this.isApiKey()&&this.getSelectedApplication()?.api_key_mode===Cn.eg.UNSPECIFIED&&this.hasAtLeastOneApiKeySubscription()}updateSelectedAppSubscriptions(){var s=this;return(0,ur.Z)(function*(){const u=s.getSelectedApplication();if(u&&(s._selectedApplicationSubscriptionsWithMetadata=s._allApplicationSubscriptionsWithMetadata?.find(v=>v.applicationId===u.id)?.subscriptionsResponse,!s._selectedApplicationSubscriptionsWithMetadata)){const v=yield s.subscriptionService.getSubscriptions({applicationId:u.id,size:-1}).toPromise();s._allApplicationSubscriptionsWithMetadata.push({applicationId:u.id,subscriptionsResponse:v}),s._selectedApplicationSubscriptionsWithMetadata=v}})()}hasAtLeastOneApiKeySubscription(){if(this._selectedApplicationSubscriptionsWithMetadata){const u=this._selectedApplicationSubscriptionsWithMetadata.metadata;return this._selectedApplicationSubscriptionsWithMetadata.data.filter(w=>w.api!==this.apiId&&u[w.plan]?.securityType===Bl.APIKEY).length>=1}return!1}get displayName(){return(0,qr.Qu)(this.api)}get picture(){return(0,qr.an)(this.api)}goToCategory(s){this.router.navigate(["/catalog/categories",s])}goToSearch(s){this.router.navigate(["catalog/search"],{queryParams:{q:s}})}goToExtern(s){window.open(s,"_blank")}onGvListClick(s){this.router.navigate([`/applications/${s.item.id}`])}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.sM),n.Y36(En.F0),n.Y36(En.gz),n.Y36(ui.sK),n.Y36(Cn.IX),n.Y36(Cn.FF),n.Y36(Ht.qu),n.Y36(cr.e))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-api-subscribe"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-plans:redirect",function(){return u.on()})("gv-list:click",function(w){return u.onGvListClick(w.detail)})},decls:45,vars:48,consts:[[1,"page__content"],[1,"api-subscribe__content"],["class","api-subscribe__stepper",4,"ngIf"],[3,"ngClass"],[3,"formGroup"],[1,"step","step-1"],["formControlName","plan","name","plan","ngDefaultControl","",3,"plans"],[4,"ngIf"],[1,"step","step-2"],[1,"message"],[3,"innerHTML",4,"ngIf"],[3,"routerLink","queryParams",4,"ngIf"],["required","","formControlName","application","name","application","ngDefaultControl","",3,"label","options",4,"ngIf"],["formControlName","request","name","request","ngDefaultControl","",3,"required",4,"ngIf"],[1,"step","step-3"],["formControlName","apiKeyMode","name","apiKeyMode","ngDefaultControl","",3,"options"],[1,"step","step-4"],["class","message",4,"ngIf"],["class","actions",4,"ngIf"],[1,"aside"],["class","page__box",4,"ngIf"],["clickable","",3,"items","title"],[1,"api-subscribe__stepper"],[3,"steps","current","disabled","gv-stepper:change"],["readonly","","clipboard","",3,"options","value"],[3,"innerHTML"],[3,"routerLink","queryParams"],["required","","formControlName","application","name","application","ngDefaultControl","",3,"label","options"],["formControlName","request","name","request","ngDefaultControl","",3,"required"],["class","general_conditions",3,"page",4,"ngIf"],["formControlName","general_conditions_accepted","name","general_conditions_accepted","ngDefaultControl","",3,"label"],[1,"general_conditions",3,"page"],["shape","appliances:highvoltage"],[1,"message","subscription-accepted"],["shape","general:thunder",1,"success-icon"],[1,"success-links"],[3,"routerLink"],["shape","navigation:angle-right"],["clipboard","","small","",3,"value"],["shape","home:timer",1,"success-icon"],[1,"actions"],["outlined","","icon","code:stop",3,"gv-button:click",4,"ngIf"],["primary","","outlined","","icon","navigation:angle-left",3,"disabled","gv-button:click",4,"ngIf"],["primary","","icon-right","navigation:angle-right",3,"gv-button:click",4,"ngIf"],["primary","","icon","code:check",3,"disabled","loading","gv-button:click",4,"ngIf"],["outlined","","icon","code:stop",3,"gv-button:click"],["primary","","outlined","","icon","navigation:angle-left",3,"disabled","gv-button:click"],["primary","","icon-right","navigation:angle-right",3,"gv-button:click"],["primary","","icon","code:check",3,"disabled","loading","gv-button:click"],[1,"page__box"],[1,"page__box-title"],[3,"display_name","picture"],[1,"title"],[1,"page__box-content"],[1,"info","info__description"],["class","info",4,"ngIf"],[1,"info"],["class","info__resources",4,"ngFor","ngForOf"],[1,"info__resources"],["link","",3,"href","gv-button:click"],[3,"clickable","gv-tag:click",4,"ngFor","ngForOf"],[3,"clickable","gv-tag:click"],["major","",3,"clickable","gv-tag:click",4,"ngFor","ngForOf"],["major","",3,"clickable","gv-tag:click"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,oh,2,3,"div",2),n.TgZ(3,"div",3)(4,"form",4)(5,"div",5)(6,"h2"),n._uU(7),n.ALo(8,"translate"),n.qZA(),n.TgZ(9,"p"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n._UZ(12,"gv-plans",6),n.YNc(13,bf,5,6,"div",7),n.qZA(),n.TgZ(14,"div",8)(15,"div",9)(16,"p"),n._uU(17),n.ALo(18,"translate"),n.qZA(),n.YNc(19,wf,2,7,"p",10),n.YNc(20,im,4,3,"p",7),n.YNc(21,om,3,8,"a",11),n.qZA(),n.YNc(22,Af,2,4,"gv-select",12),n.YNc(23,Dy,1,2,"gv-text",13),n.qZA(),n.TgZ(24,"div",14)(25,"h2"),n._uU(26),n.ALo(27,"translate"),n.qZA(),n.TgZ(28,"p"),n._uU(29),n.ALo(30,"translate"),n.qZA(),n._UZ(31,"gv-option",15),n.qZA(),n.TgZ(32,"div",16),n.YNc(33,am,7,7,"div",7),n.YNc(34,My,3,6,"div",17),n.YNc(35,cm,5,14,"div",17),n.YNc(36,Sf,8,7,"div",17),n.YNc(37,Tf,24,30,"div",7),n.YNc(38,Df,16,22,"div",17),n.YNc(39,Mf,3,8,"div",17),n.qZA()()(),n.YNc(40,fm,6,4,"div",18),n.qZA(),n.TgZ(41,"aside",19),n.YNc(42,_m,16,11,"div",20),n._UZ(43,"gv-list",21),n.ALo(44,"translate"),n.qZA()()),2&s&&(n.xp6(2),n.Q6J("ngIf",u.hasStepper()),n.xp6(1),n.Q6J("ngClass",n.l5B(40,Nc,1===u.currentStep,2===u.currentStep,u.canDisplayApiKeyModeStep()&&3===u.currentStep,u.canDisplayApiKeyModeStep()&&4===u.currentStep||!u.canDisplayApiKeyModeStep()&&3===u.currentStep)),n.xp6(1),n.Q6J("formGroup",u.subscribeForm),n.xp6(3),n.Oqu(n.lcZ(8,27,"apiSubscribe.plans.title")),n.xp6(3),n.Oqu(n.lcZ(11,29,"apiSubscribe.plans.description")),n.xp6(2),n.Q6J("plans",u.plans),n.xp6(1),n.Q6J("ngIf",u.isKeyLess()&&u.apiSample),n.xp6(4),n.Oqu(n.lcZ(18,31,"apiSubscribe.apps.description")),n.xp6(2),n.Q6J("ngIf",u.hasConnectedApps()),n.xp6(1),n.Q6J("ngIf",!u.hasAvailableApplications()),n.xp6(1),n.Q6J("ngIf",!u.hasAvailableApplications()&&u.canCreateApp()),n.xp6(1),n.Q6J("ngIf",u.hasAvailableApplications()),n.xp6(1),n.Q6J("ngIf",u.hasAvailableApplications()),n.xp6(3),n.Oqu(n.lcZ(27,33,"apiKeyMode.title")),n.xp6(3),n.Oqu(n.lcZ(30,35,"apiKeyMode.description")),n.xp6(2),n.Q6J("options",u.apiKeyModeOptions),n.xp6(2),n.Q6J("ngIf",u.displayGeneralConditions()),n.xp6(1),n.Q6J("ngIf",!u.subscribeForm.valid&&!u.displayGeneralConditions()),n.xp6(1),n.Q6J("ngIf",!u.hasSubscription()&&u.subscribeForm.valid&&!u.hasSubscriptionError),n.xp6(1),n.Q6J("ngIf",u.hasSubscriptionError),n.xp6(1),n.Q6J("ngIf",u.hasSubscriptionAccepted()),n.xp6(1),n.Q6J("ngIf",u.hasSubscriptionPending()),n.xp6(1),n.Q6J("ngIf",u.hasSubscriptionRejected()),n.xp6(1),n.Q6J("ngIf",u.hasStepper()),n.xp6(2),n.Q6J("ngIf",u.api),n.xp6(1),n.s9C("title",n.xi3(44,37,"apiSubscribe.connectedApps",n.WLB(45,Wa,u.getPlanName(),u.connectedApps?u.connectedApps.length:0))),n.Q6J("items",u.connectedApps))},directives:[tn.O5,tn.mk,Ht._Y,Ht.JL,Ht.sg,Ht.JJ,Ht.u,Ht.Fj,En.yS,Nn.T,Ht.Q7,oo.G,Zi.I,tn.sg],pipes:[ui.X$],styles:[".api-subscribe__header[_ngcontent-%COMP%]{background-color:var(--gv-theme-color-dark);color:var(--gv-theme-font-color-light);padding:2rem 4rem 1rem;padding:2rem var(--gv-theme-layout--pr, 4rem) 1rem var(--gv-theme-layout--pl, 4rem);letter-spacing:.05em}.page__content[_ngcontent-%COMP%]{display:flex}.api-subscribe__content[_ngcontent-%COMP%]{background-color:var(--gv-theme-neutral-color-lightest);margin-right:1rem;flex:1;display:flex;flex-direction:column;height:100%;width:100%}.step-content[_ngcontent-%COMP%]{padding:2rem 3rem}.step[_ngcontent-%COMP%]{display:none;opacity:0}.one[_ngcontent-%COMP%]   .step-1[_ngcontent-%COMP%], .two[_ngcontent-%COMP%]   .step-2[_ngcontent-%COMP%], .three[_ngcontent-%COMP%]   .step-3[_ngcontent-%COMP%], .four[_ngcontent-%COMP%]   .step-4[_ngcontent-%COMP%]{display:block;opacity:1;-webkit-animation:fade-in .2s ease-in;animation:fade-in .2s ease-in}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;--gv-button--fz: var(--gv-theme-font-size-l);border-top:1px solid var(--gv-theme-neutral-color-dark);padding:2rem 3rem}.message[_ngcontent-%COMP%]{padding:2rem;text-align:center;border-radius:2px;background-color:var(--gv-theme-neutral-color-lighter);font-size:var(--gv-theme-font-size-m);line-height:22px;margin-bottom:16px}.general_conditions[_ngcontent-%COMP%]{margin:1rem .2rem;box-sizing:border-box;border-left:6px double var(--gv-theme-neutral-color-dark);font-size:var(--gv-theme-font-size-m);overflow-y:auto;overflow-x:hidden;max-height:350px;overflow-wrap:anywhere;word-break:break-word}.subscription-accepted[_ngcontent-%COMP%]{background-color:var(--gv-theme-color);color:var(--gv-theme-font-color-light);margin-bottom:4rem;--gv-icon--c: var(--gv-theme-font-color-light)}.subscription-accepted[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%]{margin-left:10px;width:280px;--gv-icon--c: var(--gv-theme-font--c)}.step-4[_ngcontent-%COMP%]   .subscription-accepted[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--gv-theme-font-color-light)}.step-4[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]{--gv-icon--s: 128px}.step-4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--gv-theme-font--c);text-decoration:none;--gv-icon--s: 24px}.success-links[_ngcontent-%COMP%]{display:flex;margin-top:5rem;font-weight:700}.success-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{flex:1}.step-2[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%], .step-2[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%]{width:100%}.step-3[_ngcontent-%COMP%]   gv-option[_ngcontent-%COMP%]{display:block;margin:0 auto;width:50%}.api-subscribe__stepper[_ngcontent-%COMP%]{display:flex;border-bottom:1px solid var(--gv-theme-neutral-color-dark);padding:2rem 1rem 1rem}.api-subscribe__stepper[_ngcontent-%COMP%]   gv-stepper[_ngcontent-%COMP%]{flex:1;margin-top:2rem}aside[_ngcontent-%COMP%]{display:flex;flex-direction:column}.info[_ngcontent-%COMP%]{margin:12px 0}.info__description[_ngcontent-%COMP%]{background-color:#fafafa;background-color:var(--gv-theme-neutral-color-lighter, #fafafa);border-radius:2px;margin-top:0;padding:16px}.info__resources[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:normal;text-align:left}.info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:10px}.link[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]:visited{cursor:pointer;opacity:1;transition:opacity .15s ease-in;text-decoration:none}.link[_ngcontent-%COMP%]:hover{opacity:.7;transition:opacity .15s ease-in}"]}),l})();var us=d(78968),Ul=d(81918);class vo extends((0,Hr.P)((0,Ul.J)(E.oi))){static get styles(){return[...super.styles,E.iv`
        :host {
          box-sizing: border-box;
          cursor: pointer;
          --hover-bgc: var(--gv-row-hover--bgc, var(--gv-theme-neutral-color-lighter, #fafafa));
          --trf-ty: var(--gv-row-hover--trf-ty, 0px);
          display: block;
        }

        :host([_invisible]) {
          display: none;
        }

        .row {
          padding: 12px;
        }

        .row:hover {
          -webkit-transform: -webkit-translateY(var(--trf-ty));
          transform: translateY(var(--trf-ty));
          background-color: var(--hover-bgc);
        }

        .row:not(.error) {
          display: grid;
          grid-template-columns: calc(var(--gv-row-image--w, 35px) + 5px) auto fit-content(20%);
          grid-gap: 10px;
          align-items: center;
        }

        :host([w-lt-450]) .meta {
          display: none;
        }

        .row .name {
          margin-right: 15px;
        }

        .row .name,
        .row .meta__owner {
          margin-bottom: 5px;
        }

        .row .version {
          color: var(--gv-theme-neutral-color-dark, #d9d9d9);
        }

        .row .description {
          --lh: 1.4rem;
          --max-lines: 2;
          max-height: calc(var(--lh) * var(--max-lines));
          line-height: var(--lh);
          overflow: hidden;
          text-overflow: ellipsis;
          text-after-overflow: '...';
        }

        .row .meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .row .meta__owner {
          --gv-icon--c: var(--gv-theme-neutral-color-dark, #d9d9d9);
          --gv-icon--s: 16px;
          color: var(--gv-theme-neutral-color-dark, #d9d9d9);
          display: flex;
        }

        .row .meta__tags {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .skeleton {
          transition: 0.5s;
          min-height: 30px;
          align-self: start;
        }

        .error {
          cursor: default;
          text-align: center;
        }

        gv-identity-picture {
          height: var(--gv-row-image--h, 35px);
          width: var(--gv-row-image--w, 35px);
          border-radius: 20px;
          --gv-image--of: contain;
          align-self: baseline;
        }

        h3 {
          margin: 0;
        }

        .row > .group {
          display: flex;
          flex-direction: column;
          margin: 0 5px;
          width: 100%;
          flex: 1;
        }

        .title {
          display: flex;
          flex-direction: row;
        }
      `,sr.p,Hs.F]}static get properties(){return Object.assign(Object.assign({},super.properties),{small:{type:Boolean}})}constructor(){super(),this.breakpoints={width:[450]},this.small=!1}render(){const c={row:!0,link:!0,error:!this._skeleton&&(this._error||this._empty)},s=(0,qr.ei)(this._item);return E.dy`
      <div class=${(0,si.$)(c)}>
        ${this._skeleton||!this._error&&!this._empty?E.dy`
              <div class="${(0,si.$)({skeleton:this._skeleton})}">${this._renderImage()}</div>
              <div class="${(0,si.$)({group:!0,skeleton:this._skeleton})}">
                <div class="title">
                  <h3 class="name">${(0,qr.YQ)(this._item)}</h3>
                  <div class="version">${(0,qr.bo)(this._item)}</div>
                </div>
                <div class="description">${(0,qr.Eb)(this._item)}</div>
              </div>
              <div class="${(0,si.$)({meta:!0,skeleton:this._skeleton})}">
                <div class="meta__owner">
                  ${null!=s&&s.trim().length>0?E.dy`<gv-icon shape="general:user" size="8px"></gv-icon>${s}`:""}
                </div>
                ${!0!==this.small?E.dy`<div class="meta__tags">${this._renderLabels()}</div>`:""}
              </div>
            `:E.dy`<div class="message">${(0,Yi.ag)(this._error?"gv-row.error":"gv-row.empty")}</div>`}
      </div>
    `}}function $l(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-row",15),n.NdJ("click",function(){const w=n.CHM(s).$implicit;return n.oxw(2).goToApi(w)}),n.qZA()}2&l&&n.Q6J("item",c.$implicit)}function Or(l,c){if(1&l&&(n.TgZ(0,"div",13),n.YNc(1,$l,1,1,"gv-row",14),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Q6J("ngForOf",s.apiResults)}}window.customElements.define("gv-row",vo);const ba=function(l){return{count:l}};let Hc=(()=>{class l{constructor(s,u,v,w,U){this.formBuilder=s,this.apiService=u,this.activatedRoute=v,this.router=w,this.config=U,this.totalElements=0,this.searchForm=this.formBuilder.group({query:""}),this.pageSizes=U.get("pagination.size.values",[5,10,25,50,100])}ngOnInit(){this.activatedRoute.queryParamMap.subscribe(s=>{if(s.has($n.O.QUERY)){const u=s.get($n.O.QUERY);this.searchForm.value.query=u}this.pageSize=s.has($n.O.SIZE)?parseInt(s.get($n.O.SIZE),10):this.config.get("pagination.size.default",10),this.searchForm.reset({query:this.searchForm.value.query}),this.currentPage=s.get($n.O.PAGE)||1,""!==this.searchForm.value.query.trim()&&this._loadData()})}_loadData(){const s=this.pageSize,u=new $n.M(this.searchForm.value.query||"*",s,this.currentPage),{list:v,deferredList:w}=(0,Ur.o)(s);this.apiResults=v,this.apiService.searchApis(u).toPromise().then(U=>{const fe=U.metadata.pagination;fe?(this.paginationData={size:this.pageSize,sizes:this.pageSizes,...this.paginationData,...fe},this.totalElements=this.paginationData.total):(this.paginationData=null,this.totalElements=0),U.data.forEach(De=>{w.shift().resolve(De)})}).catch(U=>(U&&U.interceptorFuture&&U.interceptorFuture.cancel(),this.totalElements=0,[])).finally(()=>{w.forEach(U=>U.resolve(void 0))})}_onPaginate({page:s,size:u}){const v=new $n.M(this.activatedRoute.snapshot.queryParamMap.get($n.O.QUERY),u,s);this.router.navigate([],{queryParams:v})}onSubmitSearch(){if(this.searchForm.valid){const s=this.searchForm.value.query||this.activatedRoute.snapshot.queryParamMap.get($n.O.QUERY),u=new $n.M(s,this.searchForm.value.size);this.router.navigate([],{queryParams:u,queryParamsHandling:"merge"})}}goToApi(s){s.then(u=>{this.router.navigate(["/catalog/api/"+u.id],{queryParamsHandling:"merge"})})}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Ht.qu),n.Y36(Cn.sM),n.Y36(En.gz),n.Y36(En.F0),n.Y36(cr.e))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-search"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-pagination:paginate",function(w){return u._onPaginate(w.detail)})},decls:15,vars:13,consts:[[1,"layout"],[1,"layout__content"],[1,"page__content"],[1,"catalog-search"],[1,"catalog-search__header"],[1,"catalog-search__form",3,"formGroup","ngSubmit"],[1,"catalog-search__bar"],["type","search","autofocus","","icon-left","general:search","formControlName","query","name","query","ngDefaultControl",""],["has-select","","widget","","medium","true",3,"data"],[1,"catalog-search__info",3,"innerHTML"],["class","catalog-search__list",4,"ngIf"],[1,"catalog-search__pagination"],[3,"data"],[1,"catalog-search__list"],[3,"item","click",4,"ngFor","ngForOf"],[3,"item","click"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"form",5),n.NdJ("ngSubmit",function(){return u.onSubmitSearch()}),n.TgZ(6,"div",6),n._UZ(7,"gv-input",7),n.ALo(8,"translate"),n.qZA(),n._UZ(9,"gv-pagination",8),n.qZA(),n._UZ(10,"div",9),n.ALo(11,"translate"),n.qZA(),n.YNc(12,Or,2,1,"div",10),n.TgZ(13,"div",11),n._UZ(14,"gv-pagination",12),n.qZA()()()()()),2&s&&(n.xp6(5),n.Q6J("formGroup",u.searchForm),n.xp6(2),n.uIk("placeholder",n.lcZ(8,6,"catalog.searchAdvanced")),n.xp6(2),n.Q6J("data",u.paginationData),n.xp6(1),n.Q6J("innerHTML",n.xi3(11,8,"search.results.label",n.VKq(11,ba,u.totalElements)),n.oJD),n.xp6(2),n.Q6J("ngIf",u.apiResults),n.xp6(2),n.Q6J("data",u.paginationData))},directives:[Ht._Y,Ht.JL,Ht.sg,Nn.T,Ht.JJ,Ht.u,Ht.Fj,tn.O5,tn.sg],pipes:[ui.X$],styles:[".search__form[_ngcontent-%COMP%]{background-color:var(--gv-theme-color-darker);color:var(--gv-theme-font-color-light);padding:40px 25%}.search__form__input[_ngcontent-%COMP%]{width:100%}.catalog-search[_ngcontent-%COMP%]{background-color:var(--gv-theme-neutral-color-lightest)}.catalog-search__list[_ngcontent-%COMP%]{padding:12px}.catalog-search__pagination[_ngcontent-%COMP%]{border-top:1px solid var(--gv-theme-neutral-color);padding:1rem;display:flex;justify-content:center}.catalog-search__header[_ngcontent-%COMP%]{border-bottom:1px solid var(--gv-theme-neutral-color);padding:40px 25px 25px}.catalog-search__header[_ngcontent-%COMP%]   .catalog-search__form[_ngcontent-%COMP%]{display:flex}.catalog-search__header[_ngcontent-%COMP%]   .catalog-search__info[_ngcontent-%COMP%]{margin:.5rem 0 0 5.5rem;opacity:.6;line-height:15px}.catalog-search__header[_ngcontent-%COMP%]   .catalog-search__bar[_ngcontent-%COMP%]{flex:1;margin:0 1rem 0 5rem}.catalog-search__header[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%]{--gv-icon--c: var(--gv-theme-color-dark);max-width:1100px;width:100%}.catalog-search__header[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{max-width:55px}"]}),l})();var Ps=d(94774);class dh extends((0,Ps.k)(E.oi)){static get properties(){return{category:{type:Object},limit:{type:Number},_category:{type:Object,attribute:!1}}}static get styles(){return[...super.styles,E.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          margin: 0.2rem;
          vertical-align: middle;
          min-width: 415px;
        }

        .card {
          background-color: var(--gv-category--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          height: var(--gv-category--h, 200px);
          padding: 2rem;
          box-shadow: 0 0 0 1px var(--gv-theme-neutral-color-dark, #bfbfbf), 0 1px 3px var(--gv-theme-neutral-color-dark, #bfbfbf);
          transition: all 0.3s;
          position: relative;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -14px var(--gv-theme-neutral-color, #f5f5f5);
          cursor: pointer;
        }

        .box {
          display: flex;
        }

        .title {
          flex: 1;
          align-self: center;
        }

        .title span {
          font-size: var(--gv-theme-font-size-s);
          font-weight: 600;
          line-height: var(--gv-theme-font-size-s);
          margin-left: 8px;
          opacity: 0.7;
        }

        gv-identity-picture {
          height: 80px;
          width: 80px;
          margin: 0.5rem 1rem 0.5rem 0;
        }

        .title {
          color: var(--gv-category--c, var(--gv-theme-font-color-dark, #262626));
          font-size: var(--gv-theme-font-size-xxl, 30px);
          font-style: normal;
          font-weight: 600;
          line-height: calc(var(--gv-theme-font-size-xxl, 30px) + 6px);
        }

        .description {
          color: var(--gv-category--c, var(--gv-theme-font-color-dark, #262626));
          font-size: var(--gv-theme-font-size-l, 16px);
          font-style: normal;
          font-weight: normal;
          line-height: 24px;
          opacity: 0.7;

          /** text-overflow **/
          max-height: 150px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `]}constructor(){super(),this._skeletonAttribute="category"}_get(c){return this._category?this._category[c]:""}_onClick(){(0,_r.h)(this,"click",this._category)}render(){const c=this._get("total_apis");return E.dy`<div
      @click=${this._onClick}
      class="${(0,si.$)({card:!0,skeleton:this._skeleton,empty:this._error||this._empty})}"
    >
      ${this._error||this._empty?E.dy`
            <div class="${(0,si.$)({skeleton:this._skeleton})}">
              <span>${(0,Yi.ag)(this._error?"gv-category.error":"gv-category.empty")}</span>
            </div>
          `:E.dy` <div class="box">
              <gv-identity-picture
                .skeleton="${this._skeleton}"
                display_name="${this._get("name")}"
                picture="${this._get("_links")?this._get("_links").picture:""}"
              ></gv-identity-picture>
              <div class="title">${this._get("name")}${c?E.dy`<span>(${c})</span>`:""}</div>
            </div>

            <div class="description">${(0,Pr.$G)(this._get("description"),this.limit)}</div>`}
    </div> `}}window.customElements.define("gv-category",dh);var Ya=d(62905);function Qa(l,c){if(1&l&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&l){const s=n.oxw(2);n.xp6(1),n.hij("(",s.nbCategories,")")}}function Xa(l,c){if(1&l&&(n.TgZ(0,"h1",4),n._uU(1),n.ALo(2,"translate"),n.YNc(3,Qa,2,1,"span",2),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.hij(" ",n.lcZ(2,2,"categories.title")," "),n.xp6(2),n.Q6J("ngIf",s.nbCategories)}}function qa(l,c){if(1&l&&(n.TgZ(0,"section")(1,"gv-message",5),n._UZ(2,"gv-icon",6)(3,"div",7),n.ALo(4,"translate"),n.qZA()()),2&l){const s=n.oxw();n.xp6(2),n.Q6J("shape",s.emptyIcon),n.xp6(1),n.Q6J("innerHTML",n.lcZ(4,2,"categories.empty"),n.oJD)}}window.customElements.define("gv-category-list",class Ja extends Ya.d{static get styles(){return[...super.styles,E.iv`
        :host {
          --bgc-1: var(--gv-category-list--bgc-1, #cce6eb);
          --bgc-2: var(--gv-category-list--bgc-2, #fcf1a8);
          --bgc-3: var(--gv-category-list--bgc-3, #d9d4f1);
          --bgc-4: var(--gv-category-list--bgc-4, #f9c15e);
          --bgc-5: var(--gv-category-list--bgc-5, #d4fccd);
          --bgc-6: var(--gv-category-list--bgc-6, #e0c8b2);
        }
      `]}renderItem(c,s){return E.dy`<gv-category class="item" .category="${c||null}" style="${this._getCategoryBackgroundColor(s)}"> </gv-category>`}_getCategoryBackgroundColor(c){return`--gv-category--bgc: var(--bgc-${c%6+1})`}});let el=(()=>{class l{constructor(s,u,v){this.portalService=s,this.router=u,this.activatedRoute=v}ngOnInit(){this.empty=!1,this.categories=new Array(6).fill(null),this.portalService.getCategories({size:-1}).toPromise().then(s=>{this.nbCategories=s.metadata.data.total,this.categories=s.data,0===s.data.length&&(this.empty=!0,this.emptyIcon=this.activatedRoute.snapshot.data.icon)})}onCardClick(s){this.router.navigate([`/catalog/categories/${s.id}`])}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.EA),n.Y36(En.F0),n.Y36(En.gz))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-categories"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-category:click",function(w){return u.onCardClick(w.detail)})},decls:5,vars:3,consts:[[1,"page__content","categories"],["class","title",4,"ngIf"],[4,"ngIf"],[3,"items"],[1,"title"],[1,"message-empty"],[3,"shape"],[1,"title",3,"innerHTML"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0),n.YNc(1,Xa,4,4,"h1",1),n.YNc(2,qa,5,4,"section",2),n.TgZ(3,"section"),n._UZ(4,"gv-category-list",3),n.qZA()()),2&s&&(n.xp6(1),n.Q6J("ngIf",!u.empty),n.xp6(1),n.Q6J("ngIf",u.empty),n.xp6(2),n.Q6J("items",u.categories))},directives:[tn.O5],pipes:[ui.X$],encapsulation:2}),l})();d(84769),d(3120);var tl=d(65260);const If=function(l){return{username:l}};function kf(l,c){if(1&l&&(n.TgZ(0,"h1",4),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.hij(" ",n.xi3(2,1,"dashboard.welcome",n.VKq(4,If,s.currentUser.first_name||s.currentUser.display_name))," ")}}function Of(l,c){1&l&&(n.TgZ(0,"gv-button",9),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l&&(n.Q6J("routerLink","/applications/creation/"),n.xp6(1),n.hij(" ",n.lcZ(2,2,"dashboard.applications.createFirst")," "))}function Rf(l,c){if(1&l&&(n.TgZ(0,"section")(1,"gv-message",5),n._UZ(2,"gv-icon",6)(3,"div",7),n.ALo(4,"translate"),n.YNc(5,Of,3,4,"gv-button",8),n.qZA()()),2&l){const s=n.oxw();n.xp6(3),n.Q6J("innerHTML",n.lcZ(4,2,"dashboard.empty"),n.oJD),n.xp6(2),n.Q6J("ngIf",s.applicationCreationEnabled())}}function Lf(l,c){1&l&&(n.TgZ(0,"section")(1,"gv-message",5),n._UZ(2,"gv-icon",10)(3,"div",7),n.ALo(4,"translate"),n.qZA()()),2&l&&(n.xp6(3),n.Q6J("innerHTML",n.lcZ(4,1,"dashboard.noApplicationPermission"),n.oJD))}function Ff(l,c){1&l&&(n.TgZ(0,"gv-button",9)(1,"div"),n._UZ(2,"gv-icon",6)(3,"h4",16),n.qZA()()),2&l&&n.Q6J("routerLink","/applications/creation/")}function Nf(l,c){1&l&&(n.TgZ(0,"gv-button",17)(1,"div"),n._UZ(2,"gv-icon",18)(3,"h4",19),n.qZA()()),2&l&&n.Q6J("routerLink","/applications/")}const Hf=function(l,c){return{"one-card":l,"two-cards":c}};function Bf(l,c){if(1&l&&(n.TgZ(0,"section"),n._UZ(1,"h3",11),n.TgZ(2,"div",12),n._UZ(3,"gv-card-list",13),n.TgZ(4,"div",14),n.YNc(5,Ff,4,1,"gv-button",8),n.YNc(6,Nf,4,1,"gv-button",15),n.qZA()()()),2&l){const s=n.oxw();n.xp6(2),n.Q6J("ngClass",n.WLB(6,Hf,1===s.applications.length,2===s.applications.length)),n.xp6(1),n.Akn(s.cardListGridTemplate),n.Q6J("items",s.applications),n.xp6(2),n.Q6J("ngIf",s.applicationCreationEnabled()),n.xp6(1),n.Q6J("ngIf",s.applications&&s.applications.length)}}function Cm(l,c){1&l&&n._UZ(0,"div",24)}function Uf(l,c){if(1&l&&n._UZ(0,"gv-stats",25),2&l){const s=n.oxw(2);n.Q6J("stats",s.stats)("options",s.optionsStats)}}function wm(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"div")(1,"h3",4),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"div",20)(5,"gv-table",21),n.NdJ("gv-table:select",function(v){return n.CHM(s),n.oxw().onSubscriptionClick(v)}),n.ALo(6,"translate"),n.qZA(),n.TgZ(7,"div"),n.YNc(8,Cm,1,0,"div",22),n.YNc(9,Uf,1,2,"gv-stats",23),n.qZA()()()}if(2&l){const s=n.oxw();n.xp6(2),n.Oqu(n.lcZ(3,7,"dashboard.subscriptions.title")),n.xp6(3),n.Q6J("format",s.format)("emptymessage",n.lcZ(6,9,"dashboard.subscriptions.list.empty"))("items",s.subscriptions)("options",s.optionsSubscriptions),n.xp6(3),n.Q6J("ngIf",!s.stats),n.xp6(1),n.Q6J("ngIf",s.stats)}}const $f=Cn.w0.StatusEnum;let jf=(()=>{class l{constructor(s,u,v,w,U,fe,De){this.currentUserService=s,this.applicationService=u,this.subscriptionService=v,this.router=w,this.config=U,this.translateService=fe,this.analyticsService=De,this.subscriptions=[]}ngOnInit(){this.currentUserService.get().subscribe(s=>{this.currentUser=s}),this.hasApplicationPermission()&&this.applicationService.getApplications({size:3,order:"-nbSubscriptions"}).toPromise().then(s=>{const u=s.metadata?.subscriptions;this.applications=s.data.map(v=>{const w=u?.[v.id]||[];w.length>0&&this.subscriptionService.getSubscriptions({size:-1,applicationId:v.id,statuses:[$f.ACCEPTED]}).toPromise().then(fe=>{fe.data.forEach(De=>{this.subscriptions=this.subscriptions.concat({application:v,api:{id:De.api,...fe.metadata[De.api]},plan:fe.metadata[De.plan]})})});const U=this._getMetrics(v,w);return{item:v,metrics:U}}),this.empty=0===this.applications.length,this.cardListGridTemplate=`grid-template-columns: repeat(${this.applications?this.applications.length:0}, 1fr)`}),this.format=s=>this.translateService.get(s).toPromise(),this.optionsSubscriptions={selectable:!0,data:[{field:"application._links.picture",type:"image",alt:s=>(0,qr.Qu)(s.application)},{field:"name",type:"gv-icon",width:"30px",attributes:{shape:s=>(0,la.Od)(s.application.applicationType),title:s=>s.application.applicationType}},{field:"application.name",label:(0,yn.J)("dashboard.subscriptions.application")},{field:"api.name",tag:"api.version",label:(0,yn.J)("dashboard.subscriptions.api")},{field:"plan.name",label:(0,yn.J)("dashboard.subscriptions.plan")}]},this.analyticsService.getDefaultStatsOptions().then(s=>{this.optionsStats=s})}hasApplicationPermission(){return this.currentUser&&this.currentUser.permissions&&this.currentUser.permissions.APPLICATION.find(s=>"R"===s)}_getMetrics(s,u){var v=this;return(0,ur.Z)(function*(){const w=u.length;return{subscribers:{value:w,clickable:!0,title:yield v.translateService.get("applications.subscribers.title",{count:w,appName:s.name}).toPromise()}}})()}goToApplication(s){Promise.resolve(s).then(u=>{this.router.navigate(["/applications/"+u.id])})}onClickToAppSubscribers({key:s,item:u}){"subscribers"===s&&this.router.navigate(["/applications/"+u.id+"/subscriptions"])}applicationCreationEnabled(){return this.applications&&this.config.hasFeature(Li.l.applicationCreation)&&this.currentUser?.permissions?.APPLICATION.find(s=>"C"===s)}onSubscriptionClick({detail:s}){const u=s.items[0];if(u){const v=Date.now();this.applicationService.getApplicationAnalytics({applicationId:u.application.id,type:"STATS",from:v-6048e5,to:v,field:"response-time",query:`(api:${u.api.id})`}).toPromise().then(U=>this.stats=U)}else delete this.stats}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Yr.S),n.Y36(Cn.IX),n.Y36(Cn.FF),n.Y36(En.F0),n.Y36(cr.e),n.Y36(ui.sK),n.Y36(tl.y))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-dashboard"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-card-full:click",function(w){return u.goToApplication(w.detail)})("gv-metrics:click",function(w){return u.onClickToAppSubscribers(w.detail)})},decls:8,vars:5,consts:[[1,"page__content"],[1,"main"],["class","title",4,"ngIf"],[4,"ngIf"],[1,"title"],[1,"message-empty"],["shape","code:plus"],[1,"title",3,"innerHTML"],["primary","","href","/applications/creation/",3,"routerLink",4,"ngIf"],["primary","","href","/applications/creation/",3,"routerLink"],["shape","layout:layout-arrange"],["translate","dashboard.applications.title",1,"title"],[1,"content",3,"ngClass"],[3,"items"],[1,"buttons"],["href","/applications/",3,"routerLink",4,"ngIf"],["translate","dashboard.applications.create"],["href","/applications/",3,"routerLink"],["shape","general:other#2"],["translate","dashboard.applications.list"],[1,"subscriptions"],["order","api.name","nosort","",3,"format","emptymessage","items","options","gv-table:select"],["class","empty","translate","dashboard.subscriptions.subtitle",4,"ngIf"],[3,"stats","options",4,"ngIf"],["translate","dashboard.subscriptions.subtitle",1,"empty"],[3,"stats","options"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,kf,3,6,"h1",2),n.YNc(3,Rf,6,4,"section",3),n.YNc(4,Lf,5,3,"section",3),n.YNc(5,Bf,7,9,"section",3),n.TgZ(6,"section"),n.YNc(7,wm,10,11,"div",3),n.qZA()()()),2&s&&(n.xp6(2),n.Q6J("ngIf",u.currentUser),n.xp6(1),n.Q6J("ngIf",u.empty),n.xp6(1),n.Q6J("ngIf",!u.hasApplicationPermission()),n.xp6(1),n.Q6J("ngIf",u.applications&&u.applications.length),n.xp6(2),n.Q6J("ngIf",u.subscriptions&&u.subscriptions.length))},directives:[tn.O5,En.rH,ui.Pi,tn.mk],pipes:[ui.X$],styles:[".main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:1rem 0}.content[_ngcontent-%COMP%]{margin-top:.5rem;display:grid;grid-template-columns:1fr auto;grid-gap:.5rem;justify-content:start}.content.two-cards[_ngcontent-%COMP%]{grid-template-columns:minmax(66%,auto) auto}.content.one-card[_ngcontent-%COMP%]{grid-template-columns:minmax(33%,auto) auto}gv-card-list[_ngcontent-%COMP%]{display:grid;grid-gap:.5rem}.buttons[_ngcontent-%COMP%]{display:grid;grid-gap:.5rem}gv-stats[_ngcontent-%COMP%]{width:100%}.subscriptions[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.subscriptions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1;margin:20px 0}.subscriptions[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;text-align:center}"]}),l})(),Am=(()=>{class l{constructor(s,u){this.portalService=s,this.activeRoute=u}ngOnInit(){this.fragment=this.activeRoute.snapshot.fragment,this.activeRoute.params.subscribe(s=>{s.rootDir&&"root"!==s.rootDir?this.rootDir=s.rootDir:delete this.rootDir,this.portalService.getPages({homepage:!1,size:-1,parent:this.rootDir}).toPromise().then(u=>{this.pages=u.data})})}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.EA),n.Y36(En.gz))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-documentation"]],decls:1,vars:3,consts:[[3,"pages","rootDir","fragment"]],template:function(s,u){1&s&&n._UZ(0,"app-gv-documentation",0),2&s&&n.Q6J("pages",u.pages)("rootDir",u.rootDir)("fragment",u.fragment)},directives:[Oa.F],encapsulation:2}),l})();var nl=d(32979);d(75773),d(59042),d(77190);class Sm extends((0,Ul.J)(E.oi)){static get properties(){return Object.assign(Object.assign({},super.properties),{limit:{type:Number}})}static get styles(){return[...super.styles,E.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          margin: 0.2rem;
          vertical-align: middle;
          --gv-button--p: var(--gv-promote-button--p, 19px 80px);
          --gv-button--fz: var(--gv-promote-button--fz, var(--gv-theme-font-size-l, 16px));
          --gv-preview-button: 'none';
          width: 100%;
          --gv-icon--s: 20px;
          --gv-rating--s: 20px;
        }

        gv-identity-picture {
          height: var(--gv-promote-image--h, 300px);
          width: var(--gv-promote-image--w, 300px);
          --gv-image--of: contain;
        }

        .container {
          display: flex;
          min-height: 420px;
          max-height: 420px;
        }

        .image {
          background-color: var(--gv-promote-image--bgc, var(--gv-theme-color-light, #86c3d0));
          min-height: 0;
          min-width: 0;
          width: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px 0 0 4px;
        }

        .title {
          text-transform: capitalize;
          min-height: 32px;
          display: flex;
          align-items: center;
        }

        .title h2 {
          font-size: var(--gv-theme-font-size-xl, 26px);
          flex: 1;
        }

        .title .version {
          font-size: var(--gv-theme-font-size-s, 12px);
          color: var(--gv-theme-neutral-color-dark, #d9d9d9);
        }

        .owner {
          --gv-icon--c: var(--gv-theme-neutral-color-dark, #bfbfbf);
          --gv-icon--s: 16px;
          color: var(--gv-theme-neutral-color-dark, #bfbfbf);
          display: flex;
          padding-bottom: 2px;
          margin-top: -8px;
          line-height: initial;
        }

        .content {
          flex: 1;
          padding: 1.5rem;
          background-color: var(--gv-promote--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          color: var(--gv-theme-font-color-dark, #262626);
          font-size: var(--gv-theme-font-size-l, 16px);
          line-height: 24px;
          border-radius: 0 4px 4px 0;
          display: flex;
          flex-direction: column;
        }

        .description {
          margin: 24px 0px;
          flex-grow: 1;
        }

        .description-large {
          text-align: justify;
        }

        .infos {
          display: flex;
          justify-content: flex-end;
          margin: 0.5rem 0.2rem;
          align-items: center;
        }

        gv-metrics {
          display: flex;
          height: 100%;
          justify-content: flex-end;
          align-items: stretch;
        }

        .labels {
          text-align: right;
        }
      `]}_onClick(){(0,_r.h)(this,"click",{data:this._item,href:this.href})}render(){if(this._invisible)return"";const c=(0,qr.ei)(this._item);return E.dy`<div class="container">
      <div class="${(0,si.$)({skeleton:this._skeleton,image:!0})}">${this._renderImage()}</div>
      <div class="content">
        ${this._error&&!this._skeleton?E.dy`<p class="description error">${(0,Yi.ag)("gv-promote.error")}</p>`:E.dy`
              ${this._empty&&!this._skeleton?E.dy`<p class="description empty">${(0,Yi.ag)("gv-promote.empty")}</p>`:E.dy` <div class=${(0,si.$)({skeleton:this._skeleton,title:!0})}>
                      <h2>${(0,qr.YQ)(this._item)}</h2>
                      <span class="version">${(0,qr.bo)(this._item)}</span>
                    </div>
                    ${null!=c&&c.trim().length>0?E.dy`<div class="owner"><gv-icon shape="general:user" size="8px"></gv-icon>${c}</div>`:""}
                    <p
                      class=${(0,si.$)({skeleton:this._skeleton,description:!0,"description-large":(0,qr.Eb)(this._item).split(" ").length>10})}
                    >
                      ${(0,Pr.$G)((0,qr.Eb)(this._item),this.limit)}
                    </p>
                    <div class=${(0,si.$)({skeleton:this._skeleton,infos:!0})}>${this._renderMetricsWithRating()}</div>
                    <div class="labels">${this._renderLabels(!0)}</div>
                    <gv-button ?skeleton=${this._skeleton} .href="${this.href}" @click="${this._onClick}"
                      >${(0,Yi.ag)("gv-promote.view")}</gv-button
                    >`}
            `}
      </div>
    </div>`}}window.customElements.define("gv-promote",Sm),d(96009);class Ry extends((0,Ul.J)(E.oi)){static get styles(){return[...super.styles,E.iv`
        :host {
          box-sizing: border-box;
          display: inline-block;
          margin: 0.2rem;
          vertical-align: middle;
          width: 144px;
          max-height: 144px;
        }

        gv-identity-picture {
          width: 65px;
          height: 65px;
          --gv-image--of: contain;
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          max-width: 144px;
          min-height: 144px;
          border-radius: 2px;
          background-color: var(--gv-card--bgc, var(--gv-theme-neutral-color-lightest, #ffffff));
          color: var(--gv-theme-font-color-dark, #262626);
          box-shadow: 0 0 0 1px var(--gv-theme-neutral-color, #f5f5f5), 0 1px 3px var(--gv-theme-neutral-color-dark, #bfbfbf);
          transition: all 0.3s;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px -10px var(--gv-theme-neutral-color-dark, #bfbfbf);
          cursor: pointer;
        }

        .content > div {
          display: flex;
          justify-content: center;
          margin-bottom: 0.2rem;
        }

        .image {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 0.2rem;
        }

        .title {
          line-height: 22px;
          font-size: var(--gv-theme-font-size-s, 12px);
          text-transform: capitalize;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
        }

        .content {
          flex: 1;
          padding: 6px 16px 12px;
        }

        .version {
          color: var(--gv-theme-neutral-color-dark, #d9d9d9);
          top: 0.4rem;
          right: 0.4rem;
          position: absolute;
        }
      `,Hs.F]}render(){const c=(0,qr.YQ)(this._item);return E.dy`<div class="card" title="${c}">
      <span class="${(0,si.$)({skeleton:this._skeleton,version:!0})}">${(0,qr.bo)(this._item)}</span>
      <div class="${(0,si.$)({image:!0,skeleton:this._skeleton})}">${this._renderImage()}</div>

      <div class="${(0,si.$)({content:!0,empty:this._error||this._empty})}">
        ${this._error||this._empty?E.dy` <span>${(0,Yi.ag)(this._error?"gv-card.error":"gv-card.empty")}</span> `:E.dy` <div class="${(0,si.$)({skeleton:this._skeleton})}">
                <span class="title">${c}</span>
              </div>
              <div>${this._renderStates()}</div>`}
      </div>
    </div>`}}window.customElements.define("gv-card",Ry),d(8653);var Bc=d(92095),Uc=d(35786);function Tm(l,c){if(1&l&&(n.TgZ(0,"h1",10),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Oqu(n.lcZ(2,1,s.getRouteTitle()))}}function Fy(l,c){if(1&l&&(n.TgZ(0,"h3",10),n._uU(1),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Oqu(s.category.description)}}function Ny(l,c){if(1&l&&(n.TgZ(0,"section")(1,"gv-message",17),n._UZ(2,"gv-icon",18)(3,"div",19),n.qZA()()),2&l){const s=n.oxw();n.xp6(2),n.Q6J("shape",s.emptyIcon),n.xp6(1),n.Q6J("innerHTML",s.emptyMessage,n.oJD)}}function Hy(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-promote",20),n.NdJ("gv-promote:click",function(){n.CHM(s);const v=n.oxw();return v.goToApi(v.promotedApi)})("gv-tag:click",function(v){return n.CHM(s),n.oxw().goToSearchByTag(v.detail.tagValue)}),n.qZA()}if(2&l){const s=n.oxw();n.Q6J("item",s.promotedApi)("metrics",s.promotedMetrics)("href",s.promotedApiPath)}}function Dm(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-card",24),n.NdJ("click",function(){const w=n.CHM(s).$implicit;return n.oxw(2).goToApi(w)}),n.qZA()}2&l&&n.Q6J("item",c.$implicit)}function Vf(l,c){if(1&l&&(n.TgZ(0,"section",21)(1,"h3",10),n._uU(2),n.ALo(3,"translate"),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"translate"),n.qZA()(),n.TgZ(7,"div",22),n.YNc(8,Dm,1,1,"gv-card",23),n.qZA()()),2&l){const s=n.oxw();n.xp6(2),n.hij(" ",n.lcZ(3,3,"catalog.othersApi.title")," "),n.xp6(3),n.Oqu(n.lcZ(6,5,"catalog.othersApi.subTitle")),n.xp6(3),n.Q6J("ngForOf",s.randomList)}}function By(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",29),n.NdJ("click",function(v){return n.CHM(s),n.oxw(2).toggleDocumentationPage(v)}),n.TgZ(1,"span",30),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"span",31),n._uU(5),n.ALo(6,"translate"),n.qZA()()}2&l&&(n.xp6(2),n.Oqu(n.lcZ(3,2,"catalog.category.documentation.hide")),n.xp6(3),n.Oqu(n.lcZ(6,4,"catalog.category.documentation.show")))}const Mm=function(l){return{hidden:l}};function il(l,c){if(1&l&&(n.TgZ(0,"section",25)(1,"div",26),n.YNc(2,By,7,6,"gv-button",27),n._UZ(3,"app-gv-page",28),n.qZA()()),2&l){const s=n.oxw();n.xp6(1),n.Q6J("ngClass",n.VKq(3,Mm,s.allApis.length>0&&s.isDocHidden)),n.xp6(1),n.Q6J("ngIf",s.allApis.length>0),n.xp6(1),n.Q6J("page",s.currentCategoryDocumentationPage)}}function Pm(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-select",32),n.NdJ("input",function(v){return n.CHM(s),n.oxw().onSelectCategory(v)}),n.ALo(1,"translate"),n.qZA()}if(2&l){const s=n.oxw();n.Q6J("value",s.currentCategory)("options",s.categories),n.uIk("placeholder",n.lcZ(1,3,"catalog.filter"))}}function zf(l,c){if(1&l&&n._UZ(0,"gv-option",33),2&l){const s=n.oxw();n.Q6J("options",s.options)("value",s.currentDisplay)}}function Im(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-card-list",34),n.NdJ("gv-tag:click",function(v){return n.CHM(s),n.oxw().goToSearchByTag(v.detail.tagValue)}),n.qZA()}if(2&l){const s=n.oxw();n.Q6J("items",s.allApis)}}function Gf(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-row",24),n.NdJ("click",function(){const w=n.CHM(s).$implicit;return n.oxw(2).goToApi(w.item)}),n.qZA()}2&l&&n.Q6J("item",c.$implicit.item)}function $c(l,c){if(1&l&&(n.TgZ(0,"div",35),n.YNc(1,Gf,1,1,"gv-row",23),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Q6J("ngForOf",s.allApis)}}let zl=(()=>{class l{constructor(s,u,v,w,U,fe,De,et){this.apiService=s,this.translateService=u,this.activatedRoute=v,this.router=w,this.apiStates=U,this.apiLabels=fe,this.config=De,this.portalService=et,this.fragments={pagination:"pagination",filter:"filter"},this.isDocHidden=!0,this.allApis=[]}ngOnInit(){this.emptyIcon=this.activatedRoute.snapshot.data.icon||"general:sad",this.translateService.get((0,yn.J)("catalog.defaultCategory")).toPromise().then(s=>this.defaultCategory={value:"",label:s}),this.currentDisplay=this.activatedRoute.snapshot.queryParamMap.get("display")||localStorage.getItem("user-display-mode")||l.DEFAULT_DISPLAY,this._initDisplayOptions(),this.filterApiQuery=this.activatedRoute.snapshot.data.filterApiQuery,this.activatedRoute.queryParamMap.subscribe(s=>{const u=parseInt(s.get($n.O.PAGE),10)||1,v=parseInt(s.get($n.O.SIZE),10)||6,w=this._getCategoryPath();if(w)this.currentCategory=w,(this.page!==u||this.size!==v)&&(this.page=u,this.size=v,this._loadCategory());else{const U=s.get("category");(this.currentCategory!==U||this.page!==u||this.size!==v)&&(this.currentCategory=U,this.page=u,this.size=v,this._load())}this.category&&this.category.page&&this.portalService.getPageByPageId({pageId:this.category.page}).toPromise().then(U=>this.currentCategoryDocumentationPage=U)})}_initDisplayOptions(){this.options=[{id:l.DEFAULT_DISPLAY,icon:"layout:layout-4-blocks",title:(0,yn.J)("catalog.display.cards")},{id:"list",icon:"layout:layout-horizontal",title:(0,yn.J)("catalog.display.list")}].map(s=>(this.translateService.get(s.title).subscribe(u=>s.title=u),s.title="",s))}_load(){return 1===this.page&&this.hasPromotedApiMode()&&(this.promotedApi=this._loadPromotedApi({size:1,filter:this.computeFilterApiQuery(),promoted:!0,category:this.currentCategory})),Promise.all([this._loadRandomList(),this._loadCards()])}_loadRandomList(){const{list:s,deferredList:u}=(0,Ur.o)(l.RANDOM_MAX_SIZE);return this.randomList=s,this.apiService.getApis({size:l.RANDOM_MAX_SIZE,filter2:this.filterApiQuery}).toPromise().then(v=>{v.data.forEach(w=>{w.states=this.apiStates.transform(w),u.shift().resolve(w)}),u.forEach(w=>w.resolve(void 0))}).catch(v=>{u.forEach(w=>w.reject(v))})}_loadPromotedApi(s){var u=this;return(0,ur.Z)(function*(){return u.apiService.getApis(s).toPromise().then(function(){var v=(0,ur.Z)(function*(w){const U=w.data[0];return U&&(u.promotedMetrics=yield u.apiService.getApiMetricsByApiId({apiId:U.id}).toPromise(),u.promotedApiPath=`/catalog/api/${U.id}`,u.empty=!1),U});return function(w){return v.apply(this,arguments)}}())})()}_loadCategory(){return this.category=this.activatedRoute.snapshot.data.category,this.hasPromotedApiMode()&&(this.promotedApi=this._loadPromotedApi({size:1,category:this.currentCategory,promoted:!0})),this._loadCards()}_loadCards(){var s=this;return(0,ur.Z)(function*(){const u=!s.hasPromotedApiMode()&&void 0;return s.apiService.getApis({page:s.page,size:s.size,filter:s.computeFilterApiQuery(),category:s.currentCategory,promoted:u}).toPromise().then(function(){var v=(0,ur.Z)(function*({data:w,metadata:U}){return s.paginationData=U.pagination,s.allApis=w.map(fe=>{const De=s.apiService.getApiMetricsByApiId({apiId:fe.id}).toPromise();return{item:De.then(()=>(fe.states=s.apiStates.transform(fe),fe.labels=s.apiLabels.transform(fe),fe)),metrics:De}}),s.hasCategoryMode()&&null==s.categories&&s.apiService.listCategories({filter:s.filterApiQuery}).subscribe(fe=>{const De=fe.data.map(et=>({value:et.id,label:et.name}));s.categories=De.length>0?[s.defaultCategory].concat(De):[]}),s.allApis});return function(w){return v.apply(this,arguments)}}()).catch(()=>{s.allApis=[]}).finally(()=>{s.updateEmptyState(s.allApis)})})()}_onPaginate({page:s}){const u={};u[$n.O.PAGE]=s,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:u,queryParamsHandling:"merge",fragment:this.fragments.pagination})}_onChangeDisplay({id:s}){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{display:s},queryParamsHandling:"merge",fragment:this.fragments.filter}).then(()=>{this.currentDisplay=s,localStorage.setItem("user-display-mode",s)})}onSelectCategory({target:s}){if(""!==s.value){const u={category:s.value};u[$n.O.PAGE]=1,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:u,queryParamsHandling:"merge",fragment:this.fragments.filter})}else this.router.navigate([],{relativeTo:this.activatedRoute,fragment:this.fragments.filter})}get layoutClassName(){return`catalog__section__${this.hasRandomCardsAside()?"random-aside":"all"}__${this.hasPromotedApiMode()?"promoted":"no-promoted"}`}hasRandomCardsAside(){return this.hasPromotedApiMode()&&!this.empty&&!this.inCategory()&&!this.inCategoryAll()}get showCards(){return this.currentDisplay===l.DEFAULT_DISPLAY}hasPromotedApiMode(){return this.config.hasFeature(Li.l.promotedApiMode)}hasCategoryMode(){return this.config.hasFeature(Li.l.categoryMode)}_getCategoryPath(){return this.activatedRoute.snapshot.params.categoryId}inCategory(){return null!=this._getCategoryPath()}inCategoryAll(){return this.filterApiQuery===Cn.ex.ALL}get canFilter(){return!this.inCategory()&&this.hasCategoryMode()&&this.categories&&this.categories.length>0}toggleDocumentationPage(s){s.target.closest(".catalog__category__documentation").classList.toggle("hidden")}goToApi(s){Promise.resolve(s).then(u=>{const v={};this.inCategory()?v[$n.O.CATEGORY]=this.category.id:v[$n.O.API_QUERY]=this.filterApiQuery,this.router.navigate(["/catalog/api/"+u.id],{queryParams:v})})}getRouteTitle(){return this.activatedRoute.snapshot.data.title}goToSearchByTag(s){this.router.navigate(["catalog/search"],{queryParams:{q:`labels:"${s}"`}})}updateEmptyState(s=[]){var u=this;return(0,ur.Z)(function*(){if(0===s.filter(Boolean).length){const w=u.inCategory()?(0,yn.J)("catalog.categories.emptyMessage"):`catalog.${u.filterApiQuery}.emptyMessage`;u.emptyMessage=yield u.translateService.get(w).toPromise(),u.empty=!0}else u.empty=!1})()}computeFilterApiQuery(){return this.currentCategory?null:this.filterApiQuery}}return l.RANDOM_MAX_SIZE=4,l.DEFAULT_DISPLAY="cards",l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.sM),n.Y36(ui.sK),n.Y36(En.gz),n.Y36(En.F0),n.Y36(Bc.t),n.Y36(Uc.y),n.Y36(cr.e),n.Y36(Cn.EA))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-all"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-pagination:paginate",function(w){return u._onPaginate(w.detail)})("gv-option:select",function(w){return u._onChangeDisplay(w.detail)})("gv-card-full:click",function(w){return u.goToApi(w.detail)})},decls:18,vars:14,consts:[[1,"page__content"],["class","title",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],[1,"catalog__section__promoted"],[3,"item","metrics","href","gv-promote:click","gv-tag:click",4,"ngIf"],["class","catalog__section__random",4,"ngIf"],["class","catalog__section__top",4,"ngIf"],[1,"catalog__section__main"],[1,"catalog__section__content__title",3,"id"],[1,"title"],[3,"value","options","input",4,"ngIf"],[3,"options","value",4,"ngIf"],[3,"items","gv-tag:click",4,"ngIf"],["class","catalog__list catalog__list__all",4,"ngIf"],[1,"catalog__section__content__pagination",3,"id"],["hide-empty","true",3,"data"],[1,"message-empty"],[3,"shape"],[1,"title",3,"innerHTML"],[3,"item","metrics","href","gv-promote:click","gv-tag:click"],[1,"catalog__section__random"],[1,"catalog__cards","catalog__cards__random"],[3,"item","click",4,"ngFor","ngForOf"],[3,"item","click"],[1,"catalog__section__top"],[1,"catalog__category__documentation",3,"ngClass"],["link","",3,"click",4,"ngIf"],[1,"page__box",3,"page"],["link","",3,"click"],[1,"hideDoc"],[1,"showDoc"],[3,"value","options","input"],[3,"options","value"],[3,"items","gv-tag:click"],[1,"catalog__list","catalog__list__all"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0),n.YNc(1,Tm,3,3,"h1",1),n.YNc(2,Fy,2,1,"h3",1),n.YNc(3,Ny,4,2,"section",2),n.TgZ(4,"section",3)(5,"section",4),n.YNc(6,Hy,1,3,"gv-promote",5),n.qZA(),n.YNc(7,Vf,9,7,"section",6),n.YNc(8,il,4,5,"section",7),n.TgZ(9,"section",8)(10,"div",9),n._UZ(11,"h2",10),n.YNc(12,Pm,2,5,"gv-select",11),n.YNc(13,zf,1,2,"gv-option",12),n.qZA(),n.YNc(14,Im,1,1,"gv-card-list",13),n.YNc(15,$c,2,1,"div",14),n.TgZ(16,"div",15),n._UZ(17,"gv-pagination",16),n.qZA()()()()),2&s&&(n.xp6(1),n.Q6J("ngIf",!u.inCategory()&&!u.empty),n.xp6(1),n.Q6J("ngIf",u.inCategory()&&!u.empty),n.xp6(1),n.Q6J("ngIf",u.empty&&!u.currentCategoryDocumentationPage),n.xp6(1),n.Q6J("ngClass",u.layoutClassName),n.xp6(2),n.Q6J("ngIf",u.hasPromotedApiMode()),n.xp6(1),n.Q6J("ngIf",u.hasRandomCardsAside()),n.xp6(1),n.Q6J("ngIf",u.inCategory()&&u.currentCategoryDocumentationPage),n.xp6(2),n.Q6J("id",u.fragments.filter),n.xp6(2),n.Q6J("ngIf",u.canFilter),n.xp6(1),n.Q6J("ngIf",u.allApis.length>0),n.xp6(1),n.Q6J("ngIf",u.showCards),n.xp6(1),n.Q6J("ngIf",!u.showCards),n.xp6(1),n.Q6J("id",u.fragments.pagination),n.xp6(1),n.Q6J("data",u.paginationData))},directives:[tn.O5,tn.mk,tn.sg,oo.G],pipes:[ui.X$],styles:['.catalog__category__documentation[_ngcontent-%COMP%]{width:100%}.catalog__category__documentation.hidden[_ngcontent-%COMP%]{overflow:hidden;-webkit-mask-image:linear-gradient(to bottom,black 50%,transparent 100%);mask-image:linear-gradient(to bottom,black 50%,transparent 100%);height:5em;padding-bottom:3rem}.catalog__category__documentation.hidden[_ngcontent-%COMP%]   .hideDoc[_ngcontent-%COMP%], .catalog__category__documentation[_ngcontent-%COMP%]:not(.hidden)   .showDoc[_ngcontent-%COMP%]{display:none}.catalog__category__documentation.hidden[_ngcontent-%COMP%]   .showDoc[_ngcontent-%COMP%], .catalog__category__documentation[_ngcontent-%COMP%]:not(.hidden)   .hideDoc[_ngcontent-%COMP%]{display:block}.catalog__category__documentation[_ngcontent-%COMP%]   gv-button[_ngcontent-%COMP%]{width:100%;margin:.2rem 0;direction:rtl}.catalog__section__top[_ngcontent-%COMP%]{display:flex;margin-bottom:2rem;flex:1}gv-promote[_ngcontent-%COMP%], app-gv-page[_ngcontent-%COMP%]{flex:1 1 auto}.catalog__article__random[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;margin-left:1rem;max-width:320px}.catalog__article__random[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-left:1rem}.catalog__cards[_ngcontent-%COMP%]{display:grid}.catalog__cards__random[_ngcontent-%COMP%]{flex:1;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.catalog__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:.5rem}.catalog__section__content__title[_ngcontent-%COMP%]{display:flex;line-height:24px;min-height:24px;margin-bottom:1rem}.catalog__section__content__title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex:1}.catalog__section__content__pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:1rem}gv-row[_ngcontent-%COMP%]{background-color:var(--gv-theme-neutral-color-lightest);padding:10px 5px}.catalog__section__content__all__promoted[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto auto;grid-gap:2em;gap:2em;grid-template-areas:"promoted promoted promoted promoted" "cards    cards    cards    cards"}.catalog__section__content__all__no-promoted[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-gap:2em;gap:2em;grid-template-areas:"cards"}.catalog__section__random-aside__no-promoted[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto;grid-gap:0 2em;gap:0 2em;grid-template-areas:"cards cards cards cards"}.catalog__section__random-aside__promoted[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto auto;grid-gap:0 2em;gap:0 2em;grid-template-areas:"promoted promoted promoted aside" "cards   cards    cards    cards"}.catalog__section__promoted[_ngcontent-%COMP%]{grid-area:promoted}.catalog__section__random[_ngcontent-%COMP%]{grid-area:aside}.catalog__section__main[_ngcontent-%COMP%]{grid-area:cards}@media only screen and (max-device-width: 1280px){.catalog__section__content__all__promoted[_ngcontent-%COMP%], .catalog__section__content__all__no-promoted[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:0;gap:0;grid-template-areas:"cards"}.catalog__section__random-aside__no-promoted[_ngcontent-%COMP%], .catalog__section__random-aside__promoted[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:"cards"}.catalog__section__promoted[_ngcontent-%COMP%], app-gv-page[_ngcontent-%COMP%]{display:none}.catalog__cards[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 1 auto}}']}),l})();var fh=d(43877);function km(l,c){if(1&l&&n._UZ(0,"app-gv-page",4),2&l){const s=n.oxw();n.Q6J("page",s.homepage)}}function Om(l,c){1&l&&(n.TgZ(0,"h3",5),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"homepage.apis")))}function Rm(l,c){if(1&l&&(n.TgZ(0,"section"),n._UZ(1,"gv-card-list",6),n.qZA()),2&l){const s=n.oxw();n.xp6(1),n.Q6J("items",s.topApis)}}let Lm=(()=>{class l{constructor(s,u,v,w,U,fe){this.portalService=s,this.apiService=u,this.router=v,this.apiStates=w,this.apiLabels=U,this.config=fe,this.topApis=[]}ngOnInit(){this.portalService.getPages({homepage:!0}).subscribe(u=>{this.homepage=u.data[0]});const s=this.config.get("homepage.featured.size",9);this.apiService.getApis({filter:"FEATURED",size:s}).subscribe(u=>{this.topApis=u.data.map(v=>{const w=this.apiService.getApiMetricsByApiId({apiId:v.id}).toPromise();return v.states=this.apiStates.transform(v),v.labels=this.apiLabels.transform(v),{item:v,metric:w}})})}goToApi(s){Promise.resolve(s).then(u=>{this.router.navigate(["/catalog/api/"+u.id])})}onInternalLinkClick(s){this.router.navigate(["/documentation/root"],{queryParams:{page:s}})}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.EA),n.Y36(Cn.sM),n.Y36(En.F0),n.Y36(Bc.t),n.Y36(Uc.y),n.Y36(cr.e))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-homepage"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-card-full:click",function(w){return u.goToApi(w.detail)})("app-gv-page-markdown:navigate",function(w){return u.onInternalLinkClick(w.detail.pageId)})},decls:4,vars:3,consts:[[1,"page__content"],[3,"page",4,"ngIf"],["class","title",4,"ngIf"],[4,"ngIf"],[3,"page"],[1,"title"],[3,"items"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0),n.YNc(1,km,1,1,"app-gv-page",1),n.YNc(2,Om,3,3,"h3",2),n.YNc(3,Rm,2,1,"section",3),n.qZA()),2&s&&(n.xp6(1),n.Q6J("ngIf",u.homepage),n.xp6(1),n.Q6J("ngIf",u.topApis.length>0),n.xp6(1),n.Q6J("ngIf",u.topApis.length>0))},directives:[tn.O5,oo.G],pipes:[ui.X$],styles:["[_nghost-%COMP%]{--gv-page-asciidoc--bgc: transparent;--gv-page-asciidoc--p: 0;--gv-page-markdown--bgc: transparent;--gv-page-markdown--p: 0}app-homepage[_ngcontent-%COMP%]{background-color:var(--gv-theme-neutral-color-lightest);height:calc(100vh - var(--gv-theme-page--pt) - var(--gv-theme-page--pb) - var(--gv-theme-layout-header--h));width:100%}.page__box-content[_ngcontent-%COMP%]{padding:0}gv-card-list[_ngcontent-%COMP%]{padding-top:10px}"]}),l})();d(70835);var Kf=d(51214);let ph=(()=>{class l{constructor(s,u,v,w,U){this.configurationService=s,this.oauthService=u,this.currentUserService=v,this.notificationService=w,this.injector=U,this.encode=fe=>btoa(encodeURIComponent(fe).replace(/%([0-9A-F]{2})/g,function(et,wt){return String.fromCharCode(Number("0x"+wt))}))}load(){return this.authenticationService=this.injector.get(Cn.$h),this.portalService=this.injector.get(Cn.EA),this.router=this.injector.get(En.F0),new Promise(s=>{this.getProviderId()?this._fetchProviderAndConfigure().then(()=>{this.oauthService.tryLoginCodeFlow({preventClearHashAfterLogin:!0}).finally(()=>s(!0))}):s(!0)})}login(s,u,v=""){return new Promise(w=>{const U="Basic "+this.encode(`${s}:${u}`);return this.authenticationService.login({authorization:U}).subscribe(()=>{this.currentUserService.load().then(()=>{this.router.navigate([v])})},()=>{this.notificationService.error((0,yn.J)("login.notification.error")),w(!1)},()=>w(!0))})}authenticate(s,u){s&&(this.storeProviderId(s.id),this._configure(s),this.oauthService.initCodeFlow(u))}logout(){return new Promise(s=>{this.getProviderId()?this._fetchProviderAndConfigure().finally(()=>{this._logout(s)}):this._logout(s)})}_logout(s){this.authenticationService.logout().toPromise().then(()=>{this.currentUserService.revokeUser(),this.getProviderId()&&(this.oauthService.logOut(),this.removeProviderId()),this.router.navigate([""])}).catch(()=>s(!1)).finally(()=>s(!0))}_configure(s){const u=window.location.origin+("/"===window.location.pathname?"":window.location.pathname);this.oauthService.configure({clientId:s.client_id,loginUrl:s.authorizationEndpoint,tokenEndpoint:this.configurationService.get("baseURL")+"/auth/oauth2/"+s.id,requireHttps:!1,issuer:s.tokenIntrospectionEndpoint,logoutUrl:s.userLogoutEndpoint,postLogoutRedirectUri:u,scope:s.scopes.join(" "),responseType:"code",redirectUri:u,skipIssuerCheck:!0})}_fetchProviderAndConfigure(){return new Promise(s=>{this.portalService.getPortalIdentityProvider({identityProviderId:this.getProviderId()}).toPromise().then(u=>{u?(this._configure(u),s(!0)):s(!1)},()=>s(!1))})}removeProviderId(){localStorage.removeItem("user-provider-id")}storeProviderId(s){localStorage.setItem("user-provider-id",s)}getProviderId(){return localStorage.getItem("user-provider-id")}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(cr.e),n.LFG(Kf.Ct),n.LFG(Yr.S),n.LFG(Mr.g),n.LFG(n.zs3))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();function Wf(l,c){1&l&&(n.TgZ(0,"h3"),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l&&(n.xp6(1),n.Oqu(n.lcZ(2,1,"login.title")))}function Zf(l,c){1&l&&(n.TgZ(0,"div",9)(1,"gv-input",10),n.ALo(2,"translate"),n._UZ(3,"input"),n.qZA(),n.TgZ(4,"gv-input",11),n.ALo(5,"translate"),n._UZ(6,"input"),n.qZA()()),2&l&&(n.xp6(1),n.s9C("label",n.lcZ(2,2,"login.username")),n.xp6(3),n.s9C("label",n.lcZ(5,4,"login.password")))}function gh(l,c){if(1&l&&(n.TgZ(0,"gv-button",12),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l){const s=n.oxw();n.Q6J("disabled",!s.isFormValid()),n.xp6(1),n.Oqu(n.lcZ(2,2,"login.button"))}}function $y(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"gv-button",13),n.NdJ("gv-button:click",function(){const w=n.CHM(s).$implicit;return n.oxw().authenticate(w)}),n._uU(1),n.qZA()}if(2&l){const s=c.$implicit,u=n.oxw();n.Akn(u.getProviderStyle(s)),n.Q6J("provider",s.type.toLowerCase()),n.xp6(1),n.hij(" ",s.name," ")}}function mh(l,c){1&l&&(n.TgZ(0,"div",14)(1,"div"),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"gv-button",15),n._uU(5),n.ALo(6,"translate"),n.qZA()()),2&l&&(n.xp6(2),n.Oqu(n.lcZ(3,2,"login.signup.text")),n.xp6(3),n.Oqu(n.lcZ(6,4,"login.signup.link")))}function Fm(l,c){1&l&&(n.TgZ(0,"div",14)(1,"gv-button",16),n._uU(2),n.ALo(3,"translate"),n.qZA()()),2&l&&(n.xp6(2),n.Oqu(n.lcZ(3,1,"login.resetPassword")))}let jy=(()=>{class l{constructor(s,u,v,w,U,fe,De,et){this.portalService=s,this.formBuilder=u,this.router=v,this.notificationService=w,this.config=U,this.authService=fe,this.activatedRoute=De,this.reCaptchaService=et}ngOnInit(){this.firstClickHandler=this.onFirstClick.bind(this),this.loginForm=this.formBuilder.group({username:"",password:""}),this.loginEnabled=this.config.hasFeature(Li.l.localLogin),this.registrationEnabled=this.config.hasFeature(Li.l.userRegistration),this.redirectUrl=this.activatedRoute.snapshot.queryParams.redirectUrl||"",this.portalService.getPortalIdentityProviders().subscribe(s=>{this.providers=s.data},s=>{console.error("something wrong occurred with identity providers: "+s.statusText)}),this.reCaptchaService.displayBadge()}onFirstClick(){this.loginForm.get("username").setValidators(Ht.kI.required),this.loginForm.get("username").setValue(null),this.loginForm.get("password").setValidators(Ht.kI.required),this.loginForm.get("password").setValue(null),this.loginForm.markAllAsTouched(),window.removeEventListener("click",this.firstClickHandler)}ngAfterViewInit(){this.loginForm&&window.addEventListener("click",this.firstClickHandler)}ngOnDestroy(){window.removeEventListener("click",this.firstClickHandler)}login(){this.isFormValid()&&this.reCaptchaService.execute("login").then(()=>{this.authService.login(this.loginForm.value.username,this.loginForm.value.password,this.redirectUrl).then(()=>({}),()=>{this.loginForm.setValue({username:this.loginForm.value.username,password:""})})})}authenticate(s){this.authService.authenticate(s,this.redirectUrl)}isFormValid(){return this.loginForm.valid.valueOf()}getProviderStyle(s){return s.color?`--gv-button-${s.type.toLowerCase()}--bgc:${s.color};`:""}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.EA),n.Y36(Ht.qu),n.Y36(En.F0),n.Y36(Mr.g),n.Y36(cr.e),n.Y36(ph),n.Y36(En.gz),n.Y36(Jr))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-login"]],decls:10,vars:7,consts:[[1,"page__content","form",3,"formGroup","ngSubmit"],[1,"page__box"],[1,"page__box-title"],[4,"ngIf"],["class","page__box-content",4,"ngIf"],[1,"page__box-footer","form__actions","form__actions-column"],["class","signin","primary","","icon","navigation:sign-in","type","submit",3,"disabled",4,"ngIf"],["class","btn__provider",3,"provider","style","gv-button:click",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"page__box-content"],["autofocus","","name","username","formControlName","username","ngDefaultControl","","gvControl","","icon-left","communication:shield-user",1,"form__control",3,"label"],["type","password","name","password","formControlName","password","ngDefaultControl","","gvControl","","icon-left","general:shield-protected",1,"form__control",3,"label"],["primary","","icon","navigation:sign-in","type","submit",1,"signin",3,"disabled"],[1,"btn__provider",3,"provider","gv-button:click"],[1,"row"],["link","","routerLink","/user/registration"],["link","","routerLink","/user/resetPassword"]],template:function(s,u){1&s&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return u.login()}),n.TgZ(1,"div",1)(2,"div",2),n.YNc(3,Wf,3,3,"h3",3),n.qZA(),n.YNc(4,Zf,7,6,"div",4),n.TgZ(5,"div",5),n.YNc(6,gh,3,4,"gv-button",6),n.YNc(7,$y,2,4,"gv-button",7),n.YNc(8,mh,7,6,"div",8),n.YNc(9,Fm,4,3,"div",8),n.qZA()()()),2&s&&(n.Q6J("formGroup",u.loginForm),n.xp6(3),n.Q6J("ngIf",u.loginForm||u.providers),n.xp6(1),n.Q6J("ngIf",u.loginEnabled),n.xp6(2),n.Q6J("ngIf",u.loginEnabled),n.xp6(1),n.Q6J("ngForOf",u.providers),n.xp6(1),n.Q6J("ngIf",u.loginEnabled&&u.registrationEnabled),n.xp6(1),n.Q6J("ngIf",u.loginEnabled))},directives:[Ht._Y,Ht.JL,Ht.sg,tn.O5,Nn.T,Ht.JJ,Ht.u,Ht.Fj,tn.sg,En.rH],pipes:[ui.X$],styles:[".form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{padding:24px}.form[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]{flex-direction:column;text-align:center;align-items:stretch}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%]{align-self:center}.form[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:.2rem .2rem 1rem;box-sizing:border-box;width:100%}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 0 .2rem;align-self:flex-end}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin:0}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%]{align-content:center;align-items:center;background-color:var(--gv-theme-color);border-radius:2px;color:var(--gv-theme-font-color-light);--gv-icon--c: var(--gv-theme-font-color-light);--gv-icon--s: 100px;display:flex;flex-direction:column;font-size:var(--gv-theme-font-size-xs);justify-content:space-around;line-height:22px;padding:2rem;text-align:center}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:1rem 0}.page__box[_ngcontent-%COMP%]{max-width:30rem;margin:auto}.row[_ngcontent-%COMP%]{display:flex;margin:1rem 0;justify-content:center;align-items:stretch}.row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;margin:.2rem 0;box-sizing:border-box}.signin[_ngcontent-%COMP%]{margin-bottom:1rem}"]}),l})(),Gl=(()=>{class l{constructor(s){this.authService=s}ngOnInit(){this.authService.logout()}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(ph))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-logout"]],decls:0,vars:0,template:function(s,u){},encapsulation:2}),l})(),Yf=(()=>{class l{constructor(s){this.router=s}goHome(){this.router.navigate(["/"])}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(En.F0))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-not-found"]],decls:11,vars:9,consts:[[1,"page__content"],[1,"title"],[3,"gv-button:click"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0)(1,"h1",1),n._uU(2),n.ALo(3,"translate"),n.qZA(),n.TgZ(4,"section")(5,"h2",1),n._uU(6),n.ALo(7,"translate"),n.qZA(),n.TgZ(8,"gv-button",2),n.NdJ("gv-button:click",function(){return u.goHome()}),n._uU(9),n.ALo(10,"translate"),n.qZA()()()),2&s&&(n.xp6(2),n.Oqu(n.lcZ(3,3,"notFound.title")),n.xp6(4),n.Oqu(n.lcZ(7,5,"notFound.message")),n.xp6(3),n.Oqu(n.lcZ(10,7,"notFound.goHome")))},pipes:[ui.X$],styles:[".page__content[_ngcontent-%COMP%]{--gv-button--fz: 1rem;--gv-button--p: 1rem}.page__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:750px}section[_ngcontent-%COMP%]{border-top:8px solid var(--gv-theme-color-dark)}section[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:4rem 0}"]}),l})();function vh(l,c){if(1&l&&(n._UZ(0,"gv-input",16),n.ALo(1,"translate"),n.ALo(2,"translate")),2&l){const s=n.oxw().$implicit;n.s9C("label",n.lcZ(1,4,"register.field."+s.key)==="register.field."+s.key?s.label:n.lcZ(2,6,"register.field."+s.key)),n.Q6J("formControlName",s.key)("name",s.key)("required",s.required)}}function yh(l,c){if(1&l&&(n._UZ(0,"gv-select",17),n.ALo(1,"translate"),n.ALo(2,"translate")),2&l){const s=n.oxw().$implicit;n.s9C("label",n.lcZ(1,5,"register.field."+s.key)==="register.field."+s.key?s.label:n.lcZ(2,7,"register.field."+s.key)),n.Q6J("options",s.values)("formControlName",s.key)("name",s.key)("required",s.required)}}function Nm(l,c){if(1&l&&(n.TgZ(0,"div"),n.YNc(1,vh,3,8,"gv-input",14),n.YNc(2,yh,3,9,"gv-select",15),n.qZA()),2&l){const s=c.$implicit;n.xp6(1),n.Q6J("ngIf",!s.values),n.xp6(1),n.Q6J("ngIf",s.values)}}function jc(l,c){if(1&l&&(n.ynx(0),n.TgZ(1,"div",3)(2,"div",4)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",5),n._UZ(7,"gv-input",6),n.ALo(8,"translate"),n._UZ(9,"gv-input",7),n.ALo(10,"translate"),n._UZ(11,"gv-input",8),n.ALo(12,"translate"),n.YNc(13,Nm,3,2,"div",9),n.qZA(),n.TgZ(14,"div",10)(15,"gv-button",11),n._uU(16),n.ALo(17,"translate"),n.qZA(),n.TgZ(18,"p",12)(19,"gv-button",13),n._uU(20),n.ALo(21,"translate"),n.qZA()()()(),n.BQk()),2&l){const s=n.oxw(2);n.xp6(4),n.Oqu(n.lcZ(5,8,"registration.title")),n.xp6(3),n.s9C("label",n.lcZ(8,10,"registration.firstname")),n.xp6(2),n.s9C("label",n.lcZ(10,12,"registration.lastname")),n.xp6(2),n.s9C("label",n.lcZ(12,14,"registration.email")),n.xp6(2),n.Q6J("ngForOf",s.customUserFields),n.xp6(2),n.Q6J("disabled",s.registrationForm.pristine||s.registrationForm.invalid),n.xp6(1),n.hij(" ",n.lcZ(17,16,"registration.button")," "),n.xp6(4),n.Oqu(n.lcZ(21,18,"registration.backLogin"))}}const Vc=function(l){return{email:l}};function _h(l,c){if(1&l&&(n.ynx(0),n.TgZ(1,"div",3)(2,"div",4)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",5)(7,"div",18),n._UZ(8,"gv-icon",19),n.TgZ(9,"h2"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n._UZ(12,"gv-button",20),n.ALo(13,"translate"),n.qZA()()(),n.BQk()),2&l){const s=n.oxw(2);n.xp6(4),n.Oqu(n.lcZ(5,3,"registration.success.title")),n.xp6(6),n.Oqu(n.xi3(11,5,"registration.success.message",n.VKq(10,Vc,s.registrationForm.value.email))),n.xp6(2),n.Q6J("innerHTML",n.lcZ(13,8,"registration.backHome"),n.oJD)}}function Vy(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(s),n.oxw().onSubmitRegistration()}),n.YNc(1,jc,22,20,"ng-container",2),n.YNc(2,_h,14,12,"ng-container",2),n.qZA()}if(2&l){const s=n.oxw();n.Q6J("formGroup",s.registrationForm),n.xp6(1),n.Q6J("ngIf",!s.isSubmitted),n.xp6(1),n.Q6J("ngIf",s.isSubmitted)}}let Hm=(()=>{class l{constructor(s,u,v){this.usersService=s,this.formBuilder=u,this.reCaptchaService=v,this.canDisplayForm=!1,this.isSubmitted=!1}ngOnInit(){const s={firstname:new Ht.NI("",Ht.kI.required),lastname:new Ht.NI("",Ht.kI.required),email:new Ht.NI("",[Ht.kI.required,Ht.kI.email])};this.usersService.listCustomUserFields().toPromise().then(u=>{this.customUserFields=u,this.customUserFields&&this.customUserFields.forEach(v=>{s[v.key]=new Ht.NI("",v.required?Ht.kI.required:null)}),this.registrationForm=this.formBuilder.group(s)}).catch(()=>{this.registrationForm=this.formBuilder.group(s)}).finally(()=>{this.canDisplayForm=!0}),this.reCaptchaService.displayBadge()}onSubmitRegistration(){if(this.registrationForm.valid&&!this.isSubmitted){const s={email:this.registrationForm.value.email,firstname:this.registrationForm.value.firstname,lastname:this.registrationForm.value.lastname,confirmation_page_url:window.location.href+"/confirm"};this.customUserFields&&(s.customFields={},this.customUserFields.forEach(u=>{s.customFields[u.key]=this.registrationForm.get(u.key).value})),this.reCaptchaService.execute("registration").then(()=>{this.usersService.registerNewUser({registerUserInput:s}).toPromise().then(()=>this.isSubmitted=!0).catch(()=>({}))})}}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.fz),n.Y36(Ht.qu),n.Y36(Jr))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-registration"]],decls:1,vars:1,consts:[["class","page__content form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"page__content","form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"page__box"],[1,"page__box-title"],[1,"page__box-content"],["large","","required","","formControlName","firstname","name","firstname","autocomplete","on","autofocus","","ngDefaultControl","","gvControl","",1,"form__control",3,"label"],["large","","formControlName","lastname","autocomplete","on","name","lastname","ngDefaultControl","","gvControl","",1,"form__control",3,"label"],["large","","type","email","formControlName","email","autocomplete","on","name","email","ngDefaultControl","","gvControl","",1,"form__control",3,"label"],[4,"ngFor","ngForOf"],[1,"page__box-footer","form__actions","form__actions-column"],["primary","","type","submit",1,"form__control",3,"disabled"],[1,"text-center"],["link","","routerLink","/user/login"],["large","","class","form__control","type","text","autocomplete","on","ngDefaultControl","","gvControl","",3,"label","formControlName","name","required",4,"ngIf"],["large","","class","form__control","type","text","ngDefaultControl","","gvControl","",3,"options","label","formControlName","name","required",4,"ngIf"],["large","","type","text","autocomplete","on","ngDefaultControl","","gvControl","",1,"form__control",3,"label","formControlName","name","required"],["large","","type","text","ngDefaultControl","","gvControl","",1,"form__control",3,"options","label","formControlName","name","required"],[1,"form__message"],["shape","communication:sending-mail"],["link","","routerLink","/",3,"innerHTML"]],template:function(s,u){1&s&&n.YNc(0,Vy,3,3,"form",0),2&s&&n.Q6J("ngIf",u.canDisplayForm)},directives:[tn.O5,Ht._Y,Ht.JL,Ht.sg,Nn.T,Ht.Q7,Ht.JJ,Ht.u,Ht.Fj,tn.sg,En.rH],pipes:[ui.X$],styles:[".form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{padding:24px}.form[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]{flex-direction:column;text-align:center;align-items:stretch}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%]{align-self:center}.form[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:.2rem .2rem 1rem;box-sizing:border-box;width:100%}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 0 .2rem;align-self:flex-end}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin:0}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%]{align-content:center;align-items:center;background-color:var(--gv-theme-color);border-radius:2px;color:var(--gv-theme-font-color-light);--gv-icon--c: var(--gv-theme-font-color-light);--gv-icon--s: 100px;display:flex;flex-direction:column;font-size:var(--gv-theme-font-size-xs);justify-content:space-around;line-height:22px;padding:2rem;text-align:center}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:1rem 0}.page__box[_ngcontent-%COMP%]{max-width:30rem;margin:auto}"]}),l})();var Kl=d(58521);let Wl=(()=>{class l{isParsedTokenExpired(s){return!!s&&1e3*s.exp<=Date.now()}parseToken(s){if(s){const v=s.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),w=decodeURIComponent(atob(v).split("").map(U=>"%"+("00"+U.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(w)}return null}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();function bh(l,c){if(1&l&&(n.ynx(0),n.TgZ(1,"div",2)(2,"div",3)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",4),n._UZ(7,"gv-input",5),n.ALo(8,"translate"),n._UZ(9,"gv-input",6),n.ALo(10,"translate"),n._UZ(11,"gv-input",7),n.ALo(12,"translate"),n._UZ(13,"gv-input",8),n.ALo(14,"translate"),n._UZ(15,"gv-input",9),n.ALo(16,"translate"),n.qZA(),n.TgZ(17,"div",10)(18,"gv-button",11),n._uU(19),n.ALo(20,"translate"),n.qZA(),n.TgZ(21,"p",12)(22,"gv-button",13),n._uU(23),n.ALo(24,"translate"),n.qZA()()()(),n.BQk()),2&l){const s=n.oxw();n.xp6(4),n.Oqu(n.lcZ(5,12,"registrationConfirmation.title")),n.xp6(3),n.s9C("label",n.lcZ(8,14,"registrationConfirmation.firstname")),n.s9C("value",s.userFromToken.firstname),n.xp6(2),n.s9C("label",n.lcZ(10,16,"registrationConfirmation.lastname")),n.s9C("value",s.userFromToken.lastname),n.xp6(2),n.s9C("label",n.lcZ(12,18,"registrationConfirmation.email")),n.s9C("value",s.userFromToken.email),n.xp6(2),n.s9C("label",n.lcZ(14,20,"registrationConfirmation.password")),n.xp6(2),n.s9C("label",n.lcZ(16,22,"registrationConfirmation.confirmedPassword")),n.xp6(3),n.Q6J("disabled",s.registrationConfirmationForm.pristine||s.registrationConfirmationForm.invalid),n.xp6(1),n.hij(" ",n.lcZ(20,24,"registrationConfirmation.button")," "),n.xp6(4),n.Oqu(n.lcZ(24,26,"registrationConfirmation.backHome"))}}function Jf(l,c){1&l&&(n.ynx(0),n.TgZ(1,"div",2)(2,"div",3)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",14),n._UZ(8,"gv-icon",15),n.TgZ(9,"h2"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n._UZ(12,"gv-button",16),n.ALo(13,"translate"),n.qZA()()(),n.BQk()),2&l&&(n.xp6(4),n.Oqu(n.lcZ(5,3,"registrationConfirmation.title")),n.xp6(6),n.Oqu(n.lcZ(11,5,"registrationConfirmation.tokenExpired")),n.xp6(2),n.Q6J("innerHTML",n.lcZ(13,7,"registrationConfirmation.backRegistration"),n.oJD))}function Ch(l,c){1&l&&(n.ynx(0),n.TgZ(1,"div",2)(2,"div",3)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",14),n._UZ(8,"gv-icon",17),n.TgZ(9,"h2"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n._UZ(12,"gv-button",18),n.ALo(13,"translate"),n.qZA()()(),n.BQk()),2&l&&(n.xp6(4),n.Oqu(n.lcZ(5,3,"registrationConfirmation.success.title")),n.xp6(6),n.Oqu(n.lcZ(11,5,"registrationConfirmation.success.message")),n.xp6(2),n.Q6J("innerHTML",n.lcZ(13,7,"registrationConfirmation.backLogin"),n.oJD))}let Qf=(()=>{class l{constructor(s,u,v,w,U){this.usersService=s,this.formBuilder=u,this.route=v,this.tokenService=w,this.reCaptchaService=U}ngOnInit(){this.isSubmitted=!1,this.token=this.route.snapshot.paramMap.get("token"),this.userFromToken=this.tokenService.parseToken(this.token),this.isTokenExpired=this.tokenService.isParsedTokenExpired(this.userFromToken),this.registrationConfirmationForm=this.formBuilder.group({firstname:new Ht.NI({value:this.userFromToken.firstname,disabled:!0}),lastname:new Ht.NI({value:this.userFromToken.lastname,disabled:!0}),email:new Ht.NI({value:this.userFromToken.email,disabled:!0}),password:new Ht.NI("",Ht.kI.required),confirmedPassword:new Ht.NI("",Ht.kI.required)}),this.registrationConfirmationForm.get("confirmedPassword").setValidators([Ht.kI.required,Kl.d.sameValueValidator(this.registrationConfirmationForm.get("password"))]),this.reCaptchaService.displayBadge()}onSubmitRegistrationConfirmationForm(){if(this.registrationConfirmationForm.valid&&!this.isSubmitted){const s={token:this.token,password:this.registrationConfirmationForm.value.password,firstname:this.userFromToken.firstname,lastname:this.userFromToken.lastname};this.reCaptchaService.execute("registration_confirmation").then(()=>{this.usersService.finalizeUserRegistration({finalizeRegistrationInput:s}).toPromise().then(()=>this.isSubmitted=!0).catch(()=>{this.registrationConfirmationForm.patchValue({password:"",confirmedPassword:""})})})}}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.fz),n.Y36(Ht.qu),n.Y36(En.gz),n.Y36(Wl),n.Y36(Jr))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-registration-confirmation"]],decls:4,vars:4,consts:[[1,"page__content","form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"page__box"],[1,"page__box-title"],[1,"page__box-content"],["large","","required","","formControlName","firstname","ngDefaultControl","","gvControl","",1,"form__control",3,"label","value"],["large","","required","","formControlName","lastname","ngDefaultControl","","gvControl","",1,"form__control",3,"label","value"],["large","","required","","type","email","formControlName","email","ngDefaultControl","","gvControl","",1,"form__control",3,"label","value"],["large","","required","","type","password","formControlName","password","ngDefaultControl","","gvControl","",1,"form__control",3,"label"],["large","","required","","type","password","formControlName","confirmedPassword","ngDefaultControl","","gvControl","",1,"form__control",3,"label"],[1,"page__box-footer","form__actions","form__actions-column"],["primary","","type","submit",1,"form__control",3,"disabled"],[1,"text-center"],["link","","routerLink","/"],[1,"form__message"],["shape","home:clock"],["link","","routerLink","/user/registration",3,"innerHTML"],["shape","general:smile"],["link","","routerLink","/user/login",3,"innerHTML"]],template:function(s,u){1&s&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return u.onSubmitRegistrationConfirmationForm()}),n.YNc(1,bh,25,28,"ng-container",1),n.YNc(2,Jf,14,9,"ng-container",1),n.YNc(3,Ch,14,9,"ng-container",1),n.qZA()),2&s&&(n.Q6J("formGroup",u.registrationConfirmationForm),n.xp6(1),n.Q6J("ngIf",!u.isSubmitted&&!u.isTokenExpired),n.xp6(1),n.Q6J("ngIf",u.isTokenExpired),n.xp6(1),n.Q6J("ngIf",u.isSubmitted))},directives:[Ht._Y,Ht.JL,Ht.sg,tn.O5,Nn.T,Ht.Q7,Ht.JJ,Ht.u,Ht.Fj,En.rH],pipes:[ui.X$],styles:[".form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{padding:24px}.form[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]{flex-direction:column;text-align:center;align-items:stretch}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%]{align-self:center}.form[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:.2rem .2rem 1rem;box-sizing:border-box;width:100%}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 0 .2rem;align-self:flex-end}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin:0}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%]{align-content:center;align-items:center;background-color:var(--gv-theme-color);border-radius:2px;color:var(--gv-theme-font-color-light);--gv-icon--c: var(--gv-theme-font-color-light);--gv-icon--s: 100px;display:flex;flex-direction:column;font-size:var(--gv-theme-font-size-xs);justify-content:space-around;line-height:22px;padding:2rem;text-align:center}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:1rem 0}.page__box[_ngcontent-%COMP%]{max-width:30rem;margin:auto}"]}),l})();function Xf(l,c){if(1&l&&(n.ynx(0),n.TgZ(1,"div",2)(2,"div",3)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",4),n._UZ(7,"gv-input",5),n.ALo(8,"translate"),n.qZA(),n.TgZ(9,"div",6)(10,"gv-button",7),n._uU(11),n.ALo(12,"translate"),n.qZA(),n.TgZ(13,"p",8)(14,"gv-button",9),n._uU(15),n.ALo(16,"translate"),n.qZA()()()(),n.BQk()),2&l){const s=n.oxw();n.xp6(4),n.Oqu(n.lcZ(5,5,"resetPassword.title")),n.xp6(3),n.s9C("label",n.lcZ(8,7,"resetPassword.username")),n.xp6(3),n.Q6J("disabled",s.resetPasswordForm.pristine||s.resetPasswordForm.invalid),n.xp6(1),n.hij(" ",n.lcZ(12,9,"resetPassword.button")," "),n.xp6(4),n.Oqu(n.lcZ(16,11,"resetPassword.backLogin"))}}function wh(l,c){1&l&&(n.ynx(0),n.TgZ(1,"div",2)(2,"div",3)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",10),n._UZ(8,"gv-icon",11),n.TgZ(9,"h2"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n._UZ(12,"gv-button",12),n.ALo(13,"translate"),n.qZA()()(),n.BQk()),2&l&&(n.xp6(4),n.Oqu(n.lcZ(5,3,"resetPassword.success.title")),n.xp6(6),n.Oqu(n.lcZ(11,5,"resetPassword.success.message")),n.xp6(2),n.Q6J("innerHTML",n.lcZ(13,7,"resetPassword.backHome"),n.oJD))}let qf=(()=>{class l{constructor(s,u,v){this.usersService=s,this.formBuilder=u,this.reCaptchaService=v,this.isSubmitted=!1}ngOnInit(){this.resetPasswordForm=this.formBuilder.group({username:""}),this.reCaptchaService.displayBadge()}onSubmitResetPassword(){if(this.resetPasswordForm.valid&&!this.isSubmitted){const s={username:this.resetPasswordForm.value.username,reset_page_url:window.location.href+"/confirm"};this.reCaptchaService.execute("reset_password").then(()=>{this.usersService.resetUserPassword({resetUserPasswordInput:s}).toPromise().then(()=>this.isSubmitted=!0).catch(()=>({}))})}}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.fz),n.Y36(Ht.qu),n.Y36(Jr))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-reset-password"]],decls:3,vars:3,consts:[[1,"page__content","form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"page__box"],[1,"page__box-title"],[1,"page__box-content"],["large","","required","","formControlName","username","name","username","autocomplete","on","autofocus","","ngDefaultControl","","gvControl","",1,"form__control",3,"label"],[1,"page__box-footer","form__actions","form__actions-column"],["primary","","type","submit",1,"form__control",3,"disabled"],[1,"text-center"],["link","","routerLink","/user/login"],[1,"form__message"],["shape","communication:sending-mail"],["link","","routerLink","/",3,"innerHTML"]],template:function(s,u){1&s&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return u.onSubmitResetPassword()}),n.YNc(1,Xf,17,13,"ng-container",1),n.YNc(2,wh,14,9,"ng-container",1),n.qZA()),2&s&&(n.Q6J("formGroup",u.resetPasswordForm),n.xp6(1),n.Q6J("ngIf",!u.isSubmitted),n.xp6(1),n.Q6J("ngIf",u.isSubmitted))},directives:[Ht._Y,Ht.JL,Ht.sg,tn.O5,Nn.T,Ht.Q7,Ht.JJ,Ht.u,Ht.Fj,En.rH],pipes:[ui.X$],styles:[".form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{padding:24px}.form[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]{flex-direction:column;text-align:center;align-items:stretch}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%]{align-self:center}.form[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:.2rem .2rem 1rem;box-sizing:border-box;width:100%}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 0 .2rem;align-self:flex-end}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin:0}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%]{align-content:center;align-items:center;background-color:var(--gv-theme-color);border-radius:2px;color:var(--gv-theme-font-color-light);--gv-icon--c: var(--gv-theme-font-color-light);--gv-icon--s: 100px;display:flex;flex-direction:column;font-size:var(--gv-theme-font-size-xs);justify-content:space-around;line-height:22px;padding:2rem;text-align:center}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:1rem 0}.page__box[_ngcontent-%COMP%]{max-width:30rem;margin:auto}"]}),l})();function Bm(l,c){1&l&&(n.TgZ(0,"gv-button",14),n._uU(1),n.ALo(2,"translate"),n.qZA()),2&l&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"resetPasswordConfirmation.backHome"),""))}function ep(l,c){if(1&l&&(n.ynx(0),n.TgZ(1,"div",2)(2,"div",3)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",4),n._UZ(7,"gv-input",5),n.ALo(8,"translate"),n._UZ(9,"gv-input",6),n.ALo(10,"translate"),n._UZ(11,"gv-input",7),n.ALo(12,"translate"),n._UZ(13,"gv-input",8),n.ALo(14,"translate"),n._UZ(15,"gv-input",9),n.ALo(16,"translate"),n.qZA(),n.TgZ(17,"div",10)(18,"gv-button",11),n._uU(19),n.ALo(20,"translate"),n.qZA(),n.TgZ(21,"p",12),n.YNc(22,Bm,3,3,"gv-button",13),n.qZA()()(),n.BQk()),2&l){const s=n.oxw();n.xp6(4),n.Oqu(n.lcZ(5,12,"resetPasswordConfirmation.title")),n.xp6(3),n.s9C("label",n.lcZ(8,14,"resetPasswordConfirmation.firstname")),n.s9C("value",s.userFromToken.firstname),n.xp6(2),n.s9C("label",n.lcZ(10,16,"resetPasswordConfirmation.lastname")),n.s9C("value",s.userFromToken.lastname),n.xp6(2),n.s9C("label",n.lcZ(12,18,"resetPasswordConfirmation.email")),n.s9C("value",s.userFromToken.email),n.xp6(2),n.s9C("label",n.lcZ(14,20,"resetPasswordConfirmation.password")),n.xp6(2),n.s9C("label",n.lcZ(16,22,"resetPasswordConfirmation.confirmedPassword")),n.xp6(3),n.Q6J("disabled",s.resetPasswordConfirmationForm.pristine||s.resetPasswordConfirmationForm.invalid),n.xp6(1),n.hij(" ",n.lcZ(20,24,"resetPasswordConfirmation.button")," "),n.xp6(3),n.Q6J("ngIf",!s.isTokenExpired&&!s.isSubmitted)}}function tp(l,c){1&l&&(n.ynx(0),n.TgZ(1,"div",2)(2,"div",3)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",15),n._UZ(8,"gv-icon",16),n.TgZ(9,"h2"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n._UZ(12,"gv-button",17),n.ALo(13,"translate"),n.qZA()()(),n.BQk()),2&l&&(n.xp6(4),n.Oqu(n.lcZ(5,3,"resetPasswordConfirmation.title")),n.xp6(6),n.Oqu(n.lcZ(11,5,"resetPasswordConfirmation.tokenExpired")),n.xp6(2),n.Q6J("innerHTML",n.lcZ(13,7,"resetPasswordConfirmation.backResetPassword"),n.oJD))}function Ah(l,c){1&l&&(n.ynx(0),n.TgZ(1,"div",2)(2,"div",3)(3,"h3"),n._uU(4),n.ALo(5,"translate"),n.qZA()(),n.TgZ(6,"div",4)(7,"div",15),n._UZ(8,"gv-icon",18),n.TgZ(9,"h2"),n._uU(10),n.ALo(11,"translate"),n.qZA(),n._UZ(12,"gv-button",19),n.ALo(13,"translate"),n.qZA()()(),n.BQk()),2&l&&(n.xp6(4),n.Oqu(n.lcZ(5,3,"resetPasswordConfirmation.success.title")),n.xp6(6),n.Oqu(n.lcZ(11,5,"resetPasswordConfirmation.success.message")),n.xp6(2),n.Q6J("innerHTML",n.lcZ(13,7,"resetPasswordConfirmation.backLogin"),n.oJD))}let np=(()=>{class l{constructor(s,u,v,w,U){this.usersService=s,this.formBuilder=u,this.route=v,this.tokenService=w,this.reCaptchaService=U}ngOnInit(){this.isSubmitted=!1,this.token=this.route.snapshot.paramMap.get("token"),this.userFromToken=this.tokenService.parseToken(this.token),this.isTokenExpired=this.tokenService.isParsedTokenExpired(this.userFromToken),this.resetPasswordConfirmationForm=this.formBuilder.group({firstname:new Ht.NI({value:this.userFromToken.firstname,disabled:!0}),lastname:new Ht.NI({value:this.userFromToken.lastname,disabled:!0}),email:new Ht.NI({value:this.userFromToken.email,disabled:!0}),password:new Ht.NI("",Ht.kI.required),confirmedPassword:new Ht.NI("",Ht.kI.required)}),this.resetPasswordConfirmationForm.get("confirmedPassword").setValidators([Ht.kI.required,Kl.d.sameValueValidator(this.resetPasswordConfirmationForm.get("password"))]),this.reCaptchaService.displayBadge()}onSubmitResetPasswordConfirmationForm(){if(this.resetPasswordConfirmationForm.valid&&!this.isSubmitted){const s={token:this.token,password:this.resetPasswordConfirmationForm.value.password,firstname:this.userFromToken.firstname,lastname:this.userFromToken.lastname};this.reCaptchaService.execute("reset_password_confirmation").then(()=>{this.usersService.changeUserPassword({changeUserPasswordInput:s}).toPromise().then(()=>this.isSubmitted=!0).catch(()=>{this.resetPasswordConfirmationForm.patchValue({password:"",confirmedPassword:""})})})}}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Cn.fz),n.Y36(Ht.qu),n.Y36(En.gz),n.Y36(Wl),n.Y36(Jr))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-reset-password-confirmation"]],decls:4,vars:4,consts:[[1,"page__content","form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"page__box"],[1,"page__box-title"],[1,"page__box-content"],["large","","required","","formControlName","firstname","ngDefaultControl","","gvControl","",1,"form__control",3,"label","value"],["large","","required","","formControlName","lastname","ngDefaultControl","","gvControl","",1,"form__control",3,"label","value"],["large","","required","","type","email","formControlName","email","ngDefaultControl","","gvControl","",1,"form__control",3,"label","value"],["large","","required","","type","password","formControlName","password","ngDefaultControl","","gvControl","",1,"form__control",3,"label"],["large","","required","","type","password","formControlName","confirmedPassword","ngDefaultControl","","gvControl","",1,"form__control",3,"label"],[1,"page__box-footer","form__actions","form__actions-column"],["primary","","type","submit",1,"form__control",3,"disabled"],[1,"text-center"],["link","","routerLink","/",4,"ngIf"],["link","","routerLink","/"],[1,"form__message"],["shape","home:clock"],["link","","routerLink","/user/resetPassword",3,"innerHTML"],["shape","general:smile"],["link","","routerLink","/user/login",3,"innerHTML"]],template:function(s,u){1&s&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return u.onSubmitResetPasswordConfirmationForm()}),n.YNc(1,ep,23,26,"ng-container",1),n.YNc(2,tp,14,9,"ng-container",1),n.YNc(3,Ah,14,9,"ng-container",1),n.qZA()),2&s&&(n.Q6J("formGroup",u.resetPasswordConfirmationForm),n.xp6(1),n.Q6J("ngIf",!u.isSubmitted&&!u.isTokenExpired),n.xp6(1),n.Q6J("ngIf",u.isTokenExpired),n.xp6(1),n.Q6J("ngIf",u.isSubmitted))},directives:[Ht._Y,Ht.JL,Ht.sg,tn.O5,Nn.T,Ht.Q7,Ht.JJ,Ht.u,Ht.Fj,En.rH],pipes:[ui.X$],styles:[".form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{padding:24px}.form[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]{flex-direction:column;text-align:center;align-items:stretch}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%]{align-self:center}.form[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:.2rem .2rem 1rem;box-sizing:border-box;width:100%}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 0 .2rem;align-self:flex-end}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin:0}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%]{align-content:center;align-items:center;background-color:var(--gv-theme-color);border-radius:2px;color:var(--gv-theme-font-color-light);--gv-icon--c: var(--gv-theme-font-color-light);--gv-icon--s: 100px;display:flex;flex-direction:column;font-size:var(--gv-theme-font-size-xs);justify-content:space-around;line-height:22px;padding:2rem;text-align:center}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:1rem 0}.page__box[_ngcontent-%COMP%]{max-width:30rem;margin:auto}"]}),l})();var es=d(69628);function Um(l,c){if(1&l&&n._UZ(0,"app-gv-page",2),2&l){const s=n.oxw();n.Q6J("page",s.singlePage)}}let $m=(()=>{class l{constructor(s,u,v){this.route=s,this.router=u,this.portalService=v}ngOnInit(){this.route.params.subscribe(s=>{s.pageId&&this.portalService.getPageByPageId({pageId:s.pageId}).subscribe(u=>this.singlePage=u)})}onInternalLinkClick(s){this.router.navigate(["/documentation/root"],{queryParams:{page:s}})}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(En.gz),n.Y36(En.F0),n.Y36(Cn.EA))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-single-page"]],hostBindings:function(s,u){1&s&&n.NdJ("gv-button:click",function(w){return u.onInternalLinkClick(w.srcElement.dataset.pageId)})},decls:2,vars:1,consts:[[1,"page__content"],["withToc","true",3,"page",4,"ngIf"],["withToc","true",3,"page"]],template:function(s,u){1&s&&(n.TgZ(0,"div",0),n.YNc(1,Um,1,1,"app-gv-page",1),n.qZA()),2&s&&(n.xp6(1),n.Q6J("ngIf",u.singlePage))},directives:[tn.O5,oo.G],styles:[".page__content[_ngcontent-%COMP%]{padding:var(--gv-theme-page--pt) 50px var(--gv-theme-page--pb) 50px}"]}),l})(),xh=(()=>{class l{constructor(s,u,v){this.currentUserService=s,this.router=u,this.notificationService=v}canActivate(s,u){return null!=this.currentUserService.get().getValue()||(this.router.navigate(["/user/login"],{replaceUrl:!0,queryParams:{redirectUrl:u.url}}).then(()=>this.notificationService.warning((0,yn.J)("apiSubscribe.errors.notConnected"))),!1)}}return l.\u0275fac=function(s){return new(s||l)(n.LFG(Yr.S),n.LFG(En.F0),n.LFG(Mr.g))},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();function rp(l,c){if(1&l&&(n._UZ(0,"gv-input",18),n.ALo(1,"translate"),n.ALo(2,"translate")),2&l){const s=n.oxw().$implicit;n.s9C("label",n.lcZ(1,4,"register.field."+s.key)==="register.field."+s.key?s.label:n.lcZ(2,6,"register.field."+s.key)),n.Q6J("formControlName",s.key)("name",s.key)("required",s.required)}}function sp(l,c){if(1&l&&(n._UZ(0,"gv-select",19),n.ALo(1,"translate"),n.ALo(2,"translate")),2&l){const s=n.oxw().$implicit;n.s9C("label",n.lcZ(1,5,"register.field."+s.key)==="register.field."+s.key?s.label:n.lcZ(2,7,"register.field."+s.key)),n.Q6J("options",s.values)("formControlName",s.key)("name",s.key)("required",s.required)}}function op(l,c){if(1&l&&(n.TgZ(0,"div"),n.YNc(1,rp,3,8,"gv-input",16),n.YNc(2,sp,3,9,"gv-select",17),n.qZA()),2&l){const s=c.$implicit;n.xp6(1),n.Q6J("ngIf",!s.values),n.xp6(1),n.Q6J("ngIf",s.values)}}function ap(l,c){if(1&l){const s=n.EpF();n.TgZ(0,"form",1),n.NdJ("ngSubmit",function(){return n.CHM(s),n.oxw().submit()}),n.TgZ(1,"div",2)(2,"div",3)(3,"div",4)(4,"h3",5),n._uU(5),n.ALo(6,"translate"),n.qZA()(),n.TgZ(7,"div",6)(8,"div"),n._UZ(9,"gv-file-upload",7),n.ALo(10,"translate"),n.qZA(),n.TgZ(11,"div"),n._UZ(12,"gv-input",8),n.ALo(13,"translate"),n._UZ(14,"gv-input",9),n.ALo(15,"translate"),n._UZ(16,"gv-input",10),n.ALo(17,"translate"),n.YNc(18,op,3,2,"div",11),n.qZA()()()(),n.TgZ(19,"aside",12)(20,"div",3)(21,"div",4)(22,"h4",5),n._uU(23),n.ALo(24,"translate"),n.qZA()(),n.TgZ(25,"div",13)(26,"gv-button",14),n._uU(27),n.ALo(28,"translate"),n.qZA(),n.TgZ(29,"gv-button",15),n.NdJ("gv-button:click",function(){return n.CHM(s),n.oxw().reset()}),n._uU(30),n.ALo(31,"translate"),n.qZA()()()()()}if(2&l){const s=n.oxw();n.Q6J("formGroup",s.userForm),n.xp6(5),n.Oqu(n.lcZ(6,14,"user.account.title")),n.xp6(4),n.Q6J("label",n.lcZ(10,16,"user.change_picture"))("value",s.avatar),n.xp6(3),n.s9C("label",n.lcZ(13,18,"user.first_name")),n.xp6(2),n.s9C("label",n.lcZ(15,20,"user.last_name")),n.xp6(2),n.s9C("label",n.lcZ(17,22,"user.email")),n.xp6(2),n.Q6J("ngForOf",s.customUserFields),n.xp6(5),n.Oqu(n.lcZ(24,24,"common.options")),n.xp6(3),n.Q6J("disabled",s.userForm.invalid||s.userForm.pristine)("loading",s.isSaving),n.xp6(1),n.hij(" ",n.lcZ(28,26,"common.update")," "),n.xp6(2),n.Q6J("disabled",s.userForm.pristine),n.xp6(1),n.hij(" ",n.lcZ(31,28,"common.reset")," ")}}d(71256);let lp=(()=>{class l{constructor(s,u,v,w,U,fe){this.currentUserService=s,this.userService=u,this.usersService=v,this.notificationService=w,this.formBuilder=U,this.eventService=fe,this.fields={},this.canDisplayForm=!1,this.avatarHasChanged=!1}ngOnInit(){this.subscription=this.currentUserService.get().subscribe(s=>{this.currentUser=s;const u={last_name:new Ht.NI({value:this.lastName,disabled:!this.isProfileEditable},Ht.kI.required),first_name:new Ht.NI({value:this.firstName,disabled:!this.isProfileEditable},Ht.kI.required),email:new Ht.NI({value:this.email,disabled:!this.isProfileEditable},Ht.kI.email),avatar:new Ht.NI(this.avatar)};this.currentUser.customFields?this.usersService.listCustomUserFields().toPromise().then(v=>{this.customUserFields=v,this.customUserFields&&this.customUserFields.forEach(w=>{const U=new Ht.NI("",w.required?Ht.kI.required:null);U.setValue(this.currentUser.customFields[w.key]),u[w.key]=U}),this.userForm=this.formBuilder.group(u),this.userForm.get("avatar").valueChanges.subscribe(w=>{this.eventService.dispatch(new hr.u(Yn.UPDATE_USER_AVATAR,{data:w})),this.avatarHasChanged=!0}),this.canDisplayForm=!0}):(this.userForm=this.formBuilder.group(u),this.userForm.get("avatar").valueChanges.subscribe(v=>{this.eventService.dispatch(new hr.u(Yn.UPDATE_USER_AVATAR,{data:v})),this.avatarHasChanged=!0}),this.canDisplayForm=!0)})}ngOnDestroy(){this.subscription.unsubscribe(),this.reset()}get avatar(){return this.currentUser._links?this.currentUser._links.avatar:null}get firstName(){return this.currentUser?this.currentUser.first_name:""}get lastName(){return this.currentUser?this.currentUser.last_name:""}get email(){return this.currentUser?this.currentUser.email:""}get isProfileEditable(){return!!this.currentUser&&this.currentUser.editable_profile}reset(){this.userForm.get("avatar").patchValue(this.avatar),this.userForm.get("first_name").patchValue(this.firstName),this.userForm.get("last_name").patchValue(this.lastName),this.userForm.get("email").patchValue(this.email),this.customUserFields&&this.customUserFields.forEach(s=>{this.userForm.get(s.key).setValue(this.currentUser.customFields[s.key])}),this.userForm.markAsPristine()}submit(){const s={id:this.currentUser.id,first_name:this.userForm.get("first_name").value,last_name:this.userForm.get("last_name").value,email:this.userForm.get("email").value};if(this.avatarHasChanged){const u="avatar",v=this.userForm.get(u).value;s[u]=v&&v.startsWith("http")?null:v}if(this.customUserFields&&this.customUserFields.length>0){const u={};this.customUserFields.forEach(w=>{u[w.key]=this.userForm.get(w.key).value}),s.customFields=u}this.isSaving=!0,this.userService.updateCurrentUser({userInput:s}).toPromise().then(u=>{this.currentUserService.set(u),this.notificationService.success((0,yn.J)("user.account.success"))}).finally(()=>this.isSaving=!1)}}return l.\u0275fac=function(s){return new(s||l)(n.Y36(Yr.S),n.Y36(Cn.KD),n.Y36(Cn.fz),n.Y36(Mr.g),n.Y36(Ht.qu),n.Y36(hr.P))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-user-account"]],decls:1,vars:1,consts:[["class","page__content page__content-with-aside form",3,"formGroup","ngSubmit",4,"ngIf"],[1,"page__content","page__content-with-aside","form",3,"formGroup","ngSubmit"],[1,"main"],[1,"page__box"],[1,"page__box-title"],[1,"title"],[1,"page__box-content","grid"],["name","avatar","formControlName","avatar","ngDefaultControl","","accept","image/*","except",".svg","limit","500000",3,"label","value"],["formControlName","first_name","name","first_name","ngDefaultControl","",1,"form__control",3,"label"],["formControlName","last_name","name","last_name","ngDefaultControl","",1,"form__control",3,"label"],["formControlName","email","name","email","ngDefaultControl","",1,"form__control",3,"label"],[4,"ngFor","ngForOf"],[1,"aside"],[1,"page__box-content","form__actions"],["type","submit","primary","","icon","general:save",3,"disabled","loading"],["outlined","",3,"disabled","gv-button:click"],["large","","class","form__control","type","text","autocomplete","on","ngDefaultControl","","gvControl","",3,"label","formControlName","name","required",4,"ngIf"],["large","","class","form__control","type","text","ngDefaultControl","","gvControl","",3,"options","label","formControlName","name","required",4,"ngIf"],["large","","type","text","autocomplete","on","ngDefaultControl","","gvControl","",1,"form__control",3,"label","formControlName","name","required"],["large","","type","text","ngDefaultControl","","gvControl","",1,"form__control",3,"options","label","formControlName","name","required"]],template:function(s,u){1&s&&n.YNc(0,ap,32,30,"form",0),2&s&&n.Q6J("ngIf",u.canDisplayForm)},directives:[tn.O5,Ht._Y,Ht.JL,Ht.sg,Ht.JJ,Ht.u,Ht.Fj,Nn.T,tn.sg,Ht.Q7],pipes:[ui.X$],styles:[".form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{padding:24px}.form[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]{flex-direction:column;text-align:center;align-items:stretch}.form.aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .aside[_ngcontent-%COMP%]   .form__actions[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   .form__actions-column[_ngcontent-%COMP%]   gv-confirm[_ngcontent-%COMP%]{align-self:center}.form[_ngcontent-%COMP%]   gv-input[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-text[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   gv-select[_ngcontent-%COMP%]{width:100%}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:1rem}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:.2rem .2rem 1rem;box-sizing:border-box;width:100%}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 0 .2rem;align-self:flex-end}.form[_ngcontent-%COMP%]   .form__control_inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{margin:0}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%]{align-content:center;align-items:center;background-color:var(--gv-theme-color);border-radius:2px;color:var(--gv-theme-font-color-light);--gv-icon--c: var(--gv-theme-font-color-light);--gv-icon--s: 100px;display:flex;flex-direction:column;font-size:var(--gv-theme-font-size-xs);justify-content:space-around;line-height:22px;padding:2rem;text-align:center}.form[_ngcontent-%COMP%]   .form__message[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:1rem 0}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:250px 1fr;grid-gap:2rem;min-height:300px}.form[_ngcontent-%COMP%]   .form__control[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),l})();var Eh=d(90213);class cp extends((0,Eh.k)(E.oi)){static get properties(){return{rows:{type:Number},minlength:{type:Number},maxlength:{type:Number},autosize:{type:Boolean}}}static get styles(){return[...super.styles,Hs.F,E.iv`
        .box {
          position: relative;
          line-height: 0;
        }

        /* BASE */
        .textarea {
          --fz: var(--gv-text--fz, var(--gv-theme-font-size-m, 14px));
          --tmp: var(--gv-text--lh, var(--gv-theme-font-size-m, 14px));
          --lh: calc(var(--tmp) + 3px);
          border: 1px solid var(--gv-input--bdc, var(--gv-theme-neutral-color-dark, #d9d9d9));
          box-sizing: border-box;
          border-radius: 4px;
          outline: none;
          padding: 10px 5px;
          width: 100%;
          resize: none;
          font-size: var(--fz);
          line-height: var(--lh);
        }

        div.textarea {
          white-space: pre;
        }

        textarea:disabled {
          cursor: default;
          opacity: 0.5;
        }

        textarea:required {
          box-shadow: none;
        }

        label {
          display: block;
          line-height: 15px;
          padding: 0 0 0.2rem 0;
        }

        /* Hack for FF */
        textarea {
          font-family: inherit;
        }
      `]}constructor(){super(),this.rows=10}getInputElement(){return this.shadowRoot.querySelector("textarea")}_onInput(c){this.updateState(c.target.value),this.value=c.target.value,(0,_r.h)(this,"input",this.value)}render(){const c={skeleton:this.skeleton,required:this.required,textarea:!0};if(this.readonly)return this.value||""!==this.value.trim()?E.dy`
          ${this.renderLabel()}
          <div class="${(0,si.$)(c)}" .title=${(0,Wi.o)(this.title||this.label)}>${(0,Wi.o)(this.value)}</div>
        `:"";const s=this.autosize&&this.value?this.value.split("\n").length:this.rows;return E.dy`
      <div class="box">
        ${this.renderLabel()}
        <textarea
          class="${(0,si.$)(c)}"
          id=${this._id}
          .name=${(0,Wi.o)(this.name)}
          .title=${(0,Wi.o)(this.title||this.label)}
          .required=${this.required}
          ?readonly="${this.readonly}"
          maxlength="${this.maxlength}"
          minlength="${this.minlength}"
          aria-required=${!!this.required}
          ?disabled=${this.disabled||this.skeleton}
          .placeholder=${(0,Wi.o)(this.placeholder)}
          .value=${(0,Wi.o)(this.value)}
          rows="${this.rows<s?s:this.rows}"
          @input=${this._onInput}
        ></textarea>
      </div>
    `}}window.customElements.define("gv-text",cp);class up extends((0,Eh.k)(E.oi)){static get properties(){return{disabled:{type:Boolean},skeleton:{type:Boolean},value:{type:String,reflect:!0},checked:{type:Boolean,reflect:!0},label:{type:String},title:{type:String}}}static get styles(){return[Hs.F,E.iv`
        :host {
          cursor: pointer;
          --gv-icon--c: var(--gv-theme-neutral-color-dark, #d9d9d9);
          --gv-icon--s: 30px;
        }

        .container {
          position: relative;
          height: 30px;
        }

        /* BASE */
        input {
          border: 1px solid var(--gv-theme-neutral-color-dark, #d9d9d9);
          box-sizing: border-box;
          border-radius: 4px;
          outline: none;
          padding: 10px;
          cursor: pointer;
        }

        input:disabled {
          cursor: default;
          opacity: 0.5;
        }

        label {
          cursor: pointer;
          line-height: 29px;
          padding-left: 15px;
        }

        .required > label::after {
          content: '*';
          color: var(--gv-theme-color-danger);
        }

        gv-icon {
          position: absolute;
        }

        gv-icon.checked {
          --gv-icon--s: 20px;
          background-color: var(--gv-checkbox--bgc, var(--gv-theme-color, #5a7684));
          display: inherit !important;
          margin: 5px;
          border-radius: 4px;
          height: 20px;
        }

        gv-icon:disabled {
          cursor: default;
          opacity: 0.5;
        }

        .disabled,
        .skeleton {
          cursor: default;
        }

        label abbr {
          position: absolute;
          left: 0;
          color: red;
          font-variant: none;
        }
      `]}constructor(){super(),this._type="checkbox",this.checked=!1,this.value="off"}_renderLabel(){return this.label?E.dy`<label
        class="${(0,si.$)({disabled:this.disabled,skeleton:this.skeleton,"checkbox-label":!0})}"
        title="${this.label}"
      >
        ${this.label}
      </label> `:""}_onInput(){this.disabled||this.skeleton||(this.checked=!this.checked,setTimeout(()=>{(0,_r.h)(this,"input",this.checked),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},0))}updated(c){c.has("checked")&&("off"===this.value||"on"===this.value)&&(this.value=this.checked?"on":"off")}render(){return E.dy`
      <div class=${(0,si.$)({skeleton:this.skeleton,disabled:this.disabled,required:this.required,container:!0})}>
        <gv-icon shape="design:border" @click=${this._onInput}></gv-icon>
        <gv-icon style="display: none;" @click=${this._onInput} class=${(0,si.$)({checked:this.checked})} shape="code:check"></gv-icon>
        <label @click=${this._onInput}>${this._renderLabel()}</label>
      </div>