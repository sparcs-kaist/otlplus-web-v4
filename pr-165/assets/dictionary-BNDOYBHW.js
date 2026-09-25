(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`c70a54fbd7cbbb6cd210b27ccf3b8e764094a9aa`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`25a502ae-1fab-4e88-829c-4cf7d188cb89`,e._sentryDebugIdIdentifier=`sentry-dbid-25a502ae-1fab-4e88-829c-4cf7d188cb89`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Bo_PE7uw.js";import{A as n,k as r}from"./chunk-62JRHF6Z-BVIXo6It.js";import{l as i,n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-DuV0bH4x.js";import{n as c,t as l}from"./FlexWrapper-DyUQQhLo.js";import{r as u}from"./emotion-react.browser.esm-Ccqv5UL9.js";import{w as d,y as f}from"./axios-BxtEgwMC.js";import{_ as p,g as m,h,t as g}from"./useAPI-dvh-bzEH.js";import{n as _,t as v}from"./useInfiniteAPI-CteSgzsQ.js";import{t as y}from"./Icon-D8nSFZSa.js";import{t as b}from"./Trans-CEI_OPOG.js";import{t as x}from"./useTranslation-CvUh8LTQ.js";import{t as S}from"./IconButton-DCQ43hr9.js";import{t as C}from"./Close-DwA3_Qjm.js";import{t as w}from"./Modal-sF1DzZdv.js";import{t as T}from"./Typography-GApR5r0N.js";import{t as E}from"./proxy-Co2WeHNU.js";import{t as D}from"./media-Ckaxssn3.js";import{t as O}from"./useIsDevice-cTDmHd-z.js";import{t as k}from"./Widget-DGxV5LT9.js";import{t as A}from"./LoadingCircle-BS-VG034.js";import{n as ee,t as j}from"./Credits-CaQTJ6-a.js";import{n as M,t as N}from"./ReviewBlock-B6lvM6BY.js";import{n as te,t as P}from"./checkEmpty--n34QwgT.js";import{t as F}from"./Circle-COHB34nQ.js";import{t as I}from"./KeyboardArrowDown-CAWKB8Ij.js";import{t as L}from"./ReviewWritingBlock-DYUvOWoi.js";import{t as ne}from"./ReviewScoreSummary-DSqbr9T3.js";var R=t(e(),1),z=c.div`
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
`,re=c(z)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ie=c(z)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,ae=c.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`,oe=({selected:e=!1,chipIndex:t=``,chipText:n=``,...r})=>{let i=()=>o(ae,{children:[a(T,{type:`NormalBold`,children:t}),a(T,{type:`Normal`,children:n})]});return a(e?ie:re,{...r,children:a(i,{})})},se=c(E.div)`
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
`,ce=c(l)`
    height: 100%;
`,B=c(I)`
    transform: ${e=>e.isfolded===`true`?`rotate(0deg)`:`rotate(180deg)`};
    transition: transform 0.2s ease-in-out;
`,V=c(T)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,H=({courseDetail:e,selectedProfessorId:t,setSelectedProfessorId:n})=>{let{t:r}=x(),c=i(),u=O(`mobile`),f=(0,R.useRef)(null),[p,m]=(0,R.useState)(!0);return(0,R.useEffect)(()=>{f.current&&(f.current.scrollLeft=f.current.scrollWidth)},[e]),(0,R.useEffect)(()=>{if(u){m(!0);return}let t=e?.history?.some(e=>e.classes.length>4)??!1;m(t)},[u,e]),o(s,{children:[o(l,{direction:`row`,gap:0,justify:`space-between`,align:`center`,style:{width:`100%`,cursor:`pointer`},onClick:()=>m(e=>!e),children:[a(T,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.courseHistory`)}),a(S,{onClick:()=>{},children:a(y,{size:20,color:c.colors.Text.default,onClick:()=>{},children:a(B,{isfolded:p.toString()})})})]}),o(se,{ref:f,initial:{height:p?0:`auto`},animate:{height:p?0:`auto`},transition:{duration:.2,ease:`easeInOut`},children:[a(`div`,{}),a(l,{direction:`row`,gap:20,style:{minWidth:`min-content`},children:[...e?.history||[]].reverse().map((e,i)=>o(ce,{direction:`column`,gap:6,align:`center`,children:[o(T,{type:`Normal`,color:`Text.default`,children:[e.year,` `,d(e.semester)]}),e.classes.length===0?a(V,{color:`Text.disable`,type:`Normal`,children:r(`dictionary.notOffered`)}):a(l,{direction:`column`,gap:4,align:`stretch`,children:e.classes.map((e,r)=>a(oe,{selected:t==(e.professors[0]?.id??-1),chipIndex:e.classNo+` `+e.subtitle,chipText:M(e.professors),onClick:()=>{t===(e.professors[0]?.id??-1)?n(null):n(e.professors[0]?.id??null)}},r))})]},i))})]})]})},U=c(l)`
    width: 100%;
`,W=c(l)`
    width: 300px;
    padding: 10px;
`,G=c(l)`
    flex: 1 0 0;
`,le=c(T)`
    white-space: nowrap;
`,ue=({courseDetail:e})=>{let{t}=x();return o(s,{children:[a(U,{direction:`column`,gap:8,children:[[t(`common.class`),e?.department.name+`, `+e?.type],[t(`common.description`),e?.summary]].map(([e,t],n)=>o(l,{direction:`row`,gap:6,children:[a(le,{type:`NormalBold`,color:`Text.default`,children:e}),a(T,{type:`Normal`,color:`Text.default`,children:t})]},n))}),a(W,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e?.classDuration,t(`common.numClasses`)],[e?.expDuration,t(`common.numLabs`)],e?.creditAU?[e?.creditAU,`AU`]:[e?.credit,t(`common.credit`)]].map(([e,t],n)=>o(G,{direction:`column`,gap:0,align:`center`,children:[a(T,{type:`Bigger`,color:`Text.default`,children:e}),a(T,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},K=c.div`
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
`,de=c(K)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,fe=c(K)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,pe=c.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,me=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>a(pe,{children:t});return a(e?fe:de,{...n,children:a(r,{})})},he=20,ge=[`all`,`english`],_e=({selectedCourseId:e,selectedProfessorId:t,writableReviewProps:n})=>{let{t:r}=x(),[i,c]=(0,R.useState)(`all`),[d,f]=(0,R.useState)(!1),{query:p,setParams:m,data:g}=v(`GET`,`/reviews`,{infinites:[`reviews`],limit:he,enabled:d}),{ref:y,inView:b}=_();return(0,R.useEffect)(()=>{m({mode:h.DEFAULT,courseId:e||void 0,professorId:t||void 0})},[]),(0,R.useEffect)(()=>{m(n=>{let r=n??{};return t===null&&delete r.professorId,{...r,...e===null?{}:{courseId:e},...t===null?{}:{professorId:t}}}),f(e!==null)},[t,e]),(0,R.useEffect)(()=>{b&&p.hasNextPage&&!p.isFetchingNextPage&&p.fetchNextPage()},[b]),o(s,{children:[a(T,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.review`)}),o(l,{direction:`column`,gap:6,children:[a(T,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.reviewLanguage`)}),a(l,{direction:`row`,gap:6,children:ge.map(e=>a(me,{selected:i==e,chipText:r(`dictionary.reviewLanguageOptions.${e}`),onClick:()=>c(e)},e))})]}),g===null&&p.isLoading?a(A,{}):o(s,{children:[a(l,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:a(ne,{averageGrade:g?.averageGrade,averageLoad:g?.averageLoad,averageSpeech:g?.averageSpeech,reviewCount:g?.reviews.length,labels:{grade:r(`common.grade`),load:r(`common.load`),speech:r(`common.speech`)}})}),n.map((e,t)=>u(L,{...e,key:t})),g?.reviews.map(e=>i===`english`&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(e.content)?null:a(N,{review:e,linkToDictionary:!1},e.id)),p.hasNextPage&&a(A,{ref:y})]})]})},ve=c(l)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,q=c(l)`
    width: 100%;
`,ye=c(l)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,be=c.div`
    width: 44px;
    height: 44px;
`,xe=c.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: ${({theme:e})=>e.colors.Text.default};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Button.default};
    }

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`,J=c.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,Y=({selectedCourseId:e,isMobileModal:t=!1,onMobileModalClose:n})=>{let{t:i}=x(),[c,u]=r(),{query:d}=g(`GET`,`/courses/${e}`,{enabled:e!==null}),[f,p]=(0,R.useState)(null),[m,h]=(0,R.useState)([]);return(0,R.useEffect)(()=>{if(d.data){let e=[];d.data.history.forEach(t=>{if(t.myLectureId!==null){let n=t.classes.find(e=>e.lectureId===t.myLectureId)?.professors||[];e.push({name:d.data.name,lectureId:t.myLectureId,professors:n,year:t.year,semester:t.semester})}}),h(e)}},[d.data]),(0,R.useEffect)(()=>{p(null);let e=c.get(`professorId`);if(e){let t=parseInt(e,10);isNaN(t)?p(null):(p(t),u({}))}},[e]),a(ve,{direction:`column`,gap:12,align:`center`,justify:e?`start`:`center`,children:e?d.isLoading?a(A,{}):o(s,{children:[o(ye,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[o(l,{direction:`row`,align:`center`,gap:8,justify:t?`space-between`:`center`,style:{width:`100%`},children:[t&&a(be,{}),a(T,{type:`Bigger`,color:`Text.default`,children:d.data?.name}),t&&a(xe,{type:`button`,"aria-label":i(`common.search.close`),title:i(`common.search.close`),onClick:n,children:a(y,{size:20,children:a(C,{})})})]}),a(T,{type:`Big`,color:`Text.default`,children:d.data?.code})]}),a(q,{direction:`column`,gap:10,align:`center`,children:a(ue,{courseDetail:d.data})}),a(J,{}),a(q,{direction:`column`,gap:0,children:a(H,{courseDetail:d.data,selectedProfessorId:f,setSelectedProfessorId:p})}),a(J,{}),a(q,{direction:`column`,gap:10,flex:`1 1 auto`,children:a(_e,{selectedCourseId:e,selectedProfessorId:f,writableReviewProps:m})})]}):a(j,{})})},Se=c.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e,selected:t})=>t?e.colors.Background.Block.darker:e.colors.Background.Block.dark};
    }
    background-color: ${({selected:e,theme:t})=>e?t.colors.Background.Block.darker:t.colors.Background.Block.default};
`,Ce=c.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,X=c(T)`
    white-space: nowrap;
`,we=(0,R.memo)(({course:e,isSelected:t,selectCourseId:n})=>{let{t:r}=x(),s=i(),c=(0,R.useCallback)(()=>{t?n(null):(n(e.id),f(`Select Course`,{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[t,e.id,n]);return o(Se,{onClick:c,selected:t,children:[o(l,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[o(l,{direction:`row`,gap:6,align:`center`,children:[a(y,{size:12,color:e.open?s.colors.Highlight.default:s.colors.Text.disable,children:a(F,{})}),a(T,{type:`NormalBold`,color:`Text.default`,children:e.name}),a(T,{type:`Normal`,color:`Text.placeholder`,children:e.code})]}),e.completed&&a(T,{type:`Normal`,color:`Text.lighter`,children:r(`common.completedCourse`)})]}),a(Ce,{}),o(l,{direction:`column`,gap:4,children:[o(l,{direction:`row`,gap:6,children:[a(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.class`)}),o(T,{type:`Normal`,color:`Text.default`,children:[e.department.name,`, `,e.type]})]}),o(l,{direction:`row`,gap:6,children:[a(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.professor`)}),a(T,{type:`Normal`,color:`Text.default`,children:e.professors.map(e=>e.name).join(`, `)})]}),o(l,{direction:`row`,gap:6,children:[a(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.description`)}),a(T,{type:`Normal`,color:`Text.default`,children:e.summary})]})]})]})}),Te=c(l)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Ee=c.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,De=c(T)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Oe=c(T)`
    display: flex;
    flex-direction: ${({direction:e})=>e};
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
    white-space: nowrap;
`,ke=c(l)`
    white-space: nowrap;
`,Z=c(l)`
    flex-grow: 1;
    height: 36px;
`,Ae=c(l)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Q=20;function je({selectedCourseId:e,setSelectedCourseId:t}){let{t:n}=x(),c=i(),u=O(`mobile`),d=(0,R.useRef)(null),[h]=r(),[g,S]=(0,R.useState)(0),[C,w]=(0,R.useState)(!1),[E,D]=(0,R.useState)({courses:[],totalCount:0}),{query:k,setParams:j,data:M}=v(`GET`,`/courses`,{infinites:[`courses`],limit:Q,enabled:C}),{inView:N,ref:I}=_({threshold:0});(0,R.useEffect)(()=>{N&&k.hasNextPage&&!k.isFetchingNextPage&&k.fetchNextPage()},[N]),(0,R.useEffect)(()=>{let e=h.get(`term`)?parseInt(h.get(`term`)):void 0,t={keyword:h.get(`keyword`)||``,type:h.getAll(`type`),department:h.getAll(`department`).map(e=>parseInt(e)),level:h.getAll(`level`).map(e=>parseInt(e))};e!==void 0&&(t.term=e),!P(t)&&L(t)},[]),(0,R.useEffect)(()=>{M!==void 0&&D(M)},[M]),(0,R.useEffect)(()=>{(g!=0||C!=0)&&(D({courses:[],totalCount:0}),j(e=>({...e,order:m[g]??p.CODE,offset:0})),w(!0),d.current?.scrollTo(0,0))},[g]);let L=e=>{if(P(e)){alert(n(`common.search.empty`));return}let t={...e,order:m[g]??p.CODE,offset:0,limit:Q};j(t),w(!0),d.current?.scrollTo(0,0),f(`Search Courses`,{keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``,term:e.term??``})};return o(Te,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,children:[a(Ee,{children:a(te,{options:[`type`,`department`,`level`,`term`],onSearch:L})}),E.courses.length===0?k.isLoading?a(A,{}):a(De,{type:`Bigger`,color:`Text.placeholder`,children:n(`dictionary.noResults`)}):o(s,{children:[o(l,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[o(Oe,{color:`Text.default`,direction:u?`column`:`row`,children:[a(l,{direction:`row`,gap:4,align:`center`,children:a(b,{i18nKey:`dictionary.courseCountInfo1`,count:M?.totalCount,components:{bold:a(T,{type:`NormalBold`,children:void 0}),space:a(s,{children:`\xA0`})}})}),a(l,{direction:`row`,gap:1,align:`center`,children:a(b,{i18nKey:`dictionary.courseCountInfo2`,count:M?.totalCount,components:{icon:a(y,{size:12,color:c.colors.Highlight.default,children:a(F,{})}),space:a(s,{children:`\xA0`})}})})]}),o(ke,{direction:`row`,gap:8,align:`center`,children:[a(T,{type:`NormalBold`,color:`Text.default`,children:n(`dictionary.sort`)}),a(Z,{direction:`row`,gap:0,children:a(ee,{options:[n(`dictionary.sortOptions.code`),n(`dictionary.sortOptions.popularity`),n(`dictionary.sortOptions.studentCount`)],setSelectedOption:S,selectedOption:g})})]})]}),o(Ae,{direction:`column`,gap:12,ref:d,children:[E.courses.map(n=>a(we,{course:n,isSelected:e==n.id,selectCourseId:t},n.id)),k.hasNextPage&&a(A,{ref:I})]})]})]})}var Me=c(l)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${D.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${D.mobile} {
        padding: 0 8px 12px 8px;
    }
`,$=c(k)`
    height: 100%;
    overflow: hidden;
    padding: 16px;

    ${D.mobile} {
        padding: 16px 12px;
    }
`,Ne=c($)`
    max-width: 508px;
    flex: 1 1 0;

    ${D.tablet} {
        max-width: none;
    }
`,Pe=c($)`
    flex: 1 1 0;
    max-width: 976px;

    ${D.tablet} {
        display: none;
    }
`,Fe=n(function(){let e=O(`tablet`),{t}=x(),[n,i]=r(),[s,c]=(0,R.useState)(!1),[l,u]=(0,R.useState)(null);(0,R.useEffect)(()=>{f(`Page View`,{page:`Dictionary`})},[]),(0,R.useEffect)(()=>{let e=n.get(`courseId`);if(e){let t=parseInt(e,10);isNaN(t)?u(null):(u(t),i(e=>(e.delete(`courseId`),e)))}},[]),(0,R.useEffect)(()=>{e?l!==null&&c(!0):c(!1)},[e]),(0,R.useEffect)(()=>{e&&l!==null&&c(!0)},[l]);let d=(0,R.useCallback)(()=>{c(!1),u(null)},[]);return o(Me,{direction:`row`,align:`stretch`,justify:`center`,gap:12,children:[a(Ne,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:a(je,{selectedCourseId:l,setSelectedCourseId:u})}),a(Pe,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:a(Y,{selectedCourseId:l})}),e&&a(w,{ariaLabel:t(`header.dictionary`),isOpen:s,onClose:d,header:!1,fullScreen:!0,children:a(Y,{selectedCourseId:l,isMobileModal:!0,onMobileModalClose:d})})]})});export{Fe as default};
//# sourceMappingURL=dictionary-BNDOYBHW.js.map