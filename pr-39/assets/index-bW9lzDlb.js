import{j as f,a as r,F as h,n as m,b as W}from"./FlexWrapper-C0dsngQo.js";import{a as s,x as j}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T as S}from"./Typography-DTsae4U-.js";import{c as R,r as F,a as G,b as I,u as O,t as $}from"./dexie-react-hooks-Bq8nn7a2.js";import{u as P,k as A,j as U}from"./useIsDevice-DEhOBbBt.js";import{u as q}from"./useUserStore-Cs3WP2WQ.js";import{W as D}from"./Widget-D7VP5HFl.js";import{T as M}from"./Trans--jWNB9qf.js";import"./jsx-runtime-u17CrQMm.js";import"./proxy-B-wDDeA-.js";const N=m.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,_=m.div`
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
`,K=m.div`
    width: ${e=>`${e.width}px`};
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,Y=({cellWidth:e=120,lectureSummary:u,hover:i,setHover:k,selected:p,setSelected:y})=>{const{t:l}=P(),g=5,x=5,w=8,C=s.useRef(null),E=[l("common.days.monday"),l("common.days.tuesday"),l("common.days.wednesday"),l("common.days.thursday"),l("common.days.friday")];R(u);const T=32,b=24,[d,o]=s.useState(25);s.useEffect(()=>{const t=()=>{o(28.953125)};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]);const[v,c]=s.useState(new Map(Array.from({length:x},(t,a)=>[a,Array(T).fill(null)])));return f(N,{children:[r(_,{cellHeight:d,children:Array.from({length:b-w+1},(t,a)=>a+w).map(t=>r("div",{children:t%12||12},t))}),f(h,{direction:"column",gap:0,children:[r(h,{direction:"row",gap:5,children:E.map((t,a)=>t!=="none"&&r(K,{width:t===""?10:e,children:t},a))}),f("div",{ref:C,style:{display:"inline-block",position:"relative",userSelect:"none"},onClick:()=>{y(null)},children:[F(T,x,e,d,g,[],10,0),G(!0,v,"rgba(229, 76, 101, 0.5)",d,e,2,g,[],0,0),I(u,e,d,g,p,y,i,k,!1,void 0,!0)]})]})]})},J=m(D)`
    width: 856px;

    ${U.laptop} {
        width: 100%;
    }
`,Q=m(h)`
    flex-grow: 1;
    width: 100%;
`,V=m.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    color: ${({theme:e})=>e.colors.Text.default};
    cursor: pointer;

    &::before {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;
    }
`,ce=()=>{const{user:e,status:u}=q(),{isOnline:i}=O(),k=j(),p=s.useRef(null),[y,l]=s.useState(0),[g,x]=s.useState(null),[w,C]=s.useState(null),[E,T]=s.useState([]),[b,d]=s.useState(!1),{query:o,setParams:v}=A("GET","/timetables/my-timetable",{enabled:u==="success"&&i}),{query:c}=A("GET","/semesters",{enabled:i}),t=c.data?.semesters?.at(-1)?.year,a=c.data?.semesters?.at(-1)?.semester,z=s.useCallback(async()=>{e?.id&&o.data?.lectures&&t&&a&&await $.save(e.id,t,String(a),o.data.lectures)},[e?.id,o.data?.lectures,t,a]),L=s.useCallback(async()=>{if(!e?.id)return;const n=await $.getLatestForUser(e.id);n&&(T(n.lectures),d(!0))},[e?.id]);s.useEffect(()=>{if(c.data&&c.data.semesters.length>0){const n=c.data.semesters[c.data.semesters.length-1];if(!n)return;v({year:n.year,semester:n.semester})}},[c.data,v]),s.useEffect(()=>{i&&o.data?.lectures&&e?.id&&(z(),d(!1))},[i,o.data?.lectures,e?.id,z]),s.useEffect(()=>{!i&&e?.id&&L()},[i,e?.id,L]),s.useEffect(()=>{const n=()=>{p.current&&l(p.current.clientWidth)};return window.addEventListener("resize",n),n(),()=>{window.removeEventListener("resize",n)}},[]);const B=()=>{k("/timetable/offline")},H=b?E:o.data?.lectures??[];return r(J,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:u==="loading"?r(S,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):u==="idle"?r(S,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):f(Q,{direction:"column",align:"stretch",gap:16,ref:p,children:[f(h,{direction:"row",justify:"space-between",align:"center",gap:0,children:[r(h,{direction:"row",gap:0,children:r(M,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:r(S,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:r(S,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:r(W,{children:" "})}})}),(b||!i)&&r(V,{onClick:B,children:"오프라인"})]}),r(Y,{cellWidth:(y-30)/5,lectureSummary:H,hover:w,setHover:C,selected:g,setSelected:x})]})})};export{ce as default};
