import{j as i}from"./emotion-react-jsx-runtime.browser.esm-B-zamEU7.js";import{r}from"./chunk-EPOLDU6W-zmgMqoXq.js";import{n as s}from"./FlexWrapper-Cxmg7ETU.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};n.SENTRY_RELEASE={id:"ada4c7999b6ed5c9c18808775724ee3dffa94ca2"}}catch{}})();try{(function(){var n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="bc08a164-7996-48da-8dbd-2c120eaf4552",n._sentryDebugIdIdentifier="sentry-dbid-bc08a164-7996-48da-8dbd-2c120eaf4552")})()}catch{}const d=(n,o)=>{if(typeof o=="string"&&o.includes(".")){const[t,e]=o.split("."),f=n.colors[t];if(typeof f=="object"&&e&&e in f)return f[e]}return n.colors[o]},a=s.div`
    color: ${({color:n,theme:o})=>n?d(o,n):"inherit"};
    font-family: ${({theme:n})=>n.fonts.family.primary};
    font-size: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontSize"in o.fonts[n]?`${o.fonts[n].fontSize}px`:"inherit"};
    font-weight: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"fontWeight"in o.fonts[n]?o.fonts[n].fontWeight:"inherit"};
    line-height: ${({type:n,theme:o})=>n&&o.fonts[n]&&typeof o.fonts[n]=="object"&&"lineHeight"in o.fonts[n]?`${o.fonts[n].lineHeight}px`:"inherit"};
`,l=({children:n,...o})=>i(a,{...o,children:n}),g=r.memo(l);export{g as T};
//# sourceMappingURL=Typography-DoXk6ZeF.js.map
