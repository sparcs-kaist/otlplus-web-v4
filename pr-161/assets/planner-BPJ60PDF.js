(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`0b112c2c1e56c9cb7bdf2fae910cb5eef5f80336`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`dd3f73ac-f1e6-4237-9a26-bd052533ecd1`,e._sentryDebugIdIdentifier=`sentry-dbid-dd3f73ac-f1e6-4237-9a26-bd052533ecd1`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-D1JyZVcN.js";import{_ as r,g as i,v as a,y as o}from"./sentryEventFilter-gqU95Eza.js";import{A as s}from"./chunk-62JRHF6Z-D-X7_mAA.js";import{n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-t8GgXytm.js";import{n as d,t as f}from"./FlexWrapper-1DXX7QAs.js";import{i as p,y as m}from"./axios-HFZuuXht.js";import{C as h,S as g,a as _,b as v,i as y,o as b,s as x,t as S,u as C,v as w,x as T,y as ee}from"./useAPI-Brpabbqh.js";import{r as te,t as E}from"./Icon-tsOqNjY3.js";import{t as D}from"./useTranslation-BGhmXDcs.js";import{t as O}from"./Typography-DzskINh7.js";import{t as k}from"./media-BBiIPuL1.js";import{t as ne}from"./featureFlags-CHMtar8f.js";import{t as re}from"./Widget-BskY7hju.js";import{t as ie}from"./LoadingCircle-BPO1gQ7Q.js";import{t as ae}from"./Add-Bc14s2xZ.js";import{t as oe}from"./ContentCopy-czTPfE2W.js";import{t as se}from"./KeyboardArrowDown-BnVKpGJU.js";var A=t(e(),1),j=t(n(),1),M=te((0,j.jsx)(`path`,{d:`M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z`}),`DeleteOutlined`),ce=te((0,j.jsx)(`path`,{d:`M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z`}),`KeyboardArrowUp`),N=d.button`
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

    ${k.mobile} {
        min-width: 44px;
        min-height: 44px;
    }
`,P=d.div`
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
`,F=d.input`
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
`,I=d.select`
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
`,L=d.label`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,le=d.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,ue=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
    gap: 10px;
`,R=d.h2`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    line-height: ${({theme:e})=>e.fonts.Big.lineHeight}px;
`;function z(e){let t=0;for(let n of e){t=Math.min(t,n.id);for(let e of[...n.taken_items,...n.future_items,...n.arbitrary_items])t=Math.min(t,e.id)}return t-1}function de(e=[]){let t=z(e);return{next:()=>{let e=t;return--t,e},reserve:e=>{t=Math.min(t,z(e))}}}function fe(e,t,n){let r=e=>({...e,id:t()});return{id:t(),start_year:e.startYear,end_year:e.endYear,general_track:e.generalTrack,major_track:e.majorTrack,additional_tracks:[...e.additionalTracks],taken_items:n?.taken_items.map(r)??[],future_items:n?.future_items.map(r)??[],arbitrary_items:n?.arbitrary_items.map(r)??[],arrange_order:0}}function B(e,t,n){return e.map(e=>e.id===t?n(e):e)}function pe(e,t,n){let r=[...e].sort((e,t)=>e.arrange_order-t.arrange_order),i=r.findIndex(e=>e.id===t),a=i+n;if(i<0||a<0||a>=r.length)return r;let o=r[i],s=r[a];return o===void 0||s===void 0?r:(r[i]={...s,arrange_order:i},r[a]={...o,arrange_order:a},r)}function me(e,t,n){let r=e=>{if(e.id!==t.id)return e;let r=n.isExcluded??e.is_excluded;return e.item_type===`TAKEN`||n.semester===void 0?{...e,is_excluded:r}:{...e,semester:n.semester,is_excluded:r}};return{...e,taken_items:e.taken_items.map(r),future_items:e.future_items.map(r),arbitrary_items:e.arbitrary_items.map(r)}}function he(e,t){return t.item_type===`TAKEN`?e:{...e,future_items:e.future_items.filter(e=>e.id!==t.id),arbitrary_items:e.arbitrary_items.filter(e=>e.id!==t.id)}}var ge=`otlplus.planner.local`,_e=a({version:i(1),planners:T}).strict(),V=a({version:r().int().nonnegative()}).passthrough();function H(e){try{return e.localStorage}catch{return null}}function U(e,t){try{return e.removeItem(t),!0}catch{return!1}}function ve(e){if(e===null)return!1;try{let t=V.safeParse(JSON.parse(e));return t.success&&t.data.version>1}catch{return!1}}function W(e,t,n){let r=T.safeParse(n);if(!r.success)return!1;try{return!ve(e.getItem(t))&&(e.setItem(t,JSON.stringify({version:1,planners:r.data})),!0)}catch{return!1}}function ye(e,t){let n;try{n=e.getItem(t)}catch{return{status:`unavailable`}}if(n===null)return{status:`loaded`,planners:[]};let r;try{r=JSON.parse(n)}catch{return U(e,t)?{status:`loaded`,planners:[]}:{status:`unavailable`}}let i=_e.safeParse(r);if(i.success)return{status:`loaded`,planners:i.data.planners};let a=V.safeParse(r);if(a.success&&a.data.version>1)return{status:`unsupported-version`};let o=T.safeParse(r);return o.success?(W(e,t,o.data),{status:`loaded`,planners:o.data}):U(e,t)?{status:`loaded`,planners:[]}:{status:`unavailable`}}function be(e){return{id:e.id,old_code:e.old_code,old_old_code:e.old_old_code,department:e.department,type:e.type,type_en:e.type_en,title:e.title,title_en:e.title_en,summary:e.summary,review_total_weight:e.review_total_weight,credit:e.credit,credit_au:e.credit_au,num_classes:e.num_classes,num_labs:e.num_labs}}var xe=a({year:r().int(),semester:g,department:v,type:o().min(1),typeEn:o().min(1),credit:r().int().nonnegative(),creditAU:r().int().nonnegative()}).strict();function Se(e){let t=`/users/${e.userId}/planners/${e.selectedPlannerId??0}`,n=S(`POST`,`${t}/add-future-item`,{apiPrefix:`/api`}).mutation,r=S(`POST`,`${t}/add-arbitrary-item`,{apiPrefix:`/api`}).mutation,i=S(`POST`,`${t}/remove-item`,{apiPrefix:`/api`}).mutation,a=S(`POST`,`${t}/update-item`,{apiPrefix:`/api`}).mutation,o=(0,A.useCallback)(async(t,r,i,o)=>{if(e.selectedPlanner===null)return;let s=e.selectedPlanner.id;if(e.isAuthenticated){if(y.parse(await n.mutateAsync({course:t.id,year:r,semester:i})),o?.excludeTakenDuplicates){let n=e.selectedPlanner.taken_items.filter(e=>!e.is_excluded&&e.course.id===t.id);await Promise.all(n.map(e=>a.mutateAsync({item:e.id,item_type:e.item_type,is_excluded:!0})))}await e.refresh();return}let c=e.allocateLocalId();e.setLocalPlanners(e=>B(e,s,e=>({...e,taken_items:o?.excludeTakenDuplicates?e.taken_items.map(e=>!e.is_excluded&&e.course.id===t.id?{...e,is_excluded:!0}:e):e.taken_items,future_items:[...e.future_items,{id:c,item_type:`FUTURE`,is_excluded:!1,year:r,semester:i,course:be(t)}]})))},[n,e,a]),s=(0,A.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=xe.safeParse(t);if(!n.success)return;let i=n.data,a=e.selectedPlanner.id;if(i.year<e.selectedPlanner.start_year||i.year>e.selectedPlanner.end_year)return;if(e.isAuthenticated){w.parse(await r.mutateAsync({year:i.year,semester:i.semester,department:i.department.id,type:i.type,type_en:i.typeEn,credit:i.credit,credit_au:i.creditAU})),await e.refresh();return}let o=e.allocateLocalId();e.setLocalPlanners(e=>B(e,a,e=>({...e,arbitrary_items:[...e.arbitrary_items,{id:o,item_type:`ARBITRARY`,is_excluded:!1,year:i.year,semester:i.semester,department:i.department,type:i.type,type_en:i.typeEn,credit:i.credit,credit_au:i.creditAU}]})))},[r,e]),c=(0,A.useCallback)(async(t,n)=>{if(e.selectedPlanner===null)return;let r=e.selectedPlanner.id;if(e.isAuthenticated){b.parse(await a.mutateAsync({item:t.id,item_type:t.item_type,semester:n.semester,is_excluded:n.isExcluded})),await e.refresh();return}e.setLocalPlanners(e=>B(e,r,e=>me(e,t,n)))},[e,a]),l=(0,A.useCallback)(async t=>{if(e.selectedPlanner===null||t.item_type===`TAKEN`)return;let n=e.selectedPlanner.id;if(e.isAuthenticated){_.parse(await i.mutateAsync({item:t.id,item_type:t.item_type})),await e.refresh();return}e.setLocalPlanners(e=>B(e,n,e=>he(e,t)))},[e,i]),u=[n,r,i,a];return{addFuture:o,addArbitrary:s,updateItem:c,removeItem:l,isBusy:u.some(e=>e.isPending),error:u.find(e=>e.error)?.error}}var G=[4,5,6,7,8];function K(e,t){return e.start_year<=t&&t<=e.end_year}function Ce(e){return Array.from({length:Math.max(0,e-2015+1)},(e,t)=>t+2015)}function we(e,t){if(e===void 0)return null;let n=Number(String(e).slice(0,4));return Number.isInteger(n)&&n>=2e3&&n<=t?n:null}function Te(e,t,n){if(e===void 0)return null;let r=we(t?.studentNumber,n)??n,i=e.general.filter(e=>K(e,r)),a=i.find(e=>!e.is_foreign)??i[0],o=e.major.filter(e=>K(e,r)),s=new Set(t?.majorDepartments?.map(e=>e.code)),c=o.find(e=>s.has(e.department.code))??o[0];return a===void 0||c===void 0?null:{startYear:r,endYear:r+3,generalTrack:a,majorTrack:c,additionalTracks:[]}}function Ee(e,t,n){if(!K(e,t))return!0;let r=e.department?.code;switch(e.type){case`DOUBLE`:case`MINOR`:return r===n.department.code;case`ADVANCED`:return r!==n.department.code;case`INTERDISCIPLINARY`:return!1}}function De(e,t){let n=new Map,r=0,i=0;for(let a of e){let e=a.department?.code;if((a.type===`DOUBLE`||a.type===`MINOR`)&&e!==void 0){if(e===t.department.code)return`sameAsPrimary`;let r=(n.get(e)??0)+1;if(n.set(e,r),r>1)return`duplicateDepartment`}if(a.type===`ADVANCED`){if(r+=1,e!==t.department.code)return`advancedDepartment`;if(r>1)return`multipleAdvanced`}if(a.type===`INTERDISCIPLINARY`&&(i+=1,i>1))return`multipleInterdisciplinary`}return null}function Oe(e,t,n){let r=e=>e<t||e>n;return e.taken_items.filter(e=>r(e.lecture.year)).length+e.future_items.filter(e=>r(e.year)).length+e.arbitrary_items.filter(e=>r(e.year)).length}function ke(e){return[e.generalTrack,e.majorTrack,...e.additionalTracks].filter(t=>!K(t,e.startYear)).length}function Ae(e){let t=S(`POST`,`/users/${e.userId}/planners`,{apiPrefix:`/api`}).mutation,n=`/users/${e.userId}/planners/${e.selectedPlannerId??0}`,r=S(`PATCH`,n,{apiPrefix:`/api`}).mutation,i=S(`DELETE`,n,{apiPrefix:`/api`}).mutation,a=S(`POST`,`${n}/reorder`,{apiPrefix:`/api`}).mutation,o=(0,A.useCallback)(()=>Te(e.tracks,e.user,new Date().getFullYear()),[e.tracks,e.user]),s=(0,A.useCallback)(async n=>{let r=n?e.selectedPlanner:null,i=r?{startYear:r.start_year,endYear:r.end_year,generalTrack:r.general_track,majorTrack:r.major_track,additionalTracks:r.additional_tracks}:o();if(i===null)return;if(!e.isAuthenticated){let t=fe(i,e.allocateLocalId,r??void 0);e.setLocalPlanners(e=>[...e,{...t,arrange_order:e.length}]),e.setSelectedPlannerId(t.id);return}let a=_.parse(await t.mutateAsync({start_year:i.startYear,end_year:i.endYear,general_track:i.generalTrack.id,major_track:i.majorTrack.id,additional_tracks:i.additionalTracks.map(e=>e.id),should_update_taken_semesters:r===null||void 0,taken_items_to_copy:r?.taken_items.map(e=>e.id)??[],future_items_to_copy:r?.future_items.map(e=>e.id)??[],arbitrary_items_to_copy:r?.arbitrary_items.map(e=>e.id)??[]}));await e.refresh(),e.setSelectedPlannerId(a.id)},[t,o,e]),c=(0,A.useCallback)(async()=>{if(e.selectedPlanner===null)return;let t=e.selectedPlanner.id;e.isAuthenticated?(await i.mutateAsync({}),await e.refresh()):e.setLocalPlanners(e=>e.filter(e=>e.id!==t)),e.setSelectedPlannerId(null)},[i,e]),l=(0,A.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=e.selectedPlanner.id;if(e.isAuthenticated){let n=_.parse(await r.mutateAsync({start_year:t.startYear,end_year:t.endYear,general_track:t.generalTrack.id,major_track:t.majorTrack.id,additional_tracks:t.additionalTracks.map(e=>e.id),should_update_taken_semesters:!0}));e.setSelectedPlannerId(n.id),await e.refresh();return}e.setLocalPlanners(e=>B(e,n,e=>({...e,start_year:t.startYear,end_year:t.endYear,general_track:t.generalTrack,major_track:t.majorTrack,additional_tracks:[...t.additionalTracks],taken_items:e.taken_items.filter(e=>e.lecture.year>=t.startYear&&e.lecture.year<=t.endYear),future_items:e.future_items.filter(e=>e.year>=t.startYear&&e.year<=t.endYear),arbitrary_items:e.arbitrary_items.filter(e=>e.year>=t.startYear&&e.year<=t.endYear)})))},[e,r]),u=(0,A.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=e.selectedPlanner.id,r=e.selectedPlanner.arrange_order+t;if(!(r<0||r>=e.planners.length)){if(e.isAuthenticated){ee.parse(await a.mutateAsync({arrange_order:r})),await e.refresh();return}e.setLocalPlanners(e=>pe(e,n,t))}},[e,a]),d=[t,r,i,a];return{createPlanner:s,deletePlanner:c,updateTracks:l,reorderPlanner:u,isBusy:d.some(e=>e.isPending),error:d.find(e=>e.error)?.error}}function je(){let{status:e,user:t}=p(),n=e===`success`&&t!==null,r=t?.id??0,[i,a]=(0,A.useState)([]),[o,s]=(0,A.useState)(`hydrating`),[c,l]=(0,A.useState)(null),u=(0,A.useRef)(de()),d=S(`GET`,`/tracks`,{select:e=>h.parse(e),apiPrefix:`/api`}).query,f=S(`GET`,`/users/${r}/planners`,{enabled:n,select:e=>x.parse(e),apiPrefix:`/api`}).query;(0,A.useEffect)(()=>{let e=H(window);if(e===null){s(`unavailable`);return}let t=ye(e,ge);if(t.status!==`loaded`){s(`unavailable`);return}a(t.planners),u.current.reserve(t.planners),s(`available`)},[]),(0,A.useEffect)(()=>{if(o!==`available`)return;let e=H(window);(e===null||!W(e,`otlplus.planner.local`,i))&&s(`unavailable`)},[i,o]);let m=(0,A.useMemo)(()=>[...n?f.data??[]:i].sort((e,t)=>e.arrange_order-t.arrange_order),[n,i,f.data]),g=m.find(e=>e.id===c)??m[0]??null;(0,A.useEffect)(()=>{g!==null&&g.id!==c&&l(g.id)},[g,c]);let _=(0,A.useCallback)(async()=>{n&&await f.refetch()},[n,f]),v={userId:r,isAuthenticated:n,selectedPlanner:g,selectedPlannerId:c,setLocalPlanners:a,allocateLocalId:u.current.next,refresh:_},y=Ae({...v,user:t,planners:m,tracks:d.data,setSelectedPlannerId:l}),b=Se(v);return{planners:m,selectedPlanner:g,selectedPlannerId:c,setSelectedPlannerId:l,tracks:d.data,isLoading:d.isLoading||o===`hydrating`||n&&f.isLoading,isBusy:y.isBusy||b.isBusy,error:d.error??f.error??y.error??b.error,createPlanner:y.createPlanner,deletePlanner:y.deletePlanner,updateTracks:y.updateTracks,reorderPlanner:y.reorderPlanner,addFuture:b.addFuture,addArbitrary:b.addArbitrary,updateItem:b.updateItem,removeItem:b.removeItem}}function q(e){return e.title.includes(`특강`)||e.title_en.includes(`Special Lectures`)||e.title_en.includes(`Special Topics`)}function Me(e,t){return q(t)?`none`:e.future_items.some(e=>!e.is_excluded&&e.course.id===t.id)?`future`:e.taken_items.some(e=>!e.is_excluded&&e.course.id===t.id)?`taken`:`none`}function J(e){return e.item_type===`TAKEN`||e.item_type===`FUTURE`?e.course:null}function Ne(e,t){let n=J(t);return n===null||t.is_excluded||q(n)?!1:[...e.taken_items,...e.future_items].filter(e=>!e.is_excluded&&J(e)?.id===n.id).length>1}var Pe=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Fe=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`,Ie=[[`기초필수`,`Basic Required`],[`기초선택`,`Basic Elective`],[`전공필수`,`Major Required`],[`전공선택`,`Major Elective`],[`졸업연구`,`Thesis Study(Undergraduate)`],[`교양필수`,`General Required`],[`인문사회선택`,`Humanities & Social Elective`],[`자유선택`,`Other Elective`]];function Le({departments:e,defaultDepartmentId:t,year:n,semester:r,busy:i,onAdd:a}){let{t:o,i18n:s}=D(),[u,d]=(0,A.useState)(0),[f,p]=(0,A.useState)(3),[m,h]=(0,A.useState)(0),[g,_]=(0,A.useState)(t);(0,A.useEffect)(()=>_(t),[t]);let v=!Number.isInteger(f)||!Number.isInteger(m)||f<0||m<0;return l(Pe,{children:[c(R,{children:o(`planner.arbitrary.title`)}),l(Fe,{children:[l(L,{children:[o(`planner.arbitrary.department`),c(I,{value:g,onChange:e=>_(Number(e.target.value)),children:e.map(e=>c(`option`,{value:e.id,children:s.resolvedLanguage===`en`?e.name_en:e.name},e.id))})]}),l(L,{children:[o(`planner.arbitrary.type`),c(I,{value:u,onChange:e=>d(Number(e.target.value)),children:Ie.map((e,t)=>c(`option`,{value:t,children:o(`planner.categories.${e[1]}`)},e[1]))})]}),l(L,{children:[o(`planner.arbitrary.credit`),c(F,{type:`number`,min:0,step:1,value:f,onChange:e=>p(Number(e.target.value))})]}),l(L,{children:[o(`planner.arbitrary.creditAU`),c(F,{type:`number`,min:0,step:1,value:m,onChange:e=>h(Number(e.target.value))})]})]}),c(N,{$primary:!0,type:`button`,disabled:i||v,onClick:()=>{let t=e.find(e=>e.id===g),i=Ie[u];t!==void 0&&i!==void 0&&a({year:n,semester:r,department:t,type:i[0],typeEn:i[1],credit:f,creditAU:m})},children:o(`planner.actions.addArbitrary`)})]})}var Re=d.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,ze=d.form`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;

    ${k.mobile} {
        grid-template-columns: minmax(0, 1fr);
    }
`,Be=d.div`
    display: grid;
    max-height: 220px;
    grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr));
    gap: 6px;
    overflow-y: auto;
`,Ve=d.button`
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
`,He=d.span`
    display: block;
    margin-bottom: 3px;
    color: ${({theme:e})=>e.colors.Text.placeholder};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,Ue=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`,We=d.hr`
    width: 100%;
    margin: 4px 0;
    border: 0;
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
`,Ge=[1,2,3,4];function Ke({planner:e,departments:t,busy:n,year:r,semester:i,onYearChange:a,onSemesterChange:o,keywordInputRef:s,onAddFuture:u,onAddArbitrary:d}){let{t:f,i18n:p}=D(),[m,h]=(0,A.useState)(``),[_,v]=(0,A.useState)(null),[y,b]=(0,A.useState)(!1),x=S(`GET`,`/planner-courses`,{enabled:y,apiPrefix:`/api`,apiPath:`/courses`,select:e=>C.parse(e)}),w=x.query.data?.find(e=>e.id===_)??null,T=w===null?`none`:Me(e,w);return l(Re,{"aria-labelledby":`planner-course-search-title`,children:[c(R,{id:`planner-course-search-title`,children:f(`planner.search.title`)}),l(ze,{onSubmit:e=>{e.preventDefault(),m.trim()!==``&&(x.setParams({keyword:m.trim(),offset:0,limit:20}),b(!0))},children:[c(F,{"aria-label":f(`planner.search.keyword`),ref:s,value:m,onChange:e=>h(e.target.value),placeholder:f(`planner.search.placeholder`)}),c(N,{$primary:!0,type:`submit`,disabled:n,children:f(`planner.actions.search`)})]}),c(Be,{children:x.query.data?.map(e=>l(Ve,{type:`button`,$selected:e.id===_,"aria-pressed":e.id===_,onClick:()=>v(e.id),children:[c(He,{children:e.old_code}),p.resolvedLanguage===`en`?e.title_en:e.title]},e.id))}),l(Ue,{children:[l(L,{children:[f(`planner.grid.targetYear`),c(I,{value:r,onChange:e=>a(Number(e.target.value)),children:Array.from({length:e.end_year-e.start_year+1},(t,n)=>e.start_year+n).map(e=>c(`option`,{value:e,children:e},e))})]}),l(L,{children:[f(`planner.grid.targetSemester`),c(I,{value:i,onChange:e=>o(g.parse(Number(e.target.value))),children:Ge.map(e=>c(`option`,{value:e,children:f(`planner.semesters.${e}`)},e))})]})]}),T===`future`?c(P,{role:`status`,"aria-live":`polite`,children:f(`planner.search.duplicate`)}):c(N,{$primary:!0,type:`button`,disabled:n||w===null,onClick:()=>{if(w===null)return;let e=T===`taken`&&window.confirm(f(`planner.search.takenDuplicateConfirm`));T===`taken`&&!e||u(w,r,i,{excludeTakenDuplicates:e})},children:f(`planner.actions.addCourse`)}),c(We,{}),c(Le,{departments:t,defaultDepartmentId:e.major_track.department.id,year:r,semester:i,busy:n,onAdd:d})]})}var qe=d.nav`
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

    ${k.tablet} {
        gap: 6px;
        padding: 12px;
    }
`,Je=d.div`
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;

    ${k.mobile} {
        flex-direction: column;
        align-items: stretch;
        gap: 6px;
    }
`,Ye=d.div`
    display: flex;
    min-width: 0;
    flex: 1 1 auto;
    gap: 6px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x proximity;
`,Xe=d.div`
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 6px;
`,Ze=d.button`
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
`;function Qe({planners:e,selectedPlannerId:t,busy:n,onSelect:r,onCreate:i,onDelete:a,onReorder:o}){let{t:s}=D(),u=e.findIndex(e=>e.id===t);return l(qe,{"aria-label":s(`planner.list.title`),children:[c(R,{children:s(`planner.list.title`)}),l(Je,{children:[l(Ye,{children:[e.map((e,n)=>c(Ze,{$selected:e.id===t,"aria-pressed":e.id===t,onClick:()=>r(e.id),children:s(`planner.list.item`,{index:n+1})},e.id)),e.length===0&&c(O,{type:`Small`,color:`Text.placeholder`,children:s(`planner.list.empty`)})]}),l(Xe,{children:[c(N,{$primary:!0,disabled:n,onClick:()=>void i(!1),"aria-label":s(`planner.actions.create`),children:c(E,{size:16,color:`inherit`,children:c(ae,{})})}),c(N,{disabled:n||t===null,onClick:()=>void i(!0),"aria-label":s(`planner.actions.copy`),children:c(E,{size:16,color:`inherit`,children:c(oe,{})})}),c(N,{disabled:n||u<=0,onClick:()=>void o(-1),"aria-label":s(`planner.actions.moveUp`),children:c(E,{size:16,color:`inherit`,children:c(ce,{})})}),c(N,{disabled:n||u<0||u>=e.length-1,onClick:()=>void o(1),"aria-label":s(`planner.actions.moveDown`),children:c(E,{size:16,color:`inherit`,children:c(se,{})})}),c(N,{$danger:!0,disabled:n||t===null,onClick:()=>{window.confirm(s(`planner.actions.deleteConfirm`))&&a()},"aria-label":s(`planner.actions.delete`),children:c(E,{size:16,color:`inherit`,children:c(M,{})})})]})]})]})}function $e(e){return e.item_type===`TAKEN`?e.lecture.credit:e.item_type===`FUTURE`?e.course.credit:e.credit}function et(e){return e.item_type===`TAKEN`?e.lecture.credit_au:e.item_type===`FUTURE`?e.course.credit_au:e.credit_au}function tt(e){return e.item_type===`TAKEN`?e.lecture.type_en:e.item_type===`FUTURE`?e.course.type_en:e.type_en}function nt(e){return e.item_type===`TAKEN`?e.lecture.department_code:e.item_type===`FUTURE`?e.course.department.code:e.department?.code??null}function Y(e=0){return{taken:0,planned:0,required:e}}function X(e,t,n){e[t]+=n}function rt(e){let t=e.additional_tracks.find(e=>e.type===`ADVANCED`),n={key:`PRIMARY:${e.major_track.department.code}`,type:t===void 0?`PRIMARY`:`ADVANCED`,department:e.major_track.department,required:Y(e.major_track.major_required+(t?.major_required??0)),elective:Y(e.major_track.major_elective+(t?.major_elective??0))},r={DOUBLE:0,MINOR:1,INTERDISCIPLINARY:2};return[n,...e.additional_tracks.filter(e=>e.type!==`ADVANCED`).sort((e,t)=>r[e.type]-r[t.type]).map(e=>({key:`${e.type}:${e.department?.code??e.id}`,type:e.type,department:e.department,required:Y(e.major_required),elective:Y(e.major_elective)}))]}function it(e){let t=Math.max(0,e.required.taken-e.required.required);e.required.taken-=t,e.elective.taken+=t;let n=Math.max(0,e.required.required-e.required.taken),r=Math.max(0,e.required.planned-n);e.required.planned-=r,e.elective.planned+=r}function at(e){let t=e.additional_tracks.some(e=>e.type===`DOUBLE`),n={credit:Y(e.general_track.total_credit),au:Y(e.general_track.total_au)},r=Y(e.general_track.basic_required),i=Y(t?e.major_track.basic_elective_doublemajor:e.general_track.basic_elective),a=Y(t?e.general_track.thesis_study_doublemajor:e.general_track.thesis_study),o={credit:Y(e.general_track.general_required_credit),au:Y(e.general_track.general_required_au)},s=Y(t?e.general_track.humanities_doublemajor:e.general_track.humanities),c=Y(),l=rt(e),u=[...e.taken_items,...e.future_items,...e.arbitrary_items];for(let e of u){if(e.is_excluded)continue;let t=e.item_type===`TAKEN`?`taken`:`planned`,u=$e(e),d=et(e);X(n.credit,t,u),X(n.au,t,d);let f=tt(e);if(f===`Basic Required`)X(r,t,u);else if(f===`Basic Elective`)X(i,t,u);else if(f===`Thesis Study(Undergraduate)`)X(a,t,u);else if(f===`Individual Study`)X(c,t,u);else if(f===`General Required`||f===`Mandatory General Courses`)X(o.credit,t,u),X(o.au,t,d);else if(f.startsWith(`Humanities & Social Elective`))X(s,t,u);else if(f===`Major Required`||f===`Major Elective`||f===`Elective(Graduate)`){let n=nt(e),r=l.find(e=>e.department?.code===n);X(r===void 0?c:f===`Major Required`?r.required:r.elective,t,u)}else X(c,t,u)}return l.forEach(it),{total:n,basicRequired:r,basicElective:i,thesisStudy:a,generalRequired:o,humanities:s,other:c,majors:l}}var ot=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
    gap: 8px;
`,st=d.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
`,ct=d.span`
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,Z=d.span`
    white-space: nowrap;
`,lt=d.strong`
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
`,ut=d.div`
    display: flex;
    height: 5px;
    margin-top: auto;
    overflow: hidden;
    border-radius: 999px;
    background: ${({theme:e})=>e.colors.Line.default};
`,dt=d.div`
    width: ${({$ratio:e})=>`${Math.min(100,Math.max(0,e*100))}%`};
    height: 100%;
    background: ${({theme:e})=>e.colors.Highlight.default};
`,ft=d.div`
    width: ${({$ratio:e})=>`${Math.min(100,Math.max(0,e*100))}%`};
    height: 100%;
    background-color: ${({theme:e})=>e.colors.Highlight.subtle};
    background-image: repeating-linear-gradient(
        45deg,
        ${({theme:e})=>e.colors.Highlight.default} 0 3px,
        transparent 3px 6px
    );
`;function pt(e){if(e.required===0)return{taken:0,planned:0};let t=Math.min(1,Math.max(0,e.taken/e.required));return{taken:t,planned:Math.min(Math.max(0,1-t),Math.max(0,e.planned/e.required))}}function Q({label:e,progress:t,unit:n,trackId:r}){let{t:i}=D(),a=t.taken+t.planned,o=pt(t);return l(st,{children:[c(ct,{children:e}),l(lt,{children:[a,` / `,t.required,` `,n]}),c(ct,{children:i(`planner.summary.breakdown`,{taken:t.taken,planned:t.planned})}),l(ut,{"aria-hidden":`true`,"data-track":r,children:[c(dt,{"data-segment":`taken`,"data-ratio":o.taken,$ratio:o.taken}),t.planned>0&&c(ft,{"data-segment":`planned`,"data-ratio":o.planned,$ratio:o.planned})]})]})}function mt({planner:e}){let{t,i18n:n}=D(),r=at(e),i=t(`planner.summary.units.credit`),a=t(`planner.summary.units.au`),o=[[`totalCredit`,r.total.credit,i],[`totalAu`,r.total.au,a],[`basicRequired`,r.basicRequired,i],[`basicElective`,r.basicElective,i],[`thesisStudy`,r.thesisStudy,i],[`generalRequiredCredit`,r.generalRequired.credit,i],[`generalRequiredAu`,r.generalRequired.au,a],[`humanities`,r.humanities,i],[`other`,r.other,i]];return l(`section`,{"aria-labelledby":`planner-summary-title`,children:[c(R,{id:`planner-summary-title`,children:t(`planner.summary.title`)}),c(P,{role:`note`,children:t(`planner.summary.disclaimer`)}),l(ot,{children:[o.map(([e,n,r])=>c(Q,{label:t(`planner.summary.categories.${e}`),progress:n,unit:r,trackId:e},e)),r.majors.flatMap(e=>{let r=e.department?n.resolvedLanguage===`en`?e.department.name_en:e.department.name:null,a=t(`planner.trackTypes.${e.type}`),o=e=>l(u,{children:[r!==null&&l(u,{children:[c(Z,{children:r}),` · `]}),c(Z,{children:a}),` · `,c(Z,{children:e})]});return[c(Q,{label:o(t(`planner.summary.categories.majorRequired`)),progress:e.required,unit:i,trackId:`${e.key}:required`},`${e.key}:required`),c(Q,{label:o(t(`planner.summary.categories.majorElective`)),progress:e.elective,unit:i,trackId:`${e.key}:elective`},`${e.key}:elective`)]})]})]})}var ht=d.article`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    opacity: ${({$excluded:e})=>e?.55:1};
`,gt=d.strong`
    overflow: hidden;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_t=d.span`
    color: ${({theme:e})=>e.colors.Text.placeholder};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,vt=d.span`
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
`,yt=d.div`
    display: flex;
    min-width: 0;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
`,bt=d(I)`
    width: auto;
    min-width: 96px;
    flex: 1 1 96px;
`,xt=[1,2,3,4];function St(e){return e.item_type===`TAKEN`?{credit:e.lecture.credit,creditAU:e.lecture.credit_au}:e.item_type===`FUTURE`?{credit:e.course.credit,creditAU:e.course.credit_au}:{credit:e.credit,creditAU:e.credit_au}}function Ct({planner:e,item:t,title:n,code:r,busy:i,onUpdate:a,onRemove:o}){let{t:s}=D(),d=St(t);return l(ht,{$excluded:t.is_excluded,children:[c(gt,{title:n,children:n}),l(_t,{children:[r,` · `,d.credit,s(`planner.items.credits`),d.creditAU>0&&l(u,{children:[` · `,d.creditAU,` `,s(`planner.items.au`)]}),Ne(e,t)&&c(vt,{"aria-label":s(`planner.items.duplicate`),title:s(`planner.items.duplicate`),children:`!`})]}),l(yt,{children:[c(N,{type:`button`,disabled:i,onClick:()=>void a(t,{isExcluded:!t.is_excluded}),children:s(t.is_excluded?`planner.actions.include`:`planner.actions.exclude`)}),t.item_type!==`TAKEN`&&c(bt,{"aria-label":s(`planner.actions.changeSemester`),value:t.semester,disabled:i,onChange:e=>void a(t,{semester:g.parse(Number(e.target.value))}),children:xt.map(e=>c(`option`,{value:e,children:s(`planner.semesters.${e}`)},e))}),t.item_type!==`TAKEN`&&c(N,{$danger:!0,type:`button`,disabled:i,"aria-label":s(`planner.actions.removeItem`),onClick:()=>{window.confirm(s(`planner.actions.removeItemConfirm`))&&o(t)},children:c(E,{size:14,color:`inherit`,children:c(M,{})})})]})]})}var wt=d.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,Tt=d.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,Et=d.h3`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.NormalBold.fontSize}px;
`,Dt=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(210px, 100%), 1fr));
    gap: 8px;

    ${k.tablet} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${k.mobile} {
        grid-template-columns: minmax(0, 1fr);
    }
`,Ot=d.div`
    display: flex;
    min-width: 0;
    align-self: start;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
`,kt=d.h4`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.SmallBold.fontSize}px;
`,At=d.button`
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

    ${k.mobile} {
        min-height: 36px;
    }
`,jt=[1,2,3,4];function Mt(e){return e.item_type===`TAKEN`?e.lecture.year:e.year}function Nt(e){return e.item_type===`TAKEN`?e.lecture.semester:e.semester}function Pt({planner:e,busy:t,onUpdate:n,onRemove:r,onRequestAdd:i}){let{t:a,i18n:o}=D(),s=[...e.taken_items,...e.future_items,...e.arbitrary_items],u=Array.from({length:e.end_year-e.start_year+1},(t,n)=>e.start_year+n),d=e=>e.item_type===`ARBITRARY`?o.resolvedLanguage===`en`?e.type_en:e.type:o.resolvedLanguage===`en`?e.course.title_en:e.course.title,f=e=>e.item_type===`ARBITRARY`?a(`planner.items.arbitrary`):e.course.old_code;return l(`section`,{"aria-labelledby":`semester-grid-title`,children:[c(R,{id:`semester-grid-title`,children:a(`planner.grid.title`)}),c(wt,{children:u.map(o=>l(Tt,{children:[c(Et,{children:a(`planner.grid.year`,{year:o})}),c(Dt,{children:jt.map(u=>{let p=s.filter(e=>Mt(e)===o&&Nt(e)===u);return l(Ot,{children:[c(kt,{children:a(`planner.semesters.${u}`)}),p.map(i=>c(Ct,{planner:e,item:i,title:d(i),code:f(i),busy:t,onUpdate:n,onRemove:r},i.id)),p.length===0&&l(At,{type:`button`,"data-slot-chip":`true`,disabled:t,onClick:()=>i(o,u),children:[`+`,` `,a(`planner.grid.addHere`,{year:o,semester:a(`planner.semesters.${u}`)})]})]},u)})})]},o))})]})}function Ft({planner:e,tracks:t,busy:n,onSave:r}){let{t:i,i18n:a}=D(),o=new Date().getFullYear(),s=e.end_year-e.start_year+1,[u,d]=(0,A.useState)(e.start_year),[p,m]=(0,A.useState)(G.includes(s)?s:4),[h,g]=(0,A.useState)(e.general_track.id),[_,v]=(0,A.useState)(e.major_track.id),[y,b]=(0,A.useState)(e.additional_tracks.map(e=>e.id));(0,A.useEffect)(()=>{let t=e.end_year-e.start_year+1;d(e.start_year),m(G.includes(t)?t:4),g(e.general_track.id),v(e.major_track.id),b(e.additional_tracks.map(e=>e.id))},[e]);let x=(0,A.useMemo)(()=>{let t=Ce(o);return e.start_year>=2e3&&e.start_year<=o?[...new Set([e.start_year,...t])].sort((e,t)=>e-t):t},[o,e.start_year]),S=t.general.filter(e=>e.end_year>=2020||e.id===h),C=t.major.filter(e=>e.end_year>=2020||e.id===_),w=t.additional.filter(e=>e.end_year>=2020||y.includes(e.id)),T=e=>a.resolvedLanguage===`en`?e.name_en:e.name;return l(le,{onSubmit:n=>{n.preventDefault();let a=t.general.find(e=>e.id===h),o=t.major.find(e=>e.id===_);if(a===void 0||o===void 0)return;let s=t.additional.filter(e=>y.includes(e.id)),c=De(s,o);if(c!==null){window.alert(i(`planner.settings.errors.${c}`));return}let l={startYear:u,endYear:u+p-1,generalTrack:a,majorTrack:o,additionalTracks:s},d=Oe(e,l.startYear,l.endYear);if(d>0&&!window.confirm(i(`planner.settings.confirmRange`,{startYear:l.startYear,endYear:l.endYear,count:d})))return;let f=ke(l);f>0&&!window.confirm(i(`planner.settings.confirmIncompatible`,{startYear:l.startYear,count:f}))||r(l)},children:[c(R,{children:i(`planner.settings.title`)}),l(ue,{children:[l(L,{children:[i(`planner.settings.startYear`),c(I,{value:u,onChange:e=>d(Number(e.target.value)),children:x.map(e=>c(`option`,{value:e,children:e},e))})]}),l(L,{children:[i(`planner.settings.duration`),c(I,{value:p,onChange:e=>m(Number(e.target.value)),children:G.map(e=>c(`option`,{value:e,children:i(`planner.settings.durationYears`,{count:e})},e))})]}),l(L,{children:[i(`planner.settings.generalTrack`),c(I,{value:h,onChange:e=>g(Number(e.target.value)),children:S.map(e=>c(`option`,{value:e.id,disabled:!K(e,u),children:e.is_foreign?i(`planner.settings.foreign`):i(`planner.settings.domestic`)},e.id))})]}),l(L,{children:[i(`planner.settings.majorTrack`),c(I,{value:_,onChange:e=>v(Number(e.target.value)),children:C.map(e=>c(`option`,{value:e.id,disabled:!K(e,u),children:T(e.department)},e.id))})]})]}),l(L,{children:[i(`planner.settings.additionalTracks`),c(I,{multiple:!0,size:6,value:y.map(String),onChange:e=>b(Array.from(e.target.selectedOptions,e=>Number(e.value))),children:w.map(n=>l(`option`,{value:n.id,disabled:Ee(n,u,t.major.find(e=>e.id===_)??e.major_track),children:[i(`planner.trackTypes.${n.type}`),n.department===null?``:` · ${T(n.department)}`]},n.id))})]}),c(f,{direction:`row`,justify:`flex-end`,gap:8,children:c(N,{$primary:!0,type:`submit`,disabled:n,children:i(`planner.actions.save`)})})]})}var It=d.main`
    display: flex;
    min-width: 0;
    min-height: 0;
    flex: 1 0 auto;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px 20px;

    ${k.tablet} {
        padding: 0 8px 12px;
    }
`,$=d(re)`
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    align-items: stretch;
    padding: 16px;

    ${k.mobile} {
        padding: 12px;
    }
`,Lt=d.div`
    display: grid;
    min-width: 0;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 340px);
    align-items: start;
    gap: 12px;

    ${k.tablet} {
        grid-template-columns: minmax(0, 1fr);
    }
`,Rt=d.div`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
`,zt=d.aside`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
`,Bt=d(re)`
    min-height: 240px;
    padding: 24px;
`,Vt=s(function(){return c(ne,{flag:`planner-enabled`,children:c(Ht,{})})});function Ht(){let{t:e}=D(),t=je(),n=t.selectedPlanner?.id??null,r=(0,A.useRef)(t.planners);r.current=t.planners;let i=(0,A.useRef)(null),[a,o]=(0,A.useState)({year:new Date().getFullYear(),semester:1});(0,A.useEffect)(()=>{m(`Page View`,{page:`Planner`})},[]),(0,A.useEffect)(()=>{if(n===null)return;let e=r.current.find(e=>e.id===n);e!==void 0&&o({year:e.start_year,semester:1})},[n]);let s=(e,t)=>{o({year:e,semester:t}),requestAnimationFrame(()=>{let e=i.current;e?.scrollIntoView({behavior:`smooth`,block:`center`}),e?.focus({preventScroll:!0})})},u=(0,A.useMemo)(()=>{let e=[...t.tracks?.major.map(e=>e.department)??[],...t.tracks?.additional.flatMap(e=>e.department===null?[]:[e.department])??[]];return e.filter((t,n)=>e.findIndex(e=>e.id===t.id)===n)},[t.tracks]);return t.isLoading?c(It,{children:l(Bt,{direction:`column`,align:`center`,justify:`center`,gap:12,children:[c(ie,{}),c(O,{type:`Normal`,color:`Text.placeholder`,children:e(`planner.status.loading`)})]})}):l(It,{children:[c(Qe,{planners:t.planners,selectedPlannerId:t.selectedPlannerId,busy:t.isBusy,onSelect:t.setSelectedPlannerId,onCreate:t.createPlanner,onDelete:t.deletePlanner,onReorder:t.reorderPlanner}),t.error!==null&&t.error!==void 0&&l($,{direction:`column`,gap:6,children:[c(O,{type:`NormalBold`,color:`Highlight.dark`,children:e(`planner.status.error`)}),c(O,{type:`Small`,color:`Text.light`,children:t.error.message})]}),t.selectedPlanner===null||t.tracks===void 0?l(Bt,{direction:`column`,align:`center`,justify:`center`,gap:12,children:[c(O,{type:`BiggerBold`,color:`Text.default`,children:e(`planner.empty.title`)}),c(O,{type:`Normal`,color:`Text.placeholder`,children:e(`planner.empty.description`)}),c(N,{$primary:!0,disabled:t.isBusy||t.tracks===void 0,onClick:()=>void t.createPlanner(!1),children:e(`planner.actions.create`)})]}):l(Lt,{children:[l(Rt,{children:[c($,{direction:`column`,gap:12,children:c(Pt,{planner:t.selectedPlanner,busy:t.isBusy,onUpdate:t.updateItem,onRemove:t.removeItem,onRequestAdd:s})}),c($,{direction:`column`,gap:12,children:c(Ke,{planner:t.selectedPlanner,departments:u,busy:t.isBusy,year:a.year,semester:a.semester,onYearChange:e=>o(t=>({...t,year:e})),onSemesterChange:e=>o(t=>({...t,semester:e})),keywordInputRef:i,onAddFuture:t.addFuture,onAddArbitrary:t.addArbitrary})})]}),l(zt,{"aria-label":e(`planner.settings.title`),children:[c($,{direction:`column`,gap:12,children:c(Ft,{planner:t.selectedPlanner,tracks:t.tracks,busy:t.isBusy,onSave:t.updateTracks})}),c($,{direction:`column`,gap:12,children:c(mt,{planner:t.selectedPlanner})})]})]})]})}export{Vt as default};
//# sourceMappingURL=planner-BPJ60PDF.js.map