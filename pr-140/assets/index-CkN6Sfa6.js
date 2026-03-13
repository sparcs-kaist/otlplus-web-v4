import{u as B,j as t,a as u,F}from"./emotion-react-jsx-runtime.browser.esm-BRAcTSph.js";import{y as C,r}from"./chunk-JZWAC4HX-Buak0uuK.js";import{F as d,s as o}from"./FlexWrapper-B4Ub37Fc.js";import{L as k}from"./Lock-Co1Fxgec.js";import{L as _}from"./LoadingCircle-rlLPRAis.js";import{C as R}from"./CustomTimeTableGrid-DOYbGFxu.js";import{u as y,I as W}from"./useIsDevice-DSEhV95y.js";import{T as m}from"./Typography-BqMG8Ra7.js";import{m as A}from"./media-C1PYVlor.js";import{a as G}from"./handleLoginLogout-BPAET2WV.js";import{u as j}from"./useUserStore-BH2pawtE.js";import{W as z}from"./Widget-CFiTo3BV.js";import{T as N}from"./Trans-NC1j50Zk.js";import"./IconButton-BIFtv0-V.js";import"./proxy-gZvsBRRz.js";import"./useTranslation-B6rSUSSg.js";import"./index-D5siiDCk.js";import"./env-B_ZngAQM.js";import"./queryPersister-Bd5AIkPh.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"52280a70af57006a76d2b025265fa372515590ea"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="88bc3c71-89de-4ccb-a0eb-04c431f1de56",e._sentryDebugIdIdentifier="sentry-dbid-88bc3c71-89de-4ccb-a0eb-04c431f1de56")}catch{}})();const P=o(z)`
    width: 856px;
    height: 1000px;

    ${A.laptop} {
        width: 100%;
    }
`,q=o(d)`
    flex-grow: 1;
    width: 100%;
`,M=o(d)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,U=o(d)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,Y=o.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,K=o.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,O=o.div`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`,T=8,J=24,I=20,Q=.8,V=o.div`
    position: absolute;
    top: calc(
        ${I}px + (100% - ${I*(2-Q)}px) *
            ${({ratio:e})=>e}
    );
    left: calc(
        (100% - 30px) / 5 * ${({dayIndex:e})=>e} + 15px +
            ${({dayIndex:e})=>e*3}px
    );
    width: calc((100% - 30px) / 5 + 3px);
    height: 2px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    z-index: 10;
    pointer-events: none;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,xe=()=>{const e=C(),a=B(),{user:f,status:c}=j(),[n,E]=r.useState(null),[g,h]=r.useState(null),[w,v]=r.useState(-1),{query:L,setParams:b}=y("GET","/timetables/my-timetable",{enabled:c==="success"}),{query:l}=y("GET","/semesters/current"),i=r.useCallback(()=>{const x=new Date().getDay()-1;v(2);const D=15+50/60;if(x<0||x>4){h(null);return}const H=J-T,$=(D-T)/H;h($)},[]);r.useEffect(()=>{i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[i]),r.useEffect(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[i]),r.useEffect(()=>{if(n){const s=new URLSearchParams;if(n.courseId&&s.append("courseId",n.courseId.toString()),n.professors){const p=n.professors[0];p&&s.append("professorId",p.id.toString())}e(`/dictionary?${s.toString()}`)}},[n]),r.useEffect(()=>{l.data&&b({year:l.data.year,semester:l.data.semester})},[l.data,b]);const S=L.data?.lectures??[];return t(P,{direction:"column",gap:0,padding:"30px 23px",flex:"1 1 auto",children:c==="loading"?t(_,{}):u(q,{direction:"column",align:"stretch",gap:16,children:[c==="idle"?u(U,{direction:"column",gap:12,align:"center",children:[t(Y,{children:t(W,{size:30,color:a.colors.Highlight.default,children:t(k,{})})}),t(K,{onClick:G,children:t(m,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(d,{direction:"row",gap:0,children:t(N,{i18nKey:"main.hisTimeTable",values:{name:f?.name},components:{name:t(m,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(m,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(F,{children:" "})}})}),t(M,{blur:c==="idle",direction:"column",gap:0,align:"stretch",children:u(O,{children:[t(R,{lectures:S,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:E}),g!==null&&t(V,{ratio:g,dayIndex:w})]})})]})})};export{xe as default};
//# sourceMappingURL=index-CkN6Sfa6.js.map
