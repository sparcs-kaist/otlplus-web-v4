import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-Cd1yPuV_.js";import{r as m}from"./chunk-EPOLDU6W-DUBCDYUl.js";import{F as n,n as r}from"./FlexWrapper-CEaVn29y.js";import{L as y}from"./Lock-BvDdnkI0.js";import{L as T}from"./LoadingCircle-BAvNJpvO.js";import{C as x}from"./CustomTimeTableGrid-CuUtPErt.js";import{u as p,I as w}from"./useIsDevice-cMmANA1X.js";import{T as l}from"./Typography-4xh8tt69.js";import{m as I}from"./media-QPqgitLY.js";import{a as F}from"./handleLoginLogout-DFHefYtP.js";import{u as L}from"./useUserStore-LEZkRA7u.js";import{W as E}from"./Widget-BuVIz10v.js";import{T as v}from"./Trans-BVyEuCS6.js";import"./IconButton-DRZfk4PH.js";import"./proxy-hOFuVUYp.js";import"./useTranslation-CZP_BZF1.js";import"./index-D0e8kqVY.js";import"./env-_2I-OxO9.js";import"./queryPersister-DDt3N7cO.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ce49d0962b4d8a1e630c1c635b70e239a498a29d"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="958e6a2b-bef7-4789-abd2-3c99012a7aac",e._sentryDebugIdIdentifier="sentry-dbid-958e6a2b-bef7-4789-abd2-3c99012a7aac")})()}catch{}const B=r(E)`
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
//# sourceMappingURL=index-C5Rd5zzY.js.map
