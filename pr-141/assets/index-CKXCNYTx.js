import{u as B,j as t,a as u,F}from"./emotion-react-jsx-runtime.browser.esm-BHq_ahXg.js";import{y as C,r}from"./chunk-JZWAC4HX-CLeHbtfV.js";import{F as c,s as o}from"./FlexWrapper-BaRQ9_z5.js";import{L as k}from"./Lock-BBBpRlCK.js";import{L as _}from"./LoadingCircle-BTVAxPR0.js";import{C as R}from"./CustomTimeTableGrid-Dm7EnDka.js";import{u as b,I as W}from"./useIsDevice-CH8UuJaQ.js";import{T as f}from"./Typography-Cc3HTqZr.js";import{m as A}from"./media-CDT3hhFM.js";import{a as G}from"./handleLoginLogout-Dpfc0YEZ.js";import{u as j}from"./useUserStore-BBmeOOnh.js";import{W as z}from"./Widget-DuklSO3h.js";import{T as N}from"./Trans-NyxbdgPJ.js";import"./IconButton-BMUwbcrd.js";import"./proxy-FxSjA3yC.js";import"./useTranslation-C0_9qbUS.js";import"./index-CawYci2H.js";import"./env-DhyNnyJp.js";import"./queryPersister-OpBe6ELQ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"64a7705f3d8c179725f129fd34e40fa2dc97f053"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="c4d8560a-c51a-4c8e-9a39-7be90029aaf4",e._sentryDebugIdIdentifier="sentry-dbid-c4d8560a-c51a-4c8e-9a39-7be90029aaf4")}catch{}})();const P=o(z)`
    width: 856px;
    height: 1000px;

    ${A.laptop} {
        width: 100%;
    }
`,q=o(c)`
    flex-grow: 1;
    width: 100%;
`,M=o(c)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    pointer-events: none;
`,U=o(c)`
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
`,ye=()=>{const e=C(),a=B(),{user:m,status:l}=j(),[n,w]=r.useState(null),[g,h]=r.useState(null),[v,E]=r.useState(-1),{query:L,setParams:x}=b("GET","/timetables/330649",{enabled:l==="success"}),{query:d}=b("GET","/semesters/current"),i=r.useCallback(()=>{const y=new Date().getDay()-1;E(2);const D=15+50/60;if(y<0||y>4){h(null);return}const H=J-T,$=(D-T)/H;h($)},[]);r.useEffect(()=>{i();const s=setInterval(i,60*1e3);return()=>clearInterval(s)},[i]),r.useEffect(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[i]),r.useEffect(()=>{if(n){const s=new URLSearchParams;if(n.courseId&&s.append("courseId",n.courseId.toString()),n.professors){const p=n.professors[0];p&&s.append("professorId",p.id.toString())}e(`/dictionary?${s.toString()}`)}},[n]),r.useEffect(()=>{d.data&&x({year:d.data.year,semester:d.data.semester})},[d.data,x]);const S=L.data?.lectures??[];return t(P,{direction:"column",gap:0,padding:"30px 23px",flex:"1 1 auto",children:l==="loading"?t(_,{}):u(q,{direction:"column",align:"stretch",gap:16,style:{overflow:"hidden"},children:[l==="idle"?u(U,{direction:"column",gap:12,align:"center",children:[t(Y,{children:t(W,{size:30,color:a.colors.Highlight.default,children:t(k,{})})}),t(K,{onClick:G,children:t(f,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(c,{direction:"row",gap:0,children:t(N,{i18nKey:"main.hisTimeTable",values:{name:m?.name},components:{name:t(f,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(f,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(F,{children:" "})}})}),t(M,{blur:l==="idle",direction:"column",gap:0,align:"stretch",style:{overflow:"hidden"},children:u(O,{style:{overflow:"hidden"},children:[t(R,{lectures:S,needLectureDeletable:!1,needTimeFilter:!1,selectedLecture:null,setSelectedLecture:w}),g!==null&&t(V,{ratio:g,dayIndex:v})]})})]})})};export{ye as default};
//# sourceMappingURL=index-CKXCNYTx.js.map
