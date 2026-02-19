import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-3iAI1-2z.js";import{r as m}from"./chunk-EPOLDU6W-BWW_yciW.js";import{F as n,n as r}from"./FlexWrapper-C8kJQqM4.js";import{L as y}from"./Lock-DQHyACcI.js";import{L as T}from"./LoadingCircle-7eTwv0Ng.js";import{C as x}from"./CustomTimeTableGrid-D_7FDj53.js";import{u as p,I as w}from"./useIsDevice-DqmOhhAg.js";import{T as l}from"./Typography-dii1uYzL.js";import{m as I}from"./media-DzJN5QSX.js";import{a as F}from"./handleLoginLogout-BSMDcGQZ.js";import{u as L}from"./useUserStore-DdFk51Ly.js";import{W as E}from"./Widget-K1v9qv7O.js";import{T as v}from"./Trans-DmRrE2L3.js";import"./IconButton-DZdYeGZS.js";import"./proxy-B3Tw_PKH.js";import"./useTranslation-DWh9_qKU.js";import"./index-BKxNqBQM.js";import"./env-BrLSVvlW.js";import"./queryPersister-D5e0lhBg.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"3dd76d336057ee704859715f34ecd92ac1bad066"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="958e6a2b-bef7-4789-abd2-3c99012a7aac",e._sentryDebugIdIdentifier="sentry-dbid-958e6a2b-bef7-4789-abd2-3c99012a7aac")})()}catch{}const B=r(E)`
    width: 856px;
    height: 1000px;

    ${I.laptop} {
        width: 100%;
    }
`,S=r(n)`
    flex-grow: 1;
    width: 100%;
`,W=r(n)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,k=r(n)`
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
`,X=()=>{const e=h(),{user:o,status:a}=L(),f=m.useRef(null),{query:u,setParams:d}=p("GET","/timetables/my-timetable",{enabled:a==="success"}),{query:i}=p("GET","/semesters");m.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const s=i.data.semesters[i.data.semesters.length-1];if(!s)return;d({year:s.year,semester:s.semester})}},[i.data,d]);const g=u.data?.lectures??[];return t(B,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:a==="loading"?t(T,{}):c(S,{direction:"column",align:"stretch",gap:16,ref:f,children:[a==="idle"?c(k,{direction:"column",gap:12,align:"center",children:[t(D,{children:t(w,{size:30,color:e.colors.Highlight.default,children:t(y,{})})}),t(_,{onClick:F,children:t(l,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(n,{direction:"row",gap:0,children:t(v,{i18nKey:"main.hisTimeTable",values:{name:o?.name},components:{name:t(l,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(l,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(b,{children:" "})}})}),t(W,{blur:a==="idle",direction:"column",gap:0,align:"stretch",children:t(x,{lectures:g,needLectureDeletable:!1,needTimeFilter:!1,needLectureInteraction:!1})})]})})};export{X as default};
//# sourceMappingURL=index-BZ8mlDYS.js.map
