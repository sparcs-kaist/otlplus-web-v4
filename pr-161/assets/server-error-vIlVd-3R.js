(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`cf3e386fd2c75004da41b840c60e6c06199f8d23`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`328e5cb4-390e-459d-a5c8-a4aaab49e870`,e._sentryDebugIdIdentifier=`sentry-dbid-328e5cb4-390e-459d-a5c8-a4aaab49e870`)}catch{}})();import{D as e,k as t}from"./chunk-62JRHF6Z-Bc-MzIDp.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-fI3_ye4K.js";import{n as i,t as a}from"./FlexWrapper-DeR0OeXE.js";import{t as o}from"./useTranslation-D1dFAkDV.js";import{t as s}from"./Typography-Clp122iA.js";import{t as c}from"./Button-R2QMxDId.js";import{t as l}from"./media-Bb-Ew1B4.js";var u=i.div`
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
`,g=t(function(){let{t}=o(),i=e();return n(u,{children:r(d,{direction:`column`,align:`center`,justify:`center`,gap:32,children:[r(a,{direction:`column`,align:`center`,gap:16,children:[n(f,{src:`/otlplus-web-v4/pr-161/headerIcon.png`,alt:`OTL Logo`}),r(a,{direction:`column`,align:`center`,gap:8,children:[n(s,{type:`BiggerBold`,color:`Highlight.default`,children:t(`common.serverError.title`)}),n(p,{type:`Big`,color:`Text.dark`,children:t(`common.serverError.apology`)})]}),n(m,{type:`Normal`,color:`Text.light`,children:t(`common.serverError.description`)})]}),r(h,{direction:`column`,align:`center`,gap:12,children:[n(c,{type:`highlighted`,onClick:()=>{window.location.reload()},$isFlexRow:!0,children:n(s,{type:`Normal`,color:`Text.bright`,children:t(`common.serverError.retry`)})}),n(c,{type:`default`,onClick:()=>{i(`/`)},$isFlexRow:!0,children:n(s,{type:`Normal`,children:t(`common.serverError.goHome`)})})]})]})})});export{g as default};
//# sourceMappingURL=server-error-vIlVd-3R.js.map