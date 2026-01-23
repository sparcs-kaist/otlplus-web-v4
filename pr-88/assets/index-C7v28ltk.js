import{a as h,j as t,u as E,F as H}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{R,r as o}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{F as f,n}from"./FlexWrapper-B6Hxm4Zw.js";import{L as S}from"./Lock-B9GJSe-W.js";import{L as W}from"./LoadingCircle-cADOaZeW.js";import{u as L,I as z}from"./useIsDevice-DkhiZTMj.js";import{T as v}from"./Typography-DeI78L6T.js";import{m as A}from"./media-MLnbxw48.js";import{a as G}from"./handleLoginLogout-D74Wy3LK.js";import{u as I}from"./useUserStore-j0oNtpZV.js";import{W as M}from"./Widget-e9ONaX_D.js";import{c as j,r as P,a as _,b as q}from"./renderTargetArea-Dc6HkZd3.js";import{u as O}from"./useTranslation-DrmvPmDd.js";import{T as U}from"./Trans-CqAfIhg2.js";import"./index-D5Bp7q6o.js";import"./env-C4aK8OIb.js";import"./queryPersister-C4hUuXbL.js";import"./preload-helper-BMHqmF9P.js";import"./proxy-CxmZtpP0.js";const D=926.5,K=32,V=n.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,J=n.div`
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
`,N=n.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,Q=n.div`
    display: inline-block;
    position: relative;
    user-select: none;
`,X=({cellWidth:e=120,lectureSummary:p,hover:a,setHover:c,selected:x,setSelected:m})=>{const{t:d}=O(),i=5,u=5,y=8,b=o.useRef(null),T=[d("common.days.monday"),d("common.days.tuesday"),d("common.days.wednesday"),d("common.days.thursday"),d("common.days.friday")];j(p);const s=32,w=24,r=D/K,F=o.useMemo(()=>({"--cell-height":`${r}px`,"--cell-width":`${e}px`,"--col-padding":`${i}px`}),[r,e,i]),[k]=o.useState(new Map(Array.from({length:u},(l,g)=>[g,Array(s).fill(null)]))),$=o.useMemo(()=>P(s,u,e,r,i,[],10,0),[s,u,e,r,i]),B=o.useMemo(()=>_(p,e,r,i,x,m,a,c,!1,void 0,!0),[p,e,r,i,x,m,a,c]),C=o.useCallback(()=>{m(null)},[m]);return h(V,{style:F,children:[t(J,{children:Array.from({length:w-y+1},(l,g)=>g+y).map(l=>t("div",{children:l%12||12},l))}),h(f,{direction:"column",gap:0,children:[t(f,{direction:"row",gap:5,children:T.map((l,g)=>l!=="none"&&t(N,{style:l===""?{width:"10px"}:void 0,children:l},g))}),h(Q,{ref:b,onClick:C,children:[$,q(!0,k,"rgba(229, 76, 101, 0.5)",r,e,2,i,[],0,0),B]})]})]})},Y=R.memo(X),Z=n(M)`
    width: 856px;

    ${A.laptop} {
        width: 100%;
    }
`,ee=n(f)`
    flex-grow: 1;
    width: 100%;
`,te=n.div`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
`,re=n(f)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,oe=n.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,ne=n.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,Fe=()=>{const e=E(),{user:p,status:a}=I(),c=o.useRef(null),[x,m]=o.useState(0),[d,i]=o.useState(null),[u,y]=o.useState(null),{query:b,setParams:T}=L("GET","/timetables/my-timetable",{enabled:a==="success"}),{query:s}=L("GET","/semesters");o.useEffect(()=>{if(s.data&&s.data.semesters.length>0){const r=s.data.semesters[s.data.semesters.length-1];if(!r)return;T({year:r.year,semester:r.semester})}},[s.data,T]),o.useEffect(()=>{const r=()=>{c.current&&m(c.current.clientWidth)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[c,a]);const w=b.data?.lectures??[];return t(Z,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:a==="loading"?t(W,{}):h(ee,{direction:"column",align:"stretch",gap:16,ref:c,children:[a==="idle"?h(re,{direction:"column",gap:12,align:"center",children:[t(oe,{children:t(z,{size:30,color:e.colors.Highlight.default,children:t(S,{})})}),t(ne,{onClick:G,children:t(v,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(f,{direction:"row",gap:0,children:t(U,{i18nKey:"main.hisTimeTable",values:{name:p?.name},components:{name:t(v,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(v,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(H,{children:" "})}})}),t(te,{blur:a==="idle",children:t(Y,{cellWidth:(x-30)/5,lectureSummary:w,hover:u,setHover:y,selected:d,setSelected:i})})]})})};export{Fe as default};
//# sourceMappingURL=index-C7v28ltk.js.map
