import{j as r}from"./emotion-react-jsx-runtime.browser.esm-DpArgMH6.js";import{r as s}from"./chunk-JZWAC4HX-BfHXDH07.js";import{s as e}from"./FlexWrapper-j_G0N1r3.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"c9c2935be2a201390aa1c4fd568ab74452e8fc50"};var o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="5635935a-be4d-4beb-9973-37cf2ccc6b1a",n._sentryDebugIdIdentifier="sentry-dbid-5635935a-be4d-4beb-9973-37cf2ccc6b1a")}catch{}})();const a=(n,o)=>{if(typeof o=="string"&&o.includes(".")){const[i,t]=o.split("."),f=n.colors[i];if(typeof f=="object"&&t&&t in f)return f[t]}return n.colors[o]},c=e.div`
    color: ${({color:n,theme:o})=>n?a(o,n):"inherit"};
    font-family: ${({theme:n})=>n.fonts.family.primary};
    font-size: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontSize"in o.fonts[n]?`${o.fonts[n].fontSize}px`:"inherit"};
    font-weight: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontWeight"in o.fonts[n]?o.fonts[n].fontWeight:"inherit"};
    line-height: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"lineHeight"in o.fonts[n]?`${o.fonts[n].lineHeight}px`:"inherit"};
`,d=({children:n,...o})=>r(c,{...o,children:n}),g=s.memo(d);export{g as T};
//# sourceMappingURL=Typography-CRt8ZcRN.js.map
