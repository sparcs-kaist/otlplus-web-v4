(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`75bb3b9480ceb7562c2b564b2fba4f80dcc30e8a`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`5e88a5b9-dbf5-4e18-8857-7203728ff694`,e._sentryDebugIdIdentifier=`sentry-dbid-5e88a5b9-dbf5-4e18-8857-7203728ff694`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-CxrAfrrE.js";import{b as r,g as i,v as a,y as o}from"./sentryEventFilter-BM5mSsri.js";import{A as s}from"./chunk-62JRHF6Z-B0jAkslD.js";import{n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-Ca1gJfhf.js";import{n as d,t as f}from"./FlexWrapper-1igZMPnI.js";import{i as p,y as m}from"./axios-CW-b1rpO.js";import{C as h,S as g,a as _,b as v,i as y,o as b,s as x,t as S,u as ee,v as C,x as w,y as T}from"./useAPI-BO_elG8f.js";import{r as E,t as D}from"./Icon-DZEIHPW-.js";import{t as O}from"./useTranslation-wt_w4v0Q.js";import{t as k}from"./Typography-BR02ryHI.js";import{t as A}from"./media-DRzAHcKX.js";import{t as te}from"./featureFlags-CsyD3zgT.js";import{t as j}from"./Widget-CaxVnOtN.js";import{t as ne}from"./LoadingCircle-DATvxDdv.js";import{t as re}from"./Add-C0EdEnIH.js";import{t as ie}from"./ContentCopy-CazS516J.js";import{t as ae}from"./KeyboardArrowDown-C_NJnmxq.js";var M=t(e(),1),N=t(n(),1),P=E((0,N.jsx)(`path`,{d:`M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z`}),`DeleteOutlined`),oe=E((0,N.jsx)(`path`,{d:`M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z`}),`KeyboardArrowUp`),F=d.button`
    appearance: none;
    border: 1px solid
        ${({$danger:e,$primary:t,theme:n})=>e?n.colors.Highlight.dark:t?n.colors.Highlight.default:n.colors.Line.default};
    border-radius: 6px;
    padding: 8px 12px;
    color: ${({$danger:e,$primary:t,theme:n})=>e||t?n.colors.Text.onHighlight.default:n.colors.Text.default};
    background: ${({$danger:e,$primary:t,theme:n})=>e?n.colors.Highlight.dark:t?n.colors.Highlight.default:n.colors.Background.Button.default};
    flex-shrink: 0;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    font-weight: ${({theme:e})=>e.fonts.Normal.fontWeight};
    line-height: ${({theme:e})=>e.fonts.Normal.lineHeight}px;
    white-space: nowrap;
    cursor: pointer;
    transition:
        background-color 120ms ease,
        transform 120ms ease;

    &:hover:not(:disabled) {
        filter: brightness(0.96);
    }

    &:active:not(:disabled) {
        transform: translateY(1px);
    }

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({theme:e})=>e.colors.Text.disable};
        background: ${({theme:e})=>e.colors.Background.Input.disabled};
        border-color: ${({theme:e})=>e.colors.Line.block};
    }

    ${A.mobile} {
        min-width: 44px;
        min-height: 44px;
    }
`,I=d.div`
    padding: 10px 12px;
    border: 1px solid ${({theme:e})=>e.colors.Notice.border};
    border-radius: 6px;
    color: ${({theme:e})=>e.colors.Notice.text};
    background: ${({theme:e})=>e.colors.Notice.background};
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    font-weight: ${({theme:e})=>e.fonts.NormalBold.fontWeight};
    overflow-wrap: anywhere;
    text-align: center;
    word-break: keep-all;
`,L=d.input`
    min-width: 0;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 6px;
    padding: 8px 10px;
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({theme:e})=>e.colors.Background.Section.default};
    font: inherit;

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 1px;
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({theme:e})=>e.colors.Text.disable};
        background: ${({theme:e})=>e.colors.Background.Input.disabled};
        border-color: ${({theme:e})=>e.colors.Line.block};
    }
`,R=d.select`
    min-width: 0;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 6px;
    padding: 8px 10px;
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({theme:e})=>e.colors.Background.Section.default};
    font: inherit;

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 1px;
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({theme:e})=>e.colors.Text.disable};
        background: ${({theme:e})=>e.colors.Background.Input.disabled};
        border-color: ${({theme:e})=>e.colors.Line.block};
    }
`,z=d.label`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,se=d.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,ce=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
    gap: 10px;
`,B=d.h2`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    line-height: ${({theme:e})=>e.fonts.Big.lineHeight}px;
`;function le(e){let t=e.getFullYear(),n=e.getMonth()+1;return n>=3&&n<=6?{year:t,semester:1}:n>=7&&n<=8?{year:t,semester:2}:n>=9?{year:t,semester:3}:{year:t-1,semester:4}}function ue(e,t){let n=le(t);return e.year===n.year?e.semester<n.semester:e.year<n.year}function de(e){let t=0;for(let n of e){t=Math.min(t,n.id);for(let e of[...n.taken_items,...n.future_items,...n.arbitrary_items])t=Math.min(t,e.id)}return t-1}function fe(e=[]){let t=de(e);return{next:()=>{let e=t;return--t,e},reserve:e=>{t=Math.min(t,de(e))}}}function pe(e,t,n){let r=e=>({...e,id:t()});return{id:t(),start_year:e.startYear,end_year:e.endYear,general_track:e.generalTrack,major_track:e.majorTrack,additional_tracks:[...e.additionalTracks],taken_items:n?.taken_items.map(r)??[],future_items:n?.future_items.map(r)??[],arbitrary_items:n?.arbitrary_items.map(r)??[],arrange_order:0}}function V(e,t,n){return e.map(e=>e.id===t?n(e):e)}function me(e,t,n){let r=[...e].sort((e,t)=>e.arrange_order-t.arrange_order),i=r.findIndex(e=>e.id===t),a=i+n;if(i<0||a<0||a>=r.length)return r;let o=r[i],s=r[a];return o===void 0||s===void 0?r:(r[i]={...s,arrange_order:i},r[a]={...o,arrange_order:a},r)}function he(e,t,n){let r=e=>{if(e.id!==t.id)return e;let r=n.isExcluded??e.is_excluded;return e.item_type===`TAKEN`||n.semester===void 0?{...e,is_excluded:r}:{...e,semester:n.semester,is_excluded:r}};return{...e,taken_items:e.taken_items.map(r),future_items:e.future_items.map(r),arbitrary_items:e.arbitrary_items.map(r)}}function ge(e,t){return t.item_type===`TAKEN`?e:{...e,future_items:e.future_items.filter(e=>e.id!==t.id),arbitrary_items:e.arbitrary_items.filter(e=>e.id!==t.id)}}var _e=`otlplus.planner.local`,ve=o({version:i(1),planners:w}).strict(),H=o({version:a().int().nonnegative()}).passthrough();function U(e){try{return e.localStorage}catch{return null}}function W(e,t){try{return e.removeItem(t),!0}catch{return!1}}function ye(e){if(e===null)return!1;try{let t=H.safeParse(JSON.parse(e));return t.success&&t.data.version>1}catch{return!1}}function G(e,t,n){let r=w.safeParse(n);if(!r.success)return!1;try{return!ye(e.getItem(t))&&(e.setItem(t,JSON.stringify({version:1,planners:r.data})),!0)}catch{return!1}}function be(e,t){let n;try{n=e.getItem(t)}catch{return{status:`unavailable`}}if(n===null)return{status:`loaded`,planners:[]};let r;try{r=JSON.parse(n)}catch{return W(e,t)?{status:`loaded`,planners:[]}:{status:`unavailable`}}let i=ve.safeParse(r);if(i.success)return{status:`loaded`,planners:i.data.planners};let a=H.safeParse(r);if(a.success&&a.data.version>1)return{status:`unsupported-version`};let o=w.safeParse(r);return o.success?(G(e,t,o.data),{status:`loaded`,planners:o.data}):W(e,t)?{status:`loaded`,planners:[]}:{status:`unavailable`}}function xe(e){return{id:e.id,old_code:e.old_code,old_old_code:e.old_old_code,department:e.department,type:e.type,type_en:e.type_en,title:e.title,title_en:e.title_en,summary:e.summary,review_total_weight:e.review_total_weight,credit:e.credit,credit_au:e.credit_au,num_classes:e.num_classes,num_labs:e.num_labs}}var Se=o({year:a().int(),semester:g,department:v,type:r().min(1),typeEn:r().min(1),credit:a().int().nonnegative(),creditAU:a().int().nonnegative()}).strict();function Ce(e){let t=`/users/${e.userId}/planners/${e.selectedPlannerId??0}`,n=S(`POST`,`${t}/add-future-item`,{apiPrefix:`/api`}).mutation,r=S(`POST`,`${t}/add-arbitrary-item`,{apiPrefix:`/api`}).mutation,i=S(`POST`,`${t}/remove-item`,{apiPrefix:`/api`}).mutation,a=S(`POST`,`${t}/update-item`,{apiPrefix:`/api`}).mutation,o=(0,M.useCallback)(async(t,r,i,o)=>{if(e.selectedPlanner===null)return;let s=e.selectedPlanner.id;if(e.isAuthenticated){if(y.parse(await n.mutateAsync({course:t.id,year:r,semester:i})),o?.excludeTakenDuplicates){let n=e.selectedPlanner.taken_items.filter(e=>!e.is_excluded&&e.course.id===t.id);await Promise.all(n.map(e=>a.mutateAsync({item:e.id,item_type:e.item_type,is_excluded:!0})))}await e.refresh();return}let c=e.allocateLocalId();e.setLocalPlanners(e=>V(e,s,e=>({...e,taken_items:o?.excludeTakenDuplicates?e.taken_items.map(e=>!e.is_excluded&&e.course.id===t.id?{...e,is_excluded:!0}:e):e.taken_items,future_items:[...e.future_items,{id:c,item_type:`FUTURE`,is_excluded:!1,year:r,semester:i,course:xe(t)}]})))},[n,e,a]),s=(0,M.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=Se.safeParse(t);if(!n.success)return;let i=n.data,a=e.selectedPlanner.id;if(i.year<e.selectedPlanner.start_year||i.year>e.selectedPlanner.end_year)return;if(e.isAuthenticated){C.parse(await r.mutateAsync({year:i.year,semester:i.semester,department:i.department.id,type:i.type,type_en:i.typeEn,credit:i.credit,credit_au:i.creditAU})),await e.refresh();return}let o=e.allocateLocalId();e.setLocalPlanners(e=>V(e,a,e=>({...e,arbitrary_items:[...e.arbitrary_items,{id:o,item_type:`ARBITRARY`,is_excluded:!1,year:i.year,semester:i.semester,department:i.department,type:i.type,type_en:i.typeEn,credit:i.credit,credit_au:i.creditAU}]})))},[r,e]),c=(0,M.useCallback)(async(t,n)=>{if(e.selectedPlanner===null)return;let r=e.selectedPlanner.id;if(e.isAuthenticated){b.parse(await a.mutateAsync({item:t.id,item_type:t.item_type,semester:n.semester,is_excluded:n.isExcluded})),await e.refresh();return}e.setLocalPlanners(e=>V(e,r,e=>he(e,t,n)))},[e,a]),l=(0,M.useCallback)(async t=>{if(e.selectedPlanner===null||t.item_type===`TAKEN`)return;let n=e.selectedPlanner.id;if(e.isAuthenticated){_.parse(await i.mutateAsync({item:t.id,item_type:t.item_type})),await e.refresh();return}e.setLocalPlanners(e=>V(e,n,e=>ge(e,t)))},[e,i]),u=[n,r,i,a];return{addFuture:o,addArbitrary:s,updateItem:c,removeItem:l,isBusy:u.some(e=>e.isPending),error:u.find(e=>e.error)?.error}}var K=[4,5,6,7,8];function q(e,t){return e.start_year<=t&&t<=e.end_year}function we(e){return Array.from({length:Math.max(0,e-2015+1)},(e,t)=>t+2015)}function Te(e,t){if(e===void 0)return null;let n=Number(String(e).slice(0,4));return Number.isInteger(n)&&n>=2e3&&n<=t?n:null}function Ee(e,t,n){if(e===void 0)return null;let r=Te(t?.studentNumber,n)??n,i=e.general.filter(e=>q(e,r)),a=i.find(e=>!e.is_foreign)??i[0],o=e.major.filter(e=>q(e,r)),s=new Set(t?.majorDepartments?.map(e=>e.code)),c=o.find(e=>s.has(e.department.code))??o[0];return a===void 0||c===void 0?null:{startYear:r,endYear:r+3,generalTrack:a,majorTrack:c,additionalTracks:[]}}function De(e,t,n){if(!q(e,t))return!0;let r=e.department?.code;switch(e.type){case`DOUBLE`:case`MINOR`:return r===n.department.code;case`ADVANCED`:return r!==n.department.code;case`INTERDISCIPLINARY`:return!1}}function Oe(e,t){let n=new Map,r=0,i=0;for(let a of e){let e=a.department?.code;if((a.type===`DOUBLE`||a.type===`MINOR`)&&e!==void 0){if(e===t.department.code)return`sameAsPrimary`;let r=(n.get(e)??0)+1;if(n.set(e,r),r>1)return`duplicateDepartment`}if(a.type===`ADVANCED`){if(r+=1,e!==t.department.code)return`advancedDepartment`;if(r>1)return`multipleAdvanced`}if(a.type===`INTERDISCIPLINARY`&&(i+=1,i>1))return`multipleInterdisciplinary`}return null}function ke(e,t,n){let r=e=>e<t||e>n;return e.taken_items.filter(e=>r(e.lecture.year)).length+e.future_items.filter(e=>r(e.year)).length+e.arbitrary_items.filter(e=>r(e.year)).length}function Ae(e){return[e.generalTrack,e.majorTrack,...e.additionalTracks].filter(t=>!q(t,e.startYear)).length}function je(e){let t=S(`POST`,`/users/${e.userId}/planners`,{apiPrefix:`/api`}).mutation,n=`/users/${e.userId}/planners/${e.selectedPlannerId??0}`,r=S(`PATCH`,n,{apiPrefix:`/api`}).mutation,i=S(`DELETE`,n,{apiPrefix:`/api`}).mutation,a=S(`POST`,`${n}/reorder`,{apiPrefix:`/api`}).mutation,o=(0,M.useCallback)(()=>Ee(e.tracks,e.user,new Date().getFullYear()),[e.tracks,e.user]),s=(0,M.useCallback)(async n=>{let r=n?e.selectedPlanner:null,i=r?{startYear:r.start_year,endYear:r.end_year,generalTrack:r.general_track,majorTrack:r.major_track,additionalTracks:r.additional_tracks}:o();if(i===null)return;if(!e.isAuthenticated){let t=pe(i,e.allocateLocalId,r??void 0);e.setLocalPlanners(e=>[...e,{...t,arrange_order:e.length}]),e.setSelectedPlannerId(t.id);return}let a=_.parse(await t.mutateAsync({start_year:i.startYear,end_year:i.endYear,general_track:i.generalTrack.id,major_track:i.majorTrack.id,additional_tracks:i.additionalTracks.map(e=>e.id),should_update_taken_semesters:r===null||void 0,taken_items_to_copy:r?.taken_items.map(e=>e.id)??[],future_items_to_copy:r?.future_items.map(e=>e.id)??[],arbitrary_items_to_copy:r?.arbitrary_items.map(e=>e.id)??[]}));await e.refresh(),e.setSelectedPlannerId(a.id)},[t,o,e]),c=(0,M.useCallback)(async()=>{if(e.selectedPlanner===null)return;let t=e.selectedPlanner.id;e.isAuthenticated?(await i.mutateAsync({}),await e.refresh()):e.setLocalPlanners(e=>e.filter(e=>e.id!==t)),e.setSelectedPlannerId(null)},[i,e]),l=(0,M.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=e.selectedPlanner.id;if(e.isAuthenticated){let n=_.parse(await r.mutateAsync({start_year:t.startYear,end_year:t.endYear,general_track:t.generalTrack.id,major_track:t.majorTrack.id,additional_tracks:t.additionalTracks.map(e=>e.id),should_update_taken_semesters:!0}));e.setSelectedPlannerId(n.id),await e.refresh();return}e.setLocalPlanners(e=>V(e,n,e=>({...e,start_year:t.startYear,end_year:t.endYear,general_track:t.generalTrack,major_track:t.majorTrack,additional_tracks:[...t.additionalTracks],taken_items:e.taken_items.filter(e=>e.lecture.year>=t.startYear&&e.lecture.year<=t.endYear),future_items:e.future_items.filter(e=>e.year>=t.startYear&&e.year<=t.endYear),arbitrary_items:e.arbitrary_items.filter(e=>e.year>=t.startYear&&e.year<=t.endYear)})))},[e,r]),u=(0,M.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=e.selectedPlanner.id,r=e.selectedPlanner.arrange_order+t;if(!(r<0||r>=e.planners.length)){if(e.isAuthenticated){T.parse(await a.mutateAsync({arrange_order:r})),await e.refresh();return}e.setLocalPlanners(e=>me(e,n,t))}},[e,a]),d=[t,r,i,a];return{createPlanner:s,deletePlanner:c,updateTracks:l,reorderPlanner:u,isBusy:d.some(e=>e.isPending),error:d.find(e=>e.error)?.error}}function Me(){let{status:e,user:t}=p(),n=e===`success`&&t!==null,r=t?.id??0,[i,a]=(0,M.useState)([]),[o,s]=(0,M.useState)(`hydrating`),[c,l]=(0,M.useState)(null),u=(0,M.useRef)(fe()),d=S(`GET`,`/tracks`,{select:e=>h.parse(e),apiPrefix:`/api`}).query,f=S(`GET`,`/users/${r}/planners`,{enabled:n,select:e=>x.parse(e),apiPrefix:`/api`}).query;(0,M.useEffect)(()=>{let e=U(window);if(e===null){s(`unavailable`);return}let t=be(e,_e);if(t.status!==`loaded`){s(`unavailable`);return}a(t.planners),u.current.reserve(t.planners),s(`available`)},[]),(0,M.useEffect)(()=>{if(o!==`available`)return;let e=U(window);(e===null||!G(e,`otlplus.planner.local`,i))&&s(`unavailable`)},[i,o]);let m=(0,M.useMemo)(()=>[...n?f.data??[]:i].sort((e,t)=>e.arrange_order-t.arrange_order),[n,i,f.data]),g=m.find(e=>e.id===c)??m[0]??null;(0,M.useEffect)(()=>{g!==null&&g.id!==c&&l(g.id)},[g,c]);let _=(0,M.useCallback)(async()=>{n&&await f.refetch()},[n,f]),v={userId:r,isAuthenticated:n,selectedPlanner:g,selectedPlannerId:c,setLocalPlanners:a,allocateLocalId:u.current.next,refresh:_},y=je({...v,user:t,planners:m,tracks:d.data,setSelectedPlannerId:l}),b=Ce(v);return{planners:m,selectedPlanner:g,selectedPlannerId:c,setSelectedPlannerId:l,tracks:d.data,isLoading:d.isLoading||o===`hydrating`||n&&f.isLoading,isBusy:y.isBusy||b.isBusy,error:d.error??f.error??y.error??b.error,createPlanner:y.createPlanner,deletePlanner:y.deletePlanner,updateTracks:y.updateTracks,reorderPlanner:y.reorderPlanner,addFuture:b.addFuture,addArbitrary:b.addArbitrary,updateItem:b.updateItem,removeItem:b.removeItem}}var J={basicRequired:`기초필수`,basicElective:`기초선택`,majorRequired:`전공필수`,majorElective:`전공선택`,thesisStudy:`졸업연구`,generalRequired:`교양필수`,humanities:`인문사회선택`,freeElective:`자유선택`};function Ne(e,t){return t===null?[...e]:e.filter(e=>e.type===t)}function Pe(e){return e.title.includes(`특강`)||e.title_en.includes(`Special Lectures`)||e.title_en.includes(`Special Topics`)}function Fe(e,t){return Pe(t)?`none`:e.future_items.some(e=>!e.is_excluded&&e.course.id===t.id)?`future`:e.taken_items.some(e=>!e.is_excluded&&e.course.id===t.id)?`taken`:`none`}function Ie(e){return e.item_type===`TAKEN`||e.item_type===`FUTURE`?e.course:null}function Le(e,t){let n=Ie(t);return n===null||t.is_excluded||Pe(n)?!1:[...e.taken_items,...e.future_items].filter(e=>!e.is_excluded&&Ie(e)?.id===n.id).length>1}var Re=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,ze=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`,Be=[[`기초필수`,`Basic Required`],[`기초선택`,`Basic Elective`],[`전공필수`,`Major Required`],[`전공선택`,`Major Elective`],[`졸업연구`,`Thesis Study(Undergraduate)`],[`교양필수`,`General Required`],[`인문사회선택`,`Humanities & Social Elective`],[`자유선택`,`Other Elective`]];function Ve({departments:e,defaultDepartmentId:t,year:n,semester:r,busy:i,onAdd:a}){let{t:o,i18n:s}=O(),[u,d]=(0,M.useState)(0),[f,p]=(0,M.useState)(3),[m,h]=(0,M.useState)(0),[g,_]=(0,M.useState)(t);(0,M.useEffect)(()=>_(t),[t]);let v=!Number.isInteger(f)||!Number.isInteger(m)||f<0||m<0;return l(Re,{children:[c(B,{children:o(`planner.arbitrary.title`)}),l(ze,{children:[l(z,{children:[o(`planner.arbitrary.department`),c(R,{value:g,onChange:e=>_(Number(e.target.value)),children:e.map(e=>c(`option`,{value:e.id,children:s.resolvedLanguage===`en`?e.name_en:e.name},e.id))})]}),l(z,{children:[o(`planner.arbitrary.type`),c(R,{value:u,onChange:e=>d(Number(e.target.value)),children:Be.map((e,t)=>c(`option`,{value:t,children:o(`planner.categories.${e[1]}`)},e[1]))})]}),l(z,{children:[o(`planner.arbitrary.credit`),c(L,{type:`number`,min:0,step:1,value:f,onChange:e=>p(Number(e.target.value))})]}),l(z,{children:[o(`planner.arbitrary.creditAU`),c(L,{type:`number`,min:0,step:1,value:m,onChange:e=>h(Number(e.target.value))})]})]}),c(F,{$primary:!0,type:`button`,disabled:i||v,onClick:()=>{let t=e.find(e=>e.id===g),i=Be[u];t!==void 0&&i!==void 0&&a({year:n,semester:r,department:t,type:i[0],typeEn:i[1],credit:f,creditAU:m})},children:o(`planner.actions.addArbitrary`)})]})}var He=d.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,Ue=d.form`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;

    ${A.mobile} {
        grid-template-columns: minmax(0, 1fr);
    }
`,We=d.div`
    display: grid;
    max-height: 220px;
    grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr));
    gap: 6px;
    overflow-y: auto;
`,Ge=d.button`
    min-width: 0;
    border: 1px solid
        ${({$selected:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Line.default};
    border-radius: 6px;
    padding: 10px;
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({$selected:e,theme:t})=>e?t.colors.Background.Button.highlight:t.colors.Background.Block.default};
    font: inherit;
    text-align: start;
    cursor: pointer;
    transition: background-color 120ms ease;

    &:hover:not(:disabled) {
        background-color: ${({$selected:e,theme:t})=>e?t.colors.Background.Button.highlightDark:t.colors.Background.Button.dark};
    }

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`,Ke=d.span`
    display: block;
    margin-bottom: 3px;
    color: ${({theme:e})=>e.colors.Text.placeholder};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,qe=d.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border: 1px solid ${({theme:e})=>e.colors.Highlight.default};
    border-radius: 999px;
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`,Je=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`,Ye=d.hr`
    width: 100%;
    margin: 4px 0;
    border: 0;
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
`,Xe=[1,2,3,4];function Ze({planner:e,departments:t,busy:n,year:r,semester:i,onYearChange:a,onSemesterChange:o,keywordInputRef:s,drillTypeKo:u=null,onDrillTypeClear:d,onAddFuture:f,onAddArbitrary:p}){let{t:m,i18n:h}=O(),[_,v]=(0,M.useState)(``),[y,b]=(0,M.useState)(null),[x,C]=(0,M.useState)(!1),w=S(`GET`,`/planner-courses`,{enabled:x,apiPrefix:`/api`,apiPath:`/courses`,select:e=>ee.parse(e)}),T=w.query.data?.find(e=>e.id===y)??null,E=T===null?`none`:Fe(e,T);return l(He,{"aria-labelledby":`planner-course-search-title`,children:[c(B,{id:`planner-course-search-title`,children:m(`planner.search.title`)}),l(Ue,{onSubmit:e=>{e.preventDefault(),_.trim()!==``&&(w.setParams({keyword:_.trim(),offset:0,limit:20}),C(!0))},children:[c(L,{"aria-label":m(`planner.search.keyword`),ref:s,value:_,onChange:e=>v(e.target.value),placeholder:m(`planner.search.placeholder`)}),c(F,{$primary:!0,type:`submit`,disabled:n,children:m(`planner.actions.search`)})]}),u!==null&&l(qe,{type:`button`,onClick:()=>d?.(),children:[m(`planner.search.drillChip`,{type:u}),` ✕`]}),c(We,{children:Ne(w.query.data??[],u).map(e=>l(Ge,{type:`button`,$selected:e.id===y,"aria-pressed":e.id===y,onClick:()=>b(e.id),children:[c(Ke,{children:e.old_code}),h.resolvedLanguage===`en`?e.title_en:e.title]},e.id))}),l(Je,{children:[l(z,{children:[m(`planner.grid.targetYear`),c(R,{value:r,onChange:e=>a(Number(e.target.value)),children:Array.from({length:e.end_year-e.start_year+1},(t,n)=>e.start_year+n).map(e=>c(`option`,{value:e,children:e},e))})]}),l(z,{children:[m(`planner.grid.targetSemester`),c(R,{value:i,onChange:e=>o(g.parse(Number(e.target.value))),children:Xe.map(e=>c(`option`,{value:e,children:m(`planner.semesters.${e}`)},e))})]})]}),E===`future`?c(I,{role:`status`,"aria-live":`polite`,children:m(`planner.search.duplicate`)}):c(F,{$primary:!0,type:`button`,disabled:n||T===null,onClick:()=>{if(T===null)return;let e=E===`taken`&&window.confirm(m(`planner.search.takenDuplicateConfirm`));E===`taken`&&!e||f(T,r,i,{excludeTakenDuplicates:e})},children:m(`planner.actions.addCourse`)}),c(Ye,{}),c(Ve,{departments:t,defaultDepartmentId:e.major_track.department.id,year:r,semester:i,busy:n,onAdd:p})]})}var Qe=[1,2,3,4];function $e({planner:e}){let{t,i18n:n}=O(),r=[];for(let t=e.start_year;t<=e.end_year;t+=1)r.push(t);let i=e=>n.resolvedLanguage===`en`?e.title_en:e.title;return l(f,{direction:`column`,gap:10,children:[c(B,{children:t(`planner.roadmap.title`)}),e.future_items.length===0&&c(k,{type:`Small`,color:`Text.placeholder`,children:t(`planner.roadmap.empty`)}),c(f,{direction:`column`,gap:6,children:r.map(n=>l(f,{direction:`row`,align:`stretch`,gap:6,"data-testid":`roadmap-year-row`,children:[c(k,{type:`SmallBold`,color:`Text.light`,children:n}),Qe.map(r=>{let a=e.future_items.filter(e=>e.year===n&&e.semester===r);return l(f,{direction:`column`,gap:4,"data-roadmap-cell":`${n}-${r}`,children:[c(k,{type:`Smaller`,color:`Text.placeholder`,children:t(`planner.semesters.${r}`)}),a.map(e=>c(k,{type:`Smaller`,children:i(e.course)},e.id))]},r)})]},n))})]})}var et=d.nav`
    display: flex;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 12px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    box-shadow: ${({theme:e})=>e.elevation.surface};

    ${A.tablet} {
        gap: 6px;
        padding: 12px;
    }
`,tt=d.div`
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;

    ${A.mobile} {
        flex-direction: column;
        align-items: stretch;
        gap: 6px;
    }
`,nt=d.div`
    display: flex;
    min-width: 0;
    flex: 1 1 auto;
    gap: 6px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x proximity;
`,rt=d.div`
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 6px;
`,it=d.button`
    min-width: 0;
    border: 1px solid
        ${({$selected:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Line.default};
    border-radius: 6px;
    padding: 10px 12px;
    color: ${({$selected:e,theme:t})=>e?t.colors.Highlight.default:t.colors.Text.default};
    background: ${({$selected:e,theme:t})=>e?t.colors.Background.Button.highlight:t.colors.Background.Button.default};
    font: inherit;
    text-align: start;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: background-color 120ms ease;

    flex: 0 0 min(180px, 42vw);
    scroll-snap-align: start;

    &:hover:not(:disabled) {
        background-color: ${({$selected:e,theme:t})=>e?t.colors.Background.Button.highlightDark:t.colors.Background.Block.darker};
    }

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`;function at({planners:e,selectedPlannerId:t,busy:n,onSelect:r,onCreate:i,onDelete:a,onReorder:o}){let{t:s}=O(),u=e.findIndex(e=>e.id===t);return l(et,{"aria-label":s(`planner.list.title`),children:[c(B,{children:s(`planner.list.title`)}),l(tt,{children:[l(nt,{children:[e.map((e,n)=>c(it,{$selected:e.id===t,"aria-pressed":e.id===t,onClick:()=>r(e.id),children:s(`planner.list.item`,{index:n+1})},e.id)),e.length===0&&c(k,{type:`Small`,color:`Text.placeholder`,children:s(`planner.list.empty`)})]}),l(rt,{children:[c(F,{$primary:!0,disabled:n,onClick:()=>void i(!1),"aria-label":s(`planner.actions.create`),children:c(D,{size:16,color:`inherit`,children:c(re,{})})}),c(F,{disabled:n||t===null,onClick:()=>void i(!0),"aria-label":s(`planner.actions.copy`),children:c(D,{size:16,color:`inherit`,children:c(ie,{})})}),c(F,{disabled:n||u<=0,onClick:()=>void o(-1),"aria-label":s(`planner.actions.moveUp`),children:c(D,{size:16,color:`inherit`,children:c(oe,{})})}),c(F,{disabled:n||u<0||u>=e.length-1,onClick:()=>void o(1),"aria-label":s(`planner.actions.moveDown`),children:c(D,{size:16,color:`inherit`,children:c(ae,{})})}),c(F,{$danger:!0,disabled:n||t===null,onClick:()=>{window.confirm(s(`planner.actions.deleteConfirm`))&&a()},"aria-label":s(`planner.actions.delete`),children:c(D,{size:16,color:`inherit`,children:c(P,{})})})]})]})]})}function ot(e){return e.item_type===`TAKEN`?e.lecture.credit:e.item_type===`FUTURE`?e.course.credit:e.credit}function st(e){return e.item_type===`TAKEN`?e.lecture.credit_au:e.item_type===`FUTURE`?e.course.credit_au:e.credit_au}function ct(e){return e.item_type===`TAKEN`?e.lecture.type_en:e.item_type===`FUTURE`?e.course.type_en:e.type_en}function lt(e){return e.item_type===`TAKEN`?e.lecture.department_code:e.item_type===`FUTURE`?e.course.department.code:e.department?.code??null}function Y(e=0){return{taken:0,planned:0,required:e}}function X(e,t,n){e[t]+=n}function ut(e){let t=e.additional_tracks.find(e=>e.type===`ADVANCED`),n={key:`PRIMARY:${e.major_track.department.code}`,type:t===void 0?`PRIMARY`:`ADVANCED`,department:e.major_track.department,required:Y(e.major_track.major_required+(t?.major_required??0)),elective:Y(e.major_track.major_elective+(t?.major_elective??0))},r={DOUBLE:0,MINOR:1,INTERDISCIPLINARY:2};return[n,...e.additional_tracks.filter(e=>e.type!==`ADVANCED`).sort((e,t)=>r[e.type]-r[t.type]).map(e=>({key:`${e.type}:${e.department?.code??e.id}`,type:e.type,department:e.department,required:Y(e.major_required),elective:Y(e.major_elective)}))]}function dt(e){let t=Math.max(0,e.required.taken-e.required.required);e.required.taken-=t,e.elective.taken+=t;let n=Math.max(0,e.required.required-e.required.taken),r=Math.max(0,e.required.planned-n);e.required.planned-=r,e.elective.planned+=r}function ft(e){let t=e.additional_tracks.some(e=>e.type===`DOUBLE`),n={credit:Y(e.general_track.total_credit),au:Y(e.general_track.total_au)},r=Y(e.general_track.basic_required),i=Y(t?e.major_track.basic_elective_doublemajor:e.general_track.basic_elective),a=Y(t?e.general_track.thesis_study_doublemajor:e.general_track.thesis_study),o={credit:Y(e.general_track.general_required_credit),au:Y(e.general_track.general_required_au)},s=Y(t?e.general_track.humanities_doublemajor:e.general_track.humanities),c=Y(),l=ut(e),u=[...e.taken_items,...e.future_items,...e.arbitrary_items];for(let e of u){if(e.is_excluded)continue;let t=e.item_type===`TAKEN`?`taken`:`planned`,u=ot(e),d=st(e);X(n.credit,t,u),X(n.au,t,d);let f=ct(e);if(f===`Basic Required`)X(r,t,u);else if(f===`Basic Elective`)X(i,t,u);else if(f===`Thesis Study(Undergraduate)`)X(a,t,u);else if(f===`Individual Study`)X(c,t,u);else if(f===`General Required`||f===`Mandatory General Courses`)X(o.credit,t,u),X(o.au,t,d);else if(f.startsWith(`Humanities & Social Elective`))X(s,t,u);else if(f===`Major Required`||f===`Major Elective`||f===`Elective(Graduate)`){let n=lt(e),r=l.find(e=>e.department?.code===n);X(r===void 0?c:f===`Major Required`?r.required:r.elective,t,u)}else X(c,t,u)}return l.forEach(dt),{total:n,basicRequired:r,basicElective:i,thesisStudy:a,generalRequired:o,humanities:s,other:c,majors:l}}var pt=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
    gap: 8px;
`,mt=d.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    cursor: ${({$selectable:e})=>e?`pointer`:`default`};

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`,ht=d.span`
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,Z=d.span`
    white-space: nowrap;
`,gt=d.strong`
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
`,_t=d.div`
    display: flex;
    height: 5px;
    margin-top: auto;
    overflow: hidden;
    border-radius: 999px;
    background: ${({theme:e})=>e.colors.Line.default};
`,vt=d.div`
    width: ${({$ratio:e})=>`${Math.min(100,Math.max(0,e*100))}%`};
    height: 100%;
    background: ${({theme:e})=>e.colors.Highlight.default};
`,yt=d.div`
    width: ${({$ratio:e})=>`${Math.min(100,Math.max(0,e*100))}%`};
    height: 100%;
    background-color: ${({theme:e})=>e.colors.Highlight.subtle};
    background-image: repeating-linear-gradient(
        45deg,
        ${({theme:e})=>e.colors.Highlight.default} 0 3px,
        transparent 3px 6px
    );
`;function bt(e){if(e.required===0)return{taken:0,planned:0};let t=Math.min(1,Math.max(0,e.taken/e.required));return{taken:t,planned:Math.min(Math.max(0,1-t),Math.max(0,e.planned/e.required))}}function Q({label:e,progress:t,unit:n,trackId:r,onSelect:i}){let{t:a}=O(),o=t.taken+t.planned,s=bt(t);return l(mt,{as:i===void 0?`div`:`button`,...i===void 0?{}:{type:`button`,onClick:i},$selectable:i!==void 0,children:[c(ht,{children:e}),l(gt,{children:[o,` / `,t.required,` `,n]}),c(ht,{children:a(`planner.summary.breakdown`,{taken:t.taken,planned:t.planned})}),l(_t,{"aria-hidden":`true`,"data-track":r,children:[c(vt,{"data-segment":`taken`,"data-ratio":s.taken,$ratio:s.taken}),t.planned>0&&c(yt,{"data-segment":`planned`,"data-ratio":s.planned,$ratio:s.planned})]})]})}function xt({planner:e,onSelectCategory:t}){let{t:n,i18n:r}=O(),i=ft(e),a=n(`planner.summary.units.credit`),o=n(`planner.summary.units.au`),s=[[`totalCredit`,i.total.credit,a],[`totalAu`,i.total.au,o],[`basicRequired`,i.basicRequired,a],[`basicElective`,i.basicElective,a],[`thesisStudy`,i.thesisStudy,a],[`generalRequiredCredit`,i.generalRequired.credit,a],[`generalRequiredAu`,i.generalRequired.au,o],[`humanities`,i.humanities,a],[`other`,i.other,a]],d={basicRequired:J.basicRequired,basicElective:J.basicElective,thesisStudy:J.thesisStudy,generalRequiredCredit:J.generalRequired,generalRequiredAu:J.generalRequired,humanities:J.humanities};return l(`section`,{"aria-labelledby":`planner-summary-title`,children:[c(B,{id:`planner-summary-title`,children:n(`planner.summary.title`)}),c(I,{role:`note`,children:n(`planner.summary.disclaimer`)}),l(pt,{children:[s.map(([e,r,i])=>{let a=d[e];return c(Q,{label:n(`planner.summary.categories.${e}`),progress:r,unit:i,trackId:e,onSelect:t!==void 0&&a!==void 0?()=>t(a):void 0},e)}),i.majors.flatMap(e=>{let i=e.department?r.resolvedLanguage===`en`?e.department.name_en:e.department.name:null,o=n(`planner.trackTypes.${e.type}`),s=e=>l(u,{children:[i!==null&&l(u,{children:[c(Z,{children:i}),` · `]}),c(Z,{children:o}),` · `,c(Z,{children:e})]});return[c(Q,{label:s(n(`planner.summary.categories.majorRequired`)),progress:e.required,unit:a,trackId:`${e.key}:required`,onSelect:t===void 0?void 0:()=>t(J.majorRequired)},`${e.key}:required`),c(Q,{label:s(n(`planner.summary.categories.majorElective`)),progress:e.elective,unit:a,trackId:`${e.key}:elective`,onSelect:t===void 0?void 0:()=>t(J.majorElective)},`${e.key}:elective`)]})]})]})}function St(e){let t=e.map(e=>ft(e));if(t.length===0)return[];let n=(e,n)=>{let r=t.map(e=>n(e));return{key:e,taken:r.map(e=>e.taken),planned:r.map(e=>e.planned),required:r[0]?.required??0}},r=e=>n(`major${e===`required`?`Required`:`Elective`}`,t=>{let n=t.majors[0];if(n===void 0)return{taken:0,planned:0,required:0};let r=n[e];return{taken:r.taken,planned:r.planned,required:r.required}});return[n(`totalCredit`,e=>({taken:e.total.credit.taken,planned:e.total.credit.planned,required:e.total.credit.required})),n(`basicRequired`,e=>e.basicRequired),n(`thesisStudy`,e=>e.thesisStudy),n(`generalRequired`,e=>({taken:e.generalRequired.credit.taken,planned:e.generalRequired.credit.planned,required:e.generalRequired.credit.required})),n(`humanities`,e=>e.humanities),r(`required`),r(`elective`)]}var Ct=d.table`
    width: 100%;
    border-collapse: collapse;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,wt=d.td`
    padding: 6px 8px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};
    color: ${({theme:e})=>e.colors.Text.default};
`,Tt=d.th`
    padding: 6px 8px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.block};
    color: ${({theme:e})=>e.colors.Text.light};
    font-weight: ${({theme:e})=>e.fonts.NormalBold.fontWeight};
    text-align: start;
`;function Et({planners:e,selectedId:t}){let{t:n}=O(),r=e.find(e=>e.id===t);if(r===void 0)return null;let i=[r,...e.filter(e=>e.id!==t)],a=St(i);return l(u,{children:[c(B,{children:n(`planner.comparison.title`)}),l(Ct,{children:[c(`thead`,{children:l(`tr`,{children:[c(Tt,{children:n(`planner.comparison.category`)}),i.map((e,t)=>c(Tt,{children:n(`planner.list.item`,{index:t+1})},e.id))]})}),c(`tbody`,{children:a.map(e=>l(`tr`,{children:[c(wt,{children:n(`planner.summary.categories.${e.key}`)}),e.taken.map((t,n)=>l(wt,{children:[t,` + `,e.planned[n],` / `,e.required]},n))]},e.key))})]})]})}var Dt=d.article`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    opacity: ${({$excluded:e})=>e?.55:1};
`,Ot=d.strong`
    overflow: hidden;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,kt=d.span`
    color: ${({theme:e})=>e.colors.Text.placeholder};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,At=d.span`
    display: inline-flex;
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    border-radius: 50%;
    color: ${({theme:e})=>e.colors.Text.onHighlight.default};
    background: ${({theme:e})=>e.colors.Highlight.dark};
    font-weight: 700;
`,jt=d.div`
    display: flex;
    min-width: 0;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
`,Mt=d(R)`
    width: auto;
    min-width: 96px;
    flex: 1 1 96px;
`,Nt=[1,2,3,4];function Pt(e){return e.item_type===`TAKEN`?{credit:e.lecture.credit,creditAU:e.lecture.credit_au}:e.item_type===`FUTURE`?{credit:e.course.credit,creditAU:e.course.credit_au}:{credit:e.credit,creditAU:e.credit_au}}function Ft({planner:e,item:t,title:n,code:r,busy:i,onUpdate:a,onRemove:o}){let{t:s}=O(),d=Pt(t);return l(Dt,{$excluded:t.is_excluded,children:[c(Ot,{title:n,children:n}),l(kt,{children:[r,` · `,d.credit,s(`planner.items.credits`),d.creditAU>0&&l(u,{children:[` · `,d.creditAU,` `,s(`planner.items.au`)]}),Le(e,t)&&c(At,{"aria-label":s(`planner.items.duplicate`),title:s(`planner.items.duplicate`),children:`!`})]}),l(jt,{children:[c(F,{type:`button`,disabled:i,onClick:()=>void a(t,{isExcluded:!t.is_excluded}),children:s(t.is_excluded?`planner.actions.include`:`planner.actions.exclude`)}),t.item_type!==`TAKEN`&&c(Mt,{"aria-label":s(`planner.actions.changeSemester`),value:t.semester,disabled:i,onChange:e=>void a(t,{semester:g.parse(Number(e.target.value))}),children:Nt.map(e=>c(`option`,{value:e,children:s(`planner.semesters.${e}`)},e))}),t.item_type!==`TAKEN`&&c(F,{$danger:!0,type:`button`,disabled:i,"aria-label":s(`planner.actions.removeItem`),onClick:()=>{window.confirm(s(`planner.actions.removeItemConfirm`))&&o(t)},children:c(D,{size:14,color:`inherit`,children:c(P,{})})})]})]})}var It=d.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,Lt=d.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,Rt=d.h3`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.NormalBold.fontSize}px;
`,zt=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(210px, 100%), 1fr));
    gap: 8px;

    ${A.tablet} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${A.mobile} {
        grid-template-columns: minmax(0, 1fr);
    }
`,Bt=d.div`
    display: flex;
    min-width: 0;
    align-self: start;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
`,Vt=d.h4`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.SmallBold.fontSize}px;
`,Ht=d.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 28px;
    padding: 3px 10px;
    border: 1px dashed ${({theme:e})=>e.colors.Notice.border};
    border-radius: 999px;
    color: ${({theme:e})=>e.colors.Notice.text};
    background: ${({theme:e})=>e.colors.Notice.background};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 120ms ease;

    &:hover:not(:disabled) {
        filter: brightness(0.97);
    }

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({theme:e})=>e.colors.Text.disable};
        background: ${({theme:e})=>e.colors.Background.Input.disabled};
        border-color: ${({theme:e})=>e.colors.Line.block};
    }

    ${A.mobile} {
        min-height: 36px;
    }
`,Ut=[1,2,3,4];function Wt(e){return e.item_type===`TAKEN`?e.lecture.year:e.year}function Gt(e){return e.item_type===`TAKEN`?e.lecture.semester:e.semester}function Kt({planner:e,busy:t,onUpdate:n,onRemove:r,onRequestAdd:i}){let{t:a,i18n:o}=O(),s=[...e.taken_items,...e.future_items,...e.arbitrary_items],u=Array.from({length:e.end_year-e.start_year+1},(t,n)=>e.start_year+n),d=e=>e.item_type===`ARBITRARY`?o.resolvedLanguage===`en`?e.type_en:e.type:o.resolvedLanguage===`en`?e.course.title_en:e.course.title,f=e=>e.item_type===`ARBITRARY`?a(`planner.items.arbitrary`):e.course.old_code;return l(`section`,{"aria-labelledby":`semester-grid-title`,children:[c(B,{id:`semester-grid-title`,children:a(`planner.grid.title`)}),c(It,{children:u.map(o=>l(Lt,{children:[c(Rt,{children:a(`planner.grid.year`,{year:o})}),c(zt,{children:Ut.map(u=>{let p=s.filter(e=>Wt(e)===o&&Gt(e)===u);return l(Bt,{children:[c(Vt,{children:a(`planner.semesters.${u}`)}),p.map(i=>c(Ft,{planner:e,item:i,title:d(i),code:f(i),busy:t,onUpdate:n,onRemove:r},i.id)),p.length===0&&l(Ht,{type:`button`,"data-slot-chip":`true`,disabled:t,onClick:()=>i(o,u),children:[`+`,` `,a(`planner.grid.addHere`,{year:o,semester:a(`planner.semesters.${u}`)})]})]},u)})})]},o))})]})}function qt({planner:e,busy:t,onConfirm:n}){let{t:r,i18n:i}=O(),[a,o]=(0,M.useState)(new Set),[s,u]=(0,M.useState)(!1);(0,M.useEffect)(()=>{o(new Set)},[e.id]);let d=e.future_items.filter(e=>ue({year:e.year,semester:e.semester},new Date));if(d.length===0)return null;let p=d.filter(e=>!a.has(e.id)),m=t||s||p.length===0,h=e=>{o(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},g=()=>{u(!0),n(p).finally(()=>u(!1))},_=e=>i.resolvedLanguage===`en`?e.title_en:e.title;return l(f,{direction:`column`,gap:8,children:[c(k,{type:`NormalBold`,color:`Text.default`,children:r(`planner.wizard.title`)}),c(k,{type:`Small`,color:`Text.light`,children:r(`planner.wizard.description`,{count:d.length})}),c(f,{direction:`column`,gap:4,children:d.map(e=>l(`label`,{children:[c(`input`,{type:`checkbox`,checked:!a.has(e.id),onChange:()=>h(e.id)}),` `,r(`planner.wizard.item`,{year:e.year,semester:r(`planner.semesters.${e.semester}`),course:_(e.course)})]},e.id))}),c(f,{direction:`row`,justify:`flex-end`,gap:8,children:c(F,{type:`button`,$primary:!0,disabled:m,onClick:g,children:r(`planner.wizard.confirm`)})})]})}function Jt({planner:e,tracks:t,busy:n,onSave:r}){let{t:i,i18n:a}=O(),o=new Date().getFullYear(),s=e.end_year-e.start_year+1,[u,d]=(0,M.useState)(e.start_year),[p,m]=(0,M.useState)(K.includes(s)?s:4),[h,g]=(0,M.useState)(e.general_track.id),[_,v]=(0,M.useState)(e.major_track.id),[y,b]=(0,M.useState)(e.additional_tracks.map(e=>e.id)),[x,S]=(0,M.useState)(``);(0,M.useEffect)(()=>{let t=e.end_year-e.start_year+1;d(e.start_year),m(K.includes(t)?t:4),g(e.general_track.id),v(e.major_track.id),b(e.additional_tracks.map(e=>e.id))},[e]);let ee=(0,M.useMemo)(()=>{let t=we(o);return e.start_year>=2e3&&e.start_year<=o?[...new Set([e.start_year,...t])].sort((e,t)=>e-t):t},[o,e.start_year]),C=t.general.filter(e=>e.end_year>=2020||e.id===h),w=t.major.filter(e=>e.end_year>=2020||e.id===_),T=(0,M.useMemo)(()=>{let e=t.additional.filter(e=>e.end_year>=2020||y.includes(e.id)),n=x.trim().toLowerCase();return n===``?e:e.filter(e=>[e.department?.name??``,e.department?.name_en??``,e.type].join(` `).toLowerCase().includes(n))},[t.additional,y,x]),E=e=>a.resolvedLanguage===`en`?e.name_en:e.name;return l(se,{onSubmit:n=>{n.preventDefault();let a=t.general.find(e=>e.id===h),o=t.major.find(e=>e.id===_);if(a===void 0||o===void 0)return;let s=t.additional.filter(e=>y.includes(e.id)),c=Oe(s,o);if(c!==null){window.alert(i(`planner.settings.errors.${c}`));return}let l={startYear:u,endYear:u+p-1,generalTrack:a,majorTrack:o,additionalTracks:s},d=ke(e,l.startYear,l.endYear);if(d>0&&!window.confirm(i(`planner.settings.confirmRange`,{startYear:l.startYear,endYear:l.endYear,count:d})))return;let f=Ae(l);f>0&&!window.confirm(i(`planner.settings.confirmIncompatible`,{startYear:l.startYear,count:f}))||r(l)},children:[c(B,{children:i(`planner.settings.title`)}),l(ce,{children:[l(z,{children:[i(`planner.settings.startYear`),c(R,{value:u,onChange:e=>d(Number(e.target.value)),children:ee.map(e=>c(`option`,{value:e,children:e},e))})]}),l(z,{children:[i(`planner.settings.duration`),c(R,{value:p,onChange:e=>m(Number(e.target.value)),children:K.map(e=>c(`option`,{value:e,children:i(`planner.settings.durationYears`,{count:e})},e))})]}),l(z,{children:[i(`planner.settings.generalTrack`),c(R,{value:h,onChange:e=>g(Number(e.target.value)),children:C.map(e=>c(`option`,{value:e.id,disabled:!q(e,u),children:e.is_foreign?i(`planner.settings.foreign`):i(`planner.settings.domestic`)},e.id))})]}),l(z,{children:[i(`planner.settings.majorTrack`),c(R,{value:_,onChange:e=>v(Number(e.target.value)),children:w.map(e=>c(`option`,{value:e.id,disabled:!q(e,u),children:E(e.department)},e.id))})]})]}),l(z,{children:[i(`planner.settings.additionalTracks`),c(L,{type:`text`,value:x,onChange:e=>S(e.target.value),"aria-label":i(`planner.settings.additionalFilter`),placeholder:i(`planner.settings.additionalFilterPlaceholder`)}),c(R,{multiple:!0,size:6,value:y.map(String),onChange:e=>b(Array.from(e.target.selectedOptions,e=>Number(e.value))),children:T.map(n=>l(`option`,{value:n.id,disabled:De(n,u,t.major.find(e=>e.id===_)??e.major_track),children:[i(`planner.trackTypes.${n.type}`),n.department===null?``:` · ${E(n.department)}`]},n.id))})]}),c(f,{direction:`row`,justify:`flex-end`,gap:8,children:c(F,{$primary:!0,type:`submit`,disabled:n,children:i(`planner.actions.save`)})})]})}var Yt=`otlplus.tracks.signature`;function Xt(e){let t=e=>Array.isArray(e)?`[${e.map(t).join(`,`)}]`:typeof e==`object`&&e?`{${Object.entries(e).sort(([e],[t])=>e<t?-1:+(e>t)).map(([e,n])=>`${JSON.stringify(e)}:${t(n)}`).join(`,`)}}`:JSON.stringify(e)??`null`;return Zt(t(e))}function Zt(e){let t=5381;for(let n=0;n<e.length;n+=1)t=(t<<5)+t+e.charCodeAt(n)|0;return`h${(t>>>0).toString(16)}`}function Qt(e,t,n=Yt){let r=Xt(e),i=t.getItem(n);return i===null||i===r?{show:!1}:{show:!0,current:r}}function $t(e,t,n=Yt){t.setItem(n,e)}var en=d.main`
    display: flex;
    min-width: 0;
    min-height: 0;
    flex: 1 0 auto;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px 20px;

    ${A.tablet} {
        padding: 0 8px 12px;
    }
`,$=d(j)`
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    align-items: stretch;
    padding: 16px;

    ${A.mobile} {
        padding: 12px;
    }
`,tn=d.div`
    display: grid;
    min-width: 0;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 340px);
    align-items: start;
    gap: 12px;

    ${A.tablet} {
        grid-template-columns: minmax(0, 1fr);
    }
`,nn=d.div`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
`,rn=d.aside`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
`,an=d(j)`
    min-height: 240px;
    padding: 24px;
`,on=s(function(){return c(te,{flag:`planner-enabled`,children:c(sn,{})})});function sn(){let{t:e}=O(),t=Me(),n=t.selectedPlanner?.id??null,r=(0,M.useRef)(t.planners);r.current=t.planners;let i=(0,M.useRef)(null),[a,o]=(0,M.useState)(!1),[s,u]=(0,M.useState)(null);(0,M.useEffect)(()=>{let e=t.tracks;if(e===void 0)return;let n=Qt(e,window.localStorage);o(n.show)},[t.tracks]);let d=()=>{let e=t.tracks;e!==void 0&&$t(Xt(e),window.localStorage),o(!1)},[p,h]=(0,M.useState)({year:new Date().getFullYear(),semester:1});(0,M.useEffect)(()=>{m(`Page View`,{page:`Planner`})},[]),(0,M.useEffect)(()=>{if(n===null)return;let e=r.current.find(e=>e.id===n);e!==void 0&&h({year:e.start_year,semester:1})},[n]);let g=(0,M.useMemo)(()=>{let e=t.selectedPlanner;return e!==null&&e.future_items.some(e=>ue({year:e.year,semester:e.semester},new Date))},[t.selectedPlanner]),_=async e=>{for(let n of e)await t.addArbitrary({year:n.year,semester:n.semester,department:n.course.department,type:n.course.type,typeEn:n.course.type_en,credit:n.course.credit,creditAU:n.course.credit_au}),await t.removeItem(n)},v=e=>{u(e),requestAnimationFrame(()=>{let e=i.current;e?.scrollIntoView({behavior:`smooth`,block:`center`}),e?.focus({preventScroll:!0})})},y=(e,t)=>{h({year:e,semester:t}),requestAnimationFrame(()=>{let e=i.current;e?.scrollIntoView({behavior:`smooth`,block:`center`}),e?.focus({preventScroll:!0})})},b=(0,M.useMemo)(()=>{let e=[...t.tracks?.major.map(e=>e.department)??[],...t.tracks?.additional.flatMap(e=>e.department===null?[]:[e.department])??[]];return e.filter((t,n)=>e.findIndex(e=>e.id===t.id)===n)},[t.tracks]);return t.isLoading?c(en,{children:l(an,{direction:`column`,align:`center`,justify:`center`,gap:12,children:[c(ne,{}),c(k,{type:`Normal`,color:`Text.placeholder`,children:e(`planner.status.loading`)})]})}):l(en,{children:[c(at,{planners:t.planners,selectedPlannerId:t.selectedPlannerId,busy:t.isBusy,onSelect:t.setSelectedPlannerId,onCreate:t.createPlanner,onDelete:t.deletePlanner,onReorder:t.reorderPlanner}),a&&l(I,{role:`status`,children:[e(`planner.notice.tracksUpdated`),c(f,{direction:`row`,justify:`flex-end`,gap:6,children:c(F,{type:`button`,onClick:d,children:e(`planner.notice.dismiss`)})})]}),t.error!==null&&t.error!==void 0&&l($,{direction:`column`,gap:6,children:[c(k,{type:`NormalBold`,color:`Highlight.dark`,children:e(`planner.status.error`)}),c(k,{type:`Small`,color:`Text.light`,children:t.error.message})]}),t.selectedPlanner===null||t.tracks===void 0?l(an,{direction:`column`,align:`center`,justify:`center`,gap:12,children:[c(k,{type:`BiggerBold`,color:`Text.default`,children:e(`planner.empty.title`)}),c(k,{type:`Normal`,color:`Text.placeholder`,children:e(`planner.empty.description`)}),c(F,{$primary:!0,disabled:t.isBusy||t.tracks===void 0,onClick:()=>void t.createPlanner(!1),children:e(`planner.actions.create`)})]}):l(tn,{children:[l(nn,{children:[g&&c($,{direction:`column`,gap:12,children:c(qt,{planner:t.selectedPlanner,busy:t.isBusy,onConfirm:_})}),c($,{direction:`column`,gap:12,children:c(Kt,{planner:t.selectedPlanner,busy:t.isBusy,onUpdate:t.updateItem,onRemove:t.removeItem,onRequestAdd:y})}),c($,{direction:`column`,gap:12,children:c($e,{planner:t.selectedPlanner})}),c($,{direction:`column`,gap:12,children:c(Ze,{planner:t.selectedPlanner,departments:b,busy:t.isBusy,drillTypeKo:s,onDrillTypeClear:()=>u(null),year:p.year,semester:p.semester,onYearChange:e=>h(t=>({...t,year:e})),onSemesterChange:e=>h(t=>({...t,semester:e})),keywordInputRef:i,onAddFuture:t.addFuture,onAddArbitrary:t.addArbitrary})})]}),l(rn,{"aria-label":e(`planner.settings.title`),children:[c($,{direction:`column`,gap:12,children:c(Jt,{planner:t.selectedPlanner,tracks:t.tracks,busy:t.isBusy,onSave:t.updateTracks})}),c($,{direction:`column`,gap:12,children:c(xt,{planner:t.selectedPlanner,onSelectCategory:v})}),t.planners.length>=2&&c($,{direction:`column`,gap:12,children:c(Et,{planners:t.planners,selectedId:t.selectedPlanner.id})})]})]})]})}export{on as default};
//# sourceMappingURL=planner-CSeOhzY0.js.map