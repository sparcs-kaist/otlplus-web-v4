(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`b9e58ab6d96df3435e8f71b43aaa043928936cc1`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`4f0eb66a-33a2-4488-8976-5e4ff886a925`,e._sentryDebugIdIdentifier=`sentry-dbid-4f0eb66a-33a2-4488-8976-5e4ff886a925`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-BoFK3gJw.js";import{_ as r,g as i,h as a,v as o}from"./sentryEventFilter-DWvk5dDH.js";import{k as s}from"./chunk-62JRHF6Z-5EH-zvEH.js";import{n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-C21_nDz7.js";import{n as d,t as f}from"./FlexWrapper-AXG3tt4u.js";import{i as p,v as m}from"./axios-BI3CJ44W.js";import{C as h,S as g,a as _,b as v,i as y,o as b,s as x,t as S,u as ee,v as C,x as w,y as te}from"./useAPI-o71lD-8b.js";import{r as T,t as E}from"./Icon-C_zjvjUD.js";import{t as D}from"./useTranslation-CRnYSnr2.js";import{t as O}from"./Typography-CrQlV_hI.js";import{t as k}from"./media-DEYfm3SQ.js";import{t as ne}from"./Widget-B_26FQmY.js";import{t as re}from"./LoadingCircle-B8W08F1n.js";import{t as ie}from"./Add-BPYStCsv.js";import{t as ae}from"./ContentCopy-BNAVR2qu.js";import{t as oe}from"./KeyboardArrowDown-CtcKMFXV.js";var A=t(e(),1),j=t(n(),1),M=T((0,j.jsx)(`path`,{d:`M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z`}),`DeleteOutlined`),se=T((0,j.jsx)(`path`,{d:`M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z`}),`KeyboardArrowUp`),N=d.button`
    appearance: none;
    border: 1px solid
        ${({$danger:e,$primary:t,theme:n})=>e?n.colors.Highlight.dark:t?n.colors.Highlight.default:n.colors.Line.default};
    border-radius: 6px;
    padding: 8px 12px;
    color: ${({$danger:e,$primary:t,theme:n})=>e||t?n.colors.Text.onHighlight.default:n.colors.Text.default};
    background: ${({$danger:e,$primary:t,theme:n})=>e?n.colors.Highlight.dark:t?n.colors.Highlight.default:n.colors.Background.Button.default};
    flex-shrink: 0;
    font: inherit;
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
        opacity: 0.45;
    }

    ${k.mobile} {
        min-width: 44px;
        min-height: 44px;
    }
`,P=d.div`
    padding: 10px 12px;
    border: 1px solid ${({theme:e})=>e.colors.Highlight.subtle};
    border-radius: 6px;
    color: ${({theme:e})=>e.colors.Highlight.dark};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
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
`,L=d.label`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,ce=d.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,le=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
    gap: 10px;
`,R=d.h2`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    line-height: ${({theme:e})=>e.fonts.Big.lineHeight}px;
`;function z(e){let t=0;for(let n of e){t=Math.min(t,n.id);for(let e of[...n.taken_items,...n.future_items,...n.arbitrary_items])t=Math.min(t,e.id)}return t-1}function ue(e=[]){let t=z(e);return{next:()=>{let e=t;return--t,e},reserve:e=>{t=Math.min(t,z(e))}}}function de(e,t,n){let r=e=>({...e,id:t()});return{id:t(),start_year:e.startYear,end_year:e.endYear,general_track:e.generalTrack,major_track:e.majorTrack,additional_tracks:[...e.additionalTracks],taken_items:n?.taken_items.map(r)??[],future_items:n?.future_items.map(r)??[],arbitrary_items:n?.arbitrary_items.map(r)??[],arrange_order:0}}function B(e,t,n){return e.map(e=>e.id===t?n(e):e)}function fe(e,t,n){let r=[...e].sort((e,t)=>e.arrange_order-t.arrange_order),i=r.findIndex(e=>e.id===t),a=i+n;if(i<0||a<0||a>=r.length)return r;let o=r[i],s=r[a];return o===void 0||s===void 0?r:(r[i]={...s,arrange_order:i},r[a]={...o,arrange_order:a},r)}function pe(e,t,n){let r=e=>{if(e.id!==t.id)return e;let r=n.isExcluded??e.is_excluded;return e.item_type===`TAKEN`||n.semester===void 0?{...e,is_excluded:r}:{...e,semester:n.semester,is_excluded:r}};return{...e,taken_items:e.taken_items.map(r),future_items:e.future_items.map(r),arbitrary_items:e.arbitrary_items.map(r)}}function me(e,t){return t.item_type===`TAKEN`?e:{...e,future_items:e.future_items.filter(e=>e.id!==t.id),arbitrary_items:e.arbitrary_items.filter(e=>e.id!==t.id)}}var he=`otlplus.planner.local`,ge=r({version:a(1),planners:w}).strict(),V=r({version:i().int().nonnegative()}).passthrough();function H(e){try{return e.localStorage}catch{return null}}function U(e,t){try{return e.removeItem(t),!0}catch{return!1}}function _e(e){if(e===null)return!1;try{let t=V.safeParse(JSON.parse(e));return t.success&&t.data.version>1}catch{return!1}}function W(e,t,n){let r=w.safeParse(n);if(!r.success)return!1;try{return!_e(e.getItem(t))&&(e.setItem(t,JSON.stringify({version:1,planners:r.data})),!0)}catch{return!1}}function ve(e,t){let n;try{n=e.getItem(t)}catch{return{status:`unavailable`}}if(n===null)return{status:`loaded`,planners:[]};let r;try{r=JSON.parse(n)}catch{return U(e,t)?{status:`loaded`,planners:[]}:{status:`unavailable`}}let i=ge.safeParse(r);if(i.success)return{status:`loaded`,planners:i.data.planners};let a=V.safeParse(r);if(a.success&&a.data.version>1)return{status:`unsupported-version`};let o=w.safeParse(r);return o.success?(W(e,t,o.data),{status:`loaded`,planners:o.data}):U(e,t)?{status:`loaded`,planners:[]}:{status:`unavailable`}}function ye(e){return{id:e.id,old_code:e.old_code,old_old_code:e.old_old_code,department:e.department,type:e.type,type_en:e.type_en,title:e.title,title_en:e.title_en,summary:e.summary,review_total_weight:e.review_total_weight,credit:e.credit,credit_au:e.credit_au,num_classes:e.num_classes,num_labs:e.num_labs}}var be=r({year:i().int(),semester:g,department:v,type:o().min(1),typeEn:o().min(1),credit:i().int().nonnegative(),creditAU:i().int().nonnegative()}).strict();function xe(e){let t=`/users/${e.userId}/planners/${e.selectedPlannerId??0}`,n=S(`POST`,`${t}/add-future-item`,{apiPrefix:`/api`}).mutation,r=S(`POST`,`${t}/add-arbitrary-item`,{apiPrefix:`/api`}).mutation,i=S(`POST`,`${t}/remove-item`,{apiPrefix:`/api`}).mutation,a=S(`POST`,`${t}/update-item`,{apiPrefix:`/api`}).mutation,o=(0,A.useCallback)(async(t,r,i,o)=>{if(e.selectedPlanner===null)return;let s=e.selectedPlanner.id;if(e.isAuthenticated){if(y.parse(await n.mutateAsync({course:t.id,year:r,semester:i})),o?.excludeTakenDuplicates){let n=e.selectedPlanner.taken_items.filter(e=>!e.is_excluded&&e.course.id===t.id);await Promise.all(n.map(e=>a.mutateAsync({item:e.id,item_type:e.item_type,is_excluded:!0})))}await e.refresh();return}let c=e.allocateLocalId();e.setLocalPlanners(e=>B(e,s,e=>({...e,taken_items:o?.excludeTakenDuplicates?e.taken_items.map(e=>!e.is_excluded&&e.course.id===t.id?{...e,is_excluded:!0}:e):e.taken_items,future_items:[...e.future_items,{id:c,item_type:`FUTURE`,is_excluded:!1,year:r,semester:i,course:ye(t)}]})))},[n,e,a]),s=(0,A.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=be.safeParse(t);if(!n.success)return;let i=n.data,a=e.selectedPlanner.id;if(i.year<e.selectedPlanner.start_year||i.year>e.selectedPlanner.end_year)return;if(e.isAuthenticated){C.parse(await r.mutateAsync({year:i.year,semester:i.semester,department:i.department.id,type:i.type,type_en:i.typeEn,credit:i.credit,credit_au:i.creditAU})),await e.refresh();return}let o=e.allocateLocalId();e.setLocalPlanners(e=>B(e,a,e=>({...e,arbitrary_items:[...e.arbitrary_items,{id:o,item_type:`ARBITRARY`,is_excluded:!1,year:i.year,semester:i.semester,department:i.department,type:i.type,type_en:i.typeEn,credit:i.credit,credit_au:i.creditAU}]})))},[r,e]),c=(0,A.useCallback)(async(t,n)=>{if(e.selectedPlanner===null)return;let r=e.selectedPlanner.id;if(e.isAuthenticated){b.parse(await a.mutateAsync({item:t.id,item_type:t.item_type,semester:n.semester,is_excluded:n.isExcluded})),await e.refresh();return}e.setLocalPlanners(e=>B(e,r,e=>pe(e,t,n)))},[e,a]),l=(0,A.useCallback)(async t=>{if(e.selectedPlanner===null||t.item_type===`TAKEN`)return;let n=e.selectedPlanner.id;if(e.isAuthenticated){_.parse(await i.mutateAsync({item:t.id,item_type:t.item_type})),await e.refresh();return}e.setLocalPlanners(e=>B(e,n,e=>me(e,t)))},[e,i]),u=[n,r,i,a];return{addFuture:o,addArbitrary:s,updateItem:c,removeItem:l,isBusy:u.some(e=>e.isPending),error:u.find(e=>e.error)?.error}}var G=[4,5,6,7,8];function K(e,t){return e.start_year<=t&&t<=e.end_year}function Se(e){return Array.from({length:Math.max(0,e-2015+1)},(e,t)=>t+2015)}function Ce(e,t){if(e===void 0)return null;let n=Number(String(e).slice(0,4));return Number.isInteger(n)&&n>=2e3&&n<=t?n:null}function we(e,t,n){if(e===void 0)return null;let r=Ce(t?.studentNumber,n)??n,i=e.general.filter(e=>K(e,r)),a=i.find(e=>!e.is_foreign)??i[0],o=e.major.filter(e=>K(e,r)),s=new Set(t?.majorDepartments?.map(e=>e.code)),c=o.find(e=>s.has(e.department.code))??o[0];return a===void 0||c===void 0?null:{startYear:r,endYear:r+3,generalTrack:a,majorTrack:c,additionalTracks:[]}}function Te(e,t,n){if(!K(e,t))return!0;let r=e.department?.code;switch(e.type){case`DOUBLE`:case`MINOR`:return r===n.department.code;case`ADVANCED`:return r!==n.department.code;case`INTERDISCIPLINARY`:return!1}}function Ee(e,t){let n=new Map,r=0,i=0;for(let a of e){let e=a.department?.code;if((a.type===`DOUBLE`||a.type===`MINOR`)&&e!==void 0){if(e===t.department.code)return`sameAsPrimary`;let r=(n.get(e)??0)+1;if(n.set(e,r),r>1)return`duplicateDepartment`}if(a.type===`ADVANCED`){if(r+=1,e!==t.department.code)return`advancedDepartment`;if(r>1)return`multipleAdvanced`}if(a.type===`INTERDISCIPLINARY`&&(i+=1,i>1))return`multipleInterdisciplinary`}return null}function De(e,t,n){let r=e=>e<t||e>n;return e.taken_items.filter(e=>r(e.lecture.year)).length+e.future_items.filter(e=>r(e.year)).length+e.arbitrary_items.filter(e=>r(e.year)).length}function Oe(e){return[e.generalTrack,e.majorTrack,...e.additionalTracks].filter(t=>!K(t,e.startYear)).length}function ke(e){let t=S(`POST`,`/users/${e.userId}/planners`,{apiPrefix:`/api`}).mutation,n=`/users/${e.userId}/planners/${e.selectedPlannerId??0}`,r=S(`PATCH`,n,{apiPrefix:`/api`}).mutation,i=S(`DELETE`,n,{apiPrefix:`/api`}).mutation,a=S(`POST`,`${n}/reorder`,{apiPrefix:`/api`}).mutation,o=(0,A.useCallback)(()=>we(e.tracks,e.user,new Date().getFullYear()),[e.tracks,e.user]),s=(0,A.useCallback)(async n=>{let r=n?e.selectedPlanner:null,i=r?{startYear:r.start_year,endYear:r.end_year,generalTrack:r.general_track,majorTrack:r.major_track,additionalTracks:r.additional_tracks}:o();if(i===null)return;if(!e.isAuthenticated){let t=de(i,e.allocateLocalId,r??void 0);e.setLocalPlanners(e=>[...e,{...t,arrange_order:e.length}]),e.setSelectedPlannerId(t.id);return}let a=_.parse(await t.mutateAsync({start_year:i.startYear,end_year:i.endYear,general_track:i.generalTrack.id,major_track:i.majorTrack.id,additional_tracks:i.additionalTracks.map(e=>e.id),should_update_taken_semesters:r===null||void 0,taken_items_to_copy:r?.taken_items.map(e=>e.id)??[],future_items_to_copy:r?.future_items.map(e=>e.id)??[],arbitrary_items_to_copy:r?.arbitrary_items.map(e=>e.id)??[]}));await e.refresh(),e.setSelectedPlannerId(a.id)},[t,o,e]),c=(0,A.useCallback)(async()=>{if(e.selectedPlanner===null)return;let t=e.selectedPlanner.id;e.isAuthenticated?(await i.mutateAsync({}),await e.refresh()):e.setLocalPlanners(e=>e.filter(e=>e.id!==t)),e.setSelectedPlannerId(null)},[i,e]),l=(0,A.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=e.selectedPlanner.id;if(e.isAuthenticated){let n=_.parse(await r.mutateAsync({start_year:t.startYear,end_year:t.endYear,general_track:t.generalTrack.id,major_track:t.majorTrack.id,additional_tracks:t.additionalTracks.map(e=>e.id),should_update_taken_semesters:!0}));e.setSelectedPlannerId(n.id),await e.refresh();return}e.setLocalPlanners(e=>B(e,n,e=>({...e,start_year:t.startYear,end_year:t.endYear,general_track:t.generalTrack,major_track:t.majorTrack,additional_tracks:[...t.additionalTracks],taken_items:e.taken_items.filter(e=>e.lecture.year>=t.startYear&&e.lecture.year<=t.endYear),future_items:e.future_items.filter(e=>e.year>=t.startYear&&e.year<=t.endYear),arbitrary_items:e.arbitrary_items.filter(e=>e.year>=t.startYear&&e.year<=t.endYear)})))},[e,r]),u=(0,A.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=e.selectedPlanner.id,r=e.selectedPlanner.arrange_order+t;if(!(r<0||r>=e.planners.length)){if(e.isAuthenticated){te.parse(await a.mutateAsync({arrange_order:r})),await e.refresh();return}e.setLocalPlanners(e=>fe(e,n,t))}},[e,a]),d=[t,r,i,a];return{createPlanner:s,deletePlanner:c,updateTracks:l,reorderPlanner:u,isBusy:d.some(e=>e.isPending),error:d.find(e=>e.error)?.error}}function Ae(){let{status:e,user:t}=p(),n=e===`success`&&t!==null,r=t?.id??0,[i,a]=(0,A.useState)([]),[o,s]=(0,A.useState)(`hydrating`),[c,l]=(0,A.useState)(null),u=(0,A.useRef)(ue()),d=S(`GET`,`/tracks`,{select:e=>h.parse(e),apiPrefix:`/api`}).query,f=S(`GET`,`/users/${r}/planners`,{enabled:n,select:e=>x.parse(e),apiPrefix:`/api`}).query;(0,A.useEffect)(()=>{let e=H(window);if(e===null){s(`unavailable`);return}let t=ve(e,he);if(t.status!==`loaded`){s(`unavailable`);return}a(t.planners),u.current.reserve(t.planners),s(`available`)},[]),(0,A.useEffect)(()=>{if(o!==`available`)return;let e=H(window);(e===null||!W(e,`otlplus.planner.local`,i))&&s(`unavailable`)},[i,o]);let m=(0,A.useMemo)(()=>[...n?f.data??[]:i].sort((e,t)=>e.arrange_order-t.arrange_order),[n,i,f.data]),g=m.find(e=>e.id===c)??m[0]??null;(0,A.useEffect)(()=>{g!==null&&g.id!==c&&l(g.id)},[g,c]);let _=(0,A.useCallback)(async()=>{n&&await f.refetch()},[n,f]),v={userId:r,isAuthenticated:n,selectedPlanner:g,selectedPlannerId:c,setLocalPlanners:a,allocateLocalId:u.current.next,refresh:_},y=ke({...v,user:t,planners:m,tracks:d.data,setSelectedPlannerId:l}),b=xe(v);return{planners:m,selectedPlanner:g,selectedPlannerId:c,setSelectedPlannerId:l,tracks:d.data,isLoading:d.isLoading||o===`hydrating`||n&&f.isLoading,isBusy:y.isBusy||b.isBusy,error:d.error??f.error??y.error??b.error,createPlanner:y.createPlanner,deletePlanner:y.deletePlanner,updateTracks:y.updateTracks,reorderPlanner:y.reorderPlanner,addFuture:b.addFuture,addArbitrary:b.addArbitrary,updateItem:b.updateItem,removeItem:b.removeItem}}function q(e){return e.title.includes(`특강`)||e.title_en.includes(`Special Lectures`)||e.title_en.includes(`Special Topics`)}function je(e,t){return q(t)?`none`:e.future_items.some(e=>!e.is_excluded&&e.course.id===t.id)?`future`:e.taken_items.some(e=>!e.is_excluded&&e.course.id===t.id)?`taken`:`none`}function J(e){return e.item_type===`TAKEN`||e.item_type===`FUTURE`?e.course:null}function Me(e,t){let n=J(t);return n===null||t.is_excluded||q(n)?!1:[...e.taken_items,...e.future_items].filter(e=>!e.is_excluded&&J(e)?.id===n.id).length>1}var Ne=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Pe=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`,Fe=[[`기초필수`,`Basic Required`],[`기초선택`,`Basic Elective`],[`전공필수`,`Major Required`],[`전공선택`,`Major Elective`],[`졸업연구`,`Thesis Study(Undergraduate)`],[`교양필수`,`General Required`],[`인문사회선택`,`Humanities & Social Elective`],[`자유선택`,`Other Elective`]];function Ie({departments:e,defaultDepartmentId:t,year:n,semester:r,busy:i,onAdd:a}){let{t:o,i18n:s}=D(),[u,d]=(0,A.useState)(0),[f,p]=(0,A.useState)(3),[m,h]=(0,A.useState)(0),[g,_]=(0,A.useState)(t);(0,A.useEffect)(()=>_(t),[t]);let v=!Number.isInteger(f)||!Number.isInteger(m)||f<0||m<0;return l(Ne,{children:[c(R,{children:o(`planner.arbitrary.title`)}),l(Pe,{children:[l(L,{children:[o(`planner.arbitrary.department`),c(I,{value:g,onChange:e=>_(Number(e.target.value)),children:e.map(e=>c(`option`,{value:e.id,children:s.resolvedLanguage===`en`?e.name_en:e.name},e.id))})]}),l(L,{children:[o(`planner.arbitrary.type`),c(I,{value:u,onChange:e=>d(Number(e.target.value)),children:Fe.map((e,t)=>c(`option`,{value:t,children:o(`planner.categories.${e[1]}`)},e[1]))})]}),l(L,{children:[o(`planner.arbitrary.credit`),c(F,{type:`number`,min:0,step:1,value:f,onChange:e=>p(Number(e.target.value))})]}),l(L,{children:[o(`planner.arbitrary.creditAU`),c(F,{type:`number`,min:0,step:1,value:m,onChange:e=>h(Number(e.target.value))})]})]}),c(N,{$primary:!0,type:`button`,disabled:i||v,onClick:()=>{let t=e.find(e=>e.id===g),i=Fe[u];t!==void 0&&i!==void 0&&a({year:n,semester:r,department:t,type:i[0],typeEn:i[1],credit:f,creditAU:m})},children:o(`planner.actions.addArbitrary`)})]})}var Le=d.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,Re=d.form`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;
`,ze=d.div`
    display: grid;
    max-height: 220px;
    grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr));
    gap: 6px;
    overflow-y: auto;
`,Be=d.button`
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
`,Ve=d.span`
    display: block;
    margin-bottom: 3px;
    color: ${({theme:e})=>e.colors.Text.placeholder};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,He=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`,Ue=d.hr`
    width: 100%;
    margin: 4px 0;
    border: 0;
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
`,We=[1,2,3,4];function Ge({planner:e,departments:t,busy:n,onAddFuture:r,onAddArbitrary:i}){let{t:a,i18n:o}=D(),[s,u]=(0,A.useState)(``),[d,f]=(0,A.useState)(null),[p,m]=(0,A.useState)(!1),[h,_]=(0,A.useState)(e.start_year),[v,y]=(0,A.useState)(1),b=S(`GET`,`/planner-courses`,{enabled:p,apiPrefix:`/api`,apiPath:`/courses`,select:e=>ee.parse(e)});(0,A.useEffect)(()=>{_(e.start_year)},[e]);let x=b.query.data?.find(e=>e.id===d)??null,C=x===null?`none`:je(e,x);return l(Le,{"aria-labelledby":`planner-course-search-title`,children:[c(R,{id:`planner-course-search-title`,children:a(`planner.search.title`)}),l(Re,{onSubmit:e=>{e.preventDefault(),s.trim()!==``&&(b.setParams({keyword:s.trim(),offset:0,limit:20}),m(!0))},children:[c(F,{"aria-label":a(`planner.search.keyword`),value:s,onChange:e=>u(e.target.value),placeholder:a(`planner.search.placeholder`)}),c(N,{$primary:!0,type:`submit`,disabled:n,children:a(`planner.actions.search`)})]}),c(ze,{children:b.query.data?.map(e=>l(Be,{type:`button`,$selected:e.id===d,"aria-pressed":e.id===d,onClick:()=>f(e.id),children:[c(Ve,{children:e.old_code}),o.resolvedLanguage===`en`?e.title_en:e.title]},e.id))}),l(He,{children:[l(L,{children:[a(`planner.grid.targetYear`),c(I,{value:h,onChange:e=>_(Number(e.target.value)),children:Array.from({length:e.end_year-e.start_year+1},(t,n)=>e.start_year+n).map(e=>c(`option`,{value:e,children:e},e))})]}),l(L,{children:[a(`planner.grid.targetSemester`),c(I,{value:v,onChange:e=>y(g.parse(Number(e.target.value))),children:We.map(e=>c(`option`,{value:e,children:a(`planner.semesters.${e}`)},e))})]})]}),C===`future`?c(P,{role:`status`,"aria-live":`polite`,children:a(`planner.search.duplicate`)}):c(N,{$primary:!0,type:`button`,disabled:n||x===null,onClick:()=>{if(x===null)return;let e=C===`taken`&&window.confirm(a(`planner.search.takenDuplicateConfirm`));C===`taken`&&!e||r(x,h,v,{excludeTakenDuplicates:e})},children:a(`planner.actions.addCourse`)}),c(Ue,{}),c(Ie,{departments:t,defaultDepartmentId:e.major_track.department.id,year:h,semester:v,busy:n,onAdd:i})]})}var Ke=d.aside`
    position: sticky;
    top: 0;
    display: flex;
    align-self: start;
    width: 240px;
    max-height: calc(100dvh - 80px);
    min-height: 0;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border-radius: 12px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    box-shadow: ${({theme:e})=>e.elevation.surface};

    ${k.tablet} {
        position: static;
        width: 100%;
        max-height: none;
        align-self: stretch;
        flex: 0 0 auto;
        padding: 12px;
    }
`,qe=d.div`
    display: flex;
    min-height: 0;
    flex-direction: column;
    gap: 6px;
    overflow-y: auto;

    ${k.tablet} {
        flex-direction: row;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-snap-type: x proximity;
    }
`,Je=d.button`
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

    ${k.tablet} {
        flex: 0 0 150px;
        scroll-snap-align: start;
    }
`;function Ye({planners:e,selectedPlannerId:t,busy:n,onSelect:r,onCreate:i,onDelete:a,onReorder:o}){let{t:s}=D(),u=e.findIndex(e=>e.id===t);return l(Ke,{"aria-label":s(`planner.list.title`),children:[c(R,{children:s(`planner.list.title`)}),l(qe,{children:[e.map((e,n)=>c(Je,{$selected:e.id===t,"aria-pressed":e.id===t,onClick:()=>r(e.id),children:s(`planner.list.item`,{index:n+1})},e.id)),e.length===0&&c(O,{type:`Small`,color:`Text.placeholder`,children:s(`planner.list.empty`)})]}),l(f,{direction:`row`,gap:6,align:`stretch`,children:[c(N,{$primary:!0,disabled:n,onClick:()=>void i(!1),"aria-label":s(`planner.actions.create`),children:c(E,{size:16,color:`inherit`,children:c(ie,{})})}),c(N,{disabled:n||t===null,onClick:()=>void i(!0),"aria-label":s(`planner.actions.copy`),children:c(E,{size:16,color:`inherit`,children:c(ae,{})})}),c(N,{disabled:n||u<=0,onClick:()=>void o(-1),"aria-label":s(`planner.actions.moveUp`),children:c(E,{size:16,color:`inherit`,children:c(se,{})})}),c(N,{disabled:n||u<0||u>=e.length-1,onClick:()=>void o(1),"aria-label":s(`planner.actions.moveDown`),children:c(E,{size:16,color:`inherit`,children:c(oe,{})})}),c(N,{$danger:!0,disabled:n||t===null,onClick:()=>{window.confirm(s(`planner.actions.deleteConfirm`))&&a()},"aria-label":s(`planner.actions.delete`),children:c(E,{size:16,color:`inherit`,children:c(M,{})})})]})]})}function Xe(e){return e.item_type===`TAKEN`?e.lecture.credit:e.item_type===`FUTURE`?e.course.credit:e.credit}function Ze(e){return e.item_type===`TAKEN`?e.lecture.credit_au:e.item_type===`FUTURE`?e.course.credit_au:e.credit_au}function Qe(e){return e.item_type===`TAKEN`?e.lecture.type_en:e.item_type===`FUTURE`?e.course.type_en:e.type_en}function $e(e){return e.item_type===`TAKEN`?e.lecture.department_code:e.item_type===`FUTURE`?e.course.department.code:e.department?.code??null}function Y(e=0){return{taken:0,planned:0,required:e}}function X(e,t,n){e[t]+=n}function et(e){let t=e.additional_tracks.find(e=>e.type===`ADVANCED`),n={key:`PRIMARY:${e.major_track.department.code}`,type:t===void 0?`PRIMARY`:`ADVANCED`,department:e.major_track.department,required:Y(e.major_track.major_required+(t?.major_required??0)),elective:Y(e.major_track.major_elective+(t?.major_elective??0))},r={DOUBLE:0,MINOR:1,INTERDISCIPLINARY:2};return[n,...e.additional_tracks.filter(e=>e.type!==`ADVANCED`).sort((e,t)=>r[e.type]-r[t.type]).map(e=>({key:`${e.type}:${e.department?.code??e.id}`,type:e.type,department:e.department,required:Y(e.major_required),elective:Y(e.major_elective)}))]}function tt(e){let t=Math.max(0,e.required.taken-e.required.required);e.required.taken-=t,e.elective.taken+=t;let n=Math.max(0,e.required.required-e.required.taken),r=Math.max(0,e.required.planned-n);e.required.planned-=r,e.elective.planned+=r}function nt(e){let t=e.additional_tracks.some(e=>e.type===`DOUBLE`),n={credit:Y(e.general_track.total_credit),au:Y(e.general_track.total_au)},r=Y(e.general_track.basic_required),i=Y(t?e.major_track.basic_elective_doublemajor:e.general_track.basic_elective),a=Y(t?e.general_track.thesis_study_doublemajor:e.general_track.thesis_study),o={credit:Y(e.general_track.general_required_credit),au:Y(e.general_track.general_required_au)},s=Y(t?e.general_track.humanities_doublemajor:e.general_track.humanities),c=Y(),l=et(e),u=[...e.taken_items,...e.future_items,...e.arbitrary_items];for(let e of u){if(e.is_excluded)continue;let t=e.item_type===`TAKEN`?`taken`:`planned`,u=Xe(e),d=Ze(e);X(n.credit,t,u),X(n.au,t,d);let f=Qe(e);if(f===`Basic Required`)X(r,t,u);else if(f===`Basic Elective`)X(i,t,u);else if(f===`Thesis Study(Undergraduate)`)X(a,t,u);else if(f===`Individual Study`)X(c,t,u);else if(f===`General Required`||f===`Mandatory General Courses`)X(o.credit,t,u),X(o.au,t,d);else if(f.startsWith(`Humanities & Social Elective`))X(s,t,u);else if(f===`Major Required`||f===`Major Elective`||f===`Elective(Graduate)`){let n=$e(e),r=l.find(e=>e.department?.code===n);X(r===void 0?c:f===`Major Required`?r.required:r.elective,t,u)}else X(c,t,u)}return l.forEach(tt),{total:n,basicRequired:r,basicElective:i,thesisStudy:a,generalRequired:o,humanities:s,other:c,majors:l}}var rt=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
    gap: 8px;
`,it=d.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
`,at=d.span`
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,Z=d.span`
    white-space: nowrap;
`,ot=d.strong`
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
`,st=d.div`
    height: 5px;
    margin-top: auto;
    overflow: hidden;
    border-radius: 999px;
    background: ${({theme:e})=>e.colors.Line.default};
`,ct=d.div`
    width: ${({$ratio:e})=>`${Math.min(100,Math.max(0,e*100))}%`};
    height: 100%;
    background: ${({theme:e})=>e.colors.Highlight.default};
`;function Q({label:e,progress:t,unit:n}){let{t:r}=D(),i=t.taken+t.planned,a=t.required===0?0:i/t.required;return l(it,{children:[c(at,{children:e}),l(ot,{children:[i,` / `,t.required,` `,n]}),c(at,{children:r(`planner.summary.breakdown`,{taken:t.taken,planned:t.planned})}),c(st,{"aria-hidden":`true`,children:c(ct,{$ratio:a})})]})}function lt({planner:e}){let{t,i18n:n}=D(),r=nt(e),i=t(`planner.summary.units.credit`),a=t(`planner.summary.units.au`),o=[[`totalCredit`,r.total.credit,i],[`totalAu`,r.total.au,a],[`basicRequired`,r.basicRequired,i],[`basicElective`,r.basicElective,i],[`thesisStudy`,r.thesisStudy,i],[`generalRequiredCredit`,r.generalRequired.credit,i],[`generalRequiredAu`,r.generalRequired.au,a],[`humanities`,r.humanities,i],[`other`,r.other,i]];return l(`section`,{"aria-labelledby":`planner-summary-title`,children:[c(R,{id:`planner-summary-title`,children:t(`planner.summary.title`)}),c(P,{role:`note`,children:t(`planner.summary.disclaimer`)}),l(rt,{children:[o.map(([e,n,r])=>c(Q,{label:t(`planner.summary.categories.${e}`),progress:n,unit:r},e)),r.majors.flatMap(e=>{let r=e.department?n.resolvedLanguage===`en`?e.department.name_en:e.department.name:null,a=t(`planner.trackTypes.${e.type}`),o=e=>l(u,{children:[r!==null&&l(u,{children:[c(Z,{children:r}),` · `]}),c(Z,{children:a}),` · `,c(Z,{children:e})]});return[c(Q,{label:o(t(`planner.summary.categories.majorRequired`)),progress:e.required,unit:i},`${e.key}:required`),c(Q,{label:o(t(`planner.summary.categories.majorElective`)),progress:e.elective,unit:i},`${e.key}:elective`)]})]})]})}var ut=d.article`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 6px;
    padding: 10px;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    opacity: ${({$excluded:e})=>e?.55:1};
`,dt=d.strong`
    overflow: hidden;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ft=d.span`
    color: ${({theme:e})=>e.colors.Text.placeholder};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,pt=d.span`
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
`,mt=d.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ht=[1,2,3,4];function gt(e){return e.item_type===`TAKEN`?{credit:e.lecture.credit,creditAU:e.lecture.credit_au}:e.item_type===`FUTURE`?{credit:e.course.credit,creditAU:e.course.credit_au}:{credit:e.credit,creditAU:e.credit_au}}function _t({planner:e,item:t,title:n,code:r,busy:i,onUpdate:a,onRemove:o}){let{t:s}=D(),d=gt(t);return l(ut,{$excluded:t.is_excluded,children:[c(dt,{title:n,children:n}),l(ft,{children:[r,` · `,d.credit,s(`planner.items.credits`),d.creditAU>0&&l(u,{children:[` · `,d.creditAU,` `,s(`planner.items.au`)]}),Me(e,t)&&c(pt,{"aria-label":s(`planner.items.duplicate`),title:s(`planner.items.duplicate`),children:`!`})]}),l(mt,{children:[c(N,{type:`button`,disabled:i,onClick:()=>void a(t,{isExcluded:!t.is_excluded}),children:s(t.is_excluded?`planner.actions.include`:`planner.actions.exclude`)}),t.item_type!==`TAKEN`&&c(I,{"aria-label":s(`planner.actions.changeSemester`),value:t.semester,disabled:i,onChange:e=>void a(t,{semester:g.parse(Number(e.target.value))}),children:ht.map(e=>c(`option`,{value:e,children:s(`planner.semesters.${e}`)},e))}),t.item_type!==`TAKEN`&&c(N,{$danger:!0,type:`button`,disabled:i,"aria-label":s(`planner.actions.removeItem`),onClick:()=>{window.confirm(s(`planner.actions.removeItemConfirm`))&&o(t)},children:c(E,{size:14,color:`inherit`,children:c(M,{})})})]})]})}var vt=d.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,yt=d.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,bt=d.h3`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.NormalBold.fontSize}px;
`,xt=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(210px, 100%), 1fr));
    gap: 8px;

    ${k.tablet} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${k.mobile} {
        grid-template-columns: minmax(0, 1fr);
    }
`,St=d.div`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
`,Ct=d.h4`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.SmallBold.fontSize}px;
`,wt=d.span`
    color: ${({theme:e})=>e.colors.Text.disable};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,Tt=[1,2,3,4];function Et(e){return e.item_type===`TAKEN`?e.lecture.year:e.year}function Dt(e){return e.item_type===`TAKEN`?e.lecture.semester:e.semester}function Ot({planner:e,busy:t,onUpdate:n,onRemove:r}){let{t:i,i18n:a}=D(),o=[...e.taken_items,...e.future_items,...e.arbitrary_items],s=Array.from({length:e.end_year-e.start_year+1},(t,n)=>e.start_year+n),u=e=>e.item_type===`ARBITRARY`?a.resolvedLanguage===`en`?e.type_en:e.type:a.resolvedLanguage===`en`?e.course.title_en:e.course.title,d=e=>e.item_type===`ARBITRARY`?i(`planner.items.arbitrary`):e.course.old_code;return l(`section`,{"aria-labelledby":`semester-grid-title`,children:[c(R,{id:`semester-grid-title`,children:i(`planner.grid.title`)}),c(vt,{children:s.map(a=>l(yt,{children:[c(bt,{children:i(`planner.grid.year`,{year:a})}),c(xt,{children:Tt.map(s=>{let f=o.filter(e=>Et(e)===a&&Dt(e)===s);return l(St,{children:[c(Ct,{children:i(`planner.semesters.${s}`)}),f.map(i=>c(_t,{planner:e,item:i,title:u(i),code:d(i),busy:t,onUpdate:n,onRemove:r},i.id)),f.length===0&&c(wt,{children:i(`planner.grid.empty`)})]},s)})})]},a))})]})}function kt({planner:e,tracks:t,busy:n,onSave:r}){let{t:i,i18n:a}=D(),o=new Date().getFullYear(),s=e.end_year-e.start_year+1,[u,d]=(0,A.useState)(e.start_year),[p,m]=(0,A.useState)(G.includes(s)?s:4),[h,g]=(0,A.useState)(e.general_track.id),[_,v]=(0,A.useState)(e.major_track.id),[y,b]=(0,A.useState)(e.additional_tracks.map(e=>e.id));(0,A.useEffect)(()=>{let t=e.end_year-e.start_year+1;d(e.start_year),m(G.includes(t)?t:4),g(e.general_track.id),v(e.major_track.id),b(e.additional_tracks.map(e=>e.id))},[e]);let x=(0,A.useMemo)(()=>{let t=Se(o);return e.start_year>=2e3&&e.start_year<=o?[...new Set([e.start_year,...t])].sort((e,t)=>e-t):t},[o,e.start_year]),S=t.general.filter(e=>e.end_year>=2020||e.id===h),ee=t.major.filter(e=>e.end_year>=2020||e.id===_),C=t.additional.filter(e=>e.end_year>=2020||y.includes(e.id)),w=e=>a.resolvedLanguage===`en`?e.name_en:e.name;return l(ce,{onSubmit:n=>{n.preventDefault();let a=t.general.find(e=>e.id===h),o=t.major.find(e=>e.id===_);if(a===void 0||o===void 0)return;let s=t.additional.filter(e=>y.includes(e.id)),c=Ee(s,o);if(c!==null){window.alert(i(`planner.settings.errors.${c}`));return}let l={startYear:u,endYear:u+p-1,generalTrack:a,majorTrack:o,additionalTracks:s},d=De(e,l.startYear,l.endYear);if(d>0&&!window.confirm(i(`planner.settings.confirmRange`,{startYear:l.startYear,endYear:l.endYear,count:d})))return;let f=Oe(l);f>0&&!window.confirm(i(`planner.settings.confirmIncompatible`,{startYear:l.startYear,count:f}))||r(l)},children:[c(R,{children:i(`planner.settings.title`)}),l(le,{children:[l(L,{children:[i(`planner.settings.startYear`),c(I,{value:u,onChange:e=>d(Number(e.target.value)),children:x.map(e=>c(`option`,{value:e,children:e},e))})]}),l(L,{children:[i(`planner.settings.duration`),c(I,{value:p,onChange:e=>m(Number(e.target.value)),children:G.map(e=>c(`option`,{value:e,children:i(`planner.settings.durationYears`,{count:e})},e))})]}),l(L,{children:[i(`planner.settings.generalTrack`),c(I,{value:h,onChange:e=>g(Number(e.target.value)),children:S.map(e=>c(`option`,{value:e.id,disabled:!K(e,u),children:e.is_foreign?i(`planner.settings.foreign`):i(`planner.settings.domestic`)},e.id))})]}),l(L,{children:[i(`planner.settings.majorTrack`),c(I,{value:_,onChange:e=>v(Number(e.target.value)),children:ee.map(e=>c(`option`,{value:e.id,disabled:!K(e,u),children:w(e.department)},e.id))})]})]}),l(L,{children:[i(`planner.settings.additionalTracks`),c(I,{multiple:!0,size:6,value:y.map(String),onChange:e=>b(Array.from(e.target.selectedOptions,e=>Number(e.value))),children:C.map(n=>l(`option`,{value:n.id,disabled:Te(n,u,t.major.find(e=>e.id===_)??e.major_track),children:[i(`planner.trackTypes.${n.type}`),n.department===null?``:` · ${w(n.department)}`]},n.id))})]}),c(f,{direction:`row`,justify:`flex-end`,gap:8,children:c(N,{$primary:!0,type:`submit`,disabled:n,children:i(`planner.actions.save`)})})]})}var At=d.main`
    display: grid;
    min-height: 0;
    flex: 1 0 auto;
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 12px;
    padding: 0 20px 20px;

    ${k.tablet} {
        grid-template-columns: minmax(0, 1fr);
        padding: 0 8px 12px;
    }
`,jt=d.div`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 12px;
`,$=d(ne)`
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    align-items: stretch;
    padding: 16px;

    ${k.mobile} {
        padding: 12px;
    }
`,Mt=d.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    ${k.laptop} {
        grid-template-columns: minmax(0, 1fr);
    }
`,Nt=d(ne)`
    min-height: 240px;
    padding: 24px;
`,Pt=s(function(){let{t:e}=D(),t=Ae();(0,A.useEffect)(()=>{m(`Page View`,{page:`Planner`})},[]);let n=(0,A.useMemo)(()=>{let e=[...t.tracks?.major.map(e=>e.department)??[],...t.tracks?.additional.flatMap(e=>e.department===null?[]:[e.department])??[]];return e.filter((t,n)=>e.findIndex(e=>e.id===t.id)===n)},[t.tracks]);return t.isLoading?c(At,{children:l(Nt,{direction:`column`,align:`center`,justify:`center`,gap:12,children:[c(re,{}),c(O,{type:`Normal`,color:`Text.placeholder`,children:e(`planner.status.loading`)})]})}):l(At,{children:[c(Ye,{planners:t.planners,selectedPlannerId:t.selectedPlannerId,busy:t.isBusy,onSelect:t.setSelectedPlannerId,onCreate:t.createPlanner,onDelete:t.deletePlanner,onReorder:t.reorderPlanner}),l(jt,{children:[t.error!==null&&t.error!==void 0&&l($,{direction:`column`,gap:6,children:[c(O,{type:`NormalBold`,color:`Highlight.dark`,children:e(`planner.status.error`)}),c(O,{type:`Small`,color:`Text.light`,children:t.error.message})]}),t.selectedPlanner===null||t.tracks===void 0?l(Nt,{direction:`column`,align:`center`,justify:`center`,gap:12,children:[c(O,{type:`BiggerBold`,color:`Text.default`,children:e(`planner.empty.title`)}),c(O,{type:`Normal`,color:`Text.placeholder`,children:e(`planner.empty.description`)}),c(N,{$primary:!0,disabled:t.isBusy||t.tracks===void 0,onClick:()=>void t.createPlanner(!1),children:e(`planner.actions.create`)})]}):l(u,{children:[l(Mt,{children:[c($,{direction:`column`,gap:12,children:c(kt,{planner:t.selectedPlanner,tracks:t.tracks,busy:t.isBusy,onSave:t.updateTracks})}),c($,{direction:`column`,gap:12,children:c(lt,{planner:t.selectedPlanner})})]}),c($,{direction:`column`,gap:12,children:c(Ge,{planner:t.selectedPlanner,departments:n,busy:t.isBusy,onAddFuture:t.addFuture,onAddArbitrary:t.addArbitrary})}),c($,{direction:`column`,gap:12,children:c(Ot,{planner:t.selectedPlanner,busy:t.isBusy,onUpdate:t.updateItem,onRemove:t.removeItem})})]})]})]})});export{Pt as default};
//# sourceMappingURL=planner-BTZnOuRk.js.map