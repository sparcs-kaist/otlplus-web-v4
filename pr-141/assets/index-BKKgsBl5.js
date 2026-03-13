import{u as T,j as e,a as u,F as x}from"./emotion-react-jsx-runtime.browser.esm-BTCHNBTt.js";import{y as w,r as l}from"./chunk-JZWAC4HX-D2g68eSL.js";import{F as n,s as t}from"./FlexWrapper-de10CW_g.js";import{L as v}from"./Lock-D5UYqO_s.js";import{L as I}from"./LoadingCircle-Bc2CHh05.js";import{C as L}from"./CustomTimeTableGrid-j5gswI6q.js";import{u as g,I as S}from"./useIsDevice-X96PxGVC.js";import{T as c}from"./Typography-7-hHi0Kb.js";import{m as F}from"./media-BxToYHky.js";import{a as E}from"./handleLoginLogout-4TEPYke_.js";import{u as B}from"./useUserStore-LhTtI3_l.js";import{W}from"./Widget-JkzI6xnQ.js";import{T as k}from"./Trans-XAfZ5U8W.js";import"./IconButton-BEjMJGJB.js";import"./proxy-BJDfSW1j.js";import"./useTranslation-3rc51hF1.js";import"./index-CQekAdj4.js";import"./env-CQVuRScT.js";import"./queryPersister-CKfyR2sT.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};r.SENTRY_RELEASE={id:"b7a971ce7a0489e6fcd56f104f17031d29114ea0"};var i=new r.Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="ff6cbe8c-5ab4-4b12-81e8-f63ea85d3eae",r._sentryDebugIdIdentifier="sentry-dbid-ff6cbe8c-5ab4-4b12-81e8-f63ea85d3eae")}catch{}})();const C=t(W)`
    width: 856px;
    height: 1000px;

    ${F.laptop} {
        width: 100%;
    }
`,D=t(n)`
    flex-grow: 1;
    width: 100%;
`,P=t(n)`
    filter: ${r=>r.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,_=t(n)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,$=t.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:r})=>r.colors.Highlight.default};
    padding: 8px;
`,G=t.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:r})=>r.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,H=t.div`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`,oe=()=>{const r=w(),i=T(),{user:p,status:s}=B(),[o,h]=l.useState(null),{query:b,setParams:m}=g("GET","/timetables/330649",{enabled:s==="success"}),{query:a}=g("GET","/semesters/current");l.useEffect(()=>{if(o){const d=new URLSearchParams;if(o.courseId&&d.append("courseId",o.courseId.toString()),o.professors){const f=o.professors[0];f&&d.append("professorId",f.id.toString())}r(`/dictionary?${d.toString()}`)}},[o]),l.useEffect(()=>{a.data&&m({year:a.data.year,semester:a.data.semester})},[a.data,m]);const y=b.data?.lectures??[];return e(C,{direction:"column",gap:0,padding:"30px 23px",flex:"1 1 auto",children:s==="loading"?e(I,{}):u(D,{direction:"column",align:"stretch",gap:16,style:{overflow:"hidden"},children:[s==="idle"?u(_,{direction:"column",gap:12,align:"center",children:[e($,{children:e(S,{size:30,color:i.colors.Highlight.default,children:e(v,{})})}),e(G,{onClick:E,children:e(c,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):e(n,{direction:"row",gap:0,children:e(k,{i18nKey:"main.hisTimeTable",values:{name:p?.name},components:{name:e(c,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:e(c,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:e(x,{children:" "})}})}),e(P,{blur:s==="idle",direction:"column",gap:0,align:"stretch",style:{overflow:"hidden"},children:e(H,{style:{overflow:"hidden"},children:e(L,{lectures:y,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:h,needCurrentTimeBar:!0})})})]})})};export{oe as default};
//# sourceMappingURL=index-BKKgsBl5.js.map
