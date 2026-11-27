(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`57707224bd4055eefc2a36a00ca72f766126f3b2`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b7dd8416-d27f-4582-ac6f-e7d815debec3`,e._sentryDebugIdIdentifier=`sentry-dbid-b7dd8416-d27f-4582-ac6f-e7d815debec3`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-C_wLlDf8.js";import{O as n}from"./chunk-62JRHF6Z-CqLlG8WS.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-CL5ZvzYz.js";import{n as s,t as c}from"./FlexWrapper-bl7miEJ8.js";import{A as l,i as u,k as d}from"./axios-Dbq3KnLE.js";import{t as f}from"./useAPI-Cl2gHxsm.js";import{t as p}from"./Icon-BSiJVSKw.js";import{t as m}from"./Trans-BF92a_ol.js";import{t as h}from"./Typography-CxDxp4CR.js";import{t as g}from"./media-DrtFa0le.js";import{t as _}from"./handleLoginLogout-hGBwqpq4.js";import{t as v}from"./Widget-_f_lorP1.js";import{t as y}from"./Lock-DmiBKO5R.js";import{t as b}from"./LoadingCircle-Dk9x9hc5.js";import{t as x}from"./CustomTimeTableGrid-Ccs6xfKU.js";var S=t(e()),C=s(v)`
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
    background-color: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,k=s.div`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`,A=()=>{let e=n(),t=r(),{user:s,status:g}=u(),[v,A]=(0,S.useState)(null),{query:j,setParams:M}=f(`GET`,`/timetables/home`,{enabled:g===`success`}),{query:N}=f(`GET`,`/semesters/current`);(0,S.useEffect)(()=>{if(v){let t=new URLSearchParams;if(v.courseId&&t.append(`courseId`,v.courseId.toString()),v.professors){let e=v.professors[0];e&&t.append(`professorId`,e.id.toString())}e(`/dictionary?${t.toString()}`)}},[v]),(0,S.useEffect)(()=>{N.data&&M({year:N.data.year,semester:N.data.semester})},[N.data,M]);let P=(0,S.useMemo)(()=>d(j.data),[j.data]);return i(C,{direction:`column`,gap:0,padding:`30px 23px`,flex:`1 1 auto`,children:g===`loading`?i(b,{}):a(w,{direction:`column`,align:`stretch`,gap:16,style:{overflow:`hidden`},children:[g===`idle`?a(E,{direction:`column`,gap:12,align:`center`,children:[i(D,{children:i(p,{size:30,color:t.colors.Highlight.default,children:i(y,{})})}),i(O,{onClick:_,children:i(h,{type:`BigBold`,color:`Highlight.default`,children:`로그인하러가기`})})]}):i(c,{direction:`row`,gap:0,children:i(m,{i18nKey:`main.hisTimeTable`,values:{name:s?.name},components:{name:i(h,{type:`BiggerBold`,color:`Highlight.default`,children:void 0}),normal:i(h,{type:`BiggerBold`,color:`Text.dark`,children:void 0}),space:i(o,{children:`\xA0`})}})}),i(T,{blur:g===`idle`,direction:`column`,gap:0,align:`stretch`,style:{overflow:`hidden`},children:i(k,{style:{overflow:`hidden`},children:i(x,{timetableItems:P,needItemDeletable:!1,needTimeFilter:!1,onItemSelect:e=>{e.kind===l.LECTURE&&A(e.data)},needCurrentTimeBar:!0})})})]})})};export{A as default};
//# sourceMappingURL=TimeTableSection-BFXGqiuT.js.map