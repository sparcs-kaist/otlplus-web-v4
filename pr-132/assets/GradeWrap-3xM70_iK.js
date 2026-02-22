import{j as t}from"./emotion-react-jsx-runtime.browser.esm-CSGOjjze.js";import{l as n,V as l}from"./useIsDevice-BGP3W1m6.js";import{s as a,F as d}from"./FlexWrapper-ClZAwvme.js";import"./chunk-JZWAC4HX-CypP3aYd.js";import{T as i}from"./Typography-TFUHRtP7.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"94bcaa45a12a089c377ec0a72ec75979c22d0e7c"};var r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="861eec2d-5cd6-49fb-a4de-48fc101b4881",e._sentryDebugIdIdentifier="sentry-dbid-861eec2d-5cd6-49fb-a4de-48fc101b4881")}catch{}})();const s=e=>n`
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
`,f=a(d)`
    width: 19px;
    height: 19px;
    cursor: pointer;
`,g=a.button`
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
`;function b({children:e,onClick:r,isSelected:c=!1}){return t(f,{direction:"row",justify:"center",align:"center",gap:0,children:t(g,{isSelected:c,onClick:r,children:t(i,{type:"Small",children:e})})})}function w({score:e,setScore:r}){return t(d,{direction:"row",gap:5,children:[1,2,3,4,5].map((c,o)=>t(b,{onClick:()=>{e===5-o?r(0):r(5-o)},isSelected:e===5-o,children:l[5-o]},o))})}export{w as G};
//# sourceMappingURL=GradeWrap-3xM70_iK.js.map
