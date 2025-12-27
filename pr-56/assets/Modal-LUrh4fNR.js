import{j as t,b as a}from"./emotion-react-jsx-runtime.browser.esm-B1jPEyiZ.js";import{r as n}from"./chunk-UIGDSWPH-C2ktfSeF.js";import{n as r}from"./FlexWrapper-BDdwpRDn.js";import{C as p}from"./proxy-KxjUxlVF.js";import{R as f}from"./index-TI0EkQ6W.js";import{l as m}from"./useIsDevice-y69o2Tr-.js";import{T as h}from"./Typography-DRNB4_Lw.js";const x=r.div`
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
`,g=r.div`
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
`,y=r.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,v=r.div`
    width: 32px;
    height: 32px;
    padding: 4px;
    color: ${({theme:e})=>e.colors.Text.placeholder};
`,w=({isOpen:e,onClose:l,children:d,title:c="",header:s=!0,fullScreen:u=!1})=>{const i=n.useRef(null);return n.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[e]),e?f.createPortal(t(x,{onMouseDown:o=>{i.current=o.target},onMouseUp:o=>{i.current===o.currentTarget&&o.target===o.currentTarget&&l()},children:a(g,{onClick:o=>o.stopPropagation(),fullScreen:u,children:[s&&a(y,{children:[t(h,{type:"BigBold",color:"Text.default",children:c}),t(v,{children:t(m,{onClick:l,size:24,children:t(p,{})})})]}),d]})}),document.body):null},C=n.memo(w);export{C as M};
//# sourceMappingURL=Modal-LUrh4fNR.js.map
