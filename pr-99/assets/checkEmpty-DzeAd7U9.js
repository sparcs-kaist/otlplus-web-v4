import{j as i,a as T,u as Y,c as ne,g as F,s as G,i as oe}from"./emotion-react-jsx-runtime.browser.esm-QD84DeEB.js";import{p as J,r as y}from"./chunk-EPOLDU6W-BHNXWpsS.js";import{n as b,F as x}from"./FlexWrapper-DrgPyoq-.js";import{T as $}from"./Typography-U8LR1B7g.js";import{e as U,I as A,w as re,j as P,u as ie}from"./useIsDevice-7pF29E44.js";import{u as k}from"./useTranslation-BLg8RTuH.js";import{C as ce,S as ae,m as se,A as le}from"./proxy-CuWnEpNG.js";import{B as L}from"./media-BdO883Dt.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"dedd35bc5dfaa9f582541ca6f2b1b6a84c16d34e"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ac902078-cf70-426b-94a5-89889fcb0993",e._sentryDebugIdIdentifier="sentry-dbid-ac902078-cf70-426b-94a5-89889fcb0993")})()}catch{}const me=U(J.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),de=U(J.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),X=b.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,he=b(X)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,ue=b(X)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,fe=b.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,q=({selected:e=!1,chipText:n="",...t})=>i(e?ue:he,{...t,children:i(()=>T(fe,{children:[n,e?i(A,{size:13,onClick:()=>{},children:i(de,{})}):i(A,{size:13,onClick:()=>{},children:i(me,{})})]}),{})}),pe=b.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,Se=({nameList:e,chosenList:n,handleOptionClick:t=()=>{},handleSelectAllClick:c=()=>{},selectedAll:h,isSingleSelect:d})=>{const{t:p}=k();return y.useEffect(()=>{!d&&!n.includes(!1)&&c()},[n]),T(pe,{children:[i(q,{selected:h,chipText:p("common.search.all"),onClick:c}),e.map((f,m)=>i(q,{selected:d?n==m:n[m],chipText:`${p(f)}`,onClick:()=>{t(m)}},m))]})},ge=()=>[["BR","common.type.basicRequiredShort"],["BE","common.type.basicElectiveShort"],["MR","common.type.majorRequiredShort"],["ME","common.type.majorElectiveShort"],["MGC","common.type.mandatoryGeneralCourseShort"],["HSE","common.type.humanitiesSocialElectiveShort"],["GR","common.type.generalRequiredShort"],["EG","common.type.electiveGraduateShort"],["OE","common.type.otherElectiveShort"],["ETC","common.type.etcShort"]],ye=()=>([...[...[["HSS","common.department.hssShort",200],["CE","common.department.ceShort",500],["BTM","common.department.btmShort",500],["ME","common.department.meShort",500],["PH","common.department.phShort",500],["BiS","common.department.bisShort",500],["IE","common.department.ieShort",500],["ID","common.department.idShort",500],["BS","common.department.bsShort",500],["MAS","common.department.masShort",500],["NQE","common.department.nqeShort",500],["EE","common.department.eeShort",500],["CS","common.department.csShort",500],["AE","common.department.aeShort",500],["CH","common.department.chShort",500],["CBE","common.department.cbeShort",500],["MS","common.department.msShort",500],["TS","common.department.tsShort",500],["SS","common.department.ssShort",500],["BCS","common.department.bcsShort",500],["ETC","common.department.etcShort",900]]].sort((n,t)=>n[2]-t[2]||n[1].localeCompare(t[1])).map(([n,t])=>[n,t])],[["HSS","common.department.hssShort"],["CE","common.department.ceShort"],["BTM","common.department.btmShort"],["ME","common.department.meShort"],["PH","common.department.phShort"],["BiS","common.department.bisShort"],["IE","common.department.ieShort"],["ID","common.department.idShort"],["BS","common.department.bsShort"],["MAS","common.department.masShort"],["NQE","common.department.nqeShort"],["EE","common.department.eeShort"],["CS","common.department.csShort"],["AE","common.department.aeShort"],["CH","common.department.chShort"],["CBE","common.department.cbeShort"],["MS","common.department.msShort"],["TS","common.department.tsShort"],["SS","common.department.ssShort"],["BCS","common.department.bcsShort"],["ETC","common.department.etcShort"]]),ve=()=>[[100,"common.level.100sShort"],[200,"common.level.200sShort"],[300,"common.level.300sShort"],[400,"common.level.400sShort"],[500,"common.level.500sShort"],[600,"common.level.600sShort"],[700,"common.level.700sShort"],[800,"common.level.800sShort"],[900,"common.level.900sShort"]],be=()=>[[3,"common.term.3yearsShort"],[1,"common.term.1yearShort"],[0,"common.term.thisSemesterShort"]];function W(e,n=!1){const t=Math.floor(e/60),c=(e%60).toString().padStart(2,"0");if(n){const h=t<12?P.t("common.am"):P.t("common.pm"),d=(t%12===0?12:t%12).toString().padStart(2,"0");return`${h} ${d}:${c}`}return t.toString().padStart(2,"0")+":"+c}function Ce(e){return`${re(e.day)} ${W(e.begin,!0)} - ${W(e.end,!0)}`}const xe=b(x)`
    width: 100%;
`,Ee=b($)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`;function we({timeFilter:e,setTimeFilter:n}){const{t}=k(),c=Y();return i(x,{direction:"column",gap:0,style:{width:"100%"},children:i(xe,{direction:"row",gap:0,children:e?T(x,{direction:"row",justify:"space-between",gap:10,align:"center",children:[i($,{color:"Text.default",type:"Normal",children:`${Ce(e)}`}),i(A,{size:15,onClick:()=>{n&&n(null)},color:c.colors.Text.default,children:i(ce,{})})]}):i(Ee,{color:"Text.light",type:"Normal",children:t("common.search.timeFilterPlaceholder")})})})}function V(e,n){return n in e}const Te={type:ge,department:ye,level:ve,term:be},Z=Object.fromEntries(Object.entries(Te).map(([e,n])=>[e,n()])),Ie=["term"],$e=new Set(Ie);function w(e){return $e.has(e)}const N=Z,Be=b(x)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function Oe({options:e,onChange:n,timeFilter:t,setTimeFilter:c,resetTrigger:h,onResetTriggerComplete:d}){const{t:p}=k(),f=new Set(e);function m(o){return f.has(o)}const[a,s]=y.useState(B),[S,I]=y.useState({});function B(){const o={};return e.filter(r=>r in N).forEach(r=>{const l=N[r].length;w(r)?o[r]=null:o[r]=Array(l).fill(!1)}),o}function R(o){const r={};return Object.keys(o).forEach(l=>{const C=Z[l];w(l)?o[l]==null?r[l]=null:r[l]=C[o[l]]:r[l]=o[l].map((u,g)=>u?C[g]:null).filter(u=>u!=null)}),r}function O(o){const r={};for(const l in o){const C=o[l];C!=null&&(V(a,l)?w(l)?a[l]==null?delete r[l]:r[l]=C:!a[l].includes(!0)?delete r[l]:r[l]=C:l=="time"&&(r[l]=C))}return r}function D(o,r){s(l=>{if(w(r))return{...l,[r]:o};{const u=l[r].map((g,v)=>v===o?!g:g);return{...l,[r]:u}}})}function H(o){w(o)?s(r=>({...r,[o]:null})):s(r=>({...r,[o]:r[o].map(()=>!1)}))}function M(o,r){return w(r)?o[r]==null:!o[r].includes(!0)}return y.useEffect(()=>{const o=R(a),r={time:t};I(m("time")?{...o,...r}:o)},[a,t]),y.useEffect(()=>{const o=O(S);n(o)},[S]),y.useEffect(()=>{h&&(s(B()),m("time")&&c&&c(null),d())},[h]),i(Be,{direction:"column",align:"stretch",gap:12,children:e.map(o=>T(x,{direction:"column",gap:6,flex:"1 1 auto",children:[i($,{type:"NormalBold",color:"Text.default",children:p(`common.search.${o}`)}),i(x,{direction:"column",gap:0,style:{width:"100%"},children:(()=>{if(V(a,o)&&o in a)return i(Se,{nameList:N[o].map(r=>r[1]),chosenList:a[o],handleOptionClick:r=>{D(r,o)},handleSelectAllClick:()=>{H(o)},isSingleSelect:w(o),selectedAll:M(a,o)});if(o=="time")return i(we,{timeFilter:t,setTimeFilter:c})})()})]},o))})}function K(e,n){if(e.inserted[n.name]===void 0)return e.insert("",n,e.sheet,!0)}function Q(e,n,t){var c=[],h=F(e,c,t);return c.length<2?t:h+n(c)}var je=function(n){var t=ne(n);t.sheet.speedy=function(f){this.isSpeedy=f},t.compat=!0;var c=function(){for(var m=arguments.length,a=new Array(m),s=0;s<m;s++)a[s]=arguments[s];var S=G(a,t.registered,void 0);return oe(t,S,!1),t.key+"-"+S.name},h=function(){for(var m=arguments.length,a=new Array(m),s=0;s<m;s++)a[s]=arguments[s];var S=G(a,t.registered),I="animation-"+S.name;return K(t,{name:S.name,styles:"@keyframes "+I+"{"+S.styles+"}"}),I},d=function(){for(var m=arguments.length,a=new Array(m),s=0;s<m;s++)a[s]=arguments[s];var S=G(a,t.registered);K(t,S)},p=function(){for(var m=arguments.length,a=new Array(m),s=0;s<m;s++)a[s]=arguments[s];return Q(t.registered,c,Ae(a))};return{css:c,cx:p,injectGlobal:d,keyframes:h,hydrate:function(m){m.forEach(function(a){t.inserted[a]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:F.bind(null,t.registered),merge:Q.bind(null,t.registered,c)}},Ae=function e(n){for(var t="",c=0;c<n.length;c++){var h=n[c];if(h!=null){var d=void 0;switch(typeof h){case"boolean":break;case"object":{if(Array.isArray(h))d=e(h);else{d="";for(var p in h)h[p]&&p&&(d&&(d+=" "),d+=p)}break}default:d=h}d&&(t&&(t+=" "),t+=d)}}return t},ke=je({key:"css"}),_=ke.css;const Re=_`
    border-color: red;
`,De=_`
    background-color: rgba(245, 245, 245, 1);
`,He=b.input`
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
        color: ${({$placeholderColor:e,theme:n})=>e||n.colors.Text.placeholder};
    }

    ${({disabled:e})=>e&&De};
    ${({$hasError:e})=>e&&Re};
`,Me=b.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,ze=b.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,ee=y.forwardRef(({placeholder:e,errorMessage:n="",disabled:t=!1,value:c="",handleChange:h,setErrorStatus:d,$placeholderColor:p,...f},m)=>{const a=s=>{h?.(s.target.value)};return y.useEffect(()=>{d?.(!!n)},[n,d]),i(Me,{children:i(ze,{children:i(He,{ref:m,placeholder:e,$hasError:!!n,disabled:t,value:c,onChange:a,$placeholderColor:p,...f})})})});ee.displayName="TextInput";const Ge={hidden:{opacity:0,height:0},visible:{opacity:1,height:"auto"},exit:{opacity:0,height:0}};function Ye({options:e,onSearch:n,SearchIcon:t,timeFilter:c,setTimeFilter:h}){const{t:d}=k(),p=Y(),{query:f}=ie("GET","/department-options"),[m,a]=y.useState(!1),[s,S]=y.useState(""),[I,B]=y.useState({}),[R,O]=y.useState(!1);y.useEffect(()=>{c&&a(!0)},[c]);const D=(u,g,v)=>{u.nativeEvent.isComposing||u.key==="Enter"&&o(g,v)};function H(){B({}),S(""),O(!0)}function M(){a(!1)}function o(u,g){a(!1),n(r(u,g))}function r(u,g){const v={};return Object.keys(u).forEach(E=>{const j=u[E];j!=null&&(E=="time"?v[E]=j:(w(E)?v[E]=j[0]:v[E]=j.map(z=>z[0]),E=="department"&&(v[E]=v[E]?.map(z=>f.data?.departments.find(te=>te.code===z.toString())?.id))))}),v.keyword=g,v}function l(u){B(u)}function C(u,g){return u.includes("time")&&g!=null?{timeFilter:g,setTimeFilter:h}:{}}return T(x,{direction:"column",align:"stretch",justify:"stretch",gap:0,style:{maxHeight:"100%",width:"100%"},children:[T(x,{direction:"row",justify:"stretch",align:"center",onClick:()=>{m||a(!0)},gap:0,padding:"4px 16px",children:[t??i(A,{size:17.5,color:p.colors.Highlight.default,onClick:()=>{},children:i(ae,{})}),i(ee,{value:s,handleChange:u=>{S(u)},placeholder:d("common.search.placeholder"),onKeyDown:u=>{D(u,I,s)}})]}),i(le,{children:i(se.div,{initial:"hidden",animate:m?"visible":"hidden",exit:"exit",variants:Ge,transition:{duration:.3,ease:"easeInOut"},style:{display:"flex",flexShrink:1,width:"100%",minHeight:0},children:T(x,{direction:"column",align:"stretch",gap:16,padding:"16px",flex:"1 0 0",style:{overflowY:"auto",minHeight:0},children:[i(Oe,{options:e,onChange:l,...C(e,c),resetTrigger:R,onResetTriggerComplete:()=>{O(!1)}}),T(x,{direction:"row",justify:"flex-end",gap:8,children:[i(L,{$paddingLeft:24,$paddingTop:9,onClick:M,children:i($,{children:d("common.search.close")})}),i(L,{$paddingLeft:24,$paddingTop:9,onClick:H,type:"state5",children:i($,{children:d("common.search.reset")})}),i(L,{$paddingLeft:24,$paddingTop:9,type:"selected",onClick:()=>{o(I,s)},children:i($,{children:d("common.search.submit")})})]})]})})})]})}function Fe(e){return!(e.keyword&&e.keyword.trim()!==""||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{me as A,de as C,Ye as S,Fe as c};
//# sourceMappingURL=checkEmpty-DzeAd7U9.js.map
