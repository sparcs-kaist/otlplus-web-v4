import{p as O,r as l,z as P,w as X}from"./chunk-EPOLDU6W-BWW_yciW.js";import{j as t,a as i,u as N,F as C}from"./emotion-react-jsx-runtime.browser.esm-3iAI1-2z.js";import{n as r,F as a}from"./FlexWrapper-C8kJQqM4.js";import{M as Z}from"./Modal-BzsTNxI7.js";import{W as J}from"./Widget-K1v9qv7O.js";import{m as Q,C as ee}from"./proxy-B3Tw_PKH.js";import{u as F,b as _,C as te,S as oe}from"./Credits-BJt9Chip.js";import{L as S}from"./LoadingCircle-7eTwv0Ng.js";import{R as re}from"./ReviewWritingBlock-Bz6uwclj.js";import{e as G,g as V,I as $,k as ne,t as E,v as ie,u as le}from"./useIsDevice-DqmOhhAg.js";import{T as u}from"./Typography-dii1uYzL.js";import{I as ce}from"./IconButton-DZdYeGZS.js";import{p as ae,R as se}from"./ReviewBlock-WaYwkoTB.js";import{u as T}from"./useTranslation-DWh9_qKU.js";import{c as H,S as de}from"./checkEmpty-DN38rehD.js";import{t as M}from"./index-BKxNqBQM.js";import{T as pe}from"./Trans-DmRrE2L3.js";import{m as I}from"./media-DzJN5QSX.js";import"./index-KWY9wU5h.js";import"./infiniteQueryBehavior-DeKli5l-.js";import"./TextInputArea-DqOGRidb.js";import"./useUserStore-DdFk51Ly.js";import"./env-BrLSVvlW.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"3dd76d336057ee704859715f34ecd92ac1bad066"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="804d2bad-7441-4bda-af53-b5df8d32eb70",e._sentryDebugIdIdentifier="sentry-dbid-804d2bad-7441-4bda-af53-b5df8d32eb70")})()}catch{}const q=G(O.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),ue=G(O.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),U=r.div`
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
`,he=r(U)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,fe=r(U)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,ge=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`,me=({selected:e=!1,chipIndex:o="",chipText:d="",...p})=>t(e?fe:he,{...p,children:t(()=>i(ge,{children:[t(u,{type:"NormalBold",children:o}),t(u,{type:"Normal",children:d})]}),{})}),xe=r(Q.div)`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    gap: 10px;
    touch-action: pan-x;
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
`,ye=r(a)`
    height: 100%;
`,we=r(ue)`
    transform: ${e=>e.isfolded==="true"?"rotate(0deg)":"rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
`,be=r(u)`
    min-width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,ke=({courseDetail:e,selectedProfessorId:o,setSelectedProfessorId:d})=>{const{t:p}=T(),f=N(),x=V("mobile"),s=l.useRef(null),[w,y]=l.useState(!0);return l.useEffect(()=>{s.current&&(s.current.scrollLeft=s.current.scrollWidth)},[e]),l.useEffect(()=>{if(x){y(!0);return}const c=e?.history?.some(g=>g.classes.length>4)??!1;y(c)},[x,e]),l.useEffect(()=>{const c=s.current;if(!c)return;const g=n=>{const m=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY;if(m===0)return;const h=c.scrollWidth-c.clientWidth;if(h<=0)return;const k=c.scrollLeft+m;(m>0&&c.scrollLeft<h||m<0&&c.scrollLeft>0)&&(n.preventDefault(),n.stopPropagation(),c.scrollLeft=Math.min(h,Math.max(0,k)))};return c.addEventListener("wheel",g,{passive:!1,capture:!0}),()=>{c.removeEventListener("wheel",g,{capture:!0})}},[]),i(C,{children:[i(a,{direction:"row",gap:0,justify:"space-between",align:"center",style:{width:"100%",cursor:"pointer"},onClick:()=>y(c=>!c),children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.courseHistory")}),t(ce,{onClick:()=>{},children:t($,{size:20,color:f.colors.Text.default,onClick:()=>{},children:t(we,{isfolded:w.toString()})})})]}),i(xe,{ref:s,initial:{height:w?0:"auto"},animate:{height:w?0:"auto"},transition:{duration:.2,ease:"easeInOut"},children:[t("div",{}),t(a,{direction:"row",gap:20,style:{minWidth:"min-content"},children:[...e?.history||[]].reverse().map((c,g)=>i(ye,{direction:"column",gap:6,align:"center",children:[i(u,{type:"Normal",color:"Text.default",children:[c.year," ",ne(c.semester)]}),c.classes.length===0?t(be,{color:"Text.disable",type:"Normal",children:p("dictionary.notOffered")}):t(a,{direction:"column",gap:4,align:"stretch",children:c.classes.map((n,m)=>t(me,{selected:o==(n.professors[0]?.id??-1),chipIndex:n.classNo+" "+n.subtitle,chipText:ae(n.professors),onClick:()=>{o===(n.professors[0]?.id??-1)?d(null):d(n.professors[0]?.id??null)}},m))})]},g))})]})]})},ve=r(a)`
    width: 100%;
`,Ce=r(a)`
    width: 300px;
    padding: 10px;
`,Se=r(a)`
    flex: 1 0 0;
`,Te=r(u)`
    white-space: nowrap;
`,Be=({courseDetail:e})=>{const{t:o}=T();return i(C,{children:[t(ve,{direction:"column",gap:8,children:[[o("common.class"),e?.department.name+", "+e?.type],[o("common.description"),e?.summary]].map(([d,p],f)=>i(a,{direction:"row",gap:6,children:[t(Te,{type:"NormalBold",color:"Text.default",children:d}),t(u,{type:"Normal",color:"Text.default",children:p})]},f))}),t(Ce,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,o("common.numClasses")],[e?.expDuration,o("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,o("common.credit")]].map(([d,p],f)=>i(Se,{direction:"column",gap:0,align:"center",children:[t(u,{type:"Bigger",color:"Text.default",children:d}),t(u,{type:"Smaller",color:"Text.default",children:p})]},f))})]})},Y=r.div`
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
`,Ie=r(Y)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,Ne=r(Y)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,$e=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,Le=({selected:e=!1,chipText:o="",...d})=>t(e?Ne:Ie,{...d,children:t(()=>t($e,{children:o}),{})}),Ee=r(a)`
    width: 300px;
    padding: 10px;
`,je=r(a)`
    flex: 1 0 0;
`,We=20,Pe=({selectedCourseId:e,selectedProfessorId:o,writableReviewProps:d})=>{const{t:p}=T(),[f,x]=l.useState("all"),[s,w]=l.useState(!1),{query:y,setParams:c,data:g}=F("GET","/reviews",{infinites:["reviews"],limit:We,enabled:s}),{ref:n,inView:m}=_();return l.useEffect(()=>{c({mode:"default",courseId:e||void 0,professorId:o||void 0})},[]),l.useEffect(()=>{c(h=>{const k=h??{};return o===null&&delete k.professorId,{...k,...e!==null?{courseId:e}:{},...o!==null?{professorId:o}:{}}}),w(e!==null)},[o,e]),l.useEffect(()=>{m&&y.hasNextPage&&!y.isFetchingNextPage&&y.fetchNextPage()},[m]),i(C,{children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.review")}),i(a,{direction:"column",gap:6,children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.reviewLanguage")}),t(a,{direction:"row",gap:6,children:["all","english"].map(h=>t(Le,{selected:f==h,chipText:p(`dictionary.reviewLanguageOptions.${h}`),onClick:()=>x(h)},h))})]}),g===null&&y.isLoading?t(S,{}):i(C,{children:[t(a,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:t(Ee,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[E(g?.averageGrade,g?.reviews.length),p("common.grade")],[E(g?.averageLoad,g?.reviews.length),p("common.load")],[E(g?.averageSpeech,g?.reviews.length),p("common.speech")]].map(([h,k],B)=>i(je,{direction:"column",gap:0,align:"center",children:[t(u,{type:"Bigger",color:"Text.default",children:h}),t(u,{type:"Smaller",color:"Text.default",children:k})]},B))})}),d.map((h,k)=>ie(re,{...h,key:k})),g?.reviews.map(h=>f==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(h.content)?null:t(se,{review:h,linkToDictionary:!1},h.id)),y.hasNextPage&&t(S,{ref:n})]})]})},Me=r(a)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,j=r(a)`
    width: 100%;
`,Re=r(a)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`,D=r.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,z=({selectedCourseId:e,isMobileModal:o=!1,onMobileModalClose:d})=>{const p=N(),[f,x]=P(),{query:s}=le("GET",`/courses/${e}`,{enabled:e!==null}),[w,y]=l.useState(null),[c,g]=l.useState([]);return l.useEffect(()=>{if(s.data){const n=[];s.data.history.forEach(m=>{if(m.myLectureId!==null){const h=m.classes.find(k=>k.lectureId===m.myLectureId)?.professors||[];n.push({name:s.data.name,lectureId:m.myLectureId,professors:h,year:m.year,semester:m.semester})}}),g(n)}},[s.data]),l.useEffect(()=>{y(null);const n=f.get("professorId");if(n){const m=parseInt(n,10);isNaN(m)?y(null):(y(m),x({}))}},[e]),t(Me,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?s.isLoading?t(S,{}):i(C,{children:[i(Re,{direction:"column",gap:2,align:"center",justify:"center",children:[i(a,{direction:"row",align:"center",gap:8,justify:o?"space-between":"center",style:{width:"100%"},children:[o&&t("div",{style:{width:20}}),t(u,{type:"Bigger",color:"Text.default",children:s.data?.name}),o&&t($,{size:20,onClick:d,color:p.colors.Text.default,children:t(ee,{})})]}),t(u,{type:"Big",color:"Text.default",children:s.data?.code})]}),t(j,{direction:"column",gap:10,align:"center",children:t(Be,{courseDetail:s.data})}),t(D,{}),t(j,{direction:"column",gap:0,children:t(ke,{courseDetail:s.data,selectedProfessorId:w,setSelectedProfessorId:y})}),t(D,{}),t(j,{direction:"column",gap:10,flex:"1 1 auto",children:t(Pe,{selectedCourseId:e,selectedProfessorId:w,writableReviewProps:c})})]}):t(te,{})})},He=r.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e,selected:o})=>o?e.colors.Background.Block.darker:e.colors.Background.Block.dark};
    }
    background-color: ${({selected:e,theme:o})=>e?o.colors.Background.Block.darker:o.colors.Background.Block.default};
`,De=r.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,W=r(u)`
    white-space: nowrap;
`,ze=({course:e,isSelected:o,selectCourseId:d})=>{const{t:p}=T(),f=N(),x=l.useCallback(()=>{o?d(null):(d(e.id),M("Select Course",{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[o,e.id,d]);return i(He,{onClick:x,selected:o,children:[i(a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[i(a,{direction:"row",gap:6,align:"center",children:[t($,{size:12,color:e.open?f.colors.Highlight.default:f.colors.Text.disable,children:t(q,{})}),t(u,{type:"NormalBold",color:"Text.default",children:e.name}),t(u,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&t(u,{type:"Normal",color:"Text.lighter",children:p("common.completedCourse")})]}),t(De,{}),i(a,{direction:"column",gap:4,children:[i(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.class")}),i(u,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),i(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.professor")}),t(u,{type:"Normal",color:"Text.default",children:e.professors.map(s=>s.name).join(", ")})]}),i(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.description")}),t(u,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},Ae=l.memo(ze),Oe=r(a)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Fe=r.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,_e=r(u)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ge=r(u)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
`,Ve=r(a)`
    white-space: nowrap;
`,qe=r(a)`
    flex-grow: 1;
    height: 36px;
`,Ue=r(a)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,A=20;function Ye({selectedCourseId:e,setSelectedCourseId:o}){const{t:d}=T(),p=N(),[f]=P(),[x,s]=l.useState(0),[w,y]=l.useState(!1),[c,g]=l.useState({courses:[],totalCount:0}),{query:n,setParams:m,data:h}=F("GET","/courses",{infinites:["courses"],limit:A,enabled:w}),{inView:k,ref:B}=_({threshold:0});l.useEffect(()=>{k&&n.hasNextPage&&!n.isFetchingNextPage&&n.fetchNextPage()},[k]),l.useEffect(()=>{const b=f.get("term")?parseInt(f.get("term")):void 0,v={keyword:f.get("keyword")||"",type:f.getAll("type"),department:f.getAll("department").map(L=>parseInt(L)),level:f.getAll("level").map(L=>parseInt(L))};b!==void 0&&(v.term=b),!H(v)&&R(v)},[]),l.useEffect(()=>{h!==void 0&&g(h)},[h]),l.useEffect(()=>{x==0&&w==!1||(g({courses:[],totalCount:0}),m(b=>({...b,order:["code","popular","studentCount"][x]??"code",offset:0})),y(!0))},[x]);const R=b=>{if(H(b)){alert(d("common.search.empty"));return}const v={...b,order:["code","popular","studentCount"][x]??"code",offset:0,limit:A};m(v),y(!0),M("Search Courses",{keyword:b.keyword??"",department:b.department??"",type:b.type??"",level:b.level??"",term:b.term??""})};return i(Oe,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[t(Fe,{children:t(de,{options:["type","department","level","term"],onSearch:R})}),c.courses.length!==0?i(C,{children:[i(a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[t(Ge,{color:"Text.default",children:t(pe,{i18nKey:"dictionary.courseCountInfo",count:h?.totalCount,components:{bold:t(u,{type:"NormalBold",children:void 0}),icon:t($,{size:12,color:p.colors.Highlight.default,children:t(q,{})}),space:t(C,{children:" "})}})}),i(Ve,{direction:"row",gap:8,align:"center",children:[t(u,{type:"NormalBold",color:"Text.default",children:d("dictionary.sort")}),t(qe,{direction:"row",gap:0,children:t(oe,{options:[d("dictionary.sortOptions.code"),d("dictionary.sortOptions.popularity"),d("dictionary.sortOptions.studentCount")],setSelectedOption:s,selectedOption:x})})]})]}),i(Ue,{direction:"column",gap:12,children:[c.courses.map((b,v)=>t(Ae,{course:b,isSelected:e==b.id,selectCourseId:o},v)),n.hasNextPage&&t(S,{ref:B})]})]}):n.isLoading?t(S,{}):t(_e,{type:"Bigger",color:"Text.placeholder",children:d("dictionary.noResults")})]})}const Ke=r(a)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${I.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${I.mobile} {
        padding: 0 8px 12px 8px;
    }
`,K=r(J)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`,Xe=r(K)`
    max-width: 508px;
    flex: 1 1 0;

    ${I.tablet} {
        max-width: none;
    }
`,Ze=r(K)`
    flex: 1 1 0;
    max-width: 976px;

    ${I.tablet} {
        display: none;
    }
`,kt=X(function(){const o=V("tablet"),[d,p]=P(),[f,x]=l.useState(!1),[s,w]=l.useState(null);l.useEffect(()=>{M("Page View",{page:"Dictionary"})},[]),l.useEffect(()=>{const c=d.get("courseId");if(c){const g=parseInt(c,10);isNaN(g)?w(null):(w(g),p(n=>(n.delete("courseId"),n)))}},[]),l.useEffect(()=>{o?s!==null&&x(!0):x(!1)},[o]),l.useEffect(()=>{o&&s!==null&&x(!0)},[s]);const y=l.useCallback(()=>{x(!1),w(null)},[]);return i(Ke,{direction:"row",align:"stretch",justify:"center",gap:12,children:[t(Xe,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(Ye,{selectedCourseId:s,setSelectedCourseId:w})}),t(Ze,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(z,{selectedCourseId:s})}),o&&t(Z,{isOpen:f,onClose:y,header:!1,fullScreen:!0,children:t(z,{selectedCourseId:s,isMobileModal:!0,onMobileModalClose:y})})]})});export{kt as default};
//# sourceMappingURL=dictionary-BL_sRJMO.js.map
