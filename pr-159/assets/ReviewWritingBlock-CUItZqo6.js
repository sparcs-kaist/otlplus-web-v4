(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`e8f1d621b37faed0b2b91543723a2b797aa16389`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`3a7e0de3-393b-436a-b6b2-66feb774b97a`,e._sentryDebugIdIdentifier=`sentry-dbid-3a7e0de3-393b-436a-b6b2-66feb774b97a`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BhcktveR.js";import{n,r}from"./emotion-react-jsx-runtime.browser.esm-CMYLmp-p.js";import{n as i,t as a}from"./FlexWrapper-BdX02euX.js";import{D as o,_ as s,b as c,f as l,i as u,y as d}from"./axios-Pn7ex3V5.js";import{t as f}from"./useAPI-o0n_pJxs.js";import{t as p}from"./useTranslation-Dlxfq7Jt.js";import{t as m}from"./Typography-BEFiroNf.js";import{t as h}from"./Button-9O9_r7YS.js";import{n as g}from"./ReviewBlock-CJv4VLdZ.js";import{n as _,t as v}from"./TextInputArea-DUcXP2wJ.js";var y=t(e()),b=i(a)`
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
`;function T({name:e,lectureId:t,professors:i,year:T,semester:E}){let{t:D}=p(),{user:O,status:k}=u(),A=o(),[j,M]=(0,y.useState)(null),N=()=>{A.invalidateQueries({queryKey:[l.reviews]}),O&&A.invalidateQueries({queryKey:[l.userLectures(O.id)]}),A.invalidateQueries({queryKey:[l.writtenReviews]}),A.invalidateQueries({queryKey:[l.writableReview]})},{requestFunction:P}=f(`POST`,`/reviews`,{onSuccess:N}),{requestFunction:F}=f(`PUT`,`/reviews/${j?.id}`,{onSuccess:N}),{query:I}=f(`GET`,`/users/written-reviews`,{enabled:k===`success`}),{query:L}=f(`GET`,`/semesters`),R=(0,y.useMemo)(()=>{if(!L.data)return!1;let e=L.data.semesters.find(e=>e.year===T&&e.semester===E);return E===d.SUMMER||E===d.WINTER?!0:e?new Date(e.courseDropDeadline)<new Date:!1},[L.data]);(0,y.useEffect)(()=>{if(I.data){let e=I.data.reviews.find(e=>e.lectureId===t);M(e||null)}},[I.data,t]);let[z,B]=(0,y.useState)(``),[V,H]=(0,y.useState)(0),[U,W]=(0,y.useState)(0),[G,K]=(0,y.useState)(0);function q(){B(``),H(0),W(0),K(0)}(0,y.useEffect)(()=>{q()},[t]),(0,y.useEffect)(()=>{j?(B(j.content),H(j.grade),W(j.load),K(j.speech)):q()},[j]);function J(){R&&(j?(F({content:z,grade:V,load:U,speech:G}),s(`Edit Review`,{reviewId:j.id,lectureId:t,courseName:e,grade:V,load:U,speech:G})):(P({lectureId:t,content:z,grade:V,load:U,speech:G}),s(`Submit Review`,{lectureId:t,courseName:e,grade:V,load:U,speech:G})))}return r(b,{direction:`column`,gap:0,children:[!R&&n(w,{type:`BigBold`,color:`Text.default`,children:D(`common.review.notOpenYet`)}),r(C,{blur:!R,direction:`column`,gap:8,align:`stretch`,children:[r(a,{direction:`row`,gap:6,align:`center`,children:[n(m,{type:`NormalBold`,color:`Text.default`,children:e}),[g(i),T,c(E||d.SPRING)].map((e,t)=>n(m,{type:`Normal`,color:`Text.lighter`,children:e},t))]}),n(x,{direction:`column`,gap:0,justify:`stretch`,align:`stretch`,children:n(v,{placeholder:D(`common.review.writingPlaceholder`),value:z,handleChange:B,area:!0,disabled:!R})}),r(a,{direction:`row`,gap:20,justify:`space-between`,align:`center`,children:[n(S,{direction:`row`,gap:12,inert:!R,children:[[D(`common.grade`),V,H],[D(`common.load`),U,W],[D(`common.speech`),G,K]].map(([e,t,i])=>r(a,{direction:`row`,gap:6,align:`center`,children:[n(m,{type:`Normal`,color:`Text.default`,children:e}),n(_,{score:t,setScore:i})]},e))}),n(h,{type:z&&V&&G&&U?`selected`:`disabled`,$paddingLeft:8,$paddingTop:8,onClick:J,children:n(m,{type:`Normal`,children:D(j?`writeReviews.write.edit`:`common.upload`)})})]})]})]})}export{T as t};
//# sourceMappingURL=ReviewWritingBlock-CUItZqo6.js.map