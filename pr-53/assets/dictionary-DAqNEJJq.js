import{r as c,y as z,w as J}from"./chunk-UIGDSWPH-C2ktfSeF.js";import{a as D,j as t,b as i,u as N,F as v}from"./emotion-react-jsx-runtime.browser.esm-B1jPEyiZ.js";import{n as o,F as l}from"./FlexWrapper-BDdwpRDn.js";import{M as Q}from"./Modal-Bqnz7EGp.js";import{W as X}from"./Widget-Cls_3vn9.js";import{m as Y,C as _}from"./proxy-CKoRFMkv.js";import{e as O,u as S,t as F,l as $,D as ee,G as j,H as te,k as oe,j as B}from"./useIsDevice-uqoFzfV3.js";import{u as G,b as q,C as re,S as ne}from"./Credits-C1S-XBuc.js";import{L as T}from"./LoadingCircle-DiK_CvvM.js";import{R as ie}from"./ReviewWritingBlock-E5TrW70E.js";import{T as d}from"./Typography-DRNB4_Lw.js";import{p as ce,R as le}from"./ReviewBlock-COY3A7ZL.js";import{c as W,S as ae}from"./checkEmpty-CviyQYIk.js";import{T as se}from"./Trans-DVHtQDOz.js";import"./index-TI0EkQ6W.js";import"./env-CcjFjYdd.js";import"./infiniteQueryBehavior-D3ep4Kpb.js";import"./TextInputArea-DDqar_RN.js";import"./useUserStore-wO41cfx0.js";const U=O(D.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),de=O(D.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),V=o.div`
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
`,ge=({selected:e=!1,chipIndex:r="",chipText:a="",...s})=>t(e?ue:pe,{...s,children:t(()=>i(he,{children:[t(d,{type:"NormalBold",children:r}),t(d,{type:"Normal",children:a})]}),{})}),fe=o(Y.div)`
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
`,ye=o(d)`
    width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,we=({courseDetail:e,selectedProfessorId:r,setSelectedProfessorId:a})=>{const{t:s}=S(),n=N(),p=F("mobile"),f=c.useRef(null),[y,m]=c.useState(!0);return c.useEffect(()=>{f.current&&(f.current.scrollLeft=f.current.scrollWidth)},[e]),c.useEffect(()=>{if(p){m(!0);return}const h=e?.history?.some(u=>u.classes.length>4)??!1;m(h)},[p,e]),i(v,{children:[i(l,{direction:"row",gap:0,justify:"space-between",style:{width:"100%"},onClick:()=>m(h=>!h),children:[t(d,{type:"NormalBold",color:"Text.default",children:s("dictionary.courseHistory")}),t($,{size:20,color:n.colors.Text.default,children:t(xe,{isfolded:y})})]}),t(fe,{ref:f,initial:{height:y?0:"auto"},animate:{height:y?0:"auto"},transition:{duration:.2,ease:"easeInOut"},children:[...e?.history||[]].reverse().map((h,u)=>i(me,{direction:"column",gap:6,align:"center",children:[i(d,{type:"Normal",color:"Text.default",children:[h.year," ",ee(h.semester)]}),h.classes.length===0?t(ye,{color:"Text.disable",type:"Normal",children:s("dictionary.notOffered")}):t(l,{direction:"column",gap:4,align:"center",children:h.classes.map((x,b)=>t(ge,{selected:r==(x.professors[0]?.id??-1),chipIndex:x.classNo,chipText:ce(x.professors),onClick:()=>{r===(x.professors[0]?.id??-1)?a(null):a(x.professors[0]?.id??null)}},b))})]},u))})]})},be=o(l)`
    width: 100%;
`,Ce=o(l)`
    width: 300px;
    padding: 10px;
`,ke=o(l)`
    flex: 1 0 0;
`,ve=o(d)`
    white-space: nowrap;
`,Te=({courseDetail:e})=>{const{t:r}=S();return i(v,{children:[t(be,{direction:"column",gap:8,children:[[r("common.class"),e?.department.name+", "+e?.type],[r("common.description"),e?.summary]].map(([a,s],n)=>i(l,{direction:"row",gap:6,children:[t(ve,{type:"NormalBold",color:"Text.default",children:a}),t(d,{type:"Normal",color:"Text.default",children:s})]},n))}),t(Ce,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,r("common.numClasses")],[e?.expDuration,r("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,r("common.credit")]].map(([a,s],n)=>i(ke,{direction:"column",gap:0,align:"center",children:[t(d,{type:"Bigger",color:"Text.default",children:a}),t(d,{type:"Smaller",color:"Text.default",children:s})]},n))})]})},K=o.div`
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
`,$e=({selected:e=!1,chipText:r="",...a})=>t(e?Be:Se,{...a,children:t(()=>t(Ne,{children:r}),{})}),Ie=o(l)`
    width: 300px;
    padding: 10px;
`,Le=o(l)`
    flex: 1 0 0;
`,je=20,Ee=({selectedCourseId:e,selectedProfessorId:r,writableReviewProps:a})=>{const{t:s}=S(),[n,p]=c.useState("all"),[f,y]=c.useState(!1),{query:m,setParams:h,data:u}=G("GET","/reviews",{infinites:["reviews"],limit:je,enabled:f}),{ref:x,inView:b}=q();return c.useEffect(()=>{h({mode:"default",courseId:e||void 0,professorId:r||void 0})},[]),c.useEffect(()=>{h(g=>({...g??{},...e!==null?{courseId:e}:{},...r!==null?{professorId:r}:{}})),y(e!==null)},[r,e]),c.useEffect(()=>{b&&m.hasNextPage&&!m.isFetchingNextPage&&m.fetchNextPage()},[b]),i(v,{children:[t(d,{type:"NormalBold",color:"Text.default",children:s("dictionary.review")}),i(l,{direction:"column",gap:6,children:[t(d,{type:"NormalBold",color:"Text.default",children:s("dictionary.reviewLanguage")}),t(l,{direction:"row",gap:6,children:["all","english"].map(g=>t($e,{selected:n==g,chipText:s(`dictionary.reviewLanguageOptions.${g}`),onClick:()=>p(g)},g))})]}),u===null&&m.isLoading?t(T,{}):i(v,{children:[t(l,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:t(Ie,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[j(u?.averageGrade,u?.reviews.length),s("common.grade")],[j(u?.averageLoad,u?.reviews.length),s("common.load")],[j(u?.averageSpeech,u?.reviews.length),s("common.speech")]].map(([g,C],I)=>i(Le,{direction:"column",gap:0,align:"center",children:[t(d,{type:"Bigger",color:"Text.default",children:g}),t(d,{type:"Smaller",color:"Text.default",children:C})]},I))})}),a.map((g,C)=>te(ie,{...g,key:C})),u?.reviews.map(g=>n==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(g.content)?null:t(le,{review:g,linkToDictionary:!1},g.id)),m.hasNextPage&&t(T,{ref:x})]})]})},Pe=o(l)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,E=o(l)`
    width: 100%;
`,Re=o(l)`
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
`,A=({selectedCourseId:e,isMobileModal:r=!1,onMobileModalClose:a})=>{const s=N(),{query:n}=oe("GET",`/courses/${e}`,{enabled:e!==null}),[p,f]=c.useState(null),[y,m]=c.useState([]);return c.useEffect(()=>{if(n.data){const h=[];n.data.history.forEach(u=>{if(u.myLectureId!==null){const x=u.classes.find(b=>b.lectureId===u.myLectureId)?.professors||[];h.push({name:n.data.name,lectureId:u.myLectureId,professors:x,year:u.year,semester:u.semester})}}),m(h)}},[n.data]),c.useEffect(()=>{f(null)},[e]),t(Pe,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?n.isLoading?t(T,{}):i(v,{children:[i(Re,{direction:"column",gap:2,align:"center",justify:"center",children:[i(l,{direction:"row",align:"center",gap:8,justify:r?"space-between":"center",style:{width:"100%"},children:[r&&t("div",{style:{width:20}}),t(d,{type:"Bigger",color:"Text.default",children:n.data?.name}),r&&t($,{size:20,onClick:a,color:s.colors.Text.default,children:t(_,{})})]}),t(d,{type:"Big",color:"Text.default",children:n.data?.code})]}),t(E,{direction:"column",gap:10,align:"center",children:t(Te,{courseDetail:n.data})}),t(H,{}),t(E,{direction:"column",gap:10,children:t(we,{courseDetail:n.data,selectedProfessorId:p,setSelectedProfessorId:f})}),t(H,{}),t(E,{direction:"column",gap:10,flex:"1 1 auto",children:t(Ee,{selectedCourseId:e,selectedProfessorId:p,writableReviewProps:y})})]}):t(re,{})})},We=o.div`
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
`,P=o(d)`
    white-space: nowrap;
`,Ae=({course:e,isSelected:r,selectCourseId:a})=>{const{t:s}=S(),n=N(),p=c.useCallback(()=>{a(r?null:e.id)},[r,e.id,a]);return i(We,{onClick:p,selected:r,children:[i(l,{direction:"row",gap:0,justify:"space-between",align:"center",children:[i(l,{direction:"row",gap:6,align:"center",children:[t($,{size:12,color:e.open?n.colors.Highlight.default:n.colors.Text.disable,children:t(U,{})}),t(d,{type:"NormalBold",color:"Text.default",children:e.name}),t(d,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&t(d,{type:"Normal",color:"Text.lighter",children:s("common.completedCourse")})]}),t(He,{}),i(l,{direction:"column",gap:4,children:[i(l,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.class")}),i(d,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),i(l,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.professor")}),t(d,{type:"Normal",color:"Text.default",children:e.professors.map(f=>f.name).join(", ")})]}),i(l,{direction:"row",gap:6,children:[t(P,{type:"NormalBold",color:"Text.default",children:s("common.description")}),t(d,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},Me=c.memo(Ae),ze=o(l)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,De=o.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Oe=o(d)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Fe=o(d)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
`,Ge=o(l)`
    white-space: nowrap;
`,qe=o(l)`
    flex-grow: 1;
    height: 36px;
`,Ue=o(l)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,M=20;function Ve({selectedCourseId:e,setSelectedCourseId:r}){const{t:a}=S(),s=N(),[n]=z(),[p,f]=c.useState(0),[y,m]=c.useState(!1),[h,u]=c.useState({courses:[],totalCount:0}),{query:x,setParams:b,data:g}=G("GET","/courses",{infinites:["courses"],limit:M,enabled:y}),{inView:C,ref:I}=q({threshold:0});c.useEffect(()=>{C&&x.hasNextPage&&!x.isFetchingNextPage&&x.fetchNextPage()},[C]),c.useEffect(()=>{const w=n.get("term")?parseInt(n.get("term")):void 0,k={keyword:n.get("keyword")||"",type:n.getAll("type"),department:n.getAll("department").map(L=>parseInt(L)),level:n.getAll("level").map(L=>parseInt(L))};w!==void 0&&(k.term=w),!W(k)&&R(k)},[]),c.useEffect(()=>{g!==void 0&&u(g)},[g]),c.useEffect(()=>{p==0&&y==!1||(u({courses:[],totalCount:0}),b(w=>({...w,order:["code","popular","studentCount"][p]??"code",offset:0})),m(!0))},[p]);const R=w=>{if(W(w)){alert(a("common.search.empty"));return}const k={...w,order:["code","popular","studentCount"][p]??"code",offset:0,limit:M};b(k),m(!0)};return i(ze,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[t(De,{children:t(ae,{options:["type","department","level","term"],onSearch:R})}),h.courses.length!==0?i(v,{children:[i(l,{direction:"row",gap:0,justify:"space-between",align:"center",children:[t(Fe,{color:"Text.default",children:t(se,{i18nKey:"dictionary.courseCountInfo",count:g?.totalCount,components:{bold:t(d,{type:"NormalBold",children:void 0}),icon:t($,{size:12,color:s.colors.Highlight.default,children:t(U,{})}),space:t(v,{children:" "})}})}),i(Ge,{direction:"row",gap:8,align:"center",children:[t(d,{type:"NormalBold",color:"Text.default",children:a("dictionary.sort")}),t(qe,{direction:"row",gap:0,children:t(ne,{options:[a("dictionary.sortOptions.code"),a("dictionary.sortOptions.popularity"),a("dictionary.sortOptions.studentCount")],setSelectedOption:f,selectedOption:p})})]})]}),i(Ue,{direction:"column",gap:12,children:[h.courses.map((w,k)=>t(Me,{course:w,isSelected:e==w.id,selectCourseId:r},k)),x.hasNextPage&&t(T,{ref:I})]})]}):x.isLoading?t(T,{}):t(Oe,{type:"Bigger",color:"Text.placeholder",children:a("dictionary.noResults")})]})}const Ke=o(l)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${B.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${B.mobile} {
        padding: 0 8px 12px 8px;
    }
`,Z=o(X)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`,Ze=o(Z)`
    max-width: 508px;
    flex: 1 1 0;

    ${B.tablet} {
        max-width: none;
    }
`,Je=o(Z)`
    flex: 1 1 0;
    max-width: 976px;

    ${B.tablet} {
        display: none;
    }
`,ft=J(function(){const r=F("tablet"),[a]=z(),[s,n]=c.useState(!1),[p,f]=c.useState(null);c.useEffect(()=>{const m=a.get("courseId");if(m){const h=parseInt(m,10);isNaN(h)?f(null):f(h)}},[]),c.useEffect(()=>{r?p!==null&&n(!0):n(!1)},[r]),c.useEffect(()=>{r&&p!==null&&n(!0)},[p]);const y=c.useCallback(()=>{n(!1),f(null)},[]);return i(Ke,{direction:"row",align:"stretch",justify:"center",gap:12,children:[t(Ze,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(Ve,{selectedCourseId:p,setSelectedCourseId:f})}),t(Je,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(A,{selectedCourseId:p})}),r&&t(Q,{isOpen:s,onClose:y,header:!1,fullScreen:!0,children:t(A,{selectedCourseId:p,isMobileModal:!0,onMobileModalClose:y})})]})});export{ft as default};
//# sourceMappingURL=dictionary-DAqNEJJq.js.map
