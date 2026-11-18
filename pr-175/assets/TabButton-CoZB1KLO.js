(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`f147e32d7310b17f1af4b50561dcb22b395f63ae`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`4efab905-4448-4f4c-acd5-bc74cdb7c95c`,e._sentryDebugIdIdentifier=`sentry-dbid-4efab905-4448-4f4c-acd5-bc74cdb7c95c`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-Bq6850lc.js";import{O as r,n as i}from"./chunk-62JRHF6Z-8R5vp8tz.js";import{l as a,n as o,r as s,t as c}from"./emotion-react-jsx-runtime.browser.esm-BPmkhApa.js";import{n as l,t as u}from"./FlexWrapper-B7Kpm3f7.js";import{S as d,f,i as p,j as ee,x as m,y as te}from"./axios-aUtcfvp1.js";import{h,l as g,t as _}from"./useAPI-C2YXYjn_.js";import{n as v,r as y,t as ne}from"./Credits-DHCZOTSd.js";import{r as b,t as x}from"./Icon-Bc6VJDbG.js";import{t as S}from"./useTranslation-CAjiTjOe.js";import{t as re}from"./IconButton-IdzZ-DUP.js";import{t as C}from"./Close-C8mm0ZGo.js";import{t as w}from"./Typography-B389td9I.js";import{t as T}from"./Button-D2qYRgrs.js";import{t as E}from"./StyledDivider-NA16sFf_.js";import{t as ie}from"./useIsDevice-kvpywfxM.js";import{t as D}from"./LoadingCircle-BHhWdonP.js";import{i as ae,t as O}from"./ReviewBlock-DuCMxzg4.js";import{t as oe}from"./Add-Botf453N.js";import{n as se,t as ce}from"./ReviewScoreSummary-izi9Vi3R.js";import{a as le,n as ue}from"./CustomTimeTableGrid-BPh8XCQf.js";var k=t(n(),1),A=b((0,k.jsx)(`path`,{d:`M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`}),`Star`),j=b((0,k.jsx)(`path`,{d:`m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z`}),`StarBorder`),M=t(e(),1),N=Symbol.for(`@ts-pattern/matcher`),P=Symbol.for(`@ts-pattern/isVariadic`),F=`@ts-pattern/anonymous-select-key`,I=e=>!!(e&&typeof e==`object`),L=e=>e&&!!e[N],R=(e,t,n)=>{if(L(e)){let{matched:r,selections:i}=e[N]().match(t);return r&&i&&Object.keys(i).forEach(e=>n(e,i[e])),r}if(I(e)){if(!I(t))return!1;if(Array.isArray(e)){if(!Array.isArray(t))return!1;let r=[],i=[],a=[];for(let t of e.keys()){let n=e[t];L(n)&&n[P]?a.push(n):a.length?i.push(n):r.push(n)}if(a.length){if(a.length>1)throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(t.length<r.length+i.length)return!1;let e=t.slice(0,r.length),o=i.length===0?[]:t.slice(-i.length),s=t.slice(r.length,i.length===0?1/0:-i.length);return r.every((t,r)=>R(t,e[r],n))&&i.every((e,t)=>R(e,o[t],n))&&(a.length===0||R(a[0],s,n))}return e.length===t.length&&e.every((e,r)=>R(e,t[r],n))}return Reflect.ownKeys(e).every(r=>{let i=e[r];return(r in t||L(a=i)&&a[N]().matcherType===`optional`)&&R(i,t[r],n);var a})}return Object.is(t,e)},z=e=>{var t;return I(e)?L(e)?(t=e[N]()).getSelectionKeys?.call(t)??[]:B(Array.isArray(e)?e:Object.values(e),z):[]},B=(e,t)=>e.reduce((e,n)=>e.concat(t(n)),[]);function V(e){return Object.assign(e,{optional:()=>de(e),and:t=>H(e,t),or:t=>fe(e,t),select:t=>t===void 0?W(e):W(t,e)})}function de(e){return V({[N]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return t===void 0?(z(e).forEach(e=>r(e,void 0)),{matched:!0,selections:n}):{matched:R(e,t,r),selections:n}},getSelectionKeys:()=>z(e),matcherType:`optional`})})}function H(...e){return V({[N]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return{matched:e.every(e=>R(e,t,r)),selections:n}},getSelectionKeys:()=>B(e,z),matcherType:`and`})})}function fe(...e){return V({[N]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return B(e,z).forEach(e=>r(e,void 0)),{matched:e.some(e=>R(e,t,r)),selections:n}},getSelectionKeys:()=>B(e,z),matcherType:`or`})})}function U(e){return{[N]:()=>({match:t=>({matched:!!e(t)})})}}function W(...e){let t=typeof e[0]==`string`?e[0]:void 0,n=e.length===2?e[1]:typeof e[0]==`string`?void 0:e[0];return V({[N]:()=>({match:e=>{let r={[t??F]:e};return{matched:n===void 0||R(n,e,(e,t)=>{r[e]=t}),selections:r}},getSelectionKeys:()=>[t??F].concat(n===void 0?[]:z(n))})})}function G(e){return!0}function K(e){return typeof e==`number`}function q(e){return typeof e==`string`}function J(e){return typeof e==`bigint`}V(U(G)),V(U(G));var Y=e=>Object.assign(V(e),{startsWith:t=>{return Y(H(e,(n=t,U(e=>q(e)&&e.startsWith(n)))));var n},endsWith:t=>{return Y(H(e,(n=t,U(e=>q(e)&&e.endsWith(n)))));var n},minLength:t=>Y(H(e,(e=>U(t=>q(t)&&t.length>=e))(t))),length:t=>Y(H(e,(e=>U(t=>q(t)&&t.length===e))(t))),maxLength:t=>Y(H(e,(e=>U(t=>q(t)&&t.length<=e))(t))),includes:t=>{return Y(H(e,(n=t,U(e=>q(e)&&e.includes(n)))));var n},regex:t=>{return Y(H(e,(n=t,U(e=>q(e)&&!!e.match(n)))));var n}});Y(U(q));var X=e=>Object.assign(V(e),{between:(t,n)=>X(H(e,((e,t)=>U(n=>K(n)&&e<=n&&t>=n))(t,n))),lt:t=>X(H(e,(e=>U(t=>K(t)&&t<e))(t))),gt:t=>X(H(e,(e=>U(t=>K(t)&&t>e))(t))),lte:t=>X(H(e,(e=>U(t=>K(t)&&t<=e))(t))),gte:t=>X(H(e,(e=>U(t=>K(t)&&t>=e))(t))),int:()=>X(H(e,U(e=>K(e)&&Number.isInteger(e)))),finite:()=>X(H(e,U(e=>K(e)&&Number.isFinite(e)))),positive:()=>X(H(e,U(e=>K(e)&&e>0))),negative:()=>X(H(e,U(e=>K(e)&&e<0)))});X(U(K));var Z=e=>Object.assign(V(e),{between:(t,n)=>Z(H(e,((e,t)=>U(n=>J(n)&&e<=n&&t>=n))(t,n))),lt:t=>Z(H(e,(e=>U(t=>J(t)&&t<e))(t))),gt:t=>Z(H(e,(e=>U(t=>J(t)&&t>e))(t))),lte:t=>Z(H(e,(e=>U(t=>J(t)&&t<=e))(t))),gte:t=>Z(H(e,(e=>U(t=>J(t)&&t>=e))(t))),positive:()=>Z(H(e,U(e=>J(e)&&e>0))),negative:()=>Z(H(e,U(e=>J(e)&&e<0)))});Z(U(J)),V(U(function(e){return typeof e==`boolean`})),V(U(function(e){return typeof e==`symbol`})),V(U(function(e){return e==null})),V(U(function(e){return e!=null}));var pe=class extends Error{constructor(e){let t;try{t=JSON.stringify(e)}catch{t=e}super(`Pattern matching error: no pattern matches value ${t}`),this.input=void 0,this.input=e}},Q={matched:!1,value:void 0};function me(e){return new he(e,Q)}var he=class e{constructor(e,t){this.input=void 0,this.state=void 0,this.input=e,this.state=t}with(...t){if(this.state.matched)return this;let n=t[t.length-1],r=[t[0]],i;t.length===3&&typeof t[1]==`function`?i=t[1]:t.length>2&&r.push(...t.slice(1,t.length-1));let a=!1,o={},s=(e,t)=>{a=!0,o[e]=t},c=!r.some(e=>R(e,this.input,s))||i&&!i(this.input)?Q:{matched:!0,value:n(a?F in o?o[F]:o:this.input,this.input)};return new e(this.input,c)}when(t,n){if(this.state.matched)return this;let r=!!t(this.input);return new e(this.input,r?{matched:!0,value:n(this.input,this.input)}:Q)}otherwise(e){return this.state.matched?this.state.value:e(this.input)}exhaustive(e=ge){return this.state.matched?this.state.value:e(this.input)}run(){return this.exhaustive()}returnType(){return this}narrow(){return this}};function ge(e){throw new pe(e)}var _e=l(u)`
    width: 100%;
    flex-shrink: 0;
`,ve=l(u)`
    flex-wrap: wrap;
`,ye=l(w)`
    min-height: 28px;
    padding: 5px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    text-align: left;
`,be=l.button`
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
`;function xe({title:e,friends:t}){let{t:n}=S(),i=r();return s(u,{direction:`column`,gap:10,align:`stretch`,children:[o(w,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?o(ve,{direction:`row`,gap:6,children:t.map(e=>{let t=new URLSearchParams({friendId:String(e.id),year:String(e.timetable.year),semester:String(e.timetable.semester)});return o(be,{type:`button`,title:e.description,"aria-description":e.description,onClick:()=>i(`/friends?${t}`),children:o(w,{type:`Normal`,color:`Text.light`,children:e.name})},e.id)})}):o(ye,{type:`Normal`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function Se({lectureId:e}){let{t}=S(),{query:n}=_(`GET`,`/friends/lectures/${e}/overlaps`,{staleTime:0,gcTime:0}),r=new Map;for(let[e,i]of[[t(`friends.sameLecture`),n.data?.sameLecture??[]],[t(`friends.sameCourseDifferentSection`),n.data?.sameCourseDifferentSection??[]]])for(let t of i)r.has(t.id)||r.set(t.id,{...t,description:e});return o(_e,{direction:`column`,gap:24,align:`stretch`,children:n.isPending?o(w,{type:`Small`,color:`Text.placeholder`,role:`status`,children:t(`friends.loadingOverlaps`)}):n.isError?o(w,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}):s(c,{children:[o(xe,{title:t(`friends.currentLectureFriends`),friends:[...r.values()]}),o(xe,{title:t(`friends.pastLectureFriends`),friends:(n.data?.previousSemesterSameProfessor??[]).map(e=>({...e,description:t(`friends.previousSemesterSameProfessor`)}))})]})})}function Ce({status:e,currentTimetableId:t,hasOverlap:n}){return e!==`idle`&&t===null||n}function we(e,t){for(let n of e)for(let e of t)if(n.day==e.day&&n.begin<e.end&&e.begin<n.end)return!0;return!1}var Te=`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do`;function Ee(e,t,n){return`${Te}?link=estblSubjt&params=${btoa(JSON.stringify({syy:String(t),smtDivCd:String(n),subjtCd:e,syllabusOpenYn:`0`}))}`}function De(e){return e.map(e=>e.name).join(`, `)}function Oe(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function ke(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function Ae(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var je=l(u)`
    width: 100%;
`,Me=l(u)`
    width: 100%;
    max-width: 300px;
    padding: ${({$compact:e})=>e?`10px 0`:`10px`};
`,Ne=l(u)`
    flex: 1 0 0;
    ${({$compact:e})=>e&&`
        height: 29px;
        > * { flex-shrink: 0; }
        > :first-child { margin-top: -5px; }
        > :last-child { margin-top: -3px; }
    `}
`,$=l(w)`
    white-space: nowrap;
`,Pe=({selectedLecture:e,metrics:t=`enrollment`})=>{let{t:n}=S();if(!e)return null;let r=Oe(e.numPeople,e.limitPeople);return s(c,{children:[s(je,{direction:`column`,gap:8,children:[s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.type`)}),o(w,{type:`Normal`,color:`Text.default`,children:e?.type})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.department`)}),o(w,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.professor`)}),o(w,{type:`Normal`,color:`Text.default`,children:De(e?.professors||[])})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.room`)}),o(w,{type:`Normal`,color:`Text.default`,children:Ae(e?.classes||[])})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.limit`)}),o(w,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.exam`)}),o(w,{type:`Normal`,color:`Text.default`,children:ke(e?.examTimes||[])})]})]}),o(Me,{$compact:t===`course`,direction:`row`,gap:0,justify:`space-around`,align:`center`,children:(t===`course`?[[e.classDuration,n(`common.numClasses`)],[e.expDuration,n(`common.numLabs`)],e.creditAU?[e.creditAU,`AU`]:[e.credit,n(`common.credit`)]]:[[e.isEnglish?`Eng`:`한`,n(`common.language`)],[e.credit,n(`common.credit`)],[r,n(`timetable.competitionRate`)]]).map(([e,n],r)=>s(Ne,{$compact:t===`course`,direction:`column`,gap:0,align:`center`,children:[o(w,{type:`Bigger`,color:`Text.default`,children:e}),o(w,{type:`Smaller`,color:`Text.default`,children:n})]},r))})]})},Fe=({selectedCourseId:e,selectedProfessorId:t,showSummary:n=!0,reviewVariant:r=`default`})=>{let{t:i}=S(),[a,l]=(0,M.useState)(!1),{query:d,setParams:f,data:p}=v(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:ee,inView:m}=y({threshold:0});return(0,M.useEffect)(()=>{l(!1);let n=setTimeout(()=>{f({mode:h.DEFAULT,courseId:e??void 0,professorId:t??void 0}),l(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,M.useEffect)(()=>{m&&d.hasNextPage&&!d.isFetchingNextPage&&d.fetchNextPage()},[m,d]),!p||!a?o(D,{}):s(c,{children:[n&&s(c,{children:[o(u,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:o(ce,{averageGrade:p?.averageGrade,averageLoad:p?.averageLoad,averageSpeech:p?.averageSpeech,reviewCount:p?.reviews.length,labels:{grade:i(`common.grade`),load:i(`common.load`),speech:i(`common.speech`)},fluid:!0})}),o(E,{})]}),p?.reviews.map(e=>o(O,{review:e,linkToDictionary:!0,variant:r},e.id)),d.hasNextPage&&o(D,{ref:ee})]})},Ie=l(u)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Le=l(u)`
    width: 100%;
`,Re=l(u)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,ze=l(u)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`,Be=l(i)`
    text-decoration: none;
`,Ve=l.a`
    text-decoration: none;
`,He=l(u)`
    width: 100%;
    text-align: center;
`,Ue=l(u)`
    padding: 12px 16px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 12px;
    box-shadow: ${({theme:e})=>e.elevation.low};
`,We=({addLectures:e,removeLectures:t,onMobileModalClose:n,currentTimetableId:r,timetableLectures:i=[],readOnlySelection:l})=>{let h=ee(),v=a(),{t:y}=S(),{user:b,status:D}=p(),O=ie(`tablet`),k=m(e=>e.selectedItems),A=l?[]:k,j=m(e=>e.hoveredLectures),N=m(e=>e.year),P=l?.year??N,F=m(e=>e.semesterEnum),I=l?.semester??F,L=A.length===1?A[0]:void 0,R=l?l.lecture:L?.kind===d.LECTURE?L.data:A.length===0&&j.length===1?j[0]:null,z=A.length>1||L!==void 0&&L.kind!==d.LECTURE,B=ue(v.colors.Tile.TimeTable.default),[V,de]=(0,M.useState)([]),{query:H,setParams:fe}=_(`GET`,`/users/${b?.id}/wishlist`,{enabled:!l&&D===`success`&&P!==-1});(0,M.useEffect)(()=>{l||P===-1||fe({year:P,semester:I})},[P,I,r]),(0,M.useEffect)(()=>{H.data&&de(H.data.courses.flatMap(e=>e.lectures).map(e=>e.id))},[H.data]);let{requestFunction:U}=_(`PATCH`,`/users/${b?.id}/wishlist`,{onSuccess:()=>{b&&h.invalidateQueries({queryKey:[f.userWishlist(b.id)]})}}),W=(0,M.useRef)(null),G=t=>{if(!i)return;let n=i.some(e=>we(e.classes,t.classes));if(Ce({status:D,currentTimetableId:r??null,hasOverlap:n})){n&&alert(y(`timetable.addLectureConflict`));return}e?.([t]),te(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:r,source:`LectureDetail`})},K=(e,t)=>{if(D===`idle`)return;let n=e?g.DELETE:g.ADD;te(`Update Wishlist`,{action:n,lectureId:t,source:`LectureDetail`}),U({lectureId:t,mode:n})};return o(Ie,{direction:`column`,gap:12,align:`center`,justify:!R&&!A.length?`center`:`start`,children:z?s(He,{direction:`column`,gap:16,align:`stretch`,justify:`flex-start`,children:[s(u,{direction:`row`,gap:8,align:`center`,justify:O?`space-between`:`center`,children:[O&&o(`div`,{style:{width:20}}),s(w,{type:`Bigger`,color:`Text.default`,children:[A.length,y(`timetable.numSelected`)]}),O&&n&&o(re,{"aria-label":`Close selected items`,onClick:n,children:o(x,{size:20,color:v.colors.Text.default,children:o(C,{})})})]}),A.map(e=>{let{colorIndex:t,title:n,description:r}=me(e).with({kind:d.LECTURE},({data:e})=>({colorIndex:e.courseId,title:`${e.name} ${e.subtitle}`,description:s(c,{children:[e.professors[0]?.name,` `,e.professors.length>1?`${y(`common.professors.over`)} ${e.professors.length-1}${y(`common.professors.people`)} `:` `,`| `,e.department.name,` | `,e.credit,y(`common.credit`)]})})).with({kind:d.CUSTOM},({data:e})=>({colorIndex:e.id*3+7,title:e.block_name,description:e.place})).exhaustive();return s(Ue,{"data-timetable-item-key":le(e),direction:`row`,gap:12,align:`center`,children:[o(x,{size:14,color:B[t%B.length],children:o(se,{})}),s(u,{direction:`column`,gap:4,flex:`1 1 auto`,children:[o(w,{type:`BigBold`,color:`Text.default`,children:n}),o(w,{type:`Small`,color:`Text.dark`,children:r})]})]},le(e))})]}):R?s(c,{children:[s(Re,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[s(u,{direction:`row`,align:`center`,gap:8,justify:O&&n?`space-between`:`center`,style:{width:`100%`},children:[O&&n&&o(`div`,{style:{width:20}}),o(w,{type:`Bigger`,color:`Text.default`,children:R.name+R.subtitle}),O&&n&&o(x,{size:20,onClick:n,color:v.colors.Text.default,children:o(C,{})})]}),o(w,{type:`Big`,color:`Text.default`,children:R.code+` `+(R.classNo===``?``:`(${R.classNo})`)})]}),s(u,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[o(Be,{to:`/dictionary?courseId=${R.courseId}`,children:o(w,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:y(`header.dictionary`)})}),o(Ve,{href:Ee(R.code,P,I),rel:`noopener noreferrer`,target:`_blank`,children:o(w,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:y(`header.syllabus`)})})]}),s(Le,{direction:`column`,gap:10,align:`center`,children:[o(Pe,{selectedLecture:R,metrics:l?`course`:`enrollment`}),l&&o(ce,{averageGrade:R.averageGrade,averageLoad:R.averageLoad,averageSpeech:R.averageSpeech,reviewCount:void 0,labels:{grade:y(`common.grade`),load:y(`common.load`),speech:y(`common.speech`)},fluid:!0,compact:!0})]}),(D===`success`||l)&&s(c,{children:[o(E,{}),o(Se,{lectureId:R.id}),o(E,{})]}),o(Le,{ref:W,direction:`column`,gap:10,children:o(Fe,{showSummary:!l,reviewVariant:l?`simple`:`default`,selectedCourseId:R.courseId,selectedProfessorId:R.professors[0]?.id??-1},R.id)}),O&&!l&&s(ze,{direction:`row`,gap:12,justify:`flex-end`,children:[D===`success`&&s(T,{onClick:()=>{K(V.includes(R.id),R.id),n&&n()},children:[o(x,{size:15,children:o(ae,{})}),o(w,{type:`NormalBold`,children:V.includes(R.id)?y(`timetable.removeFromWishlist`):y(`timetable.addToWishlist`)})]}),(r!=null||D===`idle`)&&(i?.some(e=>e.id===R.id)?s(T,{type:`selected`,onClick:()=>{t&&t(R.id),n&&n()},children:[o(x,{size:15,children:o(C,{})}),o(w,{type:`NormalBold`,children:y(`timetable.removeFromTimetable`)})]}):s(T,{type:`selected`,onClick:()=>{G(R),n&&n()},children:[o(x,{size:15,children:o(oe,{})}),o(w,{type:`NormalBold`,children:y(`timetable.addToTimetable`)})]}))]})]}):l?o(w,{type:`Normal`,color:`Text.placeholder`,children:y(`friends.selectLecture`)}):o(ne,{})})},Ge=l.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,Ke={default:l(Ge)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:l(Ge)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    cursor: pointer;
`},qe=l.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,Je=e=>o(qe,{children:e}),Ye=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=Ke[e],a=()=>Je(t);return o(i,{ref:n,...r,onClick:r.onClick,children:o(a,{})})};export{Ce as a,A as c,we as i,We as n,me as o,De as r,j as s,Ye as t};
//# sourceMappingURL=TabButton-CoZB1KLO.js.map