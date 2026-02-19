import{j as i,a as T,u as V,c as ee,g as K,s as G,i as te}from"./emotion-react-jsx-runtime.browser.esm-B-zamEU7.js";import{p as Q,r as g}from"./chunk-EPOLDU6W-zmgMqoXq.js";import{n as b,F as E}from"./FlexWrapper-Cxmg7ETU.js";import{T as B}from"./Typography-DoXk6ZeF.js";import{e as Y,I as $,u as ne}from"./useAPI-B2f8YEht.js";import{u as k}from"./useTranslation-BV_BGx8x.js";import{f as oe}from"./formatTimeblockToString-jWs_tdD0.js";import{C as re}from"./Close-DQmaMuQZ.js";import{B as L}from"./media-gsTWNWmB.js";import{S as ie,m as ce,A as se}from"./proxy-CHGw2Dw9.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"ada4c7999b6ed5c9c18808775724ee3dffa94ca2"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f6283b18-0ac8-4285-9aaa-601d2c7c8b79",e._sentryDebugIdIdentifier="sentry-dbid-f6283b18-0ac8-4285-9aaa-601d2c7c8b79")})()}catch{}const ae=Y(Q.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),le=Y(Q.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),J=b.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,me=b(J)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,de=b(J)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,he=b.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,P=({selected:e=!1,chipText:t="",...n})=>i(e?de:me,{...n,children:i(()=>T(he,{children:[t,e?i($,{size:13,onClick:()=>{},children:i(le,{})}):i($,{size:13,onClick:()=>{},children:i(ae,{})})]}),{})}),ue=b.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,fe=({nameList:e,chosenList:t,handleOptionClick:n=()=>{},handleSelectAllClick:l=()=>{},selectedAll:u,isSingleSelect:d})=>{const{t:p}=k();return g.useEffect(()=>{!d&&!t.includes(!1)&&l()},[t]),T(ue,{children:[i(P,{selected:u,chipText:p("common.search.all"),onClick:l}),e.map((f,m)=>i(P,{selected:d?t==m:t[m],chipText:`${p(f)}`,onClick:()=>{n(m)}},m))]})},pe=()=>[["BR","common.type.basicRequiredShort"],["BE","common.type.basicElectiveShort"],["MR","common.type.majorRequiredShort"],["ME","common.type.majorElectiveShort"],["MGC","common.type.mandatoryGeneralCourseShort"],["HSE","common.type.humanitiesSocialElectiveShort"],["GR","common.type.generalRequiredShort"],["EG","common.type.electiveGraduateShort"],["OE","common.type.otherElectiveShort"],["ETC","common.type.etcShort"]],Se=()=>([...[...[["HSS","common.department.hssShort",200],["CE","common.department.ceShort",500],["BTM","common.department.btmShort",500],["ME","common.department.meShort",500],["PH","common.department.phShort",500],["BiS","common.department.bisShort",500],["IE","common.department.ieShort",500],["ID","common.department.idShort",500],["BS","common.department.bsShort",500],["MAS","common.department.masShort",500],["NQE","common.department.nqeShort",500],["EE","common.department.eeShort",500],["CS","common.department.csShort",500],["AE","common.department.aeShort",500],["CH","common.department.chShort",500],["CBE","common.department.cbeShort",500],["MS","common.department.msShort",500],["TS","common.department.tsShort",500],["SS","common.department.ssShort",500],["BCS","common.department.bcsShort",500],["ETC","common.department.etcShort",900]]].sort((t,n)=>t[2]-n[2]||t[1].localeCompare(n[1])).map(([t,n])=>[t,n])],[["HSS","common.department.hssShort"],["CE","common.department.ceShort"],["BTM","common.department.btmShort"],["ME","common.department.meShort"],["PH","common.department.phShort"],["BiS","common.department.bisShort"],["IE","common.department.ieShort"],["ID","common.department.idShort"],["BS","common.department.bsShort"],["MAS","common.department.masShort"],["NQE","common.department.nqeShort"],["EE","common.department.eeShort"],["CS","common.department.csShort"],["AE","common.department.aeShort"],["CH","common.department.chShort"],["CBE","common.department.cbeShort"],["MS","common.department.msShort"],["TS","common.department.tsShort"],["SS","common.department.ssShort"],["BCS","common.department.bcsShort"],["ETC","common.department.etcShort"]]),ge=()=>[[100,"common.level.100sShort"],[200,"common.level.200sShort"],[300,"common.level.300sShort"],[400,"common.level.400sShort"],[500,"common.level.500sShort"],[600,"common.level.600sShort"],[700,"common.level.700sShort"],[800,"common.level.800sShort"],[900,"common.level.900sShort"]],ye=()=>[[3,"common.term.3yearsShort"],[1,"common.term.1yearShort"],[0,"common.term.thisSemesterShort"]],ve=b(E)`
    width: 100%;
`,be=b(B)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`;function Ce({timeFilter:e,setTimeFilter:t}){const{t:n}=k(),l=V();return i(E,{direction:"column",gap:0,style:{width:"100%"},children:i(ve,{direction:"row",gap:0,children:e?T(E,{direction:"row",justify:"space-between",gap:10,align:"center",children:[i(B,{color:"Text.default",type:"Normal",children:`${oe(e)}`}),i($,{size:15,onClick:()=>{t&&t(null)},color:l.colors.Text.default,children:i(re,{})})]}):i(be,{color:"Text.light",type:"Normal",children:n("common.search.timeFilterPlaceholder")})})})}function q(e,t){return t in e}const Ee={type:pe,department:Se,level:ge,term:ye},U=Object.fromEntries(Object.entries(Ee).map(([e,t])=>[e,t()])),xe=["term"],we=new Set(xe);function w(e){return we.has(e)}const N=U,Te=b(E)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function Ie({options:e,onChange:t,timeFilter:n,setTimeFilter:l,resetTrigger:u,onResetTriggerComplete:d}){const{t:p}=k(),f=new Set(e);function m(o){return f.has(o)}const[c,s]=g.useState(O),[S,I]=g.useState({});function O(){const o={};return e.filter(r=>r in N).forEach(r=>{const a=N[r].length;w(r)?o[r]=null:o[r]=Array(a).fill(!1)}),o}function R(o){const r={};return Object.keys(o).forEach(a=>{const C=U[a];w(a)?o[a]==null?r[a]=null:r[a]=C[o[a]]:r[a]=o[a].map((h,y)=>h?C[y]:null).filter(h=>h!=null)}),r}function A(o){const r={};for(const a in o){const C=o[a];C!=null&&(q(c,a)?w(a)?c[a]==null?delete r[a]:r[a]=C:!c[a].includes(!0)?delete r[a]:r[a]=C:a=="time"&&(r[a]=C))}return r}function D(o,r){s(a=>{if(w(r))return{...a,[r]:o};{const h=a[r].map((y,v)=>v===o?!y:y);return{...a,[r]:h}}})}function H(o){w(o)?s(r=>({...r,[o]:null})):s(r=>({...r,[o]:r[o].map(()=>!1)}))}function M(o,r){return w(r)?o[r]==null:!o[r].includes(!0)}return g.useEffect(()=>{const o=R(c),r={time:n};I(m("time")?{...o,...r}:o)},[c,n]),g.useEffect(()=>{const o=A(S);t(o)},[S]),g.useEffect(()=>{u&&(s(O()),m("time")&&l&&l(null),d())},[u]),i(Te,{direction:"column",align:"stretch",gap:12,children:e.map(o=>T(E,{direction:"column",gap:6,flex:"1 1 auto",children:[i(B,{type:"NormalBold",color:"Text.default",children:p(`common.search.${o}`)}),i(E,{direction:"column",gap:0,style:{width:"100%"},children:(()=>{if(q(c,o)&&o in c)return i(fe,{nameList:N[o].map(r=>r[1]),chosenList:c[o],handleOptionClick:r=>{D(r,o)},handleSelectAllClick:()=>{H(o)},isSingleSelect:w(o),selectedAll:M(c,o)});if(o=="time")return i(Ce,{timeFilter:n,setTimeFilter:l})})()})]},o))})}function W(e,t){if(e.inserted[t.name]===void 0)return e.insert("",t,e.sheet,!0)}function F(e,t,n){var l=[],u=K(e,l,n);return l.length<2?n:u+t(l)}var Be=function(t){var n=ee(t);n.sheet.speedy=function(f){this.isSpeedy=f},n.compat=!0;var l=function(){for(var m=arguments.length,c=new Array(m),s=0;s<m;s++)c[s]=arguments[s];var S=G(c,n.registered,void 0);return te(n,S,!1),n.key+"-"+S.name},u=function(){for(var m=arguments.length,c=new Array(m),s=0;s<m;s++)c[s]=arguments[s];var S=G(c,n.registered),I="animation-"+S.name;return W(n,{name:S.name,styles:"@keyframes "+I+"{"+S.styles+"}"}),I},d=function(){for(var m=arguments.length,c=new Array(m),s=0;s<m;s++)c[s]=arguments[s];var S=G(c,n.registered);W(n,S)},p=function(){for(var m=arguments.length,c=new Array(m),s=0;s<m;s++)c[s]=arguments[s];return F(n.registered,l,Oe(c))};return{css:l,cx:p,injectGlobal:d,keyframes:u,hydrate:function(m){m.forEach(function(c){n.inserted[c]=!0})},flush:function(){n.registered={},n.inserted={},n.sheet.flush()},sheet:n.sheet,cache:n,getRegisteredStyles:K.bind(null,n.registered),merge:F.bind(null,n.registered,l)}},Oe=function e(t){for(var n="",l=0;l<t.length;l++){var u=t[l];if(u!=null){var d=void 0;switch(typeof u){case"boolean":break;case"object":{if(Array.isArray(u))d=e(u);else{d="";for(var p in u)u[p]&&p&&(d&&(d+=" "),d+=p)}break}default:d=u}d&&(n&&(n+=" "),n+=d)}}return n},Ae=Be({key:"css"}),X=Ae.css;const je=X`
    border-color: red;
`,$e=X`
    background-color: rgba(245, 245, 245, 1);
`,ke=b.input`
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

    ${({disabled:e})=>e&&$e};
    ${({$hasError:e})=>e&&je};
`,Re=b.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,De=b.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,Z=g.forwardRef(({placeholder:e,errorMessage:t="",disabled:n=!1,value:l="",handleChange:u,setErrorStatus:d,$placeholderColor:p,...f},m)=>{const c=s=>{u?.(s.target.value)};return g.useEffect(()=>{d?.(!!t)},[t,d]),i(Re,{children:i(De,{children:i(ke,{ref:m,placeholder:e,$hasError:!!t,disabled:n,value:l,onChange:c,$placeholderColor:p,...f})})})});Z.displayName="TextInput";const He={hidden:{opacity:0,height:0},visible:{opacity:1,height:"auto"},exit:{opacity:0,height:0}};function Me({options:e,onSearch:t,SearchIcon:n,timeFilter:l,setTimeFilter:u}){const{t:d}=k(),p=V(),{query:f}=ne("GET","/department-options"),[m,c]=g.useState(!1),[s,S]=g.useState(""),[I,O]=g.useState({}),[R,A]=g.useState(!1);g.useEffect(()=>{l&&c(!0)},[l]);const D=(h,y,v)=>{h.nativeEvent.isComposing||h.key==="Enter"&&o(y,v)};function H(){O({}),S(""),A(!0)}function M(){c(!1)}function o(h,y){c(!1),t(r(h,y))}function r(h,y){const v={};return Object.keys(h).forEach(x=>{const j=h[x];j!=null&&(x=="time"?v[x]=j:(w(x)?v[x]=j[0]:v[x]=j.map(z=>z[0]),x=="department"&&(v[x]=v[x]?.map(z=>f.data?.departments.find(_=>_.code===z.toString())?.id))))}),v.keyword=y,v}function a(h){O(h)}function C(h,y){return h.includes("time")&&y!=null?{timeFilter:y,setTimeFilter:u}:{}}return T(E,{direction:"column",align:"stretch",justify:"stretch",gap:0,style:{maxHeight:"100%",width:"100%"},children:[T(E,{direction:"row",justify:"stretch",align:"center",onClick:()=>{m||c(!0)},gap:0,padding:"4px 16px",children:[n??i($,{size:17.5,color:p.colors.Highlight.default,onClick:()=>{},children:i(ie,{})}),i(Z,{value:s,handleChange:h=>{S(h)},placeholder:d("common.search.placeholder"),onKeyDown:h=>{D(h,I,s)}})]}),i(se,{children:i(ce.div,{initial:"hidden",animate:m?"visible":"hidden",exit:"exit",variants:He,transition:{duration:.3,ease:"easeInOut"},style:{display:"flex",flexShrink:1,width:"100%",minHeight:0},children:T(E,{direction:"column",align:"stretch",gap:16,padding:"16px",flex:"1 0 0",style:{overflowY:"auto",minHeight:0},children:[i(Ie,{options:e,onChange:a,...C(e,l),resetTrigger:R,onResetTriggerComplete:()=>{A(!1)}}),T(E,{direction:"row",justify:"flex-end",gap:8,children:[i(L,{$paddingLeft:24,$paddingTop:9,onClick:M,children:i(B,{children:d("common.search.close")})}),i(L,{$paddingLeft:24,$paddingTop:9,onClick:H,type:"state5",children:i(B,{children:d("common.search.reset")})}),i(L,{$paddingLeft:24,$paddingTop:9,type:"selected",onClick:()=>{o(I,s)},children:i(B,{children:d("common.search.submit")})})]})]})})})]})}const Qe=g.memo(Me,(e,t)=>e.options===t.options&&e.onSearch===t.onSearch&&e.SearchIcon===t.SearchIcon&&e.timeFilter===t.timeFilter&&e.setTimeFilter===t.setTimeFilter);function Ye(e){return!(e.keyword&&e.keyword.trim()!==""||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{ae as A,le as C,Qe as S,Ye as c};
//# sourceMappingURL=checkEmpty-DlandtlR.js.map
