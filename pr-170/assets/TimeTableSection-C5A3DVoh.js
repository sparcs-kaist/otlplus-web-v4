(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b6f5295eb01b6f9b62c55f3becfc83a2448edba3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`27e80f55-2177-45f2-9647-e22efe6a0651`,e._sentryDebugIdIdentifier=`sentry-dbid-27e80f55-2177-45f2-9647-e22efe6a0651`)}catch{}})();import{D as e,S as t,l as n,n as r,r as i,t as a}from"./emotion-react-jsx-runtime.browser.esm-Cnk_Aq3J.js";import{O as o}from"./chunk-62JRHF6Z-BqbRoCcB.js";import{t as s}from"./emotion-styled.browser.esm-BrBV03_t.js";import{i as c}from"./axios-Du-5RfZe.js";import{t as l}from"./useAPI-DetRwDxU.js";import{t as u}from"./Icon-BrZuvKGl.js";import{t as d}from"./Trans-C9fvX1lM.js";import{t as f}from"./Typography-BmW4OtQd.js";import{t as p}from"./FlexWrapper-Dj4SbSah.js";import{t as m}from"./media-CH25req8.js";import{t as h}from"./handleLoginLogout-qhKyW-xn.js";import{t as g}from"./Widget-BabGakgR.js";import{t as _}from"./Lock-CVdx1flB.js";import{t as v}from"./LoadingCircle-B3puEDaC.js";import{t as y}from"./CustomTimeTableGrid-CoeGyrXF.js";var b=e(t()),x=s(g)`
    width: 856px;
    height: 1000px;

    ${m.laptop} {
        width: 100%;
    }
`,S=s(p)`
    flex-grow: 1;
    width: 100%;
`,C=s(p)`
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,w=s(p)`
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
`,O=()=>{let e=o(),t=n(),{user:s,status:m}=c(),[g,O]=(0,b.useState)(null),{query:k,setParams:A}=l(`GET`,`/timetables/my-timetable`,{enabled:m===`success`}),{query:j}=l(`GET`,`/semesters/current`);(0,b.useEffect)(()=>{if(g){let t=new URLSearchParams;if(g.courseId&&t.append(`courseId`,g.courseId.toString()),g.professors){let e=g.professors[0];e&&t.append(`professorId`,e.id.toString())}e(`/dictionary?${t.toString()}`)}},[g]),(0,b.useEffect)(()=>{j.data&&A({year:j.data.year,semester:j.data.semester})},[j.data,A]);let M=k.data?.lectures??[];return r(x,{direction:`column`,gap:0,padding:`30px 23px`,flex:`1 1 auto`,children:m===`loading`?r(v,{}):i(S,{direction:`column`,align:`stretch`,gap:16,style:{overflow:`hidden`},children:[m===`idle`?i(w,{direction:`column`,gap:12,align:`center`,children:[r(T,{children:r(u,{size:30,color:t.colors.Highlight.default,children:r(_,{})})}),r(E,{onClick:h,children:r(f,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}):r(p,{direction:`row`,gap:0,children:r(d,{i18nKey:`main.hisTimeTable`,values:{name:s?.name},components:{name:r(f,{type:`BiggerBold`,color:`Highlight.default`,children:void 0}),normal:r(f,{type:`BiggerBold`,color:`Text.dark`,children:void 0}),space:r(a,{children:`\xA0`})}})}),r(C,{blur:m===`idle`,direction:`column`,gap:0,align:`stretch`,style:{overflow:`hidden`},children:r(D,{style:{overflow:`hidden`},children:r(y,{lectures:M,needLectureDeletable:!1,needTimeFilter:!1,onLectureSelect:e=>O(e),needCurrentTimeBar:!0})})})]})})};export{O as default};
//# sourceMappingURL=TimeTableSection-C5A3DVoh.js.map