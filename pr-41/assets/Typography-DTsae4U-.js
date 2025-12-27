import{n as r,a as s}from"./FlexWrapper-C0dsngQo.js";import{a}from"./chunk-UIGDSWPH-NakEPbl8.js";const e=(o,n)=>{if(typeof n=="string"&&n.includes(".")){const[f,t]=n.split("."),i=o.colors[f];if(typeof i=="object"&&t&&t in i)return i[t]}return o.colors[n]},c=r.div`
    color: ${({color:o,theme:n})=>o?e(n,o):"inherit"};
    font-family: ${({theme:o})=>o.fonts.family.primary};
    font-size: ${({type:o,theme:n})=>o&&n.fonts[o]&&typeof n.fonts[o]=="object"&&"fontSize"in n.fonts[o]?`${n.fonts[o].fontSize}px`:"inherit"};
    font-weight: ${({type:o,theme:n})=>o&&n.fonts[o]&&typeof n.fonts[o]=="object"&&"fontWeight"in n.fonts[o]?n.fonts[o].fontWeight:"inherit"};
    line-height: ${({type:o,theme:n})=>o&&n.fonts[o]&&typeof n.fonts[o]=="object"&&"lineHeight"in n.fonts[o]?`${n.fonts[o].lineHeight}px`:"inherit"};
`,l=({children:o,...n})=>s(c,{...n,children:o}),$=a.memo(l);export{$ as T};
