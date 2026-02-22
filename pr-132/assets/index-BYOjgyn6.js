import{u as k,a as D,j as e}from"./emotion-react-jsx-runtime.browser.esm-CEuHzFsl.js";import{p as E,r}from"./chunk-JZWAC4HX-CLyBVW00.js";import{s as u,F as p}from"./FlexWrapper-BKgRhobj.js";import{e as M,g as z,I as b}from"./useIsDevice-CE-wOeI_.js";import{I as v}from"./IconButton-BRb5mta7.js";import y from"./index-DGLuMY9U.js";import F from"./index-D8uuoXfQ.js";import I from"./index-BEkid1Xb.js";import"./index-CY0Fap4D.js";import"./env-C8yU1GCz.js";import"./useTranslation-BBI9J35P.js";import"./LoadingCircle-BfO7aSJ_.js";import"./StyledDivider-DALX6EL-.js";import"./ReviewBlock-C4OVtzMy.js";import"./Typography-ChfspkpA.js";import"./useUserStore-D-kM-l4Y.js";import"./Widget-Bdt17f7J.js";import"./Trans-ngCVmP-o.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"1f66a93a2e73ddc5421829c6c9db82df82d87106"};var c=new t.Error().stack;c&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[c]="d137175d-a9ad-4c2d-88c0-02d9db8e269f",t._sentryDebugIdIdentifier="sentry-dbid-d137175d-a9ad-4c2d-88c0-02d9db8e269f")}catch{}})();const $=M(E.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),L=M(E.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),_=u(p)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`,N=u(p)`
    width: 500%;
    height: 100%;
    transition: ${({transition:t})=>t};
    transform: translateX(
        calc(${({index:t})=>`-${t*20}%`} + ${({offset:t})=>`${t}px`})
    );
`,O=u(p)`
    width: 20%;
`,w=u.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({position:t})=>t==="left"?"left: 8px;":"right: 8px;"}
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
`;function at(){const t=k(),c=z("mobile"),[s,l]=r.useState(1),[j,i]=r.useState("transform 0.3s ease-in-out"),[a,f]=r.useState(!1),[d,m]=r.useState(null),[g,h]=r.useState(null),[C,T]=r.useState(0),R=r.useRef(null),x=()=>{a||(f(!0),i("transform 0.3s ease-in-out"),l(n=>n-1))},S=()=>{a||(f(!0),i("transform 0.3s ease-in-out"),l(n=>n+1))};return r.useEffect(()=>{if(!a)return;const o=setTimeout(()=>{s===0?(i("none"),l(3)):s===4&&(i("none"),l(1)),f(!1)},300);return()=>clearTimeout(o)},[s,a]),D(_,{direction:"column",gap:0,align:"stretch",justify:"stretch",ref:R,onTouchStart:n=>{if(a)return;const o=n.touches[0];o&&(m(o.clientX),h(o.clientX),i("none"))},onTouchMove:n=>{if(d===null)return;const o=n.touches[0];if(!o)return;h(o.clientX);const X=o.clientX-d;T(X)},onTouchEnd:()=>{if(d===null||g===null)return;const n=g-d,o=50;Math.abs(n)>o?n>0?x():S():i("transform 0.3s ease-in-out"),m(null),h(null),T(0),Math.abs(n)<=o&&i("transform 0.3s ease-in-out")},flex:c?"1 1 auto":"1 1 0",children:[e(N,{direction:"row",gap:0,align:"stretch",justify:"stretch",index:s,transition:j,offset:C,children:[e(y,{},"clone-last"),e(I,{},"recent"),e(F,{},"liked"),e(y,{},"hall"),e(I,{},"clone-first")].map((n,o)=>e(O,{direction:"row",align:"stretch",gap:0,children:n},o))}),e(w,{position:"left",children:e(v,{onClick:x,children:e(b,{size:20,color:t.colors.Text.default,onClick:()=>{},children:e($,{})})})}),e(w,{position:"right",children:e(v,{onClick:S,children:e(b,{size:20,color:t.colors.Text.default,onClick:()=>{},children:e(L,{})})})})]})}export{at as default};
//# sourceMappingURL=index-BYOjgyn6.js.map
