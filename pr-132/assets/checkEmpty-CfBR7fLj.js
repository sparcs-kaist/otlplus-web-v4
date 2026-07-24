(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`df9d4ac486fb82c780aa3aa6be6e1d50dd997283`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`b5ead468-0ca0-4940-8f41-7c80d426d2c9`,e._sentryDebugIdIdentifier=`sentry-dbid-b5ead468-0ca0-4940-8f41-7c80d426d2c9`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CgyW9cbo.js";import{h as r,l as i,m as a,n as o,p as s,r as c,v as l}from"./emotion-react-jsx-runtime.browser.esm-CHJGKS0h.js";import{n as u,t as d}from"./FlexWrapper-DRjh01z3.js";import{a as f,t as p,u as m}from"./useAPI-DQyyHXxF.js";import{r as h,t as g}from"./Icon-CaHo1Fy5.js";import{t as _}from"./useTranslation-B7ybhlDZ.js";import{t as v}from"./Close-CqsuNMUJ.js";import{t as y}from"./Typography-DvX8rZqB.js";import{t as b}from"./Button-DSfWvsc3.js";import{n as x,r as S,t as C}from"./proxy-BXtQhOT0.js";var w=t(e()),T=t(n(),1),E=h((0,T.jsx)(`path`,{d:`M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z`}),`Add`),D=h((0,T.jsx)(`path`,{d:`M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z`}),`Check`),O=u.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,k=u(O)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,A=u(O)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,j=u.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,M=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>c(j,{children:[t,e?o(g,{size:13,onClick:()=>{},children:o(D,{})}):o(g,{size:13,onClick:()=>{},children:o(E,{})})]});return o(e?A:k,{...n,children:o(r,{})})},N=u.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,P=({nameList:e,chosenList:t,handleOptionClick:n=()=>{},handleSelectAllClick:r=()=>{},selectedAll:i,isSingleSelect:a})=>{let{t:s}=_();return(0,w.useEffect)(()=>{!a&&!t.includes(!1)&&r()},[t]),c(N,{children:[o(M,{selected:i,chipText:s(`common.search.all`),onClick:r}),e.map((e,r)=>o(M,{selected:a?t==r:t[r],chipText:`${s(e)}`,onClick:()=>{n(r)}},r))]})},F=()=>[[`BR`,`common.type.basicRequiredShort`],[`BE`,`common.type.basicElectiveShort`],[`MR`,`common.type.majorRequiredShort`],[`ME`,`common.type.majorElectiveShort`],[`MGC`,`common.type.mandatoryGeneralCourseShort`],[`HSE`,`common.type.humanitiesSocialElectiveShort`],[`GR`,`common.type.generalRequiredShort`],[`EG`,`common.type.electiveGraduateShort`],[`OE`,`common.type.otherElectiveShort`],[`ETC`,`common.type.etcShort`]],ee=()=>([...[...[[`HSS`,`common.department.hssShort`,200],[`CE`,`common.department.ceShort`,500],[`BTM`,`common.department.btmShort`,500],[`ME`,`common.department.meShort`,500],[`PH`,`common.department.phShort`,500],[`BiS`,`common.department.bisShort`,500],[`IE`,`common.department.ieShort`,500],[`ID`,`common.department.idShort`,500],[`BS`,`common.department.bsShort`,500],[`MAS`,`common.department.masShort`,500],[`NQE`,`common.department.nqeShort`,500],[`EE`,`common.department.eeShort`,500],[`CS`,`common.department.csShort`,500],[`AE`,`common.department.aeShort`,500],[`CH`,`common.department.chShort`,500],[`CBE`,`common.department.cbeShort`,500],[`MS`,`common.department.msShort`,500],[`TS`,`common.department.tsShort`,500],[`SS`,`common.department.ssShort`,500],[`BCS`,`common.department.bcsShort`,500],[`ETC`,`common.department.etcShort`,900]]].sort((e,t)=>e[2]-t[2]||e[1].localeCompare(t[1])).map(([e,t])=>[e,t])],[[`HSS`,`common.department.hssShort`],[`CE`,`common.department.ceShort`],[`BTM`,`common.department.btmShort`],[`ME`,`common.department.meShort`],[`PH`,`common.department.phShort`],[`BiS`,`common.department.bisShort`],[`IE`,`common.department.ieShort`],[`ID`,`common.department.idShort`],[`BS`,`common.department.bsShort`],[`MAS`,`common.department.masShort`],[`NQE`,`common.department.nqeShort`],[`EE`,`common.department.eeShort`],[`CS`,`common.department.csShort`],[`AE`,`common.department.aeShort`],[`CH`,`common.department.chShort`],[`CBE`,`common.department.cbeShort`],[`MS`,`common.department.msShort`],[`TS`,`common.department.tsShort`],[`SS`,`common.department.ssShort`],[`BCS`,`common.department.bcsShort`],[`ETC`,`common.department.etcShort`]]),I=()=>[[100,`common.level.100sShort`],[200,`common.level.200sShort`],[300,`common.level.300sShort`],[400,`common.level.400sShort`],[500,`common.level.500sShort`],[600,`common.level.600sShort`],[700,`common.level.700sShort`],[800,`common.level.800sShort`],[900,`common.level.900sShort`]],te=()=>[[3,`common.term.3yearsShort`],[1,`common.term.1yearShort`],[0,`common.term.thisSemesterShort`]];function L(e,t=!1){let n=Math.floor(e/60),r=(e%60).toString().padStart(2,`0`);return t?`${n<12?m.t(`common.am`):m.t(`common.pm`)} ${(n%12==0?12:n%12).toString().padStart(2,`0`)}:${r}`:n.toString().padStart(2,`0`)+`:`+r}function R(e){return`${f(e.day)} ${L(e.begin,!0)} - ${L(e.end,!0)}`}var z=u(d)`
    width: 100%;
`,B=u(y)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`;function V({timeFilters:e,setTimeFilters:t}){let{t:n}=_(),r=i();return o(d,{direction:`column`,gap:0,style:{width:`100%`},children:o(z,{direction:`column`,gap:0,children:e?e.map((e,n)=>c(d,{direction:`row`,justify:`space-between`,gap:10,align:`center`,children:[o(y,{color:`Text.default`,type:`Normal`,children:`${R(e)}`}),o(g,{size:15,onClick:()=>{t&&t(null)},color:r.colors.Text.default,children:o(v,{})})]})):o(B,{color:`Text.light`,type:`Normal`,children:n(`common.search.timeFilterPlaceholder`)})})})}function H(e,t){return t in e}var U=Object.fromEntries(Object.entries({type:F,department:ee,level:I,term:te}).map(([e,t])=>[e,t()])),ne=new Set([`term`]);function W(e){return ne.has(e)}var G=U,K=u(d)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function q({options:e,onChange:t,timeFilters:n,setTimeFilters:r,resetTrigger:i,onResetTriggerComplete:a}){let{t:s}=_(),l=new Set(e);function u(e){return l.has(e)}let[f,p]=(0,w.useState)(g),[m,h]=(0,w.useState)({});function g(){let t={};return e.filter(e=>e in G).forEach(e=>{let n=G[e].length;W(e)?t[e]=null:t[e]=Array(n).fill(!1)}),t}function v(e){let t={};return Object.keys(e).forEach(n=>{let r=U[n];W(n)?e[n]==null?t[n]=null:t[n]=r[e[n]]:t[n]=e[n].map((e,t)=>e?r[t]:null).filter(e=>e!=null)}),t}function b(e){let t={};for(let n in e){let r=e[n];r!=null&&(H(f,n)?W(n)?f[n]==null?delete t[n]:t[n]=r:f[n].includes(!0)?t[n]=r:delete t[n]:n==`time`&&(t[n]=r))}return t}function x(e,t){p(n=>{if(W(t))return{...n,[t]:e};{let r=n[t].map((t,n)=>n===e?!t:t);return{...n,[t]:r}}})}function S(e){W(e)?p(t=>({...t,[e]:null})):p(t=>({...t,[e]:t[e].map(()=>!1)}))}function C(e,t){return W(t)?e[t]==null:!e[t].includes(!0)}return(0,w.useEffect)(()=>{let e=v(f),t={time:n};h(u(`time`)?{...e,...t}:e)},[f,n]),(0,w.useEffect)(()=>{t(b(m))},[m]),(0,w.useEffect)(()=>{i&&(p(g()),u(`time`)&&r&&r(null),a())},[i]),o(K,{direction:`column`,align:`stretch`,gap:12,children:e.map(e=>c(d,{direction:`column`,gap:6,flex:`1 1 auto`,children:[o(y,{type:`NormalBold`,color:`Text.default`,children:s(`common.search.${e}`)}),o(d,{direction:`column`,gap:0,style:{width:`100%`},children:(()=>{if(H(f,e)&&e in f)return o(P,{nameList:G[e].map(e=>e[1]),chosenList:f[e],handleOptionClick:t=>{x(t,e)},handleSelectAllClick:()=>{S(e)},isSingleSelect:W(e),selectedAll:C(f,e)});if(e==`time`)return o(V,{timeFilters:n,setTimeFilters:r})})()})]},e))})}function J(e,t){if(e.inserted[t.name]===void 0)return e.insert(``,t,e.sheet,!0)}function Y(e,t,n){var r=[],i=a(e,r,n);return r.length<2?n:i+t(r)}var X=function(e){var t=l(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){var e=s([...arguments],t.registered,void 0);return r(t,e,!1),t.key+`-`+e.name};return{css:n,cx:function(){var e=[...arguments];return Y(t.registered,n,re(e))},injectGlobal:function(){J(t,s([...arguments],t.registered))},keyframes:function(){var e=s([...arguments],t.registered),n=`animation-`+e.name;return J(t,{name:e.name,styles:`@keyframes `+n+`{`+e.styles+`}`}),n},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:a.bind(null,t.registered),merge:Y.bind(null,t.registered,n)}},re=function e(t){for(var n=``,r=0;r<t.length;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case`boolean`:break;case`object`:if(Array.isArray(i))a=e(i);else for(var o in a=``,i)i[o]&&o&&(a&&(a+=` `),a+=o);break;default:a=i}a&&(n&&(n+=` `),n+=a)}}return n},Z=X({key:`css`});Z.flush,Z.hydrate,Z.cx,Z.merge,Z.getRegisteredStyles,Z.injectGlobal,Z.keyframes;var Q=Z.css;Z.sheet,Z.cache;var ie=Q`
    border-color: red;
`,ae=Q`
    background-color: rgba(245, 245, 245, 1);
`,oe=u.input`
    display: block;
    width: 100%;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
    color: ${({theme:e})=>e.colors.Text.default};
    border: 0;
    padding: 8px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};

    &::placeholder {
        color: ${({$placeholderColor:e,theme:t})=>e||t.colors.Text.placeholder};
    }

    ${({disabled:e})=>e&&ae};
    ${({$hasError:e})=>e&&ie};
`,se=u.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,ce=u.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,$=(0,w.forwardRef)(({placeholder:e,errorMessage:t=``,disabled:n=!1,value:r=``,handleChange:i,setErrorStatus:a,$placeholderColor:s,...c},l)=>((0,w.useEffect)(()=>{a?.(!!t)},[t,a]),o(se,{children:o(ce,{children:o(oe,{ref:l,placeholder:e,$hasError:!!t,disabled:n,value:r,onChange:e=>{i?.(e.target.value)},$placeholderColor:s,...c})})})));$.displayName=`TextInput`;var le={hidden:{opacity:0,height:0},visible:{opacity:1,height:`auto`},exit:{opacity:0,height:0}};function ue({options:e,onSearch:t,SearchIcon:n,timeFilters:r,setTimeFilters:a}){let{t:s}=_(),l=i(),{query:u}=p(`GET`,`/department-options`),[f,m]=(0,w.useState)(!1),[h,v]=(0,w.useState)(``),[T,E]=(0,w.useState)({}),[D,O]=(0,w.useState)(!1);(0,w.useEffect)(()=>{r&&m(!0)},[r]);let k=(e,t,n)=>{e.nativeEvent.isComposing||e.key===`Enter`&&M(t,n)};function A(){E({}),v(``),O(!0)}function j(){m(!1)}function M(e,n){m(!1),t(N(e,n))}function N(e,t){let n={};return Object.keys(e).forEach(t=>{let r=e[t];r!=null&&(t==`time`?n[t]=r:(W(t)?n[t]=r[0]:n[t]=r.map(e=>e[0]),t==`department`&&(n[t]=n[t]?.map(e=>u.data?.departments.find(t=>t.code===e.toString())?.id))))}),n.keyword=t,n}function P(e){E(e)}function F(e,t){return e.includes(`time`)&&t!=null?{timeFilters:t,setTimeFilters:a}:{}}return c(d,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,style:{maxHeight:`100%`,width:`100%`},children:[c(d,{direction:`row`,justify:`stretch`,align:`center`,onClick:()=>{f||m(!0)},gap:0,padding:`4px 16px`,children:[n??o(g,{size:17.5,color:l.colors.Highlight.default,onClick:()=>{},children:o(S,{})}),o($,{value:h,handleChange:e=>{v(e)},placeholder:s(`common.search.placeholder`),onKeyDown:e=>{k(e,T,h)}})]}),o(x,{children:o(C.div,{initial:`hidden`,animate:f?`visible`:`hidden`,exit:`exit`,variants:le,transition:{duration:.3,ease:`easeInOut`},style:{display:`flex`,flexShrink:1,width:`100%`,minHeight:0},children:c(d,{direction:`column`,align:`stretch`,gap:16,padding:`16px`,flex:`1 0 0`,style:{overflowY:`auto`,minHeight:0},children:[o(q,{options:e,onChange:P,...F(e,r),resetTrigger:D,onResetTriggerComplete:()=>{O(!1)}}),c(d,{direction:`row`,justify:`flex-end`,gap:8,children:[o(b,{$paddingLeft:24,$paddingTop:9,onClick:j,children:o(y,{children:s(`common.search.close`)})}),o(b,{$paddingLeft:24,$paddingTop:9,onClick:A,type:`state5`,children:o(y,{children:s(`common.search.reset`)})}),o(b,{$paddingLeft:24,$paddingTop:9,type:`selected`,onClick:()=>{M(T,h)},children:o(y,{children:s(`common.search.submit`)})})]})]})})})]})}var de=(0,w.memo)(ue,(e,t)=>e.options===t.options&&e.onSearch===t.onSearch&&e.SearchIcon===t.SearchIcon&&e.timeFilters===t.timeFilters&&e.setTimeFilters===t.setTimeFilters);function fe(e){return!(e.keyword&&e.keyword.trim()!==``||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{D as a,V as i,de as n,E as o,$ as r,fe as t};
//# sourceMappingURL=checkEmpty-CfBR7fLj.js.map