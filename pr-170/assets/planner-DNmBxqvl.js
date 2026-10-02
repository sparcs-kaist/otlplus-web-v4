(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`3b0e1d5e696915030a0b6d616c1263ff2f429d72`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`057c6bbe-1495-40f0-9557-ee2b81bf63b4`,e._sentryDebugIdIdentifier=`sentry-dbid-057c6bbe-1495-40f0-9557-ee2b81bf63b4`)}catch{}})();import{D as e,S as t,n,r,t as i,x as a}from"./emotion-react-jsx-runtime.browser.esm-CEJANohN.js";import{b as o,g as s,v as c,y as l}from"./sentryEventFilter-DP6gObfd.js";import{A as u}from"./chunk-62JRHF6Z-CyWtaSqr.js";import{t as d}from"./emotion-styled.browser.esm-CAIppcGC.js";import{i as f,y as p}from"./axios-BShiDBOC.js";import{C as m,S as h,a as g,b as _,i as v,o as y,s as b,t as x,u as S,v as C,x as w,y as T}from"./useAPI-B9jV7FdJ.js";import{r as E,t as D}from"./Icon-DD8doI0X.js";import{t as O}from"./useTranslation-BLURkQ_K.js";import{t as k}from"./Typography-DA1kh1cX.js";import{t as A}from"./FlexWrapper-CUG6HLLC.js";import{t as j}from"./media-B4tpoFOq.js";import{t as ee}from"./featureFlags-D-EErQe_.js";import{t as te}from"./Widget-BoZqAEj_.js";import{t as ne}from"./LoadingCircle-Db2xZeW7.js";import{t as re}from"./Add-69IOEXp5.js";import{t as ie}from"./ContentCopy-D4zQmPug.js";import{t as ae}from"./KeyboardArrowDown-Cc-DDQAW.js";var M=e(t(),1),oe=e(a(),1),N=E((0,oe.jsx)(`path`,{d:`M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z`}),`DeleteOutlined`),se=E((0,oe.jsx)(`path`,{d:`M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z`}),`KeyboardArrowUp`),P=d.button`
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

    ${j.mobile} {
        min-width: 44px;
        min-height: 44px;
    }
`,F=d.div`
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
`,I=d.input`
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
`,L=d.select`
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
`,R=d.label`
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
`,z=d.h2`
    margin: 0;
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
    line-height: ${({theme:e})=>e.fonts.Big.lineHeight}px;
`;function ue(e){let t=e.getFullYear(),n=e.getMonth()+1;return n>=3&&n<=6?{year:t,semester:1}:n>=7&&n<=8?{year:t,semester:2}:n>=9?{year:t,semester:3}:{year:t-1,semester:4}}function B(e,t){let n=ue(t);return e.year===n.year?e.semester<n.semester:e.year<n.year}function de(e){let t=0;for(let n of e){t=Math.min(t,n.id);for(let e of[...n.taken_items,...n.future_items,...n.arbitrary_items])t=Math.min(t,e.id)}return t-1}function fe(e=[]){let t=de(e);return{next:()=>{let e=t;return--t,e},reserve:e=>{t=Math.min(t,de(e))}}}function pe(e,t,n){let r=e=>({...e,id:t()});return{id:t(),start_year:e.startYear,end_year:e.endYear,general_track:e.generalTrack,major_track:e.majorTrack,additional_tracks:[...e.additionalTracks],taken_items:n?.taken_items.map(r)??[],future_items:n?.future_items.map(r)??[],arbitrary_items:n?.arbitrary_items.map(r)??[],arrange_order:0}}function V(e,t,n){return e.map(e=>e.id===t?n(e):e)}function me(e,t,n){let r=[...e].sort((e,t)=>e.arrange_order-t.arrange_order),i=r.findIndex(e=>e.id===t),a=i+n;if(i<0||a<0||a>=r.length)return r;let o=r[i],s=r[a];return o===void 0||s===void 0?r:(r[i]={...s,arrange_order:i},r[a]={...o,arrange_order:a},r)}function he(e,t,n){let r=e=>{if(e.id!==t.id)return e;let r=n.isExcluded??e.is_excluded;return e.item_type===`TAKEN`||n.semester===void 0?{...e,is_excluded:r}:{...e,semester:n.semester,is_excluded:r}};return{...e,taken_items:e.taken_items.map(r),future_items:e.future_items.map(r),arbitrary_items:e.arbitrary_items.map(r)}}function ge(e,t){return t.item_type===`TAKEN`?e:{...e,future_items:e.future_items.filter(e=>e.id!==t.id),arbitrary_items:e.arbitrary_items.filter(e=>e.id!==t.id)}}var _e=`otlplus.planner.local`,ve=l({version:s(1),planners:w}).strict(),ye=l({version:c().int().nonnegative()}).passthrough();function be(e){try{return e.localStorage}catch{return null}}function xe(e,t){try{return e.removeItem(t),!0}catch{return!1}}function Se(e){if(e===null)return!1;try{let t=ye.safeParse(JSON.parse(e));return t.success&&t.data.version>1}catch{return!1}}function Ce(e,t,n){let r=w.safeParse(n);if(!r.success)return!1;try{return!Se(e.getItem(t))&&(e.setItem(t,JSON.stringify({version:1,planners:r.data})),!0)}catch{return!1}}function we(e,t){let n;try{n=e.getItem(t)}catch{return{status:`unavailable`}}if(n===null)return{status:`loaded`,planners:[]};let r;try{r=JSON.parse(n)}catch{return xe(e,t)?{status:`loaded`,planners:[]}:{status:`unavailable`}}let i=ve.safeParse(r);if(i.success)return{status:`loaded`,planners:i.data.planners};let a=ye.safeParse(r);if(a.success&&a.data.version>1)return{status:`unsupported-version`};let o=w.safeParse(r);return o.success?(Ce(e,t,o.data),{status:`loaded`,planners:o.data}):xe(e,t)?{status:`loaded`,planners:[]}:{status:`unavailable`}}function Te(e){return{id:e.id,old_code:e.old_code,old_old_code:e.old_old_code,department:e.department,type:e.type,type_en:e.type_en,title:e.title,title_en:e.title_en,summary:e.summary,review_total_weight:e.review_total_weight,credit:e.credit,credit_au:e.credit_au,num_classes:e.num_classes,num_labs:e.num_labs}}var Ee=l({year:c().int(),semester:h,department:_,type:o().min(1),typeEn:o().min(1),credit:c().int().nonnegative(),creditAU:c().int().nonnegative()}).strict();function De(e){let t=`/users/${e.userId}/planners/${e.selectedPlannerId??0}`,n=x(`POST`,`${t}/add-future-item`,{apiPrefix:`/api`}).mutation,r=x(`POST`,`${t}/add-arbitrary-item`,{apiPrefix:`/api`}).mutation,i=x(`POST`,`${t}/remove-item`,{apiPrefix:`/api`}).mutation,a=x(`POST`,`${t}/update-item`,{apiPrefix:`/api`}).mutation,o=(0,M.useCallback)(async(t,r,i,o)=>{if(e.selectedPlanner===null)return;let s=e.selectedPlanner.id;if(e.isAuthenticated){if(v.parse(await n.mutateAsync({course:t.id,year:r,semester:i})),o?.excludeTakenDuplicates){let n=e.selectedPlanner.taken_items.filter(e=>!e.is_excluded&&e.course.id===t.id);await Promise.all(n.map(e=>a.mutateAsync({item:e.id,item_type:e.item_type,is_excluded:!0})))}await e.refresh();return}let c=e.allocateLocalId();e.setLocalPlanners(e=>V(e,s,e=>({...e,taken_items:o?.excludeTakenDuplicates?e.taken_items.map(e=>!e.is_excluded&&e.course.id===t.id?{...e,is_excluded:!0}:e):e.taken_items,future_items:[...e.future_items,{id:c,item_type:`FUTURE`,is_excluded:!1,year:r,semester:i,course:Te(t)}]})))},[n,e,a]),s=(0,M.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=Ee.safeParse(t);if(!n.success)return;let i=n.data,a=e.selectedPlanner.id;if(i.year<e.selectedPlanner.start_year||i.year>e.selectedPlanner.end_year)return;if(e.isAuthenticated){C.parse(await r.mutateAsync({year:i.year,semester:i.semester,department:i.department.id,type:i.type,type_en:i.typeEn,credit:i.credit,credit_au:i.creditAU})),await e.refresh();return}let o=e.allocateLocalId();e.setLocalPlanners(e=>V(e,a,e=>({...e,arbitrary_items:[...e.arbitrary_items,{id:o,item_type:`ARBITRARY`,is_excluded:!1,year:i.year,semester:i.semester,department:i.department,type:i.type,type_en:i.typeEn,credit:i.credit,credit_au:i.creditAU}]})))},[r,e]),c=(0,M.useCallback)(async(t,n)=>{if(e.selectedPlanner===null)return;let r=e.selectedPlanner.id;if(e.isAuthenticated){y.parse(await a.mutateAsync({item:t.id,item_type:t.item_type,semester:n.semester,is_excluded:n.isExcluded})),await e.refresh();return}e.setLocalPlanners(e=>V(e,r,e=>he(e,t,n)))},[e,a]),l=(0,M.useCallback)(async t=>{if(e.selectedPlanner===null||t.item_type===`TAKEN`)return;let n=e.selectedPlanner.id;if(e.isAuthenticated){g.parse(await i.mutateAsync({item:t.id,item_type:t.item_type})),await e.refresh();return}e.setLocalPlanners(e=>V(e,n,e=>ge(e,t)))},[e,i]),u=[n,r,i,a];return{addFuture:o,addArbitrary:s,updateItem:c,removeItem:l,isBusy:u.some(e=>e.isPending),error:u.find(e=>e.error)?.error}}var H=[4,5,6,7,8];function U(e,t){return e.start_year<=t&&t<=e.end_year}function Oe(e){return Array.from({length:Math.max(0,e-2015+1)},(e,t)=>t+2015)}function ke(e,t){if(e===void 0)return null;let n=Number(String(e).slice(0,4));return Number.isInteger(n)&&n>=2e3&&n<=t?n:null}function Ae(e,t,n){if(e===void 0)return null;let r=ke(t?.studentNumber,n)??n,i=e.general.filter(e=>U(e,r)),a=i.find(e=>!e.is_foreign)??i[0],o=e.major.filter(e=>U(e,r)),s=new Set(t?.majorDepartments?.map(e=>e.code)),c=o.find(e=>s.has(e.department.code))??o[0];return a===void 0||c===void 0?null:{startYear:r,endYear:r+3,generalTrack:a,majorTrack:c,additionalTracks:[]}}function je(e,t,n){if(!U(e,t))return!0;let r=e.department?.code;switch(e.type){case`DOUBLE`:case`MINOR`:return r===n.department.code;case`ADVANCED`:return r!==n.department.code;case`INTERDISCIPLINARY`:return!1}}function Me(e,t){let n=new Map,r=0,i=0;for(let a of e){let e=a.department?.code;if((a.type===`DOUBLE`||a.type===`MINOR`)&&e!==void 0){if(e===t.department.code)return`sameAsPrimary`;let r=(n.get(e)??0)+1;if(n.set(e,r),r>1)return`duplicateDepartment`}if(a.type===`ADVANCED`){if(r+=1,e!==t.department.code)return`advancedDepartment`;if(r>1)return`multipleAdvanced`}if(a.type===`INTERDISCIPLINARY`&&(i+=1,i>1))return`multipleInterdisciplinary`}return null}function Ne(e,t,n){let r=e=>e<t||e>n;return e.taken_items.filter(e=>r(e.lecture.year)).length+e.future_items.filter(e=>r(e.year)).length+e.arbitrary_items.filter(e=>r(e.year)).length}function Pe(e){return[e.generalTrack,e.majorTrack,...e.additionalTracks].filter(t=>!U(t,e.startYear)).length}function Fe(e){let t=x(`POST`,`/users/${e.userId}/planners`,{apiPrefix:`/api`}).mutation,n=`/users/${e.userId}/planners/${e.selectedPlannerId??0}`,r=x(`PATCH`,n,{apiPrefix:`/api`}).mutation,i=x(`DELETE`,n,{apiPrefix:`/api`}).mutation,a=x(`POST`,`${n}/reorder`,{apiPrefix:`/api`}).mutation,o=(0,M.useCallback)(()=>Ae(e.tracks,e.user,new Date().getFullYear()),[e.tracks,e.user]),s=(0,M.useCallback)(async n=>{let r=n?e.selectedPlanner:null,i=r?{startYear:r.start_year,endYear:r.end_year,generalTrack:r.general_track,majorTrack:r.major_track,additionalTracks:r.additional_tracks}:o();if(i===null)return;if(!e.isAuthenticated){let t=pe(i,e.allocateLocalId,r??void 0);e.setLocalPlanners(e=>[...e,{...t,arrange_order:e.length}]),e.setSelectedPlannerId(t.id);return}let a=g.parse(await t.mutateAsync({start_year:i.startYear,end_year:i.endYear,general_track:i.generalTrack.id,major_track:i.majorTrack.id,additional_tracks:i.additionalTracks.map(e=>e.id),should_update_taken_semesters:r===null||void 0,taken_items_to_copy:r?.taken_items.map(e=>e.id)??[],future_items_to_copy:r?.future_items.map(e=>e.id)??[],arbitrary_items_to_copy:r?.arbitrary_items.map(e=>e.id)??[]}));await e.refresh(),e.setSelectedPlannerId(a.id)},[t,o,e]),c=(0,M.useCallback)(async()=>{if(e.selectedPlanner===null)return;let t=e.selectedPlanner.id;e.isAuthenticated?(await i.mutateAsync({}),await e.refresh()):e.setLocalPlanners(e=>e.filter(e=>e.id!==t)),e.setSelectedPlannerId(null)},[i,e]),l=(0,M.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=e.selectedPlanner.id;if(e.isAuthenticated){let n=g.parse(await r.mutateAsync({start_year:t.startYear,end_year:t.endYear,general_track:t.generalTrack.id,major_track:t.majorTrack.id,additional_tracks:t.additionalTracks.map(e=>e.id),should_update_taken_semesters:!0}));e.setSelectedPlannerId(n.id),await e.refresh();return}e.setLocalPlanners(e=>V(e,n,e=>({...e,start_year:t.startYear,end_year:t.endYear,general_track:t.generalTrack,major_track:t.majorTrack,additional_tracks:[...t.additionalTracks],taken_items:e.taken_items.filter(e=>e.lecture.year>=t.startYear&&e.lecture.year<=t.endYear),future_items:e.future_items.filter(e=>e.year>=t.startYear&&e.year<=t.endYear),arbitrary_items:e.arbitrary_items.filter(e=>e.year>=t.startYear&&e.year<=t.endYear)})))},[e,r]),u=(0,M.useCallback)(async t=>{if(e.selectedPlanner===null)return;let n=e.selectedPlanner.id,r=e.selectedPlanner.arrange_order+t;if(!(r<0||r>=e.planners.length)){if(e.isAuthenticated){T.parse(await a.mutateAsync({arrange_order:r})),await e.refresh();return}e.setLocalPlanners(e=>me(e,n,t))}},[e,a]),d=[t,r,i,a];return{createPlanner:s,deletePlanner:c,updateTracks:l,reorderPlanner:u,isBusy:d.some(e=>e.isPending),error:d.find(e=>e.error)?.error}}function Ie(){let{status:e,user:t}=f(),n=e===`success`&&t!==null,r=t?.id??0,[i,a]=(0,M.useState)([]),[o,s]=(0,M.useState)(`hydrating`),[c,l]=(0,M.useState)(null),u=(0,M.useRef)(fe()),d=x(`GET`,`/tracks`,{select:e=>m.parse(e),apiPrefix:`/api`}).query,p=x(`GET`,`/users/${r}/planners`,{enabled:n,select:e=>b.parse(e),apiPrefix:`/api`}).query;(0,M.useEffect)(()=>{let e=be(window);if(e===null){s(`unavailable`);return}let t=we(e,_e);if(t.status!==`loaded`){s(`unavailable`);return}a(t.planners),u.current.reserve(t.planners),s(`available`)},[]),(0,M.useEffect)(()=>{if(o!==`available`)return;let e=be(window);(e===null||!Ce(e,`otlplus.planner.local`,i))&&s(`unavailable`)},[i,o]);let h=(0,M.useMemo)(()=>[...n?p.data??[]:i].sort((e,t)=>e.arrange_order-t.arrange_order),[n,i,p.data]),g=h.find(e=>e.id===c)??h[0]??null;(0,M.useEffect)(()=>{g!==null&&g.id!==c&&l(g.id)},[g,c]);let _=(0,M.useCallback)(async()=>{n&&await p.refetch()},[n,p]),v={userId:r,isAuthenticated:n,selectedPlanner:g,selectedPlannerId:c,setLocalPlanners:a,allocateLocalId:u.current.next,refresh:_},y=Fe({...v,user:t,planners:h,tracks:d.data,setSelectedPlannerId:l}),S=De(v);return{planners:h,selectedPlanner:g,selectedPlannerId:c,setSelectedPlannerId:l,tracks:d.data,isLoading:d.isLoading||o===`hydrating`||n&&p.isLoading,isBusy:y.isBusy||S.isBusy,error:d.error??p.error??y.error??S.error,createPlanner:y.createPlanner,deletePlanner:y.deletePlanner,updateTracks:y.updateTracks,reorderPlanner:y.reorderPlanner,addFuture:S.addFuture,addArbitrary:S.addArbitrary,updateItem:S.updateItem,removeItem:S.removeItem}}var W={basicRequired:`기초필수`,basicElective:`기초선택`,majorRequired:`전공필수`,majorElective:`전공선택`,thesisStudy:`졸업연구`,generalRequired:`교양필수`,humanities:`인문사회선택`,freeElective:`자유선택`};function Le(e,t){return t===null?[...e]:e.filter(e=>e.type===t)}function G(e){return e.title.includes(`특강`)||e.title_en.includes(`Special Lectures`)||e.title_en.includes(`Special Topics`)}function Re(e,t){return G(t)?`none`:e.future_items.some(e=>!e.is_excluded&&e.course.id===t.id)?`future`:e.taken_items.some(e=>!e.is_excluded&&e.course.id===t.id)?`taken`:`none`}function K(e){return e.item_type===`TAKEN`||e.item_type===`FUTURE`?e.course:null}function ze(e,t){let n=K(t);return n===null||t.is_excluded||G(n)?!1:[...e.taken_items,...e.future_items].filter(e=>!e.is_excluded&&K(e)?.id===n.id).length>1}var Be=d.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Ve=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`,q=[[`기초필수`,`Basic Required`],[`기초선택`,`Basic Elective`],[`전공필수`,`Major Required`],[`전공선택`,`Major Elective`],[`졸업연구`,`Thesis Study(Undergraduate)`],[`교양필수`,`General Required`],[`인문사회선택`,`Humanities & Social Elective`],[`자유선택`,`Other Elective`]];function He({departments:e,defaultDepartmentId:t,year:i,semester:a,busy:o,onAdd:s}){let{t:c,i18n:l}=O(),[u,d]=(0,M.useState)(0),[f,p]=(0,M.useState)(3),[m,h]=(0,M.useState)(0),[g,_]=(0,M.useState)(t);(0,M.useEffect)(()=>_(t),[t]);let v=!Number.isInteger(f)||!Number.isInteger(m)||f<0||m<0;return r(Be,{children:[n(z,{children:c(`planner.arbitrary.title`)}),r(Ve,{children:[r(R,{children:[c(`planner.arbitrary.department`),n(L,{value:g,onChange:e=>_(Number(e.target.value)),children:e.map(e=>n(`option`,{value:e.id,children:l.resolvedLanguage===`en`?e.name_en:e.name},e.id))})]}),r(R,{children:[c(`planner.arbitrary.type`),n(L,{value:u,onChange:e=>d(Number(e.target.value)),children:q.map((e,t)=>n(`option`,{value:t,children:c(`planner.categories.${e[1]}`)},e[1]))})]}),r(R,{children:[c(`planner.arbitrary.credit`),n(I,{type:`number`,min:0,step:1,value:f,onChange:e=>p(Number(e.target.value))})]}),r(R,{children:[c(`planner.arbitrary.creditAU`),n(I,{type:`number`,min:0,step:1,value:m,onChange:e=>h(Number(e.target.value))})]})]}),n(P,{$primary:!0,type:`button`,disabled:o||v,onClick:()=>{let t=e.find(e=>e.id===g),n=q[u];t!==void 0&&n!==void 0&&s({year:i,semester:a,department:t,type:n[0],typeEn:n[1],credit:f,creditAU:m})},children:c(`planner.actions.addArbitrary`)})]})}var Ue=d.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`,We=d.form`
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px;

    ${j.mobile} {
        grid-template-columns: minmax(0, 1fr);
    }
`,Ge=d.div`
    display: grid;
    max-height: 220px;
    grid-template-columns: repeat(auto-fit, minmax(min(190px, 100%), 1fr));
    gap: 6px;
    overflow-y: auto;
`,Ke=d.button`
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
`,qe=d.span`
    display: block;
    margin-bottom: 3px;
    color: ${({theme:e})=>e.colors.Text.placeholder};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,Je=d.button`
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
`,Ye=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
    gap: 8px;
`,Xe=d.hr`
    width: 100%;
    margin: 4px 0;
    border: 0;
    border-top: 1px solid ${({theme:e})=>e.colors.Line.default};
`,Ze=[1,2,3,4];function Qe({planner:e,departments:t,busy:i,year:a,semester:o,onYearChange:s,onSemesterChange:c,keywordInputRef:l,drillTypeKo:u=null,onDrillTypeClear:d,onAddFuture:f,onAddArbitrary:p}){let{t:m,i18n:g}=O(),[_,v]=(0,M.useState)(``),[y,b]=(0,M.useState)(null),[C,w]=(0,M.useState)(!1),T=x(`GET`,`/planner-courses`,{enabled:C,apiPrefix:`/api`,apiPath:`/courses`,select:e=>S.parse(e)}),E=T.query.data?.find(e=>e.id===y)??null,D=E===null?`none`:Re(e,E);return r(Ue,{"aria-labelledby":`planner-course-search-title`,children:[n(z,{id:`planner-course-search-title`,children:m(`planner.search.title`)}),r(We,{onSubmit:e=>{e.preventDefault(),_.trim()!==``&&(T.setParams({keyword:_.trim(),offset:0,limit:20}),w(!0))},children:[n(I,{"aria-label":m(`planner.search.keyword`),ref:l,value:_,onChange:e=>v(e.target.value),placeholder:m(`planner.search.placeholder`)}),n(P,{$primary:!0,type:`submit`,disabled:i,children:m(`planner.actions.search`)})]}),u!==null&&r(Je,{type:`button`,onClick:()=>d?.(),children:[m(`planner.search.drillChip`,{type:u}),` ✕`]}),n(Ge,{children:Le(T.query.data??[],u).map(e=>r(Ke,{type:`button`,$selected:e.id===y,"aria-pressed":e.id===y,onClick:()=>b(e.id),children:[n(qe,{children:e.old_code}),g.resolvedLanguage===`en`?e.title_en:e.title]},e.id))}),r(Ye,{children:[r(R,{children:[m(`planner.grid.targetYear`),n(L,{value:a,onChange:e=>s(Number(e.target.value)),children:Array.from({length:e.end_year-e.start_year+1},(t,n)=>e.start_year+n).map(e=>n(`option`,{value:e,children:e},e))})]}),r(R,{children:[m(`planner.grid.targetSemester`),n(L,{value:o,onChange:e=>c(h.parse(Number(e.target.value))),children:Ze.map(e=>n(`option`,{value:e,children:m(`planner.semesters.${e}`)},e))})]})]}),D===`future`?n(F,{role:`status`,"aria-live":`polite`,children:m(`planner.search.duplicate`)}):n(P,{$primary:!0,type:`button`,disabled:i||E===null,onClick:()=>{if(E===null)return;let e=D===`taken`&&window.confirm(m(`planner.search.takenDuplicateConfirm`));D===`taken`&&!e||f(E,a,o,{excludeTakenDuplicates:e})},children:m(`planner.actions.addCourse`)}),n(Xe,{}),n(He,{departments:t,defaultDepartmentId:e.major_track.department.id,year:a,semester:o,busy:i,onAdd:p})]})}var $e=[1,2,3,4];function et({planner:e}){let{t,i18n:i}=O(),a=[];for(let t=e.start_year;t<=e.end_year;t+=1)a.push(t);let o=e=>i.resolvedLanguage===`en`?e.title_en:e.title;return r(A,{direction:`column`,gap:10,children:[n(z,{children:t(`planner.roadmap.title`)}),e.future_items.length===0&&n(k,{type:`Small`,color:`Text.placeholder`,children:t(`planner.roadmap.empty`)}),n(A,{direction:`column`,gap:6,children:a.map(i=>r(A,{direction:`row`,align:`stretch`,gap:6,"data-testid":`roadmap-year-row`,children:[n(k,{type:`SmallBold`,color:`Text.light`,children:i}),$e.map(a=>{let s=e.future_items.filter(e=>e.year===i&&e.semester===a);return r(A,{direction:`column`,gap:4,"data-roadmap-cell":`${i}-${a}`,children:[n(k,{type:`Smaller`,color:`Text.placeholder`,children:t(`planner.semesters.${a}`)}),s.map(e=>n(k,{type:`Smaller`,children:o(e.course)},e.id))]},a)})]},i))})]})}var tt=d.nav`
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

    ${j.tablet} {
        gap: 6px;
        padding: 12px;
    }
`,nt=d.div`
    display: flex;
    min-width: 0;
    align-items: center;
    gap: 8px;

    ${j.mobile} {
        flex-direction: column;
        align-items: stretch;
        gap: 6px;
    }
`,rt=d.div`
    display: flex;
    min-width: 0;
    flex: 1 1 auto;
    gap: 6px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x proximity;
`,it=d.div`
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
    gap: 6px;
`,at=d.button`
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
`;function ot({planners:e,selectedPlannerId:t,busy:i,onSelect:a,onCreate:o,onDelete:s,onReorder:c}){let{t:l}=O(),u=e.findIndex(e=>e.id===t);return r(tt,{"aria-label":l(`planner.list.title`),children:[n(z,{children:l(`planner.list.title`)}),r(nt,{children:[r(rt,{children:[e.map((e,r)=>n(at,{$selected:e.id===t,"aria-pressed":e.id===t,onClick:()=>a(e.id),children:l(`planner.list.item`,{index:r+1})},e.id)),e.length===0&&n(k,{type:`Small`,color:`Text.placeholder`,children:l(`planner.list.empty`)})]}),r(it,{children:[n(P,{$primary:!0,disabled:i,onClick:()=>void o(!1),"aria-label":l(`planner.actions.create`),children:n(D,{size:16,color:`inherit`,children:n(re,{})})}),n(P,{disabled:i||t===null,onClick:()=>void o(!0),"aria-label":l(`planner.actions.copy`),children:n(D,{size:16,color:`inherit`,children:n(ie,{})})}),n(P,{disabled:i||u<=0,onClick:()=>void c(-1),"aria-label":l(`planner.actions.moveUp`),children:n(D,{size:16,color:`inherit`,children:n(se,{})})}),n(P,{disabled:i||u<0||u>=e.length-1,onClick:()=>void c(1),"aria-label":l(`planner.actions.moveDown`),children:n(D,{size:16,color:`inherit`,children:n(ae,{})})}),n(P,{$danger:!0,disabled:i||t===null,onClick:()=>{window.confirm(l(`planner.actions.deleteConfirm`))&&s()},"aria-label":l(`planner.actions.delete`),children:n(D,{size:16,color:`inherit`,children:n(N,{})})})]})]})]})}function st(e){return e.item_type===`TAKEN`?e.lecture.credit:e.item_type===`FUTURE`?e.course.credit:e.credit}function ct(e){return e.item_type===`TAKEN`?e.lecture.credit_au:e.item_type===`FUTURE`?e.course.credit_au:e.credit_au}function lt(e){return e.item_type===`TAKEN`?e.lecture.type_en:e.item_type===`FUTURE`?e.course.type_en:e.type_en}function ut(e){return e.item_type===`TAKEN`?e.lecture.department_code:e.item_type===`FUTURE`?e.course.department.code:e.department?.code??null}function J(e=0){return{taken:0,planned:0,required:e}}function Y(e,t,n){e[t]+=n}function dt(e){let t=e.additional_tracks.find(e=>e.type===`ADVANCED`),n={key:`PRIMARY:${e.major_track.department.code}`,type:t===void 0?`PRIMARY`:`ADVANCED`,department:e.major_track.department,required:J(e.major_track.major_required+(t?.major_required??0)),elective:J(e.major_track.major_elective+(t?.major_elective??0))},r={DOUBLE:0,MINOR:1,INTERDISCIPLINARY:2};return[n,...e.additional_tracks.filter(e=>e.type!==`ADVANCED`).sort((e,t)=>r[e.type]-r[t.type]).map(e=>({key:`${e.type}:${e.department?.code??e.id}`,type:e.type,department:e.department,required:J(e.major_required),elective:J(e.major_elective)}))]}function ft(e){let t=Math.max(0,e.required.taken-e.required.required);e.required.taken-=t,e.elective.taken+=t;let n=Math.max(0,e.required.required-e.required.taken),r=Math.max(0,e.required.planned-n);e.required.planned-=r,e.elective.planned+=r}function pt(e){let t=e.additional_tracks.some(e=>e.type===`DOUBLE`),n={credit:J(e.general_track.total_credit),au:J(e.general_track.total_au)},r=J(e.general_track.basic_required),i=J(t?e.major_track.basic_elective_doublemajor:e.general_track.basic_elective),a=J(t?e.general_track.thesis_study_doublemajor:e.general_track.thesis_study),o={credit:J(e.general_track.general_required_credit),au:J(e.general_track.general_required_au)},s=J(t?e.general_track.humanities_doublemajor:e.general_track.humanities),c=J(),l=dt(e),u=[...e.taken_items,...e.future_items,...e.arbitrary_items];for(let e of u){if(e.is_excluded)continue;let t=e.item_type===`TAKEN`?`taken`:`planned`,u=st(e),d=ct(e);Y(n.credit,t,u),Y(n.au,t,d);let f=lt(e);if(f===`Basic Required`)Y(r,t,u);else if(f===`Basic Elective`)Y(i,t,u);else if(f===`Thesis Study(Undergraduate)`)Y(a,t,u);else if(f===`Individual Study`)Y(c,t,u);else if(f===`General Required`||f===`Mandatory General Courses`)Y(o.credit,t,u),Y(o.au,t,d);else if(f.startsWith(`Humanities & Social Elective`))Y(s,t,u);else if(f===`Major Required`||f===`Major Elective`||f===`Elective(Graduate)`){let n=ut(e),r=l.find(e=>e.department?.code===n);Y(r===void 0?c:f===`Major Required`?r.required:r.elective,t,u)}else Y(c,t,u)}return l.forEach(ft),{total:n,basicRequired:r,basicElective:i,thesisStudy:a,generalRequired:o,humanities:s,other:c,majors:l}}var mt=d.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
    gap: 8px;
`,ht=d.div`
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
`,gt=d.span`
    color: ${({theme:e})=>e.colors.Text.light};
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,X=d.span`
    white-space: nowrap;
`,_t=d.strong`
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: ${({theme:e})=>e.fonts.Big.fontSize}px;
`,vt=d.div`
    display: flex;
    height: 5px;
    margin-top: auto;
    overflow: hidden;
    border-radius: 999px;
    background: ${({theme:e})=>e.colors.Line.default};
`,yt=d.div`
    width: ${({$ratio:e})=>`${Math.min(100,Math.max(0,e*100))}%`};
    height: 100%;
    background: ${({theme:e})=>e.colors.Highlight.default};
`,bt=d.div`
    width: ${({$ratio:e})=>`${Math.min(100,Math.max(0,e*100))}%`};
    height: 100%;
    background-color: ${({theme:e})=>e.colors.Highlight.subtle};
    background-image: repeating-linear-gradient(
        45deg,
        ${({theme:e})=>e.colors.Highlight.default} 0 3px,
        transparent 3px 6px
    );
`;function xt(e){if(e.required===0)return{taken:0,planned:0};let t=Math.min(1,Math.max(0,e.taken/e.required));return{taken:t,planned:Math.min(Math.max(0,1-t),Math.max(0,e.planned/e.required))}}function Z({label:e,progress:t,unit:i,trackId:a,onSelect:o}){let{t:s}=O(),c=t.taken+t.planned,l=xt(t);return r(ht,{as:o===void 0?`div`:`button`,...o===void 0?{}:{type:`button`,onClick:o},$selectable:o!==void 0,children:[n(gt,{children:e}),r(_t,{children:[c,` / `,t.required,` `,i]}),n(gt,{children:s(`planner.summary.breakdown`,{taken:t.taken,planned:t.planned})}),r(vt,{"aria-hidden":`true`,"data-track":a,children:[n(yt,{"data-segment":`taken`,"data-ratio":l.taken,$ratio:l.taken}),t.planned>0&&n(bt,{"data-segment":`planned`,"data-ratio":l.planned,$ratio:l.planned})]})]})}function St({planner:e,onSelectCategory:t}){let{t:a,i18n:o}=O(),s=pt(e),c=a(`planner.summary.units.credit`),l=a(`planner.summary.units.au`),u=[[`totalCredit`,s.total.credit,c],[`totalAu`,s.total.au,l],[`basicRequired`,s.basicRequired,c],[`basicElective`,s.basicElective,c],[`thesisStudy`,s.thesisStudy,c],[`generalRequiredCredit`,s.generalRequired.credit,c],[`generalRequiredAu`,s.generalRequired.au,l],[`humanities`,s.humanities,c],[`other`,s.other,c]],d={basicRequired:W.basicRequired,basicElective:W.basicElective,thesisStudy:W.thesisStudy,generalRequiredCredit:W.generalRequired,generalRequiredAu:W.generalRequired,humanities:W.humanities};return r(`section`,{"aria-labelledby":`planner-summary-title`,children:[n(z,{id:`planner-summary-title`,children:a(`planner.summary.title`)}),n(F,{role:`note`,children:a(`planner.summary.disclaimer`)}),r(mt,{children:[u.map(([e,r,i])=>{let o=d[e];return n(Z,{label:a(`planner.summary.categories.${e}`),progress:r,unit:i,trackId:e,onSelect:t!==void 0&&o!==void 0?()=>t(o):void 0},e)}),s.majors.flatMap(e=>{let s=e.department?o.resolvedLanguage===`en`?e.department.name_en:e.department.name:null,l=a(`planner.trackTypes.${e.type}`),u=e=>r(i,{children:[s!==null&&r(i,{children:[n(X,{children:s}),` · `]}),n(X,{children:l}),` · `,n(X,{children:e})]});return[n(Z,{label:u(a(`planner.summary.categories.majorRequired`)),progress:e.required,unit:c,trackId:`${e.key}:required`,onSelect:t===void 0?void 0:()=>t(W.majorRequired)},`${e.key}:required`),n(Z,{label:u(a(`planner.summary.categories.majorElective`)),progress:e.elective,unit:c,trackId:`${e.key}:elective`,onSelect:t===void 0?void 0:()=>t(W.majorElective)},`${e.key}:elective`)]})]})]})}function Ct(e){let t=e.map(e=>pt(e));if(t.length===0)return[];let n=(e,n)=>{let r=t.map(e=>n(e));return{key:e,taken:r.map(e=>e.taken),planned:r.map(e=>e.planned),required:r[0]?.required??0}},r=e=>n(`major${e===`required`?`Required`:`Elective`}`,t=>{let n=t.majors[0];if(n===void 0)return{taken:0,planned:0,required:0};let r=n[e];return{taken:r.taken,planned:r.planned,required:r.required}});return[n(`totalCredit`,e=>({taken:e.total.credit.taken,planned:e.total.credit.planned,required:e.total.credit.required})),n(`basicRequired`,e=>e.basicRequired),n(`thesisStudy`,e=>e.thesisStudy),n(`generalRequired`,e=>({taken:e.generalRequired.credit.taken,planned:e.generalRequired.credit.planned,required:e.generalRequired.credit.required})),n(`humanities`,e=>e.humanities),r(`required`),r(`elective`)]}var wt=d.table`
    width: 100%;
    border-collapse: collapse;
    font-size: ${({theme:e})=>e.fonts.Small.fontSize}px;
`,Q=d.td`
    padding: 6px 8px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.default};
    color: ${({theme:e})=>e.colors.Text.default};
`,Tt=d.th`
    padding: 6px 8px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.Line.block};
    color: ${({theme:e})=>e.colors.Text.light};
    font-weight: ${({theme:e})=>e.fonts.NormalBold.fontWeight};
    text-align: start;
`;function Et({planners:e,selectedId:t}){let{t:a}=O(),o=e.find(e=>e.id===t);if(o===void 0)return null;let s=[o,...e.filter(e=>e.id!==t)],c=Ct(s);return r(i,{children:[n(z,{children:a(`planner.comparison.title`)}),r(wt,{children:[n(`thead`,{children:r(`tr`,{children:[n(Tt,{children:a(`planner.comparison.category`)}),s.map((e,t)=>n(Tt,{children:a(`planner.list.item`,{index:t+1})},e.id))]})}),n(`tbody`,{children:c.map(e=>r(`tr`,{children:[n(Q,{children:a(`planner.summary.categories.${e.key}`)}),e.taken.map((t,n)=>r(Q,{children:[t,` + `,e.planned[n],` / `,e.required]},n))]},e.key))})]})]})}var Dt=d.article`
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
`,Mt=d(L)`
    width: auto;
    min-width: 96px;
    flex: 1 1 96px;
`,Nt=[1,2,3,4];function Pt(e){return e.item_type===`TAKEN`?{credit:e.lecture.credit,creditAU:e.lecture.credit_au}:e.item_type===`FUTURE`?{credit:e.course.credit,creditAU:e.course.credit_au}:{credit:e.credit,creditAU:e.credit_au}}function Ft({planner:e,item:t,title:a,code:o,busy:s,onUpdate:c,onRemove:l}){let{t:u}=O(),d=Pt(t);return r(Dt,{$excluded:t.is_excluded,children:[n(Ot,{title:a,children:a}),r(kt,{children:[o,` · `,d.credit,u(`planner.items.credits`),d.creditAU>0&&r(i,{children:[` · `,d.creditAU,` `,u(`planner.items.au`)]}),ze(e,t)&&n(At,{"aria-label":u(`planner.items.duplicate`),title:u(`planner.items.duplicate`),children:`!`})]}),r(jt,{children:[n(P,{type:`button`,disabled:s,onClick:()=>void c(t,{isExcluded:!t.is_excluded}),children:u(t.is_excluded?`planner.actions.include`:`planner.actions.exclude`)}),t.item_type!==`TAKEN`&&n(Mt,{"aria-label":u(`planner.actions.changeSemester`),value:t.semester,disabled:s,onChange:e=>void c(t,{semester:h.parse(Number(e.target.value))}),children:Nt.map(e=>n(`option`,{value:e,children:u(`planner.semesters.${e}`)},e))}),t.item_type!==`TAKEN`&&n(P,{$danger:!0,type:`button`,disabled:s,"aria-label":u(`planner.actions.removeItem`),onClick:()=>{window.confirm(u(`planner.actions.removeItemConfirm`))&&l(t)},children:n(D,{size:14,color:`inherit`,children:n(N,{})})})]})]})}var It=d.div`
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

    ${j.tablet} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${j.mobile} {
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

    ${j.mobile} {
        min-height: 36px;
    }
`,Ut=[1,2,3,4];function Wt(e){return e.item_type===`TAKEN`?e.lecture.year:e.year}function Gt(e){return e.item_type===`TAKEN`?e.lecture.semester:e.semester}function Kt({planner:e,busy:t,onUpdate:i,onRemove:a,onRequestAdd:o}){let{t:s,i18n:c}=O(),l=[...e.taken_items,...e.future_items,...e.arbitrary_items],u=Array.from({length:e.end_year-e.start_year+1},(t,n)=>e.start_year+n),d=e=>e.item_type===`ARBITRARY`?c.resolvedLanguage===`en`?e.type_en:e.type:c.resolvedLanguage===`en`?e.course.title_en:e.course.title,f=e=>e.item_type===`ARBITRARY`?s(`planner.items.arbitrary`):e.course.old_code;return r(`section`,{"aria-labelledby":`semester-grid-title`,children:[n(z,{id:`semester-grid-title`,children:s(`planner.grid.title`)}),n(It,{children:u.map(c=>r(Lt,{children:[n(Rt,{children:s(`planner.grid.year`,{year:c})}),n(zt,{children:Ut.map(u=>{let p=l.filter(e=>Wt(e)===c&&Gt(e)===u);return r(Bt,{children:[n(Vt,{children:s(`planner.semesters.${u}`)}),p.map(r=>n(Ft,{planner:e,item:r,title:d(r),code:f(r),busy:t,onUpdate:i,onRemove:a},r.id)),p.length===0&&r(Ht,{type:`button`,"data-slot-chip":`true`,disabled:t,onClick:()=>o(c,u),children:[`+`,` `,s(`planner.grid.addHere`,{year:c,semester:s(`planner.semesters.${u}`)})]})]},u)})})]},c))})]})}function qt({planner:e,busy:t,onConfirm:i}){let{t:a,i18n:o}=O(),[s,c]=(0,M.useState)(new Set),[l,u]=(0,M.useState)(!1);(0,M.useEffect)(()=>{c(new Set)},[e.id]);let d=e.future_items.filter(e=>B({year:e.year,semester:e.semester},new Date));if(d.length===0)return null;let f=d.filter(e=>!s.has(e.id)),p=t||l||f.length===0,m=e=>{c(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},h=()=>{u(!0),i(f).finally(()=>u(!1))},g=e=>o.resolvedLanguage===`en`?e.title_en:e.title;return r(A,{direction:`column`,gap:8,children:[n(k,{type:`NormalBold`,color:`Text.default`,children:a(`planner.wizard.title`)}),n(k,{type:`Small`,color:`Text.light`,children:a(`planner.wizard.description`,{count:d.length})}),n(A,{direction:`column`,gap:4,children:d.map(e=>r(`label`,{children:[n(`input`,{type:`checkbox`,checked:!s.has(e.id),onChange:()=>m(e.id)}),` `,a(`planner.wizard.item`,{year:e.year,semester:a(`planner.semesters.${e.semester}`),course:g(e.course)})]},e.id))}),n(A,{direction:`row`,justify:`flex-end`,gap:8,children:n(P,{type:`button`,$primary:!0,disabled:p,onClick:h,children:a(`planner.wizard.confirm`)})})]})}function Jt({planner:e,tracks:t,busy:i,onSave:a}){let{t:o,i18n:s}=O(),c=new Date().getFullYear(),l=e.end_year-e.start_year+1,[u,d]=(0,M.useState)(e.start_year),[f,p]=(0,M.useState)(H.includes(l)?l:4),[m,h]=(0,M.useState)(e.general_track.id),[g,_]=(0,M.useState)(e.major_track.id),[v,y]=(0,M.useState)(e.additional_tracks.map(e=>e.id)),[b,x]=(0,M.useState)(``);(0,M.useEffect)(()=>{let t=e.end_year-e.start_year+1;d(e.start_year),p(H.includes(t)?t:4),h(e.general_track.id),_(e.major_track.id),y(e.additional_tracks.map(e=>e.id))},[e]);let S=(0,M.useMemo)(()=>{let t=Oe(c);return e.start_year>=2e3&&e.start_year<=c?[...new Set([e.start_year,...t])].sort((e,t)=>e-t):t},[c,e.start_year]),C=t.general.filter(e=>e.end_year>=2020||e.id===m),w=t.major.filter(e=>e.end_year>=2020||e.id===g),T=(0,M.useMemo)(()=>{let e=t.additional.filter(e=>e.end_year>=2020||v.includes(e.id)),n=b.trim().toLowerCase();return n===``?e:e.filter(e=>[e.department?.name??``,e.department?.name_en??``,e.type].join(` `).toLowerCase().includes(n))},[t.additional,v,b]),E=e=>s.resolvedLanguage===`en`?e.name_en:e.name;return r(ce,{onSubmit:n=>{n.preventDefault();let r=t.general.find(e=>e.id===m),i=t.major.find(e=>e.id===g);if(r===void 0||i===void 0)return;let s=t.additional.filter(e=>v.includes(e.id)),c=Me(s,i);if(c!==null){window.alert(o(`planner.settings.errors.${c}`));return}let l={startYear:u,endYear:u+f-1,generalTrack:r,majorTrack:i,additionalTracks:s},d=Ne(e,l.startYear,l.endYear);if(d>0&&!window.confirm(o(`planner.settings.confirmRange`,{startYear:l.startYear,endYear:l.endYear,count:d})))return;let p=Pe(l);p>0&&!window.confirm(o(`planner.settings.confirmIncompatible`,{startYear:l.startYear,count:p}))||a(l)},children:[n(z,{children:o(`planner.settings.title`)}),r(le,{children:[r(R,{children:[o(`planner.settings.startYear`),n(L,{value:u,onChange:e=>d(Number(e.target.value)),children:S.map(e=>n(`option`,{value:e,children:e},e))})]}),r(R,{children:[o(`planner.settings.duration`),n(L,{value:f,onChange:e=>p(Number(e.target.value)),children:H.map(e=>n(`option`,{value:e,children:o(`planner.settings.durationYears`,{count:e})},e))})]}),r(R,{children:[o(`planner.settings.generalTrack`),n(L,{value:m,onChange:e=>h(Number(e.target.value)),children:C.map(e=>n(`option`,{value:e.id,disabled:!U(e,u),children:e.is_foreign?o(`planner.settings.foreign`):o(`planner.settings.domestic`)},e.id))})]}),r(R,{children:[o(`planner.settings.majorTrack`),n(L,{value:g,onChange:e=>_(Number(e.target.value)),children:w.map(e=>n(`option`,{value:e.id,disabled:!U(e,u),children:E(e.department)},e.id))})]})]}),r(R,{children:[o(`planner.settings.additionalTracks`),n(I,{type:`text`,value:b,onChange:e=>x(e.target.value),"aria-label":o(`planner.settings.additionalFilter`),placeholder:o(`planner.settings.additionalFilterPlaceholder`)}),n(L,{multiple:!0,size:6,value:v.map(String),onChange:e=>y(Array.from(e.target.selectedOptions,e=>Number(e.value))),children:T.map(n=>r(`option`,{value:n.id,disabled:je(n,u,t.major.find(e=>e.id===g)??e.major_track),children:[o(`planner.trackTypes.${n.type}`),n.department===null?``:` · ${E(n.department)}`]},n.id))})]}),n(A,{direction:`row`,justify:`flex-end`,gap:8,children:n(P,{$primary:!0,type:`submit`,disabled:i,children:o(`planner.actions.save`)})})]})}var Yt=`otlplus.tracks.signature`;function Xt(e){let t=e=>Array.isArray(e)?`[${e.map(t).join(`,`)}]`:typeof e==`object`&&e?`{${Object.entries(e).sort(([e],[t])=>e<t?-1:+(e>t)).map(([e,n])=>`${JSON.stringify(e)}:${t(n)}`).join(`,`)}}`:JSON.stringify(e)??`null`;return Zt(t(e))}function Zt(e){let t=5381;for(let n=0;n<e.length;n+=1)t=(t<<5)+t+e.charCodeAt(n)|0;return`h${(t>>>0).toString(16)}`}function Qt(e,t,n=Yt){let r=Xt(e),i=t.getItem(n);return i===null||i===r?{show:!1}:{show:!0,current:r}}function $t(e,t,n=Yt){t.setItem(n,e)}var en=d.main`
    display: flex;
    min-width: 0;
    min-height: 0;
    flex: 1 0 auto;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px 20px;

    ${j.tablet} {
        padding: 0 8px 12px;
    }
`,$=d(te)`
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    align-items: stretch;
    padding: 16px;

    ${j.mobile} {
        padding: 12px;
    }
`,tn=d.div`
    display: grid;
    min-width: 0;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 340px);
    align-items: start;
    gap: 12px;

    ${j.tablet} {
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
`,an=d(te)`
    min-height: 240px;
    padding: 24px;
`,on=u(function(){return n(ee,{flag:`planner-enabled`,children:n(sn,{})})});function sn(){let{t:e}=O(),t=Ie(),i=t.selectedPlanner?.id??null,a=(0,M.useRef)(t.planners);a.current=t.planners;let o=(0,M.useRef)(null),[s,c]=(0,M.useState)(!1),[l,u]=(0,M.useState)(null);(0,M.useEffect)(()=>{let e=t.tracks;if(e===void 0)return;let n=Qt(e,window.localStorage);c(n.show)},[t.tracks]);let d=()=>{let e=t.tracks;e!==void 0&&$t(Xt(e),window.localStorage),c(!1)},[f,m]=(0,M.useState)({year:new Date().getFullYear(),semester:1});(0,M.useEffect)(()=>{p(`Page View`,{page:`Planner`})},[]),(0,M.useEffect)(()=>{if(i===null)return;let e=a.current.find(e=>e.id===i);e!==void 0&&m({year:e.start_year,semester:1})},[i]);let h=(0,M.useMemo)(()=>{let e=t.selectedPlanner;return e!==null&&e.future_items.some(e=>B({year:e.year,semester:e.semester},new Date))},[t.selectedPlanner]),g=async e=>{for(let n of e)await t.addArbitrary({year:n.year,semester:n.semester,department:n.course.department,type:n.course.type,typeEn:n.course.type_en,credit:n.course.credit,creditAU:n.course.credit_au}),await t.removeItem(n)},_=e=>{u(e),requestAnimationFrame(()=>{let e=o.current;e?.scrollIntoView({behavior:`smooth`,block:`center`}),e?.focus({preventScroll:!0})})},v=(e,t)=>{m({year:e,semester:t}),requestAnimationFrame(()=>{let e=o.current;e?.scrollIntoView({behavior:`smooth`,block:`center`}),e?.focus({preventScroll:!0})})},y=(0,M.useMemo)(()=>{let e=[...t.tracks?.major.map(e=>e.department)??[],...t.tracks?.additional.flatMap(e=>e.department===null?[]:[e.department])??[]];return e.filter((t,n)=>e.findIndex(e=>e.id===t.id)===n)},[t.tracks]);return t.isLoading?n(en,{children:r(an,{direction:`column`,align:`center`,justify:`center`,gap:12,children:[n(ne,{}),n(k,{type:`Normal`,color:`Text.placeholder`,children:e(`planner.status.loading`)})]})}):r(en,{children:[n(ot,{planners:t.planners,selectedPlannerId:t.selectedPlannerId,busy:t.isBusy,onSelect:t.setSelectedPlannerId,onCreate:t.createPlanner,onDelete:t.deletePlanner,onReorder:t.reorderPlanner}),s&&r(F,{role:`status`,children:[e(`planner.notice.tracksUpdated`),n(A,{direction:`row`,justify:`flex-end`,gap:6,children:n(P,{type:`button`,onClick:d,children:e(`planner.notice.dismiss`)})})]}),t.error!==null&&t.error!==void 0&&r($,{direction:`column`,gap:6,children:[n(k,{type:`NormalBold`,color:`Highlight.dark`,children:e(`planner.status.error`)}),n(k,{type:`Small`,color:`Text.light`,children:t.error.message})]}),t.selectedPlanner===null||t.tracks===void 0?r(an,{direction:`column`,align:`center`,justify:`center`,gap:12,children:[n(k,{type:`BiggerBold`,color:`Text.default`,children:e(`planner.empty.title`)}),n(k,{type:`Normal`,color:`Text.placeholder`,children:e(`planner.empty.description`)}),n(P,{$primary:!0,disabled:t.isBusy||t.tracks===void 0,onClick:()=>void t.createPlanner(!1),children:e(`planner.actions.create`)})]}):r(tn,{children:[r(nn,{children:[h&&n($,{direction:`column`,gap:12,children:n(qt,{planner:t.selectedPlanner,busy:t.isBusy,onConfirm:g})}),n($,{direction:`column`,gap:12,children:n(Kt,{planner:t.selectedPlanner,busy:t.isBusy,onUpdate:t.updateItem,onRemove:t.removeItem,onRequestAdd:v})}),n($,{direction:`column`,gap:12,children:n(et,{planner:t.selectedPlanner})}),n($,{direction:`column`,gap:12,children:n(Qe,{planner:t.selectedPlanner,departments:y,busy:t.isBusy,drillTypeKo:l,onDrillTypeClear:()=>u(null),year:f.year,semester:f.semester,onYearChange:e=>m(t=>({...t,year:e})),onSemesterChange:e=>m(t=>({...t,semester:e})),keywordInputRef:o,onAddFuture:t.addFuture,onAddArbitrary:t.addArbitrary})})]}),r(rn,{"aria-label":e(`planner.settings.title`),children:[n($,{direction:`column`,gap:12,children:n(Jt,{planner:t.selectedPlanner,tracks:t.tracks,busy:t.isBusy,onSave:t.updateTracks})}),n($,{direction:`column`,gap:12,children:n(St,{planner:t.selectedPlanner,onSelectCategory:_})}),t.planners.length>=2&&n($,{direction:`column`,gap:12,children:n(Et,{planners:t.planners,selectedId:t.selectedPlanner.id})})]})]})]})}export{on as default};
//# sourceMappingURL=planner-DNmBxqvl.js.map