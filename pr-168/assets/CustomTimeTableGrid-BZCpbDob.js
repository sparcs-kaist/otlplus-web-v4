(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`c533d60d5db200d0c93a90e84fc5c885ab61b774`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`def1bc0c-d3a5-4aea-8105-01262580a28f`,e._sentryDebugIdIdentifier=`sentry-dbid-def1bc0c-d3a5-4aea-8105-01262580a28f`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-DznfuhEi.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-CCMvk3Jq.js";import{n as i,t as a}from"./FlexWrapper-CVv5u9qA.js";import{i as o,n as s}from"./emotion-react.browser.esm-RyS9Bww_.js";import{S as c}from"./axios-BGOQRMar.js";import{d as l}from"./useAPI-vf6vnVBz.js";import{t as u}from"./Icon-CCaIRiFw.js";import{t as d}from"./useTranslation-D76XoknQ.js";import{t as f}from"./IconButton-B6SoKs2d.js";import{t as p}from"./Close-C-LLoEny.js";import{t as m}from"./Typography-3U6phqZ6.js";var h=t(e(),1),g=i.div`
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
`,_=e=>`${e.kind}:${e.data.id}`,ee=e=>e.times??[{day:e.day,begin:e.begin,end:e.end}],v=e=>e.kind===c.LECTURE?e.data.classes:ee(e.data),y=(e,t)=>v(e).some(e=>v(t).some(t=>e.day===t.day&&e.begin<t.end&&t.begin<e.end)),b=i(a)`
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
`,x=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],S=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],C=i(a)`
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
`,w=i(a)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function T({style:e,className:t}){return n(C,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(w,{direction:`column`,gap:0,flex:`1 1 auto`})})}var te=(0,h.memo)(T),E=`lecture-tile`,D=e=>s`
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
`,O=o`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,ne=i(a)`
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
`,k=i(b)`
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
`,re=i(a)`
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
`;function A({onDelete:e,ariaLabel:t,className:r=`lecture-delete-wrapper`}){return n(re,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{"aria-label":t,styles:{padding:3},onClick:e,children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})}function ie({lecture:e,classIdx:t,deleteLecture:i,handleLectureTileSelect:o,handleLectureTileHover:s,handleLectureTileLeave:l}){let u=e.classes[t];if(u==null)return null;let d=(0,h.useCallback)(t=>{o?.(e,t)},[o,e]),f=(0,h.useCallback)(()=>{s?.(e)},[s,e]),p=(0,h.useCallback)(()=>{l?.()},[l]);return n(ne,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:u.day+1,rowStart:u.begin/30-14,rowEnd:u.end/30-14,lectureId:e.id,"data-class-time":u.day*24*60+u.begin,onPointerDown:d,onPointerEnter:f,onPointerLeave:p,children:r(k,{itemKey:_({kind:c.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:E,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${u.buildingCode}) ${u.roomName}`})]})}),i&&n(A,{onDelete:()=>i(e)})]})})}var ae=(0,h.memo)(ie,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx&&e.deleteLecture===t.deleteLecture),j=i(a)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,M=i(a)`
    border-radius: 2px;
`;function oe({day:e,begin:t,end:r}){return n(j,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(M,{direction:`column`,gap:0,flex:`1 1 auto`})})}var N=i(a)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,P=i(b)`
    border-radius: 2px;
    overflow: hidden;
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
    }

    .custom-timetable[data-selected-lectures=""] & {
        transform: none;
        box-shadow: none;
    }

    [data-flash-lectures~="${({lectureId:e})=>e}"] & {
        animation: ${O} 0.3s ease-out forwards;
    }
`;function F({lecture:e,classIdx:t,deleteLecture:i}){let o=t==null?null:e.classes[t],{t:s}=d();return r(N,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:o!=null&&x[o.day]&&o.begin!=null&&o.end!=null?r(m,{type:`Smaller`,color:`Text.light`,children:[s(`common.days.${x[o.day]}`),` `,Math.floor(o.begin/60),`:`,o.begin%60==0?`00`:`30`,` - `,Math.floor(o.end/60),`:`,o.end%60==0?`00`:`30`]}):n(m,{type:`Smaller`,color:`Text.light`,children:s(`timetable.noTimeInfo`)})}),r(P,{itemKey:_({kind:c.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:E,children:[n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:o==null?``:`(${o.buildingCode}) ${o.roomName}`}),i&&n(A,{onDelete:i})]})]})}var se=`custom-block-tile`,ce=e=>s`
    background: ${e.colors.Highlight.default};

    .block-title {
        color: ${e.colors.Text.onHighlight.default};
    }

    .block-info {
        color: ${e.colors.Text.onHighlight.muted};
    }

    .custom-block-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,le=i(a)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }
`,I=i(b)`
    background: ${({theme:e,blockId:t})=>{let n=S(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
    }

    @media (hover: hover) {
        .custom-timetable[data-interaction="true"]:has(
                [data-custom-block-id="${({blockId:e})=>e}"]
                    .${se}:hover
            )
            & {
            ${({theme:e})=>ce(e)}
        }
    }

    [data-flash-custom-blocks~="${({blockId:e})=>e}"] & {
        background: ${({theme:e})=>e.colors.Highlight.default};
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        ${({theme:e})=>ce(e)}
    }
`;function L({block:e,time:t,onSelect:i,onDelete:o,overflow:s=!1}){let{t:l}=d(),u=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`][t.day],f=e=>`${Math.floor(e/60).toString().padStart(2,`0`)}:${(e%60).toString().padStart(2,`0`)}`,p=`${l(`common.days.${u}`)} ${f(t.begin)}–${f(t.end)}`;return n(le,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,4)+1,rowStart:s?void 0:t.begin/30-14,rowEnd:s?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>i?.(e,t),"data-custom-block-id":e.id,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${p}`,children:r(I,{itemKey:_({kind:c.CUSTOM,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:se,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,color:`TimeTable.title`,className:`block-title`,children:e.block_name}),e.place&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:e.place}),s&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:p})]})}),o&&n(A,{onDelete:()=>o(e),ariaLabel:`Delete custom block: ${e.block_name}`,className:`custom-block-delete-wrapper`})]})})}var ue=(0,h.memo)(L),R=8,de=24,fe=Array.from({length:17},(e,t)=>R+t),pe=fe.map(e=>(e%12||12).toString()),z=(pe.length-1)*2,B=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],V=20,me=.8,he=5,H=1,ge=i(g)`
    z-index: 1;
`,_e=i(a)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,ve=i(a)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,ye=i(g)`
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
`,be=(0,h.memo)(({dayIdx:e,timeIdx:t,...r})=>n(U,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),W=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${E}:hover
        )
        &
        .${E} {
        ${({theme:e})=>D(e)}
    }
`,xe=(0,h.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileLeave:r,handleLectureTileSelect:i,deleteLecture:a,isGhost:o=!1})=>{let s=(0,h.useCallback)(()=>{t?.(e)},[t,e]),c=(0,h.useCallback)(()=>{r?.()},[r]),l=(0,h.useCallback)(t=>{i?.(e,t)},[i,e]),u=(0,h.useCallback)(()=>{a?.(e)},[a,e]);return n(W,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,...o?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>K({day:t.day,begin:t.begin,end:t.end})?n(ae,{lecture:e,classIdx:r,deleteLecture:a?u:void 0},`${r}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),G=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${E}:hover) .${E} {
        ${({theme:e})=>D(e)}
    }
`,Se=(0,h.memo)(({overlaps:e})=>n(G,{children:e.map((e,t)=>n(oe,{...e},t))}));function K(e){if(!e)return!1;let t=e.begin/60-R,n=e.end/60-R,{day:r}=e;return l.Mon<=r&&r<=l.Fri&&t>=0&&n<=16&&n-t>=.5&&e.begin%30==0&&e.end%30==0}var q=i.div`
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
`,Ce=(0,h.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o})=>{let s=(0,h.useCallback)(()=>{i?.(e)},[i,e]),c=(0,h.useCallback)(()=>{a?.()},[a]),l=(0,h.useCallback)(t=>{o?.(e,t)},[o,e]),u=(0,h.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length===0||e.classes.filter(e=>!K({...e})).length>0?n(q,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:s,onPointerLeave:c,onPointerDown:l,onTouchMove:s,onTouchEnd:c,children:e.classes.length===0?n(F,{lecture:e,deleteLecture:t?void 0:u},e.id):e.classes.map((r,i)=>{let{day:a,begin:o,end:s}=r;return K({day:a,begin:o,end:s})?null:n(F,{lecture:e,classIdx:i,deleteLecture:t?void 0:u},i)})}):null},(e,t)=>e.lecture===t.lecture&&e.deleteLecture===t.deleteLecture),we=i.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${V}px + (100% - ${V*1.2}px) *
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
`;function Te({timetableItems:e,selectedItems:t,flashItemKeys:i,onItemSelect:o,onItemDelete:s,lectures:l=[],customBlocks:u=[],cellWidth:f,needTimeFilter:p=!0,timeFilter:y,setTimeFilter:b,needLectureInteraction:x=!0,needLectureDeletable:S=!0,deleteLecture:C,hoveredLectures:w=[],setHoveredLectures:T,selectedLectures:E=[],onLectureSelect:D,selectedCustomBlock:O=null,onCustomBlockSelect:ne,isCustomBlockSectionOpen:k=!1,customBlockDraftTimes:re=[],needCurrentTimeBar:A=!1,flashLectureIds:ie=[]}){let{t:ae}=d(),j=(0,h.useMemo)(()=>e??[...l.map(e=>({kind:c.LECTURE,data:e})),...u.map(e=>({kind:c.CUSTOM,data:e}))],[e,l,u]),M=(0,h.useMemo)(()=>j.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[j]),oe=(0,h.useMemo)(()=>j.flatMap(e=>e.kind===c.CUSTOM?[e.data]:[]),[j]),N=(0,h.useMemo)(()=>oe.flatMap(e=>ee(e).map((t,n)=>({block:e,time:t,index:n}))),[oe]),P=(0,h.useMemo)(()=>t??[...E.map(e=>({kind:c.LECTURE,data:e})),...O?[{kind:c.CUSTOM,data:O}]:[]],[t,E,O]),F=(0,h.useMemo)(()=>P.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[P]),se=P.flatMap(e=>e.kind===c.CUSTOM?[e.data.id]:[]),ce=i?.filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1]))??ie,le=(0,h.useRef)(null),I=(0,h.useRef)(null),L=(0,h.useRef)(null),U=(0,h.useRef)(!1),W=(0,h.useRef)(null),G=(0,h.useRef)(null),q=(0,h.useRef)(null),[Te,Ee]=(0,h.useState)(null),[De,Oe]=(0,h.useState)(-1),J=(0,h.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<R||n>de||t<0||t>4){Ee(null);return}let r=(n-R)/16;Ee(r),Oe(t)},[]);(0,h.useEffect)(()=>{if(!A)return;J();let e=setInterval(J,6e4);return window.addEventListener(`resize`,J),()=>{clearInterval(e),window.removeEventListener(`resize`,J)}},[A,J]);let ke=(0,h.useMemo)(()=>{let e=[...M,...w,...F].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[M,w,F]),Y=(0,h.useMemo)(()=>{if(!x)return[];let e=w.filter(e=>!M.some(t=>t.id===e.id)),t=F.filter(e=>!M.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[w,F,M,x]),Ae=(0,h.useMemo)(()=>{if(!x||Y.length===0)return[];let e=[],t=j.flatMap(v);for(let n of Y)for(let r of v({kind:c.LECTURE,data:n}))for(let n of t){let t=Math.max(r.begin,n.begin),i=Math.min(r.end,n.end);r.day===n.day&&t<i&&e.push({day:r.day,begin:(t/60-R)*2,end:(i/60-R)*2})}return e},[Y,j,x]),X=ke.some(e=>e.classes.length===0||e.classes.some(e=>!K(e)))||N.some(({time:e})=>!K(e)),je=(0,h.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;L.current?.style.setProperty(`--hover-day`,(i+1).toString()),L.current?.style.setProperty(`--hover-start`,a.toString()),L.current?.style.setProperty(`--hover-end`,(a+1).toString()),L.current?.setAttribute(`data-is-dragging`,`true`),I.current?.setAttribute(`data-is-dragging`,`true`),U.current=!0,G.current=[r,r+1],q.current=i,W.current=r},[]),Z=(0,h.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=W.current==null?r:W.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;L.current?.style.setProperty(`--hover-start`,c.toString()),L.current?.style.setProperty(`--hover-end`,l.toString()),G.current=[o,s+1]},[]),Q=(0,h.useCallback)(()=>{G.current&&q.current!==null&&b?.({day:q.current,begin:(R+G.current[0]*.5)*60,end:(R+G.current[1]*.5)*60}),k?(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`)):G.current&&G.current[1]-G.current[0]>1?(L.current?.setAttribute(`data-is-dragging`,`wait`),I.current?.setAttribute(`data-is-dragging`,`wait`)):(G.current&&G.current[1]-G.current[0]<=1||!y)&&(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`),b?.(null)),U.current=!1,G.current=null,q.current=null,W.current=null},[k,y,b]);(0,h.useEffect)(()=>{(!y||k&&!U.current)&&(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`))},[y,k]);let Me=(0,h.useCallback)(e=>{U.current||!p||je(e.clientX,e.clientY)},[p]),Ne=(0,h.useCallback)(e=>{!U.current||W.current===null||Z(e.clientX,e.clientY)},[Z]),Pe=(0,h.useCallback)(e=>{if(!U.current||W.current===null)return;let t=e.touches[0];t!=null&&Z(t.clientX,t.clientY)},[Z]),Fe=(0,h.useCallback)(e=>{x&&T?.([e])},[T,x]),Ie=(0,h.useCallback)((e,t)=>{x&&(o?o({kind:c.LECTURE,data:e},t):D?.(e,t))},[D,o,x]),$=(0,h.useCallback)(()=>{T?.([]),L.current?.setAttribute(`data-is-hovering`,`false`)},[T]),Le=(0,h.useCallback)(e=>{x&&S&&($(),s?s({kind:c.LECTURE,data:e}):C?.(e.id))},[x,S,s,C,$]),Re=(0,h.useCallback)(e=>{x&&S&&($(),s?.({kind:c.CUSTOM,data:e}))},[x,S,s,$]),ze=(0,h.useCallback)((e,t)=>{x&&(o?o({kind:c.CUSTOM,data:e},t):ne?.(e,t))},[x,ne,o]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:le,"data-hovered-lectures":x?w.map(e=>e.id).join(` `):``,"data-selected-lectures":x?F.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":x?se.join(` `):``,"data-selected-items":x?P.map(_).join(` `):``,"data-flash-custom-blocks":(i??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ce.join(` `),"data-interaction":x,"data-lecture-deletable":S,onPointerLeave:$,onTouchEnd:$,children:r(g,{columns:`1fr`,rows:X?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(_e,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:X?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${V*me}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:pe.map((e,t)=>n(m,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${V*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(ge,{columns:`repeat(${B.length}, ${f||`1fr`})`,rows:`${V}px repeat(${z}, 1fr)`,flow:`column`,gap:`0px ${he}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:I,"data-is-dragging":`false`,"data-need-time-filter":p,...p?{onPointerDown:Me,onPointerMove:Ne,onPointerUp:Q,onPointerLeave:Q,onTouchMove:Pe,onTouchEnd:Q}:{},children:B.map((e,t)=>r(h.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(m,{type:`Small`,color:`Text.dark`,children:ae(`common.days.${e}`)})}),Array.from({length:z}).map((r,i)=>n(be,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===z-1?`last`:``,i%2==0&&(fe[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(ye,{columns:`repeat(${B.length}, ${f||`1fr`})`,rows:`${V}px repeat(${z}, 1fr)`,flow:`column`,gap:`${H}px ${he}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${V*.19999999999999996}px 0`,ref:L,"data-is-dragging":!1,children:[p&&n(te,{}),k&&re.filter(K).map((e,t)=>n(te,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-R)*2+2} / ${(e.end/60-R)*2+2}`}},t)),M.map((e,t)=>n(xe,{lecture:e,deleteLecture:x&&S&&(s||C)?Le:void 0,handleLectureTileHover:Fe,handleLectureTileLeave:$,handleLectureTileSelect:Ie},`${e.id}-lecture-tile-${t}`)),N.filter(({time:e})=>K(e)).map(({block:e,time:t,index:r})=>n(ue,{block:e,time:t,onSelect:ze,onDelete:x&&S&&s?Re:void 0},`custom-block-${e.id}-${r}`)),Y.map(e=>n(xe,{lecture:e,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Y.length>0&&n(Se,{overlaps:Ae}),A&&Te!==null&&n(we,{ratio:Te,dayIndex:De})]})]})]}),n(ve,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(X?` has-overflow`:``),children:r(g,{columns:`repeat(${B.length}, ${f||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${he}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[N.filter(({time:e})=>!K(e)).map(({block:e,time:t,index:r})=>n(ue,{block:e,time:t,onSelect:ze,onDelete:x&&S&&s?Re:void 0,overflow:!0},`custom-overflow-${e.id}-${r}`)),ke.map((e,t)=>n(Ce,{lecture:e,isGhost:M.every(t=>t.id!==e.id),deleteLecture:x&&S&&(s||C)?Le:void 0,handleLectureTileSelect:Ie,handleLectureTileHover:Fe,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Ee=(0,h.memo)(Te);export{_ as a,v as i,S as n,y as o,ee as r,Ee as t};
//# sourceMappingURL=CustomTimeTableGrid-BZCpbDob.js.map