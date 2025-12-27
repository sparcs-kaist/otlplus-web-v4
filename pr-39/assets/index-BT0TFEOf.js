import{j as T,a as t,F as w,n as m,b as A}from"./FlexWrapper-C0dsngQo.js";import{a as n}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T as x}from"./Typography-DTsae4U-.js";import{u as B,k as S,j as H}from"./useIsDevice-DAKqZiCM.js";import{u as W}from"./useUserStore-Cs3WP2WQ.js";import{W as $}from"./Widget-D7VP5HFl.js";import{c as L,r as R,a as j,b as k}from"./renderTargetArea-C-O_MEua.js";import{T as G}from"./Trans-CklBbG_x.js";import"./jsx-runtime-u17CrQMm.js";import"./proxy-1qUiWquY.js";const P=m.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,C=m.div`
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
`,F=m.div`
    width: ${e=>`${e.width}px`};
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,q=({cellWidth:e=120,lectureSummary:a,hover:d,setHover:v,selected:b,setSelected:p})=>{const{t:i}=B(),c=5,u=5,g=8,h=n.useRef(null),o=[i("common.days.monday"),i("common.days.tuesday"),i("common.days.wednesday"),i("common.days.thursday"),i("common.days.friday")];L(a);const f=32,s=24,[y,E]=n.useState(25);n.useEffect(()=>{const r=()=>{E(28.953125)};return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]);const[z,M]=n.useState(new Map(Array.from({length:u},(r,l)=>[l,Array(f).fill(null)])));return T(P,{children:[t(C,{cellHeight:y,children:Array.from({length:s-g+1},(r,l)=>l+g).map(r=>t("div",{children:r%12||12},r))}),T(w,{direction:"column",gap:0,children:[t(w,{direction:"row",gap:5,children:o.map((r,l)=>r!=="none"&&t(F,{width:r===""?10:e,children:r},l))}),T("div",{ref:h,style:{display:"inline-block",position:"relative",userSelect:"none"},onClick:()=>{p(null)},children:[R(f,u,e,y,c,[],10,0),j(!0,z,"rgba(229, 76, 101, 0.5)",y,e,2,c,[],0,0),k(a,e,y,c,b,p,d,v,!1,void 0,!0)]})]})]})},D=m($)`
    width: 856px;

    ${H.laptop} {
        width: 100%;
    }
`,I=m(w)`
    flex-grow: 1;
    width: 100%;
`,Z=()=>{const{user:e,status:a}=W(),d=n.useRef(null),[v,b]=n.useState(0),[p,i]=n.useState(null),[c,u]=n.useState(null),{query:g,setParams:h}=S("GET","/timetables/my-timetable",{enabled:a==="success"}),{query:o}=S("GET","/semesters");n.useEffect(()=>{if(o.data&&o.data.semesters.length>0){const s=o.data.semesters[o.data.semesters.length-1];if(!s)return;h({year:s.year,semester:s.semester})}},[o.data,h]),n.useEffect(()=>{const s=()=>{d.current&&b(d.current.clientWidth)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[]);const f=g.data?.lectures??[];return t(D,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:a==="loading"?t(x,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):a==="idle"?t(x,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):T(I,{direction:"column",align:"stretch",gap:16,ref:d,children:[t(w,{direction:"row",gap:0,children:t(G,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:t(x,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:t(x,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:t(A,{children:" "})}})}),t(q,{cellWidth:(v-30)/5,lectureSummary:f,hover:c,setHover:u,selected:p,setSelected:i})]})})};export{Z as default};
