import{u as x,j as t,a as f,F as I}from"./emotion-react-jsx-runtime.browser.esm-Cz0j4EUg.js";import{y as L,r as d}from"./chunk-JZWAC4HX-C68MJINk.js";import{F as l,s}from"./FlexWrapper-C0OL7t98.js";import{L as w}from"./Lock-DSLl120a.js";import{L as S}from"./LoadingCircle-8a9vYeC-.js";import{C as F}from"./CustomTimeTableGrid-DwCs73yQ.js";import{u as g,I as v}from"./useIsDevice-0_oUbYGd.js";import{T as c}from"./Typography-NMwow0Es.js";import{m as E}from"./media-CEtl5irJ.js";import{a as B}from"./handleLoginLogout-DpV9todn.js";import{u as W}from"./useUserStore-BVDwAQ6a.js";import{W as k}from"./Widget-B87BYa4K.js";import{T as D}from"./Trans-N46kd48-.js";import"./IconButton-D5OVfN_g.js";import"./proxy-CiKqJYom.js";import"./useTranslation-Dq5ZH2WS.js";import"./index-kFApkM9H.js";import"./env-tEbDkx9U.js";import"./queryPersister-3pp74ynF.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"af44372b89b5c5512db1d3528c8cafda65efd3bb"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="a7d5f7de-5649-421e-9758-73b845e34264",e._sentryDebugIdIdentifier="sentry-dbid-a7d5f7de-5649-421e-9758-73b845e34264")}catch{}})();const P=s(k)`
    width: 856px;
    height: 1000px;

    ${E.laptop} {
        width: 100%;
    }
`,R=s(l)`
    flex-grow: 1;
    width: 100%;
`,_=s(l)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,$=s(l)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,C=s.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,H=s.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,oe=()=>{const e=L(),a=x(),{user:p,status:n}=W(),[o,h]=d.useState(null),b=d.useRef(null),{query:y,setParams:m}=g("GET","/timetables/my-timetable",{enabled:n==="success"}),{query:i}=g("GET","/semesters");d.useEffect(()=>{if(o){const r=new URLSearchParams;if(o.courseId&&r.append("courseId",o.courseId.toString()),o.professors){const u=o.professors[0];u&&r.append("professorId",u.id.toString())}e(`/dictionary?${r.toString()}`)}},[o]),d.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const r=i.data.semesters[i.data.semesters.length-1];if(!r)return;m({year:r.year,semester:r.semester})}},[i.data,m]);const T=y.data?.lectures??[];return t(P,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:n==="loading"?t(S,{}):f(R,{direction:"column",align:"stretch",gap:16,ref:b,children:[n==="idle"?f($,{direction:"column",gap:12,align:"center",children:[t(C,{children:t(v,{size:30,color:a.colors.Highlight.default,children:t(w,{})})}),t(H,{onClick:B,children:t(c,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(l,{direction:"row",gap:0,children:t(D,{i18nKey:"main.hisTimeTable",values:{name:p?.name},components:{name:t(c,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(c,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(I,{children:" "})}})}),t(_,{blur:n==="idle",direction:"column",gap:0,align:"stretch",children:t(F,{lectures:T,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:h})})]})})};export{oe as default};
//# sourceMappingURL=index-g1aT0Tvp.js.map
