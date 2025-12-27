import{u as C,a as R,j as n}from"./emotion-react-jsx-runtime.browser.esm-Cql-SmI8.js";import{p as M,r}from"./chunk-UIGDSWPH-ClC-Bows.js";import{n as u,F as k}from"./FlexWrapper-B3Tmr1Ow.js";import{e as X,l as T}from"./useIsDevice-BAiF1JW-.js";import g from"./index-Cq42zB_k.js";import z from"./index-BhRQMJA8.js";import v from"./index-CRXPU90D.js";import"./index-CtIsX8Fj.js";import"./env-x7j716XO.js";import"./StyledDivider-Dbgy7ftO.js";import"./ReviewBlock-4_usj_tf.js";import"./Typography-YMZw2QHy.js";import"./Widget-Crs3_Da_.js";import"./Trans-BnR27Moe.js";const E=X(M.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),F=X(M.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),$=u(k)`
    flex: 1 1 0;
    overflow: hidden;
    position: relative;
    width: 100%;
    min-height: 500px;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
`,L=u.div`
    display: flex;
    flex-direction: row;
    width: 500%;
    height: 100%;
    transition: ${({transition:o})=>o};
    transform: translateX(
        calc(${({index:o})=>`-${o*20}%`} + ${({offset:o})=>`${o}px`})
    );
`,D=u.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-shrink: 0;
    overflow-y: hidden;
`,w=u.div`
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
`;function tt(){const o=C(),[l,a]=r.useState(1),[j,i]=r.useState("transform 0.3s ease-in-out"),[s,h]=r.useState(!1),[c,f]=r.useState(null),[m,d]=r.useState(null),[y,p]=r.useState(0),I=r.useRef(null),x=()=>{s||(h(!0),i("transform 0.3s ease-in-out"),a(t=>t-1))},S=()=>{s||(h(!0),i("transform 0.3s ease-in-out"),a(t=>t+1))};return r.useEffect(()=>{if(!s)return;const e=setTimeout(()=>{l===0?(i("none"),a(3)):l===4&&(i("none"),a(1)),h(!1)},300);return()=>clearTimeout(e)},[l,s]),R($,{direction:"column",gap:0,align:"stretch",ref:I,onTouchStart:t=>{if(s)return;const e=t.touches[0];e&&(f(e.clientX),d(e.clientX),i("none"))},onTouchMove:t=>{if(c===null)return;const e=t.touches[0];if(!e)return;d(e.clientX);const b=e.clientX-c;p(b)},onTouchEnd:()=>{if(c===null||m===null)return;const t=m-c,e=50;Math.abs(t)>e?t>0?x():S():i("transform 0.3s ease-in-out"),f(null),d(null),p(0),Math.abs(t)<=e&&i("transform 0.3s ease-in-out")},children:[n(L,{index:l,transition:j,offset:y,children:[n(g,{},"clone-last"),n(v,{},"recent"),n(z,{},"liked"),n(g,{},"hall"),n(v,{},"clone-first")].map((t,e)=>n(D,{children:t},e))}),n(w,{position:"left",onClick:x,children:n(T,{size:20,color:o.colors.Text.default,children:n(E,{})})}),n(w,{position:"right",onClick:S,children:n(T,{size:20,color:o.colors.Text.default,children:n(F,{})})})]})}export{tt as default};
//# sourceMappingURL=index-Bcy22Ik8.js.map
