import{u as k,a as D,j as t}from"./emotion-react-jsx-runtime.browser.esm-DrnRUQhM.js";import{p as E,r as i}from"./chunk-EPOLDU6W-ClCGQPMW.js";import{n as u,F as p}from"./FlexWrapper-CO5qvj9s.js";import{e as M,g as z,I as S}from"./useIsDevice-DfVGJ9tk.js";import{I as y}from"./IconButton-HdXU32u4.js";import w from"./index-B6JmIv2J.js";import F from"./index-BgMfH3SD.js";import v from"./index-DXLbw8f1.js";import"./index-DtIqGYLK.js";import"./env-C7gc5HZj.js";import"./useTranslation-v7xDLiGF.js";import"./LoadingCircle-Dnm3HTXK.js";import"./StyledDivider-kZmbsG6a.js";import"./ReviewBlock-B60w_EZt.js";import"./Typography-CWTqiJYY.js";import"./useUserStore-BMyyB2jE.js";import"./Widget-BRvKls99.js";import"./Trans-BeTKaYu4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"b404666103af703695fac682c2aac3d5429a0c9f"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="6d65de79-65d0-447a-bd2f-21d55bfa0dd4",e._sentryDebugIdIdentifier="sentry-dbid-6d65de79-65d0-447a-bd2f-21d55bfa0dd4")})()}catch{}const $=M(E.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),L=M(E.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),_=u(p)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`,N=u(p)`
    width: 500%;
    height: 100%;
    transition: ${({transition:e})=>e};
    transform: translateX(
        calc(${({index:e})=>`-${e*20}%`} + ${({offset:e})=>`${e}px`})
    );
`,O=u(p)`
    width: 20%;
`,I=u.div`
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
`;function ae(){const e=k(),s=z("mobile"),[l,c]=i.useState(1),[j,r]=i.useState("transform 0.3s ease-in-out"),[a,f]=i.useState(!1),[d,m]=i.useState(null),[g,h]=i.useState(null),[C,b]=i.useState(0),R=i.useRef(null),T=()=>{a||(f(!0),r("transform 0.3s ease-in-out"),c(n=>n-1))},x=()=>{a||(f(!0),r("transform 0.3s ease-in-out"),c(n=>n+1))};return i.useEffect(()=>{if(!a)return;const o=setTimeout(()=>{l===0?(r("none"),c(3)):l===4&&(r("none"),c(1)),f(!1)},300);return()=>clearTimeout(o)},[l,a]),D(_,{direction:"column",gap:0,align:"stretch",justify:"stretch",ref:R,onTouchStart:n=>{if(a)return;const o=n.touches[0];o&&(m(o.clientX),h(o.clientX),r("none"))},onTouchMove:n=>{if(d===null)return;const o=n.touches[0];if(!o)return;h(o.clientX);const X=o.clientX-d;b(X)},onTouchEnd:()=>{if(d===null||g===null)return;const n=g-d,o=50;Math.abs(n)>o?n>0?T():x():r("transform 0.3s ease-in-out"),m(null),h(null),b(0),Math.abs(n)<=o&&r("transform 0.3s ease-in-out")},flex:s?"1 1 auto":"1 1 0",children:[t(N,{direction:"row",gap:0,align:"stretch",justify:"stretch",index:l,transition:j,offset:C,children:[t(w,{},"clone-last"),t(v,{},"recent"),t(F,{},"liked"),t(w,{},"hall"),t(v,{},"clone-first")].map((n,o)=>t(O,{direction:"row",align:"stretch",gap:0,children:n},o))}),t(I,{position:"left",children:t(y,{onClick:T,children:t(S,{size:20,color:e.colors.Text.default,onClick:()=>{},children:t($,{})})})}),t(I,{position:"right",children:t(y,{onClick:x,children:t(S,{size:20,color:e.colors.Text.default,onClick:()=>{},children:t(L,{})})})})]})}export{ae as default};
//# sourceMappingURL=index-CVgfNyIH.js.map
