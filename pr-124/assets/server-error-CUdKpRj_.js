(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`1e235c7482a2d14265b30f6cd2a577d8898f6216`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`27a16a9f-0ab1-44f9-9106-c84decac9e25`,e._sentryDebugIdIdentifier=`sentry-dbid-27a16a9f-0ab1-44f9-9106-c84decac9e25`)}catch{}})();import{A as e,O as t}from"./chunk-QFMPRPBF-DTR9SThs.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-BcGJ8LHJ.js";import{n as i,t as a}from"./FlexWrapper-Bleoljuc.js";import{t as o}from"./useTranslation-D3bLxXFY.js";import{t as s}from"./Typography-D3XtmRR3.js";import{t as c}from"./Button-Id4NNNB0.js";import{t as l}from"./media-DbDR-Sgp.js";var u=i.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,d=i(a)`
    max-width: 400px;
    width: 100%;
`,f=i.img`
    width: 120px;
    height: auto;
    margin-bottom: 16px;

    ${l.mobile} {
        width: 100px;
    }
`,p=i(s)`
    text-align: center;
`,m=i(s)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`,h=i(a)`
    width: 100%;
    max-width: 280px;
`,g=e(function(){let{t:e}=o(),i=t();return n(u,{children:r(d,{direction:`column`,align:`center`,justify:`center`,gap:32,children:[r(a,{direction:`column`,align:`center`,gap:16,children:[n(f,{src:`/otlplus-web-v4/pr-124/headerIcon.png`,alt:`OTL Logo`}),r(a,{direction:`column`,align:`center`,gap:8,children:[n(s,{type:`BiggerBold`,color:`Highlight.default`,children:e(`common.serverError.title`)}),n(p,{type:`Big`,color:`Text.dark`,children:e(`common.serverError.apology`)})]}),n(m,{type:`Normal`,color:`Text.light`,children:e(`common.serverError.description`)})]}),r(h,{direction:`column`,align:`center`,gap:12,children:[n(c,{type:`highlighted`,onClick:()=>{window.location.reload()},$isFlexRow:!0,children:n(s,{type:`Normal`,color:`Text.bright`,children:e(`common.serverError.retry`)})}),n(c,{type:`default`,onClick:()=>{i(`/`)},$isFlexRow:!0,children:n(s,{type:`Normal`,children:e(`common.serverError.goHome`)})})]})]})})});export{g as default};
//# sourceMappingURL=server-error-CUdKpRj_.js.map