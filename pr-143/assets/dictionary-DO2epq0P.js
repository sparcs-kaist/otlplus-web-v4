(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ea4f97b985d021ab0b0948980859f9f51b2b4c96`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b94af4c0-9ef2-4a68-83bf-ceaa7992e8f8`,e._sentryDebugIdIdentifier=`sentry-dbid-b94af4c0-9ef2-4a68-83bf-ceaa7992e8f8`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-vrnmIdFU.js";import{A as r,k as i}from"./chunk-QFMPRPBF-BDALigTb.js";import{l as a,n as o,r as s,t as c}from"./emotion-react-jsx-runtime.browser.esm-Znxlh7Bw.js";import{n as l,s as u,t as d}from"./FlexWrapper-MyOy10jM.js";import{l as f,s as p,t as m}from"./useAPI-0nx3ta6r.js";import{i as h,n as g,r as _,t as v}from"./Credits-CGE-WIKn.js";import{r as y,t as b}from"./Icon-DMijsa2v.js";import{t as x}from"./IconButton-C_EaZl0X.js";import{t as S}from"./Trans-A5qOyczI.js";import{t as C}from"./useTranslation-T8ENXDxS.js";import{t as w}from"./Close-Bia2Frud.js";import{t as T}from"./Typography-DUwzt84o.js";import{t as E}from"./Modal-CjlipFTJ.js";import{t as D}from"./proxy-qwQh1kPG.js";import{t as O}from"./media-DjoZw_Zv.js";import{i as k}from"./mixpanel-C1RuP1sg.js";import{t as A}from"./useIsDevice-Ci5EM-cY.js";import{t as j}from"./Widget-D4FMqyXw.js";import{t as M}from"./LoadingCircle-JiBFWxt6.js";import{n as N,t as P}from"./ReviewBlock-Bp1G2MPr.js";import{n as ee,t as F}from"./checkEmpty-DkQg1G7A.js";import{t as te}from"./ReviewWritingBlock-DO3jPI92.js";var I=t(e(),1),L=t(n(),1),R=y((0,L.jsx)(`path`,{d:`M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2`}),`Circle`),ne=y((0,L.jsx)(`path`,{d:`M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z`}),`KeyboardArrowDown`),z=l.div`
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
`,re=l(z)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ie=l(z)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,ae=l.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`,oe=({selected:e=!1,chipIndex:t=``,chipText:n=``,...r})=>{let i=()=>s(ae,{children:[o(T,{type:`NormalBold`,children:t}),o(T,{type:`Normal`,children:n})]});return o(e?ie:re,{...r,children:o(i,{})})},se=l(D.div)`
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
`,ce=l(d)`
    height: 100%;
`,B=l(ne)`
    transform: ${e=>e.isfolded===`true`?`rotate(0deg)`:`rotate(180deg)`};
    transition: transform 0.2s ease-in-out;
`,V=l(T)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,H=({courseDetail:e,selectedProfessorId:t,setSelectedProfessorId:n})=>{let{t:r}=C(),i=a(),l=A(`mobile`),u=(0,I.useRef)(null),[f,m]=(0,I.useState)(!0);return(0,I.useEffect)(()=>{u.current&&(u.current.scrollLeft=u.current.scrollWidth)},[e]),(0,I.useEffect)(()=>{if(l){m(!0);return}m(e?.history?.some(e=>e.classes.length>4)??!1)},[l,e]),s(c,{children:[s(d,{direction:`row`,gap:0,justify:`space-between`,align:`center`,style:{width:`100%`,cursor:`pointer`},onClick:()=>m(e=>!e),children:[o(T,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.courseHistory`)}),o(x,{onClick:()=>{},children:o(b,{size:20,color:i.colors.Text.default,onClick:()=>{},children:o(B,{isfolded:f.toString()})})})]}),s(se,{ref:u,initial:{height:f?0:`auto`},animate:{height:f?0:`auto`},transition:{duration:.2,ease:`easeInOut`},children:[o(`div`,{}),o(d,{direction:`row`,gap:20,style:{minWidth:`min-content`},children:[...e?.history||[]].reverse().map((e,i)=>s(ce,{direction:`column`,gap:6,align:`center`,children:[s(T,{type:`Normal`,color:`Text.default`,children:[e.year,` `,p(e.semester)]}),e.classes.length===0?o(V,{color:`Text.disable`,type:`Normal`,children:r(`dictionary.notOffered`)}):o(d,{direction:`column`,gap:4,align:`stretch`,children:e.classes.map((e,r)=>o(oe,{selected:t==(e.professors[0]?.id??-1),chipIndex:e.classNo+` `+e.subtitle,chipText:N(e.professors),onClick:()=>{t===(e.professors[0]?.id??-1)?n(null):n(e.professors[0]?.id??null)}},r))})]},i))})]})]})},U=l(d)`
    width: 100%;
`,W=l(d)`
    width: 300px;
    padding: 10px;
`,G=l(d)`
    flex: 1 0 0;
`,le=l(T)`
    white-space: nowrap;
`,ue=({courseDetail:e})=>{let{t}=C();return s(c,{children:[o(U,{direction:`column`,gap:8,children:[[t(`common.class`),e?.department.name+`, `+e?.type],[t(`common.description`),e?.summary]].map(([e,t],n)=>s(d,{direction:`row`,gap:6,children:[o(le,{type:`NormalBold`,color:`Text.default`,children:e}),o(T,{type:`Normal`,color:`Text.default`,children:t})]},n))}),o(W,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e?.classDuration,t(`common.numClasses`)],[e?.expDuration,t(`common.numLabs`)],e?.creditAU?[e?.creditAU,`AU`]:[e?.credit,t(`common.credit`)]].map(([e,t],n)=>s(G,{direction:`column`,gap:0,align:`center`,children:[o(T,{type:`Bigger`,color:`Text.default`,children:e}),o(T,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},K=l.div`
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
`,me=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>o(pe,{children:t});return o(e?fe:de,{...n,children:o(r,{})})},he=l(d)`
    width: 300px;
    padding: 10px;
`,ge=l(d)`
    flex: 1 0 0;
`,_e=20,ve=({selectedCourseId:e,selectedProfessorId:t,writableReviewProps:n})=>{let{t:r}=C(),[i,a]=(0,I.useState)(`all`),[l,p]=(0,I.useState)(!1),{query:m,setParams:_,data:v}=g(`GET`,`/reviews`,{infinites:[`reviews`],limit:_e,enabled:l}),{ref:y,inView:b}=h();return(0,I.useEffect)(()=>{_({mode:`default`,courseId:e||void 0,professorId:t||void 0})},[]),(0,I.useEffect)(()=>{_(n=>{let r=n??{};return t===null&&delete r.professorId,{...r,...e===null?{}:{courseId:e},...t===null?{}:{professorId:t}}}),p(e!==null)},[t,e]),(0,I.useEffect)(()=>{b&&m.hasNextPage&&!m.isFetchingNextPage&&m.fetchNextPage()},[b]),s(c,{children:[o(T,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.review`)}),s(d,{direction:`column`,gap:6,children:[o(T,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.reviewLanguage`)}),o(d,{direction:`row`,gap:6,children:[`all`,`english`].map(e=>o(me,{selected:i==e,chipText:r(`dictionary.reviewLanguageOptions.${e}`),onClick:()=>a(e)},e))})]}),v===null&&m.isLoading?o(M,{}):s(c,{children:[o(d,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:o(he,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[[f(v?.averageGrade,v?.reviews.length),r(`common.grade`)],[f(v?.averageLoad,v?.reviews.length),r(`common.load`)],[f(v?.averageSpeech,v?.reviews.length),r(`common.speech`)]].map(([e,t],n)=>s(ge,{direction:`column`,gap:0,align:`center`,children:[o(T,{type:`Bigger`,color:`Text.default`,children:e}),o(T,{type:`Smaller`,color:`Text.default`,children:t})]},n))})}),n.map((e,t)=>u(te,{...e,key:t})),v?.reviews.map(e=>i===`english`&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(e.content)?null:o(P,{review:e,linkToDictionary:!1},e.id)),m.hasNextPage&&o(M,{ref:y})]})]})},ye=l(d)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,q=l(d)`
    width: 100%;
`,be=l(d)`
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
`,Y=({selectedCourseId:e,isMobileModal:t=!1,onMobileModalClose:n})=>{let r=a(),[l,u]=i(),{query:f}=m(`GET`,`/courses/${e}`,{enabled:e!==null}),[p,h]=(0,I.useState)(null),[g,_]=(0,I.useState)([]);return(0,I.useEffect)(()=>{if(f.data){let e=[];f.data.history.forEach(t=>{if(t.myLectureId!==null){let n=t.classes.find(e=>e.lectureId===t.myLectureId)?.professors||[];e.push({name:f.data.name,lectureId:t.myLectureId,professors:n,year:t.year,semester:t.semester})}}),_(e)}},[f.data]),(0,I.useEffect)(()=>{h(null);let e=l.get(`professorId`);if(e){let t=parseInt(e,10);isNaN(t)?h(null):(h(t),u({}))}},[e]),o(ye,{direction:`column`,gap:12,align:`center`,justify:e?`start`:`center`,children:e?f.isLoading?o(M,{}):s(c,{children:[s(be,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[s(d,{direction:`row`,align:`center`,gap:8,justify:t?`space-between`:`center`,style:{width:`100%`},children:[t&&o(`div`,{style:{width:20}}),o(T,{type:`Bigger`,color:`Text.default`,children:f.data?.name}),t&&o(b,{size:20,onClick:n,color:r.colors.Text.default,children:o(w,{})})]}),o(T,{type:`Big`,color:`Text.default`,children:f.data?.code})]}),o(q,{direction:`column`,gap:10,align:`center`,children:o(ue,{courseDetail:f.data})}),o(J,{}),o(q,{direction:`column`,gap:0,children:o(H,{courseDetail:f.data,selectedProfessorId:p,setSelectedProfessorId:h})}),o(J,{}),o(q,{direction:`column`,gap:10,flex:`1 1 auto`,children:o(ve,{selectedCourseId:e,selectedProfessorId:p,writableReviewProps:g})})]}):o(v,{})})},xe=l.div`
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
`,X=l(T)`
    white-space: nowrap;
`,Ce=(0,I.memo)(({course:e,isSelected:t,selectCourseId:n})=>{let{t:r}=C(),i=a();return s(xe,{onClick:(0,I.useCallback)(()=>{t?n(null):(n(e.id),k(`Select Course`,{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[t,e.id,n]),selected:t,children:[s(d,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[s(d,{direction:`row`,gap:6,align:`center`,children:[o(b,{size:12,color:e.open?i.colors.Highlight.default:i.colors.Text.disable,children:o(R,{})}),o(T,{type:`NormalBold`,color:`Text.default`,children:e.name}),o(T,{type:`Normal`,color:`Text.placeholder`,children:e.code})]}),e.completed&&o(T,{type:`Normal`,color:`Text.lighter`,children:r(`common.completedCourse`)})]}),o(Se,{}),s(d,{direction:`column`,gap:4,children:[s(d,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.class`)}),s(T,{type:`Normal`,color:`Text.default`,children:[e.department.name,`, `,e.type]})]}),s(d,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.professor`)}),o(T,{type:`Normal`,color:`Text.default`,children:e.professors.map(e=>e.name).join(`, `)})]}),s(d,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.description`)}),o(T,{type:`Normal`,color:`Text.default`,children:e.summary})]})]})]})}),we=l(d)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Te=l.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Ee=l(T)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,De=l(T)`
    display: flex;
    flex-direction: ${({direction:e})=>e};
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
    white-space: nowrap;
`,Oe=l(d)`
    white-space: nowrap;
`,ke=l(d)`
    flex-grow: 1;
    height: 36px;
`,Z=l(d)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Q=20;function Ae({selectedCourseId:e,setSelectedCourseId:t}){let{t:n}=C(),r=a(),l=A(`mobile`),u=(0,I.useRef)(null),[f]=i(),[p,m]=(0,I.useState)(0),[v,y]=(0,I.useState)(!1),[x,w]=(0,I.useState)({courses:[],totalCount:0}),{query:E,setParams:D,data:O}=g(`GET`,`/courses`,{infinites:[`courses`],limit:Q,enabled:v}),{inView:j,ref:N}=h({threshold:0});(0,I.useEffect)(()=>{j&&E.hasNextPage&&!E.isFetchingNextPage&&E.fetchNextPage()},[j]),(0,I.useEffect)(()=>{let e=f.get(`term`)?parseInt(f.get(`term`)):void 0,t={keyword:f.get(`keyword`)||``,type:f.getAll(`type`),department:f.getAll(`department`).map(e=>parseInt(e)),level:f.getAll(`level`).map(e=>parseInt(e))};e!==void 0&&(t.term=e),!F(t)&&P(t)},[]),(0,I.useEffect)(()=>{O!==void 0&&w(O)},[O]),(0,I.useEffect)(()=>{p==0&&v==0||(w({courses:[],totalCount:0}),D(e=>({...e,order:[`code`,`popular`,`studentCount`][p]??`code`,offset:0})),y(!0),u.current?.scrollTo(0,0))},[p]);let P=e=>{if(F(e)){alert(n(`common.search.empty`));return}D({...e,order:[`code`,`popular`,`studentCount`][p]??`code`,offset:0,limit:Q}),y(!0),u.current?.scrollTo(0,0),k(`Search Courses`,{keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``,term:e.term??``})};return s(we,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,children:[o(Te,{children:o(ee,{options:[`type`,`department`,`level`,`term`],onSearch:P})}),x.courses.length===0?E.isLoading?o(M,{}):o(Ee,{type:`Bigger`,color:`Text.placeholder`,children:n(`dictionary.noResults`)}):s(c,{children:[s(d,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[s(De,{color:`Text.default`,direction:l?`column`:`row`,children:[o(d,{direction:`row`,gap:4,align:`center`,children:o(S,{i18nKey:`dictionary.courseCountInfo1`,count:O?.totalCount,components:{bold:o(T,{type:`NormalBold`,children:void 0}),space:o(c,{children:`\xA0`})}})}),o(d,{direction:`row`,gap:1,align:`center`,children:o(S,{i18nKey:`dictionary.courseCountInfo2`,count:O?.totalCount,components:{icon:o(b,{size:12,color:r.colors.Highlight.default,children:o(R,{})}),space:o(c,{children:`\xA0`})}})})]}),s(Oe,{direction:`row`,gap:8,align:`center`,children:[o(T,{type:`NormalBold`,color:`Text.default`,children:n(`dictionary.sort`)}),o(ke,{direction:`row`,gap:0,children:o(_,{options:[n(`dictionary.sortOptions.code`),n(`dictionary.sortOptions.popularity`),n(`dictionary.sortOptions.studentCount`)],setSelectedOption:m,selectedOption:p})})]})]}),s(Z,{direction:`column`,gap:12,ref:u,children:[x.courses.map((n,r)=>o(Ce,{course:n,isSelected:e==n.id,selectCourseId:t},r)),E.hasNextPage&&o(M,{ref:N})]})]})]})}var je=l(d)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${O.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${O.mobile} {
        padding: 0 8px 12px 8px;
    }
`,$=l(j)`
    height: 100%;
    overflow: hidden;
    padding: 16px;

    ${O.mobile} {
        padding: 16px 12px;
    }
`,Me=l($)`
    max-width: 508px;
    flex: 1 1 0;

    ${O.tablet} {
        max-width: none;
    }
`,Ne=l($)`
    flex: 1 1 0;
    max-width: 976px;

    ${O.tablet} {
        display: none;
    }
`,Pe=r(function(){let e=A(`tablet`),[t,n]=i(),[r,a]=(0,I.useState)(!1),[c,l]=(0,I.useState)(null);(0,I.useEffect)(()=>{k(`Page View`,{page:`Dictionary`})},[]),(0,I.useEffect)(()=>{let e=t.get(`courseId`);if(e){let t=parseInt(e,10);isNaN(t)?l(null):(l(t),n(e=>(e.delete(`courseId`),e)))}},[]),(0,I.useEffect)(()=>{e?c!==null&&a(!0):a(!1)},[e]),(0,I.useEffect)(()=>{e&&c!==null&&a(!0)},[c]);let u=(0,I.useCallback)(()=>{a(!1),l(null)},[]);return s(je,{direction:`row`,align:`stretch`,justify:`center`,gap:12,children:[o(Me,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:o(Ae,{selectedCourseId:c,setSelectedCourseId:l})}),o(Ne,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:o(Y,{selectedCourseId:c})}),e&&o(E,{isOpen:r,onClose:u,header:!1,fullScreen:!0,children:o(Y,{selectedCourseId:c,isMobileModal:!0,onMobileModalClose:u})})]})});export{Pe as default};
//# sourceMappingURL=dictionary-DO2epq0P.js.map