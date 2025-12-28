import{_ as Xe,j as v,a as I}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{C as _e,r as a,R as G,p as R,y as Ke}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{n as ne,F as U}from"./FlexWrapper-B6Hxm4Zw.js";import{X as qe,N as k,J as ae,K as le,L as Z,T as ce,H as Te,P as Ee,O as Y,R as he,Y as me,U as Ge,V as Ze,e as Be,k as ge,u as be,q as Je,Z as re,I as Qe}from"./useIsDevice-BI9iNnny.js";import{c as ye,C as et}from"./LoadingCircle-DQUvw6aP.js";import{T as S}from"./Typography-DeI78L6T.js";import{u as tt}from"./useUserStore-DouDTYse.js";import{u as nt}from"./index-CpXhtjwI.js";let Re=0;function ot(e){const[t,n]=a.useState(e),o=e||t;return a.useEffect(()=>{t==null&&(Re+=1,n(`mui-${Re}`))},[t]),o}const rt={..._e},xe=rt.useId;function it(e){if(xe!==void 0){const t=xe();return e??t}return ot(e)}function ee(e){const t=a.useRef(e);return qe(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function ve(...e){const t=a.useRef(void 0),n=a.useCallback(o=>{const i=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const s=r,u=s(o);return typeof u=="function"?u:()=>{s(null)}}return r.current=o,()=>{r.current=null}});return()=>{i.forEach(r=>r?.())}},e);return a.useMemo(()=>e.every(o=>o==null)?null:o=>{t.current&&(t.current(),t.current=void 0),o!=null&&(t.current=n(o))},e)}function st(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function ie(e,t){return ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},ie(e,t)}function at(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ie(e,t)}const Me=G.createContext(null);function lt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},o=Object.create(null);return e&&a.Children.map(e,function(i){return i}).forEach(function(i){o[i.key]=n(i)}),o}function ct(e,t){e=e||{},t=t||{};function n(f){return f in t?t[f]:e[f]}var o=Object.create(null),i=[];for(var r in e)r in t?i.length&&(o[r]=i,i=[]):i.push(r);var s,u={};for(var c in t){if(o[c])for(s=0;s<o[c].length;s++){var d=o[c][s];u[o[c][s]]=n(d)}u[c]=n(c)}for(s=0;s<i.length;s++)u[i[s]]=n(i[s]);return u}function D(e,t,n){return n[t]!=null?n[t]:e.props[t]}function ut(e,t){return ue(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:D(n,"appear",e),enter:D(n,"enter",e),exit:D(n,"exit",e)})})}function dt(e,t,n){var o=ue(e.children),i=ct(t,o);return Object.keys(i).forEach(function(r){var s=i[r];if(a.isValidElement(s)){var u=r in t,c=r in o,d=t[r],f=a.isValidElement(d)&&!d.props.in;c&&(!u||f)?i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:D(s,"exit",e),enter:D(s,"enter",e)}):!c&&u&&!f?i[r]=a.cloneElement(s,{in:!1}):c&&u&&a.isValidElement(d)&&(i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:d.props.in,exit:D(s,"exit",e),enter:D(s,"enter",e)}))}}),i}var pt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ft={component:"div",childFactory:function(t){return t}},de=(function(e){at(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var s=r.handleExited.bind(lt(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,r){var s=r.children,u=r.handleExited,c=r.firstRender;return{children:c?ut(i,u):dt(i,s,u),firstRender:!1}},n.handleExited=function(i,r){var s=ue(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(u){var c=Xe({},u.children);return delete c[i.key],{children:c}}))},n.render=function(){var i=this.props,r=i.component,s=i.childFactory,u=st(i,["component","childFactory"]),c=this.state.contextValue,d=pt(this.state.children).map(s);return delete u.appear,delete u.enter,delete u.exit,r===null?G.createElement(Me.Provider,{value:c},d):G.createElement(Me.Provider,{value:c},G.createElement(r,u,d))},t})(G.Component);de.propTypes={};de.defaultProps=ft;const Ce={};function Pe(e,t){const n=a.useRef(Ce);return n.current===Ce&&(n.current=e(t)),n}const ht=[];function mt(e){a.useEffect(e,ht)}class pe{static create(){return new pe}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function gt(){const e=Pe(pe.create).current;return mt(e.disposeEffect),e}function Ie(e){try{return e.matches(":focus-visible")}catch{}return!1}class te{static create(){return new te}static use(){const t=Pe(te.create).current,[n,o]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=o,a.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=yt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function bt(){return te.use()}function yt(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});return n.resolve=e,n.reject=t,n}function Rt(e){const{className:t,classes:n,pulsate:o=!1,rippleX:i,rippleY:r,rippleSize:s,in:u,onExited:c,timeout:d}=e,[f,p]=a.useState(!1),h=k(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),g={width:s,height:s,top:-(s/2)+r,left:-(s/2)+i},y=k(n.child,f&&n.childLeaving,o&&n.childPulsate);return!u&&!f&&p(!0),a.useEffect(()=>{if(!u&&c!=null){const T=setTimeout(c,d);return()=>{clearTimeout(T)}}},[c,u,d]),R.jsx("span",{className:h,style:g,children:R.jsx("span",{className:y})})}const M=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),se=550,xt=80,vt=ce`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Mt=ce`
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
`,It=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),kt=Z(Rt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${M.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${vt};
    animation-duration: ${se}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${M.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${M.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${M.childLeaving} {
    opacity: 0;
    animation-name: ${Mt};
    animation-duration: ${se}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${M.childPulsate} {
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
`,Tt=a.forwardRef(function(t,n){const o=le({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:s,...u}=o,[c,d]=a.useState([]),f=a.useRef(0),p=a.useRef(null);a.useEffect(()=>{p.current&&(p.current(),p.current=null)},[c]);const h=a.useRef(!1),g=gt(),y=a.useRef(null),T=a.useRef(null),x=a.useCallback(m=>{const{pulsate:B,rippleX:C,rippleY:A,rippleSize:V,cb:H}=m;d(P=>[...P,R.jsx(kt,{classes:{ripple:k(r.ripple,M.ripple),rippleVisible:k(r.rippleVisible,M.rippleVisible),ripplePulsate:k(r.ripplePulsate,M.ripplePulsate),child:k(r.child,M.child),childLeaving:k(r.childLeaving,M.childLeaving),childPulsate:k(r.childPulsate,M.childPulsate)},timeout:se,pulsate:B,rippleX:C,rippleY:A,rippleSize:V},f.current)]),f.current+=1,p.current=H},[r]),E=a.useCallback((m={},B={},C=()=>{})=>{const{pulsate:A=!1,center:V=i||B.pulsate,fakeElement:H=!1}=B;if(m?.type==="mousedown"&&h.current){h.current=!1;return}m?.type==="touchstart"&&(h.current=!0);const P=H?null:T.current,j=P?P.getBoundingClientRect():{width:0,height:0,left:0,top:0};let z,$,L;if(V||m===void 0||m.clientX===0&&m.clientY===0||!m.clientX&&!m.touches)z=Math.round(j.width/2),$=Math.round(j.height/2);else{const{clientX:X,clientY:O}=m.touches&&m.touches.length>0?m.touches[0]:m;z=Math.round(X-j.left),$=Math.round(O-j.top)}if(V)L=Math.sqrt((2*j.width**2+j.height**2)/3),L%2===0&&(L+=1);else{const X=Math.max(Math.abs((P?P.clientWidth:0)-z),z)*2+2,O=Math.max(Math.abs((P?P.clientHeight:0)-$),$)*2+2;L=Math.sqrt(X**2+O**2)}m?.touches?y.current===null&&(y.current=()=>{x({pulsate:A,rippleX:z,rippleY:$,rippleSize:L,cb:C})},g.start(xt,()=>{y.current&&(y.current(),y.current=null)})):x({pulsate:A,rippleX:z,rippleY:$,rippleSize:L,cb:C})},[i,x,g]),N=a.useCallback(()=>{E({},{pulsate:!0})},[E]),W=a.useCallback((m,B)=>{if(g.clear(),m?.type==="touchend"&&y.current){y.current(),y.current=null,g.start(0,()=>{W(m,B)});return}y.current=null,d(C=>C.length>0?C.slice(1):C),p.current=B},[g]);return a.useImperativeHandle(n,()=>({pulsate:N,start:E,stop:W}),[N,E,W]),R.jsx(It,{className:k(M.root,r.root,s),ref:T,...u,children:R.jsx(de,{component:null,exit:!0,children:c})})});function Et(e){return Te("MuiButtonBase",e)}const Bt=ae("MuiButtonBase",["root","disabled","focusVisible"]),Pt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:i}=e,s=Ee({root:["root",t&&"disabled",n&&"focusVisible"]},Et,i);return n&&o&&(s.root+=` ${o}`),s},$t=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Bt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wt=a.forwardRef(function(t,n){const o=le({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:s,className:u,component:c="button",disabled:d=!1,disableRipple:f=!1,disableTouchRipple:p=!1,focusRipple:h=!1,focusVisibleClassName:g,LinkComponent:y="a",onBlur:T,onClick:x,onContextMenu:E,onDragLeave:N,onFocus:W,onFocusVisible:m,onKeyDown:B,onKeyUp:C,onMouseDown:A,onMouseLeave:V,onMouseUp:H,onTouchEnd:P,onTouchMove:j,onTouchStart:z,tabIndex:$=0,TouchRippleProps:L,touchRippleRef:X,type:O,..._}=o,K=a.useRef(null),b=bt(),$e=ve(b.ref,X),[F,J]=a.useState(!1);d&&F&&J(!1),a.useImperativeHandle(i,()=>({focusVisible:()=>{J(!0),K.current.focus()}}),[]);const we=b.shouldMount&&!f&&!d;a.useEffect(()=>{F&&h&&!f&&b.pulsate()},[f,h,F,b]);const Se=w(b,"start",A,p),Ne=w(b,"stop",E,p),je=w(b,"stop",N,p),ze=w(b,"stop",H,p),Le=w(b,"stop",l=>{F&&l.preventDefault(),V&&V(l)},p),Ve=w(b,"start",z,p),Oe=w(b,"stop",P,p),Fe=w(b,"stop",j,p),Ue=w(b,"stop",l=>{Ie(l.target)||J(!1),T&&T(l)},!1),De=ee(l=>{K.current||(K.current=l.currentTarget),Ie(l.target)&&(J(!0),m&&m(l)),W&&W(l)}),oe=()=>{const l=K.current;return c&&c!=="button"&&!(l.tagName==="A"&&l.href)},We=ee(l=>{h&&!l.repeat&&F&&l.key===" "&&b.stop(l,()=>{b.start(l)}),l.target===l.currentTarget&&oe()&&l.key===" "&&l.preventDefault(),B&&B(l),l.target===l.currentTarget&&oe()&&l.key==="Enter"&&!d&&(l.preventDefault(),x&&x(l))}),Ae=ee(l=>{h&&l.key===" "&&F&&!l.defaultPrevented&&b.stop(l,()=>{b.pulsate(l)}),C&&C(l),x&&l.target===l.currentTarget&&oe()&&l.key===" "&&!l.defaultPrevented&&x(l)});let Q=c;Q==="button"&&(_.href||_.to)&&(Q=y);const q={};Q==="button"?(q.type=O===void 0?"button":O,q.disabled=d):(!_.href&&!_.to&&(q.role="button"),d&&(q["aria-disabled"]=d));const Ye=ve(n,K),fe={...o,centerRipple:r,component:c,disabled:d,disableRipple:f,disableTouchRipple:p,focusRipple:h,tabIndex:$,focusVisible:F},He=Pt(fe);return R.jsxs($t,{as:Q,className:k(He.root,u),ownerState:fe,onBlur:Ue,onClick:x,onContextMenu:Ne,onFocus:De,onKeyDown:We,onKeyUp:Ae,onMouseDown:Se,onMouseLeave:Le,onMouseUp:ze,onDragLeave:je,onTouchEnd:Oe,onTouchMove:Fe,onTouchStart:Ve,ref:Ye,tabIndex:d?-1:$,type:O,...q,..._,children:[s,we?R.jsx(Tt,{ref:$e,center:r,...L}):null]})});function w(e,t,n,o=!1){return ee(i=>(n&&n(i),o||e[t](i),!0))}function St(e){return Te("MuiIconButton",e)}const ke=ae("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),Nt=e=>{const{classes:t,disabled:n,color:o,edge:i,size:r,loading:s}=e,u={root:["root",s&&"loading",n&&"disabled",o!=="default"&&`color${Y(o)}`,i&&`edge${Y(i)}`,`size${Y(r)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return Ee(u,St,t)},jt=Z(wt,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.loading&&t.loading,n.color!=="default"&&t[`color${Y(n.color)}`],n.edge&&t[`edge${Y(n.edge)}`],t[`size${Y(n.size)}`]]}})(he(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:t=>!t.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:me(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),he(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter(ye()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette).filter(ye()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:me((e.vars||e).palette[t].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${ke.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled},[`&.${ke.loading}`]:{color:"transparent"}}))),zt=Z("span",{name:"MuiIconButton",slot:"LoadingIndicator"})(({theme:e})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(e.vars||e).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Lt=a.forwardRef(function(t,n){const o=le({props:t,name:"MuiIconButton"}),{edge:i=!1,children:r,className:s,color:u="default",disabled:c=!1,disableFocusRipple:d=!1,size:f="medium",id:p,loading:h=null,loadingIndicator:g,...y}=o,T=it(p),x=g??R.jsx(et,{"aria-labelledby":T,color:"inherit",size:16}),E={...o,edge:i,color:u,disabled:c,disableFocusRipple:d,loading:h,loadingIndicator:x,size:f},N=Nt(E);return R.jsxs(jt,{id:h?T:p,className:k(N.root,s),centerRipple:!0,focusRipple:!d,disabled:c||h,ref:n,...y,ownerState:E,children:[typeof h=="boolean"&&R.jsx("span",{className:N.loadingWrapper,style:{display:"contents"},children:R.jsx(zt,{className:N.loadingIndicator,ownerState:E,children:h&&x})}),r]})}),Vt=Ge(),Ot=e=>v(Ze,{theme:Vt,children:v(Lt,{onClick:e.onClick,style:e.styles??void 0,children:e.children})}),Ft=Be(R.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})),Ut=Be(R.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}));function Dt(e){return!e||e.length===0?"":`${e[0]?.name}${e.length>1?ge.t("common.professors.over")+(e.length-1)+ge.t("common.professors.people"):""}`}const Wt=ne(S)`
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
`,At=ne.div`
    padding: 8px 6px;
    width: 100%;
    border-radius: 6px;
    border: 1px ${({theme:e})=>e.colors.Background.Block.dark} solid;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};

    &:hover {
        background-color: ${e=>e.clickable?e.theme.colors.Background.Block.dark:e.theme.colors.Background.Block.default};
    }
`,Yt=ne(U)`
    width: 100%;
    cursor: ${e=>e.clickable?"pointer":"default"};
    user-select: ${e=>e.clickable?"none":"auto"};
`,Ht=ne(U)`
    cursor: pointer;
`;function Xt({review:e,withWrapper:t=!0,linkToDictionary:n=!0}){const{t:o}=nt(),{status:i}=tt(),r=Ke(),{query:s}=be("GET","/users/written-reviews",{enabled:i==="success"}),{requestFunction:u}=be("PATCH",`/reviews/${e.id}/liked`,{onSuccess:()=>{d(g=>g===null?!e.likedByUser:!g)}}),[c,d]=a.useState(null),f=a.useMemo(()=>s.data?s.data.reviews.map(g=>g.id):[],[s.data]);if(!e)return;const p=g=>{g.stopPropagation(),u({reviewId:e.id,action:c??e.likedByUser?"unlike":"like"})},h=I(Yt,{direction:"column",align:"stretch",gap:3,padding:"3px 4px 0px 4px",clickable:n,onClick:()=>{n&&r(`/dictionary?courseId=${e.courseId}&professorId=${e.professors[0]?.id}`)},children:[I(U,{direction:"column",gap:8,children:[I(U,{direction:"row",gap:6,children:[v(S,{type:"NormalBold",color:"Text.default",children:e.courseName}),v(S,{type:"Normal",color:"Text.lighter",children:Dt(e.professors)}),I(S,{type:"Normal",color:"Text.lighter",children:[e.year," ",Je(e.semester)]})]}),v(U,{direction:"row",gap:0,style:{overflow:"hidden"},children:v(Wt,{type:"Normal",color:"Text.default",overflow:!t,children:e.content})})]}),I(U,{direction:"row",justify:"space-between",align:"center",gap:0,children:[I(U,{direction:"row",gap:8,children:[I(S,{type:"Normal",color:"Text.lighter",children:[o("common.review.like")," ",e.like]}),I(S,{type:"Normal",color:"Text.lighter",children:[o("common.grade")," ",re[e.grade]]}),I(S,{type:"Normal",color:"Text.lighter",children:[o("common.load")," ",re[e.load]]}),I(S,{type:"Normal",color:"Text.lighter",children:[o("common.speech")," ",re[e.speech]]})]}),!f.includes(e.id)&&I(Ht,{direction:"row",gap:4,align:"center",onClick:g=>p(g),children:[v(S,{type:"Normal",color:"Highlight.default",children:o("common.review.like")}),v(Ot,{styles:{padding:3},children:v(Qe,{size:18,color:"crimson",onClick:()=>{},children:c??e.likedByUser?v(Ft,{}):v(Ut,{})})})]})]})]});return t?v(At,{clickable:n,children:h}):h}const tn=a.memo(Xt);export{Ft as F,Ot as I,tn as R,Ut as a,Dt as p};
//# sourceMappingURL=ReviewBlock-e2bUKcO9.js.map
