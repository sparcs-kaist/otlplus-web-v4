import{u as x,j as t,a as u,F as I}from"./emotion-react-jsx-runtime.browser.esm-OfguWW8f.js";import{y as L,r as l}from"./chunk-JZWAC4HX-Cwcn69zR.js";import{F as d,s}from"./FlexWrapper-Binydk8A.js";import{L as w}from"./Lock-pqX-tgqB.js";import{L as S}from"./LoadingCircle-vdVLGuqC.js";import{C as F}from"./CustomTimeTableGrid-CxwWDkk-.js";import{u as g,I as v}from"./useIsDevice-DGI4p1G3.js";import{T as c}from"./Typography-nQi-Xn5g.js";import{m as E}from"./media-DYhhvXr7.js";import{a as B}from"./handleLoginLogout-C7Ylf879.js";import{u as W}from"./useUserStore-aIcyCJDj.js";import{W as k}from"./Widget-CaoxsjW7.js";import{T as D}from"./Trans-DFIddSVj.js";import"./IconButton-BcEED8_V.js";import"./proxy-ClTBtNoS.js";import"./useTranslation-CmqqtmpY.js";import"./index-uJEnJcLn.js";import"./env-DZ6a3khu.js";import"./queryPersister-BXy3pMOx.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"7a5c8201fd235ecc0bf060e36fef97c711d1c2da"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="3a1a31f0-a7c4-45e6-88e4-43ae6521f4f2",e._sentryDebugIdIdentifier="sentry-dbid-3a1a31f0-a7c4-45e6-88e4-43ae6521f4f2")}catch{}})();const P=s(k)`
    width: 856px;
    height: 1000px;

    ${E.laptop} {
        width: 100%;
    }
`,R=s(d)`
    flex-grow: 1;
    width: 100%;
`,_=s(d)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,$=s(d)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,C=s.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,H=s.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,oe=()=>{const e=L(),a=x(),{user:p,status:n}=W(),[o,h]=l.useState(null),y=l.useRef(null),{query:b,setParams:m}=g("GET","/timetables/my-timetable",{enabled:n==="success"}),{query:i}=g("GET","/semesters");l.useEffect(()=>{if(o){const r=new URLSearchParams;if(o.courseId&&r.append("courseId",o.courseId.toString()),o.professors){const f=o.professors[0];f&&r.append("professorId",f.id.toString())}e(`/dictionary?${r.toString()}`)}},[o]),l.useEffect(()=>{if(i.data&&i.data.semesters.length>0){const r=i.data.semesters[i.data.semesters.length-1];if(!r)return;m({year:r.year,semester:r.semester})}},[i.data,m]);const T=b.data?.lectures??[];return t(P,{direction:"column",gap:0,padding:"30px 23px",flex:"1 1 auto",children:n==="loading"?t(S,{}):u(R,{direction:"column",align:"stretch",gap:16,ref:y,children:[n==="idle"?u($,{direction:"column",gap:12,align:"center",children:[t(C,{children:t(v,{size:30,color:a.colors.Highlight.default,children:t(w,{})})}),t(H,{onClick:B,children:t(c,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(d,{direction:"row",gap:0,children:t(D,{i18nKey:"main.hisTimeTable",values:{name:p?.name},components:{name:t(c,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(c,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(I,{children:" "})}})}),t(_,{blur:n==="idle",direction:"column",gap:0,align:"stretch",children:t(F,{lectures:T,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:h})})]})})};export{oe as default};
//# sourceMappingURL=index-DBzTy9qN.js.map
