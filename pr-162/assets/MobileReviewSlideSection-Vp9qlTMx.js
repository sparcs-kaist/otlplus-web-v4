(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`04f99a84a33da6b2411eaa4f28e597f199cd8304`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`7a816252-d1b6-4ad4-82d7-f981cd61e620`,e._sentryDebugIdIdentifier=`sentry-dbid-7a816252-d1b6-4ad4-82d7-f981cd61e620`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-DQZkNfYZ.js";import{l as r,n as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-BIbiulM2.js";import{n as o,t as s}from"./FlexWrapper-xkL9gFG_.js";import{r as c,t as l}from"./Icon-YPAC_3r9.js";import{t as u}from"./IconButton-l5eMYWHq.js";import{t as d}from"./useIsDevice-bxsALjtr.js";import f from"./HallOfFameFeedSection-BuOZEIyp.js";import p from"./LikedMajorFeedSection-DIN4PXD3.js";import m from"./RecentFeedSection-CNCgL8K4.js";var h=t(e()),g=t(n(),1),_=c((0,g.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`ChevronLeft`),v=c((0,g.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`ChevronRight`),y=o(s)`
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
`;function C(){let e=r(),t=d(`mobile`),[n,o]=(0,h.useState)(1),[s,c]=(0,h.useState)(`transform 0.3s ease-in-out`),[g,C]=(0,h.useState)(!1),[w,T]=(0,h.useState)(null),[E,D]=(0,h.useState)(null),[O,k]=(0,h.useState)(0),A=(0,h.useRef)(null),j=()=>{g||(C(!0),c(`transform 0.3s ease-in-out`),o(e=>e-1))},M=()=>{g||(C(!0),c(`transform 0.3s ease-in-out`),o(e=>e+1))};return(0,h.useEffect)(()=>{if(!g)return;let e=setTimeout(()=>{n===0?(c(`none`),o(3)):n===4&&(c(`none`),o(1)),C(!1)},300);return()=>clearTimeout(e)},[n,g]),a(y,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,ref:A,onTouchStart:e=>{if(g)return;let t=e.touches[0];t&&(T(t.clientX),D(t.clientX),c(`none`))},onTouchMove:e=>{if(w===null)return;let t=e.touches[0];if(!t)return;D(t.clientX);let n=t.clientX-w;k(n)},onTouchEnd:()=>{if(w===null||E===null)return;let e=E-w;Math.abs(e)>50?e>0?j():M():c(`transform 0.3s ease-in-out`),T(null),D(null),k(0),Math.abs(e)<=50&&c(`transform 0.3s ease-in-out`)},flex:t?`1 1 auto`:`1 1 0`,children:[i(b,{direction:`row`,gap:0,align:`stretch`,justify:`stretch`,index:n,transition:s,offset:O,children:[i(f,{},`clone-last`),i(m,{},`recent`),i(p,{},`liked`),i(f,{},`hall`),i(m,{},`clone-first`)].map((e,t)=>i(x,{direction:`row`,align:`stretch`,gap:0,children:e},t))}),i(S,{position:`left`,children:i(u,{onClick:j,children:i(l,{size:20,color:e.colors.Text.default,onClick:()=>{},children:i(_,{})})})}),i(S,{position:`right`,children:i(u,{onClick:M,children:i(l,{size:20,color:e.colors.Text.default,onClick:()=>{},children:i(v,{})})})})]})}export{C as default};
//# sourceMappingURL=MobileReviewSlideSection-Vp9qlTMx.js.map