(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`83a3ffd61c9fff7db424418ebc0f453e28992d34`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`106d3114-a505-48c1-9bbc-169faf5908ea`,e._sentryDebugIdIdentifier=`sentry-dbid-106d3114-a505-48c1-9bbc-169faf5908ea`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-C-kB3xhf.js";import{O as r}from"./chunk-62JRHF6Z-QnLBOTw0.js";import{n as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-Pe5o5Cru.js";import{n as o,t as s}from"./FlexWrapper-eDbv_mQh.js";import{I as c,M as l,f as u,i as d,z as f}from"./axios-DfM82Q-I.js";import{c as p,p as m,t as h}from"./useAPI-CLqMwm1S.js";import{r as g,t as _}from"./Icon-Dl__d6Hu.js";import{t as v}from"./useTranslation-vXHlqG-y.js";import{t as y}from"./Typography-D6FMiy5v.js";var b=t(e()),x=t(n(),1),S=g((0,x.jsx)(`path`,{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z`}),`Favorite`),C=g((0,x.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorderOutlined`);function w(e){return!e||e.length===0?``:`${e[0]?.name}${e.length>1?c.t(`common.professors.over`)+(e.length-1)+c.t(`common.professors.people`):``}`}var T=o(y,{shouldForwardProp:e=>e!==`overflow`})`
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
`,E=o.div`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};

    &:hover {
        background-color: ${e=>e.clickable?e.theme.colors.Background.Block.dark:e.theme.colors.Background.Block.default};
    }
`,D=o(s)`
    width: 100%;
    cursor: ${e=>e.clickable?`pointer`:`auto`};
    user-select: ${e=>e.clickable?`none`:`auto`};
`,O=o(s)`
    cursor: ${({nonLogin:e})=>e?`not-allowed`:`pointer`};
    opacity: ${({nonLogin:e})=>e?.5:1};
    color: ${({theme:e,nonLogin:t})=>t?e.colors.Text.disable:e.colors.Highlight.default};
`;function k({review:e,withWrapper:t=!0,linkToDictionary:n=!0}){let{t:o}=v(),{user:c,status:g}=d(),x=r(),k=f(),{query:A}=h(`GET`,`/users/written-reviews`,{enabled:g===`success`}),{requestFunction:j}=h(`PATCH`,`/reviews/${e.id}/liked`,{onSuccess:()=>{N(t=>t===null?!e.likedByUser:!t),k.invalidateQueries({queryKey:[u.reviews],refetchType:`none`}),k.invalidateQueries({queryKey:[u.writtenReviews],refetchType:`none`}),c&&k.invalidateQueries({queryKey:[`/users/${c.id}/reviews/liked`],refetchType:`none`})}}),[M,N]=(0,b.useState)(null),P=(0,b.useMemo)(()=>A.data?A.data.reviews.map(e=>e.id):[],[A.data]);if(!e)return null;let F=t=>{t.stopPropagation(),g===`success`&&j({reviewId:e.id,action:M??e.likedByUser?p.UNLIKE:p.LIKE})},I=a(D,{direction:`column`,align:`stretch`,gap:8,padding:`3px 4px 0px 4px`,clickable:n,onClick:()=>{n&&x(`/dictionary?courseId=${e.courseId}&professorId=${e.professors[0]?.id??``}`)},children:[a(s,{direction:`column`,gap:8,children:[a(s,{direction:`row`,gap:6,style:{wordBreak:`keep-all`},children:[i(y,{type:`NormalBold`,color:`Text.default`,children:e.courseName}),i(y,{type:`Normal`,color:`Text.lighter`,children:w(e.professors)}),a(y,{type:`Normal`,color:`Text.lighter`,children:[e.year,` `,l(e.semester)]})]}),i(s,{direction:`row`,gap:0,style:{overflow:`hidden`},children:i(T,{type:`Normal`,color:`Text.default`,overflow:!t,children:e.content})})]}),a(s,{direction:`row`,justify:`space-between`,align:`center`,gap:0,children:[a(s,{direction:`row`,gap:8,children:[a(y,{type:`Normal`,color:`Text.lighter`,children:[o(`common.review.like`),` `,e.like]}),a(y,{type:`Normal`,color:`Text.lighter`,children:[o(`common.grade`),` `,m[e.grade]]}),a(y,{type:`Normal`,color:`Text.lighter`,children:[o(`common.load`),` `,m[e.load]]}),a(y,{type:`Normal`,color:`Text.lighter`,children:[o(`common.speech`),` `,m[e.speech]]})]}),!P.includes(e.id)&&a(O,{direction:`row`,gap:4,align:`center`,onClick:e=>F(e),nonLogin:g!==`success`,children:[i(y,{type:`Normal`,children:o(`common.review.like`)}),i(_,{size:18,children:M??e.likedByUser?i(S,{}):i(C,{})})]})]})]});return t?i(E,{clickable:n,children:I}):I}var A=(0,b.memo)(k);export{S as i,w as n,C as r,A as t};
//# sourceMappingURL=ReviewBlock-B63wq26p.js.map