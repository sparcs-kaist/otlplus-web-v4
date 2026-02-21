import{j as t}from"./emotion-react-jsx-runtime.browser.esm-DKFWqk_f.js";import{l as a,V as b}from"./useIsDevice-fyzYRZqR.js";import{s as l,F as d}from"./FlexWrapper-VbUniZHB.js";import{r as h}from"./chunk-JZWAC4HX-7McQ17nL.js";import{T as y}from"./Typography-CX6lPE5h.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"987424ef7db70c8bde41be03a352efdebe5f59e5"};var e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="1c2e4f35-335f-4776-908c-303744d2c8a8",o._sentryDebugIdIdentifier="sentry-dbid-1c2e4f35-335f-4776-908c-303744d2c8a8")}catch{}})();const x=o=>a`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${o.colors.Background.Tab.darker};
    color: ${o.colors.Text.default};
    opacity: 50%;
`,$=o=>a`
    background-color: ${o.colors.Text.disable};
    color: ${o.colors.Background.Section.default};
    opacity: 100%;
`,k=o=>a`
    background-color: ${o.colors.Text.lighter};
    color: ${o.colors.Background.Section.default};
    opacity: 100%;
`,T=l(d)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,w=l.button`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 2.5px;

    ${({theme:o})=>x(o)}
    &:hover {
        ${({theme:o})=>$(o)}
    }
    ${({theme:o,isSelected:e})=>e&&k(o)}
`;function S({children:o,onClick:e,isSelected:n=!1}){return t(T,{direction:"row",justify:"center",align:"center",gap:0,children:t(w,{isSelected:n,onClick:e,children:t(y,{type:"Small",children:o})})})}function C({score:o,setScore:e}){return t(d,{direction:"row",gap:5,children:[1,2,3,4,5].map((n,r)=>t(S,{onClick:()=>{o===5-r?e(0):e(5-r)},isSelected:o===5-r,children:b[5-r]},r))})}const m=a`
    border-color: red;
`,B=a`
    background-color: rgba(245, 245, 245, 1);
`,E=o=>a`
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
`,G=l.input`
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
    ${({disabled:o})=>o&&B}
    ${({hasError:o})=>o&&m}
    ${({theme:o,area:e})=>e&&E(o)}
`,V=({placeholder:o,errorMessage:e="",area:n=!1,disabled:r=!1,value:s="",handleChange:p=()=>{},setErrorStatus:c=()=>{},...u})=>{const f=i=>{const g=i.target.value;p(g)};return h.useEffect(()=>{c&&c(!!e)},[e,c]),t(d,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:t(G,{as:n?"textarea":"input",placeholder:o,hasError:!!e,area:n,disabled:r,value:s,onChange:f,...u})})};export{C as G,V as T};
//# sourceMappingURL=TextInputArea-BMItdNgI.js.map
