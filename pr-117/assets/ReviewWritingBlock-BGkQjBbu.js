import{a as w,j as i}from"./emotion-react-jsx-runtime.browser.esm-DKFWqk_f.js";import{r as o}from"./chunk-JZWAC4HX-7McQ17nL.js";import{s as v,F as c}from"./FlexWrapper-VbUniZHB.js";import{u as j,t as $}from"./index-uaQVYDLZ.js";import{B as C}from"./media-7QtoqW1P.js";import{T as I,G as P}from"./TextInputArea-BMItdNgI.js";import{u as g,k as _,q as L}from"./useIsDevice-fyzYRZqR.js";import{T as m}from"./Typography-CX6lPE5h.js";import{p as M}from"./ReviewBlock-DptRD3eC.js";import{u as O}from"./useUserStore-BoDxYHAY.js";import{u as Y}from"./useTranslation-DTefliYV.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"987424ef7db70c8bde41be03a352efdebe5f59e5"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="1b7c90aa-0c35-4d95-95f6-77e2e2b6732a",e._sentryDebugIdIdentifier="sentry-dbid-1b7c90aa-0c35-4d95-95f6-77e2e2b6732a")}catch{}})();const A=v(c)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,U=v(c)`
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
    padding: 0 20px 0 0;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 10;
`;function de({name:e,lectureId:s,professors:q,year:E,semester:k}){const{t:d}=Y(),{user:B,status:N}=O(),a=j(),[r,Q]=o.useState(null),{requestFunction:G}=g("POST","/reviews",{onSuccess:()=>{a.invalidateQueries({queryKey:["/reviews"]}),a.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),a.invalidateQueries({queryKey:["/users/written-reviews"]}),a.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:K}=g("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{a.invalidateQueries({queryKey:["/reviews"]}),a.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),a.invalidateQueries({queryKey:["/users/written-reviews"]}),a.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:h}=g("GET","/users/written-reviews",{enabled:N==="success"}),{query:b}=g("GET","/semesters"),f=o.useMemo(()=>{if(!b.data)return!1;const t=b.data.semesters.find(n=>n.year===E&&n.semester===k);return t?new Date(t.courseDropDeadline)<new Date:!1},[b.data]);o.useEffect(()=>{if(h.data){const t=h.data.reviews.find(n=>n.lectureId===s);Q(t||null)}},[h.data,s]);const[y,x]=o.useState(""),[u,R]=o.useState(0),[l,S]=o.useState(0),[p,T]=o.useState(0);function D(){x(""),R(0),S(0),T(0)}o.useEffect(()=>{D()},[s]),o.useEffect(()=>{r?(x(r.content),R(r.grade),S(r.load),T(r.speech)):D()},[r]);function W(){f&&(r?(K({content:y,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:s,courseName:e,grade:u,load:l,speech:p})):(G({lectureId:s,content:y,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:s,courseName:e,grade:u,load:l,speech:p})))}return w(A,{direction:"column",gap:0,children:[!f&&i(J,{type:"BigBold",color:"Text.default",children:d("common.review.notOpenYet")}),w(H,{blur:!f,direction:"column",gap:8,align:"stretch",children:[w(c,{direction:"row",gap:6,align:"center",children:[i(m,{type:"NormalBold",color:"Text.default",children:e}),[M(q),E,_(k||L.SPRING)].map((t,n)=>i(m,{type:"Normal",color:"Text.lighter",children:t},n))]}),i(U,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:i(I,{placeholder:d("common.review.writingPlaceholder"),value:y,handleChange:x,area:!0,disabled:!f})}),w(c,{direction:"row",gap:20,justify:"space-between",align:"center",children:[i(z,{direction:"row",gap:12,inert:!f,children:[[d("common.grade"),u,R],[d("common.load"),l,S],[d("common.speech"),p,T]].map(([t,n,F])=>w(c,{direction:"row",gap:6,align:"center",children:[i(m,{type:"Normal",color:"Text.default",children:t}),i(P,{score:n,setScore:F})]},t))}),i(C,{type:y&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:W,children:i(m,{type:"Normal",children:d(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{de as R};
//# sourceMappingURL=ReviewWritingBlock-BGkQjBbu.js.map
