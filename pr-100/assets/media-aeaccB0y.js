import{j as d}from"./emotion-react-jsx-runtime.browser.esm-yCbu12Og.js";import{r as g}from"./chunk-EPOLDU6W-DlIqibY_.js";import{n as e}from"./FlexWrapper-C4sOmC1c.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"f2e98062dbb5701ee71cfd6382f89e083b8bdc34"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="4ec32546-077e-4c85-badf-3adca46f960e",o._sentryDebugIdIdentifier="sentry-dbid-4ec32546-077e-4c85-badf-3adca46f960e")})()}catch{}const n=e.div`
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
`,h=e(n)`
    color: ${({theme:o})=>o.colors.Text.placeholder};
    background: ${({theme:o})=>o.colors.Background.Button.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Button.dark};
    }
`,p=e(n)`
    color: ${({theme:o})=>o.colors.Highlight.default};
    background: ${({theme:o})=>o.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Button.highlightDark};
    }
`,b=e(n)`
    color: ${({theme:o})=>o.colors.Text.disable};
    background: ${({theme:o})=>o.colors.Background.Block.default};
    cursor: not-allowed;
`,$=e(n)`
    color: ${({theme:o})=>o.colors.Text.placeholder};
    background: ${({theme:o})=>o.colors.Background.Button.dark};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Block.darker};
    }
`,k=e(n)`
    color: ${({theme:o})=>o.colors.Text.default};
    background: ${({theme:o})=>o.colors.Highlight.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Highlight.dark};
    }
`,B=e(n)`
    color: ${({theme:o})=>o.colors.Text.light};
    background: ${({theme:o})=>o.colors.Background.Block.darker};
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
`,x={default:h,disabled:b,selected:p,dark:$,highlighted:k,state5:B},w=e.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
`,y=o=>d(w,{children:o}),m=({type:o="default",$isFlexRow:t=!1,$isFlexColumn:r=!1,children:c=void 0,$paddingLeft:a=24,$paddingTop:s=9,...i})=>{const u=x[o],f=()=>y(c);return d(u,{...i,onClick:o==="disabled"?void 0:i.onClick,$isFlexRow:t??!1,$isFlexColumn:r??!1,$paddingTop:s??9,$paddingLeft:a??24,children:d(f,{})})},C=g.memo(m),l={mobile:720,tablet:960,laptop:1440,desktop:1700,wide:1/0},D=Object.keys(l).reduce((o,t)=>{const r=t;return o[r]=`@media (max-width: ${l[r]}px)`,o},{});export{C as B,l as b,D as m};
//# sourceMappingURL=media-aeaccB0y.js.map
