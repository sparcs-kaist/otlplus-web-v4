(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b6f5295eb01b6f9b62c55f3becfc83a2448edba3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`2f8de4f2-9684-4c29-8238-1f4d402a377f`,e._sentryDebugIdIdentifier=`sentry-dbid-2f8de4f2-9684-4c29-8238-1f4d402a377f`)}catch{}})();import{D as e,S as t,n}from"./emotion-react-jsx-runtime.browser.esm-Cnk_Aq3J.js";import{t as r}from"./emotion-styled.browser.esm-BrBV03_t.js";import{n as i}from"./emotion-react.browser.esm-BeH2dL86.js";import{t as a}from"./FlexWrapper-Dj4SbSah.js";import"./themes-Be8c1Sp7.js";var o=e(t()),s=i`
    border-color: red;
`,c=e=>i`
    background-color: ${e.colors.Background.Input.disabled};
`,l=e=>i`
    height: 30px;
    resize: none;
    overflow: auto;
    background: transparent;
    border: 1px solid ${e.colors.Line.block};
    padding: 8px;
    border-radius: 6px;

    &::placeholder {
        color: ${e.colors.Text.placeholder};
    }

    scrollbar-width: none;
`,u=r.input`
    display: block;
    width: 100%;
    padding: 12px 16px;
    outline: none;
    border-radius: 4px;
    gap: 8px;
    font-size: 14px;
    line-height: 17.5px;
    color: ${({theme:e})=>e.colors.Text.default};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    flex: 1;
    ${({disabled:e,theme:t})=>e&&c(t)}
    ${({hasError:e})=>e&&s}
    ${({theme:e,area:t})=>t&&l(e)}
`,d=({placeholder:e,errorMessage:t=``,area:r=!1,disabled:i=!1,value:s=``,handleChange:c=()=>{},setErrorStatus:l=()=>{},...d})=>((0,o.useEffect)(()=>{l&&l(!!t)},[t,l]),n(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1`,children:n(u,{as:r?`textarea`:`input`,placeholder:e,hasError:!!t,area:r,disabled:i,value:s,onChange:e=>{let t=e.target.value;c(t)},...d})}));export{d as t};
//# sourceMappingURL=TextInputArea-CYAG_9MB.js.map