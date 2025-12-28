import{p as D,r as l,z as P,w as Y}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{j as t,a as n,u as N,F as v}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{n as r,F as a}from"./FlexWrapper-B6Hxm4Zw.js";import{M as Z}from"./Modal-CpIM3cLI.js";import{W as J}from"./Widget-e9ONaX_D.js";import{m as Q,C as _}from"./proxy-ggB-Ml-Q.js";import{u as O,b as F,C as ee,S as te}from"./Credits-Bj7D0I4o.js";import{L as B}from"./LoadingCircle-Dasm_SWL.js";import{R as oe}from"./ReviewWritingBlock-Bj5qf6GG.js";import{e as q,i as G,I as $,q as re,w as E,x as ne,u as ie,g as I}from"./useIsDevice-rrFh6MwO.js";import{T as u}from"./Typography-DeI78L6T.js";import{I as ce,p as le,R as ae}from"./ReviewBlock-DTEedYaI.js";import{u as S}from"./index-HVzq0Ac8.js";import{c as R,S as se}from"./checkEmpty-BjN93Nj_.js";import{T as de}from"./Trans-Bj5hrfsv.js";import"./index-Dp_NaqTT.js";import"./infiniteQueryBehavior-DuHdPvk1.js";import"./TextInputArea-DveoIarf.js";import"./useUserStore-BoQtUBp6.js";import"./env-C162p7NL.js";const U=q(D.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),pe=q(D.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),V=r.div`
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
`,ue=r(V)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,he=r(V)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,fe=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
`,ge=({selected:e=!1,chipIndex:o="",chipText:d="",...p})=>t(e?he:ue,{...p,children:t(()=>n(fe,{children:[t(u,{type:"NormalBold",children:o}),t(u,{type:"Normal",children:d})]}),{})}),me=r(Q.div)`
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
`,xe=r(a)`
    height: 100%;
`,we=r(pe)`
    transform: ${e=>e.isfolded==="true"?"rotate(0deg)":"rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
`,ye=r(u)`
    width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,be=({courseDetail:e,selectedProfessorId:o,setSelectedProfessorId:d})=>{const{t:p}=S(),f=N(),x=G("mobile"),s=l.useRef(null),[y,w]=l.useState(!0);return l.useEffect(()=>{s.current&&(s.current.scrollLeft=s.current.scrollWidth)},[e]),l.useEffect(()=>{if(x){w(!0);return}const i=e?.history?.some(g=>g.classes.length>4)??!1;w(i)},[x,e]),l.useEffect(()=>{const i=s.current;if(!i)return;const g=c=>{const m=Math.abs(c.deltaX)>Math.abs(c.deltaY)?c.deltaX:c.deltaY;if(m===0)return;const h=i.scrollWidth-i.clientWidth;if(h<=0)return;const b=i.scrollLeft+m;(m>0&&i.scrollLeft<h||m<0&&i.scrollLeft>0)&&(c.preventDefault(),c.stopPropagation(),i.scrollLeft=Math.min(h,Math.max(0,b)))};return i.addEventListener("wheel",g,{passive:!1,capture:!0}),()=>{i.removeEventListener("wheel",g,{capture:!0})}},[]),n(v,{children:[n(a,{direction:"row",gap:0,justify:"space-between",align:"center",style:{width:"100%",cursor:"pointer"},onClick:()=>w(i=>!i),children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.courseHistory")}),t(ce,{onClick:()=>{},children:t($,{size:20,color:f.colors.Text.default,onClick:()=>{},children:t(we,{isfolded:y.toString()})})})]}),n(me,{ref:s,initial:{height:y?0:"auto"},animate:{height:y?0:"auto"},transition:{duration:.2,ease:"easeInOut"},children:[t("div",{}),t(a,{direction:"row",gap:20,children:[...e?.history||[]].reverse().map((i,g)=>n(xe,{direction:"column",gap:6,align:"center",children:[n(u,{type:"Normal",color:"Text.default",children:[i.year," ",re(i.semester)]}),i.classes.length===0?t(ye,{color:"Text.disable",type:"Normal",children:p("dictionary.notOffered")}):t(a,{direction:"column",gap:4,align:"center",children:i.classes.map((c,m)=>t(ge,{selected:o==(c.professors[0]?.id??-1),chipIndex:c.classNo,chipText:le(c.professors),onClick:()=>{o===(c.professors[0]?.id??-1)?d(null):d(c.professors[0]?.id??null)}},m))})]},g))})]})]})},ke=r(a)`
    width: 100%;
`,Ce=r(a)`
    width: 300px;
    padding: 10px;
`,ve=r(a)`
    flex: 1 0 0;
`,Be=r(u)`
    white-space: nowrap;
`,Se=({courseDetail:e})=>{const{t:o}=S();return n(v,{children:[t(ke,{direction:"column",gap:8,children:[[o("common.class"),e?.department.name+", "+e?.type],[o("common.description"),e?.summary]].map(([d,p],f)=>n(a,{direction:"row",gap:6,children:[t(Be,{type:"NormalBold",color:"Text.default",children:d}),t(u,{type:"Normal",color:"Text.default",children:p})]},f))}),t(Ce,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,o("common.numClasses")],[e?.expDuration,o("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,o("common.credit")]].map(([d,p],f)=>n(ve,{direction:"column",gap:0,align:"center",children:[t(u,{type:"Bigger",color:"Text.default",children:d}),t(u,{type:"Smaller",color:"Text.default",children:p})]},f))})]})},K=r.div`
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
`,Te=r(K)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,Ie=r(K)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,Ne=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,$e=({selected:e=!1,chipText:o="",...d})=>t(e?Ie:Te,{...d,children:t(()=>t(Ne,{children:o}),{})}),Le=r(a)`
    width: 300px;
    padding: 10px;
`,Ee=r(a)`
    flex: 1 0 0;
`,je=20,We=({selectedCourseId:e,selectedProfessorId:o,writableReviewProps:d})=>{const{t:p}=S(),[f,x]=l.useState("all"),[s,y]=l.useState(!1),{query:w,setParams:i,data:g}=O("GET","/reviews",{infinites:["reviews"],limit:je,enabled:s}),{ref:c,inView:m}=F();return l.useEffect(()=>{i({mode:"default",courseId:e||void 0,professorId:o||void 0})},[]),l.useEffect(()=>{i(h=>{const b=h??{};return o===null&&delete b.professorId,{...b,...e!==null?{courseId:e}:{},...o!==null?{professorId:o}:{}}}),y(e!==null)},[o,e]),l.useEffect(()=>{m&&w.hasNextPage&&!w.isFetchingNextPage&&w.fetchNextPage()},[m]),n(v,{children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.review")}),n(a,{direction:"column",gap:6,children:[t(u,{type:"NormalBold",color:"Text.default",children:p("dictionary.reviewLanguage")}),t(a,{direction:"row",gap:6,children:["all","english"].map(h=>t($e,{selected:f==h,chipText:p(`dictionary.reviewLanguageOptions.${h}`),onClick:()=>x(h)},h))})]}),g===null&&w.isLoading?t(B,{}):n(v,{children:[t(a,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:t(Le,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[E(g?.averageGrade,g?.reviews.length),p("common.grade")],[E(g?.averageLoad,g?.reviews.length),p("common.load")],[E(g?.averageSpeech,g?.reviews.length),p("common.speech")]].map(([h,b],T)=>n(Ee,{direction:"column",gap:0,align:"center",children:[t(u,{type:"Bigger",color:"Text.default",children:h}),t(u,{type:"Smaller",color:"Text.default",children:b})]},T))})}),d.map((h,b)=>ne(oe,{...h,key:b})),g?.reviews.map(h=>f==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(h.content)?null:t(ae,{review:h,linkToDictionary:!1},h.id)),w.hasNextPage&&t(B,{ref:c})]})]})},Pe=r(a)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,j=r(a)`
    width: 100%;
`,Me=r(a)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`,H=r.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,z=({selectedCourseId:e,isMobileModal:o=!1,onMobileModalClose:d})=>{const p=N(),[f,x]=P(),{query:s}=ie("GET",`/courses/${e}`,{enabled:e!==null}),[y,w]=l.useState(null),[i,g]=l.useState([]);return l.useEffect(()=>{if(s.data){const c=[];s.data.history.forEach(m=>{if(m.myLectureId!==null){const h=m.classes.find(b=>b.lectureId===m.myLectureId)?.professors||[];c.push({name:s.data.name,lectureId:m.myLectureId,professors:h,year:m.year,semester:m.semester})}}),g(c)}},[s.data]),l.useEffect(()=>{w(null);const c=f.get("professorId");if(c){const m=parseInt(c,10);isNaN(m)?w(null):(w(m),x({}))}},[e]),t(Pe,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?s.isLoading?t(B,{}):n(v,{children:[n(Me,{direction:"column",gap:2,align:"center",justify:"center",children:[n(a,{direction:"row",align:"center",gap:8,justify:o?"space-between":"center",style:{width:"100%"},children:[o&&t("div",{style:{width:20}}),t(u,{type:"Bigger",color:"Text.default",children:s.data?.name}),o&&t($,{size:20,onClick:d,color:p.colors.Text.default,children:t(_,{})})]}),t(u,{type:"Big",color:"Text.default",children:s.data?.code})]}),t(j,{direction:"column",gap:10,align:"center",children:t(Se,{courseDetail:s.data})}),t(H,{}),t(j,{direction:"column",gap:0,children:t(be,{courseDetail:s.data,selectedProfessorId:y,setSelectedProfessorId:w})}),t(H,{}),t(j,{direction:"column",gap:10,flex:"1 1 auto",children:t(We,{selectedCourseId:e,selectedProfessorId:y,writableReviewProps:i})})]}):t(ee,{})})},Re=r.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e,selected:o})=>o?e.colors.Background.Block.darker:e.colors.Background.Block.dark};
    }
    background-color: ${({selected:e,theme:o})=>e?o.colors.Background.Block.darker:o.colors.Background.Block.default};
`,He=r.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,W=r(u)`
    white-space: nowrap;
`,ze=({course:e,isSelected:o,selectCourseId:d})=>{const{t:p}=S(),f=N(),x=l.useCallback(()=>{d(o?null:e.id)},[o,e.id,d]);return n(Re,{onClick:x,selected:o,children:[n(a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[n(a,{direction:"row",gap:6,align:"center",children:[t($,{size:12,color:e.open?f.colors.Highlight.default:f.colors.Text.disable,children:t(U,{})}),t(u,{type:"NormalBold",color:"Text.default",children:e.name}),t(u,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&t(u,{type:"Normal",color:"Text.lighter",children:p("common.completedCourse")})]}),t(He,{}),n(a,{direction:"column",gap:4,children:[n(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.class")}),n(u,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),n(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.professor")}),t(u,{type:"Normal",color:"Text.default",children:e.professors.map(s=>s.name).join(", ")})]}),n(a,{direction:"row",gap:6,children:[t(W,{type:"NormalBold",color:"Text.default",children:p("common.description")}),t(u,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},Ae=l.memo(ze),De=r(a)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Oe=r.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,Fe=r(u)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,qe=r(u)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
`,Ge=r(a)`
    white-space: nowrap;
`,Ue=r(a)`
    flex-grow: 1;
    height: 36px;
`,Ve=r(a)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,A=20;function Ke({selectedCourseId:e,setSelectedCourseId:o}){const{t:d}=S(),p=N(),[f]=P(),[x,s]=l.useState(0),[y,w]=l.useState(!1),[i,g]=l.useState({courses:[],totalCount:0}),{query:c,setParams:m,data:h}=O("GET","/courses",{infinites:["courses"],limit:A,enabled:y}),{inView:b,ref:T}=F({threshold:0});l.useEffect(()=>{b&&c.hasNextPage&&!c.isFetchingNextPage&&c.fetchNextPage()},[b]),l.useEffect(()=>{const k=f.get("term")?parseInt(f.get("term")):void 0,C={keyword:f.get("keyword")||"",type:f.getAll("type"),department:f.getAll("department").map(L=>parseInt(L)),level:f.getAll("level").map(L=>parseInt(L))};k!==void 0&&(C.term=k),!R(C)&&M(C)},[]),l.useEffect(()=>{h!==void 0&&g(h)},[h]),l.useEffect(()=>{x==0&&y==!1||(g({courses:[],totalCount:0}),m(k=>({...k,order:["code","popular","studentCount"][x]??"code",offset:0})),w(!0))},[x]);const M=k=>{if(R(k)){alert(d("common.search.empty"));return}const C={...k,order:["code","popular","studentCount"][x]??"code",offset:0,limit:A};m(C),w(!0)};return n(De,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[t(Oe,{children:t(se,{options:["type","department","level","term"],onSearch:M})}),i.courses.length!==0?n(v,{children:[n(a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[t(qe,{color:"Text.default",children:t(de,{i18nKey:"dictionary.courseCountInfo",count:h?.totalCount,components:{bold:t(u,{type:"NormalBold",children:void 0}),icon:t($,{size:12,color:p.colors.Highlight.default,children:t(U,{})}),space:t(v,{children:" "})}})}),n(Ge,{direction:"row",gap:8,align:"center",children:[t(u,{type:"NormalBold",color:"Text.default",children:d("dictionary.sort")}),t(Ue,{direction:"row",gap:0,children:t(te,{options:[d("dictionary.sortOptions.code"),d("dictionary.sortOptions.popularity"),d("dictionary.sortOptions.studentCount")],setSelectedOption:s,selectedOption:x})})]})]}),n(Ve,{direction:"column",gap:12,children:[i.courses.map((k,C)=>t(Ae,{course:k,isSelected:e==k.id,selectCourseId:o},C)),c.hasNextPage&&t(B,{ref:T})]})]}):c.isLoading?t(B,{}):t(Fe,{type:"Bigger",color:"Text.placeholder",children:d("dictionary.noResults")})]})}const Xe=r(a)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${I.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${I.mobile} {
        padding: 0 8px 12px 8px;
    }
`,X=r(J)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`,Ye=r(X)`
    max-width: 508px;
    flex: 1 1 0;

    ${I.tablet} {
        max-width: none;
    }
`,Ze=r(X)`
    flex: 1 1 0;
    max-width: 976px;

    ${I.tablet} {
        display: none;
    }
`,xt=Y(function(){const o=G("tablet"),[d,p]=P(),[f,x]=l.useState(!1),[s,y]=l.useState(null);l.useEffect(()=>{const i=d.get("courseId");if(i){const g=parseInt(i,10);isNaN(g)?y(null):(y(g),p(c=>(c.delete("courseId"),c)))}},[]),l.useEffect(()=>{o?s!==null&&x(!0):x(!1)},[o]),l.useEffect(()=>{o&&s!==null&&x(!0)},[s]);const w=l.useCallback(()=>{x(!1),y(null)},[]);return n(Xe,{direction:"row",align:"stretch",justify:"center",gap:12,children:[t(Ye,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(Ke,{selectedCourseId:s,setSelectedCourseId:y})}),t(Ze,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:t(z,{selectedCourseId:s})}),o&&t(Z,{isOpen:f,onClose:w,header:!1,fullScreen:!0,children:t(z,{selectedCourseId:s,isMobileModal:!0,onMobileModalClose:w})})]})});export{xt as default};
//# sourceMappingURL=dictionary-DRf9glW8.js.map
