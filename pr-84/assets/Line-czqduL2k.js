import{j as s}from"./emotion-react-jsx-runtime.browser.esm-B-tD1Xnt.js";import"./chunk-JZWAC4HX-Blt-YpAy.js";import{s as i}from"./FlexWrapper-D6pJsd3i.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"9974839f2b63c8af5735056dc1e5f848583a0df3"};var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8",e._sentryDebugIdIdentifier="sentry-dbid-402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8")}catch{}})();const f=(e,d)=>{if(typeof d=="string"&&d.includes(".")){const[n,t]=d.split("."),o=e.colors[n];if(typeof o=="object"&&t&&t in o)return o[t]}return e.colors[d]},r=i.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:d})=>f(e,d)};
`;function u({height:e=1,color:d="Line.default"}){return s(r,{height:e,color:d})}export{u as L};
//# sourceMappingURL=Line-czqduL2k.js.map
