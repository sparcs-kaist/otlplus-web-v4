import{j as i}from"./emotion-react-jsx-runtime.browser.esm-CDSRZb9c.js";import{r as h}from"./chunk-EPOLDU6W-B8pbzjzn.js";import{n as t}from"./FlexWrapper-B3ayG6XS.js";const n=t.div`
    display: inline-flex;
    padding: ${o=>`${o.$paddingTop}px ${o.$paddingLeft}px`};
    justify-content: center;
    width: ${o=>o.$isFlexRow?"100%":"fit-content"};
    height: ${o=>o.$isFlexColumn?"100%":"fit-content"};
    align-items: center;
    border-radius: 6px;
    font-size: ${({theme:o})=>o.fonts.Normal.fontSize}px;
    font-weight: ${({theme:o})=>o.fonts.Normal.fontWeight};
    line-height: 17.5px;
    font-weight: 400;
    white-space: nowrap;
`,$=t(n)`
    color: ${({theme:o})=>o.colors.Text.placeholder};
    background: ${({theme:o})=>o.colors.Background.Button.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Button.dark};
    }
`,p=t(n)`
    color: ${({theme:o})=>o.colors.Highlight.default};
    background: ${({theme:o})=>o.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Button.highlightDark};
    }
`,k=t(n)`
    color: ${({theme:o})=>o.colors.Text.disable};
    background: ${({theme:o})=>o.colors.Background.Block.default};
    cursor: not-allowed;
`,f=t(n)`
    color: ${({theme:o})=>o.colors.Text.placeholder};
    background: ${({theme:o})=>o.colors.Background.Button.dark};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Block.darker};
    }
`,B=t(n)`
    color: ${({theme:o})=>o.colors.Text.default};
    background: ${({theme:o})=>o.colors.Highlight.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Highlight.dark};
    }
`,x=t(n)`
    color: ${({theme:o})=>o.colors.Text.light};
    background: ${({theme:o})=>o.colors.Background.Block.darker};
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
`,b={default:$,disabled:k,selected:p,dark:f,highlighted:B,state5:x},m=t.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
`,w=o=>i(m,{children:o}),I=({type:o="default",$isFlexRow:r=!1,$isFlexColumn:e=!1,children:s=void 0,$paddingLeft:a=24,$paddingTop:d=9,...l})=>{const u=b[o],g=()=>w(s);return i(u,{...l,onClick:o==="disabled"?void 0:l.onClick,$isFlexRow:r??!1,$isFlexColumn:e??!1,$paddingTop:d??9,$paddingLeft:a??24,children:i(g,{})})},y=h.memo(I),c={mobile:720,tablet:960,laptop:1440,desktop:1700,wide:1/0},F=Object.keys(c).reduce((o,r)=>{const e=r;return o[e]=`@media (max-width: ${c[e]}px)`,o},{});export{y as B,c as b,F as m};
//# sourceMappingURL=media-D8HfPojw.js.map
