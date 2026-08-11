(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`99842b7b043b77559db03e4a2016091c8e86ca45`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`83a6d856-ddff-43ff-811f-5f76282c20f2`,e._sentryDebugIdIdentifier=`sentry-dbid-83a6d856-ddff-43ff-811f-5f76282c20f2`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-cKGZJon8.js";import{O as n}from"./chunk-QFMPRPBF-N49JNkAc.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-DGAfG6yt.js";import{n as s,t as c}from"./FlexWrapper-QrhBL4jB.js";import{i as l}from"./axios-BVuZQl3m.js";import{t as u}from"./useAPI-DZ41zqob.js";import{t as d}from"./Icon-CQ_CKzH7.js";import{t as f}from"./Trans-CyP3-DaY.js";import{t as p}from"./Typography-CxegfUVS.js";import{t as m}from"./media-Dh8gUi1l.js";import{t as h}from"./handleLoginLogout-Biz15yIX.js";import{t as g}from"./Widget-BQ6dSQCD.js";import{t as _}from"./Lock-D8nu0Rvg.js";import{t as v}from"./LoadingCircle-1fCza2gb.js";import{t as y}from"./CustomTimeTableGrid-xVlBQMPk.js";var b=t(e()),x=s(g)`
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
//# sourceMappingURL=TimeTableSection-vETu0cNs.js.map