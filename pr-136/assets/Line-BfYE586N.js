import{j as s}from"./emotion-react-jsx-runtime.browser.esm-DyuFTOrN.js";import"./chunk-JZWAC4HX-DX4n3vr-.js";import{s as i}from"./FlexWrapper-BeuVXekM.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"1d432c4d142ce95ce6d31bc2c2d720309c7c668a"};var d=new e.Error().stack;d&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[d]="402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8",e._sentryDebugIdIdentifier="sentry-dbid-402a0d3c-b4e7-47f4-9770-0bd2de6e3ae8")}catch{}})();const r=(e,d)=>{if(typeof d=="string"&&d.includes(".")){const[n,t]=d.split("."),o=e.colors[n];if(typeof o=="object"&&t&&t in o)return o[t]}return e.colors[d]},c=i.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:d})=>r(e,d)};
`;function u({height:e=1,color:d="Line.default"}){return s(c,{height:e,color:d})}export{u as L};
//# sourceMappingURL=Line-BfYE586N.js.map
