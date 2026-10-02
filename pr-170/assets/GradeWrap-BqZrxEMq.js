(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b6f5295eb01b6f9b62c55f3becfc83a2448edba3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`a4243710-78b2-4062-9638-2368dafd660c`,e._sentryDebugIdIdentifier=`sentry-dbid-a4243710-78b2-4062-9638-2368dafd660c`)}catch{}})();import{S as e,n as t}from"./emotion-react-jsx-runtime.browser.esm-Cnk_Aq3J.js";import{t as n}from"./emotion-styled.browser.esm-BrBV03_t.js";import{n as r}from"./emotion-react.browser.esm-BeH2dL86.js";import{p as i}from"./useAPI-DetRwDxU.js";import{t as a}from"./Typography-BmW4OtQd.js";import{t as o}from"./FlexWrapper-Dj4SbSah.js";e();var s=e=>r`
    border: 1px solid ${e.colors.Line.subtle};
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
`,u=n(o)`
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
`;function f({children:e,onClick:n,isSelected:r=!1}){return t(u,{direction:`row`,justify:`center`,align:`center`,gap:0,children:t(d,{isSelected:r,onClick:n,children:t(a,{type:`Small`,children:e})})})}function p({score:e,setScore:n}){return t(o,{direction:`row`,gap:5,children:[1,2,3,4,5].map((r,a)=>t(f,{onClick:()=>{e===5-a?n(0):n(5-a)},isSelected:e===5-a,children:i[5-a]},a))})}export{p as t};
//# sourceMappingURL=GradeWrap-BqZrxEMq.js.map