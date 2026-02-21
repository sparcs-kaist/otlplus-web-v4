import{p as z,r as o,R as W,L as _}from"./chunk-JZWAC4HX-BTXvrNgo.js";import{u as q,a as I,j as u}from"./emotion-react-jsx-runtime.browser.esm-B46aPpQ0.js";import{s as $,F as O}from"./FlexWrapper-DpFAdHyj.js";import{y as Q,z as H,e as j,I as V,A as Y,B as K,g as U}from"./useIsDevice-uQGufDtQ.js";import{I as Z}from"./IconButton-8MlWQada.js";import{i as N,h as G,a as J}from"./infiniteQueryBehavior-BAlZTITb.js";import{b as X}from"./index-BC8T0JXa.js";import{u as A}from"./useTranslation-BApseLnd.js";import{T}from"./Typography-DeWRZXZ0.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"fa23a04adf00f524ec9fbf29c8679f1b148214dc"};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f9f055dc-3ce3-4a61-b3c9-da883d71f01a",e._sentryDebugIdIdentifier="sentry-dbid-f9f055dc-3ce3-4a61-b3c9-da883d71f01a")}catch{}})();var ee=class extends Q{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:N()})}getOptimisticResult(e){return e.behavior=N(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:i}=e,h=super.createResult(e,t),{isFetching:c,isRefetching:g,isError:l,isRefetchError:r}=h,n=i.fetchMeta?.fetchMore?.direction,p=l&&n==="forward",f=c&&n==="forward",b=l&&n==="backward",y=c&&n==="backward";return{...h,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:J(t,i.data),hasPreviousPage:G(t,i.data),isFetchNextPageError:p,isFetchingNextPage:f,isFetchPreviousPageError:b,isFetchingPreviousPage:y,isRefetchError:r&&!p&&!b,isRefetching:g&&!f&&!y}}};function te(e,t){return H(e,ee)}const re=j(z.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),oe=j(z.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}));var C=new Map,L=new WeakMap,D=0,ne;function se(e){return e?(L.has(e)||(D+=1,L.set(e,D.toString())),L.get(e)):"0"}function ie(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?se(e.root):e[t]}`).toString()}function ce(e){const t=ie(e);let i=C.get(t);if(!i){const h=new Map;let c;const g=new IntersectionObserver(l=>{l.forEach(r=>{var n;const p=r.isIntersecting&&c.some(f=>r.intersectionRatio>=f);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=p),[...(n=h.get(r.target))!=null?n:[]].forEach(f=>{f(p,r)})})},e);c=g.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:g,elements:h},C.set(t,i)}return i}function ae(e,t,i={},h=ne){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const n=e.getBoundingClientRect();return t(h,{isIntersecting:h,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:c,observer:g,elements:l}=ce(i),r=l.get(e)||[];return l.has(e)||l.set(e,r),r.push(t),g.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(l.delete(e),g.unobserve(e)),l.size===0&&(g.disconnect(),C.delete(c))}}function Se({threshold:e,delay:t,trackVisibility:i,rootMargin:h,root:c,triggerOnce:g,skip:l,initialInView:r,fallbackInView:n,onChange:p}={}){var f;const[b,y]=o.useState(null),S=o.useRef(p),x=o.useRef(r),[s,d]=o.useState({inView:!!r,entry:void 0});S.current=p,o.useEffect(()=>{if(x.current===void 0&&(x.current=r),l||!b)return;let w;return w=ae(b,(a,R)=>{const E=x.current;x.current=a,!(E===void 0&&!a)&&(d({inView:a,entry:R}),S.current&&S.current(a,R),R.isIntersecting&&g&&w&&(w(),w=void 0))},{root:c,rootMargin:h,threshold:e,trackVisibility:i,delay:t},n),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,b,c,h,g,l,i,n,t]);const m=(f=s.entry)==null?void 0:f.target,v=o.useRef(void 0);!b&&m&&!g&&!l&&v.current!==m&&(v.current=m,d({inView:!!r,entry:void 0}),x.current=r);const P=[y,s.inView,s.entry];return P.ref=P[0],P.inView=P[1],P.entry=P[2],P}const le=$.div`
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
`,ge=({options:e=["option1","option2","option3"],zindex:t=10,disabledOptions:i=[],setSelectedOption:h,selectedOption:c,isDetail:g=!0})=>{const l=q(),[r,n]=o.useState(!1),p=o.useRef(null),[f,b]=o.useState({top:0,left:0,width:0}),[y,S]=o.useState(0);o.useEffect(()=>{if(e.length>0){const d=document.createElement("canvas").getContext("2d");if(!d)return;d.font="14px Pretendard, sans-serif";const m=Math.max(...e.map(v=>d.measureText(v).width));S(m+50)}},[e]),o.useEffect(()=>{if(p.current){const s=p.current.getBoundingClientRect();b({top:s.top,left:s.left,width:Math.max(s.width,y)})}},[r,y]);const x=o.useRef(null);return o.useEffect(()=>{const s=()=>{if(p.current){const d=p.current.getBoundingClientRect();b({top:d.top,left:d.left,width:d.width})}};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[r]),o.useEffect(()=>{if(x.current&&e.length>0&&c>=0){const s=x.current.children[c];if(s){const m=s.getBoundingClientRect().top-x.current.getBoundingClientRect().top;x.current&&(x.current.scrollTop=m)}}},[c,r,e]),I(ue,{isExpand:r,width:y,children:[I(le,{ref:p,onClick:()=>{n(!r)},children:[e[c],u(Z,{onClick:()=>{n(!r)},styles:{padding:0},children:u(V,{size:24,color:l.colors.Highlight.default,onClick:()=>{},children:r?u(re,{}):u(oe,{})})})]}),r&&u(fe,{ref:x,top:f.top,left:f.left,width:f.width,zindex:t,isDetail:g,children:e.map((s,d)=>{const m=i.includes(d),v=c==d;return u(de,{onClick:()=>{h(d),n(!1)},disabled:m,children:u(he,{disabled:m,selected:v,children:s})},d)})})]})},Te=W.memo(ge,(e,t)=>e.options===t.options&&e.zindex===t.zindex&&e.disabledOptions===t.disabledOptions&&e.selectedOption===t.selectedOption&&e.isDetail===t.isDetail);function $e(e,t,i){const{i18n:h}=A(),{infinites:c,headers:g={},enabled:l=!0,staleTime:r=1/0,gcTime:n=300*1e3,initialOffset:p=0,limit:f,select:b=a=>a,iterate:y=()=>-1}=i,[S,x]=o.useState(void 0),[s,d]=o.useState(null),m=o.useRef(b),v=o.useRef(c);o.useEffect(()=>{m.current=b},[b]),o.useEffect(()=>{v.current=c},[c]);const P=Y(e,K(t)),w=te({queryKey:[t,s,h.resolvedLanguage],queryFn:async({pageParam:a=0})=>{const R=p+a*f,{data:E}=await X.request({method:e,url:"/api/v2"+t,params:{...s,offset:R,limit:f},headers:g});return E},initialPageParam:0,getNextPageParam:(a,R)=>{const E=y(a);if(E!==-1)return E>0?R.length:void 0;for(const B of v.current)if(a[B].length<f)return;return v.current.length>0?R.length:void 0},retry:1,staleTime:r,gcTime:n,enabled:l&&(s!==null||P.safeParse({})?.success===!0)});return o.useEffect(()=>{const a=w.data?.pages;if(!a||a.length===0){x(void 0);return}if(v.current.length===0){const B=a[a.length-1];x(m.current(B));return}const E={...a[a.length-1]};v.current.forEach(B=>{const M=a.flatMap(F=>F[B]);E[B]=M}),x(m.current(E))},[w.data]),{query:w,setParams:d,data:S}}const k=$(_)`
    text-decoration: none;
`,pe=$.a`
    text-decoration: none;
`,Be=()=>{const{t:e}=A(),t=U("laptop");return I(O,{direction:"column",gap:12,align:"center",justify:"stretch",children:[u(T,{color:"Text.placeholder",type:"Bigger",children:"OTL PLUS"}),I(O,{direction:"row",gap:t?10:12,justify:"space-between",children:[u(k,{to:"/makers",children:u(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.credits")})}),u(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),u(k,{to:"/license",children:u(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.license")})}),u(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),u(k,{to:"/privacy-policy",children:u(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.privacyPolicy")})})]}),u(pe,{href:"mailto:otlplus@sparcs.org",children:u(T,{color:"Text.placeholder",type:"Big",children:"otlplus@sparcs.org"})}),I(T,{color:"Text.placeholder",type:"Big",children:["Ⓒ ",new Date().getFullYear(),", SPARCS OTL TEAM"]})]})};export{Be as C,re as E,Te as S,oe as a,Se as b,$e as u};
//# sourceMappingURL=Credits-XfoOzxIl.js.map
