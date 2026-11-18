(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`1646b332274e0c0b3d556f5860fdb00355eb67b3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`9ee6225d-7719-4d5f-be6c-655bf5bf7eac`,e._sentryDebugIdIdentifier=`sentry-dbid-9ee6225d-7719-4d5f-be6c-655bf5bf7eac`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BFplKmJO.js";import{l as n,n as r,r as i}from"./emotion-react-jsx-runtime.browser.esm-C9YnWqqA.js";import{n as a,t as o}from"./FlexWrapper-EZvzcX3B.js";import{t as s}from"./useAPI-BoLrY7d2.js";import{t as c}from"./Icon-DrR-Rim5.js";import{t as l}from"./useTranslation-BOI9xZ4y.js";import{t as u}from"./Typography-BYn17dgC.js";import{t as d}from"./Button-CMXSwAjt.js";import{t as f}from"./Search-BTJfcXig.js";import{n as p,t as m}from"./proxy-B8Nf37VB.js";import{t as h}from"./Add-C7PB-LrE.js";import{n as g,r as _,t as v}from"./TextInput-UKfxHSqk.js";var y=t(e()),b=a.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,x=a(b)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,S=a(b)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,C=a.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,w=({selected:e=!1,chipText:t=``,...n})=>{let a=()=>i(C,{children:[t,e?r(c,{size:13,onClick:()=>{},children:r(_,{})}):r(c,{size:13,onClick:()=>{},children:r(h,{})})]});return r(e?S:x,{...n,children:r(a,{})})},T=a.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,E=({nameList:e,chosenList:t,handleOptionClick:n=()=>{},handleSelectAllClick:a=()=>{},selectedAll:o,isSingleSelect:s})=>{let{t:c}=l();return(0,y.useEffect)(()=>{!s&&!t.includes(!1)&&a()},[t]),i(T,{children:[r(w,{selected:o,chipText:c(`common.search.all`),onClick:a}),e.map((e,i)=>r(w,{selected:s?t==i:t[i],chipText:`${c(e)}`,onClick:()=>{n(i)}},i))]})},D=()=>[[`BR`,`common.type.basicRequiredShort`],[`BE`,`common.type.basicElectiveShort`],[`MR`,`common.type.majorRequiredShort`],[`ME`,`common.type.majorElectiveShort`],[`MGC`,`common.type.mandatoryGeneralCourseShort`],[`HSE`,`common.type.humanitiesSocialElectiveShort`],[`GR`,`common.type.generalRequiredShort`],[`EG`,`common.type.electiveGraduateShort`],[`OE`,`common.type.otherElectiveShort`],[`ETC`,`common.type.etcShort`]],O=()=>([...[[`HSS`,`common.department.hssShort`,200],[`CE`,`common.department.ceShort`,500],[`BTM`,`common.department.btmShort`,500],[`ME`,`common.department.meShort`,500],[`PH`,`common.department.phShort`,500],[`BiS`,`common.department.bisShort`,500],[`IE`,`common.department.ieShort`,500],[`ID`,`common.department.idShort`,500],[`BS`,`common.department.bsShort`,500],[`MAS`,`common.department.masShort`,500],[`NQE`,`common.department.nqeShort`,500],[`EE`,`common.department.eeShort`,500],[`CS`,`common.department.csShort`,500],[`AE`,`common.department.aeShort`,500],[`CH`,`common.department.chShort`,500],[`CBE`,`common.department.cbeShort`,500],[`MS`,`common.department.msShort`,500],[`TS`,`common.department.tsShort`,500],[`SS`,`common.department.ssShort`,500],[`BCS`,`common.department.bcsShort`,500],[`AIC`,`common.department.aicShort`,500],[`ETC`,`common.department.etcShort`,900]].sort((e,t)=>e[2]-t[2]||e[1].localeCompare(t[1])).map(([e,t])=>[e,t])],[[`HSS`,`common.department.hssShort`],[`CE`,`common.department.ceShort`],[`BTM`,`common.department.btmShort`],[`ME`,`common.department.meShort`],[`PH`,`common.department.phShort`],[`BiS`,`common.department.bisShort`],[`IE`,`common.department.ieShort`],[`ID`,`common.department.idShort`],[`BS`,`common.department.bsShort`],[`MAS`,`common.department.masShort`],[`NQE`,`common.department.nqeShort`],[`EE`,`common.department.eeShort`],[`CS`,`common.department.csShort`],[`AE`,`common.department.aeShort`],[`CH`,`common.department.chShort`],[`CBE`,`common.department.cbeShort`],[`MS`,`common.department.msShort`],[`TS`,`common.department.tsShort`],[`SS`,`common.department.ssShort`],[`BCS`,`common.department.bcsShort`],[`AIC`,`common.department.aicShort`],[`ETC`,`common.department.etcShort`]]),k=()=>[[100,`common.level.100sShort`],[200,`common.level.200sShort`],[300,`common.level.300sShort`],[400,`common.level.400sShort`],[500,`common.level.500sShort`],[600,`common.level.600sShort`],[700,`common.level.700sShort`],[800,`common.level.800sShort`],[900,`common.level.900sShort`]],A=()=>[[3,`common.term.3yearsShort`],[1,`common.term.1yearShort`],[0,`common.term.thisSemesterShort`]];function j(e,t){return t in e}var M=Object.fromEntries(Object.entries({type:D,department:O,level:k,term:A}).map(([e,t])=>[e,t()])),N=new Set([`term`]);function P(e){return N.has(e)}var F=M,I=a(o)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function L({options:e,onChange:t,timeFilter:n,setTimeFilter:a,resetTrigger:s,onResetTriggerComplete:c}){let{t:d}=l(),f=new Set(e);function p(e){return f.has(e)}let[m,h]=(0,y.useState)(b),[_,v]=(0,y.useState)({});function b(){let t={};return e.filter(e=>e in F).forEach(e=>{let n=F[e].length;P(e)?t[e]=null:t[e]=Array(n).fill(!1)}),t}function x(e){let t={};return Object.keys(e).forEach(n=>{let r=M[n];P(n)?e[n]==null?t[n]=null:t[n]=r[e[n]]:t[n]=e[n].map((e,t)=>e?r[t]:null).filter(e=>e!=null)}),t}function S(e){let t={};for(let n in e){let r=e[n];r!=null&&(j(m,n)?P(n)?m[n]==null?delete t[n]:t[n]=r:m[n].includes(!0)?t[n]=r:delete t[n]:n==`time`&&(t[n]=r))}return t}function C(e,t){h(n=>{if(P(t))return{...n,[t]:e};{let r=n[t].map((t,n)=>n===e?!t:t);return{...n,[t]:r}}})}function w(e){P(e)?h(t=>({...t,[e]:null})):h(t=>({...t,[e]:t[e].map(()=>!1)}))}function T(e,t){return P(t)?e[t]==null:!e[t].includes(!0)}return(0,y.useEffect)(()=>{let e=x(m),t={time:n};v(p(`time`)?{...e,...t}:e)},[m,n]),(0,y.useEffect)(()=>{t(S(_))},[_]),(0,y.useEffect)(()=>{s&&(h(b()),p(`time`)&&a&&a(null),c())},[s]),r(I,{direction:`column`,align:`stretch`,gap:12,children:e.map(e=>i(o,{direction:`column`,gap:6,flex:`1 1 auto`,children:[r(u,{type:`NormalBold`,color:`Text.default`,children:d(`common.search.${e}`)}),r(o,{direction:`column`,gap:0,style:{width:`100%`},children:(()=>{if(j(m,e)&&e in m)return r(E,{nameList:F[e].map(e=>e[1]),chosenList:m[e],handleOptionClick:t=>{C(t,e)},handleSelectAllClick:()=>{w(e)},isSingleSelect:P(e),selectedAll:T(m,e)});if(e==`time`)return r(g,{timeFilter:n,setTimeFilter:a})})()})]},e))})}function R(e,t){return e.map(e=>t?.find(t=>t.code===String(e))?.id).filter(e=>e!==void 0)}var z={hidden:{opacity:0,height:0},visible:{opacity:1,height:`auto`},exit:{opacity:0,height:0}};function B({options:e,onSearch:t,SearchIcon:a,timeFilter:h,setTimeFilter:g}){let{t:_}=l(),b=n(),{query:x}=s(`GET`,`/department-options`),[S,C]=(0,y.useState)(!1),[w,T]=(0,y.useState)(``),[E,D]=(0,y.useState)({}),[O,k]=(0,y.useState)(!1);(0,y.useEffect)(()=>{h&&C(!0)},[h]);let A=(e,t,n)=>{e.nativeEvent.isComposing||e.key===`Enter`&&N(t,n)};function j(){D({}),T(``),k(!0)}function M(){C(!1)}function N(e,n){let r=F(e,n);if((e.department?.length??0)!==(r.department?.length??0)){alert(_(`common.search.departmentUnavailable`));return}C(!1),t(r)}function F(e,t){let n={};return Object.keys(e).forEach(t=>{let r=e[t];r!=null&&(t==`time`?n[t]=r:(P(t)?n[t]=r[0]:n[t]=r.map(e=>e[0]),t==`department`&&(n[t]=R(n[t]??[],x.data?.departments))))}),n.keyword=t,n}function I(e){D(e)}function B(e,t){return e.includes(`time`)&&t!=null?{timeFilter:t,setTimeFilter:g}:{}}return i(o,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,style:{maxHeight:`100%`,width:`100%`},children:[i(o,{direction:`row`,justify:`stretch`,align:`center`,onClick:()=>{S||C(!0)},gap:0,padding:`4px 16px`,children:[a??r(c,{size:17.5,color:b.colors.Highlight.default,onClick:()=>{},children:r(f,{})}),r(v,{value:w,handleChange:e=>{T(e)},placeholder:_(`common.search.placeholder`),onKeyDown:e=>{A(e,E,w)}})]}),r(p,{children:r(m.div,{initial:`hidden`,animate:S?`visible`:`hidden`,exit:`exit`,variants:z,transition:{duration:.3,ease:`easeInOut`},style:{display:`flex`,flexShrink:1,width:`100%`,minHeight:0},children:i(o,{direction:`column`,align:`stretch`,gap:16,padding:`16px`,flex:`1 0 0`,style:{overflowY:`auto`,minHeight:0},children:[r(L,{options:e,onChange:I,...B(e,h),resetTrigger:O,onResetTriggerComplete:()=>{k(!1)}}),i(o,{direction:`row`,justify:`flex-end`,gap:8,children:[r(d,{$paddingLeft:24,$paddingTop:9,onClick:M,children:r(u,{children:_(`common.search.close`)})}),r(d,{$paddingLeft:24,$paddingTop:9,onClick:j,type:`state5`,children:r(u,{children:_(`common.search.reset`)})}),r(d,{$paddingLeft:24,$paddingTop:9,type:`selected`,onClick:()=>{N(E,w)},children:r(u,{children:_(`common.search.submit`)})})]})]})})})]})}var V=(0,y.memo)(B,(e,t)=>e.options===t.options&&e.onSearch===t.onSearch&&e.SearchIcon===t.SearchIcon&&e.timeFilter===t.timeFilter&&e.setTimeFilter===t.setTimeFilter);function H(e){return!(e.keyword&&e.keyword.trim()!==``||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{V as n,H as t};
//# sourceMappingURL=checkEmpty-BaIgfimn.js.map