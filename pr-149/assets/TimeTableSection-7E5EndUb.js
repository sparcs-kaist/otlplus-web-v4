(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`f224b6ca88fd182ea2493afe37a211d538b2d321`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d4a5b9ea-1066-410b-ba38-5672633fb4ef`,e._sentryDebugIdIdentifier=`sentry-dbid-d4a5b9ea-1066-410b-ba38-5672633fb4ef`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-KNHCSjP8.js";import{O as n}from"./chunk-QFMPRPBF-Cf_Uskwk.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-BB56M5P-.js";import{n as s,t as c}from"./FlexWrapper-BoIxIGFx.js";import{t as l}from"./useAPI-G4ZfAoij.js";import{t as u}from"./Icon-HTkBCj98.js";import{t as d}from"./Trans-Cq57BHUW.js";import{t as f}from"./Typography-BwGqxvdP.js";import{t as p}from"./media-DjUae4AJ.js";import{t as m}from"./handleLoginLogout-Dzww7sV3.js";import{t as h}from"./useUserStore-DdfrEMEE.js";import{t as g}from"./Widget-yixQXBjW.js";import{t as _}from"./Lock-DUdUYu9q.js";import{t as v}from"./LoadingCircle-gIJkxvW1.js";import{t as y}from"./CustomTimeTableGrid-XFYVNwyf.js";var b=t(e()),x=s(g)`
    width: 856px;
    height: 1000px;

    ${p.laptop} {
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
`,O=()=>{let e=n(),t=r(),{user:s,status:p}=h(),[g,O]=(0,b.useState)(null),{query:k,setParams:A}=l(`GET`,`/timetables/my-timetable`,{enabled:p===`success`}),{query:j}=l(`GET`,`/semesters/current`);(0,b.useEffect)(()=>{if(g){let t=new URLSearchParams;if(g.courseId&&t.append(`courseId`,g.courseId.toString()),g.professors){let e=g.professors[0];e&&t.append(`professorId`,e.id.toString())}e(`/dictionary?${t.toString()}`)}},[g]),(0,b.useEffect)(()=>{j.data&&A({year:j.data.year,semester:j.data.semester})},[j.data,A]);let M=k.data?.lectures??[];return i(x,{direction:`column`,gap:0,padding:`30px 23px`,flex:`1 1 auto`,children:p===`loading`?i(v,{}):a(S,{direction:`column`,align:`stretch`,gap:16,style:{overflow:`hidden`},children:[p===`idle`?a(w,{direction:`column`,gap:12,align:`center`,children:[i(T,{children:i(u,{size:30,color:t.colors.Highlight.default,children:i(_,{})})}),i(E,{onClick:m,children:i(f,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}):i(c,{direction:`row`,gap:0,children:i(d,{i18nKey:`main.hisTimeTable`,values:{name:s?.name},components:{name:i(f,{type:`BiggerBold`,color:`Highlight.default`,children:void 0}),normal:i(f,{type:`BiggerBold`,color:`Text.dark`,children:void 0}),space:i(o,{children:`\xA0`})}})}),i(C,{blur:p===`idle`,direction:`column`,gap:0,align:`stretch`,style:{overflow:`hidden`},children:i(D,{style:{overflow:`hidden`},children:i(y,{lectures:M,needLectureDeletable:!1,needTimeFilter:!1,onLectureSelect:e=>O(e),needCurrentTimeBar:!0})})})]})})};export{O as default};
//# sourceMappingURL=TimeTableSection-7E5EndUb.js.map