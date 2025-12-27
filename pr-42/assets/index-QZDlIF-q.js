import{j as x,a as t,F as m,n as p,b as A}from"./FlexWrapper-C0dsngQo.js";import{a as i}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T as y}from"./Typography-DTsae4U-.js";import{u as B,k as b,j as H}from"./useIsDevice-BxbcT4fu.js";import{u as W}from"./useUserStore-Cs3WP2WQ.js";import{W as $}from"./Widget-D7VP5HFl.js";import{c as j,r as L,a as R,b as k}from"./renderTargetArea-Wrnm7P0K.js";import{T as G}from"./Trans-CUQr3i9H.js";import"./jsx-runtime-u17CrQMm.js";import"./proxy-DQl3suhz.js";const P=p.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,C=p.div`
    padding-top: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    gap: ${({cellHeight:e})=>`${e*2-11}px`};
    font-size: 8px;
    line-height: 11px;
    color: ${({theme:e})=>e.colors.Text.default};
`,F=p.div`
    width: ${e=>`${e.width}px`};
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,q=({cellWidth:e=120,lectureSummary:a,hover:d,setHover:w,selected:T,setSelected:g})=>{const{t:s}=B(),c=5,u=5,h=8,v=i.useRef(null),o=[s("common.days.monday"),s("common.days.tuesday"),s("common.days.wednesday"),s("common.days.thursday"),s("common.days.friday")];j(a);const n=32,S=24,[f,E]=i.useState(25);i.useEffect(()=>{const r=()=>{E(28.953125)};return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]);const[z,M]=i.useState(new Map(Array.from({length:u},(r,l)=>[l,Array(n).fill(null)])));return x(P,{children:[t(C,{cellHeight:f,children:Array.from({length:S-h+1},(r,l)=>l+h).map(r=>t("div",{children:r%12||12},r))}),x(m,{direction:"column",gap:0,children:[t(m,{direction:"row",gap:5,children:o.map((r,l)=>r!=="none"&&t(F,{width:r===""?10:e,children:r},l))}),x("div",{ref:v,style:{display:"inline-block",position:"relative",userSelect:"none"},onClick:()=>{g(null)},children:[L(n,u,e,f,c,[],10,0),R(!0,z,"rgba(229, 76, 101, 0.5)",f,e,2,c,[],0,0),k(a,e,f,c,T,g,d,w,!1,void 0,!0)]})]})]})},D=p($)`
    width: 856px;

    ${H.laptop} {
        width: 100%;
    }
`,I=p(m)`
    flex-grow: 1;
    width: 100%;
`,Z=()=>{const{user:e,status:a}=W(),d=i.useRef(null),[w,T]=i.useState(0),[g,s]=i.useState(null),[c,u]=i.useState(null),{query:h,setParams:v}=b("GET","/timetables/my-timetable",{enabled:a==="success"}),{query:o}=b("GET","/semesters");return i.useEffect(()=>{const n=()=>{d.current&&T(d.current.clientWidth)};return window.addEventListener("resize",n),n(),()=>{window.removeEventListener("resize",n)}},[]),i.useEffect(()=>{if(o.data&&o.data.semesters.length>0){const n=o.data.semesters[o.data.semesters.length-1];if(!n)return;v({year:n.year,semester:n.semester})}},[o.data]),t(D,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:a==="loading"?t(y,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):a==="idle"?t(y,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):x(I,{direction:"column",align:"stretch",gap:16,ref:d,children:[t(m,{direction:"row",justify:"space-between",align:"center",gap:0,children:t(m,{direction:"row",gap:0,children:t(G,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:t(y,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(y,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(A,{children:" "})}})})}),t(q,{cellWidth:(w-30)/5,lectureSummary:h.data?.lectures??[],hover:c,setHover:u,selected:g,setSelected:s})]})})};export{Z as default};
