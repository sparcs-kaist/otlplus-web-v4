import{a as o,j as T,n as B,F as C,b as K}from"./FlexWrapper-C0dsngQo.js";import{a as c}from"./chunk-UIGDSWPH-NakEPbl8.js";import{a1 as I,u as J,j as Q}from"./useIsDevice-CZNUtxO9.js";import{T as F}from"./Typography-DTsae4U-.js";import{u as V}from"./useUserStore-Cs3WP2WQ.js";import{W as X}from"./Widget-D7VP5HFl.js";import{T as Y}from"./Trans-CzvAu8Uq.js";import"./jsx-runtime-u17CrQMm.js";const W=[{id:3678,code:"CBE342",courseId:1234,department:{id:701,name:"생명화학공학과"},name:"화학 및 생물 제품디자인",type:"전공선택",professors:[{id:695,name:"장용근"}],averageGrade:0,averageLoad:0,averageSpeech:0,credit:4,creditAU:0,limitPeople:50,numPeople:0,classDuration:3,expDuration:0,classes:[{day:0,begin:480,end:570,buildingCode:"E2",placeName:"산업경영학동 1225"},{day:2,begin:600,end:690,buildingCode:"E2",placeName:"산업경영학동 1225"}],examTimes:[{day:I.Mon,begin:600,end:720,str:"월 10:00~12:00"}],classNo:"A",isEnglish:!1},{id:295,code:"CBE441",courseId:5678,department:{id:701,name:"생명화학공학과"},name:"공정 및 제품 디자인",type:"전공선택",professors:[{id:1853,name:"이재우"},{id:695,name:"장용근"}],averageGrade:0,averageLoad:0,averageSpeech:0,credit:4,creditAU:0,limitPeople:20,numPeople:0,classDuration:3,expDuration:0,classes:[{day:1,begin:630,end:720,buildingCode:"E2",placeName:"산업경영학동 1225"},{day:2,begin:780,end:870,buildingCode:"E2",placeName:"산업경영학동 1225"}],examTimes:[{day:I.Wed,begin:840,end:960,str:"수 14:00~16:00"}],classNo:"A",isEnglish:!1},{id:1599,code:"CBE442",courseId:9101,department:{id:701,name:"생명화학공학과"},name:"생명화학공학 디자인 프로젝트",type:"전공필수",professors:[{id:2023,name:"리섕"}],averageGrade:15,averageLoad:6,averageSpeech:12,credit:3,creditAU:0,limitPeople:70,numPeople:0,classDuration:3,expDuration:0,classes:[{day:1,begin:480,end:570,buildingCode:"E2",placeName:"산업경영학동 1225"},{day:3,begin:600,end:690,buildingCode:"E2",placeName:"산업경영학동 1225"}],examTimes:[{day:I.Thu,begin:960,end:1080,str:"목 16:00~18:00"}],classNo:"A",isEnglish:!1}];function Z(e){return e.forEach((t,s)=>{let n=[];"timeBlocks"in t?n=t.timeBlocks:n=t.classes,n.forEach((r,a)=>{if(r.end>24)return!0})}),!1}const P=(e,t,s,n,r,a,l,u)=>{const y=[];for(let g=0;g<e;g++){const b=[];for(let w=0;w<t;w++){const m=`${g*t+w}`,i=!a.includes(w+u),f=o("div",{id:m,style:{width:`${i?s:l}px`,height:`${n}px`,display:"inline-block",textAlign:"center",borderTop:`${i?g%2==0?"1px solid rgba(232, 232, 232, 1)":"1px dashed rgba(232, 232, 232, 1)":"0px"}`,borderBottom:`${i&&g==e-1?"1px solid rgba(232, 232, 232, 1)":"0px"}`,marginRight:`${w<t-1?`${r}px`:"0px"}`}},m);b.push(f)}y.push(o("div",{style:{display:"flex"},children:b},g))}return y},ee=["#F2CECE","#F4B3AE","#F2BCA0","#F0D3AB","#F1E1A9","#F4F2B3","#DBF4BE","#BEEDD7","#B7D2DE","#C9DAF4","#B4D3ED","#B9C5ED","#D8C1F0","#EBCAEF","#F4BADB"],te=B.div`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: ${({cellWidth:e})=>`${e}px`};
    height: ${({duration:e,cellHeight:t})=>`${e*t-4}px`};
    margin-bottom: 2px;
    margin-top: 2px;
    justify-content: center;
    background-color: ${({theme:e,course_id:t,isHighlighted:s})=>s?e.colors.Highlight.default:ee[t%15]};
    border-radius: 2px;
    overflow: hidden;
    overflow-wrap: break-word;
    gap: 1px;
    transition: box-shadow 0.1s ease-in-out;
    cursor: pointer;
`,ne=B.span`
    width: 100%;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    line-height: ${({theme:e})=>`${e.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:e})=>e.fonts.Small.fontWeight};
    color: ${({theme:e,isHighlighted:t})=>t?"white":e.colors.Text.default};
    display: inline-block;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: normal;
`,N=B.span`
    width: 100%;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    line-height: ${({theme:e})=>`${e.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:e})=>e.fonts.Small.fontWeight};
    color: ${({isHighlighted:e})=>e?"rgba(255, 255, 255, 0.6)":"rgba(102, 102, 102, 0.6)"};
    word-wrap: break-word;
    display: inline-block;
    word-break: break-word;
    white-space: normal;
`,ie=({lecture:e,timeBlock:t,cellWidth:s,cellHeight:n,isSelected:r=!1,isHovered:a=!1})=>{const l=r||a;return T(te,{course_id:e.courseId,duration:(t.end-t.begin)/30,cellWidth:s,isSelected:r,isHighlighted:l,cellHeight:n,children:[o(ne,{isHighlighted:l,children:e.name}),o(N,{isHighlighted:l,children:e.professors.map(u=>u.name).join(", ")}),T(N,{isHighlighted:l,children:["(",t.buildingCode,") ",t.placeName]})]})},oe=(e,t)=>!(e.cellWidth!==t.cellWidth||e.cellHeight!==t.cellHeight||e.isSelected!==t.isSelected||e.isHovered!==t.isHovered||e.lecture.courseId!==t.lecture.courseId||e.lecture.name!==t.lecture.name||e.lecture.professors.length!==t.lecture.professors.length||!e.lecture.professors.every((s,n)=>s.name===t.lecture.professors[n]?.name)||e.timeBlock.begin!==t.timeBlock.begin||e.timeBlock.end!==t.timeBlock.end||e.timeBlock.buildingCode!==t.timeBlock.buildingCode||e.timeBlock.placeName!==t.timeBlock.placeName),se=c.memo(ie,oe),re=(e,t,s,n,r,a,l,u,y,g,b)=>{const w=c.useRef(null),m=[],i=(f,d)=>f.find(h=>h.id===d);for(let f=0;f<e.length;f++){const d=e[f],h=i(W,d.courseId),E=d.classes,k=r==h,$=l==h&&r==null;for(let v=0;v<E.length;v++){const S=E[v],R=S.day*(t+n),A=(Math.floor(S.begin/30)-16)*s;m.push(o("div",{ref:w,style:{position:"absolute",left:R,top:A},onClick:L=>{L.stopPropagation(),h==r?a(null):h!=null&&a(h)},onMouseEnter:()=>{!b&&h!=null&&u(h),g(!0)},onMouseLeave:()=>{u(null)},children:o(se,{lecture:d,timeBlock:S,cellWidth:t,isSelected:k,isHovered:$,cellHeight:s})},`${f}-${v}`))}}return m},j=(e,t,s,n,r)=>{let a=0;for(let l=0;l<e;l++)t.includes(l+r)?a+=n:a+=s;return a},ae=(e=!0,t,s,n,r,a,l,u,y,g)=>{const b=[];return t.forEach((w,m)=>{if(!u.includes(m+g)){let i=null;if(w.forEach((f,d)=>{if(f==e)i===null&&(i=d);else if(i!==null){const h=i*n+a,E=j(m,u,r,y,g)+l*m,k=(d-i)*n-a*2,$=r;b.push(o("div",{style:{position:"absolute",left:E,top:h,width:$,height:k,backgroundColor:s,pointerEvents:"none",borderRadius:"2px",zIndex:e?0:1}},`${m}-${i}`)),i=null}}),i!==null){const f=i*n+a,d=j(m,u,r,y,g)+l*m,h=(w.length-i)*n-a*2,E=r;b.push(o("div",{style:{position:"absolute",left:d,top:f,width:E,height:h,zIndex:e?0:1,backgroundColor:s,pointerEvents:"none",borderRadius:"2px"}},`${m}-${i}`))}}}),b},le=B.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,ce=B.div`
    padding-top: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    gap: ${({cellHeight:e})=>`${e*2-11}px`};
    font-size: 8px;
    line-height: 11px;
`,de=B.div`
    width: ${e=>`${e.width}px`};
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
`,ue=({cellWidth:e=120,lectureSummary:t,setTimeFilter:s,hover:n,setHover:r,selected:a,setSelected:l})=>{const{t:u}=J(),y=5,g=5,b=8,w=c.useRef(null),m=[u("common.days.monday"),u("common.days.tuesday"),u("common.days.wednesday"),u("common.days.thursday"),u("common.days.friday")];Z(t);const i=32,f=24,[d,h]=c.useState(25);c.useEffect(()=>{const p=()=>{h(28.953125)};return window.addEventListener("resize",p),p(),()=>window.removeEventListener("resize",p)},[]);const[E,k]=c.useState(!1),[$,v]=c.useState(null),[S,M]=c.useState(null),[R,_]=c.useState(null),[A,L]=c.useState(!1),[G,U]=c.useState(new Map(Array.from({length:g},(p,x)=>[x,Array(i).fill(null)]))),O=(p,x,z)=>{const H=new Map(Array.from({length:g},(D,q)=>[q,Array(i).fill(null)]));for(let D=p;D<x+1;D++)H.get(z)[D]=!0;return H};return c.useLayoutEffect(()=>{if(w.current&&E&&!A){const p=Math.min($,S),x=Math.max($,S),z=O(p,x,R);U(z)}},[S,$]),T(le,{children:[o(ce,{cellHeight:d,children:Array.from({length:f-b+1},(p,x)=>x+b).map(p=>o("div",{children:p%12||12},p))}),T(C,{direction:"column",gap:0,children:[o(C,{direction:"row",gap:5,children:m.map((p,x)=>p!=="none"&&o(de,{width:p===""?10:e,children:p},x))}),T("div",{ref:w,style:{display:"inline-block",position:"relative",userSelect:"none"},onClick:()=>{l(null)},children:[P(i,g,e,d,y,[],10,0),ae(!0,G,"rgba(229, 76, 101, 0.5)",d,e,2,y,[],0,0),re(t,e,d,y,a,l,n,r,A,L,E)]})]})]})},ge=B(X)`
    width: 856px;

    ${Q.laptop} {
        width: 100%;
    }
`,me=B(C)`
    flex-grow: 1;
    width: 100%;
`,Be=()=>{const{user:e,status:t}=V(),s=c.useRef(null),[n,r]=c.useState(0),[a,l]=c.useState(null),[u,y]=c.useState(null),[g,b]=c.useState(null),[w,m]=c.useState(0),[i,f]=c.useState(W);return c.useEffect(()=>{const d=()=>{s.current&&r(s.current.clientWidth)};return window.addEventListener("resize",d),d(),()=>{window.removeEventListener("resize",d)}},[]),o(ge,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:t==="loading"?o(F,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):t==="idle"?o(F,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):T(me,{direction:"column",align:"stretch",gap:16,ref:s,children:[o(C,{direction:"row",justify:"space-between",align:"center",gap:0,children:o(C,{direction:"row",gap:0,children:o(Y,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:o(F,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:o(F,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:o(K,{children:" "})}})})}),o(ue,{cellWidth:n===0?150:(n-25)/5,lectureSummary:i||[],setTimeFilter:b,hover:u,setHover:y,selected:a,setSelected:l})]})})};export{Be as default};
