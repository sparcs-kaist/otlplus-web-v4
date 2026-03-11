import{j as s}from"./emotion-react-jsx-runtime.browser.esm-B04tSmZ7.js";import"./chunk-JZWAC4HX-BG8b0CgS.js";import{s as i}from"./FlexWrapper-DdOQMFAO.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"5e4333e7b1520939dcf8bab470e0cf9798e35236"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8",e._sentryDebugIdIdentifier="sentry-dbid-402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8")}catch{}})();const r=(e,t)=>{if(typeof t=="string"&&t.includes(".")){const[n,d]=t.split("."),o=e.colors[n];if(typeof o=="object"&&d&&d in o)return o[d]}return e.colors[t]},f=i.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:t})=>r(e,t)};
`;function l({height:e=1,color:t="Line.default"}){return s(f,{height:e,color:t})}export{l as L};
//# sourceMappingURL=Line-ChHjkLpu.js.map
