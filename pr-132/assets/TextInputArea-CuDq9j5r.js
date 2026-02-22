import{j as d}from"./emotion-react-jsx-runtime.browser.esm-B5Mzfpnp.js";import{r as b}from"./chunk-JZWAC4HX-Dli3OiYn.js";import{l as t}from"./useIsDevice-B1pA0poh.js";import{s as u,F as g}from"./FlexWrapper-BAjXYuYd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"66edb5d634d1bce1a87eb1662822c9e9345d91bf"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="a8e7c727-2b97-4f7b-9103-1b1854f0da95",e._sentryDebugIdIdentifier="sentry-dbid-a8e7c727-2b97-4f7b-9103-1b1854f0da95")}catch{}})();const x=t`
    border-color: red;
`,h=t`
    background-color: rgba(245, 245, 245, 1);
`,y=e=>t`
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
`,m=u.input`
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
    ${({disabled:e})=>e&&h}
    ${({hasError:e})=>e&&x}
    ${({theme:e,area:o})=>o&&y(e)}
`,T=({placeholder:e,errorMessage:o="",area:r=!1,disabled:l=!1,value:s="",handleChange:c=()=>{},setErrorStatus:n=()=>{},...i})=>{const p=a=>{const f=a.target.value;c(f)};return b.useEffect(()=>{n&&n(!!o)},[o,n]),d(g,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:d(m,{as:r?"textarea":"input",placeholder:e,hasError:!!o,area:r,disabled:l,value:s,onChange:p,...i})})};export{T};
//# sourceMappingURL=TextInputArea-CuDq9j5r.js.map
