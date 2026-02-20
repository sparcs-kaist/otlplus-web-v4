import{a as f,j as s}from"./emotion-react-jsx-runtime.browser.esm-E_cGwdOa.js";import{r as a}from"./chunk-JZWAC4HX-9KoC3cCy.js";import{s as v,F as d}from"./FlexWrapper-C4koUj4A.js";import{u as j,t as $}from"./index-D4CMutGd.js";import{B as C}from"./media-BdZQAMqM.js";import{T as I,G as P}from"./TextInputArea-TQqNhVbT.js";import{u as g,k as _,q as L}from"./useIsDevice-B5JtK9Rl.js";import{T as m}from"./Typography-B8Saw3Jv.js";import{p as M}from"./ReviewBlock-DSst6Vo1.js";import{u as O}from"./useUserStore-DVTRqgyc.js";import{u as A}from"./useTranslation-CWjj40Kz.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"aa4b834b366ac0b0132f13807ce2ff4bf1de11a2"};var i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="83302a5e-24b2-4de9-a50e-94e9c65a089c",e._sentryDebugIdIdentifier="sentry-dbid-83302a5e-24b2-4de9-a50e-94e9c65a089c")}catch{}})();const U=v(d)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,Y=v(d)`
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    white-space: nowrap;
`;function ce({name:e,lectureId:i,professors:q,year:E,semester:k}){const{t:c}=A(),{user:B,status:N}=O(),o=j(),[r,Q]=a.useState(null),{requestFunction:G}=g("POST","/reviews",{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:K}=g("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:h}=g("GET","/users/written-reviews",{enabled:N==="success"}),{query:b}=g("GET","/semesters"),w=a.useMemo(()=>{if(!b.data)return!1;const t=b.data.semesters.find(n=>n.year===E&&n.semester===k);return t?new Date(t.courseDropDeadline)<new Date:!1},[b.data]);a.useEffect(()=>{if(h.data){const t=h.data.reviews.find(n=>n.lectureId===i);Q(t||null)}},[h.data,i]);const[y,x]=a.useState(""),[u,R]=a.useState(0),[l,S]=a.useState(0),[p,T]=a.useState(0);function D(){x(""),R(0),S(0),T(0)}a.useEffect(()=>{D()},[i]),a.useEffect(()=>{r?(x(r.content),R(r.grade),S(r.load),T(r.speech)):D()},[r]);function W(){w&&(r?(K({content:y,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:i,courseName:e,grade:u,load:l,speech:p})):(G({lectureId:i,content:y,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:i,courseName:e,grade:u,load:l,speech:p})))}return f(U,{direction:"column",gap:0,children:[!w&&s(J,{type:"BigBold",color:"Text.default",children:c("common.review.notOpenYet")}),f(H,{blur:!w,direction:"column",gap:8,align:"stretch",children:[f(d,{direction:"row",gap:6,align:"center",children:[s(m,{type:"NormalBold",color:"Text.default",children:e}),[M(q),E,_(k||L.SPRING)].map((t,n)=>s(m,{type:"Normal",color:"Text.lighter",children:t},n))]}),s(Y,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:s(I,{placeholder:c("common.review.writingPlaceholder"),value:y,handleChange:x,area:!0,disabled:!w})}),f(d,{direction:"row",gap:20,justify:"space-between",align:"center",children:[s(z,{direction:"row",gap:12,inert:!w,children:[[c("common.grade"),u,R],[c("common.load"),l,S],[c("common.speech"),p,T]].map(([t,n,F])=>f(d,{direction:"row",gap:6,align:"center",children:[s(m,{type:"Normal",color:"Text.default",children:t}),s(P,{score:n,setScore:F})]},t))}),s(C,{type:y&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:W,children:s(m,{type:"Normal",children:c(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{ce as R};
//# sourceMappingURL=ReviewWritingBlock-CsVlVNzG.js.map
