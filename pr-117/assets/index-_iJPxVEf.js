import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-BcphOP5M.js";import{r as m}from"./chunk-JZWAC4HX-B-o0_ZPh.js";import{F as a,s as r}from"./FlexWrapper-BiCAB2hF.js";import{L as y}from"./Lock-CNqJ8bXq.js";import{L as T}from"./LoadingCircle-uYXfRZCl.js";import{C as x}from"./CustomTimeTableGrid-BH5DzqOr.js";import{u as p,I as w}from"./useIsDevice-CpU1pLyR.js";import{T as l}from"./Typography-B3Fmhv1A.js";import{m as I}from"./media-WvdBvGDH.js";import{handleLogin as F}from"./handleLoginLogout-BUemKcf4.js";import{u as L}from"./useUserStore-xIwSDerR.js";import{W as E}from"./Widget-CX7TkjFT.js";import{T as v}from"./Trans-43CYh4yT.js";import"./IconButton-DogsH3_9.js";import"./index-94nNqScg.js";import"./proxy-w8hSGyJy.js";import"./useTranslation-DKehugLI.js";import"./index-D1M8GhH6.js";import"./env-CEga7wDn.js";import"./queryPersister-BviZqF6g.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"42c864295c91fd2fa27bb0cc18cc685c2bfe284d"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="82cd35e9-febf-4b15-b8fd-5e344374c7ba",e._sentryDebugIdIdentifier="sentry-dbid-82cd35e9-febf-4b15-b8fd-5e344374c7ba")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-_iJPxVEf.js.map
