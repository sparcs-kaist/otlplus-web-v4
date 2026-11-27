(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`1871a74b81cea10e037679ac43c3d542d98f9cae`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`4dabb9e9-e1e6-4c80-9425-a619d5b56bea`,e._sentryDebugIdIdentifier=`sentry-dbid-4dabb9e9-e1e6-4c80-9425-a619d5b56bea`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-B9tPBgZF.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-Dwzwh1f_.js";import{n as a,t as o}from"./FlexWrapper-RjFWmNbP.js";import{i as s,n as c}from"./emotion-react.browser.esm-DJj1WAlj.js";import{C as l,D as u,E as d,M as f,T as p,k as m,w as h}from"./axios-DDUFQxOd.js";import{d as g}from"./useAPI-D3gtl7_j.js";import{t as _}from"./Icon-CAkGwkuy.js";import{t as ee}from"./useTranslation-BFclrMEd.js";import{t as v}from"./IconButton-CUO1IpNJ.js";import{t as y}from"./Close-O5ZKgZIC.js";import{t as b}from"./Typography-BJitUKqr.js";import{t as x}from"./media-ClU-Jz_k.js";import{t as S}from"./formatTimeblockToString-BXuszBJQ.js";var C=t(e(),1),w=a.div`
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
`,T=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],E=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],D=a(o)`
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
`,O=a(o)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function k({style:e,className:t}){return n(D,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(O,{direction:`column`,gap:0,flex:`1 1 auto`})})}var te=(0,C.memo)(k),A=`timetable-tile`,j=`lecture-tile`,ne=`custom-block-tile`,M=e=>c`
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
`,N=s`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,P=a(o)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,F=a(o)`
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
        animation: ${N} 0.3s ease-out forwards;
    }
`,re=a(P)`
    background: ${({theme:e,colorIndex:t})=>p(E(e.colors.Tile.TimeTable.default),t)};
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
                .${A}[data-item-key="${({itemKey:e})=>e}"]:hover
            )
            & {
            ${({theme:e})=>M(e)}
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-items~="${({itemKey:e})=>e}"] & {
        ${({theme:e})=>M(e)}
    }

    ${({lectureId:e,theme:t})=>e!==void 0&&c`
            @media (hover: hover) {
                .custom-timetable:not(:hover)[data-hovered-lectures~="${e}"] & {
                    ${M(t)}
                }
            }
        `}

    &[data-friend-overlap] .lecture-content {
        min-width: 0;
        min-height: 0;

        ${x.tablet} {
            padding: 2px;
        }
    }
`,I=a.div`
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

    ${x.tablet} {
        display: flex;
        flex-direction: column;

        .friend-overlap-label {
            order: -1;
            align-self: flex-end;
            font-size: ${({theme:e})=>e.fonts.Smaller.fontSize}px;
            line-height: ${({theme:e})=>e.fonts.Smaller.lineHeight}px;
        }
    }
`;function ie({item:e,overlapLabel:t}){let i=e.kind===f.LECTURE,a=n(b,{type:`SmallMedium`,className:i?`tile-title lecture-title`:`tile-title block-title`,color:`TimeTable.title`,children:i?`${e.data.name} ${e.data.subtitle}`:e.data.block_name});return t?r(I,{children:[a,n(b,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):a}function ae({item:e,classIdx:t,overlapLabel:a,timeLabel:o,overflow:s=!1}){let c=e.kind===f.LECTURE,l=c&&t!=null?e.data.classes[t]:null,u=c?`tile-info lecture-info`:`tile-info block-info`,d=c?[e.data.professors.map(e=>e.name).join(`, `),l==null?``:`(${l.buildingCode}) ${l.roomName}`]:[...e.data.place?[e.data.place]:[],...s&&o?[o]:[]];return r(i,{children:[n(ie,{item:e,overlapLabel:c?a:void 0}),d.map((e,t)=>n(b,{type:`Small`,className:u,color:`TimeTable.detail`,children:e},t))]})}var L=a(o)`
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
`;function R({onDelete:e,ariaLabel:t,className:r=`tile-delete-wrapper lecture-delete-wrapper`}){return n(L,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(v,{"aria-label":t,styles:{padding:3},onClick:e,children:n(_,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},onClick:()=>{},children:n(y,{})})})})}function z({item:e,time:t,classIdx:i,displayedDayCount:a=5,overflow:s=!1,overlapLabel:c,onSelect:l,onHover:u,onLeave:p,onDelete:h}){let{t:g}=ee(),_=e.kind===f.LECTURE,v=m(e),y=(0,C.useCallback)(t=>{l?.(e,t)},[l,e]),b=(0,C.useCallback)(()=>{u?.(e)},[u,e]),x=(0,C.useCallback)(()=>{p?.()},[p]),w=(0,C.useCallback)(()=>{h?.(e)},[h,e]),E=_&&i!==void 0?e.data.classes[i]:null;if(_&&i!==void 0&&E==null)return null;let D=T[t.day],O=`${g(`common.days.${D}`)} ${S(t.begin)}–${S(t.end)}`,k=d(e);return n(F,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,a-1)+1,rowStart:s?void 0:t.begin/30-14,rowEnd:s?void 0:t.end/30-14,itemKey:v,"data-class-time":t.day*24*60+t.begin,"data-custom-block-id":_?void 0:e.data.id,title:_?void 0:`${e.data.block_name} · ${O}`,onPointerDown:l?y:void 0,onPointerEnter:u?b:void 0,onPointerLeave:p?x:void 0,children:r(re,{itemKey:v,"data-item-key":v,direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,colorIndex:k,lectureId:_?e.data.id:void 0,className:`${A} ${_?j:ne}`,"data-friend-overlap":_&&c?!0:void 0,role:!_&&l?`button`:void 0,tabIndex:!_&&l?0:void 0,"aria-label":!_&&l?`${e.data.block_name} · ${O}`:void 0,onKeyDown:!_&&l?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),l(e))}:void 0,children:[n(o,{className:_?`lecture-content`:void 0,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:n(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:n(ae,{item:e,classIdx:i,overlapLabel:c,timeLabel:O,overflow:s})})}),h&&n(R,{onDelete:w,ariaLabel:_?void 0:`Delete custom block: ${e.data.block_name}`,className:_?`tile-delete-wrapper lecture-delete-wrapper`:`tile-delete-wrapper custom-block-delete-wrapper`})]})})}var oe=(0,C.memo)(z),B=a(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,V=a(o)`
    border-radius: 2px;
`;function H({day:e,begin:t,end:r}){return n(B,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(V,{direction:`column`,gap:0,flex:`1 1 auto`})})}var se=a(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,ce=a(re)`
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
        animation: ${N} 0.3s ease-out forwards;
    }

    &[data-friend-overlap] {
        ${x.tablet} {
            padding: 2px;
        }
    }
`;function le({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:a}){let s=t==null?null:e.classes[t],{t:c}=ee(),l={kind:f.LECTURE,data:e};return r(se,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:s!=null&&T[s.day]&&s.begin!=null&&s.end!=null?r(b,{type:`Smaller`,color:`Text.light`,children:[c(`common.days.${T[s.day]}`),` `,S(s.begin),` -`,` `,S(s.end)]}):n(b,{type:`Smaller`,color:`Text.light`,children:c(`timetable.noTimeInfo`)})}),r(ce,{itemKey:m(l),"data-item-key":m(l),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,colorIndex:d(l),lectureId:e.id,flex:`1 1 auto`,className:`${A} ${j}`,"data-friend-overlap":i?!0:void 0,children:[n(ae,{item:l,classIdx:t,overlapLabel:i}),a&&n(R,{onDelete:a})]})]})}var U=8,ue=24,de=Array.from({length:17},(e,t)=>U+t),fe=de.map(e=>(e%12||12).toString()),W=(fe.length-1)*2,pe=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],G=20,me=.8,he=5,K=1,ge=a(w)`
    z-index: 1;
`,_e=a(o)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,ve=a(o)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,ye=a(w)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,be=a(o)`
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
`,xe=(0,C.memo)(({dayIdx:e,timeIdx:t,...r})=>n(be,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),q=a.div`
    display: contents;
`,Se=(0,C.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,C.useMemo)(()=>({kind:f.LECTURE,data:e}),[e]),u=(0,C.useCallback)(()=>{i?.(e)},[i,e]),d=(0,C.useCallback)(()=>{a?.()},[a]),p=(0,C.useCallback)(t=>{o?.(e,t)},[o,e]),m=(0,C.useCallback)(()=>{s?.(e)},[s,e]);return n(q,{"data-lecture-id":e.id,onPointerEnter:u,onPointerLeave:d,onPointerDown:p,onTouchMove:u,onTouchEnd:d,...c?{"data-ghost":!0}:{},children:e.classes.map((e,i)=>J(e,t)?n(oe,{item:l,time:e,classIdx:i,displayedDayCount:t,overlapLabel:r,onDelete:s?m:void 0},`${i}-lecture`):null)})}),Ce=a.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${j}:hover) .${j} {
        ${({theme:e})=>M(e)}
    }
`,we=(0,C.memo)(({overlaps:e})=>n(Ce,{children:e.map((e,t)=>n(H,{...e},t))}));function J(e,t){if(!e)return!1;let n=e.begin/60-U,r=e.end/60-U,{day:i}=e;return g.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var Y=a.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;
`,Te=(0,C.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,C.useCallback)(()=>{o?.(e)},[o,e]),u=(0,C.useCallback)(()=>{s?.()},[s]),d=(0,C.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,C.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!J(e,t))?n(Y,{"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(le,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return J({day:c,begin:l,end:u},t)?null:n(le,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),Ee=a.div`
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
`;function De({timetableItems:e=[],overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:a=[],hoveredItems:s=[],flashItemKeys:c,onItemSelect:d,onItemHover:p,onItemLeave:g,onItemDelete:_,cellWidth:v,needTimeFilter:y=!0,timeFilter:x,setTimeFilter:S,needItemInteraction:T=!0,needItemDeletable:E=!0,isCustomBlockSectionOpen:D=!1,customBlockDraftTimes:O=[],needCurrentTimeBar:k=!1}){let{t:A}=ee(),j=pe.slice(0,i),ne=(0,C.useMemo)(()=>new Set(t),[t]),M=(0,C.useMemo)(()=>h(e),[e]),N=(0,C.useMemo)(()=>l(e),[e]),P=(0,C.useMemo)(()=>N.flatMap(e=>{let t={kind:f.CUSTOM,data:e};return e.times.map((n,r)=>({item:t,block:e,time:n,index:r}))}),[N]),F=(0,C.useMemo)(()=>h(a),[a]),re=(0,C.useMemo)(()=>l(a).map(e=>e.id),[a]),I=(0,C.useMemo)(()=>h(s),[s]),ie=(c??[]).filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1])),ae=(0,C.useRef)(null),L=(0,C.useRef)(null),R=(0,C.useRef)(null),z=(0,C.useRef)(!1),B=(0,C.useRef)(null),V=(0,C.useRef)(null),H=(0,C.useRef)(null),[se,ce]=(0,C.useState)(null),[le,be]=(0,C.useState)(-1),q=(0,C.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<U||n>ue||t>=i){ce(null);return}let r=(n-U)/16;ce(r),be(t)},[i]);(0,C.useEffect)(()=>{if(!k)return;q();let e=setInterval(q,6e4);return window.addEventListener(`resize`,q),()=>{clearInterval(e),window.removeEventListener(`resize`,q)}},[k,q]);let Ce=(0,C.useMemo)(()=>{let e=[...M,...I,...F].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[M,I,F]),Y=(0,C.useMemo)(()=>{if(!T)return[];let e=I.filter(e=>!M.some(t=>t.id===e.id)),t=F.filter(e=>!M.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[I,F,M,T]),De=(0,C.useMemo)(()=>{if(!T||Y.length===0)return[];let t=[],n=e.flatMap(u);for(let e of Y)for(let r of e.classes)for(let e of n){let n=Math.max(r.begin,e.begin),i=Math.min(r.end,e.end);r.day===e.day&&n<i&&t.push({day:r.day,begin:(n/60-U)*2,end:(i/60-U)*2})}return t},[Y,e,T]),X=Ce.some(e=>e.classes.length===0||e.classes.some(e=>!J(e,i)))||P.some(({time:e})=>!J(e,i)),Oe=(0,C.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;R.current?.style.setProperty(`--hover-day`,(i+1).toString()),R.current?.style.setProperty(`--hover-start`,a.toString()),R.current?.style.setProperty(`--hover-end`,(a+1).toString()),R.current?.setAttribute(`data-is-dragging`,`true`),L.current?.setAttribute(`data-is-dragging`,`true`),z.current=!0,V.current=[r,r+1],H.current=i,B.current=r},[]),Z=(0,C.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=B.current==null?r:B.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;R.current?.style.setProperty(`--hover-start`,c.toString()),R.current?.style.setProperty(`--hover-end`,l.toString()),V.current=[o,s+1]},[]),ke=(0,C.useCallback)(()=>{let e=V.current!==null&&V.current[1]-V.current[0]>1;e&&V.current&&H.current!==null&&S?.({day:H.current,begin:(U+V.current[0]*.5)*60,end:(U+V.current[1]*.5)*60}),D?(R.current?.setAttribute(`data-is-dragging`,`false`),L.current?.setAttribute(`data-is-dragging`,`false`)):e?(R.current?.setAttribute(`data-is-dragging`,`wait`),L.current?.setAttribute(`data-is-dragging`,`wait`)):(V.current&&V.current[1]-V.current[0]<=1||!x)&&(R.current?.setAttribute(`data-is-dragging`,`false`),L.current?.setAttribute(`data-is-dragging`,`false`),S?.(null)),z.current=!1,V.current=null,H.current=null,B.current=null},[D,x,S]);(0,C.useEffect)(()=>{(!x||D&&!z.current)&&(R.current?.setAttribute(`data-is-dragging`,`false`),L.current?.setAttribute(`data-is-dragging`,`false`))},[x,D]);let Ae=(0,C.useCallback)(e=>{z.current||!y||Oe(e.clientX,e.clientY)},[y]),je=(0,C.useCallback)(e=>{!z.current||B.current===null||Z(e.clientX,e.clientY)},[Z]),Me=(0,C.useCallback)(e=>{if(!z.current||B.current===null)return;let t=e.touches[0];t!=null&&Z(t.clientX,t.clientY)},[Z]),Ne=(0,C.useCallback)(e=>{T&&p?.({kind:f.LECTURE,data:e})},[p,T]),Pe=(0,C.useCallback)((e,t)=>{T&&d?.({kind:f.LECTURE,data:e},t)},[d,T]),Q=(0,C.useCallback)(()=>{g?.(),R.current?.setAttribute(`data-is-hovering`,`false`)},[g]),$=(0,C.useCallback)(e=>{T&&E&&(Q(),_?.(e))},[T,E,_,Q]),Fe=(0,C.useCallback)(e=>{$({kind:f.LECTURE,data:e})},[$]),Ie=(0,C.useCallback)((e,t)=>{T&&d?.(e,t)},[T,d]),Le=(0,C.useCallback)(e=>{T&&p?.(e)},[T,p]);return n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:ae,"data-hovered-lectures":T?I.map(e=>e.id).join(` `):``,"data-selected-lectures":T?F.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":T?re.join(` `):``,"data-selected-items":T?a.map(m).join(` `):``,"data-flash-items":(c??[]).join(` `),"data-flash-custom-blocks":(c??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ie.join(` `),"data-interaction":T,"data-item-deletable":E,onPointerLeave:Q,onTouchEnd:Q,children:r(w,{columns:`1fr`,rows:X?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(_e,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:X?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${G*me}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:fe.map((e,t)=>n(b,{color:`Text.dark`,children:e},t))})}),r(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${G*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(ge,{columns:`repeat(${i}, ${v||`1fr`})`,rows:`${G}px repeat(${W}, 1fr)`,flow:`column`,gap:`0px ${he}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:L,"data-is-dragging":`false`,"data-need-time-filter":y,...y?{onPointerDown:Ae,onPointerMove:je,onPointerUp:ke,onPointerLeave:ke,onTouchMove:Me,onTouchEnd:ke}:{},children:j.map((e,t)=>r(C.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(b,{type:`Small`,color:`Text.dark`,children:A(`common.days.${e}`)})}),Array.from({length:W}).map((r,i)=>n(xe,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===W-1?`last`:``,i%2==0&&(de[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(ye,{columns:`repeat(${i}, ${v||`1fr`})`,rows:`${G}px repeat(${W}, 1fr)`,flow:`column`,gap:`${K}px ${he}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${G*.19999999999999996}px 0`,ref:R,"data-is-dragging":!1,children:[y&&n(te,{}),D&&O.filter(e=>J(e,i)).map((e,t)=>n(te,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-U)*2+2} / ${(e.end/60-U)*2+2}`}},t)),M.map((e,t)=>n(Se,{lecture:e,displayedDayCount:i,overlapLabel:ne.has(e.id)?A(`friends.overlapLabel`):void 0,deleteLecture:T&&E&&_?Fe:void 0,handleLectureTileHover:Ne,handleLectureTileLeave:Q,handleLectureTileSelect:Pe},`${e.id}-lecture-tile-${t}`)),P.filter(({time:e})=>J(e,i)).map(({item:e,block:t,time:r,index:a})=>n(oe,{item:e,time:r,displayedDayCount:i,onSelect:T&&d?Ie:void 0,onDelete:T&&E&&_?$:void 0,onHover:T?Le:void 0,onLeave:T?Q:void 0},`custom-block-${t.id}-${a}`)),Y.map(e=>n(Se,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:Q},`ghost-${e.id}`)),Y.length>0&&n(we,{overlaps:De}),k&&se!==null&&n(Ee,{ratio:se,dayIndex:le})]})]})]}),n(ve,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(X?` has-overflow`:``),children:r(w,{columns:`repeat(${i}, ${v||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${he}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[P.filter(({time:e})=>!J(e,i)).map(({item:e,block:t,time:r,index:a})=>n(oe,{item:e,time:r,displayedDayCount:i,onSelect:T&&d?Ie:void 0,onDelete:T&&E&&_?$:void 0,onHover:T?Le:void 0,onLeave:T?Q:void 0,overflow:!0},`custom-overflow-${t.id}-${a}`)),Ce.map((e,t)=>n(Te,{lecture:e,displayedDayCount:i,overlapLabel:ne.has(e.id)&&M.some(t=>t.id===e.id)?A(`friends.overlapLabel`):void 0,isGhost:M.every(t=>t.id!==e.id),deleteLecture:T&&E&&_?Fe:void 0,handleLectureTileSelect:Pe,handleLectureTileHover:Ne,handleLectureTileLeave:Q},`${e.id}-overflow-${t}`))]})})]})})}var X=(0,C.memo)(De);export{E as n,X as t};
//# sourceMappingURL=CustomTimeTableGrid-Cn-1rik4.js.map