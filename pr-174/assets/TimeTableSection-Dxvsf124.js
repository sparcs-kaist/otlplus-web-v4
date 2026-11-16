(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`e7ede58dc6222f9cf687c469165872fdb6b58945`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`06da93c7-2d4e-42d9-ab8d-358a189b43dc`,e._sentryDebugIdIdentifier=`sentry-dbid-06da93c7-2d4e-42d9-ab8d-358a189b43dc`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-DzO-KZAj.js";import{O as n}from"./chunk-62JRHF6Z-C9OFlhyv.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-DCWy2mNn.js";import{n as s,t as c}from"./FlexWrapper-cWEBKkkQ.js";import{i as l}from"./axios-CoJJprj9.js";import{t as u}from"./useAPI-B_C2QgrM.js";import{t as d}from"./Icon-Grdt3nT_.js";import{t as f}from"./Trans-BTFxC5vb.js";import{t as p}from"./Typography-CkKtJrch.js";import{t as m}from"./media-CM_Bw17B.js";import{t as h}from"./handleLoginLogout-BPf1cEsf.js";import{t as g}from"./Widget-DCQpB8oa.js";import{t as _}from"./Lock-Bg--TyuL.js";import{t as v}from"./LoadingCircle-C8X7zCw8.js";import{t as y}from"./CustomTimeTableGrid-Cvib6wFN.js";var b=t(e()),x=s(g)`
    width: 856px;
    height: 1000px;

    ${m.laptop} {
        width: 100%;
    }
`,S=s(c)`
    flex-grow: 1;
    width: 100%;
`,C=s(c)`
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,w=s(c)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,T=s.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,E=s.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,D=s.div`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`,O=()=>{let e=n(),t=r(),{user:s,status:m}=l(),[g,O]=(0,b.useState)(null),{query:k,setParams:A}=u(`GET`,`/timetables/my-timetable`,{enabled:m===`success`}),{query:j}=u(`GET`,`/semesters/current`);(0,b.useEffect)(()=>{if(g){let t=new URLSearchParams;if(g.courseId&&t.append(`courseId`,g.courseId.toString()),g.professors){let e=g.professors[0];e&&t.append(`professorId`,e.id.toString())}e(`/dictionary?${t.toString()}`)}},[g]),(0,b.useEffect)(()=>{j.data&&A({year:j.data.year,semester:j.data.semester})},[j.data,A]);let M=k.data?.lectures??[];return i(x,{direction:`column`,gap:0,padding:`30px 23px`,flex:`1 1 auto`,children:m===`loading`?i(v,{}):a(S,{direction:`column`,align:`stretch`,gap:16,style:{overflow:`hidden`},children:[m===`idle`?a(w,{direction:`column`,gap:12,align:`center`,children:[i(T,{children:i(d,{size:30,color:t.colors.Highlight.default,children:i(_,{})})}),i(E,{onClick:h,children:i(p,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}):i(c,{direction:`row`,gap:0,children:i(f,{i18nKey:`main.hisTimeTable`,values:{name:s?.name},components:{name:i(p,{type:`BiggerBold`,color:`Highlight.default`,children:void 0}),normal:i(p,{type:`BiggerBold`,color:`Text.dark`,children:void 0}),space:i(o,{children:`\xA0`})}})}),i(C,{blur:m===`idle`,direction:`column`,gap:0,align:`stretch`,style:{overflow:`hidden`},children:i(D,{style:{overflow:`hidden`},children:i(y,{lectures:M,needLectureDeletable:!1,needTimeFilter:!1,onLectureSelect:e=>O(e),needCurrentTimeBar:!0})})})]})})};export{O as default};
//# sourceMappingURL=TimeTableSection-Dxvsf124.js.map