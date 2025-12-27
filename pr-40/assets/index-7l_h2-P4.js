import{j as d,a as e,F as s,n as v}from"./FlexWrapper-C0dsngQo.js";import{a}from"./chunk-UIGDSWPH-NakEPbl8.js";import{k as w,u as B,B as x}from"./useIsDevice-LVy9rz7G.js";import{T as b,G as k}from"./TextInputArea-CliDlbfO.js";import{T as l}from"./Typography-DTsae4U-.js";import{W as G}from"./Widget-D7VP5HFl.js";import{T as j}from"./Trans-DFCbn_Bj.js";import"./jsx-runtime-u17CrQMm.js";const W=v(s)`
    height: 173px;
    border-radius: 4px;
    background-color: ${({theme:t})=>t.colors.Background.Block.default};
`,$=v.div`
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 12px;
    row-gap: 8px;
    align-items: end;
`;function O(){const{query:t}=w("GET","/users/writable-review"),{requestFunction:y}=w("POST","/reviews",{onSuccess:f}),[i,u]=a.useState(""),[o,m]=a.useState(0),[n,h]=a.useState(0),[c,g]=a.useState(0),{t:r}=B();function f(){t.refetch(),u(""),m(0),h(0),g(0)}function S(){t.data&&y({lectureId:t.data.lectureId,content:i,grade:o,load:n,speech:c})}return t.data?d(G,{direction:"column",gap:20,padding:"23px 30px",align:"stretch",children:[e(l,{type:"BiggerBold",color:"Text.default",children:e(j,{i18nKey:"main.reviewSection.title",values:{lectureName:t.data?.name}})}),e(W,{direction:"column",align:"stretch",justify:"stretch",gap:0,children:e(b,{placeholder:r("main.reviewSection.placeholder"),type:"text",readOnly:!1,value:i,handleChange:u,area:!0})}),d(s,{direction:"column",gap:20,align:"stretch",children:[e($,{children:[[r("common.grade"),o,m],[r("common.load"),n,h],[r("common.speech"),c,g]].map(([p,T,R])=>d(a.Fragment,{children:[e(l,{type:"Normal",color:"Text.light",children:p}),e(s,{direction:"row",align:"center",gap:10,children:e(k,{score:T,setScore:R})},p)]},p))}),d(s,{direction:"row",justify:"flex-end",gap:12,children:[e(x,{type:"default",$paddingLeft:8,$paddingTop:8,onClick:f,children:e(l,{type:"Normal",children:r("main.reviewSection.writeAnother")})}),e(x,{type:i&&o&&c&&n?"default":"disabled",$paddingLeft:8,$paddingTop:8,onClick:S,children:e(l,{type:"Normal",color:i&&o&&c&&n?"Highlight.default":"Text.disable",children:r("common.upload")})})]})]})]}):null}export{O as default};
