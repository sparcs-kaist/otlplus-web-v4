(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`cfc2fade0bf6ecc651a806033d4e995b667736f0`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d107bce2-c32c-46c1-93c3-3111ef9fa296`,e._sentryDebugIdIdentifier=`sentry-dbid-d107bce2-c32c-46c1-93c3-3111ef9fa296`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-DKN59dVB.js";import{A as n,D as r,O as i}from"./chunk-62JRHF6Z-BNfoTf4m.js";import{n as a,r as o,t as s}from"./emotion-react-jsx-runtime.browser.esm-BY944pNN.js";import{n as c,t as l}from"./FlexWrapper-Bt_2LI38.js";import{T as u,i as d,k as f,w as p}from"./axios-CPzFdlVg.js";import{t as m,w as h}from"./useAPI-B8Ex3qph.js";import{t as g}from"./useTranslation-CBKz8ZJd.js";import{t as _}from"./Typography-7ESYmJ8U.js";import{r as v,t as y}from"./friendQueries-T02VDYIM.js";var b=t(e(),1),x=()=>[{title:`OTL 시간표 친구 초대`},{name:`description`,content:`친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.`},{name:`referrer`,content:`no-referrer`},{property:`og:title`,content:`OTL 시간표 친구 초대`},{property:`og:description`,content:`친구와 OTL 시간표를 공유하고 함께 듣는 수업을 확인하세요.`}],S=c(l)`
    width: 100%;
    height: 100%;
    padding: 24px;
    box-sizing: border-box;
    text-align: center;
`,C=c(l)`
    width: min(100%, 440px);
    padding: 32px;
    box-sizing: border-box;
    border-radius: 12px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`,w=n(function(){let{t:e}=g(),t=r(),n=``;try{let e=h.safeParse(decodeURIComponent(t.hash.slice(1)));e.success&&(n=e.data)}catch{}let c=i(),l=f(),{status:x}=d(),w=(0,b.useRef)(null),{mutation:T,requestFunction:E}=m(`POST`,`/friends`,{onSuccess:async({friend:e})=>{await y(l),c(`/friends?friendId=${e.id}`,{replace:!0,state:{friendAddedName:e.name}})}});(0,b.useEffect)(()=>{x===`idle`&&(w.current=null),!(x!==`success`||!n||w.current===n)&&(w.current=n,E({code:n}))},[x,n,E]);let D=u(T.error)?T.error.response?.status:void 0,O=!n||D===p.BadRequest||D===p.NotFound?`friends.inviteInvalid`:D===p.TooManyRequests?`friends.inviteRateLimited`:`friends.inviteAddError`;return a(S,{direction:`column`,gap:0,align:`center`,justify:`center`,children:o(C,{direction:`column`,gap:20,align:`center`,children:[a(_,{type:`BigBold`,color:`Text.default`,children:e(`friends.inviteTitle`)}),!n||T.isError&&x!==`idle`?a(_,{type:`Normal`,color:`Highlight.default`,role:`alert`,children:e(O)}):x===`idle`?o(s,{children:[a(_,{type:`Normal`,color:`Text.placeholder`,children:e(`friends.inviteLogin`)}),a(v,{})]}):a(_,{type:`Normal`,color:`Text.placeholder`,children:e(`friends.inviteAccepting`)})]})})});export{w as default,x as meta};
//# sourceMappingURL=friends_.invite-DjA3J464.js.map