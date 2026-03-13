import{a as w,j as i}from"./emotion-react-jsx-runtime.browser.esm-BsafsIzL.js";import{r as a}from"./chunk-JZWAC4HX-vHqqVR0r.js";import{s as v,F as d}from"./FlexWrapper-sPmmvyxq.js";import{u as j,t as $}from"./index-Cx45iIvG.js";import{B as C}from"./media-DGSIFhgf.js";import{T as M,G as P}from"./TextInputArea-BmhSDoL5.js";import{u as h,q,k as _}from"./useIsDevice-BGnDsAVZ.js";import{T as m}from"./Typography-DYo2gcZa.js";import{p as L}from"./ReviewBlock-Bz16EXSy.js";import{u as O}from"./useUserStore-Dv1_pKSL.js";import{u as U}from"./useTranslation-DTElfOKU.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"a6bae7ce0e5c60302cda54cca3410bc6af68a091"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="4eef89f1-9306-4edd-b760-e1cc997d6abc",e._sentryDebugIdIdentifier="sentry-dbid-4eef89f1-9306-4edd-b760-e1cc997d6abc")}catch{}})();const Y=v(d)`
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
`;function ce({name:e,lectureId:s,professors:k,year:B,semester:y}){const{t:c}=U(),{user:Q,status:G}=O(),n=j(),[r,D]=a.useState(null),{requestFunction:K}=h("POST","/reviews",{onSuccess:()=>{n.invalidateQueries({queryKey:["/reviews"]}),n.invalidateQueries({queryKey:[`/users/${Q?.id}/lectures`]}),n.invalidateQueries({queryKey:["/users/written-reviews"]}),n.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:W}=h("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{n.invalidateQueries({queryKey:["/reviews"]}),n.invalidateQueries({queryKey:[`/users/${Q?.id}/lectures`]}),n.invalidateQueries({queryKey:["/users/written-reviews"]}),n.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:b}=h("GET","/users/written-reviews",{enabled:G==="success"}),{query:x}=h("GET","/semesters"),f=a.useMemo(()=>{if(!x.data)return!1;const t=x.data.semesters.find(o=>o.year===B&&o.semester===y);return y===q.SUMMER||y===q.WINTER?!0:t?new Date(t.courseDropDeadline)<new Date:!1},[x.data]);a.useEffect(()=>{if(b.data){const t=b.data.reviews.find(o=>o.lectureId===s);D(t||null)}},[b.data,s]);const[g,R]=a.useState(""),[u,S]=a.useState(0),[l,T]=a.useState(0),[p,E]=a.useState(0);function N(){R(""),S(0),T(0),E(0)}a.useEffect(()=>{N()},[s]),a.useEffect(()=>{r?(R(r.content),S(r.grade),T(r.load),E(r.speech)):N()},[r]);function F(){f&&(r?(W({content:g,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:s,courseName:e,grade:u,load:l,speech:p})):(K({lectureId:s,content:g,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:s,courseName:e,grade:u,load:l,speech:p})))}return w(Y,{direction:"column",gap:0,children:[!f&&i(J,{type:"BigBold",color:"Text.default",children:c("common.review.notOpenYet")}),w(H,{blur:!f,direction:"column",gap:8,align:"stretch",children:[w(d,{direction:"row",gap:6,align:"center",children:[i(m,{type:"NormalBold",color:"Text.default",children:e}),[L(k),B,_(y||q.SPRING)].map((t,o)=>i(m,{type:"Normal",color:"Text.lighter",children:t},o))]}),i(A,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:i(M,{placeholder:c("common.review.writingPlaceholder"),value:g,handleChange:R,area:!0,disabled:!f})}),w(d,{direction:"row",gap:20,justify:"space-between",align:"center",children:[i(z,{direction:"row",gap:12,inert:!f,children:[[c("common.grade"),u,S],[c("common.load"),l,T],[c("common.speech"),p,E]].map(([t,o,I])=>w(d,{direction:"row",gap:6,align:"center",children:[i(m,{type:"Normal",color:"Text.default",children:t}),i(P,{score:o,setScore:I})]},t))}),i(C,{type:g&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:F,children:i(m,{type:"Normal",children:c(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{ce as R};
//# sourceMappingURL=ReviewWritingBlock-DjlQIdtT.js.map
