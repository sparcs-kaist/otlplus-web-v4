import{j as y}from"./emotion-react-jsx-runtime.browser.esm-Gv8z9s2b.js";import{r as w,p as c}from"./chunk-JZWAC4HX-BOYoEWh9.js";import{s as E}from"./FlexWrapper-w-T7fw4q.js";import{G as I,H as j,J as N,K as f,L,N as l,O as _,P as v,l as $,R as D,T as U,U as O}from"./useIsDevice-DKRrhDpA.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};r.SENTRY_RELEASE={id:"48897a91d083bd08198356ff94a1dc08a606de9b"};var e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="fc7d9a52-967f-44a7-9375-f35a13f4c162",r._sentryDebugIdIdentifier="sentry-dbid-fc7d9a52-967f-44a7-9375-f35a13f4c162")}catch{}})();function A(r){return typeof r.main=="string"}function F(r,e=[]){if(!A(r))return!1;for(const t of e)if(!r.hasOwnProperty(t)||typeof r[t]!="string")return!1;return!0}function K(r=[]){return([,e])=>e&&F(e,r)}function V(r){return I("MuiCircularProgress",r)}j("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","track","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,h=D`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,k=D`
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
`,W=typeof h!="string"?$`
        animation: ${h} 1.4s linear infinite;
      `:null,z=typeof k!="string"?$`
        animation: ${k} 1.4s ease-in-out infinite;
      `:null,G=r=>{const{classes:e,variant:t,color:a,disableShrink:d}=r,u={root:["root",t,`color${l(a)}`],svg:["svg"],track:["track"],circle:["circle",`circle${l(t)}`,d&&"circleDisableShrink"]};return _(u,V,e)},H=f("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${l(t.color)}`]]}})(v(({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:W||{animation:`${h} 1.4s linear infinite`}},...Object.entries(r.palette).filter(K()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}))),B=f("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),J=f("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${l(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})(v(({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:z||{animation:`${k} 1.4s ease-in-out infinite`}}]}))),Y=f("circle",{name:"MuiCircularProgress",slot:"Track"})(v(({theme:r})=>({stroke:"currentColor",opacity:(r.vars||r).palette.action.activatedOpacity}))),Z=w.forwardRef(function(e,t){const a=N({props:e,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:R=!1,enableTrackSlot:C=!1,size:p=40,style:M,thickness:i=3.6,value:m=0,variant:x="indeterminate",...T}=a,o={...a,color:u,disableShrink:R,size:p,thickness:i,value:m,variant:x,enableTrackSlot:C},n=G(o),g={},P={},b={};if(x==="determinate"){const S=2*Math.PI*((s-i)/2);g.strokeDasharray=S.toFixed(3),b["aria-valuenow"]=Math.round(m),g.strokeDashoffset=`${((100-m)/100*S).toFixed(3)}px`,P.transform="rotate(-90deg)"}return c.jsx(H,{className:L(n.root,d),style:{width:p,height:p,...P,...M},ownerState:o,ref:t,role:"progressbar",...b,...T,children:c.jsxs(B,{className:n.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:[C?c.jsx(Y,{className:n.track,ownerState:o,cx:s,cy:s,r:(s-i)/2,fill:"none",strokeWidth:i,"aria-hidden":"true"}):null,c.jsx(J,{className:n.circle,style:g,ownerState:o,cx:s,cy:s,r:(s-i)/2,fill:"none",strokeWidth:i})]})})}),q=E.div`
    color: ${({theme:r})=>r.colors.Highlight.default};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-grow: 1;
`,tr=w.forwardRef(function(e,t){const a=U({});return y(q,{ref:t,children:y(O,{theme:a,children:y(Z,{color:"inherit"})})})});export{Z as C,tr as L,K as c};
//# sourceMappingURL=LoadingCircle-nx2H29sb.js.map
