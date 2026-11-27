(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`76d24851eed9ef769b9ce71e7b30071a0fc24065`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`96587779-76db-4ca9-96c5-0e884ed021e2`,e._sentryDebugIdIdentifier=`sentry-dbid-96587779-76db-4ca9-96c5-0e884ed021e2`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-DACjHxPw.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-pkQVWg5U.js";import{n as a,t as o}from"./FlexWrapper-g--S3w0L.js";import{i as s,n as c}from"./emotion-react.browser.esm-BxpyqtwX.js";import{C as l,D as u,E as d,F as f,M as p,O as m,P as ee,T as h,j as g,w as _}from"./axios-CmYAzYjX.js";import{d as v}from"./useAPI-CuL-_5rL.js";import{t as y}from"./Icon-C795_hGQ.js";import{t as te}from"./useTranslation-CFfw_Oc5.js";import{t as b}from"./IconButton-DMZyrUKt.js";import{t as x}from"./Close-DrkoL8Hv.js";import{t as S}from"./Typography-BnDzUXhk.js";import{t as C}from"./media-CKomL41Y.js";import{t as w}from"./formatTimeblockToString-B2mzYY27.js";var T=t(e()),E=a.div`
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
`,D=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],O=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],ne=a(o)`
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
`,k=a(o)`
    background: ${({theme:e})=>e.colors.Highlight.medium};
    border-radius: 4px;
`;function A({style:e,className:t}){return n(ne,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(k,{direction:`column`,gap:0,flex:`1 1 auto`})})}var re=(0,T.memo)(A),j=`timetable-tile`,M=`lecture-tile`,N=`custom-block-tile`,P=e=>c`
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
`,F=s`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,I=a(o)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,ie=a(o)`
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
        animation: ${F} 0.3s ease-out forwards;
    }
`,L=a(I)`
    background: ${({theme:e,colorIndex:t})=>d(O(e.colors.Tile.TimeTable.default),t)};
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
                .${j}[data-item-key="${({itemKey:e})=>e}"]:hover
            )
            & {
            ${({theme:e})=>P(e)}
        }
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-items~="${({itemKey:e})=>e}"] & {
        ${({theme:e})=>P(e)}
    }

    ${({lectureId:e,theme:t})=>e!==void 0&&c`
            @media (hover: hover) {
                .custom-timetable:not(:hover)[data-hovered-lectures~="${e}"] & {
                    ${P(t)}
                }
            }
        `}

    &[data-friend-overlap] .lecture-content {
        min-width: 0;
        min-height: 0;

        ${C.tablet} {
            padding: 2px;
        }
    }
`,ae=a.div`
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

    ${C.tablet} {
        display: flex;
        flex-direction: column;

        .friend-overlap-label {
            order: -1;
            align-self: flex-end;
            font-size: ${({theme:e})=>e.fonts.Smaller.fontSize}px;
            line-height: ${({theme:e})=>e.fonts.Smaller.lineHeight}px;
        }
    }
`;function oe({item:e,overlapLabel:t}){let i=g(e),a=n(S,{type:`SmallMedium`,className:i?`tile-title lecture-title`:`tile-title block-title`,color:`TimeTable.title`,children:i?`${e.data.name} ${e.data.subtitle}`:e.data.block_name});return t?r(ae,{children:[a,n(S,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):a}function R({item:e,classIdx:t,overlapLabel:a,timeLabel:o,overflow:s=!1}){let c=g(e),l=c&&t!=null?e.data.classes[t]:null,u=c?`tile-info lecture-info`:`tile-info block-info`,d=c?[e.data.professors.map(e=>e.name).join(`, `),l==null?``:`(${l.buildingCode}) ${l.roomName}`]:[...e.data.place?[e.data.place]:[],...s&&o?[o]:[]];return r(i,{children:[n(oe,{item:e,overlapLabel:c?a:void 0}),d.map((e,t)=>n(S,{type:`Small`,className:u,color:`TimeTable.detail`,children:e},t))]})}var z=a(o)`
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
`;function B({onDelete:e,ariaLabel:t,className:r=`tile-delete-wrapper lecture-delete-wrapper`}){return n(z,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(b,{"aria-label":t,styles:{padding:3},onClick:e,children:n(y,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},onClick:()=>{},children:n(x,{})})})})}function V({item:e,time:t,classIdx:i,displayedDayCount:a=5,overflow:s=!1,overlapLabel:c,onSelect:l,onHover:d,onLeave:f,onDelete:m}){let{t:ee}=te(),h=g(e),_=p(e),v=(0,T.useCallback)(t=>{l?.(e,t)},[l,e]),y=(0,T.useCallback)(()=>{d?.(e)},[d,e]),b=(0,T.useCallback)(()=>{f?.()},[f]),x=(0,T.useCallback)(()=>{m?.(e)},[m,e]),S=h&&i!==void 0?e.data.classes[i]:null;if(h&&i!==void 0&&S==null)return null;let C=D[t.day],E=`${ee(`common.days.${C}`)} ${w(t.begin)}–${w(t.end)}`,O=u(e);return n(ie,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,a-1)+1,rowStart:s?void 0:t.begin/30-14,rowEnd:s?void 0:t.end/30-14,itemKey:_,"data-class-time":t.day*24*60+t.begin,"data-custom-block-id":h?void 0:e.data.id,title:h?void 0:`${e.data.block_name} · ${E}`,onPointerDown:l?v:void 0,onPointerEnter:d?y:void 0,onPointerLeave:f?b:void 0,children:r(L,{itemKey:_,"data-item-key":_,direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,colorIndex:O,lectureId:h?e.data.id:void 0,className:`${j} ${h?M:N}`,"data-friend-overlap":h&&c?!0:void 0,role:!h&&l?`button`:void 0,tabIndex:!h&&l?0:void 0,"aria-label":!h&&l?`${e.data.block_name} · ${E}`:void 0,onKeyDown:!h&&l?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),l(e))}:void 0,children:[n(o,{className:h?`lecture-content`:void 0,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:n(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:n(R,{item:e,classIdx:i,overlapLabel:c,timeLabel:E,overflow:s})})}),m&&n(B,{onDelete:x,ariaLabel:h?void 0:`Delete custom block: ${e.data.block_name}`,className:h?`tile-delete-wrapper lecture-delete-wrapper`:`tile-delete-wrapper custom-block-delete-wrapper`})]})})}var se=(0,T.memo)(V),H=a(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,U=a(o)`
    border-radius: 2px;
`;function ce({day:e,begin:t,end:r}){return n(H,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(U,{direction:`column`,gap:0,flex:`1 1 auto`})})}var le=a(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,ue=a(L)`
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
        animation: ${F} 0.3s ease-out forwards;
    }

    &[data-friend-overlap] {
        ${C.tablet} {
            padding: 2px;
        }
    }
`;function de({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:a}){let s=t==null?null:e.classes[t],{t:c}=te(),l=f(e);return r(le,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:s!=null&&D[s.day]&&s.begin!=null&&s.end!=null?r(S,{type:`Smaller`,color:`Text.light`,children:[c(`common.days.${D[s.day]}`),` `,w(s.begin),` -`,` `,w(s.end)]}):n(S,{type:`Smaller`,color:`Text.light`,children:c(`timetable.noTimeInfo`)})}),r(ue,{itemKey:p(l),"data-item-key":p(l),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,colorIndex:u(l),lectureId:e.id,flex:`1 1 auto`,className:`${j} ${M}`,"data-friend-overlap":i?!0:void 0,children:[n(R,{item:l,classIdx:t,overlapLabel:i}),a&&n(B,{onDelete:a})]})]})}var W=8,fe=24,pe=Array.from({length:17},(e,t)=>W+t),me=pe.map(e=>(e%12||12).toString()),G=(me.length-1)*2,he=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],K=20,ge=.8,_e=5,q=1,ve=a(E)`
    z-index: 1;
`,ye=a(o)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,be=a(o)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,xe=a(E)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,J=a(o)`
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
`,Se=(0,T.memo)(({dayIdx:e,timeIdx:t,...r})=>n(J,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),Ce=a.div`
    display: contents;
`,we=(0,T.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,T.useMemo)(()=>f(e),[e]),u=(0,T.useCallback)(()=>{i?.(e)},[i,e]),d=(0,T.useCallback)(()=>{a?.()},[a]),p=(0,T.useCallback)(t=>{o?.(e,t)},[o,e]),m=(0,T.useCallback)(()=>{s?.(e)},[s,e]);return n(Ce,{"data-lecture-id":e.id,onPointerEnter:u,onPointerLeave:d,onPointerDown:p,onTouchMove:u,onTouchEnd:d,...c?{"data-ghost":!0}:{},children:e.classes.map((e,i)=>X(e,t)?n(se,{item:l,time:e,classIdx:i,displayedDayCount:t,overlapLabel:r,onDelete:s?m:void 0},`${i}-lecture`):null)})}),Y=a.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${M}:hover) .${M} {
        ${({theme:e})=>P(e)}
    }
`,Te=(0,T.memo)(({overlaps:e})=>n(Y,{children:e.map((e,t)=>n(ce,{...e},t))}));function X(e,t){if(!e)return!1;let n=e.begin/60-W,r=e.end/60-W,{day:i}=e;return v.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var Ee=a.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;
`,De=(0,T.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,T.useCallback)(()=>{o?.(e)},[o,e]),u=(0,T.useCallback)(()=>{s?.()},[s]),d=(0,T.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,T.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!X(e,t))?n(Ee,{"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(de,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return X({day:c,begin:l,end:u},t)?null:n(de,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),Oe=a.div`
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
`;function Z({timetableItems:e=[],overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:a=[],hoveredItems:s=[],flashItemKeys:c,onItemSelect:u,onItemHover:d,onItemLeave:g,onItemDelete:v,cellWidth:y,needTimeFilter:b=!0,timeFilter:x,setTimeFilter:C,needItemInteraction:w=!0,needItemDeletable:D=!0,isCustomBlockSectionOpen:O=!1,customBlockDraftTimes:ne=[],needCurrentTimeBar:k=!1}){let{t:A}=te(),j=he.slice(0,i),M=(0,T.useMemo)(()=>new Set(t),[t]),N=(0,T.useMemo)(()=>_(e),[e]),P=(0,T.useMemo)(()=>l(e),[e]),F=(0,T.useMemo)(()=>P.flatMap(e=>{let t=ee(e);return h(e).map((n,r)=>({item:t,block:e,time:n,index:r}))}),[P]),I=(0,T.useMemo)(()=>_(a),[a]),ie=(0,T.useMemo)(()=>l(a).map(e=>e.id),[a]),L=(0,T.useMemo)(()=>_(s),[s]),ae=(c??[]).filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1])),oe=(0,T.useRef)(null),R=(0,T.useRef)(null),z=(0,T.useRef)(null),B=(0,T.useRef)(!1),V=(0,T.useRef)(null),H=(0,T.useRef)(null),U=(0,T.useRef)(null),[ce,le]=(0,T.useState)(null),[ue,de]=(0,T.useState)(-1),J=(0,T.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<W||n>fe||t>=i){le(null);return}let r=(n-W)/16;le(r),de(t)},[i]);(0,T.useEffect)(()=>{if(!k)return;J();let e=setInterval(J,6e4);return window.addEventListener(`resize`,J),()=>{clearInterval(e),window.removeEventListener(`resize`,J)}},[k,J]);let Ce=(0,T.useMemo)(()=>{let e=[...N,...L,...I].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[N,L,I]),Y=(0,T.useMemo)(()=>{if(!w)return[];let e=L.filter(e=>!N.some(t=>t.id===e.id)),t=I.filter(e=>!N.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[L,I,N,w]),Ee=(0,T.useMemo)(()=>{if(!w||Y.length===0)return[];let t=[],n=e.flatMap(m);for(let e of Y)for(let r of m(f(e)))for(let e of n){let n=Math.max(r.begin,e.begin),i=Math.min(r.end,e.end);r.day===e.day&&n<i&&t.push({day:r.day,begin:(n/60-W)*2,end:(i/60-W)*2})}return t},[Y,e,w]),Z=Ce.some(e=>e.classes.length===0||e.classes.some(e=>!X(e,i)))||F.some(({time:e})=>!X(e,i)),ke=(0,T.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;z.current?.style.setProperty(`--hover-day`,(i+1).toString()),z.current?.style.setProperty(`--hover-start`,a.toString()),z.current?.style.setProperty(`--hover-end`,(a+1).toString()),z.current?.setAttribute(`data-is-dragging`,`true`),R.current?.setAttribute(`data-is-dragging`,`true`),B.current=!0,H.current=[r,r+1],U.current=i,V.current=r},[]),Ae=(0,T.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=V.current==null?r:V.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;z.current?.style.setProperty(`--hover-start`,c.toString()),z.current?.style.setProperty(`--hover-end`,l.toString()),H.current=[o,s+1]},[]),je=(0,T.useCallback)(()=>{let e=H.current!==null&&H.current[1]-H.current[0]>1;e&&H.current&&U.current!==null&&C?.({day:U.current,begin:(W+H.current[0]*.5)*60,end:(W+H.current[1]*.5)*60}),O?(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`)):e?(z.current?.setAttribute(`data-is-dragging`,`wait`),R.current?.setAttribute(`data-is-dragging`,`wait`)):(H.current&&H.current[1]-H.current[0]<=1||!x)&&(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`),C?.(null)),B.current=!1,H.current=null,U.current=null,V.current=null},[O,x,C]);(0,T.useEffect)(()=>{(!x||O&&!B.current)&&(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`))},[x,O]);let Me=(0,T.useCallback)(e=>{B.current||!b||ke(e.clientX,e.clientY)},[b]),Ne=(0,T.useCallback)(e=>{!B.current||V.current===null||Ae(e.clientX,e.clientY)},[Ae]),Pe=(0,T.useCallback)(e=>{if(!B.current||V.current===null)return;let t=e.touches[0];t!=null&&Ae(t.clientX,t.clientY)},[Ae]),Fe=(0,T.useCallback)(e=>{w&&d?.(f(e))},[d,w]),Ie=(0,T.useCallback)((e,t)=>{w&&u?.(f(e),t)},[u,w]),Q=(0,T.useCallback)(()=>{g?.(),z.current?.setAttribute(`data-is-hovering`,`false`)},[g]),$=(0,T.useCallback)(e=>{w&&D&&(Q(),v?.(e))},[w,D,v,Q]),Le=(0,T.useCallback)(e=>{$(f(e))},[$]),Re=(0,T.useCallback)((e,t)=>{w&&u?.(e,t)},[w,u]),ze=(0,T.useCallback)(e=>{w&&d?.(e)},[w,d]);return n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:oe,"data-hovered-lectures":w?L.map(e=>e.id).join(` `):``,"data-selected-lectures":w?I.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":w?ie.join(` `):``,"data-selected-items":w?a.map(p).join(` `):``,"data-flash-items":(c??[]).join(` `),"data-flash-custom-blocks":(c??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ae.join(` `),"data-interaction":w,"data-item-deletable":D,onPointerLeave:Q,onTouchEnd:Q,children:r(E,{columns:`1fr`,rows:Z?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(ye,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Z?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${K*ge}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:me.map((e,t)=>n(S,{color:`Text.dark`,children:e},t))})}),r(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${K*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(ve,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`${K}px repeat(${G}, 1fr)`,flow:`column`,gap:`0px ${_e}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:R,"data-is-dragging":`false`,"data-need-time-filter":b,...b?{onPointerDown:Me,onPointerMove:Ne,onPointerUp:je,onPointerLeave:je,onTouchMove:Pe,onTouchEnd:je}:{},children:j.map((e,t)=>r(T.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(S,{type:`Small`,color:`Text.dark`,children:A(`common.days.${e}`)})}),Array.from({length:G}).map((r,i)=>n(Se,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===G-1?`last`:``,i%2==0&&(pe[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(xe,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`${K}px repeat(${G}, 1fr)`,flow:`column`,gap:`${q}px ${_e}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${K*.19999999999999996}px 0`,ref:z,"data-is-dragging":!1,children:[b&&n(re,{}),O&&ne.filter(e=>X(e,i)).map((e,t)=>n(re,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-W)*2+2} / ${(e.end/60-W)*2+2}`}},t)),N.map((e,t)=>n(we,{lecture:e,displayedDayCount:i,overlapLabel:M.has(e.id)?A(`friends.overlapLabel`):void 0,deleteLecture:w&&D&&v?Le:void 0,handleLectureTileHover:Fe,handleLectureTileLeave:Q,handleLectureTileSelect:Ie},`${e.id}-lecture-tile-${t}`)),F.filter(({time:e})=>X(e,i)).map(({item:e,block:t,time:r,index:a})=>n(se,{item:e,time:r,displayedDayCount:i,onSelect:w&&u?Re:void 0,onDelete:w&&D&&v?$:void 0,onHover:w?ze:void 0,onLeave:w?Q:void 0},`custom-block-${t.id}-${a}`)),Y.map(e=>n(we,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:Q},`ghost-${e.id}`)),Y.length>0&&n(Te,{overlaps:Ee}),k&&ce!==null&&n(Oe,{ratio:ce,dayIndex:ue})]})]})]}),n(be,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Z?` has-overflow`:``),children:r(E,{columns:`repeat(${i}, ${y||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${_e}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[F.filter(({time:e})=>!X(e,i)).map(({item:e,block:t,time:r,index:a})=>n(se,{item:e,time:r,displayedDayCount:i,onSelect:w&&u?Re:void 0,onDelete:w&&D&&v?$:void 0,onHover:w?ze:void 0,onLeave:w?Q:void 0,overflow:!0},`custom-overflow-${t.id}-${a}`)),Ce.map((e,t)=>n(De,{lecture:e,displayedDayCount:i,overlapLabel:M.has(e.id)&&N.some(t=>t.id===e.id)?A(`friends.overlapLabel`):void 0,isGhost:N.every(t=>t.id!==e.id),deleteLecture:w&&D&&v?Le:void 0,handleLectureTileSelect:Ie,handleLectureTileHover:Fe,handleLectureTileLeave:Q},`${e.id}-overflow-${t}`))]})})]})})}var ke=(0,T.memo)(Z);export{O as n,ke as t};
//# sourceMappingURL=CustomTimeTableGrid-DDs1K4m-.js.map