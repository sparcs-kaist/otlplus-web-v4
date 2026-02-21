import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-rP8Do7Xr.js";import{r as m}from"./chunk-JZWAC4HX-D5pW5Urw.js";import{F as a,s as r}from"./FlexWrapper-dR-ykTWh.js";import{L as y}from"./Lock-BLV2c_2m.js";import{L as T}from"./LoadingCircle-vn53Dr2e.js";import{C as x}from"./CustomTimeTableGrid-Dk6_zs6Q.js";import{u as p,I as w}from"./useIsDevice-CFDYUrrv.js";import{T as l}from"./Typography-CmcBysRR.js";import{m as I}from"./media-DJHdVD_n.js";import{handleLogin as F}from"./handleLoginLogout-DKl43Xh8.js";import{u as L}from"./useUserStore-CdKQUB9f.js";import{W as E}from"./Widget-BBZJb4QJ.js";import{T as v}from"./Trans-BqsiXFdL.js";import"./IconButton-CHzzXIAk.js";import"./index-lFLBoTpi.js";import"./proxy-BP33d0k6.js";import"./useTranslation-ByIBDwJM.js";import"./index-BNuamEw-.js";import"./env-Be8CjikB.js";import"./queryPersister-B8iV_Px3.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"94067a0fc0a6c1bf8f0caf11d921e9533361d16f"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="82cd35e9-febf-4b15-b8fd-5e344374c7ba",e._sentryDebugIdIdentifier="sentry-dbid-82cd35e9-febf-4b15-b8fd-5e344374c7ba")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-czRoBwuX.js.map
