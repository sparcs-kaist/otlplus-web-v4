(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`dffc4b5d78ff7732700ecb8afede2241d7fe845e`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`fa742ca3-95d5-41db-9b8b-745b9ab24949`,e._sentryDebugIdIdentifier=`sentry-dbid-fa742ca3-95d5-41db-9b8b-745b9ab24949`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BBsoE34y.js";import{n}from"./emotion-react-jsx-runtime.browser.esm-DsP7x62g.js";import{n as r,t as i}from"./FlexWrapper-D1OeJB0D.js";import{n as a}from"./emotion-react.browser.esm-BK51Fhu3.js";import"./themes-DICcOKOH.js";var o=t(e()),s=a`
    border-color: red;
`,c=a`
    background-color: rgba(245, 245, 245, 1);
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
    ${({disabled:e})=>e&&c}
    ${({hasError:e})=>e&&s}
    ${({theme:e,area:t})=>t&&l(e)}
`,d=({placeholder:e,errorMessage:t=``,area:r=!1,disabled:a=!1,value:s=``,handleChange:c=()=>{},setErrorStatus:l=()=>{},...d})=>((0,o.useEffect)(()=>{l&&l(!!t)},[t,l]),n(i,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1`,children:n(u,{as:r?`textarea`:`input`,placeholder:e,hasError:!!t,area:r,disabled:a,value:s,onChange:e=>{let t=e.target.value;c(t)},...d})}));export{d as t};
//# sourceMappingURL=TextInputArea-CNQ43cj1.js.map