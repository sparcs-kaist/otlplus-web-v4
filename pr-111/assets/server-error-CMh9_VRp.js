import{w as g,y as p}from"./chunk-JZWAC4HX-D2a0YEW3.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-D2bb5ToO.js";import{s as t,F as d}from"./FlexWrapper-BOvc_BDH.js";import{m,B as l}from"./media-C1JfQ_Hb.js";import{T as n}from"./Typography-BMgRVPDD.js";import{u as h}from"./useTranslation-DIuW9fO8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"fb731feb20f9d90f8f05948db24117d8255cef6e"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="15ededed-e5d6-4fbb-a780-755e68f49b49",e._sentryDebugIdIdentifier="sentry-dbid-15ededed-e5d6-4fbb-a780-755e68f49b49")}catch{}})();const f=t.div`
    width: 100%;
    min-height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,u=t(d)`
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
`,w=t(d)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),a=p(),c=()=>{a("/")},s=()=>{window.location.reload()};return r(f,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(d,{direction:"column",align:"center",gap:16,children:[r(x,{src:"/otlplus-web-v4/pr-111/headerIcon.png",alt:"OTL Logo"}),i(d,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(y,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(b,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(w,{direction:"column",align:"center",gap:12,children:[r(l,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(l,{type:"default",onClick:c,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-CMh9_VRp.js.map
