import{j as i}from"./emotion-react-jsx-runtime.browser.esm-3iAI1-2z.js";import{r}from"./chunk-EPOLDU6W-BWW_yciW.js";import{n as s}from"./FlexWrapper-C8kJQqM4.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"3dd76d336057ee704859715f34ecd92ac1bad066"}}catch{}})();try{(function(){var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="b06a3a19-279b-46c8-8f22-1c45a32cef44",n._sentryDebugIdIdentifier="sentry-dbid-b06a3a19-279b-46c8-8f22-1c45a32cef44")})()}catch{}const d=(n,o)=>{if(typeof o=="string"&&o.includes(".")){const[t,f]=o.split("."),e=n.colors[t];if(typeof e=="object"&&f&&f in e)return e[f]}return n.colors[o]},a=s.div`
    color: ${({color:n,theme:o})=>n?d(o,n):"inherit"};
    font-family: ${({theme:n})=>n.fonts.family.primary};
    font-size: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontSize"in o.fonts[n]?`${o.fonts[n].fontSize}px`:"inherit"};
    font-weight: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontWeight"in o.fonts[n]?o.fonts[n].fontWeight:"inherit"};
    line-height: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"lineHeight"in o.fonts[n]?`${o.fonts[n].lineHeight}px`:"inherit"};
`,l=({children:n,...o})=>i(a,{...o,children:n}),g=r.memo(l);export{g as T};
//# sourceMappingURL=Typography-dii1uYzL.js.map
