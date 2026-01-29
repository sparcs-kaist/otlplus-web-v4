import{j as n,a as l}from"./emotion-react-jsx-runtime.browser.esm-8UMkxFz9.js";import{r as d}from"./chunk-EPOLDU6W-KpoCz4BB.js";import{n as r}from"./FlexWrapper-B5D4Zkyg.js";import{C as u}from"./proxy-xnzn-AwB.js";import{R as p}from"./index-BTs-AZcE.js";import{I as g}from"./useIsDevice-Cuofnmc6.js";import{T as y}from"./Typography-KcI2YyzW.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"d1eb23f3da0295132181d6b2224cb1631fc7940e"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="afb4b380-c21b-4922-9cd7-7a0299209f37",e._sentryDebugIdIdentifier="sentry-dbid-afb4b380-c21b-4922-9cd7-7a0299209f37")})()}catch{}const b=r.div`
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
`,x=({isOpen:e,onClose:t,children:a,title:c="",header:f=!0,fullScreen:s=!1})=>{const i=d.useRef(null);return d.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),e?p.createPortal(n(b,{onMouseDown:o=>{i.current=o.target},onMouseUp:o=>{i.current===o.currentTarget&&o.target===o.currentTarget&&t()},children:l(h,{onClick:o=>o.stopPropagation(),fullScreen:s,children:[f&&l(m,{children:[n(y,{type:"BigBold",color:"Text.default",children:c}),n(w,{children:n(g,{onClick:t,size:24,children:n(u,{})})})]}),a]})}),document.body):null},$=d.memo(x);export{$ as M};
//# sourceMappingURL=Modal-ClsSGgFq.js.map
