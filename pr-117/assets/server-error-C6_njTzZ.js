import{w as g,y as p}from"./chunk-JZWAC4HX-BGBfDNwI.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-4A1UaGAk.js";import{s as t,F as a}from"./FlexWrapper-r8lR79K0.js";import{m,B as l}from"./media-Dgo3lWf4.js";import{T as n}from"./Typography-Du-0Hqo4.js";import{u as h}from"./useTranslation-02D_bsBn.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f83b0dbedf23c17e51796e13771c89e224259c70"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="d2a2f891-4349-46fd-9e11-1e8c14a8e883",e._sentryDebugIdIdentifier="sentry-dbid-d2a2f891-4349-46fd-9e11-1e8c14a8e883")}catch{}})();const f=t.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,u=t(a)`
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
`,b=t(a)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),c=p(),d=()=>{c("/")},s=()=>{window.location.reload()};return r(f,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(a,{direction:"column",align:"center",gap:16,children:[r(x,{src:"/otlplus-web-v4/pr-117/headerIcon.png",alt:"OTL Logo"}),i(a,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(y,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(w,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(b,{direction:"column",align:"center",gap:12,children:[r(l,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(l,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-C6_njTzZ.js.map
