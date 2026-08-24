(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`5e3489c88606a80b22946118536a2b67831212dd`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`1168c5d7-0ad8-4434-bf2e-3f228bc3107a`,e._sentryDebugIdIdentifier=`sentry-dbid-1168c5d7-0ad8-4434-bf2e-3f228bc3107a`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-B382Yc7J.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-btUPeI25.js";import{n as i,t as a}from"./FlexWrapper-LYbwkIco.js";import{i as o,n as s}from"./emotion-react.browser.esm-fHQgm4RF.js";import{d as c}from"./useAPI-CeHLt5bs.js";import{t as l}from"./Icon-Bje75kS_.js";import{t as u}from"./useTranslation-BcI3bXMy.js";import{t as d}from"./IconButton-Cv4vJteK.js";import{t as f}from"./Close-YKcoYOB_.js";import{t as p}from"./Typography-Dn9fwDKI.js";var m=t(e()),h=i.div`
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
`,g=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],_=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],v=i(a)`
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
`,y=i(a)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function b(){return n(v,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,children:n(y,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ee=(0,m.memo)(b),x=`lecture-tile`,S=e=>s`
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
`,C=o`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,w=i(a)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-lectures~="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    [data-flash-lectures~="${({lectureId:e})=>e}"] & {
        animation: ${C} 0.3s ease-out forwards;
    }
`,T=i(a)`
    background: ${({theme:e,courseId:t})=>()=>{let n=_(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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
                ${({theme:e})=>S(e)}
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
            ${({theme:e})=>S(e)}
        }
    }

    [data-selected-lectures~="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,E=i(a)`
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
`;function D({lecture:e,classIdx:t,deleteLecture:i,handleLectureTileSelect:o,handleLectureTileHover:s,handleLectureTileLeave:c}){let u=e.classes[t];if(u==null)return null;let h=(0,m.useCallback)(t=>{o?.(e,t)},[o,e]),g=(0,m.useCallback)(()=>{s?.(e)},[s,e]),_=(0,m.useCallback)(()=>{c?.()},[c]);return n(w,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:u.day+1,rowStart:u.begin/30-14,rowEnd:u.end/30-14,lectureId:e.id,"data-class-time":u.day*24*60+u.begin,onPointerDown:h,onPointerEnter:g,onPointerLeave:_,children:r(T,{direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:x,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(p,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(p,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(p,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${u.buildingCode}) ${u.roomName}`})]})}),i&&n(E,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(d,{styles:{padding:3},onClick:()=>i(e),children:n(l,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(f,{})})})})]})})}var O=(0,m.memo)(D,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),k=i(a)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,A=i(a)`
    border-radius: 2px;
`;function j({day:e,begin:t,end:r}){return n(k,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(A,{direction:`column`,gap:0,flex:`1 1 auto`})})}var M=i(a)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,N=i(a)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=_(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lectures~="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>S(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>S(e)}
            }
        }
    }

    [data-selected-lectures~="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        opacity: 1;
    }

    .custom-timetable[data-selected-lectures=""] & {
        transform: none;
        box-shadow: none;
        opacity: 1;
    }

    [data-flash-lectures~="${({lectureId:e})=>e}"] & {
        animation: ${C} 0.3s ease-out forwards;
    }
`;function P({lecture:e,classIdx:t,deleteLecture:i}){let o=t==null?null:e.classes[t],{t:s}=u();return r(M,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:o!=null&&g[o.day]&&o.begin!=null&&o.end!=null?r(p,{type:`Smaller`,color:`Text.light`,children:[s(`common.days.${g[o.day]}`),` `,Math.floor(o.begin/60),`:`,o.begin%60==0?`00`:`30`,` - `,Math.floor(o.end/60),`:`,o.end%60==0?`00`:`30`]}):n(p,{type:`Smaller`,color:`Text.light`,children:s(`timetable.noTimeInfo`)})}),r(N,{direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:x,children:[n(p,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(p,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(p,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:o==null?``:`(${o.buildingCode}) ${o.roomName}`}),i&&n(E,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(d,{styles:{padding:3},onClick:()=>i(),children:n(l,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(f,{})})})})]})]})}var F=8,te=24,I=Array.from({length:17},(e,t)=>F+t),L=I.map(e=>(e%12||12).toString()),R=(L.length-1)*2,z=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],B=20,ne=.8,V=5,H=1,re=i(h)`
    z-index: 1;
`,ie=i(a)`
    grid-row: 1 / ${R+5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${R+2};
    }
`,ae=i(a)`
    overflow: hidden;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: -1 / -1;
    display: none;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: ${R+2} / ${R+5};
        display: flex;
    }
`,oe=i(h)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,U=i(a)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${H}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${H}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${H}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,se=(0,m.memo)(({dayIdx:e,timeIdx:t,...r})=>n(U,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),W=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${x}:hover
        )
        &
        .${x} {
        ${({theme:e})=>S(e)}
    }
`,G=(0,m.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileLeave:r,handleLectureTileSelect:i,deleteLecture:a,isGhost:o=!1})=>{let s=(0,m.useCallback)(()=>{t?.(e)},[t,e]),c=(0,m.useCallback)(()=>{r?.()},[r]),l=(0,m.useCallback)(t=>{i?.(e,t)},[i,e]),u=(0,m.useCallback)(()=>{a?.(e)},[a,e]);return n(W,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,...o?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>q({day:t.day,begin:t.begin,end:t.end})?n(O,{lecture:e,classIdx:r,deleteLecture:a?u:void 0},`${r}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),K=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${x}:hover) .${x} {
        ${({theme:e})=>S(e)}
    }
`,ce=(0,m.memo)(({overlaps:e})=>n(K,{children:e.map((e,t)=>n(j,{...e},t))}));function q(e){if(!e)return!1;let t=e.begin/60-F,n=e.end/60-F,{day:r}=e;return c.Mon<=r&&r<=c.Fri&&n-t>=.5}var J=i.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${x}:hover
        )
        &
        .${x} {
        ${({theme:e})=>S(e)}
    }
`,le=(0,m.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o})=>{let s=(0,m.useCallback)(()=>{i?.(e)},[i,e]),c=(0,m.useCallback)(()=>{a?.()},[a]),l=(0,m.useCallback)(t=>{o?.(e,t)},[o,e]),u=(0,m.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length===0||e.classes.filter(e=>!q({...e})).length>0?n(J,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,children:e.classes.length===0?n(P,{lecture:e,deleteLecture:t?void 0:u},e.id):e.classes.map((r,i)=>{let{day:a,begin:o,end:s}=r;return q({day:a,begin:o,end:s})?null:n(P,{lecture:e,classIdx:i,deleteLecture:t?void 0:u},i)})}):null},(e,t)=>e.lecture===t.lecture),ue=i.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${B}px + (100% - ${B*1.2}px) *
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
`;function Y({lectures:e,cellWidth:t,needTimeFilter:i=!0,timeFilter:o,setTimeFilter:s,needLectureInteraction:c=!0,needLectureDeletable:l=!0,deleteLecture:d,hoveredLectures:f=[],setHoveredLectures:g,selectedLectures:_=[],onLectureSelect:v,needCurrentTimeBar:y=!1,flashLectureIds:b=[]}){let{t:x}=u(),S=(0,m.useRef)(null),C=(0,m.useRef)(null),w=(0,m.useRef)(null),T=(0,m.useRef)(!1),E=(0,m.useRef)(null),D=(0,m.useRef)(null),O=(0,m.useRef)(null),[k,A]=(0,m.useState)(null),[j,M]=(0,m.useState)(-1),N=(0,m.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<F||n>te||t<0||t>4){A(null);return}let r=(n-F)/16;A(r),M(t)},[]);(0,m.useEffect)(()=>{if(!y)return;N();let e=setInterval(N,6e4);return window.addEventListener(`resize`,N),()=>{clearInterval(e),window.removeEventListener(`resize`,N)}},[y,N]);let P=(0,m.useMemo)(()=>{let t=[...e,...f,..._].filter(e=>e!=null),n=new Map;return t.forEach(e=>{n.set(e.id,e)}),Array.from(n.values())},[e,f,_]),U=(0,m.useMemo)(()=>{if(!c)return[];let t=f.filter(t=>!e.some(e=>e.id===t.id)),n=_.filter(t=>!e.some(e=>e.id===t.id)),r=new Map;return n.forEach(e=>r.set(e.id,e)),t.forEach(e=>r.set(e.id,e)),Array.from(r.values())},[f,_,e,c]),W=(0,m.useMemo)(()=>{if(!c||U.length===0)return[];let t=[];return U.forEach(n=>{n.classes.forEach(n=>{e.forEach(e=>{e.classes.forEach(e=>{if(n.day===e.day){let r=n.begin,i=n.end,a=e.begin,o=e.end,s=Math.max(r,a),c=Math.min(i,o);s<c&&t.push({day:n.day,begin:(s/60-F)*2,end:(c/60-F)*2})}})})})}),t},[U,e,c]),K=(0,m.useMemo)(()=>P.some(e=>e.classes.some(e=>!q({...e}))),[P]),J=(0,m.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;w.current?.style.setProperty(`--hover-day`,(i+1).toString()),w.current?.style.setProperty(`--hover-start`,a.toString()),w.current?.style.setProperty(`--hover-end`,(a+1).toString()),w.current?.setAttribute(`data-is-dragging`,`true`),C.current?.setAttribute(`data-is-dragging`,`true`),T.current=!0,D.current=[r,r+1],O.current=i,E.current=r},[]),Y=(0,m.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=E.current==null?r:E.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;w.current?.style.setProperty(`--hover-start`,c.toString()),w.current?.style.setProperty(`--hover-end`,l.toString()),D.current=[o,s+1]},[]),X=(0,m.useCallback)(()=>{D.current&&O.current!==null&&s?.({day:O.current,begin:(F+D.current[0]*.5)*60,end:(F+D.current[1]*.5)*60}),D.current&&D.current[1]-D.current[0]>1?(w.current?.setAttribute(`data-is-dragging`,`wait`),C.current?.setAttribute(`data-is-dragging`,`wait`)):(D.current&&D.current[1]-D.current[0]<=1||!o)&&(w.current?.setAttribute(`data-is-dragging`,`false`),C.current?.setAttribute(`data-is-dragging`,`false`),s?.(null)),T.current=!1,D.current=null,O.current=null,E.current=null},[o,s]);(0,m.useEffect)(()=>{o||(w.current?.setAttribute(`data-is-dragging`,`false`),C.current?.setAttribute(`data-is-dragging`,`false`))},[o]);let de=(0,m.useCallback)(e=>{T.current||!i||J(e.clientX,e.clientY)},[i]),fe=(0,m.useCallback)(e=>{!T.current||E.current===null||Y(e.clientX,e.clientY)},[Y]),pe=(0,m.useCallback)(e=>{if(!T.current||E.current===null)return;let t=e.touches[0];t!=null&&Y(t.clientX,t.clientY)},[Y]),Z=(0,m.useCallback)(e=>{c&&g?.([e])},[g,c]),Q=(0,m.useCallback)((e,t)=>{c&&v?.(e,t)},[v,c]),$=(0,m.useCallback)(()=>{g?.([]),w.current?.setAttribute(`data-is-hovering`,`false`)},[g]),me=(0,m.useCallback)(e=>{c&&l&&($(),d?.(e.id))},[l,d,$]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:S,"data-hovered-lectures":c?f.map(e=>e.id).join(` `):``,"data-selected-lectures":c?_.map(e=>e.id).join(` `):``,"data-flash-lectures":b.join(` `),"data-interaction":c,"data-lecture-deletable":l,onPointerLeave:$,onTouchEnd:$,children:r(h,{columns:`1fr`,rows:`${B}px repeat(${R+3}, 1fr)`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(ie,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:K?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${B*ne}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:L.map((e,t)=>n(p,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${B*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(re,{columns:`repeat(${z.length}, ${t||`1fr`})`,rows:`${B}px repeat(${R}, 1fr)`,flow:`column`,gap:`0px ${V}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:C,"data-is-dragging":`false`,"data-need-time-filter":i,...i?{onPointerDown:de,onPointerMove:fe,onPointerUp:X,onPointerLeave:X,onTouchMove:pe,onTouchEnd:X}:{},children:z.map((e,t)=>r(m.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(p,{type:`Small`,color:`Text.dark`,children:x(`common.days.${e}`)})}),Array.from({length:R}).map((r,i)=>n(se,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===R-1?`last`:``,i%2==0&&(I[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(oe,{columns:`repeat(${z.length}, ${t||`1fr`})`,rows:`${B}px repeat(${R}, 1fr)`,flow:`column`,gap:`${H}px ${V}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${B*.19999999999999996}px 0`,ref:w,"data-is-dragging":!1,children:[i&&n(ee,{}),e.map((e,t)=>n(G,{lecture:e,deleteLecture:me,handleLectureTileHover:Z,handleLectureTileLeave:$,handleLectureTileSelect:Q},`${e.id}-lecture-tile-${t}`)),U.map(e=>n(G,{lecture:e,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),U.length>0&&n(ce,{overlaps:W}),y&&k!==null&&n(ue,{ratio:k,dayIndex:j})]})]})]}),n(ae,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(K?` has-overflow`:``),children:n(h,{columns:`repeat(${z.length}, ${t||`1fr`})`,rows:`1fr`,gap:`0px ${V}px`,flow:`row`,style:{overflow:`hidden`},children:P.map((t,r)=>n(le,{lecture:t,isGhost:e.every(e=>e.id!==t.id),deleteLecture:me,handleLectureTileSelect:Q,handleLectureTileHover:Z,handleLectureTileLeave:$},`${t.id}-overflow-${r}`))})})]})})}var X=(0,m.memo)(Y,(e,t)=>e.lectures===t.lectures&&e.hoveredLectures===t.hoveredLectures&&e.selectedLectures===t.selectedLectures&&e.timeFilter===t.timeFilter&&e.cellWidth===t.cellWidth&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.onLectureSelect===t.onLectureSelect&&e.needCurrentTimeBar===t.needCurrentTimeBar&&(e.flashLectureIds??[]).length===(t.flashLectureIds??[]).length&&(e.flashLectureIds??[]).every((e,n)=>e===(t.flashLectureIds??[])[n]));export{_ as n,X as t};
//# sourceMappingURL=CustomTimeTableGrid-sDYRTyix.js.map