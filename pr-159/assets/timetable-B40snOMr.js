(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`cdff9c3b8d81caaa0369b4e32a9b9c9d184350c0`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b4a3327c-efd0-49fa-89f3-c50cd02cb831`,e._sentryDebugIdIdentifier=`sentry-dbid-b4a3327c-efd0-49fa-89f3-c50cd02cb831`)}catch{}})();import{n as e,r as t,s as n,t as r}from"./jsx-runtime-BYK_UeLP.js";import{v as i}from"./sentryEventFilter-Bh8ZHgnW.js";import{t as a}from"./react-dom-DIg-2Ubf.js";import{k as o,n as s}from"./chunk-62JRHF6Z-CZpY3lsJ.js";import{l as c,n as l,r as u,t as d}from"./emotion-react-jsx-runtime.browser.esm-C1Gp4kNh.js";import{n as f,t as p}from"./FlexWrapper-ioHBAB77.js";import{C as m,O as h,b as g,f as _,h as v,i as y,v as b,w as x,x as S,y as C}from"./axios-C2sCtQjm.js";import{a as w,d as T,f as E,l as D,o as O,s as k,t as A,u as j}from"./useAPI-CoU5D6JM.js";import{i as M,n as N,r as P,t as F}from"./Credits-Dj6-RnG9.js";import{r as I,t as L}from"./Icon-DqNTB8ZE.js";import{t as R}from"./IconButton-B5TTO56d.js";import{t as z}from"./useTranslation-DWiOphx6.js";import{t as B}from"./Close-lz93W0oT.js";import{t as V}from"./Typography-CtH4Tlf2.js";import{t as H}from"./Modal-CF-2RNzl.js";import{t as ee}from"./Button-BqlxLR03.js";import{r as U}from"./proxy-BBPReWEG.js";import{t as te}from"./StyledDivider-D9c_JPvj.js";import{t as W}from"./media-Bh7M6fMo.js";import{t as ne}from"./useIsDevice-sXFmVCA5.js";import{t as re}from"./useThemeStore-C90J-Sfh.js";import{n as ie,t as G}from"./colors-luKkHPmg.js";import{t as ae}from"./LoadingCircle-IoM_zEu8.js";import{i as oe,n as se,t as ce}from"./ReviewBlock-DVo9m_s5.js";import{i as le,n as ue,r as de,t as fe}from"./checkEmpty-DNWusH-0.js";import{n as pe,t as me}from"./ReviewScoreSummary-DxZmxHiw.js";import{n as he,t as ge}from"./CustomTimeTableGrid-CYntcXTK.js";import{n as _e,t as ve}from"./getPlatform-v1Pqbef9.js";var K=n(e()),ye=n(a()),be=n(r(),1),xe=I((0,be.jsx)(`path`,{d:`M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z`}),`CalendarMonth`),Se=I((0,be.jsx)(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z`}),`ContentCopy`),Ce=I((0,be.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorder`),we=I((0,be.jsx)(`path`,{d:`M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z`}),`Image`),Te=I((0,be.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),Ee=I((0,be.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),q=f.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};
    &:last-child {
        border-bottom: none;
    }
`,J=f.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Y=f.kbd`
    height: 18px;
    display: inline-block;
    padding: 3px 6px;
    font-size: 11px;
    line-height: 10px;
    color: ${({theme:e})=>e.colors.Text.default};
    vertical-align: middle;
    background-color: ${({theme:e})=>e.colors.Background.Block.dark};
    border: solid 1px ${({theme:e})=>e.colors.Line.default};
    border-bottom-color: ${({theme:e})=>e.colors.Line.default};
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 ${({theme:e})=>e.colors.Line.default};
`,De=f(V)`
    margin-top: 16px;
    margin-bottom: 8px;
`,Oe=f.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    width: 800px;
`,ke=f.div`
    display: flex;
    flex-direction: column;
`;function Ae(){let{t:e}=z(),t=C(e=>e.isShortcutModalOpen),n=C(e=>e.setIsShortcutModalOpen),r=ve(),i=r===_e.IOS||r===_e.MAC,a=i?`⌘ Cmd`:`Ctrl`;return t?u(H,{isOpen:t,onClose:()=>n(!1),title:e(`timetable.shortcuts.modalTitle`),children:[u(Oe,{children:[u(ke,{children:[l(De,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:0},children:e(`timetable.shortcuts.lectureSection`)}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureMultiple`)}),u(J,{children:[l(Y,{children:a}),`/`,l(Y,{children:`Shift`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureCopy`)}),u(J,{children:[l(Y,{children:a}),l(Y,{children:`C`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureCut`)}),u(J,{children:[l(Y,{children:a}),l(Y,{children:`X`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lecturePaste`)}),u(J,{children:[l(Y,{children:a}),l(Y,{children:`V`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureAll`)}),u(J,{children:[l(Y,{children:a}),l(Y,{children:`A`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureDelete`)}),u(J,{children:[l(Y,{children:`Delete`}),`/`,l(Y,{children:`Backspace`})]})]})]}),u(ke,{children:[l(De,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:0},children:e(`timetable.shortcuts.timetableSection`)}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableUndo`)}),u(J,{children:[l(Y,{children:a}),l(Y,{children:`Z`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableRedo`)}),u(J,{children:[!i&&u(d,{children:[l(Y,{children:a}),l(Y,{children:`Y`}),`/`]}),l(Y,{children:a}),l(Y,{children:`Shift`}),l(Y,{children:`Z`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableAdd`)}),u(J,{children:[l(Y,{children:a}),l(Y,{children:`M`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableDuplicate`)}),u(J,{children:[l(Y,{children:a}),l(Y,{children:`D`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableDelete`)}),u(J,{children:[l(Y,{children:`Delete`}),`/`,l(Y,{children:`Backspace`})]})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableSelect`)}),l(J,{children:l(Y,{children:`1 ~ 9`})})]})]})]}),l(De,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:24},children:e(`timetable.shortcuts.etcSection`)}),u(Oe,{children:[u(ke,{children:[u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcSemester`)}),l(J,{children:l(Y,{children:`[ / ]`})})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcLectureSearchMove`)}),l(J,{children:l(Y,{children:`↑ / ↓`})})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcLectureAddDelete`)}),l(J,{children:l(Y,{children:`Space / Enter`})})]})]}),u(ke,{children:[u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcSelectCancel`)}),l(J,{children:l(Y,{children:`Esc`})})]}),u(q,{children:[l(V,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcShortcutInfo`)}),u(J,{children:[l(Y,{children:a}),l(Y,{children:`/`})]})]})]})]})]}):null}function je(e){throw Error(`Unexpected timetable action: ${String(e)}`)}function Me({currentTimetableLectures:e,nonLoginTimetable:t,setNonLoginTimetable:n}){let{status:r}=y(),i=h(),a=C(e=>e.currentTimetableId),o=C(e=>e.setCurrentTimetableId),s=C(e=>e.year),c=C(e=>e.setYear),l=C(e=>e.semesterEnum),u=C(e=>e.setSemesterEnum),d=a==null?_.timetables:_.timetableDetail(a),[f,p]=(0,K.useState)({}),m=(0,K.useRef)(!1),v=`${a??`my`}-${s}-${l}`,x=f[v]||{undo:[],redo:[]},S=x.undo.length>0,T=x.redo.length>0,E=(0,K.useCallback)(e=>{m.current||p(t=>{let n=t[v]||{undo:[],redo:[]},r=Array.isArray(e)?e:[e];return{...t,[v]:{undo:[...n.undo,r].slice(-50),redo:[]}}})},[v]),{query:D}=A(`GET`,`/semesters`),O=(0,K.useCallback)(e=>{let t=!1,n=!1;if(D.data&&D.data.semesters.length>0){let e=D.data.semesters,r=e[0],i=e[e.length-1];r&&i&&(t=s===r.year&&l===r.semester,n=s===i.year&&l===i.semester)}if(e===`prev`){if(t)return;l===g.SPRING?(u(g.FALL),c(s-1)):u(g.SPRING),o(null)}else{if(n)return;l===g.FALL?(u(g.SPRING),c(s+1)):u(g.FALL),o(null)}},[D.data,l,u,c,o,s]),k=(0,K.useRef)(null),j=(0,K.useCallback)(()=>{k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{i.invalidateQueries({queryKey:[d]})},100)},[i,d]),{requestFunction:M}=A(`PATCH`,d,{onMutate:async e=>{await i.cancelQueries({queryKey:[d]});let t=i.getQueryData([d]);return e.lecture&&i.setQueriesData({queryKey:[d]},t=>t&&{...t,lectures:[...t.lectures,e.lecture]}),{previousTimetable:t}},onError:(e,t,n)=>{i.setQueriesData({queryKey:[d]},n?.previousTimetable)},onSettled:j}),{requestFunction:N}=A(`PATCH`,d,{onMutate:async e=>{await i.cancelQueries({queryKey:[d]});let t=i.getQueryData([d]);return i.setQueriesData({queryKey:[d]},t=>t&&{...t,lectures:t.lectures.filter(t=>t.id!==e.lectureId)}),{previousTimetable:t}},onError:(e,t,n)=>{i.setQueriesData({queryKey:[d]},n?.previousTimetable)},onSettled:j}),P=(0,K.useCallback)((e,t={record:!0})=>{if(r!==`loading`){if(r!==`success`){n(t=>{let n=e.filter(e=>!t.some(t=>t.id===e.id));return[...t,...n]}),t.record!==!1&&E({type:w.ADD,lectures:e.map(e=>({lecture:e,lectureId:e.id}))});return}a&&(e.forEach(e=>{M({action:w.ADD,lectureId:e.id,lecture:e})}),t.record!==!1&&E({type:w.ADD,lectures:e.map(e=>({lecture:e,lectureId:e.id}))}))}},[r,a,M,n,E]),F=(0,K.useCallback)((i,o={record:!0,delay:!1})=>{if(r===`loading`)return;let s=r===`success`?[]:t.filter(e=>i.includes(e.id)),c=r===`success`&&a?e.filter(e=>i.includes(e.id)):[],l=()=>{r===`success`?a&&(i.forEach(e=>{N({action:w.DELETE,lectureId:e}),b(`Remove Lecture from Timetable`,{lectureId:e,timetableId:a})}),c.length>0&&o.record!==!1&&E({type:w.DELETE,lectures:c.map(e=>({lecture:e,lectureId:e.id}))})):(n(e=>e.filter(e=>!i.includes(e.id))),s.length>0&&o.record!==!1&&E({type:w.DELETE,lectures:s.map(e=>({lecture:e,lectureId:e.id}))}))};o.delay?setTimeout(l,300):l()},[r,a,t,e,N,n,E]),I=(0,K.useCallback)(e=>{switch(e.type){case w.ADD:P(e.lectures.map(e=>e.lecture),{record:!1});return;case w.DELETE:F(e.lectures.map(e=>e.lectureId),{record:!1,delay:!0});return;default:return je(e.type)}},[P,F]),L=e=>{switch(e.type){case w.ADD:return{...e,type:w.DELETE};case w.DELETE:return{...e,type:w.ADD};default:return je(e.type)}},R=e=>[...e].reverse().map(L);return{addLectures:P,removeLectures:F,changeSemester:O,undo:(0,K.useCallback)(()=>{if(r===`loading`)return null;let e=f[v]||{undo:[],redo:[]};if(e.undo.length===0)return null;let t=e.undo[e.undo.length-1];if(!t)return null;p(e=>({...e,[v]:{undo:(e[v]?.undo||[]).slice(0,-1),redo:[...e[v]?.redo||[],t].slice(-50)}})),m.current=!0;let n=R(t);return n.forEach(I),m.current=!1,n.flatMap(e=>e.lectures.map(e=>e.lectureId))},[v,I,f,r]),redo:(0,K.useCallback)(()=>{if(r===`loading`)return null;let e=f[v]||{undo:[],redo:[]};if(e.redo.length===0)return null;let t=e.redo[e.redo.length-1];return t?(p(e=>({...e,[v]:{undo:[...e[v]?.undo||[],t].slice(-50),redo:(e[v]?.redo||[]).slice(0,-1)}})),m.current=!0,t.forEach(I),m.current=!1,t.flatMap(e=>e.lectures.map(e=>e.lectureId))):null},[v,I,f,r]),recordAction:E,canUndo:S,canRedo:T}}function Ne(e,t){for(let n of e)for(let e of t)if(n.day==e.day&&n.begin<e.end&&e.begin<n.end)return!0;return!1}function Pe({currentTimetableLectures:e,undo:t,redo:n,addLectures:r,removeLectures:i,timetableIds:a,isLoggedIn:o,changeSemester:s,recordAction:c}){let{t:l}=z(),u=ve(),d=h(),f=C(e=>e.selectedLectures),p=C(e=>e.setSelectedLectures),m=C(e=>e.year),g=C(e=>e.semesterEnum),v=C(e=>e.setCurrentTimetableId),y=C(e=>e.searchLectures),b=C(e=>e.hoveredLectures),x=C(e=>e.setHoveredLectures),S=C(e=>e.currentTimetableId),T=C(e=>e.isShortcutModalOpen),E=C(e=>e.setIsShortcutModalOpen),D=(0,K.useCallback)(()=>E(e=>!e),[E]),O=(0,K.useRef)(null),k=(0,K.useCallback)((t,n)=>{let r=null;if(n){let e=n.target.closest(`[data-class-time]`);e&&(r=Number(e.getAttribute(`data-class-time`)))}p(i=>{let a=u===_e.IOS||u===_e.MAC?n?.metaKey:n?.ctrlKey,o=n?.shiftKey;if(a)return O.current=r,i.some(e=>e.id===t.id)?i.filter(e=>e.id!==t.id):[...i,t];if(o){let n=i[i.length-1];if(!n||r===null||O.current===null)return O.current=r,[...i,t];let a=Math.min(O.current,r),o=Math.max(O.current,r),s=e=>!e.classes||e.classes.length===0?[]:e.classes.map(e=>e.day*24*60+e.begin),c=e.filter(e=>e.id===n.id||e.id===t.id||s(e).some(e=>e>=a&&e<=o)),l=new Set(c.map(e=>e.id)),u=i.filter(e=>!l.has(e.id));return O.current=r,[...u,...c]}return O.current=r,i.length===1&&i[0]?.id===t.id?[]:[t]})},[e,u,p]),j=t=>{if(e.some(e=>e.id===t.id))i([t.id]);else{if(e.some(e=>Ne(e.classes,t.classes))){alert(l(`timetable.addLectureConflict`));return}r([t])}},{requestFunction:M}=A(`POST`,`/timetables`,{onSuccess:e=>{d.invalidateQueries({queryKey:[_.timetables]}),v(e.id)}}),N=(0,K.useCallback)(e=>{o&&M({year:m,semester:g,lectureIds:e})},[o,M,m,g]),{requestFunction:P}=A(`DELETE`,`/timetables`,{onMutate:e=>{S===e.id&&v(null)},onSuccess:()=>{d.invalidateQueries({queryKey:[_.timetables]})}}),F=(0,K.useCallback)(e=>{P({id:e})},[P]),I=(0,K.useRef)(null),L=C(e=>e.triggerFlash);(0,K.useEffect)(()=>{I.current=null},[m,g]);let R=(0,K.useRef)(()=>{});return R.current=d=>{let m=d.target;if(m.tagName===`INPUT`||m.tagName===`TEXTAREA`||m.isContentEditable)return;let h=u===_e.IOS||u===_e.MAC?d.metaKey:d.ctrlKey;if(h&&d.key===`/`){d.preventDefault(),D();return}if(!T){if(h&&d.key.toLowerCase()===`z`){if(d.preventDefault(),o&&S===null)return;let e=d.shiftKey?n():t();e&&e.length>0&&L(e);return}if(h&&d.key.toLowerCase()===`y`){if(d.preventDefault(),o&&S===null)return;let e=n();e&&e.length>0&&L(e);return}if(h&&d.key.toLowerCase()===`a`){d.preventDefault(),p(e);return}if(h&&d.key.toLowerCase()===`c`){f.length>0&&(d.preventDefault(),I.current={lectures:f,sourceTimetableId:S},L(f.map(e=>e.id)));return}if(h&&d.key.toLowerCase()===`x`){f.length>0&&(d.preventDefault(),I.current={lectures:f,sourceTimetableId:S},L(f.map(e=>e.id)),(!o||S!==null)&&(i(f.map(e=>e.id),{delay:!0}),p([])));return}if(h&&d.key.toLowerCase()===`v`){if(o&&S===null){d.preventDefault();return}let t=I.current;if(t&&t.lectures.length>0){d.preventDefault();let n=t.lectures.filter(t=>!e.some(e=>e.id===t.id));if(n.length===0){L(t.lectures.map(e=>e.id));return}let a=e.filter(e=>n.some(t=>Ne(e.classes,t.classes)));if(a.length>0){let e=l(`timetable.pasteLectureConflict`);window.confirm(e)&&(i(a.map(e=>e.id),{record:!1,delay:!0}),r(n,{record:!1}),c([{type:w.DELETE,lectures:a.map(e=>({lecture:e,lectureId:e.id}))},{type:w.ADD,lectures:n.map(e=>({lecture:e,lectureId:e.id}))}]),L(t.lectures.map(e=>e.id)))}else r(n),L(t.lectures.map(e=>e.id))}return}if(h&&d.key.toLowerCase()===`m`){d.preventDefault(),o&&N([]);return}if(h&&d.key.toLowerCase()===`d`){d.preventDefault(),o&&N(e.map(e=>e.id));return}if(d.key===`Delete`||d.key===`Backspace`){if(o&&S===null){d.preventDefault();return}f.length>0?(d.preventDefault(),i(f.map(e=>e.id)),p([])):o&&S!==null&&(d.preventDefault(),window.confirm(l(`timetable.timetableKeyboardDeleteConfirm`))&&F(S));return}if(!h&&d.key===`[`){d.preventDefault(),s(`prev`);return}if(!h&&d.key===`]`){d.preventDefault(),s(`next`);return}if(!h&&d.key===`Escape`){let e=!1;f.length>0&&(p([]),e=!0),b.length>0&&(x([]),e=!0),e&&d.preventDefault();return}if(!h&&/^[1-9]$/.test(d.key)){d.preventDefault();let e=parseInt(d.key)-1;if(e<a.length){let t=a[e];t!==void 0&&v(t)}return}if(!h&&[`ArrowUp`,`ArrowDown`,` `,`Enter`].includes(d.key)){if(y.length>0){d.preventDefault();let e=b[0]?.id,t=e?y.findIndex(t=>t.id===e):-1,n=e=>{requestAnimationFrame(()=>{let t=document.querySelector(`[data-search-lecture-id="${e}"]`);t&&(C.setState({isKeyboardNavigating:!0}),t.scrollIntoView({block:`nearest`}))})};if(d.key===`ArrowUp`){let e=Math.max(0,t-1),r=y[e];r&&(x([r]),n(r.id))}else if(d.key===`ArrowDown`){t===y.length-1&&window.dispatchEvent(new CustomEvent(`request-next-page`));let e=Math.min(y.length-1,t+1),r=y[e];r&&(x([r]),n(r.id))}else if(d.key===` `||d.key===`Enter`){if(o&&S===null){d.preventDefault();return}if(t>=0&&t<y.length){let e=y[t];e&&j(e)}}}return}}},(0,K.useEffect)(()=>{let e=e=>R.current(e),t=e=>{(Math.abs(e.movementX)>0||Math.abs(e.movementY)>0)&&C.setState({isKeyboardNavigating:!1})};return document.addEventListener(`keydown`,e),document.addEventListener(`mousemove`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`mousemove`,t)}},[]),{onLectureSelect:k}}function Fe({status:e,currentTimetableId:t,hasOverlap:n}){return e!==`idle`&&t===null||n}function Ie(e){return e.map(e=>e.name).join(`, `)}function Le(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function Re(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function ze(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var Be=f(p)`
    width: 100%;
`,Ve=f(p)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,He=f(p)`
    flex: 1 0 0;
`,Ue=f(V)`
    white-space: nowrap;
`,We=({selectedLecture:e})=>{let{t}=z();if(!e)return null;let n=Le(e.numPeople,e.limitPeople);return u(d,{children:[u(Be,{direction:`column`,gap:8,children:[u(p,{direction:`row`,gap:6,children:[l(Ue,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.type`)}),l(V,{type:`Normal`,color:`Text.default`,children:e?.type})]}),u(p,{direction:`row`,gap:6,children:[l(Ue,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.department`)}),l(V,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),u(p,{direction:`row`,gap:6,children:[l(Ue,{type:`NormalBold`,color:`Text.default`,children:t(`common.professor`)}),l(V,{type:`Normal`,color:`Text.default`,children:Ie(e?.professors||[])})]}),u(p,{direction:`row`,gap:6,children:[l(Ue,{type:`NormalBold`,color:`Text.default`,children:t(`common.room`)}),l(V,{type:`Normal`,color:`Text.default`,children:ze(e?.classes||[])})]}),u(p,{direction:`row`,gap:6,children:[l(Ue,{type:`NormalBold`,color:`Text.default`,children:t(`common.limit`)}),l(V,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),u(p,{direction:`row`,gap:6,children:[l(Ue,{type:`NormalBold`,color:`Text.default`,children:t(`common.exam`)}),l(V,{type:`Normal`,color:`Text.default`,children:Re(e?.examTimes||[])})]})]}),l(Ve,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e.isEnglish?`Eng`:`한`,t(`common.language`)],[e.credit,t(`common.credit`)],[n,t(`timetable.competitionRate`)]].map(([e,t],n)=>u(He,{direction:`column`,gap:0,align:`center`,children:[l(V,{type:`Bigger`,color:`Text.default`,children:e}),l(V,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},Ge=({selectedCourseId:e,selectedProfessorId:t})=>{let{t:n}=z(),[r,i]=(0,K.useState)(!1),{query:a,setParams:o,data:s}=N(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:c,inView:f}=M({threshold:0});return(0,K.useEffect)(()=>{i(!1);let n=setTimeout(()=>{o({mode:j.DEFAULT,courseId:e??void 0,professorId:t??void 0}),i(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,K.useEffect)(()=>{f&&a.hasNextPage&&!a.isFetchingNextPage&&a.fetchNextPage()},[f,a]),!s||!r?l(ae,{}):u(d,{children:[l(p,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:l(me,{averageGrade:s?.averageGrade,averageLoad:s?.averageLoad,averageSpeech:s?.averageSpeech,reviewCount:s?.reviews.length,labels:{grade:n(`common.grade`),load:n(`common.load`),speech:n(`common.speech`)},fluid:!0})}),l(te,{}),s?.reviews.map(e=>l(ce,{review:e,linkToDictionary:!0},e.id)),a.hasNextPage&&l(ae,{ref:c})]})},Ke=f(p)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,qe=f(p)`
    width: 100%;
`,Je=f(p)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,Ye=f(p)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`,Xe=f(s)`
    text-decoration: none;
`,Ze=f.a`
    text-decoration: none;
`,Qe=f(p)`
    width: 100%;
    text-align: center;
`,$e=f(p)`
    padding: 12px 16px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 12px;
    box-shadow: ${({theme:e})=>e.elevation.low};
`,et=({addLectures:e,removeLectures:t,onMobileModalClose:n,currentTimetableId:r,timetableLectures:i})=>{let a=h(),o=c(),{t:s}=z(),{user:f,status:m}=y(),g=ne(`tablet`),v=C(e=>e.selectedLectures),x=C(e=>e.hoveredLectures),S=C(e=>e.year),T=C(e=>e.semesterEnum),E=v.length===1?v[0]:x.length===1?x[0]:null,[D,O]=(0,K.useState)([]),{query:k,setParams:j}=A(`GET`,`/users/${f?.id}/wishlist`,{enabled:m===`success`&&S!==-1});(0,K.useEffect)(()=>{S!==-1&&j({year:S,semester:T})},[S,T,r]),(0,K.useEffect)(()=>{k.data&&O(k.data.courses.flatMap(e=>e.lectures).map(e=>e.id))},[k.data]);let{requestFunction:M}=A(`PATCH`,`/users/${f?.id}/wishlist`,{onSuccess:()=>{f&&a.invalidateQueries({queryKey:[_.userWishlist(f.id)]})}}),N=(0,K.useRef)(null),P=e=>{let t={syy:String(S),smtDivCd:String(T),subjtCd:e.code,syllabusOpenYn:`0`};return`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${btoa(JSON.stringify(t))}`},I=t=>{if(!i)return;let n=i.some(e=>Ne(e.classes,t.classes));if(Fe({status:m,currentTimetableId:r??null,hasOverlap:n})){n&&alert(s(`timetable.addLectureConflict`));return}e([t]),b(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:r,source:`LectureDetail`})},R=(e,t)=>{if(m===`idle`)return;let n=e?w.DELETE:w.ADD;b(`Update Wishlist`,{action:n,lectureId:t,source:`LectureDetail`}),M({lectureId:t,mode:n})};return l(Ke,{direction:`column`,gap:12,align:`center`,justify:!E&&!v.length?`center`:`start`,children:v.length>1?u(Qe,{direction:`column`,gap:16,align:`stretch`,justify:`flex-start`,children:[u(V,{type:`Bigger`,color:`Text.default`,children:[v.length,s(`timetable.numSelected`)]}),v.map(e=>{let t=he(o.colors.Tile.TimeTable.default),n=t[e.courseId%t.length];return u($e,{direction:`row`,gap:12,align:`center`,children:[l(L,{size:14,color:n,children:l(pe,{})}),u(p,{direction:`column`,gap:4,flex:`1 1 auto`,children:[u(V,{type:`BigBold`,color:`Text.default`,children:[e.name,` `,e.subtitle]}),u(V,{type:`Small`,color:`Text.dark`,children:[e.professors[0]?.name,` `,e.professors.length>1?`${s(`common.professors.over`)} ${e.professors.length-1}${s(`common.professors.people`)} `:` `,`| `,e.department.name,` | `,e.credit,s(`common.credit`)]})]})]},e.id)})]}):E?u(d,{children:[u(Je,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[u(p,{direction:`row`,align:`center`,gap:8,justify:g?`space-between`:`center`,style:{width:`100%`},children:[g&&l(`div`,{style:{width:20}}),l(V,{type:`Bigger`,color:`Text.default`,children:E.name+E.subtitle}),g&&l(L,{size:20,onClick:n,color:o.colors.Text.default,children:l(B,{})})]}),l(V,{type:`Big`,color:`Text.default`,children:E.code+` `+(E.classNo===``?``:`(${E.classNo})`)})]}),u(p,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[l(Xe,{to:`/dictionary?courseId=${E.courseId}`,children:l(V,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:s(`header.dictionary`)})}),l(Ze,{href:P(E),target:`_blank`,children:l(V,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:s(`header.syllabus`)})})]}),l(qe,{direction:`column`,gap:10,align:`center`,children:l(We,{selectedLecture:E})}),l(qe,{ref:N,direction:`column`,gap:10,children:l(Ge,{selectedCourseId:E.courseId,selectedProfessorId:E.professors[0]?.id??-1})}),g&&u(Ye,{direction:`row`,gap:12,justify:`flex-end`,children:[m===`success`&&u(ee,{onClick:()=>{R(D.includes(E.id),E.id),n&&n()},children:[l(L,{size:15,children:l(oe,{})}),l(V,{type:`NormalBold`,children:D.includes(E.id)?s(`timetable.removeFromWishlist`):s(`timetable.addToWishlist`)})]}),(r!=null||m===`idle`)&&(i?.some(e=>e.id===E.id)?u(ee,{type:`selected`,onClick:()=>{t&&t(E.id),n&&n()},children:[l(L,{size:15,children:l(B,{})}),l(V,{type:`NormalBold`,children:s(`timetable.removeFromTimetable`)})]}):u(ee,{type:`selected`,onClick:()=>{I(E),n&&n()},children:[l(L,{size:15,children:l(le,{})}),l(V,{type:`NormalBold`,children:s(`timetable.addToTimetable`)})]}))]})]}):l(F,{})})},tt=f.button`
    width: ${({iconSize:e})=>e}px;
    height: ${({iconSize:e})=>e}px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:disabled {
        cursor: default;
        opacity: 0.3;
    }
`;function nt({ariaLabel:e,color:t,disabled:n,onClick:r,size:i,title:a}){return l(tt,{type:`button`,"aria-label":e,disabled:n,iconSize:i,onClick:r,title:a,children:l(L,{size:i,color:t,children:l(le,{})})})}function rt(e,t){return[e,t].map(e=>e.trim()).filter(Boolean).join(` `)}function it({classNo:e,subtitle:t}){let n=rt(e,t);return n===``?null:l(V,{type:`NormalBold`,color:`Text.default`,children:n})}var at=f.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    transition: all 0.2s ease;
    transform: none;
    box-shadow: none;
    overflow: hidden;
    flex-shrink: 0;
    opacity: 0.2;

    [data-selected-lectures=""] & {
        opacity: 1;
    }

    &[data-is-selected="true"] {
        opacity: 1;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`,ot=f(p)`
    width: 100%;
    padding: 8px 12px;
    word-break: keep-all;
`,st=f.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 18px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    cursor: pointer;

    &:hover,
    &[data-is-hovered="true"],
    &[data-is-selected="true"] {
        background-color: ${({theme:e})=>e.colors.Background.Block.dark};
    }

    ${W.tablet} {
        &:hover,
        &[data-is-hovered="true"],
        &[data-is-selected="true"] {
            background-color: ${({theme:e})=>e.colors.Background.Block.dark};
        }
    }
`,ct=f.div`
    width: 95%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.block};
    align-self: center;
`,lt=(0,K.memo)(({course:e,wishlist:t,currentTimetableId:n,timetableLectures:r,handleSetHoveredLecture:i,handleClearHoveredLecture:a,handleSetSelectedLecture:o,selectedLectures:s,hoveredLecture:d,handleLikeClick:f,handleAddToTimetable:m,t:h})=>{let{status:g}=y(),_=c(),v=ne(`tablet`),b=K.useRef(null);return(0,K.useEffect)(()=>{b.current?.setAttribute(`data-is-selected`,s!=null&&s.length>0&&e.lectures.some(e=>s.some(t=>t.id===e.id))?`true`:`false`)},[s,e]),u(at,{ref:b,"data-is-selected":``,children:[u(ot,{direction:`row`,gap:6,align:`center`,justify:`space-between`,children:[u(p,{direction:`row`,gap:6,align:`center`,style:{opacity:e.completed?.3:1},children:[l(V,{type:`NormalBold`,color:`Text.default`,children:e.name}),l(V,{type:`Normal`,color:`Text.default`,children:e.code})]}),e.completed?l(V,{type:`Normal`,color:`Text.default`,children:h(`common.completedCourse`)}):l(V,{type:`Normal`,color:`Highlight.default`,style:{textAlign:`end`},children:e.type})]}),l(ct,{}),e.lectures.map((c,y)=>{let b=t.includes(c.id),x=d?.some(e=>e.id===c.id),S=s?.some(e=>e.id===c.id),C=r.some(e=>Ne(e.classes,c.classes)),w=Fe({status:g,currentTimetableId:n,hasOverlap:C});return u(K.Fragment,{children:[u(st,{"data-lecture-id":c.id,"data-search-lecture-id":c.id,"data-is-hovered":x,"data-is-selected":S,onPointerEnter:()=>i(c),onPointerLeave:a,onClick:e=>o(c,e),lectureId:c.id,children:[u(p,{direction:`column`,gap:0,children:[v&&x&&u(V,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[c.department.name,` / `,c.type]}),u(p,{direction:`row`,gap:6,style:{opacity:e.completed?.3:1},children:[l(it,{classNo:c.classNo,subtitle:c.subtitle}),l(V,{type:`Normal`,color:`Text.default`,children:Ie(c.professors)})]}),v&&x&&u(V,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[c.classes[0]?.buildingName,` `,c.classes[0]?.roomName,` /`,` `,c.limitPeople]})]}),u(p,{direction:`row`,gap:6,onClick:e=>e.stopPropagation(),children:[!v&&g===`success`&&(b?l(L,{size:15,color:_.colors.Highlight.default,onClick:()=>f(b,c.id),children:l(oe,{})}):l(L,{size:15,color:_.colors.Text.default,onClick:()=>f(b,c.id),children:l(Ce,{})})),(!v||x)&&l(nt,{ariaLabel:h(`timetable.addToTimetable`),color:_.colors.Text.default,disabled:w,onClick:()=>m(c),size:v?30:15,title:n==null&&g===`success`?h(`timetable.myTimeTableLectureAddWarning`):void 0})]})]}),y!==e.lectures.length-1&&l(ct,{})]},c.id)})]})},(e,t)=>e.course===t.course&&e.wishlist===t.wishlist&&e.currentTimetableId===t.currentTimetableId&&e.timetableLectures===t.timetableLectures&&e.selectedLectures===t.selectedLectures&&e.hoveredLecture===t.hoveredLecture),ut=f(p)`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,dt=f(p)`
    height: 36px;
`,ft=f.div`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    gap: 8px;
    border-radius: 6px;
    background-color: ${({isSelected:e,theme:t})=>e?t.colors.Background.Button.highlightDark:t.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`;function pt({year:e,semester:t,timeFilter:n,setTimeFilter:r,data:i,setSearchResult:a,isWishlist:o,setIsWishlist:s,setWishlist:f,sortOption:m,setSortOption:h,handleSearch:g,t:_}){let v=c(),{user:b,status:x}=y(),{query:S,setParams:C}=A(`GET`,`/users/${b?.id}/wishlist`,{enabled:x===`success`&&e!=-1});return(0,K.useEffect)(()=>{S.data!==void 0&&a(o?S.data:i??{courses:[]})},[o,i]),(0,K.useEffect)(()=>{S.data!==void 0&&(f(S.data.courses.flatMap(e=>e.lectures).map(e=>e.id)),o&&a(S.data))},[S.data]),(0,K.useEffect)(()=>{a({courses:[]}),e!==-1&&C({year:e,semester:t})},[e,t]),(0,K.useEffect)(()=>{i!==void 0&&(a(i),s(!1))},[i]),u(d,{children:[l(ut,{direction:`row`,justify:`stretch`,gap:0,children:l(ue,{options:[`type`,`department`,`level`,`term`,`time`],timeFilter:n,setTimeFilter:r,onSearch:g})}),u(p,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[u(ft,{isSelected:o,onClick:()=>{s(e=>!e)},style:{paddingBlock:10},children:[l(L,{size:15,color:v.colors.Highlight.default,children:l(o?oe:Ce,{})}),l(V,{type:`Normal`,color:`Highlight.default`,children:_(`common.wishlist`)})]}),l(dt,{direction:`row`,gap:0,children:l(P,{options:[_(`dictionary.sortOptions.code`),_(`dictionary.sortOptions.popularity`),_(`dictionary.sortOptions.studentCount`)],setSelectedOption:h,selectedOption:m})})]})]})}var mt=(0,K.memo)(pt,(e,t)=>e.year===t.year&&e.semester===t.semester&&e.timeFilter===t.timeFilter&&e.sortOption===t.sortOption&&e.isWishlist===t.isWishlist&&e.data===t.data),ht=f(p)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,gt=f(V)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,_t=f(p)`
    height: fit-content;
    overflow-y: auto;
    position: relative;
    flex-grow: 1;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    /* 상단/하단 페이드 오버레이: 자식 배경에 가려지지 않도록 컨테이너 위에 표시 */
    ${W.tablet} {
        &::before,
        &::after {
            width: 100%;
            content: "";
            position: sticky;
            left: 0;
            right: 0;
            min-height: 40%;
            pointer-events: none; /* 클릭을 막지 않도록 */
            z-index: 1;
        }
        &::before {
            top: 0;
            /* 현재 배경색 기준으로 페이드 */
            background: linear-gradient(
                to bottom,
                ${({theme:e})=>e.colors.Background.Section.default} 0%,
                rgba(0, 0, 0, 0) 100%
            );
        }
        &::after {
            bottom: 0;
            background: linear-gradient(
                to top,
                ${({theme:e})=>e.colors.Background.Section.default} 0%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    }
`,vt=f(p)`
    width: 100%;
`,yt=f(p)`
    width: 100%;
    height: 100%;
    flex-grow: 1;

    ${W.tablet} {
        padding-right: 4px;
    }
`,bt=f.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({theme:e})=>e.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
`,xt=e=>{if(!e)return e;let t=new Map;return e.courses.forEach(e=>{let n=t.get(e.id);if(!n){t.set(e.id,{...e,lectures:[...e.lectures]});return}let r=new Set(n.lectures.map(e=>e.id)),i=[...n.lectures];e.lectures.forEach(e=>{r.has(e.id)||(r.add(e.id),i.push(e))}),t.set(e.id,{...n,lectures:i})}),{...e,courses:Array.from(t.values())}},St=50,Ct=K.memo(({timetableLectures:e,addLectures:t,onLectureSelect:n})=>{let{t:r}=z(),{user:i,status:a}=y(),o=h(),s=C(e=>e.currentTimetableId),c=C(e=>e.year),d=C(e=>e.semesterEnum),f=C(e=>e.hoveredLectures),p=C(e=>e.setHoveredLectures),m=C(e=>e.selectedLectures),g=C(e=>e.setSelectedLectures),v=C(e=>e.timeFilter),x=C(e=>e.setTimeFilter),S=C(e=>e.setSearchLectures),D=(0,K.useCallback)(()=>g([]),[g]),{ref:O,inView:k}=M({threshold:0}),j=ne(`tablet`),P=(0,K.useRef)(null),F=(0,K.useRef)(null),I=(0,K.useRef)(null),{requestFunction:L}=A(`PATCH`,`/users/${i?.id}/wishlist`,{onSuccess:()=>{i&&o.invalidateQueries({queryKey:[_.userWishlist(i.id)]})}}),[R,B]=(0,K.useState)(!1),[V,H]=(0,K.useState)({courses:[]}),[ee,U]=(0,K.useState)(!1),[te,W]=(0,K.useState)([]),[re,ie]=(0,K.useState)(0),{query:G,setParams:oe,data:se}=N(`GET`,`/lectures`,{infinites:[`courses`],limit:St,gcTime:0,select:xt,enabled:R,iterate:e=>{let t=0;return e.courses.forEach(e=>{t+=e.lectures.length}),t<St?0:t}}),ce=(0,K.useCallback)(e=>{if(fe(e)){alert(r(`common.search.empty`));return}U(!1);let t={year:c,semester:d,...e,order:T[re]??E.CODE,offset:0,limit:St,day:e.time?.day??void 0,begin:e.time?.begin??void 0,end:e.time?.end??void 0};oe(t),B(!0),b(`Search Lectures`,{year:c,semester:d,keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``})},[c,d,re]);(0,K.useEffect)(()=>{U(!1),oe(e=>({...e,order:T[re]??E.CODE,offset:0}))},[re]),(0,K.useEffect)(()=>{k&&G.hasNextPage&&!G.isFetchingNextPage&&G.fetchNextPage()},[k,G]),(0,K.useEffect)(()=>{let e=()=>{G.hasNextPage&&!G.isFetchingNextPage&&G.fetchNextPage()};return window.addEventListener(`request-next-page`,e),()=>window.removeEventListener(`request-next-page`,e)},[G]),(0,K.useEffect)(()=>{let e=e=>{P.current&&!P.current.contains(e.target)&&F.current&&F.current.contains(e.target)&&D?.()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let le=K.useMemo(()=>V.courses.flatMap(e=>e.lectures),[V.courses]);(0,K.useEffect)(()=>{S?.(le)},[le,S]);let ue=(0,K.useCallback)(()=>{if(!j)return;if(!I.current){p([]);return}let e=I.current.getBoundingClientRect(),t=e.top+e.height/2,n=document.elementFromPoint(e.left+50,t);if(!n)return;let r=n.closest(`[data-lecture-id]`);if(r){let e=parseInt(r.getAttribute(`data-lecture-id`)||``,10),t=le.find(t=>t.id===e);p(t?[t]:[])}},[j,le,p]);(0,K.useEffect)(()=>{if(!j||!I.current)return;let e=I.current;return e.addEventListener(`scroll`,ue),()=>{e.removeEventListener(`scroll`,ue)}},[j,ue]),(0,K.useEffect)(()=>{if(!j||G.isFetching||m&&m.length>0)return;let e,t=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>{ue()})});return()=>{cancelAnimationFrame(t),cancelAnimationFrame(e)}},[G.isFetching,j,ue,m]);let de=(e,t)=>{if(a===`idle`)return;let n=e?w.DELETE:w.ADD;b(`Update Wishlist`,{action:n,lectureId:t}),W(e?e=>e.filter(e=>e!==t):e=>[...e,t]),L({lectureId:t,mode:n})},pe=n=>{if(a===`success`){if(s==null){alert(r(`timetable.myTimeTableLectureAddWarning`));return}if(e.some(e=>Ne(e.classes,n.classes))){alert(r(`timetable.addLectureConflict`));return}t([n]),b(`Add Lecture to Timetable`,{lectureId:n.id,lectureCode:n.code,courseName:n.name,timetableId:s})}else{if(e.some(e=>Ne(e.classes,n.classes))){alert(r(`timetable.addLectureConflict`));return}t([n]),b(`Add Lecture to Timetable`,{lectureId:n.id,lectureCode:n.code,courseName:n.name,timetableId:null,isGuest:!0})}},me=(0,K.useCallback)(e=>{j||C.getState().isKeyboardNavigating||p(t=>t.length===1&&t[0]?.id===e.id?t:[e])},[j,p]),he=(0,K.useCallback)(()=>{j||C.getState().isKeyboardNavigating||p([])},[j,p]),ge=(0,K.useCallback)((e,t)=>{n?.(e,t)},[n]);return(0,K.useEffect)(()=>{I.current?.setAttribute(`data-hovered-lectures`,f.map(e=>e.id).join(` `))},[f,V]),(0,K.useEffect)(()=>{I.current?.setAttribute(`data-selected-lectures`,m?m.map(e=>e.id).join(` `):``)},[m,V]),u(ht,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,ref:F,children:[l(mt,{year:c,semester:d,timeFilter:v,setTimeFilter:x,sortOption:re,setSortOption:ie,data:se,isWishlist:ee,setIsWishlist:U,setWishlist:W,setSearchResult:H,t:r,handleSearch:ce}),V.courses.length===0?l(gt,{type:`Bigger`,color:`Text.placeholder`,children:r(`dictionary.noResults`)}):l(_t,{direction:`column`,gap:0,ref:I,"data-hovered-lectures":``,"data-selected-lectures":``,children:u(vt,{direction:`row`,gap:0,children:[u(yt,{direction:`column`,gap:12,ref:P,children:[V.courses.map(t=>l(lt,{course:t,hoveredLecture:f,selectedLectures:m,wishlist:te,currentTimetableId:s,timetableLectures:e,handleSetHoveredLecture:me,handleClearHoveredLecture:he,handleSetSelectedLecture:ge,handleLikeClick:de,handleAddToTimetable:pe,t:r},t.id)),!ee&&G.hasNextPage&&l(ae,{ref:O})]}),j&&l(bt,{})]})})]})},(e,t)=>e.timetableLectures===t.timetableLectures&&e.addLectures===t.addLectures&&e.onLectureSelect===t.onLectureSelect);function wt(){var e=[...arguments];return(0,K.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var Tt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Et(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function Dt(e){return`nodeType`in e}function Ot(e){return e?Et(e)?e:Dt(e)?e.ownerDocument?.defaultView??window:window:window}function kt(e){let{Document:t}=Ot(e);return e instanceof t}function At(e){return!Et(e)&&e instanceof Ot(e).HTMLElement}function jt(e){return e instanceof Ot(e).SVGElement}function Mt(e){return e?Et(e)?e.document:Dt(e)?kt(e)?e:At(e)||jt(e)?e.ownerDocument:document:document:document}var Nt=Tt?K.useLayoutEffect:K.useEffect;function Pt(e){let t=(0,K.useRef)(e);return Nt(()=>{t.current=e}),(0,K.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function Ft(){let e=(0,K.useRef)(null);return[(0,K.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,K.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function It(e,t){t===void 0&&(t=[e]);let n=(0,K.useRef)(e);return Nt(()=>{n.current!==e&&(n.current=e)},t),n}function Lt(e,t){let n=(0,K.useRef)();return(0,K.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function Rt(e){let t=Pt(e),n=(0,K.useRef)(null);return[n,(0,K.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function zt(e){let t=(0,K.useRef)();return(0,K.useEffect)(()=>{t.current=e},[e]),t.current}var Bt={};function Vt(e,t){return(0,K.useMemo)(()=>{if(t)return t;let n=Bt[e]==null?0:Bt[e]+1;return Bt[e]=n,e+`-`+n},[e,t])}function Ht(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var Ut=Ht(1),Wt=Ht(-1);function Gt(e){return`clientX`in e&&`clientY`in e}function Kt(e){if(!e)return!1;let{KeyboardEvent:t}=Ot(e.target);return t&&e instanceof t}function qt(e){if(!e)return!1;let{TouchEvent:t}=Ot(e.target);return t&&e instanceof t}function Jt(e){if(qt(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Gt(e)?{x:e.clientX,y:e.clientY}:null}var Yt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[Yt.Translate.toString(e),Yt.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),Xt=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function Zt(e){return e.matches(Xt)?e:e.querySelector(Xt)}var Qt={display:`none`};function $t(e){let{id:t,value:n}=e;return K.createElement(`div`,{id:t,style:Qt},n)}function en(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return K.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function tn(){let[e,t]=(0,K.useState)(``);return{announce:(0,K.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var nn=(0,K.createContext)(null);function rn(e){let t=(0,K.useContext)(nn);(0,K.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function an(){let[e]=(0,K.useState)(()=>new Set),t=(0,K.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,K.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var on={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},sn={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function cn(e){let{announcements:t=sn,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=on}=e,{announce:a,announcement:o}=tn(),s=Vt(`DndLiveRegion`),[c,l]=(0,K.useState)(!1);if((0,K.useEffect)(()=>{l(!0)},[]),rn((0,K.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=K.createElement(K.Fragment,null,K.createElement($t,{id:r,value:i.draggable}),K.createElement(en,{id:s,announcement:o}));return n?(0,ye.createPortal)(u,n):u}var X;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(X||={});function ln(){}function un(e,t){return(0,K.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function dn(){var e=[...arguments];return(0,K.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var fn=Object.freeze({x:0,y:0});function pn(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function mn(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function hn(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function gn(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function _n(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var vn=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=_n(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=pn(_n(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(mn)};function yn(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var bn=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=yn(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(hn)};function xn(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Sn(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:fn}function Cn(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var wn=Cn(1);function Tn(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function En(e,t,n){let r=Tn(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var Dn={ignoreTransform:!1};function On(e,t){t===void 0&&(t=Dn);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=Ot(e).getComputedStyle(e);t&&(n=En(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function kn(e){return On(e,{ignoreTransform:!0})}function An(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function jn(e,t){return t===void 0&&(t=Ot(e).getComputedStyle(e)),t.position===`fixed`}function Mn(e,t){t===void 0&&(t=Ot(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`&&n.test(r)})}function Nn(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(kt(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!At(i)||jt(i)||n.includes(i))return n;let a=Ot(e).getComputedStyle(i);return i!==e&&Mn(i,a)&&n.push(i),jn(i,a)?n:r(i.parentNode)}return e?r(e):n}function Pn(e){let[t]=Nn(e,1);return t??null}function Fn(e){return!Tt||!e?null:Et(e)?e:Dt(e)?kt(e)||e===Mt(e).scrollingElement?window:At(e)?e:null:null}function In(e){return Et(e)?e.scrollX:e.scrollLeft}function Ln(e){return Et(e)?e.scrollY:e.scrollTop}function Rn(e){return{x:In(e),y:Ln(e)}}var Z;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(Z||={});function zn(e){return!Tt||!e?!1:e===document.scrollingElement}function Bn(e){let t={x:0,y:0},n=zn(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var Vn={x:.2,y:.2};function Hn(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=Vn);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=Bn(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=Z.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=Z.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=Z.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=Z.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function Un(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Wn(e){return e.reduce((e,t)=>Ut(e,Rn(t)),fn)}function Gn(e){return e.reduce((e,t)=>e+In(t),0)}function Kn(e){return e.reduce((e,t)=>e+Ln(t),0)}function qn(e,t){if(t===void 0&&(t=On),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Pn(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var Jn=[[`x`,[`left`,`right`],Gn],[`y`,[`top`,`bottom`],Kn]],Yn=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=Nn(t),r=Wn(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of Jn)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Xn=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function Zn(e){let{EventTarget:t}=Ot(e);return e instanceof t?e:Mt(e)}function Qn(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t&&r>t.y}var $n;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})($n||={});function er(e){e.preventDefault()}function tr(e){e.stopPropagation()}var Q;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(Q||={});var nr={start:[Q.Space,Q.Enter],cancel:[Q.Esc],end:[Q.Space,Q.Enter,Q.Tab]},rr=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Q.Right:return{...n,x:n.x+25};case Q.Left:return{...n,x:n.x-25};case Q.Down:return{...n,y:n.y+25};case Q.Up:return{...n,y:n.y-25}}},ir=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new Xn(Mt(t)),this.windowListeners=new Xn(Ot(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add($n.Resize,this.handleCancel),this.windowListeners.add($n.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add($n.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&qn(n),t(fn)}handleKeyDown(e){if(Kt(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=nr,coordinateGetter:a=rr,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:fn;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=Wt(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=Bn(n),p=Un(n),m={x:Math.min(i===Q.Right?p.right-p.width/2:p.right,Math.max(i===Q.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===Q.Down?p.bottom-p.height/2:p.bottom,Math.max(i===Q.Down?p.top:p.top+p.height/2,u.y))},h=i===Q.Right&&!s||i===Q.Left&&!c,g=i===Q.Down&&!l||i===Q.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===Q.Right&&e<=d.x||i===Q.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}r.x=a?n.scrollLeft-e:i===Q.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===Q.Down&&e<=d.y||i===Q.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}r.y=a?n.scrollTop-e:i===Q.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,Ut(Wt(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ir.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=nr,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function ar(e){return!!(e&&`distance`in e)}function or(e){return!!(e&&`delay`in e)}var sr=class{constructor(e,t,n){n===void 0&&(n=Zn(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=Mt(i),this.documentListeners=new Xn(this.document),this.listeners=new Xn(n),this.windowListeners=new Xn(Ot(i)),this.initialCoordinates=Jt(r)??fn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add($n.Resize,this.handleCancel),this.windowListeners.add($n.DragStart,er),this.windowListeners.add($n.VisibilityChange,this.handleCancel),this.windowListeners.add($n.ContextMenu,er),this.documentListeners.add($n.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(or(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(ar(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add($n.Click,tr,{capture:!0}),this.removeTextSelection(),this.documentListeners.add($n.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=Jt(e)??fn,s=Wt(n,o);if(!t&&a){if(ar(a)){if(a.tolerance!=null&&Qn(s,a.tolerance))return this.handleCancel();if(Qn(s,a.distance))return this.handleStart()}if(or(a)&&Qn(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===Q.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},cr={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},lr=class extends sr{constructor(e){let{event:t}=e,n=Mt(t.target);super(e,cr,n)}};lr.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var ur={move:{name:`mousemove`},end:{name:`mouseup`}},dr;(function(e){e[e.RightClick=2]=`RightClick`})(dr||={});var fr=class extends sr{constructor(e){super(e,ur,Mt(e.event.target))}};fr.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==dr.RightClick&&(r?.({event:n}),!0)}}];var pr={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},mr=class extends sr{constructor(e){super(e,pr)}static setup(){return window.addEventListener(pr.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(pr.move.name,e)};function e(){}}};mr.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var hr;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(hr||={});var gr;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(gr||={});function _r(e){let{acceleration:t,activator:n=hr.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=gr.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=yr({delta:d,disabled:!a}),[m,h]=Ft(),g=(0,K.useRef)({x:0,y:0}),_=(0,K.useRef)({x:0,y:0}),v=(0,K.useMemo)(()=>{switch(n){case hr.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case hr.DraggableRect:return i}},[n,i,c]),y=(0,K.useRef)(null),b=(0,K.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),x=(0,K.useMemo)(()=>s===gr.TreeOrder?[...l].reverse():l,[s,l]);(0,K.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of x){if(r?.(e)===!1)continue;let n=l.indexOf(e),i=u[n];if(!i)continue;let{direction:a,speed:s}=Hn(e,i,v,t,f);for(let e of[`x`,`y`])p[e][a[e]]||(s[e]=0,a[e]=0);if(s.x>0||s.y>0){h(),y.current=e,m(b,o),g.current=s,_.current=a;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,b,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,x,u,JSON.stringify(f)])}var vr={x:{[Z.Backward]:!1,[Z.Forward]:!1},y:{[Z.Backward]:!1,[Z.Forward]:!1}};function yr(e){let{delta:t,disabled:n}=e,r=zt(t);return Lt(e=>{if(n||!r||!e)return vr;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Z.Backward]:e.x[Z.Backward]||i.x===-1,[Z.Forward]:e.x[Z.Forward]||i.x===1},y:{[Z.Backward]:e.y[Z.Backward]||i.y===-1,[Z.Forward]:e.y[Z.Forward]||i.y===1}}},[n,t,r])}function br(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return Lt(e=>t==null?null:r??e??null,[r,t])}function xr(e,t){return(0,K.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Sr;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Sr||={});var Cr;(function(e){e.Optimized=`optimized`})(Cr||={});var wr=new Map;function Tr(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,K.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,K.useRef)(e),d=g(),f=It(d),p=(0,K.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,K.useRef)(null),h=Lt(t=>{if(d&&!n)return wr;if(!t||t===wr||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new Yn(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,K.useEffect)(()=>{u.current=e},[e]),(0,K.useEffect)(()=>{d||p()},[n,d]),(0,K.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,K.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Sr.Always:return!1;case Sr.BeforeDragging:return n;default:return!n}}}function Er(e,t){return Lt(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Dr(e,t){return Er(e,t)}function Or(e){let{callback:t,disabled:n}=e,r=Pt(t),i=(0,K.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,K.useEffect)(()=>()=>i?.disconnect(),[i]),i}function kr(e){let{callback:t,disabled:n}=e,r=Pt(t),i=(0,K.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,K.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Ar(e){return new Yn(On(e),e)}function jr(e,t,n){t===void 0&&(t=Ar);let[r,i]=(0,K.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Or({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=kr({callback:a});return Nt(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Mr(e){return Sn(e,Er(e))}var Nr=[];function Pr(e){let t=(0,K.useRef)(e),n=Lt(n=>e?n&&n!==Nr&&e&&t.current&&e.parentNode===t.current.parentNode?n:Nn(e):Nr,[e]);return(0,K.useEffect)(()=>{t.current=e},[e]),n}function Fr(e){let[t,n]=(0,K.useState)(null),r=(0,K.useRef)(e),i=(0,K.useCallback)(e=>{let t=Fn(e.target);t&&n(e=>e?(e.set(t,Rn(t)),new Map(e)):null)},[]);return(0,K.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=Fn(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,Rn(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{Fn(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,K.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>Ut(e,t),fn):Wn(e):fn,[e,t])}function Ir(e,t){t===void 0&&(t=[]);let n=(0,K.useRef)(null);return(0,K.useEffect)(()=>{n.current=null},t),(0,K.useEffect)(()=>{let t=e!==fn;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?Wt(e,n.current):fn}function Lr(e){(0,K.useEffect)(()=>{if(!Tt)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Rr(e,t){return(0,K.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function zr(e){return(0,K.useMemo)(()=>e?An(e):null,[e])}var Br=[];function Vr(e,t){t===void 0&&(t=On);let[n]=e,r=zr(n?Ot(n):null),[i,a]=(0,K.useState)(Br);function o(){a(()=>e.length?e.map(e=>zn(e)?r:new Yn(t(e),e)):Br)}let s=kr({callback:o});return Nt(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function Hr(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return At(t)?t:e}function Ur(e){let{measure:t}=e,[n,r]=(0,K.useState)(null),i=kr({callback:(0,K.useCallback)(e=>{for(let{target:n}of e)if(At(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=Rt((0,K.useCallback)(e=>{let n=Hr(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,K.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var Wr=[{sensor:lr,options:{}},{sensor:ir,options:{}}],Gr={current:{}},Kr={draggable:{measure:kn},droppable:{measure:kn,strategy:Sr.WhileDragging,frequency:Cr.Optimized},dragOverlay:{measure:On}},qr=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},Jr={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new qr,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ln},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Kr,measureDroppableContainers:ln,windowRect:null,measuringScheduled:!1},Yr={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:ln,draggableNodes:new Map,over:null,measureDroppableContainers:ln},Xr=(0,K.createContext)(Yr),Zr=(0,K.createContext)(Jr);function Qr(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new qr}}}function $r(e,t){switch(t.type){case X.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case X.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case X.DragEnd:case X.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case X.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new qr(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case X.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new qr(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case X.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new qr(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function ei(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,K.useContext)(Xr),a=zt(r),o=zt(n?.id);return(0,K.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!Kt(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=Zt(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function ti(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function ni(e){return(0,K.useMemo)(()=>({draggable:{...Kr.draggable,...e?.draggable},droppable:{...Kr.droppable,...e?.droppable},dragOverlay:{...Kr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function ri(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,K.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;Nt(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Sn(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Pn(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var ii=(0,K.createContext)({...fn,scaleX:1,scaleY:1}),ai;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(ai||={});var oi=(0,K.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=Wr,collisionDetection:o=bn,measuring:s,modifiers:c,...l}=e,[u,d]=(0,K.useReducer)($r,void 0,Qr),[f,p]=an(),[m,h]=(0,K.useState)(ai.Uninitialized),g=m===ai.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:b}}=u,x=_==null?null:v.get(_),S=(0,K.useRef)({initial:null,translated:null}),C=(0,K.useMemo)(()=>_==null?null:{id:_,data:x?.data??Gr,rect:S},[_,x]),w=(0,K.useRef)(null),[T,E]=(0,K.useState)(null),[D,O]=(0,K.useState)(null),k=It(l,Object.values(l)),A=Vt(`DndDescribedBy`,t),j=(0,K.useMemo)(()=>b.getEnabled(),[b]),M=ni(s),{droppableRects:N,measureDroppableContainers:P,measuringScheduled:F}=Tr(j,{dragging:g,dependencies:[y.x,y.y],config:M.droppable}),I=br(v,_),L=(0,K.useMemo)(()=>D?Jt(D):null,[D]),R=we(),z=Dr(I,M.draggable.measure);ri({activeNode:_==null?null:v.get(_),config:R.layoutShiftCompensation,initialRect:z,measure:M.draggable.measure});let B=jr(I,M.draggable.measure,z),V=jr(I?I.parentElement:null),H=(0,K.useRef)({activatorEvent:null,active:null,activeNode:I,collisionRect:null,collisions:null,droppableRects:N,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ee=b.getNodeFor(H.current.over?.id),U=Ur({measure:M.dragOverlay.measure}),te=U.nodeRef.current??I,W=g?U.rect??B:null,ne=!!(U.nodeRef.current&&U.rect),re=Mr(ne?null:B),ie=zr(te?Ot(te):null),G=Pr(g?ee??I:null),ae=Vr(G),oe=ti(c,{transform:{x:y.x-re.x,y:y.y-re.y,scaleX:1,scaleY:1},activatorEvent:D,active:C,activeNodeRect:B,containerNodeRect:V,draggingNodeRect:W,over:H.current.over,overlayNodeRect:U.rect,scrollableAncestors:G,scrollableAncestorRects:ae,windowRect:ie}),se=L?Ut(L,y):null,ce=Fr(G),le=Ir(ce),ue=Ir(ce,[B]),de=Ut(oe,le),fe=W?wn(W,oe):null,pe=C&&fe?o({active:C,collisionRect:fe,droppableRects:N,droppableContainers:j,pointerCoordinates:se}):null,me=gn(pe,`id`),[he,ge]=(0,K.useState)(null),_e=xn(ne?oe:Ut(oe,ue),he?.rect??null,B),ve=(0,K.useRef)(null),be=(0,K.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(w.current==null)return;let i=v.get(w.current);if(!i)return;let a=e.nativeEvent,o=new n({active:w.current,activeNode:i,event:a,options:r,context:H,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=k.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=k.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=w.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=k.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:S}};(0,ye.unstable_batchedUpdates)(()=>{r?.(i),h(ai.Initializing),d({type:X.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),E(ve.current),O(a)})},onMove(e){d({type:X.DragMove,coordinates:e})},onEnd:s(X.DragEnd),onCancel:s(X.DragCancel)});ve.current=o;function s(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=H.current,o=null;if(t&&i){let{cancelDrop:s}=k.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===X.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=X.DragCancel)}w.current=null,(0,ye.unstable_batchedUpdates)(()=>{d({type:e}),h(ai.Uninitialized),ge(null),E(null),O(null),ve.current=null;let t=e===X.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=k.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),xe=xr(a,(0,K.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(w.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},w.current=r,be(n,t))},[v,be]));Lr(a),Nt(()=>{B&&m===ai.Initializing&&h(ai.Initialized)},[B,m]),(0,K.useEffect)(()=>{let{onDragMove:e}=k.current,{active:t,activatorEvent:n,collisions:r,over:i}=H.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:de.x,y:de.y},over:i};(0,ye.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[de.x,de.y]),(0,K.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=H.current;if(!e||w.current==null||!t||!i)return;let{onDragOver:a}=k.current,o=r.get(me),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,ye.unstable_batchedUpdates)(()=>{ge(s),a?.(c),f({type:`onDragOver`,event:c})})},[me]),Nt(()=>{H.current={activatorEvent:D,active:C,activeNode:I,collisionRect:fe,collisions:pe,droppableRects:N,draggableNodes:v,draggingNode:te,draggingNodeRect:W,droppableContainers:b,over:he,scrollableAncestors:G,scrollAdjustedTranslate:de},S.current={initial:W,translated:fe}},[C,I,pe,fe,v,te,W,N,b,he,G,de]),_r({...R,delta:y,draggingRect:fe,pointerCoordinates:se,scrollableAncestors:G,scrollableAncestorRects:ae});let Se=(0,K.useMemo)(()=>({active:C,activeNode:I,activeNodeRect:B,activatorEvent:D,collisions:pe,containerNodeRect:V,dragOverlay:U,draggableNodes:v,droppableContainers:b,droppableRects:N,over:he,measureDroppableContainers:P,scrollableAncestors:G,scrollableAncestorRects:ae,measuringConfiguration:M,measuringScheduled:F,windowRect:ie}),[C,I,B,D,pe,V,U,v,b,N,he,P,G,ae,M,F,ie]),Ce=(0,K.useMemo)(()=>({activatorEvent:D,activators:xe,active:C,activeNodeRect:B,ariaDescribedById:{draggable:A},dispatch:d,draggableNodes:v,over:he,measureDroppableContainers:P}),[D,xe,C,B,d,A,v,he,P]);return K.createElement(nn.Provider,{value:p},K.createElement(Xr.Provider,{value:Ce},K.createElement(Zr.Provider,{value:Se},K.createElement(ii.Provider,{value:_e},i)),K.createElement(ei,{disabled:n?.restoreFocus===!1})),K.createElement(cn,{...n,hiddenTextDescribedById:A}));function we(){let e=T?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),si=(0,K.createContext)(null),ci=`button`,li=`Draggable`;function ui(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=Vt(li),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,K.useContext)(Xr),{role:p=ci,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,K.useContext)(g?ii:si),[v,y]=Rt(),[b,x]=Rt(),S=Rr(o,t),C=It(n);return Nt(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:b,data:C}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,K.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===ci?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:S,node:v,over:f,setNodeRef:y,setActivatorNodeRef:x,transform:_}}function di(){return(0,K.useContext)(Zr)}var fi=`Droppable`,pi={timeout:25};function mi(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=Vt(fi),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,K.useContext)(Xr),u=(0,K.useRef)({disabled:n}),d=(0,K.useRef)(!1),f=(0,K.useRef)(null),p=(0,K.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...pi,...i},_=It(h??r),v=kr({callback:(0,K.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[y,b]=Rt((0,K.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),x=It(t);return(0,K.useEffect)(()=>{!v||!y.current||(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,K.useEffect)(()=>(s({type:X.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:x}}),()=>s({type:X.UnregisterDroppable,key:a,id:r})),[r]),(0,K.useEffect)(()=>{n!==u.current.disabled&&(s({type:X.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:b}}var hi=e=>{let{transform:t}=e;return{...t,y:0}};function gi(e,t,n){let r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}var _i=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:gi(r,n,t)};function vi(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function yi(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function bi(e){return e!==null&&e>=0}function xi(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Si(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var Ci={scaleX:1,scaleY:1},wi=e=>{let{rects:t,activeNodeRect:n,activeIndex:r,overIndex:i,index:a}=e,o=t[r]??n;if(!o)return null;let s=Ti(t,a,r);if(a===r){let e=t[i];return e?{x:r<i?e.left+e.width-(o.left+o.width):e.left-o.left,y:0,...Ci}:null}return a>r&&a<=i?{x:-o.width-s,y:0,...Ci}:a<r&&a>=i?{x:o.width+s,y:0,...Ci}:{x:0,y:0,...Ci}};function Ti(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return!r||!i&&!a?0:n<t?i?r.left-(i.left+i.width):a.left-(r.left+r.width):a?a.left-(r.left+r.width):r.left-(i.left+i.width)}var Ei=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=vi(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},Di=`Sortable`,Oi=K.createContext({activeIndex:-1,containerId:Di,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ei,disabled:{draggable:!1,droppable:!1}});function ki(e){let{children:t,id:n,items:r,strategy:i=Ei,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=di(),d=Vt(Di,n),f=s.rect!==null,p=(0,K.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,K.useRef)(p),v=!xi(p,_.current),y=g!==-1&&h===-1||v,b=Si(a);Nt(()=>{v&&m&&u(p)},[v,p,m,u]),(0,K.useEffect)(()=>{_.current=p},[p]);let x=(0,K.useMemo)(()=>({activeIndex:h,containerId:d,disabled:b,disableTransforms:y,items:p,overIndex:g,useDragOverlay:f,sortedRects:yi(p,c),strategy:i}),[h,d,b.draggable,b.droppable,y,p,g,c,f,i]);return K.createElement(Oi.Provider,{value:x},t)}var Ai=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return vi(n,r,i).indexOf(t)},ji=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},Mi={duration:200,easing:`ease`},Ni=`transform`,Pi=Yt.Transition.toString({property:Ni,duration:0,easing:`linear`}),Fi={roleDescription:`sortable`};function Ii(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,K.useState)(null),s=(0,K.useRef)(n);return Nt(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=On(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,K.useEffect)(()=>{a&&o(null)},[a]),a}function Li(e){let{animateLayoutChanges:t=ji,attributes:n,disabled:r,data:i,getNewIndex:a=Ai,id:o,strategy:s,resizeObserverConfig:c,transition:l=Mi}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,K.useContext)(Oi),y=Ri(r,p),b=u.indexOf(o),x=(0,K.useMemo)(()=>({sortable:{containerId:d,index:b,items:u},...i}),[d,i,b,u]),S=(0,K.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:C,node:w,isOver:T,setNodeRef:E}=mi({id:o,data:x,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...c}}),{active:D,activatorEvent:O,activeNodeRect:k,attributes:A,setNodeRef:j,listeners:M,isDragging:N,over:P,setActivatorNodeRef:F,transform:I}=ui({id:o,data:x,attributes:{...Fi,...n},disabled:y.draggable}),L=wt(E,j),R=!!D,z=R&&!m&&bi(f)&&bi(g),B=!_&&N,V=z?(B&&z?I:null)??(s??v)({rects:h,activeNodeRect:k,activeIndex:f,overIndex:g,index:b}):null,H=bi(f)&&bi(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):b,ee=D?.id,U=(0,K.useRef)({activeId:ee,items:u,newIndex:H,containerId:d}),te=u!==U.current.items,W=t({active:D,containerId:d,isDragging:N,isSorting:R,id:o,index:b,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:l,wasDragging:U.current.activeId!=null}),ne=Ii({disabled:!W,index:b,node:w,rect:C});return(0,K.useEffect)(()=>{R&&U.current.newIndex!==H&&(U.current.newIndex=H),d!==U.current.containerId&&(U.current.containerId=d),u!==U.current.items&&(U.current.items=u)},[R,H,d,u]),(0,K.useEffect)(()=>{if(ee===U.current.activeId)return;if(ee!=null&&U.current.activeId==null){U.current.activeId=ee;return}let e=setTimeout(()=>{U.current.activeId=ee},50);return()=>clearTimeout(e)},[ee]),{active:D,activeIndex:f,attributes:A,data:x,rect:C,index:b,newIndex:H,items:u,isOver:T,isSorting:R,isDragging:N,listeners:M,node:w,overIndex:g,over:P,setNodeRef:L,setActivatorNodeRef:F,setDroppableNodeRef:E,setDraggableNodeRef:j,transform:ne??V,transition:re()};function re(){if(ne||te&&U.current.newIndex===b)return Pi;if(!(B&&!Kt(O)||!l)&&(R||W))return Yt.Transition.toString({...l,property:Ni})}}function Ri(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}Q.Down,Q.Right,Q.Up,Q.Left;var zi=f(p)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function Bi({year:e,semester:t,setYear:n,setSemester:r,setCurrentTimetableId:i}){let a=c(),{query:o}=A(`GET`,`/semesters`);(0,K.useEffect)(()=>{let e=o.data?.semesters;if(e&&e.length>0){let t=e[e.length-1];t&&(n(t.year),r(t.semester))}},[o.data]);let{isFirstSemester:s,isLastSemester:d}=(0,K.useMemo)(()=>{if(!o.data)return{isFirstSemester:!1,isLastSemester:!1};let n=o.data.semesters,r=n[0],i=n[n.length-1];return!r||!i?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===r.year&&t===r.semester,isLastSemester:e===i.year&&t===i.semester}},[o.data,e,t]);return u(zi,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[l(R,{onClick:s?void 0:()=>{s||(t===g.SPRING?(r(g.FALL),n(e-1)):r(g.SPRING),i(null))},styles:{padding:2.5},children:l(L,{size:20,color:s?a.colors.Text.disable:a.colors.Highlight.default,onClick:s?void 0:()=>{},children:l(Te,{})})}),l(V,{color:`Highlight.default`,children:e}),l(V,{color:`Highlight.default`,children:S(t)}),l(R,{onClick:d?void 0:()=>{d||(t===g.FALL?(r(g.SPRING),n(e+1)):r(g.FALL),i(null))},styles:{padding:2.5},children:l(L,{size:20,color:d?a.colors.Text.disable:a.colors.Highlight.default,onClick:d?void 0:()=>{},children:l(Ee,{})})})]})}var Vi=f.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,Hi={default:f(Vi)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:f(Vi)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},Ui=f.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,Wi=e=>l(Ui,{children:e}),Gi=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=Hi[e],a=()=>Wi(t);return l(i,{ref:n,...r,onClick:r.onClick,children:l(a,{})})};function Ki(e,t,n){return e.filter(e=>e.year===t&&e.semester===n).sort((e,t)=>e.timeTableOrder-t.timeTableOrder)}function qi({status:e,currentTimetableId:t,semesterKey:n,autoSelectedSemesterKeys:r,preserveMyTimetableSelection:i,timetables:a}){return e!==`success`||a.length===0||i&&t==null||r.includes(n)?null:{semesterKey:n,timetableId:t==null?a[0]?.id??null:null}}var Ji=f(p)`
    width: 100%;
    max-width: 992px;

    ${W.laptop} {
        max-width: 635px;
    }

    ${W.tablet} {
        max-width: 100%;
    }
`,Yi=f(p)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,Xi=f(V)`
    outline: none;
    user-select: none;
`,Zi=({timetable:e,isSelected:t,onClick:n,onCopy:r,onDelete:i,onNameChange:a,isDragging:o})=>{let s=c(),{attributes:d,listeners:f,setNodeRef:m,transform:h,transition:g}=Li({id:e.id}),_={transform:(e=>{if(!e)return``;let{x:t,y:n}=e;return`translate3d(${t}px, ${n}px, 0)`})(h),transition:g,touchAction:`manipulation`,opacity:o?.5:1};return l(`div`,{ref:m,style:_,...d,...f,children:u(Gi,{type:t?`selected`:`default`,onClick:n,children:[l(Xi,{onClick:e=>{t&&(e.stopPropagation(),e.currentTarget.contentEditable=`true`,e.currentTarget.focus())},onBlur:t=>{let n=t.currentTarget.textContent||``;t.currentTarget.contentEditable=`false`,a(e.id,n)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},contentEditable:!1,suppressContentEditableWarning:!0,type:`Normal`,color:t?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:e.name?e.name:`No Title`}),u(p,{direction:`row`,gap:0,align:`center`,children:[t&&l(R,{onClick:r,styles:{padding:5},children:l(L,{size:15,onClick:()=>{},color:t?s.colors.Highlight.default:s.colors.Text.lighter,children:l(Se,{})})}),l(R,{onClick:i,styles:{padding:3.75},children:l(L,{size:17.5,onClick:()=>{},color:t?s.colors.Highlight.default:s.colors.Text.lighter,children:l(B,{})})})]})]})})},Qi=({timeTableLectures:e,timetablesQuery:t})=>{let{t:n}=z(),{status:r}=y(),i=c(),a=C(e=>e.currentTimetableId),o=C(e=>e.setCurrentTimetableId),s=C(e=>e.setCurrentTimetableName),d=C(e=>e.year),f=C(e=>e.semesterEnum),m=C(e=>e.setYear),h=C(e=>e.setSemesterEnum),g=C(e=>e.autoSelectedSemesterKeys),_=C(e=>e.markSemesterAutoSelected),v=C(e=>e.resetAutoSelectedSemesters),b=C(e=>e.pendingMyTimetableSelection),x=C(e=>e.setPendingMyTimetableSelection),{requestFunction:S}=A(`POST`,`/timetables`,{onSuccess:e=>{t.refetch(),o(e.id)}}),{requestFunction:w}=A(`DELETE`,`/timetables`,{onMutate:e=>{a===e.id&&o(null)},onSuccess:()=>{t.refetch()}}),{requestFunction:T}=A(`PATCH`,`/timetables`,{onSuccess:()=>{t.refetch()}}),[E,D]=(0,K.useState)([]),[O,k]=(0,K.useState)(null),j=dn(un(fr,{activationConstraint:{distance:8}}),un(mr,{activationConstraint:{delay:500,tolerance:5}}));return(0,K.useEffect)(()=>{let e=Ki(t.data?.timetables??[],d,f);if(D(e),a!=null&&t.data?.timetables.forEach(e=>{e.id===a&&s(e.name)}),r!==`success`){v();return}let n=`${d}-${f}`;if(b){if(d<0)return;_(n),x(!1);return}let i=qi({status:r,currentTimetableId:a,semesterKey:n,autoSelectedSemesterKeys:g,preserveMyTimetableSelection:!1,timetables:e});i!=null&&(_(i.semesterKey),i.timetableId!=null&&o(i.timetableId))},[t.data,d,f,r,a,g,_,v,b,x,o]),(0,K.useEffect)(()=>{s(a==null?n(`timetable.myTimetable`):E.find(e=>e.id===a)?.name||``)},[a,E,s,n]),u(Ji,{direction:`row`,justify:`space-between`,align:`stretch`,flex:`0 1 auto`,gap:4,style:{overflowX:`hidden`},children:[u(p,{direction:`row`,gap:3,flex:`0 1 auto`,style:{overflowX:`auto`},children:[u(Gi,{type:a==null?`selected`:`default`,onClick:()=>{x(!0),o(null)},children:[l(V,{type:`Normal`,color:a===null?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:n(`timetable.myTimetable`)}),a===null&&r===`success`&&l(R,{onClick:t=>{t.stopPropagation(),S({year:d,semester:f,lectureIds:e.map(e=>e.id)})},styles:{padding:5},children:l(L,{size:15,color:i.colors.Highlight.default,onClick:()=>{},children:l(Se,{})})})]},`my-timetable`),r===`success`&&u(Yi,{direction:`row`,gap:3,flex:`1 1 auto`,onWheel:e=>{if(e.deltaY===0)return;let t=e.currentTarget;t.scrollLeft+=e.deltaY},children:[l(oi,{sensors:j,collisionDetection:vn,onDragStart:e=>{k(e.active.id)},onDragEnd:e=>{let{active:t,over:n}=e;if(k(null),n&&t.id!==n.id){let e=E.findIndex(e=>e.id===t.id),r=E.findIndex(e=>e.id===n.id),i=vi(E,e,r);D(i);let a=t.id;T({id:a,order:r})}},modifiers:[hi,_i],children:l(ki,{items:E.map(e=>e.id),strategy:wi,children:E.map(t=>l(Zi,{timetable:t,isSelected:a===t.id,isDragging:O===t.id,onClick:()=>{o(t.id)},onCopy:t=>{t.stopPropagation(),S({year:d,semester:f,lectureIds:e.map(e=>e.id)})},onDelete:e=>{e.stopPropagation(),w({id:t.id})},onNameChange:(e,t)=>{D(n=>n.map(n=>n.id===e?{...n,name:t}:n)),T({id:e,name:t})}},t.id))})}),l(Gi,{onClick:()=>{S({year:d,semester:f,lectureIds:[]})},children:l(R,{onClick:e=>{},styles:{padding:3.75},children:l(L,{size:17.5,color:i.colors.Text.default,onClick:()=>{},children:l(le,{})})})})]})]}),l(p,{direction:`row`,gap:0,align:`center`,children:l(Bi,{year:d,semester:f,setYear:m,setSemester:h,setCurrentTimetableId:o})})]})},$i=f.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;

    ${W.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px 8px;
    }
`,ea=f.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 16px;
    color: ${({theme:e})=>e.colors.Text.default};

    @media (hover: hover) {
        &:hover {
            color: ${({theme:e})=>e.colors.Highlight.default};
        }
    }

    ${W.tablet} {
        padding-left: 0;
    }
`,ta=f.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;

    ${W.mobile} {
        font-size: 12px;
    }
`,na=f.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    white-space: nowrap;

    ${W.mobile} {
        font-size: 12px;
    }
`,ra=f.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({theme:e})=>e.colors.Highlight.default};

    ${W.mobile} {
        display: none;
    }
`;function ia({hover:e,setHover:t,timetableLectures:n}){let{t:r}=z(),{lecturesByType:i,creditsByType:a}=(0,K.useMemo)(()=>{let e={basicRequired:0,basicElective:0,majorRequired:0,majorElective:0,humanitiesSocial:0,etc:0},t={basicRequired:[],basicElective:[],majorRequired:[],majorElective:[],humanitiesSocial:[],etc:[]};return n.forEach(n=>{n.type.includes(`기초필수`)?(e.basicRequired+=n.credit,t.basicRequired.push(n)):n.type.includes(`기초선택`)?(e.basicElective+=n.credit,t.basicElective.push(n)):n.type.includes(`전공필수`)?(e.majorRequired+=n.credit,t.majorRequired.push(n)):n.type.includes(`전공선택`)?(e.majorElective+=n.credit,t.majorElective.push(n)):n.type.includes(`인문`)?(e.humanitiesSocial+=n.credit,t.humanitiesSocial.push(n)):(e.etc+=n.credit,e.etc+=n.creditAU,t.etc.push(n))}),{lecturesByType:t,creditsByType:e}},[n]);function o(e){for(let t of[`basicRequired`,`basicElective`,`majorRequired`,`majorElective`,`humanitiesSocial`,`etc`])if(e.type.includes(r(`common.type.${t}`)))return t;return`etc`}function s(t,n){if(!e||e.length==0||e?.length>1)return``;let r=e[0];return t.map(e=>e.id).includes(r.id)?`(${r.creditAU?r.creditAU:r.credit})`:n===o(r)?`(+${r.creditAU?r.creditAU:r.credit})`:``}return u($i,{children:[u(ea,{onMouseEnter:()=>t(i.basicRequired),onMouseLeave:()=>t([]),children:[l(ta,{children:r(`common.type.basicRequiredShort`)}),l(na,{children:a.basicRequired}),l(ra,{children:s(i.basicRequired,`basicRequired`)})]}),u(ea,{onMouseEnter:()=>t(i.basicElective),onMouseLeave:()=>t([]),children:[l(ta,{children:r(`common.type.basicElectiveShort`)}),l(na,{children:a.basicElective}),l(ra,{children:s(i.basicElective,`basicElective`)})]}),u(ea,{onMouseEnter:()=>t(i.majorRequired),onMouseLeave:()=>t([]),children:[l(ta,{children:r(`common.type.majorRequiredShort`)}),l(na,{children:a.majorRequired}),l(ra,{children:s(i.majorRequired,`majorRequired`)})]}),u(ea,{onMouseEnter:()=>t(i.majorElective),onMouseLeave:()=>t([]),children:[l(ta,{children:r(`common.type.majorElectiveShort`)}),l(na,{children:a.majorElective}),l(ra,{children:s(i.majorElective,`majorElective`)})]}),u(ea,{onMouseEnter:()=>t(i.humanitiesSocial),onMouseLeave:()=>t([]),children:[l(ta,{children:r(`common.type.humanitiesSocialElectiveShort`)}),l(na,{children:a.humanitiesSocial}),l(ra,{children:s(i.humanitiesSocial,`humanitiesSocial`)})]}),u(ea,{onMouseEnter:()=>t(i.etc),onMouseLeave:()=>t([]),children:[l(ta,{children:r(`common.type.etcShort`)}),l(na,{children:a.etc}),l(ra,{children:s(i.etc,`etc`)})]})]})}var aa=f.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${W.mobile} {
        gap: 20px;
    }
`,oa=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,sa=f.span`
    font-size: 20px;
    font-weight: 300;
`,ca=f.span`
    font-size: 10px;
    font-weight: 400;
`,la=f.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${W.mobile} {
        gap: 20px;
    }
`,ua=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`,da=f.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.Text.default};
`,fa=f.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.Text.dark};
`;function pa({timetableLectures:e,hover:t,setHover:n}){let{t:r}=z(),i=(0,K.useMemo)(()=>{let n=e.reduce((e,t)=>e+t.credit,0),r=e.reduce((e,t)=>e+t.creditAU,0);if(t&&t.length==1){let i=t[0];e.some(e=>e.id===i.id)||(n+=i.credit,r+=i.creditAU)}let i=0,a=0,o=0,s=e.length;return e.forEach(e=>{i+=e.averageGrade,a+=e.averageLoad,o+=e.averageSpeech,e.averageGrade===0&&e.averageLoad===0&&e.averageSpeech===0&&--s}),i/=s,a/=s,o/=s,{totalCredits:n,totalAU:r,avgGrade:i,avgLoad:a,avgSpeech:o}},[e,t]);return u(d,{children:[u(aa,{children:[u(oa,{onMouseEnter:()=>n(e.filter(e=>e.credit>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.credit>0),children:[l(sa,{children:i.totalCredits}),l(ca,{children:r(`common.credit`)})]}),u(oa,{onMouseEnter:()=>n(e.filter(e=>e.creditAU>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.creditAU>0),children:[l(sa,{children:i.totalAU}),l(ca,{children:`AU`})]})]}),u(la,{children:[u(ua,{children:[l(da,{children:D(i.avgGrade/3)}),l(fa,{children:r(`common.grade`)})]}),u(ua,{children:[l(da,{children:D(i.avgLoad/3)}),l(fa,{children:r(`common.load`)})]}),u(ua,{children:[l(da,{children:D(i.avgSpeech/3)}),l(fa,{children:r(`common.speech`)})]})]})]})}var ma=f(p)`
    overflow-y: auto;
    min-height: 0;
`,ha=f.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`,ga=f.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({color:e,theme:t})=>e||t.colors.Text.default};
    min-width: 16px;
`,_a=f(p)`
    color: ${({highlighted:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,va=[{day:O.Mon,color:`#E54C65`},{day:O.Tue,color:`#F5A623`},{day:O.Wed,color:`#7ED321`},{day:O.Thu,color:`#4A90D9`},{day:O.Fri,color:`#9B59B6`}];function ya({timetableLectures:e,hover:t,setHover:n}){let{t:r}=z(),i=(0,K.useMemo)(()=>{let n={[O.Mon]:[],[O.Tue]:[],[O.Wed]:[],[O.Thu]:[],[O.Fri]:[]};if(e.forEach(e=>{e.examTimes.forEach(t=>{if(t==null)return;let r=t.day;n[r]&&n[r].push({lectureName:e.name,lectureId:e.id,time:t.str.split(` `).slice(1).join(` `)})})}),t&&t.length==1){let r=t[0];e.some(e=>e.id===r.id)||r.examTimes.forEach(e=>{if(e==null)return;let t=e.day;n[t]&&n[t].push({lectureName:r.name,lectureId:r.id,time:e.str})})}return n},[e,t]);return u(ma,{direction:`column`,gap:15,style:{width:`100%`},flex:`1 1 0`,children:[l(V,{type:`NormalBold`,color:`Text.default`,children:r(`timetable.examTimetable`)}),va.map(({day:r,color:a})=>{let o=i[r];return!o||o.length===0?null:u(ha,{children:[l(ga,{color:a,onMouseEnter:()=>{n(e.filter(e=>e.examTimes.some(e=>e?.day===r)))},onMouseLeave:()=>n([]),children:k(r,!0)}),l(p,{direction:`column`,gap:2,children:o.sort((e,t)=>e.time.localeCompare(t.time)).map((r,i)=>u(_a,{direction:`column`,gap:0,highlighted:t?.some(e=>e.id===r.lectureId),onMouseEnter:()=>n(e.filter(e=>e.id===r.lectureId)),onMouseLeave:()=>n([]),children:[l(V,{type:`NormalBold`,children:r.lectureName}),l(V,{type:`Normal`,children:r.time})]},i))})]},r)})]})}var ba=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(e=>e??`#CCCCCC`),xa=f.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`,Sa=f.img`
    object-fit: cover;
    object-position: center;
    filter: ${({isDarkMode:e})=>e?`invert(100%) sepia(100%) grayscale(100%) brightness(0.7)`:`none`};

    /* Performance Optimization: Force GPU layer to prevent repaints on hover */
    transform: translateZ(0);
    will-change: filter;
`,Ca=f.div`
    display: flex;
    gap: 4px;
    align-items: center;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    left: ${({left:e})=>e}%;
    top: ${({top:e})=>e}%;
    position: absolute;
    font-size: 10px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};
    border-radius: 4px;
    padding: 2px 4px;
`,wa=f.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({theme:e})=>e.colors.Background.Section.default};
    position: absolute;
    top: 17px;
`,Ta=f.div`
    background-color: ${({theme:e,courseId:t,highlighted:n})=>n?e.colors.Highlight.default:(()=>{let n=ba(e.colors?.Tile?.TimeTable?.default);return n[t%n.length]})()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`,Ea=new Map([[`E2`,{left:50,top:67}],[`E3`,{left:56,top:61}],[`E6`,{left:57,top:52}],[`E7`,{left:65,top:50}],[`E11`,{left:45,top:47}],[`E16`,{left:45,top:40}],[`N1`,{left:75,top:30}],[`N3`,{left:45,top:34}],[`N4`,{left:53,top:32}],[`N5`,{left:63,top:28}],[`N7`,{left:27,top:30}],[`N22`,{left:67,top:26}],[`N24`,{left:65,top:22}],[`N25`,{left:49,top:26}],[`N27`,{left:47,top:17}],[`W1`,{left:26,top:68}],[`W8`,{left:27,top:44}],[`W16`,{left:34,top:73}]]);function Da({timetableLectures:e,hover:t,setHover:n}){let{displayedTheme:r}=re(),i=(0,K.useMemo)(()=>l(Sa,{src:`/campus_map.svg`,alt:`Campus Map`,isDarkMode:r===`dark`,decoding:`async`}),[r]);return u(xa,{children:[i,Array.from(Ea).map(([r,{left:i,top:a}])=>{let o=e.filter(e=>e.classes.some(e=>e.buildingCode.includes(r)));return t?.forEach(t=>{e.includes(t)||t.classes.some(e=>e.buildingCode.includes(r))&&o.push(t)}),o.length===0?null:u(Ca,{left:i,top:a,onMouseEnter:()=>{n(o)},onMouseLeave:()=>{n([])},highlighted:t?.some(e=>o.includes(e))??!1,children:[l(wa,{}),r,o.map(e=>l(Ta,{courseId:e.courseId,highlighted:t?.includes(e)??!1},e.id))]},r)})]})}var Oa=t((e=>{e.createCanvas=function(e,t){return Object.assign(document.createElement(`canvas`),{width:e,height:t})},e.loadImage=function(e,t){return new Promise(function(n,r){let i=Object.assign(document.createElement(`img`),t);function a(){i.onload=null,i.onerror=null}i.onload=function(){a(),n(i)},i.onerror=function(){a(),r(Error(`Failed to load the image "`+e+`"`))},i.src=e})}}))(),ka=(e=>(e.DAILY=`DAILY`,e.HOURLY=`HOURLY`,e.MINUTELY=`MINUTELY`,e.MONTHLY=`MONTHLY`,e.SECONDLY=`SECONDLY`,e.WEEKLY=`WEEKLY`,e.YEARLY=`YEARLY`,e))(ka||{}),Aa=(e=>(e.FR=`FR`,e.MO=`MO`,e.SA=`SA`,e.SU=`SU`,e.TH=`TH`,e.TU=`TU`,e.WE=`WE`,e))(Aa||{});function ja(e,t,n){if(Array.isArray(t))e.x=t.map(e=>{if(Array.isArray(e))return e;if(typeof e.key!=`string`||typeof e.value!=`string`)throw Error(`Either key or value is not a string!`);if(e.key.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e.key,e.value]});else if(typeof t==`object`)e.x=Object.entries(t).map(([e,t])=>{if(typeof e!=`string`||typeof t!=`string`)throw Error(`Either key or value is not a string!`);if(e.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e,t]});else if(typeof t==`string`&&typeof n==`string`){if(t.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");e.x.push([t,n])}else return e.x.map(e=>({key:e[0],value:e[1]}))}function Ma(e,t){if(e instanceof Date&&isNaN(e.getTime())||typeof e==`string`&&isNaN(new Date(e).getTime()))throw Error(`\`${t}\` has to be a valid date!`);if(e instanceof Date||typeof e==`string`||typeof e==`object`&&e&&(Ya(e)||Ja(e)||qa(e)||Ka(e))||Ba(e)&&e.isValid===!0||(Va(e)||za(e))&&e.isValid())return e;throw Error(`\`${t}\` has to be a valid date!`)}function Na(e,t){let n=Object.values(e),r=String(t).toUpperCase();if(!r||!n.includes(r))throw Error(`Input must be one of the following: ${n.join(`, `)}`);return r}function Pa(e,t){let n=null;if(typeof t==`string`){let e=t.match(/^(.+) ?<([^>]+)>$/);e?n={email:e[2].trim(),name:e[1].trim()}:t.includes(`@`)&&(n={email:t.trim(),name:t.trim()})}else typeof t==`object`&&(n={email:t.email,mailto:t.mailto,name:t.name,sentBy:t.sentBy});if(!n&&typeof t==`string`)throw Error("`"+e+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n)throw Error("`"+e+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n.name)throw Error("`"+e+".name` is empty!");if(!n.email)throw Error("`"+e+".email` is empty!");return n}function $(e,t){return String(e).replace(t?/[\\"]/g:/[\\;,]/g,function(e){return`\\`+e}).replace(/(?:\r\n|\r|\n)/g,`\\n`)}function Fa(e){return e.split(`\r
`).map(function(e){let t=``,n=0;for(let r=0;r<e.length;r++){let i=e.charAt(r);i>=`\ud800`&&i<=`\udbff`&&(i+=e.charAt(++r));let a=new TextEncoder().encode(i).length;n+=a,n>74&&(t+=`\r
 `,n=a),t+=i}return t}).join(`\r
`)}function Ia(e,t,n,r){if(e?.startsWith(`/`)&&(e=e.substr(1)),typeof t==`string`||t instanceof Date){let i=Xa(t)?t.withTimeZone(e):new Date(t),a=i.getUTCFullYear()+String(i.getUTCMonth()+1).padStart(2,`0`)+i.getUTCDate().toString().padStart(2,`0`);return e&&(a=i.getFullYear()+String(i.getMonth()+1).padStart(2,`0`)+i.getDate().toString().padStart(2,`0`)),n?a:e?(a+=`T`+i.getHours().toString().padStart(2,`0`)+i.getMinutes().toString().padStart(2,`0`)+i.getSeconds().toString().padStart(2,`0`),a):(a+=`T`+i.getUTCHours().toString().padStart(2,`0`)+i.getUTCMinutes().toString().padStart(2,`0`)+i.getUTCSeconds().toString().padStart(2,`0`)+(r?``:`Z`),a)}if(Va(t)){let i=e?Ua(t)&&!t.tz()?t.clone().tz(e):t:r||n&&Ua(t)&&t.tz()?t:t.utc();return i.format(`YYYYMMDD`)+(n?``:`T`+i.format(`HHmmss`)+(r||e?``:`Z`))}if(Ba(t)){let i=e?t.setZone(e):r||n&&t.zone.type!==`system`?t:t.setZone(`utc`);return i.toFormat(`yyyyLLdd`)+(n?``:`T`+i.toFormat(`HHmmss`)+(r||e?``:`Z`))}if(Ya(t)){let i=t;return e&&(i=t.withTimeZone(t.timeZoneId)),!e&&t.timeZoneId!==`UTC`&&(i=t.withTimeZone(`UTC`)),Ia(null,i.toPlainDateTime(),n,r||!!e)}if(Ja(t)){if(n)return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`);if(e){let i=t.toZonedDateTime(e);return Ia(e,i,n,r)}return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`)+`T`+t.hour.toString().padStart(2,`0`)+t.minute.toString().padStart(2,`0`)+t.second.toString().padStart(2,`0`)+(r||e?``:`Z`)}if(qa(t))return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`)+(n?``:`T000000`+(r||e?``:`Z`));if(Ka(t)){let i=e||`UTC`,a=t.toZonedDateTimeISO(i);return Ia(e,a,n,r)}{let i=t;if(e)i=typeof t.tz==`function`?t.tz(e):t;else if(!r){if(typeof t.utc==`function`)i=t.utc();else throw Error(`Unable to convert dayjs object to UTC value: UTC plugin is not available!`)}return i.format(`YYYYMMDD`)+(n?``:`T`+i.format(`HHmmss`)+(r||e?``:`Z`))}}function La(e,t,n,r){let i=``,a=r?.floating||!1;return r?.timezone&&(i=`;TZID=`+r.timezone,a=!0),t+i+`:`+Ia(e,n,!1,a)}function Ra(e){let t=e.x.map(([e,t])=>e.toUpperCase()+`:`+$(t,!1)).join(`\r
`);return t.length?t+`\r
`:``}function za(e){return typeof e==`object`&&!!e&&!(e instanceof Date)&&!Va(e)&&!Ba(e)&&!Ga(e)}function Ba(e){return typeof e==`object`&&!!e&&`toJSDate`in e&&typeof e.toJSDate==`function`&&!Ga(e)}function Va(e){return e!=null&&e._isAMomentObject!=null&&!Ga(e)}function Ha(e){return typeof e==`object`&&!!e&&`asSeconds`in e&&typeof e.asSeconds==`function`}function Ua(e){return Va(e)&&`tz`in e&&typeof e.tz==`function`}function Wa(e){return typeof e==`object`&&!!e&&`between`in e&&typeof e.between==`function`&&typeof e.toString==`function`}function Ga(e){return Ya(e)||Ja(e)||qa(e)||Ka(e)}function Ka(e){return typeof e==`object`&&!!e&&!Ya(e)&&!Ja(e)&&!qa(e)&&`toZonedDateTimeISO`in e&&typeof e.toZonedDateTimeISO==`function`&&!(`year`in e)&&!(`timeZoneId`in e)}function qa(e){return typeof e==`object`&&!!e&&!Ya(e)&&!Ja(e)&&`toPlainDateTime`in e&&typeof e.toPlainDateTime==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&!(`hour`in e)&&!(`timeZoneId`in e)&&!(`epochSeconds`in e)}function Ja(e){return typeof e==`object`&&!!e&&!Ya(e)&&`toZonedDateTime`in e&&typeof e.toZonedDateTime==`function`&&`toPlainDate`in e&&typeof e.toPlainDate==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&`hour`in e&&typeof e.hour==`number`&&`minute`in e&&typeof e.minute==`number`&&`second`in e&&typeof e.second==`number`&&!(`timeZone`in e)}function Ya(e){return typeof e==`object`&&!!e&&`timeZoneId`in e&&typeof e.timeZoneId==`string`&&`toPlainDateTime`in e&&typeof e.toPlainDateTime==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&`hour`in e&&typeof e.hour==`number`&&`minute`in e&&typeof e.minute==`number`&&`second`in e&&typeof e.second==`number`}function Xa(e){return e instanceof Date&&`internal`in e&&e.internal instanceof Date&&`withTimeZone`in e&&typeof e.withTimeZone==`function`&&`tzComponents`in e&&typeof e.tzComponents==`function`}function Za(e){if(typeof e==`string`||e instanceof Date)return new Date(e);if(Ya(e)){let t=e.toInstant();return new Date(t.epochMilliseconds)}return Ja(e)?new Date(Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)):qa(e)?new Date(Date.UTC(e.year,e.month-1,e.day)):Ka(e)?new Date(e.epochMilliseconds):Ba(e)?e.toJSDate():e.toDate()}function Qa(e){let t=``;return e<0&&(t=`-`,e*=-1),t+=`P`,e>=86400&&(t+=Math.floor(e/86400)+`D`,e%=86400),!e&&t.length>1||(t+=`T`,e>=3600&&(t+=Math.floor(e/3600)+`H`,e%=3600),e>=60&&(t+=Math.floor(e/60)+`M`,e%=60),e>0?t+=e+`S`:t.length<=2&&(t+=`0S`)),t}function $a(e){return e?typeof e==`string`?e:Ya(e)?$a(e.withTimeZone(`UTC`).toPlainDateTime()):(Ga(e),e.toJSON()):null}var eo=(e=>(e.CHAIR=`CHAIR`,e.NON=`NON-PARTICIPANT`,e.OPT=`OPT-PARTICIPANT`,e.REQ=`REQ-PARTICIPANT`,e))(eo||{}),to=(e=>(e.CLIENT=`CLIENT`,e.NONE=`NONE`,e.SERVER=`SERVER`,e))(to||{}),no=(e=>(e.ACCEPTED=`ACCEPTED`,e.DECLINED=`DECLINED`,e.DELEGATED=`DELEGATED`,e.NEEDSACTION=`NEEDS-ACTION`,e.TENTATIVE=`TENTATIVE`,e))(no||{}),ro=(e=>(e.GROUP=`GROUP`,e.INDIVIDUAL=`INDIVIDUAL`,e.RESOURCE=`RESOURCE`,e.ROOM=`ROOM`,e.UNKNOWN=`UNKNOWN`,e))(ro||{}),io=class e{data;parent;constructor(e,t){if(this.data={delegatedFrom:null,delegatedTo:null,email:``,mailto:null,name:null,role:`REQ-PARTICIPANT`,rsvp:null,scheduleAgent:null,sentBy:null,status:null,type:null,x:[]},this.parent=t,!this.parent)throw Error("`event` option required!");if(!e.email)throw Error("No value for `email` in ICalAttendee given!");e.name!==void 0&&this.name(e.name),e.email!==void 0&&this.email(e.email),e.mailto!==void 0&&this.mailto(e.mailto),e.sentBy!==void 0&&this.sentBy(e.sentBy),e.status!==void 0&&this.status(e.status),e.role!==void 0&&this.role(e.role),e.rsvp!==void 0&&this.rsvp(e.rsvp),e.type!==void 0&&this.type(e.type),e.delegatedTo!==void 0&&this.delegatedTo(e.delegatedTo),e.delegatedFrom!==void 0&&this.delegatedFrom(e.delegatedFrom),e.delegatesTo&&this.delegatesTo(e.delegatesTo),e.delegatesFrom&&this.delegatesFrom(e.delegatesFrom),e.scheduleAgent!==void 0&&this.scheduleAgent(e.scheduleAgent),e.x!==void 0&&this.x(e.x)}delegatedFrom(t){return t===void 0?this.data.delegatedFrom:(t?typeof t==`string`?this.data.delegatedFrom=new e(Pa(`delegatedFrom`,t),this.parent):t instanceof e?this.data.delegatedFrom=t:this.data.delegatedFrom=new e(t,this.parent):this.data.delegatedFrom=null,this)}delegatedTo(t){return t===void 0?this.data.delegatedTo:t?(typeof t==`string`?this.data.delegatedTo=new e(Pa(`delegatedTo`,t),this.parent):t instanceof e?this.data.delegatedTo=t:this.data.delegatedTo=new e(t,this.parent),this.data.status=`DELEGATED`,this):(this.data.delegatedTo=null,this.data.status===`DELEGATED`&&(this.data.status=null),this)}delegatesFrom(t){let n=t instanceof e?t:this.parent.createAttendee(t);return this.delegatedFrom(n),n.delegatedTo(this),n}delegatesTo(t){let n=t instanceof e?t:this.parent.createAttendee(t);return this.delegatedTo(n),n.delegatedFrom(this),n}email(e){return e?(this.data.email=e,this):this.data.email}mailto(e){return e===void 0?this.data.mailto:(this.data.mailto=e||null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e||null,this)}role(e){return e===void 0?this.data.role:(this.data.role=Na(eo,e),this)}rsvp(e){return e===void 0?this.data.rsvp:e===null?(this.data.rsvp=null,this):(this.data.rsvp=!!e,this)}scheduleAgent(e){return e===void 0?this.data.scheduleAgent:e?typeof e==`string`&&e.toUpperCase().startsWith(`X-`)?(this.data.scheduleAgent=e,this):(this.data.scheduleAgent=Na(to,e),this):(this.data.scheduleAgent=null,this)}sentBy(e){return e?(this.data.sentBy=e,this):this.data.sentBy}status(e){return e===void 0?this.data.status:e?(this.data.status=Na(no,e),this):(this.data.status=null,this)}toJSON(){return Object.assign({},this.data,{delegatedFrom:this.data.delegatedFrom?.email()||null,delegatedTo:this.data.delegatedTo?.email()||null,x:this.x()})}toString(){let e=`ATTENDEE`;if(!this.data.email)throw Error("No value for `email` in ICalAttendee given!");return e+=`;ROLE=`+this.data.role,this.data.type&&(e+=`;CUTYPE=`+this.data.type),this.data.status&&(e+=`;PARTSTAT=`+this.data.status),this.data.rsvp!==null&&(e+=`;RSVP=`+this.data.rsvp.toString().toUpperCase()),this.data.sentBy!==null&&(e+=`;SENT-BY="mailto:`+this.data.sentBy+`"`),this.data.delegatedTo&&(e+=`;DELEGATED-TO="`+this.data.delegatedTo.email()+`"`),this.data.delegatedFrom&&(e+=`;DELEGATED-FROM="`+this.data.delegatedFrom.email()+`"`),this.data.name&&(e+=`;CN="`+$(this.data.name,!0)+`"`),this.data.email&&this.data.mailto&&(e+=`;EMAIL=`+$(this.data.email,!1)),this.data.scheduleAgent&&(e+=`;SCHEDULE-AGENT=`+this.data.scheduleAgent),this.data.x.length&&(e+=`;`+this.data.x.map(([e,t])=>e.toUpperCase()+`=`+$(t,!1)).join(`;`)),e+=`:MAILTO:`+$(this.data.mailto||this.data.email,!1)+`\r
`,e}type(e){return e===void 0?this.data.type:e?(this.data.type=Na(ro,e),this):(this.data.type=null,this)}x(e,t){if(e===void 0)return ja(this.data);if(typeof e==`string`&&typeof t==`string`)ja(this.data,e,t);else if(typeof e==`object`)ja(this.data,e);else throw Error(`Either key or value is not a string!`);return this}},ao=(e=>(e.audio=`audio`,e.display=`display`,e.email=`email`,e))(ao||{}),oo={end:`END`,start:`START`},so=class{data;event;constructor(e,t){if(this.data={attach:null,attendees:[],description:null,interval:null,relatesTo:null,repeat:null,summary:null,trigger:-600,type:`display`,x:[]},this.event=t,!t)throw Error("`event` option required!");e.type!==void 0&&this.type(e.type),`trigger`in e&&e.trigger!==void 0&&this.trigger(e.trigger),`triggerBefore`in e&&e.triggerBefore!==void 0&&this.triggerBefore(e.triggerBefore),`triggerAfter`in e&&e.triggerAfter!==void 0&&this.triggerAfter(e.triggerAfter),e.repeat&&this.repeat(e.repeat),e.attach!==void 0&&this.attach(e.attach),e.description!==void 0&&this.description(e.description),e.summary!==void 0&&this.summary(e.summary),e.attendees!==void 0&&this.attendees(e.attendees),e.x!==void 0&&this.x(e.x)}attach(e){if(e===void 0)return this.data.attach;if(!e)return this.data.attach=null,this;let t;if(typeof e==`string`)t={mime:null,uri:e};else if(typeof e==`object`)t={mime:e.mime||null,uri:e.uri};else throw Error("`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalAlarm.html#attach");if(!t.uri)throw Error("`attach.uri` is empty!");return this.data.attach={mime:t.mime,uri:t.uri},this}attendees(e){return e?(e.forEach(e=>this.createAttendee(e)),this):this.data.attendees}createAttendee(e){if(e instanceof io)return this.data.attendees.push(e),e;typeof e==`string`&&(e=Pa(`data`,e));let t=new io(e,this);return this.data.attendees.push(t),t}description(e){return e===void 0?this.data.description:e?(this.data.description=e,this):(this.data.description=null,this)}relatesTo(e){if(e===void 0)return this.data.relatesTo;if(!e)return this.data.relatesTo=null,this;if(!Object.values(oo).includes(e))throw Error("`relatesTo` is not correct, must be either `START` or `END`!");return this.data.relatesTo=e,this}repeat(e){if(e===void 0)return this.data.repeat;if(!e)return this.data.repeat=null,this;if(typeof e!=`object`)throw Error("`repeat` is not correct, must be an object!");if(typeof e.times!=`number`||!isFinite(e.times))throw Error("`repeat.times` is not correct, must be numeric!");if(typeof e.interval!=`number`||!isFinite(e.interval))throw Error("`repeat.interval` is not correct, must be numeric!");return this.data.repeat=e,this}summary(e){return e===void 0?this.data.summary:e?(this.data.summary=e,this):(this.data.summary=null,this)}toJSON(){let e=this.trigger();return Object.assign({},this.data,{trigger:typeof e==`number`?e:$a(e),x:this.x()})}toString(){let e=`BEGIN:VALARM\r
`;if(e+=`ACTION:`+this.data.type.toUpperCase()+`\r
`,typeof this.data.trigger==`number`&&this.data.relatesTo===null?this.data.trigger>0?e+=`TRIGGER;RELATED=END:`+Qa(this.data.trigger)+`\r
`:e+=`TRIGGER:`+Qa(this.data.trigger)+`\r
`:typeof this.data.trigger==`number`?e+=`TRIGGER;RELATED=`+this.data.relatesTo?.toUpperCase()+`:`+Qa(this.data.trigger)+`\r
`:e+=`TRIGGER;VALUE=DATE-TIME:`+Ia(this.event.timezone(),this.data.trigger)+`\r
`,this.data.repeat){if(!this.data.repeat.times)throw Error("No value for `repeat.times` in ICalAlarm given, but required for `interval`!");if(!this.data.repeat.interval)throw Error("No value for `repeat.interval` in ICalAlarm given, but required for `repeat`!");e+=`REPEAT:`+this.data.repeat.times+`\r
`,e+=`DURATION:`+Qa(this.data.repeat.interval)+`\r
`}return this.data.type===`audio`&&this.data.attach&&this.data.attach.mime?e+=`ATTACH;FMTTYPE=`+$(this.data.attach.mime,!1)+`:`+$(this.data.attach.uri,!1)+`\r
`:this.data.type===`audio`&&this.data.attach?e+=`ATTACH;VALUE=URI:`+$(this.data.attach.uri,!1)+`\r
`:this.data.type===`audio`&&(e+=`ATTACH;VALUE=URI:Basso\r
`),this.data.type!==`audio`&&this.data.description?e+=`DESCRIPTION:`+$(this.data.description,!1)+`\r
`:this.data.type!==`audio`&&(e+=`DESCRIPTION:`+$(this.event.summary(),!1)+`\r
`),this.data.type===`email`&&this.data.summary?e+=`SUMMARY:`+$(this.data.summary,!1)+`\r
`:this.data.type===`email`&&(e+=`SUMMARY:`+$(this.event.summary(),!1)+`\r
`),this.data.type===`email`&&this.data.attendees.forEach(t=>{e+=t.toString()}),e+=Ra(this.data),e+=`END:VALARM\r
`,e}trigger(e){if(e===void 0&&typeof this.data.trigger==`number`)return-1*this.data.trigger;if(e===void 0)return this.data.trigger;if(typeof e==`number`&&isFinite(e))this.data.trigger=-1*e;else{if(!e||typeof e==`number`)throw Error("`trigger` is not correct, must be a finite number or a supported date!");this.data.trigger=Ma(e,`trigger`)}return this}triggerAfter(e){return e===void 0?this.data.trigger:this.trigger(typeof e==`number`?-1*e:e)}triggerBefore(e){return e===void 0?this.trigger():this.trigger(e)}type(e){if(e===void 0)return this.data.type;if(!e||!Object.keys(ao).includes(e))throw Error("`type` is not correct, must be either `display` or `audio`!");return this.data.type=e,this}x(e,t){if(e===void 0)return ja(this.data);if(typeof e==`string`&&typeof t==`string`)ja(this.data,e,t);else if(typeof e==`object`)ja(this.data,e);else throw Error(`Either key or value is not a string!`);return this}},co=class{data;constructor(e){if(this.data={name:``},!e.name)throw Error("No value for `name` in ICalCategory given!");this.name(e.name)}name(e){return e===void 0?this.data.name:(this.data.name=e,this)}toJSON(){return Object.assign({},this.data)}toString(){return $(this.data.name,!1)}},lo=(e=>(e.BUSY=`BUSY`,e.FREE=`FREE`,e.OOF=`OOF`,e.TENTATIVE=`TENTATIVE`,e))(lo||{}),uo=(e=>(e.CONFIDENTIAL=`CONFIDENTIAL`,e.PRIVATE=`PRIVATE`,e.PUBLIC=`PUBLIC`,e))(uo||{}),fo=(e=>(e.CANCELLED=`CANCELLED`,e.CONFIRMED=`CONFIRMED`,e.TENTATIVE=`TENTATIVE`,e))(fo||{}),po=(e=>(e.OPAQUE=`OPAQUE`,e.TRANSPARENT=`TRANSPARENT`,e))(po||{}),mo=class{calendar;data;constructor(e,t){if(this.data={alarms:[],allDay:!1,attachments:[],attendees:[],busystatus:null,categories:[],class:null,created:null,description:null,end:null,floating:!1,id:crypto.randomUUID(),lastModified:null,location:null,organizer:null,priority:null,recurrenceId:null,repeating:null,sequence:0,stamp:new Date,start:new Date,status:null,summary:``,timezone:null,transparency:null,url:null,x:[]},this.calendar=t,!t)throw Error("`calendar` option required!");e.id&&this.id(e.id),e.sequence!==void 0&&this.sequence(e.sequence),e.start&&this.start(e.start),e.end!==void 0&&this.end(e.end),e.recurrenceId!==void 0&&this.recurrenceId(e.recurrenceId),e.timezone!==void 0&&this.timezone(e.timezone),e.stamp!==void 0&&this.stamp(e.stamp),e.allDay!==void 0&&this.allDay(e.allDay),e.floating!==void 0&&this.floating(e.floating),e.repeating!==void 0&&this.repeating(e.repeating),e.summary!==void 0&&this.summary(e.summary),e.location!==void 0&&this.location(e.location),e.description!==void 0&&this.description(e.description),e.organizer!==void 0&&this.organizer(e.organizer),e.attendees!==void 0&&this.attendees(e.attendees),e.alarms!==void 0&&this.alarms(e.alarms),e.categories!==void 0&&this.categories(e.categories),e.status!==void 0&&this.status(e.status),e.busystatus!==void 0&&this.busystatus(e.busystatus),e.priority!==void 0&&this.priority(e.priority),e.url!==void 0&&this.url(e.url),e.attachments!==void 0&&this.attachments(e.attachments),e.transparency!==void 0&&this.transparency(e.transparency),e.created!==void 0&&this.created(e.created),e.lastModified!==void 0&&this.lastModified(e.lastModified),e.class!==void 0&&this.class(e.class),e.x!==void 0&&this.x(e.x)}alarms(e){return e?(e.forEach(e=>this.createAlarm(e)),this):this.data.alarms}allDay(e){return e===void 0?this.data.allDay:(this.data.allDay=!!e,this)}attachments(e){return e?(e.forEach(e=>this.createAttachment(e)),this):this.data.attachments}attendees(e){return e?(e.forEach(e=>this.createAttendee(e)),this):this.data.attendees}busystatus(e){return e===void 0?this.data.busystatus:e===null?(this.data.busystatus=null,this):(this.data.busystatus=Na(lo,e),this)}categories(e){return e?(e.forEach(e=>this.createCategory(e)),this):this.data.categories}class(e){return e===void 0?this.data.class:e===null?(this.data.class=null,this):(this.data.class=Na(uo,e),this)}createAlarm(e){let t=e instanceof so?e:new so(e,this);return this.data.alarms.push(t),t}createAttachment(e){return this.data.attachments.push(e),this}createAttendee(e){if(e instanceof io)return this.data.attendees.push(e),e;typeof e==`string`&&(e=Pa(`data`,e));let t=new io(e,this);return this.data.attendees.push(t),t}createCategory(e){let t=e instanceof co?e:new co(e);return this.data.categories.push(t),t}created(e){return e===void 0?this.data.created:e===null?(this.data.created=null,this):(this.data.created=Ma(e,`created`),this)}description(e){return e===void 0?this.data.description:e===null?(this.data.description=null,this):(typeof e==`string`?this.data.description={plain:e}:this.data.description=e,this)}end(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.end):e===null?(this.data.end=null,this):(this.data.end=Ma(e,`end`),this)}floating(e){return e===void 0?this.data.floating:(this.data.floating=!!e,this.data.floating&&(this.data.timezone=null),this)}id(e){return e===void 0?this.data.id:(this.data.id=String(e),this)}lastModified(e){return e===void 0?this.data.lastModified:e===null?(this.data.lastModified=null,this):(this.data.lastModified=Ma(e,`lastModified`),this)}location(e){if(e===void 0)return this.data.location;if(typeof e==`string`)return this.data.location={title:e},this;if(e&&(`title`in e&&!e.title||e?.geo&&(typeof e.geo.lat!=`number`||!isFinite(e.geo.lat)||typeof e.geo.lon!=`number`||!isFinite(e.geo.lon))||!(`title`in e)&&!e?.geo))throw Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalEvent.html#location");return this.data.location=e||null,this}organizer(e){return e===void 0?this.data.organizer:e===null?(this.data.organizer=null,this):(this.data.organizer=Pa(`organizer`,e),this)}priority(e){if(e===void 0)return this.data.priority;if(e===null)return this.data.priority=null,this;if(e<0||e>9)throw Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");return this.data.priority=Math.round(e),this}recurrenceId(e){return e===void 0?this.data.recurrenceId:e===null?(this.data.recurrenceId=null,this):(this.data.recurrenceId=Ma(e,`recurrenceId`),this)}repeating(e){if(e===void 0)return this.data.repeating;if(!e)return this.data.repeating=null,this;if(Wa(e)||typeof e==`string`)return this.data.repeating=e,this;if(this.data.repeating={freq:Na(ka,e.freq)},e.count){if(!isFinite(e.count))throw Error("`repeating.count` must be a finite number!");this.data.repeating.count=e.count}if(e.interval){if(!isFinite(e.interval))throw Error("`repeating.interval` must be a finite number!");this.data.repeating.interval=e.interval}if(e.until!==void 0&&(this.data.repeating.until=Ma(e.until,`repeating.until`)),e.byDay){let t=Array.isArray(e.byDay)?e.byDay:[e.byDay];this.data.repeating.byDay=t.map(e=>Na(Aa,e))}if(e.byMonth){let t=Array.isArray(e.byMonth)?e.byMonth:[e.byMonth];this.data.repeating.byMonth=t.map(e=>{if(typeof e!=`number`||e<1||e>12)throw Error("`repeating.byMonth` contains invalid value `"+e+"`!");return e})}if(e.byMonthDay){let t=Array.isArray(e.byMonthDay)?e.byMonthDay:[e.byMonthDay];this.data.repeating.byMonthDay=t.map(e=>{if(typeof e!=`number`||e<-31||e>31||e===0)throw Error("`repeating.byMonthDay` contains invalid value `"+e+"`!");return e})}if(e.bySetPos){if(!this.data.repeating.byDay)throw"`repeating.bySetPos` must be used along with `repeating.byDay`!";let t=Array.isArray(e.bySetPos)?e.bySetPos:[e.bySetPos];this.data.repeating.bySetPos=t.map(e=>{if(typeof e!=`number`||e<-366||e>366||e===0)throw"`repeating.bySetPos` contains invalid value `"+e+"`!";return e})}if(e.exclude){let t=Array.isArray(e.exclude)?e.exclude:[e.exclude];this.data.repeating.exclude=t.map((e,t)=>Ma(e,`repeating.exclude[${t}]`))}return e.startOfWeek&&(this.data.repeating.startOfWeek=Na(Aa,e.startOfWeek)),this}sequence(e){if(e===void 0)return this.data.sequence;if(isNaN(parseInt(String(e),10)))throw Error("`sequence` must be a number!");return this.data.sequence=e,this}stamp(e){return e===void 0?this.data.stamp:(this.data.stamp=Ma(e,`stamp`),this)}start(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.start):(this.data.start=Ma(e,`start`),this)}status(e){return e===void 0?this.data.status:e===null?(this.data.status=null,this):(this.data.status=Na(fo,e),this)}summary(e){return e===void 0?this.data.summary:(this.data.summary=e?String(e):``,this)}timestamp(e){return e===void 0?this.stamp():this.stamp(e)}timezone(e){return e===void 0&&this.data.timezone!==null?this.data.timezone:e===void 0?this.calendar.timezone():(this.data.timezone=e&&e!==`UTC`?e.toString():null,this.data.timezone&&(this.data.floating=!1),this)}toJSON(){let e=null;return Wa(this.data.repeating)||typeof this.data.repeating==`string`?e=this.data.repeating.toString():this.data.repeating&&(e=Object.assign({},this.data.repeating,{exclude:this.data.repeating.exclude?.map(e=>$a(e)),until:$a(this.data.repeating.until)||void 0})),this.swapStartAndEndIfRequired(),Object.assign({},this.data,{created:$a(this.data.created)||null,end:$a(this.data.end)||null,lastModified:$a(this.data.lastModified)||null,recurrenceId:$a(this.data.recurrenceId)||null,repeating:e,stamp:$a(this.data.stamp)||null,start:$a(this.data.start)||null,x:this.x()})}toString(){let e=``;if(e+=`BEGIN:VEVENT\r
`,e+=`UID:`+this.data.id+`\r
`,e+=`SEQUENCE:`+this.data.sequence+`\r
`,this.swapStartAndEndIfRequired(),e+=`DTSTAMP:`+Ia(this.calendar.timezone(),this.data.stamp)+`\r
`,this.data.allDay?(e+=`DTSTART;VALUE=DATE:`+Ia(this.timezone(),this.data.start,!0)+`\r
`,this.data.end&&(e+=`DTEND;VALUE=DATE:`+Ia(this.timezone(),this.data.end,!0)+`\r
`),e+=`X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r
`,e+=`X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r
`):(e+=La(this.timezone(),`DTSTART`,this.data.start,this.data)+`\r
`,this.data.end&&(e+=La(this.timezone(),`DTEND`,this.data.end,this.data)+`\r
`)),Wa(this.data.repeating)||typeof this.data.repeating==`string`){let t=this.data.repeating.toString().replace(/\r\n/g,`
`).split(`
`).filter(e=>e&&!e.startsWith(`DTSTART:`)).join(`\r
`);!t.includes(`\r
`)&&!t.startsWith(`RRULE:`)&&(t=`RRULE:`+t),e+=t.trim()+`\r
`}else this.data.repeating&&(e+=`RRULE:FREQ=`+this.data.repeating.freq,this.data.repeating.count&&(e+=`;COUNT=`+this.data.repeating.count),this.data.repeating.interval&&(e+=`;INTERVAL=`+this.data.repeating.interval),this.data.repeating.until&&(e+=`;UNTIL=`+Ia(this.calendar.timezone(),this.data.repeating.until,!1,this.floating())),this.data.repeating.byDay&&(e+=`;BYDAY=`+this.data.repeating.byDay.join(`,`)),this.data.repeating.byMonth&&(e+=`;BYMONTH=`+this.data.repeating.byMonth.join(`,`)),this.data.repeating.byMonthDay&&(e+=`;BYMONTHDAY=`+this.data.repeating.byMonthDay.join(`,`)),this.data.repeating.bySetPos&&(e+=`;BYSETPOS=`+this.data.repeating.bySetPos.join(`,`)),this.data.repeating.startOfWeek&&(e+=`;WKST=`+this.data.repeating.startOfWeek),e+=`\r
`,this.data.repeating.exclude&&(this.data.allDay?e+=`EXDATE;VALUE=DATE:`+this.data.repeating.exclude.map(e=>Ia(this.calendar.timezone(),e,!0)).join(`,`)+`\r
`:(e+=`EXDATE`,this.timezone()?e+=`;TZID=`+this.timezone()+`:`+this.data.repeating.exclude.map(e=>Ia(this.timezone(),e,!1,!0)).join(`,`)+`\r
`:e+=`:`+this.data.repeating.exclude.map(e=>Ia(this.timezone(),e,!1,this.floating())).join(`,`)+`\r
`)));return this.data.recurrenceId&&(e+=La(this.timezone(),`RECURRENCE-ID`,this.data.recurrenceId,this.data)+`\r
`),e+=`SUMMARY:`+$(this.data.summary,!1)+`\r
`,this.data.transparency&&(e+=`TRANSP:`+$(this.data.transparency,!1)+`\r
`),this.data.location&&`title`in this.data.location&&this.data.location.title&&(e+=`LOCATION:`+$(this.data.location.title+(this.data.location.address?`
`+this.data.location.address:``),!1)+`\r
`,this.data.location.radius&&this.data.location.geo&&(e+=`X-APPLE-STRUCTURED-LOCATION;VALUE=URI;`+(this.data.location.address?`X-ADDRESS=`+$(this.data.location.address,!1)+`;`:``)+`X-APPLE-RADIUS=`+$(this.data.location.radius,!1)+`;X-TITLE=`+$(this.data.location.title,!1)+`:geo:`+$(this.data.location.geo?.lat,!1)+`,`+$(this.data.location.geo?.lon,!1)+`\r
`)),this.data.location?.geo?.lat&&this.data.location.geo.lon&&(e+=`GEO:`+$(this.data.location.geo.lat,!1)+`;`+$(this.data.location.geo.lon,!1)+`\r
`),this.data.description&&(e+=`DESCRIPTION:`+$(this.data.description.plain,!1)+`\r
`,this.data.description.html&&(e+=`X-ALT-DESC;FMTTYPE=text/html:`+$(this.data.description.html,!1)+`\r
`)),this.data.organizer&&(e+=`ORGANIZER;CN="`+$(this.data.organizer.name,!0)+`"`,this.data.organizer.sentBy&&(e+=`;SENT-BY="mailto:`+$(this.data.organizer.sentBy,!0)+`"`),this.data.organizer.email&&this.data.organizer.mailto&&(e+=`;EMAIL=`+$(this.data.organizer.email,!1)),e+=`:`,this.data.organizer.email&&(e+=`mailto:`+$(this.data.organizer.mailto||this.data.organizer.email,!1)),e+=`\r
`),this.data.attendees.forEach(function(t){e+=t.toString()}),this.data.alarms.forEach(function(t){e+=t.toString()}),this.data.categories.length>0&&(e+=`CATEGORIES:`+this.data.categories.map(e=>e.toString()).join()+`\r
`),this.data.url&&(e+=`URL;VALUE=URI:`+$(this.data.url,!1)+`\r
`),this.data.attachments.length>0&&this.data.attachments.forEach(t=>{e+=`ATTACH:`+$(t,!1)+`\r
`}),this.data.status&&(e+=`STATUS:`+this.data.status.toUpperCase()+`\r
`),this.data.busystatus&&(e+=`X-MICROSOFT-CDO-BUSYSTATUS:`+this.data.busystatus.toUpperCase()+`\r
`),this.data.priority!==null&&(e+=`PRIORITY:`+this.data.priority+`\r
`),e+=Ra(this.data),this.data.created&&(e+=`CREATED:`+Ia(this.calendar.timezone(),this.data.created)+`\r
`),this.data.lastModified&&(e+=`LAST-MODIFIED:`+Ia(this.calendar.timezone(),this.data.lastModified)+`\r
`),this.data.class&&(e+=`CLASS:`+this.data.class.toUpperCase()+`\r
`),e+=`END:VEVENT\r
`,e}transparency(e){return e===void 0?this.data.transparency:e?(this.data.transparency=Na(po,e),this):(this.data.transparency=null,this)}uid(e){return e===void 0?this.id():this.id(e)}url(e){return e===void 0?this.data.url:(this.data.url=e?String(e):null,this)}x(e,t){return e===void 0?ja(this.data):(typeof e==`string`&&typeof t==`string`&&ja(this.data,e,t),typeof e==`object`&&ja(this.data,e),this)}swapStartAndEndIfRequired(){if(this.data.start&&this.data.end&&Za(this.data.start).getTime()>Za(this.data.end).getTime()){let e=this.data.start;this.data.start=this.data.end,this.data.end=e}}},ho=(e=>(e.ADD=`ADD`,e.CANCEL=`CANCEL`,e.COUNTER=`COUNTER`,e.DECLINECOUNTER=`DECLINECOUNTER`,e.PUBLISH=`PUBLISH`,e.REFRESH=`REFRESH`,e.REPLY=`REPLY`,e.REQUEST=`REQUEST`,e))(ho||{}),go=class{data;constructor(e={}){this.data={description:null,events:[],method:null,name:null,prodId:`//sebbo.net//ical-generator//EN`,scale:null,source:null,timezone:null,ttl:null,url:null,x:[]},e.prodId!==void 0&&this.prodId(e.prodId),e.method!==void 0&&this.method(e.method),e.name!==void 0&&this.name(e.name),e.description!==void 0&&this.description(e.description),e.timezone!==void 0&&this.timezone(e.timezone),e.source!==void 0&&this.source(e.source),e.url!==void 0&&this.url(e.url),e.scale!==void 0&&this.scale(e.scale),e.ttl!==void 0&&this.ttl(e.ttl),e.events!==void 0&&this.events(e.events),e.x!==void 0&&this.x(e.x)}clear(){return this.data.events=[],this}createEvent(e){let t=e instanceof mo?e:new mo(e,this);return this.data.events.push(t),t}description(e){return e===void 0?this.data.description:(this.data.description=e?String(e):null,this)}events(e){return e?(e.forEach(e=>this.createEvent(e)),this):this.data.events}length(){return this.data.events.length}method(e){return e===void 0?this.data.method:e?(this.data.method=Na(ho,e),this):(this.data.method=null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e?String(e):null,this)}prodId(e){if(!e)return this.data.prodId;if(typeof e==`string`)return this.data.prodId=e,this;if(typeof e!=`object`)throw Error("`prodid` needs to be a string or an object!");if(!e.company)throw Error("`prodid.company` is a mandatory item!");if(!e.product)throw Error("`prodid.product` is a mandatory item!");let t=(e.language||`EN`).toUpperCase();return this.data.prodId=`//`+e.company+`//`+e.product+`//`+t,this}scale(e){return e===void 0?this.data.scale:(e===null?this.data.scale=null:this.data.scale=e.toUpperCase(),this)}source(e){return e===void 0?this.data.source:(this.data.source=e||null,this)}timezone(e){return e===void 0?this.data.timezone?.name||null:(e===`UTC`?this.data.timezone=null:typeof e==`string`?this.data.timezone={name:e}:e===null?this.data.timezone=null:this.data.timezone=e,this)}toJSON(){return Object.assign({},this.data,{events:this.data.events.map(e=>e.toJSON()),timezone:this.timezone(),x:this.x()})}toString(){let e=``;return e=`BEGIN:VCALENDAR\r
VERSION:2.0\r
`,e+=`PRODID:-`+this.data.prodId+`\r
`,this.data.url&&(e+=`URL:`+this.data.url+`\r
`),this.data.source&&(e+=`SOURCE;VALUE=URI:`+this.data.source+`\r
`),this.data.scale&&(e+=`CALSCALE:`+this.data.scale+`\r
`),this.data.method&&(e+=`METHOD:`+this.data.method+`\r
`),this.data.name&&(e+=`NAME:`+this.data.name+`\r
`,e+=`X-WR-CALNAME:`+this.data.name+`\r
`),this.data.description&&(e+=`X-WR-CALDESC:`+this.data.description+`\r
`),this.data.timezone?.generator&&[...new Set([this.timezone(),...this.data.events.map(e=>e.timezone())])].filter(e=>e!==null&&!e.startsWith(`/`)).forEach(t=>{if(!this.data.timezone?.generator)return;let n=this.data.timezone.generator(t);n&&(e+=n.replace(/\r\n/g,`
`).replace(/\n/g,`\r
`).trim()+`\r
`)}),this.data.timezone?.name&&(e+=`TIMEZONE-ID:`+this.data.timezone.name+`\r
`,e+=`X-WR-TIMEZONE:`+this.data.timezone.name+`\r
`),this.data.ttl&&(e+=`REFRESH-INTERVAL;VALUE=DURATION:`+Qa(this.data.ttl)+`\r
`,e+=`X-PUBLISHED-TTL:`+Qa(this.data.ttl)+`\r
`),this.data.events.forEach(t=>e+=t.toString()),e+=Ra(this.data),e+=`END:VCALENDAR`,Fa(e)}ttl(e){return e===void 0?this.data.ttl:(Ha(e)?this.data.ttl=e.asSeconds():e&&e>0?this.data.ttl=e:this.data.ttl=null,this)}url(e){return e===void 0?this.data.url:(this.data.url=e||null,this)}x(e,t){if(e===void 0)return ja(this.data);if(typeof e==`string`&&typeof t==`string`)ja(this.data,e,t);else if(typeof e==`object`)ja(this.data,e);else throw Error(`Either key or value is not a string!`);return this}};function _o(e){return new go(e)}var vo=_o,yo=new Set([`NotAllowedError`,`NotReadableError`]);function bo(e){return e instanceof DOMException&&yo.has(e.name)}function xo(e){let{ctx:t,x:n,y:r,width:i,height:a,radius:o,color:s}=e;t.fillStyle=s,t.beginPath(),t.moveTo(n+o,r),t.lineTo(n+i-o,r),t.quadraticCurveTo(n+i,r,n+i,r+o),t.lineTo(n+i,r+a-o),t.quadraticCurveTo(n+i,r+a,n+i-o,r+a),t.lineTo(n+o,r+a),t.quadraticCurveTo(n,r+a,n,r+a-o),t.lineTo(n,r+o),t.quadraticCurveTo(n,r,n+o,r),t.closePath(),t.fill()}function So(e,t,n,r){let i=document.createElement(`canvas`).getContext(`2d`);if(!i)return[];i.font=`${r}px ${n}`;let a=``,o=[];for(let n of e){let e=a+n;i.measureText(e).width>t&&a!==``?(o.push(a),a=n):a=e}return a&&o.push(a),o}function Co(e){let{ctx:t,x:n,y:r,text:i,font:a,fontSize:o,color:s,align:c=`left`}=e;t.fillStyle=s,t.font=`${o}px ${a}`,t.textAlign=c||`left`,t.fillText(i,n,r)}function wo(e){let{ctx:t,x:n,y:r,width:i,height:a,title:o,professor:s,location:c,font:l,fontSize:u,displayMode:d}=e,f=So(o,i,l,u),p=So(s,i,l,u),m=So(c,i,l,u),h=[...f,...m,...p].slice(0,3),g=(a-h.reduce((e,t,n)=>t===``?e+2:e+u,0))/2+u-7;h.forEach((e,i)=>{e===``?g+=2:(Co({ctx:t,x:n,y:r+g,text:e,font:l,fontSize:u,color:i<f.length?`#000000`:d===`dark`?`#4C4C4C`:`#888888`}),g+=u+5)})}async function To(e){let{timetableName:t,lectures:n,timetableType:r,semesterName:i,semesterFontSize:a,tileFontSize:o,displayMode:s,language:c}=e,l=Object.values(s===`dark`?G.Tile.TimeTable.default:ie.Tile.TimeTable.default).flatMap(e=>Object.values(e)),u=`timetable_template/Image_template_${r}_${s}_${c}.png`,d=new Image;d.src=u,await new Promise((e,t)=>{d.onload=e,d.onerror=t});let f=await(0,Oa.loadImage)(u),p=(0,Oa.createCanvas)(f.width,f.height),m=p.getContext(`2d`);m.drawImage(f,0,0),Co({ctx:m,x:r===`5days`?952:1302,y:78,text:i+` `+t,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:a,color:`#CCCCCC`,align:`right`});for(let e of n){let t=l[e.courseId%l.length]||`#F2CECE`;for(let n of e.classes){let{day:r,begin:i,end:a}=n,[c,l,u,d]=[178*r+76,i*4/3-486,171,(a-i)*4/3-7];xo({ctx:m,x:c,y:l,width:u,height:d,radius:4,color:t}),wo({ctx:m,x:c+12,y:l+8,width:u-24,height:d-16,title:e.name,professor:se(e.professors)||``,location:n.buildingCode+` `+n.roomName||``,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:o,displayMode:s})}}return p}async function Eo(e){let t=(await To(e)).toDataURL(`image/png`),n=document.createElement(`a`);n.href=t,n.download=`${e.timetableName}.png`,n.click(),URL.revokeObjectURL(t)}async function Do(e){let t=(await To(e)).toDataURL(`image/png`),n=await(await fetch(t)).blob();if(!navigator.clipboard?.write)return!1;let r=new ClipboardItem({"image/png":n});try{return await navigator.clipboard.write([r]),!0}catch(e){if(bo(e))return!1;throw e}}function Oo(e){let{name:t,lectures:n,semesterObject:r}=e,i=vo({name:t,prodId:`//SPARCS//OTL Plus`,timezone:`Asia/Seoul`});for(let e of n)for(let t of e.classes){let n=t.buildingCode+` `+t.roomName,a=new Date(r.beginning),o=(t.day+1)%7,s=new Date(a),c=s.getDay(),l=(o+7-c)%7;s.setDate(s.getDate()+l);let u=Math.floor(t.begin/60),d=t.begin%60,f=Math.floor(t.end/60),p=t.end%60,m=new Date(s);m.setHours(u,d,0,0);let h=new Date(s);h.setHours(f,p,0,0),i.createEvent({start:m,end:h,summary:e.name,location:n,repeating:{freq:ka.WEEKLY,until:new Date(r.end)},timezone:`Asia/Seoul`}).alarms([{type:ao.display,trigger:900}])}let a=new Blob([i.toString()],{type:`text/calendar;charset=utf-8`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=`${t}.ics`,s.click(),URL.revokeObjectURL(o)}var ko=f(p)`
    width: 100%;

    ${W.laptop} {
        height: 56px;
        flex-wrap: wrap;
        align-items: center;
    }

    ${W.tablet} {
        height: auto;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
`,Ao=f.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 0;
    color: ${({theme:e})=>e.colors.Highlight.default};
    font-size: 13px;

    &:hover:not(:disabled) {
        text-decoration: underline;
    }

    &:disabled {
        cursor: default;
    }
`,jo=f(L)`
    cursor: inherit;
`;function Mo({timetableName:e,timetableLectures:t,year:n,semester:r}){let{t:a,i18n:o}=z(),s=c(),d=ne(`tablet`),{displayedTheme:f}=re(),{query:p}=A(`GET`,`/semesters`),[m,h]=(0,K.useState)(`idle`),g=(0,K.useRef)(!1),_=(0,K.useMemo)(()=>p?p.data?.semesters.find(e=>e.year===n&&e.semester===r):null,[p.data,n,r]),y=(0,K.useMemo)(()=>t.some(e=>e.classes.some(e=>e.day>=5))?`7days`:`5days`,[t]);(0,K.useEffect)(()=>{if(m.startsWith(`success`)){let e=setTimeout(()=>{h(`idle`)},500);return()=>clearTimeout(e)}},[m]);let b={timetableName:e,lectures:t,timetableType:y,semesterName:n+` `+S(r),semesterFontSize:30,tileFontSize:18,displayMode:f,language:o.resolvedLanguage==`ko`?`ko`:`en`},x=()=>g.current||m!==`idle`?!1:(g.current=!0,h(`processing`),!0),C=e=>{g.current=!1,h(e)},w=(e,t)=>{v.error(`Timetable ${e} failed`,t),i(t,{tags:{type:`timetable_export`,action:e}}),C(`idle`)};return u(ko,{direction:d?`row`:`column`,gap:8,children:[u(Ao,{onClick:async()=>{if(x())try{let e=await Do(b);C(e?`successCopyImage`:`idle`)}catch(e){w(`image_copy`,e)}},disabled:m!==`idle`,children:[l(jo,{size:16,color:s.colors.Highlight.default,children:l(m==`successCopyImage`?de:Se,{})}),!d&&l(`span`,{children:a(`timetable.copyImage`)})]}),u(Ao,{onClick:async()=>{if(x())try{await Eo(b),C(`successDownloadImage`)}catch(e){w(`image_download`,e)}},disabled:m!==`idle`,children:[l(jo,{size:16,color:s.colors.Highlight.default,children:l(m==`successDownloadImage`?de:we,{})}),!d&&l(`span`,{children:a(`timetable.exportImage`)})]}),u(Ao,{onClick:()=>{if(!(!_||!x()))try{Oo({name:e,lectures:t,semesterObject:{beginning:new Date(_.beginning),end:new Date(_.end)}}),C(`successDownloadCalendar`)}catch(e){w(`calendar_download`,e)}},disabled:m!==`idle`||!_,children:[l(jo,{size:16,color:s.colors.Highlight.default,children:l(m==`successDownloadCalendar`?de:xe,{})}),!d&&l(`span`,{children:a(`timetable.exportICal`)})]})]})}var No=f.div`
    display: flex;
    flex-direction: column;
    width: 264px;
    height: 100%;
    gap: 12px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${W.laptop} {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`;function Po({timetableLectures:e}){let t=ne(`laptop`),n=C(e=>e.currentTimetableName),r=C(e=>e.year),i=C(e=>e.semesterEnum),a=C(e=>e.selectedLectures),o=C(e=>e.hoveredLectures),s=C(e=>e.setHoveredLectures),c=a.length>0?a:o;return u(No,{children:[!t&&l(Da,{timetableLectures:e,hover:c,setHover:s}),l(ia,{hover:c,setHover:s,timetableLectures:e}),!t&&l(te,{direction:`row`}),l(pa,{timetableLectures:e,hover:c,setHover:s}),!t&&l(te,{direction:`row`}),!t&&l(ya,{timetableLectures:e,hover:c,setHover:s}),!t&&l(te,{direction:`row`}),!t&&l(Mo,{timetableName:n,timetableLectures:e,year:r,semester:i})]})}function Fo(e){return x(e)&&e.response?.status===m.BadRequest}var Io=f(p)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${W.tablet} {
        padding: 8px;
    }

    ${W.mobile} {
        padding: 0 8px 8px 8px;
    }
`,Lo=f(p)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */
    box-shadow: ${({theme:e})=>e.elevation.surface};

    ${W.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }

    ${W.tablet} {
        flex: 1 1 0;
        min-height: 0;
        height: 100%;
    }
`,Ro=f(p)`
    border-radius: 12px;
    width: fit-content;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${W.laptop} {
        max-width: none;
    }

    ${W.tablet} {
        width: 100%;
        max-width: none;
        flex: 1 0 0;
        overflow: hidden;
    }
`,zo=f(p)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px;
    flex: 1;
    min-height: 0;
    box-shadow: ${({theme:e})=>e.elevation.surface};

    ${W.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`,Bo=f.div`
    width: 330px;
    height: 100%;
    display: flex;

    ${W.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow: ${({theme:e})=>e.elevation.surface};
    }

    ${W.laptop} {
        width: 300px;
    }
`,Vo=f.div`
    width: 270px;
    height: 100%;
    display: flex;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${W.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow: ${({theme:e})=>e.elevation.surface};
    }

    ${W.laptop} {
        width: 300px;
    }

    ${W.tablet} {
        width: 100%;
    }
`,Ho=f.div`
    ${W.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
        box-shadow: ${({theme:e})=>e.elevation.surface};
    }
`,Uo=f(p)`
    flex: 1;
    min-height: 0;
    overflow: hidden;

    ${W.laptop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
        box-shadow: ${({theme:e})=>e.elevation.surface};
    }
`,Wo=f.div`
    ${W.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow: ${({theme:e})=>e.elevation.surface};
    }

    ${W.tablet} {
        height: auto;
        padding: 8px;
    }
`,Go=f(p)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
    box-shadow: ${({theme:e})=>e.elevation.surface};
`,Ko=o(function(){let{status:e}=y(),t=c(),n=ne(`tablet`),r=ne(`laptop`),i=ne(`desktop`);(0,K.useEffect)(()=>{b(`Page View`,{page:`Timetable`})},[]);let a=(0,K.useRef)(null),o=(0,K.useRef)(null),s=(0,K.useRef)(null),f=C(e=>e.hoveredLectures),m=C(e=>e.setHoveredLectures),h=C(e=>e.selectedLectures),g=C(e=>e.setSelectedLectures),_=C(e=>e.timeFilter),v=C(e=>e.setTimeFilter),x=C(e=>e.currentTimetableId),S=C(e=>e.setCurrentTimetableId),w=C(e=>e.currentTimetableName),T=C(e=>e.year),E=C(e=>e.semesterEnum),D=C(e=>e.mobileSearchOpen),O=C(e=>e.setMobileSearchOpen),k=C(e=>e.flashLectureIds),{query:j,setParams:M}=A(`GET`,`/timetables`,{enabled:e===`success`}),[N,P]=(0,K.useState)([]),{query:F}=A(`GET`,`/timetables/${x}`,{enabled:x!==null&&e===`success`,retry:(e,t)=>!Fo(t)&&e<1}),{query:I,setParams:R}=A(`GET`,`/timetables/my-timetable`,{enabled:e===`success`}),z=e===`success`?x===null?I.data?.lectures??[]:F.data?.lectures??[]:N,B=e!==`success`||x!==null,ee=j.refetch;(0,K.useEffect)(()=>{x===null||!Fo(F.error)||(S(null),ee())},[x,ee,S,F.error]),(0,K.useEffect)(()=>{m([]),g([])},[D]),(0,K.useEffect)(()=>{let e=e=>{!n&&a.current&&!a.current.contains(e.target)&&o.current&&!o.current.contains(e.target)&&(m([]),g([]))};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[n]),(0,K.useEffect)(()=>{g([]),m([]),T!==-1&&(R({year:T,semester:E}),M({year:T,semester:E})),P([])},[T,E]),(0,K.useEffect)(()=>{n||(g([]),m([]))},[x]),(0,K.useEffect)(()=>{_!==null&&n&&O(!0)},[_]);let{addLectures:W,removeLectures:re,changeSemester:ie,undo:G,redo:ae,recordAction:oe}=Me({currentTimetableLectures:z,nonLoginTimetable:N,setNonLoginTimetable:P}),se=(0,K.useMemo)(()=>B?e=>re([e]):void 0,[B,re]),{onLectureSelect:ce}=Pe({currentTimetableLectures:z,undo:G,redo:ae,addLectures:W,removeLectures:re,timetableIds:[null,...j.data?.timetables.sort((e,t)=>e.timeTableOrder-t.timeTableOrder).map(e=>e.id)||[]],isLoggedIn:e===`success`,changeSemester:ie,recordAction:oe});return l(Io,{direction:n?`column`:`row`,align:`stretch`,justify:`center`,gap:n?8:12,flex:`1 0 0`,ref:s,children:n?u(d,{children:[u(Ro,{ref:o,direction:`column`,gap:0,align:`stretch`,justify:`stretch`,style:D?{flex:`1 1 0`,minHeight:0}:void 0,children:[l(Qi,{timeTableLectures:z,timetablesQuery:j}),l(zo,{direction:`column`,gap:12,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:l(Uo,{direction:`column`,gap:0,align:`stretch`,flex:`1 1 auto`,children:l(ge,{lectures:z,needLectureDeletable:B,onLectureSelect:ce,flashLectureIds:k??void 0,deleteLecture:se,hoveredLectures:f,setHoveredLectures:m,selectedLectures:h,timeFilter:_,setTimeFilter:v})})})]}),l(Wo,{children:l(Po,{timetableLectures:z})}),u(Go,{direction:`row`,gap:0,children:[l(Mo,{timetableName:w,timetableLectures:z,year:T,semester:E}),u(p,{direction:`row`,gap:4,align:`center`,style:{height:`100%`},onClick:()=>{O(!D)},children:[l(L,{size:16,color:t.colors.Highlight.default,children:l(U,{})}),l(V,{type:`Normal`,color:`Highlight.default`,children:D?`검색 닫기`:`과목 검색하기`})]})]}),D&&l(Lo,{direction:`row`,align:`flex-start`,gap:12,ref:a,children:l(Vo,{children:l(Ct,{timetableLectures:z,addLectures:W,onLectureSelect:ce})})}),h.length>0&&l(H,{isOpen:h.length>0,onClose:()=>{},fullScreen:!0,header:!1,children:l(et,{addLectures:W,removeLectures:se,onMobileModalClose:()=>{m([]),g([])},currentTimetableId:x,timetableLectures:z})})]}):u(d,{children:[l(Ae,{}),u(Lo,{direction:i?`column-reverse`:`row`,align:`flex-start`,gap:12,ref:a,children:[r&&l(Ho,{children:l(Mo,{timetableName:w,timetableLectures:z,year:T,semester:E})}),l(Vo,{style:{overflow:`auto`},children:l(Ct,{timetableLectures:z,addLectures:W,onLectureSelect:ce})}),!i&&l(te,{direction:`column`}),l(Bo,{style:{overflow:`auto`},children:l(et,{timetableLectures:z,addLectures:W,removeLectures:se})})]}),l(p,{direction:`column`,gap:0,children:u(Ro,{ref:o,direction:`column`,gap:0,style:{overflowX:`hidden`},flex:`1 1 auto`,children:[l(Qi,{timeTableLectures:z,timetablesQuery:j}),u(zo,{direction:r?`column`:`row`,gap:r?12:16,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:[l(Uo,{direction:`column`,gap:0,children:l(ge,{cellWidth:r?`113px`:`125px`,lectures:z,needLectureDeletable:B,onLectureSelect:ce,flashLectureIds:k??void 0,deleteLecture:se,hoveredLectures:f,setHoveredLectures:m,selectedLectures:h,timeFilter:_,setTimeFilter:v})}),!r&&l(te,{direction:`column`}),l(Wo,{children:l(Po,{timetableLectures:z})})]})]})})]})})});export{Ko as default};
//# sourceMappingURL=timetable-B40snOMr.js.map