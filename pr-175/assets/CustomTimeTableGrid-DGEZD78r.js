(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`bc26ae1804ccef3661ed7f8b564715970ed466d4`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`5f4c6650-4eae-4ff9-91c2-19223de932ba`,e._sentryDebugIdIdentifier=`sentry-dbid-5f4c6650-4eae-4ff9-91c2-19223de932ba`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-QXX27JJt.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-B-4JOL7K.js";import{n as i,t as a}from"./FlexWrapper-QngSO1zh.js";import{i as o,n as s}from"./emotion-react.browser.esm-BnL_r29H.js";import{S as c}from"./axios-D_aiN4gF.js";import{d as l}from"./useAPI-jfGZz6VQ.js";import{t as u}from"./Icon-Cm_q_6cx.js";import{t as d}from"./useTranslation-DwokiIuI.js";import{t as f}from"./IconButton-vLLH99fW.js";import{t as p}from"./Close-C_g9YO1f.js";import{t as m}from"./Typography-CSc_pdH9.js";import{t as h}from"./media-2Hx7bxc5.js";import{t as g}from"./formatTimeblockToString-CzHvtt0I.js";var _=t(e(),1),v=i.div`
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
`,A=o`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,j=i(a)`
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
`,M=i(S)`
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
`,ne=i.div`
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
`;function N({lecture:e,overlapLabel:t}){let i=n(m,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle});return t?r(ne,{children:[i,n(m,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):i}var re=i(a)`
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
`;function P({onDelete:e,ariaLabel:t,className:r=`lecture-delete-wrapper`}){return n(re,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(f,{"aria-label":t,styles:{padding:3},onClick:e,children:n(u,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(p,{})})})})}function ie({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o,handleLectureTileSelect:s,handleLectureTileHover:l,handleLectureTileLeave:u}){let d=e.classes[t];if(d==null)return null;let f=(0,_.useCallback)(t=>{s?.(e,t)},[s,e]),p=(0,_.useCallback)(()=>{l?.(e)},[l,e]),h=(0,_.useCallback)(()=>{u?.()},[u]);return n(j,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:d.day+1,rowStart:d.begin/30-14,rowEnd:d.end/30-14,lectureId:e.id,"data-class-time":d.day*24*60+d.begin,onPointerDown:f,onPointerEnter:p,onPointerLeave:h,children:r(M,{itemKey:y({kind:c.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:O,"data-friend-overlap":i?!0:void 0,children:[n(a,{className:`lecture-content`,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(N,{lecture:e,overlapLabel:i}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${d.buildingCode}) ${d.roomName}`})]})}),o&&n(P,{onDelete:()=>o(e)})]})})}var ae=(0,_.memo)(ie),F=i(a)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,I=i(a)`
    border-radius: 2px;
`;function oe({day:e,begin:t,end:r}){return n(F,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(I,{direction:`column`,gap:0,flex:`1 1 auto`})})}var L=i(a)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,R=i(S)`
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
        animation: ${A} 0.3s ease-out forwards;
    }

    &[data-friend-overlap] {
        ${h.tablet} {
            padding: 2px;
        }
    }
`;function z({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o}){let s=t==null?null:e.classes[t],{t:l}=d();return r(L,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:s!=null&&C[s.day]&&s.begin!=null&&s.end!=null?r(m,{type:`Smaller`,color:`Text.light`,children:[l(`common.days.${C[s.day]}`),` `,Math.floor(s.begin/60),`:`,s.begin%60==0?`00`:`30`,` - `,Math.floor(s.end/60),`:`,s.end%60==0?`00`:`30`]}):n(m,{type:`Smaller`,color:`Text.light`,children:l(`timetable.noTimeInfo`)})}),r(R,{itemKey:y({kind:c.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:O,"data-friend-overlap":i?!0:void 0,children:[n(N,{lecture:e,overlapLabel:i}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(m,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:s==null?``:`(${s.buildingCode}) ${s.roomName}`}),o&&n(P,{onDelete:o})]})]})}var se=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],ce=`custom-block-tile`,le=e=>s`
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
`,B=i(a)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }
`,V=i(S)`
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
                    .${ce}:hover
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
`;function H({block:e,time:t,onSelect:i,onDelete:o,overflow:s=!1,displayedDayCount:l=5}){let{t:u}=d(),f=se[t.day],p=`${u(`common.days.${f}`)} ${g(t.begin)}–${g(t.end)}`;return n(B,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,l-1)+1,rowStart:s?void 0:t.begin/30-14,rowEnd:s?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>i?.(e,t),"data-custom-block-id":e.id,"data-custom-block-interaction":!!i,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${p}`,children:r(V,{itemKey:y({kind:c.CUSTOM,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:ce,role:i?`button`:void 0,tabIndex:i?0:void 0,"aria-label":i?`${e.block_name} · ${p}`:void 0,onKeyDown:i?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),i(e))}:void 0,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(m,{type:`SmallMedium`,color:`TimeTable.title`,className:`block-title`,children:e.block_name}),e.place&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:e.place}),s&&n(m,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:p})]})}),o&&n(P,{onDelete:()=>o(e),ariaLabel:`Delete custom block: ${e.block_name}`,className:`custom-block-delete-wrapper`})]})})}var ue=(0,_.memo)(H),U=8,de=24,fe=Array.from({length:17},(e,t)=>U+t),pe=fe.map(e=>(e%12||12).toString()),W=(pe.length-1)*2,me=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],G=20,he=.8,ge=5,K=1,_e=i(v)`
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
`,be=i(v)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,q=i(a)`
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
`,xe=(0,_.memo)(({dayIdx:e,timeIdx:t,...r})=>n(q,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),J=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${O}:hover
        )
        &
        .${O} {
        ${({theme:e})=>k(e)}
    }
`,Se=(0,_.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,_.useCallback)(()=>{i?.(e)},[i,e]),u=(0,_.useCallback)(()=>{a?.()},[a]),d=(0,_.useCallback)(t=>{o?.(e,t)},[o,e]),f=(0,_.useCallback)(()=>{s?.(e)},[s,e]);return n(J,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,...c?{"data-ghost":!0}:{},children:e.classes.map((i,a)=>X(i,t)?n(ae,{lecture:e,classIdx:a,overlapLabel:r,deleteLecture:s?f:void 0},`${a}-lecture`):null)})}),Y=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${O}:hover) .${O} {
        ${({theme:e})=>k(e)}
    }
`,Ce=(0,_.memo)(({overlaps:e})=>n(Y,{children:e.map((e,t)=>n(oe,{...e},t))}));function X(e,t){if(!e)return!1;let n=e.begin/60-U,r=e.end/60-U,{day:i}=e;return l.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var we=i.div`
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
`,Te=(0,_.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,_.useCallback)(()=>{o?.(e)},[o,e]),u=(0,_.useCallback)(()=>{s?.()},[s]),d=(0,_.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,_.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!X(e,t))?n(we,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(z,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return X({day:c,begin:l,end:u},t)?null:n(z,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),Ee=i.div`
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
`;function De({timetableItems:e,overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:o,flashItemKeys:s,onItemSelect:l,onItemDelete:u,lectures:f=[],customBlocks:p=[],cellWidth:h,needTimeFilter:g=!0,timeFilter:x,setTimeFilter:S,needLectureInteraction:C=!0,needLectureDeletable:w=!0,deleteLecture:T,hoveredLectures:E=[],setHoveredLectures:D,selectedLectures:O=[],onLectureSelect:k,selectedCustomBlock:A=null,onCustomBlockSelect:j,isCustomBlockSectionOpen:M=!1,customBlockDraftTimes:ne=[],needCurrentTimeBar:N=!1,flashLectureIds:re=[]}){let{t:P}=d(),ie=me.slice(0,i),ae=(0,_.useMemo)(()=>new Set(t),[t]),F=(0,_.useMemo)(()=>e??[...f.map(e=>({kind:c.LECTURE,data:e})),...p.map(e=>({kind:c.CUSTOM,data:e}))],[e,f,p]),I=(0,_.useMemo)(()=>F.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[F]),oe=(0,_.useMemo)(()=>F.flatMap(e=>e.kind===c.CUSTOM?[e.data]:[]),[F]),L=(0,_.useMemo)(()=>oe.flatMap(e=>ee(e).map((t,n)=>({block:e,time:t,index:n}))),[oe]),R=(0,_.useMemo)(()=>o??[...O.map(e=>({kind:c.LECTURE,data:e})),...A?[{kind:c.CUSTOM,data:A}]:[]],[o,O,A]),z=(0,_.useMemo)(()=>R.flatMap(e=>e.kind===c.LECTURE?[e.data]:[]),[R]),se=R.flatMap(e=>e.kind===c.CUSTOM?[e.data.id]:[]),ce=s?.filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1]))??re,le=(0,_.useRef)(null),B=(0,_.useRef)(null),V=(0,_.useRef)(null),H=(0,_.useRef)(!1),q=(0,_.useRef)(null),J=(0,_.useRef)(null),Y=(0,_.useRef)(null),[we,De]=(0,_.useState)(null),[Oe,ke]=(0,_.useState)(-1),Z=(0,_.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<U||n>de||t>=i){De(null);return}let r=(n-U)/16;De(r),ke(t)},[i]);(0,_.useEffect)(()=>{if(!N)return;Z();let e=setInterval(Z,6e4);return window.addEventListener(`resize`,Z),()=>{clearInterval(e),window.removeEventListener(`resize`,Z)}},[N,Z]);let Ae=(0,_.useMemo)(()=>{let e=[...I,...E,...z].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[I,E,z]),Q=(0,_.useMemo)(()=>{if(!C)return[];let e=E.filter(e=>!I.some(t=>t.id===e.id)),t=z.filter(e=>!I.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[E,z,I,C]),je=(0,_.useMemo)(()=>{if(!C||Q.length===0)return[];let e=[],t=F.flatMap(b);for(let n of Q)for(let r of b({kind:c.LECTURE,data:n}))for(let n of t){let t=Math.max(r.begin,n.begin),i=Math.min(r.end,n.end);r.day===n.day&&t<i&&e.push({day:r.day,begin:(t/60-U)*2,end:(i/60-U)*2})}return e},[Q,F,C]),Me=Ae.some(e=>e.classes.length===0||e.classes.some(e=>!X(e,i)))||L.some(({time:e})=>!X(e,i)),Ne=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;V.current?.style.setProperty(`--hover-day`,(i+1).toString()),V.current?.style.setProperty(`--hover-start`,a.toString()),V.current?.style.setProperty(`--hover-end`,(a+1).toString()),V.current?.setAttribute(`data-is-dragging`,`true`),B.current?.setAttribute(`data-is-dragging`,`true`),H.current=!0,J.current=[r,r+1],Y.current=i,q.current=r},[]),Pe=(0,_.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=q.current==null?r:q.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;V.current?.style.setProperty(`--hover-start`,c.toString()),V.current?.style.setProperty(`--hover-end`,l.toString()),J.current=[o,s+1]},[]),Fe=(0,_.useCallback)(()=>{J.current&&Y.current!==null&&S?.({day:Y.current,begin:(U+J.current[0]*.5)*60,end:(U+J.current[1]*.5)*60}),M?(V.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`)):J.current&&J.current[1]-J.current[0]>1?(V.current?.setAttribute(`data-is-dragging`,`wait`),B.current?.setAttribute(`data-is-dragging`,`wait`)):(J.current&&J.current[1]-J.current[0]<=1||!x)&&(V.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`),S?.(null)),H.current=!1,J.current=null,Y.current=null,q.current=null},[M,x,S]);(0,_.useEffect)(()=>{(!x||M&&!H.current)&&(V.current?.setAttribute(`data-is-dragging`,`false`),B.current?.setAttribute(`data-is-dragging`,`false`))},[x,M]);let Ie=(0,_.useCallback)(e=>{H.current||!g||Ne(e.clientX,e.clientY)},[g]),Le=(0,_.useCallback)(e=>{!H.current||q.current===null||Pe(e.clientX,e.clientY)},[Pe]),Re=(0,_.useCallback)(e=>{if(!H.current||q.current===null)return;let t=e.touches[0];t!=null&&Pe(t.clientX,t.clientY)},[Pe]),ze=(0,_.useCallback)(e=>{C&&D?.([e])},[D,C]),Be=(0,_.useCallback)((e,t)=>{C&&(l?l({kind:c.LECTURE,data:e},t):k?.(e,t))},[k,l,C]),$=(0,_.useCallback)(()=>{D?.([]),V.current?.setAttribute(`data-is-hovering`,`false`)},[D]),Ve=(0,_.useCallback)(e=>{C&&w&&($(),u?u({kind:c.LECTURE,data:e}):T?.(e.id))},[C,w,u,T,$]),He=(0,_.useCallback)(e=>{C&&w&&($(),u?.({kind:c.CUSTOM,data:e}))},[C,w,u,$]),Ue=(0,_.useCallback)((e,t)=>{C&&(l?l({kind:c.CUSTOM,data:e},t):j?.(e,t))},[C,j,l]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:le,"data-hovered-lectures":C?E.map(e=>e.id).join(` `):``,"data-selected-lectures":C?z.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":C?se.join(` `):``,"data-selected-items":C?R.map(y).join(` `):``,"data-flash-custom-blocks":(s??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ce.join(` `),"data-interaction":C,"data-lecture-deletable":w,onPointerLeave:$,onTouchEnd:$,children:r(v,{columns:`1fr`,rows:Me?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(ve,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Me?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${G*he}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:pe.map((e,t)=>n(m,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${G*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(_e,{columns:`repeat(${i}, ${h||`1fr`})`,rows:`${G}px repeat(${W}, 1fr)`,flow:`column`,gap:`0px ${ge}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:B,"data-is-dragging":`false`,"data-need-time-filter":g,...g?{onPointerDown:Ie,onPointerMove:Le,onPointerUp:Fe,onPointerLeave:Fe,onTouchMove:Re,onTouchEnd:Fe}:{},children:ie.map((e,t)=>r(_.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(m,{type:`Small`,color:`Text.dark`,children:P(`common.days.${e}`)})}),Array.from({length:W}).map((r,i)=>n(xe,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===W-1?`last`:``,i%2==0&&(fe[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(be,{columns:`repeat(${i}, ${h||`1fr`})`,rows:`${G}px repeat(${W}, 1fr)`,flow:`column`,gap:`${K}px ${ge}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${G*.19999999999999996}px 0`,ref:V,"data-is-dragging":!1,children:[g&&n(te,{}),M&&ne.filter(e=>X(e,i)).map((e,t)=>n(te,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-U)*2+2} / ${(e.end/60-U)*2+2}`}},t)),I.map((e,t)=>n(Se,{lecture:e,displayedDayCount:i,overlapLabel:ae.has(e.id)?P(`friends.overlapLabel`):void 0,deleteLecture:C&&w&&(u||T)?Ve:void 0,handleLectureTileHover:ze,handleLectureTileLeave:$,handleLectureTileSelect:Be},`${e.id}-lecture-tile-${t}`)),L.filter(({time:e})=>X(e,i)).map(({block:e,time:t,index:r})=>n(ue,{block:e,time:t,displayedDayCount:i,onSelect:C&&(l||j)?Ue:void 0,onDelete:C&&w&&u?He:void 0},`custom-block-${e.id}-${r}`)),Q.map(e=>n(Se,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Q.length>0&&n(Ce,{overlaps:je}),N&&we!==null&&n(Ee,{ratio:we,dayIndex:Oe})]})]})]}),n(ye,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Me?` has-overflow`:``),children:r(v,{columns:`repeat(${i}, ${h||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${ge}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[L.filter(({time:e})=>!X(e,i)).map(({block:e,time:t,index:r})=>n(ue,{block:e,time:t,displayedDayCount:i,onSelect:C&&(l||j)?Ue:void 0,onDelete:C&&w&&u?He:void 0,overflow:!0},`custom-overflow-${e.id}-${r}`)),Ae.map((e,t)=>n(Te,{lecture:e,displayedDayCount:i,overlapLabel:ae.has(e.id)&&I.some(t=>t.id===e.id)?P(`friends.overlapLabel`):void 0,isGhost:I.every(t=>t.id!==e.id),deleteLecture:C&&w&&(u||T)?Ve:void 0,handleLectureTileSelect:Be,handleLectureTileHover:ze,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Oe=(0,_.memo)(De);export{y as a,b as i,w as n,x as o,ee as r,Oe as t};
//# sourceMappingURL=CustomTimeTableGrid-DGEZD78r.js.map