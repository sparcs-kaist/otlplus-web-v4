import{j as t}from"./emotion-react-jsx-runtime.browser.esm-BDRRBMWT.js";import{l as d,V as l}from"./useIsDevice-DbAE_3p3.js";import{s as c,F as a}from"./FlexWrapper-DG3H6qd8.js";import"./chunk-JZWAC4HX-CjLwjxgc.js";import{T as i}from"./Typography-CgDvK4d_.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"22650cf8869ac8c1e2f424defc1efdbe70b84776"};var r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="861eec2d-5cd6-49fb-a4de-48fc101b4881",e._sentryDebugIdIdentifier="sentry-dbid-861eec2d-5cd6-49fb-a4de-48fc101b4881")}catch{}})();const s=e=>d`
    border: 1px solid rgba(194, 194, 194, 0.2);
    background-color: ${e.colors.Background.Tab.darker};
    color: ${e.colors.Text.default};
    opacity: 50%;
`,f=e=>d`
    background-color: ${e.colors.Text.disable};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,u=e=>d`
    background-color: ${e.colors.Text.lighter};
    color: ${e.colors.Background.Section.default};
    opacity: 100%;
`,p=c(a)`
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
        ${({theme:e})=>f(e)}
    }
    ${({theme:e,isSelected:r})=>r&&u(e)}
`;function g({children:e,onClick:r,isSelected:n=!1}){return t(p,{direction:"row",justify:"center",align:"center",gap:0,children:t(b,{isSelected:n,onClick:r,children:t(i,{type:"Small",children:e})})})}function w({score:e,setScore:r}){return t(a,{direction:"row",gap:5,children:[1,2,3,4,5].map((n,o)=>t(g,{onClick:()=>{e===5-o?r(0):r(5-o)},isSelected:e===5-o,children:l[5-o]},o))})}export{w as G};
//# sourceMappingURL=GradeWrap-BYJfrqdZ.js.map
