import{u as T,j as e,a as f,F as x}from"./emotion-react-jsx-runtime.browser.esm-CsETgYDA.js";import{y as w,r as l}from"./chunk-JZWAC4HX-BhbM5C76.js";import{F as n,s as t}from"./FlexWrapper-CkAYkvrm.js";import{L as v}from"./Lock-7txfjDAP.js";import{L as I}from"./LoadingCircle-BYp4dwxM.js";import{C as L}from"./CustomTimeTableGrid-BpuWsSev.js";import{u as g,I as S}from"./useIsDevice-DvciEh0v.js";import{T as c}from"./Typography-Btz9MgaE.js";import{m as F}from"./media-eYEtlCW3.js";import{a as E}from"./handleLoginLogout-pij6fWQ3.js";import{u as B}from"./useUserStore-D3Ij3q1X.js";import{W}from"./Widget-CEPYjiZY.js";import{T as k}from"./Trans-BmcpOLJy.js";import"./IconButton-LSfjwfu9.js";import"./proxy-wQ2UlXzy.js";import"./useTranslation-BCHp_mok.js";import"./index-B1hLH9eO.js";import"./env-Dmp2t6cX.js";import"./queryPersister-CsXwOf7m.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};r.SENTRY_RELEASE={id:"50028f4e6a00984e0505e566815bed964fcaa8c1"};var i=new r.Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="815397a5-9d4f-426e-8a18-265c97308036",r._sentryDebugIdIdentifier="sentry-dbid-815397a5-9d4f-426e-8a18-265c97308036")}catch{}})();const C=t(W)`
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
`,oe=()=>{const r=w(),i=T(),{user:p,status:s}=B(),[o,h]=l.useState(null),{query:y,setParams:m}=g("GET","/timetables/my-timetable",{enabled:s==="success"}),{query:a}=g("GET","/semesters/current");l.useEffect(()=>{if(o){const d=new URLSearchParams;if(o.courseId&&d.append("courseId",o.courseId.toString()),o.professors){const u=o.professors[0];u&&d.append("professorId",u.id.toString())}r(`/dictionary?${d.toString()}`)}},[o]),l.useEffect(()=>{a.data&&m({year:a.data.year,semester:a.data.semester})},[a.data,m]);const b=y.data?.lectures??[];return e(C,{direction:"column",gap:0,padding:"30px 23px",flex:"1 1 auto",children:s==="loading"?e(I,{}):f(D,{direction:"column",align:"stretch",gap:16,style:{overflow:"hidden"},children:[s==="idle"?f(_,{direction:"column",gap:12,align:"center",children:[e($,{children:e(S,{size:30,color:i.colors.Highlight.default,children:e(v,{})})}),e(G,{onClick:E,children:e(c,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):e(n,{direction:"row",gap:0,children:e(k,{i18nKey:"main.hisTimeTable",values:{name:p?.name},components:{name:e(c,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:e(c,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:e(x,{children:" "})}})}),e(P,{blur:s==="idle",direction:"column",gap:0,align:"stretch",style:{overflow:"hidden"},children:e(H,{style:{overflow:"hidden"},children:e(L,{lectures:b,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:h,needCurrentTimeBar:!0})})})]})})};export{oe as default};
//# sourceMappingURL=index-6nfY1HcW.js.map
