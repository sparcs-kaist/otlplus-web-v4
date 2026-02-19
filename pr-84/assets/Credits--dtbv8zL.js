import{p as z,r as o,R as W,L as _}from"./chunk-EPOLDU6W-zmgMqoXq.js";import{u as q,a as L,j as l}from"./emotion-react-jsx-runtime.browser.esm-B-zamEU7.js";import{n as $,F as O}from"./FlexWrapper-Cxmg7ETU.js";import{v as Q,x as H,e as j,I as V,y as K,z as U}from"./useAPI-B2f8YEht.js";import{I as Y}from"./IconButton-PFiOmA6d.js";import{i as N,h as Z,a as G}from"./infiniteQueryBehavior--5q_It6-.js";import{b as J}from"./index-CrUTr-li.js";import{u as A}from"./useTranslation-BV_BGx8x.js";import{T}from"./Typography-DoXk6ZeF.js";import{u as X}from"./useIsDevice-BuRS6W7c.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ada4c7999b6ed5c9c18808775724ee3dffa94ca2"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f7800bbb-9166-4eec-9412-b243158c9db4",e._sentryDebugIdIdentifier="sentry-dbid-f7800bbb-9166-4eec-9412-b243158c9db4")})()}catch{}var ee=class extends Q{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:N()})}getOptimisticResult(e){return e.behavior=N(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:c}=e,h=super.createResult(e,t),{isFetching:i,isRefetching:g,isError:d,isRefetchError:r}=h,n=c.fetchMeta?.fetchMore?.direction,p=d&&n==="forward",f=i&&n==="forward",x=d&&n==="backward",w=i&&n==="backward";return{...h,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:G(t,c.data),hasPreviousPage:Z(t,c.data),isFetchNextPageError:p,isFetchingNextPage:f,isFetchPreviousPageError:x,isFetchingPreviousPage:w,isRefetchError:r&&!p&&!x,isRefetching:g&&!f&&!w}}};function te(e,t){return H(e,ee)}const re=j(z.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),oe=j(z.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}));var C=new Map,B=new WeakMap,D=0,ne;function se(e){return e?(B.has(e)||(D+=1,B.set(e,D.toString())),B.get(e)):"0"}function ie(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?se(e.root):e[t]}`).toString()}function ce(e){const t=ie(e);let c=C.get(t);if(!c){const h=new Map;let i;const g=new IntersectionObserver(d=>{d.forEach(r=>{var n;const p=r.isIntersecting&&i.some(f=>r.intersectionRatio>=f);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=p),(n=h.get(r.target))==null||n.forEach(f=>{f(p,r)})})},e);i=g.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),c={id:t,observer:g,elements:h},C.set(t,c)}return c}function ae(e,t,c={},h=ne){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const n=e.getBoundingClientRect();return t(h,{isIntersecting:h,target:e,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:i,observer:g,elements:d}=ce(c),r=d.get(e)||[];return d.has(e)||d.set(e,r),r.push(t),g.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(d.delete(e),g.unobserve(e)),d.size===0&&(g.disconnect(),C.delete(i))}}function Te({threshold:e,delay:t,trackVisibility:c,rootMargin:h,root:i,triggerOnce:g,skip:d,initialInView:r,fallbackInView:n,onChange:p}={}){var f;const[x,w]=o.useState(null),S=o.useRef(p),b=o.useRef(r),[s,u]=o.useState({inView:!!r,entry:void 0});S.current=p,o.useEffect(()=>{if(b.current===void 0&&(b.current=r),d||!x)return;let y;return y=ae(x,(a,R)=>{const E=b.current;b.current=a,!(E===void 0&&!a)&&(u({inView:a,entry:R}),S.current&&S.current(a,R),R.isIntersecting&&g&&y&&(y(),y=void 0))},{root:i,rootMargin:h,threshold:e,trackVisibility:c,delay:t},n),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,x,i,h,g,d,c,n,t]);const m=(f=s.entry)==null?void 0:f.target,v=o.useRef(void 0);!x&&m&&!g&&!d&&v.current!==m&&(v.current=m,u({inView:!!r,entry:void 0}),b.current=r);const P=[w,s.inView,s.entry];return P.ref=P[0],P.inView=P[1],P.entry=P[2],P}const le=$.div`
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
`,de=$.div`
    display: flex;
    padding: 8px 12px;
    height: 36px;
    align-items: center;
    cursor: pointer;
    pointer-events: ${e=>e.disabled?"none":"all"};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Section.transparent};
    }
`,ue=$.div`
    width: ${({width:e})=>`${e}px`};
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
`,fe=$.div`
    display: flex;
    flex-direction: column;
    height: ${e=>e.isDetail?"100px":"250px"};
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
`,he=$.div`
    line-height: 17.5px;
    font-size: 14px;
    color: ${e=>e.disabled?e.theme.colors.Text.disable:e.theme.colors.Text.default};
`,ge=({options:e=["option1","option2","option3"],zindex:t=10,disabledOptions:c=[],setSelectedOption:h,selectedOption:i,isDetail:g=!0})=>{const d=q(),[r,n]=o.useState(!1),p=o.useRef(null),[f,x]=o.useState({top:0,left:0,width:0}),[w,S]=o.useState(0);o.useEffect(()=>{if(e.length>0){const u=document.createElement("canvas").getContext("2d");if(!u)return;u.font="14px Pretendard, sans-serif";const m=Math.max(...e.map(v=>u.measureText(v).width));S(m+50)}},[e]),o.useEffect(()=>{if(p.current){const s=p.current.getBoundingClientRect();x({top:s.top,left:s.left,width:Math.max(s.width,w)})}},[r,w]);const b=o.useRef(null);return o.useEffect(()=>{const s=()=>{if(p.current){const u=p.current.getBoundingClientRect();x({top:u.top,left:u.left,width:u.width})}};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[r]),o.useEffect(()=>{if(b.current&&e.length>0&&i>=0){const s=b.current.children[i];if(s){const m=s.getBoundingClientRect().top-b.current.getBoundingClientRect().top;b.current&&(b.current.scrollTop=m)}}},[i,r,e]),L(ue,{isExpand:r,width:w,children:[L(le,{ref:p,onClick:()=>{n(!r)},children:[e[i],l(Y,{onClick:()=>{n(!r)},styles:{padding:0},children:l(V,{size:24,color:d.colors.Highlight.default,onClick:()=>{},children:r?l(re,{}):l(oe,{})})})]}),r&&l(fe,{ref:b,top:f.top,left:f.left,width:f.width,zindex:t,isDetail:g,children:e.map((s,u)=>{const m=c.includes(u),v=i==u;return l(de,{onClick:()=>{h(u),n(!1)},disabled:m,children:l(he,{disabled:m,selected:v,children:s})},u)})})]})},$e=W.memo(ge,(e,t)=>e.options===t.options&&e.zindex===t.zindex&&e.disabledOptions===t.disabledOptions&&e.selectedOption===t.selectedOption&&e.isDetail===t.isDetail);function Ie(e,t,c){const{i18n:h}=A(),{infinites:i,headers:g={},enabled:d=!0,staleTime:r=1/0,gcTime:n=300*1e3,initialOffset:p=0,limit:f,select:x=a=>a,iterate:w=()=>-1}=c,[S,b]=o.useState(void 0),[s,u]=o.useState(null),m=o.useRef(x),v=o.useRef(i);o.useEffect(()=>{m.current=x},[x]),o.useEffect(()=>{v.current=i},[i]);const P=K(e,U(t)),y=te({queryKey:[t,s],queryFn:async({pageParam:a=0})=>{const R=p+a*f,{data:E}=await J.request({method:e,url:"/api/v2"+t,params:{...s,offset:R,limit:f},headers:g});return E},initialPageParam:0,getNextPageParam:(a,R)=>{const E=w(a);if(E!==-1)return E>0?R.length:void 0;for(const I of v.current)if(a[I].length<f)return;return v.current.length>0?R.length:void 0},retry:1,staleTime:r,gcTime:n,enabled:d&&(s!==null||P.safeParse({})?.success===!0)});return o.useEffect(()=>{const a=y.data?.pages;if(!a||a.length===0){b(void 0);return}if(v.current.length===0){const I=a[a.length-1];b(m.current(I));return}const E={...a[a.length-1]};v.current.forEach(I=>{const M=a.flatMap(F=>F[I]);E[I]=M}),b(m.current(E))},[y.data]),o.useEffect(()=>{y.isEnabled&&y.refetch()},[h.resolvedLanguage]),{query:y,setParams:u,data:S}}const k=$(_)`
    text-decoration: none;
`,pe=$.a`
    text-decoration: none;
`,Be=()=>{const{t:e}=A(),t=X("laptop");return L(O,{direction:"column",gap:12,align:"center",justify:"stretch",children:[l(T,{color:"Text.placeholder",type:"Bigger",children:"OTL PLUS"}),L(O,{direction:"row",gap:t?10:12,justify:"space-between",children:[l(k,{to:"/makers",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.credits")})}),l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),l(k,{to:"/license",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.license")})}),l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),l(k,{to:"/privacy-policy",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.privacyPolicy")})})]}),l(pe,{href:"mailto:otlplus@sparcs.org",children:l(T,{color:"Text.placeholder",type:"Big",children:"otlplus@sparcs.org"})}),l(T,{color:"Text.placeholder",type:"Big",children:"Ⓒ 2026, SPARCS OTL TEAM"})]})};export{Be as C,re as E,$e as S,oe as a,Te as b,Ie as u};
//# sourceMappingURL=Credits--dtbv8zL.js.map
