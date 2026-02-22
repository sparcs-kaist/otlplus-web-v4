import{j as s}from"./emotion-react-jsx-runtime.browser.esm-B5Mzfpnp.js";import"./chunk-JZWAC4HX-Dli3OiYn.js";import{s as i}from"./FlexWrapper-BAjXYuYd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"66edb5d634d1bce1a87eb1662822c9e9345d91bf"};var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8",e._sentryDebugIdIdentifier="sentry-dbid-402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8")}catch{}})();const r=(e,d)=>{if(typeof d=="string"&&d.includes(".")){const[n,t]=d.split("."),o=e.colors[n];if(typeof o=="object"&&t&&t in o)return o[t]}return e.colors[d]},f=i.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:d})=>r(e,d)};
`;function l({height:e=1,color:d="Line.default"}){return s(f,{height:e,color:d})}export{l as L};
//# sourceMappingURL=Line-D3JLbOFK.js.map
