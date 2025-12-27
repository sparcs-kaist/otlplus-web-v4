import{n as s,F as c,j as o,a as r}from"./FlexWrapper-C0dsngQo.js";import{a as h,x as B}from"./chunk-UIGDSWPH-NakEPbl8.js";import{j as k}from"./jsx-runtime-u17CrQMm.js";import{e as g,x as p,u as w,k as N,A as C,a4 as a,l as T}from"./useIsDevice-B7HewLxx.js";import{T as t}from"./Typography-DTsae4U-.js";const $=g(k.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})),v=g(k.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}));function j(e){return!e||e.length===0?"":`${e[0]?.name}${e.length>1?p.t("common.professors.over")+(e.length-1)+p.t("common.professors.people"):""}`}const I=s(t)`
    line-height: 1.5;
    width: 100%;

    ${e=>e.overflow&&`
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    `}
`,S=s.div`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};

    &:hover {
        background-color: ${e=>e.clickable?e.theme.colors.Background.Block.dark:e.theme.colors.Background.Block.default};
    }
`,F=s(c)`
    width: 100%;
    cursor: ${e=>e.clickable?"pointer":"default"};
    user-select: ${e=>e.clickable?"none":"auto"};
`;function R({review:e,withWrapper:d=!0,linkToDictionary:i=!0}){const{t:n}=w(),x=B(),{requestFunction:f}=N("PATCH",`/reviews/${e.id}/liked`,{onSuccess:()=>{y(l=>l===null?!e.likedByUser:!l)}}),[m,y]=h.useState(null);if(!e)return;const b=l=>{l.stopPropagation(),f({reviewId:e.id,action:m??e.likedByUser?"unlike":"like"})},u=o(F,{direction:"column",align:"stretch",gap:8,padding:"0 4px",clickable:i,onClick:()=>{i&&x(`/dictionary?courseId=${e.courseId}`)},children:[o(c,{direction:"row",gap:6,children:[r(t,{type:"NormalBold",color:"Text.default",children:e.courseName}),r(t,{type:"Normal",color:"Text.lighter",children:j(e.professors)}),o(t,{type:"Normal",color:"Text.lighter",children:[e.year," ",C(e.semester)]})]}),r(c,{direction:"row",gap:0,style:{overflow:"hidden"},children:r(I,{type:"Normal",color:"Text.default",overflow:!d,children:e.content})}),o(c,{direction:"row",justify:"space-between",gap:0,children:[o(c,{direction:"row",gap:8,children:[o(t,{type:"Normal",color:"Text.lighter",children:[n("common.review.like")," ",e.like]}),o(t,{type:"Normal",color:"Text.lighter",children:[n("common.grade")," ",a[e.grade]]}),o(t,{type:"Normal",color:"Text.lighter",children:[n("common.load")," ",a[e.load]]}),o(t,{type:"Normal",color:"Text.lighter",children:[n("common.speech")," ",a[e.speech]]})]}),o(c,{direction:"row",gap:4,onClick:l=>b(l),children:[r(t,{type:"Normal",color:"Highlight.default",children:n("common.review.like")}),r(T,{size:18,color:"crimson",children:m??e.likedByUser?r($,{}):r(v,{})})]})]})]});return d?r(S,{clickable:i,children:u}):u}const z=h.memo(R);export{$ as F,z as R,v as a,j as p};
