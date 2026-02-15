import{a as w,j as s}from"./emotion-react-jsx-runtime.browser.esm-CvTTq0NG.js";import{r as n}from"./chunk-EPOLDU6W-BO8WORAT.js";import{n as y,F as c}from"./FlexWrapper-BiVLSljY.js";import{u as j,t as D}from"./index-BWziVkxL.js";import{B as C}from"./media-CQKFUbcS.js";import{T as I,G as P}from"./TextInputArea-RMIqTgGh.js";import{u as g,k as _,q as L}from"./useIsDevice-BbtsGMf1.js";import{T as m}from"./Typography-DFtFJDYE.js";import{p as M}from"./ReviewBlock-D_b01X6g.js";import{u as O}from"./useUserStore-DhQRHSij.js";import{u as A}from"./useTranslation-CI7HpJRZ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"050117cce54a3c651abaff7cbe45b1b89198e99e"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="87753d33-b65f-4835-88f7-3d669a07907d",e._sentryDebugIdIdentifier="sentry-dbid-87753d33-b65f-4835-88f7-3d669a07907d")})()}catch{}const U=y(c)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,Y=y(c)`
    height: 160px;
`,z=y(c)`
    flex-wrap: wrap;
`,H=y(c)`
    width: 100%;
    height: 100%;
    filter: ${e=>e.blur?"blur(4px)":"none"};
    pointer-events: ${e=>e.blur?"none":"auto"};
    user-select: ${e=>e.blur?"none":"auto"};
`,J=y(m)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    white-space: nowrap;
`;function de({name:e,lectureId:r,professors:$,year:q,semester:E}){const{t:d}=A(),{user:k,status:N}=O(),o=j(),[t,B]=n.useState(null),{requestFunction:G}=g("POST","/reviews",{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${k?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{requestFunction:K}=g("PUT",`/reviews/${t?.id}`,{onSuccess:()=>{o.invalidateQueries({queryKey:["/reviews"]}),o.invalidateQueries({queryKey:[`/users/${k?.id}/lectures`]}),o.invalidateQueries({queryKey:["/users/written-reviews"]}),o.invalidateQueries({queryKey:["/users/writable-review"]})}}),{query:h}=g("GET","/users/written-reviews",{enabled:N==="success"}),{query:b}=g("GET","/semesters"),f=n.useMemo(()=>{if(!b.data)return!1;const i=b.data.semesters.find(a=>a.year===q&&a.semester===E);return i?new Date(i.courseDropDeadline)<new Date:!1},[b.data]);n.useEffect(()=>{if(h.data){const i=h.data.reviews.find(a=>a.lectureId===r);B(i||null)}},[h.data,r]);const[v,x]=n.useState(""),[l,T]=n.useState(0),[u,R]=n.useState(0),[p,S]=n.useState(0);function Q(){x(""),T(0),R(0),S(0)}n.useEffect(()=>{Q()},[r]),n.useEffect(()=>{t?(x(t.content),T(t.grade),R(t.load),S(t.speech)):Q()},[t]);function W(){f&&(t?(K({content:v,grade:l,load:u,speech:p}),D("Edit Review",{reviewId:t.id,lectureId:r,courseName:e,grade:l,load:u,speech:p})):(G({lectureId:r,content:v,grade:l,load:u,speech:p}),D("Submit Review",{lectureId:r,courseName:e,grade:l,load:u,speech:p})))}return w(U,{direction:"column",gap:0,children:[!f&&s(J,{type:"BigBold",color:"Text.default",children:d("common.review.notOpenYet")}),w(H,{blur:!f,direction:"column",gap:8,align:"stretch",children:[w(c,{direction:"row",gap:6,align:"center",children:[s(m,{type:"NormalBold",color:"Text.default",children:e}),[M($),q,_(E||L.SPRING)].map((i,a)=>s(m,{type:"Normal",color:"Text.lighter",children:i},a))]}),s(Y,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:s(I,{placeholder:d("common.review.writingPlaceholder"),value:v,handleChange:x,area:!0,disabled:!f})}),w(c,{direction:"row",gap:20,justify:"space-between",align:"center",children:[s(z,{direction:"row",gap:12,inert:!f,children:[[d("common.grade"),l,T],[d("common.load"),u,R],[d("common.speech"),p,S]].map(([i,a,F])=>w(c,{direction:"row",gap:6,align:"center",children:[s(m,{type:"Normal",color:"Text.default",children:i}),s(P,{score:a,setScore:F})]},i))}),s(C,{type:v&&l&&p&&u?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:W,children:s(m,{type:"Normal",children:d(t?"writeReviews.write.edit":"common.upload")})})]})]})]})}export{de as R};
//# sourceMappingURL=ReviewWritingBlock-dAA6ITx-.js.map
