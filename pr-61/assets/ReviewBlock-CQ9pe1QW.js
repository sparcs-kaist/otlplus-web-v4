import{_ as He,j as R,a as M}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{C as Xe,r as a,R as G,p as y,y as _e}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{n as se,F as D}from"./FlexWrapper-B6Hxm4Zw.js";import{X as Ke,N as I,J as ae,K as le,L as Z,T as ce,H as ke,P as Te,O as Y,R as he,Y as me,U as qe,V as Ge,e as Ee,k as ge,u as Ze,q as Je,Z as oe,I as Qe}from"./useIsDevice-CY7om9yY.js";import{c as be,C as et}from"./LoadingCircle-DmirwBjQ.js";import{T as w}from"./Typography-DeI78L6T.js";import{u as tt}from"./index-jZBtGqAs.js";let ye=0;function nt(e){const[t,n]=a.useState(e),o=e||t;return a.useEffect(()=>{t==null&&(ye+=1,n(`mui-${ye}`))},[t]),o}const ot={...Xe},xe=ot.useId;function rt(e){if(xe!==void 0){const t=xe();return e??t}return nt(e)}function ee(e){const t=a.useRef(e);return Ke(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function Re(...e){const t=a.useRef(void 0),n=a.useCallback(o=>{const i=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const s=r,c=s(o);return typeof c=="function"?c:()=>{s(null)}}return r.current=o,()=>{r.current=null}});return()=>{i.forEach(r=>r?.())}},e);return a.useMemo(()=>e.every(o=>o==null)?null:o=>{t.current&&(t.current(),t.current=void 0),o!=null&&(t.current=n(o))},e)}function it(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function re(e,t){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},re(e,t)}function st(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,re(e,t)}const ve=G.createContext(null);function at(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},o=Object.create(null);return e&&a.Children.map(e,function(i){return i}).forEach(function(i){o[i.key]=n(i)}),o}function lt(e,t){e=e||{},t=t||{};function n(p){return p in t?t[p]:e[p]}var o=Object.create(null),i=[];for(var r in e)r in t?i.length&&(o[r]=i,i=[]):i.push(r);var s,c={};for(var u in t){if(o[u])for(s=0;s<o[u].length;s++){var d=o[u][s];c[o[u][s]]=n(d)}c[u]=n(u)}for(s=0;s<i.length;s++)c[i[s]]=n(i[s]);return c}function U(e,t,n){return n[t]!=null?n[t]:e.props[t]}function ct(e,t){return ue(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:U(n,"appear",e),enter:U(n,"enter",e),exit:U(n,"exit",e)})})}function ut(e,t,n){var o=ue(e.children),i=lt(t,o);return Object.keys(i).forEach(function(r){var s=i[r];if(a.isValidElement(s)){var c=r in t,u=r in o,d=t[r],p=a.isValidElement(d)&&!d.props.in;u&&(!c||p)?i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:U(s,"exit",e),enter:U(s,"enter",e)}):!u&&c&&!p?i[r]=a.cloneElement(s,{in:!1}):u&&c&&a.isValidElement(d)&&(i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:d.props.in,exit:U(s,"exit",e),enter:U(s,"enter",e)}))}}),i}var dt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},pt={component:"div",childFactory:function(t){return t}},de=(function(e){st(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var s=r.handleExited.bind(at(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,r){var s=r.children,c=r.handleExited,u=r.firstRender;return{children:u?ct(i,c):ut(i,s,c),firstRender:!1}},n.handleExited=function(i,r){var s=ue(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(c){var u=He({},c.children);return delete u[i.key],{children:u}}))},n.render=function(){var i=this.props,r=i.component,s=i.childFactory,c=it(i,["component","childFactory"]),u=this.state.contextValue,d=dt(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?G.createElement(ve.Provider,{value:u},d):G.createElement(ve.Provider,{value:u},G.createElement(r,c,d))},t})(G.Component);de.propTypes={};de.defaultProps=pt;const Ce={};function Be(e,t){const n=a.useRef(Ce);return n.current===Ce&&(n.current=e(t)),n}const ft=[];function ht(e){a.useEffect(e,ft)}class pe{static create(){return new pe}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function mt(){const e=Be(pe.create).current;return ht(e.disposeEffect),e}function Me(e){try{return e.matches(":focus-visible")}catch{}return!1}class te{static create(){return new te}static use(){const t=Be(te.create).current,[n,o]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=o,a.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=bt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function gt(){return te.use()}function bt(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});return n.resolve=e,n.reject=t,n}function yt(e){const{className:t,classes:n,pulsate:o=!1,rippleX:i,rippleY:r,rippleSize:s,in:c,onExited:u,timeout:d}=e,[p,f]=a.useState(!1),m=I(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),k={width:s,height:s,top:-(s/2)+r,left:-(s/2)+i},b=I(n.child,p&&n.childLeaving,o&&n.childPulsate);return!c&&!p&&f(!0),a.useEffect(()=>{if(!c&&u!=null){const T=setTimeout(u,d);return()=>{clearTimeout(T)}}},[u,c,d]),y.jsx("span",{className:m,style:k,children:y.jsx("span",{className:b})})}const v=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ie=550,xt=80,Rt=ce`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,vt=ce`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ct=ce`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Mt=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),It=Z(yt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${v.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Rt};
    animation-duration: ${ie}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${v.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${v.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${v.childLeaving} {
    opacity: 0;
    animation-name: ${vt};
    animation-duration: ${ie}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${v.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ct};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,kt=a.forwardRef(function(t,n){const o=le({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:s,...c}=o,[u,d]=a.useState([]),p=a.useRef(0),f=a.useRef(null);a.useEffect(()=>{f.current&&(f.current(),f.current=null)},[u]);const m=a.useRef(!1),k=mt(),b=a.useRef(null),T=a.useRef(null),x=a.useCallback(h=>{const{pulsate:B,rippleX:C,rippleY:A,rippleSize:V,cb:H}=h;d(P=>[...P,y.jsx(It,{classes:{ripple:I(r.ripple,v.ripple),rippleVisible:I(r.rippleVisible,v.rippleVisible),ripplePulsate:I(r.ripplePulsate,v.ripplePulsate),child:I(r.child,v.child),childLeaving:I(r.childLeaving,v.childLeaving),childPulsate:I(r.childPulsate,v.childPulsate)},timeout:ie,pulsate:B,rippleX:C,rippleY:A,rippleSize:V},p.current)]),p.current+=1,f.current=H},[r]),E=a.useCallback((h={},B={},C=()=>{})=>{const{pulsate:A=!1,center:V=i||B.pulsate,fakeElement:H=!1}=B;if(h?.type==="mousedown"&&m.current){m.current=!1;return}h?.type==="touchstart"&&(m.current=!0);const P=H?null:T.current,j=P?P.getBoundingClientRect():{width:0,height:0,left:0,top:0};let z,$,L;if(V||h===void 0||h.clientX===0&&h.clientY===0||!h.clientX&&!h.touches)z=Math.round(j.width/2),$=Math.round(j.height/2);else{const{clientX:X,clientY:O}=h.touches&&h.touches.length>0?h.touches[0]:h;z=Math.round(X-j.left),$=Math.round(O-j.top)}if(V)L=Math.sqrt((2*j.width**2+j.height**2)/3),L%2===0&&(L+=1);else{const X=Math.max(Math.abs((P?P.clientWidth:0)-z),z)*2+2,O=Math.max(Math.abs((P?P.clientHeight:0)-$),$)*2+2;L=Math.sqrt(X**2+O**2)}h?.touches?b.current===null&&(b.current=()=>{x({pulsate:A,rippleX:z,rippleY:$,rippleSize:L,cb:C})},k.start(xt,()=>{b.current&&(b.current(),b.current=null)})):x({pulsate:A,rippleX:z,rippleY:$,rippleSize:L,cb:C})},[i,x,k]),N=a.useCallback(()=>{E({},{pulsate:!0})},[E]),W=a.useCallback((h,B)=>{if(k.clear(),h?.type==="touchend"&&b.current){b.current(),b.current=null,k.start(0,()=>{W(h,B)});return}b.current=null,d(C=>C.length>0?C.slice(1):C),f.current=B},[k]);return a.useImperativeHandle(n,()=>({pulsate:N,start:E,stop:W}),[N,E,W]),y.jsx(Mt,{className:I(v.root,r.root,s),ref:T,...c,children:y.jsx(de,{component:null,exit:!0,children:u})})});function Tt(e){return ke("MuiButtonBase",e)}const Et=ae("MuiButtonBase",["root","disabled","focusVisible"]),Bt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:i}=e,s=Te({root:["root",t&&"disabled",n&&"focusVisible"]},Tt,i);return n&&o&&(s.root+=` ${o}`),s},Pt=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),$t=a.forwardRef(function(t,n){const o=le({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:s,className:c,component:u="button",disabled:d=!1,disableRipple:p=!1,disableTouchRipple:f=!1,focusRipple:m=!1,focusVisibleClassName:k,LinkComponent:b="a",onBlur:T,onClick:x,onContextMenu:E,onDragLeave:N,onFocus:W,onFocusVisible:h,onKeyDown:B,onKeyUp:C,onMouseDown:A,onMouseLeave:V,onMouseUp:H,onTouchEnd:P,onTouchMove:j,onTouchStart:z,tabIndex:$=0,TouchRippleProps:L,touchRippleRef:X,type:O,..._}=o,K=a.useRef(null),g=gt(),Pe=Re(g.ref,X),[F,J]=a.useState(!1);d&&F&&J(!1),a.useImperativeHandle(i,()=>({focusVisible:()=>{J(!0),K.current.focus()}}),[]);const $e=g.shouldMount&&!p&&!d;a.useEffect(()=>{F&&m&&!p&&g.pulsate()},[p,m,F,g]);const Se=S(g,"start",A,f),we=S(g,"stop",E,f),Ne=S(g,"stop",N,f),je=S(g,"stop",H,f),ze=S(g,"stop",l=>{F&&l.preventDefault(),V&&V(l)},f),Le=S(g,"start",z,f),Ve=S(g,"stop",P,f),Oe=S(g,"stop",j,f),Fe=S(g,"stop",l=>{Me(l.target)||J(!1),T&&T(l)},!1),De=ee(l=>{K.current||(K.current=l.currentTarget),Me(l.target)&&(J(!0),h&&h(l)),W&&W(l)}),ne=()=>{const l=K.current;return u&&u!=="button"&&!(l.tagName==="A"&&l.href)},Ue=ee(l=>{m&&!l.repeat&&F&&l.key===" "&&g.stop(l,()=>{g.start(l)}),l.target===l.currentTarget&&ne()&&l.key===" "&&l.preventDefault(),B&&B(l),l.target===l.currentTarget&&ne()&&l.key==="Enter"&&!d&&(l.preventDefault(),x&&x(l))}),We=ee(l=>{m&&l.key===" "&&F&&!l.defaultPrevented&&g.stop(l,()=>{g.pulsate(l)}),C&&C(l),x&&l.target===l.currentTarget&&ne()&&l.key===" "&&!l.defaultPrevented&&x(l)});let Q=u;Q==="button"&&(_.href||_.to)&&(Q=b);const q={};Q==="button"?(q.type=O===void 0?"button":O,q.disabled=d):(!_.href&&!_.to&&(q.role="button"),d&&(q["aria-disabled"]=d));const Ae=Re(n,K),fe={...o,centerRipple:r,component:u,disabled:d,disableRipple:p,disableTouchRipple:f,focusRipple:m,tabIndex:$,focusVisible:F},Ye=Bt(fe);return y.jsxs(Pt,{as:Q,className:I(Ye.root,c),ownerState:fe,onBlur:Fe,onClick:x,onContextMenu:we,onFocus:De,onKeyDown:Ue,onKeyUp:We,onMouseDown:Se,onMouseLeave:ze,onMouseUp:je,onDragLeave:Ne,onTouchEnd:Ve,onTouchMove:Oe,onTouchStart:Le,ref:Ae,tabIndex:d?-1:$,type:O,...q,..._,children:[s,$e?y.jsx(kt,{ref:Pe,center:r,...L}):null]})});function S(e,t,n,o=!1){return ee(i=>(n&&n(i),o||e[t](i),!0))}function St(e){return ke("MuiIconButton",e)}const Ie=ae("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),wt=e=>{const{classes:t,disabled:n,color:o,edge:i,size:r,loading:s}=e,c={root:["root",s&&"loading",n&&"disabled",o!=="default"&&`color${Y(o)}`,i&&`edge${Y(i)}`,`size${Y(r)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return Te(c,St,t)},Nt=Z($t,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.loading&&t.loading,n.color!=="default"&&t[`color${Y(n.color)}`],n.edge&&t[`edge${Y(n.edge)}`],t[`size${Y(n.size)}`]]}})(he(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:t=>!t.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:me(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),he(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(be()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette).filter(be()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:me((e.vars||e).palette[t].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${Ie.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled},[`&.${Ie.loading}`]:{color:"transparent"}}))),jt=Z("span",{name:"MuiIconButton",slot:"LoadingIndicator"})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),zt=a.forwardRef(function(t,n){const o=le({props:t,name:"MuiIconButton"}),{edge:i=!1,children:r,className:s,color:c="default",disabled:u=!1,disableFocusRipple:d=!1,size:p="medium",id:f,loading:m=null,loadingIndicator:k,...b}=o,T=rt(f),x=k??y.jsx(et,{"aria-labelledby":T,color:"inherit",size:16}),E={...o,edge:i,color:c,disabled:u,disableFocusRipple:d,loading:m,loadingIndicator:x,size:p},N=wt(E);return y.jsxs(Nt,{id:m?T:f,className:I(N.root,s),centerRipple:!0,focusRipple:!d,disabled:u||m,ref:n,...b,ownerState:E,children:[typeof m=="boolean"&&y.jsx("span",{className:N.loadingWrapper,style:{display:"contents"},children:y.jsx(jt,{className:N.loadingIndicator,ownerState:E,children:m&&x})}),r]})}),Lt=qe(),Vt=e=>R(Ge,{theme:Lt,children:R(zt,{onClick:e.onClick,style:e.styles??void 0,children:e.children})}),Ot=Ee(y.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})),Ft=Ee(y.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}));function Dt(e){return!e||e.length===0?"":`${e[0]?.name}${e.length>1?ge.t("common.professors.over")+(e.length-1)+ge.t("common.professors.people"):""}`}const Ut=se(w)`
    line-height: 1.5;
    width: 100%;

    ${e=>e.overflow&&`
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    `}
`,Wt=se.div`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};

    &:hover {
        background-color: ${e=>e.clickable?e.theme.colors.Background.Block.dark:e.theme.colors.Background.Block.default};
    }
`,At=se(D)`
    width: 100%;
    cursor: ${e=>e.clickable?"pointer":"default"};
    user-select: ${e=>e.clickable?"none":"auto"};
`;function Yt({review:e,withWrapper:t=!0,linkToDictionary:n=!0}){const{t:o}=tt(),i=_e(),{requestFunction:r}=Ze("PATCH",`/reviews/${e.id}/liked`,{onSuccess:()=>{c(p=>p===null?!e.likedByUser:!p)}}),[s,c]=a.useState(null);if(!e)return;const u=p=>{p.stopPropagation(),r({reviewId:e.id,action:s??e.likedByUser?"unlike":"like"})},d=M(At,{direction:"column",align:"stretch",gap:3,padding:"3px 4px 0px 4px",clickable:n,onClick:()=>{n&&i(`/dictionary?courseId=${e.courseId}`)},children:[M(D,{direction:"column",gap:8,children:[M(D,{direction:"row",gap:6,children:[R(w,{type:"NormalBold",color:"Text.default",children:e.courseName}),R(w,{type:"Normal",color:"Text.lighter",children:Dt(e.professors)}),M(w,{type:"Normal",color:"Text.lighter",children:[e.year," ",Je(e.semester)]})]}),R(D,{direction:"row",gap:0,style:{overflow:"hidden"},children:R(Ut,{type:"Normal",color:"Text.default",overflow:!t,children:e.content})})]}),M(D,{direction:"row",justify:"space-between",align:"center",gap:0,children:[M(D,{direction:"row",gap:8,children:[M(w,{type:"Normal",color:"Text.lighter",children:[o("common.review.like")," ",e.like]}),M(w,{type:"Normal",color:"Text.lighter",children:[o("common.grade")," ",oe[e.grade]]}),M(w,{type:"Normal",color:"Text.lighter",children:[o("common.load")," ",oe[e.load]]}),M(w,{type:"Normal",color:"Text.lighter",children:[o("common.speech")," ",oe[e.speech]]})]}),M(D,{direction:"row",gap:4,align:"center",children:[R(w,{type:"Normal",color:"Highlight.default",children:o("common.review.like")}),R(Vt,{onClick:p=>u(p),styles:{padding:3},children:R(Qe,{size:18,color:"crimson",onClick:()=>{},children:s??e.likedByUser?R(Ot,{}):R(Ft,{})})})]})]})]});return t?R(Wt,{clickable:n,children:d}):d}const Jt=a.memo(Yt);export{Ot as F,Vt as I,Jt as R,Ft as a,Dt as p};
//# sourceMappingURL=ReviewBlock-CQ9pe1QW.js.map
