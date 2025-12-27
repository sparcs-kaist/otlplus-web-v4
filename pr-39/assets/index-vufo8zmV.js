import{j as b,a as n,n as c,F as C}from"./FlexWrapper-C0dsngQo.js";import{a as i}from"./chunk-UIGDSWPH-NakEPbl8.js";import{j as w}from"./jsx-runtime-u17CrQMm.js";import{e as M,I as S}from"./useIsDevice--kk7j9LI.js";import T from"./index-DDE-pH94.js";import R from"./index-CkCOrboe.js";import g from"./index-Bfk0musQ.js";import"./weekdayEnum-SNVXd-6_.js";import"./ReviewBlock-BXTgSwlx.js";import"./Typography-DTsae4U-.js";import"./Widget-D7VP5HFl.js";import"./Trans-BWb067g3.js";const k=M(w.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),z=M(w.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),E=c(C)`
    flex: 1 1 0;
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 500px;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
`,F=c.div`
    display: flex;
    flex-direction: row;
    width: 500%;
    height: 100%;
    transition: ${({transition:o})=>o};
    transform: translateX(
        calc(${({index:o})=>`-${o*20}%`} + ${({offset:o})=>`${o}px`})
    );
`,$=c.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-shrink: 0;
    overflow-y: hidden;
`,v=c.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({position:o})=>o==="left"?"left: 8px;":"right: 8px;"}
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
`;function U(){const[o,a]=i.useState(1),[j,r]=i.useState("transform 0.3s ease-in-out"),[s,u]=i.useState(!1),[l,d]=i.useState(null),[f,h]=i.useState(null),[I,p]=i.useState(0),X=i.useRef(null),m=()=>{s||(u(!0),r("transform 0.3s ease-in-out"),a(t=>t-1))},x=()=>{s||(u(!0),r("transform 0.3s ease-in-out"),a(t=>t+1))};return i.useEffect(()=>{if(!s)return;const e=setTimeout(()=>{o===0?(r("none"),a(3)):o===4&&(r("none"),a(1)),u(!1)},300);return()=>clearTimeout(e)},[o,s]),b(E,{direction:"column",gap:0,align:"stretch",ref:X,onTouchStart:t=>{if(s)return;const e=t.touches[0];e&&(d(e.clientX),h(e.clientX),r("none"))},onTouchMove:t=>{if(l===null)return;const e=t.touches[0];if(!e)return;h(e.clientX);const y=e.clientX-l;p(y)},onTouchEnd:()=>{if(l===null||f===null)return;const t=f-l,e=50;Math.abs(t)>e?t>0?m():x():r("transform 0.3s ease-in-out"),d(null),h(null),p(0),Math.abs(t)<=e&&r("transform 0.3s ease-in-out")},children:[n(F,{index:o,transition:j,offset:I,children:[n(T,{},"clone-last"),n(g,{},"recent"),n(R,{},"liked"),n(T,{},"hall"),n(g,{},"clone-first")].map((t,e)=>n($,{children:t},e))}),n(v,{position:"left",onClick:m,children:n(S,{size:20,children:n(k,{})})}),n(v,{position:"right",onClick:x,children:n(S,{size:20,children:n(z,{})})})]})}export{U as default};
