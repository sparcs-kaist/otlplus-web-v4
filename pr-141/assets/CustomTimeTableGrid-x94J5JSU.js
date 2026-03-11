import{j as n,a as w}from"./emotion-react-jsx-runtime.browser.esm-2CxRnpLU.js";import{r as o}from"./chunk-JZWAC4HX-aHW4xuLB.js";import{s as f,F as d}from"./FlexWrapper-BhlFWUYb.js";import{l as ve,I as re,W as ee}from"./useIsDevice-CLzwlKKs.js";import{T}from"./Typography-DJFtumZv.js";import{I as ne}from"./IconButton-oG89B0vS.js";import{C as oe}from"./proxy-CiKtaPeQ.js";import{u as $e}from"./useTranslation-CTqq_AI7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"0c307a80d292f940648dd587fddb147efe74509f"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c3e964dd-2545-4740-a67b-3fb17946218f",e._sentryDebugIdIdentifier="sentry-dbid-c3e964dd-2545-4740-a67b-3fb17946218f")}catch{}})();const U=f.div`
    width: 100%;
    height: 100%;
    display: grid;
    position: relative;
    grid-template-columns: ${({columns:e})=>e};
    grid-template-rows: ${({rows:e})=>e};
    gap: ${({gap:e})=>e};
    align-items: ${({alignItems:e})=>e??"start"};
    justify-items: ${({justifyItems:e})=>e??"start"};
    align-content: ${({alignContents:e})=>e??"start"};
    justify-content: ${({justifyContents:e})=>e??"start"};
    grid-auto-flow: ${({flow:e})=>e};
    padding: ${({padding:e})=>e??"0px"};
`,ae=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],we=f(d)`
    display: none;
    grid-column: var(--hover-day);
    grid-row: var(--hover-start) / var(--hover-end);
    pointer-events: none;

    [data-is-dragging="true"] &,
    [data-is-dragging="wait"] & {
        display: flex;
    }

    transition: opacity 0.2s ease;

    [data-is-dragging="wait"] & {
        opacity: 0.5;
    }
`,xe=f(d)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function Te(){return n(we,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:n(xe,{direction:"column",gap:0,flex:"1 1 auto"})})}const ke=o.memo(Te),k="lecture-tile",C=e=>ve`
    background: ${e.colors.Highlight.default};

    .lecture-title {
        color: #ffffff;
    }

    .lecture-info {
        color: rgba(255, 255, 255, 0.5);
    }

    .lecture-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,Ee=f(d)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,Ie=f(d)`
    background: ${({theme:e,courseId:t})=>()=>{const a=ae(e.colors.Tile.TimeTable.default);return a[t%a.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        &:hover {
            ${({theme:e})=>C(e)}
        }
    }

    transition: opacity 0.2s ease;

    opacity: 0.5;

    [data-selected-lecture=""] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
        &,
    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        ${({theme:e})=>C(e)}
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,ie=f(d)`
    pointer-events: none;
    visibility: hidden;
    position: absolute;
    top: 4px;
    right: 4px;
    backdrop-filter: blur(16px);

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        display: none !important;
    }
`;function Se({lecture:e,classIdx:t,deleteLecture:a}){const l=e.classes[t];return l==null?null:n(Ee,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:l.day+1,rowStart:l.begin/30-14,rowEnd:l.end/30-14,lectureId:e.id,children:w(Ie,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:k,children:[n(d,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px",children:w(d,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:[n(T,{type:"SmallMedium",className:"lecture-title",color:"TimeTable.title",children:e.name+" "+e.subtitle}),n(T,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:e.professors.map(p=>p.name).join(", ")}),n(T,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:`(${l.buildingCode}) ${l.roomName}`})]})}),n(ie,{direction:"column",flex:"1 1 auto",gap:0,className:"lecture-delete-wrapper",children:n(ne,{styles:{padding:3},onClick:a,children:n(re,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:a?1:0,pointerEvents:a?"auto":"none"},children:n(oe,{})})})})]})})}const Ce=o.memo(Se,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),Me=f(d)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,Ae=f(d)`
    border-radius: 2px;
`;function Ne({day:e,begin:t,end:a}){return n(Me,{direction:"column",gap:0,day:e,begin:t,end:a,align:"stretch",justify:"stretch",children:n(Ae,{direction:"column",gap:0,flex:"1 1 auto"})})}const je=f(d)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,Re=f(d)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{const a=ae(e.colors.Tile.TimeTable.default);return a[t%a.length]}};

    cursor: pointer;

    .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
        &,
    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        ${({theme:e})=>C(e)}
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        &:hover {
            ${({theme:e})=>C(e)}
        }
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        opacity: 1;
    }

    [data-selected-lecture=""] & {
        transform: none;
        box-shadow: none;
        opacity: 1;
    }
`;function Oe({lecture:e,classIdx:t,deleteLecture:a}){const l=e.classes[t];return l==null?null:n(je,{direction:"column",gap:0,align:"stretch",justify:"stretch",padding:"2px",flex:"1 1 auto",lectureId:e.id,children:w(Re,{direction:"column",gap:0,align:"flex-start",padding:"6px",courseId:e.courseId,lectureId:e.id,flex:"1 1 auto",className:k,children:[n(T,{type:"SmallMedium",className:"lecture-title",color:"TimeTable.title",children:e.name+" "+e.subtitle}),n(T,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:e.professors.map(p=>p.name).join(", ")}),n(T,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:`(${l.buildingCode}) ${l.roomName}`}),n(ie,{direction:"column",flex:"1 1 auto",gap:0,className:"lecture-delete-wrapper",children:n(ne,{styles:{padding:3},onClick:a,children:n(re,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:a?1:0,pointerEvents:a?"auto":"none"},children:n(oe,{})})})})]})})}const x=8,Ge=24,le=Array.from({length:Ge-x+1},(e,t)=>x+t),se=le.map(e=>(e%12||12).toString()),y=(se.length-1)*2,D=["monday","tuesday","wednesday","thursday","friday"],N=20,K=.8,B=5,Y=1,He=f(U)`
    z-index: 1;
`,_e=f(d)`
    grid-row: 1 / ${y+5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${y+2};
    }
`,ze=f(d)`
    overflow: hidden;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: -1 / -1;
    display: none;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: ${y+2} / ${y+5};
        display: flex;
    }
`,Le=f(U)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,We=f(d)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${Y}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${Y}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${Y}px solid ${({theme:e})=>e.colors.Line.darker};
    }

    &.bold {
        border-color: ${({theme:e})=>e.colors.Line.darker};
    }

    user-select: none;

    [data-need-time-filter="true"] & {
        pointer-events: auto;
        cursor: pointer;

        @media (hover: hover) {
            :hover div {
                background: rgba(229, 76, 101, 0.2);
            }
        }
    }

    [data-need-time-filter="true"][data-is-dragging="true"] & {
        :hover div {
            background: none;
        }

        cursor: ns-resize;
    }
`,De=o.memo(({dayIdx:e,timeIdx:t,...a})=>n(We,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...a,children:n(d,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Be=f.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${k}:hover
        )
        &
        .${k} {
        ${({theme:e})=>C(e)}
    }
`,te=o.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:a,deleteLecture:l,isGhost:p=!1})=>{const u=o.useCallback(()=>{t?.(e)},[t,e]),E=o.useCallback(()=>{a?.(e)},[a,e]),M=o.useCallback(()=>{l?.(e)},[l,e]);return n(Be,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:u,onPointerDown:E,onTouchMove:u,...p?{"data-ghost":!0}:{},children:e.classes.map((g,v)=>X({day:g.day,begin:g.begin,end:g.end})?n(Ce,{lecture:e,classIdx:v,deleteLecture:l?M:void 0},`${v}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),Ye=f.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${k}:hover) .${k} {
        ${({theme:e})=>C(e)}
    }
`,Ue=o.memo(({overlaps:e})=>n(Ye,{children:e.map((t,a)=>n(Ne,{...t},a))}));function X(e){if(!e)return!1;const t=e.begin/60-x,a=e.end/60-x,{day:l}=e;return ee.Mon<=l&&l<=ee.Fri&&a-t>=.5}const Xe=f.div`
    display: contents;
    z-index: 3;
    overflow: hidden;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${k}:hover
        )
        &
        .${k} {
        ${({theme:e})=>C(e)}
    }
`,Fe=o.memo(({lecture:e,isGhost:t,deleteLecture:a})=>{const l=o.useCallback(()=>{a?.(e)},[a,e]);return e.classes.filter(p=>!X({...p})).length>0?n(Xe,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,children:e.classes.map((p,u)=>{const{day:E,begin:M,end:g}=p;return X({day:E,begin:M,end:g})?null:n(Oe,{lecture:e,classIdx:u,deleteLecture:l},u)})}):null});function qe({lectures:e,cellWidth:t,needTimeFilter:a=!0,timeFilter:l,setTimeFilter:p,needLectureInteraction:u=!0,needLectureDeletable:E=!0,deleteLecture:M,hoveredLectures:g=[],setHoveredLectures:v,selectedLecture:b=null,setSelectedLecture:Q}){const{t:ce}=$e(),O=o.useRef(null),j=o.useRef(null),m=o.useRef(null),R=o.useRef(!1),A=o.useRef(null),h=o.useRef(null),G=o.useRef(null),[I,F]=o.useState(null),[de,ue]=o.useState([]),[V,fe]=o.useState(!1),q=o.useMemo(()=>{const r=[...e,...g,b].filter(c=>c!=null),i=new Map;return r.forEach(c=>{i.set(c.id,c)}),Array.from(i.values())},[e,g,b]),ge=o.useCallback((r,i)=>{const c=document.elementFromPoint(r,i);if(c==null||!c.classList.contains("background-grid-block"))return;const s=parseInt(c.getAttribute("data-time-idx")||"",10),$=parseInt(c.getAttribute("data-day-idx")||"",10);if(s==null||$==null)return;const S=s+2;m.current?.style.setProperty("--hover-day",($+1).toString()),m.current?.style.setProperty("--hover-start",S.toString()),m.current?.style.setProperty("--hover-end",(S+1).toString()),m.current?.setAttribute("data-is-dragging","true"),j.current?.setAttribute("data-is-dragging","true"),R.current=!0,h.current=[s,s+1],G.current=$,A.current=s},[]),H=o.useCallback((r,i)=>{const c=document.elementFromPoint(r,i);if(c==null||!c.classList.contains("background-grid-block"))return;const s=parseInt(c.getAttribute("data-time-idx")||"",10);if(s==null)return;const $=A.current==null?s:A.current,S=s,_=Math.min($,S),z=Math.max($,S),L=_+2,W=z+3;m.current?.style.setProperty("--hover-start",L.toString()),m.current?.style.setProperty("--hover-end",W.toString()),h.current=[_,z+1]},[]),J=o.useCallback(()=>{h.current&&G.current!==null&&p?.({day:G.current,begin:(x+h.current[0]*.5)*60,end:(x+h.current[1]*.5)*60}),h.current&&h.current[1]-h.current[0]>1?(m.current?.setAttribute("data-is-dragging","wait"),j.current?.setAttribute("data-is-dragging","wait")):(h.current&&h.current[1]-h.current[0]<=1||!l)&&(m.current?.setAttribute("data-is-dragging","false"),j.current?.setAttribute("data-is-dragging","false"),p?.(null)),R.current=!1,h.current=null,G.current=null,A.current=null},[l,p]);o.useEffect(()=>{l||(m.current?.setAttribute("data-is-dragging","false"),j.current?.setAttribute("data-is-dragging","false"))},[l]);const pe=o.useCallback(r=>{R.current||!a||ge(r.clientX,r.clientY)},[a]),he=o.useCallback(r=>{!R.current||A.current===null||H(r.clientX,r.clientY)},[H]),me=o.useCallback(r=>{if(!R.current||A.current===null)return;const i=r.touches[0];i!=null&&H(i.clientX,i.clientY)},[H]),be=o.useCallback(r=>{u&&v?.([r])},[v,u]),ye=o.useCallback(r=>{u&&Q?.(i=>i?.id===r.id?null:r)},[Q,u]),Z=o.useCallback(()=>{v?.([]),m.current?.setAttribute("data-is-hovering","false")},[v]),P=o.useCallback(r=>{u&&E&&M?.(r.id)},[E,M]);return o.useEffect(()=>{if(!u)return;const r=g.map(i=>i.id).join(" ");O.current?.setAttribute("data-hovered-lectures",r)},[g,u,e]),o.useEffect(()=>{if(!u)return;const r=b?b.id.toString():"";r!==""?O.current?.setAttribute("data-selected-lecture",r):O.current?.setAttribute("data-selected-lecture","")},[b,u,e]),o.useEffect(()=>{u&&(g[0]&&!e.some(r=>r.id===g[0]?.id)?F(g[0]):b&&!e.some(r=>r.id===b.id)?F(b):F(null),fe(q.some(r=>r.classes.some(i=>!X({...i})))))},[g,b,e,q]),o.useEffect(()=>{if(!u)return;const r=[];I&&I.classes.forEach(i=>{e.forEach(c=>{c.classes.forEach(s=>{if(i.day===s.day){const $=i.begin,S=i.end,_=s.begin,z=s.end,L=Math.max($,_),W=Math.min(S,z);L<W&&r.push({day:i.day,begin:(L/60-x)*2,end:(W/60-x)*2})}})})}),ue(I?r:[])},[I,e,u]),n(d,{direction:"column",gap:8,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{overflow:"hidden"},className:"custom-timetable",ref:O,"data-hovered-lectures":"","data-selected-lecture":"","data-interaction":u,"data-lecture-deletable":E,children:w(U,{columns:"1fr",rows:`${N}px repeat(${y+3}, 1fr)`,gap:"0px",alignItems:"stretch",justifyItems:"stretch",flow:"column",children:[w(_e,{direction:"row",gap:B*2,align:"stretch",justify:"stretch",flex:"1 1 auto",className:V?"has-overflow":"",children:[n(d,{direction:"column",gap:0,align:"stretch",padding:`${N*K}px 0 0 0`,children:n(d,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:se.map((r,i)=>n(T,{color:"Text.dark",children:r},i))})}),w(d,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${N*(1-K)}px 0`,className:"timetable-grid-wrapper",children:[n(He,{columns:`repeat(${D.length}, ${t||"1fr"})`,rows:`${N}px repeat(${y}, 1fr)`,flow:"column",gap:`0px ${B}px`,alignItems:"stretch",justifyItems:"stretch",ref:j,"data-is-dragging":"false","data-need-time-filter":a,...a?{onPointerDown:pe,onPointerMove:he,onPointerUp:J,onPointerLeave:J,onTouchMove:me,onTouchEnd:J}:{},children:D.map((r,i)=>w(o.Fragment,{children:[n(d,{direction:"column",gap:0,align:"center",children:n(T,{type:"Small",color:"Text.dark",children:ce(`common.days.${r}`)})}),Array.from({length:y}).map((c,s)=>n(De,{dayIdx:i,timeIdx:s,className:["background-grid-block",s%2===0?"hour":"half",s===y-1?"last":"",s%2==0&&(le[Math.floor(s/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":i,"data-time-idx":s},`${r}-${s}-memo`))]},`${r}-${i}`))}),w(Le,{columns:`repeat(${D.length}, ${t||"1fr"})`,rows:`${N}px repeat(${y}, 1fr)`,flow:"column",gap:`${Y}px ${B}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${N*(1-K)}px 0`,ref:m,"data-is-dragging":!1,onPointerLeave:Z,onTouchEnd:Z,children:[a&&n(ke,{}),e.map((r,i)=>n(te,{lecture:r,deleteLecture:P,handleLectureTileHover:be,handleLectureTileSelect:ye},`${r.id}-lecture-tile-${i}`)),I&&n(te,{lecture:I,isGhost:!0}),I&&n(Ue,{overlaps:de})]})]})]}),n(ze,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:"0 0 0 18px",className:"overflow-grid-wrapper"+(V?" has-overflow":""),children:n(U,{columns:`repeat(${D.length}, ${t||"1fr"})`,rows:"1fr",gap:`0px ${B}px`,flow:"row",style:{overflow:"hidden"},children:q.map((r,i)=>n(Fe,{lecture:r,isGhost:e.every(c=>c.id!==r.id)&&g.some(c=>c.id===r.id)||b?.id===r.id,deleteLecture:P},`${r.id}-overflow-${i}`))})})]})})}const rt=o.memo(qe,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.timeFilter===t.timeFilter&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{rt as C};
//# sourceMappingURL=CustomTimeTableGrid-x94J5JSU.js.map
