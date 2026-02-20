import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-4sesC0nC.js";import{r as m}from"./chunk-JZWAC4HX-B-jeApCO.js";import{F as a,s as r}from"./FlexWrapper-C1QlahJb.js";import{L as y}from"./Lock-_8wFP85g.js";import{L as T}from"./LoadingCircle-mSgyUw9h.js";import{C as x}from"./CustomTimeTableGrid-BM7Op3SG.js";import{u as p,I as w}from"./useIsDevice-BuvVpZQ9.js";import{T as d}from"./Typography-PjECPi2J.js";import{m as I}from"./media-D6Q07iu9.js";import{a as F}from"./handleLoginLogout-C84IXrd0.js";import{u as L}from"./useUserStore-PAGb2hZ-.js";import{W as E}from"./Widget-D4DZV0ED.js";import{T as v}from"./Trans-DFcg7Vv2.js";import"./IconButton-Dg_t_aAD.js";import"./index-debMPwzz.js";import"./proxy-CMEtBIHK.js";import"./useTranslation-CMQLp7ze.js";import"./index-DMM0IzYm.js";import"./env-D7nAsLzp.js";import"./queryPersister-Cti6XpPE.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"4c95bdbf1258ccf9ac75acde64f7e63536e3ef45"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b910418c-e0b3-4acd-bcd5-dcb0d44b52d3",e._sentryDebugIdIdentifier="sentry-dbid-b910418c-e0b3-4acd-bcd5-dcb0d44b52d3")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-Dvw9VFqf.js.map
