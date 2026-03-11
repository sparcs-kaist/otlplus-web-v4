import{u as k,a as D,j as e}from"./emotion-react-jsx-runtime.browser.esm-D98CELEh.js";import{p as E,r}from"./chunk-JZWAC4HX-BOtFzpof.js";import{s as d,F as p}from"./FlexWrapper-ChuZ0NYc.js";import{e as M,g as z,I as b}from"./useIsDevice-B9-ahimV.js";import{I as v}from"./IconButton-BW_NMOwq.js";import y from"./index-BPFIpYhG.js";import F from"./index-CAmvlOqx.js";import I from"./index-Djj09fEm.js";import"./index-DdW2Dvkv.js";import"./env-0NEQvks5.js";import"./useTranslation-8tYiwMVJ.js";import"./LoadingCircle-dZZkkGCO.js";import"./StyledDivider-YOR9yTFJ.js";import"./ReviewBlock-JnU5dbQ4.js";import"./Typography-CNGcIaya.js";import"./useUserStore-CarhodUF.js";import"./Widget-BAtdq3Z2.js";import"./Trans-Bvnc0K3K.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};t.SENTRY_RELEASE={id:"f2288ed22f64822f60a07dad5f61f97aedeee381"};var c=new t.Error().stack;c&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[c]="3d0a794a-037d-42fe-91a3-921df4282f9f",t._sentryDebugIdIdentifier="sentry-dbid-3d0a794a-037d-42fe-91a3-921df4282f9f")}catch{}})();const $=M(E.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),L=M(E.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),_=d(p)`
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
`;function at(){const t=k(),c=z("mobile"),[s,l]=r.useState(1),[j,i]=r.useState("transform 0.3s ease-in-out"),[a,f]=r.useState(!1),[u,m]=r.useState(null),[g,h]=r.useState(null),[C,T]=r.useState(0),R=r.useRef(null),x=()=>{a||(f(!0),i("transform 0.3s ease-in-out"),l(n=>n-1))},S=()=>{a||(f(!0),i("transform 0.3s ease-in-out"),l(n=>n+1))};return r.useEffect(()=>{if(!a)return;const o=setTimeout(()=>{s===0?(i("none"),l(3)):s===4&&(i("none"),l(1)),f(!1)},300);return()=>clearTimeout(o)},[s,a]),D(_,{direction:"column",gap:0,align:"stretch",justify:"stretch",ref:R,onTouchStart:n=>{if(a)return;const o=n.touches[0];o&&(m(o.clientX),h(o.clientX),i("none"))},onTouchMove:n=>{if(u===null)return;const o=n.touches[0];if(!o)return;h(o.clientX);const X=o.clientX-u;T(X)},onTouchEnd:()=>{if(u===null||g===null)return;const n=g-u,o=50;Math.abs(n)>o?n>0?x():S():i("transform 0.3s ease-in-out"),m(null),h(null),T(0),Math.abs(n)<=o&&i("transform 0.3s ease-in-out")},flex:c?"1 1 auto":"1 1 0",children:[e(N,{direction:"row",gap:0,align:"stretch",justify:"stretch",index:s,transition:j,offset:C,children:[e(y,{},"clone-last"),e(I,{},"recent"),e(F,{},"liked"),e(y,{},"hall"),e(I,{},"clone-first")].map((n,o)=>e(O,{direction:"row",align:"stretch",gap:0,children:n},o))}),e(w,{position:"left",children:e(v,{onClick:x,children:e(b,{size:20,color:t.colors.Text.default,onClick:()=>{},children:e($,{})})})}),e(w,{position:"right",children:e(v,{onClick:S,children:e(b,{size:20,color:t.colors.Text.default,onClick:()=>{},children:e(L,{})})})})]})}export{at as default};
//# sourceMappingURL=index-CHk0RCZX.js.map
