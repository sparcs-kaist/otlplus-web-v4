import{j as t}from"./emotion-react-jsx-runtime.browser.esm-Cp3sMG7e.js";import{l as a,V as b}from"./useIsDevice-DCm3Qg0-.js";import{s as l,F as d}from"./FlexWrapper-Ro02Gcpw.js";import{r as h}from"./chunk-JZWAC4HX-zV4KIlAP.js";import{T as y}from"./Typography-Cm3yKxqk.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"090fe9af7690bb555fb77fdcf0151a88926f0b82"};var r=new o.Error().stack;r&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[r]="1c2e4f35-335f-4776-908c-303744d2c8a8",o._sentryDebugIdIdentifier="sentry-dbid-1c2e4f35-335f-4776-908c-303744d2c8a8")}catch{}})();const x=o=>a`
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
    ${({theme:o,isSelected:r})=>r&&k(o)}
`;function S({children:o,onClick:r,isSelected:n=!1}){return t(T,{direction:"row",justify:"center",align:"center",gap:0,children:t(w,{isSelected:n,onClick:r,children:t(y,{type:"Small",children:o})})})}function C({score:o,setScore:r}){return t(d,{direction:"row",gap:5,children:[1,2,3,4,5].map((n,e)=>t(S,{onClick:()=>{o===5-e?r(0):r(5-e)},isSelected:o===5-e,children:b[5-e]},e))})}const m=a`
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
    ${({theme:o,area:r})=>r&&E(o)}
`,V=({placeholder:o,errorMessage:r="",area:n=!1,disabled:e=!1,value:s="",handleChange:p=()=>{},setErrorStatus:c=()=>{},...u})=>{const f=i=>{const g=i.target.value;p(g)};return h.useEffect(()=>{c&&c(!!r)},[r,c]),t(d,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:t(G,{as:n?"textarea":"input",placeholder:o,hasError:!!r,area:n,disabled:e,value:s,onChange:f,...u})})};export{C as G,V as T};
//# sourceMappingURL=TextInputArea-BaPGzO2s.js.map
