const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-OUTMYYG0.js","assets/emotion-react-jsx-runtime.browser.esm-DUmYexnX.js","assets/chunk-EPOLDU6W-DQKiFOjn.js","assets/StyledDivider-MHpkWQMB.js","assets/FlexWrapper-CTrEas-V.js","assets/ReviewBlock--engBhv3.js","assets/useIsDevice-C2GQPT6y.js","assets/index-D88TTaBc.js","assets/env-CAsOuN3y.js","assets/useTranslation-T7aNdaXM.js","assets/Typography-BSrXKA9t.js","assets/useUserStore-C3EuhHd2.js","assets/Widget-BqLQ8Ggv.js","assets/Trans-Bq6T4tB5.js","assets/index-DvbhHAQN.js","assets/index-Cs24lsKW.js","assets/IconButton-CNyX9dPR.js","assets/LoadingCircle-C4b2dRvE.js","assets/index-ByItu0pq.js","assets/index-Dc2J8pkR.js","assets/media-DVqUwHsh.js","assets/TextInputArea-DkNLhS_k.js","assets/index-DxIQVkA2.js","assets/Line-CJk8kUwE.js","assets/index-DQTbBPMR.js","assets/index-CylhYrzr.js","assets/Lock-DPBsxfcf.js","assets/handleLoginLogout-DU8OY4IE.js","assets/queryPersister-CRzfi-b3.js","assets/renderTargetArea-BWmc0S-j.js","assets/proxy-CRMTgFNt.js"])))=>i.map(i=>d[i]);
import{_ as h,t as P}from"./index-D88TTaBc.js";import{r,L as j,y as R,w as D}from"./chunk-EPOLDU6W-DQKiFOjn.js";import{a as o,j as e,F as b}from"./emotion-react-jsx-runtime.browser.esm-DUmYexnX.js";import{n as c,F as i}from"./FlexWrapper-CTrEas-V.js";import{L as F}from"./LoadingCircle-C4b2dRvE.js";import{a as $}from"./index.esm-CYjs3KUZ.js";import{L as z}from"./Line-CJk8kUwE.js";import{T as n}from"./Typography-BSrXKA9t.js";import{m as u}from"./media-DVqUwHsh.js";import{u as I}from"./useTranslation-T7aNdaXM.js";import{S as C,c as H}from"./checkEmpty-DYU3mal0.js";import{g as S}from"./useIsDevice-C2GQPT6y.js";import"./env-CAsOuN3y.js";import"./proxy-CRMTgFNt.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"ca4a78ff269da3d3e416f4f3ebc9a14b37545d76"}}catch{}})();try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="d7d4cc79-c8e9-4707-8965-3d0583ce2405",t._sentryDebugIdIdentifier="sentry-dbid-d7d4cc79-c8e9-4707-8965-3d0583ce2405")})()}catch{}const V=()=>{const t=window.navigator.userAgent.toLowerCase();return navigator.maxTouchPoints&&navigator.maxTouchPoints>2?/android/.test(t)||/linux/.test(t)?"android":"ios":/mac/.test(t)?"mac":"PC"},M=()=>{const[t,a]=r.useState("PC");return r.useEffect(()=>{a(V())},[]),t},W=c(i)`
    width: 100%;
`,s=c.a`
    text-decoration: none;
`,k=c(j)`
    text-decoration: none;
`,N=c(n)`
    cursor: pointer;
    text-decoration: none;
`,q=c.img`
    height: 45px;
    background: transparent;

    ${u.tablet} {
        display: none;
    }
`,_=c.div`
    ${u.mobile} {
        display: none;
    }
`,U=c.div`
    display: none;

    ${u.mobile} {
        display: block;
    }
`,y=c(i)`
    width: 118px;
`;function Y(){const{t}=I(),a=M();function d(f){const g="https://apps.apple.com/kr/app/taxi-for-kaist/id6447231158",m="https://play.google.com/store/apps/details?id=org.sparcs.taxi_app",p="https://apps.apple.com/kr/app/otl/id1579878255",x="https://play.google.com/store/apps/details?id=org.sparcs.otlplus",v="https://apps.apple.com/kr/app/ara-for-kaist/id6457209147",B="https://play.google.com/store/apps/details?id=org.sparcs.newara",A="https://apps.apple.com/kr/app/buddy-for-kaist/id6749929416",O="https://play.google.com/store/apps/details?id=org.sparcs.soap&hl=ko";switch(f){case"taxi":return a==="ios"||a==="mac"?g:m;case"otl":return a==="ios"||a==="mac"?p:x;case"ara":return a==="ios"||a==="mac"?v:B;case"buddy":return a==="ios"||a==="mac"?A:O;default:return""}}return o(W,{direction:"column",justify:"center",align:"stretch",gap:0,children:[e(i,{direction:"column",justify:"center",align:"stretch",gap:0,padding:"0px 20px 55px 20px",children:o(i,{direction:"row",justify:"center",align:"center",gap:127,children:[e(q,{src:"/otlplus-web-v4/pr-102/headerIcon.png"}),o(i,{direction:"row",justify:"flex-start",align:"flex-start",gap:47,children:[e(_,{children:o(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"SPARCS"}),o(i,{direction:"column",gap:20,children:[e(s,{href:"https://www.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"About SPARCS"})}),e(s,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Instagram"})})]})]})}),e(_,{children:o(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Services"}),o(i,{direction:"column",gap:20,children:[e(s,{href:"https://newara.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Ara"})}),e(s,{href:"https://taxi.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(s,{href:"https://clubs.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Clubs"})}),e(n,{type:"Big",color:"Text.dark",children:"Students"})]})]})}),o(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Apps"}),o(i,{direction:"column",gap:20,children:[e(s,{href:d("buddy"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Buddy app"})}),e(s,{href:d("otl"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"OTL app"})}),e(s,{href:d("taxi"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(s,{href:d("ara"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Ara"})})]})]}),o(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Resources"}),o(i,{direction:"column",gap:20,children:[e(k,{to:"/privacy-policy",children:e(n,{type:"Big",color:"Text.dark",children:t("credits.privacyPolicy")})}),e(k,{to:"/license",children:e(n,{type:"Big",color:"Text.dark",children:t("credits.license")})}),e(k,{to:"/makers",children:e(n,{type:"Big",color:"Text.dark",children:t("credits.credits")})}),e(U,{children:e(s,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Instagram"})})}),e(N,{children:e(n,{type:"Big",color:"Text.dark",onClick:()=>{$()},children:t("credits.contact")})})]})]})]})]})}),e(z,{height:5,color:"Highlight.default"})]})}const G=c(i)`
    flex: 0 1 auto;
    width: 645px;
    border: 2px solid ${({theme:t})=>t.colors.Highlight.default};
    border-radius: 32px;
    background: ${({theme:t})=>t.colors.Background.Section.default};
    transition: height 0.3s ease-in-out;
`,J=c.img`
    height: 40px;
    background: transparent;
`;function K(){const{t}=I(),a=R();return e(G,{direction:"column",align:"stretch",gap:0,padding:"8px 8px",children:e(C,{options:["type","department","level","term"],onSearch:f=>{if(H(f)){alert(t("common.search.empty"));return}const g=new URLSearchParams;Object.entries(f).forEach(([m,p])=>{Array.isArray(p)?p.forEach(x=>{g.append(m,x.toString())}):p!=null&&p!==""&&g.append(m,p.toString())}),a(`/dictionary?${g.toString()}`)},SearchIcon:e(J,{src:"/otlplus-web-v4/pr-102/searchIcon.png",alt:"search"})})})}const Q=r.lazy(()=>h(()=>import("./index-OUTMYYG0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]))),X=r.lazy(()=>h(()=>import("./index-DvbhHAQN.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12,13]))),Z=r.lazy(()=>h(()=>import("./index-Cs24lsKW.js"),__vite__mapDeps([15,1,2,4,6,7,8,9,16,17,0,3,5,10,11,12,13,14,18]))),ee=r.lazy(()=>h(()=>import("./index-ByItu0pq.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12,13]))),w=r.lazy(()=>h(()=>import("./index-Dc2J8pkR.js"),__vite__mapDeps([19,1,2,4,7,8,20,21,6,9,10,11,12,13]))),T=r.lazy(()=>h(()=>import("./index-DxIQVkA2.js"),__vite__mapDeps([22,1,2,4,23,10,6,7,8,9,12]))),L=r.lazy(()=>h(()=>import("./index-DQTbBPMR.js"),__vite__mapDeps([24,1,2,4,6,7,8,9,10,12,13]))),E=r.lazy(()=>h(()=>import("./index-CylhYrzr.js"),__vite__mapDeps([25,1,2,4,26,6,7,8,9,17,10,20,27,28,11,12,29,30,13]))),te=c(i)`
    margin-top: 60px;
`,re=c(i)`
    max-width: 1298px;
    flex: 1 1 auto;

    ${u.laptop} {
        width: 100%;
        padding: 0 20px;
    }

    ${u.mobile} {
        padding: 0 10px;
    }
`,ie=c(i)`
    height: 68px;
    z-index: 20;
`,ne=c(i)`
    min-height: 200px;
    width: 100%;
`;function l(){return e(ne,{direction:"column",align:"center",justify:"center",gap:0,children:e(F,{})})}const ke=D(function(){const a=S("mobile"),d=S("laptop");return r.useEffect(()=>{P("Page View",{page:"Home"})},[]),e(b,{children:o(te,{direction:"column",align:"center",gap:60,children:[o(re,{direction:"column",align:"center",justify:"stretch",gap:60,children:[e(ie,{direction:"row",justify:"center",gap:0,style:{width:"100%"},padding:"0 20px",children:e(K,{})}),o(i,{direction:"column",align:"stretch",justify:"stretch",gap:24,style:{width:"100%"},children:[d?o(b,{children:[e(r.Suspense,{fallback:e(l,{}),children:e(E,{})}),o(i,{direction:a?"column":"row",align:"stretch",gap:24,style:{width:"100%"},children:[o(i,{direction:"column",align:"stretch",justify:"stretch",gap:24,flex:"1 1 0",children:[e(r.Suspense,{fallback:e(l,{}),children:e(L,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(T,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(w,{})})]}),e(r.Suspense,{fallback:e(l,{}),children:e(Z,{})})]})]}):o(i,{direction:"row",align:"stretch",gap:24,children:[e(i,{direction:"column",align:"stretch",gap:0,children:e(r.Suspense,{fallback:e(l,{}),children:e(E,{})})}),e(i,{direction:"column",align:"stretch",gap:24,children:o(i,{direction:"column",align:"stretch",gap:24,flex:"1 1 0",style:{width:"418px"},children:[e(r.Suspense,{fallback:e(l,{}),children:e(L,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(T,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(w,{})})]})})]}),!d&&o(i,{direction:"row",align:"stretch",gap:24,children:[e(r.Suspense,{fallback:e(l,{}),children:e(ee,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(X,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(Q,{})})]})]})]}),e(Y,{})]})})});export{ke as default};
//# sourceMappingURL=_index-1g54Poq6.js.map
