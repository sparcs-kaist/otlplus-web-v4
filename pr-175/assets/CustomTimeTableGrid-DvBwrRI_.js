(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`2c1e8a6b5927cccf2dbf051eaa915e9e53ffa050`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`9023ad7b-2dfe-4fad-b430-ff9a1f450cd3`,e._sentryDebugIdIdentifier=`sentry-dbid-9023ad7b-2dfe-4fad-b430-ff9a1f450cd3`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CaXezaKZ.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-BdfgIsZM.js";import{n as i,t as a}from"./FlexWrapper-1WD1kJQm.js";import{i as o,n as s}from"./emotion-react.browser.esm-sGZgakm-.js";import{S as c}from"./axios-CFkEBp0O.js";import{d as l}from"./useAPI-0nTFdtI7.js";import{t as u}from"./Icon-CTV-y14-.js";import{t as d}from"./useTranslation-oaurZEok.js";import{t as f}from"./IconButton-CJVA27uU.js";import{t as p}from"./Close-CuVVrVoz.js";import{t as m}from"./Typography-CZ38chyR.js";import{t as h}from"./media-CCdWIxp1.js";import{t as g}from"./formatTimeblockToString-DOY54N3n.js";var _=t(e(),1),v=i.div`
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
`,y=e=>`${e.kind}:${e.data.id}`,ee=e=>e.times??[{day:e.day,begin:e.begin,end:e.end}],b=e=>e.kind===c.LECTURE?e.data.classes:ee(e.data),x=(e,t)=>b(e).some(e=>b(t).some(t=>e.day===t.day&&e.begin<t.end&&t.begin<e.end)),S=i(a)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,C=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],w=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],T=i(a)`
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
`,E=i(a)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function D({style:e,className:t}){return n(T,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(E,{direction:`column`,gap:0,flex:`1 1 auto`})})}var te=(0,_.memo)(D),O=`lecture-tile`,k=e=>s`
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
`,ne=o`${`
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
        animation: ${ne} 0.3s ease-out forwards;
    }
`,ie=i(S)`
    background: ${({theme:e,courseId:t})=>()=>{let n=w(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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

    &[data-friend-overlap] .lecture-content {
        min-width: 0;
        min-height: 0;

        ${h.tablet} {
            padding: 2px;
        }
    }
`,ae=i.div`
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
`;function A({lecture:e,overlapLabel:t}){let i=n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle});return t?r(ae,{children:[i,n(m,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):i}var j=i(a)`
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
`;function M({onDelete:e,ariaLabel:t,className:r=`lecture-delete-wrapper`}){return n(j,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{"aria-label":t,styles:{padding:3},onClick:e,children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})}function oe({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o,handleLectureTileSelect:s,handleLectureTileHover:l,handleLectureTileLeave:u}){let d=e.classes[t];if(d==null)return null;let f=(0,_.useCallback)(t=>{s?.(e,t)},[s,e]),p=(0,_.useCallback)(()=>{l?.(e)},[l,e]),h=(0,_.useCallback)(()=>{u?.()},[u]);return n(re,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,lectureId:e.id,"data-class-time":d.day*24*60+d.begin,onPointerDown:f,onPointerEnter:p,onPointerLeave:h,children:r(ie,{itemKey:y({kind:c.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:O,"data-friend-overlap":i?!0:void 0,children:[n(a,{className:`lecture-content`,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(A,{lecture:e,overlapLabel:i}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${d.buildingCode}) ${d.roomName}`})]})}),o&&n(M,{onDelete:()=>o(e)})]})})}var N=(0,_.memo)(oe),se=i(a)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,P=i(a)`
    border-radius: 2px;
`;function ce({day:e,begin:t,end:r}){return n(se,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(P,{direction:`column`,gap:0,flex:`1 1 auto`})})}var le=i(a)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,F=i(S)`
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=w(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

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
        animation: ${ne} 0.3s ease-out forwards;
    }

    &[data-friend-overlap] {
        ${h.tablet} {
            padding: 2px;
        }
    }
`;function I({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o}){let s=t==null?null:e.classes[t],{t:l}=d();return r(le,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:s!=null&&C[s.day]&&s.begin!=null&&s.end!=null?r(m,{type:`Smaller`,color:`Text.light`,children:[l(`common.days.${C[s.day]}`),` `,Math.floor(s.begin/60),`:`,s.begin%60==0?`00`:`30`,` - `,Math.floor(s.end/60),`:`,s.end%60==0?`00`:`30`]}):n(m,{type:`Smaller`,color:`Text.light`,children:l(`timetable.noTimeInfo`)})}),r(F,{itemKey:y({kind:c.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:O,"data-friend-overlap":i?!0:void 0,children:[n(A,{lecture:e,overlapLabel:i}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:s==null?``:`(${s.buildingCode}) ${s.roomName}`}),o&&n(M,{onDelete:o})]})]})}var ue=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],L=`custom-block-tile`,R=e=>s`
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
`,z=i(a)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }
`,de=i(S)`
    background: ${({theme:e,blockId:t})=>{let n=w(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
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
                    .${L}:hover
            )
            & {
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
`;function fe({block:e,time:t,onSelect:i,onHover:o,onDelete:s,overflow:l=!1,displayedDayCount:u=5}){let{t:f}=d(),p=ue[t.day],h=`${f(`common.days.${p}`)} ${g(t.begin)}–${g(t.end)}`;return n(z,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,u-1)+1,rowStart:l?void 0:t.begin/30-14,rowEnd:l?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>i?.(e,t),onPointerEnter:()=>o?.(e),onPointerLeave:()=>o?.(null),"data-custom-block-id":e.id,"data-custom-block-interaction":!!i,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${h}`,children:r(de,{itemKey:y({kind:c.CUSTOM,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:L,role:i?`button`:void 0,tabIndex:i?0:void 0,"aria-label":i?`${e.block_name} · ${h}`:void 0,onKeyDown:i?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),i(e))}:void 0,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,color:`TimeTable.title`,className:`block-title`,children:e.block_name}),e.place&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:e.place}),l&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:h})]})}),s&&n(M,{onDelete:()=>s(e),ariaLabel:`Delete custom block: ${e.block_name}`,className:`custom-block-delete-wrapper`})]})})}var pe=(0,_.memo)(fe),B=8,me=24,he=Array.from({length:17},(e,t)=>B+t),ge=he.map(e=>(e%12||12).toString()),V=(ge.length-1)*2,_e=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],H=20,ve=.8,ye=5,U=1,be=i(v)`
    z-index: 1;
`,xe=i(a)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,Se=i(a)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,Ce=i(v)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,we=i(a)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${U}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${U}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${U}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,Te=(0,_.memo)(({dayIdx:e,timeIdx:t,...r})=>n(we,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),W=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${O}:hover
        )
        &
        .${O} {
        ${({theme:e})=>k(e)}
    }
`,Ee=(0,_.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,_.useCallback)(()=>{i?.(e)},[i,e]),u=(0,_.useCallback)(()=>{a?.()},[a]),d=(0,_.useCallback)(t=>{o?.(e,t)},[o,e]),f=(0,_.useCallback)(()=>{s?.(e)},[s,e]);return n(W,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,...c?{"data-ghost":!0}:{},children:e.classes.map((i,a)=>K(i,t)?n(N,{lecture:e,classIdx:a,overlapLabel:r,deleteLecture:s?f:void 0},`${a}-lecture`):null)})}),G=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${O}:hover) .${O} {
        ${({theme:e})=>k(e)}
    }
`,De=(0,_.memo)(({overlaps:e})=>n(G,{children:e.map((e,t)=>n(ce,{...e},t))}));function K(e,t){if(!e)return!1;let n=e.begin/60-B,r=e.end/60-B,{day:i}=e;return l.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var q=i.div`
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
`,Oe=(0,_.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,_.useCallback)(()=>{o?.(e)},[o,e]),u=(0,_.useCallback)(()=>{s?.()},[s]),d=(0,_.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,_.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!K(e,t))?n(q,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(I,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return K({day:c,begin:l,end:u},t)?null:n(I,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),ke=i.div`
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
`;function J({timetableItems:e,overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:o,flashItemKeys:s,onItemSelect:l,onItemHover:u,onItemLeave:f,onItemDelete:p,lectures:h=[],customBlocks:g=[],cellWidth:x,needTimeFilter:S=!0,timeFilter:C,setTimeFilter:w,needLectureInteraction:T=!0,needLectureDeletable:E=!0,deleteLecture:D,hoveredLectures:O=[],setHoveredLectures:k,hoveredCustomBlocks:ne=[],setHoveredCustomBlocks:re,selectedLectures:ie=[],onLectureSelect:ae,selectedCustomBlock:A=null,onCustomBlockSelect:j,isCustomBlockSectionOpen:M=!1,customBlockDraftTimes:oe=[],needCurrentTimeBar:N=!1,flashLectureIds:se=[]}){let{t:P}=d(),ce=_e.slice(0,i),le=(0,_.useMemo)(()=>new Set(t),[t]),F=(0,_.useMemo)(()=>e??[...h.map(e=>({kind:c.LECTURE,data:e})),...g.map(e=>({kind:c.CUSTOM,data:e}))],[e,h,g]),I=(0,_.useMemo)(()=>F.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[F]),ue=(0,_.useMemo)(()=>F.flatMap(e=>e.kind===c.CUSTOM?[e.data]:[]),[F]),L=(0,_.useMemo)(()=>ue.flatMap(e=>ee(e).map((t,n)=>({block:e,time:t,index:n}))),[ue]),R=(0,_.useMemo)(()=>o??[...ie.map(e=>({kind:c.LECTURE,data:e})),...A?[{kind:c.CUSTOM,data:A}]:[]],[o,ie,A]),z=(0,_.useMemo)(()=>R.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[R]),de=R.flatMap(e=>e.kind===c.CUSTOM?[e.data.id]:[]),fe=s?.filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1]))??se,we=(0,_.useRef)(null),W=(0,_.useRef)(null),G=(0,_.useRef)(null),q=(0,_.useRef)(!1),J=(0,_.useRef)(null),Y=(0,_.useRef)(null),X=(0,_.useRef)(null),[Ae,je]=(0,_.useState)(null),[Me,Ne]=(0,_.useState)(-1),Z=(0,_.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<B||n>me||t>=i){je(null);return}let r=(n-B)/16;je(r),Ne(t)},[i]);(0,_.useEffect)(()=>{if(!N)return;Z();let e=setInterval(Z,6e4);return window.addEventListener(`resize`,Z),()=>{clearInterval(e),window.removeEventListener(`resize`,Z)}},[N,Z]);let Pe=(0,_.useMemo)(()=>{let e=[...I,...O,...z].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[I,O,z]),Q=(0,_.useMemo)(()=>{if(!T)return[];let e=O.filter(e=>!I.some(t=>t.id===e.id)),t=z.filter(e=>!I.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[O,z,I,T]),Fe=(0,_.useMemo)(()=>{if(!T||Q.length===0)return[];let e=[],t=F.flatMap(b);for(let n of Q)for(let r of b({kind:c.LECTURE,data:n}))for(let n of t){let t=Math.max(r.begin,n.begin),i=Math.min(r.end,n.end);r.day===n.day&&t<i&&e.push({day:r.day,begin:(t/60-B)*2,end:(i/60-B)*2})}return e},[Q,F,T]),Ie=Pe.some(e=>e.classes.length===0||e.classes.some(e=>!K(e,i)))||L.some(({time:e})=>!K(e,i)),Le=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;G.current?.style.setProperty(`--hover-day`,(i+1).toString()),G.current?.style.setProperty(`--hover-start`,a.toString()),G.current?.style.setProperty(`--hover-end`,(a+1).toString()),G.current?.setAttribute(`data-is-dragging`,`true`),W.current?.setAttribute(`data-is-dragging`,`true`),q.current=!0,Y.current=[r,r+1],X.current=i,J.current=r},[]),Re=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=J.current==null?r:J.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;G.current?.style.setProperty(`--hover-start`,c.toString()),G.current?.style.setProperty(`--hover-end`,l.toString()),Y.current=[o,s+1]},[]),ze=(0,_.useCallback)(()=>{Y.current&&X.current!==null&&w?.({day:X.current,begin:(B+Y.current[0]*.5)*60,end:(B+Y.current[1]*.5)*60}),M?(G.current?.setAttribute(`data-is-dragging`,`false`),W.current?.setAttribute(`data-is-dragging`,`false`)):Y.current&&Y.current[1]-Y.current[0]>1?(G.current?.setAttribute(`data-is-dragging`,`wait`),W.current?.setAttribute(`data-is-dragging`,`wait`)):(Y.current&&Y.current[1]-Y.current[0]<=1||!C)&&(G.current?.setAttribute(`data-is-dragging`,`false`),W.current?.setAttribute(`data-is-dragging`,`false`),w?.(null)),q.current=!1,Y.current=null,X.current=null,J.current=null},[M,C,w]);(0,_.useEffect)(()=>{(!C||M&&!q.current)&&(G.current?.setAttribute(`data-is-dragging`,`false`),W.current?.setAttribute(`data-is-dragging`,`false`))},[C,M]);let Be=(0,_.useCallback)(e=>{q.current||!S||Le(e.clientX,e.clientY)},[S]),Ve=(0,_.useCallback)(e=>{!q.current||J.current===null||Re(e.clientX,e.clientY)},[Re]),He=(0,_.useCallback)(e=>{if(!q.current||J.current===null)return;let t=e.touches[0];t!=null&&Re(t.clientX,t.clientY)},[Re]),Ue=(0,_.useCallback)(e=>{T&&(k?.([e]),u?.({kind:c.LECTURE,data:e}))},[k,T]),We=(0,_.useCallback)((e,t)=>{T&&(l?l({kind:c.LECTURE,data:e},t):ae?.(e,t))},[ae,l,T]),$=(0,_.useCallback)(()=>{k?.([]),f?.(),G.current?.setAttribute(`data-is-hovering`,`false`)},[k]),Ge=(0,_.useCallback)(e=>{T&&E&&($(),p?p({kind:c.LECTURE,data:e}):D?.(e.id))},[T,E,p,D,$]),Ke=(0,_.useCallback)(e=>{T&&E&&($(),p?.({kind:c.CUSTOM,data:e}))},[T,E,p,$]),qe=(0,_.useCallback)((e,t)=>{T&&(l?l({kind:c.CUSTOM,data:e},t):j?.(e,t))},[T,j,l]),Je=(0,_.useCallback)(e=>{T&&(u?.({kind:c.CUSTOM,data:e}),re?.([e]))},[T,u]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:we,"data-hovered-lectures":T?O.map(e=>e.id).join(` `):``,"data-selected-lectures":T?z.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":T?de.join(` `):``,"data-selected-items":T?R.map(y).join(` `):``,"data-flash-custom-blocks":(s??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":fe.join(` `),"data-interaction":T,"data-lecture-deletable":E,onPointerLeave:$,onTouchEnd:$,children:r(v,{columns:`1fr`,rows:Ie?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(xe,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Ie?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${H*ve}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:ge.map((e,t)=>n(m,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${H*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(be,{columns:`repeat(${i}, ${x||`1fr`})`,rows:`${H}px repeat(${V}, 1fr)`,flow:`column`,gap:`0px ${ye}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:W,"data-is-dragging":`false`,"data-need-time-filter":S,...S?{onPointerDown:Be,onPointerMove:Ve,onPointerUp:ze,onPointerLeave:ze,onTouchMove:He,onTouchEnd:ze}:{},children:ce.map((e,t)=>r(_.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(m,{type:`Small`,color:`Text.dark`,children:P(`common.days.${e}`)})}),Array.from({length:V}).map((r,i)=>n(Te,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===V-1?`last`:``,i%2==0&&(he[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(Ce,{columns:`repeat(${i}, ${x||`1fr`})`,rows:`${H}px repeat(${V}, 1fr)`,flow:`column`,gap:`${U}px ${ye}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${H*.19999999999999996}px 0`,ref:G,"data-is-dragging":!1,children:[S&&n(te,{}),M&&oe.filter(e=>K(e,i)).map((e,t)=>n(te,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-B)*2+2} / ${(e.end/60-B)*2+2}`}},t)),I.map((e,t)=>n(Ee,{lecture:e,displayedDayCount:i,overlapLabel:le.has(e.id)?P(`friends.overlapLabel`):void 0,deleteLecture:T&&E&&(p||D)?Ge:void 0,handleLectureTileHover:Ue,handleLectureTileLeave:$,handleLectureTileSelect:We},`${e.id}-lecture-tile-${t}`)),L.filter(({time:e})=>K(e,i)).map(({block:e,time:t,index:r})=>n(pe,{block:e,time:t,displayedDayCount:i,onSelect:T&&(l||j)?qe:void 0,onDelete:T&&E&&p?Ke:void 0,onHover:T?Je:void 0},`custom-block-${e.id}-${r}`)),Q.map(e=>n(Ee,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Q.length>0&&n(De,{overlaps:Fe}),N&&Ae!==null&&n(ke,{ratio:Ae,dayIndex:Me})]})]})]}),n(Se,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Ie?` has-overflow`:``),children:r(v,{columns:`repeat(${i}, ${x||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${ye}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[L.filter(({time:e})=>!K(e,i)).map(({block:e,time:t,index:r})=>n(pe,{block:e,time:t,displayedDayCount:i,onSelect:T&&(l||j)?qe:void 0,onDelete:T&&E&&p?Ke:void 0,overflow:!0},`custom-overflow-${e.id}-${r}`)),Pe.map((e,t)=>n(Oe,{lecture:e,displayedDayCount:i,overlapLabel:le.has(e.id)&&I.some(t=>t.id===e.id)?P(`friends.overlapLabel`):void 0,isGhost:I.every(t=>t.id!==e.id),deleteLecture:T&&E&&(p||D)?Ge:void 0,handleLectureTileSelect:We,handleLectureTileHover:Ue,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Y=(0,_.memo)(J);export{y as a,b as i,w as n,x as o,ee as r,Y as t};
//# sourceMappingURL=CustomTimeTableGrid-DvBwrRI_.js.map