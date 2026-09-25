(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`34fe7d01f69953ec5eb7a213461fcb30bc0b1a28`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`e9789657-e746-45ca-b09b-75852eb08f22`,e._sentryDebugIdIdentifier=`sentry-dbid-e9789657-e746-45ca-b09b-75852eb08f22`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CaAGwytK.js";import{n,o as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-XJ3qVEsb.js";import{n as a,t as o}from"./FlexWrapper-c0HgwLaI.js";import{i as s,n as c}from"./emotion-react.browser.esm-BWT_Dpz8.js";import{S as l}from"./axios-CFbJQQiu.js";import{d as u}from"./useAPI-DKCBwQJw.js";import{t as d}from"./Icon-C88ZBYXj.js";import{t as f}from"./useTranslation-BvbszWSG.js";import{t as p}from"./IconButton-B9LHcISm.js";import{t as m}from"./Close-D5TncItc.js";import{t as h}from"./Typography-CMHFeQrh.js";import{t as g}from"./light-DVZTsEEN.js";var _=t(e(),1),v=a.div`
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
`,te=a(o)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function E({style:e,className:t}){return n(ee,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(te,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ne=(0,_.memo)(E),D=`lecture-tile`,O=e=>c`
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
`,k=s`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,A=a(o)`
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
        animation: ${k} 0.3s ease-out forwards;
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
                ${({theme:e})=>O(e)}
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
            ${({theme:e})=>O(e)}
        }
    }
`,ie=a(o)`
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
`;function j({lecture:e,classIdx:t,deleteLecture:r,handleLectureTileSelect:a,handleLectureTileHover:s,handleLectureTileLeave:c}){let u=e.classes[t];if(u==null)return null;let f=(0,_.useCallback)(t=>{a?.(e,t)},[a,e]),g=(0,_.useCallback)(()=>{s?.(e)},[s,e]),v=(0,_.useCallback)(()=>{c?.()},[c]);return n(A,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:u.day+1,rowStart:u.begin/30-14,rowEnd:u.end/30-14,lectureId:e.id,"data-class-time":u.day*24*60+u.begin,onPointerDown:f,onPointerEnter:g,onPointerLeave:v,children:i(re,{itemKey:y({kind:l.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:D,children:[n(o,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:i(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(h,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${u.buildingCode}) ${u.roomName}`})]})}),r&&n(ie,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(p,{styles:{padding:3},onClick:()=>r(e),children:n(d,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(m,{})})})})]})})}var M=(0,_.memo)(j,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),ae=a(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,N=a(o)`
    border-radius: 2px;
`;function P({day:e,begin:t,end:r}){return n(ae,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(N,{direction:`column`,gap:0,flex:`1 1 auto`})})}var F=a(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,oe=a(C)`
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
            ${({theme:e})=>O(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>O(e)}
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
        animation: ${k} 0.3s ease-out forwards;
    }
`;function I({lecture:e,classIdx:t,deleteLecture:r}){let a=t==null?null:e.classes[t],{t:s}=f();return i(F,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:a!=null&&w[a.day]&&a.begin!=null&&a.end!=null?i(h,{type:`Smaller`,color:`Text.light`,children:[s(`common.days.${w[a.day]}`),` `,Math.floor(a.begin/60),`:`,a.begin%60==0?`00`:`30`,` - `,Math.floor(a.end/60),`:`,a.end%60==0?`00`:`30`]}):n(h,{type:`Smaller`,color:`Text.light`,children:s(`timetable.noTimeInfo`)})}),i(oe,{itemKey:y({kind:l.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:D,children:[n(h,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(h,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:a==null?``:`(${a.buildingCode}) ${a.roomName}`}),r&&n(ie,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(p,{styles:{padding:3},onClick:()=>r(),children:n(d,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(m,{})})})})]})]})}var L=`custom-block-tile`,R=e=>c`
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
`;function V({block:e,time:t,onSelect:a,overflow:o=!1}){let{t:s}=f(),c=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`][t.day],u=e=>`${Math.floor(e/60).toString().padStart(2,`0`)}:${(e%60).toString().padStart(2,`0`)}`,d=`${s(`common.days.${c}`)} ${u(t.begin)}–${u(t.end)}`;return n(z,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,4)+1,rowStart:o?void 0:t.begin/30-14,rowEnd:o?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>a?.(e,t),"data-custom-block-id":e.id,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${d}`,children:n(B,{itemKey:y({kind:l.CUSTOM,data:e}),direction:`column`,gap:0,flex:`1 1 auto`,align:`flex-start`,justify:`flex-start`,padding:`6px`,blockId:e.id,className:L,children:i(r,{theme:g,children:[n(h,{type:`Small`,color:`Text.dark`,className:`block-title`,children:e.block_name}),o&&n(h,{type:`Small`,color:`Text.lighter`,className:`block-info`,children:d}),e.place&&n(h,{type:`Small`,color:`Text.lighter`,className:`block-info`,children:e.place})]})})})}var se=(0,_.memo)(V),H=8,ce=24,le=Array.from({length:17},(e,t)=>H+t),ue=le.map(e=>(e%12||12).toString()),U=(ue.length-1)*2,W=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],G=20,de=.8,fe=5,K=1,pe=a(v)`
    z-index: 1;
`,me=a(o)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,he=a(o)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,ge=a(v)`
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
`,_e=(0,_.memo)(({dayIdx:e,timeIdx:t,...r})=>n(q,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),J=a.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${D}:hover
        )
        &
        .${D} {
        ${({theme:e})=>O(e)}
    }
`,ve=(0,_.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileLeave:r,handleLectureTileSelect:i,deleteLecture:a,isGhost:o=!1})=>{let s=(0,_.useCallback)(()=>{t?.(e)},[t,e]),c=(0,_.useCallback)(()=>{r?.()},[r]),l=(0,_.useCallback)(t=>{i?.(e,t)},[i,e]),u=(0,_.useCallback)(()=>{a?.(e)},[a,e]);return n(J,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,...o?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>Y({day:t.day,begin:t.begin,end:t.end})?n(M,{lecture:e,classIdx:r,deleteLecture:a?u:void 0},`${r}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),ye=a.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${D}:hover) .${D} {
        ${({theme:e})=>O(e)}
    }
`,be=(0,_.memo)(({overlaps:e})=>n(ye,{children:e.map((e,t)=>n(P,{...e},t))}));function Y(e){if(!e)return!1;let t=e.begin/60-H,n=e.end/60-H,{day:r}=e;return u.Mon<=r&&r<=u.Fri&&t>=0&&n<=16&&n-t>=.5&&e.begin%30==0&&e.end%30==0}var xe=a.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${D}:hover
        )
        &
        .${D} {
        ${({theme:e})=>O(e)}
    }
`,Se=(0,_.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o})=>{let s=(0,_.useCallback)(()=>{i?.(e)},[i,e]),c=(0,_.useCallback)(()=>{a?.()},[a]),l=(0,_.useCallback)(t=>{o?.(e,t)},[o,e]),u=(0,_.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length===0||e.classes.filter(e=>!Y({...e})).length>0?n(xe,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,children:e.classes.length===0?n(I,{lecture:e,deleteLecture:t?void 0:u},e.id):e.classes.map((r,i)=>{let{day:a,begin:o,end:s}=r;return Y({day:a,begin:o,end:s})?null:n(I,{lecture:e,classIdx:i,deleteLecture:t?void 0:u},i)})}):null},(e,t)=>e.lecture===t.lecture),Ce=a.div`
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
`;function we({timetableItems:e,selectedItems:t,flashItemKeys:r,onItemSelect:a,lectures:s=[],customBlocks:c=[],cellWidth:u,needTimeFilter:d=!0,timeFilter:p,setTimeFilter:m,needLectureInteraction:g=!0,needLectureDeletable:S=!0,deleteLecture:C,hoveredLectures:w=[],setHoveredLectures:T,selectedLectures:ee=[],onLectureSelect:te,selectedCustomBlock:E=null,onCustomBlockSelect:D,isCustomBlockSectionOpen:O=!1,customBlockDraftTimes:k=[],needCurrentTimeBar:A=!1,flashLectureIds:re=[]}){let{t:ie}=f(),j=(0,_.useMemo)(()=>e??[...s.map(e=>({kind:l.LECTURE,data:e})),...c.map(e=>({kind:l.CUSTOM,data:e}))],[e,s,c]),M=(0,_.useMemo)(()=>j.flatMap(e=>e.kind===l.LECTURE?[e.data]:[]),[j]),ae=(0,_.useMemo)(()=>j.flatMap(e=>e.kind===l.CUSTOM?[e.data]:[]),[j]),N=(0,_.useMemo)(()=>ae.flatMap(e=>b(e).map((t,n)=>({block:e,time:t,index:n}))),[ae]),P=(0,_.useMemo)(()=>t??[...ee.map(e=>({kind:l.LECTURE,data:e})),...E?[{kind:l.CUSTOM,data:E}]:[]],[t,ee,E]),F=(0,_.useMemo)(()=>P.flatMap(e=>e.kind===l.LECTURE?[e.data]:[]),[P]),oe=P.flatMap(e=>e.kind===l.CUSTOM?[e.data.id]:[]),I=r?.filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1]))??re,L=(0,_.useRef)(null),R=(0,_.useRef)(null),z=(0,_.useRef)(null),B=(0,_.useRef)(!1),V=(0,_.useRef)(null),q=(0,_.useRef)(null),J=(0,_.useRef)(null),[ye,xe]=(0,_.useState)(null),[we,Te]=(0,_.useState)(-1),X=(0,_.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<H||n>ce||t<0||t>4){xe(null);return}let r=(n-H)/16;xe(r),Te(t)},[]);(0,_.useEffect)(()=>{if(!A)return;X();let e=setInterval(X,6e4);return window.addEventListener(`resize`,X),()=>{clearInterval(e),window.removeEventListener(`resize`,X)}},[A,X]);let Ee=(0,_.useMemo)(()=>{let e=[...M,...w,...F].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[M,w,F]),Z=(0,_.useMemo)(()=>{if(!g)return[];let e=w.filter(e=>!M.some(t=>t.id===e.id)),t=F.filter(e=>!M.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[w,F,M,g]),De=(0,_.useMemo)(()=>{if(!g||Z.length===0)return[];let e=[],t=j.flatMap(x);for(let n of Z)for(let r of x({kind:l.LECTURE,data:n}))for(let n of t){let t=Math.max(r.begin,n.begin),i=Math.min(r.end,n.end);r.day===n.day&&t<i&&e.push({day:r.day,begin:(t/60-H)*2,end:(i/60-H)*2})}return e},[Z,j,g]),Oe=Ee.some(e=>e.classes.length===0||e.classes.some(e=>!Y(e)))||N.some(({time:e})=>!Y(e)),ke=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;z.current?.style.setProperty(`--hover-day`,(i+1).toString()),z.current?.style.setProperty(`--hover-start`,a.toString()),z.current?.style.setProperty(`--hover-end`,(a+1).toString()),z.current?.setAttribute(`data-is-dragging`,`true`),R.current?.setAttribute(`data-is-dragging`,`true`),B.current=!0,q.current=[r,r+1],J.current=i,V.current=r},[]),Q=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=V.current==null?r:V.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;z.current?.style.setProperty(`--hover-start`,c.toString()),z.current?.style.setProperty(`--hover-end`,l.toString()),q.current=[o,s+1]},[]),Ae=(0,_.useCallback)(()=>{q.current&&J.current!==null&&m?.({day:J.current,begin:(H+q.current[0]*.5)*60,end:(H+q.current[1]*.5)*60}),O?(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`)):q.current&&q.current[1]-q.current[0]>1?(z.current?.setAttribute(`data-is-dragging`,`wait`),R.current?.setAttribute(`data-is-dragging`,`wait`)):(q.current&&q.current[1]-q.current[0]<=1||!p)&&(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`),m?.(null)),B.current=!1,q.current=null,J.current=null,V.current=null},[O,p,m]);(0,_.useEffect)(()=>{(!p||O&&!B.current)&&(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`))},[p,O]);let je=(0,_.useCallback)(e=>{B.current||!d||ke(e.clientX,e.clientY)},[d]),Me=(0,_.useCallback)(e=>{!B.current||V.current===null||Q(e.clientX,e.clientY)},[Q]),Ne=(0,_.useCallback)(e=>{if(!B.current||V.current===null)return;let t=e.touches[0];t!=null&&Q(t.clientX,t.clientY)},[Q]),Pe=(0,_.useCallback)(e=>{g&&T?.([e])},[T,g]),Fe=(0,_.useCallback)((e,t)=>{g&&(a?a({kind:l.LECTURE,data:e},t):te?.(e,t))},[te,a,g]),$=(0,_.useCallback)(()=>{T?.([]),z.current?.setAttribute(`data-is-hovering`,`false`)},[T]),Ie=(0,_.useCallback)(e=>{g&&S&&($(),C?.(e.id))},[S,C,$]),Le=(0,_.useCallback)((e,t)=>{g&&(a?a({kind:l.CUSTOM,data:e},t):D?.(e,t))},[g,D,a]);return n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:L,"data-hovered-lectures":g?w.map(e=>e.id).join(` `):``,"data-selected-lectures":g?F.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":g?oe.join(` `):``,"data-selected-items":g?P.map(y).join(` `):``,"data-flash-custom-blocks":(r??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":I.join(` `),"data-interaction":g,"data-lecture-deletable":S,onPointerLeave:$,onTouchEnd:$,children:i(v,{columns:`1fr`,rows:Oe?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[i(me,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Oe?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${G*de}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:ue.map((e,t)=>n(h,{color:`Text.dark`,children:e},t))})}),i(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${G*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(pe,{columns:`repeat(${W.length}, ${u||`1fr`})`,rows:`${G}px repeat(${U}, 1fr)`,flow:`column`,gap:`0px ${fe}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:R,"data-is-dragging":`false`,"data-need-time-filter":d,...d?{onPointerDown:je,onPointerMove:Me,onPointerUp:Ae,onPointerLeave:Ae,onTouchMove:Ne,onTouchEnd:Ae}:{},children:W.map((e,t)=>i(_.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(h,{type:`Small`,color:`Text.dark`,children:ie(`common.days.${e}`)})}),Array.from({length:U}).map((r,i)=>n(_e,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===U-1?`last`:``,i%2==0&&(le[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),i(ge,{columns:`repeat(${W.length}, ${u||`1fr`})`,rows:`${G}px repeat(${U}, 1fr)`,flow:`column`,gap:`${K}px ${fe}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${G*.19999999999999996}px 0`,ref:z,"data-is-dragging":!1,children:[d&&n(ne,{}),O&&k.filter(Y).map((e,t)=>n(ne,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-H)*2+2} / ${(e.end/60-H)*2+2}`}},t)),M.map((e,t)=>n(ve,{lecture:e,deleteLecture:Ie,handleLectureTileHover:Pe,handleLectureTileLeave:$,handleLectureTileSelect:Fe},`${e.id}-lecture-tile-${t}`)),N.filter(({time:e})=>Y(e)).map(({block:e,time:t,index:r})=>n(se,{block:e,time:t,onSelect:Le},`custom-block-${e.id}-${r}`)),Z.map(e=>n(ve,{lecture:e,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Z.length>0&&n(be,{overlaps:De}),A&&ye!==null&&n(Ce,{ratio:ye,dayIndex:we})]})]})]}),n(he,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Oe?` has-overflow`:``),children:i(v,{columns:`repeat(${W.length}, ${u||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${fe}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[N.filter(({time:e})=>!Y(e)).map(({block:e,time:t,index:r})=>n(se,{block:e,time:t,onSelect:Le,overflow:!0},`custom-overflow-${e.id}-${r}`)),Ee.map((e,t)=>n(Se,{lecture:e,isGhost:M.every(t=>t.id!==e.id),deleteLecture:Ie,handleLectureTileSelect:Fe,handleLectureTileHover:Pe,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Te=(0,_.memo)(we);export{y as a,x as i,T as n,S as o,b as r,Te as t};
//# sourceMappingURL=CustomTimeTableGrid-C2q5nEC5.js.map