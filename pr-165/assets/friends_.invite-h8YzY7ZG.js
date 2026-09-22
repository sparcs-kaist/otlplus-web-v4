(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`7ebce3c4bcdc48e4202c8d6bba97b371d77f62ed`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`ce19ff5d-e222-4efd-bf7a-a9cae4a272a9`,e._sentryDebugIdIdentifier=`sentry-dbid-ce19ff5d-e222-4efd-bf7a-a9cae4a272a9`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-Cw1g-ycl.js";import{A as n,D as r,O as i}from"./chunk-62JRHF6Z-CcUftlgD.js";import{n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-UpLOPTGK.js";import{n as c,t as l}from"./FlexWrapper-1UBKXbw_.js";import{i as u,k as d}from"./axios-CEZojRwL.js";import{t as f}from"./useAPI-CZiyskX0.js";import{t as p}from"./useTranslation-B3VL59dE.js";import{t as m}from"./Typography-Dns3FT0X.js";import{r as h,t as g}from"./friendQueries-HfE51ySV.js";var _=t(e(),1),v=()=>[{title:`OTL 시간표 친구 초대`},{name:`description`,content:`친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.`},{name:`referrer`,content:`no-referrer`},{property:`og:title`,content:`OTL 시간표 친구 초대`},{property:`og:description`,content:`친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.`}],y=c(l)`
    width: 100%;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
    text-align: center;
`,b=c(l)`
    width: min(100%, 440px);
    padding: 32px;
    box-sizing: border-box;
    border-radius: 12px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`,x=n(function(){let{t:e}=p(),t=r(),n=``;try{n=decodeURIComponent(t.hash.slice(1))}catch{}let c=i(),l=d(),{status:v}=u(),x=(0,_.useRef)(null),{mutation:S,requestFunction:C}=f(`POST`,`/friends/invites/accept`,{onSuccess:async({friend:e})=>{await g(l),c(`/friends?friendId=${e.id}`,{replace:!0,state:{friendAddedName:e.name}})}});return(0,_.useEffect)(()=>{v!==`success`||!n||x.current===n||(x.current=n,C({token:n}))},[v,n,C]),a(y,{direction:`column`,gap:0,align:`center`,justify:`center`,children:o(b,{direction:`column`,gap:20,align:`center`,children:[a(m,{type:`BigBold`,color:`Text.default`,children:e(`friends.inviteTitle`)}),!n||S.isError?a(m,{type:`Normal`,color:`Highlight.default`,children:e(`friends.inviteInvalid`)}):v===`idle`?o(s,{children:[a(m,{type:`Normal`,color:`Text.placeholder`,children:e(`friends.inviteLogin`)}),a(h,{})]}):a(m,{type:`Normal`,color:`Text.placeholder`,children:e(`friends.inviteAccepting`)})]})})});export{x as default,v as meta};
//# sourceMappingURL=friends_.invite-h8YzY7ZG.js.map