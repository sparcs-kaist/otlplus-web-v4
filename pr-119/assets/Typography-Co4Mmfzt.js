import{j as r}from"./emotion-react-jsx-runtime.browser.esm-D8yRFEw8.js";import{r as s}from"./chunk-JZWAC4HX-CnREc0nu.js";import{s as e}from"./FlexWrapper-COxlQPil.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"0e9eafd49ec7d215dce6f0f7067f600c1458c176"};var o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="5635935a-be4d-4beb-9973-37cf2ccc6b1a",n._sentryDebugIdIdentifier="sentry-dbid-5635935a-be4d-4beb-9973-37cf2ccc6b1a")}catch{}})();const c=(n,o)=>{if(typeof o=="string"&&o.includes(".")){const[i,f]=o.split("."),t=n.colors[i];if(typeof t=="object"&&f&&f in t)return t[f]}return n.colors[o]},d=e.div`
    color: ${({color:n,theme:o})=>n?c(o,n):"inherit"};
    font-family: ${({theme:n})=>n.fonts.family.primary};
    font-size: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontSize"in o.fonts[n]?`${o.fonts[n].fontSize}px`:"inherit"};
    font-weight: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontWeight"in o.fonts[n]?o.fonts[n].fontWeight:"inherit"};
    line-height: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"lineHeight"in o.fonts[n]?`${o.fonts[n].lineHeight}px`:"inherit"};
`,a=({children:n,...o})=>r(d,{...o,children:n}),g=s.memo(a);export{g as T};
//# sourceMappingURL=Typography-Co4Mmfzt.js.map
