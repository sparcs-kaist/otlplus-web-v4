import{u as z,a as E,j as t}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{p as b,r}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{n as u,F as f}from"./FlexWrapper-B6Hxm4Zw.js";import{e as j,i as F,I as g}from"./useIsDevice-CTOCZjqh.js";import{I as v}from"./ReviewBlock-DGlKwGqS.js";import w from"./index-BuVIZiKn.js";import $ from"./index-CU95c-4D.js";import I from"./index-CYO1fZbe.js";import"./index-CHd--ufo.js";import"./env-D8UghyM0.js";import"./LoadingCircle-Ducy9jPw.js";import"./Typography-DeI78L6T.js";import"./useUserStore-CMO0pyiB.js";import"./StyledDivider-Bnwy1K8M.js";import"./Widget-e9ONaX_D.js";import"./Trans-BBmTiY-I.js";const D=j(b.jsx("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),L=j(b.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),O=u(f)`
    position: relative;
    overflow: hidden;
    width: 100%;
    touch-action: pan-y; /* Allow vertical scrolling, but handle horizontal swipes manually */
    border-radius: 16px;
`,B=u(f)`
    width: 500%;
    height: 100%;
    transition: ${({transition:o})=>o};
    transform: translateX(
        calc(${({index:o})=>`-${o*20}%`} + ${({offset:o})=>`${o}px`})
    );
`,N=u(f)`
    width: 20%;
`,M=u.div`
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
`;function it(){const o=z(),C=F("mobile"),[c,a]=r.useState(1),[X,i]=r.useState("transform 0.3s ease-in-out"),[s,h]=r.useState(!1),[l,m]=r.useState(null),[p,d]=r.useState(null),[k,x]=r.useState(0),y=r.useRef(null),S=()=>{s||(h(!0),i("transform 0.3s ease-in-out"),a(e=>e-1))},T=()=>{s||(h(!0),i("transform 0.3s ease-in-out"),a(e=>e+1))};return r.useEffect(()=>{if(!s)return;const n=setTimeout(()=>{c===0?(i("none"),a(3)):c===4&&(i("none"),a(1)),h(!1)},300);return()=>clearTimeout(n)},[c,s]),E(O,{direction:"column",gap:0,align:"stretch",justify:"stretch",ref:y,onTouchStart:e=>{if(s)return;const n=e.touches[0];n&&(m(n.clientX),d(n.clientX),i("none"))},onTouchMove:e=>{if(l===null)return;const n=e.touches[0];if(!n)return;d(n.clientX);const R=n.clientX-l;x(R)},onTouchEnd:()=>{if(l===null||p===null)return;const e=p-l,n=50;Math.abs(e)>n?e>0?S():T():i("transform 0.3s ease-in-out"),m(null),d(null),x(0),Math.abs(e)<=n&&i("transform 0.3s ease-in-out")},flex:C?"1 1 auto":"1 1 0",children:[t(B,{direction:"row",gap:0,align:"stretch",justify:"stretch",index:c,transition:X,offset:k,children:[t(w,{},"clone-last"),t(I,{},"recent"),t($,{},"liked"),t(w,{},"hall"),t(I,{},"clone-first")].map((e,n)=>t(N,{direction:"row",align:"stretch",gap:0,children:e},n))}),t(M,{position:"left",children:t(v,{onClick:S,children:t(g,{size:20,color:o.colors.Text.default,onClick:()=>{},children:t(D,{})})})}),t(M,{position:"right",children:t(v,{onClick:T,children:t(g,{size:20,color:o.colors.Text.default,onClick:()=>{},children:t(L,{})})})})]})}export{it as default};
//# sourceMappingURL=index-BynWCvRR.js.map
