(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`4a4b2a2b1c069fce72eb013087f374175f464750`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`375b1a9a-5f88-4c11-ab0a-634434bd19d4`,e._sentryDebugIdIdentifier=`sentry-dbid-375b1a9a-5f88-4c11-ab0a-634434bd19d4`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-DtRMKEY5.js";import{l as r,n as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-C6ZSl26Z.js";import{n as o}from"./FlexWrapper-Btq49bur.js";import{r as s,t as c}from"./Icon-BWo55GKK.js";import{t as l}from"./IconButton-CIS_WThI.js";var u=t(e()),d=t(n(),1),f=s((0,d.jsx)(`path`,{d:`m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z`}),`ExpandLess`),p=s((0,d.jsx)(`path`,{d:`M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z`}),`ExpandMore`),m=o.div`
    display: flex;
    flex-direction: row;
    padding: 8px 10px;
    color: ${({theme:e})=>e.colors.Highlight.default};
    font-size: 14px;
    font-weight: 400;
    line-height: 17.5;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 6px;
    height: 36px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Button.highlight};
    }
`,h=o.div`
    display: flex;
    padding: 8px 12px;
    height: 36px;
    align-items: center;
    cursor: pointer;
    pointer-events: ${e=>e.disabled?`none`:`all`};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Section.transparent};
    }
`,g=o.div`
    width: ${({width:e})=>`${e}px`};
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
`,_=o.div`
    display: flex;
    flex-direction: column;
    height: ${e=>e.isDetail?`100px`:`250px`};
    z-index: ${e=>`${e.zindex}`};
    width: ${e=>`${e.width}px`};
    top: ${e=>`${e.top+36}px`};
    left: ${e=>`${e.left}px`};
    overflow: scroll;
    overflow-x: hidden;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-left: 1px solid ${e=>e.theme.colors.Line.default};
    border-right: 1px solid ${e=>e.theme.colors.Line.default};
    border-bottom: 1px solid ${e=>e.theme.colors.Line.default};
    background: ${e=>e.theme.colors.Background.Section.default};

    &::-webkit-scrollbar {
        width: 0;
    }
`,v=o.div`
    line-height: 17.5px;
    font-size: 14px;
    color: ${e=>e.disabled?e.theme.colors.Text.disable:e.theme.colors.Text.default};
`,y=u.memo(({options:e=[`option1`,`option2`,`option3`],zindex:t=10,disabledOptions:n=[],setSelectedOption:o,selectedOption:s,isDetail:d=!0})=>{let y=r(),[b,x]=(0,u.useState)(!1),S=(0,u.useRef)(null),[C,w]=(0,u.useState)({top:0,left:0,width:0}),[T,E]=(0,u.useState)(0);(0,u.useEffect)(()=>{if(e.length>0){let t=document.createElement(`canvas`).getContext(`2d`);if(!t)return;t.font=`14px Pretendard, sans-serif`;let n=Math.max(...e.map(e=>t.measureText(e).width));E(n+50)}},[e]),(0,u.useEffect)(()=>{if(S.current){let e=S.current.getBoundingClientRect();w({top:e.top,left:e.left,width:Math.max(e.width,T)})}},[b,T]);let D=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let e=()=>{if(S.current){let e=S.current.getBoundingClientRect();w({top:e.top,left:e.left,width:e.width})}};return e(),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[b]),(0,u.useEffect)(()=>{if(D.current&&e.length>0&&s>=0){let e=D.current.children[s];if(e){let t=e.getBoundingClientRect().top-D.current.getBoundingClientRect().top;D.current&&(D.current.scrollTop=t)}}},[s,b,e]),a(g,{isExpand:b,width:T,children:[a(m,{ref:S,onClick:()=>{x(!b)},children:[e[s],i(l,{onClick:()=>{x(!b)},styles:{padding:0},children:i(c,{size:24,color:y.colors.Highlight.default,onClick:()=>{},children:i(b?f:p,{})})})]}),b&&i(_,{ref:D,top:C.top,left:C.left,width:C.width,zindex:t,isDetail:d,children:e.map((e,t)=>{let r=n.includes(t);return i(h,{onClick:()=>{o(t),x(!1)},disabled:r,children:i(v,{disabled:r,selected:s==t,children:e})},t)})})]})},(e,t)=>e.options===t.options&&e.zindex===t.zindex&&e.disabledOptions===t.disabledOptions&&e.selectedOption===t.selectedOption&&e.isDetail===t.isDetail);export{p as n,f as r,y as t};
//# sourceMappingURL=ScrollableDropdown-HkGMZd0l.js.map