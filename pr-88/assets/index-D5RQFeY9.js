import{a as t,j as o}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{F as i,n as c}from"./FlexWrapper-B6Hxm4Zw.js";import{L as d}from"./Line-VXlQtGVc.js";import{T as l}from"./Typography-DeI78L6T.js";import{u as s}from"./useIsDevice-DkhiZTMj.js";import{W as g}from"./Widget-e9ONaX_D.js";import{u as p}from"./useTranslation-DrmvPmDd.js";import"./chunk-UIGDSWPH-ClhI_Z4l.js";import"./index-D5Bp7q6o.js";import"./env-C4aK8OIb.js";const h=c(l)`
    min-height: 100px;
    flex-grow: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;function S(){const{t:n}=p(),{query:r}=s("GET","/schedules");return t(g,{direction:"column",gap:20,align:"stretch",padding:"30px",flex:"1 1 0",children:[o(i,{direction:"row",gap:0,children:o(l,{type:"BiggerBold",color:"Text.default",children:n("main.scheduleFeed.title")})}),t(i,{direction:"column",align:"stretch",gap:15,flex:"1 1 0",children:[!r.data||r.data.schedules.length===0?o(h,{type:"BiggerBold",color:"Text.default",children:n("main.scheduleFeed.noSchedules")}):null,r.data?.schedules.map((e,a)=>t(i,{direction:"column",align:"stretch",gap:15,children:[t(i,{direction:"row",justify:"space-between",gap:0,children:[t(l,{type:"BigBold",color:"Highlight.default",children:[e.from.getMonth()+1,"/",e.from.getDate()," -"," ",e.to.getMonth()+1,"/",e.to.getDate()]}),o(l,{type:"BigBold",color:"Text.default",children:e.name})]}),a<r.data.schedules.length-1?o(d,{height:1,color:"Line.default"}):null]},a))]})]})}export{S as default};
//# sourceMappingURL=index-D5RQFeY9.js.map
