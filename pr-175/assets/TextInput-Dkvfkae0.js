(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`6e98314396ee60f69d5f4a41bbb98d549b0f2af6`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`a6e2544f-ebf7-4a64-8851-439f29530e65`,e._sentryDebugIdIdentifier=`sentry-dbid-a6e2544f-ebf7-4a64-8851-439f29530e65`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-5TmoFFks.js";import{h as r,m as i,n as a,p as o,r as s,v as c}from"./emotion-react-jsx-runtime.browser.esm-ptU_YoQm.js";import{n as l,t as u}from"./FlexWrapper-C6csnMnK.js";import"./useAPI-B3TFMClW.js";import{r as d,t as f}from"./Icon-y0CVWrqn.js";import{t as p}from"./useTranslation-CRzC4TrU.js";import{t as m}from"./Close-BYKFBVZp.js";import{t as h}from"./Typography-DNSwWadd.js";import{n as g}from"./formatTimeblockToString-CI4xxJPX.js";var _=t(n(),1),v=d((0,_.jsx)(`path`,{d:`M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z`}),`Check`),y=l(u)`
    width: 100%;
`,b=l(h)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`,x=l.button`
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
`;function S({timeFilter:e,setTimeFilter:t,removeLabel:n,disabled:r}){let{t:i}=p();return a(u,{direction:`column`,gap:0,style:{width:`100%`},children:a(y,{direction:`row`,gap:0,children:e?s(u,{direction:`row`,justify:`space-between`,gap:10,align:`center`,children:[a(h,{color:`Text.default`,type:`Normal`,children:`${g(e)}`}),t&&a(x,{type:`button`,"aria-label":n??i(`common.search.reset`),disabled:r,onClick:()=>t(null),children:a(f,{size:15,style:{cursor:`inherit`},children:a(m,{})})})]}):a(b,{color:`Text.light`,type:`Normal`,children:i(`common.search.timeFilterPlaceholder`)})})})}var C=t(e());function w(e,t){if(e.inserted[t.name]===void 0)return e.insert(``,t,e.sheet,!0)}function T(e,t,n){var r=[],a=i(e,r,n);return r.length<2?n:a+t(r)}var E=function(e){var t=c(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){var e=o([...arguments],t.registered,void 0);return r(t,e,!1),t.key+`-`+e.name};return{css:n,cx:function(){var e=[...arguments];return T(t.registered,n,D(e))},injectGlobal:function(){w(t,o([...arguments],t.registered))},keyframes:function(){var e=o([...arguments],t.registered),n=`animation-`+e.name;return w(t,{name:e.name,styles:`@keyframes `+n+`{`+e.styles+`}`}),n},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:i.bind(null,t.registered),merge:T.bind(null,t.registered,n)}},D=function e(t){for(var n=``,r=0;r<t.length;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case`boolean`:break;case`object`:if(Array.isArray(i))a=e(i);else for(var o in a=``,i)i[o]&&o&&(a&&(a+=` `),a+=o);break;default:a=i}a&&(n&&(n+=` `),n+=a)}}return n},O=E({key:`css`});O.flush,O.hydrate,O.cx,O.merge,O.getRegisteredStyles,O.injectGlobal,O.keyframes;var k=O.css;O.sheet,O.cache;var A=k`
    border-color: red;
`,j=l.input`
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
    ${({$hasError:e})=>e&&A};
`,M=l.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,N=l.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,P=(0,C.forwardRef)(({placeholder:e,errorMessage:t=``,disabled:n=!1,value:r=``,handleChange:i,setErrorStatus:o,$placeholderColor:s,...c},l)=>((0,C.useEffect)(()=>{o?.(!!t)},[t,o]),a(M,{children:a(N,{children:a(j,{ref:l,placeholder:e,$hasError:!!t,disabled:n,value:r,onChange:e=>{i?.(e.target.value)},$placeholderColor:s,...c})})})));P.displayName=`TextInput`;export{S as n,v as r,P as t};
//# sourceMappingURL=TextInput-Dkvfkae0.js.map