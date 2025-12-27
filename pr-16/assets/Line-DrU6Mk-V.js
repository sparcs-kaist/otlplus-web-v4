import{n as s,a as r}from"./FlexWrapper-C0dsngQo.js";import"./chunk-UIGDSWPH-NakEPbl8.js";const c=(e,o)=>{if(typeof o=="string"&&o.includes(".")){const[i,t]=o.split("."),n=e.colors[i];if(typeof n=="object"&&t&&t in n)return n[t]}return e.colors[o]},a=s.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:o})=>c(e,o)};
`;function f({height:e=1,color:o="Line.default"}){return r(a,{height:e,color:o})}export{f as L};
