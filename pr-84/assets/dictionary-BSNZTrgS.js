import{p as _,r as l,z as R,w as Q}from"./chunk-JZWAC4HX-D9FDeyGU.js";import{j as t,a as i,u as N,F as C}from"./emotion-react-jsx-runtime.browser.esm-DzILzxJd.js";import{s as r,F as c}from"./FlexWrapper-BEjzgVW0.js";import{M as X}from"./Modal-BlkSSsYE.js";import{W as ee}from"./Widget-B-MTa2U3.js";import{m as te,C as oe}from"./proxy-CFun9Sd5.js";import{u as G,b as V,C as re,S as ne}from"./Credits-Bc8X8dFU.js";import{L as S}from"./LoadingCircle-Cq4dojB7.js";import{R as ie}from"./ReviewWritingBlock-DHDSxYA1.js";import{e as q,g as W,I as $,k as ce,v as L,w as le,u as ae}from"./useIsDevice-BpucefwF.js";import{T as d}from"./Typography-C-dWMuNv.js";import{I as se}from"./IconButton-B92Oqw-0.js";import{p as de,R as pe}from"./ReviewBlock-NbfQFXRc.js";import{u as T}from"./useTranslation-Bp73TZlh.js";import{c as D,S as ue}from"./checkEmpty-Coj8AonQ.js";import{t as H}from"./index-CV1OgFM3.js";import{T as A}from"./Trans-CpLmdkzp.js";import{m as I}from"./media-CngE6q6y.js";import"./index-CESwbKBr.js";import"./infiniteQueryBehavior-DS5MlJY9.js";import"./TextInputArea--Pwfyyfm.js";import"./useUserStore-Blus9GSL.js";import"./env-Dun39mJi.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"e2ce852e0675033d5693314e7a86a2e2b1122891"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="8bfec433-faad-4908-a749-67c394286f19",e._sentryDebugIdIdentifier="sentry-dbid-8bfec433-faad-4908-a749-67c394286f19")}catch{}})();const K=q(_.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),he=q(_.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),U=r.div`
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
`,fe=r(U)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ge=r(U)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,me=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`,xe=({selected:e=!1,chipIndex:o="",chipText:a="",...s})=>t(e?ge:fe,{...s,children:t(()=>i(me,{children:[t(d,{type:"NormalBold",children:o}),t(d,{type:"Normal",children:a})]}),{})}),ye=r(te.div)`
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
`,we=r(c)`
    height: 100%;
`,be=r(he)`
    transform: ${e=>e.isfolded==="true"?"rotate(0deg)":"rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
`,ke=r(d)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ce=({courseDetail:e,selectedProfessorId:o,setSelectedProfessorId:a})=>{const{t:s}=T(),m=N(),p=W("mobile"),n=l.useRef(null),[w,u]=l.useState(!0);return l.useEffect(()=>{n.current&&(n.current.scrollLeft=n.current.scrollWidth)},[e]),l.useEffect(()=>{if(p){u(!0);return}const x=e?.history?.some(h=>h.classes.length>4)??!1;u(x)},[p,e]),i(C,{children:[i(c,{direction:"row",gap:0,justify:"space-between",align:"center",style:{width:"100%",cursor:"pointer"},onClick:()=>u(x=>!x),children:[t(d,{type:"NormalBold",color:"Text.default",children:s("dictionary.courseHistory")}),t(se,{onClick:()=>{},children:t($,{size:20,color:m.colors.Text.default,onClick:()=>{},children:t(be,{isfolded:w.toString()})})})]}),i(ye,{ref:n,initial:{height:w?0:"auto"},animate:{height:w?0:"auto"},transition:{duration:.2,ease:"easeInOut"},children:[t("div",{}),t(c,{direction:"row",gap:20,style:{minWidth:"min-content"},children:[...e?.history||[]].reverse().map((x,h)=>i(we,{direction:"column",gap:6,align:"center",children:[i(d,{type:"Normal",color:"Text.default",children:[x.year," ",ce(x.semester)]}),x.classes.length===0?t(ke,{color:"Text.disable",type:"Normal",children:s("dictionary.notOffered")}):t(c,{direction:"column",gap:4,align:"stretch",children:x.classes.map((f,g)=>t(xe,{selected:o==(f.professors[0]?.id??-1),chipIndex:f.classNo+" "+f.subtitle,chipText:de(f.professors),onClick:()=>{o===(f.professors[0]?.id??-1)?a(null):a(f.professors[0]?.id??null)}},g))})]},h))})]})]})},ve=r(c)`
    width: 100%;
`,Se=r(c)`
    width: 300px;
    padding: 10px;
`,Te=r(c)`
    flex: 1 0 0;
`,Be=r(d)`
    white-space: nowrap;
`,Ie=({courseDetail:e})=>{const{t:o}=T();return i(C,{children:[t(ve,{direction:"column",gap:8,children:[[o("common.class"),e?.department.name+", "+e?.type],[o("common.description"),e?.summary]].map(([a,s],m)=>i(c,{direction:"row",gap:6,children:[t(Be,{type:"NormalBold",color:"Text.default",children:a}),t(d,{type:"Normal",color:"Text.default",children:s})]},m))}),t(Se,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,o("common.numClasses")],[e?.expDuration,o("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,o("common.credit")]].map(([a,s],m)=>i(Te,{direction:"column",gap:0,align:"center",children:[t(d,{type:"Bigger",color:"Text.default",children:a}),t(d,{type:"Smaller",color:"Text.default",children:s})]},m))})]})},Y=r.div`
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
`,Ne=r(Y)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,$e=r(Y)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,Ee=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,Le=({selected:e=!1,chipText:o="",...a})=>t(e?$e:Ne,{...a,children:t(()=>t(Ee,{children:o}),{})}),je=r(c)`
    width: 300px;
    padding: 10px;
`,Pe=r(c)`
    flex: 1 0 0;
`,Re=20,We=({selectedCourseId:e,selectedProfessorId:o,writableReviewProps:a})=>{const{t:s}=T(),[m,p]=l.useState("all"),[n,w]=l.useState(!1),{query:u,setParams:x,data:h}=G("GET","/reviews",{infinites:["reviews"],limit:Re,enabled:n}),{ref:f,inView:g}=V();return l.useEffect(()=>{x({mode:"default",courseId:e||void 0,professorId:o||void 0})},[]),l.useEffect(()=>{x(y=>{const k=y??{};return o===null&&delete k.professorId,{...k,...e!==null?{courseId:e}:{},...o!==null?{professorId:o}:{}}}),w(e!==null)},[o,e]),l.useEffect(()=>{g&&u.hasNextPage&&!u.isFetchingNextPage&&u.fetchNextPage()},[g]),i(C,{children:[t(d,{type:"NormalBold",color:"Text.default",children:s("dictionary.review")}),i(c,{direction:"column",gap:6,children:[t(d,{type:"NormalBold",color:"Text.default",children:s("dictionary.reviewLanguage")}),t(c,{direction:"row",gap:6,children:["all","english"].map(y=>t(Le,{selected:m==y,chipText:s(`dictionary.reviewLanguageOptions.${y}`),onClick:()=>p(y)},y))})]}),h===null&&u.isLoading?t(S,{}):i(C,{children:[t(c,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:t(je,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[L(h?.averageGrade,h?.reviews.length),s("common.grade")],[L(h?.averageLoad,h?.reviews.length),s("common.load")],[L(h?.averageSpeech,h?.reviews.length),s("common.speech")]].map(([y,k],B)=>i(Pe,{direction:"column",gap:0,align:"center",children:[t(d,{type:"Bigger",color:"Text.default",children:y}),t(d,{type:"Smaller",color:"Text.default",children:k})]},B))})}),a.map((y,k)=>le(ie,{...y,key:k})),h?.reviews.map(y=>m==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(y.content)?null:t(pe,{review:y,linkToDictionary:!1},y.id)),u.hasNextPage&&t(S,{ref:f})]})]})},He=r(c)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,j=r(c)`
    width: 100%;
`,Me=r(c)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,z=r.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,O=({selectedCourseId:e,isMobileModal:o=!1,onMobileModalClose:a})=>{const s=N(),[m,p]=R(),{query:n}=ae("GET",`/courses/${e}`,{enabled:e!==null}),[w,u]=l.useState(null),[x,h]=l.useState([]);return l.useEffect(()=>{if(n.data){const f=[];n.data.history.forEach(g=>{if(g.myLectureId!==null){const y=g.classes.find(k=>k.lectureId===g.myLectureId)?.professors||[];f.push({name:n.data.name,lectureId:g.myLectureId,professors:y,year:g.year,semester:g.semester})}}),h(f)}},[n.data]),l.useEffect(()=>{u(null);const f=m.get("professorId");if(f){const g=parseInt(f,10);isNaN(g)?u(null):(u(g),p({}))}},[e]),t(He,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?n.isLoading?t(S,{}):i(C,{children:[i(Me,{direction:"column",gap:2,align:"center",justify:"center",children:[i(c,{direction:"row",align:"center",gap:8,justify:o?"space-between":"center",style:{width:"100%"},children:[o&&t("div",{style:{width:20}}),t(d,{type:"Bigger",color:"Text.default",children:n.data?.name}),o&&t($,{size:20,onClick:a,color:s.colors.Text.default,children:t(oe,{})})]}),t(d,{type:"Big",color:"Text.default",children:n.data?.code})]}),t(j,{direction:"column",gap:10,align:"center",children:t(Ie,{courseDetail:n.data})}),t(z,{}),t(j,{direction:"column",gap:0,children:t(Ce,{courseDetail:n.data,selectedProfessorId:w,setSelectedProfessorId:u})}),t(z,{}),t(j,{direction:"column",gap:10,flex:"1 1 auto",children:t(We,{selectedCourseId:e,selectedProfessorId:w,writableReviewProps:x})})]}):t(re,{})})},De=r.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e,selected:o})=>o?e.colors.Background.Block.darker:e.colors.Background.Block.dark};
    }
    background-color: ${({selected:e,theme:o})=>e?o.colors.Background.Block.darker:o.colors.Background.Block.default};
`,Ae=r.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,P=r(d)`
    white-space: nowrap;
`,ze=({course:e,isSelected:o,selectCourseId:a})=>{const{t:s}=T(),m=N(),p=l.useCallback(()=>{o?a(null):(a(e.id),H("Select Course",{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[o,e.id,a]);return i(De,{onClick:p,selected:o,children:[i(c,{direction:"row",gap:0,justify:"space-between",align:"center",children:[i(c,{direction:"row",gap:6,align:"center",children:[t($,{size:12,color:e.open?m.colors.Highlight.default:m.colors.Text.disable,children:t(K,{})}),t(d,{type:"NormalBold",color:"Text.default",children:e.name}),t(d,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&t(d,{type:"Normal",color:"Text.lighter",children:s("common.completedCourse")})]}),t(Ae,{}),i(c,{direction:"column",gap:4,children:[i(c,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.class")}),i(d,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),i(c,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.professor")}),t(d,{type:"Normal",color:"Text.default",children:e.professors.map(n=>n.name).join(", ")})]}),i(c,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.description")}),t(d,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},Oe=l.memo(ze),Fe=r(c)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,_e=r.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Ge=r(d)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ve=r(d)`
    display: flex;
    flex-direction: ${({direction:e})=>e};
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
    white-space: nowrap;
`,qe=r(c)`
    white-space: nowrap;
`,Ke=r(c)`
    flex-grow: 1;
    height: 36px;
`,Ue=r(c)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,F=20;function Ye({selectedCourseId:e,setSelectedCourseId:o}){const{t:a}=T(),s=N(),m=W("mobile"),[p]=R(),[n,w]=l.useState(0),[u,x]=l.useState(!1),[h,f]=l.useState({courses:[],totalCount:0}),{query:g,setParams:y,data:k}=G("GET","/courses",{infinites:["courses"],limit:F,enabled:u}),{inView:B,ref:J}=V({threshold:0});l.useEffect(()=>{B&&g.hasNextPage&&!g.isFetchingNextPage&&g.fetchNextPage()},[B]),l.useEffect(()=>{const b=p.get("term")?parseInt(p.get("term")):void 0,v={keyword:p.get("keyword")||"",type:p.getAll("type"),department:p.getAll("department").map(E=>parseInt(E)),level:p.getAll("level").map(E=>parseInt(E))};b!==void 0&&(v.term=b),!D(v)&&M(v)},[]),l.useEffect(()=>{k!==void 0&&f(k)},[k]),l.useEffect(()=>{n==0&&u==!1||(f({courses:[],totalCount:0}),y(b=>({...b,order:["code","popular","studentCount"][n]??"code",offset:0})),x(!0))},[n]);const M=b=>{if(D(b)){alert(a("common.search.empty"));return}const v={...b,order:["code","popular","studentCount"][n]??"code",offset:0,limit:F};y(v),x(!0),H("Search Courses",{keyword:b.keyword??"",department:b.department??"",type:b.type??"",level:b.level??"",term:b.term??""})};return i(Fe,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[t(_e,{children:t(ue,{options:["type","department","level","term"],onSearch:M})}),h.courses.length!==0?i(C,{children:[i(c,{direction:"row",gap:0,justify:"space-between",align:"center",children:[i(Ve,{color:"Text.default",direction:m?"column":"row",children:[t(c,{direction:"row",gap:4,align:"center",children:t(A,{i18nKey:"dictionary.courseCountInfo1",count:k?.totalCount,components:{bold:t(d,{type:"NormalBold",children:void 0}),space:t(C,{children:" "})}})}),t(c,{direction:"row",gap:1,align:"center",children:t(A,{i18nKey:"dictionary.courseCountInfo2",count:k?.totalCount,components:{icon:t($,{size:12,color:s.colors.Highlight.default,children:t(K,{})}),space:t(C,{children:" "})}})})]}),i(qe,{direction:"row",gap:8,align:"center",children:[t(d,{type:"NormalBold",color:"Text.default",children:a("dictionary.sort")}),t(Ke,{direction:"row",gap:0,children:t(ne,{options:[a("dictionary.sortOptions.code"),a("dictionary.sortOptions.popularity"),a("dictionary.sortOptions.studentCount")],setSelectedOption:w,selectedOption:n})})]})]}),i(Ue,{direction:"column",gap:12,children:[h.courses.map((b,v)=>t(Oe,{course:b,isSelected:e==b.id,selectCourseId:o},v)),g.hasNextPage&&t(S,{ref:J})]})]}):g.isLoading?t(S,{}):t(Ge,{type:"Bigger",color:"Text.placeholder",children:a("dictionary.noResults")})]})}const Ze=r(c)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${I.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${I.mobile} {
        padding: 0 8px 12px 8px;
    }
`,Z=r(ee)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`,Je=r(Z)`
    max-width: 508px;
    flex: 1 1 0;

    ${I.tablet} {
        max-width: none;
    }
`,Qe=r(Z)`
    flex: 1 1 0;
    max-width: 976px;

    ${I.tablet} {
        display: none;
    }
`,Ct=Q(function(){const o=W("tablet"),[a,s]=R(),[m,p]=l.useState(!1),[n,w]=l.useState(null);l.useEffect(()=>{H("Page View",{page:"Dictionary"})},[]),l.useEffect(()=>{const x=a.get("courseId");if(x){const h=parseInt(x,10);isNaN(h)?w(null):(w(h),s(f=>(f.delete("courseId"),f)))}},[]),l.useEffect(()=>{o?n!==null&&p(!0):p(!1)},[o]),l.useEffect(()=>{o&&n!==null&&p(!0)},[n]);const u=l.useCallback(()=>{p(!1),w(null)},[]);return i(Ze,{direction:"row",align:"stretch",justify:"center",gap:12,children:[t(Je,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(Ye,{selectedCourseId:n,setSelectedCourseId:w})}),t(Qe,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(O,{selectedCourseId:n})}),o&&t(X,{isOpen:m,onClose:u,header:!1,fullScreen:!0,children:t(O,{selectedCourseId:n,isMobileModal:!0,onMobileModalClose:u})})]})});export{Ct as default};
//# sourceMappingURL=dictionary-BSNZTrgS.js.map
