import{j as s}from"./emotion-react-jsx-runtime.browser.esm-CsETgYDA.js";import"./chunk-JZWAC4HX-BhbM5C76.js";import{s as i}from"./FlexWrapper-CkAYkvrm.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"50028f4e6a00984e0505e566815bed964fcaa8c1"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8",e._sentryDebugIdIdentifier="sentry-dbid-402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8")}catch{}})();const r=(e,t)=>{if(typeof t=="string"&&t.includes(".")){const[n,d]=t.split("."),o=e.colors[n];if(typeof o=="object"&&d&&d in o)return o[d]}return e.colors[t]},f=i.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:t})=>r(e,t)};
`;function u({height:e=1,color:t="Line.default"}){return s(f,{height:e,color:t})}export{u as L};
//# sourceMappingURL=Line-CcaY6zVj.js.map
