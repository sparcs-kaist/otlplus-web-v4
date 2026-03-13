import{j as n,a as v}from"./emotion-react-jsx-runtime.browser.esm-DclSXNTK.js";import{r as o}from"./chunk-JZWAC4HX-CvBlAyV1.js";import{s as g,F as d}from"./FlexWrapper-DXqwnSla.js";import{l as xe,I as le,W as ne}from"./useIsDevice-jTgvOCG8.js";import{T as $}from"./Typography-CsYcbF0R.js";import{I as se}from"./IconButton-BBI5xCXg.js";import{C as ce}from"./proxy-DPmAD1_V.js";import{u as de}from"./useTranslation-DJADJmTm.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"5c6317b880ca950083987decddcd7c9a96b19ad2"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="67076d65-038a-40a1-9b6e-8ec3528e2534",e._sentryDebugIdIdentifier="sentry-dbid-67076d65-038a-40a1-9b6e-8ec3528e2534")}catch{}})();const X=g.div`
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
`,oe=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],ue=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],Te=g(d)`
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
`,ke=g(d)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function Ee(){return n(Te,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:n(ke,{direction:"column",gap:0,flex:"1 1 auto"})})}const Se=o.memo(Ee),k="lecture-tile",C=e=>xe`
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
`,Ie=g(d)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,Me=g(d)`
    background: ${({theme:e,courseId:t})=>()=>{const i=ue(e.colors.Tile.TimeTable.default);return i[t%i.length]}};
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
                ${({theme:e})=>C(e)}
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
            ${({theme:e})=>C(e)}
        }
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,ge=g(d)`
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
`;function Ce({lecture:e,classIdx:t,deleteLecture:i}){const a=e.classes[t];return a==null?null:n(Ie,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:a.day+1,rowStart:a.begin/30-14,rowEnd:a.end/30-14,lectureId:e.id,children:v(Me,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:k,children:[n(d,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px",children:v(d,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:[n($,{type:"SmallMedium",className:"lecture-title",color:"TimeTable.title",children:e.name+" "+e.subtitle}),n($,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:e.professors.map(h=>h.name).join(", ")}),n($,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:`(${a.buildingCode}) ${a.roomName}`})]})}),i&&n(ge,{direction:"column",flex:"1 1 auto",gap:0,className:"lecture-delete-wrapper",children:n(se,{styles:{padding:3},onClick:i,children:n(le,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:1,pointerEvents:"auto"},children:n(ce,{})})})})]})})}const Ae=o.memo(Ce,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),Ne=g(d)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,je=g(d)`
    border-radius: 2px;
`;function Re({day:e,begin:t,end:i}){return n(Ne,{direction:"column",gap:0,day:e,begin:t,end:i,align:"stretch",justify:"stretch",children:n(je,{direction:"column",gap:0,flex:"1 1 auto"})})}const Le=g(d)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,Oe=g(d)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{const i=ue(e.colors.Tile.TimeTable.default);return i[t%i.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lecture="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>C(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>C(e)}
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
`;function ae({lecture:e,classIdx:t,deleteLecture:i}){const a=t==null?null:e.classes[t],{t:h}=de();return v(Le,{direction:"column",gap:2,align:"stretch",justify:"stretch",padding:"2px",flex:"1 1 auto",lectureId:e.id,children:[n(d,{direction:"column",gap:0,align:"center",children:a!=null&&oe[a.day]&&a.begin!=null&&a.end!=null?v($,{type:"Smaller",color:"Text.light",children:[h(`common.days.${oe[a.day]}`)," ",Math.floor(a.begin/60),":",a.begin%60===0?"00":"30"," - ",Math.floor(a.end/60),":",a.end%60===0?"00":"30"]}):n($,{type:"Smaller",color:"Text.light",children:h("timetable.noTimeInfo")})}),v(Oe,{direction:"column",gap:0,align:"flex-start",padding:"6px",courseId:e.courseId,lectureId:e.id,flex:"1 1 auto",className:k,children:[n($,{type:"SmallMedium",className:"lecture-title",color:"TimeTable.title",children:e.name+" "+e.subtitle}),n($,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:e.professors.map(s=>s.name).join(", ")}),n($,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:a!=null?`(${a.buildingCode}) ${a.roomName}`:""}),i&&n(ge,{direction:"column",flex:"1 1 auto",gap:0,className:"lecture-delete-wrapper",children:n(se,{styles:{padding:3},onClick:i,children:n(le,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:1,pointerEvents:"auto"},children:n(ce,{})})})})]})]})}const T=8,He=24,fe=Array.from({length:He-T+1},(e,t)=>T+t),he=fe.map(e=>(e%12||12).toString()),w=(he.length-1)*2,B=["monday","tuesday","wednesday","thursday","friday"],N=20,V=.8,Y=5,U=1,_e=g(X)`
    z-index: 1;
`,ze=g(d)`
    grid-row: 1 / ${w+5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${w+2};
    }
`,De=g(d)`
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
`,We=g(X)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,Ge=g(d)`
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
`,Be=o.memo(({dayIdx:e,timeIdx:t,...i})=>n(Ge,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...i,children:n(d,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Ye=g.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${k}:hover
        )
        &
        .${k} {
        ${({theme:e})=>C(e)}
    }
`,ie=o.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:i,deleteLecture:a,isGhost:h=!1})=>{const s=o.useCallback(()=>{t?.(e)},[t,e]),E=o.useCallback(()=>{i?.(e)},[i,e]),S=o.useCallback(()=>{a?.(e)},[a,e]);return n(Ye,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerDown:E,onTouchMove:s,...h?{"data-ghost":!0}:{},children:e.classes.map((f,y)=>F({day:f.day,begin:f.begin,end:f.end})?n(Ae,{lecture:e,classIdx:y,deleteLecture:a?S:void 0},`${y}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),Ue=g.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${k}:hover) .${k} {
        ${({theme:e})=>C(e)}
    }
`,Xe=o.memo(({overlaps:e})=>n(Ue,{children:e.map((t,i)=>n(Re,{...t},i))}));function F(e){if(!e)return!1;const t=e.begin/60-T,i=e.end/60-T,{day:a}=e;return ne.Mon<=a&&a<=ne.Fri&&i-t>=.5}const Fe=g.div`
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
        ${({theme:e})=>C(e)}
    }
`,qe=o.memo(({lecture:e,isGhost:t,deleteLecture:i,handleLectureTileHover:a,handleLectureTileSelect:h})=>{const s=o.useCallback(()=>{a?.(e)},[a,e]),E=o.useCallback(()=>{h?.(e)},[h,e]),S=o.useCallback(()=>{i?.(e)},[i,e]);return e.classes.length==0||e.classes.filter(f=>!F({...f})).length>0?n(Fe,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerDown:E,onTouchMove:s,children:e.classes.length==0?n(ae,{lecture:e,deleteLecture:t?void 0:S},e.id):e.classes.map((f,y)=>{const{day:m,begin:O,end:q}=f;return F({day:m,begin:O,end:q})?null:n(ae,{lecture:e,classIdx:y,deleteLecture:t?void 0:S},y)})}):null},(e,t)=>e.lecture===t.lecture);function Je({lectures:e,cellWidth:t,needTimeFilter:i=!0,timeFilter:a,setTimeFilter:h,needLectureInteraction:s=!0,needLectureDeletable:E=!0,deleteLecture:S,hoveredLectures:f=[],setHoveredLectures:y,selectedLecture:m=null,setSelectedLecture:O}){const{t:q}=de(),j=o.useRef(null),R=o.useRef(null),b=o.useRef(null),L=o.useRef(!1),A=o.useRef(null),p=o.useRef(null),H=o.useRef(null),[I,J]=o.useState(null),[pe,me]=o.useState([]),[Z,be]=o.useState(!1),K=o.useMemo(()=>{const r=[...e,...f,m].filter(u=>u!=null),l=new Map;return r.forEach(u=>{l.set(u.id,u)}),Array.from(l.values())},[e,f,m]),ye=o.useCallback((r,l)=>{const u=document.elementFromPoint(r,l);if(u==null||!u.classList.contains("background-grid-block"))return;const c=parseInt(u.getAttribute("data-time-idx")||"",10),x=parseInt(u.getAttribute("data-day-idx")||"",10);if(c==null||x==null)return;const M=c+2;b.current?.style.setProperty("--hover-day",(x+1).toString()),b.current?.style.setProperty("--hover-start",M.toString()),b.current?.style.setProperty("--hover-end",(M+1).toString()),b.current?.setAttribute("data-is-dragging","true"),R.current?.setAttribute("data-is-dragging","true"),L.current=!0,p.current=[c,c+1],H.current=x,A.current=c},[]),_=o.useCallback((r,l)=>{const u=document.elementFromPoint(r,l);if(u==null||!u.classList.contains("background-grid-block"))return;const c=parseInt(u.getAttribute("data-time-idx")||"",10);if(c==null)return;const x=A.current==null?c:A.current,M=c,z=Math.min(x,M),D=Math.max(x,M),W=z+2,G=D+3;b.current?.style.setProperty("--hover-start",W.toString()),b.current?.style.setProperty("--hover-end",G.toString()),p.current=[z,D+1]},[]),Q=o.useCallback(()=>{p.current&&H.current!==null&&h?.({day:H.current,begin:(T+p.current[0]*.5)*60,end:(T+p.current[1]*.5)*60}),p.current&&p.current[1]-p.current[0]>1?(b.current?.setAttribute("data-is-dragging","wait"),R.current?.setAttribute("data-is-dragging","wait")):(p.current&&p.current[1]-p.current[0]<=1||!a)&&(b.current?.setAttribute("data-is-dragging","false"),R.current?.setAttribute("data-is-dragging","false"),h?.(null)),L.current=!1,p.current=null,H.current=null,A.current=null},[a,h]);o.useEffect(()=>{a||(b.current?.setAttribute("data-is-dragging","false"),R.current?.setAttribute("data-is-dragging","false"))},[a]);const ve=o.useCallback(r=>{L.current||!i||ye(r.clientX,r.clientY)},[i]),$e=o.useCallback(r=>{!L.current||A.current===null||_(r.clientX,r.clientY)},[_]),we=o.useCallback(r=>{if(!L.current||A.current===null)return;const l=r.touches[0];l!=null&&_(l.clientX,l.clientY)},[_]),P=o.useCallback(r=>{s&&y?.([r])},[y,s]),ee=o.useCallback(r=>{s&&O?.(l=>l?.id===r.id?null:r)},[O,s]),te=o.useCallback(()=>{y?.([]),b.current?.setAttribute("data-is-hovering","false")},[y]),re=o.useCallback(r=>{s&&E&&S?.(r.id)},[E,S]);return o.useEffect(()=>{if(!s)return;const r=f.map(l=>l.id).join(" ");j.current?.setAttribute("data-hovered-lectures",r)},[f,s,e]),o.useEffect(()=>{if(!s)return;const r=m?m.id.toString():"";r!==""?j.current?.setAttribute("data-selected-lecture",r):j.current?.setAttribute("data-selected-lecture","")},[m,s,e]),o.useEffect(()=>{be(K.some(r=>r.classes.some(l=>!F({...l})))),s&&(f[0]&&!e.some(r=>r.id===f[0]?.id)?J(f[0]):m&&!e.some(r=>r.id===m.id)?J(m):J(null))},[f,m,e,K]),o.useEffect(()=>{if(!s)return;const r=[];I&&I.classes.forEach(l=>{e.forEach(u=>{u.classes.forEach(c=>{if(l.day===c.day){const x=l.begin,M=l.end,z=c.begin,D=c.end,W=Math.max(x,z),G=Math.min(M,D);W<G&&r.push({day:l.day,begin:(W/60-T)*2,end:(G/60-T)*2})}})})}),me(I?r:[])},[I,e,s]),n(d,{direction:"column",gap:8,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{overflow:"hidden"},className:"custom-timetable",ref:j,"data-hovered-lectures":"","data-selected-lecture":"","data-interaction":s,"data-lecture-deletable":E,onPointerLeave:te,onTouchEnd:te,children:v(X,{columns:"1fr",rows:`${N}px repeat(${w+3}, 1fr)`,gap:"0px",alignItems:"stretch",justifyItems:"stretch",flow:"column",children:[v(ze,{direction:"row",gap:Y*2,align:"stretch",justify:"stretch",flex:"1 1 auto",className:Z?"has-overflow":"",children:[n(d,{direction:"column",gap:0,align:"stretch",padding:`${N*V}px 0 0 0`,children:n(d,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:he.map((r,l)=>n($,{color:"Text.dark",children:r},l))})}),v(d,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${N*(1-V)}px 0`,className:"timetable-grid-wrapper",children:[n(_e,{columns:`repeat(${B.length}, ${t||"1fr"})`,rows:`${N}px repeat(${w}, 1fr)`,flow:"column",gap:`0px ${Y}px`,alignItems:"stretch",justifyItems:"stretch",ref:R,"data-is-dragging":"false","data-need-time-filter":i,...i?{onPointerDown:ve,onPointerMove:$e,onPointerUp:Q,onPointerLeave:Q,onTouchMove:we,onTouchEnd:Q}:{},children:B.map((r,l)=>v(o.Fragment,{children:[n(d,{direction:"column",gap:0,align:"center",children:n($,{type:"Small",color:"Text.dark",children:q(`common.days.${r}`)})}),Array.from({length:w}).map((u,c)=>n(Be,{dayIdx:l,timeIdx:c,className:["background-grid-block",c%2===0?"hour":"half",c===w-1?"last":"",c%2==0&&(fe[Math.floor(c/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":l,"data-time-idx":c},`${r}-${c}-memo`))]},`${r}-${l}`))}),v(We,{columns:`repeat(${B.length}, ${t||"1fr"})`,rows:`${N}px repeat(${w}, 1fr)`,flow:"column",gap:`${U}px ${Y}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${N*(1-V)}px 0`,ref:b,"data-is-dragging":!1,children:[i&&n(Se,{}),e.map((r,l)=>n(ie,{lecture:r,deleteLecture:re,handleLectureTileHover:P,handleLectureTileSelect:ee},`${r.id}-lecture-tile-${l}`)),I&&n(ie,{lecture:I,isGhost:!0}),I&&n(Xe,{overlaps:pe})]})]})]}),n(De,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:"0 0 0 18px",className:"overflow-grid-wrapper"+(Z?" has-overflow":""),children:n(X,{columns:`repeat(${B.length}, ${t||"1fr"})`,rows:"1fr",gap:`0px ${Y}px`,flow:"row",style:{overflow:"hidden"},children:K.map((r,l)=>n(qe,{lecture:r,isGhost:e.every(u=>u.id!==r.id),deleteLecture:re,handleLectureTileHover:P,handleLectureTileSelect:ee},`${r.id}-overflow-${l}`))})})]})})}const nt=o.memo(Je,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.timeFilter===t.timeFilter&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture);export{nt as C};
//# sourceMappingURL=CustomTimeTableGrid-B15LNdhx.js.map
