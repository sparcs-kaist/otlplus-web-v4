import{p as O,r as c,z as P,w as Z}from"./chunk-EPOLDU6W-B8pbzjzn.js";import{j as t,a as i,u as N,F as v}from"./emotion-react-jsx-runtime.browser.esm-CDSRZb9c.js";import{n as r,F as a}from"./FlexWrapper-B3ayG6XS.js";import{M as J}from"./Modal-uLtOsEsy.js";import{W as Q}from"./Widget-D_zg5vut.js";import{m as _,C as ee}from"./proxy-0Eh_byPi.js";import{u as F,b as G,C as te,S as oe}from"./Credits-D6mGogts.js";import{L as S}from"./LoadingCircle-ByjUXXHJ.js";import{R as re}from"./ReviewWritingBlock-Dxr-x0I2.js";import{e as V,g as q,I as $,k as ne,t as E,v as ie,u as ce}from"./useIsDevice-B4XmIr43.js";import{T as u}from"./Typography-BI6YlVsB.js";import{I as le}from"./IconButton-BQahT8lO.js";import{p as ae,R as se}from"./ReviewBlock-FBf6qgCF.js";import{u as B}from"./useTranslation-DcygOF4d.js";import{c as H,S as de}from"./checkEmpty-DEFte7zt.js";import{t as M}from"./index-CjmaIs_R.js";import{T as pe}from"./Trans-BHipX7aS.js";import{m as I}from"./media-D8HfPojw.js";import"./index-DkMko15w.js";import"./infiniteQueryBehavior-CyNQWS9g.js";import"./TextInputArea-Cqpc5ClC.js";import"./useUserStore-BXC7wunu.js";import"./env-DlHMDNNS.js";const U=V(O.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),ue=V(O.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),K=r.div`
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
`,he=r(K)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,fe=r(K)`
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
`,ge=({selected:e=!1,chipIndex:o="",chipText:d="",...p})=>t(e?fe:he,{...p,children:t(()=>i(me,{children:[t(u,{type:"NormalBold",children:o}),t(u,{type:"Normal",children:d})]}),{})}),xe=r(_.div)`
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
`,ke=({courseDetail:e,selectedProfessorId:o,setSelectedProfessorId:d})=>{const{t:p}=B(),f=N(),x=q("mobile"),s=c.useRef(null),[w,y]=c.useState(!0);return c.useEffect(()=>{s.current&&(s.current.scrollLeft=s.current.scrollWidth)},[e]),c.useEffect(()=>{if(x){y(!0);return}const l=e?.history?.some(m=>m.classes.length>4)??!1;y(l)},[x,e]),c.useEffect(()=>{const l=s.current;if(!l)return;const m=n=>{const g=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY;if(g===0)return;const h=l.scrollWidth-l.clientWidth;if(h<=0)return;const k=l.scrollLeft+g;(g>0&&l.scrollLeft<h||g<0&&l.scrollLeft>0)&&(n.preventDefault(),n.stopPropagation(),l.scrollLeft=Math.min(h,Math.max(0,k)))};return l.addEventListener("wheel",m,{passive:!1,capture:!0}),()=>{l.removeEventListener("wheel",m,{capture:!0})}},[]),i(v,{children:[i(a,{direction:"row",gap:0,justify:"space-between",align:"center",style:{width:"100%",cursor:"pointer"},onClick:()=>y(l=>!l),children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.courseHistory")}),t(le,{onClick:()=>{},children:t($,{size:20,color:f.colors.Text.default,onClick:()=>{},children:t(we,{isfolded:w.toString()})})})]}),i(xe,{ref:s,initial:{height:w?0:"auto"},animate:{height:w?0:"auto"},transition:{duration:.2,ease:"easeInOut"},children:[t("div",{}),t(a,{direction:"row",gap:20,style:{minWidth:"min-content"},children:[...e?.history||[]].reverse().map((l,m)=>i(ye,{direction:"column",gap:6,align:"center",children:[i(u,{type:"Normal",color:"Text.default",children:[l.year," ",ne(l.semester)]}),l.classes.length===0?t(be,{color:"Text.disable",type:"Normal",children:p("dictionary.notOffered")}):t(a,{direction:"column",gap:4,align:"stretch",children:l.classes.map((n,g)=>t(ge,{selected:o==(n.professors[0]?.id??-1),chipIndex:n.classNo+" "+n.subtitle,chipText:ae(n.professors),onClick:()=>{o===(n.professors[0]?.id??-1)?d(null):d(n.professors[0]?.id??null)}},g))})]},m))})]})]})},Ce=r(a)`
    width: 100%;
`,ve=r(a)`
    width: 300px;
    padding: 10px;
`,Se=r(a)`
    flex: 1 0 0;
`,Be=r(u)`
    white-space: nowrap;
`,Te=({courseDetail:e})=>{const{t:o}=B();return i(v,{children:[t(Ce,{direction:"column",gap:8,children:[[o("common.class"),e?.department.name+", "+e?.type],[o("common.description"),e?.summary]].map(([d,p],f)=>i(a,{direction:"row",gap:6,children:[t(Be,{type:"NormalBold",color:"Text.default",children:d}),t(u,{type:"Normal",color:"Text.default",children:p})]},f))}),t(ve,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,o("common.numClasses")],[e?.expDuration,o("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,o("common.credit")]].map(([d,p],f)=>i(Se,{direction:"column",gap:0,align:"center",children:[t(u,{type:"Bigger",color:"Text.default",children:d}),t(u,{type:"Smaller",color:"Text.default",children:p})]},f))})]})},X=r.div`
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
`,Ie=r(X)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,Ne=r(X)`
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
`,We=20,Pe=({selectedCourseId:e,selectedProfessorId:o,writableReviewProps:d})=>{const{t:p}=B(),[f,x]=c.useState("all"),[s,w]=c.useState(!1),{query:y,setParams:l,data:m}=F("GET","/reviews",{infinites:["reviews"],limit:We,enabled:s}),{ref:n,inView:g}=G();return c.useEffect(()=>{l({mode:"default",courseId:e||void 0,professorId:o||void 0})},[]),c.useEffect(()=>{l(h=>{const k=h??{};return o===null&&delete k.professorId,{...k,...e!==null?{courseId:e}:{},...o!==null?{professorId:o}:{}}}),w(e!==null)},[o,e]),c.useEffect(()=>{g&&y.hasNextPage&&!y.isFetchingNextPage&&y.fetchNextPage()},[g]),i(v,{children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.review")}),i(a,{direction:"column",gap:6,children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.reviewLanguage")}),t(a,{direction:"row",gap:6,children:["all","english"].map(h=>t(Le,{selected:f==h,chipText:p(`dictionary.reviewLanguageOptions.${h}`),onClick:()=>x(h)},h))})]}),m===null&&y.isLoading?t(S,{}):i(v,{children:[t(a,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:t(Ee,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[E(m?.averageGrade,m?.reviews.length),p("common.grade")],[E(m?.averageLoad,m?.reviews.length),p("common.load")],[E(m?.averageSpeech,m?.reviews.length),p("common.speech")]].map(([h,k],T)=>i(je,{direction:"column",gap:0,align:"center",children:[t(u,{type:"Bigger",color:"Text.default",children:h}),t(u,{type:"Smaller",color:"Text.default",children:k})]},T))})}),d.map((h,k)=>ie(re,{...h,key:k})),m?.reviews.map(h=>f==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(h.content)?null:t(se,{review:h,linkToDictionary:!1},h.id)),y.hasNextPage&&t(S,{ref:n})]})]})},Me=r(a)`
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
`,z=r.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,A=({selectedCourseId:e,isMobileModal:o=!1,onMobileModalClose:d})=>{const p=N(),[f,x]=P(),{query:s}=ce("GET",`/courses/${e}`,{enabled:e!==null}),[w,y]=c.useState(null),[l,m]=c.useState([]);return c.useEffect(()=>{if(s.data){const n=[];s.data.history.forEach(g=>{if(g.myLectureId!==null){const h=g.classes.find(k=>k.lectureId===g.myLectureId)?.professors||[];n.push({name:s.data.name,lectureId:g.myLectureId,professors:h,year:g.year,semester:g.semester})}}),m(n)}},[s.data]),c.useEffect(()=>{y(null);const n=f.get("professorId");if(n){const g=parseInt(n,10);isNaN(g)?y(null):(y(g),x({}))}},[e]),t(Me,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?s.isLoading?t(S,{}):i(v,{children:[i(Re,{direction:"column",gap:2,align:"center",justify:"center",children:[i(a,{direction:"row",align:"center",gap:8,justify:o?"space-between":"center",style:{width:"100%"},children:[o&&t("div",{style:{width:20}}),t(u,{type:"Bigger",color:"Text.default",children:s.data?.name}),o&&t($,{size:20,onClick:d,color:p.colors.Text.default,children:t(ee,{})})]}),t(u,{type:"Big",color:"Text.default",children:s.data?.code})]}),t(j,{direction:"column",gap:10,align:"center",children:t(Te,{courseDetail:s.data})}),t(z,{}),t(j,{direction:"column",gap:0,children:t(ke,{courseDetail:s.data,selectedProfessorId:w,setSelectedProfessorId:y})}),t(z,{}),t(j,{direction:"column",gap:10,flex:"1 1 auto",children:t(Pe,{selectedCourseId:e,selectedProfessorId:w,writableReviewProps:l})})]}):t(te,{})})},He=r.div`
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
`,W=r(u)`
    white-space: nowrap;
`,Ae=({course:e,isSelected:o,selectCourseId:d})=>{const{t:p}=B(),f=N(),x=c.useCallback(()=>{o?d(null):(d(e.id),M("Select Course",{courseId:e.id,courseCode:e.code,courseName:e.name,department:e.department.name}))},[o,e.id,e.code,e.name,e.department.name,d]);return i(He,{onClick:x,selected:o,children:[i(a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[i(a,{direction:"row",gap:6,align:"center",children:[t($,{size:12,color:e.open?f.colors.Highlight.default:f.colors.Text.disable,children:t(U,{})}),t(u,{type:"NormalBold",color:"Text.default",children:e.name}),t(u,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&t(u,{type:"Normal",color:"Text.lighter",children:p("common.completedCourse")})]}),t(ze,{}),i(a,{direction:"column",gap:4,children:[i(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.class")}),i(u,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),i(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.professor")}),t(u,{type:"Normal",color:"Text.default",children:e.professors.map(s=>s.name).join(", ")})]}),i(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.description")}),t(u,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},De=c.memo(Ae),Oe=r(a)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Fe=r.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Ge=r(u)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ve=r(u)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
`,qe=r(a)`
    white-space: nowrap;
`,Ue=r(a)`
    flex-grow: 1;
    height: 36px;
`,Ke=r(a)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,D=20;function Xe({selectedCourseId:e,setSelectedCourseId:o}){const{t:d}=B(),p=N(),[f]=P(),[x,s]=c.useState(0),[w,y]=c.useState(!1),[l,m]=c.useState({courses:[],totalCount:0}),{query:n,setParams:g,data:h}=F("GET","/courses",{infinites:["courses"],limit:D,enabled:w}),{inView:k,ref:T}=G({threshold:0});c.useEffect(()=>{k&&n.hasNextPage&&!n.isFetchingNextPage&&n.fetchNextPage()},[k]),c.useEffect(()=>{const b=f.get("term")?parseInt(f.get("term")):void 0,C={keyword:f.get("keyword")||"",type:f.getAll("type"),department:f.getAll("department").map(L=>parseInt(L)),level:f.getAll("level").map(L=>parseInt(L))};b!==void 0&&(C.term=b),!H(C)&&R(C)},[]),c.useEffect(()=>{h!==void 0&&m(h)},[h]),c.useEffect(()=>{x==0&&w==!1||(m({courses:[],totalCount:0}),g(b=>({...b,order:["code","popular","studentCount"][x]??"code",offset:0})),y(!0))},[x]);const R=b=>{if(H(b)){alert(d("common.search.empty"));return}const C={...b,order:["code","popular","studentCount"][x]??"code",offset:0,limit:D};g(C),y(!0),M("Search Courses",{keyword:b.keyword??"",department:b.department??"",type:b.type??"",level:b.level??"",term:b.term??""})};return i(Oe,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[t(Fe,{children:t(de,{options:["type","department","level","term"],onSearch:R})}),l.courses.length!==0?i(v,{children:[i(a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[t(Ve,{color:"Text.default",children:t(pe,{i18nKey:"dictionary.courseCountInfo",count:h?.totalCount,components:{bold:t(u,{type:"NormalBold",children:void 0}),icon:t($,{size:12,color:p.colors.Highlight.default,children:t(U,{})}),space:t(v,{children:" "})}})}),i(qe,{direction:"row",gap:8,align:"center",children:[t(u,{type:"NormalBold",color:"Text.default",children:d("dictionary.sort")}),t(Ue,{direction:"row",gap:0,children:t(oe,{options:[d("dictionary.sortOptions.code"),d("dictionary.sortOptions.popularity"),d("dictionary.sortOptions.studentCount")],setSelectedOption:s,selectedOption:x})})]})]}),i(Ke,{direction:"column",gap:12,children:[l.courses.map((b,C)=>t(De,{course:b,isSelected:e==b.id,selectCourseId:o},C)),n.hasNextPage&&t(S,{ref:T})]})]}):n.isLoading?t(S,{}):t(Ge,{type:"Bigger",color:"Text.placeholder",children:d("dictionary.noResults")})]})}const Ye=r(a)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${I.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${I.mobile} {
        padding: 0 8px 12px 8px;
    }
`,Y=r(Q)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`,Ze=r(Y)`
    max-width: 508px;
    flex: 1 1 0;

    ${I.tablet} {
        max-width: none;
    }
`,Je=r(Y)`
    flex: 1 1 0;
    max-width: 976px;

    ${I.tablet} {
        display: none;
    }
`,kt=Z(function(){const o=q("tablet"),[d,p]=P(),[f,x]=c.useState(!1),[s,w]=c.useState(null);c.useEffect(()=>{M("Page View",{page:"Dictionary"})},[]),c.useEffect(()=>{const l=d.get("courseId");if(l){const m=parseInt(l,10);isNaN(m)?w(null):(w(m),p(n=>(n.delete("courseId"),n)))}},[]),c.useEffect(()=>{o?s!==null&&x(!0):x(!1)},[o]),c.useEffect(()=>{o&&s!==null&&x(!0)},[s]);const y=c.useCallback(()=>{x(!1),w(null)},[]);return i(Ye,{direction:"row",align:"stretch",justify:"center",gap:12,children:[t(Ze,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(Xe,{selectedCourseId:s,setSelectedCourseId:w})}),t(Je,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(A,{selectedCourseId:s})}),o&&t(J,{isOpen:f,onClose:y,header:!1,fullScreen:!0,children:t(A,{selectedCourseId:s,isMobileModal:!0,onMobileModalClose:y})})]})});export{kt as default};
//# sourceMappingURL=dictionary-DhKUDm-8.js.map
