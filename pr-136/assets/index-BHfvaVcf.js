import{u as h,j as t,a as c,F as b}from"./emotion-react-jsx-runtime.browser.esm-DyuFTOrN.js";import{r as m}from"./chunk-JZWAC4HX-DX4n3vr-.js";import{F as a,s as r}from"./FlexWrapper-BeuVXekM.js";import{L as y}from"./Lock-DEyO9jUO.js";import{L as T}from"./LoadingCircle-BC2S86id.js";import{C as x}from"./CustomTimeTableGrid-5JhZpIhU.js";import{u as p,I as w}from"./useIsDevice-DtXgTBGk.js";import{T as d}from"./Typography-C_z36uFf.js";import{m as I}from"./media-BdQB_M4k.js";import{a as F}from"./handleLoginLogout-D8hni09v.js";import{u as L}from"./useUserStore-BtDeulXb.js";import{W as E}from"./Widget-CJfS5U5g.js";import{T as v}from"./Trans-Z_o-JZjd.js";import"./IconButton-DBkaQncP.js";import"./index-DLOyg7me.js";import"./proxy-CoH-ODHy.js";import"./useTranslation-Ev6IL87T.js";import"./index-DZs3jpVN.js";import"./env-buTWDOuN.js";import"./queryPersister-CQrz4k2s.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"1d432c4d142ce95ce6d31bc2c2d720309c7c668a"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="b910418c-e0b3-4acd-bcd5-dcb0d44b52d3",e._sentryDebugIdIdentifier="sentry-dbid-b910418c-e0b3-4acd-bcd5-dcb0d44b52d3")}catch{}})();const B=r(E)`
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
//# sourceMappingURL=index-BHfvaVcf.js.map
