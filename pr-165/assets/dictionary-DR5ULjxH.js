(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`bb847b14d7c1c5d83bc31587c22652ecf12452e6`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`171a9e71-a824-483e-bd59-bd66c66fd5f6`,e._sentryDebugIdIdentifier=`sentry-dbid-171a9e71-a824-483e-bd59-bd66c66fd5f6`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Cm1ZQUXn.js";import{A as n,k as r}from"./chunk-62JRHF6Z-we9FGCyI.js";import{l as i,n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-B6DQSma1.js";import{n as c,t as l}from"./FlexWrapper-DnOCdROT.js";import{r as u}from"./emotion-react.browser.esm-BiXQ0Sti.js";import{S as d,y as f}from"./axios-Cuc9xWpo.js";import{_ as p,g as m,t as h,v as g}from"./useAPI-DephItSB.js";import{i as _,n as v,r as y,t as b}from"./Credits-aZP25u4i.js";import{t as x}from"./Icon-C7BKq74y.js";import{t as S}from"./Trans-B6d7zXFx.js";import{t as C}from"./useTranslation-CfxTHiDx.js";import{t as w}from"./IconButton-BSp2SzAM.js";import{t as T}from"./Close-BUK3H1Gk.js";import{t as E}from"./Modal-BRvsO0kY.js";import{t as D}from"./Typography-BhPxHMQG.js";import{t as O}from"./media-1f00SMn4.js";import{t as k}from"./useIsDevice-DSW6Rn8_.js";import{t as A}from"./proxy-SJyCqJMV.js";import{t as j}from"./Widget-BFG0MveP.js";import{t as M}from"./LoadingCircle-2oTqQrQl.js";import{n as N,t as P}from"./ReviewBlock-DBcJrfS_.js";import{n as ee,t as F}from"./checkEmpty-Bz-KyySi.js";import{n as I,t as L}from"./ReviewScoreSummary-4CKM4lE-.js";import{t as R}from"./KeyboardArrowDown-JYwicyrQ.js";import{t as te}from"./ReviewWritingBlock-DPTDIJXs.js";var z=t(e(),1),B=c.div`
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
`,ne=c(B)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,re=c(B)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,ie=c.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`,ae=({selected:e=!1,chipIndex:t=``,chipText:n=``,...r})=>{let i=()=>o(ie,{children:[a(D,{type:`NormalBold`,children:t}),a(D,{type:`Normal`,children:n})]});return a(e?re:ne,{...r,children:a(i,{})})},oe=c(A.div)`
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
`,se=c(l)`
    height: 100%;
`,ce=c(R)`
    transform: ${e=>e.isfolded===`true`?`rotate(0deg)`:`rotate(180deg)`};
    transition: transform 0.2s ease-in-out;
`,V=c(D)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,H=({courseDetail:e,selectedProfessorId:t,setSelectedProfessorId:n})=>{let{t:r}=C(),c=i(),u=k(`mobile`),f=(0,z.useRef)(null),[p,m]=(0,z.useState)(!0);return(0,z.useEffect)(()=>{f.current&&(f.current.scrollLeft=f.current.scrollWidth)},[e]),(0,z.useEffect)(()=>{if(u){m(!0);return}let t=e?.history?.some(e=>e.classes.length>4)??!1;m(t)},[u,e]),o(s,{children:[o(l,{direction:`row`,gap:0,justify:`space-between`,align:`center`,style:{width:`100%`,cursor:`pointer`},onClick:()=>m(e=>!e),children:[a(D,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.courseHistory`)}),a(w,{onClick:()=>{},children:a(x,{size:20,color:c.colors.Text.default,onClick:()=>{},children:a(ce,{isfolded:p.toString()})})})]}),o(oe,{ref:f,initial:{height:p?0:`auto`},animate:{height:p?0:`auto`},transition:{duration:.2,ease:`easeInOut`},children:[a(`div`,{}),a(l,{direction:`row`,gap:20,style:{minWidth:`min-content`},children:[...e?.history||[]].reverse().map((e,i)=>o(se,{direction:`column`,gap:6,align:`center`,children:[o(D,{type:`Normal`,color:`Text.default`,children:[e.year,` `,d(e.semester)]}),e.classes.length===0?a(V,{color:`Text.disable`,type:`Normal`,children:r(`dictionary.notOffered`)}):a(l,{direction:`column`,gap:4,align:`stretch`,children:e.classes.map((e,r)=>a(ae,{selected:t==(e.professors[0]?.id??-1),chipIndex:e.classNo+` `+e.subtitle,chipText:N(e.professors),onClick:()=>{t===(e.professors[0]?.id??-1)?n(null):n(e.professors[0]?.id??null)}},r))})]},i))})]})]})},U=c(l)`
    width: 100%;
`,W=c(l)`
    width: 300px;
    padding: 10px;
`,G=c(l)`
    flex: 1 0 0;
`,le=c(D)`
    white-space: nowrap;
`,ue=({courseDetail:e})=>{let{t}=C();return o(s,{children:[a(U,{direction:`column`,gap:8,children:[[t(`common.class`),e?.department.name+`, `+e?.type],[t(`common.description`),e?.summary]].map(([e,t],n)=>o(l,{direction:`row`,gap:6,children:[a(le,{type:`NormalBold`,color:`Text.default`,children:e}),a(D,{type:`Normal`,color:`Text.default`,children:t})]},n))}),a(W,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e?.classDuration,t(`common.numClasses`)],[e?.expDuration,t(`common.numLabs`)],e?.creditAU?[e?.creditAU,`AU`]:[e?.credit,t(`common.credit`)]].map(([e,t],n)=>o(G,{direction:`column`,gap:0,align:`center`,children:[a(D,{type:`Bigger`,color:`Text.default`,children:e}),a(D,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},K=c.div`
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
`,me=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>a(pe,{children:t});return a(e?fe:de,{...n,children:a(r,{})})},he=20,ge=[`all`,`english`],_e=({selectedCourseId:e,selectedProfessorId:t,writableReviewProps:n})=>{let{t:r}=C(),[i,c]=(0,z.useState)(`all`),[d,f]=(0,z.useState)(!1),{query:p,setParams:h,data:g}=v(`GET`,`/reviews`,{infinites:[`reviews`],limit:he,enabled:d}),{ref:y,inView:b}=_();return(0,z.useEffect)(()=>{h({mode:m.DEFAULT,courseId:e||void 0,professorId:t||void 0})},[]),(0,z.useEffect)(()=>{h(n=>{let r=n??{};return t===null&&delete r.professorId,{...r,...e===null?{}:{courseId:e},...t===null?{}:{professorId:t}}}),f(e!==null)},[t,e]),(0,z.useEffect)(()=>{b&&p.hasNextPage&&!p.isFetchingNextPage&&p.fetchNextPage()},[b]),o(s,{children:[a(D,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.review`)}),o(l,{direction:`column`,gap:6,children:[a(D,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.reviewLanguage`)}),a(l,{direction:`row`,gap:6,children:ge.map(e=>a(me,{selected:i==e,chipText:r(`dictionary.reviewLanguageOptions.${e}`),onClick:()=>c(e)},e))})]}),g===null&&p.isLoading?a(M,{}):o(s,{children:[a(l,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:a(L,{averageGrade:g?.averageGrade,averageLoad:g?.averageLoad,averageSpeech:g?.averageSpeech,reviewCount:g?.reviews.length,labels:{grade:r(`common.grade`),load:r(`common.load`),speech:r(`common.speech`)}})}),n.map((e,t)=>u(te,{...e,key:t})),g?.reviews.map(e=>i===`english`&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(e.content)?null:a(P,{review:e,linkToDictionary:!1},e.id)),p.hasNextPage&&a(M,{ref:y})]})]})},ve=c(l)`
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
`,Y=({selectedCourseId:e,isMobileModal:t=!1,onMobileModalClose:n})=>{let{t:i}=C(),[c,u]=r(),{query:d}=h(`GET`,`/courses/${e}`,{enabled:e!==null}),[f,p]=(0,z.useState)(null),[m,g]=(0,z.useState)([]);return(0,z.useEffect)(()=>{if(d.data){let e=[];d.data.history.forEach(t=>{if(t.myLectureId!==null){let n=t.classes.find(e=>e.lectureId===t.myLectureId)?.professors||[];e.push({name:d.data.name,lectureId:t.myLectureId,professors:n,year:t.year,semester:t.semester})}}),g(e)}},[d.data]),(0,z.useEffect)(()=>{p(null);let e=c.get(`professorId`);if(e){let t=parseInt(e,10);isNaN(t)?p(null):(p(t),u({}))}},[e]),a(ve,{direction:`column`,gap:12,align:`center`,justify:e?`start`:`center`,children:e?d.isLoading?a(M,{}):o(s,{children:[o(ye,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[o(l,{direction:`row`,align:`center`,gap:8,justify:t?`space-between`:`center`,style:{width:`100%`},children:[t&&a(be,{}),a(D,{type:`Bigger`,color:`Text.default`,children:d.data?.name}),t&&a(xe,{type:`button`,"aria-label":i(`common.search.close`),title:i(`common.search.close`),onClick:n,children:a(x,{size:20,children:a(T,{})})})]}),a(D,{type:`Big`,color:`Text.default`,children:d.data?.code})]}),a(q,{direction:`column`,gap:10,align:`center`,children:a(ue,{courseDetail:d.data})}),a(J,{}),a(q,{direction:`column`,gap:0,children:a(H,{courseDetail:d.data,selectedProfessorId:f,setSelectedProfessorId:p})}),a(J,{}),a(q,{direction:`column`,gap:10,flex:`1 1 auto`,children:a(_e,{selectedCourseId:e,selectedProfessorId:f,writableReviewProps:m})})]}):a(b,{})})},Se=c.div`
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
`,X=c(D)`
    white-space: nowrap;
`,we=(0,z.memo)(({course:e,isSelected:t,selectCourseId:n})=>{let{t:r}=C(),s=i(),c=(0,z.useCallback)(()=>{t?n(null):(n(e.id),f(`Select Course`,{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[t,e.id,n]);return o(Se,{onClick:c,selected:t,children:[o(l,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[o(l,{direction:`row`,gap:6,align:`center`,children:[a(x,{size:12,color:e.open?s.colors.Highlight.default:s.colors.Text.disable,children:a(I,{})}),a(D,{type:`NormalBold`,color:`Text.default`,children:e.name}),a(D,{type:`Normal`,color:`Text.placeholder`,children:e.code})]}),e.completed&&a(D,{type:`Normal`,color:`Text.lighter`,children:r(`common.completedCourse`)})]}),a(Ce,{}),o(l,{direction:`column`,gap:4,children:[o(l,{direction:`row`,gap:6,children:[a(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.class`)}),o(D,{type:`Normal`,color:`Text.default`,children:[e.department.name,`, `,e.type]})]}),o(l,{direction:`row`,gap:6,children:[a(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.professor`)}),a(D,{type:`Normal`,color:`Text.default`,children:e.professors.map(e=>e.name).join(`, `)})]}),o(l,{direction:`row`,gap:6,children:[a(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.description`)}),a(D,{type:`Normal`,color:`Text.default`,children:e.summary})]})]})]})}),Te=c(l)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Ee=c.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,De=c(D)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Oe=c(D)`
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
`,Q=20;function je({selectedCourseId:e,setSelectedCourseId:t}){let{t:n}=C(),c=i(),u=k(`mobile`),d=(0,z.useRef)(null),[m]=r(),[h,b]=(0,z.useState)(0),[w,T]=(0,z.useState)(!1),[E,O]=(0,z.useState)({courses:[],totalCount:0}),{query:A,setParams:j,data:N}=v(`GET`,`/courses`,{infinites:[`courses`],limit:Q,enabled:w}),{inView:P,ref:L}=_({threshold:0});(0,z.useEffect)(()=>{P&&A.hasNextPage&&!A.isFetchingNextPage&&A.fetchNextPage()},[P]),(0,z.useEffect)(()=>{let e=m.get(`term`)?parseInt(m.get(`term`)):void 0,t={keyword:m.get(`keyword`)||``,type:m.getAll(`type`),department:m.getAll(`department`).map(e=>parseInt(e)),level:m.getAll(`level`).map(e=>parseInt(e))};e!==void 0&&(t.term=e),!F(t)&&R(t)},[]),(0,z.useEffect)(()=>{N!==void 0&&O(N)},[N]),(0,z.useEffect)(()=>{(h!=0||w!=0)&&(O({courses:[],totalCount:0}),j(e=>({...e,order:p[h]??g.CODE,offset:0})),T(!0),d.current?.scrollTo(0,0))},[h]);let R=e=>{if(F(e)){alert(n(`common.search.empty`));return}let t={...e,order:p[h]??g.CODE,offset:0,limit:Q};j(t),T(!0),d.current?.scrollTo(0,0),f(`Search Courses`,{keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``,term:e.term??``})};return o(Te,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,children:[a(Ee,{children:a(ee,{options:[`type`,`department`,`level`,`term`],onSearch:R})}),E.courses.length===0?A.isLoading?a(M,{}):a(De,{type:`Bigger`,color:`Text.placeholder`,children:n(`dictionary.noResults`)}):o(s,{children:[o(l,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[o(Oe,{color:`Text.default`,direction:u?`column`:`row`,children:[a(l,{direction:`row`,gap:4,align:`center`,children:a(S,{i18nKey:`dictionary.courseCountInfo1`,count:N?.totalCount,components:{bold:a(D,{type:`NormalBold`,children:void 0}),space:a(s,{children:`\xA0`})}})}),a(l,{direction:`row`,gap:1,align:`center`,children:a(S,{i18nKey:`dictionary.courseCountInfo2`,count:N?.totalCount,components:{icon:a(x,{size:12,color:c.colors.Highlight.default,children:a(I,{})}),space:a(s,{children:`\xA0`})}})})]}),o(ke,{direction:`row`,gap:8,align:`center`,children:[a(D,{type:`NormalBold`,color:`Text.default`,children:n(`dictionary.sort`)}),a(Z,{direction:`row`,gap:0,children:a(y,{options:[n(`dictionary.sortOptions.code`),n(`dictionary.sortOptions.popularity`),n(`dictionary.sortOptions.studentCount`)],setSelectedOption:b,selectedOption:h})})]})]}),o(Ae,{direction:`column`,gap:12,ref:d,children:[E.courses.map(n=>a(we,{course:n,isSelected:e==n.id,selectCourseId:t},n.id)),A.hasNextPage&&a(M,{ref:L})]})]})]})}var Me=c(l)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${O.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${O.mobile} {
        padding: 0 8px 12px 8px;
    }
`,$=c(j)`
    height: 100%;
    overflow: hidden;
    padding: 16px;

    ${O.mobile} {
        padding: 16px 12px;
    }
`,Ne=c($)`
    max-width: 508px;
    flex: 1 1 0;

    ${O.tablet} {
        max-width: none;
    }
`,Pe=c($)`
    flex: 1 1 0;
    max-width: 976px;

    ${O.tablet} {
        display: none;
    }
`,Fe=n(function(){let e=k(`tablet`),{t}=C(),[n,i]=r(),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(null);(0,z.useEffect)(()=>{f(`Page View`,{page:`Dictionary`})},[]),(0,z.useEffect)(()=>{let e=n.get(`courseId`);if(e){let t=parseInt(e,10);isNaN(t)?u(null):(u(t),i(e=>(e.delete(`courseId`),e)))}},[]),(0,z.useEffect)(()=>{e?l!==null&&c(!0):c(!1)},[e]),(0,z.useEffect)(()=>{e&&l!==null&&c(!0)},[l]);let d=(0,z.useCallback)(()=>{c(!1),u(null)},[]);return o(Me,{direction:`row`,align:`stretch`,justify:`center`,gap:12,children:[a(Ne,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:a(je,{selectedCourseId:l,setSelectedCourseId:u})}),a(Pe,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:a(Y,{selectedCourseId:l})}),e&&a(E,{ariaLabel:t(`header.dictionary`),isOpen:s,onClose:d,header:!1,fullScreen:!0,children:a(Y,{selectedCourseId:l,isMobileModal:!0,onMobileModalClose:d})})]})});export{Fe as default};
//# sourceMappingURL=dictionary-DR5ULjxH.js.map