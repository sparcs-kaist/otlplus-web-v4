import{j as s}from"./emotion-react-jsx-runtime.browser.esm-BXElLyxr.js";import"./chunk-JZWAC4HX-BlDii0WI.js";import{s as i}from"./FlexWrapper-CrS7jWNu.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"5fa9098a726ca327661c06ebba53f35af042285c"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8",e._sentryDebugIdIdentifier="sentry-dbid-402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8")}catch{}})();const r=(e,t)=>{if(typeof t=="string"&&t.includes(".")){const[n,o]=t.split("."),d=e.colors[n];if(typeof d=="object"&&o&&o in d)return d[o]}return e.colors[t]},f=i.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:t})=>r(e,t)};
`;function l({height:e=1,color:t="Line.default"}){return s(f,{height:e,color:t})}export{l as L};
//# sourceMappingURL=Line-BmfEIjok.js.map
