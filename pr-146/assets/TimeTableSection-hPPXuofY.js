(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`45108bf9206112498d6e1cff45a6d2c25183208f`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d4a5b9ea-1066-410b-ba38-5672633fb4ef`,e._sentryDebugIdIdentifier=`sentry-dbid-d4a5b9ea-1066-410b-ba38-5672633fb4ef`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CaYlvQBr.js";import{O as n}from"./chunk-QFMPRPBF-umJJB3TD.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-yr3k2gdL.js";import{n as s,t as c}from"./FlexWrapper-B6qM8Jl3.js";import{t as l}from"./useAPI-C_lzTPSx.js";import{t as u}from"./Icon-DDHspYN9.js";import{t as d}from"./Trans-DedLOqfK.js";import{t as f}from"./Typography-DKZu2lg8.js";import{t as p}from"./media-CgVFVVR2.js";import{t as m}from"./handleLoginLogout-BpTEovn2.js";import{t as h}from"./useUserStore-D-AcZnJC.js";import{t as g}from"./Widget-n6xATZ9n.js";import{t as _}from"./Lock-l5geomb-.js";import{t as v}from"./LoadingCircle-BjY3Zta8.js";import{t as y}from"./CustomTimeTableGrid-Ny8XfUxj.js";var b=t(e()),x=s(g)`
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
//# sourceMappingURL=TimeTableSection-hPPXuofY.js.map