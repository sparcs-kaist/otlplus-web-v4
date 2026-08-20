(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`e8f1d621b37faed0b2b91543723a2b797aa16389`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`50e74775-3589-4b62-9986-f2221339c31f`,e._sentryDebugIdIdentifier=`sentry-dbid-50e74775-3589-4b62-9986-f2221339c31f`)}catch{}})();import{n as e,r as t,s as n,t as r}from"./jsx-runtime-BhcktveR.js";import{t as i}from"./react-dom-KOqqp78d.js";import{k as a,n as o}from"./chunk-62JRHF6Z-IJLuPJzk.js";import{l as s,n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-CMYLmp-p.js";import{n as d,t as f}from"./FlexWrapper-BdX02euX.js";import{C as p,D as m,S as h,_ as g,b as _,f as v,i as y,v as b,y as x}from"./axios-Pn7ex3V5.js";import{a as S,d as C,f as w,l as T,o as E,s as D,t as O,u as k}from"./useAPI-o0n_pJxs.js";import{i as A,n as j,r as M,t as N}from"./Credits-CMFUt-Qm.js";import{r as P,t as F}from"./Icon-C-gAxBK5.js";import{t as I}from"./IconButton-DtoaplLH.js";import{t as L}from"./useTranslation-Dlxfq7Jt.js";import{t as R}from"./Close-DCkarqeM.js";import{t as z}from"./Typography-BEFiroNf.js";import{t as B}from"./Modal-xlMCYcyd.js";import{t as V}from"./Button-9O9_r7YS.js";import{r as H}from"./proxy-C9PC_My8.js";import{t as ee}from"./StyledDivider-DYfUx6Gi.js";import{t as U}from"./media-SyHqO5iB.js";import{t as te}from"./useIsDevice-CBVxey1j.js";import{t as ne}from"./useThemeStore-CaHhSEV3.js";import{n as re,t as ie}from"./colors-DP1Eg3yD.js";import{t as ae}from"./LoadingCircle-Cx1nRY5w.js";import{i as oe,n as W,t as se}from"./ReviewBlock-CJv4VLdZ.js";import{i as ce,n as le,r as ue,t as de}from"./checkEmpty-DhDaZiRL.js";import{t as fe}from"./Circle-B1ZMKDA3.js";import{n as pe,t as me}from"./CustomTimeTableGrid-BLBjJmBB.js";import{n as he,t as ge}from"./getPlatform-DAuthyzc.js";var G=n(e()),_e=n(i()),ve=n(r(),1),ye=P((0,ve.jsx)(`path`,{d:`M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z`}),`CalendarMonth`),be=P((0,ve.jsx)(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z`}),`ContentCopy`),xe=P((0,ve.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorder`),Se=P((0,ve.jsx)(`path`,{d:`M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z`}),`Image`),Ce=P((0,ve.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),we=P((0,ve.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),K=d.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};
    &:last-child {
        border-bottom: none;
    }
`,q=d.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,J=d.kbd`
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
`,Te=d(z)`
    margin-top: 16px;
    margin-bottom: 8px;
`,Ee=d.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    width: 800px;
`,De=d.div`
    display: flex;
    flex-direction: column;
`;function Oe(){let{t:e}=L(),t=b(e=>e.isShortcutModalOpen),n=b(e=>e.setIsShortcutModalOpen),r=ge(),i=r===he.IOS||r===he.MAC,a=i?`⌘ Cmd`:`Ctrl`;return t?l(B,{isOpen:t,onClose:()=>n(!1),title:e(`timetable.shortcuts.modalTitle`),children:[l(Ee,{children:[l(De,{children:[c(Te,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:0},children:e(`timetable.shortcuts.lectureSection`)}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureMultiple`)}),l(q,{children:[c(J,{children:a}),`/`,c(J,{children:`Shift`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureCopy`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`C`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureCut`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`X`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lecturePaste`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`V`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureAll`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`A`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureDelete`)}),l(q,{children:[c(J,{children:`Delete`}),`/`,c(J,{children:`Backspace`})]})]})]}),l(De,{children:[c(Te,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:0},children:e(`timetable.shortcuts.timetableSection`)}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableUndo`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`Z`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableRedo`)}),l(q,{children:[!i&&l(u,{children:[c(J,{children:a}),c(J,{children:`Y`}),`/`]}),c(J,{children:a}),c(J,{children:`Shift`}),c(J,{children:`Z`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableAdd`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`M`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableDuplicate`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`D`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableDelete`)}),l(q,{children:[c(J,{children:`Delete`}),`/`,c(J,{children:`Backspace`})]})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableSelect`)}),c(q,{children:c(J,{children:`1 ~ 9`})})]})]})]}),c(Te,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:24},children:e(`timetable.shortcuts.etcSection`)}),l(Ee,{children:[l(De,{children:[l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcSemester`)}),c(q,{children:c(J,{children:`[ / ]`})})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcLectureSearchMove`)}),c(q,{children:c(J,{children:`↑ / ↓`})})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcLectureAddDelete`)}),c(q,{children:c(J,{children:`Space / Enter`})})]})]}),l(De,{children:[l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcSelectCancel`)}),c(q,{children:c(J,{children:`Esc`})})]}),l(K,{children:[c(z,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcShortcutInfo`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`/`})]})]})]})]})]}):null}function ke(e){throw Error(`Unexpected timetable action: ${String(e)}`)}function Ae({currentTimetableLectures:e,nonLoginTimetable:t,setNonLoginTimetable:n}){let{status:r}=y(),i=m(),a=b(e=>e.currentTimetableId),o=b(e=>e.setCurrentTimetableId),s=b(e=>e.year),c=b(e=>e.setYear),l=b(e=>e.semesterEnum),u=b(e=>e.setSemesterEnum),d=a==null?v.timetables:v.timetableDetail(a),[f,p]=(0,G.useState)({}),h=(0,G.useRef)(!1),_=`${a??`my`}-${s}-${l}`,C=f[_]||{undo:[],redo:[]},w=C.undo.length>0,T=C.redo.length>0,E=(0,G.useCallback)(e=>{h.current||p(t=>{let n=t[_]||{undo:[],redo:[]},r=Array.isArray(e)?e:[e];return{...t,[_]:{undo:[...n.undo,r].slice(-50),redo:[]}}})},[_]),{query:D}=O(`GET`,`/semesters`),k=(0,G.useCallback)(e=>{let t=!1,n=!1;if(D.data&&D.data.semesters.length>0){let e=D.data.semesters,r=e[0],i=e[e.length-1];r&&i&&(t=s===r.year&&l===r.semester,n=s===i.year&&l===i.semester)}if(e===`prev`){if(t)return;l===x.SPRING?(u(x.FALL),c(s-1)):u(x.SPRING),o(null)}else{if(n)return;l===x.FALL?(u(x.SPRING),c(s+1)):u(x.FALL),o(null)}},[D.data,l,u,c,o,s]),A=(0,G.useRef)(null),j=(0,G.useCallback)(()=>{A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{i.invalidateQueries({queryKey:[d]})},100)},[i,d]),{requestFunction:M}=O(`PATCH`,d,{onMutate:async e=>{await i.cancelQueries({queryKey:[d]});let t=i.getQueryData([d]);return e.lecture&&i.setQueriesData({queryKey:[d]},t=>t&&{...t,lectures:[...t.lectures,e.lecture]}),{previousTimetable:t}},onError:(e,t,n)=>{i.setQueriesData({queryKey:[d]},n?.previousTimetable)},onSettled:j}),{requestFunction:N}=O(`PATCH`,d,{onMutate:async e=>{await i.cancelQueries({queryKey:[d]});let t=i.getQueryData([d]);return i.setQueriesData({queryKey:[d]},t=>t&&{...t,lectures:t.lectures.filter(t=>t.id!==e.lectureId)}),{previousTimetable:t}},onError:(e,t,n)=>{i.setQueriesData({queryKey:[d]},n?.previousTimetable)},onSettled:j}),P=(0,G.useCallback)((e,t={record:!0})=>{if(r!==`loading`){if(r!==`success`){n(t=>{let n=e.filter(e=>!t.some(t=>t.id===e.id));return[...t,...n]}),t.record!==!1&&E({type:S.ADD,lectures:e.map(e=>({lecture:e,lectureId:e.id}))});return}a&&(e.forEach(e=>{M({action:S.ADD,lectureId:e.id,lecture:e})}),t.record!==!1&&E({type:S.ADD,lectures:e.map(e=>({lecture:e,lectureId:e.id}))}))}},[r,a,M,n,E]),F=(0,G.useCallback)((i,o={record:!0,delay:!1})=>{if(r===`loading`)return;let s=r===`success`?[]:t.filter(e=>i.includes(e.id)),c=r===`success`&&a?e.filter(e=>i.includes(e.id)):[],l=()=>{r===`success`?a&&(i.forEach(e=>{N({action:S.DELETE,lectureId:e}),g(`Remove Lecture from Timetable`,{lectureId:e,timetableId:a})}),c.length>0&&o.record!==!1&&E({type:S.DELETE,lectures:c.map(e=>({lecture:e,lectureId:e.id}))})):(n(e=>e.filter(e=>!i.includes(e.id))),s.length>0&&o.record!==!1&&E({type:S.DELETE,lectures:s.map(e=>({lecture:e,lectureId:e.id}))}))};o.delay?setTimeout(l,300):l()},[r,a,t,e,N,n,E]),I=(0,G.useCallback)(e=>{switch(e.type){case S.ADD:P(e.lectures.map(e=>e.lecture),{record:!1});return;case S.DELETE:F(e.lectures.map(e=>e.lectureId),{record:!1,delay:!0});return;default:return ke(e.type)}},[P,F]),L=e=>{switch(e.type){case S.ADD:return{...e,type:S.DELETE};case S.DELETE:return{...e,type:S.ADD};default:return ke(e.type)}},R=e=>[...e].reverse().map(L);return{addLectures:P,removeLectures:F,changeSemester:k,undo:(0,G.useCallback)(()=>{if(r===`loading`)return null;let e=f[_]||{undo:[],redo:[]};if(e.undo.length===0)return null;let t=e.undo[e.undo.length-1];if(!t)return null;p(e=>({...e,[_]:{undo:(e[_]?.undo||[]).slice(0,-1),redo:[...e[_]?.redo||[],t].slice(-50)}})),h.current=!0;let n=R(t);return n.forEach(I),h.current=!1,n.flatMap(e=>e.lectures.map(e=>e.lectureId))},[_,I,f,r]),redo:(0,G.useCallback)(()=>{if(r===`loading`)return null;let e=f[_]||{undo:[],redo:[]};if(e.redo.length===0)return null;let t=e.redo[e.redo.length-1];return t?(p(e=>({...e,[_]:{undo:[...e[_]?.undo||[],t].slice(-50),redo:(e[_]?.redo||[]).slice(0,-1)}})),h.current=!0,t.forEach(I),h.current=!1,t.flatMap(e=>e.lectures.map(e=>e.lectureId))):null},[_,I,f,r]),recordAction:E,canUndo:w,canRedo:T}}function je(e,t){for(let n of e)for(let e of t)if(n.day==e.day&&n.begin<e.end&&e.begin<n.end)return!0;return!1}function Me({currentTimetableLectures:e,undo:t,redo:n,addLectures:r,removeLectures:i,timetableIds:a,isLoggedIn:o,changeSemester:s,recordAction:c}){let{t:l}=L(),u=ge(),d=m(),f=b(e=>e.selectedLectures),p=b(e=>e.setSelectedLectures),h=b(e=>e.year),g=b(e=>e.semesterEnum),_=b(e=>e.setCurrentTimetableId),y=b(e=>e.searchLectures),x=b(e=>e.hoveredLectures),C=b(e=>e.setHoveredLectures),w=b(e=>e.currentTimetableId),T=b(e=>e.isShortcutModalOpen),E=b(e=>e.setIsShortcutModalOpen),D=(0,G.useCallback)(()=>E(e=>!e),[E]),k=(0,G.useRef)(null),A=(0,G.useCallback)((t,n)=>{let r=null;if(n){let e=n.target.closest(`[data-class-time]`);e&&(r=Number(e.getAttribute(`data-class-time`)))}p(i=>{let a=u===he.IOS||u===he.MAC?n?.metaKey:n?.ctrlKey,o=n?.shiftKey;if(a)return k.current=r,i.some(e=>e.id===t.id)?i.filter(e=>e.id!==t.id):[...i,t];if(o){let n=i[i.length-1];if(!n||r===null||k.current===null)return k.current=r,[...i,t];let a=Math.min(k.current,r),o=Math.max(k.current,r),s=e=>!e.classes||e.classes.length===0?[]:e.classes.map(e=>e.day*24*60+e.begin),c=e.filter(e=>e.id===n.id||e.id===t.id||s(e).some(e=>e>=a&&e<=o)),l=new Set(c.map(e=>e.id)),u=i.filter(e=>!l.has(e.id));return k.current=r,[...u,...c]}return k.current=r,i.length===1&&i[0]?.id===t.id?[]:[t]})},[e,u,p]),j=t=>{if(e.some(e=>e.id===t.id))i([t.id]);else{if(e.some(e=>je(e.classes,t.classes))){alert(l(`timetable.addLectureConflict`));return}r([t])}},{requestFunction:M}=O(`POST`,`/timetables`,{onSuccess:e=>{d.invalidateQueries({queryKey:[v.timetables]}),_(e.id)}}),N=(0,G.useCallback)(e=>{o&&M({year:h,semester:g,lectureIds:e})},[o,M,h,g]),{requestFunction:P}=O(`DELETE`,`/timetables`,{onMutate:e=>{w===e.id&&_(null)},onSuccess:()=>{d.invalidateQueries({queryKey:[v.timetables]})}}),F=(0,G.useCallback)(e=>{P({id:e})},[P]),I=(0,G.useRef)(null),R=b(e=>e.triggerFlash);(0,G.useEffect)(()=>{I.current=null},[h,g]);let z=(0,G.useRef)(()=>{});return z.current=d=>{let m=d.target;if(m.tagName===`INPUT`||m.tagName===`TEXTAREA`||m.isContentEditable)return;let h=u===he.IOS||u===he.MAC?d.metaKey:d.ctrlKey;if(h&&d.key===`/`){d.preventDefault(),D();return}if(!T){if(h&&d.key.toLowerCase()===`z`){if(d.preventDefault(),o&&w===null)return;let e=d.shiftKey?n():t();e&&e.length>0&&R(e);return}if(h&&d.key.toLowerCase()===`y`){if(d.preventDefault(),o&&w===null)return;let e=n();e&&e.length>0&&R(e);return}if(h&&d.key.toLowerCase()===`a`){d.preventDefault(),p(e);return}if(h&&d.key.toLowerCase()===`c`){f.length>0&&(d.preventDefault(),I.current={lectures:f,sourceTimetableId:w},R(f.map(e=>e.id)));return}if(h&&d.key.toLowerCase()===`x`){f.length>0&&(d.preventDefault(),I.current={lectures:f,sourceTimetableId:w},R(f.map(e=>e.id)),(!o||w!==null)&&(i(f.map(e=>e.id),{delay:!0}),p([])));return}if(h&&d.key.toLowerCase()===`v`){if(o&&w===null){d.preventDefault();return}let t=I.current;if(t&&t.lectures.length>0){d.preventDefault();let n=t.lectures.filter(t=>!e.some(e=>e.id===t.id));if(n.length===0){R(t.lectures.map(e=>e.id));return}let a=e.filter(e=>n.some(t=>je(e.classes,t.classes)));if(a.length>0){let e=l(`timetable.pasteLectureConflict`);window.confirm(e)&&(i(a.map(e=>e.id),{record:!1,delay:!0}),r(n,{record:!1}),c([{type:S.DELETE,lectures:a.map(e=>({lecture:e,lectureId:e.id}))},{type:S.ADD,lectures:n.map(e=>({lecture:e,lectureId:e.id}))}]),R(t.lectures.map(e=>e.id)))}else r(n),R(t.lectures.map(e=>e.id))}return}if(h&&d.key.toLowerCase()===`m`){d.preventDefault(),o&&N([]);return}if(h&&d.key.toLowerCase()===`d`){d.preventDefault(),o&&N(e.map(e=>e.id));return}if(d.key===`Delete`||d.key===`Backspace`){if(o&&w===null){d.preventDefault();return}f.length>0?(d.preventDefault(),i(f.map(e=>e.id)),p([])):o&&w!==null&&(d.preventDefault(),window.confirm(l(`timetable.timetableKeyboardDeleteConfirm`))&&F(w));return}if(!h&&d.key===`[`){d.preventDefault(),s(`prev`);return}if(!h&&d.key===`]`){d.preventDefault(),s(`next`);return}if(!h&&d.key===`Escape`){let e=!1;f.length>0&&(p([]),e=!0),x.length>0&&(C([]),e=!0),e&&d.preventDefault();return}if(!h&&/^[1-9]$/.test(d.key)){d.preventDefault();let e=parseInt(d.key)-1;if(e<a.length){let t=a[e];t!==void 0&&_(t)}return}if(!h&&[`ArrowUp`,`ArrowDown`,` `,`Enter`].includes(d.key)){if(y.length>0){d.preventDefault();let e=x[0]?.id,t=e?y.findIndex(t=>t.id===e):-1,n=e=>{requestAnimationFrame(()=>{let t=document.querySelector(`[data-search-lecture-id="${e}"]`);t&&(b.setState({isKeyboardNavigating:!0}),t.scrollIntoView({block:`nearest`}))})};if(d.key===`ArrowUp`){let e=Math.max(0,t-1),r=y[e];r&&(C([r]),n(r.id))}else if(d.key===`ArrowDown`){t===y.length-1&&window.dispatchEvent(new CustomEvent(`request-next-page`));let e=Math.min(y.length-1,t+1),r=y[e];r&&(C([r]),n(r.id))}else if(d.key===` `||d.key===`Enter`){if(o&&w===null){d.preventDefault();return}if(t>=0&&t<y.length){let e=y[t];e&&j(e)}}}return}}},(0,G.useEffect)(()=>{let e=e=>z.current(e),t=e=>{(Math.abs(e.movementX)>0||Math.abs(e.movementY)>0)&&b.setState({isKeyboardNavigating:!1})};return document.addEventListener(`keydown`,e),document.addEventListener(`mousemove`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`mousemove`,t)}},[]),{onLectureSelect:A}}function Ne({status:e,currentTimetableId:t,hasOverlap:n}){return e!==`idle`&&t===null||n}function Pe(e){return e.map(e=>e.name).join(`, `)}function Fe(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function Ie(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function Le(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var Re=d(f)`
    width: 100%;
`,ze=d(f)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,Be=d(f)`
    flex: 1 0 0;
`,Ve=d(z)`
    white-space: nowrap;
`,He=({selectedLecture:e})=>{let{t}=L();if(!e)return null;let n=Fe(e.numPeople,e.limitPeople);return l(u,{children:[l(Re,{direction:`column`,gap:8,children:[l(f,{direction:`row`,gap:6,children:[c(Ve,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.type`)}),c(z,{type:`Normal`,color:`Text.default`,children:e?.type})]}),l(f,{direction:`row`,gap:6,children:[c(Ve,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.department`)}),c(z,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),l(f,{direction:`row`,gap:6,children:[c(Ve,{type:`NormalBold`,color:`Text.default`,children:t(`common.professor`)}),c(z,{type:`Normal`,color:`Text.default`,children:Pe(e?.professors||[])})]}),l(f,{direction:`row`,gap:6,children:[c(Ve,{type:`NormalBold`,color:`Text.default`,children:t(`common.room`)}),c(z,{type:`Normal`,color:`Text.default`,children:Le(e?.classes||[])})]}),l(f,{direction:`row`,gap:6,children:[c(Ve,{type:`NormalBold`,color:`Text.default`,children:t(`common.limit`)}),c(z,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),l(f,{direction:`row`,gap:6,children:[c(Ve,{type:`NormalBold`,color:`Text.default`,children:t(`common.exam`)}),c(z,{type:`Normal`,color:`Text.default`,children:Ie(e?.examTimes||[])})]})]}),c(ze,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e.isEnglish?`Eng`:`한`,t(`common.language`)],[e.credit,t(`common.credit`)],[n,t(`timetable.competitionRate`)]].map(([e,t],n)=>l(Be,{direction:`column`,gap:0,align:`center`,children:[c(z,{type:`Bigger`,color:`Text.default`,children:e}),c(z,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},Ue=d(f)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,We=d(f)`
    flex: 1 0 0;
`,Ge=d.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,Ke=({selectedCourseId:e,selectedProfessorId:t})=>{let{t:n}=L(),[r,i]=(0,G.useState)(!1),{query:a,setParams:o,data:s}=j(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:d,inView:p}=A({threshold:0});return(0,G.useEffect)(()=>{i(!1);let n=setTimeout(()=>{o({mode:k.DEFAULT,courseId:e??void 0,professorId:t??void 0}),i(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,G.useEffect)(()=>{p&&a.hasNextPage&&!a.isFetchingNextPage&&a.fetchNextPage()},[p,a]),!s||!r?c(ae,{}):l(u,{children:[c(f,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:c(Ue,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[[T(s?.averageGrade,s?.reviews.length),n(`common.grade`)],[T(s?.averageLoad,s?.reviews.length),n(`common.load`)],[T(s?.averageSpeech,s?.reviews.length),n(`common.speech`)]].map(([e,t],n)=>l(We,{direction:`column`,gap:0,align:`center`,children:[c(z,{type:`Bigger`,color:`Text.default`,children:e}),c(z,{type:`Smaller`,color:`Text.default`,children:t})]},n))})}),c(Ge,{}),s?.reviews.map(e=>c(se,{review:e,linkToDictionary:!0},e.id)),a.hasNextPage&&c(ae,{ref:d})]})},qe=d(f)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Je=d(f)`
    width: 100%;
`,Ye=d(f)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,Xe=d(f)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`,Ze=d(o)`
    text-decoration: none;
`,Qe=d.a`
    text-decoration: none;
`,$e=d(f)`
    width: 100%;
    text-align: center;
`,et=d(f)`
    padding: 12px 16px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,tt=({addLectures:e,removeLectures:t,onMobileModalClose:n,currentTimetableId:r,timetableLectures:i})=>{let a=m(),o=s(),{t:d}=L(),{user:p,status:h}=y(),_=te(`tablet`),x=b(e=>e.selectedLectures),C=b(e=>e.hoveredLectures),w=b(e=>e.year),T=b(e=>e.semesterEnum),E=x.length===1?x[0]:C.length===1?C[0]:null,[D,k]=(0,G.useState)([]),{query:A,setParams:j}=O(`GET`,`/users/${p?.id}/wishlist`,{enabled:h===`success`&&w!==-1});(0,G.useEffect)(()=>{w!==-1&&j({year:w,semester:T})},[w,T,r]),(0,G.useEffect)(()=>{A.data&&k(A.data.courses.flatMap(e=>e.lectures).map(e=>e.id))},[A.data]);let{requestFunction:M}=O(`PATCH`,`/users/${p?.id}/wishlist`,{onSuccess:()=>{p&&a.invalidateQueries({queryKey:[v.userWishlist(p.id)]})}}),P=(0,G.useRef)(null),I=e=>{let t={syy:String(w),smtDivCd:String(T),subjtCd:e.code,syllabusOpenYn:`0`};return`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${btoa(JSON.stringify(t))}`},B=t=>{if(!i)return;let n=i.some(e=>je(e.classes,t.classes));if(Ne({status:h,currentTimetableId:r??null,hasOverlap:n})){n&&alert(d(`timetable.addLectureConflict`));return}e([t]),g(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:r,source:`LectureDetail`})},H=(e,t)=>{if(h===`idle`)return;let n=e?S.DELETE:S.ADD;g(`Update Wishlist`,{action:n,lectureId:t,source:`LectureDetail`}),M({lectureId:t,mode:n})};return c(qe,{direction:`column`,gap:12,align:`center`,justify:!E&&!x.length?`center`:`start`,children:x.length>1?l($e,{direction:`column`,gap:16,align:`stretch`,justify:`flex-start`,children:[l(z,{type:`Bigger`,color:`Text.default`,children:[x.length,d(`timetable.numSelected`)]}),x.map(e=>{let t=pe(o.colors.Tile.TimeTable.default),n=t[e.courseId%t.length];return l(et,{direction:`row`,gap:12,align:`center`,children:[c(F,{size:14,color:n,children:c(fe,{})}),l(f,{direction:`column`,gap:4,flex:`1 1 auto`,children:[l(z,{type:`BigBold`,color:`Text.default`,children:[e.name,` `,e.subtitle]}),l(z,{type:`Small`,color:`Text.dark`,children:[e.professors[0]?.name,` `,e.professors.length>1?`${d(`common.professors.over`)} ${e.professors.length-1}${d(`common.professors.people`)} `:` `,`| `,e.department.name,` | `,e.credit,d(`common.credit`)]})]})]},e.id)})]}):E?l(u,{children:[l(Ye,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[l(f,{direction:`row`,align:`center`,gap:8,justify:_?`space-between`:`center`,style:{width:`100%`},children:[_&&c(`div`,{style:{width:20}}),c(z,{type:`Bigger`,color:`Text.default`,children:E.name+E.subtitle}),_&&c(F,{size:20,onClick:n,color:o.colors.Text.default,children:c(R,{})})]}),c(z,{type:`Big`,color:`Text.default`,children:E.code+` `+(E.classNo===``?``:`(${E.classNo})`)})]}),l(f,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[c(Ze,{to:`/dictionary?courseId=${E.courseId}`,children:c(z,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:d(`header.dictionary`)})}),c(Qe,{href:I(E),target:`_blank`,children:c(z,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:d(`header.syllabus`)})})]}),c(Je,{direction:`column`,gap:10,align:`center`,children:c(He,{selectedLecture:E})}),c(Je,{ref:P,direction:`column`,gap:10,children:c(Ke,{selectedCourseId:E.courseId,selectedProfessorId:E.professors[0]?.id??-1})}),_&&l(Xe,{direction:`row`,gap:12,justify:`flex-end`,children:[h===`success`&&l(V,{onClick:()=>{H(D.includes(E.id),E.id),n&&n()},children:[c(F,{size:15,children:c(oe,{})}),c(z,{type:`NormalBold`,children:D.includes(E.id)?d(`timetable.removeFromWishlist`):d(`timetable.addToWishlist`)})]}),(r!=null||h===`idle`)&&(i?.some(e=>e.id===E.id)?l(V,{type:`selected`,onClick:()=>{t&&t(E.id),n&&n()},children:[c(F,{size:15,children:c(R,{})}),c(z,{type:`NormalBold`,children:d(`timetable.removeFromTimetable`)})]}):l(V,{type:`selected`,onClick:()=>{B(E),n&&n()},children:[c(F,{size:15,children:c(ce,{})}),c(z,{type:`NormalBold`,children:d(`timetable.addToTimetable`)})]}))]})]}):c(N,{})})},nt=d.button`
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
`;function rt({ariaLabel:e,color:t,disabled:n,onClick:r,size:i,title:a}){return c(nt,{type:`button`,"aria-label":e,disabled:n,iconSize:i,onClick:r,title:a,children:c(F,{size:i,color:t,children:c(ce,{})})})}function it(e,t){return[e,t].map(e=>e.trim()).filter(Boolean).join(` `)}function at({classNo:e,subtitle:t}){let n=it(e,t);return n===``?null:c(z,{type:`NormalBold`,color:`Text.default`,children:n})}var ot=d.div`
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
`,st=d(f)`
    width: 100%;
    padding: 8px 12px;
    word-break: keep-all;
`,ct=d.div`
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

    ${U.tablet} {
        &:hover,
        &[data-is-hovered="true"],
        &[data-is-selected="true"] {
            background-color: ${({theme:e})=>e.colors.Background.Block.dark};
        }
    }
`,lt=d.div`
    width: 95%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.block};
    align-self: center;
`,ut=(0,G.memo)(({course:e,wishlist:t,currentTimetableId:n,timetableLectures:r,handleSetHoveredLecture:i,handleClearHoveredLecture:a,handleSetSelectedLecture:o,selectedLectures:u,hoveredLecture:d,handleLikeClick:p,handleAddToTimetable:m,t:h})=>{let{status:g}=y(),_=s(),v=te(`tablet`),b=G.useRef(null);return(0,G.useEffect)(()=>{b.current?.setAttribute(`data-is-selected`,u!=null&&u.length>0&&e.lectures.some(e=>u.some(t=>t.id===e.id))?`true`:`false`)},[u,e]),l(ot,{ref:b,"data-is-selected":``,children:[l(st,{direction:`row`,gap:6,align:`center`,justify:`space-between`,children:[l(f,{direction:`row`,gap:6,align:`center`,style:{opacity:e.completed?.3:1},children:[c(z,{type:`NormalBold`,color:`Text.default`,children:e.name}),c(z,{type:`Normal`,color:`Text.default`,children:e.code})]}),e.completed?c(z,{type:`Normal`,color:`Text.default`,children:h(`common.completedCourse`)}):c(z,{type:`Normal`,color:`Highlight.default`,style:{textAlign:`end`},children:e.type})]}),c(lt,{}),e.lectures.map((s,y)=>{let b=t.includes(s.id),x=d?.some(e=>e.id===s.id),S=u?.some(e=>e.id===s.id),C=r.some(e=>je(e.classes,s.classes)),w=Ne({status:g,currentTimetableId:n,hasOverlap:C});return l(G.Fragment,{children:[l(ct,{"data-lecture-id":s.id,"data-search-lecture-id":s.id,"data-is-hovered":x,"data-is-selected":S,onPointerEnter:()=>i(s),onPointerLeave:a,onClick:e=>o(s,e),lectureId:s.id,children:[l(f,{direction:`column`,gap:0,children:[v&&x&&l(z,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[s.department.name,` / `,s.type]}),l(f,{direction:`row`,gap:6,style:{opacity:e.completed?.3:1},children:[c(at,{classNo:s.classNo,subtitle:s.subtitle}),c(z,{type:`Normal`,color:`Text.default`,children:Pe(s.professors)})]}),v&&x&&l(z,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[s.classes[0]?.buildingName,` `,s.classes[0]?.roomName,` /`,` `,s.limitPeople]})]}),l(f,{direction:`row`,gap:6,onClick:e=>e.stopPropagation(),children:[!v&&g===`success`&&(b?c(F,{size:15,color:_.colors.Highlight.default,onClick:()=>p(b,s.id),children:c(oe,{})}):c(F,{size:15,color:_.colors.Text.default,onClick:()=>p(b,s.id),children:c(xe,{})})),(!v||x)&&c(rt,{ariaLabel:h(`timetable.addToTimetable`),color:_.colors.Text.default,disabled:w,onClick:()=>m(s),size:v?30:15,title:n==null&&g===`success`?h(`timetable.myTimeTableLectureAddWarning`):void 0})]})]}),y!==e.lectures.length-1&&c(lt,{})]},s.id)})]})},(e,t)=>e.course===t.course&&e.wishlist===t.wishlist&&e.currentTimetableId===t.currentTimetableId&&e.timetableLectures===t.timetableLectures&&e.selectedLectures===t.selectedLectures&&e.hoveredLecture===t.hoveredLecture),dt=d(f)`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,ft=d(f)`
    height: 36px;
`,pt=d.div`
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
`;function mt({year:e,semester:t,timeFilter:n,setTimeFilter:r,data:i,setSearchResult:a,isWishlist:o,setIsWishlist:d,setWishlist:p,sortOption:m,setSortOption:h,handleSearch:g,t:_}){let v=s(),{user:b,status:x}=y(),{query:S,setParams:C}=O(`GET`,`/users/${b?.id}/wishlist`,{enabled:x===`success`&&e!=-1});return(0,G.useEffect)(()=>{S.data!==void 0&&a(o?S.data:i??{courses:[]})},[o,i]),(0,G.useEffect)(()=>{S.data!==void 0&&(p(S.data.courses.flatMap(e=>e.lectures).map(e=>e.id)),o&&a(S.data))},[S.data]),(0,G.useEffect)(()=>{a({courses:[]}),e!==-1&&C({year:e,semester:t})},[e,t]),(0,G.useEffect)(()=>{i!==void 0&&(a(i),d(!1))},[i]),l(u,{children:[c(dt,{direction:`row`,justify:`stretch`,gap:0,children:c(le,{options:[`type`,`department`,`level`,`term`,`time`],timeFilter:n,setTimeFilter:r,onSearch:g})}),l(f,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[l(pt,{isSelected:o,onClick:()=>{d(e=>!e)},style:{paddingBlock:10},children:[c(F,{size:15,color:v.colors.Highlight.default,children:c(o?oe:xe,{})}),c(z,{type:`Normal`,color:`Highlight.default`,children:_(`common.wishlist`)})]}),c(ft,{direction:`row`,gap:0,children:c(M,{options:[_(`dictionary.sortOptions.code`),_(`dictionary.sortOptions.popularity`),_(`dictionary.sortOptions.studentCount`)],setSelectedOption:h,selectedOption:m})})]})]})}var ht=(0,G.memo)(mt,(e,t)=>e.year===t.year&&e.semester===t.semester&&e.timeFilter===t.timeFilter&&e.sortOption===t.sortOption&&e.isWishlist===t.isWishlist&&e.data===t.data),gt=d(f)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,_t=d(z)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,vt=d(f)`
    height: fit-content;
    overflow-y: auto;
    position: relative;
    flex-grow: 1;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    /* 상단/하단 페이드 오버레이: 자식 배경에 가려지지 않도록 컨테이너 위에 표시 */
    ${U.tablet} {
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
`,yt=d(f)`
    width: 100%;
`,bt=d(f)`
    width: 100%;
    height: 100%;
    flex-grow: 1;

    ${U.tablet} {
        padding-right: 4px;
    }
`,xt=d.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({theme:e})=>e.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
`,St=e=>{if(!e)return e;let t=new Map;return e.courses.forEach(e=>{let n=t.get(e.id);if(!n){t.set(e.id,{...e,lectures:[...e.lectures]});return}let r=new Set(n.lectures.map(e=>e.id)),i=[...n.lectures];e.lectures.forEach(e=>{r.has(e.id)||(r.add(e.id),i.push(e))}),t.set(e.id,{...n,lectures:i})}),{...e,courses:Array.from(t.values())}},Ct=50,wt=G.memo(({timetableLectures:e,addLectures:t,onLectureSelect:n})=>{let{t:r}=L(),{user:i,status:a}=y(),o=m(),s=b(e=>e.currentTimetableId),u=b(e=>e.year),d=b(e=>e.semesterEnum),f=b(e=>e.hoveredLectures),p=b(e=>e.setHoveredLectures),h=b(e=>e.selectedLectures),_=b(e=>e.setSelectedLectures),x=b(e=>e.timeFilter),T=b(e=>e.setTimeFilter),E=b(e=>e.setSearchLectures),D=(0,G.useCallback)(()=>_([]),[_]),{ref:k,inView:M}=A({threshold:0}),N=te(`tablet`),P=(0,G.useRef)(null),F=(0,G.useRef)(null),I=(0,G.useRef)(null),{requestFunction:R}=O(`PATCH`,`/users/${i?.id}/wishlist`,{onSuccess:()=>{i&&o.invalidateQueries({queryKey:[v.userWishlist(i.id)]})}}),[z,B]=(0,G.useState)(!1),[V,H]=(0,G.useState)({courses:[]}),[ee,U]=(0,G.useState)(!1),[ne,re]=(0,G.useState)([]),[ie,oe]=(0,G.useState)(0),{query:W,setParams:se,data:ce}=j(`GET`,`/lectures`,{infinites:[`courses`],limit:Ct,gcTime:0,select:St,enabled:z,iterate:e=>{let t=0;return e.courses.forEach(e=>{t+=e.lectures.length}),t<Ct?0:t}}),le=(0,G.useCallback)(e=>{if(de(e)){alert(r(`common.search.empty`));return}U(!1);let t={year:u,semester:d,...e,order:C[ie]??w.CODE,offset:0,limit:Ct,day:e.time?.day??void 0,begin:e.time?.begin??void 0,end:e.time?.end??void 0};se(t),B(!0),g(`Search Lectures`,{year:u,semester:d,keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``})},[u,d,ie]);(0,G.useEffect)(()=>{U(!1),se(e=>({...e,order:C[ie]??w.CODE,offset:0}))},[ie]),(0,G.useEffect)(()=>{M&&W.hasNextPage&&!W.isFetchingNextPage&&W.fetchNextPage()},[M,W]),(0,G.useEffect)(()=>{let e=()=>{W.hasNextPage&&!W.isFetchingNextPage&&W.fetchNextPage()};return window.addEventListener(`request-next-page`,e),()=>window.removeEventListener(`request-next-page`,e)},[W]),(0,G.useEffect)(()=>{let e=e=>{P.current&&!P.current.contains(e.target)&&F.current&&F.current.contains(e.target)&&D?.()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let ue=G.useMemo(()=>V.courses.flatMap(e=>e.lectures),[V.courses]);(0,G.useEffect)(()=>{E?.(ue)},[ue,E]);let fe=(0,G.useCallback)(()=>{if(!N)return;if(!I.current){p([]);return}let e=I.current.getBoundingClientRect(),t=e.top+e.height/2,n=document.elementFromPoint(e.left+50,t);if(!n)return;let r=n.closest(`[data-lecture-id]`);if(r){let e=parseInt(r.getAttribute(`data-lecture-id`)||``,10),t=ue.find(t=>t.id===e);p(t?[t]:[])}},[N,ue,p]);(0,G.useEffect)(()=>{if(!N||!I.current)return;let e=I.current;return e.addEventListener(`scroll`,fe),()=>{e.removeEventListener(`scroll`,fe)}},[N,fe]),(0,G.useEffect)(()=>{if(!N||W.isFetching||h&&h.length>0)return;let e,t=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>{fe()})});return()=>{cancelAnimationFrame(t),cancelAnimationFrame(e)}},[W.isFetching,N,fe,h]);let pe=(e,t)=>{if(a===`idle`)return;let n=e?S.DELETE:S.ADD;g(`Update Wishlist`,{action:n,lectureId:t}),re(e?e=>e.filter(e=>e!==t):e=>[...e,t]),R({lectureId:t,mode:n})},me=n=>{if(a===`success`){if(s==null){alert(r(`timetable.myTimeTableLectureAddWarning`));return}if(e.some(e=>je(e.classes,n.classes))){alert(r(`timetable.addLectureConflict`));return}t([n]),g(`Add Lecture to Timetable`,{lectureId:n.id,lectureCode:n.code,courseName:n.name,timetableId:s})}else{if(e.some(e=>je(e.classes,n.classes))){alert(r(`timetable.addLectureConflict`));return}t([n]),g(`Add Lecture to Timetable`,{lectureId:n.id,lectureCode:n.code,courseName:n.name,timetableId:null,isGuest:!0})}},he=(0,G.useCallback)(e=>{N||b.getState().isKeyboardNavigating||p(t=>t.length===1&&t[0]?.id===e.id?t:[e])},[N,p]),ge=(0,G.useCallback)(()=>{N||b.getState().isKeyboardNavigating||p([])},[N,p]),_e=(0,G.useCallback)((e,t)=>{n?.(e,t)},[n]);return(0,G.useEffect)(()=>{I.current?.setAttribute(`data-hovered-lectures`,f.map(e=>e.id).join(` `))},[f,V]),(0,G.useEffect)(()=>{I.current?.setAttribute(`data-selected-lectures`,h?h.map(e=>e.id).join(` `):``)},[h,V]),l(gt,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,ref:F,children:[c(ht,{year:u,semester:d,timeFilter:x,setTimeFilter:T,sortOption:ie,setSortOption:oe,data:ce,isWishlist:ee,setIsWishlist:U,setWishlist:re,setSearchResult:H,t:r,handleSearch:le}),V.courses.length===0?c(_t,{type:`Bigger`,color:`Text.placeholder`,children:r(`dictionary.noResults`)}):c(vt,{direction:`column`,gap:0,ref:I,"data-hovered-lectures":``,"data-selected-lectures":``,children:l(yt,{direction:`row`,gap:0,children:[l(bt,{direction:`column`,gap:12,ref:P,children:[V.courses.map(t=>c(ut,{course:t,hoveredLecture:f,selectedLectures:h,wishlist:ne,currentTimetableId:s,timetableLectures:e,handleSetHoveredLecture:he,handleClearHoveredLecture:ge,handleSetSelectedLecture:_e,handleLikeClick:pe,handleAddToTimetable:me,t:r},t.id)),!ee&&W.hasNextPage&&c(ae,{ref:k})]}),N&&c(xt,{})]})})]})},(e,t)=>e.timetableLectures===t.timetableLectures&&e.addLectures===t.addLectures&&e.onLectureSelect===t.onLectureSelect);function Tt(){var e=[...arguments];return(0,G.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var Et=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Dt(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function Ot(e){return`nodeType`in e}function Y(e){return e?Dt(e)?e:Ot(e)?e.ownerDocument?.defaultView??window:window:window}function kt(e){let{Document:t}=Y(e);return e instanceof t}function At(e){return!Dt(e)&&e instanceof Y(e).HTMLElement}function jt(e){return e instanceof Y(e).SVGElement}function Mt(e){return e?Dt(e)?e.document:Ot(e)?kt(e)?e:At(e)||jt(e)?e.ownerDocument:document:document:document}var Nt=Et?G.useLayoutEffect:G.useEffect;function Pt(e){let t=(0,G.useRef)(e);return Nt(()=>{t.current=e}),(0,G.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function Ft(){let e=(0,G.useRef)(null);return[(0,G.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,G.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function It(e,t){t===void 0&&(t=[e]);let n=(0,G.useRef)(e);return Nt(()=>{n.current!==e&&(n.current=e)},t),n}function Lt(e,t){let n=(0,G.useRef)();return(0,G.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function Rt(e){let t=Pt(e),n=(0,G.useRef)(null);return[n,(0,G.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function zt(e){let t=(0,G.useRef)();return(0,G.useEffect)(()=>{t.current=e},[e]),t.current}var Bt={};function Vt(e,t){return(0,G.useMemo)(()=>{if(t)return t;let n=Bt[e]==null?0:Bt[e]+1;return Bt[e]=n,e+`-`+n},[e,t])}function Ht(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var Ut=Ht(1),Wt=Ht(-1);function Gt(e){return`clientX`in e&&`clientY`in e}function Kt(e){if(!e)return!1;let{KeyboardEvent:t}=Y(e.target);return t&&e instanceof t}function qt(e){if(!e)return!1;let{TouchEvent:t}=Y(e.target);return t&&e instanceof t}function Jt(e){if(qt(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Gt(e)?{x:e.clientX,y:e.clientY}:null}var Yt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[Yt.Translate.toString(e),Yt.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),Xt=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function Zt(e){return e.matches(Xt)?e:e.querySelector(Xt)}var Qt={display:`none`};function $t(e){let{id:t,value:n}=e;return G.createElement(`div`,{id:t,style:Qt},n)}function en(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return G.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function tn(){let[e,t]=(0,G.useState)(``);return{announce:(0,G.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var nn=(0,G.createContext)(null);function rn(e){let t=(0,G.useContext)(nn);(0,G.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function an(){let[e]=(0,G.useState)(()=>new Set),t=(0,G.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,G.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var on={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},sn={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function cn(e){let{announcements:t=sn,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=on}=e,{announce:a,announcement:o}=tn(),s=Vt(`DndLiveRegion`),[c,l]=(0,G.useState)(!1);if((0,G.useEffect)(()=>{l(!0)},[]),rn((0,G.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=G.createElement(G.Fragment,null,G.createElement($t,{id:r,value:i.draggable}),G.createElement(en,{id:s,announcement:o}));return n?(0,_e.createPortal)(u,n):u}var X;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(X||={});function ln(){}function un(e,t){return(0,G.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function dn(){var e=[...arguments];return(0,G.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var fn=Object.freeze({x:0,y:0});function pn(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function mn(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function hn(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function gn(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function _n(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var vn=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=_n(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=pn(_n(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(mn)};function yn(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var bn=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=yn(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(hn)};function xn(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Sn(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:fn}function Cn(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var wn=Cn(1);function Tn(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function En(e,t,n){let r=Tn(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var Dn={ignoreTransform:!1};function On(e,t){t===void 0&&(t=Dn);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=Y(e).getComputedStyle(e);t&&(n=En(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function kn(e){return On(e,{ignoreTransform:!0})}function An(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function jn(e,t){return t===void 0&&(t=Y(e).getComputedStyle(e)),t.position===`fixed`}function Mn(e,t){t===void 0&&(t=Y(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`&&n.test(r)})}function Nn(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(kt(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!At(i)||jt(i)||n.includes(i))return n;let a=Y(e).getComputedStyle(i);return i!==e&&Mn(i,a)&&n.push(i),jn(i,a)?n:r(i.parentNode)}return e?r(e):n}function Pn(e){let[t]=Nn(e,1);return t??null}function Fn(e){return!Et||!e?null:Dt(e)?e:Ot(e)?kt(e)||e===Mt(e).scrollingElement?window:At(e)?e:null:null}function In(e){return Dt(e)?e.scrollX:e.scrollLeft}function Ln(e){return Dt(e)?e.scrollY:e.scrollTop}function Rn(e){return{x:In(e),y:Ln(e)}}var Z;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(Z||={});function zn(e){return!Et||!e?!1:e===document.scrollingElement}function Bn(e){let t={x:0,y:0},n=zn(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var Vn={x:.2,y:.2};function Hn(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=Vn);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=Bn(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=Z.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=Z.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=Z.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=Z.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function Un(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Wn(e){return e.reduce((e,t)=>Ut(e,Rn(t)),fn)}function Gn(e){return e.reduce((e,t)=>e+In(t),0)}function Kn(e){return e.reduce((e,t)=>e+Ln(t),0)}function qn(e,t){if(t===void 0&&(t=On),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Pn(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var Jn=[[`x`,[`left`,`right`],Gn],[`y`,[`top`,`bottom`],Kn]],Yn=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=Nn(t),r=Wn(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of Jn)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}},Xn=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function Zn(e){let{EventTarget:t}=Y(e);return e instanceof t?e:Mt(e)}function Qn(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t&&r>t.y}var $n;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})($n||={});function er(e){e.preventDefault()}function tr(e){e.stopPropagation()}var Q;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(Q||={});var nr={start:[Q.Space,Q.Enter],cancel:[Q.Esc],end:[Q.Space,Q.Enter,Q.Tab]},rr=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Q.Right:return{...n,x:n.x+25};case Q.Left:return{...n,x:n.x-25};case Q.Down:return{...n,y:n.y+25};case Q.Up:return{...n,y:n.y-25}}},ir=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new Xn(Mt(t)),this.windowListeners=new Xn(Y(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add($n.Resize,this.handleCancel),this.windowListeners.add($n.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add($n.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&qn(n),t(fn)}handleKeyDown(e){if(Kt(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=nr,coordinateGetter:a=rr,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:fn;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=Wt(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=Bn(n),p=Un(n),m={x:Math.min(i===Q.Right?p.right-p.width/2:p.right,Math.max(i===Q.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===Q.Down?p.bottom-p.height/2:p.bottom,Math.max(i===Q.Down?p.top:p.top+p.height/2,u.y))},h=i===Q.Right&&!s||i===Q.Left&&!c,g=i===Q.Down&&!l||i===Q.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===Q.Right&&e<=d.x||i===Q.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}r.x=a?n.scrollLeft-e:i===Q.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===Q.Down&&e<=d.y||i===Q.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}r.y=a?n.scrollTop-e:i===Q.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,Ut(Wt(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};ir.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=nr,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function ar(e){return!!(e&&`distance`in e)}function or(e){return!!(e&&`delay`in e)}var sr=class{constructor(e,t,n){n===void 0&&(n=Zn(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=Mt(i),this.documentListeners=new Xn(this.document),this.listeners=new Xn(n),this.windowListeners=new Xn(Y(i)),this.initialCoordinates=Jt(r)??fn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add($n.Resize,this.handleCancel),this.windowListeners.add($n.DragStart,er),this.windowListeners.add($n.VisibilityChange,this.handleCancel),this.windowListeners.add($n.ContextMenu,er),this.documentListeners.add($n.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(or(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(ar(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add($n.Click,tr,{capture:!0}),this.removeTextSelection(),this.documentListeners.add($n.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=Jt(e)??fn,s=Wt(n,o);if(!t&&a){if(ar(a)){if(a.tolerance!=null&&Qn(s,a.tolerance))return this.handleCancel();if(Qn(s,a.distance))return this.handleStart()}if(or(a)&&Qn(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===Q.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},cr={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},lr=class extends sr{constructor(e){let{event:t}=e,n=Mt(t.target);super(e,cr,n)}};lr.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var ur={move:{name:`mousemove`},end:{name:`mouseup`}},dr;(function(e){e[e.RightClick=2]=`RightClick`})(dr||={});var fr=class extends sr{constructor(e){super(e,ur,Mt(e.event.target))}};fr.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==dr.RightClick&&(r?.({event:n}),!0)}}];var pr={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},mr=class extends sr{constructor(e){super(e,pr)}static setup(){return window.addEventListener(pr.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(pr.move.name,e)};function e(){}}};mr.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var hr;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(hr||={});var gr;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(gr||={});function _r(e){let{acceleration:t,activator:n=hr.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=gr.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=yr({delta:d,disabled:!a}),[m,h]=Ft(),g=(0,G.useRef)({x:0,y:0}),_=(0,G.useRef)({x:0,y:0}),v=(0,G.useMemo)(()=>{switch(n){case hr.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case hr.DraggableRect:return i}},[n,i,c]),y=(0,G.useRef)(null),b=(0,G.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),x=(0,G.useMemo)(()=>s===gr.TreeOrder?[...l].reverse():l,[s,l]);(0,G.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of x){if(r?.(e)===!1)continue;let n=l.indexOf(e),i=u[n];if(!i)continue;let{direction:a,speed:s}=Hn(e,i,v,t,f);for(let e of[`x`,`y`])p[e][a[e]]||(s[e]=0,a[e]=0);if(s.x>0||s.y>0){h(),y.current=e,m(b,o),g.current=s,_.current=a;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,b,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,x,u,JSON.stringify(f)])}var vr={x:{[Z.Backward]:!1,[Z.Forward]:!1},y:{[Z.Backward]:!1,[Z.Forward]:!1}};function yr(e){let{delta:t,disabled:n}=e,r=zt(t);return Lt(e=>{if(n||!r||!e)return vr;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Z.Backward]:e.x[Z.Backward]||i.x===-1,[Z.Forward]:e.x[Z.Forward]||i.x===1},y:{[Z.Backward]:e.y[Z.Backward]||i.y===-1,[Z.Forward]:e.y[Z.Forward]||i.y===1}}},[n,t,r])}function br(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return Lt(e=>t==null?null:r??e??null,[r,t])}function xr(e,t){return(0,G.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Sr;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Sr||={});var Cr;(function(e){e.Optimized=`optimized`})(Cr||={});var wr=new Map;function Tr(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,G.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,G.useRef)(e),d=g(),f=It(d),p=(0,G.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,G.useRef)(null),h=Lt(t=>{if(d&&!n)return wr;if(!t||t===wr||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new Yn(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,G.useEffect)(()=>{u.current=e},[e]),(0,G.useEffect)(()=>{d||p()},[n,d]),(0,G.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,G.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Sr.Always:return!1;case Sr.BeforeDragging:return n;default:return!n}}}function Er(e,t){return Lt(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Dr(e,t){return Er(e,t)}function Or(e){let{callback:t,disabled:n}=e,r=Pt(t),i=(0,G.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,G.useEffect)(()=>()=>i?.disconnect(),[i]),i}function kr(e){let{callback:t,disabled:n}=e,r=Pt(t),i=(0,G.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,G.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Ar(e){return new Yn(On(e),e)}function jr(e,t,n){t===void 0&&(t=Ar);let[r,i]=(0,G.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Or({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=kr({callback:a});return Nt(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Mr(e){return Sn(e,Er(e))}var Nr=[];function Pr(e){let t=(0,G.useRef)(e),n=Lt(n=>e?n&&n!==Nr&&e&&t.current&&e.parentNode===t.current.parentNode?n:Nn(e):Nr,[e]);return(0,G.useEffect)(()=>{t.current=e},[e]),n}function Fr(e){let[t,n]=(0,G.useState)(null),r=(0,G.useRef)(e),i=(0,G.useCallback)(e=>{let t=Fn(e.target);t&&n(e=>e?(e.set(t,Rn(t)),new Map(e)):null)},[]);return(0,G.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=Fn(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,Rn(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{Fn(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,G.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>Ut(e,t),fn):Wn(e):fn,[e,t])}function Ir(e,t){t===void 0&&(t=[]);let n=(0,G.useRef)(null);return(0,G.useEffect)(()=>{n.current=null},t),(0,G.useEffect)(()=>{let t=e!==fn;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?Wt(e,n.current):fn}function Lr(e){(0,G.useEffect)(()=>{if(!Et)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Rr(e,t){return(0,G.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function zr(e){return(0,G.useMemo)(()=>e?An(e):null,[e])}var Br=[];function Vr(e,t){t===void 0&&(t=On);let[n]=e,r=zr(n?Y(n):null),[i,a]=(0,G.useState)(Br);function o(){a(()=>e.length?e.map(e=>zn(e)?r:new Yn(t(e),e)):Br)}let s=kr({callback:o});return Nt(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function Hr(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return At(t)?t:e}function Ur(e){let{measure:t}=e,[n,r]=(0,G.useState)(null),i=kr({callback:(0,G.useCallback)(e=>{for(let{target:n}of e)if(At(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=Rt((0,G.useCallback)(e=>{let n=Hr(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,G.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var Wr=[{sensor:lr,options:{}},{sensor:ir,options:{}}],Gr={current:{}},Kr={draggable:{measure:kn},droppable:{measure:kn,strategy:Sr.WhileDragging,frequency:Cr.Optimized},dragOverlay:{measure:On}},qr=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},Jr={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new qr,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ln},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Kr,measureDroppableContainers:ln,windowRect:null,measuringScheduled:!1},Yr={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:ln,draggableNodes:new Map,over:null,measureDroppableContainers:ln},Xr=(0,G.createContext)(Yr),Zr=(0,G.createContext)(Jr);function Qr(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new qr}}}function $r(e,t){switch(t.type){case X.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case X.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case X.DragEnd:case X.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case X.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new qr(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case X.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new qr(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case X.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new qr(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function ei(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,G.useContext)(Xr),a=zt(r),o=zt(n?.id);return(0,G.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!Kt(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=Zt(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function ti(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function ni(e){return(0,G.useMemo)(()=>({draggable:{...Kr.draggable,...e?.draggable},droppable:{...Kr.droppable,...e?.droppable},dragOverlay:{...Kr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function ri(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,G.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;Nt(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Sn(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Pn(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var ii=(0,G.createContext)({...fn,scaleX:1,scaleY:1}),ai;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(ai||={});var oi=(0,G.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=Wr,collisionDetection:o=bn,measuring:s,modifiers:c,...l}=e,[u,d]=(0,G.useReducer)($r,void 0,Qr),[f,p]=an(),[m,h]=(0,G.useState)(ai.Uninitialized),g=m===ai.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:b}}=u,x=_==null?null:v.get(_),S=(0,G.useRef)({initial:null,translated:null}),C=(0,G.useMemo)(()=>_==null?null:{id:_,data:x?.data??Gr,rect:S},[_,x]),w=(0,G.useRef)(null),[T,E]=(0,G.useState)(null),[D,O]=(0,G.useState)(null),k=It(l,Object.values(l)),A=Vt(`DndDescribedBy`,t),j=(0,G.useMemo)(()=>b.getEnabled(),[b]),M=ni(s),{droppableRects:N,measureDroppableContainers:P,measuringScheduled:F}=Tr(j,{dragging:g,dependencies:[y.x,y.y],config:M.droppable}),I=br(v,_),L=(0,G.useMemo)(()=>D?Jt(D):null,[D]),R=K(),z=Dr(I,M.draggable.measure);ri({activeNode:_==null?null:v.get(_),config:R.layoutShiftCompensation,initialRect:z,measure:M.draggable.measure});let B=jr(I,M.draggable.measure,z),V=jr(I?I.parentElement:null),H=(0,G.useRef)({activatorEvent:null,active:null,activeNode:I,collisionRect:null,collisions:null,droppableRects:N,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ee=b.getNodeFor(H.current.over?.id),U=Ur({measure:M.dragOverlay.measure}),te=U.nodeRef.current??I,ne=g?U.rect??B:null,re=!!(U.nodeRef.current&&U.rect),ie=Mr(re?null:B),ae=zr(te?Y(te):null),oe=Pr(g?ee??I:null),W=Vr(oe),se=ti(c,{transform:{x:y.x-ie.x,y:y.y-ie.y,scaleX:1,scaleY:1},activatorEvent:D,active:C,activeNodeRect:B,containerNodeRect:V,draggingNodeRect:ne,over:H.current.over,overlayNodeRect:U.rect,scrollableAncestors:oe,scrollableAncestorRects:W,windowRect:ae}),ce=L?Ut(L,y):null,le=Fr(oe),ue=Ir(le),de=Ir(le,[B]),fe=Ut(se,ue),pe=ne?wn(ne,se):null,me=C&&pe?o({active:C,collisionRect:pe,droppableRects:N,droppableContainers:j,pointerCoordinates:ce}):null,he=gn(me,`id`),[ge,ve]=(0,G.useState)(null),ye=xn(re?se:Ut(se,de),ge?.rect??null,B),be=(0,G.useRef)(null),xe=(0,G.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(w.current==null)return;let i=v.get(w.current);if(!i)return;let a=e.nativeEvent,o=new n({active:w.current,activeNode:i,event:a,options:r,context:H,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=k.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=k.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=w.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=k.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:S}};(0,_e.unstable_batchedUpdates)(()=>{r?.(i),h(ai.Initializing),d({type:X.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),E(be.current),O(a)})},onMove(e){d({type:X.DragMove,coordinates:e})},onEnd:s(X.DragEnd),onCancel:s(X.DragCancel)});be.current=o;function s(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=H.current,o=null;if(t&&i){let{cancelDrop:s}=k.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===X.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=X.DragCancel)}w.current=null,(0,_e.unstable_batchedUpdates)(()=>{d({type:e}),h(ai.Uninitialized),ve(null),E(null),O(null),be.current=null;let t=e===X.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=k.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),Se=xr(a,(0,G.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(w.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},w.current=r,xe(n,t))},[v,xe]));Lr(a),Nt(()=>{B&&m===ai.Initializing&&h(ai.Initialized)},[B,m]),(0,G.useEffect)(()=>{let{onDragMove:e}=k.current,{active:t,activatorEvent:n,collisions:r,over:i}=H.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:fe.x,y:fe.y},over:i};(0,_e.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[fe.x,fe.y]),(0,G.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=H.current;if(!e||w.current==null||!t||!i)return;let{onDragOver:a}=k.current,o=r.get(he),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,_e.unstable_batchedUpdates)(()=>{ve(s),a?.(c),f({type:`onDragOver`,event:c})})},[he]),Nt(()=>{H.current={activatorEvent:D,active:C,activeNode:I,collisionRect:pe,collisions:me,droppableRects:N,draggableNodes:v,draggingNode:te,draggingNodeRect:ne,droppableContainers:b,over:ge,scrollableAncestors:oe,scrollAdjustedTranslate:fe},S.current={initial:ne,translated:pe}},[C,I,me,pe,v,te,ne,N,b,ge,oe,fe]),_r({...R,delta:y,draggingRect:pe,pointerCoordinates:ce,scrollableAncestors:oe,scrollableAncestorRects:W});let Ce=(0,G.useMemo)(()=>({active:C,activeNode:I,activeNodeRect:B,activatorEvent:D,collisions:me,containerNodeRect:V,dragOverlay:U,draggableNodes:v,droppableContainers:b,droppableRects:N,over:ge,measureDroppableContainers:P,scrollableAncestors:oe,scrollableAncestorRects:W,measuringConfiguration:M,measuringScheduled:F,windowRect:ae}),[C,I,B,D,me,V,U,v,b,N,ge,P,oe,W,M,F,ae]),we=(0,G.useMemo)(()=>({activatorEvent:D,activators:Se,active:C,activeNodeRect:B,ariaDescribedById:{draggable:A},dispatch:d,draggableNodes:v,over:ge,measureDroppableContainers:P}),[D,Se,C,B,d,A,v,ge,P]);return G.createElement(nn.Provider,{value:p},G.createElement(Xr.Provider,{value:we},G.createElement(Zr.Provider,{value:Ce},G.createElement(ii.Provider,{value:ye},i)),G.createElement(ei,{disabled:n?.restoreFocus===!1})),G.createElement(cn,{...n,hiddenTextDescribedById:A}));function K(){let e=T?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),si=(0,G.createContext)(null),ci=`button`,li=`Draggable`;function ui(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=Vt(li),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,G.useContext)(Xr),{role:p=ci,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,G.useContext)(g?ii:si),[v,y]=Rt(),[b,x]=Rt(),S=Rr(o,t),C=It(n);return Nt(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:b,data:C}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,G.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===ci?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:S,node:v,over:f,setNodeRef:y,setActivatorNodeRef:x,transform:_}}function di(){return(0,G.useContext)(Zr)}var fi=`Droppable`,pi={timeout:25};function mi(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=Vt(fi),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,G.useContext)(Xr),u=(0,G.useRef)({disabled:n}),d=(0,G.useRef)(!1),f=(0,G.useRef)(null),p=(0,G.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...pi,...i},_=It(h??r),v=kr({callback:(0,G.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[y,b]=Rt((0,G.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),x=It(t);return(0,G.useEffect)(()=>{!v||!y.current||(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,G.useEffect)(()=>(s({type:X.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:x}}),()=>s({type:X.UnregisterDroppable,key:a,id:r})),[r]),(0,G.useEffect)(()=>{n!==u.current.disabled&&(s({type:X.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:b}}var hi=e=>{let{transform:t}=e;return{...t,y:0}};function gi(e,t,n){let r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}var _i=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:gi(r,n,t)};function vi(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function yi(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function bi(e){return e!==null&&e>=0}function xi(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Si(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var Ci={scaleX:1,scaleY:1},wi=e=>{let{rects:t,activeNodeRect:n,activeIndex:r,overIndex:i,index:a}=e,o=t[r]??n;if(!o)return null;let s=Ti(t,a,r);if(a===r){let e=t[i];return e?{x:r<i?e.left+e.width-(o.left+o.width):e.left-o.left,y:0,...Ci}:null}return a>r&&a<=i?{x:-o.width-s,y:0,...Ci}:a<r&&a>=i?{x:o.width+s,y:0,...Ci}:{x:0,y:0,...Ci}};function Ti(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return!r||!i&&!a?0:n<t?i?r.left-(i.left+i.width):a.left-(r.left+r.width):a?a.left-(r.left+r.width):r.left-(i.left+i.width)}var Ei=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=vi(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},Di=`Sortable`,Oi=G.createContext({activeIndex:-1,containerId:Di,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ei,disabled:{draggable:!1,droppable:!1}});function ki(e){let{children:t,id:n,items:r,strategy:i=Ei,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=di(),d=Vt(Di,n),f=s.rect!==null,p=(0,G.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,G.useRef)(p),v=!xi(p,_.current),y=g!==-1&&h===-1||v,b=Si(a);Nt(()=>{v&&m&&u(p)},[v,p,m,u]),(0,G.useEffect)(()=>{_.current=p},[p]);let x=(0,G.useMemo)(()=>({activeIndex:h,containerId:d,disabled:b,disableTransforms:y,items:p,overIndex:g,useDragOverlay:f,sortedRects:yi(p,c),strategy:i}),[h,d,b.draggable,b.droppable,y,p,g,c,f,i]);return G.createElement(Oi.Provider,{value:x},t)}var Ai=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return vi(n,r,i).indexOf(t)},ji=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},Mi={duration:200,easing:`ease`},Ni=`transform`,Pi=Yt.Transition.toString({property:Ni,duration:0,easing:`linear`}),Fi={roleDescription:`sortable`};function Ii(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,G.useState)(null),s=(0,G.useRef)(n);return Nt(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=On(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,G.useEffect)(()=>{a&&o(null)},[a]),a}function Li(e){let{animateLayoutChanges:t=ji,attributes:n,disabled:r,data:i,getNewIndex:a=Ai,id:o,strategy:s,resizeObserverConfig:c,transition:l=Mi}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,G.useContext)(Oi),y=Ri(r,p),b=u.indexOf(o),x=(0,G.useMemo)(()=>({sortable:{containerId:d,index:b,items:u},...i}),[d,i,b,u]),S=(0,G.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:C,node:w,isOver:T,setNodeRef:E}=mi({id:o,data:x,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...c}}),{active:D,activatorEvent:O,activeNodeRect:k,attributes:A,setNodeRef:j,listeners:M,isDragging:N,over:P,setActivatorNodeRef:F,transform:I}=ui({id:o,data:x,attributes:{...Fi,...n},disabled:y.draggable}),L=Tt(E,j),R=!!D,z=R&&!m&&bi(f)&&bi(g),B=!_&&N,V=z?(B&&z?I:null)??(s??v)({rects:h,activeNodeRect:k,activeIndex:f,overIndex:g,index:b}):null,H=bi(f)&&bi(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):b,ee=D?.id,U=(0,G.useRef)({activeId:ee,items:u,newIndex:H,containerId:d}),te=u!==U.current.items,ne=t({active:D,containerId:d,isDragging:N,isSorting:R,id:o,index:b,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:l,wasDragging:U.current.activeId!=null}),re=Ii({disabled:!ne,index:b,node:w,rect:C});return(0,G.useEffect)(()=>{R&&U.current.newIndex!==H&&(U.current.newIndex=H),d!==U.current.containerId&&(U.current.containerId=d),u!==U.current.items&&(U.current.items=u)},[R,H,d,u]),(0,G.useEffect)(()=>{if(ee===U.current.activeId)return;if(ee!=null&&U.current.activeId==null){U.current.activeId=ee;return}let e=setTimeout(()=>{U.current.activeId=ee},50);return()=>clearTimeout(e)},[ee]),{active:D,activeIndex:f,attributes:A,data:x,rect:C,index:b,newIndex:H,items:u,isOver:T,isSorting:R,isDragging:N,listeners:M,node:w,overIndex:g,over:P,setNodeRef:L,setActivatorNodeRef:F,setDroppableNodeRef:E,setDraggableNodeRef:j,transform:re??V,transition:ie()};function ie(){if(re||te&&U.current.newIndex===b)return Pi;if(!(B&&!Kt(O)||!l)&&(R||ne))return Yt.Transition.toString({...l,property:Ni})}}function Ri(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}Q.Down,Q.Right,Q.Up,Q.Left;var zi=d(f)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function Bi({year:e,semester:t,setYear:n,setSemester:r,setCurrentTimetableId:i}){let a=s(),{query:o}=O(`GET`,`/semesters`);(0,G.useEffect)(()=>{let e=o.data?.semesters;if(e&&e.length>0){let t=e[e.length-1];t&&(n(t.year),r(t.semester))}},[o.data]);let{isFirstSemester:u,isLastSemester:d}=(0,G.useMemo)(()=>{if(!o.data)return{isFirstSemester:!1,isLastSemester:!1};let n=o.data.semesters,r=n[0],i=n[n.length-1];return!r||!i?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===r.year&&t===r.semester,isLastSemester:e===i.year&&t===i.semester}},[o.data,e,t]);return l(zi,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[c(I,{onClick:u?void 0:()=>{u||(t===x.SPRING?(r(x.FALL),n(e-1)):r(x.SPRING),i(null))},styles:{padding:2.5},children:c(F,{size:20,color:u?a.colors.Text.disable:a.colors.Highlight.default,onClick:u?void 0:()=>{},children:c(Ce,{})})}),c(z,{color:`Highlight.default`,children:e}),c(z,{color:`Highlight.default`,children:_(t)}),c(I,{onClick:d?void 0:()=>{d||(t===x.FALL?(r(x.SPRING),n(e+1)):r(x.FALL),i(null))},styles:{padding:2.5},children:c(F,{size:20,color:d?a.colors.Text.disable:a.colors.Highlight.default,onClick:d?void 0:()=>{},children:c(we,{})})})]})}var Vi=d.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,Hi={default:d(Vi)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:d(Vi)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},Ui=d.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,Wi=e=>c(Ui,{children:e}),Gi=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=Hi[e],a=()=>Wi(t);return c(i,{ref:n,...r,onClick:r.onClick,children:c(a,{})})};function Ki(e,t,n){return e.filter(e=>e.year===t&&e.semester===n).sort((e,t)=>e.timeTableOrder-t.timeTableOrder)}function qi({status:e,currentTimetableId:t,semesterKey:n,autoSelectedSemesterKeys:r,preserveMyTimetableSelection:i,timetables:a}){return e!==`success`||a.length===0||i&&t==null||r.includes(n)?null:{semesterKey:n,timetableId:t==null?a[0]?.id??null:null}}var Ji=d(f)`
    width: 100%;
    max-width: 992px;

    ${U.laptop} {
        max-width: 635px;
    }

    ${U.tablet} {
        max-width: 100%;
    }
`,Yi=d(f)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,Xi=d(z)`
    outline: none;
    user-select: none;
`,Zi=({timetable:e,isSelected:t,onClick:n,onCopy:r,onDelete:i,onNameChange:a,isDragging:o})=>{let u=s(),{attributes:d,listeners:p,setNodeRef:m,transform:h,transition:g}=Li({id:e.id}),_={transform:(e=>{if(!e)return``;let{x:t,y:n}=e;return`translate3d(${t}px, ${n}px, 0)`})(h),transition:g,touchAction:`manipulation`,opacity:o?.5:1};return c(`div`,{ref:m,style:_,...d,...p,children:l(Gi,{type:t?`selected`:`default`,onClick:n,children:[c(Xi,{onClick:e=>{t&&(e.stopPropagation(),e.currentTarget.contentEditable=`true`,e.currentTarget.focus())},onBlur:t=>{let n=t.currentTarget.textContent||``;t.currentTarget.contentEditable=`false`,a(e.id,n)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},contentEditable:!1,suppressContentEditableWarning:!0,type:`Normal`,color:t?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:e.name?e.name:`No Title`}),l(f,{direction:`row`,gap:0,align:`center`,children:[t&&c(I,{onClick:r,styles:{padding:5},children:c(F,{size:15,onClick:()=>{},color:t?u.colors.Highlight.default:u.colors.Text.lighter,children:c(be,{})})}),c(I,{onClick:i,styles:{padding:3.75},children:c(F,{size:17.5,onClick:()=>{},color:t?u.colors.Highlight.default:u.colors.Text.lighter,children:c(R,{})})})]})]})})},Qi=({timeTableLectures:e,timetablesQuery:t})=>{let{t:n}=L(),{status:r}=y(),i=s(),a=b(e=>e.currentTimetableId),o=b(e=>e.setCurrentTimetableId),u=b(e=>e.setCurrentTimetableName),d=b(e=>e.year),p=b(e=>e.semesterEnum),m=b(e=>e.setYear),h=b(e=>e.setSemesterEnum),g=b(e=>e.autoSelectedSemesterKeys),_=b(e=>e.markSemesterAutoSelected),v=b(e=>e.resetAutoSelectedSemesters),x=b(e=>e.pendingMyTimetableSelection),S=b(e=>e.setPendingMyTimetableSelection),{requestFunction:C}=O(`POST`,`/timetables`,{onSuccess:e=>{t.refetch(),o(e.id)}}),{requestFunction:w}=O(`DELETE`,`/timetables`,{onMutate:e=>{a===e.id&&o(null)},onSuccess:()=>{t.refetch()}}),{requestFunction:T}=O(`PATCH`,`/timetables`,{onSuccess:()=>{t.refetch()}}),[E,D]=(0,G.useState)([]),[k,A]=(0,G.useState)(null),j=dn(un(fr,{activationConstraint:{distance:8}}),un(mr,{activationConstraint:{delay:500,tolerance:5}}));return(0,G.useEffect)(()=>{let e=Ki(t.data?.timetables??[],d,p);if(D(e),a!=null&&t.data?.timetables.forEach(e=>{e.id===a&&u(e.name)}),r!==`success`){v();return}let n=`${d}-${p}`;if(x){if(d<0)return;_(n),S(!1);return}let i=qi({status:r,currentTimetableId:a,semesterKey:n,autoSelectedSemesterKeys:g,preserveMyTimetableSelection:!1,timetables:e});i!=null&&(_(i.semesterKey),i.timetableId!=null&&o(i.timetableId))},[t.data,d,p,r,a,g,_,v,x,S,o]),(0,G.useEffect)(()=>{u(a==null?n(`timetable.myTimetable`):E.find(e=>e.id===a)?.name||``)},[a,E,u,n]),l(Ji,{direction:`row`,justify:`space-between`,align:`stretch`,flex:`0 1 auto`,gap:4,style:{overflowX:`hidden`},children:[l(f,{direction:`row`,gap:3,flex:`0 1 auto`,style:{overflowX:`auto`},children:[l(Gi,{type:a==null?`selected`:`default`,onClick:()=>{S(!0),o(null)},children:[c(z,{type:`Normal`,color:a===null?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:n(`timetable.myTimetable`)}),a===null&&r===`success`&&c(I,{onClick:t=>{t.stopPropagation(),C({year:d,semester:p,lectureIds:e.map(e=>e.id)})},styles:{padding:5},children:c(F,{size:15,color:i.colors.Highlight.default,onClick:()=>{},children:c(be,{})})})]},`my-timetable`),r===`success`&&l(Yi,{direction:`row`,gap:3,flex:`1 1 auto`,onWheel:e=>{if(e.deltaY===0)return;let t=e.currentTarget;t.scrollLeft+=e.deltaY},children:[c(oi,{sensors:j,collisionDetection:vn,onDragStart:e=>{A(e.active.id)},onDragEnd:e=>{let{active:t,over:n}=e;if(A(null),n&&t.id!==n.id){let e=E.findIndex(e=>e.id===t.id),r=E.findIndex(e=>e.id===n.id),i=vi(E,e,r);D(i);let a=t.id;T({id:a,order:r})}},modifiers:[hi,_i],children:c(ki,{items:E.map(e=>e.id),strategy:wi,children:E.map(t=>c(Zi,{timetable:t,isSelected:a===t.id,isDragging:k===t.id,onClick:()=>{o(t.id)},onCopy:t=>{t.stopPropagation(),C({year:d,semester:p,lectureIds:e.map(e=>e.id)})},onDelete:e=>{e.stopPropagation(),w({id:t.id})},onNameChange:(e,t)=>{D(n=>n.map(n=>n.id===e?{...n,name:t}:n)),T({id:e,name:t})}},t.id))})}),c(Gi,{onClick:()=>{C({year:d,semester:p,lectureIds:[]})},children:c(I,{onClick:e=>{},styles:{padding:3.75},children:c(F,{size:17.5,color:i.colors.Text.default,onClick:()=>{},children:c(ce,{})})})})]})]}),c(f,{direction:`row`,gap:0,align:`center`,children:c(Bi,{year:d,semester:p,setYear:m,setSemester:h,setCurrentTimetableId:o})})]})},$i=d.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;

    ${U.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px 8px;
    }
`,ea=d.div`
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

    ${U.tablet} {
        padding-left: 0;
    }
`,ta=d.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;

    ${U.mobile} {
        font-size: 12px;
    }
`,na=d.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    white-space: nowrap;

    ${U.mobile} {
        font-size: 12px;
    }
`,ra=d.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({theme:e})=>e.colors.Highlight.default};

    ${U.mobile} {
        display: none;
    }
`;function ia({hover:e,setHover:t,timetableLectures:n}){let{t:r}=L(),{lecturesByType:i,creditsByType:a}=(0,G.useMemo)(()=>{let e={basicRequired:0,basicElective:0,majorRequired:0,majorElective:0,humanitiesSocial:0,etc:0},t={basicRequired:[],basicElective:[],majorRequired:[],majorElective:[],humanitiesSocial:[],etc:[]};return n.forEach(n=>{n.type.includes(`기초필수`)?(e.basicRequired+=n.credit,t.basicRequired.push(n)):n.type.includes(`기초선택`)?(e.basicElective+=n.credit,t.basicElective.push(n)):n.type.includes(`전공필수`)?(e.majorRequired+=n.credit,t.majorRequired.push(n)):n.type.includes(`전공선택`)?(e.majorElective+=n.credit,t.majorElective.push(n)):n.type.includes(`인문`)?(e.humanitiesSocial+=n.credit,t.humanitiesSocial.push(n)):(e.etc+=n.credit,e.etc+=n.creditAU,t.etc.push(n))}),{lecturesByType:t,creditsByType:e}},[n]);function o(e){for(let t of[`basicRequired`,`basicElective`,`majorRequired`,`majorElective`,`humanitiesSocial`,`etc`])if(e.type.includes(r(`common.type.${t}`)))return t;return`etc`}function s(t,n){if(!e||e.length==0||e?.length>1)return``;let r=e[0];return t.map(e=>e.id).includes(r.id)?`(${r.creditAU?r.creditAU:r.credit})`:n===o(r)?`(+${r.creditAU?r.creditAU:r.credit})`:``}return l($i,{children:[l(ea,{onMouseEnter:()=>t(i.basicRequired),onMouseLeave:()=>t([]),children:[c(ta,{children:r(`common.type.basicRequiredShort`)}),c(na,{children:a.basicRequired}),c(ra,{children:s(i.basicRequired,`basicRequired`)})]}),l(ea,{onMouseEnter:()=>t(i.basicElective),onMouseLeave:()=>t([]),children:[c(ta,{children:r(`common.type.basicElectiveShort`)}),c(na,{children:a.basicElective}),c(ra,{children:s(i.basicElective,`basicElective`)})]}),l(ea,{onMouseEnter:()=>t(i.majorRequired),onMouseLeave:()=>t([]),children:[c(ta,{children:r(`common.type.majorRequiredShort`)}),c(na,{children:a.majorRequired}),c(ra,{children:s(i.majorRequired,`majorRequired`)})]}),l(ea,{onMouseEnter:()=>t(i.majorElective),onMouseLeave:()=>t([]),children:[c(ta,{children:r(`common.type.majorElectiveShort`)}),c(na,{children:a.majorElective}),c(ra,{children:s(i.majorElective,`majorElective`)})]}),l(ea,{onMouseEnter:()=>t(i.humanitiesSocial),onMouseLeave:()=>t([]),children:[c(ta,{children:r(`common.type.humanitiesSocialElectiveShort`)}),c(na,{children:a.humanitiesSocial}),c(ra,{children:s(i.humanitiesSocial,`humanitiesSocial`)})]}),l(ea,{onMouseEnter:()=>t(i.etc),onMouseLeave:()=>t([]),children:[c(ta,{children:r(`common.type.etcShort`)}),c(na,{children:a.etc}),c(ra,{children:s(i.etc,`etc`)})]})]})}var aa=d.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${U.mobile} {
        gap: 20px;
    }
`,oa=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,sa=d.span`
    font-size: 20px;
    font-weight: 300;
`,ca=d.span`
    font-size: 10px;
    font-weight: 400;
`,la=d.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${U.mobile} {
        gap: 20px;
    }
`,ua=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`,da=d.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.Text.default};
`,fa=d.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.Text.dark};
`;function pa({timetableLectures:e,hover:t,setHover:n}){let{t:r}=L(),i=(0,G.useMemo)(()=>{let n=e.reduce((e,t)=>e+t.credit,0),r=e.reduce((e,t)=>e+t.creditAU,0);if(t&&t.length==1){let i=t[0];e.some(e=>e.id===i.id)||(n+=i.credit,r+=i.creditAU)}let i=0,a=0,o=0,s=e.length;return e.forEach(e=>{i+=e.averageGrade,a+=e.averageLoad,o+=e.averageSpeech,e.averageGrade===0&&e.averageLoad===0&&e.averageSpeech===0&&--s}),i/=s,a/=s,o/=s,{totalCredits:n,totalAU:r,avgGrade:i,avgLoad:a,avgSpeech:o}},[e,t]);return l(u,{children:[l(aa,{children:[l(oa,{onMouseEnter:()=>n(e.filter(e=>e.credit>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.credit>0),children:[c(sa,{children:i.totalCredits}),c(ca,{children:r(`common.credit`)})]}),l(oa,{onMouseEnter:()=>n(e.filter(e=>e.creditAU>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.creditAU>0),children:[c(sa,{children:i.totalAU}),c(ca,{children:`AU`})]})]}),l(la,{children:[l(ua,{children:[c(da,{children:T(i.avgGrade/3)}),c(fa,{children:r(`common.grade`)})]}),l(ua,{children:[c(da,{children:T(i.avgLoad/3)}),c(fa,{children:r(`common.load`)})]}),l(ua,{children:[c(da,{children:T(i.avgSpeech/3)}),c(fa,{children:r(`common.speech`)})]})]})]})}var ma=d(f)`
    overflow-y: auto;
    min-height: 0;
`,ha=d.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`,ga=d.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({color:e,theme:t})=>e||t.colors.Text.default};
    min-width: 16px;
`,_a=d(f)`
    color: ${({highlighted:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,va=[{day:E.Mon,color:`#E54C65`},{day:E.Tue,color:`#F5A623`},{day:E.Wed,color:`#7ED321`},{day:E.Thu,color:`#4A90D9`},{day:E.Fri,color:`#9B59B6`}];function ya({timetableLectures:e,hover:t,setHover:n}){let{t:r}=L(),i=(0,G.useMemo)(()=>{let n={[E.Mon]:[],[E.Tue]:[],[E.Wed]:[],[E.Thu]:[],[E.Fri]:[]};if(e.forEach(e=>{e.examTimes.forEach(t=>{if(t==null)return;let r=t.day;n[r]&&n[r].push({lectureName:e.name,lectureId:e.id,time:t.str.split(` `).slice(1).join(` `)})})}),t&&t.length==1){let r=t[0];e.some(e=>e.id===r.id)||r.examTimes.forEach(e=>{if(e==null)return;let t=e.day;n[t]&&n[t].push({lectureName:r.name,lectureId:r.id,time:e.str})})}return n},[e,t]);return l(ma,{direction:`column`,gap:15,style:{width:`100%`},flex:`1 1 0`,children:[c(z,{type:`NormalBold`,color:`Text.default`,children:r(`timetable.examTimetable`)}),va.map(({day:r,color:a})=>{let o=i[r];return!o||o.length===0?null:l(ha,{children:[c(ga,{color:a,onMouseEnter:()=>{n(e.filter(e=>e.examTimes.some(e=>e?.day===r)))},onMouseLeave:()=>n([]),children:D(r,!0)}),c(f,{direction:`column`,gap:2,children:o.sort((e,t)=>e.time.localeCompare(t.time)).map((r,i)=>l(_a,{direction:`column`,gap:0,highlighted:t?.some(e=>e.id===r.lectureId),onMouseEnter:()=>n(e.filter(e=>e.id===r.lectureId)),onMouseLeave:()=>n([]),children:[c(z,{type:`NormalBold`,children:r.lectureName}),c(z,{type:`Normal`,children:r.time})]},i))})]},r)})]})}var ba=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(e=>e??`#CCCCCC`),xa=d.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`,Sa=d.img`
    object-fit: cover;
    object-position: center;
    filter: ${({isDarkMode:e})=>e?`invert(100%) sepia(100%) grayscale(100%) brightness(0.7)`:`none`};

    /* Performance Optimization: Force GPU layer to prevent repaints on hover */
    transform: translateZ(0);
    will-change: filter;
`,Ca=d.div`
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
`,wa=d.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({theme:e})=>e.colors.Background.Section.default};
    position: absolute;
    top: 17px;
`,Ta=d.div`
    background-color: ${({theme:e,courseId:t,highlighted:n})=>n?e.colors.Highlight.default:(()=>{let n=ba(e.colors?.Tile?.TimeTable?.default);return n[t%n.length]})()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`,Ea=new Map([[`E2`,{left:50,top:67}],[`E3`,{left:56,top:61}],[`E6`,{left:57,top:52}],[`E7`,{left:65,top:50}],[`E11`,{left:45,top:47}],[`E16`,{left:45,top:40}],[`N1`,{left:75,top:30}],[`N3`,{left:45,top:34}],[`N4`,{left:53,top:32}],[`N5`,{left:63,top:28}],[`N7`,{left:27,top:30}],[`N22`,{left:67,top:26}],[`N24`,{left:65,top:22}],[`N25`,{left:49,top:26}],[`N27`,{left:47,top:17}],[`W1`,{left:26,top:68}],[`W8`,{left:27,top:44}],[`W16`,{left:34,top:73}]]);function Da({timetableLectures:e,hover:t,setHover:n}){let{displayedTheme:r}=ne(),i=(0,G.useMemo)(()=>c(Sa,{src:`/campus_map.svg`,alt:`Campus Map`,isDarkMode:r===`dark`,decoding:`async`}),[r]);return l(xa,{children:[i,Array.from(Ea).map(([r,{left:i,top:a}])=>{let o=e.filter(e=>e.classes.some(e=>e.buildingCode.includes(r)));return t?.forEach(t=>{e.includes(t)||t.classes.some(e=>e.buildingCode.includes(r))&&o.push(t)}),o.length===0?null:l(Ca,{left:i,top:a,onMouseEnter:()=>{n(o)},onMouseLeave:()=>{n([])},highlighted:t?.some(e=>o.includes(e))??!1,children:[c(wa,{}),r,o.map(e=>c(Ta,{courseId:e.courseId,highlighted:t?.includes(e)??!1},e.id))]},r)})]})}var Oa=t((e=>{e.createCanvas=function(e,t){return Object.assign(document.createElement(`canvas`),{width:e,height:t})},e.loadImage=function(e,t){return new Promise(function(n,r){let i=Object.assign(document.createElement(`img`),t);function a(){i.onload=null,i.onerror=null}i.onload=function(){a(),n(i)},i.onerror=function(){a(),r(Error(`Failed to load the image "`+e+`"`))},i.src=e})}}))(),ka=(e=>(e.DAILY=`DAILY`,e.HOURLY=`HOURLY`,e.MINUTELY=`MINUTELY`,e.MONTHLY=`MONTHLY`,e.SECONDLY=`SECONDLY`,e.WEEKLY=`WEEKLY`,e.YEARLY=`YEARLY`,e))(ka||{}),Aa=(e=>(e.FR=`FR`,e.MO=`MO`,e.SA=`SA`,e.SU=`SU`,e.TH=`TH`,e.TU=`TU`,e.WE=`WE`,e))(Aa||{});function ja(e,t,n){if(Array.isArray(t))e.x=t.map(e=>{if(Array.isArray(e))return e;if(typeof e.key!=`string`||typeof e.value!=`string`)throw Error(`Either key or value is not a string!`);if(e.key.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e.key,e.value]});else if(typeof t==`object`)e.x=Object.entries(t).map(([e,t])=>{if(typeof e!=`string`||typeof t!=`string`)throw Error(`Either key or value is not a string!`);if(e.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e,t]});else if(typeof t==`string`&&typeof n==`string`){if(t.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");e.x.push([t,n])}else return e.x.map(e=>({key:e[0],value:e[1]}))}function Ma(e,t){if(e instanceof Date&&isNaN(e.getTime())||typeof e==`string`&&isNaN(new Date(e).getTime()))throw Error(`\`${t}\` has to be a valid date!`);if(e instanceof Date||typeof e==`string`||typeof e==`object`&&e&&(Ya(e)||Ja(e)||qa(e)||Ka(e))||Ba(e)&&e.isValid===!0||(Va(e)||za(e))&&e.isValid())return e;throw Error(`\`${t}\` has to be a valid date!`)}function Na(e,t){let n=Object.values(e),r=String(t).toUpperCase();if(!r||!n.includes(r))throw Error(`Input must be one of the following: ${n.join(`, `)}`);return r}function Pa(e,t){let n=null;if(typeof t==`string`){let e=t.match(/^(.+) ?<([^>]+)>$/);e?n={email:e[2].trim(),name:e[1].trim()}:t.includes(`@`)&&(n={email:t.trim(),name:t.trim()})}else typeof t==`object`&&(n={email:t.email,mailto:t.mailto,name:t.name,sentBy:t.sentBy});if(!n&&typeof t==`string`)throw Error("`"+e+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n)throw Error("`"+e+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n.name)throw Error("`"+e+".name` is empty!");if(!n.email)throw Error("`"+e+".email` is empty!");return n}function $(e,t){return String(e).replace(t?/[\\"]/g:/[\\;,]/g,function(e){return`\\`+e}).replace(/(?:\r\n|\r|\n)/g,`\\n`)}function Fa(e){return e.split(`\r
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
`),this.data.events.forEach(t=>e+=t.toString()),e+=Ra(this.data),e+=`END:VCALENDAR`,Fa(e)}ttl(e){return e===void 0?this.data.ttl:(Ha(e)?this.data.ttl=e.asSeconds():e&&e>0?this.data.ttl=e:this.data.ttl=null,this)}url(e){return e===void 0?this.data.url:(this.data.url=e||null,this)}x(e,t){if(e===void 0)return ja(this.data);if(typeof e==`string`&&typeof t==`string`)ja(this.data,e,t);else if(typeof e==`object`)ja(this.data,e);else throw Error(`Either key or value is not a string!`);return this}};function _o(e){return new go(e)}var vo=_o;function yo(e){let{ctx:t,x:n,y:r,width:i,height:a,radius:o,color:s}=e;t.fillStyle=s,t.beginPath(),t.moveTo(n+o,r),t.lineTo(n+i-o,r),t.quadraticCurveTo(n+i,r,n+i,r+o),t.lineTo(n+i,r+a-o),t.quadraticCurveTo(n+i,r+a,n+i-o,r+a),t.lineTo(n+o,r+a),t.quadraticCurveTo(n,r+a,n,r+a-o),t.lineTo(n,r+o),t.quadraticCurveTo(n,r,n+o,r),t.closePath(),t.fill()}function bo(e,t,n,r){let i=document.createElement(`canvas`).getContext(`2d`);if(!i)return[];i.font=`${r}px ${n}`;let a=``,o=[];for(let n of e){let e=a+n;i.measureText(e).width>t&&a!==``?(o.push(a),a=n):a=e}return a&&o.push(a),o}function xo(e){let{ctx:t,x:n,y:r,text:i,font:a,fontSize:o,color:s,align:c=`left`}=e;t.fillStyle=s,t.font=`${o}px ${a}`,t.textAlign=c||`left`,t.fillText(i,n,r)}function So(e){let{ctx:t,x:n,y:r,width:i,height:a,title:o,professor:s,location:c,font:l,fontSize:u,displayMode:d}=e,f=bo(o,i,l,u),p=bo(s,i,l,u),m=bo(c,i,l,u),h=[...f,...m,...p].slice(0,3),g=(a-h.reduce((e,t,n)=>t===``?e+2:e+u,0))/2+u-7;h.forEach((e,i)=>{e===``?g+=2:(xo({ctx:t,x:n,y:r+g,text:e,font:l,fontSize:u,color:i<f.length?`#000000`:d===`dark`?`#4C4C4C`:`#888888`}),g+=u+5)})}async function Co(e){let{timetableName:t,lectures:n,timetableType:r,semesterName:i,semesterFontSize:a,tileFontSize:o,displayMode:s,language:c}=e,l=Object.values(s===`dark`?ie.Tile.TimeTable.default:re.Tile.TimeTable.default).flatMap(e=>Object.values(e)),u=`timetable_template/Image_template_${r}_${s}_${c}.png`,d=new Image;d.src=u,await new Promise((e,t)=>{d.onload=e,d.onerror=t});let f=await(0,Oa.loadImage)(u),p=(0,Oa.createCanvas)(f.width,f.height),m=p.getContext(`2d`);m.drawImage(f,0,0),xo({ctx:m,x:r===`5days`?952:1302,y:78,text:i+` `+t,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:a,color:`#CCCCCC`,align:`right`});for(let e of n){let t=l[e.courseId%l.length]||`#F2CECE`;for(let n of e.classes){let{day:r,begin:i,end:a}=n,[c,l,u,d]=[178*r+76,i*4/3-486,171,(a-i)*4/3-7];yo({ctx:m,x:c,y:l,width:u,height:d,radius:4,color:t}),So({ctx:m,x:c+12,y:l+8,width:u-24,height:d-16,title:e.name,professor:W(e.professors)||``,location:n.buildingCode+` `+n.roomName||``,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:o,displayMode:s})}}return p}async function wo(e){let t=(await Co(e)).toDataURL(`image/png`),n=document.createElement(`a`);n.href=t,n.download=`${e.timetableName}.png`,n.click(),URL.revokeObjectURL(t)}async function To(e){let t=(await Co(e)).toDataURL(`image/png`),n=await(await fetch(t)).blob();if(!navigator.clipboard?.write)return;let r=new ClipboardItem({"image/png":n});await navigator.clipboard.write([r])}function Eo(e){let{name:t,lectures:n,semesterObject:r}=e,i=vo({name:t,prodId:`//SPARCS//OTL Plus`,timezone:`Asia/Seoul`});for(let e of n)for(let t of e.classes){let n=t.buildingCode+` `+t.roomName,a=new Date(r.beginning),o=(t.day+1)%7,s=new Date(a),c=s.getDay(),l=(o+7-c)%7;s.setDate(s.getDate()+l);let u=Math.floor(t.begin/60),d=t.begin%60,f=Math.floor(t.end/60),p=t.end%60,m=new Date(s);m.setHours(u,d,0,0);let h=new Date(s);h.setHours(f,p,0,0),i.createEvent({start:m,end:h,summary:e.name,location:n,repeating:{freq:ka.WEEKLY,until:new Date(r.end)},timezone:`Asia/Seoul`}).alarms([{type:ao.display,trigger:900}])}let a=new Blob([i.toString()],{type:`text/calendar;charset=utf-8`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=`${t}.ics`,s.click(),URL.revokeObjectURL(o)}var Do=d(f)`
    width: 100%;

    ${U.laptop} {
        height: 56px;
        flex-wrap: wrap;
        align-items: center;
    }

    ${U.tablet} {
        height: auto;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
`,Oo=d.button`
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

    &:hover {
        text-decoration: underline;
    }
`;function ko({timetableName:e,timetableLectures:t,year:n,semester:r}){let{t:i,i18n:a}=L(),o=s(),u=te(`tablet`),{displayedTheme:d}=ne(),{query:f}=O(`GET`,`/semesters`),[p,m]=(0,G.useState)(`idle`),h=(0,G.useMemo)(()=>f?f.data?.semesters.find(e=>e.year===n&&e.semester===r):null,[f.data,n,r]),g=(0,G.useMemo)(()=>t.some(e=>e.classes.some(e=>e.day>=5))?`7days`:`5days`,[t]);return(0,G.useEffect)(()=>{if(p.startsWith(`success`)){let e=setTimeout(()=>{m(`idle`)},500);return()=>clearTimeout(e)}},[p]),l(Do,{direction:u?`row`:`column`,gap:8,children:[l(Oo,{onClick:()=>{p===`idle`&&(To({timetableName:e,lectures:t,timetableType:g,semesterName:n+` `+_(r),semesterFontSize:30,tileFontSize:18,displayMode:d,language:a.resolvedLanguage==`ko`?`ko`:`en`}),m(`successCopyImage`))},children:[c(F,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:c(p==`successCopyImage`?ue:be,{})}),!u&&c(`span`,{children:i(`timetable.copyImage`)})]}),l(Oo,{onClick:()=>{p===`idle`&&(wo({timetableName:e,lectures:t,timetableType:g,semesterName:n+` `+_(r),semesterFontSize:30,tileFontSize:18,displayMode:d,language:a.resolvedLanguage==`ko`?`ko`:`en`}),m(`successDownloadImage`))},children:[c(F,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:c(p==`successDownloadImage`?ue:Se,{})}),!u&&c(`span`,{children:i(`timetable.exportImage`)})]}),l(Oo,{onClick:()=>{if(p===`idle`){if(!h)return;Eo({name:e,lectures:t,semesterObject:{beginning:new Date(h.beginning),end:new Date(h.end)}}),m(`successDownloadCalendar`)}},children:[c(F,{size:16,color:o.colors.Highlight.default,children:c(p==`successDownloadCalendar`?ue:ye,{})}),!u&&c(`span`,{children:i(`timetable.exportICal`)})]})]})}var Ao=d.div`
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

    ${U.laptop} {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`;function jo({timetableLectures:e}){let t=te(`laptop`),n=b(e=>e.currentTimetableName),r=b(e=>e.year),i=b(e=>e.semesterEnum),a=b(e=>e.selectedLectures),o=b(e=>e.hoveredLectures),s=b(e=>e.setHoveredLectures),u=a.length>0?a:o;return l(Ao,{children:[!t&&c(Da,{timetableLectures:e,hover:u,setHover:s}),c(ia,{hover:u,setHover:s,timetableLectures:e}),!t&&c(ee,{direction:`row`}),c(pa,{timetableLectures:e,hover:u,setHover:s}),!t&&c(ee,{direction:`row`}),!t&&c(ya,{timetableLectures:e,hover:u,setHover:s}),!t&&c(ee,{direction:`row`}),!t&&c(ko,{timetableName:n,timetableLectures:e,year:r,semester:i})]})}function Mo(e){return p(e)&&e.response?.status===h.BadRequest}var No=d(f)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${U.tablet} {
        padding: 8px;
    }

    ${U.mobile} {
        padding: 0 8px 8px 8px;
    }
`,Po=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${U.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }

    ${U.tablet} {
        flex: 1 1 0;
        min-height: 0;
        height: 100%;
    }
`,Fo=d(f)`
    border-radius: 12px;
    width: fit-content;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${U.laptop} {
        max-width: none;
    }

    ${U.tablet} {
        width: 100%;
        max-width: none;
        flex: 1 0 0;
        overflow: hidden;
    }
`,Io=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px;
    flex: 1;
    min-height: 0;
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${U.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`,Lo=d.div`
    width: 330px;
    height: 100%;
    display: flex;

    ${U.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${U.laptop} {
        width: 300px;
    }
`,Ro=d.div`
    width: 270px;
    height: 100%;
    display: flex;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${U.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${U.laptop} {
        width: 300px;
    }

    ${U.tablet} {
        width: 100%;
    }
`,zo=d.div`
    ${U.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,Bo=d(f)`
    flex: 1;
    min-height: 0;
    overflow: hidden;

    ${U.laptop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,Vo=d.div`
    ${U.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${U.tablet} {
        height: auto;
        padding: 8px;
    }
`,Ho=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
`,Uo=a(function(){let{status:e}=y(),t=s(),n=te(`tablet`),r=te(`laptop`),i=te(`desktop`);(0,G.useEffect)(()=>{g(`Page View`,{page:`Timetable`})},[]);let a=(0,G.useRef)(null),o=(0,G.useRef)(null),d=(0,G.useRef)(null),p=b(e=>e.hoveredLectures),m=b(e=>e.setHoveredLectures),h=b(e=>e.selectedLectures),_=b(e=>e.setSelectedLectures),v=b(e=>e.timeFilter),x=b(e=>e.setTimeFilter),S=b(e=>e.currentTimetableId),C=b(e=>e.setCurrentTimetableId),w=b(e=>e.currentTimetableName),T=b(e=>e.year),E=b(e=>e.semesterEnum),D=b(e=>e.mobileSearchOpen),k=b(e=>e.setMobileSearchOpen),A=b(e=>e.flashLectureIds),{query:j,setParams:M}=O(`GET`,`/timetables`,{enabled:e===`success`}),[N,P]=(0,G.useState)([]),{query:I}=O(`GET`,`/timetables/${S}`,{enabled:S!==null&&e===`success`,retry:(e,t)=>!Mo(t)&&e<1}),{query:L,setParams:R}=O(`GET`,`/timetables/my-timetable`,{enabled:e===`success`}),V=e===`success`?S===null?L.data?.lectures??[]:I.data?.lectures??[]:N,U=e!==`success`||S!==null,ne=j.refetch;(0,G.useEffect)(()=>{S===null||!Mo(I.error)||(C(null),ne())},[S,ne,C,I.error]),(0,G.useEffect)(()=>{m([]),_([])},[D]),(0,G.useEffect)(()=>{let e=e=>{!n&&a.current&&!a.current.contains(e.target)&&o.current&&!o.current.contains(e.target)&&(m([]),_([]))};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[n]),(0,G.useEffect)(()=>{_([]),m([]),T!==-1&&(R({year:T,semester:E}),M({year:T,semester:E})),P([])},[T,E]),(0,G.useEffect)(()=>{n||(_([]),m([]))},[S]),(0,G.useEffect)(()=>{v!==null&&n&&k(!0)},[v]);let{addLectures:re,removeLectures:ie,changeSemester:ae,undo:oe,redo:W,recordAction:se}=Ae({currentTimetableLectures:V,nonLoginTimetable:N,setNonLoginTimetable:P}),ce=(0,G.useMemo)(()=>U?e=>ie([e]):void 0,[U,ie]),{onLectureSelect:le}=Me({currentTimetableLectures:V,undo:oe,redo:W,addLectures:re,removeLectures:ie,timetableIds:[null,...j.data?.timetables.sort((e,t)=>e.timeTableOrder-t.timeTableOrder).map(e=>e.id)||[]],isLoggedIn:e===`success`,changeSemester:ae,recordAction:se});return c(No,{direction:n?`column`:`row`,align:`stretch`,justify:`center`,gap:n?8:12,flex:`1 0 0`,ref:d,children:n?l(u,{children:[l(Fo,{ref:o,direction:`column`,gap:0,align:`stretch`,justify:`stretch`,style:D?{flex:`1 1 0`,minHeight:0}:void 0,children:[c(Qi,{timeTableLectures:V,timetablesQuery:j}),c(Io,{direction:`column`,gap:12,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:c(Bo,{direction:`column`,gap:0,align:`stretch`,flex:`1 1 auto`,children:c(me,{lectures:V,needLectureDeletable:U,onLectureSelect:le,flashLectureIds:A??void 0,deleteLecture:ce,hoveredLectures:p,setHoveredLectures:m,selectedLectures:h,timeFilter:v,setTimeFilter:x})})})]}),c(Vo,{children:c(jo,{timetableLectures:V})}),l(Ho,{direction:`row`,gap:0,children:[c(ko,{timetableName:w,timetableLectures:V,year:T,semester:E}),l(f,{direction:`row`,gap:4,align:`center`,style:{height:`100%`},onClick:()=>{k(!D)},children:[c(F,{size:16,color:t.colors.Highlight.default,children:c(H,{})}),c(z,{type:`Normal`,color:`Highlight.default`,children:D?`검색 닫기`:`과목 검색하기`})]})]}),D&&c(Po,{direction:`row`,align:`flex-start`,gap:12,ref:a,children:c(Ro,{children:c(wt,{timetableLectures:V,addLectures:re,onLectureSelect:le})})}),h.length>0&&c(B,{isOpen:h.length>0,onClose:()=>{},fullScreen:!0,header:!1,children:c(tt,{addLectures:re,removeLectures:ce,onMobileModalClose:()=>{m([]),_([])},currentTimetableId:S,timetableLectures:V})})]}):l(u,{children:[c(Oe,{}),l(Po,{direction:i?`column-reverse`:`row`,align:`flex-start`,gap:12,ref:a,children:[r&&c(zo,{children:c(ko,{timetableName:w,timetableLectures:V,year:T,semester:E})}),c(Ro,{style:{overflow:`auto`},children:c(wt,{timetableLectures:V,addLectures:re,onLectureSelect:le})}),!i&&c(ee,{direction:`column`}),c(Lo,{style:{overflow:`auto`},children:c(tt,{timetableLectures:V,addLectures:re,removeLectures:ce})})]}),c(f,{direction:`column`,gap:0,children:l(Fo,{ref:o,direction:`column`,gap:0,style:{overflowX:`hidden`},flex:`1 1 auto`,children:[c(Qi,{timeTableLectures:V,timetablesQuery:j}),l(Io,{direction:r?`column`:`row`,gap:r?12:16,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:[c(Bo,{direction:`column`,gap:0,children:c(me,{cellWidth:r?`113px`:`125px`,lectures:V,needLectureDeletable:U,onLectureSelect:le,flashLectureIds:A??void 0,deleteLecture:ce,hoveredLectures:p,setHoveredLectures:m,selectedLectures:h,timeFilter:v,setTimeFilter:x})}),!r&&c(ee,{direction:`column`}),c(Vo,{children:c(jo,{timetableLectures:V})})]})]})})]})})});export{Uo as default};
//# sourceMappingURL=timetable-DlIfKX7_.js.map