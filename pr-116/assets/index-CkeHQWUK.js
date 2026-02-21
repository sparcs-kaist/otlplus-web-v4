import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-F8bdcEIg.js";import{r as m}from"./chunk-JZWAC4HX-Cfh0KN4p.js";import{F as a,s as r}from"./FlexWrapper-KzI-1zOy.js";import{L as y}from"./Lock-CC-TAiWx.js";import{L as T}from"./LoadingCircle-BA9z248O.js";import{C as x}from"./CustomTimeTableGrid-BykKUK8h.js";import{u as p,I as w}from"./useIsDevice-DTUahnGJ.js";import{T as l}from"./Typography-D41jKyPx.js";import{m as I}from"./media-Yzkf6hWa.js";import{handleLogin as F}from"./handleLoginLogout-COBKIdZM.js";import{u as L}from"./useUserStore-C8kcDMji.js";import{W as E}from"./Widget-B1K_MoP9.js";import{T as v}from"./Trans-CE2vc5WR.js";import"./IconButton-B3X5yPe5.js";import"./index-Dvd6VKIe.js";import"./proxy-JC5yNkKK.js";import"./useTranslation-CPG4vhSN.js";import"./index-B9ZXhHRb.js";import"./env-4tHM3K6O.js";import"./queryPersister-CjROCHpt.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f03a8476d108cb639276cc11ca3efaa799be1e6a"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="82cd35e9-febf-4b15-b8fd-5e344374c7ba",e._sentryDebugIdIdentifier="sentry-dbid-82cd35e9-febf-4b15-b8fd-5e344374c7ba")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-CkeHQWUK.js.map
