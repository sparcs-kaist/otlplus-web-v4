import{r as d,a as M}from"./chunk-UIGDSWPH-C2ktfSeF.js";import{j as T}from"./emotion-react-jsx-runtime.browser.esm-B1jPEyiZ.js";import{n as x}from"./FlexWrapper-BDdwpRDn.js";const G=(e,t,o,i)=>{const r=[o,{code:t,...i||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(r,"warn","react-i18next::",!0);k(r[0])&&(r[0]=`react-i18next:: ${r[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...r):console?.warn&&console.warn(...r)},O={},U=(e,t,o,i)=>{k(o)&&O[o]||(k(o)&&(O[o]=new Date),G(e,t,o,i))},_=(e,t)=>()=>{if(e.isInitialized)t();else{const o=()=>{setTimeout(()=>{e.off("initialized",o)},0),t()};e.on("initialized",o)}},R=(e,t,o)=>{e.loadNamespaces(t,_(e,o))},j=(e,t,o,i)=>{if(k(o)&&(o=[o]),e.options.preload&&e.options.preload.indexOf(t)>-1)return R(e,o,i);o.forEach(r=>{e.options.ns.indexOf(r)<0&&e.options.ns.push(r)}),e.loadLanguages(t,_(e,i))},P=(e,t,o={})=>!t.languages||!t.languages.length?(U(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0):t.hasLoadedNamespace(e,{lng:o.lng,precheck:(i,r)=>{if(o.bindI18n&&o.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!r(i.isLanguageChangingTo,e))return!1}}),k=e=>typeof e=="string",K=e=>typeof e=="object"&&e!==null,V=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,X={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Y=e=>X[e],J=e=>e.replace(V,Y);let L={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:J};const ke=(e={})=>{L={...L,...e}},Q=()=>L;let A;const $e=e=>{A=e},Z=()=>A,ee=d.createContext();class te{constructor(){this.usedNamespaces={}}addUsedNamespaces(t){t.forEach(o=>{this.usedNamespaces[o]||(this.usedNamespaces[o]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var I={exports:{}},C={};var z;function ne(){if(z)return C;z=1;var e=M();function t(a,c){return a===c&&(a!==0||1/a===1/c)||a!==a&&c!==c}var o=typeof Object.is=="function"?Object.is:t,i=e.useState,r=e.useEffect,n=e.useLayoutEffect,f=e.useDebugValue;function S(a,c){var h=c(),v=i({inst:{value:h,getSnapshot:c}}),m=v[0].inst,b=v[1];return n(function(){m.value=h,m.getSnapshot=c,p(m)&&b({inst:m})},[a,h,c]),r(function(){return p(m)&&b({inst:m}),a(function(){p(m)&&b({inst:m})})},[a]),f(h),h}function p(a){var c=a.getSnapshot;a=a.value;try{var h=c();return!o(a,h)}catch{return!0}}function l(a,c){return c()}var B=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?l:S;return C.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:B,C}var H;function oe(){return H||(H=1,I.exports=ne()),I.exports}var re=oe();const se=(e,t)=>k(t)?t:K(t)&&k(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,ae={t:se,ready:!1},ie=()=>()=>{},we=(e,t={})=>{const{i18n:o}=t,{i18n:i,defaultNS:r}=d.useContext(ee)||{},n=o||i||Z();n&&!n.reportNamespaces&&(n.reportNamespaces=new te),n||U(n,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const f=d.useMemo(()=>({...Q(),...n?.options?.react,...t}),[n,t]),{useSuspense:S,keyPrefix:p}=f,l=d.useMemo(()=>{const s=r||n?.options?.defaultNS;return k(s)?[s]:s||["translation"]},[e,r,n]);n?.reportNamespaces?.addUsedNamespaces?.(l);const B=d.useRef(0),a=d.useCallback(s=>{if(!n)return ie;const{bindI18n:u,bindI18nStore:y}=f,g=()=>{B.current+=1,s()};return u&&n.on(u,g),y&&n.store.on(y,g),()=>{u&&u.split(" ").forEach(N=>n.off(N,g)),y&&y.split(" ").forEach(N=>n.store.off(N,g))}},[n,f]),c=d.useRef(),h=d.useCallback(()=>{if(!n)return ae;const s=!!(n.isInitialized||n.initializedStoreOnce)&&l.every(W=>P(W,n,f)),u=t.lng||n.language,y=B.current,g=c.current;if(g&&g.ready===s&&g.lng===u&&g.keyPrefix===p&&g.revision===y)return g;const F={t:n.getFixedT(u,f.nsMode==="fallback"?l:l[0],p),ready:s,lng:u,keyPrefix:p,revision:y};return c.current=F,F},[n,l,p,f,t.lng]),[v,m]=d.useState(0),{t:b,ready:$}=re.useSyncExternalStore(a,h,h);d.useEffect(()=>{if(n&&!$&&!S){const s=()=>m(u=>u+1);t.lng?j(n,t.lng,l,s):R(n,l,s)}},[n,t.lng,l,$,S,v]);const E=n||{},D=d.useMemo(()=>{const s=[b,E,$];return s.t=b,s.i18n=E,s.ready=$,s},[b,E,$]);if(n&&S&&!$)throw new Promise(s=>{const u=()=>s();t.lng?j(n,t.lng,l,u):R(n,l,u)});return D},w=x.div`
    display: inline-flex;
    padding: ${e=>`${e.$paddingTop}px ${e.$paddingLeft}px`};
    justify-content: center;
    width: ${e=>e.$isFlexRow?"100%":"fit-content"};
    height: ${e=>e.$isFlexColumn?"100%":"fit-content"};
    align-items: center;
    border-radius: 6px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    font-weight: ${({theme:e})=>e.fonts.Normal.fontWeight};
    line-height: 17.5px;
    font-weight: 400;
    white-space: nowrap;
`,ce=x(w)`
    color: ${({theme:e})=>e.colors.Text.placeholder};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ue=x(w)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,le=x(w)`
    color: ${({theme:e})=>e.colors.Text.disable};
    background: ${({theme:e})=>e.colors.Background.Block.default};
    cursor: not-allowed;
`,de=x(w)`
    color: ${({theme:e})=>e.colors.Text.placeholder};
    background: ${({theme:e})=>e.colors.Background.Button.dark};
    cursor: pointer;
    &:hover {
        background: ${({theme:e})=>e.colors.Background.Block.darker};
    }
`,fe=x(w)`
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:e})=>e.colors.Highlight.dark};
    }
`,ge=x(w)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Block.darker};
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
`,pe={default:ce,disabled:le,selected:ue,dark:de,highlighted:fe,state5:ge},he=x.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
`,me=e=>T(he,{children:e}),xe=({type:e="default",$isFlexRow:t=!1,$isFlexColumn:o=!1,children:i=void 0,$paddingLeft:r=24,$paddingTop:n=9,...f})=>{const S=pe[e],p=()=>me(i);return T(S,{...f,onClick:e==="disabled"?void 0:f.onClick,$isFlexRow:t??!1,$isFlexColumn:o??!1,$paddingTop:n??9,$paddingLeft:r??24,children:T(p,{})})},ve=d.memo(xe),q={mobile:720,tablet:960,laptop:1440,desktop:1700,wide:1/0},Be=Object.keys(q).reduce((e,t)=>{const o=t;return e[o]=`@media (max-width: ${q[o]}px)`,e},{});export{ve as B,ee as I,$e as a,q as b,Q as c,G as d,K as e,Z as g,k as i,Be as m,ke as s,we as u,U as w};
//# sourceMappingURL=media-ipby3jlC.js.map
