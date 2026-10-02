(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b6f5295eb01b6f9b62c55f3becfc83a2448edba3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`a5776c53-f737-4c21-b141-d80b13a53def`,e._sentryDebugIdIdentifier=`sentry-dbid-a5776c53-f737-4c21-b141-d80b13a53def`)}catch{}})();import{D as e,S as t,l as n,n as r,r as i,t as a,x as o}from"./emotion-react-jsx-runtime.browser.esm-Cnk_Aq3J.js";import{A as s}from"./chunk-62JRHF6Z-BqbRoCcB.js";import{t as c}from"./emotion-styled.browser.esm-BrBV03_t.js";import{n as l}from"./emotion-react.browser.esm-BeH2dL86.js";import{S as u,i as d,x as f,y as p}from"./axios-Du-5RfZe.js";import{h as m,t as h}from"./useAPI-DetRwDxU.js";import{a as g,i as _,n as v,o as ee,r as te,t as y}from"./Credits-DFCnG2rk.js";import{r as b,t as x}from"./Icon-BrZuvKGl.js";import{t as S}from"./Trans-C9fvX1lM.js";import{t as C}from"./useTranslation-DcVxXeFP.js";import{t as w}from"./Typography-BmW4OtQd.js";import{t as T}from"./FlexWrapper-Dj4SbSah.js";import{t as E}from"./media-CH25req8.js";import{t as D}from"./handleLoginLogout-qhKyW-xn.js";import{t as O}from"./useIsDevice-B1weRtX7.js";import"./themes-Be8c1Sp7.js";import{t as k}from"./Widget-BabGakgR.js";import{t as A}from"./Lock-CVdx1flB.js";import{t as j}from"./Line-DMmp9zJ8.js";import{t as M}from"./LoadingCircle-B3puEDaC.js";import{i as ne,r as re,t as N}from"./ReviewBlock-DojcnqHT.js";import{t as P}from"./ReviewWritingBlock-CUjfEdky.js";var F=e(t()),I=c.div`
    width: 200px;
    flex-shrink: 1;
    position: relative;
    user-select: none;
`,L=c(T)`
    padding: 5px 8px;
    color: ${({theme:e})=>e.colors.Text.default};
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 6px;
    height: 50px;
    cursor: pointer;
`,R=c.div`
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
`,z=c(w)`
    padding: 4px 12px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};

    &:first-of-type {
        border-top: none;
    }
`,B=c(T)`
    padding: 11px 12px;
    cursor: pointer;
    background-color: ${({theme:e,selected:t})=>t?e.colors.Background.Section.transparent:e.colors.Background.Section.default};
    color: ${({theme:e,selected:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.default};
    }
`;function V({lecturesWrap:e,selectedLecture:t,setSelectedLecture:n,setSelectedLectureIndex:a}){let{t:o}=C(),[s,c]=(0,F.useState)(!1),[l,d]=(0,F.useState)(``),f=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!e)return;let n=``;for(let r of e){for(let e of r.lectures)if(t&&e.lectureId===t.lectureId){n=e.code;break}if(n)break}d(n)},[t,e]),(0,F.useEffect)(()=>{let e=e=>{f.current&&!f.current.contains(e.target)&&c(!1)};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[]);let p=(e,t,r,i,o)=>{n({name:r.name,lectureId:r.lectureId,courseId:r.courseId,professors:r.professors,year:i,semester:o}),a?.([e,t]),c(!1),d(r.code)};return i(I,{ref:f,children:[i(L,{onClick:()=>c(!s),direction:`row`,gap:0,justify:`center`,align:`center`,children:[t?i(T,{direction:`column`,gap:0,align:`center`,children:[r(w,{type:`NormalBold`,children:t?.name}),r(w,{type:`Normal`,children:l})]}):r(w,{type:`Big`,color:`Text.placeholder`,children:o(`writeReviews.mySummary.selectPlaceholder`)}),i(T,{direction:`column`,gap:0,style:{position:`absolute`,right:`8px`},children:[r(x,{size:14,children:r(ee,{})}),r(x,{size:14,children:r(g,{})})]})]}),s&&e&&r(R,{children:e.map((e,n)=>i(F.Fragment,{children:[i(z,{type:`NormalMedium`,color:`Text.placeholder`,children:[e.year,` `,u(e.semester)]}),e.lectures.map((a,o)=>{let s=t?.lectureId===a.lectureId&&t?.year===e.year&&t?.semester===e.semester;return i(B,{selected:s,onClick:()=>p(n,o,a,e.year,e.semester),direction:`row`,gap:8,children:[r(w,{type:`Small`,color:`Text.default`,children:a.code}),r(w,{type:`Small`,children:a.name})]},a.lectureId)})]},`${e.year}-${e.semester}`))})]})}function H({totalLectures:e,reviewedLectures:t,totalLikes:n}){let a=O(`mobile`),{t:o}=C();return i(T,{direction:`column`,align:`center`,gap:10,children:[!a&&r(w,{type:`Big`,color:`Text.default`,children:o(`writeReviews.mySummary.title`)}),i(T,{direction:`row`,align:`center`,gap:a?18:48,children:[i(T,{direction:`column`,align:`center`,gap:2,children:[i(T,{direction:`row`,align:`flex-end`,gap:0,children:[r(w,{type:`BiggerBold`,color:`Text.default`,children:t}),i(w,{type:`SmallBold`,color:`Text.default`,children:[`/`,e]})]}),r(w,{type:`Smaller`,color:`Text.default`,children:o(`writeReviews.mySummary.written`)})]}),i(T,{direction:`column`,align:`center`,gap:2,children:[r(T,{direction:`row`,align:`flex-end`,gap:0,children:r(w,{type:`BiggerBold`,color:`Text.default`,children:n})}),r(w,{type:`Smaller`,color:`Text.default`,children:o(`writeReviews.mySummary.likes`)})]})]})]})}var U=e=>l`
    background: ${e.colors.Background.Block.highlight};
    cursor: pointer;
`,W=e=>l`
    background: ${e.colors.Background.Block.darker};
`,G=c(T)`
    background: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 5px;
    opacity: ${({written:e,isSelected:t})=>t?1:e?.3:1};
    text-align: center;

    ${({theme:e,isHovered:t})=>t&&U(e)};
    ${({theme:e,isSelected:t})=>t&&W(e)};
`;function K({lecture:e,isSelected:t,written:n}){let{status:a}=d(),[o,s]=(0,F.useState)(!1);return i(G,{direction:`column`,align:`center`,gap:2,padding:`8px 10px`,isHovered:o,isSelected:t,written:n,onMouseOver:()=>{a!==`idle`&&s(!0)},onMouseLeave:()=>{a!==`idle`&&s(!1)},children:[i(T,{direction:`row`,gap:8,justify:n?`space-between`:`center`,align:`center`,style:{width:`100%`},children:[n&&r(`div`,{style:{width:`37px`}}),r(w,{type:`NormalBold`,color:`Text.default`,children:e.name}),n&&r(w,{type:`Smaller`,color:`Text.lighter`,children:`작성 완료`})]}),r(w,{type:`Normal`,color:`Text.default`,children:e.code})]})}function q(e,t,n,r){return e.courseId===t.courseId&&n===t.year&&r===t.semester}function J({lectureWrapIndex:e,lecturesWrap:t,selectedLecture:n,setSelectedLecture:a,setSelectedLectureIndex:o,last:s}){let{status:c}=d();return i(T,{direction:`column`,align:`stretch`,justify:`stretch`,gap:10,children:[i(w,{type:`NormalBold`,color:`Text.default`,children:[t.year,` `,u(t.semester)]}),r(T,{direction:`column`,align:`stretch`,justify:`stretch`,gap:8,children:t.lectures.map((i,s)=>r(T,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,onClick:()=>{if(c===`idle`)return;if(n&&q(i,n,t.year,t.semester)){a(null),o(null);return}let{name:r,courseId:l,professors:u}=i,{year:d,semester:f}=t;a({name:r,courseId:l,lectureId:i.lectureId,professors:u,year:d,semester:f}),o([e,s])},children:r(K,{lecture:i,isSelected:n?q(i,n,t.year,t.semester):!1,written:i.written},s)},s))}),!s&&r(j,{height:2,color:`Line.divider`})]})}var Y=(0,F.memo)(J),X=c(T)`
    min-height: 0;
    overflow: ${({scrollLock:e})=>e?`hidden`:`auto`};
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,ie=c(k)`
    width: 288px;
    flex: 0 0 auto;
    padding: 16px;

    ${E.tablet} {
        min-width: 240px;
        flex-shrink: 1;
    }

    ${E.mobile} {
        width: 100%;
        padding: 8px 16px;
        box-shadow: 0 4px 3px -3px rgba(237, 140, 156, 0.8);
        min-height: 65px;
    }
`,ae=c(T)`
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    width: 100%;
    height: 100%;
    user-select: ${e=>e.blur?`none`:`auto`};
`,oe=c(T)`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`,se=c.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({theme:e})=>e.colors.Highlight.default};
    padding: 8px;
`,ce=c.div`
    padding: 8px 20px;
    border-radius: 20px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    user-select: none;
`;function le({selectedLecture:e,setSelectedLecture:t}){let o=O(`mobile`),s=n(),{user:c,status:l}=d(),{query:u}=h(`GET`,`/users/${c?.id}/lectures`,{enabled:l===`success`}),[f,p]=(0,F.useState)(null);(0,F.useEffect)(()=>{if(!u.isLoading&&u.data&&u.data.lecturesWrap.length>0){let e=u.data.lecturesWrap[f?.[0]??0],n=e?.lectures[f?.[1]??0];e&&n&&t({name:n.name,lectureId:n.lectureId,courseId:n.courseId,professors:n.professors,year:e.year,semester:e.semester})}},[u.data]);let m={year:2026,semester:1,lectures:Array(30).fill({courseId:1,lectureId:1,name:`전산기조직개론`,code:`CS311`,professors:[],written:!1})};return r(ie,{borderRadius:12,direction:`column`,gap:0,children:l===`loading`?r(M,{}):i(a,{children:[l===`idle`&&i(oe,{direction:o?`row`:`column`,gap:12,align:`center`,justify:o?`space-evenly`:`center`,children:[r(se,{children:r(x,{size:30,color:s.colors.Highlight.default,children:r(A,{})})}),r(ce,{onClick:D,children:r(w,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}),i(ae,{blur:l===`idle`,direction:o?`row`:`column`,align:o?`center`:`stretch`,justify:o?`space-between`:`stretch`,gap:12,children:[r(H,{totalLectures:u.data?u.data.totalLecturesCount:0,reviewedLectures:u.data?u.data.reviewedLecturesCount:0,totalLikes:u.data?u.data.totalLikesCount:0}),!o&&r(j,{height:2,color:`Line.divider`}),o?r(V,{lecturesWrap:u.data?.lecturesWrap,selectedLecture:e,setSelectedLecture:t,setSelectedLectureIndex:p}):r(X,{direction:`column`,align:`stretch`,gap:24,scrollLock:l===`idle`,children:l===`idle`?r(Y,{lectureWrapIndex:0,lecturesWrap:m,selectedLecture:null,setSelectedLecture:()=>{},setSelectedLectureIndex:()=>{},last:!0}):u.data?.lecturesWrap.map((n,i)=>r(Y,{lectureWrapIndex:i,lecturesWrap:n,selectedLecture:e,setSelectedLecture:t,setSelectedLectureIndex:p,last:i===u.data.lecturesWrap.length-1},i))})]})]})})}var Z={WRITE:`write`,RECENT_FEED:`recentFeed`,HALL_OF_FAME_FEED:`hallOfFameFeed`,LIKED:`liked`},ue=[Z.WRITE,Z.RECENT_FEED,Z.HALL_OF_FAME_FEED,Z.LIKED],de=c(T)`
    width: 225px;
    height: 36px;
`,fe=20;function pe(){let{t:e}=C(),{query:t}=h(`GET`,`/semesters`,{select:e=>({...e,semesters:e.semesters.filter(e=>e.year>=2013)})}),{query:n,setParams:o,data:s}=v(`GET`,`/reviews`,{infinites:[`reviews`],limit:fe}),{ref:c,inView:l}=_({threshold:0});(0,F.useEffect)(()=>{l&&n.hasNextPage&&!n.isFetchingNextPage&&n.fetchNextPage()},[l]);let[d,p]=(0,F.useState)(0);return(0,F.useEffect)(()=>{o({mode:m.HALL_OF_FAME})},[]),(0,F.useEffect)(()=>{if(d===0){o({mode:m.HALL_OF_FAME});return}o({mode:m.HALL_OF_FAME,year:t.data?.semesters[d-1]?.year??2025,semester:t.data?.semesters[d-1]?.semester??f.SPRING})},[d]),i(T,{direction:`column`,align:`stretch`,gap:12,children:[i(T,{direction:`row`,align:`center`,gap:8,children:[r(w,{type:`NormalBold`,color:`Text.default`,children:e(`common.year`)}),r(de,{direction:`row`,gap:0,children:r(te,{options:[e(`writeReviews.hallOfFameFeed.total`)].concat(t.data?.semesters?t.data.semesters.map(e=>`${e.year} ${u(e.semester)}`):[]),selectedOption:d,setSelectedOption:p})})]}),n.isLoading?r(M,{}):i(a,{children:[i(T,{direction:`column`,align:`center`,gap:12,children:[r(w,{type:`NormalBold`,color:`Text.default`,children:d===0?e(`writeReviews.hallOfFameFeed.total`):r(S,{i18nKey:`writeReviews.hallOfFameFeed.title`,values:{year:t.data?.semesters[d-1]?.year??``,semester:t.data?.semesters[d-1]?.semester?u(t.data.semesters[d-1]?.semester):``},components:{space:r(a,{children:`\xA0`})}})}),i(T,{direction:`column`,align:`center`,gap:0,children:[r(w,{type:`Bigger`,color:`Text.default`,children:s?.reviews.length}),r(w,{type:`Smaller`,color:`Text.default`,children:e(`writeReviews.hallOfFameFeed.total`)})]})]}),i(T,{direction:`column`,align:`stretch`,gap:12,children:[s?.reviews.map(e=>r(N,{review:e},e.id)),n.hasNextPage&&r(M,{ref:c})]})]})]})}function me(){let{t:e}=C(),{user:t,status:n}=d(),{query:a,setParams:o}=h(`GET`,`/users/${t?.id}/reviews/liked`,{enabled:n===`success`});return(0,F.useEffect)(()=>{t!==null&&o({userId:t.id})},[n]),i(T,{direction:`column`,align:`stretch`,gap:12,children:[r(T,{direction:`column`,align:`center`,gap:12,children:r(w,{type:`NormalBold`,color:`Text.default`,children:e(`writeReviews.likedReviews.title`)})}),a.isLoading?r(M,{}):r(T,{direction:`column`,align:`stretch`,gap:12,children:a.data?.reviews.map(e=>r(N,{review:e},e.id))})]})}function he(){let{t:e}=C(),{query:t,setParams:n,data:a}=v(`GET`,`/reviews`,{infinites:[`reviews`],gcTime:0,initialOffset:0,limit:10}),{ref:o,inView:s}=_({threshold:0});return(0,F.useEffect)(()=>{s&&t.hasNextPage&&!t.isFetchingNextPage&&t.fetchNextPage()},[s]),(0,F.useEffect)(()=>{n({mode:m.RECENT})},[]),i(T,{direction:`column`,align:`stretch`,gap:12,children:[r(T,{direction:`column`,align:`center`,gap:12,children:r(w,{type:`NormalBold`,color:`Text.default`,children:e(`writeReviews.tabs.recentFeed`)})}),t.isLoading?r(M,{}):i(T,{direction:`column`,align:`stretch`,gap:12,children:[a?.reviews.map(e=>r(N,{review:e},e.id)),t.hasNextPage&&r(M,{ref:o})]})]})}var Q=e(o(),1),ge=b((0,Q.jsx)(`path`,{d:`M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z`}),`Edit`),_e=b((0,Q.jsx)(`path`,{d:`m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z`}),`EditOutlined`),ve=b((0,Q.jsx)(`path`,{d:`M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z`}),`EmojiEvents`),ye=b((0,Q.jsx)(`path`,{d:`M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3m7-6c0 1.3-.84 2.4-2 2.82V7h2z`}),`EmojiEventsOutlined`),be=b((0,Q.jsx)(`path`,{d:`M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8`}),`Whatshot`),xe=b((0,Q.jsx)(`path`,{d:`M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6`}),`WhatshotOutlined`),Se={[Z.WRITE]:_e,[Z.RECENT_FEED]:xe,[Z.HALL_OF_FAME_FEED]:ye,[Z.LIKED]:re},Ce={[Z.WRITE]:ge,[Z.RECENT_FEED]:be,[Z.HALL_OF_FAME_FEED]:ve,[Z.LIKED]:ne},we=({theme:e})=>l`
    background: ${e.colors.Background.Section.default};
    color: ${e.colors.Highlight.default};

    &:hover {
        background: ${e.colors.Background.Section.default};
    }
`,Te=c(T)`
    background: ${({theme:e})=>e.colors.Background.Tab.dark};
    color: ${({theme:e})=>e.colors.Text.lighter};
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    height: 34px;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Tab.darker};
    }

    ${({selected:e,theme:t})=>e&&we({theme:t})}
`;function Ee({tab:e,setTab:t}){let n=O(`tablet`),{t:a}=C(),{status:o}=d();return r(T,{direction:`row`,gap:6,children:ue.map(s=>{let c=Se[s],l=Ce[s];return o!==`success`&&(s===Z.LIKED||s===Z.WRITE)?null:i(Te,{direction:`row`,align:`center`,gap:6,padding:`8px 12px`,selected:e==s,onClick:()=>t(s),children:[r(x,{size:12,children:r(e==s?l:c,{})}),n?e==s&&r(w,{type:`Normal`,children:a(`writeReviews.tabs.${s}`)}):r(w,{type:`Normal`,children:a(`writeReviews.tabs.${s}`)})]},s)})})}function De({selectedLecture:e}){let{query:t,setParams:n,data:a}=v(`GET`,`/reviews`,{infinites:[`reviews`],gcTime:0,initialOffset:0,limit:10,enabled:e!==null}),{ref:o,inView:s}=_({threshold:0});return(0,F.useEffect)(()=>{s&&t.hasNextPage&&!t.isFetchingNextPage&&t.fetchNextPage()},[s]),(0,F.useEffect)(()=>{e!==null&&n({mode:m.DEFAULT,courseId:e.courseId,professorId:e.professors[0]?.id,year:e.year,semester:e.semester})},[e]),e===null?r(T,{direction:`column`,align:`stretch`,justify:`center`,flex:`1 1 auto`,gap:12,children:r(y,{})}):t.isLoading?r(T,{direction:`column`,align:`stretch`,justify:`center`,flex:`1 1 auto`,gap:12,children:r(M,{})}):i(T,{direction:`column`,align:`stretch`,gap:12,children:[i(T,{direction:`column`,gap:12,align:`center`,children:[r(w,{type:`NormalBold`,color:`Text.default`,children:r(S,{i18nKey:`writeReviews.write.title`,values:{lectureName:e.name}})}),r(P,{name:e.name,lectureId:e.lectureId,professors:e.professors,year:e.year,semester:e.semester})]}),r(j,{height:1,color:`Line.default`}),i(T,{direction:`column`,gap:12,align:`stretch`,children:[r(T,{direction:`column`,gap:0,align:`center`,children:r(w,{type:`NormalBold`,color:`Text.default`,children:r(S,{i18nKey:`writeReviews.write.related`,values:{lectureName:e.name}})})}),a?.reviews.map(e=>r(N,{review:e},e.id)),t.hasNextPage&&r(M,{ref:o})]})]})}var $=c(k)`
    background: transparent;
    overflow: hidden;
    width: 1300px;
    flex: 0 1 auto;

    ${E.mobile} {
        width: 100%;
        flex-grow: 1;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`,Oe=c(T)`
    background: ${({theme:e})=>e.colors.Background.Section.default};
    flex: 1 1 auto;
    border-top-right-radius: 16px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,ke=c(T)`
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function Ae(e){throw Error(`Unexpected review tab: ${String(e)}`)}function je({selectedLecture:e,setSelectedLecture:t}){let{status:n}=d(),[a,o]=(0,F.useState)(Z.WRITE);return(0,F.useEffect)(()=>{n===`idle`&&o(Z.RECENT_FEED)},[n]),(0,F.useEffect)(()=>{a!==Z.WRITE&&t(null)},[a]),(0,F.useEffect)(()=>{e!==null&&o(Z.WRITE)},[e]),i($,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,children:[r(Ee,{tab:a,setTab:o}),r(Oe,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,padding:`16px`,children:r(ke,{direction:`column`,align:`stretch`,gap:12,justify:`stretch`,flex:`1 1 auto`,children:(()=>{switch(a){case Z.WRITE:return r(De,{selectedLecture:e});case Z.RECENT_FEED:return r(he,{});case Z.HALL_OF_FAME_FEED:return r(pe,{});case Z.LIKED:return r(me,{});default:return Ae(a)}})()})})]})}var Me=c(T)`
    width: 100%;
    overflow: auto;
    padding: 0 20px 15px 20px;

    ${E.mobile} {
        padding: 0 8px 12px 8px;
    }
`,Ne=s(function(){let e=O(`mobile`),[t,n]=(0,F.useState)(null);return(0,F.useEffect)(()=>{p(`Page View`,{page:`Write Reviews`})},[]),r(T,{direction:`column`,align:`center`,justify:`stretch`,gap:0,flex:`1 0 0`,children:i(Me,{direction:e?`column`:`row`,align:`stretch`,justify:`center`,gap:12,flex:`1 0 0`,children:[r(le,{selectedLecture:t,setSelectedLecture:n}),r(je,{selectedLecture:t,setSelectedLecture:n})]})})});export{Ne as default};
//# sourceMappingURL=write-reviews-b9m8GJiZ.js.map