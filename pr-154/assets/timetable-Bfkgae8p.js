(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`0e348888cafd5e7914b4805cbc9c6ea9eb39bf16`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`566c39fe-6dd1-497c-8e78-7b1e457e98a9`,e._sentryDebugIdIdentifier=`sentry-dbid-566c39fe-6dd1-497c-8e78-7b1e457e98a9`)}catch{}})();import{n as e,r as t,s as n,t as r}from"./jsx-runtime-BN04LmJ7.js";import{t as i}from"./react-dom-DvMBDR6w.js";import{A as a,r as o}from"./chunk-QFMPRPBF-CyQ4Gt2V.js";import{l as s,n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-DCVPK9ih.js";import{n as d,t as f}from"./FlexWrapper-B8hq2OXM.js";import{_ as p,a as m,i as h,x as g}from"./axios-B5f5hBbR.js";import{a as _,i as v,l as y,o as b,s as x,t as S}from"./useAPI-BLaKCVt5.js";import{i as C,n as w,r as T,t as E}from"./Credits-BIIwA3rc.js";import{r as D,t as O}from"./Icon-COxk-iTB.js";import{t as k}from"./IconButton-DCQzid9c.js";import{t as A}from"./useTranslation-h1ySlJw6.js";import{t as j}from"./Close-DKKzfTq4.js";import{t as M}from"./Typography-DWGiGovt.js";import{t as N}from"./Modal-BGq0ab3l.js";import{t as P}from"./Button-CbU7mYCL.js";import{r as ee}from"./proxy-qB9xG4T0.js";import{t as F}from"./StyledDivider-DoU5-4eU.js";import{t as I}from"./media-UzyoX53J.js";import{t as L}from"./useIsDevice-DeHeSpYb.js";import{t as te}from"./useThemeStore-Bvi5NXAm.js";import{n as R,t as ne}from"./colors-3zScwapy.js";import{t as z}from"./LoadingCircle-D7fheZA6.js";import{i as B,n as V,t as re}from"./ReviewBlock-Bh77LJGb.js";import{i as H,n as ie,r as ae,t as oe}from"./checkEmpty-LL8K35dT.js";import{t as U}from"./Circle-CblpwP5m.js";import{n as se,t as ce}from"./CustomTimeTableGrid-C54SYPL4.js";import{t as le}from"./getPlatform-DI5JfNvb.js";var W=n(e()),ue=n(i()),de=n(r(),1),fe=D((0,de.jsx)(`path`,{d:`M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z`}),`CalendarMonth`),pe=D((0,de.jsx)(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z`}),`ContentCopy`),me=D((0,de.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorder`),he=D((0,de.jsx)(`path`,{d:`M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z`}),`Image`),ge=D((0,de.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),_e=D((0,de.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),G=m(e=>({hoveredLectures:[],selectedLectures:[],timeFilter:null,searchLectures:[],isShortcutModalOpen:!1,mobileSearchOpen:!1,isKeyboardNavigating:!1,currentTimetableId:null,currentTimetableName:``,year:-1,semesterEnum:b.SPRING,autoSelectedSemesterKeys:[],flashLectureIds:null,setHoveredLectures:t=>e(e=>({hoveredLectures:typeof t==`function`?t(e.hoveredLectures):t})),setSelectedLectures:t=>e(e=>({selectedLectures:typeof t==`function`?t(e.selectedLectures):t})),setTimeFilter:t=>e(e=>({timeFilter:typeof t==`function`?t(e.timeFilter):t})),setSearchLectures:t=>e(e=>({searchLectures:typeof t==`function`?t(e.searchLectures):t})),setIsShortcutModalOpen:t=>e(e=>({isShortcutModalOpen:typeof t==`function`?t(e.isShortcutModalOpen):t})),setMobileSearchOpen:t=>e(e=>({mobileSearchOpen:typeof t==`function`?t(e.mobileSearchOpen):t})),setIsKeyboardNavigating:t=>e(e=>({isKeyboardNavigating:typeof t==`function`?t(e.isKeyboardNavigating):t})),setCurrentTimetableId:t=>e(e=>({currentTimetableId:typeof t==`function`?t(e.currentTimetableId):t})),setCurrentTimetableName:t=>e(e=>({currentTimetableName:typeof t==`function`?t(e.currentTimetableName):t})),setYear:t=>e(e=>({year:typeof t==`function`?t(e.year):t})),setSemesterEnum:t=>e(e=>({semesterEnum:typeof t==`function`?t(e.semesterEnum):t})),markSemesterAutoSelected:t=>e(e=>e.autoSelectedSemesterKeys.includes(t)?{}:{autoSelectedSemesterKeys:[...e.autoSelectedSemesterKeys,t]}),resetAutoSelectedSemesters:()=>e(e=>e.autoSelectedSemesterKeys.length===0?{}:{autoSelectedSemesterKeys:[]}),triggerFlash:t=>{e({flashLectureIds:t}),setTimeout(()=>{e(e=>e.flashLectureIds===t?{flashLectureIds:null}:{})},300)}})),K=d.div`
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
`,ve=d(M)`
    margin-top: 16px;
    margin-bottom: 8px;
`,ye=d.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    width: 800px;
`,be=d.div`
    display: flex;
    flex-direction: column;
`;function xe(){let{t:e}=A(),t=G(e=>e.isShortcutModalOpen),n=G(e=>e.setIsShortcutModalOpen),r=le(),i=r===`ios`||r===`mac`,a=i?`⌘ Cmd`:`Ctrl`;return t?l(N,{isOpen:t,onClose:()=>n(!1),title:e(`timetable.shortcuts.modalTitle`),children:[l(ye,{children:[l(be,{children:[c(ve,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:0},children:e(`timetable.shortcuts.lectureSection`)}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureMultiple`)}),l(q,{children:[c(J,{children:a}),`/`,c(J,{children:`Shift`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureCopy`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`C`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureCut`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`X`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lecturePaste`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`V`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureAll`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`A`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureDelete`)}),l(q,{children:[c(J,{children:`Delete`}),`/`,c(J,{children:`Backspace`})]})]})]}),l(be,{children:[c(ve,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:0},children:e(`timetable.shortcuts.timetableSection`)}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableUndo`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`Z`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableRedo`)}),l(q,{children:[!i&&l(u,{children:[c(J,{children:a}),c(J,{children:`Y`}),`/`]}),c(J,{children:a}),c(J,{children:`Shift`}),c(J,{children:`Z`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableAdd`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`M`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableDuplicate`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`D`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableDelete`)}),l(q,{children:[c(J,{children:`Delete`}),`/`,c(J,{children:`Backspace`})]})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableSelect`)}),c(q,{children:c(J,{children:`1 ~ 9`})})]})]})]}),c(ve,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:24},children:e(`timetable.shortcuts.etcSection`)}),l(ye,{children:[l(be,{children:[l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcSemester`)}),c(q,{children:c(J,{children:`[ / ]`})})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcLectureSearchMove`)}),c(q,{children:c(J,{children:`↑ / ↓`})})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcLectureAddDelete`)}),c(q,{children:c(J,{children:`Space / Enter`})})]})]}),l(be,{children:[l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcSelectCancel`)}),c(q,{children:c(J,{children:`Esc`})})]}),l(K,{children:[c(M,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcShortcutInfo`)}),l(q,{children:[c(J,{children:a}),c(J,{children:`/`})]})]})]})]})]}):null}var Se=50;function Ce({currentTimetableLectures:e,nonLoginTimetable:t,setNonLoginTimetable:n}){let{status:r}=h(),i=g(),a=G(e=>e.currentTimetableId),o=G(e=>e.setCurrentTimetableId),s=G(e=>e.year),c=G(e=>e.setYear),l=G(e=>e.semesterEnum),u=G(e=>e.setSemesterEnum),[d,f]=(0,W.useState)({}),m=(0,W.useRef)(!1),_=`${a??`my`}-${s}-${l}`,v=d[_]||{undo:[],redo:[]},y=v.undo.length>0,x=v.redo.length>0,C=(0,W.useCallback)(e=>{m.current||f(t=>{let n=t[_]||{undo:[],redo:[]},r=Array.isArray(e)?e:[e];return{...t,[_]:{undo:[...n.undo,r].slice(-Se),redo:[]}}})},[_]),{query:w}=S(`GET`,`/semesters`),T=(0,W.useCallback)(e=>{let t=!1,n=!1;if(w.data&&w.data.semesters.length>0){let e=w.data.semesters,r=e[0],i=e[e.length-1];r&&i&&(t=s===r.year&&l===r.semester,n=s===i.year&&l===i.semester)}if(e===`prev`){if(t)return;l===b.SPRING?(u(b.FALL),c(s-1)):u(b.SPRING),o(null)}else{if(n)return;l===b.FALL?(u(b.SPRING),c(s+1)):u(b.FALL),o(null)}},[w.data,l,u,c,o,s]),E=(0,W.useRef)(null),D=(0,W.useCallback)(()=>{E.current&&clearTimeout(E.current),E.current=setTimeout(()=>{i.invalidateQueries({queryKey:[`/timetables/${a}`]})},100)},[i,a]),{requestFunction:O}=S(`PATCH`,`/timetables/${a}`,{onMutate:async e=>{await i.cancelQueries({queryKey:[`/timetables/${a}`]});let t=i.getQueryData([`/timetables/${a}`]);return e.lecture&&i.setQueriesData({queryKey:[`/timetables/${a}`]},t=>t&&{...t,lectures:[...t.lectures,e.lecture]}),{previousTimetable:t}},onError:(e,t,n)=>{i.setQueriesData({queryKey:[`/timetables/${a}`]},n?.previousTimetable)},onSettled:D}),{requestFunction:k}=S(`PATCH`,`/timetables/${a}`,{onMutate:async e=>{await i.cancelQueries({queryKey:[`/timetables/${a}`]});let t=i.getQueryData([`/timetables/${a}`]);return i.setQueriesData({queryKey:[`/timetables/${a}`]},t=>t&&{...t,lectures:t.lectures.filter(t=>t.id!==e.lectureId)}),{previousTimetable:t}},onError:(e,t,n)=>{i.setQueriesData({queryKey:[`/timetables/${a}`]},n?.previousTimetable)},onSettled:D}),A=(0,W.useCallback)((e,t={record:!0})=>{if(r!==`success`){n(t=>{let n=e.filter(e=>!t.some(t=>t.id===e.id));return[...t,...n]}),t.record!==!1&&C({type:`add`,lectures:e.map(e=>({lecture:e,lectureId:e.id}))});return}a&&(e.forEach(e=>{O({action:`add`,lectureId:e.id,lecture:e})}),t.record!==!1&&C({type:`add`,lectures:e.map(e=>({lecture:e,lectureId:e.id}))}))},[r,a,O,n,C]),j=(0,W.useCallback)((i,o={record:!0,delay:!1})=>{let s=r===`success`?[]:t.filter(e=>i.includes(e.id)),c=r===`success`&&a?e.filter(e=>i.includes(e.id)):[],l=()=>{r===`success`?a&&(i.forEach(e=>{k({action:`delete`,lectureId:e}),p(`Remove Lecture from Timetable`,{lectureId:e,timetableId:a})}),c.length>0&&o.record!==!1&&C({type:`delete`,lectures:c.map(e=>({lecture:e,lectureId:e.id}))})):(n(e=>e.filter(e=>!i.includes(e.id))),s.length>0&&o.record!==!1&&C({type:`delete`,lectures:s.map(e=>({lecture:e,lectureId:e.id}))}))};o.delay?setTimeout(l,300):l()},[r,a,t,e,k,n,C]),M=(0,W.useCallback)(e=>{e.type===`add`?A(e.lectures.map(e=>e.lecture),{record:!1}):j(e.lectures.map(e=>e.lectureId),{record:!1,delay:!0})},[A,j]),N=e=>({...e,type:e.type===`add`?`delete`:`add`}),P=e=>[...e].reverse().map(N);return{addLectures:A,removeLectures:j,changeSemester:T,undo:(0,W.useCallback)(()=>{let e=d[_]||{undo:[],redo:[]};if(e.undo.length===0)return null;let t=e.undo[e.undo.length-1];if(!t)return null;f(e=>({...e,[_]:{undo:(e[_]?.undo||[]).slice(0,-1),redo:[...e[_]?.redo||[],t].slice(-Se)}})),m.current=!0;let n=P(t);return n.forEach(M),m.current=!1,n.flatMap(e=>e.lectures.map(e=>e.lectureId))},[_,M,d]),redo:(0,W.useCallback)(()=>{let e=d[_]||{undo:[],redo:[]};if(e.redo.length===0)return null;let t=e.redo[e.redo.length-1];return t?(f(e=>({...e,[_]:{undo:[...e[_]?.undo||[],t].slice(-Se),redo:(e[_]?.redo||[]).slice(0,-1)}})),m.current=!0,t.forEach(M),m.current=!1,t.flatMap(e=>e.lectures.map(e=>e.lectureId))):null},[_,M,d]),recordAction:C,canUndo:y,canRedo:x}}function we(e,t){for(let n of e)for(let e of t)if(n.day==e.day&&n.begin<e.end&&e.begin<n.end)return!0;return!1}function Te({currentTimetableLectures:e,undo:t,redo:n,addLectures:r,removeLectures:i,timetableIds:a,isLoggedIn:o,changeSemester:s,recordAction:c}){let{t:l}=A(),u=le(),d=g(),f=G(e=>e.selectedLectures),p=G(e=>e.setSelectedLectures),m=G(e=>e.year),h=G(e=>e.semesterEnum),_=G(e=>e.setCurrentTimetableId),v=G(e=>e.searchLectures),y=G(e=>e.hoveredLectures),b=G(e=>e.setHoveredLectures),x=G(e=>e.currentTimetableId),C=G(e=>e.isShortcutModalOpen),w=G(e=>e.setIsShortcutModalOpen),T=(0,W.useCallback)(()=>w(e=>!e),[w]),E=(0,W.useRef)(null),D=(0,W.useCallback)((t,n)=>{let r=null;if(n){let e=n.target.closest(`[data-class-time]`);e&&(r=Number(e.getAttribute(`data-class-time`)))}p(i=>{let a=u===`ios`||u===`mac`?n?.metaKey:n?.ctrlKey,o=n?.shiftKey;if(a)return E.current=r,i.some(e=>e.id===t.id)?i.filter(e=>e.id!==t.id):[...i,t];if(o){let n=i[i.length-1];if(!n||r===null||E.current===null)return E.current=r,[...i,t];let a=Math.min(E.current,r),o=Math.max(E.current,r),s=e=>!e.classes||e.classes.length===0?[]:e.classes.map(e=>e.day*24*60+e.begin),c=e.filter(e=>e.id===n.id||e.id===t.id?!0:s(e).some(e=>e>=a&&e<=o)),l=new Set(c.map(e=>e.id)),u=i.filter(e=>!l.has(e.id));return E.current=r,[...u,...c]}else return E.current=r,i.length===1&&i[0]?.id===t.id?[]:[t]})},[e,u,p]),O=t=>{if(e.some(e=>e.id===t.id))i([t.id]);else{if(e.some(e=>we(e.classes,t.classes))){alert(l(`timetable.addLectureConflict`));return}r([t])}},{requestFunction:k}=S(`POST`,`/timetables`,{onSuccess:e=>{d.invalidateQueries({queryKey:[`/timetables`]}),_(e.id)}}),j=(0,W.useCallback)(e=>{o&&k({year:m,semester:h,lectureIds:e})},[o,k,m,h]),{requestFunction:M}=S(`DELETE`,`/timetables`,{onMutate:e=>{x===e.id&&_(null)},onSuccess:()=>{d.invalidateQueries({queryKey:[`/timetables`]})}}),N=(0,W.useCallback)(e=>{M({id:e})},[M]),P=(0,W.useRef)(null),ee=G(e=>e.triggerFlash);(0,W.useEffect)(()=>{P.current=null},[m,h]);let F=(0,W.useRef)(()=>{});return F.current=d=>{let m=d.target;if(m.tagName===`INPUT`||m.tagName===`TEXTAREA`||m.isContentEditable)return;let h=u===`ios`||u===`mac`?d.metaKey:d.ctrlKey;if(h&&d.key===`/`){d.preventDefault(),T();return}if(!C){if(h&&d.key.toLowerCase()===`z`){if(d.preventDefault(),o&&x===null)return;let e=d.shiftKey?n():t();e&&e.length>0&&ee(e);return}if(h&&d.key.toLowerCase()===`y`){if(d.preventDefault(),o&&x===null)return;let e=n();e&&e.length>0&&ee(e);return}if(h&&d.key.toLowerCase()===`a`){d.preventDefault(),p(e);return}if(h&&d.key.toLowerCase()===`c`){f.length>0&&(d.preventDefault(),P.current={lectures:f,sourceTimetableId:x},ee(f.map(e=>e.id)));return}if(h&&d.key.toLowerCase()===`x`){f.length>0&&(d.preventDefault(),P.current={lectures:f,sourceTimetableId:x},ee(f.map(e=>e.id)),(!o||x!==null)&&(i(f.map(e=>e.id),{delay:!0}),p([])));return}if(h&&d.key.toLowerCase()===`v`){if(o&&x===null){d.preventDefault();return}let t=P.current;if(t&&t.lectures.length>0){d.preventDefault();let n=t.lectures.filter(t=>!e.some(e=>e.id===t.id));if(n.length===0){ee(t.lectures.map(e=>e.id));return}let a=e.filter(e=>n.some(t=>we(e.classes,t.classes)));if(a.length>0){let e=l(`timetable.pasteLectureConflict`);window.confirm(e)&&(i(a.map(e=>e.id),{record:!1,delay:!0}),r(n,{record:!1}),c([{type:`delete`,lectures:a.map(e=>({lecture:e,lectureId:e.id}))},{type:`add`,lectures:n.map(e=>({lecture:e,lectureId:e.id}))}]),ee(t.lectures.map(e=>e.id)))}else r(n),ee(t.lectures.map(e=>e.id))}return}if(h&&d.key.toLowerCase()===`m`){d.preventDefault(),o&&j([]);return}if(h&&d.key.toLowerCase()===`d`){d.preventDefault(),o&&j(e.map(e=>e.id));return}if(d.key===`Delete`||d.key===`Backspace`){if(o&&x===null){d.preventDefault();return}f.length>0?(d.preventDefault(),i(f.map(e=>e.id)),p([])):o&&x!==null&&(d.preventDefault(),window.confirm(l(`timetable.timetableKeyboardDeleteConfirm`))&&N(x));return}if(!h&&d.key===`[`){d.preventDefault(),s(`prev`);return}if(!h&&d.key===`]`){d.preventDefault(),s(`next`);return}if(!h&&d.key===`Escape`){let e=!1;f.length>0&&(p([]),e=!0),y.length>0&&(b([]),e=!0),e&&d.preventDefault();return}if(!h&&/^[1-9]$/.test(d.key)){d.preventDefault();let e=parseInt(d.key)-1;if(e<a.length){let t=a[e];t!==void 0&&_(t)}return}if(!h&&[`ArrowUp`,`ArrowDown`,` `,`Enter`].includes(d.key)){if(v.length>0){d.preventDefault();let e=y[0]?.id,t=e?v.findIndex(t=>t.id===e):-1,n=e=>{requestAnimationFrame(()=>{let t=document.querySelector(`[data-search-lecture-id="${e}"]`);t&&(G.setState({isKeyboardNavigating:!0}),t.scrollIntoView({block:`nearest`}))})};if(d.key===`ArrowUp`){let e=v[Math.max(0,t-1)];e&&(b([e]),n(e.id))}else if(d.key===`ArrowDown`){t===v.length-1&&window.dispatchEvent(new CustomEvent(`request-next-page`));let e=v[Math.min(v.length-1,t+1)];e&&(b([e]),n(e.id))}else if(d.key===` `||d.key===`Enter`){if(o&&x===null){d.preventDefault();return}if(t>=0&&t<v.length){let e=v[t];e&&O(e)}}}return}}},(0,W.useEffect)(()=>{let e=e=>F.current(e),t=e=>{(Math.abs(e.movementX)>0||Math.abs(e.movementY)>0)&&G.setState({isKeyboardNavigating:!1})};return document.addEventListener(`keydown`,e),document.addEventListener(`mousemove`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`mousemove`,t)}},[]),{onLectureSelect:D}}function Ee(e){return e.map(e=>e.name).join(`, `)}function De(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function Oe(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function ke(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var Ae=d(f)`
    width: 100%;
`,je=d(f)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,Me=d(f)`
    flex: 1 0 0;
`,Ne=d(M)`
    white-space: nowrap;
`,Pe=({selectedLecture:e})=>{let{t}=A();if(!e)return null;let n=De(e.numPeople,e.limitPeople);return l(u,{children:[l(Ae,{direction:`column`,gap:8,children:[l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.type`)}),c(M,{type:`Normal`,color:`Text.default`,children:e?.type})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.department`)}),c(M,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.professor`)}),c(M,{type:`Normal`,color:`Text.default`,children:Ee(e?.professors||[])})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.room`)}),c(M,{type:`Normal`,color:`Text.default`,children:ke(e?.classes||[])})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.limit`)}),c(M,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.exam`)}),c(M,{type:`Normal`,color:`Text.default`,children:Oe(e?.examTimes||[])})]})]}),c(je,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e.isEnglish?`Eng`:`한`,t(`common.language`)],[e.credit,t(`common.credit`)],[n,t(`timetable.competitionRate`)]].map(([e,t],n)=>l(Me,{direction:`column`,gap:0,align:`center`,children:[c(M,{type:`Bigger`,color:`Text.default`,children:e}),c(M,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},Fe=d(f)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,Ie=d(f)`
    flex: 1 0 0;
`,Le=d.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,Re=({selectedCourseId:e,selectedProfessorId:t})=>{let{t:n}=A(),[r,i]=(0,W.useState)(!1),{query:a,setParams:o,data:s}=w(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:d,inView:p}=C({threshold:0});return(0,W.useEffect)(()=>{i(!1);let n=setTimeout(()=>{o({mode:`default`,courseId:e??void 0,professorId:t??void 0}),i(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,W.useEffect)(()=>{p&&a.hasNextPage&&!a.isFetchingNextPage&&a.fetchNextPage()},[p,a]),!s||!r?c(z,{}):l(u,{children:[c(f,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:c(Fe,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[[y(s?.averageGrade,s?.reviews.length),n(`common.grade`)],[y(s?.averageLoad,s?.reviews.length),n(`common.load`)],[y(s?.averageSpeech,s?.reviews.length),n(`common.speech`)]].map(([e,t],n)=>l(Ie,{direction:`column`,gap:0,align:`center`,children:[c(M,{type:`Bigger`,color:`Text.default`,children:e}),c(M,{type:`Smaller`,color:`Text.default`,children:t})]},n))})}),c(Le,{}),s?.reviews.map(e=>c(re,{review:e,linkToDictionary:!0},e.id)),a.hasNextPage&&c(z,{ref:d})]})},ze=d(f)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Be=d(f)`
    width: 100%;
`,Ve=d(f)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,He=d(f)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`,Ue=d(o)`
    text-decoration: none;
`,We=d.a`
    text-decoration: none;
`,Ge=d(f)`
    width: 100%;
    text-align: center;
`,Ke=d(f)`
    padding: 12px 16px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,qe=({addLectures:e,removeLectures:t,onMobileModalClose:n,currentTimetableId:r,timetableLectures:i})=>{let a=g(),o=s(),{t:d}=A(),{user:m,status:_}=h(),v=L(`tablet`),y=G(e=>e.selectedLectures),b=G(e=>e.hoveredLectures),x=G(e=>e.year),C=G(e=>e.semesterEnum),w=y.length===1?y[0]:b.length===1?b[0]:null,[T,D]=(0,W.useState)([]),{query:k,setParams:N}=S(`GET`,`/users/${m?.id}/wishlist`,{enabled:_===`success`&&x!==-1});(0,W.useEffect)(()=>{x!==-1&&N({year:x,semester:C})},[x,C,r]),(0,W.useEffect)(()=>{k.data&&D(k.data.courses.flatMap(e=>e.lectures).map(e=>e.id))},[k.data]);let{requestFunction:ee}=S(`PATCH`,`/users/${m?.id}/wishlist`,{onSuccess:()=>{a.invalidateQueries({queryKey:[`/users/${m?.id}/wishlist`]})}}),F=(0,W.useRef)(null),I=e=>{let t={syy:String(x),smtDivCd:String(C),subjtCd:e.code,syllabusOpenYn:`0`};return`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${btoa(JSON.stringify(t))}`},te=t=>{if(i){if(i.some(e=>we(e.classes,t.classes))){alert(d(`timetable.addLectureConflict`));return}e([t]),p(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:r,source:`LectureDetail`})}},R=(e,t)=>{if(_===`idle`)return;let n=e?`delete`:`add`;p(`Update Wishlist`,{action:n,lectureId:t,source:`LectureDetail`}),ee({lectureId:t,mode:n})};return c(ze,{direction:`column`,gap:12,align:`center`,justify:!w&&!y.length?`center`:`start`,children:y.length>1?l(Ge,{direction:`column`,gap:16,align:`stretch`,justify:`flex-start`,children:[l(M,{type:`Bigger`,color:`Text.default`,children:[y.length,d(`timetable.numSelected`)]}),y.map(e=>{let t=se(o.colors.Tile.TimeTable.default),n=t[e.courseId%t.length];return l(Ke,{direction:`row`,gap:12,align:`center`,children:[c(O,{size:14,color:n,children:c(U,{})}),l(f,{direction:`column`,gap:4,flex:`1 1 auto`,children:[l(M,{type:`BigBold`,color:`Text.default`,children:[e.name,` `,e.subtitle]}),l(M,{type:`Small`,color:`Text.dark`,children:[e.professors[0]?.name,` `,e.professors.length>1?`${d(`common.professors.over`)} ${e.professors.length-1}${d(`common.professors.people`)} `:` `,`| `,e.department.name,` | `,e.credit,d(`common.credit`)]})]})]},e.id)})]}):w?l(u,{children:[l(Ve,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[l(f,{direction:`row`,align:`center`,gap:8,justify:v?`space-between`:`center`,style:{width:`100%`},children:[v&&c(`div`,{style:{width:20}}),c(M,{type:`Bigger`,color:`Text.default`,children:w.name+w.subtitle}),v&&c(O,{size:20,onClick:n,color:o.colors.Text.default,children:c(j,{})})]}),c(M,{type:`Big`,color:`Text.default`,children:w.code+` `+(w.classNo===``?``:`(${w.classNo})`)})]}),l(f,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[c(Ue,{to:`/dictionary?courseId=${w.courseId}`,children:c(M,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:d(`header.dictionary`)})}),c(We,{href:I(w),target:`_blank`,children:c(M,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:d(`header.syllabus`)})})]}),c(Be,{direction:`column`,gap:10,align:`center`,children:c(Pe,{selectedLecture:w})}),c(Be,{ref:F,direction:`column`,gap:10,children:c(Re,{selectedCourseId:w.courseId,selectedProfessorId:w.professors[0]?.id??-1})}),v&&l(He,{direction:`row`,gap:12,justify:`flex-end`,children:[_===`success`&&l(P,{onClick:()=>{R(T.includes(w.id),w.id),n&&n()},children:[c(O,{size:15,children:c(B,{})}),c(M,{type:`NormalBold`,children:T.includes(w.id)?d(`timetable.removeFromWishlist`):d(`timetable.addToWishlist`)})]}),(r||_!==`success`)&&(i?.some(e=>e.id===w.id)?l(P,{type:`selected`,onClick:()=>{t&&t(w.id),n&&n()},children:[c(O,{size:15,children:c(j,{})}),c(M,{type:`NormalBold`,children:d(`timetable.removeFromTimetable`)})]}):l(P,{type:`selected`,onClick:()=>{te(w),n&&n()},children:[c(O,{size:15,children:c(H,{})}),c(M,{type:`NormalBold`,children:d(`timetable.addToTimetable`)})]}))]})]}):c(E,{})})},Je=d.button`
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
`;function Ye({ariaLabel:e,color:t,disabled:n,onClick:r,size:i,title:a}){return c(Je,{type:`button`,"aria-label":e,disabled:n,iconSize:i,onClick:r,title:a,children:c(O,{size:i,color:t,children:c(H,{})})})}function Xe(e,t){return[e,t].map(e=>e.trim()).filter(Boolean).join(` `)}function Ze({classNo:e,subtitle:t}){let n=Xe(e,t);return n===``?null:c(M,{type:`NormalBold`,color:`Text.default`,children:n})}function Qe({status:e,currentTimetableId:t,hasOverlap:n}){return e!==`idle`&&t===null||n}var $e=d.div`
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
`,et=d(f)`
    width: 100%;
    padding: 8px 12px;
    word-break: keep-all;
`,tt=d.div`
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

    ${I.tablet} {
        &:hover,
        &[data-is-hovered="true"],
        &[data-is-selected="true"] {
            background-color: ${({theme:e})=>e.colors.Background.Block.dark};
        }
    }
`,nt=d.div`
    width: 95%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.block};
    align-self: center;
`,rt=(0,W.memo)(({course:e,wishlist:t,currentTimetableId:n,timetableLectures:r,handleSetHoveredLecture:i,handleClearHoveredLecture:a,handleSetSelectedLecture:o,selectedLectures:u,hoveredLecture:d,handleLikeClick:p,handleAddToTimetable:m,t:g})=>{let{status:_}=h(),v=s(),y=L(`tablet`),b=W.useRef(null);return(0,W.useEffect)(()=>{b.current?.setAttribute(`data-is-selected`,u!=null&&u.length>0&&e.lectures.some(e=>u.some(t=>t.id===e.id))?`true`:`false`)},[u,e]),l($e,{ref:b,"data-is-selected":``,children:[l(et,{direction:`row`,gap:6,align:`center`,justify:`space-between`,children:[l(f,{direction:`row`,gap:6,align:`center`,style:{opacity:e.completed?.3:1},children:[c(M,{type:`NormalBold`,color:`Text.default`,children:e.name}),c(M,{type:`Normal`,color:`Text.default`,children:e.code})]}),e.completed?c(M,{type:`Normal`,color:`Text.default`,children:g(`common.completedCourse`)}):c(M,{type:`Normal`,color:`Highlight.default`,style:{textAlign:`end`},children:e.type})]}),c(nt,{}),e.lectures.map((s,h)=>{let b=t.includes(s.id),x=d?.some(e=>e.id===s.id),S=u?.some(e=>e.id===s.id),C=Qe({status:_,currentTimetableId:n,hasOverlap:r.some(e=>we(e.classes,s.classes))});return l(W.Fragment,{children:[l(tt,{"data-lecture-id":s.id,"data-search-lecture-id":s.id,"data-is-hovered":x,"data-is-selected":S,onPointerEnter:()=>i(s),onPointerLeave:a,onClick:e=>o(s,e),lectureId:s.id,children:[l(f,{direction:`column`,gap:0,children:[y&&x&&l(M,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[s.department.name,` / `,s.type]}),l(f,{direction:`row`,gap:6,style:{opacity:e.completed?.3:1},children:[c(Ze,{classNo:s.classNo,subtitle:s.subtitle}),c(M,{type:`Normal`,color:`Text.default`,children:Ee(s.professors)})]}),y&&x&&l(M,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[s.classes[0]?.buildingName,` `,s.classes[0]?.roomName,` /`,` `,s.limitPeople]})]}),l(f,{direction:`row`,gap:6,onClick:e=>e.stopPropagation(),children:[!y&&_===`success`&&(b?c(O,{size:15,color:v.colors.Highlight.default,onClick:()=>p(b,s.id),children:c(B,{})}):c(O,{size:15,color:v.colors.Text.default,onClick:()=>p(b,s.id),children:c(me,{})})),(!y||x)&&c(Ye,{ariaLabel:g(`timetable.addToTimetable`),color:v.colors.Text.default,disabled:C,onClick:()=>m(s),size:y?30:15,title:n==null&&_===`success`?g(`timetable.myTimeTableLectureAddWarning`):void 0})]})]}),h!==e.lectures.length-1&&c(nt,{})]},s.id)})]})},(e,t)=>!(e.course!==t.course||e.wishlist!==t.wishlist||e.currentTimetableId!==t.currentTimetableId||e.timetableLectures!==t.timetableLectures||e.selectedLectures!==t.selectedLectures||e.hoveredLecture!==t.hoveredLecture)),it=d(f)`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,at=d(f)`
    height: 36px;
`,ot=d.div`
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
`;function st({year:e,semester:t,timeFilter:n,setTimeFilter:r,data:i,setSearchResult:a,isWishlist:o,setIsWishlist:d,setWishlist:p,sortOption:m,setSortOption:g,handleSearch:_,t:v}){let y=s(),{user:b,status:x}=h(),{query:C,setParams:w}=S(`GET`,`/users/${b?.id}/wishlist`,{enabled:x===`success`&&e!=-1});return(0,W.useEffect)(()=>{C.data!==void 0&&a(o?C.data:i??{courses:[]})},[o,i]),(0,W.useEffect)(()=>{C.data!==void 0&&(p(C.data.courses.flatMap(e=>e.lectures).map(e=>e.id)),o&&a(C.data))},[C.data]),(0,W.useEffect)(()=>{a({courses:[]}),e!==-1&&w({year:e,semester:t})},[e,t]),(0,W.useEffect)(()=>{i!==void 0&&(a(i),d(!1))},[i]),l(u,{children:[c(it,{direction:`row`,justify:`stretch`,gap:0,children:c(ie,{options:[`type`,`department`,`level`,`term`,`time`],timeFilter:n,setTimeFilter:r,onSearch:_})}),l(f,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[l(ot,{isSelected:o,onClick:()=>{d(e=>!e)},style:{paddingBlock:10},children:[c(O,{size:15,color:y.colors.Highlight.default,children:c(o?B:me,{})}),c(M,{type:`Normal`,color:`Highlight.default`,children:v(`common.wishlist`)})]}),c(at,{direction:`row`,gap:0,children:c(T,{options:[v(`dictionary.sortOptions.code`),v(`dictionary.sortOptions.popularity`),v(`dictionary.sortOptions.studentCount`)],setSelectedOption:g,selectedOption:m})})]})]})}var ct=(0,W.memo)(st,(e,t)=>e.year===t.year&&e.semester===t.semester&&e.timeFilter===t.timeFilter&&e.sortOption===t.sortOption&&e.isWishlist===t.isWishlist&&e.data===t.data),lt=d(f)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,ut=d(M)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,dt=d(f)`
    height: fit-content;
    overflow-y: auto;
    position: relative;
    flex-grow: 1;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    /* 상단/하단 페이드 오버레이: 자식 배경에 가려지지 않도록 컨테이너 위에 표시 */
    ${I.tablet} {
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
`,ft=d(f)`
    width: 100%;
`,pt=d(f)`
    width: 100%;
    height: 100%;
    flex-grow: 1;

    ${I.tablet} {
        padding-right: 4px;
    }
`,mt=d.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({theme:e})=>e.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
`,ht=e=>{if(!e)return e;let t=new Map;return e.courses.forEach(e=>{let n=t.get(e.id);if(!n){t.set(e.id,{...e,lectures:[...e.lectures]});return}let r=new Set(n.lectures.map(e=>e.id)),i=[...n.lectures];e.lectures.forEach(e=>{r.has(e.id)||(r.add(e.id),i.push(e))}),t.set(e.id,{...n,lectures:i})}),{...e,courses:Array.from(t.values())}},gt=50,_t=W.memo(({timetableLectures:e,addLectures:t,onLectureSelect:n})=>{let{t:r}=A(),{user:i,status:a}=h(),o=g(),s=G(e=>e.currentTimetableId),u=G(e=>e.year),d=G(e=>e.semesterEnum),f=G(e=>e.hoveredLectures),m=G(e=>e.setHoveredLectures),_=G(e=>e.selectedLectures),v=G(e=>e.setSelectedLectures),y=G(e=>e.timeFilter),b=G(e=>e.setTimeFilter),x=G(e=>e.setSearchLectures),T=(0,W.useCallback)(()=>v([]),[v]),{ref:E,inView:D}=C({threshold:0}),O=L(`tablet`),k=(0,W.useRef)(null),j=(0,W.useRef)(null),M=(0,W.useRef)(null),{requestFunction:N}=S(`PATCH`,`/users/${i?.id}/wishlist`,{onSuccess:()=>{o.invalidateQueries({queryKey:[`/users/${i?.id}/wishlist`]})}}),[P,ee]=(0,W.useState)(!1),[F,I]=(0,W.useState)({courses:[]}),[te,R]=(0,W.useState)(!1),[ne,B]=(0,W.useState)([]),[V,re]=(0,W.useState)(0),{query:H,setParams:ie,data:ae}=w(`GET`,`/lectures`,{infinites:[`courses`],limit:gt,gcTime:0,select:ht,enabled:P,iterate:e=>{let t=0;return e.courses.forEach(e=>{t+=e.lectures.length}),t<gt?0:t}}),U=(0,W.useCallback)(e=>{if(oe(e)){alert(r(`common.search.empty`));return}R(!1),ie({year:u,semester:d,...e,order:[`code`,`popular`,`studentCount`][V]??`code`,offset:0,limit:gt,day:e.time?.day??void 0,begin:e.time?.begin??void 0,end:e.time?.end??void 0}),ee(!0),p(`Search Lectures`,{year:u,semester:d,keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``})},[u,d,V]);(0,W.useEffect)(()=>{R(!1),ie(e=>({...e,order:[`code`,`popular`,`studentCount`][V]??`code`,offset:0}))},[V]),(0,W.useEffect)(()=>{D&&H.hasNextPage&&!H.isFetchingNextPage&&H.fetchNextPage()},[D,H]),(0,W.useEffect)(()=>{let e=()=>{H.hasNextPage&&!H.isFetchingNextPage&&H.fetchNextPage()};return window.addEventListener(`request-next-page`,e),()=>window.removeEventListener(`request-next-page`,e)},[H]),(0,W.useEffect)(()=>{let e=e=>{k.current&&!k.current.contains(e.target)&&j.current&&j.current.contains(e.target)&&T?.()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let se=W.useMemo(()=>F.courses.flatMap(e=>e.lectures),[F.courses]);(0,W.useEffect)(()=>{x?.(se)},[se,x]);let ce=(0,W.useCallback)(()=>{if(!O)return;if(!M.current){m([]);return}let e=M.current.getBoundingClientRect(),t=e.top+e.height/2,n=document.elementFromPoint(e.left+50,t);if(!n)return;let r=n.closest(`[data-lecture-id]`);if(r){let e=parseInt(r.getAttribute(`data-lecture-id`)||``,10),t=se.find(t=>t.id===e);m(t?[t]:[])}},[O,se,m]);(0,W.useEffect)(()=>{if(!O||!M.current)return;let e=M.current;return e.addEventListener(`scroll`,ce),()=>{e.removeEventListener(`scroll`,ce)}},[O,ce]),(0,W.useEffect)(()=>{if(!O||H.isFetching||_&&_.length>0)return;let e,t=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>{ce()})});return()=>{cancelAnimationFrame(t),cancelAnimationFrame(e)}},[H.isFetching,O,ce,_]);let le=(e,t)=>{if(a===`idle`)return;let n=e?`delete`:`add`;p(`Update Wishlist`,{action:n,lectureId:t}),B(e?e=>e.filter(e=>e!==t):e=>[...e,t]),N({lectureId:t,mode:n})},ue=n=>{if(a!==`loading`)if(a===`success`){if(s==null){alert(r(`timetable.myTimeTableLectureAddWarning`));return}if(e.some(e=>we(e.classes,n.classes))){alert(r(`timetable.addLectureConflict`));return}t([n]),p(`Add Lecture to Timetable`,{lectureId:n.id,lectureCode:n.code,courseName:n.name,timetableId:s})}else{if(e.some(e=>we(e.classes,n.classes))){alert(r(`timetable.addLectureConflict`));return}t([n]),p(`Add Lecture to Timetable`,{lectureId:n.id,lectureCode:n.code,courseName:n.name,timetableId:null,isGuest:!0})}},de=(0,W.useCallback)(e=>{O||G.getState().isKeyboardNavigating||m(t=>t.length===1&&t[0]?.id===e.id?t:[e])},[O,m]),fe=(0,W.useCallback)(()=>{O||G.getState().isKeyboardNavigating||m([])},[O,m]),pe=(0,W.useCallback)((e,t)=>{n?.(e,t)},[n]);return(0,W.useEffect)(()=>{M.current?.setAttribute(`data-hovered-lectures`,f.map(e=>e.id).join(` `))},[f,F]),(0,W.useEffect)(()=>{M.current?.setAttribute(`data-selected-lectures`,_?_.map(e=>e.id).join(` `):``)},[_,F]),l(lt,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,ref:j,children:[c(ct,{year:u,semester:d,timeFilter:y,setTimeFilter:b,sortOption:V,setSortOption:re,data:ae,isWishlist:te,setIsWishlist:R,setWishlist:B,setSearchResult:I,t:r,handleSearch:U}),F.courses.length===0?c(ut,{type:`Bigger`,color:`Text.placeholder`,children:r(`dictionary.noResults`)}):c(dt,{direction:`column`,gap:0,ref:M,"data-hovered-lectures":``,"data-selected-lectures":``,children:l(ft,{direction:`row`,gap:0,children:[l(pt,{direction:`column`,gap:12,ref:k,children:[F.courses.map(t=>c(rt,{course:t,hoveredLecture:f,selectedLectures:_,wishlist:ne,currentTimetableId:s,timetableLectures:e,handleSetHoveredLecture:de,handleClearHoveredLecture:fe,handleSetSelectedLecture:pe,handleLikeClick:le,handleAddToTimetable:ue,t:r},t.id)),!te&&H.hasNextPage&&c(z,{ref:E})]}),O&&c(mt,{})]})})]})},(e,t)=>e.timetableLectures===t.timetableLectures&&e.addLectures===t.addLectures&&e.onLectureSelect===t.onLectureSelect);function vt(){var e=[...arguments];return(0,W.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var yt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function bt(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function xt(e){return`nodeType`in e}function Y(e){return e?bt(e)?e:xt(e)?e.ownerDocument?.defaultView??window:window:window}function St(e){let{Document:t}=Y(e);return e instanceof t}function Ct(e){return bt(e)?!1:e instanceof Y(e).HTMLElement}function wt(e){return e instanceof Y(e).SVGElement}function Tt(e){return e?bt(e)?e.document:xt(e)?St(e)?e:Ct(e)||wt(e)?e.ownerDocument:document:document:document}var Et=yt?W.useLayoutEffect:W.useEffect;function Dt(e){let t=(0,W.useRef)(e);return Et(()=>{t.current=e}),(0,W.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function Ot(){let e=(0,W.useRef)(null);return[(0,W.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,W.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function kt(e,t){t===void 0&&(t=[e]);let n=(0,W.useRef)(e);return Et(()=>{n.current!==e&&(n.current=e)},t),n}function At(e,t){let n=(0,W.useRef)();return(0,W.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function jt(e){let t=Dt(e),n=(0,W.useRef)(null);return[n,(0,W.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function Mt(e){let t=(0,W.useRef)();return(0,W.useEffect)(()=>{t.current=e},[e]),t.current}var Nt={};function Pt(e,t){return(0,W.useMemo)(()=>{if(t)return t;let n=Nt[e]==null?0:Nt[e]+1;return Nt[e]=n,e+`-`+n},[e,t])}function Ft(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var It=Ft(1),Lt=Ft(-1);function Rt(e){return`clientX`in e&&`clientY`in e}function zt(e){if(!e)return!1;let{KeyboardEvent:t}=Y(e.target);return t&&e instanceof t}function Bt(e){if(!e)return!1;let{TouchEvent:t}=Y(e.target);return t&&e instanceof t}function Vt(e){if(Bt(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Rt(e)?{x:e.clientX,y:e.clientY}:null}var Ht=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[Ht.Translate.toString(e),Ht.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),Ut=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function Wt(e){return e.matches(Ut)?e:e.querySelector(Ut)}var Gt={display:`none`};function Kt(e){let{id:t,value:n}=e;return W.createElement(`div`,{id:t,style:Gt},n)}function qt(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return W.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function Jt(){let[e,t]=(0,W.useState)(``);return{announce:(0,W.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var Yt=(0,W.createContext)(null);function Xt(e){let t=(0,W.useContext)(Yt);(0,W.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function Zt(){let[e]=(0,W.useState)(()=>new Set),t=(0,W.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,W.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var Qt={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},$t={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function en(e){let{announcements:t=$t,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=Qt}=e,{announce:a,announcement:o}=Jt(),s=Pt(`DndLiveRegion`),[c,l]=(0,W.useState)(!1);if((0,W.useEffect)(()=>{l(!0)},[]),Xt((0,W.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=W.createElement(W.Fragment,null,W.createElement(Kt,{id:r,value:i.draggable}),W.createElement(qt,{id:s,announcement:o}));return n?(0,ue.createPortal)(u,n):u}var X;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(X||={});function tn(){}function nn(e,t){return(0,W.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function rn(){var e=[...arguments];return(0,W.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var an=Object.freeze({x:0,y:0});function on(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function sn(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function cn(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function ln(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function un(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var dn=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=un(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=on(un(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(sn)};function fn(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var pn=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=fn(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(cn)};function mn(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function hn(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:an}function gn(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var _n=gn(1);function vn(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function yn(e,t,n){let r=vn(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var bn={ignoreTransform:!1};function xn(e,t){t===void 0&&(t=bn);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=Y(e).getComputedStyle(e);t&&(n=yn(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function Sn(e){return xn(e,{ignoreTransform:!0})}function Cn(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function wn(e,t){return t===void 0&&(t=Y(e).getComputedStyle(e)),t.position===`fixed`}function Tn(e,t){t===void 0&&(t=Y(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function En(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(St(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Ct(i)||wt(i)||n.includes(i))return n;let a=Y(e).getComputedStyle(i);return i!==e&&Tn(i,a)&&n.push(i),wn(i,a)?n:r(i.parentNode)}return e?r(e):n}function Dn(e){let[t]=En(e,1);return t??null}function On(e){return!yt||!e?null:bt(e)?e:xt(e)?St(e)||e===Tt(e).scrollingElement?window:Ct(e)?e:null:null}function kn(e){return bt(e)?e.scrollX:e.scrollLeft}function An(e){return bt(e)?e.scrollY:e.scrollTop}function jn(e){return{x:kn(e),y:An(e)}}var Z;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(Z||={});function Mn(e){return!yt||!e?!1:e===document.scrollingElement}function Nn(e){let t={x:0,y:0},n=Mn(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var Pn={x:.2,y:.2};function Fn(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=Pn);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=Nn(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=Z.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=Z.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=Z.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=Z.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function In(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Ln(e){return e.reduce((e,t)=>It(e,jn(t)),an)}function Rn(e){return e.reduce((e,t)=>e+kn(t),0)}function zn(e){return e.reduce((e,t)=>e+An(t),0)}function Bn(e,t){if(t===void 0&&(t=xn),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Dn(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var Vn=[[`x`,[`left`,`right`],Rn],[`y`,[`top`,`bottom`],zn]],Hn=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=En(t),r=Ln(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of Vn)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},Un=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function Wn(e){let{EventTarget:t}=Y(e);return e instanceof t?e:Tt(e)}function Gn(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var Kn;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(Kn||={});function qn(e){e.preventDefault()}function Jn(e){e.stopPropagation()}var Q;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(Q||={});var Yn={start:[Q.Space,Q.Enter],cancel:[Q.Esc],end:[Q.Space,Q.Enter,Q.Tab]},Xn=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Q.Right:return{...n,x:n.x+25};case Q.Left:return{...n,x:n.x-25};case Q.Down:return{...n,y:n.y+25};case Q.Up:return{...n,y:n.y-25}}},Zn=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new Un(Tt(t)),this.windowListeners=new Un(Y(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Kn.Resize,this.handleCancel),this.windowListeners.add(Kn.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Kn.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&Bn(n),t(an)}handleKeyDown(e){if(zt(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=Yn,coordinateGetter:a=Xn,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:an;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=Lt(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=Nn(n),p=In(n),m={x:Math.min(i===Q.Right?p.right-p.width/2:p.right,Math.max(i===Q.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===Q.Down?p.bottom-p.height/2:p.bottom,Math.max(i===Q.Down?p.top:p.top+p.height/2,u.y))},h=i===Q.Right&&!s||i===Q.Left&&!c,g=i===Q.Down&&!l||i===Q.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===Q.Right&&e<=d.x||i===Q.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===Q.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===Q.Down&&e<=d.y||i===Q.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===Q.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,It(Lt(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};Zn.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=Yn,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function Qn(e){return!!(e&&`distance`in e)}function $n(e){return!!(e&&`delay`in e)}var er=class{constructor(e,t,n){n===void 0&&(n=Wn(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=Tt(i),this.documentListeners=new Un(this.document),this.listeners=new Un(n),this.windowListeners=new Un(Y(i)),this.initialCoordinates=Vt(r)??an,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Kn.Resize,this.handleCancel),this.windowListeners.add(Kn.DragStart,qn),this.windowListeners.add(Kn.VisibilityChange,this.handleCancel),this.windowListeners.add(Kn.ContextMenu,qn),this.documentListeners.add(Kn.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if($n(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(Qn(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Kn.Click,Jn,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Kn.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=Vt(e)??an,s=Lt(n,o);if(!t&&a){if(Qn(a)){if(a.tolerance!=null&&Gn(s,a.tolerance))return this.handleCancel();if(Gn(s,a.distance))return this.handleStart()}if($n(a)&&Gn(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===Q.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},tr={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},nr=class extends er{constructor(e){let{event:t}=e,n=Tt(t.target);super(e,tr,n)}};nr.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var rr={move:{name:`mousemove`},end:{name:`mouseup`}},ir;(function(e){e[e.RightClick=2]=`RightClick`})(ir||={});var ar=class extends er{constructor(e){super(e,rr,Tt(e.event.target))}};ar.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===ir.RightClick?!1:(r?.({event:n}),!0)}}];var or={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},sr=class extends er{constructor(e){super(e,or)}static setup(){return window.addEventListener(or.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(or.move.name,e)};function e(){}}};sr.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var cr;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(cr||={});var lr;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(lr||={});function ur(e){let{acceleration:t,activator:n=cr.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=lr.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=fr({delta:d,disabled:!a}),[m,h]=Ot(),g=(0,W.useRef)({x:0,y:0}),_=(0,W.useRef)({x:0,y:0}),v=(0,W.useMemo)(()=>{switch(n){case cr.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case cr.DraggableRect:return i}},[n,i,c]),y=(0,W.useRef)(null),b=(0,W.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),x=(0,W.useMemo)(()=>s===lr.TreeOrder?[...l].reverse():l,[s,l]);(0,W.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of x){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=Fn(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),y.current=e,m(b,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,b,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,x,u,JSON.stringify(f)])}var dr={x:{[Z.Backward]:!1,[Z.Forward]:!1},y:{[Z.Backward]:!1,[Z.Forward]:!1}};function fr(e){let{delta:t,disabled:n}=e,r=Mt(t);return At(e=>{if(n||!r||!e)return dr;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[Z.Backward]:e.x[Z.Backward]||i.x===-1,[Z.Forward]:e.x[Z.Forward]||i.x===1},y:{[Z.Backward]:e.y[Z.Backward]||i.y===-1,[Z.Forward]:e.y[Z.Forward]||i.y===1}}},[n,t,r])}function pr(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return At(e=>t==null?null:r??e??null,[r,t])}function mr(e,t){return(0,W.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var hr;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(hr||={});var gr;(function(e){e.Optimized=`optimized`})(gr||={});var _r=new Map;function vr(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,W.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,W.useRef)(e),d=g(),f=kt(d),p=(0,W.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,W.useRef)(null),h=At(t=>{if(d&&!n)return _r;if(!t||t===_r||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new Hn(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,W.useEffect)(()=>{u.current=e},[e]),(0,W.useEffect)(()=>{d||p()},[n,d]),(0,W.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,W.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case hr.Always:return!1;case hr.BeforeDragging:return n;default:return!n}}}function yr(e,t){return At(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function br(e,t){return yr(e,t)}function xr(e){let{callback:t,disabled:n}=e,r=Dt(t),i=(0,W.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,W.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Sr(e){let{callback:t,disabled:n}=e,r=Dt(t),i=(0,W.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,W.useEffect)(()=>()=>i?.disconnect(),[i]),i}function Cr(e){return new Hn(xn(e),e)}function wr(e,t,n){t===void 0&&(t=Cr);let[r,i]=(0,W.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=xr({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=Sr({callback:a});return Et(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function Tr(e){return hn(e,yr(e))}var Er=[];function Dr(e){let t=(0,W.useRef)(e),n=At(n=>e?n&&n!==Er&&e&&t.current&&e.parentNode===t.current.parentNode?n:En(e):Er,[e]);return(0,W.useEffect)(()=>{t.current=e},[e]),n}function Or(e){let[t,n]=(0,W.useState)(null),r=(0,W.useRef)(e),i=(0,W.useCallback)(e=>{let t=On(e.target);t&&n(e=>e?(e.set(t,jn(t)),new Map(e)):null)},[]);return(0,W.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=On(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,jn(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{On(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,W.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>It(e,t),an):Ln(e):an,[e,t])}function kr(e,t){t===void 0&&(t=[]);let n=(0,W.useRef)(null);return(0,W.useEffect)(()=>{n.current=null},t),(0,W.useEffect)(()=>{let t=e!==an;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?Lt(e,n.current):an}function Ar(e){(0,W.useEffect)(()=>{if(!yt)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function jr(e,t){return(0,W.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function Mr(e){return(0,W.useMemo)(()=>e?Cn(e):null,[e])}var Nr=[];function Pr(e,t){t===void 0&&(t=xn);let[n]=e,r=Mr(n?Y(n):null),[i,a]=(0,W.useState)(Nr);function o(){a(()=>e.length?e.map(e=>Mn(e)?r:new Hn(t(e),e)):Nr)}let s=Sr({callback:o});return Et(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function Fr(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return Ct(t)?t:e}function Ir(e){let{measure:t}=e,[n,r]=(0,W.useState)(null),i=Sr({callback:(0,W.useCallback)(e=>{for(let{target:n}of e)if(Ct(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=jt((0,W.useCallback)(e=>{let n=Fr(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,W.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var Lr=[{sensor:nr,options:{}},{sensor:Zn,options:{}}],Rr={current:{}},zr={draggable:{measure:Sn},droppable:{measure:Sn,strategy:hr.WhileDragging,frequency:gr.Optimized},dragOverlay:{measure:xn}},Br=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},Vr={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Br,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:tn},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:zr,measureDroppableContainers:tn,windowRect:null,measuringScheduled:!1},Hr={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:tn,draggableNodes:new Map,over:null,measureDroppableContainers:tn},Ur=(0,W.createContext)(Hr),Wr=(0,W.createContext)(Vr);function Gr(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Br}}}function Kr(e,t){switch(t.type){case X.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case X.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case X.DragEnd:case X.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case X.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new Br(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case X.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new Br(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case X.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new Br(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function qr(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,W.useContext)(Ur),a=Mt(r),o=Mt(n?.id);return(0,W.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!zt(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=Wt(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function Jr(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function Yr(e){return(0,W.useMemo)(()=>({draggable:{...zr.draggable,...e?.draggable},droppable:{...zr.droppable,...e?.droppable},dragOverlay:{...zr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Xr(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,W.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;Et(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=hn(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Dn(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var Zr=(0,W.createContext)({...an,scaleX:1,scaleY:1}),Qr;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(Qr||={});var $r=(0,W.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=Lr,collisionDetection:o=pn,measuring:s,modifiers:c,...l}=e,[u,d]=(0,W.useReducer)(Kr,void 0,Gr),[f,p]=Zt(),[m,h]=(0,W.useState)(Qr.Uninitialized),g=m===Qr.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:b}}=u,x=_==null?null:v.get(_),S=(0,W.useRef)({initial:null,translated:null}),C=(0,W.useMemo)(()=>_==null?null:{id:_,data:x?.data??Rr,rect:S},[_,x]),w=(0,W.useRef)(null),[T,E]=(0,W.useState)(null),[D,O]=(0,W.useState)(null),k=kt(l,Object.values(l)),A=Pt(`DndDescribedBy`,t),j=(0,W.useMemo)(()=>b.getEnabled(),[b]),M=Yr(s),{droppableRects:N,measureDroppableContainers:P,measuringScheduled:ee}=vr(j,{dragging:g,dependencies:[y.x,y.y],config:M.droppable}),F=pr(v,_),I=(0,W.useMemo)(()=>D?Vt(D):null,[D]),L=Se(),te=br(F,M.draggable.measure);Xr({activeNode:_==null?null:v.get(_),config:L.layoutShiftCompensation,initialRect:te,measure:M.draggable.measure});let R=wr(F,M.draggable.measure,te),ne=wr(F?F.parentElement:null),z=(0,W.useRef)({activatorEvent:null,active:null,activeNode:F,collisionRect:null,collisions:null,droppableRects:N,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),B=b.getNodeFor(z.current.over?.id),V=Ir({measure:M.dragOverlay.measure}),re=V.nodeRef.current??F,H=g?V.rect??R:null,ie=!!(V.nodeRef.current&&V.rect),ae=Tr(ie?null:R),oe=Mr(re?Y(re):null),U=Dr(g?B??F:null),se=Pr(U),ce=Jr(c,{transform:{x:y.x-ae.x,y:y.y-ae.y,scaleX:1,scaleY:1},activatorEvent:D,active:C,activeNodeRect:R,containerNodeRect:ne,draggingNodeRect:H,over:z.current.over,overlayNodeRect:V.rect,scrollableAncestors:U,scrollableAncestorRects:se,windowRect:oe}),le=I?It(I,y):null,de=Or(U),fe=kr(de),pe=kr(de,[R]),me=It(ce,fe),he=H?_n(H,ce):null,ge=C&&he?o({active:C,collisionRect:he,droppableRects:N,droppableContainers:j,pointerCoordinates:le}):null,_e=ln(ge,`id`),[G,K]=(0,W.useState)(null),q=mn(ie?ce:It(ce,pe),G?.rect??null,R),J=(0,W.useRef)(null),ve=(0,W.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(w.current==null)return;let i=v.get(w.current);if(!i)return;let a=e.nativeEvent;J.current=new n({active:w.current,activeNode:i,event:a,options:r,context:z,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=k.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=k.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=w.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=k.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:S}};(0,ue.unstable_batchedUpdates)(()=>{r?.(i),h(Qr.Initializing),d({type:X.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),E(J.current),O(a)})},onMove(e){d({type:X.DragMove,coordinates:e})},onEnd:o(X.DragEnd),onCancel:o(X.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=z.current,o=null;if(t&&i){let{cancelDrop:s}=k.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===X.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=X.DragCancel)}w.current=null,(0,ue.unstable_batchedUpdates)(()=>{d({type:e}),h(Qr.Uninitialized),K(null),E(null),O(null),J.current=null;let t=e===X.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=k.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),ye=mr(a,(0,W.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(w.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},w.current=r,ve(n,t))},[v,ve]));Ar(a),Et(()=>{R&&m===Qr.Initializing&&h(Qr.Initialized)},[R,m]),(0,W.useEffect)(()=>{let{onDragMove:e}=k.current,{active:t,activatorEvent:n,collisions:r,over:i}=z.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:me.x,y:me.y},over:i};(0,ue.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[me.x,me.y]),(0,W.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=z.current;if(!e||w.current==null||!t||!i)return;let{onDragOver:a}=k.current,o=r.get(_e),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,ue.unstable_batchedUpdates)(()=>{K(s),a?.(c),f({type:`onDragOver`,event:c})})},[_e]),Et(()=>{z.current={activatorEvent:D,active:C,activeNode:F,collisionRect:he,collisions:ge,droppableRects:N,draggableNodes:v,draggingNode:re,draggingNodeRect:H,droppableContainers:b,over:G,scrollableAncestors:U,scrollAdjustedTranslate:me},S.current={initial:H,translated:he}},[C,F,ge,he,v,re,H,N,b,G,U,me]),ur({...L,delta:y,draggingRect:he,pointerCoordinates:le,scrollableAncestors:U,scrollableAncestorRects:se});let be=(0,W.useMemo)(()=>({active:C,activeNode:F,activeNodeRect:R,activatorEvent:D,collisions:ge,containerNodeRect:ne,dragOverlay:V,draggableNodes:v,droppableContainers:b,droppableRects:N,over:G,measureDroppableContainers:P,scrollableAncestors:U,scrollableAncestorRects:se,measuringConfiguration:M,measuringScheduled:ee,windowRect:oe}),[C,F,R,D,ge,ne,V,v,b,N,G,P,U,se,M,ee,oe]),xe=(0,W.useMemo)(()=>({activatorEvent:D,activators:ye,active:C,activeNodeRect:R,ariaDescribedById:{draggable:A},dispatch:d,draggableNodes:v,over:G,measureDroppableContainers:P}),[D,ye,C,R,d,A,v,G,P]);return W.createElement(Yt.Provider,{value:p},W.createElement(Ur.Provider,{value:xe},W.createElement(Wr.Provider,{value:be},W.createElement(Zr.Provider,{value:q},i)),W.createElement(qr,{disabled:n?.restoreFocus===!1})),W.createElement(en,{...n,hiddenTextDescribedById:A}));function Se(){let e=T?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),ei=(0,W.createContext)(null),ti=`button`,ni=`Draggable`;function ri(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=Pt(ni),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,W.useContext)(Ur),{role:p=ti,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,W.useContext)(g?Zr:ei),[v,y]=jt(),[b,x]=jt(),S=jr(o,t),C=kt(n);return Et(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:b,data:C}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,W.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===ti?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:S,node:v,over:f,setNodeRef:y,setActivatorNodeRef:x,transform:_}}function ii(){return(0,W.useContext)(Wr)}var ai=`Droppable`,oi={timeout:25};function si(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=Pt(ai),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,W.useContext)(Ur),u=(0,W.useRef)({disabled:n}),d=(0,W.useRef)(!1),f=(0,W.useRef)(null),p=(0,W.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...oi,...i},_=kt(h??r),v=Sr({callback:(0,W.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[y,b]=jt((0,W.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),x=kt(t);return(0,W.useEffect)(()=>{!v||!y.current||(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,W.useEffect)(()=>(s({type:X.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:x}}),()=>s({type:X.UnregisterDroppable,key:a,id:r})),[r]),(0,W.useEffect)(()=>{n!==u.current.disabled&&(s({type:X.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:b}}var ci=e=>{let{transform:t}=e;return{...t,y:0}};function li(e,t,n){let r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}var ui=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:li(r,n,t)};function di(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function fi(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function pi(e){return e!==null&&e>=0}function mi(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function hi(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var gi={scaleX:1,scaleY:1},_i=e=>{let{rects:t,activeNodeRect:n,activeIndex:r,overIndex:i,index:a}=e,o=t[r]??n;if(!o)return null;let s=vi(t,a,r);if(a===r){let e=t[i];return e?{x:r<i?e.left+e.width-(o.left+o.width):e.left-o.left,y:0,...gi}:null}return a>r&&a<=i?{x:-o.width-s,y:0,...gi}:a<r&&a>=i?{x:o.width+s,y:0,...gi}:{x:0,y:0,...gi}};function vi(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return!r||!i&&!a?0:n<t?i?r.left-(i.left+i.width):a.left-(r.left+r.width):a?a.left-(r.left+r.width):r.left-(i.left+i.width)}var yi=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=di(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},bi=`Sortable`,xi=W.createContext({activeIndex:-1,containerId:bi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:yi,disabled:{draggable:!1,droppable:!1}});function Si(e){let{children:t,id:n,items:r,strategy:i=yi,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=ii(),d=Pt(bi,n),f=s.rect!==null,p=(0,W.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,W.useRef)(p),v=!mi(p,_.current),y=g!==-1&&h===-1||v,b=hi(a);Et(()=>{v&&m&&u(p)},[v,p,m,u]),(0,W.useEffect)(()=>{_.current=p},[p]);let x=(0,W.useMemo)(()=>({activeIndex:h,containerId:d,disabled:b,disableTransforms:y,items:p,overIndex:g,useDragOverlay:f,sortedRects:fi(p,c),strategy:i}),[h,d,b.draggable,b.droppable,y,p,g,c,f,i]);return W.createElement(xi.Provider,{value:x},t)}var Ci=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return di(n,r,i).indexOf(t)},wi=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},Ti={duration:200,easing:`ease`},Ei=`transform`,Di=Ht.Transition.toString({property:Ei,duration:0,easing:`linear`}),Oi={roleDescription:`sortable`};function ki(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,W.useState)(null),s=(0,W.useRef)(n);return Et(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=xn(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,W.useEffect)(()=>{a&&o(null)},[a]),a}function Ai(e){let{animateLayoutChanges:t=wi,attributes:n,disabled:r,data:i,getNewIndex:a=Ci,id:o,strategy:s,resizeObserverConfig:c,transition:l=Ti}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,W.useContext)(xi),y=ji(r,p),b=u.indexOf(o),x=(0,W.useMemo)(()=>({sortable:{containerId:d,index:b,items:u},...i}),[d,i,b,u]),S=(0,W.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:C,node:w,isOver:T,setNodeRef:E}=si({id:o,data:x,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...c}}),{active:D,activatorEvent:O,activeNodeRect:k,attributes:A,setNodeRef:j,listeners:M,isDragging:N,over:P,setActivatorNodeRef:ee,transform:F}=ri({id:o,data:x,attributes:{...Oi,...n},disabled:y.draggable}),I=vt(E,j),L=!!D,te=L&&!m&&pi(f)&&pi(g),R=!_&&N,ne=te?(R&&te?F:null)??(s??v)({rects:h,activeNodeRect:k,activeIndex:f,overIndex:g,index:b}):null,z=pi(f)&&pi(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):b,B=D?.id,V=(0,W.useRef)({activeId:B,items:u,newIndex:z,containerId:d}),re=u!==V.current.items,H=t({active:D,containerId:d,isDragging:N,isSorting:L,id:o,index:b,items:u,newIndex:V.current.newIndex,previousItems:V.current.items,previousContainerId:V.current.containerId,transition:l,wasDragging:V.current.activeId!=null}),ie=ki({disabled:!H,index:b,node:w,rect:C});return(0,W.useEffect)(()=>{L&&V.current.newIndex!==z&&(V.current.newIndex=z),d!==V.current.containerId&&(V.current.containerId=d),u!==V.current.items&&(V.current.items=u)},[L,z,d,u]),(0,W.useEffect)(()=>{if(B===V.current.activeId)return;if(B!=null&&V.current.activeId==null){V.current.activeId=B;return}let e=setTimeout(()=>{V.current.activeId=B},50);return()=>clearTimeout(e)},[B]),{active:D,activeIndex:f,attributes:A,data:x,rect:C,index:b,newIndex:z,items:u,isOver:T,isSorting:L,isDragging:N,listeners:M,node:w,overIndex:g,over:P,setNodeRef:I,setActivatorNodeRef:ee,setDroppableNodeRef:E,setDraggableNodeRef:j,transform:ie??ne,transition:ae()};function ae(){if(ie||re&&V.current.newIndex===b)return Di;if(!(R&&!zt(O)||!l)&&(L||H))return Ht.Transition.toString({...l,property:Ei})}}function ji(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}Q.Down,Q.Right,Q.Up,Q.Left;var Mi=d(f)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function Ni({year:e,semester:t,setYear:n,setSemester:r,setCurrentTimetableId:i}){let a=s(),{query:o}=S(`GET`,`/semesters`);(0,W.useEffect)(()=>{let e=o.data?.semesters;if(e&&e.length>0){let t=e[e.length-1];t&&(n(t.year),r(t.semester))}},[o.data]);let{isFirstSemester:u,isLastSemester:d}=(0,W.useMemo)(()=>{if(!o.data)return{isFirstSemester:!1,isLastSemester:!1};let n=o.data.semesters,r=n[0],i=n[n.length-1];return!r||!i?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===r.year&&t===r.semester,isLastSemester:e===i.year&&t===i.semester}},[o.data,e,t]);return l(Mi,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[c(k,{onClick:u?void 0:()=>{u||(t===b.SPRING?(r(b.FALL),n(e-1)):r(b.SPRING),i(null))},styles:{padding:2.5},children:c(O,{size:20,color:u?a.colors.Text.disable:a.colors.Highlight.default,onClick:u?void 0:()=>{},children:c(ge,{})})}),c(M,{color:`Highlight.default`,children:e}),c(M,{color:`Highlight.default`,children:x(t)}),c(k,{onClick:d?void 0:()=>{d||(t===b.FALL?(r(b.SPRING),n(e+1)):r(b.FALL),i(null))},styles:{padding:2.5},children:c(O,{size:20,color:d?a.colors.Text.disable:a.colors.Highlight.default,onClick:d?void 0:()=>{},children:c(_e,{})})})]})}var Pi=d.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,Fi={default:d(Pi)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:d(Pi)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},Ii=d.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,Li=e=>c(Ii,{children:e}),Ri=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=Fi[e],a=()=>Li(t);return c(i,{ref:n,...r,onClick:r.onClick,children:c(a,{})})};function zi(e,t,n){return e.filter(e=>e.year===t&&e.semester===n).sort((e,t)=>e.timeTableOrder-t.timeTableOrder)}function Bi({status:e,currentTimetableId:t,semesterKey:n,autoSelectedSemesterKeys:r,timetables:i}){return e!==`success`||i.length===0||r.includes(n)?null:{semesterKey:n,timetableId:t==null?i[0]?.id??null:null}}var Vi=d(f)`
    width: 100%;
    max-width: 992px;

    ${I.laptop} {
        max-width: 635px;
    }

    ${I.tablet} {
        max-width: 100%;
    }
`,Hi=d(f)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,Ui=d(M)`
    outline: none;
    user-select: none;
`,Wi=({timetable:e,isSelected:t,onClick:n,onCopy:r,onDelete:i,onNameChange:a,isDragging:o})=>{let u=s(),{attributes:d,listeners:p,setNodeRef:m,transform:h,transition:g}=Ai({id:e.id});return c(`div`,{ref:m,style:{transform:(e=>{if(!e)return``;let{x:t,y:n}=e;return`translate3d(${t}px, ${n}px, 0)`})(h),transition:g,touchAction:`manipulation`,opacity:o?.5:1},...d,...p,children:l(Ri,{type:t?`selected`:`default`,onClick:n,children:[c(Ui,{onClick:e=>{t&&(e.stopPropagation(),e.currentTarget.contentEditable=`true`,e.currentTarget.focus())},onBlur:t=>{let n=t.currentTarget.textContent||``;t.currentTarget.contentEditable=`false`,a(e.id,n)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},contentEditable:!1,suppressContentEditableWarning:!0,type:`Normal`,color:t?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:e.name?e.name:`No Title`}),l(f,{direction:`row`,gap:0,align:`center`,children:[t&&c(k,{onClick:r,styles:{padding:5},children:c(O,{size:15,onClick:()=>{},color:t?u.colors.Highlight.default:u.colors.Text.lighter,children:c(pe,{})})}),c(k,{onClick:i,styles:{padding:3.75},children:c(O,{size:17.5,onClick:()=>{},color:t?u.colors.Highlight.default:u.colors.Text.lighter,children:c(j,{})})})]})]})})},Gi=({timeTableLectures:e,timetablesQuery:t})=>{let{t:n}=A(),{status:r}=h(),i=s(),a=G(e=>e.currentTimetableId),o=G(e=>e.setCurrentTimetableId),u=G(e=>e.setCurrentTimetableName),d=G(e=>e.year),p=G(e=>e.semesterEnum),m=G(e=>e.setYear),g=G(e=>e.setSemesterEnum),_=G(e=>e.autoSelectedSemesterKeys),v=G(e=>e.markSemesterAutoSelected),y=G(e=>e.resetAutoSelectedSemesters),{requestFunction:b}=S(`POST`,`/timetables`,{onSuccess:e=>{t.refetch(),o(e.id)}}),{requestFunction:x}=S(`DELETE`,`/timetables`,{onMutate:e=>{a===e.id&&o(null)},onSuccess:()=>{t.refetch()}}),{requestFunction:C}=S(`PATCH`,`/timetables`,{onSuccess:()=>{t.refetch()}}),[w,T]=(0,W.useState)([]),[E,D]=(0,W.useState)(null),j=rn(nn(ar,{activationConstraint:{distance:8}}),nn(sr,{activationConstraint:{delay:500,tolerance:5}}));return(0,W.useEffect)(()=>{let e=zi(t.data?.timetables??[],d,p);if(T(e),a!=null&&t.data?.timetables.forEach(e=>{e.id===a&&u(e.name)}),r!==`success`){y();return}let n=Bi({status:r,currentTimetableId:a,semesterKey:`${d}-${p}`,autoSelectedSemesterKeys:_,timetables:e});n!=null&&(v(n.semesterKey),n.timetableId!=null&&o(n.timetableId))},[t.data,d,p,r,a,_,v,y,o]),(0,W.useEffect)(()=>{u(a==null?n(`timetable.myTimetable`):w.find(e=>e.id===a)?.name||``)},[a]),l(Vi,{direction:`row`,justify:`space-between`,align:`stretch`,flex:`0 1 auto`,gap:4,style:{overflowX:`hidden`},children:[l(f,{direction:`row`,gap:3,flex:`0 1 auto`,style:{overflowX:`auto`},children:[l(Ri,{type:a==null?`selected`:`default`,onClick:()=>{v(`${d}-${p}`),o(null)},children:[c(M,{type:`Normal`,color:a===null?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:n(`timetable.myTimetable`)}),a===null&&r===`success`&&c(k,{onClick:t=>{t.stopPropagation(),b({year:d,semester:p,lectureIds:e.map(e=>e.id)})},styles:{padding:5},children:c(O,{size:15,color:i.colors.Highlight.default,onClick:()=>{},children:c(pe,{})})})]},`my-timetable`),r===`success`&&l(Hi,{direction:`row`,gap:3,flex:`1 1 auto`,onWheel:e=>{if(e.deltaY===0)return;let t=e.currentTarget;t.scrollLeft+=e.deltaY},children:[c($r,{sensors:j,collisionDetection:dn,onDragStart:e=>{D(e.active.id)},onDragEnd:e=>{let{active:t,over:n}=e;if(D(null),n&&t.id!==n.id){let e=w.findIndex(e=>e.id===t.id),r=w.findIndex(e=>e.id===n.id);T(di(w,e,r));let i=t.id;C({id:i,order:r})}},modifiers:[ci,ui],children:c(Si,{items:w.map(e=>e.id),strategy:_i,children:w.map(t=>c(Wi,{timetable:t,isSelected:a===t.id,isDragging:E===t.id,onClick:()=>{o(t.id)},onCopy:t=>{t.stopPropagation(),b({year:d,semester:p,lectureIds:e.map(e=>e.id)})},onDelete:e=>{e.stopPropagation(),x({id:t.id})},onNameChange:(e,t)=>{T(n=>n.map(n=>n.id===e?{...n,name:t}:n)),C({id:e,name:t})}},t.id))})}),c(Ri,{onClick:()=>{b({year:d,semester:p,lectureIds:[]})},children:c(k,{onClick:e=>{},styles:{padding:3.75},children:c(O,{size:17.5,color:i.colors.Text.default,onClick:()=>{},children:c(H,{})})})})]})]}),c(f,{direction:`row`,gap:0,align:`center`,children:c(Ni,{year:d,semester:p,setYear:m,setSemester:g,setCurrentTimetableId:o})})]})},Ki=d.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;

    ${I.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px 8px;
    }
`,qi=d.div`
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

    ${I.tablet} {
        padding-left: 0;
    }
`,Ji=d.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;

    ${I.mobile} {
        font-size: 12px;
    }
`,Yi=d.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    white-space: nowrap;

    ${I.mobile} {
        font-size: 12px;
    }
`,Xi=d.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({theme:e})=>e.colors.Highlight.default};

    ${I.mobile} {
        display: none;
    }
`;function Zi({hover:e,setHover:t,timetableLectures:n}){let{t:r}=A(),{lecturesByType:i,creditsByType:a}=(0,W.useMemo)(()=>{let e={basicRequired:0,basicElective:0,majorRequired:0,majorElective:0,humanitiesSocial:0,etc:0},t={basicRequired:[],basicElective:[],majorRequired:[],majorElective:[],humanitiesSocial:[],etc:[]};return n.forEach(n=>{n.type.includes(`기초필수`)?(e.basicRequired+=n.credit,t.basicRequired.push(n)):n.type.includes(`기초선택`)?(e.basicElective+=n.credit,t.basicElective.push(n)):n.type.includes(`전공필수`)?(e.majorRequired+=n.credit,t.majorRequired.push(n)):n.type.includes(`전공선택`)?(e.majorElective+=n.credit,t.majorElective.push(n)):n.type.includes(`인문`)?(e.humanitiesSocial+=n.credit,t.humanitiesSocial.push(n)):(e.etc+=n.credit,e.etc+=n.creditAU,t.etc.push(n))}),{lecturesByType:t,creditsByType:e}},[n]);function o(e){for(let t of[`basicRequired`,`basicElective`,`majorRequired`,`majorElective`,`humanitiesSocial`,`etc`])if(e.type.includes(r(`common.type.${t}`)))return t;return`etc`}function s(t,n){if(!e||e.length==0||e?.length>1)return``;let r=e[0];return t.map(e=>e.id).includes(r.id)?`(${r.creditAU?r.creditAU:r.credit})`:n===o(r)?`(+${r.creditAU?r.creditAU:r.credit})`:``}return l(Ki,{children:[l(qi,{onMouseEnter:()=>t(i.basicRequired),onMouseLeave:()=>t([]),children:[c(Ji,{children:r(`common.type.basicRequiredShort`)}),c(Yi,{children:a.basicRequired}),c(Xi,{children:s(i.basicRequired,`basicRequired`)})]}),l(qi,{onMouseEnter:()=>t(i.basicElective),onMouseLeave:()=>t([]),children:[c(Ji,{children:r(`common.type.basicElectiveShort`)}),c(Yi,{children:a.basicElective}),c(Xi,{children:s(i.basicElective,`basicElective`)})]}),l(qi,{onMouseEnter:()=>t(i.majorRequired),onMouseLeave:()=>t([]),children:[c(Ji,{children:r(`common.type.majorRequiredShort`)}),c(Yi,{children:a.majorRequired}),c(Xi,{children:s(i.majorRequired,`majorRequired`)})]}),l(qi,{onMouseEnter:()=>t(i.majorElective),onMouseLeave:()=>t([]),children:[c(Ji,{children:r(`common.type.majorElectiveShort`)}),c(Yi,{children:a.majorElective}),c(Xi,{children:s(i.majorElective,`majorElective`)})]}),l(qi,{onMouseEnter:()=>t(i.humanitiesSocial),onMouseLeave:()=>t([]),children:[c(Ji,{children:r(`common.type.humanitiesSocialElectiveShort`)}),c(Yi,{children:a.humanitiesSocial}),c(Xi,{children:s(i.humanitiesSocial,`humanitiesSocial`)})]}),l(qi,{onMouseEnter:()=>t(i.etc),onMouseLeave:()=>t([]),children:[c(Ji,{children:r(`common.type.etcShort`)}),c(Yi,{children:a.etc}),c(Xi,{children:s(i.etc,`etc`)})]})]})}var Qi=d.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${I.mobile} {
        gap: 20px;
    }
`,$i=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,ea=d.span`
    font-size: 20px;
    font-weight: 300;
`,ta=d.span`
    font-size: 10px;
    font-weight: 400;
`,na=d.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${I.mobile} {
        gap: 20px;
    }
`,ra=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`,ia=d.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.Text.default};
`,aa=d.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.Text.dark};
`;function oa({timetableLectures:e,hover:t,setHover:n}){let{t:r}=A(),i=(0,W.useMemo)(()=>{let n=e.reduce((e,t)=>e+t.credit,0),r=e.reduce((e,t)=>e+t.creditAU,0);if(t&&t.length==1){let i=t[0];e.some(e=>e.id===i.id)||(n+=i.credit,r+=i.creditAU)}let i=0,a=0,o=0,s=e.length;return e.forEach(e=>{i+=e.averageGrade,a+=e.averageLoad,o+=e.averageSpeech,e.averageGrade===0&&e.averageLoad===0&&e.averageSpeech===0&&--s}),i/=s,a/=s,o/=s,{totalCredits:n,totalAU:r,avgGrade:i,avgLoad:a,avgSpeech:o}},[e,t]);return l(u,{children:[l(Qi,{children:[l($i,{onMouseEnter:()=>n(e.filter(e=>e.credit>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.credit>0),children:[c(ea,{children:i.totalCredits}),c(ta,{children:r(`common.credit`)})]}),l($i,{onMouseEnter:()=>n(e.filter(e=>e.creditAU>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.creditAU>0),children:[c(ea,{children:i.totalAU}),c(ta,{children:`AU`})]})]}),l(na,{children:[l(ra,{children:[c(ia,{children:y(i.avgGrade/3)}),c(aa,{children:r(`common.grade`)})]}),l(ra,{children:[c(ia,{children:y(i.avgLoad/3)}),c(aa,{children:r(`common.load`)})]}),l(ra,{children:[c(ia,{children:y(i.avgSpeech/3)}),c(aa,{children:r(`common.speech`)})]})]})]})}var sa=d(f)`
    overflow-y: auto;
    min-height: 0;
`,ca=d.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`,la=d.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({color:e,theme:t})=>e||t.colors.Text.default};
    min-width: 16px;
`,ua=d(f)`
    color: ${({highlighted:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,da=[{day:v.Mon,color:`#E54C65`},{day:v.Tue,color:`#F5A623`},{day:v.Wed,color:`#7ED321`},{day:v.Thu,color:`#4A90D9`},{day:v.Fri,color:`#9B59B6`}];function fa({timetableLectures:e,hover:t,setHover:n}){let{t:r}=A(),i=(0,W.useMemo)(()=>{let n={[v.Mon]:[],[v.Tue]:[],[v.Wed]:[],[v.Thu]:[],[v.Fri]:[]};if(e.forEach(e=>{e.examTimes.forEach(t=>{if(t==null)return;let r=t.day;n[r]&&n[r].push({lectureName:e.name,lectureId:e.id,time:t.str.split(` `).slice(1).join(` `)})})}),t&&t.length==1){let r=t[0];e.some(e=>e.id===r.id)||r.examTimes.forEach(e=>{if(e==null)return;let t=e.day;n[t]&&n[t].push({lectureName:r.name,lectureId:r.id,time:e.str})})}return n},[e,t]);return l(sa,{direction:`column`,gap:15,style:{width:`100%`},flex:`1 1 0`,children:[c(M,{type:`NormalBold`,color:`Text.default`,children:r(`timetable.examTimetable`)}),da.map(({day:r,color:a})=>{let o=i[r];return!o||o.length===0?null:l(ca,{children:[c(la,{color:a,onMouseEnter:()=>{n(e.filter(e=>e.examTimes.some(e=>e?.day===r)))},onMouseLeave:()=>n([]),children:_(r,!0)}),c(f,{direction:`column`,gap:2,children:o.sort((e,t)=>e.time.localeCompare(t.time)).map((r,i)=>l(ua,{direction:`column`,gap:0,highlighted:t?.some(e=>e.id===r.lectureId),onMouseEnter:()=>n(e.filter(e=>e.id===r.lectureId)),onMouseLeave:()=>n([]),children:[c(M,{type:`NormalBold`,children:r.lectureName}),c(M,{type:`Normal`,children:r.time})]},i))})]},r)})]})}var pa=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(e=>e??`#CCCCCC`),ma=d.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`,ha=d.img`
    object-fit: cover;
    object-position: center;
    filter: ${({isDarkMode:e})=>e?`invert(100%) sepia(100%) grayscale(100%) brightness(0.7)`:`none`};

    /* Performance Optimization: Force GPU layer to prevent repaints on hover */
    transform: translateZ(0);
    will-change: filter;
`,ga=d.div`
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
`,_a=d.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({theme:e})=>e.colors.Background.Section.default};
    position: absolute;
    top: 17px;
`,va=d.div`
    background-color: ${({theme:e,courseId:t,highlighted:n})=>n?e.colors.Highlight.default:(()=>{let n=pa(e.colors?.Tile?.TimeTable?.default);return n[t%n.length]})()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`,ya=new Map([[`E2`,{left:50,top:67}],[`E3`,{left:56,top:61}],[`E6`,{left:57,top:52}],[`E7`,{left:65,top:50}],[`E11`,{left:45,top:47}],[`E16`,{left:45,top:40}],[`N1`,{left:75,top:30}],[`N3`,{left:45,top:34}],[`N4`,{left:53,top:32}],[`N5`,{left:63,top:28}],[`N7`,{left:27,top:30}],[`N22`,{left:67,top:26}],[`N24`,{left:65,top:22}],[`N25`,{left:49,top:26}],[`N27`,{left:47,top:17}],[`W1`,{left:26,top:68}],[`W8`,{left:27,top:44}],[`W16`,{left:34,top:73}]]);function ba({timetableLectures:e,hover:t,setHover:n}){let{displayedTheme:r}=te();return l(ma,{children:[(0,W.useMemo)(()=>c(ha,{src:`/campus_map.svg`,alt:`Campus Map`,isDarkMode:r===`dark`,decoding:`async`}),[r]),Array.from(ya).map(([r,{left:i,top:a}])=>{let o=e.filter(e=>e.classes.some(e=>e.buildingCode.includes(r)));return t?.forEach(t=>{e.includes(t)||t.classes.some(e=>e.buildingCode.includes(r))&&o.push(t)}),o.length===0?null:l(ga,{left:i,top:a,onMouseEnter:()=>{n(o)},onMouseLeave:()=>{n([])},highlighted:t?.some(e=>o.includes(e))??!1,children:[c(_a,{}),r,o.map(e=>c(va,{courseId:e.courseId,highlighted:t?.includes(e)??!1},e.id))]},r)})]})}var xa=t((e=>{e.createCanvas=function(e,t){return Object.assign(document.createElement(`canvas`),{width:e,height:t})},e.loadImage=function(e,t){return new Promise(function(n,r){let i=Object.assign(document.createElement(`img`),t);function a(){i.onload=null,i.onerror=null}i.onload=function(){a(),n(i)},i.onerror=function(){a(),r(Error(`Failed to load the image "`+e+`"`))},i.src=e})}}))(),Sa=(e=>(e.DAILY=`DAILY`,e.HOURLY=`HOURLY`,e.MINUTELY=`MINUTELY`,e.MONTHLY=`MONTHLY`,e.SECONDLY=`SECONDLY`,e.WEEKLY=`WEEKLY`,e.YEARLY=`YEARLY`,e))(Sa||{}),Ca=(e=>(e.FR=`FR`,e.MO=`MO`,e.SA=`SA`,e.SU=`SU`,e.TH=`TH`,e.TU=`TU`,e.WE=`WE`,e))(Ca||{});function wa(e,t,n){if(Array.isArray(t))e.x=t.map(e=>{if(Array.isArray(e))return e;if(typeof e.key!=`string`||typeof e.value!=`string`)throw Error(`Either key or value is not a string!`);if(e.key.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e.key,e.value]});else if(typeof t==`object`)e.x=Object.entries(t).map(([e,t])=>{if(typeof e!=`string`||typeof t!=`string`)throw Error(`Either key or value is not a string!`);if(e.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e,t]});else if(typeof t==`string`&&typeof n==`string`){if(t.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");e.x.push([t,n])}else return e.x.map(e=>({key:e[0],value:e[1]}))}function Ta(e,t){if(e instanceof Date&&isNaN(e.getTime())||typeof e==`string`&&isNaN(new Date(e).getTime()))throw Error(`\`${t}\` has to be a valid date!`);if(e instanceof Date||typeof e==`string`||typeof e==`object`&&e&&(Ha(e)||Va(e)||Ba(e)||za(e))||Na(e)&&e.isValid===!0||(Pa(e)||Ma(e))&&e.isValid())return e;throw Error(`\`${t}\` has to be a valid date!`)}function Ea(e,t){let n=Object.values(e),r=String(t).toUpperCase();if(!r||!n.includes(r))throw Error(`Input must be one of the following: ${n.join(`, `)}`);return r}function Da(e,t){let n=null;if(typeof t==`string`){let e=t.match(/^(.+) ?<([^>]+)>$/);e?n={email:e[2].trim(),name:e[1].trim()}:t.includes(`@`)&&(n={email:t.trim(),name:t.trim()})}else typeof t==`object`&&(n={email:t.email,mailto:t.mailto,name:t.name,sentBy:t.sentBy});if(!n&&typeof t==`string`)throw Error("`"+e+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n)throw Error("`"+e+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n.name)throw Error("`"+e+".name` is empty!");if(!n.email)throw Error("`"+e+".email` is empty!");return n}function $(e,t){return String(e).replace(t?/[\\"]/g:/[\\;,]/g,function(e){return`\\`+e}).replace(/(?:\r\n|\r|\n)/g,`\\n`)}function Oa(e){return e.split(`\r
`).map(function(e){let t=``,n=0;for(let r=0;r<e.length;r++){let i=e.charAt(r);i>=`\ud800`&&i<=`\udbff`&&(i+=e.charAt(++r));let a=new TextEncoder().encode(i).length;n+=a,n>74&&(t+=`\r
 `,n=a),t+=i}return t}).join(`\r
`)}function ka(e,t,n,r){if(e?.startsWith(`/`)&&(e=e.substr(1)),typeof t==`string`||t instanceof Date){let i=Ua(t)?t.withTimeZone(e):new Date(t),a=i.getUTCFullYear()+String(i.getUTCMonth()+1).padStart(2,`0`)+i.getUTCDate().toString().padStart(2,`0`);return e&&(a=i.getFullYear()+String(i.getMonth()+1).padStart(2,`0`)+i.getDate().toString().padStart(2,`0`)),n?a:e?(a+=`T`+i.getHours().toString().padStart(2,`0`)+i.getMinutes().toString().padStart(2,`0`)+i.getSeconds().toString().padStart(2,`0`),a):(a+=`T`+i.getUTCHours().toString().padStart(2,`0`)+i.getUTCMinutes().toString().padStart(2,`0`)+i.getUTCSeconds().toString().padStart(2,`0`)+(r?``:`Z`),a)}else if(Pa(t)){let i=e?Ia(t)&&!t.tz()?t.clone().tz(e):t:r||n&&Ia(t)&&t.tz()?t:t.utc();return i.format(`YYYYMMDD`)+(n?``:`T`+i.format(`HHmmss`)+(r||e?``:`Z`))}else if(Na(t)){let i=e?t.setZone(e):r||n&&t.zone.type!==`system`?t:t.setZone(`utc`);return i.toFormat(`yyyyLLdd`)+(n?``:`T`+i.toFormat(`HHmmss`)+(r||e?``:`Z`))}else if(Ha(t)){let i=t;return e&&(i=t.withTimeZone(t.timeZoneId)),!e&&t.timeZoneId!==`UTC`&&(i=t.withTimeZone(`UTC`)),ka(null,i.toPlainDateTime(),n,r||!!e)}else if(Va(t)){if(n)return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`);if(e){let i=t.toZonedDateTime(e);return ka(e,i,n,r)}return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`)+`T`+t.hour.toString().padStart(2,`0`)+t.minute.toString().padStart(2,`0`)+t.second.toString().padStart(2,`0`)+(r||e?``:`Z`)}else{if(Ba(t))return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`)+(n?``:`T000000`+(r||e?``:`Z`));if(za(t)){let i=e||`UTC`,a=t.toZonedDateTimeISO(i);return ka(e,a,n,r)}else{let i=t;if(e)i=typeof t.tz==`function`?t.tz(e):t;else if(!r)if(typeof t.utc==`function`)i=t.utc();else throw Error(`Unable to convert dayjs object to UTC value: UTC plugin is not available!`);return i.format(`YYYYMMDD`)+(n?``:`T`+i.format(`HHmmss`)+(r||e?``:`Z`))}}}function Aa(e,t,n,r){let i=``,a=r?.floating||!1;return r?.timezone&&(i=`;TZID=`+r.timezone,a=!0),t+i+`:`+ka(e,n,!1,a)}function ja(e){let t=e.x.map(([e,t])=>e.toUpperCase()+`:`+$(t,!1)).join(`\r
`);return t.length?t+`\r
`:``}function Ma(e){return typeof e==`object`&&!!e&&!(e instanceof Date)&&!Pa(e)&&!Na(e)&&!Ra(e)}function Na(e){return typeof e==`object`&&!!e&&`toJSDate`in e&&typeof e.toJSDate==`function`&&!Ra(e)}function Pa(e){return e!=null&&e._isAMomentObject!=null&&!Ra(e)}function Fa(e){return typeof e==`object`&&!!e&&`asSeconds`in e&&typeof e.asSeconds==`function`}function Ia(e){return Pa(e)&&`tz`in e&&typeof e.tz==`function`}function La(e){return typeof e==`object`&&!!e&&`between`in e&&typeof e.between==`function`&&typeof e.toString==`function`}function Ra(e){return Ha(e)||Va(e)||Ba(e)||za(e)}function za(e){return typeof e==`object`&&!!e&&!Ha(e)&&!Va(e)&&!Ba(e)&&`toZonedDateTimeISO`in e&&typeof e.toZonedDateTimeISO==`function`&&!(`year`in e)&&!(`timeZoneId`in e)}function Ba(e){return typeof e==`object`&&!!e&&!Ha(e)&&!Va(e)&&`toPlainDateTime`in e&&typeof e.toPlainDateTime==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&!(`hour`in e)&&!(`timeZoneId`in e)&&!(`epochSeconds`in e)}function Va(e){return typeof e==`object`&&!!e&&!Ha(e)&&`toZonedDateTime`in e&&typeof e.toZonedDateTime==`function`&&`toPlainDate`in e&&typeof e.toPlainDate==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&`hour`in e&&typeof e.hour==`number`&&`minute`in e&&typeof e.minute==`number`&&`second`in e&&typeof e.second==`number`&&!(`timeZone`in e)}function Ha(e){return typeof e==`object`&&!!e&&`timeZoneId`in e&&typeof e.timeZoneId==`string`&&`toPlainDateTime`in e&&typeof e.toPlainDateTime==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&`hour`in e&&typeof e.hour==`number`&&`minute`in e&&typeof e.minute==`number`&&`second`in e&&typeof e.second==`number`}function Ua(e){return e instanceof Date&&`internal`in e&&e.internal instanceof Date&&`withTimeZone`in e&&typeof e.withTimeZone==`function`&&`tzComponents`in e&&typeof e.tzComponents==`function`}function Wa(e){if(typeof e==`string`||e instanceof Date)return new Date(e);if(Ha(e)){let t=e.toInstant();return new Date(t.epochMilliseconds)}return Va(e)?new Date(Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)):Ba(e)?new Date(Date.UTC(e.year,e.month-1,e.day)):za(e)?new Date(e.epochMilliseconds):Na(e)?e.toJSDate():e.toDate()}function Ga(e){let t=``;return e<0&&(t=`-`,e*=-1),t+=`P`,e>=86400&&(t+=Math.floor(e/86400)+`D`,e%=86400),!e&&t.length>1||(t+=`T`,e>=3600&&(t+=Math.floor(e/3600)+`H`,e%=3600),e>=60&&(t+=Math.floor(e/60)+`M`,e%=60),e>0?t+=e+`S`:t.length<=2&&(t+=`0S`)),t}function Ka(e){return e?typeof e==`string`?e:Ha(e)?Ka(e.withTimeZone(`UTC`).toPlainDateTime()):(Ra(e),e.toJSON()):null}var qa=(e=>(e.CHAIR=`CHAIR`,e.NON=`NON-PARTICIPANT`,e.OPT=`OPT-PARTICIPANT`,e.REQ=`REQ-PARTICIPANT`,e))(qa||{}),Ja=(e=>(e.CLIENT=`CLIENT`,e.NONE=`NONE`,e.SERVER=`SERVER`,e))(Ja||{}),Ya=(e=>(e.ACCEPTED=`ACCEPTED`,e.DECLINED=`DECLINED`,e.DELEGATED=`DELEGATED`,e.NEEDSACTION=`NEEDS-ACTION`,e.TENTATIVE=`TENTATIVE`,e))(Ya||{}),Xa=(e=>(e.GROUP=`GROUP`,e.INDIVIDUAL=`INDIVIDUAL`,e.RESOURCE=`RESOURCE`,e.ROOM=`ROOM`,e.UNKNOWN=`UNKNOWN`,e))(Xa||{}),Za=class e{data;parent;constructor(e,t){if(this.data={delegatedFrom:null,delegatedTo:null,email:``,mailto:null,name:null,role:`REQ-PARTICIPANT`,rsvp:null,scheduleAgent:null,sentBy:null,status:null,type:null,x:[]},this.parent=t,!this.parent)throw Error("`event` option required!");if(!e.email)throw Error("No value for `email` in ICalAttendee given!");e.name!==void 0&&this.name(e.name),e.email!==void 0&&this.email(e.email),e.mailto!==void 0&&this.mailto(e.mailto),e.sentBy!==void 0&&this.sentBy(e.sentBy),e.status!==void 0&&this.status(e.status),e.role!==void 0&&this.role(e.role),e.rsvp!==void 0&&this.rsvp(e.rsvp),e.type!==void 0&&this.type(e.type),e.delegatedTo!==void 0&&this.delegatedTo(e.delegatedTo),e.delegatedFrom!==void 0&&this.delegatedFrom(e.delegatedFrom),e.delegatesTo&&this.delegatesTo(e.delegatesTo),e.delegatesFrom&&this.delegatesFrom(e.delegatesFrom),e.scheduleAgent!==void 0&&this.scheduleAgent(e.scheduleAgent),e.x!==void 0&&this.x(e.x)}delegatedFrom(t){return t===void 0?this.data.delegatedFrom:(t?typeof t==`string`?this.data.delegatedFrom=new e(Da(`delegatedFrom`,t),this.parent):t instanceof e?this.data.delegatedFrom=t:this.data.delegatedFrom=new e(t,this.parent):this.data.delegatedFrom=null,this)}delegatedTo(t){return t===void 0?this.data.delegatedTo:t?(typeof t==`string`?this.data.delegatedTo=new e(Da(`delegatedTo`,t),this.parent):t instanceof e?this.data.delegatedTo=t:this.data.delegatedTo=new e(t,this.parent),this.data.status=`DELEGATED`,this):(this.data.delegatedTo=null,this.data.status===`DELEGATED`&&(this.data.status=null),this)}delegatesFrom(t){let n=t instanceof e?t:this.parent.createAttendee(t);return this.delegatedFrom(n),n.delegatedTo(this),n}delegatesTo(t){let n=t instanceof e?t:this.parent.createAttendee(t);return this.delegatedTo(n),n.delegatedFrom(this),n}email(e){return e?(this.data.email=e,this):this.data.email}mailto(e){return e===void 0?this.data.mailto:(this.data.mailto=e||null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e||null,this)}role(e){return e===void 0?this.data.role:(this.data.role=Ea(qa,e),this)}rsvp(e){return e===void 0?this.data.rsvp:e===null?(this.data.rsvp=null,this):(this.data.rsvp=!!e,this)}scheduleAgent(e){return e===void 0?this.data.scheduleAgent:e?typeof e==`string`&&e.toUpperCase().startsWith(`X-`)?(this.data.scheduleAgent=e,this):(this.data.scheduleAgent=Ea(Ja,e),this):(this.data.scheduleAgent=null,this)}sentBy(e){return e?(this.data.sentBy=e,this):this.data.sentBy}status(e){return e===void 0?this.data.status:e?(this.data.status=Ea(Ya,e),this):(this.data.status=null,this)}toJSON(){return Object.assign({},this.data,{delegatedFrom:this.data.delegatedFrom?.email()||null,delegatedTo:this.data.delegatedTo?.email()||null,x:this.x()})}toString(){let e=`ATTENDEE`;if(!this.data.email)throw Error("No value for `email` in ICalAttendee given!");return e+=`;ROLE=`+this.data.role,this.data.type&&(e+=`;CUTYPE=`+this.data.type),this.data.status&&(e+=`;PARTSTAT=`+this.data.status),this.data.rsvp!==null&&(e+=`;RSVP=`+this.data.rsvp.toString().toUpperCase()),this.data.sentBy!==null&&(e+=`;SENT-BY="mailto:`+this.data.sentBy+`"`),this.data.delegatedTo&&(e+=`;DELEGATED-TO="`+this.data.delegatedTo.email()+`"`),this.data.delegatedFrom&&(e+=`;DELEGATED-FROM="`+this.data.delegatedFrom.email()+`"`),this.data.name&&(e+=`;CN="`+$(this.data.name,!0)+`"`),this.data.email&&this.data.mailto&&(e+=`;EMAIL=`+$(this.data.email,!1)),this.data.scheduleAgent&&(e+=`;SCHEDULE-AGENT=`+this.data.scheduleAgent),this.data.x.length&&(e+=`;`+this.data.x.map(([e,t])=>e.toUpperCase()+`=`+$(t,!1)).join(`;`)),e+=`:MAILTO:`+$(this.data.mailto||this.data.email,!1)+`\r
`,e}type(e){return e===void 0?this.data.type:e?(this.data.type=Ea(Xa,e),this):(this.data.type=null,this)}x(e,t){if(e===void 0)return wa(this.data);if(typeof e==`string`&&typeof t==`string`)wa(this.data,e,t);else if(typeof e==`object`)wa(this.data,e);else throw Error(`Either key or value is not a string!`);return this}},Qa=(e=>(e.audio=`audio`,e.display=`display`,e.email=`email`,e))(Qa||{}),$a={end:`END`,start:`START`},eo=class{data;event;constructor(e,t){if(this.data={attach:null,attendees:[],description:null,interval:null,relatesTo:null,repeat:null,summary:null,trigger:-600,type:`display`,x:[]},this.event=t,!t)throw Error("`event` option required!");e.type!==void 0&&this.type(e.type),`trigger`in e&&e.trigger!==void 0&&this.trigger(e.trigger),`triggerBefore`in e&&e.triggerBefore!==void 0&&this.triggerBefore(e.triggerBefore),`triggerAfter`in e&&e.triggerAfter!==void 0&&this.triggerAfter(e.triggerAfter),e.repeat&&this.repeat(e.repeat),e.attach!==void 0&&this.attach(e.attach),e.description!==void 0&&this.description(e.description),e.summary!==void 0&&this.summary(e.summary),e.attendees!==void 0&&this.attendees(e.attendees),e.x!==void 0&&this.x(e.x)}attach(e){if(e===void 0)return this.data.attach;if(!e)return this.data.attach=null,this;let t;if(typeof e==`string`)t={mime:null,uri:e};else if(typeof e==`object`)t={mime:e.mime||null,uri:e.uri};else throw Error("`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalAlarm.html#attach");if(!t.uri)throw Error("`attach.uri` is empty!");return this.data.attach={mime:t.mime,uri:t.uri},this}attendees(e){return e?(e.forEach(e=>this.createAttendee(e)),this):this.data.attendees}createAttendee(e){if(e instanceof Za)return this.data.attendees.push(e),e;typeof e==`string`&&(e=Da(`data`,e));let t=new Za(e,this);return this.data.attendees.push(t),t}description(e){return e===void 0?this.data.description:e?(this.data.description=e,this):(this.data.description=null,this)}relatesTo(e){if(e===void 0)return this.data.relatesTo;if(!e)return this.data.relatesTo=null,this;if(!Object.values($a).includes(e))throw Error("`relatesTo` is not correct, must be either `START` or `END`!");return this.data.relatesTo=e,this}repeat(e){if(e===void 0)return this.data.repeat;if(!e)return this.data.repeat=null,this;if(typeof e!=`object`)throw Error("`repeat` is not correct, must be an object!");if(typeof e.times!=`number`||!isFinite(e.times))throw Error("`repeat.times` is not correct, must be numeric!");if(typeof e.interval!=`number`||!isFinite(e.interval))throw Error("`repeat.interval` is not correct, must be numeric!");return this.data.repeat=e,this}summary(e){return e===void 0?this.data.summary:e?(this.data.summary=e,this):(this.data.summary=null,this)}toJSON(){let e=this.trigger();return Object.assign({},this.data,{trigger:typeof e==`number`?e:Ka(e),x:this.x()})}toString(){let e=`BEGIN:VALARM\r
`;if(e+=`ACTION:`+this.data.type.toUpperCase()+`\r
`,typeof this.data.trigger==`number`&&this.data.relatesTo===null?this.data.trigger>0?e+=`TRIGGER;RELATED=END:`+Ga(this.data.trigger)+`\r
`:e+=`TRIGGER:`+Ga(this.data.trigger)+`\r
`:typeof this.data.trigger==`number`?e+=`TRIGGER;RELATED=`+this.data.relatesTo?.toUpperCase()+`:`+Ga(this.data.trigger)+`\r
`:e+=`TRIGGER;VALUE=DATE-TIME:`+ka(this.event.timezone(),this.data.trigger)+`\r
`,this.data.repeat){if(!this.data.repeat.times)throw Error("No value for `repeat.times` in ICalAlarm given, but required for `interval`!");if(!this.data.repeat.interval)throw Error("No value for `repeat.interval` in ICalAlarm given, but required for `repeat`!");e+=`REPEAT:`+this.data.repeat.times+`\r
`,e+=`DURATION:`+Ga(this.data.repeat.interval)+`\r
`}return this.data.type===`audio`&&this.data.attach&&this.data.attach.mime?e+=`ATTACH;FMTTYPE=`+$(this.data.attach.mime,!1)+`:`+$(this.data.attach.uri,!1)+`\r
`:this.data.type===`audio`&&this.data.attach?e+=`ATTACH;VALUE=URI:`+$(this.data.attach.uri,!1)+`\r
`:this.data.type===`audio`&&(e+=`ATTACH;VALUE=URI:Basso\r
`),this.data.type!==`audio`&&this.data.description?e+=`DESCRIPTION:`+$(this.data.description,!1)+`\r
`:this.data.type!==`audio`&&(e+=`DESCRIPTION:`+$(this.event.summary(),!1)+`\r
`),this.data.type===`email`&&this.data.summary?e+=`SUMMARY:`+$(this.data.summary,!1)+`\r
`:this.data.type===`email`&&(e+=`SUMMARY:`+$(this.event.summary(),!1)+`\r
`),this.data.type===`email`&&this.data.attendees.forEach(t=>{e+=t.toString()}),e+=ja(this.data),e+=`END:VALARM\r
`,e}trigger(e){if(e===void 0&&typeof this.data.trigger==`number`)return-1*this.data.trigger;if(e===void 0)return this.data.trigger;if(typeof e==`number`&&isFinite(e))this.data.trigger=-1*e;else{if(!e||typeof e==`number`)throw Error("`trigger` is not correct, must be a finite number or a supported date!");this.data.trigger=Ta(e,`trigger`)}return this}triggerAfter(e){return e===void 0?this.data.trigger:this.trigger(typeof e==`number`?-1*e:e)}triggerBefore(e){return e===void 0?this.trigger():this.trigger(e)}type(e){if(e===void 0)return this.data.type;if(!e||!Object.keys(Qa).includes(e))throw Error("`type` is not correct, must be either `display` or `audio`!");return this.data.type=e,this}x(e,t){if(e===void 0)return wa(this.data);if(typeof e==`string`&&typeof t==`string`)wa(this.data,e,t);else if(typeof e==`object`)wa(this.data,e);else throw Error(`Either key or value is not a string!`);return this}},to=class{data;constructor(e){if(this.data={name:``},!e.name)throw Error("No value for `name` in ICalCategory given!");this.name(e.name)}name(e){return e===void 0?this.data.name:(this.data.name=e,this)}toJSON(){return Object.assign({},this.data)}toString(){return $(this.data.name,!1)}},no=(e=>(e.BUSY=`BUSY`,e.FREE=`FREE`,e.OOF=`OOF`,e.TENTATIVE=`TENTATIVE`,e))(no||{}),ro=(e=>(e.CONFIDENTIAL=`CONFIDENTIAL`,e.PRIVATE=`PRIVATE`,e.PUBLIC=`PUBLIC`,e))(ro||{}),io=(e=>(e.CANCELLED=`CANCELLED`,e.CONFIRMED=`CONFIRMED`,e.TENTATIVE=`TENTATIVE`,e))(io||{}),ao=(e=>(e.OPAQUE=`OPAQUE`,e.TRANSPARENT=`TRANSPARENT`,e))(ao||{}),oo=class{calendar;data;constructor(e,t){if(this.data={alarms:[],allDay:!1,attachments:[],attendees:[],busystatus:null,categories:[],class:null,created:null,description:null,end:null,floating:!1,id:crypto.randomUUID(),lastModified:null,location:null,organizer:null,priority:null,recurrenceId:null,repeating:null,sequence:0,stamp:new Date,start:new Date,status:null,summary:``,timezone:null,transparency:null,url:null,x:[]},this.calendar=t,!t)throw Error("`calendar` option required!");e.id&&this.id(e.id),e.sequence!==void 0&&this.sequence(e.sequence),e.start&&this.start(e.start),e.end!==void 0&&this.end(e.end),e.recurrenceId!==void 0&&this.recurrenceId(e.recurrenceId),e.timezone!==void 0&&this.timezone(e.timezone),e.stamp!==void 0&&this.stamp(e.stamp),e.allDay!==void 0&&this.allDay(e.allDay),e.floating!==void 0&&this.floating(e.floating),e.repeating!==void 0&&this.repeating(e.repeating),e.summary!==void 0&&this.summary(e.summary),e.location!==void 0&&this.location(e.location),e.description!==void 0&&this.description(e.description),e.organizer!==void 0&&this.organizer(e.organizer),e.attendees!==void 0&&this.attendees(e.attendees),e.alarms!==void 0&&this.alarms(e.alarms),e.categories!==void 0&&this.categories(e.categories),e.status!==void 0&&this.status(e.status),e.busystatus!==void 0&&this.busystatus(e.busystatus),e.priority!==void 0&&this.priority(e.priority),e.url!==void 0&&this.url(e.url),e.attachments!==void 0&&this.attachments(e.attachments),e.transparency!==void 0&&this.transparency(e.transparency),e.created!==void 0&&this.created(e.created),e.lastModified!==void 0&&this.lastModified(e.lastModified),e.class!==void 0&&this.class(e.class),e.x!==void 0&&this.x(e.x)}alarms(e){return e?(e.forEach(e=>this.createAlarm(e)),this):this.data.alarms}allDay(e){return e===void 0?this.data.allDay:(this.data.allDay=!!e,this)}attachments(e){return e?(e.forEach(e=>this.createAttachment(e)),this):this.data.attachments}attendees(e){return e?(e.forEach(e=>this.createAttendee(e)),this):this.data.attendees}busystatus(e){return e===void 0?this.data.busystatus:e===null?(this.data.busystatus=null,this):(this.data.busystatus=Ea(no,e),this)}categories(e){return e?(e.forEach(e=>this.createCategory(e)),this):this.data.categories}class(e){return e===void 0?this.data.class:e===null?(this.data.class=null,this):(this.data.class=Ea(ro,e),this)}createAlarm(e){let t=e instanceof eo?e:new eo(e,this);return this.data.alarms.push(t),t}createAttachment(e){return this.data.attachments.push(e),this}createAttendee(e){if(e instanceof Za)return this.data.attendees.push(e),e;typeof e==`string`&&(e=Da(`data`,e));let t=new Za(e,this);return this.data.attendees.push(t),t}createCategory(e){let t=e instanceof to?e:new to(e);return this.data.categories.push(t),t}created(e){return e===void 0?this.data.created:e===null?(this.data.created=null,this):(this.data.created=Ta(e,`created`),this)}description(e){return e===void 0?this.data.description:e===null?(this.data.description=null,this):(typeof e==`string`?this.data.description={plain:e}:this.data.description=e,this)}end(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.end):e===null?(this.data.end=null,this):(this.data.end=Ta(e,`end`),this)}floating(e){return e===void 0?this.data.floating:(this.data.floating=!!e,this.data.floating&&(this.data.timezone=null),this)}id(e){return e===void 0?this.data.id:(this.data.id=String(e),this)}lastModified(e){return e===void 0?this.data.lastModified:e===null?(this.data.lastModified=null,this):(this.data.lastModified=Ta(e,`lastModified`),this)}location(e){if(e===void 0)return this.data.location;if(typeof e==`string`)return this.data.location={title:e},this;if(e&&(`title`in e&&!e.title||e?.geo&&(typeof e.geo.lat!=`number`||!isFinite(e.geo.lat)||typeof e.geo.lon!=`number`||!isFinite(e.geo.lon))||!(`title`in e)&&!e?.geo))throw Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalEvent.html#location");return this.data.location=e||null,this}organizer(e){return e===void 0?this.data.organizer:e===null?(this.data.organizer=null,this):(this.data.organizer=Da(`organizer`,e),this)}priority(e){if(e===void 0)return this.data.priority;if(e===null)return this.data.priority=null,this;if(e<0||e>9)throw Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");return this.data.priority=Math.round(e),this}recurrenceId(e){return e===void 0?this.data.recurrenceId:e===null?(this.data.recurrenceId=null,this):(this.data.recurrenceId=Ta(e,`recurrenceId`),this)}repeating(e){if(e===void 0)return this.data.repeating;if(!e)return this.data.repeating=null,this;if(La(e)||typeof e==`string`)return this.data.repeating=e,this;if(this.data.repeating={freq:Ea(Sa,e.freq)},e.count){if(!isFinite(e.count))throw Error("`repeating.count` must be a finite number!");this.data.repeating.count=e.count}if(e.interval){if(!isFinite(e.interval))throw Error("`repeating.interval` must be a finite number!");this.data.repeating.interval=e.interval}if(e.until!==void 0&&(this.data.repeating.until=Ta(e.until,`repeating.until`)),e.byDay){let t=Array.isArray(e.byDay)?e.byDay:[e.byDay];this.data.repeating.byDay=t.map(e=>Ea(Ca,e))}if(e.byMonth){let t=Array.isArray(e.byMonth)?e.byMonth:[e.byMonth];this.data.repeating.byMonth=t.map(e=>{if(typeof e!=`number`||e<1||e>12)throw Error("`repeating.byMonth` contains invalid value `"+e+"`!");return e})}if(e.byMonthDay){let t=Array.isArray(e.byMonthDay)?e.byMonthDay:[e.byMonthDay];this.data.repeating.byMonthDay=t.map(e=>{if(typeof e!=`number`||e<-31||e>31||e===0)throw Error("`repeating.byMonthDay` contains invalid value `"+e+"`!");return e})}if(e.bySetPos){if(!this.data.repeating.byDay)throw"`repeating.bySetPos` must be used along with `repeating.byDay`!";let t=Array.isArray(e.bySetPos)?e.bySetPos:[e.bySetPos];this.data.repeating.bySetPos=t.map(e=>{if(typeof e!=`number`||e<-366||e>366||e===0)throw"`repeating.bySetPos` contains invalid value `"+e+"`!";return e})}if(e.exclude){let t=Array.isArray(e.exclude)?e.exclude:[e.exclude];this.data.repeating.exclude=t.map((e,t)=>Ta(e,`repeating.exclude[${t}]`))}return e.startOfWeek&&(this.data.repeating.startOfWeek=Ea(Ca,e.startOfWeek)),this}sequence(e){if(e===void 0)return this.data.sequence;if(isNaN(parseInt(String(e),10)))throw Error("`sequence` must be a number!");return this.data.sequence=e,this}stamp(e){return e===void 0?this.data.stamp:(this.data.stamp=Ta(e,`stamp`),this)}start(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.start):(this.data.start=Ta(e,`start`),this)}status(e){return e===void 0?this.data.status:e===null?(this.data.status=null,this):(this.data.status=Ea(io,e),this)}summary(e){return e===void 0?this.data.summary:(this.data.summary=e?String(e):``,this)}timestamp(e){return e===void 0?this.stamp():this.stamp(e)}timezone(e){return e===void 0&&this.data.timezone!==null?this.data.timezone:e===void 0?this.calendar.timezone():(this.data.timezone=e&&e!==`UTC`?e.toString():null,this.data.timezone&&(this.data.floating=!1),this)}toJSON(){let e=null;return La(this.data.repeating)||typeof this.data.repeating==`string`?e=this.data.repeating.toString():this.data.repeating&&(e=Object.assign({},this.data.repeating,{exclude:this.data.repeating.exclude?.map(e=>Ka(e)),until:Ka(this.data.repeating.until)||void 0})),this.swapStartAndEndIfRequired(),Object.assign({},this.data,{created:Ka(this.data.created)||null,end:Ka(this.data.end)||null,lastModified:Ka(this.data.lastModified)||null,recurrenceId:Ka(this.data.recurrenceId)||null,repeating:e,stamp:Ka(this.data.stamp)||null,start:Ka(this.data.start)||null,x:this.x()})}toString(){let e=``;if(e+=`BEGIN:VEVENT\r
`,e+=`UID:`+this.data.id+`\r
`,e+=`SEQUENCE:`+this.data.sequence+`\r
`,this.swapStartAndEndIfRequired(),e+=`DTSTAMP:`+ka(this.calendar.timezone(),this.data.stamp)+`\r
`,this.data.allDay?(e+=`DTSTART;VALUE=DATE:`+ka(this.timezone(),this.data.start,!0)+`\r
`,this.data.end&&(e+=`DTEND;VALUE=DATE:`+ka(this.timezone(),this.data.end,!0)+`\r
`),e+=`X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r
`,e+=`X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r
`):(e+=Aa(this.timezone(),`DTSTART`,this.data.start,this.data)+`\r
`,this.data.end&&(e+=Aa(this.timezone(),`DTEND`,this.data.end,this.data)+`\r
`)),La(this.data.repeating)||typeof this.data.repeating==`string`){let t=this.data.repeating.toString().replace(/\r\n/g,`
`).split(`
`).filter(e=>e&&!e.startsWith(`DTSTART:`)).join(`\r
`);!t.includes(`\r
`)&&!t.startsWith(`RRULE:`)&&(t=`RRULE:`+t),e+=t.trim()+`\r
`}else this.data.repeating&&(e+=`RRULE:FREQ=`+this.data.repeating.freq,this.data.repeating.count&&(e+=`;COUNT=`+this.data.repeating.count),this.data.repeating.interval&&(e+=`;INTERVAL=`+this.data.repeating.interval),this.data.repeating.until&&(e+=`;UNTIL=`+ka(this.calendar.timezone(),this.data.repeating.until,!1,this.floating())),this.data.repeating.byDay&&(e+=`;BYDAY=`+this.data.repeating.byDay.join(`,`)),this.data.repeating.byMonth&&(e+=`;BYMONTH=`+this.data.repeating.byMonth.join(`,`)),this.data.repeating.byMonthDay&&(e+=`;BYMONTHDAY=`+this.data.repeating.byMonthDay.join(`,`)),this.data.repeating.bySetPos&&(e+=`;BYSETPOS=`+this.data.repeating.bySetPos.join(`,`)),this.data.repeating.startOfWeek&&(e+=`;WKST=`+this.data.repeating.startOfWeek),e+=`\r
`,this.data.repeating.exclude&&(this.data.allDay?e+=`EXDATE;VALUE=DATE:`+this.data.repeating.exclude.map(e=>ka(this.calendar.timezone(),e,!0)).join(`,`)+`\r
`:(e+=`EXDATE`,this.timezone()?e+=`;TZID=`+this.timezone()+`:`+this.data.repeating.exclude.map(e=>ka(this.timezone(),e,!1,!0)).join(`,`)+`\r
`:e+=`:`+this.data.repeating.exclude.map(e=>ka(this.timezone(),e,!1,this.floating())).join(`,`)+`\r
`)));return this.data.recurrenceId&&(e+=Aa(this.timezone(),`RECURRENCE-ID`,this.data.recurrenceId,this.data)+`\r
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
`),e+=ja(this.data),this.data.created&&(e+=`CREATED:`+ka(this.calendar.timezone(),this.data.created)+`\r
`),this.data.lastModified&&(e+=`LAST-MODIFIED:`+ka(this.calendar.timezone(),this.data.lastModified)+`\r
`),this.data.class&&(e+=`CLASS:`+this.data.class.toUpperCase()+`\r
`),e+=`END:VEVENT\r
`,e}transparency(e){return e===void 0?this.data.transparency:e?(this.data.transparency=Ea(ao,e),this):(this.data.transparency=null,this)}uid(e){return e===void 0?this.id():this.id(e)}url(e){return e===void 0?this.data.url:(this.data.url=e?String(e):null,this)}x(e,t){return e===void 0?wa(this.data):(typeof e==`string`&&typeof t==`string`&&wa(this.data,e,t),typeof e==`object`&&wa(this.data,e),this)}swapStartAndEndIfRequired(){if(this.data.start&&this.data.end&&Wa(this.data.start).getTime()>Wa(this.data.end).getTime()){let e=this.data.start;this.data.start=this.data.end,this.data.end=e}}},so=(e=>(e.ADD=`ADD`,e.CANCEL=`CANCEL`,e.COUNTER=`COUNTER`,e.DECLINECOUNTER=`DECLINECOUNTER`,e.PUBLISH=`PUBLISH`,e.REFRESH=`REFRESH`,e.REPLY=`REPLY`,e.REQUEST=`REQUEST`,e))(so||{}),co=class{data;constructor(e={}){this.data={description:null,events:[],method:null,name:null,prodId:`//sebbo.net//ical-generator//EN`,scale:null,source:null,timezone:null,ttl:null,url:null,x:[]},e.prodId!==void 0&&this.prodId(e.prodId),e.method!==void 0&&this.method(e.method),e.name!==void 0&&this.name(e.name),e.description!==void 0&&this.description(e.description),e.timezone!==void 0&&this.timezone(e.timezone),e.source!==void 0&&this.source(e.source),e.url!==void 0&&this.url(e.url),e.scale!==void 0&&this.scale(e.scale),e.ttl!==void 0&&this.ttl(e.ttl),e.events!==void 0&&this.events(e.events),e.x!==void 0&&this.x(e.x)}clear(){return this.data.events=[],this}createEvent(e){let t=e instanceof oo?e:new oo(e,this);return this.data.events.push(t),t}description(e){return e===void 0?this.data.description:(this.data.description=e?String(e):null,this)}events(e){return e?(e.forEach(e=>this.createEvent(e)),this):this.data.events}length(){return this.data.events.length}method(e){return e===void 0?this.data.method:e?(this.data.method=Ea(so,e),this):(this.data.method=null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e?String(e):null,this)}prodId(e){if(!e)return this.data.prodId;if(typeof e==`string`)return this.data.prodId=e,this;if(typeof e!=`object`)throw Error("`prodid` needs to be a string or an object!");if(!e.company)throw Error("`prodid.company` is a mandatory item!");if(!e.product)throw Error("`prodid.product` is a mandatory item!");let t=(e.language||`EN`).toUpperCase();return this.data.prodId=`//`+e.company+`//`+e.product+`//`+t,this}scale(e){return e===void 0?this.data.scale:(e===null?this.data.scale=null:this.data.scale=e.toUpperCase(),this)}source(e){return e===void 0?this.data.source:(this.data.source=e||null,this)}timezone(e){return e===void 0?this.data.timezone?.name||null:(e===`UTC`?this.data.timezone=null:typeof e==`string`?this.data.timezone={name:e}:e===null?this.data.timezone=null:this.data.timezone=e,this)}toJSON(){return Object.assign({},this.data,{events:this.data.events.map(e=>e.toJSON()),timezone:this.timezone(),x:this.x()})}toString(){let e=``;return e=`BEGIN:VCALENDAR\r
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
`),this.data.ttl&&(e+=`REFRESH-INTERVAL;VALUE=DURATION:`+Ga(this.data.ttl)+`\r
`,e+=`X-PUBLISHED-TTL:`+Ga(this.data.ttl)+`\r
`),this.data.events.forEach(t=>e+=t.toString()),e+=ja(this.data),e+=`END:VCALENDAR`,Oa(e)}ttl(e){return e===void 0?this.data.ttl:(Fa(e)?this.data.ttl=e.asSeconds():e&&e>0?this.data.ttl=e:this.data.ttl=null,this)}url(e){return e===void 0?this.data.url:(this.data.url=e||null,this)}x(e,t){if(e===void 0)return wa(this.data);if(typeof e==`string`&&typeof t==`string`)wa(this.data,e,t);else if(typeof e==`object`)wa(this.data,e);else throw Error(`Either key or value is not a string!`);return this}};function lo(e){return new co(e)}var uo=lo;function fo(e){let{ctx:t,x:n,y:r,width:i,height:a,radius:o,color:s}=e;t.fillStyle=s,t.beginPath(),t.moveTo(n+o,r),t.lineTo(n+i-o,r),t.quadraticCurveTo(n+i,r,n+i,r+o),t.lineTo(n+i,r+a-o),t.quadraticCurveTo(n+i,r+a,n+i-o,r+a),t.lineTo(n+o,r+a),t.quadraticCurveTo(n,r+a,n,r+a-o),t.lineTo(n,r+o),t.quadraticCurveTo(n,r,n+o,r),t.closePath(),t.fill()}function po(e,t,n,r){let i=document.createElement(`canvas`).getContext(`2d`);if(!i)return[];i.font=`${r}px ${n}`;let a=``,o=[];for(let n of e){let e=a+n;i.measureText(e).width>t&&a!==``?(o.push(a),a=n):a=e}return a&&o.push(a),o}function mo(e){let{ctx:t,x:n,y:r,text:i,font:a,fontSize:o,color:s,align:c=`left`}=e;t.fillStyle=s,t.font=`${o}px ${a}`,t.textAlign=c||`left`,t.fillText(i,n,r)}function ho(e){let{ctx:t,x:n,y:r,width:i,height:a,title:o,professor:s,location:c,font:l,fontSize:u,displayMode:d}=e,f=po(o,i,l,u),p=po(s,i,l,u),m=po(c,i,l,u),h=[...f,...m,...p].slice(0,3),g=(a-h.reduce((e,t,n)=>t===``?e+2:e+u,0))/2+u-7;h.forEach((e,i)=>{e===``?g+=2:(mo({ctx:t,x:n,y:r+g,text:e,font:l,fontSize:u,color:i<f.length?`#000000`:d===`dark`?`#4C4C4C`:`#888888`}),g+=u+5)})}async function go(e){let{timetableName:t,lectures:n,timetableType:r,semesterName:i,semesterFontSize:a,tileFontSize:o,displayMode:s,language:c}=e,l=Object.values(s===`dark`?ne.Tile.TimeTable.default:R.Tile.TimeTable.default).flatMap(e=>Object.values(e)),u=`timetable_template/Image_template_${r}_${s}_${c}.png`,d=new Image;d.src=u,await new Promise((e,t)=>{d.onload=e,d.onerror=t});let f=await(0,xa.loadImage)(u),p=(0,xa.createCanvas)(f.width,f.height),m=p.getContext(`2d`);m.drawImage(f,0,0),mo({ctx:m,x:r===`5days`?952:1302,y:78,text:i+` `+t,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:a,color:`#CCCCCC`,align:`right`});for(let e of n){let t=l[e.courseId%l.length]||`#F2CECE`;for(let n of e.classes){let{day:r,begin:i,end:a}=n,[c,l,u,d]=[178*r+76,i*4/3-486,171,(a-i)*4/3-7];fo({ctx:m,x:c,y:l,width:u,height:d,radius:4,color:t}),ho({ctx:m,x:c+12,y:l+8,width:u-24,height:d-16,title:e.name,professor:V(e.professors)||``,location:n.buildingCode+` `+n.roomName||``,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:o,displayMode:s})}}return p}async function _o(e){let t=(await go(e)).toDataURL(`image/png`),n=document.createElement(`a`);n.href=t,n.download=`${e.timetableName}.png`,n.click(),URL.revokeObjectURL(t)}async function vo(e){let t=(await go(e)).toDataURL(`image/png`),n=await(await fetch(t)).blob();if(!navigator.clipboard?.write)return;let r=new ClipboardItem({"image/png":n});await navigator.clipboard.write([r])}function yo(e){let{name:t,lectures:n,semesterObject:r}=e,i=uo({name:t,prodId:`//SPARCS//OTL Plus`,timezone:`Asia/Seoul`});for(let e of n)for(let t of e.classes){let n=t.buildingCode+` `+t.roomName,a=new Date(r.beginning),o=(t.day+1)%7,s=new Date(a),c=s.getDay(),l=(o+7-c)%7;s.setDate(s.getDate()+l);let u=Math.floor(t.begin/60),d=t.begin%60,f=Math.floor(t.end/60),p=t.end%60,m=new Date(s);m.setHours(u,d,0,0);let h=new Date(s);h.setHours(f,p,0,0),i.createEvent({start:m,end:h,summary:e.name,location:n,repeating:{freq:Sa.WEEKLY,until:new Date(r.end)},timezone:`Asia/Seoul`}).alarms([{type:Qa.display,trigger:900}])}let a=new Blob([i.toString()],{type:`text/calendar;charset=utf-8`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=`${t}.ics`,s.click(),URL.revokeObjectURL(o)}var bo=d(f)`
    width: 100%;

    ${I.laptop} {
        height: 56px;
        flex-wrap: wrap;
        align-items: center;
    }

    ${I.tablet} {
        height: auto;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
`,xo=d.button`
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
`;function So({timetableName:e,timetableLectures:t,year:n,semester:r}){let{t:i,i18n:a}=A(),o=s(),u=L(`tablet`),{displayedTheme:d}=te(),{query:f}=S(`GET`,`/semesters`),[p,m]=(0,W.useState)(`idle`),h=(0,W.useMemo)(()=>f?f.data?.semesters.find(e=>e.year===n&&e.semester===r):null,[f.data,n,r]),g=(0,W.useMemo)(()=>t.some(e=>e.classes.some(e=>e.day>=5))?`7days`:`5days`,[t]);return(0,W.useEffect)(()=>{if(p.startsWith(`success`)){let e=setTimeout(()=>{m(`idle`)},500);return()=>clearTimeout(e)}},[p]),l(bo,{direction:u?`row`:`column`,gap:8,children:[l(xo,{onClick:()=>{p===`idle`&&(vo({timetableName:e,lectures:t,timetableType:g,semesterName:n+` `+x(r),semesterFontSize:30,tileFontSize:18,displayMode:d,language:a.resolvedLanguage==`ko`?`ko`:`en`}),m(`successCopyImage`))},children:[c(O,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:c(p==`successCopyImage`?ae:pe,{})}),!u&&c(`span`,{children:i(`timetable.copyImage`)})]}),l(xo,{onClick:()=>{p===`idle`&&(_o({timetableName:e,lectures:t,timetableType:g,semesterName:n+` `+x(r),semesterFontSize:30,tileFontSize:18,displayMode:d,language:a.resolvedLanguage==`ko`?`ko`:`en`}),m(`successDownloadImage`))},children:[c(O,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:c(p==`successDownloadImage`?ae:he,{})}),!u&&c(`span`,{children:i(`timetable.exportImage`)})]}),l(xo,{onClick:()=>{if(p===`idle`){if(!h)return;yo({name:e,lectures:t,semesterObject:{beginning:new Date(h.beginning),end:new Date(h.end)}}),m(`successDownloadCalendar`)}},children:[c(O,{size:16,color:o.colors.Highlight.default,children:c(p==`successDownloadCalendar`?ae:fe,{})}),!u&&c(`span`,{children:i(`timetable.exportICal`)})]})]})}var Co=d.div`
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

    ${I.laptop} {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`;function wo({timetableLectures:e}){let t=L(`laptop`),n=G(e=>e.currentTimetableName),r=G(e=>e.year),i=G(e=>e.semesterEnum),a=G(e=>e.selectedLectures),o=G(e=>e.hoveredLectures),s=G(e=>e.setHoveredLectures),u=a.length>0?a:o;return l(Co,{children:[!t&&c(ba,{timetableLectures:e,hover:u,setHover:s}),c(Zi,{hover:u,setHover:s,timetableLectures:e}),!t&&c(F,{direction:`row`}),c(oa,{timetableLectures:e,hover:u,setHover:s}),!t&&c(F,{direction:`row`}),!t&&c(fa,{timetableLectures:e,hover:u,setHover:s}),!t&&c(F,{direction:`row`}),!t&&c(So,{timetableName:n,timetableLectures:e,year:r,semester:i})]})}var To=d(f)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${I.tablet} {
        padding: 8px;
    }

    ${I.mobile} {
        padding: 0 8px 8px 8px;
    }
`,Eo=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${I.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }

    ${I.tablet} {
        flex: 1 1 0;
        min-height: 0;
        height: 100%;
    }
`,Do=d(f)`
    border-radius: 12px;
    width: fit-content;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${I.laptop} {
        max-width: none;
    }

    ${I.tablet} {
        width: 100%;
        max-width: none;
        flex: 1 0 0;
        overflow: hidden;
    }
`,Oo=d(f)`
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

    ${I.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`,ko=d.div`
    width: 330px;
    height: 100%;
    display: flex;

    ${I.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${I.laptop} {
        width: 300px;
    }
`,Ao=d.div`
    width: 270px;
    height: 100%;
    display: flex;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${I.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${I.laptop} {
        width: 300px;
    }

    ${I.tablet} {
        width: 100%;
    }
`,jo=d.div`
    ${I.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,Mo=d(f)`
    flex: 1;
    min-height: 0;
    overflow: hidden;

    ${I.laptop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,No=d.div`
    ${I.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${I.tablet} {
        height: auto;
        padding: 8px;
    }
`,Po=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
`,Fo=a(function(){let{status:e}=h(),t=s(),n=L(`tablet`),r=L(`laptop`),i=L(`desktop`);(0,W.useEffect)(()=>{p(`Page View`,{page:`Timetable`})},[]);let a=(0,W.useRef)(null),o=(0,W.useRef)(null),d=(0,W.useRef)(null),m=G(e=>e.hoveredLectures),g=G(e=>e.setHoveredLectures),_=G(e=>e.selectedLectures),v=G(e=>e.setSelectedLectures),y=G(e=>e.timeFilter),b=G(e=>e.setTimeFilter),x=G(e=>e.currentTimetableId),C=G(e=>e.currentTimetableName),w=G(e=>e.year),T=G(e=>e.semesterEnum),E=G(e=>e.mobileSearchOpen),D=G(e=>e.setMobileSearchOpen),k=G(e=>e.flashLectureIds),{query:A,setParams:j}=S(`GET`,`/timetables`,{enabled:e===`success`}),[P,I]=(0,W.useState)([]),{query:te}=S(`GET`,`/timetables/${x}`,{enabled:x!==null&&e===`success`}),{query:R,setParams:ne}=S(`GET`,`/timetables/my-timetable`,{enabled:e===`success`}),z=e===`success`?x===null?R.data?.lectures??[]:te.data?.lectures??[]:P,B=e!==`success`||x!==null;(0,W.useEffect)(()=>{g([]),v([])},[E]),(0,W.useEffect)(()=>{let e=e=>{a.current&&!a.current.contains(e.target)&&o.current&&!o.current.contains(e.target)&&(g([]),v([]))};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,W.useEffect)(()=>{v([]),g([]),w!==-1&&(ne({year:w,semester:T}),j({year:w,semester:T})),I([])},[w,T]),(0,W.useEffect)(()=>{n||(v([]),g([]))},[x]),(0,W.useEffect)(()=>{y!==null&&n&&D(!0)},[y]);let{addLectures:V,removeLectures:re,changeSemester:H,undo:ie,redo:ae,recordAction:oe}=Ce({currentTimetableLectures:z,nonLoginTimetable:P,setNonLoginTimetable:I}),U=(0,W.useMemo)(()=>B?e=>re([e]):void 0,[B,re]),{onLectureSelect:se}=Te({currentTimetableLectures:z,undo:ie,redo:ae,addLectures:V,removeLectures:re,timetableIds:[null,...A.data?.timetables.sort((e,t)=>e.timeTableOrder-t.timeTableOrder).map(e=>e.id)||[]],isLoggedIn:e===`success`,changeSemester:H,recordAction:oe});return c(To,{direction:n?`column`:`row`,align:`stretch`,justify:`center`,gap:n?8:12,flex:`1 0 0`,ref:d,children:n?l(u,{children:[l(Do,{ref:o,direction:`column`,gap:0,align:`stretch`,justify:`stretch`,style:E?{flex:`1 1 0`,minHeight:0}:void 0,children:[c(Gi,{timeTableLectures:z,timetablesQuery:A}),c(Oo,{direction:`column`,gap:12,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:c(Mo,{direction:`column`,gap:0,align:`stretch`,flex:`1 1 auto`,children:c(ce,{lectures:z,needLectureDeletable:B,onLectureSelect:se,flashLectureIds:k??void 0,deleteLecture:U,hoveredLectures:m,setHoveredLectures:g,selectedLectures:_,timeFilter:y,setTimeFilter:b})})})]}),c(No,{children:c(wo,{timetableLectures:z})}),l(Po,{direction:`row`,gap:0,children:[c(So,{timetableName:C,timetableLectures:z,year:w,semester:T}),l(f,{direction:`row`,gap:4,align:`center`,style:{height:`100%`},onClick:()=>{D(!E)},children:[c(O,{size:16,color:t.colors.Highlight.default,children:c(ee,{})}),c(M,{type:`Normal`,color:`Highlight.default`,children:E?`검색 닫기`:`과목 검색하기`})]})]}),E&&c(Eo,{direction:`row`,align:`flex-start`,gap:12,ref:a,children:c(Ao,{children:c(_t,{timetableLectures:z,addLectures:V,onLectureSelect:se})})}),_.length>0&&c(N,{isOpen:_.length>0,onClose:()=>{},fullScreen:!0,header:!1,children:c(qe,{addLectures:V,removeLectures:U,onMobileModalClose:()=>{g([]),v([])},currentTimetableId:x,timetableLectures:z})})]}):l(u,{children:[c(xe,{}),l(Eo,{direction:i?`column-reverse`:`row`,align:`flex-start`,gap:12,ref:a,children:[r&&c(jo,{children:c(So,{timetableName:C,timetableLectures:z,year:w,semester:T})}),c(Ao,{style:{overflow:`auto`},children:c(_t,{timetableLectures:z,addLectures:V,onLectureSelect:se})}),!i&&c(F,{direction:`column`}),c(ko,{style:{overflow:`auto`},children:c(qe,{timetableLectures:z,addLectures:V,removeLectures:U})})]}),c(f,{direction:`column`,gap:0,children:l(Do,{ref:o,direction:`column`,gap:0,style:{overflowX:`hidden`},flex:`1 1 auto`,children:[c(Gi,{timeTableLectures:z,timetablesQuery:A}),l(Oo,{direction:r?`column`:`row`,gap:r?12:16,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:[c(Mo,{direction:`column`,gap:0,children:c(ce,{cellWidth:r?`113px`:`125px`,lectures:z,needLectureDeletable:B,onLectureSelect:se,flashLectureIds:k??void 0,deleteLecture:U,hoveredLectures:m,setHoveredLectures:g,selectedLectures:_,timeFilter:y,setTimeFilter:b})}),!r&&c(F,{direction:`column`}),c(No,{children:c(wo,{timetableLectures:z})})]})]})})]})})});export{Fo as default};
//# sourceMappingURL=timetable-Bfkgae8p.js.map