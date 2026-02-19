import{j as d}from"./emotion-react-jsx-runtime.browser.esm-wmvbPpg7.js";import{r as g}from"./chunk-EPOLDU6W-CW5IlF1a.js";import{n as e}from"./FlexWrapper-4afGLcEe.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"73875d8b18f1a3ff2319cec2ed6485a3814c02ff"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new o.Error().stack;t&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[t]="9811def6-dc88-4674-8c7b-6e88ce763ee0",o._sentryDebugIdIdentifier="sentry-dbid-9811def6-dc88-4674-8c7b-6e88ce763ee0")})()}catch{}const n=e.div`
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
`,y=o=>d(w,{children:o}),m=({type:o="default",$isFlexRow:t=!1,$isFlexColumn:r=!1,children:c=void 0,$paddingLeft:s=24,$paddingTop:a=9,...i})=>{const u=x[o],f=()=>y(c);return d(u,{...i,onClick:o==="disabled"?void 0:i.onClick,$isFlexRow:t??!1,$isFlexColumn:r??!1,$paddingTop:a??9,$paddingLeft:s??24,children:d(f,{})})},C=g.memo(m),l={mobile:720,tablet:960,laptop:1440,desktop:1700,wide:1/0},D=Object.keys(l).reduce((o,t)=>{const r=t;return o[r]=`@media (max-width: ${l[r]}px)`,o},{});export{C as B,l as b,D as m};
//# sourceMappingURL=media-BV0_dFpc.js.map
