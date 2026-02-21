import{u as k,a as D,j as e}from"./emotion-react-jsx-runtime.browser.esm-CZ3PqY9X.js";import{p as E,r}from"./chunk-JZWAC4HX-B3-CLQBC.js";import{s as d,F as p}from"./FlexWrapper-1RxTiCt0.js";import{e as M,g as z,I as S}from"./useIsDevice-B5j1Wl4D.js";import{I as v}from"./IconButton-DhKx_IPp.js";import y from"./index-D5LzTaZJ.js";import F from"./index-BQ0UiHGw.js";import I from"./index-B1IGUPwB.js";import"./index-mKYKhfNU.js";import"./env-CerkL0Dv.js";import"./useTranslation-CLmqNHv9.js";import"./LoadingCircle-DuUHvZ7K.js";import"./StyledDivider-BaIBFC-o.js";import"./ReviewBlock-B9HpQgpy.js";import"./Typography-CpRG0rkc.js";import"./useUserStore-tmANZOUg.js";import"./Widget-C7DS3Mk9.js";import"./Trans-Diqoo1rR.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"e9b321de5c054ce9590225fba9a2b7e6cbd84938"};var a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="6f62adc8-0a36-41ed-8cf8-1ddb89cc51d6",t._sentryDebugIdIdentifier="sentry-dbid-6f62adc8-0a36-41ed-8cf8-1ddb89cc51d6")}catch{}})();const $=M(E.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),L=M(E.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),_=d(p)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`,N=d(p)`
    width: 500%;
    height: 100%;
    transition: ${({transition:t})=>t};
    transform: translateX(
        calc(${({index:t})=>`-${t*20}%`} + ${({offset:t})=>`${t}px`})
    );
`,O=d(p)`
    width: 20%;
`,w=d.div`
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
`;function ct(){const t=k(),a=z("mobile"),[s,l]=r.useState(1),[j,i]=r.useState("transform 0.3s ease-in-out"),[c,f]=r.useState(!1),[u,m]=r.useState(null),[g,h]=r.useState(null),[C,b]=r.useState(0),R=r.useRef(null),T=()=>{c||(f(!0),i("transform 0.3s ease-in-out"),l(n=>n-1))},x=()=>{c||(f(!0),i("transform 0.3s ease-in-out"),l(n=>n+1))};return r.useEffect(()=>{if(!c)return;const o=setTimeout(()=>{s===0?(i("none"),l(3)):s===4&&(i("none"),l(1)),f(!1)},300);return()=>clearTimeout(o)},[s,c]),D(_,{direction:"column",gap:0,align:"stretch",justify:"stretch",ref:R,onTouchStart:n=>{if(c)return;const o=n.touches[0];o&&(m(o.clientX),h(o.clientX),i("none"))},onTouchMove:n=>{if(u===null)return;const o=n.touches[0];if(!o)return;h(o.clientX);const X=o.clientX-u;b(X)},onTouchEnd:()=>{if(u===null||g===null)return;const n=g-u,o=50;Math.abs(n)>o?n>0?T():x():i("transform 0.3s ease-in-out"),m(null),h(null),b(0),Math.abs(n)<=o&&i("transform 0.3s ease-in-out")},flex:a?"1 1 auto":"1 1 0",children:[e(N,{direction:"row",gap:0,align:"stretch",justify:"stretch",index:s,transition:j,offset:C,children:[e(y,{},"clone-last"),e(I,{},"recent"),e(F,{},"liked"),e(y,{},"hall"),e(I,{},"clone-first")].map((n,o)=>e(O,{direction:"row",align:"stretch",gap:0,children:n},o))}),e(w,{position:"left",children:e(v,{onClick:T,children:e(S,{size:20,color:t.colors.Text.default,onClick:()=>{},children:e($,{})})})}),e(w,{position:"right",children:e(v,{onClick:x,children:e(S,{size:20,color:t.colors.Text.default,onClick:()=>{},children:e(L,{})})})})]})}export{ct as default};
//# sourceMappingURL=index-CxcSezOt.js.map
