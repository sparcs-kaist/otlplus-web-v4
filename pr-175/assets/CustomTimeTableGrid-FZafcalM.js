(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`50715e1cd6d72e46d3614f291c02525cfeb7323a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`2aaa54e3-0302-4040-ab68-5a83fd934bcf`,e._sentryDebugIdIdentifier=`sentry-dbid-2aaa54e3-0302-4040-ab68-5a83fd934bcf`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-DiElHtoT.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-CCosB8B2.js";import{n as i,t as a}from"./FlexWrapper-D3g62ghw.js";import{i as o,n as s}from"./emotion-react.browser.esm-iLEPM4SF.js";import{C as c,E as l,M as u,P as d,T as f,j as p,k as m,w as h}from"./axios-D_6wWtoX.js";import{d as g}from"./useAPI-BccXN8XZ.js";import{t as _}from"./Icon-CYdzlHDX.js";import{t as ee}from"./useTranslation-93LfCZ1r.js";import{t as te}from"./IconButton-CWO-hCUH.js";import{t as v}from"./Close-D91Ph6l4.js";import{t as y}from"./Typography-OmQStgRT.js";import{t as b}from"./media-BB5XbrYH.js";import{t as x}from"./formatTimeblockToString-CR66qQPL.js";var S=t(e(),1),C=i.div`
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
`,w=i(a)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,T=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],E=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],D=i(a)`
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
`,O=i(a)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function ne({style:e,className:t}){return n(D,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(O,{direction:`column`,gap:0,flex:`1 1 auto`})})}var re=(0,S.memo)(ne),k=`lecture-tile`,A=e=>s`
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
`,ie=o`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,ae=i(a)`
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
        animation: ${ie} 0.3s ease-out forwards;
    }
`,j=i(w)`
    background: ${({theme:e,courseId:t})=>()=>{let n=E(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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
                ${({theme:e})=>A(e)}
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
            ${({theme:e})=>A(e)}
        }
    }

    &[data-friend-overlap] .lecture-content {
        min-width: 0;
        min-height: 0;

        ${b.tablet} {
            padding: 2px;
        }
    }
`,oe=i.div`
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

    ${b.tablet} {
        display: flex;
        flex-direction: column;

        .friend-overlap-label {
            order: -1;
            align-self: flex-end;
            font-size: ${({theme:e})=>e.fonts.Smaller.fontSize}px;
            line-height: ${({theme:e})=>e.fonts.Smaller.lineHeight}px;
        }
    }
`;function M({lecture:e,overlapLabel:t}){let i=n(y,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle});return t?r(oe,{children:[i,n(y,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):i}var N=i(a)`
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
`;function P({onDelete:e,ariaLabel:t,className:r=`lecture-delete-wrapper`}){return n(N,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(te,{"aria-label":t,styles:{padding:3},onClick:e,children:n(_,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},onClick:()=>{},children:n(v,{})})})})}function F({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o,handleLectureTileSelect:s,handleLectureTileHover:c,handleLectureTileLeave:l}){let u=e.classes[t];if(u==null)return null;let f=(0,S.useCallback)(t=>{s?.(e,t)},[s,e]),p=(0,S.useCallback)(()=>{c?.(e)},[c,e]),h=(0,S.useCallback)(()=>{l?.()},[l]);return n(ae,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:u.day+1,rowStart:u.begin/30-14,rowEnd:u.end/30-14,lectureId:e.id,"data-class-time":u.day*24*60+u.begin,onPointerDown:f,onPointerEnter:p,onPointerLeave:h,children:r(j,{itemKey:m({kind:d.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:k,"data-friend-overlap":i?!0:void 0,children:[n(a,{className:`lecture-content`,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(M,{lecture:e,overlapLabel:i}),n(y,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(y,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${u.buildingCode}) ${u.roomName}`})]})}),o&&n(P,{onDelete:()=>o(e)})]})})}var se=(0,S.memo)(F),ce=i(a)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,I=i(a)`
    border-radius: 2px;
`;function L({day:e,begin:t,end:r}){return n(ce,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(I,{direction:`column`,gap:0,flex:`1 1 auto`})})}var R=i(a)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,z=i(w)`
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=E(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lectures~="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>A(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>A(e)}
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
        animation: ${ie} 0.3s ease-out forwards;
    }

    &[data-friend-overlap] {
        ${b.tablet} {
            padding: 2px;
        }
    }
`;function B({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o}){let s=t==null?null:e.classes[t],{t:c}=ee();return r(R,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:s!=null&&T[s.day]&&s.begin!=null&&s.end!=null?r(y,{type:`Smaller`,color:`Text.light`,children:[c(`common.days.${T[s.day]}`),` `,Math.floor(s.begin/60),`:`,s.begin%60==0?`00`:`30`,` - `,Math.floor(s.end/60),`:`,s.end%60==0?`00`:`30`]}):n(y,{type:`Smaller`,color:`Text.light`,children:c(`timetable.noTimeInfo`)})}),r(z,{itemKey:m({kind:d.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:k,"data-friend-overlap":i?!0:void 0,children:[n(M,{lecture:e,overlapLabel:i}),n(y,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(y,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:s==null?``:`(${s.buildingCode}) ${s.roomName}`}),o&&n(P,{onDelete:o})]})]})}var V=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],H=`custom-block-tile`,U=e=>s`
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
`,ue=i(w)`
    background: ${({theme:e,blockId:t})=>{let n=E(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
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
                    .${H}:hover
            )
            & {
            ${({theme:e})=>U(e)}
        }
    }

    [data-flash-custom-blocks~="${({blockId:e})=>e}"] & {
        background: ${({theme:e})=>e.colors.Highlight.default};
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-custom-blocks~="${({blockId:e})=>e}"] & {
        ${({theme:e})=>U(e)}
    }
`;function W({block:e,time:t,onSelect:i,onHover:o,onLeave:s,onDelete:c,overflow:l=!1,displayedDayCount:u=5}){let{t:f}=ee(),p=V[t.day],h=`${f(`common.days.${p}`)} ${x(t.begin)}–${x(t.end)}`;return n(le,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,u-1)+1,rowStart:l?void 0:t.begin/30-14,rowEnd:l?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>i?.(e,t),onPointerEnter:()=>o?.(e),onPointerLeave:()=>s?.(),"data-custom-block-id":e.id,"data-custom-block-interaction":!!i,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${h}`,children:r(ue,{itemKey:m({kind:d.CUSTOM,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:H,role:i?`button`:void 0,tabIndex:i?0:void 0,"aria-label":i?`${e.block_name} · ${h}`:void 0,onKeyDown:i?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),i(e))}:void 0,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(y,{type:`SmallMedium`,color:`TimeTable.title`,className:`block-title`,children:e.block_name}),e.place&&n(y,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:e.place}),l&&n(y,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:h})]})}),c&&n(P,{onDelete:()=>c(e),ariaLabel:`Delete custom block: ${e.block_name}`,className:`custom-block-delete-wrapper`})]})})}var de=(0,S.memo)(W),G=8,fe=24,pe=Array.from({length:17},(e,t)=>G+t),me=pe.map(e=>(e%12||12).toString()),K=(me.length-1)*2,he=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],q=20,ge=.8,_e=5,J=1,ve=i(C)`
    z-index: 1;
`,ye=i(a)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,be=i(a)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,xe=i(C)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,Se=i(a)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${J}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${J}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${J}px solid ${({theme:e})=>e.colors.Line.darker};
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
`,Ce=(0,S.memo)(({dayIdx:e,timeIdx:t,...r})=>n(Se,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),Y=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${k}:hover
        )
        &
        .${k} {
        ${({theme:e})=>A(e)}
    }
`,we=(0,S.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,S.useCallback)(()=>{i?.(e)},[i,e]),u=(0,S.useCallback)(()=>{a?.()},[a]),d=(0,S.useCallback)(t=>{o?.(e,t)},[o,e]),f=(0,S.useCallback)(()=>{s?.(e)},[s,e]);return n(Y,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,...c?{"data-ghost":!0}:{},children:e.classes.map((i,a)=>X(i,t)?n(se,{lecture:e,classIdx:a,overlapLabel:r,deleteLecture:s?f:void 0},`${a}-lecture`):null)})}),Te=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${k}:hover) .${k} {
        ${({theme:e})=>A(e)}
    }
`,Ee=(0,S.memo)(({overlaps:e})=>n(Te,{children:e.map((e,t)=>n(L,{...e},t))}));function X(e,t){if(!e)return!1;let n=e.begin/60-G,r=e.end/60-G,{day:i}=e;return g.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var Z=i.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${k}:hover
        )
        &
        .${k} {
        ${({theme:e})=>A(e)}
    }
`,De=(0,S.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,S.useCallback)(()=>{o?.(e)},[o,e]),u=(0,S.useCallback)(()=>{s?.()},[s]),d=(0,S.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,S.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!X(e,t))?n(Z,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(B,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return X({day:c,begin:l,end:u},t)?null:n(B,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),Oe=i.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${q}px + (100% - ${q*1.2}px) *
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
`;function ke({timetableItems:e=[],overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:o=[],hoveredItems:s=[],flashItemKeys:d,onItemSelect:g,onItemHover:_,onItemLeave:te,onItemDelete:v,cellWidth:b,needTimeFilter:x=!0,timeFilter:w,setTimeFilter:T,needLectureInteraction:E=!0,needLectureDeletable:D=!0,isCustomBlockSectionOpen:O=!1,customBlockDraftTimes:ne=[],needCurrentTimeBar:k=!1}){let{t:A}=ee(),ie=he.slice(0,i),ae=(0,S.useMemo)(()=>new Set(t),[t]),j=(0,S.useMemo)(()=>h(e),[e]),oe=(0,S.useMemo)(()=>c(e),[e]),M=(0,S.useMemo)(()=>oe.flatMap(e=>f(e).map((t,n)=>({block:e,time:t,index:n}))),[oe]),N=(0,S.useMemo)(()=>h(o),[o]),P=(0,S.useMemo)(()=>c(o).map(e=>e.id),[o]),F=(0,S.useMemo)(()=>h(s),[s]),se=(d??[]).filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1])),ce=(0,S.useRef)(null),I=(0,S.useRef)(null),L=(0,S.useRef)(null),R=(0,S.useRef)(!1),z=(0,S.useRef)(null),B=(0,S.useRef)(null),V=(0,S.useRef)(null),[H,U]=(0,S.useState)(null),[le,ue]=(0,S.useState)(-1),W=(0,S.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<G||n>fe||t>=i){U(null);return}let r=(n-G)/16;U(r),ue(t)},[i]);(0,S.useEffect)(()=>{if(!k)return;W();let e=setInterval(W,6e4);return window.addEventListener(`resize`,W),()=>{clearInterval(e),window.removeEventListener(`resize`,W)}},[k,W]);let Se=(0,S.useMemo)(()=>{let e=[...j,...F,...N].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[j,F,N]),Y=(0,S.useMemo)(()=>{if(!E)return[];let e=F.filter(e=>!j.some(t=>t.id===e.id)),t=N.filter(e=>!j.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[F,N,j,E]),Te=(0,S.useMemo)(()=>{if(!E||Y.length===0)return[];let t=[],n=e.flatMap(l);for(let e of Y)for(let r of l(u(e)))for(let e of n){let n=Math.max(r.begin,e.begin),i=Math.min(r.end,e.end);r.day===e.day&&n<i&&t.push({day:r.day,begin:(n/60-G)*2,end:(i/60-G)*2})}return t},[Y,e,E]),Z=Se.some(e=>e.classes.length===0||e.classes.some(e=>!X(e,i)))||M.some(({time:e})=>!X(e,i)),ke=(0,S.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;L.current?.style.setProperty(`--hover-day`,(i+1).toString()),L.current?.style.setProperty(`--hover-start`,a.toString()),L.current?.style.setProperty(`--hover-end`,(a+1).toString()),L.current?.setAttribute(`data-is-dragging`,`true`),I.current?.setAttribute(`data-is-dragging`,`true`),R.current=!0,B.current=[r,r+1],V.current=i,z.current=r},[]),Q=(0,S.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=z.current==null?r:z.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;L.current?.style.setProperty(`--hover-start`,c.toString()),L.current?.style.setProperty(`--hover-end`,l.toString()),B.current=[o,s+1]},[]),Ae=(0,S.useCallback)(()=>{let e=B.current!==null&&B.current[1]-B.current[0]>1;e&&B.current&&V.current!==null&&T?.({day:V.current,begin:(G+B.current[0]*.5)*60,end:(G+B.current[1]*.5)*60}),O?(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`)):e?(L.current?.setAttribute(`data-is-dragging`,`wait`),I.current?.setAttribute(`data-is-dragging`,`wait`)):(B.current&&B.current[1]-B.current[0]<=1||!w)&&(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`),T?.(null)),R.current=!1,B.current=null,V.current=null,z.current=null},[O,w,T]);(0,S.useEffect)(()=>{(!w||O&&!R.current)&&(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`))},[w,O]);let je=(0,S.useCallback)(e=>{R.current||!x||ke(e.clientX,e.clientY)},[x]),Me=(0,S.useCallback)(e=>{!R.current||z.current===null||Q(e.clientX,e.clientY)},[Q]),Ne=(0,S.useCallback)(e=>{if(!R.current||z.current===null)return;let t=e.touches[0];t!=null&&Q(t.clientX,t.clientY)},[Q]),Pe=(0,S.useCallback)(e=>{E&&_?.(u(e))},[_,E]),Fe=(0,S.useCallback)((e,t)=>{E&&g?.(u(e),t)},[g,E]),$=(0,S.useCallback)(()=>{te?.(),L.current?.setAttribute(`data-is-hovering`,`false`)},[te]),Ie=(0,S.useCallback)(e=>{E&&D&&($(),v?.(u(e)))},[E,D,v,$]),Le=(0,S.useCallback)(e=>{E&&D&&($(),v?.(p(e)))},[E,D,v,$]),Re=(0,S.useCallback)((e,t)=>{E&&g?.(p(e),t)},[E,g]),ze=(0,S.useCallback)(e=>{E&&_?.(p(e))},[E,_]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:ce,"data-hovered-lectures":E?F.map(e=>e.id).join(` `):``,"data-selected-lectures":E?N.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":E?P.join(` `):``,"data-selected-items":E?o.map(m).join(` `):``,"data-flash-custom-blocks":(d??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":se.join(` `),"data-interaction":E,"data-lecture-deletable":D,onPointerLeave:$,onTouchEnd:$,children:r(C,{columns:`1fr`,rows:Z?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(ye,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Z?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${q*ge}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:me.map((e,t)=>n(y,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${q*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(ve,{columns:`repeat(${i}, ${b||`1fr`})`,rows:`${q}px repeat(${K}, 1fr)`,flow:`column`,gap:`0px ${_e}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:I,"data-is-dragging":`false`,"data-need-time-filter":x,...x?{onPointerDown:je,onPointerMove:Me,onPointerUp:Ae,onPointerLeave:Ae,onTouchMove:Ne,onTouchEnd:Ae}:{},children:ie.map((e,t)=>r(S.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(y,{type:`Small`,color:`Text.dark`,children:A(`common.days.${e}`)})}),Array.from({length:K}).map((r,i)=>n(Ce,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===K-1?`last`:``,i%2==0&&(pe[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(xe,{columns:`repeat(${i}, ${b||`1fr`})`,rows:`${q}px repeat(${K}, 1fr)`,flow:`column`,gap:`${J}px ${_e}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${q*.19999999999999996}px 0`,ref:L,"data-is-dragging":!1,children:[x&&n(re,{}),O&&ne.filter(e=>X(e,i)).map((e,t)=>n(re,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-G)*2+2} / ${(e.end/60-G)*2+2}`}},t)),j.map((e,t)=>n(we,{lecture:e,displayedDayCount:i,overlapLabel:ae.has(e.id)?A(`friends.overlapLabel`):void 0,deleteLecture:E&&D&&v?Ie:void 0,handleLectureTileHover:Pe,handleLectureTileLeave:$,handleLectureTileSelect:Fe},`${e.id}-lecture-tile-${t}`)),M.filter(({time:e})=>X(e,i)).map(({block:e,time:t,index:r})=>n(de,{block:e,time:t,displayedDayCount:i,onSelect:E&&g?Re:void 0,onDelete:E&&D&&v?Le:void 0,onHover:E?ze:void 0,onLeave:E?$:void 0},`custom-block-${e.id}-${r}`)),Y.map(e=>n(we,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Y.length>0&&n(Ee,{overlaps:Te}),k&&H!==null&&n(Oe,{ratio:H,dayIndex:le})]})]})]}),n(be,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Z?` has-overflow`:``),children:r(C,{columns:`repeat(${i}, ${b||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${_e}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[M.filter(({time:e})=>!X(e,i)).map(({block:e,time:t,index:r})=>n(de,{block:e,time:t,displayedDayCount:i,onSelect:E&&g?Re:void 0,onDelete:E&&D&&v?Le:void 0,onHover:E?ze:void 0,onLeave:E?$:void 0,overflow:!0},`custom-overflow-${e.id}-${r}`)),Se.map((e,t)=>n(De,{lecture:e,displayedDayCount:i,overlapLabel:ae.has(e.id)&&j.some(t=>t.id===e.id)?A(`friends.overlapLabel`):void 0,isGhost:j.every(t=>t.id!==e.id),deleteLecture:E&&D&&v?Ie:void 0,handleLectureTileSelect:Fe,handleLectureTileHover:Pe,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Q=(0,S.memo)(ke);export{E as n,Q as t};
//# sourceMappingURL=CustomTimeTableGrid-FZafcalM.js.map