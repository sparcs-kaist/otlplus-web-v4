import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-CSGOjjze.js";import{r as m}from"./chunk-JZWAC4HX-CypP3aYd.js";import{F as a,s as r}from"./FlexWrapper-ClZAwvme.js";import{L as y}from"./Lock-HVet-8Ki.js";import{L as T}from"./LoadingCircle-BOUIf7V0.js";import{C as x}from"./CustomTimeTableGrid-C8CSpHTx.js";import{u as p,I as w}from"./useIsDevice-BGP3W1m6.js";import{T as l}from"./Typography-TFUHRtP7.js";import{m as I}from"./media-Bo6ID7pW.js";import{a as F}from"./handleLoginLogout-25i4rH7u.js";import{u as L}from"./useUserStore-BEZOwGgD.js";import{W as E}from"./Widget-DJ7F8GiI.js";import{T as v}from"./Trans-DCPE9e4y.js";import"./IconButton-DkctJ35P.js";import"./index-CmJKHkdf.js";import"./proxy-CyuYuJ--.js";import"./useTranslation-0zVaXusR.js";import"./index-WIeaGq_p.js";import"./env-DU65zTMS.js";import"./queryPersister-Bg72Nptt.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"94bcaa45a12a089c377ec0a72ec75979c22d0e7c"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="58494cb1-08c5-4b65-bc2b-a63b2175328d",e._sentryDebugIdIdentifier="sentry-dbid-58494cb1-08c5-4b65-bc2b-a63b2175328d")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-Nw2MH5vS.js.map
