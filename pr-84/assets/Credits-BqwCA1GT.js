import{p as z,r as n,R as W,L as _}from"./chunk-EPOLDU6W-DUBCDYUl.js";import{u as q,a as L,j as l}from"./emotion-react-jsx-runtime.browser.esm-Cd1yPuV_.js";import{n as $,F as O}from"./FlexWrapper-CEaVn29y.js";import{x as Q,y as H,e as j,I as V,z as K,A as U,g as Y}from"./useIsDevice-cMmANA1X.js";import{I as Z}from"./IconButton-DRZfk4PH.js";import{i as N,h as G,a as J}from"./infiniteQueryBehavior-BzibcPjW.js";import{b as X}from"./index-D0e8kqVY.js";import{u as A}from"./useTranslation-CZP_BZF1.js";import{T}from"./Typography-4xh8tt69.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ce49d0962b4d8a1e630c1c635b70e239a498a29d"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f601de94-44f6-4112-9433-ee9bac2da26f",e._sentryDebugIdIdentifier="sentry-dbid-f601de94-44f6-4112-9433-ee9bac2da26f")})()}catch{}var ee=class extends Q{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:N()})}getOptimisticResult(e){return e.behavior=N(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:c}=e,h=super.createResult(e,t),{isFetching:i,isRefetching:g,isError:d,isRefetchError:r}=h,o=c.fetchMeta?.fetchMore?.direction,p=d&&o==="forward",f=i&&o==="forward",b=d&&o==="backward",w=i&&o==="backward";return{...h,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:J(t,c.data),hasPreviousPage:G(t,c.data),isFetchNextPageError:p,isFetchingNextPage:f,isFetchPreviousPageError:b,isFetchingPreviousPage:w,isRefetchError:r&&!p&&!b,isRefetching:g&&!f&&!w}}};function te(e,t){return H(e,ee)}const re=j(z.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),ne=j(z.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}));var C=new Map,B=new WeakMap,D=0,oe;function se(e){return e?(B.has(e)||(D+=1,B.set(e,D.toString())),B.get(e)):"0"}function ie(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?se(e.root):e[t]}`).toString()}function ce(e){const t=ie(e);let c=C.get(t);if(!c){const h=new Map;let i;const g=new IntersectionObserver(d=>{d.forEach(r=>{var o;const p=r.isIntersecting&&i.some(f=>r.intersectionRatio>=f);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=p),(o=h.get(r.target))==null||o.forEach(f=>{f(p,r)})})},e);i=g.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),c={id:t,observer:g,elements:h},C.set(t,c)}return c}function ae(e,t,c={},h=oe){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const o=e.getBoundingClientRect();return t(h,{isIntersecting:h,target:e,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:i,observer:g,elements:d}=ce(c),r=d.get(e)||[];return d.has(e)||d.set(e,r),r.push(t),g.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(d.delete(e),g.unobserve(e)),d.size===0&&(g.disconnect(),C.delete(i))}}function Se({threshold:e,delay:t,trackVisibility:c,rootMargin:h,root:i,triggerOnce:g,skip:d,initialInView:r,fallbackInView:o,onChange:p}={}){var f;const[b,w]=n.useState(null),S=n.useRef(p),x=n.useRef(r),[s,u]=n.useState({inView:!!r,entry:void 0});S.current=p,n.useEffect(()=>{if(x.current===void 0&&(x.current=r),d||!b)return;let y;return y=ae(b,(a,R)=>{const E=x.current;x.current=a,!(E===void 0&&!a)&&(u({inView:a,entry:R}),S.current&&S.current(a,R),R.isIntersecting&&g&&y&&(y(),y=void 0))},{root:i,rootMargin:h,threshold:e,trackVisibility:c,delay:t},o),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,b,i,h,g,d,c,o,t]);const v=(f=s.entry)==null?void 0:f.target,m=n.useRef(void 0);!b&&v&&!g&&!d&&m.current!==v&&(m.current=v,u({inView:!!r,entry:void 0}),x.current=r);const P=[w,s.inView,s.entry];return P.ref=P[0],P.inView=P[1],P.entry=P[2],P}const le=$.div`
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
`,ge=({options:e=["option1","option2","option3"],zindex:t=10,disabledOptions:c=[],setSelectedOption:h,selectedOption:i,isDetail:g=!0})=>{const d=q(),[r,o]=n.useState(!1),p=n.useRef(null),[f,b]=n.useState({top:0,left:0,width:0}),[w,S]=n.useState(0);n.useEffect(()=>{if(e.length>0){const u=document.createElement("canvas").getContext("2d");if(!u)return;u.font="14px Pretendard, sans-serif";const v=Math.max(...e.map(m=>u.measureText(m).width));S(v+50)}},[e]),n.useEffect(()=>{if(p.current){const s=p.current.getBoundingClientRect();b({top:s.top,left:s.left,width:Math.max(s.width,w)})}},[r,w]);const x=n.useRef(null);return n.useEffect(()=>{const s=()=>{if(p.current){const u=p.current.getBoundingClientRect();b({top:u.top,left:u.left,width:u.width})}};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[r]),n.useEffect(()=>{if(x.current&&e.length>0&&i>=0){const s=x.current.children[i];if(s){const v=s.getBoundingClientRect().top-x.current.getBoundingClientRect().top;x.current&&(x.current.scrollTop=v)}}},[i,r,e]),L(ue,{isExpand:r,width:w,children:[L(le,{ref:p,onClick:()=>{o(!r)},children:[e[i],l(Z,{onClick:()=>{o(!r)},styles:{padding:0},children:l(V,{size:24,color:d.colors.Highlight.default,onClick:()=>{},children:r?l(re,{}):l(ne,{})})})]}),r&&l(fe,{ref:x,top:f.top,left:f.left,width:f.width,zindex:t,isDetail:g,children:e.map((s,u)=>{const v=c.includes(u),m=i==u;return l(de,{onClick:()=>{h(u),o(!1)},disabled:v,children:l(he,{disabled:v,selected:m,children:s})},u)})})]})},Te=W.memo(ge,(e,t)=>e.options===t.options&&e.zindex===t.zindex&&e.disabledOptions===t.disabledOptions&&e.selectedOption===t.selectedOption&&e.isDetail===t.isDetail);function $e(e,t,c){const{i18n:h}=A(),{infinites:i,headers:g={},enabled:d=!0,staleTime:r=1/0,gcTime:o=300*1e3,initialOffset:p=0,limit:f,select:b=a=>a,iterate:w=()=>-1}=c,[S,x]=n.useState(void 0),[s,u]=n.useState(null),v=n.useRef(b),m=n.useRef(i);n.useEffect(()=>{v.current=b},[b]),n.useEffect(()=>{m.current=i},[i]);const P=K(e,U(t)),y=te({queryKey:[t,s],queryFn:async({pageParam:a=0})=>{const R=p+a*f,{data:E}=await X.request({method:e,url:"/api/v2"+t,params:{...s,offset:R,limit:f},headers:g});return E},initialPageParam:0,getNextPageParam:(a,R)=>{const E=w(a);if(E!==-1)return E>0?R.length:void 0;for(const I of m.current)if(a[I].length<f)return;return m.current.length>0?R.length:void 0},retry:1,staleTime:r,gcTime:o,enabled:d&&(s!==null||P.safeParse({})?.success===!0)});return n.useEffect(()=>{const a=y.data?.pages;if(!a||a.length===0){x(void 0);return}if(m.current.length===0){const I=a[a.length-1];x(v.current(I));return}const E={...a[a.length-1]};m.current.forEach(I=>{const M=a.flatMap(F=>F[I]);E[I]=M}),x(v.current(E))},[y.data]),n.useEffect(()=>{y.isEnabled&&y.refetch()},[h.resolvedLanguage]),{query:y,setParams:u,data:S}}const k=$(_)`
    text-decoration: none;
`,pe=$.a`
    text-decoration: none;
`,Ie=()=>{const{t:e}=A(),t=Y("laptop");return L(O,{direction:"column",gap:12,align:"center",justify:"stretch",children:[l(T,{color:"Text.placeholder",type:"Bigger",children:"OTL PLUS"}),L(O,{direction:"row",gap:t?10:12,justify:"space-between",children:[l(k,{to:"/makers",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.credits")})}),l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),l(k,{to:"/license",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.license")})}),l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),l(k,{to:"/privacy-policy",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.privacyPolicy")})})]}),l(pe,{href:"mailto:otlplus@sparcs.org",children:l(T,{color:"Text.placeholder",type:"Big",children:"otlplus@sparcs.org"})}),l(T,{color:"Text.placeholder",type:"Big",children:"Ⓒ 2026, SPARCS OTL TEAM"})]})};export{Ie as C,re as E,Te as S,ne as a,Se as b,$e as u};
//# sourceMappingURL=Credits-BqwCA1GT.js.map
