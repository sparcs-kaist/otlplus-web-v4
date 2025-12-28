import{p as M,r as l,z as O,w as Z}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{j as t,a as c,u as N,F as v}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{n as o,F as a}from"./FlexWrapper-B6Hxm4Zw.js";import{M as J}from"./Modal-CSBiQWpb.js";import{W as Q}from"./Widget-e9ONaX_D.js";import{m as X,C as _}from"./proxy-M61RR9Dn.js";import{e as D,i as F,I as $,q as ee,w as j,x as te,u as oe,g as B}from"./useIsDevice-BI9iNnny.js";import{u as q,b as G,C as re,S as ne}from"./Credits-BpSjsbqw.js";import{L as T}from"./LoadingCircle-DQUvw6aP.js";import{R as ie}from"./ReviewWritingBlock-B2-iXGnJ.js";import{T as p}from"./Typography-DeI78L6T.js";import{p as ce,R as le}from"./ReviewBlock-Da1PWlxH.js";import{u as S}from"./index-CpXhtjwI.js";import{c as R,S as ae}from"./checkEmpty-CP7j_QUX.js";import{T as se}from"./Trans-V1654CDj.js";import"./index-Dp_NaqTT.js";import"./env-Ce6l_y9N.js";import"./infiniteQueryBehavior-Ca-qwHap.js";import"./TextInputArea-Bo62u37i.js";import"./useUserStore-DouDTYse.js";const U=D(M.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),de=D(M.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),V=o.div`
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
`,ge=({selected:e=!1,chipIndex:r="",chipText:s="",...d})=>t(e?ue:pe,{...d,children:t(()=>c(he,{children:[t(p,{type:"NormalBold",children:r}),t(p,{type:"Normal",children:s})]}),{})}),fe=o(X.div)`
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
`,me=o(a)`
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
`,ye=({courseDetail:e,selectedProfessorId:r,setSelectedProfessorId:s})=>{const{t:d}=S(),n=N(),u=F("mobile"),g=l.useRef(null),[x,f]=l.useState(!0);l.useEffect(()=>{g.current&&(g.current.scrollLeft=g.current.scrollWidth)},[e]),l.useEffect(()=>{if(u){f(!0);return}const i=e?.history?.some(m=>m.classes.length>4)??!1;f(i)},[u,e]);const w=i=>{if(i.deltaY===0)return;const m=i.currentTarget;m.scrollLeft=m.scrollLeft+i.deltaY};return c(v,{children:[c(a,{direction:"row",gap:0,justify:"space-between",style:{width:"100%"},onClick:()=>f(i=>!i),children:[t(p,{type:"NormalBold",color:"Text.default",children:d("dictionary.courseHistory")}),t($,{size:20,color:n.colors.Text.default,children:t(xe,{isfolded:x})})]}),t(fe,{ref:g,initial:{height:x?0:"auto"},animate:{height:x?0:"auto"},transition:{duration:.2,ease:"easeInOut"},onWheel:w,children:[...e?.history||[]].reverse().map((i,m)=>c(me,{direction:"column",gap:6,align:"center",children:[c(p,{type:"Normal",color:"Text.default",children:[i.year," ",ee(i.semester)]}),i.classes.length===0?t(we,{color:"Text.disable",type:"Normal",children:d("dictionary.notOffered")}):t(a,{direction:"column",gap:4,align:"center",children:i.classes.map((y,h)=>t(ge,{selected:r==(y.professors[0]?.id??-1),chipIndex:y.classNo,chipText:ce(y.professors),onClick:()=>{r===(y.professors[0]?.id??-1)?s(null):s(y.professors[0]?.id??null)}},h))})]},m))})]})},be=o(a)`
    width: 100%;
`,Ce=o(a)`
    width: 300px;
    padding: 10px;
`,ke=o(a)`
    flex: 1 0 0;
`,ve=o(p)`
    white-space: nowrap;
`,Te=({courseDetail:e})=>{const{t:r}=S();return c(v,{children:[t(be,{direction:"column",gap:8,children:[[r("common.class"),e?.department.name+", "+e?.type],[r("common.description"),e?.summary]].map(([s,d],n)=>c(a,{direction:"row",gap:6,children:[t(ve,{type:"NormalBold",color:"Text.default",children:s}),t(p,{type:"Normal",color:"Text.default",children:d})]},n))}),t(Ce,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,r("common.numClasses")],[e?.expDuration,r("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,r("common.credit")]].map(([s,d],n)=>c(ke,{direction:"column",gap:0,align:"center",children:[t(p,{type:"Bigger",color:"Text.default",children:s}),t(p,{type:"Smaller",color:"Text.default",children:d})]},n))})]})},K=o.div`
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
`,Se=o(K)`
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
`,Ne=o.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,$e=({selected:e=!1,chipText:r="",...s})=>t(e?Be:Se,{...s,children:t(()=>t(Ne,{children:r}),{})}),Ie=o(a)`
    width: 300px;
    padding: 10px;
`,Le=o(a)`
    flex: 1 0 0;
`,je=20,Ee=({selectedCourseId:e,selectedProfessorId:r,writableReviewProps:s})=>{const{t:d}=S(),[n,u]=l.useState("all"),[g,x]=l.useState(!1),{query:f,setParams:w,data:i}=q("GET","/reviews",{infinites:["reviews"],limit:je,enabled:g}),{ref:m,inView:y}=G();return l.useEffect(()=>{w({mode:"default",courseId:e||void 0,professorId:r||void 0})},[]),l.useEffect(()=>{w(h=>({...h??{},...e!==null?{courseId:e}:{},...r!==null?{professorId:r}:{}})),x(e!==null)},[r,e]),l.useEffect(()=>{y&&f.hasNextPage&&!f.isFetchingNextPage&&f.fetchNextPage()},[y]),c(v,{children:[t(p,{type:"NormalBold",color:"Text.default",children:d("dictionary.review")}),c(a,{direction:"column",gap:6,children:[t(p,{type:"NormalBold",color:"Text.default",children:d("dictionary.reviewLanguage")}),t(a,{direction:"row",gap:6,children:["all","english"].map(h=>t($e,{selected:n==h,chipText:d(`dictionary.reviewLanguageOptions.${h}`),onClick:()=>u(h)},h))})]}),i===null&&f.isLoading?t(T,{}):c(v,{children:[t(a,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:t(Ie,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[j(i?.averageGrade,i?.reviews.length),d("common.grade")],[j(i?.averageLoad,i?.reviews.length),d("common.load")],[j(i?.averageSpeech,i?.reviews.length),d("common.speech")]].map(([h,C],I)=>c(Le,{direction:"column",gap:0,align:"center",children:[t(p,{type:"Bigger",color:"Text.default",children:h}),t(p,{type:"Smaller",color:"Text.default",children:C})]},I))})}),s.map((h,C)=>te(ie,{...h,key:C})),i?.reviews.map(h=>n==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(h.content)?null:t(le,{review:h,linkToDictionary:!1},h.id)),f.hasNextPage&&t(T,{ref:m})]})]})},We=o(a)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,E=o(a)`
    width: 100%;
`,Pe=o(a)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`,H=o.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,z=({selectedCourseId:e,isMobileModal:r=!1,onMobileModalClose:s})=>{const d=N(),{query:n}=oe("GET",`/courses/${e}`,{enabled:e!==null}),[u,g]=l.useState(null),[x,f]=l.useState([]);return l.useEffect(()=>{if(n.data){const w=[];n.data.history.forEach(i=>{if(i.myLectureId!==null){const m=i.classes.find(y=>y.lectureId===i.myLectureId)?.professors||[];w.push({name:n.data.name,lectureId:i.myLectureId,professors:m,year:i.year,semester:i.semester})}}),f(w)}},[n.data]),l.useEffect(()=>{g(null)},[e]),t(We,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?n.isLoading?t(T,{}):c(v,{children:[c(Pe,{direction:"column",gap:2,align:"center",justify:"center",children:[c(a,{direction:"row",align:"center",gap:8,justify:r?"space-between":"center",style:{width:"100%"},children:[r&&t("div",{style:{width:20}}),t(p,{type:"Bigger",color:"Text.default",children:n.data?.name}),r&&t($,{size:20,onClick:s,color:d.colors.Text.default,children:t(_,{})})]}),t(p,{type:"Big",color:"Text.default",children:n.data?.code})]}),t(E,{direction:"column",gap:10,align:"center",children:t(Te,{courseDetail:n.data})}),t(H,{}),t(E,{direction:"column",gap:10,children:t(ye,{courseDetail:n.data,selectedProfessorId:u,setSelectedProfessorId:g})}),t(H,{}),t(E,{direction:"column",gap:10,flex:"1 1 auto",children:t(Ee,{selectedCourseId:e,selectedProfessorId:u,writableReviewProps:x})})]}):t(re,{})})},Re=o.div`
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
`,W=o(p)`
    white-space: nowrap;
`,ze=({course:e,isSelected:r,selectCourseId:s})=>{const{t:d}=S(),n=N(),u=l.useCallback(()=>{s(r?null:e.id)},[r,e.id,s]);return c(Re,{onClick:u,selected:r,children:[c(a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[c(a,{direction:"row",gap:6,align:"center",children:[t($,{size:12,color:e.open?n.colors.Highlight.default:n.colors.Text.disable,children:t(U,{})}),t(p,{type:"NormalBold",color:"Text.default",children:e.name}),t(p,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&t(p,{type:"Normal",color:"Text.lighter",children:d("common.completedCourse")})]}),t(He,{}),c(a,{direction:"column",gap:4,children:[c(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:d("common.class")}),c(p,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),c(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:d("common.professor")}),t(p,{type:"Normal",color:"Text.default",children:e.professors.map(g=>g.name).join(", ")})]}),c(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:d("common.description")}),t(p,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},Ae=l.memo(ze),Me=o(a)`
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
`,qe=o(a)`
    white-space: nowrap;
`,Ge=o(a)`
    flex-grow: 1;
    height: 36px;
`,Ue=o(a)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,A=20;function Ve({selectedCourseId:e,setSelectedCourseId:r}){const{t:s}=S(),d=N(),[n]=O(),[u,g]=l.useState(0),[x,f]=l.useState(!1),[w,i]=l.useState({courses:[],totalCount:0}),{query:m,setParams:y,data:h}=q("GET","/courses",{infinites:["courses"],limit:A,enabled:x}),{inView:C,ref:I}=G({threshold:0});l.useEffect(()=>{C&&m.hasNextPage&&!m.isFetchingNextPage&&m.fetchNextPage()},[C]),l.useEffect(()=>{const b=n.get("term")?parseInt(n.get("term")):void 0,k={keyword:n.get("keyword")||"",type:n.getAll("type"),department:n.getAll("department").map(L=>parseInt(L)),level:n.getAll("level").map(L=>parseInt(L))};b!==void 0&&(k.term=b),!R(k)&&P(k)},[]),l.useEffect(()=>{h!==void 0&&i(h)},[h]),l.useEffect(()=>{u==0&&x==!1||(i({courses:[],totalCount:0}),y(b=>({...b,order:["code","popular","studentCount"][u]??"code",offset:0})),f(!0))},[u]);const P=b=>{if(R(b)){alert(s("common.search.empty"));return}const k={...b,order:["code","popular","studentCount"][u]??"code",offset:0,limit:A};y(k),f(!0)};return c(Me,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[t(Oe,{children:t(ae,{options:["type","department","level","term"],onSearch:P})}),w.courses.length!==0?c(v,{children:[c(a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[t(Fe,{color:"Text.default",children:t(se,{i18nKey:"dictionary.courseCountInfo",count:h?.totalCount,components:{bold:t(p,{type:"NormalBold",children:void 0}),icon:t($,{size:12,color:d.colors.Highlight.default,children:t(U,{})}),space:t(v,{children:" "})}})}),c(qe,{direction:"row",gap:8,align:"center",children:[t(p,{type:"NormalBold",color:"Text.default",children:s("dictionary.sort")}),t(Ge,{direction:"row",gap:0,children:t(ne,{options:[s("dictionary.sortOptions.code"),s("dictionary.sortOptions.popularity"),s("dictionary.sortOptions.studentCount")],setSelectedOption:g,selectedOption:u})})]})]}),c(Ue,{direction:"column",gap:12,children:[w.courses.map((b,k)=>t(Ae,{course:b,isSelected:e==b.id,selectCourseId:r},k)),m.hasNextPage&&t(T,{ref:I})]})]}):m.isLoading?t(T,{}):t(De,{type:"Bigger",color:"Text.placeholder",children:s("dictionary.noResults")})]})}const Ke=o(a)`
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
`,mt=Z(function(){const r=F("tablet"),[s]=O(),[d,n]=l.useState(!1),[u,g]=l.useState(null);l.useEffect(()=>{const f=s.get("courseId");if(f){const w=parseInt(f,10);isNaN(w)?g(null):g(w)}},[]),l.useEffect(()=>{r?u!==null&&n(!0):n(!1)},[r]),l.useEffect(()=>{r&&u!==null&&n(!0)},[u]);const x=l.useCallback(()=>{n(!1),g(null)},[]);return c(Ke,{direction:"row",align:"stretch",justify:"center",gap:12,children:[t(Ye,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(Ve,{selectedCourseId:u,setSelectedCourseId:g})}),t(Ze,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(z,{selectedCourseId:u})}),r&&t(J,{isOpen:d,onClose:x,header:!1,fullScreen:!0,children:t(z,{selectedCourseId:u,isMobileModal:!0,onMobileModalClose:x})})]})});export{mt as default};
//# sourceMappingURL=dictionary-BM85dQ50.js.map
