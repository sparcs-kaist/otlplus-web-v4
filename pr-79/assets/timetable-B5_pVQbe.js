import{p as nt,R as se,r as l,L as pi,w as gi}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{a as w,j as c,F as et,u as je}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{n as T,F as L}from"./FlexWrapper-B6Hxm4Zw.js";import{C as an,S as mi}from"./proxy-BCgiqOFB.js";import{u as vn}from"./index-fEVa9lK7.js";import{M as vi}from"./Modal-D0Mn4PCS.js";import{S as ft}from"./StyledDivider-Bnwy1K8M.js";import{e as rt,t as Ze,g as $e,u as ue,I as ne,k as sn,q as Ye,W as Re,w as yi}from"./useIsDevice-CwVMVVDh.js";import{T as P}from"./Typography-DeI78L6T.js";import{c as bi,r as wi,a as xi,b as Ei,d as vt}from"./renderTargetArea-DcZbnpbA.js";import{u as Ie}from"./useTranslation-DrmvPmDd.js";import{A as yn,S as Ti,c as Si,C as Yt}from"./checkEmpty-5ZGhdEFv.js";import{R as Ci,F as bn,p as Di}from"./ReviewBlock-Du91PuqC.js";import{B as Vt,m as W}from"./media-MLnbxw48.js";import{u as Tr,b as Sr,C as Ri,S as Ai}from"./Credits-CBJsawJV.js";import{u as xt}from"./useUserStore-D_cVX4L6.js";import{L as ln}from"./LoadingCircle-CMtLreQR.js";import{a as ht}from"./index-Dp_NaqTT.js";import{I as tt}from"./IconButton-CzodoXoR.js";import"./env-DH6Q4_Mp.js";import"./infiniteQueryBehavior-__Ik2q0j.js";const Ii=rt(nt.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"})),wn=rt(nt.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),Cr=rt(nt.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"})),Ni=rt(nt.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),Mi=rt(nt.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),Li=rt(nt.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),ki=(e,t,n,r,i,o)=>{const s=[0];let a=0;for(let d=0;d<e;d++)t.includes(d+o)?(a+=n+i,s.push(a)):(a+=r+i,s.push(a));return s},$n=(e,t,n,r,i,o,s)=>{const a=ki(t,n,r,i,o,s);for(let d=0;d<t+1;d++){const h=a[d];if(h!==void 0&&h>e)return d-1}return t},Oi=T.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    height: fit-content;
`,Bi=T.div`
    padding-top: 15px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    gap: calc(var(--cell-height) * 2 - 11px);
    font-size: 8px;
    line-height: 11px;
`,zi=T.div`
    width: var(--cell-width);
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
    text-align: center;
`,Pi=T.div`
    display: inline-block;
    position: relative;
    user-select: none;
    touch-action: none;
`,Ui=({cellWidth:e=120,fullHeight:t=800.5,lectureSummary:n,setTimeFilter:r,hover:i,setHover:o,selected:s,setSelected:a,removeFunction:d})=>{const{t:h}=Ie(),u=5,f=5,m=8,p=l.useRef(null),A=[h("common.days.monday"),h("common.days.tuesday"),h("common.days.wednesday"),h("common.days.thursday"),h("common.days.friday")];bi(n);const g=32,b=24,E=l.useMemo(()=>t/32,[t]),x=l.useMemo(()=>({"--cell-height":`${E}px`,"--cell-width":`${e}px`,"--col-padding":`${u}px`}),[E,e,u]),[D,S]=l.useState(!1),[N,R]=l.useState(null),[M,v]=l.useState(null),[C,B]=l.useState(null),[k,F]=l.useState(new Map(Array.from({length:f},(z,U)=>[U,Array(g).fill(null)]))),Q=l.useRef(null),X=l.useRef(null),K=l.useRef(null);Q.current=N,X.current=M,K.current=C;const Se=l.useCallback(z=>{if(p.current&&i==null&&s==null){const U=p.current.getBoundingClientRect(),Y=z.clientX-U.left,y=z.clientY-U.top,I=Math.floor(y/E),O=$n(Y,f,[],0,e,u,0);I>=0&&I<g&&O>=0&&O<f&&(S(!0),R(I),v(I),B(O),a(null))}},[i,s,E,g,f,e,u,a]),J=l.useCallback(z=>{if(D&&p.current){const U=p.current.getBoundingClientRect(),Y=z.clientY-U.top,y=Math.floor(Y/E);y>=0&&y<g&&C!=null&&C>=0&&C<f&&y!==M&&v(y)}},[D,E,g,f,C,M]),_=l.useCallback(()=>{F(new Map(Array.from({length:f},(y,I)=>[I,Array(g).fill(null)])));const z=Q.current,U=X.current,Y=K.current;if(z!=null&&U!=null&&Y!=null){const y=Math.min(z,U),I=Math.max(z,U),O={day:Y,begin:y*30+480,end:(I+1)*30+480};r(O)}R(null),v(null),S(!1)},[f,g,r]),H=l.useCallback(z=>{if(p.current&&i==null&&s==null){const U=z.touches[0];if(!U)return;const Y=p.current.getBoundingClientRect(),y=U.clientX-Y.left,I=U.clientY-Y.top,O=Math.floor(I/E),G=$n(y,f,[],0,e,u,0);O>=0&&O<g&&G>=0&&G<f&&(S(!0),R(O),v(O),B(G),a(null))}},[i,s,E,g,f,e,u,a]),ee=l.useCallback(z=>{if(D&&p.current){const U=z.touches[0];if(!U)return;const Y=p.current.getBoundingClientRect(),y=U.clientY-Y.top,I=Math.floor(y/E);I>=0&&I<g&&C!=null&&C>=0&&C<f&&I!==M&&v(I)}},[D,E,g,f,C,M]),ce=l.useCallback(()=>{_()},[_]);l.useEffect(()=>(D&&window.addEventListener("mouseup",_),()=>{window.removeEventListener("mouseup",_)}),[D,_]);const q=(z,U,Y)=>{const y=new Map(Array.from({length:f},(I,O)=>[O,Array(g).fill(null)]));for(let I=z;I<U+1;I++)y.get(Y)[I]=!0;return y};l.useLayoutEffect(()=>{if(p.current&&D){const z=Math.min(N,M),U=Math.max(N,M),Y=q(z,U,C);F(Y)}},[M,N,D,C,f,g]);const V=l.useMemo(()=>wi(g,f,e,E,u,[],10,0),[g,f,e,E,u]),re=l.useMemo(()=>xi(n,e,E,u,s,a,i,o,D,d),[n,e,E,u,s,a,i,o,D,d]),we=l.useCallback(()=>{a(null)},[a]),ie=l.useCallback(z=>{z.stopPropagation(),_()},[_]);return w(Oi,{style:x,children:[c(Bi,{children:Array.from({length:b-m+1},(z,U)=>U+m).map(z=>c(P,{color:"Text.default",children:z%12||12},z))}),w(L,{direction:"column",gap:0,children:[c(L,{direction:"row",gap:5,children:A.map((z,U)=>z!=="none"&&c(zi,{style:z===""?{width:"10px"}:void 0,children:c(P,{color:"Text.default",children:z})},U))}),w(Pi,{ref:p,onClick:we,onMouseDown:Se,onMouseMove:J,onMouseUp:ie,onTouchStart:H,onTouchMove:ee,onTouchEnd:ce,children:[V,Ei(!0,k,"rgba(229, 76, 101, 0.5)",E,e,2,u,[],0,0),re]})]})]})},jn=se.memo(Ui);function Dr(e){return e.map(t=>t.name).join(", ")}function Fi(e){return e.slice().sort((n,r)=>{const i=n.day,o=r.day;return i!==o?i-o:n.begin-r.begin}).map(n=>n.str).join(" / ")}function $i(e){const t={};return e.forEach(n=>{const r=n.buildingCode,i=n.roomName;r in t?t[r]&&!t[r].includes(i)&&(t[r]=t[r].concat(`, ${i}`)):t[r]=i}),Object.entries(t).map(([n,r])=>`(${n}) ${r}`).join(" / ")}const ji=T(L)`
    width: 100%;
`,Wi=T(L)`
    width: 300px;
    padding: 10px;
`,Hi=T(L)`
    flex: 1 0 0;
`,Ve=T(P)`
    white-space: nowrap;
`,qi=({selectedLecture:e})=>{const{t}=Ie();return w(et,{children:[w(ji,{direction:"column",gap:8,children:[w(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.search.type")}),c(P,{type:"Normal",color:"Text.default",children:e?.type})]}),w(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.search.department")}),c(P,{type:"Normal",color:"Text.default",children:e?.department.name})]}),w(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.professor")}),c(P,{type:"Normal",color:"Text.default",children:Dr(e?.professors||[])})]}),w(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.room")}),c(P,{type:"Normal",color:"Text.default",children:$i(e?.classes||[])})]}),w(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.limit")}),c(P,{type:"Normal",color:"Text.default",children:e?.limitPeople})]}),w(L,{direction:"row",gap:6,children:[c(Ve,{type:"NormalBold",color:"Text.default",children:t("common.exam")}),c(P,{type:"Normal",color:"Text.default",children:Fi(e?.examTimes||[])})]})]}),c(Wi,{direction:"row",gap:0,justify:"space-around",align:"center",children:[[e?.classDuration,t("common.numClasses")],[e?.expDuration,t("common.numLabs")],e?.creditAU?[e?.creditAU,"AU"]:[e?.credit,t("common.credit")]].map(([n,r],i)=>w(Hi,{direction:"column",gap:0,align:"center",children:[c(P,{type:"Bigger",color:"Text.default",children:n}),c(P,{type:"Smaller",color:"Text.default",children:r})]},i))})]})},Yi=T(L)`
    width: 300px;
    padding: 10px;
`,Vi=T(L)`
    flex: 1 0 0;
`,Gi=T.div`
    width: 100%;
    min-height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.divider};
`,Xi=({selectedCourseId:e,selectedProfessorId:t})=>{const{t:n}=Ie(),[r,i]=l.useState(!1),{query:o,setParams:s,data:a}=Tr("GET","/reviews",{gcTime:0,infinites:["reviews"],limit:20}),{ref:d,inView:h}=Sr({threshold:0});return l.useEffect(()=>{i(!1);const u=setTimeout(()=>{s({mode:"default",courseId:e??void 0,professorId:t??void 0}),i(!0)},1e3);return()=>clearTimeout(u)},[e,t]),l.useEffect(()=>{h&&o.hasNextPage&&!o.isFetchingNextPage&&o.fetchNextPage()},[h,o]),!a||!r?c(ln,{}):w(et,{children:[c(L,{direction:"row",gap:0,justify:"center",align:"center",style:{width:"100%"},children:c(Yi,{direction:"row",gap:0,justify:"space-between",align:"center",children:[[Ze(a?.averageGrade,a?.reviews.length),n("common.grade")],[Ze(a?.averageLoad,a?.reviews.length),n("common.load")],[Ze(a?.averageSpeech,a?.reviews.length),n("common.speech")]].map(([u,f],m)=>w(Vi,{direction:"column",gap:0,align:"center",children:[c(P,{type:"Bigger",color:"Text.default",children:u}),c(P,{type:"Smaller",color:"Text.default",children:f})]},m))})}),c(Gi,{}),a?.reviews.map(u=>c(Ci,{review:u,linkToDictionary:!0},u.id)),o.hasNextPage&&c(ln,{ref:d})]})},Ki=T(L)`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Wn=T(L)`
    width: 100%;
`,Qi=T(L)`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    z-index: 10;
    padding-bottom: 10px;
`,Ji=T(L)`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 12px 0;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
`,Zi=T(pi)`
    text-decoration: none;
`,_i=T.a`
    text-decoration: none;
`,Hn=({setNonLoginTimetable:e,handleRemoveFromTimetable:t,selectedLecture:n,onMobileModalClose:r,year:i,semester:o,currentTimetableId:s,timetableLectures:a})=>{const d=vn(),h=je(),{t:u}=Ie(),{user:f,status:m}=xt(),p=$e("tablet"),{requestFunction:A}=ue("PATCH",`/timetables/${s}`,{onSuccess:()=>{d.invalidateQueries({queryKey:[`/timetables/${s}`]})}}),[g,b]=l.useState([]),{query:E,setParams:x}=ue("GET",`/users/${f?.id}/wishlist`,{enabled:m==="success"&&i!=-1});l.useEffect(()=>{i!==-1&&x({year:i,semester:o})},[i,o,s]),l.useEffect(()=>{E.data&&b(E.data.courses.flatMap(v=>v.lectures).map(v=>v.id))},[E.data]);const{requestFunction:D}=ue("PATCH",`/users/${f?.id}/wishlist`,{onSuccess:()=>{d.invalidateQueries({queryKey:[`/users/${f?.id}/wishlist`]})}}),S=l.useRef(null),N=v=>{const C={syy:String(i),smtDivCd:String(o),subjtCd:v.code,syllabusOpenYn:"0"};return`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${btoa(JSON.stringify(C))}`},R=async v=>{if(a){if(m!=="success"&&e!==void 0){if(a.some(C=>vt(C.classes,v.classes))){alert(u("timetable.addLectureConflict"));return}e(C=>[...C,v]);return}if(s){if(a.some(C=>vt(C.classes,v.classes))){alert(u("timetable.addLectureConflict"));return}}else{console.warn("No timetable selected");return}A({action:"add",lectureId:v.id})}},M=async(v,C)=>{m!=="idle"&&D({lectureId:C,mode:v?"delete":"add"})};return c(Ki,{direction:"column",gap:12,align:"center",justify:n?"start":"center",children:n?w(et,{children:[w(Qi,{direction:"column",gap:2,align:"center",justify:"center",children:[w(L,{direction:"row",align:"center",gap:8,justify:p?"space-between":"center",style:{width:"100%"},children:[p&&c("div",{style:{width:20}}),c(P,{type:"Bigger",color:"Text.default",children:n.name+n.subtitle}),p&&c(ne,{size:20,onClick:r,color:h.colors.Text.default,children:c(an,{})})]}),c(P,{type:"Big",color:"Text.default",children:n.code})]}),w(L,{direction:"row",gap:8,justify:"flex-end",style:{width:"100%"},children:[c(Zi,{to:`/dictionary?courseId=${n.courseId}`,children:c(P,{type:"Normal",color:"Highlight.default",style:{cursor:"pointer"},children:u("header.dictionary")})}),c(_i,{href:N(n),target:"_blank",children:c(P,{type:"Normal",color:"Highlight.default",style:{cursor:"pointer"},children:u("header.syllabus")})})]}),c(Wn,{direction:"column",gap:10,align:"center",children:c(qi,{selectedLecture:n})}),c(Wn,{ref:S,direction:"column",gap:10,children:c(Xi,{selectedCourseId:n.courseId,selectedProfessorId:n.professors[0]?.id??-1})}),p&&w(Ji,{direction:"row",gap:12,justify:"flex-end",children:[m==="success"&&!g.includes(n.id)&&w(Vt,{onClick:()=>{M(g.includes(n.id),n.id),r&&r()},children:[c(ne,{size:15,children:c(bn,{})}),c(P,{type:"NormalBold",children:u("timetable.addToWishlist")})]}),(s||m!=="success")&&!a?.some(v=>v.id===n.id)?w(Vt,{type:"selected",onClick:()=>{R(n),r&&r()},children:[c(ne,{size:15,children:c(yn,{})}),c(P,{type:"NormalBold",children:u("timetable.addToTimetable")})]}):w(Vt,{type:"selected",onClick:()=>{t&&t(n.id),r&&r()},children:[c(ne,{size:15,children:c(an,{})}),c(P,{type:"NormalBold",children:u("timetable.removeFromTimetable")})]})]})]}):c(Ri,{})})},eo=T.div`
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
`,to=T.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    flex-direction: row;
    justify-content: space-between;
`,no=T.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px 8px 18px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({isHighlighted:e,theme:t})=>e?t.colors.Background.Block.dark:t.colors.Background.Block.default};
    cursor: pointer;
`,qn=T.div`
    width: 95%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.Line.dark};
    align-self: center;
`,ro=({course:e,selectedLecture:t,hoveredLecture:n,isInWish:r,isWishlist:i,currentTimetableId:o,timetableLectures:s,isAddTimetablePending:a,setHoveredLecture:d,setSelectedLecture:h,handleLikeClick:u,handleAddToTimetable:f,t:m})=>{const{status:p}=xt(),A=je(),g=$e("tablet"),b=e.lectures[0]?.courseId??-1,E=t!=null&&t.courseId!==b?.3:1;return w(eo,{isSelected:t?.courseId===b,style:{opacity:E},children:[w(to,{children:[w(L,{direction:"row",gap:6,style:{opacity:e.completed?.3:1},children:[c(P,{type:"NormalBold",color:"Text.default",children:e.name}),c(P,{type:"Normal",color:"Text.default",children:e.code})]}),e.completed?c(P,{type:"Normal",color:"Text.default",children:m("common.completedCourse")}):c(P,{type:"Normal",color:"Highlight.default",children:e.type})]}),c(qn,{}),e.lectures.map((x,D)=>{const S=r.includes(x.id),N=n?.some(R=>R.id===x.id)===!0;return w(se.Fragment,{children:[w(no,{"data-lecture-id":x.id,onMouseEnter:()=>{g||d([x])},onMouseLeave:()=>{g||d(null)},onClick:()=>{if(x.id===t?.id){h(null);return}h(x)},isHighlighted:t?.id===x.id||N,children:[w(L,{direction:"column",gap:0,children:[g&&N&&w(P,{type:"Small",color:"Text.placeholder",children:[x.department.name," / ",x.type]}),w(L,{direction:"row",gap:6,style:{opacity:e.completed?.3:1},children:[w(P,{type:"NormalBold",color:"Text.default",children:[x.classNo," ",x.subtitle]}),c(P,{type:"Normal",color:"Text.default",children:Dr(x.professors)})]}),g&&N&&w(P,{type:"Small",color:"Text.placeholder",children:[x.classes[0]?.buildingName," ",x.classes[0]?.roomName," /"," ",x.limitPeople]})]}),w(L,{direction:"row",gap:6,onClick:R=>R.stopPropagation(),children:[!g&&p==="success"&&(S||i?c(ne,{size:15,color:A.colors.Highlight.default,onClick:()=>u(S,x.id),children:c(bn,{})}):c(ne,{size:15,color:A.colors.Text.default,onClick:()=>u(S,x.id),children:c(Cr,{})})),(!g||n?.some(R=>R.id===x.id))&&c("span",{title:o==null&&p==="success"?m("timetable.myTimeTableLectureAddWarning"):"",style:{opacity:o==null&&p==="success"||s.some(R=>vt(R.classes,x.classes))?.3:1,cursor:a?"wait":"pointer"},children:c(ne,{size:g?30:15,color:A.colors.Text.default,onClick:()=>f(x),children:c(yn,{})})})]})]}),D!==e.lectures.length-1&&c(qn,{})]},x.id)})]})},io=l.memo(ro,(e,t)=>{if(e.course!==t.course||e.isInWish!==t.isInWish||e.isWishlist!==t.isWishlist||e.currentTimetableId!==t.currentTimetableId||e.timetableLectures!==t.timetableLectures||e.isAddTimetablePending!==t.isAddTimetablePending||e.selectedLecture!==t.selectedLecture)return!1;const n=e.hoveredLecture,r=t.hoveredLecture;if(n===r)return!0;const i=e.course.lectures.map(a=>a.id),o=n?.some(a=>i.includes(a.id))??!1,s=r?.some(a=>i.includes(a.id))??!1;return!o&&!s}),oo=T(L)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,ao=T(L)`
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    max-height: 100%;
`,so=T(P)`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`,lo=T(L)`
    height: 36px;
`,co=T(L)`
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
`,uo=T(L)`
    width: 100%;
`,ho=T(L)`
    height: 100%;
    flex-grow: 1;

    ${W.tablet} {
        padding-right: 4px;
    }
`,fo=T.div`
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-right: 10px solid ${({theme:e})=>e.colors.Text.default};
    top: 50%;
    right: 0;
    position: sticky;
    transform: translateY(-50%);
`,po=T.div`
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
`,Gt=50,Yn=({timetableLectures:e,year:t,semester:n,setNonLoginTimetable:r,hoveredLecture:i,setHoveredLecture:o,selectedLecture:s,setSelectedLecture:a,timeFilter:d,setTimeFilter:h,currentTimetableId:u})=>{const{t:f}=Ie(),m=je(),{user:p,status:A}=xt(),g=vn(),{ref:b,inView:E}=Sr({threshold:0}),[x,D]=l.useState(!1),S=$e("tablet"),N=l.useCallback(y=>{if(!y)return y;const I=new Map;return y.courses.forEach(O=>{const G=I.get(O.id);if(!G){I.set(O.id,{...O,lectures:[...O.lectures]});return}const oe=new Set(G.lectures.map(de=>de.id)),xe=[...G.lectures];O.lectures.forEach(de=>{oe.has(de.id)||(oe.add(de.id),xe.push(de))}),I.set(O.id,{...G,lectures:xe})}),{...y,courses:Array.from(I.values())}},[]),{query:R,setParams:M,data:v}=Tr("GET","/lectures",{infinites:["courses"],limit:Gt,enabled:x,gcTime:0,select:N,iterate:y=>{let I=0;return y.courses.forEach(O=>{I+=O.lectures.length}),I<Gt?0:I}}),{mutation:C,requestFunction:B}=ue("PATCH",`/timetables/${u}`,{onSuccess:()=>{g.invalidateQueries({queryKey:[`/timetables/${u}`]})}}),[k,F]=l.useState({courses:[]}),[Q,X]=l.useState([]),[K,Se]=l.useState(0),J=l.useRef(null),_=l.useRef(null),H=l.useRef(null),[ee,ce]=l.useState(!1),{query:q,setParams:V}=ue("GET",`/users/${p?.id}/wishlist`,{enabled:A==="success"&&t!=-1}),{requestFunction:re}=ue("PATCH",`/users/${p?.id}/wishlist`,{onSuccess:()=>{g.invalidateQueries({queryKey:[`/users/${p?.id}/wishlist`]})}}),we=y=>{if(Si(y)){alert(f("common.search.empty"));return}ce(!1);const I={year:t,semester:n,...y,order:["code","popular","studentCount"][K]??"code",offset:0,limit:Gt,day:y.time?.day??void 0,begin:y.time?.begin??void 0,end:y.time?.end??void 0};M(I),D(!0)};l.useEffect(()=>{ce(!1),M(y=>({...y,order:["code","popular","studentCount"][K]??"code",offset:0})),D(!0)},[K]),l.useEffect(()=>{F({courses:[]}),t!==-1&&V({year:t,semester:n})},[t,n]),l.useEffect(()=>{E&&R.hasNextPage&&!R.isFetchingNextPage&&R.fetchNextPage()},[E]),l.useEffect(()=>{v!==void 0&&(F(v),ce(!1)),R.hasNextPage||D(!1)},[v]),l.useEffect(()=>{q.data!==void 0&&F(ee?q.data:v??{courses:[]})},[ee]),l.useEffect(()=>{q.data!==void 0&&(X(q.data.courses.flatMap(y=>y.lectures).map(y=>y.id)),ee&&F(q.data))},[q.data]),l.useEffect(()=>{const y=I=>{J.current&&!J.current.contains(I.target)&&_.current&&_.current.contains(I.target)&&a(null)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]);const ie=se.useMemo(()=>k.courses.flatMap(y=>y.lectures),[k.courses]),z=l.useCallback(()=>{if(!S||!H.current)return;const I=H.current.getBoundingClientRect(),O=I.top+I.height/2,G=document.elementFromPoint(I.left+50,O);if(!G)return;const oe=G.closest("[data-lecture-id]");if(oe){const xe=parseInt(oe.getAttribute("data-lecture-id")||"",10),de=ie.find(Ct=>Ct.id===xe);de&&o([de])}},[S,ie,o,a]);l.useEffect(()=>{if(!S||!H.current)return;const y=H.current;return y.addEventListener("scroll",z),()=>{y.removeEventListener("scroll",z)}},[S,z]),l.useEffect(()=>{if(!S||k.courses.length===0)return;let y;const I=requestAnimationFrame(()=>{y=requestAnimationFrame(()=>{z()})});return()=>{cancelAnimationFrame(I),cancelAnimationFrame(y)}},[S,k.courses,z]);const U=async(y,I)=>{if(A!=="idle"){X(y?O=>O.filter(G=>G!==I):O=>[...O,I]);try{re({lectureId:I,mode:y?"delete":"add"})}catch(O){console.error("Failed to update wishlist:",O),X(y?G=>[...G,I]:G=>G.filter(oe=>oe!==I))}}},Y=async y=>{if(A==="success"){if(!u){console.warn("No timetable selected");return}if(e.some(I=>vt(I.classes,y.classes))){alert(f("timetable.addLectureConflict"));return}B({action:"add",lectureId:y.id})}else{if(e.some(I=>vt(I.classes,y.classes))){alert(f("timetable.addLectureConflict"));return}r(I=>[...I,y])}};return w(oo,{direction:"column",justify:"stretch",align:"stretch",gap:8,ref:_,children:[c(ao,{direction:"row",justify:"stretch",gap:0,children:c(Ti,{options:["type","department","level","term","time"],timeFilter:d,setTimeFilter:h,onSearch:we})}),w(L,{direction:"row",gap:0,justify:A==="success"?"space-between":"flex-end",align:"center",children:[A==="success"&&w(po,{isSelected:ee,onClick:()=>{ce(y=>!y)},style:{paddingBlock:10},children:[c(ne,{size:15,color:m.colors.Highlight.default,children:ee?c(bn,{}):c(Cr,{})}),c(P,{type:"Normal",color:"Highlight.default",children:f("common.wishlist")})]}),k.courses.length!==0&&c(lo,{direction:"row",gap:0,children:c(Ai,{options:[f("dictionary.sortOptions.code"),f("dictionary.sortOptions.popularity"),f("dictionary.sortOptions.studentCount")],setSelectedOption:Se,selectedOption:K})})]}),k.courses.length!==0?c(co,{direction:"column",gap:0,ref:H,children:w(uo,{direction:"row",gap:0,children:[w(ho,{direction:"column",gap:12,ref:J,children:[k.courses.map(y=>c(io,{course:y,selectedLecture:s,hoveredLecture:i,isInWish:Q,isWishlist:ee,currentTimetableId:u,timetableLectures:e,isAddTimetablePending:C.isPending,setHoveredLecture:o,setSelectedLecture:a,handleLikeClick:U,handleAddToTimetable:Y,t:f},y.id)),!ee&&R.hasNextPage&&c(ln,{ref:b})]}),S&&c(fo,{})]})}):c(so,{type:"Bigger",color:"Text.placeholder",children:f("dictionary.noResults")})]})};function go(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.useMemo(()=>r=>{t.forEach(i=>i(r))},t)}const Pt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function it(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||t==="[object global]"}function xn(e){return"nodeType"in e}function he(e){var t,n;return e?it(e)?e:xn(e)&&(t=(n=e.ownerDocument)==null?void 0:n.defaultView)!=null?t:window:window}function En(e){const{Document:t}=he(e);return e instanceof t}function Et(e){return it(e)?!1:e instanceof he(e).HTMLElement}function Rr(e){return e instanceof he(e).SVGElement}function ot(e){return e?it(e)?e.document:xn(e)?En(e)?e:Et(e)||Rr(e)?e.ownerDocument:document:document:document}const Ae=Pt?l.useLayoutEffect:l.useEffect;function Tn(e){const t=l.useRef(e);return Ae(()=>{t.current=e}),l.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function mo(){const e=l.useRef(null),t=l.useCallback((r,i)=>{e.current=setInterval(r,i)},[]),n=l.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[t,n]}function yt(e,t){t===void 0&&(t=[e]);const n=l.useRef(e);return Ae(()=>{n.current!==e&&(n.current=e)},t),n}function Tt(e,t){const n=l.useRef();return l.useMemo(()=>{const r=e(n.current);return n.current=r,r},[...t])}function Mt(e){const t=Tn(e),n=l.useRef(null),r=l.useCallback(i=>{i!==n.current&&t?.(i,n.current),n.current=i},[]);return[n,r]}function cn(e){const t=l.useRef();return l.useEffect(()=>{t.current=e},[e]),t.current}let Xt={};function St(e,t){return l.useMemo(()=>{if(t)return t;const n=Xt[e]==null?0:Xt[e]+1;return Xt[e]=n,e+"-"+n},[e,t])}function Ar(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((o,s)=>{const a=Object.entries(s);for(const[d,h]of a){const u=o[d];u!=null&&(o[d]=u+e*h)}return o},{...t})}}const _e=Ar(1),Lt=Ar(-1);function vo(e){return"clientX"in e&&"clientY"in e}function Sn(e){if(!e)return!1;const{KeyboardEvent:t}=he(e.target);return t&&e instanceof t}function yo(e){if(!e)return!1;const{TouchEvent:t}=he(e.target);return t&&e instanceof t}function dn(e){if(yo(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return vo(e)?{x:e.clientX,y:e.clientY}:null}const kt=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[kt.Translate.toString(e),kt.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Vn="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function bo(e){return e.matches(Vn)?e:e.querySelector(Vn)}const wo={display:"none"};function xo(e){let{id:t,value:n}=e;return se.createElement("div",{id:t,style:wo},n)}function Eo(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;const i={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return se.createElement("div",{id:t,style:i,role:"status","aria-live":r,"aria-atomic":!0},n)}function To(){const[e,t]=l.useState("");return{announce:l.useCallback(r=>{r!=null&&t(r)},[]),announcement:e}}const Ir=l.createContext(null);function So(e){const t=l.useContext(Ir);l.useEffect(()=>{if(!t)throw new Error("useDndMonitor must be used within a children of <DndContext>");return t(e)},[e,t])}function Co(){const[e]=l.useState(()=>new Set),t=l.useCallback(r=>(e.add(r),()=>e.delete(r)),[e]);return[l.useCallback(r=>{let{type:i,event:o}=r;e.forEach(s=>{var a;return(a=s[i])==null?void 0:a.call(s,o)})},[e]),t]}const Do={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Ro={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Ao(e){let{announcements:t=Ro,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=Do}=e;const{announce:o,announcement:s}=To(),a=St("DndLiveRegion"),[d,h]=l.useState(!1);if(l.useEffect(()=>{h(!0)},[]),So(l.useMemo(()=>({onDragStart(f){let{active:m}=f;o(t.onDragStart({active:m}))},onDragMove(f){let{active:m,over:p}=f;t.onDragMove&&o(t.onDragMove({active:m,over:p}))},onDragOver(f){let{active:m,over:p}=f;o(t.onDragOver({active:m,over:p}))},onDragEnd(f){let{active:m,over:p}=f;o(t.onDragEnd({active:m,over:p}))},onDragCancel(f){let{active:m,over:p}=f;o(t.onDragCancel({active:m,over:p}))}}),[o,t])),!d)return null;const u=se.createElement(se.Fragment,null,se.createElement(xo,{id:r,value:i.draggable}),se.createElement(Eo,{id:a,announcement:s}));return n?ht.createPortal(u,n):u}var Z;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(Z||(Z={}));function Ot(){}function Gn(e,t){return l.useMemo(()=>({sensor:e,options:t??{}}),[e,t])}function Io(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l.useMemo(()=>[...t].filter(r=>r!=null),[...t])}const Te=Object.freeze({x:0,y:0});function No(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Mo(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Lo(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function ko(e,t){if(!e||e.length===0)return null;const[n]=e;return n[t]}function Xn(e,t,n){return t===void 0&&(t=e.left),n===void 0&&(n=e.top),{x:t+e.width*.5,y:n+e.height*.5}}const Oo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=Xn(t,t.left,t.top),o=[];for(const s of r){const{id:a}=s,d=n.get(a);if(d){const h=No(Xn(d),i);o.push({id:a,data:{droppableContainer:s,value:h}})}}return o.sort(Mo)};function Bo(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),s=i-r,a=o-n;if(r<i&&n<o){const d=t.width*t.height,h=e.width*e.height,u=s*a,f=u/(d+h-u);return Number(f.toFixed(4))}return 0}const zo=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const o of r){const{id:s}=o,a=n.get(s);if(a){const d=Bo(a,t);d>0&&i.push({id:s,data:{droppableContainer:o,value:d}})}}return i.sort(Lo)};function Po(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Nr(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Te}function Uo(e){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i.reduce((s,a)=>({...s,top:s.top+e*a.y,bottom:s.bottom+e*a.y,left:s.left+e*a.x,right:s.right+e*a.x}),{...n})}}const Fo=Uo(1);function $o(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function jo(e,t,n){const r=$o(t);if(!r)return e;const{scaleX:i,scaleY:o,x:s,y:a}=r,d=e.left-s-(1-i)*parseFloat(n),h=e.top-a-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),u=i?e.width/i:e.width,f=o?e.height/o:e.height;return{width:u,height:f,top:h,right:d+u,bottom:h+f,left:d}}const Wo={ignoreTransform:!1};function at(e,t){t===void 0&&(t=Wo);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:h,transformOrigin:u}=he(e).getComputedStyle(e);h&&(n=jo(n,h,u))}const{top:r,left:i,width:o,height:s,bottom:a,right:d}=n;return{top:r,left:i,width:o,height:s,bottom:a,right:d}}function Kn(e){return at(e,{ignoreTransform:!0})}function Ho(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function qo(e,t){return t===void 0&&(t=he(e).getComputedStyle(e)),t.position==="fixed"}function Yo(e,t){t===void 0&&(t=he(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const o=t[i];return typeof o=="string"?n.test(o):!1})}function Cn(e,t){const n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(En(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!Et(i)||Rr(i)||n.includes(i))return n;const o=he(e).getComputedStyle(i);return i!==e&&Yo(i,o)&&n.push(i),qo(i,o)?n:r(i.parentNode)}return e?r(e):n}function Mr(e){const[t]=Cn(e,1);return t??null}function Kt(e){return!Pt||!e?null:it(e)?e:xn(e)?En(e)||e===ot(e).scrollingElement?window:Et(e)?e:null:null}function Lr(e){return it(e)?e.scrollX:e.scrollLeft}function kr(e){return it(e)?e.scrollY:e.scrollTop}function un(e){return{x:Lr(e),y:kr(e)}}var te;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(te||(te={}));function Or(e){return!Pt||!e?!1:e===document.scrollingElement}function Br(e){const t={x:0,y:0},n=Or(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height},i=e.scrollTop<=t.y,o=e.scrollLeft<=t.x,s=e.scrollTop>=r.y,a=e.scrollLeft>=r.x;return{isTop:i,isLeft:o,isBottom:s,isRight:a,maxScroll:r,minScroll:t}}const Vo={x:.2,y:.2};function Go(e,t,n,r,i){let{top:o,left:s,right:a,bottom:d}=n;r===void 0&&(r=10),i===void 0&&(i=Vo);const{isTop:h,isBottom:u,isLeft:f,isRight:m}=Br(e),p={x:0,y:0},A={x:0,y:0},g={height:t.height*i.y,width:t.width*i.x};return!h&&o<=t.top+g.height?(p.y=te.Backward,A.y=r*Math.abs((t.top+g.height-o)/g.height)):!u&&d>=t.bottom-g.height&&(p.y=te.Forward,A.y=r*Math.abs((t.bottom-g.height-d)/g.height)),!m&&a>=t.right-g.width?(p.x=te.Forward,A.x=r*Math.abs((t.right-g.width-a)/g.width)):!f&&s<=t.left+g.width&&(p.x=te.Backward,A.x=r*Math.abs((t.left+g.width-s)/g.width)),{direction:p,speed:A}}function Xo(e){if(e===document.scrollingElement){const{innerWidth:o,innerHeight:s}=window;return{top:0,left:0,right:o,bottom:s,width:o,height:s}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function zr(e){return e.reduce((t,n)=>_e(t,un(n)),Te)}function Ko(e){return e.reduce((t,n)=>t+Lr(n),0)}function Qo(e){return e.reduce((t,n)=>t+kr(n),0)}function Jo(e,t){if(t===void 0&&(t=at),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);Mr(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Zo=[["x",["left","right"],Ko],["y",["top","bottom"],Qo]];class Dn{constructor(t,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Cn(n),i=zr(r);this.rect={...t},this.width=t.width,this.height=t.height;for(const[o,s,a]of Zo)for(const d of s)Object.defineProperty(this,d,{get:()=>{const h=a(r),u=i[o]-h;return this.rect[d]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class pt{constructor(t){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=t}add(t,n,r){var i;(i=this.target)==null||i.addEventListener(t,n,r),this.listeners.push([t,n,r])}}function _o(e){const{EventTarget:t}=he(e);return e instanceof t?e:ot(e)}function Qt(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return typeof t=="number"?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t?r>t.y:!1}var ve;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(ve||(ve={}));function Qn(e){e.preventDefault()}function ea(e){e.stopPropagation()}var j;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(j||(j={}));const Pr={start:[j.Space,j.Enter],cancel:[j.Esc],end:[j.Space,j.Enter,j.Tab]},ta=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case j.Right:return{...n,x:n.x+25};case j.Left:return{...n,x:n.x-25};case j.Down:return{...n,y:n.y+25};case j.Up:return{...n,y:n.y-25}}};class Ur{constructor(t){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=t;const{event:{target:n}}=t;this.props=t,this.listeners=new pt(ot(n)),this.windowListeners=new pt(he(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(ve.Resize,this.handleCancel),this.windowListeners.add(ve.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(ve.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:t,onStart:n}=this.props,r=t.node.current;r&&Jo(r),n(Te)}handleKeyDown(t){if(Sn(t)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:o=Pr,coordinateGetter:s=ta,scrollBehavior:a="smooth"}=i,{code:d}=t;if(o.end.includes(d)){this.handleEnd(t);return}if(o.cancel.includes(d)){this.handleCancel(t);return}const{collisionRect:h}=r.current,u=h?{x:h.left,y:h.top}:Te;this.referenceCoordinates||(this.referenceCoordinates=u);const f=s(t,{active:n,context:r.current,currentCoordinates:u});if(f){const m=Lt(f,u),p={x:0,y:0},{scrollableAncestors:A}=r.current;for(const g of A){const b=t.code,{isTop:E,isRight:x,isLeft:D,isBottom:S,maxScroll:N,minScroll:R}=Br(g),M=Xo(g),v={x:Math.min(b===j.Right?M.right-M.width/2:M.right,Math.max(b===j.Right?M.left:M.left+M.width/2,f.x)),y:Math.min(b===j.Down?M.bottom-M.height/2:M.bottom,Math.max(b===j.Down?M.top:M.top+M.height/2,f.y))},C=b===j.Right&&!x||b===j.Left&&!D,B=b===j.Down&&!S||b===j.Up&&!E;if(C&&v.x!==f.x){const k=g.scrollLeft+m.x,F=b===j.Right&&k<=N.x||b===j.Left&&k>=R.x;if(F&&!m.y){g.scrollTo({left:k,behavior:a});return}F?p.x=g.scrollLeft-k:p.x=b===j.Right?g.scrollLeft-N.x:g.scrollLeft-R.x,p.x&&g.scrollBy({left:-p.x,behavior:a});break}else if(B&&v.y!==f.y){const k=g.scrollTop+m.y,F=b===j.Down&&k<=N.y||b===j.Up&&k>=R.y;if(F&&!m.x){g.scrollTo({top:k,behavior:a});return}F?p.y=g.scrollTop-k:p.y=b===j.Down?g.scrollTop-N.y:g.scrollTop-R.y,p.y&&g.scrollBy({top:-p.y,behavior:a});break}}this.handleMove(t,_e(Lt(f,this.referenceCoordinates),p))}}}handleMove(t,n){const{onMove:r}=this.props;t.preventDefault(),r(n)}handleEnd(t){const{onEnd:n}=this.props;t.preventDefault(),this.detach(),n()}handleCancel(t){const{onCancel:n}=this.props;t.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Ur.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=Pr,onActivation:i}=t,{active:o}=n;const{code:s}=e.nativeEvent;if(r.start.includes(s)){const a=o.activatorNode.current;return a&&e.target!==a?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function Jn(e){return!!(e&&"distance"in e)}function Zn(e){return!!(e&&"delay"in e)}class Rn{constructor(t,n,r){var i;r===void 0&&(r=_o(t.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=t,this.events=n;const{event:o}=t,{target:s}=o;this.props=t,this.events=n,this.document=ot(s),this.documentListeners=new pt(this.document),this.listeners=new pt(r),this.windowListeners=new pt(he(s)),this.initialCoordinates=(i=dn(o))!=null?i:Te,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:t,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(t.move.name,this.handleMove,{passive:!1}),this.listeners.add(t.end.name,this.handleEnd),t.cancel&&this.listeners.add(t.cancel.name,this.handleCancel),this.windowListeners.add(ve.Resize,this.handleCancel),this.windowListeners.add(ve.DragStart,Qn),this.windowListeners.add(ve.VisibilityChange,this.handleCancel),this.windowListeners.add(ve.ContextMenu,Qn),this.documentListeners.add(ve.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Zn(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(Jn(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(t,n){const{active:r,onPending:i}=this.props;i(r,t,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:t}=this,{onStart:n}=this.props;t&&(this.activated=!0,this.documentListeners.add(ve.Click,ea,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(ve.SelectionChange,this.removeTextSelection),n(t))}handleMove(t){var n;const{activated:r,initialCoordinates:i,props:o}=this,{onMove:s,options:{activationConstraint:a}}=o;if(!i)return;const d=(n=dn(t))!=null?n:Te,h=Lt(i,d);if(!r&&a){if(Jn(a)){if(a.tolerance!=null&&Qt(h,a.tolerance))return this.handleCancel();if(Qt(h,a.distance))return this.handleStart()}if(Zn(a)&&Qt(h,a.tolerance))return this.handleCancel();this.handlePending(a,h);return}t.cancelable&&t.preventDefault(),s(d)}handleEnd(){const{onAbort:t,onEnd:n}=this.props;this.detach(),this.activated||t(this.props.active),n()}handleCancel(){const{onAbort:t,onCancel:n}=this.props;this.detach(),this.activated||t(this.props.active),n()}handleKeydown(t){t.code===j.Esc&&this.handleCancel()}removeTextSelection(){var t;(t=this.document.getSelection())==null||t.removeAllRanges()}}const na={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class An extends Rn{constructor(t){const{event:n}=t,r=ot(n.target);super(t,na,r)}}An.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];const ra={move:{name:"mousemove"},end:{name:"mouseup"}};var hn;(function(e){e[e.RightClick=2]="RightClick"})(hn||(hn={}));class ia extends Rn{constructor(t){super(t,ra,ot(t.event.target))}}ia.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===hn.RightClick?!1:(r?.({event:n}),!0)}}];const Jt={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Fr extends Rn{constructor(t){super(t,Jt)}static setup(){return window.addEventListener(Jt.move.name,t,{capture:!1,passive:!1}),function(){window.removeEventListener(Jt.move.name,t)};function t(){}}}Fr.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var gt;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(gt||(gt={}));var Bt;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(Bt||(Bt={}));function oa(e){let{acceleration:t,activator:n=gt.Pointer,canScroll:r,draggingRect:i,enabled:o,interval:s=5,order:a=Bt.TreeOrder,pointerCoordinates:d,scrollableAncestors:h,scrollableAncestorRects:u,delta:f,threshold:m}=e;const p=sa({delta:f,disabled:!o}),[A,g]=mo(),b=l.useRef({x:0,y:0}),E=l.useRef({x:0,y:0}),x=l.useMemo(()=>{switch(n){case gt.Pointer:return d?{top:d.y,bottom:d.y,left:d.x,right:d.x}:null;case gt.DraggableRect:return i}},[n,i,d]),D=l.useRef(null),S=l.useCallback(()=>{const R=D.current;if(!R)return;const M=b.current.x*E.current.x,v=b.current.y*E.current.y;R.scrollBy(M,v)},[]),N=l.useMemo(()=>a===Bt.TreeOrder?[...h].reverse():h,[a,h]);l.useEffect(()=>{if(!o||!h.length||!x){g();return}for(const R of N){if(r?.(R)===!1)continue;const M=h.indexOf(R),v=u[M];if(!v)continue;const{direction:C,speed:B}=Go(R,v,x,t,m);for(const k of["x","y"])p[k][C[k]]||(B[k]=0,C[k]=0);if(B.x>0||B.y>0){g(),D.current=R,A(S,s),b.current=B,E.current=C;return}}b.current={x:0,y:0},E.current={x:0,y:0},g()},[t,S,r,g,o,s,JSON.stringify(x),JSON.stringify(p),A,h,N,u,JSON.stringify(m)])}const aa={x:{[te.Backward]:!1,[te.Forward]:!1},y:{[te.Backward]:!1,[te.Forward]:!1}};function sa(e){let{delta:t,disabled:n}=e;const r=cn(t);return Tt(i=>{if(n||!r||!i)return aa;const o={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[te.Backward]:i.x[te.Backward]||o.x===-1,[te.Forward]:i.x[te.Forward]||o.x===1},y:{[te.Backward]:i.y[te.Backward]||o.y===-1,[te.Forward]:i.y[te.Forward]||o.y===1}}},[n,t,r])}function la(e,t){const n=t!=null?e.get(t):void 0,r=n?n.node.current:null;return Tt(i=>{var o;return t==null?null:(o=r??i)!=null?o:null},[r,t])}function ca(e,t){return l.useMemo(()=>e.reduce((n,r)=>{const{sensor:i}=r,o=i.activators.map(s=>({eventName:s.eventName,handler:t(s.handler,r)}));return[...n,...o]},[]),[e,t])}var bt;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(bt||(bt={}));var fn;(function(e){e.Optimized="optimized"})(fn||(fn={}));const _n=new Map;function da(e,t){let{dragging:n,dependencies:r,config:i}=t;const[o,s]=l.useState(null),{frequency:a,measure:d,strategy:h}=i,u=l.useRef(e),f=b(),m=yt(f),p=l.useCallback(function(E){E===void 0&&(E=[]),!m.current&&s(x=>x===null?E:x.concat(E.filter(D=>!x.includes(D))))},[m]),A=l.useRef(null),g=Tt(E=>{if(f&&!n)return _n;if(!E||E===_n||u.current!==e||o!=null){const x=new Map;for(let D of e){if(!D)continue;if(o&&o.length>0&&!o.includes(D.id)&&D.rect.current){x.set(D.id,D.rect.current);continue}const S=D.node.current,N=S?new Dn(d(S),S):null;D.rect.current=N,N&&x.set(D.id,N)}return x}return E},[e,o,n,f,d]);return l.useEffect(()=>{u.current=e},[e]),l.useEffect(()=>{f||p()},[n,f]),l.useEffect(()=>{o&&o.length>0&&s(null)},[JSON.stringify(o)]),l.useEffect(()=>{f||typeof a!="number"||A.current!==null||(A.current=setTimeout(()=>{p(),A.current=null},a))},[a,f,p,...r]),{droppableRects:g,measureDroppableContainers:p,measuringScheduled:o!=null};function b(){switch(h){case bt.Always:return!1;case bt.BeforeDragging:return n;default:return!n}}}function $r(e,t){return Tt(n=>e?n||(typeof t=="function"?t(e):e):null,[t,e])}function ua(e,t){return $r(e,t)}function ha(e){let{callback:t,disabled:n}=e;const r=Tn(t),i=l.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:o}=window;return new o(r)},[r,n]);return l.useEffect(()=>()=>i?.disconnect(),[i]),i}function Ut(e){let{callback:t,disabled:n}=e;const r=Tn(t),i=l.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:o}=window;return new o(r)},[n]);return l.useEffect(()=>()=>i?.disconnect(),[i]),i}function fa(e){return new Dn(at(e),e)}function er(e,t,n){t===void 0&&(t=fa);const[r,i]=l.useState(null);function o(){i(d=>{if(!e)return null;if(e.isConnected===!1){var h;return(h=d??n)!=null?h:null}const u=t(e);return JSON.stringify(d)===JSON.stringify(u)?d:u})}const s=ha({callback(d){if(e)for(const h of d){const{type:u,target:f}=h;if(u==="childList"&&f instanceof HTMLElement&&f.contains(e)){o();break}}}}),a=Ut({callback:o});return Ae(()=>{o(),e?(a?.observe(e),s?.observe(document.body,{childList:!0,subtree:!0})):(a?.disconnect(),s?.disconnect())},[e]),r}function pa(e){const t=$r(e);return Nr(e,t)}const tr=[];function ga(e){const t=l.useRef(e),n=Tt(r=>e?r&&r!==tr&&e&&t.current&&e.parentNode===t.current.parentNode?r:Cn(e):tr,[e]);return l.useEffect(()=>{t.current=e},[e]),n}function ma(e){const[t,n]=l.useState(null),r=l.useRef(e),i=l.useCallback(o=>{const s=Kt(o.target);s&&n(a=>a?(a.set(s,un(s)),new Map(a)):null)},[]);return l.useEffect(()=>{const o=r.current;if(e!==o){s(o);const a=e.map(d=>{const h=Kt(d);return h?(h.addEventListener("scroll",i,{passive:!0}),[h,un(h)]):null}).filter(d=>d!=null);n(a.length?new Map(a):null),r.current=e}return()=>{s(e),s(o)};function s(a){a.forEach(d=>{const h=Kt(d);h?.removeEventListener("scroll",i)})}},[i,e]),l.useMemo(()=>e.length?t?Array.from(t.values()).reduce((o,s)=>_e(o,s),Te):zr(e):Te,[e,t])}function nr(e,t){t===void 0&&(t=[]);const n=l.useRef(null);return l.useEffect(()=>{n.current=null},t),l.useEffect(()=>{const r=e!==Te;r&&!n.current&&(n.current=e),!r&&n.current&&(n.current=null)},[e]),n.current?Lt(e,n.current):Te}function va(e){l.useEffect(()=>{if(!Pt)return;const t=e.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of t)n?.()}},e.map(t=>{let{sensor:n}=t;return n}))}function ya(e,t){return l.useMemo(()=>e.reduce((n,r)=>{let{eventName:i,handler:o}=r;return n[i]=s=>{o(s,t)},n},{}),[e,t])}function jr(e){return l.useMemo(()=>e?Ho(e):null,[e])}const rr=[];function ba(e,t){t===void 0&&(t=at);const[n]=e,r=jr(n?he(n):null),[i,o]=l.useState(rr);function s(){o(()=>e.length?e.map(d=>Or(d)?r:new Dn(t(d),d)):rr)}const a=Ut({callback:s});return Ae(()=>{a?.disconnect(),s(),e.forEach(d=>a?.observe(d))},[e]),i}function wa(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return Et(t)?t:e}function xa(e){let{measure:t}=e;const[n,r]=l.useState(null),i=l.useCallback(h=>{for(const{target:u}of h)if(Et(u)){r(f=>{const m=t(u);return f?{...f,width:m.width,height:m.height}:m});break}},[t]),o=Ut({callback:i}),s=l.useCallback(h=>{const u=wa(h);o?.disconnect(),u&&o?.observe(u),r(u?t(u):null)},[t,o]),[a,d]=Mt(s);return l.useMemo(()=>({nodeRef:a,rect:n,setRef:d}),[n,a,d])}const Ea=[{sensor:An,options:{}},{sensor:Ur,options:{}}],Ta={current:{}},Nt={draggable:{measure:Kn},droppable:{measure:Kn,strategy:bt.WhileDragging,frequency:fn.Optimized},dragOverlay:{measure:at}};class mt extends Map{get(t){var n;return t!=null&&(n=super.get(t))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(t=>{let{disabled:n}=t;return!n})}getNodeFor(t){var n,r;return(n=(r=this.get(t))==null?void 0:r.node.current)!=null?n:void 0}}const Sa={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new mt,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ot},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Nt,measureDroppableContainers:Ot,windowRect:null,measuringScheduled:!1},Ca={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ot,draggableNodes:new Map,over:null,measureDroppableContainers:Ot},Ft=l.createContext(Ca),Wr=l.createContext(Sa);function Da(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new mt}}}function Ra(e,t){switch(t.type){case Z.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Z.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Z.DragEnd:case Z.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Z.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new mt(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Z.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const s=new mt(e.droppable.containers);return s.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:s}}}case Z.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new mt(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Aa(e){let{disabled:t}=e;const{active:n,activatorEvent:r,draggableNodes:i}=l.useContext(Ft),o=cn(r),s=cn(n?.id);return l.useEffect(()=>{if(!t&&!r&&o&&s!=null){if(!Sn(o)||document.activeElement===o.target)return;const a=i.get(s);if(!a)return;const{activatorNode:d,node:h}=a;if(!d.current&&!h.current)return;requestAnimationFrame(()=>{for(const u of[d.current,h.current]){if(!u)continue;const f=bo(u);if(f){f.focus();break}}})}},[r,t,i,s,o]),null}function Ia(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((i,o)=>o({transform:i,...r}),n):n}function Na(e){return l.useMemo(()=>({draggable:{...Nt.draggable,...e?.draggable},droppable:{...Nt.droppable,...e?.droppable},dragOverlay:{...Nt.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Ma(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e;const o=l.useRef(!1),{x:s,y:a}=typeof i=="boolean"?{x:i,y:i}:i;Ae(()=>{if(!s&&!a||!t){o.current=!1;return}if(o.current||!r)return;const h=t?.node.current;if(!h||h.isConnected===!1)return;const u=n(h),f=Nr(u,r);if(s||(f.x=0),a||(f.y=0),o.current=!0,Math.abs(f.x)>0||Math.abs(f.y)>0){const m=Mr(h);m&&m.scrollBy({top:f.y,left:f.x})}},[t,s,a,r,n])}const Hr=l.createContext({...Te,scaleX:1,scaleY:1});var Fe;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Fe||(Fe={}));const La=l.memo(function(t){var n,r,i,o;let{id:s,accessibility:a,autoScroll:d=!0,children:h,sensors:u=Ea,collisionDetection:f=zo,measuring:m,modifiers:p,...A}=t;const g=l.useReducer(Ra,void 0,Da),[b,E]=g,[x,D]=Co(),[S,N]=l.useState(Fe.Uninitialized),R=S===Fe.Initialized,{draggable:{active:M,nodes:v,translate:C},droppable:{containers:B}}=b,k=M!=null?v.get(M):null,F=l.useRef({initial:null,translated:null}),Q=l.useMemo(()=>{var le;return M!=null?{id:M,data:(le=k?.data)!=null?le:Ta,rect:F}:null},[M,k]),X=l.useRef(null),[K,Se]=l.useState(null),[J,_]=l.useState(null),H=yt(A,Object.values(A)),ee=St("DndDescribedBy",s),ce=l.useMemo(()=>B.getEnabled(),[B]),q=Na(m),{droppableRects:V,measureDroppableContainers:re,measuringScheduled:we}=da(ce,{dragging:R,dependencies:[C.x,C.y],config:q.droppable}),ie=la(v,M),z=l.useMemo(()=>J?dn(J):null,[J]),U=fi(),Y=ua(ie,q.draggable.measure);Ma({activeNode:M!=null?v.get(M):null,config:U.layoutShiftCompensation,initialRect:Y,measure:q.draggable.measure});const y=er(ie,q.draggable.measure,Y),I=er(ie?ie.parentElement:null),O=l.useRef({activatorEvent:null,active:null,activeNode:ie,collisionRect:null,collisions:null,droppableRects:V,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:B,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),G=B.getNodeFor((n=O.current.over)==null?void 0:n.id),oe=xa({measure:q.dragOverlay.measure}),xe=(r=oe.nodeRef.current)!=null?r:ie,de=R?(i=oe.rect)!=null?i:y:null,Ct=!!(oe.nodeRef.current&&oe.rect),kn=pa(Ct?null:y),Wt=jr(xe?he(xe):null),Oe=ga(R?G??ie:null),Dt=ba(Oe),Rt=Ia(p,{transform:{x:C.x-kn.x,y:C.y-kn.y,scaleX:1,scaleY:1},activatorEvent:J,active:Q,activeNodeRect:y,containerNodeRect:I,draggingNodeRect:de,over:O.current.over,overlayNodeRect:oe.rect,scrollableAncestors:Oe,scrollableAncestorRects:Dt,windowRect:Wt}),On=z?_e(z,C):null,Bn=ma(Oe),ai=nr(Bn),si=nr(Bn,[y]),We=_e(Rt,ai),He=de?Fo(de,Rt):null,st=Q&&He?f({active:Q,collisionRect:He,droppableRects:V,droppableContainers:ce,pointerCoordinates:On}):null,zn=ko(st,"id"),[Be,Pn]=l.useState(null),li=Ct?Rt:_e(Rt,si),ci=Po(li,(o=Be?.rect)!=null?o:null,y),Ht=l.useRef(null),Un=l.useCallback((le,fe)=>{let{sensor:pe,options:ze}=fe;if(X.current==null)return;const me=v.get(X.current);if(!me)return;const ge=le.nativeEvent,Ce=new pe({active:X.current,activeNode:me,event:ge,options:ze,context:O,onAbort(ae){if(!v.get(ae))return;const{onDragAbort:De}=H.current,Ne={id:ae};De?.(Ne),x({type:"onDragAbort",event:Ne})},onPending(ae,Pe,De,Ne){if(!v.get(ae))return;const{onDragPending:ct}=H.current,Ue={id:ae,constraint:Pe,initialCoordinates:De,offset:Ne};ct?.(Ue),x({type:"onDragPending",event:Ue})},onStart(ae){const Pe=X.current;if(Pe==null)return;const De=v.get(Pe);if(!De)return;const{onDragStart:Ne}=H.current,lt={activatorEvent:ge,active:{id:Pe,data:De.data,rect:F}};ht.unstable_batchedUpdates(()=>{Ne?.(lt),N(Fe.Initializing),E({type:Z.DragStart,initialCoordinates:ae,active:Pe}),x({type:"onDragStart",event:lt}),Se(Ht.current),_(ge)})},onMove(ae){E({type:Z.DragMove,coordinates:ae})},onEnd:qe(Z.DragEnd),onCancel:qe(Z.DragCancel)});Ht.current=Ce;function qe(ae){return async function(){const{active:De,collisions:Ne,over:lt,scrollAdjustedTranslate:ct}=O.current;let Ue=null;if(De&&ct){const{cancelDrop:dt}=H.current;Ue={activatorEvent:ge,active:De,collisions:Ne,delta:ct,over:lt},ae===Z.DragEnd&&typeof dt=="function"&&await Promise.resolve(dt(Ue))&&(ae=Z.DragCancel)}X.current=null,ht.unstable_batchedUpdates(()=>{E({type:ae}),N(Fe.Uninitialized),Pn(null),Se(null),_(null),Ht.current=null;const dt=ae===Z.DragEnd?"onDragEnd":"onDragCancel";if(Ue){const qt=H.current[dt];qt?.(Ue),x({type:dt,event:Ue})}})}}},[v]),di=l.useCallback((le,fe)=>(pe,ze)=>{const me=pe.nativeEvent,ge=v.get(ze);if(X.current!==null||!ge||me.dndKit||me.defaultPrevented)return;const Ce={active:ge};le(pe,fe.options,Ce)===!0&&(me.dndKit={capturedBy:fe.sensor},X.current=ze,Un(pe,fe))},[v,Un]),Fn=ca(u,di);va(u),Ae(()=>{y&&S===Fe.Initializing&&N(Fe.Initialized)},[y,S]),l.useEffect(()=>{const{onDragMove:le}=H.current,{active:fe,activatorEvent:pe,collisions:ze,over:me}=O.current;if(!fe||!pe)return;const ge={active:fe,activatorEvent:pe,collisions:ze,delta:{x:We.x,y:We.y},over:me};ht.unstable_batchedUpdates(()=>{le?.(ge),x({type:"onDragMove",event:ge})})},[We.x,We.y]),l.useEffect(()=>{const{active:le,activatorEvent:fe,collisions:pe,droppableContainers:ze,scrollAdjustedTranslate:me}=O.current;if(!le||X.current==null||!fe||!me)return;const{onDragOver:ge}=H.current,Ce=ze.get(zn),qe=Ce&&Ce.rect.current?{id:Ce.id,rect:Ce.rect.current,data:Ce.data,disabled:Ce.disabled}:null,ae={active:le,activatorEvent:fe,collisions:pe,delta:{x:me.x,y:me.y},over:qe};ht.unstable_batchedUpdates(()=>{Pn(qe),ge?.(ae),x({type:"onDragOver",event:ae})})},[zn]),Ae(()=>{O.current={activatorEvent:J,active:Q,activeNode:ie,collisionRect:He,collisions:st,droppableRects:V,draggableNodes:v,draggingNode:xe,draggingNodeRect:de,droppableContainers:B,over:Be,scrollableAncestors:Oe,scrollAdjustedTranslate:We},F.current={initial:de,translated:He}},[Q,ie,st,He,v,xe,de,V,B,Be,Oe,We]),oa({...U,delta:C,draggingRect:He,pointerCoordinates:On,scrollableAncestors:Oe,scrollableAncestorRects:Dt});const ui=l.useMemo(()=>({active:Q,activeNode:ie,activeNodeRect:y,activatorEvent:J,collisions:st,containerNodeRect:I,dragOverlay:oe,draggableNodes:v,droppableContainers:B,droppableRects:V,over:Be,measureDroppableContainers:re,scrollableAncestors:Oe,scrollableAncestorRects:Dt,measuringConfiguration:q,measuringScheduled:we,windowRect:Wt}),[Q,ie,y,J,st,I,oe,v,B,V,Be,re,Oe,Dt,q,we,Wt]),hi=l.useMemo(()=>({activatorEvent:J,activators:Fn,active:Q,activeNodeRect:y,ariaDescribedById:{draggable:ee},dispatch:E,draggableNodes:v,over:Be,measureDroppableContainers:re}),[J,Fn,Q,y,E,ee,v,Be,re]);return se.createElement(Ir.Provider,{value:D},se.createElement(Ft.Provider,{value:hi},se.createElement(Wr.Provider,{value:ui},se.createElement(Hr.Provider,{value:ci},h)),se.createElement(Aa,{disabled:a?.restoreFocus===!1})),se.createElement(Ao,{...a,hiddenTextDescribedById:ee}));function fi(){const le=K?.autoScrollEnabled===!1,fe=typeof d=="object"?d.enabled===!1:d===!1,pe=R&&!le&&!fe;return typeof d=="object"?{...d,enabled:pe}:{enabled:pe}}}),ka=l.createContext(null),ir="button",Oa="Draggable";function Ba(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e;const o=St(Oa),{activators:s,activatorEvent:a,active:d,activeNodeRect:h,ariaDescribedById:u,draggableNodes:f,over:m}=l.useContext(Ft),{role:p=ir,roleDescription:A="draggable",tabIndex:g=0}=i??{},b=d?.id===t,E=l.useContext(b?Hr:ka),[x,D]=Mt(),[S,N]=Mt(),R=ya(s,t),M=yt(n);Ae(()=>(f.set(t,{id:t,key:o,node:x,activatorNode:S,data:M}),()=>{const C=f.get(t);C&&C.key===o&&f.delete(t)}),[f,t]);const v=l.useMemo(()=>({role:p,tabIndex:g,"aria-disabled":r,"aria-pressed":b&&p===ir?!0:void 0,"aria-roledescription":A,"aria-describedby":u.draggable}),[r,p,g,b,A,u.draggable]);return{active:d,activatorEvent:a,activeNodeRect:h,attributes:v,isDragging:b,listeners:r?void 0:R,node:x,over:m,setNodeRef:D,setActivatorNodeRef:N,transform:E}}function za(){return l.useContext(Wr)}const Pa="Droppable",Ua={timeout:25};function Fa(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e;const o=St(Pa),{active:s,dispatch:a,over:d,measureDroppableContainers:h}=l.useContext(Ft),u=l.useRef({disabled:n}),f=l.useRef(!1),m=l.useRef(null),p=l.useRef(null),{disabled:A,updateMeasurementsFor:g,timeout:b}={...Ua,...i},E=yt(g??r),x=l.useCallback(()=>{if(!f.current){f.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{h(Array.isArray(E.current)?E.current:[E.current]),p.current=null},b)},[b]),D=Ut({callback:x,disabled:A||!s}),S=l.useCallback((v,C)=>{D&&(C&&(D.unobserve(C),f.current=!1),v&&D.observe(v))},[D]),[N,R]=Mt(S),M=yt(t);return l.useEffect(()=>{!D||!N.current||(D.disconnect(),f.current=!1,D.observe(N.current))},[N,D]),l.useEffect(()=>(a({type:Z.RegisterDroppable,element:{id:r,key:o,disabled:n,node:N,rect:m,data:M}}),()=>a({type:Z.UnregisterDroppable,key:o,id:r})),[r]),l.useEffect(()=>{n!==u.current.disabled&&(a({type:Z.SetDroppableDisabled,id:r,key:o,disabled:n}),u.current.disabled=n)},[r,o,n,a]),{active:s,rect:m,isOver:d?.id===r,node:N,over:d,setNodeRef:R}}const $a=e=>{let{transform:t}=e;return{...t,y:0}};function ja(e,t,n){const r={...e};return t.top+e.y<=n.top?r.y=n.top-t.top:t.bottom+e.y>=n.top+n.height&&(r.y=n.top+n.height-t.bottom),t.left+e.x<=n.left?r.x=n.left-t.left:t.right+e.x>=n.left+n.width&&(r.x=n.left+n.width-t.right),r}const Wa=e=>{let{containerNodeRect:t,draggingNodeRect:n,transform:r}=e;return!n||!t?r:ja(r,n,t)};function In(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function Ha(e,t){return e.reduce((n,r,i)=>{const o=t.get(r);return o&&(n[i]=o),n},Array(e.length))}function At(e){return e!==null&&e>=0}function qa(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Ya(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const It={scaleX:1,scaleY:1},Va=e=>{var t;let{rects:n,activeNodeRect:r,activeIndex:i,overIndex:o,index:s}=e;const a=(t=n[i])!=null?t:r;if(!a)return null;const d=Ga(n,s,i);if(s===i){const h=n[o];return h?{x:i<o?h.left+h.width-(a.left+a.width):h.left-a.left,y:0,...It}:null}return s>i&&s<=o?{x:-a.width-d,y:0,...It}:s<i&&s>=o?{x:a.width+d,y:0,...It}:{x:0,y:0,...It}};function Ga(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];return!r||!i&&!o?0:n<t?i?r.left-(i.left+i.width):o.left-(r.left+r.width):o?o.left-(r.left+r.width):r.left-(i.left+i.width)}const qr=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=In(t,r,n),s=t[i],a=o[i];return!a||!s?null:{x:a.left-s.left,y:a.top-s.top,scaleX:a.width/s.width,scaleY:a.height/s.height}},Yr="Sortable",Vr=se.createContext({activeIndex:-1,containerId:Yr,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:qr,disabled:{draggable:!1,droppable:!1}});function Xa(e){let{children:t,id:n,items:r,strategy:i=qr,disabled:o=!1}=e;const{active:s,dragOverlay:a,droppableRects:d,over:h,measureDroppableContainers:u}=za(),f=St(Yr,n),m=a.rect!==null,p=l.useMemo(()=>r.map(R=>typeof R=="object"&&"id"in R?R.id:R),[r]),A=s!=null,g=s?p.indexOf(s.id):-1,b=h?p.indexOf(h.id):-1,E=l.useRef(p),x=!qa(p,E.current),D=b!==-1&&g===-1||x,S=Ya(o);Ae(()=>{x&&A&&u(p)},[x,p,A,u]),l.useEffect(()=>{E.current=p},[p]);const N=l.useMemo(()=>({activeIndex:g,containerId:f,disabled:S,disableTransforms:D,items:p,overIndex:b,useDragOverlay:m,sortedRects:Ha(p,d),strategy:i}),[g,f,S.draggable,S.droppable,D,p,b,d,m,i]);return se.createElement(Vr.Provider,{value:N},t)}const Ka=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return In(n,r,i).indexOf(t)},Qa=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:s,previousItems:a,previousContainerId:d,transition:h}=e;return!h||!r||a!==o&&i===s?!1:n?!0:s!==i&&t===d},Ja={duration:200,easing:"ease"},Gr="transform",Za=kt.Transition.toString({property:Gr,duration:0,easing:"linear"}),_a={roleDescription:"sortable"};function es(e){let{disabled:t,index:n,node:r,rect:i}=e;const[o,s]=l.useState(null),a=l.useRef(n);return Ae(()=>{if(!t&&n!==a.current&&r.current){const d=i.current;if(d){const h=at(r.current,{ignoreTransform:!0}),u={x:d.left-h.left,y:d.top-h.top,scaleX:d.width/h.width,scaleY:d.height/h.height};(u.x||u.y)&&s(u)}}n!==a.current&&(a.current=n)},[t,n,r,i]),l.useEffect(()=>{o&&s(null)},[o]),o}function ts(e){let{animateLayoutChanges:t=Qa,attributes:n,disabled:r,data:i,getNewIndex:o=Ka,id:s,strategy:a,resizeObserverConfig:d,transition:h=Ja}=e;const{items:u,containerId:f,activeIndex:m,disabled:p,disableTransforms:A,sortedRects:g,overIndex:b,useDragOverlay:E,strategy:x}=l.useContext(Vr),D=ns(r,p),S=u.indexOf(s),N=l.useMemo(()=>({sortable:{containerId:f,index:S,items:u},...i}),[f,i,S,u]),R=l.useMemo(()=>u.slice(u.indexOf(s)),[u,s]),{rect:M,node:v,isOver:C,setNodeRef:B}=Fa({id:s,data:N,disabled:D.droppable,resizeObserverConfig:{updateMeasurementsFor:R,...d}}),{active:k,activatorEvent:F,activeNodeRect:Q,attributes:X,setNodeRef:K,listeners:Se,isDragging:J,over:_,setActivatorNodeRef:H,transform:ee}=Ba({id:s,data:N,attributes:{..._a,...n},disabled:D.draggable}),ce=go(B,K),q=!!k,V=q&&!A&&At(m)&&At(b),re=!E&&J,we=re&&V?ee:null,z=V?we??(a??x)({rects:g,activeNodeRect:Q,activeIndex:m,overIndex:b,index:S}):null,U=At(m)&&At(b)?o({id:s,items:u,activeIndex:m,overIndex:b}):S,Y=k?.id,y=l.useRef({activeId:Y,items:u,newIndex:U,containerId:f}),I=u!==y.current.items,O=t({active:k,containerId:f,isDragging:J,isSorting:q,id:s,index:S,items:u,newIndex:y.current.newIndex,previousItems:y.current.items,previousContainerId:y.current.containerId,transition:h,wasDragging:y.current.activeId!=null}),G=es({disabled:!O,index:S,node:v,rect:M});return l.useEffect(()=>{q&&y.current.newIndex!==U&&(y.current.newIndex=U),f!==y.current.containerId&&(y.current.containerId=f),u!==y.current.items&&(y.current.items=u)},[q,U,f,u]),l.useEffect(()=>{if(Y===y.current.activeId)return;if(Y!=null&&y.current.activeId==null){y.current.activeId=Y;return}const xe=setTimeout(()=>{y.current.activeId=Y},50);return()=>clearTimeout(xe)},[Y]),{active:k,activeIndex:m,attributes:X,data:N,rect:M,index:S,newIndex:U,items:u,isOver:C,isSorting:q,isDragging:J,listeners:Se,node:v,overIndex:b,over:_,setNodeRef:ce,setActivatorNodeRef:H,setDroppableNodeRef:B,setDraggableNodeRef:K,transform:G??z,transition:oe()};function oe(){if(G||I&&y.current.newIndex===S)return Za;if(!(re&&!Sn(F)||!h)&&(q||O))return kt.Transition.toString({...h,property:Gr})}}function ns(e,t){var n,r;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(n=e?.draggable)!=null?n:t.draggable,droppable:(r=e?.droppable)!=null?r:t.droppable}}j.Down,j.Right,j.Up,j.Left;const rs=T(L)`
    width: 150px;
    height: 32px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 3px 10px;
    flex-shrink: 0;
`;function is({year:e,semester:t,setYear:n,setSemester:r,setCurrentTimetableId:i}){const o=je(),{query:s}=ue("GET","/semesters");l.useEffect(()=>{const f=s.data?.semesters;if(f&&f.length>0){const m=f[f.length-1];m&&(n(m.year),r(m.semester))}},[s.data]);const{isFirstSemester:a,isLastSemester:d}=l.useMemo(()=>{if(!s.data)return{isFirstSemester:!1,isLastSemester:!1};const f=s.data.semesters,m=f[0],p=f[f.length-1];return!m||!p?{isFirstSemester:!0,isLastSemester:!0}:{isFirstSemester:e===m.year&&t===m.semester,isLastSemester:e===p.year&&t===p.semester}},[s.data,e,t]),h=()=>{a||(t===Ye.SPRING?(r(Ye.FALL),n(e-1)):r(Ye.SPRING),i(null))},u=()=>{d||(t===Ye.FALL?(r(Ye.SPRING),n(e+1)):r(Ye.FALL),i(null))};return w(rs,{direction:"row",gap:0,justify:"space-between",align:"center",children:[c(tt,{onClick:a?void 0:h,styles:{padding:2.5},children:c(ne,{size:20,color:a?o.colors.Text.disable:o.colors.Highlight.default,onClick:a?void 0:()=>{},children:c(Mi,{})})}),c(P,{color:"Highlight.default",children:e}),c(P,{color:"Highlight.default",children:sn(t)}),c(tt,{onClick:d?void 0:u,styles:{padding:2.5},children:c(ne,{size:20,color:d?o.colors.Text.disable:o.colors.Highlight.default,onClick:d?void 0:()=>{},children:c(Li,{})})})]})}const Xr=T.div`
    display: inline-flex;
    padding: 5px 12px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,os=T(Xr)`
    color: ${({theme:e})=>e.colors.Text.lighter};
    background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    cursor: pointer;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.darker};
    }
`,as=T(Xr)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background-color: ${({theme:e})=>e.colors.Background.Tab.default};
    cursor: pointer;
`,ss={default:os,selected:as},ls=T.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    display: inline-flex;
    white-space: nowrap;
`,cs=e=>c(ls,{children:e}),pn=({type:e="default",children:t=void 0,buttonRef:n,...r})=>{const i=ss[e],o=()=>cs(t);return c(i,{ref:n,...r,onClick:r.onClick,children:c(o,{})})},ds=T(L)`
    width: 100%;
    max-width: 890px;

    ${W.laptop} {
        max-width: 565px;
    }

    ${W.tablet} {
        max-width: 100%;
    }
`,us=T(L)`
    overflow-x: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,hs=T(P)`
    outline: none;
    user-select: none;
`,fs=({timetable:e,isSelected:t,onClick:n,onCopy:r,onDelete:i,onNameChange:o,isDragging:s})=>{const a=je(),{attributes:d,listeners:h,setNodeRef:u,transform:f,transition:m}=ts({id:e.id}),A={transform:(g=>{if(!g)return"";const{x:b,y:E}=g;return`translate3d(${b}px, ${E}px, 0)`})(f),transition:m,touchAction:"none",opacity:s?.5:1};return c("div",{ref:u,style:A,...d,...h,children:w(pn,{type:t?"selected":"default",onClick:n,children:[c(hs,{onClick:g=>{t&&(g.stopPropagation(),g.currentTarget.contentEditable="true",g.currentTarget.focus())},onBlur:g=>{const b=g.currentTarget.textContent||"";g.currentTarget.contentEditable="false",o(e.id,b)},onKeyDown:g=>{g.key==="Enter"&&(g.preventDefault(),g.currentTarget.blur())},contentEditable:!1,suppressContentEditableWarning:!0,type:"Normal",color:t?"Highlight.default":"Text.lighter",style:{paddingTop:4,paddingBottom:3.5},children:e.name?e.name:"No Title"}),w(L,{direction:"row",gap:0,align:"center",children:[t&&c(tt,{onClick:r,styles:{padding:5},children:c(ne,{size:15,onClick:()=>{},color:t?a.colors.Highlight.default:a.colors.Text.lighter,children:c(wn,{})})}),c(tt,{onClick:i,styles:{padding:3.75},children:c(ne,{size:17.5,onClick:()=>{},color:t?a.colors.Highlight.default:a.colors.Text.lighter,children:c(an,{})})})]})]})})},or=({timeTableLectures:e,currentTimetableId:t,setCurrentTimetableId:n,setCurrentTimetableName:r,year:i,semester:o,setYear:s,setSemester:a})=>{const{t:d}=Ie(),{status:h}=xt(),u=je(),{query:f,setParams:m}=ue("GET","/timetables"),{requestFunction:p}=ue("POST","/timetables",{onSuccess:v=>{f.refetch(),n(v.id)}}),{requestFunction:A}=ue("DELETE","/timetables",{onMutate:v=>{t===v.id&&n(null)},onSuccess:()=>{f.refetch()}}),{requestFunction:g}=ue("PATCH","/timetables",{onSuccess:()=>{f.refetch()}}),[b,E]=l.useState([]),[x,D]=l.useState(null),S=Io(Gn(An,{activationConstraint:{distance:8}}),Gn(Fr,{activationConstraint:{delay:500,tolerance:5}}));l.useEffect(()=>{let v=f.data?.timetables??[];v=v.filter(C=>C.year===i&&C.semester===o),E(v.slice().sort((C,B)=>C.timeTableOrder-B.timeTableOrder)),t!=null&&f.data?.timetables.forEach(C=>{C.id===t&&r(C.name)})},[f.data,i,o]),l.useEffect(()=>{h==="success"&&i!==-1&&o>0&&m({year:i,semester:o})},[i,o,h]),l.useEffect(()=>{r(t==null?d("timetable.myTimetable"):b.find(v=>v.id===t)?.name||"")},[t]);const N=v=>{D(v.active.id)},R=v=>{const{active:C,over:B}=v;if(D(null),B&&C.id!==B.id){const k=b.findIndex(K=>K.id===C.id),F=b.findIndex(K=>K.id===B.id),Q=In(b,k,F);E(Q);const X=C.id;g({id:X,order:F})}},M=v=>{if(v.deltaY===0)return;const C=v.currentTarget;C.scrollLeft=C.scrollLeft+v.deltaY};return w(ds,{direction:"row",justify:"space-between",align:"stretch",flex:"0 1 auto",gap:4,style:{overflowX:"hidden"},children:[w(L,{direction:"row",gap:3,flex:"0 1 auto",style:{overflowX:"auto"},children:[w(pn,{type:t==null?"selected":"default",onClick:()=>{n(null)},children:[c(P,{type:"Normal",color:t===null?"Highlight.default":"Text.lighter",style:{paddingTop:4,paddingBottom:3.5},children:d("timetable.myTimetable")}),t===null&&h==="success"&&c(tt,{onClick:v=>{v.stopPropagation(),p({year:i,semester:o,lectureIds:e.map(C=>C.id)})},styles:{padding:5},children:c(ne,{size:15,color:u.colors.Highlight.default,onClick:()=>{},children:c(wn,{})})})]},"my-timetable"),h==="success"&&w(us,{direction:"row",gap:3,flex:"1 1 auto",onWheel:M,children:[c(La,{sensors:S,collisionDetection:Oo,onDragStart:N,onDragEnd:R,modifiers:[$a,Wa],children:c(Xa,{items:b.map(v=>v.id),strategy:Va,children:b.map(v=>c(fs,{timetable:v,isSelected:t===v.id,isDragging:x===v.id,onClick:()=>{n(v.id)},onCopy:C=>{C.stopPropagation(),p({year:i,semester:o,lectureIds:e.map(B=>B.id)})},onDelete:C=>{C.stopPropagation(),A({id:v.id})},onNameChange:(C,B)=>{E(k=>k.map(F=>F.id===C?{...F,name:B}:F)),g({id:C,name:B})}},v.id))})}),c(pn,{onClick:()=>{p({year:i,semester:o,lectureIds:[]})},children:c(tt,{onClick:v=>{},styles:{padding:3.75},children:c(ne,{size:17.5,color:u.colors.Text.default,onClick:()=>{},children:c(yn,{})})})})]})]}),c(L,{direction:"row",gap:0,align:"center",children:c(is,{year:i,semester:o,setYear:s,setSemester:a,setCurrentTimetableId:n})})]})},ps=T.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;

    ${W.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 4px 8px;
    }
`,Ge=T.div`
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
`,Xe=T.span`
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;

    ${W.mobile} {
        font-size: 12px;
    }
`,Ke=T.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    white-space: nowrap;

    ${W.mobile} {
        font-size: 12px;
    }
`,Qe=T.span`
    font-size: 14px;
    font-weight: 400;
    padding-left: 2px;
    color: ${({theme:e})=>e.colors.Highlight.default};

    ${W.mobile} {
        display: none;
    }
`;function gs({hover:e,setHover:t,timetableLectures:n}){const{t:r}=Ie(),{lecturesByType:i,creditsByType:o}=l.useMemo(()=>{const d={basicRequired:0,basicElective:0,majorRequired:0,majorElective:0,humanitiesSocial:0,etc:0},h={basicRequired:[],basicElective:[],majorRequired:[],majorElective:[],humanitiesSocial:[],etc:[]};return n.forEach(u=>{u.type.includes("기초필수")?(d.basicRequired+=u.credit,h.basicRequired.push(u)):u.type.includes("기초선택")?(d.basicElective+=u.credit,h.basicElective.push(u)):u.type.includes("전공필수")?(d.majorRequired+=u.credit,h.majorRequired.push(u)):u.type.includes("전공선택")?(d.majorElective+=u.credit,h.majorElective.push(u)):u.type.includes("인문")?(d.humanitiesSocial+=u.credit,h.humanitiesSocial.push(u)):(d.etc+=u.credit,d.etc+=u.creditAU,h.etc.push(u))}),{lecturesByType:h,creditsByType:d}},[n]);function s(d){for(const h of["basicRequired","basicElective","majorRequired","majorElective","humanitiesSocial","etc"])if(d.type.includes(r(`common.type.${h}`)))return h;return"etc"}function a(d,h){if(!e||e.length==0||e?.length>1)return"";const u=e[0];return d.map(m=>m.id).includes(u.id)?`(${u.creditAU?u.creditAU:u.credit})`:h===s(u)?`(+${u.creditAU?u.creditAU:u.credit})`:""}return w(ps,{children:[w(Ge,{onMouseEnter:()=>t(i.basicRequired),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.basicRequiredShort")}),c(Ke,{children:o.basicRequired}),c(Qe,{children:a(i.basicRequired,"basicRequired")})]}),w(Ge,{onMouseEnter:()=>t(i.basicElective),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.basicElectiveShort")}),c(Ke,{children:o.basicElective}),c(Qe,{children:a(i.basicElective,"basicElective")})]}),w(Ge,{onMouseEnter:()=>t(i.majorRequired),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.majorRequiredShort")}),c(Ke,{children:o.majorRequired}),c(Qe,{children:a(i.majorRequired,"majorRequired")})]}),w(Ge,{onMouseEnter:()=>t(i.majorElective),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.majorElectiveShort")}),c(Ke,{children:o.majorElective}),c(Qe,{children:a(i.majorElective,"majorElective")})]}),w(Ge,{onMouseEnter:()=>t(i.humanitiesSocial),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.humanitiesSocialElectiveShort")}),c(Ke,{children:o.humanitiesSocial}),c(Qe,{children:a(i.humanitiesSocial,"humanitiesSocial")})]}),w(Ge,{onMouseEnter:()=>t(i.etc),onMouseLeave:()=>t(null),children:[c(Xe,{children:r("common.type.etcShort")}),c(Ke,{children:o.etc}),c(Qe,{children:a(i.etc,"etc")})]})]})}const ms=T.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${W.mobile} {
        gap: 20px;
    }
`,ar=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: ${({theme:e,highlighted:t})=>t?e.colors.Highlight.default:e.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,sr=T.span`
    font-size: 20px;
    font-weight: 300;
`,lr=T.span`
    font-size: 10px;
    font-weight: 400;
`,vs=T.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 48px;

    ${W.mobile} {
        gap: 20px;
    }
`,Zt=T.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
`,_t=T.span`
    font-size: 20px;
    font-weight: 300;
    color: ${({theme:e})=>e.colors.Text.default};
`,en=T.span`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.Text.dark};
`;function ys({timetableLectures:e,hover:t,setHover:n}){const{t:r}=Ie(),i=l.useMemo(()=>{let o=e.reduce((u,f)=>u+f.credit,0),s=e.reduce((u,f)=>u+f.creditAU,0);if(t&&t.length==1){const u=t[0];e.some(f=>f.id===u.id)||(o+=u.credit,s+=u.creditAU)}let a=0,d=0,h=0;return e.forEach(u=>{a+=u.averageGrade,d+=u.averageLoad,h+=u.averageSpeech}),a=a/e.length,d=d/e.length,h=h/e.length,{totalCredits:o,totalAU:s,avgGrade:a,avgLoad:d,avgSpeech:h}},[e,t]);return w(et,{children:[w(ms,{children:[w(ar,{onMouseEnter:()=>n(e.filter(o=>o.credit>0)),onMouseLeave:()=>n(null),highlighted:t!==null&&t.some(o=>o.credit>0),children:[c(sr,{children:i.totalCredits}),c(lr,{children:r("common.credit")})]}),w(ar,{onMouseEnter:()=>n(e.filter(o=>o.creditAU>0)),onMouseLeave:()=>n(null),highlighted:t!==null&&t.some(o=>o.creditAU>0),children:[c(sr,{children:i.totalAU}),c(lr,{children:"AU"})]})]}),w(vs,{children:[w(Zt,{children:[c(_t,{children:Ze(i.avgGrade/3)}),c(en,{children:r("common.grade")})]}),w(Zt,{children:[c(_t,{children:Ze(i.avgLoad/3)}),c(en,{children:r("common.load")})]}),w(Zt,{children:[c(_t,{children:Ze(i.avgSpeech/3)}),c(en,{children:r("common.speech")})]})]})]})}const bs=T(L)`
    overflow-y: auto;
    min-height: 0;
`,ws=T.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
`,xs=T.span`
    font-size: 14px;
    font-weight: 400;
    color: ${({color:e,theme:t})=>e||t.colors.Text.default};
    min-width: 16px;
`,Es=T(L)`
    color: ${({highlighted:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,Ts=[{day:Re.Mon,color:"#E54C65"},{day:Re.Tue,color:"#F5A623"},{day:Re.Wed,color:"#7ED321"},{day:Re.Thu,color:"#4A90D9"},{day:Re.Fri,color:"#9B59B6"}];function Ss({timetableLectures:e,hover:t,setHover:n}){const{t:r}=Ie(),i=l.useMemo(()=>{const o={[Re.Mon]:[],[Re.Tue]:[],[Re.Wed]:[],[Re.Thu]:[],[Re.Fri]:[]};if(e.forEach(s=>{s.examTimes.forEach(a=>{if(a==null)return;const d=a.day;o[d]&&o[d].push({lectureName:s.name,lectureId:s.id,time:a.str.split(" ").slice(1).join(" ")})})}),t&&t.length==1){const s=t[0];e.some(a=>a.id===s.id)||s.examTimes.forEach(a=>{if(a==null)return;const d=a.day;o[d]&&o[d].push({lectureName:s.name,lectureId:s.id,time:a.str})})}return o},[e,t]);return w(bs,{direction:"column",gap:15,style:{width:"100%"},flex:"1 1 0",children:[c(P,{type:"NormalBold",color:"Text.default",children:r("timetable.examTimetable")}),Ts.map(({day:o,color:s})=>{const a=i[o];return!a||a.length===0?null:w(ws,{children:[c(xs,{color:s,onMouseEnter:()=>{n(e.filter(d=>d.examTimes.some(h=>h?.day===o)))},onMouseLeave:()=>n(null),children:yi(o,!0)}),c(L,{direction:"column",gap:2,children:a.sort((d,h)=>d.time.localeCompare(h.time)).map((d,h)=>w(Es,{direction:"column",gap:0,highlighted:t?.some(u=>u.id===d.lectureId),onMouseEnter:()=>n(e.filter(u=>u.id===d.lectureId)),onMouseLeave:()=>n(null),children:[c(P,{type:"NormalBold",children:d.lectureName}),c(P,{type:"Normal",children:d.time})]},h))})]},o)})]})}const Cs=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(t=>t??"#CCCCCC"),Ds=T.div`
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
`,Rs=T.div`
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
`,As=T.div`
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 6px solid ${({theme:e})=>e.colors.Background.Section.default};
    position: absolute;
    top: 17px;
`,Is=T.div`
    background-color: ${({theme:e,courseId:t,highlighted:n})=>n?e.colors.Highlight.default:(()=>{const r=Cs(e.colors?.Tile?.TimeTable?.default);return r[t%r.length]})()};
    width: 10px;
    height: 10px;
    border-radius: 100%;
`,Ns=new Map([["E2",{left:52,top:70}],["E3",{left:59,top:64}],["E6",{left:60,top:52}],["E7",{left:69,top:50}],["E11",{left:45,top:47}],["E16",{left:45,top:38}],["N1",{left:80,top:28}],["N3",{left:45,top:34}],["N4",{left:54,top:30}],["N5",{left:66,top:28}],["N7",{left:25,top:30}],["N22",{left:71,top:24}],["N24",{left:68,top:20}],["N25",{left:51,top:25}],["N27",{left:49,top:13}],["W1",{left:26,top:73}],["W8",{left:27,top:44}],["W16",{left:35,top:76}]]);function Ms({timetableLectures:e,hover:t,setHover:n}){return c(Ds,{children:Array.from(Ns).map(([r,{left:i,top:o}])=>{const s=e.filter(a=>a.classes.some(d=>d.buildingCode.includes(r)));return t?.forEach(a=>{e.includes(a)||a.classes.some(d=>d.buildingCode.includes(r))&&s.push(a)}),s.length===0?null:w(Rs,{left:i,top:o,onMouseEnter:()=>{n(s)},onMouseLeave:()=>{n(null)},highlighted:t?.some(a=>s.includes(a))??!1,children:[c(As,{}),r,s.map(a=>c(Is,{courseId:a.courseId,highlighted:t?.includes(a)??!1},a.id))]},r)})})}var ut={},cr;function Ls(){return cr||(cr=1,ut.createCanvas=function(e,t){return Object.assign(document.createElement("canvas"),{width:e,height:t})},ut.createImageData=function(e,t,n){switch(arguments.length){case 0:return new ImageData;case 1:return new ImageData(e);case 2:return new ImageData(e,t);default:return new ImageData(e,t,n)}},ut.loadImage=function(e,t){return new Promise(function(n,r){const i=Object.assign(document.createElement("img"),t);function o(){i.onload=null,i.onerror=null}i.onload=function(){o(),n(i)},i.onerror=function(){o(),r(new Error('Failed to load the image "'+e+'"'))},i.src=e})}),ut}var dr=Ls(),Nn=(e=>(e.DAILY="DAILY",e.HOURLY="HOURLY",e.MINUTELY="MINUTELY",e.MONTHLY="MONTHLY",e.SECONDLY="SECONDLY",e.WEEKLY="WEEKLY",e.YEARLY="YEARLY",e))(Nn||{}),gn=(e=>(e.FR="FR",e.MO="MO",e.SA="SA",e.SU="SU",e.TH="TH",e.TU="TU",e.WE="WE",e))(gn||{});function be(e,t,n){if(Array.isArray(t))e.x=t.map(r=>{if(Array.isArray(r))return r;if(typeof r.key!="string"||typeof r.value!="string")throw new Error("Either key or value is not a string!");if(r.key.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");return[r.key,r.value]});else if(typeof t=="object")e.x=Object.entries(t).map(([r,i])=>{if(typeof r!="string"||typeof i!="string")throw new Error("Either key or value is not a string!");if(r.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");return[r,i]});else if(typeof t=="string"&&typeof n=="string"){if(t.substr(0,2)!=="X-")throw new Error("Key has to start with `X-`!");e.x.push([t,n])}else return e.x.map(r=>({key:r[0],value:r[1]}))}function Me(e,t){if(e instanceof Date&&isNaN(e.getTime())||typeof e=="string"&&isNaN(new Date(e).getTime()))throw new Error(`\`${t}\` has to be a valid date!`);if(e instanceof Date||typeof e=="string"||$t(e)&&e.isValid===!0||(jt(e)||Os(e))&&e.isValid())return e;throw new Error(`\`${t}\` has to be a valid date!`)}function ye(e,t){let n=Object.values(e),r=String(t).toUpperCase();if(!r||!n.includes(r))throw new Error(`Input must be one of the following: ${n.join(", ")}`);return r}function wt(e,t){let n=null;if(typeof t=="string"){let r=t.match(/^(.+) ?<([^>]+)>$/);r?n={email:r[2].trim(),name:r[1].trim()}:t.includes("@")&&(n={email:t.trim(),name:t.trim()})}else typeof t=="object"&&(n={email:t.email,mailto:t.mailto,name:t.name,sentBy:t.sentBy});if(!n&&typeof t=="string")throw new Error("`"+e+"` isn't formated correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n)throw new Error("`"+e+"` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/interfaces/ICalOrganizer.html");if(!n.name)throw new Error("`"+e+".name` is empty!");if(!n.email)throw new Error("`"+e+".email` is empty!");return n}function $(e,t){return String(e).replace(t?/[\\"]/g:/[\\;,]/g,function(n){return"\\"+n}).replace(/(?:\r\n|\r|\n)/g,"\\n")}function ks(e){return e.split(`\r
`).map(function(t){let n="",r=0;for(let i=0;i<t.length;i++){let o=t.charAt(i);o>="\uD800"&&o<="\uDBFF"&&(o+=t.charAt(++i));let s=new TextEncoder().encode(o).length;r+=s,r>74&&(n+=`\r
 `,r=s),n+=o}return n}).join(`\r
`)}function Ee(e,t,n,r){if(e?.startsWith("/")&&(e=e.substr(1)),typeof t=="string"||t instanceof Date){let i=zs(t)?t.withTimeZone(e):new Date(t),o=i.getUTCFullYear()+String(i.getUTCMonth()+1).padStart(2,"0")+i.getUTCDate().toString().padStart(2,"0");return e&&(o=i.getFullYear()+String(i.getMonth()+1).padStart(2,"0")+i.getDate().toString().padStart(2,"0")),n?o:e?(o+="T"+i.getHours().toString().padStart(2,"0")+i.getMinutes().toString().padStart(2,"0")+i.getSeconds().toString().padStart(2,"0"),o):(o+="T"+i.getUTCHours().toString().padStart(2,"0")+i.getUTCMinutes().toString().padStart(2,"0")+i.getUTCSeconds().toString().padStart(2,"0")+(r?"":"Z"),o)}else if(jt(t)){let i=e?ur(t)&&!t.tz()?t.clone().tz(e):t:r||n&&ur(t)&&t.tz()?t:t.utc();return i.format("YYYYMMDD")+(n?"":"T"+i.format("HHmmss")+(r||e?"":"Z"))}else if($t(t)){let i=e?t.setZone(e):r||n&&t.zone.type!=="system"?t:t.setZone("utc");return i.toFormat("yyyyLLdd")+(n?"":"T"+i.toFormat("HHmmss")+(r||e?"":"Z"))}else{let i=t;if(e)i=typeof t.tz=="function"?t.tz(e):t;else if(!r)if(typeof t.utc=="function")i=t.utc();else throw new Error("Unable to convert dayjs object to UTC value: UTC plugin is not available!");return i.format("YYYYMMDD")+(n?"":"T"+i.format("HHmmss")+(r||e?"":"Z"))}}function tn(e,t,n,r){let i="",o=r?.floating||!1;return r?.timezone&&(i=";TZID="+r.timezone,o=!0),t+i+":"+Ee(e,n,!1,o)}function Mn(e){let t=e.x.map(([n,r])=>n.toUpperCase()+":"+$(r,!1)).join(`\r
`);return t.length?t+`\r
`:""}function Os(e){return typeof e=="object"&&e!==null&&!(e instanceof Date)&&!jt(e)&&!$t(e)}function $t(e){return typeof e=="object"&&e!==null&&"toJSDate"in e&&typeof e.toJSDate=="function"}function jt(e){return e!=null&&e._isAMomentObject!=null}function Bs(e){return e!==null&&typeof e=="object"&&"asSeconds"in e&&typeof e.asSeconds=="function"}function ur(e){return jt(e)&&"tz"in e&&typeof e.tz=="function"}function nn(e){return e!==null&&typeof e=="object"&&"between"in e&&typeof e.between=="function"&&typeof e.toString=="function"}function zs(e){return e instanceof Date&&"internal"in e&&e.internal instanceof Date&&"withTimeZone"in e&&typeof e.withTimeZone=="function"&&"tzComponents"in e&&typeof e.tzComponents=="function"}function hr(e){return typeof e=="string"||e instanceof Date?new Date(e):$t(e)?e.toJSDate():e.toDate()}function Je(e){let t="";return e<0&&(t="-",e*=-1),t+="P",e>=86400&&(t+=Math.floor(e/86400)+"D",e%=86400),!e&&t.length>1||(t+="T",e>=3600&&(t+=Math.floor(e/3600)+"H",e%=3600),e>=60&&(t+=Math.floor(e/60)+"M",e%=60),e>0?t+=e+"S":t.length<=2&&(t+="0S")),t}function Le(e){return e?typeof e=="string"?e:e.toJSON():null}var Kr=(e=>(e.CHAIR="CHAIR",e.NON="NON-PARTICIPANT",e.OPT="OPT-PARTICIPANT",e.REQ="REQ-PARTICIPANT",e))(Kr||{}),Qr=(e=>(e.CLIENT="CLIENT",e.NONE="NONE",e.SERVER="SERVER",e))(Qr||{}),Jr=(e=>(e.ACCEPTED="ACCEPTED",e.DECLINED="DECLINED",e.DELEGATED="DELEGATED",e.NEEDSACTION="NEEDS-ACTION",e.TENTATIVE="TENTATIVE",e))(Jr||{}),Zr=(e=>(e.GROUP="GROUP",e.INDIVIDUAL="INDIVIDUAL",e.RESOURCE="RESOURCE",e.ROOM="ROOM",e.UNKNOWN="UNKNOWN",e))(Zr||{}),zt=class ke{data;parent;constructor(t,n){if(this.data={delegatedFrom:null,delegatedTo:null,email:"",mailto:null,name:null,role:"REQ-PARTICIPANT",rsvp:null,scheduleAgent:null,sentBy:null,status:null,type:null,x:[]},this.parent=n,!this.parent)throw new Error("`event` option required!");if(!t.email)throw new Error("No value for `email` in ICalAttendee given!");t.name!==void 0&&this.name(t.name),t.email!==void 0&&this.email(t.email),t.mailto!==void 0&&this.mailto(t.mailto),t.sentBy!==void 0&&this.sentBy(t.sentBy),t.status!==void 0&&this.status(t.status),t.role!==void 0&&this.role(t.role),t.rsvp!==void 0&&this.rsvp(t.rsvp),t.type!==void 0&&this.type(t.type),t.delegatedTo!==void 0&&this.delegatedTo(t.delegatedTo),t.delegatedFrom!==void 0&&this.delegatedFrom(t.delegatedFrom),t.delegatesTo&&this.delegatesTo(t.delegatesTo),t.delegatesFrom&&this.delegatesFrom(t.delegatesFrom),t.scheduleAgent!==void 0&&this.scheduleAgent(t.scheduleAgent),t.x!==void 0&&this.x(t.x)}delegatedFrom(t){return t===void 0?this.data.delegatedFrom:(t?typeof t=="string"?this.data.delegatedFrom=new ke(wt("delegatedFrom",t),this.parent):t instanceof ke?this.data.delegatedFrom=t:this.data.delegatedFrom=new ke(t,this.parent):this.data.delegatedFrom=null,this)}delegatedTo(t){return t===void 0?this.data.delegatedTo:t?(typeof t=="string"?this.data.delegatedTo=new ke(wt("delegatedTo",t),this.parent):t instanceof ke?this.data.delegatedTo=t:this.data.delegatedTo=new ke(t,this.parent),this.data.status="DELEGATED",this):(this.data.delegatedTo=null,this.data.status==="DELEGATED"&&(this.data.status=null),this)}delegatesFrom(t){let n=t instanceof ke?t:this.parent.createAttendee(t);return this.delegatedFrom(n),n.delegatedTo(this),n}delegatesTo(t){let n=t instanceof ke?t:this.parent.createAttendee(t);return this.delegatedTo(n),n.delegatedFrom(this),n}email(t){return t?(this.data.email=t,this):this.data.email}mailto(t){return t===void 0?this.data.mailto:(this.data.mailto=t||null,this)}name(t){return t===void 0?this.data.name:(this.data.name=t||null,this)}role(t){return t===void 0?this.data.role:(this.data.role=ye(Kr,t),this)}rsvp(t){return t===void 0?this.data.rsvp:t===null?(this.data.rsvp=null,this):(this.data.rsvp=!!t,this)}scheduleAgent(t){return t===void 0?this.data.scheduleAgent:t?typeof t=="string"&&t.toUpperCase().startsWith("X-")?(this.data.scheduleAgent=t,this):(this.data.scheduleAgent=ye(Qr,t),this):(this.data.scheduleAgent=null,this)}sentBy(t){return t?(this.data.sentBy=t,this):this.data.sentBy}status(t){return t===void 0?this.data.status:t?(this.data.status=ye(Jr,t),this):(this.data.status=null,this)}toJSON(){return Object.assign({},this.data,{delegatedFrom:this.data.delegatedFrom?.email()||null,delegatedTo:this.data.delegatedTo?.email()||null,x:this.x()})}toString(){let t="ATTENDEE";if(!this.data.email)throw new Error("No value for `email` in ICalAttendee given!");return t+=";ROLE="+this.data.role,this.data.type&&(t+=";CUTYPE="+this.data.type),this.data.status&&(t+=";PARTSTAT="+this.data.status),this.data.rsvp!==null&&(t+=";RSVP="+this.data.rsvp.toString().toUpperCase()),this.data.sentBy!==null&&(t+=';SENT-BY="mailto:'+this.data.sentBy+'"'),this.data.delegatedTo&&(t+=';DELEGATED-TO="'+this.data.delegatedTo.email()+'"'),this.data.delegatedFrom&&(t+=';DELEGATED-FROM="'+this.data.delegatedFrom.email()+'"'),this.data.name&&(t+=';CN="'+$(this.data.name,!0)+'"'),this.data.email&&this.data.mailto&&(t+=";EMAIL="+$(this.data.email,!1)),this.data.scheduleAgent&&(t+=";SCHEDULE-AGENT="+this.data.scheduleAgent),this.data.x.length&&(t+=";"+this.data.x.map(([n,r])=>n.toUpperCase()+"="+$(r,!1)).join(";")),t+=":MAILTO:"+$(this.data.mailto||this.data.email,!1)+`\r
`,t}type(t){return t===void 0?this.data.type:t?(this.data.type=ye(Zr,t),this):(this.data.type=null,this)}x(t,n){if(t===void 0)return be(this.data);if(typeof t=="string"&&typeof n=="string")be(this.data,t,n);else if(typeof t=="object")be(this.data,t);else throw new Error("Either key or value is not a string!");return this}},Ln=(e=>(e.audio="audio",e.display="display",e.email="email",e))(Ln||{}),Ps={end:"END",start:"START"},fr=class{data;event;constructor(e,t){if(this.data={attach:null,attendees:[],description:null,interval:null,relatesTo:null,repeat:null,summary:null,trigger:-600,type:"display",x:[]},this.event=t,!t)throw new Error("`event` option required!");e.type!==void 0&&this.type(e.type),"trigger"in e&&e.trigger!==void 0&&this.trigger(e.trigger),"triggerBefore"in e&&e.triggerBefore!==void 0&&this.triggerBefore(e.triggerBefore),"triggerAfter"in e&&e.triggerAfter!==void 0&&this.triggerAfter(e.triggerAfter),e.repeat&&this.repeat(e.repeat),e.attach!==void 0&&this.attach(e.attach),e.description!==void 0&&this.description(e.description),e.summary!==void 0&&this.summary(e.summary),e.attendees!==void 0&&this.attendees(e.attendees),e.x!==void 0&&this.x(e.x)}attach(e){if(e===void 0)return this.data.attach;if(!e)return this.data.attach=null,this;let t=null;if(typeof e=="string")t={mime:null,uri:e};else if(typeof e=="object")t={mime:e.mime||null,uri:e.uri};else throw new Error("`attachment` needs to be a valid formed string or an object. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalAlarm.html#attach");if(!t.uri)throw new Error("`attach.uri` is empty!");return this.data.attach={mime:t.mime,uri:t.uri},this}attendees(e){return e?(e.forEach(t=>this.createAttendee(t)),this):this.data.attendees}createAttendee(e){if(e instanceof zt)return this.data.attendees.push(e),e;typeof e=="string"&&(e=wt("data",e));let t=new zt(e,this);return this.data.attendees.push(t),t}description(e){return e===void 0?this.data.description:e?(this.data.description=e,this):(this.data.description=null,this)}relatesTo(e){if(e===void 0)return this.data.relatesTo;if(!e)return this.data.relatesTo=null,this;if(!Object.values(Ps).includes(e))throw new Error("`relatesTo` is not correct, must be either `START` or `END`!");return this.data.relatesTo=e,this}repeat(e){if(e===void 0)return this.data.repeat;if(!e)return this.data.repeat=null,this;if(typeof e!="object")throw new Error("`repeat` is not correct, must be an object!");if(typeof e.times!="number"||!isFinite(e.times))throw new Error("`repeat.times` is not correct, must be numeric!");if(typeof e.interval!="number"||!isFinite(e.interval))throw new Error("`repeat.interval` is not correct, must be numeric!");return this.data.repeat=e,this}summary(e){return e===void 0?this.data.summary:e?(this.data.summary=e,this):(this.data.summary=null,this)}toJSON(){let e=this.trigger();return Object.assign({},this.data,{trigger:typeof e=="number"?e:Le(e),x:this.x()})}toString(){let e=`BEGIN:VALARM\r
`;if(e+="ACTION:"+this.data.type.toUpperCase()+`\r
`,typeof this.data.trigger=="number"&&this.data.relatesTo===null?this.data.trigger>0?e+="TRIGGER;RELATED=END:"+Je(this.data.trigger)+`\r
`:e+="TRIGGER:"+Je(this.data.trigger)+`\r
`:typeof this.data.trigger=="number"?e+="TRIGGER;RELATED="+this.data.relatesTo?.toUpperCase()+":"+Je(this.data.trigger)+`\r
`:e+="TRIGGER;VALUE=DATE-TIME:"+Ee(this.event.timezone(),this.data.trigger)+`\r
`,this.data.repeat){if(!this.data.repeat.times)throw new Error("No value for `repeat.times` in ICalAlarm given, but required for `interval`!");if(!this.data.repeat.interval)throw new Error("No value for `repeat.interval` in ICalAlarm given, but required for `repeat`!");e+="REPEAT:"+this.data.repeat.times+`\r
`,e+="DURATION:"+Je(this.data.repeat.interval)+`\r
`}return this.data.type==="audio"&&this.data.attach&&this.data.attach.mime?e+="ATTACH;FMTTYPE="+$(this.data.attach.mime,!1)+":"+$(this.data.attach.uri,!1)+`\r
`:this.data.type==="audio"&&this.data.attach?e+="ATTACH;VALUE=URI:"+$(this.data.attach.uri,!1)+`\r
`:this.data.type==="audio"&&(e+=`ATTACH;VALUE=URI:Basso\r
`),this.data.type!=="audio"&&this.data.description?e+="DESCRIPTION:"+$(this.data.description,!1)+`\r
`:this.data.type!=="audio"&&(e+="DESCRIPTION:"+$(this.event.summary(),!1)+`\r
`),this.data.type==="email"&&this.data.summary?e+="SUMMARY:"+$(this.data.summary,!1)+`\r
`:this.data.type==="email"&&(e+="SUMMARY:"+$(this.event.summary(),!1)+`\r
`),this.data.type==="email"&&this.data.attendees.forEach(t=>{e+=t.toString()}),e+=Mn(this.data),e+=`END:VALARM\r
`,e}trigger(e){if(e===void 0&&typeof this.data.trigger=="number")return-1*this.data.trigger;if(e===void 0)return this.data.trigger;if(typeof e=="number"&&isFinite(e))this.data.trigger=-1*e;else{if(!e||typeof e=="number")throw new Error("`trigger` is not correct, must be a finite number or a supported date!");this.data.trigger=Me(e,"trigger")}return this}triggerAfter(e){return e===void 0?this.data.trigger:this.trigger(typeof e=="number"?-1*e:e)}triggerBefore(e){return e===void 0?this.trigger():this.trigger(e)}type(e){if(e===void 0)return this.data.type;if(!e||!Object.keys(Ln).includes(e))throw new Error("`type` is not correct, must be either `display` or `audio`!");return this.data.type=e,this}x(e,t){if(e===void 0)return be(this.data);if(typeof e=="string"&&typeof t=="string")be(this.data,e,t);else if(typeof e=="object")be(this.data,e);else throw new Error("Either key or value is not a string!");return this}},pr=class{data;constructor(e){if(this.data={name:""},!e.name)throw new Error("No value for `name` in ICalCategory given!");this.name(e.name)}name(e){return e===void 0?this.data.name:(this.data.name=e,this)}toJSON(){return Object.assign({},this.data)}toString(){return $(this.data.name,!1)}},_r=(e=>(e.BUSY="BUSY",e.FREE="FREE",e.OOF="OOF",e.TENTATIVE="TENTATIVE",e))(_r||{}),ei=(e=>(e.CONFIDENTIAL="CONFIDENTIAL",e.PRIVATE="PRIVATE",e.PUBLIC="PUBLIC",e))(ei||{}),ti=(e=>(e.CANCELLED="CANCELLED",e.CONFIRMED="CONFIRMED",e.TENTATIVE="TENTATIVE",e))(ti||{}),ni=(e=>(e.OPAQUE="OPAQUE",e.TRANSPARENT="TRANSPARENT",e))(ni||{}),gr=class{calendar;data;constructor(e,t){if(this.data={alarms:[],allDay:!1,attachments:[],attendees:[],busystatus:null,categories:[],class:null,created:null,description:null,end:null,floating:!1,id:crypto.randomUUID(),lastModified:null,location:null,organizer:null,priority:null,recurrenceId:null,repeating:null,sequence:0,stamp:new Date,start:new Date,status:null,summary:"",timezone:null,transparency:null,url:null,x:[]},this.calendar=t,!t)throw new Error("`calendar` option required!");e.id&&this.id(e.id),e.sequence!==void 0&&this.sequence(e.sequence),e.start&&this.start(e.start),e.end!==void 0&&this.end(e.end),e.recurrenceId!==void 0&&this.recurrenceId(e.recurrenceId),e.timezone!==void 0&&this.timezone(e.timezone),e.stamp!==void 0&&this.stamp(e.stamp),e.allDay!==void 0&&this.allDay(e.allDay),e.floating!==void 0&&this.floating(e.floating),e.repeating!==void 0&&this.repeating(e.repeating),e.summary!==void 0&&this.summary(e.summary),e.location!==void 0&&this.location(e.location),e.description!==void 0&&this.description(e.description),e.organizer!==void 0&&this.organizer(e.organizer),e.attendees!==void 0&&this.attendees(e.attendees),e.alarms!==void 0&&this.alarms(e.alarms),e.categories!==void 0&&this.categories(e.categories),e.status!==void 0&&this.status(e.status),e.busystatus!==void 0&&this.busystatus(e.busystatus),e.priority!==void 0&&this.priority(e.priority),e.url!==void 0&&this.url(e.url),e.attachments!==void 0&&this.attachments(e.attachments),e.transparency!==void 0&&this.transparency(e.transparency),e.created!==void 0&&this.created(e.created),e.lastModified!==void 0&&this.lastModified(e.lastModified),e.class!==void 0&&this.class(e.class),e.x!==void 0&&this.x(e.x)}alarms(e){return e?(e.forEach(t=>this.createAlarm(t)),this):this.data.alarms}allDay(e){return e===void 0?this.data.allDay:(this.data.allDay=!!e,this)}attachments(e){return e?(e.forEach(t=>this.createAttachment(t)),this):this.data.attachments}attendees(e){return e?(e.forEach(t=>this.createAttendee(t)),this):this.data.attendees}busystatus(e){return e===void 0?this.data.busystatus:e===null?(this.data.busystatus=null,this):(this.data.busystatus=ye(_r,e),this)}categories(e){return e?(e.forEach(t=>this.createCategory(t)),this):this.data.categories}class(e){return e===void 0?this.data.class:e===null?(this.data.class=null,this):(this.data.class=ye(ei,e),this)}createAlarm(e){let t=e instanceof fr?e:new fr(e,this);return this.data.alarms.push(t),t}createAttachment(e){return this.data.attachments.push(e),this}createAttendee(e){if(e instanceof zt)return this.data.attendees.push(e),e;typeof e=="string"&&(e=wt("data",e));let t=new zt(e,this);return this.data.attendees.push(t),t}createCategory(e){let t=e instanceof pr?e:new pr(e);return this.data.categories.push(t),t}created(e){return e===void 0?this.data.created:e===null?(this.data.created=null,this):(this.data.created=Me(e,"created"),this)}description(e){return e===void 0?this.data.description:e===null?(this.data.description=null,this):(typeof e=="string"?this.data.description={plain:e}:this.data.description=e,this)}end(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.end):e===null?(this.data.end=null,this):(this.data.end=Me(e,"end"),this)}floating(e){return e===void 0?this.data.floating:(this.data.floating=!!e,this.data.floating&&(this.data.timezone=null),this)}id(e){return e===void 0?this.data.id:(this.data.id=String(e),this)}lastModified(e){return e===void 0?this.data.lastModified:e===null?(this.data.lastModified=null,this):(this.data.lastModified=Me(e,"lastModified"),this)}location(e){if(e===void 0)return this.data.location;if(typeof e=="string")return this.data.location={title:e},this;if(e&&("title"in e&&!e.title||e?.geo&&(typeof e.geo.lat!="number"||!isFinite(e.geo.lat)||typeof e.geo.lon!="number"||!isFinite(e.geo.lon))||!("title"in e)&&!e?.geo))throw new Error("`location` isn't formatted correctly. See https://sebbo2002.github.io/ical-generator/develop/reference/classes/ICalEvent.html#location");return this.data.location=e||null,this}organizer(e){return e===void 0?this.data.organizer:e===null?(this.data.organizer=null,this):(this.data.organizer=wt("organizer",e),this)}priority(e){if(e===void 0)return this.data.priority;if(e===null)return this.data.priority=null,this;if(e<0||e>9)throw new Error("`priority` is invalid, musst be 0 ≤ priority ≤ 9.");return this.data.priority=Math.round(e),this}recurrenceId(e){return e===void 0?this.data.recurrenceId:e===null?(this.data.recurrenceId=null,this):(this.data.recurrenceId=Me(e,"recurrenceId"),this)}repeating(e){if(e===void 0)return this.data.repeating;if(!e)return this.data.repeating=null,this;if(nn(e)||typeof e=="string")return this.data.repeating=e,this;if(this.data.repeating={freq:ye(Nn,e.freq)},e.count){if(!isFinite(e.count))throw new Error("`repeating.count` must be a finite number!");this.data.repeating.count=e.count}if(e.interval){if(!isFinite(e.interval))throw new Error("`repeating.interval` must be a finite number!");this.data.repeating.interval=e.interval}if(e.until!==void 0&&(this.data.repeating.until=Me(e.until,"repeating.until")),e.byDay){let t=Array.isArray(e.byDay)?e.byDay:[e.byDay];this.data.repeating.byDay=t.map(n=>ye(gn,n))}if(e.byMonth){let t=Array.isArray(e.byMonth)?e.byMonth:[e.byMonth];this.data.repeating.byMonth=t.map(n=>{if(typeof n!="number"||n<1||n>12)throw new Error("`repeating.byMonth` contains invalid value `"+n+"`!");return n})}if(e.byMonthDay){let t=Array.isArray(e.byMonthDay)?e.byMonthDay:[e.byMonthDay];this.data.repeating.byMonthDay=t.map(n=>{if(typeof n!="number"||n<-31||n>31||n===0)throw new Error("`repeating.byMonthDay` contains invalid value `"+n+"`!");return n})}if(e.bySetPos){if(!this.data.repeating.byDay)throw"`repeating.bySetPos` must be used along with `repeating.byDay`!";let t=Array.isArray(e.bySetPos)?e.bySetPos:[e.bySetPos];this.data.repeating.bySetPos=t.map(n=>{if(typeof n!="number"||n<-366||n>366||n===0)throw"`repeating.bySetPos` contains invalid value `"+n+"`!";return n})}if(e.exclude){let t=Array.isArray(e.exclude)?e.exclude:[e.exclude];this.data.repeating.exclude=t.map((n,r)=>Me(n,`repeating.exclude[${r}]`))}return e.startOfWeek&&(this.data.repeating.startOfWeek=ye(gn,e.startOfWeek)),this}sequence(e){if(e===void 0)return this.data.sequence;let t=parseInt(String(e),10);if(isNaN(t))throw new Error("`sequence` must be a number!");return this.data.sequence=e,this}stamp(e){return e===void 0?this.data.stamp:(this.data.stamp=Me(e,"stamp"),this)}start(e){return e===void 0?(this.swapStartAndEndIfRequired(),this.data.start):(this.data.start=Me(e,"start"),this)}status(e){return e===void 0?this.data.status:e===null?(this.data.status=null,this):(this.data.status=ye(ti,e),this)}summary(e){return e===void 0?this.data.summary:(this.data.summary=e?String(e):"",this)}timestamp(e){return e===void 0?this.stamp():this.stamp(e)}timezone(e){return e===void 0&&this.data.timezone!==null?this.data.timezone:e===void 0?this.calendar.timezone():(this.data.timezone=e&&e!=="UTC"?e.toString():null,this.data.timezone&&(this.data.floating=!1),this)}toJSON(){let e=null;return nn(this.data.repeating)||typeof this.data.repeating=="string"?e=this.data.repeating.toString():this.data.repeating&&(e=Object.assign({},this.data.repeating,{exclude:this.data.repeating.exclude?.map(t=>Le(t)),until:Le(this.data.repeating.until)||void 0})),this.swapStartAndEndIfRequired(),Object.assign({},this.data,{created:Le(this.data.created)||null,end:Le(this.data.end)||null,lastModified:Le(this.data.lastModified)||null,recurrenceId:Le(this.data.recurrenceId)||null,repeating:e,stamp:Le(this.data.stamp)||null,start:Le(this.data.start)||null,x:this.x()})}toString(){let e="";if(e+=`BEGIN:VEVENT\r
`,e+="UID:"+this.data.id+`\r
`,e+="SEQUENCE:"+this.data.sequence+`\r
`,this.swapStartAndEndIfRequired(),e+="DTSTAMP:"+Ee(this.calendar.timezone(),this.data.stamp)+`\r
`,this.data.allDay?(e+="DTSTART;VALUE=DATE:"+Ee(this.timezone(),this.data.start,!0)+`\r
`,this.data.end&&(e+="DTEND;VALUE=DATE:"+Ee(this.timezone(),this.data.end,!0)+`\r
`),e+=`X-MICROSOFT-CDO-ALLDAYEVENT:TRUE\r
`,e+=`X-MICROSOFT-MSNCALENDAR-ALLDAYEVENT:TRUE\r
`):(e+=tn(this.timezone(),"DTSTART",this.data.start,this.data)+`\r
`,this.data.end&&(e+=tn(this.timezone(),"DTEND",this.data.end,this.data)+`\r
`)),nn(this.data.repeating)||typeof this.data.repeating=="string"){let t=this.data.repeating.toString().replace(/\r\n/g,`
`).split(`
`).filter(n=>n&&!n.startsWith("DTSTART:")).join(`\r
`);!t.includes(`\r
`)&&!t.startsWith("RRULE:")&&(t="RRULE:"+t),e+=t.trim()+`\r
`}else this.data.repeating&&(e+="RRULE:FREQ="+this.data.repeating.freq,this.data.repeating.count&&(e+=";COUNT="+this.data.repeating.count),this.data.repeating.interval&&(e+=";INTERVAL="+this.data.repeating.interval),this.data.repeating.until&&(e+=";UNTIL="+Ee(this.calendar.timezone(),this.data.repeating.until,!1,this.floating())),this.data.repeating.byDay&&(e+=";BYDAY="+this.data.repeating.byDay.join(",")),this.data.repeating.byMonth&&(e+=";BYMONTH="+this.data.repeating.byMonth.join(",")),this.data.repeating.byMonthDay&&(e+=";BYMONTHDAY="+this.data.repeating.byMonthDay.join(",")),this.data.repeating.bySetPos&&(e+=";BYSETPOS="+this.data.repeating.bySetPos.join(",")),this.data.repeating.startOfWeek&&(e+=";WKST="+this.data.repeating.startOfWeek),e+=`\r
`,this.data.repeating.exclude&&(this.data.allDay?e+="EXDATE;VALUE=DATE:"+this.data.repeating.exclude.map(t=>Ee(this.calendar.timezone(),t,!0)).join(",")+`\r
`:(e+="EXDATE",this.timezone()?e+=";TZID="+this.timezone()+":"+this.data.repeating.exclude.map(t=>Ee(this.timezone(),t,!1,!0)).join(",")+`\r
`:e+=":"+this.data.repeating.exclude.map(t=>Ee(this.timezone(),t,!1,this.floating())).join(",")+`\r
`)));return this.data.recurrenceId&&(e+=tn(this.timezone(),"RECURRENCE-ID",this.data.recurrenceId,this.data)+`\r
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
`),e+=Mn(this.data),this.data.created&&(e+="CREATED:"+Ee(this.calendar.timezone(),this.data.created)+`\r
`),this.data.lastModified&&(e+="LAST-MODIFIED:"+Ee(this.calendar.timezone(),this.data.lastModified)+`\r
`),this.data.class&&(e+="CLASS:"+this.data.class.toUpperCase()+`\r
`),e+=`END:VEVENT\r
`,e}transparency(e){return e===void 0?this.data.transparency:e?(this.data.transparency=ye(ni,e),this):(this.data.transparency=null,this)}uid(e){return e===void 0?this.id():this.id(e)}url(e){return e===void 0?this.data.url:(this.data.url=e?String(e):null,this)}x(e,t){return e===void 0?be(this.data):(typeof e=="string"&&typeof t=="string"&&be(this.data,e,t),typeof e=="object"&&be(this.data,e),this)}swapStartAndEndIfRequired(){if(this.data.start&&this.data.end&&hr(this.data.start).getTime()>hr(this.data.end).getTime()){let e=this.data.start;this.data.start=this.data.end,this.data.end=e}}},ri=(e=>(e.ADD="ADD",e.CANCEL="CANCEL",e.COUNTER="COUNTER",e.DECLINECOUNTER="DECLINECOUNTER",e.PUBLISH="PUBLISH",e.REFRESH="REFRESH",e.REPLY="REPLY",e.REQUEST="REQUEST",e))(ri||{}),Us=class{data;constructor(e={}){this.data={description:null,events:[],method:null,name:null,prodId:"//sebbo.net//ical-generator//EN",scale:null,source:null,timezone:null,ttl:null,url:null,x:[]},e.prodId!==void 0&&this.prodId(e.prodId),e.method!==void 0&&this.method(e.method),e.name!==void 0&&this.name(e.name),e.description!==void 0&&this.description(e.description),e.timezone!==void 0&&this.timezone(e.timezone),e.source!==void 0&&this.source(e.source),e.url!==void 0&&this.url(e.url),e.scale!==void 0&&this.scale(e.scale),e.ttl!==void 0&&this.ttl(e.ttl),e.events!==void 0&&this.events(e.events),e.x!==void 0&&this.x(e.x)}clear(){return this.data.events=[],this}createEvent(e){let t=e instanceof gr?e:new gr(e,this);return this.data.events.push(t),t}description(e){return e===void 0?this.data.description:(this.data.description=e?String(e):null,this)}events(e){return e?(e.forEach(t=>this.createEvent(t)),this):this.data.events}length(){return this.data.events.length}method(e){return e===void 0?this.data.method:e?(this.data.method=ye(ri,e),this):(this.data.method=null,this)}name(e){return e===void 0?this.data.name:(this.data.name=e?String(e):null,this)}prodId(e){if(!e)return this.data.prodId;if(typeof e=="string")return this.data.prodId=e,this;if(typeof e!="object")throw new Error("`prodid` needs to be a string or an object!");if(!e.company)throw new Error("`prodid.company` is a mandatory item!");if(!e.product)throw new Error("`prodid.product` is a mandatory item!");let t=(e.language||"EN").toUpperCase();return this.data.prodId="//"+e.company+"//"+e.product+"//"+t,this}scale(e){return e===void 0?this.data.scale:(e===null?this.data.scale=null:this.data.scale=e.toUpperCase(),this)}source(e){return e===void 0?this.data.source:(this.data.source=e||null,this)}timezone(e){return e===void 0?this.data.timezone?.name||null:(e==="UTC"?this.data.timezone=null:typeof e=="string"?this.data.timezone={name:e}:e===null?this.data.timezone=null:this.data.timezone=e,this)}toJSON(){return Object.assign({},this.data,{events:this.data.events.map(e=>e.toJSON()),timezone:this.timezone(),x:this.x()})}toString(){let e="";return e=`BEGIN:VCALENDAR\r
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
`),this.data.events.forEach(t=>e+=t.toString()),e+=Mn(this.data),e+="END:VCALENDAR",ks(e)}ttl(e){return e===void 0?this.data.ttl:(Bs(e)?this.data.ttl=e.asSeconds():e&&e>0?this.data.ttl=e:this.data.ttl=null,this)}url(e){return e===void 0?this.data.url:(this.data.url=e||null,this)}x(e,t){if(e===void 0)return be(this.data);if(typeof e=="string"&&typeof t=="string")be(this.data,e,t);else if(typeof e=="object")be(this.data,e);else throw new Error("Either key or value is not a string!");return this}};function Fs(e){return new Us(e)}var $s=Fs;function js(e){const{ctx:t,x:n,y:r,width:i,height:o,radius:s,color:a}=e;t.fillStyle=a,t.beginPath(),t.moveTo(n+s,r),t.lineTo(n+i-s,r),t.quadraticCurveTo(n+i,r,n+i,r+s),t.lineTo(n+i,r+o-s),t.quadraticCurveTo(n+i,r+o,n+i-s,r+o),t.lineTo(n+s,r+o),t.quadraticCurveTo(n,r+o,n,r+o-s),t.lineTo(n,r+s),t.quadraticCurveTo(n,r,n+s,r),t.closePath(),t.fill()}function rn(e,t,n,r){const o=document.createElement("canvas").getContext("2d");if(!o)return[];o.font=`${r}px '${n}'`;let s="";const a=[];for(const d of e){const h=s+d;o.measureText(h).width>t&&s!==""?(a.push(s),s=d):s=h}return s&&a.push(s),a}function ii(e){const{ctx:t,x:n,y:r,text:i,font:o,fontSize:s,color:a,align:d="left"}=e;t.fillStyle=a,t.font=`${s}px '${o}'`,t.textAlign=d||"left",t.fillText(i,n,r)}function Ws(e){const{ctx:t,x:n,y:r,width:i,height:o,title:s,professor:a,location:d,font:h,fontSize:u}=e,f=rn(s,i,h,u),m=rn(a,i,h,u),p=rn(d,i,h,u);let A=0;const g=[...f,...p,...m].slice(0,3);A=g.reduce((x,D,S)=>D===""?x+2:x+u,0);let E=(o-A)/2+u-7;g.forEach((x,D)=>{x!==""?(ii({ctx:t,x:n,y:r+E,text:x,font:h,fontSize:u,color:`rgba(0, 0, 0, ${D<f.length?.8:.5})`}),E+=u+5):E+=2})}async function oi(e){const{timetableName:t,lectures:n,timetableType:r,semesterName:i,semesterFontSize:o,tileFontSize:s}=e,a=["#F2CECE","#F4B3AE","#F2BCA0","#F0D3AB","#F1E1A9","#f4f2b3","#dbf4be","#beedd7","#b7e2de","#c9eaf4","#B4D3ED","#B9C5ED","#CCC6ED","#D8C1F0","#EBCAEF","#f4badb"],d=`Image_template_${r}.png`,h=new Image;h.src=d,await new Promise((p,A)=>{h.onload=p,h.onerror=A});const u=await dr.loadImage(d),f=dr.createCanvas(u.width,u.height),m=f.getContext("2d");m.drawImage(u,0,0),ii({ctx:m,x:r==="5days"?952:1302,y:78,text:i+" "+t,font:"NotoSansKR",fontSize:o,color:"#CCCCCC",align:"right"});for(const p of n){const A=a[p.courseId%16]||"#F2CECE";for(const g of p.classes){const{day:b,begin:E,end:x}=g,[D,S,N,R]=[178*b+76,E*4/3-486,171,(x-E)*4/3-7];js({ctx:m,x:D,y:S,width:N,height:R,radius:4,color:A}),Ws({ctx:m,x:D+12,y:S+8,width:N-24,height:R-16,title:p.name,professor:Di(p.professors)||"",location:g.buildingCode+" "+g.roomName||"",font:"NotoSansKR",fontSize:s})}}return f}async function Hs(e){const n=(await oi(e)).toDataURL("image/png"),r=document.createElement("a");r.href=n,r.download=`${e.timetableName}.png`,r.click(),URL.revokeObjectURL(n)}async function qs(e){const n=(await oi(e)).toDataURL("image/png"),i=await(await fetch(n)).blob();if(!navigator.clipboard?.write)return;const o=new ClipboardItem({"image/png":i});await navigator.clipboard.write([o])}function Ys(e){const{name:t,lectures:n,semesterObject:r}=e,i=$s({name:t,prodId:"//SPARCS//OTL Plus",timezone:"Asia/Seoul"});for(const d of n)for(const h of d.classes){const u=h.buildingCode+" "+h.roomName,f=new Date(r.beginning),m=(h.day+1)%7,p=new Date(f),A=p.getDay(),g=(m+7-A)%7;p.setDate(p.getDate()+g);const b=Math.floor(h.begin/60),E=h.begin%60,x=Math.floor(h.end/60),D=h.end%60,S=new Date(p);S.setHours(b,E,0,0);const N=new Date(p);N.setHours(x,D,0,0),i.createEvent({start:S,end:N,summary:d.name,location:u,repeating:{freq:Nn.WEEKLY,until:new Date(r.end)},timezone:"Asia/Seoul"}).alarms([{type:Ln.display,trigger:900}])}const o=new Blob([i.toString()],{type:"text/calendar;charset=utf-8"}),s=URL.createObjectURL(o),a=document.createElement("a");a.href=s,a.download=`${t}.ics`,a.click(),URL.revokeObjectURL(s)}const Vs=T(L)`
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
`,on=T.button`
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
`;function mn({timetableName:e,timetableLectures:t,year:n,semester:r}){const{t:i}=Ie(),o=je(),s=$e("tablet"),{query:a}=ue("GET","/semesters"),[d,h]=l.useState("idle"),u=l.useMemo(()=>a?a.data?.semesters.find(f=>f.year===n&&f.semester===r):null,[a.data,n,r]);return l.useEffect(()=>{if(d.startsWith("success")){const f=setTimeout(()=>{h("idle")},500);return()=>clearTimeout(f)}},[d]),w(Vs,{direction:s?"row":"column",gap:8,children:[w(on,{onClick:()=>{d==="idle"&&(qs({timetableName:e,lectures:t,timetableType:"5days",semesterName:n+" "+sn(r),semesterFontSize:30,tileFontSize:20}),h("successCopyImage"))},children:[c(ne,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:d=="successCopyImage"?c(Yt,{}):c(wn,{})}),!s&&c("span",{children:i("timetable.copyImage")})]}),w(on,{onClick:()=>{d==="idle"&&(Hs({timetableName:e,lectures:t,timetableType:"5days",semesterName:n+" "+sn(r),semesterFontSize:30,tileFontSize:20}),h("successDownloadImage"))},children:[c(ne,{size:16,color:o.colors.Highlight.default,onClick:()=>{},children:d=="successDownloadImage"?c(Yt,{}):c(Ni,{})}),!s&&c("span",{children:i("timetable.exportImage")})]}),w(on,{onClick:()=>{if(d==="idle"){if(!u)return;Ys({name:e,lectures:t,semesterObject:{beginning:new Date(u.beginning),end:new Date(u.end)}}),h("successDownloadCalendar")}},children:[c(ne,{size:16,color:o.colors.Highlight.default,children:d=="successDownloadCalendar"?c(Yt,{}):c(Ii,{})}),!s&&c("span",{children:i("timetable.exportICal")})]})]})}const Gs=T.div`
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
`;function mr({timetableName:e,timetableLectures:t,hover:n,setHover:r,year:i,semester:o}){const s=$e("laptop");return w(Gs,{children:[!s&&c(Ms,{timetableLectures:t,hover:n,setHover:r}),c(gs,{hover:n,setHover:r,timetableLectures:t}),!s&&c(ft,{direction:"row"}),c(ys,{timetableLectures:t,hover:n,setHover:r}),!s&&c(ft,{direction:"row"}),!s&&c(Ss,{timetableLectures:t,hover:n,setHover:r}),!s&&c(ft,{direction:"row"}),!s&&c(mn,{timetableName:e,timetableLectures:t,year:i,semester:o})]})}const Xs=T(L)`
    min-height: 0;
    padding: 0 20px 12px 20px;

    ${W.tablet} {
        padding: 8px;
    }

    ${W.mobile} {
        padding: 0 8px 8px 8px;
    }
`,vr=T(L)`
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
`,yr=T(L)`
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
`,br=T(L)`
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
`,Ks=T.div`
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
`,wr=T.div`
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
`,Qs=T.div`
    ${W.laptop} {
        height: 100px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 22px;
        border-radius: 12px;
        width: 100%;
    }
`,xr=T(L)`
    flex: 1;
    min-height: 0;

    ${W.laptop} {
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        padding: 16px;
        border-radius: 0 12px 12px 12px;
    }
`,Er=T.div`
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
`,Js=T(L)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
`,bl=gi(function(){const{status:t}=xt(),n=vn(),r=je(),i=$e("tablet"),o=$e("laptop"),s=$e("desktop"),a=l.useRef(null),d=l.useRef(null),h=l.useRef(null),[u,f]=l.useState(null),[m,p]=l.useState(null),[A,g]=l.useState(null),[b,E]=l.useState(null),[x,D]=l.useState(""),[S,N]=l.useState(-1),[R,M]=l.useState(1),[v,C]=l.useState(0),[B,k]=l.useState(0),[F,Q]=l.useState(!1),[X,K]=l.useState([]),{query:Se}=ue("GET",`/timetables/${b}`,{enabled:b!==null&&t==="success"}),{query:J,setParams:_}=ue("GET","/timetables/my-timetable",{enabled:b===null&&t==="success"}),H=t!=="success"?X:b===null?J.data?.lectures??[]:Se.data?.lectures??[],{requestFunction:ee}=ue("PATCH",`/timetables/${b}`,{onSuccess:()=>{n.invalidateQueries({queryKey:[`/timetables/${b}`]}).then(()=>{p(null),f(null)})}}),ce=l.useCallback(V=>{K(re=>re.filter(we=>we.id!==V)),p(null),f(null)},[]),q=l.useCallback(V=>{ee({action:"delete",lectureId:V})},[ee]);return l.useEffect(()=>{f(null),p(null)},[F]),l.useEffect(()=>{function V(){d.current&&(C(d.current.offsetWidth),k(d.current.offsetHeight))}return V(),window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[F]),l.useEffect(()=>{const V=re=>{a.current&&!a.current.contains(re.target)&&d.current&&!d.current.contains(re.target)&&h.current&&h.current.contains(re.target)&&p(null)};return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[]),l.useEffect(()=>{p(null),f(null),S!==-1&&_({year:S,semester:R}),K([])},[S,R]),l.useEffect(()=>{p(null),f(null)},[b]),l.useEffect(()=>{A!==null&&i&&Q(!0)},[A]),c(Xs,{direction:i?"column":"row",align:"stretch",justify:"center",gap:i?8:12,flex:"1 0 0",ref:h,children:i?w(et,{children:[w(yr,{direction:"column",gap:0,align:"stretch",justify:"stretch",style:F?{flex:"1 1 0",minHeight:0}:void 0,children:[c(or,{timeTableLectures:H,currentTimetableId:b,setCurrentTimetableId:E,setCurrentTimetableName:D,year:S,semester:R,setYear:N,setSemester:M}),c(br,{direction:"column",gap:12,align:"stretch",justify:"flex-start",flex:"1 0 0",children:c(xr,{direction:"column",gap:0,ref:d,children:c(jn,{cellWidth:(v-60)/5,fullHeight:B-60,lectureSummary:H,setTimeFilter:g,hover:u,setHover:f,selected:m,setSelected:p,removeFunction:t==="success"?b===null?void 0:q:ce})})})]}),c(Er,{children:c(mr,{timetableName:x,timetableLectures:H,hover:u,setHover:f,year:S,semester:R})}),w(Js,{direction:"row",gap:0,children:[c(mn,{timetableName:x,timetableLectures:H,year:S,semester:R}),w(L,{direction:"row",gap:4,align:"center",style:{height:"100%"},onClick:()=>{Q(!F)},children:[c(ne,{size:16,color:r.colors.Highlight.default,children:c(mi,{})}),c(P,{type:"Normal",color:"Highlight.default",children:F?"검색 닫기":"과목 검색하기"})]})]}),F&&c(vr,{direction:"row",align:"flex-start",gap:12,ref:a,children:c(wr,{children:c(Yn,{timetableLectures:H,year:S,semester:R,setNonLoginTimetable:K,hoveredLecture:u,selectedLecture:m,setSelectedLecture:p,setHoveredLecture:f,timeFilter:A,setTimeFilter:g,currentTimetableId:b})})}),m&&c(vi,{isOpen:!!m,onClose:()=>{},fullScreen:!0,header:!1,children:c(Hn,{setNonLoginTimetable:K,handleRemoveFromTimetable:t==="success"?b===null?void 0:q:ce,selectedLecture:m||(u?.length==1?u[0]:null),year:S,semester:R,onMobileModalClose:()=>{f(null),p(null)},currentTimetableId:b,timetableLectures:H})})]}):w(et,{children:[w(vr,{direction:s?"column-reverse":"row",align:"flex-start",gap:12,ref:a,children:[o&&c(Qs,{children:c(mn,{timetableName:x,timetableLectures:H,year:S,semester:R})}),c(wr,{style:{overflow:"auto"},children:c(Yn,{timetableLectures:H,year:S,semester:R,setNonLoginTimetable:K,hoveredLecture:u,selectedLecture:m,setSelectedLecture:p,setHoveredLecture:f,timeFilter:A,setTimeFilter:g,currentTimetableId:b})}),!s&&c(ft,{direction:"column"}),c(Ks,{style:{overflow:"auto"},children:c(Hn,{selectedLecture:m||(u?.length==1?u[0]:null),year:S,semester:R})})]}),c(L,{direction:"row",gap:0,children:w(yr,{direction:"column",gap:0,children:[c(or,{timeTableLectures:H,currentTimetableId:b,setCurrentTimetableId:E,setCurrentTimetableName:D,year:S,semester:R,setYear:N,setSemester:M}),w(br,{direction:o?"column":"row",gap:o?12:30,align:"stretch",justify:"flex-start",flex:"1 0 0",children:[c(xr,{direction:"column",gap:0,ref:d,children:c(jn,{cellWidth:100,fullHeight:o?B-60:B-36,lectureSummary:H,setTimeFilter:g,hover:u,setHover:f,selected:m,setSelected:p,removeFunction:t==="success"?b===null?void 0:q:ce})}),!o&&c(ft,{direction:"column"}),c(Er,{children:c(mr,{timetableName:x,timetableLectures:H,hover:u,setHover:f,year:S,semester:R})})]})]})})]})})});export{bl as default};
//# sourceMappingURL=timetable-B5_pVQbe.js.map
