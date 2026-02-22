import{j as t}from"./emotion-react-jsx-runtime.browser.esm-B5Mzfpnp.js";import{l as n,V as l}from"./useIsDevice-B1pA0poh.js";import{s as c,F as a}from"./FlexWrapper-BAjXYuYd.js";import"./chunk-JZWAC4HX-Dli3OiYn.js";import{T as i}from"./Typography-COGP1R2-.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"66edb5d634d1bce1a87eb1662822c9e9345d91bf"};var r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="861eec2d-5cd6-49fb-a4de-48fc101b4881",e._sentryDebugIdIdentifier="sentry-dbid-861eec2d-5cd6-49fb-a4de-48fc101b4881")}catch{}})();const s=e=>n`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${e.colors.Background.Tab.darker};
    color: ${e.colors.Text.default};
    opacity: 50%;
`,u=e=>n`
    background-color: ${e.colors.Text.disable};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,p=e=>n`
    background-color: ${e.colors.Text.lighter};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,f=c(a)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,b=c.button`
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 2.5px;

    ${({theme:e})=>s(e)}
    &:hover {
        ${({theme:e})=>u(e)}
    }
    ${({theme:e,isSelected:r})=>r&&p(e)}
`;function g({children:e,onClick:r,isSelected:d=!1}){return t(f,{direction:"row",justify:"center",align:"center",gap:0,children:t(b,{isSelected:d,onClick:r,children:t(i,{type:"Small",children:e})})})}function w({score:e,setScore:r}){return t(a,{direction:"row",gap:5,children:[1,2,3,4,5].map((d,o)=>t(g,{onClick:()=>{e===5-o?r(0):r(5-o)},isSelected:e===5-o,children:l[5-o]},o))})}export{w as G};
//# sourceMappingURL=GradeWrap-LApuSxrl.js.map
