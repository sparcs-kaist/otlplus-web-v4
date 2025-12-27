import{A as He,a as l,R as H,L as Qe}from"./chunk-UIGDSWPH-NakEPbl8.js";import{_ as Ge,a as E,n as A,u as Ze,j as te,F as ge}from"./FlexWrapper-C0dsngQo.js";import{j as S}from"./jsx-runtime-u17CrQMm.js";import{J as Je,K as et,L as tt,N as L,O as le,P as ce,R as Q,T as ue,U as we,V as Se,X as _,Y as me,Z as be,e as Be,_ as nt,$ as rt,l as ot,u as $e,a0 as st,a1 as it,w as at,t as lt}from"./useIsDevice-DAKqZiCM.js";import{c as ve,C as ct}from"./LoadingCircle-B5aajmnT.js";import{i as xe,h as ut,a as dt}from"./infiniteQueryBehavior-Bs-ItZYI.js";import{T as V}from"./Typography-DTsae4U-.js";var pt=class extends Je{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:xe()})}getOptimisticResult(e){return e.behavior=xe(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,t){const{state:n}=e,o=super.createResult(e,t),{isFetching:r,isRefetching:s,isError:i,isRefetchError:a}=o,c=n.fetchMeta?.fetchMore?.direction,u=i&&c==="forward",p=r&&c==="forward",f=i&&c==="backward",x=r&&c==="backward";return{...o,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:dt(t,n.data),hasPreviousPage:ut(t,n.data),isFetchNextPageError:u,isFetchingNextPage:p,isFetchPreviousPageError:f,isFetchingPreviousPage:x,isRefetchError:a&&!u&&!f,isRefetching:s&&!p&&!x}}};function ft(e,t){return et(e,pt)}let ye=0;function ht(e){const[t,n]=l.useState(e),o=e||t;return l.useEffect(()=>{t==null&&(ye+=1,n(`mui-${ye}`))},[t]),o}const gt={...He},Re=gt.useId;function mt(e){if(Re!==void 0){const t=Re();return e??t}return ht(e)}function ee(e){const t=l.useRef(e);return tt(()=>{t.current=e}),l.useRef((...n)=>(0,t.current)(...n)).current}function Pe(...e){const t=l.useRef(void 0),n=l.useCallback(o=>{const r=e.map(s=>{if(s==null)return null;if(typeof s=="function"){const i=s,a=i(o);return typeof a=="function"?a:()=>{i(null)}}return s.current=o,()=>{s.current=null}});return()=>{r.forEach(s=>s?.())}},e);return l.useMemo(()=>e.every(o=>o==null)?null:o=>{t.current&&(t.current(),t.current=void 0),o!=null&&(t.current=n(o))},e)}function bt(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function se(e,t){return se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},se(e,t)}function vt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,se(e,t)}const Ee=H.createContext(null);function xt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function de(e,t){var n=function(s){return t&&l.isValidElement(s)?t(s):s},o=Object.create(null);return e&&l.Children.map(e,function(r){return r}).forEach(function(r){o[r.key]=n(r)}),o}function yt(e,t){e=e||{},t=t||{};function n(p){return p in t?t[p]:e[p]}var o=Object.create(null),r=[];for(var s in e)s in t?r.length&&(o[s]=r,r=[]):r.push(s);var i,a={};for(var c in t){if(o[c])for(i=0;i<o[c].length;i++){var u=o[c][i];a[o[c][i]]=n(u)}a[c]=n(c)}for(i=0;i<r.length;i++)a[r[i]]=n(r[i]);return a}function U(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Rt(e,t){return de(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:U(n,"appear",e),enter:U(n,"enter",e),exit:U(n,"exit",e)})})}function Pt(e,t,n){var o=de(e.children),r=yt(t,o);return Object.keys(r).forEach(function(s){var i=r[s];if(l.isValidElement(i)){var a=s in t,c=s in o,u=t[s],p=l.isValidElement(u)&&!u.props.in;c&&(!a||p)?r[s]=l.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:U(i,"exit",e),enter:U(i,"enter",e)}):!c&&a&&!p?r[s]=l.cloneElement(i,{in:!1}):c&&a&&l.isValidElement(u)&&(r[s]=l.cloneElement(i,{onExited:n.bind(null,i),in:u.props.in,exit:U(i,"exit",e),enter:U(i,"enter",e)}))}}),r}var Et=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Mt={component:"div",childFactory:function(t){return t}},pe=(function(e){vt(t,e);function t(o,r){var s;s=e.call(this,o,r)||this;var i=s.handleExited.bind(xt(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,s){var i=s.children,a=s.handleExited,c=s.firstRender;return{children:c?Rt(r,a):Pt(r,i,a),firstRender:!1}},n.handleExited=function(r,s){var i=de(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(s),this.mounted&&this.setState(function(a){var c=Ge({},a.children);return delete c[r.key],{children:c}}))},n.render=function(){var r=this.props,s=r.component,i=r.childFactory,a=bt(r,["component","childFactory"]),c=this.state.contextValue,u=Et(this.state.children).map(i);return delete a.appear,delete a.enter,delete a.exit,s===null?H.createElement(Ee.Provider,{value:c},u):H.createElement(Ee.Provider,{value:c},H.createElement(s,a,u))},t})(H.Component);pe.propTypes={};pe.defaultProps=Mt;const Me={};function Le(e,t){const n=l.useRef(Me);return n.current===Me&&(n.current=e(t)),n}const It=[];function Tt(e){l.useEffect(e,It)}class fe{static create(){return new fe}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function Ct(){const e=Le(fe.create).current;return Tt(e.disposeEffect),e}function Ie(e){try{return e.matches(":focus-visible")}catch{}return!1}class ne{static create(){return new ne}static use(){const t=Le(ne.create).current,[n,o]=l.useState(!1);return t.shouldMount=n,t.setShouldMount=o,l.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=St(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function wt(){return ne.use()}function St(){let e,t;const n=new Promise((o,r)=>{e=o,t=r});return n.resolve=e,n.reject=t,n}function Bt(e){const{className:t,classes:n,pulsate:o=!1,rippleX:r,rippleY:s,rippleSize:i,in:a,onExited:c,timeout:u}=e,[p,f]=l.useState(!1),x=L(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),M={width:i,height:i,top:-(i/2)+s,left:-(i/2)+r},g=L(n.child,p&&n.childLeaving,o&&n.childPulsate);return!a&&!p&&f(!0),l.useEffect(()=>{if(!a&&c!=null){const m=setTimeout(c,u);return()=>{clearTimeout(m)}}},[c,a,u]),S.jsx("span",{className:x,style:M,children:S.jsx("span",{className:g})})}const $=le("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ie=550,$t=80,Lt=ue`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,kt=ue`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Nt=ue`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,zt=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),jt=Q(Bt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${$.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Lt};
    animation-duration: ${ie}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${$.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${$.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${$.childLeaving} {
    opacity: 0;
    animation-name: ${kt};
    animation-duration: ${ie}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${$.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Nt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ot=l.forwardRef(function(t,n){const o=ce({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:s={},className:i,...a}=o,[c,u]=l.useState([]),p=l.useRef(0),f=l.useRef(null);l.useEffect(()=>{f.current&&(f.current(),f.current=null)},[c]);const x=l.useRef(!1),M=Ct(),g=l.useRef(null),m=l.useRef(null),b=l.useCallback(h=>{const{pulsate:v,rippleX:P,rippleY:C,rippleSize:w,cb:z}=h;u(B=>[...B,S.jsx(jt,{classes:{ripple:L(s.ripple,$.ripple),rippleVisible:L(s.rippleVisible,$.rippleVisible),ripplePulsate:L(s.ripplePulsate,$.ripplePulsate),child:L(s.child,$.child),childLeaving:L(s.childLeaving,$.childLeaving),childPulsate:L(s.childPulsate,$.childPulsate)},timeout:ie,pulsate:v,rippleX:P,rippleY:C,rippleSize:w},p.current)]),p.current+=1,f.current=z},[s]),y=l.useCallback((h={},v={},P=()=>{})=>{const{pulsate:C=!1,center:w=r||v.pulsate,fakeElement:z=!1}=v;if(h?.type==="mousedown"&&x.current){x.current=!1;return}h?.type==="touchstart"&&(x.current=!0);const B=z?null:m.current,j=B?B.getBoundingClientRect():{width:0,height:0,left:0,top:0};let O,k,D;if(w||h===void 0||h.clientX===0&&h.clientY===0||!h.clientX&&!h.touches)O=Math.round(j.width/2),k=Math.round(j.height/2);else{const{clientX:Y,clientY:F}=h.touches&&h.touches.length>0?h.touches[0]:h;O=Math.round(Y-j.left),k=Math.round(F-j.top)}if(w)D=Math.sqrt((2*j.width**2+j.height**2)/3),D%2===0&&(D+=1);else{const Y=Math.max(Math.abs((B?B.clientWidth:0)-O),O)*2+2,F=Math.max(Math.abs((B?B.clientHeight:0)-k),k)*2+2;D=Math.sqrt(Y**2+F**2)}h?.touches?g.current===null&&(g.current=()=>{b({pulsate:C,rippleX:O,rippleY:k,rippleSize:D,cb:P})},M.start($t,()=>{g.current&&(g.current(),g.current=null)})):b({pulsate:C,rippleX:O,rippleY:k,rippleSize:D,cb:P})},[r,b,M]),R=l.useCallback(()=>{y({},{pulsate:!0})},[y]),T=l.useCallback((h,v)=>{if(M.clear(),h?.type==="touchend"&&g.current){g.current(),g.current=null,M.start(0,()=>{T(h,v)});return}g.current=null,u(P=>P.length>0?P.slice(1):P),f.current=v},[M]);return l.useImperativeHandle(n,()=>({pulsate:R,start:y,stop:T}),[R,y,T]),S.jsx(zt,{className:L($.root,s.root,i),ref:m,...a,children:S.jsx(pe,{component:null,exit:!0,children:c})})});function Dt(e){return we("MuiButtonBase",e)}const Vt=le("MuiButtonBase",["root","disabled","focusVisible"]),Ft=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:r}=e,i=Se({root:["root",t&&"disabled",n&&"focusVisible"]},Dt,r);return n&&o&&(i.root+=` ${o}`),i},Wt=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Vt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ut=l.forwardRef(function(t,n){const o=ce({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:s=!1,children:i,className:a,component:c="button",disabled:u=!1,disableRipple:p=!1,disableTouchRipple:f=!1,focusRipple:x=!1,focusVisibleClassName:M,LinkComponent:g="a",onBlur:m,onClick:b,onContextMenu:y,onDragLeave:R,onFocus:T,onFocusVisible:h,onKeyDown:v,onKeyUp:P,onMouseDown:C,onMouseLeave:w,onMouseUp:z,onTouchEnd:B,onTouchMove:j,onTouchStart:O,tabIndex:k=0,TouchRippleProps:D,touchRippleRef:Y,type:F,...q}=o,K=l.useRef(null),I=wt(),ke=Pe(I.ref,Y),[W,G]=l.useState(!1);u&&W&&G(!1),l.useImperativeHandle(r,()=>({focusVisible:()=>{G(!0),K.current.focus()}}),[]);const Ne=I.shouldMount&&!p&&!u;l.useEffect(()=>{W&&x&&!p&&I.pulsate()},[p,x,W,I]);const ze=N(I,"start",C,f),je=N(I,"stop",y,f),Oe=N(I,"stop",R,f),De=N(I,"stop",z,f),Ve=N(I,"stop",d=>{W&&d.preventDefault(),w&&w(d)},f),Fe=N(I,"start",O,f),We=N(I,"stop",B,f),Ue=N(I,"stop",j,f),Ae=N(I,"stop",d=>{Ie(d.target)||G(!1),m&&m(d)},!1),_e=ee(d=>{K.current||(K.current=d.currentTarget),Ie(d.target)&&(G(!0),h&&h(d)),T&&T(d)}),re=()=>{const d=K.current;return c&&c!=="button"&&!(d.tagName==="A"&&d.href)},Ye=ee(d=>{x&&!d.repeat&&W&&d.key===" "&&I.stop(d,()=>{I.start(d)}),d.target===d.currentTarget&&re()&&d.key===" "&&d.preventDefault(),v&&v(d),d.target===d.currentTarget&&re()&&d.key==="Enter"&&!u&&(d.preventDefault(),b&&b(d))}),qe=ee(d=>{x&&d.key===" "&&W&&!d.defaultPrevented&&I.stop(d,()=>{I.pulsate(d)}),P&&P(d),b&&d.target===d.currentTarget&&re()&&d.key===" "&&!d.defaultPrevented&&b(d)});let Z=c;Z==="button"&&(q.href||q.to)&&(Z=g);const X={};Z==="button"?(X.type=F===void 0?"button":F,X.disabled=u):(!q.href&&!q.to&&(X.role="button"),u&&(X["aria-disabled"]=u));const Ke=Pe(n,K),he={...o,centerRipple:s,component:c,disabled:u,disableRipple:p,disableTouchRipple:f,focusRipple:x,tabIndex:k,focusVisible:W},Xe=Ft(he);return S.jsxs(Wt,{as:Z,className:L(Xe.root,a),ownerState:he,onBlur:Ae,onClick:b,onContextMenu:je,onFocus:_e,onKeyDown:Ye,onKeyUp:qe,onMouseDown:ze,onMouseLeave:Ve,onMouseUp:De,onDragLeave:Oe,onTouchEnd:We,onTouchMove:Ue,onTouchStart:Fe,ref:Ke,tabIndex:u?-1:k,type:F,...X,...q,children:[i,Ne?S.jsx(Ot,{ref:ke,center:s,...D}):null]})});function N(e,t,n,o=!1){return ee(r=>(n&&n(r),o||e[t](r),!0))}function At(e){return we("MuiIconButton",e)}const Te=le("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),_t=e=>{const{classes:t,disabled:n,color:o,edge:r,size:s,loading:i}=e,a={root:["root",i&&"loading",n&&"disabled",o!=="default"&&`color${_(o)}`,r&&`edge${_(r)}`,`size${_(s)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return Se(a,At,t)},Yt=Q(Ut,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.loading&&t.loading,n.color!=="default"&&t[`color${_(n.color)}`],n.edge&&t[`edge${_(n.edge)}`],t[`size${_(n.size)}`]]}})(me(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:t=>!t.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:be(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),me(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(ve()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette).filter(ve()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:be((e.vars||e).palette[t].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${Te.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled},[`&.${Te.loading}`]:{color:"transparent"}}))),qt=Q("span",{name:"MuiIconButton",slot:"LoadingIndicator"})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Kt=l.forwardRef(function(t,n){const o=ce({props:t,name:"MuiIconButton"}),{edge:r=!1,children:s,className:i,color:a="default",disabled:c=!1,disableFocusRipple:u=!1,size:p="medium",id:f,loading:x=null,loadingIndicator:M,...g}=o,m=mt(f),b=M??S.jsx(ct,{"aria-labelledby":m,color:"inherit",size:16}),y={...o,edge:r,color:a,disabled:c,disableFocusRipple:u,loading:x,loadingIndicator:b,size:p},R=_t(y);return S.jsxs(Yt,{id:x?m:f,className:L(R.root,i),centerRipple:!0,focusRipple:!u,disabled:c||x,ref:n,...g,ownerState:y,children:[typeof x=="boolean"&&S.jsx("span",{className:R.loadingWrapper,style:{display:"contents"},children:S.jsx(qt,{className:R.loadingIndicator,ownerState:y,children:x&&b})}),s]})}),Xt=Be(S.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),Ht=Be(S.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}));var ae=new Map,J=new WeakMap,Ce=0,Qt;function Gt(e){return e?(J.has(e)||(Ce+=1,J.set(e,Ce.toString())),J.get(e)):"0"}function Zt(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Gt(e.root):e[t]}`).toString()}function Jt(e){const t=Zt(e);let n=ae.get(t);if(!n){const o=new Map;let r;const s=new IntersectionObserver(i=>{i.forEach(a=>{var c;const u=a.isIntersecting&&r.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(c=o.get(a.target))==null||c.forEach(p=>{p(u,a)})})},e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:o},ae.set(t,n)}return n}function en(e,t,n={},o=Qt){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const c=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:r,observer:s,elements:i}=Jt(n),a=i.get(e)||[];return i.has(e)||i.set(e,a),a.push(t),s.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(i.delete(e),s.unobserve(e)),i.size===0&&(s.disconnect(),ae.delete(r))}}function bn({threshold:e,delay:t,trackVisibility:n,rootMargin:o,root:r,triggerOnce:s,skip:i,initialInView:a,fallbackInView:c,onChange:u}={}){var p;const[f,x]=l.useState(null),M=l.useRef(u),g=l.useRef(a),[m,b]=l.useState({inView:!!a,entry:void 0});M.current=u,l.useEffect(()=>{if(g.current===void 0&&(g.current=a),i||!f)return;let h;return h=en(f,(v,P)=>{const C=g.current;g.current=v,!(C===void 0&&!v)&&(b({inView:v,entry:P}),M.current&&M.current(v,P),P.isIntersecting&&s&&h&&(h(),h=void 0))},{root:r,rootMargin:o,threshold:e,trackVisibility:n,delay:t},c),()=>{h&&h()}},[Array.isArray(e)?e.toString():e,f,r,o,s,i,n,c,t]);const y=(p=m.entry)==null?void 0:p.target,R=l.useRef(void 0);!f&&y&&!s&&!i&&R.current!==y&&(R.current=y,b({inView:!!a,entry:void 0}),g.current=a);const T=[x,m.inView,m.entry];return T.ref=T[0],T.inView=T[1],T.entry=T[2],T}const tn=nt(),nn=e=>E(rt,{theme:tn,children:E(Kt,{onClick:e.onClick,style:e.styles??void 0,children:e.children})}),rn=A.div`
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
`,on=A.div`
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
`,sn=A.div`
    width: ${({width:e})=>`${e}px`};
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
`,an=A.div`
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
`,ln=A.div`
    line-height: 17.5px;
    font-size: 14px;
    color: ${e=>e.disabled?e.theme.colors.Text.disable:e.theme.colors.Text.default};
`,vn=({options:e=["option1","option2","option3"],zindex:t=10,disabledOptions:n=[],setSelectedOption:o,selectedOption:r,isDetail:s=!0})=>{const i=Ze(),[a,c]=l.useState(!1),u=l.useRef(null),[p,f]=l.useState({top:0,left:0,width:0}),[x,M]=l.useState(0);l.useEffect(()=>{if(e.length>0){const b=document.createElement("canvas").getContext("2d");if(!b)return;b.font="14px Pretendard, sans-serif";const y=Math.max(...e.map(R=>b.measureText(R).width));M(y+50)}},[e]),l.useEffect(()=>{if(u.current){const m=u.current.getBoundingClientRect();f({top:m.top,left:m.left,width:Math.max(m.width,x)})}},[a,x]);const g=l.useRef(null);return l.useEffect(()=>{const m=()=>{if(u.current){const b=u.current.getBoundingClientRect();f({top:b.top,left:b.left,width:b.width})}};return m(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}},[a]),l.useEffect(()=>{if(g.current&&e.length>0&&r>=0){const m=g.current.children[r];if(m){const y=m.getBoundingClientRect().top-g.current.getBoundingClientRect().top;g.current&&(g.current.scrollTop=y)}}},[r,a,e]),te(sn,{isExpand:a,width:x,children:[te(rn,{ref:u,onClick:()=>{c(!a)},children:[e[r],E(nn,{onClick:()=>{c(!a)},styles:{padding:0},children:E(ot,{size:24,color:i.colors.Highlight.default,onClick:()=>{},children:a?E(Xt,{}):E(Ht,{})})})]}),a&&E(an,{ref:g,top:p.top,left:p.left,width:p.width,zindex:t,isDetail:s,children:e.map((m,b)=>{const y=n.includes(b),R=r==b;return E(on,{onClick:()=>{o(b),c(!1)},disabled:y,children:E(ln,{disabled:y,selected:R,children:m})},b)})})]})};function xn(e,t,n){const{i18n:o}=$e(),{infinites:r,headers:s={},enabled:i=!0,staleTime:a=1/0,gcTime:c=300*1e3,initialOffset:u=0,limit:p,select:f=v=>v,iterate:x=()=>-1}=n,[M,g]=l.useState(void 0),[m,b]=l.useState(null),y=l.useRef(f),R=l.useRef(r);l.useEffect(()=>{y.current=f},[f]),l.useEffect(()=>{R.current=r},[r]);const T=st(e,it(t)),h=ft({queryKey:[t,m],queryFn:async({pageParam:v=0})=>{const P=u+v*p,{data:C}=await at.request({method:e,url:"/api/v2"+t,params:{...m,offset:P,limit:p},headers:s});return C},initialPageParam:0,getNextPageParam:(v,P)=>{const C=x(v);if(C!==-1)return C>0?P.length:void 0;for(const w of R.current)if(v[w].length<p)return;return R.current.length>0?P.length:void 0},retry:1,staleTime:a,gcTime:c,enabled:i&&(m!==null||T.safeParse({})?.success===!0)});return l.useEffect(()=>{const v=h.data?.pages;if(!v||v.length===0){g(void 0);return}if(R.current.length===0){const w=v[v.length-1];g(y.current(w));return}const C={...v[v.length-1]};R.current.forEach(w=>{const z=v.flatMap(B=>B[w]);C[w]=z}),g(y.current(C))},[h.data]),l.useEffect(()=>{h.isEnabled&&h.refetch()},[o.resolvedLanguage]),{query:h,setParams:b,data:M}}const oe=A(Qe)`
    text-decoration: none;
`,cn=A.a`
    text-decoration: none;
`,yn=()=>{const{t:e}=$e(),t=lt("laptop");return te(ge,{direction:"column",gap:12,align:"center",justify:"stretch",children:[E(V,{color:"Text.placeholder",type:"Bigger",children:"OTL PLUS"}),te(ge,{direction:"row",gap:t?10:12,justify:"space-between",children:[E(oe,{to:"/makers",children:E(V,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.credits")})}),E(V,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),E(oe,{to:"/license",children:E(V,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.license")})}),E(V,{color:"Text.placeholder",type:t?"Normal":"Big",children:"|"}),E(oe,{to:"/privacy-policy",children:E(V,{color:"Text.placeholder",type:t?"Normal":"Big",children:e("credits.privacyPolicy")})})]}),E(cn,{href:"mailto:otlplus@sparcs.org",children:E(V,{color:"Text.placeholder",type:"Big",children:"otlplus@sparcs.org"})}),E(V,{color:"Text.placeholder",type:"Big",children:"Ⓒ 2026, SPARCS OTL TEAM"})]})};export{yn as C,Xt as E,nn as I,vn as S,Ht as a,bn as b,xn as u};
