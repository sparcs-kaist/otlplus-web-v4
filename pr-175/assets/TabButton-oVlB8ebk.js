(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`0db6439ea8e87db7838d61a6cab5de96c8dddaf3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`8715d4b2-4d71-4d38-a77c-0c0826d7923d`,e._sentryDebugIdIdentifier=`sentry-dbid-8715d4b2-4d71-4d38-a77c-0c0826d7923d`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-BZE1xsjc.js";import{O as r,n as i}from"./chunk-62JRHF6Z-DViInGCv.js";import{l as a,n as o,r as s,t as c}from"./emotion-react-jsx-runtime.browser.esm-Or34D-vL.js";import{n as l,t as u}from"./FlexWrapper-CO2K-bjN.js";import{S as d,f,i as p,j as m,w as h,x as g,y as _}from"./axios-D0zlLT41.js";import{h as v,l as ee,t as y}from"./useAPI-CX6e3roT.js";import{n as b,r as x,t as te}from"./Credits-DuX7GuBH.js";import{r as S,t as C}from"./Icon-Dt2kLzQX.js";import{t as w}from"./useTranslation-DK_dxXkF.js";import{t as T}from"./IconButton-B9AzwVux.js";import{t as E}from"./Close-6Q3cy6hB.js";import{t as D}from"./Typography-IhCbEtVc.js";import{t as O}from"./Button-DvBH0IC_.js";import{t as k}from"./StyledDivider-DyAN-ie5.js";import{t as ne}from"./useIsDevice-CZPM1pDZ.js";import{t as A}from"./LoadingCircle-DTP98yS2.js";import{i as re,t as ie}from"./ReviewBlock-DoJdN7c3.js";import{t as ae}from"./Add-ia25h1rN.js";import{n as oe,t as se}from"./ReviewScoreSummary-DDFjVE-o.js";import{a as ce,n as le}from"./CustomTimeTableGrid-DMplkTDa.js";var j=t(e(),1),M=t(n(),1),N=S((0,M.jsx)(`path`,{d:`M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z`}),`NavigateBefore`),ue=S((0,M.jsx)(`path`,{d:`M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}),`NavigateNext`),P=S((0,M.jsx)(`path`,{d:`M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`}),`Star`),de=S((0,M.jsx)(`path`,{d:`m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z`}),`StarBorder`),F=Symbol.for(`@ts-pattern/matcher`),I=Symbol.for(`@ts-pattern/isVariadic`),L=`@ts-pattern/anonymous-select-key`,R=e=>!!(e&&typeof e==`object`),z=e=>e&&!!e[F],B=(e,t,n)=>{if(z(e)){let{matched:r,selections:i}=e[F]().match(t);return r&&i&&Object.keys(i).forEach(e=>n(e,i[e])),r}if(R(e)){if(!R(t))return!1;if(Array.isArray(e)){if(!Array.isArray(t))return!1;let r=[],i=[],a=[];for(let t of e.keys()){let n=e[t];z(n)&&n[I]?a.push(n):a.length?i.push(n):r.push(n)}if(a.length){if(a.length>1)throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(t.length<r.length+i.length)return!1;let e=t.slice(0,r.length),o=i.length===0?[]:t.slice(-i.length),s=t.slice(r.length,i.length===0?1/0:-i.length);return r.every((t,r)=>B(t,e[r],n))&&i.every((e,t)=>B(e,o[t],n))&&(a.length===0||B(a[0],s,n))}return e.length===t.length&&e.every((e,r)=>B(e,t[r],n))}return Reflect.ownKeys(e).every(r=>{let i=e[r];return(r in t||z(a=i)&&a[F]().matcherType===`optional`)&&B(i,t[r],n);var a})}return Object.is(t,e)},V=e=>{var t;return R(e)?z(e)?(t=e[F]()).getSelectionKeys?.call(t)??[]:H(Array.isArray(e)?e:Object.values(e),V):[]},H=(e,t)=>e.reduce((e,n)=>e.concat(t(n)),[]);function U(e){return Object.assign(e,{optional:()=>fe(e),and:t=>W(e,t),or:t=>pe(e,t),select:t=>t===void 0?me(e):me(t,e)})}function fe(e){return U({[F]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return t===void 0?(V(e).forEach(e=>r(e,void 0)),{matched:!0,selections:n}):{matched:B(e,t,r),selections:n}},getSelectionKeys:()=>V(e),matcherType:`optional`})})}function W(...e){return U({[F]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return{matched:e.every(e=>B(e,t,r)),selections:n}},getSelectionKeys:()=>H(e,V),matcherType:`and`})})}function pe(...e){return U({[F]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return H(e,V).forEach(e=>r(e,void 0)),{matched:e.some(e=>B(e,t,r)),selections:n}},getSelectionKeys:()=>H(e,V),matcherType:`or`})})}function G(e){return{[F]:()=>({match:t=>({matched:!!e(t)})})}}function me(...e){let t=typeof e[0]==`string`?e[0]:void 0,n=e.length===2?e[1]:typeof e[0]==`string`?void 0:e[0];return U({[F]:()=>({match:e=>{let r={[t??L]:e};return{matched:n===void 0||B(n,e,(e,t)=>{r[e]=t}),selections:r}},getSelectionKeys:()=>[t??L].concat(n===void 0?[]:V(n))})})}function he(e){return!0}function K(e){return typeof e==`number`}function q(e){return typeof e==`string`}function J(e){return typeof e==`bigint`}U(G(he)),U(G(he));var Y=e=>Object.assign(U(e),{startsWith:t=>{return Y(W(e,(n=t,G(e=>q(e)&&e.startsWith(n)))));var n},endsWith:t=>{return Y(W(e,(n=t,G(e=>q(e)&&e.endsWith(n)))));var n},minLength:t=>Y(W(e,(e=>G(t=>q(t)&&t.length>=e))(t))),length:t=>Y(W(e,(e=>G(t=>q(t)&&t.length===e))(t))),maxLength:t=>Y(W(e,(e=>G(t=>q(t)&&t.length<=e))(t))),includes:t=>{return Y(W(e,(n=t,G(e=>q(e)&&e.includes(n)))));var n},regex:t=>{return Y(W(e,(n=t,G(e=>q(e)&&!!e.match(n)))));var n}});Y(G(q));var X=e=>Object.assign(U(e),{between:(t,n)=>X(W(e,((e,t)=>G(n=>K(n)&&e<=n&&t>=n))(t,n))),lt:t=>X(W(e,(e=>G(t=>K(t)&&t<e))(t))),gt:t=>X(W(e,(e=>G(t=>K(t)&&t>e))(t))),lte:t=>X(W(e,(e=>G(t=>K(t)&&t<=e))(t))),gte:t=>X(W(e,(e=>G(t=>K(t)&&t>=e))(t))),int:()=>X(W(e,G(e=>K(e)&&Number.isInteger(e)))),finite:()=>X(W(e,G(e=>K(e)&&Number.isFinite(e)))),positive:()=>X(W(e,G(e=>K(e)&&e>0))),negative:()=>X(W(e,G(e=>K(e)&&e<0)))});X(G(K));var Z=e=>Object.assign(U(e),{between:(t,n)=>Z(W(e,((e,t)=>G(n=>J(n)&&e<=n&&t>=n))(t,n))),lt:t=>Z(W(e,(e=>G(t=>J(t)&&t<e))(t))),gt:t=>Z(W(e,(e=>G(t=>J(t)&&t>e))(t))),lte:t=>Z(W(e,(e=>G(t=>J(t)&&t<=e))(t))),gte:t=>Z(W(e,(e=>G(t=>J(t)&&t>=e))(t))),positive:()=>Z(W(e,G(e=>J(e)&&e>0))),negative:()=>Z(W(e,G(e=>J(e)&&e<0)))});Z(G(J)),U(G(function(e){return typeof e==`boolean`})),U(G(function(e){return typeof e==`symbol`})),U(G(function(e){return e==null})),U(G(function(e){return e!=null}));var ge=class extends Error{constructor(e){let t;try{t=JSON.stringify(e)}catch{t=e}super(`Pattern matching error: no pattern matches value ${t}`),this.input=void 0,this.input=e}},Q={matched:!1,value:void 0};function _e(e){return new ve(e,Q)}var ve=class e{constructor(e,t){this.input=void 0,this.state=void 0,this.input=e,this.state=t}with(...t){if(this.state.matched)return this;let n=t[t.length-1],r=[t[0]],i;t.length===3&&typeof t[1]==`function`?i=t[1]:t.length>2&&r.push(...t.slice(1,t.length-1));let a=!1,o={},s=(e,t)=>{a=!0,o[e]=t},c=!r.some(e=>B(e,this.input,s))||i&&!i(this.input)?Q:{matched:!0,value:n(a?L in o?o[L]:o:this.input,this.input)};return new e(this.input,c)}when(t,n){if(this.state.matched)return this;let r=!!t(this.input);return new e(this.input,r?{matched:!0,value:n(this.input,this.input)}:Q)}otherwise(e){return this.state.matched?this.state.value:e(this.input)}exhaustive(e=ye){return this.state.matched?this.state.value:e(this.input)}run(){return this.exhaustive()}returnType(){return this}narrow(){return this}};function ye(e){throw new ge(e)}var be=l(u)`
    width: 100%;
    flex-shrink: 0;
`,xe=l(u)`
    flex-wrap: wrap;
`,Se=l.button`
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
`;function Ce({title:e,friends:t}){let{t:n}=w(),i=r();return s(u,{direction:`column`,gap:10,align:`stretch`,children:[o(D,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?o(xe,{direction:`row`,gap:6,children:t.map(e=>{let t=new URLSearchParams({friendId:String(e.id),year:String(e.timetable.year),semester:String(e.timetable.semester)});return o(Se,{type:`button`,title:e.description,"aria-description":e.description,onClick:()=>i(`/friends?${t}`),children:o(D,{type:`Normal`,color:`Text.light`,children:e.name})},e.id)})}):o(D,{type:`Small`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function we({lectureId:e}){let{t}=w(),{query:n}=y(`GET`,`/friends/lectures/${e}/overlaps`,{staleTime:0,gcTime:0}),r=new Map;for(let[e,i]of[[t(`friends.sameLecture`),n.data?.sameLecture??[]],[t(`friends.sameCourseDifferentSection`),n.data?.sameCourseDifferentSection??[]]])for(let t of i)r.has(t.id)||r.set(t.id,{...t,description:e});return o(be,{direction:`column`,gap:24,align:`stretch`,children:n.isPending?o(D,{type:`Small`,color:`Text.placeholder`,role:`status`,children:t(`friends.loadingOverlaps`)}):n.isError?o(D,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}):s(c,{children:[o(Ce,{title:t(`friends.currentLectureFriends`),friends:[...r.values()]}),o(Ce,{title:t(`friends.pastLectureFriends`),friends:(n.data?.previousSemesterSameProfessor??[]).map(e=>({...e,description:t(`friends.previousSemesterSameProfessor`)}))})]})})}function Te({status:e,currentTimetableId:t,hasOverlap:n}){return e!==`idle`&&t===null||n}function Ee(e,t){for(let n of e)for(let e of t)if(n.day==e.day&&n.begin<e.end&&e.begin<n.end)return!0;return!1}var De=`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do`;function Oe(e,t,n){return`${De}?link=estblSubjt&params=${btoa(JSON.stringify({syy:String(t),smtDivCd:String(n),subjtCd:e,syllabusOpenYn:`0`}))}`}function ke(e){return e.map(e=>e.name).join(`, `)}function Ae(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function je(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function Me(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var Ne=l(u)`
    width: 100%;
`,Pe=l(u)`
    width: 100%;
    max-width: 300px;
    padding: ${({$compact:e})=>e?`10px 0`:`10px`};
`,Fe=l(u)`
    flex: 1 0 0;
    ${({$compact:e})=>e&&`
        height: 29px;
        > * { flex-shrink: 0; }
        > :first-child { margin-top: -5px; }
        > :last-child { margin-top: -3px; }
    `}
`,$=l(D)`
    white-space: nowrap;
`,Ie=({selectedLecture:e,metrics:t=`enrollment`})=>{let{t:n}=w();if(!e)return null;let r=Ae(e.numPeople,e.limitPeople);return s(c,{children:[s(Ne,{direction:`column`,gap:8,children:[s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.type`)}),o(D,{type:`Normal`,color:`Text.default`,children:e?.type})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.department`)}),o(D,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.professor`)}),o(D,{type:`Normal`,color:`Text.default`,children:ke(e?.professors||[])})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.room`)}),o(D,{type:`Normal`,color:`Text.default`,children:Me(e?.classes||[])})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.limit`)}),o(D,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.exam`)}),o(D,{type:`Normal`,color:`Text.default`,children:je(e?.examTimes||[])})]})]}),o(Pe,{$compact:t===`course`,direction:`row`,gap:0,justify:`space-around`,align:`center`,children:(t===`course`?[[e.classDuration,n(`common.numClasses`)],[e.expDuration,n(`common.numLabs`)],e.creditAU?[e.creditAU,`AU`]:[e.credit,n(`common.credit`)]]:[[e.isEnglish?`Eng`:`한`,n(`common.language`)],[e.credit,n(`common.credit`)],[r,n(`timetable.competitionRate`)]]).map(([e,n],r)=>s(Fe,{$compact:t===`course`,direction:`column`,gap:0,align:`center`,children:[o(D,{type:`Bigger`,color:`Text.default`,children:e}),o(D,{type:`Smaller`,color:`Text.default`,children:n})]},r))})]})},Le=({selectedCourseId:e,selectedProfessorId:t,showSummary:n=!0,reviewVariant:r=`default`})=>{let{t:i}=w(),[a,l]=(0,j.useState)(!1),{query:d,setParams:f,data:p}=b(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:m,inView:h}=x({threshold:0});return(0,j.useEffect)(()=>{l(!1);let n=setTimeout(()=>{f({mode:v.DEFAULT,courseId:e??void 0,professorId:t??void 0}),l(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,j.useEffect)(()=>{h&&d.hasNextPage&&!d.isFetchingNextPage&&d.fetchNextPage()},[h,d]),!p||!a?o(A,{}):s(c,{children:[n&&s(c,{children:[o(u,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:o(se,{averageGrade:p?.averageGrade,averageLoad:p?.averageLoad,averageSpeech:p?.averageSpeech,reviewCount:p?.reviews.length,labels:{grade:i(`common.grade`),load:i(`common.load`),speech:i(`common.speech`)},fluid:!0})}),o(k,{})]}),p?.reviews.map(e=>o(ie,{review:e,linkToDictionary:!0,variant:r},e.id)),d.hasNextPage&&o(A,{ref:m})]})},Re=l(u)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,ze=l(u)`
    width: 100%;
`,Be=l(u)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,Ve=l(u)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`,He=l(i)`
    text-decoration: none;
`,Ue=l.a`
    text-decoration: none;
`,We=l(u)`
    width: 100%;
    text-align: center;
`,Ge=l(u)`
    padding: 12px 16px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 12px;
    box-shadow: ${({theme:e})=>e.elevation.low};
`,Ke=({addLectures:e,removeLectures:t,onMobileModalClose:n,currentTimetableId:r,timetableLectures:i=[],readOnlySelection:l})=>{let h=m(),v=a(),{t:b}=w(),{user:x,status:S}=p(),A=ne(`tablet`),ie=g(e=>e.selectedItems),M=l?[]:ie,N=g(e=>e.hoveredLectures),ue=g(e=>e.year),P=l?.year??ue,de=g(e=>e.semesterEnum),F=l?.semester??de,I=M.length===1?M[0]:void 0,L=l?l.lecture:I?.kind===d.LECTURE?I.data:M.length===0&&N.length===1?N[0]:null,R=M.length>1||I!==void 0&&I.kind!==d.LECTURE,z=le(v.colors.Tile.TimeTable.default),[B,V]=(0,j.useState)([]),{query:H,setParams:U}=y(`GET`,`/users/${x?.id}/wishlist`,{enabled:!l&&S===`success`&&P!==-1});(0,j.useEffect)(()=>{l||P===-1||U({year:P,semester:F})},[P,F,r]),(0,j.useEffect)(()=>{H.data&&V(H.data.courses.flatMap(e=>e.lectures).map(e=>e.id))},[H.data]);let{requestFunction:fe}=y(`PATCH`,`/users/${x?.id}/wishlist`,{onSuccess:()=>{x&&h.invalidateQueries({queryKey:[f.userWishlist(x.id)]})}}),W=(0,j.useRef)(null),pe=t=>{if(!i)return;let n=i.some(e=>Ee(e.classes,t.classes));if(Te({status:S,currentTimetableId:r??null,hasOverlap:n})){n&&alert(b(`timetable.addLectureConflict`));return}e?.([t]),_(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:r,source:`LectureDetail`})},G=(e,t)=>{if(S===`idle`)return;let n=e?ee.DELETE:ee.ADD;_(`Update Wishlist`,{action:n,lectureId:t,source:`LectureDetail`}),fe({lectureId:t,mode:n})};return o(Re,{direction:`column`,gap:12,align:`center`,justify:!L&&!M.length?`center`:`start`,children:R?s(We,{direction:`column`,gap:16,align:`stretch`,justify:`flex-start`,children:[s(u,{direction:`row`,gap:8,align:`center`,justify:A?`space-between`:`center`,children:[A&&o(`div`,{style:{width:20}}),s(D,{type:`Bigger`,color:`Text.default`,children:[M.length,b(`timetable.numSelected`)]}),A&&n&&o(T,{"aria-label":`Close selected items`,onClick:n,children:o(C,{size:20,color:v.colors.Text.default,children:o(E,{})})})]}),M.map(e=>{let{colorIndex:t,title:n,description:r}=_e(e).with({kind:d.LECTURE},({data:e})=>({colorIndex:e.courseId,title:`${e.name} ${e.subtitle}`,description:s(c,{children:[e.professors[0]?.name,` `,e.professors.length>1?`${b(`common.professors.over`)} ${e.professors.length-1}${b(`common.professors.people`)} `:` `,`| `,e.department.name,` | `,e.credit,b(`common.credit`)]})})).with({kind:d.CUSTOM},({data:e})=>({colorIndex:e.id*3+7,title:e.block_name,description:e.place})).exhaustive();return s(Ge,{"data-timetable-item-key":ce(e),direction:`row`,gap:12,align:`center`,children:[o(C,{size:14,color:z[t%z.length],children:o(oe,{})}),s(u,{direction:`column`,gap:4,flex:`1 1 auto`,children:[o(D,{type:`BigBold`,color:`Text.default`,children:n}),o(D,{type:`Small`,color:`Text.dark`,children:r})]})]},ce(e))})]}):L?s(c,{children:[s(Be,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[s(u,{direction:`row`,align:`center`,gap:8,justify:A&&n?`space-between`:`center`,style:{width:`100%`},children:[A&&n&&o(`div`,{style:{width:20}}),o(D,{type:`Bigger`,color:`Text.default`,children:L.name+L.subtitle}),A&&n&&o(C,{size:20,onClick:n,color:v.colors.Text.default,children:o(E,{})})]}),o(D,{type:`Big`,color:`Text.default`,children:L.code+` `+(L.classNo===``?``:`(${L.classNo})`)})]}),s(u,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[o(He,{to:`/dictionary?courseId=${L.courseId}`,children:o(D,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:b(`header.dictionary`)})}),o(Ue,{href:Oe(L.code,P,F),rel:`noopener noreferrer`,target:`_blank`,children:o(D,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:b(`header.syllabus`)})})]}),s(ze,{direction:`column`,gap:10,align:`center`,children:[o(Ie,{selectedLecture:L,metrics:l?`course`:`enrollment`}),l&&o(se,{averageGrade:L.averageGrade,averageLoad:L.averageLoad,averageSpeech:L.averageSpeech,reviewCount:void 0,labels:{grade:b(`common.grade`),load:b(`common.load`),speech:b(`common.speech`)},fluid:!0,compact:!0})]}),(S===`success`||l)&&s(c,{children:[o(k,{}),o(we,{lectureId:L.id}),o(k,{})]}),o(ze,{ref:W,direction:`column`,gap:10,children:o(Le,{showSummary:!l,reviewVariant:l?`simple`:`default`,selectedCourseId:L.courseId,selectedProfessorId:L.professors[0]?.id??-1},L.id)}),A&&!l&&s(Ve,{direction:`row`,gap:12,justify:`flex-end`,children:[S===`success`&&s(O,{onClick:()=>{G(B.includes(L.id),L.id),n&&n()},children:[o(C,{size:15,children:o(re,{})}),o(D,{type:`NormalBold`,children:B.includes(L.id)?b(`timetable.removeFromWishlist`):b(`timetable.addToWishlist`)})]}),(r!=null||S===`idle`)&&(i?.some(e=>e.id===L.id)?s(O,{type:`selected`,onClick:()=>{t&&t(L.id),n&&n()},children:[o(C,{size:15,children:o(E,{})}),o(D,{type:`NormalBold`,children:b(`timetable.removeFromTimetable`)})]}):s(O,{type:`selected`,onClick:()=>{pe(L),n&&n()},children:[o(C,{size:15,children:o(ae,{})}),o(D,{type:`NormalBold`,children:b(`timetable.addToTimetable`)})]}))]})]}):l?o(D,{type:`Normal`,color:`Text.placeholder`,children:b(`friends.selectLecture`)}):o(te,{})})},qe=l(u)`
    width: ${({$outlined:e})=>e?136:150}px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
    ${({$outlined:e,theme:t})=>e&&`border: 1px solid ${t.colors.Line.divider};`}
`,Je=l.img`
    display: block;
    transform: rotate(${({$previous:e})=>e?90:-90}deg);
`;function Ye({year:e,semester:t,onChange:n,variant:r=`default`}){let i=a(),{t:l}=w(),u=r===`outlined`,{query:d}=y(`GET`,`/semesters`),{query:f}=y(`GET`,`/semesters/current`);(0,j.useEffect)(()=>{if(e>=0)return;let t=f.data;t&&n(t.year,t.semester)},[f.data,e,n]);let{previousSemester:p,nextSemester:m}=(0,j.useMemo)(()=>{let n=d.data?.semesters,r=n?.findIndex(n=>n.year===e&&n.semester===t);return r===void 0||r===-1?{previousSemester:void 0,nextSemester:void 0}:{previousSemester:n?.[r-1],nextSemester:n?.[r+1]}},[d.data,e,t]),g=!p,_=!m;return s(qe,{$outlined:u,direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[o(T,{"aria-label":l(`friends.previousSemester`),onClick:g?void 0:()=>{p&&n(p.year,p.semester)},styles:u?{padding:0,width:12,height:14,opacity:g?.4:1}:{padding:2.5},children:u?o(Je,{src:`/images/friends/design/chevron-down.svg`,alt:``,$previous:!0}):o(C,{size:20,color:g?i.colors.Text.disable:i.colors.Highlight.default,onClick:g?void 0:()=>{},children:o(N,{})})}),u?o(D,{type:`Normal`,color:`Highlight.default`,style:{whiteSpace:`nowrap`},children:e>=0?l(`friends.semesterLabel`,{year:e,semester:h(t)}):`—`}):s(c,{children:[o(D,{color:`Highlight.default`,children:e}),o(D,{color:`Highlight.default`,children:h(t)})]}),o(T,{"aria-label":l(`friends.nextSemester`),onClick:_?void 0:()=>{m&&n(m.year,m.semester)},styles:u?{padding:0,width:12,height:14,opacity:_?.4:1}:{padding:2.5},children:u?o(Je,{src:`/images/friends/design/chevron-down.svg`,alt:``,$previous:!1}):o(C,{size:20,color:_?i.colors.Text.disable:i.colors.Highlight.default,onClick:_?void 0:()=>{},children:o(ue,{})})})]})}var Xe=l.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,Ze={default:l(Xe)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:l(Xe)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`},Qe=l.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,$e=e=>o(Qe,{children:e}),et=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=Ze[e],a=()=>$e(t);return o(i,{ref:n,...r,onClick:r.onClick,children:o(a,{})})};export{Ee as a,de as c,ke as i,P as l,Ye as n,Te as o,Ke as r,_e as s,et as t};
//# sourceMappingURL=TabButton-oVlB8ebk.js.map