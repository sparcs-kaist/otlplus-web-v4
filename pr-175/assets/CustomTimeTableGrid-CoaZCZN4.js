(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`d3f35ebf7352151a23b8966cc396ef145d319af4`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`36ef7a43-02cd-4e63-8984-3c19cacdd714`,e._sentryDebugIdIdentifier=`sentry-dbid-36ef7a43-02cd-4e63-8984-3c19cacdd714`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CDhNsZfP.js";import{n,r,t as i}from"./emotion-react-jsx-runtime.browser.esm-BduCNEGU.js";import{n as a,t as o}from"./FlexWrapper-B_x8RnAm.js";import{i as s,n as c}from"./emotion-react.browser.esm-2QHxc9D1.js";import{C as l,D as u,E as d,F as f,M as p,O as m,P as h,T as ee,j as te,w as g}from"./axios-DUlyz70h.js";import{d as _}from"./useAPI-rJ5cRyzK.js";import{t as v}from"./Icon-DjjV5u0X.js";import{t as ne}from"./useTranslation-ClIvrg5-.js";import{t as y}from"./IconButton-BKPMWLMk.js";import{t as b}from"./Close-COP3CJTU.js";import{t as x}from"./Typography-zTdzABko.js";import{t as S}from"./media-BlMpza3k.js";import{t as C}from"./formatTimeblockToString-DTPxMx5G.js";var w=t(e()),T=a.div`
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
`,E=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],D=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],O=a(o)`
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
`;function A({style:e,className:t}){return n(O,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,style:e,className:t,children:n(k,{direction:`column`,gap:0,flex:`1 1 auto`})})}var re=(0,w.memo)(A),j=`lecture-tile`,M=`custom-block-tile`,N=e=>c`
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
`,P=s`${`
    0% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
    50% { filter: brightness(1.8) drop-shadow(0 0 12px rgba(255, 255, 255, 0.8)); transform: scale(1.05) translateY(-2px); z-index: 10; }
    100% { filter: brightness(1) drop-shadow(0 0 0px transparent); transform: scale(1); }
`}`,F=a(o)`
    opacity: 1;
    transition: opacity 0.2s ease;

    .custom-timetable:not([data-selected-items=""]) & {
        opacity: 0.5;
    }

    .custom-timetable[data-selected-items=""] &,
    .custom-timetable[data-selected-items~="${({itemKey:e})=>e}"] & {
        opacity: 1;
    }
`,I=a(o)`
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
        animation: ${P} 0.3s ease-out forwards;
    }
`,ie=a(F)`
    background: ${({theme:e,colorIndex:t})=>d(D(e.colors.Tile.TimeTable.default),t)};
    border-radius: 2px;
    overflow: hidden;
    pointer-events: none;

    [data-ghost="true"] & {
        opacity: 0.8;
    }

    [data-interaction="true"] &.${j},
    [data-custom-block-interaction="true"] &.${M} {
        pointer-events: auto;
        cursor: pointer;
    }

    [data-interaction="true"] &.${j} {
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>N(e)}
            }
        }
    }

    ${({customBlockId:e,theme:t})=>e!==void 0&&c`
            @media (hover: hover) {
                .custom-timetable[data-interaction="true"]:has(
                        [data-custom-block-id="${e}"][data-custom-block-interaction="true"]
                            .${`custom-block-tile`}:hover
                    )
                    & {
                    ${N(t)}
                }
            }
        `}

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    [data-selected-items~="${({itemKey:e})=>e}"] & {
        ${({theme:e})=>N(e)}
    }

    ${({lectureId:e,theme:t})=>e!==void 0&&c`
            @media (hover: hover) {
                .custom-timetable:not(:hover)[data-hovered-lectures~="${e}"] & {
                    ${N(t)}
                }
            }
        `}

    &[data-friend-overlap] .lecture-content {
        min-width: 0;
        min-height: 0;

        ${S.tablet} {
            padding: 2px;
        }
    }
`,L=a.div`
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

    ${S.tablet} {
        display: flex;
        flex-direction: column;

        .friend-overlap-label {
            order: -1;
            align-self: flex-end;
            font-size: ${({theme:e})=>e.fonts.Smaller.fontSize}px;
            line-height: ${({theme:e})=>e.fonts.Smaller.lineHeight}px;
        }
    }
`;function ae({lecture:e,overlapLabel:t}){let i=n(x,{type:`SmallMedium`,className:`tile-title lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle});return t?r(L,{children:[i,n(x,{type:`SmallBold`,className:`friend-overlap-label`,color:`TimeTable.title`,children:t})]}):i}var oe=a(o)`
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
`;function R({onDelete:e,ariaLabel:t,className:r=`tile-delete-wrapper lecture-delete-wrapper`}){return n(oe,{direction:`column`,flex:`1 1 auto`,gap:0,className:r,onPointerDown:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),children:n(y,{"aria-label":t,styles:{padding:3},onClick:e,children:n(v,{size:12,style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},onClick:()=>{},children:n(b,{})})})})}function z({item:e,time:t,classIdx:a,displayedDayCount:s=5,overflow:c=!1,overlapLabel:l,onSelect:d,onHover:f,onLeave:m,onDelete:h}){let{t:ee}=ne(),g=te(e),_=p(e),v=(0,w.useCallback)(t=>{d?.(e,t)},[d,e]),y=(0,w.useCallback)(()=>{f?.(e)},[f,e]),b=(0,w.useCallback)(()=>{m?.()},[m]),S=(0,w.useCallback)(()=>{h?.(e)},[h,e]),T=g&&a!==void 0?e.data.classes[a]:null;if(g&&a!==void 0&&T==null)return null;let D=E[t.day],O=`${ee(`common.days.${D}`)} ${C(t.begin)}–${C(t.end)}`,k=u(e);return n(I,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:Math.min(t.day,s-1)+1,rowStart:c?void 0:t.begin/30-14,rowEnd:c?void 0:t.end/30-14,itemKey:_,"data-class-time":t.day*24*60+t.begin,"data-custom-block-id":g?void 0:e.data.id,"data-custom-block-interaction":g?void 0:!!d,title:g?void 0:`${e.data.block_name} · ${O}`,onPointerDown:d?v:void 0,onPointerEnter:f?y:void 0,onPointerLeave:m?b:void 0,children:r(ie,{itemKey:_,direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,colorIndex:k,lectureId:g?e.data.id:void 0,customBlockId:g?void 0:e.data.id,className:g?j:M,"data-friend-overlap":g&&l?!0:void 0,role:!g&&d?`button`:void 0,tabIndex:!g&&d?0:void 0,"aria-label":!g&&d?`${e.data.block_name} · ${O}`:void 0,onKeyDown:!g&&d?t=>{t.target===t.currentTarget&&(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),d(e))}:void 0,children:[n(o,{className:g?`lecture-content`:void 0,direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:n(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:g?r(i,{children:[n(ae,{lecture:e.data,overlapLabel:l}),n(x,{type:`Small`,className:`tile-info lecture-info`,color:`TimeTable.detail`,children:e.data.professors.map(e=>e.name).join(`, `)}),n(x,{type:`Small`,className:`tile-info lecture-info`,color:`TimeTable.detail`,children:T?`(${T.buildingCode}) ${T.roomName}`:``})]}):r(i,{children:[n(x,{type:`SmallMedium`,color:`TimeTable.title`,className:`tile-title block-title`,children:e.data.block_name}),e.data.place&&n(x,{type:`Small`,color:`TimeTable.detail`,className:`tile-info block-info`,children:e.data.place}),c&&n(x,{type:`Small`,color:`TimeTable.detail`,className:`tile-info block-info`,children:O})]})})}),h&&n(R,{onDelete:S,ariaLabel:g?void 0:`Delete custom block: ${e.data.block_name}`,className:g?`tile-delete-wrapper lecture-delete-wrapper`:`tile-delete-wrapper custom-block-delete-wrapper`})]})})}var se=(0,w.memo)(z),B=a(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,V=a(o)`
    border-radius: 2px;
`;function H({day:e,begin:t,end:r}){return n(B,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(V,{direction:`column`,gap:0,flex:`1 1 auto`})})}var U=a(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,ce=a(ie)`
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
        animation: ${P} 0.3s ease-out forwards;
    }

    &[data-friend-overlap] {
        ${S.tablet} {
            padding: 2px;
        }
    }
`;function W({lecture:e,classIdx:t,overlapLabel:i,deleteLecture:a}){let s=t==null?null:e.classes[t],{t:c}=ne(),l=f(e);return r(U,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:s!=null&&E[s.day]&&s.begin!=null&&s.end!=null?r(x,{type:`Smaller`,color:`Text.light`,children:[c(`common.days.${E[s.day]}`),` `,C(s.begin),` -`,` `,C(s.end)]}):n(x,{type:`Smaller`,color:`Text.light`,children:c(`timetable.noTimeInfo`)})}),r(ce,{itemKey:p(l),direction:`column`,gap:0,align:`flex-start`,padding:`6px`,colorIndex:u(l),lectureId:e.id,flex:`1 1 auto`,className:j,"data-friend-overlap":i?!0:void 0,children:[n(ae,{lecture:e,overlapLabel:i}),n(x,{type:`Small`,className:`tile-info lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(x,{type:`Small`,className:`tile-info lecture-info`,color:`TimeTable.detail`,children:s==null?``:`(${s.buildingCode}) ${s.roomName}`}),a&&n(R,{onDelete:a})]})]})}var G=8,le=24,ue=Array.from({length:17},(e,t)=>G+t),de=ue.map(e=>(e%12||12).toString()),K=(de.length-1)*2,fe=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],q=20,pe=.8,me=5,J=1,he=a(T)`
    z-index: 1;
`,ge=a(o)`
    grid-row: 1;
    user-select: none;
    overflow: hidden;
`,_e=a(o)`
    overflow: auto;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: 2;
    display: none;

    &.has-overflow {
        display: flex;
    }
`,ve=a(T)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,ye=a(o)`
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
`,be=(0,w.memo)(({dayIdx:e,timeIdx:t,...r})=>n(ye,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),xe=a.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${j}:hover
        )
        &
        .${j} {
        ${({theme:e})=>N(e)}
    }
`,Se=(0,w.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,handleLectureTileHover:i,handleLectureTileLeave:a,handleLectureTileSelect:o,deleteLecture:s,isGhost:c=!1})=>{let l=(0,w.useMemo)(()=>f(e),[e]),u=(0,w.useCallback)(()=>{i?.(e)},[i,e]),d=(0,w.useCallback)(()=>{a?.()},[a]),p=(0,w.useCallback)(t=>{o?.(e,t)},[o,e]),m=(0,w.useCallback)(()=>{s?.(e)},[s,e]);return n(xe,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:u,onPointerLeave:d,onPointerDown:p,onTouchMove:u,onTouchEnd:d,...c?{"data-ghost":!0}:{},children:e.classes.map((e,i)=>X(e,t)?n(se,{item:l,time:e,classIdx:i,displayedDayCount:t,overlapLabel:r,onDelete:s?m:void 0},`${i}-lecture`):null)})}),Y=a.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${j}:hover) .${j} {
        ${({theme:e})=>N(e)}
    }
`,Ce=(0,w.memo)(({overlaps:e})=>n(Y,{children:e.map((e,t)=>n(H,{...e},t))}));function X(e,t){if(!e)return!1;let n=e.begin/60-G,r=e.end/60-G,{day:i}=e;return _.Mon<=i&&i<t&&n>=0&&r<=16&&r-n>=.5&&e.begin%30==0&&e.end%30==0}var we=a.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${j}:hover
        )
        &
        .${j} {
        ${({theme:e})=>N(e)}
    }
`,Te=(0,w.memo)(({lecture:e,displayedDayCount:t,overlapLabel:r,isGhost:i,deleteLecture:a,handleLectureTileHover:o,handleLectureTileLeave:s,handleLectureTileSelect:c})=>{let l=(0,w.useCallback)(()=>{o?.(e)},[o,e]),u=(0,w.useCallback)(()=>{s?.()},[s]),d=(0,w.useCallback)(t=>{c?.(e,t)},[c,e]),f=(0,w.useCallback)(()=>{a?.(e)},[a,e]);return e.classes.length===0||e.classes.some(e=>!X(e,t))?n(we,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":i?!0:void 0,onPointerEnter:l,onPointerLeave:u,onPointerDown:d,onTouchMove:l,onTouchEnd:u,children:e.classes.length===0?n(W,{lecture:e,overlapLabel:r,deleteLecture:i||!a?void 0:f},e.id):e.classes.map((o,s)=>{let{day:c,begin:l,end:u}=o;return X({day:c,begin:l,end:u},t)?null:n(W,{lecture:e,classIdx:s,overlapLabel:r,deleteLecture:i||!a?void 0:f},s)})}):null}),Ee=a.div`
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
`;function Z({timetableItems:e=[],overlappedLectureIds:t=[],displayedDayCount:i=5,selectedItems:a=[],hoveredItems:s=[],flashItemKeys:c,onItemSelect:u,onItemHover:d,onItemLeave:te,onItemDelete:_,cellWidth:v,needTimeFilter:y=!0,timeFilter:b,setTimeFilter:S,needLectureInteraction:C=!0,needLectureDeletable:E=!0,isCustomBlockSectionOpen:D=!1,customBlockDraftTimes:O=[],needCurrentTimeBar:k=!1}){let{t:A}=ne(),j=fe.slice(0,i),M=(0,w.useMemo)(()=>new Set(t),[t]),N=(0,w.useMemo)(()=>g(e),[e]),P=(0,w.useMemo)(()=>l(e),[e]),F=(0,w.useMemo)(()=>P.flatMap(e=>{let t=h(e);return ee(e).map((n,r)=>({item:t,block:e,time:n,index:r}))}),[P]),I=(0,w.useMemo)(()=>g(a),[a]),ie=(0,w.useMemo)(()=>l(a).map(e=>e.id),[a]),L=(0,w.useMemo)(()=>g(s),[s]),ae=(c??[]).filter(e=>e.startsWith(`lecture:`)).map(e=>Number(e.split(`:`)[1])),oe=(0,w.useRef)(null),R=(0,w.useRef)(null),z=(0,w.useRef)(null),B=(0,w.useRef)(!1),V=(0,w.useRef)(null),H=(0,w.useRef)(null),U=(0,w.useRef)(null),[ce,W]=(0,w.useState)(null),[ye,xe]=(0,w.useState)(-1),Y=(0,w.useCallback)(()=>{let e=new Date,t=(e.getDay()+6)%7,n=e.getHours()+e.getMinutes()/60;if(n<G||n>le||t>=i){W(null);return}let r=(n-G)/16;W(r),xe(t)},[i]);(0,w.useEffect)(()=>{if(!k)return;Y();let e=setInterval(Y,6e4);return window.addEventListener(`resize`,Y),()=>{clearInterval(e),window.removeEventListener(`resize`,Y)}},[k,Y]);let we=(0,w.useMemo)(()=>{let e=[...N,...L,...I].filter(e=>e!=null),t=new Map;return e.forEach(e=>{t.set(e.id,e)}),Array.from(t.values())},[N,L,I]),Z=(0,w.useMemo)(()=>{if(!C)return[];let e=L.filter(e=>!N.some(t=>t.id===e.id)),t=I.filter(e=>!N.some(t=>t.id===e.id)),n=new Map;return t.forEach(e=>n.set(e.id,e)),e.forEach(e=>n.set(e.id,e)),Array.from(n.values())},[L,I,N,C]),De=(0,w.useMemo)(()=>{if(!C||Z.length===0)return[];let t=[],n=e.flatMap(m);for(let e of Z)for(let r of m(f(e)))for(let e of n){let n=Math.max(r.begin,e.begin),i=Math.min(r.end,e.end);r.day===e.day&&n<i&&t.push({day:r.day,begin:(n/60-G)*2,end:(i/60-G)*2})}return t},[Z,e,C]),Oe=we.some(e=>e.classes.length===0||e.classes.some(e=>!X(e,i)))||F.some(({time:e})=>!X(e,i)),ke=(0,w.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;z.current?.style.setProperty(`--hover-day`,(i+1).toString()),z.current?.style.setProperty(`--hover-start`,a.toString()),z.current?.style.setProperty(`--hover-end`,(a+1).toString()),z.current?.setAttribute(`data-is-dragging`,`true`),R.current?.setAttribute(`data-is-dragging`,`true`),B.current=!0,H.current=[r,r+1],U.current=i,V.current=r},[]),Ae=(0,w.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=V.current==null?r:V.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;z.current?.style.setProperty(`--hover-start`,c.toString()),z.current?.style.setProperty(`--hover-end`,l.toString()),H.current=[o,s+1]},[]),je=(0,w.useCallback)(()=>{let e=H.current!==null&&H.current[1]-H.current[0]>1;e&&H.current&&U.current!==null&&S?.({day:U.current,begin:(G+H.current[0]*.5)*60,end:(G+H.current[1]*.5)*60}),D?(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`)):e?(z.current?.setAttribute(`data-is-dragging`,`wait`),R.current?.setAttribute(`data-is-dragging`,`wait`)):(H.current&&H.current[1]-H.current[0]<=1||!b)&&(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`),S?.(null)),B.current=!1,H.current=null,U.current=null,V.current=null},[D,b,S]);(0,w.useEffect)(()=>{(!b||D&&!B.current)&&(z.current?.setAttribute(`data-is-dragging`,`false`),R.current?.setAttribute(`data-is-dragging`,`false`))},[b,D]);let Me=(0,w.useCallback)(e=>{B.current||!y||ke(e.clientX,e.clientY)},[y]),Ne=(0,w.useCallback)(e=>{!B.current||V.current===null||Ae(e.clientX,e.clientY)},[Ae]),Pe=(0,w.useCallback)(e=>{if(!B.current||V.current===null)return;let t=e.touches[0];t!=null&&Ae(t.clientX,t.clientY)},[Ae]),Fe=(0,w.useCallback)(e=>{C&&d?.(f(e))},[d,C]),Ie=(0,w.useCallback)((e,t)=>{C&&u?.(f(e),t)},[u,C]),Q=(0,w.useCallback)(()=>{te?.(),z.current?.setAttribute(`data-is-hovering`,`false`)},[te]),$=(0,w.useCallback)(e=>{C&&E&&(Q(),_?.(e))},[C,E,_,Q]),Le=(0,w.useCallback)(e=>{$(f(e))},[$]),Re=(0,w.useCallback)((e,t)=>{C&&u?.(e,t)},[C,u]),ze=(0,w.useCallback)(e=>{C&&d?.(e)},[C,d]);return n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:oe,"data-hovered-lectures":C?L.map(e=>e.id).join(` `):``,"data-selected-lectures":C?I.map(e=>e.id).join(` `):``,"data-selected-custom-blocks":C?ie.join(` `):``,"data-selected-items":C?a.map(p).join(` `):``,"data-flash-items":(c??[]).join(` `),"data-flash-custom-blocks":(c??[]).filter(e=>e.startsWith(`custom:`)).map(e=>e.split(`:`)[1]).join(` `),"data-flash-lectures":ae.join(` `),"data-interaction":C,"data-lecture-deletable":E,onPointerLeave:Q,onTouchEnd:Q,children:r(T,{columns:`1fr`,rows:Oe?`minmax(0, 1fr) 96px`:`1fr`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(ge,{direction:`row`,gap:10,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:Oe?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${q*pe}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:de.map((e,t)=>n(x,{color:`Text.dark`,children:e},t))})}),r(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${q*.19999999999999996}px 0`,className:`timetable-grid-wrapper`,children:[n(he,{columns:`repeat(${i}, ${v||`1fr`})`,rows:`${q}px repeat(${K}, 1fr)`,flow:`column`,gap:`0px ${me}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:R,"data-is-dragging":`false`,"data-need-time-filter":y,...y?{onPointerDown:Me,onPointerMove:Ne,onPointerUp:je,onPointerLeave:je,onTouchMove:Pe,onTouchEnd:je}:{},children:j.map((e,t)=>r(w.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(x,{type:`Small`,color:`Text.dark`,children:A(`common.days.${e}`)})}),Array.from({length:K}).map((r,i)=>n(be,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===K-1?`last`:``,i%2==0&&(ue[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(ve,{columns:`repeat(${i}, ${v||`1fr`})`,rows:`${q}px repeat(${K}, 1fr)`,flow:`column`,gap:`${J}px ${me}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${q*.19999999999999996}px 0`,ref:z,"data-is-dragging":!1,children:[y&&n(re,{}),D&&O.filter(e=>X(e,i)).map((e,t)=>n(re,{className:`custom-block-draft-time`,style:{display:`flex`,opacity:.5,gridColumn:e.day+1,gridRow:`${(e.begin/60-G)*2+2} / ${(e.end/60-G)*2+2}`}},t)),N.map((e,t)=>n(Se,{lecture:e,displayedDayCount:i,overlapLabel:M.has(e.id)?A(`friends.overlapLabel`):void 0,deleteLecture:C&&E&&_?Le:void 0,handleLectureTileHover:Fe,handleLectureTileLeave:Q,handleLectureTileSelect:Ie},`${e.id}-lecture-tile-${t}`)),F.filter(({time:e})=>X(e,i)).map(({item:e,block:t,time:r,index:a})=>n(se,{item:e,time:r,displayedDayCount:i,onSelect:C&&u?Re:void 0,onDelete:C&&E&&_?$:void 0,onHover:C?ze:void 0,onLeave:C?Q:void 0},`custom-block-${t.id}-${a}`)),Z.map(e=>n(Se,{lecture:e,displayedDayCount:i,isGhost:!0,handleLectureTileLeave:Q},`ghost-${e.id}`)),Z.length>0&&n(Ce,{overlaps:De}),k&&ce!==null&&n(Ee,{ratio:ce,dayIndex:ye})]})]})]}),n(_e,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(Oe?` has-overflow`:``),children:r(T,{columns:`repeat(${i}, ${v||`1fr`})`,rows:`minmax(56px, auto)`,gap:`4px ${me}px`,flow:`row`,alignItems:`stretch`,justifyItems:`stretch`,style:{height:`auto`,gridAutoRows:`minmax(56px, auto)`},children:[F.filter(({time:e})=>!X(e,i)).map(({item:e,block:t,time:r,index:a})=>n(se,{item:e,time:r,displayedDayCount:i,onSelect:C&&u?Re:void 0,onDelete:C&&E&&_?$:void 0,onHover:C?ze:void 0,onLeave:C?Q:void 0,overflow:!0},`custom-overflow-${t.id}-${a}`)),we.map((e,t)=>n(Te,{lecture:e,displayedDayCount:i,overlapLabel:M.has(e.id)&&N.some(t=>t.id===e.id)?A(`friends.overlapLabel`):void 0,isGhost:N.every(t=>t.id!==e.id),deleteLecture:C&&E&&_?Le:void 0,handleLectureTileSelect:Ie,handleLectureTileHover:Fe,handleLectureTileLeave:Q},`${e.id}-overflow-${t}`))]})})]})})}var De=(0,w.memo)(Z);export{D as n,De as t};
//# sourceMappingURL=CustomTimeTableGrid-CoaZCZN4.js.map