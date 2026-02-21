import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-CFg98ttf.js";import{r as m}from"./chunk-JZWAC4HX-HTfKbbyO.js";import{F as a,s as r}from"./FlexWrapper-oFQ69W9K.js";import{L as y}from"./Lock-Do3L0IAI.js";import{L as T}from"./LoadingCircle-CqIHt5bq.js";import{C as x}from"./CustomTimeTableGrid-BiE4RmJc.js";import{u as p,I as w}from"./useIsDevice-LaJJ1A2n.js";import{T as l}from"./Typography-B5UxCzV4.js";import{m as I}from"./media-DVpaVeQ0.js";import{handleLogin as F}from"./handleLoginLogout-C0EAL_-r.js";import{u as L}from"./useUserStore-B4CLi70m.js";import{W as E}from"./Widget-TeH4xcju.js";import{T as v}from"./Trans-D39R6mjV.js";import"./IconButton-BtC53mu3.js";import"./index-DydePqnj.js";import"./proxy-_NuRKMEj.js";import"./useTranslation-DmBL48f1.js";import"./index-S1j9GeGc.js";import"./env-BrqTYFfI.js";import"./queryPersister-DPYPJpSf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"51e334b0b8935be7c5f3bb6692a634a3ea9cf50a"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="82cd35e9-febf-4b15-b8fd-5e344374c7ba",e._sentryDebugIdIdentifier="sentry-dbid-82cd35e9-febf-4b15-b8fd-5e344374c7ba")}catch{}})();const B=r(E)`
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
`,Z=()=>{const e=h(),{user:s,status:o}=L(),f=m.useRef(null),{query:u,setParams:d}=p("GET","/timetables/my-timetable",{enabled:o==="success"}),{query:i}=p("GET","/semesters");m.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const n=i.data.semesters[i.data.semesters.length-1];if(!n)return;d({year:n.year,semester:n.semester})}},[i.data,d]);const g=u.data?.lectures??[];return t(B,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:o==="loading"?t(T,{}):c(W,{direction:"column",align:"stretch",gap:16,ref:f,children:[o==="idle"?c(S,{direction:"column",gap:12,align:"center",children:[t(D,{children:t(w,{size:30,color:e.colors.Highlight.default,children:t(y,{})})}),t(_,{onClick:F,children:t(l,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(a,{direction:"row",gap:0,children:t(v,{i18nKey:"main.hisTimeTable",values:{name:s?.name},components:{name:t(l,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(l,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(b,{children:" "})}})}),t(k,{blur:o==="idle",direction:"column",gap:0,align:"stretch",children:t(x,{lectures:g,needLectureDeletable:!1,needTimeFilter:!1,needLectureInteraction:!1})})]})})};export{Z as default};
//# sourceMappingURL=index-lpdyzV_l.js.map
