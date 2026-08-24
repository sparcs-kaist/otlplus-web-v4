(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`cf3e386fd2c75004da41b840c60e6c06199f8d23`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d59143b3-6c65-429a-b1dc-21c172a4681c`,e._sentryDebugIdIdentifier=`sentry-dbid-d59143b3-6c65-429a-b1dc-21c172a4681c`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CWyXLUtn.js";import{t as n}from"./react-dom-CbQ0XMoL.js";import{n as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-fI3_ye4K.js";import{n as a}from"./FlexWrapper-DeR0OeXE.js";import{t as o}from"./Icon-JwALgO0w.js";import{t as s}from"./useTranslation-D1dFAkDV.js";import{t as c}from"./Close-DwnfIdC3.js";import{t as l}from"./Typography-Clp122iA.js";var u=t(n()),d=t(e()),f=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`,`),p=[];function m({dialogRef:e,initialFocusRef:t,onClose:n,open:r}){let i=(0,d.useRef)(n);(0,d.useEffect)(()=>{i.current=n},[n]),(0,d.useEffect)(()=>{if(!r)return;let n=Symbol(`dialog`);p.push(n);let a=document.activeElement instanceof HTMLElement?document.activeElement:null,o=document.body.style.overflow,s=e.current,c=Array.from(document.body.children).filter(e=>s!==null&&!e.contains(s)).filter(e=>e instanceof HTMLElement).map(e=>({element:e,inert:e.inert,ariaHidden:e.getAttribute(`aria-hidden`)}));document.body.style.overflow=`hidden`,c.forEach(({element:e})=>{e.inert=!0,e.setAttribute(`aria-hidden`,`true`)});let l=requestAnimationFrame(()=>t.current?.focus()),u=r=>{if(p[p.length-1]!==n)return;if(r.key===`Escape`){r.preventDefault(),i.current();return}if(r.key!==`Tab`||e.current===null)return;let a=Array.from(e.current.querySelectorAll(f)).filter(e=>e.offsetParent!==null),o=a[0],s=a[a.length-1];if(o===void 0||s===void 0){r.preventDefault(),t.current?.focus();return}let c=document.activeElement;r.shiftKey&&(c===o||c===e.current)?(r.preventDefault(),s.focus()):!r.shiftKey&&c===s&&(r.preventDefault(),o.focus())};return document.addEventListener(`keydown`,u),()=>{let e=p.lastIndexOf(n);e!==-1&&p.splice(e,1),cancelAnimationFrame(l),document.removeEventListener(`keydown`,u),document.body.style.overflow=o,c.forEach(({element:e,inert:t,ariaHidden:n})=>{e.inert=t,n===null?e.removeAttribute(`aria-hidden`):e.setAttribute(`aria-hidden`,n)}),a?.focus()}},[e,t,r])}var h=a.div`
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
`,g=a.div`
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

    &:focus {
        outline: none;
    }
`,_=a.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,v=a.button`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: ${({theme:e})=>e.colors.Text.placeholder};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Button.default};
    }

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`,y=(0,d.memo)(({ariaLabel:e,isOpen:t,onClose:n,children:a,title:f=``,header:p=!0,fullScreen:y=!1})=>{let{t:b}=s(),x=(0,d.useId)(),S=(0,d.useRef)(null),C=(0,d.useRef)(null),w=(0,d.useRef)(null),T=p&&f.length>0;return m({dialogRef:C,initialFocusRef:p?w:C,onClose:n,open:t}),t?u.createPortal(r(h,{onMouseDown:e=>{S.current=e.target},onMouseUp:e=>{S.current===e.currentTarget&&e.target===e.currentTarget&&n()},children:i(g,{ref:C,"aria-label":T?void 0:e,"aria-labelledby":T?x:void 0,"aria-modal":`true`,fullScreen:y,role:`dialog`,tabIndex:-1,onClick:e=>e.stopPropagation(),children:[p&&i(_,{children:[r(l,{id:x,type:`BigBold`,color:`Text.default`,children:f}),r(v,{ref:w,type:`button`,"aria-label":b(`common.search.close`),title:b(`common.search.close`),onClick:n,children:r(o,{size:24,children:r(c,{})})})]}),a]})}),document.body):null});export{m as n,y as t};
//# sourceMappingURL=Modal-DUG8MZJ3.js.map