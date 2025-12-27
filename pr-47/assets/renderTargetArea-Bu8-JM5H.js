import{a as h,n as x,j as B}from"./FlexWrapper-C0dsngQo.js";import{a as I}from"./chunk-UIGDSWPH-NakEPbl8.js";import{C as H}from"./proxy-1sSD-l58.js";import{l as L}from"./useIsDevice-Crwv6Er-.js";function T(e){return e.forEach((o,i)=>{let n=[];"timeBlocks"in o?n=o.timeBlocks:n=o.classes,n.forEach((t,s)=>{if(t.end>24)return!0})}),!1}const U=(e,o,i,n,t,s,a,u)=>{const p=[];for(let l=0;l<e;l++){const d=[];for(let m=0;m<o;m++){const f=`${l*o+m}`,r=!s.includes(m+u),g=h("div",{id:f,style:{width:`${r?i:a}px`,height:`${n}px`,display:"inline-block",textAlign:"center",borderTop:`${r?l%2==0?"1px solid rgba(232, 232, 232, 1)":"1px dashed rgba(232, 232, 232, 1)":"0px"}`,borderBottom:`${r&&l==e-1?"1px solid rgba(232, 232, 232, 1)":"0px"}`,marginRight:`${m<o-1?`${t}px`:"0px"}`}},f);d.push(g)}p.push(h("div",{style:{display:"flex"},children:d},l))}return p},_=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(o=>o??"#CCCCCC"),v=x.div`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: ${({cellWidth:e})=>`${e}px`};
    height: ${({duration:e,cellHeight:o})=>`${e*o-4}px`};
    margin-bottom: 2px;
    margin-top: 2px;
    justify-content: center;
    background-color: ${({theme:e,course_id:o,isHighlighted:i,isOverlapped:n})=>n?e.colors.Text.default:i?e.colors.Highlight.default:(()=>{const t=_(e.colors?.Tile?.TimeTable?.default);return t[o%t.length]})()};
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
`,S=x.span`
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
`,M=({lecture:e,timeBlock:o,cellWidth:i,cellHeight:n,isSelected:t=!1,isHovered:s=!1,hoverSelectBanned:a,isOverlapped:u=!1,removeFunction:p})=>{const l=t||s||!1;return B(v,{course_id:e.courseId,duration:(o.end-o.begin)/30,cellWidth:i,isHighlighted:l,isOverlapped:u,cellHeight:n,hoverSelectBanned:a,children:[p!==void 0&&(t||s)&&h(D,{children:h(L,{size:13,onClick:d=>{d.stopPropagation(),p(e.id)},color:"rgba(255, 255, 255, 0.6)",children:h(H,{})})}),h(A,{isHighlighted:l,isOverlapped:u,children:e.name}),h(S,{isHighlighted:l,isOverlapped:u,children:e.professors.map(d=>d.name).join(", ")}),B(S,{isHighlighted:l,isOverlapped:u,children:["(",o.buildingCode,") ",o.roomName]})]})},N=(e,o)=>!(e.cellWidth!==o.cellWidth||e.cellHeight!==o.cellHeight||e.isSelected!==o.isSelected||e.isHovered!==o.isHovered||e.hoverSelectBanned!==o.hoverSelectBanned||e.isOverlapped!==o.isOverlapped||e.removeFunction!==o.removeFunction||e.lecture.courseId!==o.lecture.courseId||e.lecture.name!==o.lecture.name||e.lecture.professors.length!==o.lecture.professors.length||!e.lecture.professors.every((i,n)=>i.name===o.lecture.professors[n]?.name)||e.timeBlock.begin!==o.timeBlock.begin||e.timeBlock.end!==o.timeBlock.end||e.timeBlock.buildingCode!==o.timeBlock.buildingCode||e.timeBlock.roomName!==o.timeBlock.roomName),q=I.memo(M,N);function F(e,o){for(const i of e)for(const n of o)if(i.day==n.day&&i.begin<n.end&&n.begin<i.end)return!0;return!1}const V=(e,o,i,n,t,s,a,u,p,l,d=!1)=>{const m=I.useRef(null),f=[],r=e.concat(t?[t]:[]).concat(a?t?a.filter(g=>g.id!==t.id):a:[]);for(let g=0;g<r.length;g++){const c=r[g],$=c.classes,b=t===c,y=a!==null&&a.some(w=>w.id===c.id),C=r.some(w=>w.id!==c.id&&F(w.classes,c.classes));for(let w=0;w<$.length;w++){const k=$[w];if(!k)continue;const j=k.day*(o+n),z=(Math.floor(k.begin/30)-16)*i;f.push(h("div",{ref:m,style:{position:"absolute",left:j,top:z},onClick:R=>{R.stopPropagation(),c===t?s(null):c!==void 0&&s(c)},onMouseEnter:()=>{!p&&c!==void 0&&u([c])},onMouseLeave:()=>{u(null)},children:h(q,{lecture:c,timeBlock:k,cellWidth:o,isSelected:!d&&b,isHovered:!d&&y,hoverSelectBanned:d,isOverlapped:C,cellHeight:i,removeFunction:e.includes(c)?l:void 0})},`${g}-${w}`))}}return f},E=(e,o,i,n,t)=>{let s=0;for(let a=0;a<e;a++)o.includes(a+t)?s+=n:s+=i;return s},X=(e=!0,o,i,n,t,s,a,u,p,l)=>{const d=[];return o.forEach((m,f)=>{if(!u.includes(f+l)){let r=null;if(m.forEach((g,c)=>{if(g==e)r===null&&(r=c);else if(r!==null){const $=r*n+s,b=E(f,u,t,p,l)+a*f,y=(c-r)*n-s*2,C=t;d.push(h("div",{style:{position:"absolute",left:b,top:$,width:C,height:y,backgroundColor:i,pointerEvents:"none",borderRadius:"2px",zIndex:e?0:1}},`${f}-${r}`)),r=null}}),r!==null){const g=r*n+s,c=E(f,u,t,p,l)+a*f,$=(m.length-r)*n-s*2,b=t;d.push(h("div",{style:{position:"absolute",left:c,top:g,width:b,height:$,zIndex:e?0:1,backgroundColor:i,pointerEvents:"none",borderRadius:"2px"}},`${f}-${r}`))}}}),d};export{V as a,X as b,T as c,F as d,U as r};
