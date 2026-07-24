(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`16b75b4acfb1430d5d2684c0d9447a887bdc7713`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`86f8e1cb-daa4-4172-82e2-80062e077099`,e._sentryDebugIdIdentifier=`sentry-dbid-86f8e1cb-daa4-4172-82e2-80062e077099`)}catch{}})();import{A as e,O as t}from"./chunk-QFMPRPBF-Bq9cxrhD.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-CwSC2LQX.js";import{n as i,t as a}from"./FlexWrapper-CFZ75Z8x.js";import{t as o}from"./useTranslation-BNjGUrgT.js";import{t as s}from"./Typography-BFKOQjDv.js";import{t as c}from"./Button-BXqf208u.js";import{t as l}from"./media-CzmYG9Qy.js";var u=i.div`
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
`,g=e(function(){let{t:e}=o(),i=t();return n(u,{children:r(d,{direction:`column`,align:`center`,justify:`center`,gap:32,children:[r(a,{direction:`column`,align:`center`,gap:16,children:[n(f,{src:`/otlplus-web-v4/pr-132/headerIcon.png`,alt:`OTL Logo`}),r(a,{direction:`column`,align:`center`,gap:8,children:[n(s,{type:`BiggerBold`,color:`Highlight.default`,children:e(`common.serverError.title`)}),n(p,{type:`Big`,color:`Text.dark`,children:e(`common.serverError.apology`)})]}),n(m,{type:`Normal`,color:`Text.light`,children:e(`common.serverError.description`)})]}),r(h,{direction:`column`,align:`center`,gap:12,children:[n(c,{type:`highlighted`,onClick:()=>{window.location.reload()},$isFlexRow:!0,children:n(s,{type:`Normal`,color:`Text.bright`,children:e(`common.serverError.retry`)})}),n(c,{type:`default`,onClick:()=>{i(`/`)},$isFlexRow:!0,children:n(s,{type:`Normal`,children:e(`common.serverError.goHome`)})})]})]})})});export{g as default};
//# sourceMappingURL=server-error-CEGOF2t6.js.map