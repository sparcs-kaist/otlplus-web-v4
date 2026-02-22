import{j as d}from"./emotion-react-jsx-runtime.browser.esm-BDRRBMWT.js";import{r as u}from"./chunk-JZWAC4HX-CjLwjxgc.js";import{l as t}from"./useIsDevice-DbAE_3p3.js";import{s as b,F as g}from"./FlexWrapper-DG3H6qd8.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"22650cf8869ac8c1e2f424defc1efdbe70b84776"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="a8e7c727-2b97-4f7b-9103-1b1854f0da95",e._sentryDebugIdIdentifier="sentry-dbid-a8e7c727-2b97-4f7b-9103-1b1854f0da95")}catch{}})();const x=t`
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
`,m=b.input`
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
`,T=({placeholder:e,errorMessage:o="",area:r=!1,disabled:l=!1,value:s="",handleChange:c=()=>{},setErrorStatus:n=()=>{},...i})=>{const f=a=>{const p=a.target.value;c(p)};return u.useEffect(()=>{n&&n(!!o)},[o,n]),d(g,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:d(m,{as:r?"textarea":"input",placeholder:e,hasError:!!o,area:r,disabled:l,value:s,onChange:f,...i})})};export{T};
//# sourceMappingURL=TextInputArea-BuqBthNY.js.map
