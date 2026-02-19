import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-DFzYZ-QR.js";import{r as m}from"./chunk-EPOLDU6W-C26KWm57.js";import{F as n,n as r}from"./FlexWrapper-BvLMhTg9.js";import{L as y}from"./Lock-B2DewYW7.js";import{L as T}from"./LoadingCircle-Ci7WXGf1.js";import{C as x}from"./CustomTimeTableGrid-DvkTsbE3.js";import{u as p,I as w}from"./useIsDevice-bKrxsj5W.js";import{T as l}from"./Typography-BoGuhcU2.js";import{m as I}from"./media-7lMfdZUr.js";import{a as F}from"./handleLoginLogout-BkLIcDpL.js";import{u as L}from"./useUserStore-BFu1XcNS.js";import{W as E}from"./Widget-BibV2LVQ.js";import{T as v}from"./Trans-CZ6iq59b.js";import"./IconButton-Co2Kh2HT.js";import"./proxy-BZ1tWSZR.js";import"./useTranslation-C1XzXuIC.js";import"./index-DJcL_Y3p.js";import"./env-DalZXXGr.js";import"./queryPersister-BkIeYNK0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"9d9be90128047a9adae01cbf529ac6e8d6d01bc1"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="958e6a2b-bef7-4789-abd2-3c99012a7aac",e._sentryDebugIdIdentifier="sentry-dbid-958e6a2b-bef7-4789-abd2-3c99012a7aac")})()}catch{}const B=r(E)`
    width: 856px;
    height: 1000px;

    ${I.laptop} {
        width: 100%;
    }
`,S=r(n)`
    flex-grow: 1;
    width: 100%;
`,W=r(n)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,k=r(n)`
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
`,X=()=>{const e=h(),{user:o,status:a}=L(),f=m.useRef(null),{query:u,setParams:d}=p("GET","/timetables/my-timetable",{enabled:a==="success"}),{query:i}=p("GET","/semesters");m.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const s=i.data.semesters[i.data.semesters.length-1];if(!s)return;d({year:s.year,semester:s.semester})}},[i.data,d]);const g=u.data?.lectures??[];return t(B,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:a==="loading"?t(T,{}):c(S,{direction:"column",align:"stretch",gap:16,ref:f,children:[a==="idle"?c(k,{direction:"column",gap:12,align:"center",children:[t(D,{children:t(w,{size:30,color:e.colors.Highlight.default,children:t(y,{})})}),t(_,{onClick:F,children:t(l,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(n,{direction:"row",gap:0,children:t(v,{i18nKey:"main.hisTimeTable",values:{name:o?.name},components:{name:t(l,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(l,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(b,{children:" "})}})}),t(W,{blur:a==="idle",direction:"column",gap:0,align:"stretch",children:t(x,{lectures:g,needLectureDeletable:!1,needTimeFilter:!1,needLectureInteraction:!1})})]})})};export{X as default};
//# sourceMappingURL=index-C44SzNFd.js.map
