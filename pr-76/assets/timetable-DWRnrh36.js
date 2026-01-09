import{p as nt,R as ne,r as l,L as pi,w as gi}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{a as b,j as c,F as et,u as je}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{n as E,F as L}from"./FlexWrapper-B6Hxm4Zw.js";import{C as Er,S as mi}from"./proxy-DI_gY_Ps.js";import{u as hn}from"./index-BhCjyV9_.js";import{M as vi}from"./Modal-DI6tI0xW.js";import{S as ft}from"./StyledDivider-Bnwy1K8M.js";import{e as rt,t as Ze,g as $e,u as le,I as re,k as tn,q as Ye,W as De,w as yi}from"./useIsDevice-BVryhRFK.js";import{T as P}from"./Typography-DeI78L6T.js";import{c as bi,r as wi,a as xi,b as Ei,d as fn}from"./renderTargetArea-BeZYZfO9.js";import{u as Ae}from"./useTranslation-DrmvPmDd.js";import{A as pn,S as Si,c as Ti,C as Wt}from"./checkEmpty-BPWlnPgU.js";import{R as Ci,F as gn,I as tt,p as Di}from"./ReviewBlock-C0c6nVjD.js";import{B as Un,m as W}from"./media-MLnbxw48.js";import{u as Sr,b as Tr,C as Ri,S as Ai}from"./Credits-BsjKlRFn.js";import{u as mn}from"./useUserStore-Cx-RfpsI.js";import{L as nn}from"./LoadingCircle-BApWMr5H.js";import{a as ht}from"./index-Dp_NaqTT.js";import"./env-CwbTq_TT.js";import"./infiniteQueryBehavior-DwNNoZW-.js";const Ii=rt(nt.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"})),vn=rt(nt.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),Cr=rt(nt.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"})),Ni=rt(nt.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),Mi=rt(nt.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),Li=rt(nt.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),ki=(e,t,n,r,i,o)=>{const a=[0];let s=0;for(let u=0;u<e;u++)t.includes(u+o)?(s+=n+i,a.push(s)):(s+=r+i,a.push(s));return a},Fn=(e,t,n,r,i,o,a)=>{const s=ki(t,n,r,i,o,a);for(let u=0;u<t+1;u++){const h=s[u];if(h!==void 0&&h>e)return u-1}return t},Oi=E.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,Bi=E.div`
    padding-top: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    gap: calc(var(--cell-height) * 2 - 11px);
    font-size: 8px;
    line-height: 11px;
`,zi=E.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
`,Pi=E.div`
    display: inline-block;
    position: relative;
    user-select: none;
    touch-action: none;
`,Ui=({cellWidth:e=120,fullHeight:t=800.5,lectureSummary:n,setTimeFilter:r,hover:i,setHover:o,selected:a,setSelected:s,removeFunction:u})=>{const{t:h}=Ae(),d=5,f=5,m=8,g=l.useRef(null),R=[h("common.days.monday"),h("common.days.tuesday"),h("common.days.wednesday"),h("common.days.thursday"),h("common.days.friday")];bi(n);const p=32,T=24,v=l.useMemo(()=>t/32,[t]),I=l.useMemo(()=>({"--cell-height":`${v}px`,"--cell-width":`${e}px`,"--col-padding":`${d}px`}),[v,e,d]),[y,M]=l.useState(!1),[S,A]=l.useState(null),[N,w]=l.useState(null),[D,B]=l.useState(null),[k,q]=l.useState(new Map(Array.from({length:f},(F,U)=>[U,Array(p).fill(null)]))),Y=l.useRef(null),V=l.useRef(null),ie=l.useRef(null);Y.current=S,V.current=N,ie.current=D;const G=l.useCallback(F=>{if(g.current&&i==null&&a==null){const U=g.current.getBoundingClientRect(),C=F.clientX-U.left,x=F.clientY-U.top,O=Math.floor(x/v),z=Fn(C,f,[],0,e,d,0);O>=0&&O<p&&z>=0&&z<f&&(M(!0),A(O),w(O),B(z),s(null))}},[i,a,v,p,f,e,d,s]),X=l.useCallback(F=>{if(y&&g.current){const U=g.current.getBoundingClientRect(),C=F.clientY-U.top,x=Math.floor(C/v);x>=0&&x<p&&D!=null&&D>=0&&D<f&&x!==N&&w(x)}},[y,v,p,f,D,N]),K=l.useCallback(()=>{q(new Map(Array.from({length:f},(x,O)=>[O,Array(p).fill(null)])));const F=Y.current,U=V.current,C=ie.current;if(F!=null&&U!=null&&C!=null){const x=Math.min(F,U),O=Math.max(F,U),z={day:C,begin:x*30+480,end:(O+1)*30+480};r(z)}A(null),w(null),M(!1)},[f,p,r]),H=l.useCallback(F=>{if(g.current&&i==null&&a==null){const U=F.touches[0];if(!U)return;const C=g.current.getBoundingClientRect(),x=U.clientX-C.left,O=U.clientY-C.top,z=Math.floor(O/v),_=Fn(x,f,[],0,e,d,0);z>=0&&z<p&&_>=0&&_<f&&(M(!0),A(z),w(z),B(_),s(null))}},[i,a,v,p,f,e,d,s]),oe=l.useCallback(F=>{if(y&&g.current){const U=F.touches[0];if(!U)return;const C=g.current.getBoundingClientRect(),x=U.clientY-C.top,O=Math.floor(x/v);O>=0&&O<p&&D!=null&&D>=0&&D<f&&O!==N&&w(O)}},[y,v,p,f,D,N]),ue=l.useCallback(()=>{K()},[K]);l.useEffect(()=>(y&&window.addEventListener("mouseup",K),()=>{window.removeEventListener("mouseup",K)}),[y,K]);const Z=(F,U,C)=>{const x=new Map(Array.from({length:f},(O,z)=>[z,Array(p).fill(null)]));for(let O=F;O<U+1;O++)x.get(C)[O]=!0;return x};l.useLayoutEffect(()=>{if(g.current&&y){const F=Math.min(S,N),U=Math.max(S,N),C=Z(F,U,D);q(C)}},[N,S,y,D,f,p]);const he=l.useMemo(()=>wi(p,f,e,v,d,[],10,0),[p,f,e,v,d]),we=l.useMemo(()=>xi(n,e,v,d,a,s,i,o,y,u),[n,e,v,d,a,s,i,o,y,u]),Se=l.useCallback(()=>{s(null)},[s]),Q=l.useCallback(F=>{F.stopPropagation(),K()},[K]);return b(Oi,{style:I,children:[c(Bi,{children:Array.from({length:T-m+1},(F,U)=>U+m).map(F=>c(P,{color:"Text.default",children:F%12||12},F))}),b(L,{direction:"column",gap:0,children:[c(L,{direction:"row",gap:5,children:R.map((F,U)=>F!=="none"&&c(zi,{style:F===""?{width:"10px"}:void 0,children:c(P,{color:"Text.default",children:F})},U))}),b(Pi,{ref:g,onClick:Se,onMouseDown:G,onMouseMove:X,onMouseUp:Q,onTouchStart:H,onTouchMove:oe,onTouchEnd:ue,children:[he,Ei(!0,k,"rgba(229, 76, 101, 0.5)",v,e,2,d,[],0,0),we]})]})]})},$n=ne.memo(Ui);function Dr(e){return e.map(t=>t.name).join(", ")}function Fi(e){return e.slice().sort((n,r)=>{const i=n.day,o=r.day;return i!==o?i-o:n.begin-r.begin}).map(n=>n.str).join(" / ")}function $i(e){const t={};return e.forEach(n=>{const r=n.buildingCode,i=n.roomName;r in t?t[r]&&!t[r].includes(i)&&(t[r]=t[r].concat(`, ${i}`)):t[r]=i}),Object.entries(t).map(([n,r])=>`(${n}) ${r}`).join(" / ")}const ji=E(L)`
    width: 100%;
`,Wi=E(L)`
    width: 300px;
    padding: 10px;
`,Hi=E(L)`
    flex: 1 0 0;
`,Ve=E(P)`
    white-space: nowrap;
`,qi=({selectedLecture:e})=>{const{t}=Ae();return b(et,{children:[b(ji,{direction:"column",gap:8,children:[b(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.search.type")}),c(P,{type:"Normal",color:"Text.default",children:e?.type})]}),b(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.search.department")}),c(P,{type:"Normal",color:"Text.default",children:e?.department.name})]}),b(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.professor")}),c(P,{type:"Normal",color:"Text.default",children:Dr(e?.professors||[])})]}),b(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.room")}),c(P,{type:"Normal",color:"Text.default",children:$i(e?.classes||[])})]}),b(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.limit")}),c(P,{type:"Normal",color:"Text.default",children:e?.limitPeople})]}),b(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.exam")}),c(P,{type:"Normal",color:"Text.default",children:Fi(e?.examTimes||[])})]})]}),c(Wi,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,t("common.numClasses")],[e?.expDuration,t("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,t("common.credit")]].map(([n,r],i)=>b(Hi,{direction:"column",gap:0,align:"center",children:[c(P,{type:"Bigger",color:"Text.default",children:n}),c(P,{type:"Smaller",color:"Text.default",children:r})]},i))})]})},Yi=E(L)`
    width: 300px;
    padding: 10px;
`,Vi=E(L)`
    flex: 1 0 0;
`,Gi=E.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,Xi=({selectedCourseId:e,selectedProfessorId:t})=>{const{t:n}=Ae(),[r,i]=l.useState(!1),{query:o,setParams:a,data:s}=Sr("GET","/reviews",{gcTime:0,infinites:["reviews"],limit:20}),{ref:u,inView:h}=Tr({threshold:0});return l.useEffect(()=>{i(!1);const d=setTimeout(()=>{a({mode:"default",courseId:e??void 0,professorId:t??void 0}),i(!0)},1e3);return()=>clearTimeout(d)},[e,t]),l.useEffect(()=>{h&&o.hasNextPage&&!o.isFetchingNextPage&&o.fetchNextPage()},[h,o]),!s||!r?c(nn,{}):b(et,{children:[c(L,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:c(Yi,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[Ze(s?.averageGrade,s?.reviews.length),n("common.grade")],[Ze(s?.averageLoad,s?.reviews.length),n("common.load")],[Ze(s?.averageSpeech,s?.reviews.length),n("common.speech")]].map(([d,f],m)=>b(Vi,{direction:"column",gap:0,align:"center",children:[c(P,{type:"Bigger",color:"Text.default",children:d}),c(P,{type:"Smaller",color:"Text.default",children:f})]},m))})}),c(Gi,{}),s?.reviews.map(d=>c(Ci,{review:d,linkToDictionary:!0},d.id)),o.hasNextPage&&c(nn,{ref:u})]})},Ki=E(L)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,jn=E(L)`
    width: 100%;
`,Qi=E(L)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`,Ji=E(L)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
`,Zi=E(pi)`
    text-decoration: none;
`,_i=E.a`
    text-decoration: none;
`,Wn=({selectedLecture:e,onMobileModalClose:t,year:n,semester:r,currentTimetableId:i,timetableLectures:o})=>{const a=hn(),s=je(),{t:u}=Ae(),{user:h,status:d}=mn(),f=$e("tablet"),{requestFunction:m}=le("PATCH",`/timetables/${i}`,{onSuccess:()=>{a.invalidateQueries({queryKey:[`/timetables/${i}`]})}}),[g,R]=l.useState([]),{query:p,setParams:T}=le("GET",`/users/${h?.id}/wishlist`,{enabled:d==="success"&&n!=-1});l.useEffect(()=>{n!==-1&&T({year:n,semester:r})},[n,r,i]),l.useEffect(()=>{p.data&&R(p.data.courses.flatMap(A=>A.lectures).map(A=>A.id))},[p.data]);const{requestFunction:v}=le("PATCH",`/users/${h?.id}/wishlist`,{onSuccess:()=>{a.invalidateQueries({queryKey:[`/users/${h?.id}/wishlist`]})}}),I=l.useRef(null),y=A=>{const N={syy:String(n),smtDivCd:String(r),subjtCd:A.code,syllabusOpenYn:"1"};return`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${btoa(JSON.stringify(N))}`},M=async A=>{if(o){if(i){if(o.some(N=>fn(N.classes,A.classes))){alert(u("timetable.addLectureConflict"));return}}else{console.warn("No timetable selected");return}m({action:"add",lectureId:A.id})}},S=async(A,N)=>{d!=="idle"&&v({lectureId:N,mode:A?"delete":"add"})};return c(Ki,{direction:"column",gap:12,align:"center",justify:e?"start":"center",children:e?b(et,{children:[b(Qi,{direction:"column",gap:2,align:"center",justify:"center",children:[b(L,{direction:"row",align:"center",gap:8,justify:f?"space-between":"center",style:{width:"100%"},children:[f&&c("div",{style:{width:20}}),c(P,{type:"Bigger",color:"Text.default",children:e.name}),f&&c(re,{size:20,onClick:t,color:s.colors.Text.default,children:c(Er,{})})]}),c(P,{type:"Big",color:"Text.default",children:e.code})]}),b(L,{direction:"row",gap:8,justify:"flex-end",style:{width:"100%"},children:[c(Zi,{to:`/dictionary?courseId=${e.courseId}`,children:c(P,{type:"Normal",color:"Highlight.default",style:{cursor:"pointer"},children:u("header.dictionary")})}),c(_i,{href:y(e),target:"_blank",children:c(P,{type:"Normal",color:"Highlight.default",style:{cursor:"pointer"},children:u("header.syllabus")})})]}),c(jn,{direction:"column",gap:10,align:"center",children:c(qi,{selectedLecture:e})}),c(jn,{ref:I,direction:"column",gap:10,children:c(Xi,{selectedCourseId:e.courseId,selectedProfessorId:e.professors[0]?.id??-1})}),f&&b(Ji,{direction:"row",gap:12,justify:"flex-end",children:[!g.includes(e.id)&&b(Un,{onClick:()=>{S(g.includes(e.id),e.id),t&&t()},children:[c(re,{size:15,children:c(gn,{})}),c(P,{type:"NormalBold",children:"찜목록에 추가"})]}),!o?.some(A=>A.id===e.id)&&i&&b(Un,{type:"selected",onClick:()=>{M(e),t&&t()},children:[c(re,{size:15,children:c(pn,{})}),c(P,{type:"NormalBold",children:"시간표에 추가"})]})]})]}):c(Ri,{})})},eo=E.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    transition: all 0.2s ease;
    transform: ${({isSelected:e})=>e?"translateY(-2px)":"none"};
    box-shadow: ${({isSelected:e})=>e?"0 4px 8px rgba(0, 0, 0, 0.15)":"none"};
    overflow: hidden;
    flex-shrink: 0;
`,to=E.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    justify-content: space-between;
`,no=E.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 18px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({isHighlighted:e,theme:t})=>e?t.colors.Background.Block.dark:t.colors.Background.Block.default};
    cursor: pointer;
`,Hn=E.div`
    width: 95%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.dark};
    align-self: center;
`,ro=({course:e,selectedLecture:t,hoveredLecture:n,isInWish:r,isWishlist:i,currentTimetableId:o,timetableLectures:a,isAddTimetablePending:s,setHoveredLecture:u,setSelectedLecture:h,handleLikeClick:d,handleAddToTimetable:f,t:m})=>{const g=je(),R=$e("tablet"),p=e.lectures[0]?.courseId??-1,T=t!=null&&t.courseId!==p?.3:1;return b(eo,{isSelected:t?.courseId===p,style:{opacity:T},children:[b(to,{children:[b(L,{direction:"row",gap:6,style:{opacity:e.completed?.3:1},children:[c(P,{type:"NormalBold",color:"Text.default",children:e.name}),c(P,{type:"Normal",color:"Text.default",children:e.code})]}),e.completed?c(P,{type:"Normal",color:"Text.default",children:m("common.completedCourse")}):c(P,{type:"Normal",color:"Highlight.default",children:e.type})]}),c(Hn,{}),e.lectures.map((v,I)=>{const y=r.includes(v.id),M=n?.some(S=>S.id===v.id)===!0;return b(ne.Fragment,{children:[b(no,{"data-lecture-id":v.id,onMouseEnter:()=>{R||u([v])},onMouseLeave:()=>{R||u(null)},onClick:()=>{if(v.id===t?.id){h(null);return}h(v)},isHighlighted:t?.id===v.id||M,children:[b(L,{direction:"column",gap:0,children:[R&&M&&b(P,{type:"Small",color:"Text.placeholder",children:[v.department.name," / ",v.type]}),b(L,{direction:"row",gap:6,style:{opacity:e.completed?.3:1},children:[c(P,{type:"NormalBold",color:"Text.default",children:v.classNo}),c(P,{type:"Normal",color:"Text.default",children:Dr(v.professors)})]}),R&&M&&b(P,{type:"Small",color:"Text.placeholder",children:[v.classes[0]?.buildingName," ",v.classes[0]?.roomName," /"," ",v.limitPeople]})]}),b(L,{direction:"row",gap:6,onClick:S=>S.stopPropagation(),children:[!R&&(y||i?c(re,{size:15,color:g.colors.Highlight.default,onClick:()=>d(y,v.id),children:c(gn,{})}):c(re,{size:15,color:g.colors.Text.default,onClick:()=>d(y,v.id),children:c(Cr,{})})),(!R||n?.some(S=>S.id===v.id))&&c("span",{title:o==null?m("timetable.myTimeTableLectureAddWarning"):"",style:{opacity:o==null||a.some(S=>fn(S.classes,v.classes))?.3:1,cursor:s?"wait":"pointer"},children:c(re,{size:R?30:15,color:g.colors.Text.default,onClick:()=>f(v),children:c(pn,{})})})]})]}),I!==e.lectures.length-1&&c(Hn,{})]},v.id)})]})},io=l.memo(ro,(e,t)=>{if(e.course!==t.course||e.isInWish!==t.isInWish||e.isWishlist!==t.isWishlist||e.currentTimetableId!==t.currentTimetableId||e.timetableLectures!==t.timetableLectures||e.isAddTimetablePending!==t.isAddTimetablePending||e.selectedLecture!==t.selectedLecture)return!1;const n=e.hoveredLecture,r=t.hoveredLecture;if(n===r)return!0;const i=e.course.lectures.map(s=>s.id),o=n?.some(s=>i.includes(s.id))??!1,a=r?.some(s=>i.includes(s.id))??!1;return!o&&!a}),oo=E(L)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,ao=E(L)`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,so=E(P)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,lo=E(L)`
    height: 36px;
`,co=E(L)`
    height: fit-content;
    overflow-y: auto;
    position: relative;

    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    /* 상단/하단 페이드 오버레이: 자식 배경에 가려지지 않도록 컨테이너 위에 표시 */
    ${W.tablet} {
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
`,uo=E(L)`
    width: 100%;
`,ho=E(L)`
    height: 100%;
    flex-grow: 1;

    ${W.tablet} {
        padding-right: 4px;
    }
`;E.div`
    flex: 1 0 0;
    width: 100%;
`;const fo=E.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({theme:e})=>e.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
`,po=E.div`
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
`,Ht=50,qn=({timetableLectures:e,year:t,semester:n,hoveredLecture:r,setHoveredLecture:i,selectedLecture:o,setSelectedLecture:a,timeFilter:s,setTimeFilter:u,currentTimetableId:h})=>{const{t:d}=Ae(),f=je(),{user:m,status:g}=mn(),R=hn(),{ref:p,inView:T}=Tr({threshold:0}),[v,I]=l.useState(!1),y=$e("tablet"),M=l.useCallback(C=>{if(!C)return C;const x=new Map;return C.courses.forEach(O=>{const z=x.get(O.id);if(!z){x.set(O.id,{...O,lectures:[...O.lectures]});return}const _=new Set(z.lectures.map(se=>se.id)),ce=[...z.lectures];O.lectures.forEach(se=>{_.has(se.id)||(_.add(se.id),ce.push(se))}),x.set(O.id,{...z,lectures:ce})}),{...C,courses:Array.from(x.values())}},[]),{query:S,setParams:A,data:N}=Sr("GET","/lectures",{infinites:["courses"],limit:Ht,enabled:v,gcTime:0,select:M,iterate:C=>{let x=0;return C.courses.forEach(O=>{x+=O.lectures.length}),x<Ht?0:x}}),{mutation:w,requestFunction:D}=le("PATCH",`/timetables/${h}`,{onSuccess:()=>{R.invalidateQueries({queryKey:[`/timetables/${h}`]})}}),[B,k]=l.useState({courses:[]}),[q,Y]=l.useState([]),[V,ie]=l.useState(0),G=l.useRef(null),X=l.useRef(null),K=l.useRef(null),[H,oe]=l.useState(!1),{query:ue,setParams:Z}=le("GET",`/users/${m?.id}/wishlist`,{enabled:g==="success"&&t!=-1}),{requestFunction:he}=le("PATCH",`/users/${m?.id}/wishlist`,{onSuccess:()=>{R.invalidateQueries({queryKey:[`/users/${m?.id}/wishlist`]})}}),we=C=>{if(Ti(C)){alert(d("common.search.empty"));return}oe(!1);const x={year:t,semester:n,...C,order:["code","popular","studentCount"][V]??"code",offset:0,limit:Ht,day:C.time?.day??void 0,begin:C.time?.begin??void 0,end:C.time?.end??void 0};A(x),I(!0)};l.useEffect(()=>{oe(!1),A(C=>({...C,order:["code","popular","studentCount"][V]??"code",offset:0})),I(!0)},[V]),l.useEffect(()=>{k({courses:[]}),t!==-1&&Z({year:t,semester:n})},[t,n]),l.useEffect(()=>{T&&S.hasNextPage&&!S.isFetchingNextPage&&S.fetchNextPage()},[T]),l.useEffect(()=>{N!==void 0&&(k(N),oe(!1)),S.hasNextPage||I(!1)},[N]),l.useEffect(()=>{ue.data!==void 0&&k(H?ue.data:N??{courses:[]})},[H]),l.useEffect(()=>{ue.data!==void 0&&(Y(ue.data.courses.flatMap(C=>C.lectures).map(C=>C.id)),H&&k(ue.data))},[ue.data]),l.useEffect(()=>{const C=x=>{G.current&&!G.current.contains(x.target)&&X.current&&X.current.contains(x.target)&&a(null)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);const Se=ne.useMemo(()=>B.courses.flatMap(C=>C.lectures),[B.courses]),Q=l.useCallback(()=>{if(!y||!K.current)return;const x=K.current.getBoundingClientRect(),O=x.top+x.height/2,z=document.elementFromPoint(x.left+50,O);if(!z)return;const _=z.closest("[data-lecture-id]");if(_){const ce=parseInt(_.getAttribute("data-lecture-id")||"",10),se=Se.find(ke=>ke.id===ce);se&&i([se])}},[y,Se,i,a]);l.useEffect(()=>{if(!y||!K.current)return;const C=K.current;return C.addEventListener("scroll",Q),()=>{C.removeEventListener("scroll",Q)}},[y,Q]),l.useEffect(()=>{if(!y||B.courses.length===0)return;let C;const x=requestAnimationFrame(()=>{C=requestAnimationFrame(()=>{Q()})});return()=>{cancelAnimationFrame(x),cancelAnimationFrame(C)}},[y,B.courses,Q]);const F=async(C,x)=>{if(g!=="idle"){Y(C?O=>O.filter(z=>z!==x):O=>[...O,x]);try{he({lectureId:x,mode:C?"delete":"add"})}catch(O){console.error("Failed to update wishlist:",O),Y(C?z=>[...z,x]:z=>z.filter(_=>_!==x))}}},U=async C=>{if(h){if(e.some(x=>fn(x.classes,C.classes))){alert(d("timetable.addLectureConflict"));return}}else{console.warn("No timetable selected");return}D({action:"add",lectureId:C.id})};return b(oo,{direction:"column",justify:"stretch",align:"stretch",gap:8,ref:X,children:[c(ao,{direction:"row",justify:"stretch",gap:0,children:c(Si,{options:["type","department","level","term","time"],timeFilter:s,setTimeFilter:u,onSearch:we})}),b(L,{direction:"row",gap:0,justify:"space-between",align:"center",children:[b(po,{isSelected:H,onClick:()=>{oe(C=>!C)},style:{paddingBlock:10},children:[c(re,{size:15,color:f.colors.Highlight.default,children:H?c(gn,{}):c(Cr,{})}),c(P,{type:"Normal",color:"Highlight.default",children:d("common.wishlist")})]}),B.courses.length!==0&&c(lo,{direction:"row",gap:0,children:c(Ai,{options:[d("dictionary.sortOptions.code"),d("dictionary.sortOptions.popularity"),d("dictionary.sortOptions.studentCount")],setSelectedOption:ie,selectedOption:V})})]}),B.courses.length!==0?c(co,{direction:"column",gap:0,ref:K,children:b(uo,{direction:"row",gap:0,children:[b(ho,{direction:"column",gap:12,ref:G,children:[B.courses.map(C=>c(io,{course:C,selectedLecture:o,hoveredLecture:r,isInWish:q,isWishlist:H,currentTimetableId:h,timetableLectures:e,isAddTimetablePending:w.isPending,setHoveredLecture:i,setSelectedLecture:a,handleLikeClick:F,handleAddToTimetable:U,t:d},C.id)),!H&&S.hasNextPage&&c(nn,{ref:p})]}),y&&c(fo,{})]})}):c(so,{type:"Bigger",color:"Text.placeholder",children:d("dictionary.noResults")})]})};function go(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.useMemo(()=>r=>{t.forEach(i=>i(r))},t)}const Ot=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function it(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function yn(e){return"nodeType"in e}function de(e){var t,n;return e?it(e)?e:yn(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function bn(e){const{Document:t}=de(e);return e instanceof t}function wt(e){return it(e)?!1:e instanceof de(e).HTMLElement}function Rr(e){return e instanceof de(e).SVGElement}function ot(e){return e?it(e)?e.document:yn(e)?bn(e)?e:wt(e)||Rr(e)?e.ownerDocument:document:document:document}const Re=Ot?l.useLayoutEffect:l.useEffect;function wn(e){const t=l.useRef(e);return Re(()=>{t.current=e}),l.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function mo(){const e=l.useRef(null),t=l.useCallback((r,i)=>{e.current=setInterval(r,i)},[]),n=l.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function vt(e,t){t===void 0&&(t=[e]);const n=l.useRef(e);return Re(()=>{n.current!==e&&(n.current=e)},t),n}function xt(e,t){const n=l.useRef();return l.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function At(e){const t=wn(e),n=l.useRef(null),r=l.useCallback(i=>{i!==n.current&&t?.(i,n.current),n.current=i},[]);return[n,r]}function rn(e){const t=l.useRef();return l.useEffect(()=>{t.current=e},[e]),t.current}let qt={};function Et(e,t){return l.useMemo(()=>{if(t)return t;const n=qt[e]==null?0:qt[e]+1;return qt[e]=n,e+"-"+n},[e,t])}function Ar(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((o,a)=>{const s=Object.entries(a);for(const[u,h]of s){const d=o[u];d!=null&&(o[u]=d+e*h)}return o},{...t})}}const _e=Ar(1),It=Ar(-1);function vo(e){return"clientX"in e&&"clientY"in e}function xn(e){if(!e)return!1;const{KeyboardEvent:t}=de(e.target);return t&&e instanceof t}function yo(e){if(!e)return!1;const{TouchEvent:t}=de(e.target);return t&&e instanceof t}function on(e){if(yo(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return vo(e)?{x:e.clientX,y:e.clientY}:null}const Nt=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Nt.Translate.toString(e),Nt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Yn="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function bo(e){return e.matches(Yn)?e:e.querySelector(Yn)}const wo={display:"none"};function xo(e){let{id:t,value:n}=e;return ne.createElement("div",{id:t,style:wo},n)}function Eo(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const i={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ne.createElement("div",{id:t,style:i,role:"status","aria-live":r,"aria-atomic":!0},n)}function So(){const[e,t]=l.useState("");return{announce:l.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const Ir=l.createContext(null);function To(e){const t=l.useContext(Ir);l.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Co(){const[e]=l.useState(()=>new Set),t=l.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[l.useCallback(r=>{let{type:i,event:o}=r;e.forEach(a=>{var s;return(s=a[i])==null?void 0:s.call(a,o)})},[e]),t]}const Do={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Ro={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Ao(e){let{announcements:t=Ro,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=Do}=e;const{announce:o,announcement:a}=So(),s=Et("DndLiveRegion"),[u,h]=l.useState(!1);if(l.useEffect(()=>{h(!0)},[]),To(l.useMemo(()=>({onDragStart(f){let{active:m}=f;o(t.onDragStart({active:m}))},onDragMove(f){let{active:m,over:g}=f;t.onDragMove&&o(t.onDragMove({active:m,over:g}))},onDragOver(f){let{active:m,over:g}=f;o(t.onDragOver({active:m,over:g}))},onDragEnd(f){let{active:m,over:g}=f;o(t.onDragEnd({active:m,over:g}))},onDragCancel(f){let{active:m,over:g}=f;o(t.onDragCancel({active:m,over:g}))}}),[o,t])),!u)return null;const d=ne.createElement(ne.Fragment,null,ne.createElement(xo,{id:r,value:i.draggable}),ne.createElement(Eo,{id:s,announcement:a}));return n?ht.createPortal(d,n):d}var J;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(J||(J={}));function Mt(){}function Vn(e,t){return l.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Io(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const Ee=Object.freeze({x:0,y:0});function No(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Mo(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Lo(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function ko(e,t){if(!e||e.length===0)return null;const[n]=e;return n[t]}function Gn(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const Oo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=Gn(t,t.left,t.top),o=[];for(const a of r){const{id:s}=a,u=n.get(s);if(u){const h=No(Gn(u),i);o.push({id:s,data:{droppableContainer:a,value:h}})}}return o.sort(Mo)};function Bo(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-r,s=o-n;if(r<i&&n<o){const u=t.width*t.height,h=e.width*e.height,d=a*s,f=d/(u+h-d);return Number(f.toFixed(4))}return 0}const zo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const o of r){const{id:a}=o,s=n.get(a);if(s){const u=Bo(s,t);u>0&&i.push({id:a,data:{droppableContainer:o,value:u}})}}return i.sort(Lo)};function Po(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Nr(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ee}function Uo(e){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i.reduce((a,s)=>({...a,top:a.top+e*s.y,bottom:a.bottom+e*s.y,left:a.left+e*s.x,right:a.right+e*s.x}),{...n})}}const Fo=Uo(1);function $o(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function jo(e,t,n){const r=$o(t);if(!r)return e;const{scaleX:i,scaleY:o,x:a,y:s}=r,u=e.left-a-(1-i)*parseFloat(n),h=e.top-s-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,f=o?e.height/o:e.height;return{width:d,height:f,top:h,right:u+d,bottom:h+f,left:u}}const Wo={ignoreTransform:!1};function at(e,t){t===void 0&&(t=Wo);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:h,transformOrigin:d}=de(e).getComputedStyle(e);h&&(n=jo(n,h,d))}const{top:r,left:i,width:o,height:a,bottom:s,right:u}=n;return{top:r,left:i,width:o,height:a,bottom:s,right:u}}function Xn(e){return at(e,{ignoreTransform:!0})}function Ho(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function qo(e,t){return t===void 0&&(t=de(e).getComputedStyle(e)),t.position==="fixed"}function Yo(e,t){t===void 0&&(t=de(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const o=t[i];return typeof o=="string"?n.test(o):!1})}function En(e,t){const n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(bn(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!wt(i)||Rr(i)||n.includes(i))return n;const o=de(e).getComputedStyle(i);return i!==e&&Yo(i,o)&&n.push(i),qo(i,o)?n:r(i.parentNode)}return e?r(e):n}function Mr(e){const[t]=En(e,1);return t??null}function Yt(e){return!Ot||!e?null:it(e)?e:yn(e)?bn(e)||e===ot(e).scrollingElement?window:wt(e)?e:null:null}function Lr(e){return it(e)?e.scrollX:e.scrollLeft}function kr(e){return it(e)?e.scrollY:e.scrollTop}function an(e){return{x:Lr(e),y:kr(e)}}var ee;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(ee||(ee={}));function Or(e){return!Ot||!e?!1:e===document.scrollingElement}function Br(e){const t={x:0,y:0},n=Or(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},i=e.scrollTop<=t.y,o=e.scrollLeft<=t.x,a=e.scrollTop>=r.y,s=e.scrollLeft>=r.x;return{isTop:i,isLeft:o,isBottom:a,isRight:s,maxScroll:r,minScroll:t}}const Vo={x:.2,y:.2};function Go(e,t,n,r,i){let{top:o,left:a,right:s,bottom:u}=n;r===void 0&&(r=10),i===void 0&&(i=Vo);const{isTop:h,isBottom:d,isLeft:f,isRight:m}=Br(e),g={x:0,y:0},R={x:0,y:0},p={height:t.height*i.y,width:t.width*i.x};return!h&&o<=t.top+p.height?(g.y=ee.Backward,R.y=r*Math.abs((t.top+p.height-o)/p.height)):!d&&u>=t.bottom-p.height&&(g.y=ee.Forward,R.y=r*Math.abs((t.bottom-p.height-u)/p.height)),!m&&s>=t.right-p.width?(g.x=ee.Forward,R.x=r*Math.abs((t.right-p.width-s)/p.width)):!f&&a<=t.left+p.width&&(g.x=ee.Backward,R.x=r*Math.abs((t.left+p.width-a)/p.width)),{direction:g,speed:R}}function Xo(e){if(e===document.scrollingElement){const{innerWidth:o,innerHeight:a}=window;return{top:0,left:0,right:o,bottom:a,width:o,height:a}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function zr(e){return e.reduce((t,n)=>_e(t,an(n)),Ee)}function Ko(e){return e.reduce((t,n)=>t+Lr(n),0)}function Qo(e){return e.reduce((t,n)=>t+kr(n),0)}function Jo(e,t){if(t===void 0&&(t=at),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);Mr(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Zo=[["x",["left","right"],Ko],["y",["top","bottom"],Qo]];class Sn{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=En(n),i=zr(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[o,a,s]of Zo)for(const u of a)Object.defineProperty(this,u,{get:()=>{const h=s(r),d=i[o]-h;return this.rect[u]+d},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class pt{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var i;(i=this.target)==null||i.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function _o(e){const{EventTarget:t}=de(e);return e instanceof t?e:ot(e)}function Vt(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var ve;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(ve||(ve={}));function Kn(e){e.preventDefault()}function ea(e){e.stopPropagation()}var j;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(j||(j={}));const Pr={start:[j.Space,j.Enter],cancel:[j.Esc],end:[j.Space,j.Enter,j.Tab]},ta=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case j.Right:return{...n,x:n.x+25};case j.Left:return{...n,x:n.x-25};case j.Down:return{...n,y:n.y+25};case j.Up:return{...n,y:n.y-25}}};class Ur{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new pt(ot(n)),this.windowListeners=new pt(de(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ve.Resize,this.handleCancel),this.windowListeners.add(ve.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ve.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&Jo(r),n(Ee)}handleKeyDown(t){if(xn(t)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:o=Pr,coordinateGetter:a=ta,scrollBehavior:s="smooth"}=i,{code:u}=t;if(o.end.includes(u)){this.handleEnd(t);return}if(o.cancel.includes(u)){this.handleCancel(t);return}const{collisionRect:h}=r.current,d=h?{x:h.left,y:h.top}:Ee;this.referenceCoordinates||(this.referenceCoordinates=d);const f=a(t,{active:n,context:r.current,currentCoordinates:d});if(f){const m=It(f,d),g={x:0,y:0},{scrollableAncestors:R}=r.current;for(const p of R){const T=t.code,{isTop:v,isRight:I,isLeft:y,isBottom:M,maxScroll:S,minScroll:A}=Br(p),N=Xo(p),w={x:Math.min(T===j.Right?N.right-N.width/2:N.right,Math.max(T===j.Right?N.left:N.left+N.width/2,f.x)),y:Math.min(T===j.Down?N.bottom-N.height/2:N.bottom,Math.max(T===j.Down?N.top:N.top+N.height/2,f.y))},D=T===j.Right&&!I||T===j.Left&&!y,B=T===j.Down&&!M||T===j.Up&&!v;if(D&&w.x!==f.x){const k=p.scrollLeft+m.x,q=T===j.Right&&k<=S.x||T===j.Left&&k>=A.x;if(q&&!m.y){p.scrollTo({left:k,behavior:s});return}q?g.x=p.scrollLeft-k:g.x=T===j.Right?p.scrollLeft-S.x:p.scrollLeft-A.x,g.x&&p.scrollBy({left:-g.x,behavior:s});break}else if(B&&w.y!==f.y){const k=p.scrollTop+m.y,q=T===j.Down&&k<=S.y||T===j.Up&&k>=A.y;if(q&&!m.x){p.scrollTo({top:k,behavior:s});return}q?g.y=p.scrollTop-k:g.y=T===j.Down?p.scrollTop-S.y:p.scrollTop-A.y,g.y&&p.scrollBy({top:-g.y,behavior:s});break}}this.handleMove(t,_e(It(f,this.referenceCoordinates),g))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Ur.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Pr,onActivation:i}=t,{active:o}=n;const{code:a}=e.nativeEvent;if(r.start.includes(a)){const s=o.activatorNode.current;return s&&e.target!==s?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function Qn(e){return!!(e&&"distance"in e)}function Jn(e){return!!(e&&"delay"in e)}class Tn{constructor(t,n,r){var i;r===void 0&&(r=_o(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:o}=t,{target:a}=o;this.props=t,this.events=n,this.document=ot(a),this.documentListeners=new pt(this.document),this.listeners=new pt(r),this.windowListeners=new pt(de(a)),this.initialCoordinates=(i=on(o))!=null?i:Ee,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(ve.Resize,this.handleCancel),this.windowListeners.add(ve.DragStart,Kn),this.windowListeners.add(ve.VisibilityChange,this.handleCancel),this.windowListeners.add(ve.ContextMenu,Kn),this.documentListeners.add(ve.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Jn(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(Qn(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,n){const{active:r,onPending:i}=this.props;i(r,t,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(ve.Click,ea,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ve.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:i,props:o}=this,{onMove:a,options:{activationConstraint:s}}=o;if(!i)return;const u=(n=on(t))!=null?n:Ee,h=It(i,u);if(!r&&s){if(Qn(s)){if(s.tolerance!=null&&Vt(h,s.tolerance))return this.handleCancel();if(Vt(h,s.distance))return this.handleStart()}if(Jn(s)&&Vt(h,s.tolerance))return this.handleCancel();this.handlePending(s,h);return}t.cancelable&&t.preventDefault(),a(u)}handleEnd(){const{onAbort:t,onEnd:n}=this.props;this.detach(),this.activated||t(this.props.active),n()}handleCancel(){const{onAbort:t,onCancel:n}=this.props;this.detach(),this.activated||t(this.props.active),n()}handleKeydown(t){t.code===j.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const na={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Cn extends Tn{constructor(t){const{event:n}=t,r=ot(n.target);super(t,na,r)}}Cn.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];const ra={move:{name:"mousemove"},end:{name:"mouseup"}};var sn;(function(e){e[e.RightClick=2]="RightClick"})(sn||(sn={}));class ia extends Tn{constructor(t){super(t,ra,ot(t.event.target))}}ia.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===sn.RightClick?!1:(r?.({event:n}),!0)}}];const Gt={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Fr extends Tn{constructor(t){super(t,Gt)}static setup(){return window.addEventListener(Gt.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Gt.move.name,t)};function t(){}}}Fr.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var gt;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(gt||(gt={}));var Lt;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Lt||(Lt={}));function oa(e){let{acceleration:t,activator:n=gt.Pointer,canScroll:r,draggingRect:i,enabled:o,interval:a=5,order:s=Lt.TreeOrder,pointerCoordinates:u,scrollableAncestors:h,scrollableAncestorRects:d,delta:f,threshold:m}=e;const g=sa({delta:f,disabled:!o}),[R,p]=mo(),T=l.useRef({x:0,y:0}),v=l.useRef({x:0,y:0}),I=l.useMemo(()=>{switch(n){case gt.Pointer:return u?{top:u.y,bottom:u.y,left:u.x,right:u.x}:null;case gt.DraggableRect:return i}},[n,i,u]),y=l.useRef(null),M=l.useCallback(()=>{const A=y.current;if(!A)return;const N=T.current.x*v.current.x,w=T.current.y*v.current.y;A.scrollBy(N,w)},[]),S=l.useMemo(()=>s===Lt.TreeOrder?[...h].reverse():h,[s,h]);l.useEffect(()=>{if(!o||!h.length||!I){p();return}for(const A of S){if(r?.(A)===!1)continue;const N=h.indexOf(A),w=d[N];if(!w)continue;const{direction:D,speed:B}=Go(A,w,I,t,m);for(const k of["x","y"])g[k][D[k]]||(B[k]=0,D[k]=0);if(B.x>0||B.y>0){p(),y.current=A,R(M,a),T.current=B,v.current=D;return}}T.current={x:0,y:0},v.current={x:0,y:0},p()},[t,M,r,p,o,a,JSON.stringify(I),JSON.stringify(g),R,h,S,d,JSON.stringify(m)])}const aa={x:{[ee.Backward]:!1,[ee.Forward]:!1},y:{[ee.Backward]:!1,[ee.Forward]:!1}};function sa(e){let{delta:t,disabled:n}=e;const r=rn(t);return xt(i=>{if(n||!r||!i)return aa;const o={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[ee.Backward]:i.x[ee.Backward]||o.x===-1,[ee.Forward]:i.x[ee.Forward]||o.x===1},y:{[ee.Backward]:i.y[ee.Backward]||o.y===-1,[ee.Forward]:i.y[ee.Forward]||o.y===1}}},[n,t,r])}function la(e,t){const n=t!=null?e.get(t):void 0,r=n?n.node.current:null;return xt(i=>{var o;return t==null?null:(o=r??i)!=null?o:null},[r,t])}function ca(e,t){return l.useMemo(()=>e.reduce((n,r)=>{const{sensor:i}=r,o=i.activators.map(a=>({eventName:a.eventName,handler:t(a.handler,r)}));return[...n,...o]},[]),[e,t])}var yt;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(yt||(yt={}));var ln;(function(e){e.Optimized="optimized"})(ln||(ln={}));const Zn=new Map;function da(e,t){let{dragging:n,dependencies:r,config:i}=t;const[o,a]=l.useState(null),{frequency:s,measure:u,strategy:h}=i,d=l.useRef(e),f=T(),m=vt(f),g=l.useCallback(function(v){v===void 0&&(v=[]),!m.current&&a(I=>I===null?v:I.concat(v.filter(y=>!I.includes(y))))},[m]),R=l.useRef(null),p=xt(v=>{if(f&&!n)return Zn;if(!v||v===Zn||d.current!==e||o!=null){const I=new Map;for(let y of e){if(!y)continue;if(o&&o.length>0&&!o.includes(y.id)&&y.rect.current){I.set(y.id,y.rect.current);continue}const M=y.node.current,S=M?new Sn(u(M),M):null;y.rect.current=S,S&&I.set(y.id,S)}return I}return v},[e,o,n,f,u]);return l.useEffect(()=>{d.current=e},[e]),l.useEffect(()=>{f||g()},[n,f]),l.useEffect(()=>{o&&o.length>0&&a(null)},[JSON.stringify(o)]),l.useEffect(()=>{f||typeof s!="number"||R.current!==null||(R.current=setTimeout(()=>{g(),R.current=null},s))},[s,f,g,...r]),{droppableRects:p,measureDroppableContainers:g,measuringScheduled:o!=null};function T(){switch(h){case yt.Always:return!1;case yt.BeforeDragging:return n;default:return!n}}}function $r(e,t){return xt(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function ua(e,t){return $r(e,t)}function ha(e){let{callback:t,disabled:n}=e;const r=wn(t),i=l.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:o}=window;return new o(r)},[r,n]);return l.useEffect(()=>()=>i?.disconnect(),[i]),i}function Bt(e){let{callback:t,disabled:n}=e;const r=wn(t),i=l.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:o}=window;return new o(r)},[n]);return l.useEffect(()=>()=>i?.disconnect(),[i]),i}function fa(e){return new Sn(at(e),e)}function _n(e,t,n){t===void 0&&(t=fa);const[r,i]=l.useState(null);function o(){i(u=>{if(!e)return null;if(e.isConnected===!1){var h;return(h=u??n)!=null?h:null}const d=t(e);return JSON.stringify(u)===JSON.stringify(d)?u:d})}const a=ha({callback(u){if(e)for(const h of u){const{type:d,target:f}=h;if(d==="childList"&&f instanceof HTMLElement&&f.contains(e)){o();break}}}}),s=Bt({callback:o});return Re(()=>{o(),e?(s?.observe(e),a?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),a?.disconnect())},[e]),r}function pa(e){const t=$r(e);return Nr(e,t)}const er=[];function ga(e){const t=l.useRef(e),n=xt(r=>e?r&&r!==er&&e&&t.current&&e.parentNode===t.current.parentNode?r:En(e):er,[e]);return l.useEffect(()=>{t.current=e},[e]),n}function ma(e){const[t,n]=l.useState(null),r=l.useRef(e),i=l.useCallback(o=>{const a=Yt(o.target);a&&n(s=>s?(s.set(a,an(a)),new Map(s)):null)},[]);return l.useEffect(()=>{const o=r.current;if(e!==o){a(o);const s=e.map(u=>{const h=Yt(u);return h?(h.addEventListener("scroll",i,{passive:!0}),[h,an(h)]):null}).filter(u=>u!=null);n(s.length?new Map(s):null),r.current=e}return()=>{a(e),a(o)};function a(s){s.forEach(u=>{const h=Yt(u);h?.removeEventListener("scroll",i)})}},[i,e]),l.useMemo(()=>e.length?t?Array.from(t.values()).reduce((o,a)=>_e(o,a),Ee):zr(e):Ee,[e,t])}function tr(e,t){t===void 0&&(t=[]);const n=l.useRef(null);return l.useEffect(()=>{n.current=null},t),l.useEffect(()=>{const r=e!==Ee;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?It(e,n.current):Ee}function va(e){l.useEffect(()=>{if(!Ot)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n?.()}},e.map(t=>{let{sensor:n}=t;return n}))}function ya(e,t){return l.useMemo(()=>e.reduce((n,r)=>{let{eventName:i,handler:o}=r;return n[i]=a=>{o(a,t)},n},{}),[e,t])}function jr(e){return l.useMemo(()=>e?Ho(e):null,[e])}const nr=[];function ba(e,t){t===void 0&&(t=at);const[n]=e,r=jr(n?de(n):null),[i,o]=l.useState(nr);function a(){o(()=>e.length?e.map(u=>Or(u)?r:new Sn(t(u),u)):nr)}const s=Bt({callback:a});return Re(()=>{s?.disconnect(),a(),e.forEach(u=>s?.observe(u))},[e]),i}function wa(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return wt(t)?t:e}function xa(e){let{measure:t}=e;const[n,r]=l.useState(null),i=l.useCallback(h=>{for(const{target:d}of h)if(wt(d)){r(f=>{const m=t(d);return f?{...f,width:m.width,height:m.height}:m});break}},[t]),o=Bt({callback:i}),a=l.useCallback(h=>{const d=wa(h);o?.disconnect(),d&&o?.observe(d),r(d?t(d):null)},[t,o]),[s,u]=At(a);return l.useMemo(()=>({nodeRef:s,rect:n,setRef:u}),[n,s,u])}const Ea=[{sensor:Cn,options:{}},{sensor:Ur,options:{}}],Sa={current:{}},Rt={draggable:{measure:Xn},droppable:{measure:Xn,strategy:yt.WhileDragging,frequency:ln.Optimized},dragOverlay:{measure:at}};class mt extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const Ta={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new mt,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Mt},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Rt,measureDroppableContainers:Mt,windowRect:null,measuringScheduled:!1},Ca={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Mt,draggableNodes:new Map,over:null,measureDroppableContainers:Mt},zt=l.createContext(Ca),Wr=l.createContext(Ta);function Da(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new mt}}}function Ra(e,t){switch(t.type){case J.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case J.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case J.DragEnd:case J.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case J.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new mt(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case J.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const a=new mt(e.droppable.containers);return a.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case J.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new mt(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Aa(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:i}=l.useContext(zt),o=rn(r),a=rn(n?.id);return l.useEffect(()=>{if(!t&&!r&&o&&a!=null){if(!xn(o)||document.activeElement===o.target)return;const s=i.get(a);if(!s)return;const{activatorNode:u,node:h}=s;if(!u.current&&!h.current)return;requestAnimationFrame(()=>{for(const d of[u.current,h.current]){if(!d)continue;const f=bo(d);if(f){f.focus();break}}})}},[r,t,i,a,o]),null}function Ia(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((i,o)=>o({transform:i,...r}),n):n}function Na(e){return l.useMemo(()=>({draggable:{...Rt.draggable,...e?.draggable},droppable:{...Rt.droppable,...e?.droppable},dragOverlay:{...Rt.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Ma(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e;const o=l.useRef(!1),{x:a,y:s}=typeof i=="boolean"?{x:i,y:i}:i;Re(()=>{if(!a&&!s||!t){o.current=!1;return}if(o.current||!r)return;const h=t?.node.current;if(!h||h.isConnected===!1)return;const d=n(h),f=Nr(d,r);if(a||(f.x=0),s||(f.y=0),o.current=!0,Math.abs(f.x)>0||Math.abs(f.y)>0){const m=Mr(h);m&&m.scrollBy({top:f.y,left:f.x})}},[t,a,s,r,n])}const Hr=l.createContext({...Ee,scaleX:1,scaleY:1});var Fe;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Fe||(Fe={}));const La=l.memo(function(t){var n,r,i,o;let{id:a,accessibility:s,autoScroll:u=!0,children:h,sensors:d=Ea,collisionDetection:f=zo,measuring:m,modifiers:g,...R}=t;const p=l.useReducer(Ra,void 0,Da),[T,v]=p,[I,y]=Co(),[M,S]=l.useState(Fe.Uninitialized),A=M===Fe.Initialized,{draggable:{active:N,nodes:w,translate:D},droppable:{containers:B}}=T,k=N!=null?w.get(N):null,q=l.useRef({initial:null,translated:null}),Y=l.useMemo(()=>{var ae;return N!=null?{id:N,data:(ae=k?.data)!=null?ae:Sa,rect:q}:null},[N,k]),V=l.useRef(null),[ie,G]=l.useState(null),[X,K]=l.useState(null),H=vt(R,Object.values(R)),oe=Et("DndDescribedBy",a),ue=l.useMemo(()=>B.getEnabled(),[B]),Z=Na(m),{droppableRects:he,measureDroppableContainers:we,measuringScheduled:Se}=da(ue,{dragging:A,dependencies:[D.x,D.y],config:Z.droppable}),Q=la(w,N),F=l.useMemo(()=>X?on(X):null,[X]),U=fi(),C=ua(Q,Z.draggable.measure);Ma({activeNode:N!=null?w.get(N):null,config:U.layoutShiftCompensation,initialRect:C,measure:Z.draggable.measure});const x=_n(Q,Z.draggable.measure,C),O=_n(Q?Q.parentElement:null),z=l.useRef({activatorEvent:null,active:null,activeNode:Q,collisionRect:null,collisions:null,droppableRects:he,draggableNodes:w,draggingNode:null,draggingNodeRect:null,droppableContainers:B,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),_=B.getNodeFor((n=z.current.over)==null?void 0:n.id),ce=xa({measure:Z.dragOverlay.measure}),se=(r=ce.nodeRef.current)!=null?r:Q,ke=A?(i=ce.rect)!=null?i:x:null,Nn=!!(ce.nodeRef.current&&ce.rect),Mn=pa(Nn?null:x),Ft=jr(se?de(se):null),Oe=ga(A?_??Q:null),St=ba(Oe),Tt=Ia(g,{transform:{x:D.x-Mn.x,y:D.y-Mn.y,scaleX:1,scaleY:1},activatorEvent:X,active:Y,activeNodeRect:x,containerNodeRect:O,draggingNodeRect:ke,over:z.current.over,overlayNodeRect:ce.rect,scrollableAncestors:Oe,scrollableAncestorRects:St,windowRect:Ft}),Ln=F?_e(F,D):null,kn=ma(Oe),ai=tr(kn),si=tr(kn,[x]),We=_e(Tt,ai),He=ke?Fo(ke,Tt):null,st=Y&&He?f({active:Y,collisionRect:He,droppableRects:he,droppableContainers:ue,pointerCoordinates:Ln}):null,On=ko(st,"id"),[Be,Bn]=l.useState(null),li=Nn?Tt:_e(Tt,si),ci=Po(li,(o=Be?.rect)!=null?o:null,x),$t=l.useRef(null),zn=l.useCallback((ae,fe)=>{let{sensor:pe,options:ze}=fe;if(V.current==null)return;const me=w.get(V.current);if(!me)return;const ge=ae.nativeEvent,Te=new pe({active:V.current,activeNode:me,event:ge,options:ze,context:z,onAbort(te){if(!w.get(te))return;const{onDragAbort:Ce}=H.current,Ie={id:te};Ce?.(Ie),I({type:"onDragAbort",event:Ie})},onPending(te,Pe,Ce,Ie){if(!w.get(te))return;const{onDragPending:ct}=H.current,Ue={id:te,constraint:Pe,initialCoordinates:Ce,offset:Ie};ct?.(Ue),I({type:"onDragPending",event:Ue})},onStart(te){const Pe=V.current;if(Pe==null)return;const Ce=w.get(Pe);if(!Ce)return;const{onDragStart:Ie}=H.current,lt={activatorEvent:ge,active:{id:Pe,data:Ce.data,rect:q}};ht.unstable_batchedUpdates(()=>{Ie?.(lt),S(Fe.Initializing),v({type:J.DragStart,initialCoordinates:te,active:Pe}),I({type:"onDragStart",event:lt}),G($t.current),K(ge)})},onMove(te){v({type:J.DragMove,coordinates:te})},onEnd:qe(J.DragEnd),onCancel:qe(J.DragCancel)});$t.current=Te;function qe(te){return async function(){const{active:Ce,collisions:Ie,over:lt,scrollAdjustedTranslate:ct}=z.current;let Ue=null;if(Ce&&ct){const{cancelDrop:dt}=H.current;Ue={activatorEvent:ge,active:Ce,collisions:Ie,delta:ct,over:lt},te===J.DragEnd&&typeof dt=="function"&&await Promise.resolve(dt(Ue))&&(te=J.DragCancel)}V.current=null,ht.unstable_batchedUpdates(()=>{v({type:te}),S(Fe.Uninitialized),Bn(null),G(null),K(null),$t.current=null;const dt=te===J.DragEnd?"onDragEnd":"onDragCancel";if(Ue){const jt=H.current[dt];jt?.(Ue),I({type:dt,event:Ue})}})}}},[w]),di=l.useCallback((ae,fe)=>(pe,ze)=>{const me=pe.nativeEvent,ge=w.get(ze);if(V.current!==null||!ge||me.dndKit||me.defaultPrevented)return;const Te={active:ge};ae(pe,fe.options,Te)===!0&&(me.dndKit={capturedBy:fe.sensor},V.current=ze,zn(pe,fe))},[w,zn]),Pn=ca(d,di);va(d),Re(()=>{x&&M===Fe.Initializing&&S(Fe.Initialized)},[x,M]),l.useEffect(()=>{const{onDragMove:ae}=H.current,{active:fe,activatorEvent:pe,collisions:ze,over:me}=z.current;if(!fe||!pe)return;const ge={active:fe,activatorEvent:pe,collisions:ze,delta:{x:We.x,y:We.y},over:me};ht.unstable_batchedUpdates(()=>{ae?.(ge),I({type:"onDragMove",event:ge})})},[We.x,We.y]),l.useEffect(()=>{const{active:ae,activatorEvent:fe,collisions:pe,droppableContainers:ze,scrollAdjustedTranslate:me}=z.current;if(!ae||V.current==null||!fe||!me)return;const{onDragOver:ge}=H.current,Te=ze.get(On),qe=Te&&Te.rect.current?{id:Te.id,rect:Te.rect.current,data:Te.data,disabled:Te.disabled}:null,te={active:ae,activatorEvent:fe,collisions:pe,delta:{x:me.x,y:me.y},over:qe};ht.unstable_batchedUpdates(()=>{Bn(qe),ge?.(te),I({type:"onDragOver",event:te})})},[On]),Re(()=>{z.current={activatorEvent:X,active:Y,activeNode:Q,collisionRect:He,collisions:st,droppableRects:he,draggableNodes:w,draggingNode:se,draggingNodeRect:ke,droppableContainers:B,over:Be,scrollableAncestors:Oe,scrollAdjustedTranslate:We},q.current={initial:ke,translated:He}},[Y,Q,st,He,w,se,ke,he,B,Be,Oe,We]),oa({...U,delta:D,draggingRect:He,pointerCoordinates:Ln,scrollableAncestors:Oe,scrollableAncestorRects:St});const ui=l.useMemo(()=>({active:Y,activeNode:Q,activeNodeRect:x,activatorEvent:X,collisions:st,containerNodeRect:O,dragOverlay:ce,draggableNodes:w,droppableContainers:B,droppableRects:he,over:Be,measureDroppableContainers:we,scrollableAncestors:Oe,scrollableAncestorRects:St,measuringConfiguration:Z,measuringScheduled:Se,windowRect:Ft}),[Y,Q,x,X,st,O,ce,w,B,he,Be,we,Oe,St,Z,Se,Ft]),hi=l.useMemo(()=>({activatorEvent:X,activators:Pn,active:Y,activeNodeRect:x,ariaDescribedById:{draggable:oe},dispatch:v,draggableNodes:w,over:Be,measureDroppableContainers:we}),[X,Pn,Y,x,v,oe,w,Be,we]);return ne.createElement(Ir.Provider,{value:y},ne.createElement(zt.Provider,{value:hi},ne.createElement(Wr.Provider,{value:ui},ne.createElement(Hr.Provider,{value:ci},h)),ne.createElement(Aa,{disabled:s?.restoreFocus===!1})),ne.createElement(Ao,{...s,hiddenTextDescribedById:oe}));function fi(){const ae=ie?.autoScrollEnabled===!1,fe=typeof u=="object"?u.enabled===!1:u===!1,pe=A&&!ae&&!fe;return typeof u=="object"?{...u,enabled:pe}:{enabled:pe}}}),ka=l.createContext(null),rr="button",Oa="Draggable";function Ba(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e;const o=Et(Oa),{activators:a,activatorEvent:s,active:u,activeNodeRect:h,ariaDescribedById:d,draggableNodes:f,over:m}=l.useContext(zt),{role:g=rr,roleDescription:R="draggable",tabIndex:p=0}=i??{},T=u?.id===t,v=l.useContext(T?Hr:ka),[I,y]=At(),[M,S]=At(),A=ya(a,t),N=vt(n);Re(()=>(f.set(t,{id:t,key:o,node:I,activatorNode:M,data:N}),()=>{const D=f.get(t);D&&D.key===o&&f.delete(t)}),[f,t]);const w=l.useMemo(()=>({role:g,tabIndex:p,"aria-disabled":r,"aria-pressed":T&&g===rr?!0:void 0,"aria-roledescription":R,"aria-describedby":d.draggable}),[r,g,p,T,R,d.draggable]);return{active:u,activatorEvent:s,activeNodeRect:h,attributes:w,isDragging:T,listeners:r?void 0:A,node:I,over:m,setNodeRef:y,setActivatorNodeRef:S,transform:v}}function za(){return l.useContext(Wr)}const Pa="Droppable",Ua={timeout:25};function Fa(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e;const o=Et(Pa),{active:a,dispatch:s,over:u,measureDroppableContainers:h}=l.useContext(zt),d=l.useRef({disabled:n}),f=l.useRef(!1),m=l.useRef(null),g=l.useRef(null),{disabled:R,updateMeasurementsFor:p,timeout:T}={...Ua,...i},v=vt(p??r),I=l.useCallback(()=>{if(!f.current){f.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{h(Array.isArray(v.current)?v.current:[v.current]),g.current=null},T)},[T]),y=Bt({callback:I,disabled:R||!a}),M=l.useCallback((w,D)=>{y&&(D&&(y.unobserve(D),f.current=!1),w&&y.observe(w))},[y]),[S,A]=At(M),N=vt(t);return l.useEffect(()=>{!y||!S.current||(y.disconnect(),f.current=!1,y.observe(S.current))},[S,y]),l.useEffect(()=>(s({type:J.RegisterDroppable,element:{id:r,key:o,disabled:n,node:S,rect:m,data:N}}),()=>s({type:J.UnregisterDroppable,key:o,id:r})),[r]),l.useEffect(()=>{n!==d.current.disabled&&(s({type:J.SetDroppableDisabled,id:r,key:o,disabled:n}),d.current.disabled=n)},[r,o,n,s]),{active:a,rect:m,isOver:u?.id===r,node:S,over:u,setNodeRef:A}}const $a=e=>{let{transform:t}=e;return{...t,y:0}};function ja(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const Wa=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:ja(r,n,t)};function Dn(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Ha(e,t){return e.reduce((n,r,i)=>{const o=t.get(r);return o&&(n[i]=o),n},Array(e.length))}function Ct(e){return e!==null&&e>=0}function qa(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Ya(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const Dt={scaleX:1,scaleY:1},Va=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:i,overIndex:o,index:a}=e;const s=(t=n[i])!=null?t:r;if(!s)return null;const u=Ga(n,a,i);if(a===i){const h=n[o];return h?{x:i<o?h.left+h.width-(s.left+s.width):h.left-s.left,y:0,...Dt}:null}return a>i&&a<=o?{x:-s.width-u,y:0,...Dt}:a<i&&a>=o?{x:s.width+u,y:0,...Dt}:{x:0,y:0,...Dt}};function Ga(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];return!r||!i&&!o?0:n<t?i?r.left-(i.left+i.width):o.left-(r.left+r.width):o?o.left-(r.left+r.width):r.left-(i.left+i.width)}const qr=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=Dn(t,r,n),a=t[i],s=o[i];return!s||!a?null:{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}},Yr="Sortable",Vr=ne.createContext({activeIndex:-1,containerId:Yr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:qr,disabled:{draggable:!1,droppable:!1}});function Xa(e){let{children:t,id:n,items:r,strategy:i=qr,disabled:o=!1}=e;const{active:a,dragOverlay:s,droppableRects:u,over:h,measureDroppableContainers:d}=za(),f=Et(Yr,n),m=s.rect!==null,g=l.useMemo(()=>r.map(A=>typeof A=="object"&&"id"in A?A.id:A),[r]),R=a!=null,p=a?g.indexOf(a.id):-1,T=h?g.indexOf(h.id):-1,v=l.useRef(g),I=!qa(g,v.current),y=T!==-1&&p===-1||I,M=Ya(o);Re(()=>{I&&R&&d(g)},[I,g,R,d]),l.useEffect(()=>{v.current=g},[g]);const S=l.useMemo(()=>({activeIndex:p,containerId:f,disabled:M,disableTransforms:y,items:g,overIndex:T,useDragOverlay:m,sortedRects:Ha(g,u),strategy:i}),[p,f,M.draggable,M.droppable,y,g,T,u,m,i]);return ne.createElement(Vr.Provider,{value:S},t)}const Ka=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return Dn(n,r,i).indexOf(t)},Qa=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:u,transition:h}=e;return!h||!r||s!==o&&i===a?!1:n?!0:a!==i&&t===u},Ja={duration:200,easing:"ease"},Gr="transform",Za=Nt.Transition.toString({property:Gr,duration:0,easing:"linear"}),_a={roleDescription:"sortable"};function es(e){let{disabled:t,index:n,node:r,rect:i}=e;const[o,a]=l.useState(null),s=l.useRef(n);return Re(()=>{if(!t&&n!==s.current&&r.current){const u=i.current;if(u){const h=at(r.current,{ignoreTransform:!0}),d={x:u.left-h.left,y:u.top-h.top,scaleX:u.width/h.width,scaleY:u.height/h.height};(d.x||d.y)&&a(d)}}n!==s.current&&(s.current=n)},[t,n,r,i]),l.useEffect(()=>{o&&a(null)},[o]),o}function ts(e){let{animateLayoutChanges:t=Qa,attributes:n,disabled:r,data:i,getNewIndex:o=Ka,id:a,strategy:s,resizeObserverConfig:u,transition:h=Ja}=e;const{items:d,containerId:f,activeIndex:m,disabled:g,disableTransforms:R,sortedRects:p,overIndex:T,useDragOverlay:v,strategy:I}=l.useContext(Vr),y=ns(r,g),M=d.indexOf(a),S=l.useMemo(()=>({sortable:{containerId:f,index:M,items:d},...i}),[f,i,M,d]),A=l.useMemo(()=>d.slice(d.indexOf(a)),[d,a]),{rect:N,node:w,isOver:D,setNodeRef:B}=Fa({id:a,data:S,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:A,...u}}),{active:k,activatorEvent:q,activeNodeRect:Y,attributes:V,setNodeRef:ie,listeners:G,isDragging:X,over:K,setActivatorNodeRef:H,transform:oe}=Ba({id:a,data:S,attributes:{..._a,...n},disabled:y.draggable}),ue=go(B,ie),Z=!!k,he=Z&&!R&&Ct(m)&&Ct(T),we=!v&&X,Se=we&&he?oe:null,F=he?Se??(s??I)({rects:p,activeNodeRect:Y,activeIndex:m,overIndex:T,index:M}):null,U=Ct(m)&&Ct(T)?o({id:a,items:d,activeIndex:m,overIndex:T}):M,C=k?.id,x=l.useRef({activeId:C,items:d,newIndex:U,containerId:f}),O=d!==x.current.items,z=t({active:k,containerId:f,isDragging:X,isSorting:Z,id:a,index:M,items:d,newIndex:x.current.newIndex,previousItems:x.current.items,previousContainerId:x.current.containerId,transition:h,wasDragging:x.current.activeId!=null}),_=es({disabled:!z,index:M,node:w,rect:N});return l.useEffect(()=>{Z&&x.current.newIndex!==U&&(x.current.newIndex=U),f!==x.current.containerId&&(x.current.containerId=f),d!==x.current.items&&(x.current.items=d)},[Z,U,f,d]),l.useEffect(()=>{if(C===x.current.activeId)return;if(C!=null&&x.current.activeId==null){x.current.activeId=C;return}const se=setTimeout(()=>{x.current.activeId=C},50);return()=>clearTimeout(se)},[C]),{active:k,activeIndex:m,attributes:V,data:S,rect:N,index:M,newIndex:U,items:d,isOver:D,isSorting:Z,isDragging:X,listeners:G,node:w,overIndex:T,over:K,setNodeRef:ue,setActivatorNodeRef:H,setDroppableNodeRef:B,setDraggableNodeRef:ie,transform:_??F,transition:ce()};function ce(){if(_||O&&x.current.newIndex===M)return Za;if(!(we&&!xn(q)||!h)&&(Z||z))return Nt.Transition.toString({...h,property:Gr})}}function ns(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e?.draggable)!=null?n:t.draggable,droppable:(r=e?.droppable)!=null?r:t.droppable}}j.Down,j.Right,j.Up,j.Left;const rs=E(L)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function is({year:e,semester:t,setYear:n,setSemester:r,setCurrentTimetableId:i}){const o=je(),{query:a}=le("GET","/semesters");l.useEffect(()=>{const f=a.data?.semesters;if(f&&f.length>0){const m=f[f.length-1];m&&(n(m.year),r(m.semester))}},[a.data]);const{isFirstSemester:s,isLastSemester:u}=l.useMemo(()=>{if(!a.data)return{isFirstSemester:!1,isLastSemester:!1};const f=a.data.semesters,m=f[0],g=f[f.length-1];return!m||!g?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===m.year&&t===m.semester,isLastSemester:e===g.year&&t===g.semester}},[a.data,e,t]),h=()=>{s||(t===Ye.SPRING?(r(Ye.FALL),n(e-1)):r(Ye.SPRING),i(null))},d=()=>{u||(t===Ye.FALL?(r(Ye.SPRING),n(e+1)):r(Ye.FALL),i(null))};return b(rs,{direction:"row",gap:0,justify:"space-between",align:"center",children:[c(tt,{onClick:s?void 0:h,styles:{padding:2.5},children:c(re,{size:20,color:s?o.colors.Text.disable:o.colors.Highlight.default,onClick:s?void 0:()=>{},children:c(Mi,{})})}),c(P,{color:"Highlight.default",children:e}),c(P,{color:"Highlight.default",children:tn(t)}),c(tt,{onClick:u?void 0:d,styles:{padding:2.5},children:c(re,{size:20,color:u?o.colors.Text.disable:o.colors.Highlight.default,onClick:u?void 0:()=>{},children:c(Li,{})})})]})}const Xr=E.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,os=E(Xr)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,as=E(Xr)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`,ss={default:os,selected:as},ls=E.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,cs=e=>c(ls,{children:e}),cn=({type:e="default",children:t=void 0,buttonRef:n,...r})=>{const i=ss[e],o=()=>cs(t);return c(i,{ref:n,...r,onClick:r.onClick,children:c(o,{})})},ds=E(L)`
    width: 100%;
    max-width: 890px;

    ${W.laptop} {
        max-width: 565px;
    }

    ${W.tablet} {
        max-width: 100%;
    }
`,us=E(L)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,hs=E(P)`
    outline: none;
    user-select: none;
`,fs=({timetable:e,isSelected:t,onClick:n,onCopy:r,onDelete:i,onNameChange:o,isDragging:a})=>{const s=je(),{attributes:u,listeners:h,setNodeRef:d,transform:f,transition:m}=ts({id:e.id}),R={transform:(p=>{if(!p)return"";const{x:T,y:v}=p;return`translate3d(${T}px, ${v}px, 0)`})(f),transition:m,touchAction:"none",opacity:a?.5:1};return c("div",{ref:d,style:R,...u,...h,children:b(cn,{type:t?"selected":"default",onClick:n,children:[c(hs,{onClick:p=>{t&&(p.stopPropagation(),p.currentTarget.contentEditable="true",p.currentTarget.focus())},onBlur:p=>{const T=p.currentTarget.textContent||"";p.currentTarget.contentEditable="false",o(e.id,T)},onKeyDown:p=>{p.key==="Enter"&&(p.preventDefault(),p.currentTarget.blur())},contentEditable:!1,suppressContentEditableWarning:!0,type:"Normal",color:t?"Highlight.default":"Text.lighter",style:{paddingTop:4,paddingBottom:3.5},children:e.name?e.name:"No Title"}),b(L,{direction:"row",gap:0,align:"center",children:[t&&c(tt,{onClick:r,styles:{padding:5},children:c(re,{size:15,onClick:()=>{},color:t?s.colors.Highlight.default:s.colors.Text.lighter,children:c(vn,{})})}),c(tt,{onClick:i,styles:{padding:3.75},children:c(re,{size:17.5,onClick:()=>{},color:t?s.colors.Highlight.default:s.colors.Text.lighter,children:c(Er,{})})})]})]})})},ir=({timeTableLectures:e,currentTimetableId:t,setCurrentTimetableId:n,setCurrentTimetableName:r,year:i,semester:o,setYear:a,setSemester:s})=>{const{t:u}=Ae(),{status:h}=mn(),d=je(),{query:f,setParams:m}=le("GET","/timetables"),{requestFunction:g}=le("POST","/timetables",{onSuccess:w=>{f.refetch(),n(w.id)}}),{requestFunction:R}=le("DELETE","/timetables",{onMutate:w=>{t===w.id&&n(null)},onSuccess:()=>{f.refetch()}}),{requestFunction:p}=le("PATCH","/timetables",{onSuccess:()=>{f.refetch()}}),[T,v]=l.useState([]),[I,y]=l.useState(null),M=Io(Vn(Cn,{activationConstraint:{distance:8}}),Vn(Fr,{activationConstraint:{delay:500,tolerance:5}}));l.useEffect(()=>{let w=f.data?.timetables??[];w=w.filter(D=>D.year===i&&D.semester===o),v(w.slice().sort((D,B)=>D.timeTableOrder-B.timeTableOrder)),t!=null&&f.data?.timetables.forEach(D=>{D.id===t&&r(D.name)})},[f.data,i,o]),l.useEffect(()=>{h==="success"&&i!==-1&&o>0&&m({year:i,semester:o})},[i,o,h]),l.useEffect(()=>{r(t==null?u("timetable.myTimetable"):T.find(w=>w.id===t)?.name||"")},[t]);const S=w=>{y(w.active.id)},A=w=>{const{active:D,over:B}=w;if(y(null),B&&D.id!==B.id){const k=T.findIndex(ie=>ie.id===D.id),q=T.findIndex(ie=>ie.id===B.id),Y=Dn(T,k,q);v(Y);const V=D.id;p({id:V,order:q})}},N=w=>{if(w.deltaY===0)return;const D=w.currentTarget;D.scrollLeft=D.scrollLeft+w.deltaY};return b(ds,{direction:"row",justify:"space-between",align:"stretch",flex:"0 1 auto",gap:4,style:{overflowX:"hidden"},children:[b(L,{direction:"row",gap:3,flex:"0 1 auto",style:{overflowX:"auto"},children:[b(cn,{type:t==null?"selected":"default",onClick:()=>{n(null)},children:[c(P,{type:"Normal",color:t===null?"Highlight.default":"Text.lighter",style:{paddingTop:4,paddingBottom:3.5},children:u("timetable.myTimetable")}),t===null&&c(tt,{onClick:w=>{w.stopPropagation(),g({year:i,semester:o,lectureIds:e.map(D=>D.id)})},styles:{padding:5},children:c(re,{size:15,color:d.colors.Highlight.default,onClick:()=>{},children:c(vn,{})})})]},"my-timetable"),b(us,{direction:"row",gap:3,flex:"1 1 auto",onWheel:N,children:[c(La,{sensors:M,collisionDetection:Oo,onDragStart:S,onDragEnd:A,modifiers:[$a,Wa],children:c(Xa,{items:T.map(w=>w.id),strategy:Va,children:T.map(w=>c(fs,{timetable:w,isSelected:t===w.id,isDragging:I===w.id,onClick:()=>{n(w.id)},onCopy:D=>{D.stopPropagation(),g({year:i,semester:o,lectureIds:e.map(B=>B.id)})},onDelete:D=>{D.stopPropagation(),R({id:w.id})},onNameChange:(D,B)=>{v(k=>k.map(q=>q.id===D?{...q,name:B}:q)),p({id:D,name:B})}},w.id))})}),c(cn,{onClick:()=>{g({year:i,semester:o,lectureIds:[]})},children:c(tt,{onClick:w=>{},styles:{padding:3.75},children:c(re,{size:17.5,color:d.colors.Text.default,onClick:()=>{},children:c(pn,{})})})})]})]}),c(L,{direction:"row",gap:0,align:"center",children:c(is,{year:i,semester:o,setYear:a,setSemester:s,setCurrentTimetableId:n})})]})},ps=E.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;

    ${W.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px 8px;
    }
`,Ge=E.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 16px;
    color: ${({theme:e})=>e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }

    ${W.tablet} {
        padding-left: 0;
    }
`,Xe=E.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;

    ${W.mobile} {
        font-size: 12px;
    }
`,Ke=E.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    white-space: nowrap;

    ${W.mobile} {
        font-size: 12px;
    }
`,Qe=E.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({theme:e})=>e.colors.Highlight.default};

    ${W.mobile} {
        display: none;
    }
`;function gs({hover:e,setHover:t,timetableLectures:n}){const{t:r}=Ae(),{lecturesByType:i,creditsByType:o}=l.useMemo(()=>{const u={basicRequired:0,basicElective:0,majorRequired:0,majorElective:0,humanitiesSocial:0,etc:0},h={basicRequired:[],basicElective:[],majorRequired:[],majorElective:[],humanitiesSocial:[],etc:[]};return n.forEach(d=>{d.type.includes("기초필수")?(u.basicRequired+=d.credit,h.basicRequired.push(d)):d.type.includes("기초선택")?(u.basicElective+=d.credit,h.basicElective.push(d)):d.type.includes("전공필수")?(u.majorRequired+=d.credit,h.majorRequired.push(d)):d.type.includes("전공선택")?(u.majorElective+=d.credit,h.majorElective.push(d)):d.type.includes("인문")?(u.humanitiesSocial+=d.credit,h.humanitiesSocial.push(d)):(u.etc+=d.credit,u.etc+=d.creditAU,h.etc.push(d))}),{lecturesByType:h,creditsByType:u}},[n]);function a(u){for(const h of["basicRequired","basicElective","majorRequired","majorElective","humanitiesSocial","etc"])if(u.type.includes(r(`common.type.${h}`)))return h;return"etc"}function s(u,h){if(!e||e.length==0||e?.length>1)return"";const d=e[0];return u.map(m=>m.id).includes(d.id)?`(${d.creditAU?d.creditAU:d.credit})`:h===a(d)?`(+${d.creditAU?d.creditAU:d.credit})`:""}return b(ps,{children:[b(Ge,{onMouseEnter:()=>t(i.basicRequired),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.basicRequiredShort")}),c(Ke,{children:o.basicRequired}),c(Qe,{children:s(i.basicRequired,"basicRequired")})]}),b(Ge,{onMouseEnter:()=>t(i.basicElective),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.basicElectiveShort")}),c(Ke,{children:o.basicElective}),c(Qe,{children:s(i.basicElective,"basicElective")})]}),b(Ge,{onMouseEnter:()=>t(i.majorRequired),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.majorRequiredShort")}),c(Ke,{children:o.majorRequired}),c(Qe,{children:s(i.majorRequired,"majorRequired")})]}),b(Ge,{onMouseEnter:()=>t(i.majorElective),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.majorElectiveShort")}),c(Ke,{children:o.majorElective}),c(Qe,{children:s(i.majorElective,"majorElective")})]}),b(Ge,{onMouseEnter:()=>t(i.humanitiesSocial),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.humanitiesSocialElectiveShort")}),c(Ke,{children:o.humanitiesSocial}),c(Qe,{children:s(i.humanitiesSocial,"humanitiesSocial")})]}),b(Ge,{onMouseEnter:()=>t(i.etc),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.etcShort")}),c(Ke,{children:o.etc}),c(Qe,{children:s(i.etc,"etc")})]})]})}const ms=E.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${W.mobile} {
        gap: 20px;
    }
`,or=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,ar=E.span`
    font-size: 20px;
    font-weight: 300;
`,sr=E.span`
    font-size: 10px;
    font-weight: 400;
`,vs=E.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${W.mobile} {
        gap: 20px;
    }
`,Xt=E.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`,Kt=E.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.Text.default};
`,Qt=E.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.Text.dark};
`;function ys({timetableLectures:e,hover:t,setHover:n}){const{t:r}=Ae(),i=l.useMemo(()=>{let o=e.reduce((d,f)=>d+f.credit,0),a=e.reduce((d,f)=>d+f.creditAU,0);if(t&&t.length==1){const d=t[0];e.some(f=>f.id===d.id)||(o+=d.credit,a+=d.creditAU)}let s=0,u=0,h=0;return e.forEach(d=>{s+=d.averageGrade,u+=d.averageLoad,h+=d.averageSpeech}),s=s/e.length,u=u/e.length,h=h/e.length,{totalCredits:o,totalAU:a,avgGrade:s,avgLoad:u,avgSpeech:h}},[e,t]);return b(et,{children:[b(ms,{children:[b(or,{onMouseEnter:()=>n(e.filter(o=>o.credit>0)),onMouseLeave:()=>n(null),highlighted:t!==null&&t.some(o=>o.credit>0),children:[c(ar,{children:i.totalCredits}),c(sr,{children:r("common.credit")})]}),b(or,{onMouseEnter:()=>n(e.filter(o=>o.creditAU>0)),onMouseLeave:()=>n(null),highlighted:t!==null&&t.some(o=>o.creditAU>0),children:[c(ar,{children:i.totalAU}),c(sr,{children:"AU"})]})]}),b(vs,{children:[b(Xt,{children:[c(Kt,{children:Ze(i.avgGrade/3)}),c(Qt,{children:r("common.grade")})]}),b(Xt,{children:[c(Kt,{children:Ze(i.avgLoad/3)}),c(Qt,{children:r("common.load")})]}),b(Xt,{children:[c(Kt,{children:Ze(i.avgSpeech/3)}),c(Qt,{children:r("common.speech")})]})]})]})}const bs=E(L)`
    overflow-y: auto;
    min-height: 0;
`,ws=E.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`,xs=E.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({color:e,theme:t})=>e||t.colors.Text.default};
    min-width: 16px;
`,Es=E(L)`
    color: ${({highlighted:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,Ss=[{day:De.Mon,color:"#E54C65"},{day:De.Tue,color:"#F5A623"},{day:De.Wed,color:"#7ED321"},{day:De.Thu,color:"#4A90D9"},{day:De.Fri,color:"#9B59B6"}];function Ts({timetableLectures:e,hover:t,setHover:n}){const{t:r}=Ae(),i=l.useMemo(()=>{const o={[De.Mon]:[],[De.Tue]:[],[De.Wed]:[],[De.Thu]:[],[De.Fri]:[]};if(e.forEach(a=>{a.examTimes.forEach(s=>{if(s==null)return;const u=s.day;o[u]&&o[u].push({lectureName:a.name,lectureId:a.id,time:s.str.split(" ").slice(1).join(" ")})})}),t&&t.length==1){const a=t[0];e.some(s=>s.id===a.id)||a.examTimes.forEach(s=>{if(s==null)return;const u=s.day;o[u]&&o[u].push({lectureName:a.name,lectureId:a.id,time:s.str})})}return o},[e,t]);return b(bs,{direction:"column",gap:15,style:{width:"100%"},flex:"1 1 0",children:[c(P,{type:"NormalBold",color:"Text.default",children:r("timetable.examTimetable")}),Ss.map(({day:o,color:a})=>{const s=i[o];return!s||s.length===0?null:b(ws,{children:[c(xs,{color:a,onMouseEnter:()=>{n(e.filter(u=>u.examTimes.some(h=>h?.day===o)))},onMouseLeave:()=>n(null),children:yi(o,!0)}),c(L,{direction:"column",gap:2,children:s.sort((u,h)=>u.time.localeCompare(h.time)).map((u,h)=>b(Es,{direction:"column",gap:0,highlighted:t?.some(d=>d.id===u.lectureId),onMouseEnter:()=>n(e.filter(d=>d.id===u.lectureId)),onMouseLeave:()=>n(null),children:[c(P,{type:"NormalBold",children:u.lectureName}),c(P,{type:"Normal",children:u.time})]},h))})]},o)})]})}const Cs=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(t=>t??"#CCCCCC"),Ds=E.div`
    width: 100%;
    height: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/campus_map.png");
        background-size: cover;
        background-position: center;
        opacity: 0.8;
    }
`,Rs=E.div`
    display: flex;
    gap: 4px;
    align-items: center;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    left: ${({left:e})=>e}%;
    top: ${({top:e})=>e}%;
    position: absolute;
    font-size: 10px;
    color: ${({theme:e})=>e.colors.Text.default};
    border-radius: 4px;
    padding: 2px 4px;
`,As=E.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({theme:e})=>e.colors.Background.Section.default};
    position: absolute;
    top: 17px;
`,Is=E.div`
    background-color: ${({theme:e,courseId:t,highlighted:n})=>n?e.colors.Highlight.default:(()=>{const r=Cs(e.colors?.Tile?.TimeTable?.default);return r[t%r.length]})()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`,Ns=new Map([["E2",{left:52,top:70}],["E3",{left:59,top:64}],["E6",{left:60,top:52}],["E7",{left:69,top:50}],["E11",{left:45,top:47}],["E16",{left:45,top:38}],["N1",{left:80,top:28}],["N3",{left:45,top:34}],["N4",{left:54,top:30}],["N5",{left:66,top:28}],["N7",{left:25,top:30}],["N22",{left:71,top:24}],["N24",{left:68,top:20}],["N25",{left:51,top:25}],["N27",{left:49,top:13}],["W1",{left:26,top:73}],["W8",{left:27,top:44}],["W16",{left:35,top:76}]]);function Ms({timetableLectures:e,hover:t,setHover:n}){return c(Ds,{children:Array.from(Ns).map(([r,{left:i,top:o}])=>{const a=e.filter(s=>s.classes.some(u=>u.buildingCode.includes(r)));return a.length===0?null:b(Rs,{left:i,top:o,onMouseEnter:()=>{n(a)},onMouseLeave:()=>{n(null)},children:[c(As,{}),r,a.map(s=>c(Is,{courseId:s.courseId,highlighted:t?.includes(s)??!1},s.id))]},r)})})}var ut={},lr;function Ls(){return lr||(lr=1,ut.createCanvas=function(e,t){return Object.assign(document.createElement("canvas"),{width:e,height:t})},ut.createImageData=function(e,t,n){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(e);case 2:return new ImageData(e,t);default:return new ImageData(e,t,n)}},ut.loadImage=function(e,t){return new Promise(function(n,r){const i=Object.assign(document.createElement("img"),t);function o(){i.onload=null,i.onerror=null}i.onload=function(){o(),n(i)},i.onerror=function(){o(),r(new Error('Failed to load the image "'+e+'"'))},i.src=e})}),ut}var cr=Ls(),Rn=(e=>(e.DAILY="DAILY",e.HOURLY="HOURLY",e.MINUTELY="MINUTELY",e.MONTHLY="MONTHLY",e.SECONDLY="SECONDLY",e.WEEKLY="WEEKLY",e.YEARLY="YEARLY",e))(Rn||{}),dn=(e=>(e.FR="FR",e.MO="MO",e.SA="SA",e.SU="SU",e.TH="TH",e.TU="TU",e.WE="WE",e))(dn||{});function be(e,t,n){if(Array.isArray(t))e.x=t.map(r=>{if(Array.isArray(r))return r;if(typeof r.key!="string"||typeof r.value!="string")throw new Error("Either key or value is not a string!");if(r.key.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");return[r.key,r.value]});else if(typeof t=="object")e.x=Object.entries(t).map(([r,i])=>{if(typeof r!="string"||typeof i!="string")throw new Error("Either key or value is not a string!");if(r.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");return[r,i]});else if(typeof t=="string"&&typeof n=="string"){if(t.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");e.x.push([t,n])}else return e.x.map(r=>({key:r[0],value:r[1]}))}function Ne(e,t){if(e instanceof Date&&isNaN(e.getTime())||typeof e=="string"&&isNaN(new Date(e).getTime()))throw new Error(`\`${t}\` has to be a valid date!`);if(e instanceof Date||typeof e=="string"||Pt(e)&&e.isValid===!0||(Ut(e)||Os(e))&&e.isValid())return e;throw new Error(`\`${t}\` has to be a valid date!`)}function ye(e,t){let n=Object.values(e),r=String(t).toUpperCase();if(!r||!n.includes(r))throw new Error(`Input must be one of the following: ${n.join(", ")}`);return r}function bt(e,t){let n=null;if(typeof t=="string"){let r=t.match(/^(.+) ?<([^>]+)>$/);r?n={email:r[2].trim(),name:r[1].trim()}:t.includes("@")&&(n={email:t.trim(),name:t.trim()})}else typeof t=="object"&&(n={email:t.email,mailto:t.mailto,name:t.name,sentBy:t.sentBy});if(!n&&typeof t=="string")throw new Error("`"+e+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n)throw new Error("`"+e+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n.name)throw new Error("`"+e+".name` is empty!");if(!n.email)throw new Error("`"+e+".email` is empty!");return n}function $(e,t){return String(e).replace(t?/[\\"]/g:/[\\;,]/g,function(n){return"\\"+n}).replace(/(?:\r\n|\r|\n)/g,"\\n")}function ks(e){return e.split(`\r
`).map(function(t){let n="",r=0;for(let i=0;i<t.length;i++){let o=t.charAt(i);o>="\uD800"&&o<="\uDBFF"&&(o+=t.charAt(++i));let a=new TextEncoder().encode(o).length;r+=a,r>74&&(n+=`\r
 `,r=a),n+=o}return n}).join(`\r
`)}function xe(e,t,n,r){if(e?.startsWith("/")&&(e=e.substr(1)),typeof t=="string"||t instanceof Date){let i=zs(t)?t.withTimeZone(e):new Date(t),o=i.getUTCFullYear()+String(i.getUTCMonth()+1).padStart(2,"0")+i.getUTCDate().toString().padStart(2,"0");return e&&(o=i.getFullYear()+String(i.getMonth()+1).padStart(2,"0")+i.getDate().toString().padStart(2,"0")),n?o:e?(o+="T"+i.getHours().toString().padStart(2,"0")+i.getMinutes().toString().padStart(2,"0")+i.getSeconds().toString().padStart(2,"0"),o):(o+="T"+i.getUTCHours().toString().padStart(2,"0")+i.getUTCMinutes().toString().padStart(2,"0")+i.getUTCSeconds().toString().padStart(2,"0")+(r?"":"Z"),o)}else if(Ut(t)){let i=e?dr(t)&&!t.tz()?t.clone().tz(e):t:r||n&&dr(t)&&t.tz()?t:t.utc();return i.format("YYYYMMDD")+(n?"":"T"+i.format("HHmmss")+(r||e?"":"Z"))}else if(Pt(t)){let i=e?t.setZone(e):r||n&&t.zone.type!=="system"?t:t.setZone("utc");return i.toFormat("yyyyLLdd")+(n?"":"T"+i.toFormat("HHmmss")+(r||e?"":"Z"))}else{let i=t;if(e)i=typeof t.tz=="function"?t.tz(e):t;else if(!r)if(typeof t.utc=="function")i=t.utc();else throw new Error("Unable to convert dayjs object to UTC value: UTC plugin is not available!");return i.format("YYYYMMDD")+(n?"":"T"+i.format("HHmmss")+(r||e?"":"Z"))}}function Jt(e,t,n,r){let i="",o=r?.floating||!1;return r?.timezone&&(i=";TZID="+r.timezone,o=!0),t+i+":"+xe(e,n,!1,o)}function An(e){let t=e.x.map(([n,r])=>n.toUpperCase()+":"+$(r,!1)).join(`\r
`);return t.length?t+`\r
`:""}function Os(e){return typeof e=="object"&&e!==null&&!(e instanceof Date)&&!Ut(e)&&!Pt(e)}function Pt(e){return typeof e=="object"&&e!==null&&"toJSDate"in e&&typeof e.toJSDate=="function"}function Ut(e){return e!=null&&e._isAMomentObject!=null}function Bs(e){return e!==null&&typeof e=="object"&&"asSeconds"in e&&typeof e.asSeconds=="function"}function dr(e){return Ut(e)&&"tz"in e&&typeof e.tz=="function"}function Zt(e){return e!==null&&typeof e=="object"&&"between"in e&&typeof e.between=="function"&&typeof e.toString=="function"}function zs(e){return e instanceof Date&&"internal"in e&&e.internal instanceof Date&&"withTimeZone"in e&&typeof e.withTimeZone=="function"&&"tzComponents"in e&&typeof e.tzComponents=="function"}function ur(e){return typeof e=="string"||e instanceof Date?new Date(e):Pt(e)?e.toJSDate():e.toDate()}function Je(e){let t="";return e<0&&(t="-",e*=-1),t+="P",e>=86400&&(t+=Math.floor(e/86400)+"D",e%=86400),!e&&t.length>1||(t+="T",e>=3600&&(t+=Math.floor(e/3600)+"H",e%=3600),e>=60&&(t+=Math.floor(e/60)+"M",e%=60),e>0?t+=e+"S":t.length<=2&&(t+="0S")),t}function Me(e){return e?typeof e=="string"?e:e.toJSON():null}var Kr=(e=>(e.CHAIR="CHAIR",e.NON="NON-PARTICIPANT",e.OPT="OPT-PARTICIPANT",e.REQ="REQ-PARTICIPANT",e))(Kr||{}),Qr=(e=>(e.CLIENT="CLIENT",e.NONE="NONE",e.SERVER="SERVER",e))(Qr||{}),Jr=(e=>(e.ACCEPTED="ACCEPTED",e.DECLINED="DECLINED",e.DELEGATED="DELEGATED",e.NEEDSACTION="NEEDS-ACTION",e.TENTATIVE="TENTATIVE",e))(Jr||{}),Zr=(e=>(e.GROUP="GROUP",e.INDIVIDUAL="INDIVIDUAL",e.RESOURCE="RESOURCE",e.ROOM="ROOM",e.UNKNOWN="UNKNOWN",e))(Zr||{}),kt=class Le{data;parent;constructor(t,n){if(this.data={delegatedFrom:null,delegatedTo:null,email:"",mailto:null,name:null,role:"REQ-PARTICIPANT",rsvp:null,scheduleAgent:null,sentBy:null,status:null,type:null,x:[]},this.parent=n,!this.parent)throw new Error("`event` option required!");if(!t.email)throw new Error("No value for `email` in ICalAttendee given!");t.name!==void 0&&this.name(t.name),t.email!==void 0&&this.email(t.email),t.mailto!==void 0&&this.mailto(t.mailto),t.sentBy!==void 0&&this.sentBy(t.sentBy),t.status!==void 0&&this.status(t.status),t.role!==void 0&&this.role(t.role),t.rsvp!==void 0&&this.rsvp(t.rsvp),t.type!==void 0&&this.type(t.type),t.delegatedTo!==void 0&&this.delegatedTo(t.delegatedTo),t.delegatedFrom!==void 0&&this.delegatedFrom(t.delegatedFrom),t.delegatesTo&&this.delegatesTo(t.delegatesTo),t.delegatesFrom&&this.delegatesFrom(t.delegatesFrom),t.scheduleAgent!==void 0&&this.scheduleAgent(t.scheduleAgent),t.x!==void 0&&this.x(t.x)}delegatedFrom(t){return t===void 0?this.data.delegatedFrom:(t?typeof t=="string"?this.data.delegatedFrom=new Le(bt("delegatedFrom",t),this.parent):t instanceof Le?this.data.delegatedFrom=t:this.data.delegatedFrom=new Le(t,this.parent):this.data.delegatedFrom=null,this)}delegatedTo(t){return t===void 0?this.data.delegatedTo:t?(typeof t=="string"?this.data.delegatedTo=new Le(bt("delegatedTo",t),this.parent):t instanceof Le?this.data.delegatedTo=t:this.data.delegatedTo=new Le(t,this.parent),this.data.status="DELEGATED",this):(this.data.delegatedTo=null,this.data.status==="DELEGATED"&&(this.data.status=null),this)}delegatesFrom(t){let n=t instanceof Le?t:this.parent.createAttendee(t);return this.delegatedFrom(n),n.delegatedTo(this),n}delegatesTo(t){let n=t instanceof Le?t:this.parent.createAttendee(t);return this.delegatedTo(n),n.delegatedFrom(this),n}email(t){return t?(this.data.email=t,this):this.data.email}mailto(t){return t===void 0?this.data.mailto:(this.data.mailto=t||null,this)}name(t){return t===void 0?this.data.name:(this.data.name=t||null,this)}role(t){return t===void 0?this.data.role:(this.data.role=ye(Kr,t),this)}rsvp(t){return t===void 0?this.data.rsvp:t===null?(this.data.rsvp=null,this):(this.data.rsvp=!!t,this)}scheduleAgent(t){return t===void 0?this.data.scheduleAgent:t?typeof t=="string"&&t.toUpperCase().startsWith("X-")?(this.data.scheduleAgent=t,this):(this.data.scheduleAgent=ye(Qr,t),this):(this.data.scheduleAgent=null,this)}sentBy(t){return t?(this.data.sentBy=t,this):this.data.sentBy}status(t){return t===void 0?this.data.status:t?(this.data.status=ye(Jr,t),this):(this.data.status=null,this)}toJSON(){return Object.assign({},this.data,{delegatedFrom:this.data.delegatedFrom?.email()||null,delegatedTo:this.data.delegatedTo?.email()||null,x:this.x()})}toString(){let t="ATTENDEE";if(!this.data.email)throw new Error("No value for `email` in ICalAttendee given!");return t+=";ROLE="+this.data.role,this.data.type&&(t+=";CUTYPE="+this.data.type),this.data.status&&(t+=";PARTSTAT="+this.data.status),this.data.rsvp!==null&&(t+=";RSVP="+this.data.rsvp.toString().toUpperCase()),this.data.sentBy!==null&&(t+=';SENT-BY="mailto:'+this.data.sentBy+'"'),this.data.delegatedTo&&(t+=';DELEGATED-TO="'+this.data.delegatedTo.email()+'"'),this.data.delegatedFrom&&(t+=';DELEGATED-FROM="'+this.data.delegatedFrom.email()+'"'),this.data.name&&(t+=';CN="'+$(this.data.name,!0)+'"'),this.data.email&&this.data.mailto&&(t+=";EMAIL="+$(this.data.email,!1)),this.data.scheduleAgent&&(t+=";SCHEDULE-AGENT="+this.data.scheduleAgent),this.data.x.length&&(t+=";"+this.data.x.map(([n,r])=>n.toUpperCase()+"="+$(r,!1)).join(";")),t+=":MAILTO:"+$(this.data.mailto||this.data.email,!1)+`\r
`,t}type(t){return t===void 0?this.data.type:t?(this.data.type=ye(Zr,t),this):(this.data.type=null,this)}x(t,n){if(t===void 0)return be(this.data);if(typeof t=="string"&&typeof n=="string")be(this.data,t,n);else if(typeof t=="object")be(this.data,t);else throw new Error("Either key or value is not a string!");return this}},In=(e=>(e.audio="audio",e.display="display",e.email="email",e))(In||{}),Ps={end:"END",start:"START"},hr=class{data;event;constructor(e,t){if(this.data={attach:null,attendees:[],description:null,interval:null,relatesTo:null,repeat:null,summary:null,trigger:-600,type:"display",x:[]},this.event=t,!t)throw new Error("`event` option required!");e.type!==void 0&&this.type(e.type),"trigger"in e&&e.trigger!==void 0&&this.trigger(e.trigger),"triggerBefore"in e&&e.triggerBefore!==void 0&&this.triggerBefore(e.triggerBefore),"triggerAfter"in e&&e.triggerAfter!==void 0&&this.triggerAfter(e.triggerAfter),e.repeat&&this.repeat(e.repeat),e.attach!==void 0&&this.attach(e.attach),e.description!==void 0&&this.description(e.description),e.summary!==void 0&&this.summary(e.summary),e.attendees!==void 0&&this.attendees(e.attendees),e.x!==void 0&&this.x(e.x)}attach(e){if(e===void 0)return this.data.attach;if(!e)return this.data.attach=null,this;let t=null;if(typeof e=="string")t={mime:null,uri:e};else if(typeof e=="object")t={mime:e.mime||null,uri:e.uri};else throw new Error("`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalAlarm.html#attach");if(!t.uri)throw new Error("`attach.uri` is empty!");return this.data.attach={mime:t.mime,uri:t.uri},this}attendees(e){return e?(e.forEach(t=>this.createAttendee(t)),this):this.data.attendees}createAttendee(e){if(e instanceof kt)return this.data.attendees.push(e),e;typeof e=="string"&&(e=bt("data",e));let t=new kt(e,this);return this.data.attendees.push(t),t}description(e){return e===void 0?this.data.description:e?(this.data.description=e,this):(this.data.description=null,this)}relatesTo(e){if(e===void 0)return this.data.relatesTo;if(!e)return this.data.relatesTo=null,this;if(!Object.values(Ps).includes(e))throw new Error("`relatesTo` is not correct, must be either `START` or `END`!");return this.data.relatesTo=e,this}repeat(e){if(e===void 0)return this.data.repeat;if(!e)return this.data.repeat=null,this;if(typeof e!="object")throw new Error("`repeat` is not correct, must be an object!");if(typeof e.times!="number"||!isFinite(e.times))throw new Error("`repeat.times` is not correct, must be numeric!");if(typeof e.interval!="number"||!isFinite(e.interval))throw new Error("`repeat.interval` is not correct, must be numeric!");return this.data.repeat=e,this}summary(e){return e===void 0?this.data.summary:e?(this.data.summary=e,this):(this.data.summary=null,this)}toJSON(){let e=this.trigger();return Object.assign({},this.data,{trigger:typeof e=="number"?e:Me(e),x:this.x()})}toString(){let e=`BEGIN:VALARM\r
`;if(e+="ACTION:"+this.data.type.toUpperCase()+`\r
`,typeof this.data.trigger=="number"&&this.data.relatesTo===null?this.data.trigger>0?e+="TRIGGER;RELATED=END:"+Je(this.data.trigger)+`\r
`:e+="TRIGGER:"+Je(this.data.trigger)+`\r
`:typeof this.data.trigger=="number"?e+="TRIGGER;RELATED="+this.data.relatesTo?.toUpperCase()+":"+Je(this.data.trigger)+`\r
`:e+="TRIGGER;VALUE=DATE-TIME:"+xe(this.event.timezone(),this.data.trigger)+`\r
`,this.data.repeat){if(!this.data.repeat.times)throw new Error("No value for `repeat.times` in ICalAlarm given, but required for `interval`!");if(!this.data.repeat.interval)throw new Error("No value for `repeat.interval` in ICalAlarm given, but required for `repeat`!");e+="REPEAT:"+this.data.repeat.times+`\r
`,e+="DURATION:"+Je(this.data.repeat.interval)+`\r
`}return this.data.type==="audio"&&this.data.attach&&this.data.attach.mime?e+="ATTACH;FMTTYPE="+$(this.data.attach.mime,!1)+":"+$(this.data.attach.uri,!1)+`\r
`:this.data.type==="audio"&&this.data.attach?e+="ATTACH;VALUE=URI:"+$(this.data.attach.uri,!1)+`\r
`:this.data.type==="audio"&&(e+=`ATTACH;VALUE=URI:Basso\r
`),this.data.type!=="audio"&&this.data.description?e+="DESCRIPTION:"+$(this.data.description,!1)+`\r
`:this.data.type!=="audio"&&(e+="DESCRIPTION:"+$(this.event.summary(),!1)+`\r
`),this.data.type==="email"&&this.data.summary?e+="SUMMARY:"+$(this.data.summary,!1)+`\r
`:this.data.type==="email"&&(e+="SUMMARY:"+$(this.event.summary(),!1)+`\r
`),this.data.type==="email"&&this.data.attendees.forEach(t=>{e+=t.toString()}),e+=An(this.data),e+=`END:VALARM\r
`,e}trigger(e){if(e===void 0&&typeof this.data.trigger=="number")return-1*this.data.trigger;if(e===void 0)return this.data.trigger;if(typeof e=="number"&&isFinite(e))this.data.trigger=-1*e;else{if(!e||typeof e=="number")throw new Error("`trigger` is not correct, must be a finite number or a supported date!");this.data.trigger=Ne(e,"trigger")}return this}triggerAfter(e){return e===void 0?this.data.trigger:this.trigger(typeof e=="number"?-1*e:e)}triggerBefore(e){return e===void 0?this.trigger():this.trigger(e)}type(e){if(e===void 0)return this.data.type;if(!e||!Object.keys(In).includes(e))throw new Error("`type` is not correct, must be either `display` or `audio`!");return this.data.type=e,this}x(e,t){if(e===void 0)return be(this.data);if(typeof e=="string"&&typeof t=="string")be(this.data,e,t);else if(typeof e=="object")be(this.data,e);else throw new Error("Either key or value is not a string!");return this}},fr=class{data;constructor(e){if(this.data={name:""},!e.name)throw new Error("No value for `name` in ICalCategory given!");this.name(e.name)}name(e){return e===void 0?this.data.name:(this.data.name=e,this)}toJSON(){return Object.assign({},this.data)}toString(){return $(this.data.name,!1)}},_r=(e=>(e.BUSY="BUSY",e.FREE="FREE",e.OOF="OOF",e.TENTATIVE="TENTATIVE",e))(_r||{}),ei=(e=>(e.CONFIDENTIAL="CONFIDENTIAL",e.PRIVATE="PRIVATE",e.PUBLIC="PUBLIC",e))(ei||{}),ti=(e=>(e.CANCELLED="CANCELLED",e.CONFIRMED="CONFIRMED",e.TENTATIVE="TENTATIVE",e))(ti||{}),ni=(e=>(e.OPAQUE="OPAQUE",e.TRANSPARENT="TRANSPARENT",e))(ni||{}),pr=class{calendar;data;constructor(e,t){if(this.data={alarms:[],allDay:!1,attachments:[],attendees:[],busystatus:null,categories:[],class:null,created:null,description:null,end:null,floating:!1,id:crypto.randomUUID(),lastModified:null,location:null,organizer:null,priority:null,recurrenceId:null,repeating:null,sequence:0,stamp:new Date,start:new Date,status:null,summary:"",timezone:null,transparency:null,url:null,x:[]},this.calendar=t,!t)throw new Error("`calendar` option required!");e.id&&this.id(e.id),e.sequence!==void 0&&this.sequence(e.sequence),e.start&&this.start(e.start),e.end!==void 0&&this.end(e.end),e.recurrenceId!==void 0&&this.recurrenceId(e.recurrenceId),e.timezone!==void 0&&this.timezone(e.timezone),e.stamp!==void 0&&this.stamp(e.stamp),e.allDay!==void 0&&this.allDay(e.allDay),e.floating!==void 0&&this.floating(e.floating),e.repeating!==void 0&&this.repeating(e.repeating),e.summary!==void 0&&this.summary(e.summary),e.location!==void 0&&this.location(e.location),e.description!==void 0&&this.description(e.description),e.organizer!==void 0&&this.organizer(e.organizer),e.attendees!==void 0&&this.attendees(e.attendees),e.alarms!==void 0&&this.alarms(e.alarms),e.categories!==void 0&&this.categories(e.categories),e.status!==void 0&&this.status(e.status),e.busystatus!==void 0&&this.busystatus(e.busystatus),e.priority!==void 0&&this.priority(e.priority),e.url!==void 0&&this.url(e.url),e.attachments!==void 0&&this.attachments(e.attachments),e.transparency!==void 0&&this.transparency(e.transparency),e.created!==void 0&&this.created(e.created),e.lastModified!==void 0&&this.lastModified(e.lastModified),e.class!==void 0&&this.class(e.class),e.x!==void 0&&this.x(e.x)}alarms(e){return e?(e.forEach(t=>this.createAlarm(t)),this):this.data.alarms}allDay(e){return e===void 0?this.data.allDay:(this.data.allDay=!!e,this)}attachments(e){return e?(e.forEach(t=>this.createAttachment(t)),this):this.data.attachments}attendees(e){return e?(e.forEach(t=>this.createAttendee(t)),this):this.data.attendees}busystatus(e){return e===void 0?this.data.busystatus:e===null?(this.data.busystatus=null,this):(this.data.busystatus=ye(_r,e),this)}categories(e){return e?(e.forEach(t=>this.createCategory(t)),this):this.data.categories}class(e){return e===void 0?this.data.class:e===null?(this.data.class=null,this):(this.data.class=ye(ei,e),this)}createAlarm(e){let t=e instanceof hr?e:new hr(e,this);return this.data.alarms.push(t),t}createAttachment(e){return this.data.attachments.push(e),this}createAttendee(e){if(e instanceof kt)return this.data.attendees.push(e),e;typeof e=="string"&&(e=bt("data",e));let t=new kt(e,this);return this.data.attendees.push(t),t}createCategory(e){let t=e instanceof fr?e:new fr(e);return this.data.categories.push(t),t}created(e){return e===void 0?this.data.created:e===null?(this.data.created=null,this):(this.data.created=Ne(e,"created"),this)}description(e){return e===void 0?this.data.description:e===null?(this.data.description=null,this):(typeof e=="string"?this.data.description={plain:e}:this.data.description=e,this)}end(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.end):e===null?(this.data.end=null,this):(this.data.end=Ne(e,"end"),this)}floating(e){return e===void 0?this.data.floating:(this.data.floating=!!e,this.data.floating&&(this.data.timezone=null),this)}id(e){return e===void 0?this.data.id:(this.data.id=String(e),this)}lastModified(e){return e===void 0?this.data.lastModified:e===null?(this.data.lastModified=null,this):(this.data.lastModified=Ne(e,"lastModified"),this)}location(e){if(e===void 0)return this.data.location;if(typeof e=="string")return this.data.location={title:e},this;if(e&&("title"in e&&!e.title||e?.geo&&(typeof e.geo.lat!="number"||!isFinite(e.geo.lat)||typeof e.geo.lon!="number"||!isFinite(e.geo.lon))||!("title"in e)&&!e?.geo))throw new Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalEvent.html#location");return this.data.location=e||null,this}organizer(e){return e===void 0?this.data.organizer:e===null?(this.data.organizer=null,this):(this.data.organizer=bt("organizer",e),this)}priority(e){if(e===void 0)return this.data.priority;if(e===null)return this.data.priority=null,this;if(e<0||e>9)throw new Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");return this.data.priority=Math.round(e),this}recurrenceId(e){return e===void 0?this.data.recurrenceId:e===null?(this.data.recurrenceId=null,this):(this.data.recurrenceId=Ne(e,"recurrenceId"),this)}repeating(e){if(e===void 0)return this.data.repeating;if(!e)return this.data.repeating=null,this;if(Zt(e)||typeof e=="string")return this.data.repeating=e,this;if(this.data.repeating={freq:ye(Rn,e.freq)},e.count){if(!isFinite(e.count))throw new Error("`repeating.count` must be a finite number!");this.data.repeating.count=e.count}if(e.interval){if(!isFinite(e.interval))throw new Error("`repeating.interval` must be a finite number!");this.data.repeating.interval=e.interval}if(e.until!==void 0&&(this.data.repeating.until=Ne(e.until,"repeating.until")),e.byDay){let t=Array.isArray(e.byDay)?e.byDay:[e.byDay];this.data.repeating.byDay=t.map(n=>ye(dn,n))}if(e.byMonth){let t=Array.isArray(e.byMonth)?e.byMonth:[e.byMonth];this.data.repeating.byMonth=t.map(n=>{if(typeof n!="number"||n<1||n>12)throw new Error("`repeating.byMonth` contains invalid value `"+n+"`!");return n})}if(e.byMonthDay){let t=Array.isArray(e.byMonthDay)?e.byMonthDay:[e.byMonthDay];this.data.repeating.byMonthDay=t.map(n=>{if(typeof n!="number"||n<-31||n>31||n===0)throw new Error("`repeating.byMonthDay` contains invalid value `"+n+"`!");return n})}if(e.bySetPos){if(!this.data.repeating.byDay)throw"`repeating.bySetPos` must be used along with `repeating.byDay`!";let t=Array.isArray(e.bySetPos)?e.bySetPos:[e.bySetPos];this.data.repeating.bySetPos=t.map(n=>{if(typeof n!="number"||n<-366||n>366||n===0)throw"`repeating.bySetPos` contains invalid value `"+n+"`!";return n})}if(e.exclude){let t=Array.isArray(e.exclude)?e.exclude:[e.exclude];this.data.repeating.exclude=t.map((n,r)=>Ne(n,`repeating.exclude[${r}]`))}return e.startOfWeek&&(this.data.repeating.startOfWeek=ye(dn,e.startOfWeek)),this}sequence(e){if(e===void 0)return this.data.sequence;let t=parseInt(String(e),10);if(isNaN(t))throw new Error("`sequence` must be a number!");return this.data.sequence=e,this}stamp(e){return e===void 0?this.data.stamp:(this.data.stamp=Ne(e,"stamp"),this)}start(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.start):(this.data.start=Ne(e,"start"),this)}status(e){return e===void 0?this.data.status:e===null?(this.data.status=null,this):(this.data.status=ye(ti,e),this)}summary(e){return e===void 0?this.data.summary:(this.data.summary=e?String(e):"",this)}timestamp(e){return e===void 0?this.stamp():this.stamp(e)}timezone(e){return e===void 0&&this.data.timezone!==null?this.data.timezone:e===void 0?this.calendar.timezone():(this.data.timezone=e&&e!=="UTC"?e.toString():null,this.data.timezone&&(this.data.floating=!1),this)}toJSON(){let e=null;return Zt(this.data.repeating)||typeof this.data.repeating=="string"?e=this.data.repeating.toString():this.data.repeating&&(e=Object.assign({},this.data.repeating,{exclude:this.data.repeating.exclude?.map(t=>Me(t)),until:Me(this.data.repeating.until)||void 0})),this.swapStartAndEndIfRequired(),Object.assign({},this.data,{created:Me(this.data.created)||null,end:Me(this.data.end)||null,lastModified:Me(this.data.lastModified)||null,recurrenceId:Me(this.data.recurrenceId)||null,repeating:e,stamp:Me(this.data.stamp)||null,start:Me(this.data.start)||null,x:this.x()})}toString(){let e="";if(e+=`BEGIN:VEVENT\r
`,e+="UID:"+this.data.id+`\r
`,e+="SEQUENCE:"+this.data.sequence+`\r
`,this.swapStartAndEndIfRequired(),e+="DTSTAMP:"+xe(this.calendar.timezone(),this.data.stamp)+`\r
`,this.data.allDay?(e+="DTSTART;VALUE=DATE:"+xe(this.timezone(),this.data.start,!0)+`\r
`,this.data.end&&(e+="DTEND;VALUE=DATE:"+xe(this.timezone(),this.data.end,!0)+`\r
`),e+=`X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r
`,e+=`X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r
`):(e+=Jt(this.timezone(),"DTSTART",this.data.start,this.data)+`\r
`,this.data.end&&(e+=Jt(this.timezone(),"DTEND",this.data.end,this.data)+`\r
`)),Zt(this.data.repeating)||typeof this.data.repeating=="string"){let t=this.data.repeating.toString().replace(/\r\n/g,`
`).split(`
`).filter(n=>n&&!n.startsWith("DTSTART:")).join(`\r
`);!t.includes(`\r
`)&&!t.startsWith("RRULE:")&&(t="RRULE:"+t),e+=t.trim()+`\r
`}else this.data.repeating&&(e+="RRULE:FREQ="+this.data.repeating.freq,this.data.repeating.count&&(e+=";COUNT="+this.data.repeating.count),this.data.repeating.interval&&(e+=";INTERVAL="+this.data.repeating.interval),this.data.repeating.until&&(e+=";UNTIL="+xe(this.calendar.timezone(),this.data.repeating.until,!1,this.floating())),this.data.repeating.byDay&&(e+=";BYDAY="+this.data.repeating.byDay.join(",")),this.data.repeating.byMonth&&(e+=";BYMONTH="+this.data.repeating.byMonth.join(",")),this.data.repeating.byMonthDay&&(e+=";BYMONTHDAY="+this.data.repeating.byMonthDay.join(",")),this.data.repeating.bySetPos&&(e+=";BYSETPOS="+this.data.repeating.bySetPos.join(",")),this.data.repeating.startOfWeek&&(e+=";WKST="+this.data.repeating.startOfWeek),e+=`\r
`,this.data.repeating.exclude&&(this.data.allDay?e+="EXDATE;VALUE=DATE:"+this.data.repeating.exclude.map(t=>xe(this.calendar.timezone(),t,!0)).join(",")+`\r
`:(e+="EXDATE",this.timezone()?e+=";TZID="+this.timezone()+":"+this.data.repeating.exclude.map(t=>xe(this.timezone(),t,!1,!0)).join(",")+`\r
`:e+=":"+this.data.repeating.exclude.map(t=>xe(this.timezone(),t,!1,this.floating())).join(",")+`\r
`)));return this.data.recurrenceId&&(e+=Jt(this.timezone(),"RECURRENCE-ID",this.data.recurrenceId,this.data)+`\r
`),e+="SUMMARY:"+$(this.data.summary,!1)+`\r
`,this.data.transparency&&(e+="TRANSP:"+$(this.data.transparency,!1)+`\r
`),this.data.location&&"title"in this.data.location&&this.data.location.title&&(e+="LOCATION:"+$(this.data.location.title+(this.data.location.address?`
`+this.data.location.address:""),!1)+`\r
`,this.data.location.radius&&this.data.location.geo&&(e+="X-APPLE-STRUCTURED-LOCATION;VALUE=URI;"+(this.data.location.address?"X-ADDRESS="+$(this.data.location.address,!1)+";":"")+"X-APPLE-RADIUS="+$(this.data.location.radius,!1)+";X-TITLE="+$(this.data.location.title,!1)+":geo:"+$(this.data.location.geo?.lat,!1)+","+$(this.data.location.geo?.lon,!1)+`\r
`)),this.data.location?.geo?.lat&&this.data.location.geo.lon&&(e+="GEO:"+$(this.data.location.geo.lat,!1)+";"+$(this.data.location.geo.lon,!1)+`\r
`),this.data.description&&(e+="DESCRIPTION:"+$(this.data.description.plain,!1)+`\r
`,this.data.description.html&&(e+="X-ALT-DESC;FMTTYPE=text/html:"+$(this.data.description.html,!1)+`\r
`)),this.data.organizer&&(e+='ORGANIZER;CN="'+$(this.data.organizer.name,!0)+'"',this.data.organizer.sentBy&&(e+=';SENT-BY="mailto:'+$(this.data.organizer.sentBy,!0)+'"'),this.data.organizer.email&&this.data.organizer.mailto&&(e+=";EMAIL="+$(this.data.organizer.email,!1)),e+=":",this.data.organizer.email&&(e+="mailto:"+$(this.data.organizer.mailto||this.data.organizer.email,!1)),e+=`\r
`),this.data.attendees.forEach(function(t){e+=t.toString()}),this.data.alarms.forEach(function(t){e+=t.toString()}),this.data.categories.length>0&&(e+="CATEGORIES:"+this.data.categories.map(t=>t.toString()).join()+`\r
`),this.data.url&&(e+="URL;VALUE=URI:"+$(this.data.url,!1)+`\r
`),this.data.attachments.length>0&&this.data.attachments.forEach(t=>{e+="ATTACH:"+$(t,!1)+`\r
`}),this.data.status&&(e+="STATUS:"+this.data.status.toUpperCase()+`\r
`),this.data.busystatus&&(e+="X-MICROSOFT-CDO-BUSYSTATUS:"+this.data.busystatus.toUpperCase()+`\r
`),this.data.priority!==null&&(e+="PRIORITY:"+this.data.priority+`\r
`),e+=An(this.data),this.data.created&&(e+="CREATED:"+xe(this.calendar.timezone(),this.data.created)+`\r
`),this.data.lastModified&&(e+="LAST-MODIFIED:"+xe(this.calendar.timezone(),this.data.lastModified)+`\r
`),this.data.class&&(e+="CLASS:"+this.data.class.toUpperCase()+`\r
`),e+=`END:VEVENT\r
`,e}transparency(e){return e===void 0?this.data.transparency:e?(this.data.transparency=ye(ni,e),this):(this.data.transparency=null,this)}uid(e){return e===void 0?this.id():this.id(e)}url(e){return e===void 0?this.data.url:(this.data.url=e?String(e):null,this)}x(e,t){return e===void 0?be(this.data):(typeof e=="string"&&typeof t=="string"&&be(this.data,e,t),typeof e=="object"&&be(this.data,e),this)}swapStartAndEndIfRequired(){if(this.data.start&&this.data.end&&ur(this.data.start).getTime()>ur(this.data.end).getTime()){let e=this.data.start;this.data.start=this.data.end,this.data.end=e}}},ri=(e=>(e.ADD="ADD",e.CANCEL="CANCEL",e.COUNTER="COUNTER",e.DECLINECOUNTER="DECLINECOUNTER",e.PUBLISH="PUBLISH",e.REFRESH="REFRESH",e.REPLY="REPLY",e.REQUEST="REQUEST",e))(ri||{}),Us=class{data;constructor(e={}){this.data={description:null,events:[],method:null,name:null,prodId:"//sebbo.net//ical-generator//EN",scale:null,source:null,timezone:null,ttl:null,url:null,x:[]},e.prodId!==void 0&&this.prodId(e.prodId),e.method!==void 0&&this.method(e.method),e.name!==void 0&&this.name(e.name),e.description!==void 0&&this.description(e.description),e.timezone!==void 0&&this.timezone(e.timezone),e.source!==void 0&&this.source(e.source),e.url!==void 0&&this.url(e.url),e.scale!==void 0&&this.scale(e.scale),e.ttl!==void 0&&this.ttl(e.ttl),e.events!==void 0&&this.events(e.events),e.x!==void 0&&this.x(e.x)}clear(){return this.data.events=[],this}createEvent(e){let t=e instanceof pr?e:new pr(e,this);return this.data.events.push(t),t}description(e){return e===void 0?this.data.description:(this.data.description=e?String(e):null,this)}events(e){return e?(e.forEach(t=>this.createEvent(t)),this):this.data.events}length(){return this.data.events.length}method(e){return e===void 0?this.data.method:e?(this.data.method=ye(ri,e),this):(this.data.method=null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e?String(e):null,this)}prodId(e){if(!e)return this.data.prodId;if(typeof e=="string")return this.data.prodId=e,this;if(typeof e!="object")throw new Error("`prodid` needs to be a string or an object!");if(!e.company)throw new Error("`prodid.company` is a mandatory item!");if(!e.product)throw new Error("`prodid.product` is a mandatory item!");let t=(e.language||"EN").toUpperCase();return this.data.prodId="//"+e.company+"//"+e.product+"//"+t,this}scale(e){return e===void 0?this.data.scale:(e===null?this.data.scale=null:this.data.scale=e.toUpperCase(),this)}source(e){return e===void 0?this.data.source:(this.data.source=e||null,this)}timezone(e){return e===void 0?this.data.timezone?.name||null:(e==="UTC"?this.data.timezone=null:typeof e=="string"?this.data.timezone={name:e}:e===null?this.data.timezone=null:this.data.timezone=e,this)}toJSON(){return Object.assign({},this.data,{events:this.data.events.map(e=>e.toJSON()),timezone:this.timezone(),x:this.x()})}toString(){let e="";return e=`BEGIN:VCALENDAR\r
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
`),this.data.ttl&&(e+="REFRESH-INTERVAL;VALUE=DURATION:"+Je(this.data.ttl)+`\r
`,e+="X-PUBLISHED-TTL:"+Je(this.data.ttl)+`\r
`),this.data.events.forEach(t=>e+=t.toString()),e+=An(this.data),e+="END:VCALENDAR",ks(e)}ttl(e){return e===void 0?this.data.ttl:(Bs(e)?this.data.ttl=e.asSeconds():e&&e>0?this.data.ttl=e:this.data.ttl=null,this)}url(e){return e===void 0?this.data.url:(this.data.url=e||null,this)}x(e,t){if(e===void 0)return be(this.data);if(typeof e=="string"&&typeof t=="string")be(this.data,e,t);else if(typeof e=="object")be(this.data,e);else throw new Error("Either key or value is not a string!");return this}};function Fs(e){return new Us(e)}var $s=Fs;function js(e){const{ctx:t,x:n,y:r,width:i,height:o,radius:a,color:s}=e;t.fillStyle=s,t.beginPath(),t.moveTo(n+a,r),t.lineTo(n+i-a,r),t.quadraticCurveTo(n+i,r,n+i,r+a),t.lineTo(n+i,r+o-a),t.quadraticCurveTo(n+i,r+o,n+i-a,r+o),t.lineTo(n+a,r+o),t.quadraticCurveTo(n,r+o,n,r+o-a),t.lineTo(n,r+a),t.quadraticCurveTo(n,r,n+a,r),t.closePath(),t.fill()}function _t(e,t,n,r){const o=document.createElement("canvas").getContext("2d");if(!o)return[];o.font=`${r}px '${n}'`;let a="";const s=[];for(const u of e){const h=a+u;o.measureText(h).width>t&&a!==""?(s.push(a),a=u):a=h}return a&&s.push(a),s}function ii(e){const{ctx:t,x:n,y:r,text:i,font:o,fontSize:a,color:s,align:u="left"}=e;t.fillStyle=s,t.font=`${a}px '${o}'`,t.textAlign=u||"left",t.fillText(i,n,r)}function Ws(e){const{ctx:t,x:n,y:r,width:i,height:o,title:a,professor:s,location:u,font:h,fontSize:d}=e,f=_t(a,i,h,d),m=_t(s,i,h,d),g=_t(u,i,h,d);let R=0;const p=[...f,...g,...m].slice(0,3);R=p.reduce((I,y,M)=>y===""?I+2:I+d,0);let v=(o-R)/2+d-7;p.forEach((I,y)=>{I!==""?(ii({ctx:t,x:n,y:r+v,text:I,font:h,fontSize:d,color:`rgba(0, 0, 0, ${y<f.length?.8:.5})`}),v+=d+5):v+=2})}async function oi(e){const{timetableName:t,lectures:n,timetableType:r,semesterName:i,semesterFontSize:o,tileFontSize:a}=e,s=["#F2CECE","#F4B3AE","#F2BCA0","#F0D3AB","#F1E1A9","#f4f2b3","#dbf4be","#beedd7","#b7e2de","#c9eaf4","#B4D3ED","#B9C5ED","#CCC6ED","#D8C1F0","#EBCAEF","#f4badb"],u=`Image_template_${r}.png`,h=new Image;h.src=u,await new Promise((g,R)=>{h.onload=g,h.onerror=R});const d=await cr.loadImage(u),f=cr.createCanvas(d.width,d.height),m=f.getContext("2d");m.drawImage(d,0,0),ii({ctx:m,x:r==="5days"?952:1302,y:78,text:i+" "+t,font:"NotoSansKR",fontSize:o,color:"#CCCCCC",align:"right"});for(const g of n){const R=s[g.courseId%16]||"#F2CECE";for(const p of g.classes){const{day:T,begin:v,end:I}=p,[y,M,S,A]=[178*T+76,v*4/3-486,171,(I-v)*4/3-7];js({ctx:m,x:y,y:M,width:S,height:A,radius:4,color:R}),Ws({ctx:m,x:y+12,y:M+8,width:S-24,height:A-16,title:g.name,professor:Di(g.professors)||"",location:p.buildingCode+" "+p.roomName||"",font:"NotoSansKR",fontSize:a})}}return f}async function Hs(e){const n=(await oi(e)).toDataURL("image/png"),r=document.createElement("a");r.href=n,r.download=`${e.timetableName}.png`,r.click(),URL.revokeObjectURL(n)}async function qs(e){const n=(await oi(e)).toDataURL("image/png"),i=await(await fetch(n)).blob();if(!navigator.clipboard?.write)return;const o=new ClipboardItem({"image/png":i});await navigator.clipboard.write([o])}function Ys(e){const{name:t,lectures:n,semesterObject:r}=e,i=$s({name:t,prodId:"//SPARCS//OTL Plus",timezone:"Asia/Seoul"});for(const u of n)for(const h of u.classes){const d=h.buildingCode+" "+h.roomName,f=new Date(r.beginning),m=(h.day+1)%7,g=new Date(f),R=g.getDay(),p=(m+7-R)%7;g.setDate(g.getDate()+p);const T=Math.floor(h.begin/60),v=h.begin%60,I=Math.floor(h.end/60),y=h.end%60,M=new Date(g);M.setHours(T,v,0,0);const S=new Date(g);S.setHours(I,y,0,0),i.createEvent({start:M,end:S,summary:u.name,location:d,repeating:{freq:Rn.WEEKLY,until:new Date(r.end)},timezone:"Asia/Seoul"}).alarms([{type:In.display,trigger:900}])}const o=new Blob([i.toString()],{type:"text/calendar;charset=utf-8"}),a=URL.createObjectURL(o),s=document.createElement("a");s.href=a,s.download=`${t}.ics`,s.click(),URL.revokeObjectURL(a)}const Vs=E(L)`
    width: 100%;

    ${W.laptop} {
        height: 56px;
        flex-wrap: wrap;
        align-items: center;
    }

    ${W.tablet} {
        height: auto;
        flex-wrap: nowrap;
        align-items: flex-start;
    }
`,en=E.button`
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
`;function un({timetableName:e,timetableLectures:t,year:n,semester:r}){const{t:i}=Ae(),o=je(),a=$e("tablet"),{query:s}=le("GET","/semesters"),[u,h]=l.useState("idle"),d=l.useMemo(()=>s?s.data?.semesters.find(f=>f.year===n&&f.semester===r):null,[s.data,n,r]);return l.useEffect(()=>{if(u.startsWith("success")){const f=setTimeout(()=>{h("idle")},500);return()=>clearTimeout(f)}},[u]),b(Vs,{direction:a?"row":"column",gap:8,children:[b(en,{onClick:()=>{u==="idle"&&(qs({timetableName:e,lectures:t,timetableType:"5days",semesterName:n+" "+tn(r),semesterFontSize:30,tileFontSize:20}),h("successCopyImage"))},children:[c(re,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:u=="successCopyImage"?c(Wt,{}):c(vn,{})}),!a&&c("span",{children:i("timetable.copyImage")})]}),b(en,{onClick:()=>{u==="idle"&&(Hs({timetableName:e,lectures:t,timetableType:"5days",semesterName:n+" "+tn(r),semesterFontSize:30,tileFontSize:20}),h("successDownloadImage"))},children:[c(re,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:u=="successDownloadImage"?c(Wt,{}):c(Ni,{})}),!a&&c("span",{children:i("timetable.exportImage")})]}),b(en,{onClick:()=>{if(u==="idle"){if(!d)return;Ys({name:e,lectures:t,semesterObject:{beginning:new Date(d.beginning),end:new Date(d.end)}}),h("successDownloadCalendar")}},children:[c(re,{size:16,color:o.colors.Highlight.default,children:u=="successDownloadCalendar"?c(Wt,{}):c(Ii,{})}),!a&&c("span",{children:i("timetable.exportICal")})]})]})}const Gs=E.div`
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

    ${W.laptop} {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`;function gr({timetableName:e,timetableLectures:t,hover:n,setHover:r,year:i,semester:o}){const a=$e("laptop");return b(Gs,{children:[!a&&c(Ms,{timetableLectures:t,hover:n,setHover:r}),c(gs,{hover:n,setHover:r,timetableLectures:t}),!a&&c(ft,{direction:"row"}),c(ys,{timetableLectures:t,hover:n,setHover:r}),!a&&c(ft,{direction:"row"}),!a&&c(Ts,{timetableLectures:t,hover:n,setHover:r}),!a&&c(ft,{direction:"row"}),!a&&c(un,{timetableName:e,timetableLectures:t,year:i,semester:o})]})}const Xs=E(L)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${W.tablet} {
        padding: 8px;
    }

    ${W.mobile} {
        padding: 0 8px 8px 8px;
    }
`,mr=E(L)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 16px;
    border-radius: 12px;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${W.desktop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
    }

    ${W.tablet} {
        flex: 1 1 0;
        min-height: 0;
        height: 100%;
    }
`,vr=E(L)`
    border-radius: 12px;
    width: fit-content;
    align-self: stretch; /* 부모 Flex의 align-items: stretch에 맞춰 세로 길이 맞춤 */

    ${W.laptop} {
        max-width: none;
    }

    ${W.tablet} {
        width: 100%;
        max-width: none;
        flex: 1 0 0;
    }
`,yr=E(L)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px;
    flex: 1;
    min-height: 0;

    ${W.laptop} {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
    }
`,Ks=E.div`
    width: 380px;
    height: 100%;
    display: flex;

    ${W.desktop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
    }

    ${W.laptop} {
        width: 300px;
    }
`,br=E.div`
    width: 300px;
    height: 100%;
    display: flex;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    ${W.desktop} {
        width: 380px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
    }

    ${W.laptop} {
        width: 300px;
    }

    ${W.tablet} {
        width: 100%;
    }
`,Qs=E.div`
    ${W.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
    }
`,wr=E(L)`
    flex: 1;
    min-height: 0;

    ${W.laptop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
    }
`,xr=E.div`
    ${W.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 12px;
    }

    ${W.tablet} {
        height: auto;
        padding: 8px;
    }
`,Js=E(L)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
`,yl=gi(function(){const t=hn(),n=je(),r=$e("tablet"),i=$e("laptop"),o=$e("desktop"),a=l.useRef(null),s=l.useRef(null),u=l.useRef(null),[h,d]=l.useState(null),[f,m]=l.useState(null),[g,R]=l.useState(null),[p,T]=l.useState(null),[v,I]=l.useState(""),[y,M]=l.useState(-1),[S,A]=l.useState(1),[N,w]=l.useState(0),[D,B]=l.useState(0),[k,q]=l.useState(!1),{query:Y}=le("GET",`/timetables/${p}`,{enabled:p!==null}),{query:V,setParams:ie}=le("GET","/timetables/my-timetable",{enabled:p===null}),G=p===null?V.data?.lectures??[]:Y.data?.lectures??[],{requestFunction:X}=le("PATCH",`/timetables/${p}`,{onSuccess:()=>{t.invalidateQueries({queryKey:[`/timetables/${p}`]}).then(()=>{m(null),d(null)})}}),K=l.useCallback(H=>{X({action:"delete",lectureId:H})},[X]);return l.useEffect(()=>{d(null),m(null)},[k]),l.useEffect(()=>{function H(){s.current&&(w(s.current.offsetWidth),B(s.current.offsetHeight))}return H(),window.addEventListener("resize",H),()=>window.removeEventListener("resize",H)},[k]),l.useEffect(()=>{const H=oe=>{a.current&&!a.current.contains(oe.target)&&s.current&&!s.current.contains(oe.target)&&u.current&&u.current.contains(oe.target)&&m(null)};return document.addEventListener("mousedown",H),()=>document.removeEventListener("mousedown",H)},[]),l.useEffect(()=>{m(null),d(null),y!==-1&&ie({year:y,semester:S})},[y,S]),l.useEffect(()=>{m(null),d(null)},[p]),l.useEffect(()=>{g!==null&&r&&q(!0)},[g]),c(Xs,{direction:r?"column":"row",align:"stretch",justify:"center",gap:r?8:12,flex:"1 0 0",ref:u,children:r?b(et,{children:[b(vr,{direction:"column",gap:0,align:"stretch",justify:"stretch",style:k?{flex:"1 1 0",minHeight:0}:void 0,children:[c(ir,{timeTableLectures:G,currentTimetableId:p,setCurrentTimetableId:T,setCurrentTimetableName:I,year:y,semester:S,setYear:M,setSemester:A}),c(yr,{direction:"column",gap:12,align:"stretch",justify:"flex-start",flex:"1 0 0",children:c(wr,{direction:"column",gap:0,ref:s,children:c($n,{cellWidth:(N-60)/5,fullHeight:D-60,lectureSummary:G,setTimeFilter:R,hover:h,setHover:d,selected:f,setSelected:m,removeFunction:p===null?void 0:K})})})]}),c(xr,{children:c(gr,{timetableName:v,timetableLectures:G,hover:h,setHover:d,year:y,semester:S})}),b(Js,{direction:"row",gap:0,children:[c(un,{timetableName:v,timetableLectures:G,year:y,semester:S}),b(L,{direction:"row",gap:4,align:"center",style:{height:"100%"},onClick:()=>{q(!k)},children:[c(re,{size:16,color:n.colors.Highlight.default,children:c(mi,{})}),c(P,{type:"Normal",color:"Highlight.default",children:k?"검색 닫기":"과목 검색하기"})]})]}),k&&c(mr,{direction:"row",align:"flex-start",gap:12,ref:a,children:c(br,{children:c(qn,{timetableLectures:G,year:y,semester:S,hoveredLecture:h,selectedLecture:f,setSelectedLecture:m,setHoveredLecture:d,timeFilter:g,setTimeFilter:R,currentTimetableId:p})})}),f&&c(vi,{isOpen:!!f,onClose:()=>{},fullScreen:!0,header:!1,children:c(Wn,{selectedLecture:f||(h?.length==1?h[0]:null),year:y,semester:S,onMobileModalClose:()=>{d(null),m(null)},currentTimetableId:p,timetableLectures:G})})]}):b(et,{children:[b(mr,{direction:o?"column-reverse":"row",align:"flex-start",gap:12,ref:a,children:[i&&c(Qs,{children:c(un,{timetableName:v,timetableLectures:G,year:y,semester:S})}),c(br,{style:{overflow:"auto"},children:c(qn,{timetableLectures:G,year:y,semester:S,hoveredLecture:h,selectedLecture:f,setSelectedLecture:m,setHoveredLecture:d,timeFilter:g,setTimeFilter:R,currentTimetableId:p})}),!o&&c(ft,{direction:"column"}),c(Ks,{style:{overflow:"auto"},children:c(Wn,{selectedLecture:f||(h?.length==1?h[0]:null),year:y,semester:S})})]}),c(L,{direction:"row",gap:0,children:b(vr,{direction:"column",gap:0,children:[c(ir,{timeTableLectures:G,currentTimetableId:p,setCurrentTimetableId:T,setCurrentTimetableName:I,year:y,semester:S,setYear:M,setSemester:A}),b(yr,{direction:i?"column":"row",gap:i?12:30,align:"stretch",justify:"flex-start",flex:"1 0 0",children:[c(wr,{direction:"column",gap:0,ref:s,children:c($n,{cellWidth:100,fullHeight:i?D-60:D-36,lectureSummary:G,setTimeFilter:R,hover:h,setHover:d,selected:f,setSelected:m,removeFunction:p===null?void 0:K})}),!i&&c(ft,{direction:"column"}),c(xr,{children:c(gr,{timetableName:v,timetableLectures:G,hover:h,setHover:d,year:y,semester:S})})]})]})})]})})});export{yl as default};
//# sourceMappingURL=timetable-DWRnrh36.js.map
