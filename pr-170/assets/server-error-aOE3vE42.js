(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b6f5295eb01b6f9b62c55f3becfc83a2448edba3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`8b67b783-23b8-4150-8563-3837da0d3e40`,e._sentryDebugIdIdentifier=`sentry-dbid-8b67b783-23b8-4150-8563-3837da0d3e40`)}catch{}})();import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-Cnk_Aq3J.js";import{A as n,O as r}from"./chunk-62JRHF6Z-BqbRoCcB.js";import{t as i}from"./emotion-styled.browser.esm-BrBV03_t.js";import{t as a}from"./useTranslation-DcVxXeFP.js";import{t as o}from"./Typography-BmW4OtQd.js";import{t as s}from"./FlexWrapper-Dj4SbSah.js";import{t as c}from"./Button-BBkgXKOA.js";import{t as l}from"./media-CH25req8.js";var u=i.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,d=i(s)`
    max-width: 400px;
    width: 100%;
`,f=i.img`
    width: 120px;
    height: auto;
    margin-bottom: 16px;

    ${l.mobile} {
        width: 100px;
    }
`,p=i(o)`
    text-align: center;
`,m=i(o)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`,h=i(s)`
    width: 100%;
    max-width: 280px;
`,g=n(function(){let{t:n}=a(),i=r();return e(u,{children:t(d,{direction:`column`,align:`center`,justify:`center`,gap:32,children:[t(s,{direction:`column`,align:`center`,gap:16,children:[e(f,{src:`/otlplus-web-v4/pr-170/headerIcon.png`,alt:`OTL Logo`}),t(s,{direction:`column`,align:`center`,gap:8,children:[e(o,{type:`BiggerBold`,color:`Highlight.default`,children:n(`common.serverError.title`)}),e(p,{type:`Big`,color:`Text.dark`,children:n(`common.serverError.apology`)})]}),e(m,{type:`Normal`,color:`Text.light`,children:n(`common.serverError.description`)})]}),t(h,{direction:`column`,align:`center`,gap:12,children:[e(c,{type:`highlighted`,onClick:()=>{window.location.reload()},$isFlexRow:!0,children:e(o,{type:`Normal`,color:`Text.bright`,children:n(`common.serverError.retry`)})}),e(c,{type:`default`,onClick:()=>{i(`/`)},$isFlexRow:!0,children:e(o,{type:`Normal`,children:n(`common.serverError.goHome`)})})]})]})})});export{g as default};
//# sourceMappingURL=server-error-aOE3vE42.js.map