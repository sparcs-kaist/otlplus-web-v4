import{a as f,j as s}from"./emotion-react-jsx-runtime.browser.esm-COBF2Dqe.js";import{r as n}from"./chunk-EPOLDU6W-DwUNnp0U.js";import{n as m,F as p}from"./FlexWrapper-DZKJEIiT.js";import{u as j,t as D}from"./index-uuoEkwtg.js";import{B as C}from"./media-DODiAPJ1.js";import{T as I,G as P}from"./TextInputArea-FliunAue.js";import{u as v,k as _,q as L}from"./useIsDevice-CGRKARx7.js";import{T as w}from"./Typography-BtY4k0h0.js";import{p as M}from"./ReviewBlock-DKtjckXk.js";import{u as O}from"./useUserStore-DJK6grkS.js";import{u as A}from"./useTranslation-BjAvDHh6.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"4aa08ee94c808d2da2e9c2f7c437deebb8c9aa16"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="e61a9062-fa0f-4c70-8ed0-3f82ff8aca93",e._sentryDebugIdIdentifier="sentry-dbid-e61a9062-fa0f-4c70-8ed0-3f82ff8aca93")})()}catch{}const U=m(p)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,Y=m(p)`
    height: 160px;
`,z=m(p)`
    flex-wrap: wrap;
`,H=m.div`
    width: 100%;
    height: 100%;
    filter: ${e=>e.blur?"blur(4px)":"none"};
    pointer-events: ${e=>e.blur?"none":"auto"};
    user-select: ${e=>e.blur?"none":"auto"};
`,J=m(w)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    white-space: nowrap;
`;function de({name:e,lectureId:r,professors:$,year:q,semester:E}){const{t:d}=A(),{user:k,status:N}=O(),o=j(),[t,B]=n.useState(null),{requestFunction:G}=v("POST","/reviews",{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${k?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:K}=v("PUT",`/reviews/${t?.id}`,{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${k?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:g}=v("GET","/users/written-reviews",{enabled:N==="success"}),{query:h}=v("GET","/semesters"),b=n.useMemo(()=>{if(!h.data)return!1;const i=h.data.semesters.find(a=>a.year===q&&a.semester===E);return i?new Date(i.courseDropDeadline)<new Date:!1},[h.data]);n.useEffect(()=>{if(g.data){const i=g.data.reviews.find(a=>a.lectureId===r);B(i||null)}},[g.data,r]);const[y,x]=n.useState(""),[c,T]=n.useState(0),[l,R]=n.useState(0),[u,S]=n.useState(0);function Q(){x(""),T(0),R(0),S(0)}n.useEffect(()=>{Q()},[r]),n.useEffect(()=>{t?(x(t.content),T(t.grade),R(t.load),S(t.speech)):Q()},[t]);function W(){b&&(t?(K({content:y,grade:c,load:l,speech:u}),D("Edit Review",{reviewId:t.id,lectureId:r,courseName:e,grade:c,load:l,speech:u})):(G({lectureId:r,content:y,grade:c,load:l,speech:u}),D("Submit Review",{lectureId:r,courseName:e,grade:c,load:l,speech:u})))}return f(U,{direction:"column",gap:8,align:"stretch",children:[!b&&s(J,{type:"BigBold",color:"Text.default",children:d("common.review.notOpenYet")}),f(H,{blur:!b,children:[f(p,{direction:"row",gap:6,align:"center",children:[s(w,{type:"NormalBold",color:"Text.default",children:e}),[M($),q,_(E||L.SPRING)].map((i,a)=>s(w,{type:"Normal",color:"Text.lighter",children:i},a))]}),s(Y,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:s(I,{placeholder:d("common.review.writingPlaceholder"),value:y,handleChange:x,area:!0})}),f(p,{direction:"row",gap:20,justify:"space-between",align:"center",children:[s(z,{direction:"row",gap:12,children:[[d("common.grade"),c,T],[d("common.load"),l,R],[d("common.speech"),u,S]].map(([i,a,F])=>f(p,{direction:"row",gap:6,align:"center",children:[s(w,{type:"Normal",color:"Text.default",children:i}),s(P,{score:a,setScore:F})]},i))}),s(C,{type:y&&c&&u&&l?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:W,children:s(w,{type:"Normal",children:d(t?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{de as R};
//# sourceMappingURL=ReviewWritingBlock-o6lohJqD.js.map
