(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ea4f97b985d021ab0b0948980859f9f51b2b4c96`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b5ffe896-709c-42f1-af1b-65035af102a9`,e._sentryDebugIdIdentifier=`sentry-dbid-b5ffe896-709c-42f1-af1b-65035af102a9`)}catch{}})();import{n as e,r as t,s as n,t as r}from"./jsx-runtime-vrnmIdFU.js";import{t as i}from"./react-dom-DtyAVoEp.js";import{A as a,r as o}from"./chunk-QFMPRPBF-BDALigTb.js";import{l as s,n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-Znxlh7Bw.js";import{n as d,t as f}from"./FlexWrapper-MyOy10jM.js";import{a as p,i as m,l as h,o as g,s as _,t as v}from"./useAPI-0nx3ta6r.js";import{i as y,n as b,r as x,t as S}from"./Credits-CGE-WIKn.js";import{a as C}from"./axios-Cgcr-uGn.js";import{r as w,t as T}from"./Icon-DMijsa2v.js";import{t as E}from"./IconButton-C_EaZl0X.js";import{t as D}from"./useTranslation-T8ENXDxS.js";import{t as O}from"./Close-Bia2Frud.js";import{t as k}from"./Typography-DUwzt84o.js";import{t as ee}from"./Modal-CjlipFTJ.js";import{t as A}from"./Button-KTrhD6ct.js";import{r as te}from"./proxy-qwQh1kPG.js";import{t as j}from"./StyledDivider-BW9djQt0.js";import{t as M}from"./media-DjoZw_Zv.js";import{i as N}from"./mixpanel-C1RuP1sg.js";import{t as P}from"./useIsDevice-Ci5EM-cY.js";import{t as F}from"./useThemeStore-0HnAXaH1.js";import{t as I}from"./useUserStore-C_QyVb7H.js";import{n as ne,t as L}from"./colors-CIdsBEmY.js";import{t as R}from"./LoadingCircle-JiBFWxt6.js";import{i as z,n as B,t as V}from"./ReviewBlock-Bp1G2MPr.js";import{i as H,n as U,r as re,t as ie}from"./checkEmpty-DkQg1G7A.js";import{t as ae}from"./CustomTimeTableGrid-DFoZ9Ce1.js";var W=n(e(),1),oe=n(i()),G=n(r(),1),se=w((0,G.jsx)(`path`,{d:`M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z`}),`CalendarMonth`),ce=w((0,G.jsx)(`path`,{d:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z`}),`ContentCopy`),le=w((0,G.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorder`),ue=w((0,G.jsx)(`path`,{d:`M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z`}),`Image`),de=w((0,G.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),fe=w((0,G.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`);function pe(e,t){for(let n of e)for(let e of t)if(n.day==e.day&&n.begin<e.end&&e.begin<n.end)return!0;return!1}function me(e){return e.map(e=>e.name).join(`, `)}function he(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function ge(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var _e=d(f)`
    width: 100%;
`,ve=d(f)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,ye=d(f)`
    flex: 1 0 0;
`,be=d(k)`
    white-space: nowrap;
`,xe=({selectedLecture:e})=>{let{t}=D();return e?l(u,{children:[l(_e,{direction:`column`,gap:8,children:[l(f,{direction:`row`,gap:6,children:[c(be,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.type`)}),c(k,{type:`Normal`,color:`Text.default`,children:e?.type})]}),l(f,{direction:`row`,gap:6,children:[c(be,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.department`)}),c(k,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),l(f,{direction:`row`,gap:6,children:[c(be,{type:`NormalBold`,color:`Text.default`,children:t(`common.professor`)}),c(k,{type:`Normal`,color:`Text.default`,children:me(e?.professors||[])})]}),l(f,{direction:`row`,gap:6,children:[c(be,{type:`NormalBold`,color:`Text.default`,children:t(`common.room`)}),c(k,{type:`Normal`,color:`Text.default`,children:ge(e?.classes||[])})]}),l(f,{direction:`row`,gap:6,children:[c(be,{type:`NormalBold`,color:`Text.default`,children:t(`common.limit`)}),c(k,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),l(f,{direction:`row`,gap:6,children:[c(be,{type:`NormalBold`,color:`Text.default`,children:t(`common.exam`)}),c(k,{type:`Normal`,color:`Text.default`,children:he(e?.examTimes||[])})]})]}),c(ve,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e.isEnglish?`Eng`:`한`,t(`common.language`)],[e.credit,t(`common.credit`)],[e.limitPeople===0?`0.00:1`:(e.numPeople/e.limitPeople).toFixed(2)+`:1`,t(`timetable.competitionRate`)]].map(([e,t],n)=>l(ye,{direction:`column`,gap:0,align:`center`,children:[c(k,{type:`Bigger`,color:`Text.default`,children:e}),c(k,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]}):null},Se=d(f)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,Ce=d(f)`
    flex: 1 0 0;
`,we=d.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,Te=({selectedCourseId:e,selectedProfessorId:t})=>{let{t:n}=D(),[r,i]=(0,W.useState)(!1),{query:a,setParams:o,data:s}=b(`GET`,`/reviews`,{gcTime:0,infinites:[`reviews`],limit:20}),{ref:d,inView:p}=y({threshold:0});return(0,W.useEffect)(()=>{i(!1);let n=setTimeout(()=>{o({mode:`default`,courseId:e??void 0,professorId:t??void 0}),i(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,W.useEffect)(()=>{p&&a.hasNextPage&&!a.isFetchingNextPage&&a.fetchNextPage()},[p,a]),!s||!r?c(R,{}):l(u,{children:[c(f,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:c(Se,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[[h(s?.averageGrade,s?.reviews.length),n(`common.grade`)],[h(s?.averageLoad,s?.reviews.length),n(`common.load`)],[h(s?.averageSpeech,s?.reviews.length),n(`common.speech`)]].map(([e,t],n)=>l(Ce,{direction:`column`,gap:0,align:`center`,children:[c(k,{type:`Bigger`,color:`Text.default`,children:e}),c(k,{type:`Smaller`,color:`Text.default`,children:t})]},n))})}),c(we,{}),s?.reviews.map(e=>c(V,{review:e,linkToDictionary:!0},e.id)),a.hasNextPage&&c(R,{ref:d})]})},Ee=d(f)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,De=d(f)`
    width: 100%;
`,Oe=d(f)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,ke=d(f)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`,Ae=d(o)`
    text-decoration: none;
`,je=d.a`
    text-decoration: none;
`,Me=({setNonLoginTimetable:e,handleRemoveFromTimetable:t,selectedLecture:n,onMobileModalClose:r,year:i,semester:a,currentTimetableId:o,timetableLectures:d})=>{let p=C(),m=s(),{t:h}=D(),{user:g,status:_}=I(),y=P(`tablet`),{requestFunction:b}=v(`PATCH`,`/timetables/${o}`,{onSuccess:()=>{p.invalidateQueries({queryKey:[`/timetables/${o}`]})}}),[x,w]=(0,W.useState)([]),{query:E,setParams:ee}=v(`GET`,`/users/${g?.id}/wishlist`,{enabled:_===`success`&&i!=-1});(0,W.useEffect)(()=>{i!==-1&&ee({year:i,semester:a})},[i,a,o]),(0,W.useEffect)(()=>{E.data&&w(E.data.courses.flatMap(e=>e.lectures).map(e=>e.id))},[E.data]);let{requestFunction:te}=v(`PATCH`,`/users/${g?.id}/wishlist`,{onSuccess:()=>{p.invalidateQueries({queryKey:[`/users/${g?.id}/wishlist`]})}}),j=(0,W.useRef)(null),M=e=>{let t={syy:String(i),smtDivCd:String(a),subjtCd:e.code,syllabusOpenYn:`0`};return`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${btoa(JSON.stringify(t))}`},F=async t=>{if(d){if(_!==`success`&&e!==void 0){if(d.some(e=>pe(e.classes,t.classes))){alert(h(`timetable.addLectureConflict`));return}e(e=>[...e,t]),N(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:null,isGuest:!0,source:`LectureDetail`});return}if(!o){console.warn(`No timetable selected`);return}else if(d.some(e=>pe(e.classes,t.classes))){alert(h(`timetable.addLectureConflict`));return}b({action:`add`,lectureId:t.id}),N(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:o,source:`LectureDetail`})}},ne=async(e,t)=>{if(_===`idle`)return;let n=e?`delete`:`add`;N(`Update Wishlist`,{action:n,lectureId:t,source:`LectureDetail`}),te({lectureId:t,mode:n})};return c(Ee,{direction:`column`,gap:12,align:`center`,justify:n?`start`:`center`,children:n?l(u,{children:[l(Oe,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[l(f,{direction:`row`,align:`center`,gap:8,justify:y?`space-between`:`center`,style:{width:`100%`},children:[y&&c(`div`,{style:{width:20}}),c(k,{type:`Bigger`,color:`Text.default`,children:n.name+n.subtitle}),y&&c(T,{size:20,onClick:r,color:m.colors.Text.default,children:c(O,{})})]}),c(k,{type:`Big`,color:`Text.default`,children:n.code+` `+(n.classNo==``?``:`(${n.classNo})`)})]}),l(f,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[c(Ae,{to:`/dictionary?courseId=${n.courseId}`,children:c(k,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:h(`header.dictionary`)})}),c(je,{href:M(n),target:`_blank`,children:c(k,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:h(`header.syllabus`)})})]}),c(De,{direction:`column`,gap:10,align:`center`,children:c(xe,{selectedLecture:n})}),c(De,{ref:j,direction:`column`,gap:10,children:c(Te,{selectedCourseId:n.courseId,selectedProfessorId:n.professors[0]?.id??-1})}),y&&l(ke,{direction:`row`,gap:12,justify:`flex-end`,children:[_===`success`&&l(A,{onClick:()=>{ne(x.includes(n.id),n.id),r&&r()},children:[c(T,{size:15,children:c(z,{})}),c(k,{type:`NormalBold`,children:x.includes(n.id)?h(`timetable.removeFromWishlist`):h(`timetable.addToWishlist`)})]}),(o||_!==`success`)&&(d?.some(e=>e.id===n.id)?l(A,{type:`selected`,onClick:()=>{t&&t(n.id),r&&r()},children:[c(T,{size:15,children:c(O,{})}),c(k,{type:`NormalBold`,children:h(`timetable.removeFromTimetable`)})]}):l(A,{type:`selected`,onClick:()=>{F(n),r&&r()},children:[c(T,{size:15,children:c(H,{})}),c(k,{type:`NormalBold`,children:h(`timetable.addToTimetable`)})]}))]})]}):c(S,{})})},Ne=d.div`
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

    [data-selected-lecture=""] & {
        opacity: 1;
    }

    &[data-is-selected="true"] {
        opacity: 1;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`,Pe=d(f)`
    width: 100%;
    padding: 8px 12px;
    word-break: keep-all;
`,Fe=d.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 18px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    cursor: pointer;

    &:hover,
    [data-selected-lecture="${({lectureId:e})=>e}"] &,
    [data-hovered-lectures~="${({lectureId:e})=>e}"]:not(:hover) & {
        background-color: ${({theme:e})=>e.colors.Background.Block.dark};
    }

    ${M.tablet} {
        &:hover {
            background-color: ${({theme:e})=>e.colors.Background.Block.default};
        }
        [data-hovered-lectures~="${({lectureId:e})=>e}"] & {
            background-color: ${({theme:e})=>e.colors.Background.Block.dark};
        }
    }
`,Ie=d.div`
    width: 95%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.block};
    align-self: center;
`,Le=(0,W.memo)(({course:e,wishlist:t,currentTimetableId:n,timetableLectures:r,isAddTimetablePending:i,handleSetHoveredLecture:a,handleClearHoveredLecture:o,handleSetSelectedLecture:u,selectedLecture:d,hoveredLecture:p,handleLikeClick:m,handleAddToTimetable:h,t:g})=>{let{status:_}=I(),v=s(),y=P(`tablet`),b=W.useRef(null);return(0,W.useEffect)(()=>{b.current?.setAttribute(`data-is-selected`,d?.id!=null&&e.lectures.some(e=>e.id===d.id)?`true`:`false`)},[d,e]),l(Ne,{ref:b,"data-is-selected":``,children:[l(Pe,{direction:`row`,gap:6,align:`center`,justify:`space-between`,children:[l(f,{direction:`row`,gap:6,align:`center`,style:{opacity:e.completed?.3:1},children:[c(k,{type:`NormalBold`,color:`Text.default`,children:e.name}),c(k,{type:`Normal`,color:`Text.default`,children:e.code})]}),e.completed?c(k,{type:`Normal`,color:`Text.default`,children:g(`common.completedCourse`)}):c(k,{type:`Normal`,color:`Highlight.default`,style:{textAlign:`end`},children:e.type})]}),c(Ie,{}),e.lectures.map((s,d)=>{let b=t.includes(s.id),x=p?.some(e=>e.id===s.id);return l(W.Fragment,{children:[l(Fe,{"data-lecture-id":s.id,onMouseEnter:()=>a(s),onMouseLeave:o,onClick:()=>u(s),lectureId:s.id,children:[l(f,{direction:`column`,gap:0,children:[y&&x&&l(k,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[s.department.name,` / `,s.type]}),l(f,{direction:`row`,gap:6,style:{opacity:e.completed?.3:1},children:[l(k,{type:`NormalBold`,color:`Text.default`,children:[s.classNo,` `,s.subtitle]}),c(k,{type:`Normal`,color:`Text.default`,children:me(s.professors)})]}),y&&x&&l(k,{type:`Small`,color:`Text.placeholder`,className:`onTablet`,children:[s.classes[0]?.buildingName,` `,s.classes[0]?.roomName,` /`,` `,s.limitPeople]})]}),l(f,{direction:`row`,gap:6,onClick:e=>e.stopPropagation(),children:[!y&&_===`success`&&(b?c(T,{size:15,color:v.colors.Highlight.default,onClick:()=>m(b,s.id),children:c(z,{})}):c(T,{size:15,color:v.colors.Text.default,onClick:()=>m(b,s.id),children:c(le,{})})),(!y||x)&&c(`span`,{title:n==null&&_===`success`?g(`timetable.myTimeTableLectureAddWarning`):``,style:{opacity:n==null&&_===`success`||r.some(e=>pe(e.classes,s.classes))?.3:1,cursor:i?`wait`:`pointer`},children:c(T,{size:y?30:15,color:v.colors.Text.default,onClick:()=>h(s),children:c(H,{})})})]})]}),d!==e.lectures.length-1&&c(Ie,{})]},s.id)})]})},(e,t)=>!(e.course!==t.course||e.wishlist!==t.wishlist||e.currentTimetableId!==t.currentTimetableId||e.timetableLectures!==t.timetableLectures||e.isAddTimetablePending!==t.isAddTimetablePending||e.selectedLecture!==t.selectedLecture||e.hoveredLecture!==t.hoveredLecture)),Re=d(f)`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,ze=d(f)`
    height: 36px;
`,Be=d.div`
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
`;function Ve({year:e,semester:t,timeFilter:n,setTimeFilter:r,data:i,setSearchResult:a,isWishlist:o,setIsWishlist:d,setWishlist:p,sortOption:m,setSortOption:h,handleSearch:g,t:_}){let y=s(),{user:b,status:S}=I(),{query:C,setParams:w}=v(`GET`,`/users/${b?.id}/wishlist`,{enabled:S===`success`&&e!=-1});return(0,W.useEffect)(()=>{C.data!==void 0&&a(o?C.data:i??{courses:[]})},[o,i]),(0,W.useEffect)(()=>{C.data!==void 0&&(p(C.data.courses.flatMap(e=>e.lectures).map(e=>e.id)),o&&a(C.data))},[C.data]),(0,W.useEffect)(()=>{a({courses:[]}),e!==-1&&w({year:e,semester:t})},[e,t]),(0,W.useEffect)(()=>{i!==void 0&&(a(i),d(!1))},[i]),l(u,{children:[c(Re,{direction:`row`,justify:`stretch`,gap:0,children:c(U,{options:[`type`,`department`,`level`,`term`,`time`],timeFilter:n,setTimeFilter:r,onSearch:g})}),l(f,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[l(Be,{isSelected:o,onClick:()=>{d(e=>!e)},style:{paddingBlock:10},children:[c(T,{size:15,color:y.colors.Highlight.default,children:c(o?z:le,{})}),c(k,{type:`Normal`,color:`Highlight.default`,children:_(`common.wishlist`)})]}),c(ze,{direction:`row`,gap:0,children:c(x,{options:[_(`dictionary.sortOptions.code`),_(`dictionary.sortOptions.popularity`),_(`dictionary.sortOptions.studentCount`)],setSelectedOption:h,selectedOption:m})})]})]})}var He=(0,W.memo)(Ve,(e,t)=>e.year===t.year&&e.semester===t.semester&&e.timeFilter===t.timeFilter&&e.sortOption===t.sortOption&&e.isWishlist===t.isWishlist&&e.data===t.data),Ue=d(f)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,We=d(k)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ge=d(f)`
    height: fit-content;
    overflow-y: auto;
    position: relative;
    flex-grow: 1;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    /* 상단/하단 페이드 오버레이: 자식 배경에 가려지지 않도록 컨테이너 위에 표시 */
    ${M.tablet} {
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
`,Ke=d(f)`
    width: 100%;
`,qe=d(f)`
    width: 100%;
    height: 100%;
    flex-grow: 1;

    ${M.tablet} {
        padding-right: 4px;
    }
`,Je=d.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({theme:e})=>e.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
`,Ye=e=>{if(!e)return e;let t=new Map;return e.courses.forEach(e=>{let n=t.get(e.id);if(!n){t.set(e.id,{...e,lectures:[...e.lectures]});return}let r=new Set(n.lectures.map(e=>e.id)),i=[...n.lectures];e.lectures.forEach(e=>{r.has(e.id)||(r.add(e.id),i.push(e))}),t.set(e.id,{...n,lectures:i})}),{...e,courses:Array.from(t.values())}},Xe=50,Ze=W.memo(({timetableLectures:e,year:t,semester:n,setNonLoginTimetable:r,hoveredLecture:i,setHoveredLecture:a,selectedLecture:o,setSelectedLecture:s,timeFilter:u,setTimeFilter:d,currentTimetableId:f})=>{let{t:p}=D(),{user:m,status:h}=I(),g=C(),{ref:_,inView:x}=y({threshold:0}),S=P(`tablet`),{mutation:w,requestFunction:T}=v(`PATCH`,`/timetables/${f}`,{onSuccess:()=>{g.invalidateQueries({queryKey:[`/timetables/${f}`]})}}),E=(0,W.useRef)(null),O=(0,W.useRef)(null),k=(0,W.useRef)(null),{requestFunction:ee}=v(`PATCH`,`/users/${m?.id}/wishlist`,{onSuccess:()=>{g.invalidateQueries({queryKey:[`/users/${m?.id}/wishlist`]})}}),[A,te]=(0,W.useState)(!1),[j,M]=(0,W.useState)({courses:[]}),[F,ne]=(0,W.useState)(!1),[L,z]=(0,W.useState)([]),[B,V]=(0,W.useState)(0),{query:H,setParams:U,data:re}=b(`GET`,`/lectures`,{infinites:[`courses`],limit:Xe,gcTime:0,select:Ye,enabled:A,iterate:e=>{let t=0;return e.courses.forEach(e=>{t+=e.lectures.length}),t<Xe?0:t}}),ae=(0,W.useCallback)(e=>{if(ie(e)){alert(p(`common.search.empty`));return}ne(!1),U({year:t,semester:n,...e,order:[`code`,`popular`,`studentCount`][B]??`code`,offset:0,limit:Xe,day:e.time?.day??void 0,begin:e.time?.begin??void 0,end:e.time?.end??void 0}),te(!0),N(`Search Lectures`,{year:t,semester:n,keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``})},[t,n,B]);(0,W.useEffect)(()=>{ne(!1),U(e=>({...e,order:[`code`,`popular`,`studentCount`][B]??`code`,offset:0}))},[B]),(0,W.useEffect)(()=>{x&&H.hasNextPage&&!H.isFetchingNextPage&&H.fetchNextPage()},[x]),(0,W.useEffect)(()=>{let e=e=>{E.current&&!E.current.contains(e.target)&&O.current&&O.current.contains(e.target)&&s(null)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let oe=W.useMemo(()=>j.courses.flatMap(e=>e.lectures),[j.courses]),G=(0,W.useCallback)(()=>{if(!S)return;if(!k.current){a([]);return}let e=k.current.getBoundingClientRect(),t=e.top+e.height/2,n=document.elementFromPoint(e.left+50,t);if(!n)return;let r=n.closest(`[data-lecture-id]`);if(r){let e=parseInt(r.getAttribute(`data-lecture-id`)||``,10),t=oe.find(t=>t.id===e);a(t?[t]:[])}},[S,oe,a,s]);(0,W.useEffect)(()=>{if(!S||!k.current)return;let e=k.current;return e.addEventListener(`scroll`,G),()=>{e.removeEventListener(`scroll`,G)}},[S,G]),(0,W.useEffect)(()=>{if(!S||H.isFetching||o)return;let e,t=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>{G()})});return()=>{cancelAnimationFrame(t),cancelAnimationFrame(e)}},[H.isFetching,S,G,o]);let se=async(e,t)=>{if(h===`idle`)return;let n=e?`delete`:`add`;N(`Update Wishlist`,{action:n,lectureId:t}),z(e?e=>e.filter(e=>e!==t):e=>[...e,t]);try{ee({lectureId:t,mode:n})}catch(n){console.error(`Failed to update wishlist:`,n),z(e?e=>[...e,t]:e=>e.filter(e=>e!==t))}},ce=async t=>{if(h===`success`){if(!f){console.warn(`No timetable selected`);return}if(e.some(e=>pe(e.classes,t.classes))){alert(p(`timetable.addLectureConflict`));return}T({action:`add`,lectureId:t.id}),N(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:f})}else{if(e.some(e=>pe(e.classes,t.classes))){alert(p(`timetable.addLectureConflict`));return}r(e=>[...e,t]),N(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:null,isGuest:!0})}},le=(0,W.useCallback)(e=>{S||a([e])},[S,a]),ue=(0,W.useCallback)(()=>{S||a([])},[S,a]),de=(0,W.useCallback)(e=>{if(o?.id===e.id){s(null);return}s(e)},[s,o]);return(0,W.useEffect)(()=>{k.current?.setAttribute(`data-hovered-lectures`,i.map(e=>e.id).join(` `))},[i,j]),(0,W.useEffect)(()=>{k.current?.setAttribute(`data-selected-lecture`,o?o.id.toString():``)},[o,j]),l(Ue,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,ref:O,children:[c(He,{year:t,semester:n,timeFilter:u,setTimeFilter:d,sortOption:B,setSortOption:V,data:re,isWishlist:F,setIsWishlist:ne,setWishlist:z,setSearchResult:M,t:p,handleSearch:ae}),j.courses.length===0?c(We,{type:`Bigger`,color:`Text.placeholder`,children:p(`dictionary.noResults`)}):c(Ge,{direction:`column`,gap:0,ref:k,"data-hovered-lectures":``,"data-selected-lecture":``,children:l(Ke,{direction:`row`,gap:0,children:[l(qe,{direction:`column`,gap:12,ref:E,children:[j.courses.map(t=>c(Le,{course:t,hoveredLecture:i,selectedLecture:o,wishlist:L,currentTimetableId:f,timetableLectures:e,isAddTimetablePending:w.isPending,handleSetHoveredLecture:le,handleClearHoveredLecture:ue,handleSetSelectedLecture:de,handleLikeClick:se,handleAddToTimetable:ce,t:p},t.id)),!F&&H.hasNextPage&&c(R,{ref:_})]}),S&&c(Je,{})]})})]})},(e,t)=>e.year===t.year&&e.semester===t.semester&&e.timeFilter===t.timeFilter&&e.currentTimetableId===t.currentTimetableId&&e.hoveredLecture===t.hoveredLecture&&e.selectedLecture===t.selectedLecture&&e.timetableLectures===t.timetableLectures);function Qe(){var e=[...arguments];return(0,W.useMemo)(()=>t=>{e.forEach(e=>e(t))},e)}var $e=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function et(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function tt(e){return`nodeType`in e}function K(e){return e?et(e)?e:tt(e)?e.ownerDocument?.defaultView??window:window:window}function nt(e){let{Document:t}=K(e);return e instanceof t}function rt(e){return et(e)?!1:e instanceof K(e).HTMLElement}function it(e){return e instanceof K(e).SVGElement}function at(e){return e?et(e)?e.document:tt(e)?nt(e)?e:rt(e)||it(e)?e.ownerDocument:document:document:document}var ot=$e?W.useLayoutEffect:W.useEffect;function st(e){let t=(0,W.useRef)(e);return ot(()=>{t.current=e}),(0,W.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function ct(){let e=(0,W.useRef)(null);return[(0,W.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,W.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function lt(e,t){t===void 0&&(t=[e]);let n=(0,W.useRef)(e);return ot(()=>{n.current!==e&&(n.current=e)},t),n}function ut(e,t){let n=(0,W.useRef)();return(0,W.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function dt(e){let t=st(e),n=(0,W.useRef)(null);return[n,(0,W.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function ft(e){let t=(0,W.useRef)();return(0,W.useEffect)(()=>{t.current=e},[e]),t.current}var pt={};function mt(e,t){return(0,W.useMemo)(()=>{if(t)return t;let n=pt[e]==null?0:pt[e]+1;return pt[e]=n,e+`-`+n},[e,t])}function ht(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var gt=ht(1),_t=ht(-1);function vt(e){return`clientX`in e&&`clientY`in e}function yt(e){if(!e)return!1;let{KeyboardEvent:t}=K(e.target);return t&&e instanceof t}function bt(e){if(!e)return!1;let{TouchEvent:t}=K(e.target);return t&&e instanceof t}function xt(e){if(bt(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return vt(e)?{x:e.clientX,y:e.clientY}:null}var St=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[St.Translate.toString(e),St.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),Ct=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function wt(e){return e.matches(Ct)?e:e.querySelector(Ct)}var Tt={display:`none`};function Et(e){let{id:t,value:n}=e;return W.createElement(`div`,{id:t,style:Tt},n)}function Dt(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return W.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function Ot(){let[e,t]=(0,W.useState)(``);return{announce:(0,W.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var kt=(0,W.createContext)(null);function At(e){let t=(0,W.useContext)(kt);(0,W.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function jt(){let[e]=(0,W.useState)(()=>new Set),t=(0,W.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,W.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var Mt={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Nt={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function Pt(e){let{announcements:t=Nt,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=Mt}=e,{announce:a,announcement:o}=Ot(),s=mt(`DndLiveRegion`),[c,l]=(0,W.useState)(!1);if((0,W.useEffect)(()=>{l(!0)},[]),At((0,W.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=W.createElement(W.Fragment,null,W.createElement(Et,{id:r,value:i.draggable}),W.createElement(Dt,{id:s,announcement:o}));return n?(0,oe.createPortal)(u,n):u}var q;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(q||={});function Ft(){}function It(e,t){return(0,W.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Lt(){var e=[...arguments];return(0,W.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var Rt=Object.freeze({x:0,y:0});function zt(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function Bt(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Vt(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Ht(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function Ut(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}var Wt=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=Ut(t,t.left,t.top),a=[];for(let e of r){let{id:t}=e,r=n.get(t);if(r){let n=zt(Ut(r),i);a.push({id:t,data:{droppableContainer:e,value:n}})}}return a.sort(Bt)};function Gt(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var Kt=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=Gt(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Vt)};function qt(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Jt(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Rt}function Yt(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var Xt=Yt(1);function Zt(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Qt(e,t,n){let r=Zt(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var $t={ignoreTransform:!1};function en(e,t){t===void 0&&(t=$t);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=K(e).getComputedStyle(e);t&&(n=Qt(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function tn(e){return en(e,{ignoreTransform:!0})}function nn(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function rn(e,t){return t===void 0&&(t=K(e).getComputedStyle(e)),t.position===`fixed`}function an(e,t){t===void 0&&(t=K(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function on(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(nt(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!rt(i)||it(i)||n.includes(i))return n;let a=K(e).getComputedStyle(i);return i!==e&&an(i,a)&&n.push(i),rn(i,a)?n:r(i.parentNode)}return e?r(e):n}function sn(e){let[t]=on(e,1);return t??null}function cn(e){return!$e||!e?null:et(e)?e:tt(e)?nt(e)||e===at(e).scrollingElement?window:rt(e)?e:null:null}function ln(e){return et(e)?e.scrollX:e.scrollLeft}function un(e){return et(e)?e.scrollY:e.scrollTop}function dn(e){return{x:ln(e),y:un(e)}}var J;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(J||={});function fn(e){return!$e||!e?!1:e===document.scrollingElement}function pn(e){let t={x:0,y:0},n=fn(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var mn={x:.2,y:.2};function hn(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=mn);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=pn(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=J.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=J.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=J.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=J.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function gn(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function _n(e){return e.reduce((e,t)=>gt(e,dn(t)),Rt)}function vn(e){return e.reduce((e,t)=>e+ln(t),0)}function yn(e){return e.reduce((e,t)=>e+un(t),0)}function bn(e,t){if(t===void 0&&(t=en),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);sn(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var xn=[[`x`,[`left`,`right`],vn],[`y`,[`top`,`bottom`],yn]],Sn=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=on(t),r=_n(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of xn)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},Cn=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function wn(e){let{EventTarget:t}=K(e);return e instanceof t?e:at(e)}function Tn(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var En;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(En||={});function Dn(e){e.preventDefault()}function On(e){e.stopPropagation()}var Y;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(Y||={});var kn={start:[Y.Space,Y.Enter],cancel:[Y.Esc],end:[Y.Space,Y.Enter,Y.Tab]},An=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case Y.Right:return{...n,x:n.x+25};case Y.Left:return{...n,x:n.x-25};case Y.Down:return{...n,y:n.y+25};case Y.Up:return{...n,y:n.y-25}}},jn=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new Cn(at(t)),this.windowListeners=new Cn(K(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(En.Resize,this.handleCancel),this.windowListeners.add(En.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(En.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&bn(n),t(Rt)}handleKeyDown(e){if(yt(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=kn,coordinateGetter:a=An,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:Rt;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=_t(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=pn(n),p=gn(n),m={x:Math.min(i===Y.Right?p.right-p.width/2:p.right,Math.max(i===Y.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===Y.Down?p.bottom-p.height/2:p.bottom,Math.max(i===Y.Down?p.top:p.top+p.height/2,u.y))},h=i===Y.Right&&!s||i===Y.Left&&!c,g=i===Y.Down&&!l||i===Y.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===Y.Right&&e<=d.x||i===Y.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===Y.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===Y.Down&&e<=d.y||i===Y.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===Y.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,gt(_t(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};jn.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=kn,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function Mn(e){return!!(e&&`distance`in e)}function Nn(e){return!!(e&&`delay`in e)}var Pn=class{constructor(e,t,n){n===void 0&&(n=wn(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=at(i),this.documentListeners=new Cn(this.document),this.listeners=new Cn(n),this.windowListeners=new Cn(K(i)),this.initialCoordinates=xt(r)??Rt,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(En.Resize,this.handleCancel),this.windowListeners.add(En.DragStart,Dn),this.windowListeners.add(En.VisibilityChange,this.handleCancel),this.windowListeners.add(En.ContextMenu,Dn),this.documentListeners.add(En.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Nn(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(Mn(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(En.Click,On,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(En.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=xt(e)??Rt,s=_t(n,o);if(!t&&a){if(Mn(a)){if(a.tolerance!=null&&Tn(s,a.tolerance))return this.handleCancel();if(Tn(s,a.distance))return this.handleStart()}if(Nn(a)&&Tn(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===Y.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},Fn={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},In=class extends Pn{constructor(e){let{event:t}=e,n=at(t.target);super(e,Fn,n)}};In.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var Ln={move:{name:`mousemove`},end:{name:`mouseup`}},Rn;(function(e){e[e.RightClick=2]=`RightClick`})(Rn||={});var zn=class extends Pn{constructor(e){super(e,Ln,at(e.event.target))}};zn.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Rn.RightClick?!1:(r?.({event:n}),!0)}}];var Bn={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},Vn=class extends Pn{constructor(e){super(e,Bn)}static setup(){return window.addEventListener(Bn.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Bn.move.name,e)};function e(){}}};Vn.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var Hn;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(Hn||={});var Un;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(Un||={});function Wn(e){let{acceleration:t,activator:n=Hn.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=Un.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=Kn({delta:d,disabled:!a}),[m,h]=ct(),g=(0,W.useRef)({x:0,y:0}),_=(0,W.useRef)({x:0,y:0}),v=(0,W.useMemo)(()=>{switch(n){case Hn.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Hn.DraggableRect:return i}},[n,i,c]),y=(0,W.useRef)(null),b=(0,W.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),x=(0,W.useMemo)(()=>s===Un.TreeOrder?[...l].reverse():l,[s,l]);(0,W.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of x){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=hn(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),y.current=e,m(b,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,b,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,x,u,JSON.stringify(f)])}var Gn={x:{[J.Backward]:!1,[J.Forward]:!1},y:{[J.Backward]:!1,[J.Forward]:!1}};function Kn(e){let{delta:t,disabled:n}=e,r=ft(t);return ut(e=>{if(n||!r||!e)return Gn;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[J.Backward]:e.x[J.Backward]||i.x===-1,[J.Forward]:e.x[J.Forward]||i.x===1},y:{[J.Backward]:e.y[J.Backward]||i.y===-1,[J.Forward]:e.y[J.Forward]||i.y===1}}},[n,t,r])}function qn(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return ut(e=>t==null?null:r??e??null,[r,t])}function Jn(e,t){return(0,W.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var Yn;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(Yn||={});var Xn;(function(e){e.Optimized=`optimized`})(Xn||={});var Zn=new Map;function Qn(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,W.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,W.useRef)(e),d=g(),f=lt(d),p=(0,W.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,W.useRef)(null),h=ut(t=>{if(d&&!n)return Zn;if(!t||t===Zn||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new Sn(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,W.useEffect)(()=>{u.current=e},[e]),(0,W.useEffect)(()=>{d||p()},[n,d]),(0,W.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,W.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case Yn.Always:return!1;case Yn.BeforeDragging:return n;default:return!n}}}function $n(e,t){return ut(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function er(e,t){return $n(e,t)}function tr(e){let{callback:t,disabled:n}=e,r=st(t),i=(0,W.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,W.useEffect)(()=>()=>i?.disconnect(),[i]),i}function nr(e){let{callback:t,disabled:n}=e,r=st(t),i=(0,W.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,W.useEffect)(()=>()=>i?.disconnect(),[i]),i}function rr(e){return new Sn(en(e),e)}function ir(e,t,n){t===void 0&&(t=rr);let[r,i]=(0,W.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=tr({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=nr({callback:a});return ot(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function ar(e){return Jt(e,$n(e))}var or=[];function sr(e){let t=(0,W.useRef)(e),n=ut(n=>e?n&&n!==or&&e&&t.current&&e.parentNode===t.current.parentNode?n:on(e):or,[e]);return(0,W.useEffect)(()=>{t.current=e},[e]),n}function cr(e){let[t,n]=(0,W.useState)(null),r=(0,W.useRef)(e),i=(0,W.useCallback)(e=>{let t=cn(e.target);t&&n(e=>e?(e.set(t,dn(t)),new Map(e)):null)},[]);return(0,W.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=cn(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,dn(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{cn(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,W.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>gt(e,t),Rt):_n(e):Rt,[e,t])}function lr(e,t){t===void 0&&(t=[]);let n=(0,W.useRef)(null);return(0,W.useEffect)(()=>{n.current=null},t),(0,W.useEffect)(()=>{let t=e!==Rt;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?_t(e,n.current):Rt}function ur(e){(0,W.useEffect)(()=>{if(!$e)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function dr(e,t){return(0,W.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function fr(e){return(0,W.useMemo)(()=>e?nn(e):null,[e])}var pr=[];function mr(e,t){t===void 0&&(t=en);let[n]=e,r=fr(n?K(n):null),[i,a]=(0,W.useState)(pr);function o(){a(()=>e.length?e.map(e=>fn(e)?r:new Sn(t(e),e)):pr)}let s=nr({callback:o});return ot(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function hr(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return rt(t)?t:e}function gr(e){let{measure:t}=e,[n,r]=(0,W.useState)(null),i=nr({callback:(0,W.useCallback)(e=>{for(let{target:n}of e)if(rt(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=dt((0,W.useCallback)(e=>{let n=hr(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,W.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var _r=[{sensor:In,options:{}},{sensor:jn,options:{}}],vr={current:{}},yr={draggable:{measure:tn},droppable:{measure:tn,strategy:Yn.WhileDragging,frequency:Xn.Optimized},dragOverlay:{measure:en}},br=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},xr={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new br,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ft},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:yr,measureDroppableContainers:Ft,windowRect:null,measuringScheduled:!1},Sr={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:Ft,draggableNodes:new Map,over:null,measureDroppableContainers:Ft},Cr=(0,W.createContext)(Sr),wr=(0,W.createContext)(xr);function Tr(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new br}}}function Er(e,t){switch(t.type){case q.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case q.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case q.DragEnd:case q.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case q.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new br(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case q.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new br(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case q.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new br(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function Dr(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,W.useContext)(Cr),a=ft(r),o=ft(n?.id);return(0,W.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!yt(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=wt(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function Or(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function kr(e){return(0,W.useMemo)(()=>({draggable:{...yr.draggable,...e?.draggable},droppable:{...yr.droppable,...e?.droppable},dragOverlay:{...yr.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Ar(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,W.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;ot(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Jt(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=sn(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var jr=(0,W.createContext)({...Rt,scaleX:1,scaleY:1}),Mr;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(Mr||={});var Nr=(0,W.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=_r,collisionDetection:o=Kt,measuring:s,modifiers:c,...l}=e,[u,d]=(0,W.useReducer)(Er,void 0,Tr),[f,p]=jt(),[m,h]=(0,W.useState)(Mr.Uninitialized),g=m===Mr.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:b}}=u,x=_==null?null:v.get(_),S=(0,W.useRef)({initial:null,translated:null}),C=(0,W.useMemo)(()=>_==null?null:{id:_,data:x?.data??vr,rect:S},[_,x]),w=(0,W.useRef)(null),[T,E]=(0,W.useState)(null),[D,O]=(0,W.useState)(null),k=lt(l,Object.values(l)),ee=mt(`DndDescribedBy`,t),A=(0,W.useMemo)(()=>b.getEnabled(),[b]),te=kr(s),{droppableRects:j,measureDroppableContainers:M,measuringScheduled:N}=Qn(A,{dragging:g,dependencies:[y.x,y.y],config:te.droppable}),P=qn(v,_),F=(0,W.useMemo)(()=>D?xt(D):null,[D]),I=Te(),ne=er(P,te.draggable.measure);Ar({activeNode:_==null?null:v.get(_),config:I.layoutShiftCompensation,initialRect:ne,measure:te.draggable.measure});let L=ir(P,te.draggable.measure,ne),R=ir(P?P.parentElement:null),z=(0,W.useRef)({activatorEvent:null,active:null,activeNode:P,collisionRect:null,collisions:null,droppableRects:j,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:b,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),B=b.getNodeFor(z.current.over?.id),V=gr({measure:te.dragOverlay.measure}),H=V.nodeRef.current??P,U=g?V.rect??L:null,re=!!(V.nodeRef.current&&V.rect),ie=ar(re?null:L),ae=fr(H?K(H):null),G=sr(g?B??P:null),se=mr(G),ce=Or(c,{transform:{x:y.x-ie.x,y:y.y-ie.y,scaleX:1,scaleY:1},activatorEvent:D,active:C,activeNodeRect:L,containerNodeRect:R,draggingNodeRect:U,over:z.current.over,overlayNodeRect:V.rect,scrollableAncestors:G,scrollableAncestorRects:se,windowRect:ae}),le=F?gt(F,y):null,ue=cr(G),de=lr(ue),fe=lr(ue,[L]),pe=gt(ce,de),me=U?Xt(U,ce):null,he=C&&me?o({active:C,collisionRect:me,droppableRects:j,droppableContainers:A,pointerCoordinates:le}):null,ge=Ht(he,`id`),[_e,ve]=(0,W.useState)(null),ye=qt(re?ce:gt(ce,fe),_e?.rect??null,L),be=(0,W.useRef)(null),xe=(0,W.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(w.current==null)return;let i=v.get(w.current);if(!i)return;let a=e.nativeEvent;be.current=new n({active:w.current,activeNode:i,event:a,options:r,context:z,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=k.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=k.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=w.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=k.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:S}};(0,oe.unstable_batchedUpdates)(()=>{r?.(i),h(Mr.Initializing),d({type:q.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),E(be.current),O(a)})},onMove(e){d({type:q.DragMove,coordinates:e})},onEnd:o(q.DragEnd),onCancel:o(q.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=z.current,o=null;if(t&&i){let{cancelDrop:s}=k.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===q.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=q.DragCancel)}w.current=null,(0,oe.unstable_batchedUpdates)(()=>{d({type:e}),h(Mr.Uninitialized),ve(null),E(null),O(null),be.current=null;let t=e===q.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=k.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),Se=Jn(a,(0,W.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(w.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},w.current=r,xe(n,t))},[v,xe]));ur(a),ot(()=>{L&&m===Mr.Initializing&&h(Mr.Initialized)},[L,m]),(0,W.useEffect)(()=>{let{onDragMove:e}=k.current,{active:t,activatorEvent:n,collisions:r,over:i}=z.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:pe.x,y:pe.y},over:i};(0,oe.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[pe.x,pe.y]),(0,W.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=z.current;if(!e||w.current==null||!t||!i)return;let{onDragOver:a}=k.current,o=r.get(ge),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,oe.unstable_batchedUpdates)(()=>{ve(s),a?.(c),f({type:`onDragOver`,event:c})})},[ge]),ot(()=>{z.current={activatorEvent:D,active:C,activeNode:P,collisionRect:me,collisions:he,droppableRects:j,draggableNodes:v,draggingNode:H,draggingNodeRect:U,droppableContainers:b,over:_e,scrollableAncestors:G,scrollAdjustedTranslate:pe},S.current={initial:U,translated:me}},[C,P,he,me,v,H,U,j,b,_e,G,pe]),Wn({...I,delta:y,draggingRect:me,pointerCoordinates:le,scrollableAncestors:G,scrollableAncestorRects:se});let Ce=(0,W.useMemo)(()=>({active:C,activeNode:P,activeNodeRect:L,activatorEvent:D,collisions:he,containerNodeRect:R,dragOverlay:V,draggableNodes:v,droppableContainers:b,droppableRects:j,over:_e,measureDroppableContainers:M,scrollableAncestors:G,scrollableAncestorRects:se,measuringConfiguration:te,measuringScheduled:N,windowRect:ae}),[C,P,L,D,he,R,V,v,b,j,_e,M,G,se,te,N,ae]),we=(0,W.useMemo)(()=>({activatorEvent:D,activators:Se,active:C,activeNodeRect:L,ariaDescribedById:{draggable:ee},dispatch:d,draggableNodes:v,over:_e,measureDroppableContainers:M}),[D,Se,C,L,d,ee,v,_e,M]);return W.createElement(kt.Provider,{value:p},W.createElement(Cr.Provider,{value:we},W.createElement(wr.Provider,{value:Ce},W.createElement(jr.Provider,{value:ye},i)),W.createElement(Dr,{disabled:n?.restoreFocus===!1})),W.createElement(Pt,{...n,hiddenTextDescribedById:ee}));function Te(){let e=T?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),Pr=(0,W.createContext)(null),Fr=`button`,Ir=`Draggable`;function Lr(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=mt(Ir),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,W.useContext)(Cr),{role:p=Fr,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,W.useContext)(g?jr:Pr),[v,y]=dt(),[b,x]=dt(),S=dr(o,t),C=lt(n);return ot(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:b,data:C}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,W.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===Fr?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:S,node:v,over:f,setNodeRef:y,setActivatorNodeRef:x,transform:_}}function Rr(){return(0,W.useContext)(wr)}var zr=`Droppable`,Br={timeout:25};function Vr(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=mt(zr),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,W.useContext)(Cr),u=(0,W.useRef)({disabled:n}),d=(0,W.useRef)(!1),f=(0,W.useRef)(null),p=(0,W.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...Br,...i},_=lt(h??r),v=nr({callback:(0,W.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[y,b]=dt((0,W.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),x=lt(t);return(0,W.useEffect)(()=>{!v||!y.current||(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,W.useEffect)(()=>(s({type:q.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:x}}),()=>s({type:q.UnregisterDroppable,key:a,id:r})),[r]),(0,W.useEffect)(()=>{n!==u.current.disabled&&(s({type:q.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:b}}var Hr=e=>{let{transform:t}=e;return{...t,y:0}};function Ur(e,t,n){let r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}var Wr=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:Ur(r,n,t)};function Gr(e,t,n){let r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Kr(e,t){return e.reduce((e,n,r)=>{let i=t.get(n);return i&&(e[r]=i),e},Array(e.length))}function qr(e){return e!==null&&e>=0}function Jr(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Yr(e){return typeof e==`boolean`?{draggable:e,droppable:e}:e}var Xr={scaleX:1,scaleY:1},Zr=e=>{let{rects:t,activeNodeRect:n,activeIndex:r,overIndex:i,index:a}=e,o=t[r]??n;if(!o)return null;let s=Qr(t,a,r);if(a===r){let e=t[i];return e?{x:r<i?e.left+e.width-(o.left+o.width):e.left-o.left,y:0,...Xr}:null}return a>r&&a<=i?{x:-o.width-s,y:0,...Xr}:a<r&&a>=i?{x:o.width+s,y:0,...Xr}:{x:0,y:0,...Xr}};function Qr(e,t,n){let r=e[t],i=e[t-1],a=e[t+1];return!r||!i&&!a?0:n<t?i?r.left-(i.left+i.width):a.left-(r.left+r.width):a?a.left-(r.left+r.width):r.left-(i.left+i.width)}var $r=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e,a=Gr(t,r,n),o=t[i],s=a[i];return!s||!o?null:{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}},ei=`Sortable`,ti=W.createContext({activeIndex:-1,containerId:ei,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:$r,disabled:{draggable:!1,droppable:!1}});function ni(e){let{children:t,id:n,items:r,strategy:i=$r,disabled:a=!1}=e,{active:o,dragOverlay:s,droppableRects:c,over:l,measureDroppableContainers:u}=Rr(),d=mt(ei,n),f=s.rect!==null,p=(0,W.useMemo)(()=>r.map(e=>typeof e==`object`&&`id`in e?e.id:e),[r]),m=o!=null,h=o?p.indexOf(o.id):-1,g=l?p.indexOf(l.id):-1,_=(0,W.useRef)(p),v=!Jr(p,_.current),y=g!==-1&&h===-1||v,b=Yr(a);ot(()=>{v&&m&&u(p)},[v,p,m,u]),(0,W.useEffect)(()=>{_.current=p},[p]);let x=(0,W.useMemo)(()=>({activeIndex:h,containerId:d,disabled:b,disableTransforms:y,items:p,overIndex:g,useDragOverlay:f,sortedRects:Kr(p,c),strategy:i}),[h,d,b.draggable,b.droppable,y,p,g,c,f,i]);return W.createElement(ti.Provider,{value:x},t)}var ri=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return Gr(n,r,i).indexOf(t)},ii=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:c,transition:l}=e;return!l||!r||s!==a&&i===o?!1:n?!0:o!==i&&t===c},ai={duration:200,easing:`ease`},oi=`transform`,si=St.Transition.toString({property:oi,duration:0,easing:`linear`}),ci={roleDescription:`sortable`};function li(e){let{disabled:t,index:n,node:r,rect:i}=e,[a,o]=(0,W.useState)(null),s=(0,W.useRef)(n);return ot(()=>{if(!t&&n!==s.current&&r.current){let e=i.current;if(e){let t=en(r.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&o(n)}}n!==s.current&&(s.current=n)},[t,n,r,i]),(0,W.useEffect)(()=>{a&&o(null)},[a]),a}function ui(e){let{animateLayoutChanges:t=ii,attributes:n,disabled:r,data:i,getNewIndex:a=ri,id:o,strategy:s,resizeObserverConfig:c,transition:l=ai}=e,{items:u,containerId:d,activeIndex:f,disabled:p,disableTransforms:m,sortedRects:h,overIndex:g,useDragOverlay:_,strategy:v}=(0,W.useContext)(ti),y=di(r,p),b=u.indexOf(o),x=(0,W.useMemo)(()=>({sortable:{containerId:d,index:b,items:u},...i}),[d,i,b,u]),S=(0,W.useMemo)(()=>u.slice(u.indexOf(o)),[u,o]),{rect:C,node:w,isOver:T,setNodeRef:E}=Vr({id:o,data:x,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...c}}),{active:D,activatorEvent:O,activeNodeRect:k,attributes:ee,setNodeRef:A,listeners:te,isDragging:j,over:M,setActivatorNodeRef:N,transform:P}=Lr({id:o,data:x,attributes:{...ci,...n},disabled:y.draggable}),F=Qe(E,A),I=!!D,ne=I&&!m&&qr(f)&&qr(g),L=!_&&j,R=ne?(L&&ne?P:null)??(s??v)({rects:h,activeNodeRect:k,activeIndex:f,overIndex:g,index:b}):null,z=qr(f)&&qr(g)?a({id:o,items:u,activeIndex:f,overIndex:g}):b,B=D?.id,V=(0,W.useRef)({activeId:B,items:u,newIndex:z,containerId:d}),H=u!==V.current.items,U=t({active:D,containerId:d,isDragging:j,isSorting:I,id:o,index:b,items:u,newIndex:V.current.newIndex,previousItems:V.current.items,previousContainerId:V.current.containerId,transition:l,wasDragging:V.current.activeId!=null}),re=li({disabled:!U,index:b,node:w,rect:C});return(0,W.useEffect)(()=>{I&&V.current.newIndex!==z&&(V.current.newIndex=z),d!==V.current.containerId&&(V.current.containerId=d),u!==V.current.items&&(V.current.items=u)},[I,z,d,u]),(0,W.useEffect)(()=>{if(B===V.current.activeId)return;if(B!=null&&V.current.activeId==null){V.current.activeId=B;return}let e=setTimeout(()=>{V.current.activeId=B},50);return()=>clearTimeout(e)},[B]),{active:D,activeIndex:f,attributes:ee,data:x,rect:C,index:b,newIndex:z,items:u,isOver:T,isSorting:I,isDragging:j,listeners:te,node:w,overIndex:g,over:M,setNodeRef:F,setActivatorNodeRef:N,setDroppableNodeRef:E,setDraggableNodeRef:A,transform:re??R,transition:ie()};function ie(){if(re||H&&V.current.newIndex===b)return si;if(!(L&&!yt(O)||!l)&&(I||U))return St.Transition.toString({...l,property:oi})}}function di(e,t){return typeof e==`boolean`?{draggable:e,droppable:!1}:{draggable:e?.draggable??t.draggable,droppable:e?.droppable??t.droppable}}Y.Down,Y.Right,Y.Up,Y.Left;var fi=d(f)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function pi({year:e,semester:t,setYear:n,setSemester:r,setCurrentTimetableId:i}){let a=s(),{query:o}=v(`GET`,`/semesters`);(0,W.useEffect)(()=>{let e=o.data?.semesters;if(e&&e.length>0){let t=e[e.length-1];t&&(n(t.year),r(t.semester))}},[o.data]);let{isFirstSemester:u,isLastSemester:d}=(0,W.useMemo)(()=>{if(!o.data)return{isFirstSemester:!1,isLastSemester:!1};let n=o.data.semesters,r=n[0],i=n[n.length-1];return!r||!i?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===r.year&&t===r.semester,isLastSemester:e===i.year&&t===i.semester}},[o.data,e,t]);return l(fi,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[c(E,{onClick:u?void 0:()=>{u||(t===g.SPRING?(r(g.FALL),n(e-1)):r(g.SPRING),i(null))},styles:{padding:2.5},children:c(T,{size:20,color:u?a.colors.Text.disable:a.colors.Highlight.default,onClick:u?void 0:()=>{},children:c(de,{})})}),c(k,{color:`Highlight.default`,children:e}),c(k,{color:`Highlight.default`,children:_(t)}),c(E,{onClick:d?void 0:()=>{d||(t===g.FALL?(r(g.SPRING),n(e+1)):r(g.FALL),i(null))},styles:{padding:2.5},children:c(T,{size:20,color:d?a.colors.Text.disable:a.colors.Highlight.default,onClick:d?void 0:()=>{},children:c(fe,{})})})]})}var mi=d.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,hi={default:d(mi)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:d(mi)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},gi=d.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,_i=e=>c(gi,{children:e}),vi=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=hi[e],a=()=>_i(t);return c(i,{ref:n,...r,onClick:r.onClick,children:c(a,{})})},yi=d(f)`
    width: 100%;
    max-width: 992px;

    ${M.laptop} {
        max-width: 635px;
    }

    ${M.tablet} {
        max-width: 100%;
    }
`,bi=d(f)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,xi=d(k)`
    outline: none;
    user-select: none;
`,Si=({timetable:e,isSelected:t,onClick:n,onCopy:r,onDelete:i,onNameChange:a,isDragging:o})=>{let u=s(),{attributes:d,listeners:p,setNodeRef:m,transform:h,transition:g}=ui({id:e.id});return c(`div`,{ref:m,style:{transform:(e=>{if(!e)return``;let{x:t,y:n}=e;return`translate3d(${t}px, ${n}px, 0)`})(h),transition:g,touchAction:`manipulation`,opacity:o?.5:1},...d,...p,children:l(vi,{type:t?`selected`:`default`,onClick:n,children:[c(xi,{onClick:e=>{t&&(e.stopPropagation(),e.currentTarget.contentEditable=`true`,e.currentTarget.focus())},onBlur:t=>{let n=t.currentTarget.textContent||``;t.currentTarget.contentEditable=`false`,a(e.id,n)},onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur())},contentEditable:!1,suppressContentEditableWarning:!0,type:`Normal`,color:t?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:e.name?e.name:`No Title`}),l(f,{direction:`row`,gap:0,align:`center`,children:[t&&c(E,{onClick:r,styles:{padding:5},children:c(T,{size:15,onClick:()=>{},color:t?u.colors.Highlight.default:u.colors.Text.lighter,children:c(ce,{})})}),c(E,{onClick:i,styles:{padding:3.75},children:c(T,{size:17.5,onClick:()=>{},color:t?u.colors.Highlight.default:u.colors.Text.lighter,children:c(O,{})})})]})]})})},Ci=({timeTableLectures:e,currentTimetableId:t,setCurrentTimetableId:n,setCurrentTimetableName:r,year:i,semester:a,setYear:o,setSemester:u})=>{let{t:d}=D(),{status:p}=I(),m=s(),{query:h,setParams:g}=v(`GET`,`/timetables`),{requestFunction:_}=v(`POST`,`/timetables`,{onSuccess:e=>{h.refetch(),n(e.id)}}),{requestFunction:y}=v(`DELETE`,`/timetables`,{onMutate:e=>{t===e.id&&n(null)},onSuccess:()=>{h.refetch()}}),{requestFunction:b}=v(`PATCH`,`/timetables`,{onSuccess:()=>{h.refetch()}}),[x,S]=(0,W.useState)([]),[C,w]=(0,W.useState)(null),O=Lt(It(zn,{activationConstraint:{distance:8}}),It(Vn,{activationConstraint:{delay:500,tolerance:5}}));return(0,W.useEffect)(()=>{let e=h.data?.timetables??[];e=e.filter(e=>e.year===i&&e.semester===a),S(e.slice().sort((e,t)=>e.timeTableOrder-t.timeTableOrder)),t!=null&&h.data?.timetables.forEach(e=>{e.id===t&&r(e.name)})},[h.data,i,a]),(0,W.useEffect)(()=>{p===`success`&&i!==-1&&a>0&&g({year:i,semester:a})},[i,a,p]),(0,W.useEffect)(()=>{r(t==null?d(`timetable.myTimetable`):x.find(e=>e.id===t)?.name||``)},[t]),l(yi,{direction:`row`,justify:`space-between`,align:`stretch`,flex:`0 1 auto`,gap:4,style:{overflowX:`hidden`},children:[l(f,{direction:`row`,gap:3,flex:`0 1 auto`,style:{overflowX:`auto`},children:[l(vi,{type:t==null?`selected`:`default`,onClick:()=>{n(null)},children:[c(k,{type:`Normal`,color:t===null?`Highlight.default`:`Text.lighter`,style:{paddingTop:4,paddingBottom:3.5},children:d(`timetable.myTimetable`)}),t===null&&p===`success`&&c(E,{onClick:t=>{t.stopPropagation(),_({year:i,semester:a,lectureIds:e.map(e=>e.id)})},styles:{padding:5},children:c(T,{size:15,color:m.colors.Highlight.default,onClick:()=>{},children:c(ce,{})})})]},`my-timetable`),p===`success`&&l(bi,{direction:`row`,gap:3,flex:`1 1 auto`,onWheel:e=>{if(e.deltaY===0)return;let t=e.currentTarget;t.scrollLeft+=e.deltaY},children:[c(Nr,{sensors:O,collisionDetection:Wt,onDragStart:e=>{w(e.active.id)},onDragEnd:e=>{let{active:t,over:n}=e;if(w(null),n&&t.id!==n.id){let e=x.findIndex(e=>e.id===t.id),r=x.findIndex(e=>e.id===n.id);S(Gr(x,e,r));let i=t.id;b({id:i,order:r})}},modifiers:[Hr,Wr],children:c(ni,{items:x.map(e=>e.id),strategy:Zr,children:x.map(r=>c(Si,{timetable:r,isSelected:t===r.id,isDragging:C===r.id,onClick:()=>{n(r.id)},onCopy:t=>{t.stopPropagation(),_({year:i,semester:a,lectureIds:e.map(e=>e.id)})},onDelete:e=>{e.stopPropagation(),y({id:r.id})},onNameChange:(e,t)=>{S(n=>n.map(n=>n.id===e?{...n,name:t}:n)),b({id:e,name:t})}},r.id))})}),c(vi,{onClick:()=>{_({year:i,semester:a,lectureIds:[]})},children:c(E,{onClick:e=>{},styles:{padding:3.75},children:c(T,{size:17.5,color:m.colors.Text.default,onClick:()=>{},children:c(H,{})})})})]})]}),c(f,{direction:`row`,gap:0,align:`center`,children:c(pi,{year:i,semester:a,setYear:o,setSemester:u,setCurrentTimetableId:n})})]})},wi=d.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;

    ${M.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px 8px;
    }
`,Ti=d.div`
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

    ${M.tablet} {
        padding-left: 0;
    }
`,Ei=d.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;

    ${M.mobile} {
        font-size: 12px;
    }
`,Di=d.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    white-space: nowrap;

    ${M.mobile} {
        font-size: 12px;
    }
`,Oi=d.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({theme:e})=>e.colors.Highlight.default};

    ${M.mobile} {
        display: none;
    }
`;function ki({hover:e,setHover:t,timetableLectures:n}){let{t:r}=D(),{lecturesByType:i,creditsByType:a}=(0,W.useMemo)(()=>{let e={basicRequired:0,basicElective:0,majorRequired:0,majorElective:0,humanitiesSocial:0,etc:0},t={basicRequired:[],basicElective:[],majorRequired:[],majorElective:[],humanitiesSocial:[],etc:[]};return n.forEach(n=>{n.type.includes(`기초필수`)?(e.basicRequired+=n.credit,t.basicRequired.push(n)):n.type.includes(`기초선택`)?(e.basicElective+=n.credit,t.basicElective.push(n)):n.type.includes(`전공필수`)?(e.majorRequired+=n.credit,t.majorRequired.push(n)):n.type.includes(`전공선택`)?(e.majorElective+=n.credit,t.majorElective.push(n)):n.type.includes(`인문`)?(e.humanitiesSocial+=n.credit,t.humanitiesSocial.push(n)):(e.etc+=n.credit,e.etc+=n.creditAU,t.etc.push(n))}),{lecturesByType:t,creditsByType:e}},[n]);function o(e){for(let t of[`basicRequired`,`basicElective`,`majorRequired`,`majorElective`,`humanitiesSocial`,`etc`])if(e.type.includes(r(`common.type.${t}`)))return t;return`etc`}function s(t,n){if(!e||e.length==0||e?.length>1)return``;let r=e[0];return t.map(e=>e.id).includes(r.id)?`(${r.creditAU?r.creditAU:r.credit})`:n===o(r)?`(+${r.creditAU?r.creditAU:r.credit})`:``}return l(wi,{children:[l(Ti,{onMouseEnter:()=>t(i.basicRequired),onMouseLeave:()=>t([]),children:[c(Ei,{children:r(`common.type.basicRequiredShort`)}),c(Di,{children:a.basicRequired}),c(Oi,{children:s(i.basicRequired,`basicRequired`)})]}),l(Ti,{onMouseEnter:()=>t(i.basicElective),onMouseLeave:()=>t([]),children:[c(Ei,{children:r(`common.type.basicElectiveShort`)}),c(Di,{children:a.basicElective}),c(Oi,{children:s(i.basicElective,`basicElective`)})]}),l(Ti,{onMouseEnter:()=>t(i.majorRequired),onMouseLeave:()=>t([]),children:[c(Ei,{children:r(`common.type.majorRequiredShort`)}),c(Di,{children:a.majorRequired}),c(Oi,{children:s(i.majorRequired,`majorRequired`)})]}),l(Ti,{onMouseEnter:()=>t(i.majorElective),onMouseLeave:()=>t([]),children:[c(Ei,{children:r(`common.type.majorElectiveShort`)}),c(Di,{children:a.majorElective}),c(Oi,{children:s(i.majorElective,`majorElective`)})]}),l(Ti,{onMouseEnter:()=>t(i.humanitiesSocial),onMouseLeave:()=>t([]),children:[c(Ei,{children:r(`common.type.humanitiesSocialElectiveShort`)}),c(Di,{children:a.humanitiesSocial}),c(Oi,{children:s(i.humanitiesSocial,`humanitiesSocial`)})]}),l(Ti,{onMouseEnter:()=>t(i.etc),onMouseLeave:()=>t([]),children:[c(Ei,{children:r(`common.type.etcShort`)}),c(Di,{children:a.etc}),c(Oi,{children:s(i.etc,`etc`)})]})]})}var Ai=d.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${M.mobile} {
        gap: 20px;
    }
`,ji=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,Mi=d.span`
    font-size: 20px;
    font-weight: 300;
`,Ni=d.span`
    font-size: 10px;
    font-weight: 400;
`,Pi=d.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${M.mobile} {
        gap: 20px;
    }
`,Fi=d.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`,Ii=d.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.Text.default};
`,Li=d.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.Text.dark};
`;function Ri({timetableLectures:e,hover:t,setHover:n}){let{t:r}=D(),i=(0,W.useMemo)(()=>{let n=e.reduce((e,t)=>e+t.credit,0),r=e.reduce((e,t)=>e+t.creditAU,0);if(t&&t.length==1){let i=t[0];e.some(e=>e.id===i.id)||(n+=i.credit,r+=i.creditAU)}let i=0,a=0,o=0,s=e.length;return e.forEach(e=>{i+=e.averageGrade,a+=e.averageLoad,o+=e.averageSpeech,e.averageGrade===0&&e.averageLoad===0&&e.averageSpeech===0&&--s}),i/=s,a/=s,o/=s,{totalCredits:n,totalAU:r,avgGrade:i,avgLoad:a,avgSpeech:o}},[e,t]);return l(u,{children:[l(Ai,{children:[l(ji,{onMouseEnter:()=>n(e.filter(e=>e.credit>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.credit>0),children:[c(Mi,{children:i.totalCredits}),c(Ni,{children:r(`common.credit`)})]}),l(ji,{onMouseEnter:()=>n(e.filter(e=>e.creditAU>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(e=>e.creditAU>0),children:[c(Mi,{children:i.totalAU}),c(Ni,{children:`AU`})]})]}),l(Pi,{children:[l(Fi,{children:[c(Ii,{children:h(i.avgGrade/3)}),c(Li,{children:r(`common.grade`)})]}),l(Fi,{children:[c(Ii,{children:h(i.avgLoad/3)}),c(Li,{children:r(`common.load`)})]}),l(Fi,{children:[c(Ii,{children:h(i.avgSpeech/3)}),c(Li,{children:r(`common.speech`)})]})]})]})}var zi=d(f)`
    overflow-y: auto;
    min-height: 0;
`,Bi=d.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`,Vi=d.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({color:e,theme:t})=>e||t.colors.Text.default};
    min-width: 16px;
`,Hi=d(f)`
    color: ${({highlighted:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,Ui=[{day:m.Mon,color:`#E54C65`},{day:m.Tue,color:`#F5A623`},{day:m.Wed,color:`#7ED321`},{day:m.Thu,color:`#4A90D9`},{day:m.Fri,color:`#9B59B6`}];function Wi({timetableLectures:e,hover:t,setHover:n}){let{t:r}=D(),i=(0,W.useMemo)(()=>{let n={[m.Mon]:[],[m.Tue]:[],[m.Wed]:[],[m.Thu]:[],[m.Fri]:[]};if(e.forEach(e=>{e.examTimes.forEach(t=>{if(t==null)return;let r=t.day;n[r]&&n[r].push({lectureName:e.name,lectureId:e.id,time:t.str.split(` `).slice(1).join(` `)})})}),t&&t.length==1){let r=t[0];e.some(e=>e.id===r.id)||r.examTimes.forEach(e=>{if(e==null)return;let t=e.day;n[t]&&n[t].push({lectureName:r.name,lectureId:r.id,time:e.str})})}return n},[e,t]);return l(zi,{direction:`column`,gap:15,style:{width:`100%`},flex:`1 1 0`,children:[c(k,{type:`NormalBold`,color:`Text.default`,children:r(`timetable.examTimetable`)}),Ui.map(({day:r,color:a})=>{let o=i[r];return!o||o.length===0?null:l(Bi,{children:[c(Vi,{color:a,onMouseEnter:()=>{n(e.filter(e=>e.examTimes.some(e=>e?.day===r)))},onMouseLeave:()=>n([]),children:p(r,!0)}),c(f,{direction:`column`,gap:2,children:o.sort((e,t)=>e.time.localeCompare(t.time)).map((r,i)=>l(Hi,{direction:`column`,gap:0,highlighted:t?.some(e=>e.id===r.lectureId),onMouseEnter:()=>n(e.filter(e=>e.id===r.lectureId)),onMouseLeave:()=>n([]),children:[c(k,{type:`NormalBold`,children:r.lectureName}),c(k,{type:`Normal`,children:r.time})]},i))})]},r)})]})}var Gi=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(e=>e??`#CCCCCC`),Ki=d.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`,qi=d.img`
    object-fit: cover;
    object-position: center;
    filter: ${({isDarkMode:e})=>e?`invert(100%) sepia(100%) grayscale(100%) brightness(0.7)`:`none`};

    /* Performance Optimization: Force GPU layer to prevent repaints on hover */
    transform: translateZ(0);
    will-change: filter;
`,Ji=d.div`
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
`,Yi=d.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({theme:e})=>e.colors.Background.Section.default};
    position: absolute;
    top: 17px;
`,Xi=d.div`
    background-color: ${({theme:e,courseId:t,highlighted:n})=>n?e.colors.Highlight.default:(()=>{let n=Gi(e.colors?.Tile?.TimeTable?.default);return n[t%n.length]})()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`,Zi=new Map([[`E2`,{left:50,top:67}],[`E3`,{left:56,top:61}],[`E6`,{left:57,top:52}],[`E7`,{left:65,top:50}],[`E11`,{left:45,top:47}],[`E16`,{left:45,top:40}],[`N1`,{left:75,top:30}],[`N3`,{left:45,top:34}],[`N4`,{left:53,top:32}],[`N5`,{left:63,top:28}],[`N7`,{left:27,top:30}],[`N22`,{left:67,top:26}],[`N24`,{left:65,top:22}],[`N25`,{left:49,top:26}],[`N27`,{left:47,top:17}],[`W1`,{left:26,top:68}],[`W8`,{left:27,top:44}],[`W16`,{left:34,top:73}]]);function Qi({timetableLectures:e,hover:t,setHover:n}){let{displayedTheme:r}=F();return l(Ki,{children:[(0,W.useMemo)(()=>c(qi,{src:`/campus_map.svg`,alt:`Campus Map`,isDarkMode:r===`dark`,decoding:`async`}),[r]),Array.from(Zi).map(([r,{left:i,top:a}])=>{let o=e.filter(e=>e.classes.some(e=>e.buildingCode.includes(r)));return t?.forEach(t=>{e.includes(t)||t.classes.some(e=>e.buildingCode.includes(r))&&o.push(t)}),o.length===0?null:l(Ji,{left:i,top:a,onMouseEnter:()=>{n(o)},onMouseLeave:()=>{n([])},highlighted:t?.some(e=>o.includes(e))??!1,children:[c(Yi,{}),r,o.map(e=>c(Xi,{courseId:e.courseId,highlighted:t?.includes(e)??!1},e.id))]},r)})]})}var $i=t((e=>{e.createCanvas=function(e,t){return Object.assign(document.createElement(`canvas`),{width:e,height:t})},e.loadImage=function(e,t){return new Promise(function(n,r){let i=Object.assign(document.createElement(`img`),t);function a(){i.onload=null,i.onerror=null}i.onload=function(){a(),n(i)},i.onerror=function(){a(),r(Error(`Failed to load the image "`+e+`"`))},i.src=e})}}))(),ea=(e=>(e.DAILY=`DAILY`,e.HOURLY=`HOURLY`,e.MINUTELY=`MINUTELY`,e.MONTHLY=`MONTHLY`,e.SECONDLY=`SECONDLY`,e.WEEKLY=`WEEKLY`,e.YEARLY=`YEARLY`,e))(ea||{}),ta=(e=>(e.FR=`FR`,e.MO=`MO`,e.SA=`SA`,e.SU=`SU`,e.TH=`TH`,e.TU=`TU`,e.WE=`WE`,e))(ta||{});function X(e,t,n){if(Array.isArray(t))e.x=t.map(e=>{if(Array.isArray(e))return e;if(typeof e.key!=`string`||typeof e.value!=`string`)throw Error(`Either key or value is not a string!`);if(e.key.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e.key,e.value]});else if(typeof t==`object`)e.x=Object.entries(t).map(([e,t])=>{if(typeof e!=`string`||typeof t!=`string`)throw Error(`Either key or value is not a string!`);if(e.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");return[e,t]});else if(typeof t==`string`&&typeof n==`string`){if(t.substr(0,2)!==`X-`)throw Error("Key has to start with `X-`!");e.x.push([t,n])}else return e.x.map(e=>({key:e[0],value:e[1]}))}function na(e,t){if(e instanceof Date&&isNaN(e.getTime())||typeof e==`string`&&isNaN(new Date(e).getTime()))throw Error(`\`${t}\` has to be a valid date!`);if(e instanceof Date||typeof e==`string`||typeof e==`object`&&e&&(_a(e)||ga(e)||ha(e)||ma(e))||ca(e)&&e.isValid===!0||(la(e)||sa(e))&&e.isValid())return e;throw Error(`\`${t}\` has to be a valid date!`)}function Z(e,t){let n=Object.values(e),r=String(t).toUpperCase();if(!r||!n.includes(r))throw Error(`Input must be one of the following: ${n.join(`, `)}`);return r}function ra(e,t){let n=null;if(typeof t==`string`){let e=t.match(/^(.+) ?<([^>]+)>$/);e?n={email:e[2].trim(),name:e[1].trim()}:t.includes(`@`)&&(n={email:t.trim(),name:t.trim()})}else typeof t==`object`&&(n={email:t.email,mailto:t.mailto,name:t.name,sentBy:t.sentBy});if(!n&&typeof t==`string`)throw Error("`"+e+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n)throw Error("`"+e+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n.name)throw Error("`"+e+".name` is empty!");if(!n.email)throw Error("`"+e+".email` is empty!");return n}function Q(e,t){return String(e).replace(t?/[\\"]/g:/[\\;,]/g,function(e){return`\\`+e}).replace(/(?:\r\n|\r|\n)/g,`\\n`)}function ia(e){return e.split(`\r
`).map(function(e){let t=``,n=0;for(let r=0;r<e.length;r++){let i=e.charAt(r);i>=`\ud800`&&i<=`\udbff`&&(i+=e.charAt(++r));let a=new TextEncoder().encode(i).length;n+=a,n>74&&(t+=`\r
 `,n=a),t+=i}return t}).join(`\r
`)}function $(e,t,n,r){if(e?.startsWith(`/`)&&(e=e.substr(1)),typeof t==`string`||t instanceof Date){let i=va(t)?t.withTimeZone(e):new Date(t),a=i.getUTCFullYear()+String(i.getUTCMonth()+1).padStart(2,`0`)+i.getUTCDate().toString().padStart(2,`0`);return e&&(a=i.getFullYear()+String(i.getMonth()+1).padStart(2,`0`)+i.getDate().toString().padStart(2,`0`)),n?a:e?(a+=`T`+i.getHours().toString().padStart(2,`0`)+i.getMinutes().toString().padStart(2,`0`)+i.getSeconds().toString().padStart(2,`0`),a):(a+=`T`+i.getUTCHours().toString().padStart(2,`0`)+i.getUTCMinutes().toString().padStart(2,`0`)+i.getUTCSeconds().toString().padStart(2,`0`)+(r?``:`Z`),a)}else if(la(t)){let i=e?da(t)&&!t.tz()?t.clone().tz(e):t:r||n&&da(t)&&t.tz()?t:t.utc();return i.format(`YYYYMMDD`)+(n?``:`T`+i.format(`HHmmss`)+(r||e?``:`Z`))}else if(ca(t)){let i=e?t.setZone(e):r||n&&t.zone.type!==`system`?t:t.setZone(`utc`);return i.toFormat(`yyyyLLdd`)+(n?``:`T`+i.toFormat(`HHmmss`)+(r||e?``:`Z`))}else if(_a(t)){let i=t;return e&&(i=t.withTimeZone(t.timeZoneId)),!e&&t.timeZoneId!==`UTC`&&(i=t.withTimeZone(`UTC`)),$(null,i.toPlainDateTime(),n,r||!!e)}else if(ga(t)){if(n)return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`);if(e){let i=t.toZonedDateTime(e);return $(e,i,n,r)}return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`)+`T`+t.hour.toString().padStart(2,`0`)+t.minute.toString().padStart(2,`0`)+t.second.toString().padStart(2,`0`)+(r||e?``:`Z`)}else{if(ha(t))return t.year+t.month.toString().padStart(2,`0`)+t.day.toString().padStart(2,`0`)+(n?``:`T000000`+(r||e?``:`Z`));if(ma(t)){let i=e||`UTC`,a=t.toZonedDateTimeISO(i);return $(e,a,n,r)}else{let i=t;if(e)i=typeof t.tz==`function`?t.tz(e):t;else if(!r)if(typeof t.utc==`function`)i=t.utc();else throw Error(`Unable to convert dayjs object to UTC value: UTC plugin is not available!`);return i.format(`YYYYMMDD`)+(n?``:`T`+i.format(`HHmmss`)+(r||e?``:`Z`))}}}function aa(e,t,n,r){let i=``,a=r?.floating||!1;return r?.timezone&&(i=`;TZID=`+r.timezone,a=!0),t+i+`:`+$(e,n,!1,a)}function oa(e){let t=e.x.map(([e,t])=>e.toUpperCase()+`:`+Q(t,!1)).join(`\r
`);return t.length?t+`\r
`:``}function sa(e){return typeof e==`object`&&!!e&&!(e instanceof Date)&&!la(e)&&!ca(e)&&!pa(e)}function ca(e){return typeof e==`object`&&!!e&&`toJSDate`in e&&typeof e.toJSDate==`function`&&!pa(e)}function la(e){return e!=null&&e._isAMomentObject!=null&&!pa(e)}function ua(e){return typeof e==`object`&&!!e&&`asSeconds`in e&&typeof e.asSeconds==`function`}function da(e){return la(e)&&`tz`in e&&typeof e.tz==`function`}function fa(e){return typeof e==`object`&&!!e&&`between`in e&&typeof e.between==`function`&&typeof e.toString==`function`}function pa(e){return _a(e)||ga(e)||ha(e)||ma(e)}function ma(e){return typeof e==`object`&&!!e&&!_a(e)&&!ga(e)&&!ha(e)&&`toZonedDateTimeISO`in e&&typeof e.toZonedDateTimeISO==`function`&&!(`year`in e)&&!(`timeZoneId`in e)}function ha(e){return typeof e==`object`&&!!e&&!_a(e)&&!ga(e)&&`toPlainDateTime`in e&&typeof e.toPlainDateTime==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&!(`hour`in e)&&!(`timeZoneId`in e)&&!(`epochSeconds`in e)}function ga(e){return typeof e==`object`&&!!e&&!_a(e)&&`toZonedDateTime`in e&&typeof e.toZonedDateTime==`function`&&`toPlainDate`in e&&typeof e.toPlainDate==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&`hour`in e&&typeof e.hour==`number`&&`minute`in e&&typeof e.minute==`number`&&`second`in e&&typeof e.second==`number`&&!(`timeZone`in e)}function _a(e){return typeof e==`object`&&!!e&&`timeZoneId`in e&&typeof e.timeZoneId==`string`&&`toPlainDateTime`in e&&typeof e.toPlainDateTime==`function`&&`year`in e&&typeof e.year==`number`&&`month`in e&&typeof e.month==`number`&&`day`in e&&typeof e.day==`number`&&`hour`in e&&typeof e.hour==`number`&&`minute`in e&&typeof e.minute==`number`&&`second`in e&&typeof e.second==`number`}function va(e){return e instanceof Date&&`internal`in e&&e.internal instanceof Date&&`withTimeZone`in e&&typeof e.withTimeZone==`function`&&`tzComponents`in e&&typeof e.tzComponents==`function`}function ya(e){if(typeof e==`string`||e instanceof Date)return new Date(e);if(_a(e)){let t=e.toInstant();return new Date(t.epochMilliseconds)}return ga(e)?new Date(Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)):ha(e)?new Date(Date.UTC(e.year,e.month-1,e.day)):ma(e)?new Date(e.epochMilliseconds):ca(e)?e.toJSDate():e.toDate()}function ba(e){let t=``;return e<0&&(t=`-`,e*=-1),t+=`P`,e>=86400&&(t+=Math.floor(e/86400)+`D`,e%=86400),!e&&t.length>1||(t+=`T`,e>=3600&&(t+=Math.floor(e/3600)+`H`,e%=3600),e>=60&&(t+=Math.floor(e/60)+`M`,e%=60),e>0?t+=e+`S`:t.length<=2&&(t+=`0S`)),t}function xa(e){return e?typeof e==`string`?e:_a(e)?xa(e.withTimeZone(`UTC`).toPlainDateTime()):(pa(e),e.toJSON()):null}var Sa=(e=>(e.CHAIR=`CHAIR`,e.NON=`NON-PARTICIPANT`,e.OPT=`OPT-PARTICIPANT`,e.REQ=`REQ-PARTICIPANT`,e))(Sa||{}),Ca=(e=>(e.CLIENT=`CLIENT`,e.NONE=`NONE`,e.SERVER=`SERVER`,e))(Ca||{}),wa=(e=>(e.ACCEPTED=`ACCEPTED`,e.DECLINED=`DECLINED`,e.DELEGATED=`DELEGATED`,e.NEEDSACTION=`NEEDS-ACTION`,e.TENTATIVE=`TENTATIVE`,e))(wa||{}),Ta=(e=>(e.GROUP=`GROUP`,e.INDIVIDUAL=`INDIVIDUAL`,e.RESOURCE=`RESOURCE`,e.ROOM=`ROOM`,e.UNKNOWN=`UNKNOWN`,e))(Ta||{}),Ea=class e{data;parent;constructor(e,t){if(this.data={delegatedFrom:null,delegatedTo:null,email:``,mailto:null,name:null,role:`REQ-PARTICIPANT`,rsvp:null,scheduleAgent:null,sentBy:null,status:null,type:null,x:[]},this.parent=t,!this.parent)throw Error("`event` option required!");if(!e.email)throw Error("No value for `email` in ICalAttendee given!");e.name!==void 0&&this.name(e.name),e.email!==void 0&&this.email(e.email),e.mailto!==void 0&&this.mailto(e.mailto),e.sentBy!==void 0&&this.sentBy(e.sentBy),e.status!==void 0&&this.status(e.status),e.role!==void 0&&this.role(e.role),e.rsvp!==void 0&&this.rsvp(e.rsvp),e.type!==void 0&&this.type(e.type),e.delegatedTo!==void 0&&this.delegatedTo(e.delegatedTo),e.delegatedFrom!==void 0&&this.delegatedFrom(e.delegatedFrom),e.delegatesTo&&this.delegatesTo(e.delegatesTo),e.delegatesFrom&&this.delegatesFrom(e.delegatesFrom),e.scheduleAgent!==void 0&&this.scheduleAgent(e.scheduleAgent),e.x!==void 0&&this.x(e.x)}delegatedFrom(t){return t===void 0?this.data.delegatedFrom:(t?typeof t==`string`?this.data.delegatedFrom=new e(ra(`delegatedFrom`,t),this.parent):t instanceof e?this.data.delegatedFrom=t:this.data.delegatedFrom=new e(t,this.parent):this.data.delegatedFrom=null,this)}delegatedTo(t){return t===void 0?this.data.delegatedTo:t?(typeof t==`string`?this.data.delegatedTo=new e(ra(`delegatedTo`,t),this.parent):t instanceof e?this.data.delegatedTo=t:this.data.delegatedTo=new e(t,this.parent),this.data.status=`DELEGATED`,this):(this.data.delegatedTo=null,this.data.status===`DELEGATED`&&(this.data.status=null),this)}delegatesFrom(t){let n=t instanceof e?t:this.parent.createAttendee(t);return this.delegatedFrom(n),n.delegatedTo(this),n}delegatesTo(t){let n=t instanceof e?t:this.parent.createAttendee(t);return this.delegatedTo(n),n.delegatedFrom(this),n}email(e){return e?(this.data.email=e,this):this.data.email}mailto(e){return e===void 0?this.data.mailto:(this.data.mailto=e||null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e||null,this)}role(e){return e===void 0?this.data.role:(this.data.role=Z(Sa,e),this)}rsvp(e){return e===void 0?this.data.rsvp:e===null?(this.data.rsvp=null,this):(this.data.rsvp=!!e,this)}scheduleAgent(e){return e===void 0?this.data.scheduleAgent:e?typeof e==`string`&&e.toUpperCase().startsWith(`X-`)?(this.data.scheduleAgent=e,this):(this.data.scheduleAgent=Z(Ca,e),this):(this.data.scheduleAgent=null,this)}sentBy(e){return e?(this.data.sentBy=e,this):this.data.sentBy}status(e){return e===void 0?this.data.status:e?(this.data.status=Z(wa,e),this):(this.data.status=null,this)}toJSON(){return Object.assign({},this.data,{delegatedFrom:this.data.delegatedFrom?.email()||null,delegatedTo:this.data.delegatedTo?.email()||null,x:this.x()})}toString(){let e=`ATTENDEE`;if(!this.data.email)throw Error("No value for `email` in ICalAttendee given!");return e+=`;ROLE=`+this.data.role,this.data.type&&(e+=`;CUTYPE=`+this.data.type),this.data.status&&(e+=`;PARTSTAT=`+this.data.status),this.data.rsvp!==null&&(e+=`;RSVP=`+this.data.rsvp.toString().toUpperCase()),this.data.sentBy!==null&&(e+=`;SENT-BY="mailto:`+this.data.sentBy+`"`),this.data.delegatedTo&&(e+=`;DELEGATED-TO="`+this.data.delegatedTo.email()+`"`),this.data.delegatedFrom&&(e+=`;DELEGATED-FROM="`+this.data.delegatedFrom.email()+`"`),this.data.name&&(e+=`;CN="`+Q(this.data.name,!0)+`"`),this.data.email&&this.data.mailto&&(e+=`;EMAIL=`+Q(this.data.email,!1)),this.data.scheduleAgent&&(e+=`;SCHEDULE-AGENT=`+this.data.scheduleAgent),this.data.x.length&&(e+=`;`+this.data.x.map(([e,t])=>e.toUpperCase()+`=`+Q(t,!1)).join(`;`)),e+=`:MAILTO:`+Q(this.data.mailto||this.data.email,!1)+`\r
`,e}type(e){return e===void 0?this.data.type:e?(this.data.type=Z(Ta,e),this):(this.data.type=null,this)}x(e,t){if(e===void 0)return X(this.data);if(typeof e==`string`&&typeof t==`string`)X(this.data,e,t);else if(typeof e==`object`)X(this.data,e);else throw Error(`Either key or value is not a string!`);return this}},Da=(e=>(e.audio=`audio`,e.display=`display`,e.email=`email`,e))(Da||{}),Oa={end:`END`,start:`START`},ka=class{data;event;constructor(e,t){if(this.data={attach:null,attendees:[],description:null,interval:null,relatesTo:null,repeat:null,summary:null,trigger:-600,type:`display`,x:[]},this.event=t,!t)throw Error("`event` option required!");e.type!==void 0&&this.type(e.type),`trigger`in e&&e.trigger!==void 0&&this.trigger(e.trigger),`triggerBefore`in e&&e.triggerBefore!==void 0&&this.triggerBefore(e.triggerBefore),`triggerAfter`in e&&e.triggerAfter!==void 0&&this.triggerAfter(e.triggerAfter),e.repeat&&this.repeat(e.repeat),e.attach!==void 0&&this.attach(e.attach),e.description!==void 0&&this.description(e.description),e.summary!==void 0&&this.summary(e.summary),e.attendees!==void 0&&this.attendees(e.attendees),e.x!==void 0&&this.x(e.x)}attach(e){if(e===void 0)return this.data.attach;if(!e)return this.data.attach=null,this;let t;if(typeof e==`string`)t={mime:null,uri:e};else if(typeof e==`object`)t={mime:e.mime||null,uri:e.uri};else throw Error("`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalAlarm.html#attach");if(!t.uri)throw Error("`attach.uri` is empty!");return this.data.attach={mime:t.mime,uri:t.uri},this}attendees(e){return e?(e.forEach(e=>this.createAttendee(e)),this):this.data.attendees}createAttendee(e){if(e instanceof Ea)return this.data.attendees.push(e),e;typeof e==`string`&&(e=ra(`data`,e));let t=new Ea(e,this);return this.data.attendees.push(t),t}description(e){return e===void 0?this.data.description:e?(this.data.description=e,this):(this.data.description=null,this)}relatesTo(e){if(e===void 0)return this.data.relatesTo;if(!e)return this.data.relatesTo=null,this;if(!Object.values(Oa).includes(e))throw Error("`relatesTo` is not correct, must be either `START` or `END`!");return this.data.relatesTo=e,this}repeat(e){if(e===void 0)return this.data.repeat;if(!e)return this.data.repeat=null,this;if(typeof e!=`object`)throw Error("`repeat` is not correct, must be an object!");if(typeof e.times!=`number`||!isFinite(e.times))throw Error("`repeat.times` is not correct, must be numeric!");if(typeof e.interval!=`number`||!isFinite(e.interval))throw Error("`repeat.interval` is not correct, must be numeric!");return this.data.repeat=e,this}summary(e){return e===void 0?this.data.summary:e?(this.data.summary=e,this):(this.data.summary=null,this)}toJSON(){let e=this.trigger();return Object.assign({},this.data,{trigger:typeof e==`number`?e:xa(e),x:this.x()})}toString(){let e=`BEGIN:VALARM\r
`;if(e+=`ACTION:`+this.data.type.toUpperCase()+`\r
`,typeof this.data.trigger==`number`&&this.data.relatesTo===null?this.data.trigger>0?e+=`TRIGGER;RELATED=END:`+ba(this.data.trigger)+`\r
`:e+=`TRIGGER:`+ba(this.data.trigger)+`\r
`:typeof this.data.trigger==`number`?e+=`TRIGGER;RELATED=`+this.data.relatesTo?.toUpperCase()+`:`+ba(this.data.trigger)+`\r
`:e+=`TRIGGER;VALUE=DATE-TIME:`+$(this.event.timezone(),this.data.trigger)+`\r
`,this.data.repeat){if(!this.data.repeat.times)throw Error("No value for `repeat.times` in ICalAlarm given, but required for `interval`!");if(!this.data.repeat.interval)throw Error("No value for `repeat.interval` in ICalAlarm given, but required for `repeat`!");e+=`REPEAT:`+this.data.repeat.times+`\r
`,e+=`DURATION:`+ba(this.data.repeat.interval)+`\r
`}return this.data.type===`audio`&&this.data.attach&&this.data.attach.mime?e+=`ATTACH;FMTTYPE=`+Q(this.data.attach.mime,!1)+`:`+Q(this.data.attach.uri,!1)+`\r
`:this.data.type===`audio`&&this.data.attach?e+=`ATTACH;VALUE=URI:`+Q(this.data.attach.uri,!1)+`\r
`:this.data.type===`audio`&&(e+=`ATTACH;VALUE=URI:Basso\r
`),this.data.type!==`audio`&&this.data.description?e+=`DESCRIPTION:`+Q(this.data.description,!1)+`\r
`:this.data.type!==`audio`&&(e+=`DESCRIPTION:`+Q(this.event.summary(),!1)+`\r
`),this.data.type===`email`&&this.data.summary?e+=`SUMMARY:`+Q(this.data.summary,!1)+`\r
`:this.data.type===`email`&&(e+=`SUMMARY:`+Q(this.event.summary(),!1)+`\r
`),this.data.type===`email`&&this.data.attendees.forEach(t=>{e+=t.toString()}),e+=oa(this.data),e+=`END:VALARM\r
`,e}trigger(e){if(e===void 0&&typeof this.data.trigger==`number`)return-1*this.data.trigger;if(e===void 0)return this.data.trigger;if(typeof e==`number`&&isFinite(e))this.data.trigger=-1*e;else{if(!e||typeof e==`number`)throw Error("`trigger` is not correct, must be a finite number or a supported date!");this.data.trigger=na(e,`trigger`)}return this}triggerAfter(e){return e===void 0?this.data.trigger:this.trigger(typeof e==`number`?-1*e:e)}triggerBefore(e){return e===void 0?this.trigger():this.trigger(e)}type(e){if(e===void 0)return this.data.type;if(!e||!Object.keys(Da).includes(e))throw Error("`type` is not correct, must be either `display` or `audio`!");return this.data.type=e,this}x(e,t){if(e===void 0)return X(this.data);if(typeof e==`string`&&typeof t==`string`)X(this.data,e,t);else if(typeof e==`object`)X(this.data,e);else throw Error(`Either key or value is not a string!`);return this}},Aa=class{data;constructor(e){if(this.data={name:``},!e.name)throw Error("No value for `name` in ICalCategory given!");this.name(e.name)}name(e){return e===void 0?this.data.name:(this.data.name=e,this)}toJSON(){return Object.assign({},this.data)}toString(){return Q(this.data.name,!1)}},ja=(e=>(e.BUSY=`BUSY`,e.FREE=`FREE`,e.OOF=`OOF`,e.TENTATIVE=`TENTATIVE`,e))(ja||{}),Ma=(e=>(e.CONFIDENTIAL=`CONFIDENTIAL`,e.PRIVATE=`PRIVATE`,e.PUBLIC=`PUBLIC`,e))(Ma||{}),Na=(e=>(e.CANCELLED=`CANCELLED`,e.CONFIRMED=`CONFIRMED`,e.TENTATIVE=`TENTATIVE`,e))(Na||{}),Pa=(e=>(e.OPAQUE=`OPAQUE`,e.TRANSPARENT=`TRANSPARENT`,e))(Pa||{}),Fa=class{calendar;data;constructor(e,t){if(this.data={alarms:[],allDay:!1,attachments:[],attendees:[],busystatus:null,categories:[],class:null,created:null,description:null,end:null,floating:!1,id:crypto.randomUUID(),lastModified:null,location:null,organizer:null,priority:null,recurrenceId:null,repeating:null,sequence:0,stamp:new Date,start:new Date,status:null,summary:``,timezone:null,transparency:null,url:null,x:[]},this.calendar=t,!t)throw Error("`calendar` option required!");e.id&&this.id(e.id),e.sequence!==void 0&&this.sequence(e.sequence),e.start&&this.start(e.start),e.end!==void 0&&this.end(e.end),e.recurrenceId!==void 0&&this.recurrenceId(e.recurrenceId),e.timezone!==void 0&&this.timezone(e.timezone),e.stamp!==void 0&&this.stamp(e.stamp),e.allDay!==void 0&&this.allDay(e.allDay),e.floating!==void 0&&this.floating(e.floating),e.repeating!==void 0&&this.repeating(e.repeating),e.summary!==void 0&&this.summary(e.summary),e.location!==void 0&&this.location(e.location),e.description!==void 0&&this.description(e.description),e.organizer!==void 0&&this.organizer(e.organizer),e.attendees!==void 0&&this.attendees(e.attendees),e.alarms!==void 0&&this.alarms(e.alarms),e.categories!==void 0&&this.categories(e.categories),e.status!==void 0&&this.status(e.status),e.busystatus!==void 0&&this.busystatus(e.busystatus),e.priority!==void 0&&this.priority(e.priority),e.url!==void 0&&this.url(e.url),e.attachments!==void 0&&this.attachments(e.attachments),e.transparency!==void 0&&this.transparency(e.transparency),e.created!==void 0&&this.created(e.created),e.lastModified!==void 0&&this.lastModified(e.lastModified),e.class!==void 0&&this.class(e.class),e.x!==void 0&&this.x(e.x)}alarms(e){return e?(e.forEach(e=>this.createAlarm(e)),this):this.data.alarms}allDay(e){return e===void 0?this.data.allDay:(this.data.allDay=!!e,this)}attachments(e){return e?(e.forEach(e=>this.createAttachment(e)),this):this.data.attachments}attendees(e){return e?(e.forEach(e=>this.createAttendee(e)),this):this.data.attendees}busystatus(e){return e===void 0?this.data.busystatus:e===null?(this.data.busystatus=null,this):(this.data.busystatus=Z(ja,e),this)}categories(e){return e?(e.forEach(e=>this.createCategory(e)),this):this.data.categories}class(e){return e===void 0?this.data.class:e===null?(this.data.class=null,this):(this.data.class=Z(Ma,e),this)}createAlarm(e){let t=e instanceof ka?e:new ka(e,this);return this.data.alarms.push(t),t}createAttachment(e){return this.data.attachments.push(e),this}createAttendee(e){if(e instanceof Ea)return this.data.attendees.push(e),e;typeof e==`string`&&(e=ra(`data`,e));let t=new Ea(e,this);return this.data.attendees.push(t),t}createCategory(e){let t=e instanceof Aa?e:new Aa(e);return this.data.categories.push(t),t}created(e){return e===void 0?this.data.created:e===null?(this.data.created=null,this):(this.data.created=na(e,`created`),this)}description(e){return e===void 0?this.data.description:e===null?(this.data.description=null,this):(typeof e==`string`?this.data.description={plain:e}:this.data.description=e,this)}end(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.end):e===null?(this.data.end=null,this):(this.data.end=na(e,`end`),this)}floating(e){return e===void 0?this.data.floating:(this.data.floating=!!e,this.data.floating&&(this.data.timezone=null),this)}id(e){return e===void 0?this.data.id:(this.data.id=String(e),this)}lastModified(e){return e===void 0?this.data.lastModified:e===null?(this.data.lastModified=null,this):(this.data.lastModified=na(e,`lastModified`),this)}location(e){if(e===void 0)return this.data.location;if(typeof e==`string`)return this.data.location={title:e},this;if(e&&(`title`in e&&!e.title||e?.geo&&(typeof e.geo.lat!=`number`||!isFinite(e.geo.lat)||typeof e.geo.lon!=`number`||!isFinite(e.geo.lon))||!(`title`in e)&&!e?.geo))throw Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalEvent.html#location");return this.data.location=e||null,this}organizer(e){return e===void 0?this.data.organizer:e===null?(this.data.organizer=null,this):(this.data.organizer=ra(`organizer`,e),this)}priority(e){if(e===void 0)return this.data.priority;if(e===null)return this.data.priority=null,this;if(e<0||e>9)throw Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");return this.data.priority=Math.round(e),this}recurrenceId(e){return e===void 0?this.data.recurrenceId:e===null?(this.data.recurrenceId=null,this):(this.data.recurrenceId=na(e,`recurrenceId`),this)}repeating(e){if(e===void 0)return this.data.repeating;if(!e)return this.data.repeating=null,this;if(fa(e)||typeof e==`string`)return this.data.repeating=e,this;if(this.data.repeating={freq:Z(ea,e.freq)},e.count){if(!isFinite(e.count))throw Error("`repeating.count` must be a finite number!");this.data.repeating.count=e.count}if(e.interval){if(!isFinite(e.interval))throw Error("`repeating.interval` must be a finite number!");this.data.repeating.interval=e.interval}if(e.until!==void 0&&(this.data.repeating.until=na(e.until,`repeating.until`)),e.byDay){let t=Array.isArray(e.byDay)?e.byDay:[e.byDay];this.data.repeating.byDay=t.map(e=>Z(ta,e))}if(e.byMonth){let t=Array.isArray(e.byMonth)?e.byMonth:[e.byMonth];this.data.repeating.byMonth=t.map(e=>{if(typeof e!=`number`||e<1||e>12)throw Error("`repeating.byMonth` contains invalid value `"+e+"`!");return e})}if(e.byMonthDay){let t=Array.isArray(e.byMonthDay)?e.byMonthDay:[e.byMonthDay];this.data.repeating.byMonthDay=t.map(e=>{if(typeof e!=`number`||e<-31||e>31||e===0)throw Error("`repeating.byMonthDay` contains invalid value `"+e+"`!");return e})}if(e.bySetPos){if(!this.data.repeating.byDay)throw"`repeating.bySetPos` must be used along with `repeating.byDay`!";let t=Array.isArray(e.bySetPos)?e.bySetPos:[e.bySetPos];this.data.repeating.bySetPos=t.map(e=>{if(typeof e!=`number`||e<-366||e>366||e===0)throw"`repeating.bySetPos` contains invalid value `"+e+"`!";return e})}if(e.exclude){let t=Array.isArray(e.exclude)?e.exclude:[e.exclude];this.data.repeating.exclude=t.map((e,t)=>na(e,`repeating.exclude[${t}]`))}return e.startOfWeek&&(this.data.repeating.startOfWeek=Z(ta,e.startOfWeek)),this}sequence(e){if(e===void 0)return this.data.sequence;if(isNaN(parseInt(String(e),10)))throw Error("`sequence` must be a number!");return this.data.sequence=e,this}stamp(e){return e===void 0?this.data.stamp:(this.data.stamp=na(e,`stamp`),this)}start(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.start):(this.data.start=na(e,`start`),this)}status(e){return e===void 0?this.data.status:e===null?(this.data.status=null,this):(this.data.status=Z(Na,e),this)}summary(e){return e===void 0?this.data.summary:(this.data.summary=e?String(e):``,this)}timestamp(e){return e===void 0?this.stamp():this.stamp(e)}timezone(e){return e===void 0&&this.data.timezone!==null?this.data.timezone:e===void 0?this.calendar.timezone():(this.data.timezone=e&&e!==`UTC`?e.toString():null,this.data.timezone&&(this.data.floating=!1),this)}toJSON(){let e=null;return fa(this.data.repeating)||typeof this.data.repeating==`string`?e=this.data.repeating.toString():this.data.repeating&&(e=Object.assign({},this.data.repeating,{exclude:this.data.repeating.exclude?.map(e=>xa(e)),until:xa(this.data.repeating.until)||void 0})),this.swapStartAndEndIfRequired(),Object.assign({},this.data,{created:xa(this.data.created)||null,end:xa(this.data.end)||null,lastModified:xa(this.data.lastModified)||null,recurrenceId:xa(this.data.recurrenceId)||null,repeating:e,stamp:xa(this.data.stamp)||null,start:xa(this.data.start)||null,x:this.x()})}toString(){let e=``;if(e+=`BEGIN:VEVENT\r
`,e+=`UID:`+this.data.id+`\r
`,e+=`SEQUENCE:`+this.data.sequence+`\r
`,this.swapStartAndEndIfRequired(),e+=`DTSTAMP:`+$(this.calendar.timezone(),this.data.stamp)+`\r
`,this.data.allDay?(e+=`DTSTART;VALUE=DATE:`+$(this.timezone(),this.data.start,!0)+`\r
`,this.data.end&&(e+=`DTEND;VALUE=DATE:`+$(this.timezone(),this.data.end,!0)+`\r
`),e+=`X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r
`,e+=`X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r
`):(e+=aa(this.timezone(),`DTSTART`,this.data.start,this.data)+`\r
`,this.data.end&&(e+=aa(this.timezone(),`DTEND`,this.data.end,this.data)+`\r
`)),fa(this.data.repeating)||typeof this.data.repeating==`string`){let t=this.data.repeating.toString().replace(/\r\n/g,`
`).split(`
`).filter(e=>e&&!e.startsWith(`DTSTART:`)).join(`\r
`);!t.includes(`\r
`)&&!t.startsWith(`RRULE:`)&&(t=`RRULE:`+t),e+=t.trim()+`\r
`}else this.data.repeating&&(e+=`RRULE:FREQ=`+this.data.repeating.freq,this.data.repeating.count&&(e+=`;COUNT=`+this.data.repeating.count),this.data.repeating.interval&&(e+=`;INTERVAL=`+this.data.repeating.interval),this.data.repeating.until&&(e+=`;UNTIL=`+$(this.calendar.timezone(),this.data.repeating.until,!1,this.floating())),this.data.repeating.byDay&&(e+=`;BYDAY=`+this.data.repeating.byDay.join(`,`)),this.data.repeating.byMonth&&(e+=`;BYMONTH=`+this.data.repeating.byMonth.join(`,`)),this.data.repeating.byMonthDay&&(e+=`;BYMONTHDAY=`+this.data.repeating.byMonthDay.join(`,`)),this.data.repeating.bySetPos&&(e+=`;BYSETPOS=`+this.data.repeating.bySetPos.join(`,`)),this.data.repeating.startOfWeek&&(e+=`;WKST=`+this.data.repeating.startOfWeek),e+=`\r
`,this.data.repeating.exclude&&(this.data.allDay?e+=`EXDATE;VALUE=DATE:`+this.data.repeating.exclude.map(e=>$(this.calendar.timezone(),e,!0)).join(`,`)+`\r
`:(e+=`EXDATE`,this.timezone()?e+=`;TZID=`+this.timezone()+`:`+this.data.repeating.exclude.map(e=>$(this.timezone(),e,!1,!0)).join(`,`)+`\r
`:e+=`:`+this.data.repeating.exclude.map(e=>$(this.timezone(),e,!1,this.floating())).join(`,`)+`\r
`)));return this.data.recurrenceId&&(e+=aa(this.timezone(),`RECURRENCE-ID`,this.data.recurrenceId,this.data)+`\r
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
`),e+=oa(this.data),this.data.created&&(e+=`CREATED:`+$(this.calendar.timezone(),this.data.created)+`\r
`),this.data.lastModified&&(e+=`LAST-MODIFIED:`+$(this.calendar.timezone(),this.data.lastModified)+`\r
`),this.data.class&&(e+=`CLASS:`+this.data.class.toUpperCase()+`\r
`),e+=`END:VEVENT\r
`,e}transparency(e){return e===void 0?this.data.transparency:e?(this.data.transparency=Z(Pa,e),this):(this.data.transparency=null,this)}uid(e){return e===void 0?this.id():this.id(e)}url(e){return e===void 0?this.data.url:(this.data.url=e?String(e):null,this)}x(e,t){return e===void 0?X(this.data):(typeof e==`string`&&typeof t==`string`&&X(this.data,e,t),typeof e==`object`&&X(this.data,e),this)}swapStartAndEndIfRequired(){if(this.data.start&&this.data.end&&ya(this.data.start).getTime()>ya(this.data.end).getTime()){let e=this.data.start;this.data.start=this.data.end,this.data.end=e}}},Ia=(e=>(e.ADD=`ADD`,e.CANCEL=`CANCEL`,e.COUNTER=`COUNTER`,e.DECLINECOUNTER=`DECLINECOUNTER`,e.PUBLISH=`PUBLISH`,e.REFRESH=`REFRESH`,e.REPLY=`REPLY`,e.REQUEST=`REQUEST`,e))(Ia||{}),La=class{data;constructor(e={}){this.data={description:null,events:[],method:null,name:null,prodId:`//sebbo.net//ical-generator//EN`,scale:null,source:null,timezone:null,ttl:null,url:null,x:[]},e.prodId!==void 0&&this.prodId(e.prodId),e.method!==void 0&&this.method(e.method),e.name!==void 0&&this.name(e.name),e.description!==void 0&&this.description(e.description),e.timezone!==void 0&&this.timezone(e.timezone),e.source!==void 0&&this.source(e.source),e.url!==void 0&&this.url(e.url),e.scale!==void 0&&this.scale(e.scale),e.ttl!==void 0&&this.ttl(e.ttl),e.events!==void 0&&this.events(e.events),e.x!==void 0&&this.x(e.x)}clear(){return this.data.events=[],this}createEvent(e){let t=e instanceof Fa?e:new Fa(e,this);return this.data.events.push(t),t}description(e){return e===void 0?this.data.description:(this.data.description=e?String(e):null,this)}events(e){return e?(e.forEach(e=>this.createEvent(e)),this):this.data.events}length(){return this.data.events.length}method(e){return e===void 0?this.data.method:e?(this.data.method=Z(Ia,e),this):(this.data.method=null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e?String(e):null,this)}prodId(e){if(!e)return this.data.prodId;if(typeof e==`string`)return this.data.prodId=e,this;if(typeof e!=`object`)throw Error("`prodid` needs to be a string or an object!");if(!e.company)throw Error("`prodid.company` is a mandatory item!");if(!e.product)throw Error("`prodid.product` is a mandatory item!");let t=(e.language||`EN`).toUpperCase();return this.data.prodId=`//`+e.company+`//`+e.product+`//`+t,this}scale(e){return e===void 0?this.data.scale:(e===null?this.data.scale=null:this.data.scale=e.toUpperCase(),this)}source(e){return e===void 0?this.data.source:(this.data.source=e||null,this)}timezone(e){return e===void 0?this.data.timezone?.name||null:(e===`UTC`?this.data.timezone=null:typeof e==`string`?this.data.timezone={name:e}:e===null?this.data.timezone=null:this.data.timezone=e,this)}toJSON(){return Object.assign({},this.data,{events:this.data.events.map(e=>e.toJSON()),timezone:this.timezone(),x:this.x()})}toString(){let e=``;return e=`BEGIN:VCALENDAR\r
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
`),this.data.ttl&&(e+=`REFRESH-INTERVAL;VALUE=DURATION:`+ba(this.data.ttl)+`\r
`,e+=`X-PUBLISHED-TTL:`+ba(this.data.ttl)+`\r
`),this.data.events.forEach(t=>e+=t.toString()),e+=oa(this.data),e+=`END:VCALENDAR`,ia(e)}ttl(e){return e===void 0?this.data.ttl:(ua(e)?this.data.ttl=e.asSeconds():e&&e>0?this.data.ttl=e:this.data.ttl=null,this)}url(e){return e===void 0?this.data.url:(this.data.url=e||null,this)}x(e,t){if(e===void 0)return X(this.data);if(typeof e==`string`&&typeof t==`string`)X(this.data,e,t);else if(typeof e==`object`)X(this.data,e);else throw Error(`Either key or value is not a string!`);return this}};function Ra(e){return new La(e)}var za=Ra;function Ba(e){let{ctx:t,x:n,y:r,width:i,height:a,radius:o,color:s}=e;t.fillStyle=s,t.beginPath(),t.moveTo(n+o,r),t.lineTo(n+i-o,r),t.quadraticCurveTo(n+i,r,n+i,r+o),t.lineTo(n+i,r+a-o),t.quadraticCurveTo(n+i,r+a,n+i-o,r+a),t.lineTo(n+o,r+a),t.quadraticCurveTo(n,r+a,n,r+a-o),t.lineTo(n,r+o),t.quadraticCurveTo(n,r,n+o,r),t.closePath(),t.fill()}function Va(e,t,n,r){let i=document.createElement(`canvas`).getContext(`2d`);if(!i)return[];i.font=`${r}px ${n}`;let a=``,o=[];for(let n of e){let e=a+n;i.measureText(e).width>t&&a!==``?(o.push(a),a=n):a=e}return a&&o.push(a),o}function Ha(e){let{ctx:t,x:n,y:r,text:i,font:a,fontSize:o,color:s,align:c=`left`}=e;t.fillStyle=s,t.font=`${o}px ${a}`,t.textAlign=c||`left`,t.fillText(i,n,r)}function Ua(e){let{ctx:t,x:n,y:r,width:i,height:a,title:o,professor:s,location:c,font:l,fontSize:u,displayMode:d}=e,f=Va(o,i,l,u),p=Va(s,i,l,u),m=Va(c,i,l,u),h=[...f,...m,...p].slice(0,3),g=(a-h.reduce((e,t,n)=>t===``?e+2:e+u,0))/2+u-7;h.forEach((e,i)=>{e===``?g+=2:(Ha({ctx:t,x:n,y:r+g,text:e,font:l,fontSize:u,color:i<f.length?`#000000`:d===`dark`?`#4C4C4C`:`#888888`}),g+=u+5)})}async function Wa(e){let{timetableName:t,lectures:n,timetableType:r,semesterName:i,semesterFontSize:a,tileFontSize:o,displayMode:s,language:c}=e,l=Object.values(s===`dark`?L.Tile.TimeTable.default:ne.Tile.TimeTable.default).flatMap(e=>Object.values(e)),u=`timetable_template/Image_template_${r}_${s}_${c}.png`,d=new Image;d.src=u,await new Promise((e,t)=>{d.onload=e,d.onerror=t});let f=await(0,$i.loadImage)(u),p=(0,$i.createCanvas)(f.width,f.height),m=p.getContext(`2d`);m.drawImage(f,0,0),Ha({ctx:m,x:r===`5days`?952:1302,y:78,text:i+` `+t,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:a,color:`#CCCCCC`,align:`right`});for(let e of n){let t=l[e.courseId%l.length]||`#F2CECE`;for(let n of e.classes){let{day:r,begin:i,end:a}=n,[c,l,u,d]=[178*r+76,i*4/3-486,171,(a-i)*4/3-7];Ba({ctx:m,x:c,y:l,width:u,height:d,radius:4,color:t}),Ua({ctx:m,x:c+12,y:l+8,width:u-24,height:d-16,title:e.name,professor:B(e.professors)||``,location:n.buildingCode+` `+n.roomName||``,font:`'Noto Sans KR', Pretendard, sans-serif`,fontSize:o,displayMode:s})}}return p}async function Ga(e){let t=(await Wa(e)).toDataURL(`image/png`),n=document.createElement(`a`);n.href=t,n.download=`${e.timetableName}.png`,n.click(),URL.revokeObjectURL(t)}async function Ka(e){let t=(await Wa(e)).toDataURL(`image/png`),n=await(await fetch(t)).blob();if(!navigator.clipboard?.write)return;let r=new ClipboardItem({"image/png":n});await navigator.clipboard.write([r])}function qa(e){let{name:t,lectures:n,semesterObject:r}=e,i=za({name:t,prodId:`//SPARCS//OTL Plus`,timezone:`Asia/Seoul`});for(let e of n)for(let t of e.classes){let n=t.buildingCode+` `+t.roomName,a=new Date(r.beginning),o=(t.day+1)%7,s=new Date(a),c=s.getDay(),l=(o+7-c)%7;s.setDate(s.getDate()+l);let u=Math.floor(t.begin/60),d=t.begin%60,f=Math.floor(t.end/60),p=t.end%60,m=new Date(s);m.setHours(u,d,0,0);let h=new Date(s);h.setHours(f,p,0,0),i.createEvent({start:m,end:h,summary:e.name,location:n,repeating:{freq:ea.WEEKLY,until:new Date(r.end)},timezone:`Asia/Seoul`}).alarms([{type:Da.display,trigger:900}])}let a=new Blob([i.toString()],{type:`text/calendar;charset=utf-8`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=`${t}.ics`,s.click(),URL.revokeObjectURL(o)}var Ja=d(f)`
    width: 100%;

    ${M.laptop} {
        height: 56px;
        flex-wrap: wrap;
        align-items: center;
    }

    ${M.tablet} {
        height: auto;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
`,Ya=d.button`
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
`;function Xa({timetableName:e,timetableLectures:t,year:n,semester:r}){let{t:i,i18n:a}=D(),o=s(),u=P(`tablet`),{displayedTheme:d}=F(),{query:f}=v(`GET`,`/semesters`),[p,m]=(0,W.useState)(`idle`),h=(0,W.useMemo)(()=>f?f.data?.semesters.find(e=>e.year===n&&e.semester===r):null,[f.data,n,r]),g=(0,W.useMemo)(()=>t.some(e=>e.classes.some(e=>e.day>=5))?`7days`:`5days`,[t]);return(0,W.useEffect)(()=>{if(p.startsWith(`success`)){let e=setTimeout(()=>{m(`idle`)},500);return()=>clearTimeout(e)}},[p]),l(Ja,{direction:u?`row`:`column`,gap:8,children:[l(Ya,{onClick:()=>{p===`idle`&&(Ka({timetableName:e,lectures:t,timetableType:g,semesterName:n+` `+_(r),semesterFontSize:30,tileFontSize:18,displayMode:d,language:a.resolvedLanguage==`ko`?`ko`:`en`}),m(`successCopyImage`))},children:[c(T,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:c(p==`successCopyImage`?re:ce,{})}),!u&&c(`span`,{children:i(`timetable.copyImage`)})]}),l(Ya,{onClick:()=>{p===`idle`&&(Ga({timetableName:e,lectures:t,timetableType:g,semesterName:n+` `+_(r),semesterFontSize:30,tileFontSize:18,displayMode:d,language:a.resolvedLanguage==`ko`?`ko`:`en`}),m(`successDownloadImage`))},children:[c(T,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:c(p==`successDownloadImage`?re:ue,{})}),!u&&c(`span`,{children:i(`timetable.exportImage`)})]}),l(Ya,{onClick:()=>{if(p===`idle`){if(!h)return;qa({name:e,lectures:t,semesterObject:{beginning:new Date(h.beginning),end:new Date(h.end)}}),m(`successDownloadCalendar`)}},children:[c(T,{size:16,color:o.colors.Highlight.default,children:c(p==`successDownloadCalendar`?re:se,{})}),!u&&c(`span`,{children:i(`timetable.exportICal`)})]})]})}var Za=d.div`
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

    ${M.laptop} {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`;function Qa({timetableName:e,timetableLectures:t,hover:n,setHover:r,year:i,semester:a}){let o=P(`laptop`);return l(Za,{children:[!o&&c(Qi,{timetableLectures:t,hover:n,setHover:r}),c(ki,{hover:n,setHover:r,timetableLectures:t}),!o&&c(j,{direction:`row`}),c(Ri,{timetableLectures:t,hover:n,setHover:r}),!o&&c(j,{direction:`row`}),!o&&c(Wi,{timetableLectures:t,hover:n,setHover:r}),!o&&c(j,{direction:`row`}),!o&&c(Xa,{timetableName:e,timetableLectures:t,year:i,semester:a})]})}var $a=d(f)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${M.tablet} {
        padding: 8px;
    }

    ${M.mobile} {
        padding: 0 8px 8px 8px;
    }
`,eo=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${M.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }

    ${M.tablet} {
        flex: 1 1 0;
        min-height: 0;
        height: 100%;
    }
`,to=d(f)`
    border-radius: 12px;
    width: fit-content;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${M.laptop} {
        max-width: none;
    }

    ${M.tablet} {
        width: 100%;
        max-width: none;
        flex: 1 0 0;
        overflow: hidden;
    }
`,no=d(f)`
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

    ${M.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`,ro=d.div`
    width: 360px;
    height: 100%;
    display: flex;

    ${M.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${M.laptop} {
        width: 300px;
    }
`,io=d.div`
    width: 270px;
    height: 100%;
    display: flex;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${M.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${M.laptop} {
        width: 300px;
    }

    ${M.tablet} {
        width: 100%;
    }
`,ao=d.div`
    ${M.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,oo=d(f)`
    flex: 1;
    min-height: 0;
    overflow: hidden;

    ${M.laptop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,so=d.div`
    ${M.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${M.tablet} {
        height: auto;
        padding: 8px;
    }
`,co=d(f)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
`,lo=a(function(){let{status:e}=I(),t=C(),n=s(),r=P(`tablet`),i=P(`laptop`),a=P(`desktop`);(0,W.useEffect)(()=>{N(`Page View`,{page:`Timetable`})},[]);let o=(0,W.useRef)(null),d=(0,W.useRef)(null),p=(0,W.useRef)(null),[m,h]=(0,W.useState)([]),[g,_]=(0,W.useState)(null),[y,b]=(0,W.useState)(null),[x,S]=(0,W.useState)(null),[w,E]=(0,W.useState)(``),[D,O]=(0,W.useState)(-1),[A,M]=(0,W.useState)(1),[F,ne]=(0,W.useState)(!1),[L,R]=(0,W.useState)([]),{query:z}=v(`GET`,`/timetables/${x}`,{enabled:x!==null&&e===`success`}),{query:B,setParams:V}=v(`GET`,`/timetables/my-timetable`,{enabled:x===null&&e===`success`}),H=e===`success`?x===null?B.data?.lectures??[]:z.data?.lectures??[]:L,{requestFunction:U}=v(`PATCH`,`/timetables/${x}`,{onSuccess:()=>{t.invalidateQueries({queryKey:[`/timetables/${x}`]}).then(()=>{_(null),h([])})}}),re=(0,W.useCallback)(e=>{R(t=>t.filter(t=>t.id!==e)),_(null),h([])},[]),ie=(0,W.useCallback)(e=>{U({action:`delete`,lectureId:e}),N(`Remove Lecture from Timetable`,{lectureId:e,timetableId:x})},[U,x]);return(0,W.useEffect)(()=>{h([]),_(null)},[F]),(0,W.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&d.current&&!d.current.contains(e.target)&&p.current&&p.current.contains(e.target)&&_(null)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,W.useEffect)(()=>{_(null),h([]),D!==-1&&V({year:D,semester:A}),R([])},[D,A]),(0,W.useEffect)(()=>{r||(_(null),h([]))},[x]),(0,W.useEffect)(()=>{y!==null&&r&&ne(!0)},[y]),c($a,{direction:r?`column`:`row`,align:`stretch`,justify:`center`,gap:r?8:12,flex:`1 0 0`,ref:p,children:r?l(u,{children:[l(to,{ref:d,direction:`column`,gap:0,align:`stretch`,justify:`stretch`,style:F?{flex:`1 1 0`,minHeight:0}:void 0,children:[c(Ci,{timeTableLectures:H,currentTimetableId:x,setCurrentTimetableId:S,setCurrentTimetableName:E,year:D,semester:A,setYear:O,setSemester:M}),c(no,{direction:`column`,gap:12,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:c(oo,{direction:`column`,gap:0,align:`stretch`,flex:`1 1 auto`,children:c(ae,{lectures:H,timeFilter:y,setTimeFilter:b,needLectureDeletable:x!==null,hoveredLectures:m,setHoveredLectures:h,selectedLecture:g,setSelectedLecture:_,deleteLecture:e===`success`?x===null?void 0:ie:re})})})]}),c(so,{children:c(Qa,{timetableName:w,timetableLectures:H,hover:m,setHover:h,year:D,semester:A})}),l(co,{direction:`row`,gap:0,children:[c(Xa,{timetableName:w,timetableLectures:H,year:D,semester:A}),l(f,{direction:`row`,gap:4,align:`center`,style:{height:`100%`},onClick:()=>{ne(!F)},children:[c(T,{size:16,color:n.colors.Highlight.default,children:c(te,{})}),c(k,{type:`Normal`,color:`Highlight.default`,children:F?`검색 닫기`:`과목 검색하기`})]})]}),F&&c(eo,{direction:`row`,align:`flex-start`,gap:12,ref:o,children:c(io,{children:c(Ze,{timetableLectures:H,year:D,semester:A,setNonLoginTimetable:R,hoveredLecture:m,selectedLecture:g,setSelectedLecture:_,setHoveredLecture:h,timeFilter:y,setTimeFilter:b,currentTimetableId:x})})}),g&&c(ee,{isOpen:!!g,onClose:()=>{},fullScreen:!0,header:!1,children:c(Me,{setNonLoginTimetable:R,handleRemoveFromTimetable:e===`success`?x===null?void 0:ie:re,selectedLecture:g||(m?.length==1?m[0]:null),year:D,semester:A,onMobileModalClose:()=>{h([]),_(null)},currentTimetableId:x,timetableLectures:H})})]}):l(u,{children:[l(eo,{direction:a?`column-reverse`:`row`,align:`flex-start`,gap:12,ref:o,children:[i&&c(ao,{children:c(Xa,{timetableName:w,timetableLectures:H,year:D,semester:A})}),c(io,{style:{overflow:`auto`},children:c(Ze,{timetableLectures:H,year:D,semester:A,setNonLoginTimetable:R,hoveredLecture:m,selectedLecture:g,setSelectedLecture:_,setHoveredLecture:h,timeFilter:y,setTimeFilter:b,currentTimetableId:x})}),!a&&c(j,{direction:`column`}),c(ro,{style:{overflow:`auto`},children:c(Me,{selectedLecture:g||(m?.length==1?m[0]:null),year:D,semester:A})})]}),c(f,{direction:`column`,gap:0,children:l(to,{ref:d,direction:`column`,gap:0,style:{overflowX:`hidden`},flex:`1 1 auto`,children:[c(Ci,{timeTableLectures:H,currentTimetableId:x,setCurrentTimetableId:S,setCurrentTimetableName:E,year:D,semester:A,setYear:O,setSemester:M}),l(no,{direction:i?`column`:`row`,gap:i?12:16,align:`stretch`,justify:`flex-start`,flex:`1 0 0`,children:[c(oo,{direction:`column`,gap:0,children:c(ae,{cellWidth:i?`113px`:`125px`,lectures:H,timeFilter:y,setTimeFilter:b,needLectureDeletable:x!==null,hoveredLectures:m,setHoveredLectures:h,selectedLecture:g,setSelectedLecture:_,deleteLecture:e===`success`?x===null?void 0:ie:re})}),!i&&c(j,{direction:`column`}),c(so,{children:c(Qa,{timetableName:w,timetableLectures:H,hover:m,setHover:h,year:D,semester:A})})]})]})})]})})});export{lo as default};
//# sourceMappingURL=timetable-CK1trtaR.js.map