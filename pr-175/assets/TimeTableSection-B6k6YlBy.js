(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`8bd2e28165639ab8e07ac600798b6dc23ba50f65`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`af8dbd8f-05ce-4c5d-93c7-69ad1ffdca73`,e._sentryDebugIdIdentifier=`sentry-dbid-af8dbd8f-05ce-4c5d-93c7-69ad1ffdca73`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BMFwLNBY.js";import{O as n}from"./chunk-62JRHF6Z-DHpFHb40.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-DLl3RN7b.js";import{n as s,t as c}from"./FlexWrapper-mA4z3Ths.js";import{P as l,i as u,k as d}from"./axios-6Oe6oc0l.js";import{t as f}from"./useAPI-DZ41y4I0.js";import{t as p}from"./Icon-BN9QFw3S.js";import{t as m}from"./Trans-CIx2hAoI.js";import{t as h}from"./Typography-XOAurGEs.js";import{t as g}from"./media-YLqhAOI1.js";import{t as _}from"./handleLoginLogout-CBxLiYuX.js";import{t as v}from"./Widget-UadSLvhB.js";import{t as y}from"./Lock-D40dPNs1.js";import{t as b}from"./LoadingCircle-D-NUVS3C.js";import{t as x}from"./CustomTimeTableGrid-Dv3q2ozF.js";var S=t(e()),C=s(v)`
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
`,A=()=>{let e=n(),t=r(),{user:s,status:g}=u(),[v,A]=(0,S.useState)(null),{query:j,setParams:M}=f(`GET`,`/timetables/home`,{enabled:g===`success`,staleTime:0}),{query:N}=f(`GET`,`/semesters/current`);(0,S.useEffect)(()=>{if(v){let t=new URLSearchParams;if(v.courseId&&t.append(`courseId`,v.courseId.toString()),v.professors){let e=v.professors[0];e&&t.append(`professorId`,e.id.toString())}e(`/dictionary?${t.toString()}`)}},[v]),(0,S.useEffect)(()=>{N.data&&M({year:N.data.year,semester:N.data.semester})},[N.data,M]);let P=(0,S.useMemo)(()=>l(j.data),[j.data]);return i(C,{direction:`column`,gap:0,padding:`30px 23px`,flex:`1 1 auto`,children:g===`loading`?i(b,{}):a(w,{direction:`column`,align:`stretch`,gap:16,style:{overflow:`hidden`},children:[g===`idle`?a(E,{direction:`column`,gap:12,align:`center`,children:[i(D,{children:i(p,{size:30,color:t.colors.Highlight.default,children:i(y,{})})}),i(O,{onClick:_,children:i(h,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}):i(c,{direction:`row`,gap:0,children:i(m,{i18nKey:`main.hisTimeTable`,values:{name:s?.name},components:{name:i(h,{type:`BiggerBold`,color:`Highlight.default`,children:void 0}),normal:i(h,{type:`BiggerBold`,color:`Text.dark`,children:void 0}),space:i(o,{children:`\xA0`})}})}),i(T,{blur:g===`idle`,direction:`column`,gap:0,align:`stretch`,style:{overflow:`hidden`},children:i(k,{style:{overflow:`hidden`},children:i(x,{timetableItems:P,needLectureDeletable:!1,needTimeFilter:!1,onItemSelect:e=>{d(e)&&A(e.data)},needCurrentTimeBar:!0})})})]})})};export{A as default};
//# sourceMappingURL=TimeTableSection-B6k6YlBy.js.map