(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`9b4853f840d44ad2cadb4dbfdc0f60defc401976`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`72b97841-4fdd-4276-86e1-ca90f5b9f736`,e._sentryDebugIdIdentifier=`sentry-dbid-72b97841-4fdd-4276-86e1-ca90f5b9f736`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CcfToBOR.js";import{A as r}from"./chunk-62JRHF6Z-CiwA-8tW.js";import{l as i,n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-DEc7CWcd.js";import{n as c,t as l}from"./FlexWrapper-CFEr9uHf.js";import{n as u}from"./emotion-react.browser.esm-CsfCA3v7.js";import{S as d,i as f,x as p,y as m}from"./axios-Bm2bvP8L.js";import{h,t as g}from"./useAPI-BqNix6w9.js";import{a as ee,i as _,n as v,o as te,r as y,t as b}from"./Credits-eyhkx7wP.js";import{r as x,t as S}from"./Icon-BVeOiIY_.js";import{t as C}from"./Trans-CJzKpcFW.js";import{t as w}from"./useTranslation-BjKd34Sz.js";import{t as T}from"./Typography-D_EFheRE.js";import{t as E}from"./media-CvOjL1nC.js";import{t as D}from"./handleLoginLogout-DiG0LNAV.js";import{t as O}from"./useIsDevice-D3BJKDYq.js";import"./themes-BjeeZPTG.js";import{t as k}from"./Widget-Chl7n0XT.js";import{t as A}from"./Lock-BKeHq1Y8.js";import{t as j}from"./Line-CBC9LQ7l.js";import{t as M}from"./LoadingCircle-CozjQZ_D.js";import{i as ne,r as re,t as N}from"./ReviewBlock-CcZnkr0e.js";import{t as P}from"./ReviewWritingBlock-CKYer_ZL.js";var F=t(e()),I=c.div`
    width: 200px;
    flex-shrink: 1;
    position: relative;
    user-select: none;
`,L=c(l)`
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
`,z=c(T)`
    padding: 4px 12px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};

    &:first-of-type {
        border-top: none;
    }
`,B=c(l)`
    padding: 11px 12px;
    cursor: pointer;
    background-color: ${({theme:e,selected:t})=>t?e.colors.Background.Section.transparent:e.colors.Background.Section.default};
    color: ${({theme:e,selected:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.default};
    }
`;function V({lecturesWrap:e,selectedLecture:t,setSelectedLecture:n,setSelectedLectureIndex:r}){let{t:i}=w(),[s,c]=(0,F.useState)(!1),[u,f]=(0,F.useState)(``),p=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!e)return;let n=``;for(let r of e){for(let e of r.lectures)if(t&&e.lectureId===t.lectureId){n=e.code;break}if(n)break}f(n)},[t,e]),(0,F.useEffect)(()=>{let e=e=>{p.current&&!p.current.contains(e.target)&&c(!1)};return document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[]);let m=(e,t,i,a,o)=>{n({name:i.name,lectureId:i.lectureId,courseId:i.courseId,professors:i.professors,year:a,semester:o}),r?.([e,t]),c(!1),f(i.code)};return o(I,{ref:p,children:[o(L,{onClick:()=>c(!s),direction:`row`,gap:0,justify:`center`,align:`center`,children:[t?o(l,{direction:`column`,gap:0,align:`center`,children:[a(T,{type:`NormalBold`,children:t?.name}),a(T,{type:`Normal`,children:u})]}):a(T,{type:`Big`,color:`Text.placeholder`,children:i(`writeReviews.mySummary.selectPlaceholder`)}),o(l,{direction:`column`,gap:0,style:{position:`absolute`,right:`8px`},children:[a(S,{size:14,children:a(te,{})}),a(S,{size:14,children:a(ee,{})})]})]}),s&&e&&a(R,{children:e.map((e,n)=>o(F.Fragment,{children:[o(z,{type:`NormalMedium`,color:`Text.placeholder`,children:[e.year,` `,d(e.semester)]}),e.lectures.map((r,i)=>{let s=t?.lectureId===r.lectureId&&t?.year===e.year&&t?.semester===e.semester;return o(B,{selected:s,onClick:()=>m(n,i,r,e.year,e.semester),direction:`row`,gap:8,children:[a(T,{type:`Small`,color:`Text.default`,children:r.code}),a(T,{type:`Small`,children:r.name})]},r.lectureId)})]},`${e.year}-${e.semester}`))})]})}function H({totalLectures:e,reviewedLectures:t,totalLikes:n}){let r=O(`mobile`),{t:i}=w();return o(l,{direction:`column`,align:`center`,gap:10,children:[!r&&a(T,{type:`Big`,color:`Text.default`,children:i(`writeReviews.mySummary.title`)}),o(l,{direction:`row`,align:`center`,gap:r?18:48,children:[o(l,{direction:`column`,align:`center`,gap:2,children:[o(l,{direction:`row`,align:`flex-end`,gap:0,children:[a(T,{type:`BiggerBold`,color:`Text.default`,children:t}),o(T,{type:`SmallBold`,color:`Text.default`,children:[`/`,e]})]}),a(T,{type:`Smaller`,color:`Text.default`,children:i(`writeReviews.mySummary.written`)})]}),o(l,{direction:`column`,align:`center`,gap:2,children:[a(l,{direction:`row`,align:`flex-end`,gap:0,children:a(T,{type:`BiggerBold`,color:`Text.default`,children:n})}),a(T,{type:`Smaller`,color:`Text.default`,children:i(`writeReviews.mySummary.likes`)})]})]})]})}var U=e=>u`
    background: ${e.colors.Background.Block.highlight};
    cursor: pointer;
`,W=e=>u`
    background: ${e.colors.Background.Block.darker};
`,G=c(l)`
    background: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 5px;
    opacity: ${({written:e,isSelected:t})=>t?1:e?.3:1};
    text-align: center;

    ${({theme:e,isHovered:t})=>t&&U(e)};
    ${({theme:e,isSelected:t})=>t&&W(e)};
`;function K({lecture:e,isSelected:t,written:n}){let{status:r}=f(),[i,s]=(0,F.useState)(!1);return o(G,{direction:`column`,align:`center`,gap:2,padding:`8px 10px`,isHovered:i,isSelected:t,written:n,onMouseOver:()=>{r!==`idle`&&s(!0)},onMouseLeave:()=>{r!==`idle`&&s(!1)},children:[o(l,{direction:`row`,gap:8,justify:n?`space-between`:`center`,align:`center`,style:{width:`100%`},children:[n&&a(`div`,{style:{width:`37px`}}),a(T,{type:`NormalBold`,color:`Text.default`,children:e.name}),n&&a(T,{type:`Smaller`,color:`Text.lighter`,children:`작성 완료`})]}),a(T,{type:`Normal`,color:`Text.default`,children:e.code})]})}function q(e,t,n,r){return e.courseId===t.courseId&&n===t.year&&r===t.semester}function J({lectureWrapIndex:e,lecturesWrap:t,selectedLecture:n,setSelectedLecture:r,setSelectedLectureIndex:i,last:s}){let{status:c}=f();return o(l,{direction:`column`,align:`stretch`,justify:`stretch`,gap:10,children:[o(T,{type:`NormalBold`,color:`Text.default`,children:[t.year,` `,d(t.semester)]}),a(l,{direction:`column`,align:`stretch`,justify:`stretch`,gap:8,children:t.lectures.map((o,s)=>a(l,{direction:`column`,gap:0,align:`stretch`,justify:`stretch`,onClick:()=>{if(c===`idle`)return;if(n&&q(o,n,t.year,t.semester)){r(null),i(null);return}let{name:a,courseId:l,professors:u}=o,{year:d,semester:f}=t;r({name:a,courseId:l,lectureId:o.lectureId,professors:u,year:d,semester:f}),i([e,s])},children:a(K,{lecture:o,isSelected:n?q(o,n,t.year,t.semester):!1,written:o.written},s)},s))}),!s&&a(j,{height:2,color:`Line.divider`})]})}var Y=(0,F.memo)(J),X=c(l)`
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
`,ae=c(l)`
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    width: 100%;
    height: 100%;
    user-select: ${e=>e.blur?`none`:`auto`};
`,oe=c(l)`
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
`;function le({selectedLecture:e,setSelectedLecture:t}){let n=O(`mobile`),r=i(),{user:c,status:l}=f(),{query:u}=g(`GET`,`/users/${c?.id}/lectures`,{enabled:l===`success`}),[d,p]=(0,F.useState)(null);(0,F.useEffect)(()=>{if(!u.isLoading&&u.data&&u.data.lecturesWrap.length>0){let e=u.data.lecturesWrap[d?.[0]??0],n=e?.lectures[d?.[1]??0];e&&n&&t({name:n.name,lectureId:n.lectureId,courseId:n.courseId,professors:n.professors,year:e.year,semester:e.semester})}},[u.data]);let m={year:2026,semester:1,lectures:Array(30).fill({courseId:1,lectureId:1,name:`전산기조직개론`,code:`CS311`,professors:[],written:!1})};return a(ie,{borderRadius:12,direction:`column`,gap:0,children:l===`loading`?a(M,{}):o(s,{children:[l===`idle`&&o(oe,{direction:n?`row`:`column`,gap:12,align:`center`,justify:n?`space-evenly`:`center`,children:[a(se,{children:a(S,{size:30,color:r.colors.Highlight.default,children:a(A,{})})}),a(ce,{onClick:D,children:a(T,{type:`BigBold`,style:{color:`#FFFFFF`},children:`로그인하러가기`})})]}),o(ae,{blur:l===`idle`,direction:n?`row`:`column`,align:n?`center`:`stretch`,justify:n?`space-between`:`stretch`,gap:12,children:[a(H,{totalLectures:u.data?u.data.totalLecturesCount:0,reviewedLectures:u.data?u.data.reviewedLecturesCount:0,totalLikes:u.data?u.data.totalLikesCount:0}),!n&&a(j,{height:2,color:`Line.divider`}),n?a(V,{lecturesWrap:u.data?.lecturesWrap,selectedLecture:e,setSelectedLecture:t,setSelectedLectureIndex:p}):a(X,{direction:`column`,align:`stretch`,gap:24,scrollLock:l===`idle`,children:l===`idle`?a(Y,{lectureWrapIndex:0,lecturesWrap:m,selectedLecture:null,setSelectedLecture:()=>{},setSelectedLectureIndex:()=>{},last:!0}):u.data?.lecturesWrap.map((n,r)=>a(Y,{lectureWrapIndex:r,lecturesWrap:n,selectedLecture:e,setSelectedLecture:t,setSelectedLectureIndex:p,last:r===u.data.lecturesWrap.length-1},r))})]})]})})}var Z={WRITE:`write`,RECENT_FEED:`recentFeed`,HALL_OF_FAME_FEED:`hallOfFameFeed`,LIKED:`liked`},ue=[Z.WRITE,Z.RECENT_FEED,Z.HALL_OF_FAME_FEED,Z.LIKED],de=c(l)`
    width: 225px;
    height: 36px;
`,fe=20;function pe(){let{t:e}=w(),{query:t}=g(`GET`,`/semesters`,{select:e=>({...e,semesters:e.semesters.filter(e=>e.year>=2013)})}),{query:n,setParams:r,data:i}=v(`GET`,`/reviews`,{infinites:[`reviews`],limit:fe}),{ref:c,inView:u}=_({threshold:0});(0,F.useEffect)(()=>{u&&n.hasNextPage&&!n.isFetchingNextPage&&n.fetchNextPage()},[u]);let[f,m]=(0,F.useState)(0);return(0,F.useEffect)(()=>{r({mode:h.HALL_OF_FAME})},[]),(0,F.useEffect)(()=>{if(f===0){r({mode:h.HALL_OF_FAME});return}r({mode:h.HALL_OF_FAME,year:t.data?.semesters[f-1]?.year??2025,semester:t.data?.semesters[f-1]?.semester??p.SPRING})},[f]),o(l,{direction:`column`,align:`stretch`,gap:12,children:[o(l,{direction:`row`,align:`center`,gap:8,children:[a(T,{type:`NormalBold`,color:`Text.default`,children:e(`common.year`)}),a(de,{direction:`row`,gap:0,children:a(y,{options:[e(`writeReviews.hallOfFameFeed.total`)].concat(t.data?.semesters?t.data.semesters.map(e=>`${e.year} ${d(e.semester)}`):[]),selectedOption:f,setSelectedOption:m})})]}),n.isLoading?a(M,{}):o(s,{children:[o(l,{direction:`column`,align:`center`,gap:12,children:[a(T,{type:`NormalBold`,color:`Text.default`,children:f===0?e(`writeReviews.hallOfFameFeed.total`):a(C,{i18nKey:`writeReviews.hallOfFameFeed.title`,values:{year:t.data?.semesters[f-1]?.year??``,semester:t.data?.semesters[f-1]?.semester?d(t.data.semesters[f-1]?.semester):``},components:{space:a(s,{children:`\xA0`})}})}),o(l,{direction:`column`,align:`center`,gap:0,children:[a(T,{type:`Bigger`,color:`Text.default`,children:i?.reviews.length}),a(T,{type:`Smaller`,color:`Text.default`,children:e(`writeReviews.hallOfFameFeed.total`)})]})]}),o(l,{direction:`column`,align:`stretch`,gap:12,children:[i?.reviews.map(e=>a(N,{review:e},e.id)),n.hasNextPage&&a(M,{ref:c})]})]})]})}function me(){let{t:e}=w(),{user:t,status:n}=f(),{query:r,setParams:i}=g(`GET`,`/users/${t?.id}/reviews/liked`,{enabled:n===`success`});return(0,F.useEffect)(()=>{t!==null&&i({userId:t.id})},[n]),o(l,{direction:`column`,align:`stretch`,gap:12,children:[a(l,{direction:`column`,align:`center`,gap:12,children:a(T,{type:`NormalBold`,color:`Text.default`,children:e(`writeReviews.likedReviews.title`)})}),r.isLoading?a(M,{}):a(l,{direction:`column`,align:`stretch`,gap:12,children:r.data?.reviews.map(e=>a(N,{review:e},e.id))})]})}function he(){let{t:e}=w(),{query:t,setParams:n,data:r}=v(`GET`,`/reviews`,{infinites:[`reviews`],gcTime:0,initialOffset:0,limit:10}),{ref:i,inView:s}=_({threshold:0});return(0,F.useEffect)(()=>{s&&t.hasNextPage&&!t.isFetchingNextPage&&t.fetchNextPage()},[s]),(0,F.useEffect)(()=>{n({mode:h.RECENT})},[]),o(l,{direction:`column`,align:`stretch`,gap:12,children:[a(l,{direction:`column`,align:`center`,gap:12,children:a(T,{type:`NormalBold`,color:`Text.default`,children:e(`writeReviews.tabs.recentFeed`)})}),t.isLoading?a(M,{}):o(l,{direction:`column`,align:`stretch`,gap:12,children:[r?.reviews.map(e=>a(N,{review:e},e.id)),t.hasNextPage&&a(M,{ref:i})]})]})}var Q=t(n(),1),ge=x((0,Q.jsx)(`path`,{d:`M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z`}),`Edit`),_e=x((0,Q.jsx)(`path`,{d:`m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z`}),`EditOutlined`),ve=x((0,Q.jsx)(`path`,{d:`M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z`}),`EmojiEvents`),ye=x((0,Q.jsx)(`path`,{d:`M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3m7-6c0 1.3-.84 2.4-2 2.82V7h2z`}),`EmojiEventsOutlined`),be=x((0,Q.jsx)(`path`,{d:`M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8`}),`Whatshot`),xe=x((0,Q.jsx)(`path`,{d:`M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6`}),`WhatshotOutlined`),Se={[Z.WRITE]:_e,[Z.RECENT_FEED]:xe,[Z.HALL_OF_FAME_FEED]:ye,[Z.LIKED]:re},Ce={[Z.WRITE]:ge,[Z.RECENT_FEED]:be,[Z.HALL_OF_FAME_FEED]:ve,[Z.LIKED]:ne},we=({theme:e})=>u`
    background: ${e.colors.Background.Section.default};
    color: ${e.colors.Highlight.default};

    &:hover {
        background: ${e.colors.Background.Section.default};
    }
`,Te=c(l)`
    background: ${({theme:e})=>e.colors.Background.Tab.dark};
    color: ${({theme:e})=>e.colors.Text.lighter};
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    height: 34px;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Tab.darker};
    }

    ${({selected:e,theme:t})=>e&&we({theme:t})}
`;function Ee({tab:e,setTab:t}){let n=O(`tablet`),{t:r}=w(),{status:i}=f();return a(l,{direction:`row`,gap:6,children:ue.map(s=>{let c=Se[s],l=Ce[s];return i!==`success`&&(s===Z.LIKED||s===Z.WRITE)?null:o(Te,{direction:`row`,align:`center`,gap:6,padding:`8px 12px`,selected:e==s,onClick:()=>t(s),children:[a(S,{size:12,children:a(e==s?l:c,{})}),n?e==s&&a(T,{type:`Normal`,children:r(`writeReviews.tabs.${s}`)}):a(T,{type:`Normal`,children:r(`writeReviews.tabs.${s}`)})]},s)})})}function De({selectedLecture:e}){let{query:t,setParams:n,data:r}=v(`GET`,`/reviews`,{infinites:[`reviews`],gcTime:0,initialOffset:0,limit:10,enabled:e!==null}),{ref:i,inView:s}=_({threshold:0});return(0,F.useEffect)(()=>{s&&t.hasNextPage&&!t.isFetchingNextPage&&t.fetchNextPage()},[s]),(0,F.useEffect)(()=>{e!==null&&n({mode:h.DEFAULT,courseId:e.courseId,professorId:e.professors[0]?.id,year:e.year,semester:e.semester})},[e]),e===null?a(l,{direction:`column`,align:`stretch`,justify:`center`,flex:`1 1 auto`,gap:12,children:a(b,{})}):t.isLoading?a(l,{direction:`column`,align:`stretch`,justify:`center`,flex:`1 1 auto`,gap:12,children:a(M,{})}):o(l,{direction:`column`,align:`stretch`,gap:12,children:[o(l,{direction:`column`,gap:12,align:`center`,children:[a(T,{type:`NormalBold`,color:`Text.default`,children:a(C,{i18nKey:`writeReviews.write.title`,values:{lectureName:e.name}})}),a(P,{name:e.name,lectureId:e.lectureId,professors:e.professors,year:e.year,semester:e.semester})]}),a(j,{height:1,color:`Line.default`}),o(l,{direction:`column`,gap:12,align:`stretch`,children:[a(l,{direction:`column`,gap:0,align:`center`,children:a(T,{type:`NormalBold`,color:`Text.default`,children:a(C,{i18nKey:`writeReviews.write.related`,values:{lectureName:e.name}})})}),r?.reviews.map(e=>a(N,{review:e},e.id)),t.hasNextPage&&a(M,{ref:i})]})]})}var $=c(k)`
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
`,Oe=c(l)`
    background: ${({theme:e})=>e.colors.Background.Section.default};
    flex: 1 1 auto;
    border-top-right-radius: 16px;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,ke=c(l)`
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function Ae(e){throw Error(`Unexpected review tab: ${String(e)}`)}function je({selectedLecture:e,setSelectedLecture:t}){let{status:n}=f(),[r,i]=(0,F.useState)(Z.WRITE);return(0,F.useEffect)(()=>{n===`idle`&&i(Z.RECENT_FEED)},[n]),(0,F.useEffect)(()=>{r!==Z.WRITE&&t(null)},[r]),(0,F.useEffect)(()=>{e!==null&&i(Z.WRITE)},[e]),o($,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,children:[a(Ee,{tab:r,setTab:i}),a(Oe,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,padding:`16px`,children:a(ke,{direction:`column`,align:`stretch`,gap:12,justify:`stretch`,flex:`1 1 auto`,children:(()=>{switch(r){case Z.WRITE:return a(De,{selectedLecture:e});case Z.RECENT_FEED:return a(he,{});case Z.HALL_OF_FAME_FEED:return a(pe,{});case Z.LIKED:return a(me,{});default:return Ae(r)}})()})})]})}var Me=c(l)`
    width: 100%;
    overflow: auto;
    padding: 0 20px 15px 20px;

    ${E.mobile} {
        padding: 0 8px 12px 8px;
    }
`,Ne=r(function(){let e=O(`mobile`),[t,n]=(0,F.useState)(null);return(0,F.useEffect)(()=>{m(`Page View`,{page:`Write Reviews`})},[]),a(l,{direction:`column`,align:`center`,justify:`stretch`,gap:0,flex:`1 0 0`,children:o(Me,{direction:e?`column`:`row`,align:`stretch`,justify:`center`,gap:12,flex:`1 0 0`,children:[a(le,{selectedLecture:t,setSelectedLecture:n}),a(je,{selectedLecture:t,setSelectedLecture:n})]})})});export{Ne as default};
//# sourceMappingURL=write-reviews-mmWPPZFB.js.map