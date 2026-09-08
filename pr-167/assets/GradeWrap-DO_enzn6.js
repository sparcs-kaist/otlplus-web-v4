(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`f5414c255026e1dce488e2989983b847f47d75f9`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`215a02af-5625-4896-9df8-fb7d37f077c3`,e._sentryDebugIdIdentifier=`sentry-dbid-215a02af-5625-4896-9df8-fb7d37f077c3`)}catch{}})();import{n as e}from"./jsx-runtime-XO90Mdlz.js";import{n as t}from"./emotion-react-jsx-runtime.browser.esm-Dv7m8RMD.js";import{n,t as r}from"./FlexWrapper-DQSvIcC9.js";import{n as i}from"./emotion-react.browser.esm-C0azH01P.js";import{p as a}from"./useAPI-CwbwObX4.js";import{t as o}from"./Typography-BJH3Mc7M.js";e();var s=e=>i`
    border: 1px solid ${e.colors.Line.subtle};
    background-color: ${e.colors.Background.Tab.darker};
    color: ${e.colors.Text.default};
    opacity: 50%;
`,c=e=>i`
    background-color: ${e.colors.Text.disable};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,l=e=>i`
    background-color: ${e.colors.Text.lighter};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,u=n(r)`
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
`;function f({children:e,onClick:n,isSelected:r=!1}){return t(u,{direction:`row`,justify:`center`,align:`center`,gap:0,children:t(d,{isSelected:r,onClick:n,children:t(o,{type:`Small`,children:e})})})}function p({score:e,setScore:n}){return t(r,{direction:`row`,gap:5,children:[1,2,3,4,5].map((r,i)=>t(f,{onClick:()=>{e===5-i?n(0):n(5-i)},isSelected:e===5-i,children:a[5-i]},i))})}export{p as t};
//# sourceMappingURL=GradeWrap-DO_enzn6.js.map