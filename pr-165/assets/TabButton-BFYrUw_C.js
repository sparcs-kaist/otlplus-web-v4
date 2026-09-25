(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`c70a54fbd7cbbb6cd210b27ccf3b8e764094a9aa`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`0276fe57-5863-4eb7-a7fa-ebaa931f9820`,e._sentryDebugIdIdentifier=`sentry-dbid-0276fe57-5863-4eb7-a7fa-ebaa931f9820`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-Bo_PE7uw.js";import{O as r}from"./chunk-62JRHF6Z-BVIXo6It.js";import{l as i,n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-DuV0bH4x.js";import{n as c,t as l}from"./FlexWrapper-DyUQQhLo.js";import{C as u,w as d}from"./axios-BxtEgwMC.js";import{h as f,t as p}from"./useAPI-dvh-bzEH.js";import{n as m,t as h}from"./useInfiniteAPI-CteSgzsQ.js";import{r as g,t as _}from"./Icon-D8nSFZSa.js";import{t as v}from"./useTranslation-CvUh8LTQ.js";import{t as y}from"./IconButton-DCQ43hr9.js";import{t as b}from"./Typography-GApR5r0N.js";import{t as x}from"./StyledDivider-CJvZeGhb.js";import{t as S}from"./LoadingCircle-BS-VG034.js";import{t as C}from"./ReviewBlock-B6lvM6BY.js";import{t as w}from"./ReviewScoreSummary-DSqbr9T3.js";var T=t(e(),1),E=t(n(),1),D=g((0,E.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),O=g((0,E.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),k=c(l)`
    width: 100%;
    flex-shrink: 0;
`,A=c(l)`
    flex-wrap: wrap;
`,j=c.button`
    min-height: 28px;
    padding: 5px 16px;
    border: 0;
    border-radius: 16px;
    max-width: 100%;
    overflow-wrap: anywhere;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    font: inherit;
    text-align: left;
    text-decoration: none;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`;function M({title:e,friends:t}){let{t:n}=v(),i=r();return o(l,{direction:`column`,gap:10,align:`stretch`,children:[a(b,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?a(A,{direction:`row`,gap:6,children:t.map(e=>{let t=new URLSearchParams({friendId:String(e.id),year:String(e.timetable.year),semester:String(e.timetable.semester)});return e.timetable.id!==null&&t.set(`timetableId`,String(e.timetable.id)),a(j,{type:`button`,title:e.description,"aria-description":e.description,onClick:()=>i(`/friends?${t}`),children:a(b,{type:`Normal`,color:`Text.light`,children:e.name})},e.id)})}):a(b,{type:`Small`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function N({lectureId:e}){let{t}=v(),{query:n}=p(`GET`,`/friends/lectures/${e}/overlaps`,{staleTime:0,gcTime:0}),r=new Map;for(let[e,i]of[[t(`friends.sameLecture`),n.data?.sameLecture??[]],[t(`friends.sameCourseDifferentSection`),n.data?.sameCourseDifferentSection??[]]])for(let t of i)r.has(t.id)||r.set(t.id,{...t,description:e});return a(k,{direction:`column`,gap:24,align:`stretch`,children:n.isPending?a(b,{type:`Small`,color:`Text.placeholder`,role:`status`,children:t(`friends.loadingOverlaps`)}):n.isError?a(b,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}):o(s,{children:[a(M,{title:t(`friends.currentLectureFriends`),friends:[...r.values()]}),a(M,{title:t(`friends.pastLectureFriends`),friends:(n.data?.previousSemesterSameProfessor??[]).map(e=>({...e,description:t(`friends.previousSemesterSameProfessor`)}))})]})})}function P(e){return e.map(e=>e.name).join(`, `)}function F(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function I(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function L(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var R=c(l)`
    width: 100%;
`,z=c(l)`
    width: 100%;
    max-width: 300px;
    padding: ${({$compact:e})=>e?`10px 0`:`10px`};
`,B=c(l)`
    flex: 1 0 0;
    ${({$compact:e})=>e&&`
        height: 29px;
        > * { flex-shrink: 0; }
        > :first-child { margin-top: -5px; }
        > :last-child { margin-top: -3px; }
    `}
`,V=c(b)`
    white-space: nowrap;
`,H=({selectedLecture:e,metrics:t=`enrollment`})=>{let{t:n}=v();if(!e)return null;let r=F(e.numPeople,e.limitPeople);return o(s,{children:[o(R,{direction:`column`,gap:8,children:[o(l,{direction:`row`,gap:6,children:[a(V,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.type`)}),a(b,{type:`Normal`,color:`Text.default`,children:e?.type})]}),o(l,{direction:`row`,gap:6,children:[a(V,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.department`)}),a(b,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),o(l,{direction:`row`,gap:6,children:[a(V,{type:`NormalBold`,color:`Text.default`,children:n(`common.professor`)}),a(b,{type:`Normal`,color:`Text.default`,children:P(e?.professors||[])})]}),o(l,{direction:`row`,gap:6,children:[a(V,{type:`NormalBold`,color:`Text.default`,children:n(`common.room`)}),a(b,{type:`Normal`,color:`Text.default`,children:L(e?.classes||[])})]}),o(l,{direction:`row`,gap:6,children:[a(V,{type:`NormalBold`,color:`Text.default`,children:n(`common.limit`)}),a(b,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),o(l,{direction:`row`,gap:6,children:[a(V,{type:`NormalBold`,color:`Text.default`,children:n(`common.exam`)}),a(b,{type:`Normal`,color:`Text.default`,children:I(e?.examTimes||[])})]})]}),a(z,{$compact:t===`course`,direction:`row`,gap:0,justify:`space-around`,align:`center`,children:(t===`course`?[[e.classDuration,n(`common.numClasses`)],[e.expDuration,n(`common.numLabs`)],e.creditAU?[e.creditAU,`AU`]:[e.credit,n(`common.credit`)]]:[[e.isEnglish?`Eng`:`한`,n(`common.language`)],[e.credit,n(`common.credit`)],[r,n(`timetable.competitionRate`)]]).map(([e,n],r)=>o(B,{$compact:t===`course`,direction:`column`,gap:0,align:`center`,children:[a(b,{type:`Bigger`,color:`Text.default`,children:e}),a(b,{type:`Smaller`,color:`Text.default`,children:n})]},r))})]})},U=({selectedCourseId:e,selectedProfessorId:t,showSummary:n=!0,reviewVariant:r=`default`})=>{let{t:i}=v(),[c,u]=(0,T.useState)(!1),{query:d,setParams:p,data:g}=h(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:_,inView:y}=m({threshold:0});return(0,T.useEffect)(()=>{u(!1);let n=setTimeout(()=>{p({mode:f.DEFAULT,courseId:e??void 0,professorId:t??void 0}),u(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,T.useEffect)(()=>{y&&d.hasNextPage&&!d.isFetchingNextPage&&d.fetchNextPage()},[y,d]),!g||!c?a(S,{}):o(s,{children:[n&&o(s,{children:[a(l,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:a(w,{averageGrade:g?.averageGrade,averageLoad:g?.averageLoad,averageSpeech:g?.averageSpeech,reviewCount:g?.reviews.length,labels:{grade:i(`common.grade`),load:i(`common.load`),speech:i(`common.speech`)},fluid:!0})}),a(x,{})]}),g?.reviews.map(e=>a(C,{review:e,linkToDictionary:!0,variant:r},e.id)),d.hasNextPage&&a(S,{ref:_})]})},W=c(l)`
    width: ${({$outlined:e})=>e?136:150}px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
    ${({$outlined:e,theme:t})=>e&&`border: 1px solid ${t.colors.Line.divider};`}
`,G=c.img`
    display: block;
    transform: rotate(${({$previous:e})=>e?90:-90}deg);
`;function K({year:e,semester:t,onChange:n,variant:r=`default`}){let c=i(),{t:l}=v(),f=r===`outlined`,{query:m}=p(`GET`,`/semesters`);(0,T.useEffect)(()=>{if(e>=0)return;let t=m.data?.semesters;if(t&&t.length>0){let e=t[t.length-1];e&&n(e.year,e.semester)}},[m.data,e,n]);let{isFirstSemester:h,isLastSemester:g}=(0,T.useMemo)(()=>{if(!m.data)return{isFirstSemester:!1,isLastSemester:!1};let n=m.data.semesters,r=n[0],i=n[n.length-1];return!r||!i?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===r.year&&t===r.semester,isLastSemester:e===i.year&&t===i.semester}},[m.data,e,t]);return o(W,{$outlined:f,direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[a(y,{"aria-label":l(`friends.previousSemester`),onClick:h?void 0:()=>{h||(t===u.SPRING?n(e-1,u.FALL):n(e,u.SPRING))},styles:f?{padding:0,width:12,height:14,opacity:h?.4:1}:{padding:2.5},children:f?a(G,{src:`/images/friends/design/chevron-down.svg`,alt:``,$previous:!0}):a(_,{size:20,color:h?c.colors.Text.disable:c.colors.Highlight.default,onClick:h?void 0:()=>{},children:a(D,{})})}),f?a(b,{type:`Normal`,color:`Highlight.default`,style:{whiteSpace:`nowrap`},children:e>=0?l(`friends.semesterLabel`,{year:e,semester:d(t)}):`—`}):o(s,{children:[a(b,{color:`Highlight.default`,children:e}),a(b,{color:`Highlight.default`,children:d(t)})]}),a(y,{"aria-label":l(`friends.nextSemester`),onClick:g?void 0:()=>{g||(t===u.FALL?n(e+1,u.SPRING):n(e,u.FALL))},styles:f?{padding:0,width:12,height:14,opacity:g?.4:1}:{padding:2.5},children:f?a(G,{src:`/images/friends/design/chevron-down.svg`,alt:``,$previous:!1}):a(_,{size:20,color:g?c.colors.Text.disable:c.colors.Highlight.default,onClick:g?void 0:()=>{},children:a(O,{})})})]})}var q=c.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,J={default:c(q)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:c(q)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},Y=c.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,X=e=>a(Y,{children:e}),Z=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=J[e],o=()=>X(t);return a(i,{ref:n,...r,onClick:r.onClick,children:a(o,{})})};export{P as a,H as i,K as n,N as o,U as r,Z as t};
//# sourceMappingURL=TabButton-BFYrUw_C.js.map