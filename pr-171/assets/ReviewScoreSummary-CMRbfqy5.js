(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`dcefa0769a805f4261e0d511659f422639ab57ff`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`50d115d8-2ab0-4597-bea1-b4a0b193c6c4`,e._sentryDebugIdIdentifier=`sentry-dbid-50d115d8-2ab0-4597-bea1-b4a0b193c6c4`)}catch{}})();import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-D47hxkGA.js";import{n,t as r}from"./FlexWrapper-DeN9zm6c.js";import{m as i}from"./useAPI-BpGK5Wli.js";import{t as a}from"./Typography-Do67W5tZ.js";var o=n(r)`
    width: ${({$fluid:e})=>e?`100%`:`300px`};
    max-width: 300px;
    padding: ${({$compact:e})=>e?`10px 0`:`10px`};
`,s=n(r)`
    flex: 1 0 0;
    ${({$compact:e})=>e&&`
        height: 29px;
        > * { flex-shrink: 0; }
        > :first-child { margin-top: -5px; }
        > :last-child { margin-top: -3px; }
    `}
`;function c({averageGrade:n,averageLoad:r,averageSpeech:c,reviewCount:l,labels:u,fluid:d=!1,compact:f=!1}){let p=[[i(n,l),u.grade],[i(r,l),u.load],[i(c,l),u.speech]];return e(o,{direction:`row`,gap:0,justify:`space-between`,align:`center`,$fluid:d,$compact:f,children:p.map(([n,r])=>t(s,{direction:`column`,gap:0,align:`center`,$compact:f,children:[e(a,{type:`Bigger`,color:`Text.default`,children:n}),e(a,{type:`Smaller`,color:`Text.default`,children:r})]},r))})}export{c as t};
//# sourceMappingURL=ReviewScoreSummary-CMRbfqy5.js.map