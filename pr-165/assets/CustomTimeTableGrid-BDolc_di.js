(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`bb847b14d7c1c5d83bc31587c22652ecf12452e6`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`7185936f-56cb-4041-9b4f-59c17daab831`,e._sentryDebugIdIdentifier=`sentry-dbid-7185936f-56cb-4041-9b4f-59c17daab831`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Cm1ZQUXn.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-B6DQSma1.js";import{n as i,t as a}from"./FlexWrapper-DnOCdROT.js";import{i as o,n as s}from"./emotion-react.browser.esm-BiXQ0Sti.js";import{c,f as l}from"./useAPI-DephItSB.js";import{t as u}from"./Icon-C7BKq74y.js";import{t as d}from"./useTranslation-CfxTHiDx.js";import{t as f}from"./IconButton-BSp2SzAM.js";import{t as p}from"./Close-BUK3H1Gk.js";import{t as m}from"./Typography-BhPxHMQG.js";var h=t(e(),1),g=i.div`
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
`,_=e=>`${e.kind}:${e.data.id}`,v=e=>e.times??[{day:e.day,begin:e.begin,end:e.end}],y=i(a)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,b=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],x=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],S=i(a)`
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
`,C=i(a)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function w(){return n(S,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,children:n(C,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ee=(0,h.memo)(w),T=`lecture-tile`,E=e=>s`
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
`,D=o`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,te=i(a)`
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
        animation: ${D} 0.3s ease-out forwards;
    }
`,ne=i(y)`
    background: ${({theme:e,courseId:t})=>()=>{let n=x(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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
                ${({theme:e})=>E(e)}
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
            ${({theme:e})=>E(e)}
        }
    }
`,O=i(a)`
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
`;function k({lecture:e,classIdx:t,deleteLecture:i,handleLectureTileSelect:o,handleLectureTileHover:s,handleLectureTileLeave:l}){let d=e.classes[t];if(d==null)return null;let g=(0,h.useCallback)(t=>{o?.(e,t)},[o,e]),v=(0,h.useCallback)(()=>{s?.(e)},[s,e]),y=(0,h.useCallback)(()=>{l?.()},[l]);return n(te,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,lectureId:e.id,"data-class-time":d.day*24*60+d.begin,onPointerDown:g,onPointerEnter:v,onPointerLeave:y,children:r(ne,{itemKey:_({kind:c.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:T,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${d.buildingCode}) ${d.roomName}`})]})}),i&&n(O,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{styles:{padding:3},onClick:()=>i(e),children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})]})})}var A=(0,h.memo)(k),re=i(a)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,ie=i(a)`
    border-radius: 2px;
`;function j({day:e,begin:t,end:r}){return n(re,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(ie,{direction:`column`,gap:0,flex:`1 1 auto`})})}var M=i(a)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,N=i(y)`
    border-radius: 2px;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=x(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lectures~="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>E(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>E(e)}
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
        animation: ${D} 0.3s ease-out forwards;
    }
`;function P({lecture:e,classIdx:t,deleteLecture:i}){let o=t==null?null:e.classes[t],{t:s}=d();return r(M,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:o!=null&&b[o.day]&&o.begin!=null&&o.end!=null?r(m,{type:`Smaller`,color:`Text.light`,children:[s(`common.days.${b[o.day]}`),` `,Math.floor(o.begin/60),`:`,o.begin%60==0?`00`:`30`,` - `,Math.floor(o.end/60),`:`,o.end%60==0?`00`:`30`]}):n(m,{type:`Smaller`,color:`Text.light`,children:s(`timetable.noTimeInfo`)})}),r(N,{itemKey:_({kind:c.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:T,children:[n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:o==null?``:`(${o.buildingCode}) ${o.roomName}`}),i&&n(O,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{styles:{padding:3},onClick:()=>i(),children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})]})]})}var F=`custom-block-tile`,I=e=>s`
    background: ${e.colors.Highlight.default};

    .block-title {
        color: ${e.colors.Text.onHighlight.default};
    }

    .block-info {
        color: ${e.colors.Text.onHighlight.muted};
    }
`,L=i(a)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;

    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }
`,R=i(y)`
    background: ${({theme:e,blockId:t})=>{let n=x(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-custom-block-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
    }

    @media (hover: hover) {
        .custom-timetable[data-interaction="true"]:has(
                [data-custom-block-id="${({blockId:e})=>e}"][data-custom-block-interaction="true"]
                    .${F}:hover
            )
            & {
            ${({theme:e})=>I(e)}
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        ${({theme:e})=>I(e)}
    }
`;function ae({block:e,time:t=e,onSelect:i,overflow:o=!1}){let{t:s}=d(),l=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`][t.day],u=e=>`${Math.floor(e/60).toString().padStart(2,`0`)}:${(e%60).toString().padStart(2,`0`)}`,f=`${s(`common.days.${l}`)} ${u(t.begin)}–${u(t.end)}`;return n(L,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,4)+1,rowStart:o?void 0:t.begin/30-14,rowEnd:o?void 0:t.end/30-14,blockId:e.id,onPointerDown:()=>i?.(e),"data-custom-block-id":e.id,"data-custom-block-interaction":!!i,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${f}`,children:n(R,{itemKey:_({kind:c.CUSTOM,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:F,role:i?`button`:void 0,tabIndex:i?0:void 0,"aria-label":i?`${e.block_name} · ${f}`:void 0,onKeyDown:i?t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),i(e))}:void 0,children:n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,color:`TimeTable.title`,className:`block-title`,children:e.block_name}),e.place&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:e.place}),o&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:f})]})})})})}var oe=(0,h.memo)(ae),z=8,se=24,ce=Array.from({length:17},(e,t)=>z+t),le=ce.map(e=>(e%12||12).toString()),B=(le.length-1)*2,V=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],H=20,ue=.8,U=5,W=1,de=i(g)`
    z-index: 1;
`,fe=i(a)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,pe=i(a)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,me=i(g)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,he=i(a)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${W}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${W}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${W}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,ge=(0,h.memo)(({dayIdx:e,timeIdx:t,...r})=>n(he,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),G=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${T}:hover
        )
        &
        .${T} {
        ${({theme:e})=>E(e)}
    }
`,_e=(0,h.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileLeave:r,handleLectureTileSelect:i,deleteLecture:a,isGhost:o=!1})=>{let s=(0,h.useCallback)(()=>{t?.(e)},[t,e]),c=(0,h.useCallback)(()=>{r?.()},[r]),l=(0,h.useCallback)(t=>{i?.(e,t)},[i,e]),u=(0,h.useCallback)(()=>{a?.(e)},[a,e]);return n(G,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,...o?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>q({day:t.day,begin:t.begin,end:t.end})?n(A,{lecture:e,classIdx:r,deleteLecture:a?u:void 0},`${r}-lecture`):null)})}),K=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${T}:hover) .${T} {
        ${({theme:e})=>E(e)}
    }
`,ve=(0,h.memo)(({overlaps:e})=>n(K,{children:e.map((e,t)=>n(j,{...e},t))}));function q(e){if(!e)return!1;let t=e.begin/60-z,n=e.end/60-z,{day:r}=e;return l.Mon<=r&&r<=l.Fri&&t>=0&&n<=16&&n-t>=.5&&e.begin%30==0&&e.end%30==0}var J=i.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${T}:hover
        )
        &
        .${T} {
        ${({theme:e})=>E(e)}
    }
`,ye=(0,h.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o})=>{let s=(0,h.useCallback)(()=>{i?.(e)},[i,e]),c=(0,h.useCallback)(()=>{a?.()},[a]),l=(0,h.useCallback)(t=>{o?.(e,t)},[o,e]),u=(0,h.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length===0||e.classes.filter(e=>!q({...e})).length>0?n(J,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,children:e.classes.length===0?n(P,{lecture:e,deleteLecture:t||!r?void 0:u},e.id):e.classes.map((i,a)=>{let{day:o,begin:s,end:c}=i;return q({day:o,begin:s,end:c})?null:n(P,{lecture:e,classIdx:a,deleteLecture:t||!r?void 0:u},a)})}):null}),be=i.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${H}px + (100% - ${H*1.2}px) *
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
`;function Y({timetableItems:e,lectures:t=[],customBlocks:i=[],cellWidth:o,needTimeFilter:s=!0,timeFilter:l,setTimeFilter:u,needLectureInteraction:f=!0,needLectureDeletable:p=!0,deleteLecture:y,hoveredLectures:b=[],setHoveredLectures:x,selectedLectures:S=[],onLectureSelect:C,selectedCustomBlock:w=null,onCustomBlockSelect:T,isCustomBlockSectionOpen:E=!1,needCurrentTimeBar:D=!1,flashLectureIds:te=[]}){let{t:ne}=d(),O=(0,h.useMemo)(()=>e??[...t.map(e=>({kind:c.LECTURE,data:e})),...i.map(e=>({kind:c.CUSTOM,data:e}))],[e,t,i]),k=(0,h.useMemo)(()=>O.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[O]),A=(0,h.useMemo)(()=>O.flatMap(e=>e.kind===c.CUSTOM?v(e.data).map((t,n)=>({block:e.data,time:t,index:n})):[]),[O]),re=[...S.map(e=>({kind:c.LECTURE,data:e})),...w?[{kind:c.CUSTOM,data:w}]:[]],ie=(0,h.useRef)(null),j=(0,h.useRef)(null),M=(0,h.useRef)(null),N=(0,h.useRef)(!1),P=(0,h.useRef)(null),F=(0,h.useRef)(null),I=(0,h.useRef)(null),[L,R]=(0,h.useState)(null),[ae,he]=(0,h.useState)(-1),G=(0,h.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<z||n>se||t<0||t>4){R(null);return}let r=(n-z)/16;R(r),he(t)},[]);(0,h.useEffect)(()=>{if(!D)return;G();let e=setInterval(G,6e4);return window.addEventListener(`resize`,G),()=>{clearInterval(e),window.removeEventListener(`resize`,G)}},[D,G]);let K=(0,h.useMemo)(()=>{let e=[...k,...b,...S].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[k,b,S]),J=(0,h.useMemo)(()=>{if(!f)return[];let e=b.filter(e=>!k.some(t=>t.id===e.id)),t=S.filter(e=>!k.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[b,S,k,f]),Y=(0,h.useMemo)(()=>{if(!f||J.length===0)return[];let e=[];return J.forEach(t=>{t.classes.forEach(t=>{k.forEach(n=>{n.classes.forEach(n=>{if(t.day===n.day){let r=t.begin,i=t.end,a=n.begin,o=n.end,s=Math.max(r,a),c=Math.min(i,o);s<c&&e.push({day:t.day,begin:(s/60-z)*2,end:(c/60-z)*2})}})})})}),e},[J,k,f]),X=(0,h.useMemo)(()=>K.some(e=>e.classes.some(e=>!q(e)))||A.some(({time:e})=>!q(e)),[K,A]),xe=(0,h.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;M.current?.style.setProperty(`--hover-day`,(i+1).toString()),M.current?.style.setProperty(`--hover-start`,a.toString()),M.current?.style.setProperty(`--hover-end`,(a+1).toString()),M.current?.setAttribute(`data-is-dragging`,`true`),j.current?.setAttribute(`data-is-dragging`,`true`),N.current=!0,F.current=[r,r+1],I.current=i,P.current=r},[]),Z=(0,h.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=P.current==null?r:P.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;M.current?.style.setProperty(`--hover-start`,c.toString()),M.current?.style.setProperty(`--hover-end`,l.toString()),F.current=[o,s+1]},[]),Q=(0,h.useCallback)(()=>{F.current&&I.current!==null&&u?.({day:I.current,begin:(z+F.current[0]*.5)*60,end:(z+F.current[1]*.5)*60}),F.current&&(F.current[1]-F.current[0]>1||E)?(M.current?.setAttribute(`data-is-dragging`,`wait`),j.current?.setAttribute(`data-is-dragging`,`wait`)):(F.current&&F.current[1]-F.current[0]<=1||!l)&&(M.current?.setAttribute(`data-is-dragging`,`false`),j.current?.setAttribute(`data-is-dragging`,`false`),u?.(null)),N.current=!1,F.current=null,I.current=null,P.current=null},[E,l,u]);(0,h.useEffect)(()=>{l||(M.current?.setAttribute(`data-is-dragging`,`false`),j.current?.setAttribute(`data-is-dragging`,`false`))},[l]);let Se=(0,h.useCallback)(e=>{N.current||!s||xe(e.clientX,e.clientY)},[s]),Ce=(0,h.useCallback)(e=>{!N.current||P.current===null||Z(e.clientX,e.clientY)},[Z]),we=(0,h.useCallback)(e=>{if(!N.current||P.current===null)return;let t=e.touches[0];t!=null&&Z(t.clientX,t.clientY)},[Z]),Te=(0,h.useCallback)(e=>{f&&x?.([e])},[x,f]),Ee=(0,h.useCallback)((e,t)=>{f&&C?.(e,t)},[C,f]),$=(0,h.useCallback)(()=>{x?.([]),M.current?.setAttribute(`data-is-hovering`,`false`)},[x]),De=(0,h.useCallback)(e=>{f&&p&&($(),y?.(e.id))},[f,p,y,$]),Oe=(0,h.useCallback)(e=>{f&&T?.(e)},[f,T]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:ie,"data-hovered-lectures":f?b.map(e=>e.id).join(` `):``,"data-selected-lectures":f?S.map(e=>e.id).join(` `):``,"data-selected-custom-block":f?w?.id??``:``,"data-selected-items":f?re.map(_).join(` `):``,"data-flash-lectures":te.join(` `),"data-interaction":f,"data-lecture-deletable":p,onPointerLeave:$,onTouchEnd:$,children:r(g,{columns:`1fr`,rows:X?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(fe,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:X?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${H*ue}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:le.map((e,t)=>n(m,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${H*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(de,{columns:`repeat(${V.length}, ${o||`1fr`})`,rows:`${H}px repeat(${B}, 1fr)`,flow:`column`,gap:`0px ${U}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:j,"data-is-dragging":`false`,"data-need-time-filter":s,...s?{onPointerDown:Se,onPointerMove:Ce,onPointerUp:Q,onPointerLeave:Q,onTouchMove:we,onTouchEnd:Q}:{},children:V.map((e,t)=>r(h.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(m,{type:`Small`,color:`Text.dark`,children:ne(`common.days.${e}`)})}),Array.from({length:B}).map((r,i)=>n(ge,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===B-1?`last`:``,i%2==0&&(ce[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(me,{columns:`repeat(${V.length}, ${o||`1fr`})`,rows:`${H}px repeat(${B}, 1fr)`,flow:`column`,gap:`${W}px ${U}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${H*.19999999999999996}px 0`,ref:M,"data-is-dragging":!1,children:[s&&n(ee,{}),k.map((e,t)=>n(_e,{lecture:e,deleteLecture:f&&p&&y?De:void 0,handleLectureTileHover:Te,handleLectureTileLeave:$,handleLectureTileSelect:Ee},`${e.id}-lecture-tile-${t}`)),A.filter(({time:e})=>q(e)).map(({block:e,time:t,index:r})=>n(oe,{block:e,time:t,onSelect:f&&T?Oe:void 0},`custom-block-${e.id}-${r}`)),J.map(e=>n(_e,{lecture:e,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),J.length>0&&n(ve,{overlaps:Y}),D&&L!==null&&n(be,{ratio:L,dayIndex:ae})]})]})]}),n(pe,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(X?` has-overflow`:``),children:r(g,{columns:`repeat(${V.length}, ${o||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${U}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[A.filter(({time:e})=>!q(e)).map(({block:e,time:t,index:r})=>n(oe,{block:e,time:t,onSelect:f&&T?Oe:void 0,overflow:!0},`custom-overflow-${e.id}-${r}`)),K.map((e,t)=>n(ye,{lecture:e,isGhost:k.every(t=>t.id!==e.id),deleteLecture:f&&p&&y?De:void 0,handleLectureTileSelect:Ee,handleLectureTileHover:Te,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var X=(0,h.memo)(Y,(e,t)=>e.timetableItems===t.timetableItems&&e.lectures===t.lectures&&e.customBlocks===t.customBlocks&&e.hoveredLectures===t.hoveredLectures&&e.selectedLectures===t.selectedLectures&&e.timeFilter===t.timeFilter&&e.cellWidth===t.cellWidth&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.onLectureSelect===t.onLectureSelect&&e.selectedCustomBlock===t.selectedCustomBlock&&e.onCustomBlockSelect===t.onCustomBlockSelect&&e.isCustomBlockSectionOpen===t.isCustomBlockSectionOpen&&e.needCurrentTimeBar===t.needCurrentTimeBar&&(e.flashLectureIds??[]).length===(t.flashLectureIds??[]).length&&(e.flashLectureIds??[]).every((e,n)=>e===(t.flashLectureIds??[])[n]));export{x as n,v as r,X as t};
//# sourceMappingURL=CustomTimeTableGrid-BDolc_di.js.map