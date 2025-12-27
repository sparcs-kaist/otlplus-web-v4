import{j as w,a as t,F as u,n as g,b as k}from"./FlexWrapper-C0dsngQo.js";import{R as A,a as n}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T}from"./Typography-DTsae4U-.js";import{u as j,k as b,j as C}from"./useIsDevice-Crwv6Er-.js";import{u as H}from"./useUserStore-Cs3WP2WQ.js";import{W as L}from"./Widget-D7VP5HFl.js";import{c as G,r as W,a as M,b as P}from"./renderTargetArea-Bu8-JM5H.js";import{T as F}from"./Trans-D8ppsE2I.js";import"./jsx-runtime-u17CrQMm.js";import"./proxy-1sSD-l58.js";const q=g.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,I=g.div`
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
`,_=g.div`
    width: ${e=>`${e.width}px`};
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,D=({cellWidth:e=120,lectureSummary:i,hover:l,setHover:f,selected:h,setSelected:d})=>{const{t:o}=j(),p=5,y=5,x=8,v=n.useRef(null),a=[o("common.days.monday"),o("common.days.tuesday"),o("common.days.wednesday"),o("common.days.thursday"),o("common.days.friday")];G(i);const s=32,E=24,[c,S]=n.useState(25);n.useEffect(()=>{const r=()=>{S(28.953125)};return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]);const[z]=n.useState(new Map(Array.from({length:y},(r,m)=>[m,Array(s).fill(null)]))),B=n.useMemo(()=>W(s,y,e,c,p,[],10,0),[s,e,c]),R=n.useMemo(()=>M(i,e,c,p,h,d,l,f,!1,void 0,!0),[i,e,c,h,d,l,f]),$=n.useCallback(()=>{d(null)},[d]);return w(q,{children:[t(I,{cellHeight:c,children:Array.from({length:E-x+1},(r,m)=>m+x).map(r=>t("div",{children:r%12||12},r))}),w(u,{direction:"column",gap:0,children:[t(u,{direction:"row",gap:5,children:a.map((r,m)=>r!=="none"&&t(_,{width:r===""?10:e,children:r},m))}),w("div",{ref:v,style:{display:"inline-block",position:"relative",userSelect:"none"},onClick:$,children:[B,P(!0,z,"rgba(229, 76, 101, 0.5)",c,e,2,p,[],0,0),R]})]})]})},K=A.memo(D),O=g(L)`
    width: 856px;

    ${C.laptop} {
        width: 100%;
    }
`,U=g(u)`
    flex-grow: 1;
    width: 100%;
`,re=()=>{const{user:e,status:i}=H(),l=n.useRef(null),[f,h]=n.useState(0),[d,o]=n.useState(null),[p,y]=n.useState(null),{query:x,setParams:v}=b("GET","/timetables/my-timetable",{enabled:i==="success"}),{query:a}=b("GET","/semesters");return n.useEffect(()=>{const s=()=>{l.current&&h(l.current.clientWidth)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]),n.useEffect(()=>{if(a.data&&a.data.semesters.length>0){const s=a.data.semesters[a.data.semesters.length-1];if(!s)return;v({year:s.year,semester:s.semester})}},[a.data]),t(O,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:i==="loading"?t(T,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):i==="idle"?t(T,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):w(U,{direction:"column",align:"stretch",gap:16,ref:l,children:[t(u,{direction:"row",justify:"space-between",align:"center",gap:0,children:t(u,{direction:"row",gap:0,children:t(F,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:t(T,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(T,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(k,{children:" "})}})})}),t(K,{cellWidth:(f-30)/5,lectureSummary:x.data?.lectures??[],hover:p,setHover:y,selected:d,setSelected:o})]})})};export{re as default};
