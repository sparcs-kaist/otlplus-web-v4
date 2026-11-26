(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`55be06d9198ee22c4f93c786beef642f934adeb2`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`04f07450-e12d-4663-a82c-b0a3cf83f215`,e._sentryDebugIdIdentifier=`sentry-dbid-04f07450-e12d-4663-a82c-b0a3cf83f215`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CDZSy4d9.js";import{O as n}from"./chunk-62JRHF6Z-7f-m7XY8.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-DMPPyInz.js";import{n as s,t as c}from"./FlexWrapper-CpmpXZjE.js";import{i as l}from"./axios-CHg08JqQ.js";import{t as u}from"./useAPI-B11-V5m9.js";import{t as d}from"./Icon-Bs9oS0CM.js";import{t as f}from"./Trans-vktuSads.js";import{t as p}from"./Typography-D-5kojhE.js";import{t as m}from"./media-DD8uU7rt.js";import{t as h}from"./handleLoginLogout-RzcrLiPq.js";import{t as g}from"./Widget-BDqlGM4M.js";import{t as _}from"./Lock-BG5Ihkwh.js";import{t as v}from"./LoadingCircle-Det5dy6b.js";import{s as y,t as b}from"./CustomTimeTableGrid-BbNWGgI4.js";var x=t(e()),S=s(g)`
    width: 856px;
    height: 1000px;

    ${m.laptop} {
        width: 100%;
    }
`,C=s(c)`
    flex-grow: 1;
    width: 100%;
`,w=s(c)`
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    width: 100%;
    height: 100%;
    pointer-events: ${({blur:e})=>e?`none`:`auto`};
`,T=s(c)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,E=s.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,D=s.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,O=s.div`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`,k=()=>{let e=n(),t=r(),{user:s,status:m}=l(),[g,k]=(0,x.useState)(null),{query:A,setParams:j}=u(`GET`,`/timetables/home`,{enabled:m===`success`,staleTime:0}),{query:M}=u(`GET`,`/semesters/current`);(0,x.useEffect)(()=>{if(g){let t=new URLSearchParams;if(g.courseId&&t.append(`courseId`,g.courseId.toString()),g.professors){let e=g.professors[0];e&&t.append(`professorId`,e.id.toString())}e(`/dictionary?${t.toString()}`)}},[g]),(0,x.useEffect)(()=>{M.data&&j({year:M.data.year,semester:M.data.semester})},[M.data,j]);let N=(0,x.useMemo)(()=>y(A.data),[A.data]);return i(S,{direction:`column`,gap:0,padding:`30px 23px`,flex:`1 1 auto`,children:m===`loading`?i(v,{}):a(C,{direction:`column`,align:`stretch`,gap:16,style:{overflow:`hidden`},children:[m===`idle`?a(T,{direction:`column`,gap:12,align:`center`,children:[i(E,{children:i(d,{size:30,color:t.colors.Highlight.default,children:i(_,{})})}),i(D,{onClick:h,children:i(p,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}):i(c,{direction:`row`,gap:0,children:i(f,{i18nKey:`main.hisTimeTable`,values:{name:s?.name},components:{name:i(p,{type:`BiggerBold`,color:`Highlight.default`,children:void 0}),normal:i(p,{type:`BiggerBold`,color:`Text.dark`,children:void 0}),space:i(o,{children:`\xA0`})}})}),i(w,{blur:m===`idle`,direction:`column`,gap:0,align:`stretch`,style:{overflow:`hidden`},children:i(O,{style:{overflow:`hidden`},children:i(b,{timetableItems:N,needLectureDeletable:!1,needTimeFilter:!1,onLectureSelect:e=>k(e),needCurrentTimeBar:!0})})})]})})};export{k as default};
//# sourceMappingURL=TimeTableSection-L4wFO70a.js.map