import{u as k,a as D,j as e}from"./emotion-react-jsx-runtime.browser.esm-7w0R3wTG.js";import{p as E,r}from"./chunk-JZWAC4HX-Dbw9P7LM.js";import{s as u,F as p}from"./FlexWrapper-CEKwsOR0.js";import{e as M,g as z,I as S}from"./useIsDevice-vcjDp4uA.js";import{I as v}from"./IconButton-Di8WI1Eu.js";import y from"./index-BrlNfGN_.js";import F from"./index-CM4VziM4.js";import I from"./index-Cz4W20c-.js";import"./index-Conjn_0h.js";import"./env-DvihSkRz.js";import"./useTranslation-CCR13DjE.js";import"./LoadingCircle-Bt6wgm7h.js";import"./StyledDivider-Dc6_QN7X.js";import"./ReviewBlock-DYZQq9A5.js";import"./Typography-B3oc9GQs.js";import"./useUserStore-CiDoWafC.js";import"./Widget-2XgOTFT2.js";import"./Trans-CnBJBw9g.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"c0aa49217266cb66009d026813d07b3044ee3d8c"};var a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="6f62adc8-0a36-41ed-8cf8-1ddb89cc51d6",t._sentryDebugIdIdentifier="sentry-dbid-6f62adc8-0a36-41ed-8cf8-1ddb89cc51d6")}catch{}})();const $=M(E.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),L=M(E.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),_=u(p)`
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
`;function ct(){const t=k(),a=z("mobile"),[s,l]=r.useState(1),[j,i]=r.useState("transform 0.3s ease-in-out"),[c,f]=r.useState(!1),[d,m]=r.useState(null),[g,h]=r.useState(null),[C,T]=r.useState(0),R=r.useRef(null),x=()=>{c||(f(!0),i("transform 0.3s ease-in-out"),l(n=>n-1))},b=()=>{c||(f(!0),i("transform 0.3s ease-in-out"),l(n=>n+1))};return r.useEffect(()=>{if(!c)return;const o=setTimeout(()=>{s===0?(i("none"),l(3)):s===4&&(i("none"),l(1)),f(!1)},300);return()=>clearTimeout(o)},[s,c]),D(_,{direction:"column",gap:0,align:"stretch",justify:"stretch",ref:R,onTouchStart:n=>{if(c)return;const o=n.touches[0];o&&(m(o.clientX),h(o.clientX),i("none"))},onTouchMove:n=>{if(d===null)return;const o=n.touches[0];if(!o)return;h(o.clientX);const X=o.clientX-d;T(X)},onTouchEnd:()=>{if(d===null||g===null)return;const n=g-d,o=50;Math.abs(n)>o?n>0?x():b():i("transform 0.3s ease-in-out"),m(null),h(null),T(0),Math.abs(n)<=o&&i("transform 0.3s ease-in-out")},flex:a?"1 1 auto":"1 1 0",children:[e(N,{direction:"row",gap:0,align:"stretch",justify:"stretch",index:s,transition:j,offset:C,children:[e(y,{},"clone-last"),e(I,{},"recent"),e(F,{},"liked"),e(y,{},"hall"),e(I,{},"clone-first")].map((n,o)=>e(O,{direction:"row",align:"stretch",gap:0,children:n},o))}),e(w,{position:"left",children:e(v,{onClick:x,children:e(S,{size:20,color:t.colors.Text.default,onClick:()=>{},children:e($,{})})})}),e(w,{position:"right",children:e(v,{onClick:b,children:e(S,{size:20,color:t.colors.Text.default,onClick:()=>{},children:e(L,{})})})})]})}export{ct as default};
//# sourceMappingURL=index-CPFNwdeT.js.map
