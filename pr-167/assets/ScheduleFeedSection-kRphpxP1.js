(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`8707f38e0f975e97395e59b60ae4c3572147bbb8`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`5e6f55ea-1d74-47db-932a-9ecd2e0057e7`,e._sentryDebugIdIdentifier=`sentry-dbid-5e6f55ea-1d74-47db-932a-9ecd2e0057e7`)}catch{}})();import{n as e,r as t}from"./emotion-react-jsx-runtime.browser.esm-PrkxXy5Y.js";import{n,t as r}from"./FlexWrapper-BNMr1GYT.js";import{t as i}from"./useTranslation-_QY1mME6.js";import{t as a}from"./Typography-OBYBVh1u.js";import{t as o}from"./Widget-BUS1Vqp3.js";import{t as s}from"./Line-CgaSy50i.js";var c=[],l=5,u=n(a)`
    flex: 1 1 0;
    contain: inline-size;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        overflow: visible;
        white-space: normal;
    }
`,d=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate();function f(e,t,n){let r=e.getFullYear()!==n||t.getFullYear()!==n,i=e=>{let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return r?`${e.getFullYear()}.${t}.${n}`:`${t}/${n}`};return d(e,t)?i(e):`${i(e)} - ${i(t)}`}var p=n(a)`
    min-height: 100px;
    flex-grow: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;function m(){let{t:n}=i(),d=new Date;d.setHours(0,0,0,0);let m=c.filter(e=>e.to.getTime()>=d.getTime()).slice(0,l);return t(o,{direction:`column`,gap:20,align:`stretch`,padding:`30px`,flex:`1 1 0`,children:[e(r,{direction:`row`,gap:0,children:e(a,{type:`BiggerBold`,color:`Text.default`,children:n(`main.scheduleFeed.title`)})}),t(r,{direction:`column`,align:`stretch`,gap:15,flex:`1 1 0`,children:[m.length===0?e(p,{type:`BiggerBold`,color:`Text.default`,children:n(`main.scheduleFeed.noSchedules`)}):null,m.map((n,i)=>t(r,{direction:`column`,align:`stretch`,gap:15,children:[t(r,{direction:`row`,justify:`space-between`,gap:12,children:[e(a,{type:`BigBold`,color:`Highlight.default`,children:f(n.from,n.to,d.getFullYear())}),e(u,{type:`BigBold`,color:`Text.default`,children:n.name})]}),i<m.length-1?e(s,{height:1,color:`Line.default`}):null]},`${n.from.getTime()}-${n.to.getTime()}-${n.name}`))]})]})}export{m as default};
//# sourceMappingURL=ScheduleFeedSection-kRphpxP1.js.map