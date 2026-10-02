(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`3b0e1d5e696915030a0b6d616c1263ff2f429d72`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`9a534b9b-ddc6-4d41-9069-ca9bd10daeda`,e._sentryDebugIdIdentifier=`sentry-dbid-9a534b9b-ddc6-4d41-9069-ca9bd10daeda`)}catch{}})();import{D as e,S as t,n,r}from"./emotion-react-jsx-runtime.browser.esm-CEJANohN.js";import{t as i}from"./emotion-styled.browser.esm-CAIppcGC.js";import{S as a,f as o,i as s,k as c,x as l,y as u}from"./axios-BShiDBOC.js";import{t as d}from"./useAPI-B9jV7FdJ.js";import{t as f}from"./useTranslation-BLURkQ_K.js";import{t as p}from"./Typography-DA1kh1cX.js";import{t as m}from"./FlexWrapper-CUG6HLLC.js";import{t as h}from"./Button-BA1MqBzw.js";import{n as g}from"./ReviewBlock-CnZ_B_vE.js";import{t as _}from"./GradeWrap-KkRlni3u.js";import{t as v}from"./TextInputArea-Go_4g7kR.js";var y=e(t()),b=i(m)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,x=i(m)`
    height: 160px;
`,S=i(m)`
    flex-wrap: wrap;
`,C=i(m)`
    width: 100%;
    height: 100%;
    filter: ${e=>e.blur?`blur(4px)`:`none`};
    pointer-events: ${e=>e.blur?`none`:`auto`};
    user-select: ${e=>e.blur?`none`:`auto`};
`,w=i(p)`
    position: absolute;
    padding: 0 20px 0 0;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 10;
`;function T({name:e,lectureId:t,professors:i,year:T,semester:E}){let{t:D}=f(),{user:O,status:k}=s(),A=c(),[j,M]=(0,y.useState)(null),N=()=>{A.invalidateQueries({queryKey:[o.reviews]}),O&&A.invalidateQueries({queryKey:[o.userLectures(O.id)]}),A.invalidateQueries({queryKey:[o.writtenReviews]}),A.invalidateQueries({queryKey:[o.writableReview]})},{requestFunction:P}=d(`POST`,`/reviews`,{onSuccess:N}),{requestFunction:F}=d(`PUT`,`/reviews/${j?.id}`,{onSuccess:N}),{query:I}=d(`GET`,`/users/written-reviews`,{enabled:k===`success`}),{query:L}=d(`GET`,`/semesters`),R=(0,y.useMemo)(()=>{if(!L.data)return!1;let e=L.data.semesters.find(e=>e.year===T&&e.semester===E);return E===l.SUMMER||E===l.WINTER?!0:e?new Date(e.courseDropDeadline)<new Date:!1},[L.data]);(0,y.useEffect)(()=>{if(I.data){let e=I.data.reviews.find(e=>e.lectureId===t);M(e||null)}},[I.data,t]);let[z,B]=(0,y.useState)(``),[V,H]=(0,y.useState)(0),[U,W]=(0,y.useState)(0),[G,K]=(0,y.useState)(0);function q(){B(``),H(0),W(0),K(0)}(0,y.useEffect)(()=>{q()},[t]),(0,y.useEffect)(()=>{j?(B(j.content),H(j.grade),W(j.load),K(j.speech)):q()},[j]);function J(){R&&(j?(F({content:z,grade:V,load:U,speech:G}),u(`Edit Review`,{reviewId:j.id,lectureId:t,courseName:e,grade:V,load:U,speech:G})):(P({lectureId:t,content:z,grade:V,load:U,speech:G}),u(`Submit Review`,{lectureId:t,courseName:e,grade:V,load:U,speech:G})))}return r(b,{direction:`column`,gap:0,children:[!R&&n(w,{type:`BigBold`,color:`Text.default`,children:D(`common.review.notOpenYet`)}),r(C,{blur:!R,direction:`column`,gap:8,align:`stretch`,children:[r(m,{direction:`row`,gap:6,align:`center`,children:[n(p,{type:`NormalBold`,color:`Text.default`,children:e}),[g(i),T,a(E||l.SPRING)].map((e,t)=>n(p,{type:`Normal`,color:`Text.lighter`,children:e},t))]}),n(x,{direction:`column`,gap:0,justify:`stretch`,align:`stretch`,children:n(v,{placeholder:D(`common.review.writingPlaceholder`),value:z,handleChange:B,area:!0,disabled:!R})}),r(m,{direction:`row`,gap:20,justify:`space-between`,align:`center`,children:[n(S,{direction:`row`,gap:12,inert:!R,children:[[D(`common.grade`),V,H],[D(`common.load`),U,W],[D(`common.speech`),G,K]].map(([e,t,i])=>r(m,{direction:`row`,gap:6,align:`center`,children:[n(p,{type:`Normal`,color:`Text.default`,children:e}),n(_,{score:t,setScore:i})]},e))}),n(h,{type:z&&V&&G&&U?`selected`:`disabled`,$paddingLeft:8,$paddingTop:8,onClick:J,children:n(p,{type:`Normal`,children:D(j?`writeReviews.write.edit`:`common.upload`)})})]})]})]})}export{T as t};
//# sourceMappingURL=ReviewWritingBlock-Du5z9lIP.js.map