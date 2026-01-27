import{j as f}from"./emotion-react-jsx-runtime.browser.esm-DiZNoiz5.js";import{r as s}from"./chunk-JZWAC4HX-D402S-HY.js";import{n as e}from"./FlexWrapper-C_514bV4.js";const a=(o,n)=>{if(typeof n=="string"&&n.includes(".")){const[i,t]=n.split("."),r=o.colors[i];if(typeof r=="object"&&t&&t in r)return r[t]}return o.colors[n]},c=e.div`
    color: ${({color:o,theme:n})=>o?a(n,o):"inherit"};
    font-family: ${({theme:o})=>o.fonts.family.primary};
    font-size: ${({type:o,theme:n})=>o&&n.fonts[o]&&typeof n.fonts[o]=="object"&&"fontSize"in n.fonts[o]?`${n.fonts[o].fontSize}px`:"inherit"};
    font-weight: ${({type:o,theme:n})=>o&&n.fonts[o]&&typeof n.fonts[o]=="object"&&"fontWeight"in n.fonts[o]?n.fonts[o].fontWeight:"inherit"};
    line-height: ${({type:o,theme:n})=>o&&n.fonts[o]&&typeof n.fonts[o]=="object"&&"lineHeight"in n.fonts[o]?`${n.fonts[o].lineHeight}px`:"inherit"};
`,l=({children:o,...n})=>f(c,{...n,children:o}),$=s.memo(l);export{$ as T};
//# sourceMappingURL=Typography-BYoFSqcB.js.map
