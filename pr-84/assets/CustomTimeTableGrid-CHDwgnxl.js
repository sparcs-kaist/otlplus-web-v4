import{j as o,a as m,T as le}from"./emotion-react-jsx-runtime.browser.esm-B-tD1Xnt.js";import{r as n}from"./chunk-JZWAC4HX-Blt-YpAy.js";import{s as g,F as s}from"./FlexWrapper-D6pJsd3i.js";import{T as w}from"./Typography-B-UqyeC-.js";import{l as ae,I as ie}from"./useIsDevice-nEA4Y7sZ.js";import{I as ce}from"./IconButton-nFOb3o38.js";import{l as se}from"./index-CWYRNTEY.js";import{C as de}from"./proxy-BEsrTD1P.js";import{u as ue}from"./useTranslation-CnH1HxeR.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"9974839f2b63c8af5735056dc1e5f848583a0df3"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="24fcb496-9732-4c16-b162-77c09e4500e9",e._sentryDebugIdIdentifier="sentry-dbid-24fcb496-9732-4c16-b162-77c09e4500e9")}catch{}})();const J=g.div`
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
`,ge=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],fe=g(s)`
    display: none;
    grid-column: var(--hover-day);
    grid-row: var(--hover-start) / var(--hover-end);
    pointer-events: none;

    [data-is-dragging="true"] &,
    [data-is-dragging="wait"] & {
        display: flex;
    }
`,he=g(s)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function pe(){return o(fe,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:o(he,{direction:"column",gap:0,flex:"1 1 auto"})})}const me=n.memo(pe),D="lecture-tile",G=e=>ae`
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
`,be=g(s)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
`,ye=g(s)`
    background: ${({theme:e,courseId:t})=>()=>{const i=ge(e.colors.Tile.TimeTable.default);return i[t%i.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        &:hover {
            ${({theme:e})=>G(e)}
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    .timetable-grid-wrapper:not(:hover)
        [data-hovered-lectures~="${({lectureId:e})=>e}"]
        &,
    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        ${({theme:e})=>G(e)}
    }
`,ve=g(s)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`;function $e({lecture:e,classIdx:t,deleteLecture:i}){const d=e.classes[t];return d==null?null:o(be,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,children:m(ye,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:D,children:[o(s,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px 0px 4px 4px",children:o(s,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:m(le,{theme:se,children:[m(w,{type:"Small",color:"Text.dark",className:"lecture-title",children:[e.name,e.subtitle]}),o(w,{type:"Small",color:"Text.lighter",className:"lecture-info",children:e.professors.map(c=>c.name).join(", ")}),o(w,{type:"Small",color:"Text.lighter",className:"lecture-info",children:`(${d.buildingCode}) ${d.roomName}`})]})})}),o(ve,{direction:"column",flex:"0 1 0",gap:0,align:"flex-end",justify:"flex-start",className:"lecture-delete-wrapper",children:o(ce,{styles:{padding:3},onClick:i,children:o(ie,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)"},children:o(de,{})})})})]})})}const ke=n.memo($e,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),A=8,xe=24,K=Array.from({length:xe-A+1},(e,t)=>A+t),Q=K.map(e=>(e%12||12).toString()),I=(Q.length-1)*2,_=["monday","tuesday","wednesday","thursday","friday"],T=20,H=.8,N=5,S=1,Te=g(J)`
    z-index: 1;
`,we=g(J)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,Ce=g(s)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${S}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${S}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${S}px solid ${({theme:e})=>e.colors.Line.darker};
    }

    &.bold {
        border-color: ${({theme:e})=>e.colors.Line.darker};
    }

    user-select: none;

    [data-need-time-filter="true"] & {
        pointer-events: auto;
        cursor: pointer;

        :hover div {
            background: rgba(229, 76, 101, 0.2);
        }
    }

    [data-need-time-filter="true"][data-is-dragging="true"] & {
        :hover div {
            background: none;
        }

        cursor: ns-resize;
    }
`,Ee=n.memo(({dayIdx:e,timeIdx:t,...i})=>o(Ce,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...i,children:o(s,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Le=g.div`
    display: contents;

    &:has(.${D}:hover) .${D} {
        ${({theme:e})=>G(e)}
    }
`,q=n.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:i,deleteLecture:d})=>{const c=n.useCallback(()=>{t?.(e)},[t,e]),$=n.useCallback(()=>{i?.(e)},[i,e]),C=n.useCallback(()=>{d?.(e)},[d,e]);return o(Le,{lectureId:e.id,onPointerEnter:c,onPointerDown:$,onTouchMove:c,children:e.classes.map((h,p)=>o(ke,{lecture:e,classIdx:p,deleteLecture:C},`${p}-lecture`))})},(e,t)=>e.lecture.id===t.lecture.id&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture);function Ie({lectures:e,cellWidth:t,needTimeFilter:i=!0,setTimeFilter:d,needLectureInteraction:c=!0,needLectureDeletable:$=!0,deleteLecture:C,hoveredLectures:h=[],setHoveredLectures:p,selectedLecture:M=null,setSelectedLecture:z}){const{t:V}=ue(),R=n.useRef(null),u=n.useRef(null),k=n.useRef(!1),b=n.useRef(null),y=n.useRef(null),E=n.useRef(null),[B,Z]=n.useState(null),P=n.useCallback((r,l)=>{const f=document.elementFromPoint(r,l);if(f==null||!f.classList.contains("background-grid-block"))return;const a=parseInt(f.getAttribute("data-time-idx")||"",10),v=parseInt(f.getAttribute("data-day-idx")||"",10);if(a==null||v==null)return;const x=a+2;u.current?.style.setProperty("--hover-day",(v+1).toString()),u.current?.style.setProperty("--hover-start",x.toString()),u.current?.style.setProperty("--hover-end",(x+1).toString()),u.current?.setAttribute("data-is-dragging","true"),R.current?.setAttribute("data-is-dragging","true"),k.current=!0,y.current=[a,a+1],E.current=v,b.current=a},[]),L=n.useCallback((r,l)=>{const f=document.elementFromPoint(r,l);if(f==null||!f.classList.contains("background-grid-block"))return;const a=parseInt(f.getAttribute("data-time-idx")||"",10);if(a==null)return;const v=b.current==null?a:b.current,x=a,X=Math.min(v,x),F=Math.max(v,x),ne=X+2,oe=F+3;u.current?.style.setProperty("--hover-start",ne.toString()),u.current?.style.setProperty("--hover-end",oe.toString()),y.current=[X,F+1]},[]),j=n.useCallback(()=>{u.current?.setAttribute("data-is-dragging","false"),R.current?.setAttribute("data-is-dragging","false"),y.current&&E.current!==null&&d?.({day:E.current,begin:(A+y.current[0]*.5)*60,end:(A+y.current[1]*.5)*60}),k.current=!1,y.current=null,E.current=null,b.current=null},[d]),ee=n.useCallback(r=>{k.current||!i||P(r.clientX,r.clientY)},[i]),te=n.useCallback(r=>{!k.current||b.current===null||L(r.clientX,r.clientY)},[L]),re=n.useCallback(r=>{if(!k.current||b.current===null)return;const l=r.touches[0];l!=null&&L(l.clientX,l.clientY)},[L]),W=n.useCallback(r=>{c&&p?.([r])},[p,c]),O=n.useCallback(r=>{c&&z?.(l=>l?.id===r.id?null:r)},[z,c]),Y=n.useCallback(()=>{p?.([]),u.current?.setAttribute("data-is-hovering","false")},[p]),U=n.useCallback(r=>{c&&$&&C?.(r.id)},[$,C]);return n.useEffect(()=>{if(!c)return;Z?.(h[0]&&h.map(l=>l.id).includes(h[0]?.id)?h[0]:null);const r=h.map(l=>l.id).join(" ");u.current?.setAttribute("data-hovered-lectures",r)},[h,c,e]),n.useEffect(()=>{if(!c)return;const r=M?M.id.toString():"";r!==""?u.current?.setAttribute("data-selected-lecture",r):u.current?.setAttribute("data-selected-lecture","")},[M,c]),m(s,{direction:"row",gap:N*2,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{userSelect:"none"},children:[o(s,{direction:"column",gap:0,align:"stretch",padding:`${T*H}px 0 0 0`,children:o(s,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:Q.map((r,l)=>o(w,{color:"Text.dark",children:r},l))})}),m(s,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${T*(1-H)}px 0`,className:"timetable-grid-wrapper",children:[o(Te,{columns:`repeat(${_.length}, ${t||"1fr"})`,rows:`${T}px repeat(${I}, 1fr)`,flow:"column",gap:`0px ${N}px`,alignItems:"stretch",justifyItems:"stretch",ref:R,"data-is-dragging":"false","data-need-time-filter":i,...i?{onPointerDown:ee,onPointerMove:te,onPointerUp:j,onPointerLeave:j,onTouchMove:re,onTouchEnd:j}:{},children:_.map((r,l)=>m(n.Fragment,{children:[o(s,{direction:"column",gap:0,align:"center",children:o(w,{type:"Small",color:"Text.dark",children:V(`common.days.${r}`)})}),Array.from({length:I}).map((f,a)=>o(Ee,{dayIdx:l,timeIdx:a,className:["background-grid-block",a%2===0?"hour":"half",a===I-1?"last":"",a%2==0&&(K[Math.floor(a/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":l,"data-time-idx":a},`${r}-${a}-memo`))]},r))}),m(we,{columns:`repeat(${_.length}, ${t||"1fr"})`,rows:`${T}px repeat(${I}, 1fr)`,flow:"column",gap:`${S}px ${N}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${T*(1-H)}px 0`,ref:u,"data-interaction":c,"data-lecture-deletable":$,"data-is-dragging":!1,"data-hovered-lectures":"","data-selected-lecture":"",onPointerLeave:Y,onTouchEnd:Y,children:[i&&o(me,{}),e.map((r,l)=>o(q,{lecture:r,deleteLecture:U,handleLectureTileHover:W,handleLectureTileSelect:O},`${r.id}-lecture-tile-${l}`)),B&&o(q,{lecture:B,deleteLecture:U,handleLectureTileHover:W,handleLectureTileSelect:O})]})]})]})}const Ge=n.memo(Ie,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{Ge as C};
//# sourceMappingURL=CustomTimeTableGrid-CHDwgnxl.js.map
