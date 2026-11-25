(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`8ec5cba2c2839443bceea8bac9a6f4e4a4c0aa15`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`820eace6-a7eb-455b-9af0-3e4900fa3c1c`,e._sentryDebugIdIdentifier=`sentry-dbid-820eace6-a7eb-455b-9af0-3e4900fa3c1c`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-B5FBW3Q0.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-BHrEP6VF.js";import{n as i,t as a}from"./FlexWrapper-DodM52nA.js";import{i as o,n as s}from"./emotion-react.browser.esm-CFa9x4-E.js";import{S as c}from"./axios-DY9jxrfJ.js";import{d as l}from"./useAPI-B7mHQp4d.js";import{t as u}from"./Icon-yEfPh2gL.js";import{t as d}from"./useTranslation-DH5dhXz2.js";import{t as f}from"./IconButton-Bl8eNDKj.js";import{t as p}from"./Close-CtO1X0JD.js";import{t as m}from"./Typography-CC1ro8jc.js";import{t as h}from"./media-D21WL7ou.js";import{t as ee}from"./formatTimeblockToString-C_fWjB4H.js";var g=t(e(),1),_=i.div`
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
`,v=e=>`${e.kind}:${e.data.id}`,te=e=>e.times??[{day:e.day,begin:e.begin,end:e.end}],y=e=>e.kind===c.LECTURE?e.data.classes:te(e.data),b=(e,t)=>y(e).some(e=>y(t).some(t=>e.day===t.day&&e.begin<t.end&&t.begin<e.end)),x=i(a)`
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
`;function E({style:e,className:t}){return n(w,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(T,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ne=(0,g.memo)(E),D=`lecture-tile`,O=e=>s`
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
`}`,re=i(a)`
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
`;function M({lecture:e,overlapLabel:t}){let i=n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle});return t?r(j,{children:[i,n(m,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):i}var ie=i(a)`
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
`;function N({onDelete:e,ariaLabel:t,className:r=`lecture-delete-wrapper`}){return n(ie,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{"aria-label":t,styles:{padding:3},onClick:e,children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})}function ae({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o,handleLectureTileSelect:s,handleLectureTileHover:l,handleLectureTileLeave:u}){let d=e.classes[t];if(d==null)return null;let f=(0,g.useCallback)(t=>{s?.(e,t)},[s,e]),p=(0,g.useCallback)(()=>{l?.(e)},[l,e]),h=(0,g.useCallback)(()=>{u?.()},[u]);return n(re,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,lectureId:e.id,"data-class-time":d.day*24*60+d.begin,onPointerDown:f,onPointerEnter:p,onPointerLeave:h,children:r(A,{itemKey:v({kind:c.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:D,"data-friend-overlap":i?!0:void 0,children:[n(a,{className:`lecture-content`,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(M,{lecture:e,overlapLabel:i}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${d.buildingCode}) ${d.roomName}`})]})}),o&&n(N,{onDelete:()=>o(e)})]})})}var P=(0,g.memo)(ae),oe=i(a)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,se=i(a)`
    border-radius: 2px;
`;function F({day:e,begin:t,end:r}){return n(oe,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(se,{direction:`column`,gap:0,flex:`1 1 auto`})})}var I=i(a)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,ce=i(x)`
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
`;function L({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o}){let s=t==null?null:e.classes[t],{t:l}=d();return r(I,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:s!=null&&S[s.day]&&s.begin!=null&&s.end!=null?r(m,{type:`Smaller`,color:`Text.light`,children:[l(`common.days.${S[s.day]}`),` `,Math.floor(s.begin/60),`:`,s.begin%60==0?`00`:`30`,` - `,Math.floor(s.end/60),`:`,s.end%60==0?`00`:`30`]}):n(m,{type:`Smaller`,color:`Text.light`,children:l(`timetable.noTimeInfo`)})}),r(ce,{itemKey:v({kind:c.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:D,"data-friend-overlap":i?!0:void 0,children:[n(M,{lecture:e,overlapLabel:i}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:s==null?``:`(${s.buildingCode}) ${s.roomName}`}),o&&n(N,{onDelete:o})]})]})}var R=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],z=`custom-block-tile`,le=e=>s`
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
`,ue=i(a)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }
`,de=i(x)`
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
            ${({theme:e})=>le(e)}
        }
    }

    [data-flash-custom-blocks~="${({blockId:e})=>e}"] & {
        background: ${({theme:e})=>e.colors.Highlight.default};
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        ${({theme:e})=>le(e)}
    }
`;function B({block:e,time:t,onSelect:i,onHover:o,onDelete:s,overflow:l=!1,displayedDayCount:u=5}){let{t:f}=d(),p=R[t.day],h=`${f(`common.days.${p}`)} ${ee(t.begin)}–${ee(t.end)}`;return n(ue,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,u-1)+1,rowStart:l?void 0:t.begin/30-14,rowEnd:l?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>i?.(e,t),onPointerEnter:()=>o?.(e),onPointerLeave:()=>o?.(null),"data-custom-block-id":e.id,"data-custom-block-interaction":!!i,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${h}`,children:r(de,{itemKey:v({kind:c.CUSTOM,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:z,role:i?`button`:void 0,tabIndex:i?0:void 0,"aria-label":i?`${e.block_name} · ${h}`:void 0,onKeyDown:i?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),i(e))}:void 0,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,color:`TimeTable.title`,className:`block-title`,children:e.block_name}),e.place&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:e.place}),l&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:h})]})}),s&&n(N,{onDelete:()=>s(e),ariaLabel:`Delete custom block: ${e.block_name}`,className:`custom-block-delete-wrapper`})]})})}var fe=(0,g.memo)(B),V=8,pe=24,me=Array.from({length:17},(e,t)=>V+t),he=me.map(e=>(e%12||12).toString()),H=(he.length-1)*2,ge=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],U=20,_e=.8,ve=5,W=1,ye=i(_)`
    z-index: 1;
`,be=i(a)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,xe=i(a)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,Se=i(_)`
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
`,Ce=(0,g.memo)(({dayIdx:e,timeIdx:t,...r})=>n(G,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),K=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${D}:hover
        )
        &
        .${D} {
        ${({theme:e})=>O(e)}
    }
`,we=(0,g.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,g.useCallback)(()=>{i?.(e)},[i,e]),u=(0,g.useCallback)(()=>{a?.()},[a]),d=(0,g.useCallback)(t=>{o?.(e,t)},[o,e]),f=(0,g.useCallback)(()=>{s?.(e)},[s,e]);return n(K,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,...c?{"data-ghost":!0}:{},children:e.classes.map((i,a)=>J(i,t)?n(P,{lecture:e,classIdx:a,overlapLabel:r,deleteLecture:s?f:void 0},`${a}-lecture`):null)})}),q=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${D}:hover) .${D} {
        ${({theme:e})=>O(e)}
    }
`,Te=(0,g.memo)(({overlaps:e})=>n(q,{children:e.map((e,t)=>n(F,{...e},t))}));function J(e,t){if(!e)return!1;let n=e.begin/60-V,r=e.end/60-V,{day:i}=e;return l.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var Y=i.div`
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
`,Ee=(0,g.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,g.useCallback)(()=>{o?.(e)},[o,e]),u=(0,g.useCallback)(()=>{s?.()},[s]),d=(0,g.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,g.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!J(e,t))?n(Y,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(L,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return J({day:c,begin:l,end:u},t)?null:n(L,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),De=i.div`
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
`;function X({timetableItems:e,overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:o,flashItemKeys:s,onItemSelect:l,onItemHover:u,onItemLeave:f,onItemDelete:p,lectures:h=[],customBlocks:ee=[],cellWidth:b,needTimeFilter:x=!0,timeFilter:S,setTimeFilter:C,needLectureInteraction:w=!0,needLectureDeletable:T=!0,deleteLecture:E,hoveredLectures:D=[],setHoveredLectures:O,selectedLectures:k=[],onLectureSelect:re,selectedCustomBlock:A=null,onCustomBlockSelect:j,isCustomBlockSectionOpen:M=!1,customBlockDraftTimes:ie=[],needCurrentTimeBar:N=!1,flashLectureIds:ae=[]}){let{t:P}=d(),oe=ge.slice(0,i),se=(0,g.useMemo)(()=>new Set(t),[t]),F=(0,g.useMemo)(()=>e??[...h.map(e=>({kind:c.LECTURE,data:e})),...ee.map(e=>({kind:c.CUSTOM,data:e}))],[e,h,ee]),I=(0,g.useMemo)(()=>F.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[F]),ce=(0,g.useMemo)(()=>F.flatMap(e=>e.kind===c.CUSTOM?[e.data]:[]),[F]),L=(0,g.useMemo)(()=>ce.flatMap(e=>te(e).map((t,n)=>({block:e,time:t,index:n}))),[ce]),R=(0,g.useMemo)(()=>o??[...k.map(e=>({kind:c.LECTURE,data:e})),...A?[{kind:c.CUSTOM,data:A}]:[]],[o,k,A]),z=(0,g.useMemo)(()=>R.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[R]),le=R.flatMap(e=>e.kind===c.CUSTOM?[e.data.id]:[]),ue=s?.filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1]))??ae,de=(0,g.useRef)(null),B=(0,g.useRef)(null),G=(0,g.useRef)(null),K=(0,g.useRef)(!1),q=(0,g.useRef)(null),Y=(0,g.useRef)(null),X=(0,g.useRef)(null),[Oe,ke]=(0,g.useState)(null),[Ae,je]=(0,g.useState)(-1),Z=(0,g.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<V||n>pe||t>=i){ke(null);return}let r=(n-V)/16;ke(r),je(t)},[i]);(0,g.useEffect)(()=>{if(!N)return;Z();let e=setInterval(Z,6e4);return window.addEventListener(`resize`,Z),()=>{clearInterval(e),window.removeEventListener(`resize`,Z)}},[N,Z]);let Me=(0,g.useMemo)(()=>{let e=[...I,...D,...z].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[I,D,z]),Q=(0,g.useMemo)(()=>{if(!w)return[];let e=D.filter(e=>!I.some(t=>t.id===e.id)),t=z.filter(e=>!I.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[D,z,I,w]),Ne=(0,g.useMemo)(()=>{if(!w||Q.length===0)return[];let e=[],t=F.flatMap(y);for(let n of Q)for(let r of y({kind:c.LECTURE,data:n}))for(let n of t){let t=Math.max(r.begin,n.begin),i=Math.min(r.end,n.end);r.day===n.day&&t<i&&e.push({day:r.day,begin:(t/60-V)*2,end:(i/60-V)*2})}return e},[Q,F,w]),Pe=Me.some(e=>e.classes.length===0||e.classes.some(e=>!J(e,i)))||L.some(({time:e})=>!J(e,i)),Fe=(0,g.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;G.current?.style.setProperty(`--hover-day`,(i+1).toString()),G.current?.style.setProperty(`--hover-start`,a.toString()),G.current?.style.setProperty(`--hover-end`,(a+1).toString()),G.current?.setAttribute(`data-is-dragging`,`true`),B.current?.setAttribute(`data-is-dragging`,`true`),K.current=!0,Y.current=[r,r+1],X.current=i,q.current=r},[]),Ie=(0,g.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=q.current==null?r:q.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;G.current?.style.setProperty(`--hover-start`,c.toString()),G.current?.style.setProperty(`--hover-end`,l.toString()),Y.current=[o,s+1]},[]),Le=(0,g.useCallback)(()=>{Y.current&&X.current!==null&&C?.({day:X.current,begin:(V+Y.current[0]*.5)*60,end:(V+Y.current[1]*.5)*60}),M?(G.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`)):Y.current&&Y.current[1]-Y.current[0]>1?(G.current?.setAttribute(`data-is-dragging`,`wait`),B.current?.setAttribute(`data-is-dragging`,`wait`)):(Y.current&&Y.current[1]-Y.current[0]<=1||!S)&&(G.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`),C?.(null)),K.current=!1,Y.current=null,X.current=null,q.current=null},[M,S,C]);(0,g.useEffect)(()=>{(!S||M&&!K.current)&&(G.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`))},[S,M]);let Re=(0,g.useCallback)(e=>{K.current||!x||Fe(e.clientX,e.clientY)},[x]),ze=(0,g.useCallback)(e=>{!K.current||q.current===null||Ie(e.clientX,e.clientY)},[Ie]),Be=(0,g.useCallback)(e=>{if(!K.current||q.current===null)return;let t=e.touches[0];t!=null&&Ie(t.clientX,t.clientY)},[Ie]),Ve=(0,g.useCallback)(e=>{w&&(O?.([e]),u?.({kind:c.LECTURE,data:e}))},[O,w]),He=(0,g.useCallback)((e,t)=>{w&&(l?l({kind:c.LECTURE,data:e},t):re?.(e,t))},[re,l,w]),$=(0,g.useCallback)(()=>{O?.([]),f?.(),G.current?.setAttribute(`data-is-hovering`,`false`)},[O]),Ue=(0,g.useCallback)(e=>{w&&T&&($(),p?p({kind:c.LECTURE,data:e}):E?.(e.id))},[w,T,p,E,$]),We=(0,g.useCallback)(e=>{w&&T&&($(),p?.({kind:c.CUSTOM,data:e}))},[w,T,p,$]),Ge=(0,g.useCallback)((e,t)=>{w&&(l?l({kind:c.CUSTOM,data:e},t):j?.(e,t))},[w,j,l]),Ke=(0,g.useCallback)(e=>{w&&u?.({kind:c.CUSTOM,data:e})},[w,u]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:de,"data-hovered-lectures":w?D.map(e=>e.id).join(` `):``,"data-selected-lectures":w?z.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":w?le.join(` `):``,"data-selected-items":w?R.map(v).join(` `):``,"data-flash-custom-blocks":(s??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ue.join(` `),"data-interaction":w,"data-lecture-deletable":T,onPointerLeave:$,onTouchEnd:$,children:r(_,{columns:`1fr`,rows:Pe?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(be,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Pe?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${U*_e}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:he.map((e,t)=>n(m,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${U*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(ye,{columns:`repeat(${i}, ${b||`1fr`})`,rows:`${U}px repeat(${H}, 1fr)`,flow:`column`,gap:`0px ${ve}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:B,"data-is-dragging":`false`,"data-need-time-filter":x,...x?{onPointerDown:Re,onPointerMove:ze,onPointerUp:Le,onPointerLeave:Le,onTouchMove:Be,onTouchEnd:Le}:{},children:oe.map((e,t)=>r(g.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(m,{type:`Small`,color:`Text.dark`,children:P(`common.days.${e}`)})}),Array.from({length:H}).map((r,i)=>n(Ce,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===H-1?`last`:``,i%2==0&&(me[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(Se,{columns:`repeat(${i}, ${b||`1fr`})`,rows:`${U}px repeat(${H}, 1fr)`,flow:`column`,gap:`${W}px ${ve}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${U*.19999999999999996}px 0`,ref:G,"data-is-dragging":!1,children:[x&&n(ne,{}),M&&ie.filter(e=>J(e,i)).map((e,t)=>n(ne,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-V)*2+2} / ${(e.end/60-V)*2+2}`}},t)),I.map((e,t)=>n(we,{lecture:e,displayedDayCount:i,overlapLabel:se.has(e.id)?P(`friends.overlapLabel`):void 0,deleteLecture:w&&T&&(p||E)?Ue:void 0,handleLectureTileHover:Ve,handleLectureTileLeave:$,handleLectureTileSelect:He},`${e.id}-lecture-tile-${t}`)),L.filter(({time:e})=>J(e,i)).map(({block:e,time:t,index:r})=>n(fe,{block:e,time:t,displayedDayCount:i,onSelect:w&&(l||j)?Ge:void 0,onDelete:w&&T&&p?We:void 0,onHover:w?Ke:void 0},`custom-block-${e.id}-${r}`)),Q.map(e=>n(we,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Q.length>0&&n(Te,{overlaps:Ne}),N&&Oe!==null&&n(De,{ratio:Oe,dayIndex:Ae})]})]})]}),n(xe,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Pe?` has-overflow`:``),children:r(_,{columns:`repeat(${i}, ${b||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${ve}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[L.filter(({time:e})=>!J(e,i)).map(({block:e,time:t,index:r})=>n(fe,{block:e,time:t,displayedDayCount:i,onSelect:w&&(l||j)?Ge:void 0,onDelete:w&&T&&p?We:void 0,overflow:!0},`custom-overflow-${e.id}-${r}`)),Me.map((e,t)=>n(Ee,{lecture:e,displayedDayCount:i,overlapLabel:se.has(e.id)&&I.some(t=>t.id===e.id)?P(`friends.overlapLabel`):void 0,isGhost:I.every(t=>t.id!==e.id),deleteLecture:w&&T&&(p||E)?Ue:void 0,handleLectureTileSelect:He,handleLectureTileHover:Ve,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Oe=(0,g.memo)(X);export{v as a,y as i,C as n,b as o,te as r,Oe as t};
//# sourceMappingURL=CustomTimeTableGrid-CRwCnZ5Y.js.map