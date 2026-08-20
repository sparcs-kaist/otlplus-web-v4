(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`cdff9c3b8d81caaa0369b4e32a9b9c9d184350c0`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`e3e48443-edd4-4231-86da-70a620e04b8d`,e._sentryDebugIdIdentifier=`sentry-dbid-e3e48443-edd4-4231-86da-70a620e04b8d`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-BYK_UeLP.js";import{O as r,k as i}from"./chunk-62JRHF6Z-CZpY3lsJ.js";import{l as a,n as o,r as s,t as c}from"./emotion-react-jsx-runtime.browser.esm-C1Gp4kNh.js";import{n as l,t as u}from"./FlexWrapper-ioHBAB77.js";import{r as d}from"./emotion-react.browser.esm-DHx34aBh.js";import{v as f,x as p}from"./axios-C2sCtQjm.js";import{d as m,f as h,t as g,u as _}from"./useAPI-CoU5D6JM.js";import{i as v,n as y,r as b,t as x}from"./Credits-Dj6-RnG9.js";import{r as S,t as C}from"./Icon-DqNTB8ZE.js";import{t as w}from"./IconButton-B5TTO56d.js";import{t as T}from"./Trans-CKR6aG_v.js";import{t as E}from"./useTranslation-DWiOphx6.js";import{t as D}from"./Close-lz93W0oT.js";import{t as O}from"./Typography-CtH4Tlf2.js";import{t as k}from"./Modal-CF-2RNzl.js";import{t as A}from"./proxy-BBPReWEG.js";import{t as j}from"./media-Bh7M6fMo.js";import{t as M}from"./useIsDevice-sXFmVCA5.js";import{t as N}from"./Widget-DXufLgpE.js";import{t as P}from"./LoadingCircle-IoM_zEu8.js";import{n as F,t as I}from"./ReviewBlock-DVo9m_s5.js";import{n as ee,t as L}from"./checkEmpty-DNWusH-0.js";import{n as R,t as te}from"./ReviewScoreSummary-DxZmxHiw.js";import{t as ne}from"./ReviewWritingBlock-DkLD6PhB.js";var z=t(e(),1),re=t(n(),1),ie=S((0,re.jsx)(`path`,{d:`M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z`}),`KeyboardArrowDown`),B=l.div`
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
`,ae=l(B)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,oe=l(B)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,se=l.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`,ce=({selected:e=!1,chipIndex:t=``,chipText:n=``,...r})=>{let i=()=>s(se,{children:[o(O,{type:`NormalBold`,children:t}),o(O,{type:`Normal`,children:n})]});return o(e?oe:ae,{...r,children:o(i,{})})},V=l(A.div)`
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
`,H=l(u)`
    height: 100%;
`,U=l(ie)`
    transform: ${e=>e.isfolded===`true`?`rotate(0deg)`:`rotate(180deg)`};
    transition: transform 0.2s ease-in-out;
`,W=l(O)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,G=({courseDetail:e,selectedProfessorId:t,setSelectedProfessorId:n})=>{let{t:r}=E(),i=a(),l=M(`mobile`),d=(0,z.useRef)(null),[f,m]=(0,z.useState)(!0);return(0,z.useEffect)(()=>{d.current&&(d.current.scrollLeft=d.current.scrollWidth)},[e]),(0,z.useEffect)(()=>{if(l){m(!0);return}let t=e?.history?.some(e=>e.classes.length>4)??!1;m(t)},[l,e]),s(c,{children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,style:{width:`100%`,cursor:`pointer`},onClick:()=>m(e=>!e),children:[o(O,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.courseHistory`)}),o(w,{onClick:()=>{},children:o(C,{size:20,color:i.colors.Text.default,onClick:()=>{},children:o(U,{isfolded:f.toString()})})})]}),s(V,{ref:d,initial:{height:f?0:`auto`},animate:{height:f?0:`auto`},transition:{duration:.2,ease:`easeInOut`},children:[o(`div`,{}),o(u,{direction:`row`,gap:20,style:{minWidth:`min-content`},children:[...e?.history||[]].reverse().map((e,i)=>s(H,{direction:`column`,gap:6,align:`center`,children:[s(O,{type:`Normal`,color:`Text.default`,children:[e.year,` `,p(e.semester)]}),e.classes.length===0?o(W,{color:`Text.disable`,type:`Normal`,children:r(`dictionary.notOffered`)}):o(u,{direction:`column`,gap:4,align:`stretch`,children:e.classes.map((e,r)=>o(ce,{selected:t==(e.professors[0]?.id??-1),chipIndex:e.classNo+` `+e.subtitle,chipText:F(e.professors),onClick:()=>{t===(e.professors[0]?.id??-1)?n(null):n(e.professors[0]?.id??null)}},r))})]},i))})]})]})},le=l(u)`
    width: 100%;
`,ue=l(u)`
    width: 300px;
    padding: 10px;
`,de=l(u)`
    flex: 1 0 0;
`,fe=l(O)`
    white-space: nowrap;
`,pe=({courseDetail:e})=>{let{t}=E();return s(c,{children:[o(le,{direction:`column`,gap:8,children:[[t(`common.class`),e?.department.name+`, `+e?.type],[t(`common.description`),e?.summary]].map(([e,t],n)=>s(u,{direction:`row`,gap:6,children:[o(fe,{type:`NormalBold`,color:`Text.default`,children:e}),o(O,{type:`Normal`,color:`Text.default`,children:t})]},n))}),o(ue,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e?.classDuration,t(`common.numClasses`)],[e?.expDuration,t(`common.numLabs`)],e?.creditAU?[e?.creditAU,`AU`]:[e?.credit,t(`common.credit`)]].map(([e,t],n)=>s(de,{direction:`column`,gap:0,align:`center`,children:[o(O,{type:`Bigger`,color:`Text.default`,children:e}),o(O,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},K=l.div`
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
`,me=l(K)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,he=l(K)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,ge=l.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,_e=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>o(ge,{children:t});return o(e?he:me,{...n,children:o(r,{})})},ve=20,ye=[`all`,`english`],be=({selectedCourseId:e,selectedProfessorId:t,writableReviewProps:n})=>{let{t:r}=E(),[i,a]=(0,z.useState)(`all`),[l,f]=(0,z.useState)(!1),{query:p,setParams:m,data:h}=y(`GET`,`/reviews`,{infinites:[`reviews`],limit:ve,enabled:l}),{ref:g,inView:b}=v();return(0,z.useEffect)(()=>{m({mode:_.DEFAULT,courseId:e||void 0,professorId:t||void 0})},[]),(0,z.useEffect)(()=>{m(n=>{let r=n??{};return t===null&&delete r.professorId,{...r,...e===null?{}:{courseId:e},...t===null?{}:{professorId:t}}}),f(e!==null)},[t,e]),(0,z.useEffect)(()=>{b&&p.hasNextPage&&!p.isFetchingNextPage&&p.fetchNextPage()},[b]),s(c,{children:[o(O,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.review`)}),s(u,{direction:`column`,gap:6,children:[o(O,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.reviewLanguage`)}),o(u,{direction:`row`,gap:6,children:ye.map(e=>o(_e,{selected:i==e,chipText:r(`dictionary.reviewLanguageOptions.${e}`),onClick:()=>a(e)},e))})]}),h===null&&p.isLoading?o(P,{}):s(c,{children:[o(u,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:o(te,{averageGrade:h?.averageGrade,averageLoad:h?.averageLoad,averageSpeech:h?.averageSpeech,reviewCount:h?.reviews.length,labels:{grade:r(`common.grade`),load:r(`common.load`),speech:r(`common.speech`)}})}),n.map((e,t)=>d(ne,{...e,key:t})),h?.reviews.map(e=>i===`english`&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(e.content)?null:o(I,{review:e,linkToDictionary:!1},e.id)),p.hasNextPage&&o(P,{ref:g})]})]})},xe=l(u)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,q=l(u)`
    width: 100%;
`,Se=l(u)`
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
`,Y=({selectedCourseId:e,isMobileModal:t=!1,onMobileModalClose:n})=>{let i=a(),[l,d]=r(),{query:f}=g(`GET`,`/courses/${e}`,{enabled:e!==null}),[p,m]=(0,z.useState)(null),[h,_]=(0,z.useState)([]);return(0,z.useEffect)(()=>{if(f.data){let e=[];f.data.history.forEach(t=>{if(t.myLectureId!==null){let n=t.classes.find(e=>e.lectureId===t.myLectureId)?.professors||[];e.push({name:f.data.name,lectureId:t.myLectureId,professors:n,year:t.year,semester:t.semester})}}),_(e)}},[f.data]),(0,z.useEffect)(()=>{m(null);let e=l.get(`professorId`);if(e){let t=parseInt(e,10);isNaN(t)?m(null):(m(t),d({}))}},[e]),o(xe,{direction:`column`,gap:12,align:`center`,justify:e?`start`:`center`,children:e?f.isLoading?o(P,{}):s(c,{children:[s(Se,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[s(u,{direction:`row`,align:`center`,gap:8,justify:t?`space-between`:`center`,style:{width:`100%`},children:[t&&o(`div`,{style:{width:20}}),o(O,{type:`Bigger`,color:`Text.default`,children:f.data?.name}),t&&o(C,{size:20,onClick:n,color:i.colors.Text.default,children:o(D,{})})]}),o(O,{type:`Big`,color:`Text.default`,children:f.data?.code})]}),o(q,{direction:`column`,gap:10,align:`center`,children:o(pe,{courseDetail:f.data})}),o(J,{}),o(q,{direction:`column`,gap:0,children:o(G,{courseDetail:f.data,selectedProfessorId:p,setSelectedProfessorId:m})}),o(J,{}),o(q,{direction:`column`,gap:10,flex:`1 1 auto`,children:o(be,{selectedCourseId:e,selectedProfessorId:p,writableReviewProps:h})})]}):o(x,{})})},Ce=l.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e,selected:t})=>t?e.colors.Background.Block.darker:e.colors.Background.Block.dark};
    }
    background-color: ${({selected:e,theme:t})=>e?t.colors.Background.Block.darker:t.colors.Background.Block.default};
`,we=l.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,X=l(O)`
    white-space: nowrap;
`,Te=(0,z.memo)(({course:e,isSelected:t,selectCourseId:n})=>{let{t:r}=E(),i=a(),c=(0,z.useCallback)(()=>{t?n(null):(n(e.id),f(`Select Course`,{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[t,e.id,n]);return s(Ce,{onClick:c,selected:t,children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[s(u,{direction:`row`,gap:6,align:`center`,children:[o(C,{size:12,color:e.open?i.colors.Highlight.default:i.colors.Text.disable,children:o(R,{})}),o(O,{type:`NormalBold`,color:`Text.default`,children:e.name}),o(O,{type:`Normal`,color:`Text.placeholder`,children:e.code})]}),e.completed&&o(O,{type:`Normal`,color:`Text.lighter`,children:r(`common.completedCourse`)})]}),o(we,{}),s(u,{direction:`column`,gap:4,children:[s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.class`)}),s(O,{type:`Normal`,color:`Text.default`,children:[e.department.name,`, `,e.type]})]}),s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.professor`)}),o(O,{type:`Normal`,color:`Text.default`,children:e.professors.map(e=>e.name).join(`, `)})]}),s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.description`)}),o(O,{type:`Normal`,color:`Text.default`,children:e.summary})]})]})]})}),Ee=l(u)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,De=l.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Oe=l(O)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,ke=l(O)`
    display: flex;
    flex-direction: ${({direction:e})=>e};
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
    white-space: nowrap;
`,Z=l(u)`
    white-space: nowrap;
`,Ae=l(u)`
    flex-grow: 1;
    height: 36px;
`,je=l(u)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Q=20;function Me({selectedCourseId:e,setSelectedCourseId:t}){let{t:n}=E(),i=a(),l=M(`mobile`),d=(0,z.useRef)(null),[p]=r(),[g,_]=(0,z.useState)(0),[x,S]=(0,z.useState)(!1),[w,D]=(0,z.useState)({courses:[],totalCount:0}),{query:k,setParams:A,data:j}=y(`GET`,`/courses`,{infinites:[`courses`],limit:Q,enabled:x}),{inView:N,ref:F}=v({threshold:0});(0,z.useEffect)(()=>{N&&k.hasNextPage&&!k.isFetchingNextPage&&k.fetchNextPage()},[N]),(0,z.useEffect)(()=>{let e=p.get(`term`)?parseInt(p.get(`term`)):void 0,t={keyword:p.get(`keyword`)||``,type:p.getAll(`type`),department:p.getAll(`department`).map(e=>parseInt(e)),level:p.getAll(`level`).map(e=>parseInt(e))};e!==void 0&&(t.term=e),!L(t)&&I(t)},[]),(0,z.useEffect)(()=>{j!==void 0&&D(j)},[j]),(0,z.useEffect)(()=>{(g!=0||x!=0)&&(D({courses:[],totalCount:0}),A(e=>({...e,order:m[g]??h.CODE,offset:0})),S(!0),d.current?.scrollTo(0,0))},[g]);let I=e=>{if(L(e)){alert(n(`common.search.empty`));return}let t={...e,order:m[g]??h.CODE,offset:0,limit:Q};A(t),S(!0),d.current?.scrollTo(0,0),f(`Search Courses`,{keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``,term:e.term??``})};return s(Ee,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,children:[o(De,{children:o(ee,{options:[`type`,`department`,`level`,`term`],onSearch:I})}),w.courses.length===0?k.isLoading?o(P,{}):o(Oe,{type:`Bigger`,color:`Text.placeholder`,children:n(`dictionary.noResults`)}):s(c,{children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[s(ke,{color:`Text.default`,direction:l?`column`:`row`,children:[o(u,{direction:`row`,gap:4,align:`center`,children:o(T,{i18nKey:`dictionary.courseCountInfo1`,count:j?.totalCount,components:{bold:o(O,{type:`NormalBold`,children:void 0}),space:o(c,{children:`\xA0`})}})}),o(u,{direction:`row`,gap:1,align:`center`,children:o(T,{i18nKey:`dictionary.courseCountInfo2`,count:j?.totalCount,components:{icon:o(C,{size:12,color:i.colors.Highlight.default,children:o(R,{})}),space:o(c,{children:`\xA0`})}})})]}),s(Z,{direction:`row`,gap:8,align:`center`,children:[o(O,{type:`NormalBold`,color:`Text.default`,children:n(`dictionary.sort`)}),o(Ae,{direction:`row`,gap:0,children:o(b,{options:[n(`dictionary.sortOptions.code`),n(`dictionary.sortOptions.popularity`),n(`dictionary.sortOptions.studentCount`)],setSelectedOption:_,selectedOption:g})})]})]}),s(je,{direction:`column`,gap:12,ref:d,children:[w.courses.map((n,r)=>o(Te,{course:n,isSelected:e==n.id,selectCourseId:t},r)),k.hasNextPage&&o(P,{ref:F})]})]})]})}var Ne=l(u)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${j.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${j.mobile} {
        padding: 0 8px 12px 8px;
    }
`,$=l(N)`
    height: 100%;
    overflow: hidden;
    padding: 16px;

    ${j.mobile} {
        padding: 16px 12px;
    }
`,Pe=l($)`
    max-width: 508px;
    flex: 1 1 0;

    ${j.tablet} {
        max-width: none;
    }
`,Fe=l($)`
    flex: 1 1 0;
    max-width: 976px;

    ${j.tablet} {
        display: none;
    }
`,Ie=i(function(){let e=M(`tablet`),[t,n]=r(),[i,a]=(0,z.useState)(!1),[c,l]=(0,z.useState)(null);(0,z.useEffect)(()=>{f(`Page View`,{page:`Dictionary`})},[]),(0,z.useEffect)(()=>{let e=t.get(`courseId`);if(e){let t=parseInt(e,10);isNaN(t)?l(null):(l(t),n(e=>(e.delete(`courseId`),e)))}},[]),(0,z.useEffect)(()=>{e?c!==null&&a(!0):a(!1)},[e]),(0,z.useEffect)(()=>{e&&c!==null&&a(!0)},[c]);let u=(0,z.useCallback)(()=>{a(!1),l(null)},[]);return s(Ne,{direction:`row`,align:`stretch`,justify:`center`,gap:12,children:[o(Pe,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:o(Me,{selectedCourseId:c,setSelectedCourseId:l})}),o(Fe,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:o(Y,{selectedCourseId:c})}),e&&o(k,{isOpen:i,onClose:u,header:!1,fullScreen:!0,children:o(Y,{selectedCourseId:c,isMobileModal:!0,onMobileModalClose:u})})]})});export{Ie as default};
//# sourceMappingURL=dictionary-DuoAzH3O.js.map