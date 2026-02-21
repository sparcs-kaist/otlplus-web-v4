import{w as g,y as p}from"./chunk-JZWAC4HX-DoXHMsGd.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-BJ8pBGCa.js";import{s as t,F as a}from"./FlexWrapper-BfffTCrz.js";import{m,B as l}from"./media-b0b7b4QL.js";import{T as n}from"./Typography-DUUYvdxz.js";import{u as h}from"./useTranslation-Ci3g4PdN.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"bceeb3a7016bc57a84c0b8e0829cc0881af327bc"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ad32b497-7bf5-48ae-b0e3-ab1c1e97e85c",e._sentryDebugIdIdentifier="sentry-dbid-ad32b497-7bf5-48ae-b0e3-ab1c1e97e85c")}catch{}})();const u=t.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,b=t(a)`
    max-width: 400px;
    width: 100%;
`,f=t.img`
    width: 120px;
    height: auto;
    margin-bottom: 16px;

    ${m.mobile} {
        width: 100px;
    }
`,x=t(n)`
    text-align: center;
`,y=t(n)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`,w=t(a)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),c=p(),d=()=>{c("/")},s=()=>{window.location.reload()};return r(u,{children:i(b,{direction:"column",align:"center",justify:"center",gap:32,children:[i(a,{direction:"column",align:"center",gap:16,children:[r(f,{src:"/otlplus-web-v4/pr-121/headerIcon.png",alt:"OTL Logo"}),i(a,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(x,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(y,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(w,{direction:"column",align:"center",gap:12,children:[r(l,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(l,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-Ef76eWNg.js.map
