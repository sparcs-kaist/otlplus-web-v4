(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`49744a5f993adda4f5574002d6a9955b59e7515f`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`8e05aa39-3a32-4981-bfdb-b1a71329743b`,e._sentryDebugIdIdentifier=`sentry-dbid-8e05aa39-3a32-4981-bfdb-b1a71329743b`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-DH4lyZei.js";import{O as r}from"./chunk-62JRHF6Z-CHtfzCvc.js";import{l as i,n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-WZ8V2Qxy.js";import{n as c,t as l}from"./FlexWrapper-Cglr1bKd.js";import{w as u}from"./axios-BBfLi40B.js";import{h as d,t as f}from"./useAPI-Kjh7LynO.js";import{n as p,t as m}from"./useInfiniteAPI-DGWw_eii.js";import{r as h,t as g}from"./Icon-DJ6UCXdZ.js";import{t as _}from"./useTranslation-Cc5Gs9xz.js";import{t as v}from"./IconButton-DY_gdd4Q.js";import{t as y}from"./Typography-BXMqb-W5.js";import{t as b}from"./StyledDivider-BODsTQQj.js";import{t as x}from"./LoadingCircle-CvRtC4_1.js";import{t as S}from"./ReviewBlock-BQlUioVT.js";import{t as C}from"./ReviewScoreSummary-CcdPSuHL.js";var w=t(e()),T=t(n(),1),E=h((0,T.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),D=h((0,T.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),O=c(l)`
    width: 100%;
    flex-shrink: 0;
`,k=c(l)`
    flex-wrap: wrap;
`,A=c.button`
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
`;function j({title:e,friends:t}){let{t:n}=_(),i=r();return o(l,{direction:`column`,gap:10,align:`stretch`,children:[a(y,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?a(k,{direction:`row`,gap:6,children:t.map(e=>{let t=new URLSearchParams({friendId:String(e.id),year:String(e.timetable.year),semester:String(e.timetable.semester)});return a(A,{type:`button`,title:e.description,"aria-description":e.description,onClick:()=>i(`/friends?${t}`),children:a(y,{type:`Normal`,color:`Text.light`,children:e.name})},e.id)})}):a(y,{type:`Small`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function M({lectureId:e}){let{t}=_(),{query:n}=f(`GET`,`/friends/lectures/${e}/overlaps`,{staleTime:0,gcTime:0}),r=new Map;for(let[e,i]of[[t(`friends.sameLecture`),n.data?.sameLecture??[]],[t(`friends.sameCourseDifferentSection`),n.data?.sameCourseDifferentSection??[]]])for(let t of i)r.has(t.id)||r.set(t.id,{...t,description:e});return a(O,{direction:`column`,gap:24,align:`stretch`,children:n.isPending?a(y,{type:`Small`,color:`Text.placeholder`,role:`status`,children:t(`friends.loadingOverlaps`)}):n.isError?a(y,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}):o(s,{children:[a(j,{title:t(`friends.currentLectureFriends`),friends:[...r.values()]}),a(j,{title:t(`friends.pastLectureFriends`),friends:(n.data?.previousSemesterSameProfessor??[]).map(e=>({...e,description:t(`friends.previousSemesterSameProfessor`)}))})]})})}function N(e){return e.map(e=>e.name).join(`, `)}function P(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function F(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function I(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var L=c(l)`
    width: 100%;
`,R=c(l)`
    width: 100%;
    max-width: 300px;
    padding: ${({$compact:e})=>e?`10px 0`:`10px`};
`,z=c(l)`
    flex: 1 0 0;
    ${({$compact:e})=>e&&`
        height: 29px;
        > * { flex-shrink: 0; }
        > :first-child { margin-top: -5px; }
        > :last-child { margin-top: -3px; }
    `}
`,B=c(y)`
    white-space: nowrap;
`,V=({selectedLecture:e,metrics:t=`enrollment`})=>{let{t:n}=_();if(!e)return null;let r=P(e.numPeople,e.limitPeople);return o(s,{children:[o(L,{direction:`column`,gap:8,children:[o(l,{direction:`row`,gap:6,children:[a(B,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.type`)}),a(y,{type:`Normal`,color:`Text.default`,children:e?.type})]}),o(l,{direction:`row`,gap:6,children:[a(B,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.department`)}),a(y,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),o(l,{direction:`row`,gap:6,children:[a(B,{type:`NormalBold`,color:`Text.default`,children:n(`common.professor`)}),a(y,{type:`Normal`,color:`Text.default`,children:N(e?.professors||[])})]}),o(l,{direction:`row`,gap:6,children:[a(B,{type:`NormalBold`,color:`Text.default`,children:n(`common.room`)}),a(y,{type:`Normal`,color:`Text.default`,children:I(e?.classes||[])})]}),o(l,{direction:`row`,gap:6,children:[a(B,{type:`NormalBold`,color:`Text.default`,children:n(`common.limit`)}),a(y,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),o(l,{direction:`row`,gap:6,children:[a(B,{type:`NormalBold`,color:`Text.default`,children:n(`common.exam`)}),a(y,{type:`Normal`,color:`Text.default`,children:F(e?.examTimes||[])})]})]}),a(R,{$compact:t===`course`,direction:`row`,gap:0,justify:`space-around`,align:`center`,children:(t===`course`?[[e.classDuration,n(`common.numClasses`)],[e.expDuration,n(`common.numLabs`)],e.creditAU?[e.creditAU,`AU`]:[e.credit,n(`common.credit`)]]:[[e.isEnglish?`Eng`:`한`,n(`common.language`)],[e.credit,n(`common.credit`)],[r,n(`timetable.competitionRate`)]]).map(([e,n],r)=>o(z,{$compact:t===`course`,direction:`column`,gap:0,align:`center`,children:[a(y,{type:`Bigger`,color:`Text.default`,children:e}),a(y,{type:`Smaller`,color:`Text.default`,children:n})]},r))})]})},H=({selectedCourseId:e,selectedProfessorId:t,showSummary:n=!0,reviewVariant:r=`default`})=>{let{t:i}=_(),[c,u]=(0,w.useState)(!1),{query:f,setParams:h,data:g}=m(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:v,inView:y}=p({threshold:0});return(0,w.useEffect)(()=>{u(!1);let n=setTimeout(()=>{h({mode:d.DEFAULT,courseId:e??void 0,professorId:t??void 0}),u(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,w.useEffect)(()=>{y&&f.hasNextPage&&!f.isFetchingNextPage&&f.fetchNextPage()},[y,f]),!g||!c?a(x,{}):o(s,{children:[n&&o(s,{children:[a(l,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:a(C,{averageGrade:g?.averageGrade,averageLoad:g?.averageLoad,averageSpeech:g?.averageSpeech,reviewCount:g?.reviews.length,labels:{grade:i(`common.grade`),load:i(`common.load`),speech:i(`common.speech`)},fluid:!0})}),a(b,{})]}),g?.reviews.map(e=>a(S,{review:e,linkToDictionary:!0,variant:r},e.id)),f.hasNextPage&&a(x,{ref:v})]})},U=c(l)`
    width: ${({$outlined:e})=>e?136:150}px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
    ${({$outlined:e,theme:t})=>e&&`border: 1px solid ${t.colors.Line.divider};`}
`,W=c.img`
    display: block;
    transform: rotate(${({$previous:e})=>e?90:-90}deg);
`;function G({year:e,semester:t,onChange:n,variant:r=`default`}){let c=i(),{t:l}=_(),d=r===`outlined`,{query:p}=f(`GET`,`/semesters`),{query:m}=f(`GET`,`/semesters/current`);(0,w.useEffect)(()=>{if(e>=0)return;let t=m.data;t&&n(t.year,t.semester)},[m.data,e,n]);let{previousSemester:h,nextSemester:b}=(0,w.useMemo)(()=>{let n=p.data?.semesters,r=n?.findIndex(n=>n.year===e&&n.semester===t);return r===void 0||r===-1?{previousSemester:void 0,nextSemester:void 0}:{previousSemester:n?.[r-1],nextSemester:n?.[r+1]}},[p.data,e,t]),x=!h,S=!b;return o(U,{$outlined:d,direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[a(v,{"aria-label":l(`friends.previousSemester`),onClick:x?void 0:()=>{h&&n(h.year,h.semester)},styles:d?{padding:0,width:12,height:14,opacity:x?.4:1}:{padding:2.5},children:d?a(W,{src:`/images/friends/design/chevron-down.svg`,alt:``,$previous:!0}):a(g,{size:20,color:x?c.colors.Text.disable:c.colors.Highlight.default,onClick:x?void 0:()=>{},children:a(E,{})})}),d?a(y,{type:`Normal`,color:`Highlight.default`,style:{whiteSpace:`nowrap`},children:e>=0?l(`friends.semesterLabel`,{year:e,semester:u(t)}):`—`}):o(s,{children:[a(y,{color:`Highlight.default`,children:e}),a(y,{color:`Highlight.default`,children:u(t)})]}),a(v,{"aria-label":l(`friends.nextSemester`),onClick:S?void 0:()=>{b&&n(b.year,b.semester)},styles:d?{padding:0,width:12,height:14,opacity:S?.4:1}:{padding:2.5},children:d?a(W,{src:`/images/friends/design/chevron-down.svg`,alt:``,$previous:!1}):a(g,{size:20,color:S?c.colors.Text.disable:c.colors.Highlight.default,onClick:S?void 0:()=>{},children:a(D,{})})})]})}var K=c.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,q={default:c(K)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:c(K)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},J=c.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,Y=e=>a(J,{children:e}),X=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=q[e],o=()=>Y(t);return a(i,{ref:n,...r,onClick:r.onClick,children:a(o,{})})};export{N as a,V as i,G as n,M as o,H as r,X as t};
//# sourceMappingURL=TabButton-BtUsTRNk.js.map