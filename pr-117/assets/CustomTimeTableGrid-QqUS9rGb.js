import{j as o,a as $,T as le}from"./emotion-react-jsx-runtime.browser.esm-4A1UaGAk.js";import{r as n}from"./chunk-JZWAC4HX-BGBfDNwI.js";import{s as u,F as s}from"./FlexWrapper-r8lR79K0.js";import{l as ce,I as se}from"./useIsDevice-DOkyWFj4.js";import{T as C}from"./Typography-Du-0Hqo4.js";import{I as de}from"./IconButton-r-py-soc.js";import{l as ue}from"./index-DVkifMhh.js";import{C as ge}from"./proxy-g-zTl8t6.js";import{u as fe}from"./useTranslation-02D_bsBn.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f83b0dbedf23c17e51796e13771c89e224259c70"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b7ce222e-11e2-4ca1-a066-dccc8c05e85f",e._sentryDebugIdIdentifier="sentry-dbid-b7ce222e-11e2-4ca1-a066-dccc8c05e85f")}catch{}})();const J=u.div`
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
`,pe=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],he=u(s)`
    display: none;
    grid-column: var(--hover-day);
    grid-row: var(--hover-start) / var(--hover-end);
    pointer-events: none;

    [data-is-dragging="true"] &,
    [data-is-dragging="wait"] & {
        display: flex;
    }
`,me=u(s)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function be(){return o(he,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:o(me,{direction:"column",gap:0,flex:"1 1 auto"})})}const ye=n.memo(be),Y="lecture-tile",U=e=>ce`
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
`,ve=u(s)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
`,$e=u(s)`
    background: ${({theme:e,courseId:t})=>()=>{const i=pe(e.colors.Tile.TimeTable.default);return i[t%i.length]}};
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
            ${({theme:e})=>U(e)}
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    .timetable-grid-wrapper:not(:hover)
        [data-hovered-lectures~="${({lectureId:e})=>e}"]
        &,
    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        ${({theme:e})=>U(e)}
    }
`,xe=u(s)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`;function ke({lecture:e,classIdx:t,deleteLecture:i}){const d=e.classes[t];return d==null?null:o(ve,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,children:$($e,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:Y,children:[o(s,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px 0px 4px 4px",children:o(s,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:$(le,{theme:ue,children:[$(C,{type:"Small",color:"Text.dark",className:"lecture-title",children:[e.name,e.subtitle]}),o(C,{type:"Small",color:"Text.lighter",className:"lecture-info",children:e.professors.map(c=>c.name).join(", ")}),o(C,{type:"Small",color:"Text.lighter",className:"lecture-info",children:`(${d.buildingCode}) ${d.roomName}`})]})})}),o(xe,{direction:"column",flex:"0 1 0",gap:0,align:"flex-end",justify:"flex-start",className:"lecture-delete-wrapper",children:o(de,{styles:{padding:3},onClick:i,children:o(se,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:i?1:0,pointerEvents:i?"auto":"none"},children:o(ge,{})})})})]})})}const Te=n.memo(ke,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),Ee=u(s)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,we=u(s)`
    border-radius: 2px;
`;function Se({day:e,begin:t,end:i}){return o(Ee,{direction:"column",gap:0,day:e,begin:t,end:i,align:"stretch",justify:"stretch",children:o(we,{direction:"column",gap:0,flex:"1 1 auto"})})}const T=8,Ce=24,K=Array.from({length:Ce-T+1},(e,t)=>T+t),Q=K.map(e=>(e%12||12).toString()),H=(Q.length-1)*2,O=["monday","tuesday","wednesday","thursday","friday"],S=20,W=.8,B=5,N=1,Ie=u(J)`
    z-index: 1;
`,Me=u(J)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,Ae=u(s)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${N}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${N}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${N}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,Re=n.memo(({dayIdx:e,timeIdx:t,...i})=>o(Ae,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...i,children:o(s,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),je=u.div`
    display: contents;

    &:has(.${Y}:hover) .${Y} {
        ${({theme:e})=>U(e)}
    }
`,q=n.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:i,deleteLecture:d,isGhost:c=!1})=>{const x=n.useCallback(()=>{t?.(e)},[t,e]),I=n.useCallback(()=>{i?.(e)},[i,e]),h=n.useCallback(()=>{d?.(e)},[d,e]);return o(je,{lectureId:e.id,onPointerEnter:x,onPointerDown:I,onTouchMove:x,...c?{"data-ghost":!0}:{},children:e.classes.map((E,p)=>o(Te,{lecture:e,classIdx:p,deleteLecture:d?h:void 0},`${p}-lecture`))})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),Le=u.div`
    display: contents;
    z-index: 4;
`,_e=n.memo(({overlaps:e})=>o(Le,{children:e.map((t,i)=>o(Se,{...t},i))}));function He({lectures:e,cellWidth:t,needTimeFilter:i=!0,setTimeFilter:d,needLectureInteraction:c=!0,needLectureDeletable:x=!0,deleteLecture:I,hoveredLectures:h=[],setHoveredLectures:E,selectedLecture:p=null,setSelectedLecture:X}){const{t:V}=fe(),D=n.useRef(null),g=n.useRef(null),w=n.useRef(!1),k=n.useRef(null),m=n.useRef(null),M=n.useRef(null),[y,G]=n.useState(null),[Z,P]=n.useState([]),ee=n.useCallback((r,a)=>{const f=document.elementFromPoint(r,a);if(f==null||!f.classList.contains("background-grid-block"))return;const l=parseInt(f.getAttribute("data-time-idx")||"",10),b=parseInt(f.getAttribute("data-day-idx")||"",10);if(l==null||b==null)return;const v=l+2;g.current?.style.setProperty("--hover-day",(b+1).toString()),g.current?.style.setProperty("--hover-start",v.toString()),g.current?.style.setProperty("--hover-end",(v+1).toString()),g.current?.setAttribute("data-is-dragging","true"),D.current?.setAttribute("data-is-dragging","true"),w.current=!0,m.current=[l,l+1],M.current=b,k.current=l},[]),A=n.useCallback((r,a)=>{const f=document.elementFromPoint(r,a);if(f==null||!f.classList.contains("background-grid-block"))return;const l=parseInt(f.getAttribute("data-time-idx")||"",10);if(l==null)return;const b=k.current==null?l:k.current,v=l,R=Math.min(b,v),j=Math.max(b,v),L=R+2,_=j+3;g.current?.style.setProperty("--hover-start",L.toString()),g.current?.style.setProperty("--hover-end",_.toString()),m.current=[R,j+1]},[]),z=n.useCallback(()=>{g.current?.setAttribute("data-is-dragging","false"),D.current?.setAttribute("data-is-dragging","false"),m.current&&M.current!==null&&m.current[1]-m.current[0]>1&&d?.({day:M.current,begin:(T+m.current[0]*.5)*60,end:(T+m.current[1]*.5)*60}),w.current=!1,m.current=null,M.current=null,k.current=null},[d]),te=n.useCallback(r=>{w.current||!i||ee(r.clientX,r.clientY)},[i]),re=n.useCallback(r=>{!w.current||k.current===null||A(r.clientX,r.clientY)},[A]),ne=n.useCallback(r=>{if(!w.current||k.current===null)return;const a=r.touches[0];a!=null&&A(a.clientX,a.clientY)},[A]),oe=n.useCallback(r=>{c&&E?.([r])},[E,c]),ae=n.useCallback(r=>{c&&X?.(a=>a?.id===r.id?null:r)},[X,c]),F=n.useCallback(()=>{E?.([]),g.current?.setAttribute("data-is-hovering","false")},[E]),ie=n.useCallback(r=>{c&&x&&I?.(r.id)},[x,I]);return n.useEffect(()=>{if(!c)return;const r=h.map(a=>a.id).join(" ");g.current?.setAttribute("data-hovered-lectures",r)},[h,c,e]),n.useEffect(()=>{if(!c)return;const r=p?p.id.toString():"";r!==""?g.current?.setAttribute("data-selected-lecture",r):g.current?.setAttribute("data-selected-lecture","")},[p,c,e]),n.useEffect(()=>{c&&(h[0]&&!e.some(r=>r.id===h[0]?.id)?G(h[0]):p&&!e.some(r=>r.id===p.id)?G(p):G(null))},[h,p,e]),n.useEffect(()=>{if(!c)return;const r=[];y&&y.classes.forEach(a=>{e.forEach(f=>{f.classes.forEach(l=>{if(a.day===l.day){const b=a.begin,v=a.end,R=l.begin,j=l.end,L=Math.max(b,R),_=Math.min(v,j);L<_&&r.push({day:a.day,begin:(L/60-T)*2,end:(_/60-T)*2})}})})}),P(y?r:[])},[y,e,c]),$(s,{direction:"row",gap:B*2,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{userSelect:"none"},children:[o(s,{direction:"column",gap:0,align:"stretch",padding:`${S*W}px 0 0 0`,children:o(s,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:Q.map((r,a)=>o(C,{color:"Text.dark",children:r},a))})}),$(s,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${S*(1-W)}px 0`,className:"timetable-grid-wrapper",children:[o(Ie,{columns:`repeat(${O.length}, ${t||"1fr"})`,rows:`${S}px repeat(${H}, 1fr)`,flow:"column",gap:`0px ${B}px`,alignItems:"stretch",justifyItems:"stretch",ref:D,"data-is-dragging":"false","data-need-time-filter":i,...i?{onPointerDown:te,onPointerMove:re,onPointerUp:z,onPointerLeave:z,onTouchMove:ne,onTouchEnd:z}:{},children:O.map((r,a)=>$(n.Fragment,{children:[o(s,{direction:"column",gap:0,align:"center",children:o(C,{type:"Small",color:"Text.dark",children:V(`common.days.${r}`)})}),Array.from({length:H}).map((f,l)=>o(Re,{dayIdx:a,timeIdx:l,className:["background-grid-block",l%2===0?"hour":"half",l===H-1?"last":"",l%2==0&&(K[Math.floor(l/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":a,"data-time-idx":l},`${r}-${l}-memo`))]},r))}),$(Me,{columns:`repeat(${O.length}, ${t||"1fr"})`,rows:`${S}px repeat(${H}, 1fr)`,flow:"column",gap:`${N}px ${B}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${S*(1-W)}px 0`,ref:g,"data-interaction":c,"data-lecture-deletable":x,"data-is-dragging":!1,"data-hovered-lectures":"","data-selected-lecture":"",onPointerLeave:F,onTouchEnd:F,children:[i&&o(ye,{}),e.map((r,a)=>o(q,{lecture:r,deleteLecture:ie,handleLectureTileHover:oe,handleLectureTileSelect:ae},`${r.id}-lecture-tile-${a}`)),y&&o(q,{lecture:y,isGhost:!0}),y&&o(_e,{overlaps:Z})]})]})]})}const Xe=n.memo(He,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{Xe as C};
//# sourceMappingURL=CustomTimeTableGrid-QqUS9rGb.js.map
