import{w as g,y as p}from"./chunk-JZWAC4HX-CnREc0nu.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-D8yRFEw8.js";import{s as t,F as c}from"./FlexWrapper-COxlQPil.js";import{m,B as l}from"./media-RqHgPa9t.js";import{T as n}from"./Typography-Co4Mmfzt.js";import{u as h}from"./useTranslation-TxlwbtDp.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"0e9eafd49ec7d215dce6f0f7067f600c1458c176"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="0a8f66c7-c846-4e39-8da6-7653f14911dc",e._sentryDebugIdIdentifier="sentry-dbid-0a8f66c7-c846-4e39-8da6-7653f14911dc")}catch{}})();const f=t.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,u=t(c)`
    max-width: 400px;
    width: 100%;
`,x=t.img`
    width: 120px;
    height: auto;
    margin-bottom: 16px;

    ${m.mobile} {
        width: 100px;
    }
`,y=t(n)`
    text-align: center;
`,w=t(n)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`,b=t(c)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),a=p(),d=()=>{a("/")},s=()=>{window.location.reload()};return r(f,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(c,{direction:"column",align:"center",gap:16,children:[r(x,{src:"/otlplus-web-v4/pr-119/headerIcon.png",alt:"OTL Logo"}),i(c,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(y,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(w,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(b,{direction:"column",align:"center",gap:12,children:[r(l,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(l,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-BrfAwaBG.js.map
