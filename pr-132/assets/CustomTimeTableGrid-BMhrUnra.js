import{j as n,a as m,T as ee}from"./emotion-react-jsx-runtime.browser.esm-B5Mzfpnp.js";import{r as o}from"./chunk-JZWAC4HX-Dli3OiYn.js";import{s as u,F as c}from"./FlexWrapper-BAjXYuYd.js";import{l as te,I as re}from"./useIsDevice-B1pA0poh.js";import{T as $}from"./Typography-COGP1R2-.js";import{I as ne}from"./IconButton-Cv9S5XVd.js";import{l as oe}from"./index-BRwj32Uz.js";import{C as ae}from"./proxy-ZVebKzV4.js";import{u as ve}from"./useTranslation-B73mMrNG.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"66edb5d634d1bce1a87eb1662822c9e9345d91bf"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd56d6f5-e2a8-4961-8e59-084785bc6939",e._sentryDebugIdIdentifier="sentry-dbid-bd56d6f5-e2a8-4961-8e59-084785bc6939")}catch{}})();const ie=u.div`
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
`,xe=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],K="custom-block-tile",q=e=>te`
    background: ${e.colors.Highlight.default};

    .block-title {
        color: #ffffff;
    }

    .block-info {
        color: rgba(255, 255, 255, 0.5);
    }

    .block-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,$e=u(c)`
    display: contents;

    &:has(.${K}:hover) .${K} {
        ${({theme:e})=>q(e)}
    }

    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;

    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,ke=u(c)`
    background: ${({theme:e,blockId:t})=>()=>{const a=xe(e.colors.Tile.TimeTable.default);return a[(t*3+7)%a.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    grid-column: inherit;
    grid-row: inherit;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        &:hover {
            ${({theme:e})=>q(e)}
        }
    }

    transition: opacity 0.2s ease;

    opacity: 0.5;

    [data-selected-custom-block=""] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    .timetable-grid-wrapper:not(:hover)
        [data-hovered-custom-blocks~="${({blockId:e})=>e}"]
        &,
    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        ${({theme:e})=>q(e)}
    }

    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        opacity: 1;
    }
`,we=u(c)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`;function Ee({block:e,deleteBlock:t,handleBlockTileHover:a,handleBlockTileSelect:s,isGhost:h=!1}){return n($e,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:e.day+1,rowStart:e.begin/30-14,rowEnd:e.end/30-14,blockId:e.id,onPointerEnter:()=>a?.(e),onPointerDown:()=>s?.(e),onTouchMove:()=>a?.(e),...h?{"data-ghost":!0}:{},children:m(ke,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",blockId:e.id,className:K,children:[n(c,{direction:"column",justify:"flex-start",flex:"1 1 auto",gap:0,padding:"4px 0px 4px 4px",children:n(c,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:m(ee,{theme:oe,children:[n($,{type:"Small",color:"Text.dark",className:"block-title",children:e.blockName}),e.place&&n($,{type:"Small",color:"Text.lighter",className:"block-info",children:e.place})]})})}),n(we,{direction:"column",flex:"0 1 0",gap:0,align:"flex-end",justify:"flex-start",className:"block-delete-wrapper",children:n(ne,{styles:{padding:3},onClick:t,children:n(re,{size:12,style:{color:"rgba(255, 255, 255, 0.6)",opacity:t?1:0,pointerEvents:t?"auto":"none"},children:n(ae,{})})})})]})})}const Te=o.memo(Ee),Ce=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],Se=u(c)`
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
`,Ie=u(c)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function Me(){return n(Se,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:n(Ie,{direction:"column",gap:0,flex:"1 1 auto"})})}const Ae=o.memo(Me),F="lecture-tile",J=e=>te`
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
`,je=u(c)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,Ne=u(c)`
    background: ${({theme:e,courseId:t})=>()=>{const a=Ce(e.colors.Tile.TimeTable.default);return a[t%a.length]}};
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
            ${({theme:e})=>J(e)}
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
        ${({theme:e})=>J(e)}
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,Re=u(c)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`;function Le({lecture:e,classIdx:t,deleteLecture:a}){const s=e.classes[t];return s==null?null:n(je,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:s.day+1,rowStart:s.begin/30-14,rowEnd:s.end/30-14,lectureId:e.id,children:m(Ne,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:F,children:[n(c,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px 0px 4px 4px",children:n(c,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:m(ee,{theme:oe,children:[m($,{type:"Small",color:"Text.dark",className:"lecture-title",children:[e.name,e.subtitle]}),n($,{type:"Small",color:"Text.lighter",className:"lecture-info",children:e.professors.map(h=>h.name).join(", ")}),n($,{type:"Small",color:"Text.lighter",className:"lecture-info",children:`(${s.buildingCode}) ${s.roomName}`})]})})}),n(Re,{direction:"column",flex:"0 1 0",gap:0,align:"flex-end",justify:"flex-start",className:"lecture-delete-wrapper",children:n(ne,{styles:{padding:3},onClick:a,children:n(re,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:a?1:0,pointerEvents:a?"auto":"none"},children:n(ae,{})})})})]})})}const _e=o.memo(Le,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),He=u(c)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,ze=u(c)`
    border-radius: 2px;
`;function Be({day:e,begin:t,end:a}){return n(He,{direction:"column",gap:0,day:e,begin:t,end:a,align:"stretch",justify:"stretch",children:n(ze,{direction:"column",gap:0,flex:"1 1 auto"})})}const C=8,De=24,le=Array.from({length:De-C+1},(e,t)=>C+t),ce=le.map(e=>(e%12||12).toString()),B=(ce.length-1)*2,Y=["monday","tuesday","wednesday","thursday","friday"],A=20,U=.8,X=5,D=1,Ge=u(ie)`
    z-index: 1;
`,Oe=u(ie)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,We=u(c)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${D}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${D}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${D}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,Ye=o.memo(({dayIdx:e,timeIdx:t,...a})=>n(We,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...a,children:n(c,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Ue=u.div`
    display: contents;

    &:has(.${F}:hover) .${F} {
        ${({theme:e})=>J(e)}
    }
`,P=o.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:a,deleteLecture:s,isGhost:h=!1})=>{const k=o.useCallback(()=>{t?.(e)},[t,e]),d=o.useCallback(()=>{a?.(e)},[a,e]),w=o.useCallback(()=>{s?.(e)},[s,e]);return n(Ue,{lectureId:e.id,onPointerEnter:k,onPointerDown:d,onTouchMove:k,...h?{"data-ghost":!0}:{},children:e.classes.map((G,S)=>n(_e,{lecture:e,classIdx:S,deleteLecture:s?w:void 0},`${S}-lecture`))})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),Xe=u.div`
    display: contents;
    z-index: 4;
`,Ke=o.memo(({overlaps:e})=>n(Xe,{children:e.map((t,a)=>n(Be,{...t},a))}));function qe({lectures:e,customBlocks:t=[],cellWidth:a,needTimeFilter:s=!0,timeFilter:h,setTimeFilter:k,needLectureInteraction:d=!0,needLectureDeletable:w=!0,deleteLecture:G,deleteCustomBlock:S,hoveredLectures:E=[],setHoveredLectures:j,selectedLecture:b=null,setSelectedLecture:Q,selectedCustomBlock:Fe=null,setSelectedCustomBlock:V}){const{t:se}=ve(),I=o.useRef(null),g=o.useRef(null),M=o.useRef(!1),T=o.useRef(null),f=o.useRef(null),N=o.useRef(null),[v,O]=o.useState(null),[de,ue]=o.useState([]),ge=o.useCallback((r,i)=>{const p=document.elementFromPoint(r,i);if(p==null||!p.classList.contains("background-grid-block"))return;const l=parseInt(p.getAttribute("data-time-idx")||"",10),y=parseInt(p.getAttribute("data-day-idx")||"",10);if(l==null||y==null)return;const x=l+2;g.current?.style.setProperty("--hover-day",(y+1).toString()),g.current?.style.setProperty("--hover-start",x.toString()),g.current?.style.setProperty("--hover-end",(x+1).toString()),g.current?.setAttribute("data-is-dragging","true"),I.current?.setAttribute("data-is-dragging","true"),M.current=!0,f.current=[l,l+1],N.current=y,T.current=l},[]),R=o.useCallback((r,i)=>{const p=document.elementFromPoint(r,i);if(p==null||!p.classList.contains("background-grid-block"))return;const l=parseInt(p.getAttribute("data-time-idx")||"",10);if(l==null)return;const y=T.current==null?l:T.current,x=l,L=Math.min(y,x),_=Math.max(y,x),H=L+2,z=_+3;g.current?.style.setProperty("--hover-start",H.toString()),g.current?.style.setProperty("--hover-end",z.toString()),f.current=[L,_+1]},[]),W=o.useCallback(()=>{f.current&&N.current!==null&&k?.({day:N.current,begin:(C+f.current[0]*.5)*60,end:(C+f.current[1]*.5)*60}),f.current&&f.current[1]-f.current[0]>1?(g.current?.setAttribute("data-is-dragging","wait"),I.current?.setAttribute("data-is-dragging","wait")):(f.current&&f.current[1]-f.current[0]<=1||!h)&&(g.current?.setAttribute("data-is-dragging","false"),I.current?.setAttribute("data-is-dragging","false"),k?.(null)),M.current=!1,f.current=null,N.current=null,T.current=null},[h,k]);o.useEffect(()=>{h||(g.current?.setAttribute("data-is-dragging","false"),I.current?.setAttribute("data-is-dragging","false"))},[h]);const pe=o.useCallback(r=>{M.current||!s||ge(r.clientX,r.clientY)},[s]),fe=o.useCallback(r=>{!M.current||T.current===null||R(r.clientX,r.clientY)},[R]),he=o.useCallback(r=>{if(!M.current||T.current===null)return;const i=r.touches[0];i!=null&&R(i.clientX,i.clientY)},[R]),me=o.useCallback(r=>{d&&j?.([r])},[j,d]),ye=o.useCallback(r=>{d&&Q?.(i=>i?.id===r.id?null:r)},[Q,d]),Z=o.useCallback(()=>{j?.([]),g.current?.setAttribute("data-is-hovering","false")},[j]),be=o.useCallback(r=>{d&&w&&G?.(r.id)},[w,G]);return o.useEffect(()=>{if(!d)return;const r=E.map(i=>i.id).join(" ");g.current?.setAttribute("data-hovered-lectures",r)},[E,d,e]),o.useEffect(()=>{if(!d)return;const r=b?b.id.toString():"";r!==""?g.current?.setAttribute("data-selected-lecture",r):g.current?.setAttribute("data-selected-lecture","")},[b,d,e]),o.useEffect(()=>{d&&(E[0]&&!e.some(r=>r.id===E[0]?.id)?O(E[0]):b&&!e.some(r=>r.id===b.id)?O(b):O(null))},[E,b,e]),o.useEffect(()=>{if(!d)return;const r=[];v&&v.classes.forEach(i=>{e.forEach(p=>{p.classes.forEach(l=>{if(i.day===l.day){const y=i.begin,x=i.end,L=l.begin,_=l.end,H=Math.max(y,L),z=Math.min(x,_);H<z&&r.push({day:i.day,begin:(H/60-C)*2,end:(z/60-C)*2})}})})}),ue(v?r:[])},[v,e,d]),m(c,{direction:"row",gap:X*2,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{userSelect:"none"},children:[n(c,{direction:"column",gap:0,align:"stretch",padding:`${A*U}px 0 0 0`,children:n(c,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:ce.map((r,i)=>n($,{color:"Text.dark",children:r},i))})}),m(c,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${A*(1-U)}px 0`,className:"timetable-grid-wrapper",children:[n(Ge,{columns:`repeat(${Y.length}, ${a||"1fr"})`,rows:`${A}px repeat(${B}, 1fr)`,flow:"column",gap:`0px ${X}px`,alignItems:"stretch",justifyItems:"stretch",ref:I,"data-is-dragging":"false","data-need-time-filter":s,...s?{onPointerDown:pe,onPointerMove:fe,onPointerUp:W,onPointerLeave:W,onTouchMove:he,onTouchEnd:W}:{},children:Y.map((r,i)=>m(o.Fragment,{children:[n(c,{direction:"column",gap:0,align:"center",children:n($,{type:"Small",color:"Text.dark",children:se(`common.days.${r}`)})}),Array.from({length:B}).map((p,l)=>n(Ye,{dayIdx:i,timeIdx:l,className:["background-grid-block",l%2===0?"hour":"half",l===B-1?"last":"",l%2==0&&(le[Math.floor(l/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":i,"data-time-idx":l},`${r}-${l}-memo`))]},r))}),m(Oe,{columns:`repeat(${Y.length}, ${a||"1fr"})`,rows:`${A}px repeat(${B}, 1fr)`,flow:"column",gap:`${D}px ${X}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${A*(1-U)}px 0`,ref:g,"data-interaction":d,"data-lecture-deletable":w,"data-is-dragging":!1,"data-hovered-lectures":"","data-selected-lecture":"",onPointerLeave:Z,onTouchEnd:Z,children:[s&&n(Ae,{}),e.map((r,i)=>n(P,{lecture:r,deleteLecture:be,handleLectureTileHover:me,handleLectureTileSelect:ye},`${r.id}-lecture-tile-${i}`)),t.map((r,i)=>n(Te,{block:r,deleteBlock:w&&S?()=>S(r.id):void 0,handleBlockTileSelect:d&&V?p=>V(l=>l?.id===p.id?null:p):void 0},`${r.id}-custom-block-tile-${i}`)),v&&n(P,{lecture:v,isGhost:!0}),v&&n(Ke,{overlaps:de})]})]})]})}const ot=o.memo(qe,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.timeFilter===t.timeFilter&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{ot as C};
//# sourceMappingURL=CustomTimeTableGrid-BMhrUnra.js.map
