import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-CPzm1Iyl.js";import{r as m}from"./chunk-JZWAC4HX-DLmqpQ8G.js";import{F as a,s as r}from"./FlexWrapper-BOlR534B.js";import{L as y}from"./Lock-DqR0p8GS.js";import{L as T}from"./LoadingCircle-DMyCPKGy.js";import{C as x}from"./CustomTimeTableGrid-BjwGqxV1.js";import{u as p,I as w}from"./useIsDevice-Dz1rA7np.js";import{T as l}from"./Typography-CsQ5VFSY.js";import{m as I}from"./media-DhWP3PdC.js";import{a as F}from"./handleLoginLogout-iuRZVSWz.js";import{u as L}from"./useUserStore-Q1oqeooC.js";import{W as E}from"./Widget-BngCx1w1.js";import{T as v}from"./Trans-C3OwbJQX.js";import"./IconButton-BhCeKH33.js";import"./proxy-C4sw8wO8.js";import"./useTranslation-Dt8VQ-Fw.js";import"./index-h6RS7enk.js";import"./env-C3Lrq8Ek.js";import"./queryPersister-CDjh-W-p.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ce342b6136b62535954ac4bae4e4e4b3e4405a50"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="6c390228-96dd-446d-aba1-6a4421752522",e._sentryDebugIdIdentifier="sentry-dbid-6c390228-96dd-446d-aba1-6a4421752522")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-DnuUVSfk.js.map
