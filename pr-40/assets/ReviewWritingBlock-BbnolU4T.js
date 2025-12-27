import{_ as Ke,a as f,n as L,u as Ye,j as O,F}from"./FlexWrapper-C0dsngQo.js";import{A as _e,a,R as Q,L as He}from"./chunk-UIGDSWPH-NakEPbl8.js";import{j as M}from"./jsx-runtime-u17CrQMm.js";import{O as Xe,P as B,R as ae,T as le,U as Z,V as ce,W as Me,X as Ee,Y as G,Z as he,_ as ge,e as Ie,$ as Qe,a0 as Ze,l as Je,u as Se,q as et,k as me,D as tt,H as nt,B as ot}from"./useIsDevice-LVy9rz7G.js";import{c as be,C as rt}from"./LoadingCircle-j8V7wyiY.js";import{T as I}from"./Typography-DTsae4U-.js";import{T as it,G as st}from"./TextInputArea-CliDlbfO.js";import{p as at}from"./ReviewBlock-BW59stMD.js";import{u as lt}from"./useUserStore-Cs3WP2WQ.js";let xe=0;function ct(e){const[t,n]=a.useState(e),i=e||t;return a.useEffect(()=>{t==null&&(xe+=1,n(`mui-${xe}`))},[t]),i}const ut={..._e},ye=ut.useId;function dt(e){if(ye!==void 0){const t=ye();return e??t}return ct(e)}function te(e){const t=a.useRef(e);return Xe(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function ve(...e){const t=a.useRef(void 0),n=a.useCallback(i=>{const r=e.map(o=>{if(o==null)return null;if(typeof o=="function"){const s=o,l=s(i);return typeof l=="function"?l:()=>{s(null)}}return o.current=i,()=>{o.current=null}});return()=>{r.forEach(o=>o?.())}},e);return a.useMemo(()=>e.every(i=>i==null)?null:i=>{t.current&&(t.current(),t.current=void 0),i!=null&&(t.current=n(i))},e)}function pt(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ie(e,t)}function ft(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ie(e,t)}const Re=Q.createContext(null);function ht(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){var n=function(o){return t&&a.isValidElement(o)?t(o):o},i=Object.create(null);return e&&a.Children.map(e,function(r){return r}).forEach(function(r){i[r.key]=n(r)}),i}function gt(e,t){e=e||{},t=t||{};function n(m){return m in t?t[m]:e[m]}var i=Object.create(null),r=[];for(var o in e)o in t?r.length&&(i[o]=r,r=[]):r.push(o);var s,l={};for(var c in t){if(i[c])for(s=0;s<i[c].length;s++){var d=i[c][s];l[i[c][s]]=n(d)}l[c]=n(c)}for(s=0;s<r.length;s++)l[r[s]]=n(r[s]);return l}function q(e,t,n){return n[t]!=null?n[t]:e.props[t]}function mt(e,t){return ue(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:q(n,"appear",e),enter:q(n,"enter",e),exit:q(n,"exit",e)})})}function bt(e,t,n){var i=ue(e.children),r=gt(t,i);return Object.keys(r).forEach(function(o){var s=r[o];if(a.isValidElement(s)){var l=o in t,c=o in i,d=t[o],m=a.isValidElement(d)&&!d.props.in;c&&(!l||m)?r[o]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:q(s,"exit",e),enter:q(s,"enter",e)}):!c&&l&&!m?r[o]=a.cloneElement(s,{in:!1}):c&&l&&a.isValidElement(d)&&(r[o]=a.cloneElement(s,{onExited:n.bind(null,s),in:d.props.in,exit:q(s,"exit",e),enter:q(s,"enter",e)}))}}),r}var xt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},yt={component:"div",childFactory:function(t){return t}},de=(function(e){ft(t,e);function t(i,r){var o;o=e.call(this,i,r)||this;var s=o.handleExited.bind(ht(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var s=o.children,l=o.handleExited,c=o.firstRender;return{children:c?mt(r,l):bt(r,s,l),firstRender:!1}},n.handleExited=function(r,o){var s=ue(this.props.children);r.key in s||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(l){var c=Ke({},l.children);return delete c[r.key],{children:c}}))},n.render=function(){var r=this.props,o=r.component,s=r.childFactory,l=pt(r,["component","childFactory"]),c=this.state.contextValue,d=xt(this.state.children).map(s);return delete l.appear,delete l.enter,delete l.exit,o===null?Q.createElement(Re.Provider,{value:c},d):Q.createElement(Re.Provider,{value:c},Q.createElement(o,l,d))},t})(Q.Component);de.propTypes={};de.defaultProps=yt;const Te={};function Be(e,t){const n=a.useRef(Te);return n.current===Te&&(n.current=e(t)),n}const vt=[];function Rt(e){a.useEffect(e,vt)}class pe{static create(){return new pe}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function Tt(){const e=Be(pe.create).current;return Rt(e.disposeEffect),e}function we(e){try{return e.matches(":focus-visible")}catch{}return!1}class ne{static create(){return new ne}static use(){const t=Be(ne.create).current,[n,i]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=i,a.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Ct(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function wt(){return ne.use()}function Ct(){let e,t;const n=new Promise((i,r)=>{e=i,t=r});return n.resolve=e,n.reject=t,n}function Mt(e){const{className:t,classes:n,pulsate:i=!1,rippleX:r,rippleY:o,rippleSize:s,in:l,onExited:c,timeout:d}=e,[m,g]=a.useState(!1),h=B(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),b={width:s,height:s,top:-(s/2)+o,left:-(s/2)+r},p=B(n.child,m&&n.childLeaving,i&&n.childPulsate);return!l&&!m&&g(!0),a.useEffect(()=>{if(!l&&c!=null){const y=setTimeout(c,d);return()=>{clearTimeout(y)}}},[c,l,d]),M.jsx("span",{className:h,style:b,children:M.jsx("span",{className:p})})}const S=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),se=550,Et=80,It=ce`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,St=ce`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Bt=ce`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,$t=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Pt=Z(Mt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${S.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${It};
    animation-duration: ${se}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${S.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${S.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${S.childLeaving} {
    opacity: 0;
    animation-name: ${St};
    animation-duration: ${se}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${S.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Bt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,kt=a.forwardRef(function(t,n){const i=le({props:t,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:s,...l}=i,[c,d]=a.useState([]),m=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[c]);const h=a.useRef(!1),b=Tt(),p=a.useRef(null),y=a.useRef(null),v=a.useCallback(x=>{const{pulsate:w,rippleX:C,rippleY:z,rippleSize:W,cb:K}=x;d($=>[...$,M.jsx(Pt,{classes:{ripple:B(o.ripple,S.ripple),rippleVisible:B(o.rippleVisible,S.rippleVisible),ripplePulsate:B(o.ripplePulsate,S.ripplePulsate),child:B(o.child,S.child),childLeaving:B(o.childLeaving,S.childLeaving),childPulsate:B(o.childPulsate,S.childPulsate)},timeout:se,pulsate:w,rippleX:C,rippleY:z,rippleSize:W},m.current)]),m.current+=1,g.current=K},[o]),T=a.useCallback((x={},w={},C=()=>{})=>{const{pulsate:z=!1,center:W=r||w.pulsate,fakeElement:K=!1}=w;if(x?.type==="mousedown"&&h.current){h.current=!1;return}x?.type==="touchstart"&&(h.current=!0);const $=K?null:y.current,N=$?$.getBoundingClientRect():{width:0,height:0,left:0,top:0};let D,P,V;if(W||x===void 0||x.clientX===0&&x.clientY===0||!x.clientX&&!x.touches)D=Math.round(N.width/2),P=Math.round(N.height/2);else{const{clientX:Y,clientY:U}=x.touches&&x.touches.length>0?x.touches[0]:x;D=Math.round(Y-N.left),P=Math.round(U-N.top)}if(W)V=Math.sqrt((2*N.width**2+N.height**2)/3),V%2===0&&(V+=1);else{const Y=Math.max(Math.abs(($?$.clientWidth:0)-D),D)*2+2,U=Math.max(Math.abs(($?$.clientHeight:0)-P),P)*2+2;V=Math.sqrt(Y**2+U**2)}x?.touches?p.current===null&&(p.current=()=>{v({pulsate:z,rippleX:D,rippleY:P,rippleSize:V,cb:C})},b.start(Et,()=>{p.current&&(p.current(),p.current=null)})):v({pulsate:z,rippleX:D,rippleY:P,rippleSize:V,cb:C})},[r,v,b]),E=a.useCallback(()=>{T({},{pulsate:!0})},[T]),j=a.useCallback((x,w)=>{if(b.clear(),x?.type==="touchend"&&p.current){p.current(),p.current=null,b.start(0,()=>{j(x,w)});return}p.current=null,d(C=>C.length>0?C.slice(1):C),g.current=w},[b]);return a.useImperativeHandle(n,()=>({pulsate:E,start:T,stop:j}),[E,T,j]),M.jsx($t,{className:B(S.root,o.root,s),ref:y,...l,children:M.jsx(de,{component:null,exit:!0,children:c})})});function Lt(e){return Me("MuiButtonBase",e)}const jt=ae("MuiButtonBase",["root","disabled","focusVisible"]),zt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:r}=e,s=Ee({root:["root",t&&"disabled",n&&"focusVisible"]},Lt,r);return n&&i&&(s.root+=` ${i}`),s},Nt=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${jt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Dt=a.forwardRef(function(t,n){const i=le({props:t,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:s,className:l,component:c="button",disabled:d=!1,disableRipple:m=!1,disableTouchRipple:g=!1,focusRipple:h=!1,focusVisibleClassName:b,LinkComponent:p="a",onBlur:y,onClick:v,onContextMenu:T,onDragLeave:E,onFocus:j,onFocusVisible:x,onKeyDown:w,onKeyUp:C,onMouseDown:z,onMouseLeave:W,onMouseUp:K,onTouchEnd:$,onTouchMove:N,onTouchStart:D,tabIndex:P=0,TouchRippleProps:V,touchRippleRef:Y,type:U,..._}=i,H=a.useRef(null),R=wt(),$e=ve(R.ref,Y),[A,J]=a.useState(!1);d&&A&&J(!1),a.useImperativeHandle(r,()=>({focusVisible:()=>{J(!0),H.current.focus()}}),[]);const Pe=R.shouldMount&&!m&&!d;a.useEffect(()=>{A&&h&&!m&&R.pulsate()},[m,h,A,R]);const ke=k(R,"start",z,g),Le=k(R,"stop",T,g),je=k(R,"stop",E,g),ze=k(R,"stop",K,g),Ne=k(R,"stop",u=>{A&&u.preventDefault(),W&&W(u)},g),De=k(R,"start",D,g),Ve=k(R,"stop",$,g),Oe=k(R,"stop",N,g),Fe=k(R,"stop",u=>{we(u.target)||J(!1),y&&y(u)},!1),We=te(u=>{H.current||(H.current=u.currentTarget),we(u.target)&&(J(!0),x&&x(u)),j&&j(u)}),oe=()=>{const u=H.current;return c&&c!=="button"&&!(u.tagName==="A"&&u.href)},Ue=te(u=>{h&&!u.repeat&&A&&u.key===" "&&R.stop(u,()=>{R.start(u)}),u.target===u.currentTarget&&oe()&&u.key===" "&&u.preventDefault(),w&&w(u),u.target===u.currentTarget&&oe()&&u.key==="Enter"&&!d&&(u.preventDefault(),v&&v(u))}),Ae=te(u=>{h&&u.key===" "&&A&&!u.defaultPrevented&&R.stop(u,()=>{R.pulsate(u)}),C&&C(u),v&&u.target===u.currentTarget&&oe()&&u.key===" "&&!u.defaultPrevented&&v(u)});let ee=c;ee==="button"&&(_.href||_.to)&&(ee=p);const X={};ee==="button"?(X.type=U===void 0?"button":U,X.disabled=d):(!_.href&&!_.to&&(X.role="button"),d&&(X["aria-disabled"]=d));const qe=ve(n,H),fe={...i,centerRipple:o,component:c,disabled:d,disableRipple:m,disableTouchRipple:g,focusRipple:h,tabIndex:P,focusVisible:A},Ge=zt(fe);return M.jsxs(Nt,{as:ee,className:B(Ge.root,l),ownerState:fe,onBlur:Fe,onClick:v,onContextMenu:Le,onFocus:We,onKeyDown:Ue,onKeyUp:Ae,onMouseDown:ke,onMouseLeave:Ne,onMouseUp:ze,onDragLeave:je,onTouchEnd:Ve,onTouchMove:Oe,onTouchStart:De,ref:qe,tabIndex:d?-1:P,type:U,...X,..._,children:[s,Pe?M.jsx(kt,{ref:$e,center:o,...V}):null]})});function k(e,t,n,i=!1){return te(r=>(n&&n(r),i||e[t](r),!0))}function Vt(e){return Me("MuiIconButton",e)}const Ce=ae("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),Ot=e=>{const{classes:t,disabled:n,color:i,edge:r,size:o,loading:s}=e,l={root:["root",s&&"loading",n&&"disabled",i!=="default"&&`color${G(i)}`,r&&`edge${G(r)}`,`size${G(o)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return Ee(l,Vt,t)},Ft=Z(Dt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.loading&&t.loading,n.color!=="default"&&t[`color${G(n.color)}`],n.edge&&t[`edge${G(n.edge)}`],t[`size${G(n.size)}`]]}})(he(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:t=>!t.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:ge(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),he(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(be()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette).filter(be()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ge((e.vars||e).palette[t].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${Ce.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled},[`&.${Ce.loading}`]:{color:"transparent"}}))),Wt=Z("span",{name:"MuiIconButton",slot:"LoadingIndicator"})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Ut=a.forwardRef(function(t,n){const i=le({props:t,name:"MuiIconButton"}),{edge:r=!1,children:o,className:s,color:l="default",disabled:c=!1,disableFocusRipple:d=!1,size:m="medium",id:g,loading:h=null,loadingIndicator:b,...p}=i,y=dt(g),v=b??M.jsx(rt,{"aria-labelledby":y,color:"inherit",size:16}),T={...i,edge:r,color:l,disabled:c,disableFocusRipple:d,loading:h,loadingIndicator:v,size:m},E=Ot(T);return M.jsxs(Ft,{id:h?y:g,className:B(E.root,s),centerRipple:!0,focusRipple:!d,disabled:c||h,ref:n,...p,ownerState:T,children:[typeof h=="boolean"&&M.jsx("span",{className:E.loadingWrapper,style:{display:"contents"},children:M.jsx(Wt,{className:E.loadingIndicator,ownerState:T,children:h&&v})}),o]})}),At=Ie(M.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),qt=Ie(M.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})),Gt=Qe(),Kt=e=>f(Ze,{theme:Gt,children:f(Ut,{onClick:e.onClick,style:e.styles??void 0,children:e.children})}),Yt=L.div`
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
`,_t=L.div`
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
`,Ht=L.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
`,Xt=L.div`
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
`,Qt=L.div`
    line-height: 17.5px;
    font-size: 14px;
    color: ${e=>e.disabled?e.theme.colors.Text.disable:e.theme.colors.Text.default};
`,dn=({options:e=["option1","option2","option3"],zindex:t=10,disabledOptions:n=[],setSelectedOption:i,selectedOption:r,isDetail:o=!0})=>{const s=Ye(),[l,c]=a.useState(!1),d=a.useRef(null),[m,g]=a.useState({top:0,left:0,width:0}),h=a.useRef(null);return a.useEffect(()=>{const b=()=>{if(d.current){const p=d.current.getBoundingClientRect();g({top:p.top,left:p.left,width:p.width})}};return b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[l]),a.useEffect(()=>{if(h.current&&e.length>0&&r>=0){const b=h.current.children[r];if(b){const y=b.getBoundingClientRect().top-h.current.getBoundingClientRect().top;h.current&&(h.current.scrollTop=y)}}},[r,l,e]),O(Ht,{isExpand:l,children:[O(Yt,{ref:d,onClick:()=>{c(!l)},children:[e[r],f(Kt,{onClick:()=>{c(!l)},styles:{padding:0},children:f(Je,{size:24,color:s.colors.Highlight.default,children:l?f(At,{}):f(qt,{})})})]}),l&&f(Xt,{ref:h,top:m.top,left:m.left,width:m.width,zindex:t,isDetail:o,children:e.map((b,p)=>{const y=n.includes(p),v=r==p;return f(_t,{onClick:()=>{i(p),c(!1)},disabled:y,children:f(Qt,{disabled:y,selected:v,children:b})},p)})})]})},re=L(He)`
    text-decoration: none;
`,pn=()=>{const{t:e}=Se();return O(F,{direction:"column",gap:12,align:"center",justify:"stretch",children:[f(I,{color:"Text.placeholder",type:"Bigger",children:"OTL PLUS"}),O(F,{direction:"row",gap:12,justify:"space-between",children:[f(re,{to:"/makers",children:f(I,{color:"Text.placeholder",type:"Big",children:e("credits.credits")})}),f(I,{color:"Text.placeholder",type:"Big",children:"|"}),f(re,{to:"/license",children:f(I,{color:"Text.placeholder",type:"Big",children:e("credits.license")})}),f(I,{color:"Text.placeholder",type:"Big",children:"|"}),f(re,{to:"/privacy-policy",children:f(I,{color:"Text.placeholder",type:"Big",children:e("credits.privacyPolicy")})})]}),f(I,{color:"Text.placeholder",type:"Big",children:"otlplus@sparcs.org"}),f(I,{color:"Text.placeholder",type:"Big",children:"Ⓒ 2026, SPARCS OTL TEAM"})]})},Zt=L(F)`
    padding: 8px 10px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
`,Jt=L(F)`
    height: 160px;
`,en=L(F)`
    flex-wrap: wrap;
`;function fn({name:e,lectureId:t,professors:n,year:i,semester:r,myReview:o}){const{t:s}=Se(),{user:l}=lt(),c=et(),{requestFunction:d}=me("POST","/reviews",{onSuccess:()=>{c.invalidateQueries({queryKey:["/reviews"]}),c.invalidateQueries({queryKey:[`/users/${l?.id}/lectures`]})}}),{requestFunction:m}=me("PUT",`/reviews/${o?.id}`,{onSuccess:()=>{c.invalidateQueries({queryKey:["/reviews"]})}}),[g,h]=a.useState(""),[b,p]=a.useState(0),[y,v]=a.useState(0),[T,E]=a.useState(0);function j(){h(""),p(0),v(0),E(0)}a.useEffect(()=>{j(),o&&(h(o.content),p(o.grade),v(o.load),E(o.speech))},[]);function x(){o?m({content:g,grade:b,load:y,speech:T}):d({lectureId:t,content:g,grade:b,load:y,speech:T})}return O(Zt,{direction:"column",gap:8,align:"stretch",children:[O(F,{direction:"row",gap:6,align:"center",children:[f(I,{type:"NormalBold",color:"Text.default",children:e}),[at(n),i,tt(r||nt.SPRING)].map((w,C)=>f(I,{type:"Normal",color:"Text.lighter",children:w},C))]}),f(Jt,{direction:"column",gap:0,justify:"stretch",align:"stretch",children:f(it,{placeholder:s("common.review.writingPlaceholder"),value:g,handleChange:h,area:!0})}),O(F,{direction:"row",gap:20,justify:"space-between",align:"center",children:[f(en,{direction:"row",gap:12,children:[[s("common.grade"),b,p],[s("common.load"),y,v],[s("common.speech"),T,E]].map(([w,C,z])=>O(F,{direction:"row",gap:6,align:"center",children:[f(I,{type:"Normal",color:"Text.default",children:w}),f(st,{score:C,setScore:z})]},w))}),f(ot,{type:g&&b&&T&&y?"selected":"disabled",$paddingLeft:8,$paddingTop:8,onClick:x,children:f(I,{type:"Normal",children:s(o?"writeReviews.write.edit":"common.upload")})})]})]})}export{pn as C,At as E,fn as R,dn as S,qt as a};
