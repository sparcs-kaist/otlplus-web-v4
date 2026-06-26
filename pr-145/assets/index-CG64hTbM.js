import{u as T,j as e,a as f,F as x}from"./emotion-react-jsx-runtime.browser.esm-B9MPMD5K.js";import{y as w,r as d}from"./chunk-JZWAC4HX-CkazKMFR.js";import{F as n,s as t}from"./FlexWrapper-CNjp5Jxw.js";import{L as v}from"./Lock-CZ2eQW7p.js";import{L as I}from"./LoadingCircle-Djfro0Yn.js";import{C as L}from"./CustomTimeTableGrid-LQmwH5rr.js";import{u as g,I as S}from"./useIsDevice-j_SRX_ek.js";import{T as c}from"./Typography-C2c-k_Qc.js";import{m as F}from"./media-BcmC2rES.js";import{a as E}from"./handleLoginLogout-BFpvubte.js";import{u as B}from"./useUserStore-CpA3AWuC.js";import{W}from"./Widget-BwejZvzQ.js";import{T as k}from"./Trans-CXzchKGQ.js";import"./IconButton-D8Xa42_b.js";import"./proxy-dUrVOeqT.js";import"./useTranslation-BnfMX_-T.js";import"./index-Cm4gB-Xn.js";import"./env-Au7JVeUF.js";import"./queryPersister-BHh5qiyD.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};r.SENTRY_RELEASE={id:"99f2e1219be82843958bec32a9f2b6b79afc96be"};var i=new r.Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="815397a5-9d4f-426e-8a18-265c97308036",r._sentryDebugIdIdentifier="sentry-dbid-815397a5-9d4f-426e-8a18-265c97308036")}catch{}})();const C=t(W)`
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
`,oe=()=>{const r=w(),i=T(),{user:p,status:s}=B(),[o,h]=d.useState(null),{query:b,setParams:m}=g("GET","/timetables/my-timetable",{enabled:s==="success"}),{query:a}=g("GET","/semesters/current");d.useEffect(()=>{if(o){const l=new URLSearchParams;if(o.courseId&&l.append("courseId",o.courseId.toString()),o.professors){const u=o.professors[0];u&&l.append("professorId",u.id.toString())}r(`/dictionary?${l.toString()}`)}},[o]),d.useEffect(()=>{a.data&&m({year:a.data.year,semester:a.data.semester})},[a.data,m]);const y=b.data?.lectures??[];return e(C,{direction:"column",gap:0,padding:"30px 23px",flex:"1 1 auto",children:s==="loading"?e(I,{}):f(D,{direction:"column",align:"stretch",gap:16,style:{overflow:"hidden"},children:[s==="idle"?f(_,{direction:"column",gap:12,align:"center",children:[e($,{children:e(S,{size:30,color:i.colors.Highlight.default,children:e(v,{})})}),e(G,{onClick:E,children:e(c,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):e(n,{direction:"row",gap:0,children:e(k,{i18nKey:"main.hisTimeTable",values:{name:p?.name},components:{name:e(c,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:e(c,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:e(x,{children:" "})}})}),e(P,{blur:s==="idle",direction:"column",gap:0,align:"stretch",style:{overflow:"hidden"},children:e(H,{style:{overflow:"hidden"},children:e(L,{lectures:y,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:h,needCurrentTimeBar:!0})})})]})})};export{oe as default};
//# sourceMappingURL=index-CG64hTbM.js.map
