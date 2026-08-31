(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`7cf70cd838915d1a7e6f33effe694effe4bf8d29`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b536fb11-2074-4c1d-a89b-b2260915625a`,e._sentryDebugIdIdentifier=`sentry-dbid-b536fb11-2074-4c1d-a89b-b2260915625a`)}catch{}})();import{D as e,k as t}from"./chunk-62JRHF6Z-DWVwBDwK.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-BGZOrLiE.js";import{n as i,t as a}from"./FlexWrapper-Dt8CM_nk.js";import{t as o}from"./useTranslation-xOtiLNgS.js";import{t as s}from"./Typography-DXQeVsMD.js";import{t as c}from"./Button-_H24xR13.js";import{t as l}from"./media-DMylQnjg.js";var u=i.div`
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
`,g=t(function(){let{t}=o(),i=e();return n(u,{children:r(d,{direction:`column`,align:`center`,justify:`center`,gap:32,children:[r(a,{direction:`column`,align:`center`,gap:16,children:[n(f,{src:`/otlplus-web-v4/pr-163/headerIcon.png`,alt:`OTL Logo`}),r(a,{direction:`column`,align:`center`,gap:8,children:[n(s,{type:`BiggerBold`,color:`Highlight.default`,children:t(`common.serverError.title`)}),n(p,{type:`Big`,color:`Text.dark`,children:t(`common.serverError.apology`)})]}),n(m,{type:`Normal`,color:`Text.light`,children:t(`common.serverError.description`)})]}),r(h,{direction:`column`,align:`center`,gap:12,children:[n(c,{type:`highlighted`,onClick:()=>{window.location.reload()},$isFlexRow:!0,children:n(s,{type:`Normal`,color:`Text.bright`,children:t(`common.serverError.retry`)})}),n(c,{type:`default`,onClick:()=>{i(`/`)},$isFlexRow:!0,children:n(s,{type:`Normal`,children:t(`common.serverError.goHome`)})})]})]})})});export{g as default};
//# sourceMappingURL=server-error-DHBDC0A6.js.map