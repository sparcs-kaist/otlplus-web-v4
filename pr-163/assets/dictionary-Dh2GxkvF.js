(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`564f1a0d724f8eb576ee5309581800dae8d83f24`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`e43fb8ed-2b3f-489f-b35a-a51b6f7405d9`,e._sentryDebugIdIdentifier=`sentry-dbid-e43fb8ed-2b3f-489f-b35a-a51b6f7405d9`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-Covjqple.js";import{O as r,k as i}from"./chunk-62JRHF6Z-CpuGH0On.js";import{l as a,n as o,r as s,t as c}from"./emotion-react-jsx-runtime.browser.esm-8OuFxjt_.js";import{n as l,t as u}from"./FlexWrapper-Cc05jz99.js";import{r as d}from"./emotion-react.browser.esm-CMwhNO3F.js";import{g as f,y as p}from"./axios-DbKCTZk8.js";import{s as m,t as h}from"./useAPI-1pZwALdN.js";import{i as g,n as _,r as v,t as y}from"./Credits-COL3XRtn.js";import{r as b,t as x}from"./Icon-KLDB8e6a.js";import{t as S}from"./IconButton-By3o1McL.js";import{t as C}from"./Trans--gvya0mu.js";import{t as w}from"./useTranslation-Df9XW9s_.js";import{t as T}from"./Close-Bvtw2Hzp.js";import{t as E}from"./Typography-C1hO3Zhf.js";import{t as D}from"./Modal-6RANPgoa.js";import{t as O}from"./proxy-DCcqKE10.js";import{t as k}from"./media-D6J7Bqf1.js";import{t as A}from"./useIsDevice-D6dKh7ZW.js";import{t as j}from"./Widget-iMj2K3zW.js";import{t as M}from"./LoadingCircle-p0GMK9aR.js";import{n as N,t as P}from"./ReviewBlock-BeMdPo38.js";import{n as ee,t as F}from"./checkEmpty-RzabTlxg.js";import{t as I}from"./Circle-DiZWasdI.js";import{t as te}from"./ReviewWritingBlock-5mFmprD8.js";var L=t(e(),1),ne=t(n(),1),re=b((0,ne.jsx)(`path`,{d:`M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z`}),`KeyboardArrowDown`),R=l.div`
    min-width: 150px;
    height: 28px;
    display: inline-flex;
    padding: 8px 16px;
    justify-content: flex-start;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,ie=l(R)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ae=l(R)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,oe=l.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`,se=({selected:e=!1,chipIndex:t=``,chipText:n=``,...r})=>{let i=()=>s(oe,{children:[o(E,{type:`NormalBold`,children:t}),o(E,{type:`Normal`,children:n})]});return o(e?ae:ie,{...r,children:o(i,{})})},ce=l(O.div)`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overscroll-behavior: auto;

    &::-webkit-scrollbar {
        height: 7px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme:e})=>e.colors.Line.default};
        border-radius: 8px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: ${({theme:e})=>e.colors.Line.dark};
        height: 0;
    }
    -webkit-overflow-scrolling: touch;
`,z=l(u)`
    height: 100%;
`,B=l(re)`
    transform: ${e=>e.isfolded===`true`?`rotate(0deg)`:`rotate(180deg)`};
    transition: transform 0.2s ease-in-out;
`,V=l(E)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,H=({courseDetail:e,selectedProfessorId:t,setSelectedProfessorId:n})=>{let{t:r}=w(),i=a(),l=A(`mobile`),d=(0,L.useRef)(null),[f,m]=(0,L.useState)(!0);return(0,L.useEffect)(()=>{d.current&&(d.current.scrollLeft=d.current.scrollWidth)},[e]),(0,L.useEffect)(()=>{if(l){m(!0);return}let t=e?.history?.some(e=>e.classes.length>4)??!1;m(t)},[l,e]),s(c,{children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,style:{width:`100%`,cursor:`pointer`},onClick:()=>m(e=>!e),children:[o(E,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.courseHistory`)}),o(S,{onClick:()=>{},children:o(x,{size:20,color:i.colors.Text.default,onClick:()=>{},children:o(B,{isfolded:f.toString()})})})]}),s(ce,{ref:d,initial:{height:f?0:`auto`},animate:{height:f?0:`auto`},transition:{duration:.2,ease:`easeInOut`},children:[o(`div`,{}),o(u,{direction:`row`,gap:20,style:{minWidth:`min-content`},children:[...e?.history||[]].reverse().map((e,i)=>s(z,{direction:`column`,gap:6,align:`center`,children:[s(E,{type:`Normal`,color:`Text.default`,children:[e.year,` `,p(e.semester)]}),e.classes.length===0?o(V,{color:`Text.disable`,type:`Normal`,children:r(`dictionary.notOffered`)}):o(u,{direction:`column`,gap:4,align:`stretch`,children:e.classes.map((e,r)=>o(se,{selected:t==(e.professors[0]?.id??-1),chipIndex:e.classNo+` `+e.subtitle,chipText:N(e.professors),onClick:()=>{t===(e.professors[0]?.id??-1)?n(null):n(e.professors[0]?.id??null)}},r))})]},i))})]})]})},U=l(u)`
    width: 100%;
`,W=l(u)`
    width: 300px;
    padding: 10px;
`,G=l(u)`
    flex: 1 0 0;
`,le=l(E)`
    white-space: nowrap;
`,ue=({courseDetail:e})=>{let{t}=w();return s(c,{children:[o(U,{direction:`column`,gap:8,children:[[t(`common.class`),e?.department.name+`, `+e?.type],[t(`common.description`),e?.summary]].map(([e,t],n)=>s(u,{direction:`row`,gap:6,children:[o(le,{type:`NormalBold`,color:`Text.default`,children:e}),o(E,{type:`Normal`,color:`Text.default`,children:t})]},n))}),o(W,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e?.classDuration,t(`common.numClasses`)],[e?.expDuration,t(`common.numLabs`)],e?.creditAU?[e?.creditAU,`AU`]:[e?.credit,t(`common.credit`)]].map(([e,t],n)=>s(G,{direction:`column`,gap:0,align:`center`,children:[o(E,{type:`Bigger`,color:`Text.default`,children:e}),o(E,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},K=l.div`
    width: 58px;
    height: 28px;
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,de=l(K)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,fe=l(K)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,pe=l.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,me=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>o(pe,{children:t});return o(e?fe:de,{...n,children:o(r,{})})},he=l(u)`
    width: 300px;
    padding: 10px;
`,ge=l(u)`
    flex: 1 0 0;
`,_e=20,ve=({selectedCourseId:e,selectedProfessorId:t,writableReviewProps:n})=>{let{t:r}=w(),[i,a]=(0,L.useState)(`all`),[l,f]=(0,L.useState)(!1),{query:p,setParams:h,data:v}=_(`GET`,`/reviews`,{infinites:[`reviews`],limit:_e,enabled:l}),{ref:y,inView:b}=g();return(0,L.useEffect)(()=>{h({mode:`default`,courseId:e||void 0,professorId:t||void 0})},[]),(0,L.useEffect)(()=>{h(n=>{let r=n??{};return t===null&&delete r.professorId,{...r,...e===null?{}:{courseId:e},...t===null?{}:{professorId:t}}}),f(e!==null)},[t,e]),(0,L.useEffect)(()=>{b&&p.hasNextPage&&!p.isFetchingNextPage&&p.fetchNextPage()},[b]),s(c,{children:[o(E,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.review`)}),s(u,{direction:`column`,gap:6,children:[o(E,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.reviewLanguage`)}),o(u,{direction:`row`,gap:6,children:[`all`,`english`].map(e=>o(me,{selected:i==e,chipText:r(`dictionary.reviewLanguageOptions.${e}`),onClick:()=>a(e)},e))})]}),v===null&&p.isLoading?o(M,{}):s(c,{children:[o(u,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:o(he,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[[m(v?.averageGrade,v?.reviews.length),r(`common.grade`)],[m(v?.averageLoad,v?.reviews.length),r(`common.load`)],[m(v?.averageSpeech,v?.reviews.length),r(`common.speech`)]].map(([e,t],n)=>s(ge,{direction:`column`,gap:0,align:`center`,children:[o(E,{type:`Bigger`,color:`Text.default`,children:e}),o(E,{type:`Smaller`,color:`Text.default`,children:t})]},n))})}),n.map((e,t)=>d(te,{...e,key:t})),v?.reviews.map(e=>i===`english`&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(e.content)?null:o(P,{review:e,linkToDictionary:!1},e.id)),p.hasNextPage&&o(M,{ref:y})]})]})},ye=l(u)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,q=l(u)`
    width: 100%;
`,be=l(u)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,J=l.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,Y=({selectedCourseId:e,isMobileModal:t=!1,onMobileModalClose:n})=>{let i=a(),[l,d]=r(),{query:f}=h(`GET`,`/courses/${e}`,{enabled:e!==null}),[p,m]=(0,L.useState)(null),[g,_]=(0,L.useState)([]);return(0,L.useEffect)(()=>{if(f.data){let e=[];f.data.history.forEach(t=>{if(t.myLectureId!==null){let n=t.classes.find(e=>e.lectureId===t.myLectureId)?.professors||[];e.push({name:f.data.name,lectureId:t.myLectureId,professors:n,year:t.year,semester:t.semester})}}),_(e)}},[f.data]),(0,L.useEffect)(()=>{m(null);let e=l.get(`professorId`);if(e){let t=parseInt(e,10);isNaN(t)?m(null):(m(t),d({}))}},[e]),o(ye,{direction:`column`,gap:12,align:`center`,justify:e?`start`:`center`,children:e?f.isLoading?o(M,{}):s(c,{children:[s(be,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[s(u,{direction:`row`,align:`center`,gap:8,justify:t?`space-between`:`center`,style:{width:`100%`},children:[t&&o(`div`,{style:{width:20}}),o(E,{type:`Bigger`,color:`Text.default`,children:f.data?.name}),t&&o(x,{size:20,onClick:n,color:i.colors.Text.default,children:o(T,{})})]}),o(E,{type:`Big`,color:`Text.default`,children:f.data?.code})]}),o(q,{direction:`column`,gap:10,align:`center`,children:o(ue,{courseDetail:f.data})}),o(J,{}),o(q,{direction:`column`,gap:0,children:o(H,{courseDetail:f.data,selectedProfessorId:p,setSelectedProfessorId:m})}),o(J,{}),o(q,{direction:`column`,gap:10,flex:`1 1 auto`,children:o(ve,{selectedCourseId:e,selectedProfessorId:p,writableReviewProps:g})})]}):o(y,{})})},xe=l.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e,selected:t})=>t?e.colors.Background.Block.darker:e.colors.Background.Block.dark};
    }
    background-color: ${({selected:e,theme:t})=>e?t.colors.Background.Block.darker:t.colors.Background.Block.default};
`,Se=l.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,X=l(E)`
    white-space: nowrap;
`,Ce=(0,L.memo)(({course:e,isSelected:t,selectCourseId:n})=>{let{t:r}=w(),i=a(),c=(0,L.useCallback)(()=>{t?n(null):(n(e.id),f(`Select Course`,{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[t,e.id,n]);return s(xe,{onClick:c,selected:t,children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[s(u,{direction:`row`,gap:6,align:`center`,children:[o(x,{size:12,color:e.open?i.colors.Highlight.default:i.colors.Text.disable,children:o(I,{})}),o(E,{type:`NormalBold`,color:`Text.default`,children:e.name}),o(E,{type:`Normal`,color:`Text.placeholder`,children:e.code})]}),e.completed&&o(E,{type:`Normal`,color:`Text.lighter`,children:r(`common.completedCourse`)})]}),o(Se,{}),s(u,{direction:`column`,gap:4,children:[s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.class`)}),s(E,{type:`Normal`,color:`Text.default`,children:[e.department.name,`, `,e.type]})]}),s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.professor`)}),o(E,{type:`Normal`,color:`Text.default`,children:e.professors.map(e=>e.name).join(`, `)})]}),s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.description`)}),o(E,{type:`Normal`,color:`Text.default`,children:e.summary})]})]})]})}),we=l(u)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Te=l.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Ee=l(E)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,De=l(E)`
    display: flex;
    flex-direction: ${({direction:e})=>e};
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
    white-space: nowrap;
`,Oe=l(u)`
    white-space: nowrap;
`,ke=l(u)`
    flex-grow: 1;
    height: 36px;
`,Z=l(u)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Q=20;function Ae({selectedCourseId:e,setSelectedCourseId:t}){let{t:n}=w(),i=a(),l=A(`mobile`),d=(0,L.useRef)(null),[p]=r(),[m,h]=(0,L.useState)(0),[y,b]=(0,L.useState)(!1),[S,T]=(0,L.useState)({courses:[],totalCount:0}),{query:D,setParams:O,data:k}=_(`GET`,`/courses`,{infinites:[`courses`],limit:Q,enabled:y}),{inView:j,ref:N}=g({threshold:0});(0,L.useEffect)(()=>{j&&D.hasNextPage&&!D.isFetchingNextPage&&D.fetchNextPage()},[j]),(0,L.useEffect)(()=>{let e=p.get(`term`)?parseInt(p.get(`term`)):void 0,t={keyword:p.get(`keyword`)||``,type:p.getAll(`type`),department:p.getAll(`department`).map(e=>parseInt(e)),level:p.getAll(`level`).map(e=>parseInt(e))};e!==void 0&&(t.term=e),!F(t)&&P(t)},[]),(0,L.useEffect)(()=>{k!==void 0&&T(k)},[k]),(0,L.useEffect)(()=>{(m!=0||y!=0)&&(T({courses:[],totalCount:0}),O(e=>({...e,order:[`code`,`popular`,`studentCount`][m]??`code`,offset:0})),b(!0),d.current?.scrollTo(0,0))},[m]);let P=e=>{if(F(e)){alert(n(`common.search.empty`));return}let t={...e,order:[`code`,`popular`,`studentCount`][m]??`code`,offset:0,limit:Q};O(t),b(!0),d.current?.scrollTo(0,0),f(`Search Courses`,{keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``,term:e.term??``})};return s(we,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,children:[o(Te,{children:o(ee,{options:[`type`,`department`,`level`,`term`],onSearch:P})}),S.courses.length===0?D.isLoading?o(M,{}):o(Ee,{type:`Bigger`,color:`Text.placeholder`,children:n(`dictionary.noResults`)}):s(c,{children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[s(De,{color:`Text.default`,direction:l?`column`:`row`,children:[o(u,{direction:`row`,gap:4,align:`center`,children:o(C,{i18nKey:`dictionary.courseCountInfo1`,count:k?.totalCount,components:{bold:o(E,{type:`NormalBold`,children:void 0}),space:o(c,{children:`\xA0`})}})}),o(u,{direction:`row`,gap:1,align:`center`,children:o(C,{i18nKey:`dictionary.courseCountInfo2`,count:k?.totalCount,components:{icon:o(x,{size:12,color:i.colors.Highlight.default,children:o(I,{})}),space:o(c,{children:`\xA0`})}})})]}),s(Oe,{direction:`row`,gap:8,align:`center`,children:[o(E,{type:`NormalBold`,color:`Text.default`,children:n(`dictionary.sort`)}),o(ke,{direction:`row`,gap:0,children:o(v,{options:[n(`dictionary.sortOptions.code`),n(`dictionary.sortOptions.popularity`),n(`dictionary.sortOptions.studentCount`)],setSelectedOption:h,selectedOption:m})})]})]}),s(Z,{direction:`column`,gap:12,ref:d,children:[S.courses.map((n,r)=>o(Ce,{course:n,isSelected:e==n.id,selectCourseId:t},r)),D.hasNextPage&&o(M,{ref:N})]})]})]})}var je=l(u)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${k.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${k.mobile} {
        padding: 0 8px 12px 8px;
    }
`,$=l(j)`
    height: 100%;
    overflow: hidden;
    padding: 16px;

    ${k.mobile} {
        padding: 16px 12px;
    }
`,Me=l($)`
    max-width: 508px;
    flex: 1 1 0;

    ${k.tablet} {
        max-width: none;
    }
`,Ne=l($)`
    flex: 1 1 0;
    max-width: 976px;

    ${k.tablet} {
        display: none;
    }
`,Pe=i(function(){let e=A(`tablet`),[t,n]=r(),[i,a]=(0,L.useState)(!1),[c,l]=(0,L.useState)(null);(0,L.useEffect)(()=>{f(`Page View`,{page:`Dictionary`})},[]),(0,L.useEffect)(()=>{let e=t.get(`courseId`);if(e){let t=parseInt(e,10);isNaN(t)?l(null):(l(t),n(e=>(e.delete(`courseId`),e)))}},[]),(0,L.useEffect)(()=>{e?c!==null&&a(!0):a(!1)},[e]),(0,L.useEffect)(()=>{e&&c!==null&&a(!0)},[c]);let u=(0,L.useCallback)(()=>{a(!1),l(null)},[]);return s(je,{direction:`row`,align:`stretch`,justify:`center`,gap:12,children:[o(Me,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:o(Ae,{selectedCourseId:c,setSelectedCourseId:l})}),o(Ne,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:o(Y,{selectedCourseId:c})}),e&&o(D,{isOpen:i,onClose:u,header:!1,fullScreen:!0,children:o(Y,{selectedCourseId:c,isMobileModal:!0,onMobileModalClose:u})})]})});export{Pe as default};
//# sourceMappingURL=dictionary-Dh2GxkvF.js.map