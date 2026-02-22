import{j as d}from"./emotion-react-jsx-runtime.browser.esm-CEuHzFsl.js";import{r as u}from"./chunk-JZWAC4HX-CLyBVW00.js";import{l as t}from"./useIsDevice-CE-wOeI_.js";import{s as b,F as g}from"./FlexWrapper-BKgRhobj.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"1f66a93a2e73ddc5421829c6c9db82df82d87106"};var e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="a8e7c727-2b97-4f7b-9103-1b1854f0da95",o._sentryDebugIdIdentifier="sentry-dbid-a8e7c727-2b97-4f7b-9103-1b1854f0da95")}catch{}})();const x=t`
    border-color: red;
`,h=t`
    background-color: rgba(245, 245, 245, 1);
`,y=o=>t`
    height: 30px;
    resize: none;
    overflow: auto;
    background: transparent;
    border: 1px solid ${o.colors.Line.block};
    padding: 8px;
    border-radius: 6px;

    &::placeholder {
        color: ${o.colors.Text.placeholder};
    }

    scrollbar-width: none;
`,m=b.input`
    display: block;
    width: 100%;
    padding: 12px 16px;
    outline: none;
    border-radius: 4px;
    gap: 8px;
    font-size: 14px;
    line-height: 17.5px;
    color: ${({theme:o})=>o.colors.Text.default};
    background-color: ${({theme:o})=>o.colors.Background.Section.default};
    flex: 1;
    ${({disabled:o})=>o&&h}
    ${({hasError:o})=>o&&x}
    ${({theme:o,area:e})=>e&&y(o)}
`,T=({placeholder:o,errorMessage:e="",area:r=!1,disabled:l=!1,value:s="",handleChange:c=()=>{},setErrorStatus:n=()=>{},...i})=>{const p=a=>{const f=a.target.value;c(f)};return u.useEffect(()=>{n&&n(!!e)},[e,n]),d(g,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:d(m,{as:r?"textarea":"input",placeholder:o,hasError:!!e,area:r,disabled:l,value:s,onChange:p,...i})})};export{T};
//# sourceMappingURL=TextInputArea-rlYx3YPh.js.map
