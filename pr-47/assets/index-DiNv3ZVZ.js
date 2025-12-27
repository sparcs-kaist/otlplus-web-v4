import{j as w,a as e,F as u,n as p,b as G}from"./FlexWrapper-C0dsngQo.js";import{R as $,a as n}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T}from"./Typography-DTsae4U-.js";import{u as j,k as v,j as C}from"./useIsDevice-Crwv6Er-.js";import{u as L}from"./useUserStore-Cs3WP2WQ.js";import{W as z}from"./Widget-D7VP5HFl.js";import{c as H,r as M,a as W,b as F}from"./renderTargetArea-C5zt513N.js";import{T as P}from"./Trans-D8ppsE2I.js";import"./jsx-runtime-u17CrQMm.js";import"./proxy-1sSD-l58.js";const I=926.5,_=32,q=p.div`
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
`,K=({cellWidth:t=120,lectureSummary:o,hover:c,setHover:h,selected:f,setSelected:d})=>{const{t:i}=j(),m=5,y=5,x=8,b=n.useRef(null),a=[i("common.days.monday"),i("common.days.tuesday"),i("common.days.wednesday"),i("common.days.thursday"),i("common.days.friday")];H(o);const r=32,B=24,l=I/_,E=n.useMemo(()=>({"--cell-height":`${l}px`,"--cell-width":`${t}px`,"--col-padding":`${m}px`}),[l,t]),[R]=n.useState(new Map(Array.from({length:y},(s,g)=>[g,Array(r).fill(null)]))),S=n.useMemo(()=>M(r,y,t,l,m,[],10,0),[r,t,l]),k=n.useMemo(()=>W(o,t,l,m,f,d,c,h,!1,void 0,!0),[o,t,l,f,d,c,h]),A=n.useCallback(()=>{d(null)},[d]);return w(q,{style:E,children:[e(O,{children:Array.from({length:B-x+1},(s,g)=>g+x).map(s=>e("div",{children:s%12||12},s))}),w(u,{direction:"column",gap:0,children:[e(u,{direction:"row",gap:5,children:a.map((s,g)=>s!=="none"&&e(U,{style:s===""?{width:"10px"}:void 0,children:s},g))}),w(D,{ref:b,onClick:A,children:[S,F(!0,R,"rgba(229, 76, 101, 0.5)",l,t,2,m,[],0,0),k]})]})]})},V=$.memo(K),J=p(z)`
    width: 856px;

    ${C.laptop} {
        width: 100%;
    }
`,N=p(u)`
    flex-grow: 1;
    width: 100%;
`,ie=()=>{const{user:t,status:o}=L(),c=n.useRef(null),[h,f]=n.useState(0),[d,i]=n.useState(null),[m,y]=n.useState(null),{query:x,setParams:b}=v("GET","/timetables/my-timetable",{enabled:o==="success"}),{query:a}=v("GET","/semesters");return n.useEffect(()=>{const r=()=>{c.current&&f(c.current.clientWidth)};return window.addEventListener("resize",r),r(),()=>{window.removeEventListener("resize",r)}},[]),n.useEffect(()=>{if(a.data&&a.data.semesters.length>0){const r=a.data.semesters[a.data.semesters.length-1];if(!r)return;b({year:r.year,semester:r.semester})}},[a.data]),e(J,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:o==="loading"?e(T,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):o==="idle"?e(T,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):w(N,{direction:"column",align:"stretch",gap:16,ref:c,children:[e(u,{direction:"row",justify:"space-between",align:"center",gap:0,children:e(u,{direction:"row",gap:0,children:e(P,{i18nKey:"main.hisTimeTable",values:{name:t?.name},components:{name:e(T,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:e(T,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:e(G,{children:" "})}})})}),e(V,{cellWidth:(h-30)/5,lectureSummary:x.data?.lectures??[],hover:m,setHover:y,selected:d,setSelected:i})]})})};export{ie as default};
