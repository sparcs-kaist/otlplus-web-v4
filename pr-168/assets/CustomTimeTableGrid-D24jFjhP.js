(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`7c18f03be3bee92f4177bfae0df764c33e1653b3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`f5ed1253-a853-4355-8810-b9dc7882200d`,e._sentryDebugIdIdentifier=`sentry-dbid-f5ed1253-a853-4355-8810-b9dc7882200d`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Da5pZWsP.js";import{n,o as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-DZSiOs1U.js";import{n as a,t as o}from"./FlexWrapper-H-TAwLUZ.js";import{i as s,n as c}from"./emotion-react.browser.esm-DplTP2zx.js";import{S as l}from"./axios-DXneUpZH.js";import{d as u}from"./useAPI-B1_wBlcB.js";import{t as d}from"./Icon-I3VnZQVH.js";import{t as f}from"./useTranslation-dtsqBtHf.js";import{t as p}from"./IconButton-3zxE5nu5.js";import{t as m}from"./Close-DC5R725D.js";import{t as h}from"./Typography-D7tqM0iy.js";import{t as g}from"./light-Di0xRc1W.js";var _=t(e()),v=a.div`
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
`,y=e=>`${e.kind}:${e.data.id}`,b=e=>e.times??[{day:e.day,begin:e.begin,end:e.end}],x=e=>e.kind===l.LECTURE?e.data.classes:b(e.data),S=(e,t)=>x(e).some(e=>x(t).some(t=>e.day===t.day&&e.begin<t.end&&t.begin<e.end)),C=a(o)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]):not(
            [data-selected-items~="${({itemKey:e})=>e}"]
        )
        & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,w=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],T=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],ee=a(o)`
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
`,E=a(o)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function D(){return n(ee,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,children:n(E,{direction:`column`,gap:0,flex:`1 1 auto`})})}var te=(0,_.memo)(D),O=`lecture-tile`,k=e=>c`
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
`,A=s`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,ne=a(o)`
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
        animation: ${A} 0.3s ease-out forwards;
    }
`,re=a(C)`
    background: ${({theme:e,courseId:t})=>()=>{let n=T(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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
                ${({theme:e})=>k(e)}
            }
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lectures~="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>k(e)}
        }
    }
`,j=a(o)`
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
`;function M({lecture:e,classIdx:t,deleteLecture:r,handleLectureTileSelect:a,handleLectureTileHover:s,handleLectureTileLeave:c}){let u=e.classes[t];if(u==null)return null;let f=(0,_.useCallback)(t=>{a?.(e,t)},[a,e]),g=(0,_.useCallback)(()=>{s?.(e)},[s,e]),v=(0,_.useCallback)(()=>{c?.()},[c]);return n(ne,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:u.day+1,rowStart:u.begin/30-14,rowEnd:u.end/30-14,lectureId:e.id,"data-class-time":u.day*24*60+u.begin,onPointerDown:f,onPointerEnter:g,onPointerLeave:v,children:i(re,{itemKey:y({kind:l.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:O,children:[n(o,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:i(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(h,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${u.buildingCode}) ${u.roomName}`})]})}),r&&n(j,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(p,{styles:{padding:3},onClick:()=>r(e),children:n(d,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(m,{})})})})]})})}var N=(0,_.memo)(M,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),P=a(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,F=a(o)`
    border-radius: 2px;
`;function I({day:e,begin:t,end:r}){return n(P,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(F,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ie=a(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,ae=a(C)`
    border-radius: 2px;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=T(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lectures~="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>k(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>k(e)}
            }
        }
    }

    [data-selected-lectures~="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }

    .custom-timetable[data-selected-lectures=""] & {
        transform: none;
        box-shadow: none;
    }

    [data-flash-lectures~="${({lectureId:e})=>e}"] & {
        animation: ${A} 0.3s ease-out forwards;
    }
`;function oe({lecture:e,classIdx:t,deleteLecture:r}){let a=t==null?null:e.classes[t],{t:s}=f();return i(ie,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:a!=null&&w[a.day]&&a.begin!=null&&a.end!=null?i(h,{type:`Smaller`,color:`Text.light`,children:[s(`common.days.${w[a.day]}`),` `,Math.floor(a.begin/60),`:`,a.begin%60==0?`00`:`30`,` - `,Math.floor(a.end/60),`:`,a.end%60==0?`00`:`30`]}):n(h,{type:`Smaller`,color:`Text.light`,children:s(`timetable.noTimeInfo`)})}),i(ae,{itemKey:y({kind:l.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:O,children:[n(h,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:a==null?``:`(${a.buildingCode}) ${a.roomName}`}),r&&n(j,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(p,{styles:{padding:3},onClick:()=>r(),children:n(d,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(m,{})})})})]})]})}var L=`custom-block-tile`,R=e=>c`
    background: ${e.colors.Highlight.default};

    .block-title {
        color: #ffffff;
    }

    .block-info {
        color: rgba(255, 255, 255, 0.5);
    }
`,z=a(o)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;

    &:has(.${L}:hover) .${L} {
        ${({theme:e})=>R(e)}
    }

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`,B=a(C)`
    background: ${({theme:e,blockId:t})=>{let n=T(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;

        &:hover {
            ${({theme:e})=>R(e)}
        }
    }

    [data-flash-custom-blocks~="${({blockId:e})=>e}"] & {
        background: ${({theme:e})=>e.colors.Highlight.default};
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        ${({theme:e})=>R(e)}
    }
`;function V({block:e,time:t,onSelect:a,overflow:o=!1}){let{t:s}=f(),c=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`][t.day],u=e=>`${Math.floor(e/60).toString().padStart(2,`0`)}:${(e%60).toString().padStart(2,`0`)}`,d=`${s(`common.days.${c}`)} ${u(t.begin)}–${u(t.end)}`;return n(z,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,4)+1,rowStart:o?void 0:t.begin/30-14,rowEnd:o?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>a?.(e,t),"data-custom-block-id":e.id,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${d}`,children:n(B,{itemKey:y({kind:l.CUSTOM,data:e}),direction:`column`,gap:0,flex:`1 1 auto`,align:`flex-start`,justify:`flex-start`,padding:`6px`,blockId:e.id,className:L,children:i(r,{theme:g,children:[n(h,{type:`Small`,color:`Text.dark`,className:`block-title`,children:e.block_name}),o&&n(h,{type:`Small`,color:`Text.lighter`,className:`block-info`,children:d}),e.place&&n(h,{type:`Small`,color:`Text.lighter`,className:`block-info`,children:e.place})]})})})}var se=(0,_.memo)(V),H=8,ce=24,le=Array.from({length:17},(e,t)=>H+t),ue=le.map(e=>(e%12||12).toString()),U=(ue.length-1)*2,W=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],G=20,de=.8,K=5,q=1,fe=a(v)`
    z-index: 1;
`,pe=a(o)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,me=a(o)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,he=a(v)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,J=a(o)`
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
`,ge=(0,_.memo)(({dayIdx:e,timeIdx:t,...r})=>n(J,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),_e=a.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${O}:hover
        )
        &
        .${O} {
        ${({theme:e})=>k(e)}
    }
`,ve=(0,_.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileLeave:r,handleLectureTileSelect:i,deleteLecture:a,isGhost:o=!1})=>{let s=(0,_.useCallback)(()=>{t?.(e)},[t,e]),c=(0,_.useCallback)(()=>{r?.()},[r]),l=(0,_.useCallback)(t=>{i?.(e,t)},[i,e]),u=(0,_.useCallback)(()=>{a?.(e)},[a,e]);return n(_e,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,...o?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>Y({day:t.day,begin:t.begin,end:t.end})?n(N,{lecture:e,classIdx:r,deleteLecture:a?u:void 0},`${r}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),ye=a.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${O}:hover) .${O} {
        ${({theme:e})=>k(e)}
    }
`,be=(0,_.memo)(({overlaps:e})=>n(ye,{children:e.map((e,t)=>n(I,{...e},t))}));function Y(e){if(!e)return!1;let t=e.begin/60-H,n=e.end/60-H,{day:r}=e;return u.Mon<=r&&r<=u.Fri&&t>=0&&n<=16&&n-t>=.5&&e.begin%30==0&&e.end%30==0}var xe=a.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${O}:hover
        )
        &
        .${O} {
        ${({theme:e})=>k(e)}
    }
`,Se=(0,_.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o})=>{let s=(0,_.useCallback)(()=>{i?.(e)},[i,e]),c=(0,_.useCallback)(()=>{a?.()},[a]),l=(0,_.useCallback)(t=>{o?.(e,t)},[o,e]),u=(0,_.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length===0||e.classes.filter(e=>!Y({...e})).length>0?n(xe,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,children:e.classes.length===0?n(oe,{lecture:e,deleteLecture:t?void 0:u},e.id):e.classes.map((r,i)=>{let{day:a,begin:o,end:s}=r;return Y({day:a,begin:o,end:s})?null:n(oe,{lecture:e,classIdx:i,deleteLecture:t?void 0:u},i)})}):null},(e,t)=>e.lecture===t.lecture),Ce=a.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${G}px + (100% - ${G*1.2}px) *
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
`;function we({timetableItems:e,selectedItems:t,flashItemKeys:r,onItemSelect:a,lectures:s=[],customBlocks:c=[],cellWidth:u,needTimeFilter:d=!0,timeFilter:p,setTimeFilter:m,needLectureInteraction:g=!0,needLectureDeletable:S=!0,deleteLecture:C,hoveredLectures:w=[],setHoveredLectures:T,selectedLectures:ee=[],onLectureSelect:E,selectedCustomBlock:D=null,onCustomBlockSelect:O,isCustomBlockSectionOpen:k=!1,needCurrentTimeBar:A=!1,flashLectureIds:ne=[]}){let{t:re}=f(),j=(0,_.useMemo)(()=>e??[...s.map(e=>({kind:l.LECTURE,data:e})),...c.map(e=>({kind:l.CUSTOM,data:e}))],[e,s,c]),M=(0,_.useMemo)(()=>j.flatMap(e=>e.kind===l.LECTURE?[e.data]:[]),[j]),N=(0,_.useMemo)(()=>j.flatMap(e=>e.kind===l.CUSTOM?[e.data]:[]),[j]),P=(0,_.useMemo)(()=>N.flatMap(e=>b(e).map((t,n)=>({block:e,time:t,index:n}))),[N]),F=(0,_.useMemo)(()=>t??[...ee.map(e=>({kind:l.LECTURE,data:e})),...D?[{kind:l.CUSTOM,data:D}]:[]],[t,ee,D]),I=(0,_.useMemo)(()=>F.flatMap(e=>e.kind===l.LECTURE?[e.data]:[]),[F]),ie=F.flatMap(e=>e.kind===l.CUSTOM?[e.data.id]:[]),ae=r?.filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1]))??ne,oe=(0,_.useRef)(null),L=(0,_.useRef)(null),R=(0,_.useRef)(null),z=(0,_.useRef)(!1),B=(0,_.useRef)(null),V=(0,_.useRef)(null),J=(0,_.useRef)(null),[_e,ye]=(0,_.useState)(null),[xe,we]=(0,_.useState)(-1),X=(0,_.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<H||n>ce||t<0||t>4){ye(null);return}let r=(n-H)/16;ye(r),we(t)},[]);(0,_.useEffect)(()=>{if(!A)return;X();let e=setInterval(X,6e4);return window.addEventListener(`resize`,X),()=>{clearInterval(e),window.removeEventListener(`resize`,X)}},[A,X]);let Te=(0,_.useMemo)(()=>{let e=[...M,...w,...I].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[M,w,I]),Z=(0,_.useMemo)(()=>{if(!g)return[];let e=w.filter(e=>!M.some(t=>t.id===e.id)),t=I.filter(e=>!M.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[w,I,M,g]),Ee=(0,_.useMemo)(()=>{if(!g||Z.length===0)return[];let e=[],t=j.flatMap(x);for(let n of Z)for(let r of x({kind:l.LECTURE,data:n}))for(let n of t){let t=Math.max(r.begin,n.begin),i=Math.min(r.end,n.end);r.day===n.day&&t<i&&e.push({day:r.day,begin:(t/60-H)*2,end:(i/60-H)*2})}return e},[Z,j,g]),De=Te.some(e=>e.classes.length===0||e.classes.some(e=>!Y(e)))||P.some(({time:e})=>!Y(e)),Oe=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;R.current?.style.setProperty(`--hover-day`,(i+1).toString()),R.current?.style.setProperty(`--hover-start`,a.toString()),R.current?.style.setProperty(`--hover-end`,(a+1).toString()),R.current?.setAttribute(`data-is-dragging`,`true`),L.current?.setAttribute(`data-is-dragging`,`true`),z.current=!0,V.current=[r,r+1],J.current=i,B.current=r},[]),Q=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=B.current==null?r:B.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;R.current?.style.setProperty(`--hover-start`,c.toString()),R.current?.style.setProperty(`--hover-end`,l.toString()),V.current=[o,s+1]},[]),ke=(0,_.useCallback)(()=>{V.current&&J.current!==null&&m?.({day:J.current,begin:(H+V.current[0]*.5)*60,end:(H+V.current[1]*.5)*60}),V.current&&(V.current[1]-V.current[0]>1||k)?(R.current?.setAttribute(`data-is-dragging`,`wait`),L.current?.setAttribute(`data-is-dragging`,`wait`)):(V.current&&V.current[1]-V.current[0]<=1||!p)&&(R.current?.setAttribute(`data-is-dragging`,`false`),L.current?.setAttribute(`data-is-dragging`,`false`),m?.(null)),z.current=!1,V.current=null,J.current=null,B.current=null},[k,p,m]);(0,_.useEffect)(()=>{p||(R.current?.setAttribute(`data-is-dragging`,`false`),L.current?.setAttribute(`data-is-dragging`,`false`))},[p]);let Ae=(0,_.useCallback)(e=>{z.current||!d||Oe(e.clientX,e.clientY)},[d]),je=(0,_.useCallback)(e=>{!z.current||B.current===null||Q(e.clientX,e.clientY)},[Q]),Me=(0,_.useCallback)(e=>{if(!z.current||B.current===null)return;let t=e.touches[0];t!=null&&Q(t.clientX,t.clientY)},[Q]),Ne=(0,_.useCallback)(e=>{g&&T?.([e])},[T,g]),Pe=(0,_.useCallback)((e,t)=>{g&&(a?a({kind:l.LECTURE,data:e},t):E?.(e,t))},[E,a,g]),$=(0,_.useCallback)(()=>{T?.([]),R.current?.setAttribute(`data-is-hovering`,`false`)},[T]),Fe=(0,_.useCallback)(e=>{g&&S&&($(),C?.(e.id))},[S,C,$]),Ie=(0,_.useCallback)((e,t)=>{g&&(a?a({kind:l.CUSTOM,data:e},t):O?.(e,t))},[g,O,a]);return n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:oe,"data-hovered-lectures":g?w.map(e=>e.id).join(` `):``,"data-selected-lectures":g?I.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":g?ie.join(` `):``,"data-selected-items":g?F.map(y).join(` `):``,"data-flash-custom-blocks":(r??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ae.join(` `),"data-interaction":g,"data-lecture-deletable":S,onPointerLeave:$,onTouchEnd:$,children:i(v,{columns:`1fr`,rows:De?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[i(pe,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:De?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${G*de}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:ue.map((e,t)=>n(h,{color:`Text.dark`,children:e},t))})}),i(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${G*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(fe,{columns:`repeat(${W.length}, ${u||`1fr`})`,rows:`${G}px repeat(${U}, 1fr)`,flow:`column`,gap:`0px ${K}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:L,"data-is-dragging":`false`,"data-need-time-filter":d,...d?{onPointerDown:Ae,onPointerMove:je,onPointerUp:ke,onPointerLeave:ke,onTouchMove:Me,onTouchEnd:ke}:{},children:W.map((e,t)=>i(_.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(h,{type:`Small`,color:`Text.dark`,children:re(`common.days.${e}`)})}),Array.from({length:U}).map((r,i)=>n(ge,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===U-1?`last`:``,i%2==0&&(le[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),i(he,{columns:`repeat(${W.length}, ${u||`1fr`})`,rows:`${G}px repeat(${U}, 1fr)`,flow:`column`,gap:`${q}px ${K}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${G*.19999999999999996}px 0`,ref:R,"data-is-dragging":!1,children:[d&&n(te,{}),M.map((e,t)=>n(ve,{lecture:e,deleteLecture:Fe,handleLectureTileHover:Ne,handleLectureTileLeave:$,handleLectureTileSelect:Pe},`${e.id}-lecture-tile-${t}`)),P.filter(({time:e})=>Y(e)).map(({block:e,time:t,index:r})=>n(se,{block:e,time:t,onSelect:Ie},`custom-block-${e.id}-${r}`)),Z.map(e=>n(ve,{lecture:e,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Z.length>0&&n(be,{overlaps:Ee}),A&&_e!==null&&n(Ce,{ratio:_e,dayIndex:xe})]})]})]}),n(me,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(De?` has-overflow`:``),children:i(v,{columns:`repeat(${W.length}, ${u||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${K}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[P.filter(({time:e})=>!Y(e)).map(({block:e,time:t,index:r})=>n(se,{block:e,time:t,onSelect:Ie,overflow:!0},`custom-overflow-${e.id}-${r}`)),Te.map((e,t)=>n(Se,{lecture:e,isGhost:M.every(t=>t.id!==e.id),deleteLecture:Fe,handleLectureTileSelect:Pe,handleLectureTileHover:Ne,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var X=(0,_.memo)(we);export{y as a,x as i,T as n,S as o,b as r,X as t};
//# sourceMappingURL=CustomTimeTableGrid-D24jFjhP.js.map