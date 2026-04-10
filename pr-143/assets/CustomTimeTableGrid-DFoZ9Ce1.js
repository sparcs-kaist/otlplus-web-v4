(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ea4f97b985d021ab0b0948980859f9f51b2b4c96`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`363b902d-9eed-4f4c-b375-ef74687e12e3`,e._sentryDebugIdIdentifier=`sentry-dbid-363b902d-9eed-4f4c-b375-ef74687e12e3`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-vrnmIdFU.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-Znxlh7Bw.js";import{n as i,o as a,t as o}from"./FlexWrapper-MyOy10jM.js";import{i as s}from"./useAPI-0nx3ta6r.js";import{t as c}from"./Icon-DMijsa2v.js";import{t as l}from"./IconButton-C_EaZl0X.js";import{t as u}from"./useTranslation-T8ENXDxS.js";import{t as d}from"./Close-Bia2Frud.js";import{t as f}from"./Typography-DUwzt84o.js";var p=t(e(),1),m=i.div`
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
`,h=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`,`saturday`,`sunday`],g=e=>[e.red[1],e.red[2],e.orange[1],e.orange[2],e.yellow[1],e.yellow[2],e.green[1],e.green[2],e.green[3],e.blue[1],e.blue[2],e.purple[1],e.purple[2],e.pink[1],e.pink[2]],_=i(o)`
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
`,v=i(o)`
    background: rgba(229, 76, 101, 0.4);
    border-radius: 4px;
`;function y(){return n(_,{direction:`column`,gap:0,padding:`1px 0px`,align:`stretch`,children:n(v,{direction:`column`,gap:0,flex:`1 1 auto`})})}var ee=(0,p.memo)(y),b=`lecture-tile`,x=e=>a`
    background: ${e.colors.Highlight.default};

    .lecture-title {
        color: #ffffff;
    }

    .lecture-info {
        color: rgba(255, 255, 255, 0.5);
    }

    .lecture-delete-wrapper {
        pointer-events: auto;
        visibility: visible;
    }
`,S=i(o)`
    grid-column: ${({col:e})=>e};
    grid-row: ${({rowStart:e,rowEnd:t})=>`${e} / ${t}`};
    overflow: hidden;
    pointer-events: none;
    position: relative;

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
`,C=i(o)`
    background: ${({theme:e,courseId:t})=>()=>{let n=g(e.colors.Tile.TimeTable.default);return n[t%n.length]}};
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
                ${({theme:e})=>x(e)}
            }
        }
    }

    transition: opacity 0.2s ease;

    opacity: 0.5;

    [data-selected-lecture=""] & {
        opacity: 1;
    }

    [data-is-dragging="true"] & {
        pointer-events: none;
    }

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lecture="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>x(e)}
        }
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        opacity: 1;
    }
`,w=i(o)`
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
`;function T({lecture:e,classIdx:t,deleteLecture:i}){let a=e.classes[t];return a==null?null:n(S,{direction:`column`,gap:0,padding:`1px 0px`,justify:`stretch`,align:`stretch`,col:a.day+1,rowStart:a.begin/30-14,rowEnd:a.end/30-14,lectureId:e.id,children:r(C,{direction:`row`,gap:0,flex:`1 1 auto`,align:`stretch`,justify:`stretch`,padding:`2px`,courseId:e.courseId,lectureId:e.id,className:b,children:[n(o,{direction:`column`,justify:`center`,flex:`1 1 auto`,gap:0,padding:`4px`,children:r(o,{direction:`column`,gap:0,align:`flex-start`,style:{overflow:`hidden`},children:[n(f,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(f,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(f,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:`(${a.buildingCode}) ${a.roomName}`})]})}),i&&n(w,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,children:n(l,{styles:{padding:3},onClick:i,children:n(c,{size:12,onClick:()=>{},style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(d,{})})})})]})})}var E=(0,p.memo)(T,(e,t)=>e.lecture===t.lecture&&e.classIdx===t.classIdx),D=i(o)`
    grid-column: ${({day:e})=>e+1};
    grid-row: ${({begin:e,end:t})=>`${e+2} / ${t+2}`};
    pointer-events: none;
    backdrop-filter: grayscale(100%);
`,O=i(o)`
    border-radius: 2px;
`;function k({day:e,begin:t,end:r}){return n(D,{direction:`column`,gap:0,day:e,begin:t,end:r,align:`stretch`,justify:`stretch`,children:n(O,{direction:`column`,gap:0,flex:`1 1 auto`})})}var A=i(o)`
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
`,j=i(o)`
    border-radius: 2px;
    overflow: hidden;
    opacity: 0.5;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e,courseId:t})=>()=>{let n=g(e.colors.Tile.TimeTable.default);return n[t%n.length]}};

    cursor: pointer;

    @media (hover: hover) {
        .custom-timetable:not(:hover)[data-hovered-lectures~="${({lectureId:e})=>e}"]
            &,
        [data-selected-lecture="${({lectureId:e})=>e}"] & {
            ${({theme:e})=>x(e)}
        }
    }

    [data-interaction="true"] & {
        pointer-events: auto;
        cursor: pointer;
        @media (hover: hover) {
            &:hover {
                ${({theme:e})=>x(e)}
            }
        }
    }

    [data-selected-lecture="${({lectureId:e})=>e}"] & {
        transform: translateY(-2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        opacity: 1;
    }

    [data-selected-lecture=""] & {
        transform: none;
        box-shadow: none;
        opacity: 1;
    }
`;function M({lecture:e,classIdx:t,deleteLecture:i}){let a=t==null?null:e.classes[t],{t:s}=u();return r(A,{direction:`column`,gap:2,align:`stretch`,justify:`stretch`,padding:`2px`,flex:`1 1 auto`,lectureId:e.id,children:[n(o,{direction:`column`,gap:0,align:`center`,children:a!=null&&h[a.day]&&a.begin!=null&&a.end!=null?r(f,{type:`Smaller`,color:`Text.light`,children:[s(`common.days.${h[a.day]}`),` `,Math.floor(a.begin/60),`:`,a.begin%60==0?`00`:`30`,` - `,Math.floor(a.end/60),`:`,a.end%60==0?`00`:`30`]}):n(f,{type:`Smaller`,color:`Text.light`,children:s(`timetable.noTimeInfo`)})}),r(j,{direction:`column`,gap:0,align:`flex-start`,padding:`6px`,courseId:e.courseId,lectureId:e.id,flex:`1 1 auto`,className:b,children:[n(f,{type:`SmallMedium`,className:`lecture-title`,color:`TimeTable.title`,children:e.name+` `+e.subtitle}),n(f,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:e.professors.map(e=>e.name).join(`, `)}),n(f,{type:`Small`,className:`lecture-info`,color:`TimeTable.detail`,children:a==null?``:`(${a.buildingCode}) ${a.roomName}`}),i&&n(w,{direction:`column`,flex:`1 1 auto`,gap:0,className:`lecture-delete-wrapper`,children:n(l,{styles:{padding:3},onClick:i,children:n(c,{size:12,onClick:()=>{},style:{color:`rgba(255, 255, 255, 0.6)`,opacity:1,pointerEvents:`auto`},children:n(d,{})})})})]})]})}var N=8,P=24,F=Array.from({length:P-N+1},(e,t)=>N+t),I=F.map(e=>(e%12||12).toString()),L=(I.length-1)*2,R=[`monday`,`tuesday`,`wednesday`,`thursday`,`friday`],z=20,B=.8,V=5,H=1,te=i(m)`
    z-index: 1;
`,ne=i(o)`
    grid-row: 1 / ${L+5};
    user-select: none;
    overflow: hidden;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: 1 / ${L+2};
    }
`,re=i(o)`
    overflow: hidden;
    user-select: none;
    min-width: 0;
    min-height: 0;
    grid-row: -1 / -1;
    display: none;
    grid-template-rows: subgrid;

    &.has-overflow {
        grid-row: ${L+2} / ${L+5};
        display: flex;
    }
`,ie=i(m)`
    position: absolute;
    z-index: 2;
    pointer-events: none;

    --hover-day: 0;
    --hover-start: 0;
    --hover-end: 0;
`,U=i(o)`
    box-sizing: border-box;
    touch-action: none;

    &.half {
        border-top: ${H}px dashed ${({theme:e})=>e.colors.Line.block};
    }

    &.hour {
        border-top: ${H}px solid ${({theme:e})=>e.colors.Line.block};
    }

    &.last {
        border-bottom: ${H}px solid ${({theme:e})=>e.colors.Line.darker};
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
                background: rgba(229, 76, 101, 0.2);
            }
        }
    }

    [data-need-time-filter="true"][data-is-dragging="true"] & {
        :hover div {
            background: none;
        }

        cursor: ns-resize;
    }
`,ae=(0,p.memo)(({dayIdx:e,timeIdx:t,...r})=>n(U,{direction:`column`,gap:0,padding:`1px`,align:`stretch`,justify:`stretch`,...r,children:n(o,{direction:`column`,gap:0,flex:`1 1 auto`,style:{borderRadius:`4px`,pointerEvents:`none`}})})),W=i.div`
    display: contents;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${b}:hover
        )
        &
        .${b} {
        ${({theme:e})=>x(e)}
    }
`,G=(0,p.memo)(({lecture:e,handleLectureTileHover:t,handleLectureTileSelect:r,deleteLecture:i,isGhost:a=!1})=>{let o=(0,p.useCallback)(()=>{t?.(e)},[t,e]),s=(0,p.useCallback)(()=>{r?.(e)},[r,e]),c=(0,p.useCallback)(()=>{i?.(e)},[i,e]);return n(W,{lectureId:e.id,"data-lecture-id":e.id,onPointerEnter:o,onPointerDown:s,onTouchMove:o,...a?{"data-ghost":!0}:{},children:e.classes.map((t,r)=>q({day:t.day,begin:t.begin,end:t.end})?n(E,{lecture:e,classIdx:r,deleteLecture:i?c:void 0},`${r}-lecture`):null)})},(e,t)=>e.lecture===t.lecture&&e.handleLectureTileHover===t.handleLectureTileHover&&e.handleLectureTileSelect===t.handleLectureTileSelect&&e.deleteLecture===t.deleteLecture),K=i.div`
    display: contents;
    z-index: 4;

    .custom-timetable:has(.${b}:hover) .${b} {
        ${({theme:e})=>x(e)}
    }
`,oe=(0,p.memo)(({overlaps:e})=>n(K,{children:e.map((e,t)=>n(k,{...e},t))}));function q(e){if(!e)return!1;let t=e.begin/60-N,n=e.end/60-N,{day:r}=e;return s.Mon<=r&&r<=s.Fri&&n-t>=.5}var J=i.div`
    display: contents;
    z-index: 3;
    overflow: hidden;
    pointer-events: auto;

    .custom-timetable:has(
            [data-lecture-id="${({lectureId:e})=>e}"]
                .${b}:hover
        )
        &
        .${b} {
        ${({theme:e})=>x(e)}
    }
`,se=(0,p.memo)(({lecture:e,isGhost:t,deleteLecture:r,handleLectureTileHover:i,handleLectureTileSelect:a})=>{let o=(0,p.useCallback)(()=>{i?.(e)},[i,e]),s=(0,p.useCallback)(()=>{a?.(e)},[a,e]),c=(0,p.useCallback)(()=>{r?.(e)},[r,e]);return e.classes.length==0||e.classes.filter(e=>!q({...e})).length>0?n(J,{lectureId:e.id,"data-lecture-id":e.id,"data-ghost":t?!0:void 0,onPointerEnter:o,onPointerDown:s,onTouchMove:o,children:e.classes.length==0?n(M,{lecture:e,deleteLecture:t?void 0:c},e.id):e.classes.map((r,i)=>{let{day:a,begin:o,end:s}=r;return q({day:a,begin:o,end:s})?null:n(M,{lecture:e,classIdx:i,deleteLecture:t?void 0:c},i)})}):null},(e,t)=>e.lecture===t.lecture),ce=i.div`
    grid-column: ${({dayIndex:e})=>e+1};
    grid-row: 1 / -1;
    position: relative;
    top: calc(
        ${z}px + (100% - ${z*(2-B)}px) *
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
`;function Y({lectures:e,cellWidth:t,needTimeFilter:i=!0,timeFilter:a,setTimeFilter:s,needLectureInteraction:c=!0,needLectureDeletable:l=!0,deleteLecture:d,hoveredLectures:h=[],setHoveredLectures:g,selectedLecture:_=null,setSelectedLecture:v,needCurrentTimeBar:y=!1}){let{t:b}=u(),x=(0,p.useRef)(null),S=(0,p.useRef)(null),C=(0,p.useRef)(null),w=(0,p.useRef)(!1),T=(0,p.useRef)(null),E=(0,p.useRef)(null),D=(0,p.useRef)(null),[O,k]=(0,p.useState)(null),[A,j]=(0,p.useState)([]),[M,U]=(0,p.useState)(!1),[W,K]=(0,p.useState)(null),[J,Y]=(0,p.useState)(-1),X=(0,p.useCallback)(()=>{let e=new Date,t=e.getDay()-1,n=e.getHours()+e.getMinutes()/60;if(n<N||n>P||t<0||t>4){K(null);return}let r=P-N;K((n-N)/r),Y(t)},[]);(0,p.useEffect)(()=>{if(!y)return;X();let e=setInterval(X,60*1e3);return window.addEventListener(`resize`,X),()=>{clearInterval(e),window.removeEventListener(`resize`,X)}},[y,X]);let Z=(0,p.useMemo)(()=>{let t=[...e,...h,_].filter(e=>e!=null),n=new Map;return t.forEach(e=>{n.set(e.id,e)}),Array.from(n.values())},[e,h,_]),le=(0,p.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10),i=parseInt(n.getAttribute(`data-day-idx`)||``,10);if(r==null||i==null)return;let a=r+2;C.current?.style.setProperty(`--hover-day`,(i+1).toString()),C.current?.style.setProperty(`--hover-start`,a.toString()),C.current?.style.setProperty(`--hover-end`,(a+1).toString()),C.current?.setAttribute(`data-is-dragging`,`true`),S.current?.setAttribute(`data-is-dragging`,`true`),w.current=!0,E.current=[r,r+1],D.current=i,T.current=r},[]),Q=(0,p.useCallback)((e,t)=>{let n=document.elementFromPoint(e,t);if(n==null||!n.classList.contains(`background-grid-block`))return;let r=parseInt(n.getAttribute(`data-time-idx`)||``,10);if(r==null)return;let i=T.current==null?r:T.current,a=r,o=Math.min(i,a),s=Math.max(i,a),c=o+2,l=s+3;C.current?.style.setProperty(`--hover-start`,c.toString()),C.current?.style.setProperty(`--hover-end`,l.toString()),E.current=[o,s+1]},[]),$=(0,p.useCallback)(()=>{E.current&&D.current!==null&&s?.({day:D.current,begin:(N+E.current[0]*.5)*60,end:(N+E.current[1]*.5)*60}),E.current&&E.current[1]-E.current[0]>1?(C.current?.setAttribute(`data-is-dragging`,`wait`),S.current?.setAttribute(`data-is-dragging`,`wait`)):(E.current&&E.current[1]-E.current[0]<=1||!a)&&(C.current?.setAttribute(`data-is-dragging`,`false`),S.current?.setAttribute(`data-is-dragging`,`false`),s?.(null)),w.current=!1,E.current=null,D.current=null,T.current=null},[a,s]);(0,p.useEffect)(()=>{a||(C.current?.setAttribute(`data-is-dragging`,`false`),S.current?.setAttribute(`data-is-dragging`,`false`))},[a]);let ue=(0,p.useCallback)(e=>{w.current||!i||le(e.clientX,e.clientY)},[i]),de=(0,p.useCallback)(e=>{!w.current||T.current===null||Q(e.clientX,e.clientY)},[Q]),fe=(0,p.useCallback)(e=>{if(!w.current||T.current===null)return;let t=e.touches[0];t!=null&&Q(t.clientX,t.clientY)},[Q]),pe=(0,p.useCallback)(e=>{c&&g?.([e])},[g,c]),me=(0,p.useCallback)(e=>{c&&v?.(t=>t?.id===e.id?null:e)},[v,c]),he=(0,p.useCallback)(()=>{g?.([]),C.current?.setAttribute(`data-is-hovering`,`false`)},[g]),ge=(0,p.useCallback)(e=>{c&&l&&d?.(e.id)},[l,d]);return(0,p.useEffect)(()=>{if(!c)return;let e=h.map(e=>e.id).join(` `);x.current?.setAttribute(`data-hovered-lectures`,e)},[h,c,e]),(0,p.useEffect)(()=>{if(!c)return;let e=_?_.id.toString():``;e===``?x.current?.setAttribute(`data-selected-lecture`,``):x.current?.setAttribute(`data-selected-lecture`,e)},[_,c,e]),(0,p.useEffect)(()=>{U(Z.some(e=>e.classes.some(e=>!q({...e})))),c&&(h[0]&&!e.some(e=>e.id===h[0]?.id)?k(h[0]):_&&!e.some(e=>e.id===_.id)?k(_):k(null))},[h,_,e,Z]),(0,p.useEffect)(()=>{if(!c)return;let t=[];O&&O.classes.forEach(n=>{e.forEach(e=>{e.classes.forEach(e=>{if(n.day===e.day){let r=n.begin,i=n.end,a=e.begin,o=e.end,s=Math.max(r,a),c=Math.min(i,o);s<c&&t.push({day:n.day,begin:(s/60-N)*2,end:(c/60-N)*2})}})})}),j(O?t:[])},[O,e,c]),n(o,{direction:`column`,gap:8,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,style:{overflow:`hidden`},className:`custom-timetable`,ref:x,"data-hovered-lectures":``,"data-selected-lecture":``,"data-interaction":c,"data-lecture-deletable":l,onPointerLeave:he,onTouchEnd:he,children:r(m,{columns:`1fr`,rows:`${z}px repeat(${L+3}, 1fr)`,gap:`0px`,alignItems:`stretch`,justifyItems:`stretch`,flow:`column`,children:[r(ne,{direction:`row`,gap:V*2,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,className:M?`has-overflow`:``,children:[n(o,{direction:`column`,gap:0,align:`stretch`,padding:`${z*B}px 0 0 0`,children:n(o,{direction:`column`,gap:0,align:`end`,justify:`space-between`,flex:`1 1 auto`,style:{fontSize:`8px`},children:I.map((e,t)=>n(f,{color:`Text.dark`,children:e},t))})}),r(o,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 ${z*(1-B)}px 0`,className:`timetable-grid-wrapper`,children:[n(te,{columns:`repeat(${R.length}, ${t||`1fr`})`,rows:`${z}px repeat(${L}, 1fr)`,flow:`column`,gap:`0px ${V}px`,alignItems:`stretch`,justifyItems:`stretch`,ref:S,"data-is-dragging":`false`,"data-need-time-filter":i,...i?{onPointerDown:ue,onPointerMove:de,onPointerUp:$,onPointerLeave:$,onTouchMove:fe,onTouchEnd:$}:{},children:R.map((e,t)=>r(p.Fragment,{children:[n(o,{direction:`column`,gap:0,align:`center`,children:n(f,{type:`Small`,color:`Text.dark`,children:b(`common.days.${e}`)})}),Array.from({length:L}).map((r,i)=>n(ae,{dayIdx:t,timeIdx:i,className:[`background-grid-block`,i%2==0?`hour`:`half`,i===L-1?`last`:``,i%2==0&&(F[Math.floor(i/2)]||0)%6==0?`bold`:``].join(` `),"data-day-idx":t,"data-time-idx":i},`${e}-${i}-memo`))]},`${e}-${t}`))}),r(ie,{columns:`repeat(${R.length}, ${t||`1fr`})`,rows:`${z}px repeat(${L}, 1fr)`,flow:`column`,gap:`${H}px ${V}px`,alignItems:`stretch`,justifyItems:`stretch`,padding:`0 0 ${z*(1-B)}px 0`,ref:C,"data-is-dragging":!1,children:[i&&n(ee,{}),e.map((e,t)=>n(G,{lecture:e,deleteLecture:ge,handleLectureTileHover:pe,handleLectureTileSelect:me},`${e.id}-lecture-tile-${t}`)),O&&n(G,{lecture:O,isGhost:!0}),O&&n(oe,{overlaps:A}),y&&W!==null&&n(ce,{ratio:W,dayIndex:J})]})]})]}),n(re,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,flex:`1 1 auto`,padding:`0 0 0 18px`,className:`overflow-grid-wrapper`+(M?` has-overflow`:``),children:n(m,{columns:`repeat(${R.length}, ${t||`1fr`})`,rows:`1fr`,gap:`0px ${V}px`,flow:`row`,style:{overflow:`hidden`},children:Z.map((t,r)=>n(se,{lecture:t,isGhost:e.every(e=>e.id!==t.id),deleteLecture:ge,handleLectureTileHover:pe,handleLectureTileSelect:me},`${t.id}-overflow-${r}`))})})]})})}var X=(0,p.memo)(Y,(e,t)=>e.lectures===t.lectures&&e.cellWidth===t.cellWidth&&e.timeFilter===t.timeFilter&&e.needTimeFilter===t.needTimeFilter&&e.needLectureInteraction===t.needLectureInteraction&&e.needLectureDeletable===t.needLectureDeletable&&e.deleteLecture===t.deleteLecture&&e.hoveredLectures===t.hoveredLectures&&e.setHoveredLectures===t.setHoveredLectures&&e.selectedLecture===t.selectedLecture&&e.setSelectedLecture===t.setSelectedLecture&&e.needCurrentTimeBar===t.needCurrentTimeBar);export{X as t};
//# sourceMappingURL=CustomTimeTableGrid-DFoZ9Ce1.js.map