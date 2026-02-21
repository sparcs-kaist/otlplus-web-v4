import{j as o,a as b,T as ae}from"./emotion-react-jsx-runtime.browser.esm-DpArgMH6.js";import{r as n}from"./chunk-JZWAC4HX-BfHXDH07.js";import{s as g,F as s}from"./FlexWrapper-j_G0N1r3.js";import{T as E}from"./Typography-CRt8ZcRN.js";import{l as le,I as ie}from"./useIsDevice-B6X3BlKy.js";import{I as ce}from"./IconButton-BBHw4Cp2.js";import{l as se}from"./index-BOpInQuN.js";import{C as de}from"./proxy-CfvGF2UD.js";import{u as ue}from"./useTranslation-DJCjMPk-.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"c9c2935be2a201390aa1c4fd568ab74452e8fc50"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f96b5ced-b467-47d5-adb4-5f7ac0ad692a",e._sentryDebugIdIdentifier="sentry-dbid-f96b5ced-b467-47d5-adb4-5f7ac0ad692a")}catch{}})();const F=g.div`
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
`;function pe(){return o(fe,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:o(he,{direction:"column",gap:0,flex:"1 1 auto"})})}const me=n.memo(pe),G="lecture-tile",z=e=>le`
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
    background: ${({theme:e,courseId:t})=>()=>{const a=ge(e.colors.Tile.TimeTable.default);return a[t%a.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        &:hover {
            ${({theme:e})=>z(e)}
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    .timetable-grid-wrapper:not(:hover)
        [data-hovered-lectures~="${({lectureId:e})=>e}"]
        &,
    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        ${({theme:e})=>z(e)}
    }
`,ve=g(s)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`;function $e({lecture:e,classIdx:t,deleteLecture:a}){const d=e.classes[t];return d==null?null:o(be,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,children:b(ye,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:G,children:[o(s,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px 0px 4px 4px",children:o(s,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:b(ae,{theme:se,children:[b(E,{type:"Small",color:"Text.dark",className:"lecture-title",children:[e.name,e.subtitle]}),o(E,{type:"Small",color:"Text.lighter",className:"lecture-info",children:e.professors.map(c=>c.name).join(", ")}),o(E,{type:"Small",color:"Text.lighter",className:"lecture-info",children:`(${d.buildingCode}) ${d.roomName}`})]})})}),o(ve,{direction:"column",flex:"0 1 0",gap:0,align:"flex-end",justify:"flex-start",className:"lecture-delete-wrapper",children:o(ce,{styles:{padding:3},onClick:a,children:o(ie,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:a?1:0,pointerEvents:a?"auto":"none"},children:o(de,{})})})})]})})}const ke=n.memo($e,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),L=8,xe=24,q=Array.from({length:xe-L+1},(e,t)=>L+t),J=q.map(e=>(e%12||12).toString()),A=(J.length-1)*2,H=["monday","tuesday","wednesday","thursday","friday"],w=20,N=.8,D=5,M=1,Te=g(F)`
    z-index: 1;
`,we=g(F)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,Ee=g(s)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${M}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${M}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${M}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,Ce=n.memo(({dayIdx:e,timeIdx:t,...a})=>o(Ee,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...a,children:o(s,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Ie=g.div`
    display: contents;

    &:has(.${G}:hover) .${G} {
        ${({theme:e})=>z(e)}
    }
`,X=n.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:a,deleteLecture:d})=>{const c=n.useCallback(()=>{t?.(e)},[t,e]),k=n.useCallback(()=>{a?.(e)},[a,e]),C=n.useCallback(()=>{d?.(e)},[d,e]);return o(Ie,{lectureId:e.id,onPointerEnter:c,onPointerDown:k,onTouchMove:c,children:e.classes.map((h,p)=>o(ke,{lecture:e,classIdx:p,deleteLecture:d?C:void 0},`${p}-lecture`))})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture);function Se({lectures:e,cellWidth:t,needTimeFilter:a=!0,setTimeFilter:d,needLectureInteraction:c=!0,needLectureDeletable:k=!0,deleteLecture:C,hoveredLectures:h=[],setHoveredLectures:p,selectedLecture:m=null,setSelectedLecture:B}){const{t:K}=ue(),R=n.useRef(null),u=n.useRef(null),x=n.useRef(!1),y=n.useRef(null),v=n.useRef(null),I=n.useRef(null),[W,j]=n.useState(null),Q=n.useCallback((r,l)=>{const f=document.elementFromPoint(r,l);if(f==null||!f.classList.contains("background-grid-block"))return;const i=parseInt(f.getAttribute("data-time-idx")||"",10),$=parseInt(f.getAttribute("data-day-idx")||"",10);if(i==null||$==null)return;const T=i+2;u.current?.style.setProperty("--hover-day",($+1).toString()),u.current?.style.setProperty("--hover-start",T.toString()),u.current?.style.setProperty("--hover-end",(T+1).toString()),u.current?.setAttribute("data-is-dragging","true"),R.current?.setAttribute("data-is-dragging","true"),x.current=!0,v.current=[i,i+1],I.current=$,y.current=i},[]),S=n.useCallback((r,l)=>{const f=document.elementFromPoint(r,l);if(f==null||!f.classList.contains("background-grid-block"))return;const i=parseInt(f.getAttribute("data-time-idx")||"",10);if(i==null)return;const $=y.current==null?i:y.current,T=i,Y=Math.min($,T),U=Math.max($,T),ne=Y+2,oe=U+3;u.current?.style.setProperty("--hover-start",ne.toString()),u.current?.style.setProperty("--hover-end",oe.toString()),v.current=[Y,U+1]},[]),_=n.useCallback(()=>{u.current?.setAttribute("data-is-dragging","false"),R.current?.setAttribute("data-is-dragging","false"),v.current&&I.current!==null&&d?.({day:I.current,begin:(L+v.current[0]*.5)*60,end:(L+v.current[1]*.5)*60}),x.current=!1,v.current=null,I.current=null,y.current=null},[d]),V=n.useCallback(r=>{x.current||!a||Q(r.clientX,r.clientY)},[a]),Z=n.useCallback(r=>{!x.current||y.current===null||S(r.clientX,r.clientY)},[S]),P=n.useCallback(r=>{if(!x.current||y.current===null)return;const l=r.touches[0];l!=null&&S(l.clientX,l.clientY)},[S]),ee=n.useCallback(r=>{c&&p?.([r])},[p,c]),te=n.useCallback(r=>{c&&B?.(l=>l?.id===r.id?null:r)},[B,c]),O=n.useCallback(()=>{p?.([]),u.current?.setAttribute("data-is-hovering","false")},[p]),re=n.useCallback(r=>{c&&k&&C?.(r.id)},[k,C]);return n.useEffect(()=>{if(!c)return;const r=h.map(l=>l.id).join(" ");u.current?.setAttribute("data-hovered-lectures",r)},[h,c,e]),n.useEffect(()=>{if(!c)return;const r=m?m.id.toString():"";r!==""?u.current?.setAttribute("data-selected-lecture",r):u.current?.setAttribute("data-selected-lecture","")},[m,c,e]),n.useEffect(()=>{c&&(h[0]&&!e.some(r=>r.id===h[0]?.id)?j(h[0]):m&&!e.some(r=>r.id===m.id)?j(m):j(null))},[h,m,e]),b(s,{direction:"row",gap:D*2,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{userSelect:"none"},children:[o(s,{direction:"column",gap:0,align:"stretch",padding:`${w*N}px 0 0 0`,children:o(s,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:J.map((r,l)=>o(E,{color:"Text.dark",children:r},l))})}),b(s,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${w*(1-N)}px 0`,className:"timetable-grid-wrapper",children:[o(Te,{columns:`repeat(${H.length}, ${t||"1fr"})`,rows:`${w}px repeat(${A}, 1fr)`,flow:"column",gap:`0px ${D}px`,alignItems:"stretch",justifyItems:"stretch",ref:R,"data-is-dragging":"false","data-need-time-filter":a,...a?{onPointerDown:V,onPointerMove:Z,onPointerUp:_,onPointerLeave:_,onTouchMove:P,onTouchEnd:_}:{},children:H.map((r,l)=>b(n.Fragment,{children:[o(s,{direction:"column",gap:0,align:"center",children:o(E,{type:"Small",color:"Text.dark",children:K(`common.days.${r}`)})}),Array.from({length:A}).map((f,i)=>o(Ce,{dayIdx:l,timeIdx:i,className:["background-grid-block",i%2===0?"hour":"half",i===A-1?"last":"",i%2==0&&(q[Math.floor(i/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":l,"data-time-idx":i},`${r}-${i}-memo`))]},r))}),b(we,{columns:`repeat(${H.length}, ${t||"1fr"})`,rows:`${w}px repeat(${A}, 1fr)`,flow:"column",gap:`${M}px ${D}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${w*(1-N)}px 0`,ref:u,"data-interaction":c,"data-lecture-deletable":k,"data-is-dragging":!1,"data-hovered-lectures":"","data-selected-lecture":"",onPointerLeave:O,onTouchEnd:O,children:[a&&o(me,{}),e.map((r,l)=>o(X,{lecture:r,deleteLecture:re,handleLectureTileHover:ee,handleLectureTileSelect:te},`${r.id}-lecture-tile-${l}`)),W&&o(X,{lecture:W})]})]})]})}const Ge=n.memo(Se,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{Ge as C};
//# sourceMappingURL=CustomTimeTableGrid-BJF2bIOK.js.map
