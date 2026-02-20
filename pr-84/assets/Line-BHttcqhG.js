import{j as s}from"./emotion-react-jsx-runtime.browser.esm-DzILzxJd.js";import"./chunk-JZWAC4HX-D9FDeyGU.js";import{s as i}from"./FlexWrapper-BEjzgVW0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"e2ce852e0675033d5693314e7a86a2e2b1122891"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8",e._sentryDebugIdIdentifier="sentry-dbid-402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8")}catch{}})();const r=(e,t)=>{if(typeof t=="string"&&t.includes(".")){const[n,d]=t.split("."),o=e.colors[n];if(typeof o=="object"&&d&&d in o)return o[d]}return e.colors[t]},f=i.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:t})=>r(e,t)};
`;function b({height:e=1,color:t="Line.default"}){return s(f,{height:e,color:t})}export{b as L};
//# sourceMappingURL=Line-BHttcqhG.js.map
