import{p as G,r as l,z as P,w as X}from"./chunk-JZWAC4HX-B0oiSF5k.js";import{j as t,a as i,u as N,F as C}from"./emotion-react-jsx-runtime.browser.esm-CWPoZ5vZ.js";import{s as r,F as c}from"./FlexWrapper-CNUq2fBj.js";import{M as ee}from"./Modal-CGQMCg2j.js";import{W as te}from"./Widget-B_1MVZbx.js";import{m as oe,C as re}from"./proxy-C4wi0IEZ.js";import{u as V,b as q,C as ne,S as ie}from"./Credits-5Yo4ldfw.js";import{L as T}from"./LoadingCircle-C86lSoP6.js";import{R as ce}from"./ReviewWritingBlock-DlRj70lG.js";import{e as K,g as W,I as $,k as le,v as L,w as se,u as ae}from"./useIsDevice-Hx-G7BHf.js";import{T as d}from"./Typography-iGrH35FQ.js";import{I as de}from"./IconButton-Cxzu6Xgs.js";import{p as pe,R as ue}from"./ReviewBlock-Dm_PZq-0.js";import{u as B}from"./useTranslation-6ejTrJWv.js";import{c as A,S as he}from"./checkEmpty-BUY8MYnv.js";import{t as H}from"./index-DAZzyAoY.js";import{T as z}from"./Trans-B9O0DENK.js";import{m as I}from"./media-CJEaNyAZ.js";import"./index-DKguhP-a.js";import"./infiniteQueryBehavior-DL3GzzCq.js";import"./TextInputArea-b-WuzQ1s.js";import"./useUserStore-BocUuGeb.js";import"./env-B37i3boA.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"1b0811267bd891c83c036a0df37a0ba4c20e8194"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="f93d9630-65e4-487f-90d1-3e644245c9af",e._sentryDebugIdIdentifier="sentry-dbid-f93d9630-65e4-487f-90d1-3e644245c9af")}catch{}})();const U=K(G.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),fe=K(G.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),Y=r.div`
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
`,ge=r(Y)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,me=r(Y)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,xe=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`,ye=({selected:e=!1,chipIndex:o="",chipText:s="",...a})=>t(e?me:ge,{...a,children:t(()=>i(xe,{children:[t(d,{type:"NormalBold",children:o}),t(d,{type:"Normal",children:s})]}),{})}),we=r(oe.div)`
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
`,be=r(c)`
    height: 100%;
`,ke=r(fe)`
    transform: ${e=>e.isfolded==="true"?"rotate(0deg)":"rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
`,Ce=r(d)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,ve=({courseDetail:e,selectedProfessorId:o,setSelectedProfessorId:s})=>{const{t:a}=B(),f=N(),y=W("mobile"),n=l.useRef(null),[g,m]=l.useState(!0);return l.useEffect(()=>{n.current&&(n.current.scrollLeft=n.current.scrollWidth)},[e]),l.useEffect(()=>{if(y){m(!0);return}const x=e?.history?.some(u=>u.classes.length>4)??!1;m(x)},[y,e]),i(C,{children:[i(c,{direction:"row",gap:0,justify:"space-between",align:"center",style:{width:"100%",cursor:"pointer"},onClick:()=>m(x=>!x),children:[t(d,{type:"NormalBold",color:"Text.default",children:a("dictionary.courseHistory")}),t(de,{onClick:()=>{},children:t($,{size:20,color:f.colors.Text.default,onClick:()=>{},children:t(ke,{isfolded:g.toString()})})})]}),i(we,{ref:n,initial:{height:g?0:"auto"},animate:{height:g?0:"auto"},transition:{duration:.2,ease:"easeInOut"},children:[t("div",{}),t(c,{direction:"row",gap:20,style:{minWidth:"min-content"},children:[...e?.history||[]].reverse().map((x,u)=>i(be,{direction:"column",gap:6,align:"center",children:[i(d,{type:"Normal",color:"Text.default",children:[x.year," ",le(x.semester)]}),x.classes.length===0?t(Ce,{color:"Text.disable",type:"Normal",children:a("dictionary.notOffered")}):t(c,{direction:"column",gap:4,align:"stretch",children:x.classes.map((h,w)=>t(ye,{selected:o==(h.professors[0]?.id??-1),chipIndex:h.classNo+" "+h.subtitle,chipText:pe(h.professors),onClick:()=>{o===(h.professors[0]?.id??-1)?s(null):s(h.professors[0]?.id??null)}},w))})]},u))})]})]})},Se=r(c)`
    width: 100%;
`,Te=r(c)`
    width: 300px;
    padding: 10px;
`,Be=r(c)`
    flex: 1 0 0;
`,Ie=r(d)`
    white-space: nowrap;
`,Ne=({courseDetail:e})=>{const{t:o}=B();return i(C,{children:[t(Se,{direction:"column",gap:8,children:[[o("common.class"),e?.department.name+", "+e?.type],[o("common.description"),e?.summary]].map(([s,a],f)=>i(c,{direction:"row",gap:6,children:[t(Ie,{type:"NormalBold",color:"Text.default",children:s}),t(d,{type:"Normal",color:"Text.default",children:a})]},f))}),t(Te,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,o("common.numClasses")],[e?.expDuration,o("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,o("common.credit")]].map(([s,a],f)=>i(Be,{direction:"column",gap:0,align:"center",children:[t(d,{type:"Bigger",color:"Text.default",children:s}),t(d,{type:"Smaller",color:"Text.default",children:a})]},f))})]})},Z=r.div`
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
`,$e=r(Z)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,Ee=r(Z)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,Le=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,je=({selected:e=!1,chipText:o="",...s})=>t(e?Ee:$e,{...s,children:t(()=>t(Le,{children:o}),{})}),Re=r(c)`
    width: 300px;
    padding: 10px;
`,Pe=r(c)`
    flex: 1 0 0;
`,We=20,He=({selectedCourseId:e,selectedProfessorId:o,writableReviewProps:s})=>{const{t:a}=B(),[f,y]=l.useState("all"),[n,g]=l.useState(!1),{query:m,setParams:x,data:u}=V("GET","/reviews",{infinites:["reviews"],limit:We,enabled:n}),{ref:h,inView:w}=q();return l.useEffect(()=>{x({mode:"default",courseId:e||void 0,professorId:o||void 0})},[]),l.useEffect(()=>{x(p=>{const k=p??{};return o===null&&delete k.professorId,{...k,...e!==null?{courseId:e}:{},...o!==null?{professorId:o}:{}}}),g(e!==null)},[o,e]),l.useEffect(()=>{w&&m.hasNextPage&&!m.isFetchingNextPage&&m.fetchNextPage()},[w]),i(C,{children:[t(d,{type:"NormalBold",color:"Text.default",children:a("dictionary.review")}),i(c,{direction:"column",gap:6,children:[t(d,{type:"NormalBold",color:"Text.default",children:a("dictionary.reviewLanguage")}),t(c,{direction:"row",gap:6,children:["all","english"].map(p=>t(je,{selected:f==p,chipText:a(`dictionary.reviewLanguageOptions.${p}`),onClick:()=>y(p)},p))})]}),u===null&&m.isLoading?t(T,{}):i(C,{children:[t(c,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:t(Re,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[L(u?.averageGrade,u?.reviews.length),a("common.grade")],[L(u?.averageLoad,u?.reviews.length),a("common.load")],[L(u?.averageSpeech,u?.reviews.length),a("common.speech")]].map(([p,k],v)=>i(Pe,{direction:"column",gap:0,align:"center",children:[t(d,{type:"Bigger",color:"Text.default",children:p}),t(d,{type:"Smaller",color:"Text.default",children:k})]},v))})}),s.map((p,k)=>se(ce,{...p,key:k})),u?.reviews.map(p=>f==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(p.content)?null:t(ue,{review:p,linkToDictionary:!1},p.id)),m.hasNextPage&&t(T,{ref:h})]})]})},Me=r(c)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,j=r(c)`
    width: 100%;
`,De=r(c)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,O=r.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,F=({selectedCourseId:e,isMobileModal:o=!1,onMobileModalClose:s})=>{const a=N(),[f,y]=P(),{query:n}=ae("GET",`/courses/${e}`,{enabled:e!==null}),[g,m]=l.useState(null),[x,u]=l.useState([]);return l.useEffect(()=>{if(n.data){const h=[];n.data.history.forEach(w=>{if(w.myLectureId!==null){const p=w.classes.find(k=>k.lectureId===w.myLectureId)?.professors||[];h.push({name:n.data.name,lectureId:w.myLectureId,professors:p,year:w.year,semester:w.semester})}}),u(h)}},[n.data]),l.useEffect(()=>{m(null);const h=f.get("professorId");if(h){const w=parseInt(h,10);isNaN(w)?m(null):(m(w),y({}))}},[e]),t(Me,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?n.isLoading?t(T,{}):i(C,{children:[i(De,{direction:"column",gap:2,align:"center",justify:"center",children:[i(c,{direction:"row",align:"center",gap:8,justify:o?"space-between":"center",style:{width:"100%"},children:[o&&t("div",{style:{width:20}}),t(d,{type:"Bigger",color:"Text.default",children:n.data?.name}),o&&t($,{size:20,onClick:s,color:a.colors.Text.default,children:t(re,{})})]}),t(d,{type:"Big",color:"Text.default",children:n.data?.code})]}),t(j,{direction:"column",gap:10,align:"center",children:t(Ne,{courseDetail:n.data})}),t(O,{}),t(j,{direction:"column",gap:0,children:t(ve,{courseDetail:n.data,selectedProfessorId:g,setSelectedProfessorId:m})}),t(O,{}),t(j,{direction:"column",gap:10,flex:"1 1 auto",children:t(He,{selectedCourseId:e,selectedProfessorId:g,writableReviewProps:x})})]}):t(ne,{})})},Ae=r.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e,selected:o})=>o?e.colors.Background.Block.darker:e.colors.Background.Block.dark};
    }
    background-color: ${({selected:e,theme:o})=>e?o.colors.Background.Block.darker:o.colors.Background.Block.default};
`,ze=r.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,R=r(d)`
    white-space: nowrap;
`,Oe=({course:e,isSelected:o,selectCourseId:s})=>{const{t:a}=B(),f=N(),y=l.useCallback(()=>{o?s(null):(s(e.id),H("Select Course",{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[o,e.id,s]);return i(Ae,{onClick:y,selected:o,children:[i(c,{direction:"row",gap:0,justify:"space-between",align:"center",children:[i(c,{direction:"row",gap:6,align:"center",children:[t($,{size:12,color:e.open?f.colors.Highlight.default:f.colors.Text.disable,children:t(U,{})}),t(d,{type:"NormalBold",color:"Text.default",children:e.name}),t(d,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&t(d,{type:"Normal",color:"Text.lighter",children:a("common.completedCourse")})]}),t(ze,{}),i(c,{direction:"column",gap:4,children:[i(c,{direction:"row",gap:6,children:[t(R,{type:"NormalBold",color:"Text.default",children:a("common.class")}),i(d,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),i(c,{direction:"row",gap:6,children:[t(R,{type:"NormalBold",color:"Text.default",children:a("common.professor")}),t(d,{type:"Normal",color:"Text.default",children:e.professors.map(n=>n.name).join(", ")})]}),i(c,{direction:"row",gap:6,children:[t(R,{type:"NormalBold",color:"Text.default",children:a("common.description")}),t(d,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},Fe=l.memo(Oe),_e=r(c)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Ge=r.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Ve=r(d)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,qe=r(d)`
    display: flex;
    flex-direction: ${({direction:e})=>e};
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
    white-space: nowrap;
`,Ke=r(c)`
    white-space: nowrap;
`,Ue=r(c)`
    flex-grow: 1;
    height: 36px;
`,Ye=r(c)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,_=20;function Ze({selectedCourseId:e,setSelectedCourseId:o}){const{t:s}=B(),a=N(),f=W("mobile"),y=l.useRef(null),[n]=P(),[g,m]=l.useState(0),[x,u]=l.useState(!1),[h,w]=l.useState({courses:[],totalCount:0}),{query:p,setParams:k,data:v}=V("GET","/courses",{infinites:["courses"],limit:_,enabled:x}),{inView:M,ref:Q}=q({threshold:0});l.useEffect(()=>{M&&p.hasNextPage&&!p.isFetchingNextPage&&p.fetchNextPage()},[M]),l.useEffect(()=>{const b=n.get("term")?parseInt(n.get("term")):void 0,S={keyword:n.get("keyword")||"",type:n.getAll("type"),department:n.getAll("department").map(E=>parseInt(E)),level:n.getAll("level").map(E=>parseInt(E))};b!==void 0&&(S.term=b),!A(S)&&D(S)},[]),l.useEffect(()=>{v!==void 0&&w(v)},[v]),l.useEffect(()=>{g==0&&x==!1||(w({courses:[],totalCount:0}),k(b=>({...b,order:["code","popular","studentCount"][g]??"code",offset:0})),u(!0),y.current?.scrollTo(0,0))},[g]);const D=b=>{if(A(b)){alert(s("common.search.empty"));return}const S={...b,order:["code","popular","studentCount"][g]??"code",offset:0,limit:_};k(S),u(!0),y.current?.scrollTo(0,0),H("Search Courses",{keyword:b.keyword??"",department:b.department??"",type:b.type??"",level:b.level??"",term:b.term??""})};return i(_e,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[t(Ge,{children:t(he,{options:["type","department","level","term"],onSearch:D})}),h.courses.length!==0?i(C,{children:[i(c,{direction:"row",gap:0,justify:"space-between",align:"center",children:[i(qe,{color:"Text.default",direction:f?"column":"row",children:[t(c,{direction:"row",gap:4,align:"center",children:t(z,{i18nKey:"dictionary.courseCountInfo1",count:v?.totalCount,components:{bold:t(d,{type:"NormalBold",children:void 0}),space:t(C,{children:" "})}})}),t(c,{direction:"row",gap:1,align:"center",children:t(z,{i18nKey:"dictionary.courseCountInfo2",count:v?.totalCount,components:{icon:t($,{size:12,color:a.colors.Highlight.default,children:t(U,{})}),space:t(C,{children:" "})}})})]}),i(Ke,{direction:"row",gap:8,align:"center",children:[t(d,{type:"NormalBold",color:"Text.default",children:s("dictionary.sort")}),t(Ue,{direction:"row",gap:0,children:t(ie,{options:[s("dictionary.sortOptions.code"),s("dictionary.sortOptions.popularity"),s("dictionary.sortOptions.studentCount")],setSelectedOption:m,selectedOption:g})})]})]}),i(Ye,{direction:"column",gap:12,ref:y,children:[h.courses.map((b,S)=>t(Fe,{course:b,isSelected:e==b.id,selectCourseId:o},S)),p.hasNextPage&&t(T,{ref:Q})]})]}):p.isLoading?t(T,{}):t(Ve,{type:"Bigger",color:"Text.placeholder",children:s("dictionary.noResults")})]})}const Je=r(c)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${I.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${I.mobile} {
        padding: 0 8px 12px 8px;
    }
`,J=r(te)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`,Qe=r(J)`
    max-width: 508px;
    flex: 1 1 0;

    ${I.tablet} {
        max-width: none;
    }
`,Xe=r(J)`
    flex: 1 1 0;
    max-width: 976px;

    ${I.tablet} {
        display: none;
    }
`,vt=X(function(){const o=W("tablet"),[s,a]=P(),[f,y]=l.useState(!1),[n,g]=l.useState(null);l.useEffect(()=>{H("Page View",{page:"Dictionary"})},[]),l.useEffect(()=>{const x=s.get("courseId");if(x){const u=parseInt(x,10);isNaN(u)?g(null):(g(u),a(h=>(h.delete("courseId"),h)))}},[]),l.useEffect(()=>{o?n!==null&&y(!0):y(!1)},[o]),l.useEffect(()=>{o&&n!==null&&y(!0)},[n]);const m=l.useCallback(()=>{y(!1),g(null)},[]);return i(Je,{direction:"row",align:"stretch",justify:"center",gap:12,children:[t(Qe,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(Ze,{selectedCourseId:n,setSelectedCourseId:g})}),t(Xe,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(F,{selectedCourseId:n})}),o&&t(ee,{isOpen:f,onClose:m,header:!1,fullScreen:!0,children:t(F,{selectedCourseId:n,isMobileModal:!0,onMobileModalClose:m})})]})});export{vt as default};
//# sourceMappingURL=dictionary-Ckm76Txe.js.map
