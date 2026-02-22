import{j as t}from"./emotion-react-jsx-runtime.browser.esm-CZBsC4cK.js";import{l as d,V as l}from"./useIsDevice-CWgqIpFV.js";import{s as n,F as c}from"./FlexWrapper-BEbB7TrT.js";import"./chunk-JZWAC4HX-jCOe6Yd9.js";import{T as i}from"./Typography-BAe-52wx.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};r.SENTRY_RELEASE={id:"d29bd4a2274cf926af44bba61aab0d27ac77c858"};var e=new r.Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="861eec2d-5cd6-49fb-a4de-48fc101b4881",r._sentryDebugIdIdentifier="sentry-dbid-861eec2d-5cd6-49fb-a4de-48fc101b4881")}catch{}})();const s=r=>d`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${r.colors.Background.Tab.darker};
    color: ${r.colors.Text.default};
    opacity: 50%;
`,u=r=>d`
    background-color: ${r.colors.Text.disable};
    color: ${r.colors.Background.Section.default};
    opacity: 100%;
`,f=r=>d`
    background-color: ${r.colors.Text.lighter};
    color: ${r.colors.Background.Section.default};
    opacity: 100%;
`,p=n(c)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,b=n.button`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 2.5px;

    ${({theme:r})=>s(r)}
    &:hover {
        ${({theme:r})=>u(r)}
    }
    ${({theme:r,isSelected:e})=>e&&f(r)}
`;function g({children:r,onClick:e,isSelected:a=!1}){return t(p,{direction:"row",justify:"center",align:"center",gap:0,children:t(b,{isSelected:a,onClick:e,children:t(i,{type:"Small",children:r})})})}function w({score:r,setScore:e}){return t(c,{direction:"row",gap:5,children:[1,2,3,4,5].map((a,o)=>t(g,{onClick:()=>{r===5-o?e(0):e(5-o)},isSelected:r===5-o,children:l[5-o]},o))})}export{w as G};
//# sourceMappingURL=GradeWrap-a5LGdcwD.js.map
