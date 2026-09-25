(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ecb804a3a9dd64950df527181a954c460549363a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`15cb1eed-704f-4dc8-9acf-f07bb1bca7e7`,e._sentryDebugIdIdentifier=`sentry-dbid-15cb1eed-704f-4dc8-9acf-f07bb1bca7e7`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-B6GX0J-i.js";import{n as r}from"./chunk-62JRHF6Z-B_RA3M4c.js";import{l as i,n as a,r as o}from"./emotion-react-jsx-runtime.browser.esm-B87VA51i.js";import{n as s,t as c}from"./FlexWrapper-CXXneU9J.js";import{r as l,t as u}from"./Icon-Dr7d0rj_.js";import{t as d}from"./useTranslation-Vrw8Qbb7.js";import{t as f}from"./IconButton-BQ-q8Sdh.js";import{t as p}from"./Typography-BaYtEiZ2.js";import{t as m}from"./useIsDevice-CjtbcLWL.js";var h=t(e()),g=t(n(),1),_=l((0,g.jsx)(`path`,{d:`m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z`}),`ExpandLess`),v=l((0,g.jsx)(`path`,{d:`M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z`}),`ExpandMore`),y=s.div`
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
`,b=s.div`
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
`,x=s.div`
    width: ${({width:e})=>`${e}px`};
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
`,S=s.div`
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
`,C=s.div`
    line-height: 17.5px;
    font-size: 14px;
    color: ${e=>e.disabled?e.theme.colors.Text.disable:e.theme.colors.Text.default};
`,w=h.memo(({options:e=[`option1`,`option2`,`option3`],zindex:t=10,disabledOptions:n=[],setSelectedOption:r,selectedOption:s,isDetail:c=!0})=>{let l=i(),[d,p]=(0,h.useState)(!1),m=(0,h.useRef)(null),[g,w]=(0,h.useState)({top:0,left:0,width:0}),[T,E]=(0,h.useState)(0);(0,h.useEffect)(()=>{if(e.length>0){let t=document.createElement(`canvas`).getContext(`2d`);if(!t)return;t.font=`14px Pretendard, sans-serif`;let n=Math.max(...e.map(e=>t.measureText(e).width));E(n+50)}},[e]),(0,h.useEffect)(()=>{if(m.current){let e=m.current.getBoundingClientRect();w({top:e.top,left:e.left,width:Math.max(e.width,T)})}},[d,T]);let D=(0,h.useRef)(null);return(0,h.useEffect)(()=>{let e=()=>{if(m.current){let e=m.current.getBoundingClientRect();w({top:e.top,left:e.left,width:e.width})}};return e(),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[d]),(0,h.useEffect)(()=>{if(D.current&&e.length>0&&s>=0){let e=D.current.children[s];if(e){let t=e.getBoundingClientRect().top-D.current.getBoundingClientRect().top;D.current&&(D.current.scrollTop=t)}}},[s,d,e]),o(x,{isExpand:d,width:T,children:[o(y,{ref:m,onClick:()=>{p(!d)},children:[e[s],a(f,{onClick:()=>{p(!d)},styles:{padding:0},children:a(u,{size:24,color:l.colors.Highlight.default,onClick:()=>{},children:a(d?_:v,{})})})]}),d&&a(S,{ref:D,top:g.top,left:g.left,width:g.width,zindex:t,isDetail:c,children:e.map((e,t)=>{let i=n.includes(t);return a(b,{onClick:()=>{r(t),p(!1)},disabled:i,children:a(C,{disabled:i,selected:s==t,children:e})},t)})})]})},(e,t)=>e.options===t.options&&e.zindex===t.zindex&&e.disabledOptions===t.disabledOptions&&e.selectedOption===t.selectedOption&&e.isDetail===t.isDetail),T=s(r)`
    text-decoration: none;
`,E=s.a`
    text-decoration: none;
`,D=()=>{let{t:e}=d(),t=m(`laptop`);return o(c,{direction:`column`,gap:12,align:`center`,justify:`stretch`,children:[a(p,{color:`Text.placeholder`,type:`Bigger`,children:`OTL PLUS`}),o(c,{direction:`row`,gap:t?10:12,justify:`space-between`,children:[a(T,{to:`/makers`,children:a(p,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:e(`credits.credits`)})}),a(p,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:`|`}),a(T,{to:`/license`,children:a(p,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:e(`credits.license`)})}),a(p,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:`|`}),a(T,{to:`/privacy-policy`,children:a(p,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:e(`credits.privacyPolicy`)})})]}),a(E,{href:`mailto:otlplus@sparcs.org`,children:a(p,{color:`Text.placeholder`,type:`Big`,children:`otlplus@sparcs.org`})}),o(p,{color:`Text.placeholder`,type:`Big`,children:[`Ⓒ `,new Date().getFullYear(),`, SPARCS OTL TEAM`]})]})};export{_ as i,w as n,v as r,D as t};
//# sourceMappingURL=Credits-yGmxG_pD.js.map