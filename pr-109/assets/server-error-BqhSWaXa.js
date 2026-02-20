import{w as g,y as p}from"./chunk-JZWAC4HX-C-EAIWJi.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-DEccdowg.js";import{s as t,F as a}from"./FlexWrapper-CFpxuuIz.js";import{m,B as c}from"./media-ClJRmpMv.js";import{T as n}from"./Typography-YDZHzjkC.js";import{u as h}from"./useTranslation-CLFgIXMU.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"5ea33f5a2d920a79a42faca80cf69d1b63f3df5e"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="2d709281-321f-4086-83a0-99d936eaf38a",e._sentryDebugIdIdentifier="sentry-dbid-2d709281-321f-4086-83a0-99d936eaf38a")}catch{}})();const f=t.div`
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
`,C=g(function(){const{t:o}=h(),l=p(),d=()=>{l("/")},s=()=>{window.location.reload()};return r(f,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(a,{direction:"column",align:"center",gap:16,children:[r(x,{src:"/otlplus-web-v4/pr-109/headerIcon.png",alt:"OTL Logo"}),i(a,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(y,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(w,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(b,{direction:"column",align:"center",gap:12,children:[r(c,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(c,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-BqhSWaXa.js.map
