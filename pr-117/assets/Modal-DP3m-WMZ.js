import{j as r,a as l}from"./emotion-react-jsx-runtime.browser.esm-4A1UaGAk.js";import{r as d}from"./chunk-JZWAC4HX-BGBfDNwI.js";import{s as n}from"./FlexWrapper-r8lR79K0.js";import{C as u}from"./proxy-g-zTl8t6.js";import{R as p}from"./index-DyXQOSnC.js";import{I as b}from"./useIsDevice-DOkyWFj4.js";import{T as g}from"./Typography-Du-0Hqo4.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f83b0dbedf23c17e51796e13771c89e224259c70"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="564af466-8f59-4bea-b1a0-fababd281a58",e._sentryDebugIdIdentifier="sentry-dbid-564af466-8f59-4bea-b1a0-fababd281a58")}catch{}})();const y=n.div`
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
`,w=({isOpen:e,onClose:t,children:a,title:c="",header:s=!0,fullScreen:f=!1})=>{const i=d.useRef(null);return d.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),e?p.createPortal(r(y,{onMouseDown:o=>{i.current=o.target},onMouseUp:o=>{i.current===o.currentTarget&&o.target===o.currentTarget&&t()},children:l(m,{onClick:o=>o.stopPropagation(),fullScreen:f,children:[s&&l(h,{children:[r(g,{type:"BigBold",color:"Text.default",children:c}),r(x,{children:r(b,{onClick:t,size:24,children:r(u,{})})})]}),a]})}),document.body):null},$=d.memo(w);export{$ as M};
//# sourceMappingURL=Modal-DP3m-WMZ.js.map
