import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-PTQtYfCW.js";import{r as m}from"./chunk-JZWAC4HX-Vj8onlRB.js";import{F as a,s as r}from"./FlexWrapper-DKR19g_5.js";import{L as y}from"./Lock-D4m_h_Mf.js";import{L as T}from"./LoadingCircle-BOgLY6A1.js";import{C as x}from"./CustomTimeTableGrid-BDxyWUM1.js";import{u as p,I as w}from"./useIsDevice-BNNp6-Vj.js";import{T as l}from"./Typography-CCZ7rBZJ.js";import{m as I}from"./media-hMYUtb-6.js";import{a as F}from"./handleLoginLogout-DspchhC4.js";import{u as L}from"./useUserStore-Cym-cTAr.js";import{W as E}from"./Widget-CXIuisFu.js";import{T as v}from"./Trans-Cmkdsfbt.js";import"./IconButton-BbQTytIh.js";import"./index-CKO-o_SB.js";import"./proxy-BistTYm1.js";import"./useTranslation-Kwjulw0f.js";import"./index-CnoG2Imj.js";import"./env-Pu0eJRyd.js";import"./queryPersister-C1lPWlDN.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"e8d89222aeeb3c67f1c6f1e6e657f73d9c86c1d7"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="58494cb1-08c5-4b65-bc2b-a63b2175328d",e._sentryDebugIdIdentifier="sentry-dbid-58494cb1-08c5-4b65-bc2b-a63b2175328d")}catch{}})();const B=r(E)`
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
`,Z=()=>{const e=h(),{user:s,status:o}=L(),u=m.useRef(null),{query:f,setParams:d}=p("GET","/timetables/my-timetable",{enabled:o==="success"}),{query:i}=p("GET","/semesters");m.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const n=i.data.semesters[i.data.semesters.length-1];if(!n)return;d({year:n.year,semester:n.semester})}},[i.data,d]);const g=f.data?.lectures??[];return t(B,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:o==="loading"?t(T,{}):c(W,{direction:"column",align:"stretch",gap:16,ref:u,children:[o==="idle"?c(S,{direction:"column",gap:12,align:"center",children:[t(D,{children:t(w,{size:30,color:e.colors.Highlight.default,children:t(y,{})})}),t(_,{onClick:F,children:t(l,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(a,{direction:"row",gap:0,children:t(v,{i18nKey:"main.hisTimeTable",values:{name:s?.name},components:{name:t(l,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(l,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(b,{children:" "})}})}),t(k,{blur:o==="idle",direction:"column",gap:0,align:"stretch",children:t(x,{lectures:g,needLectureDeletable:!1,needTimeFilter:!1,needLectureInteraction:!1})})]})})};export{Z as default};
//# sourceMappingURL=index-CW_FV7Z-.js.map
