(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ae78bb29740f8c810183e8d67c285aec4b25af60`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`3bec57b8-fe08-49c6-b726-618b0608c455`,e._sentryDebugIdIdentifier=`sentry-dbid-3bec57b8-fe08-49c6-b726-618b0608c455`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Co79l46r.js";import{A as n,k as r}from"./chunk-62JRHF6Z-BW7PGyw2.js";import{l as i,n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-Cci4_jQS.js";import{n as c,t as l}from"./FlexWrapper-CyMVPbYT.js";import{r as u}from"./emotion-react.browser.esm-BU6kzTs9.js";import{S as d,y as f}from"./axios-BCSzYzAL.js";import{_ as p,g as m,h,t as g}from"./useAPI-DB_8ghhJ.js";import{i as _,n as v,r as y,t as b}from"./Credits-i03UqpTi.js";import{t as x}from"./Icon-DsmBBlPa.js";import{t as S}from"./Trans-Btrtw0c5.js";import{t as C}from"./useTranslation-Bzyz3KMR.js";import{t as w}from"./IconButton-Dm1quy07.js";import{t as T}from"./Close-9ZNGFAzo.js";import{t as E}from"./Modal-BgQ4JNOx.js";import{t as D}from"./Typography-L-Xg_UM4.js";import{t as O}from"./proxy-ZZ7Z4CC6.js";import{t as k}from"./media-CeZwNfzi.js";import{t as A}from"./useIsDevice-CYiHTW5h.js";import{t as j}from"./Widget-BKg4PtCt.js";import{t as M}from"./LoadingCircle-DYtbnQCq.js";import{n as N,t as P}from"./ReviewBlock-DsD_0wks.js";import{n as ee,t as F}from"./checkEmpty-zpPrbgMh.js";import{n as I,t as L}from"./ReviewScoreSummary-Co62K4LT.js";import{t as R}from"./KeyboardArrowDown-DjkEO28T.js";import{t as te}from"./ReviewWritingBlock-BwUGCPcb.js";var z=t(e(),1),B=c.div`
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
`,ae=({selected:e=!1,chipIndex:t=``,chipText:n=``,...r})=>{let i=()=>o(ie,{children:[a(D,{type:`NormalBold`,children:t}),a(D,{type:`Normal`,children:n})]});return a(e?re:ne,{...r,children:a(i,{})})},oe=c(O.div)`
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
`,H=({courseDetail:e,selectedProfessorId:t,setSelectedProfessorId:n})=>{let{t:r}=C(),c=i(),u=A(`mobile`),f=(0,z.useRef)(null),[p,m]=(0,z.useState)(!0);return(0,z.useEffect)(()=>{f.current&&(f.current.scrollLeft=f.current.scrollWidth)},[e]),(0,z.useEffect)(()=>{if(u){m(!0);return}let t=e?.history?.some(e=>e.classes.length>4)??!1;m(t)},[u,e]),o(s,{children:[o(l,{direction:`row`,gap:0,justify:`space-between`,align:`center`,style:{width:`100%`,cursor:`pointer`},onClick:()=>m(e=>!e),children:[a(D,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.courseHistory`)}),a(w,{onClick:()=>{},children:a(x,{size:20,color:c.colors.Text.default,onClick:()=>{},children:a(ce,{isfolded:p.toString()})})})]}),o(oe,{ref:f,initial:{height:p?0:`auto`},animate:{height:p?0:`auto`},transition:{duration:.2,ease:`easeInOut`},children:[a(`div`,{}),a(l,{direction:`row`,gap:20,style:{minWidth:`min-content`},children:[...e?.history||[]].reverse().map((e,i)=>o(se,{direction:`column`,gap:6,align:`center`,children:[o(D,{type:`Normal`,color:`Text.default`,children:[e.year,` `,d(e.semester)]}),e.classes.length===0?a(V,{color:`Text.disable`,type:`Normal`,children:r(`dictionary.notOffered`)}):a(l,{direction:`column`,gap:4,align:`stretch`,children:e.classes.map((e,r)=>a(ae,{selected:t==(e.professors[0]?.id??-1),chipIndex:e.classNo+` `+e.subtitle,chipText:N(e.professors),onClick:()=>{t===(e.professors[0]?.id??-1)?n(null):n(e.professors[0]?.id??null)}},r))})]},i))})]})]})},U=c(l)`
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
`,me=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>a(pe,{children:t});return a(e?fe:de,{...n,children:a(r,{})})},he=20,ge=[`all`,`english`],_e=({selectedCourseId:e,selectedProfessorId:t,writableReviewProps:n})=>{let{t:r}=C(),[i,c]=(0,z.useState)(`all`),[d,f]=(0,z.useState)(!1),{query:p,setParams:m,data:g}=v(`GET`,`/reviews`,{infinites:[`reviews`],limit:he,enabled:d}),{ref:y,inView:b}=_();return(0,z.useEffect)(()=>{m({mode:h.DEFAULT,courseId:e||void 0,professorId:t||void 0})},[]),(0,z.useEffect)(()=>{m(n=>{let r=n??{};return t===null&&delete r.professorId,{...r,...e===null?{}:{courseId:e},...t===null?{}:{professorId:t}}}),f(e!==null)},[t,e]),(0,z.useEffect)(()=>{b&&p.hasNextPage&&!p.isFetchingNextPage&&p.fetchNextPage()},[b]),o(s,{children:[a(D,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.review`)}),o(l,{direction:`column`,gap:6,children:[a(D,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.reviewLanguage`)}),a(l,{direction:`row`,gap:6,children:ge.map(e=>a(me,{selected:i==e,chipText:r(`dictionary.reviewLanguageOptions.${e}`),onClick:()=>c(e)},e))})]}),g===null&&p.isLoading?a(M,{}):o(s,{children:[a(l,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:a(L,{averageGrade:g?.averageGrade,averageLoad:g?.averageLoad,averageSpeech:g?.averageSpeech,reviewCount:g?.reviews.length,labels:{grade:r(`common.grade`),load:r(`common.load`),speech:r(`common.speech`)}})}),n.map((e,t)=>u(te,{...e,key:t})),g?.reviews.map(e=>i===`english`&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(e.content)?null:a(P,{review:e,linkToDictionary:!1},e.id)),p.hasNextPage&&a(M,{ref:y})]})]})},ve=c(l)`
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
`,Y=({selectedCourseId:e,isMobileModal:t=!1,onMobileModalClose:n})=>{let{t:i}=C(),[c,u]=r(),{query:d}=g(`GET`,`/courses/${e}`,{enabled:e!==null}),[f,p]=(0,z.useState)(null),[m,h]=(0,z.useState)([]);return(0,z.useEffect)(()=>{if(d.data){let e=[];d.data.history.forEach(t=>{if(t.myLectureId!==null){let n=t.classes.find(e=>e.lectureId===t.myLectureId)?.professors||[];e.push({name:d.data.name,lectureId:t.myLectureId,professors:n,year:t.year,semester:t.semester})}}),h(e)}},[d.data]),(0,z.useEffect)(()=>{p(null);let e=c.get(`professorId`);if(e){let t=parseInt(e,10);isNaN(t)?p(null):(p(t),u({}))}},[e]),a(ve,{direction:`column`,gap:12,align:`center`,justify:e?`start`:`center`,children:e?d.isLoading?a(M,{}):o(s,{children:[o(ye,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[o(l,{direction:`row`,align:`center`,gap:8,justify:t?`space-between`:`center`,style:{width:`100%`},children:[t&&a(be,{}),a(D,{type:`Bigger`,color:`Text.default`,children:d.data?.name}),t&&a(xe,{type:`button`,"aria-label":i(`common.search.close`),title:i(`common.search.close`),onClick:n,children:a(x,{size:20,children:a(T,{})})})]}),a(D,{type:`Big`,color:`Text.default`,children:d.data?.code})]}),a(q,{direction:`column`,gap:10,align:`center`,children:a(ue,{courseDetail:d.data})}),a(J,{}),a(q,{direction:`column`,gap:0,children:a(H,{courseDetail:d.data,selectedProfessorId:f,setSelectedProfessorId:p})}),a(J,{}),a(q,{direction:`column`,gap:10,flex:`1 1 auto`,children:a(_e,{selectedCourseId:e,selectedProfessorId:f,writableReviewProps:m})})]}):a(b,{})})},Se=c.div`
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
`,Q=20;function je({selectedCourseId:e,setSelectedCourseId:t}){let{t:n}=C(),c=i(),u=A(`mobile`),d=(0,z.useRef)(null),[h]=r(),[g,b]=(0,z.useState)(0),[w,T]=(0,z.useState)(!1),[E,O]=(0,z.useState)({courses:[],totalCount:0}),{query:k,setParams:j,data:N}=v(`GET`,`/courses`,{infinites:[`courses`],limit:Q,enabled:w}),{inView:P,ref:L}=_({threshold:0});(0,z.useEffect)(()=>{P&&k.hasNextPage&&!k.isFetchingNextPage&&k.fetchNextPage()},[P]),(0,z.useEffect)(()=>{let e=h.get(`term`)?parseInt(h.get(`term`)):void 0,t={keyword:h.get(`keyword`)||``,type:h.getAll(`type`),department:h.getAll(`department`).map(e=>parseInt(e)),level:h.getAll(`level`).map(e=>parseInt(e))};e!==void 0&&(t.term=e),!F(t)&&R(t)},[]),(0,z.useEffect)(()=>{N!==void 0&&O(N)},[N]),(0,z.useEffect)(()=>{(g!=0||w!=0)&&(O({courses:[],totalCount:0}),j(e=>({...e,order:m[g]??p.CODE,offset:0})),T(!0),d.current?.scrollTo(0,0))},[g]);let R=e=>{if(F(e)){alert(n(`common.search.empty`));return}let t={...e,order:m[g]??p.CODE,offset:0,limit:Q};j(t),T(!0),d.current?.scrollTo(0,0),f(`Search Courses`,{keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``,term:e.term??``})};return o(Te,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,children:[a(Ee,{children:a(ee,{options:[`type`,`department`,`level`,`term`],onSearch:R})}),E.courses.length===0?k.isLoading?a(M,{}):a(De,{type:`Bigger`,color:`Text.placeholder`,children:n(`dictionary.noResults`)}):o(s,{children:[o(l,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[o(Oe,{color:`Text.default`,direction:u?`column`:`row`,children:[a(l,{direction:`row`,gap:4,align:`center`,children:a(S,{i18nKey:`dictionary.courseCountInfo1`,count:N?.totalCount,components:{bold:a(D,{type:`NormalBold`,children:void 0}),space:a(s,{children:`\xA0`})}})}),a(l,{direction:`row`,gap:1,align:`center`,children:a(S,{i18nKey:`dictionary.courseCountInfo2`,count:N?.totalCount,components:{icon:a(x,{size:12,color:c.colors.Highlight.default,children:a(I,{})}),space:a(s,{children:`\xA0`})}})})]}),o(ke,{direction:`row`,gap:8,align:`center`,children:[a(D,{type:`NormalBold`,color:`Text.default`,children:n(`dictionary.sort`)}),a(Z,{direction:`row`,gap:0,children:a(y,{options:[n(`dictionary.sortOptions.code`),n(`dictionary.sortOptions.popularity`),n(`dictionary.sortOptions.studentCount`)],setSelectedOption:b,selectedOption:g})})]})]}),o(Ae,{direction:`column`,gap:12,ref:d,children:[E.courses.map((n,r)=>a(we,{course:n,isSelected:e==n.id,selectCourseId:t},r)),k.hasNextPage&&a(M,{ref:L})]})]})]})}var Me=c(l)`
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
`,Fe=n(function(){let e=A(`tablet`),{t}=C(),[n,i]=r(),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(null);(0,z.useEffect)(()=>{f(`Page View`,{page:`Dictionary`})},[]),(0,z.useEffect)(()=>{let e=n.get(`courseId`);if(e){let t=parseInt(e,10);isNaN(t)?u(null):(u(t),i(e=>(e.delete(`courseId`),e)))}},[]),(0,z.useEffect)(()=>{e?l!==null&&c(!0):c(!1)},[e]),(0,z.useEffect)(()=>{e&&l!==null&&c(!0)},[l]);let d=(0,z.useCallback)(()=>{c(!1),u(null)},[]);return o(Me,{direction:`row`,align:`stretch`,justify:`center`,gap:12,children:[a(Ne,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:a(je,{selectedCourseId:l,setSelectedCourseId:u})}),a(Pe,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:a(Y,{selectedCourseId:l})}),e&&a(E,{ariaLabel:t(`header.dictionary`),isOpen:s,onClose:d,header:!1,fullScreen:!0,children:a(Y,{selectedCourseId:l,isMobileModal:!0,onMobileModalClose:d})})]})});export{Fe as default};
//# sourceMappingURL=dictionary-DamcKVNe.js.map