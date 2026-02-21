import{a as w,j as i}from"./emotion-react-jsx-runtime.browser.esm-B46aPpQ0.js";import{r as n}from"./chunk-JZWAC4HX-BTXvrNgo.js";import{s as v,F as d}from"./FlexWrapper-DpFAdHyj.js";import{u as j,t as $}from"./index-BC8T0JXa.js";import{B as C}from"./media-BKqD3v-R.js";import{T as M,G as P}from"./TextInputArea-DfWkhIGD.js";import{u as h,q,k as _}from"./useIsDevice-uQGufDtQ.js";import{T as m}from"./Typography-DeWRZXZ0.js";import{p as L}from"./ReviewBlock-kQFyNi8_.js";import{u as O}from"./useUserStore-J78mqFkp.js";import{u as U}from"./useTranslation-BApseLnd.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"fa23a04adf00f524ec9fbf29c8679f1b148214dc"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="ff65a86e-fd18-4964-9c6b-fc414f6f268f",e._sentryDebugIdIdentifier="sentry-dbid-ff65a86e-fd18-4964-9c6b-fc414f6f268f")}catch{}})();const Y=v(d)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,A=v(d)`
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
`;function ce({name:e,lectureId:s,professors:k,year:B,semester:y}){const{t:c}=U(),{user:Q,status:G}=O(),o=j(),[r,D]=n.useState(null),{requestFunction:K}=h("POST","/reviews",{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${Q?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:W}=h("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${Q?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:b}=h("GET","/users/written-reviews",{enabled:G==="success"}),{query:x}=h("GET","/semesters"),f=n.useMemo(()=>{if(!x.data)return!1;const t=x.data.semesters.find(a=>a.year===B&&a.semester===y);return y===q.SUMMER||y===q.WINTER?!0:t?new Date(t.courseDropDeadline)<new Date:!1},[x.data]);n.useEffect(()=>{if(b.data){const t=b.data.reviews.find(a=>a.lectureId===s);D(t||null)}},[b.data,s]);const[g,R]=n.useState(""),[u,S]=n.useState(0),[l,T]=n.useState(0),[p,E]=n.useState(0);function N(){R(""),S(0),T(0),E(0)}n.useEffect(()=>{N()},[s]),n.useEffect(()=>{r?(R(r.content),S(r.grade),T(r.load),E(r.speech)):N()},[r]);function F(){f&&(r?(W({content:g,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:s,courseName:e,grade:u,load:l,speech:p})):(K({lectureId:s,content:g,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:s,courseName:e,grade:u,load:l,speech:p})))}return w(Y,{direction:"column",gap:0,children:[!f&&i(J,{type:"BigBold",color:"Text.default",children:c("common.review.notOpenYet")}),w(H,{blur:!f,direction:"column",gap:8,align:"stretch",children:[w(d,{direction:"row",gap:6,align:"center",children:[i(m,{type:"NormalBold",color:"Text.default",children:e}),[L(k),B,_(y||q.SPRING)].map((t,a)=>i(m,{type:"Normal",color:"Text.lighter",children:t},a))]}),i(A,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:i(M,{placeholder:c("common.review.writingPlaceholder"),value:g,handleChange:R,area:!0,disabled:!f})}),w(d,{direction:"row",gap:20,justify:"space-between",align:"center",children:[i(z,{direction:"row",gap:12,inert:!f,children:[[c("common.grade"),u,S],[c("common.load"),l,T],[c("common.speech"),p,E]].map(([t,a,I])=>w(d,{direction:"row",gap:6,align:"center",children:[i(m,{type:"Normal",color:"Text.default",children:t}),i(P,{score:a,setScore:I})]},t))}),i(C,{type:g&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:F,children:i(m,{type:"Normal",children:c(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{ce as R};
//# sourceMappingURL=ReviewWritingBlock-CD4V8-RO.js.map
