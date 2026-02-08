import{a as g,j as t,u as S,F as $}from"./emotion-react-jsx-runtime.browser.esm-at1wMvBd.js";import{R as A,r as n}from"./chunk-EPOLDU6W-VFbKFRye.js";import{F as h,n as r}from"./FlexWrapper-DF6UUMyO.js";import{L as B}from"./Lock-BHo0FqZn.js";import{L as C}from"./LoadingCircle-BzjkQRUr.js";import{u as L,I as H}from"./useIsDevice-CTe1hv-W.js";import{T as v}from"./Typography-CnYUz990.js";import{m as W}from"./media-hv3Y5vy2.js";import{handleLogin as _}from"./handleLoginLogout-C0mcV2o1.js";import{u as z}from"./useUserStore-eo_-AygZ.js";import{W as G}from"./Widget-C1M_op5B.js";import{c as D,r as M,a as j,b as P}from"./renderTargetArea-C-KpAA6r.js";import{u as q}from"./useTranslation-C6VL_YWP.js";import{T as O}from"./Trans-61HI72By.js";import"./index-ORq7mrhy.js";import"./env-C2AXqthL.js";import"./queryPersister-CAm3vE2D.js";import"./proxy-CcBc6CpT.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"e772e42fb884170cc1e5fb043ab3fca8a86ac0ed"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="12e86f09-3314-4561-8948-ec8bb5874bf0",e._sentryDebugIdIdentifier="sentry-dbid-12e86f09-3314-4561-8948-ec8bb5874bf0")})()}catch{}const U=926.5,K=32,N=r.div`
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
//# sourceMappingURL=index-DS3kgy2H.js.map
