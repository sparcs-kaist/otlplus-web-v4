import{j as o,a as $}from"./emotion-react-jsx-runtime.browser.esm-B-zamEU7.js";import{r as n}from"./chunk-EPOLDU6W-zmgMqoXq.js";import{n as g,F as s}from"./FlexWrapper-Cxmg7ETU.js";import{T}from"./Typography-DoXk6ZeF.js";import{k as le,I as ae}from"./useAPI-B2f8YEht.js";import{I as ie}from"./IconButton-PFiOmA6d.js";import{C as ce}from"./Close-DQmaMuQZ.js";import{u as se}from"./useTranslation-BV_BGx8x.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ada4c7999b6ed5c9c18808775724ee3dffa94ca2"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6a22b751-80ea-4ea0-9142-526f4a6f62ff",e._sentryDebugIdIdentifier="sentry-dbid-6a22b751-80ea-4ea0-9142-526f4a6f62ff")})()}catch{}const X=g.div`
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
`,de=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],ue=g(s)`
    display: none;
    grid-column: var(--hover-day);
    grid-row: var(--hover-start) / var(--hover-end);
    pointer-events: none;

    [data-is-dragging="true"] &,
    [data-is-dragging="wait"] & {
        display: flex;
    }
`,ge=g(s)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function fe(){return o(ue,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:o(ge,{direction:"column",gap:0,flex:"1 1 auto"})})}const pe=n.memo(fe),H="lecture-tile",G=e=>le`
    background: ${e.colors.Highlight.default};

    .lecture-title {
        color: ${e.colors.Text.bright};
    }

    .lecture-info {
        color: rgba(255, 255, 255, 0.5);
    }

    .lecture-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,he=g(s)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
`,me=g(s)`
    background: ${({theme:e,courseId:t})=>()=>{const i=de(e.colors.Tile.TimeTable.default);return i[t%i.length]}};
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
`,be=g(s)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`;function ye({lecture:e,classIdx:t,deleteLecture:i}){const d=e.classes[t];return d==null?null:o(he,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,children:$(me,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:H,children:[o(s,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px 0px 4px 4px",children:$(s,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:[o(T,{type:"Small",color:"Text.dark",className:"lecture-title",children:e.name}),o(T,{type:"Small",color:"Text.lighter",className:"lecture-info",children:e.professors.map(c=>c.name).join(", ")}),o(T,{type:"Small",color:"Text.lighter",className:"lecture-info",children:`(${d.buildingCode}) ${d.roomName}`})]})}),o(be,{direction:"column",flex:"0 1 0",gap:0,align:"flex-end",justify:"flex-start",className:"lecture-delete-wrapper",children:o(ie,{styles:{padding:3},onClick:i,children:o(ae,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)"},children:o(ce,{})})})})]})})}const $e=n.memo(ye,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),A=8,ve=24,F=Array.from({length:ve-A+1},(e,t)=>A+t),q=F.map(e=>(e%12||12).toString()),S=(q.length-1)*2,_=["monday","tuesday","wednesday","thursday","friday"],w=20,N=.8,D=5,L=1,xe=g(X)`
    z-index: 1;
`,ke=g(X)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,we=g(s)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${L}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${L}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${L}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,Te=n.memo(({dayIdx:e,timeIdx:t,...i})=>o(we,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...i,children:o(s,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Ce=g.div`
    display: contents;

    &:has(.${H}:hover) .${H} {
        ${({theme:e})=>G(e)}
    }
`,U=n.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:i,deleteLecture:d})=>{const c=n.useCallback(()=>{t?.(e)},[t,e]),v=n.useCallback(()=>{i?.(e)},[i,e]),C=n.useCallback(()=>{d?.(e)},[d,e]);return o(Ce,{lectureId:e.id,onPointerEnter:c,onPointerDown:v,onTouchMove:c,children:e.classes.map((p,h)=>o($e,{lecture:e,classIdx:h,deleteLecture:C},`${h}-lecture`))})},(e,t)=>e.lecture.id===t.lecture.id);function Ee({lectures:e,cellWidth:t,needTimeFilter:i=!0,setTimeFilter:d,needLectureInteraction:c=!0,needLectureDeletable:v=!0,deleteLecture:C,hoveredLectures:p=[],setHoveredLectures:h,selectedLecture:M=null,setSelectedLecture:z}){const{t:J}=se(),R=n.useRef(null),u=n.useRef(null),x=n.useRef(!1),m=n.useRef(null),b=n.useRef(null),E=n.useRef(null),[B,K]=n.useState(null),Q=n.useCallback((r,l)=>{const f=document.elementFromPoint(r,l);if(f==null||!f.classList.contains("background-grid-block"))return;const a=parseInt(f.getAttribute("data-time-idx")||"",10),y=parseInt(f.getAttribute("data-day-idx")||"",10);if(a==null||y==null)return;const k=a+2;u.current?.style.setProperty("--hover-day",(y+1).toString()),u.current?.style.setProperty("--hover-start",k.toString()),u.current?.style.setProperty("--hover-end",(k+1).toString()),u.current?.setAttribute("data-is-dragging","true"),R.current?.setAttribute("data-is-dragging","true"),x.current=!0,b.current=[a,a+1],E.current=y,m.current=a},[]),I=n.useCallback((r,l)=>{const f=document.elementFromPoint(r,l);if(f==null||!f.classList.contains("background-grid-block"))return;const a=parseInt(f.getAttribute("data-time-idx")||"",10);if(a==null)return;const y=m.current==null?a:m.current,k=a,O=Math.min(y,k),Y=Math.max(y,k),ne=O+2,oe=Y+3;u.current?.style.setProperty("--hover-start",ne.toString()),u.current?.style.setProperty("--hover-end",oe.toString()),b.current=[O,Y+1]},[]),j=n.useCallback(()=>{u.current?.setAttribute("data-is-dragging","false"),R.current?.setAttribute("data-is-dragging","false"),b.current&&E.current!==null&&d?.({day:E.current,begin:(A+b.current[0]*.5)*60,end:(A+b.current[1]*.5)*60}),x.current=!1,b.current=null,E.current=null,m.current=null},[d]),V=n.useCallback(r=>{x.current||!i||Q(r.clientX,r.clientY)},[i]),Z=n.useCallback(r=>{!x.current||m.current===null||I(r.clientX,r.clientY)},[I]),P=n.useCallback(r=>{if(!x.current||m.current===null)return;const l=r.touches[0];l!=null&&I(l.clientX,l.clientY)},[I]),ee=n.useCallback(r=>{c&&h?.([r])},[h,c]),te=n.useCallback(r=>{c&&z?.(l=>l?.id===r.id?null:r)},[z,c]),W=n.useCallback(()=>{h?.([]),u.current?.setAttribute("data-is-hovering","false")},[h]),re=n.useCallback(r=>{c&&v&&C?.(r.id)},[v,C]);return n.useEffect(()=>{if(!c)return;K?.(p[0]&&p.map(l=>l.id).includes(p[0]?.id)?p[0]:null);const r=p.map(l=>l.id).join(" ");u.current?.setAttribute("data-hovered-lectures",r)},[p,c,e]),n.useEffect(()=>{if(!c)return;const r=M?M.id.toString():"";r!==""?u.current?.setAttribute("data-selected-lecture",r):u.current?.setAttribute("data-selected-lecture","")},[M,c]),$(s,{direction:"row",gap:D*2,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{userSelect:"none"},children:[o(s,{direction:"column",gap:0,align:"stretch",padding:`${w*N}px 0 0 0`,children:o(s,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:q.map((r,l)=>o(T,{color:"Text.dark",children:r},l))})}),$(s,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${w*(1-N)}px 0`,className:"timetable-grid-wrapper",children:[o(xe,{columns:`repeat(${_.length}, ${t||"1fr"})`,rows:`${w}px repeat(${S}, 1fr)`,flow:"column",gap:`0px ${D}px`,alignItems:"stretch",justifyItems:"stretch",ref:R,"data-is-dragging":"false","data-need-time-filter":i,...i?{onPointerDown:V,onPointerMove:Z,onPointerUp:j,onPointerLeave:j,onTouchMove:P,onTouchEnd:j}:{},children:_.map((r,l)=>$(n.Fragment,{children:[o(s,{direction:"column",gap:0,align:"center",children:o(T,{type:"Small",color:"Text.dark",children:J(`common.days.${r}`)})}),Array.from({length:S}).map((f,a)=>o(Te,{dayIdx:l,timeIdx:a,className:["background-grid-block",a%2===0?"hour":"half",a===S-1?"last":"",a%2==0&&(F[Math.floor(a/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":l,"data-time-idx":a},`${r}-${a}-memo`))]},r))}),$(ke,{columns:`repeat(${_.length}, ${t||"1fr"})`,rows:`${w}px repeat(${S}, 1fr)`,flow:"column",gap:`${L}px ${D}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${w*(1-N)}px 0`,ref:u,"data-interaction":c,"data-lecture-deletable":v,"data-is-dragging":!1,"data-hovered-lectures":"","data-selected-lecture":"",onPointerLeave:W,onTouchEnd:W,children:[i&&o(pe,{}),e.map((r,l)=>o(U,{lecture:r,deleteLecture:re,handleLectureTileHover:ee,handleLectureTileSelect:te},`${r.id}-lecture-tile-${l}`)),B&&o(U,{lecture:B})]})]})]})}const Ne=n.memo(Ee,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{Ne as C};
//# sourceMappingURL=CustomTimeTableGrid-CbrqFuMj.js.map
