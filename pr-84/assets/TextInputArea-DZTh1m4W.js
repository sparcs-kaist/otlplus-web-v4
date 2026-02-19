import{j as t}from"./emotion-react-jsx-runtime.browser.esm-B-zamEU7.js";import{k as n,U as g}from"./useAPI-B2f8YEht.js";import{n as l,F as c}from"./FlexWrapper-Cxmg7ETU.js";import{r as y}from"./chunk-EPOLDU6W-zmgMqoXq.js";import{T as h}from"./Typography-DoXk6ZeF.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ada4c7999b6ed5c9c18808775724ee3dffa94ca2"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="647b02fc-d903-4f81-9bc3-784d7ace50db",e._sentryDebugIdIdentifier="sentry-dbid-647b02fc-d903-4f81-9bc3-784d7ace50db")})()}catch{}const x=e=>n`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${e.colors.Background.Tab.darker};
    color: ${e.colors.Text.default};
    opacity: 50%;
`,w=e=>n`
    background-color: ${e.colors.Text.disable};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,k=e=>n`
    background-color: ${e.colors.Text.lighter};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,$=l(c)`
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

    ${({theme:e})=>x(e)}
    &:hover {
        ${({theme:e})=>w(e)}
    }
    ${({theme:e,isSelected:o})=>o&&k(e)}
`;function S({children:e,onClick:o,isSelected:a=!1}){return t($,{direction:"row",justify:"center",align:"center",gap:0,children:t(T,{isSelected:a,onClick:o,children:t(h,{type:"Small",children:e})})})}function C({score:e,setScore:o}){return t(c,{direction:"row",gap:5,children:[1,2,3,4,5].map((a,r)=>t(S,{onClick:()=>{e===5-r?o(0):o(5-r)},isSelected:e===5-r,children:g[5-r]},r))})}const m=n`
    border-color: red;
`,B=n`
    background-color: rgba(245, 245, 245, 1);
`,E=e=>n`
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
`,G=l.input`
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
    ${({disabled:e})=>e&&B}
    ${({hasError:e})=>e&&m}
    ${({theme:e,area:o})=>o&&E(e)}
`,W=({placeholder:e,errorMessage:o="",area:a=!1,disabled:r=!1,value:s="",handleChange:p=()=>{},setErrorStatus:d=()=>{},...u})=>{const f=i=>{const b=i.target.value;p(b)};return y.useEffect(()=>{d&&d(!!o)},[o,d]),t(c,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:t(G,{as:a?"textarea":"input",placeholder:e,hasError:!!o,area:a,disabled:r,value:s,onChange:f,...u})})};export{C as G,W as T};
//# sourceMappingURL=TextInputArea-DZTh1m4W.js.map
