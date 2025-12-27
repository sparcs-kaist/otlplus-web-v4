import{n as y,a as c,j as b,F as x,u as X,c as Z,g as W,s as M,i as _}from"./FlexWrapper-C0dsngQo.js";import{a as C}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T as B}from"./Typography-DTsae4U-.js";import{e as V,l as O,u as j,G as ee,x as G,k as te,B as R}from"./useIsDevice-B7HewLxx.js";import{j as F}from"./jsx-runtime-u17CrQMm.js";import{C as ne,S as re,m as oe,A as ie}from"./proxy-DQl5GyMC.js";const ce=V(F.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),ae=V(F.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),K=y.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,se=y(K)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,le=y(K)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,me=y.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,D=({selected:e=!1,chipText:i="",...t})=>c(e?le:se,{...t,children:c(()=>b(me,{children:[i,e?c(O,{size:13,onClick:()=>{},children:c(ae,{})}):c(O,{size:13,onClick:()=>{},children:c(ce,{})})]}),{})}),de=y.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,he=({nameList:e,chosenList:i,handleOptionClick:t=()=>{},handleSelectAllClick:s=()=>{},selectedAll:h,isSingleSelect:m})=>{const{t:S}=j();return C.useEffect(()=>{!m&&!i.includes(!1)&&s()},[i]),b(de,{children:[c(D,{selected:h,chipText:S("common.search.all"),onClick:s}),e.map((d,a)=>c(D,{selected:m?i==a:i[a],chipText:`${S(d)}`,onClick:()=>{t(a)}},a))]})},ue=()=>[["BR","common.type.basicRequiredShort"],["BE","common.type.basicElectiveShort"],["MR","common.type.majorRequiredShort"],["ME","common.type.majorElectiveShort"],["MGC","common.type.mandatoryGeneralCourseShort"],["HSE","common.type.humanitiesSocialElectiveShort"],["GR","common.type.generalRequiredShort"],["EG","common.type.electiveGraduateShort"],["OE","common.type.otherElectiveShort"],["ETC","common.type.etcShort"]],pe=()=>([...[...[["HSS","common.department.hssShort",200],["CE","common.department.ceShort",500],["BTM","common.department.btmShort",500],["ME","common.department.meShort",500],["PH","common.department.phShort",500],["BiS","common.department.bisShort",500],["IE","common.department.ieShort",500],["ID","common.department.idShort",500],["BS","common.department.bsShort",500],["MAS","common.department.masShort",500],["NQE","common.department.nqeShort",500],["EE","common.department.eeShort",500],["CS","common.department.csShort",500],["AE","common.department.aeShort",500],["CH","common.department.chShort",500],["CBE","common.department.cbeShort",500],["MS","common.department.msShort",500],["TS","common.department.tsShort",500],["SS","common.department.ssShort",500],["BCS","common.department.bcsShort",500],["ETC","common.department.etcShort",900]]].sort((i,t)=>i[2]-t[2]||i[1].localeCompare(t[1])).map(([i,t])=>[i,t])],[["HSS","common.department.hssShort"],["CE","common.department.ceShort"],["BTM","common.department.btmShort"],["ME","common.department.meShort"],["PH","common.department.phShort"],["BiS","common.department.bisShort"],["IE","common.department.ieShort"],["ID","common.department.idShort"],["BS","common.department.bsShort"],["MAS","common.department.masShort"],["NQE","common.department.nqeShort"],["EE","common.department.eeShort"],["CS","common.department.csShort"],["AE","common.department.aeShort"],["CH","common.department.chShort"],["CBE","common.department.cbeShort"],["MS","common.department.msShort"],["TS","common.department.tsShort"],["SS","common.department.ssShort"],["BCS","common.department.bcsShort"],["ETC","common.department.etcShort"]]),fe=()=>[[100,"common.level.100sShort"],[200,"common.level.200sShort"],[300,"common.level.300sShort"],[400,"common.level.400sShort"],[500,"common.level.500sShort"],[600,"common.level.600sShort"],[700,"common.level.700sShort"],[800,"common.level.800sShort"],[900,"common.level.900sShort"]],Se=()=>[[3,"common.term.3yearsShort"],[1,"common.term.1yearShort"],[0,"common.term.thisSemesterShort"]];function P(e,i=!1){const t=Math.floor(e/60),s=(e%60).toString().padStart(2,"0");if(i){const h=t<12?G.t("common.am"):G.t("common.pm"),m=(t%12===0?12:t%12).toString().padStart(2,"0");return`${h} ${m}:${s}`}return t.toString().padStart(2,"0")+":"+s}function ge(e){return`${ee(e.day)} ${P(e.begin,!0)} - ${P(e.end,!0)}`}const ve=y(x)`
    width: 100%;
`,Ce=y(B)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`;function ye({timeFilter:e,setTimeFilter:i}){const{t}=j(),s=X();return c(x,{direction:"column",gap:0,style:{width:"100%"},children:c(ve,{direction:"row",gap:0,children:e?b(x,{direction:"row",justify:"space-between",gap:10,align:"center",children:[c(B,{color:"Text.default",type:"Normal",children:`${ge(e)}`}),c(O,{size:15,onClick:()=>{i&&i(null)},color:s.colors.Text.default,children:c(ne,{})})]}):c(Ce,{color:"Text.light",type:"Normal",children:t("common.search.timeFilterPlaceholder")})})})}function q(e,i){return i in e}const xe={type:ue,department:pe,level:fe,term:Se},Q=Object.fromEntries(Object.entries(xe).map(([e,i])=>[e,i()])),Ee=["term"],be=new Set(Ee);function E(e){return be.has(e)}const z=Q,we=y(x)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function Te({options:e,onChange:i,timeFilter:t,setTimeFilter:s}){const{t:h}=j(),m=new Set(e);function S(n){return m.has(n)}const[d,a]=C.useState(v),[u,l]=C.useState({});function v(){const n={};return e.filter(o=>o in z).forEach(o=>{const r=z[o].length;E(o)?n[o]=null:n[o]=Array(r).fill(!1)}),n}function w(n){const o={};return Object.keys(n).forEach(r=>{const p=Q[r];E(r)?n[r]==null?o[r]=null:o[r]=p[n[r]]:o[r]=n[r].map((f,g)=>f?p[g]:null).filter(f=>f!=null)}),o}function I(n){const o={};for(const r in n){const p=n[r];p!=null&&(q(d,r)?E(r)?d[r]==null?delete o[r]:o[r]=p:!d[r].includes(!0)?delete o[r]:o[r]=p:r=="time"&&(o[r]=p))}return o}function A(n,o){a(r=>{if(E(o))return{...r,[o]:n};{const f=r[o].map((g,T)=>T===n?!g:g);return{...r,[o]:f}}})}function $(n){E(n)?a(o=>({...o,[n]:null})):a(o=>({...o,[n]:o[n].map(()=>!1)}))}function k(n,o){return E(o)?n[o]==null:!n[o].includes(!0)}return C.useEffect(()=>{const n=w(d),o={time:t};l(S("time")?{...n,...o}:n)},[d,t]),C.useEffect(()=>{const n=I(u);i(n)},[u]),c(we,{direction:"column",align:"stretch",gap:12,children:e.map(n=>b(x,{direction:"column",gap:6,flex:"1 1 auto",children:[c(B,{type:"NormalBold",color:"Text.default",children:h(`common.search.${n}`)}),c(x,{direction:"column",gap:0,style:{width:"100%"},children:(()=>{if(q(d,n)&&n in d)return c(he,{nameList:z[n].map(o=>o[1]),chosenList:d[n],handleOptionClick:o=>{A(o,n)},handleSelectAllClick:()=>{$(n)},isSingleSelect:E(n),selectedAll:k(d,n)});if(n=="time")return c(ye,{timeFilter:t,setTimeFilter:s})})()})]},n))})}function L(e,i){if(e.inserted[i.name]===void 0)return e.insert("",i,e.sheet,!0)}function N(e,i,t){var s=[],h=W(e,s,t);return s.length<2?t:h+i(s)}var Be=function(i){var t=Z(i);t.sheet.speedy=function(d){this.isSpeedy=d},t.compat=!0;var s=function(){for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];var v=M(u,t.registered,void 0);return _(t,v,!1),t.key+"-"+v.name},h=function(){for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];var v=M(u,t.registered),w="animation-"+v.name;return L(t,{name:v.name,styles:"@keyframes "+w+"{"+v.styles+"}"}),w},m=function(){for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];var v=M(u,t.registered);L(t,v)},S=function(){for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return N(t.registered,s,$e(u))};return{css:s,cx:S,injectGlobal:m,keyframes:h,hydrate:function(a){a.forEach(function(u){t.inserted[u]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:W.bind(null,t.registered),merge:N.bind(null,t.registered,s)}},$e=function e(i){for(var t="",s=0;s<i.length;s++){var h=i[s];if(h!=null){var m=void 0;switch(typeof h){case"boolean":break;case"object":{if(Array.isArray(h))m=e(h);else{m="";for(var S in h)h[S]&&S&&(m&&(m+=" "),m+=S)}break}default:m=h}m&&(t&&(t+=" "),t+=m)}}return t},Oe=Be({key:"css"}),Y=Oe.css;const je=Y`
    border-color: red;
`,Ie=Y`
    background-color: rgba(245, 245, 245, 1);
`,Ae=y.input`
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

    ${({disabled:e})=>e&&Ie};
    ${({$hasError:e})=>e&&je};
`,ke=y.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,He=y.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,J=C.forwardRef(({placeholder:e,errorMessage:i="",disabled:t=!1,value:s="",handleChange:h,setErrorStatus:m,$placeholderColor:S,...d},a)=>{const u=l=>{h?.(l.target.value)};return C.useEffect(()=>{m?.(!!i)},[i,m]),c(ke,{children:c(He,{children:c(Ae,{ref:a,placeholder:e,$hasError:!!i,disabled:t,value:s,onChange:u,$placeholderColor:S,...d})})})});J.displayName="TextInput";const Me={hidden:{opacity:0,height:0},visible:{opacity:1,height:"auto"},exit:{opacity:0,height:0}};function Le({options:e,onSearch:i,SearchIcon:t,timeFilter:s,setTimeFilter:h}){const{t:m}=j(),{query:S}=te("GET","/department-options"),[d,a]=C.useState(!1),[u,l]=C.useState(""),[v,w]=C.useState({});C.useEffect(()=>{s&&a(!0)},[s]);const I=(r,p,f)=>{r.nativeEvent.isComposing||r.key==="Enter"&&$(p,f)};function A(){a(!1)}function $(r,p){a(!1),i(k(r,p))}function k(r,p){const f={};return Object.keys(r).forEach(g=>{const T=r[g];T!=null&&(g=="time"?f[g]=T:(E(g)?f[g]=T[0]:f[g]=T.map(H=>H[0]),g=="department"&&(f[g]=f[g]?.map(H=>S.data?.departments.find(U=>U.code===H.toString())?.id))))}),f.keyword=p,f}function n(r){w(r)}function o(r,p){return r.includes("time")&&p!=null?{timeFilter:p,setTimeFilter:h}:{}}return b(x,{direction:"column",align:"stretch",justify:"stretch",gap:0,style:{maxHeight:"100%",width:"100%"},children:[b(x,{direction:"row",justify:"stretch",align:"center",onClick:()=>{d||a(!0)},gap:0,padding:"4px 16px",children:[t??c(O,{size:17.5,color:"#E54C65",onClick:()=>{},children:c(re,{})}),c(J,{value:u,handleChange:r=>{l(r)},placeholder:m("common.search.placeholder"),onKeyDown:r=>{I(r,v,u)}})]}),c(ie,{children:c(oe.div,{initial:"hidden",animate:d?"visible":"hidden",exit:"exit",variants:Me,transition:{duration:.3,ease:"easeInOut"},style:{display:"flex",flexShrink:1,width:"100%",minHeight:0},children:b(x,{direction:"column",align:"stretch",gap:16,padding:"16px",flex:"1 0 0",style:{overflowY:"auto",minHeight:0},children:[c(Te,{options:e,onChange:n,...o(e,s)}),b(x,{direction:"row",justify:"flex-end",gap:8,children:[c(R,{$paddingLeft:24,$paddingTop:9,onClick:A,children:c(B,{children:m("common.search.cancel")})}),c(R,{$paddingLeft:24,$paddingTop:9,type:"selected",onClick:()=>{$(v,u)},children:c(B,{children:m("common.search.submit")})})]})]})})})]})}function Ne(e){return!(e.keyword&&e.keyword.trim()!==""||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{ce as A,ae as C,Le as S,Ne as c};
