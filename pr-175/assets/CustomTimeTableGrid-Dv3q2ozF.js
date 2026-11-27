(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`8bd2e28165639ab8e07ac600798b6dc23ba50f65`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`9c1b9c48-ab1e-43e2-9c07-5077c20ae79b`,e._sentryDebugIdIdentifier=`sentry-dbid-9c1b9c48-ab1e-43e2-9c07-5077c20ae79b`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BMFwLNBY.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-DLl3RN7b.js";import{n as i,t as a}from"./FlexWrapper-mA4z3Ths.js";import{i as o,n as s}from"./emotion-react.browser.esm-C51kMu1J.js";import{A as c,C as l,E as u,F as d,M as f,N as p,T as ee,w as m}from"./axios-6Oe6oc0l.js";import{d as h}from"./useAPI-DZ41y4I0.js";import{t as g}from"./Icon-BN9QFw3S.js";import{t as te}from"./useTranslation-BiO_gugS.js";import{t as ne}from"./IconButton-Bk-wvYvN.js";import{t as _}from"./Close-YGFMCYk-.js";import{t as v}from"./Typography-XOAurGEs.js";import{t as y}from"./media-YLqhAOI1.js";import{t as b}from"./formatTimeblockToString-CfvDWnui.js";var x=t(e()),S=i.div`
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
`,C=i(a)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,w=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],T=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],E=i(a)`
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
`,D=i(a)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function re({style:e,className:t}){return n(E,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(D,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ie=(0,x.memo)(re),O=`lecture-tile`,k=e=>s`
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
        animation: ${A} 0.3s ease-out forwards;
    }
`,j=i(C)`
    background: ${({theme:e,courseId:t})=>()=>{let n=T(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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

        ${y.tablet} {
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

    ${y.tablet} {
        display: flex;
        flex-direction: column;

        .friend-overlap-label {
            order: -1;
            align-self: flex-end;
            font-size: ${({theme:e})=>e.fonts.Smaller.fontSize}px;
            line-height: ${({theme:e})=>e.fonts.Smaller.lineHeight}px;
        }
    }
`;function M({lecture:e,overlapLabel:t}){let i=n(v,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle});return t?r(oe,{children:[i,n(v,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):i}var N=i(a)`
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
`;function P({onDelete:e,ariaLabel:t,className:r=`lecture-delete-wrapper`}){return n(N,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(ne,{"aria-label":t,styles:{padding:3},onClick:e,children:n(g,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},onClick:()=>{},children:n(_,{})})})})}function F({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o,handleLectureTileSelect:s,handleLectureTileHover:l,handleLectureTileLeave:u}){let f=e.classes[t];if(f==null)return null;let p=(0,x.useCallback)(t=>{s?.(e,t)},[s,e]),ee=(0,x.useCallback)(()=>{l?.(e)},[l,e]),m=(0,x.useCallback)(()=>{u?.()},[u]);return n(ae,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:f.day+1,rowStart:f.begin/30-14,rowEnd:f.end/30-14,lectureId:e.id,"data-class-time":f.day*24*60+f.begin,onPointerDown:p,onPointerEnter:ee,onPointerLeave:m,children:r(j,{itemKey:c({kind:d.LECTURE,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:O,"data-friend-overlap":i?!0:void 0,children:[n(a,{className:`lecture-content`,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(M,{lecture:e,overlapLabel:i}),n(v,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(v,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${f.buildingCode}) ${f.roomName}`})]})}),o&&n(P,{onDelete:()=>o(e)})]})})}var se=(0,x.memo)(F),ce=i(a)`
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
`,z=i(C)`
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=T(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

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
        ${y.tablet} {
            padding: 2px;
        }
    }
`;function B({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:o}){let s=t==null?null:e.classes[t],{t:l}=te();return r(R,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(a,{direction:`column`,gap:0,align:`center`,children:s!=null&&w[s.day]&&s.begin!=null&&s.end!=null?r(v,{type:`Smaller`,color:`Text.light`,children:[l(`common.days.${w[s.day]}`),` `,Math.floor(s.begin/60),`:`,s.begin%60==0?`00`:`30`,` - `,Math.floor(s.end/60),`:`,s.end%60==0?`00`:`30`]}):n(v,{type:`Smaller`,color:`Text.light`,children:l(`timetable.noTimeInfo`)})}),r(z,{itemKey:c({kind:d.LECTURE,data:e}),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:O,"data-friend-overlap":i?!0:void 0,children:[n(M,{lecture:e,overlapLabel:i}),n(v,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(v,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:s==null?``:`(${s.buildingCode}) ${s.roomName}`}),o&&n(P,{onDelete:o})]})]})}var V=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],H=`custom-block-tile`,U=e=>s`
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
`,ue=i(C)`
    background: ${({theme:e,blockId:t})=>{let n=T(e.colors.Tile.TimeTable.default);return n[(t*3+7)%n.length]}};
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
`;function W({block:e,time:t,onSelect:i,onHover:o,onLeave:s,onDelete:l,overflow:u=!1,displayedDayCount:f=5}){let{t:p}=te(),ee=V[t.day],m=`${p(`common.days.${ee}`)} ${b(t.begin)}–${b(t.end)}`;return n(le,{direction:`column`,gap:0,padding:`1px 0`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,f-1)+1,rowStart:u?void 0:t.begin/30-14,rowEnd:u?void 0:t.end/30-14,blockId:e.id,onPointerDown:t=>i?.(e,t),onPointerEnter:()=>o?.(e),onPointerLeave:()=>s?.(),"data-custom-block-id":e.id,"data-custom-block-interaction":!!i,"data-class-time":t.day*1440+t.begin,title:`${e.block_name} · ${m}`,children:r(ue,{itemKey:c({kind:d.CUSTOM,data:e}),direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,blockId:e.id,className:H,role:i?`button`:void 0,tabIndex:i?0:void 0,"aria-label":i?`${e.block_name} · ${m}`:void 0,onKeyDown:i?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),i(e))}:void 0,children:[n(a,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(a,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(v,{type:`SmallMedium`,color:`TimeTable.title`,className:`block-title`,children:e.block_name}),e.place&&n(v,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:e.place}),u&&n(v,{type:`Small`,color:`TimeTable.detail`,className:`block-info`,children:m})]})}),l&&n(P,{onDelete:()=>l(e),ariaLabel:`Delete custom block: ${e.block_name}`,className:`custom-block-delete-wrapper`})]})})}var de=(0,x.memo)(W),G=8,fe=24,pe=Array.from({length:17},(e,t)=>G+t),me=pe.map(e=>(e%12||12).toString()),K=(me.length-1)*2,he=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],q=20,ge=.8,_e=5,J=1,ve=i(S)`
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
`,xe=i(S)`
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
`,Ce=(0,x.memo)(({dayIdx:e,timeIdx:t,...r})=>n(Se,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(a,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),Y=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${O}:hover
        )
        &
        .${O} {
        ${({theme:e})=>k(e)}
    }
`,we=(0,x.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,x.useCallback)(()=>{i?.(e)},[i,e]),u=(0,x.useCallback)(()=>{a?.()},[a]),d=(0,x.useCallback)(t=>{o?.(e,t)},[o,e]),f=(0,x.useCallback)(()=>{s?.(e)},[s,e]);return n(Y,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,...c?{"data-ghost":!0}:{},children:e.classes.map((i,a)=>X(i,t)?n(se,{lecture:e,classIdx:a,overlapLabel:r,deleteLecture:s?f:void 0},`${a}-lecture`):null)})}),Te=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${O}:hover) .${O} {
        ${({theme:e})=>k(e)}
    }
`,Ee=(0,x.memo)(({overlaps:e})=>n(Te,{children:e.map((e,t)=>n(L,{...e},t))}));function X(e,t){if(!e)return!1;let n=e.begin/60-G,r=e.end/60-G,{day:i}=e;return h.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var Z=i.div`
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
`,De=(0,x.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,x.useCallback)(()=>{o?.(e)},[o,e]),u=(0,x.useCallback)(()=>{s?.()},[s]),d=(0,x.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,x.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!X(e,t))?n(Z,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(B,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return X({day:c,begin:l,end:u},t)?null:n(B,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),Oe=i.div`
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
`;function ke({timetableItems:e=[],overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:o=[],hoveredItems:s=[],flashItemKeys:d,onItemSelect:h,onItemHover:g,onItemLeave:ne,onItemDelete:_,cellWidth:y,needTimeFilter:b=!0,timeFilter:C,setTimeFilter:w,needLectureInteraction:T=!0,needLectureDeletable:E=!0,isCustomBlockSectionOpen:D=!1,customBlockDraftTimes:re=[],needCurrentTimeBar:O=!1}){let{t:k}=te(),A=he.slice(0,i),ae=(0,x.useMemo)(()=>new Set(t),[t]),j=(0,x.useMemo)(()=>m(e),[e]),oe=(0,x.useMemo)(()=>l(e),[e]),M=(0,x.useMemo)(()=>oe.flatMap(e=>ee(e).map((t,n)=>({block:e,time:t,index:n}))),[oe]),N=(0,x.useMemo)(()=>m(o),[o]),P=(0,x.useMemo)(()=>l(o).map(e=>e.id),[o]),F=(0,x.useMemo)(()=>m(s),[s]),se=(d??[]).filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1])),ce=(0,x.useRef)(null),I=(0,x.useRef)(null),L=(0,x.useRef)(null),R=(0,x.useRef)(!1),z=(0,x.useRef)(null),B=(0,x.useRef)(null),V=(0,x.useRef)(null),[H,U]=(0,x.useState)(null),[le,ue]=(0,x.useState)(-1),W=(0,x.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<G||n>fe||t>=i){U(null);return}let r=(n-G)/16;U(r),ue(t)},[i]);(0,x.useEffect)(()=>{if(!O)return;W();let e=setInterval(W,6e4);return window.addEventListener(`resize`,W),()=>{clearInterval(e),window.removeEventListener(`resize`,W)}},[O,W]);let Se=(0,x.useMemo)(()=>{let e=[...j,...F,...N].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[j,F,N]),Y=(0,x.useMemo)(()=>{if(!T)return[];let e=F.filter(e=>!j.some(t=>t.id===e.id)),t=N.filter(e=>!j.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[F,N,j,T]),Te=(0,x.useMemo)(()=>{if(!T||Y.length===0)return[];let t=[],n=e.flatMap(u);for(let e of Y)for(let r of u(p(e)))for(let e of n){let n=Math.max(r.begin,e.begin),i=Math.min(r.end,e.end);r.day===e.day&&n<i&&t.push({day:r.day,begin:(n/60-G)*2,end:(i/60-G)*2})}return t},[Y,e,T]),Z=Se.some(e=>e.classes.length===0||e.classes.some(e=>!X(e,i)))||M.some(({time:e})=>!X(e,i)),ke=(0,x.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;L.current?.style.setProperty(`--hover-day`,(i+1).toString()),L.current?.style.setProperty(`--hover-start`,a.toString()),L.current?.style.setProperty(`--hover-end`,(a+1).toString()),L.current?.setAttribute(`data-is-dragging`,`true`),I.current?.setAttribute(`data-is-dragging`,`true`),R.current=!0,B.current=[r,r+1],V.current=i,z.current=r},[]),Q=(0,x.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=z.current==null?r:z.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;L.current?.style.setProperty(`--hover-start`,c.toString()),L.current?.style.setProperty(`--hover-end`,l.toString()),B.current=[o,s+1]},[]),Ae=(0,x.useCallback)(()=>{let e=B.current!==null&&B.current[1]-B.current[0]>1;e&&B.current&&V.current!==null&&w?.({day:V.current,begin:(G+B.current[0]*.5)*60,end:(G+B.current[1]*.5)*60}),D?(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`)):e?(L.current?.setAttribute(`data-is-dragging`,`wait`),I.current?.setAttribute(`data-is-dragging`,`wait`)):(B.current&&B.current[1]-B.current[0]<=1||!C)&&(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`),w?.(null)),R.current=!1,B.current=null,V.current=null,z.current=null},[D,C,w]);(0,x.useEffect)(()=>{(!C||D&&!R.current)&&(L.current?.setAttribute(`data-is-dragging`,`false`),I.current?.setAttribute(`data-is-dragging`,`false`))},[C,D]);let je=(0,x.useCallback)(e=>{R.current||!b||ke(e.clientX,e.clientY)},[b]),Me=(0,x.useCallback)(e=>{!R.current||z.current===null||Q(e.clientX,e.clientY)},[Q]),Ne=(0,x.useCallback)(e=>{if(!R.current||z.current===null)return;let t=e.touches[0];t!=null&&Q(t.clientX,t.clientY)},[Q]),Pe=(0,x.useCallback)(e=>{T&&g?.(p(e))},[g,T]),Fe=(0,x.useCallback)((e,t)=>{T&&h?.(p(e),t)},[h,T]),$=(0,x.useCallback)(()=>{ne?.(),L.current?.setAttribute(`data-is-hovering`,`false`)},[ne]),Ie=(0,x.useCallback)(e=>{T&&E&&($(),_?.(p(e)))},[T,E,_,$]),Le=(0,x.useCallback)(e=>{T&&E&&($(),_?.(f(e)))},[T,E,_,$]),Re=(0,x.useCallback)((e,t)=>{T&&h?.(f(e),t)},[T,h]),ze=(0,x.useCallback)(e=>{T&&g?.(f(e))},[T,g]);return n(a,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:ce,"data-hovered-lectures":T?F.map(e=>e.id).join(` `):``,"data-selected-lectures":T?N.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":T?P.join(` `):``,"data-selected-items":T?o.map(c).join(` `):``,"data-flash-custom-blocks":(d??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":se.join(` `),"data-interaction":T,"data-lecture-deletable":E,onPointerLeave:$,onTouchEnd:$,children:r(S,{columns:`1fr`,rows:Z?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(ye,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Z?`has-overflow`:``,children:[n(a,{direction:`column`,gap:0,align:`stretch`,padding:`${q*ge}px 0 0 0`,children:n(a,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:me.map((e,t)=>n(v,{color:`Text.dark`,children:e},t))})}),r(a,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${q*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(ve,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`${q}px repeat(${K}, 1fr)`,flow:`column`,gap:`0px ${_e}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:I,"data-is-dragging":`false`,"data-need-time-filter":b,...b?{onPointerDown:je,onPointerMove:Me,onPointerUp:Ae,onPointerLeave:Ae,onTouchMove:Ne,onTouchEnd:Ae}:{},children:A.map((e,t)=>r(x.Fragment,{children:[n(a,{direction:`column`,gap:0,align:`center`,children:n(v,{type:`Small`,color:`Text.dark`,children:k(`common.days.${e}`)})}),Array.from({length:K}).map((r,i)=>n(Ce,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===K-1?`last`:``,i%2==0&&(pe[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(xe,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`${q}px repeat(${K}, 1fr)`,flow:`column`,gap:`${J}px ${_e}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${q*.19999999999999996}px 0`,ref:L,"data-is-dragging":!1,children:[b&&n(ie,{}),D&&re.filter(e=>X(e,i)).map((e,t)=>n(ie,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-G)*2+2} / ${(e.end/60-G)*2+2}`}},t)),j.map((e,t)=>n(we,{lecture:e,displayedDayCount:i,overlapLabel:ae.has(e.id)?k(`friends.overlapLabel`):void 0,deleteLecture:T&&E&&_?Ie:void 0,handleLectureTileHover:Pe,handleLectureTileLeave:$,handleLectureTileSelect:Fe},`${e.id}-lecture-tile-${t}`)),M.filter(({time:e})=>X(e,i)).map(({block:e,time:t,index:r})=>n(de,{block:e,time:t,displayedDayCount:i,onSelect:T&&h?Re:void 0,onDelete:T&&E&&_?Le:void 0,onHover:T?ze:void 0,onLeave:T?$:void 0},`custom-block-${e.id}-${r}`)),Y.map(e=>n(we,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:$},`ghost-${e.id}`)),Y.length>0&&n(Ee,{overlaps:Te}),O&&H!==null&&n(Oe,{ratio:H,dayIndex:le})]})]})]}),n(be,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Z?` has-overflow`:``),children:r(S,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${_e}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[M.filter(({time:e})=>!X(e,i)).map(({block:e,time:t,index:r})=>n(de,{block:e,time:t,displayedDayCount:i,onSelect:T&&h?Re:void 0,onDelete:T&&E&&_?Le:void 0,overflow:!0},`custom-overflow-${e.id}-${r}`)),Se.map((e,t)=>n(De,{lecture:e,displayedDayCount:i,overlapLabel:ae.has(e.id)&&j.some(t=>t.id===e.id)?k(`friends.overlapLabel`):void 0,isGhost:j.every(t=>t.id!==e.id),deleteLecture:T&&E&&_?Ie:void 0,handleLectureTileSelect:Fe,handleLectureTileHover:Pe,handleLectureTileLeave:$},`${e.id}-overflow-${t}`))]})})]})})}var Q=(0,x.memo)(ke);export{T as n,Q as t};
//# sourceMappingURL=CustomTimeTableGrid-Dv3q2ozF.js.map