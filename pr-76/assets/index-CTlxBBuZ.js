import{a as g,j as t,u as E,F as R}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{p as z,R as B,r as o}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{F as f,n}from"./FlexWrapper-B6Hxm4Zw.js";import{e as C,u as L,I}from"./useIsDevice-BVryhRFK.js";import{L as W}from"./LoadingCircle-BApWMr5H.js";import{T as w}from"./Typography-DeI78L6T.js";import{m as A}from"./media-MLnbxw48.js";import{a as G}from"./handleLoginLogout-CUc-CnW0.js";import{u as j}from"./useUserStore-Cx-RfpsI.js";import{W as M}from"./Widget-e9ONaX_D.js";import{c as P,r as V,a as _,b as q}from"./renderTargetArea-BeZYZfO9.js";import{u as O}from"./useTranslation-DrmvPmDd.js";import{T as U}from"./Trans-Gdflpyff.js";import"./index-BhCjyV9_.js";import"./env-CwbTq_TT.js";import"./queryPersister-CY7DFGkL.js";import"./proxy-DI_gY_Ps.js";const D=C(z.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"})),K=926.5,J=32,N=n.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,Q=n.div`
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
`,X=n.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,Y=n.div`
    display: inline-block;
    position: relative;
    user-select: none;
`,Z=({cellWidth:e=120,lectureSummary:p,hover:a,setHover:l,selected:x,setSelected:m})=>{const{t:d}=O(),i=5,u=5,y=8,b=o.useRef(null),T=[d("common.days.monday"),d("common.days.tuesday"),d("common.days.wednesday"),d("common.days.thursday"),d("common.days.friday")];P(p);const s=32,v=24,r=K/J,F=o.useMemo(()=>({"--cell-height":`${r}px`,"--cell-width":`${e}px`,"--col-padding":`${i}px`}),[r,e,i]),[k]=o.useState(new Map(Array.from({length:u},(c,h)=>[h,Array(s).fill(null)]))),H=o.useMemo(()=>V(s,u,e,r,i,[],10,0),[s,u,e,r,i]),S=o.useMemo(()=>_(p,e,r,i,x,m,a,l,!1,void 0,!0),[p,e,r,i,x,m,a,l]),$=o.useCallback(()=>{m(null)},[m]);return g(N,{style:F,children:[t(Q,{children:Array.from({length:v-y+1},(c,h)=>h+y).map(c=>t("div",{children:c%12||12},c))}),g(f,{direction:"column",gap:0,children:[t(f,{direction:"row",gap:5,children:T.map((c,h)=>c!=="none"&&t(X,{style:c===""?{width:"10px"}:void 0,children:c},h))}),g(Y,{ref:b,onClick:$,children:[H,q(!0,k,"rgba(229, 76, 101, 0.5)",r,e,2,i,[],0,0),S]})]})]})},ee=B.memo(Z),te=n(M)`
    width: 856px;

    ${A.laptop} {
        width: 100%;
    }
`,re=n(f)`
    flex-grow: 1;
    width: 100%;
`,oe=n.div`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
`,ne=n(f)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,ie=n.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,se=n.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,Fe=()=>{const e=E(),{user:p,status:a}=j(),l=o.useRef(null),[x,m]=o.useState(0),[d,i]=o.useState(null),[u,y]=o.useState(null),{query:b,setParams:T}=L("GET","/timetables/my-timetable",{enabled:a==="success"}),{query:s}=L("GET","/semesters");o.useEffect(()=>{if(s.data&&s.data.semesters.length>0){const r=s.data.semesters[s.data.semesters.length-1];if(!r)return;T({year:r.year,semester:r.semester})}},[s.data,T]),o.useEffect(()=>{const r=()=>{l.current&&m(l.current.clientWidth)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[l,a]);const v=b.data?.lectures??[];return t(te,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:a==="loading"?t(W,{}):g(re,{direction:"column",align:"stretch",gap:16,ref:l,children:[a==="idle"?g(ne,{direction:"column",gap:12,align:"center",children:[t(ie,{children:t(I,{size:30,color:e.colors.Highlight.default,children:t(D,{})})}),t(se,{onClick:G,children:t(w,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):t(f,{direction:"row",gap:0,children:t(U,{i18nKey:"main.hisTimeTable",values:{name:p?.name},components:{name:t(w,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(w,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(R,{children:" "})}})}),t(oe,{blur:a==="idle",children:t(ee,{cellWidth:(x-30)/5,lectureSummary:v,hover:u,setHover:y,selected:d,setSelected:i})})]})})};export{Fe as default};
//# sourceMappingURL=index-CTlxBBuZ.js.map
