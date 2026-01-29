import{r as p,p as v,w as D}from"./chunk-EPOLDU6W-C3OYm0FV.js";import{a as l,j as t,u as q,F as j}from"./emotion-react-jsx-runtime.browser.esm-wf5N78og.js";import{n as h,F as n}from"./FlexWrapper-DWNZuMzU.js";import{I as T,k as B,g as $,l as L,u as O,q as G,e as k}from"./useIsDevice-Z2DhLG1x.js";import{L as _}from"./Lock-BU1luQBS.js";import{L as M}from"./Line-CIkISzLp.js";import{L as b}from"./LoadingCircle-BcX-KW-c.js";import{T as u}from"./Typography-Ol_PaS51.js";import{W as z}from"./Widget-ITywYpTM.js";import{E as A,a as K,u as P,b as W,S as U,C as Y}from"./Credits-DC11XRq_.js";import{u as S}from"./useTranslation-kRIIHGpS.js";import{m as F}from"./media-CPwHYSnL.js";import{a as J}from"./handleLoginLogout-DMYz37ad.js";import{u as I}from"./useUserStore-DUHkyo8g.js";import{R as E,F as Q,a as X}from"./ReviewBlock-DWxz_vhd.js";import{T as C}from"./Trans-C52mCF8n.js";import{t as Z}from"./index-CkRGPDVn.js";import{R as ee}from"./ReviewWritingBlock-BP6rNZyR.js";import"./env-DuKll0S-.js";import"./IconButton-CaEuQP1w.js";import"./infiniteQueryBehavior-BYLUH72s.js";import"./queryPersister-8w-eh_un.js";import"./TextInputArea-Bw-udZsI.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"7a9abfb142d7578558a63df4d5d220134341f673"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="abace3b3-c61c-4ea3-b7ac-ed0c3c1b8795",e._sentryDebugIdIdentifier="sentry-dbid-abace3b3-c61c-4ea3-b7ac-ed0c3c1b8795")})()}catch{}const te=h.div`
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
`;function se({lecturesWrap:e,selectedLecture:r,setSelectedLecture:o,setSelectedLectureIndex:c}){const{t:d}=S(),[s,a]=p.useState(!1),[f,g]=p.useState(""),y=p.useRef(null);p.useEffect(()=>{if(!e)return;let i="";for(const x of e){for(const m of x.lectures)if(r&&m.lectureId===r.lectureId){i=m.code;break}if(i)break}g(i)},[r,e]),p.useEffect(()=>{const i=x=>{y.current&&!y.current.contains(x.target)&&a(!1)};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]);const w=(i,x,m,R,N)=>{o({name:m.name,lectureId:m.lectureId,courseId:m.courseId,professors:m.professors,year:R,semester:N}),c?.([i,x]),a(!1),g(m.code)};return l(te,{ref:y,children:[l(re,{onClick:()=>a(!s),direction:"row",gap:0,justify:"center",align:"center",children:[r?l(n,{direction:"column",gap:0,align:"center",children:[t(u,{type:"NormalBold",children:r?.name}),t(u,{type:"Normal",children:f})]}):t(u,{type:"Big",color:"Text.placeholder",children:d("writeReviews.mySummary.selectPlaceholder")}),l(n,{direction:"column",gap:0,style:{position:"absolute",right:"8px"},children:[t(T,{size:14,children:t(A,{})}),t(T,{size:14,children:t(K,{})})]})]}),s&&e&&t(oe,{children:e.map((i,x)=>l(p.Fragment,{children:[l(ne,{type:"NormalMedium",color:"Text.placeholder",children:[i.year," ",B(i.semester)]}),i.lectures.map((m,R)=>{const N=r?.lectureId===m.lectureId&&r?.year===i.year&&r?.semester===i.semester;return l(ie,{selected:N,onClick:()=>w(x,R,m,i.year,i.semester),direction:"row",gap:8,children:[t(u,{type:"Small",color:"Text.default",children:m.code}),t(u,{type:"Small",children:m.name})]},m.lectureId)})]},`${i.year}-${i.semester}`))})]})}function ce({totalLectures:e,reviewedLectures:r,totalLikes:o}){const c=$("mobile"),{t:d}=S();return l(n,{direction:"column",align:"center",gap:10,children:[!c&&t(u,{type:"Big",color:"Text.default",children:d("writeReviews.mySummary.title")}),l(n,{direction:"row",align:"center",gap:c?18:48,children:[l(n,{direction:"column",align:"center",gap:2,children:[l(n,{direction:"row",align:"flex-end",gap:0,children:[t(u,{type:"BiggerBold",color:"Text.default",children:r}),l(u,{type:"SmallBold",color:"Text.default",children:["/",e]})]}),t(u,{type:"Smaller",color:"Text.default",children:d("writeReviews.mySummary.written")})]}),l(n,{direction:"column",align:"center",gap:2,children:[t(n,{direction:"row",align:"flex-end",gap:0,children:t(u,{type:"BiggerBold",color:"Text.default",children:o})}),t(u,{type:"Smaller",color:"Text.default",children:d("writeReviews.mySummary.likes")})]})]})]})}const le=e=>L`
    background: ${e.colors.Background.Block.highlight};
    cursor: pointer;
`,ae=e=>L`
    background: ${e.colors.Background.Block.darker};
`,de=h(n)`
    background: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 5px;
    opacity: ${({written:e,isSelected:r})=>r?1:e?.3:1};
    text-align: center;

    ${({theme:e,isHovered:r})=>r&&le(e)};
    ${({theme:e,isSelected:r})=>r&&ae(e)};
`;function ue({lecture:e,isSelected:r,written:o}){const{status:c}=I(),[d,s]=p.useState(!1);return l(de,{direction:"column",align:"center",gap:2,padding:"8px 10px",isHovered:d,isSelected:r,written:o,onMouseOver:()=>{c!=="idle"&&s(!0)},onMouseLeave:()=>{c!=="idle"&&s(!1)},children:[l(n,{direction:"row",gap:8,justify:o?"space-between":"center",align:"center",style:{width:"100%"},children:[o&&t("div",{style:{width:"37px"}}),t(u,{type:"NormalBold",color:"Text.default",children:e.name}),o&&t(u,{type:"Smaller",color:"Text.lighter",children:"작성 완료"})]}),t(u,{type:"Normal",color:"Text.default",children:e.code})]})}function V(e,r,o,c){return e.courseId===r.courseId&&o===r.year&&c===r.semester}function pe({lectureWrapIndex:e,lecturesWrap:r,selectedLecture:o,setSelectedLecture:c,setSelectedLectureIndex:d,last:s}){const{status:a}=I();return l(n,{direction:"column",align:"stretch",justify:"stretch",gap:10,children:[l(u,{type:"NormalBold",color:"Text.default",children:[r.year," ",B(r.semester)]}),t(n,{direction:"column",align:"stretch",justify:"stretch",gap:8,children:r.lectures.map((f,g)=>t(n,{direction:"column",gap:0,align:"stretch",justify:"stretch",onClick:()=>{if(a==="idle")return;if(o&&V(f,o,r.year,r.semester)){c(null),d(null);return}const{name:y,courseId:w,professors:i}=f,{year:x,semester:m}=r;c({name:y,courseId:w,lectureId:f.lectureId,professors:i,year:x,semester:m}),d([e,g])},children:t(ue,{lecture:f,isSelected:o?V(f,o,r.year,r.semester):!1,written:f.written},g)},g))}),!s&&t(M,{height:2,color:"Line.divider"})]})}const H=p.memo(pe),fe=h(n)`
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
`;function ye({selectedLecture:e,setSelectedLecture:r}){const o=$("mobile"),c=q(),{user:d,status:s}=I(),{query:a}=O("GET",`/users/${d?.id}/lectures`,{enabled:s==="success"}),[f,g]=p.useState(null);p.useEffect(()=>{if(!a.isLoading&&a.data&&a.data.lecturesWrap.length>0){const w=a.data.lecturesWrap[f?.[0]??0],i=w?.lectures[f?.[1]??0];w&&i&&r({name:i.name,lectureId:i.lectureId,courseId:i.courseId,professors:i.professors,year:w.year,semester:w.semester})}},[a.data]);const y={year:2026,semester:1,lectures:Array(30).fill({courseId:1,lectureId:1,name:"전산기조직개론",code:"CS311",professors:[],written:!1})};return t(he,{borderRadius:12,direction:"column",gap:0,children:s==="loading"?t(b,{}):l(j,{children:[s==="idle"&&l(ge,{direction:o?"row":"column",gap:12,align:"center",justify:o?"space-evenly":"center",children:[t(we,{children:t(T,{size:30,color:c.colors.Highlight.default,children:t(_,{})})}),t(xe,{onClick:J,children:t(u,{type:"BigBold",style:{color:"#FFFFFF"},children:"로그인하러가기"})})]}),l(me,{blur:s==="idle",direction:o?"row":"column",align:o?"center":"stretch",justify:o?"space-between":"stretch",gap:12,children:[t(ce,{totalLectures:a.data?a.data.totalLecturesCount:0,reviewedLectures:a.data?a.data.reviewedLecturesCount:0,totalLikes:a.data?a.data.totalLikesCount:0}),!o&&t(M,{height:2,color:"Line.divider"}),o?t(se,{lecturesWrap:a.data?.lecturesWrap,selectedLecture:e,setSelectedLecture:r,setSelectedLectureIndex:g}):t(fe,{direction:"column",align:"stretch",gap:24,scrollLock:s==="idle",children:s==="idle"?t(H,{lectureWrapIndex:0,lecturesWrap:y,selectedLecture:null,setSelectedLecture:()=>{},setSelectedLectureIndex:()=>{},last:!0}):a.data?.lecturesWrap.map((w,i)=>t(H,{lectureWrapIndex:i,lecturesWrap:w,selectedLecture:e,setSelectedLecture:r,setSelectedLectureIndex:g,last:i===a.data.lecturesWrap.length-1},i))})]})]})})}const be=["write","recentFeed","hallOfFameFeed","liked"],ve=h(n)`
    width: 225px;
    height: 36px;
`,ke=20;function Se(){const{t:e}=S(),{query:r}=O("GET","/semesters",{select:i=>({...i,semesters:i.semesters.filter(x=>x.year>=2013)})}),{query:o,setParams:c,data:d}=P("GET","/reviews",{infinites:["reviews"],limit:ke}),{ref:s,inView:a}=W({threshold:0});p.useEffect(()=>{a&&o.hasNextPage&&!o.isFetchingNextPage&&o.fetchNextPage()},[a]);const[f,g]=p.useState(0),[y,w]=p.useState(0);return p.useEffect(()=>{c({mode:"hall-of-fame"})},[]),p.useEffect(()=>{if(f===0){c({mode:"hall-of-fame"});return}c({mode:"hall-of-fame",year:r.data?.semesters[f-1]?.year??2025,semester:r.data?.semesters[f-1]?.semester??G.SPRING})},[f]),l(n,{direction:"column",align:"stretch",gap:12,children:[l(n,{direction:"row",align:"center",gap:8,children:[t(u,{type:"NormalBold",color:"Text.default",children:e("common.year")}),t(ve,{direction:"row",gap:0,children:t(U,{options:[e("writeReviews.hallOfFameFeed.total")].concat(r.data?.semesters?r.data.semesters.map(i=>`${i.year} ${B(i.semester)}`):[]),selectedOption:f,setSelectedOption:g})})]}),o.isLoading?t(b,{}):l(j,{children:[l(n,{direction:"column",align:"center",gap:12,children:[t(u,{type:"NormalBold",color:"Text.default",children:f===0?e("writeReviews.hallOfFameFeed.total"):t(C,{i18nKey:"writeReviews.hallOfFameFeed.title",values:{year:r.data?.semesters[f-1]?.year??"",semester:r.data?.semesters[f-1]?.semester?B(r.data.semesters[f-1]?.semester):""},components:{space:t(j,{children:" "})}})}),l(n,{direction:"column",align:"center",gap:0,children:[t(u,{type:"Bigger",color:"Text.default",children:d?.reviews.length}),t(u,{type:"Smaller",color:"Text.default",children:e("writeReviews.hallOfFameFeed.total")})]})]}),l(n,{direction:"column",align:"stretch",gap:12,children:[d?.reviews.map(i=>t(E,{review:i},i.id)),o.hasNextPage&&t(b,{ref:s})]})]})]})}function Ie(){const{t:e}=S(),{user:r,status:o}=I(),{query:c,setParams:d}=O("GET",`/users/${r?.id}/reviews/liked`,{enabled:o==="success"});return p.useEffect(()=>{r!==null&&d({userId:r.id})},[o]),l(n,{direction:"column",align:"stretch",gap:12,children:[t(n,{direction:"column",align:"center",gap:12,children:t(u,{type:"NormalBold",color:"Text.default",children:e("writeReviews.likedReviews.title")})}),c.isLoading?t(b,{}):t(n,{direction:"column",align:"stretch",gap:12,children:c.data?.reviews.map(s=>t(E,{review:s},s.id))})]})}function Te(){const{t:e}=S(),{query:r,setParams:o,data:c}=P("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10}),{ref:d,inView:s}=W({threshold:0});return p.useEffect(()=>{s&&r.hasNextPage&&!r.isFetchingNextPage&&r.fetchNextPage()},[s]),p.useEffect(()=>{o({mode:"recent"})},[]),l(n,{direction:"column",align:"stretch",gap:12,children:[t(n,{direction:"column",align:"center",gap:12,children:t(u,{type:"NormalBold",color:"Text.default",children:e("writeReviews.tabs.recentFeed")})}),r.isLoading?t(b,{}):l(n,{direction:"column",align:"stretch",gap:12,children:[c?.reviews.map(a=>t(E,{review:a},a.id)),r.hasNextPage&&t(b,{ref:d})]})]})}const Be=k(v.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),Fe=k(v.jsx("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"})),$e=k(v.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"})),Ee=k(v.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3m7-6c0 1.3-.84 2.4-2 2.82V7h2z"})),Re=k(v.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),Ne=k(v.jsx("path",{d:"M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6"})),je={write:Fe,recentFeed:Ne,hallOfFameFeed:Ee,liked:X},Ce={write:Be,recentFeed:Re,hallOfFameFeed:$e,liked:Q},Le=({theme:e})=>L`
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
`;function Me({tab:e,setTab:r}){const o=$("tablet"),{t:c}=S(),{status:d}=I();return t(n,{direction:"row",gap:6,children:be.map((s,a)=>{const f=je[s],g=Ce[s];return d!=="success"&&(s==="liked"||s==="write")?null:l(Oe,{direction:"row",align:"center",gap:6,padding:"8px 12px",selected:e==s,onClick:()=>r(s),children:[t(T,{size:12,children:e==s?t(g,{}):t(f,{})}),o?e==s&&t(u,{type:"Normal",children:c(`writeReviews.tabs.${s}`)}):t(u,{type:"Normal",children:c(`writeReviews.tabs.${s}`)})]},s)})})}function Pe({selectedLecture:e}){const{query:r,setParams:o,data:c}=P("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10,enabled:e!==null}),{ref:d,inView:s}=W({threshold:0});return p.useEffect(()=>{s&&r.hasNextPage&&!r.isFetchingNextPage&&r.fetchNextPage()},[s]),p.useEffect(()=>{e!==null&&o({mode:"default",courseId:e.courseId,professorId:e.professors[0]?.id,year:e.year,semester:e.semester})},[e]),e===null?t(n,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:t(Y,{})}):r.isLoading?t(n,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:t(b,{})}):l(n,{direction:"column",align:"stretch",gap:12,children:[l(n,{direction:"column",gap:12,align:"center",children:[t(u,{type:"NormalBold",color:"Text.default",children:t(C,{i18nKey:"writeReviews.write.title",values:{lectureName:e.name}})}),t(ee,{name:e.name,lectureId:e.lectureId,professors:e.professors,year:e.year,semester:e.semester})]}),t(M,{height:1,color:"Line.default"}),l(n,{direction:"column",gap:12,align:"stretch",children:[t(n,{direction:"column",gap:0,align:"center",children:t(u,{type:"NormalBold",color:"Text.default",children:t(C,{i18nKey:"writeReviews.write.related",values:{lectureName:e.name}})})}),c?.reviews.map(a=>t(E,{review:a},a.id)),r.hasNextPage&&t(b,{ref:d})]})]})}const We=h(z)`
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
`;function ze({selectedLecture:e,setSelectedLecture:r}){const{status:o}=I(),[c,d]=p.useState("write");return p.useEffect(()=>{o==="idle"&&d("recentFeed")},[o]),p.useEffect(()=>{c!=="write"&&r(null)},[c]),p.useEffect(()=>{e!==null&&d("write")},[e]),l(We,{direction:"column",align:"stretch",justify:"stretch",gap:0,children:[t(Me,{tab:c,setTab:d}),t(Ve,{direction:"column",align:"stretch",justify:"stretch",gap:0,padding:"16px",children:t(He,{direction:"column",align:"stretch",gap:12,justify:"stretch",flex:"1 1 auto",children:(()=>{switch(c){case"write":return t(Pe,{selectedLecture:e});case"recentFeed":return t(Te,{});case"hallOfFameFeed":return t(Se,{});case"liked":return t(Ie,{});default:return null}})()})})]})}const De=h(n)`
    width: 100%;
    overflow: auto;
    padding: 0 20px 15px 20px;

    ${F.mobile} {
        padding: 0 8px 12px 8px;
    }
`,pt=D(function(){const r=$("mobile"),[o,c]=p.useState(null);return p.useEffect(()=>{Z("Page View",{page:"Write Reviews"})},[]),t(n,{direction:"column",align:"center",justify:"stretch",gap:0,flex:"1 0 0",children:l(De,{direction:r?"column":"row",align:"stretch",justify:"center",gap:12,flex:"1 0 0",children:[t(ye,{selectedLecture:o,setSelectedLecture:c}),t(ze,{selectedLecture:o,setSelectedLecture:c})]})})});export{pt as default};
//# sourceMappingURL=write-reviews-BCJWBG-_.js.map
