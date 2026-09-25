(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`52be2b89e5936e23e409ee5b24a3c91eb5621559`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`7ba4665d-08b0-46b9-a7f0-e1944f02216a`,e._sentryDebugIdIdentifier=`sentry-dbid-7ba4665d-08b0-46b9-a7f0-e1944f02216a`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CSJiIqT-.js";import{O as r}from"./chunk-62JRHF6Z-CrDZQhpB.js";import{l as i,n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-Bga2coHf.js";import{n as c,t as l}from"./FlexWrapper-BeiRNlwq.js";import{S as u,x as d}from"./axios-BEMFjMbS.js";import{t as f}from"./useAPI-CjEraQ4l.js";import{r as p,t as m}from"./Icon-DCGFx5Hz.js";import{t as h}from"./useTranslation-DCyx5Zw-.js";import{t as g}from"./IconButton-CloDbNwK.js";import{t as _}from"./Typography-huWZaBjY.js";var v=t(n(),1),y=p((0,v.jsx)(`path`,{d:`M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z`}),`Delete`),b=t(e(),1),x=p((0,v.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),S=p((0,v.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),C=c(l)`
    width: 100%;
    flex-shrink: 0;
`,w=c(l)`
    flex-wrap: wrap;
`,T=c.button`
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
`;function E({title:e,friends:t}){let{t:n}=h(),i=r();return o(l,{direction:`column`,gap:10,align:`stretch`,children:[a(_,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?a(w,{direction:`row`,gap:6,children:t.map(e=>{let t=new URLSearchParams({friendId:String(e.id),year:String(e.timetable.year),semester:String(e.timetable.semester)});return e.timetable.id!==null&&t.set(`timetableId`,String(e.timetable.id)),a(T,{type:`button`,onClick:()=>i(`/friends?${t}`),children:a(_,{type:`Normal`,color:`Text.light`,children:e.name})},e.id)})}):a(_,{type:`Small`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function D({lectureId:e}){let{t}=h(),{query:n}=f(`GET`,`/friends/lectures/${e}/overlaps`,{staleTime:0,gcTime:0});return a(C,{direction:`column`,gap:24,align:`stretch`,children:n.isPending?a(_,{type:`Small`,color:`Text.placeholder`,role:`status`,children:t(`friends.loadingOverlaps`)}):n.isError?a(_,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}):o(s,{children:[a(E,{title:t(`friends.sameLecture`),friends:n.data?.sameLecture??[]}),a(E,{title:t(`friends.sameCourseDifferentSection`),friends:n.data?.sameCourseDifferentSection??[]}),a(E,{title:t(`friends.previousSemesterSameProfessor`),friends:n.data?.previousSemesterSameProfessor??[]})]})})}function O(e){return e.map(e=>e.name).join(`, `)}function k(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function A(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function j(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var M=c(l)`
    width: 100%;
`,N=c(l)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,P=c(l)`
    flex: 1 0 0;
`,F=c(_)`
    white-space: nowrap;
`,I=({selectedLecture:e})=>{let{t}=h();if(!e)return null;let n=k(e.numPeople,e.limitPeople);return o(s,{children:[o(M,{direction:`column`,gap:8,children:[o(l,{direction:`row`,gap:6,children:[a(F,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.type`)}),a(_,{type:`Normal`,color:`Text.default`,children:e?.type})]}),o(l,{direction:`row`,gap:6,children:[a(F,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.department`)}),a(_,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),o(l,{direction:`row`,gap:6,children:[a(F,{type:`NormalBold`,color:`Text.default`,children:t(`common.professor`)}),a(_,{type:`Normal`,color:`Text.default`,children:O(e?.professors||[])})]}),o(l,{direction:`row`,gap:6,children:[a(F,{type:`NormalBold`,color:`Text.default`,children:t(`common.room`)}),a(_,{type:`Normal`,color:`Text.default`,children:j(e?.classes||[])})]}),o(l,{direction:`row`,gap:6,children:[a(F,{type:`NormalBold`,color:`Text.default`,children:t(`common.limit`)}),a(_,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),o(l,{direction:`row`,gap:6,children:[a(F,{type:`NormalBold`,color:`Text.default`,children:t(`common.exam`)}),a(_,{type:`Normal`,color:`Text.default`,children:A(e?.examTimes||[])})]})]}),a(N,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e.isEnglish?`Eng`:`한`,t(`common.language`)],[e.credit,t(`common.credit`)],[n,t(`timetable.competitionRate`)]].map(([e,t],n)=>o(P,{direction:`column`,gap:0,align:`center`,children:[a(_,{type:`Bigger`,color:`Text.default`,children:e}),a(_,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},L=c(l)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function R({year:e,semester:t,onChange:n}){let r=i(),{query:s}=f(`GET`,`/semesters`);(0,b.useEffect)(()=>{if(e>=0)return;let t=s.data?.semesters;if(t&&t.length>0){let e=t[t.length-1];e&&n(e.year,e.semester)}},[s.data,e,n]);let{isFirstSemester:c,isLastSemester:l}=(0,b.useMemo)(()=>{if(!s.data)return{isFirstSemester:!1,isLastSemester:!1};let n=s.data.semesters,r=n[0],i=n[n.length-1];return!r||!i?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===r.year&&t===r.semester,isLastSemester:e===i.year&&t===i.semester}},[s.data,e,t]);return o(L,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[a(g,{onClick:c?void 0:()=>{c||(t===d.SPRING?n(e-1,d.FALL):n(e,d.SPRING))},styles:{padding:2.5},children:a(m,{size:20,color:c?r.colors.Text.disable:r.colors.Highlight.default,onClick:c?void 0:()=>{},children:a(x,{})})}),a(_,{color:`Highlight.default`,children:e}),a(_,{color:`Highlight.default`,children:u(t)}),a(g,{onClick:l?void 0:()=>{l||(t===d.FALL?n(e+1,d.SPRING):n(e,d.FALL))},styles:{padding:2.5},children:a(m,{size:20,color:l?r.colors.Text.disable:r.colors.Highlight.default,onClick:l?void 0:()=>{},children:a(S,{})})})]})}var z=c.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,B={default:c(z)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:c(z)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},V=c.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,H=e=>a(V,{children:e}),U=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=B[e],o=()=>H(t);return a(i,{ref:n,...r,onClick:r.onClick,children:a(o,{})})};export{D as a,O as i,R as n,y as o,I as r,U as t};
//# sourceMappingURL=TabButton-YmjjbgRt.js.map