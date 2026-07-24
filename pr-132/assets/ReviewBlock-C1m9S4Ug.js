(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`a875416c495d25821cf301c1312ff5823871e57b`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`466afa11-55bd-4219-9e86-8122f2d13ae2`,e._sentryDebugIdIdentifier=`sentry-dbid-466afa11-55bd-4219-9e86-8122f2d13ae2`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-7zR6nNRy.js";import{O as r}from"./chunk-QFMPRPBF-BY_RZ81q.js";import{n as i,r as a}from"./emotion-react-jsx-runtime.browser.esm-DdQfzaoZ.js";import{n as o,t as s}from"./FlexWrapper-ByC6OTEG.js";import{c,s as l,t as u,u as d}from"./useAPI-DcAIx6Eu.js";import{r as f,t as p}from"./Icon-BDGywhjj.js";import{t as m}from"./useTranslation-BjaY8OYk.js";import{t as h}from"./Typography-iG34silF.js";import{t as g}from"./useUserStore-Cfeo_O9A.js";var _=t(e()),v=t(n(),1),y=f((0,v.jsx)(`path`,{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z`}),`Favorite`),b=f((0,v.jsx)(`path`,{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05`}),`FavoriteBorderOutlined`);function x(e){return!e||e.length===0?``:`${e[0]?.name}${e.length>1?d.t(`common.professors.over`)+(e.length-1)+d.t(`common.professors.people`):``}`}var S=o(h)`
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
`,C=o.div`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};

    &:hover {
        background-color: ${e=>e.clickable?e.theme.colors.Background.Block.dark:e.theme.colors.Background.Block.default};
    }
`,w=o(s)`
    width: 100%;
    cursor: ${e=>e.clickable?`pointer`:`auto`};
    user-select: ${e=>e.clickable?`none`:`auto`};
`,T=o(s)`
    cursor: ${({nonLogin:e})=>e?`not-allowed`:`pointer`};
    opacity: ${({nonLogin:e})=>e?.5:1};
    color: ${({theme:e,nonLogin:t})=>t?e.colors.Text.disable:e.colors.Highlight.default};
`;function E({review:e,withWrapper:t=!0,linkToDictionary:n=!0}){let{t:o}=m(),{status:d}=g(),f=r(),{query:v}=u(`GET`,`/users/written-reviews`,{enabled:d===`success`}),{requestFunction:E}=u(`PATCH`,`/reviews/${e.id}/liked`,{onSuccess:()=>{O(t=>t===null?!e.likedByUser:!t)}}),[D,O]=(0,_.useState)(null),k=(0,_.useMemo)(()=>v.data?v.data.reviews.map(e=>e.id):[],[v.data]);if(!e)return null;let A=t=>{t.stopPropagation(),d===`success`&&E({reviewId:e.id,action:D??e.likedByUser?`unlike`:`like`})},j=a(w,{direction:`column`,align:`stretch`,gap:8,padding:`3px 4px 0px 4px`,clickable:n,onClick:()=>{n&&f(`/dictionary?courseId=${e.courseId}&professorId=${e.professors[0]?.id??``}`)},children:[a(s,{direction:`column`,gap:8,children:[a(s,{direction:`row`,gap:6,style:{wordBreak:`keep-all`},children:[i(h,{type:`NormalBold`,color:`Text.default`,children:e.courseName}),i(h,{type:`Normal`,color:`Text.lighter`,children:x(e.professors)}),a(h,{type:`Normal`,color:`Text.lighter`,children:[e.year,` `,l(e.semester)]})]}),i(s,{direction:`row`,gap:0,style:{overflow:`hidden`},children:i(S,{type:`Normal`,color:`Text.default`,overflow:!t,children:e.content})})]}),a(s,{direction:`row`,justify:`space-between`,align:`center`,gap:0,children:[a(s,{direction:`row`,gap:8,children:[a(h,{type:`Normal`,color:`Text.lighter`,children:[o(`common.review.like`),` `,e.like]}),a(h,{type:`Normal`,color:`Text.lighter`,children:[o(`common.grade`),` `,c[e.grade]]}),a(h,{type:`Normal`,color:`Text.lighter`,children:[o(`common.load`),` `,c[e.load]]}),a(h,{type:`Normal`,color:`Text.lighter`,children:[o(`common.speech`),` `,c[e.speech]]})]}),!k.includes(e.id)&&a(T,{direction:`row`,gap:4,align:`center`,onClick:e=>A(e),nonLogin:d!==`success`,children:[i(h,{type:`Normal`,children:o(`common.review.like`)}),i(p,{size:18,children:D??e.likedByUser?i(y,{}):i(b,{})})]})]})]});return t?i(C,{clickable:n,children:j}):j}var D=(0,_.memo)(E);export{y as i,x as n,b as r,D as t};
//# sourceMappingURL=ReviewBlock-C1m9S4Ug.js.map