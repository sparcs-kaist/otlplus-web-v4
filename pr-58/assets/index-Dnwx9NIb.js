import{b as s,j as e}from"./emotion-react-jsx-runtime.browser.esm-B1jPEyiZ.js";import{r as o}from"./chunk-UIGDSWPH-C2ktfSeF.js";import{F as l,n as S}from"./FlexWrapper-BDdwpRDn.js";import{u as B,B as x}from"./media-ipby3jlC.js";import{T as G,G as j}from"./TextInputArea-TX2tEktp.js";import{T as d}from"./Typography-DRNB4_Lw.js";import{u as v}from"./useIsDevice-BpsLcui9.js";import{u as k}from"./useUserStore-CAEcH707.js";import{W}from"./Widget-Cls_3vn9.js";import{T as $}from"./Trans-BsQoHG0b.js";import"./env-dr94Te9_.js";const F=S(l)`
    height: 173px;
    border-radius: 4px;
    background-color: ${({theme:p})=>p.colors.Background.Block.default};
`,I=S.div`
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 12px;
    row-gap: 8px;
    align-items: end;
`;function z(){const{status:p}=k(),{query:r}=v("GET","/users/writable-review",{enabled:p==="success"}),{requestFunction:y}=v("POST","/reviews",{onSuccess:w}),[a,m]=o.useState(""),[i,h]=o.useState(0),[n,g]=o.useState(0),[c,f]=o.useState(0),{t}=B();function w(){r.refetch(),m(""),h(0),g(0),f(0)}function T(){r.data&&y({lectureId:r.data.lectureId,content:a,grade:i,load:n,speech:c})}return r.data?s(W,{direction:"column",gap:20,padding:"23px 30px",align:"stretch",children:[e(d,{type:"BiggerBold",color:"Text.default",children:e($,{i18nKey:"main.reviewSection.title",values:{lectureName:r.data?.name}})}),e(F,{direction:"column",align:"stretch",justify:"stretch",gap:0,children:e(G,{placeholder:t("main.reviewSection.placeholder"),type:"text",readOnly:!1,value:a,handleChange:m,area:!0})}),s(l,{direction:"column",gap:20,align:"stretch",children:[e(I,{children:[[t("common.grade"),i,h],[t("common.load"),n,g],[t("common.speech"),c,f]].map(([u,b,R])=>s(o.Fragment,{children:[e(d,{type:"Normal",color:"Text.light",children:u}),e(l,{direction:"row",align:"center",gap:10,children:e(j,{score:b,setScore:R})},u)]},u))}),s(l,{direction:"row",justify:"flex-end",gap:12,children:[e(x,{type:"default",$paddingLeft:8,$paddingTop:8,onClick:w,children:e(d,{type:"Normal",children:t("main.reviewSection.writeAnother")})}),e(x,{type:a&&i&&c&&n?"default":"disabled",$paddingLeft:8,$paddingTop:8,onClick:T,children:e(d,{type:"Normal",color:a&&i&&c&&n?"Highlight.default":"Text.disable",children:t("common.upload")})})]})]})]}):null}export{z as default};
//# sourceMappingURL=index-Dnwx9NIb.js.map
