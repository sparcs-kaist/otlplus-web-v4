import{j as t}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{l as n,V as h}from"./useIsDevice-1TDxsRVD.js";import{n as l,F as d}from"./FlexWrapper-B6Hxm4Zw.js";import{r as x}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{T as b}from"./Typography-DeI78L6T.js";const y=o=>n`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${o.colors.Background.Tab.darker};
    color: ${o.colors.Text.default};
    opacity: 50%;
`,$=o=>n`
    background-color: ${o.colors.Text.disable};
    color: ${o.colors.Background.Section.default};
    opacity: 100%;
`,k=o=>n`
    background-color: ${o.colors.Text.lighter};
    color: ${o.colors.Background.Section.default};
    opacity: 100%;
`,m=l(d)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,S=l.button`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 2.5px;

    ${({theme:o})=>y(o)}
    &:hover {
        ${({theme:o})=>$(o)}
    }
    ${({theme:o,isSelected:r})=>r&&k(o)}
`;function B({children:o,onClick:r,isSelected:a=!1}){return t(m,{direction:"row",justify:"center",align:"center",gap:0,children:t(S,{isSelected:a,onClick:r,children:t(b,{type:"Small",children:o})})})}function W({score:o,setScore:r}){return t(d,{direction:"row",gap:5,children:[1,2,3,4,5].map((a,e)=>t(B,{onClick:()=>{o===5-e?r(0):r(5-e)},isSelected:o===5-e,children:h[5-e]},e))})}const T=n`
    border-color: red;
`,w=n`
    background-color: rgba(245, 245, 245, 1);
`,G=o=>n`
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
`,j=l.input`
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
    ${({disabled:o})=>o&&w}
    ${({hasError:o})=>o&&T}
    ${({theme:o,area:r})=>r&&G(o)}
`,z=({placeholder:o,errorMessage:r="",area:a=!1,disabled:e=!1,value:s="",handleChange:p=()=>{},setErrorStatus:c=()=>{},...u})=>{const g=i=>{const f=i.target.value;p(f)};return x.useEffect(()=>{c&&c(!!r)},[r,c]),t(d,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:t(j,{as:a?"textarea":"input",placeholder:o,hasError:!!r,area:a,disabled:e,value:s,onChange:g,...u})})};export{W as G,z as T};
//# sourceMappingURL=TextInputArea-CHzck_17.js.map
