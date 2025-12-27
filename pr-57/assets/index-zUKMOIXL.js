import{a as v,j as t,F as $}from"./emotion-react-jsx-runtime.browser.esm-Cql-SmI8.js";import{R as k,r}from"./chunk-UIGDSWPH-ClC-Bows.js";import{F as b,n as p}from"./FlexWrapper-B3Tmr1Ow.js";import{T as w}from"./Typography-YMZw2QHy.js";import{u as B,g as C}from"./useIsDevice-DnuNoJZ_.js";import{u as L}from"./useUserStore-B-P0R9Aj.js";import{W as z}from"./Widget-Crs3_Da_.js";import{c as F,r as H,a as M,b as W}from"./renderTargetArea-ii_7Dno9.js";import{u as j}from"./index-DasAm1UD.js";import{T as P}from"./Trans-f23ayD2D.js";import"./env-x7j716XO.js";import"./proxy-C1eNn18-.js";const I=926.5,_=32,q=p.div`
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
`,K=({cellWidth:e=120,lectureSummary:i,hover:d,setHover:f,selected:y,setSelected:m})=>{const{t:a}=j(),n=5,u=5,x=8,T=r.useRef(null),l=[a("common.days.monday"),a("common.days.tuesday"),a("common.days.wednesday"),a("common.days.thursday"),a("common.days.friday")];F(i);const g=32,o=24,c=I/_,E=r.useMemo(()=>({"--cell-height":`${c}px`,"--cell-width":`${e}px`,"--col-padding":`${n}px`}),[c,e,n]),[R]=r.useState(new Map(Array.from({length:u},(s,h)=>[h,Array(g).fill(null)]))),S=r.useMemo(()=>H(g,u,e,c,n,[],10,0),[g,u,e,c,n]),A=r.useMemo(()=>M(i,e,c,n,y,m,d,f,!1,void 0,!0),[i,e,c,n,y,m,d,f]),G=r.useCallback(()=>{m(null)},[m]);return v(q,{style:E,children:[t(O,{children:Array.from({length:o-x+1},(s,h)=>h+x).map(s=>t("div",{children:s%12||12},s))}),v(b,{direction:"column",gap:0,children:[t(b,{direction:"row",gap:5,children:l.map((s,h)=>s!=="none"&&t(U,{style:s===""?{width:"10px"}:void 0,children:s},h))}),v(D,{ref:T,onClick:G,children:[S,W(!0,R,"rgba(229, 76, 101, 0.5)",c,e,2,n,[],0,0),A]})]})]})},V=k.memo(K),J=p(z)`
    width: 856px;

    ${C.laptop} {
        width: 100%;
    }
`,N=p(b)`
    flex-grow: 1;
    width: 100%;
`,le=()=>{const{user:e,status:i}=L(),d=r.useRef(null),[f,y]=r.useState(0),[m,a]=r.useState(null),[n,u]=r.useState(null),{query:x,setParams:T}=B("GET","/timetables/my-timetable",{enabled:i==="success"}),{query:l}=B("GET","/semesters");r.useEffect(()=>{if(l.data&&l.data.semesters.length>0){const o=l.data.semesters[l.data.semesters.length-1];if(!o)return;T({year:o.year,semester:o.semester})}},[l.data,T]),r.useEffect(()=>{const o=()=>{d.current&&y(d.current.clientWidth)};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o)}},[]);const g=x.data?.lectures??[];return t(J,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:i==="loading"?t(w,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):i==="idle"?t(w,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):v(N,{direction:"column",align:"stretch",gap:16,ref:d,children:[t(b,{direction:"row",gap:0,children:t(P,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:t(w,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(w,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t($,{children:" "})}})}),t(V,{cellWidth:(f-30)/5,lectureSummary:g,hover:n,setHover:u,selected:m,setSelected:a})]})})};export{le as default};
//# sourceMappingURL=index-zUKMOIXL.js.map
