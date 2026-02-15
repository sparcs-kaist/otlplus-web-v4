import{a as g,j as t,u as S,F as $}from"./emotion-react-jsx-runtime.browser.esm-COBF2Dqe.js";import{R as A,r as n}from"./chunk-EPOLDU6W-DwUNnp0U.js";import{F as h,n as r}from"./FlexWrapper-DZKJEIiT.js";import{L as B}from"./Lock-CBLfmoPp.js";import{L as C}from"./LoadingCircle-DG2yIqNr.js";import{u as L,I as H}from"./useIsDevice-CGRKARx7.js";import{T as v}from"./Typography-BtY4k0h0.js";import{m as W}from"./media-DODiAPJ1.js";import{a as _}from"./handleLoginLogout-QUOQPjNS.js";import{u as z}from"./useUserStore-DJK6grkS.js";import{W as G}from"./Widget-DUaEogbu.js";import{c as D,r as M,a as j,b as P}from"./renderTargetArea-D6enH61T.js";import{u as q}from"./useTranslation-BjAvDHh6.js";import{T as O}from"./Trans-BFepGSZU.js";import"./index-uuoEkwtg.js";import"./env-8MkxPCpW.js";import"./queryPersister-Dt_YjOHR.js";import"./proxy-D8ZLLwKl.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"4aa08ee94c808d2da2e9c2f7c437deebb8c9aa16"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="d0adb996-93ac-4923-94c8-2bf04e1e4c8f",e._sentryDebugIdIdentifier="sentry-dbid-d0adb996-93ac-4923-94c8-2bf04e1e4c8f")})()}catch{}const U=926.5,K=32,N=r.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,V=r.div`
    padding-top: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    gap: calc(var(--cell-height) * 2 - 11px);
    font-size: 8px;
    line-height: 11px;
    color: ${({theme:e})=>e.colors.Text.default};
`,Y=r.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,J=r.div`
    display: inline-block;
    position: relative;
    user-select: none;
`,Q=({cellWidth:e=120,lectureSummary:i,hover:l,setHover:c,selected:y,setSelected:m})=>{const{t:p}=q(),s=5,u=5,b=8,T=n.useRef(null),x=[p("common.days.monday"),p("common.days.tuesday"),p("common.days.wednesday"),p("common.days.thursday"),p("common.days.friday")];D(i);const a=32,w=24,o=U/K,E=n.useMemo(()=>({"--cell-height":`${o}px`,"--cell-width":`${e}px`,"--col-padding":`${s}px`}),[o,e,s]),[I]=n.useState(new Map(Array.from({length:u},(d,f)=>[f,Array(a).fill(null)]))),k=n.useMemo(()=>M(a,u,e,o,s,[],10,0),[a,u,e,o,s]),F=n.useMemo(()=>j(i,e,o,s,y,m,l,c,!1,void 0,!0),[i,e,o,s,y,m,l,c]),R=n.useCallback(()=>{m(null)},[m]);return g(N,{style:E,children:[t(V,{children:Array.from({length:w-b+1},(d,f)=>f+b).map(d=>t("div",{children:d%12||12},d))}),g(h,{direction:"column",gap:0,children:[t(h,{direction:"row",gap:5,children:x.map((d,f)=>d!=="none"&&t(Y,{style:d===""?{width:"10px"}:void 0,children:d},f))}),g(J,{ref:T,onClick:R,children:[k,P(!0,I,"rgba(229, 76, 101, 0.5)",o,e,2,s,[],0,0),F]})]})]})},X=A.memo(Q),Z=r(G)`
    width: 856px;

    ${W.laptop} {
        width: 100%;
    }
`,ee=r(h)`
    flex-grow: 1;
    width: 100%;
`,te=r.div`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
`,oe=r(h)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,ne=r.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,re=r.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,Le=()=>{const e=S(),{user:i,status:l}=z(),c=n.useRef(null),[y,m]=n.useState(0),[p,s]=n.useState(null),[u,b]=n.useState(null),{query:T,setParams:x}=L("GET","/timetables/my-timetable",{enabled:l==="success"}),{query:a}=L("GET","/semesters");n.useEffect(()=>{if(a.data&&a.data.semesters.length>0){const o=a.data.semesters[a.data.semesters.length-1];if(!o)return;x({year:o.year,semester:o.semester})}},[a.data,x]),n.useEffect(()=>{const o=()=>{c.current&&m(c.current.clientWidth)};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o)}},[c,l]);const w=T.data?.lectures??[];return t(Z,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:l==="loading"?t(C,{}):g(ee,{direction:"column",align:"stretch",gap:16,ref:c,children:[l==="idle"?g(oe,{direction:"column",gap:12,align:"center",children:[t(ne,{children:t(H,{size:30,color:e.colors.Highlight.default,children:t(B,{})})}),t(re,{onClick:_,children:t(v,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(h,{direction:"row",gap:0,children:t(O,{i18nKey:"main.hisTimeTable",values:{name:i?.name},components:{name:t(v,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(v,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t($,{children:" "})}})}),t(te,{blur:l==="idle",children:t(X,{cellWidth:(y-30)/5,lectureSummary:w,hover:u,setHover:b,selected:p,setSelected:s})})]})})};export{Le as default};
//# sourceMappingURL=index-BC5nJrIw.js.map
