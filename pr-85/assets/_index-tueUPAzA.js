const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-zB-JuNG0.js","assets/emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js","assets/chunk-UIGDSWPH-ClhI_Z4l.js","assets/StyledDivider-Bnwy1K8M.js","assets/FlexWrapper-B6Hxm4Zw.js","assets/ReviewBlock-C5d9khNd.js","assets/useIsDevice-C2loAmXF.js","assets/index-C_SalosC.js","assets/env-Bi9UvtEO.js","assets/useTranslation-DrmvPmDd.js","assets/Typography-DeI78L6T.js","assets/useUserStore-DyzRei9X.js","assets/Widget-e9ONaX_D.js","assets/Trans-Tf1bqhc-.js","assets/index-B9N5aPrz.js","assets/index-DBw29Fjv.js","assets/IconButton-DSg0dw12.js","assets/LoadingCircle-BQOqlPYf.js","assets/index-P6QLeNR0.js","assets/index-vVjfulTD.js","assets/media-MLnbxw48.js","assets/TextInputArea-DirkcjsE.js","assets/index-DiQvHCCW.js","assets/Line-VXlQtGVc.js","assets/index-4w2-V69c.js","assets/index-CiURSwls.js","assets/Lock-fhBUdPRw.js","assets/handleLoginLogout-BWlgvOK0.js","assets/queryPersister-DTi30ACg.js","assets/preload-helper-k4C9acru.js","assets/renderTargetArea-DC5_8-DW.js","assets/proxy-DiVUM2Vt.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./preload-helper-k4C9acru.js";import{r as t,L as j,y as P,w as R}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{a as i,j as e,F as S}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{n as c,F as r}from"./FlexWrapper-B6Hxm4Zw.js";import{L as F}from"./LoadingCircle-BQOqlPYf.js";import{a as D}from"./index.esm-BWN9k0yk.js";import{L as $}from"./Line-VXlQtGVc.js";import{T as n}from"./Typography-DeI78L6T.js";import{m as u}from"./media-MLnbxw48.js";import{u as B}from"./useTranslation-DrmvPmDd.js";import{S as z,c as C}from"./checkEmpty-ClCcghA8.js";import{g as _}from"./useIsDevice-C2loAmXF.js";import"./proxy-DiVUM2Vt.js";import"./index-C_SalosC.js";import"./env-Bi9UvtEO.js";const H=()=>{const o=window.navigator.userAgent.toLowerCase();return navigator.maxTouchPoints&&navigator.maxTouchPoints>2?/android/.test(o)||/linux/.test(o)?"android":"ios":/mac/.test(o)?"mac":"PC"},M=()=>{const[o,a]=t.useState("PC");return t.useEffect(()=>{a(H())},[]),o},V=c(r)`
    width: 100%;
`,s=c.a`
    text-decoration: none;
`,k=c(j)`
    text-decoration: none;
`,W=c(n)`
    cursor: pointer;
    text-decoration: none;
`,q=c.img`
    height: 45px;
    background: transparent;

    ${u.tablet} {
        display: none;
    }
`,b=c.div`
    ${u.mobile} {
        display: none;
    }
`,N=c.div`
    display: none;

    ${u.mobile} {
        display: block;
    }
`,y=c(r)`
    width: 118px;
`;function U(){const{t:o}=B(),a=M();function h(m){const g="https://apps.apple.com/kr/app/taxi-for-kaist/id6447231158",f="https://play.google.com/store/apps/details?id=org.sparcs.taxi_app",d="https://apps.apple.com/kr/app/otl/id1579878255",x="https://play.google.com/store/apps/details?id=org.sparcs.otlplus",v="https://apps.apple.com/kr/app/ara-for-kaist/id6457209147",I="https://play.google.com/store/apps/details?id=org.sparcs.newara",E="https://apps.apple.com/kr/app/kaist-buddy/id6502600498",O="https://play.google.com/store/apps/details?id=org.sparcs.buddy";switch(m){case"taxi":return a==="ios"||a==="mac"?g:f;case"otl":return a==="ios"||a==="mac"?d:x;case"ara":return a==="ios"||a==="mac"?v:I;case"buddy":return a==="ios"||a==="mac"?E:O;default:return""}}return i(V,{direction:"column",justify:"center",align:"stretch",gap:0,children:[e(r,{direction:"column",justify:"center",align:"stretch",gap:0,padding:"0px 20px 55px 20px",children:i(r,{direction:"row",justify:"center",align:"center",gap:127,children:[e(q,{src:"/otlplus-web-v4/pr-85/headerIcon.png"}),i(r,{direction:"row",justify:"flex-start",align:"flex-start",gap:47,children:[e(b,{children:i(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"SPARCS"}),i(r,{direction:"column",gap:20,children:[e(s,{href:"https://www.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"About SPARCS"})}),e(s,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Instagram"})})]})]})}),e(b,{children:i(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Services"}),i(r,{direction:"column",gap:20,children:[e(s,{href:"https://newara.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Ara"})}),e(s,{href:"https://taxi.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(s,{href:"https://clubs.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Clubs"})}),e(n,{type:"Big",color:"Text.dark",children:"Students"})]})]})}),i(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Apps"}),i(r,{direction:"column",gap:20,children:[e(s,{href:h("otl"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"OTL app"})}),e(s,{href:h("taxi"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(s,{href:h("ara"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Ara"})})]})]}),i(y,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Resources"}),i(r,{direction:"column",gap:20,children:[e(k,{to:"/privacy-policy",children:e(n,{type:"Big",color:"Text.dark",children:o("credits.privacyPolicy")})}),e(k,{to:"/license",children:e(n,{type:"Big",color:"Text.dark",children:o("credits.license")})}),e(k,{to:"/makers",children:e(n,{type:"Big",color:"Text.dark",children:o("credits.credits")})}),e(N,{children:e(s,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Instagram"})})}),e(W,{children:e(n,{type:"Big",color:"Text.dark",onClick:()=>{D()},children:o("credits.contact")})})]})]})]})]})}),e($,{height:5,color:"Highlight.default"})]})}const G=c(r)`
    flex: 0 1 auto;
    width: 645px;
    border: 2px solid ${({theme:o})=>o.colors.Highlight.default};
    border-radius: 32px;
    background: ${({theme:o})=>o.colors.Background.Section.default};
    transition: height 0.3s ease-in-out;
`,J=c.img`
    height: 40px;
    background: transparent;
`;function K(){const{t:o}=B(),a=P();return e(G,{direction:"column",align:"stretch",gap:0,padding:"8px 8px",children:e(z,{options:["type","department","level","term"],onSearch:m=>{if(C(m)){alert(o("common.search.empty"));return}const g=new URLSearchParams;Object.entries(m).forEach(([f,d])=>{Array.isArray(d)?d.forEach(x=>{g.append(f,x.toString())}):d!=null&&d!==""&&g.append(f,d.toString())}),a(`/dictionary?${g.toString()}`)},SearchIcon:e(J,{src:"/otlplus-web-v4/pr-85/searchIcon.png",alt:"search"})})})}const Q=t.lazy(()=>p(()=>import("./index-zB-JuNG0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]))),X=t.lazy(()=>p(()=>import("./index-B9N5aPrz.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11,12,13]))),Y=t.lazy(()=>p(()=>import("./index-DBw29Fjv.js"),__vite__mapDeps([15,1,2,4,6,7,8,9,16,17,0,3,5,10,11,12,13,14,18]))),Z=t.lazy(()=>p(()=>import("./index-P6QLeNR0.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12,13]))),w=t.lazy(()=>p(()=>import("./index-vVjfulTD.js"),__vite__mapDeps([19,1,2,4,7,8,20,21,6,9,10,11,12,13]))),T=t.lazy(()=>p(()=>import("./index-DiQvHCCW.js"),__vite__mapDeps([22,1,2,4,23,10,6,7,8,9,12]))),L=t.lazy(()=>p(()=>import("./index-4w2-V69c.js"),__vite__mapDeps([24,1,2,4,6,7,8,9,10,12,13]))),A=t.lazy(()=>p(()=>import("./index-CiURSwls.js"),__vite__mapDeps([25,1,2,4,26,6,7,8,9,17,10,20,27,28,29,11,12,30,31,13]))),ee=c(r)`
    margin-top: 60px;
`,te=c(r)`
    max-width: 1298px;
    flex: 1 1 auto;

    ${u.laptop} {
        width: 100%;
        padding: 0 20px;
    }

    ${u.mobile} {
        padding: 0 10px;
    }
`,re=c(r)`
    height: 68px;
    z-index: 20;
`,ie=c(r)`
    min-height: 200px;
    width: 100%;
`;function l(){return e(ie,{direction:"column",align:"center",justify:"center",gap:0,children:e(F,{})})}const ke=R(function(){const a=_("mobile"),h=_("laptop");return e(S,{children:i(ee,{direction:"column",align:"center",gap:60,children:[i(te,{direction:"column",align:"center",justify:"stretch",gap:60,children:[e(re,{direction:"row",justify:"center",gap:0,style:{width:"100%"},padding:"0 20px",children:e(K,{})}),i(r,{direction:"column",align:"stretch",justify:"stretch",gap:24,style:{width:"100%"},children:[h?i(S,{children:[e(t.Suspense,{fallback:e(l,{}),children:e(A,{})}),i(r,{direction:a?"column":"row",align:"stretch",gap:24,style:{width:"100%"},children:[i(r,{direction:"column",align:"stretch",justify:"stretch",gap:24,flex:"1 1 0",children:[e(t.Suspense,{fallback:e(l,{}),children:e(L,{})}),e(t.Suspense,{fallback:e(l,{}),children:e(T,{})}),e(t.Suspense,{fallback:e(l,{}),children:e(w,{})})]}),e(t.Suspense,{fallback:e(l,{}),children:e(Y,{})})]})]}):i(r,{direction:"row",align:"stretch",gap:24,children:[e(r,{direction:"column",align:"stretch",gap:0,children:e(t.Suspense,{fallback:e(l,{}),children:e(A,{})})}),e(r,{direction:"column",align:"stretch",gap:24,children:i(r,{direction:"column",align:"stretch",gap:24,flex:"1 1 0",style:{width:"418px"},children:[e(t.Suspense,{fallback:e(l,{}),children:e(L,{})}),e(t.Suspense,{fallback:e(l,{}),children:e(T,{})}),e(t.Suspense,{fallback:e(l,{}),children:e(w,{})})]})})]}),!h&&i(r,{direction:"row",align:"stretch",gap:24,children:[e(t.Suspense,{fallback:e(l,{}),children:e(Z,{})}),e(t.Suspense,{fallback:e(l,{}),children:e(X,{})}),e(t.Suspense,{fallback:e(l,{}),children:e(Q,{})})]})]})]}),e(U,{})]})})});export{ke as default};
//# sourceMappingURL=_index-tueUPAzA.js.map
