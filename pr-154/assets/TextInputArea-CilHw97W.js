(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`125edde50dfdbd27cc0c54ed1b736a0be81df8e7`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`89753dc4-a730-4b3b-92ba-37c3b9403b6a`,e._sentryDebugIdIdentifier=`sentry-dbid-89753dc4-a730-4b3b-92ba-37c3b9403b6a`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-B2qz-wN1.js";import{n}from"./emotion-react-jsx-runtime.browser.esm-DpBCHMma.js";import{n as r,o as i,t as a}from"./FlexWrapper-C-wmkt5I.js";import{c as o}from"./useAPI-BsP7Urkk.js";import{t as s}from"./Typography-CLb6fvKj.js";import"./themes-BoqznEGk.js";var c=t(e(),1),l=e=>i`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${e.colors.Background.Tab.darker};
    color: ${e.colors.Text.default};
    opacity: 50%;
`,u=e=>i`
    background-color: ${e.colors.Text.disable};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,d=e=>i`
    background-color: ${e.colors.Text.lighter};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,f=r(a)`
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
`;function m({children:e,onClick:t,isSelected:r=!1}){return n(f,{direction:`row`,justify:`center`,align:`center`,gap:0,children:n(p,{isSelected:r,onClick:t,children:n(s,{type:`Small`,children:e})})})}function h({score:e,setScore:t}){return n(a,{direction:`row`,gap:5,children:[1,2,3,4,5].map((r,i)=>n(m,{onClick:()=>{e===5-i?t(0):t(5-i)},isSelected:e===5-i,children:o[5-i]},i))})}var g=i`
    border-color: red;
`,_=i`
    background-color: rgba(245, 245, 245, 1);
`,v=e=>i`
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
    ${({disabled:e})=>e&&_}
    ${({hasError:e})=>e&&g}
    ${({theme:e,area:t})=>t&&v(e)}
`,b=({placeholder:e,errorMessage:t=``,area:r=!1,disabled:i=!1,value:o=``,handleChange:s=()=>{},setErrorStatus:l=()=>{},...u})=>((0,c.useEffect)(()=>{l&&l(!!t)},[t,l]),n(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1`,children:n(y,{as:r?`textarea`:`input`,placeholder:e,hasError:!!t,area:r,disabled:i,value:o,onChange:e=>{let t=e.target.value;s(t)},...u})}));export{h as n,b as t};
//# sourceMappingURL=TextInputArea-CilHw97W.js.map