import{a as o,j as r}from"./emotion-react-jsx-runtime.browser.esm-7w0R3wTG.js";import{p as b,r as m,y as I}from"./chunk-JZWAC4HX-Dbw9P7LM.js";import{s as a,F as l}from"./FlexWrapper-CEKwsOR0.js";import{e as y,j as f,u as k,k as $,V as p,I as N}from"./useIsDevice-vcjDp4uA.js";import{T as t}from"./Typography-B3oc9GQs.js";import{u as C}from"./useUserStore-CiDoWafC.js";import{u as R}from"./useTranslation-CCR13DjE.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"c0aa49217266cb66009d026813d07b3044ee3d8c"};var c=new e.Error().stack;c&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[c]="cc1ae703-4309-4747-9904-506047b7f273",e._sentryDebugIdIdentifier="sentry-dbid-cc1ae703-4309-4747-9904-506047b7f273")}catch{}})();const E=y(b.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})),S=y(b.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}));function j(e){return!e||e.length===0?"":`${e[0]?.name}${e.length>1?f.t("common.professors.over")+(e.length-1)+f.t("common.professors.people"):""}`}const F=a(t)`
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
`,L=a.div`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};

    &:hover {
        background-color: ${e=>e.clickable?e.theme.colors.Background.Block.dark:e.theme.colors.Background.Block.default};
    }
`,_=a(l)`
    width: 100%;
    cursor: ${e=>e.clickable?"pointer":"auto"};
    user-select: ${e=>e.clickable?"none":"auto"};
`,U=a(l)`
    cursor: ${({nonLogin:e})=>e?"not-allowed":"pointer"};
    opacity: ${({nonLogin:e})=>e?.5:1};
    color: ${({theme:e,nonLogin:c})=>c?e.colors.Text.disable:e.colors.Highlight.default};
`;function A({review:e,withWrapper:c=!0,linkToDictionary:s=!0}){const{t:i}=R(),{status:d}=C(),x=I(),{query:u}=k("GET","/users/written-reviews",{enabled:d==="success"}),{requestFunction:w}=k("PATCH",`/reviews/${e.id}/liked`,{onSuccess:()=>{B(n=>n===null?!e.likedByUser:!n)}}),[g,B]=m.useState(null),T=m.useMemo(()=>u.data?u.data.reviews.map(n=>n.id):[],[u.data]);if(!e)return null;const v=n=>{n.stopPropagation(),d==="success"&&w({reviewId:e.id,action:g??e.likedByUser?"unlike":"like"})},h=o(_,{direction:"column",align:"stretch",gap:8,padding:"3px 4px 0px 4px",clickable:s,onClick:()=>{s&&x(`/dictionary?courseId=${e.courseId}`)},children:[o(l,{direction:"column",gap:8,children:[o(l,{direction:"row",gap:6,children:[r(t,{type:"NormalBold",color:"Text.default",children:e.courseName}),r(t,{type:"Normal",color:"Text.lighter",children:j(e.professors)}),o(t,{type:"Normal",color:"Text.lighter",children:[e.year," ",$(e.semester)]})]}),r(l,{direction:"row",gap:0,style:{overflow:"hidden"},children:r(F,{type:"Normal",color:"Text.default",overflow:!c,children:e.content})})]}),o(l,{direction:"row",justify:"space-between",align:"center",gap:0,children:[o(l,{direction:"row",gap:8,children:[o(t,{type:"Normal",color:"Text.lighter",children:[i("common.review.like")," ",e.like]}),o(t,{type:"Normal",color:"Text.lighter",children:[i("common.grade")," ",p[e.grade]]}),o(t,{type:"Normal",color:"Text.lighter",children:[i("common.load")," ",p[e.load]]}),o(t,{type:"Normal",color:"Text.lighter",children:[i("common.speech")," ",p[e.speech]]})]}),!T.includes(e.id)&&o(U,{direction:"row",gap:4,align:"center",onClick:n=>v(n),nonLogin:d!=="success",children:[r(t,{type:"Normal",children:i("common.review.like")}),r(N,{size:18,children:g??e.likedByUser?r(E,{}):r(S,{})})]})]})]});return c?r(L,{clickable:s,children:h}):h}const M=m.memo(A);export{E as F,M as R,S as a,j as p};
//# sourceMappingURL=ReviewBlock-DYZQq9A5.js.map
