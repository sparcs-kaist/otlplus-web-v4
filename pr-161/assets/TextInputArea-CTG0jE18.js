(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`5e3489c88606a80b22946118536a2b67831212dd`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`a9454aa5-83ad-4cf6-9d54-f3fcde23c1b2`,e._sentryDebugIdIdentifier=`sentry-dbid-a9454aa5-83ad-4cf6-9d54-f3fcde23c1b2`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-B382Yc7J.js";import{n}from"./emotion-react-jsx-runtime.browser.esm-btUPeI25.js";import{n as r,t as i}from"./FlexWrapper-LYbwkIco.js";import{n as a}from"./emotion-react.browser.esm-fHQgm4RF.js";import{p as o}from"./useAPI-CeHLt5bs.js";import{t as s}from"./Typography-Dn9fwDKI.js";import"./themes-D7FA1Gwu.js";var c=t(e(),1),l=e=>a`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${e.colors.Background.Tab.darker};
    color: ${e.colors.Text.default};
    opacity: 50%;
`,u=e=>a`
    background-color: ${e.colors.Text.disable};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,d=e=>a`
    background-color: ${e.colors.Text.lighter};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,f=r(i)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,p=r.button`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 2.5px;

    ${({theme:e})=>l(e)}
    &:hover {
        ${({theme:e})=>u(e)}
    }
    ${({theme:e,isSelected:t})=>t&&d(e)}
`;function m({children:e,onClick:t,isSelected:r=!1}){return n(f,{direction:`row`,justify:`center`,align:`center`,gap:0,children:n(p,{isSelected:r,onClick:t,children:n(s,{type:`Small`,children:e})})})}function h({score:e,setScore:t}){return n(i,{direction:`row`,gap:5,children:[1,2,3,4,5].map((r,i)=>n(m,{onClick:()=>{e===5-i?t(0):t(5-i)},isSelected:e===5-i,children:o[5-i]},i))})}var g=a`
    border-color: red;
`,_=e=>a`
    background-color: ${e.colors.Background.Input.disabled};
`,v=e=>a`
    height: 30px;
    resize: none;
    overflow: auto;
    background: transparent;
    border: 1px solid ${e.colors.Line.block};
    padding: 8px;
    border-radius: 6px;

    &::placeholder {
        color: ${e.colors.Text.placeholder};
    }

    scrollbar-width: none;
`,y=r.input`
    display: block;
    width: 100%;
    padding: 12px 16px;
    outline: none;
    border-radius: 4px;
    gap: 8px;
    font-size: 14px;
    line-height: 17.5px;
    color: ${({theme:e})=>e.colors.Text.default};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    flex: 1;
    ${({disabled:e,theme:t})=>e&&_(t)}
    ${({hasError:e})=>e&&g}
    ${({theme:e,area:t})=>t&&v(e)}
`,b=({placeholder:e,errorMessage:t=``,area:r=!1,disabled:a=!1,value:o=``,handleChange:s=()=>{},setErrorStatus:l=()=>{},...u})=>((0,c.useEffect)(()=>{l&&l(!!t)},[t,l]),n(i,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1`,children:n(y,{as:r?`textarea`:`input`,placeholder:e,hasError:!!t,area:r,disabled:a,value:o,onChange:e=>{let t=e.target.value;s(t)},...u})}));export{h as n,b as t};
//# sourceMappingURL=TextInputArea-CTG0jE18.js.map