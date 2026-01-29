import{j as n,a as l}from"./emotion-react-jsx-runtime.browser.esm-Ky14jjoB.js";import{r as d}from"./chunk-EPOLDU6W-1slB_GJY.js";import{n as r}from"./FlexWrapper-BC649bRW.js";import{C as u}from"./proxy-S_nq4RML.js";import{R as p}from"./index-DvjkdQG3.js";import{I as b}from"./useIsDevice-CLN8X4do.js";import{T as g}from"./Typography-CxEDRqPt.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"7609f5883e7fd10a0c2c7ac6516dead1edc2a7b9"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="575bab5f-315e-4ea1-b602-be0586b46c31",e._sentryDebugIdIdentifier="sentry-dbid-575bab5f-315e-4ea1-b602-be0586b46c31")})()}catch{}const y=r.div`
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
`,h=r.div`
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
`,m=r.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,w=r.div`
    width: 32px;
    height: 32px;
    padding: 4px;
    color: ${({theme:e})=>e.colors.Text.placeholder};
`,x=({isOpen:e,onClose:t,children:a,title:c="",header:s=!0,fullScreen:f=!1})=>{const i=d.useRef(null);return d.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),e?p.createPortal(n(y,{onMouseDown:o=>{i.current=o.target},onMouseUp:o=>{i.current===o.currentTarget&&o.target===o.currentTarget&&t()},children:l(h,{onClick:o=>o.stopPropagation(),fullScreen:f,children:[s&&l(m,{children:[n(g,{type:"BigBold",color:"Text.default",children:c}),n(w,{children:n(b,{onClick:t,size:24,children:n(u,{})})})]}),a]})}),document.body):null},$=d.memo(x);export{$ as M};
//# sourceMappingURL=Modal-KTXwaQEA.js.map
