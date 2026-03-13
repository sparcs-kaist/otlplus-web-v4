import{a as w,j as i}from"./emotion-react-jsx-runtime.browser.esm-CsETgYDA.js";import{r as n}from"./chunk-JZWAC4HX-BhbM5C76.js";import{s as v,F as c}from"./FlexWrapper-CkAYkvrm.js";import{u as j,t as $}from"./index-B1hLH9eO.js";import{B as C}from"./media-eYEtlCW3.js";import{T as M,G as P}from"./TextInputArea-Dmd9Czn3.js";import{u as h,q,k as _}from"./useIsDevice-DvciEh0v.js";import{T as m}from"./Typography-Btz9MgaE.js";import{p as L}from"./ReviewBlock-CG5Hz5qM.js";import{u as O}from"./useUserStore-D3Ij3q1X.js";import{u as U}from"./useTranslation-BCHp_mok.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"50028f4e6a00984e0505e566815bed964fcaa8c1"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="4eef89f1-9306-4edd-b760-e1cc997d6abc",e._sentryDebugIdIdentifier="sentry-dbid-4eef89f1-9306-4edd-b760-e1cc997d6abc")}catch{}})();const Y=v(c)`
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
`;function de({name:e,lectureId:s,professors:k,year:B,semester:y}){const{t:d}=U(),{user:Q,status:G}=O(),o=j(),[r,D]=n.useState(null),{requestFunction:K}=h("POST","/reviews",{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${Q?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:W}=h("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${Q?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:b}=h("GET","/users/written-reviews",{enabled:G==="success"}),{query:x}=h("GET","/semesters"),f=n.useMemo(()=>{if(!x.data)return!1;const t=x.data.semesters.find(a=>a.year===B&&a.semester===y);return y===q.SUMMER||y===q.WINTER?!0:t?new Date(t.courseDropDeadline)<new Date:!1},[x.data]);n.useEffect(()=>{if(b.data){const t=b.data.reviews.find(a=>a.lectureId===s);D(t||null)}},[b.data,s]);const[g,R]=n.useState(""),[u,S]=n.useState(0),[l,T]=n.useState(0),[p,E]=n.useState(0);function N(){R(""),S(0),T(0),E(0)}n.useEffect(()=>{N()},[s]),n.useEffect(()=>{r?(R(r.content),S(r.grade),T(r.load),E(r.speech)):N()},[r]);function F(){f&&(r?(W({content:g,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:s,courseName:e,grade:u,load:l,speech:p})):(K({lectureId:s,content:g,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:s,courseName:e,grade:u,load:l,speech:p})))}return w(Y,{direction:"column",gap:0,children:[!f&&i(J,{type:"BigBold",color:"Text.default",children:d("common.review.notOpenYet")}),w(H,{blur:!f,direction:"column",gap:8,align:"stretch",children:[w(c,{direction:"row",gap:6,align:"center",children:[i(m,{type:"NormalBold",color:"Text.default",children:e}),[L(k),B,_(y||q.SPRING)].map((t,a)=>i(m,{type:"Normal",color:"Text.lighter",children:t},a))]}),i(A,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:i(M,{placeholder:d("common.review.writingPlaceholder"),value:g,handleChange:R,area:!0,disabled:!f})}),w(c,{direction:"row",gap:20,justify:"space-between",align:"center",children:[i(z,{direction:"row",gap:12,inert:!f,children:[[d("common.grade"),u,S],[d("common.load"),l,T],[d("common.speech"),p,E]].map(([t,a,I])=>w(c,{direction:"row",gap:6,align:"center",children:[i(m,{type:"Normal",color:"Text.default",children:t}),i(P,{score:a,setScore:I})]},t))}),i(C,{type:g&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:F,children:i(m,{type:"Normal",children:d(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{de as R};
//# sourceMappingURL=ReviewWritingBlock-xF9XexJI.js.map
