(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`471bc877f889307cb3be8d2180086a25c8614de0`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`0e1590a3-67f1-49f5-a9ee-27f5eddd2c15`,e._sentryDebugIdIdentifier=`sentry-dbid-0e1590a3-67f1-49f5-a9ee-27f5eddd2c15`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-DfKu5yVW.js";import{Et as r,f as i,t as a}from"./env-Dy2-zpt7.js";import{t as o}from"./react-dom-f57DYhGb.js";import{A as s,D as c,S as l,a as u,d,i as f,j as p,r as m,s as h,u as g}from"./chunk-QFMPRPBF-CRefBUYN.js";import{l as _,n as v,o as y,r as b,t as ee}from"./emotion-react-jsx-runtime.browser.esm-DbKsdtqR.js";import{n as x,t as S}from"./FlexWrapper-DaVOxfGD.js";import{C,E as te,P as ne,R as w,S as re,T as ie,c as ae,d as oe,h as se,i as T,l as ce,m as le,n as ue,o as de,p as fe,s as pe,t as E,u as D,x as me}from"./axios-DRmltz36.js";import{l as he,t as O}from"./useAPI-ChkRuRyd.js";import{r as k,t as A}from"./Icon-DtjlRe6S.js";import{t as j}from"./Trans-BH3L_n8w.js";import{n as ge,r as _e,t as M}from"./useTranslation-DGm-bjgE.js";import{t as ve}from"./Close-BhM-UVCX.js";import{t as N}from"./Typography-DYafxdiQ.js";import{t as P}from"./Modal-Ca4lcwLg.js";import{t as F}from"./Button-DQ14JDeE.js";import{n as ye,r as be,t as xe}from"./proxy-d749U_yZ.js";import{t as Se}from"./StyledDivider-CANpNTgB.js";import{t as I}from"./media-CVKNqsyY.js";import{n as Ce,t as we}from"./handleLoginLogout-DRsLeck6.js";import{t as L}from"./useIsDevice-DRjQ5K8H.js";import{t as R}from"./useThemeStore-DIu2KKmP.js";import{a as Te,i as Ee,n as De,t as Oe}from"./index.esm-UWI-Br8W.js";import{t as ke}from"./themes-DUbZs3F3.js";function z(e){return e}function Ae(e){return{mutationKey:e.options.mutationKey,state:e.state,...e.options.scope&&{scope:e.options.scope},...e.meta&&{meta:e.meta}}}function je(e,t,n){let r=()=>{let r=e.promise?.then(t).catch(e=>n(e)?Promise.reject(Error(`redacted`)):Promise.reject(e));return r?.catch(w),r};return{dehydratedAt:Date.now(),state:{...e.state,...e.state.data!==void 0&&{data:t(e.state.data)}},queryKey:e.queryKey,queryHash:e.queryHash,...e.state.status===`pending`&&{promise:r()},...e.meta&&{meta:e.meta}}}function Me(e){return e.state.isPaused}function Ne(e){return e.state.status===`success`}function Pe(e){return!0}function Fe(e,t={}){let n=t.shouldDehydrateMutation??e.getDefaultOptions().dehydrate?.shouldDehydrateMutation??Me,r=e.getMutationCache().getAll().flatMap(e=>n(e)?[Ae(e)]:[]),i=t.shouldDehydrateQuery??e.getDefaultOptions().dehydrate?.shouldDehydrateQuery??Ne,a=t.shouldRedactErrors??e.getDefaultOptions().dehydrate?.shouldRedactErrors??Pe,o=t.serializeData??e.getDefaultOptions().dehydrate?.serializeData??z;return{mutations:r,queries:e.getQueryCache().getAll().flatMap(e=>i(e)?[je(e,o,a)]:[])}}function Ie(e,t,n){if(typeof t!=`object`||!t)return;let r=e.getMutationCache(),i=e.getQueryCache(),a=n?.defaultOptions?.deserializeData??e.getDefaultOptions().hydrate?.deserializeData??z,o=t.mutations||[],s=t.queries||[];o.forEach(({state:t,...i})=>{r.build(e,{...e.getDefaultOptions().hydrate?.mutations,...n?.defaultOptions?.mutations,...i},t)}),s.forEach(({queryKey:t,state:r,queryHash:o,meta:s,promise:c,dehydratedAt:l})=>{let u=c?ne(c):void 0,d=r.data===void 0?u?.data:r.data,f=d===void 0?d:a(d),p=i.get(o),m=p?.state.status===`pending`,h=p?.state.fetchStatus===`fetching`;if(p){let e=u&&l!==void 0&&l>p.state.dataUpdatedAt;if(r.dataUpdatedAt>p.state.dataUpdatedAt||e){let{fetchStatus:e,...t}=r;p.setState({...t,data:f})}}else p=i.build(e,{...e.getDefaultOptions().hydrate?.queries,...n?.defaultOptions?.queries,queryKey:t,queryHash:o,meta:s},{...r,data:f,fetchStatus:`idle`,status:f===void 0?r.status:`success`});c&&!m&&!h&&(l===void 0||l>p.state.dataUpdatedAt)&&p.fetch(void 0,{initialPromise:Promise.resolve(c).then(a)}).catch(w)})}var B=t(e()),Le=function(){return null},V=t(n(),1),Re=k((0,V.jsx)(`path`,{d:`M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z`}),`Menu`);function ze({i18n:e,defaultNS:t,children:n}){let r=(0,B.useMemo)(()=>({i18n:e,defaultNS:t}),[e,t]);return(0,B.createElement)(ge.Provider,{value:r},n)}var H=x(N)`
    cursor: pointer;
    display: inline-block;
`,U=x(N)`
    opacity: 50%;
`,Be=({userInfo:e})=>{let{t}=M();return b(S,{direction:`column`,gap:12,children:[[[t(`account.name`),e?.name],[t(`account.email`),e?.mail]].map(([e,t],n)=>b(S,{direction:`row`,gap:8,align:`center`,children:[v(N,{type:`NormalBold`,color:`Text.default`,children:e}),v(N,{type:`Normal`,color:`Text.default`,children:t})]},n)),v(U,{type:`Smaller`,color:`Text.default`,children:v(j,{i18nKey:`account.sparcsssoCaption`,components:{bold:v(H,{type:`Smaller`,color:`Highlight.default`,onClick:()=>{window.open(`https://sparcssso.kaist.ac.kr/account/profile/`)},children:void 0})}})}),[[t(`account.schoolId`),e?.studentNumber],[t(`account.course`),e?.degree],[t(`account.major`),e?.majorDepartments.map(e=>e.name).join(`, `)]].map(([e,t],n)=>b(S,{direction:`row`,gap:8,align:`center`,children:[v(N,{type:`NormalBold`,color:`Text.default`,children:e}),v(N,{type:`Normal`,color:`Text.default`,children:t})]},n)),v(U,{type:`Smaller`,color:`Text.default`,children:v(j,{i18nKey:`account.kaistPortalCaption`,components:{bold:v(H,{type:`Smaller`,color:`Highlight.default`,onClick:()=>{window.location.href=`mailto:otlplus@sparcs.org`},children:void 0})}})})]})},Ve=x(S)`
    width: 100%;
    max-width: 630px;
    min-height: 316px;
    border-radius: 12px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    padding: 14px 4px 0 12px;

    ${I.tablet} {
        max-width: none;
    }
`,He=x(S)`
    border-radius: 8px;
    width: 100%;
`,Ue=x.div`
    color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: none;
`,We=x(S)`
    flex-grow: 1;
    flex-wrap: wrap;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    font-weight: ${({theme:e})=>e.fonts.Normal.fontWeight};
    max-height: 100px;
    overflow-y: auto;

    scrollbar-width: none;
`,Ge=x(S)`
    background-color: ${({theme:e})=>e.colors.Background.Block.default};
    border-radius: 6px;
    padding: 8px 10px;
    white-space: nowrap;
`,Ke=x.input`
    border: none;
    outline: none;
    flex-grow: 1;
    min-width: 150px;
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    color: ${({theme:e})=>e.colors.Text.default};
`,qe=x.div`
    width: 100%;
    overflow-y: auto;
    height: 248px;
    margin-bottom: 10px;

    scrollbar-width: none;
`,Je=x(N)`
    padding: 8px 10px;
    cursor: pointer;
    min-height: 32px;

    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Block.default};
    }
`,Ye=({currentDepartment:e,setCurrentDepartment:t})=>{let{t:n}=M(),{query:r}=O(`GET`,`/department-options`),[i,a]=(0,B.useState)(``),[o,s]=(0,B.useState)([]),c=(0,B.useRef)(null);function l(e){let t=r.data?.departments?.find(t=>t.id===e);return t?t.name:void 0}let u=n=>{e.map(e=>e.id).includes(n.id)||t([...e,n]),a(``)},d=n=>{t(e.filter(e=>e.id!==n))};return(0,B.useEffect)(()=>{r.data?.departments&&s(r.data.departments.filter(t=>{let n=!e.map(e=>e.id).includes(t.id);if(!t.name||!t.code)return!1;let r=i.trim()===``?!0:(t.name+` (`+t.code+`)`).toLowerCase().includes(i.toLowerCase());return n&&r}))},[i,e]),b(Ve,{direction:`column`,gap:12,children:[b(He,{direction:`row`,gap:8,align:`center`,children:[v(Ue,{children:v(A,{size:18,children:v(be,{})})}),b(We,{onClick:()=>{c.current?.focus()},direction:`row`,gap:8,align:`center`,children:[e.map((e,t)=>b(Ge,{direction:`row`,gap:8,align:`center`,children:[l(e.id),v(A,{size:16,onClick:t=>{t.stopPropagation(),d(e.id)},children:v(ve,{})})]},t)),v(Ke,{ref:c,type:`text`,value:i,onChange:e=>{a(e.target.value)},onKeyDown:n=>{n.key===`Enter`?n.preventDefault():n.key===`Backspace`&&i===``&&e.length>0&&t(e.slice(0,-1))},placeholder:e.length===0?n(`common.search.placeholder`):``})]})]}),v(Se,{}),v(qe,{children:o.map(e=>b(Je,{type:`Normal`,color:`Text.default`,onClick:()=>u(e),children:[e.name,` (`,e.code,`)`]},e.id))})]})},Xe=x(S)`
    margin: 10px 0;
`,Ze=x.button`
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
`,Qe=({userInfo:e})=>{let{t,i18n:n}=M(),r=te(),{query:i}=O(`GET`,`/department-options`),{requestFunction:a}=O(`PUT`,`/users/${e?.id}/interested-departments`,{onSuccess:()=>{r.invalidateQueries({queryKey:[`/users/info`]})}}),[o,s]=(0,B.useState)(!1),[c,l]=(0,B.useState)([]),u=()=>{l(e?[...e.interestedDepartments]:[]),s(!0)};function d(e){let t=i.data?.departments?.find(t=>t.id===e);return t?n.language===`en`?t.code:t.name:void 0}function f(){a({interestedDepartmentIds:c.map(e=>e.id)}),s(!1)}return b(Xe,{direction:`column`,gap:12,children:[b(S,{direction:`row`,gap:12,align:`center`,justify:`space-between`,style:{width:`100%`},children:[v(N,{type:`NormalBold`,color:`Text.default`,style:{whiteSpace:`nowrap`},children:t(`account.interestedDepartments`)}),!o&&b(S,{direction:`row`,gap:8,align:`center`,children:[v(N,{type:`Normal`,color:`Text.default`,children:e?.interestedDepartments.map(e=>d(e.id)||``).join(`, `)}),v(Ze,{onClick:u,children:t(`common.edit`)})]})]}),o&&b(ee,{children:[v(Ye,{currentDepartment:c,setCurrentDepartment:l}),v(F,{type:`selected`,style:{width:`100%`,height:`48px`},onClick:f,children:t(`common.save`)})]})]})},$e=x(N)`
    cursor: pointer;
`,et=({userInfo:e,accountPageOpen:t,setAccountPageOpen:n})=>{let r=L(`tablet`),{t:i}=M();return b(P,{isOpen:t,onClose:()=>n(!1),title:i(`account.title`),fullScreen:r,children:[v(Be,{userInfo:e}),v(Qe,{userInfo:e}),v($e,{type:`Normal`,color:`Highlight.default`,onClick:Ce,children:i(`account.logout`)})]})},tt=x.input`
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
`,nt=({developerLoginModalOpen:e,setDeveloperLoginModalOpen:t})=>{let n=L(`tablet`),[r,i]=(0,B.useState)(``),a=()=>{if(!r){alert(`학번을 입력해주세요.`);return}if(r.match(/[^0-9]/)){alert(`학번은 숫자만 입력 가능합니다.`);return}de(`devStudentId`,r),location.reload()};return b(P,{isOpen:e,onClose:()=>t(!1),title:`DEV 로그인`,fullScreen:n,children:[v(tt,{type:`text`,placeholder:`학번을 입력해주세요.`,value:r,onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`&&a()}}),v(S,{direction:`row`,gap:0,justify:`flex-end`,align:`center`,children:v(F,{type:`selected`,onClick:a,children:`로그인`})})]})},W=k((0,V.jsx)(`path`,{d:`M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96M3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4z`}),`CloudOff`),rt=x(S)`
    gap: 231px;

    ${I.tablet} {
        flex: 1;
        gap: 0;
    }
`,it=x.img`
    min-width: 55px;
    height: 27px;
    background: transparent;
`,at=x(S)`
    ${I.mobile} {
        display: none;
    }
`,G=x(m)`
    text-decoration: none;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`;x.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({theme:e})=>e.colors.Highlight.default};
`;var ot=x.span`
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
`,st=x(S)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 4px 8px;
`,ct=({setMobileSidebarOpen:e})=>{let{t}=M(),n=ue(e=>e.isBackendReachable),{status:r}=T();L(`mobile`);let i=!n&&r===`success`,a=(e,n)=>i&&e!==`/`&&e!==`/timetable`?v(ot,{"data-tooltip":t(`common.offline.navDisabled`),children:n}):v(G,{to:e,children:n});return b(rt,{direction:`row`,justify:`space-between`,align:`center`,gap:0,children:[v(S,{direction:`row`,gap:20,align:`center`,children:v(G,{to:`/`,onClick:e,children:v(it,{src:`/otlplus-web-v4/pr-154/headerIcon.png`,alt:`Logo`})})}),b(at,{direction:`row`,gap:24,align:`center`,children:[a(`/dictionary`,t(`header.dictionary`)),a(`/write-reviews`,t(`header.writeReviews`)),a(`/timetable`,t(`header.timetable`)),i&&b(st,{direction:`row`,align:`center`,gap:6,children:[v(A,{size:14,color:`inherit`,children:v(W,{})}),v(N,{type:`Small`,color:`Text.placeholder`,children:t(`common.offline.banner`)})]})]})]})},lt=k((0,V.jsx)(`path`,{d:`M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z`}),`KeyboardArrowRight`),ut=t(o(),1),dt=x.div`
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
`,ft=x(xe.div)`
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
`,pt=x(m)`
    text-decoration: none;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    white-space: nowrap;

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`;x.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({theme:e})=>e.colors.Highlight.default};
`;var mt=x.span`
    text-decoration: none;
    color: ${({theme:e})=>e.colors.Text.disable};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    white-space: nowrap;
    cursor: not-allowed;
    opacity: 0.5;
`,ht=x(S)`
    background-color: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 6px;
    padding: 8px 12px;
    margin-top: 12px;
`,gt=({mobileSidebarOpen:e,setMobileSidebarOpen:t,sidebarHeader:n})=>{let r=_(),{t:i}=M(),a=ue(e=>e.isBackendReachable),{status:o}=T(),s=!a&&o===`success`,c=(0,B.useRef)(null);(0,B.useEffect)(()=>{e?document.body.style.overflow=`hidden`:document.body.style.overflow=`auto`},[e]);let l=()=>{t(!1)},u=(e,t)=>s&&e!==`/`&&e!==`/timetable`?v(mt,{children:t}):v(pt,{to:e,onClick:l,children:t});return ut.createPortal(v(ye,{children:e&&v(dt,{onMouseDown:e=>{c.current=e.target},onMouseUp:e=>{c.current===e.currentTarget&&e.target===e.currentTarget&&t(!1)},children:b(ft,{initial:`hidden`,animate:`visible`,exit:`hidden`,variants:{hidden:{right:`-50%`},visible:{right:0}},transition:{duration:.3,ease:`easeInOut`},children:[b(S,{direction:`column`,gap:35,align:`flex-end`,children:[n,b(S,{direction:`column`,gap:20,align:`flex-end`,children:[u(`/dictionary`,i(`header.dictionary`)),u(`/write-reviews`,i(`header.writeReviews`)),u(`/timetable`,i(`header.timetable`))]}),s&&b(ht,{direction:`column`,align:`flex-end`,gap:6,children:[b(S,{direction:`row`,align:`center`,gap:6,children:[v(A,{size:14,color:r.colors.Text.placeholder,children:v(W,{})}),v(N,{type:`Small`,color:`Text.placeholder`,children:i(`common.offline.banner`)})]}),v(N,{type:`Smaller`,color:`Text.disable`,children:i(`common.offline.navDisabled`)})]})]}),v(A,{size:20,onClick:()=>t(!1),color:r.colors.Text.default,children:v(lt,{})})]})})}),document.body)},_t=k((0,V.jsx)(`path`,{d:`M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1`}),`DarkMode`),vt=k((0,V.jsx)(`path`,{d:`M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z`}),`Language`),yt=k((0,V.jsx)(`path`,{d:`M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z`}),`LightMode`),bt=k((0,V.jsx)(`path`,{d:`M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4`}),`Person`),K=k((0,V.jsx)(`path`,{d:`M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6`}),`Settings`),xt=x(S)`
    color: ${({theme:e})=>e.colors.Text.default};
    width: ${({mobileSidebar:e})=>e?`100%`:`auto`};
`,St=x(S)`
    cursor: pointer;
`,Ct=x(S)`
    cursor: pointer;
`,q=({handleAccountButtonClick:e,userName:t,mobileSidebar:n,isLoading:r})=>{let{t:i,i18n:a}=M(),{themeSetting:o,setTheme:s}=R();return(0,B.useEffect)(()=>{E.defaults.headers.common[`Accept-Language`]=a.resolvedLanguage},[]),b(xt,{direction:n?`column-reverse`:`row`,justify:`space-between`,align:`center`,gap:n?9:16,mobileSidebar:n,children:[!n&&v(A,{size:16,onClick:()=>{switch(o){case`dark`:s(`light`);break;case`light`:s(`system`);break;case`system`:s(`dark`);break;default:s(`system`);break}},children:v(()=>{switch(o){case`dark`:return v(_t,{});case`light`:return v(yt,{});case`system`:return v(K,{});default:return v(K,{})}},{})}),b(St,{direction:n?`row`:`column`,gap:4,align:`center`,onClick:()=>{let e=a.resolvedLanguage===`ko`?`en`:`ko`;a.changeLanguage(e),E.defaults.headers.common[`Accept-Language`]=e},children:[v(A,{size:16,children:v(vt,{})}),n&&i(`common.language`)]}),r?`Loading...`:b(Ct,{direction:`row`,gap:4,align:`center`,onClick:e,children:[v(A,{size:16,children:v(bt,{})}),v(N,{type:n?`NormalBold`:`Normal`,color:`Text.default`,children:t})]})]})};function wt({enabled:e,isPending:t,isError:n,error:r,data:i}){if(!(!e||t))return n?re(r)&&r.response?.status===me.Unauthorized?null:void 0:i??null}function Tt(e,t){return e===`success`?t:null}var Et=x.div`
    width: 100%;
    height: max-content;
    z-index: 500;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
    padding-bottom: 5px;
`,Dt=x.div`
    width: 100%;
    height: 5px;
    background: ${({theme:e,selectedTheme:t})=>t===`light`?e.colors.Highlight.default:`transparent`};
`,Ot=x.header`
    height: 50px;
    padding-inline: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    gap: 16px;
`,kt=x.div`
    color: ${({theme:e})=>e.colors.Text.default};
    display: none;

    ${I.mobile} {
        display: block;
    }
`,At=()=>{let e=L(`mobile`),{displayedTheme:t}=R(),{status:n,setUser:r,clearUser:i}=T(),[o,s]=(0,B.useState)(!1),[c,l]=(0,B.useState)(!1),[u,d]=(0,B.useState)(!1),[f,p]=(0,B.useState)(!1),[m,h]=(0,B.useState)(null),g=Tt(n,m),{query:_}=O(`GET`,oe.userInfo,{enabled:o,staleTime:0}),y=()=>{g===null?we():l(!0)};return(0,B.useEffect)(()=>{a.VITE_DEV_MODE&&(E.defaults.headers.common[`X-SID-AUTH-TOKEN`]=a.VITE_APP_DEV_API_AUTH_TOKEN),s(!0)},[]),(0,B.useEffect)(()=>{let e=wt({enabled:o,isPending:_.isPending,isError:_.isError,error:_.error,data:_.data});e!==void 0&&(e===null?(h(null),i(),s(!1)):(h(e),r({id:e.id,name:e.name}),le({id:e.id,email:e.mail,name:e.name,studentNumber:e.studentNumber,degree:e.degree})))},[i,o,_.data,_.error,_.isError,_.isPending,r]),(0,B.useEffect)(()=>{e||p(!1)},[e]),b(Et,{children:[u&&v(nt,{developerLoginModalOpen:u,setDeveloperLoginModalOpen:d}),c&&g&&v(et,{userInfo:g,accountPageOpen:c,setAccountPageOpen:l}),v(Dt,{selectedTheme:t}),b(Ot,{children:[v(ct,{setMobileSidebarOpen:()=>p(!1)}),v(q,{handleAccountButtonClick:y,userName:g?.name??`Sign in`,mobileSidebar:!1,isLoading:_.isLoading}),v(kt,{onClick:()=>p(!0),children:v(A,{size:18,children:v(Re,{})})})]}),v(gt,{setMobileSidebarOpen:p,mobileSidebarOpen:f,sidebarHeader:v(q,{handleAccountButtonClick:y,userName:g?.name??`Sign in`,mobileSidebar:!0,isLoading:_.isLoading})})]})},J=a.VITE_GA_MEASUREMENT_ID,jt=e=>{!J||window.gtag===void 0||window.gtag(`config`,J,{page_path:e})},Mt=()=>{let e=c();(0,B.useEffect)(()=>{J&&jt(e.pathname+e.search)},[e.pathname,e.search])},Nt=[`added`,`removed`,`updated`];function Y(e){return Nt.includes(e)}async function Pt({queryClient:e,persister:t,maxAge:n=1e3*60*60*24,buster:r=``,hydrateOptions:i}){try{let a=await t.restoreClient();if(a)if(a.timestamp){let o=Date.now()-a.timestamp>n,s=a.buster!==r;if(o||s)return t.removeClient();Ie(e,a.clientState,i)}else return t.removeClient()}catch(e){throw await t.removeClient(),e}}async function X({queryClient:e,persister:t,buster:n=``,dehydrateOptions:r}){let i={buster:n,timestamp:Date.now(),clientState:Fe(e,r)};await t.persistClient(i)}function Ft(e){let t=e.queryClient.getQueryCache().subscribe(t=>{Y(t.type)&&X(e)}),n=e.queryClient.getMutationCache().subscribe(t=>{Y(t.type)&&X(e)});return()=>{t(),n()}}var It=({children:e,persistOptions:t,onSuccess:n,onError:r,...i})=>{let[a,o]=B.useState(!0),s=B.useRef({persistOptions:t,onSuccess:n,onError:r}),c=B.useRef(!1);return B.useEffect(()=>{s.current={persistOptions:t,onSuccess:n,onError:r}}),B.useEffect(()=>{let e={...s.current.persistOptions,queryClient:i.client};return c.current||(c.current=!0,Pt(e).then(()=>s.current.onSuccess?.()).catch(()=>s.current.onError?.()).finally(()=>{o(!1)})),a?void 0:Ft(e)},[i.client,a]),(0,V.jsx)(ie,{...i,children:(0,V.jsx)(he,{value:a,children:e})})},Lt=()=>{let{user:e}=T(),t=a.VITE_CHANNELTALK_PLUGIN_KEY,n=(0,B.useRef)(!1),r=(0,B.useCallback)(()=>{t&&(De(),Oe({pluginKey:t},e=>{e?console.error(`[ChannelTalk] Boot failed:`,e):n.current=!0}))},[t]);return(0,B.useEffect)(()=>{if(t)return r(),()=>{if(n.current=!1,Ee(),typeof window<`u`){let e=window;delete e.ChannelIO,delete e.ChannelIOInitialized}}},[t,r]),(0,B.useEffect)(()=>{!n.current||!t||!e||Te({profile:{name:e.name}})},[e,t]),null},{slice:Rt,forEach:zt}=[];function Bt(e){return zt.call(Rt.call(arguments,1),t=>{if(t)for(let n in t)e[n]===void 0&&(e[n]=t[n])}),e}function Vt(e){return typeof e==`string`?[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(e)):!1}var Z=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Ht=function(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:`/`},r=`${e}=${encodeURIComponent(t)}`;if(n.maxAge>0){let e=n.maxAge-0;if(Number.isNaN(e))throw Error(`maxAge should be a Number`);r+=`; Max-Age=${Math.floor(e)}`}if(n.domain){if(!Z.test(n.domain))throw TypeError(`option domain is invalid`);r+=`; Domain=${n.domain}`}if(n.path){if(!Z.test(n.path))throw TypeError(`option path is invalid`);r+=`; Path=${n.path}`}if(n.expires){if(typeof n.expires.toUTCString!=`function`)throw TypeError(`option expires is invalid`);r+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(r+=`; HttpOnly`),n.secure&&(r+=`; Secure`),n.sameSite)switch(typeof n.sameSite==`string`?n.sameSite.toLowerCase():n.sameSite){case!0:r+=`; SameSite=Strict`;break;case`lax`:r+=`; SameSite=Lax`;break;case`strict`:r+=`; SameSite=Strict`;break;case`none`:r+=`; SameSite=None`;break;default:throw TypeError(`option sameSite is invalid`)}return n.partitioned&&(r+=`; Partitioned`),r},Ut={create(e,t,n,r){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:`/`,sameSite:`strict`};n&&(i.expires=new Date,i.expires.setTime(i.expires.getTime()+n*60*1e3)),r&&(i.domain=r),document.cookie=Ht(e,t,i)},read(e){let t=`${e}=`,n=document.cookie.split(`;`);for(let e=0;e<n.length;e++){let r=n[e];for(;r.charAt(0)===` `;)r=r.substring(1,r.length);if(r.indexOf(t)===0)return r.substring(t.length,r.length)}return null},remove(e,t){this.create(e,``,-1,t)}},Wt={name:`cookie`,lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<`u`)return Ut.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:i,cookieOptions:a}=t;n&&typeof document<`u`&&Ut.create(n,e,r,i,a)}},Gt={name:`querystring`,lookup(e){let{lookupQuerystring:t}=e,n;if(typeof window<`u`){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf(`?`)>-1&&(e=window.location.hash.substring(window.location.hash.indexOf(`?`)));let r=e.substring(1).split(`&`);for(let e=0;e<r.length;e++){let i=r[e].indexOf(`=`);i>0&&r[e].substring(0,i)===t&&(n=r[e].substring(i+1))}}return n}},Kt={name:`hash`,lookup(e){let{lookupHash:t,lookupFromHashIndex:n}=e,r;if(typeof window<`u`){let{hash:e}=window.location;if(e&&e.length>2){let i=e.substring(1);if(t){let e=i.split(`&`);for(let n=0;n<e.length;n++){let i=e[n].indexOf(`=`);i>0&&e[n].substring(0,i)===t&&(r=e[n].substring(i+1))}}if(r)return r;if(!r&&n>-1){let t=e.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?t[typeof n==`number`?n:0]?.replace(`/`,``):void 0}}}return r}},Q=null,qt=()=>{if(Q!==null)return Q;try{if(Q=typeof window<`u`&&window.localStorage!==null,!Q)return!1;let e=`i18next.translate.boo`;window.localStorage.setItem(e,`foo`),window.localStorage.removeItem(e)}catch{Q=!1}return Q},Jt={name:`localStorage`,lookup(e){let{lookupLocalStorage:t}=e;if(t&&qt())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&qt()&&window.localStorage.setItem(n,e)}},$=null,Yt=()=>{if($!==null)return $;try{if($=typeof window<`u`&&window.sessionStorage!==null,!$)return!1;let e=`i18next.translate.boo`;window.sessionStorage.setItem(e,`foo`),window.sessionStorage.removeItem(e)}catch{$=!1}return $},Xt={name:`sessionStorage`,lookup(e){let{lookupSessionStorage:t}=e;if(t&&Yt())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&Yt()&&window.sessionStorage.setItem(n,e)}},Zt={name:`navigator`,lookup(e){let t=[];if(typeof navigator<`u`){let{languages:e,userLanguage:n,language:r}=navigator;if(e)for(let n=0;n<e.length;n++)t.push(e[n]);n&&t.push(n),r&&t.push(r)}return t.length>0?t:void 0}},Qt={name:`htmlTag`,lookup(e){let{htmlTag:t}=e,n,r=t||(typeof document<`u`?document.documentElement:null);return r&&typeof r.getAttribute==`function`&&(n=r.getAttribute(`lang`)),n}},$t={name:`path`,lookup(e){let{lookupFromPathIndex:t}=e;if(typeof window>`u`)return;let n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(Array.isArray(n))return n[typeof t==`number`?t:0]?.replace(`/`,``)}},en={name:`subdomain`,lookup(e){let{lookupFromSubdomainIndex:t}=e,n=typeof t==`number`?t+1:1,r=typeof window<`u`&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}},tn=!1;try{document.cookie,tn=!0}catch{}var nn=[`querystring`,`cookie`,`localStorage`,`sessionStorage`,`navigator`,`htmlTag`];tn||nn.splice(1,1);var rn=()=>({order:nn,lookupQuerystring:`lng`,lookupCookie:`i18next`,lookupLocalStorage:`i18nextLng`,lookupSessionStorage:`i18nextLng`,caches:[`localStorage`],excludeCacheFor:[`cimode`],convertDetectedLanguage:e=>e}),an=class{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type=`languageDetector`,this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Bt(t,this.options||{},rn()),typeof this.options.convertDetectedLanguage==`string`&&this.options.convertDetectedLanguage.indexOf(`15897`)>-1&&(this.options.convertDetectedLanguage=e=>e.replace(`-`,`_`)),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(Wt),this.addDetector(Gt),this.addDetector(Jt),this.addDetector(Xt),this.addDetector(Zt),this.addDetector(Qt),this.addDetector($t),this.addDetector(en),this.addDetector(Kt)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(e=>{if(this.detectors[e]){let n=this.detectors[e].lookup(this.options);n&&typeof n==`string`&&(n=[n]),n&&(t=t.concat(n))}}),t=t.filter(e=>e!=null&&!Vt(e)).map(e=>this.options.convertDetectedLanguage(e)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}};an.type=`languageDetector`;var on={title:`My Account`,name:`Name`,email:`Email`,schoolId:`School ID`,course:`Course`,major:`Major`,interestedDepartments:`Interested Departments`,logout:`Logout`,sparcsssoCaption:`This information can be changed in <bold>SPARCS SSO</bold>`,kaistPortalCaption:`This information is synced with KAIST Portal. If the information does not match, please contact <bold>otlplus@sparcs.org</bold>`},sn={monday:`Mon`,tuesday:`Tue`,wednesday:`Wed`,thursday:`Thu`,friday:`Fri`,saturday:`Sat`,sunday:`Sun`,mondayShort:`Mon`,tuesdayShort:`Tue`,wednesdayShort:`Wed`,thursdayShort:`Thu`,fridayShort:`Fri`,saturdayShort:`Sat`,sundayShort:`Sun`},cn={hssShort:`HSS`,aeShort:`AE`,bisShort:`BiS`,bsShort:`BS`,cbeShort:`CBE`,ceShort:`CE`,chShort:`CH`,csShort:`CS`,eeShort:`EE`,idShort:`ID`,ieShort:`IE`,masShort:`MAS`,meShort:`ME`,nqeShort:`NQE`,btmShort:`BTM`,msShort:`MS`,phShort:`PH`,tsShort:`TS`,ssShort:`SS`,bcsShort:`BCS`,etcShort:`ETC`},ln={class:`Class`,professor:`Professor`,description:`Description`,grade:`Grade`,load:`Load`,speech:`Speech`,upload:`Upload`,numClasses:`Lec. Hours`,numLabs:`Lab Hours`,credit:`Credits`,cancel:`Cancel`,save:`Save`,edit:`Edit`,hours:`Hours`,minutes:`Min`,seconds:`Sec`,am:`AM`,pm:`PM`,year:`year`,room:`Room`,language:`Language`,limit:`Limit`,exam:`Exam`,completedCourse:`Completed`,wishlist:`Wishlist`,offline:{title:`Connection Failed`,description:`Unable to connect to server. Please check your internet connection.`,goHome:`Go Home`,retry:`Retry`,banner:`You are offline. Only data loaded in this session is available.`,navDisabled:`Not available in offline mode`},serverError:{title:`Server Error`,apology:`We apologize for the inconvenience`,description:`The server is experiencing issues. Please try again later.`,goHome:`Go Home`,retry:`Retry`},notFound:{title:`Page Not Found`,description:`The page you are looking for does not exist or has been moved.`,goHome:`Go Home`},toOTLV3:`Previous`},un={"100sShort":`100s`,"200sShort":`200s`,"300sShort":`300s`,"400sShort":`400s`,"500sShort":`500s`,"600sShort":`600s`,"700sShort":`700s`,"800sShort":`800s`,"900sShort":`900s`,etcShort:`ETC`},dn={over:` and `,people:` others`},fn={writingPlaceholder:`Please describe your evaluation of grades, load, etc.`,like:`Like `,notOpenYet:`You can write a review after the course drop period`},pn={search:`Search`,close:`Close`,reset:`Reset`,submit:`Search`,level:`Grade`,department:`Department`,term:`Term`,time:`Time`,all:`All`,type:`Groups`,placeholder:`Enter keywords`,empty:`Please select at least one search filter`,departmentUnavailable:`The selected department cannot be searched right now.`,timeFilterPlaceholder:`Drag on the timetable to select`},mn={spring:`Spring`,summer:`Summer`,fall:`Fall`,winter:`Winter`},hn={"3yearsShort":`In-3-Years`,"1yearShort":`In-1-Year`,thisSemesterShort:`This-Semester`},gn={basic:`Basic`,major:`Major`,doubleMajor:`Double Major`,minor:`Minor`,advancedMajor:`Advanced Major`,interdisciplinaryMajor:`Interdisciplinary Major`,research:`Research`,general:`General`,basicRequired:`Basic Required`,basicElective:`Basic Elective`,majorRequired:`Major Required`,majorElective:`Major Elective`,generalRequired:`General Required`,humanitiesSocial:`Humanities & Social Elective`,humanities:`Humanities`,thesisStudy:`Thesis Study`,individualStudy:`Individual Study`,otherElective:`Other Elective`,unclassified:`Unclassified`,etc:`Others`,basicRequiredShort:`BR`,basicElectiveShort:`BE`,majorRequiredShort:`MR`,majorElectiveShort:`ME`,humanitiesSocialElectiveShort:`HSE`,mandatoryGeneralCourseShort:`MGC`,otherElectiveShort:`OE`,generalRequiredShort:`GR`,electiveGraduateShort:`EG`,etcShort:`ETC`,totalCredit:`Credit`,totalAu:`AU`},_n={account:on,common:{...ln,type:gn,department:cn,level:un,term:hn,professors:dn,review:fn,search:pn,semesters:mn,days:sn},credits:{credits:`Credits`,license:`Terms of Service`,privacyPolicy:`Privacy Policy`,contact:`Contact Us`},dictionary:{courseHistory:`Course History`,notOffered:`Not offered`,courseCountInfo1:`Total<space/><bold>{{count}}</bold><space/>courses<space/>`,courseCountInfo2:`(<icon/>: Open this semester)`,sort:`Sort`,noResults:`No results`,sortOptions:{code:`By Course Code`,popularity:`By Popularity`,studentCount:`By Enrollment`},review:`Course Reviews`,reviewLanguage:`Language`,reviewLanguageOptions:{all:`All`,english:`English`}},header:{dictionary:`Dictionary`,writeReviews:`Write Reviews`,timetable:`Timetable`,syllabus:`Syllabus`},main:{hisTimeTable:`<name>{{name}}</name><space/><normal>'s Timetable</normal>`,schedule:{title:`Due to {{content}}`,link:`Go to Student Portal`,contents:{beginning:`Beginning`,end:`End`,courseRegistrationPeriodStart:`Start of Course Registration Period`,courseRegistrationPeriodEnd:`End of Course Registration Period`,courseAddDropPeriodEnd:`End of Course Add & Drop Period`,courseDropDeadline:`Deadline to Course Drop`,courseEvaluationDeadline:`Deadline to Course Evaluation`,gradePosting:`Grade Posting`}},reviewSection:{title:`How did you find the {{lectureName}} course?`,placeholder:`How did you find the gradings and workload — fair, heavy, or just right?`,writeAnother:`Another one`},recentFeed:{title:`<bold>Fresh</bold><space/><normal>Reviews</normal>`},likedMajorFeed:{title:`<bold>Popular</bold><space/><normal>Reviews</normal>`},hallOfFameFeed:{title:`<bold>Hall of</bold><space/><normal>Fame</normal>`},scheduleFeed:{title:`School Schedules`,noSchedules:`No schedules`}},writeReviews:{mySummary:{title:`Taken Lectures`,written:`My Reviews`,likes:`likes`,selectPlaceholder:`Please select a lecture`},write:{title:`Write Reviews - {{lectureName}}`,related:`Related Reviews - {{lectureName}}`,edit:`Edit`},hallOfFameFeed:{title:`Hall of Fame - {{year}}<space/>{{semester}}`,total:`Total Reviews`},likedReviews:{title:`My Liked Reviews`},tabs:{write:`Write Reviews`,hallOfFameFeed:`Hall of Fame`,recentFeed:`Fresh Reviews`,liked:`My Liked Reviews`}},timetable:{myTimetable:`My Timetable`,examTimetable:`Exam Timetable`,addLectureConflict:`Cannot add lectures that conflict with existing timetable.`,pasteLectureConflict:`There is a conflict with this lecture in the timetable. Would you like to replace it?`,myTimeTableLectureAddWarning:`Cannot add lectures to My Timetable.`,timetableKeyboardDeleteConfirm:`Are you sure you want to delete the current timetable?`,copyImage:`Copy as Image`,exportImage:`Export as Image`,exportICal:`Export as Calendar`,addToWishlist:`Add to Wishlist`,addToTimetable:`Add to Timetable`,removeFromWishlist:`Remove from Wishlist`,removeFromTimetable:`Remove from Timetable`,competitionRate:`Competition`,noTimeInfo:`No Time Info`,numSelected:` Lectures Selected`,shortcuts:{modalTitle:`Keyboard Shortcuts`,lectureSection:`Lecture Edit`,timetableSection:`Timetable Control`,etcSection:`Etc Navigations`,lectureMultiple:`Lecture multiple select`,lectureCopy:`Copy selected lectures`,lectureCut:`Cut selected lectures`,lecturePaste:`Paste selected lectures`,lectureAll:`Select all lectures in timetable`,lectureDelete:`Delete selected lectures`,timetableUndo:`Undo latest action (managed per timetable)`,timetableRedo:`Redo latest undo action (managed per timetable)`,timetableAdd:`Add empty timetable`,timetableDuplicate:`Duplicate current timetable`,timetableDelete:`Delete current timetable (when there is no selected lectures)`,timetableSelect:`Select timetable`,etcSemester:`Semester change`,etcLectureSearchMove:`Explore in lecture search result`,etcLectureAddDelete:`Add or delete current exploring lecture`,etcSelectCancel:`Cancel selected lectures`,etcShortcutInfo:`Show this shortcut information`}}},vn={title:`내 정보`,name:`이름`,email:`메일`,schoolId:`학번`,course:`과정`,major:`전공`,interestedDepartments:`관심 학과`,logout:`로그아웃`,sparcsssoCaption:`이 정보는 <bold>SPARCS SSO</bold>에서 변경할 수 있습니다`,kaistPortalCaption:`이 정보는 KAIST Portal과 연동됩니다. 정보가 일치하지 않을 경우 <bold>otlplus@sparcs.org</bold>로 문의해주세요`},yn={monday:`월요일`,tuesday:`화요일`,wednesday:`수요일`,thursday:`목요일`,friday:`금요일`,saturday:`토요일`,sunday:`일요일`,mondayShort:`월`,tuesdayShort:`화`,wednesdayShort:`수`,thursdayShort:`목`,fridayShort:`금`,saturdayShort:`토`,sundayShort:`일`},bn={hssShort:`인문`,aeShort:`항공`,bisShort:`바공`,bsShort:`생명`,cbeShort:`생화공`,ceShort:`건환`,chShort:`화학`,csShort:`전산`,eeShort:`전자`,idShort:`산디`,ieShort:`산공`,masShort:`수리`,meShort:`기계`,nqeShort:`원양`,btmShort:`기경`,msShort:`신소재`,phShort:`물리`,tsShort:`융인`,ssShort:`반시공`,bcsShort:`뇌인지`,etcShort:`기타`},xn={class:`분류`,professor:`교수`,description:`설명`,grade:`성적`,load:`널널`,speech:`강의`,upload:`업로드`,numClasses:`강의시간`,numLabs:`실험`,credit:`학점`,cancel:`취소`,save:`저장`,edit:`수정`,hours:`시간`,minutes:`분`,seconds:`초`,am:`오전`,pm:`오후`,year:`연도`,room:`장소`,language:`언어`,limit:`정원`,exam:`시험`,completedCourse:`수강완료`,wishlist:`찜목록`,offline:{title:`서버 연결 실패`,description:`서버에 연결할 수 없습니다. 인터넷 연결을 확인해 주세요.`,goHome:`홈으로 돌아가기`,retry:`다시 시도`,banner:`오프라인 상태입니다. 현재 세션에 불러온 데이터만 표시됩니다.`,navDisabled:`오프라인 모드에서는 이용할 수 없습니다`},serverError:{title:`서버 장애`,apology:`불편을 드려 죄송합니다`,description:`현재 서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.`,goHome:`홈으로 돌아가기`,retry:`다시 시도`},notFound:{title:`페이지를 찾을 수 없습니다`,description:`요청하신 페이지가 존재하지 않거나 이동되었습니다.`,goHome:`홈으로 돌아가기`},toOTLV3:`이전 버전`},Sn={"100sShort":`100번대`,"200sShort":`200번대`,"300sShort":`300번대`,"400sShort":`400번대`,"500sShort":`500번대`,"600sShort":`600번대`,"700sShort":`700번대`,"800sShort":`800번대`,"900sShort":`900번대`,etcShort:`기타`},Cn={over:` 외 `,people:`명`},wn={writingPlaceholder:`학점, 로드 등의 평가에 대하여 설명해주세요.`,like:`좋아요`,notOpenYet:`수강 취소기간이 지난 후 후기 작성이 가능합니다`},Tn={search:`검색`,close:`닫기`,reset:`초기화`,submit:`검색`,level:`학년`,department:`학과`,term:`기간`,time:`시간`,all:`전체`,type:`분류`,placeholder:`과목명, 교수명을 등을 검색해보세요`,empty:`검색 조건을 하나 이상 선택해주세요`,departmentUnavailable:`선택한 학과를 검색할 수 없습니다. 잠시 후 다시 시도해 주세요.`,timeFilterPlaceholder:`시간표에서 드래그하여 선택`},En={spring:`봄`,summer:`여름`,fall:`가을`,winter:`겨울`},Dn={"3yearsShort":`3년이내`,"1yearShort":`1년이내`,thisSemesterShort:`이번학기`},On={basic:`기초`,major:`전공`,doubleMajor:`복수전공`,minor:`부전공`,advancedMajor:`심화전공`,interdisciplinaryMajor:`자유융합전공`,research:`연구`,general:`교양`,basicRequired:`기초필수`,basicElective:`기초선택`,majorRequired:`전공필수`,majorElective:`전공선택`,generalRequired:`교양필수`,humanitiesSocial:`인문사회선택`,humanities:`인문사회선택`,thesisStudy:`졸업연구`,individualStudy:`개별연구`,otherElective:`자유선택`,unclassified:`미분류`,etc:`기타`,basicRequiredShort:`기필`,basicElectiveShort:`기선`,majorRequiredShort:`전필`,majorElectiveShort:`전선`,humanitiesSocialElectiveShort:`인선`,mandatoryGeneralCourseShort:`교필`,otherElectiveShort:`자선`,generalRequiredShort:`공통`,electiveGraduateShort:`석박`,etcShort:`기타`,totalCredit:`학점`,totalAu:`AU`},kn={account:vn,common:{...xn,type:On,department:bn,level:Sn,term:Dn,professors:Cn,review:wn,search:Tn,semesters:En,days:yn},credits:{credits:`만든 사람들`,license:`이용 약관`,privacyPolicy:`개인정보취급방침`,contact:`문의하기`},dictionary:{courseHistory:`개설이력`,notOffered:`미개설`,courseCountInfo1:`총 <bold>{{count}}</bold>개 과목<space/>`,courseCountInfo2:`(<icon/>: 이번 학기 개설)`,sort:`정렬`,noResults:`결과 없음`,sortOptions:{code:`과목코드순`,popularity:`인기순`,studentCount:`수강자 많은 순`},review:`과목 후기`,reviewLanguage:`언어`,reviewLanguageOptions:{all:`전체`,english:`영어`}},header:{dictionary:`과목사전`,timetable:`모의시간표`,writeReviews:`과목후기 작성하기`,syllabus:`실라버스`},main:{hisTimeTable:`<name>{{name}}</name><space/><normal>님의 시간표</normal>`,schedule:{title:`{{content}}까지`,link:`학사 시스템 바로가기`,contents:{beginning:`개강`,end:`종강`,courseRegistrationPeriodStart:`수강신청기간 시작`,courseRegistrationPeriodEnd:`수강신청기간 종료`,courseAddDropPeriodEnd:`수강변경기간 종료`,courseDropDeadline:`수강취소 마감`,courseEvaluationDeadline:`강의평가 마감`,gradePosting:`성적게시`}},reviewSection:{title:`{{lectureName}} 강의는 어땠나요?`,placeholder:`학점, 로드 등의 평가에 대해 설명해주세요.`,writeAnother:`다른 과목 후기 쓰기`},recentFeed:{title:`<bold>따끈따끈</bold><space/><normal>과목후기</normal>`},likedMajorFeed:{title:`<bold>사랑받는</bold><space/><normal>과목후기</normal>`},hallOfFameFeed:{title:`<bold>명예의</bold><space/><normal>전당</normal>`},scheduleFeed:{title:`주요 일정`,noSchedules:`일정 없음`}},writeReviews:{mySummary:{title:`내가 들은 과목`,written:`작성 후기`,likes:`추천`,selectPlaceholder:`강의를 선택해주세요`},write:{title:`후기 작성 - {{lectureName}}`,related:`연관 후기 - {{lectureName}}`,edit:`수정하기`},hallOfFameFeed:{title:`명예의 전당 - {{year}}<space/>{{semester}}`,total:`전체 후기`},likedReviews:{title:`좋아요한 후기`},tabs:{write:`후기 작성하기`,recentFeed:`따끈따끈 후기`,hallOfFameFeed:`명예의 전당`,liked:`좋아요한 후기`}},timetable:{myTimetable:`내 시간표`,examTimetable:`시험시간표`,addLectureConflict:`시간표가 겹치는 강의를 추가할 수 없습니다.`,pasteLectureConflict:`시간이 겹치는 과목이 있습니다. 겹치는 기존 과목을 지우고 붙여넣으시겠습니까?`,myTimeTableLectureAddWarning:`내 시간표에는 강의를 추가할 수 없습니다.`,timetableKeyboardDeleteConfirm:`현재 시간표를 삭제하시겠습니까?`,copyImage:`이미지로 복사하기`,exportImage:`이미지로 내보내기`,exportICal:`캘린더로 내보내기`,addToWishlist:`찜목록에 추가`,addToTimetable:`시간표에 추가`,removeFromWishlist:`찜목록에서 제거`,removeFromTimetable:`시간표에서 제거`,competitionRate:`경쟁률`,noTimeInfo:`시간 정보 없음`,numSelected:`개 과목 선택됨`,shortcuts:{modalTitle:`단축키 안내`,lectureSection:`과목 편집`,timetableSection:`시간표 조작`,etcSection:`기타 네비게이션`,lectureMultiple:`과목 다중 선택 / 선택 해제`,lectureCopy:`선택된 과목 복사`,lectureCut:`선택된 과목 잘라내기`,lecturePaste:`복사 / 잘라낸 과목 붙여넣기`,lectureAll:`시간표의 과목 전체 선택`,lectureDelete:`선택된 과목 삭제`,timetableUndo:`실행 취소 (시간표 별로 관리됨)`,timetableRedo:`다시 실행 (시간표 별로 관리됨)`,timetableAdd:`빈 시간표 추가`,timetableDuplicate:`현재 시간표 복제`,timetableDelete:`현재 시간표 삭제 (선택된 과목이 없을 시)`,timetableSelect:`시간표 탭 이동`,etcSemester:`학기 이동`,etcLectureSearchMove:`검색 결과 내 탐색`,etcLectureAddDelete:`탐색중인 과목 추가 / 제거`,etcSelectCancel:`선택 취소`,etcShortcutInfo:`단축키 안내 보기`}}},An={common:kn},jn={common:kn},Mn={common:_n},Nn=Object.keys(An),Pn={ko:jn,en:Mn};C.use(an).use(_e).init({resources:Pn,ns:Nn,defaultNS:Nn[0],fallbackLng:`ko`,debug:a.VITE_APP_LOG_LEVEL===`debug`,interpolation:{escapeValue:!1}});var Fn=C,In=e=>{let{displayedTheme:t}=R(),n=B.useMemo(()=>ke[t],[t]),r=B.useCallback(()=>{navigator.onLine&&ce.invalidateQueries({predicate:D})},[]);return v(It,{client:ce,persistOptions:{persister:fe,maxAge:ae,buster:pe,dehydrateOptions:{shouldDehydrateQuery:D}},onSuccess:r,children:v(ze,{i18n:Fn,children:b(y,{theme:n,children:[v(Lt,{}),e.children]})})})},Ln=()=>[{title:`OTL - Online Timetable with Lectures`},{name:`description`,content:`OTL은 카이스트 학생들을 위한 시간표 만들기 및 후기 공유 서비스입니다.`},{property:`og:title`,content:`OTL - Online Timetable with Lectures`},{property:`og:description`,content:`OTL은 카이스트 학생들을 위한 시간표 만들기 및 후기 공유 서비스입니다.`},{property:`og:image`,content:`https://otl.kaist.ac.kr/static/favicon-192.png`},{property:`og:type`,content:`website`}],Rn=()=>[{rel:`preconnect`,href:`https://fonts.googleapis.com`},{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossOrigin:`anonymous`},{rel:`stylesheet`,href:`https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap`},{rel:`manifest`,href:`/static/manifest.json`},{rel:`icon`,href:`/favicon.ico`,sizes:`any`},{rel:`icon`,href:`/static/favicon-32.png`,type:`image/png`,sizes:`32x32`},{rel:`apple-touch-icon`,href:`/static/favicon-180.png`}];function zn({children:e}){return b(`html`,{lang:`en`,children:[b(`head`,{children:[v(`meta`,{charSet:`utf-8`}),v(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),v(`meta`,{name:`theme-color`,content:`#F9F0F0`}),v(`link`,{rel:`stylesheet`,as:`style`,crossOrigin:`anonymous`,href:`https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`}),v(u,{}),v(f,{}),a.VITE_GA_MEASUREMENT_ID&&b(ee,{children:[v(`script`,{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${a.VITE_GA_MEASUREMENT_ID}`}),v(`script`,{dangerouslySetInnerHTML:{__html:`
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${a.VITE_GA_MEASUREMENT_ID}', {
                                        page_path: window.location.pathname,
                                    });
                                `}})]})]}),b(`body`,{children:[v(In,{children:e}),v(d,{}),v(g,{})]})]})}var Bn=x(S)`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    background-color: ${({theme:e})=>e.colors.Background.Page.default};
`,Vn=x(S)`
    overflow: auto;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`,Hn=s(function(){return Mt(),(0,B.useEffect)(()=>{se()},[]),b(Bn,{direction:`column`,align:`stretch`,justify:`stretch`,gap:0,flex:`0 1 auto`,children:[v(At,{}),v(Vn,{direction:`column`,gap:0,align:`stretch`,flex:`1 1 auto`,children:v(h,{})}),v(Le,{initialIsOpen:!1})]})}),Un=p(function({error:e}){let t=`Oops!`,n=`An unexpected error occurred.`;return l(e)?(t=e.status===404?`404`:`Error`,n=e.status===404?`The requested page could not be found.`:e.statusText||n):e&&e instanceof Error&&r()&&i(e),b(`main`,{children:[v(`h1`,{children:t}),v(`p`,{children:n}),void 0]})});export{Un as ErrorBoundary,zn as Layout,Hn as default,Rn as links,Ln as meta};
//# sourceMappingURL=root-CYxxo85e.js.map