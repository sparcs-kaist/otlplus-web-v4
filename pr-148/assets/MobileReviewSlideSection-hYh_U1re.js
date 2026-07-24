(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`f1c5c0aa58bf9fa258b05cb070e21e04396da95f`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`045ff2fd-d981-4886-aee6-2cc7478079f5`,e._sentryDebugIdIdentifier=`sentry-dbid-045ff2fd-d981-4886-aee6-2cc7478079f5`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-Bkv0L8Go.js";import{l as r,n as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-CahhFR5b.js";import{n as o,t as s}from"./FlexWrapper-BCaJVtl5.js";import{r as c,t as l}from"./Icon-jBnhUcYs.js";import{t as u}from"./IconButton-DT_gdevD.js";import{t as d}from"./useIsDevice-DPts-Zlb.js";import f from"./HallOfFameFeedSection-i6s4fL62.js";import p from"./LikedMajorFeedSection-DJKEcCkh.js";import m from"./RecentFeedSection-DlFC-3WV.js";var h=t(e()),g=t(n(),1),_=c((0,g.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`ChevronLeft`),v=c((0,g.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`ChevronRight`),y=o(s)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`,b=o(s)`
    width: 500%;
    height: 100%;
    transition: ${({transition:e})=>e};
    transform: translateX(
        calc(${({index:e})=>`-${e*20}%`} + ${({offset:e})=>`${e}px`})
    );
`,x=o(s)`
    width: 20%;
`,S=o.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({position:e})=>e===`left`?`left: 8px;`:`right: 8px;`}
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
`;function C(){let e=r(),t=d(`mobile`),[n,o]=(0,h.useState)(1),[s,c]=(0,h.useState)(`transform 0.3s ease-in-out`),[g,C]=(0,h.useState)(!1),[w,T]=(0,h.useState)(null),[E,D]=(0,h.useState)(null),[O,k]=(0,h.useState)(0),A=(0,h.useRef)(null),j=()=>{g||(C(!0),c(`transform 0.3s ease-in-out`),o(e=>e-1))},M=()=>{g||(C(!0),c(`transform 0.3s ease-in-out`),o(e=>e+1))};return(0,h.useEffect)(()=>{if(!g)return;let e=setTimeout(()=>{n===0?(c(`none`),o(3)):n===4&&(c(`none`),o(1)),C(!1)},300);return()=>clearTimeout(e)},[n,g]),a(y,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,ref:A,onTouchStart:e=>{if(g)return;let t=e.touches[0];t&&(T(t.clientX),D(t.clientX),c(`none`))},onTouchMove:e=>{if(w===null)return;let t=e.touches[0];t&&(D(t.clientX),k(t.clientX-w))},onTouchEnd:()=>{if(w===null||E===null)return;let e=E-w;Math.abs(e)>50?e>0?j():M():c(`transform 0.3s ease-in-out`),T(null),D(null),k(0),Math.abs(e)<=50&&c(`transform 0.3s ease-in-out`)},flex:t?`1 1 auto`:`1 1 0`,children:[i(b,{direction:`row`,gap:0,align:`stretch`,justify:`stretch`,index:n,transition:s,offset:O,children:[i(f,{},`clone-last`),i(m,{},`recent`),i(p,{},`liked`),i(f,{},`hall`),i(m,{},`clone-first`)].map((e,t)=>i(x,{direction:`row`,align:`stretch`,gap:0,children:e},t))}),i(S,{position:`left`,children:i(u,{onClick:j,children:i(l,{size:20,color:e.colors.Text.default,onClick:()=>{},children:i(_,{})})})}),i(S,{position:`right`,children:i(u,{onClick:M,children:i(l,{size:20,color:e.colors.Text.default,onClick:()=>{},children:i(v,{})})})})]})}export{C as default};
//# sourceMappingURL=MobileReviewSlideSection-hYh_U1re.js.map