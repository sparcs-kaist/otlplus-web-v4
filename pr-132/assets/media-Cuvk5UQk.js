import{j as d}from"./emotion-react-jsx-runtime.browser.esm-B5Mzfpnp.js";import{r as f}from"./chunk-JZWAC4HX-Dli3OiYn.js";import{s as t}from"./FlexWrapper-BAjXYuYd.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"66edb5d634d1bce1a87eb1662822c9e9345d91bf"};var e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="7f1ee06c-e9e8-4aa1-b1bd-df82c89b1f56",o._sentryDebugIdIdentifier="sentry-dbid-7f1ee06c-e9e8-4aa1-b1bd-df82c89b1f56")}catch{}})();const n=t.div`
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
`,h=t(n)`
    color: ${({theme:o})=>o.colors.Text.placeholder};
    background: ${({theme:o})=>o.colors.Background.Button.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Button.dark};
    }
`,b=t(n)`
    color: ${({theme:o})=>o.colors.Highlight.default};
    background: ${({theme:o})=>o.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Button.highlightDark};
    }
`,p=t(n)`
    color: ${({theme:o})=>o.colors.Text.disable};
    background: ${({theme:o})=>o.colors.Background.Block.default};
    cursor: not-allowed;
`,$=t(n)`
    color: ${({theme:o})=>o.colors.Text.placeholder};
    background: ${({theme:o})=>o.colors.Background.Button.dark};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Background.Block.darker};
    }
`,k=t(n)`
    color: ${({theme:o})=>o.colors.Text.default};
    background: ${({theme:o})=>o.colors.Highlight.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:o})=>o.colors.Highlight.dark};
    }
`,B=t(n)`
    color: ${({theme:o})=>o.colors.Text.light};
    background: ${({theme:o})=>o.colors.Background.Block.darker};
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
`,x={default:h,disabled:p,selected:b,dark:$,highlighted:k,state5:B},m=t.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
`,w=o=>d(m,{children:o}),y=({type:o="default",$isFlexRow:e=!1,$isFlexColumn:r=!1,children:c=void 0,$paddingLeft:s=24,$paddingTop:a=9,...i})=>{const u=x[o],g=()=>w(c);return d(u,{...i,onClick:o==="disabled"?void 0:i.onClick,$isFlexRow:e??!1,$isFlexColumn:r??!1,$paddingTop:a??9,$paddingLeft:s??24,children:d(g,{})})},C=f.memo(y),l={mobile:720,tablet:960,laptop:1440,desktop:1700,wide:1/0},D=Object.keys(l).reduce((o,e)=>{const r=e;return o[r]=`@media (max-width: ${l[r]}px)`,o},{});export{C as B,l as b,D as m};
//# sourceMappingURL=media-Cuvk5UQk.js.map
