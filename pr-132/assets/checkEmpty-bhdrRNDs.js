(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`75bb3b9480ceb7562c2b564b2fba4f80dcc30e8a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`2c307834-5a3a-4ef2-9940-4c805fa7a358`,e._sentryDebugIdIdentifier=`sentry-dbid-2c307834-5a3a-4ef2-9940-4c805fa7a358`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CxrAfrrE.js";import{h as r,l as i,m as a,n as o,p as s,r as c,v as l}from"./emotion-react-jsx-runtime.browser.esm-Ca1gJfhf.js";import{n as u,t as d}from"./FlexWrapper-1igZMPnI.js";import{E as f}from"./axios-CW-b1rpO.js";import{f as p,t as m}from"./useAPI-BO_elG8f.js";import{r as h,t as g}from"./Icon-DZEIHPW-.js";import{t as _}from"./useTranslation-wt_w4v0Q.js";import{t as v}from"./Close-BABk0GsY.js";import{t as y}from"./Typography-BR02ryHI.js";import{t as b}from"./Button-DgTSTMRP.js";import{n as x,r as S,t as C}from"./proxy-CNQSkOLq.js";import{t as w}from"./Add-C0EdEnIH.js";var T=t(e()),E=t(n(),1),D=h((0,E.jsx)(`path`,{d:`M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z`}),`Check`),O=u.div`
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
`,M=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>c(j,{children:[t,e?o(g,{size:13,onClick:()=>{},children:o(D,{})}):o(g,{size:13,onClick:()=>{},children:o(w,{})})]});return o(e?A:k,{...n,children:o(r,{})})},N=u.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,P=({nameList:e,chosenList:t,handleOptionClick:n=()=>{},handleSelectAllClick:r=()=>{},selectedAll:i,isSingleSelect:a})=>{let{t:s}=_();return(0,T.useEffect)(()=>{!a&&!t.includes(!1)&&r()},[t]),c(N,{children:[o(M,{selected:i,chipText:s(`common.search.all`),onClick:r}),e.map((e,r)=>o(M,{selected:a?t==r:t[r],chipText:`${s(e)}`,onClick:()=>{n(r)}},r))]})},F=()=>[[`BR`,`common.type.basicRequiredShort`],[`BE`,`common.type.basicElectiveShort`],[`MR`,`common.type.majorRequiredShort`],[`ME`,`common.type.majorElectiveShort`],[`MGC`,`common.type.mandatoryGeneralCourseShort`],[`HSE`,`common.type.humanitiesSocialElectiveShort`],[`GR`,`common.type.generalRequiredShort`],[`EG`,`common.type.electiveGraduateShort`],[`OE`,`common.type.otherElectiveShort`],[`ETC`,`common.type.etcShort`]],ee=()=>([...[[`HSS`,`common.department.hssShort`,200],[`CE`,`common.department.ceShort`,500],[`BTM`,`common.department.btmShort`,500],[`ME`,`common.department.meShort`,500],[`PH`,`common.department.phShort`,500],[`BiS`,`common.department.bisShort`,500],[`IE`,`common.department.ieShort`,500],[`ID`,`common.department.idShort`,500],[`BS`,`common.department.bsShort`,500],[`MAS`,`common.department.masShort`,500],[`NQE`,`common.department.nqeShort`,500],[`EE`,`common.department.eeShort`,500],[`CS`,`common.department.csShort`,500],[`AE`,`common.department.aeShort`,500],[`CH`,`common.department.chShort`,500],[`CBE`,`common.department.cbeShort`,500],[`MS`,`common.department.msShort`,500],[`TS`,`common.department.tsShort`,500],[`SS`,`common.department.ssShort`,500],[`BCS`,`common.department.bcsShort`,500],[`AIC`,`common.department.aicShort`,500],[`ETC`,`common.department.etcShort`,900]].sort((e,t)=>e[2]-t[2]||e[1].localeCompare(t[1])).map(([e,t])=>[e,t])],[[`HSS`,`common.department.hssShort`],[`CE`,`common.department.ceShort`],[`BTM`,`common.department.btmShort`],[`ME`,`common.department.meShort`],[`PH`,`common.department.phShort`],[`BiS`,`common.department.bisShort`],[`IE`,`common.department.ieShort`],[`ID`,`common.department.idShort`],[`BS`,`common.department.bsShort`],[`MAS`,`common.department.masShort`],[`NQE`,`common.department.nqeShort`],[`EE`,`common.department.eeShort`],[`CS`,`common.department.csShort`],[`AE`,`common.department.aeShort`],[`CH`,`common.department.chShort`],[`CBE`,`common.department.cbeShort`],[`MS`,`common.department.msShort`],[`TS`,`common.department.tsShort`],[`SS`,`common.department.ssShort`],[`BCS`,`common.department.bcsShort`],[`AIC`,`common.department.aicShort`],[`ETC`,`common.department.etcShort`]]),I=()=>[[100,`common.level.100sShort`],[200,`common.level.200sShort`],[300,`common.level.300sShort`],[400,`common.level.400sShort`],[500,`common.level.500sShort`],[600,`common.level.600sShort`],[700,`common.level.700sShort`],[800,`common.level.800sShort`],[900,`common.level.900sShort`]],te=()=>[[3,`common.term.3yearsShort`],[1,`common.term.1yearShort`],[0,`common.term.thisSemesterShort`]];function L(e,t=!1){let n=Math.floor(e/60),r=(e%60).toString().padStart(2,`0`);return t?`${n<12?f.t(`common.am`):f.t(`common.pm`)} ${(n%12==0?12:n%12).toString().padStart(2,`0`)}:${r}`:n.toString().padStart(2,`0`)+`:`+r}function R(e){return`${p(e.day)} ${L(e.begin,!0)} - ${L(e.end,!0)}`}var z=u(d)`
    width: 100%;
`,B=u(y)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`;function V({timeFilter:e,setTimeFilter:t}){let{t:n}=_(),r=i();return o(d,{direction:`column`,gap:0,style:{width:`100%`},children:o(z,{direction:`row`,gap:0,children:e?c(d,{direction:`row`,justify:`space-between`,gap:10,align:`center`,children:[o(y,{color:`Text.default`,type:`Normal`,children:`${R(e)}`}),o(g,{size:15,onClick:()=>{t&&t(null)},color:r.colors.Text.default,children:o(v,{})})]}):o(B,{color:`Text.light`,type:`Normal`,children:n(`common.search.timeFilterPlaceholder`)})})})}function H(e,t){return t in e}var U=Object.fromEntries(Object.entries({type:F,department:ee,level:I,term:te}).map(([e,t])=>[e,t()])),W=new Set([`term`]);function G(e){return W.has(e)}var K=U,q=u(d)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function J({options:e,onChange:t,timeFilter:n,setTimeFilter:r,resetTrigger:i,onResetTriggerComplete:a}){let{t:s}=_(),l=new Set(e);function u(e){return l.has(e)}let[f,p]=(0,T.useState)(g),[m,h]=(0,T.useState)({});function g(){let t={};return e.filter(e=>e in K).forEach(e=>{let n=K[e].length;G(e)?t[e]=null:t[e]=Array(n).fill(!1)}),t}function v(e){let t={};return Object.keys(e).forEach(n=>{let r=U[n];G(n)?e[n]==null?t[n]=null:t[n]=r[e[n]]:t[n]=e[n].map((e,t)=>e?r[t]:null).filter(e=>e!=null)}),t}function b(e){let t={};for(let n in e){let r=e[n];r!=null&&(H(f,n)?G(n)?f[n]==null?delete t[n]:t[n]=r:f[n].includes(!0)?t[n]=r:delete t[n]:n==`time`&&(t[n]=r))}return t}function x(e,t){p(n=>{if(G(t))return{...n,[t]:e};{let r=n[t].map((t,n)=>n===e?!t:t);return{...n,[t]:r}}})}function S(e){G(e)?p(t=>({...t,[e]:null})):p(t=>({...t,[e]:t[e].map(()=>!1)}))}function C(e,t){return G(t)?e[t]==null:!e[t].includes(!0)}return(0,T.useEffect)(()=>{let e=v(f),t={time:n};h(u(`time`)?{...e,...t}:e)},[f,n]),(0,T.useEffect)(()=>{t(b(m))},[m]),(0,T.useEffect)(()=>{i&&(p(g()),u(`time`)&&r&&r(null),a())},[i]),o(q,{direction:`column`,align:`stretch`,gap:12,children:e.map(e=>c(d,{direction:`column`,gap:6,flex:`1 1 auto`,children:[o(y,{type:`NormalBold`,color:`Text.default`,children:s(`common.search.${e}`)}),o(d,{direction:`column`,gap:0,style:{width:`100%`},children:(()=>{if(H(f,e)&&e in f)return o(P,{nameList:K[e].map(e=>e[1]),chosenList:f[e],handleOptionClick:t=>{x(t,e)},handleSelectAllClick:()=>{S(e)},isSingleSelect:G(e),selectedAll:C(f,e)});if(e==`time`)return o(V,{timeFilter:n,setTimeFilter:r})})()})]},e))})}function Y(e,t){if(e.inserted[t.name]===void 0)return e.insert(``,t,e.sheet,!0)}function X(e,t,n){var r=[],i=a(e,r,n);return r.length<2?n:i+t(r)}var Z=function(e){var t=l(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){var e=s([...arguments],t.registered,void 0);return r(t,e,!1),t.key+`-`+e.name};return{css:n,cx:function(){var e=[...arguments];return X(t.registered,n,ne(e))},injectGlobal:function(){Y(t,s([...arguments],t.registered))},keyframes:function(){var e=s([...arguments],t.registered),n=`animation-`+e.name;return Y(t,{name:e.name,styles:`@keyframes `+n+`{`+e.styles+`}`}),n},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:a.bind(null,t.registered),merge:X.bind(null,t.registered,n)}},ne=function e(t){for(var n=``,r=0;r<t.length;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case`boolean`:break;case`object`:if(Array.isArray(i))a=e(i);else for(var o in a=``,i)i[o]&&o&&(a&&(a+=` `),a+=o);break;default:a=i}a&&(n&&(n+=` `),n+=a)}}return n},Q=Z({key:`css`});Q.flush,Q.hydrate,Q.cx,Q.merge,Q.getRegisteredStyles,Q.injectGlobal,Q.keyframes;var re=Q.css;Q.sheet,Q.cache;var ie=re`
    border-color: red;
`,ae=u.input`
    display: block;
    width: 100%;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
    color: ${({theme:e})=>e.colors.Text.default};
    border: 0;
    padding: 8px;

    &::placeholder {
        color: ${({$placeholderColor:e,theme:t})=>e||t.colors.Text.placeholder};
    }

    background-color: ${({disabled:e,theme:t})=>e?t.colors.Background.Input.disabled:t.colors.Background.Section.default};
    ${({$hasError:e})=>e&&ie};
`,oe=u.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,se=u.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,$=(0,T.forwardRef)(({placeholder:e,errorMessage:t=``,disabled:n=!1,value:r=``,handleChange:i,setErrorStatus:a,$placeholderColor:s,...c},l)=>((0,T.useEffect)(()=>{a?.(!!t)},[t,a]),o(oe,{children:o(se,{children:o(ae,{ref:l,placeholder:e,$hasError:!!t,disabled:n,value:r,onChange:e=>{i?.(e.target.value)},$placeholderColor:s,...c})})})));$.displayName=`TextInput`;function ce(e,t){return e.map(e=>t?.find(t=>t.code===String(e))?.id).filter(e=>e!==void 0)}var le={hidden:{opacity:0,height:0},visible:{opacity:1,height:`auto`},exit:{opacity:0,height:0}};function ue({options:e,onSearch:t,SearchIcon:n,timeFilter:r,setTimeFilter:a}){let{t:s}=_(),l=i(),{query:u}=m(`GET`,`/department-options`),[f,p]=(0,T.useState)(!1),[h,v]=(0,T.useState)(``),[w,E]=(0,T.useState)({}),[D,O]=(0,T.useState)(!1);(0,T.useEffect)(()=>{r&&p(!0)},[r]);let k=(e,t,n)=>{e.nativeEvent.isComposing||e.key===`Enter`&&M(t,n)};function A(){E({}),v(``),O(!0)}function j(){p(!1)}function M(e,n){let r=N(e,n);if((e.department?.length??0)!==(r.department?.length??0)){alert(s(`common.search.departmentUnavailable`));return}p(!1),t(r)}function N(e,t){let n={};return Object.keys(e).forEach(t=>{let r=e[t];r!=null&&(t==`time`?n[t]=r:(G(t)?n[t]=r[0]:n[t]=r.map(e=>e[0]),t==`department`&&(n[t]=ce(n[t]??[],u.data?.departments))))}),n.keyword=t,n}function P(e){E(e)}function F(e,t){return e.includes(`time`)&&t!=null?{timeFilter:t,setTimeFilter:a}:{}}return c(d,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,style:{maxHeight:`100%`,width:`100%`},children:[c(d,{direction:`row`,justify:`stretch`,align:`center`,onClick:()=>{f||p(!0)},gap:0,padding:`4px 16px`,children:[n??o(g,{size:17.5,color:l.colors.Highlight.default,onClick:()=>{},children:o(S,{})}),o($,{value:h,handleChange:e=>{v(e)},placeholder:s(`common.search.placeholder`),onKeyDown:e=>{k(e,w,h)}})]}),o(x,{children:o(C.div,{initial:`hidden`,animate:f?`visible`:`hidden`,exit:`exit`,variants:le,transition:{duration:.3,ease:`easeInOut`},style:{display:`flex`,flexShrink:1,width:`100%`,minHeight:0},children:c(d,{direction:`column`,align:`stretch`,gap:16,padding:`16px`,flex:`1 0 0`,style:{overflowY:`auto`,minHeight:0},children:[o(J,{options:e,onChange:P,...F(e,r),resetTrigger:D,onResetTriggerComplete:()=>{O(!1)}}),c(d,{direction:`row`,justify:`flex-end`,gap:8,children:[o(b,{$paddingLeft:24,$paddingTop:9,onClick:j,children:o(y,{children:s(`common.search.close`)})}),o(b,{$paddingLeft:24,$paddingTop:9,onClick:A,type:`state5`,children:o(y,{children:s(`common.search.reset`)})}),o(b,{$paddingLeft:24,$paddingTop:9,type:`selected`,onClick:()=>{M(w,h)},children:o(y,{children:s(`common.search.submit`)})})]})]})})})]})}var de=(0,T.memo)(ue,(e,t)=>e.options===t.options&&e.onSearch===t.onSearch&&e.SearchIcon===t.SearchIcon&&e.timeFilter===t.timeFilter&&e.setTimeFilter===t.setTimeFilter);function fe(e){return!(e.keyword&&e.keyword.trim()!==``||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{D as a,V as i,de as n,$ as r,fe as t};
//# sourceMappingURL=checkEmpty-bhdrRNDs.js.map