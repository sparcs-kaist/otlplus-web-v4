(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b6f5295eb01b6f9b62c55f3becfc83a2448edba3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b803ee73-b387-48ef-9ba9-33703ccd9ac4`,e._sentryDebugIdIdentifier=`sentry-dbid-b803ee73-b387-48ef-9ba9-33703ccd9ac4`)}catch{}})();import{D as e,S as t,n,r}from"./emotion-react-jsx-runtime.browser.esm-Cnk_Aq3J.js";import{c as i}from"./sentryEventFilter-D01A6She.js";import{A as a,D as o,O as s}from"./chunk-62JRHF6Z-BqbRoCcB.js";import{t as c}from"./emotion-styled.browser.esm-BrBV03_t.js";import{_ as l,f as u,h as d,k as f,p,t as m,y as h}from"./axios-Du-5RfZe.js";import{t as g}from"./useTranslation-DcVxXeFP.js";var _=e(t()),v=c.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: min(100%, 420px);
    margin: 48px auto;
    padding: 24px;
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 12px;

    input,
    button {
        padding: 12px;
        font: inherit;
        color: inherit;
        background: ${({theme:e})=>e.colors.Background.Block.default};
        border: 1px solid ${({theme:e})=>e.colors.Line.default};
        border-radius: 6px;
    }

    button {
        cursor: pointer;
    }

    button:disabled {
        cursor: wait;
        opacity: 0.6;
    }
`;function y({onSuccess:e}){let[t,a]=(0,_.useState)(``),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(``),u=async()=>{if(!o){s(!0),l(``);try{let n=await fetch(new URL(`/session/dev/login`,i.VITE_APP_API_URL),{method:`POST`,credentials:`include`,headers:{"Content-Type":`application/json`},body:JSON.stringify({studentId:t})});if(!n.ok){let e=n.status===401?`SSO 인증이 만료되었습니다. 다시 인증해 주세요.`:n.status===404?`해당 학번의 사용자가 dev DB에 없습니다.`:n.status===400?`학번을 숫자로 입력해 주세요.`:`로그인에 실패했습니다. 잠시 후 다시 시도해 주세요.`;l(e);return}let r=await n.json();if(!r.accessToken||!r.refreshToken)throw Error(`Missing tokens`);e(r)}catch{l(`로그인 요청을 완료하지 못했습니다. 다시 시도해 주세요.`)}finally{s(!1)}}};return r(v,{onSubmit:e=>{e.preventDefault(),u()},children:[n(`h1`,{children:`Dev 테스트 로그인`}),n(`p`,{children:`SSO 인증 후 테스트할 계정의 학번을 입력해 주세요. 인증은 10분간 유효합니다.`}),n(`label`,{htmlFor:`dev-student-id`,children:`학번`}),n(`input`,{id:`dev-student-id`,name:`studentId`,inputMode:`numeric`,autoComplete:`off`,pattern:`[1-9][0-9]{0,14}`,maxLength:15,required:!0,value:t,onChange:e=>a(e.target.value),disabled:o,"aria-describedby":c?`dev-login-error`:void 0}),c&&n(`p`,{id:`dev-login-error`,role:`alert`,children:c}),n(`button`,{type:`submit`,disabled:o,children:o?`로그인 중…`:`이 계정으로 테스트하기`}),n(`a`,{href:`${i.VITE_APP_API_URL}/session/login`,children:`SPARCS SSO 다시 인증`})]})}var b=a(function(){let e=s(),{hash:t}=o(),r=new URLSearchParams(t.substring(1)).get(`devLogin`)===`1`,i=f(),{i18n:a}=g(),c=(0,_.useRef)(!0);return(0,_.useEffect)(()=>(c.current=!0,(async()=>{if(r)return;let n=new URLSearchParams(t.substring(1)),o=n.get(`accessToken`),s=n.get(`refreshToken`),f=a.resolvedLanguage||`ko`;if(o&&s){if(navigator.userAgent.includes(`otl-app`)){window.location.href=`org.sparcs.otl://login?accessToken=${o}&refreshToken=${s}`;return}await p(),i.clear(),await i.prefetchQuery({queryKey:[u.userInfo,null,f,`/api/v2`],queryFn:async()=>{let{data:e}=await m.get(`/api/v2/users/info`,{headers:{"Cache-Control":`no-cache`}});return e}});let t=i.getQueryData([u.userInfo,null,f,`/api/v2`]);t&&(l({id:t.id,email:t.mail,name:t.name,studentNumber:t.studentNumber,degree:t.degree}),h(`Sign In`,{user_id:t.id,login_method:`sso`,success:!0}));try{let{data:e}=await m.get(`/api/v2/semesters`,{headers:{"Cache-Control":`no-cache`}});if(e?.semesters?.length>0){let t=e.semesters[e.semesters.length-1];t&&await i.prefetchQuery({queryKey:[u.myTimetable,{year:t.year,semester:t.semester},f,`/api/v2`],queryFn:async()=>{let{data:e}=await m.get(`/api/v2/timetables/my-timetable`,{params:{year:t.year,semester:t.semester},headers:{"Cache-Control":`no-cache`}});return e}})}}catch(e){d.warn(`Timetable prefetch failed`,e)}c.current&&e(`/`,{replace:!0})}else c.current&&e(`/`,{replace:!0})})(),()=>{c.current=!1}),[e,i,a.resolvedLanguage,t,r]),r?n(y,{onSuccess:t=>{let n=new URLSearchParams(t);e(`/login/success#${n}`,{replace:!0})}}):null});export{b as default};
//# sourceMappingURL=login.success-p_D_Caaq.js.map