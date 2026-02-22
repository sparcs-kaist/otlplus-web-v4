import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-CEuHzFsl.js";import{r as m}from"./chunk-JZWAC4HX-CLyBVW00.js";import{F as a,s as r}from"./FlexWrapper-BKgRhobj.js";import{L as y}from"./Lock-Cti0rTyy.js";import{L as T}from"./LoadingCircle-BfO7aSJ_.js";import{C as x}from"./CustomTimeTableGrid-BZbNL7o2.js";import{u as p,I as w}from"./useIsDevice-CE-wOeI_.js";import{T as l}from"./Typography-ChfspkpA.js";import{m as I}from"./media-B8FZMoF3.js";import{a as F}from"./handleLoginLogout-DcwQ1dJJ.js";import{u as L}from"./useUserStore-D-kM-l4Y.js";import{W as E}from"./Widget-Bdt17f7J.js";import{T as v}from"./Trans-ngCVmP-o.js";import"./IconButton-BRb5mta7.js";import"./index-BQ23f3Pk.js";import"./proxy-qekgeHI_.js";import"./useTranslation-BBI9J35P.js";import"./index-CY0Fap4D.js";import"./env-C8yU1GCz.js";import"./queryPersister-Bj9Hh8Lf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"1f66a93a2e73ddc5421829c6c9db82df82d87106"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="58494cb1-08c5-4b65-bc2b-a63b2175328d",e._sentryDebugIdIdentifier="sentry-dbid-58494cb1-08c5-4b65-bc2b-a63b2175328d")}catch{}})();const B=r(E)`
    width: 856px;
    height: 1000px;

    ${I.laptop} {
        width: 100%;
    }
`,W=r(a)`
    flex-grow: 1;
    width: 100%;
`,k=r(a)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,S=r(a)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,D=r.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,_=r.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,Z=()=>{const e=h(),{user:s,status:o}=L(),u=m.useRef(null),{query:g,setParams:d}=p("GET","/timetables/my-timetable",{enabled:o==="success"}),{query:i}=p("GET","/semesters");m.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const n=i.data.semesters[i.data.semesters.length-1];if(!n)return;d({year:n.year,semester:n.semester})}},[i.data,d]);const f=g.data?.lectures??[];return t(B,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:o==="loading"?t(T,{}):c(W,{direction:"column",align:"stretch",gap:16,ref:u,children:[o==="idle"?c(S,{direction:"column",gap:12,align:"center",children:[t(D,{children:t(w,{size:30,color:e.colors.Highlight.default,children:t(y,{})})}),t(_,{onClick:F,children:t(l,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(a,{direction:"row",gap:0,children:t(v,{i18nKey:"main.hisTimeTable",values:{name:s?.name},components:{name:t(l,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(l,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(b,{children:" "})}})}),t(k,{blur:o==="idle",direction:"column",gap:0,align:"stretch",children:t(x,{lectures:f,needLectureDeletable:!1,needTimeFilter:!1,needLectureInteraction:!1})})]})})};export{Z as default};
//# sourceMappingURL=index-3hKrQM2D.js.map
