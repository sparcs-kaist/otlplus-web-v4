(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`16b75b4acfb1430d5d2684c0d9447a887bdc7713`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`50177d51-69d4-43a1-a9b2-99ca631a4a8d`,e._sentryDebugIdIdentifier=`sentry-dbid-50177d51-69d4-43a1-a9b2-99ca631a4a8d`)}catch{}})();import{n as e}from"./jsx-runtime-DJyuBQ5-.js";import{n as t}from"./emotion-react-jsx-runtime.browser.esm-CwSC2LQX.js";import{n,o as r,t as i}from"./FlexWrapper-CFZ75Z8x.js";import{c as a}from"./useAPI-B9E0xg4D.js";import{t as o}from"./Typography-BFKOQjDv.js";e();var s=e=>r`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${e.colors.Background.Tab.darker};
    color: ${e.colors.Text.default};
    opacity: 50%;
`,c=e=>r`
    background-color: ${e.colors.Text.disable};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,l=e=>r`
    background-color: ${e.colors.Text.lighter};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,u=n(i)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,d=n.button`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 2.5px;

    ${({theme:e})=>s(e)}
    &:hover {
        ${({theme:e})=>c(e)}
    }
    ${({theme:e,isSelected:t})=>t&&l(e)}
`;function f({children:e,onClick:n,isSelected:r=!1}){return t(u,{direction:`row`,justify:`center`,align:`center`,gap:0,children:t(d,{isSelected:r,onClick:n,children:t(o,{type:`Small`,children:e})})})}function p({score:e,setScore:n}){return t(i,{direction:`row`,gap:5,children:[1,2,3,4,5].map((r,i)=>t(f,{onClick:()=>{e===5-i?n(0):n(5-i)},isSelected:e===5-i,children:a[5-i]},i))})}export{p as t};
//# sourceMappingURL=GradeWrap-CyPU9zy2.js.map