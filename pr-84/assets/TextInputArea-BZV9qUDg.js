import{j as t}from"./emotion-react-jsx-runtime.browser.esm-DFzYZ-QR.js";import{l as n,R as b}from"./useIsDevice-bKrxsj5W.js";import{n as l,F as c}from"./FlexWrapper-BvLMhTg9.js";import{r as y}from"./chunk-EPOLDU6W-C26KWm57.js";import{T as h}from"./Typography-BoGuhcU2.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"9d9be90128047a9adae01cbf529ac6e8d6d01bc1"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="3aad16a0-7dc2-4c8d-a040-b07d88557677",o._sentryDebugIdIdentifier="sentry-dbid-3aad16a0-7dc2-4c8d-a040-b07d88557677")})()}catch{}const x=o=>n`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${o.colors.Background.Tab.darker};
    color: ${o.colors.Text.default};
    opacity: 50%;
`,w=o=>n`
    background-color: ${o.colors.Text.disable};
    color: ${o.colors.Background.Section.default};
    opacity: 100%;
`,$=o=>n`
    background-color: ${o.colors.Text.lighter};
    color: ${o.colors.Background.Section.default};
    opacity: 100%;
`,k=l(c)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,T=l.button`
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
        ${({theme:o})=>w(o)}
    }
    ${({theme:o,isSelected:e})=>e&&$(o)}
`;function S({children:o,onClick:e,isSelected:a=!1}){return t(k,{direction:"row",justify:"center",align:"center",gap:0,children:t(T,{isSelected:a,onClick:e,children:t(h,{type:"Small",children:o})})})}function C({score:o,setScore:e}){return t(c,{direction:"row",gap:5,children:[1,2,3,4,5].map((a,r)=>t(S,{onClick:()=>{o===5-r?e(0):e(5-r)},isSelected:o===5-r,children:b[5-r]},r))})}const m=n`
    border-color: red;
`,B=n`
    background-color: rgba(245, 245, 245, 1);
`,E=o=>n`
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
`,R=({placeholder:o,errorMessage:e="",area:a=!1,disabled:r=!1,value:s="",handleChange:p=()=>{},setErrorStatus:d=()=>{},...u})=>{const f=i=>{const g=i.target.value;p(g)};return y.useEffect(()=>{d&&d(!!e)},[e,d]),t(c,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:t(G,{as:a?"textarea":"input",placeholder:o,hasError:!!e,area:a,disabled:r,value:s,onChange:f,...u})})};export{C as G,R as T};
//# sourceMappingURL=TextInputArea-BZV9qUDg.js.map
