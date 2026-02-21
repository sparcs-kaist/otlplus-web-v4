import{w as g,y as p}from"./chunk-JZWAC4HX-DoJ4aVeS.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-CVa8-UUZ.js";import{s as t,F as a}from"./FlexWrapper-wqevlCq9.js";import{m,B as c}from"./media-B7FU2BK3.js";import{T as n}from"./Typography-CDfqdICA.js";import{u as h}from"./useTranslation-DzY9y3Te.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"d7be44aa59132df6008d6e893e01368b1986b646"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="6d220fbb-50bc-4486-89a7-ea354b2e706f",e._sentryDebugIdIdentifier="sentry-dbid-6d220fbb-50bc-4486-89a7-ea354b2e706f")}catch{}})();const u=t.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,f=t(a)`
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
`,w=t(a)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),l=p(),d=()=>{l("/")},s=()=>{window.location.reload()};return r(u,{children:i(f,{direction:"column",align:"center",justify:"center",gap:32,children:[i(a,{direction:"column",align:"center",gap:16,children:[r(x,{src:"/otlplus-web-v4/pr-127/headerIcon.png",alt:"OTL Logo"}),i(a,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(b,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(y,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(w,{direction:"column",align:"center",gap:12,children:[r(c,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(c,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-CJldACzO.js.map
