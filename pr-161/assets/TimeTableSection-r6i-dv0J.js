(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`5e3489c88606a80b22946118536a2b67831212dd`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`0248ee13-69c7-4ec8-88c3-045ea43ff7c9`,e._sentryDebugIdIdentifier=`sentry-dbid-0248ee13-69c7-4ec8-88c3-045ea43ff7c9`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-B382Yc7J.js";import{D as n}from"./chunk-62JRHF6Z-DZNJsNgA.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-btUPeI25.js";import{n as s,t as c}from"./FlexWrapper-LYbwkIco.js";import{i as l}from"./axios-BlVP8w8m.js";import{t as u}from"./useAPI-CeHLt5bs.js";import{t as d}from"./Icon-Bje75kS_.js";import{t as f}from"./Trans-DjHUekSB.js";import{t as p}from"./Typography-Dn9fwDKI.js";import{t as m}from"./media-C28cdZEj.js";import{t as h}from"./handleLoginLogout-Cli0GBaW.js";import{t as g}from"./Widget-Dxop5I_W.js";import{t as _}from"./Lock-ohxLLwH2.js";import{t as v}from"./LoadingCircle-CKS4HAD6.js";import{t as y}from"./CustomTimeTableGrid-sDYRTyix.js";var b=t(e()),x=s(g)`
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
//# sourceMappingURL=TimeTableSection-r6i-dv0J.js.map