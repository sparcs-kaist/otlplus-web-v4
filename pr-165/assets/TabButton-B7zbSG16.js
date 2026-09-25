(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`7f5fa418e7d1fde946fa5e1c885d055ea4406891`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`4e52e948-2c81-42c3-8996-7a91aa82c1fc`,e._sentryDebugIdIdentifier=`sentry-dbid-4e52e948-2c81-42c3-8996-7a91aa82c1fc`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CB0EhgN6.js";import{l as r,n as i,r as a,t as o}from"./emotion-react-jsx-runtime.browser.esm-CSaFiDPm.js";import{n as s,t as c}from"./FlexWrapper-0gL-r7Ib.js";import{S as l,x as u}from"./axios-7NP8gRNy.js";import{t as d}from"./useAPI-DLTJZeXD.js";import{r as f,t as p}from"./Icon-DOSgIYod.js";import{t as m}from"./useTranslation-u4fjEpef.js";import{t as h}from"./IconButton-WdAZoYvt.js";import{t as g}from"./Typography-BKQmP6H_.js";var _=t(n(),1),v=f((0,_.jsx)(`path`,{d:`M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z`}),`Delete`),y=t(e()),b=f((0,_.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),x=f((0,_.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),S=s(c)`
    width: 100%;
    flex-shrink: 0;
`,C=s(c)`
    flex-wrap: wrap;
`,w=s(g)`
    padding: 5px 16px;
    border-radius: 16px;
    max-width: 100%;
    overflow-wrap: anywhere;
    background: ${({theme:e})=>e.colors.Background.Block.default};
`;function T({title:e,friends:t}){let{t:n}=m();return a(c,{direction:`column`,gap:10,align:`stretch`,children:[i(g,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?i(C,{direction:`row`,gap:6,children:t.map(e=>i(w,{type:`Normal`,color:`Text.light`,children:e.name},e.id))}):i(g,{type:`Small`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function E({lectureId:e}){let{t}=m(),{query:n}=d(`GET`,`/friends/lectures/${e}/overlaps`,{staleTime:0,gcTime:0});return i(S,{direction:`column`,gap:24,align:`stretch`,children:n.isPending?i(g,{type:`Small`,color:`Text.placeholder`,role:`status`,children:t(`friends.loadingOverlaps`)}):n.isError?i(g,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}):a(o,{children:[i(T,{title:t(`friends.sameLecture`),friends:n.data?.sameLecture??[]}),i(T,{title:t(`friends.sameCourseDifferentSection`),friends:n.data?.sameCourseDifferentSection??[]}),i(T,{title:t(`friends.previousSemesterSameProfessor`),friends:n.data?.previousSemesterSameProfessor??[]})]})})}function D(e){return e.map(e=>e.name).join(`, `)}function O(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function k(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function A(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var j=s(c)`
    width: 100%;
`,M=s(c)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,N=s(c)`
    flex: 1 0 0;
`,P=s(g)`
    white-space: nowrap;
`,F=({selectedLecture:e})=>{let{t}=m();if(!e)return null;let n=O(e.numPeople,e.limitPeople);return a(o,{children:[a(j,{direction:`column`,gap:8,children:[a(c,{direction:`row`,gap:6,children:[i(P,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.type`)}),i(g,{type:`Normal`,color:`Text.default`,children:e?.type})]}),a(c,{direction:`row`,gap:6,children:[i(P,{type:`NormalBold`,color:`Text.default`,children:t(`common.search.department`)}),i(g,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),a(c,{direction:`row`,gap:6,children:[i(P,{type:`NormalBold`,color:`Text.default`,children:t(`common.professor`)}),i(g,{type:`Normal`,color:`Text.default`,children:D(e?.professors||[])})]}),a(c,{direction:`row`,gap:6,children:[i(P,{type:`NormalBold`,color:`Text.default`,children:t(`common.room`)}),i(g,{type:`Normal`,color:`Text.default`,children:A(e?.classes||[])})]}),a(c,{direction:`row`,gap:6,children:[i(P,{type:`NormalBold`,color:`Text.default`,children:t(`common.limit`)}),i(g,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),a(c,{direction:`row`,gap:6,children:[i(P,{type:`NormalBold`,color:`Text.default`,children:t(`common.exam`)}),i(g,{type:`Normal`,color:`Text.default`,children:k(e?.examTimes||[])})]})]}),i(M,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e.isEnglish?`Eng`:`한`,t(`common.language`)],[e.credit,t(`common.credit`)],[n,t(`timetable.competitionRate`)]].map(([e,t],n)=>a(N,{direction:`column`,gap:0,align:`center`,children:[i(g,{type:`Bigger`,color:`Text.default`,children:e}),i(g,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},I=s(c)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function L({year:e,semester:t,setYear:n,setSemester:o,setCurrentTimetableId:s}){let c=r(),{query:f}=d(`GET`,`/semesters`);(0,y.useEffect)(()=>{let e=f.data?.semesters;if(e&&e.length>0){let t=e[e.length-1];t&&(n(t.year),o(t.semester))}},[f.data]);let{isFirstSemester:m,isLastSemester:_}=(0,y.useMemo)(()=>{if(!f.data)return{isFirstSemester:!1,isLastSemester:!1};let n=f.data.semesters,r=n[0],i=n[n.length-1];return!r||!i?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===r.year&&t===r.semester,isLastSemester:e===i.year&&t===i.semester}},[f.data,e,t]);return a(I,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[i(h,{onClick:m?void 0:()=>{m||(t===u.SPRING?(o(u.FALL),n(e-1)):o(u.SPRING),s(null))},styles:{padding:2.5},children:i(p,{size:20,color:m?c.colors.Text.disable:c.colors.Highlight.default,onClick:m?void 0:()=>{},children:i(b,{})})}),i(g,{color:`Highlight.default`,children:e}),i(g,{color:`Highlight.default`,children:l(t)}),i(h,{onClick:_?void 0:()=>{_||(t===u.FALL?(o(u.SPRING),n(e+1)):o(u.FALL),s(null))},styles:{padding:2.5},children:i(p,{size:20,color:_?c.colors.Text.disable:c.colors.Highlight.default,onClick:_?void 0:()=>{},children:i(x,{})})})]})}var R=s.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,z={default:s(R)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:s(R)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},B=s.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,V=e=>i(B,{children:e}),H=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let a=z[e],o=()=>V(t);return i(a,{ref:n,...r,onClick:r.onClick,children:i(o,{})})};export{E as a,D as i,L as n,v as o,F as r,H as t};
//# sourceMappingURL=TabButton-B7zbSG16.js.map