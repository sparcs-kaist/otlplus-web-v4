import{p as rt,r as c,L as gi,R as G,w as mi}from"./chunk-JZWAC4HX-CBuwGyw4.js";import{a as w,j as l,F as We,u as $e}from"./emotion-react-jsx-runtime.browser.esm-BGC4OTiZ.js";import{s as x,F as L}from"./FlexWrapper-CfTsYdG8.js";import{C as an,S as bi}from"./proxy-HIphuGbL.js";import{u as bn,t as Ie}from"./index-jhM64dRd.js";import{M as vi}from"./Modal-CEiKC2qD.js";import{S as gt}from"./StyledDivider-BrHYqJYR.js";import{C as $n}from"./CustomTimeTableGrid-BlSJeAFX.js";import{e as it,v as et,g as Ue,u as ne,I as X,k as sn,q as Ge,W as xe,x as yi}from"./useIsDevice-CnUs4Onx.js";import{T as z}from"./Typography-BBjj-9mR.js";import{A as vn,S as wi,c as xi,C as Yt}from"./checkEmpty-CHtltRTx.js";import{R as Ei,F as yn,p as Ti}from"./ReviewBlock-DRdjA4G0.js";import{B as Vt,m as F}from"./media-CzF5D7X9.js";import{u as Er,b as Tr,C as Si,S as Ci}from"./Credits-Bkead-O4.js";import{u as ot}from"./useUserStore-Dc1SUgvH.js";import{u as Ne}from"./useTranslation-BcdCxfD6.js";import{L as ln}from"./LoadingCircle-BZnK16CG.js";import{a as pt}from"./index-DH7V_932.js";import{I as nt}from"./IconButton-BbFFJYMs.js";import{u as Di}from"./useThemeStore-Bq61vDpk.js";import{c as Ri}from"./index-CvH5IbJa.js";import"./env-gxYNkkhf.js";import"./infiniteQueryBehavior-DF4n8pfu.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"e8ea4d3134a82925e6888bbd5ac743a7fcdfe96d"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d07d8b5d-f99e-422d-8acc-87713b3ed110",e._sentryDebugIdIdentifier="sentry-dbid-d07d8b5d-f99e-422d-8acc-87713b3ed110")}catch{}})();const Ai=it(rt.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"})),wn=it(rt.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),Sr=it(rt.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"})),Ii=it(rt.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),Ni=it(rt.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),Li=it(rt.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}));function yt(e,t){for(const n of e)for(const r of t)if(n.day==r.day&&n.begin<r.end&&r.begin<n.end)return!0;return!1}function Cr(e){return e.map(t=>t.name).join(", ")}function Mi(e){return e.slice().sort((n,r)=>{const i=n.day,o=r.day;return i!==o?i-o:n.begin-r.begin}).map(n=>n.str).join(" / ")}function ki(e){const t={};return e.forEach(n=>{const r=n.buildingCode,i=n.roomName;r in t?t[r]&&!t[r].includes(i)&&(t[r]=t[r].concat(`, ${i}`)):t[r]=i}),Object.entries(t).map(([n,r])=>`(${n}) ${r}`).join(" / ")}const Oi=x(L)`
    width: 100%;
`,zi=x(L)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,Bi=x(L)`
    flex: 1 0 0;
`,Xe=x(z)`
    white-space: nowrap;
`,Pi=({selectedLecture:e})=>{const{t}=Ne();return e?w(We,{children:[w(Oi,{direction:"column",gap:8,children:[w(L,{direction:"row",gap:6,children:[l(Xe,{type:"NormalBold",color:"Text.default",children:t("common.search.type")}),l(z,{type:"Normal",color:"Text.default",children:e?.type})]}),w(L,{direction:"row",gap:6,children:[l(Xe,{type:"NormalBold",color:"Text.default",children:t("common.search.department")}),l(z,{type:"Normal",color:"Text.default",children:e?.department.name})]}),w(L,{direction:"row",gap:6,children:[l(Xe,{type:"NormalBold",color:"Text.default",children:t("common.professor")}),l(z,{type:"Normal",color:"Text.default",children:Cr(e?.professors||[])})]}),w(L,{direction:"row",gap:6,children:[l(Xe,{type:"NormalBold",color:"Text.default",children:t("common.room")}),l(z,{type:"Normal",color:"Text.default",children:ki(e?.classes||[])})]}),w(L,{direction:"row",gap:6,children:[l(Xe,{type:"NormalBold",color:"Text.default",children:t("common.limit")}),l(z,{type:"Normal",color:"Text.default",children:e?.limitPeople})]}),w(L,{direction:"row",gap:6,children:[l(Xe,{type:"NormalBold",color:"Text.default",children:t("common.exam")}),l(z,{type:"Normal",color:"Text.default",children:Mi(e?.examTimes||[])})]})]}),l(zi,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e.isEnglish?"Eng":"한",t("common.language")],[e.credit,t("common.credit")],[e.limitPeople===0?"0.00:1":(e.numPeople/e.limitPeople).toFixed(2)+":1",t("timetable.competitionRate")]].map(([n,r],i)=>w(Bi,{direction:"column",gap:0,align:"center",children:[l(z,{type:"Bigger",color:"Text.default",children:n}),l(z,{type:"Smaller",color:"Text.default",children:r})]},i))})]}):null},Fi=x(L)`
    width: 100%;
    max-width: 300px;
    padding: 10px;
`,Ui=x(L)`
    flex: 1 0 0;
`,$i=x.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,ji=({selectedCourseId:e,selectedProfessorId:t})=>{const{t:n}=Ne(),[r,i]=c.useState(!1),{query:o,setParams:a,data:s}=Er("GET","/reviews",{gcTime:0,infinites:["reviews"],limit:20}),{ref:d,inView:h}=Tr({threshold:0});return c.useEffect(()=>{i(!1);const u=setTimeout(()=>{a({mode:"default",courseId:e??void 0,professorId:t??void 0}),i(!0)},1e3);return()=>clearTimeout(u)},[e,t]),c.useEffect(()=>{h&&o.hasNextPage&&!o.isFetchingNextPage&&o.fetchNextPage()},[h,o]),!s||!r?l(ln,{}):w(We,{children:[l(L,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:l(Fi,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[et(s?.averageGrade,s?.reviews.length),n("common.grade")],[et(s?.averageLoad,s?.reviews.length),n("common.load")],[et(s?.averageSpeech,s?.reviews.length),n("common.speech")]].map(([u,f],g)=>w(Ui,{direction:"column",gap:0,align:"center",children:[l(z,{type:"Bigger",color:"Text.default",children:u}),l(z,{type:"Smaller",color:"Text.default",children:f})]},g))})}),l($i,{}),s?.reviews.map(u=>l(Ei,{review:u,linkToDictionary:!0},u.id)),o.hasNextPage&&l(ln,{ref:d})]})},Wi=x(L)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,jn=x(L)`
    width: 100%;
`,qi=x(L)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
    text-align: center;
`,Hi=x(L)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    margin-top: auto;
    z-index: 20;
`,Yi=x(gi)`
    text-decoration: none;
`,Vi=x.a`
    text-decoration: none;
`,Wn=({setNonLoginTimetable:e,handleRemoveFromTimetable:t,selectedLecture:n,onMobileModalClose:r,year:i,semester:o,currentTimetableId:a,timetableLectures:s})=>{const d=bn(),h=$e(),{t:u}=Ne(),{user:f,status:g}=ot(),p=Ue("tablet"),{requestFunction:D}=ne("PATCH",`/timetables/${a}`,{onSuccess:()=>{d.invalidateQueries({queryKey:[`/timetables/${a}`]})}}),[v,m]=c.useState([]),{query:y,setParams:T}=ne("GET",`/users/${f?.id}/wishlist`,{enabled:g==="success"&&i!=-1});c.useEffect(()=>{i!==-1&&T({year:i,semester:o})},[i,o,a]),c.useEffect(()=>{y.data&&m(y.data.courses.flatMap(b=>b.lectures).map(b=>b.id))},[y.data]);const{requestFunction:R}=ne("PATCH",`/users/${f?.id}/wishlist`,{onSuccess:()=>{d.invalidateQueries({queryKey:[`/users/${f?.id}/wishlist`]})}}),E=c.useRef(null),N=b=>{const S={syy:String(i),smtDivCd:String(o),subjtCd:b.code,syllabusOpenYn:"0"};return`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${btoa(JSON.stringify(S))}`},A=async b=>{if(s){if(g!=="success"&&e!==void 0){if(s.some(S=>yt(S.classes,b.classes))){alert(u("timetable.addLectureConflict"));return}e(S=>[...S,b]),Ie("Add Lecture to Timetable",{lectureId:b.id,lectureCode:b.code,courseName:b.name,timetableId:null,isGuest:!0,source:"LectureDetail"});return}if(a){if(s.some(S=>yt(S.classes,b.classes))){alert(u("timetable.addLectureConflict"));return}}else{console.warn("No timetable selected");return}D({action:"add",lectureId:b.id}),Ie("Add Lecture to Timetable",{lectureId:b.id,lectureCode:b.code,courseName:b.name,timetableId:a,source:"LectureDetail"})}},k=async(b,S)=>{if(g==="idle")return;const M=b?"delete":"add";Ie("Update Wishlist",{action:M,lectureId:S,source:"LectureDetail"}),R({lectureId:S,mode:M})};return l(Wi,{direction:"column",gap:12,align:"center",justify:n?"start":"center",children:n?w(We,{children:[w(qi,{direction:"column",gap:2,align:"center",justify:"center",children:[w(L,{direction:"row",align:"center",gap:8,justify:p?"space-between":"center",style:{width:"100%"},children:[p&&l("div",{style:{width:20}}),l(z,{type:"Bigger",color:"Text.default",children:n.name+n.subtitle}),p&&l(X,{size:20,onClick:r,color:h.colors.Text.default,children:l(an,{})})]}),l(z,{type:"Big",color:"Text.default",children:n.code})]}),w(L,{direction:"row",gap:8,justify:"flex-end",style:{width:"100%"},children:[l(Yi,{to:`/dictionary?courseId=${n.courseId}`,children:l(z,{type:"Normal",color:"Highlight.default",style:{cursor:"pointer"},children:u("header.dictionary")})}),l(Vi,{href:N(n),target:"_blank",children:l(z,{type:"Normal",color:"Highlight.default",style:{cursor:"pointer"},children:u("header.syllabus")})})]}),l(jn,{direction:"column",gap:10,align:"center",children:l(Pi,{selectedLecture:n})}),l(jn,{ref:E,direction:"column",gap:10,children:l(ji,{selectedCourseId:n.courseId,selectedProfessorId:n.professors[0]?.id??-1})}),p&&w(Hi,{direction:"row",gap:12,justify:"flex-end",children:[g==="success"&&w(Vt,{onClick:()=>{k(v.includes(n.id),n.id),r&&r()},children:[l(X,{size:15,children:l(yn,{})}),l(z,{type:"NormalBold",children:v.includes(n.id)?u("timetable.removeFromWishlist"):u("timetable.addToWishlist")})]}),(a||g!=="success")&&(s?.some(b=>b.id===n.id)?w(Vt,{type:"selected",onClick:()=>{t&&t(n.id),r&&r()},children:[l(X,{size:15,children:l(an,{})}),l(z,{type:"NormalBold",children:u("timetable.removeFromTimetable")})]}):w(Vt,{type:"selected",onClick:()=>{A(n),r&&r()},children:[l(X,{size:15,children:l(vn,{})}),l(z,{type:"NormalBold",children:u("timetable.addToTimetable")})]}))]})]}):l(Si,{})})},Gi=x.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    transition: all 0.2s ease;
    transform: none;
    box-shadow: none;
    overflow: hidden;
    flex-shrink: 0;
    opacity: 0.2;

    [data-selected-lecture=""] & {
        opacity: 1;
    }

    &[data-is-selected="true"] {
        opacity: 1;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
`,Xi=x(L)`
    width: 100%;
    padding: 8px 12px;
    word-break: keep-all;
`,Ki=x.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 18px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    cursor: pointer;

    &:hover,
    [data-selected-lecture="${({lectureId:e})=>e}"] &,
    [data-hovered-lectures~="${({lectureId:e})=>e}"]:not(:hover) & {
        background-color: ${({theme:e})=>e.colors.Background.Block.dark};
    }

    ${F.tablet} {
        &:hover {
            background-color: ${({theme:e})=>e.colors.Background.Block.default};
        }
        [data-hovered-lectures~="${({lectureId:e})=>e}"] & {
            background-color: ${({theme:e})=>e.colors.Background.Block.dark};
        }
    }
`,qn=x.div`
    width: 95%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.block};
    align-self: center;
`,Qi=({course:e,wishlist:t,currentTimetableId:n,timetableLectures:r,isAddTimetablePending:i,handleSetHoveredLecture:o,handleClearHoveredLecture:a,handleSetSelectedLecture:s,selectedLecture:d,hoveredLecture:h,handleLikeClick:u,handleAddToTimetable:f,t:g})=>{const{status:p}=ot(),D=$e(),v=Ue("tablet"),m=G.useRef(null);return c.useEffect(()=>{m.current?.setAttribute("data-is-selected",d?.id!=null&&e.lectures.some(y=>y.id===d.id)?"true":"false")},[d,e]),w(Gi,{ref:m,"data-is-selected":"",children:[w(Xi,{direction:"row",gap:6,align:"center",justify:"space-between",children:[w(L,{direction:"row",gap:6,align:"center",style:{opacity:e.completed?.3:1},children:[l(z,{type:"NormalBold",color:"Text.default",children:e.name}),l(z,{type:"Normal",color:"Text.default",children:e.code})]}),e.completed?l(z,{type:"Normal",color:"Text.default",children:g("common.completedCourse")}):l(z,{type:"Normal",color:"Highlight.default",style:{textAlign:"end"},children:e.type})]}),l(qn,{}),e.lectures.map((y,T)=>{const R=t.includes(y.id),E=h?.some(N=>N.id===y.id);return w(G.Fragment,{children:[w(Ki,{"data-lecture-id":y.id,onMouseEnter:()=>o(y),onMouseLeave:a,onClick:()=>s(y),lectureId:y.id,children:[w(L,{direction:"column",gap:0,children:[v&&E&&w(z,{type:"Small",color:"Text.placeholder",className:"onTablet",children:[y.department.name," / ",y.type]}),w(L,{direction:"row",gap:6,style:{opacity:e.completed?.3:1},children:[w(z,{type:"NormalBold",color:"Text.default",children:[y.classNo," ",y.subtitle]}),l(z,{type:"Normal",color:"Text.default",children:Cr(y.professors)})]}),v&&E&&w(z,{type:"Small",color:"Text.placeholder",className:"onTablet",children:[y.classes[0]?.buildingName," ",y.classes[0]?.roomName," /"," ",y.limitPeople]})]}),w(L,{direction:"row",gap:6,onClick:N=>N.stopPropagation(),children:[!v&&p==="success"&&(R?l(X,{size:15,color:D.colors.Highlight.default,onClick:()=>u(R,y.id),children:l(yn,{})}):l(X,{size:15,color:D.colors.Text.default,onClick:()=>u(R,y.id),children:l(Sr,{})})),(!v||E)&&l("span",{title:n==null&&p==="success"?g("timetable.myTimeTableLectureAddWarning"):"",style:{opacity:n==null&&p==="success"||r.some(N=>yt(N.classes,y.classes))?.3:1,cursor:i?"wait":"pointer"},children:l(X,{size:v?30:15,color:D.colors.Text.default,onClick:()=>f(y),children:l(vn,{})})})]})]}),T!==e.lectures.length-1&&l(qn,{})]},y.id)})]})},Ji=c.memo(Qi,(e,t)=>!(e.course!==t.course||e.wishlist!==t.wishlist||e.currentTimetableId!==t.currentTimetableId||e.timetableLectures!==t.timetableLectures||e.isAddTimetablePending!==t.isAddTimetablePending||e.selectedLecture!==t.selectedLecture||e.hoveredLecture!==t.hoveredLecture)),Zi=x(L)`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,_i=x(L)`
    height: 36px;
`,eo=x.div`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    gap: 8px;
    border-radius: 6px;
    background-color: ${({isSelected:e,theme:t})=>e?t.colors.Background.Button.highlightDark:t.colors.Background.Button.highlight};
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`;function to({year:e,semester:t,timeFilter:n,setTimeFilter:r,data:i,setSearchResult:o,isWishlist:a,setIsWishlist:s,setWishlist:d,sortOption:h,setSortOption:u,handleSearch:f,t:g}){const p=$e(),{user:D,status:v}=ot(),{query:m,setParams:y}=ne("GET",`/users/${D?.id}/wishlist`,{enabled:v==="success"&&e!=-1});return c.useEffect(()=>{m.data!==void 0&&o(a?m.data:i??{courses:[]})},[a,i]),c.useEffect(()=>{m.data!==void 0&&(d(m.data.courses.flatMap(T=>T.lectures).map(T=>T.id)),a&&o(m.data))},[m.data]),c.useEffect(()=>{o({courses:[]}),e!==-1&&y({year:e,semester:t})},[e,t]),c.useEffect(()=>{i!==void 0&&(o(i),s(!1))},[i]),w(We,{children:[l(Zi,{direction:"row",justify:"stretch",gap:0,children:l(wi,{options:["type","department","level","term","time"],timeFilter:n,setTimeFilter:r,onSearch:f})}),w(L,{direction:"row",gap:0,justify:"space-between",align:"center",children:[w(eo,{isSelected:a,onClick:()=>{s(T=>!T)},style:{paddingBlock:10},children:[l(X,{size:15,color:p.colors.Highlight.default,children:a?l(yn,{}):l(Sr,{})}),l(z,{type:"Normal",color:"Highlight.default",children:g("common.wishlist")})]}),l(_i,{direction:"row",gap:0,children:l(Ci,{options:[g("dictionary.sortOptions.code"),g("dictionary.sortOptions.popularity"),g("dictionary.sortOptions.studentCount")],setSelectedOption:u,selectedOption:h})})]})]})}const no=c.memo(to,(e,t)=>e.year===t.year&&e.semester===t.semester&&e.timeFilter===t.timeFilter&&e.sortOption===t.sortOption&&e.isWishlist===t.isWishlist&&e.data===t.data),ro=x(L)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,io=x(z)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,oo=x(L)`
    height: fit-content;
    overflow-y: auto;
    position: relative;
    flex-grow: 1;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    /* 상단/하단 페이드 오버레이: 자식 배경에 가려지지 않도록 컨테이너 위에 표시 */
    ${F.tablet} {
        &::before,
        &::after {
            width: 100%;
            content: "";
            position: sticky;
            left: 0;
            right: 0;
            min-height: 40%;
            pointer-events: none; /* 클릭을 막지 않도록 */
            z-index: 1;
        }
        &::before {
            top: 0;
            /* 현재 배경색 기준으로 페이드 */
            background: linear-gradient(
                to bottom,
                ${({theme:e})=>e.colors.Background.Section.default} 0%,
                rgba(0, 0, 0, 0) 100%
            );
        }
        &::after {
            bottom: 0;
            background: linear-gradient(
                to top,
                ${({theme:e})=>e.colors.Background.Section.default} 0%,
                rgba(0, 0, 0, 0) 100%
            );
        }
    }
`,ao=x(L)`
    width: 100%;
`,so=x(L)`
    width: 100%;
    height: 100%;
    flex-grow: 1;

    ${F.tablet} {
        padding-right: 4px;
    }
`,lo=x.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({theme:e})=>e.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
`,co=e=>{if(!e)return e;const t=new Map;return e.courses.forEach(n=>{const r=t.get(n.id);if(!r){t.set(n.id,{...n,lectures:[...n.lectures]});return}const i=new Set(r.lectures.map(a=>a.id)),o=[...r.lectures];n.lectures.forEach(a=>{i.has(a.id)||(i.add(a.id),o.push(a))}),t.set(n.id,{...r,lectures:o})}),{...e,courses:Array.from(t.values())}},Gt=50,uo=({timetableLectures:e,year:t,semester:n,setNonLoginTimetable:r,hoveredLecture:i,setHoveredLecture:o,selectedLecture:a,setSelectedLecture:s,timeFilter:d,setTimeFilter:h,currentTimetableId:u})=>{const{t:f}=Ne(),{user:g,status:p}=ot(),D=bn(),{ref:v,inView:m}=Tr({threshold:0}),y=Ue("tablet"),{mutation:T,requestFunction:R}=ne("PATCH",`/timetables/${u}`,{onSuccess:()=>{D.invalidateQueries({queryKey:[`/timetables/${u}`]})}}),E=c.useRef(null),N=c.useRef(null),A=c.useRef(null),{requestFunction:k}=ne("PATCH",`/users/${g?.id}/wishlist`,{onSuccess:()=>{D.invalidateQueries({queryKey:[`/users/${g?.id}/wishlist`]})}}),[b,S]=c.useState(!1),[M,O]=c.useState({courses:[]}),[$,W]=c.useState(!1),[J,U]=c.useState([]),[oe,q]=c.useState(0),{query:_,setParams:j,data:ae}=Er("GET","/lectures",{infinites:["courses"],limit:Gt,gcTime:0,select:co,enabled:b,iterate:C=>{let I=0;return C.courses.forEach(ue=>{I+=ue.lectures.length}),I<Gt?0:I}}),Le=c.useCallback(C=>{if(xi(C)){alert(f("common.search.empty"));return}W(!1);const I={year:t,semester:n,...C,order:["code","popular","studentCount"][oe]??"code",offset:0,limit:Gt,day:C.time?.day??void 0,begin:C.time?.begin??void 0,end:C.time?.end??void 0};j(I),S(!0),Ie("Search Lectures",{year:t,semester:n,keyword:C.keyword??"",department:C.department??"",type:C.type??"",level:C.level??""})},[t,n,oe]);c.useEffect(()=>{W(!1),j(C=>({...C,order:["code","popular","studentCount"][oe]??"code",offset:0}))},[oe]),c.useEffect(()=>{m&&_.hasNextPage&&!_.isFetchingNextPage&&_.fetchNextPage()},[m]),c.useEffect(()=>{const C=I=>{E.current&&!E.current.contains(I.target)&&N.current&&N.current.contains(I.target)&&s(null)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);const K=G.useMemo(()=>M.courses.flatMap(C=>C.lectures),[M.courses]),ee=c.useCallback(()=>{if(!y)return;if(!A.current){o([]);return}const I=A.current.getBoundingClientRect(),ue=I.top+I.height/2,H=document.elementFromPoint(I.left+50,ue);if(!H)return;const te=H.closest("[data-lecture-id]");if(te){const se=parseInt(te.getAttribute("data-lecture-id")||"",10),Se=K.find(Me=>Me.id===se);o(Se?[Se]:[])}},[y,K,o,s]);c.useEffect(()=>{if(!y||!A.current)return;const C=A.current;return C.addEventListener("scroll",ee),()=>{C.removeEventListener("scroll",ee)}},[y,ee]),c.useEffect(()=>{if(!y||_.isFetching||a)return;let C;const I=requestAnimationFrame(()=>{C=requestAnimationFrame(()=>{ee()})});return()=>{cancelAnimationFrame(I),cancelAnimationFrame(C)}},[_.isFetching,y,ee,a]);const Te=async(C,I)=>{if(p==="idle")return;const ue=C?"delete":"add";Ie("Update Wishlist",{action:ue,lectureId:I}),U(C?H=>H.filter(te=>te!==I):H=>[...H,I]);try{k({lectureId:I,mode:ue})}catch(H){console.error("Failed to update wishlist:",H),U(C?te=>[...te,I]:te=>te.filter(se=>se!==I))}},je=async C=>{if(p==="success"){if(!u){console.warn("No timetable selected");return}if(e.some(I=>yt(I.classes,C.classes))){alert(f("timetable.addLectureConflict"));return}R({action:"add",lectureId:C.id}),Ie("Add Lecture to Timetable",{lectureId:C.id,lectureCode:C.code,courseName:C.name,timetableId:u})}else{if(e.some(I=>yt(I.classes,C.classes))){alert(f("timetable.addLectureConflict"));return}r(I=>[...I,C]),Ie("Add Lecture to Timetable",{lectureId:C.id,lectureCode:C.code,courseName:C.name,timetableId:null,isGuest:!0})}},re=c.useCallback(C=>{y||o([C])},[y,o]),qe=c.useCallback(()=>{y||o([])},[y,o]),ve=c.useCallback(C=>{if(a?.id===C.id){s(null);return}s(C)},[s,a]);return c.useEffect(()=>{A.current?.setAttribute("data-hovered-lectures",i.map(C=>C.id).join(" "))},[i,M]),c.useEffect(()=>{A.current?.setAttribute("data-selected-lecture",a?a.id.toString():"")},[a,M]),w(ro,{direction:"column",justify:"stretch",align:"stretch",gap:8,ref:N,children:[l(no,{year:t,semester:n,timeFilter:d,setTimeFilter:h,sortOption:oe,setSortOption:q,data:ae,isWishlist:$,setIsWishlist:W,setWishlist:U,setSearchResult:O,t:f,handleSearch:Le}),M.courses.length!==0?l(oo,{direction:"column",gap:0,ref:A,"data-hovered-lectures":"","data-selected-lecture":"",children:w(ao,{direction:"row",gap:0,children:[w(so,{direction:"column",gap:12,ref:E,children:[M.courses.map(C=>l(Ji,{course:C,hoveredLecture:i,selectedLecture:a,wishlist:J,currentTimetableId:u,timetableLectures:e,isAddTimetablePending:T.isPending,handleSetHoveredLecture:re,handleClearHoveredLecture:qe,handleSetSelectedLecture:ve,handleLikeClick:Te,handleAddToTimetable:je,t:f},C.id)),!$&&_.hasNextPage&&l(ln,{ref:v})]}),y&&l(lo,{})]})}):l(io,{type:"Bigger",color:"Text.placeholder",children:f("dictionary.noResults")})]})},Hn=G.memo(uo,(e,t)=>e.year===t.year&&e.semester===t.semester&&e.timeFilter===t.timeFilter&&e.currentTimetableId===t.currentTimetableId&&e.hoveredLecture===t.hoveredLecture&&e.selectedLecture===t.selectedLecture&&e.timetableLectures===t.timetableLectures);function ho(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>r=>{t.forEach(i=>i(r))},t)}const Pt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function at(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function xn(e){return"nodeType"in e}function ie(e){var t,n;return e?at(e)?e:xn(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function En(e){const{Document:t}=ie(e);return e instanceof t}function Tt(e){return at(e)?!1:e instanceof ie(e).HTMLElement}function Dr(e){return e instanceof ie(e).SVGElement}function st(e){return e?at(e)?e.document:xn(e)?En(e)?e:Tt(e)||Dr(e)?e.ownerDocument:document:document:document}const Ee=Pt?c.useLayoutEffect:c.useEffect;function Tn(e){const t=c.useRef(e);return Ee(()=>{t.current=e}),c.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function fo(){const e=c.useRef(null),t=c.useCallback((r,i)=>{e.current=setInterval(r,i)},[]),n=c.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function wt(e,t){t===void 0&&(t=[e]);const n=c.useRef(e);return Ee(()=>{n.current!==e&&(n.current=e)},t),n}function St(e,t){const n=c.useRef();return c.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function Lt(e){const t=Tn(e),n=c.useRef(null),r=c.useCallback(i=>{i!==n.current&&t?.(i,n.current),n.current=i},[]);return[n,r]}function cn(e){const t=c.useRef();return c.useEffect(()=>{t.current=e},[e]),t.current}let Xt={};function Ct(e,t){return c.useMemo(()=>{if(t)return t;const n=Xt[e]==null?0:Xt[e]+1;return Xt[e]=n,e+"-"+n},[e,t])}function Rr(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((o,a)=>{const s=Object.entries(a);for(const[d,h]of s){const u=o[d];u!=null&&(o[d]=u+e*h)}return o},{...t})}}const tt=Rr(1),Mt=Rr(-1);function po(e){return"clientX"in e&&"clientY"in e}function Sn(e){if(!e)return!1;const{KeyboardEvent:t}=ie(e.target);return t&&e instanceof t}function go(e){if(!e)return!1;const{TouchEvent:t}=ie(e.target);return t&&e instanceof t}function dn(e){if(go(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return po(e)?{x:e.clientX,y:e.clientY}:null}const kt=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[kt.Translate.toString(e),kt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Yn="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function mo(e){return e.matches(Yn)?e:e.querySelector(Yn)}const bo={display:"none"};function vo(e){let{id:t,value:n}=e;return G.createElement("div",{id:t,style:bo},n)}function yo(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const i={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return G.createElement("div",{id:t,style:i,role:"status","aria-live":r,"aria-atomic":!0},n)}function wo(){const[e,t]=c.useState("");return{announce:c.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const Ar=c.createContext(null);function xo(e){const t=c.useContext(Ar);c.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Eo(){const[e]=c.useState(()=>new Set),t=c.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[c.useCallback(r=>{let{type:i,event:o}=r;e.forEach(a=>{var s;return(s=a[i])==null?void 0:s.call(a,o)})},[e]),t]}const To={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},So={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Co(e){let{announcements:t=So,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=To}=e;const{announce:o,announcement:a}=wo(),s=Ct("DndLiveRegion"),[d,h]=c.useState(!1);if(c.useEffect(()=>{h(!0)},[]),xo(c.useMemo(()=>({onDragStart(f){let{active:g}=f;o(t.onDragStart({active:g}))},onDragMove(f){let{active:g,over:p}=f;t.onDragMove&&o(t.onDragMove({active:g,over:p}))},onDragOver(f){let{active:g,over:p}=f;o(t.onDragOver({active:g,over:p}))},onDragEnd(f){let{active:g,over:p}=f;o(t.onDragEnd({active:g,over:p}))},onDragCancel(f){let{active:g,over:p}=f;o(t.onDragCancel({active:g,over:p}))}}),[o,t])),!d)return null;const u=G.createElement(G.Fragment,null,G.createElement(vo,{id:r,value:i.draggable}),G.createElement(yo,{id:s,announcement:a}));return n?pt.createPortal(u,n):u}var Y;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Y||(Y={}));function Ot(){}function Vn(e,t){return c.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Do(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const be=Object.freeze({x:0,y:0});function Ro(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Ao(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Io(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function No(e,t){if(!e||e.length===0)return null;const[n]=e;return n[t]}function Gn(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const Lo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=Gn(t,t.left,t.top),o=[];for(const a of r){const{id:s}=a,d=n.get(s);if(d){const h=Ro(Gn(d),i);o.push({id:s,data:{droppableContainer:a,value:h}})}}return o.sort(Ao)};function Mo(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-r,s=o-n;if(r<i&&n<o){const d=t.width*t.height,h=e.width*e.height,u=a*s,f=u/(d+h-u);return Number(f.toFixed(4))}return 0}const ko=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const o of r){const{id:a}=o,s=n.get(a);if(s){const d=Mo(s,t);d>0&&i.push({id:a,data:{droppableContainer:o,value:d}})}}return i.sort(Io)};function Oo(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Ir(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:be}function zo(e){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i.reduce((a,s)=>({...a,top:a.top+e*s.y,bottom:a.bottom+e*s.y,left:a.left+e*s.x,right:a.right+e*s.x}),{...n})}}const Bo=zo(1);function Po(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Fo(e,t,n){const r=Po(t);if(!r)return e;const{scaleX:i,scaleY:o,x:a,y:s}=r,d=e.left-a-(1-i)*parseFloat(n),h=e.top-s-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),u=i?e.width/i:e.width,f=o?e.height/o:e.height;return{width:u,height:f,top:h,right:d+u,bottom:h+f,left:d}}const Uo={ignoreTransform:!1};function lt(e,t){t===void 0&&(t=Uo);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:h,transformOrigin:u}=ie(e).getComputedStyle(e);h&&(n=Fo(n,h,u))}const{top:r,left:i,width:o,height:a,bottom:s,right:d}=n;return{top:r,left:i,width:o,height:a,bottom:s,right:d}}function Xn(e){return lt(e,{ignoreTransform:!0})}function $o(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function jo(e,t){return t===void 0&&(t=ie(e).getComputedStyle(e)),t.position==="fixed"}function Wo(e,t){t===void 0&&(t=ie(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const o=t[i];return typeof o=="string"?n.test(o):!1})}function Cn(e,t){const n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(En(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Tt(i)||Dr(i)||n.includes(i))return n;const o=ie(e).getComputedStyle(i);return i!==e&&Wo(i,o)&&n.push(i),jo(i,o)?n:r(i.parentNode)}return e?r(e):n}function Nr(e){const[t]=Cn(e,1);return t??null}function Kt(e){return!Pt||!e?null:at(e)?e:xn(e)?En(e)||e===st(e).scrollingElement?window:Tt(e)?e:null:null}function Lr(e){return at(e)?e.scrollX:e.scrollLeft}function Mr(e){return at(e)?e.scrollY:e.scrollTop}function un(e){return{x:Lr(e),y:Mr(e)}}var V;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(V||(V={}));function kr(e){return!Pt||!e?!1:e===document.scrollingElement}function Or(e){const t={x:0,y:0},n=kr(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},i=e.scrollTop<=t.y,o=e.scrollLeft<=t.x,a=e.scrollTop>=r.y,s=e.scrollLeft>=r.x;return{isTop:i,isLeft:o,isBottom:a,isRight:s,maxScroll:r,minScroll:t}}const qo={x:.2,y:.2};function Ho(e,t,n,r,i){let{top:o,left:a,right:s,bottom:d}=n;r===void 0&&(r=10),i===void 0&&(i=qo);const{isTop:h,isBottom:u,isLeft:f,isRight:g}=Or(e),p={x:0,y:0},D={x:0,y:0},v={height:t.height*i.y,width:t.width*i.x};return!h&&o<=t.top+v.height?(p.y=V.Backward,D.y=r*Math.abs((t.top+v.height-o)/v.height)):!u&&d>=t.bottom-v.height&&(p.y=V.Forward,D.y=r*Math.abs((t.bottom-v.height-d)/v.height)),!g&&s>=t.right-v.width?(p.x=V.Forward,D.x=r*Math.abs((t.right-v.width-s)/v.width)):!f&&a<=t.left+v.width&&(p.x=V.Backward,D.x=r*Math.abs((t.left+v.width-a)/v.width)),{direction:p,speed:D}}function Yo(e){if(e===document.scrollingElement){const{innerWidth:o,innerHeight:a}=window;return{top:0,left:0,right:o,bottom:a,width:o,height:a}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function zr(e){return e.reduce((t,n)=>tt(t,un(n)),be)}function Vo(e){return e.reduce((t,n)=>t+Lr(n),0)}function Go(e){return e.reduce((t,n)=>t+Mr(n),0)}function Xo(e,t){if(t===void 0&&(t=lt),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);Nr(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Ko=[["x",["left","right"],Vo],["y",["top","bottom"],Go]];class Dn{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Cn(n),i=zr(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[o,a,s]of Ko)for(const d of a)Object.defineProperty(this,d,{get:()=>{const h=s(r),u=i[o]-h;return this.rect[d]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class mt{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var i;(i=this.target)==null||i.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function Qo(e){const{EventTarget:t}=ie(e);return e instanceof t?e:st(e)}function Qt(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var fe;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(fe||(fe={}));function Kn(e){e.preventDefault()}function Jo(e){e.stopPropagation()}var P;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(P||(P={}));const Br={start:[P.Space,P.Enter],cancel:[P.Esc],end:[P.Space,P.Enter,P.Tab]},Zo=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case P.Right:return{...n,x:n.x+25};case P.Left:return{...n,x:n.x-25};case P.Down:return{...n,y:n.y+25};case P.Up:return{...n,y:n.y-25}}};class Pr{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new mt(st(n)),this.windowListeners=new mt(ie(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(fe.Resize,this.handleCancel),this.windowListeners.add(fe.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(fe.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&Xo(r),n(be)}handleKeyDown(t){if(Sn(t)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:o=Br,coordinateGetter:a=Zo,scrollBehavior:s="smooth"}=i,{code:d}=t;if(o.end.includes(d)){this.handleEnd(t);return}if(o.cancel.includes(d)){this.handleCancel(t);return}const{collisionRect:h}=r.current,u=h?{x:h.left,y:h.top}:be;this.referenceCoordinates||(this.referenceCoordinates=u);const f=a(t,{active:n,context:r.current,currentCoordinates:u});if(f){const g=Mt(f,u),p={x:0,y:0},{scrollableAncestors:D}=r.current;for(const v of D){const m=t.code,{isTop:y,isRight:T,isLeft:R,isBottom:E,maxScroll:N,minScroll:A}=Or(v),k=Yo(v),b={x:Math.min(m===P.Right?k.right-k.width/2:k.right,Math.max(m===P.Right?k.left:k.left+k.width/2,f.x)),y:Math.min(m===P.Down?k.bottom-k.height/2:k.bottom,Math.max(m===P.Down?k.top:k.top+k.height/2,f.y))},S=m===P.Right&&!T||m===P.Left&&!R,M=m===P.Down&&!E||m===P.Up&&!y;if(S&&b.x!==f.x){const O=v.scrollLeft+g.x,$=m===P.Right&&O<=N.x||m===P.Left&&O>=A.x;if($&&!g.y){v.scrollTo({left:O,behavior:s});return}$?p.x=v.scrollLeft-O:p.x=m===P.Right?v.scrollLeft-N.x:v.scrollLeft-A.x,p.x&&v.scrollBy({left:-p.x,behavior:s});break}else if(M&&b.y!==f.y){const O=v.scrollTop+g.y,$=m===P.Down&&O<=N.y||m===P.Up&&O>=A.y;if($&&!g.x){v.scrollTo({top:O,behavior:s});return}$?p.y=v.scrollTop-O:p.y=m===P.Down?v.scrollTop-N.y:v.scrollTop-A.y,p.y&&v.scrollBy({top:-p.y,behavior:s});break}}this.handleMove(t,tt(Mt(f,this.referenceCoordinates),p))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Pr.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Br,onActivation:i}=t,{active:o}=n;const{code:a}=e.nativeEvent;if(r.start.includes(a)){const s=o.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function Qn(e){return!!(e&&"distance"in e)}function Jn(e){return!!(e&&"delay"in e)}class Rn{constructor(t,n,r){var i;r===void 0&&(r=Qo(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:o}=t,{target:a}=o;this.props=t,this.events=n,this.document=st(a),this.documentListeners=new mt(this.document),this.listeners=new mt(r),this.windowListeners=new mt(ie(a)),this.initialCoordinates=(i=dn(o))!=null?i:be,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(fe.Resize,this.handleCancel),this.windowListeners.add(fe.DragStart,Kn),this.windowListeners.add(fe.VisibilityChange,this.handleCancel),this.windowListeners.add(fe.ContextMenu,Kn),this.documentListeners.add(fe.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Jn(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(Qn(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,n){const{active:r,onPending:i}=this.props;i(r,t,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(fe.Click,Jo,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(fe.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:i,props:o}=this,{onMove:a,options:{activationConstraint:s}}=o;if(!i)return;const d=(n=dn(t))!=null?n:be,h=Mt(i,d);if(!r&&s){if(Qn(s)){if(s.tolerance!=null&&Qt(h,s.tolerance))return this.handleCancel();if(Qt(h,s.distance))return this.handleStart()}if(Jn(s)&&Qt(h,s.tolerance))return this.handleCancel();this.handlePending(s,h);return}t.cancelable&&t.preventDefault(),a(d)}handleEnd(){const{onAbort:t,onEnd:n}=this.props;this.detach(),this.activated||t(this.props.active),n()}handleCancel(){const{onAbort:t,onCancel:n}=this.props;this.detach(),this.activated||t(this.props.active),n()}handleKeydown(t){t.code===P.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const _o={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Fr extends Rn{constructor(t){const{event:n}=t,r=st(n.target);super(t,_o,r)}}Fr.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];const ea={move:{name:"mousemove"},end:{name:"mouseup"}};var hn;(function(e){e[e.RightClick=2]="RightClick"})(hn||(hn={}));class Ur extends Rn{constructor(t){super(t,ea,st(t.event.target))}}Ur.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===hn.RightClick?!1:(r?.({event:n}),!0)}}];const Jt={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class $r extends Rn{constructor(t){super(t,Jt)}static setup(){return window.addEventListener(Jt.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Jt.move.name,t)};function t(){}}}$r.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var bt;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(bt||(bt={}));var zt;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(zt||(zt={}));function ta(e){let{acceleration:t,activator:n=bt.Pointer,canScroll:r,draggingRect:i,enabled:o,interval:a=5,order:s=zt.TreeOrder,pointerCoordinates:d,scrollableAncestors:h,scrollableAncestorRects:u,delta:f,threshold:g}=e;const p=ra({delta:f,disabled:!o}),[D,v]=fo(),m=c.useRef({x:0,y:0}),y=c.useRef({x:0,y:0}),T=c.useMemo(()=>{switch(n){case bt.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case bt.DraggableRect:return i}},[n,i,d]),R=c.useRef(null),E=c.useCallback(()=>{const A=R.current;if(!A)return;const k=m.current.x*y.current.x,b=m.current.y*y.current.y;A.scrollBy(k,b)},[]),N=c.useMemo(()=>s===zt.TreeOrder?[...h].reverse():h,[s,h]);c.useEffect(()=>{if(!o||!h.length||!T){v();return}for(const A of N){if(r?.(A)===!1)continue;const k=h.indexOf(A),b=u[k];if(!b)continue;const{direction:S,speed:M}=Ho(A,b,T,t,g);for(const O of["x","y"])p[O][S[O]]||(M[O]=0,S[O]=0);if(M.x>0||M.y>0){v(),R.current=A,D(E,a),m.current=M,y.current=S;return}}m.current={x:0,y:0},y.current={x:0,y:0},v()},[t,E,r,v,o,a,JSON.stringify(T),JSON.stringify(p),D,h,N,u,JSON.stringify(g)])}const na={x:{[V.Backward]:!1,[V.Forward]:!1},y:{[V.Backward]:!1,[V.Forward]:!1}};function ra(e){let{delta:t,disabled:n}=e;const r=cn(t);return St(i=>{if(n||!r||!i)return na;const o={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[V.Backward]:i.x[V.Backward]||o.x===-1,[V.Forward]:i.x[V.Forward]||o.x===1},y:{[V.Backward]:i.y[V.Backward]||o.y===-1,[V.Forward]:i.y[V.Forward]||o.y===1}}},[n,t,r])}function ia(e,t){const n=t!=null?e.get(t):void 0,r=n?n.node.current:null;return St(i=>{var o;return t==null?null:(o=r??i)!=null?o:null},[r,t])}function oa(e,t){return c.useMemo(()=>e.reduce((n,r)=>{const{sensor:i}=r,o=i.activators.map(a=>({eventName:a.eventName,handler:t(a.handler,r)}));return[...n,...o]},[]),[e,t])}var xt;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(xt||(xt={}));var fn;(function(e){e.Optimized="optimized"})(fn||(fn={}));const Zn=new Map;function aa(e,t){let{dragging:n,dependencies:r,config:i}=t;const[o,a]=c.useState(null),{frequency:s,measure:d,strategy:h}=i,u=c.useRef(e),f=m(),g=wt(f),p=c.useCallback(function(y){y===void 0&&(y=[]),!g.current&&a(T=>T===null?y:T.concat(y.filter(R=>!T.includes(R))))},[g]),D=c.useRef(null),v=St(y=>{if(f&&!n)return Zn;if(!y||y===Zn||u.current!==e||o!=null){const T=new Map;for(let R of e){if(!R)continue;if(o&&o.length>0&&!o.includes(R.id)&&R.rect.current){T.set(R.id,R.rect.current);continue}const E=R.node.current,N=E?new Dn(d(E),E):null;R.rect.current=N,N&&T.set(R.id,N)}return T}return y},[e,o,n,f,d]);return c.useEffect(()=>{u.current=e},[e]),c.useEffect(()=>{f||p()},[n,f]),c.useEffect(()=>{o&&o.length>0&&a(null)},[JSON.stringify(o)]),c.useEffect(()=>{f||typeof s!="number"||D.current!==null||(D.current=setTimeout(()=>{p(),D.current=null},s))},[s,f,p,...r]),{droppableRects:v,measureDroppableContainers:p,measuringScheduled:o!=null};function m(){switch(h){case xt.Always:return!1;case xt.BeforeDragging:return n;default:return!n}}}function jr(e,t){return St(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function sa(e,t){return jr(e,t)}function la(e){let{callback:t,disabled:n}=e;const r=Tn(t),i=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:o}=window;return new o(r)},[r,n]);return c.useEffect(()=>()=>i?.disconnect(),[i]),i}function Ft(e){let{callback:t,disabled:n}=e;const r=Tn(t),i=c.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:o}=window;return new o(r)},[n]);return c.useEffect(()=>()=>i?.disconnect(),[i]),i}function ca(e){return new Dn(lt(e),e)}function _n(e,t,n){t===void 0&&(t=ca);const[r,i]=c.useState(null);function o(){i(d=>{if(!e)return null;if(e.isConnected===!1){var h;return(h=d??n)!=null?h:null}const u=t(e);return JSON.stringify(d)===JSON.stringify(u)?d:u})}const a=la({callback(d){if(e)for(const h of d){const{type:u,target:f}=h;if(u==="childList"&&f instanceof HTMLElement&&f.contains(e)){o();break}}}}),s=Ft({callback:o});return Ee(()=>{o(),e?(s?.observe(e),a?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),a?.disconnect())},[e]),r}function da(e){const t=jr(e);return Ir(e,t)}const er=[];function ua(e){const t=c.useRef(e),n=St(r=>e?r&&r!==er&&e&&t.current&&e.parentNode===t.current.parentNode?r:Cn(e):er,[e]);return c.useEffect(()=>{t.current=e},[e]),n}function ha(e){const[t,n]=c.useState(null),r=c.useRef(e),i=c.useCallback(o=>{const a=Kt(o.target);a&&n(s=>s?(s.set(a,un(a)),new Map(s)):null)},[]);return c.useEffect(()=>{const o=r.current;if(e!==o){a(o);const s=e.map(d=>{const h=Kt(d);return h?(h.addEventListener("scroll",i,{passive:!0}),[h,un(h)]):null}).filter(d=>d!=null);n(s.length?new Map(s):null),r.current=e}return()=>{a(e),a(o)};function a(s){s.forEach(d=>{const h=Kt(d);h?.removeEventListener("scroll",i)})}},[i,e]),c.useMemo(()=>e.length?t?Array.from(t.values()).reduce((o,a)=>tt(o,a),be):zr(e):be,[e,t])}function tr(e,t){t===void 0&&(t=[]);const n=c.useRef(null);return c.useEffect(()=>{n.current=null},t),c.useEffect(()=>{const r=e!==be;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?Mt(e,n.current):be}function fa(e){c.useEffect(()=>{if(!Pt)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n?.()}},e.map(t=>{let{sensor:n}=t;return n}))}function pa(e,t){return c.useMemo(()=>e.reduce((n,r)=>{let{eventName:i,handler:o}=r;return n[i]=a=>{o(a,t)},n},{}),[e,t])}function Wr(e){return c.useMemo(()=>e?$o(e):null,[e])}const nr=[];function ga(e,t){t===void 0&&(t=lt);const[n]=e,r=Wr(n?ie(n):null),[i,o]=c.useState(nr);function a(){o(()=>e.length?e.map(d=>kr(d)?r:new Dn(t(d),d)):nr)}const s=Ft({callback:a});return Ee(()=>{s?.disconnect(),a(),e.forEach(d=>s?.observe(d))},[e]),i}function ma(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Tt(t)?t:e}function ba(e){let{measure:t}=e;const[n,r]=c.useState(null),i=c.useCallback(h=>{for(const{target:u}of h)if(Tt(u)){r(f=>{const g=t(u);return f?{...f,width:g.width,height:g.height}:g});break}},[t]),o=Ft({callback:i}),a=c.useCallback(h=>{const u=ma(h);o?.disconnect(),u&&o?.observe(u),r(u?t(u):null)},[t,o]),[s,d]=Lt(a);return c.useMemo(()=>({nodeRef:s,rect:n,setRef:d}),[n,s,d])}const va=[{sensor:Fr,options:{}},{sensor:Pr,options:{}}],ya={current:{}},Nt={draggable:{measure:Xn},droppable:{measure:Xn,strategy:xt.WhileDragging,frequency:fn.Optimized},dragOverlay:{measure:lt}};class vt extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const wa={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new vt,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ot},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Nt,measureDroppableContainers:Ot,windowRect:null,measuringScheduled:!1},xa={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ot,draggableNodes:new Map,over:null,measureDroppableContainers:Ot},Ut=c.createContext(xa),qr=c.createContext(wa);function Ea(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new vt}}}function Ta(e,t){switch(t.type){case Y.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Y.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Y.DragEnd:case Y.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Y.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new vt(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Y.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const a=new vt(e.droppable.containers);return a.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case Y.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new vt(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Sa(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:i}=c.useContext(Ut),o=cn(r),a=cn(n?.id);return c.useEffect(()=>{if(!t&&!r&&o&&a!=null){if(!Sn(o)||document.activeElement===o.target)return;const s=i.get(a);if(!s)return;const{activatorNode:d,node:h}=s;if(!d.current&&!h.current)return;requestAnimationFrame(()=>{for(const u of[d.current,h.current]){if(!u)continue;const f=mo(u);if(f){f.focus();break}}})}},[r,t,i,a,o]),null}function Ca(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((i,o)=>o({transform:i,...r}),n):n}function Da(e){return c.useMemo(()=>({draggable:{...Nt.draggable,...e?.draggable},droppable:{...Nt.droppable,...e?.droppable},dragOverlay:{...Nt.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Ra(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e;const o=c.useRef(!1),{x:a,y:s}=typeof i=="boolean"?{x:i,y:i}:i;Ee(()=>{if(!a&&!s||!t){o.current=!1;return}if(o.current||!r)return;const h=t?.node.current;if(!h||h.isConnected===!1)return;const u=n(h),f=Ir(u,r);if(a||(f.x=0),s||(f.y=0),o.current=!0,Math.abs(f.x)>0||Math.abs(f.y)>0){const g=Nr(h);g&&g.scrollBy({top:f.y,left:f.x})}},[t,a,s,r,n])}const Hr=c.createContext({...be,scaleX:1,scaleY:1});var Fe;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Fe||(Fe={}));const Aa=c.memo(function(t){var n,r,i,o;let{id:a,accessibility:s,autoScroll:d=!0,children:h,sensors:u=va,collisionDetection:f=ko,measuring:g,modifiers:p,...D}=t;const v=c.useReducer(Ta,void 0,Ea),[m,y]=v,[T,R]=Eo(),[E,N]=c.useState(Fe.Uninitialized),A=E===Fe.Initialized,{draggable:{active:k,nodes:b,translate:S},droppable:{containers:M}}=m,O=k!=null?b.get(k):null,$=c.useRef({initial:null,translated:null}),W=c.useMemo(()=>{var Z;return k!=null?{id:k,data:(Z=O?.data)!=null?Z:ya,rect:$}:null},[k,O]),J=c.useRef(null),[U,oe]=c.useState(null),[q,_]=c.useState(null),j=wt(D,Object.values(D)),ae=Ct("DndDescribedBy",a),Le=c.useMemo(()=>M.getEnabled(),[M]),K=Da(g),{droppableRects:ee,measureDroppableContainers:Te,measuringScheduled:je}=aa(Le,{dragging:A,dependencies:[S.x,S.y],config:K.droppable}),re=ia(b,k),qe=c.useMemo(()=>q?dn(q):null,[q]),ve=pi(),C=sa(re,K.draggable.measure);Ra({activeNode:k!=null?b.get(k):null,config:ve.layoutShiftCompensation,initialRect:C,measure:K.draggable.measure});const I=_n(re,K.draggable.measure,C),ue=_n(re?re.parentElement:null),H=c.useRef({activatorEvent:null,active:null,activeNode:re,collisionRect:null,collisions:null,droppableRects:ee,draggableNodes:b,draggingNode:null,draggingNodeRect:null,droppableContainers:M,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),te=M.getNodeFor((n=H.current.over)==null?void 0:n.id),se=ba({measure:K.dragOverlay.measure}),Se=(r=se.nodeRef.current)!=null?r:re,Me=A?(i=se.rect)!=null?i:I:null,Mn=!!(se.nodeRef.current&&se.rect),kn=da(Mn?null:I),Wt=Wr(Se?ie(Se):null),ke=ua(A?te??re:null),Dt=ga(ke),Rt=Ca(p,{transform:{x:S.x-kn.x,y:S.y-kn.y,scaleX:1,scaleY:1},activatorEvent:q,active:W,activeNodeRect:I,containerNodeRect:ue,draggingNodeRect:Me,over:H.current.over,overlayNodeRect:se.rect,scrollableAncestors:ke,scrollableAncestorRects:Dt,windowRect:Wt}),On=qe?tt(qe,S):null,zn=ha(ke),si=tr(zn),li=tr(zn,[I]),He=tt(Rt,si),Ye=Me?Bo(Me,Rt):null,ct=W&&Ye?f({active:W,collisionRect:Ye,droppableRects:ee,droppableContainers:Le,pointerCoordinates:On}):null,Bn=No(ct,"id"),[Oe,Pn]=c.useState(null),ci=Mn?Rt:tt(Rt,li),di=Oo(ci,(o=Oe?.rect)!=null?o:null,I),qt=c.useRef(null),Fn=c.useCallback((Z,le)=>{let{sensor:ce,options:ze}=le;if(J.current==null)return;const he=b.get(J.current);if(!he)return;const de=Z.nativeEvent,ye=new ce({active:J.current,activeNode:he,event:de,options:ze,context:H,onAbort(Q){if(!b.get(Q))return;const{onDragAbort:we}=j.current,Ce={id:Q};we?.(Ce),T({type:"onDragAbort",event:Ce})},onPending(Q,Be,we,Ce){if(!b.get(Q))return;const{onDragPending:ut}=j.current,Pe={id:Q,constraint:Be,initialCoordinates:we,offset:Ce};ut?.(Pe),T({type:"onDragPending",event:Pe})},onStart(Q){const Be=J.current;if(Be==null)return;const we=b.get(Be);if(!we)return;const{onDragStart:Ce}=j.current,dt={activatorEvent:de,active:{id:Be,data:we.data,rect:$}};pt.unstable_batchedUpdates(()=>{Ce?.(dt),N(Fe.Initializing),y({type:Y.DragStart,initialCoordinates:Q,active:Be}),T({type:"onDragStart",event:dt}),oe(qt.current),_(de)})},onMove(Q){y({type:Y.DragMove,coordinates:Q})},onEnd:Ve(Y.DragEnd),onCancel:Ve(Y.DragCancel)});qt.current=ye;function Ve(Q){return async function(){const{active:we,collisions:Ce,over:dt,scrollAdjustedTranslate:ut}=H.current;let Pe=null;if(we&&ut){const{cancelDrop:ht}=j.current;Pe={activatorEvent:de,active:we,collisions:Ce,delta:ut,over:dt},Q===Y.DragEnd&&typeof ht=="function"&&await Promise.resolve(ht(Pe))&&(Q=Y.DragCancel)}J.current=null,pt.unstable_batchedUpdates(()=>{y({type:Q}),N(Fe.Uninitialized),Pn(null),oe(null),_(null),qt.current=null;const ht=Q===Y.DragEnd?"onDragEnd":"onDragCancel";if(Pe){const Ht=j.current[ht];Ht?.(Pe),T({type:ht,event:Pe})}})}}},[b]),ui=c.useCallback((Z,le)=>(ce,ze)=>{const he=ce.nativeEvent,de=b.get(ze);if(J.current!==null||!de||he.dndKit||he.defaultPrevented)return;const ye={active:de};Z(ce,le.options,ye)===!0&&(he.dndKit={capturedBy:le.sensor},J.current=ze,Fn(ce,le))},[b,Fn]),Un=oa(u,ui);fa(u),Ee(()=>{I&&E===Fe.Initializing&&N(Fe.Initialized)},[I,E]),c.useEffect(()=>{const{onDragMove:Z}=j.current,{active:le,activatorEvent:ce,collisions:ze,over:he}=H.current;if(!le||!ce)return;const de={active:le,activatorEvent:ce,collisions:ze,delta:{x:He.x,y:He.y},over:he};pt.unstable_batchedUpdates(()=>{Z?.(de),T({type:"onDragMove",event:de})})},[He.x,He.y]),c.useEffect(()=>{const{active:Z,activatorEvent:le,collisions:ce,droppableContainers:ze,scrollAdjustedTranslate:he}=H.current;if(!Z||J.current==null||!le||!he)return;const{onDragOver:de}=j.current,ye=ze.get(Bn),Ve=ye&&ye.rect.current?{id:ye.id,rect:ye.rect.current,data:ye.data,disabled:ye.disabled}:null,Q={active:Z,activatorEvent:le,collisions:ce,delta:{x:he.x,y:he.y},over:Ve};pt.unstable_batchedUpdates(()=>{Pn(Ve),de?.(Q),T({type:"onDragOver",event:Q})})},[Bn]),Ee(()=>{H.current={activatorEvent:q,active:W,activeNode:re,collisionRect:Ye,collisions:ct,droppableRects:ee,draggableNodes:b,draggingNode:Se,draggingNodeRect:Me,droppableContainers:M,over:Oe,scrollableAncestors:ke,scrollAdjustedTranslate:He},$.current={initial:Me,translated:Ye}},[W,re,ct,Ye,b,Se,Me,ee,M,Oe,ke,He]),ta({...ve,delta:S,draggingRect:Ye,pointerCoordinates:On,scrollableAncestors:ke,scrollableAncestorRects:Dt});const hi=c.useMemo(()=>({active:W,activeNode:re,activeNodeRect:I,activatorEvent:q,collisions:ct,containerNodeRect:ue,dragOverlay:se,draggableNodes:b,droppableContainers:M,droppableRects:ee,over:Oe,measureDroppableContainers:Te,scrollableAncestors:ke,scrollableAncestorRects:Dt,measuringConfiguration:K,measuringScheduled:je,windowRect:Wt}),[W,re,I,q,ct,ue,se,b,M,ee,Oe,Te,ke,Dt,K,je,Wt]),fi=c.useMemo(()=>({activatorEvent:q,activators:Un,active:W,activeNodeRect:I,ariaDescribedById:{draggable:ae},dispatch:y,draggableNodes:b,over:Oe,measureDroppableContainers:Te}),[q,Un,W,I,y,ae,b,Oe,Te]);return G.createElement(Ar.Provider,{value:R},G.createElement(Ut.Provider,{value:fi},G.createElement(qr.Provider,{value:hi},G.createElement(Hr.Provider,{value:di},h)),G.createElement(Sa,{disabled:s?.restoreFocus===!1})),G.createElement(Co,{...s,hiddenTextDescribedById:ae}));function pi(){const Z=U?.autoScrollEnabled===!1,le=typeof d=="object"?d.enabled===!1:d===!1,ce=A&&!Z&&!le;return typeof d=="object"?{...d,enabled:ce}:{enabled:ce}}}),Ia=c.createContext(null),rr="button",Na="Draggable";function La(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e;const o=Ct(Na),{activators:a,activatorEvent:s,active:d,activeNodeRect:h,ariaDescribedById:u,draggableNodes:f,over:g}=c.useContext(Ut),{role:p=rr,roleDescription:D="draggable",tabIndex:v=0}=i??{},m=d?.id===t,y=c.useContext(m?Hr:Ia),[T,R]=Lt(),[E,N]=Lt(),A=pa(a,t),k=wt(n);Ee(()=>(f.set(t,{id:t,key:o,node:T,activatorNode:E,data:k}),()=>{const S=f.get(t);S&&S.key===o&&f.delete(t)}),[f,t]);const b=c.useMemo(()=>({role:p,tabIndex:v,"aria-disabled":r,"aria-pressed":m&&p===rr?!0:void 0,"aria-roledescription":D,"aria-describedby":u.draggable}),[r,p,v,m,D,u.draggable]);return{active:d,activatorEvent:s,activeNodeRect:h,attributes:b,isDragging:m,listeners:r?void 0:A,node:T,over:g,setNodeRef:R,setActivatorNodeRef:N,transform:y}}function Ma(){return c.useContext(qr)}const ka="Droppable",Oa={timeout:25};function za(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e;const o=Ct(ka),{active:a,dispatch:s,over:d,measureDroppableContainers:h}=c.useContext(Ut),u=c.useRef({disabled:n}),f=c.useRef(!1),g=c.useRef(null),p=c.useRef(null),{disabled:D,updateMeasurementsFor:v,timeout:m}={...Oa,...i},y=wt(v??r),T=c.useCallback(()=>{if(!f.current){f.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{h(Array.isArray(y.current)?y.current:[y.current]),p.current=null},m)},[m]),R=Ft({callback:T,disabled:D||!a}),E=c.useCallback((b,S)=>{R&&(S&&(R.unobserve(S),f.current=!1),b&&R.observe(b))},[R]),[N,A]=Lt(E),k=wt(t);return c.useEffect(()=>{!R||!N.current||(R.disconnect(),f.current=!1,R.observe(N.current))},[N,R]),c.useEffect(()=>(s({type:Y.RegisterDroppable,element:{id:r,key:o,disabled:n,node:N,rect:g,data:k}}),()=>s({type:Y.UnregisterDroppable,key:o,id:r})),[r]),c.useEffect(()=>{n!==u.current.disabled&&(s({type:Y.SetDroppableDisabled,id:r,key:o,disabled:n}),u.current.disabled=n)},[r,o,n,s]),{active:a,rect:g,isOver:d?.id===r,node:N,over:d,setNodeRef:A}}const Ba=e=>{let{transform:t}=e;return{...t,y:0}};function Pa(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const Fa=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:Pa(r,n,t)};function An(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Ua(e,t){return e.reduce((n,r,i)=>{const o=t.get(r);return o&&(n[i]=o),n},Array(e.length))}function At(e){return e!==null&&e>=0}function $a(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ja(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const It={scaleX:1,scaleY:1},Wa=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:i,overIndex:o,index:a}=e;const s=(t=n[i])!=null?t:r;if(!s)return null;const d=qa(n,a,i);if(a===i){const h=n[o];return h?{x:i<o?h.left+h.width-(s.left+s.width):h.left-s.left,y:0,...It}:null}return a>i&&a<=o?{x:-s.width-d,y:0,...It}:a<i&&a>=o?{x:s.width+d,y:0,...It}:{x:0,y:0,...It}};function qa(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];return!r||!i&&!o?0:n<t?i?r.left-(i.left+i.width):o.left-(r.left+r.width):o?o.left-(r.left+r.width):r.left-(i.left+i.width)}const Yr=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=An(t,r,n),a=t[i],s=o[i];return!s||!a?null:{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}},Vr="Sortable",Gr=G.createContext({activeIndex:-1,containerId:Vr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Yr,disabled:{draggable:!1,droppable:!1}});function Ha(e){let{children:t,id:n,items:r,strategy:i=Yr,disabled:o=!1}=e;const{active:a,dragOverlay:s,droppableRects:d,over:h,measureDroppableContainers:u}=Ma(),f=Ct(Vr,n),g=s.rect!==null,p=c.useMemo(()=>r.map(A=>typeof A=="object"&&"id"in A?A.id:A),[r]),D=a!=null,v=a?p.indexOf(a.id):-1,m=h?p.indexOf(h.id):-1,y=c.useRef(p),T=!$a(p,y.current),R=m!==-1&&v===-1||T,E=ja(o);Ee(()=>{T&&D&&u(p)},[T,p,D,u]),c.useEffect(()=>{y.current=p},[p]);const N=c.useMemo(()=>({activeIndex:v,containerId:f,disabled:E,disableTransforms:R,items:p,overIndex:m,useDragOverlay:g,sortedRects:Ua(p,d),strategy:i}),[v,f,E.draggable,E.droppable,R,p,m,d,g,i]);return G.createElement(Gr.Provider,{value:N},t)}const Ya=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return An(n,r,i).indexOf(t)},Va=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:d,transition:h}=e;return!h||!r||s!==o&&i===a?!1:n?!0:a!==i&&t===d},Ga={duration:200,easing:"ease"},Xr="transform",Xa=kt.Transition.toString({property:Xr,duration:0,easing:"linear"}),Ka={roleDescription:"sortable"};function Qa(e){let{disabled:t,index:n,node:r,rect:i}=e;const[o,a]=c.useState(null),s=c.useRef(n);return Ee(()=>{if(!t&&n!==s.current&&r.current){const d=i.current;if(d){const h=lt(r.current,{ignoreTransform:!0}),u={x:d.left-h.left,y:d.top-h.top,scaleX:d.width/h.width,scaleY:d.height/h.height};(u.x||u.y)&&a(u)}}n!==s.current&&(s.current=n)},[t,n,r,i]),c.useEffect(()=>{o&&a(null)},[o]),o}function Ja(e){let{animateLayoutChanges:t=Va,attributes:n,disabled:r,data:i,getNewIndex:o=Ya,id:a,strategy:s,resizeObserverConfig:d,transition:h=Ga}=e;const{items:u,containerId:f,activeIndex:g,disabled:p,disableTransforms:D,sortedRects:v,overIndex:m,useDragOverlay:y,strategy:T}=c.useContext(Gr),R=Za(r,p),E=u.indexOf(a),N=c.useMemo(()=>({sortable:{containerId:f,index:E,items:u},...i}),[f,i,E,u]),A=c.useMemo(()=>u.slice(u.indexOf(a)),[u,a]),{rect:k,node:b,isOver:S,setNodeRef:M}=za({id:a,data:N,disabled:R.droppable,resizeObserverConfig:{updateMeasurementsFor:A,...d}}),{active:O,activatorEvent:$,activeNodeRect:W,attributes:J,setNodeRef:U,listeners:oe,isDragging:q,over:_,setActivatorNodeRef:j,transform:ae}=La({id:a,data:N,attributes:{...Ka,...n},disabled:R.draggable}),Le=ho(M,U),K=!!O,ee=K&&!D&&At(g)&&At(m),Te=!y&&q,je=Te&&ee?ae:null,qe=ee?je??(s??T)({rects:v,activeNodeRect:W,activeIndex:g,overIndex:m,index:E}):null,ve=At(g)&&At(m)?o({id:a,items:u,activeIndex:g,overIndex:m}):E,C=O?.id,I=c.useRef({activeId:C,items:u,newIndex:ve,containerId:f}),ue=u!==I.current.items,H=t({active:O,containerId:f,isDragging:q,isSorting:K,id:a,index:E,items:u,newIndex:I.current.newIndex,previousItems:I.current.items,previousContainerId:I.current.containerId,transition:h,wasDragging:I.current.activeId!=null}),te=Qa({disabled:!H,index:E,node:b,rect:k});return c.useEffect(()=>{K&&I.current.newIndex!==ve&&(I.current.newIndex=ve),f!==I.current.containerId&&(I.current.containerId=f),u!==I.current.items&&(I.current.items=u)},[K,ve,f,u]),c.useEffect(()=>{if(C===I.current.activeId)return;if(C!=null&&I.current.activeId==null){I.current.activeId=C;return}const Se=setTimeout(()=>{I.current.activeId=C},50);return()=>clearTimeout(Se)},[C]),{active:O,activeIndex:g,attributes:J,data:N,rect:k,index:E,newIndex:ve,items:u,isOver:S,isSorting:K,isDragging:q,listeners:oe,node:b,overIndex:m,over:_,setNodeRef:Le,setActivatorNodeRef:j,setDroppableNodeRef:M,setDraggableNodeRef:U,transform:te??qe,transition:se()};function se(){if(te||ue&&I.current.newIndex===E)return Xa;if(!(Te&&!Sn($)||!h)&&(K||H))return kt.Transition.toString({...h,property:Xr})}}function Za(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e?.draggable)!=null?n:t.draggable,droppable:(r=e?.droppable)!=null?r:t.droppable}}P.Down,P.Right,P.Up,P.Left;const _a=x(L)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function es({year:e,semester:t,setYear:n,setSemester:r,setCurrentTimetableId:i}){const o=$e(),{query:a}=ne("GET","/semesters");c.useEffect(()=>{const f=a.data?.semesters;if(f&&f.length>0){const g=f[f.length-1];g&&(n(g.year),r(g.semester))}},[a.data]);const{isFirstSemester:s,isLastSemester:d}=c.useMemo(()=>{if(!a.data)return{isFirstSemester:!1,isLastSemester:!1};const f=a.data.semesters,g=f[0],p=f[f.length-1];return!g||!p?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===g.year&&t===g.semester,isLastSemester:e===p.year&&t===p.semester}},[a.data,e,t]),h=()=>{s||(t===Ge.SPRING?(r(Ge.FALL),n(e-1)):r(Ge.SPRING),i(null))},u=()=>{d||(t===Ge.FALL?(r(Ge.SPRING),n(e+1)):r(Ge.FALL),i(null))};return w(_a,{direction:"row",gap:0,justify:"space-between",align:"center",children:[l(nt,{onClick:s?void 0:h,styles:{padding:2.5},children:l(X,{size:20,color:s?o.colors.Text.disable:o.colors.Highlight.default,onClick:s?void 0:()=>{},children:l(Ni,{})})}),l(z,{color:"Highlight.default",children:e}),l(z,{color:"Highlight.default",children:sn(t)}),l(nt,{onClick:d?void 0:u,styles:{padding:2.5},children:l(X,{size:20,color:d?o.colors.Text.disable:o.colors.Highlight.default,onClick:d?void 0:()=>{},children:l(Li,{})})})]})}const Kr=x.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,ts=x(Kr)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,ns=x(Kr)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`,rs={default:ts,selected:ns},is=x.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,os=e=>l(is,{children:e}),pn=({type:e="default",children:t=void 0,buttonRef:n,...r})=>{const i=rs[e],o=()=>os(t);return l(i,{ref:n,...r,onClick:r.onClick,children:l(o,{})})},as=x(L)`
    width: 100%;
    max-width: 897px;

    ${F.laptop} {
        max-width: 572px;
    }

    ${F.tablet} {
        max-width: 100%;
    }
`,ss=x(L)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,ls=x(z)`
    outline: none;
    user-select: none;
`,cs=({timetable:e,isSelected:t,onClick:n,onCopy:r,onDelete:i,onNameChange:o,isDragging:a})=>{const s=$e(),{attributes:d,listeners:h,setNodeRef:u,transform:f,transition:g}=Ja({id:e.id}),D={transform:(v=>{if(!v)return"";const{x:m,y}=v;return`translate3d(${m}px, ${y}px, 0)`})(f),transition:g,touchAction:"manipulation",opacity:a?.5:1};return l("div",{ref:u,style:D,...d,...h,children:w(pn,{type:t?"selected":"default",onClick:n,children:[l(ls,{onClick:v=>{t&&(v.stopPropagation(),v.currentTarget.contentEditable="true",v.currentTarget.focus())},onBlur:v=>{const m=v.currentTarget.textContent||"";v.currentTarget.contentEditable="false",o(e.id,m)},onKeyDown:v=>{v.key==="Enter"&&(v.preventDefault(),v.currentTarget.blur())},contentEditable:!1,suppressContentEditableWarning:!0,type:"Normal",color:t?"Highlight.default":"Text.lighter",style:{paddingTop:4,paddingBottom:3.5},children:e.name?e.name:"No Title"}),w(L,{direction:"row",gap:0,align:"center",children:[t&&l(nt,{onClick:r,styles:{padding:5},children:l(X,{size:15,onClick:()=>{},color:t?s.colors.Highlight.default:s.colors.Text.lighter,children:l(wn,{})})}),l(nt,{onClick:i,styles:{padding:3.75},children:l(X,{size:17.5,onClick:()=>{},color:t?s.colors.Highlight.default:s.colors.Text.lighter,children:l(an,{})})})]})]})})},ir=({timeTableLectures:e,currentTimetableId:t,setCurrentTimetableId:n,setCurrentTimetableName:r,year:i,semester:o,setYear:a,setSemester:s})=>{const{t:d}=Ne(),{status:h}=ot(),u=$e(),{query:f,setParams:g}=ne("GET","/timetables"),{requestFunction:p}=ne("POST","/timetables",{onSuccess:b=>{f.refetch(),n(b.id)}}),{requestFunction:D}=ne("DELETE","/timetables",{onMutate:b=>{t===b.id&&n(null)},onSuccess:()=>{f.refetch()}}),{requestFunction:v}=ne("PATCH","/timetables",{onSuccess:()=>{f.refetch()}}),[m,y]=c.useState([]),[T,R]=c.useState(null),E=Do(Vn(Ur,{activationConstraint:{distance:8}}),Vn($r,{activationConstraint:{delay:500,tolerance:5}}));c.useEffect(()=>{let b=f.data?.timetables??[];b=b.filter(S=>S.year===i&&S.semester===o),y(b.slice().sort((S,M)=>S.timeTableOrder-M.timeTableOrder)),t!=null&&f.data?.timetables.forEach(S=>{S.id===t&&r(S.name)})},[f.data,i,o]),c.useEffect(()=>{h==="success"&&i!==-1&&o>0&&g({year:i,semester:o})},[i,o,h]),c.useEffect(()=>{r(t==null?d("timetable.myTimetable"):m.find(b=>b.id===t)?.name||"")},[t]);const N=b=>{R(b.active.id)},A=b=>{const{active:S,over:M}=b;if(R(null),M&&S.id!==M.id){const O=m.findIndex(U=>U.id===S.id),$=m.findIndex(U=>U.id===M.id),W=An(m,O,$);y(W);const J=S.id;v({id:J,order:$})}},k=b=>{if(b.deltaY===0)return;const S=b.currentTarget;S.scrollLeft=S.scrollLeft+b.deltaY};return w(as,{direction:"row",justify:"space-between",align:"stretch",flex:"0 1 auto",gap:4,style:{overflowX:"hidden"},children:[w(L,{direction:"row",gap:3,flex:"0 1 auto",style:{overflowX:"auto"},children:[w(pn,{type:t==null?"selected":"default",onClick:()=>{n(null)},children:[l(z,{type:"Normal",color:t===null?"Highlight.default":"Text.lighter",style:{paddingTop:4,paddingBottom:3.5},children:d("timetable.myTimetable")}),t===null&&h==="success"&&l(nt,{onClick:b=>{b.stopPropagation(),p({year:i,semester:o,lectureIds:e.map(S=>S.id)})},styles:{padding:5},children:l(X,{size:15,color:u.colors.Highlight.default,onClick:()=>{},children:l(wn,{})})})]},"my-timetable"),h==="success"&&w(ss,{direction:"row",gap:3,flex:"1 1 auto",onWheel:k,children:[l(Aa,{sensors:E,collisionDetection:Lo,onDragStart:N,onDragEnd:A,modifiers:[Ba,Fa],children:l(Ha,{items:m.map(b=>b.id),strategy:Wa,children:m.map(b=>l(cs,{timetable:b,isSelected:t===b.id,isDragging:T===b.id,onClick:()=>{n(b.id)},onCopy:S=>{S.stopPropagation(),p({year:i,semester:o,lectureIds:e.map(M=>M.id)})},onDelete:S=>{S.stopPropagation(),D({id:b.id})},onNameChange:(S,M)=>{y(O=>O.map($=>$.id===S?{...$,name:M}:$)),v({id:S,name:M})}},b.id))})}),l(pn,{onClick:()=>{p({year:i,semester:o,lectureIds:[]})},children:l(nt,{onClick:b=>{},styles:{padding:3.75},children:l(X,{size:17.5,color:u.colors.Text.default,onClick:()=>{},children:l(vn,{})})})})]})]}),l(L,{direction:"row",gap:0,align:"center",children:l(es,{year:i,semester:o,setYear:a,setSemester:s,setCurrentTimetableId:n})})]})},ds=x.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;

    ${F.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px 8px;
    }
`,Ke=x.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 16px;
    color: ${({theme:e})=>e.colors.Text.default};

    @media (hover: hover) {
        &:hover {
            color: ${({theme:e})=>e.colors.Highlight.default};
        }
    }

    ${F.tablet} {
        padding-left: 0;
    }
`,Qe=x.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;

    ${F.mobile} {
        font-size: 12px;
    }
`,Je=x.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    white-space: nowrap;

    ${F.mobile} {
        font-size: 12px;
    }
`,Ze=x.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({theme:e})=>e.colors.Highlight.default};

    ${F.mobile} {
        display: none;
    }
`;function us({hover:e,setHover:t,timetableLectures:n}){const{t:r}=Ne(),{lecturesByType:i,creditsByType:o}=c.useMemo(()=>{const d={basicRequired:0,basicElective:0,majorRequired:0,majorElective:0,humanitiesSocial:0,etc:0},h={basicRequired:[],basicElective:[],majorRequired:[],majorElective:[],humanitiesSocial:[],etc:[]};return n.forEach(u=>{u.type.includes("기초필수")?(d.basicRequired+=u.credit,h.basicRequired.push(u)):u.type.includes("기초선택")?(d.basicElective+=u.credit,h.basicElective.push(u)):u.type.includes("전공필수")?(d.majorRequired+=u.credit,h.majorRequired.push(u)):u.type.includes("전공선택")?(d.majorElective+=u.credit,h.majorElective.push(u)):u.type.includes("인문")?(d.humanitiesSocial+=u.credit,h.humanitiesSocial.push(u)):(d.etc+=u.credit,d.etc+=u.creditAU,h.etc.push(u))}),{lecturesByType:h,creditsByType:d}},[n]);function a(d){for(const h of["basicRequired","basicElective","majorRequired","majorElective","humanitiesSocial","etc"])if(d.type.includes(r(`common.type.${h}`)))return h;return"etc"}function s(d,h){if(!e||e.length==0||e?.length>1)return"";const u=e[0];return d.map(g=>g.id).includes(u.id)?`(${u.creditAU?u.creditAU:u.credit})`:h===a(u)?`(+${u.creditAU?u.creditAU:u.credit})`:""}return w(ds,{children:[w(Ke,{onMouseEnter:()=>t(i.basicRequired),onMouseLeave:()=>t([]),children:[l(Qe,{children:r("common.type.basicRequiredShort")}),l(Je,{children:o.basicRequired}),l(Ze,{children:s(i.basicRequired,"basicRequired")})]}),w(Ke,{onMouseEnter:()=>t(i.basicElective),onMouseLeave:()=>t([]),children:[l(Qe,{children:r("common.type.basicElectiveShort")}),l(Je,{children:o.basicElective}),l(Ze,{children:s(i.basicElective,"basicElective")})]}),w(Ke,{onMouseEnter:()=>t(i.majorRequired),onMouseLeave:()=>t([]),children:[l(Qe,{children:r("common.type.majorRequiredShort")}),l(Je,{children:o.majorRequired}),l(Ze,{children:s(i.majorRequired,"majorRequired")})]}),w(Ke,{onMouseEnter:()=>t(i.majorElective),onMouseLeave:()=>t([]),children:[l(Qe,{children:r("common.type.majorElectiveShort")}),l(Je,{children:o.majorElective}),l(Ze,{children:s(i.majorElective,"majorElective")})]}),w(Ke,{onMouseEnter:()=>t(i.humanitiesSocial),onMouseLeave:()=>t([]),children:[l(Qe,{children:r("common.type.humanitiesSocialElectiveShort")}),l(Je,{children:o.humanitiesSocial}),l(Ze,{children:s(i.humanitiesSocial,"humanitiesSocial")})]}),w(Ke,{onMouseEnter:()=>t(i.etc),onMouseLeave:()=>t([]),children:[l(Qe,{children:r("common.type.etcShort")}),l(Je,{children:o.etc}),l(Ze,{children:s(i.etc,"etc")})]})]})}const hs=x.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${F.mobile} {
        gap: 20px;
    }
`,or=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,ar=x.span`
    font-size: 20px;
    font-weight: 300;
`,sr=x.span`
    font-size: 10px;
    font-weight: 400;
`,fs=x.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${F.mobile} {
        gap: 20px;
    }
`,Zt=x.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`,_t=x.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.Text.default};
`,en=x.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.Text.dark};
`;function ps({timetableLectures:e,hover:t,setHover:n}){const{t:r}=Ne(),i=c.useMemo(()=>{let o=e.reduce((f,g)=>f+g.credit,0),a=e.reduce((f,g)=>f+g.creditAU,0);if(t&&t.length==1){const f=t[0];e.some(g=>g.id===f.id)||(o+=f.credit,a+=f.creditAU)}let s=0,d=0,h=0,u=e.length;return e.forEach(f=>{s+=f.averageGrade,d+=f.averageLoad,h+=f.averageSpeech,f.averageGrade===0&&f.averageLoad===0&&f.averageSpeech===0&&(u-=1)}),s=s/u,d=d/u,h=h/u,{totalCredits:o,totalAU:a,avgGrade:s,avgLoad:d,avgSpeech:h}},[e,t]);return w(We,{children:[w(hs,{children:[w(or,{onMouseEnter:()=>n(e.filter(o=>o.credit>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(o=>o.credit>0),children:[l(ar,{children:i.totalCredits}),l(sr,{children:r("common.credit")})]}),w(or,{onMouseEnter:()=>n(e.filter(o=>o.creditAU>0)),onMouseLeave:()=>n([]),highlighted:t.length>0&&t.some(o=>o.creditAU>0),children:[l(ar,{children:i.totalAU}),l(sr,{children:"AU"})]})]}),w(fs,{children:[w(Zt,{children:[l(_t,{children:et(i.avgGrade/3)}),l(en,{children:r("common.grade")})]}),w(Zt,{children:[l(_t,{children:et(i.avgLoad/3)}),l(en,{children:r("common.load")})]}),w(Zt,{children:[l(_t,{children:et(i.avgSpeech/3)}),l(en,{children:r("common.speech")})]})]})]})}const gs=x(L)`
    overflow-y: auto;
    min-height: 0;
`,ms=x.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`,bs=x.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({color:e,theme:t})=>e||t.colors.Text.default};
    min-width: 16px;
`,vs=x(L)`
    color: ${({highlighted:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,ys=[{day:xe.Mon,color:"#E54C65"},{day:xe.Tue,color:"#F5A623"},{day:xe.Wed,color:"#7ED321"},{day:xe.Thu,color:"#4A90D9"},{day:xe.Fri,color:"#9B59B6"}];function ws({timetableLectures:e,hover:t,setHover:n}){const{t:r}=Ne(),i=c.useMemo(()=>{const o={[xe.Mon]:[],[xe.Tue]:[],[xe.Wed]:[],[xe.Thu]:[],[xe.Fri]:[]};if(e.forEach(a=>{a.examTimes.forEach(s=>{if(s==null)return;const d=s.day;o[d]&&o[d].push({lectureName:a.name,lectureId:a.id,time:s.str.split(" ").slice(1).join(" ")})})}),t&&t.length==1){const a=t[0];e.some(s=>s.id===a.id)||a.examTimes.forEach(s=>{if(s==null)return;const d=s.day;o[d]&&o[d].push({lectureName:a.name,lectureId:a.id,time:s.str})})}return o},[e,t]);return w(gs,{direction:"column",gap:15,style:{width:"100%"},flex:"1 1 0",children:[l(z,{type:"NormalBold",color:"Text.default",children:r("timetable.examTimetable")}),ys.map(({day:o,color:a})=>{const s=i[o];return!s||s.length===0?null:w(ms,{children:[l(bs,{color:a,onMouseEnter:()=>{n(e.filter(d=>d.examTimes.some(h=>h?.day===o)))},onMouseLeave:()=>n([]),children:yi(o,!0)}),l(L,{direction:"column",gap:2,children:s.sort((d,h)=>d.time.localeCompare(h.time)).map((d,h)=>w(vs,{direction:"column",gap:0,highlighted:t?.some(u=>u.id===d.lectureId),onMouseEnter:()=>n(e.filter(u=>u.id===d.lectureId)),onMouseLeave:()=>n([]),children:[l(z,{type:"NormalBold",children:d.lectureName}),l(z,{type:"Normal",children:d.time})]},h))})]},o)})]})}const xs=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(t=>t??"#CCCCCC"),Es=x.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`,Ts=x.img`
    object-fit: cover;
    object-position: center;
    filter: ${({isDarkMode:e})=>e?"invert(100%) sepia(100%) grayscale(100%) brightness(0.7)":"none"};

    /* Performance Optimization: Force GPU layer to prevent repaints on hover */
    transform: translateZ(0);
    will-change: filter;
`,Ss=x.div`
    display: flex;
    gap: 4px;
    align-items: center;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    left: ${({left:e})=>e}%;
    top: ${({top:e})=>e}%;
    position: absolute;
    font-size: 10px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};
    border-radius: 4px;
    padding: 2px 4px;
`,Cs=x.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({theme:e})=>e.colors.Background.Section.default};
    position: absolute;
    top: 17px;
`,Ds=x.div`
    background-color: ${({theme:e,courseId:t,highlighted:n})=>n?e.colors.Highlight.default:(()=>{const r=xs(e.colors?.Tile?.TimeTable?.default);return r[t%r.length]})()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`,Rs=new Map([["E2",{left:50,top:67}],["E3",{left:56,top:61}],["E6",{left:57,top:52}],["E7",{left:65,top:50}],["E11",{left:45,top:47}],["E16",{left:45,top:40}],["N1",{left:75,top:30}],["N3",{left:45,top:34}],["N4",{left:53,top:32}],["N5",{left:63,top:28}],["N7",{left:27,top:30}],["N22",{left:67,top:26}],["N24",{left:65,top:22}],["N25",{left:49,top:26}],["N27",{left:47,top:17}],["W1",{left:26,top:68}],["W8",{left:27,top:44}],["W16",{left:34,top:73}]]);function As({timetableLectures:e,hover:t,setHover:n}){const{displayedTheme:r}=Di(),i=c.useMemo(()=>l(Ts,{src:"/campus_map.svg",alt:"Campus Map",isDarkMode:r==="dark",decoding:"async"}),[r]);return w(Es,{children:[i,Array.from(Rs).map(([o,{left:a,top:s}])=>{const d=e.filter(h=>h.classes.some(u=>u.buildingCode.includes(o)));return t?.forEach(h=>{e.includes(h)||h.classes.some(u=>u.buildingCode.includes(o))&&d.push(h)}),d.length===0?null:w(Ss,{left:a,top:s,onMouseEnter:()=>{n(d)},onMouseLeave:()=>{n([])},highlighted:t?.some(h=>d.includes(h))??!1,children:[l(Cs,{}),o,d.map(h=>l(Ds,{courseId:h.courseId,highlighted:t?.includes(h)??!1},h.id))]},o)})]})}var ft={},lr;function Is(){return lr||(lr=1,ft.createCanvas=function(e,t){return Object.assign(document.createElement("canvas"),{width:e,height:t})},ft.createImageData=function(e,t,n){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(e);case 2:return new ImageData(e,t);default:return new ImageData(e,t,n)}},ft.loadImage=function(e,t){return new Promise(function(n,r){const i=Object.assign(document.createElement("img"),t);function o(){i.onload=null,i.onerror=null}i.onload=function(){o(),n(i)},i.onerror=function(){o(),r(new Error('Failed to load the image "'+e+'"'))},i.src=e})}),ft}var cr=Is(),In=(e=>(e.DAILY="DAILY",e.HOURLY="HOURLY",e.MINUTELY="MINUTELY",e.MONTHLY="MONTHLY",e.SECONDLY="SECONDLY",e.WEEKLY="WEEKLY",e.YEARLY="YEARLY",e))(In||{}),gn=(e=>(e.FR="FR",e.MO="MO",e.SA="SA",e.SU="SU",e.TH="TH",e.TU="TU",e.WE="WE",e))(gn||{});function ge(e,t,n){if(Array.isArray(t))e.x=t.map(r=>{if(Array.isArray(r))return r;if(typeof r.key!="string"||typeof r.value!="string")throw new Error("Either key or value is not a string!");if(r.key.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");return[r.key,r.value]});else if(typeof t=="object")e.x=Object.entries(t).map(([r,i])=>{if(typeof r!="string"||typeof i!="string")throw new Error("Either key or value is not a string!");if(r.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");return[r,i]});else if(typeof t=="string"&&typeof n=="string"){if(t.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");e.x.push([t,n])}else return e.x.map(r=>({key:r[0],value:r[1]}))}function De(e,t){if(e instanceof Date&&isNaN(e.getTime())||typeof e=="string"&&isNaN(new Date(e).getTime()))throw new Error(`\`${t}\` has to be a valid date!`);if(e instanceof Date||typeof e=="string"||$t(e)&&e.isValid===!0||(jt(e)||Ls(e))&&e.isValid())return e;throw new Error(`\`${t}\` has to be a valid date!`)}function pe(e,t){let n=Object.values(e),r=String(t).toUpperCase();if(!r||!n.includes(r))throw new Error(`Input must be one of the following: ${n.join(", ")}`);return r}function Et(e,t){let n=null;if(typeof t=="string"){let r=t.match(/^(.+) ?<([^>]+)>$/);r?n={email:r[2].trim(),name:r[1].trim()}:t.includes("@")&&(n={email:t.trim(),name:t.trim()})}else typeof t=="object"&&(n={email:t.email,mailto:t.mailto,name:t.name,sentBy:t.sentBy});if(!n&&typeof t=="string")throw new Error("`"+e+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n)throw new Error("`"+e+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n.name)throw new Error("`"+e+".name` is empty!");if(!n.email)throw new Error("`"+e+".email` is empty!");return n}function B(e,t){return String(e).replace(t?/[\\"]/g:/[\\;,]/g,function(n){return"\\"+n}).replace(/(?:\r\n|\r|\n)/g,"\\n")}function Ns(e){return e.split(`\r
`).map(function(t){let n="",r=0;for(let i=0;i<t.length;i++){let o=t.charAt(i);o>="\uD800"&&o<="\uDBFF"&&(o+=t.charAt(++i));let a=new TextEncoder().encode(o).length;r+=a,r>74&&(n+=`\r
 `,r=a),n+=o}return n}).join(`\r
`)}function me(e,t,n,r){if(e?.startsWith("/")&&(e=e.substr(1)),typeof t=="string"||t instanceof Date){let i=ks(t)?t.withTimeZone(e):new Date(t),o=i.getUTCFullYear()+String(i.getUTCMonth()+1).padStart(2,"0")+i.getUTCDate().toString().padStart(2,"0");return e&&(o=i.getFullYear()+String(i.getMonth()+1).padStart(2,"0")+i.getDate().toString().padStart(2,"0")),n?o:e?(o+="T"+i.getHours().toString().padStart(2,"0")+i.getMinutes().toString().padStart(2,"0")+i.getSeconds().toString().padStart(2,"0"),o):(o+="T"+i.getUTCHours().toString().padStart(2,"0")+i.getUTCMinutes().toString().padStart(2,"0")+i.getUTCSeconds().toString().padStart(2,"0")+(r?"":"Z"),o)}else if(jt(t)){let i=e?dr(t)&&!t.tz()?t.clone().tz(e):t:r||n&&dr(t)&&t.tz()?t:t.utc();return i.format("YYYYMMDD")+(n?"":"T"+i.format("HHmmss")+(r||e?"":"Z"))}else if($t(t)){let i=e?t.setZone(e):r||n&&t.zone.type!=="system"?t:t.setZone("utc");return i.toFormat("yyyyLLdd")+(n?"":"T"+i.toFormat("HHmmss")+(r||e?"":"Z"))}else{let i=t;if(e)i=typeof t.tz=="function"?t.tz(e):t;else if(!r)if(typeof t.utc=="function")i=t.utc();else throw new Error("Unable to convert dayjs object to UTC value: UTC plugin is not available!");return i.format("YYYYMMDD")+(n?"":"T"+i.format("HHmmss")+(r||e?"":"Z"))}}function tn(e,t,n,r){let i="",o=r?.floating||!1;return r?.timezone&&(i=";TZID="+r.timezone,o=!0),t+i+":"+me(e,n,!1,o)}function Nn(e){let t=e.x.map(([n,r])=>n.toUpperCase()+":"+B(r,!1)).join(`\r
`);return t.length?t+`\r
`:""}function Ls(e){return typeof e=="object"&&e!==null&&!(e instanceof Date)&&!jt(e)&&!$t(e)}function $t(e){return typeof e=="object"&&e!==null&&"toJSDate"in e&&typeof e.toJSDate=="function"}function jt(e){return e!=null&&e._isAMomentObject!=null}function Ms(e){return e!==null&&typeof e=="object"&&"asSeconds"in e&&typeof e.asSeconds=="function"}function dr(e){return jt(e)&&"tz"in e&&typeof e.tz=="function"}function nn(e){return e!==null&&typeof e=="object"&&"between"in e&&typeof e.between=="function"&&typeof e.toString=="function"}function ks(e){return e instanceof Date&&"internal"in e&&e.internal instanceof Date&&"withTimeZone"in e&&typeof e.withTimeZone=="function"&&"tzComponents"in e&&typeof e.tzComponents=="function"}function ur(e){return typeof e=="string"||e instanceof Date?new Date(e):$t(e)?e.toJSDate():e.toDate()}function _e(e){let t="";return e<0&&(t="-",e*=-1),t+="P",e>=86400&&(t+=Math.floor(e/86400)+"D",e%=86400),!e&&t.length>1||(t+="T",e>=3600&&(t+=Math.floor(e/3600)+"H",e%=3600),e>=60&&(t+=Math.floor(e/60)+"M",e%=60),e>0?t+=e+"S":t.length<=2&&(t+="0S")),t}function Re(e){return e?typeof e=="string"?e:e.toJSON():null}var Qr=(e=>(e.CHAIR="CHAIR",e.NON="NON-PARTICIPANT",e.OPT="OPT-PARTICIPANT",e.REQ="REQ-PARTICIPANT",e))(Qr||{}),Jr=(e=>(e.CLIENT="CLIENT",e.NONE="NONE",e.SERVER="SERVER",e))(Jr||{}),Zr=(e=>(e.ACCEPTED="ACCEPTED",e.DECLINED="DECLINED",e.DELEGATED="DELEGATED",e.NEEDSACTION="NEEDS-ACTION",e.TENTATIVE="TENTATIVE",e))(Zr||{}),_r=(e=>(e.GROUP="GROUP",e.INDIVIDUAL="INDIVIDUAL",e.RESOURCE="RESOURCE",e.ROOM="ROOM",e.UNKNOWN="UNKNOWN",e))(_r||{}),Bt=class Ae{data;parent;constructor(t,n){if(this.data={delegatedFrom:null,delegatedTo:null,email:"",mailto:null,name:null,role:"REQ-PARTICIPANT",rsvp:null,scheduleAgent:null,sentBy:null,status:null,type:null,x:[]},this.parent=n,!this.parent)throw new Error("`event` option required!");if(!t.email)throw new Error("No value for `email` in ICalAttendee given!");t.name!==void 0&&this.name(t.name),t.email!==void 0&&this.email(t.email),t.mailto!==void 0&&this.mailto(t.mailto),t.sentBy!==void 0&&this.sentBy(t.sentBy),t.status!==void 0&&this.status(t.status),t.role!==void 0&&this.role(t.role),t.rsvp!==void 0&&this.rsvp(t.rsvp),t.type!==void 0&&this.type(t.type),t.delegatedTo!==void 0&&this.delegatedTo(t.delegatedTo),t.delegatedFrom!==void 0&&this.delegatedFrom(t.delegatedFrom),t.delegatesTo&&this.delegatesTo(t.delegatesTo),t.delegatesFrom&&this.delegatesFrom(t.delegatesFrom),t.scheduleAgent!==void 0&&this.scheduleAgent(t.scheduleAgent),t.x!==void 0&&this.x(t.x)}delegatedFrom(t){return t===void 0?this.data.delegatedFrom:(t?typeof t=="string"?this.data.delegatedFrom=new Ae(Et("delegatedFrom",t),this.parent):t instanceof Ae?this.data.delegatedFrom=t:this.data.delegatedFrom=new Ae(t,this.parent):this.data.delegatedFrom=null,this)}delegatedTo(t){return t===void 0?this.data.delegatedTo:t?(typeof t=="string"?this.data.delegatedTo=new Ae(Et("delegatedTo",t),this.parent):t instanceof Ae?this.data.delegatedTo=t:this.data.delegatedTo=new Ae(t,this.parent),this.data.status="DELEGATED",this):(this.data.delegatedTo=null,this.data.status==="DELEGATED"&&(this.data.status=null),this)}delegatesFrom(t){let n=t instanceof Ae?t:this.parent.createAttendee(t);return this.delegatedFrom(n),n.delegatedTo(this),n}delegatesTo(t){let n=t instanceof Ae?t:this.parent.createAttendee(t);return this.delegatedTo(n),n.delegatedFrom(this),n}email(t){return t?(this.data.email=t,this):this.data.email}mailto(t){return t===void 0?this.data.mailto:(this.data.mailto=t||null,this)}name(t){return t===void 0?this.data.name:(this.data.name=t||null,this)}role(t){return t===void 0?this.data.role:(this.data.role=pe(Qr,t),this)}rsvp(t){return t===void 0?this.data.rsvp:t===null?(this.data.rsvp=null,this):(this.data.rsvp=!!t,this)}scheduleAgent(t){return t===void 0?this.data.scheduleAgent:t?typeof t=="string"&&t.toUpperCase().startsWith("X-")?(this.data.scheduleAgent=t,this):(this.data.scheduleAgent=pe(Jr,t),this):(this.data.scheduleAgent=null,this)}sentBy(t){return t?(this.data.sentBy=t,this):this.data.sentBy}status(t){return t===void 0?this.data.status:t?(this.data.status=pe(Zr,t),this):(this.data.status=null,this)}toJSON(){return Object.assign({},this.data,{delegatedFrom:this.data.delegatedFrom?.email()||null,delegatedTo:this.data.delegatedTo?.email()||null,x:this.x()})}toString(){let t="ATTENDEE";if(!this.data.email)throw new Error("No value for `email` in ICalAttendee given!");return t+=";ROLE="+this.data.role,this.data.type&&(t+=";CUTYPE="+this.data.type),this.data.status&&(t+=";PARTSTAT="+this.data.status),this.data.rsvp!==null&&(t+=";RSVP="+this.data.rsvp.toString().toUpperCase()),this.data.sentBy!==null&&(t+=';SENT-BY="mailto:'+this.data.sentBy+'"'),this.data.delegatedTo&&(t+=';DELEGATED-TO="'+this.data.delegatedTo.email()+'"'),this.data.delegatedFrom&&(t+=';DELEGATED-FROM="'+this.data.delegatedFrom.email()+'"'),this.data.name&&(t+=';CN="'+B(this.data.name,!0)+'"'),this.data.email&&this.data.mailto&&(t+=";EMAIL="+B(this.data.email,!1)),this.data.scheduleAgent&&(t+=";SCHEDULE-AGENT="+this.data.scheduleAgent),this.data.x.length&&(t+=";"+this.data.x.map(([n,r])=>n.toUpperCase()+"="+B(r,!1)).join(";")),t+=":MAILTO:"+B(this.data.mailto||this.data.email,!1)+`\r
`,t}type(t){return t===void 0?this.data.type:t?(this.data.type=pe(_r,t),this):(this.data.type=null,this)}x(t,n){if(t===void 0)return ge(this.data);if(typeof t=="string"&&typeof n=="string")ge(this.data,t,n);else if(typeof t=="object")ge(this.data,t);else throw new Error("Either key or value is not a string!");return this}},Ln=(e=>(e.audio="audio",e.display="display",e.email="email",e))(Ln||{}),Os={end:"END",start:"START"},hr=class{data;event;constructor(e,t){if(this.data={attach:null,attendees:[],description:null,interval:null,relatesTo:null,repeat:null,summary:null,trigger:-600,type:"display",x:[]},this.event=t,!t)throw new Error("`event` option required!");e.type!==void 0&&this.type(e.type),"trigger"in e&&e.trigger!==void 0&&this.trigger(e.trigger),"triggerBefore"in e&&e.triggerBefore!==void 0&&this.triggerBefore(e.triggerBefore),"triggerAfter"in e&&e.triggerAfter!==void 0&&this.triggerAfter(e.triggerAfter),e.repeat&&this.repeat(e.repeat),e.attach!==void 0&&this.attach(e.attach),e.description!==void 0&&this.description(e.description),e.summary!==void 0&&this.summary(e.summary),e.attendees!==void 0&&this.attendees(e.attendees),e.x!==void 0&&this.x(e.x)}attach(e){if(e===void 0)return this.data.attach;if(!e)return this.data.attach=null,this;let t=null;if(typeof e=="string")t={mime:null,uri:e};else if(typeof e=="object")t={mime:e.mime||null,uri:e.uri};else throw new Error("`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalAlarm.html#attach");if(!t.uri)throw new Error("`attach.uri` is empty!");return this.data.attach={mime:t.mime,uri:t.uri},this}attendees(e){return e?(e.forEach(t=>this.createAttendee(t)),this):this.data.attendees}createAttendee(e){if(e instanceof Bt)return this.data.attendees.push(e),e;typeof e=="string"&&(e=Et("data",e));let t=new Bt(e,this);return this.data.attendees.push(t),t}description(e){return e===void 0?this.data.description:e?(this.data.description=e,this):(this.data.description=null,this)}relatesTo(e){if(e===void 0)return this.data.relatesTo;if(!e)return this.data.relatesTo=null,this;if(!Object.values(Os).includes(e))throw new Error("`relatesTo` is not correct, must be either `START` or `END`!");return this.data.relatesTo=e,this}repeat(e){if(e===void 0)return this.data.repeat;if(!e)return this.data.repeat=null,this;if(typeof e!="object")throw new Error("`repeat` is not correct, must be an object!");if(typeof e.times!="number"||!isFinite(e.times))throw new Error("`repeat.times` is not correct, must be numeric!");if(typeof e.interval!="number"||!isFinite(e.interval))throw new Error("`repeat.interval` is not correct, must be numeric!");return this.data.repeat=e,this}summary(e){return e===void 0?this.data.summary:e?(this.data.summary=e,this):(this.data.summary=null,this)}toJSON(){let e=this.trigger();return Object.assign({},this.data,{trigger:typeof e=="number"?e:Re(e),x:this.x()})}toString(){let e=`BEGIN:VALARM\r
`;if(e+="ACTION:"+this.data.type.toUpperCase()+`\r
`,typeof this.data.trigger=="number"&&this.data.relatesTo===null?this.data.trigger>0?e+="TRIGGER;RELATED=END:"+_e(this.data.trigger)+`\r
`:e+="TRIGGER:"+_e(this.data.trigger)+`\r
`:typeof this.data.trigger=="number"?e+="TRIGGER;RELATED="+this.data.relatesTo?.toUpperCase()+":"+_e(this.data.trigger)+`\r
`:e+="TRIGGER;VALUE=DATE-TIME:"+me(this.event.timezone(),this.data.trigger)+`\r
`,this.data.repeat){if(!this.data.repeat.times)throw new Error("No value for `repeat.times` in ICalAlarm given, but required for `interval`!");if(!this.data.repeat.interval)throw new Error("No value for `repeat.interval` in ICalAlarm given, but required for `repeat`!");e+="REPEAT:"+this.data.repeat.times+`\r
`,e+="DURATION:"+_e(this.data.repeat.interval)+`\r
`}return this.data.type==="audio"&&this.data.attach&&this.data.attach.mime?e+="ATTACH;FMTTYPE="+B(this.data.attach.mime,!1)+":"+B(this.data.attach.uri,!1)+`\r
`:this.data.type==="audio"&&this.data.attach?e+="ATTACH;VALUE=URI:"+B(this.data.attach.uri,!1)+`\r
`:this.data.type==="audio"&&(e+=`ATTACH;VALUE=URI:Basso\r
`),this.data.type!=="audio"&&this.data.description?e+="DESCRIPTION:"+B(this.data.description,!1)+`\r
`:this.data.type!=="audio"&&(e+="DESCRIPTION:"+B(this.event.summary(),!1)+`\r
`),this.data.type==="email"&&this.data.summary?e+="SUMMARY:"+B(this.data.summary,!1)+`\r
`:this.data.type==="email"&&(e+="SUMMARY:"+B(this.event.summary(),!1)+`\r
`),this.data.type==="email"&&this.data.attendees.forEach(t=>{e+=t.toString()}),e+=Nn(this.data),e+=`END:VALARM\r
`,e}trigger(e){if(e===void 0&&typeof this.data.trigger=="number")return-1*this.data.trigger;if(e===void 0)return this.data.trigger;if(typeof e=="number"&&isFinite(e))this.data.trigger=-1*e;else{if(!e||typeof e=="number")throw new Error("`trigger` is not correct, must be a finite number or a supported date!");this.data.trigger=De(e,"trigger")}return this}triggerAfter(e){return e===void 0?this.data.trigger:this.trigger(typeof e=="number"?-1*e:e)}triggerBefore(e){return e===void 0?this.trigger():this.trigger(e)}type(e){if(e===void 0)return this.data.type;if(!e||!Object.keys(Ln).includes(e))throw new Error("`type` is not correct, must be either `display` or `audio`!");return this.data.type=e,this}x(e,t){if(e===void 0)return ge(this.data);if(typeof e=="string"&&typeof t=="string")ge(this.data,e,t);else if(typeof e=="object")ge(this.data,e);else throw new Error("Either key or value is not a string!");return this}},fr=class{data;constructor(e){if(this.data={name:""},!e.name)throw new Error("No value for `name` in ICalCategory given!");this.name(e.name)}name(e){return e===void 0?this.data.name:(this.data.name=e,this)}toJSON(){return Object.assign({},this.data)}toString(){return B(this.data.name,!1)}},ei=(e=>(e.BUSY="BUSY",e.FREE="FREE",e.OOF="OOF",e.TENTATIVE="TENTATIVE",e))(ei||{}),ti=(e=>(e.CONFIDENTIAL="CONFIDENTIAL",e.PRIVATE="PRIVATE",e.PUBLIC="PUBLIC",e))(ti||{}),ni=(e=>(e.CANCELLED="CANCELLED",e.CONFIRMED="CONFIRMED",e.TENTATIVE="TENTATIVE",e))(ni||{}),ri=(e=>(e.OPAQUE="OPAQUE",e.TRANSPARENT="TRANSPARENT",e))(ri||{}),pr=class{calendar;data;constructor(e,t){if(this.data={alarms:[],allDay:!1,attachments:[],attendees:[],busystatus:null,categories:[],class:null,created:null,description:null,end:null,floating:!1,id:crypto.randomUUID(),lastModified:null,location:null,organizer:null,priority:null,recurrenceId:null,repeating:null,sequence:0,stamp:new Date,start:new Date,status:null,summary:"",timezone:null,transparency:null,url:null,x:[]},this.calendar=t,!t)throw new Error("`calendar` option required!");e.id&&this.id(e.id),e.sequence!==void 0&&this.sequence(e.sequence),e.start&&this.start(e.start),e.end!==void 0&&this.end(e.end),e.recurrenceId!==void 0&&this.recurrenceId(e.recurrenceId),e.timezone!==void 0&&this.timezone(e.timezone),e.stamp!==void 0&&this.stamp(e.stamp),e.allDay!==void 0&&this.allDay(e.allDay),e.floating!==void 0&&this.floating(e.floating),e.repeating!==void 0&&this.repeating(e.repeating),e.summary!==void 0&&this.summary(e.summary),e.location!==void 0&&this.location(e.location),e.description!==void 0&&this.description(e.description),e.organizer!==void 0&&this.organizer(e.organizer),e.attendees!==void 0&&this.attendees(e.attendees),e.alarms!==void 0&&this.alarms(e.alarms),e.categories!==void 0&&this.categories(e.categories),e.status!==void 0&&this.status(e.status),e.busystatus!==void 0&&this.busystatus(e.busystatus),e.priority!==void 0&&this.priority(e.priority),e.url!==void 0&&this.url(e.url),e.attachments!==void 0&&this.attachments(e.attachments),e.transparency!==void 0&&this.transparency(e.transparency),e.created!==void 0&&this.created(e.created),e.lastModified!==void 0&&this.lastModified(e.lastModified),e.class!==void 0&&this.class(e.class),e.x!==void 0&&this.x(e.x)}alarms(e){return e?(e.forEach(t=>this.createAlarm(t)),this):this.data.alarms}allDay(e){return e===void 0?this.data.allDay:(this.data.allDay=!!e,this)}attachments(e){return e?(e.forEach(t=>this.createAttachment(t)),this):this.data.attachments}attendees(e){return e?(e.forEach(t=>this.createAttendee(t)),this):this.data.attendees}busystatus(e){return e===void 0?this.data.busystatus:e===null?(this.data.busystatus=null,this):(this.data.busystatus=pe(ei,e),this)}categories(e){return e?(e.forEach(t=>this.createCategory(t)),this):this.data.categories}class(e){return e===void 0?this.data.class:e===null?(this.data.class=null,this):(this.data.class=pe(ti,e),this)}createAlarm(e){let t=e instanceof hr?e:new hr(e,this);return this.data.alarms.push(t),t}createAttachment(e){return this.data.attachments.push(e),this}createAttendee(e){if(e instanceof Bt)return this.data.attendees.push(e),e;typeof e=="string"&&(e=Et("data",e));let t=new Bt(e,this);return this.data.attendees.push(t),t}createCategory(e){let t=e instanceof fr?e:new fr(e);return this.data.categories.push(t),t}created(e){return e===void 0?this.data.created:e===null?(this.data.created=null,this):(this.data.created=De(e,"created"),this)}description(e){return e===void 0?this.data.description:e===null?(this.data.description=null,this):(typeof e=="string"?this.data.description={plain:e}:this.data.description=e,this)}end(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.end):e===null?(this.data.end=null,this):(this.data.end=De(e,"end"),this)}floating(e){return e===void 0?this.data.floating:(this.data.floating=!!e,this.data.floating&&(this.data.timezone=null),this)}id(e){return e===void 0?this.data.id:(this.data.id=String(e),this)}lastModified(e){return e===void 0?this.data.lastModified:e===null?(this.data.lastModified=null,this):(this.data.lastModified=De(e,"lastModified"),this)}location(e){if(e===void 0)return this.data.location;if(typeof e=="string")return this.data.location={title:e},this;if(e&&("title"in e&&!e.title||e?.geo&&(typeof e.geo.lat!="number"||!isFinite(e.geo.lat)||typeof e.geo.lon!="number"||!isFinite(e.geo.lon))||!("title"in e)&&!e?.geo))throw new Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalEvent.html#location");return this.data.location=e||null,this}organizer(e){return e===void 0?this.data.organizer:e===null?(this.data.organizer=null,this):(this.data.organizer=Et("organizer",e),this)}priority(e){if(e===void 0)return this.data.priority;if(e===null)return this.data.priority=null,this;if(e<0||e>9)throw new Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");return this.data.priority=Math.round(e),this}recurrenceId(e){return e===void 0?this.data.recurrenceId:e===null?(this.data.recurrenceId=null,this):(this.data.recurrenceId=De(e,"recurrenceId"),this)}repeating(e){if(e===void 0)return this.data.repeating;if(!e)return this.data.repeating=null,this;if(nn(e)||typeof e=="string")return this.data.repeating=e,this;if(this.data.repeating={freq:pe(In,e.freq)},e.count){if(!isFinite(e.count))throw new Error("`repeating.count` must be a finite number!");this.data.repeating.count=e.count}if(e.interval){if(!isFinite(e.interval))throw new Error("`repeating.interval` must be a finite number!");this.data.repeating.interval=e.interval}if(e.until!==void 0&&(this.data.repeating.until=De(e.until,"repeating.until")),e.byDay){let t=Array.isArray(e.byDay)?e.byDay:[e.byDay];this.data.repeating.byDay=t.map(n=>pe(gn,n))}if(e.byMonth){let t=Array.isArray(e.byMonth)?e.byMonth:[e.byMonth];this.data.repeating.byMonth=t.map(n=>{if(typeof n!="number"||n<1||n>12)throw new Error("`repeating.byMonth` contains invalid value `"+n+"`!");return n})}if(e.byMonthDay){let t=Array.isArray(e.byMonthDay)?e.byMonthDay:[e.byMonthDay];this.data.repeating.byMonthDay=t.map(n=>{if(typeof n!="number"||n<-31||n>31||n===0)throw new Error("`repeating.byMonthDay` contains invalid value `"+n+"`!");return n})}if(e.bySetPos){if(!this.data.repeating.byDay)throw"`repeating.bySetPos` must be used along with `repeating.byDay`!";let t=Array.isArray(e.bySetPos)?e.bySetPos:[e.bySetPos];this.data.repeating.bySetPos=t.map(n=>{if(typeof n!="number"||n<-366||n>366||n===0)throw"`repeating.bySetPos` contains invalid value `"+n+"`!";return n})}if(e.exclude){let t=Array.isArray(e.exclude)?e.exclude:[e.exclude];this.data.repeating.exclude=t.map((n,r)=>De(n,`repeating.exclude[${r}]`))}return e.startOfWeek&&(this.data.repeating.startOfWeek=pe(gn,e.startOfWeek)),this}sequence(e){if(e===void 0)return this.data.sequence;let t=parseInt(String(e),10);if(isNaN(t))throw new Error("`sequence` must be a number!");return this.data.sequence=e,this}stamp(e){return e===void 0?this.data.stamp:(this.data.stamp=De(e,"stamp"),this)}start(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.start):(this.data.start=De(e,"start"),this)}status(e){return e===void 0?this.data.status:e===null?(this.data.status=null,this):(this.data.status=pe(ni,e),this)}summary(e){return e===void 0?this.data.summary:(this.data.summary=e?String(e):"",this)}timestamp(e){return e===void 0?this.stamp():this.stamp(e)}timezone(e){return e===void 0&&this.data.timezone!==null?this.data.timezone:e===void 0?this.calendar.timezone():(this.data.timezone=e&&e!=="UTC"?e.toString():null,this.data.timezone&&(this.data.floating=!1),this)}toJSON(){let e=null;return nn(this.data.repeating)||typeof this.data.repeating=="string"?e=this.data.repeating.toString():this.data.repeating&&(e=Object.assign({},this.data.repeating,{exclude:this.data.repeating.exclude?.map(t=>Re(t)),until:Re(this.data.repeating.until)||void 0})),this.swapStartAndEndIfRequired(),Object.assign({},this.data,{created:Re(this.data.created)||null,end:Re(this.data.end)||null,lastModified:Re(this.data.lastModified)||null,recurrenceId:Re(this.data.recurrenceId)||null,repeating:e,stamp:Re(this.data.stamp)||null,start:Re(this.data.start)||null,x:this.x()})}toString(){let e="";if(e+=`BEGIN:VEVENT\r
`,e+="UID:"+this.data.id+`\r
`,e+="SEQUENCE:"+this.data.sequence+`\r
`,this.swapStartAndEndIfRequired(),e+="DTSTAMP:"+me(this.calendar.timezone(),this.data.stamp)+`\r
`,this.data.allDay?(e+="DTSTART;VALUE=DATE:"+me(this.timezone(),this.data.start,!0)+`\r
`,this.data.end&&(e+="DTEND;VALUE=DATE:"+me(this.timezone(),this.data.end,!0)+`\r
`),e+=`X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r
`,e+=`X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r
`):(e+=tn(this.timezone(),"DTSTART",this.data.start,this.data)+`\r
`,this.data.end&&(e+=tn(this.timezone(),"DTEND",this.data.end,this.data)+`\r
`)),nn(this.data.repeating)||typeof this.data.repeating=="string"){let t=this.data.repeating.toString().replace(/\r\n/g,`
`).split(`
`).filter(n=>n&&!n.startsWith("DTSTART:")).join(`\r
`);!t.includes(`\r
`)&&!t.startsWith("RRULE:")&&(t="RRULE:"+t),e+=t.trim()+`\r
`}else this.data.repeating&&(e+="RRULE:FREQ="+this.data.repeating.freq,this.data.repeating.count&&(e+=";COUNT="+this.data.repeating.count),this.data.repeating.interval&&(e+=";INTERVAL="+this.data.repeating.interval),this.data.repeating.until&&(e+=";UNTIL="+me(this.calendar.timezone(),this.data.repeating.until,!1,this.floating())),this.data.repeating.byDay&&(e+=";BYDAY="+this.data.repeating.byDay.join(",")),this.data.repeating.byMonth&&(e+=";BYMONTH="+this.data.repeating.byMonth.join(",")),this.data.repeating.byMonthDay&&(e+=";BYMONTHDAY="+this.data.repeating.byMonthDay.join(",")),this.data.repeating.bySetPos&&(e+=";BYSETPOS="+this.data.repeating.bySetPos.join(",")),this.data.repeating.startOfWeek&&(e+=";WKST="+this.data.repeating.startOfWeek),e+=`\r
`,this.data.repeating.exclude&&(this.data.allDay?e+="EXDATE;VALUE=DATE:"+this.data.repeating.exclude.map(t=>me(this.calendar.timezone(),t,!0)).join(",")+`\r
`:(e+="EXDATE",this.timezone()?e+=";TZID="+this.timezone()+":"+this.data.repeating.exclude.map(t=>me(this.timezone(),t,!1,!0)).join(",")+`\r
`:e+=":"+this.data.repeating.exclude.map(t=>me(this.timezone(),t,!1,this.floating())).join(",")+`\r
`)));return this.data.recurrenceId&&(e+=tn(this.timezone(),"RECURRENCE-ID",this.data.recurrenceId,this.data)+`\r
`),e+="SUMMARY:"+B(this.data.summary,!1)+`\r
`,this.data.transparency&&(e+="TRANSP:"+B(this.data.transparency,!1)+`\r
`),this.data.location&&"title"in this.data.location&&this.data.location.title&&(e+="LOCATION:"+B(this.data.location.title+(this.data.location.address?`
`+this.data.location.address:""),!1)+`\r
`,this.data.location.radius&&this.data.location.geo&&(e+="X-APPLE-STRUCTURED-LOCATION;VALUE=URI;"+(this.data.location.address?"X-ADDRESS="+B(this.data.location.address,!1)+";":"")+"X-APPLE-RADIUS="+B(this.data.location.radius,!1)+";X-TITLE="+B(this.data.location.title,!1)+":geo:"+B(this.data.location.geo?.lat,!1)+","+B(this.data.location.geo?.lon,!1)+`\r
`)),this.data.location?.geo?.lat&&this.data.location.geo.lon&&(e+="GEO:"+B(this.data.location.geo.lat,!1)+";"+B(this.data.location.geo.lon,!1)+`\r
`),this.data.description&&(e+="DESCRIPTION:"+B(this.data.description.plain,!1)+`\r
`,this.data.description.html&&(e+="X-ALT-DESC;FMTTYPE=text/html:"+B(this.data.description.html,!1)+`\r
`)),this.data.organizer&&(e+='ORGANIZER;CN="'+B(this.data.organizer.name,!0)+'"',this.data.organizer.sentBy&&(e+=';SENT-BY="mailto:'+B(this.data.organizer.sentBy,!0)+'"'),this.data.organizer.email&&this.data.organizer.mailto&&(e+=";EMAIL="+B(this.data.organizer.email,!1)),e+=":",this.data.organizer.email&&(e+="mailto:"+B(this.data.organizer.mailto||this.data.organizer.email,!1)),e+=`\r
`),this.data.attendees.forEach(function(t){e+=t.toString()}),this.data.alarms.forEach(function(t){e+=t.toString()}),this.data.categories.length>0&&(e+="CATEGORIES:"+this.data.categories.map(t=>t.toString()).join()+`\r
`),this.data.url&&(e+="URL;VALUE=URI:"+B(this.data.url,!1)+`\r
`),this.data.attachments.length>0&&this.data.attachments.forEach(t=>{e+="ATTACH:"+B(t,!1)+`\r
`}),this.data.status&&(e+="STATUS:"+this.data.status.toUpperCase()+`\r
`),this.data.busystatus&&(e+="X-MICROSOFT-CDO-BUSYSTATUS:"+this.data.busystatus.toUpperCase()+`\r
`),this.data.priority!==null&&(e+="PRIORITY:"+this.data.priority+`\r
`),e+=Nn(this.data),this.data.created&&(e+="CREATED:"+me(this.calendar.timezone(),this.data.created)+`\r
`),this.data.lastModified&&(e+="LAST-MODIFIED:"+me(this.calendar.timezone(),this.data.lastModified)+`\r
`),this.data.class&&(e+="CLASS:"+this.data.class.toUpperCase()+`\r
`),e+=`END:VEVENT\r
`,e}transparency(e){return e===void 0?this.data.transparency:e?(this.data.transparency=pe(ri,e),this):(this.data.transparency=null,this)}uid(e){return e===void 0?this.id():this.id(e)}url(e){return e===void 0?this.data.url:(this.data.url=e?String(e):null,this)}x(e,t){return e===void 0?ge(this.data):(typeof e=="string"&&typeof t=="string"&&ge(this.data,e,t),typeof e=="object"&&ge(this.data,e),this)}swapStartAndEndIfRequired(){if(this.data.start&&this.data.end&&ur(this.data.start).getTime()>ur(this.data.end).getTime()){let e=this.data.start;this.data.start=this.data.end,this.data.end=e}}},ii=(e=>(e.ADD="ADD",e.CANCEL="CANCEL",e.COUNTER="COUNTER",e.DECLINECOUNTER="DECLINECOUNTER",e.PUBLISH="PUBLISH",e.REFRESH="REFRESH",e.REPLY="REPLY",e.REQUEST="REQUEST",e))(ii||{}),zs=class{data;constructor(e={}){this.data={description:null,events:[],method:null,name:null,prodId:"//sebbo.net//ical-generator//EN",scale:null,source:null,timezone:null,ttl:null,url:null,x:[]},e.prodId!==void 0&&this.prodId(e.prodId),e.method!==void 0&&this.method(e.method),e.name!==void 0&&this.name(e.name),e.description!==void 0&&this.description(e.description),e.timezone!==void 0&&this.timezone(e.timezone),e.source!==void 0&&this.source(e.source),e.url!==void 0&&this.url(e.url),e.scale!==void 0&&this.scale(e.scale),e.ttl!==void 0&&this.ttl(e.ttl),e.events!==void 0&&this.events(e.events),e.x!==void 0&&this.x(e.x)}clear(){return this.data.events=[],this}createEvent(e){let t=e instanceof pr?e:new pr(e,this);return this.data.events.push(t),t}description(e){return e===void 0?this.data.description:(this.data.description=e?String(e):null,this)}events(e){return e?(e.forEach(t=>this.createEvent(t)),this):this.data.events}length(){return this.data.events.length}method(e){return e===void 0?this.data.method:e?(this.data.method=pe(ii,e),this):(this.data.method=null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e?String(e):null,this)}prodId(e){if(!e)return this.data.prodId;if(typeof e=="string")return this.data.prodId=e,this;if(typeof e!="object")throw new Error("`prodid` needs to be a string or an object!");if(!e.company)throw new Error("`prodid.company` is a mandatory item!");if(!e.product)throw new Error("`prodid.product` is a mandatory item!");let t=(e.language||"EN").toUpperCase();return this.data.prodId="//"+e.company+"//"+e.product+"//"+t,this}scale(e){return e===void 0?this.data.scale:(e===null?this.data.scale=null:this.data.scale=e.toUpperCase(),this)}source(e){return e===void 0?this.data.source:(this.data.source=e||null,this)}timezone(e){return e===void 0?this.data.timezone?.name||null:(e==="UTC"?this.data.timezone=null:typeof e=="string"?this.data.timezone={name:e}:e===null?this.data.timezone=null:this.data.timezone=e,this)}toJSON(){return Object.assign({},this.data,{events:this.data.events.map(e=>e.toJSON()),timezone:this.timezone(),x:this.x()})}toString(){let e="";return e=`BEGIN:VCALENDAR\r
VERSION:2.0\r
`,e+="PRODID:-"+this.data.prodId+`\r
`,this.data.url&&(e+="URL:"+this.data.url+`\r
`),this.data.source&&(e+="SOURCE;VALUE=URI:"+this.data.source+`\r
`),this.data.scale&&(e+="CALSCALE:"+this.data.scale+`\r
`),this.data.method&&(e+="METHOD:"+this.data.method+`\r
`),this.data.name&&(e+="NAME:"+this.data.name+`\r
`,e+="X-WR-CALNAME:"+this.data.name+`\r
`),this.data.description&&(e+="X-WR-CALDESC:"+this.data.description+`\r
`),this.data.timezone?.generator&&[...new Set([this.timezone(),...this.data.events.map(t=>t.timezone())])].filter(t=>t!==null&&!t.startsWith("/")).forEach(t=>{if(!this.data.timezone?.generator)return;let n=this.data.timezone.generator(t);n&&(e+=n.replace(/\r\n/g,`
`).replace(/\n/g,`\r
`).trim()+`\r
`)}),this.data.timezone?.name&&(e+="TIMEZONE-ID:"+this.data.timezone.name+`\r
`,e+="X-WR-TIMEZONE:"+this.data.timezone.name+`\r
`),this.data.ttl&&(e+="REFRESH-INTERVAL;VALUE=DURATION:"+_e(this.data.ttl)+`\r
`,e+="X-PUBLISHED-TTL:"+_e(this.data.ttl)+`\r
`),this.data.events.forEach(t=>e+=t.toString()),e+=Nn(this.data),e+="END:VCALENDAR",Ns(e)}ttl(e){return e===void 0?this.data.ttl:(Ms(e)?this.data.ttl=e.asSeconds():e&&e>0?this.data.ttl=e:this.data.ttl=null,this)}url(e){return e===void 0?this.data.url:(this.data.url=e||null,this)}x(e,t){if(e===void 0)return ge(this.data);if(typeof e=="string"&&typeof t=="string")ge(this.data,e,t);else if(typeof e=="object")ge(this.data,e);else throw new Error("Either key or value is not a string!");return this}};function Bs(e){return new zs(e)}var Ps=Bs;function Fs(e){const{ctx:t,x:n,y:r,width:i,height:o,radius:a,color:s}=e;t.fillStyle=s,t.beginPath(),t.moveTo(n+a,r),t.lineTo(n+i-a,r),t.quadraticCurveTo(n+i,r,n+i,r+a),t.lineTo(n+i,r+o-a),t.quadraticCurveTo(n+i,r+o,n+i-a,r+o),t.lineTo(n+a,r+o),t.quadraticCurveTo(n,r+o,n,r+o-a),t.lineTo(n,r+a),t.quadraticCurveTo(n,r,n+a,r),t.closePath(),t.fill()}function rn(e,t,n,r){const o=document.createElement("canvas").getContext("2d");if(!o)return[];o.font=`${r}px '${n}'`;let a="";const s=[];for(const d of e){const h=a+d;o.measureText(h).width>t&&a!==""?(s.push(a),a=d):a=h}return a&&s.push(a),s}function oi(e){const{ctx:t,x:n,y:r,text:i,font:o,fontSize:a,color:s,align:d="left"}=e;t.fillStyle=s,t.font=`${a}px '${o}'`,t.textAlign=d||"left",t.fillText(i,n,r)}function Us(e){const{ctx:t,x:n,y:r,width:i,height:o,title:a,professor:s,location:d,font:h,fontSize:u}=e,f=rn(a,i,h,u),g=rn(s,i,h,u),p=rn(d,i,h,u),D=[...f,...p,...g].slice(0,3),v=D.reduce((T,R,E)=>R===""?T+2:T+u,0);let y=(o-v)/2+u-7;D.forEach((T,R)=>{T!==""?(oi({ctx:t,x:n,y:r+y,text:T,font:h,fontSize:u,color:`rgba(0, 0, 0, ${R<f.length?.8:.5})`}),y+=u+5):y+=2})}async function ai(e){const{timetableName:t,lectures:n,timetableType:r,semesterName:i,semesterFontSize:o,tileFontSize:a}=e,s=Object.values(Ri.Tile.TimeTable.default).flatMap(p=>Object.values(p)),d=`Image_template_${r}.png`,h=new Image;h.src=d,await new Promise((p,D)=>{h.onload=p,h.onerror=D});const u=await cr.loadImage(d),f=cr.createCanvas(u.width,u.height),g=f.getContext("2d");g.drawImage(u,0,0),oi({ctx:g,x:r==="5days"?952:1302,y:78,text:i+" "+t,font:"NotoSansKR",fontSize:o,color:"#CCCCCC",align:"right"});for(const p of n){const D=s[p.courseId%s.length]||"#F2CECE";for(const v of p.classes){const{day:m,begin:y,end:T}=v,[R,E,N,A]=[178*m+76,y*4/3-486,171,(T-y)*4/3-7];Fs({ctx:g,x:R,y:E,width:N,height:A,radius:4,color:D}),Us({ctx:g,x:R+12,y:E+8,width:N-24,height:A-16,title:p.name,professor:Ti(p.professors)||"",location:v.buildingCode+" "+v.roomName||"",font:"NotoSansKR",fontSize:a})}}return f}async function $s(e){const n=(await ai(e)).toDataURL("image/png"),r=document.createElement("a");r.href=n,r.download=`${e.timetableName}.png`,r.click(),URL.revokeObjectURL(n)}async function js(e){const n=(await ai(e)).toDataURL("image/png"),i=await(await fetch(n)).blob();if(!navigator.clipboard?.write)return;const o=new ClipboardItem({"image/png":i});await navigator.clipboard.write([o])}function Ws(e){const{name:t,lectures:n,semesterObject:r}=e,i=Ps({name:t,prodId:"//SPARCS//OTL Plus",timezone:"Asia/Seoul"});for(const d of n)for(const h of d.classes){const u=h.buildingCode+" "+h.roomName,f=new Date(r.beginning),g=(h.day+1)%7,p=new Date(f),D=p.getDay(),v=(g+7-D)%7;p.setDate(p.getDate()+v);const m=Math.floor(h.begin/60),y=h.begin%60,T=Math.floor(h.end/60),R=h.end%60,E=new Date(p);E.setHours(m,y,0,0);const N=new Date(p);N.setHours(T,R,0,0),i.createEvent({start:E,end:N,summary:d.name,location:u,repeating:{freq:In.WEEKLY,until:new Date(r.end)},timezone:"Asia/Seoul"}).alarms([{type:Ln.display,trigger:900}])}const o=new Blob([i.toString()],{type:"text/calendar;charset=utf-8"}),a=URL.createObjectURL(o),s=document.createElement("a");s.href=a,s.download=`${t}.ics`,s.click(),URL.revokeObjectURL(a)}const qs=x(L)`
    width: 100%;

    ${F.laptop} {
        height: 56px;
        flex-wrap: wrap;
        align-items: center;
    }

    ${F.tablet} {
        height: auto;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
`,on=x.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 0;
    color: ${({theme:e})=>e.colors.Highlight.default};
    font-size: 13px;

    &:hover {
        text-decoration: underline;
    }
`;function mn({timetableName:e,timetableLectures:t,year:n,semester:r}){const{t:i}=Ne(),o=$e(),a=Ue("tablet"),{query:s}=ne("GET","/semesters"),[d,h]=c.useState("idle"),u=c.useMemo(()=>s?s.data?.semesters.find(f=>f.year===n&&f.semester===r):null,[s.data,n,r]);return c.useEffect(()=>{if(d.startsWith("success")){const f=setTimeout(()=>{h("idle")},500);return()=>clearTimeout(f)}},[d]),w(qs,{direction:a?"row":"column",gap:8,children:[w(on,{onClick:()=>{d==="idle"&&(js({timetableName:e,lectures:t,timetableType:"5days",semesterName:n+" "+sn(r),semesterFontSize:30,tileFontSize:20}),h("successCopyImage"))},children:[l(X,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:d=="successCopyImage"?l(Yt,{}):l(wn,{})}),!a&&l("span",{children:i("timetable.copyImage")})]}),w(on,{onClick:()=>{d==="idle"&&($s({timetableName:e,lectures:t,timetableType:"5days",semesterName:n+" "+sn(r),semesterFontSize:30,tileFontSize:20}),h("successDownloadImage"))},children:[l(X,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:d=="successDownloadImage"?l(Yt,{}):l(Ii,{})}),!a&&l("span",{children:i("timetable.exportImage")})]}),w(on,{onClick:()=>{if(d==="idle"){if(!u)return;Ws({name:e,lectures:t,semesterObject:{beginning:new Date(u.beginning),end:new Date(u.end)}}),h("successDownloadCalendar")}},children:[l(X,{size:16,color:o.colors.Highlight.default,children:d=="successDownloadCalendar"?l(Yt,{}):l(Ai,{})}),!a&&l("span",{children:i("timetable.exportICal")})]})]})}const Hs=x.div`
    display: flex;
    flex-direction: column;
    width: 264px;
    height: 100%;
    gap: 12px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${F.laptop} {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`;function gr({timetableName:e,timetableLectures:t,hover:n,setHover:r,year:i,semester:o}){const a=Ue("laptop");return w(Hs,{children:[!a&&l(As,{timetableLectures:t,hover:n,setHover:r}),l(us,{hover:n,setHover:r,timetableLectures:t}),!a&&l(gt,{direction:"row"}),l(ps,{timetableLectures:t,hover:n,setHover:r}),!a&&l(gt,{direction:"row"}),!a&&l(ws,{timetableLectures:t,hover:n,setHover:r}),!a&&l(gt,{direction:"row"}),!a&&l(mn,{timetableName:e,timetableLectures:t,year:i,semester:o})]})}const Ys=x(L)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${F.tablet} {
        padding: 8px;
    }

    ${F.mobile} {
        padding: 0 8px 8px 8px;
    }
`,mr=x(L)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${F.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }

    ${F.tablet} {
        flex: 1 1 0;
        min-height: 0;
        height: 100%;
    }
`,br=x(L)`
    border-radius: 12px;
    width: fit-content;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${F.laptop} {
        max-width: none;
    }

    ${F.tablet} {
        width: 100%;
        max-width: none;
        flex: 1 0 0;
    }
`,vr=x(L)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px;
    flex: 1;
    min-height: 0;
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);

    ${F.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`,Vs=x.div`
    width: 380px;
    height: 100%;
    display: flex;

    ${F.desktop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${F.laptop} {
        width: 300px;
    }
`,yr=x.div`
    width: 300px;
    height: 100%;
    display: flex;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${F.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${F.laptop} {
        width: 300px;
    }

    ${F.tablet} {
        width: 100%;
    }
`,Gs=x.div`
    ${F.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,wr=x(L)`
    flex: 1;
    min-height: 0;

    ${F.laptop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }
`,xr=x.div`
    ${F.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
        box-shadow:
            0px 1px 3px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.06);
    }

    ${F.tablet} {
        height: auto;
        padding: 8px;
    }
`,Xs=x(L)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.06);
`,vl=mi(function(){const{status:t}=ot(),n=bn(),r=$e(),i=Ue("tablet"),o=Ue("laptop"),a=Ue("desktop");c.useEffect(()=>{Ie("Page View",{page:"Timetable"})},[]);const s=c.useRef(null),d=c.useRef(null),h=c.useRef(null),[u,f]=c.useState([]),[g,p]=c.useState(null),[D,v]=c.useState(null),[m,y]=c.useState(null),[T,R]=c.useState(""),[E,N]=c.useState(-1),[A,k]=c.useState(1),[b,S]=c.useState(!1),[M,O]=c.useState([]),{query:$}=ne("GET",`/timetables/${m}`,{enabled:m!==null&&t==="success"}),{query:W,setParams:J}=ne("GET","/timetables/my-timetable",{enabled:m===null&&t==="success"}),U=t!=="success"?M:m===null?W.data?.lectures??[]:$.data?.lectures??[],{requestFunction:oe}=ne("PATCH",`/timetables/${m}`,{onSuccess:()=>{n.invalidateQueries({queryKey:[`/timetables/${m}`]}).then(()=>{p(null),f([])})}}),q=c.useCallback(j=>{O(ae=>ae.filter(Le=>Le.id!==j)),p(null),f([])},[]),_=c.useCallback(j=>{oe({action:"delete",lectureId:j}),Ie("Remove Lecture from Timetable",{lectureId:j,timetableId:m})},[oe,m]);return c.useEffect(()=>{f([]),p(null)},[b]),c.useEffect(()=>{const j=ae=>{s.current&&!s.current.contains(ae.target)&&d.current&&!d.current.contains(ae.target)&&h.current&&h.current.contains(ae.target)&&p(null)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[]),c.useEffect(()=>{p(null),f([]),E!==-1&&J({year:E,semester:A}),O([])},[E,A]),c.useEffect(()=>{i||(p(null),f([]))},[m]),c.useEffect(()=>{D!==null&&i&&S(!0)},[D]),l(Ys,{direction:i?"column":"row",align:"stretch",justify:"center",gap:i?8:12,flex:"1 0 0",ref:h,children:i?w(We,{children:[w(br,{ref:d,direction:"column",gap:0,align:"stretch",justify:"stretch",style:b?{flex:"1 1 0",minHeight:0}:void 0,children:[l(ir,{timeTableLectures:U,currentTimetableId:m,setCurrentTimetableId:y,setCurrentTimetableName:R,year:E,semester:A,setYear:N,setSemester:k}),l(vr,{direction:"column",gap:12,align:"stretch",justify:"flex-start",flex:"1 0 0",children:l(wr,{direction:"column",gap:0,align:"stretch",flex:"1 1 auto",children:l($n,{lectures:U,timeFilter:D,setTimeFilter:v,needLectureDeletable:m!==null,hoveredLectures:u,setHoveredLectures:f,selectedLecture:g,setSelectedLecture:p,deleteLecture:t==="success"?m===null?void 0:_:q})})})]}),l(xr,{children:l(gr,{timetableName:T,timetableLectures:U,hover:u,setHover:f,year:E,semester:A})}),w(Xs,{direction:"row",gap:0,children:[l(mn,{timetableName:T,timetableLectures:U,year:E,semester:A}),w(L,{direction:"row",gap:4,align:"center",style:{height:"100%"},onClick:()=>{S(!b)},children:[l(X,{size:16,color:r.colors.Highlight.default,children:l(bi,{})}),l(z,{type:"Normal",color:"Highlight.default",children:b?"검색 닫기":"과목 검색하기"})]})]}),b&&l(mr,{direction:"row",align:"flex-start",gap:12,ref:s,children:l(yr,{children:l(Hn,{timetableLectures:U,year:E,semester:A,setNonLoginTimetable:O,hoveredLecture:u,selectedLecture:g,setSelectedLecture:p,setHoveredLecture:f,timeFilter:D,setTimeFilter:v,currentTimetableId:m})})}),g&&l(vi,{isOpen:!!g,onClose:()=>{},fullScreen:!0,header:!1,children:l(Wn,{setNonLoginTimetable:O,handleRemoveFromTimetable:t==="success"?m===null?void 0:_:q,selectedLecture:g||(u?.length==1?u[0]:null),year:E,semester:A,onMobileModalClose:()=>{f([]),p(null)},currentTimetableId:m,timetableLectures:U})})]}):w(We,{children:[w(mr,{direction:a?"column-reverse":"row",align:"flex-start",gap:12,ref:s,children:[o&&l(Gs,{children:l(mn,{timetableName:T,timetableLectures:U,year:E,semester:A})}),l(yr,{style:{overflow:"auto"},children:l(Hn,{timetableLectures:U,year:E,semester:A,setNonLoginTimetable:O,hoveredLecture:u,selectedLecture:g,setSelectedLecture:p,setHoveredLecture:f,timeFilter:D,setTimeFilter:v,currentTimetableId:m})}),!a&&l(gt,{direction:"column"}),l(Vs,{style:{overflow:"auto"},children:l(Wn,{selectedLecture:g||(u?.length==1?u[0]:null),year:E,semester:A})})]}),l(L,{direction:"column",gap:0,children:w(br,{ref:d,direction:"column",gap:0,style:{overflowX:"hidden"},flex:"1 1 auto",children:[l(ir,{timeTableLectures:U,currentTimetableId:m,setCurrentTimetableId:y,setCurrentTimetableName:R,year:E,semester:A,setYear:N,setSemester:k}),w(vr,{direction:o?"column":"row",gap:o?12:30,align:"stretch",justify:"flex-start",flex:"1 0 0",children:[l(wr,{direction:"column",gap:0,children:l($n,{cellWidth:"100px",lectures:U,timeFilter:D,setTimeFilter:v,needLectureDeletable:m!==null,hoveredLectures:u,setHoveredLectures:f,selectedLecture:g,setSelectedLecture:p,deleteLecture:t==="success"?m===null?void 0:_:q})}),!o&&l(gt,{direction:"column"}),l(xr,{children:l(gr,{timetableName:T,timetableLectures:U,hover:u,setHover:f,year:E,semester:A})})]})]})})]})})});export{vl as default};
//# sourceMappingURL=timetable-D-5u3wXf.js.map
