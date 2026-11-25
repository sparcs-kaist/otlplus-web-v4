(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`4b9e5bee26da5546cfb118c204ddf10c18c342c9`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d7e0c1c0-8cfd-40ef-959a-ed191a7e40e0`,e._sentryDebugIdIdentifier=`sentry-dbid-d7e0c1c0-8cfd-40ef-959a-ed191a7e40e0`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BF73k8-f.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-BSkVzuvc.js";import{n as i,t as a}from"./FlexWrapper-D3h8aPMn.js";import{a as o,s}from"./axios-Cjbn67Sx.js";import{t as c}from"./Modal-Dol9ZqG4.js";import{t as l}from"./Button-CpmLVx9l.js";import{t as u}from"./useIsDevice-26T1rEqG.js";var d=t(e()),f=i.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    color: ${({theme:e})=>e.colors.Text.default};
    margin: 10px 0;

    &:focus {
        outline: none;
    }
`,p=({developerLoginModalOpen:e,setDeveloperLoginModalOpen:t})=>{let i=u(`tablet`),[p,m]=(0,d.useState)(``),h=()=>{if(!p){alert(`학번을 입력해주세요.`);return}if(p.match(/[^0-9]/)){alert(`학번은 숫자만 입력 가능합니다.`);return}s(o.devStudentId,p),location.reload()};return r(c,{isOpen:e,onClose:()=>t(!1),title:`DEV 로그인`,fullScreen:i,children:[n(f,{type:`text`,placeholder:`학번을 입력해주세요.`,value:p,onChange:e=>m(e.target.value),onKeyDown:e=>{e.key===`Enter`&&h()}}),n(a,{direction:`row`,gap:0,justify:`flex-end`,align:`center`,children:n(l,{type:`selected`,onClick:h,children:`로그인`})})]})};export{p as t};
//# sourceMappingURL=DeveloperLoginModal-BK6KNIyT.js.map