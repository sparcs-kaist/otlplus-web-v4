import{j as n,a as w}from"./emotion-react-jsx-runtime.browser.esm-CsETgYDA.js";import{r as o}from"./chunk-JZWAC4HX-BhbM5C76.js";import{s as g,F as u}from"./FlexWrapper-CkAYkvrm.js";import{l as Me,I as ge,W as se}from"./useIsDevice-DvciEh0v.js";import{T as x}from"./Typography-Btz9MgaE.js";import{I as fe}from"./IconButton-LSfjwfu9.js";import{C as he}from"./proxy-wQ2UlXzy.js";import{u as pe}from"./useTranslation-BCHp_mok.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"50028f4e6a00984e0505e566815bed964fcaa8c1"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="193c59df-d507-4d04-8cfa-3a674c033dcd",e._sentryDebugIdIdentifier="sentry-dbid-193c59df-d507-4d04-8cfa-3a674c033dcd")}catch{}})();const J=g.div`
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
`,ce=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],me=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],Ae=g(u)`
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
`,je=g(u)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function Re(){return n(Ae,{direction:"column",gap:0,padding:"1px 0px",align:"stretch",children:n(je,{direction:"column",gap:0,flex:"1 1 auto"})})}const Ne=o.memo(Re),I="lecture-tile",A=e=>Me`
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
`,He=g(u)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,Le=g(u)`
    background: ${({theme:e,courseId:t})=>()=>{const i=me(e.colors.Tile.TimeTable.default);return i[t%i.length]}};
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
                ${({theme:e})=>A(e)}
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
            ${({theme:e})=>A(e)}
        }
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,be=g(u)`
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
`;function De({lecture:e,classIdx:t,deleteLecture:i}){const a=e.classes[t];return a==null?null:n(He,{direction:"column",gap:0,padding:"1px 0px",justify:"stretch",align:"stretch",col:a.day+1,rowStart:a.begin/30-14,rowEnd:a.end/30-14,lectureId:e.id,children:w(Le,{direction:"row",gap:0,flex:"1 1 auto",align:"stretch",justify:"stretch",padding:"2px",courseId:e.courseId,lectureId:e.id,className:I,children:[n(u,{direction:"column",justify:"center",flex:"1 1 auto",gap:0,padding:"4px",children:w(u,{direction:"column",gap:0,align:"flex-start",style:{overflow:"hidden"},children:[n(x,{type:"SmallMedium",className:"lecture-title",color:"TimeTable.title",children:e.name+" "+e.subtitle}),n(x,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:e.professors.map(h=>h.name).join(", ")}),n(x,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:`(${a.buildingCode}) ${a.roomName}`})]})}),i&&n(be,{direction:"column",flex:"1 1 auto",gap:0,className:"lecture-delete-wrapper",children:n(fe,{styles:{padding:3},onClick:i,children:n(ge,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:1,pointerEvents:"auto"},children:n(he,{})})})})]})})}const Oe=o.memo(De,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),ze=g(u)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,_e=g(u)`
    border-radius: 2px;
`;function We({day:e,begin:t,end:i}){return n(ze,{direction:"column",gap:0,day:e,begin:t,end:i,align:"stretch",justify:"stretch",children:n(_e,{direction:"column",gap:0,flex:"1 1 auto"})})}const Ge=g(u)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,Be=g(u)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{const i=me(e.colors.Tile.TimeTable.default);return i[t%i.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lecture="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>A(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>A(e)}
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
`;function de({lecture:e,classIdx:t,deleteLecture:i}){const a=t==null?null:e.classes[t],{t:h}=pe();return w(Ge,{direction:"column",gap:2,align:"stretch",justify:"stretch",padding:"2px",flex:"1 1 auto",lectureId:e.id,children:[n(u,{direction:"column",gap:0,align:"center",children:a!=null&&ce[a.day]&&a.begin!=null&&a.end!=null?w(x,{type:"Smaller",color:"Text.light",children:[h(`common.days.${ce[a.day]}`)," ",Math.floor(a.begin/60),":",a.begin%60===0?"00":"30"," - ",Math.floor(a.end/60),":",a.end%60===0?"00":"30"]}):n(x,{type:"Smaller",color:"Text.light",children:h("timetable.noTimeInfo")})}),w(Be,{direction:"column",gap:0,align:"flex-start",padding:"6px",courseId:e.courseId,lectureId:e.id,flex:"1 1 auto",className:I,children:[n(x,{type:"SmallMedium",className:"lecture-title",color:"TimeTable.title",children:e.name+" "+e.subtitle}),n(x,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:e.professors.map(d=>d.name).join(", ")}),n(x,{type:"Small",className:"lecture-info",color:"TimeTable.detail",children:a!=null?`(${a.buildingCode}) ${a.roomName}`:""}),i&&n(be,{direction:"column",flex:"1 1 auto",gap:0,className:"lecture-delete-wrapper",children:n(fe,{styles:{padding:3},onClick:i,children:n(ge,{size:12,onClick:()=>{},style:{color:"rgba(255, 255, 255, 0.6)",opacity:1,pointerEvents:"auto"},children:n(he,{})})})})]})]})}const y=8,P=24,ye=Array.from({length:P-y+1},(e,t)=>y+t),ve=ye.map(e=>(e%12||12).toString()),T=(ve.length-1)*2,U=["monday","tuesday","wednesday","thursday","friday"],E=20,F=.8,X=5,q=1,Ye=g(J)`
    z-index: 1;
`,Ue=g(u)`
    grid-row: 1 / ${T+5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${T+2};
    }
`,Xe=g(u)`
    overflow: hidden;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: -1 / -1;
    display: none;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: ${T+2} / ${T+5};
        display: flex;
    }
`,Fe=g(J)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,qe=g(u)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${q}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${q}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${q}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,Je=o.memo(({dayIdx:e,timeIdx:t,...i})=>n(qe,{direction:"column",gap:0,padding:"1px",align:"stretch",justify:"stretch",...i,children:n(u,{direction:"column",gap:0,flex:"1 1 auto",style:{borderRadius:"4px",pointerEvents:"none"}})})),Ke=g.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${I}:hover
        )
        &
        .${I} {
        ${({theme:e})=>A(e)}
    }
`,ue=o.memo(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:i,deleteLecture:a,isGhost:h=!1})=>{const d=o.useCallback(()=>{t?.(e)},[t,e]),C=o.useCallback(()=>{i?.(e)},[i,e]),S=o.useCallback(()=>{a?.(e)},[a,e]);return n(Ke,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:d,onPointerDown:C,onTouchMove:d,...h?{"data-ghost":!0}:{},children:e.classes.map((f,v)=>K({day:f.day,begin:f.begin,end:f.end})?n(Oe,{lecture:e,classIdx:v,deleteLecture:a?S:void 0},`${v}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),Qe=g.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${I}:hover) .${I} {
        ${({theme:e})=>A(e)}
    }
`,Ve=o.memo(({overlaps:e})=>n(Qe,{children:e.map((t,i)=>n(We,{...t},i))}));function K(e){if(!e)return!1;const t=e.begin/60-y,i=e.end/60-y,{day:a}=e;return se.Mon<=a&&a<=se.Fri&&i-t>=.5}const Ze=g.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${I}:hover
        )
        &
        .${I} {
        ${({theme:e})=>A(e)}
    }
`,Pe=o.memo(({lecture:e,isGhost:t,deleteLecture:i,handleLectureTileHover:a,handleLectureTileSelect:h})=>{const d=o.useCallback(()=>{a?.(e)},[a,e]),C=o.useCallback(()=>{h?.(e)},[h,e]),S=o.useCallback(()=>{i?.(e)},[i,e]);return e.classes.length==0||e.classes.filter(f=>!K({...f})).length>0?n(Ze,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:d,onPointerDown:C,onTouchMove:d,children:e.classes.length==0?n(de,{lecture:e,deleteLecture:t?void 0:S},e.id):e.classes.map((f,v)=>{const{day:m,begin:O,end:N}=f;return K({day:m,begin:O,end:N})?null:n(de,{lecture:e,classIdx:v,deleteLecture:t?void 0:S},v)})}):null},(e,t)=>e.lecture===t.lecture),et=g.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${E}px + (100% - ${E*(2-F)}px) *
            ${({ratio:e})=>e}
    );
    width: 100%;
    height: 2px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    z-index: 10;
    pointer-events: none;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({theme:e})=>e.colors.Highlight.default};
    }
`;function tt({lectures:e,cellWidth:t,needTimeFilter:i=!0,timeFilter:a,setTimeFilter:h,needLectureInteraction:d=!0,needLectureDeletable:C=!0,deleteLecture:S,hoveredLectures:f=[],setHoveredLectures:v,selectedLecture:m=null,setSelectedLecture:O,needCurrentTimeBar:N=!1}){const{t:ee}=pe(),z=o.useRef(null),H=o.useRef(null),b=o.useRef(null),L=o.useRef(!1),j=o.useRef(null),p=o.useRef(null),_=o.useRef(null),[M,Q]=o.useState(null),[$e,we]=o.useState([]),[te,xe]=o.useState(!1),[re,ne]=o.useState(null),[Te,ke]=o.useState(-1),D=o.useCallback(()=>{const r=new Date,c=r.getDay()-1,s=r.getHours()+r.getMinutes()/60;if(s<y||s>P||c<0||c>4){ne(null);return}const $=P-y,R=(s-y)/$;ne(R),ke(c)},[]);o.useEffect(()=>{if(!N)return;D();const r=setInterval(D,60*1e3);return window.addEventListener("resize",D),()=>{clearInterval(r),window.removeEventListener("resize",D)}},[N,D]);const V=o.useMemo(()=>{const r=[...e,...f,m].filter(c=>c!=null),l=new Map;return r.forEach(c=>{l.set(c.id,c)}),Array.from(l.values())},[e,f,m]),Ee=o.useCallback((r,l)=>{const c=document.elementFromPoint(r,l);if(c==null||!c.classList.contains("background-grid-block"))return;const s=parseInt(c.getAttribute("data-time-idx")||"",10),$=parseInt(c.getAttribute("data-day-idx")||"",10);if(s==null||$==null)return;const k=s+2;b.current?.style.setProperty("--hover-day",($+1).toString()),b.current?.style.setProperty("--hover-start",k.toString()),b.current?.style.setProperty("--hover-end",(k+1).toString()),b.current?.setAttribute("data-is-dragging","true"),H.current?.setAttribute("data-is-dragging","true"),L.current=!0,p.current=[s,s+1],_.current=$,j.current=s},[]),W=o.useCallback((r,l)=>{const c=document.elementFromPoint(r,l);if(c==null||!c.classList.contains("background-grid-block"))return;const s=parseInt(c.getAttribute("data-time-idx")||"",10);if(s==null)return;const $=j.current==null?s:j.current,k=s,R=Math.min($,k),G=Math.max($,k),B=R+2,Y=G+3;b.current?.style.setProperty("--hover-start",B.toString()),b.current?.style.setProperty("--hover-end",Y.toString()),p.current=[R,G+1]},[]),Z=o.useCallback(()=>{p.current&&_.current!==null&&h?.({day:_.current,begin:(y+p.current[0]*.5)*60,end:(y+p.current[1]*.5)*60}),p.current&&p.current[1]-p.current[0]>1?(b.current?.setAttribute("data-is-dragging","wait"),H.current?.setAttribute("data-is-dragging","wait")):(p.current&&p.current[1]-p.current[0]<=1||!a)&&(b.current?.setAttribute("data-is-dragging","false"),H.current?.setAttribute("data-is-dragging","false"),h?.(null)),L.current=!1,p.current=null,_.current=null,j.current=null},[a,h]);o.useEffect(()=>{a||(b.current?.setAttribute("data-is-dragging","false"),H.current?.setAttribute("data-is-dragging","false"))},[a]);const Ie=o.useCallback(r=>{L.current||!i||Ee(r.clientX,r.clientY)},[i]),Ce=o.useCallback(r=>{!L.current||j.current===null||W(r.clientX,r.clientY)},[W]),Se=o.useCallback(r=>{if(!L.current||j.current===null)return;const l=r.touches[0];l!=null&&W(l.clientX,l.clientY)},[W]),oe=o.useCallback(r=>{d&&v?.([r])},[v,d]),ae=o.useCallback(r=>{d&&O?.(l=>l?.id===r.id?null:r)},[O,d]),ie=o.useCallback(()=>{v?.([]),b.current?.setAttribute("data-is-hovering","false")},[v]),le=o.useCallback(r=>{d&&C&&S?.(r.id)},[C,S]);return o.useEffect(()=>{if(!d)return;const r=f.map(l=>l.id).join(" ");z.current?.setAttribute("data-hovered-lectures",r)},[f,d,e]),o.useEffect(()=>{if(!d)return;const r=m?m.id.toString():"";r!==""?z.current?.setAttribute("data-selected-lecture",r):z.current?.setAttribute("data-selected-lecture","")},[m,d,e]),o.useEffect(()=>{xe(V.some(r=>r.classes.some(l=>!K({...l})))),d&&(f[0]&&!e.some(r=>r.id===f[0]?.id)?Q(f[0]):m&&!e.some(r=>r.id===m.id)?Q(m):Q(null))},[f,m,e,V]),o.useEffect(()=>{if(!d)return;const r=[];M&&M.classes.forEach(l=>{e.forEach(c=>{c.classes.forEach(s=>{if(l.day===s.day){const $=l.begin,k=l.end,R=s.begin,G=s.end,B=Math.max($,R),Y=Math.min(k,G);B<Y&&r.push({day:l.day,begin:(B/60-y)*2,end:(Y/60-y)*2})}})})}),we(M?r:[])},[M,e,d]),n(u,{direction:"column",gap:8,align:"stretch",justify:"stretch",flex:"1 1 auto",style:{overflow:"hidden"},className:"custom-timetable",ref:z,"data-hovered-lectures":"","data-selected-lecture":"","data-interaction":d,"data-lecture-deletable":C,onPointerLeave:ie,onTouchEnd:ie,children:w(J,{columns:"1fr",rows:`${E}px repeat(${T+3}, 1fr)`,gap:"0px",alignItems:"stretch",justifyItems:"stretch",flow:"column",children:[w(Ue,{direction:"row",gap:X*2,align:"stretch",justify:"stretch",flex:"1 1 auto",className:te?"has-overflow":"",children:[n(u,{direction:"column",gap:0,align:"stretch",padding:`${E*F}px 0 0 0`,children:n(u,{direction:"column",gap:0,align:"end",justify:"space-between",flex:"1 1 auto",style:{fontSize:"8px"},children:ve.map((r,l)=>n(x,{color:"Text.dark",children:r},l))})}),w(u,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:`0 0 ${E*(1-F)}px 0`,className:"timetable-grid-wrapper",children:[n(Ye,{columns:`repeat(${U.length}, ${t||"1fr"})`,rows:`${E}px repeat(${T}, 1fr)`,flow:"column",gap:`0px ${X}px`,alignItems:"stretch",justifyItems:"stretch",ref:H,"data-is-dragging":"false","data-need-time-filter":i,...i?{onPointerDown:Ie,onPointerMove:Ce,onPointerUp:Z,onPointerLeave:Z,onTouchMove:Se,onTouchEnd:Z}:{},children:U.map((r,l)=>w(o.Fragment,{children:[n(u,{direction:"column",gap:0,align:"center",children:n(x,{type:"Small",color:"Text.dark",children:ee(`common.days.${r}`)})}),Array.from({length:T}).map((c,s)=>n(Je,{dayIdx:l,timeIdx:s,className:["background-grid-block",s%2===0?"hour":"half",s===T-1?"last":"",s%2==0&&(ye[Math.floor(s/2)]||0)%6===0?"bold":""].join(" "),"data-day-idx":l,"data-time-idx":s},`${r}-${s}-memo`))]},`${r}-${l}`))}),w(Fe,{columns:`repeat(${U.length}, ${t||"1fr"})`,rows:`${E}px repeat(${T}, 1fr)`,flow:"column",gap:`${q}px ${X}px`,alignItems:"stretch",justifyItems:"stretch",padding:`0 0 ${E*(1-F)}px 0`,ref:b,"data-is-dragging":!1,children:[i&&n(Ne,{}),e.map((r,l)=>n(ue,{lecture:r,deleteLecture:le,handleLectureTileHover:oe,handleLectureTileSelect:ae},`${r.id}-lecture-tile-${l}`)),M&&n(ue,{lecture:M,isGhost:!0}),M&&n(Ve,{overlaps:$e}),N&&re!==null&&n(et,{ratio:re,dayIndex:Te})]})]})]}),n(Xe,{direction:"column",gap:0,align:"stretch",justify:"stretch",flex:"1 1 auto",padding:"0 0 0 18px",className:"overflow-grid-wrapper"+(te?" has-overflow":""),children:n(J,{columns:`repeat(${U.length}, ${t||"1fr"})`,rows:"1fr",gap:`0px ${X}px`,flow:"row",style:{overflow:"hidden"},children:V.map((r,l)=>n(Pe,{lecture:r,isGhost:e.every(c=>c.id!==r.id),deleteLecture:le,handleLectureTileHover:oe,handleLectureTileSelect:ae},`${r.id}-overflow-${l}`))})})]})})}const dt=o.memo(tt,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.timeFilter===t.timeFilter&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture&&e.needCurrentTimeBar===t.needCurrentTimeBar);export{dt as C};
//# sourceMappingURL=CustomTimeTableGrid-BpuWsSev.js.map
