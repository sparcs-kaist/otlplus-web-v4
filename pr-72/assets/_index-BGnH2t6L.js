const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D4859wet.js","assets/emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js","assets/chunk-UIGDSWPH-ClhI_Z4l.js","assets/StyledDivider-Bnwy1K8M.js","assets/FlexWrapper-B6Hxm4Zw.js","assets/ReviewBlock-CwdubLB2.js","assets/useIsDevice-DfyzuUHy.js","assets/index-CdQeMUmI.js","assets/env-IyrSIH08.js","assets/useTranslation-DrmvPmDd.js","assets/LoadingCircle-uXxt2d9a.js","assets/Typography-DeI78L6T.js","assets/useUserStore-Bz5c7JIR.js","assets/Widget-e9ONaX_D.js","assets/Trans-CVg6-BNR.js","assets/index-BKoKR_MQ.js","assets/index-B4oajVI2.js","assets/index-Do55Y3ye.js","assets/index-DfzcS6zu.js","assets/media-MLnbxw48.js","assets/TextInputArea-3lt8rOV5.js","assets/index-BRoujxLF.js","assets/Line-VXlQtGVc.js","assets/index-DLUbcj6z.js","assets/index-BoGI4dyT.js","assets/renderTargetArea-CNpBdtNC.js","assets/proxy-CAofjNH5.js"])))=>i.map(i=>d[i]);
import{r as t,L as $,y as C,w as D}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{a as i,j as e,F as T}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{n as l,F as r}from"./FlexWrapper-B6Hxm4Zw.js";import{L as z}from"./LoadingCircle-uXxt2d9a.js";import{a as M}from"./index.esm-BWN9k0yk.js";import{L as H}from"./Line-VXlQtGVc.js";import{T as o}from"./Typography-DeI78L6T.js";import{m as b}from"./media-MLnbxw48.js";import{u as O}from"./useTranslation-DrmvPmDd.js";import{S as V,c as W}from"./checkEmpty-wy_fk_h3.js";import{g as v}from"./useIsDevice-DfyzuUHy.js";import"./proxy-CAofjNH5.js";import"./index-CdQeMUmI.js";import"./env-IyrSIH08.js";const N="modulepreload",U=function(n){return"/otlplus-web-v4/pr-72/"+n},E={},y=function(c,h,S){let u=Promise.resolve();if(h&&h.length>0){let w=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");u=w(h.map(d=>{if(d=U(d),d in E)return;E[d]=!0;const m=d.endsWith(".css"),k=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${k}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":N,m||(f.as="script"),f.crossOrigin="",f.href=d,s&&f.setAttribute("nonce",s),document.head.appendChild(f),m)return new Promise((R,F)=>{f.addEventListener("load",R),f.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${d}`)))})}))}function x(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return u.then(a=>{for(const s of a||[])s.status==="rejected"&&x(s.reason);return c().catch(x)})},q=()=>{const n=window.navigator.userAgent.toLowerCase();return navigator.maxTouchPoints&&navigator.maxTouchPoints>2?/android/.test(n)||/linux/.test(n)?"android":"ios":/mac/.test(n)?"mac":"PC"},G=()=>{const[n,c]=t.useState("PC");return t.useEffect(()=>{c(q())},[]),n},J=l(r)`
    width: 100%;
`,g=l.a`
    text-decoration: none;
`,L=l($)`
    text-decoration: none;
`,K=l(o)`
    cursor: pointer;
    text-decoration: none;
`,Q=l.img`
    height: 45px;
    background: transparent;

    ${b.tablet} {
        display: none;
    }
`,A=l.div`
    ${b.mobile} {
        display: none;
    }
`,X=l.div`
    display: none;

    ${b.mobile} {
        display: block;
    }
`,_=l(r)`
    width: 118px;
`;function Y(){const{t:n}=O(),c=G();function h(S){const u="https://apps.apple.com/kr/app/taxi-for-kaist/id6447231158",x="https://play.google.com/store/apps/details?id=org.sparcs.taxi_app",a="https://apps.apple.com/kr/app/otl/id1579878255",s="https://play.google.com/store/apps/details?id=org.sparcs.otlplus",w="https://apps.apple.com/kr/app/ara-for-kaist/id6457209147",d="https://play.google.com/store/apps/details?id=org.sparcs.newara",m="https://apps.apple.com/kr/app/kaist-buddy/id6502600498",k="https://play.google.com/store/apps/details?id=org.sparcs.buddy";switch(S){case"taxi":return c==="ios"||c==="mac"?u:x;case"otl":return c==="ios"||c==="mac"?a:s;case"ara":return c==="ios"||c==="mac"?w:d;case"buddy":return c==="ios"||c==="mac"?m:k;default:return""}}return i(J,{direction:"column",justify:"center",align:"stretch",gap:0,children:[e(r,{direction:"column",justify:"center",align:"stretch",gap:0,padding:"0px 20px 55px 20px",children:i(r,{direction:"row",justify:"center",align:"center",gap:127,children:[e(Q,{src:"/otlplus-web-v4/pr-72/headerIcon.png"}),i(r,{direction:"row",justify:"flex-start",align:"flex-start",gap:47,children:[e(A,{children:i(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(o,{type:"BiggerBold",color:"Highlight.default",children:"SPARCS"}),i(r,{direction:"column",gap:20,children:[e(g,{href:"https://www.sparcs.org/",target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"About SPARCS"})}),e(g,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"Instagram"})})]})]})}),e(A,{children:i(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(o,{type:"BiggerBold",color:"Highlight.default",children:"Services"}),i(r,{direction:"column",gap:20,children:[e(g,{href:"https://newara.sparcs.org/",target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"Ara"})}),e(g,{href:"https://taxi.sparcs.org/",target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(g,{href:"https://clubs.sparcs.org/",target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"Clubs"})}),e(o,{type:"Big",color:"Text.dark",children:"Students"})]})]})}),i(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(o,{type:"BiggerBold",color:"Highlight.default",children:"Apps"}),i(r,{direction:"column",gap:20,children:[e(g,{href:h("otl"),target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"OTL app"})}),e(g,{href:h("taxi"),target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(g,{href:h("ara"),target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"Ara"})})]})]}),i(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(o,{type:"BiggerBold",color:"Highlight.default",children:"Resources"}),i(r,{direction:"column",gap:20,children:[e(L,{to:"/privacy-policy",children:e(o,{type:"Big",color:"Text.dark",children:n("credits.privacyPolicy")})}),e(L,{to:"/license",children:e(o,{type:"Big",color:"Text.dark",children:n("credits.license")})}),e(L,{to:"/makers",children:e(o,{type:"Big",color:"Text.dark",children:n("credits.credits")})}),e(X,{children:e(g,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(o,{type:"Big",color:"Text.dark",children:"Instagram"})})}),e(K,{children:e(o,{type:"Big",color:"Text.dark",onClick:()=>{M()},children:n("credits.contact")})})]})]})]})]})}),e(H,{height:5,color:"Highlight.default"})]})}const Z=l(r)`
    flex: 0 1 auto;
    width: 645px;
    border: 2px solid ${({theme:n})=>n.colors.Highlight.default};
    border-radius: 32px;
    background: ${({theme:n})=>n.colors.Background.Section.default};
    transition: height 0.3s ease-in-out;
`,ee=l.img`
    height: 40px;
    background: transparent;
`;function te(){const{t:n}=O(),c=C();return e(Z,{direction:"column",align:"stretch",gap:0,padding:"8px 8px",children:e(V,{options:["type","department","level","term"],onSearch:S=>{if(W(S)){alert(n("common.search.empty"));return}const u=new URLSearchParams;Object.entries(S).forEach(([x,a])=>{Array.isArray(a)?a.forEach(s=>{u.append(x,s.toString())}):a!=null&&a!==""&&u.append(x,a.toString())}),c(`/dictionary?${u.toString()}`)},SearchIcon:e(ee,{src:"/otlplus-web-v4/pr-72/searchIcon.png",alt:"search"})})})}const re=t.lazy(()=>y(()=>import("./index-D4859wet.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),ne=t.lazy(()=>y(()=>import("./index-BKoKR_MQ.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),ie=t.lazy(()=>y(()=>import("./index-B4oajVI2.js"),__vite__mapDeps([16,1,2,4,6,7,8,9,5,10,11,12,0,3,13,14,15,17]))),oe=t.lazy(()=>y(()=>import("./index-Do55Y3ye.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),B=t.lazy(()=>y(()=>import("./index-DfzcS6zu.js"),__vite__mapDeps([18,1,2,4,7,8,19,20,6,9,11,12,13,14]))),P=t.lazy(()=>y(()=>import("./index-BRoujxLF.js"),__vite__mapDeps([21,1,2,22,4,11,6,7,8,9,13]))),I=t.lazy(()=>y(()=>import("./index-DLUbcj6z.js"),__vite__mapDeps([23,1,2,4,6,7,8,9,11,13,14]))),j=t.lazy(()=>y(()=>import("./index-BoGI4dyT.js"),__vite__mapDeps([24,1,2,4,11,19,6,7,8,9,12,13,25,26,14]))),ce=l(r)`
    margin-top: 60px;
`,ae=l(r)`
    max-width: 1298px;
    flex: 1 1 auto;

    ${b.laptop} {
        width: 100%;
        padding: 0 20px;
    }

    ${b.mobile} {
        padding: 0 10px;
    }
`,le=l(r)`
    height: 68px;
    z-index: 20;
`,se=l(r)`
    min-height: 200px;
    width: 100%;
`;function p(){return e(se,{direction:"column",align:"center",justify:"center",gap:0,children:e(z,{})})}const Le=D(function(){const c=v("mobile"),h=v("laptop");return e(T,{children:i(ce,{direction:"column",align:"center",gap:60,children:[i(ae,{direction:"column",align:"center",justify:"stretch",gap:60,children:[e(le,{direction:"row",justify:"center",gap:0,style:{width:"100%"},padding:"0 20px",children:e(te,{})}),i(r,{direction:"column",align:"stretch",justify:"stretch",gap:24,style:{width:"100%"},children:[h?i(T,{children:[e(t.Suspense,{fallback:e(p,{}),children:e(j,{})}),i(r,{direction:c?"column":"row",align:"stretch",gap:24,style:{width:"100%"},children:[i(r,{direction:"column",align:"stretch",justify:"stretch",gap:24,flex:"1 1 0",children:[e(t.Suspense,{fallback:e(p,{}),children:e(I,{})}),e(t.Suspense,{fallback:e(p,{}),children:e(P,{})}),e(t.Suspense,{fallback:e(p,{}),children:e(B,{})})]}),e(t.Suspense,{fallback:e(p,{}),children:e(ie,{})})]})]}):i(r,{direction:"row",align:"stretch",gap:24,children:[e(r,{direction:"column",align:"stretch",gap:0,children:e(t.Suspense,{fallback:e(p,{}),children:e(j,{})})}),e(r,{direction:"column",align:"stretch",gap:24,children:i(r,{direction:"column",align:"stretch",gap:24,flex:"1 1 0",style:{width:"418px"},children:[e(t.Suspense,{fallback:e(p,{}),children:e(I,{})}),e(t.Suspense,{fallback:e(p,{}),children:e(P,{})}),e(t.Suspense,{fallback:e(p,{}),children:e(B,{})})]})})]}),!h&&i(r,{direction:"row",align:"stretch",gap:24,children:[e(t.Suspense,{fallback:e(p,{}),children:e(oe,{})}),e(t.Suspense,{fallback:e(p,{}),children:e(ne,{})}),e(t.Suspense,{fallback:e(p,{}),children:e(re,{})})]})]})]}),e(Y,{})]})})});export{Le as default};
//# sourceMappingURL=_index-BGnH2t6L.js.map
