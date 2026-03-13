import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-DGIfoTEP.js";import{r as m}from"./chunk-JZWAC4HX-DSr-sPmC.js";import{F as a,s as r}from"./FlexWrapper-CdxoGRQv.js";import{L as y}from"./Lock-BoLobydr.js";import{L as T}from"./LoadingCircle-Dp13Cd1w.js";import{C as x}from"./CustomTimeTableGrid-CkfAL45U.js";import{u as p,I as w}from"./useIsDevice-cl6nA3X4.js";import{T as l}from"./Typography-hf_Y95Q-.js";import{m as I}from"./media-CUZEs29A.js";import{a as F}from"./handleLoginLogout-CUv0BdoK.js";import{u as L}from"./useUserStore-C_zTL2Ev.js";import{W as E}from"./Widget-CIiQ_Lcs.js";import{T as v}from"./Trans-9msL5XOg.js";import"./IconButton-C8nb4uUh.js";import"./proxy-C9OFrBp2.js";import"./useTranslation-B0YigoBs.js";import"./index-BhcHF4aC.js";import"./env-CzXILdbi.js";import"./queryPersister-BCPBEk5V.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"8a807888b269277614da5f4132c16623ed44ae99"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="6c390228-96dd-446d-aba1-6a4421752522",e._sentryDebugIdIdentifier="sentry-dbid-6c390228-96dd-446d-aba1-6a4421752522")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-wTpoXBxc.js.map
