const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DdqZPcGB.js","assets/emotion-react-jsx-runtime.browser.esm-B-zamEU7.js","assets/chunk-EPOLDU6W-zmgMqoXq.js","assets/StyledDivider-Ct3KFYR5.js","assets/FlexWrapper-Cxmg7ETU.js","assets/ReviewBlock-BHYq_Ozo.js","assets/useAPI-B2f8YEht.js","assets/index-CrUTr-li.js","assets/env-BlYEkaK0.js","assets/useTranslation-BV_BGx8x.js","assets/Typography-DoXk6ZeF.js","assets/useUserStore-CPGET-uw.js","assets/Widget-7aHsC-ms.js","assets/useIsDevice-BuRS6W7c.js","assets/Trans-D3j_BVRU.js","assets/index-CrWTyjYp.js","assets/index-GwnzJ48W.js","assets/IconButton-PFiOmA6d.js","assets/CircularProgress-ClGSp0Gv.js","assets/index-4iTqceI9.js","assets/index-CB1sGTKB.js","assets/media-gsTWNWmB.js","assets/TextInputArea-DZTh1m4W.js","assets/index-_rQV4Sop.js","assets/index-nuCwYN70.js","assets/Line-DCyqqWuG.js","assets/index-CIdQjyM8.js","assets/index-C3093pkS.js","assets/Lock-Chby9EJp.js","assets/LoadingCircle-DGsXWiVm.js","assets/handleLoginLogout-D7gu80RU.js","assets/queryPersister-BaLqnXcD.js","assets/Close-DQmaMuQZ.js","assets/checkOverlap-Ab8vkGUA.js"])))=>i.map(i=>d[i]);
import{_ as h,t as P}from"./index-_rQV4Sop.js";import{r,L as j,y as R,w as D}from"./chunk-EPOLDU6W-zmgMqoXq.js";import{a as o,j as e,F as b}from"./emotion-react-jsx-runtime.browser.esm-B-zamEU7.js";import{n as c,F as i}from"./FlexWrapper-Cxmg7ETU.js";import{L as F}from"./LoadingCircle-DGsXWiVm.js";import{a as $}from"./index.esm-CMq6FU-j.js";import{L as z}from"./Line-DCyqqWuG.js";import{T as n}from"./Typography-DoXk6ZeF.js";import{m as u}from"./media-gsTWNWmB.js";import{u as I}from"./useTranslation-BV_BGx8x.js";import{S as C,c as H}from"./checkEmpty-DlandtlR.js";import{u as S}from"./useIsDevice-BuRS6W7c.js";import"./env-BlYEkaK0.js";import"./useAPI-B2f8YEht.js";import"./index-CrUTr-li.js";import"./CircularProgress-ClGSp0Gv.js";import"./formatTimeblockToString-jWs_tdD0.js";import"./Close-DQmaMuQZ.js";import"./proxy-CHGw2Dw9.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"ada4c7999b6ed5c9c18808775724ee3dffa94ca2"}}catch{}})();try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="9b2fdf4c-7c54-420e-a952-ab30795d52c7",t._sentryDebugIdIdentifier="sentry-dbid-9b2fdf4c-7c54-420e-a952-ab30795d52c7")})()}catch{}const M=()=>{const t=window.navigator.userAgent.toLowerCase();return navigator.maxTouchPoints&&navigator.maxTouchPoints>2?/android/.test(t)||/linux/.test(t)?"android":"ios":/mac/.test(t)?"mac":"PC"},V=()=>{const[t,a]=r.useState("PC");return r.useEffect(()=>{a(M())},[]),t},W=c(i)`
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
`;function Y(){const{t}=I(),a=V();function d(f){const g="https://apps.apple.com/kr/app/taxi-for-kaist/id6447231158",m="https://play.google.com/store/apps/details?id=org.sparcs.taxi_app",p="https://apps.apple.com/kr/app/otl/id1579878255",x="https://play.google.com/store/apps/details?id=org.sparcs.otlplus",v="https://apps.apple.com/kr/app/ara-for-kaist/id6457209147",B="https://play.google.com/store/apps/details?id=org.sparcs.newara",A="https://apps.apple.com/kr/app/buddy-for-kaist/id6749929416",O="https://play.google.com/store/apps/details?id=org.sparcs.soap&hl=ko";switch(f){case"taxi":return a==="ios"||a==="mac"?g:m;case"otl":return a==="ios"||a==="mac"?p:x;case"ara":return a==="ios"||a==="mac"?v:B;case"buddy":return a==="ios"||a==="mac"?A:O;default:return""}}return o(W,{direction:"column",justify:"center",align:"stretch",gap:0,children:[e(i,{direction:"column",justify:"center",align:"stretch",gap:0,padding:"0px 20px 55px 20px",children:o(i,{direction:"row",justify:"center",align:"center",gap:127,children:[e(q,{src:"/otlplus-web-v4/pr-84/headerIcon.png"}),o(i,{direction:"row",justify:"flex-start",align:"flex-start",gap:47,children:[e(_,{children:o(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"SPARCS"}),o(i,{direction:"column",gap:20,children:[e(s,{href:"https://www.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"About SPARCS"})}),e(s,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Instagram"})})]})]})}),e(_,{children:o(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Services"}),o(i,{direction:"column",gap:20,children:[e(s,{href:"https://newara.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Ara"})}),e(s,{href:"https://taxi.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(s,{href:"https://clubs.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Clubs"})}),e(n,{type:"Big",color:"Text.dark",children:"Students"})]})]})}),o(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Apps"}),o(i,{direction:"column",gap:20,children:[e(s,{href:d("buddy"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Buddy app"})}),e(s,{href:d("otl"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"OTL app"})}),e(s,{href:d("taxi"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(s,{href:d("ara"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Ara"})})]})]}),o(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Resources"}),o(i,{direction:"column",gap:20,children:[e(k,{to:"/privacy-policy",children:e(n,{type:"Big",color:"Text.dark",children:t("credits.privacyPolicy")})}),e(k,{to:"/license",children:e(n,{type:"Big",color:"Text.dark",children:t("credits.license")})}),e(k,{to:"/makers",children:e(n,{type:"Big",color:"Text.dark",children:t("credits.credits")})}),e(U,{children:e(s,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Instagram"})})}),e(N,{children:e(n,{type:"Big",color:"Text.dark",onClick:()=>{$()},children:t("credits.contact")})})]})]})]})]})}),e(z,{height:5,color:"Highlight.default"})]})}const G=c(i)`
    flex: 0 1 auto;
    width: 645px;
    border: 2px solid ${({theme:t})=>t.colors.Highlight.default};
    border-radius: 32px;
    background: ${({theme:t})=>t.colors.Background.Section.default};
    transition: height 0.3s ease-in-out;
`,J=c.img`
    height: 40px;
    background: transparent;
`;function K(){const{t}=I(),a=R();return e(G,{direction:"column",align:"stretch",gap:0,padding:"8px 8px",children:e(C,{options:["type","department","level","term"],onSearch:f=>{if(H(f)){alert(t("common.search.empty"));return}const g=new URLSearchParams;Object.entries(f).forEach(([m,p])=>{Array.isArray(p)?p.forEach(x=>{g.append(m,x.toString())}):p!=null&&p!==""&&g.append(m,p.toString())}),a(`/dictionary?${g.toString()}`)},SearchIcon:e(J,{src:"/otlplus-web-v4/pr-84/searchIcon.png",alt:"search"})})})}const Q=r.lazy(()=>h(()=>import("./index-DdqZPcGB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),X=r.lazy(()=>h(()=>import("./index-CrWTyjYp.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,13,12,14]))),Z=r.lazy(()=>h(()=>import("./index-GwnzJ48W.js"),__vite__mapDeps([16,1,2,4,6,7,8,9,17,18,0,3,5,10,11,12,13,14,15,19]))),ee=r.lazy(()=>h(()=>import("./index-4iTqceI9.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),w=r.lazy(()=>h(()=>import("./index-CB1sGTKB.js"),__vite__mapDeps([20,1,2,4,7,8,21,22,6,9,10,23,11,12,14]))),T=r.lazy(()=>h(()=>import("./index-nuCwYN70.js"),__vite__mapDeps([24,1,2,4,25,10,6,7,8,9,12]))),L=r.lazy(()=>h(()=>import("./index-CIdQjyM8.js"),__vite__mapDeps([26,1,2,4,6,7,8,9,10,12,14]))),E=r.lazy(()=>h(()=>import("./index-C3093pkS.js"),__vite__mapDeps([27,1,2,4,28,6,7,8,9,29,18,10,21,30,23,31,11,12,32,33,14]))),te=c(i)`
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
`;function l(){return e(ne,{direction:"column",align:"center",justify:"center",gap:0,children:e(F,{})})}const Te=D(function(){const a=S("mobile"),d=S("laptop");return r.useEffect(()=>{P("Page View",{page:"Home"})},[]),e(b,{children:o(te,{direction:"column",align:"center",gap:60,children:[o(re,{direction:"column",align:"center",justify:"stretch",gap:60,children:[e(ie,{direction:"row",justify:"center",gap:0,style:{width:"100%"},padding:"0 20px",children:e(K,{})}),o(i,{direction:"column",align:"stretch",justify:"stretch",gap:24,style:{width:"100%"},children:[d?o(b,{children:[e(r.Suspense,{fallback:e(l,{}),children:e(E,{})}),o(i,{direction:a?"column":"row",align:"stretch",gap:24,style:{width:"100%"},children:[o(i,{direction:"column",align:"stretch",justify:"stretch",gap:24,flex:"1 1 0",children:[e(r.Suspense,{fallback:e(l,{}),children:e(L,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(T,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(w,{})})]}),e(r.Suspense,{fallback:e(l,{}),children:e(Z,{})})]})]}):o(i,{direction:"row",align:"stretch",gap:24,children:[e(i,{direction:"column",align:"stretch",gap:0,children:e(r.Suspense,{fallback:e(l,{}),children:e(E,{})})}),e(i,{direction:"column",align:"stretch",gap:24,children:o(i,{direction:"column",align:"stretch",gap:24,flex:"1 1 0",style:{width:"418px"},children:[e(r.Suspense,{fallback:e(l,{}),children:e(L,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(T,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(w,{})})]})})]}),!d&&o(i,{direction:"row",align:"stretch",gap:24,children:[e(r.Suspense,{fallback:e(l,{}),children:e(ee,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(X,{})}),e(r.Suspense,{fallback:e(l,{}),children:e(Q,{})})]})]})]}),e(Y,{})]})})});export{Te as default};
//# sourceMappingURL=_index-WGdQYW4Q.js.map
