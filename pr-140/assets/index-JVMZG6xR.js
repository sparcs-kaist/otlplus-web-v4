import{u as F,j as t,a as f,F as C}from"./emotion-react-jsx-runtime.browser.esm-B04tSmZ7.js";import{y as k,r as o}from"./chunk-JZWAC4HX-BG8b0CgS.js";import{F as d,s as n}from"./FlexWrapper-DdOQMFAO.js";import{L as _}from"./Lock-BH6mHEWp.js";import{L as R}from"./LoadingCircle-C-xJlxqc.js";import{C as W}from"./CustomTimeTableGrid-BZ719jWw.js";import{u as I,I as A}from"./useIsDevice-PH5cw9f-.js";import{T as g}from"./Typography-C2O-X8DL.js";import{m as G}from"./media-Clfxqw6k.js";import{a as j}from"./handleLoginLogout-DB2uWnO2.js";import{u as z}from"./useUserStore-CW4HmxUQ.js";import{W as N}from"./Widget-CMI0K9OB.js";import{T as P}from"./Trans-HOINIMnq.js";import"./IconButton-D9U0SeVb.js";import"./proxy-Cv6GmYMv.js";import"./useTranslation-Cxj5fgri.js";import"./index-DOIKn21l.js";import"./env-26nuatcE.js";import"./queryPersister-h1dplI5b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"5e4333e7b1520939dcf8bab470e0cf9798e35236"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="5cc8ec96-2ed2-4418-980a-9251452adf3d",e._sentryDebugIdIdentifier="sentry-dbid-5cc8ec96-2ed2-4418-980a-9251452adf3d")}catch{}})();const M=n(N)`
    width: 856px;
    height: 1000px;

    ${G.laptop} {
        width: 100%;
    }
`,q=n(d)`
    flex-grow: 1;
    width: 100%;
`,U=n(d)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,Y=n(d)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,K=n.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,O=n.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,J=n.div`
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`,h=8,E=24,w=20,Q=.8,V=n.div`
    position: absolute;
    top: calc(
        ${w}px + (100% - ${w*(2-Q)}px) *
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
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,be=()=>{const e=k(),a=F(),{user:x,status:l}=z(),[i,v]=o.useState(null),[b,y]=o.useState(null),[L,H]=o.useState(-1),{query:S,setParams:T}=I("GET","/timetables/my-timetable",{enabled:l==="success"}),{query:c}=I("GET","/semesters/current"),s=o.useCallback(()=>{const r=new Date,p=r.getDay()-1;H(p);const m=r.getHours()+r.getMinutes()/60;if(m<h||m>E||p<0||p>4){y(null);return}const $=E-h,B=(m-h)/$;y(B)},[]);o.useEffect(()=>{s();const r=setInterval(s,60*1e3);return()=>clearInterval(r)},[s]),o.useEffect(()=>(window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[s]),o.useEffect(()=>{if(i){const r=new URLSearchParams;if(i.courseId&&r.append("courseId",i.courseId.toString()),i.professors){const u=i.professors[0];u&&r.append("professorId",u.id.toString())}e(`/dictionary?${r.toString()}`)}},[i]),o.useEffect(()=>{c.data&&T({year:c.data.year,semester:c.data.semester})},[c.data,T]);const D=S.data?.lectures??[];return t(M,{direction:"column",gap:0,padding:"30px 23px",flex:"1 1 auto",children:l==="loading"?t(R,{}):f(q,{direction:"column",align:"stretch",gap:16,children:[l==="idle"?f(Y,{direction:"column",gap:12,align:"center",children:[t(K,{children:t(A,{size:30,color:a.colors.Highlight.default,children:t(_,{})})}),t(O,{onClick:j,children:t(g,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(d,{direction:"row",gap:0,children:t(P,{i18nKey:"main.hisTimeTable",values:{name:x?.name},components:{name:t(g,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(g,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(C,{children:" "})}})}),t(U,{blur:l==="idle",direction:"column",gap:0,align:"stretch",children:f(J,{children:[t(W,{lectures:D,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:v}),b!==null&&t(V,{ratio:b,dayIndex:L})]})})]})})};export{be as default};
//# sourceMappingURL=index-JVMZG6xR.js.map
