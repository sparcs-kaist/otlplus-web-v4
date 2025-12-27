import{a as m,n as x,j as B}from"./FlexWrapper-C0dsngQo.js";import{a as E}from"./chunk-UIGDSWPH-NakEPbl8.js";import{C as R}from"./proxy-DwQNJHaf.js";import{l as L}from"./useIsDevice-CU0z7f25.js";function Q(e){return e.forEach((o,i)=>{let n=[];"timeBlocks"in o?n=o.timeBlocks:n=o.classes,n.forEach((s,l)=>{if(s.end>24)return!0})}),!1}const T=(e,o,i,n,s,l,a,f)=>{const w=[],h=e-1,p=o-1;for(let u=0;u<e;u++){const r=[],c=u%2===0,d=u===h;for(let t=0;t<o;t++){const g=!l.includes(t+f),b=t===p;r.push(m("div",{style:{width:g?i:a,height:n,display:"inline-block",textAlign:"center",borderTop:g?c?"1px solid rgba(232, 232, 232, 1)":"1px dashed rgba(232, 232, 232, 1)":void 0,borderBottom:g&&d?"1px solid rgba(232, 232, 232, 1)":void 0,marginRight:b?void 0:s}},t))}w.push(m("div",{style:{display:"flex"},children:r},u))}return w},M=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(o=>o??"#CCCCCC"),_=x.div`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: var(--tile-width);
    height: var(--tile-height);
    margin-bottom: 2px;
    margin-top: 2px;
    justify-content: center;
    background-color: ${({theme:e,course_id:o,isHighlighted:i,isOverlapped:n})=>n?e.colors.Text.default:i?e.colors.Highlight.default:(()=>{const s=M(e.colors?.Tile?.TimeTable?.default);return s[o%s.length]})()};
    border-radius: 2px;
    overflow: hidden;
    overflow-wrap: break-word;
    gap: 1px;
    transition: box-shadow 0.1s ease-in-out;
    cursor: ${({hoverSelectBanned:e})=>e?"default":"pointer"};
`,A=x.span`
    width: 100%;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    line-height: ${({theme:e})=>`${e.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:e})=>e.fonts.Small.fontWeight};
    color: ${({theme:e,isHighlighted:o,isOverlapped:i})=>o||i?"white":e.colors.Text.default};
    display: inline-block;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: normal;
`,v=x.span`
    width: 100%;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    line-height: ${({theme:e})=>`${e.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:e})=>e.fonts.Small.fontWeight};
    color: ${({isHighlighted:e,isOverlapped:o})=>e||o?"rgba(255, 255, 255, 0.6)":"rgba(102, 102, 102, 0.6)"};
    word-wrap: break-word;
    display: inline-block;
    word-break: break-word;
    white-space: normal;
`,D=x.div`
    position: absolute;
    top: 6px;
    right: 4px;
    cursor: pointer;
`,H=({lecture:e,timeBlock:o,cellWidth:i,cellHeight:n,isSelected:s=!1,isHovered:l=!1,hoverSelectBanned:a,isOverlapped:f=!1,removeFunction:w})=>{const h=s||l||!1,p=(o.end-o.begin)/30,u=E.useMemo(()=>({"--tile-width":`${i}px`,"--tile-height":`${p*n-4}px`}),[i,n,p]);return B(_,{style:u,course_id:e.courseId,isHighlighted:h,isOverlapped:f,hoverSelectBanned:a,children:[w!==void 0&&(s||l)&&m(D,{children:m(L,{size:13,onClick:r=>{r.stopPropagation(),w(e.id)},color:"rgba(255, 255, 255, 0.6)",children:m(R,{})})}),m(A,{isHighlighted:h,isOverlapped:f,children:e.name}),m(v,{isHighlighted:h,isOverlapped:f,children:e.professors.map(r=>r.name).join(", ")}),B(v,{isHighlighted:h,isOverlapped:f,children:["(",o.buildingCode,") ",o.roomName]})]})},N=(e,o)=>!(e.cellWidth!==o.cellWidth||e.cellHeight!==o.cellHeight||e.isSelected!==o.isSelected||e.isHovered!==o.isHovered||e.hoverSelectBanned!==o.hoverSelectBanned||e.isOverlapped!==o.isOverlapped||e.removeFunction!==o.removeFunction||e.lecture.courseId!==o.lecture.courseId||e.lecture.name!==o.lecture.name||e.lecture.professors.length!==o.lecture.professors.length||!e.lecture.professors.every((i,n)=>i.name===o.lecture.professors[n]?.name)||e.timeBlock.begin!==o.timeBlock.begin||e.timeBlock.end!==o.timeBlock.end||e.timeBlock.buildingCode!==o.timeBlock.buildingCode||e.timeBlock.roomName!==o.timeBlock.roomName),O=E.memo(H,N);function F(e,o){for(const i of e)for(const n of o)if(i.day==n.day&&i.begin<n.end&&n.begin<i.end)return!0;return!1}const U=(e,o,i,n,s,l,a,f,w,h,p=!1)=>{const u=[],r=e.concat(s?[s]:[]).concat(a?s?a.filter(d=>d.id!==s.id):a:[]),c=new Map;for(const d of r){if(c.has(d.id))continue;const t=r.some(g=>g.id!==d.id&&F(g.classes,d.classes));c.set(d.id,t)}for(let d=0;d<r.length;d++){const t=r[d],g=t.classes,b=s===t,C=a!==null&&a.some(k=>k.id===t.id),y=c.get(t.id)??!1;for(let k=0;k<g.length;k++){const $=g[k];if(!$)continue;const I=$.day*(o+n),j=(Math.floor($.begin/30)-16)*i;u.push(m("div",{style:{position:"absolute",left:I,top:j},onClick:z=>{z.stopPropagation(),t===s?l(null):t!==void 0&&l(t)},onMouseEnter:()=>{!w&&t!==void 0&&f([t])},onMouseLeave:()=>{f(null)},children:m(O,{lecture:t,timeBlock:$,cellWidth:o,isSelected:!p&&b,isHovered:!p&&C,hoverSelectBanned:p,isOverlapped:y,cellHeight:i,removeFunction:e.includes(t)?h:void 0})},`${t.id}-${k}`))}}return u},S=(e,o,i,n,s)=>{let l=0;for(let a=0;a<e;a++)o.includes(a+s)?l+=n:l+=i;return l},X=(e=!0,o,i,n,s,l,a,f,w,h)=>{const p=[];return o.forEach((u,r)=>{if(!f.includes(r+h)){let c=null;if(u.forEach((d,t)=>{if(d==e)c===null&&(c=t);else if(c!==null){const g=c*n+l,b=S(r,f,s,w,h)+a*r,C=(t-c)*n-l*2,y=s;p.push(m("div",{style:{position:"absolute",left:b,top:g,width:y,height:C,backgroundColor:i,pointerEvents:"none",borderRadius:"2px",zIndex:e?0:1}},`${r}-${c}`)),c=null}}),c!==null){const d=c*n+l,t=S(r,f,s,w,h)+a*r,g=(u.length-c)*n-l*2,b=s;p.push(m("div",{style:{position:"absolute",left:t,top:d,width:b,height:g,zIndex:e?0:1,backgroundColor:i,pointerEvents:"none",borderRadius:"2px"}},`${r}-${c}`))}}}),p};export{U as a,X as b,Q as c,F as d,T as r};
