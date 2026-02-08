import{j as m}from"./emotion-react-jsx-runtime.browser.esm-Df0_1SPv.js";import{r as P,p as g}from"./chunk-EPOLDU6W-BN-euhK0.js";import{n as M}from"./FlexWrapper-BRlmLh17.js";import{E as T,F as I,G as j,H as v,J as L,K as n,L as N,N as w,l as S,O as D,P as _,T as F}from"./useIsDevice-DqpHcH8v.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"20476b02e250804c0ed7e78125c61ce5a11ff73a"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="61b8d0c1-daa8-4c5d-b538-ccf4581ff1e9",e._sentryDebugIdIdentifier="sentry-dbid-61b8d0c1-daa8-4c5d-b538-ccf4581ff1e9")})()}catch{}function U(e){return typeof e.main=="string"}function A(e,r=[]){if(!U(e))return!1;for(const t of r)if(!e.hasOwnProperty(t)||typeof e[t]!="string")return!1;return!0}function K(e=[]){return([,r])=>r&&A(r,e)}function O(e){return T("MuiCircularProgress",e)}I("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,y=D`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=D`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,V=typeof y!="string"?S`
        animation: ${y} 1.4s linear infinite;
      `:null,z=typeof h!="string"?S`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,G=e=>{const{classes:r,variant:t,color:a,disableShrink:c}=e,l={root:["root",t,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(t)}`,c&&"circleDisableShrink"]};return N(l,O,r)},H=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${n(t.color)}`]]}})(w(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:V||{animation:`${y} 1.4s linear infinite`}},...Object.entries(e.palette).filter(K()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),W=v("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),B=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${n(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(w(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:z||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),J=P.forwardRef(function(r,t){const a=j({props:r,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:$=!1,size:f=40,style:R,thickness:i=3.6,value:d=0,variant:b="indeterminate",...E}=a,o={...a,color:l,disableShrink:$,size:f,thickness:i,value:d,variant:b},u=G(o),p={},k={},x={};if(b==="determinate"){const C=2*Math.PI*((s-i)/2);p.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(d),p.strokeDashoffset=`${((100-d)/100*C).toFixed(3)}px`,k.transform="rotate(-90deg)"}return g.jsx(H,{className:L(u.root,c),style:{width:f,height:f,...k,...R},ownerState:o,ref:t,role:"progressbar",...x,...E,children:g.jsx(W,{className:u.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:g.jsx(B,{className:u.circle,style:p,ownerState:o,cx:s,cy:s,r:(s-i)/2,fill:"none",strokeWidth:i})})})}),Y=M.div`
    color: ${({theme:e})=>e.colors.Highlight.default};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-grow: 1;
`,ee=P.forwardRef(function(r,t){const a=_({});return m(Y,{ref:t,children:m(F,{theme:a,children:m(J,{color:"inherit"})})})});export{J as C,ee as L,K as c};
//# sourceMappingURL=LoadingCircle-DXCIYMax.js.map
