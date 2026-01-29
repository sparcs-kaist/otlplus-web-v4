import{j as p,a as I}from"./emotion-react-jsx-runtime.browser.esm-8xALLokb.js";import{r as S}from"./chunk-EPOLDU6W-Bd0C7ljQ.js";import{n as x}from"./FlexWrapper-CFnkfq6R.js";import{C as z}from"./proxy-INMfqdza.js";import{I as D}from"./useIsDevice-Dte3qH7b.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"e83a6e0b92460bbba31e6bf5b6b1ea2a0857dfba"}}catch{}})();try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e57edbe6-e11f-4e6b-8933-107892079efe",e._sentryDebugIdIdentifier="sentry-dbid-e57edbe6-e11f-4e6b-8933-107892079efe")})()}catch{}function K(e){return e.forEach((o,s)=>{let t=[];"timeBlocks"in o?t=o.timeBlocks:t=o.classes,t.forEach((i,r)=>{if(i.end>24)return!0})}),!1}const Q=(e,o,s,t,i,r,d,f)=>{const w=[],h=e-1,b=o-1;for(let u=0;u<e;u++){const l=[],a=u%2===0,c=u===h;for(let n=0;n<o;n++){const g=!r.includes(n+f),m=n===b;l.push(p("div",{style:{width:g?s:d,height:t,display:"inline-block",textAlign:"center",borderTop:g?a?"1px solid rgba(232, 232, 232, 1)":"1px dashed rgba(232, 232, 232, 1)":void 0,borderBottom:g&&c?"1px solid rgba(232, 232, 232, 1)":void 0,marginRight:m?void 0:i}},n))}w.push(p("div",{style:{display:"flex"},children:l},u))}return w},L=e=>[e?.red?.[1],e?.red?.[2],e?.orange?.[1],e?.orange?.[2],e?.yellow?.[1],e?.yellow?.[2],e?.green?.[1],e?.green?.[2],e?.green?.[3],e?.blue?.[1],e?.blue?.[2],e?.purple?.[1],e?.purple?.[2],e?.pink?.[1],e?.pink?.[2]].map(o=>o??"#CCCCCC"),T=x.div`
    display: flex;
    flex-direction: column;
    padding: 4px 6px;
    width: var(--tile-width);
    height: var(--tile-height);
    margin-bottom: 2px;
    margin-top: 2px;
    background-color: ${({theme:e,course_id:o,isHighlighted:s,isOverlapped:t})=>t?e.colors.Text.default:s?e.colors.Highlight.default:(()=>{const i=L(e.colors?.Tile?.TimeTable?.default);return i[o%i.length]})()};
    border-radius: 2px;
    overflow: hidden;
    overflow-wrap: break-word;
    gap: 1px;
    transition: box-shadow 0.1s ease-in-out;
    cursor: ${({hoverSelectBanned:e})=>e?"default":"pointer"};
`,j=x.span`
    width: 100%;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    line-height: ${({theme:e})=>`${e.fonts.Small.lineHeight}px`};
    font-weight: ${({theme:e})=>e.fonts.Small.fontWeight};
    color: ${({theme:e,isHighlighted:o,isOverlapped:s})=>o||s?"white":e.colors.Text.default};
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
`,M=x.div`
    position: absolute;
    top: 6px;
    right: 4px;
    cursor: pointer;
`,A=({lecture:e,timeBlock:o,cellWidth:s,cellHeight:t,isSelected:i=!1,isHovered:r=!1,hoverSelectBanned:d,isOverlapped:f=!1,removeFunction:w})=>{const h=i||r||!1,b=(o.end-o.begin)/30,u=S.useMemo(()=>({"--tile-width":`${s}px`,"--tile-height":`${b*t-4}px`}),[s,t,b]);return I(T,{style:u,course_id:e.courseId,isHighlighted:h,isOverlapped:f,hoverSelectBanned:d,children:[w!==void 0&&(i||r)&&p(M,{children:p(D,{size:13,onClick:l=>{l.stopPropagation(),w(e.id)},color:"rgba(255, 255, 255, 0.6)",children:p(z,{})})}),p(j,{isHighlighted:h,isOverlapped:f,children:e.name+e.subtitle}),p(v,{isHighlighted:h,isOverlapped:f,children:e.professors.map(l=>l.name).join(", ")}),I(v,{isHighlighted:h,isOverlapped:f,children:["(",o.buildingCode,") ",o.roomName]})]})},N=(e,o)=>!(e.cellWidth!==o.cellWidth||e.cellHeight!==o.cellHeight||e.isSelected!==o.isSelected||e.isHovered!==o.isHovered||e.hoverSelectBanned!==o.hoverSelectBanned||e.isOverlapped!==o.isOverlapped||e.removeFunction!==o.removeFunction||e.lecture.courseId!==o.lecture.courseId||e.lecture.name!==o.lecture.name||e.lecture.professors.length!==o.lecture.professors.length||!e.lecture.professors.every((s,t)=>s.name===o.lecture.professors[t]?.name)||e.timeBlock.begin!==o.timeBlock.begin||e.timeBlock.end!==o.timeBlock.end||e.timeBlock.buildingCode!==o.timeBlock.buildingCode||e.timeBlock.roomName!==o.timeBlock.roomName),H=S.memo(A,N);function O(e,o){for(const s of e)for(const t of o)if(s.day==t.day&&s.begin<t.end&&t.begin<s.end)return!0;return!1}const U=(e,o,s,t,i,r,d,f,w,h,b=!1)=>{const u=[],l=e.concat(i?[i]:[]).concat(d?i?d.filter(c=>c.id!==i.id):d:[]),a=new Map;for(const c of l){if(a.has(c.id))continue;const n=l.some(g=>g.id!==c.id&&O(g.classes,c.classes));a.set(c.id,n)}for(let c=0;c<l.length;c++){const n=l[c],g=n.classes,m=i===n,C=d!==null&&d.some(y=>y.id===n.id),E=a.get(n.id)??!1;for(let y=0;y<g.length;y++){const $=g[y];if(!$)continue;const R=$.day*(o+t),_=(Math.floor($.begin/30)-16)*s;u.push(p("div",{style:{position:"absolute",left:R,top:_},onClick:k=>{k.stopPropagation(),n===i?r(null):n!==void 0&&r(n)},onTouchStart:k=>{k.stopPropagation()},onTouchEnd:k=>{k.stopPropagation(),n===i?r(null):n!==void 0&&r(n)},onMouseEnter:()=>{!w&&n!==void 0&&f([n])},onMouseLeave:()=>{f(null)},children:p(H,{lecture:n,timeBlock:$,cellWidth:o,isSelected:!b&&m,isHovered:!b&&C,hoverSelectBanned:b,isOverlapped:E,cellHeight:s,removeFunction:e.includes(n)?h:void 0})},`${n.id}-${y}-${c}`))}}return u},B=(e,o,s,t,i)=>{let r=0;for(let d=0;d<e;d++)o.includes(d+i)?r+=t:r+=s;return r},X=(e=!0,o,s,t,i,r,d,f,w,h)=>{const b=[];return o.forEach((u,l)=>{if(!f.includes(l+h)){let a=null;if(u.forEach((c,n)=>{if(c==e)a===null&&(a=n);else if(a!==null){const g=a*t+r,m=B(l,f,i,w,h)+d*l,C=(n-a)*t-r*2,E=i;b.push(p("div",{style:{position:"absolute",left:m,top:g,width:E,height:C,backgroundColor:s,pointerEvents:"none",borderRadius:"2px",zIndex:e?0:1}},`${l}-${a}`)),a=null}}),a!==null){const c=a*t+r,n=B(l,f,i,w,h)+d*l,g=(u.length-a)*t-r*2,m=i;b.push(p("div",{style:{position:"absolute",left:n,top:c,width:m,height:g,zIndex:e?0:1,backgroundColor:s,pointerEvents:"none",borderRadius:"2px"}},`${l}-${a}`))}}}),b};export{U as a,X as b,K as c,O as d,Q as r};
//# sourceMappingURL=renderTargetArea-w1llijUB.js.map
