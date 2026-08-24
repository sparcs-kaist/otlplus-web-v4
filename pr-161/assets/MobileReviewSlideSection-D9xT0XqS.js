(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`9b4853f840d44ad2cadb4dbfdc0f60defc401976`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`99cc6a36-b381-4061-a0e4-100734e0a3f3`,e._sentryDebugIdIdentifier=`sentry-dbid-99cc6a36-b381-4061-a0e4-100734e0a3f3`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CcfToBOR.js";import{l as r,n as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-DEc7CWcd.js";import{n as o,t as s}from"./FlexWrapper-CFEr9uHf.js";import{h as c}from"./useAPI-BqNix6w9.js";import{r as l,t as u}from"./Icon-BVeOiIY_.js";import{t as d}from"./IconButton-BLamPfCw.js";import{t as f}from"./useIsDevice-D3BJKDYq.js";import p from"./ReviewFeedSection-CmKv-Tvu.js";var m=t(e()),h=t(n(),1),g=l((0,h.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`ChevronLeft`),_=l((0,h.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`ChevronRight`),v=o(s)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`,y=o(s)`
    width: 500%;
    height: 100%;
    transition: ${({transition:e})=>e};
    transform: translateX(
        calc(${({index:e})=>`-${e*20}%`} + ${({offset:e})=>`${e}px`})
    );
`,b=o(s)`
    width: 20%;
`,x=o.div`
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
`;function S(){let e=r(),t=f(`mobile`),[n,o]=(0,m.useState)(1),[s,l]=(0,m.useState)(`transform 0.3s ease-in-out`),[h,S]=(0,m.useState)(!1),[C,w]=(0,m.useState)(null),[T,E]=(0,m.useState)(null),[D,O]=(0,m.useState)(0),k=(0,m.useRef)(null),A=()=>{h||(S(!0),l(`transform 0.3s ease-in-out`),o(e=>e-1))},j=()=>{h||(S(!0),l(`transform 0.3s ease-in-out`),o(e=>e+1))};return(0,m.useEffect)(()=>{if(!h)return;let e=setTimeout(()=>{n===0?(l(`none`),o(3)):n===4&&(l(`none`),o(1)),S(!1)},300);return()=>clearTimeout(e)},[n,h]),a(v,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,ref:k,onTouchStart:e=>{if(h)return;let t=e.touches[0];t&&(w(t.clientX),E(t.clientX),l(`none`))},onTouchMove:e=>{if(C===null)return;let t=e.touches[0];if(!t)return;E(t.clientX);let n=t.clientX-C;O(n)},onTouchEnd:()=>{if(C===null||T===null)return;let e=T-C;Math.abs(e)>50?e>0?A():j():l(`transform 0.3s ease-in-out`),w(null),E(null),O(0),Math.abs(e)<=50&&l(`transform 0.3s ease-in-out`)},flex:t?`1 1 auto`:`1 1 0`,children:[i(y,{direction:`row`,gap:0,align:`stretch`,justify:`stretch`,index:n,transition:s,offset:D,children:[i(p,{mode:c.HALL_OF_FAME},`clone-last`),i(p,{mode:c.RECENT},`recent`),i(p,{mode:c.POPULAR_FEED},`liked`),i(p,{mode:c.HALL_OF_FAME},`hall`),i(p,{mode:c.RECENT},`clone-first`)].map((e,t)=>i(b,{direction:`row`,align:`stretch`,gap:0,children:e},t))}),i(x,{position:`left`,children:i(d,{onClick:A,children:i(u,{size:20,color:e.colors.Text.default,onClick:()=>{},children:i(g,{})})})}),i(x,{position:`right`,children:i(d,{onClick:j,children:i(u,{size:20,color:e.colors.Text.default,onClick:()=>{},children:i(_,{})})})})]})}export{S as default};
//# sourceMappingURL=MobileReviewSlideSection-D9xT0XqS.js.map