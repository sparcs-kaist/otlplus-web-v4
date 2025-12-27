import{n as j,a as d}from"./FlexWrapper-C0dsngQo.js";import{a as S}from"./chunk-UIGDSWPH-NakEPbl8.js";import{X as U,R as F,T as L,U as v,P as N,Z as n,Y as T,_ as $,F as w,V as D,a0 as V,a1 as E}from"./useIsDevice-C631H4qQ.js";import{j as h}from"./jsx-runtime-u17CrQMm.js";function I(r){return typeof r.main=="string"}function z(r,e=[]){if(!I(r))return!1;for(const t of e)if(!r.hasOwnProperty(t)||typeof r[t]!="string")return!1;return!0}function A(r=[]){return([,e])=>e&&z(e,r)}function K(r){return U("MuiCircularProgress",r)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,g=D`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,y=D`
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
`,O=typeof g!="string"?w`
        animation: ${g} 1.4s linear infinite;
      `:null,W=typeof y!="string"?w`
        animation: ${y} 1.4s ease-in-out infinite;
      `:null,Z=r=>{const{classes:e,variant:t,color:a,disableShrink:c}=r,l={root:["root",t,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(t)}`,c&&"circleDisableShrink"]};return T(l,K,e)},_=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${n(t.color)}`]]}})($(({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:O||{animation:`${g} 1.4s linear infinite`}},...Object.entries(r.palette).filter(A()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}))),B=v("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),G=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${n(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})($(({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:W||{animation:`${y} 1.4s ease-in-out infinite`}}]}))),H=S.forwardRef(function(e,t){const a=L({props:e,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:b=!1,size:f=40,style:M,thickness:i=3.6,value:p=0,variant:x="indeterminate",...R}=a,o={...a,color:l,disableShrink:b,size:f,thickness:i,value:p,variant:x},u=Z(o),m={},C={},k={};if(x==="determinate"){const P=2*Math.PI*((s-i)/2);m.strokeDasharray=P.toFixed(3),k["aria-valuenow"]=Math.round(p),m.strokeDashoffset=`${((100-p)/100*P).toFixed(3)}px`,C.transform="rotate(-90deg)"}return h.jsx(_,{className:N(u.root,c),style:{width:f,height:f,...C,...M},ownerState:o,ref:t,role:"progressbar",...k,...R,children:h.jsx(B,{className:u.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:h.jsx(G,{className:u.circle,style:m,ownerState:o,cx:s,cy:s,r:(s-i)/2,fill:"none",strokeWidth:i})})})}),X=j.div`
    color: ${({theme:r})=>r.colors.Highlight.default};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-grow: 1;
`,rr=S.forwardRef(function(e,t){const a=V({});return d(X,{ref:t,children:d(E,{theme:a,children:d(H,{color:"inherit"})})})});export{H as C,rr as L,A as c};
