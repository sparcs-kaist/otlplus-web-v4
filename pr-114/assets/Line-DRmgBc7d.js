import{j as s}from"./emotion-react-jsx-runtime.browser.esm-E_cGwdOa.js";import"./chunk-JZWAC4HX-9KoC3cCy.js";import{s as i}from"./FlexWrapper-C4koUj4A.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"aa4b834b366ac0b0132f13807ce2ff4bf1de11a2"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8",e._sentryDebugIdIdentifier="sentry-dbid-402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8")}catch{}})();const f=(e,t)=>{if(typeof t=="string"&&t.includes(".")){const[n,d]=t.split("."),o=e.colors[n];if(typeof o=="object"&&d&&d in o)return o[d]}return e.colors[t]},r=i.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:t})=>f(e,t)};
`;function l({height:e=1,color:t="Line.default"}){return s(r,{height:e,color:t})}export{l as L};
//# sourceMappingURL=Line-DRmgBc7d.js.map
