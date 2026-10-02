(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b6f5295eb01b6f9b62c55f3becfc83a2448edba3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`e42849de-7082-412c-b363-d92fe4e06383`,e._sentryDebugIdIdentifier=`sentry-dbid-e42849de-7082-412c-b363-d92fe4e06383`)}catch{}})();import{D as e,S as t,n,r,x as i}from"./emotion-react-jsx-runtime.browser.esm-Cnk_Aq3J.js";import{O as a}from"./chunk-62JRHF6Z-BqbRoCcB.js";import{t as o}from"./emotion-styled.browser.esm-BrBV03_t.js";import{E as s,S as c,i as l}from"./axios-Du-5RfZe.js";import{c as u,p as d,t as f}from"./useAPI-DetRwDxU.js";import{r as p,t as m}from"./Icon-BrZuvKGl.js";import{t as h}from"./useTranslation-DcVxXeFP.js";import{t as g}from"./Typography-BmW4OtQd.js";import{t as _}from"./FlexWrapper-Dj4SbSah.js";var v=e(t()),y=e(i(),1),b=p((0,y.jsx)(`path`,{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z`}),`Favorite`),x=p((0,y.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorderOutlined`);function S(e){return!e||e.length===0?``:`${e[0]?.name}${e.length>1?s.t(`common.professors.over`)+(e.length-1)+s.t(`common.professors.people`):``}`}var C=o(g)`
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
`,T=o(_)`
    width: 100%;
    cursor: ${e=>e.clickable?`pointer`:`auto`};
    user-select: ${e=>e.clickable?`none`:`auto`};
`,E=o(_)`
    cursor: ${({nonLogin:e})=>e?`not-allowed`:`pointer`};
    opacity: ${({nonLogin:e})=>e?.5:1};
    color: ${({theme:e,nonLogin:t})=>t?e.colors.Text.disable:e.colors.Highlight.default};
`;function D({review:e,withWrapper:t=!0,linkToDictionary:i=!0}){let{t:o}=h(),{status:s}=l(),p=a(),{query:y}=f(`GET`,`/users/written-reviews`,{enabled:s===`success`}),{requestFunction:D}=f(`PATCH`,`/reviews/${e.id}/liked`,{onSuccess:()=>{k(t=>t===null?!e.likedByUser:!t)}}),[O,k]=(0,v.useState)(null),A=(0,v.useMemo)(()=>y.data?y.data.reviews.map(e=>e.id):[],[y.data]);if(!e)return null;let j=t=>{t.stopPropagation(),s===`success`&&D({reviewId:e.id,action:O??e.likedByUser?u.UNLIKE:u.LIKE})},M=r(T,{direction:`column`,align:`stretch`,gap:8,padding:`3px 4px 0px 4px`,clickable:i,onClick:()=>{i&&p(`/dictionary?courseId=${e.courseId}&professorId=${e.professors[0]?.id??``}`)},children:[r(_,{direction:`column`,gap:8,children:[r(_,{direction:`row`,gap:6,style:{wordBreak:`keep-all`},children:[n(g,{type:`NormalBold`,color:`Text.default`,children:e.courseName}),n(g,{type:`Normal`,color:`Text.lighter`,children:S(e.professors)}),r(g,{type:`Normal`,color:`Text.lighter`,children:[e.year,` `,c(e.semester)]})]}),n(_,{direction:`row`,gap:0,style:{overflow:`hidden`},children:n(C,{type:`Normal`,color:`Text.default`,overflow:!t,children:e.content})})]}),r(_,{direction:`row`,justify:`space-between`,align:`center`,gap:0,children:[r(_,{direction:`row`,gap:8,children:[r(g,{type:`Normal`,color:`Text.lighter`,children:[o(`common.review.like`),` `,e.like]}),r(g,{type:`Normal`,color:`Text.lighter`,children:[o(`common.grade`),` `,d[e.grade]]}),r(g,{type:`Normal`,color:`Text.lighter`,children:[o(`common.load`),` `,d[e.load]]}),r(g,{type:`Normal`,color:`Text.lighter`,children:[o(`common.speech`),` `,d[e.speech]]})]}),!A.includes(e.id)&&r(E,{direction:`row`,gap:4,align:`center`,onClick:e=>j(e),nonLogin:s!==`success`,children:[n(g,{type:`Normal`,children:o(`common.review.like`)}),n(m,{size:18,children:O??e.likedByUser?n(b,{}):n(x,{})})]})]})]});return t?n(w,{clickable:i,children:M}):M}var O=(0,v.memo)(D);export{b as i,S as n,x as r,O as t};
//# sourceMappingURL=ReviewBlock-DojcnqHT.js.map