(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`15c94b7f347b234d0ab36a8121128687b095ea64`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`c580dd92-8316-4888-8a72-51af41af0e48`,e._sentryDebugIdIdentifier=`sentry-dbid-c580dd92-8316-4888-8a72-51af41af0e48`)}catch{}})();import{s as e,t}from"./jsx-runtime-CK6NBBXr.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-Uvrv3qxE.js";import{n as i,t as a}from"./FlexWrapper-BJDs3OCb.js";import{m as o}from"./useAPI-Cb2b9Uhn.js";import{r as s}from"./Icon-qc63pjI1.js";import{t as c}from"./Typography-FxUUkKmF.js";var l=e(t(),1),u=s((0,l.jsx)(`path`,{d:`M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2`}),`Circle`),d=i(a)`
    width: ${({$fluid:e})=>e?`100%`:`300px`};
    max-width: 300px;
    padding: ${({$compact:e})=>e?`10px 0`:`10px`};
`,f=i(a)`
    flex: 1 0 0;
    ${({$compact:e})=>e&&`
        height: 29px;
        > * { flex-shrink: 0; }
        > :first-child { margin-top: -5px; }
        > :last-child { margin-top: -3px; }
    `}
`;function p({averageGrade:e,averageLoad:t,averageSpeech:i,reviewCount:a,labels:s,fluid:l=!1,compact:u=!1}){let p=[[o(e,a),s.grade],[o(t,a),s.load],[o(i,a),s.speech]];return n(d,{direction:`row`,gap:0,justify:`space-between`,align:`center`,$fluid:l,$compact:u,children:p.map(([e,t])=>r(f,{direction:`column`,gap:0,align:`center`,$compact:u,children:[n(c,{type:`Bigger`,color:`Text.default`,children:e}),n(c,{type:`Smaller`,color:`Text.default`,children:t})]},t))})}export{u as n,p as t};
//# sourceMappingURL=ReviewScoreSummary-BkL-kSth.js.map