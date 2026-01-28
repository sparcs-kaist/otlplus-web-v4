import{j as r}from"./emotion-react-jsx-runtime.browser.esm-CDSRZb9c.js";import"./chunk-EPOLDU6W-B8pbzjzn.js";import{n as s}from"./FlexWrapper-B3ayG6XS.js";const c=(e,o)=>{if(typeof o=="string"&&o.includes(".")){const[n,t]=o.split("."),i=e.colors[n];if(typeof i=="object"&&t&&t in i)return i[t]}return e.colors[o]},f=s.div`
    width: 100%;
    height: ${e=>e.height}px;
    background: ${({theme:e,color:o})=>c(e,o)};
`;function d({height:e=1,color:o="Line.default"}){return r(f,{height:e,color:o})}export{d as L};
//# sourceMappingURL=Line-BVB2BAgM.js.map
