(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`df9d4ac486fb82c780aa3aa6be6e1d50dd997283`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`a0059b88-bd13-4689-a1e7-ef6283e03fac`,e._sentryDebugIdIdentifier=`sentry-dbid-a0059b88-bd13-4689-a1e7-ef6283e03fac`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CgyW9cbo.js";import{n}from"./emotion-react-jsx-runtime.browser.esm-CHJGKS0h.js";import{n as r,o as i,t as a}from"./FlexWrapper-DRjh01z3.js";import"./themes-DJD-y_Mf.js";var o=t(e()),s=i`
    border-color: red;
`,c=i`
    background-color: rgba(245, 245, 245, 1);
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
    ${({disabled:e})=>e&&c}
    ${({hasError:e})=>e&&s}
    ${({theme:e,area:t})=>t&&l(e)}
`,d=({placeholder:e,errorMessage:t=``,area:r=!1,disabled:i=!1,value:s=``,handleChange:c=()=>{},setErrorStatus:l=()=>{},...d})=>((0,o.useEffect)(()=>{l&&l(!!t)},[t,l]),n(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1`,children:n(u,{as:r?`textarea`:`input`,placeholder:e,hasError:!!t,area:r,disabled:i,value:s,onChange:e=>{let t=e.target.value;c(t)},...d})}));export{d as t};
//# sourceMappingURL=TextInputArea-Dc1BJkds.js.map