(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`45108bf9206112498d6e1cff45a6d2c25183208f`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`16241ae1-1f47-4715-86d4-0fab0986d4fd`,e._sentryDebugIdIdentifier=`sentry-dbid-16241ae1-1f47-4715-86d4-0fab0986d4fd`)}catch{}})();import{A as e,O as t}from"./chunk-QFMPRPBF-umJJB3TD.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-yr3k2gdL.js";import{n as i,t as a}from"./FlexWrapper-B6qM8Jl3.js";import{t as o}from"./useTranslation-C3GqpCQ4.js";import{t as s}from"./Typography-DKZu2lg8.js";import{t as c}from"./Button-DmYZdH3x.js";import{t as l}from"./media-CgVFVVR2.js";var u=i.div`
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
`,g=e(function(){let{t:e}=o(),i=t();return n(u,{children:r(d,{direction:`column`,align:`center`,justify:`center`,gap:32,children:[r(a,{direction:`column`,align:`center`,gap:16,children:[n(f,{src:`/otlplus-web-v4/pr-146/headerIcon.png`,alt:`OTL Logo`}),r(a,{direction:`column`,align:`center`,gap:8,children:[n(s,{type:`BiggerBold`,color:`Highlight.default`,children:e(`common.serverError.title`)}),n(p,{type:`Big`,color:`Text.dark`,children:e(`common.serverError.apology`)})]}),n(m,{type:`Normal`,color:`Text.light`,children:e(`common.serverError.description`)})]}),r(h,{direction:`column`,align:`center`,gap:12,children:[n(c,{type:`highlighted`,onClick:()=>{window.location.reload()},$isFlexRow:!0,children:n(s,{type:`Normal`,color:`Text.bright`,children:e(`common.serverError.retry`)})}),n(c,{type:`default`,onClick:()=>{i(`/`)},$isFlexRow:!0,children:n(s,{type:`Normal`,children:e(`common.serverError.goHome`)})})]})]})})});export{g as default};
//# sourceMappingURL=server-error-CA_csuyW.js.map