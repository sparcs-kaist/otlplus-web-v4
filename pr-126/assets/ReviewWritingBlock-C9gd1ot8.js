import{a as f,j as i}from"./emotion-react-jsx-runtime.browser.esm-BRgvyGPR.js";import{r as a}from"./chunk-JZWAC4HX-B8hST6-X.js";import{s as v,F as d}from"./FlexWrapper-ZUfkltTD.js";import{u as j,t as $}from"./index-8V6jdEys.js";import{B as C}from"./media-C74Vp-aH.js";import{T as I,G as P}from"./TextInputArea-XESyYIZV.js";import{u as g,k as _,q as L}from"./useIsDevice-DF4k0jk8.js";import{T as m}from"./Typography-BX3M3c4A.js";import{p as M}from"./ReviewBlock-D50DNsc5.js";import{u as O}from"./useUserStore-C9aEVGht.js";import{u as Y}from"./useTranslation-CD3stY_K.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"9983e2cac3a456b66abe0e9ac665e9cfe9bc8fd1"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="1b7c90aa-0c35-4d95-95f6-77e2e2b6732a",e._sentryDebugIdIdentifier="sentry-dbid-1b7c90aa-0c35-4d95-95f6-77e2e2b6732a")}catch{}})();const A=v(d)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,U=v(d)`
    height: 160px;
`,z=v(d)`
    flex-wrap: wrap;
`,H=v(d)`
    width: 100%;
    height: 100%;
    filter: ${e=>e.blur?"blur(4px)":"none"};
    pointer-events: ${e=>e.blur?"none":"auto"};
    user-select: ${e=>e.blur?"none":"auto"};
`,J=v(m)`
    position: absolute;
    padding: 0 20px 0 0;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 10;
`;function ce({name:e,lectureId:s,professors:q,year:E,semester:k}){const{t:c}=Y(),{user:B,status:N}=O(),o=j(),[r,Q]=a.useState(null),{requestFunction:G}=g("POST","/reviews",{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:K}=g("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:h}=g("GET","/users/written-reviews",{enabled:N==="success"}),{query:b}=g("GET","/semesters"),w=a.useMemo(()=>{if(!b.data)return!1;const t=b.data.semesters.find(n=>n.year===E&&n.semester===k);return t?new Date(t.courseDropDeadline)<new Date:!1},[b.data]);a.useEffect(()=>{if(h.data){const t=h.data.reviews.find(n=>n.lectureId===s);Q(t||null)}},[h.data,s]);const[y,x]=a.useState(""),[u,R]=a.useState(0),[l,S]=a.useState(0),[p,T]=a.useState(0);function D(){x(""),R(0),S(0),T(0)}a.useEffect(()=>{D()},[s]),a.useEffect(()=>{r?(x(r.content),R(r.grade),S(r.load),T(r.speech)):D()},[r]);function W(){w&&(r?(K({content:y,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:s,courseName:e,grade:u,load:l,speech:p})):(G({lectureId:s,content:y,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:s,courseName:e,grade:u,load:l,speech:p})))}return f(A,{direction:"column",gap:0,children:[!w&&i(J,{type:"BigBold",color:"Text.default",children:c("common.review.notOpenYet")}),f(H,{blur:!w,direction:"column",gap:8,align:"stretch",children:[f(d,{direction:"row",gap:6,align:"center",children:[i(m,{type:"NormalBold",color:"Text.default",children:e}),[M(q),E,_(k||L.SPRING)].map((t,n)=>i(m,{type:"Normal",color:"Text.lighter",children:t},n))]}),i(U,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:i(I,{placeholder:c("common.review.writingPlaceholder"),value:y,handleChange:x,area:!0,disabled:!w})}),f(d,{direction:"row",gap:20,justify:"space-between",align:"center",children:[i(z,{direction:"row",gap:12,inert:!w,children:[[c("common.grade"),u,R],[c("common.load"),l,S],[c("common.speech"),p,T]].map(([t,n,F])=>f(d,{direction:"row",gap:6,align:"center",children:[i(m,{type:"Normal",color:"Text.default",children:t}),i(P,{score:n,setScore:F})]},t))}),i(C,{type:y&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:W,children:i(m,{type:"Normal",children:c(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{ce as R};
//# sourceMappingURL=ReviewWritingBlock-C9gd1ot8.js.map
