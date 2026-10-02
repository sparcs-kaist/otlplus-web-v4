(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`3b0e1d5e696915030a0b6d616c1263ff2f429d72`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`27e80f55-2177-45f2-9647-e22efe6a0651`,e._sentryDebugIdIdentifier=`sentry-dbid-27e80f55-2177-45f2-9647-e22efe6a0651`)}catch{}})();import{D as e,S as t,l as n,n as r,r as i,t as a}from"./emotion-react-jsx-runtime.browser.esm-CEJANohN.js";import{O as o}from"./chunk-62JRHF6Z-CyWtaSqr.js";import{t as s}from"./emotion-styled.browser.esm-CAIppcGC.js";import{i as c}from"./axios-BShiDBOC.js";import{t as l}from"./useAPI-B9jV7FdJ.js";import{t as u}from"./Icon-DD8doI0X.js";import{t as d}from"./Trans-E7BamBPz.js";import{t as f}from"./Typography-DA1kh1cX.js";import{t as p}from"./FlexWrapper-CUG6HLLC.js";import{t as m}from"./media-B4tpoFOq.js";import{t as h}from"./handleLoginLogout-Jaq_knbp.js";import{t as g}from"./Widget-BoZqAEj_.js";import{t as _}from"./Lock-DhShXOpO.js";import{t as v}from"./LoadingCircle-Db2xZeW7.js";import{t as y}from"./CustomTimeTableGrid-_nTBL_vs.js";var b=e(t()),x=s(g)`
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
//# sourceMappingURL=TimeTableSection-CtLMdzSc.js.map