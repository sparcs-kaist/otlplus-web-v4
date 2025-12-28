import{p as O,r as c,z as W,w as Z}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{j as t,a as i,u as I,F as v}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{n as o,F as l}from"./FlexWrapper-B6Hxm4Zw.js";import{M as J}from"./Modal-CSBiQWpb.js";import{W as Q}from"./Widget-e9ONaX_D.js";import{m as X,C as _}from"./proxy-M61RR9Dn.js";import{u as D,b as F,C as ee,S as te}from"./Credits-CyNrwKQK.js";import{L as S}from"./LoadingCircle-DQUvw6aP.js";import{R as oe}from"./ReviewWritingBlock-BMrusHDO.js";import{e as q,i as G,I as N,q as re,w as j,x as ne,u as ie,g as B}from"./useIsDevice-BI9iNnny.js";import{T as p}from"./Typography-DeI78L6T.js";import{p as ce,R as le}from"./ReviewBlock-e2bUKcO9.js";import{u as T}from"./index-CpXhtjwI.js";import{c as H,S as ae}from"./checkEmpty-CP7j_QUX.js";import{T as se}from"./Trans-V1654CDj.js";import"./index-Dp_NaqTT.js";import"./infiniteQueryBehavior-Ca-qwHap.js";import"./TextInputArea-Bo62u37i.js";import"./useUserStore-DouDTYse.js";import"./env-Ce6l_y9N.js";const U=q(O.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),de=q(O.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),V=o.div`
    width: 150px;
    height: 28px;
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,pe=o(V)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ue=o(V)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,he=o.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
`,ge=({selected:e=!1,chipIndex:r="",chipText:a="",...s})=>t(e?ue:pe,{...s,children:t(()=>i(he,{children:[t(p,{type:"NormalBold",children:r}),t(p,{type:"Normal",children:a})]}),{})}),fe=o(X.div)`
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    gap: 20px;

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
`,me=o(l)`
    height: 100%;
`,xe=o(de)`
    transform: ${e=>e.isfolded?"rotate(0deg)":"rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
`,we=o(p)`
    width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,ye=({courseDetail:e,selectedProfessorId:r,setSelectedProfessorId:a})=>{const{t:s}=T(),u=I(),m=G("mobile"),d=c.useRef(null),[w,x]=c.useState(!0);c.useEffect(()=>{d.current&&(d.current.scrollLeft=d.current.scrollWidth)},[e]),c.useEffect(()=>{if(m){x(!0);return}const n=e?.history?.some(h=>h.classes.length>4)??!1;x(n)},[m,e]);const y=n=>{if(n.deltaY===0)return;const h=n.currentTarget;h.scrollLeft=h.scrollLeft+n.deltaY};return i(v,{children:[i(l,{direction:"row",gap:0,justify:"space-between",style:{width:"100%"},onClick:()=>x(n=>!n),children:[t(p,{type:"NormalBold",color:"Text.default",children:s("dictionary.courseHistory")}),t(N,{size:20,color:u.colors.Text.default,children:t(xe,{isfolded:w})})]}),t(fe,{ref:d,initial:{height:w?0:"auto"},animate:{height:w?0:"auto"},transition:{duration:.2,ease:"easeInOut"},onWheel:y,children:[...e?.history||[]].reverse().map((n,h)=>i(me,{direction:"column",gap:6,align:"center",children:[i(p,{type:"Normal",color:"Text.default",children:[n.year," ",re(n.semester)]}),n.classes.length===0?t(we,{color:"Text.disable",type:"Normal",children:s("dictionary.notOffered")}):t(l,{direction:"column",gap:4,align:"center",children:n.classes.map((f,g)=>t(ge,{selected:r==(f.professors[0]?.id??-1),chipIndex:f.classNo,chipText:ce(f.professors),onClick:()=>{r===(f.professors[0]?.id??-1)?a(null):a(f.professors[0]?.id??null)}},g))})]},h))})]})},be=o(l)`
    width: 100%;
`,Ce=o(l)`
    width: 300px;
    padding: 10px;
`,ke=o(l)`
    flex: 1 0 0;
`,ve=o(p)`
    white-space: nowrap;
`,Se=({courseDetail:e})=>{const{t:r}=T();return i(v,{children:[t(be,{direction:"column",gap:8,children:[[r("common.class"),e?.department.name+", "+e?.type],[r("common.description"),e?.summary]].map(([a,s],u)=>i(l,{direction:"row",gap:6,children:[t(ve,{type:"NormalBold",color:"Text.default",children:a}),t(p,{type:"Normal",color:"Text.default",children:s})]},u))}),t(Ce,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,r("common.numClasses")],[e?.expDuration,r("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,r("common.credit")]].map(([a,s],u)=>i(ke,{direction:"column",gap:0,align:"center",children:[t(p,{type:"Bigger",color:"Text.default",children:a}),t(p,{type:"Smaller",color:"Text.default",children:s})]},u))})]})},K=o.div`
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
`,Te=o(K)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,Be=o(K)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,Ie=o.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,Ne=({selected:e=!1,chipText:r="",...a})=>t(e?Be:Te,{...a,children:t(()=>t(Ie,{children:r}),{})}),$e=o(l)`
    width: 300px;
    padding: 10px;
`,Le=o(l)`
    flex: 1 0 0;
`,je=20,Ee=({selectedCourseId:e,selectedProfessorId:r,writableReviewProps:a})=>{const{t:s}=T(),[u,m]=c.useState("all"),[d,w]=c.useState(!1),{query:x,setParams:y,data:n}=D("GET","/reviews",{infinites:["reviews"],limit:je,enabled:d}),{ref:h,inView:f}=F();return c.useEffect(()=>{y({mode:"default",courseId:e||void 0,professorId:r||void 0})},[]),c.useEffect(()=>{y(g=>({...g??{},...e!==null?{courseId:e}:{},...r!==null?{professorId:r}:{}})),w(e!==null)},[r,e]),c.useEffect(()=>{f&&x.hasNextPage&&!x.isFetchingNextPage&&x.fetchNextPage()},[f]),i(v,{children:[t(p,{type:"NormalBold",color:"Text.default",children:s("dictionary.review")}),i(l,{direction:"column",gap:6,children:[t(p,{type:"NormalBold",color:"Text.default",children:s("dictionary.reviewLanguage")}),t(l,{direction:"row",gap:6,children:["all","english"].map(g=>t(Ne,{selected:u==g,chipText:s(`dictionary.reviewLanguageOptions.${g}`),onClick:()=>m(g)},g))})]}),n===null&&x.isLoading?t(S,{}):i(v,{children:[t(l,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:t($e,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[j(n?.averageGrade,n?.reviews.length),s("common.grade")],[j(n?.averageLoad,n?.reviews.length),s("common.load")],[j(n?.averageSpeech,n?.reviews.length),s("common.speech")]].map(([g,C],$)=>i(Le,{direction:"column",gap:0,align:"center",children:[t(p,{type:"Bigger",color:"Text.default",children:g}),t(p,{type:"Smaller",color:"Text.default",children:C})]},$))})}),a.map((g,C)=>ne(oe,{...g,key:C})),n?.reviews.map(g=>u==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(g.content)?null:t(le,{review:g,linkToDictionary:!1},g.id)),x.hasNextPage&&t(S,{ref:h})]})]})},Pe=o(l)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,E=o(l)`
    width: 100%;
`,We=o(l)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`,z=o.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,A=({selectedCourseId:e,isMobileModal:r=!1,onMobileModalClose:a})=>{const s=I(),[u,m]=W(),{query:d}=ie("GET",`/courses/${e}`,{enabled:e!==null}),[w,x]=c.useState(null),[y,n]=c.useState([]);return c.useEffect(()=>{if(d.data){const h=[];d.data.history.forEach(f=>{if(f.myLectureId!==null){const g=f.classes.find(C=>C.lectureId===f.myLectureId)?.professors||[];h.push({name:d.data.name,lectureId:f.myLectureId,professors:g,year:f.year,semester:f.semester})}}),n(h)}},[d.data]),c.useEffect(()=>{x(null);const h=u.get("professorId");if(h){const f=parseInt(h,10);isNaN(f)?x(null):(x(f),m({}))}},[e]),t(Pe,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?d.isLoading?t(S,{}):i(v,{children:[i(We,{direction:"column",gap:2,align:"center",justify:"center",children:[i(l,{direction:"row",align:"center",gap:8,justify:r?"space-between":"center",style:{width:"100%"},children:[r&&t("div",{style:{width:20}}),t(p,{type:"Bigger",color:"Text.default",children:d.data?.name}),r&&t(N,{size:20,onClick:a,color:s.colors.Text.default,children:t(_,{})})]}),t(p,{type:"Big",color:"Text.default",children:d.data?.code})]}),t(E,{direction:"column",gap:10,align:"center",children:t(Se,{courseDetail:d.data})}),t(z,{}),t(E,{direction:"column",gap:10,children:t(ye,{courseDetail:d.data,selectedProfessorId:w,setSelectedProfessorId:x})}),t(z,{}),t(E,{direction:"column",gap:10,flex:"1 1 auto",children:t(Ee,{selectedCourseId:e,selectedProfessorId:w,writableReviewProps:y})})]}):t(ee,{})})},Re=o.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({selected:e,theme:r})=>e?r.colors.Background.Block.dark:r.colors.Background.Block.default};
`,He=o.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,P=o(p)`
    white-space: nowrap;
`,ze=({course:e,isSelected:r,selectCourseId:a})=>{const{t:s}=T(),u=I(),m=c.useCallback(()=>{a(r?null:e.id)},[r,e.id,a]);return i(Re,{onClick:m,selected:r,children:[i(l,{direction:"row",gap:0,justify:"space-between",align:"center",children:[i(l,{direction:"row",gap:6,align:"center",children:[t(N,{size:12,color:e.open?u.colors.Highlight.default:u.colors.Text.disable,children:t(U,{})}),t(p,{type:"NormalBold",color:"Text.default",children:e.name}),t(p,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&t(p,{type:"Normal",color:"Text.lighter",children:s("common.completedCourse")})]}),t(He,{}),i(l,{direction:"column",gap:4,children:[i(l,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.class")}),i(p,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),i(l,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.professor")}),t(p,{type:"Normal",color:"Text.default",children:e.professors.map(d=>d.name).join(", ")})]}),i(l,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.description")}),t(p,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},Ae=c.memo(ze),Me=o(l)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Oe=o.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,De=o(p)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Fe=o(p)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
`,qe=o(l)`
    white-space: nowrap;
`,Ge=o(l)`
    flex-grow: 1;
    height: 36px;
`,Ue=o(l)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,M=20;function Ve({selectedCourseId:e,setSelectedCourseId:r}){const{t:a}=T(),s=I(),[u]=W(),[m,d]=c.useState(0),[w,x]=c.useState(!1),[y,n]=c.useState({courses:[],totalCount:0}),{query:h,setParams:f,data:g}=D("GET","/courses",{infinites:["courses"],limit:M,enabled:w}),{inView:C,ref:$}=F({threshold:0});c.useEffect(()=>{C&&h.hasNextPage&&!h.isFetchingNextPage&&h.fetchNextPage()},[C]),c.useEffect(()=>{const b=u.get("term")?parseInt(u.get("term")):void 0,k={keyword:u.get("keyword")||"",type:u.getAll("type"),department:u.getAll("department").map(L=>parseInt(L)),level:u.getAll("level").map(L=>parseInt(L))};b!==void 0&&(k.term=b),!H(k)&&R(k)},[]),c.useEffect(()=>{g!==void 0&&n(g)},[g]),c.useEffect(()=>{m==0&&w==!1||(n({courses:[],totalCount:0}),f(b=>({...b,order:["code","popular","studentCount"][m]??"code",offset:0})),x(!0))},[m]);const R=b=>{if(H(b)){alert(a("common.search.empty"));return}const k={...b,order:["code","popular","studentCount"][m]??"code",offset:0,limit:M};f(k),x(!0)};return i(Me,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[t(Oe,{children:t(ae,{options:["type","department","level","term"],onSearch:R})}),y.courses.length!==0?i(v,{children:[i(l,{direction:"row",gap:0,justify:"space-between",align:"center",children:[t(Fe,{color:"Text.default",children:t(se,{i18nKey:"dictionary.courseCountInfo",count:g?.totalCount,components:{bold:t(p,{type:"NormalBold",children:void 0}),icon:t(N,{size:12,color:s.colors.Highlight.default,children:t(U,{})}),space:t(v,{children:" "})}})}),i(qe,{direction:"row",gap:8,align:"center",children:[t(p,{type:"NormalBold",color:"Text.default",children:a("dictionary.sort")}),t(Ge,{direction:"row",gap:0,children:t(te,{options:[a("dictionary.sortOptions.code"),a("dictionary.sortOptions.popularity"),a("dictionary.sortOptions.studentCount")],setSelectedOption:d,selectedOption:m})})]})]}),i(Ue,{direction:"column",gap:12,children:[y.courses.map((b,k)=>t(Ae,{course:b,isSelected:e==b.id,selectCourseId:r},k)),h.hasNextPage&&t(S,{ref:$})]})]}):h.isLoading?t(S,{}):t(De,{type:"Bigger",color:"Text.placeholder",children:a("dictionary.noResults")})]})}const Ke=o(l)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${B.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${B.mobile} {
        padding: 0 8px 12px 8px;
    }
`,Y=o(Q)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`,Ye=o(Y)`
    max-width: 508px;
    flex: 1 1 0;

    ${B.tablet} {
        max-width: none;
    }
`,Ze=o(Y)`
    flex: 1 1 0;
    max-width: 976px;

    ${B.tablet} {
        display: none;
    }
`,mt=Z(function(){const r=G("tablet"),[a,s]=W(),[u,m]=c.useState(!1),[d,w]=c.useState(null);c.useEffect(()=>{const y=a.get("courseId");if(y){const n=parseInt(y,10);isNaN(n)?w(null):(w(n),s(h=>(h.delete("courseId"),h)))}},[]),c.useEffect(()=>{r?d!==null&&m(!0):m(!1)},[r]),c.useEffect(()=>{r&&d!==null&&m(!0)},[d]);const x=c.useCallback(()=>{m(!1),w(null)},[]);return i(Ke,{direction:"row",align:"stretch",justify:"center",gap:12,children:[t(Ye,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(Ve,{selectedCourseId:d,setSelectedCourseId:w})}),t(Ze,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(A,{selectedCourseId:d})}),r&&t(J,{isOpen:u,onClose:x,header:!1,fullScreen:!0,children:t(A,{selectedCourseId:d,isMobileModal:!0,onMobileModalClose:x})})]})});export{mt as default};
//# sourceMappingURL=dictionary-BONGDRIp.js.map
