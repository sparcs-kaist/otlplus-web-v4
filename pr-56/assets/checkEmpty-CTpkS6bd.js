import{a as Q,j as i,b as w,u as ee,c as te,g as F,s as D,i as ne}from"./emotion-react-jsx-runtime.browser.esm-B1jPEyiZ.js";import{r as C}from"./chunk-UIGDSWPH-C2ktfSeF.js";import{n as x,F as E}from"./FlexWrapper-BDdwpRDn.js";import{T as $}from"./Typography-DRNB4_Lw.js";import{e as J,l as A,u as k,J as re,A as P,k as oe,B as G}from"./useIsDevice-y69o2Tr-.js";import{C as ie,S as ce,m as ae,A as se}from"./proxy-KxjUxlVF.js";const le=J(Q.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),me=J(Q.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),Y=x.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,de=x(Y)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,he=x(Y)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,ue=x.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,q=({selected:e=!1,chipText:o="",...t})=>i(e?he:de,{...t,children:i(()=>w(ue,{children:[o,e?i(A,{size:13,onClick:()=>{},children:i(me,{})}):i(A,{size:13,onClick:()=>{},children:i(le,{})})]}),{})}),pe=x.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,fe=({nameList:e,chosenList:o,handleOptionClick:t=()=>{},handleSelectAllClick:c=()=>{},selectedAll:u,isSingleSelect:d})=>{const{t:S}=k();return C.useEffect(()=>{!d&&!o.includes(!1)&&c()},[o]),w(pe,{children:[i(q,{selected:u,chipText:S("common.search.all"),onClick:c}),e.map((p,l)=>i(q,{selected:d?o==l:o[l],chipText:`${S(p)}`,onClick:()=>{t(l)}},l))]})},Se=()=>[["BR","common.type.basicRequiredShort"],["BE","common.type.basicElectiveShort"],["MR","common.type.majorRequiredShort"],["ME","common.type.majorElectiveShort"],["MGC","common.type.mandatoryGeneralCourseShort"],["HSE","common.type.humanitiesSocialElectiveShort"],["GR","common.type.generalRequiredShort"],["EG","common.type.electiveGraduateShort"],["OE","common.type.otherElectiveShort"],["ETC","common.type.etcShort"]],ge=()=>([...[...[["HSS","common.department.hssShort",200],["CE","common.department.ceShort",500],["BTM","common.department.btmShort",500],["ME","common.department.meShort",500],["PH","common.department.phShort",500],["BiS","common.department.bisShort",500],["IE","common.department.ieShort",500],["ID","common.department.idShort",500],["BS","common.department.bsShort",500],["MAS","common.department.masShort",500],["NQE","common.department.nqeShort",500],["EE","common.department.eeShort",500],["CS","common.department.csShort",500],["AE","common.department.aeShort",500],["CH","common.department.chShort",500],["CBE","common.department.cbeShort",500],["MS","common.department.msShort",500],["TS","common.department.tsShort",500],["SS","common.department.ssShort",500],["BCS","common.department.bcsShort",500],["ETC","common.department.etcShort",900]]].sort((o,t)=>o[2]-t[2]||o[1].localeCompare(t[1])).map(([o,t])=>[o,t])],[["HSS","common.department.hssShort"],["CE","common.department.ceShort"],["BTM","common.department.btmShort"],["ME","common.department.meShort"],["PH","common.department.phShort"],["BiS","common.department.bisShort"],["IE","common.department.ieShort"],["ID","common.department.idShort"],["BS","common.department.bsShort"],["MAS","common.department.masShort"],["NQE","common.department.nqeShort"],["EE","common.department.eeShort"],["CS","common.department.csShort"],["AE","common.department.aeShort"],["CH","common.department.chShort"],["CBE","common.department.cbeShort"],["MS","common.department.msShort"],["TS","common.department.tsShort"],["SS","common.department.ssShort"],["BCS","common.department.bcsShort"],["ETC","common.department.etcShort"]]),ve=()=>[[100,"common.level.100sShort"],[200,"common.level.200sShort"],[300,"common.level.300sShort"],[400,"common.level.400sShort"],[500,"common.level.500sShort"],[600,"common.level.600sShort"],[700,"common.level.700sShort"],[800,"common.level.800sShort"],[900,"common.level.900sShort"]],Ce=()=>[[3,"common.term.3yearsShort"],[1,"common.term.1yearShort"],[0,"common.term.thisSemesterShort"]];function N(e,o=!1){const t=Math.floor(e/60),c=(e%60).toString().padStart(2,"0");if(o){const u=t<12?P.t("common.am"):P.t("common.pm"),d=(t%12===0?12:t%12).toString().padStart(2,"0");return`${u} ${d}:${c}`}return t.toString().padStart(2,"0")+":"+c}function ye(e){return`${re(e.day)} ${N(e.begin,!0)} - ${N(e.end,!0)}`}const xe=x(E)`
    width: 100%;
`,Ee=x($)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`;function be({timeFilter:e,setTimeFilter:o}){const{t}=k(),c=ee();return i(E,{direction:"column",gap:0,style:{width:"100%"},children:i(xe,{direction:"row",gap:0,children:e?w(E,{direction:"row",justify:"space-between",gap:10,align:"center",children:[i($,{color:"Text.default",type:"Normal",children:`${ye(e)}`}),i(A,{size:15,onClick:()=>{o&&o(null)},color:c.colors.Text.default,children:i(ie,{})})]}):i(Ee,{color:"Text.light",type:"Normal",children:t("common.search.timeFilterPlaceholder")})})})}function W(e,o){return o in e}const we={type:Se,department:ge,level:ve,term:Ce},U=Object.fromEntries(Object.entries(we).map(([e,o])=>[e,o()])),Te=["term"],$e=new Set(Te);function b(e){return $e.has(e)}const L=U,Be=x(E)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function Oe({options:e,onChange:o,timeFilter:t,setTimeFilter:c,resetTrigger:u,onResetTriggerComplete:d}){const{t:S}=k(),p=new Set(e);function l(n){return p.has(n)}const[a,s]=C.useState(B),[g,T]=C.useState({});function B(){const n={};return e.filter(r=>r in L).forEach(r=>{const m=L[r].length;b(r)?n[r]=null:n[r]=Array(m).fill(!1)}),n}function O(n){const r={};return Object.keys(n).forEach(m=>{const h=U[m];b(m)?n[m]==null?r[m]=null:r[m]=h[n[m]]:r[m]=n[m].map((f,v)=>f?h[v]:null).filter(f=>f!=null)}),r}function H(n){const r={};for(const m in n){const h=n[m];h!=null&&(W(a,m)?b(m)?a[m]==null?delete r[m]:r[m]=h:!a[m].includes(!0)?delete r[m]:r[m]=h:m=="time"&&(r[m]=h))}return r}function M(n,r){s(m=>{if(b(r))return{...m,[r]:n};{const f=m[r].map((v,y)=>y===n?!v:v);return{...m,[r]:f}}})}function R(n){b(n)?s(r=>({...r,[n]:null})):s(r=>({...r,[n]:r[n].map(()=>!1)}))}function I(n,r){return b(r)?n[r]==null:!n[r].includes(!0)}return C.useEffect(()=>{const n=O(a),r={time:t};T(l("time")?{...n,...r}:n)},[a,t]),C.useEffect(()=>{const n=H(g);o(n)},[g]),C.useEffect(()=>{u&&(s(B()),l("time")&&c&&c(null),d())},[u]),i(Be,{direction:"column",align:"stretch",gap:12,children:e.map(n=>w(E,{direction:"column",gap:6,flex:"1 1 auto",children:[i($,{type:"NormalBold",color:"Text.default",children:S(`common.search.${n}`)}),i(E,{direction:"column",gap:0,style:{width:"100%"},children:(()=>{if(W(a,n)&&n in a)return i(fe,{nameList:L[n].map(r=>r[1]),chosenList:a[n],handleOptionClick:r=>{M(r,n)},handleSelectAllClick:()=>{R(n)},isSingleSelect:b(n),selectedAll:I(a,n)});if(n=="time")return i(be,{timeFilter:t,setTimeFilter:c})})()})]},n))})}function V(e,o){if(e.inserted[o.name]===void 0)return e.insert("",o,e.sheet,!0)}function K(e,o,t){var c=[],u=F(e,c,t);return c.length<2?t:u+o(c)}var Ie=function(o){var t=te(o);t.sheet.speedy=function(p){this.isSpeedy=p},t.compat=!0;var c=function(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];var g=D(a,t.registered,void 0);return ne(t,g,!1),t.key+"-"+g.name},u=function(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];var g=D(a,t.registered),T="animation-"+g.name;return V(t,{name:g.name,styles:"@keyframes "+T+"{"+g.styles+"}"}),T},d=function(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];var g=D(a,t.registered);V(t,g)},S=function(){for(var l=arguments.length,a=new Array(l),s=0;s<l;s++)a[s]=arguments[s];return K(t.registered,c,je(a))};return{css:c,cx:S,injectGlobal:d,keyframes:u,hydrate:function(l){l.forEach(function(a){t.inserted[a]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:F.bind(null,t.registered),merge:K.bind(null,t.registered,c)}},je=function e(o){for(var t="",c=0;c<o.length;c++){var u=o[c];if(u!=null){var d=void 0;switch(typeof u){case"boolean":break;case"object":{if(Array.isArray(u))d=e(u);else{d="";for(var S in u)u[S]&&S&&(d&&(d+=" "),d+=S)}break}default:d=u}d&&(t&&(t+=" "),t+=d)}}return t},Ae=Ie({key:"css"}),X=Ae.css;const ke=X`
    border-color: red;
`,He=X`
    background-color: rgba(245, 245, 245, 1);
`,Me=x.input`
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
        color: ${({$placeholderColor:e})=>e||"#aaaaaa"};
    }

    ${({disabled:e})=>e&&He};
    ${({$hasError:e})=>e&&ke};
`,Re=x.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,ze=x.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,Z=C.forwardRef(({placeholder:e,errorMessage:o="",disabled:t=!1,value:c="",handleChange:u,setErrorStatus:d,$placeholderColor:S,...p},l)=>{const a=s=>{u?.(s.target.value)};return C.useEffect(()=>{d?.(!!o)},[o,d]),i(Re,{children:i(ze,{children:i(Me,{ref:l,placeholder:e,$hasError:!!o,disabled:t,value:c,onChange:a,$placeholderColor:S,...p})})})});Z.displayName="TextInput";const De={hidden:{opacity:0,height:0},visible:{opacity:1,height:"auto"},exit:{opacity:0,height:0}};function Ve({options:e,onSearch:o,SearchIcon:t,timeFilter:c,setTimeFilter:u}){const{t:d}=k(),{query:S}=oe("GET","/department-options"),[p,l]=C.useState(!1),[a,s]=C.useState(""),[g,T]=C.useState({}),[B,O]=C.useState(!1);C.useEffect(()=>{c&&l(!0)},[c]);const H=(h,f,v)=>{h.nativeEvent.isComposing||h.key==="Enter"&&I(f,v)};function M(){T({}),s(""),O(!0)}function R(){l(!1)}function I(h,f){l(!1),o(n(h,f))}function n(h,f){const v={};return Object.keys(h).forEach(y=>{const j=h[y];j!=null&&(y=="time"?v[y]=j:(b(y)?v[y]=j[0]:v[y]=j.map(z=>z[0]),y=="department"&&(v[y]=v[y]?.map(z=>S.data?.departments.find(_=>_.code===z.toString())?.id))))}),v.keyword=f,v}function r(h){T(h)}function m(h,f){return h.includes("time")&&f!=null?{timeFilter:f,setTimeFilter:u}:{}}return w(E,{direction:"column",align:"stretch",justify:"stretch",gap:0,style:{maxHeight:"100%",width:"100%"},children:[w(E,{direction:"row",justify:"stretch",align:"center",onClick:()=>{p||l(!0)},gap:0,padding:"4px 16px",children:[t??i(A,{size:17.5,color:"#E54C65",onClick:()=>{},children:i(ce,{})}),i(Z,{value:a,handleChange:h=>{s(h)},placeholder:d("common.search.placeholder"),onKeyDown:h=>{H(h,g,a)}})]}),i(se,{children:i(ae.div,{initial:"hidden",animate:p?"visible":"hidden",exit:"exit",variants:De,transition:{duration:.3,ease:"easeInOut"},style:{display:"flex",flexShrink:1,width:"100%",minHeight:0},children:w(E,{direction:"column",align:"stretch",gap:16,padding:"16px",flex:"1 0 0",style:{overflowY:"auto",minHeight:0},children:[i(Oe,{options:e,onChange:r,...m(e,c),resetTrigger:B,onResetTriggerComplete:()=>{O(!1)}}),w(E,{direction:"row",justify:"flex-end",gap:8,children:[i(G,{$paddingLeft:24,$paddingTop:9,onClick:R,children:i($,{children:d("common.search.close")})}),i(G,{$paddingLeft:24,$paddingTop:9,onClick:M,type:"state5",children:i($,{children:d("common.search.reset")})}),i(G,{$paddingLeft:24,$paddingTop:9,type:"selected",onClick:()=>{I(g,a)},children:i($,{children:d("common.search.submit")})})]})]})})})]})}function Ke(e){return!(e.keyword&&e.keyword.trim()!==""||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{le as A,me as C,Ve as S,Ke as c};
//# sourceMappingURL=checkEmpty-CTpkS6bd.js.map
