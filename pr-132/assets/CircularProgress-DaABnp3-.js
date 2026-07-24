(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`df9d4ac486fb82c780aa3aa6be6e1d50dd997283`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b7062f12-74e8-4b2c-bad0-2b65114acab4`,e._sentryDebugIdIdentifier=`sentry-dbid-b7062f12-74e8-4b2c-bad0-2b65114acab4`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CgyW9cbo.js";import{c as r,o as i}from"./FlexWrapper-DRjh01z3.js";import{a,d as o,f as s,i as c,m as l,o as u,p as d,u as f}from"./Icon-CaHo1Fy5.js";var p=t(e(),1);function m(e){return typeof e.main==`string`}function h(e,t=[]){if(!m(e))return!1;for(let n of t)if(!e.hasOwnProperty(n)||typeof e[n]!=`string`)return!1;return!0}function g(e=[]){return([,t])=>t&&h(t,e)}function _(e){return o(`MuiCircularProgress`,e)}f(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`]);var v=t(n(),1),y=44,b=r`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,x=r`
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
`,S=typeof b==`string`?null:i`
        animation: ${b} 1.4s linear infinite;
      `,C=typeof x==`string`?null:i`
        animation: ${x} 1.4s ease-in-out infinite;
      `,w=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return d({root:[`root`,n,`color${s(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,i&&`circleDisableShrink`]},_,t)},T=u(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${s(n.color)}`]]}})(a(({theme:e})=>({display:`inline-block`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`transform`)}},{props:{variant:`indeterminate`},style:S||{animation:`${b} 1.4s linear infinite`}},...Object.entries(e.palette).filter(g()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),E=u(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),D=u(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(a(({theme:e})=>({stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{transition:e.transitions.create(`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:C||{animation:`${x} 1.4s ease-in-out infinite`}}]}))),O=u(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(a(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),k=p.forwardRef(function(e,t){let n=c({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,enableTrackSlot:o=!1,size:s=40,style:u,thickness:d=3.6,value:f=0,variant:p=`indeterminate`,...m}=n,h={...n,color:i,disableShrink:a,size:s,thickness:d,value:f,variant:p,enableTrackSlot:o},g=w(h),_={},b={},x={};if(p===`determinate`){let e=2*Math.PI*((y-d)/2);_.strokeDasharray=e.toFixed(3),x[`aria-valuenow`]=Math.round(f),_.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,b.transform=`rotate(-90deg)`}return(0,v.jsx)(T,{className:l(g.root,r),style:{width:s,height:s,...b,...u},ownerState:h,ref:t,role:`progressbar`,...x,...m,children:(0,v.jsxs)(E,{className:g.svg,ownerState:h,viewBox:`${y/2} ${y/2} ${y} ${y}`,children:[o?(0,v.jsx)(O,{className:g.track,ownerState:h,cx:y,cy:y,r:(y-d)/2,fill:`none`,strokeWidth:d,"aria-hidden":`true`}):null,(0,v.jsx)(D,{className:g.circle,style:_,ownerState:h,cx:y,cy:y,r:(y-d)/2,fill:`none`,strokeWidth:d})]})})});export{g as n,k as t};
//# sourceMappingURL=CircularProgress-DaABnp3-.js.map