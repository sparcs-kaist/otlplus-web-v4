import{j as t}from"./emotion-react-jsx-runtime.browser.esm-at1wMvBd.js";import{l as n,V as g}from"./useIsDevice-CTe1hv-W.js";import{n as d,F as c}from"./FlexWrapper-DF6UUMyO.js";import{r as y}from"./chunk-EPOLDU6W-VFbKFRye.js";import{T as h}from"./Typography-CnYUz990.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"e772e42fb884170cc1e5fb043ab3fca8a86ac0ed"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="55ebe5c5-b224-40e1-a4bd-881ed332a1b2",e._sentryDebugIdIdentifier="sentry-dbid-55ebe5c5-b224-40e1-a4bd-881ed332a1b2")})()}catch{}const x=e=>n`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${e.colors.Background.Tab.darker};
    color: ${e.colors.Text.default};
    opacity: 50%;
`,w=e=>n`
    background-color: ${e.colors.Text.disable};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,$=e=>n`
    background-color: ${e.colors.Text.lighter};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,k=d(c)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,T=d.button`
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
    ${({theme:e,isSelected:o})=>o&&$(e)}
`;function S({children:e,onClick:o,isSelected:a=!1}){return t(k,{direction:"row",justify:"center",align:"center",gap:0,children:t(T,{isSelected:a,onClick:o,children:t(h,{type:"Small",children:e})})})}function C({score:e,setScore:o}){return t(c,{direction:"row",gap:5,children:[1,2,3,4,5].map((a,r)=>t(S,{onClick:()=>{e===5-r?o(0):o(5-r)},isSelected:e===5-r,children:g[5-r]},r))})}const m=n`
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
`,G=d.input`
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
`,V=({placeholder:e,errorMessage:o="",area:a=!1,disabled:r=!1,value:s="",handleChange:p=()=>{},setErrorStatus:l=()=>{},...u})=>{const f=i=>{const b=i.target.value;p(b)};return y.useEffect(()=>{l&&l(!!o)},[o,l]),t(c,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:t(G,{as:a?"textarea":"input",placeholder:e,hasError:!!o,area:a,disabled:r,value:s,onChange:f,...u})})};export{C as G,V as T};
//# sourceMappingURL=TextInputArea-CgjN9q6V.js.map
