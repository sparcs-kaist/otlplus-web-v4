(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`45108bf9206112498d6e1cff45a6d2c25183208f`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`14dcd5fd-684f-4c11-b346-c5e9cc59660e`,e._sentryDebugIdIdentifier=`sentry-dbid-14dcd5fd-684f-4c11-b346-c5e9cc59660e`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CaYlvQBr.js";import{r}from"./chunk-QFMPRPBF-umJJB3TD.js";import{l as i,n as a,r as o}from"./emotion-react-jsx-runtime.browser.esm-yr3k2gdL.js";import{n as s,t as c}from"./FlexWrapper-B6qM8Jl3.js";import{f as l,h as u,n as d,r as f}from"./useAPI-C_lzTPSx.js";import{n as p,r as m,t as h}from"./infiniteQueryBehavior-tKyGy5tB.js";import{t as g}from"./axios-VD_d-I_C.js";import{r as _,t as v}from"./Icon-DDHspYN9.js";import{t as y}from"./IconButton-DM4Q32oo.js";import{t as b}from"./useTranslation-C3GqpCQ4.js";import{t as x}from"./Typography-DKZu2lg8.js";import{t as S}from"./useIsDevice-BZ-Z5R8r.js";var C=class extends u{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:m()})}getOptimisticResult(e){return e.behavior=m(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:`forward`}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:`backward`}}})}createResult(e,t){let{state:n}=e,r=super.createResult(e,t),{isFetching:i,isRefetching:a,isError:o,isRefetchError:s}=r,c=n.fetchMeta?.fetchMore?.direction,l=o&&c===`forward`,u=i&&c===`forward`,d=o&&c===`backward`,f=i&&c===`backward`;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:h(t,n.data),hasPreviousPage:p(t,n.data),isFetchNextPageError:l,isFetchingNextPage:u,isFetchPreviousPageError:d,isFetchingPreviousPage:f,isRefetchError:s&&!l&&!d,isRefetching:a&&!u&&!f}}};function w(e,t){return l(e,C,t)}var T=t(e(),1),E=t(n(),1),D=_((0,E.jsx)(`path`,{d:`m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z`}),`ExpandLess`),O=_((0,E.jsx)(`path`,{d:`M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z`}),`ExpandMore`),k=new Map,A=new WeakMap,j=0,M;function N(e){return e?A.has(e)?A.get(e):(j+=1,A.set(e,j.toString()),A.get(e)):`0`}function P(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t===`root`?N(e.root):e[t]}`).toString()}function F(e){let t=P(e),n=k.get(t);if(!n){let r=new Map,i,a=new IntersectionObserver(t=>{t.forEach(t=>{let n=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&t.isVisible===void 0&&(t.isVisible=n),[...r.get(t.target)??[]].forEach(e=>{e(n,t)})})},e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},k.set(t,n)}return n}function I(e,t,n={},r=M){if(window.IntersectionObserver===void 0&&r!==void 0){let i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold==`number`?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:a,elements:o}=F(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(o.delete(e),a.unobserve(e)),o.size===0&&(a.disconnect(),k.delete(i))}}T.Component;function L({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:s,fallbackInView:c,onChange:l}={}){let[u,d]=T.useState(null),f=T.useRef(l),p=T.useRef(s),[m,h]=T.useState({inView:!!s,entry:void 0});f.current=l,T.useEffect(()=>{if(p.current===void 0&&(p.current=s),o||!u)return;let l;return l=I(u,(e,t)=>{let n=p.current;p.current=e,!(n===void 0&&!e)&&(h({inView:e,entry:t}),f.current&&f.current(e,t),t.isIntersecting&&a&&l&&(l(),l=void 0))},{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},c),()=>{l&&l()}},[Array.isArray(e)?e.toString():e,u,i,r,a,o,n,c,t]);let g=m.entry?.target,_=T.useRef(void 0);!u&&g&&!a&&!o&&_.current!==g&&(_.current=g,h({inView:!!s,entry:void 0}),p.current=s);let v=[d,m.inView,m.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}(`useInsertionEffect`in T?T.useInsertionEffect:void 0)??T.useLayoutEffect??T.useEffect;var R=s.div`
    display: flex;
    flex-direction: row;
    padding: 8px 10px;
    color: ${({theme:e})=>e.colors.Highlight.default};
    font-size: 14px;
    font-weight: 400;
    line-height: 17.5;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 6px;
    height: 36px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Button.highlight};
    }
`,z=s.div`
    display: flex;
    padding: 8px 12px;
    height: 36px;
    align-items: center;
    cursor: pointer;
    pointer-events: ${e=>e.disabled?`none`:`all`};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Section.transparent};
    }
`,B=s.div`
    width: ${({width:e})=>`${e}px`};
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
`,V=s.div`
    display: flex;
    flex-direction: column;
    height: ${e=>e.isDetail?`100px`:`250px`};
    z-index: ${e=>`${e.zindex}`};
    width: ${e=>`${e.width}px`};
    top: ${e=>`${e.top+36}px`};
    left: ${e=>`${e.left}px`};
    overflow: scroll;
    overflow-x: hidden;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-left: 1px solid ${e=>e.theme.colors.Line.default};
    border-right: 1px solid ${e=>e.theme.colors.Line.default};
    border-bottom: 1px solid ${e=>e.theme.colors.Line.default};
    background: ${e=>e.theme.colors.Background.Section.default};

    &::-webkit-scrollbar {
        width: 0;
    }
`,H=s.div`
    line-height: 17.5px;
    font-size: 14px;
    color: ${e=>e.disabled?e.theme.colors.Text.disable:e.theme.colors.Text.default};
`,U=T.memo(({options:e=[`option1`,`option2`,`option3`],zindex:t=10,disabledOptions:n=[],setSelectedOption:r,selectedOption:s,isDetail:c=!0})=>{let l=i(),[u,d]=(0,T.useState)(!1),f=(0,T.useRef)(null),[p,m]=(0,T.useState)({top:0,left:0,width:0}),[h,g]=(0,T.useState)(0);(0,T.useEffect)(()=>{if(e.length>0){let t=document.createElement(`canvas`).getContext(`2d`);if(!t)return;t.font=`14px Pretendard, sans-serif`,g(Math.max(...e.map(e=>t.measureText(e).width))+50)}},[e]),(0,T.useEffect)(()=>{if(f.current){let e=f.current.getBoundingClientRect();m({top:e.top,left:e.left,width:Math.max(e.width,h)})}},[u,h]);let _=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let e=()=>{if(f.current){let e=f.current.getBoundingClientRect();m({top:e.top,left:e.left,width:e.width})}};return e(),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[u]),(0,T.useEffect)(()=>{if(_.current&&e.length>0&&s>=0){let e=_.current.children[s];if(e){let t=e.getBoundingClientRect().top-_.current.getBoundingClientRect().top;_.current&&(_.current.scrollTop=t)}}},[s,u,e]),o(B,{isExpand:u,width:h,children:[o(R,{ref:f,onClick:()=>{d(!u)},children:[e[s],a(y,{onClick:()=>{d(!u)},styles:{padding:0},children:a(v,{size:24,color:l.colors.Highlight.default,onClick:()=>{},children:a(u?D:O,{})})})]}),u&&a(V,{ref:_,top:p.top,left:p.left,width:p.width,zindex:t,isDetail:c,children:e.map((e,t)=>{let i=n.includes(t);return a(z,{onClick:()=>{r(t),d(!1)},disabled:i,children:a(H,{disabled:i,selected:s==t,children:e})},t)})})]})},(e,t)=>e.options===t.options&&e.zindex===t.zindex&&e.disabledOptions===t.disabledOptions&&e.selectedOption===t.selectedOption&&e.isDetail===t.isDetail);function W(e,t,n){let{i18n:r}=b(),{infinites:i,headers:a={},enabled:o=!0,staleTime:s=1/0,gcTime:c=300*1e3,initialOffset:l=0,limit:u,select:p=e=>e,iterate:m=()=>-1}=n,[h,_]=(0,T.useState)(void 0),[v,y]=(0,T.useState)(null),x=(0,T.useRef)(p),S=(0,T.useRef)(i);(0,T.useEffect)(()=>{x.current=p},[p]),(0,T.useEffect)(()=>{S.current=i},[i]);let C=f(e,d(t)),E=w({queryKey:[t,v,r.resolvedLanguage],queryFn:async({pageParam:n=0})=>{let r=l+n*u,{data:i}=await g.request({method:e,url:`/api/v2`+t,params:{...v,offset:r,limit:u},headers:a});return i},initialPageParam:0,getNextPageParam:(e,t)=>{let n=m(e);if(n!==-1)return n>0?t.length:void 0;for(let t of S.current)if(e[t].length<u)return;return S.current.length>0?t.length:void 0},retry:1,staleTime:s,gcTime:c,enabled:o&&(v!==null||C.safeParse({})?.success===!0)});return(0,T.useEffect)(()=>{let e=E.data?.pages;if(!e||e.length===0){_(void 0);return}if(S.current.length===0){let t=e[e.length-1];_(x.current(t));return}let t={...e[e.length-1]};S.current.forEach(n=>{t[n]=e.flatMap(e=>e[n])}),_(x.current(t))},[E.data]),{query:E,setParams:y,data:h}}var G=s(r)`
    text-decoration: none;
`,K=s.a`
    text-decoration: none;
`,q=()=>{let{t:e}=b(),t=S(`laptop`);return o(c,{direction:`column`,gap:12,align:`center`,justify:`stretch`,children:[a(x,{color:`Text.placeholder`,type:`Bigger`,children:`OTL PLUS`}),o(c,{direction:`row`,gap:t?10:12,justify:`space-between`,children:[a(G,{to:`/makers`,children:a(x,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:e(`credits.credits`)})}),a(x,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:`|`}),a(G,{to:`/license`,children:a(x,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:e(`credits.license`)})}),a(x,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:`|`}),a(G,{to:`/privacy-policy`,children:a(x,{color:`Text.placeholder`,type:t?`Normal`:`Big`,children:e(`credits.privacyPolicy`)})})]}),a(K,{href:`mailto:otlplus@sparcs.org`,children:a(x,{color:`Text.placeholder`,type:`Big`,children:`otlplus@sparcs.org`})}),o(x,{color:`Text.placeholder`,type:`Big`,children:[`Ⓒ `,new Date().getFullYear(),`, SPARCS OTL TEAM`]})]})};export{O as a,L as i,W as n,D as o,U as r,q as t};
//# sourceMappingURL=Credits-CkKWmbqN.js.map