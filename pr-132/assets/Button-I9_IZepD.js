(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`a875416c495d25821cf301c1312ff5823871e57b`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`bb85f0c9-8be6-4e2c-a4fe-749ba90f4c62`,e._sentryDebugIdIdentifier=`sentry-dbid-bb85f0c9-8be6-4e2c-a4fe-749ba90f4c62`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-7zR6nNRy.js";import{n}from"./emotion-react-jsx-runtime.browser.esm-DdQfzaoZ.js";import{n as r}from"./FlexWrapper-ByC6OTEG.js";var i=t(e()),a=r.div`
    display: inline-flex;
    padding: ${e=>`${e.$paddingTop}px ${e.$paddingLeft}px`};
    justify-content: center;
    width: ${e=>e.$isFlexRow?`100%`:`fit-content`};
    height: ${e=>e.$isFlexColumn?`100%`:`fit-content`};
    align-items: center;
    border-radius: 6px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    font-weight: ${({theme:e})=>e.fonts.Normal.fontWeight};
    line-height: 17.5px;
    font-weight: 400;
    white-space: nowrap;
`,o=r(a)`
    color: ${({theme:e})=>e.colors.Text.placeholder};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,s=r(a)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,c={default:o,disabled:r(a)`
    color: ${({theme:e})=>e.colors.Text.disable};
    background: ${({theme:e})=>e.colors.Background.Block.default};
    cursor: not-allowed;
`,selected:s,dark:r(a)`
    color: ${({theme:e})=>e.colors.Text.placeholder};
    background: ${({theme:e})=>e.colors.Background.Button.dark};
    cursor: pointer;
    &:hover {
        background: ${({theme:e})=>e.colors.Background.Block.darker};
    }
`,highlighted:r(a)`
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    &:hover {
        background: ${({theme:e})=>e.colors.Highlight.dark};
    }
`,state5:r(a)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Block.darker};
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
`},l=r.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
`,u=e=>n(l,{children:e}),d=(0,i.memo)(({type:e=`default`,$isFlexRow:t=!1,$isFlexColumn:r=!1,children:i=void 0,$paddingLeft:a=24,$paddingTop:o=9,...s})=>{let l=c[e],d=()=>u(i);return n(l,{...s,onClick:e===`disabled`?void 0:s.onClick,$isFlexRow:t??!1,$isFlexColumn:r??!1,$paddingTop:o??9,$paddingLeft:a??24,children:n(d,{})})});export{d as t};
//# sourceMappingURL=Button-I9_IZepD.js.map