import{j as n,a as v}from"./emotion-react-jsx-runtime.browser.esm-D98CELEh.js";import{r as o}from"./chunk-JZWAC4HX-BOtFzpof.js";import{s as g,F as c}from"./FlexWrapper-ChuZ0NYc.js";import{l as we,I as ie,W as ne}from"./useIsDevice-B9-ahimV.js";import{T as $}from"./Typography-CNGcIaya.js";import{I as le}from"./IconButton-BW_NMOwq.js";import{C as se}from"./proxy-DfEhxDEm.js";import{u as de}from"./useTranslation-8tYiwMVJ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"f2288ed22f64822f60a07dad5f61f97aedeee381"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="32e57f5e-8e65-47da-bad9-b00d4b63ea9b",e._sentryDebugIdIdentifier="sentry-dbid-32e57f5e-8e65-47da-bad9-b00d4b63ea9b")}catch{}})();const X=g.div`
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
`,oe=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],ce=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],xe=g(c)`
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
`,Te=g(c)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function ke(){return n(xe,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:n(Te,{direction:"column",gap:0,flex:"1 1 auto"})})}const Ee=o.memo(ke),k="lecture-tile",M=e=>we`
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
`,Ie=g(c)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,Se=g(c)`
    background: ${({theme:e,courseId:t})=>()=>{const a=ce(e.colors.Tile.TimeTable.default);return a[t%a.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>M(e)}
            }
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

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lecture="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>M(e)}
        }
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,ue=g(c)`
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
`;function Me({lecture:e,classIdx:t,deleteLecture:a}){const i=e.classes[t];return i==null?null:n(Ie,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:i.day+1,rowStart:i.begin/30-14,rowEnd:i.end/30-14,lectureId:e.id,children:v(Se,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:k,children:[n(c,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px",children:v(c,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:[n($,{type:"SmallMedium",className:"lecture-title",color:"TimeTable.title",children:e.name+" "+e.subtitle}),n($,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:e.professors.map(h=>h.name).join(", ")}),n($,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:`(${i.buildingCode}) ${i.roomName}`})]})}),n(ue,{direction:"column",flex:"1 1 auto",gap:0,className:"lecture-delete-wrapper",children:n(le,{styles:{padding:3},onClick:a,children:n(ie,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:a?1:0,pointerEvents:a?"auto":"none"},children:n(se,{})})})})]})})}const Ce=o.memo(Me,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),Ae=g(c)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,Ne=g(c)`
    border-radius: 2px;
`;function je({day:e,begin:t,end:a}){return n(Ae,{direction:"column",gap:0,day:e,begin:t,end:a,align:"stretch",justify:"stretch",children:n(Ne,{direction:"column",gap:0,flex:"1 1 auto"})})}const Re=g(c)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,Oe=g(c)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{const a=ce(e.colors.Tile.TimeTable.default);return a[t%a.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lecture="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>M(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>M(e)}
            }
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
`;function Ge({lecture:e,classIdx:t,deleteLecture:a}){const i=e.classes[t],{t:h}=de();return i==null?null:v(Re,{direction:"column",gap:2,align:"stretch",justify:"stretch",padding:"2px",flex:"1 1 auto",lectureId:e.id,children:[n(c,{direction:"column",gap:0,align:"center",children:oe[i.day]&&i.begin!=null&&i.end!=null?v($,{type:"Smaller",color:"Text.light",children:[h(`common.days.${oe[i.day]}`)," ",Math.floor(i.begin/60),":",i.begin%60===0?"00":"30"," - ",Math.floor(i.end/60),":",i.end%60===0?"00":"30"]}):n($,{type:"Smaller",color:"Text.light",children:h("timetable.noTimeInfo")})}),v(Oe,{direction:"column",gap:0,align:"flex-start",padding:"6px",courseId:e.courseId,lectureId:e.id,flex:"1 1 auto",className:k,children:[n($,{type:"SmallMedium",className:"lecture-title",color:"TimeTable.title",children:e.name+" "+e.subtitle}),n($,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:e.professors.map(s=>s.name).join(", ")}),n($,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:`(${i.buildingCode}) ${i.roomName}`}),n(ue,{direction:"column",flex:"1 1 auto",gap:0,className:"lecture-delete-wrapper",children:n(le,{styles:{padding:3},onClick:a,children:n(ie,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:a?1:0,pointerEvents:a?"auto":"none"},children:n(se,{})})})})]})]})}const T=8,He=24,ge=Array.from({length:He-T+1},(e,t)=>T+t),fe=ge.map(e=>(e%12||12).toString()),w=(fe.length-1)*2,B=["monday","tuesday","wednesday","thursday","friday"],N=20,V=.8,Y=5,U=1,_e=g(X)`
    z-index: 1;
`,ze=g(c)`
    grid-row: 1 / ${w+5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${w+2};
    }
`,De=g(c)`
    overflow: hidden;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: -1 / -1;
    display: none;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: ${w+2} / ${w+5};
        display: flex;
    }
`,Le=g(X)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,We=g(c)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${U}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${U}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${U}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,Be=o.memo(({dayIdx:e,timeIdx:t,...a})=>n(We,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...a,children:n(c,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Ye=g.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${k}:hover
        )
        &
        .${k} {
        ${({theme:e})=>M(e)}
    }
`,ae=o.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:a,deleteLecture:i,isGhost:h=!1})=>{const s=o.useCallback(()=>{t?.(e)},[t,e]),E=o.useCallback(()=>{a?.(e)},[a,e]),C=o.useCallback(()=>{i?.(e)},[i,e]);return n(Ye,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerDown:E,onTouchMove:s,...h?{"data-ghost":!0}:{},children:e.classes.map((f,y)=>F({day:f.day,begin:f.begin,end:f.end})?n(Ce,{lecture:e,classIdx:y,deleteLecture:i?C:void 0},`${y}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),Ue=g.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${k}:hover) .${k} {
        ${({theme:e})=>M(e)}
    }
`,Xe=o.memo(({overlaps:e})=>n(Ue,{children:e.map((t,a)=>n(je,{...t},a))}));function F(e){if(!e)return!1;const t=e.begin/60-T,a=e.end/60-T,{day:i}=e;return ne.Mon<=i&&i<=ne.Fri&&a-t>=.5}const Fe=g.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${k}:hover
        )
        &
        .${k} {
        ${({theme:e})=>M(e)}
    }
`,qe=o.memo(({lecture:e,isGhost:t,deleteLecture:a,handleLectureTileHover:i,handleLectureTileSelect:h})=>{const s=o.useCallback(()=>{i?.(e)},[i,e]),E=o.useCallback(()=>{h?.(e)},[h,e]),C=o.useCallback(()=>{a?.(e)},[a,e]);return e.classes.filter(f=>!F({...f})).length>0?n(Fe,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerDown:E,onTouchMove:s,children:e.classes.map((f,y)=>{const{day:p,begin:G,end:q}=f;return F({day:p,begin:G,end:q})?null:n(Ge,{lecture:e,classIdx:y,deleteLecture:C},y)})}):null});function Je({lectures:e,cellWidth:t,needTimeFilter:a=!0,timeFilter:i,setTimeFilter:h,needLectureInteraction:s=!0,needLectureDeletable:E=!0,deleteLecture:C,hoveredLectures:f=[],setHoveredLectures:y,selectedLecture:p=null,setSelectedLecture:G}){const{t:q}=de(),j=o.useRef(null),R=o.useRef(null),b=o.useRef(null),O=o.useRef(!1),A=o.useRef(null),m=o.useRef(null),H=o.useRef(null),[I,J]=o.useState(null),[he,pe]=o.useState([]),[Z,me]=o.useState(!1),K=o.useMemo(()=>{const r=[...e,...f,p].filter(u=>u!=null),l=new Map;return r.forEach(u=>{l.set(u.id,u)}),Array.from(l.values())},[e,f,p]),be=o.useCallback((r,l)=>{const u=document.elementFromPoint(r,l);if(u==null||!u.classList.contains("background-grid-block"))return;const d=parseInt(u.getAttribute("data-time-idx")||"",10),x=parseInt(u.getAttribute("data-day-idx")||"",10);if(d==null||x==null)return;const S=d+2;b.current?.style.setProperty("--hover-day",(x+1).toString()),b.current?.style.setProperty("--hover-start",S.toString()),b.current?.style.setProperty("--hover-end",(S+1).toString()),b.current?.setAttribute("data-is-dragging","true"),R.current?.setAttribute("data-is-dragging","true"),O.current=!0,m.current=[d,d+1],H.current=x,A.current=d},[]),_=o.useCallback((r,l)=>{const u=document.elementFromPoint(r,l);if(u==null||!u.classList.contains("background-grid-block"))return;const d=parseInt(u.getAttribute("data-time-idx")||"",10);if(d==null)return;const x=A.current==null?d:A.current,S=d,z=Math.min(x,S),D=Math.max(x,S),L=z+2,W=D+3;b.current?.style.setProperty("--hover-start",L.toString()),b.current?.style.setProperty("--hover-end",W.toString()),m.current=[z,D+1]},[]),Q=o.useCallback(()=>{m.current&&H.current!==null&&h?.({day:H.current,begin:(T+m.current[0]*.5)*60,end:(T+m.current[1]*.5)*60}),m.current&&m.current[1]-m.current[0]>1?(b.current?.setAttribute("data-is-dragging","wait"),R.current?.setAttribute("data-is-dragging","wait")):(m.current&&m.current[1]-m.current[0]<=1||!i)&&(b.current?.setAttribute("data-is-dragging","false"),R.current?.setAttribute("data-is-dragging","false"),h?.(null)),O.current=!1,m.current=null,H.current=null,A.current=null},[i,h]);o.useEffect(()=>{i||(b.current?.setAttribute("data-is-dragging","false"),R.current?.setAttribute("data-is-dragging","false"))},[i]);const ye=o.useCallback(r=>{O.current||!a||be(r.clientX,r.clientY)},[a]),ve=o.useCallback(r=>{!O.current||A.current===null||_(r.clientX,r.clientY)},[_]),$e=o.useCallback(r=>{if(!O.current||A.current===null)return;const l=r.touches[0];l!=null&&_(l.clientX,l.clientY)},[_]),P=o.useCallback(r=>{s&&y?.([r])},[y,s]),ee=o.useCallback(r=>{s&&G?.(l=>l?.id===r.id?null:r)},[G,s]),te=o.useCallback(()=>{y?.([]),b.current?.setAttribute("data-is-hovering","false")},[y]),re=o.useCallback(r=>{s&&E&&C?.(r.id)},[E,C]);return o.useEffect(()=>{if(!s)return;const r=f.map(l=>l.id).join(" ");j.current?.setAttribute("data-hovered-lectures",r)},[f,s,e]),o.useEffect(()=>{if(!s)return;const r=p?p.id.toString():"";r!==""?j.current?.setAttribute("data-selected-lecture",r):j.current?.setAttribute("data-selected-lecture","")},[p,s,e]),o.useEffect(()=>{s&&(f[0]&&!e.some(r=>r.id===f[0]?.id)?J(f[0]):p&&!e.some(r=>r.id===p.id)?J(p):J(null),me(K.some(r=>r.classes.some(l=>!F({...l})))))},[f,p,e,K]),o.useEffect(()=>{if(!s)return;const r=[];I&&I.classes.forEach(l=>{e.forEach(u=>{u.classes.forEach(d=>{if(l.day===d.day){const x=l.begin,S=l.end,z=d.begin,D=d.end,L=Math.max(x,z),W=Math.min(S,D);L<W&&r.push({day:l.day,begin:(L/60-T)*2,end:(W/60-T)*2})}})})}),pe(I?r:[])},[I,e,s]),n(c,{direction:"column",gap:8,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{overflow:"hidden"},className:"custom-timetable",ref:j,"data-hovered-lectures":"","data-selected-lecture":"","data-interaction":s,"data-lecture-deletable":E,onPointerLeave:te,onTouchEnd:te,children:v(X,{columns:"1fr",rows:`${N}px repeat(${w+3}, 1fr)`,gap:"0px",alignItems:"stretch",justifyItems:"stretch",flow:"column",children:[v(ze,{direction:"row",gap:Y*2,align:"stretch",justify:"stretch",flex:"1 1 auto",className:Z?"has-overflow":"",children:[n(c,{direction:"column",gap:0,align:"stretch",padding:`${N*V}px 0 0 0`,children:n(c,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:fe.map((r,l)=>n($,{color:"Text.dark",children:r},l))})}),v(c,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${N*(1-V)}px 0`,className:"timetable-grid-wrapper",children:[n(_e,{columns:`repeat(${B.length}, ${t||"1fr"})`,rows:`${N}px repeat(${w}, 1fr)`,flow:"column",gap:`0px ${Y}px`,alignItems:"stretch",justifyItems:"stretch",ref:R,"data-is-dragging":"false","data-need-time-filter":a,...a?{onPointerDown:ye,onPointerMove:ve,onPointerUp:Q,onPointerLeave:Q,onTouchMove:$e,onTouchEnd:Q}:{},children:B.map((r,l)=>v(o.Fragment,{children:[n(c,{direction:"column",gap:0,align:"center",children:n($,{type:"Small",color:"Text.dark",children:q(`common.days.${r}`)})}),Array.from({length:w}).map((u,d)=>n(Be,{dayIdx:l,timeIdx:d,className:["background-grid-block",d%2===0?"hour":"half",d===w-1?"last":"",d%2==0&&(ge[Math.floor(d/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":l,"data-time-idx":d},`${r}-${d}-memo`))]},`${r}-${l}`))}),v(Le,{columns:`repeat(${B.length}, ${t||"1fr"})`,rows:`${N}px repeat(${w}, 1fr)`,flow:"column",gap:`${U}px ${Y}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${N*(1-V)}px 0`,ref:b,"data-is-dragging":!1,children:[a&&n(Ee,{}),e.map((r,l)=>n(ae,{lecture:r,deleteLecture:re,handleLectureTileHover:P,handleLectureTileSelect:ee},`${r.id}-lecture-tile-${l}`)),I&&n(ae,{lecture:I,isGhost:!0}),I&&n(Xe,{overlaps:he})]})]})]}),n(De,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:"0 0 0 18px",className:"overflow-grid-wrapper"+(Z?" has-overflow":""),children:n(X,{columns:`repeat(${B.length}, ${t||"1fr"})`,rows:"1fr",gap:`0px ${Y}px`,flow:"row",style:{overflow:"hidden"},children:K.map((r,l)=>n(qe,{lecture:r,isGhost:e.every(u=>u.id!==r.id)&&f.some(u=>u.id===r.id)||p?.id===r.id,deleteLecture:re,handleLectureTileHover:P,handleLectureTileSelect:ee},`${r.id}-overflow-${l}`))})})]})})}const nt=o.memo(Je,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.timeFilter===t.timeFilter&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{nt as C};
//# sourceMappingURL=CustomTimeTableGrid-sN57awFa.js.map
