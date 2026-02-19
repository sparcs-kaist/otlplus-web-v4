import{r as f,p as v,w as D}from"./chunk-EPOLDU6W-DUBCDYUl.js";import{a as c,j as t,u as q,F as j}from"./emotion-react-jsx-runtime.browser.esm-Cd1yPuV_.js";import{n as h,F as n}from"./FlexWrapper-CEaVn29y.js";import{I as T,k as B,g as $,l as L,u as O,q as G,e as k}from"./useIsDevice-cMmANA1X.js";import{L as _}from"./Lock-BvDdnkI0.js";import{L as M}from"./Line-ZhFzsiCv.js";import{L as b}from"./LoadingCircle-BAvNJpvO.js";import{T as u}from"./Typography-4xh8tt69.js";import{W as z}from"./Widget-BuVIz10v.js";import{E as A,a as K,u as P,b as W,S as U,C as Y}from"./Credits-BqwCA1GT.js";import{u as S}from"./useTranslation-CZP_BZF1.js";import{m as F}from"./media-QPqgitLY.js";import{a as J}from"./handleLoginLogout-DFHefYtP.js";import{u as I}from"./useUserStore-LEZkRA7u.js";import{R as E,F as Q,a as X}from"./ReviewBlock-ZlGR2Qyf.js";import{T as C}from"./Trans-BVyEuCS6.js";import{t as Z}from"./index-D0e8kqVY.js";import{R as ee}from"./ReviewWritingBlock-DwSBaBg0.js";import"./env-_2I-OxO9.js";import"./IconButton-DRZfk4PH.js";import"./infiniteQueryBehavior-BzibcPjW.js";import"./queryPersister-DDt3N7cO.js";import"./TextInputArea-DQNjaPaL.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ce49d0962b4d8a1e630c1c635b70e239a498a29d"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="9693ef6b-ff0a-4d24-9ffb-50b0ba58fde1",e._sentryDebugIdIdentifier="sentry-dbid-9693ef6b-ff0a-4d24-9ffb-50b0ba58fde1")})()}catch{}const te=h.div`
    width: 200px;
    flex-shrink: 1;
    position: relative;
    user-select: none;
`,re=h(n)`
    padding: 5px 8px;
    color: ${({theme:e})=>e.colors.Text.default};
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 6px;
    height: 50px;
    cursor: pointer;
`,oe=h.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    max-height: 250px;
    overflow-y: auto;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 6px;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &::-webkit-scrollbar {
        width: 0;
    }
`,ne=h(u)`
    padding: 4px 12px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};

    &:first-of-type {
        border-top: none;
    }
`,ie=h(n)`
    padding: 11px 12px;
    cursor: pointer;
    background-color: ${({theme:e,selected:r})=>r?e.colors.Background.Section.transparent:e.colors.Background.Section.default};
    color: ${({theme:e,selected:r})=>r?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.default};
    }
`;function se({lecturesWrap:e,selectedLecture:r,setSelectedLecture:o,setSelectedLectureIndex:l}){const{t:d}=S(),[s,a]=f.useState(!1),[p,g]=f.useState(""),y=f.useRef(null);f.useEffect(()=>{if(!e)return;let i="";for(const x of e){for(const m of x.lectures)if(r&&m.lectureId===r.lectureId){i=m.code;break}if(i)break}g(i)},[r,e]),f.useEffect(()=>{const i=x=>{y.current&&!y.current.contains(x.target)&&a(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const w=(i,x,m,R,N)=>{o({name:m.name,lectureId:m.lectureId,courseId:m.courseId,professors:m.professors,year:R,semester:N}),l?.([i,x]),a(!1),g(m.code)};return c(te,{ref:y,children:[c(re,{onClick:()=>a(!s),direction:"row",gap:0,justify:"center",align:"center",children:[r?c(n,{direction:"column",gap:0,align:"center",children:[t(u,{type:"NormalBold",children:r?.name}),t(u,{type:"Normal",children:p})]}):t(u,{type:"Big",color:"Text.placeholder",children:d("writeReviews.mySummary.selectPlaceholder")}),c(n,{direction:"column",gap:0,style:{position:"absolute",right:"8px"},children:[t(T,{size:14,children:t(A,{})}),t(T,{size:14,children:t(K,{})})]})]}),s&&e&&t(oe,{children:e.map((i,x)=>c(f.Fragment,{children:[c(ne,{type:"NormalMedium",color:"Text.placeholder",children:[i.year," ",B(i.semester)]}),i.lectures.map((m,R)=>{const N=r?.lectureId===m.lectureId&&r?.year===i.year&&r?.semester===i.semester;return c(ie,{selected:N,onClick:()=>w(x,R,m,i.year,i.semester),direction:"row",gap:8,children:[t(u,{type:"Small",color:"Text.default",children:m.code}),t(u,{type:"Small",children:m.name})]},m.lectureId)})]},`${i.year}-${i.semester}`))})]})}function le({totalLectures:e,reviewedLectures:r,totalLikes:o}){const l=$("mobile"),{t:d}=S();return c(n,{direction:"column",align:"center",gap:10,children:[!l&&t(u,{type:"Big",color:"Text.default",children:d("writeReviews.mySummary.title")}),c(n,{direction:"row",align:"center",gap:l?18:48,children:[c(n,{direction:"column",align:"center",gap:2,children:[c(n,{direction:"row",align:"flex-end",gap:0,children:[t(u,{type:"BiggerBold",color:"Text.default",children:r}),c(u,{type:"SmallBold",color:"Text.default",children:["/",e]})]}),t(u,{type:"Smaller",color:"Text.default",children:d("writeReviews.mySummary.written")})]}),c(n,{direction:"column",align:"center",gap:2,children:[t(n,{direction:"row",align:"flex-end",gap:0,children:t(u,{type:"BiggerBold",color:"Text.default",children:o})}),t(u,{type:"Smaller",color:"Text.default",children:d("writeReviews.mySummary.likes")})]})]})]})}const ce=e=>L`
    background: ${e.colors.Background.Block.highlight};
    cursor: pointer;
`,ae=e=>L`
    background: ${e.colors.Background.Block.darker};
`,de=h(n)`
    background: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 5px;
    opacity: ${({written:e,isSelected:r})=>r?1:e?.3:1};
    text-align: center;

    ${({theme:e,isHovered:r})=>r&&ce(e)};
    ${({theme:e,isSelected:r})=>r&&ae(e)};
`;function ue({lecture:e,isSelected:r,written:o}){const{status:l}=I(),[d,s]=f.useState(!1);return c(de,{direction:"column",align:"center",gap:2,padding:"8px 10px",isHovered:d,isSelected:r,written:o,onMouseOver:()=>{l!=="idle"&&s(!0)},onMouseLeave:()=>{l!=="idle"&&s(!1)},children:[c(n,{direction:"row",gap:8,justify:o?"space-between":"center",align:"center",style:{width:"100%"},children:[o&&t("div",{style:{width:"37px"}}),t(u,{type:"NormalBold",color:"Text.default",children:e.name}),o&&t(u,{type:"Smaller",color:"Text.lighter",children:"작성 완료"})]}),t(u,{type:"Normal",color:"Text.default",children:e.code})]})}function V(e,r,o,l){return e.courseId===r.courseId&&o===r.year&&l===r.semester}function fe({lectureWrapIndex:e,lecturesWrap:r,selectedLecture:o,setSelectedLecture:l,setSelectedLectureIndex:d,last:s}){const{status:a}=I();return c(n,{direction:"column",align:"stretch",justify:"stretch",gap:10,children:[c(u,{type:"NormalBold",color:"Text.default",children:[r.year," ",B(r.semester)]}),t(n,{direction:"column",align:"stretch",justify:"stretch",gap:8,children:r.lectures.map((p,g)=>t(n,{direction:"column",gap:0,align:"stretch",justify:"stretch",onClick:()=>{if(a==="idle")return;if(o&&V(p,o,r.year,r.semester)){l(null),d(null);return}const{name:y,courseId:w,professors:i}=p,{year:x,semester:m}=r;l({name:y,courseId:w,lectureId:p.lectureId,professors:i,year:x,semester:m}),d([e,g])},children:t(ue,{lecture:p,isSelected:o?V(p,o,r.year,r.semester):!1,written:p.written},g)},g))}),!s&&t(M,{height:2,color:"Line.divider"})]})}const H=f.memo(fe),pe=h(n)`
    min-height: 0;
    overflow: ${({scrollLock:e})=>e?"hidden":"auto"};
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,he=h(z)`
    width: 288px;
    flex: 0 0 auto;
    padding: 16px;

    ${F.tablet} {
        min-width: 240px;
        flex-shrink: 1;
    }

    ${F.mobile} {
        width: 100%;
        padding: 8px 16px;
        box-shadow: 0 4px 3px -3px rgba(237, 140, 156, 0.8);
        min-height: 65px;
    }
`,me=h(n)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    user-select: ${e=>e.blur?"none":"auto"};
`,ge=h(n)`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,we=h.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,xe=h.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`;function ye({selectedLecture:e,setSelectedLecture:r}){const o=$("mobile"),l=q(),{user:d,status:s}=I(),{query:a}=O("GET",`/users/${d?.id}/lectures`,{enabled:s==="success"}),[p,g]=f.useState(null);f.useEffect(()=>{if(!a.isLoading&&a.data&&a.data.lecturesWrap.length>0){const w=a.data.lecturesWrap[p?.[0]??0],i=w?.lectures[p?.[1]??0];w&&i&&r({name:i.name,lectureId:i.lectureId,courseId:i.courseId,professors:i.professors,year:w.year,semester:w.semester})}},[a.data]);const y={year:2026,semester:1,lectures:Array(30).fill({courseId:1,lectureId:1,name:"전산기조직개론",code:"CS311",professors:[],written:!1})};return t(he,{borderRadius:12,direction:"column",gap:0,children:s==="loading"?t(b,{}):c(j,{children:[s==="idle"&&c(ge,{direction:o?"row":"column",gap:12,align:"center",justify:o?"space-evenly":"center",children:[t(we,{children:t(T,{size:30,color:l.colors.Highlight.default,children:t(_,{})})}),t(xe,{onClick:J,children:t(u,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}),c(me,{blur:s==="idle",direction:o?"row":"column",align:o?"center":"stretch",justify:o?"space-between":"stretch",gap:12,children:[t(le,{totalLectures:a.data?a.data.totalLecturesCount:0,reviewedLectures:a.data?a.data.reviewedLecturesCount:0,totalLikes:a.data?a.data.totalLikesCount:0}),!o&&t(M,{height:2,color:"Line.divider"}),o?t(se,{lecturesWrap:a.data?.lecturesWrap,selectedLecture:e,setSelectedLecture:r,setSelectedLectureIndex:g}):t(pe,{direction:"column",align:"stretch",gap:24,scrollLock:s==="idle",children:s==="idle"?t(H,{lectureWrapIndex:0,lecturesWrap:y,selectedLecture:null,setSelectedLecture:()=>{},setSelectedLectureIndex:()=>{},last:!0}):a.data?.lecturesWrap.map((w,i)=>t(H,{lectureWrapIndex:i,lecturesWrap:w,selectedLecture:e,setSelectedLecture:r,setSelectedLectureIndex:g,last:i===a.data.lecturesWrap.length-1},i))})]})]})})}const be=["write","recentFeed","hallOfFameFeed","liked"],ve=h(n)`
    width: 225px;
    height: 36px;
`,ke=20;function Se(){const{t:e}=S(),{query:r}=O("GET","/semesters",{select:i=>({...i,semesters:i.semesters.filter(x=>x.year>=2013)})}),{query:o,setParams:l,data:d}=P("GET","/reviews",{infinites:["reviews"],limit:ke}),{ref:s,inView:a}=W({threshold:0});f.useEffect(()=>{a&&o.hasNextPage&&!o.isFetchingNextPage&&o.fetchNextPage()},[a]);const[p,g]=f.useState(0),[y,w]=f.useState(0);return f.useEffect(()=>{l({mode:"hall-of-fame"})},[]),f.useEffect(()=>{if(p===0){l({mode:"hall-of-fame"});return}l({mode:"hall-of-fame",year:r.data?.semesters[p-1]?.year??2025,semester:r.data?.semesters[p-1]?.semester??G.SPRING})},[p]),c(n,{direction:"column",align:"stretch",gap:12,children:[c(n,{direction:"row",align:"center",gap:8,children:[t(u,{type:"NormalBold",color:"Text.default",children:e("common.year")}),t(ve,{direction:"row",gap:0,children:t(U,{options:[e("writeReviews.hallOfFameFeed.total")].concat(r.data?.semesters?r.data.semesters.map(i=>`${i.year} ${B(i.semester)}`):[]),selectedOption:p,setSelectedOption:g})})]}),o.isLoading?t(b,{}):c(j,{children:[c(n,{direction:"column",align:"center",gap:12,children:[t(u,{type:"NormalBold",color:"Text.default",children:p===0?e("writeReviews.hallOfFameFeed.total"):t(C,{i18nKey:"writeReviews.hallOfFameFeed.title",values:{year:r.data?.semesters[p-1]?.year??"",semester:r.data?.semesters[p-1]?.semester?B(r.data.semesters[p-1]?.semester):""},components:{space:t(j,{children:" "})}})}),c(n,{direction:"column",align:"center",gap:0,children:[t(u,{type:"Bigger",color:"Text.default",children:d?.reviews.length}),t(u,{type:"Smaller",color:"Text.default",children:e("writeReviews.hallOfFameFeed.total")})]})]}),c(n,{direction:"column",align:"stretch",gap:12,children:[d?.reviews.map(i=>t(E,{review:i},i.id)),o.hasNextPage&&t(b,{ref:s})]})]})]})}function Ie(){const{t:e}=S(),{user:r,status:o}=I(),{query:l,setParams:d}=O("GET",`/users/${r?.id}/reviews/liked`,{enabled:o==="success"});return f.useEffect(()=>{r!==null&&d({userId:r.id})},[o]),c(n,{direction:"column",align:"stretch",gap:12,children:[t(n,{direction:"column",align:"center",gap:12,children:t(u,{type:"NormalBold",color:"Text.default",children:e("writeReviews.likedReviews.title")})}),l.isLoading?t(b,{}):t(n,{direction:"column",align:"stretch",gap:12,children:l.data?.reviews.map(s=>t(E,{review:s},s.id))})]})}function Te(){const{t:e}=S(),{query:r,setParams:o,data:l}=P("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10}),{ref:d,inView:s}=W({threshold:0});return f.useEffect(()=>{s&&r.hasNextPage&&!r.isFetchingNextPage&&r.fetchNextPage()},[s]),f.useEffect(()=>{o({mode:"recent"})},[]),c(n,{direction:"column",align:"stretch",gap:12,children:[t(n,{direction:"column",align:"center",gap:12,children:t(u,{type:"NormalBold",color:"Text.default",children:e("writeReviews.tabs.recentFeed")})}),r.isLoading?t(b,{}):c(n,{direction:"column",align:"stretch",gap:12,children:[l?.reviews.map(a=>t(E,{review:a},a.id)),r.hasNextPage&&t(b,{ref:d})]})]})}const Be=k(v.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),Fe=k(v.jsx("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"})),$e=k(v.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"})),Ee=k(v.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3m7-6c0 1.3-.84 2.4-2 2.82V7h2z"})),Re=k(v.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),Ne=k(v.jsx("path",{d:"M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6"})),je={write:Fe,recentFeed:Ne,hallOfFameFeed:Ee,liked:X},Ce={write:Be,recentFeed:Re,hallOfFameFeed:$e,liked:Q},Le=({theme:e})=>L`
    background: ${e.colors.Background.Section.default};
    color: ${e.colors.Highlight.default};

    &:hover {
        background: ${e.colors.Background.Section.default};
    }
`,Oe=h(n)`
    background: ${({theme:e})=>e.colors.Background.Tab.dark};
    color: ${({theme:e})=>e.colors.Text.lighter};
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    height: 34px;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Tab.darker};
    }

    ${({selected:e,theme:r})=>e&&Le({theme:r})}
`;function Me({tab:e,setTab:r}){const o=$("tablet"),{t:l}=S(),{status:d}=I();return t(n,{direction:"row",gap:6,children:be.map((s,a)=>{const p=je[s],g=Ce[s];return d!=="success"&&(s==="liked"||s==="write")?null:c(Oe,{direction:"row",align:"center",gap:6,padding:"8px 12px",selected:e==s,onClick:()=>r(s),children:[t(T,{size:12,children:e==s?t(g,{}):t(p,{})}),o?e==s&&t(u,{type:"Normal",children:l(`writeReviews.tabs.${s}`)}):t(u,{type:"Normal",children:l(`writeReviews.tabs.${s}`)})]},s)})})}function Pe({selectedLecture:e}){const{query:r,setParams:o,data:l}=P("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10,enabled:e!==null}),{ref:d,inView:s}=W({threshold:0});return f.useEffect(()=>{s&&r.hasNextPage&&!r.isFetchingNextPage&&r.fetchNextPage()},[s]),f.useEffect(()=>{e!==null&&o({mode:"default",courseId:e.courseId,professorId:e.professors[0]?.id,year:e.year,semester:e.semester})},[e]),e===null?t(n,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:t(Y,{})}):r.isLoading?t(n,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:t(b,{})}):c(n,{direction:"column",align:"stretch",gap:12,children:[c(n,{direction:"column",gap:12,align:"center",children:[t(u,{type:"NormalBold",color:"Text.default",children:t(C,{i18nKey:"writeReviews.write.title",values:{lectureName:e.name}})}),t(ee,{name:e.name,lectureId:e.lectureId,professors:e.professors,year:e.year,semester:e.semester})]}),t(M,{height:1,color:"Line.default"}),c(n,{direction:"column",gap:12,align:"stretch",children:[t(n,{direction:"column",gap:0,align:"center",children:t(u,{type:"NormalBold",color:"Text.default",children:t(C,{i18nKey:"writeReviews.write.related",values:{lectureName:e.name}})})}),l?.reviews.map(a=>t(E,{review:a},a.id)),r.hasNextPage&&t(b,{ref:d})]})]})}const We=h(z)`
    background: transparent;
    overflow: hidden;
    width: 1300px;
    flex: 0 1 auto;

    ${F.mobile} {
        width: 100%;
        flex-grow: 1;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`,Ve=h(n)`
    background: ${({theme:e})=>e.colors.Background.Section.default};
    flex: 1 1 auto;
    border-top-right-radius: 16px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,He=h(n)`
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function ze({selectedLecture:e,setSelectedLecture:r}){const{status:o}=I(),[l,d]=f.useState("write");return f.useEffect(()=>{o==="idle"&&d("recentFeed")},[o]),f.useEffect(()=>{l!=="write"&&r(null)},[l]),f.useEffect(()=>{e!==null&&d("write")},[e]),c(We,{direction:"column",align:"stretch",justify:"stretch",gap:0,children:[t(Me,{tab:l,setTab:d}),t(Ve,{direction:"column",align:"stretch",justify:"stretch",gap:0,padding:"16px",children:t(He,{direction:"column",align:"stretch",gap:12,justify:"stretch",flex:"1 1 auto",children:(()=>{switch(l){case"write":return t(Pe,{selectedLecture:e});case"recentFeed":return t(Te,{});case"hallOfFameFeed":return t(Se,{});case"liked":return t(Ie,{});default:return null}})()})})]})}const De=h(n)`
    width: 100%;
    overflow: auto;
    padding: 0 20px 15px 20px;

    ${F.mobile} {
        padding: 0 8px 12px 8px;
    }
`,ft=D(function(){const r=$("mobile"),[o,l]=f.useState(null);return f.useEffect(()=>{Z("Page View",{page:"Write Reviews"})},[]),t(n,{direction:"column",align:"center",justify:"stretch",gap:0,flex:"1 0 0",children:c(De,{direction:r?"column":"row",align:"stretch",justify:"center",gap:12,flex:"1 0 0",children:[t(ye,{selectedLecture:o,setSelectedLecture:l}),t(ze,{selectedLecture:o,setSelectedLecture:l})]})})});export{ft as default};
//# sourceMappingURL=write-reviews-ByayxfIz.js.map
