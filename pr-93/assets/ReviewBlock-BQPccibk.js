import{a as o,j as r}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{p as x,r as m,y as N}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{n as s,F as n}from"./FlexWrapper-B6Hxm4Zw.js";import{e as y,j as g,u as f,k as v,V as p,I as C}from"./useIsDevice-DHIpzarX.js";import{T as t}from"./Typography-DeI78L6T.js";import{u as I}from"./useUserStore-KWWdrl7d.js";import{u as j}from"./useTranslation-DrmvPmDd.js";const R=y(x.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})),S=y(x.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}));function F(e){return!e||e.length===0?"":`${e[0]?.name}${e.length>1?g.t("common.professors.over")+(e.length-1)+g.t("common.professors.people"):""}`}const E=s(t)`
    line-height: 1.5;
    width: 100%;

    word-break: break-word;
    ${e=>e.overflow&&`
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    `}
`,L=s.div`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};

    &:hover {
        background-color: ${e=>e.clickable?e.theme.colors.Background.Block.dark:e.theme.colors.Background.Block.default};
    }
`,U=s(n)`
    width: 100%;
    cursor: ${e=>e.clickable?"pointer":"auto"};
    user-select: ${e=>e.clickable?"none":"auto"};
`,O=s(n)`
    cursor: ${({nonLogin:e})=>e?"not-allowed":"pointer"};
    opacity: ${({nonLogin:e})=>e?.5:1};
    color: ${({theme:e,nonLogin:i})=>i?e.colors.Text.disable:e.colors.Highlight.default};
`;function P({review:e,withWrapper:i=!0,linkToDictionary:a=!0}){const{t:l}=j(),{status:d}=I(),b=N(),{query:u}=f("GET","/users/written-reviews",{enabled:d==="success"}),{requestFunction:w}=f("PATCH",`/reviews/${e.id}/liked`,{onSuccess:()=>{B(c=>c===null?!e.likedByUser:!c)}}),[h,B]=m.useState(null),$=m.useMemo(()=>u.data?u.data.reviews.map(c=>c.id):[],[u.data]);if(!e)return;const T=c=>{c.stopPropagation(),d==="success"&&w({reviewId:e.id,action:h??e.likedByUser?"unlike":"like"})},k=o(U,{direction:"column",align:"stretch",gap:8,padding:"3px 4px 0px 4px",clickable:a,onClick:()=>{a&&b(`/dictionary?courseId=${e.courseId}&professorId=${e.professors[0]?.id}`)},children:[o(n,{direction:"column",gap:8,children:[o(n,{direction:"row",gap:6,children:[r(t,{type:"NormalBold",color:"Text.default",children:e.courseName}),r(t,{type:"Normal",color:"Text.lighter",children:F(e.professors)}),o(t,{type:"Normal",color:"Text.lighter",children:[e.year," ",v(e.semester)]})]}),r(n,{direction:"row",gap:0,style:{overflow:"hidden"},children:r(E,{type:"Normal",color:"Text.default",overflow:!i,children:e.content})})]}),o(n,{direction:"row",justify:"space-between",align:"center",gap:0,children:[o(n,{direction:"row",gap:8,children:[o(t,{type:"Normal",color:"Text.lighter",children:[l("common.review.like")," ",e.like]}),o(t,{type:"Normal",color:"Text.lighter",children:[l("common.grade")," ",p[e.grade]]}),o(t,{type:"Normal",color:"Text.lighter",children:[l("common.load")," ",p[e.load]]}),o(t,{type:"Normal",color:"Text.lighter",children:[l("common.speech")," ",p[e.speech]]})]}),!$.includes(e.id)&&o(O,{direction:"row",gap:4,align:"center",onClick:c=>T(c),nonLogin:d!=="success",children:[r(t,{type:"Normal",children:l("common.review.like")}),r(C,{size:18,children:h??e.likedByUser?r(R,{}):r(S,{})})]})]})]});return i?r(L,{clickable:a,children:k}):k}const Q=m.memo(P);export{R as F,Q as R,S as a,F as p};
//# sourceMappingURL=ReviewBlock-BQPccibk.js.map
