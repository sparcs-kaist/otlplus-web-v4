const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CxgmZvmf.js","assets/emotion-react-jsx-runtime.browser.esm-Cql-SmI8.js","assets/chunk-UIGDSWPH-ClC-Bows.js","assets/StyledDivider-Dbgy7ftO.js","assets/FlexWrapper-B3Tmr1Ow.js","assets/ReviewBlock-DEVNBjcP.js","assets/useIsDevice-DnuNoJZ_.js","assets/index-DasAm1UD.js","assets/env-x7j716XO.js","assets/Typography-YMZw2QHy.js","assets/Widget-Crs3_Da_.js","assets/Trans-f23ayD2D.js","assets/index-_33v-vgE.js","assets/index-X6XSiE46.js","assets/index-Cab7GgW-.js","assets/index-C8fVAiR2.js","assets/TextInputArea-CSuzkfcU.js","assets/useUserStore-B-P0R9Aj.js","assets/index-chwRhEEM.js","assets/Line-DqqpvMJr.js","assets/index-CBGUkU3u.js","assets/index-zUKMOIXL.js","assets/renderTargetArea-ii_7Dno9.js","assets/proxy-C1eNn18-.js"])))=>i.map(i=>d[i]);
import{r as t,L as $,y as C,w as D}from"./chunk-UIGDSWPH-ClC-Bows.js";import{a as o,j as e,F as T}from"./emotion-react-jsx-runtime.browser.esm-Cql-SmI8.js";import{n as l,F as r}from"./FlexWrapper-B3Tmr1Ow.js";import{L as z}from"./LoadingCircle-CrscqRbC.js";import{a as M}from"./index.esm-BWN9k0yk.js";import{L as H}from"./Line-DqqpvMJr.js";import{T as i}from"./Typography-YMZw2QHy.js";import{g as b,i as v}from"./useIsDevice-DnuNoJZ_.js";import{u as j}from"./index-DasAm1UD.js";import{S as V,c as W}from"./checkEmpty-DOWghJLg.js";import"./env-x7j716XO.js";import"./proxy-C1eNn18-.js";const N="modulepreload",U=function(n){return"/otlplus-web-v4/pr-57/"+n},E={},y=function(c,d,S){let u=Promise.resolve();if(d&&d.length>0){let w=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");u=w(d.map(p=>{if(p=U(p),p in E)return;E[p]=!0;const m=p.endsWith(".css"),x=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":N,m||(f.as="script"),f.crossOrigin="",f.href=p,s&&f.setAttribute("nonce",s),document.head.appendChild(f),m)return new Promise((R,F)=>{f.addEventListener("load",R),f.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${p}`)))})}))}function k(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return u.then(a=>{for(const s of a||[])s.status==="rejected"&&k(s.reason);return c().catch(k)})},q=()=>{const n=window.navigator.userAgent.toLowerCase();return navigator.maxTouchPoints&&navigator.maxTouchPoints>2?/android/.test(n)||/linux/.test(n)?"android":"ios":/mac/.test(n)?"mac":"PC"},G=()=>{const[n,c]=t.useState("PC");return t.useEffect(()=>{c(q())},[]),n},J=l(r)`
    width: 100%;
`,g=l.a`
    text-decoration: none;
`,L=l($)`
    text-decoration: none;
`,K=l(i)`
    cursor: pointer;
    text-decoration: none;
`,Q=l.img`
    height: 45px;
    background: transparent;

    ${b.tablet} {
        display: none;
    }
`,B=l.div`
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
`;function Y(){const{t:n}=j(),c=G();function d(S){const u="https://apps.apple.com/kr/app/taxi-for-kaist/id6447231158",k="https://play.google.com/store/apps/details?id=org.sparcs.taxi_app",a="https://apps.apple.com/kr/app/otl/id1579878255",s="https://play.google.com/store/apps/details?id=org.sparcs.otlplus",w="https://apps.apple.com/kr/app/ara-for-kaist/id6457209147",p="https://play.google.com/store/apps/details?id=org.sparcs.newara",m="https://apps.apple.com/kr/app/kaist-buddy/id6502600498",x="https://play.google.com/store/apps/details?id=org.sparcs.buddy";switch(S){case"taxi":return c==="ios"||c==="mac"?u:k;case"otl":return c==="ios"||c==="mac"?a:s;case"ara":return c==="ios"||c==="mac"?w:p;case"buddy":return c==="ios"||c==="mac"?m:x;default:return""}}return o(J,{direction:"column",justify:"center",align:"stretch",gap:0,children:[e(r,{direction:"column",justify:"center",align:"stretch",gap:0,padding:"0px 20px 55px 20px",children:o(r,{direction:"row",justify:"center",align:"center",gap:127,children:[e(Q,{src:"/otlplus-web-v4/pr-57/headerIcon.png"}),o(r,{direction:"row",justify:"flex-start",align:"flex-start",gap:47,children:[e(B,{children:o(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(i,{type:"BiggerBold",color:"Highlight.default",children:"SPARCS"}),o(r,{direction:"column",gap:20,children:[e(g,{href:"https://www.sparcs.org/",target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"About SPARCS"})}),e(g,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"Instagram"})})]})]})}),e(B,{children:o(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(i,{type:"BiggerBold",color:"Highlight.default",children:"Services"}),o(r,{direction:"column",gap:20,children:[e(g,{href:"https://newara.sparcs.org/",target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"Ara"})}),e(g,{href:"https://taxi.sparcs.org/",target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(g,{href:"https://clubs.sparcs.org/",target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"Clubs"})}),e(i,{type:"Big",color:"Text.dark",children:"Students"})]})]})}),o(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(i,{type:"BiggerBold",color:"Highlight.default",children:"Apps"}),o(r,{direction:"column",gap:20,children:[e(g,{href:d("buddy"),target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"Buddy app"})}),e(g,{href:d("otl"),target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"OTL app"})}),e(g,{href:d("taxi"),target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(g,{href:d("ara"),target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"Ara"})})]})]}),o(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(i,{type:"BiggerBold",color:"Highlight.default",children:"Resources"}),o(r,{direction:"column",gap:20,children:[e(L,{to:"/privacy-policy",children:e(i,{type:"Big",color:"Text.dark",children:n("credits.privacyPolicy")})}),e(L,{to:"/license",children:e(i,{type:"Big",color:"Text.dark",children:n("credits.license")})}),e(L,{to:"/makers",children:e(i,{type:"Big",color:"Text.dark",children:n("credits.credits")})}),e(X,{children:e(g,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(i,{type:"Big",color:"Text.dark",children:"Instagram"})})}),e(K,{children:e(i,{type:"Big",color:"Text.dark",onClick:()=>{M()},children:n("credits.contact")})})]})]})]})]})}),e(H,{height:5,color:"Highlight.default"})]})}const Z=l(r)`
    flex: 0 1 auto;
    width: 645px;
    border: 2px solid ${({theme:n})=>n.colors.Highlight.default};
    border-radius: 32px;
    background: ${({theme:n})=>n.colors.Background.Section.default};
    transition: height 0.3s ease-in-out;
`,ee=l.img`
    height: 40px;
    background: transparent;
`;function te(){const{t:n}=j(),c=C();return e(Z,{direction:"column",align:"stretch",gap:0,padding:"8px 8px",children:e(V,{options:["type","department","level","term"],onSearch:S=>{if(W(S)){alert(n("common.search.empty"));return}const u=new URLSearchParams;Object.entries(S).forEach(([k,a])=>{Array.isArray(a)?a.forEach(s=>{u.append(k,s.toString())}):a!=null&&a!==""&&u.append(k,a.toString())}),c(`/dictionary?${u.toString()}`)},SearchIcon:e(ee,{src:"/otlplus-web-v4/pr-57/searchIcon.png",alt:"search"})})})}const re=t.lazy(()=>y(()=>import("./index-CxgmZvmf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),ne=t.lazy(()=>y(()=>import("./index-_33v-vgE.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10,11]))),ie=t.lazy(()=>y(()=>import("./index-X6XSiE46.js"),__vite__mapDeps([13,1,2,4,6,7,8,0,3,5,9,10,11,12,14]))),oe=t.lazy(()=>y(()=>import("./index-Cab7GgW-.js"),__vite__mapDeps([14,1,2,3,4,5,6,7,8,9,10,11]))),A=t.lazy(()=>y(()=>import("./index-C8fVAiR2.js"),__vite__mapDeps([15,1,2,4,6,7,8,16,9,17,10,11]))),P=t.lazy(()=>y(()=>import("./index-chwRhEEM.js"),__vite__mapDeps([18,1,2,19,4,9,6,7,8,10]))),I=t.lazy(()=>y(()=>import("./index-CBGUkU3u.js"),__vite__mapDeps([20,1,2,4,6,7,8,9,10,11]))),O=t.lazy(()=>y(()=>import("./index-zUKMOIXL.js"),__vite__mapDeps([21,1,2,4,9,6,7,8,17,10,22,23,11]))),ce=l(r)`
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
`;function h(){return e(se,{direction:"column",align:"center",justify:"center",gap:0,children:e(z,{})})}const _e=D(function(){const c=v("mobile"),d=v("laptop");return e(T,{children:o(ce,{direction:"column",align:"center",gap:60,children:[o(ae,{direction:"column",align:"center",justify:"stretch",gap:60,children:[e(le,{direction:"row",justify:"center",gap:0,style:{width:"100%"},padding:"0 20px",children:e(te,{})}),o(r,{direction:"column",align:"stretch",justify:"stretch",gap:24,style:{width:"100%"},children:[d?o(T,{children:[e(t.Suspense,{fallback:e(h,{}),children:e(O,{})}),o(r,{direction:c?"column":"row",align:"stretch",gap:24,style:{width:"100%"},children:[o(r,{direction:"column",align:"stretch",gap:24,flex:"1 1 0",children:[e(t.Suspense,{fallback:e(h,{}),children:e(I,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(P,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(A,{})})]}),e(t.Suspense,{fallback:e(h,{}),children:e(ie,{})})]})]}):o(r,{direction:"row",align:"stretch",gap:24,children:[e(r,{direction:"column",align:"stretch",gap:0,children:e(t.Suspense,{fallback:e(h,{}),children:e(O,{})})}),e(r,{direction:"column",align:"stretch",gap:24,children:o(r,{direction:"column",align:"stretch",gap:24,flex:"1 1 0",style:{width:"418px"},children:[e(t.Suspense,{fallback:e(h,{}),children:e(I,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(P,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(A,{})})]})})]}),!d&&o(r,{direction:"row",align:"stretch",gap:24,children:[e(t.Suspense,{fallback:e(h,{}),children:e(oe,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(ne,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(re,{})})]})]})]}),e(Y,{})]})})});export{_e as default};
//# sourceMappingURL=_index-DtYy5d3w.js.map
