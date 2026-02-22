import{a as w,j as i}from"./emotion-react-jsx-runtime.browser.esm-B5Mzfpnp.js";import{r as o}from"./chunk-JZWAC4HX-Dli3OiYn.js";import{s as v,F as c}from"./FlexWrapper-BAjXYuYd.js";import{u as j,t as $}from"./index-Bg_GZY9z.js";import{B as C}from"./media-Cuvk5UQk.js";import{G as M}from"./GradeWrap-LApuSxrl.js";import{u as h,q,k as P}from"./useIsDevice-B1pA0poh.js";import{T as _}from"./TextInputArea-CuDq9j5r.js";import{T as m}from"./Typography-COGP1R2-.js";import{p as L}from"./ReviewBlock-BEheC5R3.js";import{u as O}from"./useUserStore-5EODgYb0.js";import{u as U}from"./useTranslation-B73mMrNG.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"66edb5d634d1bce1a87eb1662822c9e9345d91bf"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="3513d400-ee59-4fb2-a18b-f4c79f183e89",e._sentryDebugIdIdentifier="sentry-dbid-3513d400-ee59-4fb2-a18b-f4c79f183e89")}catch{}})();const Y=v(c)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,A=v(c)`
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
`;function ce({name:e,lectureId:s,professors:k,year:B,semester:y}){const{t:d}=U(),{user:Q,status:G}=O(),n=j(),[r,D]=o.useState(null),{requestFunction:K}=h("POST","/reviews",{onSuccess:()=>{n.invalidateQueries({queryKey:["/reviews"]}),n.invalidateQueries({queryKey:[`/users/${Q?.id}/lectures`]}),n.invalidateQueries({queryKey:["/users/written-reviews"]}),n.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:W}=h("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{n.invalidateQueries({queryKey:["/reviews"]}),n.invalidateQueries({queryKey:[`/users/${Q?.id}/lectures`]}),n.invalidateQueries({queryKey:["/users/written-reviews"]}),n.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:b}=h("GET","/users/written-reviews",{enabled:G==="success"}),{query:x}=h("GET","/semesters"),f=o.useMemo(()=>{if(!x.data)return!1;const t=x.data.semesters.find(a=>a.year===B&&a.semester===y);return y===q.SUMMER||y===q.WINTER?!0:t?new Date(t.courseDropDeadline)<new Date:!1},[x.data]);o.useEffect(()=>{if(b.data){const t=b.data.reviews.find(a=>a.lectureId===s);D(t||null)}},[b.data,s]);const[g,R]=o.useState(""),[u,S]=o.useState(0),[l,T]=o.useState(0),[p,E]=o.useState(0);function N(){R(""),S(0),T(0),E(0)}o.useEffect(()=>{N()},[s]),o.useEffect(()=>{r?(R(r.content),S(r.grade),T(r.load),E(r.speech)):N()},[r]);function F(){f&&(r?(W({content:g,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:s,courseName:e,grade:u,load:l,speech:p})):(K({lectureId:s,content:g,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:s,courseName:e,grade:u,load:l,speech:p})))}return w(Y,{direction:"column",gap:0,children:[!f&&i(J,{type:"BigBold",color:"Text.default",children:d("common.review.notOpenYet")}),w(H,{blur:!f,direction:"column",gap:8,align:"stretch",children:[w(c,{direction:"row",gap:6,align:"center",children:[i(m,{type:"NormalBold",color:"Text.default",children:e}),[L(k),B,P(y||q.SPRING)].map((t,a)=>i(m,{type:"Normal",color:"Text.lighter",children:t},a))]}),i(A,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:i(_,{placeholder:d("common.review.writingPlaceholder"),value:g,handleChange:R,area:!0,disabled:!f})}),w(c,{direction:"row",gap:20,justify:"space-between",align:"center",children:[i(z,{direction:"row",gap:12,inert:!f,children:[[d("common.grade"),u,S],[d("common.load"),l,T],[d("common.speech"),p,E]].map(([t,a,I])=>w(c,{direction:"row",gap:6,align:"center",children:[i(m,{type:"Normal",color:"Text.default",children:t}),i(M,{score:a,setScore:I})]},t))}),i(C,{type:g&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:F,children:i(m,{type:"Normal",children:d(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{ce as R};
//# sourceMappingURL=ReviewWritingBlock-yjvjVW-j.js.map
