import{r as d,w as z}from"./chunk-UIGDSWPH-C2ktfSeF.js";import{b as c,j as t,F as V,a as v}from"./emotion-react-jsx-runtime.browser.esm-B1jPEyiZ.js";import{n as x,F as n}from"./FlexWrapper-BDdwpRDn.js";import{u as k,l as P,D as I,t as B,E as C,j as T,k as L,F as D,e as b}from"./useIsDevice-BNPalQIe.js";import{L as M}from"./Line-BupTVIxh.js";import{W}from"./Widget-Cls_3vn9.js";import{E as G,a as q,u as F,b as $,S as K,C as A}from"./Credits-dzDrunNw.js";import{T as u}from"./Typography-DRNB4_Lw.js";import{u as E}from"./useUserStore-T71UDxBs.js";import{L as y}from"./LoadingCircle-ac7hOZpd.js";import{R,F as U,a as J}from"./ReviewBlock-CmZdapS-.js";import{T as O}from"./Trans-Ce1Gtz-k.js";import{R as Q}from"./ReviewWritingBlock-CgyprbVW.js";import"./env-DdwX6oXb.js";import"./infiniteQueryBehavior-B9ect25m.js";import"./TextInputArea-BgFf1HuO.js";const X=x.div`
    width: 200px;
    flex-shrink: 1;
    position: relative;
    user-select: none;
`,Y=x(n)`
    padding: 5px 8px;
    color: ${({theme:e})=>e.colors.Text.default};
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 6px;
    height: 50px;
    cursor: pointer;
`,Z=x.div`
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
`,_=x(u)`
    padding: 4px 12px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};

    &:first-of-type {
        border-top: none;
    }
`,ee=x(n)`
    padding: 11px 12px;
    cursor: pointer;
    background-color: ${({theme:e,selected:r})=>r?e.colors.Background.Section.transparent:e.colors.Background.Section.default};
    color: ${({theme:e,selected:r})=>r?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.default};
    }
`;function te({lecturesWrap:e,selectedLecture:r,setSelectedLecture:o,setSelectedLectureIndex:s}){const{t:l}=k(),[i,h]=d.useState(!1),[m,f]=d.useState(""),p=d.useRef(null);d.useEffect(()=>{if(!e)return;let a="";for(const w of e){for(const g of w.lectures)if(r&&g.lectureId===r.lectureId){a=g.code;break}if(a)break}f(a)},[r,e]),d.useEffect(()=>{const a=w=>{p.current&&!p.current.contains(w.target)&&h(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]);const S=(a,w,g,N,j)=>{o({name:g.name,lectureId:g.lectureId,courseId:g.courseId,professors:g.professors,year:N,semester:j}),s?.([a,w]),h(!1),f(g.code)};return c(X,{ref:p,children:[c(Y,{onClick:()=>h(!i),direction:"row",gap:0,justify:"center",align:"center",children:[r?c(n,{direction:"column",gap:0,align:"center",children:[t(u,{type:"NormalBold",children:r?.name}),t(u,{type:"Normal",children:m})]}):t(u,{type:"Big",color:"Text.placeholder",children:l("writeReviews.mySummary.selectPlaceholder")}),c(n,{direction:"column",gap:0,style:{position:"absolute",right:"8px"},children:[t(P,{size:14,children:t(G,{})}),t(P,{size:14,children:t(q,{})})]})]}),i&&e&&t(Z,{children:e.map((a,w)=>c(d.Fragment,{children:[c(_,{type:"NormalMedium",color:"Text.placeholder",children:[a.year," ",I(a.semester)]}),a.lectures.map((g,N)=>{const j=r?.lectureId===g.lectureId&&r?.year===a.year&&r?.semester===a.semester;return c(ee,{selected:j,onClick:()=>S(w,N,g,a.year,a.semester),direction:"row",gap:8,children:[t(u,{type:"Small",color:"Text.default",children:g.code}),t(u,{type:"Small",children:g.name})]},g.lectureId)})]},`${a.year}-${a.semester}`))})]})}function re({totalLectures:e,reviewedLectures:r,totalLikes:o}){const s=B("mobile"),{t:l}=k();return c(n,{direction:"column",align:"center",gap:10,children:[!s&&t(u,{type:"Big",color:"Text.default",children:l("writeReviews.mySummary.title")}),c(n,{direction:"row",align:"center",gap:s?18:48,children:[c(n,{direction:"column",align:"center",gap:2,children:[c(n,{direction:"row",align:"flex-end",gap:0,children:[t(u,{type:"BiggerBold",color:"Text.default",children:r}),c(u,{type:"SmallBold",color:"Text.default",children:["/",e]})]}),t(u,{type:"Smaller",color:"Text.default",children:l("writeReviews.mySummary.written")})]}),c(n,{direction:"column",align:"center",gap:2,children:[t(n,{direction:"row",align:"flex-end",gap:0,children:t(u,{type:"BiggerBold",color:"Text.default",children:o})}),t(u,{type:"Smaller",color:"Text.default",children:l("writeReviews.mySummary.likes")})]})]})]})}const oe=e=>C`
    background: ${e.colors.Background.Block.highlight};
`,ie=e=>C`
    background: ${e.colors.Background.Block.darker};
`,ne=x(n)`
    background: ${({theme:e})=>e.colors.Background.Block.default};
    cursor: pointer;
    border-radius: 5px;
    opacity: ${({written:e,isSelected:r})=>r?1:e?.3:1};
    text-align: center;

    ${({theme:e,isHovered:r})=>r&&oe(e)};
    ${({theme:e,isSelected:r})=>r&&ie(e)};
`;function se({lecture:e,isSelected:r,written:o}){const[s,l]=d.useState(!1);return c(ne,{direction:"column",align:"center",gap:2,padding:"8px 10px",isHovered:s,isSelected:r,written:o,onMouseOver:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:[c(n,{direction:"row",gap:8,justify:o?"space-between":"center",align:"center",style:{width:"100%"},children:[o&&t("div",{style:{width:"37px"}}),t(u,{type:"NormalBold",color:"Text.default",children:e.name}),o&&t(u,{type:"Smaller",color:"Text.lighter",children:"작성 완료"})]}),t(u,{type:"Normal",color:"Text.default",children:e.code})]})}function H(e,r,o,s){return e.courseId===r.courseId&&o===r.year&&s===r.semester}function ce({lectureWrapIndex:e,lecturesWrap:r,selectedLecture:o,setSelectedLecture:s,setSelectedLectureIndex:l,last:i}){return c(n,{direction:"column",align:"stretch",justify:"stretch",gap:10,children:[c(u,{type:"NormalBold",color:"Text.default",children:[r.year," ",I(r.semester)]}),t(n,{direction:"column",align:"stretch",justify:"stretch",gap:8,children:r.lectures.map((h,m)=>t(n,{direction:"column",gap:0,align:"stretch",justify:"stretch",onClick:()=>{if(o&&H(h,o,r.year,r.semester)){s(null),l(null);return}const{name:f,courseId:p,professors:S}=h,{year:a,semester:w}=r;s({name:f,courseId:p,lectureId:h.lectureId,professors:S,year:a,semester:w}),l([e,m])},children:t(se,{lecture:h,isSelected:o?H(h,o,r.year,r.semester):!1,written:h.written},m)},m))}),!i&&t(M,{height:2,color:"Line.divider"})]})}const ae=d.memo(ce),le=x(n)`
    min-height: 0;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,de=x(W)`
    width: 288px;
    flex: 0 0 auto;
    padding: 16px;

    ${T.tablet} {
        min-width: 240px;
        flex-shrink: 1;
    }

    ${T.mobile} {
        width: 100%;
        padding: 8px 16px;
        box-shadow: 0 4px 3px -3px rgba(237, 140, 156, 0.8);
    }
`;function ue({selectedLecture:e,setSelectedLecture:r}){const o=B("mobile"),{user:s,status:l}=E(),{query:i}=L("GET",`/users/${s?.id}/lectures`,{enabled:l==="success"}),[h,m]=d.useState(null);return d.useEffect(()=>{if(!i.isLoading&&i.data&&i.data.lecturesWrap.length>0){const f=i.data.lecturesWrap[h?.[0]??0],p=f?.lectures[h?.[1]??0];f&&p&&r({name:p.name,lectureId:p.lectureId,courseId:p.courseId,professors:p.professors,year:f.year,semester:f.semester})}},[i.data]),c(de,{direction:o?"row":"column",align:o?"center":"stretch",justify:o?"space-between":"stretch",gap:12,borderRadius:12,children:[t(re,{totalLectures:i.data?i.data.totalLecturesCount:0,reviewedLectures:i.data?i.data.reviewedLecturesCount:0,totalLikes:i.data?i.data.totalLikesCount:0}),!o&&t(M,{height:2,color:"Line.divider"}),o?t(te,{lecturesWrap:i.data?.lecturesWrap,selectedLecture:e,setSelectedLecture:r,setSelectedLectureIndex:m}):t(le,{direction:"column",align:"stretch",gap:24,children:i.data?.lecturesWrap.map((f,p)=>t(ae,{lectureWrapIndex:p,lecturesWrap:f,selectedLecture:e,setSelectedLecture:r,setSelectedLectureIndex:m,last:p===i.data.lecturesWrap.length-1},p))})]})}const he=["write","recentFeed","hallOfFameFeed","liked"],me=x(n)`
    width: 225px;
    height: 36px;
`,fe=20;function pe(){const{t:e}=k(),{query:r}=L("GET","/semesters",{select:a=>({...a,semesters:a.semesters.filter(w=>w.year>=2013)})}),{query:o,setParams:s,data:l}=F("GET","/reviews",{gcTime:0,infinites:["reviews"],limit:fe}),{ref:i,inView:h}=$({threshold:0});d.useEffect(()=>{h&&o.hasNextPage&&!o.isFetchingNextPage&&o.fetchNextPage()},[h,o]);const[m,f]=d.useState(0),[p,S]=d.useState(0);return d.useEffect(()=>{s({mode:"hall-of-fame"})},[]),d.useEffect(()=>{if(m===0){s({mode:"hall-of-fame"});return}s({mode:"hall-of-fame",year:r.data?.semesters[m-1]?.year??2025,semester:r.data?.semesters[m-1]?.semester??D.SPRING})},[m]),c(n,{direction:"column",align:"stretch",gap:12,children:[c(n,{direction:"row",align:"center",gap:8,children:[t(u,{type:"NormalBold",color:"Text.default",children:e("common.year")}),t(me,{direction:"row",gap:0,children:t(K,{options:[e("writeReviews.hallOfFameFeed.total")].concat(r.data?.semesters?r.data.semesters.map(a=>`${a.year} ${I(a.semester)}`):[]),selectedOption:m,setSelectedOption:f})})]}),o.isLoading?t(y,{}):c(V,{children:[c(n,{direction:"column",align:"center",gap:12,children:[t(u,{type:"NormalBold",color:"Text.default",children:m===0?e("writeReviews.hallOfFameFeed.total"):t(O,{i18nKey:"writeReviews.hallOfFameFeed.title",values:{year:r.data?.semesters[m-1]?.year??"",semester:r.data?.semesters[m-1]?.semester?I(r.data.semesters[m-1]?.semester):""},components:{space:t(V,{children:" "})}})}),c(n,{direction:"column",align:"center",gap:0,children:[t(u,{type:"Bigger",color:"Text.default",children:l?.reviews.length}),t(u,{type:"Smaller",color:"Text.default",children:e("writeReviews.hallOfFameFeed.total")})]})]}),c(n,{direction:"column",align:"stretch",gap:12,children:[l?.reviews.map(a=>t(R,{review:a},a.id)),o.hasNextPage&&t(y,{ref:i})]})]})]})}function ge(){const{t:e}=k(),{user:r,status:o}=E(),{query:s,setParams:l,data:i}=F("GET",`/users/${r?.id}/reviews/liked`,{enabled:o==="success",infinites:["reviews"],limit:10}),{ref:h,inView:m}=$({threshold:0});return d.useEffect(()=>{m&&s.hasNextPage&&!s.isFetchingNextPage&&s.fetchNextPage()},[m,s]),d.useEffect(()=>{r!==null&&l({userId:r.id})},[]),c(n,{direction:"column",align:"stretch",gap:12,children:[t(n,{direction:"column",align:"center",gap:12,children:t(u,{type:"NormalBold",color:"Text.default",children:e("writeReviews.likedReviews.title")})}),s.isLoading?t(y,{}):c(n,{direction:"column",align:"stretch",gap:12,children:[i?.reviews.map(f=>t(R,{review:f},f.id)),s.hasNextPage&&t(y,{ref:h})]})]})}function xe(){const{t:e}=k(),{query:r,setParams:o,data:s}=F("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10}),{ref:l,inView:i}=$({threshold:0});return d.useEffect(()=>{i&&r.hasNextPage&&!r.isFetchingNextPage&&r.fetchNextPage()},[i,r]),d.useEffect(()=>{o({mode:"recent"})},[]),c(n,{direction:"column",align:"stretch",gap:12,children:[t(n,{direction:"column",align:"center",gap:12,children:t(u,{type:"NormalBold",color:"Text.default",children:e("writeReviews.tabs.recentFeed")})}),r.isLoading?t(y,{}):c(n,{direction:"column",align:"stretch",gap:12,children:[s?.reviews.map(h=>t(R,{review:h},h.id)),r.hasNextPage&&t(y,{ref:l})]})]})}const we=b(v.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),ye=b(v.jsx("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"})),ve=b(v.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"})),ke=b(v.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3m7-6c0 1.3-.84 2.4-2 2.82V7h2z"})),be=b(v.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),Se=b(v.jsx("path",{d:"M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6"})),Ie={write:ye,recentFeed:Se,hallOfFameFeed:ke,liked:J},Te={write:we,recentFeed:be,hallOfFameFeed:ve,liked:U},Be=({theme:e})=>C`
    background: ${e.colors.Background.Section.default};
    color: ${e.colors.Highlight.default};

    &:hover {
        background: ${e.colors.Background.Section.default};
    }
`,Fe=x(n)`
    background: ${({theme:e})=>e.colors.Background.Tab.dark};
    color: ${({theme:e})=>e.colors.Text.lighter};
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    height: 34px;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Tab.darker};
    }

    ${({selected:e,theme:r})=>e&&Be({theme:r})}
`;function $e({tab:e,setTab:r}){const o=B("tablet"),{t:s}=k(),{status:l}=E();return t(n,{direction:"row",gap:6,children:he.map((i,h)=>{const m=Ie[i],f=Te[i];return l!=="success"&&(i==="liked"||i==="write")?null:c(Fe,{direction:"row",align:"center",gap:6,padding:"8px 12px",selected:e==i,onClick:()=>r(i),children:[t(P,{size:12,children:e==i?t(f,{}):t(m,{})}),o?e==i&&t(u,{type:"Normal",children:s(`writeReviews.tabs.${i}`)}):t(u,{type:"Normal",children:s(`writeReviews.tabs.${i}`)})]},i)})})}function Ee({selectedLecture:e}){const{query:r,setParams:o,data:s}=F("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10,enabled:e!==null}),{ref:l,inView:i}=$({threshold:0});return d.useEffect(()=>{i&&r.hasNextPage&&!r.isFetchingNextPage&&r.fetchNextPage()},[i,r]),d.useEffect(()=>{e!==null&&o({mode:"default",courseId:e.courseId,professorId:e.professors[0]?.id,year:e.year,semester:e.semester})},[e]),e===null?t(n,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:t(A,{})}):r.isLoading?t(n,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:t(y,{})}):c(n,{direction:"column",align:"stretch",gap:12,children:[c(n,{direction:"column",gap:12,align:"center",children:[t(u,{type:"NormalBold",color:"Text.default",children:t(O,{i18nKey:"writeReviews.write.title",values:{lectureName:e.name}})}),t(Q,{name:e.name,lectureId:e.lectureId,professors:e.professors,year:e.year,semester:e.semester})]}),t(M,{height:1,color:"Line.default"}),c(n,{direction:"column",gap:12,align:"stretch",children:[t(n,{direction:"column",gap:0,align:"center",children:t(u,{type:"NormalBold",color:"Text.default",children:t(O,{i18nKey:"writeReviews.write.related",values:{lectureName:e.name}})})}),s?.reviews.map(h=>t(R,{review:h},h.id)),r.hasNextPage&&t(y,{ref:l})]})]})}const Re=x(W)`
    background: transparent;
    overflow: auto;
    width: 1300px;
    flex: 0 1 auto;

    ${T.mobile} {
        width: 100%;
        flex-grow: 1;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`,Ne=x(n)`
    background: ${({theme:e})=>e.colors.Background.Section.default};
    flex: 1 1 auto;
    border-top-right-radius: 16px;
`;function je({selectedLecture:e,setSelectedLecture:r}){const{status:o}=E(),[s,l]=d.useState("write");return d.useEffect(()=>{o==="idle"&&l("recentFeed")},[o]),d.useEffect(()=>{s!=="write"&&r(null)},[s]),d.useEffect(()=>{e!==null&&l("write")},[e]),c(Re,{direction:"column",align:"stretch",justify:"stretch",gap:0,children:[t($e,{tab:s,setTab:l}),t(Ne,{direction:"column",align:"stretch",justify:"stretch",gap:0,padding:"16px",children:t(n,{direction:"column",align:"stretch",gap:12,justify:"stretch",flex:"1 1 auto",children:(()=>{switch(s){case"write":return t(Ee,{selectedLecture:e});case"recentFeed":return t(xe,{});case"hallOfFameFeed":return t(pe,{});case"liked":return t(ge,{});default:return null}})()})})]})}const Pe=x(n)`
    width: 100%;
    overflow: auto;
    padding: 0 20px 15px 20px;

    ${T.mobile} {
        padding: 0 8px 12px 8px;
    }
`,Xe=z(function(){const r=B("mobile"),[o,s]=d.useState(null);return t(n,{direction:"column",align:"center",justify:"stretch",gap:0,flex:"1 0 0",children:c(Pe,{direction:r?"column":"row",align:"stretch",justify:"center",gap:12,flex:"1 0 0",children:[t(ue,{selectedLecture:o,setSelectedLecture:s}),t(je,{selectedLecture:o,setSelectedLecture:s})]})})});export{Xe as default};
//# sourceMappingURL=write-reviews-8i0BDgfB.js.map
