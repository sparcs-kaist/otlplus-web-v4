import{n as r,u as o,a as t}from"./FlexWrapper-C0dsngQo.js";const s=r.div`
    width: 100%;
    height: 1px;
    background: ${({color:e})=>e};
`,n=r.div`
    width: 1px;
    background: ${({color:e})=>e};
    align-self: stretch;
`,c=({direction:e="row",color:i})=>{const d=o();return e=="row"?t(s,{color:i||d.colors.Line.divider}):t(n,{color:i||d.colors.Line.divider})};export{c as S};
