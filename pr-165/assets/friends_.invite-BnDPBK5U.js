(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`52be2b89e5936e23e409ee5b24a3c91eb5621559`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`fa20c859-430c-4e03-a19d-0661a1f2ca34`,e._sentryDebugIdIdentifier=`sentry-dbid-fa20c859-430c-4e03-a19d-0661a1f2ca34`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-CSJiIqT-.js";import{A as n,D as r,O as i}from"./chunk-62JRHF6Z-CrDZQhpB.js";import{n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-Bga2coHf.js";import{n as c,t as l}from"./FlexWrapper-BeiRNlwq.js";import{T as u,i as d,k as f,w as p}from"./axios-BEMFjMbS.js";import{t as m,w as h}from"./useAPI-CjEraQ4l.js";import{t as g}from"./useTranslation-DCyx5Zw-.js";import{t as _}from"./Typography-huWZaBjY.js";import{r as v,t as y}from"./friendQueries-BG4UPngL.js";var b=t(e(),1),x=()=>[{title:`OTL 시간표 친구 초대`},{name:`description`,content:`친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.`},{name:`referrer`,content:`no-referrer`},{property:`og:title`,content:`OTL 시간표 친구 초대`},{property:`og:description`,content:`친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.`}],S=c(l)`
    width: 100%;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
    text-align: center;
    overflow-y: auto;
`,C=c(l)`
    width: min(100%, 440px);
    padding: 32px;
    box-sizing: border-box;
    border-radius: 12px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`,w=c(l)`
    width: min(100%, 560px);
    flex-shrink: 0;
    margin: auto;
`,T=c.img`
    width: min(100%, 340px);
    height: auto;
    max-height: 36svh;
    object-fit: contain;
`,E=c.h1`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.BiggerBold.fontSize}px;
    font-weight: ${({theme:e})=>e.fonts.BiggerBold.fontWeight};
    line-height: 1.5;
    word-break: keep-all;
    overflow-wrap: anywhere;
`,D=c.button`
    min-height: 44px;
    padding: 12px 24px;
    border: 0;
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Highlight.default};
    color: ${({theme:e})=>e.colors.Text.onHighlight.default};
    font: inherit;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Highlight.dark};
    }

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 3px;
    }
`,O=n(function(){let{t:e}=g(),t=r(),n=``;try{let e=h.safeParse(decodeURIComponent(t.hash.slice(1)));e.success&&(n=e.data)}catch{}let c=i(),x=f(),{status:O,user:k}=d(),A=(0,b.useRef)(null),j=k&&n?`${k.id}:${n}`:null,{mutation:M,requestFunction:N}=m(`POST`,`/friends`,{onSuccess:async({friend:e})=>{await y(x),c(`/friends?friendId=${e.id}`,{replace:!0,state:{friendAddedName:e.name}})}});(0,b.useEffect)(()=>{O===`idle`&&(A.current=null),!(O!==`success`||!j||A.current===j)&&(A.current=j,N({code:n}))},[O,n,j,N]);let P=u(M.error)?M.error.response:void 0,F=P?.status,I=O===`success`&&j!==null&&A.current===j&&M.isError&&F===p.BadRequest&&P?.data?.message?.code===`SELF_FRIENDSHIP`,L=!n||F===p.BadRequest||F===p.NotFound?`friends.inviteInvalid`:F===p.TooManyRequests?`friends.inviteRateLimited`:`friends.inviteAddError`;return I?a(S,{direction:`column`,gap:0,align:`center`,justify:`flex-start`,children:o(w,{direction:`column`,gap:24,align:`center`,children:[a(T,{src:`/images/friends/self-invite.png`,alt:e(`friends.selfInviteImageAlt`),width:1024,height:1024}),o(l,{direction:`column`,gap:12,align:`center`,role:`status`,children:[a(E,{children:e(`friends.selfInviteTitle`,{name:k?.name})}),a(_,{type:`Big`,color:`Text.light`,children:e(`friends.selfInviteDescription`)})]}),a(D,{type:`button`,onClick:()=>c(`/friends`,{replace:!0}),children:e(`friends.backToFriends`)})]})}):a(S,{direction:`column`,gap:0,align:`center`,justify:`center`,children:o(C,{direction:`column`,gap:20,align:`center`,children:[a(_,{type:`BigBold`,color:`Text.default`,children:e(`friends.inviteTitle`)}),!n||M.isError&&O!==`idle`?a(_,{type:`Normal`,color:`Highlight.default`,role:`alert`,children:e(L)}):O===`idle`?o(s,{children:[a(_,{type:`Normal`,color:`Text.placeholder`,children:e(`friends.inviteLogin`)}),a(v,{})]}):a(_,{type:`Normal`,color:`Text.placeholder`,children:e(`friends.inviteAccepting`)})]})})});export{O as default,x as meta};
//# sourceMappingURL=friends_.invite-BnDPBK5U.js.map