(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`c70a54fbd7cbbb6cd210b27ccf3b8e764094a9aa`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b7dbdc0e-2b87-45cf-a2f2-e377cf1c260b`,e._sentryDebugIdIdentifier=`sentry-dbid-b7dbdc0e-2b87-45cf-a2f2-e377cf1c260b`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Bo_PE7uw.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-DuV0bH4x.js";import{n as i,t as a}from"./FlexWrapper-DyUQQhLo.js";import{i as o,n as s}from"./emotion-react.browser.esm-Ccqv5UL9.js";import{S as c}from"./axios-BxtEgwMC.js";import{d as l}from"./useAPI-dvh-bzEH.js";import{t as u}from"./Icon-D8nSFZSa.js";import{t as d}from"./useTranslation-CvUh8LTQ.js";import{t as f}from"./IconButton-DCQ43hr9.js";import{t as p}from"./Close-DwA3_Qjm.js";import{t as m}from"./Typography-GApR5r0N.js";import{t as h}from"./media-Ckaxssn3.js";var g=t(e(),1),_=i.div`
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
`,v=e=>`${e.kind}:${e.data.id}`,ee=e=>e.times??[{day:e.day,begin:e.begin,end:e.end}],y=e=>e.kind===c.LECTURE?e.data.classes:ee(e.data),b=(e,t)=>y(e).some(e=>y(t).some(t=>e.day===t.day&&e.begin<t.end&&t.begin<e.end)),x=i(a)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,S=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],C=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],w=i(a)`
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
`,T=i(a)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function E({style:e,className:t}){return n(w,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(T,{direction:`column`,gap:0,flex:`1 1 auto`})})}var te=(0,g.memo)(E),D=`lecture-tile`,O=e=>s`
    background: ${e.colors.Highlight.default};

    .lecture-title,
    .friend-overlap-label {
        color: ${e.colors.Text.onHighlight.default};
    }

    .lecture-info {
        color: ${e.colors.Text.onHighlight.muted};
    }

    .lecture-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,k=o`${`
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
        animation: ${k} 0.3s ease-out forwards;
    }
`,A=i(x)`
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

    &[data-friend-overlap] .lecture-content {
        min-width: 0;
        min-height: 0;

        ${h.tablet} {
            padding: 2px;
        }
    }
`,j=i.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 4px;
    align-items: start;
    width: 100%;
    min-width: 0;
    flex-shrink: 0;

    .lecture-title {
        min-width: 0;
        overflow-wrap: anywhere;
    }

    .friend-overlap-label {
        white-space: nowrap;
    }

    ${h.tablet} {
        display: flex;
        flex-direction: column;

        .friend-overlap-label {
            order: -1;
            align-self: flex-end;
            font-size: ${({theme:e})=>e.fonts.Smaller.fontSize}px;
            line-height: ${({theme:e})=>e.fonts.Smaller.lineHeight}px;
        }
    }
`;function re({lecture:e,overlapLabel:t}){let i=n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle});return t?r(j,{children:[i,n(m,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):i}var M=i(a)`
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
`;function N({onDelete:e,ariaLabel:t,className:r=`lecture-delete-wrapper`}){return n(M,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{"aria-label":t,styles:{padding:3},onClick:e,children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})}function P({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o,handleLectureTileSelect:s,handleLectureTileHover:l,handleLectureTileLeave:u}){let d=e.classes[t];if(d==null)return null;let f=(0,g.useCallback)(t=>{s?.(e,t)},[s,e]),p=(0,g.useCallback)(()=>{l?.(e)},[l,e]),h=(0,g.useCallback)(()=>{u?.()},[u]);return n(ne,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,lectureId:e.id,"data-class-time":d.day*24*60+d.begin,onPointerDown:f,onPointerEnter:p,onPointerLeave:h,children:r(A,{itemKey:v({kind:c.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:D,"data-friend-overlap":i?!0:void 0,children:[n(a,{className:`lecture-content`,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(re,{lecture:e,overlapLabel:i}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${d.buildingCode}) ${d.roomName}`})]})}),o&&n(N,{onDelete:()=>o(e)})]})})}var ie=(0,g.memo)(P),ae=i(a)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,F=i(a)`
    border-radius: 2px;
`;function I({day:e,begin:t,end:r}){return n(ae,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(F,{direction:`column`,gap:0,flex:`1 1 auto`})})}var oe=i(a)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,L=i(x)`
    position: relative;
    border-radius: 2px;
    overflow: hidden;
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

    &[data-friend-overlap] {
        ${h.tablet} {
            padding: 2px;
        }
    }
`;function R({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o}){let s=t==null?null:e.classes[t],{t:l}=d();return r(oe,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:s!=null&&S[s.day]&&s.begin!=null&&s.end!=null?r(m,{type:`Smaller`,color:`Text.light`,children:[l(`common.days.${S[s.day]}`),` `,Math.floor(s.begin/60),`:`,s.begin%60==0?`00`:`30`,` - `,Math.floor(s.end/60),`:`,s.end%60==0?`00`:`30`]}):n(m,{type:`Smaller`,color:`Text.light`,children:l(`timetable.noTimeInfo`)})}),r(L,{itemKey:v({kind:c.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:D,"data-friend-overlap":i?!0:void 0,children:[n(re,{lecture:e,overlapLabel:i}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:s==null?``:`(${s.buildingCode}) ${s.roomName}`}),o&&n(N,{onDelete:o})]})]})}var z=`custom-block-tile`,se=e=>s`
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
`,ce=i(a)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }
`,le=i(x)`
    background: ${({theme:e,blockId:t})=>{let n=C(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
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
                    .${z}:hover
            )
            & {
            ${({theme:e})=>se(e)}
        }
    }

    [data-flash-custom-blocks~="${({blockId:e})=>e}"] & {
        background: ${({theme:e})=>e.colors.Highlight.default};
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        ${({theme:e})=>se(e)}
    }
`;function B({block:e,time:t,onSelect:i,onDelete:o,overflow:s=!1,displayedDayCount:l=5}){let{t:u}=d(),f=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`][t.day],p=e=>`${Math.floor(e/60).toString().padStart(2,`0`)}:${(e%60).toString().padStart(2,`0`)}`,h=`${u(`common.days.${f}`)} ${p(t.begin)}–${p(t.end)}`;return n(ce,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,l-1)+1,rowStart:s?void 0:t.begin/30-14,rowEnd:s?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>i?.(e,t),"data-custom-block-id":e.id,"data-custom-block-interaction":!!i,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${h}`,children:r(le,{itemKey:v({kind:c.CUSTOM,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:z,role:i?`button`:void 0,tabIndex:i?0:void 0,"aria-label":i?`${e.block_name} · ${h}`:void 0,onKeyDown:i?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),i(e))}:void 0,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,color:`TimeTable.title`,className:`block-title`,children:e.block_name}),e.place&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:e.place}),s&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:h})]})}),o&&n(N,{onDelete:()=>o(e),ariaLabel:`Delete custom block: ${e.block_name}`,className:`custom-block-delete-wrapper`})]})})}var ue=(0,g.memo)(B),V=8,de=24,fe=Array.from({length:17},(e,t)=>V+t),pe=fe.map(e=>(e%12||12).toString()),H=(pe.length-1)*2,me=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],U=20,he=.8,ge=5,W=1,_e=i(_)`
    z-index: 1;
`,ve=i(a)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,ye=i(a)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,be=i(_)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,G=i(a)`
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
`,xe=(0,g.memo)(({dayIdx:e,timeIdx:t,...r})=>n(G,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),K=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${D}:hover
        )
        &
        .${D} {
        ${({theme:e})=>O(e)}
    }
`,Se=(0,g.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,g.useCallback)(()=>{i?.(e)},[i,e]),u=(0,g.useCallback)(()=>{a?.()},[a]),d=(0,g.useCallback)(t=>{o?.(e,t)},[o,e]),f=(0,g.useCallback)(()=>{s?.(e)},[s,e]);return n(K,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,...c?{"data-ghost":!0}:{},children:e.classes.map((i,a)=>J(i,t)?n(ie,{lecture:e,classIdx:a,overlapLabel:r,deleteLecture:s?f:void 0},`${a}-lecture`):null)})}),q=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${D}:hover) .${D} {
        ${({theme:e})=>O(e)}
    }
`,Ce=(0,g.memo)(({overlaps:e})=>n(q,{children:e.map((e,t)=>n(I,{...e},t))}));function J(e,t){if(!e)return!1;let n=e.begin/60-V,r=e.end/60-V,{day:i}=e;return l.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var Y=i.div`
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
`,we=(0,g.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,g.useCallback)(()=>{o?.(e)},[o,e]),u=(0,g.useCallback)(()=>{s?.()},[s]),d=(0,g.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,g.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!J(e,t))?n(Y,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(R,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return J({day:c,begin:l,end:u},t)?null:n(R,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),Te=i.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${U}px + (100% - ${U*1.2}px) *
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
`;function X({timetableItems:e,overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:o,flashItemKeys:s,onItemSelect:l,onItemDelete:u,lectures:f=[],customBlocks:p=[],cellWidth:h,needTimeFilter:b=!0,timeFilter:x,setTimeFilter:S,needLectureInteraction:C=!0,needLectureDeletable:w=!0,deleteLecture:T,hoveredLectures:E=[],setHoveredLectures:D,selectedLectures:O=[],onLectureSelect:k,selectedCustomBlock:ne=null,onCustomBlockSelect:A,isCustomBlockSectionOpen:j=!1,customBlockDraftTimes:re=[],needCurrentTimeBar:M=!1,flashLectureIds:N=[]}){let{t:P}=d(),ie=me.slice(0,i),ae=(0,g.useMemo)(()=>new Set(t),[t]),F=(0,g.useMemo)(()=>e??[...f.map(e=>({kind:c.LECTURE,data:e})),...p.map(e=>({kind:c.CUSTOM,data:e}))],[e,f,p]),I=(0,g.useMemo)(()=>F.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[F]),oe=(0,g.useMemo)(()=>F.flatMap(e=>e.kind===c.CUSTOM?[e.data]:[]),[F]),L=(0,g.useMemo)(()=>oe.flatMap(e=>ee(e).map((t,n)=>({block:e,time:t,index:n}))),[oe]),R=(0,g.useMemo)(()=>o??[...O.map(e=>({kind:c.LECTURE,data:e})),...ne?[{kind:c.CUSTOM,data:ne}]:[]],[o,O,ne]),z=(0,g.useMemo)(()=>R.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[R]),se=R.flatMap(e=>e.kind===c.CUSTOM?[e.data.id]:[]),ce=s?.filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1]))??N,le=(0,g.useRef)(null),B=(0,g.useRef)(null),G=(0,g.useRef)(null),K=(0,g.useRef)(!1),q=(0,g.useRef)(null),Y=(0,g.useRef)(null),X=(0,g.useRef)(null),[Ee,De]=(0,g.useState)(null),[Oe,ke]=(0,g.useState)(-1),Z=(0,g.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<V||n>de||t>=i){De(null);return}let r=(n-V)/16;De(r),ke(t)},[i]);(0,g.useEffect)(()=>{if(!M)return;Z();let e=setInterval(Z,6e4);return window.addEventListener(`resize`,Z),()=>{clearInterval(e),window.removeEventListener(`resize`,Z)}},[M,Z]);let Ae=(0,g.useMemo)(()=>{let e=[...I,...E,...z].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[I,E,z]),Q=(0,g.useMemo)(()=>{if(!C)return[];let e=E.filter(e=>!I.some(t=>t.id===e.id)),t=z.filter(e=>!I.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[E,z,I,C]),je=(0,g.useMemo)(()=>{if(!C||Q.length===0)return[];let e=[],t=F.flatMap(y);for(let n of Q)for(let r of y({kind:c.LECTURE,data:n}))for(let n of t){let t=Math.max(r.begin,n.begin),i=Math.min(r.end,n.end);r.day===n.day&&t<i&&e.push({day:r.day,begin:(t/60-V)*2,end:(i/60-V)*2})}return e},[Q,F,C]),Me=Ae.some(e=>e.classes.length===0||e.classes.some(e=>!J(e,i)))||L.some(({time:e})=>!J(e,i)),Ne=(0,g.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;G.current?.style.setProperty(`--hover-day`,(i+1).toString()),G.current?.style.setProperty(`--hover-start`,a.toString()),G.current?.style.setProperty(`--hover-end`,(a+1).toString()),G.current?.setAttribute(`data-is-dragging`,`true`),B.current?.setAttribute(`data-is-dragging`,`true`),K.current=!0,Y.current=[r,r+1],X.current=i,q.current=r},[]),Pe=(0,g.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=q.current==null?r:q.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;G.current?.style.setProperty(`--hover-start`,c.toString()),G.current?.style.setProperty(`--hover-end`,l.toString()),Y.current=[o,s+1]},[]),Fe=(0,g.useCallback)(()=>{Y.current&&X.current!==null&&S?.({day:X.current,begin:(V+Y.current[0]*.5)*60,end:(V+Y.current[1]*.5)*60}),j?(G.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`)):Y.current&&Y.current[1]-Y.current[0]>1?(G.current?.setAttribute(`data-is-dragging`,`wait`),B.current?.setAttribute(`data-is-dragging`,`wait`)):(Y.current&&Y.current[1]-Y.current[0]<=1||!x)&&(G.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`),S?.(null)),K.current=!1,Y.current=null,X.current=null,q.current=null},[j,x,S]);(0,g.useEffect)(()=>{(!x||j&&!K.current)&&(G.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`))},[x,j]);let Ie=(0,g.useCallback)(e=>{K.current||!b||Ne(e.clientX,e.clientY)},[b]),Le=(0,g.useCallback)(e=>{!K.current||q.current===null||Pe(e.clientX,e.clientY)},[Pe]),Re=(0,g.useCallback)(e=>{if(!K.current||q.current===null)return;let t=e.touches[0];t!=null&&Pe(t.clientX,t.clientY)},[Pe]),ze=(0,g.useCallback)(e=>{C&&D?.([e])},[D,C]),Be=(0,g.useCallback)((e,t)=>{C&&(l?l({kind:c.LECTURE,data:e},t):k?.(e,t))},[k,l,C]),$=(0,g.useCallback)(()=>{D?.([]),G.current?.setAttribute(`data-is-hovering`,`false`)},[D]),Ve=(0,g.useCallback)(e=>{C&&w&&($(),u?u({kind:c.LECTURE,data:e}):T?.(e.id))},[C,w,u,T,$]),He=(0,g.useCallback)(e=>{C&&w&&($(),u?.({kind:c.CUSTOM,data:e}))},[C,w,u,$]),Ue=(0,g.useCallback)((e,t)=>{C&&(l?l({kind:c.CUSTOM,data:e},t):A?.(e,t))},[C,A,l]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:le,"data-hovered-lectures":C?E.map(e=>e.id).join(` `):``,"data-selected-lectures":C?z.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":C?se.join(` `):``,"data-selected-items":C?R.map(v).join(` `):``,"data-flash-custom-blocks":(s??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ce.join(` `),"data-interaction":C,"data-lecture-deletable":w,onPointerLeave:$,onTouchEnd:$,children:r(_,{columns:`1fr`,rows:Me?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(ve,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Me?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${U*he}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:pe.map((e,t)=>n(m,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${U*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(_e,{columns:`repeat(${i}, ${h||`1fr`})`,rows:`${U}px repeat(${H}, 1fr)`,flow:`column`,gap:`0px ${ge}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:B,"data-is-dragging":`false`,"data-need-time-filter":b,...b?{onPointerDown:Ie,onPointerMove:Le,onPointerUp:Fe,onPointerLeave:Fe,onTouchMove:Re,onTouchEnd:Fe}:{},children:ie.map((e,t)=>r(g.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(m,{type:`Small`,color:`Text.dark`,children:P(`common.days.${e}`)})}),Array.from({length:H}).map((r,i)=>n(xe,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===H-1?`last`:``,i%2==0&&(fe[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(be,{columns:`repeat(${i}, ${h||`1fr`})`,rows:`${U}px repeat(${H}, 1fr)`,flow:`column`,gap:`${W}px ${ge}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${U*.19999999999999996}px 0`,ref:G,"data-is-dragging":!1,children:[b&&n(te,{}),j&&re.filter(e=>J(e,i)).map((e,t)=>n(te,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-V)*2+2} / ${(e.end/60-V)*2+2}`}},t)),I.map((e,t)=>n(Se,{lecture:e,displayedDayCount:i,overlapLabel:ae.has(e.id)?P(`friends.overlapLabel`):void 0,deleteLecture:C&&w&&(u||T)?Ve:void 0,handleLectureTileHover:ze,handleLectureTileLeave:$,handleLectureTileSelect:Be},`${e.id}-lecture-tile-${t}`)),L.filter(({time:e})=>J(e,i)).map(({block:e,time:t,index:r})=>n(ue,{block:e,time:t,displayedDayCount:i,onSelect:C&&(l||A)?Ue:void 0,onDelete:C&&w&&u?He:void 0},`custom-block-${e.id}-${r}`)),Q.map(e=>n(Se,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Q.length>0&&n(Ce,{overlaps:je}),M&&Ee!==null&&n(Te,{ratio:Ee,dayIndex:Oe})]})]})]}),n(ye,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Me?` has-overflow`:``),children:r(_,{columns:`repeat(${i}, ${h||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${ge}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[L.filter(({time:e})=>!J(e,i)).map(({block:e,time:t,index:r})=>n(ue,{block:e,time:t,displayedDayCount:i,onSelect:C&&(l||A)?Ue:void 0,onDelete:C&&w&&u?He:void 0,overflow:!0},`custom-overflow-${e.id}-${r}`)),Ae.map((e,t)=>n(we,{lecture:e,displayedDayCount:i,overlapLabel:ae.has(e.id)&&I.some(t=>t.id===e.id)?P(`friends.overlapLabel`):void 0,isGhost:I.every(t=>t.id!==e.id),deleteLecture:C&&w&&(u||T)?Ve:void 0,handleLectureTileSelect:Be,handleLectureTileHover:ze,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Ee=(0,g.memo)(X);export{v as a,y as i,C as n,b as o,ee as r,Ee as t};
//# sourceMappingURL=CustomTimeTableGrid-aG0iWbee.js.map