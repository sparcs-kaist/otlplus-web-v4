import{n as j,a as d}from"./FlexWrapper-C0dsngQo.js";import{a as S}from"./chunk-UIGDSWPH-NakEPbl8.js";import{L,G as N,H as U,J as v,F,O as n,N as T,P as $,x as w,K as D,T as E,U as I}from"./useIsDevice--kk7j9LI.js";import{j as h}from"./jsx-runtime-u17CrQMm.js";function K(r){return typeof r.main=="string"}function O(r,e=[]){if(!K(r))return!1;for(const t of e)if(!r.hasOwnProperty(t)||typeof r[t]!="string")return!1;return!0}function V(r=[]){return([,e])=>e&&O(e,r)}function z(r){return L("MuiCircularProgress",r)}N("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const s=44,g=D`
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
`,A=typeof g!="string"?w`
        animation: ${g} 1.4s linear infinite;
      `:null,G=typeof y!="string"?w`
        animation: ${y} 1.4s ease-in-out infinite;
      `:null,H=r=>{const{classes:e,variant:t,color:a,disableShrink:c}=r,l={root:["root",t,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(t)}`,c&&"circleDisableShrink"]};return T(l,z,e)},W=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${n(t.color)}`]]}})($(({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:A||{animation:`${g} 1.4s linear infinite`}},...Object.entries(r.palette).filter(V()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}))),B=v("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),J=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${n(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})($(({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:G||{animation:`${y} 1.4s ease-in-out infinite`}}]}))),Z=S.forwardRef(function(e,t){const a=U({props:e,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:b=!1,size:f=40,style:M,thickness:i=3.6,value:p=0,variant:x="indeterminate",...R}=a,o={...a,color:l,disableShrink:b,size:f,thickness:i,value:p,variant:x},u=H(o),m={},C={},k={};if(x==="determinate"){const P=2*Math.PI*((s-i)/2);m.strokeDasharray=P.toFixed(3),k["aria-valuenow"]=Math.round(p),m.strokeDashoffset=`${((100-p)/100*P).toFixed(3)}px`,C.transform="rotate(-90deg)"}return h.jsx(W,{className:F(u.root,c),style:{width:f,height:f,...C,...M},ownerState:o,ref:t,role:"progressbar",...k,...R,children:h.jsx(B,{className:u.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:h.jsx(J,{className:u.circle,style:m,ownerState:o,cx:s,cy:s,r:(s-i)/2,fill:"none",strokeWidth:i})})})}),_=j.div`
    color: ${({theme:r})=>r.colors.Highlight.default};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-grow: 1;
`,rr=S.forwardRef(function(e,t){const a=E({});return d(_,{ref:t,children:d(I,{theme:a,children:d(Z,{color:"inherit"})})})});export{Z as C,rr as L,V as c};
