import{w as g,y as p}from"./chunk-JZWAC4HX-9KoC3cCy.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-E_cGwdOa.js";import{s as t,F as a}from"./FlexWrapper-C4koUj4A.js";import{m,B as l}from"./media-BdZQAMqM.js";import{T as n}from"./Typography-B8Saw3Jv.js";import{u as h}from"./useTranslation-CWjj40Kz.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"aa4b834b366ac0b0132f13807ce2ff4bf1de11a2"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e6deb4be-08d7-43c5-bb16-1a806b153b1a",e._sentryDebugIdIdentifier="sentry-dbid-e6deb4be-08d7-43c5-bb16-1a806b153b1a")}catch{}})();const b=t.div`
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
`,C=g(function(){const{t:o}=h(),c=p(),d=()=>{c("/")},s=()=>{window.location.reload()};return r(b,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(a,{direction:"column",align:"center",gap:16,children:[r(f,{src:"/otlplus-web-v4/pr-114/headerIcon.png",alt:"OTL Logo"}),i(a,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(x,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(y,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(w,{direction:"column",align:"center",gap:12,children:[r(l,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(l,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-C2JCymd5.js.map
