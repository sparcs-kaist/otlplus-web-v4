(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ea4f97b985d021ab0b0948980859f9f51b2b4c96`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`478b9e30-a6d1-46e1-9fdd-a442f37cd7c4`,e._sentryDebugIdIdentifier=`sentry-dbid-478b9e30-a6d1-46e1-9fdd-a442f37cd7c4`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-vrnmIdFU.js";import{t as n}from"./react-dom-DtyAVoEp.js";import{n as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-Znxlh7Bw.js";import{n as a}from"./FlexWrapper-MyOy10jM.js";import{t as o}from"./Icon-DMijsa2v.js";import{t as s}from"./Close-Bia2Frud.js";import{t as c}from"./Typography-DUwzt84o.js";var l=t(e()),u=t(n()),d=a.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: rgba(51, 51, 51, 0.5);
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
`,h=(0,l.memo)(({isOpen:e,onClose:t,children:n,title:a=``,header:h=!0,fullScreen:g=!1})=>{let _=(0,l.useRef)(null);return(0,l.useEffect)(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=`auto`,()=>{document.body.style.overflow=`auto`}),[e]),e?u.createPortal(r(d,{onMouseDown:e=>{_.current=e.target},onMouseUp:e=>{_.current===e.currentTarget&&e.target===e.currentTarget&&t()},children:i(f,{onClick:e=>e.stopPropagation(),fullScreen:g,children:[h&&i(p,{children:[r(c,{type:`BigBold`,color:`Text.default`,children:a}),r(m,{children:r(o,{onClick:t,size:24,children:r(s,{})})})]}),n]})}),document.body):null});export{h as t};
//# sourceMappingURL=Modal-CjlipFTJ.js.map