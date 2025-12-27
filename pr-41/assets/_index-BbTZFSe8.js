const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BDLfGtn_.js","assets/FlexWrapper-C0dsngQo.js","assets/jsx-runtime-u17CrQMm.js","assets/chunk-UIGDSWPH-NakEPbl8.js","assets/ReviewBlock-BnK7boNg.js","assets/useIsDevice-CZNUtxO9.js","assets/Typography-DTsae4U-.js","assets/Widget-D7VP5HFl.js","assets/Trans-CzvAu8Uq.js","assets/index-g7cpkg7c.js","assets/index-DsILmKYN.js","assets/index-Cpdn7rhc.js","assets/index-DlSM68VW.js","assets/TextInputArea-BQaSYp6W.js","assets/index-DFSkkGn6.js","assets/Line-DrU6Mk-V.js","assets/index-BZ1Zh3VT.js","assets/index-DTDTpZka.js","assets/useUserStore-Cs3WP2WQ.js"])))=>i.map(i=>d[i]);
import{a as t,L as C,x as F,w as D}from"./chunk-UIGDSWPH-NakEPbl8.js";import{n as l,F as r,j as i,a as e,b as T}from"./FlexWrapper-C0dsngQo.js";import{L as z}from"./LoadingCircle-C_DEuLlK.js";import{a as M}from"./index.esm-BWN9k0yk.js";import{L as H}from"./Line-DrU6Mk-V.js";import{T as n}from"./Typography-DTsae4U-.js";import{j as b,u as O,t as v}from"./useIsDevice-CZNUtxO9.js";import{S as V,c as W}from"./checkEmpty-D4GUJoge.js";import"./jsx-runtime-u17CrQMm.js";import"./proxy-D5-RWP6G.js";const N="modulepreload",U=function(o){return"/otlplus-web-v4/pr-41/"+o},E={},y=function(c,d,S){let u=Promise.resolve();if(d&&d.length>0){let w=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");u=w(d.map(p=>{if(p=U(p),p in E)return;E[p]=!0;const m=p.endsWith(".css"),x=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${x}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":N,m||(f.as="script"),f.crossOrigin="",f.href=p,s&&f.setAttribute("nonce",s),document.head.appendChild(f),m)return new Promise((R,$)=>{f.addEventListener("load",R),f.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${p}`)))})}))}function k(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return u.then(a=>{for(const s of a||[])s.status==="rejected"&&k(s.reason);return c().catch(k)})},q=()=>{const o=window.navigator.userAgent.toLowerCase();return navigator.maxTouchPoints&&navigator.maxTouchPoints>2?/android/.test(o)?"android":"ios":/mac/.test(o)?"mac":"PC"},G=()=>{const[o,c]=t.useState("PC");return t.useEffect(()=>{c(q())},[]),o},J=l(r)`
    width: 100%;
`,g=l.a`
    text-decoration: none;
`,L=l(C)`
    text-decoration: none;
`,K=l(n)`
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
`;function Y(){const{t:o}=O(),c=G();function d(S){const u="https://apps.apple.com/kr/app/taxi-for-kaist/id6447231158",k="https://play.google.com/store/apps/details?id=org.sparcs.taxi_app",a="https://apps.apple.com/kr/app/otl/id1579878255",s="https://play.google.com/store/apps/details?id=org.sparcs.otlplus",w="https://apps.apple.com/kr/app/ara-for-kaist/id6457209147",p="https://play.google.com/store/apps/details?id=org.sparcs.newara",m="https://apps.apple.com/kr/app/kaist-buddy/id6502600498",x="https://play.google.com/store/apps/details?id=org.sparcs.buddy";switch(S){case"taxi":return c==="ios"||c==="mac"?u:k;case"otl":return c==="ios"||c==="mac"?a:s;case"ara":return c==="ios"||c==="mac"?w:p;case"buddy":return c==="ios"||c==="mac"?m:x;default:return""}}return i(J,{direction:"column",justify:"center",align:"stretch",gap:0,children:[e(r,{direction:"column",justify:"center",align:"stretch",gap:0,padding:"0px 20px 55px 20px",children:i(r,{direction:"row",justify:"center",align:"center",gap:127,children:[e(Q,{src:"/otlplus-web-v4/pr-41/headerIcon.png"}),i(r,{direction:"row",justify:"flex-start",align:"flex-start",gap:47,children:[e(B,{children:i(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"SPARCS"}),i(r,{direction:"column",gap:20,children:[e(g,{href:"https://www.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"About SPARCS"})}),e(g,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Instagram"})})]})]})}),e(B,{children:i(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Services"}),i(r,{direction:"column",gap:20,children:[e(g,{href:"https://newara.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Ara"})}),e(g,{href:"https://taxi.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(g,{href:"https://clubs.sparcs.org/",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Clubs"})}),e(n,{type:"Big",color:"Text.dark",children:"Students"})]})]})}),i(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Apps"}),i(r,{direction:"column",gap:20,children:[e(g,{href:d("buddy"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Buddy app"})}),e(g,{href:d("otl"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"OTL app"})}),e(g,{href:d("taxi"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Taxi"})}),e(g,{href:d("ara"),target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Ara"})})]})]}),i(_,{direction:"column",justify:"flex-start",align:"flex-start",gap:40,children:[e(n,{type:"BiggerBold",color:"Highlight.default",children:"Resources"}),i(r,{direction:"column",gap:20,children:[e(L,{to:"/privacy-policy",children:e(n,{type:"Big",color:"Text.dark",children:o("credits.privacyPolicy")})}),e(L,{to:"/license",children:e(n,{type:"Big",color:"Text.dark",children:o("credits.license")})}),e(L,{to:"/makers",children:e(n,{type:"Big",color:"Text.dark",children:o("credits.credits")})}),e(X,{children:e(g,{href:"https://www.instagram.com/sparcs.kaist",target:"_blank",children:e(n,{type:"Big",color:"Text.dark",children:"Instagram"})})}),e(K,{children:e(n,{type:"Big",color:"Text.dark",onClick:()=>{M()},children:o("credits.contact")})})]})]})]})]})}),e(H,{height:5,color:"Highlight.default"})]})}const Z=l(r)`
    flex: 0 1 auto;
    width: 645px;
    border: 2px solid ${({theme:o})=>o.colors.Highlight.default};
    border-radius: 32px;
    background: ${({theme:o})=>o.colors.Background.Section.default};
    transition: height 0.3s ease-in-out;
`,ee=l.img`
    height: 40px;
    background: transparent;
`;function te(){const{t:o}=O(),c=F();return e(Z,{direction:"column",align:"stretch",gap:0,padding:"8px 8px",children:e(V,{options:["type","department","level","term"],onSearch:S=>{if(W(S)){alert(o("common.search.empty"));return}const u=new URLSearchParams;Object.entries(S).forEach(([k,a])=>{Array.isArray(a)?a.forEach(s=>{u.append(k,s.toString())}):a!=null&&a!==""&&u.append(k,a.toString())}),c(`/dictionary?${u.toString()}`)},SearchIcon:e(ee,{src:"/otlplus-web-v4/pr-41/searchIcon.png",alt:"search"})})})}const re=t.lazy(()=>y(()=>import("./index-BDLfGtn_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),ne=t.lazy(()=>y(()=>import("./index-g7cpkg7c.js"),__vite__mapDeps([9,1,2,3,4,5,6,7,8]))),ie=t.lazy(()=>y(()=>import("./index-DsILmKYN.js"),__vite__mapDeps([10,1,2,3,5,0,4,6,7,8,9,11]))),oe=t.lazy(()=>y(()=>import("./index-Cpdn7rhc.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8]))),A=t.lazy(()=>y(()=>import("./index-DlSM68VW.js"),__vite__mapDeps([12,1,2,3,5,13,6,7,8]))),P=t.lazy(()=>y(()=>import("./index-DFSkkGn6.js"),__vite__mapDeps([14,1,2,3,15,6,5,7]))),I=t.lazy(()=>y(()=>import("./index-BZ1Zh3VT.js"),__vite__mapDeps([16,1,2,3,5,6,7,8]))),j=t.lazy(()=>y(()=>import("./index-DTDTpZka.js"),__vite__mapDeps([17,1,2,3,5,6,18,7,8]))),ce=l(r)`
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
`;function h(){return e(se,{direction:"column",align:"center",justify:"center",gap:0,children:e(z,{})})}const Se=D(function(){const c=v("mobile"),d=v("laptop");return e(T,{children:i(ce,{direction:"column",align:"center",gap:60,children:[i(ae,{direction:"column",align:"center",justify:"stretch",gap:60,children:[e(le,{direction:"row",justify:"center",gap:0,style:{width:"100%"},padding:"0 20px",children:e(te,{})}),i(r,{direction:"column",justify:"center",gap:24,style:{width:"100%"},children:[d?i(T,{children:[e(t.Suspense,{fallback:e(h,{}),children:e(j,{})}),i(r,{direction:c?"column":"row",align:"stretch",gap:24,style:{width:"100%"},children:[i(r,{direction:"column",align:"stretch",gap:24,flex:"1 1 0",children:[e(t.Suspense,{fallback:e(h,{}),children:e(I,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(P,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(A,{})})]}),e(t.Suspense,{fallback:e(h,{}),children:e(ie,{})})]})]}):i(r,{direction:"row",align:"stretch",gap:24,children:[e(r,{direction:"column",align:"stretch",gap:0,children:e(t.Suspense,{fallback:e(h,{}),children:e(j,{})})}),e(r,{direction:"column",align:"stretch",gap:24,children:i(r,{direction:"column",align:"stretch",gap:24,flex:"1 1 0",style:{width:"418px"},children:[e(t.Suspense,{fallback:e(h,{}),children:e(I,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(P,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(A,{})})]})})]}),!d&&i(r,{direction:"row",align:"stretch",gap:24,children:[e(t.Suspense,{fallback:e(h,{}),children:e(oe,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(ne,{})}),e(t.Suspense,{fallback:e(h,{}),children:e(re,{})})]})]})]}),e(Y,{})]})})});export{Se as default};
