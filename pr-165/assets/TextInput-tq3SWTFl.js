(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`ecb804a3a9dd64950df527181a954c460549363a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`3174fc5b-ab68-4627-a217-07ad465db30d`,e._sentryDebugIdIdentifier=`sentry-dbid-3174fc5b-ab68-4627-a217-07ad465db30d`)}catch{}})();import{n as e,s as t}from"./jsx-runtime-B6GX0J-i.js";import{h as n,m as r,n as i,p as a,r as o,v as s}from"./emotion-react-jsx-runtime.browser.esm-B87VA51i.js";import{n as c,t as l}from"./FlexWrapper-CXXneU9J.js";import{O as u}from"./axios-DA8hz_xA.js";import{f as d}from"./useAPI-sFgzbDEC.js";import{t as f}from"./Icon-Dr7d0rj_.js";import{t as p}from"./useTranslation-Vrw8Qbb7.js";import{t as m}from"./Close-nnTwh9zn.js";import{t as h}from"./Typography-BaYtEiZ2.js";function g(e,t=!1){let n=Math.floor(e/60),r=(e%60).toString().padStart(2,`0`);return t?`${n<12?u.t(`common.am`):u.t(`common.pm`)} ${(n%12==0?12:n%12).toString().padStart(2,`0`)}:${r}`:n.toString().padStart(2,`0`)+`:`+r}function _(e){return`${d(e.day)} ${g(e.begin,!0)} - ${g(e.end,!0)}`}var v=c(l)`
    width: 100%;
`,y=c(h)`
    width: 100%;
    border-radius: 6px;
    padding: 8px 10px;
    background-color: ${({theme:e})=>e.colors.Background.Button.default};
`,b=c.button`
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
`;function x({timeFilter:e,setTimeFilter:t,removeLabel:n,disabled:r}){let{t:a}=p();return i(l,{direction:`column`,gap:0,style:{width:`100%`},children:i(v,{direction:`row`,gap:0,children:e?o(l,{direction:`row`,justify:`space-between`,gap:10,align:`center`,children:[i(h,{color:`Text.default`,type:`Normal`,children:`${_(e)}`}),t&&i(b,{type:`button`,"aria-label":n??a(`common.search.reset`),disabled:r,onClick:()=>t(null),children:i(f,{size:15,style:{cursor:`inherit`},children:i(m,{})})})]}):i(y,{color:`Text.light`,type:`Normal`,children:a(`common.search.timeFilterPlaceholder`)})})})}var S=t(e());function C(e,t){if(e.inserted[t.name]===void 0)return e.insert(``,t,e.sheet,!0)}function w(e,t,n){var i=[],a=r(e,i,n);return i.length<2?n:a+t(i)}var T=function(e){var t=s(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var i=function(){var e=a([...arguments],t.registered,void 0);return n(t,e,!1),t.key+`-`+e.name};return{css:i,cx:function(){var e=[...arguments];return w(t.registered,i,E(e))},injectGlobal:function(){C(t,a([...arguments],t.registered))},keyframes:function(){var e=a([...arguments],t.registered),n=`animation-`+e.name;return C(t,{name:e.name,styles:`@keyframes `+n+`{`+e.styles+`}`}),n},hydrate:function(e){e.forEach(function(e){t.inserted[e]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:r.bind(null,t.registered),merge:w.bind(null,t.registered,i)}},E=function e(t){for(var n=``,r=0;r<t.length;r++){var i=t[r];if(i!=null){var a=void 0;switch(typeof i){case`boolean`:break;case`object`:if(Array.isArray(i))a=e(i);else for(var o in a=``,i)i[o]&&o&&(a&&(a+=` `),a+=o);break;default:a=i}a&&(n&&(n+=` `),n+=a)}}return n},D=T({key:`css`});D.flush,D.hydrate,D.cx,D.merge,D.getRegisteredStyles,D.injectGlobal,D.keyframes;var O=D.css;D.sheet,D.cache;var k=O`
    border-color: red;
`,A=c.input`
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
    ${({$hasError:e})=>e&&k};
`,j=c.div`
    width: 100%;
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    gap: 4px;
`,M=c.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`,N=(0,S.forwardRef)(({placeholder:e,errorMessage:t=``,disabled:n=!1,value:r=``,handleChange:a,setErrorStatus:o,$placeholderColor:s,...c},l)=>((0,S.useEffect)(()=>{o?.(!!t)},[t,o]),i(j,{children:i(M,{children:i(A,{ref:l,placeholder:e,$hasError:!!t,disabled:n,value:r,onChange:e=>{a?.(e.target.value)},$placeholderColor:s,...c})})})));N.displayName=`TextInput`;export{x as n,N as t};
//# sourceMappingURL=TextInput-tq3SWTFl.js.map