import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-B5Mzfpnp.js";import{r as m}from"./chunk-JZWAC4HX-Dli3OiYn.js";import{F as a,s as r}from"./FlexWrapper-BAjXYuYd.js";import{L as y}from"./Lock-NOxF15wU.js";import{L as T}from"./LoadingCircle-Dt0hBlTo.js";import{C as x}from"./CustomTimeTableGrid-BMhrUnra.js";import{u as p,I as w}from"./useIsDevice-B1pA0poh.js";import{T as l}from"./Typography-COGP1R2-.js";import{m as I}from"./media-Cuvk5UQk.js";import{a as F}from"./handleLoginLogout-BEt1A5-r.js";import{u as L}from"./useUserStore-5EODgYb0.js";import{W as E}from"./Widget-DXbAbg5v.js";import{T as v}from"./Trans-BP2iuWwt.js";import"./IconButton-Cv9S5XVd.js";import"./index-BRwj32Uz.js";import"./proxy-ZVebKzV4.js";import"./useTranslation-B73mMrNG.js";import"./index-Bg_GZY9z.js";import"./env-CQYtLy6Q.js";import"./queryPersister-Cp6SjkVu.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"66edb5d634d1bce1a87eb1662822c9e9345d91bf"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="58494cb1-08c5-4b65-bc2b-a63b2175328d",e._sentryDebugIdIdentifier="sentry-dbid-58494cb1-08c5-4b65-bc2b-a63b2175328d")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-DHTZRqEA.js.map
