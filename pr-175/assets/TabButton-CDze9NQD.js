(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`c1aebdd282b67afa1b53e43cc26ce1850ae0b1aa`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`539b15ad-a514-4ced-8070-6cf9105d5435`,e._sentryDebugIdIdentifier=`sentry-dbid-539b15ad-a514-4ced-8070-6cf9105d5435`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CmbDuOCq.js";import{O as r,n as i}from"./chunk-62JRHF6Z-D3feuEc0.js";import{l as a,n as o,r as s,t as c}from"./emotion-react-jsx-runtime.browser.esm-C-VK7DYR.js";import{n as l,t as u}from"./FlexWrapper-b05yWJhB.js";import{S as d,f,i as p,j as m,x as h,y as ee}from"./axios-BFczPSG5.js";import{h as te,l as ne,t as g}from"./useAPI-CbdHH3UV.js";import{n as _,r as v,t as re}from"./Credits-T5_YSCZB.js";import{r as y,t as b}from"./Icon-DSwPYe90.js";import{t as x}from"./useTranslation-BIOUTDJF.js";import{t as ie}from"./IconButton-BxOq-zm1.js";import{t as S}from"./Close-DbJXPlRb.js";import{t as C}from"./Typography-C9BVBt-s.js";import{t as w}from"./Button-Dqsz1Mw4.js";import{t as T}from"./StyledDivider-YLCMCwk7.js";import{t as ae}from"./useIsDevice-DYHrAQdJ.js";import{t as E}from"./LoadingCircle-B-Pdxxci.js";import{i as oe,t as D}from"./ReviewBlock-KAOJ5SrA.js";import{t as se}from"./Add-s24YKTiB.js";import{n as ce,t as O}from"./ReviewScoreSummary-BBKwvljN.js";import{a as le,n as ue}from"./CustomTimeTableGrid-Cg1XvK4h.js";var k=t(n(),1),A=y((0,k.jsx)(`path`,{d:`M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`}),`Star`),j=y((0,k.jsx)(`path`,{d:`m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z`}),`StarBorder`),M=t(e(),1),N=Symbol.for(`@ts-pattern/matcher`),P=Symbol.for(`@ts-pattern/isVariadic`),F=`@ts-pattern/anonymous-select-key`,I=e=>!!(e&&typeof e==`object`),L=e=>e&&!!e[N],R=(e,t,n)=>{if(L(e)){let{matched:r,selections:i}=e[N]().match(t);return r&&i&&Object.keys(i).forEach(e=>n(e,i[e])),r}if(I(e)){if(!I(t))return!1;if(Array.isArray(e)){if(!Array.isArray(t))return!1;let r=[],i=[],a=[];for(let t of e.keys()){let n=e[t];L(n)&&n[P]?a.push(n):a.length?i.push(n):r.push(n)}if(a.length){if(a.length>1)throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");if(t.length<r.length+i.length)return!1;let e=t.slice(0,r.length),o=i.length===0?[]:t.slice(-i.length),s=t.slice(r.length,i.length===0?1/0:-i.length);return r.every((t,r)=>R(t,e[r],n))&&i.every((e,t)=>R(e,o[t],n))&&(a.length===0||R(a[0],s,n))}return e.length===t.length&&e.every((e,r)=>R(e,t[r],n))}return Reflect.ownKeys(e).every(r=>{let i=e[r];return(r in t||L(a=i)&&a[N]().matcherType===`optional`)&&R(i,t[r],n);var a})}return Object.is(t,e)},z=e=>{var t;return I(e)?L(e)?(t=e[N]()).getSelectionKeys?.call(t)??[]:B(Array.isArray(e)?e:Object.values(e),z):[]},B=(e,t)=>e.reduce((e,n)=>e.concat(t(n)),[]);function V(e){return Object.assign(e,{optional:()=>de(e),and:t=>H(e,t),or:t=>fe(e,t),select:t=>t===void 0?W(e):W(t,e)})}function de(e){return V({[N]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return t===void 0?(z(e).forEach(e=>r(e,void 0)),{matched:!0,selections:n}):{matched:R(e,t,r),selections:n}},getSelectionKeys:()=>z(e),matcherType:`optional`})})}function H(...e){return V({[N]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return{matched:e.every(e=>R(e,t,r)),selections:n}},getSelectionKeys:()=>B(e,z),matcherType:`and`})})}function fe(...e){return V({[N]:()=>({match:t=>{let n={},r=(e,t)=>{n[e]=t};return B(e,z).forEach(e=>r(e,void 0)),{matched:e.some(e=>R(e,t,r)),selections:n}},getSelectionKeys:()=>B(e,z),matcherType:`or`})})}function U(e){return{[N]:()=>({match:t=>({matched:!!e(t)})})}}function W(...e){let t=typeof e[0]==`string`?e[0]:void 0,n=e.length===2?e[1]:typeof e[0]==`string`?void 0:e[0];return V({[N]:()=>({match:e=>{let r={[t??F]:e};return{matched:n===void 0||R(n,e,(e,t)=>{r[e]=t}),selections:r}},getSelectionKeys:()=>[t??F].concat(n===void 0?[]:z(n))})})}function G(e){return!0}function K(e){return typeof e==`number`}function q(e){return typeof e==`string`}function J(e){return typeof e==`bigint`}V(U(G)),V(U(G));var Y=e=>Object.assign(V(e),{startsWith:t=>{return Y(H(e,(n=t,U(e=>q(e)&&e.startsWith(n)))));var n},endsWith:t=>{return Y(H(e,(n=t,U(e=>q(e)&&e.endsWith(n)))));var n},minLength:t=>Y(H(e,(e=>U(t=>q(t)&&t.length>=e))(t))),length:t=>Y(H(e,(e=>U(t=>q(t)&&t.length===e))(t))),maxLength:t=>Y(H(e,(e=>U(t=>q(t)&&t.length<=e))(t))),includes:t=>{return Y(H(e,(n=t,U(e=>q(e)&&e.includes(n)))));var n},regex:t=>{return Y(H(e,(n=t,U(e=>q(e)&&!!e.match(n)))));var n}});Y(U(q));var X=e=>Object.assign(V(e),{between:(t,n)=>X(H(e,((e,t)=>U(n=>K(n)&&e<=n&&t>=n))(t,n))),lt:t=>X(H(e,(e=>U(t=>K(t)&&t<e))(t))),gt:t=>X(H(e,(e=>U(t=>K(t)&&t>e))(t))),lte:t=>X(H(e,(e=>U(t=>K(t)&&t<=e))(t))),gte:t=>X(H(e,(e=>U(t=>K(t)&&t>=e))(t))),int:()=>X(H(e,U(e=>K(e)&&Number.isInteger(e)))),finite:()=>X(H(e,U(e=>K(e)&&Number.isFinite(e)))),positive:()=>X(H(e,U(e=>K(e)&&e>0))),negative:()=>X(H(e,U(e=>K(e)&&e<0)))});X(U(K));var Z=e=>Object.assign(V(e),{between:(t,n)=>Z(H(e,((e,t)=>U(n=>J(n)&&e<=n&&t>=n))(t,n))),lt:t=>Z(H(e,(e=>U(t=>J(t)&&t<e))(t))),gt:t=>Z(H(e,(e=>U(t=>J(t)&&t>e))(t))),lte:t=>Z(H(e,(e=>U(t=>J(t)&&t<=e))(t))),gte:t=>Z(H(e,(e=>U(t=>J(t)&&t>=e))(t))),positive:()=>Z(H(e,U(e=>J(e)&&e>0))),negative:()=>Z(H(e,U(e=>J(e)&&e<0)))});Z(U(J)),V(U(function(e){return typeof e==`boolean`})),V(U(function(e){return typeof e==`symbol`})),V(U(function(e){return e==null})),V(U(function(e){return e!=null}));var pe=class extends Error{constructor(e){let t;try{t=JSON.stringify(e)}catch{t=e}super(`Pattern matching error: no pattern matches value ${t}`),this.input=void 0,this.input=e}},Q={matched:!1,value:void 0};function me(e){return new he(e,Q)}var he=class e{constructor(e,t){this.input=void 0,this.state=void 0,this.input=e,this.state=t}with(...t){if(this.state.matched)return this;let n=t[t.length-1],r=[t[0]],i;t.length===3&&typeof t[1]==`function`?i=t[1]:t.length>2&&r.push(...t.slice(1,t.length-1));let a=!1,o={},s=(e,t)=>{a=!0,o[e]=t},c=!r.some(e=>R(e,this.input,s))||i&&!i(this.input)?Q:{matched:!0,value:n(a?F in o?o[F]:o:this.input,this.input)};return new e(this.input,c)}when(t,n){if(this.state.matched)return this;let r=!!t(this.input);return new e(this.input,r?{matched:!0,value:n(this.input,this.input)}:Q)}otherwise(e){return this.state.matched?this.state.value:e(this.input)}exhaustive(e=ge){return this.state.matched?this.state.value:e(this.input)}run(){return this.exhaustive()}returnType(){return this}narrow(){return this}};function ge(e){throw new pe(e)}var _e=l(u)`
    width: 100%;
    flex-shrink: 0;
`,ve=l(u)`
    flex-wrap: wrap;
`,ye=l.button`
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
`;function be({title:e,friends:t}){let{t:n}=x(),i=r();return s(u,{direction:`column`,gap:10,align:`stretch`,children:[o(C,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?o(ve,{direction:`row`,gap:6,children:t.map(e=>{let t=new URLSearchParams({friendId:String(e.id),year:String(e.timetable.year),semester:String(e.timetable.semester)});return o(ye,{type:`button`,title:e.description,"aria-description":e.description,onClick:()=>i(`/friends?${t}`),children:o(C,{type:`Normal`,color:`Text.light`,children:e.name})},e.id)})}):o(C,{type:`Small`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function xe({lectureId:e}){let{t}=x(),{query:n}=g(`GET`,`/friends/lectures/${e}/overlaps`,{staleTime:0,gcTime:0}),r=new Map;for(let[e,i]of[[t(`friends.sameLecture`),n.data?.sameLecture??[]],[t(`friends.sameCourseDifferentSection`),n.data?.sameCourseDifferentSection??[]]])for(let t of i)r.has(t.id)||r.set(t.id,{...t,description:e});return o(_e,{direction:`column`,gap:24,align:`stretch`,children:n.isPending?o(C,{type:`Small`,color:`Text.placeholder`,role:`status`,children:t(`friends.loadingOverlaps`)}):n.isError?o(C,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}):s(c,{children:[o(be,{title:t(`friends.currentLectureFriends`),friends:[...r.values()]}),o(be,{title:t(`friends.pastLectureFriends`),friends:(n.data?.previousSemesterSameProfessor??[]).map(e=>({...e,description:t(`friends.previousSemesterSameProfessor`)}))})]})})}function Se({status:e,currentTimetableId:t,hasOverlap:n}){return e!==`idle`&&t===null||n}function Ce(e,t){for(let n of e)for(let e of t)if(n.day==e.day&&n.begin<e.end&&e.begin<n.end)return!0;return!1}var we=`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do`;function Te(e,t,n){return`${we}?link=estblSubjt&params=${btoa(JSON.stringify({syy:String(t),smtDivCd:String(n),subjtCd:e,syllabusOpenYn:`0`}))}`}function Ee(e){return e.map(e=>e.name).join(`, `)}function De(e,t){return t===0?`0.00:1`:e==null?`-`:`${(e/t).toFixed(2)}:1`}function Oe(e){return e.slice().sort((e,t)=>{let n=e.day,r=t.day;return n===r?e.begin-t.begin:n-r}).map(e=>e.str).join(` / `)}function ke(e){let t={};return e.forEach(e=>{let n=e.buildingCode,r=e.roomName;n in t?t[n]&&!t[n].includes(r)&&(t[n]=t[n].concat(`, ${r}`)):t[n]=r}),Object.entries(t).map(([e,t])=>`(${e}) ${t}`).join(` / `)}var Ae=l(u)`
    width: 100%;
`,je=l(u)`
    width: 100%;
    max-width: 300px;
    padding: ${({$compact:e})=>e?`10px 0`:`10px`};
`,Me=l(u)`
    flex: 1 0 0;
    ${({$compact:e})=>e&&`
        height: 29px;
        > * { flex-shrink: 0; }
        > :first-child { margin-top: -5px; }
        > :last-child { margin-top: -3px; }
    `}
`,$=l(C)`
    white-space: nowrap;
`,Ne=({selectedLecture:e,metrics:t=`enrollment`})=>{let{t:n}=x();if(!e)return null;let r=De(e.numPeople,e.limitPeople);return s(c,{children:[s(Ae,{direction:`column`,gap:8,children:[s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.type`)}),o(C,{type:`Normal`,color:`Text.default`,children:e?.type})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.search.department`)}),o(C,{type:`Normal`,color:`Text.default`,children:e?.department.name})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.professor`)}),o(C,{type:`Normal`,color:`Text.default`,children:Ee(e?.professors||[])})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.room`)}),o(C,{type:`Normal`,color:`Text.default`,children:ke(e?.classes||[])})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.limit`)}),o(C,{type:`Normal`,color:`Text.default`,children:e?.limitPeople})]}),s(u,{direction:`row`,gap:6,children:[o($,{type:`NormalBold`,color:`Text.default`,children:n(`common.exam`)}),o(C,{type:`Normal`,color:`Text.default`,children:Oe(e?.examTimes||[])})]})]}),o(je,{$compact:t===`course`,direction:`row`,gap:0,justify:`space-around`,align:`center`,children:(t===`course`?[[e.classDuration,n(`common.numClasses`)],[e.expDuration,n(`common.numLabs`)],e.creditAU?[e.creditAU,`AU`]:[e.credit,n(`common.credit`)]]:[[e.isEnglish?`Eng`:`한`,n(`common.language`)],[e.credit,n(`common.credit`)],[r,n(`timetable.competitionRate`)]]).map(([e,n],r)=>s(Me,{$compact:t===`course`,direction:`column`,gap:0,align:`center`,children:[o(C,{type:`Bigger`,color:`Text.default`,children:e}),o(C,{type:`Smaller`,color:`Text.default`,children:n})]},r))})]})},Pe=({selectedCourseId:e,selectedProfessorId:t,showSummary:n=!0,reviewVariant:r=`default`})=>{let{t:i}=x(),[a,l]=(0,M.useState)(!1),{query:d,setParams:f,data:p}=_(`GET`,`/reviews`,{infinites:[`reviews`],limit:20}),{ref:m,inView:h}=v({threshold:0});return(0,M.useEffect)(()=>{l(!1);let n=setTimeout(()=>{f({mode:te.DEFAULT,courseId:e??void 0,professorId:t??void 0}),l(!0)},1e3);return()=>clearTimeout(n)},[e,t]),(0,M.useEffect)(()=>{h&&d.hasNextPage&&!d.isFetchingNextPage&&d.fetchNextPage()},[h,d]),!p||!a?o(E,{}):s(c,{children:[n&&s(c,{children:[o(u,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:o(O,{averageGrade:p?.averageGrade,averageLoad:p?.averageLoad,averageSpeech:p?.averageSpeech,reviewCount:p?.reviews.length,labels:{grade:i(`common.grade`),load:i(`common.load`),speech:i(`common.speech`)},fluid:!0})}),o(T,{})]}),p?.reviews.map(e=>o(D,{review:e,linkToDictionary:!0,variant:r},e.id)),d.hasNextPage&&o(E,{ref:m})]})},Fe=l(u)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Ie=l(u)`
    width: 100%;
`,Le=l(u)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,Re=l(u)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`,ze=l(i)`
    text-decoration: none;
`,Be=l.a`
    text-decoration: none;
`,Ve=l(u)`
    width: 100%;
    text-align: center;
`,He=l(u)`
    padding: 12px 16px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 12px;
    box-shadow: ${({theme:e})=>e.elevation.low};
`,Ue=({addLectures:e,removeLectures:t,onMobileModalClose:n,currentTimetableId:r,timetableLectures:i=[],readOnlySelection:l})=>{let te=m(),_=a(),{t:v}=x(),{user:y,status:E}=p(),D=ae(`tablet`),k=h(e=>e.selectedItems),A=l?[]:k,j=h(e=>e.hoveredLectures),N=h(e=>e.year),P=l?.year??N,F=h(e=>e.semesterEnum),I=l?.semester??F,L=A.length===1?A[0]:void 0,R=l?l.lecture:L?.kind===d.LECTURE?L.data:A.length===0&&j.length===1?j[0]:null,z=A.length>1||L!==void 0&&L.kind!==d.LECTURE,B=ue(_.colors.Tile.TimeTable.default),[V,de]=(0,M.useState)([]),{query:H,setParams:fe}=g(`GET`,`/users/${y?.id}/wishlist`,{enabled:!l&&E===`success`&&P!==-1});(0,M.useEffect)(()=>{l||P===-1||fe({year:P,semester:I})},[P,I,r]),(0,M.useEffect)(()=>{H.data&&de(H.data.courses.flatMap(e=>e.lectures).map(e=>e.id))},[H.data]);let{requestFunction:U}=g(`PATCH`,`/users/${y?.id}/wishlist`,{onSuccess:()=>{y&&te.invalidateQueries({queryKey:[f.userWishlist(y.id)]})}}),W=(0,M.useRef)(null),G=t=>{if(!i)return;let n=i.some(e=>Ce(e.classes,t.classes));if(Se({status:E,currentTimetableId:r??null,hasOverlap:n})){n&&alert(v(`timetable.addLectureConflict`));return}e?.([t]),ee(`Add Lecture to Timetable`,{lectureId:t.id,lectureCode:t.code,courseName:t.name,timetableId:r,source:`LectureDetail`})},K=(e,t)=>{if(E===`idle`)return;let n=e?ne.DELETE:ne.ADD;ee(`Update Wishlist`,{action:n,lectureId:t,source:`LectureDetail`}),U({lectureId:t,mode:n})};return o(Fe,{direction:`column`,gap:12,align:`center`,justify:!R&&!A.length?`center`:`start`,children:z?s(Ve,{direction:`column`,gap:16,align:`stretch`,justify:`flex-start`,children:[s(u,{direction:`row`,gap:8,align:`center`,justify:D?`space-between`:`center`,children:[D&&o(`div`,{style:{width:20}}),s(C,{type:`Bigger`,color:`Text.default`,children:[A.length,v(`timetable.numSelected`)]}),D&&n&&o(ie,{"aria-label":`Close selected items`,onClick:n,children:o(b,{size:20,color:_.colors.Text.default,children:o(S,{})})})]}),A.map(e=>{let{colorIndex:t,title:n,description:r}=me(e).with({kind:d.LECTURE},({data:e})=>({colorIndex:e.courseId,title:`${e.name} ${e.subtitle}`,description:s(c,{children:[e.professors[0]?.name,` `,e.professors.length>1?`${v(`common.professors.over`)} ${e.professors.length-1}${v(`common.professors.people`)} `:` `,`| `,e.department.name,` | `,e.credit,v(`common.credit`)]})})).with({kind:d.CUSTOM},({data:e})=>({colorIndex:e.id*3+7,title:e.block_name,description:e.place})).exhaustive();return s(He,{"data-timetable-item-key":le(e),direction:`row`,gap:12,align:`center`,children:[o(b,{size:14,color:B[t%B.length],children:o(ce,{})}),s(u,{direction:`column`,gap:4,flex:`1 1 auto`,children:[o(C,{type:`BigBold`,color:`Text.default`,children:n}),o(C,{type:`Small`,color:`Text.dark`,children:r})]})]},le(e))})]}):R?s(c,{children:[s(Le,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[s(u,{direction:`row`,align:`center`,gap:8,justify:D&&n?`space-between`:`center`,style:{width:`100%`},children:[D&&n&&o(`div`,{style:{width:20}}),o(C,{type:`Bigger`,color:`Text.default`,children:R.name+R.subtitle}),D&&n&&o(b,{size:20,onClick:n,color:_.colors.Text.default,children:o(S,{})})]}),o(C,{type:`Big`,color:`Text.default`,children:R.code+` `+(R.classNo===``?``:`(${R.classNo})`)})]}),s(u,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[o(ze,{to:`/dictionary?courseId=${R.courseId}`,children:o(C,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:v(`header.dictionary`)})}),o(Be,{href:Te(R.code,P,I),rel:`noopener noreferrer`,target:`_blank`,children:o(C,{type:`Normal`,color:`Highlight.default`,style:{cursor:`pointer`},children:v(`header.syllabus`)})})]}),s(Ie,{direction:`column`,gap:10,align:`center`,children:[o(Ne,{selectedLecture:R,metrics:l?`course`:`enrollment`}),l&&o(O,{averageGrade:R.averageGrade,averageLoad:R.averageLoad,averageSpeech:R.averageSpeech,reviewCount:void 0,labels:{grade:v(`common.grade`),load:v(`common.load`),speech:v(`common.speech`)},fluid:!0,compact:!0})]}),(E===`success`||l)&&s(c,{children:[o(T,{}),o(xe,{lectureId:R.id}),o(T,{})]}),o(Ie,{ref:W,direction:`column`,gap:10,children:o(Pe,{showSummary:!l,reviewVariant:l?`simple`:`default`,selectedCourseId:R.courseId,selectedProfessorId:R.professors[0]?.id??-1},R.id)}),D&&!l&&s(Re,{direction:`row`,gap:12,justify:`flex-end`,children:[E===`success`&&s(w,{onClick:()=>{K(V.includes(R.id),R.id),n&&n()},children:[o(b,{size:15,children:o(oe,{})}),o(C,{type:`NormalBold`,children:V.includes(R.id)?v(`timetable.removeFromWishlist`):v(`timetable.addToWishlist`)})]}),(r!=null||E===`idle`)&&(i?.some(e=>e.id===R.id)?s(w,{type:`selected`,onClick:()=>{t&&t(R.id),n&&n()},children:[o(b,{size:15,children:o(S,{})}),o(C,{type:`NormalBold`,children:v(`timetable.removeFromTimetable`)})]}):s(w,{type:`selected`,onClick:()=>{G(R),n&&n()},children:[o(b,{size:15,children:o(se,{})}),o(C,{type:`NormalBold`,children:v(`timetable.addToTimetable`)})]}))]})]}):l?o(C,{type:`Normal`,color:`Text.placeholder`,children:v(`friends.selectLecture`)}):o(re,{})})},We=l.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,Ge={default:l(We)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,selected:l(We)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    cursor: pointer;
`},Ke=l.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,qe=e=>o(Ke,{children:e}),Je=({type:e=`default`,children:t=void 0,buttonRef:n,...r})=>{let i=Ge[e],a=()=>qe(t);return o(i,{ref:n,...r,onClick:r.onClick,children:o(a,{})})};export{Se as a,A as c,Ce as i,Ue as n,me as o,Ee as r,j as s,Je as t};
//# sourceMappingURL=TabButton-CDze9NQD.js.map