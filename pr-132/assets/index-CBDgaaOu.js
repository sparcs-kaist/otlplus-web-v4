import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-BhqUqAgf.js";import{r as m}from"./chunk-JZWAC4HX-DmpmDBAO.js";import{F as a,s as r}from"./FlexWrapper-CtavLral.js";import{L as y}from"./Lock-D8dxmwQE.js";import{L as T}from"./LoadingCircle-C4fK66tn.js";import{C as x}from"./CustomTimeTableGrid-C7Vj5eut.js";import{u as p,I as w}from"./useIsDevice-BQVxGCq0.js";import{T as l}from"./Typography-CAwrVspH.js";import{m as I}from"./media-CZsC-uSB.js";import{a as F}from"./handleLoginLogout-BGdLaLY6.js";import{u as L}from"./useUserStore-BOzi6ntI.js";import{W as E}from"./Widget-BeGO5Yf_.js";import{T as v}from"./Trans-Ccon0Nmy.js";import"./IconButton-BiSJizS7.js";import"./index-CZgrqhJD.js";import"./proxy-P1pvEx_x.js";import"./useTranslation-CQPzn_i3.js";import"./index-D6Aq6IHo.js";import"./env-DV4ID_zN.js";import"./queryPersister-FgNz-Ufw.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"b197183f5a95225b90a78b7555018cb660f8a6fc"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="58494cb1-08c5-4b65-bc2b-a63b2175328d",e._sentryDebugIdIdentifier="sentry-dbid-58494cb1-08c5-4b65-bc2b-a63b2175328d")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-CBDgaaOu.js.map
