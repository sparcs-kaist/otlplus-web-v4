import{j as i}from"./emotion-react-jsx-runtime.browser.esm-8xALLokb.js";import{r}from"./chunk-EPOLDU6W-Bd0C7ljQ.js";import{n as s}from"./FlexWrapper-CFnkfq6R.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"e83a6e0b92460bbba31e6bf5b6b1ea2a0857dfba"}}catch{}})();try{(function(){var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="6f668d62-de98-4654-bc51-e9058abdda63",n._sentryDebugIdIdentifier="sentry-dbid-6f668d62-de98-4654-bc51-e9058abdda63")})()}catch{}const d=(n,o)=>{if(typeof o=="string"&&o.includes(".")){const[t,e]=o.split("."),f=n.colors[t];if(typeof f=="object"&&e&&e in f)return f[e]}return n.colors[o]},a=s.div`
    color: ${({color:n,theme:o})=>n?d(o,n):"inherit"};
    font-family: ${({theme:n})=>n.fonts.family.primary};
    font-size: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontSize"in o.fonts[n]?`${o.fonts[n].fontSize}px`:"inherit"};
    font-weight: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontWeight"in o.fonts[n]?o.fonts[n].fontWeight:"inherit"};
    line-height: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"lineHeight"in o.fonts[n]?`${o.fonts[n].lineHeight}px`:"inherit"};
`,l=({children:n,...o})=>i(a,{...o,children:n}),g=r.memo(l);export{g as T};
//# sourceMappingURL=Typography-DFI1w2GG.js.map
