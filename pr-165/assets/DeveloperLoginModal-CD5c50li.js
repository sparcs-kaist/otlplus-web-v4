(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`bb847b14d7c1c5d83bc31587c22652ecf12452e6`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`ec53bb1e-4516-4564-9e1c-7dd17ca308af`,e._sentryDebugIdIdentifier=`sentry-dbid-ec53bb1e-4516-4564-9e1c-7dd17ca308af`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Cm1ZQUXn.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-B6DQSma1.js";import{n as i,t as a}from"./FlexWrapper-DnOCdROT.js";import{a as o,s}from"./axios-Cuc9xWpo.js";import{t as c}from"./Modal-BRvsO0kY.js";import{t as l}from"./Button-DW9SU0Fo.js";import{t as u}from"./useIsDevice-DSW6Rn8_.js";var d=t(e()),f=i.input`
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
//# sourceMappingURL=DeveloperLoginModal-CD5c50li.js.map