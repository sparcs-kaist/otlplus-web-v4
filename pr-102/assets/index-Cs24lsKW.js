import{u as k,a as D,j as t}from"./emotion-react-jsx-runtime.browser.esm-DUmYexnX.js";import{p as E,r as i}from"./chunk-EPOLDU6W-DQKiFOjn.js";import{n as d,F as p}from"./FlexWrapper-CTrEas-V.js";import{e as M,g as z,I as S}from"./useIsDevice-C2GQPT6y.js";import{I as y}from"./IconButton-CNyX9dPR.js";import w from"./index-OUTMYYG0.js";import F from"./index-DvbhHAQN.js";import v from"./index-ByItu0pq.js";import"./index-D88TTaBc.js";import"./env-CAsOuN3y.js";import"./useTranslation-T7aNdaXM.js";import"./LoadingCircle-C4b2dRvE.js";import"./StyledDivider-MHpkWQMB.js";import"./ReviewBlock--engBhv3.js";import"./Typography-BSrXKA9t.js";import"./useUserStore-C3EuhHd2.js";import"./Widget-BqLQ8Ggv.js";import"./Trans-Bq6T4tB5.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ca4a78ff269da3d3e416f4f3ebc9a14b37545d76"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="3944c430-b636-4a43-be99-952e157f3d1f",e._sentryDebugIdIdentifier="sentry-dbid-3944c430-b636-4a43-be99-952e157f3d1f")})()}catch{}const $=M(E.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),L=M(E.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),_=d(p)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`,N=d(p)`
    width: 500%;
    height: 100%;
    transition: ${({transition:e})=>e};
    transform: translateX(
        calc(${({index:e})=>`-${e*20}%`} + ${({offset:e})=>`${e}px`})
    );
`,O=d(p)`
    width: 20%;
`,I=d.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({position:e})=>e==="left"?"left: 8px;":"right: 8px;"}
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
`;function ae(){const e=k(),s=z("mobile"),[l,c]=i.useState(1),[j,r]=i.useState("transform 0.3s ease-in-out"),[a,f]=i.useState(!1),[u,m]=i.useState(null),[g,h]=i.useState(null),[C,b]=i.useState(0),R=i.useRef(null),T=()=>{a||(f(!0),r("transform 0.3s ease-in-out"),c(n=>n-1))},x=()=>{a||(f(!0),r("transform 0.3s ease-in-out"),c(n=>n+1))};return i.useEffect(()=>{if(!a)return;const o=setTimeout(()=>{l===0?(r("none"),c(3)):l===4&&(r("none"),c(1)),f(!1)},300);return()=>clearTimeout(o)},[l,a]),D(_,{direction:"column",gap:0,align:"stretch",justify:"stretch",ref:R,onTouchStart:n=>{if(a)return;const o=n.touches[0];o&&(m(o.clientX),h(o.clientX),r("none"))},onTouchMove:n=>{if(u===null)return;const o=n.touches[0];if(!o)return;h(o.clientX);const X=o.clientX-u;b(X)},onTouchEnd:()=>{if(u===null||g===null)return;const n=g-u,o=50;Math.abs(n)>o?n>0?T():x():r("transform 0.3s ease-in-out"),m(null),h(null),b(0),Math.abs(n)<=o&&r("transform 0.3s ease-in-out")},flex:s?"1 1 auto":"1 1 0",children:[t(N,{direction:"row",gap:0,align:"stretch",justify:"stretch",index:l,transition:j,offset:C,children:[t(w,{},"clone-last"),t(v,{},"recent"),t(F,{},"liked"),t(w,{},"hall"),t(v,{},"clone-first")].map((n,o)=>t(O,{direction:"row",align:"stretch",gap:0,children:n},o))}),t(I,{position:"left",children:t(y,{onClick:T,children:t(S,{size:20,color:e.colors.Text.default,onClick:()=>{},children:t($,{})})})}),t(I,{position:"right",children:t(y,{onClick:x,children:t(S,{size:20,color:e.colors.Text.default,onClick:()=>{},children:t(L,{})})})})]})}export{ae as default};
//# sourceMappingURL=index-Cs24lsKW.js.map
