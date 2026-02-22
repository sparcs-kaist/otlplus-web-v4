import{r as p,p as v,w as D}from"./chunk-JZWAC4HX-CypP3aYd.js";import{a as c,j as t,u as q,F as j}from"./emotion-react-jsx-runtime.browser.esm-CSGOjjze.js";import{s as m,F as i}from"./FlexWrapper-ClZAwvme.js";import{I as T,k as B,g as $,l as L,u as M,q as G,e as k}from"./useIsDevice-BGP3W1m6.js";import{L as _}from"./Lock-HVet-8Ki.js";import{L as O}from"./Line-57BgQlyk.js";import{L as b}from"./LoadingCircle-BOUIf7V0.js";import{T as u}from"./Typography-TFUHRtP7.js";import{W as z}from"./Widget-DJ7F8GiI.js";import{E as A,a as K,u as P,b as W,S as U,C as Y}from"./Credits-BVrgt44u.js";import{u as S}from"./useTranslation-0zVaXusR.js";import{m as F}from"./media-Bo6ID7pW.js";import{a as J}from"./handleLoginLogout-25i4rH7u.js";import{u as I}from"./useUserStore-BEZOwGgD.js";import{R as E,F as Q,a as X}from"./ReviewBlock-MdHYsX_4.js";import{T as C}from"./Trans-DCPE9e4y.js";import{t as Z}from"./index-WIeaGq_p.js";import{R as ee}from"./ReviewWritingBlock-agjChl64.js";import"./env-DU65zTMS.js";import"./IconButton-DkctJ35P.js";import"./infiniteQueryBehavior-BaBP6rAS.js";import"./queryPersister-Bg72Nptt.js";import"./GradeWrap-3xM70_iK.js";import"./TextInputArea-BFk48Ijj.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"94bcaa45a12a089c377ec0a72ec75979c22d0e7c"};var r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="6e64d84b-1224-4e3d-9c4d-72a98a2e5fe3",e._sentryDebugIdIdentifier="sentry-dbid-6e64d84b-1224-4e3d-9c4d-72a98a2e5fe3")}catch{}})();const te=m.div`
    width: 200px;
    flex-shrink: 1;
    position: relative;
    user-select: none;
`,re=m(i)`
    padding: 5px 8px;
    color: ${({theme:e})=>e.colors.Text.default};
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 6px;
    height: 50px;
    cursor: pointer;
`,oe=m.div`
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
`,ie=m(u)`
    padding: 4px 12px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};

    &:first-of-type {
        border-top: none;
    }
`,ne=m(i)`
    padding: 11px 12px;
    cursor: pointer;
    background-color: ${({theme:e,selected:r})=>r?e.colors.Background.Section.transparent:e.colors.Background.Section.default};
    color: ${({theme:e,selected:r})=>r?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.default};
    }
`;function se({lecturesWrap:e,selectedLecture:r,setSelectedLecture:o,setSelectedLectureIndex:s}){const{t:d}=S(),[n,l]=p.useState(!1),[h,x]=p.useState(""),f=p.useRef(null);p.useEffect(()=>{if(!e)return;let a="";for(const y of e){for(const g of y.lectures)if(r&&g.lectureId===r.lectureId){a=g.code;break}if(a)break}x(a)},[r,e]),p.useEffect(()=>{const a=y=>{f.current&&!f.current.contains(y.target)&&l(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const w=(a,y,g,R,N)=>{o({name:g.name,lectureId:g.lectureId,courseId:g.courseId,professors:g.professors,year:R,semester:N}),s?.([a,y]),l(!1),x(g.code)};return c(te,{ref:f,children:[c(re,{onClick:()=>l(!n),direction:"row",gap:0,justify:"center",align:"center",children:[r?c(i,{direction:"column",gap:0,align:"center",children:[t(u,{type:"NormalBold",children:r?.name}),t(u,{type:"Normal",children:h})]}):t(u,{type:"Big",color:"Text.placeholder",children:d("writeReviews.mySummary.selectPlaceholder")}),c(i,{direction:"column",gap:0,style:{position:"absolute",right:"8px"},children:[t(T,{size:14,children:t(A,{})}),t(T,{size:14,children:t(K,{})})]})]}),n&&e&&t(oe,{children:e.map((a,y)=>c(p.Fragment,{children:[c(ie,{type:"NormalMedium",color:"Text.placeholder",children:[a.year," ",B(a.semester)]}),a.lectures.map((g,R)=>{const N=r?.lectureId===g.lectureId&&r?.year===a.year&&r?.semester===a.semester;return c(ne,{selected:N,onClick:()=>w(y,R,g,a.year,a.semester),direction:"row",gap:8,children:[t(u,{type:"Small",color:"Text.default",children:g.code}),t(u,{type:"Small",children:g.name})]},g.lectureId)})]},`${a.year}-${a.semester}`))})]})}function ce({totalLectures:e,reviewedLectures:r,totalLikes:o}){const s=$("mobile"),{t:d}=S();return c(i,{direction:"column",align:"center",gap:10,children:[!s&&t(u,{type:"Big",color:"Text.default",children:d("writeReviews.mySummary.title")}),c(i,{direction:"row",align:"center",gap:s?18:48,children:[c(i,{direction:"column",align:"center",gap:2,children:[c(i,{direction:"row",align:"flex-end",gap:0,children:[t(u,{type:"BiggerBold",color:"Text.default",children:r}),c(u,{type:"SmallBold",color:"Text.default",children:["/",e]})]}),t(u,{type:"Smaller",color:"Text.default",children:d("writeReviews.mySummary.written")})]}),c(i,{direction:"column",align:"center",gap:2,children:[t(i,{direction:"row",align:"flex-end",gap:0,children:t(u,{type:"BiggerBold",color:"Text.default",children:o})}),t(u,{type:"Smaller",color:"Text.default",children:d("writeReviews.mySummary.likes")})]})]})]})}const le=e=>L`
    background: ${e.colors.Background.Block.highlight};
    cursor: pointer;
`,ae=e=>L`
    background: ${e.colors.Background.Block.darker};
`,de=m(i)`
    background: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 5px;
    opacity: ${({written:e,isSelected:r})=>r?1:e?.3:1};
    text-align: center;

    ${({theme:e,isHovered:r})=>r&&le(e)};
    ${({theme:e,isSelected:r})=>r&&ae(e)};
`;function ue({lecture:e,isSelected:r,written:o}){const{status:s}=I(),[d,n]=p.useState(!1);return c(de,{direction:"column",align:"center",gap:2,padding:"8px 10px",isHovered:d,isSelected:r,written:o,onMouseOver:()=>{s!=="idle"&&n(!0)},onMouseLeave:()=>{s!=="idle"&&n(!1)},children:[c(i,{direction:"row",gap:8,justify:o?"space-between":"center",align:"center",style:{width:"100%"},children:[o&&t("div",{style:{width:"37px"}}),t(u,{type:"NormalBold",color:"Text.default",children:e.name}),o&&t(u,{type:"Smaller",color:"Text.lighter",children:"작성 완료"})]}),t(u,{type:"Normal",color:"Text.default",children:e.code})]})}function V(e,r,o,s){return e.courseId===r.courseId&&o===r.year&&s===r.semester}function pe({lectureWrapIndex:e,lecturesWrap:r,selectedLecture:o,setSelectedLecture:s,setSelectedLectureIndex:d,last:n}){const{status:l}=I();return c(i,{direction:"column",align:"stretch",justify:"stretch",gap:10,children:[c(u,{type:"NormalBold",color:"Text.default",children:[r.year," ",B(r.semester)]}),t(i,{direction:"column",align:"stretch",justify:"stretch",gap:8,children:r.lectures.map((h,x)=>t(i,{direction:"column",gap:0,align:"stretch",justify:"stretch",onClick:()=>{if(l==="idle")return;if(o&&V(h,o,r.year,r.semester)){s(null),d(null);return}const{name:f,courseId:w,professors:a}=h,{year:y,semester:g}=r;s({name:f,courseId:w,lectureId:h.lectureId,professors:a,year:y,semester:g}),d([e,x])},children:t(ue,{lecture:h,isSelected:o?V(h,o,r.year,r.semester):!1,written:h.written},x)},x))}),!n&&t(O,{height:2,color:"Line.divider"})]})}const H=p.memo(pe),he=m(i)`
    min-height: 0;
    overflow: ${({scrollLock:e})=>e?"hidden":"auto"};
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,me=m(z)`
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
`,fe=m(i)`
    filter: ${e=>e.blur?"blur(4px)":"none"};
    width: 100%;
    height: 100%;
    user-select: ${e=>e.blur?"none":"auto"};
`,ge=m(i)`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,xe=m.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,we=m.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`;function ye({selectedLecture:e,setSelectedLecture:r}){const o=$("mobile"),s=q(),{user:d,status:n}=I(),{query:l}=M("GET",`/users/${d?.id}/lectures`,{enabled:n==="success"}),[h,x]=p.useState(null);p.useEffect(()=>{if(!l.isLoading&&l.data&&l.data.lecturesWrap.length>0){const w=l.data.lecturesWrap[h?.[0]??0],a=w?.lectures[h?.[1]??0];w&&a&&r({name:a.name,lectureId:a.lectureId,courseId:a.courseId,professors:a.professors,year:w.year,semester:w.semester})}},[l.data]);const f={year:2026,semester:1,lectures:Array(30).fill({courseId:1,lectureId:1,name:"전산기조직개론",code:"CS311",professors:[],written:!1})};return t(me,{borderRadius:12,direction:"column",gap:0,children:n==="loading"?t(b,{}):c(j,{children:[n==="idle"&&c(ge,{direction:o?"row":"column",gap:12,align:"center",justify:o?"space-evenly":"center",children:[t(xe,{children:t(T,{size:30,color:s.colors.Highlight.default,children:t(_,{})})}),t(we,{onClick:J,children:t(u,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}),c(fe,{blur:n==="idle",direction:o?"row":"column",align:o?"center":"stretch",justify:o?"space-between":"stretch",gap:12,children:[t(ce,{totalLectures:l.data?l.data.totalLecturesCount:0,reviewedLectures:l.data?l.data.reviewedLecturesCount:0,totalLikes:l.data?l.data.totalLikesCount:0}),!o&&t(O,{height:2,color:"Line.divider"}),o?t(se,{lecturesWrap:l.data?.lecturesWrap,selectedLecture:e,setSelectedLecture:r,setSelectedLectureIndex:x}):t(he,{direction:"column",align:"stretch",gap:24,scrollLock:n==="idle",children:n==="idle"?t(H,{lectureWrapIndex:0,lecturesWrap:f,selectedLecture:null,setSelectedLecture:()=>{},setSelectedLectureIndex:()=>{},last:!0}):l.data?.lecturesWrap.map((w,a)=>t(H,{lectureWrapIndex:a,lecturesWrap:w,selectedLecture:e,setSelectedLecture:r,setSelectedLectureIndex:x,last:a===l.data.lecturesWrap.length-1},a))})]})]})})}const be=["write","recentFeed","hallOfFameFeed","liked"],ve=m(i)`
    width: 225px;
    height: 36px;
`,ke=20;function Se(){const{t:e}=S(),{query:r}=M("GET","/semesters",{select:f=>({...f,semesters:f.semesters.filter(w=>w.year>=2013)})}),{query:o,setParams:s,data:d}=P("GET","/reviews",{infinites:["reviews"],limit:ke}),{ref:n,inView:l}=W({threshold:0});p.useEffect(()=>{l&&o.hasNextPage&&!o.isFetchingNextPage&&o.fetchNextPage()},[l]);const[h,x]=p.useState(0);return p.useEffect(()=>{s({mode:"hall-of-fame"})},[]),p.useEffect(()=>{if(h===0){s({mode:"hall-of-fame"});return}s({mode:"hall-of-fame",year:r.data?.semesters[h-1]?.year??2025,semester:r.data?.semesters[h-1]?.semester??G.SPRING})},[h]),c(i,{direction:"column",align:"stretch",gap:12,children:[c(i,{direction:"row",align:"center",gap:8,children:[t(u,{type:"NormalBold",color:"Text.default",children:e("common.year")}),t(ve,{direction:"row",gap:0,children:t(U,{options:[e("writeReviews.hallOfFameFeed.total")].concat(r.data?.semesters?r.data.semesters.map(f=>`${f.year} ${B(f.semester)}`):[]),selectedOption:h,setSelectedOption:x})})]}),o.isLoading?t(b,{}):c(j,{children:[c(i,{direction:"column",align:"center",gap:12,children:[t(u,{type:"NormalBold",color:"Text.default",children:h===0?e("writeReviews.hallOfFameFeed.total"):t(C,{i18nKey:"writeReviews.hallOfFameFeed.title",values:{year:r.data?.semesters[h-1]?.year??"",semester:r.data?.semesters[h-1]?.semester?B(r.data.semesters[h-1]?.semester):""},components:{space:t(j,{children:" "})}})}),c(i,{direction:"column",align:"center",gap:0,children:[t(u,{type:"Bigger",color:"Text.default",children:d?.reviews.length}),t(u,{type:"Smaller",color:"Text.default",children:e("writeReviews.hallOfFameFeed.total")})]})]}),c(i,{direction:"column",align:"stretch",gap:12,children:[d?.reviews.map(f=>t(E,{review:f},f.id)),o.hasNextPage&&t(b,{ref:n})]})]})]})}function Ie(){const{t:e}=S(),{user:r,status:o}=I(),{query:s,setParams:d}=M("GET",`/users/${r?.id}/reviews/liked`,{enabled:o==="success"});return p.useEffect(()=>{r!==null&&d({userId:r.id})},[o]),c(i,{direction:"column",align:"stretch",gap:12,children:[t(i,{direction:"column",align:"center",gap:12,children:t(u,{type:"NormalBold",color:"Text.default",children:e("writeReviews.likedReviews.title")})}),s.isLoading?t(b,{}):t(i,{direction:"column",align:"stretch",gap:12,children:s.data?.reviews.map(n=>t(E,{review:n},n.id))})]})}function Te(){const{t:e}=S(),{query:r,setParams:o,data:s}=P("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10}),{ref:d,inView:n}=W({threshold:0});return p.useEffect(()=>{n&&r.hasNextPage&&!r.isFetchingNextPage&&r.fetchNextPage()},[n]),p.useEffect(()=>{o({mode:"recent"})},[]),c(i,{direction:"column",align:"stretch",gap:12,children:[t(i,{direction:"column",align:"center",gap:12,children:t(u,{type:"NormalBold",color:"Text.default",children:e("writeReviews.tabs.recentFeed")})}),r.isLoading?t(b,{}):c(i,{direction:"column",align:"stretch",gap:12,children:[s?.reviews.map(l=>t(E,{review:l},l.id)),r.hasNextPage&&t(b,{ref:d})]})]})}const Be=k(v.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),Fe=k(v.jsx("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"})),$e=k(v.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"})),Ee=k(v.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3m7-6c0 1.3-.84 2.4-2 2.82V7h2z"})),Re=k(v.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),Ne=k(v.jsx("path",{d:"M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6"})),je={write:Fe,recentFeed:Ne,hallOfFameFeed:Ee,liked:X},Ce={write:Be,recentFeed:Re,hallOfFameFeed:$e,liked:Q},Le=({theme:e})=>L`
    background: ${e.colors.Background.Section.default};
    color: ${e.colors.Highlight.default};

    &:hover {
        background: ${e.colors.Background.Section.default};
    }
`,Me=m(i)`
    background: ${({theme:e})=>e.colors.Background.Tab.dark};
    color: ${({theme:e})=>e.colors.Text.lighter};
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    height: 34px;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Tab.darker};
    }

    ${({selected:e,theme:r})=>e&&Le({theme:r})}
`;function Oe({tab:e,setTab:r}){const o=$("tablet"),{t:s}=S(),{status:d}=I();return t(i,{direction:"row",gap:6,children:be.map((n,l)=>{const h=je[n],x=Ce[n];return d!=="success"&&(n==="liked"||n==="write")?null:c(Me,{direction:"row",align:"center",gap:6,padding:"8px 12px",selected:e==n,onClick:()=>r(n),children:[t(T,{size:12,children:e==n?t(x,{}):t(h,{})}),o?e==n&&t(u,{type:"Normal",children:s(`writeReviews.tabs.${n}`)}):t(u,{type:"Normal",children:s(`writeReviews.tabs.${n}`)})]},n)})})}function Pe({selectedLecture:e}){const{query:r,setParams:o,data:s}=P("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10,enabled:e!==null}),{ref:d,inView:n}=W({threshold:0});return p.useEffect(()=>{n&&r.hasNextPage&&!r.isFetchingNextPage&&r.fetchNextPage()},[n]),p.useEffect(()=>{e!==null&&o({mode:"default",courseId:e.courseId,professorId:e.professors[0]?.id,year:e.year,semester:e.semester})},[e]),e===null?t(i,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:t(Y,{})}):r.isLoading?t(i,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:t(b,{})}):c(i,{direction:"column",align:"stretch",gap:12,children:[c(i,{direction:"column",gap:12,align:"center",children:[t(u,{type:"NormalBold",color:"Text.default",children:t(C,{i18nKey:"writeReviews.write.title",values:{lectureName:e.name}})}),t(ee,{name:e.name,lectureId:e.lectureId,professors:e.professors,year:e.year,semester:e.semester})]}),t(O,{height:1,color:"Line.default"}),c(i,{direction:"column",gap:12,align:"stretch",children:[t(i,{direction:"column",gap:0,align:"center",children:t(u,{type:"NormalBold",color:"Text.default",children:t(C,{i18nKey:"writeReviews.write.related",values:{lectureName:e.name}})})}),s?.reviews.map(l=>t(E,{review:l},l.id)),r.hasNextPage&&t(b,{ref:d})]})]})}const We=m(z)`
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
`,Ve=m(i)`
    background: ${({theme:e})=>e.colors.Background.Section.default};
    flex: 1 1 auto;
    border-top-right-radius: 16px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,He=m(i)`
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function ze({selectedLecture:e,setSelectedLecture:r}){const{status:o}=I(),[s,d]=p.useState("write");return p.useEffect(()=>{o==="idle"&&d("recentFeed")},[o]),p.useEffect(()=>{s!=="write"&&r(null)},[s]),p.useEffect(()=>{e!==null&&d("write")},[e]),c(We,{direction:"column",align:"stretch",justify:"stretch",gap:0,children:[t(Oe,{tab:s,setTab:d}),t(Ve,{direction:"column",align:"stretch",justify:"stretch",gap:0,padding:"16px",children:t(He,{direction:"column",align:"stretch",gap:12,justify:"stretch",flex:"1 1 auto",children:(()=>{switch(s){case"write":return t(Pe,{selectedLecture:e});case"recentFeed":return t(Te,{});case"hallOfFameFeed":return t(Se,{});case"liked":return t(Ie,{});default:return null}})()})})]})}const De=m(i)`
    width: 100%;
    overflow: auto;
    padding: 0 20px 15px 20px;

    ${F.mobile} {
        padding: 0 8px 12px 8px;
    }
`,ht=D(function(){const r=$("mobile"),[o,s]=p.useState(null);return p.useEffect(()=>{Z("Page View",{page:"Write Reviews"})},[]),t(i,{direction:"column",align:"center",justify:"stretch",gap:0,flex:"1 0 0",children:c(De,{direction:r?"column":"row",align:"stretch",justify:"center",gap:12,flex:"1 0 0",children:[t(ye,{selectedLecture:o,setSelectedLecture:s}),t(ze,{selectedLecture:o,setSelectedLecture:s})]})})});export{ht as default};
//# sourceMappingURL=write-reviews-B9EX7ZDI.js.map
