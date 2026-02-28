import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-B63DCUEl.js";import{r as m}from"./chunk-JZWAC4HX-BREgkaAt.js";import{F as a,s as r}from"./FlexWrapper-gFV3c5zV.js";import{L as y}from"./Lock-Dh-eFXjW.js";import{L as T}from"./LoadingCircle-DX0-z_2g.js";import{C as x}from"./CustomTimeTableGrid-DPqdouzN.js";import{u as p,I as w}from"./useIsDevice-2kDlb_gS.js";import{T as d}from"./Typography-D8a311SL.js";import{m as I}from"./media-Dcvj06ah.js";import{a as F}from"./handleLoginLogout-C27kYETe.js";import{u as L}from"./useUserStore-hkSUTEEp.js";import{W as E}from"./Widget-BaV6AE4G.js";import{T as v}from"./Trans-DP-pBbXQ.js";import"./IconButton-BJTV9NWR.js";import"./index-D2OnXaIH.js";import"./proxy-Bcr9qH_Y.js";import"./useTranslation-Dbe8GH8P.js";import"./index-DZK42HbV.js";import"./env-Cr1DLbCA.js";import"./queryPersister-CODJ4iVf.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"59c782ab8c3ecab6750e8ed9729dca97753913d9"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b910418c-e0b3-4acd-bcd5-dcb0d44b52d3",e._sentryDebugIdIdentifier="sentry-dbid-b910418c-e0b3-4acd-bcd5-dcb0d44b52d3")}catch{}})();const B=r(E)`
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
`,Z=()=>{const e=h(),{user:s,status:o}=L(),u=m.useRef(null),{query:g,setParams:l}=p("GET","/timetables/my-timetable",{enabled:o==="success"}),{query:i}=p("GET","/semesters");m.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const n=i.data.semesters[i.data.semesters.length-1];if(!n)return;l({year:n.year,semester:n.semester})}},[i.data,l]);const f=g.data?.lectures??[];return t(B,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:o==="loading"?t(T,{}):c(W,{direction:"column",align:"stretch",gap:16,ref:u,children:[o==="idle"?c(S,{direction:"column",gap:12,align:"center",children:[t(D,{children:t(w,{size:30,color:e.colors.Highlight.default,children:t(y,{})})}),t(_,{onClick:F,children:t(d,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(a,{direction:"row",gap:0,children:t(v,{i18nKey:"main.hisTimeTable",values:{name:s?.name},components:{name:t(d,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(d,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(b,{children:" "})}})}),t(k,{blur:o==="idle",direction:"column",gap:0,align:"stretch",children:t(x,{lectures:f,needLectureDeletable:!1,needTimeFilter:!1,needLectureInteraction:!1})})]})})};export{Z as default};
//# sourceMappingURL=index-fbo19CaN.js.map
