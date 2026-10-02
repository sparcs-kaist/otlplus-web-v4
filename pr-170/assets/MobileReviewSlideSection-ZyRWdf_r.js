(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`3b0e1d5e696915030a0b6d616c1263ff2f429d72`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`df1fc474-518e-48c8-88e8-03884afb320e`,e._sentryDebugIdIdentifier=`sentry-dbid-df1fc474-518e-48c8-88e8-03884afb320e`)}catch{}})();import{D as e,S as t,l as n,n as r,r as i,x as a}from"./emotion-react-jsx-runtime.browser.esm-CEJANohN.js";import{t as o}from"./emotion-styled.browser.esm-CAIppcGC.js";import{h as s}from"./useAPI-B9jV7FdJ.js";import{r as c,t as l}from"./Icon-DD8doI0X.js";import{t as u}from"./IconButton-DM1pLPYY.js";import{t as d}from"./FlexWrapper-CUG6HLLC.js";import{t as f}from"./useIsDevice-BZn6KfDY.js";import p from"./ReviewFeedSection-DC64nNlg.js";var m=e(t()),h=e(a(),1),g=c((0,h.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`ChevronLeft`),_=c((0,h.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`ChevronRight`),v=o(d)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`,y=o(d)`
    width: 500%;
    height: 100%;
    transition: ${({transition:e})=>e};
    transform: translateX(
        calc(${({index:e})=>`-${e*20}%`} + ${({offset:e})=>`${e}px`})
    );
`,b=o(d)`
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
`;function S(){let e=n(),t=f(`mobile`),[a,o]=(0,m.useState)(1),[c,d]=(0,m.useState)(`transform 0.3s ease-in-out`),[h,S]=(0,m.useState)(!1),[C,w]=(0,m.useState)(null),[T,E]=(0,m.useState)(null),[D,O]=(0,m.useState)(0),k=(0,m.useRef)(null),A=()=>{h||(S(!0),d(`transform 0.3s ease-in-out`),o(e=>e-1))},j=()=>{h||(S(!0),d(`transform 0.3s ease-in-out`),o(e=>e+1))};return(0,m.useEffect)(()=>{if(!h)return;let e=setTimeout(()=>{a===0?(d(`none`),o(3)):a===4&&(d(`none`),o(1)),S(!1)},300);return()=>clearTimeout(e)},[a,h]),i(v,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,ref:k,onTouchStart:e=>{if(h)return;let t=e.touches[0];t&&(w(t.clientX),E(t.clientX),d(`none`))},onTouchMove:e=>{if(C===null)return;let t=e.touches[0];if(!t)return;E(t.clientX);let n=t.clientX-C;O(n)},onTouchEnd:()=>{if(C===null||T===null)return;let e=T-C;Math.abs(e)>50?e>0?A():j():d(`transform 0.3s ease-in-out`),w(null),E(null),O(0),Math.abs(e)<=50&&d(`transform 0.3s ease-in-out`)},flex:t?`1 1 auto`:`1 1 0`,children:[r(y,{direction:`row`,gap:0,align:`stretch`,justify:`stretch`,index:a,transition:c,offset:D,children:[r(p,{mode:s.HALL_OF_FAME},`clone-last`),r(p,{mode:s.RECENT},`recent`),r(p,{mode:s.POPULAR_FEED},`liked`),r(p,{mode:s.HALL_OF_FAME},`hall`),r(p,{mode:s.RECENT},`clone-first`)].map((e,t)=>r(b,{direction:`row`,align:`stretch`,gap:0,children:e},t))}),r(x,{position:`left`,children:r(u,{onClick:A,children:r(l,{size:20,color:e.colors.Text.default,onClick:()=>{},children:r(g,{})})})}),r(x,{position:`right`,children:r(u,{onClick:j,children:r(l,{size:20,color:e.colors.Text.default,onClick:()=>{},children:r(_,{})})})})]})}export{S as default};
//# sourceMappingURL=MobileReviewSlideSection-ZyRWdf_r.js.map