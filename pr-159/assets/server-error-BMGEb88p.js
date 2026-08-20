(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`cdff9c3b8d81caaa0369b4e32a9b9c9d184350c0`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`c38ae5a7-d4da-41c9-b0ab-2b512f14a99b`,e._sentryDebugIdIdentifier=`sentry-dbid-c38ae5a7-d4da-41c9-b0ab-2b512f14a99b`)}catch{}})();import{D as e,k as t}from"./chunk-62JRHF6Z-CZpY3lsJ.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-C1Gp4kNh.js";import{n as i,t as a}from"./FlexWrapper-ioHBAB77.js";import{t as o}from"./useTranslation-DWiOphx6.js";import{t as s}from"./Typography-CtH4Tlf2.js";import{t as c}from"./Button-BqlxLR03.js";import{t as l}from"./media-Bh7M6fMo.js";var u=i.div`
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
`,g=t(function(){let{t}=o(),i=e();return n(u,{children:r(d,{direction:`column`,align:`center`,justify:`center`,gap:32,children:[r(a,{direction:`column`,align:`center`,gap:16,children:[n(f,{src:`/otlplus-web-v4/pr-159/headerIcon.png`,alt:`OTL Logo`}),r(a,{direction:`column`,align:`center`,gap:8,children:[n(s,{type:`BiggerBold`,color:`Highlight.default`,children:t(`common.serverError.title`)}),n(p,{type:`Big`,color:`Text.dark`,children:t(`common.serverError.apology`)})]}),n(m,{type:`Normal`,color:`Text.light`,children:t(`common.serverError.description`)})]}),r(h,{direction:`column`,align:`center`,gap:12,children:[n(c,{type:`highlighted`,onClick:()=>{window.location.reload()},$isFlexRow:!0,children:n(s,{type:`Normal`,color:`Text.bright`,children:t(`common.serverError.retry`)})}),n(c,{type:`default`,onClick:()=>{i(`/`)},$isFlexRow:!0,children:n(s,{type:`Normal`,children:t(`common.serverError.goHome`)})})]})]})})});export{g as default};
//# sourceMappingURL=server-error-BMGEb88p.js.map