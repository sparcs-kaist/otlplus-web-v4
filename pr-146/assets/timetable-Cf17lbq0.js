(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`c551c7ebb0c9bdeee2aac716745b566995b0c4c6`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`99f09d4f-b17b-4a52-8419-b1e54f97f172`,e._sentryDebugIdIdentifier=`sentry-dbid-99f09d4f-b17b-4a52-8419-b1e54f97f172`)}catch{}})();import{n as e,r as t,s as n,t as r}from"./jsx-runtime-CUXk6aok.js";import{t as i}from"./react-dom-DWqbg9dS.js";import{A as a,r as o}from"./chunk-QFMPRPBF-CU6LAOPR.js";import{l as s,n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-D7SEfgjA.js";import{n as d,t as f}from"./FlexWrapper-EO3Hhs7l.js";import{a as p,i as m,l as h,o as g,s as _,t as v}from"./useAPI-B-ARaDtI.js";import{i as y,n as b,r as x,t as S}from"./Credits-BQS8cJJN.js";import{a as C,r as w}from"./axios-C2erfG3Q.js";import{r as T,t as E}from"./Icon-DcUOlJz7.js";import{t as D}from"./IconButton-JPayF9k3.js";import{t as O}from"./useTranslation-BxdIdWBJ.js";import{t as k}from"./Close-BPJtGgWu.js";import{t as A}from"./Typography-Et7FwMCG.js";import{t as ee}from"./Modal-Cf6nUrOd.js";import{t as j}from"./Button-qp1Nh4q4.js";import{r as M}from"./proxy-CyYV4EGf.js";import{t as N}from"./StyledDivider-DPcXnzW6.js";import{t as P}from"./media-Sd5IaJLn.js";import{i as F}from"./mixpanel--o6E_nwe.js";import{t as te}from"./useIsDevice-DFkMoeO7.js";import{t as I}from"./useThemeStore-DemdO9_J.js";import{t as ne}from"./useUserStore-Bgsw_prk.js";import{n as L,t as re}from"./colors-DXLvQpKD.js";import{t as R}from"./LoadingCircle-yznpva1Z.js";import{i as z,n as B,t as ie}from"./ReviewBlock-DLNK0TU_.js";import{i as V,n as ae,r as oe,t as se}from"./checkEmpty-CwF3RQ1a.js";import{t as H}from"./Circle-Dj_B1GrD.js";import{n as ce,t as le}from"./CustomTimeTableGrid-M6JsWM-d.js";import{t as ue}from"./getPlatform-BKAIRP4E.js";var U=n(e()),de=n(i()),fe=n(r(),1),pe=T((0,fe.jsx)(`path`,{d:`M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z`}),`CalendarMonth`),me=T((0,fe.jsx)(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z`}),`ContentCopy`),he=T((0,fe.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorder`),ge=T((0,fe.jsx)(`path`,{d:`M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z`}),`Image`),_e=T((0,fe.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),ve=T((0,fe.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),W=w(e=>({hoveredLectures:[],selectedLectures:[],timeFilter:null,searchLectures:[],isShortcutModalOpen:!1,mobileSearchOpen:!1,isKeyboardNavigating:!1,currentTimetableId:null,currentTimetableName:``,year:-1,semesterEnum:g.SPRING,flashLectureIds:null,setHoveredLectures:t=>e(e=>({hoveredLectures:typeof t==`function`?t(e.hoveredLectures):t})),setSelectedLectures:t=>e(e=>({selectedLectures:typeof t==`function`?t(e.selectedLectures):t})),setTimeFilter:t=>e(e=>({timeFilter:typeof t==`function`?t(e.timeFilter):t})),setSearchLectures:t=>e(e=>({searchLectures:typeof t==`function`?t(e.searchLectures):t})),setIsShortcutModalOpen:t=>e(e=>({isShortcutModalOpen:typeof t==`function`?t(e.isShortcutModalOpen):t})),setMobileSearchOpen:t=>e(e=>({mobileSearchOpen:typeof t==`function`?t(e.mobileSearchOpen):t})),setIsKeyboardNavigating:t=>e(e=>({isKeyboardNavigating:typeof t==`function`?t(e.isKeyboardNavigating):t})),setCurrentTimetableId:t=>e(e=>({currentTimetableId:typeof t==`function`?t(e.currentTimetableId):t})),setCurrentTimetableName:t=>e(e=>({currentTimetableName:typeof t==`function`?t(e.currentTimetableName):t})),setYear:t=>e(e=>({year:typeof t==`function`?t(e.year):t})),setSemesterEnum:t=>e(e=>({semesterEnum:typeof t==`function`?t(e.semesterEnum):t})),triggerFlash:t=>{e({flashLectureIds:t}),setTimeout(()=>{e(e=>e.flashLectureIds===t?{flashLectureIds:null}:{})},300)}})),G=d.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};
    &:last-child {
        border-bottom: none;
    }
`,K=d.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,q=d.kbd`
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
`,ye=d(A)`
    margin-top: 16px;
    margin-bottom: 8px;
`,be=d.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    width: 800px;
`,xe=d.div`
    display: flex;
    flex-direction: column;
`;function Se(){let{t:e}=O(),t=W(e=>e.isShortcutModalOpen),n=W(e=>e.setIsShortcutModalOpen),r=ue(),i=r===`ios`||r===`mac`,a=i?`⌘ Cmd`:`Ctrl`;return t?l(ee,{isOpen:t,onClose:()=>n(!1),title:e(`timetable.shortcuts.modalTitle`),children:[l(be,{children:[l(xe,{children:[c(ye,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:0},children:e(`timetable.shortcuts.lectureSection`)}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureMultiple`)}),l(K,{children:[c(q,{children:a}),`/`,c(q,{children:`Shift`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureCopy`)}),l(K,{children:[c(q,{children:a}),c(q,{children:`C`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureCut`)}),l(K,{children:[c(q,{children:a}),c(q,{children:`X`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lecturePaste`)}),l(K,{children:[c(q,{children:a}),c(q,{children:`V`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureAll`)}),l(K,{children:[c(q,{children:a}),c(q,{children:`A`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.lectureDelete`)}),l(K,{children:[c(q,{children:`Delete`}),`/`,c(q,{children:`Backspace`})]})]})]}),l(xe,{children:[c(ye,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:0},children:e(`timetable.shortcuts.timetableSection`)}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableUndo`)}),l(K,{children:[c(q,{children:a}),c(q,{children:`Z`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableRedo`)}),l(K,{children:[!i&&l(u,{children:[c(q,{children:a}),c(q,{children:`Y`}),`/`]}),c(q,{children:a}),c(q,{children:`Shift`}),c(q,{children:`Z`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableAdd`)}),l(K,{children:[c(q,{children:a}),c(q,{children:`M`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableDuplicate`)}),l(K,{children:[c(q,{children:a}),c(q,{children:`D`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableDelete`)}),l(K,{children:[c(q,{children:`Delete`}),`/`,c(q,{children:`Backspace`})]})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.timetableSelect`)}),c(K,{children:c(q,{children:`1 ~ 9`})})]})]})]}),c(ye,{type:`BiggerBold`,color:`Text.default`,style:{marginTop:24},children:e(`timetable.shortcuts.etcSection`)}),l(be,{children:[l(xe,{children:[l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcSemester`)}),c(K,{children:c(q,{children:`[ / ]`})})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcLectureSearchMove`)}),c(K,{children:c(q,{children:`↑ / ↓`})})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcLectureAddDelete`)}),c(K,{children:c(q,{children:`Space / Enter`})})]})]}),l(xe,{children:[l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcSelectCancel`)}),c(K,{children:c(q,{children:`Esc`})})]}),l(G,{children:[c(A,{type:`Normal`,color:`Text.default`,children:e(`timetable.shortcuts.etcShortcutInfo`)}),l(K,{children:[c(q,{children:a}),c(q,{children:`/`})]})]})]})]})]}):null}var Ce=50;function we({currentTimetableLectures:e,nonLoginTimetable:t,setNonLoginTimetable:n}){let{status:r}=ne(),i=C(),a=W(e=>e.currentTimetableId),o=W(e=>e.setCurrentTimetableId),s=W(e=>e.year),c=W(e=>e.setYear),l=W(e=>e.semesterEnum),u=W(e=>e.setSemesterEnum),[d,f]=(0,U.useState)({}),p=(0,U.useRef)(!1),m=`${a??`my`}-${s}-${l}`,h=d[m]||{undo:[],redo:[]},_=h.undo.length>0,y=h.redo.length>0,b=(0,U.useCallback)(e=>{p.current||f(t=>{let n=t[m]||{undo:[],redo:[]},r=Array.isArray(e)?e:[e];return{...t,[m]:{undo:[...n.undo,r].slice(-Ce),redo:[]}}})},[m]),{query:x}=v(`GET`,`/semesters`),S=(0,U.useCallback)(e=>{let t=!1,n=!1;if(x.data&&x.data.semesters.length>0){let e=x.data.semesters,r=e[0],i=e[e.length-1];r&&i&&(t=s===r.year&&l===r.semester,n=s===i.year&&l===i.semester)}if(e===`prev`){if(t)return;l===g.SPRING?(u(g.FALL),c(s-1)):u(g.SPRING),o(null)}else{if(n)return;l===g.FALL?(u(g.SPRING),c(s+1)):u(g.FALL),o(null)}},[x.data,l,u,c,o,s]),w=(0,U.useRef)(null),T=(0,U.useCallback)(()=>{w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{i.invalidateQueries({queryKey:[`/timetables/${a}`]})},100)},[i,a]),{requestFunction:E}=v(`PATCH`,`/timetables/${a}`,{onMutate:async e=>{await i.cancelQueries({queryKey:[`/timetables/${a}`]});let t=i.getQueryData([`/timetables/${a}`]);return e.lecture&&i.setQueriesData({queryKey:[`/timetables/${a}`]},t=>t&&{...t,lectures:[...t.lectures,e.lecture]}),{previousTimetable:t}},onError:(e,t,n)=>{i.setQueriesData({queryKey:[`/timetables/${a}`]},n?.previousTimetable)},onSettled:T}),{requestFunction:D}=v(`PATCH`,`/timetables/${a}`,{onMutate:async e=>{await i.cancelQueries({queryKey:[`/timetables/${a}`]});let t=i.getQueryData([`/timetables/${a}`]);return i.setQueriesData({queryKey:[`/timetables/${a}`]},t=>t&&{...t,lectures:t.lectures.filter(t=>t.id!==e.lectureId)}),{previousTimetable:t}},onError:(e,t,n)=>{i.setQueriesData({queryKey:[`/timetables/${a}`]},n?.previousTimetable)},onSettled:T}),O=(0,U.useCallback)((e,t={record:!0})=>{if(r!==`success`){n(t=>{let n=e.filter(e=>!t.some(t=>t.id===e.id));return[...t,...n]}),t.record!==!1&&b({type:`add`,lectures:e.map(e=>({lecture:e,lectureId:e.id}))});return}a&&(e.forEach(e=>{E({action:`add`,lectureId:e.id,lecture:e})}),t.record!==!1&&b({type:`add`,lectures:e.map(e=>({lecture:e,lectureId:e.id}))}))},[r,a,E,n,b]),k=(0,U.useCallback)((i,o={record:!0,delay:!1})=>{let s=r===`success`?[]:t.filter(e=>i.includes(e.id)),c=r===`success`&&a?e.filter(e=>i.includes(e.id)):[],l=()=>{r===`success`?a&&(i.forEach(e=>{D({action:`delete`,lectureId:e}),F(`Remove Lecture from Timetable`,{lectureId:e,timetableId:a})}),c.length>0&&o.record!==!1&&b({type:`delete`,lectures:c.map(e=>({lecture:e,lectureId:e.id}))})):(n(e=>e.filter(e=>!i.includes(e.id))),s.length>0&&o.record!==!1&&b({type:`delete`,lectures:s.map(e=>({lecture:e,lectureId:e.id}))}))};o.delay?setTimeout(l,300):l()},[r,a,t,e,D,n,b]),A=(0,U.useCallback)(e=>{e.type===`add`?O(e.lectures.map(e=>e.lecture),{record:!1}):k(e.lectures.map(e=>e.lectureId),{record:!1,delay:!0})},[O,k]),ee=e=>({...e,type:e.type===`add`?`delete`:`add`}),j=e=>[...e].reverse().map(ee);return{addLectures:O,removeLectures:k,changeSemester:S,undo:(0,U.useCallback)(()=>{let e=d[m]||{undo:[],redo:[]};if(e.undo.length===0)return null;let t=e.undo[e.undo.length-1];if(!t)return null;f(e=>({...e,[m]:{undo:(e[m]?.undo||[]).slice(0,-1),redo:[...e[m]?.redo||[],t].slice(-Ce)}})),p.current=!0;let n=j(t);return n.forEach(A),p.current=!1,n.flatMap(e=>e.lectures.map(e=>e.lectureId))},[m,A,d]),redo:(0,U.useCallback)(()=>{let e=d[m]||{undo:[],redo:[]};if(e.redo.length===0)return null;let t=e.redo[e.redo.length-1];return t?(f(e=>({...e,[m]:{undo:[...e[m]?.undo||[],t].slice(-Ce),redo:(e[m]?.redo||[]).slice(0,-1)}})),p.current=!0,t.forEach(A),p.current=!1,t.flatMap(e=>e.lectures.map(e=>e.lectureId))):null},[m,A,d]),recordAction:b,canUndo:_,canRedo:y}}function Te(e,t){for(let n of e)for(let e of t)if(n.day==e.day&&n.begin<e.end&&e.begin<n.end)return!0;return!1}function Ee({currentTimetableLectures:e,undo:t,redo:n,addLectures:r,removeLectures:i,timetableIds:a,isLoggedIn:o,changeSemester:s,recordAction:c}){let{t:l}=O(),u=ue(),d=C(),f=W(e=>e.selectedLectures),p=W(e=>e.setSelectedLectures),m=W(e=>e.year),h=W(e=>e.semesterEnum),g=W(e=>e.setCurrentTimetableId),_=W(e=>e.searchLectures),y=W(e=>e.hoveredLectures),b=W(e=>e.setHoveredLectures),x=W(e=>e.currentTimetableId),S=W(e=>e.isShortcutModalOpen),w=W(e=>e.setIsShortcutModalOpen),T=(0,U.useCallback)(()=>w(e=>!e),[w]),E=(0,U.useRef)(null),D=(0,U.useCallback)((t,n)=>{let r=null;if(n){let e=n.target.closest(`[data-class-time]`);e&&(r=Number(e.getAttribute(`data-class-time`)))}p(i=>{let a=u===`ios`||u===`mac`?n?.metaKey:n?.ctrlKey,o=n?.shiftKey;if(a)return E.current=r,i.some(e=>e.id===t.id)?i.filter(e=>e.id!==t.id):[...i,t];if(o){let n=i[i.length-1];if(!n||r===null||E.current===null)return E.current=r,[...i,t];let a=Math.min(E.current,r),o=Math.max(E.current,r),s=e=>!e.classes||e.classes.length===0?[]:e.classes.map(e=>e.day*24*60+e.begin),c=e.filter(e=>e.id===n.id||e.id===t.id?!0:s(e).some(e=>e>=a&&e<=o)),l=new Set(c.map(e=>e.id)),u=i.filter(e=>!l.has(e.id));return E.current=r,[...u,...c]}else return E.current=r,i.length===1&&i[0]?.id===t.id?[]:[t]})},[e,u,p]),k=t=>{if(e.some(e=>e.id===t.id))i([t.id]);else{if(e.some(e=>Te(e.classes,t.classes))){alert(l(`timetable.addLectureConflict`));return}r([t])}},{requestFunction:A}=v(`POST`,`/timetables`,{onSuccess:e=>{d.invalidateQueries({queryKey:[`/timetables`]}),g(e.id)}}),ee=(0,U.useCallback)(e=>{o&&A({year:m,semester:h,lectureIds:e})},[o,A,m,h]),{requestFunction:j}=v(`DELETE`,`/timetables`,{onMutate:e=>{x===e.id&&g(null)},onSuccess:()=>{d.invalidateQueries({queryKey:[`/timetables`]})}}),M=(0,U.useCallback)(e=>{j({id:e})},[j]),N=(0,U.useRef)(null),P=W(e=>e.triggerFlash);(0,U.useEffect)(()=>{N.current=null},[m,h]);let F=(0,U.useRef)(()=>{});return F.current=d=>{let m=d.target;if(m.tagName===`INPUT`||m.tagName===`TEXTAREA`||m.isContentEditable)return;let h=u===`ios`||u===`mac`?d.metaKey:d.ctrlKey;if(h&&d.key===`/`){d.preventDefault(),T();return}if(!S){if(h&&d.key.toLowerCase()===`z`){if(d.preventDefault(),o&&x===null)return;let e=d.shiftKey?n():t();e&&e.length>0&&P(e);return}if(h&&d.key.toLowerCase()===`y`){if(d.preventDefault(),o&&x===null)return;let e=n();e&&e.length>0&&P(e);return}if(h&&d.key.toLowerCase()===`a`){d.preventDefault(),p(e);return}if(h&&d.key.toLowerCase()===`c`){f.length>0&&(d.preventDefault(),N.current={lectures:f,sourceTimetableId:x},P(f.map(e=>e.id)));return}if(h&&d.key.toLowerCase()===`x`){f.length>0&&(d.preventDefault(),N.current={lectures:f,sourceTimetableId:x},P(f.map(e=>e.id)),(!o||x!==null)&&(i(f.map(e=>e.id),{delay:!0}),p([])));return}if(h&&d.key.toLowerCase()===`v`){if(o&&x===null){d.preventDefault();return}let t=N.current;if(t&&t.lectures.length>0){d.preventDefault();let n=t.lectures.filter(t=>!e.some(e=>e.id===t.id));if(n.length===0){P(t.lectures.map(e=>e.id));return}let a=e.filter(e=>n.some(t=>Te(e.classes,t.classes)));if(a.length>0){let e=l(`timetable.pasteLectureConflict`);window.confirm(e)&&(i(a.map(e=>e.id),{record:!1,delay:!0}),r(n,{record:!1}),c([{type:`delete`,lectures:a.map(e=>({lecture:e,lectureId:e.id}))},{type:`add`,lectures:n.map(e=>({lecture:e,lectureId:e.id}))}]),P(t.lectures.map(e=>e.id)))}else r(n),P(t.lectures.map(e=>e.id))}return}if(h&&d.key.toLowerCase()===`m`){d.preventDefault(),o&&ee([]);return}if(h&&d.key.toLowerCase()===`d`){d.preventDefault(),o&&ee(e.map(e=>e.id));return}if(d.key===`Delete`||d.key===`Backspace`){if(o&&x===null){d.preventDefault();return}f.length>0?(d.preventDefault(),i(f.map(e=>e.id)),p([])):o&&x!==null&&(d.preventDefault(),window.confirm(l(`timetable.timetableKeyboardDeleteConfirm`))&&M(x));return}if(!h&&d.key===`[`){d.preventDefault(),s(`prev`);return}if(!h&&d.key===`]`){d.preventDefault(),s(`next`);return}if(!h&&d.key===`Escape`){let e=!1;f.length>0&&(p([]),e=!0),y.length>0&&(b([]),e=!0),e&&d.preventDefault();return}if(!h&&/^[1-9]$/.test(d.key)){d.preventDefault();let e=parseInt(d.key)-1;if(e<a.length){let t=a[e];t!==void 0&&g(t)}return}if(!h&&[`ArrowUp`,`ArrowDown`,` `,`Enter`].includes(d.key)){if(_.length>0){d.preventDefault();let e=y[0]?.id,t=e?_.findIndex(t=>t.id===e):-1,n=e=>{requestAnimationFrame(()=>{let t=document.querySelector(`[data-search-lecture-id="${e}"]`);t&&(W.setState({isKeyboardNavigating:!0}),t.scrollIntoView({block:`nearest`}))})};if(d.key===`ArrowUp`){let e=_[Math.max(0,t-1)];e&&(b([e]),n(e.id))}else if(d.key===`ArrowDown`){t===_.length-1&&window.dispatchEvent(new CustomEvent(`request-next-page`));let e=_[Math.min(_.length-1,t+1)];e&&(b([e]),n(e.id))}else if(d.key===` `||d.key===`Enter`){if(o&&x===null){d.preventDefault();return}if(t>=0&&t<_.length){let e=_[t];e&&k(e)}}}return}}},(0,U.useEffect)(()=>{let e=e=>F.current(e),t=e=>{(Math.abs(e.movementX)>0||Math.abs(e.movementY)>0)&&W.setState({isKeyboardNavigating:!1})};return document.addEventListener(`keydown`,e),document.addEventListener(`mousemove`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`mousemove`,t)}},[]),{onLectureSelect:D}}function De(e){return e.map(e=>e.name).join(`, `)}function Oe(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function ke(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var Ae=d(f)`
    width: 100%;
`,je=d(f)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,Me=d(f)`
    flex: 1 0 0;
`,Ne=d(A)`
    white-space: nowrap;
`,Pe=({selectedLecture:e})=>{let{t}=O();return e?l(u,{children:[l(Ae,{direction:`column`,gap:8,children:[l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.type`)}),c(A,{type:`Normal`,color:`Text.default`,children:e?.type})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.department`)}),c(A,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.professor`)}),c(A,{type:`Normal`,color:`Text.default`,children:De(e?.professors||[])})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.room`)}),c(A,{type:`Normal`,color:`Text.default`,children:ke(e?.classes||[])})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.limit`)}),c(A,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),l(f,{direction:`row`,gap:6,children:[c(Ne,{type:`NormalBold`,color:`Text.default`,children:t(`common.exam`)}),c(A,{type:`Normal`,color:`Text.default`,children:Oe(e?.examTimes||[])})]})]}),c(je,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e.isEnglish?`Eng`:`한`,t(`common.language`)],[e.credit,t(`common.credit`)],[e.limitPeople===0?`0.00:1`:(e.numPeople/e.limitPeople).toFixed(2)+`:1`,t(`timetable.competitionRate`)]].map(([e,t],n)=>l(Me,{direction:`column`,gap:0,align:`center`,children:[c(A,{type:`Bigger`,color:`Text.default`,children:e}),c(A,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]}):null},Fe=d(f)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,Ie=d(f)`
    flex: 1 0 0;
`,Le=d.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,Re=({selectedCourseId:e,selectedProfessorId:t})=>{let{t:n}=O(),[r,i]=(0,U.useState)(!1),{query:a,setParams:o,data:s}=b(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:d,inView:p}=y({threshold:0});return(0,U.useEffect)(()=>{i(!1);let n=setTimeout(()=>{o({mode:`default`,courseId:e??void 0,professorId:t??void 0}),i(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,U.useEffect)(()=>{p&&a.hasNextPage&&!a.isFetchingNextPage&&a.fetchNextPage()},[p,a]),!s||!r?c(R,{}):l(u,{children:[c(f,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:c(Fe,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[[h(s?.averageGrade,s?.reviews.length),n(`common.grade`)],[h(s?.averageLoad,s?.reviews.length),n(`common.load`)],[h(s?.averageSpeech,s?.reviews.length),n(`common.speech`)]].map(([e,t],n)=>l(Ie,{direction:`column`,gap:0,align:`center`,children:[c(A,{type:`Bigger`,color:`Text.default`,children:e}),c(A,{type:`Smaller`,color:`Text.default`,children:t})]},n))})}),c(Le,{}),s?.reviews.map(e=>c(ie,{review:e,linkToDictionary:!0},e.id)),a.hasNextPage&&c(R,{ref:d})]})},ze=d(f)`
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
`,qe=({addLectures:e,removeLectures:t,onMobileModalClose:n,currentTimetableId:r,timetableLectures:i})=>{let a=C(),o=s(),{t:d}=O(),{user:p,status:m}=ne(),h=te(`tablet`),g=W(e=>e.selectedLectures),_=W(e=>e.hoveredLectures),y=W(e=>e.year),b=W(e=>e.semesterEnum),x=g.length===1?g[0]:_.length===1?_[0]:null,[w,T]=(0,U.useState)([]),{query:D,setParams:ee}=v(`GET`,`/users/${p?.id}/wishlist`,{enabled:m===`success`&&y!==-1});(0,U.useEffect)(()=>{y!==-1&&ee({year:y,semester:b})},[y,b,r]),(0,U.useEffect)(()=>{D.data&&T(D.data.courses.flatMap(e=>e.lectures).map(e=>e.id))},[D.data]);let{requestFunction:M}=v(`PATCH`,`/users/${p?.id}/wishlist`,{onSuccess:()=>{a.invalidateQueries({queryKey:[`/users/${p?.id}/wishlist`]})}}),N=(0,U.useRef)(null),P=e=>{let t={syy:String(y),smtDivCd:String(b),subjtCd:e.code,syllabusOpenYn:`0`};return`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${btoa(JSON.stringify(t))}`},I=t=>{if(i){if(i.some(e=>Te(e.classes,t.classes))){alert(d(`timetable.addLectureConflict`));return}e([t]),F(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:r,source:`LectureDetail`})}},L=(e,t)=>{if(m===`idle`)return;let n=e?`delete`:`add`;F(`Update Wishlist`,{action:n,lectureId:t,source:`LectureDetail`}),M({lectureId:t,mode:n})};return c(ze,{direction:`column`,gap:12,align:`center`,justify:!x&&!g.length?`center`:`start`,children:g.length>1?l(Ge,{direction:`column`,gap:16,align:`stretch`,justify:`flex-start`,children:[l(A,{type:`Bigger`,color:`Text.default`,children:[g.length,d(`timetable.numSelected`)]}),g.map(e=>{let t=ce(o.colors.Tile.TimeTable.default),n=t[e.courseId%t.length];return l(Ke,{direction:`row`,gap:12,align:`center`,children:[c(E,{size:14,color:n,children:c(H,{})}),l(f,{direction:`column`,gap:4,flex:`1 1 auto`,children:[l(A,{type:`BigBold`,color:`Text.default`,children:[e.name,` `,e.subtitle]}),l(A,{type:`Small`,color:`Text.dark`,children:[e.professors[0]?.name,` `,e.professors.length>1?`${d(`common.professors.over`)} ${e.professors.length-1}${d(`common.professors.people`)} `:` `,`| `,e.department.name,` | `,e.credit,d(`common.credit`)]})]})]},e.id)})]}):x?l(u,{children:[l(Ve,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[l(f,{direction:`row`,align:`center`,gap:8,justify:h?`space-between`:`center`,style:{width:`100%`},children:[h&&c(`div`,{style:{width:20}}),c(A,{type:`Bigger`,color:`Text.default`,children:x.name+x.subtitle}),h&&c(E,{size:20,onClick:n,color:o.colors.Text.default,children:c(k,{})})]}),c(A,{type:`Big`,color:`Text.default`,children:x.code+` `+(x.classNo===``?``:`(${x.classNo})`)})]}),l(f,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[c(Ue,{to:`/dictionary?courseId=${x.courseId}`,children:c(A,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:d(`header.dictionary`)})}),c(We,{href:P(x),target:`_blank`,children:c(A,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:d(`header.syllabus`)})})]}),c(Be,{direction:`column`,gap:10,align:`center`,children:c(Pe,{selectedLecture:x})}),c(Be,{ref:N,direction:`column`,gap:10,children:c(Re,{selectedCourseId:x.courseId,selectedProfessorId:x.professors[0]?.id??-1})}),h&&l(He,{direction:`row`,gap:12,justify:`flex-end`,children:[m===`success`&&l(j,{onClick:()=>{L(w.includes(x.id),x.id),n&&n()},children:[c(E,{size:15,children:c(z,{})}),c(A,{type:`NormalBold`,children:w.includes(x.id)?d(`timetable.removeFromWishlist`):d(`timetable.addToWishlist`)})]}),(r||m!==`success`)&&(i?.some(e=>e.id===x.id)?l(j,{type:`selected`,onClick:()=>{t&&t(x.id),n&&n()},children:[c(E,{size:15,children:c(k,{})}),c(A,{type:`NormalBold`,children:d(`timetable.removeFromTimetable`)})]}):l(j,{type:`selected`,onClick:()=>{I(x),n&&n()},children:[c(E,{size:15,children:c(V,{})}),c(A,{type:`NormalBold`,children:d(`timetable.addToTimetable`)})]}))]})]}):c(S,{})})},Je=d.div`
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
`,Ye=d(f)`
    width: 100%;
    padding: 8px 12px;
    word-break: keep-all;
`,Xe=d.div`
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

    ${P.tablet} {
        &:hover,
        &[data-is-hovered="true"],
        &[data-is-selected="true"] {
            background-color: ${({theme:e})=>e.colors.Background.Block.dark};
        }
    }
`,Ze=d.div`
    width: 95%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.block};
    align-self: center;
`,Qe=(0,U.memo)(({course:e,wishlist:t,currentTimetableId:n,timetableLectures:r,handleSetHoveredLecture:i,handleClearHoveredLecture:a,handleSetSelectedLecture:o,selectedLectures:u,hoveredLecture:d,handleLikeClick:p,handleAddToTimetable:m,t:h})=>{let{status:g}=ne(),_=s(),v=te(`tablet`),y=U.useRef(null);return(0,U.useEffect)(()=>{y.current?.setAttribute(`data-is-selected`,u!=null&&u.length>0&&e.lectures.some(e=>u.some(t=>t.id===e.id))?`true`:`false`)},[u,e]),l(Je,{ref:y,"data-is-selected":``,children:[l(Ye,{direction:`row`,gap:6,align:`center`,justify:`space-between`,children:[l(f,{direction:`row`,gap:6,align:`center`,style:{opacity:e.completed?.3:1},children:[c(A,{type:`NormalBold`,color:`Text.default`,children:e.name}),c(A,{type:`Normal`,color:`Text.default`,children:e.code})]}),e.completed?c(A,{type:`Normal`,color:`Text.default`,children:h(`common.completedCourse`)}):c(A,{type:`Normal`,color:`Highlight.default`,style:{textAlign:`end`},children:e.type})]}),c(Ze,{}),e.lectures.map((s,y)=>{let b=t.includes(s.id),x=d?.some(e=>e.id===s.id),S=u?.some(e=>e.id===s.id);return l(U.Fragment,{children:[l(Xe,{"data-lecture-id":s.id,"data-search-lecture-id":s.id,"data-is-hovered":x,"data-is-selected":S,onPointerEnter:()=>i(s),onPointerLeave:a,onClick:e=>o(s,e),lectureId:s.id,children:[l(f,{direction:`column`,gap:0,children:[v&&x&&l(A,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[s.department.name,` / `,s.type]}),l(f,{direction:`row`,gap:6,style:{opacity:e.completed?.3:1},children:[l(A,{type:`NormalBold`,color:`Text.default`,children:[s.classNo,` `,s.subtitle]}),c(A,{type:`Normal`,color:`Text.default`,children:De(s.professors)})]}),v&&x&&l(A,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[s.classes[0]?.buildingName,` `,s.classes[0]?.roomName,` /`,` `,s.limitPeople]})]}),l(f,{direction:`row`,gap:6,onClick:e=>e.stopPropagation(),children:[!v&&g===`success`&&(b?c(E,{size:15,color:_.colors.Highlight.default,onClick:()=>p(b,s.id),children:c(z,{})}):c(E,{size:15,color:_.colors.Text.default,onClick:()=>p(b,s.id),children:c(he,{})})),(!v||x)&&c(`span`,{title:n==null&&g===`success`?h(`timetable.myTimeTableLectureAddWarning`):``,style:{opacity:n==null&&g===`success`||r.some(e=>Te(e.classes,s.classes))?.3:1},children:c(E,{size:v?30:15,color:_.colors.Text.default,onClick:()=>m(s),children:c(V,{})})})]})]}),y!==e.lectures.length-1&&c(Ze,{})]},s.id)})]})},(e,t)=>!(e.course!==t.course||e.wishlist!==t.wishlist||e.currentTimetableId!==t.currentTimetableId||e.timetableLectures!==t.timetableLectures||e.selectedLectures!==t.selectedLectures||e.hoveredLecture!==t.hoveredLecture)),$e=d(f)`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,et=d(f)`
    height: 36px;
`,tt=d.div`
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
`;function nt({year:e,semester:t,timeFilter:n,setTimeFilter:r,data:i,setSearchResult:a,isWishlist:o,setIsWishlist:d,setWishlist:p,sortOption:m,setSortOption:h,handleSearch:g,t:_}){let y=s(),{user:b,status:S}=ne(),{query:C,setParams:w}=v(`GET`,`/users/${b?.id}/wishlist`,{enabled:S===`success`&&e!=-1});return(0,U.useEffect)(()=>{C.data!==void 0&&a(o?C.data:i??{courses:[]})},[o,i]),(0,U.useEffect)(()=>{C.data!==void 0&&(p(C.data.courses.flatMap(e=>e.lectures).map(e=>e.id)),o&&a(C.data))},[C.data]),(0,U.useEffect)(()=>{a({courses:[]}),e!==-1&&w({year:e,semester:t})},[e,t]),(0,U.useEffect)(()=>{i!==void 0&&(a(i),d(!1))},[i]),l(u,{children:[c($e,{direction:`row`,justify:`stretch`,gap:0,children:c(ae,{options:[`type`,`department`,`level`,`term`,`time`],timeFilter:n,setTimeFilter:r,onSearch:g})}),l(f,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[l(tt,{isSelected:o,onClick:()=>{d(e=>!e)},style:{paddingBlock:10},children:[c(E,{size:15,color:y.colors.Highlight.default,children:c(o?z:he,{})}),c(A,{type:`Normal`,color:`Highlight.default`,children:_(`common.wishlist`)})]}),c(et,{direction:`row`,gap:0,children:c(x,{options:[_(`dictionary.sortOptions.code`),_(`dictionary.sortOptions.popularity`),_(`dictionary.sortOptions.studentCount`)],setSelectedOption:h,selectedOption:m})})]})]})}var rt=(0,U.memo)(nt,(e,t)=>e.year===t.year&&e.semester===t.semester&&e.timeFilter===t.timeFilter&&e.sortOption===t.sortOption&&e.isWishlist===t.isWishlist&&e.data===t.data),it=d(f)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,at=d(A)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,ot=d(f)`
    height: fit-content;
    overflow-y: auto;
    position: relative;
    flex-grow: 1;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    /* 상단/하단 페이드 오버레이: 자식 배경에 가려지지 않도록 컨테이너 위에 표시 */
    ${P.tablet} {
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
`,st=d(f)`
    width: 100%;
`,ct=d(f)`
    width: 100%;
    height: 100%;
    flex-grow: 1;

    ${P.tablet} {
        padding-right: 4px;
    }
`,lt=d.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({theme:e})=>e.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
`,ut=e=>{if(!e)return e;let t=new Map;return e.courses.forEach(e=>{let n=t.get(e.id);if(!n){t.set(e.id,{...e,lectures:[...e.lectures]});return}let r=new Set(n.lectures.map(e=>e.id)),i=[...n.lectures];e.lectures.forEach(e=>{r.has(e.id)||(r.add(e.id),i.push(e))}),t.set(e.id,{...n,lectures:i})}),{...e,courses:Array.from(t.values())}},dt=50,ft=U.memo(({timetableLectures:e,addLectures:t,onLectureSelect:n})=>{let{t:r}=O(),{user:i,status:a}=ne(),o=C(),s=W(e=>e.currentTimetableId),u=W(e=>e.year),d=W(e=>e.semesterEnum),f=W(e=>e.hoveredLectures),p=W(e=>e.setHoveredLectures),m=W(e=>e.selectedLectures),h=W(e=>e.setSelectedLectures),g=W(e=>e.timeFilter),_=W(e=>e.setTimeFilter),x=W(e=>e.setSearchLectures),S=(0,U.useCallback)(()=>h([]),[h]),{ref:w,inView:T}=y({threshold:0}),E=te(`tablet`),D=(0,U.useRef)(null),k=(0,U.useRef)(null),A=(0,U.useRef)(null),{requestFunction:ee}=v(`PATCH`,`/users/${i?.id}/wishlist`,{onSuccess:()=>{o.invalidateQueries({queryKey:[`/users/${i?.id}/wishlist`]})}}),[j,M]=(0,U.useState)(!1),[N,P]=(0,U.useState)({courses:[]}),[I,L]=(0,U.useState)(!1),[re,z]=(0,U.useState)([]),[B,ie]=(0,U.useState)(0),{query:V,setParams:ae,data:oe}=b(`GET`,`/lectures`,{infinites:[`courses`],limit:dt,gcTime:0,select:ut,enabled:j,iterate:e=>{let t=0;return e.courses.forEach(e=>{t+=e.lectures.length}),t<dt?0:t}}),H=(0,U.useCallback)(e=>{if(se(e)){alert(r(`common.search.empty`));return}L(!1),ae({year:u,semester:d,...e,order:[`code`,`popular`,`studentCount`][B]??`code`,offset:0,limit:dt,day:e.time?.day??void 0,begin:e.time?.begin??void 0,end:e.time?.end??void 0}),M(!0),F(`Search Lectures`,{year:u,semester:d,keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``})},[u,d,B]);(0,U.useEffect)(()=>{L(!1),ae(e=>({...e,order:[`code`,`popular`,`studentCount`][B]??`code`,offset:0}))},[B]),(0,U.useEffect)(()=>{T&&V.hasNextPage&&!V.isFetchingNextPage&&V.fetchNextPage()},[T,V]),(0,U.useEffect)(()=>{let e=()=>{V.hasNextPage&&!V.isFetchingNextPage&&V.fetchNextPage()};return window.addEventListener(`request-next-page`,e),()=>window.removeEventListener(`request-next-page`,e)},[V]),(0,U.useEffect)(()=>{let e=e=>{D.current&&!D.current.contains(e.target)&&k.current&&k.current.contains(e.target)&&S?.()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let ce=U.useMemo(()=>N.courses.flatMap(e=>e.lectures),[N.courses]);(0,U.useEffect)(()=>{x?.(ce)},[ce,x]);let le=(0,U.useCallback)(()=>{if(!E)return;if(!A.current){p([]);return}let e=A.current.getBoundingClientRect(),t=e.top+e.height/2,n=document.elementFromPoint(e.left+50,t);if(!n)return;let r=n.closest(`[data-lecture-id]`);if(r){let e=parseInt(r.getAttribute(`data-lecture-id`)||``,10),t=ce.find(t=>t.id===e);p(t?[t]:[])}},[E,ce,p]);(0,U.useEffect)(()=>{if(!E||!A.current)return;let e=A.current;return e.addEventListener(`scroll`,le),()=>{e.removeEventListener(`scroll`,le)}},[E,le]),(0,U.useEffect)(()=>{if(!E||V.isFetching||m&&m.length>0)return;let e,t=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>{le()})});return()=>{cancelAnimationFrame(t),cancelAnimationFrame(e)}},[V.isFetching,E,le,m]);let ue=(e,t)=>{if(a===`idle`)return;let n=e?`delete`:`add`;F(`Update Wishlist`,{action:n,lectureId:t}),z(e?e=>e.filter(e=>e!==t):e=>[...e,t]),ee({lectureId:t,mode:n})},de=n=>{if(a===`success`){if(!s){console.warn(`No timetable selected`);return}if(e.some(e=>Te(e.classes,n.classes))){alert(r(`timetable.addLectureConflict`));return}t([n]),F(`Add Lecture to Timetable`,{lectureId:n.id,lectureCode:n.code,courseName:n.name,timetableId:s})}else{if(e.some(e=>Te(e.classes,n.classes))){alert(r(`timetable.addLectureConflict`));return}t([n]),F(`Add Lecture to Timetable`,{lectureId:n.id,lectureCode:n.code,courseName:n.name,timetableId:null,isGuest:!0})}},fe=(0,U.useCallback)(e=>{E||W.getState().isKeyboardNavigating||p(t=>t.length===1&&t[0]?.id===e.id?t:[e])},[E,p]),pe=(0,U.useCallback)(()=>{E||W.getState().isKeyboardNavigating||p([])},[E,p]),me=(0,U.useCallback)((e,t)=>{n?.(e,t)},[n]);return(0,U.useEffect)(()=>{A.current?.setAttribute(`data-hovered-lectures`,f.map(e=>e.id).join(` `))},[f,N]),(0,U.useEffect)(()=>{A.current?.setAttribute(`data-selected-lectures`,m?m.map(e=>e.id).join(` `):``)},[m,N]),l(it,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,ref:k,children:[c(rt,{year:u,semester:d,timeFilter:g,setTimeFilter:_,sortOption:B,setSortOption:ie,data:oe,isWishlist:I,setIsWishlist:L,setWishlist:z,setSearchResult:P,t:r,handleSearch:H}),N.courses.length===0?c(at,{type:`Bigger`,color:`Text.placeholder`,children:r(`dictionary.noResults`)}):c(ot,{direction:`column`,gap:0,ref:A,"data-hovered-lectures":``,"data-selected-lectures":``,children:l(st,{direction:`row`,gap:0,children:[l(ct,{direction:`column`,gap:12,ref:D,children:[N.courses.map(t=>c(Qe,{course:t,hoveredLecture:f,selectedLectures:m,wishlist:re,currentTimetableId:s,timetableLectures:e,handleSetHoveredLecture:fe,handleClearHoveredLecture:pe,handleSetSelectedLecture:me,handleLikeClick:ue,handleAddToTimetable:de,t:r},t.id)),!I&&V.hasNextPage&&c(R,{ref:w})]}),E&&c(lt,{})]})})]})},(e,t)=>e.timetableLectures===t.timetableLectures&&e.addLectures===t.addLectures&&e.onLectureSelect===t.onLectureSelect);function pt(){var e=[...arguments];return(0,U.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var mt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function ht(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function gt(e){return`nodeType`in e}function J(e){return e?ht(e)?e:gt(e)?e.ownerDocument?.defaultView??window:window:window}function _t(e){let{Document:t}=J(e);return e instanceof t}function vt(e){return ht(e)?!1:e instanceof J(e).HTMLElement}function yt(e){return e instanceof J(e).SVGElement}function bt(e){return e?ht(e)?e.document:gt(e)?_t(e)?e:vt(e)||yt(e)?e.ownerDocument:document:document:document}var xt=mt?U.useLayoutEffect:U.useEffect;function St(e){let t=(0,U.useRef)(e);return xt(()=>{t.current=e}),(0,U.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function Ct(){let e=(0,U.useRef)(null);return[(0,U.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,U.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function wt(e,t){t===void 0&&(t=[e]);let n=(0,U.useRef)(e);return xt(()=>{n.current!==e&&(n.current=e)},t),n}function Tt(e,t){let n=(0,U.useRef)();return(0,U.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function Et(e){let t=St(e),n=(0,U.useRef)(null);return[n,(0,U.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function Dt(e){let t=(0,U.useRef)();return(0,U.useEffect)(()=>{t.current=e},[e]),t.current}var Ot={};function kt(e,t){return(0,U.useMemo)(()=>{if(t)return t;let n=Ot[e]==null?0:Ot[e]+1;return Ot[e]=n,e+`-`+n},[e,t])}function At(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var jt=At(1),Mt=At(-1);function Nt(e){return`clientX`in e&&`clientY`in e}function Pt(e){if(!e)return!1;let{KeyboardEvent:t}=J(e.target);return t&&e instanceof t}function Ft(e){if(!e)return!1;let{TouchEvent:t}=J(e.target);return t&&e instanceof t}function It(e){if(Ft(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return Nt(e)?{x:e.clientX,y:e.clientY}:null}var Lt=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[Lt.Translate.toString(e),Lt.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),Rt=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function zt(e){return e.matches(Rt)?e:e.querySelector(Rt)}var Bt={display:`none`};function Vt(e){let{id:t,value:n}=e;return U.createElement(`div`,{id:t,style:Bt},n)}function Ht(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return U.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function Ut(){let[e,t]=(0,U.useState)(``);return{announce:(0,U.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var Wt=(0,U.createContext)(null);function Gt(e){let t=(0,U.useContext)(Wt);(0,U.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function Kt(){let[e]=(0,U.useState)(()=>new Set),t=(0,U.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,U.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var qt={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Jt={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function Yt(e){let{announcements:t=Jt,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=qt}=e,{announce:a,announcement:o}=Ut(),s=kt(`DndLiveRegion`),[c,l]=(0,U.useState)(!1);if((0,U.useEffect)(()=>{l(!0)},[]),Gt((0,U.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=U.createElement(U.Fragment,null,U.createElement(Vt,{id:r,value:i.draggable}),U.createElement(Ht,{id:s,announcement:o}));return n?(0,de.createPortal)(u,n):u}var Y;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(Y||={});function Xt(){}function Zt(e,t){return(0,U.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Qt(){var e=[...arguments];return(0,U.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var $t=Object.freeze({x:0,y:0});function en(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function tn(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function nn(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function rn(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function an(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var on=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=an(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=en(an(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(tn)};function sn(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var cn=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=sn(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(nn)};function ln(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function un(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:$t}function dn(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var fn=dn(1);function pn(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function mn(e,t,n){let r=pn(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var hn={ignoreTransform:!1};function gn(e,t){t===void 0&&(t=hn);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=J(e).getComputedStyle(e);t&&(n=mn(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function _n(e){return gn(e,{ignoreTransform:!0})}function vn(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function yn(e,t){return t===void 0&&(t=J(e).getComputedStyle(e)),t.position===`fixed`}function bn(e,t){t===void 0&&(t=J(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function xn(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(_t(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!vt(i)||yt(i)||n.includes(i))return n;let a=J(e).getComputedStyle(i);return i!==e&&bn(i,a)&&n.push(i),yn(i,a)?n:r(i.parentNode)}return e?r(e):n}function Sn(e){let[t]=xn(e,1);return t??null}function Cn(e){return!mt||!e?null:ht(e)?e:gt(e)?_t(e)||e===bt(e).scrollingElement?window:vt(e)?e:null:null}function wn(e){return ht(e)?e.scrollX:e.scrollLeft}function Tn(e){return ht(e)?e.scrollY:e.scrollTop}function En(e){return{x:wn(e),y:Tn(e)}}var X;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(X||={});function Dn(e){return!mt||!e?!1:e===document.scrollingElement}function On(e){let t={x:0,y:0},n=Dn(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var kn={x:.2,y:.2};function An(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=kn);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=On(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=X.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=X.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=X.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=X.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function jn(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function Mn(e){return e.reduce((e,t)=>jt(e,En(t)),$t)}function Nn(e){return e.reduce((e,t)=>e+wn(t),0)}function Pn(e){return e.reduce((e,t)=>e+Tn(t),0)}function Fn(e,t){if(t===void 0&&(t=gn),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);Sn(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var In=[[`x`,[`left`,`right`],Nn],[`y`,[`top`,`bottom`],Pn]],Ln=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=xn(t),r=Mn(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of In)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},Rn=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function zn(e){let{EventTarget:t}=J(e);return e instanceof t?e:bt(e)}function Bn(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var Vn;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(Vn||={});function Hn(e){e.preventDefault()}function Un(e){e.stopPropagation()}var Z;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(Z||={});var Wn={start:[Z.Space,Z.Enter],cancel:[Z.Esc],end:[Z.Space,Z.Enter,Z.Tab]},Gn=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Z.Right:return{...n,x:n.x+25};case Z.Left:return{...n,x:n.x-25};case Z.Down:return{...n,y:n.y+25};case Z.Up:return{...n,y:n.y-25}}},Kn=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new Rn(bt(t)),this.windowListeners=new Rn(J(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Vn.Resize,this.handleCancel),this.windowListeners.add(Vn.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Vn.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&Fn(n),t($t)}handleKeyDown(e){if(Pt(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=Wn,coordinateGetter:a=Gn,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:$t;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=Mt(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=On(n),p=jn(n),m={x:Math.min(i===Z.Right?p.right-p.width/2:p.right,Math.max(i===Z.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===Z.Down?p.bottom-p.height/2:p.bottom,Math.max(i===Z.Down?p.top:p.top+p.height/2,u.y))},h=i===Z.Right&&!s||i===Z.Left&&!c,g=i===Z.Down&&!l||i===Z.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===Z.Right&&e<=d.x||i===Z.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===Z.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===Z.Down&&e<=d.y||i===Z.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===Z.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,jt(Mt(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};Kn.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=Wn,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function qn(e){return!!(e&&`distance`in e)}function Jn(e){return!!(e&&`delay`in e)}var Yn=class{constructor(e,t,n){n===void 0&&(n=zn(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=bt(i),this.documentListeners=new Rn(this.document),this.listeners=new Rn(n),this.windowListeners=new Rn(J(i)),this.initialCoordinates=It(r)??$t,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Vn.Resize,this.handleCancel),this.windowListeners.add(Vn.DragStart,Hn),this.windowListeners.add(Vn.VisibilityChange,this.handleCancel),this.windowListeners.add(Vn.ContextMenu,Hn),this.documentListeners.add(Vn.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Jn(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(qn(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Vn.Click,Un,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Vn.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=It(e)??$t,s=Mt(n,o);if(!t&&a){if(qn(a)){if(a.tolerance!=null&&Bn(s,a.tolerance))return this.handleCancel();if(Bn(s,a.distance))return this.handleStart()}if(Jn(a)&&Bn(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===Z.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},Xn={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},Zn=class extends Yn{constructor(e){let{event:t}=e,n=bt(t.target);super(e,Xn,n)}};Zn.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var Qn={move:{name:`mousemove`},end:{name:`mouseup`}},$n;(function(e){e[e.RightClick=2]=`RightClick`})($n||={});var er=class extends Yn{constructor(e){super(e,Qn,bt(e.event.target))}};er.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===$n.RightClick?!1:(r?.({event:n}),!0)}}];var tr={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},nr=class extends Yn{constructor(e){super(e,tr)}static setup(){return window.addEventListener(tr.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(tr.move.name,e)};function e(){}}};nr.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var rr;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(rr||={});var ir;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(ir||={});function ar(e){let{acceleration:t,activator:n=rr.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=ir.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=sr({delta:d,disabled:!a}),[m,h]=Ct(),g=(0,U.useRef)({x:0,y:0}),_=(0,U.useRef)({x:0,y:0}),v=(0,U.useMemo)(()=>{switch(n){case rr.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case rr.DraggableRect:return i}},[n,i,c]),y=(0,U.useRef)(null),b=(0,U.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),x=(0,U.useMemo)(()=>s===ir.TreeOrder?[...l].reverse():l,[s,l]);(0,U.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of x){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=An(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),y.current=e,m(b,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,b,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,x,u,JSON.stringify(f)])}var or={x:{[X.Backward]:!1,[X.Forward]:!1},y:{[X.Backward]:!1,[X.Forward]:!1}};function sr(e){let{delta:t,disabled:n}=e,r=Dt(t);return Tt(e=>{if(n||!r||!e)return or;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[X.Backward]:e.x[X.Backward]||i.x===-1,[X.Forward]:e.x[X.Forward]||i.x===1},y:{[X.Backward]:e.y[X.Backward]||i.y===-1,[X.Forward]:e.y[X.Forward]||i.y===1}}},[n,t,r])}function cr(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return Tt(e=>t==null?null:r??e??null,[r,t])}function lr(e,t){return(0,U.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var ur;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(ur||={});var dr;(function(e){e.Optimized=`optimized`})(dr||={});var fr=new Map;function pr(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,U.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,U.useRef)(e),d=g(),f=wt(d),p=(0,U.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,U.useRef)(null),h=Tt(t=>{if(d&&!n)return fr;if(!t||t===fr||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new Ln(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,U.useEffect)(()=>{u.current=e},[e]),(0,U.useEffect)(()=>{d||p()},[n,d]),(0,U.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,U.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case ur.Always:return!1;case ur.BeforeDragging:return n;default:return!n}}}function mr(e,t){return Tt(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function hr(e,t){return mr(e,t)}function gr(e){let{callback:t,disabled:n}=e,r=St(t),i=(0,U.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,U.useEffect)(()=>()=>i?.disconnect(),[i]),i}function _r(e){let{callback:t,disabled:n}=e,r=St(t),i=(0,U.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,U.useEffect)(()=>()=>i?.disconnect(),[i]),i}function vr(e){return new Ln(gn(e),e)}function yr(e,t,n){t===void 0&&(t=vr);let[r,i]=(0,U.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=gr({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=_r({callback:a});return xt(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function br(e){return un(e,mr(e))}var xr=[];function Sr(e){let t=(0,U.useRef)(e),n=Tt(n=>e?n&&n!==xr&&e&&t.current&&e.parentNode===t.current.parentNode?n:xn(e):xr,[e]);return(0,U.useEffect)(()=>{t.current=e},[e]),n}function Cr(e){let[t,n]=(0,U.useState)(null),r=(0,U.useRef)(e),i=(0,U.useCallback)(e=>{let t=Cn(e.target);t&&n(e=>e?(e.set(t,En(t)),new Map(e)):null)},[]);return(0,U.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=Cn(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,En(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{Cn(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,U.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>jt(e,t),$t):Mn(e):$t,[e,t])}function wr(e,t){t===void 0&&(t=[]);let n=(0,U.useRef)(null);return(0,U.useEffect)(()=>{n.current=null},t),(0,U.useEffect)(()=>{let t=e!==$t;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?Mt(e,n.current):$t}function Tr(e){(0,U.useEffect)(()=>{if(!mt)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function Er(e,t){return(0,U.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function Dr(e){return(0,U.useMemo)(()=>e?vn(e):null,[e])}var Or=[];function kr(e,t){t===void 0&&(t=gn);let[n]=e,r=Dr(n?J(n):null),[i,a]=(0,U.useState)(Or);function o(){a(()=>e.length?e.map(e=>Dn(e)?r:new Ln(t(e),e)):Or)}let s=_r({callback:o});return xt(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function Ar(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return vt(t)?t:e}function jr(e){let{measure:t}=e,[n,r]=(0,U.useState)(null),i=_r({callback:(0,U.useCallback)(e=>{for(let{target:n}of e)if(vt(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=Et((0,U.useCallback)(e=>{let n=Ar(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,U.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var Mr=[{sensor:Zn,options:{}},{sensor:Kn,options:{}}],Nr={current:{}},Pr={draggable:{measure:_n},droppable:{measure:_n,strategy:ur.WhileDragging,frequency:dr.Optimized},dragOverlay:{measure:gn}},Fr=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},Ir={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Fr,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Xt},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Pr,measureDroppableContainers:Xt,windowRect:null,measuringScheduled:!1},Lr={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:Xt,draggableNodes:new Map,over:null,measureDroppableContainers:Xt},Rr=(0,U.createContext)(Lr),zr=(0,U.createContext)(Ir);function Br(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Fr}}}function Vr(e,t){switch(t.type){case Y.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Y.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Y.DragEnd:case Y.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Y.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new Fr(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Y.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new Fr(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case Y.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new Fr(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function Hr(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,U.useContext)(Rr),a=Dt(r),o=Dt(n?.id);return(0,U.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!Pt(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=zt(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function Ur(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function Wr(e){return(0,U.useMemo)(()=>({draggable:{...Pr.draggable,...e?.draggable},droppable:{...Pr.droppable,...e?.droppable},dragOverlay:{...Pr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Gr(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,U.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;xt(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=un(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=Sn(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var Kr=(0,U.createContext)({...$t,scaleX:1,scaleY:1}),qr;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(qr||={});var Jr=(0,U.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=Mr,collisionDetection:o=cn,measuring:s,modifiers:c,...l}=e,[u,d]=(0,U.useReducer)(Vr,void 0,Br),[f,p]=Kt(),[m,h]=(0,U.useState)(qr.Uninitialized),g=m===qr.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:b}}=u,x=_==null?null:v.get(_),S=(0,U.useRef)({initial:null,translated:null}),C=(0,U.useMemo)(()=>_==null?null:{id:_,data:x?.data??Nr,rect:S},[_,x]),w=(0,U.useRef)(null),[T,E]=(0,U.useState)(null),[D,O]=(0,U.useState)(null),k=wt(l,Object.values(l)),A=kt(`DndDescribedBy`,t),ee=(0,U.useMemo)(()=>b.getEnabled(),[b]),j=Wr(s),{droppableRects:M,measureDroppableContainers:N,measuringScheduled:P}=pr(ee,{dragging:g,dependencies:[y.x,y.y],config:j.droppable}),F=cr(v,_),te=(0,U.useMemo)(()=>D?It(D):null,[D]),I=Ce(),ne=hr(F,j.draggable.measure);Gr({activeNode:_==null?null:v.get(_),config:I.layoutShiftCompensation,initialRect:ne,measure:j.draggable.measure});let L=yr(F,j.draggable.measure,ne),re=yr(F?F.parentElement:null),R=(0,U.useRef)({activatorEvent:null,active:null,activeNode:F,collisionRect:null,collisions:null,droppableRects:M,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),z=b.getNodeFor(R.current.over?.id),B=jr({measure:j.dragOverlay.measure}),ie=B.nodeRef.current??F,V=g?B.rect??L:null,ae=!!(B.nodeRef.current&&B.rect),oe=br(ae?null:L),se=Dr(ie?J(ie):null),H=Sr(g?z??F:null),ce=kr(H),le=Ur(c,{transform:{x:y.x-oe.x,y:y.y-oe.y,scaleX:1,scaleY:1},activatorEvent:D,active:C,activeNodeRect:L,containerNodeRect:re,draggingNodeRect:V,over:R.current.over,overlayNodeRect:B.rect,scrollableAncestors:H,scrollableAncestorRects:ce,windowRect:se}),ue=te?jt(te,y):null,fe=Cr(H),pe=wr(fe),me=wr(fe,[L]),he=jt(le,pe),ge=V?fn(V,le):null,_e=C&&ge?o({active:C,collisionRect:ge,droppableRects:M,droppableContainers:ee,pointerCoordinates:ue}):null,ve=rn(_e,`id`),[W,G]=(0,U.useState)(null),K=ln(ae?le:jt(le,me),W?.rect??null,L),q=(0,U.useRef)(null),ye=(0,U.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(w.current==null)return;let i=v.get(w.current);if(!i)return;let a=e.nativeEvent;q.current=new n({active:w.current,activeNode:i,event:a,options:r,context:R,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=k.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=k.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=w.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=k.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:S}};(0,de.unstable_batchedUpdates)(()=>{r?.(i),h(qr.Initializing),d({type:Y.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),E(q.current),O(a)})},onMove(e){d({type:Y.DragMove,coordinates:e})},onEnd:o(Y.DragEnd),onCancel:o(Y.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=R.current,o=null;if(t&&i){let{cancelDrop:s}=k.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===Y.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=Y.DragCancel)}w.current=null,(0,de.unstable_batchedUpdates)(()=>{d({type:e}),h(qr.Uninitialized),G(null),E(null),O(null),q.current=null;let t=e===Y.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=k.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),be=lr(a,(0,U.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(w.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},w.current=r,ye(n,t))},[v,ye]));Tr(a),xt(()=>{L&&m===qr.Initializing&&h(qr.Initialized)},[L,m]),(0,U.useEffect)(()=>{let{onDragMove:e}=k.current,{active:t,activatorEvent:n,collisions:r,over:i}=R.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:he.x,y:he.y},over:i};(0,de.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[he.x,he.y]),(0,U.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=R.current;if(!e||w.current==null||!t||!i)return;let{onDragOver:a}=k.current,o=r.get(ve),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,de.unstable_batchedUpdates)(()=>{G(s),a?.(c),f({type:`onDragOver`,event:c})})},[ve]),xt(()=>{R.current={activatorEvent:D,active:C,activeNode:F,collisionRect:ge,collisions:_e,droppableRects:M,draggableNodes:v,draggingNode:ie,draggingNodeRect:V,droppableContainers:b,over:W,scrollableAncestors:H,scrollAdjustedTranslate:he},S.current={initial:V,translated:ge}},[C,F,_e,ge,v,ie,V,M,b,W,H,he]),ar({...I,delta:y,draggingRect:ge,pointerCoordinates:ue,scrollableAncestors:H,scrollableAncestorRects:ce});let xe=(0,U.useMemo)(()=>({active:C,activeNode:F,activeNodeRect:L,activatorEvent:D,collisions:_e,containerNodeRect:re,dragOverlay:B,draggableNodes:v,droppableContainers:b,droppableRects:M,over:W,measureDroppableContainers:N,scrollableAncestors:H,scrollableAncestorRects:ce,measuringConfiguration:j,measuringScheduled:P,windowRect:se}),[C,F,L,D,_e,re,B,v,b,M,W,N,H,ce,j,P,se]),Se=(0,U.useMemo)(()=>({activatorEvent:D,activators:be,active:C,activeNodeRect:L,ariaDescribedById:{draggable:A},dispatch:d,draggableNodes:v,over:W,measureDroppableContainers:N}),[D,be,C,L,d,A,v,W,N]);return U.createElement(Wt.Provider,{value:p},U.createElement(Rr.Provider,{value:Se},U.createElement(zr.Provider,{value:xe},U.createElement(Kr.Provider,{value:K},i)),U.createElement(Hr,{disabled:n?.restoreFocus===!1})),U.createElement(Yt,{...n,hiddenTextDescribedById:A}));function Ce(){let e=T?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),Yr=(0,U.createContext)(null),Xr=`button`,Zr=`Draggable`;function Qr(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=kt(Zr),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,U.useContext)(Rr),{role:p=Xr,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,U.useContext)(g?Kr:Yr),[v,y]=Et(),[b,x]=Et(),S=Er(o,t),C=wt(n);return xt(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:b,data:C}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,U.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===Xr?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:S,node:v,over:f,setNodeRef:y,setActivatorNodeRef:x,transform:_}}function $r(){return(0,U.useContext)(zr)}var ei=`Droppable`,ti={timeout:25};function ni(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=kt(ei),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,U.useContext)(Rr),u=(0,U.useRef)({disabled:n}),d=(0,U.useRef)(!1),f=(0,U.useRef)(null),p=(0,U.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...ti,...i},_=wt(h??r),v=_r({callback:(0,U.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[y,b]=Et((0,U.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),x=wt(t);return(0,U.useEffect)(()=>{!v||!y.current||(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,U.useEffect)(()=>(s({type:Y.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:x}}),()=>s({type:Y.UnregisterDroppable,key:a,id:r})),[r]),(0,U.useEffect)(()=>{n!==u.current.disabled&&(s({type:Y.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:b}}var ri=e=>{let{transform:t}=e;return{...t,y:0}};function ii(e,t,n){let r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}var ai=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:ii(r,n,t)};function oi(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function si(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function ci(e){return e!==null&&e>=0}function li(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ui(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var di={scaleX:1,scaleY:1},fi=e=>{let{rects:t,activeNodeRect:n,activeIndex:r,overIndex:i,index:a}=e,o=t[r]??n;if(!o)return null;let s=pi(t,a,r);if(a===r){let e=t[i];return e?{x:r<i?e.left+e.width-(o.left+o.width):e.left-o.left,y:0,...di}:null}return a>r&&a<=i?{x:-o.width-s,y:0,...di}:a<r&&a>=i?{x:o.width+s,y:0,...di}:{x:0,y:0,...di}};function pi(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return!r||!i&&!a?0:n<t?i?r.left-(i.left+i.width):a.left-(r.left+r.width):a?a.left-(r.left+r.width):r.left-(i.left+i.width)}var mi=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=oi(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},hi=`Sortable`,gi=U.createContext({activeIndex:-1,containerId:hi,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:mi,disabled:{draggable:!1,droppable:!1}});function _i(e){let{children:t,id:n,items:r,strategy:i=mi,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=$r(),d=kt(hi,n),f=s.rect!==null,p=(0,U.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,U.useRef)(p),v=!li(p,_.current),y=g!==-1&&h===-1||v,b=ui(a);xt(()=>{v&&m&&u(p)},[v,p,m,u]),(0,U.useEffect)(()=>{_.current=p},[p]);let x=(0,U.useMemo)(()=>({activeIndex:h,containerId:d,disabled:b,disableTransforms:y,items:p,overIndex:g,useDragOverlay:f,sortedRects:si(p,c),strategy:i}),[h,d,b.draggable,b.droppable,y,p,g,c,f,i]);return U.createElement(gi.Provider,{value:x},t)}var vi=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return oi(n,r,i).indexOf(t)},yi=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},bi={duration:200,easing:`ease`},xi=`transform`,Si=Lt.Transition.toString({property:xi,duration:0,easing:`linear`}),Ci={roleDescription:`sortable`};function wi(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,U.useState)(null),s=(0,U.useRef)(n);return xt(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=gn(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,U.useEffect)(()=>{a&&o(null)},[a]),a}function Ti(e){let{animateLayoutChanges:t=yi,attributes:n,disabled:r,data:i,getNewIndex:a=vi,id:o,strategy:s,resizeObserverConfig:c,transition:l=bi}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,U.useContext)(gi),y=Ei(r,p),b=u.indexOf(o),x=(0,U.useMemo)(()=>({sortable:{containerId:d,index:b,items:u},...i}),[d,i,b,u]),S=(0,U.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:C,node:w,isOver:T,setNodeRef:E}=ni({id:o,data:x,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...c}}),{active:D,activatorEvent:O,activeNodeRect:k,attributes:A,setNodeRef:ee,listeners:j,isDragging:M,over:N,setActivatorNodeRef:P,transform:F}=Qr({id:o,data:x,attributes:{...Ci,...n},disabled:y.draggable}),te=pt(E,ee),I=!!D,ne=I&&!m&&ci(f)&&ci(g),L=!_&&M,re=ne?(L&&ne?F:null)??(s??v)({rects:h,activeNodeRect:k,activeIndex:f,overIndex:g,index:b}):null,R=ci(f)&&ci(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):b,z=D?.id,B=(0,U.useRef)({activeId:z,items:u,newIndex:R,containerId:d}),ie=u!==B.current.items,V=t({active:D,containerId:d,isDragging:M,isSorting:I,id:o,index:b,items:u,newIndex:B.current.newIndex,previousItems:B.current.items,previousContainerId:B.current.containerId,transition:l,wasDragging:B.current.activeId!=null}),ae=wi({disabled:!V,index:b,node:w,rect:C});return(0,U.useEffect)(()=>{I&&B.current.newIndex!==R&&(B.current.newIndex=R),d!==B.current.containerId&&(B.current.containerId=d),u!==B.current.items&&(B.current.items=u)},[I,R,d,u]),(0,U.useEffect)(()=>{if(z===B.current.activeId)return;if(z!=null&&B.current.activeId==null){B.current.activeId=z;return}let e=setTimeout(()=>{B.current.activeId=z},50);return()=>clearTimeout(e)},[z]),{active:D,activeIndex:f,attributes:A,data:x,rect:C,index:b,newIndex:R,items:u,isOver:T,isSorting:I,isDragging:M,listeners:j,node:w,overIndex:g,over:N,setNodeRef:te,setActivatorNodeRef:P,setDroppableNodeRef:E,setDraggableNodeRef:ee,transform:ae??re,transition:oe()};function oe(){if(ae||ie&&B.current.newIndex===b)return Si;if(!(L&&!Pt(O)||!l)&&(I||V))return Lt.Transition.toString({...l,property:xi})}}function Ei(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}Z.Down,Z.Right,Z.Up,Z.Left;var Di=d(f)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function Oi({year:e,semester:t,setYear:n,setSemester:r,setCurrentTimetableId:i}){let a=s(),{query:o}=v(`GET`,`/semesters`);(0,U.useEffect)(()=>{let e=o.data?.semesters;if(e&&e.length>0){let t=e[e.length-1];t&&(n(t.year),r(t.semester))}},[o.data]);let{isFirstSemester:u,isLastSemester:d}=(0,U.useMemo)(()=>{if(!o.data)return{isFirstSemester:!1,isLastSemester:!1};let n=o.data.semesters,r=n[0],i=n[n.length-1];return!r||!i?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===r.year&&t===r.semester,isLastSemester:e===i.year&&t===i.semester}},[o.data,e,t]);return l(Di,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[c(D,{onClick:u?void 0:()=>{u||(t===g.SPRING?(r(g.FALL),n(e-1)):r(g.SPRING),i(null))},styles:{padding:2.5},children:c(E,{size:20,color:u?a.colors.Text.disable:a.colors.Highlight.default,onClick:u?void 0:()=>{},children:c(_e,{})})}),c(A,{color:`Highlight.default`,children:e}),c(A,{color:`Highlight.default`,children:_(t)}),c(D,{onClick:d?void 0:()=>{d||(t===g.FALL?(r(g.SPRING),n(e+1)):r(g.FALL),i(null))},styles:{padding:2.5},children:c(E,{size:20,color:d?a.colors.Text.disable:a.colors.Highlight.default,onClick:d?void 0:()=>{},children:c(ve,{})})})]})}var ki=d.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,Ai={default:d(ki)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:d(ki)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},ji=d.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,Mi=e=>c(ji,{children:e}),Ni=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=Ai[e],a=()=>Mi(t);return c(i,{ref:n,...r,onClick:r.onClick,children:c(a,{})})},Pi=d(f)`
    width: 100%;
    max-width: 992px;

    ${P.laptop} {
        max-width: 635px;
    }

    ${P.tablet} {
        max-width: 100%;
    }
`,Fi=d(f)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,Ii=d(A)`
    outline: none;
    user-select: none;
`,Li=({timetable:e,isSelected:t,onClick:n,onCopy:r,onDelete:i,onNameChange:a,isDragging:o})=>{let u=s(),{attributes:d,listeners:p,setNodeRef:m,transform:h,transition:g}=Ti({id:e.id});return c(`div`,{ref:m,style:{transform:(e=>{if(!e)return``;let{x:t,y:n}=e;return`translate3d(${t}px, ${n}px, 0)`})(h),transition:g,touchAction:`manipulation`,opacity:o?.5:1},...d,...p,children:l(Ni,{type:t?`selected`:`default`,onClick:n,children:[c(Ii,{onClick:e=>{t&&(e.stopPropagation(),e.currentTarget.contentEditable=`true`,e.currentTarget.focus())},onBlur:t=>{let n=t.currentTarget.textContent||``;t.currentTarget.contentEditable=`false`,a(e.id,n)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},contentEditable:!1,suppressContentEditableWarning:!0,type:`Normal`,color:t?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:e.name?e.name:`No Title`}),l(f,{direction:`row`,gap:0,align:`center`,children:[t&&c(D,{onClick:r,styles:{padding:5},children:c(E,{size:15,onClick:()=>{},color:t?u.colors.Highlight.default:u.colors.Text.lighter,children:c(me,{})})}),c(D,{onClick:i,styles:{padding:3.75},children:c(E,{size:17.5,onClick:()=>{},color:t?u.colors.Highlight.default:u.colors.Text.lighter,children:c(k,{})})})]})]})})},Ri=({timeTableLectures:e,timetablesQuery:t})=>{let{t:n}=O(),{status:r}=ne(),i=s(),a=W(e=>e.currentTimetableId),o=W(e=>e.setCurrentTimetableId),u=W(e=>e.setCurrentTimetableName),d=W(e=>e.year),p=W(e=>e.semesterEnum),m=W(e=>e.setYear),h=W(e=>e.setSemesterEnum),{requestFunction:g}=v(`POST`,`/timetables`,{onSuccess:e=>{t.refetch(),o(e.id)}}),{requestFunction:_}=v(`DELETE`,`/timetables`,{onMutate:e=>{a===e.id&&o(null)},onSuccess:()=>{t.refetch()}}),{requestFunction:y}=v(`PATCH`,`/timetables`,{onSuccess:()=>{t.refetch()}}),[b,x]=(0,U.useState)([]),[S,C]=(0,U.useState)(null),w=Qt(Zt(er,{activationConstraint:{distance:8}}),Zt(nr,{activationConstraint:{delay:500,tolerance:5}}));return(0,U.useEffect)(()=>{let e=t.data?.timetables??[];e=e.filter(e=>e.year===d&&e.semester===p),x(e.slice().sort((e,t)=>e.timeTableOrder-t.timeTableOrder)),a!=null&&t.data?.timetables.forEach(e=>{e.id===a&&u(e.name)})},[t.data,d,p]),(0,U.useEffect)(()=>{u(a==null?n(`timetable.myTimetable`):b.find(e=>e.id===a)?.name||``)},[a]),l(Pi,{direction:`row`,justify:`space-between`,align:`stretch`,flex:`0 1 auto`,gap:4,style:{overflowX:`hidden`},children:[l(f,{direction:`row`,gap:3,flex:`0 1 auto`,style:{overflowX:`auto`},children:[l(Ni,{type:a==null?`selected`:`default`,onClick:()=>{o(null)},children:[c(A,{type:`Normal`,color:a===null?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:n(`timetable.myTimetable`)}),a===null&&r===`success`&&c(D,{onClick:t=>{t.stopPropagation(),g({year:d,semester:p,lectureIds:e.map(e=>e.id)})},styles:{padding:5},children:c(E,{size:15,color:i.colors.Highlight.default,onClick:()=>{},children:c(me,{})})})]},`my-timetable`),r===`success`&&l(Fi,{direction:`row`,gap:3,flex:`1 1 auto`,onWheel:e=>{if(e.deltaY===0)return;let t=e.currentTarget;t.scrollLeft+=e.deltaY},children:[c(Jr,{sensors:w,collisionDetection:on,onDragStart:e=>{C(e.active.id)},onDragEnd:e=>{let{active:t,over:n}=e;if(C(null),n&&t.id!==n.id){let e=b.findIndex(e=>e.id===t.id),r=b.findIndex(e=>e.id===n.id);x(oi(b,e,r));let i=t.id;y({id:i,order:r})}},modifiers:[ri,ai],children:c(_i,{items:b.map(e=>e.id),strategy:fi,children:b.map(t=>c(Li,{timetable:t,isSelected:a===t.id,isDragging:S===t.id,onClick:()=>{o(t.id)},onCopy:t=>{t.stopPropagation(),g({year:d,semester:p,lectureIds:e.map(e=>e.id)})},onDelete:e=>{e.stopPropagation(),_({id:t.id})},onNameChange:(e,t)=>{x(n=>n.map(n=>n.id===e?{...n,name:t}:n)),y({id:e,name:t})}},t.id))})}),c(Ni,{onClick:()=>{g({year:d,semester:p,lectureIds:[]})},children:c(D,{onClick:e=>{},styles:{padding:3.75},children:c(E,{size:17.5,color:i.colors.Text.default,onClick:()=>{},children:c(V,{})})})})]})]}),c(f,{direction:`row`,gap:0,align:`center`,children:c(Oi,{year:d,semester:p,setYear:m,setSemester:h,setCurrentTimetableId:o})})]})},zi=d.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;

    ${P.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px 8px;
    }
`,Bi=d.div`
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

    ${P.tablet} {
        padding-left: 0;
    }
`,Vi=d.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;

    ${P.mobile} {
        font-size: 12px;
    }
`,Hi=d.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    white-space: nowrap;

    ${P.mobile} {
        font-size: 12px;
    }
`,Ui=d.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({theme:e})=>e.colors.Highlight.default};

    ${P.mobile} {
        display: none;
    }
`;function Wi({hover:e,setHover:t,timetableLectures:n}){let{t:r}=O(),{lecturesByType:i,creditsByType:a}=(0,U.useMemo)(()=>{let e={basicRequired:0,basicElective:0,majorRequired:0,majorElective:0,humanitiesSocial:0,etc:0},t={basicRequired:[],basicElective:[],majorRequired:[],majorElective:[],humanitiesSocial:[],etc:[]};return n.forEach(n=>{n.type.includes(`기초필수`)?(e.basicRequired+=n.credit,t.basicRequired.push(n)):n.type.includes(`기초선택`)?(e.basicElective+=n.credit,t.basicElective.push(n)):n.type.includes(`전공필수`)?(e.majorRequired+=n.credit,t.majorRequired.push(n)):n.type.includes(`전공선택`)?(e.majorElective+=n.credit,t.majorElective.push(n)):n.type.includes(`인문`)?(e.humanitiesSocial+=n.credit,t.humanitiesSocial.push(n)):(e.etc+=n.credit,e.etc+=n.creditAU,t.etc.push(n))}),{lecturesByType:t,creditsByType:e}},[n]);function o(e){for(let t of[`basicRequired`,`basicElective`,`majorRequired`,`majorElective`,`humanitiesSocial`,`etc`])if(e.type.includes(r(`common.type.${t}`)))return t;return`etc`}function s(t,n){if(!e||e.length==0||e?.length>1)return``;let r=e[0];return t.map(e=>e.id).includes(r.id)?`(${r.creditAU?r.creditAU:r.credit})`:n===o(r)?`(+${r.creditAU?r.creditAU:r.credit})`:``}return l(zi,{children:[l(Bi,{onMouseEnter:()=>t(i.basicRequired),onMouseLeave:()=>t([]),children:[c(Vi,{children:r(`common.type.basicRequiredShort`)}),c(Hi,{children:a.basicRequired}),c(Ui,{children:s(i.basicRequired,`basicRequired`)})]}),l(Bi,{onMouseEnter:()=>t(i.basicElective),onMouseLeave:()=>t([]),children:[c(Vi,{children:r(`common.type.basicElectiveShort`)}),c(Hi,{children:a.basicElective}),c(Ui,{children:s(i.basicElective,`basicElective`)})]}),l(Bi,{onMouseEnter:()=>t(i.majorRequired),onMouseLeave:()=>t([]),children:[c(Vi,{children:r(`common.type.majorRequiredShort`)}),c(Hi,{children:a.majorRequired}),c(Ui,{children:s(i.majorRequired,`majorRequired`)})]}),l(Bi,{onMouseEnter:()=>t(i.majorElective),onMouseLeave:()=>t([]),children:[c(Vi,{children:r(`common.type.majorElectiveShort`)}),c(Hi,{children:a.majorElective}),c(Ui,{children:s(i.majorElective,`majorElective`)})]}),l(Bi,{onMouseEnter:()=>t(i.humanitiesSocial),onMouseLeave:()=>t([]),children:[c(Vi,{children:r(`common.type.humanitiesSocialElectiveShort`)}),c(Hi,{children:a.humanitiesSocial}),c(Ui,{children:s(i.humanitiesSocial,`humanitiesSocial`)})]}),l(Bi,{onMouseEnter:()=>t(i.etc),onMouseLeave:()=>t([]),children:[c(Vi,{children:r(`common.type.etcShort`)}),c(Hi,{children:a.etc}),c(Ui,{children:s(i.etc,`etc`)})]})]})}var Gi=d.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${P.mobile} {
        gap: 20px;
    }
`,Ki=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,qi=d.span`
    font-size: 20px;
    font-weight: 300;
`,Ji=d.span`
    font-size: 10px;
    font-weight: 400;
`,Yi=d.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${P.mobile} {
        gap: 20px;
    }
`,Xi=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`,Zi=d.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.Text.default};
`,Qi=d.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.Text.dark};
`;function $i({timetableLectures:e,hover:t,setHover:n}){let{t:r}=O(),i=(0,U.useMemo)(()=>{let n=e.reduce((e,t)=>e+t.credit,0),r=e.reduce((e,t)=>e+t.creditAU,0);if(t&&t.length==1){let i=t[0];e.some(e=>e.id===i.id)||(n+=i.credit,r+=i.creditAU)}let i=0,a=0,o=0,s=e.length;return e.forEach(e=>{i+=e.averageGrade,a+=e.averageLoad,o+=e.averageSpeech,e.averageGrade===0&&e.averageLoad===0&&e.averageSpeech===0&&--s}),i/=s,a/=s,o/=s,{totalCredits:n,totalAU:r,avgGrade:i,avgLoad:a,avgSpeech:o}},[e,t]);return l(u,{children:[l(Gi,{children:[l(Ki,{onMouseEnter:()=>n(e.filter(e=>e.credit>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.credit>0),children:[c(qi,{children:i.totalCredits}),c(Ji,{children:r(`common.credit`)})]}),l(Ki,{onMouseEnter:()=>n(e.filter(e=>e.creditAU>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.creditAU>0),children:[c(qi,{children:i.totalAU}),c(Ji,{children:`AU`})]})]}),l(Yi,{children:[l(Xi,{children:[c(Zi,{children:h(i.avgGrade/3)}),c(Qi,{children:r(`common.grade`)})]}),l(Xi,{children:[c(Zi,{children:h(i.avgLoad/3)}),c(Qi,{children:r(`common.load`)})]}),l(Xi,{children:[c(Zi,{children:h(i.avgSpeech/3)}),c(Qi,{children:r(`common.speech`)})]})]})]})}var ea=d(f)`
    overflow-y: auto;
    min-height: 0;
`,ta=d.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`,na=d.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({color:e,theme:t})=>e||t.colors.Text.default};
    min-width: 16px;
`,ra=d(f)`
    color: ${({highlighted:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,ia=[{day:m.Mon,color:`#E54C65`},{day:m.Tue,color:`#F5A623`},{day:m.Wed,color:`#7ED321`},{day:m.Thu,color:`#4A90D9`},{day:m.Fri,color:`#9B59B6`}];function aa({timetableLectures:e,hover:t,setHover:n}){let{t:r}=O(),i=(0,U.useMemo)(()=>{let n={[m.Mon]:[],[m.Tue]:[],[m.Wed]:[],[m.Thu]:[],[m.Fri]:[]};if(e.forEach(e=>{e.examTimes.forEach(t=>{if(t==null)return;let r=t.day;n[r]&&n[r].push({lectureName:e.name,lectureId:e.id,time:t.str.split(` `).slice(1).join(` `)})})}),t&&t.length==1){let r=t[0];e.some(e=>e.id===r.id)||r.examTimes.forEach(e=>{if(e==null)return;let t=e.day;n[t]&&n[t].push({lectureName:r.name,lectureId:r.id,time:e.str})})}return n},[e,t]);return l(ea,{direction:`column`,gap:15,style:{width:`100%`},flex:`1 1 0`,children:[c(A,{type:`NormalBold`,color:`Text.default`,children:r(`timetable.examTimetable`)}),ia.map(({day:r,color:a})=>{let o=i[r];return!o||o.length===0?null:l(ta,{children:[c(na,{color:a,onMouseEnter:()=>{n(e.filter(e=>e.examTimes.some(e=>e?.day===r)))},onMouseLeave:()=>n([]),children:p(r,!0)}),c(f,{direction:`column`,gap:2,children:o.sort((e,t)=>e.time.localeCompare(t.time)).map((r,i)=>l(ra,{direction:`column`,gap:0,highlighted:t?.some(e=>e.id===r.lectureId),onMouseEnter:()=>n(e.filter(e=>e.id===r.lectureId)),onMouseLeave:()=>n([]),children:[c(A,{type:`NormalBold`,children:r.lectureName}),c(A,{type:`Normal`,children:r.time})]},i))})]},r)})]})}var oa=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(e=>e??`#CCCCCC`),sa=d.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`,ca=d.img`
    object-fit: cover;
    object-position: center;
    filter: ${({isDarkMode:e})=>e?`invert(100%) sepia(100%) grayscale(100%) brightness(0.7)`:`none`};

    /* Performance Optimization: Force GPU layer to prevent repaints on hover */
    transform: translateZ(0);
    will-change: filter;
`,la=d.div`
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
`,ua=d.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({theme:e})=>e.colors.Background.Section.default};
    position: absolute;
    top: 17px;
`,da=d.div`
    background-color: ${({theme:e,courseId:t,highlighted:n})=>n?e.colors.Highlight.default:(()=>{let n=oa(e.colors?.Tile?.TimeTable?.default);return n[t%n.length]})()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`,fa=new Map([[`E2`,{left:50,top:67}],[`E3`,{left:56,top:61}],[`E6`,{left:57,top:52}],[`E7`,{left:65,top:50}],[`E11`,{left:45,top:47}],[`E16`,{left:45,top:40}],[`N1`,{left:75,top:30}],[`N3`,{left:45,top:34}],[`N4`,{left:53,top:32}],[`N5`,{left:63,top:28}],[`N7`,{left:27,top:30}],[`N22`,{left:67,top:26}],[`N24`,{left:65,top:22}],[`N25`,{left:49,top:26}],[`N27`,{left:47,top:17}],[`W1`,{left:26,top:68}],[`W8`,{left:27,top:44}],[`W16`,{left:34,top:73}]]);function pa({timetableLectures:e,hover:t,setHover:n}){let{displayedTheme:r}=I();return l(sa,{children:[(0,U.useMemo)(()=>c(ca,{src:`/campus_map.svg`,alt:`Campus Map`,isDarkMode:r===`dark`,decoding:`async`}),[r]),Array.from(fa).map(([r,{left:i,top:a}])=>{let o=e.filter(e=>e.classes.some(e=>e.buildingCode.includes(r)));return t?.forEach(t=>{e.includes(t)||t.classes.some(e=>e.buildingCode.includes(r))&&o.push(t)}),o.length===0?null:l(la,{left:i,top:a,onMouseEnter:()=>{n(o)},onMouseLeave:()=>{n([])},highlighted:t?.some(e=>o.includes(e))??!1,children:[c(ua,{}),r,o.map(e=>c(da,{courseId:e.courseId,highlighted:t?.includes(e)??!1},e.id))]},r)})]})}var ma=t((e=>{e.createCanvas=function(e,t){return Object.assign(document.createElement(`canvas`),{width:e,height:t})},e.loadImage=function(e,t){return new Promise(function(n,r){let i=Object.assign(document.createElement(`img`),t);function a(){i.onload=null,i.onerror=null}i.onload=function(){a(),n(i)},i.onerror=function(){a(),r(Error(`Failed to load the image "`+e+`"`))},i.src=e})}}))(),ha=(e=>(e.DAILY=`DAILY`,e.HOURLY=`HOURLY`,e.MINUTELY=`MINUTELY`,e.MONTHLY=`MONTHLY`,e.SECONDLY=`SECONDLY`,e.WEEKLY=`WEEKLY`,e.YEARLY=`YEARLY`,e))(ha||{}),ga=(e=>(e.FR=`FR`,e.MO=`MO`,e.SA=`SA`,e.SU=`SU`,e.TH=`TH`,e.TU=`TU`,e.WE=`WE`,e))(ga||{});function _a(e,t,n){if(Array.isArray(t))e.x=t.map(e=>{if(Array.isArray(e))return e;if(typeof e.key!=`string`||typeof e.value!=`string`)throw Error(`Either key or value is not a string!`);if(e.key.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e.key,e.value]});else if(typeof t==`object`)e.x=Object.entries(t).map(([e,t])=>{if(typeof e!=`string`||typeof t!=`string`)throw Error(`Either key or value is not a string!`);if(e.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e,t]});else if(typeof t==`string`&&typeof n==`string`){if(t.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");e.x.push([t,n])}else return e.x.map(e=>({key:e[0],value:e[1]}))}function va(e,t){if(e instanceof Date&&isNaN(e.getTime())||typeof e==`string`&&isNaN(new Date(e).getTime()))throw Error(`\`${t}\` has to be a valid date!`);if(e instanceof Date||typeof e==`string`||typeof e==`object`&&e&&(Pa(e)||Na(e)||Ma(e)||ja(e))||Ta(e)&&e.isValid===!0||(Ea(e)||wa(e))&&e.isValid())return e;throw Error(`\`${t}\` has to be a valid date!`)}function ya(e,t){let n=Object.values(e),r=String(t).toUpperCase();if(!r||!n.includes(r))throw Error(`Input must be one of the following: ${n.join(`, `)}`);return r}function ba(e,t){let n=null;if(typeof t==`string`){let e=t.match(/^(.+) ?<([^>]+)>$/);e?n={email:e[2].trim(),name:e[1].trim()}:t.includes(`@`)&&(n={email:t.trim(),name:t.trim()})}else typeof t==`object`&&(n={email:t.email,mailto:t.mailto,name:t.name,sentBy:t.sentBy});if(!n&&typeof t==`string`)throw Error("`"+e+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n)throw Error("`"+e+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n.name)throw Error("`"+e+".name` is empty!");if(!n.email)throw Error("`"+e+".email` is empty!");return n}function Q(e,t){return String(e).replace(t?/[\\"]/g:/[\\;,]/g,function(e){return`\\`+e}).replace(/(?:\r\n|\r|\n)/g,`\\n`)}function xa(e){return e.split(`\r
`).map(function(e){let t=``,n=0;for(let r=0;r<e.length;r++){let i=e.charAt(r);i>=`\ud800`&&i<=`\udbff`&&(i+=e.charAt(++r));let a=new TextEncoder().encode(i).length;n+=a,n>74&&(t+=`\r
 `,n=a),t+=i}return t}).join(`\r
`)}function $(e,t,n,r){if(e?.startsWith(`/`)&&(e=e.substr(1)),typeof t==`string`||t instanceof Date){let i=Fa(t)?t.withTimeZone(e):new Date(t),a=i.getUTCFullYear()+String(i.getUTCMonth()+1).padStart(2,`0`)+i.getUTCDate().toString().padStart(2,`0`);return e&&(a=i.getFullYear()+String(i.getMonth()+1).padStart(2,`0`)+i.getDate().toString().padStart(2,`0`)),n?a:e?(a+=`T`+i.getHours().toString().padStart(2,`0`)+i.getMinutes().toString().padStart(2,`0`)+i.getSeconds().toString().padStart(2,`0`),a):(a+=`T`+i.getUTCHours().toString().padStart(2,`0`)+i.getUTCMinutes().toString().padStart(2,`0`)+i.getUTCSeconds().toString().padStart(2,`0`)+(r?``:`Z`),a)}else if(Ea(t)){let i=e?Oa(t)&&!t.tz()?t.clone().tz(e):t:r||n&&Oa(t)&&t.tz()?t:t.utc();return i.format(`YYYYMMDD`)+(n?``:`T`+i.format(`HHmmss`)+(r||e?``:`Z`))}else if(Ta(t)){let i=e?t.setZone(e):r||n&&t.zone.type!==`system`?t:t.setZone(`utc`);return i.toFormat(`yyyyLLdd`)+(n?``:`T`+i.toFormat(`HHmmss`)+(r||e?``:`Z`))}else if(Pa(t)){let i=t;return e&&(i=t.withTimeZone(t.timeZoneId)),!e&&t.timeZoneId!==`UTC`&&(i=t.withTimeZone(`UTC`)),$(null,i.toPlainDateTime(),n,r||!!e)}else if(Na(t)){if(n)return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`);if(e){let i=t.toZonedDateTime(e);return $(e,i,n,r)}return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`)+`T`+t.hour.toString().padStart(2,`0`)+t.minute.toString().padStart(2,`0`)+t.second.toString().padStart(2,`0`)+(r||e?``:`Z`)}else{if(Ma(t))return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`)+(n?``:`T000000`+(r||e?``:`Z`));if(ja(t)){let i=e||`UTC`,a=t.toZonedDateTimeISO(i);return $(e,a,n,r)}else{let i=t;if(e)i=typeof t.tz==`function`?t.tz(e):t;else if(!r)if(typeof t.utc==`function`)i=t.utc();else throw Error(`Unable to convert dayjs object to UTC value: UTC plugin is not available!`);return i.format(`YYYYMMDD`)+(n?``:`T`+i.format(`HHmmss`)+(r||e?``:`Z`))}}}function Sa(e,t,n,r){let i=``,a=r?.floating||!1;return r?.timezone&&(i=`;TZID=`+r.timezone,a=!0),t+i+`:`+$(e,n,!1,a)}function Ca(e){let t=e.x.map(([e,t])=>e.toUpperCase()+`:`+Q(t,!1)).join(`\r
`);return t.length?t+`\r
`:``}function wa(e){return typeof e==`object`&&!!e&&!(e instanceof Date)&&!Ea(e)&&!Ta(e)&&!Aa(e)}function Ta(e){return typeof e==`object`&&!!e&&`toJSDate`in e&&typeof e.toJSDate==`function`&&!Aa(e)}function Ea(e){return e!=null&&e._isAMomentObject!=null&&!Aa(e)}function Da(e){return typeof e==`object`&&!!e&&`asSeconds`in e&&typeof e.asSeconds==`function`}function Oa(e){return Ea(e)&&`tz`in e&&typeof e.tz==`function`}function ka(e){return typeof e==`object`&&!!e&&`between`in e&&typeof e.between==`function`&&typeof e.toString==`function`}function Aa(e){return Pa(e)||Na(e)||Ma(e)||ja(e)}function ja(e){return typeof e==`object`&&!!e&&!Pa(e)&&!Na(e)&&!Ma(e)&&`toZonedDateTimeISO`in e&&typeof e.toZonedDateTimeISO==`function`&&!(`year`in e)&&!(`timeZoneId`in e)}function Ma(e){return typeof e==`object`&&!!e&&!Pa(e)&&!Na(e)&&`toPlainDateTime`in e&&typeof e.toPlainDateTime==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&!(`hour`in e)&&!(`timeZoneId`in e)&&!(`epochSeconds`in e)}function Na(e){return typeof e==`object`&&!!e&&!Pa(e)&&`toZonedDateTime`in e&&typeof e.toZonedDateTime==`function`&&`toPlainDate`in e&&typeof e.toPlainDate==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&`hour`in e&&typeof e.hour==`number`&&`minute`in e&&typeof e.minute==`number`&&`second`in e&&typeof e.second==`number`&&!(`timeZone`in e)}function Pa(e){return typeof e==`object`&&!!e&&`timeZoneId`in e&&typeof e.timeZoneId==`string`&&`toPlainDateTime`in e&&typeof e.toPlainDateTime==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&`hour`in e&&typeof e.hour==`number`&&`minute`in e&&typeof e.minute==`number`&&`second`in e&&typeof e.second==`number`}function Fa(e){return e instanceof Date&&`internal`in e&&e.internal instanceof Date&&`withTimeZone`in e&&typeof e.withTimeZone==`function`&&`tzComponents`in e&&typeof e.tzComponents==`function`}function Ia(e){if(typeof e==`string`||e instanceof Date)return new Date(e);if(Pa(e)){let t=e.toInstant();return new Date(t.epochMilliseconds)}return Na(e)?new Date(Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)):Ma(e)?new Date(Date.UTC(e.year,e.month-1,e.day)):ja(e)?new Date(e.epochMilliseconds):Ta(e)?e.toJSDate():e.toDate()}function La(e){let t=``;return e<0&&(t=`-`,e*=-1),t+=`P`,e>=86400&&(t+=Math.floor(e/86400)+`D`,e%=86400),!e&&t.length>1||(t+=`T`,e>=3600&&(t+=Math.floor(e/3600)+`H`,e%=3600),e>=60&&(t+=Math.floor(e/60)+`M`,e%=60),e>0?t+=e+`S`:t.length<=2&&(t+=`0S`)),t}function Ra(e){return e?typeof e==`string`?e:Pa(e)?Ra(e.withTimeZone(`UTC`).toPlainDateTime()):(Aa(e),e.toJSON()):null}var za=(e=>(e.CHAIR=`CHAIR`,e.NON=`NON-PARTICIPANT`,e.OPT=`OPT-PARTICIPANT`,e.REQ=`REQ-PARTICIPANT`,e))(za||{}),Ba=(e=>(e.CLIENT=`CLIENT`,e.NONE=`NONE`,e.SERVER=`SERVER`,e))(Ba||{}),Va=(e=>(e.ACCEPTED=`ACCEPTED`,e.DECLINED=`DECLINED`,e.DELEGATED=`DELEGATED`,e.NEEDSACTION=`NEEDS-ACTION`,e.TENTATIVE=`TENTATIVE`,e))(Va||{}),Ha=(e=>(e.GROUP=`GROUP`,e.INDIVIDUAL=`INDIVIDUAL`,e.RESOURCE=`RESOURCE`,e.ROOM=`ROOM`,e.UNKNOWN=`UNKNOWN`,e))(Ha||{}),Ua=class e{data;parent;constructor(e,t){if(this.data={delegatedFrom:null,delegatedTo:null,email:``,mailto:null,name:null,role:`REQ-PARTICIPANT`,rsvp:null,scheduleAgent:null,sentBy:null,status:null,type:null,x:[]},this.parent=t,!this.parent)throw Error("`event` option required!");if(!e.email)throw Error("No value for `email` in ICalAttendee given!");e.name!==void 0&&this.name(e.name),e.email!==void 0&&this.email(e.email),e.mailto!==void 0&&this.mailto(e.mailto),e.sentBy!==void 0&&this.sentBy(e.sentBy),e.status!==void 0&&this.status(e.status),e.role!==void 0&&this.role(e.role),e.rsvp!==void 0&&this.rsvp(e.rsvp),e.type!==void 0&&this.type(e.type),e.delegatedTo!==void 0&&this.delegatedTo(e.delegatedTo),e.delegatedFrom!==void 0&&this.delegatedFrom(e.delegatedFrom),e.delegatesTo&&this.delegatesTo(e.delegatesTo),e.delegatesFrom&&this.delegatesFrom(e.delegatesFrom),e.scheduleAgent!==void 0&&this.scheduleAgent(e.scheduleAgent),e.x!==void 0&&this.x(e.x)}delegatedFrom(t){return t===void 0?this.data.delegatedFrom:(t?typeof t==`string`?this.data.delegatedFrom=new e(ba(`delegatedFrom`,t),this.parent):t instanceof e?this.data.delegatedFrom=t:this.data.delegatedFrom=new e(t,this.parent):this.data.delegatedFrom=null,this)}delegatedTo(t){return t===void 0?this.data.delegatedTo:t?(typeof t==`string`?this.data.delegatedTo=new e(ba(`delegatedTo`,t),this.parent):t instanceof e?this.data.delegatedTo=t:this.data.delegatedTo=new e(t,this.parent),this.data.status=`DELEGATED`,this):(this.data.delegatedTo=null,this.data.status===`DELEGATED`&&(this.data.status=null),this)}delegatesFrom(t){let n=t instanceof e?t:this.parent.createAttendee(t);return this.delegatedFrom(n),n.delegatedTo(this),n}delegatesTo(t){let n=t instanceof e?t:this.parent.createAttendee(t);return this.delegatedTo(n),n.delegatedFrom(this),n}email(e){return e?(this.data.email=e,this):this.data.email}mailto(e){return e===void 0?this.data.mailto:(this.data.mailto=e||null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e||null,this)}role(e){return e===void 0?this.data.role:(this.data.role=ya(za,e),this)}rsvp(e){return e===void 0?this.data.rsvp:e===null?(this.data.rsvp=null,this):(this.data.rsvp=!!e,this)}scheduleAgent(e){return e===void 0?this.data.scheduleAgent:e?typeof e==`string`&&e.toUpperCase().startsWith(`X-`)?(this.data.scheduleAgent=e,this):(this.data.scheduleAgent=ya(Ba,e),this):(this.data.scheduleAgent=null,this)}sentBy(e){return e?(this.data.sentBy=e,this):this.data.sentBy}status(e){return e===void 0?this.data.status:e?(this.data.status=ya(Va,e),this):(this.data.status=null,this)}toJSON(){return Object.assign({},this.data,{delegatedFrom:this.data.delegatedFrom?.email()||null,delegatedTo:this.data.delegatedTo?.email()||null,x:this.x()})}toString(){let e=`ATTENDEE`;if(!this.data.email)throw Error("No value for `email` in ICalAttendee given!");return e+=`;ROLE=`+this.data.role,this.data.type&&(e+=`;CUTYPE=`+this.data.type),this.data.status&&(e+=`;PARTSTAT=`+this.data.status),this.data.rsvp!==null&&(e+=`;RSVP=`+this.data.rsvp.toString().toUpperCase()),this.data.sentBy!==null&&(e+=`;SENT-BY="mailto:`+this.data.sentBy+`"`),this.data.delegatedTo&&(e+=`;DELEGATED-TO="`+this.data.delegatedTo.email()+`"`),this.data.delegatedFrom&&(e+=`;DELEGATED-FROM="`+this.data.delegatedFrom.email()+`"`),this.data.name&&(e+=`;CN="`+Q(this.data.name,!0)+`"`),this.data.email&&this.data.mailto&&(e+=`;EMAIL=`+Q(this.data.email,!1)),this.data.scheduleAgent&&(e+=`;SCHEDULE-AGENT=`+this.data.scheduleAgent),this.data.x.length&&(e+=`;`+this.data.x.map(([e,t])=>e.toUpperCase()+`=`+Q(t,!1)).join(`;`)),e+=`:MAILTO:`+Q(this.data.mailto||this.data.email,!1)+`\r
`,e}type(e){return e===void 0?this.data.type:e?(this.data.type=ya(Ha,e),this):(this.data.type=null,this)}x(e,t){if(e===void 0)return _a(this.data);if(typeof e==`string`&&typeof t==`string`)_a(this.data,e,t);else if(typeof e==`object`)_a(this.data,e);else throw Error(`Either key or value is not a string!`);return this}},Wa=(e=>(e.audio=`audio`,e.display=`display`,e.email=`email`,e))(Wa||{}),Ga={end:`END`,start:`START`},Ka=class{data;event;constructor(e,t){if(this.data={attach:null,attendees:[],description:null,interval:null,relatesTo:null,repeat:null,summary:null,trigger:-600,type:`display`,x:[]},this.event=t,!t)throw Error("`event` option required!");e.type!==void 0&&this.type(e.type),`trigger`in e&&e.trigger!==void 0&&this.trigger(e.trigger),`triggerBefore`in e&&e.triggerBefore!==void 0&&this.triggerBefore(e.triggerBefore),`triggerAfter`in e&&e.triggerAfter!==void 0&&this.triggerAfter(e.triggerAfter),e.repeat&&this.repeat(e.repeat),e.attach!==void 0&&this.attach(e.attach),e.description!==void 0&&this.description(e.description),e.summary!==void 0&&this.summary(e.summary),e.attendees!==void 0&&this.attendees(e.attendees),e.x!==void 0&&this.x(e.x)}attach(e){if(e===void 0)return this.data.attach;if(!e)return this.data.attach=null,this;let t;if(typeof e==`string`)t={mime:null,uri:e};else if(typeof e==`object`)t={mime:e.mime||null,uri:e.uri};else throw Error("`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalAlarm.html#attach");if(!t.uri)throw Error("`attach.uri` is empty!");return this.data.attach={mime:t.mime,uri:t.uri},this}attendees(e){return e?(e.forEach(e=>this.createAttendee(e)),this):this.data.attendees}createAttendee(e){if(e instanceof Ua)return this.data.attendees.push(e),e;typeof e==`string`&&(e=ba(`data`,e));let t=new Ua(e,this);return this.data.attendees.push(t),t}description(e){return e===void 0?this.data.description:e?(this.data.description=e,this):(this.data.description=null,this)}relatesTo(e){if(e===void 0)return this.data.relatesTo;if(!e)return this.data.relatesTo=null,this;if(!Object.values(Ga).includes(e))throw Error("`relatesTo` is not correct, must be either `START` or `END`!");return this.data.relatesTo=e,this}repeat(e){if(e===void 0)return this.data.repeat;if(!e)return this.data.repeat=null,this;if(typeof e!=`object`)throw Error("`repeat` is not correct, must be an object!");if(typeof e.times!=`number`||!isFinite(e.times))throw Error("`repeat.times` is not correct, must be numeric!");if(typeof e.interval!=`number`||!isFinite(e.interval))throw Error("`repeat.interval` is not correct, must be numeric!");return this.data.repeat=e,this}summary(e){return e===void 0?this.data.summary:e?(this.data.summary=e,this):(this.data.summary=null,this)}toJSON(){let e=this.trigger();return Object.assign({},this.data,{trigger:typeof e==`number`?e:Ra(e),x:this.x()})}toString(){let e=`BEGIN:VALARM\r
`;if(e+=`ACTION:`+this.data.type.toUpperCase()+`\r
`,typeof this.data.trigger==`number`&&this.data.relatesTo===null?this.data.trigger>0?e+=`TRIGGER;RELATED=END:`+La(this.data.trigger)+`\r
`:e+=`TRIGGER:`+La(this.data.trigger)+`\r
`:typeof this.data.trigger==`number`?e+=`TRIGGER;RELATED=`+this.data.relatesTo?.toUpperCase()+`:`+La(this.data.trigger)+`\r
`:e+=`TRIGGER;VALUE=DATE-TIME:`+$(this.event.timezone(),this.data.trigger)+`\r
`,this.data.repeat){if(!this.data.repeat.times)throw Error("No value for `repeat.times` in ICalAlarm given, but required for `interval`!");if(!this.data.repeat.interval)throw Error("No value for `repeat.interval` in ICalAlarm given, but required for `repeat`!");e+=`REPEAT:`+this.data.repeat.times+`\r
`,e+=`DURATION:`+La(this.data.repeat.interval)+`\r
`}return this.data.type===`audio`&&this.data.attach&&this.data.attach.mime?e+=`ATTACH;FMTTYPE=`+Q(this.data.attach.mime,!1)+`:`+Q(this.data.attach.uri,!1)+`\r
`:this.data.type===`audio`&&this.data.attach?e+=`ATTACH;VALUE=URI:`+Q(this.data.attach.uri,!1)+`\r
`:this.data.type===`audio`&&(e+=`ATTACH;VALUE=URI:Basso\r
`),this.data.type!==`audio`&&this.data.description?e+=`DESCRIPTION:`+Q(this.data.description,!1)+`\r
`:this.data.type!==`audio`&&(e+=`DESCRIPTION:`+Q(this.event.summary(),!1)+`\r
`),this.data.type===`email`&&this.data.summary?e+=`SUMMARY:`+Q(this.data.summary,!1)+`\r
`:this.data.type===`email`&&(e+=`SUMMARY:`+Q(this.event.summary(),!1)+`\r
`),this.data.type===`email`&&this.data.attendees.forEach(t=>{e+=t.toString()}),e+=Ca(this.data),e+=`END:VALARM\r
`,e}trigger(e){if(e===void 0&&typeof this.data.trigger==`number`)return-1*this.data.trigger;if(e===void 0)return this.data.trigger;if(typeof e==`number`&&isFinite(e))this.data.trigger=-1*e;else{if(!e||typeof e==`number`)throw Error("`trigger` is not correct, must be a finite number or a supported date!");this.data.trigger=va(e,`trigger`)}return this}triggerAfter(e){return e===void 0?this.data.trigger:this.trigger(typeof e==`number`?-1*e:e)}triggerBefore(e){return e===void 0?this.trigger():this.trigger(e)}type(e){if(e===void 0)return this.data.type;if(!e||!Object.keys(Wa).includes(e))throw Error("`type` is not correct, must be either `display` or `audio`!");return this.data.type=e,this}x(e,t){if(e===void 0)return _a(this.data);if(typeof e==`string`&&typeof t==`string`)_a(this.data,e,t);else if(typeof e==`object`)_a(this.data,e);else throw Error(`Either key or value is not a string!`);return this}},qa=class{data;constructor(e){if(this.data={name:``},!e.name)throw Error("No value for `name` in ICalCategory given!");this.name(e.name)}name(e){return e===void 0?this.data.name:(this.data.name=e,this)}toJSON(){return Object.assign({},this.data)}toString(){return Q(this.data.name,!1)}},Ja=(e=>(e.BUSY=`BUSY`,e.FREE=`FREE`,e.OOF=`OOF`,e.TENTATIVE=`TENTATIVE`,e))(Ja||{}),Ya=(e=>(e.CONFIDENTIAL=`CONFIDENTIAL`,e.PRIVATE=`PRIVATE`,e.PUBLIC=`PUBLIC`,e))(Ya||{}),Xa=(e=>(e.CANCELLED=`CANCELLED`,e.CONFIRMED=`CONFIRMED`,e.TENTATIVE=`TENTATIVE`,e))(Xa||{}),Za=(e=>(e.OPAQUE=`OPAQUE`,e.TRANSPARENT=`TRANSPARENT`,e))(Za||{}),Qa=class{calendar;data;constructor(e,t){if(this.data={alarms:[],allDay:!1,attachments:[],attendees:[],busystatus:null,categories:[],class:null,created:null,description:null,end:null,floating:!1,id:crypto.randomUUID(),lastModified:null,location:null,organizer:null,priority:null,recurrenceId:null,repeating:null,sequence:0,stamp:new Date,start:new Date,status:null,summary:``,timezone:null,transparency:null,url:null,x:[]},this.calendar=t,!t)throw Error("`calendar` option required!");e.id&&this.id(e.id),e.sequence!==void 0&&this.sequence(e.sequence),e.start&&this.start(e.start),e.end!==void 0&&this.end(e.end),e.recurrenceId!==void 0&&this.recurrenceId(e.recurrenceId),e.timezone!==void 0&&this.timezone(e.timezone),e.stamp!==void 0&&this.stamp(e.stamp),e.allDay!==void 0&&this.allDay(e.allDay),e.floating!==void 0&&this.floating(e.floating),e.repeating!==void 0&&this.repeating(e.repeating),e.summary!==void 0&&this.summary(e.summary),e.location!==void 0&&this.location(e.location),e.description!==void 0&&this.description(e.description),e.organizer!==void 0&&this.organizer(e.organizer),e.attendees!==void 0&&this.attendees(e.attendees),e.alarms!==void 0&&this.alarms(e.alarms),e.categories!==void 0&&this.categories(e.categories),e.status!==void 0&&this.status(e.status),e.busystatus!==void 0&&this.busystatus(e.busystatus),e.priority!==void 0&&this.priority(e.priority),e.url!==void 0&&this.url(e.url),e.attachments!==void 0&&this.attachments(e.attachments),e.transparency!==void 0&&this.transparency(e.transparency),e.created!==void 0&&this.created(e.created),e.lastModified!==void 0&&this.lastModified(e.lastModified),e.class!==void 0&&this.class(e.class),e.x!==void 0&&this.x(e.x)}alarms(e){return e?(e.forEach(e=>this.createAlarm(e)),this):this.data.alarms}allDay(e){return e===void 0?this.data.allDay:(this.data.allDay=!!e,this)}attachments(e){return e?(e.forEach(e=>this.createAttachment(e)),this):this.data.attachments}attendees(e){return e?(e.forEach(e=>this.createAttendee(e)),this):this.data.attendees}busystatus(e){return e===void 0?this.data.busystatus:e===null?(this.data.busystatus=null,this):(this.data.busystatus=ya(Ja,e),this)}categories(e){return e?(e.forEach(e=>this.createCategory(e)),this):this.data.categories}class(e){return e===void 0?this.data.class:e===null?(this.data.class=null,this):(this.data.class=ya(Ya,e),this)}createAlarm(e){let t=e instanceof Ka?e:new Ka(e,this);return this.data.alarms.push(t),t}createAttachment(e){return this.data.attachments.push(e),this}createAttendee(e){if(e instanceof Ua)return this.data.attendees.push(e),e;typeof e==`string`&&(e=ba(`data`,e));let t=new Ua(e,this);return this.data.attendees.push(t),t}createCategory(e){let t=e instanceof qa?e:new qa(e);return this.data.categories.push(t),t}created(e){return e===void 0?this.data.created:e===null?(this.data.created=null,this):(this.data.created=va(e,`created`),this)}description(e){return e===void 0?this.data.description:e===null?(this.data.description=null,this):(typeof e==`string`?this.data.description={plain:e}:this.data.description=e,this)}end(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.end):e===null?(this.data.end=null,this):(this.data.end=va(e,`end`),this)}floating(e){return e===void 0?this.data.floating:(this.data.floating=!!e,this.data.floating&&(this.data.timezone=null),this)}id(e){return e===void 0?this.data.id:(this.data.id=String(e),this)}lastModified(e){return e===void 0?this.data.lastModified:e===null?(this.data.lastModified=null,this):(this.data.lastModified=va(e,`lastModified`),this)}location(e){if(e===void 0)return this.data.location;if(typeof e==`string`)return this.data.location={title:e},this;if(e&&(`title`in e&&!e.title||e?.geo&&(typeof e.geo.lat!=`number`||!isFinite(e.geo.lat)||typeof e.geo.lon!=`number`||!isFinite(e.geo.lon))||!(`title`in e)&&!e?.geo))throw Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalEvent.html#location");return this.data.location=e||null,this}organizer(e){return e===void 0?this.data.organizer:e===null?(this.data.organizer=null,this):(this.data.organizer=ba(`organizer`,e),this)}priority(e){if(e===void 0)return this.data.priority;if(e===null)return this.data.priority=null,this;if(e<0||e>9)throw Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");return this.data.priority=Math.round(e),this}recurrenceId(e){return e===void 0?this.data.recurrenceId:e===null?(this.data.recurrenceId=null,this):(this.data.recurrenceId=va(e,`recurrenceId`),this)}repeating(e){if(e===void 0)return this.data.repeating;if(!e)return this.data.repeating=null,this;if(ka(e)||typeof e==`string`)return this.data.repeating=e,this;if(this.data.repeating={freq:ya(ha,e.freq)},e.count){if(!isFinite(e.count))throw Error("`repeating.count` must be a finite number!");this.data.repeating.count=e.count}if(e.interval){if(!isFinite(e.interval))throw Error("`repeating.interval` must be a finite number!");this.data.repeating.interval=e.interval}if(e.until!==void 0&&(this.data.repeating.until=va(e.until,`repeating.until`)),e.byDay){let t=Array.isArray(e.byDay)?e.byDay:[e.byDay];this.data.repeating.byDay=t.map(e=>ya(ga,e))}if(e.byMonth){let t=Array.isArray(e.byMonth)?e.byMonth:[e.byMonth];this.data.repeating.byMonth=t.map(e=>{if(typeof e!=`number`||e<1||e>12)throw Error("`repeating.byMonth` contains invalid value `"+e+"`!");return e})}if(e.byMonthDay){let t=Array.isArray(e.byMonthDay)?e.byMonthDay:[e.byMonthDay];this.data.repeating.byMonthDay=t.map(e=>{if(typeof e!=`number`||e<-31||e>31||e===0)throw Error("`repeating.byMonthDay` contains invalid value `"+e+"`!");return e})}if(e.bySetPos){if(!this.data.repeating.byDay)throw"`repeating.bySetPos` must be used along with `repeating.byDay`!";let t=Array.isArray(e.bySetPos)?e.bySetPos:[e.bySetPos];this.data.repeating.bySetPos=t.map(e=>{if(typeof e!=`number`||e<-366||e>366||e===0)throw"`repeating.bySetPos` contains invalid value `"+e+"`!";return e})}if(e.exclude){let t=Array.isArray(e.exclude)?e.exclude:[e.exclude];this.data.repeating.exclude=t.map((e,t)=>va(e,`repeating.exclude[${t}]`))}return e.startOfWeek&&(this.data.repeating.startOfWeek=ya(ga,e.startOfWeek)),this}sequence(e){if(e===void 0)return this.data.sequence;if(isNaN(parseInt(String(e),10)))throw Error("`sequence` must be a number!");return this.data.sequence=e,this}stamp(e){return e===void 0?this.data.stamp:(this.data.stamp=va(e,`stamp`),this)}start(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.start):(this.data.start=va(e,`start`),this)}status(e){return e===void 0?this.data.status:e===null?(this.data.status=null,this):(this.data.status=ya(Xa,e),this)}summary(e){return e===void 0?this.data.summary:(this.data.summary=e?String(e):``,this)}timestamp(e){return e===void 0?this.stamp():this.stamp(e)}timezone(e){return e===void 0&&this.data.timezone!==null?this.data.timezone:e===void 0?this.calendar.timezone():(this.data.timezone=e&&e!==`UTC`?e.toString():null,this.data.timezone&&(this.data.floating=!1),this)}toJSON(){let e=null;return ka(this.data.repeating)||typeof this.data.repeating==`string`?e=this.data.repeating.toString():this.data.repeating&&(e=Object.assign({},this.data.repeating,{exclude:this.data.repeating.exclude?.map(e=>Ra(e)),until:Ra(this.data.repeating.until)||void 0})),this.swapStartAndEndIfRequired(),Object.assign({},this.data,{created:Ra(this.data.created)||null,end:Ra(this.data.end)||null,lastModified:Ra(this.data.lastModified)||null,recurrenceId:Ra(this.data.recurrenceId)||null,repeating:e,stamp:Ra(this.data.stamp)||null,start:Ra(this.data.start)||null,x:this.x()})}toString(){let e=``;if(e+=`BEGIN:VEVENT\r
`,e+=`UID:`+this.data.id+`\r
`,e+=`SEQUENCE:`+this.data.sequence+`\r
`,this.swapStartAndEndIfRequired(),e+=`DTSTAMP:`+$(this.calendar.timezone(),this.data.stamp)+`\r
`,this.data.allDay?(e+=`DTSTART;VALUE=DATE:`+$(this.timezone(),this.data.start,!0)+`\r
`,this.data.end&&(e+=`DTEND;VALUE=DATE:`+$(this.timezone(),this.data.end,!0)+`\r
`),e+=`X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r
`,e+=`X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r
`):(e+=Sa(this.timezone(),`DTSTART`,this.data.start,this.data)+`\r
`,this.data.end&&(e+=Sa(this.timezone(),`DTEND`,this.data.end,this.data)+`\r
`)),ka(this.data.repeating)||typeof this.data.repeating==`string`){let t=this.data.repeating.toString().replace(/\r\n/g,`
`).split(`
`).filter(e=>e&&!e.startsWith(`DTSTART:`)).join(`\r
`);!t.includes(`\r
`)&&!t.startsWith(`RRULE:`)&&(t=`RRULE:`+t),e+=t.trim()+`\r
`}else this.data.repeating&&(e+=`RRULE:FREQ=`+this.data.repeating.freq,this.data.repeating.count&&(e+=`;COUNT=`+this.data.repeating.count),this.data.repeating.interval&&(e+=`;INTERVAL=`+this.data.repeating.interval),this.data.repeating.until&&(e+=`;UNTIL=`+$(this.calendar.timezone(),this.data.repeating.until,!1,this.floating())),this.data.repeating.byDay&&(e+=`;BYDAY=`+this.data.repeating.byDay.join(`,`)),this.data.repeating.byMonth&&(e+=`;BYMONTH=`+this.data.repeating.byMonth.join(`,`)),this.data.repeating.byMonthDay&&(e+=`;BYMONTHDAY=`+this.data.repeating.byMonthDay.join(`,`)),this.data.repeating.bySetPos&&(e+=`;BYSETPOS=`+this.data.repeating.bySetPos.join(`,`)),this.data.repeating.startOfWeek&&(e+=`;WKST=`+this.data.repeating.startOfWeek),e+=`\r
`,this.data.repeating.exclude&&(this.data.allDay?e+=`EXDATE;VALUE=DATE:`+this.data.repeating.exclude.map(e=>$(this.calendar.timezone(),e,!0)).join(`,`)+`\r
`:(e+=`EXDATE`,this.timezone()?e+=`;TZID=`+this.timezone()+`:`+this.data.repeating.exclude.map(e=>$(this.timezone(),e,!1,!0)).join(`,`)+`\r
`:e+=`:`+this.data.repeating.exclude.map(e=>$(this.timezone(),e,!1,this.floating())).join(`,`)+`\r
`)));return this.data.recurrenceId&&(e+=Sa(this.timezone(),`RECURRENCE-ID`,this.data.recurrenceId,this.data)+`\r
`),e+=`SUMMARY:`+Q(this.data.summary,!1)+`\r
`,this.data.transparency&&(e+=`TRANSP:`+Q(this.data.transparency,!1)+`\r
`),this.data.location&&`title`in this.data.location&&this.data.location.title&&(e+=`LOCATION:`+Q(this.data.location.title+(this.data.location.address?`
`+this.data.location.address:``),!1)+`\r
`,this.data.location.radius&&this.data.location.geo&&(e+=`X-APPLE-STRUCTURED-LOCATION;VALUE=URI;`+(this.data.location.address?`X-ADDRESS=`+Q(this.data.location.address,!1)+`;`:``)+`X-APPLE-RADIUS=`+Q(this.data.location.radius,!1)+`;X-TITLE=`+Q(this.data.location.title,!1)+`:geo:`+Q(this.data.location.geo?.lat,!1)+`,`+Q(this.data.location.geo?.lon,!1)+`\r
`)),this.data.location?.geo?.lat&&this.data.location.geo.lon&&(e+=`GEO:`+Q(this.data.location.geo.lat,!1)+`;`+Q(this.data.location.geo.lon,!1)+`\r
`),this.data.description&&(e+=`DESCRIPTION:`+Q(this.data.description.plain,!1)+`\r
`,this.data.description.html&&(e+=`X-ALT-DESC;FMTTYPE=text/html:`+Q(this.data.description.html,!1)+`\r
`)),this.data.organizer&&(e+=`ORGANIZER;CN="`+Q(this.data.organizer.name,!0)+`"`,this.data.organizer.sentBy&&(e+=`;SENT-BY="mailto:`+Q(this.data.organizer.sentBy,!0)+`"`),this.data.organizer.email&&this.data.organizer.mailto&&(e+=`;EMAIL=`+Q(this.data.organizer.email,!1)),e+=`:`,this.data.organizer.email&&(e+=`mailto:`+Q(this.data.organizer.mailto||this.data.organizer.email,!1)),e+=`\r
`),this.data.attendees.forEach(function(t){e+=t.toString()}),this.data.alarms.forEach(function(t){e+=t.toString()}),this.data.categories.length>0&&(e+=`CATEGORIES:`+this.data.categories.map(e=>e.toString()).join()+`\r
`),this.data.url&&(e+=`URL;VALUE=URI:`+Q(this.data.url,!1)+`\r
`),this.data.attachments.length>0&&this.data.attachments.forEach(t=>{e+=`ATTACH:`+Q(t,!1)+`\r
`}),this.data.status&&(e+=`STATUS:`+this.data.status.toUpperCase()+`\r
`),this.data.busystatus&&(e+=`X-MICROSOFT-CDO-BUSYSTATUS:`+this.data.busystatus.toUpperCase()+`\r
`),this.data.priority!==null&&(e+=`PRIORITY:`+this.data.priority+`\r
`),e+=Ca(this.data),this.data.created&&(e+=`CREATED:`+$(this.calendar.timezone(),this.data.created)+`\r
`),this.data.lastModified&&(e+=`LAST-MODIFIED:`+$(this.calendar.timezone(),this.data.lastModified)+`\r
`),this.data.class&&(e+=`CLASS:`+this.data.class.toUpperCase()+`\r
`),e+=`END:VEVENT\r
`,e}transparency(e){return e===void 0?this.data.transparency:e?(this.data.transparency=ya(Za,e),this):(this.data.transparency=null,this)}uid(e){return e===void 0?this.id():this.id(e)}url(e){return e===void 0?this.data.url:(this.data.url=e?String(e):null,this)}x(e,t){return e===void 0?_a(this.data):(typeof e==`string`&&typeof t==`string`&&_a(this.data,e,t),typeof e==`object`&&_a(this.data,e),this)}swapStartAndEndIfRequired(){if(this.data.start&&this.data.end&&Ia(this.data.start).getTime()>Ia(this.data.end).getTime()){let e=this.data.start;this.data.start=this.data.end,this.data.end=e}}},$a=(e=>(e.ADD=`ADD`,e.CANCEL=`CANCEL`,e.COUNTER=`COUNTER`,e.DECLINECOUNTER=`DECLINECOUNTER`,e.PUBLISH=`PUBLISH`,e.REFRESH=`REFRESH`,e.REPLY=`REPLY`,e.REQUEST=`REQUEST`,e))($a||{}),eo=class{data;constructor(e={}){this.data={description:null,events:[],method:null,name:null,prodId:`//sebbo.net//ical-generator//EN`,scale:null,source:null,timezone:null,ttl:null,url:null,x:[]},e.prodId!==void 0&&this.prodId(e.prodId),e.method!==void 0&&this.method(e.method),e.name!==void 0&&this.name(e.name),e.description!==void 0&&this.description(e.description),e.timezone!==void 0&&this.timezone(e.timezone),e.source!==void 0&&this.source(e.source),e.url!==void 0&&this.url(e.url),e.scale!==void 0&&this.scale(e.scale),e.ttl!==void 0&&this.ttl(e.ttl),e.events!==void 0&&this.events(e.events),e.x!==void 0&&this.x(e.x)}clear(){return this.data.events=[],this}createEvent(e){let t=e instanceof Qa?e:new Qa(e,this);return this.data.events.push(t),t}description(e){return e===void 0?this.data.description:(this.data.description=e?String(e):null,this)}events(e){return e?(e.forEach(e=>this.createEvent(e)),this):this.data.events}length(){return this.data.events.length}method(e){return e===void 0?this.data.method:e?(this.data.method=ya($a,e),this):(this.data.method=null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e?String(e):null,this)}prodId(e){if(!e)return this.data.prodId;if(typeof e==`string`)return this.data.prodId=e,this;if(typeof e!=`object`)throw Error("`prodid` needs to be a string or an object!");if(!e.company)throw Error("`prodid.company` is a mandatory item!");if(!e.product)throw Error("`prodid.product` is a mandatory item!");let t=(e.language||`EN`).toUpperCase();return this.data.prodId=`//`+e.company+`//`+e.product+`//`+t,this}scale(e){return e===void 0?this.data.scale:(e===null?this.data.scale=null:this.data.scale=e.toUpperCase(),this)}source(e){return e===void 0?this.data.source:(this.data.source=e||null,this)}timezone(e){return e===void 0?this.data.timezone?.name||null:(e===`UTC`?this.data.timezone=null:typeof e==`string`?this.data.timezone={name:e}:e===null?this.data.timezone=null:this.data.timezone=e,this)}toJSON(){return Object.assign({},this.data,{events:this.data.events.map(e=>e.toJSON()),timezone:this.timezone(),x:this.x()})}toString(){let e=``;return e=`BEGIN:VCALENDAR\r
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
`),this.data.ttl&&(e+=`REFRESH-INTERVAL;VALUE=DURATION:`+La(this.data.ttl)+`\r
`,e+=`X-PUBLISHED-TTL:`+La(this.data.ttl)+`\r
`),this.data.events.forEach(t=>e+=t.toString()),e+=Ca(this.data),e+=`END:VCALENDAR`,xa(e)}ttl(e){return e===void 0?this.data.ttl:(Da(e)?this.data.ttl=e.asSeconds():e&&e>0?this.data.ttl=e:this.data.ttl=null,this)}url(e){return e===void 0?this.data.url:(this.data.url=e||null,this)}x(e,t){if(e===void 0)return _a(this.data);if(typeof e==`string`&&typeof t==`string`)_a(this.data,e,t);else if(typeof e==`object`)_a(this.data,e);else throw Error(`Either key or value is not a string!`);return this}};function to(e){return new eo(e)}var no=to;function ro(e){let{ctx:t,x:n,y:r,width:i,height:a,radius:o,color:s}=e;t.fillStyle=s,t.beginPath(),t.moveTo(n+o,r),t.lineTo(n+i-o,r),t.quadraticCurveTo(n+i,r,n+i,r+o),t.lineTo(n+i,r+a-o),t.quadraticCurveTo(n+i,r+a,n+i-o,r+a),t.lineTo(n+o,r+a),t.quadraticCurveTo(n,r+a,n,r+a-o),t.lineTo(n,r+o),t.quadraticCurveTo(n,r,n+o,r),t.closePath(),t.fill()}function io(e,t,n,r){let i=document.createElement(`canvas`).getContext(`2d`);if(!i)return[];i.font=`${r}px ${n}`;let a=``,o=[];for(let n of e){let e=a+n;i.measureText(e).width>t&&a!==``?(o.push(a),a=n):a=e}return a&&o.push(a),o}function ao(e){let{ctx:t,x:n,y:r,text:i,font:a,fontSize:o,color:s,align:c=`left`}=e;t.fillStyle=s,t.font=`${o}px ${a}`,t.textAlign=c||`left`,t.fillText(i,n,r)}function oo(e){let{ctx:t,x:n,y:r,width:i,height:a,title:o,professor:s,location:c,font:l,fontSize:u,displayMode:d}=e,f=io(o,i,l,u),p=io(s,i,l,u),m=io(c,i,l,u),h=[...f,...m,...p].slice(0,3),g=(a-h.reduce((e,t,n)=>t===``?e+2:e+u,0))/2+u-7;h.forEach((e,i)=>{e===``?g+=2:(ao({ctx:t,x:n,y:r+g,text:e,font:l,fontSize:u,color:i<f.length?`#000000`:d===`dark`?`#4C4C4C`:`#888888`}),g+=u+5)})}async function so(e){let{timetableName:t,lectures:n,timetableType:r,semesterName:i,semesterFontSize:a,tileFontSize:o,displayMode:s,language:c}=e,l=Object.values(s===`dark`?re.Tile.TimeTable.default:L.Tile.TimeTable.default).flatMap(e=>Object.values(e)),u=`timetable_template/Image_template_${r}_${s}_${c}.png`,d=new Image;d.src=u,await new Promise((e,t)=>{d.onload=e,d.onerror=t});let f=await(0,ma.loadImage)(u),p=(0,ma.createCanvas)(f.width,f.height),m=p.getContext(`2d`);m.drawImage(f,0,0),ao({ctx:m,x:r===`5days`?952:1302,y:78,text:i+` `+t,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:a,color:`#CCCCCC`,align:`right`});for(let e of n){let t=l[e.courseId%l.length]||`#F2CECE`;for(let n of e.classes){let{day:r,begin:i,end:a}=n,[c,l,u,d]=[178*r+76,i*4/3-486,171,(a-i)*4/3-7];ro({ctx:m,x:c,y:l,width:u,height:d,radius:4,color:t}),oo({ctx:m,x:c+12,y:l+8,width:u-24,height:d-16,title:e.name,professor:B(e.professors)||``,location:n.buildingCode+` `+n.roomName||``,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:o,displayMode:s})}}return p}async function co(e){let t=(await so(e)).toDataURL(`image/png`),n=document.createElement(`a`);n.href=t,n.download=`${e.timetableName}.png`,n.click(),URL.revokeObjectURL(t)}async function lo(e){let t=(await so(e)).toDataURL(`image/png`),n=await(await fetch(t)).blob();if(!navigator.clipboard?.write)return;let r=new ClipboardItem({"image/png":n});await navigator.clipboard.write([r])}function uo(e){let{name:t,lectures:n,semesterObject:r}=e,i=no({name:t,prodId:`//SPARCS//OTL Plus`,timezone:`Asia/Seoul`});for(let e of n)for(let t of e.classes){let n=t.buildingCode+` `+t.roomName,a=new Date(r.beginning),o=(t.day+1)%7,s=new Date(a),c=s.getDay(),l=(o+7-c)%7;s.setDate(s.getDate()+l);let u=Math.floor(t.begin/60),d=t.begin%60,f=Math.floor(t.end/60),p=t.end%60,m=new Date(s);m.setHours(u,d,0,0);let h=new Date(s);h.setHours(f,p,0,0),i.createEvent({start:m,end:h,summary:e.name,location:n,repeating:{freq:ha.WEEKLY,until:new Date(r.end)},timezone:`Asia/Seoul`}).alarms([{type:Wa.display,trigger:900}])}let a=new Blob([i.toString()],{type:`text/calendar;charset=utf-8`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=`${t}.ics`,s.click(),URL.revokeObjectURL(o)}var fo=d(f)`
    width: 100%;

    ${P.laptop} {
        height: 56px;
        flex-wrap: wrap;
        align-items: center;
    }

    ${P.tablet} {
        height: auto;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
`,po=d.button`
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
`;function mo({timetableName:e,timetableLectures:t,year:n,semester:r}){let{t:i,i18n:a}=O(),o=s(),u=te(`tablet`),{displayedTheme:d}=I(),{query:f}=v(`GET`,`/semesters`),[p,m]=(0,U.useState)(`idle`),h=(0,U.useMemo)(()=>f?f.data?.semesters.find(e=>e.year===n&&e.semester===r):null,[f.data,n,r]),g=(0,U.useMemo)(()=>t.some(e=>e.classes.some(e=>e.day>=5))?`7days`:`5days`,[t]);return(0,U.useEffect)(()=>{if(p.startsWith(`success`)){let e=setTimeout(()=>{m(`idle`)},500);return()=>clearTimeout(e)}},[p]),l(fo,{direction:u?`row`:`column`,gap:8,children:[l(po,{onClick:()=>{p===`idle`&&(lo({timetableName:e,lectures:t,timetableType:g,semesterName:n+` `+_(r),semesterFontSize:30,tileFontSize:18,displayMode:d,language:a.resolvedLanguage==`ko`?`ko`:`en`}),m(`successCopyImage`))},children:[c(E,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:c(p==`successCopyImage`?oe:me,{})}),!u&&c(`span`,{children:i(`timetable.copyImage`)})]}),l(po,{onClick:()=>{p===`idle`&&(co({timetableName:e,lectures:t,timetableType:g,semesterName:n+` `+_(r),semesterFontSize:30,tileFontSize:18,displayMode:d,language:a.resolvedLanguage==`ko`?`ko`:`en`}),m(`successDownloadImage`))},children:[c(E,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:c(p==`successDownloadImage`?oe:ge,{})}),!u&&c(`span`,{children:i(`timetable.exportImage`)})]}),l(po,{onClick:()=>{if(p===`idle`){if(!h)return;uo({name:e,lectures:t,semesterObject:{beginning:new Date(h.beginning),end:new Date(h.end)}}),m(`successDownloadCalendar`)}},children:[c(E,{size:16,color:o.colors.Highlight.default,children:c(p==`successDownloadCalendar`?oe:pe,{})}),!u&&c(`span`,{children:i(`timetable.exportICal`)})]})]})}var ho=d.div`
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

    ${P.laptop} {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`;function go({timetableLectures:e}){let t=te(`laptop`),n=W(e=>e.currentTimetableName),r=W(e=>e.year),i=W(e=>e.semesterEnum),a=W(e=>e.selectedLectures),o=W(e=>e.hoveredLectures),s=W(e=>e.setHoveredLectures),u=a.length>0?a:o;return l(ho,{children:[!t&&c(pa,{timetableLectures:e,hover:u,setHover:s}),c(Wi,{hover:u,setHover:s,timetableLectures:e}),!t&&c(N,{direction:`row`}),c($i,{timetableLectures:e,hover:u,setHover:s}),!t&&c(N,{direction:`row`}),!t&&c(aa,{timetableLectures:e,hover:u,setHover:s}),!t&&c(N,{direction:`row`}),!t&&c(mo,{timetableName:n,timetableLectures:e,year:r,semester:i})]})}var _o=d(f)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${P.tablet} {
        padding: 8px;
    }

    ${P.mobile} {
        padding: 0 8px 8px 8px;
    }
`,vo=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${P.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }

    ${P.tablet} {
        flex: 1 1 0;
        min-height: 0;
        height: 100%;
    }
`,yo=d(f)`
    border-radius: 12px;
    width: fit-content;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${P.laptop} {
        max-width: none;
    }

    ${P.tablet} {
        width: 100%;
        max-width: none;
        flex: 1 0 0;
        overflow: hidden;
    }
`,bo=d(f)`
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

    ${P.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`,xo=d.div`
    width: 360px;
    height: 100%;
    display: flex;

    ${P.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${P.laptop} {
        width: 300px;
    }
`,So=d.div`
    width: 270px;
    height: 100%;
    display: flex;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${P.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${P.laptop} {
        width: 300px;
    }

    ${P.tablet} {
        width: 100%;
    }
`,Co=d.div`
    ${P.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,wo=d(f)`
    flex: 1;
    min-height: 0;
    overflow: hidden;

    ${P.laptop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,To=d.div`
    ${P.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${P.tablet} {
        height: auto;
        padding: 8px;
    }
`,Eo=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
`,Do=a(function(){let{status:e}=ne(),t=s(),n=te(`tablet`),r=te(`laptop`),i=te(`desktop`);(0,U.useEffect)(()=>{F(`Page View`,{page:`Timetable`})},[]);let a=(0,U.useRef)(null),o=(0,U.useRef)(null),d=(0,U.useRef)(null),p=W(e=>e.hoveredLectures),m=W(e=>e.setHoveredLectures),h=W(e=>e.selectedLectures),g=W(e=>e.setSelectedLectures),_=W(e=>e.timeFilter),y=W(e=>e.setTimeFilter),b=W(e=>e.currentTimetableId),x=W(e=>e.currentTimetableName),S=W(e=>e.year),C=W(e=>e.semesterEnum),w=W(e=>e.mobileSearchOpen),T=W(e=>e.setMobileSearchOpen),D=W(e=>e.flashLectureIds),{query:O,setParams:k}=v(`GET`,`/timetables`,{enabled:e===`success`}),[j,P]=(0,U.useState)([]),{query:I}=v(`GET`,`/timetables/${b}`,{enabled:b!==null&&e===`success`}),{query:L,setParams:re}=v(`GET`,`/timetables/my-timetable`,{enabled:e===`success`}),R=e===`success`?b===null?L.data?.lectures??[]:I.data?.lectures??[]:j,z=e!==`success`||b!==null;(0,U.useEffect)(()=>{m([]),g([])},[w]),(0,U.useEffect)(()=>{let e=e=>{a.current&&!a.current.contains(e.target)&&o.current&&!o.current.contains(e.target)&&(m([]),g([]))};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,U.useEffect)(()=>{g([]),m([]),S!==-1&&(re({year:S,semester:C}),k({year:S,semester:C})),P([])},[S,C]),(0,U.useEffect)(()=>{n||(g([]),m([]))},[b]),(0,U.useEffect)(()=>{_!==null&&n&&T(!0)},[_]);let{addLectures:B,removeLectures:ie,changeSemester:V,undo:ae,redo:oe,recordAction:se}=we({currentTimetableLectures:R,nonLoginTimetable:j,setNonLoginTimetable:P}),H=(0,U.useMemo)(()=>z?e=>ie([e]):void 0,[z,ie]),{onLectureSelect:ce}=Ee({currentTimetableLectures:R,undo:ae,redo:oe,addLectures:B,removeLectures:ie,timetableIds:[null,...O.data?.timetables.sort((e,t)=>e.timeTableOrder-t.timeTableOrder).map(e=>e.id)||[]],isLoggedIn:e===`success`,changeSemester:V,recordAction:se});return c(_o,{direction:n?`column`:`row`,align:`stretch`,justify:`center`,gap:n?8:12,flex:`1 0 0`,ref:d,children:n?l(u,{children:[l(yo,{ref:o,direction:`column`,gap:0,align:`stretch`,justify:`stretch`,style:w?{flex:`1 1 0`,minHeight:0}:void 0,children:[c(Ri,{timeTableLectures:R,timetablesQuery:O}),c(bo,{direction:`column`,gap:12,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:c(wo,{direction:`column`,gap:0,align:`stretch`,flex:`1 1 auto`,children:c(le,{lectures:R,needLectureDeletable:z,onLectureSelect:ce,flashLectureIds:D??void 0,deleteLecture:H,hoveredLectures:p,setHoveredLectures:m,selectedLectures:h,timeFilter:_,setTimeFilter:y})})})]}),c(To,{children:c(go,{timetableLectures:R})}),l(Eo,{direction:`row`,gap:0,children:[c(mo,{timetableName:x,timetableLectures:R,year:S,semester:C}),l(f,{direction:`row`,gap:4,align:`center`,style:{height:`100%`},onClick:()=>{T(!w)},children:[c(E,{size:16,color:t.colors.Highlight.default,children:c(M,{})}),c(A,{type:`Normal`,color:`Highlight.default`,children:w?`검색 닫기`:`과목 검색하기`})]})]}),w&&c(vo,{direction:`row`,align:`flex-start`,gap:12,ref:a,children:c(So,{children:c(ft,{timetableLectures:R,addLectures:B,onLectureSelect:ce})})}),h.length>0&&c(ee,{isOpen:h.length>0,onClose:()=>{},fullScreen:!0,header:!1,children:c(qe,{addLectures:B,removeLectures:H,onMobileModalClose:()=>{m([]),g([])},currentTimetableId:b,timetableLectures:R})})]}):l(u,{children:[c(Se,{}),l(vo,{direction:i?`column-reverse`:`row`,align:`flex-start`,gap:12,ref:a,children:[r&&c(Co,{children:c(mo,{timetableName:x,timetableLectures:R,year:S,semester:C})}),c(So,{style:{overflow:`auto`},children:c(ft,{timetableLectures:R,addLectures:B,onLectureSelect:ce})}),!i&&c(N,{direction:`column`}),c(xo,{style:{overflow:`auto`},children:c(qe,{timetableLectures:R,addLectures:B,removeLectures:H})})]}),c(f,{direction:`column`,gap:0,children:l(yo,{ref:o,direction:`column`,gap:0,style:{overflowX:`hidden`},flex:`1 1 auto`,children:[c(Ri,{timeTableLectures:R,timetablesQuery:O}),l(bo,{direction:r?`column`:`row`,gap:r?12:16,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:[c(wo,{direction:`column`,gap:0,children:c(le,{cellWidth:r?`113px`:`125px`,lectures:R,needLectureDeletable:z,onLectureSelect:ce,flashLectureIds:D??void 0,deleteLecture:H,hoveredLectures:p,setHoveredLectures:m,selectedLectures:h,timeFilter:_,setTimeFilter:y})}),!r&&c(N,{direction:`column`}),c(To,{children:c(go,{timetableLectures:R})})]})]})})]})})});export{Do as default};
//# sourceMappingURL=timetable-Cf17lbq0.js.map