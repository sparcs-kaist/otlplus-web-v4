import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-DrnRUQhM.js";import{r as m}from"./chunk-EPOLDU6W-ClCGQPMW.js";import{F as n,n as r}from"./FlexWrapper-CO5qvj9s.js";import{L as y}from"./Lock-Bvr3vt30.js";import{L as T}from"./LoadingCircle-Dnm3HTXK.js";import{C as x}from"./CustomTimeTableGrid-BMe0foFb.js";import{u as p,I as w}from"./useIsDevice-DfVGJ9tk.js";import{T as l}from"./Typography-CWTqiJYY.js";import{m as I}from"./media-2rVNmShD.js";import{a as F}from"./handleLoginLogout-Bg518YCK.js";import{u as L}from"./useUserStore-BMyyB2jE.js";import{W as E}from"./Widget-BRvKls99.js";import{T as v}from"./Trans-BeTKaYu4.js";import"./IconButton-HdXU32u4.js";import"./proxy-COLc4kxo.js";import"./useTranslation-v7xDLiGF.js";import"./index-DtIqGYLK.js";import"./env-C7gc5HZj.js";import"./queryPersister-Bpr2jPkZ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"b404666103af703695fac682c2aac3d5429a0c9f"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="958e6a2b-bef7-4789-abd2-3c99012a7aac",e._sentryDebugIdIdentifier="sentry-dbid-958e6a2b-bef7-4789-abd2-3c99012a7aac")})()}catch{}const B=r(E)`
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
//# sourceMappingURL=index-D_ZPRR8R.js.map
