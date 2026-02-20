import{j as r,a as l}from"./emotion-react-jsx-runtime.browser.esm-s0EMl4AO.js";import{r as a}from"./chunk-JZWAC4HX-TAoMggkv.js";import{s as n}from"./FlexWrapper-B0XMReN0.js";import{C as u}from"./proxy-5psn8Oct.js";import{R as p}from"./index-B9L2bcXR.js";import{I as b}from"./useIsDevice-B5Irgies.js";import{T as g}from"./Typography-Dm8RpMVF.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"21f91675e321c38140c99a330b90b599d74962c1"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="564af466-8f59-4bea-b1a0-fababd281a58",e._sentryDebugIdIdentifier="sentry-dbid-564af466-8f59-4bea-b1a0-fababd281a58")}catch{}})();const y=n.div`
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
`,m=n.div`
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: ${e=>e.fullScreen?"0px":"12px"};
    min-width: ${e=>e.fullScreen?"100dvw":"630px"};
    width: ${e=>e.fullScreen?"100dvw":"auto"};
    height: ${e=>e.fullScreen?"100dvh":"auto"};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    pointer-events: auto;
    overflow: auto;
`,h=n.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,x=n.div`
    width: 32px;
    height: 32px;
    padding: 4px;
    color: ${({theme:e})=>e.colors.Text.placeholder};
`,w=({isOpen:e,onClose:t,children:d,title:c="",header:s=!0,fullScreen:f=!1})=>{const i=a.useRef(null);return a.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),e?p.createPortal(r(y,{onMouseDown:o=>{i.current=o.target},onMouseUp:o=>{i.current===o.currentTarget&&o.target===o.currentTarget&&t()},children:l(m,{onClick:o=>o.stopPropagation(),fullScreen:f,children:[s&&l(h,{children:[r(g,{type:"BigBold",color:"Text.default",children:c}),r(x,{children:r(b,{onClick:t,size:24,children:r(u,{})})})]}),d]})}),document.body):null},$=a.memo(w);export{$ as M};
//# sourceMappingURL=Modal-s7Xqm-LS.js.map
