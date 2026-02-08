import{j as b,a as I}from"./emotion-react-jsx-runtime.browser.esm-Df0_1SPv.js";import{r as S}from"./chunk-EPOLDU6W-BN-euhK0.js";import{n as x}from"./FlexWrapper-BRlmLh17.js";import{C as z}from"./proxy-BL03wwSQ.js";import{I as D}from"./useIsDevice-DqpHcH8v.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};o.SENTRY_RELEASE={id:"20476b02e250804c0ed7e78125c61ce5a11ff73a"}}catch{}})();try{(function(){var o=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new o.Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="292d3d47-2224-490a-aaf2-486634f5091d",o._sentryDebugIdIdentifier="sentry-dbid-292d3d47-2224-490a-aaf2-486634f5091d")})()}catch{}function K(o){return o.forEach((e,s)=>{let t=[];"timeBlocks"in e?t=e.timeBlocks:t=e.classes,t.forEach((i,r)=>{if(i.end>24)return!0})}),!1}const Q=(o,e,s,t,i,r,c,f)=>{const w=[],h=o-1,p=e-1;for(let u=0;u<o;u++){const l=[],a=u%2===0,d=u===h;for(let n=0;n<e;n++){const g=!r.includes(n+f),m=n===p;l.push(b("div",{style:{width:g?s:c,height:t,display:"inline-block",textAlign:"center",borderTop:g?a?"1px solid rgba(232, 232, 232, 1)":"1px dashed rgba(232, 232, 232, 1)":void 0,borderBottom:g&&d?"1px solid rgba(232, 232, 232, 1)":void 0,marginRight:m?void 0:i}},n))}w.push(b("div",{style:{display:"flex"},children:l},u))}return w},L=o=>[o?.red?.[1],o?.red?.[2],o?.orange?.[1],o?.orange?.[2],o?.yellow?.[1],o?.yellow?.[2],o?.green?.[1],o?.green?.[2],o?.green?.[3],o?.blue?.[1],o?.blue?.[2],o?.purple?.[1],o?.purple?.[2],o?.pink?.[1],o?.pink?.[2]].map(e=>e??"#CCCCCC"),T=x.div`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: var(--tile-width);
    height: var(--tile-height);
    margin-bottom: 2px;
    margin-top: 2px;
    background-color: ${({theme:o,course_id:e,isHighlighted:s,isOverlapped:t})=>t?o.colors.Text.default:s?o.colors.Highlight.default:(()=>{const i=L(o.colors?.Tile?.TimeTable?.default);return i[e%i.length]})()};
    border-radius: 2px;
    overflow: hidden;
    overflow-wrap: break-word;
    gap: 1px;
    transition: box-shadow 0.1s ease-in-out;
    cursor: ${({hoverSelectBanned:o})=>o?"default":"pointer"};
`,j=x.span`
    width: 100%;
    font-size: ${({theme:o})=>o.fonts.Small.fontSize}px;
    line-height: ${({theme:o})=>`${o.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:o})=>o.fonts.Small.fontWeight};
    color: ${({theme:o,isHighlighted:e,isOverlapped:s})=>e||s?"white":o.colors.Text.default};
    display: inline-block;
    word-wrap: break-word;
    word-break: keep-all;
    white-space: normal;
`,v=x.span`
    width: 100%;
    font-size: ${({theme:o})=>o.fonts.Small.fontSize}px;
    line-height: ${({theme:o})=>`${o.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:o})=>o.fonts.Small.fontWeight};
    color: ${({isHighlighted:o,isOverlapped:e})=>o||e?"rgba(255, 255, 255, 0.6)":"rgba(102, 102, 102, 0.6)"};
    word-wrap: break-word;
    display: inline-block;
    word-break: break-word;
    white-space: normal;
`,M=x.div`
    position: absolute;
    top: 6px;
    right: 4px;
    cursor: pointer;
`,A=({lecture:o,timeBlock:e,cellWidth:s,cellHeight:t,isSelected:i=!1,isHovered:r=!1,hoverSelectBanned:c,isOverlapped:f=!1,removeFunction:w})=>{const h=i||r||!1,p=(e.end-e.begin)/30,u=S.useMemo(()=>({"--tile-width":`${s}px`,"--tile-height":`${p*t-4}px`}),[s,t,p]);return I(T,{style:u,course_id:o.courseId,isHighlighted:h,isOverlapped:f,hoverSelectBanned:c,children:[w!==void 0&&(i||r)&&b(M,{children:b(D,{size:13,onClick:l=>{l.stopPropagation(),w(o.id)},color:"rgba(255, 255, 255, 0.6)",children:b(z,{})})}),b(j,{isHighlighted:h,isOverlapped:f,children:o.name+o.subtitle}),b(v,{isHighlighted:h,isOverlapped:f,children:o.professors.map(l=>l.name).join(", ")}),I(v,{isHighlighted:h,isOverlapped:f,children:["(",e.buildingCode,") ",e.roomName]})]})},N=(o,e)=>!(o.cellWidth!==e.cellWidth||o.cellHeight!==e.cellHeight||o.isSelected!==e.isSelected||o.isHovered!==e.isHovered||o.hoverSelectBanned!==e.hoverSelectBanned||o.isOverlapped!==e.isOverlapped||o.removeFunction!==e.removeFunction||o.lecture.courseId!==e.lecture.courseId||o.lecture.name!==e.lecture.name||o.lecture.professors.length!==e.lecture.professors.length||!o.lecture.professors.every((s,t)=>s.name===e.lecture.professors[t]?.name)||o.timeBlock.begin!==e.timeBlock.begin||o.timeBlock.end!==e.timeBlock.end||o.timeBlock.buildingCode!==e.timeBlock.buildingCode||o.timeBlock.roomName!==e.timeBlock.roomName),H=S.memo(A,N);function O(o,e){for(const s of o)for(const t of e)if(s.day==t.day&&s.begin<t.end&&t.begin<s.end)return!0;return!1}const U=(o,e,s,t,i,r,c,f,w,h,p=!1)=>{const u=[],l=o.concat(i?[i]:[]).concat(c?i?c.filter(d=>d.id!==i.id):c:[]),a=new Map;for(const d of l){if(a.has(d.id))continue;const n=l.some(g=>g.id!==d.id&&O(g.classes,d.classes));a.set(d.id,n)}for(let d=0;d<l.length;d++){const n=l[d],g=n.classes,m=i===n,C=c!==null&&c.some(y=>y.id===n.id),E=a.get(n.id)??!1;for(let y=0;y<g.length;y++){const $=g[y];if(!$)continue;const R=$.day*(e+t),_=(Math.floor($.begin/30)-16)*s;u.push(b("div",{style:{position:"absolute",left:R,top:_},onClick:k=>{k.stopPropagation(),n===i?r(null):n!==void 0&&r(n)},onTouchStart:k=>{k.stopPropagation()},onTouchEnd:k=>{k.stopPropagation(),n===i?r(null):n!==void 0&&r(n)},onMouseEnter:()=>{!w&&n!==void 0&&f([n])},onMouseLeave:()=>{f(null)},children:b(H,{lecture:n,timeBlock:$,cellWidth:e,isSelected:!p&&m,isHovered:!p&&C,hoverSelectBanned:p,isOverlapped:E,cellHeight:s,removeFunction:o.includes(n)?h:void 0})},`${n.id}-${y}-${d}`))}}return u},B=(o,e,s,t,i)=>{let r=0;for(let c=0;c<o;c++)e.includes(c+i)?r+=t:r+=s;return r},X=(o=!0,e,s,t,i,r,c,f,w,h)=>{const p=[];return e.forEach((u,l)=>{if(!f.includes(l+h)){let a=null;if(u.forEach((d,n)=>{if(d==o)a===null&&(a=n);else if(a!==null){const g=a*t+r,m=B(l,f,i,w,h)+c*l,C=(n-a)*t-r*2,E=i;p.push(b("div",{style:{position:"absolute",left:m,top:g,width:E,height:C,backgroundColor:s,pointerEvents:"none",borderRadius:"2px",zIndex:o?0:1}},`${l}-${a}`)),a=null}}),a!==null){const d=a*t+r,n=B(l,f,i,w,h)+c*l,g=(u.length-a)*t-r*2,m=i;p.push(b("div",{style:{position:"absolute",left:n,top:d,width:m,height:g,zIndex:o?0:1,backgroundColor:s,pointerEvents:"none",borderRadius:"2px"}},`${l}-${a}`))}}}),p};export{U as a,X as b,K as c,O as d,Q as r};
//# sourceMappingURL=renderTargetArea-CPJGFw1B.js.map
