import{j as i}from"./emotion-react-jsx-runtime.browser.esm-COBF2Dqe.js";import{r}from"./chunk-EPOLDU6W-DwUNnp0U.js";import{n as s}from"./FlexWrapper-DZKJEIiT.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"4aa08ee94c808d2da2e9c2f7c437deebb8c9aa16"}}catch{}})();try{(function(){var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="b06a3a19-279b-46c8-8f22-1c45a32cef44",n._sentryDebugIdIdentifier="sentry-dbid-b06a3a19-279b-46c8-8f22-1c45a32cef44")})()}catch{}const a=(n,o)=>{if(typeof o=="string"&&o.includes(".")){const[t,e]=o.split("."),f=n.colors[t];if(typeof f=="object"&&e&&e in f)return f[e]}return n.colors[o]},d=s.div`
    color: ${({color:n,theme:o})=>n?a(o,n):"inherit"};
    font-family: ${({theme:n})=>n.fonts.family.primary};
    font-size: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontSize"in o.fonts[n]?`${o.fonts[n].fontSize}px`:"inherit"};
    font-weight: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontWeight"in o.fonts[n]?o.fonts[n].fontWeight:"inherit"};
    line-height: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"lineHeight"in o.fonts[n]?`${o.fonts[n].lineHeight}px`:"inherit"};
`,l=({children:n,...o})=>i(d,{...o,children:n}),g=r.memo(l);export{g as T};
//# sourceMappingURL=Typography-BtY4k0h0.js.map
