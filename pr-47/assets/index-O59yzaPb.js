import{j as w,a as e,F as h,n as p,b as G}from"./FlexWrapper-C0dsngQo.js";import{R as $,a as n}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T}from"./Typography-DTsae4U-.js";import{u as j,k as v,j as C}from"./useIsDevice-Crwv6Er-.js";import{u as L}from"./useUserStore-Cs3WP2WQ.js";import{W as z}from"./Widget-D7VP5HFl.js";import{c as H,r as M,a as W,b as F}from"./renderTargetArea-C5zt513N.js";import{T as P}from"./Trans-D8ppsE2I.js";import"./jsx-runtime-u17CrQMm.js";import"./proxy-1sSD-l58.js";const I=926.5,_=32,q=p.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,O=p.div`
    padding-top: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    gap: calc(var(--cell-height) * 2 - 11px);
    font-size: 8px;
    line-height: 11px;
    color: ${({theme:t})=>t.colors.Text.default};
`,U=p.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:t})=>t.colors.Text.default};
`,D=p.div`
    display: inline-block;
    position: relative;
    user-select: none;
`,K=({cellWidth:t=120,lectureSummary:i,hover:d,setHover:f,selected:y,setSelected:m})=>{const{t:a}=j(),s=5,g=5,x=8,b=n.useRef(null),l=[a("common.days.monday"),a("common.days.tuesday"),a("common.days.wednesday"),a("common.days.thursday"),a("common.days.friday")];H(i);const r=32,B=24,c=I/_,E=n.useMemo(()=>({"--cell-height":`${c}px`,"--cell-width":`${t}px`,"--col-padding":`${s}px`}),[c,t,s]),[R]=n.useState(new Map(Array.from({length:g},(o,u)=>[u,Array(r).fill(null)]))),S=n.useMemo(()=>M(r,g,t,c,s,[],10,0),[r,g,t,c,s]),k=n.useMemo(()=>W(i,t,c,s,y,m,d,f,!1,void 0,!0),[i,t,c,s,y,m,d,f]),A=n.useCallback(()=>{m(null)},[m]);return w(q,{style:E,children:[e(O,{children:Array.from({length:B-x+1},(o,u)=>u+x).map(o=>e("div",{children:o%12||12},o))}),w(h,{direction:"column",gap:0,children:[e(h,{direction:"row",gap:5,children:l.map((o,u)=>o!=="none"&&e(U,{style:o===""?{width:"10px"}:void 0,children:o},u))}),w(D,{ref:b,onClick:A,children:[S,F(!0,R,"rgba(229, 76, 101, 0.5)",c,t,2,s,[],0,0),k]})]})]})},V=$.memo(K),J=p(z)`
    width: 856px;

    ${C.laptop} {
        width: 100%;
    }
`,N=p(h)`
    flex-grow: 1;
    width: 100%;
`,ie=()=>{const{user:t,status:i}=L(),d=n.useRef(null),[f,y]=n.useState(0),[m,a]=n.useState(null),[s,g]=n.useState(null),{query:x,setParams:b}=v("GET","/timetables/my-timetable",{enabled:i==="success"}),{query:l}=v("GET","/semesters");return n.useEffect(()=>{const r=()=>{d.current&&y(d.current.clientWidth)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[]),n.useEffect(()=>{if(l.data&&l.data.semesters.length>0){const r=l.data.semesters[l.data.semesters.length-1];if(!r)return;b({year:r.year,semester:r.semester})}},[l.data]),e(J,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:i==="loading"?e(T,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):i==="idle"?e(T,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):w(N,{direction:"column",align:"stretch",gap:16,ref:d,children:[e(h,{direction:"row",justify:"space-between",align:"center",gap:0,children:e(h,{direction:"row",gap:0,children:e(P,{i18nKey:"main.hisTimeTable",values:{name:t?.name},components:{name:e(T,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:e(T,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:e(G,{children:" "})}})})}),e(V,{cellWidth:(f-30)/5,lectureSummary:x.data?.lectures??[],hover:s,setHover:g,selected:m,setSelected:a})]})})};export{ie as default};
