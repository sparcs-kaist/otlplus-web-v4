(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ecb804a3a9dd64950df527181a954c460549363a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d2f17e73-fb83-46e1-81da-a67c4c150507`,e._sentryDebugIdIdentifier=`sentry-dbid-d2f17e73-fb83-46e1-81da-a67c4c150507`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-B6GX0J-i.js";import{O as n}from"./chunk-62JRHF6Z-B_RA3M4c.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-B87VA51i.js";import{n as s,t as c}from"./FlexWrapper-CXXneU9J.js";import{i as l,j as u}from"./axios-DA8hz_xA.js";import{t as d}from"./useAPI-sFgzbDEC.js";import{t as f}from"./Icon-Dr7d0rj_.js";import{t as p}from"./Trans-xcZDIyZG.js";import{t as m}from"./useTranslation-Vrw8Qbb7.js";import{t as h}from"./Typography-BaYtEiZ2.js";import{t as g}from"./media-C4i6vmsf.js";import{t as _}from"./handleLoginLogout-CqWQ_g4s.js";import{t as v}from"./Widget-rV5iuF5B.js";import{t as y}from"./Lock-DbqkWOdI.js";import{t as b}from"./LoadingCircle-5c2zBxic.js";import{t as x}from"./CustomTimeTableGrid-B4_m8Qa_.js";var S=t(e()),C=s(v)`
    width: 856px;
    height: 1000px;

    ${g.laptop} {
        width: 100%;
    }
`,w=s(c)`
    flex-grow: 1;
    width: 100%;
`,T=s(c)`
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    width: 100%;
    height: 100%;
    pointer-events: ${({blur:e})=>e?`none`:`auto`};
`,E=s(c)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,D=s.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,O=s.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,k=s.div`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`,A=s.select`
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colors.Line.block};
    border-radius: 8px;
    padding: 8px 12px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    color: ${({theme:e})=>e.colors.Text.dark};
    font: inherit;
`,j=()=>{let e=n(),{t}=m(),s=u(),g=r(),{user:v,status:j}=l(),[M,N]=(0,S.useState)(null),{query:P,setParams:F}=d(`GET`,`/timetables/home`,{enabled:j===`success`}),{query:I}=d(`GET`,`/semesters/current`),{query:L,setParams:R}=d(`GET`,`/timetables`,{enabled:j===`success`}),{mutation:z}=d(`PATCH`,`/timetables/home`,{onSettled:()=>s.invalidateQueries({queryKey:[`/timetables/home`]})});(0,S.useEffect)(()=>{if(M){let t=new URLSearchParams;if(M.courseId&&t.append(`courseId`,M.courseId.toString()),M.professors){let e=M.professors[0];e&&t.append(`professorId`,e.id.toString())}e(`/dictionary?${t.toString()}`)}},[M]),(0,S.useEffect)(()=>{I.data&&(F({year:I.data.year,semester:I.data.semester}),R({year:I.data.year,semester:I.data.semester}))},[I.data,F,R]);let B=P.data?.timetableItems??[];return i(C,{direction:`column`,gap:0,padding:`30px 23px`,flex:`1 1 auto`,children:j===`loading`?i(b,{}):a(w,{direction:`column`,align:`stretch`,gap:16,style:{overflow:`hidden`},children:[j===`idle`?a(E,{direction:`column`,gap:12,align:`center`,children:[i(D,{children:i(f,{size:30,color:g.colors.Highlight.default,children:i(y,{})})}),i(O,{onClick:_,children:i(h,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}):i(c,{direction:`row`,gap:0,children:i(p,{i18nKey:`main.hisTimeTable`,values:{name:v?.name},components:{name:i(h,{type:`BiggerBold`,color:`Highlight.default`,children:void 0}),normal:i(h,{type:`BiggerBold`,color:`Text.dark`,children:void 0}),space:i(o,{children:`\xA0`})}})}),j===`success`&&a(o,{children:[a(A,{"aria-label":t(`main.homeTimetable.label`),value:P.data?.timetableId??``,disabled:!I.data||P.isPending||z.isPending,onChange:e=>{I.data&&z.mutate({year:I.data.year,semester:I.data.semester,timetableId:e.target.value===``?null:Number(e.target.value)})},children:[i(`option`,{value:``,children:t(`main.homeTimetable.enrolled`)}),[...L.data?.timetables??[]].sort((e,t)=>e.timeTableOrder-t.timeTableOrder).map(e=>i(`option`,{value:e.id,children:e.name},e.id))]}),(P.isError||z.isError)&&i(h,{type:`Small`,role:`alert`,children:t(`main.homeTimetable.error`)})]}),i(T,{blur:j===`idle`,direction:`column`,gap:0,align:`stretch`,style:{overflow:`hidden`},children:i(k,{style:{overflow:`hidden`},children:i(x,{timetableItems:B,needLectureDeletable:!1,needTimeFilter:!1,onLectureSelect:e=>N(e),needCurrentTimeBar:!0})})})]})})};export{j as default};
//# sourceMappingURL=TimeTableSection-D5M8_7ag.js.map