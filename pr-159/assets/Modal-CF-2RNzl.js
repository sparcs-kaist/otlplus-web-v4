(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`cdff9c3b8d81caaa0369b4e32a9b9c9d184350c0`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`99437367-295a-4479-9ea0-09e731eb5b6e`,e._sentryDebugIdIdentifier=`sentry-dbid-99437367-295a-4479-9ea0-09e731eb5b6e`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BYK_UeLP.js";import{t as n}from"./react-dom-DIg-2Ubf.js";import{n as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-C1Gp4kNh.js";import{n as a}from"./FlexWrapper-ioHBAB77.js";import{t as o}from"./Icon-DqNTB8ZE.js";import{t as s}from"./Close-lz93W0oT.js";import{t as c}from"./Typography-CtH4Tlf2.js";var l=t(e()),u=t(n()),d=a.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: ${({theme:e})=>e.colors.Background.Overlay.default};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    pointer-events: auto;
`,f=a.div`
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: ${e=>e.fullScreen?`0px`:`12px`};
    min-width: ${e=>e.fullScreen?`100dvw`:`630px`};
    width: ${e=>e.fullScreen?`100dvw`:`auto`};
    height: ${e=>e.fullScreen?`100dvh`:`auto`};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    pointer-events: auto;
    overflow: auto;
`,p=a.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,m=a.div`
    width: 32px;
    height: 32px;
    padding: 4px;
    color: ${({theme:e})=>e.colors.Text.placeholder};
`,h=(0,l.memo)(({isOpen:e,onClose:t,children:n,title:a=``,header:h=!0,fullScreen:g=!1})=>{let _=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(!e)return;let n=e=>{let n=e.target;n.tagName===`INPUT`||n.tagName===`TEXTAREA`||n.isContentEditable||e.key===`Escape`&&t()};return window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`keydown`,n)}},[e,t]),(0,l.useEffect)(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=`auto`,()=>{document.body.style.overflow=`auto`}),[e]),e?u.createPortal(r(d,{onMouseDown:e=>{_.current=e.target},onMouseUp:e=>{_.current===e.currentTarget&&e.target===e.currentTarget&&t()},children:i(f,{onClick:e=>e.stopPropagation(),fullScreen:g,children:[h&&i(p,{children:[r(c,{type:`BigBold`,color:`Text.default`,children:a}),r(m,{children:r(o,{onClick:t,size:24,children:r(s,{})})})]}),n]})}),document.body):null});export{h as t};
//# sourceMappingURL=Modal-CF-2RNzl.js.map