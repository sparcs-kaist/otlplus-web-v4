import{u as F,j as t,a as m,F as C}from"./emotion-react-jsx-runtime.browser.esm-BsafsIzL.js";import{y as k,r as o}from"./chunk-JZWAC4HX-vHqqVR0r.js";import{F as d,s as n}from"./FlexWrapper-sPmmvyxq.js";import{L as _}from"./Lock-BaV3krMG.js";import{L as R}from"./LoadingCircle-zw28tDjS.js";import{C as W}from"./CustomTimeTableGrid-BQXScCGD.js";import{u as I,I as A}from"./useIsDevice-BGnDsAVZ.js";import{T as g}from"./Typography-DYo2gcZa.js";import{m as G}from"./media-DGSIFhgf.js";import{a as j}from"./handleLoginLogout-Coy1UUqD.js";import{u as z}from"./useUserStore-Dv1_pKSL.js";import{W as N}from"./Widget-l-YGNFpm.js";import{T as P}from"./Trans-B6nbCsjy.js";import"./IconButton-CiS2IIzt.js";import"./proxy-uI7Z_hmm.js";import"./useTranslation-DTElfOKU.js";import"./index-Cx45iIvG.js";import"./env-BtRP4mkW.js";import"./queryPersister-C067Wvgk.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"a6bae7ce0e5c60302cda54cca3410bc6af68a091"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="f474ee61-bf8e-4bd2-8592-f7620168b14a",e._sentryDebugIdIdentifier="sentry-dbid-f474ee61-bf8e-4bd2-8592-f7620168b14a")}catch{}})();const M=n(N)`
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
`,h=8,w=24,E=20,Q=.8,V=n.div`
    position: absolute;
    top: calc(
        ${E}px + (100% - ${E*(2-Q)}px) *
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
`,xe=()=>{const e=k(),a=F(),{user:b,status:l}=z(),[s,v]=o.useState(null),[x,y]=o.useState(null),[L,H]=o.useState(-1),{query:S,setParams:T}=I("GET","/timetables/330647",{enabled:l==="success"}),{query:c}=I("GET","/semesters/current"),i=o.useCallback(()=>{const r=new Date,p=r.getDay()-1;H(p);const f=r.getHours()+r.getMinutes()/60;if(f<h||f>w||p<0||p>4){y(null);return}const $=w-h,B=(f-h)/$;y(B)},[]);o.useEffect(()=>{i();const r=setInterval(i,60*1e3);return()=>clearInterval(r)},[i]),o.useEffect(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[i]),o.useEffect(()=>{if(s){const r=new URLSearchParams;if(s.courseId&&r.append("courseId",s.courseId.toString()),s.professors){const u=s.professors[0];u&&r.append("professorId",u.id.toString())}e(`/dictionary?${r.toString()}`)}},[s]),o.useEffect(()=>{c.data&&T({year:c.data.year,semester:c.data.semester})},[c.data,T]);const D=S.data?.lectures??[];return t(M,{direction:"column",gap:0,padding:"30px 23px",flex:"1 1 auto",children:l==="loading"?t(R,{}):m(q,{direction:"column",align:"stretch",gap:16,style:{overflow:"hidden"},children:[l==="idle"?m(Y,{direction:"column",gap:12,align:"center",children:[t(K,{children:t(A,{size:30,color:a.colors.Highlight.default,children:t(_,{})})}),t(O,{onClick:j,children:t(g,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(d,{direction:"row",gap:0,children:t(P,{i18nKey:"main.hisTimeTable",values:{name:b?.name},components:{name:t(g,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(g,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(C,{children:" "})}})}),t(U,{blur:l==="idle",direction:"column",gap:0,align:"stretch",style:{overflow:"hidden"},children:m(J,{children:[t(W,{lectures:D,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:v}),x!==null&&t(V,{ratio:x,dayIndex:L})]})})]})})};export{xe as default};
//# sourceMappingURL=index-DymVL-Dd.js.map
