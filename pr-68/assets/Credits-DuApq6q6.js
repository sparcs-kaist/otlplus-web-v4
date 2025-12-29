import{p as j,r as n,L as D}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{u as q,a as L,j as l}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{n as $,F as N}from"./FlexWrapper-B6Hxm4Zw.js";import{x as Q,y as _,e as A,I as H,z as V,A as K,g as U}from"./useIsDevice-Y54zVQRt.js";import{I as Z}from"./ReviewBlock-HmUfhIii.js";import{i as O,h as G,a as J}from"./infiniteQueryBehavior-Bz9XtMUz.js";import{b as X}from"./index-HoNQVgr_.js";import{u as F}from"./useTranslation-DrmvPmDd.js";import{T}from"./Typography-DeI78L6T.js";var Y=class extends Q{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:O()})}getOptimisticResult(e){return e.behavior=O(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:c}=e,h=super.createResult(e,t),{isFetching:i,isRefetching:g,isError:d,isRefetchError:r}=h,o=c.fetchMeta?.fetchMore?.direction,p=d&&o==="forward",f=i&&o==="forward",v=d&&o==="backward",y=i&&o==="backward";return{...h,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:J(t,c.data),hasPreviousPage:G(t,c.data),isFetchNextPageError:p,isFetchingNextPage:f,isFetchPreviousPageError:v,isFetchingPreviousPage:y,isRefetchError:r&&!p&&!v,isRefetching:g&&!f&&!y}}};function ee(e,t){return _(e,Y)}const te=A(j.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),re=A(j.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}));var M=new Map,I=new WeakMap,z=0,ne;function oe(e){return e?(I.has(e)||(z+=1,I.set(e,z.toString())),I.get(e)):"0"}function se(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?oe(e.root):e[t]}`).toString()}function ie(e){const t=se(e);let c=M.get(t);if(!c){const h=new Map;let i;const g=new IntersectionObserver(d=>{d.forEach(r=>{var o;const p=r.isIntersecting&&i.some(f=>r.intersectionRatio>=f);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=p),(o=h.get(r.target))==null||o.forEach(f=>{f(p,r)})})},e);i=g.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),c={id:t,observer:g,elements:h},M.set(t,c)}return c}function ce(e,t,c={},h=ne){if(typeof window.IntersectionObserver>"u"&&h!==void 0){const o=e.getBoundingClientRect();return t(h,{isIntersecting:h,target:e,intersectionRatio:typeof c.threshold=="number"?c.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:i,observer:g,elements:d}=ie(c),r=d.get(e)||[];return d.has(e)||d.set(e,r),r.push(t),g.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(d.delete(e),g.unobserve(e)),d.size===0&&(g.disconnect(),M.delete(i))}}function Re({threshold:e,delay:t,trackVisibility:c,rootMargin:h,root:i,triggerOnce:g,skip:d,initialInView:r,fallbackInView:o,onChange:p}={}){var f;const[v,y]=n.useState(null),S=n.useRef(p),x=n.useRef(r),[s,u]=n.useState({inView:!!r,entry:void 0});S.current=p,n.useEffect(()=>{if(x.current===void 0&&(x.current=r),d||!v)return;let P;return P=ce(v,(a,R)=>{const E=x.current;x.current=a,!(E===void 0&&!a)&&(u({inView:a,entry:R}),S.current&&S.current(a,R),R.isIntersecting&&g&&P&&(P(),P=void 0))},{root:i,rootMargin:h,threshold:e,trackVisibility:c,delay:t},o),()=>{P&&P()}},[Array.isArray(e)?e.toString():e,v,i,h,g,d,c,o,t]);const m=(f=s.entry)==null?void 0:f.target,b=n.useRef(void 0);!v&&m&&!g&&!d&&b.current!==m&&(b.current=m,u({inView:!!r,entry:void 0}),x.current=r);const w=[y,s.inView,s.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}const ae=$.div`
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
    background: #fff;

    &::-webkit-scrollbar {
        width: 0;
    }
`,fe=$.div`
    line-height: 17.5px;
    font-size: 14px;
    color: ${e=>e.disabled?e.theme.colors.Text.disable:e.theme.colors.Text.default};
`,Ee=({options:e=["option1","option2","option3"],zindex:t=10,disabledOptions:c=[],setSelectedOption:h,selectedOption:i,isDetail:g=!0})=>{const d=q(),[r,o]=n.useState(!1),p=n.useRef(null),[f,v]=n.useState({top:0,left:0,width:0}),[y,S]=n.useState(0);n.useEffect(()=>{if(e.length>0){const u=document.createElement("canvas").getContext("2d");if(!u)return;u.font="14px Pretendard, sans-serif";const m=Math.max(...e.map(b=>u.measureText(b).width));S(m+50)}},[e]),n.useEffect(()=>{if(p.current){const s=p.current.getBoundingClientRect();v({top:s.top,left:s.left,width:Math.max(s.width,y)})}},[r,y]);const x=n.useRef(null);return n.useEffect(()=>{const s=()=>{if(p.current){const u=p.current.getBoundingClientRect();v({top:u.top,left:u.left,width:u.width})}};return s(),window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[r]),n.useEffect(()=>{if(x.current&&e.length>0&&i>=0){const s=x.current.children[i];if(s){const m=s.getBoundingClientRect().top-x.current.getBoundingClientRect().top;x.current&&(x.current.scrollTop=m)}}},[i,r,e]),L(de,{isExpand:r,width:y,children:[L(ae,{ref:p,onClick:()=>{o(!r)},children:[e[i],l(Z,{onClick:()=>{o(!r)},styles:{padding:0},children:l(H,{size:24,color:d.colors.Highlight.default,onClick:()=>{},children:r?l(te,{}):l(re,{})})})]}),r&&l(ue,{ref:x,top:f.top,left:f.left,width:f.width,zindex:t,isDetail:g,children:e.map((s,u)=>{const m=c.includes(u),b=i==u;return l(le,{onClick:()=>{h(u),o(!1)},disabled:m,children:l(fe,{disabled:m,selected:b,children:s})},u)})})]})};function Se(e,t,c){const{i18n:h}=F(),{infinites:i,headers:g={},enabled:d=!0,staleTime:r=1/0,gcTime:o=300*1e3,initialOffset:p=0,limit:f,select:v=a=>a,iterate:y=()=>-1}=c,[S,x]=n.useState(void 0),[s,u]=n.useState(null),m=n.useRef(v),b=n.useRef(i);n.useEffect(()=>{m.current=v},[v]),n.useEffect(()=>{b.current=i},[i]);const w=V(e,K(t)),P=ee({queryKey:[t,s],queryFn:async({pageParam:a=0})=>{const R=p+a*f,{data:E}=await X.request({method:e,url:"/api/v2"+t,params:{...s,offset:R,limit:f},headers:g});return E},initialPageParam:0,getNextPageParam:(a,R)=>{const E=y(a);if(E!==-1)return E>0?R.length:void 0;for(const B of b.current)if(a[B].length<f)return;return b.current.length>0?R.length:void 0},retry:1,staleTime:r,gcTime:o,enabled:d&&(s!==null||w.safeParse({})?.success===!0)});return n.useEffect(()=>{const a=P.data?.pages;if(!a||a.length===0){x(void 0);return}if(b.current.length===0){const B=a[a.length-1];x(m.current(B));return}const E={...a[a.length-1]};b.current.forEach(B=>{const k=a.flatMap(W=>W[B]);E[B]=k}),x(m.current(E))},[P.data]),n.useEffect(()=>{P.isEnabled&&P.refetch()},[h.resolvedLanguage]),{query:P,setParams:u,data:S}}const C=$(D)`
    text-decoration: none;
`,he=$.a`
    text-decoration: none;
`,Te=()=>{const{t:e}=F(),t=U("laptop");return L(N,{direction:"column",gap:12,align:"center",justify:"stretch",children:[l(T,{color:"Text.placeholder",type:"Bigger",children:"OTL PLUS"}),L(N,{direction:"row",gap:t?10:12,justify:"space-between",children:[l(C,{to:"/makers",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.credits")})}),l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),l(C,{to:"/license",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.license")})}),l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),l(C,{to:"/privacy-policy",children:l(T,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.privacyPolicy")})})]}),l(he,{href:"mailto:otlplus@sparcs.org",children:l(T,{color:"Text.placeholder",type:"Big",children:"otlplus@sparcs.org"})}),l(T,{color:"Text.placeholder",type:"Big",children:"Ⓒ 2026, SPARCS OTL TEAM"})]})};export{Te as C,te as E,Ee as S,re as a,Re as b,Se as u};
//# sourceMappingURL=Credits-DuApq6q6.js.map
