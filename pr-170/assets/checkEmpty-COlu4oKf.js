(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b6f5295eb01b6f9b62c55f3becfc83a2448edba3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`15d5baea-5634-4ddf-9b01-6573b3a7e75c`,e._sentryDebugIdIdentifier=`sentry-dbid-15d5baea-5634-4ddf-9b01-6573b3a7e75c`)}catch{}})();import{D as e,S as t,h as n,l as r,m as i,n as a,p as o,r as s,v as c,x as l}from"./emotion-react-jsx-runtime.browser.esm-Cnk_Aq3J.js";import{t as u}from"./emotion-styled.browser.esm-BrBV03_t.js";import{E as d}from"./axios-Du-5RfZe.js";import{f,t as p}from"./useAPI-DetRwDxU.js";import{r as m,t as h}from"./Icon-BrZuvKGl.js";import{t as g}from"./useTranslation-DcVxXeFP.js";import{t as _}from"./Close-DNL27s0I.js";import{t as v}from"./Typography-BmW4OtQd.js";import{t as y}from"./FlexWrapper-Dj4SbSah.js";import{t as b}from"./Button-BBkgXKOA.js";import{n as x,r as S,t as C}from"./proxy-DgmUZPTA.js";import{t as w}from"./Add-DV4tYL8w.js";var T=e(t()),E=e(l(),1),D=m((0,E.jsx)(`path`,{d:`M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z`}),`Check`),O=u.div`
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
`,M=({selected:e=!1,chipText:t=``,...n})=>{let r=()=>s(j,{children:[t,e?a(h,{size:13,onClick:()=>{},children:a(D,{})}):a(h,{size:13,onClick:()=>{},children:a(w,{})})]});return a(e?A:k,{...n,children:a(r,{})})},N=u.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,P=({nameList:e,chosenList:t,handleOptionClick:n=()=>{},handleSelectAllClick:r=()=>{},selectedAll:i,isSingleSelect:o})=>{let{t:c}=g();return(0,T.useEffect)(()=>{!o&&!t.includes(!1)&&r()},[t]),s(N,{children:[a(M,{selected:i,chipText:c(`common.search.all`),onClick:r}),e.map((e,r)=>a(M,{selected:o?t==r:t[r],chipText:`${c(e)}`,onClick:()=>{n(r)}},r))]})},F=()=>[[`BR`,`common.type.basicRequiredShort`],[`BE`,`common.type.basicElectiveShort`],[`MR`,`common.type.majorRequiredShort`],[`ME`,`common.type.majorElectiveShort`],[`MGC`,`common.type.mandatoryGeneralCourseShort`],[`HSE`,`common.type.humanitiesSocialElectiveShort`],[`GR`,`common.type.generalRequiredShort`],[`EG`,`common.type.electiveGraduateShort`],[`OE`,`common.type.otherElectiveShort`],[`ETC`,`common.type.etcShort`]],ee=()=>([...[[`HSS`,`common.department.hssShort`,200],[`CE`,`common.department.ceShort`,500],[`BTM`,`common.department.btmShort`,500],[`ME`,`common.department.meShort`,500],[`PH`,`common.department.phShort`,500],[`BiS`,`common.department.bisShort`,500],[`IE`,`common.department.ieShort`,500],[`ID`,`common.department.idShort`,500],[`BS`,`common.department.bsShort`,500],[`MAS`,`common.department.masShort`,500],[`NQE`,`common.department.nqeShort`,500],[`EE`,`common.department.eeShort`,500],[`CS`,`common.department.csShort`,500],[`AE`,`common.department.aeShort`,500],[`CH`,`common.department.chShort`,500],[`CBE`,`common.department.cbeShort`,500],[`MS`,`common.department.msShort`,500],[`TS`,`common.department.tsShort`,500],[`SS`,`common.department.ssShort`,500],[`BCS`,`common.department.bcsShort`,500],[`AIC`,`common.department.aicShort`,500],[`ETC`,`common.department.etcShort`,900]].sort((e,t)=>e[2]-t[2]||e[1].localeCompare(t[1])).map(([e,t])=>[e,t])],[[`HSS`,`common.department.hssShort`],[`CE`,`common.department.ceShort`],[`BTM`,`common.department.btmShort`],[`ME`,`common.department.meShort`],[`PH`,`common.department.phShort`],[`BiS`,`common.department.bisShort`],[`IE`,`common.department.ieShort`],[`ID`,`common.department.idShort`],[`BS`,`common.department.bsShort`],[`MAS`,`common.department.masShort`],[`NQE`,`common.department.nqeShort`],[`EE`,`common.department.eeShort`],[`CS`,`common.department.csShort`],[`AE`,`common.department.aeShort`],[`CH`,`common.department.chShort`],[`CBE`,`common.department.cbeShort`],[`MS`,`common.department.msShort`],[`TS`,`common.department.tsShort`],[`SS`,`common.department.ssShort`],[`BCS`,`common.department.bcsShort`],[`AIC`,`common.department.aicShort`],[`ETC`,`common.department.etcShort`]]),I=()=>[[100,`common.level.100sShort`],[200,`common.level.200sShort`],[300,`common.level.300sShort`],[400,`common.level.400sShort`],[500,`common.level.500sShort`],[600,`common.level.600sShort`],[700,`common.level.700sShort`],[800,`common.level.800sShort`],[900,`common.level.900sShort`]],te=()=>[[3,`common.term.3yearsShort`],[1,`common.term.1yearShort`],[0,`common.term.thisSemesterShort`]];function L(e,t=!1){let n=Math.floor(e/60),r=(e%60).toString().padStart(2,`0`);return t?`${n<12?d.t(`common.am`):d.t(`common.pm`)} ${(n%12==0?12:n%12).toString().padStart(2,`0`)}:${r}`:n.toString().padStart(2,`0`)+`:`+r}function R(e){return`${f(e.day)} ${L(e.begin,!0)} - ${L(e.end,!0)}`}var z=u(y)`
    width: 100%;
`,B=u(v)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`;function V({timeFilter:e,setTimeFilter:t}){let{t:n}=g(),i=r();return a(y,{direction:`column`,gap:0,style:{width:`100%`},children:a(z,{direction:`row`,gap:0,children:e?s(y,{direction:`row`,justify:`space-between`,gap:10,align:`center`,children:[a(v,{color:`Text.default`,type:`Normal`,children:`${R(e)}`}),a(h,{size:15,onClick:()=>{t&&t(null)},color:i.colors.Text.default,children:a(_,{})})]}):a(B,{color:`Text.light`,type:`Normal`,children:n(`common.search.timeFilterPlaceholder`)})})})}function H(e,t){return t in e}var U=Object.fromEntries(Object.entries({type:F,department:ee,level:I,term:te}).map(([e,t])=>[e,t()])),W=new Set([`term`]);function G(e){return W.has(e)}var K=U,q=u(y)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function J({options:e,onChange:t,timeFilter:n,setTimeFilter:r,resetTrigger:i,onResetTriggerComplete:o}){let{t:c}=g(),l=new Set(e);function u(e){return l.has(e)}let[d,f]=(0,T.useState)(h),[p,m]=(0,T.useState)({});function h(){let t={};return e.filter(e=>e in K).forEach(e=>{let n=K[e].length;G(e)?t[e]=null:t[e]=Array(n).fill(!1)}),t}function _(e){let t={};return Object.keys(e).forEach(n=>{let r=U[n];G(n)?e[n]==null?t[n]=null:t[n]=r[e[n]]:t[n]=e[n].map((e,t)=>e?r[t]:null).filter(e=>e!=null)}),t}function b(e){let t={};for(let n in e){let r=e[n];r!=null&&(H(d,n)?G(n)?d[n]==null?delete t[n]:t[n]=r:d[n].includes(!0)?t[n]=r:delete t[n]:n==`time`&&(t[n]=r))}return t}function x(e,t){f(n=>{if(G(t))return{...n,[t]:e};{let r=n[t].map((t,n)=>n===e?!t:t);return{...n,[t]:r}}})}function S(e){G(e)?f(t=>({...t,[e]:null})):f(t=>({...t,[e]:t[e].map(()=>!1)}))}function C(e,t){return G(t)?e[t]==null:!e[t].includes(!0)}return(0,T.useEffect)(()=>{let e=_(d),t={time:n};m(u(`time`)?{...e,...t}:e)},[d,n]),(0,T.useEffect)(()=>{t(b(p))},[p]),(0,T.useEffect)(()=>{i&&(f(h()),u(`time`)&&r&&r(null),o())},[i]),a(q,{direction:`column`,align:`stretch`,gap:12,children:e.map(e=>s(y,{direction:`column`,gap:6,flex:`1 1 auto`,children:[a(v,{type:`NormalBold`,color:`Text.default`,children:c(`common.search.${e}`)}),a(y,{direction:`column`,gap:0,style:{width:`100%`},children:(()=>{if(H(d,e)&&e in d)return a(P,{nameList:K[e].map(e=>e[1]),chosenList:d[e],handleOptionClick:t=>{x(t,e)},handleSelectAllClick:()=>{S(e)},isSingleSelect:G(e),selectedAll:C(d,e)});if(e==`time`)return a(V,{timeFilter:n,setTimeFilter:r})})()})]},e))})}function Y(e,t){if(e.inserted[t.name]===void 0)return e.insert(``,t,e.sheet,!0)}function X(e,t,n){var r=[],a=i(e,r,n);return r.length<2?n:a+t(r)}var Z=function(e){var t=c(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var r=function(){var e=o([...arguments],t.registered,void 0);return n(t,e,!1),t.key+`-`+e.name};return{css:r,cx:function(){var e=[...arguments];return X(t.registered,r,ne(e))},injectGlobal:function(){Y(t,o([...arguments],t.registered))},keyframes:function(){var e=o([...arguments],t.registered),n=`animation-`+e.name;return Y(t,{name:e.name,styles:`@keyframes `+n+`{`+e.styles+`}`}),n},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:i.bind(null,t.registered),merge:X.bind(null,t.registered,r)}},ne=function e(t){for(var n=``,r=0;r<t.length;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case`boolean`:break;case`object`:if(Array.isArray(i))a=e(i);else for(var o in a=``,i)i[o]&&o&&(a&&(a+=` `),a+=o);break;default:a=i}a&&(n&&(n+=` `),n+=a)}}return n},Q=Z({key:`css`});Q.flush,Q.hydrate,Q.cx,Q.merge,Q.getRegisteredStyles,Q.injectGlobal,Q.keyframes;var re=Q.css;Q.sheet,Q.cache;var ie=re`
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
`,$=(0,T.forwardRef)(({placeholder:e,errorMessage:t=``,disabled:n=!1,value:r=``,handleChange:i,setErrorStatus:o,$placeholderColor:s,...c},l)=>((0,T.useEffect)(()=>{o?.(!!t)},[t,o]),a(oe,{children:a(se,{children:a(ae,{ref:l,placeholder:e,$hasError:!!t,disabled:n,value:r,onChange:e=>{i?.(e.target.value)},$placeholderColor:s,...c})})})));$.displayName=`TextInput`;function ce(e,t){return e.map(e=>t?.find(t=>t.code===String(e))?.id).filter(e=>e!==void 0)}var le={hidden:{opacity:0,height:0},visible:{opacity:1,height:`auto`},exit:{opacity:0,height:0}};function ue({options:e,onSearch:t,SearchIcon:n,timeFilter:i,setTimeFilter:o}){let{t:c}=g(),l=r(),{query:u}=p(`GET`,`/department-options`),[d,f]=(0,T.useState)(!1),[m,_]=(0,T.useState)(``),[w,E]=(0,T.useState)({}),[D,O]=(0,T.useState)(!1);(0,T.useEffect)(()=>{i&&f(!0)},[i]);let k=(e,t,n)=>{e.nativeEvent.isComposing||e.key===`Enter`&&M(t,n)};function A(){E({}),_(``),O(!0)}function j(){f(!1)}function M(e,n){let r=N(e,n);if((e.department?.length??0)!==(r.department?.length??0)){alert(c(`common.search.departmentUnavailable`));return}f(!1),t(r)}function N(e,t){let n={};return Object.keys(e).forEach(t=>{let r=e[t];r!=null&&(t==`time`?n[t]=r:(G(t)?n[t]=r[0]:n[t]=r.map(e=>e[0]),t==`department`&&(n[t]=ce(n[t]??[],u.data?.departments))))}),n.keyword=t,n}function P(e){E(e)}function F(e,t){return e.includes(`time`)&&t!=null?{timeFilter:t,setTimeFilter:o}:{}}return s(y,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,style:{maxHeight:`100%`,width:`100%`},children:[s(y,{direction:`row`,justify:`stretch`,align:`center`,onClick:()=>{d||f(!0)},gap:0,padding:`4px 16px`,children:[n??a(h,{size:17.5,color:l.colors.Highlight.default,onClick:()=>{},children:a(S,{})}),a($,{value:m,handleChange:e=>{_(e)},placeholder:c(`common.search.placeholder`),onKeyDown:e=>{k(e,w,m)}})]}),a(x,{children:a(C.div,{initial:`hidden`,animate:d?`visible`:`hidden`,exit:`exit`,variants:le,transition:{duration:.3,ease:`easeInOut`},style:{display:`flex`,flexShrink:1,width:`100%`,minHeight:0},children:s(y,{direction:`column`,align:`stretch`,gap:16,padding:`16px`,flex:`1 0 0`,style:{overflowY:`auto`,minHeight:0},children:[a(J,{options:e,onChange:P,...F(e,i),resetTrigger:D,onResetTriggerComplete:()=>{O(!1)}}),s(y,{direction:`row`,justify:`flex-end`,gap:8,children:[a(b,{$paddingLeft:24,$paddingTop:9,onClick:j,children:a(v,{children:c(`common.search.close`)})}),a(b,{$paddingLeft:24,$paddingTop:9,onClick:A,type:`state5`,children:a(v,{children:c(`common.search.reset`)})}),a(b,{$paddingLeft:24,$paddingTop:9,type:`selected`,onClick:()=>{M(w,m)},children:a(v,{children:c(`common.search.submit`)})})]})]})})})]})}var de=(0,T.memo)(ue,(e,t)=>e.options===t.options&&e.onSearch===t.onSearch&&e.SearchIcon===t.SearchIcon&&e.timeFilter===t.timeFilter&&e.setTimeFilter===t.setTimeFilter);function fe(e){return!(e.keyword&&e.keyword.trim()!==``||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{D as a,V as i,de as n,$ as r,fe as t};
//# sourceMappingURL=checkEmpty-COlu4oKf.js.map