import{n as b,a as i,j as y,F as x,c as _,g as K,s as z,i as ee}from"./FlexWrapper-C0dsngQo.js";import{a as E}from"./chunk-UIGDSWPH-NakEPbl8.js";import{T as O}from"./Typography-DTsae4U-.js";import{e as N,l as j,u as H,a1 as te,x as R,k as ne,B as G}from"./useIsDevice-BXIifVfm.js";import{j as V}from"./jsx-runtime-u17CrQMm.js";import{C as re,S as oe,m as ie,A as ce}from"./proxy-VcwGC8hc.js";const ae=N(V.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),se=N(V.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})),Q=b.div`
    display: inline-flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    line-height: 17.5px;
    font-weight: 400;
`,le=b(Q)`
    color: ${({theme:e})=>e.colors.Text.light};
    background: ${({theme:e})=>e.colors.Background.Button.default};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }
`,me=b(Q)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    cursor: pointer;

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Button.highlightDark};
    }
`,de=b.div`
    display: inline-flex;
    flex-direction: row;
    gap: 6px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`,W=({selected:e=!1,chipText:o="",...t})=>i(e?me:le,{...t,children:i(()=>y(de,{children:[o,e?i(j,{size:13,children:i(se,{})}):i(j,{size:13,children:i(ae,{})})]}),{})}),he=b.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
`,ue=({nameList:e,chosenList:o,handleOptionClick:t=()=>{},handleSelectAllClick:d=()=>{},selectedAll:u,isSingleSelect:l})=>{const{t:C}=H();return E.useEffect(()=>{!l&&!o.includes(!1)&&d()},[o]),y(he,{children:[i(W,{selected:u,chipText:C("common.search.all"),onClick:d}),e.map((h,a)=>i(W,{selected:l?o==a:o[a],chipText:`${C(h)}`,onClick:()=>{t(a)}},a))]})},pe=()=>[["BR","common.type.basicRequiredShort"],["BE","common.type.basicElectiveShort"],["MR","common.type.majorRequiredShort"],["ME","common.type.majorElectiveShort"],["MGC","common.type.mandatoryGeneralCourseShort"],["HSE","common.type.humanitiesSocialElectiveShort"],["GR","common.type.generalRequiredShort"],["EG","common.type.electiveGraduateShort"],["OE","common.type.otherElectiveShort"],["ETC","common.type.etcShort"]],fe=()=>([...[...[["HSS","common.department.hssShort",200],["CE","common.department.ceShort",500],["BTM","common.department.btmShort",500],["ME","common.department.meShort",500],["PH","common.department.phShort",500],["BiS","common.department.bisShort",500],["IE","common.department.ieShort",500],["ID","common.department.idShort",500],["BS","common.department.bsShort",500],["MAS","common.department.masShort",500],["NQE","common.department.nqeShort",500],["EE","common.department.eeShort",500],["CS","common.department.csShort",500],["AE","common.department.aeShort",500],["CH","common.department.chShort",500],["CBE","common.department.cbeShort",500],["MS","common.department.msShort",500],["TS","common.department.tsShort",500],["SS","common.department.ssShort",500],["BCS","common.department.bcsShort",500],["ETC","common.department.etcShort",900]]].sort((o,t)=>o[2]-t[2]||o[1].localeCompare(t[1])).map(([o,t])=>[o,t])],[["HSS","common.department.hssShort"],["CE","common.department.ceShort"],["BTM","common.department.btmShort"],["ME","common.department.meShort"],["PH","common.department.phShort"],["BiS","common.department.bisShort"],["IE","common.department.ieShort"],["ID","common.department.idShort"],["BS","common.department.bsShort"],["MAS","common.department.masShort"],["NQE","common.department.nqeShort"],["EE","common.department.eeShort"],["CS","common.department.csShort"],["AE","common.department.aeShort"],["CH","common.department.chShort"],["CBE","common.department.cbeShort"],["MS","common.department.msShort"],["TS","common.department.tsShort"],["SS","common.department.ssShort"],["BCS","common.department.bcsShort"],["ETC","common.department.etcShort"]]),Se=()=>[[100,"common.level.100sShort"],[200,"common.level.200sShort"],[300,"common.level.300sShort"],[400,"common.level.400sShort"],[500,"common.level.500sShort"],[600,"common.level.600sShort"],[700,"common.level.700sShort"],[800,"common.level.800sShort"],[900,"common.level.900sShort"]],ge=()=>[[3,"common.term.3yearsShort"],[1,"common.term.1yearShort"],[0,"common.term.thisSemesterShort"]],ve=new Map([["Mon","월요일"],["Tue","화요일"],["Wed","수요일"],["Thu","목요일"],["Fri","금요일"],["Sat","토요일"],["Sun","일요일"]]);function L(e,o=!1){const t=Math.floor(e/60),d=(e%60).toString().padStart(2,"0");if(o){const u=t<12?R.t("common.am"):R.t("common.pm"),l=(t%12===0?12:t%12).toString().padStart(2,"0");return`${u} ${l}:${d}`}return t.toString().padStart(2,"0")+":"+d}function J(e){const o=te[e.day];return`${ve.get(o)} ${L(e.begin,!0)} - ${L(e.end,!0)}`}const Ce=b(x)``;function xe({timeFilter:e,setTimeFilter:o}){return i(x,{direction:"column",gap:0,children:i(Ce,{direction:"row",gap:0,children:e==null?i(O,{children:"클릭 후 시간표에서 드래그하여 선택"}):y(x,{direction:"row",justify:"space-between",gap:0,children:[`${J(e)}`,i(j,{size:17.5,onClick:()=>{o(null)},children:i(re,{})})]})})})}function q(e,o){return o in e}const ye={type:pe,department:fe,level:Se,term:ge},U=Object.fromEntries(Object.entries(ye).map(([e,o])=>[e,o()])),Ee=["term"],be=new Set(Ee);function w(e){return be.has(e)}const D=U,we=b(x)`
    flex: 1 1 auto;
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;function Te({options:e,onChange:o,timeFilter:t,setTimeFilter:d}){const{t:u}=H(),l=new Set(e);function C(n){return l.has(n)}const[h,a]=E.useState(v),[p,m]=E.useState({});function v(){const n={};return e.filter(r=>r in D).forEach(r=>{const s=D[r].length;w(r)?n[r]=null:n[r]=Array(s).fill(!1)}),n}function T(n){const r={};return Object.keys(n).forEach(s=>{const c=U[s];w(s)?n[s]==null?r[s]=null:r[s]=c[n[s]]:r[s]=n[s].map((f,S)=>f?c[S]:null).filter(f=>f!=null)}),r}function I(n){const r={};for(const s in n){const c=n[s];c!=null&&(q(h,s)?w(s)?h[s]==null?delete r[s]:r[s]=c:!h[s].includes(!0)?delete r[s]:r[s]=c:s=="time"&&(r[s]=c))}return r}function A(n,r){a(s=>{if(w(r))return{...s,[r]:n};{const f=s[r].map((S,g)=>g===n?!S:S);return{...s,[r]:f}}})}function B(n){w(n)?a(r=>({...r,[n]:null})):a(r=>({...r,[n]:r[n].map(()=>!1)}))}function M(n,r){return w(r)?n[r]==null:!n[r].includes(!0)}return E.useEffect(()=>{const n=T(h),r={time:t};m(C("time")?{...n,...r}:n)},[h,t]),E.useEffect(()=>{const n=I(p);o(n)},[p]),i(we,{direction:"column",align:"stretch",gap:12,children:e.map(n=>y(x,{direction:"column",gap:6,children:[i(O,{type:"NormalBold",color:"Text.default",children:u(`common.search.${n}`)}),i(x,{direction:"column",gap:0,children:(()=>{if(q(h,n)&&n in h)return i(ue,{nameList:D[n].map(r=>r[1]),chosenList:h[n],handleOptionClick:r=>{A(r,n)},handleSelectAllClick:()=>{B(n)},isSingleSelect:w(n),selectedAll:M(h,n)});if(n=="time"&&t!=null)return i(xe,{timeFilter:t,setTimeFilter:d})})()})]},n))})}function P(e,o){if(e.inserted[o.name]===void 0)return e.insert("",o,e.sheet,!0)}function F(e,o,t){var d=[],u=K(e,d,t);return d.length<2?t:u+o(d)}var $e=function(o){var t=_(o);t.sheet.speedy=function(h){this.isSpeedy=h},t.compat=!0;var d=function(){for(var a=arguments.length,p=new Array(a),m=0;m<a;m++)p[m]=arguments[m];var v=z(p,t.registered,void 0);return ee(t,v,!1),t.key+"-"+v.name},u=function(){for(var a=arguments.length,p=new Array(a),m=0;m<a;m++)p[m]=arguments[m];var v=z(p,t.registered),T="animation-"+v.name;return P(t,{name:v.name,styles:"@keyframes "+T+"{"+v.styles+"}"}),T},l=function(){for(var a=arguments.length,p=new Array(a),m=0;m<a;m++)p[m]=arguments[m];var v=z(p,t.registered);P(t,v)},C=function(){for(var a=arguments.length,p=new Array(a),m=0;m<a;m++)p[m]=arguments[m];return F(t.registered,d,Oe(p))};return{css:d,cx:C,injectGlobal:l,keyframes:u,hydrate:function(a){a.forEach(function(p){t.inserted[p]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:K.bind(null,t.registered),merge:F.bind(null,t.registered,d)}},Oe=function e(o){for(var t="",d=0;d<o.length;d++){var u=o[d];if(u!=null){var l=void 0;switch(typeof u){case"boolean":break;case"object":{if(Array.isArray(u))l=e(u);else{l="";for(var C in u)u[C]&&C&&(l&&(l+=" "),l+=C)}break}default:l=u}l&&(t&&(t+=" "),t+=l)}}return t},Be=$e({key:"css"}),X=Be.css;const je=X`
    border-color: red;
`,Ie=X`
    background-color: rgba(245, 245, 245, 1);
`,Ae=b.input`
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
`,Me=b.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,ke=b.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,Y=E.forwardRef(({placeholder:e,errorMessage:o="",disabled:t=!1,value:d="",handleChange:u,setErrorStatus:l,$placeholderColor:C,...h},a)=>{const p=m=>{u?.(m.target.value)};return E.useEffect(()=>{l?.(!!o)},[o,l]),i(Me,{children:i(ke,{children:i(Ae,{ref:a,placeholder:e,$hasError:!!o,disabled:t,value:d,onChange:p,$placeholderColor:C,...h})})})});Y.displayName="TextInput";const ze={hidden:{opacity:0,height:0},visible:{opacity:1,height:"auto"},exit:{opacity:0,height:0}};function qe({options:e,onSearch:o,SearchIcon:t,timeFilter:d,setTimeFilter:u}){const{t:l}=H(),{query:C}=ne("GET","/department-options"),[h,a]=E.useState(!1),[p,m]=E.useState(""),[v,T]=E.useState({}),I=(c,f,S)=>{c.nativeEvent.isComposing||c.key==="Enter"&&B(f,S)};function A(){a(!1),T({})}function B(c,f){a(!1),o(n(c,f)),T({})}function M(c,f){let S="";const g=c[f];return g!=null&&(f=="time"&&(S=`${J(g)}`),w(f)?S=l(g[1]):S=g.map($=>l($[1])).join(", ")),S}function n(c,f){const S={};return Object.keys(c).forEach(g=>{const $=c[g];$!=null&&(g=="time"?S[g]=$:(w(g)?S[g]=$[0]:S[g]=$.map(k=>k[0]),g=="department"&&(S[g]=S[g]?.map(k=>C.data?.departments.find(Z=>Z.code===k.toString())?.id))))}),S.keyword=f,S}function r(c){T(c)}function s(c,f){return c.includes("time")&&f!=null?{timeFilter:f,setTimeFilter:u}:{}}return y(x,{direction:"column",align:"stretch",gap:0,style:{maxHeight:"100%"},children:[y(x,{direction:"column",align:"stretch",onClick:()=>{h||a(!0)},gap:0,padding:"4px 16px",children:[y(x,{direction:"row",align:"center",gap:0,children:[t??i(j,{size:17.5,color:"#E54C65",onClick:()=>{},children:i(oe,{})}),i(Y,{value:p,handleChange:c=>{m(c)},placeholder:l("common.search.placeholder"),onKeyDown:c=>{I(c,v,p)}})]}),i(x,{direction:"row",gap:8,align:"center",children:Object.keys(v).map(c=>y(x,{direction:"row",gap:0,padding:"8px 0px 0px 0px",children:[y(O,{type:"SmallerBold",children:[l(`common.search.${c}`),": "]}),i(O,{type:"Smaller",children:M(v,c)})]},c))})]}),i(ce,{children:h&&y(ie.div,{initial:"hidden",animate:"visible",exit:"exit",variants:ze,transition:{duration:.3,ease:"easeInOut"},style:{overflow:"hidden",display:"flex",gap:"16px",flexDirection:"column",alignItems:"stretch",padding:"16px",flexShrink:1},children:[i(Te,{options:e,onChange:r,...s(e,d)}),y(x,{direction:"row",justify:"flex-end",gap:8,children:[i(G,{$paddingLeft:24,$paddingTop:9,onClick:A,children:i(O,{children:l("common.search.cancel")})}),i(G,{$paddingLeft:24,$paddingTop:9,type:"selected",onClick:()=>{B(v,p)},children:i(O,{children:l("common.search.submit")})})]})]})})]})}function Pe(e){return!(e.keyword&&e.keyword.trim()!==""||e.type&&e.type.length>0||e.department&&e.department.length>0||e.level&&e.level.length>0||e.term!==void 0||e.time!==void 0)}export{qe as S,Pe as c};
