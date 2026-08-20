(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`e8f1d621b37faed0b2b91543723a2b797aa16389`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b00ae3b5-a97c-4b08-a779-54307821c0da`,e._sentryDebugIdIdentifier=`sentry-dbid-b00ae3b5-a97c-4b08-a779-54307821c0da`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-BhcktveR.js";import{O as r,k as i}from"./chunk-62JRHF6Z-IJLuPJzk.js";import{l as a,n as o,r as s,t as c}from"./emotion-react-jsx-runtime.browser.esm-CMYLmp-p.js";import{n as l,t as u}from"./FlexWrapper-BdX02euX.js";import{r as d}from"./emotion-react.browser.esm-DLrhn7Su.js";import{_ as f,b as p}from"./axios-Pn7ex3V5.js";import{d as m,f as h,l as g,t as _,u as v}from"./useAPI-o0n_pJxs.js";import{i as y,n as b,r as x,t as S}from"./Credits-CMFUt-Qm.js";import{r as C,t as w}from"./Icon-C-gAxBK5.js";import{t as T}from"./IconButton-DtoaplLH.js";import{t as E}from"./Trans-CubYZPMr.js";import{t as D}from"./useTranslation-Dlxfq7Jt.js";import{t as O}from"./Close-DCkarqeM.js";import{t as k}from"./Typography-BEFiroNf.js";import{t as A}from"./Modal-xlMCYcyd.js";import{t as j}from"./proxy-C9PC_My8.js";import{t as M}from"./media-SyHqO5iB.js";import{t as N}from"./useIsDevice-CBVxey1j.js";import{t as P}from"./Widget-BOsdqHY5.js";import{t as F}from"./LoadingCircle-Cx1nRY5w.js";import{n as I,t as ee}from"./ReviewBlock-CJv4VLdZ.js";import{n as te,t as L}from"./checkEmpty-DhDaZiRL.js";import{t as R}from"./Circle-B1ZMKDA3.js";import{t as ne}from"./ReviewWritingBlock-CUItZqo6.js";var z=t(e(),1),re=t(n(),1),ie=C((0,re.jsx)(`path`,{d:`M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z`}),`KeyboardArrowDown`),B=l.div`
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
`,ce=({selected:e=!1,chipIndex:t=``,chipText:n=``,...r})=>{let i=()=>s(se,{children:[o(k,{type:`NormalBold`,children:t}),o(k,{type:`Normal`,children:n})]});return o(e?oe:ae,{...r,children:o(i,{})})},V=l(j.div)`
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
`,W=l(k)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,G=({courseDetail:e,selectedProfessorId:t,setSelectedProfessorId:n})=>{let{t:r}=D(),i=a(),l=N(`mobile`),d=(0,z.useRef)(null),[f,m]=(0,z.useState)(!0);return(0,z.useEffect)(()=>{d.current&&(d.current.scrollLeft=d.current.scrollWidth)},[e]),(0,z.useEffect)(()=>{if(l){m(!0);return}let t=e?.history?.some(e=>e.classes.length>4)??!1;m(t)},[l,e]),s(c,{children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,style:{width:`100%`,cursor:`pointer`},onClick:()=>m(e=>!e),children:[o(k,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.courseHistory`)}),o(T,{onClick:()=>{},children:o(w,{size:20,color:i.colors.Text.default,onClick:()=>{},children:o(U,{isfolded:f.toString()})})})]}),s(V,{ref:d,initial:{height:f?0:`auto`},animate:{height:f?0:`auto`},transition:{duration:.2,ease:`easeInOut`},children:[o(`div`,{}),o(u,{direction:`row`,gap:20,style:{minWidth:`min-content`},children:[...e?.history||[]].reverse().map((e,i)=>s(H,{direction:`column`,gap:6,align:`center`,children:[s(k,{type:`Normal`,color:`Text.default`,children:[e.year,` `,p(e.semester)]}),e.classes.length===0?o(W,{color:`Text.disable`,type:`Normal`,children:r(`dictionary.notOffered`)}):o(u,{direction:`column`,gap:4,align:`stretch`,children:e.classes.map((e,r)=>o(ce,{selected:t==(e.professors[0]?.id??-1),chipIndex:e.classNo+` `+e.subtitle,chipText:I(e.professors),onClick:()=>{t===(e.professors[0]?.id??-1)?n(null):n(e.professors[0]?.id??null)}},r))})]},i))})]})]})},le=l(u)`
    width: 100%;
`,ue=l(u)`
    width: 300px;
    padding: 10px;
`,de=l(u)`
    flex: 1 0 0;
`,fe=l(k)`
    white-space: nowrap;
`,pe=({courseDetail:e})=>{let{t}=D();return s(c,{children:[o(le,{direction:`column`,gap:8,children:[[t(`common.class`),e?.department.name+`, `+e?.type],[t(`common.description`),e?.summary]].map(([e,t],n)=>s(u,{direction:`row`,gap:6,children:[o(fe,{type:`NormalBold`,color:`Text.default`,children:e}),o(k,{type:`Normal`,color:`Text.default`,children:t})]},n))}),o(ue,{direction:`row`,gap:0,justify:`space-around`,align:`center`,children:[[e?.classDuration,t(`common.numClasses`)],[e?.expDuration,t(`common.numLabs`)],e?.creditAU?[e?.creditAU,`AU`]:[e?.credit,t(`common.credit`)]].map(([e,t],n)=>s(de,{direction:`column`,gap:0,align:`center`,children:[o(k,{type:`Bigger`,color:`Text.default`,children:e}),o(k,{type:`Smaller`,color:`Text.default`,children:t})]},n))})]})},K=l.div`
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
`,_e=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>o(ge,{children:t});return o(e?he:me,{...n,children:o(r,{})})},ve=l(u)`
    width: 300px;
    padding: 10px;
`,ye=l(u)`
    flex: 1 0 0;
`,be=20,xe=[`all`,`english`],Se=({selectedCourseId:e,selectedProfessorId:t,writableReviewProps:n})=>{let{t:r}=D(),[i,a]=(0,z.useState)(`all`),[l,f]=(0,z.useState)(!1),{query:p,setParams:m,data:h}=b(`GET`,`/reviews`,{infinites:[`reviews`],limit:be,enabled:l}),{ref:_,inView:x}=y();return(0,z.useEffect)(()=>{m({mode:v.DEFAULT,courseId:e||void 0,professorId:t||void 0})},[]),(0,z.useEffect)(()=>{m(n=>{let r=n??{};return t===null&&delete r.professorId,{...r,...e===null?{}:{courseId:e},...t===null?{}:{professorId:t}}}),f(e!==null)},[t,e]),(0,z.useEffect)(()=>{x&&p.hasNextPage&&!p.isFetchingNextPage&&p.fetchNextPage()},[x]),s(c,{children:[o(k,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.review`)}),s(u,{direction:`column`,gap:6,children:[o(k,{type:`NormalBold`,color:`Text.default`,children:r(`dictionary.reviewLanguage`)}),o(u,{direction:`row`,gap:6,children:xe.map(e=>o(_e,{selected:i==e,chipText:r(`dictionary.reviewLanguageOptions.${e}`),onClick:()=>a(e)},e))})]}),h===null&&p.isLoading?o(F,{}):s(c,{children:[o(u,{direction:`row`,gap:0,justify:`center`,align:`center`,style:{width:`100%`},children:o(ve,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[[g(h?.averageGrade,h?.reviews.length),r(`common.grade`)],[g(h?.averageLoad,h?.reviews.length),r(`common.load`)],[g(h?.averageSpeech,h?.reviews.length),r(`common.speech`)]].map(([e,t],n)=>s(ye,{direction:`column`,gap:0,align:`center`,children:[o(k,{type:`Bigger`,color:`Text.default`,children:e}),o(k,{type:`Smaller`,color:`Text.default`,children:t})]},n))})}),n.map((e,t)=>d(ne,{...e,key:t})),h?.reviews.map(e=>i===`english`&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(e.content)?null:o(ee,{review:e,linkToDictionary:!1},e.id)),p.hasNextPage&&o(F,{ref:_})]})]})},Ce=l(u)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,q=l(u)`
    width: 100%;
`,we=l(u)`
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
`,Y=({selectedCourseId:e,isMobileModal:t=!1,onMobileModalClose:n})=>{let i=a(),[l,d]=r(),{query:f}=_(`GET`,`/courses/${e}`,{enabled:e!==null}),[p,m]=(0,z.useState)(null),[h,g]=(0,z.useState)([]);return(0,z.useEffect)(()=>{if(f.data){let e=[];f.data.history.forEach(t=>{if(t.myLectureId!==null){let n=t.classes.find(e=>e.lectureId===t.myLectureId)?.professors||[];e.push({name:f.data.name,lectureId:t.myLectureId,professors:n,year:t.year,semester:t.semester})}}),g(e)}},[f.data]),(0,z.useEffect)(()=>{m(null);let e=l.get(`professorId`);if(e){let t=parseInt(e,10);isNaN(t)?m(null):(m(t),d({}))}},[e]),o(Ce,{direction:`column`,gap:12,align:`center`,justify:e?`start`:`center`,children:e?f.isLoading?o(F,{}):s(c,{children:[s(we,{direction:`column`,gap:2,align:`center`,justify:`center`,children:[s(u,{direction:`row`,align:`center`,gap:8,justify:t?`space-between`:`center`,style:{width:`100%`},children:[t&&o(`div`,{style:{width:20}}),o(k,{type:`Bigger`,color:`Text.default`,children:f.data?.name}),t&&o(w,{size:20,onClick:n,color:i.colors.Text.default,children:o(O,{})})]}),o(k,{type:`Big`,color:`Text.default`,children:f.data?.code})]}),o(q,{direction:`column`,gap:10,align:`center`,children:o(pe,{courseDetail:f.data})}),o(J,{}),o(q,{direction:`column`,gap:0,children:o(G,{courseDetail:f.data,selectedProfessorId:p,setSelectedProfessorId:m})}),o(J,{}),o(q,{direction:`column`,gap:10,flex:`1 1 auto`,children:o(Se,{selectedCourseId:e,selectedProfessorId:p,writableReviewProps:h})})]}):o(S,{})})},Te=l.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e,selected:t})=>t?e.colors.Background.Block.darker:e.colors.Background.Block.dark};
    }
    background-color: ${({selected:e,theme:t})=>e?t.colors.Background.Block.darker:t.colors.Background.Block.default};
`,Ee=l.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,X=l(k)`
    white-space: nowrap;
`,De=(0,z.memo)(({course:e,isSelected:t,selectCourseId:n})=>{let{t:r}=D(),i=a(),c=(0,z.useCallback)(()=>{t?n(null):(n(e.id),f(`Select Course`,{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[t,e.id,n]);return s(Te,{onClick:c,selected:t,children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[s(u,{direction:`row`,gap:6,align:`center`,children:[o(w,{size:12,color:e.open?i.colors.Highlight.default:i.colors.Text.disable,children:o(R,{})}),o(k,{type:`NormalBold`,color:`Text.default`,children:e.name}),o(k,{type:`Normal`,color:`Text.placeholder`,children:e.code})]}),e.completed&&o(k,{type:`Normal`,color:`Text.lighter`,children:r(`common.completedCourse`)})]}),o(Ee,{}),s(u,{direction:`column`,gap:4,children:[s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.class`)}),s(k,{type:`Normal`,color:`Text.default`,children:[e.department.name,`, `,e.type]})]}),s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.professor`)}),o(k,{type:`Normal`,color:`Text.default`,children:e.professors.map(e=>e.name).join(`, `)})]}),s(u,{direction:`row`,gap:6,children:[o(X,{type:`NormalBold`,color:`Text.default`,children:r(`common.description`)}),o(k,{type:`Normal`,color:`Text.default`,children:e.summary})]})]})]})}),Oe=l(u)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,ke=l.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Ae=l(k)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,je=l(k)`
    display: flex;
    flex-direction: ${({direction:e})=>e};
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
    white-space: nowrap;
`,Me=l(u)`
    white-space: nowrap;
`,Z=l(u)`
    flex-grow: 1;
    height: 36px;
`,Ne=l(u)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Q=20;function Pe({selectedCourseId:e,setSelectedCourseId:t}){let{t:n}=D(),i=a(),l=N(`mobile`),d=(0,z.useRef)(null),[p]=r(),[g,_]=(0,z.useState)(0),[v,S]=(0,z.useState)(!1),[C,T]=(0,z.useState)({courses:[],totalCount:0}),{query:O,setParams:A,data:j}=b(`GET`,`/courses`,{infinites:[`courses`],limit:Q,enabled:v}),{inView:M,ref:P}=y({threshold:0});(0,z.useEffect)(()=>{M&&O.hasNextPage&&!O.isFetchingNextPage&&O.fetchNextPage()},[M]),(0,z.useEffect)(()=>{let e=p.get(`term`)?parseInt(p.get(`term`)):void 0,t={keyword:p.get(`keyword`)||``,type:p.getAll(`type`),department:p.getAll(`department`).map(e=>parseInt(e)),level:p.getAll(`level`).map(e=>parseInt(e))};e!==void 0&&(t.term=e),!L(t)&&I(t)},[]),(0,z.useEffect)(()=>{j!==void 0&&T(j)},[j]),(0,z.useEffect)(()=>{(g!=0||v!=0)&&(T({courses:[],totalCount:0}),A(e=>({...e,order:m[g]??h.CODE,offset:0})),S(!0),d.current?.scrollTo(0,0))},[g]);let I=e=>{if(L(e)){alert(n(`common.search.empty`));return}let t={...e,order:m[g]??h.CODE,offset:0,limit:Q};A(t),S(!0),d.current?.scrollTo(0,0),f(`Search Courses`,{keyword:e.keyword??``,department:e.department??``,type:e.type??``,level:e.level??``,term:e.term??``})};return s(Oe,{direction:`column`,justify:`stretch`,align:`stretch`,gap:8,children:[o(ke,{children:o(te,{options:[`type`,`department`,`level`,`term`],onSearch:I})}),C.courses.length===0?O.isLoading?o(F,{}):o(Ae,{type:`Bigger`,color:`Text.placeholder`,children:n(`dictionary.noResults`)}):s(c,{children:[s(u,{direction:`row`,gap:0,justify:`space-between`,align:`center`,children:[s(je,{color:`Text.default`,direction:l?`column`:`row`,children:[o(u,{direction:`row`,gap:4,align:`center`,children:o(E,{i18nKey:`dictionary.courseCountInfo1`,count:j?.totalCount,components:{bold:o(k,{type:`NormalBold`,children:void 0}),space:o(c,{children:`\xA0`})}})}),o(u,{direction:`row`,gap:1,align:`center`,children:o(E,{i18nKey:`dictionary.courseCountInfo2`,count:j?.totalCount,components:{icon:o(w,{size:12,color:i.colors.Highlight.default,children:o(R,{})}),space:o(c,{children:`\xA0`})}})})]}),s(Me,{direction:`row`,gap:8,align:`center`,children:[o(k,{type:`NormalBold`,color:`Text.default`,children:n(`dictionary.sort`)}),o(Z,{direction:`row`,gap:0,children:o(x,{options:[n(`dictionary.sortOptions.code`),n(`dictionary.sortOptions.popularity`),n(`dictionary.sortOptions.studentCount`)],setSelectedOption:_,selectedOption:g})})]})]}),s(Ne,{direction:`column`,gap:12,ref:d,children:[C.courses.map((n,r)=>o(De,{course:n,isSelected:e==n.id,selectCourseId:t},r)),O.hasNextPage&&o(F,{ref:P})]})]})]})}var Fe=l(u)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${M.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${M.mobile} {
        padding: 0 8px 12px 8px;
    }
`,$=l(P)`
    height: 100%;
    overflow: hidden;
    padding: 16px;

    ${M.mobile} {
        padding: 16px 12px;
    }
`,Ie=l($)`
    max-width: 508px;
    flex: 1 1 0;

    ${M.tablet} {
        max-width: none;
    }
`,Le=l($)`
    flex: 1 1 0;
    max-width: 976px;

    ${M.tablet} {
        display: none;
    }
`,Re=i(function(){let e=N(`tablet`),[t,n]=r(),[i,a]=(0,z.useState)(!1),[c,l]=(0,z.useState)(null);(0,z.useEffect)(()=>{f(`Page View`,{page:`Dictionary`})},[]),(0,z.useEffect)(()=>{let e=t.get(`courseId`);if(e){let t=parseInt(e,10);isNaN(t)?l(null):(l(t),n(e=>(e.delete(`courseId`),e)))}},[]),(0,z.useEffect)(()=>{e?c!==null&&a(!0):a(!1)},[e]),(0,z.useEffect)(()=>{e&&c!==null&&a(!0)},[c]);let u=(0,z.useCallback)(()=>{a(!1),l(null)},[]);return s(Fe,{direction:`row`,align:`stretch`,justify:`center`,gap:12,children:[o(Ie,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:o(Pe,{selectedCourseId:c,setSelectedCourseId:l})}),o(Le,{direction:`column`,align:`stretch`,gap:0,borderRadius:12,children:o(Y,{selectedCourseId:c})}),e&&o(A,{isOpen:i,onClose:u,header:!1,fullScreen:!0,children:o(Y,{selectedCourseId:c,isMobileModal:!0,onMobileModalClose:u})})]})});export{Re as default};
//# sourceMappingURL=dictionary-CMKpcKLd.js.map