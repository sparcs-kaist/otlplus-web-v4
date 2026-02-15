import{w as g,y as f}from"./chunk-EPOLDU6W-C7Mih6dn.js";import{j as r,a as i}from"./emotion-react-jsx-runtime.browser.esm-CIs5QH4e.js";import{n as t,F as a}from"./FlexWrapper-CiU7Docw.js";import{m as p,B as l}from"./media-DekK64PZ.js";import{T as n}from"./Typography-DPaPocUe.js";import{u as h}from"./useTranslation-BR8Z1e6H.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"8b22083510fb16182a4a40f9388058173a907f58"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="12c79d06-bf3f-46ff-af67-bcc38a0eaf4e",e._sentryDebugIdIdentifier="sentry-dbid-12c79d06-bf3f-46ff-af67-bcc38a0eaf4e")})()}catch{}const m=t.div`
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
`,y=t.img`
    width: 120px;
    height: auto;
    margin-bottom: 16px;

    ${p.mobile} {
        width: 100px;
    }
`,x=t(n)`
    text-align: center;
`,b=t(n)`
    text-align: center;
    max-width: 320px;
    line-height: 1.5;
`,w=t(a)`
    width: 100%;
    max-width: 280px;
`,C=g(function(){const{t:o}=h(),c=f(),d=()=>{c("/")},s=()=>{window.location.reload()};return r(m,{children:i(u,{direction:"column",align:"center",justify:"center",gap:32,children:[i(a,{direction:"column",align:"center",gap:16,children:[r(y,{src:"/otlplus-web-v4/pr-107/headerIcon.png",alt:"OTL Logo"}),i(a,{direction:"column",align:"center",gap:8,children:[r(n,{type:"BiggerBold",color:"Highlight.default",children:o("common.serverError.title")}),r(x,{type:"Big",color:"Text.dark",children:o("common.serverError.apology")})]}),r(b,{type:"Normal",color:"Text.light",children:o("common.serverError.description")})]}),i(w,{direction:"column",align:"center",gap:12,children:[r(l,{type:"highlighted",onClick:s,$isFlexRow:!0,children:r(n,{type:"Normal",color:"Text.bright",children:o("common.serverError.retry")})}),r(l,{type:"default",onClick:d,$isFlexRow:!0,children:r(n,{type:"Normal",children:o("common.serverError.goHome")})})]})]})})});export{C as default};
//# sourceMappingURL=server-error-DcQ-LP3p.js.map
