import{w as g,y as p}from"./chunk-JZWAC4HX-DX4n3vr-.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-DyuFTOrN.js";import{s as t,F as c}from"./FlexWrapper-BeuVXekM.js";import{m,B as a}from"./media-BdQB_M4k.js";import{T as n}from"./Typography-C_z36uFf.js";import{u as h}from"./useTranslation-Ev6IL87T.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"1d432c4d142ce95ce6d31bc2c2d720309c7c668a"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="1c9124f1-c89c-41d6-b888-fd235418f71e",e._sentryDebugIdIdentifier="sentry-dbid-1c9124f1-c89c-41d6-b888-fd235418f71e")}catch{}})();const f=t.div`
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
`,b=t(n)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`,w=t(c)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),l=p(),d=()=>{l("/")},s=()=>{window.location.reload()};return r(f,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(c,{direction:"column",align:"center",gap:16,children:[r(x,{src:"/otlplus-web-v4/pr-136/headerIcon.png",alt:"OTL Logo"}),i(c,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(y,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(b,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(w,{direction:"column",align:"center",gap:12,children:[r(a,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(a,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-Dv9pejIW.js.map
