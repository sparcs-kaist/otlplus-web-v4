import{j as d,a as e,F as s,n as v}from"./FlexWrapper-C0dsngQo.js";import{a}from"./chunk-UIGDSWPH-NakEPbl8.js";import{u as B,B as w}from"./weekdayEnum-SNVXd-6_.js";import{T as b,G}from"./TextInputArea-CFHeswcS.js";import{T as l}from"./Typography-DTsae4U-.js";import{u as x}from"./useIsDevice--kk7j9LI.js";import{W as j}from"./Widget-D7VP5HFl.js";import{T as k}from"./Trans-BWb067g3.js";import"./jsx-runtime-u17CrQMm.js";const W=v(s)`
    height: 173px;
    border-radius: 4px;
    background-color: ${({theme:t})=>t.colors.Background.Block.default};
`,$=v.div`
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 12px;
    row-gap: 8px;
    align-items: end;
`;function P(){const{query:t}=x("GET","/users/writable-review"),{requestFunction:y}=x("POST","/reviews",{onSuccess:f}),[o,u]=a.useState(""),[i,m]=a.useState(0),[n,h]=a.useState(0),[c,g]=a.useState(0),{t:r}=B();function f(){t.refetch(),u(""),m(0),h(0),g(0)}function S(){t.data&&y({lectureId:t.data.lectureId,content:o,grade:i,load:n,speech:c})}return t.data?d(j,{direction:"column",gap:20,padding:"23px 30px",align:"stretch",children:[e(l,{type:"BiggerBold",color:"Text.default",children:e(k,{i18nKey:"main.reviewSection.title",values:{lectureName:t.data?.name}})}),e(W,{direction:"column",align:"stretch",justify:"stretch",gap:0,children:e(b,{placeholder:r("main.reviewSection.placeholder"),type:"text",readOnly:!1,value:o,handleChange:u,area:!0})}),d(s,{direction:"column",gap:20,align:"stretch",children:[e($,{children:[[r("common.grade"),i,m],[r("common.load"),n,h],[r("common.speech"),c,g]].map(([p,T,R])=>d(a.Fragment,{children:[e(l,{type:"Normal",color:"Text.light",children:p}),e(s,{direction:"row",align:"center",gap:10,children:e(G,{score:T,setScore:R})},p)]},p))}),d(s,{direction:"row",justify:"flex-end",gap:12,children:[e(w,{type:"default",$paddingLeft:8,$paddingTop:8,onClick:f,children:e(l,{type:"Normal",children:r("main.reviewSection.writeAnother")})}),e(w,{type:o&&i&&c&&n?"default":"disabled",$paddingLeft:8,$paddingTop:8,onClick:S,children:e(l,{type:"Normal",color:o&&i&&c&&n?"Highlight.default":"Text.disable",children:r("common.upload")})})]})]})]}):null}export{P as default};
