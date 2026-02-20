import{u as n,j as t}from"./emotion-react-jsx-runtime.browser.esm-BkQGdiC-.js";import{s as r}from"./FlexWrapper-CqZEbmNr.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};d.SENTRY_RELEASE={id:"cd61e8cbd077489d354d385d242852c757690997"};var e=new d.Error().stack;e&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[e]="14bb4143-3edd-4231-a5a3-8d050a6303cc",d._sentryDebugIdIdentifier="sentry-dbid-14bb4143-3edd-4231-a5a3-8d050a6303cc")}catch{}})();const o=r.div`
    width: 100%;
    height: 1px;
    background: ${({color:d})=>d};
`,s=r.div`
    width: 1px;
    background: ${({color:d})=>d};
    align-self: stretch;
`,l=({direction:d="row",color:e})=>{const i=n();return d=="row"?t(o,{color:e||i.colors.Line.divider}):t(s,{color:e||i.colors.Line.divider})};export{l as S};
//# sourceMappingURL=StyledDivider-DjJsS-VA.js.map
