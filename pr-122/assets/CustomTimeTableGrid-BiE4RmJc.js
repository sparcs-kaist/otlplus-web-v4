import{j as o,a as k,T as ce}from"./emotion-react-jsx-runtime.browser.esm-CFg98ttf.js";import{r as n}from"./chunk-JZWAC4HX-HTfKbbyO.js";import{s as g,F as s}from"./FlexWrapper-oFQ69W9K.js";import{l as se,I as de}from"./useIsDevice-LaJJ1A2n.js";import{T as A}from"./Typography-B5UxCzV4.js";import{I as ue}from"./IconButton-BtC53mu3.js";import{l as ge}from"./index-DydePqnj.js";import{C as fe}from"./proxy-_NuRKMEj.js";import{u as pe}from"./useTranslation-DmBL48f1.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"51e334b0b8935be7c5f3bb6692a634a3ea9cf50a"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a456f52e-1122-432a-bfb2-2b67ff4c1af2",e._sentryDebugIdIdentifier="sentry-dbid-a456f52e-1122-432a-bfb2-2b67ff4c1af2")}catch{}})();const K=g.div`
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
`,he=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],me=g(s)`
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
`,be=g(s)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function ye(){return o(me,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:o(be,{direction:"column",gap:0,flex:"1 1 auto"})})}const ve=n.memo(ye),U="lecture-tile",X=e=>se`
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
`,$e=g(s)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,xe=g(s)`
    background: ${({theme:e,courseId:t})=>()=>{const i=he(e.colors.Tile.TimeTable.default);return i[t%i.length]}};
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
            ${({theme:e})=>X(e)}
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

    .timetable-grid-wrapper:not(:hover)
        [data-hovered-lectures~="${({lectureId:e})=>e}"]
        &,
    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        ${({theme:e})=>X(e)}
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,ke=g(s)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`;function Te({lecture:e,classIdx:t,deleteLecture:i}){const d=e.classes[t];return d==null?null:o($e,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,lectureId:e.id,children:k(xe,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:U,children:[o(s,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px 0px 4px 4px",children:o(s,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:k(ce,{theme:ge,children:[k(A,{type:"Small",color:"Text.dark",className:"lecture-title",children:[e.name,e.subtitle]}),o(A,{type:"Small",color:"Text.lighter",className:"lecture-info",children:e.professors.map(m=>m.name).join(", ")}),o(A,{type:"Small",color:"Text.lighter",className:"lecture-info",children:`(${d.buildingCode}) ${d.roomName}`})]})})}),o(ke,{direction:"column",flex:"0 1 0",gap:0,align:"flex-end",justify:"flex-start",className:"lecture-delete-wrapper",children:o(ue,{styles:{padding:3},onClick:i,children:o(de,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:i?1:0,pointerEvents:i?"auto":"none"},children:o(fe,{})})})})]})})}const we=n.memo(Te,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),Ee=g(s)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,Se=g(s)`
    border-radius: 2px;
`;function Ie({day:e,begin:t,end:i}){return o(Ee,{direction:"column",gap:0,day:e,begin:t,end:i,align:"stretch",justify:"stretch",children:o(Se,{direction:"column",gap:0,flex:"1 1 auto"})})}const w=8,Ce=24,Q=Array.from({length:Ce-w+1},(e,t)=>w+t),V=Q.map(e=>(e%12||12).toString()),D=(V.length-1)*2,W=["monday","tuesday","wednesday","thursday","friday"],C=20,B=.8,Y=5,G=1,Ae=g(K)`
    z-index: 1;
`,Me=g(K)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,Re=g(s)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${G}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${G}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${G}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,je=n.memo(({dayIdx:e,timeIdx:t,...i})=>o(Re,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...i,children:o(s,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Le=g.div`
    display: contents;

    &:has(.${U}:hover) .${U} {
        ${({theme:e})=>X(e)}
    }
`,J=n.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:i,deleteLecture:d,isGhost:m=!1})=>{const c=n.useCallback(()=>{t?.(e)},[t,e]),E=n.useCallback(()=>{i?.(e)},[i,e]),M=n.useCallback(()=>{d?.(e)},[d,e]);return o(Le,{lectureId:e.id,onPointerEnter:c,onPointerDown:E,onTouchMove:c,...m?{"data-ghost":!0}:{},children:e.classes.map((b,y)=>o(we,{lecture:e,classIdx:y,deleteLecture:d?M:void 0},`${y}-lecture`))})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),_e=g.div`
    display: contents;
    z-index: 4;
`,He=n.memo(({overlaps:e})=>o(_e,{children:e.map((t,i)=>o(Ie,{...t},i))}));function Ne({lectures:e,cellWidth:t,needTimeFilter:i=!0,timeFilter:d,setTimeFilter:m,needLectureInteraction:c=!0,needLectureDeletable:E=!0,deleteLecture:M,hoveredLectures:b=[],setHoveredLectures:y,selectedLecture:v=null,setSelectedLecture:q}){const{t:Z}=pe(),S=n.useRef(null),u=n.useRef(null),I=n.useRef(!1),T=n.useRef(null),f=n.useRef(null),R=n.useRef(null),[$,z]=n.useState(null),[P,ee]=n.useState([]),te=n.useCallback((r,a)=>{const p=document.elementFromPoint(r,a);if(p==null||!p.classList.contains("background-grid-block"))return;const l=parseInt(p.getAttribute("data-time-idx")||"",10),h=parseInt(p.getAttribute("data-day-idx")||"",10);if(l==null||h==null)return;const x=l+2;u.current?.style.setProperty("--hover-day",(h+1).toString()),u.current?.style.setProperty("--hover-start",x.toString()),u.current?.style.setProperty("--hover-end",(x+1).toString()),u.current?.setAttribute("data-is-dragging","true"),S.current?.setAttribute("data-is-dragging","true"),I.current=!0,f.current=[l,l+1],R.current=h,T.current=l},[]),j=n.useCallback((r,a)=>{const p=document.elementFromPoint(r,a);if(p==null||!p.classList.contains("background-grid-block"))return;const l=parseInt(p.getAttribute("data-time-idx")||"",10);if(l==null)return;const h=T.current==null?l:T.current,x=l,L=Math.min(h,x),_=Math.max(h,x),H=L+2,N=_+3;u.current?.style.setProperty("--hover-start",H.toString()),u.current?.style.setProperty("--hover-end",N.toString()),f.current=[L,_+1]},[]),O=n.useCallback(()=>{f.current&&R.current!==null&&m?.({day:R.current,begin:(w+f.current[0]*.5)*60,end:(w+f.current[1]*.5)*60}),f.current&&f.current[1]-f.current[0]>1?(u.current?.setAttribute("data-is-dragging","wait"),S.current?.setAttribute("data-is-dragging","wait")):(f.current&&f.current[1]-f.current[0]<=1||!d)&&(u.current?.setAttribute("data-is-dragging","false"),S.current?.setAttribute("data-is-dragging","false"),m?.(null)),I.current=!1,f.current=null,R.current=null,T.current=null},[d,m]);n.useEffect(()=>{d||(u.current?.setAttribute("data-is-dragging","false"),S.current?.setAttribute("data-is-dragging","false"))},[d]);const re=n.useCallback(r=>{I.current||!i||te(r.clientX,r.clientY)},[i]),ne=n.useCallback(r=>{!I.current||T.current===null||j(r.clientX,r.clientY)},[j]),oe=n.useCallback(r=>{if(!I.current||T.current===null)return;const a=r.touches[0];a!=null&&j(a.clientX,a.clientY)},[j]),ae=n.useCallback(r=>{c&&y?.([r])},[y,c]),ie=n.useCallback(r=>{c&&q?.(a=>a?.id===r.id?null:r)},[q,c]),F=n.useCallback(()=>{y?.([]),u.current?.setAttribute("data-is-hovering","false")},[y]),le=n.useCallback(r=>{c&&E&&M?.(r.id)},[E,M]);return n.useEffect(()=>{if(!c)return;const r=b.map(a=>a.id).join(" ");u.current?.setAttribute("data-hovered-lectures",r)},[b,c,e]),n.useEffect(()=>{if(!c)return;const r=v?v.id.toString():"";r!==""?u.current?.setAttribute("data-selected-lecture",r):u.current?.setAttribute("data-selected-lecture","")},[v,c,e]),n.useEffect(()=>{c&&(b[0]&&!e.some(r=>r.id===b[0]?.id)?z(b[0]):v&&!e.some(r=>r.id===v.id)?z(v):z(null))},[b,v,e]),n.useEffect(()=>{if(!c)return;const r=[];$&&$.classes.forEach(a=>{e.forEach(p=>{p.classes.forEach(l=>{if(a.day===l.day){const h=a.begin,x=a.end,L=l.begin,_=l.end,H=Math.max(h,L),N=Math.min(x,_);H<N&&r.push({day:a.day,begin:(H/60-w)*2,end:(N/60-w)*2})}})})}),ee($?r:[])},[$,e,c]),k(s,{direction:"row",gap:Y*2,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{userSelect:"none"},children:[o(s,{direction:"column",gap:0,align:"stretch",padding:`${C*B}px 0 0 0`,children:o(s,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:V.map((r,a)=>o(A,{color:"Text.dark",children:r},a))})}),k(s,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${C*(1-B)}px 0`,className:"timetable-grid-wrapper",children:[o(Ae,{columns:`repeat(${W.length}, ${t||"1fr"})`,rows:`${C}px repeat(${D}, 1fr)`,flow:"column",gap:`0px ${Y}px`,alignItems:"stretch",justifyItems:"stretch",ref:S,"data-is-dragging":"false","data-need-time-filter":i,...i?{onPointerDown:re,onPointerMove:ne,onPointerUp:O,onPointerLeave:O,onTouchMove:oe,onTouchEnd:O}:{},children:W.map((r,a)=>k(n.Fragment,{children:[o(s,{direction:"column",gap:0,align:"center",children:o(A,{type:"Small",color:"Text.dark",children:Z(`common.days.${r}`)})}),Array.from({length:D}).map((p,l)=>o(je,{dayIdx:a,timeIdx:l,className:["background-grid-block",l%2===0?"hour":"half",l===D-1?"last":"",l%2==0&&(Q[Math.floor(l/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":a,"data-time-idx":l},`${r}-${l}-memo`))]},r))}),k(Me,{columns:`repeat(${W.length}, ${t||"1fr"})`,rows:`${C}px repeat(${D}, 1fr)`,flow:"column",gap:`${G}px ${Y}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${C*(1-B)}px 0`,ref:u,"data-interaction":c,"data-lecture-deletable":E,"data-is-dragging":!1,"data-hovered-lectures":"","data-selected-lecture":"",onPointerLeave:F,onTouchEnd:F,children:[i&&o(ve,{}),e.map((r,a)=>o(J,{lecture:r,deleteLecture:le,handleLectureTileHover:ae,handleLectureTileSelect:ie},`${r.id}-lecture-tile-${a}`)),$&&o(J,{lecture:$,isGhost:!0}),$&&o(He,{overlaps:P})]})]})]})}const qe=n.memo(Ne,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.timeFilter===t.timeFilter&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{qe as C};
//# sourceMappingURL=CustomTimeTableGrid-BiE4RmJc.js.map
