import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-DpENP5hc.js";import{r as m}from"./chunk-JZWAC4HX-fQQce8Kr.js";import{F as a,s as r}from"./FlexWrapper-BIARgqLs.js";import{L as y}from"./Lock-D4zrMcHo.js";import{L as T}from"./LoadingCircle-DyBwqXtq.js";import{C as x}from"./CustomTimeTableGrid-CJ9rdKrX.js";import{u as p,I as w}from"./useIsDevice-C4kq2vLm.js";import{T as l}from"./Typography-CCCD_fzk.js";import{m as I}from"./media-CqpXtPb_.js";import{a as F}from"./handleLoginLogout-BgzED4Uq.js";import{u as L}from"./useUserStore-Bhza0oOj.js";import{W as E}from"./Widget-CPEGtlSc.js";import{T as v}from"./Trans-D3IMQOrS.js";import"./IconButton-DDUepYO-.js";import"./proxy-Bsc_lKj-.js";import"./useTranslation-C0XpQFGv.js";import"./index-BaSHBge9.js";import"./env-BZV5sXtd.js";import"./queryPersister-rrDvr8LK.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"633de2c81c92732c73d1749fc73ab0472a81be11"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="6c390228-96dd-446d-aba1-6a4421752522",e._sentryDebugIdIdentifier="sentry-dbid-6c390228-96dd-446d-aba1-6a4421752522")}catch{}})();const B=r(E)`
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
`,X=()=>{const e=h(),{user:s,status:o}=L(),u=m.useRef(null),{query:g,setParams:d}=p("GET","/timetables/my-timetable",{enabled:o==="success"}),{query:i}=p("GET","/semesters");m.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const n=i.data.semesters[i.data.semesters.length-1];if(!n)return;d({year:n.year,semester:n.semester})}},[i.data,d]);const f=g.data?.lectures??[];return t(B,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:o==="loading"?t(T,{}):c(W,{direction:"column",align:"stretch",gap:16,ref:u,children:[o==="idle"?c(S,{direction:"column",gap:12,align:"center",children:[t(D,{children:t(w,{size:30,color:e.colors.Highlight.default,children:t(y,{})})}),t(_,{onClick:F,children:t(l,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(a,{direction:"row",gap:0,children:t(v,{i18nKey:"main.hisTimeTable",values:{name:s?.name},components:{name:t(l,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(l,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(b,{children:" "})}})}),t(k,{blur:o==="idle",direction:"column",gap:0,align:"stretch",children:t(x,{lectures:f,needLectureDeletable:!1,needTimeFilter:!1,needLectureInteraction:!1})})]})})};export{X as default};
//# sourceMappingURL=index-BaBQVitU.js.map
