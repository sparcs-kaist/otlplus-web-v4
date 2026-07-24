(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`16b75b4acfb1430d5d2684c0d9447a887bdc7713`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`2a910788-fdb5-463e-9b98-0acc9e88f52b`,e._sentryDebugIdIdentifier=`sentry-dbid-2a910788-fdb5-463e-9b98-0acc9e88f52b`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-DJyuBQ5-.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-CwSC2LQX.js";import{n as i,t as a}from"./FlexWrapper-CFZ75Z8x.js";import{o,s,t as c}from"./useAPI-B9E0xg4D.js";import{a as l}from"./axios-B9Q2Zega.js";import{t as u}from"./useTranslation-BNjGUrgT.js";import{t as d}from"./Typography-BFKOQjDv.js";import{t as f}from"./Button-BXqf208u.js";import{i as p}from"./mixpanel-B3bM2rY0.js";import{t as m}from"./useUserStore-BKypNUFE.js";import{n as h}from"./ReviewBlock-C7XTpyzz.js";import{t as g}from"./GradeWrap-CyPU9zy2.js";import{t as _}from"./TextInputArea-Z-qBh-XW.js";var v=t(e()),y=i(a)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,b=i(a)`
    height: 160px;
`,x=i(a)`
    flex-wrap: wrap;
`,S=i(a)`
    width: 100%;
    height: 100%;
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    pointer-events: ${e=>e.blur?`none`:`auto`};
    user-select: ${e=>e.blur?`none`:`auto`};
`,C=i(d)`
    position: absolute;
    padding: 0 20px 0 0;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 10;
`;function w({name:e,lectureId:t,professors:i,year:w,semester:T}){let{t:E}=u(),{user:D,status:O}=m(),k=l(),[A,j]=(0,v.useState)(null),{requestFunction:M}=c(`POST`,`/reviews`,{onSuccess:()=>{k.invalidateQueries({queryKey:[`/reviews`]}),k.invalidateQueries({queryKey:[`/users/${D?.id}/lectures`]}),k.invalidateQueries({queryKey:[`/users/written-reviews`]}),k.invalidateQueries({queryKey:[`/users/writable-review`]})}}),{requestFunction:N}=c(`PUT`,`/reviews/${A?.id}`,{onSuccess:()=>{k.invalidateQueries({queryKey:[`/reviews`]}),k.invalidateQueries({queryKey:[`/users/${D?.id}/lectures`]}),k.invalidateQueries({queryKey:[`/users/written-reviews`]}),k.invalidateQueries({queryKey:[`/users/writable-review`]})}}),{query:P}=c(`GET`,`/users/written-reviews`,{enabled:O===`success`}),{query:F}=c(`GET`,`/semesters`),I=(0,v.useMemo)(()=>{if(!F.data)return!1;let e=F.data.semesters.find(e=>e.year===w&&e.semester===T);return T===o.SUMMER||T===o.WINTER?!0:e?new Date(e.courseDropDeadline)<new Date:!1},[F.data]);(0,v.useEffect)(()=>{P.data&&j(P.data.reviews.find(e=>e.lectureId===t)||null)},[P.data,t]);let[L,R]=(0,v.useState)(``),[z,B]=(0,v.useState)(0),[V,H]=(0,v.useState)(0),[U,W]=(0,v.useState)(0);function G(){R(``),B(0),H(0),W(0)}(0,v.useEffect)(()=>{G()},[t]),(0,v.useEffect)(()=>{A?(R(A.content),B(A.grade),H(A.load),W(A.speech)):G()},[A]);function K(){I&&(A?(N({content:L,grade:z,load:V,speech:U}),p(`Edit Review`,{reviewId:A.id,lectureId:t,courseName:e,grade:z,load:V,speech:U})):(M({lectureId:t,content:L,grade:z,load:V,speech:U}),p(`Submit Review`,{lectureId:t,courseName:e,grade:z,load:V,speech:U})))}return r(y,{direction:`column`,gap:0,children:[!I&&n(C,{type:`BigBold`,color:`Text.default`,children:E(`common.review.notOpenYet`)}),r(S,{blur:!I,direction:`column`,gap:8,align:`stretch`,children:[r(a,{direction:`row`,gap:6,align:`center`,children:[n(d,{type:`NormalBold`,color:`Text.default`,children:e}),[h(i),w,s(T||o.SPRING)].map((e,t)=>n(d,{type:`Normal`,color:`Text.lighter`,children:e},t))]}),n(b,{direction:`column`,gap:0,justify:`stretch`,align:`stretch`,children:n(_,{placeholder:E(`common.review.writingPlaceholder`),value:L,handleChange:R,area:!0,disabled:!I})}),r(a,{direction:`row`,gap:20,justify:`space-between`,align:`center`,children:[n(x,{direction:`row`,gap:12,inert:!I,children:[[E(`common.grade`),z,B],[E(`common.load`),V,H],[E(`common.speech`),U,W]].map(([e,t,i])=>r(a,{direction:`row`,gap:6,align:`center`,children:[n(d,{type:`Normal`,color:`Text.default`,children:e}),n(g,{score:t,setScore:i})]},e))}),n(f,{type:L&&z&&U&&V?`selected`:`disabled`,$paddingLeft:8,$paddingTop:8,onClick:K,children:n(d,{type:`Normal`,children:E(A?`writeReviews.write.edit`:`common.upload`)})})]})]})]})}export{w as t};
//# sourceMappingURL=ReviewWritingBlock-Bux8wIvF.js.map