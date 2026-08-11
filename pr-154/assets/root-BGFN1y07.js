(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`7bc4bc88055d20e7571a7bbe4cf0a353909b8258`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`6be19b0f-c80b-461d-a5a2-46bc30094ba7`,e._sentryDebugIdIdentifier=`sentry-dbid-6be19b0f-c80b-461d-a5a2-46bc30094ba7`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CgiDS-on.js";import{Et as r,f as i,t as a}from"./env-DfDJH5P1.js";import{t as o}from"./react-dom-CviTcVCb.js";import{A as s,D as c,S as l,a as u,d,i as f,j as p,r as m,s as h,u as g}from"./chunk-QFMPRPBF-Be_GygAR.js";import{l as ee,n as _,o as te,r as v,t as ne}from"./emotion-react-jsx-runtime.browser.esm-DrgiQuPp.js";import{n as y,t as b}from"./FlexWrapper-Bjs91N9K.js";import{D as re,c as ie,d as x,f as ae,g as oe,h as se,i as S,j as C,l as ce,m as le,n as w,s as ue,t as T,u as E,v as de,y as fe}from"./axios-BhFv99E1.js";import{p as pe,t as D,u as O}from"./useAPI-Bav88ygH.js";import{r as k,t as A}from"./Icon-NeY_MQR1.js";import{t as j}from"./Trans-Bk-Sa350.js";import{n as me,r as he,t as M}from"./useTranslation-2DLH1fNj.js";import{t as ge}from"./Close-BAJBy9nR.js";import{t as N}from"./Typography-CtJRZt-d.js";import{t as P}from"./Modal-0Udurgda.js";import{t as _e}from"./Button-Cm2hHKxi.js";import{n as ve,r as ye,t as be}from"./proxy-DMd_kHc0.js";import{t as xe}from"./StyledDivider-B9FTRG7Q.js";import{t as F}from"./media-BS1y2gnI.js";import{n as Se,t as Ce}from"./handleLoginLogout-D63VyckF.js";import{t as I}from"./useIsDevice-CCI267YY.js";import{t as L}from"./useThemeStore-Cif6aeMQ.js";import{a as we,i as Te,n as Ee,t as De}from"./index.esm-D7zU6tPR.js";import{t as Oe}from"./themes-CfsU5X9f.js";function R(e){return e}function ke(e){return{mutationKey:e.options.mutationKey,state:e.state,...e.options.scope&&{scope:e.options.scope},...e.meta&&{meta:e.meta}}}function Ae(e,t,n){let r=()=>{let r=e.promise?.then(t).catch(e=>n(e)?Promise.reject(Error(`redacted`)):Promise.reject(e));return r?.catch(C),r};return{dehydratedAt:Date.now(),state:{...e.state,...e.state.data!==void 0&&{data:t(e.state.data)}},queryKey:e.queryKey,queryHash:e.queryHash,...e.state.status===`pending`&&{promise:r()},...e.meta&&{meta:e.meta}}}function je(e){return e.state.isPaused}function Me(e){return e.state.status===`success`}function Ne(e){return!0}function Pe(e,t={}){let n=t.shouldDehydrateMutation??e.getDefaultOptions().dehydrate?.shouldDehydrateMutation??je,r=e.getMutationCache().getAll().flatMap(e=>n(e)?[ke(e)]:[]),i=t.shouldDehydrateQuery??e.getDefaultOptions().dehydrate?.shouldDehydrateQuery??Me,a=t.shouldRedactErrors??e.getDefaultOptions().dehydrate?.shouldRedactErrors??Ne,o=t.serializeData??e.getDefaultOptions().dehydrate?.serializeData??R;return{mutations:r,queries:e.getQueryCache().getAll().flatMap(e=>i(e)?[Ae(e,o,a)]:[])}}function Fe(e,t,n){if(typeof t!=`object`||!t)return;let r=e.getMutationCache(),i=e.getQueryCache(),a=n?.defaultOptions?.deserializeData??e.getDefaultOptions().hydrate?.deserializeData??R,o=t.mutations||[],s=t.queries||[];o.forEach(({state:t,...i})=>{r.build(e,{...e.getDefaultOptions().hydrate?.mutations,...n?.defaultOptions?.mutations,...i},t)}),s.forEach(({queryKey:t,state:r,queryHash:o,meta:s,promise:c,dehydratedAt:l})=>{let u=c?re(c):void 0,d=r.data===void 0?u?.data:r.data,f=d===void 0?d:a(d),p=i.get(o),m=p?.state.status===`pending`,h=p?.state.fetchStatus===`fetching`;if(p){let e=u&&l!==void 0&&l>p.state.dataUpdatedAt;if(r.dataUpdatedAt>p.state.dataUpdatedAt||e){let{fetchStatus:e,...t}=r;p.setState({...t,data:f})}}else p=i.build(e,{...e.getDefaultOptions().hydrate?.queries,...n?.defaultOptions?.queries,queryKey:t,queryHash:o,meta:s},{...r,data:f,fetchStatus:`idle`,status:f===void 0?r.status:`success`});c&&!m&&!h&&(l===void 0||l>p.state.dataUpdatedAt)&&p.fetch(void 0,{initialPromise:Promise.resolve(c).then(a)}).catch(C)})}var z=t(e()),Ie=function(){return null},B=t(n(),1),Le=k((0,B.jsx)(`path`,{d:`M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z`}),`Menu`);function Re({i18n:e,defaultNS:t,children:n}){let r=(0,z.useMemo)(()=>({i18n:e,defaultNS:t}),[e,t]);return(0,z.createElement)(me.Provider,{value:r},n)}var V=y(N)`
    cursor: pointer;
    display: inline-block;
`,H=y(N)`
    opacity: 50%;
`,ze=({userInfo:e})=>{let{t}=M();return v(b,{direction:`column`,gap:12,children:[[[t(`account.name`),e?.name],[t(`account.email`),e?.mail]].map(([e,t],n)=>v(b,{direction:`row`,gap:8,align:`center`,children:[_(N,{type:`NormalBold`,color:`Text.default`,children:e}),_(N,{type:`Normal`,color:`Text.default`,children:t})]},n)),_(H,{type:`Smaller`,color:`Text.default`,children:_(j,{i18nKey:`account.sparcsssoCaption`,components:{bold:_(V,{type:`Smaller`,color:`Highlight.default`,onClick:()=>{window.open(`https://sparcssso.kaist.ac.kr/account/profile/`)},children:void 0})}})}),[[t(`account.schoolId`),e?.studentNumber],[t(`account.course`),e?.degree],[t(`account.major`),e?.majorDepartments.map(e=>e.name).join(`, `)]].map(([e,t],n)=>v(b,{direction:`row`,gap:8,align:`center`,children:[_(N,{type:`NormalBold`,color:`Text.default`,children:e}),_(N,{type:`Normal`,color:`Text.default`,children:t})]},n)),_(H,{type:`Smaller`,color:`Text.default`,children:_(j,{i18nKey:`account.kaistPortalCaption`,components:{bold:_(V,{type:`Smaller`,color:`Highlight.default`,onClick:()=>{window.location.href=`mailto:otlplus@sparcs.org`},children:void 0})}})})]})},Be=y(b)`
    width: 100%;
    max-width: 630px;
    min-height: 316px;
    border-radius: 12px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    padding: 14px 4px 0 12px;

    ${F.tablet} {
        max-width: none;
    }
`,Ve=y(b)`
    border-radius: 8px;
    width: 100%;
`,He=y.div`
    color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: none;
`,Ue=y(b)`
    flex-grow: 1;
    flex-wrap: wrap;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    font-weight: ${({theme:e})=>e.fonts.Normal.fontWeight};
    max-height: 100px;
    overflow-y: auto;

    scrollbar-width: none;
`,We=y(b)`
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 6px;
    padding: 8px 10px;
    white-space: nowrap;
`,Ge=y.input`
    border: none;
    outline: none;
    flex-grow: 1;
    min-width: 150px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    color: ${({theme:e})=>e.colors.Text.default};
`,Ke=y.div`
    width: 100%;
    overflow-y: auto;
    height: 248px;
    margin-bottom: 10px;

    scrollbar-width: none;
`,qe=y(N)`
    padding: 8px 10px;
    cursor: pointer;
    min-height: 32px;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.default};
    }
`,Je=({currentDepartment:e,setCurrentDepartment:t})=>{let{t:n}=M(),{query:r}=D(`GET`,`/department-options`),[i,a]=(0,z.useState)(``),[o,s]=(0,z.useState)([]),c=(0,z.useRef)(null);function l(e){let t=r.data?.departments?.find(t=>t.id===e);return t?t.name:void 0}let u=n=>{e.map(e=>e.id).includes(n.id)||t([...e,n]),a(``)},d=n=>{t(e.filter(e=>e.id!==n))};return(0,z.useEffect)(()=>{r.data?.departments&&s(r.data.departments.filter(t=>{let n=!e.map(e=>e.id).includes(t.id);if(!t.name||!t.code)return!1;let r=i.trim()===``?!0:(t.name+` (`+t.code+`)`).toLowerCase().includes(i.toLowerCase());return n&&r}))},[i,e]),v(Be,{direction:`column`,gap:12,children:[v(Ve,{direction:`row`,gap:8,align:`center`,children:[_(He,{children:_(A,{size:18,children:_(ye,{})})}),v(Ue,{onClick:()=>{c.current?.focus()},direction:`row`,gap:8,align:`center`,children:[e.map((e,t)=>v(We,{direction:`row`,gap:8,align:`center`,children:[l(e.id),_(A,{size:16,onClick:t=>{t.stopPropagation(),d(e.id)},children:_(ge,{})})]},t)),_(Ge,{ref:c,type:`text`,value:i,onChange:e=>{a(e.target.value)},onKeyDown:n=>{n.key===`Enter`?n.preventDefault():n.key===`Backspace`&&i===``&&e.length>0&&t(e.slice(0,-1))},placeholder:e.length===0?n(`common.search.placeholder`):``})]})]}),_(xe,{}),_(Ke,{children:o.map(e=>v(qe,{type:`Normal`,color:`Text.default`,onClick:()=>u(e),children:[e.name,` (`,e.code,`)`]},e.id))})]})},Ye=y(b)`
    margin: 10px 0;
`,Xe=y.button`
    height: 32px;
    padding: 8px 10px;
    border-radius: 6px;
    border: none;
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    white-space: nowrap;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.dark};
    }
`,Ze=({userInfo:e})=>{let{t,i18n:n}=M(),r=fe(),{query:i}=D(`GET`,`/department-options`),{requestFunction:a}=D(`PUT`,`/users/${e?.id}/interested-departments`,{onSuccess:()=>{r.invalidateQueries({queryKey:[`/users/info`]})}}),[o,s]=(0,z.useState)(!1),[c,l]=(0,z.useState)([]),u=()=>{l(e?[...e.interestedDepartments]:[]),s(!0)};function d(e){let t=i.data?.departments?.find(t=>t.id===e);return t?n.language===`en`?t.code:t.name:void 0}function f(){a({interestedDepartmentIds:c.map(e=>e.id)}),s(!1)}return v(Ye,{direction:`column`,gap:12,children:[v(b,{direction:`row`,gap:12,align:`center`,justify:`space-between`,style:{width:`100%`},children:[_(N,{type:`NormalBold`,color:`Text.default`,style:{whiteSpace:`nowrap`},children:t(`account.interestedDepartments`)}),!o&&v(b,{direction:`row`,gap:8,align:`center`,children:[_(N,{type:`Normal`,color:`Text.default`,children:e?.interestedDepartments.map(e=>d(e.id)||``).join(`, `)}),_(Xe,{onClick:u,children:t(`common.edit`)})]})]}),o&&v(ne,{children:[_(Je,{currentDepartment:c,setCurrentDepartment:l}),_(_e,{type:`selected`,style:{width:`100%`,height:`48px`},onClick:f,children:t(`common.save`)})]})]})},Qe=y(N)`
    cursor: pointer;
`,$e=({userInfo:e,accountPageOpen:t,setAccountPageOpen:n})=>{let r=I(`tablet`),{t:i}=M();return v(P,{isOpen:t,onClose:()=>n(!1),title:i(`account.title`),fullScreen:r,children:[_(ze,{userInfo:e}),_(Ze,{userInfo:e}),_(Qe,{type:`Normal`,color:`Highlight.default`,onClick:Se,children:i(`account.logout`)})]})},et=y.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    color: ${({theme:e})=>e.colors.Text.default};
    margin: 10px 0;

    &:focus {
        outline: none;
    }
`,tt=({developerLoginModalOpen:e,setDeveloperLoginModalOpen:t})=>{let n=I(`tablet`),[r,i]=(0,z.useState)(``),a=()=>{if(!r){alert(`학번을 입력해주세요.`);return}if(r.match(/[^0-9]/)){alert(`학번은 숫자만 입력 가능합니다.`);return}ue(`devStudentId`,r),location.reload()};return v(P,{isOpen:e,onClose:()=>t(!1),title:`DEV 로그인`,fullScreen:n,children:[_(et,{type:`text`,placeholder:`학번을 입력해주세요.`,value:r,onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`&&a()}}),_(b,{direction:`row`,gap:0,justify:`flex-end`,align:`center`,children:_(_e,{type:`selected`,onClick:a,children:`로그인`})})]})},U=k((0,B.jsx)(`path`,{d:`M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96M3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4z`}),`CloudOff`),nt=y(b)`
    gap: 231px;

    ${F.tablet} {
        flex: 1;
        gap: 0;
    }
`,rt=y.img`
    min-width: 55px;
    height: 27px;
    background: transparent;
`,it=y(b)`
    ${F.mobile} {
        display: none;
    }
`,W=y(m)`
    text-decoration: none;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`;y.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({theme:e})=>e.colors.Highlight.default};
`;var at=y.span`
    text-decoration: none;
    color: ${({theme:e})=>e.colors.Text.disable};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    cursor: not-allowed;
    opacity: 0.5;
    position: relative;

    &:hover::after {
        content: attr(data-tooltip);
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 8px;
        padding: 6px 10px;
        background-color: ${({theme:e})=>e.colors.Background.Section.default};
        border-radius: 6px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        color: ${({theme:e})=>e.colors.Text.placeholder};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
`,ot=y(b)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 4px 8px;
`,st=({setMobileSidebarOpen:e})=>{let{t}=M(),n=w(e=>e.isBackendReachable),{status:r}=S();I(`mobile`);let i=!n&&r===`success`,a=(e,n)=>i&&e!==`/`&&e!==`/timetable`?_(at,{"data-tooltip":t(`common.offline.navDisabled`),children:n}):_(W,{to:e,children:n});return v(nt,{direction:`row`,justify:`space-between`,align:`center`,gap:0,children:[_(b,{direction:`row`,gap:20,align:`center`,children:_(W,{to:`/`,onClick:e,children:_(rt,{src:`/otlplus-web-v4/pr-154/headerIcon.png`,alt:`Logo`})})}),v(it,{direction:`row`,gap:24,align:`center`,children:[a(`/dictionary`,t(`header.dictionary`)),a(`/write-reviews`,t(`header.writeReviews`)),a(`/timetable`,t(`header.timetable`)),i&&v(ot,{direction:`row`,align:`center`,gap:6,children:[_(A,{size:14,color:`inherit`,children:_(U,{})}),_(N,{type:`Small`,color:`Text.placeholder`,children:t(`common.offline.banner`)})]})]})]})},ct=k((0,B.jsx)(`path`,{d:`M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z`}),`KeyboardArrowRight`),lt=t(o(),1),ut=y.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(51, 51, 51, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
    pointer-events: auto;
`,dt=y(be.div)`
    width: 200px;
    height: 100dvh;
    position: absolute;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
    padding: 24px 20px;
    display: flex;
    transition: max-height 1s ease-in-out;
    overflow: hidden;
    justify-content: space-between;
    flex-direction: column;
`,ft=y(m)`
    text-decoration: none;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    white-space: nowrap;

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`;y.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({theme:e})=>e.colors.Highlight.default};
`;var pt=y.span`
    text-decoration: none;
    color: ${({theme:e})=>e.colors.Text.disable};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    white-space: nowrap;
    cursor: not-allowed;
    opacity: 0.5;
`,mt=y(b)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 8px 12px;
    margin-top: 12px;
`,ht=({mobileSidebarOpen:e,setMobileSidebarOpen:t,sidebarHeader:n})=>{let r=ee(),{t:i}=M(),a=w(e=>e.isBackendReachable),{status:o}=S(),s=!a&&o===`success`,c=(0,z.useRef)(null);(0,z.useEffect)(()=>{e?document.body.style.overflow=`hidden`:document.body.style.overflow=`auto`},[e]);let l=()=>{t(!1)},u=(e,t)=>s&&e!==`/`&&e!==`/timetable`?_(pt,{children:t}):_(ft,{to:e,onClick:l,children:t});return lt.createPortal(_(ve,{children:e&&_(ut,{onMouseDown:e=>{c.current=e.target},onMouseUp:e=>{c.current===e.currentTarget&&e.target===e.currentTarget&&t(!1)},children:v(dt,{initial:`hidden`,animate:`visible`,exit:`hidden`,variants:{hidden:{right:`-50%`},visible:{right:0}},transition:{duration:.3,ease:`easeInOut`},children:[v(b,{direction:`column`,gap:35,align:`flex-end`,children:[n,v(b,{direction:`column`,gap:20,align:`flex-end`,children:[u(`/dictionary`,i(`header.dictionary`)),u(`/write-reviews`,i(`header.writeReviews`)),u(`/timetable`,i(`header.timetable`))]}),s&&v(mt,{direction:`column`,align:`flex-end`,gap:6,children:[v(b,{direction:`row`,align:`center`,gap:6,children:[_(A,{size:14,color:r.colors.Text.placeholder,children:_(U,{})}),_(N,{type:`Small`,color:`Text.placeholder`,children:i(`common.offline.banner`)})]}),_(N,{type:`Smaller`,color:`Text.disable`,children:i(`common.offline.navDisabled`)})]})]}),_(A,{size:20,onClick:()=>t(!1),color:r.colors.Text.default,children:_(ct,{})})]})})}),document.body)},gt=k((0,B.jsx)(`path`,{d:`M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1`}),`DarkMode`),_t=k((0,B.jsx)(`path`,{d:`M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z`}),`Language`),vt=k((0,B.jsx)(`path`,{d:`M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z`}),`LightMode`),yt=k((0,B.jsx)(`path`,{d:`M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4`}),`Person`),G=k((0,B.jsx)(`path`,{d:`M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6`}),`Settings`),bt=y(b)`
    color: ${({theme:e})=>e.colors.Text.default};
    width: ${({mobileSidebar:e})=>e?`100%`:`auto`};
`,xt=y(b)`
    cursor: pointer;
`,St=y(b)`
    cursor: pointer;
`,K=({handleAccountButtonClick:e,userName:t,mobileSidebar:n,isLoading:r})=>{let{t:i,i18n:a}=M(),{themeSetting:o,setTheme:s}=L();return(0,z.useEffect)(()=>{T.defaults.headers.common[`Accept-Language`]=a.resolvedLanguage},[]),v(bt,{direction:n?`column-reverse`:`row`,justify:`space-between`,align:`center`,gap:n?9:16,mobileSidebar:n,children:[!n&&_(A,{size:16,onClick:()=>{switch(o){case`dark`:s(`light`);break;case`light`:s(`system`);break;case`system`:s(`dark`);break;default:s(`system`);break}},children:_(()=>{switch(o){case`dark`:return _(gt,{});case`light`:return _(vt,{});case`system`:return _(G,{});default:return _(G,{})}},{})}),v(xt,{direction:n?`row`:`column`,gap:4,align:`center`,onClick:()=>{let e=a.resolvedLanguage===`ko`?`en`:`ko`;a.changeLanguage(e),T.defaults.headers.common[`Accept-Language`]=e},children:[_(A,{size:16,children:_(_t,{})}),n&&i(`common.language`)]}),r?`Loading...`:v(St,{direction:`row`,gap:4,align:`center`,onClick:e,children:[_(A,{size:16,children:_(yt,{})}),_(N,{type:n?`NormalBold`:`Normal`,color:`Text.default`,children:t})]})]})};function Ct({enabled:e,isLoading:t,isError:n,data:r}){if(!(!e||t))return n?null:r??null}var wt=y.div`
    width: 100%;
    height: max-content;
    z-index: 500;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
    padding-bottom: 5px;
`,Tt=y.div`
    width: 100%;
    height: 5px;
    background: ${({theme:e,selectedTheme:t})=>t===`light`?e.colors.Highlight.default:`transparent`};
`,Et=y.header`
    height: 50px;
    padding-inline: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    gap: 16px;
`,Dt=y.div`
    color: ${({theme:e})=>e.colors.Text.default};
    display: none;

    ${F.mobile} {
        display: block;
    }
`,Ot=()=>{let e=I(`mobile`),{displayedTheme:t}=L(),{setUser:n,clearUser:r}=S(),[i,o]=(0,z.useState)(!1),[s,c]=(0,z.useState)(!1),[l,u]=(0,z.useState)(!1),[d,f]=(0,z.useState)(!1),[p,m]=(0,z.useState)(null),{query:h}=D(`GET`,ae.userInfo,{enabled:i,staleTime:0}),g=()=>{p===null?Ce():c(!0)};return(0,z.useEffect)(()=>{a.VITE_DEV_MODE&&(T.defaults.headers.common[`X-SID-AUTH-TOKEN`]=a.VITE_APP_DEV_API_AUTH_TOKEN),o(!0)},[]),(0,z.useEffect)(()=>{let e=Ct({enabled:i,isLoading:h.isLoading,isError:h.isError,data:h.data});e!==void 0&&(e===null?(m(null),r(),o(!1)):(m(e),n({id:e.id,name:e.name}),se({id:e.id,email:e.mail,name:e.name,studentNumber:e.studentNumber,degree:e.degree})))},[r,i,h.data,h.isError,h.isLoading,n]),(0,z.useEffect)(()=>{e||f(!1)},[e]),v(wt,{children:[l&&_(tt,{developerLoginModalOpen:l,setDeveloperLoginModalOpen:u}),s&&_($e,{userInfo:p,accountPageOpen:s,setAccountPageOpen:c}),_(Tt,{selectedTheme:t}),v(Et,{children:[_(st,{setMobileSidebarOpen:()=>f(!1)}),_(K,{handleAccountButtonClick:g,userName:p?p.name:`Sign in`,mobileSidebar:!1,isLoading:h.isLoading}),_(Dt,{onClick:()=>f(!0),children:_(A,{size:18,children:_(Le,{})})})]}),_(ht,{setMobileSidebarOpen:f,mobileSidebarOpen:d,sidebarHeader:_(K,{handleAccountButtonClick:g,userName:p?p.name:`Sign in`,mobileSidebar:!0,isLoading:h.isLoading})})]})},q=a.VITE_GA_MEASUREMENT_ID,kt=e=>{!q||window.gtag===void 0||window.gtag(`config`,q,{page_path:e})},At=()=>{let e=c();(0,z.useEffect)(()=>{q&&kt(e.pathname+e.search)},[e.pathname,e.search])},jt=[`added`,`removed`,`updated`];function J(e){return jt.includes(e)}async function Mt({queryClient:e,persister:t,maxAge:n=1e3*60*60*24,buster:r=``,hydrateOptions:i}){try{let a=await t.restoreClient();if(a)if(a.timestamp){let o=Date.now()-a.timestamp>n,s=a.buster!==r;if(o||s)return t.removeClient();Fe(e,a.clientState,i)}else return t.removeClient()}catch(e){throw await t.removeClient(),e}}async function Y({queryClient:e,persister:t,buster:n=``,dehydrateOptions:r}){let i={buster:n,timestamp:Date.now(),clientState:Pe(e,r)};await t.persistClient(i)}function Nt(e){let t=e.queryClient.getQueryCache().subscribe(t=>{J(t.type)&&Y(e)}),n=e.queryClient.getMutationCache().subscribe(t=>{J(t.type)&&Y(e)});return()=>{t(),n()}}var Pt=({children:e,persistOptions:t,onSuccess:n,onError:r,...i})=>{let[a,o]=z.useState(!0),s=z.useRef({persistOptions:t,onSuccess:n,onError:r}),c=z.useRef(!1);return z.useEffect(()=>{s.current={persistOptions:t,onSuccess:n,onError:r}}),z.useEffect(()=>{let e={...s.current.persistOptions,queryClient:i.client};return c.current||(c.current=!0,Mt(e).then(()=>s.current.onSuccess?.()).catch(()=>s.current.onError?.()).finally(()=>{o(!1)})),a?void 0:Nt(e)},[i.client,a]),(0,B.jsx)(de,{...i,children:(0,B.jsx)(pe,{value:a,children:e})})},Ft=()=>{let{user:e}=S(),t=a.VITE_CHANNELTALK_PLUGIN_KEY,n=(0,z.useRef)(!1),r=(0,z.useCallback)(()=>{t&&(Ee(),De({pluginKey:t},e=>{e?console.error(`[ChannelTalk] Boot failed:`,e):n.current=!0}))},[t]);return(0,z.useEffect)(()=>{if(t)return r(),()=>{if(n.current=!1,Te(),typeof window<`u`){let e=window;delete e.ChannelIO,delete e.ChannelIOInitialized}}},[t,r]),(0,z.useEffect)(()=>{!n.current||!t||!e||we({profile:{name:e.name}})},[e,t]),null},{slice:It,forEach:Lt}=[];function Rt(e){return Lt.call(It.call(arguments,1),t=>{if(t)for(let n in t)e[n]===void 0&&(e[n]=t[n])}),e}function zt(e){return typeof e==`string`?[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(e)):!1}var X=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Bt=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:`/`},r=`${e}=${encodeURIComponent(t)}`;if(n.maxAge>0){let e=n.maxAge-0;if(Number.isNaN(e))throw Error(`maxAge should be a Number`);r+=`; Max-Age=${Math.floor(e)}`}if(n.domain){if(!X.test(n.domain))throw TypeError(`option domain is invalid`);r+=`; Domain=${n.domain}`}if(n.path){if(!X.test(n.path))throw TypeError(`option path is invalid`);r+=`; Path=${n.path}`}if(n.expires){if(typeof n.expires.toUTCString!=`function`)throw TypeError(`option expires is invalid`);r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+=`; HttpOnly`),n.secure&&(r+=`; Secure`),n.sameSite)switch(typeof n.sameSite==`string`?n.sameSite.toLowerCase():n.sameSite){case!0:r+=`; SameSite=Strict`;break;case`lax`:r+=`; SameSite=Lax`;break;case`strict`:r+=`; SameSite=Strict`;break;case`none`:r+=`; SameSite=None`;break;default:throw TypeError(`option sameSite is invalid`)}return n.partitioned&&(r+=`; Partitioned`),r},Z={create(e,t,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:`/`,sameSite:`strict`};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),r&&(i.domain=r),document.cookie=Bt(e,t,i)},read(e){let t=`${e}=`,n=document.cookie.split(`;`);for(let e=0;e<n.length;e++){let r=n[e];for(;r.charAt(0)===` `;)r=r.substring(1,r.length);if(r.indexOf(t)===0)return r.substring(t.length,r.length)}return null},remove(e,t){this.create(e,``,-1,t)}},Vt={name:`cookie`,lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<`u`)return Z.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:i,cookieOptions:a}=t;n&&typeof document<`u`&&Z.create(n,e,r,i,a)}},Ht={name:`querystring`,lookup(e){let{lookupQuerystring:t}=e,n;if(typeof window<`u`){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf(`?`)>-1&&(e=window.location.hash.substring(window.location.hash.indexOf(`?`)));let r=e.substring(1).split(`&`);for(let e=0;e<r.length;e++){let i=r[e].indexOf(`=`);i>0&&r[e].substring(0,i)===t&&(n=r[e].substring(i+1))}}return n}},Ut={name:`hash`,lookup(e){let{lookupHash:t,lookupFromHashIndex:n}=e,r;if(typeof window<`u`){let{hash:e}=window.location;if(e&&e.length>2){let i=e.substring(1);if(t){let e=i.split(`&`);for(let n=0;n<e.length;n++){let i=e[n].indexOf(`=`);i>0&&e[n].substring(0,i)===t&&(r=e[n].substring(i+1))}}if(r)return r;if(!r&&n>-1){let t=e.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?t[typeof n==`number`?n:0]?.replace(`/`,``):void 0}}}return r}},Q=null,Wt=()=>{if(Q!==null)return Q;try{if(Q=typeof window<`u`&&window.localStorage!==null,!Q)return!1;let e=`i18next.translate.boo`;window.localStorage.setItem(e,`foo`),window.localStorage.removeItem(e)}catch{Q=!1}return Q},Gt={name:`localStorage`,lookup(e){let{lookupLocalStorage:t}=e;if(t&&Wt())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&Wt()&&window.localStorage.setItem(n,e)}},$=null,Kt=()=>{if($!==null)return $;try{if($=typeof window<`u`&&window.sessionStorage!==null,!$)return!1;let e=`i18next.translate.boo`;window.sessionStorage.setItem(e,`foo`),window.sessionStorage.removeItem(e)}catch{$=!1}return $},qt={name:`sessionStorage`,lookup(e){let{lookupSessionStorage:t}=e;if(t&&Kt())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Kt()&&window.sessionStorage.setItem(n,e)}},Jt={name:`navigator`,lookup(e){let t=[];if(typeof navigator<`u`){let{languages:e,userLanguage:n,language:r}=navigator;if(e)for(let n=0;n<e.length;n++)t.push(e[n]);n&&t.push(n),r&&t.push(r)}return t.length>0?t:void 0}},Yt={name:`htmlTag`,lookup(e){let{htmlTag:t}=e,n,r=t||(typeof document<`u`?document.documentElement:null);return r&&typeof r.getAttribute==`function`&&(n=r.getAttribute(`lang`)),n}},Xt={name:`path`,lookup(e){let{lookupFromPathIndex:t}=e;if(typeof window>`u`)return;let n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(Array.isArray(n))return n[typeof t==`number`?t:0]?.replace(`/`,``)}},Zt={name:`subdomain`,lookup(e){let{lookupFromSubdomainIndex:t}=e,n=typeof t==`number`?t+1:1,r=typeof window<`u`&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}},Qt=!1;try{document.cookie,Qt=!0}catch{}var $t=[`querystring`,`cookie`,`localStorage`,`sessionStorage`,`navigator`,`htmlTag`];Qt||$t.splice(1,1);var en=()=>({order:$t,lookupQuerystring:`lng`,lookupCookie:`i18next`,lookupLocalStorage:`i18nextLng`,lookupSessionStorage:`i18nextLng`,caches:[`localStorage`],excludeCacheFor:[`cimode`],convertDetectedLanguage:e=>e}),tn=class{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type=`languageDetector`,this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Rt(t,this.options||{},en()),typeof this.options.convertDetectedLanguage==`string`&&this.options.convertDetectedLanguage.indexOf(`15897`)>-1&&(this.options.convertDetectedLanguage=e=>e.replace(`-`,`_`)),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Vt),this.addDetector(Ht),this.addDetector(Gt),this.addDetector(qt),this.addDetector(Jt),this.addDetector(Yt),this.addDetector(Xt),this.addDetector(Zt),this.addDetector(Ut)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let n=this.detectors[e].lookup(this.options);n&&typeof n==`string`&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(e=>e!=null&&!zt(e)).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}};tn.type=`languageDetector`;var nn={title:`My Account`,name:`Name`,email:`Email`,schoolId:`School ID`,course:`Course`,major:`Major`,interestedDepartments:`Interested Departments`,logout:`Logout`,sparcsssoCaption:`This information can be changed in <bold>SPARCS SSO</bold>`,kaistPortalCaption:`This information is synced with KAIST Portal. If the information does not match, please contact <bold>otlplus@sparcs.org</bold>`},rn={monday:`Mon`,tuesday:`Tue`,wednesday:`Wed`,thursday:`Thu`,friday:`Fri`,saturday:`Sat`,sunday:`Sun`,mondayShort:`Mon`,tuesdayShort:`Tue`,wednesdayShort:`Wed`,thursdayShort:`Thu`,fridayShort:`Fri`,saturdayShort:`Sat`,sundayShort:`Sun`},an={hssShort:`HSS`,aeShort:`AE`,bisShort:`BiS`,bsShort:`BS`,cbeShort:`CBE`,ceShort:`CE`,chShort:`CH`,csShort:`CS`,eeShort:`EE`,idShort:`ID`,ieShort:`IE`,masShort:`MAS`,meShort:`ME`,nqeShort:`NQE`,btmShort:`BTM`,msShort:`MS`,phShort:`PH`,tsShort:`TS`,ssShort:`SS`,bcsShort:`BCS`,etcShort:`ETC`},on={class:`Class`,professor:`Professor`,description:`Description`,grade:`Grade`,load:`Load`,speech:`Speech`,upload:`Upload`,numClasses:`Lec. Hours`,numLabs:`Lab Hours`,credit:`Credits`,cancel:`Cancel`,save:`Save`,edit:`Edit`,hours:`Hours`,minutes:`Min`,seconds:`Sec`,am:`AM`,pm:`PM`,year:`year`,room:`Room`,language:`Language`,limit:`Limit`,exam:`Exam`,completedCourse:`Completed`,wishlist:`Wishlist`,offline:{title:`Connection Failed`,description:`Unable to connect to server. Please check your internet connection.`,goHome:`Go Home`,retry:`Retry`,banner:`You are offline. Only data loaded in this session is available.`,navDisabled:`Not available in offline mode`},serverError:{title:`Server Error`,apology:`We apologize for the inconvenience`,description:`The server is experiencing issues. Please try again later.`,goHome:`Go Home`,retry:`Retry`},notFound:{title:`Page Not Found`,description:`The page you are looking for does not exist or has been moved.`,goHome:`Go Home`},toOTLV3:`Previous`},sn={"100sShort":`100s`,"200sShort":`200s`,"300sShort":`300s`,"400sShort":`400s`,"500sShort":`500s`,"600sShort":`600s`,"700sShort":`700s`,"800sShort":`800s`,"900sShort":`900s`,etcShort:`ETC`},cn={over:` and `,people:` others`},ln={writingPlaceholder:`Please describe your evaluation of grades, load, etc.`,like:`Like `,notOpenYet:`You can write a review after the course drop period`},un={search:`Search`,close:`Close`,reset:`Reset`,submit:`Search`,level:`Grade`,department:`Department`,term:`Term`,time:`Time`,all:`All`,type:`Groups`,placeholder:`Enter keywords`,empty:`Please select at least one search filter`,departmentUnavailable:`The selected department cannot be searched right now.`,timeFilterPlaceholder:`Drag on the timetable to select`},dn={spring:`Spring`,summer:`Summer`,fall:`Fall`,winter:`Winter`},fn={"3yearsShort":`In-3-Years`,"1yearShort":`In-1-Year`,thisSemesterShort:`This-Semester`},pn={basic:`Basic`,major:`Major`,doubleMajor:`Double Major`,minor:`Minor`,advancedMajor:`Advanced Major`,interdisciplinaryMajor:`Interdisciplinary Major`,research:`Research`,general:`General`,basicRequired:`Basic Required`,basicElective:`Basic Elective`,majorRequired:`Major Required`,majorElective:`Major Elective`,generalRequired:`General Required`,humanitiesSocial:`Humanities & Social Elective`,humanities:`Humanities`,thesisStudy:`Thesis Study`,individualStudy:`Individual Study`,otherElective:`Other Elective`,unclassified:`Unclassified`,etc:`Others`,basicRequiredShort:`BR`,basicElectiveShort:`BE`,majorRequiredShort:`MR`,majorElectiveShort:`ME`,humanitiesSocialElectiveShort:`HSE`,mandatoryGeneralCourseShort:`MGC`,otherElectiveShort:`OE`,generalRequiredShort:`GR`,electiveGraduateShort:`EG`,etcShort:`ETC`,totalCredit:`Credit`,totalAu:`AU`},mn={account:nn,common:{...on,type:pn,department:an,level:sn,term:fn,professors:cn,review:ln,search:un,semesters:dn,days:rn},credits:{credits:`Credits`,license:`Terms of Service`,privacyPolicy:`Privacy Policy`,contact:`Contact Us`},dictionary:{courseHistory:`Course History`,notOffered:`Not offered`,courseCountInfo1:`Total<space/><bold>{{count}}</bold><space/>courses<space/>`,courseCountInfo2:`(<icon/>: Open this semester)`,sort:`Sort`,noResults:`No results`,sortOptions:{code:`By Course Code`,popularity:`By Popularity`,studentCount:`By Enrollment`},review:`Course Reviews`,reviewLanguage:`Language`,reviewLanguageOptions:{all:`All`,english:`English`}},header:{dictionary:`Dictionary`,writeReviews:`Write Reviews`,timetable:`Timetable`,syllabus:`Syllabus`},main:{hisTimeTable:`<name>{{name}}</name><space/><normal>'s Timetable</normal>`,schedule:{title:`Due to {{content}}`,link:`Go to Student Portal`,contents:{beginning:`Beginning`,end:`End`,courseRegistrationPeriodStart:`Start of Course Registration Period`,courseRegistrationPeriodEnd:`End of Course Registration Period`,courseAddDropPeriodEnd:`End of Course Add & Drop Period`,courseDropDeadline:`Deadline to Course Drop`,courseEvaluationDeadline:`Deadline to Course Evaluation`,gradePosting:`Grade Posting`}},reviewSection:{title:`How did you find the {{lectureName}} course?`,placeholder:`How did you find the gradings and workload — fair, heavy, or just right?`,writeAnother:`Another one`},recentFeed:{title:`<bold>Fresh</bold><space/><normal>Reviews</normal>`},likedMajorFeed:{title:`<bold>Popular</bold><space/><normal>Reviews</normal>`},hallOfFameFeed:{title:`<bold>Hall of</bold><space/><normal>Fame</normal>`},scheduleFeed:{title:`School Schedules`,noSchedules:`No schedules`}},writeReviews:{mySummary:{title:`Taken Lectures`,written:`My Reviews`,likes:`likes`,selectPlaceholder:`Please select a lecture`},write:{title:`Write Reviews - {{lectureName}}`,related:`Related Reviews - {{lectureName}}`,edit:`Edit`},hallOfFameFeed:{title:`Hall of Fame - {{year}}<space/>{{semester}}`,total:`Total Reviews`},likedReviews:{title:`My Liked Reviews`},tabs:{write:`Write Reviews`,hallOfFameFeed:`Hall of Fame`,recentFeed:`Fresh Reviews`,liked:`My Liked Reviews`}},timetable:{myTimetable:`My Timetable`,examTimetable:`Exam Timetable`,addLectureConflict:`Cannot add lectures that conflict with existing timetable.`,pasteLectureConflict:`There is a conflict with this lecture in the timetable. Would you like to replace it?`,myTimeTableLectureAddWarning:`Cannot add lectures to My Timetable.`,timetableKeyboardDeleteConfirm:`Are you sure you want to delete the current timetable?`,copyImage:`Copy as Image`,exportImage:`Export as Image`,exportICal:`Export as Calendar`,addToWishlist:`Add to Wishlist`,addToTimetable:`Add to Timetable`,removeFromWishlist:`Remove from Wishlist`,removeFromTimetable:`Remove from Timetable`,competitionRate:`Competition`,noTimeInfo:`No Time Info`,numSelected:` Lectures Selected`,shortcuts:{modalTitle:`Keyboard Shortcuts`,lectureSection:`Lecture Edit`,timetableSection:`Timetable Control`,etcSection:`Etc Navigations`,lectureMultiple:`Lecture multiple select`,lectureCopy:`Copy selected lectures`,lectureCut:`Cut selected lectures`,lecturePaste:`Paste selected lectures`,lectureAll:`Select all lectures in timetable`,lectureDelete:`Delete selected lectures`,timetableUndo:`Undo latest action (managed per timetable)`,timetableRedo:`Redo latest undo action (managed per timetable)`,timetableAdd:`Add empty timetable`,timetableDuplicate:`Duplicate current timetable`,timetableDelete:`Delete current timetable (when there is no selected lectures)`,timetableSelect:`Select timetable`,etcSemester:`Semester change`,etcLectureSearchMove:`Explore in lecture search result`,etcLectureAddDelete:`Add or delete current exploring lecture`,etcSelectCancel:`Cancel selected lectures`,etcShortcutInfo:`Show this shortcut information`}}},hn={title:`내 정보`,name:`이름`,email:`메일`,schoolId:`학번`,course:`과정`,major:`전공`,interestedDepartments:`관심 학과`,logout:`로그아웃`,sparcsssoCaption:`이 정보는 <bold>SPARCS SSO</bold>에서 변경할 수 있습니다`,kaistPortalCaption:`이 정보는 KAIST Portal과 연동됩니다. 정보가 일치하지 않을 경우 <bold>otlplus@sparcs.org</bold>로 문의해주세요`},gn={monday:`월요일`,tuesday:`화요일`,wednesday:`수요일`,thursday:`목요일`,friday:`금요일`,saturday:`토요일`,sunday:`일요일`,mondayShort:`월`,tuesdayShort:`화`,wednesdayShort:`수`,thursdayShort:`목`,fridayShort:`금`,saturdayShort:`토`,sundayShort:`일`},_n={hssShort:`인문`,aeShort:`항공`,bisShort:`바공`,bsShort:`생명`,cbeShort:`생화공`,ceShort:`건환`,chShort:`화학`,csShort:`전산`,eeShort:`전자`,idShort:`산디`,ieShort:`산공`,masShort:`수리`,meShort:`기계`,nqeShort:`원양`,btmShort:`기경`,msShort:`신소재`,phShort:`물리`,tsShort:`융인`,ssShort:`반시공`,bcsShort:`뇌인지`,etcShort:`기타`},vn={class:`분류`,professor:`교수`,description:`설명`,grade:`성적`,load:`널널`,speech:`강의`,upload:`업로드`,numClasses:`강의시간`,numLabs:`실험`,credit:`학점`,cancel:`취소`,save:`저장`,edit:`수정`,hours:`시간`,minutes:`분`,seconds:`초`,am:`오전`,pm:`오후`,year:`연도`,room:`장소`,language:`언어`,limit:`정원`,exam:`시험`,completedCourse:`수강완료`,wishlist:`찜목록`,offline:{title:`서버 연결 실패`,description:`서버에 연결할 수 없습니다. 인터넷 연결을 확인해 주세요.`,goHome:`홈으로 돌아가기`,retry:`다시 시도`,banner:`오프라인 상태입니다. 현재 세션에 불러온 데이터만 표시됩니다.`,navDisabled:`오프라인 모드에서는 이용할 수 없습니다`},serverError:{title:`서버 장애`,apology:`불편을 드려 죄송합니다`,description:`현재 서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.`,goHome:`홈으로 돌아가기`,retry:`다시 시도`},notFound:{title:`페이지를 찾을 수 없습니다`,description:`요청하신 페이지가 존재하지 않거나 이동되었습니다.`,goHome:`홈으로 돌아가기`},toOTLV3:`이전 버전`},yn={"100sShort":`100번대`,"200sShort":`200번대`,"300sShort":`300번대`,"400sShort":`400번대`,"500sShort":`500번대`,"600sShort":`600번대`,"700sShort":`700번대`,"800sShort":`800번대`,"900sShort":`900번대`,etcShort:`기타`},bn={over:` 외 `,people:`명`},xn={writingPlaceholder:`학점, 로드 등의 평가에 대하여 설명해주세요.`,like:`좋아요`,notOpenYet:`수강 취소기간이 지난 후 후기 작성이 가능합니다`},Sn={search:`검색`,close:`닫기`,reset:`초기화`,submit:`검색`,level:`학년`,department:`학과`,term:`기간`,time:`시간`,all:`전체`,type:`분류`,placeholder:`과목명, 교수명을 등을 검색해보세요`,empty:`검색 조건을 하나 이상 선택해주세요`,departmentUnavailable:`선택한 학과를 검색할 수 없습니다. 잠시 후 다시 시도해 주세요.`,timeFilterPlaceholder:`시간표에서 드래그하여 선택`},Cn={spring:`봄`,summer:`여름`,fall:`가을`,winter:`겨울`},wn={"3yearsShort":`3년이내`,"1yearShort":`1년이내`,thisSemesterShort:`이번학기`},Tn={basic:`기초`,major:`전공`,doubleMajor:`복수전공`,minor:`부전공`,advancedMajor:`심화전공`,interdisciplinaryMajor:`자유융합전공`,research:`연구`,general:`교양`,basicRequired:`기초필수`,basicElective:`기초선택`,majorRequired:`전공필수`,majorElective:`전공선택`,generalRequired:`교양필수`,humanitiesSocial:`인문사회선택`,humanities:`인문사회선택`,thesisStudy:`졸업연구`,individualStudy:`개별연구`,otherElective:`자유선택`,unclassified:`미분류`,etc:`기타`,basicRequiredShort:`기필`,basicElectiveShort:`기선`,majorRequiredShort:`전필`,majorElectiveShort:`전선`,humanitiesSocialElectiveShort:`인선`,mandatoryGeneralCourseShort:`교필`,otherElectiveShort:`자선`,generalRequiredShort:`공통`,electiveGraduateShort:`석박`,etcShort:`기타`,totalCredit:`학점`,totalAu:`AU`},En={account:hn,common:{...vn,type:Tn,department:_n,level:yn,term:wn,professors:bn,review:xn,search:Sn,semesters:Cn,days:gn},credits:{credits:`만든 사람들`,license:`이용 약관`,privacyPolicy:`개인정보취급방침`,contact:`문의하기`},dictionary:{courseHistory:`개설이력`,notOffered:`미개설`,courseCountInfo1:`총 <bold>{{count}}</bold>개 과목<space/>`,courseCountInfo2:`(<icon/>: 이번 학기 개설)`,sort:`정렬`,noResults:`결과 없음`,sortOptions:{code:`과목코드순`,popularity:`인기순`,studentCount:`수강자 많은 순`},review:`과목 후기`,reviewLanguage:`언어`,reviewLanguageOptions:{all:`전체`,english:`영어`}},header:{dictionary:`과목사전`,timetable:`모의시간표`,writeReviews:`과목후기 작성하기`,syllabus:`실라버스`},main:{hisTimeTable:`<name>{{name}}</name><space/><normal>님의 시간표</normal>`,schedule:{title:`{{content}}까지`,link:`학사 시스템 바로가기`,contents:{beginning:`개강`,end:`종강`,courseRegistrationPeriodStart:`수강신청기간 시작`,courseRegistrationPeriodEnd:`수강신청기간 종료`,courseAddDropPeriodEnd:`수강변경기간 종료`,courseDropDeadline:`수강취소 마감`,courseEvaluationDeadline:`강의평가 마감`,gradePosting:`성적게시`}},reviewSection:{title:`{{lectureName}} 강의는 어땠나요?`,placeholder:`학점, 로드 등의 평가에 대해 설명해주세요.`,writeAnother:`다른 과목 후기 쓰기`},recentFeed:{title:`<bold>따끈따끈</bold><space/><normal>과목후기</normal>`},likedMajorFeed:{title:`<bold>사랑받는</bold><space/><normal>과목후기</normal>`},hallOfFameFeed:{title:`<bold>명예의</bold><space/><normal>전당</normal>`},scheduleFeed:{title:`주요 일정`,noSchedules:`일정 없음`}},writeReviews:{mySummary:{title:`내가 들은 과목`,written:`작성 후기`,likes:`추천`,selectPlaceholder:`강의를 선택해주세요`},write:{title:`후기 작성 - {{lectureName}}`,related:`연관 후기 - {{lectureName}}`,edit:`수정하기`},hallOfFameFeed:{title:`명예의 전당 - {{year}}<space/>{{semester}}`,total:`전체 후기`},likedReviews:{title:`좋아요한 후기`},tabs:{write:`후기 작성하기`,recentFeed:`따끈따끈 후기`,hallOfFameFeed:`명예의 전당`,liked:`좋아요한 후기`}},timetable:{myTimetable:`내 시간표`,examTimetable:`시험시간표`,addLectureConflict:`시간표가 겹치는 강의를 추가할 수 없습니다.`,pasteLectureConflict:`시간이 겹치는 과목이 있습니다. 겹치는 기존 과목을 지우고 붙여넣으시겠습니까?`,myTimeTableLectureAddWarning:`내 시간표에는 강의를 추가할 수 없습니다.`,timetableKeyboardDeleteConfirm:`현재 시간표를 삭제하시겠습니까?`,copyImage:`이미지로 복사하기`,exportImage:`이미지로 내보내기`,exportICal:`캘린더로 내보내기`,addToWishlist:`찜목록에 추가`,addToTimetable:`시간표에 추가`,removeFromWishlist:`찜목록에서 제거`,removeFromTimetable:`시간표에서 제거`,competitionRate:`경쟁률`,noTimeInfo:`시간 정보 없음`,numSelected:`개 과목 선택됨`,shortcuts:{modalTitle:`단축키 안내`,lectureSection:`과목 편집`,timetableSection:`시간표 조작`,etcSection:`기타 네비게이션`,lectureMultiple:`과목 다중 선택 / 선택 해제`,lectureCopy:`선택된 과목 복사`,lectureCut:`선택된 과목 잘라내기`,lecturePaste:`복사 / 잘라낸 과목 붙여넣기`,lectureAll:`시간표의 과목 전체 선택`,lectureDelete:`선택된 과목 삭제`,timetableUndo:`실행 취소 (시간표 별로 관리됨)`,timetableRedo:`다시 실행 (시간표 별로 관리됨)`,timetableAdd:`빈 시간표 추가`,timetableDuplicate:`현재 시간표 복제`,timetableDelete:`현재 시간표 삭제 (선택된 과목이 없을 시)`,timetableSelect:`시간표 탭 이동`,etcSemester:`학기 이동`,etcLectureSearchMove:`검색 결과 내 탐색`,etcLectureAddDelete:`탐색중인 과목 추가 / 제거`,etcSelectCancel:`선택 취소`,etcShortcutInfo:`단축키 안내 보기`}}},Dn={common:En},On={common:En},kn={common:mn},An=Object.keys(Dn),jn={ko:On,en:kn};O.use(tn).use(he).init({resources:jn,ns:An,defaultNS:An[0],fallbackLng:`ko`,debug:a.VITE_APP_LOG_LEVEL===`debug`,interpolation:{escapeValue:!1}});var Mn=O,Nn=e=>{let{displayedTheme:t}=L(),n=z.useMemo(()=>Oe[t],[t]),r=z.useCallback(()=>{navigator.onLine&&E.invalidateQueries({predicate:x})},[]);return _(Pt,{client:E,persistOptions:{persister:le,maxAge:ce,buster:ie,dehydrateOptions:{shouldDehydrateQuery:x}},onSuccess:r,children:_(Re,{i18n:Mn,children:v(te,{theme:n,children:[_(Ft,{}),e.children]})})})},Pn=()=>[{title:`OTL - Online Timetable with Lectures`},{name:`description`,content:`OTL은 카이스트 학생들을 위한 시간표 만들기 및 후기 공유 서비스입니다.`},{property:`og:title`,content:`OTL - Online Timetable with Lectures`},{property:`og:description`,content:`OTL은 카이스트 학생들을 위한 시간표 만들기 및 후기 공유 서비스입니다.`},{property:`og:image`,content:`https://otl.kaist.ac.kr/static/favicon-192.png`},{property:`og:type`,content:`website`}],Fn=()=>[{rel:`preconnect`,href:`https://fonts.googleapis.com`},{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossOrigin:`anonymous`},{rel:`stylesheet`,href:`https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap`},{rel:`manifest`,href:`/static/manifest.json`},{rel:`icon`,href:`/favicon.ico`,sizes:`any`},{rel:`icon`,href:`/static/favicon-32.png`,type:`image/png`,sizes:`32x32`},{rel:`apple-touch-icon`,href:`/static/favicon-180.png`}];function In({children:e}){return v(`html`,{lang:`en`,children:[v(`head`,{children:[_(`meta`,{charSet:`utf-8`}),_(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),_(`meta`,{name:`theme-color`,content:`#F9F0F0`}),_(`link`,{rel:`stylesheet`,as:`style`,crossOrigin:`anonymous`,href:`https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`}),_(u,{}),_(f,{}),a.VITE_GA_MEASUREMENT_ID&&v(ne,{children:[_(`script`,{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${a.VITE_GA_MEASUREMENT_ID}`}),_(`script`,{dangerouslySetInnerHTML:{__html:`
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${a.VITE_GA_MEASUREMENT_ID}', {
                                        page_path: window.location.pathname,
                                    });
                                `}})]})]}),v(`body`,{children:[_(Nn,{children:e}),_(d,{}),_(g,{})]})]})}var Ln=y(b)`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,Rn=y(b)`
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,zn=s(function(){return At(),(0,z.useEffect)(()=>{oe()},[]),v(Ln,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,flex:`0 1 auto`,children:[_(Ot,{}),_(Rn,{direction:`column`,gap:0,align:`stretch`,flex:`1 1 auto`,children:_(h,{})}),_(Ie,{initialIsOpen:!1})]})}),Bn=p(function({error:e}){let t=`Oops!`,n=`An unexpected error occurred.`;return l(e)?(t=e.status===404?`404`:`Error`,n=e.status===404?`The requested page could not be found.`:e.statusText||n):e&&e instanceof Error&&r()&&i(e),v(`main`,{children:[_(`h1`,{children:t}),_(`p`,{children:n}),void 0]})});export{Bn as ErrorBoundary,In as Layout,zn as default,Fn as links,Pn as meta};
//# sourceMappingURL=root-BGFN1y07.js.map