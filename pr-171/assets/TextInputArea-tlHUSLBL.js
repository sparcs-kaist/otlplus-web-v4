(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`749ff6150892a3cddd9105b2edd1d68d6329c06a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`0c2923d2-babb-4cd1-9547-05dd3c42394e`,e._sentryDebugIdIdentifier=`sentry-dbid-0c2923d2-babb-4cd1-9547-05dd3c42394e`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-JxAkffeQ.js";import{n}from"./emotion-react-jsx-runtime.browser.esm-5dAA5p0-.js";import{n as r,t as i}from"./FlexWrapper-gxlvdHVW.js";import{n as a}from"./emotion-react.browser.esm-WDrdD2Zt.js";import"./themes-DQh4sEZI.js";var o=t(e()),s=a`
    border-color: red;
`,c=e=>a`
    background-color: ${e.colors.Background.Input.disabled};
`,l=e=>a`
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
`,d=({placeholder:e,errorMessage:t=``,area:r=!1,disabled:a=!1,value:s=``,handleChange:c=()=>{},setErrorStatus:l=()=>{},...d})=>((0,o.useEffect)(()=>{l&&l(!!t)},[t,l]),n(i,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1`,children:n(u,{as:r?`textarea`:`input`,placeholder:e,hasError:!!t,area:r,disabled:a,value:s,onChange:e=>{let t=e.target.value;c(t)},...d})}));export{d as t};
//# sourceMappingURL=TextInputArea-tlHUSLBL.js.map