import{n as l,F as d,a as t}from"./FlexWrapper-C0dsngQo.js";import{F as n,a7 as h}from"./useIsDevice-CGASXFcU.js";import{a as x}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T as b}from"./Typography-DTsae4U-.js";const y=o=>n`
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
`,S=l(d)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,B=l.button`
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
`;function T({children:o,onClick:r,isSelected:a=!1}){return t(S,{direction:"row",justify:"center",align:"center",gap:0,children:t(B,{isSelected:a,onClick:r,children:t(b,{type:"Small",children:o})})})}function I({score:o,setScore:r}){return t(d,{direction:"row",gap:5,children:[1,2,3,4,5].map((a,e)=>t(T,{onClick:()=>{o===5-e?r(0):r(5-e)},isSelected:o===5-e,children:h[5-e]},e))})}const m=n`
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
    ${({hasError:o})=>o&&m}
    ${({theme:o,area:r})=>r&&G(o)}
`,W=({placeholder:o,errorMessage:r="",area:a=!1,disabled:e=!1,value:s="",handleChange:p=()=>{},setErrorStatus:c=()=>{},...u})=>{const g=i=>{const f=i.target.value;p(f)};return x.useEffect(()=>{c&&c(!!r)},[r,c]),t(d,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1",children:t(j,{as:a?"textarea":"input",placeholder:o,hasError:!!r,area:a,disabled:e,value:s,onChange:g,...u})})};export{I as G,W as T};
