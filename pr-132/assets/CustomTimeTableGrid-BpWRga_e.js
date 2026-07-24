(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`25638e5e40e76cc6ca180f925ee1bd34416c61d7`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`04d72fce-ebdb-4f3e-9d1b-14e2e6d8c740`,e._sentryDebugIdIdentifier=`sentry-dbid-04d72fce-ebdb-4f3e-9d1b-14e2e6d8c740`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CCNe-PI9.js";import{n,o as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-CWRrys4y.js";import{c as a,n as o,o as s,t as c}from"./FlexWrapper-Ca1uGTQE.js";import{i as l}from"./useAPI-DJjPTsdf.js";import{t as u}from"./Icon-7YgFl4fm.js";import{t as d}from"./IconButton-CfHtTFAk.js";import{t as f}from"./useTranslation-BJcWyy_P.js";import{t as p}from"./Close-DuXfQNaa.js";import{t as m}from"./Typography-DCSNOHEG.js";import{t as h}from"./light-BX49soU-.js";var g=t(e(),1),_=o.div`
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
`,ee=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],v=`custom-block-tile`,y=e=>s`
    background: ${e.colors.Highlight.default};

    .block-title {
        color: #ffffff;
    }

    .block-info {
        color: rgba(255, 255, 255, 0.5);
    }

    .block-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,b=o(c)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;

    &:has(.${v}:hover) .${v} {
        ${({theme:e})=>y(e)}
    }

    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,x=o(c)`
    background: ${({theme:e,blockId:t})=>{let n=ee(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        &:hover {
            ${({theme:e})=>y(e)}
        }
    }

    transition: opacity 0.2s ease;

    opacity: 0.5;

    [data-selected-custom-block=""] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    .timetable-grid-wrapper:not(:hover)
        [data-hovered-custom-blocks~="${({blockId:e})=>e}"]
        &,
    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        ${({theme:e})=>y(e)}
    }

    [data-selected-custom-block="${({blockId:e})=>e}"] & {
        opacity: 1;
    }
`,S=o(c)`
    pointer-events: none;
    visibility: hidden;

    [data-lecture-deletable="false"] & {
        pointer-events: none !important;
        visibility: hidden !important;
    }
`;function te({block:e,deleteBlock:t,handleBlockTileHover:a,handleBlockTileSelect:o,isGhost:s=!1}){return n(b,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:e.day+1,rowStart:e.begin/30-14,rowEnd:e.end/30-14,blockId:e.id,onPointerEnter:()=>a?.(e),onPointerDown:()=>o?.(e),onTouchMove:()=>a?.(e),...s?{"data-ghost":!0}:{},children:i(x,{direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:v,children:[n(c,{direction:`column`,justify:`flex-start`,flex:`1 1 auto`,gap:0,padding:`4px 0px 4px 4px`,children:n(c,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:i(r,{theme:h,children:[n(m,{type:`Small`,color:`Text.dark`,className:`block-title`,children:e.name}),e.place&&n(m,{type:`Small`,color:`Text.lighter`,className:`block-info`,children:e.place})]})})}),n(S,{direction:`column`,flex:`0 1 0`,gap:0,align:`flex-end`,justify:`flex-start`,className:`block-delete-wrapper`,children:n(d,{styles:{padding:3},onClick:t,children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:+!!t,pointerEvents:t?`auto`:`none`},children:n(p,{})})})})]})})}(0,g.memo)(te);var ne=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],C=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],re=o(c)`
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
`,w=o(c)`
    background: ${({isCustomBlockSectionOpen:e})=>e?`rgba(255, 87, 249, 0.4)`:`rgba(229, 76, 101, 0.4)`};
    border-radius: 4px;
`;function T({isCustomBlockSectionOpen:e}){return n(re,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,children:n(w,{direction:`column`,gap:0,flex:`1 1 auto`,isCustomBlockSectionOpen:e||!1})})}var ie=(0,g.memo)(T),E=`lecture-tile`,D=e=>s`
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
`,O=a`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,k=o(c)`
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
        animation: ${O} 0.3s ease-out forwards;
    }
`,A=o(c)`
    background: ${({theme:e,courseId:t})=>()=>{let n=C(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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
`,j=o(c)`
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
`;function M({lecture:e,classIdx:t,deleteLecture:r,handleLectureTileSelect:a,handleLectureTileHover:o,handleLectureTileLeave:s}){let l=e.classes[t];if(l==null)return null;let f=(0,g.useCallback)(t=>{a?.(e,t)},[a,e]),h=(0,g.useCallback)(()=>{o?.(e)},[o,e]),_=(0,g.useCallback)(()=>{s?.()},[s]);return n(k,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:l.day+1,rowStart:l.begin/30-14,rowEnd:l.end/30-14,lectureId:e.id,"data-class-time":l.day*24*60+l.begin,onPointerDown:f,onPointerEnter:h,onPointerLeave:_,children:i(A,{direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:E,children:[n(c,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:i(c,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${l.buildingCode}) ${l.roomName}`})]})}),r&&n(j,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(d,{styles:{padding:3},onClick:()=>r(e),children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})]})})}var N=(0,g.memo)(M,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),P=o(c)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,F=o(c)`
    border-radius: 2px;
`;function I({day:e,begin:t,end:r}){return n(P,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(F,{direction:`column`,gap:0,flex:`1 1 auto`})})}var L=o(c)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,R=o(c)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=C(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

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
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
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
`;function z({lecture:e,classIdx:t,deleteLecture:r}){let a=t==null?null:e.classes[t],{t:o}=f();return i(L,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(c,{direction:`column`,gap:0,align:`center`,children:a!=null&&ne[a.day]&&a.begin!=null&&a.end!=null?i(m,{type:`Smaller`,color:`Text.light`,children:[o(`common.days.${ne[a.day]}`),` `,Math.floor(a.begin/60),`:`,a.begin%60==0?`00`:`30`,` - `,Math.floor(a.end/60),`:`,a.end%60==0?`00`:`30`]}):n(m,{type:`Smaller`,color:`Text.light`,children:o(`timetable.noTimeInfo`)})}),i(R,{direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:E,children:[n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:a==null?``:`(${a.buildingCode}) ${a.roomName}`}),r&&n(j,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(d,{styles:{padding:3},onClick:()=>r(),children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})]})]})}var B=8,V=24,ae=Array.from({length:V-B+1},(e,t)=>B+t),oe=ae.map(e=>(e%12||12).toString()),H=(oe.length-1)*2,U=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],W=20,G=.8,K=5,q=1,se=o(_)`
    z-index: 1;
`,ce=o(c)`
    grid-row: 1 / ${H+5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${H+2};
    }
`,le=o(c)`
    overflow: hidden;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: -1 / -1;
    display: none;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: ${H+2} / ${H+5};
        display: flex;
    }
`,ue=o(_)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,J=o(c)`
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
`,de=(0,g.memo)(({dayIdx:e,timeIdx:t,...r})=>n(J,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(c,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),fe=o.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${E}:hover
        )
        &
        .${E} {
        ${({theme:e})=>D(e)}
    }
`,pe=(0,g.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileLeave:r,handleLectureTileSelect:i,deleteLecture:a,isGhost:o=!1})=>{let s=(0,g.useCallback)(()=>{t?.(e)},[t,e]),c=(0,g.useCallback)(()=>{r?.()},[r]),l=(0,g.useCallback)(t=>{i?.(e,t)},[i,e]),u=(0,g.useCallback)(()=>{a?.(e)},[a,e]);return n(fe,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,...o?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>X({day:t.day,begin:t.begin,end:t.end})?n(N,{lecture:e,classIdx:r,deleteLecture:a?u:void 0},`${r}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),Y=o.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${E}:hover) .${E} {
        ${({theme:e})=>D(e)}
    }
`,me=(0,g.memo)(({overlaps:e})=>n(Y,{children:e.map((e,t)=>n(I,{...e},t))}));function X(e){if(!e)return!1;let t=e.begin/60-B,n=e.end/60-B,{day:r}=e;return l.Mon<=r&&r<=l.Fri&&n-t>=.5}var Z=o.div`
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
`,he=(0,g.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o})=>{let s=(0,g.useCallback)(()=>{i?.(e)},[i,e]),c=(0,g.useCallback)(()=>{a?.()},[a]),l=(0,g.useCallback)(t=>{o?.(e,t)},[o,e]),u=(0,g.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length===0||e.classes.filter(e=>!X({...e})).length>0?n(Z,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,children:e.classes.length===0?n(z,{lecture:e,deleteLecture:t?void 0:u},e.id):e.classes.map((r,i)=>{let{day:a,begin:o,end:s}=r;return X({day:a,begin:o,end:s})?null:n(z,{lecture:e,classIdx:i,deleteLecture:t?void 0:u},i)})}):null},(e,t)=>e.lecture===t.lecture),ge=o.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${W}px + (100% - ${W*(2-G)}px) *
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
`;function Q({lectures:e,customBlocks:t=[],cellWidth:r,needTimeFilter:a=!0,timeFilters:o,setTimeFilters:s,timeBlocks:l,setTimeBlocks:u,needLectureInteraction:d=!0,needLectureDeletable:p=!0,deleteLecture:h,deleteCustomBlock:ee,hoveredLectures:v=[],setHoveredLectures:y,selectedLectures:b=[],onLectureSelect:x,needCurrentTimeBar:S=!1,selectedCustomBlock:te=null,setSelectedCustomBlock:ne,isCustomBlockSectionOpen:C,flashLectureIds:re=[]}){let{t:w}=f(),T=(0,g.useRef)(null),E=(0,g.useRef)(null),D=(0,g.useRef)(null),O=(0,g.useRef)(!1),k=(0,g.useRef)(null),A=(0,g.useRef)(null),j=(0,g.useRef)(null),[M,N]=(0,g.useState)(null),[P,F]=(0,g.useState)(-1),I=(0,g.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<B||n>V||t<0||t>4){N(null);return}let r=V-B;N((n-B)/r),F(t)},[]);(0,g.useEffect)(()=>{if(!S)return;I();let e=setInterval(I,60*1e3);return window.addEventListener(`resize`,I),()=>{clearInterval(e),window.removeEventListener(`resize`,I)}},[S,I]);let L=(0,g.useMemo)(()=>{let t=[...e,...v,...b].filter(e=>e!=null),n=new Map;return t.forEach(e=>{n.set(e.id,e)}),Array.from(n.values())},[e,v,b]),R=(0,g.useMemo)(()=>{if(!d)return[];let t=v.filter(t=>!e.some(e=>e.id===t.id)),n=b.filter(t=>!e.some(e=>e.id===t.id)),r=new Map;return n.forEach(e=>r.set(e.id,e)),t.forEach(e=>r.set(e.id,e)),Array.from(r.values())},[v,b,e,d]),z=(0,g.useMemo)(()=>{if(!d||R.length===0)return[];let t=[];return R.forEach(n=>{n.classes.forEach(n=>{e.forEach(e=>{e.classes.forEach(e=>{if(n.day===e.day){let r=n.begin,i=n.end,a=e.begin,o=e.end,s=Math.max(r,a),c=Math.min(i,o);s<c&&t.push({day:n.day,begin:(s/60-B)*2,end:(c/60-B)*2})}})})})}),t},[R,e,d]),J=(0,g.useMemo)(()=>L.some(e=>e.classes.some(e=>!X({...e}))),[L]),fe=(0,g.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;D.current?.style.setProperty(`--hover-day`,(i+1).toString()),D.current?.style.setProperty(`--hover-start`,a.toString()),D.current?.style.setProperty(`--hover-end`,(a+1).toString()),D.current?.setAttribute(`data-is-dragging`,`true`),E.current?.setAttribute(`data-is-dragging`,`true`),O.current=!0,A.current=[r,r+1],j.current=i,k.current=r},[]),Y=(0,g.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=k.current==null?r:k.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;D.current?.style.setProperty(`--hover-start`,c.toString()),D.current?.style.setProperty(`--hover-end`,l.toString()),A.current=[o,s+1]},[]),Z=(0,g.useCallback)(()=>{if(A.current&&j.current!==null){let e=j.current,[t,n]=A.current;C?u?.([{day:e,begin:(B+t*.5)*60,end:(B+n*.5)*60}]):s?.([{day:e,begin:(B+t*.5)*60,end:(B+n*.5)*60}])}A.current&&A.current[1]-A.current[0]>1?(D.current?.setAttribute(`data-is-dragging`,`wait`),E.current?.setAttribute(`data-is-dragging`,`wait`)):(A.current&&A.current[1]-A.current[0]<=1||!o)&&(D.current?.setAttribute(`data-is-dragging`,`false`),E.current?.setAttribute(`data-is-dragging`,`false`),s?.(null)),O.current=!1,A.current=null,j.current=null,k.current=null},[o,s,l,u,C]);(0,g.useEffect)(()=>{o||(D.current?.setAttribute(`data-is-dragging`,`false`),E.current?.setAttribute(`data-is-dragging`,`false`))},[o]);let Q=(0,g.useCallback)(e=>{O.current||!a||fe(e.clientX,e.clientY)},[a]),_e=(0,g.useCallback)(e=>{!O.current||k.current===null||Y(e.clientX,e.clientY)},[Y]),ve=(0,g.useCallback)(e=>{if(!O.current||k.current===null)return;let t=e.touches[0];t!=null&&Y(t.clientX,t.clientY)},[Y]),ye=(0,g.useCallback)(e=>{d&&y?.([e])},[y,d]),be=(0,g.useCallback)((e,t)=>{d&&x?.(e,t)},[x,d]),$=(0,g.useCallback)(()=>{y?.([]),D.current?.setAttribute(`data-is-hovering`,`false`)},[y]),xe=(0,g.useCallback)(e=>{d&&p&&($(),h?.(e.id))},[p,h,$]);return n(c,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:T,"data-hovered-lectures":d?v.map(e=>e.id).join(` `):``,"data-selected-lectures":d?b.map(e=>e.id).join(` `):``,"data-flash-lectures":re.join(` `),"data-interaction":d,"data-lecture-deletable":p,onPointerLeave:$,onTouchEnd:$,children:i(_,{columns:`1fr`,rows:`${W}px repeat(${H+3}, 1fr)`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[i(ce,{direction:`row`,gap:K*2,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:J?`has-overflow`:``,children:[n(c,{direction:`column`,gap:0,align:`stretch`,padding:`${W*G}px 0 0 0`,children:n(c,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:oe.map((e,t)=>n(m,{color:`Text.dark`,children:e},t))})}),i(c,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${W*(1-G)}px 0`,className:`timetable-grid-wrapper`,children:[n(se,{columns:`repeat(${U.length}, ${r||`1fr`})`,rows:`${W}px repeat(${H}, 1fr)`,flow:`column`,gap:`0px ${K}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:E,"data-is-dragging":`false`,"data-need-time-filter":a,...a?{onPointerDown:Q,onPointerMove:_e,onPointerUp:Z,onPointerLeave:Z,onTouchMove:ve,onTouchEnd:Z}:{},children:U.map((e,t)=>i(g.Fragment,{children:[n(c,{direction:`column`,gap:0,align:`center`,children:n(m,{type:`Small`,color:`Text.dark`,children:w(`common.days.${e}`)})}),Array.from({length:H}).map((r,i)=>n(de,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===H-1?`last`:``,i%2==0&&(ae[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),i(ue,{columns:`repeat(${U.length}, ${r||`1fr`})`,rows:`${W}px repeat(${H}, 1fr)`,flow:`column`,gap:`${q}px ${K}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${W*(1-G)}px 0`,ref:D,"data-is-dragging":!1,children:[a&&n(ie,{isCustomBlockSectionOpen:C}),e.map((e,t)=>n(pe,{lecture:e,deleteLecture:xe,handleLectureTileHover:ye,handleLectureTileLeave:$,handleLectureTileSelect:be},`${e.id}-lecture-tile-${t}`)),R.map(e=>n(pe,{lecture:e,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),R.length>0&&n(me,{overlaps:z}),S&&M!==null&&n(ge,{ratio:M,dayIndex:P})]})]})]}),n(le,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(J?` has-overflow`:``),children:n(_,{columns:`repeat(${U.length}, ${r||`1fr`})`,rows:`1fr`,gap:`0px ${K}px`,flow:`row`,style:{overflow:`hidden`},children:L.map((t,r)=>n(he,{lecture:t,isGhost:e.every(e=>e.id!==t.id),deleteLecture:xe,handleLectureTileSelect:be,handleLectureTileHover:ye,handleLectureTileLeave:$},`${t.id}-overflow-${r}`))})})]})})}var _e=(0,g.memo)(Q,(e,t)=>e.lectures===t.lectures&&e.hoveredLectures===t.hoveredLectures&&e.selectedLectures===t.selectedLectures&&e.timeFilters===t.timeFilters&&e.cellWidth===t.cellWidth&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.onLectureSelect===t.onLectureSelect&&e.needCurrentTimeBar===t.needCurrentTimeBar&&(e.flashLectureIds??[]).length===(t.flashLectureIds??[]).length&&(e.flashLectureIds??[]).every((e,n)=>e===(t.flashLectureIds??[])[n])&&e.selectedCustomBlock===t.selectedCustomBlock&&e.setSelectedCustomBlock===t.setSelectedCustomBlock&&e.isCustomBlockSectionOpen===t.isCustomBlockSectionOpen);export{C as n,_e as t};
//# sourceMappingURL=CustomTimeTableGrid-BpWRga_e.js.map