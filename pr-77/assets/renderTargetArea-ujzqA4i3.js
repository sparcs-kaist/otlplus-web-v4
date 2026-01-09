import{j as m,a as B}from"./emotion-react-jsx-runtime.browser.esm-D2PZwVTC.js";import{r as S}from"./chunk-UIGDSWPH-ClhI_Z4l.js";import{n as C}from"./FlexWrapper-B6Hxm4Zw.js";import{C as R}from"./proxy-CTl_LD76.js";import{I as L}from"./useIsDevice-D3uk3gDK.js";function Q(o){return o.forEach((e,s)=>{let t=[];"timeBlocks"in e?t=e.timeBlocks:t=e.classes,t.forEach((i,r)=>{if(i.end>24)return!0})}),!1}const U=(o,e,s,t,i,r,d,f)=>{const w=[],h=o-1,p=e-1;for(let u=0;u<o;u++){const l=[],a=u%2===0,c=u===h;for(let n=0;n<e;n++){const g=!r.includes(n+f),b=n===p;l.push(m("div",{style:{width:g?s:d,height:t,display:"inline-block",textAlign:"center",borderTop:g?a?"1px solid rgba(232, 232, 232, 1)":"1px dashed rgba(232, 232, 232, 1)":void 0,borderBottom:g&&c?"1px solid rgba(232, 232, 232, 1)":void 0,marginRight:b?void 0:i}},n))}w.push(m("div",{style:{display:"flex"},children:l},u))}return w},M=o=>[o?.red?.[1],o?.red?.[2],o?.orange?.[1],o?.orange?.[2],o?.yellow?.[1],o?.yellow?.[2],o?.green?.[1],o?.green?.[2],o?.green?.[3],o?.blue?.[1],o?.blue?.[2],o?.purple?.[1],o?.purple?.[2],o?.pink?.[1],o?.pink?.[2]].map(e=>e??"#CCCCCC"),_=C.div`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: var(--tile-width);
    height: var(--tile-height);
    margin-bottom: 2px;
    margin-top: 2px;
    justify-content: center;
    background-color: ${({theme:o,course_id:e,isHighlighted:s,isOverlapped:t})=>t?o.colors.Text.default:s?o.colors.Highlight.default:(()=>{const i=M(o.colors?.Tile?.TimeTable?.default);return i[e%i.length]})()};
    border-radius: 2px;
    overflow: hidden;
    overflow-wrap: break-word;
    gap: 1px;
    transition: box-shadow 0.1s ease-in-out;
    cursor: ${({hoverSelectBanned:o})=>o?"default":"pointer"};
`,A=C.span`
    width: 100%;
    font-size: ${({theme:o})=>o.fonts.Small.fontSize}px;
    line-height: ${({theme:o})=>`${o.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:o})=>o.fonts.Small.fontWeight};
    color: ${({theme:o,isHighlighted:e,isOverlapped:s})=>e||s?"white":o.colors.Text.default};
    display: inline-block;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: normal;
`,E=C.span`
    width: 100%;
    font-size: ${({theme:o})=>o.fonts.Small.fontSize}px;
    line-height: ${({theme:o})=>`${o.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:o})=>o.fonts.Small.fontWeight};
    color: ${({isHighlighted:o,isOverlapped:e})=>o||e?"rgba(255, 255, 255, 0.6)":"rgba(102, 102, 102, 0.6)"};
    word-wrap: break-word;
    display: inline-block;
    word-break: break-word;
    white-space: normal;
`,D=C.div`
    position: absolute;
    top: 6px;
    right: 4px;
    cursor: pointer;
`,H=({lecture:o,timeBlock:e,cellWidth:s,cellHeight:t,isSelected:i=!1,isHovered:r=!1,hoverSelectBanned:d,isOverlapped:f=!1,removeFunction:w})=>{const h=i||r||!1,p=(e.end-e.begin)/30,u=S.useMemo(()=>({"--tile-width":`${s}px`,"--tile-height":`${p*t-4}px`}),[s,t,p]);return B(_,{style:u,course_id:o.courseId,isHighlighted:h,isOverlapped:f,hoverSelectBanned:d,children:[w!==void 0&&(i||r)&&m(D,{children:m(L,{size:13,onClick:l=>{l.stopPropagation(),w(o.id)},color:"rgba(255, 255, 255, 0.6)",children:m(R,{})})}),m(A,{isHighlighted:h,isOverlapped:f,children:o.name}),m(E,{isHighlighted:h,isOverlapped:f,children:o.professors.map(l=>l.name).join(", ")}),B(E,{isHighlighted:h,isOverlapped:f,children:["(",e.buildingCode,") ",e.roomName]})]})},N=(o,e)=>!(o.cellWidth!==e.cellWidth||o.cellHeight!==e.cellHeight||o.isSelected!==e.isSelected||o.isHovered!==e.isHovered||o.hoverSelectBanned!==e.hoverSelectBanned||o.isOverlapped!==e.isOverlapped||o.removeFunction!==e.removeFunction||o.lecture.courseId!==e.lecture.courseId||o.lecture.name!==e.lecture.name||o.lecture.professors.length!==e.lecture.professors.length||!o.lecture.professors.every((s,t)=>s.name===e.lecture.professors[t]?.name)||o.timeBlock.begin!==e.timeBlock.begin||o.timeBlock.end!==e.timeBlock.end||o.timeBlock.buildingCode!==e.timeBlock.buildingCode||o.timeBlock.roomName!==e.timeBlock.roomName),O=S.memo(H,N);function F(o,e){for(const s of o)for(const t of e)if(s.day==t.day&&s.begin<t.end&&t.begin<s.end)return!0;return!1}const X=(o,e,s,t,i,r,d,f,w,h,p=!1)=>{const u=[],l=o.concat(i?[i]:[]).concat(d?i?d.filter(c=>c.id!==i.id):d:[]),a=new Map;for(const c of l){if(a.has(c.id))continue;const n=l.some(g=>g.id!==c.id&&F(g.classes,c.classes));a.set(c.id,n)}for(let c=0;c<l.length;c++){const n=l[c],g=n.classes,b=i===n,y=d!==null&&d.some(k=>k.id===n.id),v=a.get(n.id)??!1;for(let k=0;k<g.length;k++){const x=g[k];if(!x)continue;const j=x.day*(e+t),z=(Math.floor(x.begin/30)-16)*s;u.push(m("div",{style:{position:"absolute",left:j,top:z},onClick:$=>{$.stopPropagation(),n===i?r(null):n!==void 0&&r(n)},onTouchStart:$=>{$.stopPropagation()},onTouchEnd:$=>{$.stopPropagation(),n===i?r(null):n!==void 0&&r(n)},onMouseEnter:()=>{!w&&n!==void 0&&f([n])},onMouseLeave:()=>{f(null)},children:m(O,{lecture:n,timeBlock:x,cellWidth:e,isSelected:!p&&b,isHovered:!p&&y,hoverSelectBanned:p,isOverlapped:v,cellHeight:s,removeFunction:o.includes(n)?h:void 0})},`${n.id}-${k}-${c}`))}}return u},I=(o,e,s,t,i)=>{let r=0;for(let d=0;d<o;d++)e.includes(d+i)?r+=t:r+=s;return r},Y=(o=!0,e,s,t,i,r,d,f,w,h)=>{const p=[];return e.forEach((u,l)=>{if(!f.includes(l+h)){let a=null;if(u.forEach((c,n)=>{if(c==o)a===null&&(a=n);else if(a!==null){const g=a*t+r,b=I(l,f,i,w,h)+d*l,y=(n-a)*t-r*2,v=i;p.push(m("div",{style:{position:"absolute",left:b,top:g,width:v,height:y,backgroundColor:s,pointerEvents:"none",borderRadius:"2px",zIndex:o?0:1}},`${l}-${a}`)),a=null}}),a!==null){const c=a*t+r,n=I(l,f,i,w,h)+d*l,g=(u.length-a)*t-r*2,b=i;p.push(m("div",{style:{position:"absolute",left:n,top:c,width:b,height:g,zIndex:o?0:1,backgroundColor:s,pointerEvents:"none",borderRadius:"2px"}},`${l}-${a}`))}}}),p};export{X as a,Y as b,Q as c,F as d,U as r};
//# sourceMappingURL=renderTargetArea-ujzqA4i3.js.map
