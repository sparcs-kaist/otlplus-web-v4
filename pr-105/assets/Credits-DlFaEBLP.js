import{p as z,r as n,L as W}from"./chunk-EPOLDU6W-BN-euhK0.js";import{u as _,a as B,j as u}from"./emotion-react-jsx-runtime.browser.esm-Df0_1SPv.js";import{n as $,F as N}from"./FlexWrapper-BRlmLh17.js";import{x as q,y as Q,e as j,I as H,z as V,A as Y,g as K}from"./useIsDevice-DqpHcH8v.js";import{I as U}from"./IconButton-C1RHutMH.js";import{i as O,h as Z,a as G}from"./infiniteQueryBehavior-Dy-EF0Mb.js";import{b as J}from"./index-91odSpo7.js";import{u as A}from"./useTranslation-yd-DSgl9.js";import{T as S}from"./Typography-CbPE8MBo.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"20476b02e250804c0ed7e78125c61ce5a11ff73a"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="99bd8a2e-09ea-4f69-82f1-35bf22971577",e._sentryDebugIdIdentifier="sentry-dbid-99bd8a2e-09ea-4f69-82f1-35bf22971577")})()}catch{}var X=class extends q{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:O()})}getOptimisticResult(e){return e.behavior=O(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:c}=e,h=super.createResult(e,t),{isFetching:i,isRefetching:g,isError:l,isRefetchError:r}=h,o=c.fetchMeta?.fetchMore?.direction,p=l&&o==="forward",f=i&&o==="forward",v=l&&o==="backward",w=i&&o==="backward";return{...h,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:G(t,c.data),hasPreviousPage:Z(t,c.data),isFetchNextPageError:p,isFetchingNextPage:f,isFetchPreviousPageError:v,isFetchingPreviousPage:w,isRefetchError:r&&!p&&!v,isRefetching:g&&!f&&!w}}};function ee(e,t){return Q(e,X)}const te=j(z.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),re=j(z.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}));var C=new Map,L=new WeakMap,D=0,ne;function oe(e){return e?(L.has(e)||(D+=1,L.set(e,D.toString())),L.get(e)):"0"}function se(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?oe(e.root):e[t]}`).toString()}function ie(e){const t=se(e);let c=C.get(t);if(!c){const h=new Map;let i;const g=new IntersectionObserver(l=>{l.forEach(r=>{var o;const p=r.isIntersecting&&i.some(f=>r.intersectionRatio>=f);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=p),(o=h.get(r.target))==null||o.forEach(f=>{f(p,r)})})},e);i=g.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),c={id:t,observer:g,elements:h},C.set(t,c)}return c}function ce(e,t,c={},h=ne){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const o=e.getBoundingClientRect();return t(h,{isIntersecting:h,target:e,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:i,observer:g,elements:l}=ie(c),r=l.get(e)||[];return l.has(e)||l.set(e,r),r.push(t),g.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(l.delete(e),g.unobserve(e)),l.size===0&&(g.disconnect(),C.delete(i))}}function Re({threshold:e,delay:t,trackVisibility:c,rootMargin:h,root:i,triggerOnce:g,skip:l,initialInView:r,fallbackInView:o,onChange:p}={}){var f;const[v,w]=n.useState(null),T=n.useRef(p),x=n.useRef(r),[s,d]=n.useState({inView:!!r,entry:void 0});T.current=p,n.useEffect(()=>{if(x.current===void 0&&(x.current=r),l||!v)return;let y;return y=ce(v,(a,R)=>{const E=x.current;x.current=a,!(E===void 0&&!a)&&(d({inView:a,entry:R}),T.current&&T.current(a,R),R.isIntersecting&&g&&y&&(y(),y=void 0))},{root:i,rootMargin:h,threshold:e,trackVisibility:c,delay:t},o),()=>{y&&y()}},[Array.isArray(e)?e.toString():e,v,i,h,g,l,c,o,t]);const b=(f=s.entry)==null?void 0:f.target,m=n.useRef(void 0);!v&&b&&!g&&!l&&m.current!==b&&(m.current=b,d({inView:!!r,entry:void 0}),x.current=r);const P=[w,s.inView,s.entry];return P.ref=P[0],P.inView=P[1],P.entry=P[2],P}const ae=$.div`
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
`,le=$.div`
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
`,de=$.div`
    width: ${({width:e})=>`${e}px`};
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
`,ue=$.div`
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
`,fe=$.div`
    line-height: 17.5px;
    font-size: 14px;
    color: ${e=>e.disabled?e.theme.colors.Text.disable:e.theme.colors.Text.default};
`,Ee=({options:e=["option1","option2","option3"],zindex:t=10,disabledOptions:c=[],setSelectedOption:h,selectedOption:i,isDetail:g=!0})=>{const l=_(),[r,o]=n.useState(!1),p=n.useRef(null),[f,v]=n.useState({top:0,left:0,width:0}),[w,T]=n.useState(0);n.useEffect(()=>{if(e.length>0){const d=document.createElement("canvas").getContext("2d");if(!d)return;d.font="14px Pretendard, sans-serif";const b=Math.max(...e.map(m=>d.measureText(m).width));T(b+50)}},[e]),n.useEffect(()=>{if(p.current){const s=p.current.getBoundingClientRect();v({top:s.top,left:s.left,width:Math.max(s.width,w)})}},[r,w]);const x=n.useRef(null);return n.useEffect(()=>{const s=()=>{if(p.current){const d=p.current.getBoundingClientRect();v({top:d.top,left:d.left,width:d.width})}};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[r]),n.useEffect(()=>{if(x.current&&e.length>0&&i>=0){const s=x.current.children[i];if(s){const b=s.getBoundingClientRect().top-x.current.getBoundingClientRect().top;x.current&&(x.current.scrollTop=b)}}},[i,r,e]),B(de,{isExpand:r,width:w,children:[B(ae,{ref:p,onClick:()=>{o(!r)},children:[e[i],u(U,{onClick:()=>{o(!r)},styles:{padding:0},children:u(H,{size:24,color:l.colors.Highlight.default,onClick:()=>{},children:r?u(te,{}):u(re,{})})})]}),r&&u(ue,{ref:x,top:f.top,left:f.left,width:f.width,zindex:t,isDetail:g,children:e.map((s,d)=>{const b=c.includes(d),m=i==d;return u(le,{onClick:()=>{h(d),o(!1)},disabled:b,children:u(fe,{disabled:b,selected:m,children:s})},d)})})]})};function Te(e,t,c){const{i18n:h}=A(),{infinites:i,headers:g={},enabled:l=!0,staleTime:r=1/0,gcTime:o=300*1e3,initialOffset:p=0,limit:f,select:v=a=>a,iterate:w=()=>-1}=c,[T,x]=n.useState(void 0),[s,d]=n.useState(null),b=n.useRef(v),m=n.useRef(i);n.useEffect(()=>{b.current=v},[v]),n.useEffect(()=>{m.current=i},[i]);const P=V(e,Y(t)),y=ee({queryKey:[t,s],queryFn:async({pageParam:a=0})=>{const R=p+a*f,{data:E}=await J.request({method:e,url:"/api/v2"+t,params:{...s,offset:R,limit:f},headers:g});return E},initialPageParam:0,getNextPageParam:(a,R)=>{const E=w(a);if(E!==-1)return E>0?R.length:void 0;for(const I of m.current)if(a[I].length<f)return;return m.current.length>0?R.length:void 0},retry:1,staleTime:r,gcTime:o,enabled:l&&(s!==null||P.safeParse({})?.success===!0)});return n.useEffect(()=>{const a=y.data?.pages;if(!a||a.length===0){x(void 0);return}if(m.current.length===0){const I=a[a.length-1];x(b.current(I));return}const E={...a[a.length-1]};m.current.forEach(I=>{const M=a.flatMap(F=>F[I]);E[I]=M}),x(b.current(E))},[y.data]),n.useEffect(()=>{y.isEnabled&&y.refetch()},[h.resolvedLanguage]),{query:y,setParams:d,data:T}}const k=$(W)`
    text-decoration: none;
`,he=$.a`
    text-decoration: none;
`,Se=()=>{const{t:e}=A(),t=K("laptop");return B(N,{direction:"column",gap:12,align:"center",justify:"stretch",children:[u(S,{color:"Text.placeholder",type:"Bigger",children:"OTL PLUS"}),B(N,{direction:"row",gap:t?10:12,justify:"space-between",children:[u(k,{to:"/makers",children:u(S,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.credits")})}),u(S,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),u(k,{to:"/license",children:u(S,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.license")})}),u(S,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),u(k,{to:"/privacy-policy",children:u(S,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.privacyPolicy")})})]}),u(he,{href:"mailto:otlplus@sparcs.org",children:u(S,{color:"Text.placeholder",type:"Big",children:"otlplus@sparcs.org"})}),B(S,{color:"Text.placeholder",type:"Big",children:["Ⓒ ",new Date().getFullYear(),", SPARCS OTL TEAM"]})]})};export{Se as C,te as E,Ee as S,re as a,Re as b,Te as u};
//# sourceMappingURL=Credits-DlFaEBLP.js.map
