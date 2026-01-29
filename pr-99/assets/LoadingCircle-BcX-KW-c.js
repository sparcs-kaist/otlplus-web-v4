import{j as m}from"./emotion-react-jsx-runtime.browser.esm-wf5N78og.js";import{r as P,p as g}from"./chunk-EPOLDU6W-C3OYm0FV.js";import{n as M}from"./FlexWrapper-DWNZuMzU.js";import{E as T,F as I,G as j,H as b,J as L,K as n,L as N,N as w,l as S,O as D,P as _,T as F}from"./useIsDevice-Z2DhLG1x.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"7a9abfb142d7578558a63df4d5d220134341f673"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="6cab6759-1d3c-4234-abcb-1f115de9bac3",e._sentryDebugIdIdentifier="sentry-dbid-6cab6759-1d3c-4234-abcb-1f115de9bac3")})()}catch{}function U(e){return typeof e.main=="string"}function A(e,r=[]){if(!U(e))return!1;for(const t of r)if(!e.hasOwnProperty(t)||typeof e[t]!="string")return!1;return!0}function K(e=[]){return([,r])=>r&&A(r,e)}function O(e){return T("MuiCircularProgress",e)}I("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,y=D`
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
      `:null,G=e=>{const{classes:r,variant:t,color:a,disableShrink:l}=e,c={root:["root",t,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(t)}`,l&&"circleDisableShrink"]};return N(c,O,r)},H=b("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${n(t.color)}`]]}})(w(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:V||{animation:`${y} 1.4s linear infinite`}},...Object.entries(e.palette).filter(K()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),W=b("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),B=b("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${n(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(w(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:z||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),J=P.forwardRef(function(r,t){const a=j({props:r,name:"MuiCircularProgress"}),{className:l,color:c="primary",disableShrink:$=!1,size:d=40,style:R,thickness:i=3.6,value:f=0,variant:v="indeterminate",...E}=a,o={...a,color:c,disableShrink:$,size:d,thickness:i,value:f,variant:v},u=G(o),p={},k={},x={};if(v==="determinate"){const C=2*Math.PI*((s-i)/2);p.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(f),p.strokeDashoffset=`${((100-f)/100*C).toFixed(3)}px`,k.transform="rotate(-90deg)"}return g.jsx(H,{className:L(u.root,l),style:{width:d,height:d,...k,...R},ownerState:o,ref:t,role:"progressbar",...x,...E,children:g.jsx(W,{className:u.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:g.jsx(B,{className:u.circle,style:p,ownerState:o,cx:s,cy:s,r:(s-i)/2,fill:"none",strokeWidth:i})})})}),Y=M.div`
    color: ${({theme:e})=>e.colors.Highlight.default};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-grow: 1;
`,ee=P.forwardRef(function(r,t){const a=_({});return m(Y,{ref:t,children:m(F,{theme:a,children:m(J,{color:"inherit"})})})});export{J as C,ee as L,K as c};
//# sourceMappingURL=LoadingCircle-BcX-KW-c.js.map
