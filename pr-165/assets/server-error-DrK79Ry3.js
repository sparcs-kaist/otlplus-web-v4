(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ecb804a3a9dd64950df527181a954c460549363a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b1132109-61ab-4c4a-9b12-30dfdd523a6e`,e._sentryDebugIdIdentifier=`sentry-dbid-b1132109-61ab-4c4a-9b12-30dfdd523a6e`)}catch{}})();import{A as e,O as t}from"./chunk-62JRHF6Z-B_RA3M4c.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-B87VA51i.js";import{n as i,t as a}from"./FlexWrapper-CXXneU9J.js";import{t as o}from"./useTranslation-Vrw8Qbb7.js";import{t as s}from"./Typography-BaYtEiZ2.js";import{t as c}from"./Button-hBVQbGqm.js";import{t as l}from"./media-C4i6vmsf.js";var u=i.div`
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
`,g=e(function(){let{t:e}=o(),i=t();return n(u,{children:r(d,{direction:`column`,align:`center`,justify:`center`,gap:32,children:[r(a,{direction:`column`,align:`center`,gap:16,children:[n(f,{src:`/otlplus-web-v4/pr-165/headerIcon.png`,alt:`OTL Logo`}),r(a,{direction:`column`,align:`center`,gap:8,children:[n(s,{type:`BiggerBold`,color:`Highlight.default`,children:e(`common.serverError.title`)}),n(p,{type:`Big`,color:`Text.dark`,children:e(`common.serverError.apology`)})]}),n(m,{type:`Normal`,color:`Text.light`,children:e(`common.serverError.description`)})]}),r(h,{direction:`column`,align:`center`,gap:12,children:[n(c,{type:`highlighted`,onClick:()=>{window.location.reload()},$isFlexRow:!0,children:n(s,{type:`Normal`,color:`Text.bright`,children:e(`common.serverError.retry`)})}),n(c,{type:`default`,onClick:()=>{i(`/`)},$isFlexRow:!0,children:n(s,{type:`Normal`,children:e(`common.serverError.goHome`)})})]})]})})});export{g as default};
//# sourceMappingURL=server-error-DrK79Ry3.js.map