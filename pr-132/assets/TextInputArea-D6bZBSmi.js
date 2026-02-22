import{j as l}from"./emotion-react-jsx-runtime.browser.esm-BhqUqAgf.js";import{r as b}from"./chunk-JZWAC4HX-DmpmDBAO.js";import{l as t}from"./useIsDevice-BQVxGCq0.js";import{s as u,F as g}from"./FlexWrapper-CtavLral.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"b197183f5a95225b90a78b7555018cb660f8a6fc"};var e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="a8e7c727-2b97-4f7b-9103-1b1854f0da95",o._sentryDebugIdIdentifier="sentry-dbid-a8e7c727-2b97-4f7b-9103-1b1854f0da95")}catch{}})();const x=t`
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
`,m=u.input`
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
`,T=({placeholder:o,errorMessage:e="",area:r=!1,disabled:d=!1,value:s="",handleChange:c=()=>{},setErrorStatus:n=()=>{},...i})=>{const p=a=>{const f=a.target.value;c(f)};return b.useEffect(()=>{n&&n(!!e)},[e,n]),l(g,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:l(m,{as:r?"textarea":"input",placeholder:o,hasError:!!e,area:r,disabled:d,value:s,onChange:p,...i})})};export{T};
//# sourceMappingURL=TextInputArea-D6bZBSmi.js.map
