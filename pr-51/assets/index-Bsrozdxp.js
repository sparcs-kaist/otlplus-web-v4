import{j as v,a as t,F as b,n as p,b as G}from"./FlexWrapper-C0dsngQo.js";import{R as $,a as r}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T as w}from"./Typography-DTsae4U-.js";import{u as C,k as B,j as L}from"./useIsDevice-CGASXFcU.js";import{u as j}from"./useUserStore-DJfOepJa.js";import{W as z}from"./Widget-D7VP5HFl.js";import{c as H,r as M,a as W,b as F}from"./renderTargetArea-BbBL49wE.js";import{T as P}from"./Trans-BdZqi7b9.js";import"./jsx-runtime-u17CrQMm.js";import"./proxy-P8eVADl4.js";const I=926.5,_=32,q=p.div`
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
    color: ${({theme:e})=>e.colors.Text.default};
`,U=p.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,D=p.div`
    display: inline-block;
    position: relative;
    user-select: none;
`,K=({cellWidth:e=120,lectureSummary:a,hover:d,setHover:f,selected:y,setSelected:m})=>{const{t:i}=C(),n=5,u=5,x=8,T=r.useRef(null),l=[i("common.days.monday"),i("common.days.tuesday"),i("common.days.wednesday"),i("common.days.thursday"),i("common.days.friday")];H(a);const g=32,s=24,c=I/_,E=r.useMemo(()=>({"--cell-height":`${c}px`,"--cell-width":`${e}px`,"--col-padding":`${n}px`}),[c,e,n]),[R]=r.useState(new Map(Array.from({length:u},(o,h)=>[h,Array(g).fill(null)]))),S=r.useMemo(()=>M(g,u,e,c,n,[],10,0),[g,u,e,c,n]),k=r.useMemo(()=>W(a,e,c,n,y,m,d,f,!1,void 0,!0),[a,e,c,n,y,m,d,f]),A=r.useCallback(()=>{m(null)},[m]);return v(q,{style:E,children:[t(O,{children:Array.from({length:s-x+1},(o,h)=>h+x).map(o=>t("div",{children:o%12||12},o))}),v(b,{direction:"column",gap:0,children:[t(b,{direction:"row",gap:5,children:l.map((o,h)=>o!=="none"&&t(U,{style:o===""?{width:"10px"}:void 0,children:o},h))}),v(D,{ref:T,onClick:A,children:[S,F(!0,R,"rgba(229, 76, 101, 0.5)",c,e,2,n,[],0,0),k]})]})]})},V=$.memo(K),J=p(z)`
    width: 856px;

    ${L.laptop} {
        width: 100%;
    }
`,N=p(b)`
    flex-grow: 1;
    width: 100%;
`,ae=()=>{const{user:e,status:a}=j(),d=r.useRef(null),[f,y]=r.useState(0),[m,i]=r.useState(null),[n,u]=r.useState(null),{query:x,setParams:T}=B("GET","/timetables/my-timetable",{enabled:a==="success"}),{query:l}=B("GET","/semesters");r.useEffect(()=>{if(l.data&&l.data.semesters.length>0){const s=l.data.semesters[l.data.semesters.length-1];if(!s)return;T({year:s.year,semester:s.semester})}},[l.data,T]),r.useEffect(()=>{const s=()=>{d.current&&y(d.current.clientWidth)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]);const g=x.data?.lectures??[];return t(J,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:a==="loading"?t(w,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):a==="idle"?t(w,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):v(N,{direction:"column",align:"stretch",gap:16,ref:d,children:[t(b,{direction:"row",gap:0,children:t(P,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:t(w,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(w,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(G,{children:" "})}})}),t(V,{cellWidth:(f-30)/5,lectureSummary:g,hover:n,setHover:u,selected:m,setSelected:i})]})})};export{ae as default};
