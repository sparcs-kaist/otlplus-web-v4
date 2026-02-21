import{a as w,j as i}from"./emotion-react-jsx-runtime.browser.esm-rP8Do7Xr.js";import{r as a}from"./chunk-JZWAC4HX-D5pW5Urw.js";import{s as v,F as d}from"./FlexWrapper-dR-ykTWh.js";import{u as j,t as $}from"./index-BNuamEw-.js";import{B as C}from"./media-DJHdVD_n.js";import{T as I,G as P}from"./TextInputArea-DdOO0EfX.js";import{u as g,k as _,q as L}from"./useIsDevice-CFDYUrrv.js";import{T as m}from"./Typography-CmcBysRR.js";import{p as M}from"./ReviewBlock-8IS8fvqp.js";import{u as O}from"./useUserStore-CdKQUB9f.js";import{u as Y}from"./useTranslation-ByIBDwJM.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"94067a0fc0a6c1bf8f0caf11d921e9533361d16f"};var s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="1b7c90aa-0c35-4d95-95f6-77e2e2b6732a",e._sentryDebugIdIdentifier="sentry-dbid-1b7c90aa-0c35-4d95-95f6-77e2e2b6732a")}catch{}})();const A=v(d)`
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
`;function ce({name:e,lectureId:s,professors:q,year:E,semester:k}){const{t:c}=Y(),{user:B,status:N}=O(),o=j(),[r,Q]=a.useState(null),{requestFunction:G}=g("POST","/reviews",{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:K}=g("PUT",`/reviews/${r?.id}`,{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${B?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:h}=g("GET","/users/written-reviews",{enabled:N==="success"}),{query:b}=g("GET","/semesters"),f=a.useMemo(()=>{if(!b.data)return!1;const t=b.data.semesters.find(n=>n.year===E&&n.semester===k);return t?new Date(t.courseDropDeadline)<new Date:!1},[b.data]);a.useEffect(()=>{if(h.data){const t=h.data.reviews.find(n=>n.lectureId===s);Q(t||null)}},[h.data,s]);const[y,x]=a.useState(""),[u,R]=a.useState(0),[l,S]=a.useState(0),[p,T]=a.useState(0);function D(){x(""),R(0),S(0),T(0)}a.useEffect(()=>{D()},[s]),a.useEffect(()=>{r?(x(r.content),R(r.grade),S(r.load),T(r.speech)):D()},[r]);function W(){f&&(r?(K({content:y,grade:u,load:l,speech:p}),$("Edit Review",{reviewId:r.id,lectureId:s,courseName:e,grade:u,load:l,speech:p})):(G({lectureId:s,content:y,grade:u,load:l,speech:p}),$("Submit Review",{lectureId:s,courseName:e,grade:u,load:l,speech:p})))}return w(A,{direction:"column",gap:0,children:[!f&&i(J,{type:"BigBold",color:"Text.default",children:c("common.review.notOpenYet")}),w(H,{blur:!f,direction:"column",gap:8,align:"stretch",children:[w(d,{direction:"row",gap:6,align:"center",children:[i(m,{type:"NormalBold",color:"Text.default",children:e}),[M(q),E,_(k||L.SPRING)].map((t,n)=>i(m,{type:"Normal",color:"Text.lighter",children:t},n))]}),i(U,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:i(I,{placeholder:c("common.review.writingPlaceholder"),value:y,handleChange:x,area:!0,disabled:!f})}),w(d,{direction:"row",gap:20,justify:"space-between",align:"center",children:[i(z,{direction:"row",gap:12,inert:!f,children:[[c("common.grade"),u,R],[c("common.load"),l,S],[c("common.speech"),p,T]].map(([t,n,F])=>w(d,{direction:"row",gap:6,align:"center",children:[i(m,{type:"Normal",color:"Text.default",children:t}),i(P,{score:n,setScore:F})]},t))}),i(C,{type:y&&u&&p&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:W,children:i(m,{type:"Normal",children:c(r?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{ce as R};
//# sourceMappingURL=ReviewWritingBlock-B3KNm_mh.js.map
