import{a as f,w as Y}from"./chunk-UIGDSWPH-NakEPbl8.js";import{n as b,F as l,j as h,a as r,b as Q}from"./FlexWrapper-C0dsngQo.js";import{A as ee,C as te,u as F,l as q,D as O,t as j,E as A,j as M,k as Z,F as re,G as ie,w as ne,H as se,e as B}from"./useIsDevice-B7JiGbyG.js";import{L as G}from"./Line-DrU6Mk-V.js";import{W as J}from"./Widget-D7VP5HFl.js";import{E as oe,a as ae,S as ce,C as le,R as de}from"./ReviewWritingBlock-DMxTG9dL.js";import{T as m}from"./Typography-DTsae4U-.js";import{u as C}from"./useUserStore-Cs3WP2WQ.js";import{L as E}from"./LoadingCircle-ncxl7Nw6.js";import{R as V,F as ue,a as fe}from"./ReviewBlock-CP6e3Nii.js";import{i as K,h as he,a as ge}from"./infiniteQueryBehavior-21pvmZV5.js";import{T as z}from"./Trans-CHs0Z-MX.js";import{j as N}from"./jsx-runtime-u17CrQMm.js";import"./TextInputArea-D0e-Q4YZ.js";var me=class extends ee{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:K()})}getOptimisticResult(e){return e.behavior=K(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:i}=e,n=super.createResult(e,t),{isFetching:c,isRefetching:s,isError:o,isRefetchError:a}=n,u=i.fetchMeta?.fetchMore?.direction,g=o&&u==="forward",x=c&&u==="forward",d=o&&u==="backward",v=c&&u==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ge(t,i.data),hasPreviousPage:he(t,i.data),isFetchNextPageError:g,isFetchingNextPage:x,isFetchPreviousPageError:d,isFetchingPreviousPage:v,isRefetchError:a&&!g&&!d,isRefetching:s&&!x&&!v}}};function pe(e,t){return te(e,me)}const xe=b.div`
    width: 200px;
    flex-shrink: 1;
    position: relative;
    user-select: none;
`,ve=b(l)`
    padding: 5px 8px;
    color: ${({theme:e})=>e.colors.Text.default};
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 6px;
    height: 50px;
    cursor: pointer;
`,we=b.div`
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
`,ye=b(m)`
    padding: 4px 12px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};

    &:first-of-type {
        border-top: none;
    }
`,be=b(l)`
    padding: 11px 12px;
    cursor: pointer;
    background-color: ${({theme:e,selected:t})=>t?e.colors.Background.Section.transparent:e.colors.Background.Section.default};
    color: ${({theme:e,selected:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.default};
    }
`;function Se({lecturesWrap:e,selectedLecture:t,setSelectedLecture:i,setSelectedLectureIndex:n}){const{t:c}=F(),[s,o]=f.useState(!1),[a,u]=f.useState(""),g=f.useRef(null);f.useEffect(()=>{if(!e)return;let d="";for(const v of e){for(const p of v.lectures)if(t&&p.lectureId===t.lectureId){d=p.code;break}if(d)break}u(d)},[t,e]),f.useEffect(()=>{const d=v=>{g.current&&!g.current.contains(v.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]);const x=(d,v,p,k,R)=>{i({name:p.name,lectureId:p.lectureId,courseId:p.courseId,professors:p.professors,year:k,semester:R}),n?.([d,v]),o(!1),u(p.code)};return h(xe,{ref:g,children:[h(ve,{onClick:()=>o(!s),direction:"row",gap:0,justify:"center",align:"center",children:[t?h(l,{direction:"column",gap:0,align:"center",children:[r(m,{type:"NormalBold",children:t?.name}),r(m,{type:"Normal",children:a})]}):r(m,{type:"Big",color:"Text.placeholder",children:c("writeReviews.mySummary.selectPlaceholder")}),h(l,{direction:"column",gap:0,style:{position:"absolute",right:"8px"},children:[r(q,{size:14,children:r(oe,{})}),r(q,{size:14,children:r(ae,{})})]})]}),s&&e&&r(we,{children:e.map((d,v)=>h(f.Fragment,{children:[h(ye,{type:"NormalMedium",color:"Text.placeholder",children:[d.year," ",O(d.semester)]}),d.lectures.map((p,k)=>{const R=t?.lectureId===p.lectureId&&t?.year===d.year&&t?.semester===d.semester;return h(be,{selected:R,onClick:()=>x(v,k,p,d.year,d.semester),direction:"row",gap:8,children:[r(m,{type:"Small",color:"Text.default",children:p.code}),r(m,{type:"Small",children:p.name})]},p.lectureId)})]},`${d.year}-${d.semester}`))})]})}function ke({totalLectures:e,reviewedLectures:t,totalLikes:i}){const n=j("mobile"),{t:c}=F();return h(l,{direction:"column",align:"center",gap:10,children:[!n&&r(m,{type:"Big",color:"Text.default",children:c("writeReviews.mySummary.title")}),h(l,{direction:"row",align:"center",gap:n?18:48,children:[h(l,{direction:"column",align:"center",gap:2,children:[h(l,{direction:"row",align:"flex-end",gap:0,children:[r(m,{type:"BiggerBold",color:"Text.default",children:t}),h(m,{type:"SmallBold",color:"Text.default",children:["/",e]})]}),r(m,{type:"Smaller",color:"Text.default",children:c("writeReviews.mySummary.written")})]}),h(l,{direction:"column",align:"center",gap:2,children:[r(l,{direction:"row",align:"flex-end",gap:0,children:r(m,{type:"BiggerBold",color:"Text.default",children:i})}),r(m,{type:"Smaller",color:"Text.default",children:c("writeReviews.mySummary.likes")})]})]})]})}const Pe=e=>A`
    background: ${e.colors.Background.Block.highlight};
`,Re=e=>A`
    background: ${e.colors.Background.Block.darker};
`,Ie=b(l)`
    background: ${({theme:e})=>e.colors.Background.Block.default};
    cursor: pointer;
    border-radius: 5px;
    opacity: ${({written:e,isSelected:t})=>t?1:e?.3:1};
    text-align: center;

    ${({theme:e,isHovered:t})=>t&&Pe(e)};
    ${({theme:e,isSelected:t})=>t&&Re(e)};
`;function Ee({lecture:e,isSelected:t,written:i}){const[n,c]=f.useState(!1);return h(Ie,{direction:"column",align:"center",gap:2,padding:"8px 10px",isHovered:n,isSelected:t,written:i,onMouseOver:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:[h(l,{direction:"row",gap:8,justify:i?"space-between":"center",align:"center",style:{width:"100%"},children:[i&&r("div",{style:{width:"37px"}}),r(m,{type:"NormalBold",color:"Text.default",children:e.name}),i&&r(m,{type:"Smaller",color:"Text.lighter",children:"작성 완료"})]}),r(m,{type:"Normal",color:"Text.default",children:e.code})]})}function _(e,t,i,n){return e.courseId===t.courseId&&i===t.year&&n===t.semester}function Te({lectureWrapIndex:e,lecturesWrap:t,selectedLecture:i,setSelectedLecture:n,setSelectedLectureIndex:c,last:s}){return h(l,{direction:"column",align:"stretch",justify:"stretch",gap:10,children:[h(m,{type:"NormalBold",color:"Text.default",children:[t.year," ",O(t.semester)]}),r(l,{direction:"column",align:"stretch",justify:"stretch",gap:8,children:t.lectures.map((o,a)=>r(l,{direction:"column",gap:0,align:"stretch",justify:"stretch",onClick:()=>{if(i&&_(o,i,t.year,t.semester)){n(null),c(null);return}const{name:u,courseId:g,professors:x}=o,{year:d,semester:v}=t;n({name:u,courseId:g,lectureId:o.lectureId,professors:x,year:d,semester:v}),c([e,a])},children:r(Ee,{lecture:o,isSelected:i?_(o,i,t.year,t.semester):!1,written:o.written},a)},a))}),!s&&r(G,{height:2,color:"Line.divider"})]})}const Fe=f.memo(Te),Be=b(l)`
    min-height: 0;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Ne=b(J)`
    width: 288px;
    flex: 0 0 auto;
    padding: 16px;

    ${M.tablet} {
        min-width: 240px;
        flex-shrink: 1;
    }

    ${M.mobile} {
        width: 100%;
        padding: 8px 16px;
        box-shadow: 0 4px 3px -3px rgba(237, 140, 156, 0.8);
    }
`;function $e({selectedLecture:e,setSelectedLecture:t}){const i=j("mobile"),{user:n,status:c}=C(),{query:s}=Z("GET",`/users/${n?.id}/lectures`,{enabled:c==="success"}),[o,a]=f.useState(null);return f.useEffect(()=>{if(!s.isLoading&&s.data&&s.data.lecturesWrap.length>0){const u=s.data.lecturesWrap[o?.[0]??0],g=u?.lectures[o?.[1]??0];u&&g&&t({name:g.name,lectureId:g.lectureId,courseId:g.courseId,professors:g.professors,year:u.year,semester:u.semester})}},[s.data]),h(Ne,{direction:i?"row":"column",align:i?"center":"stretch",justify:i?"space-between":"stretch",gap:12,borderRadius:12,children:[r(ke,{totalLectures:s.data?s.data.totalLecturesCount:0,reviewedLectures:s.data?s.data.reviewedLecturesCount:0,totalLikes:s.data?s.data.totalLikesCount:0}),!i&&r(G,{height:2,color:"Line.divider"}),i?r(Se,{lecturesWrap:s.data?.lecturesWrap,selectedLecture:e,setSelectedLecture:t,setSelectedLectureIndex:a}):r(Be,{direction:"column",align:"stretch",gap:24,children:s.data?.lecturesWrap.map((u,g)=>r(Fe,{lectureWrapIndex:g,lecturesWrap:u,selectedLecture:e,setSelectedLecture:t,setSelectedLectureIndex:a,last:g===s.data.lecturesWrap.length-1},g))})]})}const Oe=["write","recentFeed","hallOfFameFeed","liked"];var D=new Map,$=new WeakMap,U=0,Me;function je(e){return e?($.has(e)||(U+=1,$.set(e,U.toString())),$.get(e)):"0"}function Ce(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?je(e.root):e[t]}`).toString()}function Ve(e){const t=Ce(e);let i=D.get(t);if(!i){const n=new Map;let c;const s=new IntersectionObserver(o=>{o.forEach(a=>{var u;const g=a.isIntersecting&&c.some(x=>a.intersectionRatio>=x);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=g),(u=n.get(a.target))==null||u.forEach(x=>{x(g,a)})})},e);c=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:s,elements:n},D.set(t,i)}return i}function Le(e,t,i={},n=Me){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const u=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:u,intersectionRect:u,rootBounds:u}),()=>{}}const{id:c,observer:s,elements:o}=Ve(i),a=o.get(e)||[];return o.has(e)||o.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(o.delete(e),s.unobserve(e)),o.size===0&&(s.disconnect(),D.delete(c))}}function L({threshold:e,delay:t,trackVisibility:i,rootMargin:n,root:c,triggerOnce:s,skip:o,initialInView:a,fallbackInView:u,onChange:g}={}){var x;const[d,v]=f.useState(null),p=f.useRef(g),k=f.useRef(a),[R,S]=f.useState({inView:!!a,entry:void 0});p.current=g,f.useEffect(()=>{if(k.current===void 0&&(k.current=a),o||!d)return;let P;return P=Le(d,(T,W)=>{const X=k.current;k.current=T,!(X===void 0&&!T)&&(S({inView:T,entry:W}),p.current&&p.current(T,W),W.isIntersecting&&s&&P&&(P(),P=void 0))},{root:c,rootMargin:n,threshold:e,trackVisibility:i,delay:t},u),()=>{P&&P()}},[Array.isArray(e)?e.toString():e,d,c,n,s,o,i,u,t]);const y=(x=R.entry)==null?void 0:x.target,I=f.useRef(void 0);!d&&y&&!s&&!o&&I.current!==y&&(I.current=y,S({inView:!!a,entry:void 0}),k.current=a);const w=[v,R.inView,R.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}function H(e,t,i){const{i18n:n}=F(),{infinites:c,headers:s={},enabled:o=!0,staleTime:a=1/0,gcTime:u=300*1e3,initialOffset:g=0,limit:x}=i,[d,v]=f.useState(void 0),[p,k]=f.useState(null),R=re(e,ie(t)),S=pe({queryKey:[t,p],queryFn:async({pageParam:y=0})=>{const I=g+y*x,{data:w}=await ne.request({method:e,url:"/api/v2"+t,params:{...p,offset:I,limit:x},headers:s});return w},initialPageParam:0,getNextPageParam:(y,I)=>{let w=!0;if(c.forEach(P=>{y[P].length<x&&(w=!1)}),w)return I.length},retry:1,staleTime:a,gcTime:u,enabled:o&&(p!==null||R.safeParse({})?.success===!0)});return f.useEffect(()=>{S.data?.pages&&v(y=>{if(y===void 0)return S.data.pages[0];{const I=S.data.pages[S.data.pages.length-1];return y={...y,...I},c.forEach(w=>{const P=S.data.pages.flatMap(T=>T[w]);y&&(y[w]=P)}),y}})},[S.data]),f.useEffect(()=>{S.isEnabled&&S.refetch()},[n.resolvedLanguage]),{query:S,setParams:k,data:d}}const He=b(l)`
    width: 225px;
    height: 36px;
`,We=20;function qe(){const{t:e}=F(),{query:t}=Z("GET","/semesters",{select:d=>({...d,semesters:d.semesters.filter(v=>v.year>=2013)})}),{query:i,setParams:n,data:c}=H("GET","/reviews",{gcTime:0,infinites:["reviews"],limit:We}),{ref:s,inView:o}=L({threshold:0});f.useEffect(()=>{o&&i.hasNextPage&&!i.isFetchingNextPage&&i.fetchNextPage()},[o,i]);const[a,u]=f.useState(0),[g,x]=f.useState(0);return f.useEffect(()=>{n({mode:"hall-of-fame"})},[]),f.useEffect(()=>{if(a===0){n({mode:"hall-of-fame"});return}n({mode:"hall-of-fame",year:t.data?.semesters[a-1]?.year??2025,semester:t.data?.semesters[a-1]?.semester??se.SPRING})},[a]),h(l,{direction:"column",align:"stretch",gap:12,children:[h(l,{direction:"row",align:"center",gap:8,children:[r(m,{type:"NormalBold",color:"Text.default",children:e("common.year")}),r(He,{direction:"row",gap:0,children:r(ce,{options:[e("writeReviews.hallOfFameFeed.total")].concat(t.data?.semesters?t.data.semesters.map(d=>`${d.year} ${O(d.semester)}`):[]),selectedOption:a,setSelectedOption:u})})]}),i.isLoading?r(E,{}):h(Q,{children:[h(l,{direction:"column",align:"center",gap:12,children:[r(m,{type:"NormalBold",color:"Text.default",children:a===0?e("writeReviews.hallOfFameFeed.total"):r(z,{i18nKey:"writeReviews.hallOfFameFeed.title",values:{year:t.data?.semesters[a-1]?.year??"",semester:t.data?.semesters[a-1]?.semester?O(t.data.semesters[a-1]?.semester):""},components:{space:r(Q,{children:" "})}})}),h(l,{direction:"column",align:"center",gap:0,children:[r(m,{type:"Bigger",color:"Text.default",children:c?.reviews.length}),r(m,{type:"Smaller",color:"Text.default",children:e("writeReviews.hallOfFameFeed.total")})]})]}),h(l,{direction:"column",align:"stretch",gap:12,children:[c?.reviews.map(d=>r(V,{review:d},d.id)),i.hasNextPage&&r(E,{ref:s})]})]})]})}function ze(){const{t:e}=F(),{user:t,status:i}=C(),{query:n,setParams:c,data:s}=H("GET",`/users/${t?.id}/reviews/liked`,{enabled:i==="success",infinites:["reviews"],limit:10}),{ref:o,inView:a}=L({threshold:0});return f.useEffect(()=>{a&&n.hasNextPage&&!n.isFetchingNextPage&&n.fetchNextPage()},[a,n]),f.useEffect(()=>{t!==null&&c({userId:t.id})},[]),h(l,{direction:"column",align:"stretch",gap:12,children:[r(l,{direction:"column",align:"center",gap:12,children:r(m,{type:"NormalBold",color:"Text.default",children:e("writeReviews.likedReviews.title")})}),n.isLoading?r(E,{}):h(l,{direction:"column",align:"stretch",gap:12,children:[s?.reviews.map(u=>r(V,{review:u},u.id)),n.hasNextPage&&r(E,{ref:o})]})]})}function De(){const{t:e}=F(),{query:t,setParams:i,data:n}=H("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10}),{ref:c,inView:s}=L({threshold:0});return f.useEffect(()=>{s&&t.hasNextPage&&!t.isFetchingNextPage&&t.fetchNextPage()},[s,t]),f.useEffect(()=>{i({mode:"recent"})},[]),h(l,{direction:"column",align:"stretch",gap:12,children:[r(l,{direction:"column",align:"center",gap:12,children:r(m,{type:"NormalBold",color:"Text.default",children:e("writeReviews.tabs.recentFeed")})}),t.isLoading?r(E,{}):h(l,{direction:"column",align:"stretch",gap:12,children:[n?.reviews.map(o=>r(V,{review:o},o.id)),t.hasNextPage&&r(E,{ref:c})]})]})}const Ae=B(N.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"})),Ge=B(N.jsx("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"})),Qe=B(N.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"})),Ke=B(N.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m7 6c-1.65 0-3-1.35-3-3V5h6v6c0 1.65-1.35 3-3 3m7-6c0 1.3-.84 2.4-2 2.82V7h2z"})),_e=B(N.jsx("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"})),Ue=B(N.jsx("path",{d:"M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43 1.01 1.01 2.41 1.63 3.97 1.63 2.66 0 4.75-1.83 5.28-4.43C17.34 8.97 18 11.44 18 14c0 3.31-2.69 6-6 6"})),Ze={write:Ge,recentFeed:Ue,hallOfFameFeed:Ke,liked:fe},Je={write:Ae,recentFeed:_e,hallOfFameFeed:Qe,liked:ue},Xe=({theme:e})=>A`
    background: ${e.colors.Background.Section.default};
    color: ${e.colors.Highlight.default};
`,Ye=b(l)`
    background: ${({theme:e})=>e.colors.Background.Tab.dark};
    color: ${({theme:e})=>e.colors.Text.lighter};
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    height: 34px;
    ${({selected:e,theme:t})=>e&&Xe({theme:t})}
`;function et({tab:e,setTab:t}){const i=j("tablet"),{t:n}=F(),{status:c}=C();return r(l,{direction:"row",gap:6,children:Oe.map((s,o)=>{const a=Ze[s],u=Je[s];return c!=="success"&&(s==="liked"||s==="write")?null:h(Ye,{direction:"row",align:"center",gap:6,padding:"8px 12px",selected:e==s,onClick:()=>t(s),children:[r(q,{size:12,children:e==s?r(u,{}):r(a,{})}),i?e==s&&r(m,{type:"Normal",children:n(`writeReviews.tabs.${s}`)}):r(m,{type:"Normal",children:n(`writeReviews.tabs.${s}`)})]},s)})})}function tt({selectedLecture:e}){const{query:t,setParams:i,data:n}=H("GET","/reviews",{infinites:["reviews"],gcTime:0,initialOffset:0,limit:10,enabled:e!==null}),{ref:c,inView:s}=L({threshold:0});return f.useEffect(()=>{s&&t.hasNextPage&&!t.isFetchingNextPage&&t.fetchNextPage()},[s,t]),f.useEffect(()=>{e!==null&&i({mode:"default",courseId:e.courseId,professorId:e.professors[0]?.id,year:e.year,semester:e.semester})},[e]),e===null?r(l,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:r(le,{})}):t.isLoading?r(l,{direction:"column",align:"stretch",justify:"center",flex:"1 1 auto",gap:12,children:r(E,{})}):h(l,{direction:"column",align:"stretch",gap:12,children:[h(l,{direction:"column",gap:12,align:"center",children:[r(m,{type:"NormalBold",color:"Text.default",children:r(z,{i18nKey:"writeReviews.write.title",values:{lectureName:e.name}})}),r(de,{name:e.name,lectureId:e.lectureId,professors:e.professors,year:e.year,semester:e.semester,myReview:n?.reviews.find(o=>n.myReviewId.includes(o.id))})]}),r(G,{height:1,color:"Line.default"}),h(l,{direction:"column",gap:12,align:"stretch",children:[r(l,{direction:"column",gap:0,align:"center",children:r(m,{type:"NormalBold",color:"Text.default",children:r(z,{i18nKey:"writeReviews.write.related",values:{lectureName:e.name}})})}),n?.reviews.filter(o=>!n.myReviewId.includes(o.id)).map(o=>r(V,{review:o},o.id)),t.hasNextPage&&r(E,{ref:c})]})]})}const rt=b(J)`
    background: transparent;
    overflow: auto;
    width: 1300px;
    flex: 0 1 auto;

    ${M.mobile} {
        width: 100%;
        flex-grow: 1;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`,it=b(l)`
    background: ${({theme:e})=>e.colors.Background.Section.default};
    flex: 1 1 auto;
    border-top-right-radius: 16px;
`;function nt({selectedLecture:e,setSelectedLecture:t}){const{status:i}=C(),[n,c]=f.useState("write");return f.useEffect(()=>{i==="idle"&&c("recentFeed")},[i]),f.useEffect(()=>{n!=="write"&&t(null)},[n]),f.useEffect(()=>{e!==null&&c("write")},[e]),h(rt,{direction:"column",align:"stretch",justify:"stretch",gap:0,children:[r(et,{tab:n,setTab:c}),r(it,{direction:"column",align:"stretch",justify:"stretch",gap:0,padding:"16px",children:r(l,{direction:"column",align:"stretch",gap:12,justify:"stretch",flex:"1 1 auto",children:(()=>{switch(n){case"write":return r(tt,{selectedLecture:e});case"recentFeed":return r(De,{});case"hallOfFameFeed":return r(qe,{});case"liked":return r(ze,{});default:return null}})()})})]})}const st=b(l)`
    width: 100%;
    overflow: auto;
    padding: 0 20px 15px 20px;

    ${M.mobile} {
        padding: 0 8px 12px 8px;
    }
`,yt=Y(function(){const t=j("mobile"),[i,n]=f.useState(null);return r(l,{direction:"column",align:"center",justify:"stretch",gap:0,flex:"1 0 0",children:h(st,{direction:t?"column":"row",align:"stretch",justify:"center",gap:12,flex:"1 0 0",children:[r($e,{selectedLecture:i,setSelectedLecture:n}),r(nt,{selectedLecture:i,setSelectedLecture:n})]})})});export{yt as default};
