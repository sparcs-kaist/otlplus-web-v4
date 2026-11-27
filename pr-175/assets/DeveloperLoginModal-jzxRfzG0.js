(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`4a4b2a2b1c069fce72eb013087f374175f464750`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d7e0c1c0-8cfd-40ef-959a-ed191a7e40e0`,e._sentryDebugIdIdentifier=`sentry-dbid-d7e0c1c0-8cfd-40ef-959a-ed191a7e40e0`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-DtRMKEY5.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-C6ZSl26Z.js";import{n as i,t as a}from"./FlexWrapper-Btq49bur.js";import{a as o,s}from"./axios-DOMjHT48.js";import{t as c}from"./Modal-C3JbEvZa.js";import{t as l}from"./Button-D-eHqSDN.js";import{t as u}from"./useIsDevice-DnMgIgYr.js";var d=t(e()),f=i.input`
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
//# sourceMappingURL=DeveloperLoginModal-jzxRfzG0.js.map