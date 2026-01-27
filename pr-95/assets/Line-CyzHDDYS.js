import{j as r}from"./emotion-react-jsx-runtime.browser.esm-DiZNoiz5.js";import"./chunk-JZWAC4HX-D402S-HY.js";import{n as s}from"./FlexWrapper-C_514bV4.js";const c=(e,o)=>{if(typeof o=="string"&&o.includes(".")){const[n,t]=o.split("."),i=e.colors[n];if(typeof i=="object"&&t&&t in i)return i[t]}return e.colors[o]},f=s.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:o})=>c(e,o)};
`;function d({height:e=1,color:o="Line.default"}){return r(f,{height:e,color:o})}export{d as L};
//# sourceMappingURL=Line-CyzHDDYS.js.map
