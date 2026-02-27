import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-Bzd4vgqS.js";import{r as m}from"./chunk-JZWAC4HX-VkGzwAP7.js";import{F as a,s as r}from"./FlexWrapper-UTlY1haL.js";import{L as y}from"./Lock-UP-4T2yz.js";import{L as T}from"./LoadingCircle-B3HVXdUx.js";import{C as x}from"./CustomTimeTableGrid-Cy5A3u0X.js";import{u as p,I as w}from"./useIsDevice-UTzTTxS4.js";import{T as d}from"./Typography-DpcCVrY3.js";import{m as I}from"./media-DterH5Wg.js";import{a as F}from"./handleLoginLogout-CdNTxW7K.js";import{u as L}from"./useUserStore-DwQoJ9dO.js";import{W as E}from"./Widget-DVsQQ7-w.js";import{T as v}from"./Trans-D_a1Z0cs.js";import"./IconButton-CyitLeN0.js";import"./index-DSGKYBtC.js";import"./proxy-C0hiFb16.js";import"./useTranslation-DrXzwBFF.js";import"./index-TluEGk0K.js";import"./env-OY5nGpcH.js";import"./queryPersister-DAeFH0aj.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"9337affcf44af1fb524bcd1b4f51b66ae50b740d"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b910418c-e0b3-4acd-bcd5-dcb0d44b52d3",e._sentryDebugIdIdentifier="sentry-dbid-b910418c-e0b3-4acd-bcd5-dcb0d44b52d3")}catch{}})();const B=r(E)`
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
`,Z=()=>{const e=h(),{user:s,status:o}=L(),u=m.useRef(null),{query:f,setParams:l}=p("GET","/timetables/my-timetable",{enabled:o==="success"}),{query:i}=p("GET","/semesters");m.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const n=i.data.semesters[i.data.semesters.length-1];if(!n)return;l({year:n.year,semester:n.semester})}},[i.data,l]);const g=f.data?.lectures??[];return t(B,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:o==="loading"?t(T,{}):c(W,{direction:"column",align:"stretch",gap:16,ref:u,children:[o==="idle"?c(S,{direction:"column",gap:12,align:"center",children:[t(D,{children:t(w,{size:30,color:e.colors.Highlight.default,children:t(y,{})})}),t(_,{onClick:F,children:t(d,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(a,{direction:"row",gap:0,children:t(v,{i18nKey:"main.hisTimeTable",values:{name:s?.name},components:{name:t(d,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(d,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(b,{children:" "})}})}),t(k,{blur:o==="idle",direction:"column",gap:0,align:"stretch",children:t(x,{lectures:g,needLectureDeletable:!1,needTimeFilter:!1,needLectureInteraction:!1})})]})})};export{Z as default};
//# sourceMappingURL=index-D97BeWl_.js.map
