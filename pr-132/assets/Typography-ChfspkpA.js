import{j as r}from"./emotion-react-jsx-runtime.browser.esm-CEuHzFsl.js";import{r as s}from"./chunk-JZWAC4HX-CLyBVW00.js";import{s as e}from"./FlexWrapper-BKgRhobj.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"1f66a93a2e73ddc5421829c6c9db82df82d87106"};var o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="5635935a-be4d-4beb-9973-37cf2ccc6b1a",n._sentryDebugIdIdentifier="sentry-dbid-5635935a-be4d-4beb-9973-37cf2ccc6b1a")}catch{}})();const d=(n,o)=>{if(typeof o=="string"&&o.includes(".")){const[i,t]=o.split("."),f=n.colors[i];if(typeof f=="object"&&t&&t in f)return f[t]}return n.colors[o]},c=e.div`
    color: ${({color:n,theme:o})=>n?d(o,n):"inherit"};
    font-family: ${({theme:n})=>n.fonts.family.primary};
    font-size: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontSize"in o.fonts[n]?`${o.fonts[n].fontSize}px`:"inherit"};
    font-weight: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontWeight"in o.fonts[n]?o.fonts[n].fontWeight:"inherit"};
    line-height: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"lineHeight"in o.fonts[n]?`${o.fonts[n].lineHeight}px`:"inherit"};
`,a=({children:n,...o})=>r(c,{...o,children:n}),g=s.memo(a);export{g as T};
//# sourceMappingURL=Typography-ChfspkpA.js.map
