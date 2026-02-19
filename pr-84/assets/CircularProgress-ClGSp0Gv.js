import{r as E,p as y}from"./chunk-EPOLDU6W-zmgMqoXq.js";import{E as M,F as R,G as I,H as h,J as N,K as n,L as T,N as C,k as P,O as S}from"./useAPI-B2f8YEht.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ada4c7999b6ed5c9c18808775724ee3dffa94ca2"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="6f6e1bf8-a5e9-41f4-89ad-5905ff955e57",e._sentryDebugIdIdentifier="sentry-dbid-6f6e1bf8-a5e9-41f4-89ad-5905ff955e57")})()}catch{}function _(e){return typeof e.main=="string"}function F(e,r=[]){if(!_(e))return!1;for(const t of r)if(!e.hasOwnProperty(t)||typeof e[t]!="string")return!1;return!0}function U(e=[]){return([,r])=>r&&F(r,e)}function j(e){return M("MuiCircularProgress",e)}R("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,m=S`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,g=S`
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
`,A=typeof m!="string"?P`
        animation: ${m} 1.4s linear infinite;
      `:null,K=typeof g!="string"?P`
        animation: ${g} 1.4s ease-in-out infinite;
      `:null,O=e=>{const{classes:r,variant:t,color:a,disableShrink:l}=e,c={root:["root",t,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(t)}`,l&&"circleDisableShrink"]};return T(c,j,r)},V=h("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${n(t.color)}`]]}})(C(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:A||{animation:`${m} 1.4s linear infinite`}},...Object.entries(e.palette).filter(U()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),z=h("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),G=h("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${n(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(C(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:K||{animation:`${g} 1.4s ease-in-out infinite`}}]}))),H=E.forwardRef(function(r,t){const a=I({props:r,name:"MuiCircularProgress"}),{className:l,color:c="primary",disableShrink:w=!1,size:f=40,style:D,thickness:i=3.6,value:d=0,variant:k="indeterminate",...$}=a,o={...a,color:c,disableShrink:w,size:f,thickness:i,value:d,variant:k},u=O(o),p={},v={},b={};if(k==="determinate"){const x=2*Math.PI*((s-i)/2);p.strokeDasharray=x.toFixed(3),b["aria-valuenow"]=Math.round(d),p.strokeDashoffset=`${((100-d)/100*x).toFixed(3)}px`,v.transform="rotate(-90deg)"}return y.jsx(V,{className:N(u.root,l),style:{width:f,height:f,...v,...D},ownerState:o,ref:t,role:"progressbar",...b,...$,children:y.jsx(z,{className:u.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:y.jsx(G,{className:u.circle,style:p,ownerState:o,cx:s,cy:s,r:(s-i)/2,fill:"none",strokeWidth:i})})})});export{H as C,U as c};
//# sourceMappingURL=CircularProgress-ClGSp0Gv.js.map
