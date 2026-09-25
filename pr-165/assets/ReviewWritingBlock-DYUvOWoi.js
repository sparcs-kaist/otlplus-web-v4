(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`c70a54fbd7cbbb6cd210b27ccf3b8e764094a9aa`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`4bc4c4ab-512d-4dcd-acee-1f524f726bd3`,e._sentryDebugIdIdentifier=`sentry-dbid-4bc4c4ab-512d-4dcd-acee-1f524f726bd3`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Bo_PE7uw.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-DuV0bH4x.js";import{n as i,t as a}from"./FlexWrapper-DyUQQhLo.js";import{C as o,f as s,i as c,j as l,w as u,y as d}from"./axios-BxtEgwMC.js";import{t as f}from"./useAPI-dvh-bzEH.js";import{t as p}from"./useTranslation-CvUh8LTQ.js";import{t as m}from"./Typography-GApR5r0N.js";import{t as h}from"./Button-y3FG_sjY.js";import{n as g}from"./ReviewBlock-B6lvM6BY.js";import{t as _}from"./GradeWrap-2xCsw-nf.js";import{t as v}from"./TextInputArea-DDSlrO0K.js";var y=t(e()),b=i(a)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,x=i(a)`
    height: 160px;
`,S=i(a)`
    flex-wrap: wrap;
`,C=i(a)`
    width: 100%;
    height: 100%;
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    pointer-events: ${e=>e.blur?`none`:`auto`};
    user-select: ${e=>e.blur?`none`:`auto`};
`,w=i(m)`
    position: absolute;
    padding: 0 20px 0 0;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 10;
`;function T({name:e,lectureId:t,professors:i,year:T,semester:E}){let{t:D}=p(),{user:O,status:k}=c(),A=l(),[j,M]=(0,y.useState)(null),N=()=>{A.invalidateQueries({queryKey:[s.reviews]}),O&&A.invalidateQueries({queryKey:[s.userLectures(O.id)]}),A.invalidateQueries({queryKey:[s.writtenReviews]}),A.invalidateQueries({queryKey:[s.writableReview]})},{requestFunction:P}=f(`POST`,`/reviews`,{onSuccess:N}),{requestFunction:F}=f(`PUT`,`/reviews/${j?.id}`,{onSuccess:N}),{query:I}=f(`GET`,`/users/written-reviews`,{enabled:k===`success`}),{query:L}=f(`GET`,`/semesters`),R=(0,y.useMemo)(()=>{if(!L.data)return!1;let e=L.data.semesters.find(e=>e.year===T&&e.semester===E);return E===o.SUMMER||E===o.WINTER?!0:e?new Date(e.courseDropDeadline)<new Date:!1},[L.data]);(0,y.useEffect)(()=>{if(I.data){let e=I.data.reviews.find(e=>e.lectureId===t);M(e||null)}},[I.data,t]);let[z,B]=(0,y.useState)(``),[V,H]=(0,y.useState)(0),[U,W]=(0,y.useState)(0),[G,K]=(0,y.useState)(0);function q(){B(``),H(0),W(0),K(0)}(0,y.useEffect)(()=>{q()},[t]),(0,y.useEffect)(()=>{j?(B(j.content),H(j.grade),W(j.load),K(j.speech)):q()},[j]);function J(){R&&(j?(F({content:z,grade:V,load:U,speech:G}),d(`Edit Review`,{reviewId:j.id,lectureId:t,courseName:e,grade:V,load:U,speech:G})):(P({lectureId:t,content:z,grade:V,load:U,speech:G}),d(`Submit Review`,{lectureId:t,courseName:e,grade:V,load:U,speech:G})))}return r(b,{direction:`column`,gap:0,children:[!R&&n(w,{type:`BigBold`,color:`Text.default`,children:D(`common.review.notOpenYet`)}),r(C,{blur:!R,direction:`column`,gap:8,align:`stretch`,children:[r(a,{direction:`row`,gap:6,align:`center`,children:[n(m,{type:`NormalBold`,color:`Text.default`,children:e}),[g(i),T,u(E||o.SPRING)].map((e,t)=>n(m,{type:`Normal`,color:`Text.lighter`,children:e},t))]}),n(x,{direction:`column`,gap:0,justify:`stretch`,align:`stretch`,children:n(v,{placeholder:D(`common.review.writingPlaceholder`),value:z,handleChange:B,area:!0,disabled:!R})}),r(a,{direction:`row`,gap:20,justify:`space-between`,align:`center`,children:[n(S,{direction:`row`,gap:12,inert:!R,children:[[D(`common.grade`),V,H],[D(`common.load`),U,W],[D(`common.speech`),G,K]].map(([e,t,i])=>r(a,{direction:`row`,gap:6,align:`center`,children:[n(m,{type:`Normal`,color:`Text.default`,children:e}),n(_,{score:t,setScore:i})]},e))}),n(h,{type:z&&V&&G&&U?`selected`:`disabled`,$paddingLeft:8,$paddingTop:8,onClick:J,children:n(m,{type:`Normal`,children:D(j?`writeReviews.write.edit`:`common.upload`)})})]})]})]})}export{T as t};
//# sourceMappingURL=ReviewWritingBlock-DYUvOWoi.js.map