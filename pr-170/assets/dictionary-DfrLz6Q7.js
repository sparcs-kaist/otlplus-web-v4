(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`3b0e1d5e696915030a0b6d616c1263ff2f429d72`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`2e9f62be-1532-4ac2-a0ff-ae03d69e3e9e`,e._sentryDebugIdIdentifier=`sentry-dbid-2e9f62be-1532-4ac2-a0ff-ae03d69e3e9e`)}catch{}})();import{D as e,S as t,l as n,n as r,r as i,t as a}from"./emotion-react-jsx-runtime.browser.esm-CEJANohN.js";import{A as o,k as s}from"./chunk-62JRHF6Z-CyWtaSqr.js";import{t as c}from"./emotion-styled.browser.esm-CAIppcGC.js";import{r as l}from"./emotion-react.browser.esm-WwY-Pfrl.js";import{S as u,y as d}from"./axios-BShiDBOC.js";import{_ as f,g as p,h as m,t as h}from"./useAPI-B9jV7FdJ.js";import{i as g,n as _,r as v,t as y}from"./Credits-CI2u52vb.js";import{t as b}from"./Icon-DD8doI0X.js";import{t as x}from"./Trans-E7BamBPz.js";import{t as S}from"./useTranslation-BLURkQ_K.js";import{t as C}from"./IconButton-DM1pLPYY.js";import{t as w}from"./Close-evtyC5Eg.js";import{t as T}from"./Modal-BKtn4KAK.js";import{t as E}from"./Typography-DA1kh1cX.js";import{t as D}from"./FlexWrapper-CUG6HLLC.js";import{t as O}from"./proxy-euRg-k0z.js";import{t as k}from"./media-B4tpoFOq.js";import{t as A}from"./useIsDevice-BZn6KfDY.js";import{t as j}from"./Widget-BoZqAEj_.js";import{t as M}from"./LoadingCircle-Db2xZeW7.js";import{n as N,t as P}from"./ReviewBlock-CnZ_B_vE.js";import{n as ee,t as F}from"./checkEmpty-Crrdomxt.js";import{n as I,t as L}from"./ReviewScoreSummary-MritLyUY.js";import{t as R}from"./KeyboardArrowDown-Cc-DDQAW.js";import{t as te}from"./ReviewWritingBlock-Du5z9lIP.js";var z=e(t(),1),B=c.div`
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
`,ae=({selected:e=!1,chipIndex:t=``,chipText:n=``,...a})=>{let o=()=>i(ie,{children:[r(E,{type:`NormalBold`,children:t}),r(E,{type:`Normal`,children:n})]});return r(e?re:ne,{...a,children:r(o,{})})},oe=c(O.div)`
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
`,se=c(D)`
    height: 100%;
`,ce=c(R)`
    transform: ${e=>e.isfolded===`true`?`rotate(0deg)`:`rotate(180deg)`};
    transition: transform 0.2s ease-in-out;
`,V=c(E)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,H=({courseDetail:e,selectedProfessorId:t,setSelectedProfessorId:o})=>{let{t:s}=S(),c=n(),l=A(`mobile`),d=(0,z.useRef)(null),[f,p]=(0,z.useState)(!0);return(0,z.useEffect)(()=>{d.current&&(d.current.scrollLeft=d.current.scrollWidth)},[e]),(0,z.useEffect)(()=>{if(l){p(!0);return}let t=e?.history?.some(e=>e.classes.length>4)??!1;p(t)},[l,e]),i(a,{children:[i(D,{direction:`row`,gap:0,justify:`space-between`,align:`center`,style:{width:`100%`,cursor:`pointer`},onClick:()=>p(e=>!e),children:[r(E,{type:`NormalBold`,color:`Text.default`,children:s(`dictionary.courseHistory`)}),r(C,{onClick:()=>{},children:r(b,{size:20,color:c.colors.Text.default,onClick:()=>{},children:r(ce,{isfolded:f.toString()})})})]}),i(oe,{ref:d,initial:{height:f?0:`auto`},animate:{height:f?0:`auto`},transition:{duration:.2,ease:`easeInOut`},children:[r(`div`,{}),r(D,{direction:`row`,gap:20,style:{minWidth:`min-content`},children:[...e?.history||[]].reverse().map((e,n)=>i(se,{direction:`column`,gap:6,align:`center`,children:[i(E,{type:`Normal`,color:`Text.default`,children:[e.year,` `,u(e.semester)]}),e.classes.length===0?r(V,{color:`Text.disable`,type:`Normal`,children:s(`dictionary.notOffered`)}):r(D,{direction:`column`,gap:4,align:`stretch`,children:e.classes.map((e,n)=>r(ae,{selected:t==(e.professors[0]?.id??-1),chipIndex:e.classNo+` `+e.subtitle,chipText:N(e.professors),onClick:()=>{t===(e.professors[0]?.id??-1)?o(null):o(e.professors[0]?.id??null)}},n))})]},n))})]})]})},U=c(D)`
    width: 100%;
`,W=c(D)`
    width: 300px;
    padding: 10px;
`,G=c(D)`
    flex: 1 0 0;
`,le=c(E)`
    white-space: nowrap;
`,ue=({courseDetail:e})=>{let{t}=S();return i(a,{children:[r(U,{direction:`column`,gap:8,children:[[t(`common.class`),e?.department.name+`, `+e?.type],[t(`common.description`),e?.summary]].map(([e,t],n)=>i(D,{direction:`row`,gap:6,children:[r(le,{type:`NormalBold`,color:`Text.default`,children:e}),r(E,{type:`Normal`,color:`Text.default`,children:t})]},n))}),r(W,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e?.classDuration,t(`common.numClasses`)],[e?.expDuration,t(`common.numLabs`)],e?.creditAU?[e?.creditAU,`AU`]:[e?.credit,t(`common.credit`)]].map(([e,t],n)=>i(G,{direction:`column`,gap:0,align:`center`,children:[r(E,{type:`Bigger`,color:`Text.default`,children:e}),r(E,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},K=c.div`
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
`,me=({selected:e=!1,chipText:t=``,...n})=>{let i=()=>r(pe,{children:t});return r(e?fe:de,{...n,children:r(i,{})})},he=20,ge=[`all`,`english`],_e=({selectedCourseId:e,selectedProfessorId:t,writableReviewProps:n})=>{let{t:o}=S(),[s,c]=(0,z.useState)(`all`),[u,d]=(0,z.useState)(!1),{query:f,setParams:p,data:h}=_(`GET`,`/reviews`,{infinites:[`reviews`],limit:he,enabled:u}),{ref:v,inView:y}=g();return(0,z.useEffect)(()=>{p({mode:m.DEFAULT,courseId:e||void 0,professorId:t||void 0})},[]),(0,z.useEffect)(()=>{p(n=>{let r=n??{};return t===null&&delete r.professorId,{...r,...e===null?{}:{courseId:e},...t===null?{}:{professorId:t}}}),d(e!==null)},[t,e]),(0,z.useEffect)(()=>{y&&f.hasNextPage&&!f.isFetchingNextPage&&f.fetchNextPage()},[y]),i(a,{children:[r(E,{type:`NormalBold`,color:`Text.default`,children:o(`dictionary.review`)}),i(D,{direction:`column`,gap:6,children:[r(E,{type:`NormalBold`,color:`Text.default`,children:o(`dictionary.reviewLanguage`)}),r(D,{direction:`row`,gap:6,children:ge.map(e=>r(me,{selected:s==e,chipText:o(`dictionary.reviewLanguageOptions.${e}`),onClick:()=>c(e)},e))})]}),h===null&&f.isLoading?r(M,{}):i(a,{children:[r(D,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:r(L,{averageGrade:h?.averageGrade,averageLoad:h?.averageLoad,averageSpeech:h?.averageSpeech,reviewCount:h?.reviews.length,labels:{grade:o(`common.grade`),load:o(`common.load`),speech:o(`common.speech`)}})}),n.map((e,t)=>l(te,{...e,key:t})),h?.reviews.map(e=>s===`english`&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(e.content)?null:r(P,{review:e,linkToDictionary:!1},e.id)),f.hasNextPage&&r(M,{ref:v})]})]})},ve=c(D)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,q=c(D)`
    width: 100%;
`,ye=c(D)`
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
`,Y=({selectedCourseId:e,isMobileModal:t=!1,onMobileModalClose:n})=>{let{t:o}=S(),[c,l]=s(),{query:u}=h(`GET`,`/courses/${e}`,{enabled:e!==null}),[d,f]=(0,z.useState)(null),[p,m]=(0,z.useState)([]);return(0,z.useEffect)(()=>{if(u.data){let e=[];u.data.history.forEach(t=>{if(t.myLectureId!==null){let n=t.classes.find(e=>e.lectureId===t.myLectureId)?.professors||[];e.push({name:u.data.name,lectureId:t.myLectureId,professors:n,year:t.year,semester:t.semester})}}),m(e)}},[u.data]),(0,z.useEffect)(()=>{f(null);let e=c.get(`professorId`);if(e){let t=parseInt(e,10);isNaN(t)?f(null):(f(t),l({}))}},[e]),r(ve,{direction:`column`,gap:12,align:`center`,justify:e?`start`:`center`,children:e?u.isLoading?r(M,{}):i(a,{children:[i(ye,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[i(D,{direction:`row`,align:`center`,gap:8,justify:t?`space-between`:`center`,style:{width:`100%`},children:[t&&r(be,{}),r(E,{type:`Bigger`,color:`Text.default`,children:u.data?.name}),t&&r(xe,{type:`button`,"aria-label":o(`common.search.close`),title:o(`common.search.close`),onClick:n,children:r(b,{size:20,children:r(w,{})})})]}),r(E,{type:`Big`,color:`Text.default`,children:u.data?.code})]}),r(q,{direction:`column`,gap:10,align:`center`,children:r(ue,{courseDetail:u.data})}),r(J,{}),r(q,{direction:`column`,gap:0,children:r(H,{courseDetail:u.data,selectedProfessorId:d,setSelectedProfessorId:f})}),r(J,{}),r(q,{direction:`column`,gap:10,flex:`1 1 auto`,children:r(_e,{selectedCourseId:e,selectedProfessorId:d,writableReviewProps:p})})]}):r(y,{})})},Se=c.div`
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
`,X=c(E)`
    white-space: nowrap;
`,we=(0,z.memo)(({course:e,isSelected:t,selectCourseId:a})=>{let{t:o}=S(),s=n(),c=(0,z.useCallback)(()=>{t?a(null):(a(e.id),d(`Select Course`,{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[t,e.id,a]);return i(Se,{onClick:c,selected:t,children:[i(D,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[i(D,{direction:`row`,gap:6,align:`center`,children:[r(b,{size:12,color:e.open?s.colors.Highlight.default:s.colors.Text.disable,children:r(I,{})}),r(E,{type:`NormalBold`,color:`Text.default`,children:e.name}),r(E,{type:`Normal`,color:`Text.placeholder`,children:e.code})]}),e.completed&&r(E,{type:`Normal`,color:`Text.lighter`,children:o(`common.completedCourse`)})]}),r(Ce,{}),i(D,{direction:`column`,gap:4,children:[i(D,{direction:`row`,gap:6,children:[r(X,{type:`NormalBold`,color:`Text.default`,children:o(`common.class`)}),i(E,{type:`Normal`,color:`Text.default`,children:[e.department.name,`, `,e.type]})]}),i(D,{direction:`row`,gap:6,children:[r(X,{type:`NormalBold`,color:`Text.default`,children:o(`common.professor`)}),r(E,{type:`Normal`,color:`Text.default`,children:e.professors.map(e=>e.name).join(`, `)})]}),i(D,{direction:`row`,gap:6,children:[r(X,{type:`NormalBold`,color:`Text.default`,children:o(`common.description`)}),r(E,{type:`Normal`,color:`Text.default`,children:e.summary})]})]})]})}),Te=c(D)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Ee=c.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,De=c(E)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Oe=c(E)`
    display: flex;
    flex-direction: ${({direction:e})=>e};
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
    white-space: nowrap;
`,ke=c(D)`
    white-space: nowrap;
`,Z=c(D)`
    flex-grow: 1;
    height: 36px;
`,Ae=c(D)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Q=20;function je({selectedCourseId:e,setSelectedCourseId:t}){let{t:o}=S(),c=n(),l=A(`mobile`),u=(0,z.useRef)(null),[m]=s(),[h,y]=(0,z.useState)(0),[C,w]=(0,z.useState)(!1),[T,O]=(0,z.useState)({courses:[],totalCount:0}),{query:k,setParams:j,data:N}=_(`GET`,`/courses`,{infinites:[`courses`],limit:Q,enabled:C}),{inView:P,ref:L}=g({threshold:0});(0,z.useEffect)(()=>{P&&k.hasNextPage&&!k.isFetchingNextPage&&k.fetchNextPage()},[P]),(0,z.useEffect)(()=>{let e=m.get(`term`)?parseInt(m.get(`term`)):void 0,t={keyword:m.get(`keyword`)||``,type:m.getAll(`type`),department:m.getAll(`department`).map(e=>parseInt(e)),level:m.getAll(`level`).map(e=>parseInt(e))};e!==void 0&&(t.term=e),!F(t)&&R(t)},[]),(0,z.useEffect)(()=>{N!==void 0&&O(N)},[N]),(0,z.useEffect)(()=>{(h!=0||C!=0)&&(O({courses:[],totalCount:0}),j(e=>({...e,order:p[h]??f.CODE,offset:0})),w(!0),u.current?.scrollTo(0,0))},[h]);let R=e=>{if(F(e)){alert(o(`common.search.empty`));return}let t={...e,order:p[h]??f.CODE,offset:0,limit:Q};j(t),w(!0),u.current?.scrollTo(0,0),d(`Search Courses`,{keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``,term:e.term??``})};return i(Te,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,children:[r(Ee,{children:r(ee,{options:[`type`,`department`,`level`,`term`],onSearch:R})}),T.courses.length===0?k.isLoading?r(M,{}):r(De,{type:`Bigger`,color:`Text.placeholder`,children:o(`dictionary.noResults`)}):i(a,{children:[i(D,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[i(Oe,{color:`Text.default`,direction:l?`column`:`row`,children:[r(D,{direction:`row`,gap:4,align:`center`,children:r(x,{i18nKey:`dictionary.courseCountInfo1`,count:N?.totalCount,components:{bold:r(E,{type:`NormalBold`,children:void 0}),space:r(a,{children:`\xA0`})}})}),r(D,{direction:`row`,gap:1,align:`center`,children:r(x,{i18nKey:`dictionary.courseCountInfo2`,count:N?.totalCount,components:{icon:r(b,{size:12,color:c.colors.Highlight.default,children:r(I,{})}),space:r(a,{children:`\xA0`})}})})]}),i(ke,{direction:`row`,gap:8,align:`center`,children:[r(E,{type:`NormalBold`,color:`Text.default`,children:o(`dictionary.sort`)}),r(Z,{direction:`row`,gap:0,children:r(v,{options:[o(`dictionary.sortOptions.code`),o(`dictionary.sortOptions.popularity`),o(`dictionary.sortOptions.studentCount`)],setSelectedOption:y,selectedOption:h})})]})]}),i(Ae,{direction:`column`,gap:12,ref:u,children:[T.courses.map(n=>r(we,{course:n,isSelected:e==n.id,selectCourseId:t},n.id)),k.hasNextPage&&r(M,{ref:L})]})]})]})}var Me=c(D)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${k.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${k.mobile} {
        padding: 0 8px 12px 8px;
    }
`,$=c(j)`
    height: 100%;
    overflow: hidden;
    padding: 16px;

    ${k.mobile} {
        padding: 16px 12px;
    }
`,Ne=c($)`
    max-width: 508px;
    flex: 1 1 0;

    ${k.tablet} {
        max-width: none;
    }
`,Pe=c($)`
    flex: 1 1 0;
    max-width: 976px;

    ${k.tablet} {
        display: none;
    }
`,Fe=o(function(){let e=A(`tablet`),{t}=S(),[n,a]=s(),[o,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(null);(0,z.useEffect)(()=>{d(`Page View`,{page:`Dictionary`})},[]),(0,z.useEffect)(()=>{let e=n.get(`courseId`);if(e){let t=parseInt(e,10);isNaN(t)?u(null):(u(t),a(e=>(e.delete(`courseId`),e)))}},[]),(0,z.useEffect)(()=>{e?l!==null&&c(!0):c(!1)},[e]),(0,z.useEffect)(()=>{e&&l!==null&&c(!0)},[l]);let f=(0,z.useCallback)(()=>{c(!1),u(null)},[]);return i(Me,{direction:`row`,align:`stretch`,justify:`center`,gap:12,children:[r(Ne,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:r(je,{selectedCourseId:l,setSelectedCourseId:u})}),r(Pe,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:r(Y,{selectedCourseId:l})}),e&&r(T,{ariaLabel:t(`header.dictionary`),isOpen:o,onClose:f,header:!1,fullScreen:!0,children:r(Y,{selectedCourseId:l,isMobileModal:!0,onMobileModalClose:f})})]})});export{Fe as default};
//# sourceMappingURL=dictionary-DfrLz6Q7.js.map