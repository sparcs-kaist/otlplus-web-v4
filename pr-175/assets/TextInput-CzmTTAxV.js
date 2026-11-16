(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`0db6439ea8e87db7838d61a6cab5de96c8dddaf3`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`c4e6e7e7-89e2-402a-b73c-e1077586bc11`,e._sentryDebugIdIdentifier=`sentry-dbid-c4e6e7e7-89e2-402a-b73c-e1077586bc11`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-BZE1xsjc.js";import{h as n,m as r,n as i,p as a,r as o,v as s}from"./emotion-react-jsx-runtime.browser.esm-Or34D-vL.js";import{n as c,t as l}from"./FlexWrapper-CO2K-bjN.js";import"./useAPI-CX6e3roT.js";import{t as u}from"./Icon-Dt2kLzQX.js";import{t as d}from"./useTranslation-DK_dxXkF.js";import{t as f}from"./Close-6Q3cy6hB.js";import{t as p}from"./Typography-IhCbEtVc.js";import{n as m}from"./formatTimeblockToString-CNraNcYl.js";var h=c(l)`
    width: 100%;
`,g=c(p)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`,_=c.button`
    display: flex;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: ${({theme:e})=>e.colors.Text.default};
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;function v({timeFilter:e,setTimeFilter:t,removeLabel:n,disabled:r}){let{t:a}=d();return i(l,{direction:`column`,gap:0,style:{width:`100%`},children:i(h,{direction:`row`,gap:0,children:e?o(l,{direction:`row`,justify:`space-between`,gap:10,align:`center`,children:[i(p,{color:`Text.default`,type:`Normal`,children:`${m(e)}`}),t&&i(_,{type:`button`,"aria-label":n??a(`common.search.reset`),disabled:r,onClick:()=>t(null),children:i(u,{size:15,style:{cursor:`inherit`},children:i(f,{})})})]}):i(g,{color:`Text.light`,type:`Normal`,children:a(`common.search.timeFilterPlaceholder`)})})})}var y=t(e());function b(e,t){if(e.inserted[t.name]===void 0)return e.insert(``,t,e.sheet,!0)}function x(e,t,n){var i=[],a=r(e,i,n);return i.length<2?n:a+t(i)}var S=function(e){var t=s(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var i=function(){var e=a([...arguments],t.registered,void 0);return n(t,e,!1),t.key+`-`+e.name};return{css:i,cx:function(){var e=[...arguments];return x(t.registered,i,C(e))},injectGlobal:function(){b(t,a([...arguments],t.registered))},keyframes:function(){var e=a([...arguments],t.registered),n=`animation-`+e.name;return b(t,{name:e.name,styles:`@keyframes `+n+`{`+e.styles+`}`}),n},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:r.bind(null,t.registered),merge:x.bind(null,t.registered,i)}},C=function e(t){for(var n=``,r=0;r<t.length;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case`boolean`:break;case`object`:if(Array.isArray(i))a=e(i);else for(var o in a=``,i)i[o]&&o&&(a&&(a+=` `),a+=o);break;default:a=i}a&&(n&&(n+=` `),n+=a)}}return n},w=S({key:`css`});w.flush,w.hydrate,w.cx,w.merge,w.getRegisteredStyles,w.injectGlobal,w.keyframes;var T=w.css;w.sheet,w.cache;var E=T`
    border-color: red;
`,D=c.input`
    display: block;
    width: 100%;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    line-height: 20px;
    color: ${({theme:e})=>e.colors.Text.default};
    border: 0;
    padding: 8px;

    &::placeholder {
        color: ${({$placeholderColor:e,theme:t})=>e||t.colors.Text.placeholder};
    }

    background-color: ${({disabled:e,theme:t})=>e?t.colors.Background.Input.disabled:t.colors.Background.Section.default};
    ${({$hasError:e})=>e&&E};
`,O=c.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,k=c.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,A=(0,y.forwardRef)(({placeholder:e,errorMessage:t=``,disabled:n=!1,value:r=``,handleChange:a,setErrorStatus:o,$placeholderColor:s,...c},l)=>((0,y.useEffect)(()=>{o?.(!!t)},[t,o]),i(O,{children:i(k,{children:i(D,{ref:l,placeholder:e,$hasError:!!t,disabled:n,value:r,onChange:e=>{a?.(e.target.value)},$placeholderColor:s,...c})})})));A.displayName=`TextInput`;export{v as n,A as t};
//# sourceMappingURL=TextInput-CzmTTAxV.js.map