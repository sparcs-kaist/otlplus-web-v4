import{w as g,y as p}from"./chunk-JZWAC4HX-aHW4xuLB.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-2CxRnpLU.js";import{s as t,F as l}from"./FlexWrapper-BhlFWUYb.js";import{m,B as c}from"./media-BplRxMJ3.js";import{T as n}from"./Typography-DJFtumZv.js";import{u as h}from"./useTranslation-CTqq_AI7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"0c307a80d292f940648dd587fddb147efe74509f"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="8c5f0400-4b3b-4515-8f96-290e228f6e66",e._sentryDebugIdIdentifier="sentry-dbid-8c5f0400-4b3b-4515-8f96-290e228f6e66")}catch{}})();const f=t.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,u=t(l)`
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
`,b=t(n)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`,w=t(l)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),a=p(),d=()=>{a("/")},s=()=>{window.location.reload()};return r(f,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(l,{direction:"column",align:"center",gap:16,children:[r(x,{src:"/otlplus-web-v4/pr-141/headerIcon.png",alt:"OTL Logo"}),i(l,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(y,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(b,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(w,{direction:"column",align:"center",gap:12,children:[r(c,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(c,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-DD6p-t6F.js.map
