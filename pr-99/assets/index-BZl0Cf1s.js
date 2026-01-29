import{u as k,a as D,j as t}from"./emotion-react-jsx-runtime.browser.esm-8UMkxFz9.js";import{p as E,r as i}from"./chunk-EPOLDU6W-KpoCz4BB.js";import{n as d,F as p}from"./FlexWrapper-B5D4Zkyg.js";import{e as M,g as z,I as S}from"./useIsDevice-Cuofnmc6.js";import{I as y}from"./IconButton-DcufPfG_.js";import w from"./index-lO6YZmO5.js";import F from"./index-C9C6DPHK.js";import v from"./index-CKO68VK6.js";import"./index-D47CrH3F.js";import"./env-DAdN_rdt.js";import"./useTranslation-ByazR4ZC.js";import"./LoadingCircle-8Hs_QblI.js";import"./StyledDivider-CEav1LGh.js";import"./ReviewBlock-UPj_rFBj.js";import"./Typography-KcI2YyzW.js";import"./useUserStore-BX_Omjgh.js";import"./Widget-Dmlt48UI.js";import"./Trans-l4mlJpBm.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"d1eb23f3da0295132181d6b2224cb1631fc7940e"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="9aa3f6b1-6fd9-4167-ac71-0881f5781c0e",e._sentryDebugIdIdentifier="sentry-dbid-9aa3f6b1-6fd9-4167-ac71-0881f5781c0e")})()}catch{}const $=M(E.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),L=M(E.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),_=d(p)`
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
`;function ae(){const e=k(),s=z("mobile"),[c,l]=i.useState(1),[j,r]=i.useState("transform 0.3s ease-in-out"),[a,f]=i.useState(!1),[u,m]=i.useState(null),[g,h]=i.useState(null),[C,b]=i.useState(0),R=i.useRef(null),T=()=>{a||(f(!0),r("transform 0.3s ease-in-out"),l(n=>n-1))},x=()=>{a||(f(!0),r("transform 0.3s ease-in-out"),l(n=>n+1))};return i.useEffect(()=>{if(!a)return;const o=setTimeout(()=>{c===0?(r("none"),l(3)):c===4&&(r("none"),l(1)),f(!1)},300);return()=>clearTimeout(o)},[c,a]),D(_,{direction:"column",gap:0,align:"stretch",justify:"stretch",ref:R,onTouchStart:n=>{if(a)return;const o=n.touches[0];o&&(m(o.clientX),h(o.clientX),r("none"))},onTouchMove:n=>{if(u===null)return;const o=n.touches[0];if(!o)return;h(o.clientX);const X=o.clientX-u;b(X)},onTouchEnd:()=>{if(u===null||g===null)return;const n=g-u,o=50;Math.abs(n)>o?n>0?T():x():r("transform 0.3s ease-in-out"),m(null),h(null),b(0),Math.abs(n)<=o&&r("transform 0.3s ease-in-out")},flex:s?"1 1 auto":"1 1 0",children:[t(N,{direction:"row",gap:0,align:"stretch",justify:"stretch",index:c,transition:j,offset:C,children:[t(w,{},"clone-last"),t(v,{},"recent"),t(F,{},"liked"),t(w,{},"hall"),t(v,{},"clone-first")].map((n,o)=>t(O,{direction:"row",align:"stretch",gap:0,children:n},o))}),t(I,{position:"left",children:t(y,{onClick:T,children:t(S,{size:20,color:e.colors.Text.default,onClick:()=>{},children:t($,{})})})}),t(I,{position:"right",children:t(y,{onClick:x,children:t(S,{size:20,color:e.colors.Text.default,onClick:()=>{},children:t(L,{})})})})]})}export{ae as default};
//# sourceMappingURL=index-BZl0Cf1s.js.map
