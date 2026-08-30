(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`75bb3b9480ceb7562c2b564b2fba4f80dcc30e8a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`4e1ae3ae-bd00-40fb-a234-ca43153266fe`,e._sentryDebugIdIdentifier=`sentry-dbid-4e1ae3ae-bd00-40fb-a234-ca43153266fe`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CxrAfrrE.js";import{n,o as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-Ca1gJfhf.js";import{n as a,t as o}from"./FlexWrapper-1igZMPnI.js";import{i as s,n as c}from"./emotion-react.browser.esm-BuqT3dbQ.js";import{d as l}from"./useAPI-BO_elG8f.js";import{t as u}from"./Icon-DZEIHPW-.js";import{t as d}from"./useTranslation-wt_w4v0Q.js";import{t as f}from"./IconButton-BV70uHyK.js";import{t as p}from"./Close-BABk0GsY.js";import{t as m}from"./Typography-BR02ryHI.js";import{t as h}from"./light-BPj6XebE.js";var g=t(e()),_=a.div`
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
`,v=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],y=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],b=a(o)`
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
`,x=a(o)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function S(){return n(b,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,children:n(x,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ee=(0,g.memo)(S),C=`lecture-tile`,w=e=>c`
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
`,T=s`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,E=a(o)`
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
        animation: ${T} 0.3s ease-out forwards;
    }
`,D=a(o)`
    background: ${({theme:e,courseId:t})=>()=>{let n=y(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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
                ${({theme:e})=>w(e)}
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
            ${({theme:e})=>w(e)}
        }
    }

    [data-selected-lectures~="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,O=a(o)`
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
`;function k({lecture:e,classIdx:t,deleteLecture:r,handleLectureTileSelect:a,handleLectureTileHover:s,handleLectureTileLeave:c}){let l=e.classes[t];if(l==null)return null;let d=(0,g.useCallback)(t=>{a?.(e,t)},[a,e]),h=(0,g.useCallback)(()=>{s?.(e)},[s,e]),_=(0,g.useCallback)(()=>{c?.()},[c]);return n(E,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:l.day+1,rowStart:l.begin/30-14,rowEnd:l.end/30-14,lectureId:e.id,"data-class-time":l.day*24*60+l.begin,onPointerDown:d,onPointerEnter:h,onPointerLeave:_,children:i(D,{direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:C,children:[n(o,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:i(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${l.buildingCode}) ${l.roomName}`})]})}),r&&n(O,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{styles:{padding:3},onClick:()=>r(e),children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})]})})}var A=(0,g.memo)(k,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),j=a(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,M=a(o)`
    border-radius: 2px;
`;function N({day:e,begin:t,end:r}){return n(j,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(M,{direction:`column`,gap:0,flex:`1 1 auto`})})}var P=a(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,F=a(o)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=y(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lectures~="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>w(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>w(e)}
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
        animation: ${T} 0.3s ease-out forwards;
    }
`;function I({lecture:e,classIdx:t,deleteLecture:r}){let a=t==null?null:e.classes[t],{t:s}=d();return i(P,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:a!=null&&v[a.day]&&a.begin!=null&&a.end!=null?i(m,{type:`Smaller`,color:`Text.light`,children:[s(`common.days.${v[a.day]}`),` `,Math.floor(a.begin/60),`:`,a.begin%60==0?`00`:`30`,` - `,Math.floor(a.end/60),`:`,a.end%60==0?`00`:`30`]}):n(m,{type:`Smaller`,color:`Text.light`,children:s(`timetable.noTimeInfo`)})}),i(F,{direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:C,children:[n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:a==null?``:`(${a.buildingCode}) ${a.roomName}`}),r&&n(O,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{styles:{padding:3},onClick:()=>r(),children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})]})]})}var L=`custom-block-tile`,R=e=>c`
    background: ${e.colors.Highlight.default};

    .block-title {
        color: #ffffff;
    }

    .block-info {
        color: rgba(255, 255, 255, 0.5);
    }
`,z=a(o)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;

    &:has(.${L}:hover) .${L} {
        ${({theme:e})=>R(e)}
    }

    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`,B=a(o)`
    background: ${({theme:e,blockId:t})=>{let n=y(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;
    opacity: 0.5;

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;

        &:hover {
            ${({theme:e})=>R(e)}
        }
    }

    [data-selected-custom-block=""] &,
    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        ${({theme:e})=>R(e)}
    }
`;function V({block:e,onSelect:t}){return n(z,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:e.day+1,rowStart:e.begin/30-14,rowEnd:e.end/30-14,blockId:e.id,onPointerDown:()=>t?.(e),children:n(B,{direction:`column`,gap:0,flex:`1 1 auto`,align:`flex-start`,justify:`flex-start`,padding:`6px`,blockId:e.id,className:L,children:i(r,{theme:h,children:[n(m,{type:`Small`,color:`Text.dark`,className:`block-title`,children:e.block_name}),e.place&&n(m,{type:`Small`,color:`Text.lighter`,className:`block-info`,children:e.place})]})})})}var te=(0,g.memo)(V),H=8,ne=24,re=Array.from({length:17},(e,t)=>H+t),ie=re.map(e=>(e%12||12).toString()),U=(ie.length-1)*2,W=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],G=20,ae=.8,K=5,q=1,oe=a(_)`
    z-index: 1;
`,se=a(o)`
    grid-row: 1 / ${U+5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${U+2};
    }
`,ce=a(o)`
    overflow: hidden;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: -1 / -1;
    display: none;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: ${U+2} / ${U+5};
        display: flex;
    }
`,le=a(_)`
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
`,ue=(0,g.memo)(({dayIdx:e,timeIdx:t,...r})=>n(J,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),Y=a.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${C}:hover
        )
        &
        .${C} {
        ${({theme:e})=>w(e)}
    }
`,X=(0,g.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileLeave:r,handleLectureTileSelect:i,deleteLecture:a,isGhost:o=!1})=>{let s=(0,g.useCallback)(()=>{t?.(e)},[t,e]),c=(0,g.useCallback)(()=>{r?.()},[r]),l=(0,g.useCallback)(t=>{i?.(e,t)},[i,e]),u=(0,g.useCallback)(()=>{a?.(e)},[a,e]);return n(Y,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,...o?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>Q({day:t.day,begin:t.begin,end:t.end})?n(A,{lecture:e,classIdx:r,deleteLecture:a?u:void 0},`${r}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),Z=a.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${C}:hover) .${C} {
        ${({theme:e})=>w(e)}
    }
`,de=(0,g.memo)(({overlaps:e})=>n(Z,{children:e.map((e,t)=>n(N,{...e},t))}));function Q(e){if(!e)return!1;let t=e.begin/60-H,n=e.end/60-H,{day:r}=e;return l.Mon<=r&&r<=l.Fri&&n-t>=.5}var fe=a.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${C}:hover
        )
        &
        .${C} {
        ${({theme:e})=>w(e)}
    }
`,pe=(0,g.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o})=>{let s=(0,g.useCallback)(()=>{i?.(e)},[i,e]),c=(0,g.useCallback)(()=>{a?.()},[a]),l=(0,g.useCallback)(t=>{o?.(e,t)},[o,e]),u=(0,g.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length===0||e.classes.filter(e=>!Q({...e})).length>0?n(fe,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,children:e.classes.length===0?n(I,{lecture:e,deleteLecture:t?void 0:u},e.id):e.classes.map((r,i)=>{let{day:a,begin:o,end:s}=r;return Q({day:a,begin:o,end:s})?null:n(I,{lecture:e,classIdx:i,deleteLecture:t?void 0:u},i)})}):null},(e,t)=>e.lecture===t.lecture),me=a.div`
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
`;function he({lectures:e,customBlocks:t=[],cellWidth:r,needTimeFilter:a=!0,timeFilter:s,setTimeFilter:c,needLectureInteraction:l=!0,needLectureDeletable:u=!0,deleteLecture:f,hoveredLectures:p=[],setHoveredLectures:h,selectedLectures:v=[],onLectureSelect:y,selectedCustomBlock:b=null,onCustomBlockSelect:x,isCustomBlockSectionOpen:S=!1,needCurrentTimeBar:C=!1,flashLectureIds:w=[]}){let{t:T}=d(),E=(0,g.useRef)(null),D=(0,g.useRef)(null),O=(0,g.useRef)(null),k=(0,g.useRef)(!1),A=(0,g.useRef)(null),j=(0,g.useRef)(null),M=(0,g.useRef)(null),[N,P]=(0,g.useState)(null),[F,I]=(0,g.useState)(-1),L=(0,g.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<H||n>ne||t<0||t>4){P(null);return}let r=(n-H)/16;P(r),I(t)},[]);(0,g.useEffect)(()=>{if(!C)return;L();let e=setInterval(L,6e4);return window.addEventListener(`resize`,L),()=>{clearInterval(e),window.removeEventListener(`resize`,L)}},[C,L]);let R=(0,g.useMemo)(()=>{let t=[...e,...p,...v].filter(e=>e!=null),n=new Map;return t.forEach(e=>{n.set(e.id,e)}),Array.from(n.values())},[e,p,v]),z=(0,g.useMemo)(()=>{if(!l)return[];let t=p.filter(t=>!e.some(e=>e.id===t.id)),n=v.filter(t=>!e.some(e=>e.id===t.id)),r=new Map;return n.forEach(e=>r.set(e.id,e)),t.forEach(e=>r.set(e.id,e)),Array.from(r.values())},[p,v,e,l]),B=(0,g.useMemo)(()=>{if(!l||z.length===0)return[];let t=[];return z.forEach(n=>{n.classes.forEach(n=>{e.forEach(e=>{e.classes.forEach(e=>{if(n.day===e.day){let r=n.begin,i=n.end,a=e.begin,o=e.end,s=Math.max(r,a),c=Math.min(i,o);s<c&&t.push({day:n.day,begin:(s/60-H)*2,end:(c/60-H)*2})}})})})}),t},[z,e,l]),V=(0,g.useMemo)(()=>R.some(e=>e.classes.some(e=>!Q({...e}))),[R]),J=(0,g.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;O.current?.style.setProperty(`--hover-day`,(i+1).toString()),O.current?.style.setProperty(`--hover-start`,a.toString()),O.current?.style.setProperty(`--hover-end`,(a+1).toString()),O.current?.setAttribute(`data-is-dragging`,`true`),D.current?.setAttribute(`data-is-dragging`,`true`),k.current=!0,j.current=[r,r+1],M.current=i,A.current=r},[]),Y=(0,g.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=A.current==null?r:A.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;O.current?.style.setProperty(`--hover-start`,c.toString()),O.current?.style.setProperty(`--hover-end`,l.toString()),j.current=[o,s+1]},[]),Z=(0,g.useCallback)(()=>{j.current&&M.current!==null&&c?.({day:M.current,begin:(H+j.current[0]*.5)*60,end:(H+j.current[1]*.5)*60}),j.current&&(j.current[1]-j.current[0]>1||S)?(O.current?.setAttribute(`data-is-dragging`,`wait`),D.current?.setAttribute(`data-is-dragging`,`wait`)):(j.current&&j.current[1]-j.current[0]<=1||!s)&&(O.current?.setAttribute(`data-is-dragging`,`false`),D.current?.setAttribute(`data-is-dragging`,`false`),c?.(null)),k.current=!1,j.current=null,M.current=null,A.current=null},[S,s,c]);(0,g.useEffect)(()=>{s||(O.current?.setAttribute(`data-is-dragging`,`false`),D.current?.setAttribute(`data-is-dragging`,`false`))},[s]);let fe=(0,g.useCallback)(e=>{k.current||!a||J(e.clientX,e.clientY)},[a]),he=(0,g.useCallback)(e=>{!k.current||A.current===null||Y(e.clientX,e.clientY)},[Y]),ge=(0,g.useCallback)(e=>{if(!k.current||A.current===null)return;let t=e.touches[0];t!=null&&Y(t.clientX,t.clientY)},[Y]),_e=(0,g.useCallback)(e=>{l&&h?.([e])},[h,l]),ve=(0,g.useCallback)((e,t)=>{l&&y?.(e,t)},[y,l]),$=(0,g.useCallback)(()=>{h?.([]),O.current?.setAttribute(`data-is-hovering`,`false`)},[h]),ye=(0,g.useCallback)(e=>{l&&u&&($(),f?.(e.id))},[u,f,$]),be=(0,g.useCallback)(e=>{l&&x?.(e)},[l,x]);return n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:E,"data-hovered-lectures":l?p.map(e=>e.id).join(` `):``,"data-selected-lectures":l?v.map(e=>e.id).join(` `):``,"data-selected-custom-block":b?.id??``,"data-flash-lectures":w.join(` `),"data-interaction":l,"data-lecture-deletable":u,onPointerLeave:$,onTouchEnd:$,children:i(_,{columns:`1fr`,rows:`${G}px repeat(${U+3}, 1fr)`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[i(se,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:V?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${G*ae}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:ie.map((e,t)=>n(m,{color:`Text.dark`,children:e},t))})}),i(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${G*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(oe,{columns:`repeat(${W.length}, ${r||`1fr`})`,rows:`${G}px repeat(${U}, 1fr)`,flow:`column`,gap:`0px ${K}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:D,"data-is-dragging":`false`,"data-need-time-filter":a,...a?{onPointerDown:fe,onPointerMove:he,onPointerUp:Z,onPointerLeave:Z,onTouchMove:ge,onTouchEnd:Z}:{},children:W.map((e,t)=>i(g.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(m,{type:`Small`,color:`Text.dark`,children:T(`common.days.${e}`)})}),Array.from({length:U}).map((r,i)=>n(ue,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===U-1?`last`:``,i%2==0&&(re[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),i(le,{columns:`repeat(${W.length}, ${r||`1fr`})`,rows:`${G}px repeat(${U}, 1fr)`,flow:`column`,gap:`${q}px ${K}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${G*.19999999999999996}px 0`,ref:O,"data-is-dragging":!1,children:[a&&n(ee,{}),e.map((e,t)=>n(X,{lecture:e,deleteLecture:ye,handleLectureTileHover:_e,handleLectureTileLeave:$,handleLectureTileSelect:ve},`${e.id}-lecture-tile-${t}`)),t.filter(e=>Q(e)).map(e=>n(te,{block:e,onSelect:be},`custom-block-${e.id}`)),z.map(e=>n(X,{lecture:e,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),z.length>0&&n(de,{overlaps:B}),C&&N!==null&&n(me,{ratio:N,dayIndex:F})]})]})]}),n(ce,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(V?` has-overflow`:``),children:n(_,{columns:`repeat(${W.length}, ${r||`1fr`})`,rows:`1fr`,gap:`0px ${K}px`,flow:`row`,style:{overflow:`hidden`},children:R.map((t,r)=>n(pe,{lecture:t,isGhost:e.every(e=>e.id!==t.id),deleteLecture:ye,handleLectureTileSelect:ve,handleLectureTileHover:_e,handleLectureTileLeave:$},`${t.id}-overflow-${r}`))})})]})})}var ge=(0,g.memo)(he,(e,t)=>e.lectures===t.lectures&&e.customBlocks===t.customBlocks&&e.hoveredLectures===t.hoveredLectures&&e.selectedLectures===t.selectedLectures&&e.timeFilter===t.timeFilter&&e.cellWidth===t.cellWidth&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.onLectureSelect===t.onLectureSelect&&e.selectedCustomBlock===t.selectedCustomBlock&&e.onCustomBlockSelect===t.onCustomBlockSelect&&e.isCustomBlockSectionOpen===t.isCustomBlockSectionOpen&&e.needCurrentTimeBar===t.needCurrentTimeBar&&(e.flashLectureIds??[]).length===(t.flashLectureIds??[]).length&&(e.flashLectureIds??[]).every((e,n)=>e===(t.flashLectureIds??[])[n]));export{y as n,ge as t};
//# sourceMappingURL=CustomTimeTableGrid-B9cIikqw.js.map