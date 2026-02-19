import{j as l,a as T,u as H,F as M}from"./emotion-react-jsx-runtime.browser.esm-JktsOT7n.js";import{r as y,R as A}from"./chunk-EPOLDU6W-BEAJ-C-X.js";import{n as x,F as I}from"./FlexWrapper-DCrQcAvs.js";import{L as W}from"./Lock-D0ZE3bMq.js";import{L as D}from"./LoadingCircle-CHYoVN9o.js";import{I as z,u as L}from"./useIsDevice-CN-oIVbr.js";import{T as B}from"./Typography-D6XAiOzh.js";import{m as j}from"./media-Br0znFol.js";import{a as G}from"./handleLoginLogout-CxpByezM.js";import{u as N}from"./useUserStore-DNxwYBXY.js";import{W as O}from"./Widget-mdwgY_st.js";import{C as q}from"./proxy-DylIEKw0.js";import{c as U}from"./checkOverlap-CEMHVyXY.js";import{u as V}from"./useTranslation-DeTIvMAI.js";import{T as K}from"./Trans-Cd0zy8wW.js";import"./index-DOA-usKG.js";import"./env-GQBQx8pp.js";import"./queryPersister-CyrxHtJ1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"cd321fba6587562a70cc09a78c6f0b605d40bb08"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="5c218a7a-47fd-4b6e-ba2b-cf87f86c7c05",e._sentryDebugIdIdentifier="sentry-dbid-5c218a7a-47fd-4b6e-ba2b-cf87f86c7c05")})()}catch{}function Y(e){return e.forEach((o,a)=>{let i=[];"timeBlocks"in o?i=o.timeBlocks:i=o.classes,i.forEach((r,c)=>{if(r.end>24)return!0})}),!1}const J=(e,o,a,i,r,c,d,u)=>{const h=[],g=e-1,m=o-1;for(let p=0;p<e;p++){const s=[],f=p%2===0,t=p===g;for(let n=0;n<o;n++){const b=!c.includes(n+u),v=n===m;s.push(l("div",{style:{width:b?a:d,height:i,display:"inline-block",textAlign:"center",borderTop:b?f?"1px solid rgba(232, 232, 232, 1)":"1px dashed rgba(232, 232, 232, 1)":void 0,borderBottom:b&&t?"1px solid rgba(232, 232, 232, 1)":void 0,marginRight:v?void 0:r}},n))}h.push(l("div",{style:{display:"flex"},children:s},p))}return h},Q=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(o=>o??"#CCCCCC"),X=x.div`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: var(--tile-width);
    height: var(--tile-height);
    margin-bottom: 2px;
    margin-top: 2px;
    background-color: ${({theme:e,course_id:o,isHighlighted:a,isOverlapped:i})=>i?e.colors.Text.default:a?e.colors.Highlight.default:(()=>{const r=Q(e.colors?.Tile?.TimeTable?.default);return r[o%r.length]})()};
    border-radius: 2px;
    overflow: hidden;
    overflow-wrap: break-word;
    gap: 1px;
    transition: box-shadow 0.1s ease-in-out;
    cursor: ${({hoverSelectBanned:e})=>e?"default":"pointer"};
`,Z=x.span`
    width: 100%;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    line-height: ${({theme:e})=>`${e.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:e})=>e.fonts.Small.fontWeight};
    color: ${({theme:e,isHighlighted:o,isOverlapped:a})=>o||a?"white":e.colors.Text.default};
    display: inline-block;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: normal;
`,S=x.span`
    width: 100%;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    line-height: ${({theme:e})=>`${e.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:e})=>e.fonts.Small.fontWeight};
    color: ${({isHighlighted:e,isOverlapped:o})=>e||o?"rgba(255, 255, 255, 0.6)":"rgba(102, 102, 102, 0.6)"};
    word-wrap: break-word;
    display: inline-block;
    word-break: break-word;
    white-space: normal;
`,P=x.div`
    position: absolute;
    top: 6px;
    right: 4px;
    cursor: pointer;
`,ee=({lecture:e,timeBlock:o,cellWidth:a,cellHeight:i,isSelected:r=!1,isHovered:c=!1,hoverSelectBanned:d,isOverlapped:u=!1,removeFunction:h})=>{const g=r||c||!1,m=(o.end-o.begin)/30,p=y.useMemo(()=>({"--tile-width":`${a}px`,"--tile-height":`${m*i-4}px`}),[a,i,m]);return T(X,{style:p,course_id:e.courseId,isHighlighted:g,isOverlapped:u,hoverSelectBanned:d,children:[h!==void 0&&(r||c)&&l(P,{children:l(z,{size:13,onClick:s=>{s.stopPropagation(),h(e.id)},color:"rgba(255, 255, 255, 0.6)",children:l(q,{})})}),l(Z,{isHighlighted:g,isOverlapped:u,children:e.name+e.subtitle}),l(S,{isHighlighted:g,isOverlapped:u,children:e.professors.map(s=>s.name).join(", ")}),T(S,{isHighlighted:g,isOverlapped:u,children:["(",o.buildingCode,") ",o.roomName]})]})},oe=(e,o)=>!(e.cellWidth!==o.cellWidth||e.cellHeight!==o.cellHeight||e.isSelected!==o.isSelected||e.isHovered!==o.isHovered||e.hoverSelectBanned!==o.hoverSelectBanned||e.isOverlapped!==o.isOverlapped||e.removeFunction!==o.removeFunction||e.lecture.courseId!==o.lecture.courseId||e.lecture.name!==o.lecture.name||e.lecture.professors.length!==o.lecture.professors.length||!e.lecture.professors.every((a,i)=>a.name===o.lecture.professors[i]?.name)||e.timeBlock.begin!==o.timeBlock.begin||e.timeBlock.end!==o.timeBlock.end||e.timeBlock.buildingCode!==o.timeBlock.buildingCode||e.timeBlock.roomName!==o.timeBlock.roomName),te=y.memo(ee,oe),ne=(e,o,a,i,r,c,d,u,h,g,m=!1)=>{const p=[],s=e.concat(r?[r]:[]).concat(d?r?d.filter(t=>t.id!==r.id):d:[]),f=new Map;for(const t of s){if(f.has(t.id))continue;const n=s.some(b=>b.id!==t.id&&U(b.classes,t.classes));f.set(t.id,n)}for(let t=0;t<s.length;t++){const n=s[t],b=n.classes,v=r===n,$=d!==null&&d.some(w=>w.id===n.id),C=f.get(n.id)??!1;for(let w=0;w<b.length;w++){const k=b[w];if(!k)continue;const F=k.day*(o+i),_=(Math.floor(k.begin/30)-16)*a;p.push(l("div",{style:{position:"absolute",left:F,top:_},onClick:E=>{E.stopPropagation(),n===r?c(null):n!==void 0&&c(n)},onTouchStart:E=>{E.stopPropagation()},onTouchEnd:E=>{E.stopPropagation(),n===r?c(null):n!==void 0&&c(n)},onMouseEnter:()=>{n!==void 0&&u([n])},onMouseLeave:()=>{u(null)},children:l(te,{lecture:n,timeBlock:k,cellWidth:o,isSelected:!m&&v,isHovered:!m&&$,hoverSelectBanned:m,isOverlapped:C,cellHeight:a,removeFunction:e.includes(n)?g:void 0})},`${n.id}-${w}-${t}`))}}return p},R=(e,o,a,i,r)=>{let c=0;for(let d=0;d<e;d++)o.includes(d+r)?c+=i:c+=a;return c},ie=(e=!0,o,a,i,r,c,d,u,h,g)=>{const m=[];return o.forEach((p,s)=>{if(!u.includes(s+g)){let f=null;if(p.forEach((t,n)=>{if(t==e)f===null&&(f=n);else if(f!==null){const b=f*i+c,v=R(s,u,r,h,g)+d*s,$=(n-f)*i-c*2,C=r;m.push(l("div",{style:{position:"absolute",left:v,top:b,width:C,height:$,backgroundColor:a,pointerEvents:"none",borderRadius:"2px",zIndex:e?0:1}},`${s}-${f}`)),f=null}}),f!==null){const t=f*i+c,n=R(s,u,r,h,g)+d*s,b=(p.length-f)*i-c*2,v=r;m.push(l("div",{style:{position:"absolute",left:n,top:t,width:v,height:b,zIndex:e?0:1,backgroundColor:a,pointerEvents:"none",borderRadius:"2px"}},`${s}-${f}`))}}}),m},re=926.5,se=32,le=x.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,ae=x.div`
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
`,ce=x.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
    color: ${({theme:e})=>e.colors.Text.default};
`,de=x.div`
    display: inline-block;
    position: relative;
    user-select: none;
`,ue=({cellWidth:e=120,lectureSummary:o,hover:a,setHover:i,selected:r,setSelected:c})=>{const{t:d}=V(),u=5,h=5,g=8,m=y.useRef(null),p=[d("common.days.monday"),d("common.days.tuesday"),d("common.days.wednesday"),d("common.days.thursday"),d("common.days.friday")];Y(o);const s=32,f=24,t=re/se,n=y.useMemo(()=>({"--cell-height":`${t}px`,"--cell-width":`${e}px`,"--col-padding":`${u}px`}),[t,e,u]),[b]=y.useState(new Map(Array.from({length:h},(w,k)=>[k,Array(s).fill(null)]))),v=y.useMemo(()=>J(s,h,e,t,u,[],10,0),[s,h,e,t,u]),$=y.useMemo(()=>ne(o,e,t,u,r,c,a,i,!1,void 0,!0),[o,e,t,u,r,c,a,i]),C=y.useCallback(()=>{c(null)},[c]);return T(le,{style:n,children:[l(ae,{children:Array.from({length:f-g+1},(w,k)=>k+g).map(w=>l("div",{children:w%12||12},w))}),T(I,{direction:"column",gap:0,children:[l(I,{direction:"row",gap:5,children:p.map((w,k)=>w!=="none"&&l(ce,{style:w===""?{width:"10px"}:void 0,children:w},k))}),T(de,{ref:m,onClick:C,children:[v,ie(!0,b,"rgba(229, 76, 101, 0.5)",t,e,2,u,[],0,0),$]})]})]})},fe=A.memo(ue),pe=x(O)`
    width: 856px;

    ${j.laptop} {
        width: 100%;
    }
`,ge=x(I)`
    flex-grow: 1;
    width: 100%;
`,me=x.div`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
`,he=x(I)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,be=x.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,we=x.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`,De=()=>{const e=H(),{user:o,status:a}=N(),i=y.useRef(null),[r,c]=y.useState(0),[d,u]=y.useState(null),[h,g]=y.useState(null),{query:m,setParams:p}=L("GET","/timetables/my-timetable",{enabled:a==="success"}),{query:s}=L("GET","/semesters");y.useEffect(()=>{if(s.data&&s.data.semesters.length>0){const t=s.data.semesters[s.data.semesters.length-1];if(!t)return;p({year:t.year,semester:t.semester})}},[s.data,p]),y.useEffect(()=>{const t=()=>{i.current&&c(i.current.clientWidth)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[i,a]);const f=m.data?.lectures??[];return l(pe,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:a==="loading"?l(D,{}):T(ge,{direction:"column",align:"stretch",gap:16,ref:i,children:[a==="idle"?T(he,{direction:"column",gap:12,align:"center",children:[l(be,{children:l(z,{size:30,color:e.colors.Highlight.default,children:l(W,{})})}),l(we,{onClick:G,children:l(B,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}):l(I,{direction:"row",gap:0,children:l(K,{i18nKey:"main.hisTimeTable",values:{name:o?.name},components:{name:l(B,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:l(B,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:l(M,{children:" "})}})}),l(me,{blur:a==="idle",children:l(fe,{cellWidth:(r-30)/5,lectureSummary:f,hover:h,setHover:g,selected:d,setSelected:u})})]})})};export{De as default};
//# sourceMappingURL=index-f7tiB8m-.js.map
