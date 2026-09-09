(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`9d05ee35d7abbcb9c26a49146ffb1c243472afe7`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`eeb1f2d4-6468-4b17-8ddd-a2aae2c3861e`,e._sentryDebugIdIdentifier=`sentry-dbid-eeb1f2d4-6468-4b17-8ddd-a2aae2c3861e`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BipPsRIu.js";import{A as n,D as r,O as i}from"./chunk-62JRHF6Z-Cc13iaRl.js";import{n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-ConDOTC-.js";import{n as c,t as l}from"./FlexWrapper-0CnG6qFw.js";import{i as u,k as d}from"./axios-Vkz2-jZx.js";import{t as f}from"./useAPI-CGx5_Ks6.js";import{t as p}from"./useTranslation-Ban0TnKi.js";import{t as m}from"./Typography-DcZogMLT.js";import{t as h}from"./FriendLoginButton-naCV_9sa.js";var g=t(e(),1),_=()=>[{title:`OTL 시간표 친구 초대`},{name:`description`,content:`친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.`},{name:`referrer`,content:`no-referrer`},{property:`og:title`,content:`OTL 시간표 친구 초대`},{property:`og:description`,content:`친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.`}],v=c(l)`
    width: 100%;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
    text-align: center;
`,y=c(l)`
    width: min(100%, 440px);
    padding: 32px;
    box-sizing: border-box;
    border-radius: 12px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`,b=n(function(){let{t:e}=p(),t=r(),n=``;try{n=decodeURIComponent(t.hash.slice(1))}catch{}let c=i(),l=d(),{status:_}=u(),b=(0,g.useRef)(null),{mutation:x,requestFunction:S}=f(`POST`,`/friends/invites/accept`,{onSuccess:async({friend:e})=>{await l.invalidateQueries({queryKey:[`/api/v2`,`/friends`],refetchType:`all`}),c(`/friends?friendId=${e.id}`,{replace:!0,state:{friendAddedName:e.name}})}});return(0,g.useEffect)(()=>{_!==`success`||!n||b.current===n||(b.current=n,S({token:n}))},[_,n,S]),a(v,{direction:`column`,gap:0,align:`center`,justify:`center`,children:o(y,{direction:`column`,gap:20,align:`center`,children:[a(m,{type:`BigBold`,color:`Text.default`,children:e(`friends.inviteTitle`)}),!n||x.isError?a(m,{type:`Normal`,color:`Highlight.default`,children:e(`friends.inviteInvalid`)}):_===`idle`?o(s,{children:[a(m,{type:`Normal`,color:`Text.placeholder`,children:e(`friends.inviteLogin`)}),a(h,{})]}):a(m,{type:`Normal`,color:`Text.placeholder`,children:e(`friends.inviteAccepting`)})]})})});export{b as default,_ as meta};
//# sourceMappingURL=friends_.invite-Dg-axR7Y.js.map