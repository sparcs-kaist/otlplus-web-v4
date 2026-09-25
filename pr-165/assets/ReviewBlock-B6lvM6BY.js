(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`c70a54fbd7cbbb6cd210b27ccf3b8e764094a9aa`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d563ef8c-0c41-4026-a02e-c9bd108b8445`,e._sentryDebugIdIdentifier=`sentry-dbid-d563ef8c-0c41-4026-a02e-c9bd108b8445`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-Bo_PE7uw.js";import{O as r}from"./chunk-62JRHF6Z-BVIXo6It.js";import{n as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-DuV0bH4x.js";import{n as o,t as s}from"./FlexWrapper-DyUQQhLo.js";import{O as c,i as l,w as u}from"./axios-BxtEgwMC.js";import{c as d,p as f,t as p}from"./useAPI-dvh-bzEH.js";import{r as m,t as h}from"./Icon-D8nSFZSa.js";import{t as g}from"./useTranslation-CvUh8LTQ.js";import{t as _}from"./Typography-GApR5r0N.js";var v=t(e()),y=t(n(),1),b=m((0,y.jsx)(`path`,{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z`}),`Favorite`),x=m((0,y.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorderOutlined`);function S(e){return!e||e.length===0?``:`${e[0]?.name}${e.length>1?c.t(`common.professors.over`)+(e.length-1)+c.t(`common.professors.people`):``}`}var C=o(_,{shouldForwardProp:e=>e!==`overflow`})`
    line-height: 1.5;
    width: 100%;
    white-space: pre-wrap;

    word-break: break-word;
    ${e=>e.overflow&&`
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    `}
`,w=o.div`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};

    &:hover {
        background-color: ${e=>e.clickable?e.theme.colors.Background.Block.dark:e.theme.colors.Background.Block.default};
    }
`,T=o(s)`
    width: 100%;
    cursor: ${e=>e.clickable?`pointer`:`auto`};
    user-select: ${e=>e.clickable?`none`:`auto`};
`,E=o(s)`
    cursor: ${({nonLogin:e})=>e?`not-allowed`:`pointer`};
    opacity: ${({nonLogin:e})=>e?.5:1};
    color: ${({theme:e,nonLogin:t})=>t?e.colors.Text.disable:e.colors.Highlight.default};
`,D=o.button`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    padding: 8px 10px;
    border: 0;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    text-align: left;
    font: inherit;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`;function O({review:e,withWrapper:t=!0,linkToDictionary:n=!0,variant:o=`default`}){let{t:c}=g(),{status:m}=l(),y=r(),{query:O}=p(`GET`,`/users/written-reviews`,{enabled:m===`success`&&o==="default"}),{requestFunction:k}=p(`PATCH`,`/reviews/${e.id}/liked`,{onSuccess:()=>{j(t=>t===null?!e.likedByUser:!t)}}),[A,j]=(0,v.useState)(null),M=(0,v.useMemo)(()=>O.data?O.data.reviews.map(e=>e.id):[],[O.data]);if(!e)return null;if(o===`simple`)return a(D,{type:`button`,onClick:()=>{n&&y(`/dictionary?courseId=${e.courseId}&professorId=${e.professors[0]?.id??``}`)},children:[a(_,{type:`Small`,color:`Text.lighter`,children:[e.year,` `,u(e.semester)]}),i(C,{type:`Normal`,color:`Text.light`,overflow:!1,style:{lineHeight:1.25,textAlign:`justify`},children:e.content}),i(s,{direction:`row`,gap:8,children:[[c(`writeReviews.mySummary.likes`),e.like],[c(`common.grade`),f[e.grade]],[c(`common.load`),f[e.load]],[c(`common.speech`),f[e.speech]]].map(([e,t])=>a(_,{type:`Normal`,color:`Text.default`,children:[e,` `,i(`strong`,{children:t})]},e))})]});let N=t=>{t.stopPropagation(),m===`success`&&k({reviewId:e.id,action:A??e.likedByUser?d.UNLIKE:d.LIKE})},P=a(T,{direction:`column`,align:`stretch`,gap:8,padding:`3px 4px 0px 4px`,clickable:n,onClick:()=>{n&&y(`/dictionary?courseId=${e.courseId}&professorId=${e.professors[0]?.id??``}`)},children:[a(s,{direction:`column`,gap:8,children:[a(s,{direction:`row`,gap:6,style:{wordBreak:`keep-all`},children:[i(_,{type:`NormalBold`,color:`Text.default`,children:e.courseName}),i(_,{type:`Normal`,color:`Text.lighter`,children:S(e.professors)}),a(_,{type:`Normal`,color:`Text.lighter`,children:[e.year,` `,u(e.semester)]})]}),i(s,{direction:`row`,gap:0,style:{overflow:`hidden`},children:i(C,{type:`Normal`,color:`Text.default`,overflow:!t,children:e.content})})]}),a(s,{direction:`row`,justify:`space-between`,align:`center`,gap:0,children:[a(s,{direction:`row`,gap:8,children:[a(_,{type:`Normal`,color:`Text.lighter`,children:[c(`common.review.like`),` `,e.like]}),a(_,{type:`Normal`,color:`Text.lighter`,children:[c(`common.grade`),` `,f[e.grade]]}),a(_,{type:`Normal`,color:`Text.lighter`,children:[c(`common.load`),` `,f[e.load]]}),a(_,{type:`Normal`,color:`Text.lighter`,children:[c(`common.speech`),` `,f[e.speech]]})]}),!M.includes(e.id)&&a(E,{direction:`row`,gap:4,align:`center`,onClick:e=>N(e),nonLogin:m!==`success`,children:[i(_,{type:`Normal`,children:c(`common.review.like`)}),i(h,{size:18,children:A??e.likedByUser?i(b,{}):i(x,{})})]})]})]});return t?i(w,{clickable:n,children:P}):P}var k=(0,v.memo)(O);export{b as i,S as n,x as r,k as t};
//# sourceMappingURL=ReviewBlock-B6lvM6BY.js.map