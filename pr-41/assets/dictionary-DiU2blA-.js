import{a as i,y as z,w as V}from"./chunk-UIGDSWPH-NakEPbl8.js";import{n as r,a as o,j as a,F as c,u as L,b as k}from"./FlexWrapper-C0dsngQo.js";import{M as Z}from"./Modal-oqTLNu7E.js";import{W as J}from"./Widget-D7VP5HFl.js";import{m as Q,C as X}from"./proxy-D5-RWP6G.js";import{e as F,u as S,t as P,l as I,D as Y,k as E,N as $,j as B}from"./useIsDevice-CZNUtxO9.js";import{R as _,C as ee,S as oe}from"./ReviewWritingBlock-BimnYcAQ.js";import{L as O}from"./LoadingCircle-C_DEuLlK.js";import{T as p}from"./Typography-DTsae4U-.js";import{j as A}from"./jsx-runtime-u17CrQMm.js";import{p as te,R as re}from"./ReviewBlock-BnK7boNg.js";import{c as H,S as ne}from"./checkEmpty-D4GUJoge.js";import{T as ie}from"./Trans-CzvAu8Uq.js";import"./index-CSYM8SEM.js";import"./TextInputArea-BQaSYp6W.js";import"./useUserStore-Cs3WP2WQ.js";const G=F(A.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"})),le=F(A.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),U=r.div`
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
`,ae=r(U)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ce=r(U)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,se=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    align-items: center;
`,de=({selected:e=!1,chipIndex:n="",chipText:s="",...h})=>o(e?ce:ae,{...h,children:o(()=>a(se,{children:[o(p,{type:"NormalBold",children:n}),o(p,{type:"Normal",children:s})]}),{})}),pe=r(Q.div)`
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
`,ue=r(c)`
    height: 100%;
`,he=r(le)`
    transform: ${e=>e.isFolded?"rotate(0deg)":"rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
`,ge=r(p)`
    width: 150px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,fe=({courseDetail:e,selectedProfessorId:n,setSelectedProfessorId:s})=>{const{t:h}=S(),t=L(),l=P("mobile"),f=i.useRef(null),[x,y]=i.useState(!0);return i.useEffect(()=>{f.current&&(f.current.scrollLeft=f.current.scrollWidth)},[e]),i.useEffect(()=>{if(l){y(!0);return}const g=e?.history?.some(b=>b.classes.length>4)??!1;y(g)},[l,e]),a(k,{children:[a(c,{direction:"row",gap:0,justify:"space-between",style:{width:"100%"},onClick:()=>y(g=>!g),children:[o(p,{type:"NormalBold",color:"Text.default",children:h("dictionary.courseHistory")}),o(I,{size:20,color:t.colors.Text.default,children:o(he,{isFolded:x})})]}),o(pe,{ref:f,initial:{height:x?0:"auto"},animate:{height:x?0:"auto"},transition:{duration:.2,ease:"easeInOut"},children:[...e?.history||[]].reverse().map((g,b)=>a(ue,{direction:"column",gap:6,align:"center",children:[a(p,{type:"Normal",color:"Text.default",children:[g.year," ",Y(g.semester)]}),g.classes.length===0?o(ge,{color:"Text.disable",type:"Normal",children:h("dictionary.notOffered")}):o(c,{direction:"column",gap:4,align:"center",children:g.classes.map((d,v)=>o(de,{selected:n==(d.professors[0]?.id??-1),chipIndex:d.classNo,chipText:te(d.professors),onClick:()=>{n===(d.professors[0]?.id??-1)?s(null):s(d.professors[0]?.id??null)}},v))})]},b))})]})},me=r(c)`
    width: 100%;
`,we=r(c)`
    width: 300px;
    padding: 10px;
`,xe=r(c)`
    flex: 1 0 0;
`,ye=r(p)`
    white-space: nowrap;
`,be=({courseDetail:e})=>{const{t:n}=S();return a(k,{children:[o(me,{direction:"column",gap:8,children:[[n("common.class"),e?.department.name+", "+e?.type],[n("common.description"),e?.summary]].map(([s,h],t)=>a(c,{direction:"row",gap:6,children:[o(ye,{type:"NormalBold",color:"Text.default",children:s}),o(p,{type:"Normal",color:"Text.default",children:h})]},t))}),o(we,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,n("common.numClasses")],[e?.expDuration,n("common.numLabs")],[e?.credit,n("common.credit")]].map(([s,h],t)=>a(xe,{direction:"column",gap:0,align:"center",children:[o(p,{type:"Bigger",color:"Text.default",children:s}),o(p,{type:"Smaller",color:"Text.default",children:h})]},t))})]})},ve={reviews:[{id:30579,courseId:745,courseName:"이산구조",professors:[{id:1534,name:"박진아"}],year:2025,semester:1,content:"이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",like:1,isDeleted:!1,grade:4,load:4,speech:4,likedByUser:!0},{id:29854,courseId:745,courseName:"이산구조",professors:[{id:2057,name:"이주영"}],year:2025,semester:1,content:"이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",like:0,isDeleted:!1,grade:4,load:5,speech:5,likedByUser:!1},{id:32899,courseId:745,courseName:"이산구조",professors:[{id:1534,name:"박진아"}],year:2025,semester:1,content:"이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다. 이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",like:1,isDeleted:!1,grade:4,load:4,speech:4,likedByUser:!1},{id:93429,courseId:745,courseName:"이산구조",professors:[{id:2057,name:"이주영"}],year:2025,semester:1,content:"이 부분에는 강의에 대한 Review 내용이 들어갑니다. 2024 OTL Web Clonning과정으로, 정확한 강의명, 리뷰 내용을 별도로 첨부하지 않았습니다.",like:0,isDeleted:!1,grade:4,load:5,speech:5,likedByUser:!1}]},q=r.div`
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
`,Ce=r(q)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ke=r(q)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,Te=r.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,Se=({selected:e=!1,chipText:n="",...s})=>o(e?ke:Ce,{...s,children:o(()=>o(Te,{children:n}),{})}),Be=r(c)`
    width: 300px;
    padding: 10px;
`,Le=r(c)`
    flex: 1 0 0;
`,N=100,Ie=({selectedCourseId:e,selectedProfessorId:n,writableReviewProps:s,ref:h})=>{const{t}=S(),[l,f]=i.useState(null),[x,y]=i.useState("all"),[g,b]=i.useState(!1),{query:d,setParams:v}=E("GET","/reviews",{enabled:g,gcTime:0}),w=()=>{g&&(d.isLoading||v(u=>({...u,offset:u.offset+N})))};return i.useImperativeHandle(h,()=>({loadMoreReviews:w,isLoading:d.isLoading})),i.useEffect(()=>{v({mode:"default",courseId:e||void 0,professorId:n||void 0,limit:N,offset:0})},[]),i.useEffect(()=>{f(null),v(u=>({...u??{},...e!==null?{courseId:e}:{},...n!==null?{professorId:n}:{},offset:0})),b(e!==null)},[n,e]),i.useEffect(()=>{d.data!==void 0&&(f(u=>u==null?d.data:{averageGrade:d.data.averageGrade,averageLoad:d.data.averageLoad,averageSpeech:d.data.averageSpeech,myReviewId:[],reviews:[...u.reviews,...d.data.reviews]}),d.data.reviews.length<N&&b(!1))},[d.data]),a(k,{children:[o(p,{type:"NormalBold",color:"Text.default",children:t("dictionary.review")}),a(c,{direction:"column",gap:6,children:[o(p,{type:"NormalBold",color:"Text.default",children:t("dictionary.reviewLanguage")}),o(c,{direction:"row",gap:6,children:["all","english"].map(u=>o(Se,{selected:x==u,chipText:t(`dictionary.reviewLanguageOptions.${u}`),onClick:()=>y(u)},u))})]}),l===null&&d.isLoading?o(O,{}):a(k,{children:[o(c,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:o(Be,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[$(l?.averageGrade,l?.reviews.length),t("common.grade")],[$(l?.averageLoad,l?.reviews.length),t("common.load")],[$(l?.averageSpeech,l?.reviews.length),t("common.speech")]].map(([u,m],C)=>a(Le,{direction:"column",gap:0,align:"center",children:[o(p,{type:"Bigger",color:"Text.default",children:u}),o(p,{type:"Smaller",color:"Text.default",children:m})]},C))})}),ve.reviews.length>0&&s.map(u=>o(_,{...u})),l?.reviews.map(u=>x==="english"&&!/^[A-Za-z0-9\s\p{P}\p{S}]+$/u.test(u.content)?null:o(re,{review:u,linkToDictionary:!1},u.id))]})]})},$e=r(c)`
    width: 100%;
    height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,R=r(c)`
    width: 100%;
`,Ne=r(c)`
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
`,M=({selectedCourseId:e,isMobileModal:n=!1,onMobileModalClose:s})=>{const h=L(),{query:t}=E("GET",`/courses/${e}`,{enabled:e!==null}),[l,f]=i.useState(null),[x,y]=i.useState([]),g=i.useRef(null),b=i.useRef(null),d=v=>{const w=v.currentTarget;w.scrollHeight-w.scrollTop-w.clientHeight<48&&b.current?.loadMoreReviews()};return i.useEffect(()=>{if(t.data){const v=[];t.data.history.forEach(w=>{if(w.myLectureId!==null){const u=w.classes.find(m=>m.lectureId===w.myLectureId)?.professors||[];v.push({name:t.data.name,lectureId:w.myLectureId,professors:u,year:w.year,semester:w.semester})}}),y(v)}},[t.data]),i.useEffect(()=>{f(null)},[e]),i.useEffect(()=>{l!==null&&!b.current?.isLoading&&g.current?.scrollIntoView({behavior:"smooth"})},[l,t.isLoading]),o($e,{direction:"column",gap:12,align:"center",justify:e?"start":"center",onScroll:d,children:e?t.isLoading?o(O,{}):a(k,{children:[a(Ne,{direction:"column",gap:2,align:"center",justify:"center",children:[a(c,{direction:"row",align:"center",gap:8,justify:n?"space-between":"center",style:{width:"100%"},children:[n&&o("div",{style:{width:20}}),o(p,{type:"Bigger",color:"Text.default",children:t.data?.name}),n&&o(I,{size:20,onClick:s,color:h.colors.Text.default,children:o(X,{})})]}),o(p,{type:"Big",color:"Text.default",children:t.data?.code})]}),o(R,{direction:"column",gap:10,align:"center",children:o(be,{courseDetail:t.data})}),o(D,{}),o(R,{direction:"column",gap:10,children:o(fe,{courseDetail:t.data,selectedProfessorId:l,setSelectedProfessorId:f})}),o(D,{}),o(R,{ref:g,direction:"column",gap:10,flex:"1 1 auto",children:o(Ie,{selectedCourseId:e,selectedProfessorId:l,writableReviewProps:x,ref:b})})]}):o(ee,{})})},Re=r.div`
    width: 100%;
    border-radius: 7px;
    padding: 8px 10px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({selected:e,theme:n})=>e?n.colors.Background.Block.dark:n.colors.Background.Block.default};
`,We=r.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.default};
    margin: 6px 0;
`,W=r(p)`
    white-space: nowrap;
`,je=({course:e,isSelected:n,selectCourseId:s})=>{const{t:h}=S(),t=L(),l=i.useCallback(()=>{s(n?null:e.id)},[n,e.id,s]);return a(Re,{onClick:l,selected:n,children:[a(c,{direction:"row",gap:0,justify:"space-between",align:"center",children:[a(c,{direction:"row",gap:6,align:"center",children:[o(I,{size:12,color:e.open?t.colors.Highlight.default:t.colors.Text.disable,children:o(G,{})}),o(p,{type:"NormalBold",color:"Text.default",children:e.name}),o(p,{type:"Normal",color:"Text.placeholder",children:e.code})]}),e.completed&&o(p,{type:"Normal",color:"Text.lighter",children:h("common.completedCourse")})]}),o(We,{}),a(c,{direction:"column",gap:4,children:[a(c,{direction:"row",gap:6,children:[o(W,{type:"NormalBold",color:"Text.default",children:h("common.class")}),a(p,{type:"Normal",color:"Text.default",children:[e.department.name,", ",e.type]})]}),a(c,{direction:"row",gap:6,children:[o(W,{type:"NormalBold",color:"Text.default",children:h("common.professor")}),o(p,{type:"Normal",color:"Text.default",children:e.professors.map(f=>f.name).join(", ")})]}),a(c,{direction:"row",gap:6,children:[o(W,{type:"NormalBold",color:"Text.default",children:h("common.description")}),o(p,{type:"Normal",color:"Text.default",children:e.summary})]})]})]})},Ee=i.memo(je),Oe=r(c)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,He=r.div`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,De=r(p)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,Me=r(p)`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    flex-wrap: wrap;
`,ze=r(c)`
    white-space: nowrap;
`,Fe=r(c)`
    flex-grow: 1;
    height: 36px;
`,Pe=r(c)`
    flex-grow: 1;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,j=20;function Ae({selectedCourseId:e,setSelectedCourseId:n}){const{t:s}=S(),h=L(),[t]=z(),[l,f]=i.useState(0),[x,y]=i.useState(!1),[g,b]=i.useState({courses:[],totalCount:0}),{query:d,setParams:v}=E("GET","/courses",{enabled:x});i.useEffect(()=>{const m=t.get("term")?parseInt(t.get("term")):void 0,C={keyword:t.get("keyword")||"",type:t.getAll("type"),department:t.getAll("department").map(T=>parseInt(T)),level:t.getAll("level").map(T=>parseInt(T))};m!==void 0&&(C.term=m),!H(C)&&w(C)},[]),i.useEffect(()=>{d.data!==void 0&&(b(m=>({courses:[...m.courses,...d.data.courses],totalCount:0})),d.data.courses.length<j&&y(!1))},[d.data]);const w=m=>{if(H(m)){alert(s("common.search.empty"));return}b({courses:[],totalCount:0});const C={...m,order:["code","popular","studentCount"][l]??"code",offset:0,limit:j};v(C),y(!0)},u=m=>{if(!x||d.isLoading)return;const C=m.target;C.scrollHeight-C.scrollTop-C.clientHeight<48&&v(T=>({...T,offset:T.offset+j}))};return a(Oe,{direction:"column",justify:"stretch",align:"stretch",gap:8,children:[o(He,{children:o(ne,{options:["type","department","level","term"],onSearch:w})}),g.courses.length!==0?a(k,{children:[a(c,{direction:"row",gap:0,justify:"space-between",align:"center",children:[o(Me,{color:"Text.default",children:o(ie,{i18nKey:"dictionary.courseCountInfo",count:d.data?.totalCount,components:{bold:o(p,{type:"NormalBold",children:void 0}),icon:o(I,{size:12,color:h.colors.Highlight.default,children:o(G,{})}),space:o(k,{children:" "})}})}),a(ze,{direction:"row",gap:8,align:"center",children:[o(p,{type:"NormalBold",color:"Text.default",children:s("dictionary.sort")}),o(Fe,{direction:"row",gap:0,children:o(oe,{options:[s("dictionary.sortOptions.code"),s("dictionary.sortOptions.popularity"),s("dictionary.sortOptions.studentCount")],setSelectedOption:f,selectedOption:l})})]})]}),o(Pe,{direction:"column",gap:12,onScroll:u,children:g.courses.map(m=>o(Ee,{course:m,isSelected:e==m.id,selectCourseId:n},m.id))})]}):d.isLoading?o(O,{}):o(De,{type:"Bigger",color:"Text.placeholder",children:s("dictionary.noResults")})]})}const Ge=r(c)`
    flex: 1 0 0;
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${B.tablet} {
        padding: 0 40px 12px 40px;
    }

    ${B.mobile} {
        padding: 0 8px 12px 8px;
    }
`,K=r(J)`
    height: 100%;
    overflow: hidden;
    padding: 16px;
`,Ue=r(K)`
    max-width: 508px;
    flex: 1 1 0;

    ${B.tablet} {
        max-width: none;
    }
`,qe=r(K)`
    flex: 1 1 0;
    max-width: 976px;

    ${B.tablet} {
        display: none;
    }
`,co=V(function(){const n=P("tablet"),[s]=z(),[h,t]=i.useState(!1),[l,f]=i.useState(null);i.useEffect(()=>{const y=s.get("courseId");if(y){const g=parseInt(y,10);isNaN(g)?f(null):f(g)}},[]),i.useEffect(()=>{n?l!==null&&t(!0):t(!1)},[n]),i.useEffect(()=>{n&&l!==null&&t(!0)},[l]);const x=i.useCallback(()=>{t(!1),f(null)},[]);return a(Ge,{direction:"row",align:"stretch",justify:"center",gap:12,children:[o(Ue,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:o(Ae,{selectedCourseId:l,setSelectedCourseId:f})}),o(qe,{direction:"column",align:"stretch",gap:0,borderRadius:12,children:o(M,{selectedCourseId:l})}),n&&o(Z,{isOpen:h,onClose:x,header:!1,fullScreen:!0,children:o(M,{selectedCourseId:l,isMobileModal:!0,onMobileModalClose:x})})]})});export{co as default};
