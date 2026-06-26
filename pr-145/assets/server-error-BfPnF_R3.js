import{w as g,y as p}from"./chunk-JZWAC4HX-CkazKMFR.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-B9MPMD5K.js";import{s as t,F as c}from"./FlexWrapper-CNjp5Jxw.js";import{m,B as l}from"./media-BcmC2rES.js";import{T as n}from"./Typography-C2c-k_Qc.js";import{u as h}from"./useTranslation-BnfMX_-T.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"99f2e1219be82843958bec32a9f2b6b79afc96be"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="4ee4c0bb-c6c4-4164-ab83-79f72e4f545d",e._sentryDebugIdIdentifier="sentry-dbid-4ee4c0bb-c6c4-4164-ab83-79f72e4f545d")}catch{}})();const f=t.div`
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
`,b=t(n)`
    text-align: center;
`,y=t(n)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`,w=t(c)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),a=p(),d=()=>{a("/")},s=()=>{window.location.reload()};return r(f,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(c,{direction:"column",align:"center",gap:16,children:[r(x,{src:"/otlplus-web-v4/pr-145/headerIcon.png",alt:"OTL Logo"}),i(c,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(b,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(y,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(w,{direction:"column",align:"center",gap:12,children:[r(l,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(l,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-BfPnF_R3.js.map
