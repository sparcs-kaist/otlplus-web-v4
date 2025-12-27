import{b as v,j as t,F as G}from"./emotion-react-jsx-runtime.browser.esm-B1jPEyiZ.js";import{R as $,r}from"./chunk-UIGDSWPH-C2ktfSeF.js";import{F as b,n as p}from"./FlexWrapper-BDdwpRDn.js";import{T as w}from"./Typography-DRNB4_Lw.js";import{u as C,k as B,j as L}from"./useIsDevice-uqoFzfV3.js";import{u as j}from"./useUserStore-wO41cfx0.js";import{W as z}from"./Widget-Cls_3vn9.js";import{c as F,r as H,a as M,b as W}from"./renderTargetArea-C1mhpsNZ.js";import{T as P}from"./Trans-DVHtQDOz.js";import"./env-CcjFjYdd.js";import"./proxy-CKoRFMkv.js";const I=926.5,_=32,q=p.div`
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
`,K=({cellWidth:e=120,lectureSummary:i,hover:d,setHover:f,selected:y,setSelected:m})=>{const{t:a}=C(),n=5,u=5,x=8,T=r.useRef(null),l=[a("common.days.monday"),a("common.days.tuesday"),a("common.days.wednesday"),a("common.days.thursday"),a("common.days.friday")];F(i);const g=32,s=24,c=I/_,E=r.useMemo(()=>({"--cell-height":`${c}px`,"--cell-width":`${e}px`,"--col-padding":`${n}px`}),[c,e,n]),[R]=r.useState(new Map(Array.from({length:u},(o,h)=>[h,Array(g).fill(null)]))),S=r.useMemo(()=>H(g,u,e,c,n,[],10,0),[g,u,e,c,n]),k=r.useMemo(()=>M(i,e,c,n,y,m,d,f,!1,void 0,!0),[i,e,c,n,y,m,d,f]),A=r.useCallback(()=>{m(null)},[m]);return v(q,{style:E,children:[t(O,{children:Array.from({length:s-x+1},(o,h)=>h+x).map(o=>t("div",{children:o%12||12},o))}),v(b,{direction:"column",gap:0,children:[t(b,{direction:"row",gap:5,children:l.map((o,h)=>o!=="none"&&t(U,{style:o===""?{width:"10px"}:void 0,children:o},h))}),v(D,{ref:T,onClick:A,children:[S,W(!0,R,"rgba(229, 76, 101, 0.5)",c,e,2,n,[],0,0),k]})]})]})},V=$.memo(K),J=p(z)`
    width: 856px;

    ${L.laptop} {
        width: 100%;
    }
`,N=p(b)`
    flex-grow: 1;
    width: 100%;
`,ae=()=>{const{user:e,status:i}=j(),d=r.useRef(null),[f,y]=r.useState(0),[m,a]=r.useState(null),[n,u]=r.useState(null),{query:x,setParams:T}=B("GET","/timetables/my-timetable",{enabled:i==="success"}),{query:l}=B("GET","/semesters");r.useEffect(()=>{if(l.data&&l.data.semesters.length>0){const s=l.data.semesters[l.data.semesters.length-1];if(!s)return;T({year:s.year,semester:s.semester})}},[l.data,T]),r.useEffect(()=>{const s=()=>{d.current&&y(d.current.clientWidth)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]);const g=x.data?.lectures??[];return t(J,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:i==="loading"?t(w,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):i==="idle"?t(w,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):v(N,{direction:"column",align:"stretch",gap:16,ref:d,children:[t(b,{direction:"row",gap:0,children:t(P,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:t(w,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(w,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(G,{children:" "})}})}),t(V,{cellWidth:(f-30)/5,lectureSummary:g,hover:n,setHover:u,selected:m,setSelected:a})]})})};export{ae as default};
//# sourceMappingURL=index-5EZODujJ.js.map
