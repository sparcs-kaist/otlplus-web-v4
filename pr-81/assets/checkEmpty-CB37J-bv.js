import{j as i,a as T,u as F,c as ne,g as Y,s as G,i as oe}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{p as J,r as v}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{n as y,F as E}from"./FlexWrapper-B6Hxm4Zw.js";import{T as B}from"./Typography-DeI78L6T.js";import{e as U,I as A,w as re,j as q,u as ie}from"./useIsDevice-Ebjg6yWC.js";import{u as k}from"./useTranslation-DrmvPmDd.js";import{C as ce,S as se,m as ae,A as le}from"./proxy-DgpciZdO.js";import{B as L}from"./media-MLnbxw48.js";const me=U(J.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),de=U(J.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),X=y.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,he=y(X)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ue=y(X)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,pe=y.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,N=({selected:e=!1,chipText:o="",...t})=>i(e?ue:he,{...t,children:i(()=>T(pe,{children:[o,e?i(A,{size:13,onClick:()=>{},children:i(de,{})}):i(A,{size:13,onClick:()=>{},children:i(me,{})})]}),{})}),fe=y.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,Se=({nameList:e,chosenList:o,handleOptionClick:t=()=>{},handleSelectAllClick:c=()=>{},selectedAll:h,isSingleSelect:d})=>{const{t:f}=k();return v.useEffect(()=>{!d&&!o.includes(!1)&&c()},[o]),T(fe,{children:[i(N,{selected:h,chipText:f("common.search.all"),onClick:c}),e.map((p,m)=>i(N,{selected:d?o==m:o[m],chipText:`${f(p)}`,onClick:()=>{t(m)}},m))]})},ge=()=>[["BR","common.type.basicRequiredShort"],["BE","common.type.basicElectiveShort"],["MR","common.type.majorRequiredShort"],["ME","common.type.majorElectiveShort"],["MGC","common.type.mandatoryGeneralCourseShort"],["HSE","common.type.humanitiesSocialElectiveShort"],["GR","common.type.generalRequiredShort"],["EG","common.type.electiveGraduateShort"],["OE","common.type.otherElectiveShort"],["ETC","common.type.etcShort"]],ve=()=>([...[...[["HSS","common.department.hssShort",200],["CE","common.department.ceShort",500],["BTM","common.department.btmShort",500],["ME","common.department.meShort",500],["PH","common.department.phShort",500],["BiS","common.department.bisShort",500],["IE","common.department.ieShort",500],["ID","common.department.idShort",500],["BS","common.department.bsShort",500],["MAS","common.department.masShort",500],["NQE","common.department.nqeShort",500],["EE","common.department.eeShort",500],["CS","common.department.csShort",500],["AE","common.department.aeShort",500],["CH","common.department.chShort",500],["CBE","common.department.cbeShort",500],["MS","common.department.msShort",500],["TS","common.department.tsShort",500],["SS","common.department.ssShort",500],["BCS","common.department.bcsShort",500],["ETC","common.department.etcShort",900]]].sort((o,t)=>o[2]-t[2]||o[1].localeCompare(t[1])).map(([o,t])=>[o,t])],[["HSS","common.department.hssShort"],["CE","common.department.ceShort"],["BTM","common.department.btmShort"],["ME","common.department.meShort"],["PH","common.department.phShort"],["BiS","common.department.bisShort"],["IE","common.department.ieShort"],["ID","common.department.idShort"],["BS","common.department.bsShort"],["MAS","common.department.masShort"],["NQE","common.department.nqeShort"],["EE","common.department.eeShort"],["CS","common.department.csShort"],["AE","common.department.aeShort"],["CH","common.department.chShort"],["CBE","common.department.cbeShort"],["MS","common.department.msShort"],["TS","common.department.tsShort"],["SS","common.department.ssShort"],["BCS","common.department.bcsShort"],["ETC","common.department.etcShort"]]),Ce=()=>[[100,"common.level.100sShort"],[200,"common.level.200sShort"],[300,"common.level.300sShort"],[400,"common.level.400sShort"],[500,"common.level.500sShort"],[600,"common.level.600sShort"],[700,"common.level.700sShort"],[800,"common.level.800sShort"],[900,"common.level.900sShort"]],ye=()=>[[3,"common.term.3yearsShort"],[1,"common.term.1yearShort"],[0,"common.term.thisSemesterShort"]];function W(e,o=!1){const t=Math.floor(e/60),c=(e%60).toString().padStart(2,"0");if(o){const h=t<12?q.t("common.am"):q.t("common.pm"),d=(t%12===0?12:t%12).toString().padStart(2,"0");return`${h} ${d}:${c}`}return t.toString().padStart(2,"0")+":"+c}function xe(e){return`${re(e.day)} ${W(e.begin,!0)} - ${W(e.end,!0)}`}const Ee=y(E)`
    width: 100%;
`,be=y(B)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`;function we({timeFilter:e,setTimeFilter:o}){const{t}=k(),c=F();return i(E,{direction:"column",gap:0,style:{width:"100%"},children:i(Ee,{direction:"row",gap:0,children:e?T(E,{direction:"row",justify:"space-between",gap:10,align:"center",children:[i(B,{color:"Text.default",type:"Normal",children:`${xe(e)}`}),i(A,{size:15,onClick:()=>{o&&o(null)},color:c.colors.Text.default,children:i(ce,{})})]}):i(be,{color:"Text.light",type:"Normal",children:t("common.search.timeFilterPlaceholder")})})})}function V(e,o){return o in e}const Te={type:ge,department:ve,level:Ce,term:ye},Z=Object.fromEntries(Object.entries(Te).map(([e,o])=>[e,o()])),$e=["term"],Be=new Set($e);function w(e){return Be.has(e)}const P=Z,Ie=y(E)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function Oe({options:e,onChange:o,timeFilter:t,setTimeFilter:c,resetTrigger:h,onResetTriggerComplete:d}){const{t:f}=k(),p=new Set(e);function m(n){return p.has(n)}const[s,a]=v.useState(I),[S,$]=v.useState({});function I(){const n={};return e.filter(r=>r in P).forEach(r=>{const l=P[r].length;w(r)?n[r]=null:n[r]=Array(l).fill(!1)}),n}function H(n){const r={};return Object.keys(n).forEach(l=>{const x=Z[l];w(l)?n[l]==null?r[l]=null:r[l]=x[n[l]]:r[l]=n[l].map((u,g)=>u?x[g]:null).filter(u=>u!=null)}),r}function O(n){const r={};for(const l in n){const x=n[l];x!=null&&(V(s,l)?w(l)?s[l]==null?delete r[l]:r[l]=x:!s[l].includes(!0)?delete r[l]:r[l]=x:l=="time"&&(r[l]=x))}return r}function M(n,r){a(l=>{if(w(r))return{...l,[r]:n};{const u=l[r].map((g,C)=>C===n?!g:g);return{...l,[r]:u}}})}function R(n){w(n)?a(r=>({...r,[n]:null})):a(r=>({...r,[n]:r[n].map(()=>!1)}))}function z(n,r){return w(r)?n[r]==null:!n[r].includes(!0)}return v.useEffect(()=>{const n=H(s),r={time:t};$(m("time")?{...n,...r}:n)},[s,t]),v.useEffect(()=>{const n=O(S);o(n)},[S]),v.useEffect(()=>{h&&(a(I()),m("time")&&c&&c(null),d())},[h]),i(Ie,{direction:"column",align:"stretch",gap:12,children:e.map(n=>T(E,{direction:"column",gap:6,flex:"1 1 auto",children:[i(B,{type:"NormalBold",color:"Text.default",children:f(`common.search.${n}`)}),i(E,{direction:"column",gap:0,style:{width:"100%"},children:(()=>{if(V(s,n)&&n in s)return i(Se,{nameList:P[n].map(r=>r[1]),chosenList:s[n],handleOptionClick:r=>{M(r,n)},handleSelectAllClick:()=>{R(n)},isSingleSelect:w(n),selectedAll:z(s,n)});if(n=="time")return i(we,{timeFilter:t,setTimeFilter:c})})()})]},n))})}function K(e,o){if(e.inserted[o.name]===void 0)return e.insert("",o,e.sheet,!0)}function Q(e,o,t){var c=[],h=Y(e,c,t);return c.length<2?t:h+o(c)}var je=function(o){var t=ne(o);t.sheet.speedy=function(p){this.isSpeedy=p},t.compat=!0;var c=function(){for(var m=arguments.length,s=new Array(m),a=0;a<m;a++)s[a]=arguments[a];var S=G(s,t.registered,void 0);return oe(t,S,!1),t.key+"-"+S.name},h=function(){for(var m=arguments.length,s=new Array(m),a=0;a<m;a++)s[a]=arguments[a];var S=G(s,t.registered),$="animation-"+S.name;return K(t,{name:S.name,styles:"@keyframes "+$+"{"+S.styles+"}"}),$},d=function(){for(var m=arguments.length,s=new Array(m),a=0;a<m;a++)s[a]=arguments[a];var S=G(s,t.registered);K(t,S)},f=function(){for(var m=arguments.length,s=new Array(m),a=0;a<m;a++)s[a]=arguments[a];return Q(t.registered,c,Ae(s))};return{css:c,cx:f,injectGlobal:d,keyframes:h,hydrate:function(m){m.forEach(function(s){t.inserted[s]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:Y.bind(null,t.registered),merge:Q.bind(null,t.registered,c)}},Ae=function e(o){for(var t="",c=0;c<o.length;c++){var h=o[c];if(h!=null){var d=void 0;switch(typeof h){case"boolean":break;case"object":{if(Array.isArray(h))d=e(h);else{d="";for(var f in h)h[f]&&f&&(d&&(d+=" "),d+=f)}break}default:d=h}d&&(t&&(t+=" "),t+=d)}}return t},ke=je({key:"css"}),_=ke.css;const He=_`
    border-color: red;
`,Me=_`
    background-color: rgba(245, 245, 245, 1);
`,Re=y.input`
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
        color: ${({$placeholderColor:e,theme:o})=>e||o.colors.Text.placeholder};
    }

    ${({disabled:e})=>e&&Me};
    ${({$hasError:e})=>e&&He};
`,ze=y.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,De=y.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,ee=v.forwardRef(({placeholder:e,errorMessage:o="",disabled:t=!1,value:c="",handleChange:h,setErrorStatus:d,$placeholderColor:f,...p},m)=>{const s=a=>{h?.(a.target.value)};return v.useEffect(()=>{d?.(!!o)},[o,d]),i(ze,{children:i(De,{children:i(Re,{ref:m,placeholder:e,$hasError:!!o,disabled:t,value:c,onChange:s,$placeholderColor:f,...p})})})});ee.displayName="TextInput";const Ge={hidden:{opacity:0,height:0},visible:{opacity:1,height:"auto"},exit:{opacity:0,height:0}};function Fe({options:e,onSearch:o,SearchIcon:t,timeFilter:c,setTimeFilter:h}){const{t:d}=k(),f=F(),{query:p}=ie("GET","/department-options"),[m,s]=v.useState(!1),[a,S]=v.useState(""),[$,I]=v.useState({}),[H,O]=v.useState(!1);v.useEffect(()=>{c&&s(!0)},[c]);const M=(u,g,C)=>{u.nativeEvent.isComposing||u.key==="Enter"&&n(g,C)};function R(){I({}),S(""),O(!0)}function z(){s(!1)}function n(u,g){s(!1),o(r(u,g))}function r(u,g){const C={};return Object.keys(u).forEach(b=>{const j=u[b];j!=null&&(b=="time"?C[b]=j:(w(b)?C[b]=j[0]:C[b]=j.map(D=>D[0]),b=="department"&&(C[b]=C[b]?.map(D=>p.data?.departments.find(te=>te.code===D.toString())?.id))))}),C.keyword=g,C}function l(u){I(u)}function x(u,g){return u.includes("time")&&g!=null?{timeFilter:g,setTimeFilter:h}:{}}return T(E,{direction:"column",align:"stretch",justify:"stretch",gap:0,style:{maxHeight:"100%",width:"100%"},children:[T(E,{direction:"row",justify:"stretch",align:"center",onClick:()=>{m||s(!0)},gap:0,padding:"4px 16px",children:[t??i(A,{size:17.5,color:f.colors.Highlight.default,onClick:()=>{},children:i(se,{})}),i(ee,{value:a,handleChange:u=>{S(u)},placeholder:d("common.search.placeholder"),onKeyDown:u=>{M(u,$,a)}})]}),i(le,{children:i(ae.div,{initial:"hidden",animate:m?"visible":"hidden",exit:"exit",variants:Ge,transition:{duration:.3,ease:"easeInOut"},style:{display:"flex",flexShrink:1,width:"100%",minHeight:0},children:T(E,{direction:"column",align:"stretch",gap:16,padding:"16px",flex:"1 0 0",style:{overflowY:"auto",minHeight:0},children:[i(Oe,{options:e,onChange:l,...x(e,c),resetTrigger:H,onResetTriggerComplete:()=>{O(!1)}}),T(E,{direction:"row",justify:"flex-end",gap:8,children:[i(L,{$paddingLeft:24,$paddingTop:9,onClick:z,children:i(B,{children:d("common.search.close")})}),i(L,{$paddingLeft:24,$paddingTop:9,onClick:R,type:"state5",children:i(B,{children:d("common.search.reset")})}),i(L,{$paddingLeft:24,$paddingTop:9,type:"selected",onClick:()=>{n($,a)},children:i(B,{children:d("common.search.submit")})})]})]})})})]})}function Ye(e){return!(e.keyword&&e.keyword.trim()!==""||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{me as A,de as C,Fe as S,Ye as c};
//# sourceMappingURL=checkEmpty-CB37J-bv.js.map
