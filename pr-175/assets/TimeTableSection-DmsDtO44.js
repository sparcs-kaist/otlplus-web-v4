(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`76d24851eed9ef769b9ce71e7b30071a0fc24065`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`5cd4d0be-99c5-4528-a2e9-f18c3cf0969c`,e._sentryDebugIdIdentifier=`sentry-dbid-5cd4d0be-99c5-4528-a2e9-f18c3cf0969c`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-DACjHxPw.js";import{O as n}from"./chunk-62JRHF6Z-Bm06Pz-U.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-pkQVWg5U.js";import{n as s,t as c}from"./FlexWrapper-g--S3w0L.js";import{I as l,i as u,j as d}from"./axios-CmYAzYjX.js";import{t as f}from"./useAPI-CuL-_5rL.js";import{t as p}from"./Icon-C795_hGQ.js";import{t as m}from"./Trans-CT_r81HQ.js";import{t as h}from"./Typography-BnDzUXhk.js";import{t as g}from"./media-CKomL41Y.js";import{t as _}from"./handleLoginLogout-CDvKUH2J.js";import{t as v}from"./Widget-BTO1J-vL.js";import{t as y}from"./Lock-h5YQmRe2.js";import{t as b}from"./LoadingCircle-CGbNBOBB.js";import{t as x}from"./CustomTimeTableGrid-DDs1K4m-.js";var S=t(e()),C=s(v)`
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
`,A=()=>{let e=n(),t=r(),{user:s,status:g}=u(),[v,A]=(0,S.useState)(null),{query:j,setParams:M}=f(`GET`,`/timetables/home`,{enabled:g===`success`,staleTime:0}),{query:N}=f(`GET`,`/semesters/current`);(0,S.useEffect)(()=>{if(v){let t=new URLSearchParams;if(v.courseId&&t.append(`courseId`,v.courseId.toString()),v.professors){let e=v.professors[0];e&&t.append(`professorId`,e.id.toString())}e(`/dictionary?${t.toString()}`)}},[v]),(0,S.useEffect)(()=>{N.data&&M({year:N.data.year,semester:N.data.semester})},[N.data,M]);let P=(0,S.useMemo)(()=>l(j.data),[j.data]);return i(C,{direction:`column`,gap:0,padding:`30px 23px`,flex:`1 1 auto`,children:g===`loading`?i(b,{}):a(w,{direction:`column`,align:`stretch`,gap:16,style:{overflow:`hidden`},children:[g===`idle`?a(E,{direction:`column`,gap:12,align:`center`,children:[i(D,{children:i(p,{size:30,color:t.colors.Highlight.default,children:i(y,{})})}),i(O,{onClick:_,children:i(h,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}):i(c,{direction:`row`,gap:0,children:i(m,{i18nKey:`main.hisTimeTable`,values:{name:s?.name},components:{name:i(h,{type:`BiggerBold`,color:`Highlight.default`,children:void 0}),normal:i(h,{type:`BiggerBold`,color:`Text.dark`,children:void 0}),space:i(o,{children:`\xA0`})}})}),i(T,{blur:g===`idle`,direction:`column`,gap:0,align:`stretch`,style:{overflow:`hidden`},children:i(k,{style:{overflow:`hidden`},children:i(x,{timetableItems:P,needItemDeletable:!1,needTimeFilter:!1,onItemSelect:e=>{d(e)&&A(e.data)},needCurrentTimeBar:!0})})})]})})};export{A as default};
//# sourceMappingURL=TimeTableSection-DmsDtO44.js.map