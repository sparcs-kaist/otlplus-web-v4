import{j as r}from"./emotion-react-jsx-runtime.browser.esm-2CxRnpLU.js";import{r as s}from"./chunk-JZWAC4HX-aHW4xuLB.js";import{s as e}from"./FlexWrapper-BhlFWUYb.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"0c307a80d292f940648dd587fddb147efe74509f"};var o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="5635935a-be4d-4beb-9973-37cf2ccc6b1a",n._sentryDebugIdIdentifier="sentry-dbid-5635935a-be4d-4beb-9973-37cf2ccc6b1a")}catch{}})();const d=(n,o)=>{if(typeof o=="string"&&o.includes(".")){const[i,f]=o.split("."),t=n.colors[i];if(typeof t=="object"&&f&&f in t)return t[f]}return n.colors[o]},a=e.div`
    color: ${({color:n,theme:o})=>n?d(o,n):"inherit"};
    font-family: ${({theme:n})=>n.fonts.family.primary};
    font-size: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontSize"in o.fonts[n]?`${o.fonts[n].fontSize}px`:"inherit"};
    font-weight: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontWeight"in o.fonts[n]?o.fonts[n].fontWeight:"inherit"};
    line-height: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"lineHeight"in o.fonts[n]?`${o.fonts[n].lineHeight}px`:"inherit"};
`,c=({children:n,...o})=>r(a,{...o,children:n}),g=s.memo(c);export{g as T};
//# sourceMappingURL=Typography-DJFtumZv.js.map
