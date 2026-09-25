(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`8caced82e35020ff71f3a27d1f018032d1bd1b96`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`1ac9e042-0877-4ec0-8949-ee1023eb7d5e`,e._sentryDebugIdIdentifier=`sentry-dbid-1ac9e042-0877-4ec0-8949-ee1023eb7d5e`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Blrd0K4Y.js";import{n,o as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-CAsfMFGj.js";import{n as a,t as o}from"./FlexWrapper-BGdYN5bL.js";import{i as s,n as c}from"./emotion-react.browser.esm-swbISihb.js";import{S as l}from"./axios-CCGkJ92S.js";import{d as u}from"./useAPI-BWz-T4Ox.js";import{t as d}from"./Icon-Cmixk3ye.js";import{t as f}from"./useTranslation-DSS50ojA.js";import{t as p}from"./IconButton-neGLCjNP.js";import{t as m}from"./Close-BGoLk0GX.js";import{t as h}from"./Typography-Dy5UdSXI.js";import{t as g}from"./light-_TpL_e-X.js";var _=t(e(),1),v=a.div`
    width: 100%;
    height: 100%;
    display: grid;
    position: relative;
    grid-template-columns: ${({columns:e})=>e};
    grid-template-rows: ${({rows:e})=>e};
    gap: ${({gap:e})=>e};
    align-items: ${({alignItems:e})=>e??`start`};
    justify-items: ${({justifyItems:e})=>e??`start`};
    align-content: ${({alignContents:e})=>e??`start`};
    justify-content: ${({justifyContents:e})=>e??`start`};
    grid-auto-flow: ${({flow:e})=>e};
    padding: ${({padding:e})=>e??`0px`};
`,ee=e=>`${e.kind}:${e.data.id}`,y=e=>e.kind===l.LECTURE?e.data.classes:[e.data],b=(e,t)=>y(e).some(e=>y(t).some(t=>e.day===t.day&&e.begin<t.end&&t.begin<e.end)),x=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],S=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],C=a(o)`
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
`,w=a(o)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function T(){return n(C,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,children:n(w,{direction:`column`,gap:0,flex:`1 1 auto`})})}var te=(0,_.memo)(T),E=`lecture-tile`,D=e=>c`
    background: ${e.colors.Highlight.default};

    .lecture-title {
        color: ${e.colors.Text.onHighlight.default};
    }

    .lecture-info {
        color: ${e.colors.Text.onHighlight.muted};
    }

    .lecture-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,O=s`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,k=a(o)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-lectures~="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }

    [data-flash-lectures~="${({lectureId:e})=>e}"] & {
        animation: ${O} 0.3s ease-out forwards;
    }
`,ne=a(o)`
    background: ${({theme:e,courseId:t})=>()=>{let n=S(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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
                ${({theme:e})=>D(e)}
            }
        }
    }

    transition: opacity 0.2s ease;

    opacity: 0.5;

    .custom-timetable[data-selected-lectures=""] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lectures~="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>D(e)}
        }
    }

    [data-selected-lectures~="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,A=a(o)`
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
`;function j({lecture:e,classIdx:t,deleteLecture:r,handleLectureTileSelect:a,handleLectureTileHover:s,handleLectureTileLeave:c}){let l=e.classes[t];if(l==null)return null;let u=(0,_.useCallback)(t=>{a?.(e,t)},[a,e]),f=(0,_.useCallback)(()=>{s?.(e)},[s,e]),g=(0,_.useCallback)(()=>{c?.()},[c]);return n(k,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:l.day+1,rowStart:l.begin/30-14,rowEnd:l.end/30-14,lectureId:e.id,"data-class-time":l.day*24*60+l.begin,onPointerDown:u,onPointerEnter:f,onPointerLeave:g,children:i(ne,{direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:E,children:[n(o,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:i(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(h,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${l.buildingCode}) ${l.roomName}`})]})}),r&&n(A,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(p,{styles:{padding:3},onClick:()=>r(e),children:n(d,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(m,{})})})})]})})}var M=(0,_.memo)(j,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),N=a(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,P=a(o)`
    border-radius: 2px;
`;function re({day:e,begin:t,end:r}){return n(N,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(P,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ie=a(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,ae=a(o)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=S(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lectures~="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>D(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>D(e)}
            }
        }
    }

    [data-selected-lectures~="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
        opacity: 1;
    }

    .custom-timetable[data-selected-lectures=""] & {
        transform: none;
        box-shadow: none;
        opacity: 1;
    }

    [data-flash-lectures~="${({lectureId:e})=>e}"] & {
        animation: ${O} 0.3s ease-out forwards;
    }
`;function F({lecture:e,classIdx:t,deleteLecture:r}){let a=t==null?null:e.classes[t],{t:s}=f();return i(ie,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:a!=null&&x[a.day]&&a.begin!=null&&a.end!=null?i(h,{type:`Smaller`,color:`Text.light`,children:[s(`common.days.${x[a.day]}`),` `,Math.floor(a.begin/60),`:`,a.begin%60==0?`00`:`30`,` - `,Math.floor(a.end/60),`:`,a.end%60==0?`00`:`30`]}):n(h,{type:`Smaller`,color:`Text.light`,children:s(`timetable.noTimeInfo`)})}),i(ae,{direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:E,children:[n(h,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:a==null?``:`(${a.buildingCode}) ${a.roomName}`}),r&&n(A,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(p,{styles:{padding:3},onClick:()=>r(),children:n(d,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(m,{})})})})]})]})}var I=`custom-block-tile`,L=e=>c`
    background: ${e.colors.Highlight.default};

    .block-title {
        color: #ffffff;
    }

    .block-info {
        color: rgba(255, 255, 255, 0.5);
    }
`,R=a(o)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;

    &:has(.${I}:hover) .${I} {
        ${({theme:e})=>L(e)}
    }

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`,z=a(o)`
    background: ${({theme:e,blockId:t})=>{let n=S(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.5;

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;

        &:hover {
            ${({theme:e})=>L(e)}
        }
    }

    [data-selected-custom-blocks=""] &,
    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        opacity: 1;
    }

    [data-flash-custom-blocks~="${({blockId:e})=>e}"] & {
        background: ${({theme:e})=>e.colors.Highlight.default};
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        ${({theme:e})=>L(e)}
    }
`;function B({block:e,onSelect:t,overflow:a=!1}){let{t:o}=f(),s=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`][e.day],c=e=>`${Math.floor(e/60).toString().padStart(2,`0`)}:${(e%60).toString().padStart(2,`0`)}`,l=`${o(`common.days.${s}`)} ${c(e.begin)}–${c(e.end)}`;return n(R,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(e.day,4)+1,rowStart:a?void 0:e.begin/30-14,rowEnd:a?void 0:e.end/30-14,blockId:e.id,onPointerDown:n=>t?.(e,n),"data-custom-block-id":e.id,title:`${e.block_name} · ${l}`,children:n(z,{direction:`column`,gap:0,flex:`1 1 auto`,align:`flex-start`,justify:`flex-start`,padding:`6px`,blockId:e.id,className:I,children:i(r,{theme:g,children:[n(h,{type:`Small`,color:`Text.dark`,className:`block-title`,children:e.block_name}),a&&n(h,{type:`Small`,color:`Text.lighter`,className:`block-info`,children:l}),e.place&&n(h,{type:`Small`,color:`Text.lighter`,className:`block-info`,children:e.place})]})})})}var oe=(0,_.memo)(B),V=8,se=24,ce=Array.from({length:17},(e,t)=>V+t),le=ce.map(e=>(e%12||12).toString()),H=(le.length-1)*2,U=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],W=20,ue=.8,G=5,K=1,de=a(v)`
    z-index: 1;
`,fe=a(o)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,pe=a(o)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,me=a(v)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,q=a(o)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${K}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${K}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${K}px solid ${({theme:e})=>e.colors.Line.darker};
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
                background: ${({theme:e})=>e.colors.Highlight.subtle};
            }
        }
    }

    [data-need-time-filter="true"][data-is-dragging="true"] & {
        :hover div {
            background: none;
        }

        cursor: ns-resize;
    }
`,he=(0,_.memo)(({dayIdx:e,timeIdx:t,...r})=>n(q,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),J=a.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${E}:hover
        )
        &
        .${E} {
        ${({theme:e})=>D(e)}
    }
`,ge=(0,_.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileLeave:r,handleLectureTileSelect:i,deleteLecture:a,isGhost:o=!1})=>{let s=(0,_.useCallback)(()=>{t?.(e)},[t,e]),c=(0,_.useCallback)(()=>{r?.()},[r]),l=(0,_.useCallback)(t=>{i?.(e,t)},[i,e]),u=(0,_.useCallback)(()=>{a?.(e)},[a,e]);return n(J,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,...o?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>Y({day:t.day,begin:t.begin,end:t.end})?n(M,{lecture:e,classIdx:r,deleteLecture:a?u:void 0},`${r}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),_e=a.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${E}:hover) .${E} {
        ${({theme:e})=>D(e)}
    }
`,ve=(0,_.memo)(({overlaps:e})=>n(_e,{children:e.map((e,t)=>n(re,{...e},t))}));function Y(e){if(!e)return!1;let t=e.begin/60-V,n=e.end/60-V,{day:r}=e;return u.Mon<=r&&r<=u.Fri&&t>=0&&n<=16&&n-t>=.5&&e.begin%30==0&&e.end%30==0}var ye=a.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${E}:hover
        )
        &
        .${E} {
        ${({theme:e})=>D(e)}
    }
`,be=(0,_.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o})=>{let s=(0,_.useCallback)(()=>{i?.(e)},[i,e]),c=(0,_.useCallback)(()=>{a?.()},[a]),l=(0,_.useCallback)(t=>{o?.(e,t)},[o,e]),u=(0,_.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length===0||e.classes.filter(e=>!Y({...e})).length>0?n(ye,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,children:e.classes.length===0?n(F,{lecture:e,deleteLecture:t?void 0:u},e.id):e.classes.map((r,i)=>{let{day:a,begin:o,end:s}=r;return Y({day:a,begin:o,end:s})?null:n(F,{lecture:e,classIdx:i,deleteLecture:t?void 0:u},i)})}):null},(e,t)=>e.lecture===t.lecture),xe=a.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${W}px + (100% - ${W*1.2}px) *
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
`;function X({timetableItems:e,selectedItems:t,flashItemKeys:r,onItemSelect:a,lectures:s=[],customBlocks:c=[],cellWidth:u,needTimeFilter:d=!0,timeFilter:p,setTimeFilter:m,needLectureInteraction:g=!0,needLectureDeletable:b=!0,deleteLecture:x,hoveredLectures:S=[],setHoveredLectures:C,selectedLectures:w=[],onLectureSelect:T,selectedCustomBlock:E=null,onCustomBlockSelect:D,isCustomBlockSectionOpen:O=!1,needCurrentTimeBar:k=!1,flashLectureIds:ne=[]}){let{t:A}=f(),j=(0,_.useMemo)(()=>e??[...s.map(e=>({kind:l.LECTURE,data:e})),...c.map(e=>({kind:l.CUSTOM,data:e}))],[e,s,c]),M=(0,_.useMemo)(()=>j.flatMap(e=>e.kind===l.LECTURE?[e.data]:[]),[j]),N=(0,_.useMemo)(()=>j.flatMap(e=>e.kind===l.CUSTOM?[e.data]:[]),[j]),P=(0,_.useMemo)(()=>t?.flatMap(e=>e.kind===l.LECTURE?[e.data]:[])??w,[t,w]),re=t?.flatMap(e=>e.kind===l.CUSTOM?[e.data.id]:[])??(E?[E.id]:[]),ie=r?.filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1]))??ne,ae=(0,_.useRef)(null),F=(0,_.useRef)(null),I=(0,_.useRef)(null),L=(0,_.useRef)(!1),R=(0,_.useRef)(null),z=(0,_.useRef)(null),B=(0,_.useRef)(null),[q,J]=(0,_.useState)(null),[_e,ye]=(0,_.useState)(-1),X=(0,_.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<V||n>se||t<0||t>4){J(null);return}let r=(n-V)/16;J(r),ye(t)},[]);(0,_.useEffect)(()=>{if(!k)return;X();let e=setInterval(X,6e4);return window.addEventListener(`resize`,X),()=>{clearInterval(e),window.removeEventListener(`resize`,X)}},[k,X]);let Se=(0,_.useMemo)(()=>{let e=[...M,...S,...P].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[M,S,P]),Z=(0,_.useMemo)(()=>{if(!g)return[];let e=S.filter(e=>!M.some(t=>t.id===e.id)),t=P.filter(e=>!M.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[S,P,M,g]),Ce=(0,_.useMemo)(()=>{if(!g||Z.length===0)return[];let e=[],t=j.flatMap(y);for(let n of Z)for(let r of y({kind:l.LECTURE,data:n}))for(let n of t){let t=Math.max(r.begin,n.begin),i=Math.min(r.end,n.end);r.day===n.day&&t<i&&e.push({day:r.day,begin:(t/60-V)*2,end:(i/60-V)*2})}return e},[Z,j,g]),we=Se.some(e=>e.classes.length===0||e.classes.some(e=>!Y(e)))||N.some(e=>!Y(e)),Te=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;I.current?.style.setProperty(`--hover-day`,(i+1).toString()),I.current?.style.setProperty(`--hover-start`,a.toString()),I.current?.style.setProperty(`--hover-end`,(a+1).toString()),I.current?.setAttribute(`data-is-dragging`,`true`),F.current?.setAttribute(`data-is-dragging`,`true`),L.current=!0,z.current=[r,r+1],B.current=i,R.current=r},[]),Q=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=R.current==null?r:R.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;I.current?.style.setProperty(`--hover-start`,c.toString()),I.current?.style.setProperty(`--hover-end`,l.toString()),z.current=[o,s+1]},[]),Ee=(0,_.useCallback)(()=>{z.current&&B.current!==null&&m?.({day:B.current,begin:(V+z.current[0]*.5)*60,end:(V+z.current[1]*.5)*60}),z.current&&(z.current[1]-z.current[0]>1||O)?(I.current?.setAttribute(`data-is-dragging`,`wait`),F.current?.setAttribute(`data-is-dragging`,`wait`)):(z.current&&z.current[1]-z.current[0]<=1||!p)&&(I.current?.setAttribute(`data-is-dragging`,`false`),F.current?.setAttribute(`data-is-dragging`,`false`),m?.(null)),L.current=!1,z.current=null,B.current=null,R.current=null},[O,p,m]);(0,_.useEffect)(()=>{p||(I.current?.setAttribute(`data-is-dragging`,`false`),F.current?.setAttribute(`data-is-dragging`,`false`))},[p]);let De=(0,_.useCallback)(e=>{L.current||!d||Te(e.clientX,e.clientY)},[d]),Oe=(0,_.useCallback)(e=>{!L.current||R.current===null||Q(e.clientX,e.clientY)},[Q]),ke=(0,_.useCallback)(e=>{if(!L.current||R.current===null)return;let t=e.touches[0];t!=null&&Q(t.clientX,t.clientY)},[Q]),Ae=(0,_.useCallback)(e=>{g&&C?.([e])},[C,g]),je=(0,_.useCallback)((e,t)=>{g&&(a?a({kind:l.LECTURE,data:e},t):T?.(e,t))},[T,a,g]),$=(0,_.useCallback)(()=>{C?.([]),I.current?.setAttribute(`data-is-hovering`,`false`)},[C]),Me=(0,_.useCallback)(e=>{g&&b&&($(),x?.(e.id))},[b,x,$]),Ne=(0,_.useCallback)((e,t)=>{g&&(a?a({kind:l.CUSTOM,data:e},t):D?.(e,t))},[g,D,a]);return n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:ae,"data-hovered-lectures":g?S.map(e=>e.id).join(` `):``,"data-selected-lectures":g?P.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":re.join(` `),"data-selected-items":(t??[]).map(ee).join(` `),"data-flash-custom-blocks":(r??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ie.join(` `),"data-interaction":g,"data-lecture-deletable":b,onPointerLeave:$,onTouchEnd:$,children:i(v,{columns:`1fr`,rows:we?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[i(fe,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:we?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${W*ue}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:le.map((e,t)=>n(h,{color:`Text.dark`,children:e},t))})}),i(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${W*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(de,{columns:`repeat(${U.length}, ${u||`1fr`})`,rows:`${W}px repeat(${H}, 1fr)`,flow:`column`,gap:`0px ${G}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:F,"data-is-dragging":`false`,"data-need-time-filter":d,...d?{onPointerDown:De,onPointerMove:Oe,onPointerUp:Ee,onPointerLeave:Ee,onTouchMove:ke,onTouchEnd:Ee}:{},children:U.map((e,t)=>i(_.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(h,{type:`Small`,color:`Text.dark`,children:A(`common.days.${e}`)})}),Array.from({length:H}).map((r,i)=>n(he,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===H-1?`last`:``,i%2==0&&(ce[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),i(me,{columns:`repeat(${U.length}, ${u||`1fr`})`,rows:`${W}px repeat(${H}, 1fr)`,flow:`column`,gap:`${K}px ${G}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${W*.19999999999999996}px 0`,ref:I,"data-is-dragging":!1,children:[d&&n(te,{}),M.map((e,t)=>n(ge,{lecture:e,deleteLecture:Me,handleLectureTileHover:Ae,handleLectureTileLeave:$,handleLectureTileSelect:je},`${e.id}-lecture-tile-${t}`)),N.filter(e=>Y(e)).map(e=>n(oe,{block:e,onSelect:Ne},`custom-block-${e.id}`)),Z.map(e=>n(ge,{lecture:e,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Z.length>0&&n(ve,{overlaps:Ce}),k&&q!==null&&n(xe,{ratio:q,dayIndex:_e})]})]})]}),n(pe,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(we?` has-overflow`:``),children:i(v,{columns:`repeat(${U.length}, ${u||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${G}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[N.filter(e=>!Y(e)).map(e=>n(oe,{block:e,onSelect:Ne,overflow:!0},`custom-overflow-${e.id}`)),Se.map((e,t)=>n(be,{lecture:e,isGhost:M.every(t=>t.id!==e.id),deleteLecture:Me,handleLectureTileSelect:je,handleLectureTileHover:Ae,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Se=(0,_.memo)(X);export{b as a,ee as i,S as n,y as r,Se as t};
//# sourceMappingURL=CustomTimeTableGrid-B1JCFtR0.js.map