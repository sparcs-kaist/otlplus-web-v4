import{a as f,j as s}from"./emotion-react-jsx-runtime.browser.esm-CowZ9vmr.js";import{r as a}from"./chunk-JZWAC4HX-BakFHivQ.js";import{s as v,F as c}from"./FlexWrapper-Bh93u6vd.js";import{u as j,t as $}from"./index-CQXZaxdf.js";import{B as C}from"./media-BPuRrAKu.js";import{T as I,G as P}from"./TextInputArea-BH3TKBoV.js";import{u as g,k as _,q as L}from"./useIsDevice-BW3uWYI5.js";import{T as m}from"./Typography-A6hpyEcR.js";import{p as M}from"./ReviewBlock-DNmvPt9d.js";import{u as O}from"./useUserStore-CLFj9uaB.js";import{u as A}from"./useTranslation-BXsvY-MZ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"cf9a8813e0fe21f932d804dd5bba7db112b9a0e4"};var i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="83302a5e-24b2-4de9-a50e-94e9c65a089c",e._sentryDebugIdIdentifier="sentry-dbid-83302a5e-24b2-4de9-a50e-94e9c65a089c")}catch{}})();const U=v(c)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,Y=v(c)`
    height: 160px;
`,z=v(c)`
    flex-wrap: wrap;
`,H=v(c)`
    width: 100%;
    height: 100%;
    filter: ${e=>e.blur?"blur(4px)":"none"};
    pointer-events: ${e=>e.blur?"none":"auto"};
    user-select: ${e=>e.blur?"none":"auto"};
`,J=v(m)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    white-space: nowrap;
`;function de({name:e,lectureId:i,professors:q,year:E,semester:k}){const{t:d}=A(),{user:B,status:N}=O(),o=j(),[r,Q]=a.useState(null),{requestFunction:G}=g("POST","/reviews",{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:K}=g("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:h}=g("GET","/users/written-reviews",{enabled:N==="success"}),{query:b}=g("GET","/semesters"),w=a.useMemo(()=>{if(!b.data)return!1;const t=b.data.semesters.find(n=>n.year===E&&n.semester===k);return t?new Date(t.courseDropDeadline)<new Date:!1},[b.data]);a.useEffect(()=>{if(h.data){const t=h.data.reviews.find(n=>n.lectureId===i);Q(t||null)}},[h.data,i]);const[y,x]=a.useState(""),[u,R]=a.useState(0),[l,S]=a.useState(0),[p,T]=a.useState(0);function D(){x(""),R(0),S(0),T(0)}a.useEffect(()=>{D()},[i]),a.useEffect(()=>{r?(x(r.content),R(r.grade),S(r.load),T(r.speech)):D()},[r]);function W(){w&&(r?(K({content:y,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:i,courseName:e,grade:u,load:l,speech:p})):(G({lectureId:i,content:y,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:i,courseName:e,grade:u,load:l,speech:p})))}return f(U,{direction:"column",gap:0,children:[!w&&s(J,{type:"BigBold",color:"Text.default",children:d("common.review.notOpenYet")}),f(H,{blur:!w,direction:"column",gap:8,align:"stretch",children:[f(c,{direction:"row",gap:6,align:"center",children:[s(m,{type:"NormalBold",color:"Text.default",children:e}),[M(q),E,_(k||L.SPRING)].map((t,n)=>s(m,{type:"Normal",color:"Text.lighter",children:t},n))]}),s(Y,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:s(I,{placeholder:d("common.review.writingPlaceholder"),value:y,handleChange:x,area:!0,disabled:!w})}),f(c,{direction:"row",gap:20,justify:"space-between",align:"center",children:[s(z,{direction:"row",gap:12,inert:!w,children:[[d("common.grade"),u,R],[d("common.load"),l,S],[d("common.speech"),p,T]].map(([t,n,F])=>f(c,{direction:"row",gap:6,align:"center",children:[s(m,{type:"Normal",color:"Text.default",children:t}),s(P,{score:n,setScore:F})]},t))}),s(C,{type:y&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:W,children:s(m,{type:"Normal",children:d(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{de as R};
//# sourceMappingURL=ReviewWritingBlock-B35bY_VI.js.map
