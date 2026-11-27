(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`83a3ffd61c9fff7db424418ebc0f453e28992d34`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`67e4eccf-3bb9-4e0c-ab8c-d89d1b6e26c0`,e._sentryDebugIdIdentifier=`sentry-dbid-67e4eccf-3bb9-4e0c-ab8c-d89d1b6e26c0`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-C-kB3xhf.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-Pe5o5Cru.js";import{n as a,t as o}from"./FlexWrapper-eDbv_mQh.js";import{i as s,n as c}from"./emotion-react.browser.esm-L5Cm0P-Y.js";import{A as l,C as u,D as d,T as f,w as p}from"./axios-DfM82Q-I.js";import{d as m}from"./useAPI-CLqMwm1S.js";import{t as h}from"./Icon-Dl__d6Hu.js";import{t as ee}from"./useTranslation-vXHlqG-y.js";import{t as g}from"./IconButton-Br7g9BrZ.js";import{t as _}from"./Close-ClO9T-oO.js";import{t as v}from"./Typography-D6FMiy5v.js";import{t as y}from"./media-CRRppCQh.js";import{t as b}from"./formatTimeblockToString-DJGgnRz1.js";var x=t(e()),S=a.div`
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
`,C=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],w=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],T=a(o)`
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
`,E=a(o)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function D({style:e,className:t}){return n(T,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(E,{direction:`column`,gap:0,flex:`1 1 auto`})})}var te=(0,x.memo)(D),O=`timetable-tile`,k=`lecture-tile`,A=`custom-block-tile`,j=e=>c`
    background: ${e.colors.Highlight.default};

    .tile-title,
    .friend-overlap-label {
        color: ${e.colors.Text.onHighlight.default};
    }

    .tile-info {
        color: ${e.colors.Text.onHighlight.muted};
    }

    .tile-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,M=s`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,N=a(o)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,ne=a(o)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>e===void 0?`auto`:`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-items~="${({itemKey:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }

    [data-flash-items~="${({itemKey:e})=>e}"] & {
        animation: ${M} 0.3s ease-out forwards;
    }
`,P=a(N)`
    background: ${({theme:e,colorIndex:t})=>{let n=w(e.colors.Tile.TimeTable.default);return n.at(t%n.length)}};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
    }

    @media (hover: hover) {
        .custom-timetable[data-interaction="true"]:has(
                .${O}[data-item-key="${({itemKey:e})=>e}"]:hover
            )
            & {
            ${({theme:e})=>j(e)}
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-items~="${({itemKey:e})=>e}"] & {
        ${({theme:e})=>j(e)}
    }

    ${({lectureId:e,theme:t})=>e!==void 0&&c`
            @media (hover: hover) {
                .custom-timetable:not(:hover)[data-hovered-lectures~="${e}"] & {
                    ${j(t)}
                }
            }
        `}

    &[data-friend-overlap] .lecture-content {
        min-width: 0;
        min-height: 0;

        ${y.tablet} {
            padding: 2px;
        }
    }
`,F=a.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 4px;
    align-items: start;
    width: 100%;
    min-width: 0;
    flex-shrink: 0;

    .tile-title {
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
`;function re({item:e,overlapLabel:t}){let i=e.kind===l.LECTURE,a=n(v,{type:`SmallMedium`,className:i?`tile-title lecture-title`:`tile-title block-title`,color:`TimeTable.title`,children:i?`${e.data.name} ${e.data.subtitle}`:e.data.block_name});return t?r(F,{children:[a,n(v,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):a}function I({item:e,classIdx:t,overlapLabel:a,timeLabel:o,overflow:s=!1}){let c=e.kind===l.LECTURE,u=c&&t!=null?e.data.classes[t]:null,d=c?`tile-info lecture-info`:`tile-info block-info`,f=c?[e.data.professors.map(e=>e.name).join(`, `),u==null?``:`(${u.buildingCode}) ${u.roomName}`]:[...e.data.place?[e.data.place]:[],...s&&o?[o]:[]];return r(i,{children:[n(re,{item:e,overlapLabel:c?a:void 0}),f.map((e,t)=>n(v,{type:`Small`,className:d,color:`TimeTable.detail`,children:e},t))]})}var ie=a(o)`
    pointer-events: none;
    visibility: hidden;
    position: absolute;
    top: 4px;
    right: 4px;
    backdrop-filter: blur(16px);

    [data-item-deletable="false"] & {
        pointer-events: none !important;
        display: none !important;
    }
`;function ae({onDelete:e,ariaLabel:t,className:r=`tile-delete-wrapper lecture-delete-wrapper`}){return n(ie,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(g,{"aria-label":t,styles:{padding:3},onClick:e,children:n(h,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},onClick:()=>{},children:n(_,{})})})})}function L({item:e,time:t,classIdx:i,displayedDayCount:a=5,overflow:s=!1,overlapLabel:c,onSelect:u,onHover:f,onLeave:p,onDelete:m}){let{t:h}=ee(),g=e.kind===l.LECTURE,_=d(e),v=(0,x.useCallback)(t=>{u?.(e,t)},[u,e]),y=(0,x.useCallback)(()=>{f?.(e)},[f,e]),S=(0,x.useCallback)(()=>{p?.()},[p]),w=(0,x.useCallback)(()=>{m?.(e)},[m,e]),T=g&&i!==void 0?e.data.classes[i]:null;if(g&&i!==void 0&&T==null)return null;let E=C[t.day],D=`${h(`common.days.${E}`)} ${b(t.begin)}–${b(t.end)}`,te=g?e.data.courseId:e.data.id;return n(ne,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,a-1)+1,rowStart:s?void 0:t.begin/30-14,rowEnd:s?void 0:t.end/30-14,itemKey:_,"data-class-time":t.day*24*60+t.begin,"data-custom-block-id":g?void 0:e.data.id,title:g?void 0:`${e.data.block_name} · ${D}`,onPointerDown:u?v:void 0,onPointerEnter:f?y:void 0,onPointerLeave:p?S:void 0,children:r(P,{itemKey:_,"data-item-key":_,direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,colorIndex:te,lectureId:g?e.data.id:void 0,className:`${O} ${g?k:A}`,"data-friend-overlap":g&&c?!0:void 0,role:!g&&u?`button`:void 0,tabIndex:!g&&u?0:void 0,"aria-label":!g&&u?`${e.data.block_name} · ${D}`:void 0,onKeyDown:!g&&u?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),u(e))}:void 0,children:[n(o,{className:g?`lecture-content`:void 0,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:n(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:n(I,{item:e,classIdx:i,overlapLabel:c,timeLabel:D,overflow:s})})}),m&&n(ae,{onDelete:w,ariaLabel:g?void 0:`Delete custom block: ${e.data.block_name}`,className:g?`tile-delete-wrapper lecture-delete-wrapper`:`tile-delete-wrapper custom-block-delete-wrapper`})]})})}var oe=(0,x.memo)(L),R=a(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,z=a(o)`
    border-radius: 2px;
`;function B({day:e,begin:t,end:r}){return n(R,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(z,{direction:`column`,gap:0,flex:`1 1 auto`})})}var V=a(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,H=a(P)`
    position: relative;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    [data-selected-items~="${({itemKey:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: ${({theme:e})=>e.elevation.raised};
    }

    [data-flash-items~="${({itemKey:e})=>e}"] & {
        animation: ${M} 0.3s ease-out forwards;
    }

    &[data-friend-overlap] {
        ${y.tablet} {
            padding: 2px;
        }
    }
`;function U({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:a}){let s=t==null?null:e.classes[t],{t:c}=ee(),u={kind:l.LECTURE,data:e};return r(V,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:s!=null&&C[s.day]&&s.begin!=null&&s.end!=null?r(v,{type:`Smaller`,color:`Text.light`,children:[c(`common.days.${C[s.day]}`),` `,b(s.begin),` -`,` `,b(s.end)]}):n(v,{type:`Smaller`,color:`Text.light`,children:c(`timetable.noTimeInfo`)})}),r(H,{itemKey:d(u),"data-item-key":d(u),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,colorIndex:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:`${O} ${k}`,"data-friend-overlap":i?!0:void 0,children:[n(I,{item:u,classIdx:t,overlapLabel:i}),a&&n(ae,{onDelete:a})]})]})}var W=8,se=24,ce=Array.from({length:17},(e,t)=>W+t),le=ce.map(e=>(e%12||12).toString()),G=(le.length-1)*2,ue=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],K=20,de=.8,fe=5,q=1,pe=a(S)`
    z-index: 1;
`,me=a(o)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,he=a(o)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,ge=a(S)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,_e=a(o)`
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
`,ve=(0,x.memo)(({dayIdx:e,timeIdx:t,...r})=>n(_e,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),ye=a.div`
    display: contents;
`,be=(0,x.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let u=(0,x.useMemo)(()=>({kind:l.LECTURE,data:e}),[e]),d=(0,x.useCallback)(()=>{i?.(e)},[i,e]),f=(0,x.useCallback)(()=>{a?.()},[a]),p=(0,x.useCallback)(t=>{o?.(e,t)},[o,e]),m=(0,x.useCallback)(()=>{s?.(e)},[s,e]);return n(ye,{"data-lecture-id":e.id,onPointerEnter:d,onPointerLeave:f,onPointerDown:p,onTouchMove:d,onTouchEnd:f,...c?{"data-ghost":!0}:{},children:e.classes.map((e,i)=>J(e,t)?n(oe,{item:u,time:e,classIdx:i,displayedDayCount:t,overlapLabel:r,onDelete:s?m:void 0},`${i}-lecture`):null)})}),xe=a.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${k}:hover) .${k} {
        ${({theme:e})=>j(e)}
    }
`,Se=(0,x.memo)(({overlaps:e})=>n(xe,{children:e.map((e,t)=>n(B,{...e},t))}));function J(e,t){if(!e)return!1;let n=e.begin/60-W,r=e.end/60-W,{day:i}=e;return m.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var Y=a.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;
`,Ce=(0,x.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,x.useCallback)(()=>{o?.(e)},[o,e]),u=(0,x.useCallback)(()=>{s?.()},[s]),d=(0,x.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,x.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!J(e,t))?n(Y,{"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(U,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return J({day:c,begin:l,end:u},t)?null:n(U,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),we=a.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${K}px + (100% - ${K*1.2}px) *
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
`;function Te({timetableItems:e=[],overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:a=[],hoveredItems:s=[],flashItemKeys:c,onItemSelect:m,onItemHover:h,onItemLeave:g,onItemDelete:_,cellWidth:y,needTimeFilter:b=!0,timeFilter:C,setTimeFilter:w,needItemInteraction:T=!0,needItemDeletable:E=!0,isCustomBlockSectionOpen:D=!1,customBlockDraftTimes:O=[],needCurrentTimeBar:k=!1}){let{t:A}=ee(),j=ue.slice(0,i),M=(0,x.useMemo)(()=>new Set(t),[t]),N=(0,x.useMemo)(()=>p(e),[e]),ne=(0,x.useMemo)(()=>u(e),[e]),P=(0,x.useMemo)(()=>ne.flatMap(e=>{let t={kind:l.CUSTOM,data:e};return e.times.map((n,r)=>({item:t,block:e,time:n,index:r}))}),[ne]),F=(0,x.useMemo)(()=>p(a),[a]),re=(0,x.useMemo)(()=>u(a).map(e=>e.id),[a]),I=(0,x.useMemo)(()=>p(s),[s]),ie=(c??[]).filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1])),ae=(0,x.useRef)(null),L=(0,x.useRef)(null),R=(0,x.useRef)(null),z=(0,x.useRef)(!1),B=(0,x.useRef)(null),V=(0,x.useRef)(null),H=(0,x.useRef)(null),[U,_e]=(0,x.useState)(null),[ye,xe]=(0,x.useState)(-1),Y=(0,x.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<W||n>se||t>=i){_e(null);return}let r=(n-W)/16;_e(r),xe(t)},[i]);(0,x.useEffect)(()=>{if(!k)return;Y();let e=setInterval(Y,6e4);return window.addEventListener(`resize`,Y),()=>{clearInterval(e),window.removeEventListener(`resize`,Y)}},[k,Y]);let Te=(0,x.useMemo)(()=>{let e=[...N,...I,...F].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[N,I,F]),X=(0,x.useMemo)(()=>{if(!T)return[];let e=I.filter(e=>!N.some(t=>t.id===e.id)),t=F.filter(e=>!N.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[I,F,N,T]),Ee=(0,x.useMemo)(()=>{if(!T||X.length===0)return[];let t=[],n=e.flatMap(f);for(let e of X)for(let r of e.classes)for(let e of n){let n=Math.max(r.begin,e.begin),i=Math.min(r.end,e.end);r.day===e.day&&n<i&&t.push({day:r.day,begin:(n/60-W)*2,end:(i/60-W)*2})}return t},[X,e,T]),De=Te.some(e=>e.classes.length===0||e.classes.some(e=>!J(e,i)))||P.some(({time:e})=>!J(e,i)),Oe=(0,x.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;R.current?.style.setProperty(`--hover-day`,(i+1).toString()),R.current?.style.setProperty(`--hover-start`,a.toString()),R.current?.style.setProperty(`--hover-end`,(a+1).toString()),R.current?.setAttribute(`data-is-dragging`,`true`),L.current?.setAttribute(`data-is-dragging`,`true`),z.current=!0,V.current=[r,r+1],H.current=i,B.current=r},[]),Z=(0,x.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=B.current==null?r:B.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;R.current?.style.setProperty(`--hover-start`,c.toString()),R.current?.style.setProperty(`--hover-end`,l.toString()),V.current=[o,s+1]},[]),ke=(0,x.useCallback)(()=>{let e=V.current!==null&&V.current[1]-V.current[0]>1;e&&V.current&&H.current!==null&&w?.({day:H.current,begin:(W+V.current[0]*.5)*60,end:(W+V.current[1]*.5)*60}),D?(R.current?.setAttribute(`data-is-dragging`,`false`),L.current?.setAttribute(`data-is-dragging`,`false`)):e?(R.current?.setAttribute(`data-is-dragging`,`wait`),L.current?.setAttribute(`data-is-dragging`,`wait`)):(V.current&&V.current[1]-V.current[0]<=1||!C)&&(R.current?.setAttribute(`data-is-dragging`,`false`),L.current?.setAttribute(`data-is-dragging`,`false`),w?.(null)),z.current=!1,V.current=null,H.current=null,B.current=null},[D,C,w]);(0,x.useEffect)(()=>{(!C||D&&!z.current)&&(R.current?.setAttribute(`data-is-dragging`,`false`),L.current?.setAttribute(`data-is-dragging`,`false`))},[C,D]);let Ae=(0,x.useCallback)(e=>{z.current||!b||Oe(e.clientX,e.clientY)},[b]),je=(0,x.useCallback)(e=>{!z.current||B.current===null||Z(e.clientX,e.clientY)},[Z]),Me=(0,x.useCallback)(e=>{if(!z.current||B.current===null)return;let t=e.touches[0];t!=null&&Z(t.clientX,t.clientY)},[Z]),Ne=(0,x.useCallback)(e=>{T&&h?.({kind:l.LECTURE,data:e})},[h,T]),Pe=(0,x.useCallback)((e,t)=>{T&&m?.({kind:l.LECTURE,data:e},t)},[m,T]),Q=(0,x.useCallback)(()=>{g?.(),R.current?.setAttribute(`data-is-hovering`,`false`)},[g]),$=(0,x.useCallback)(e=>{T&&E&&(Q(),_?.(e))},[T,E,_,Q]),Fe=(0,x.useCallback)(e=>{$({kind:l.LECTURE,data:e})},[$]),Ie=(0,x.useCallback)((e,t)=>{T&&m?.(e,t)},[T,m]),Le=(0,x.useCallback)(e=>{T&&h?.(e)},[T,h]);return n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:ae,"data-hovered-lectures":T?I.map(e=>e.id).join(` `):``,"data-selected-lectures":T?F.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":T?re.join(` `):``,"data-selected-items":T?a.map(d).join(` `):``,"data-flash-items":(c??[]).join(` `),"data-flash-custom-blocks":(c??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ie.join(` `),"data-interaction":T,"data-item-deletable":E,onPointerLeave:Q,onTouchEnd:Q,children:r(S,{columns:`1fr`,rows:De?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(me,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:De?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${K*de}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:le.map((e,t)=>n(v,{color:`Text.dark`,children:e},t))})}),r(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${K*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(pe,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`${K}px repeat(${G}, 1fr)`,flow:`column`,gap:`0px ${fe}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:L,"data-is-dragging":`false`,"data-need-time-filter":b,...b?{onPointerDown:Ae,onPointerMove:je,onPointerUp:ke,onPointerLeave:ke,onTouchMove:Me,onTouchEnd:ke}:{},children:j.map((e,t)=>r(x.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(v,{type:`Small`,color:`Text.dark`,children:A(`common.days.${e}`)})}),Array.from({length:G}).map((r,i)=>n(ve,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===G-1?`last`:``,i%2==0&&(ce[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(ge,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`${K}px repeat(${G}, 1fr)`,flow:`column`,gap:`${q}px ${fe}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${K*.19999999999999996}px 0`,ref:R,"data-is-dragging":!1,children:[b&&n(te,{}),D&&O.filter(e=>J(e,i)).map((e,t)=>n(te,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-W)*2+2} / ${(e.end/60-W)*2+2}`}},t)),N.map((e,t)=>n(be,{lecture:e,displayedDayCount:i,overlapLabel:M.has(e.id)?A(`friends.overlapLabel`):void 0,deleteLecture:T&&E&&_?Fe:void 0,handleLectureTileHover:Ne,handleLectureTileLeave:Q,handleLectureTileSelect:Pe},`${e.id}-lecture-tile-${t}`)),P.filter(({time:e})=>J(e,i)).map(({item:e,block:t,time:r,index:a})=>n(oe,{item:e,time:r,displayedDayCount:i,onSelect:T&&m?Ie:void 0,onDelete:T&&E&&_?$:void 0,onHover:T?Le:void 0,onLeave:T?Q:void 0},`custom-block-${t.id}-${a}`)),X.map(e=>n(be,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:Q},`ghost-${e.id}`)),X.length>0&&n(Se,{overlaps:Ee}),k&&U!==null&&n(we,{ratio:U,dayIndex:ye})]})]})]}),n(he,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(De?` has-overflow`:``),children:r(S,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${fe}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[P.filter(({time:e})=>!J(e,i)).map(({item:e,block:t,time:r,index:a})=>n(oe,{item:e,time:r,displayedDayCount:i,onSelect:T&&m?Ie:void 0,onDelete:T&&E&&_?$:void 0,onHover:T?Le:void 0,onLeave:T?Q:void 0,overflow:!0},`custom-overflow-${t.id}-${a}`)),Te.map((e,t)=>n(Ce,{lecture:e,displayedDayCount:i,overlapLabel:M.has(e.id)&&N.some(t=>t.id===e.id)?A(`friends.overlapLabel`):void 0,isGhost:N.every(t=>t.id!==e.id),deleteLecture:T&&E&&_?Fe:void 0,handleLectureTileSelect:Pe,handleLectureTileHover:Ne,handleLectureTileLeave:Q},`${e.id}-overflow-${t}`))]})})]})})}var X=(0,x.memo)(Te);export{w as n,X as t};
//# sourceMappingURL=CustomTimeTableGrid-DcBRish1.js.map