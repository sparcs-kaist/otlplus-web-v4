(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`9d05ee35d7abbcb9c26a49146ffb1c243472afe7`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`cc6d9953-1179-4968-8ba0-9415327c3856`,e._sentryDebugIdIdentifier=`sentry-dbid-cc6d9953-1179-4968-8ba0-9415327c3856`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-BipPsRIu.js";import{A as r,D as i,O as a,k as o,n as s}from"./chunk-62JRHF6Z-Cc13iaRl.js";import{n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-ConDOTC-.js";import{n as d,t as f}from"./FlexWrapper-0CnG6qFw.js";import{i as p,k as m,x as h}from"./axios-Vkz2-jZx.js";import{t as g}from"./useAPI-CGx5_Ks6.js";import{r as _,t as v}from"./Icon-Dhjnfbuq.js";import{t as y}from"./useTranslation-Ban0TnKi.js";import{t as b}from"./Modal-CvU2xty5.js";import{t as x}from"./Typography-DcZogMLT.js";import{t as S}from"./Button-BQ0eEaBJ.js";import{t as C}from"./Search-CSqR8HZA.js";import{t as w}from"./media-DmzSTGSz.js";import{t as T}from"./useIsDevice-B7oPIQVe.js";import{t as E}from"./Person-C36Ai3ji.js";import{t as ee}from"./FriendLoginButton-naCV_9sa.js";import{t as D}from"./ContentCopy-BHgpu1IL.js";import{a as O,n as te,r as k,t as A}from"./TabButton-BIGoSWG9.js";import{t as ne}from"./CustomTimeTableGrid-CVe6qpEG.js";var j=t(e()),M=t(n(),1),re=_((0,M.jsx)(`path`,{d:`M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5`}),`Group`),ie=_((0,M.jsx)(`path`,{d:`M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92`}),`Share`),N=_((0,M.jsx)(`path`,{d:`M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`}),`Star`),P=_((0,M.jsx)(`path`,{d:`m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z`}),`StarBorder`),F=e=>`${e}님과 OTL 시간표 친구를 맺어보세요!`,I=(e,t)=>`${F(e)}\n${t}`;async function L(e,t){let n=I(e,t);if(navigator.clipboard){await navigator.clipboard.writeText(n);return}let r=document.createElement(`textarea`);r.value=n,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{if(!document.execCommand(`copy`))throw Error(`Clipboard unavailable`)}finally{r.remove()}}async function R(e,t){if(navigator.share)try{return await navigator.share({title:`OTL 시간표 친구 초대`,text:F(e),url:t}),`shared`}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return`cancelled`}return await L(e,t),`copied`}var ae=d.div`
    padding: 14px;
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: 14px;
    line-height: 21px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`;function oe({isOpen:e,onClose:t,userName:n}){let{t:r}=y(),i=T(`mobile`),[a,o]=(0,j.useState)(null),[s,u]=(0,j.useState)(!1),[d,p]=(0,j.useState)(!1),{mutation:m,requestFunction:h}=g(`POST`,`/friends/invites`,{onSuccess:o});(0,j.useEffect)(()=>{e&&(o(null),u(!1),p(!1),h({}))},[e,h]);let _=a?`${new URL(`/friends/invite`,window.location.origin)}#${encodeURIComponent(a.token)}`:``;return c(b,{isOpen:e,onClose:t,title:r(`friends.inviteTitle`),fullScreen:i,children:l(f,{direction:`column`,gap:16,align:`stretch`,children:[c(x,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.inviteDescription`)}),m.isPending&&c(x,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.inviteLoading`)}),m.isError&&c(x,{type:`Normal`,color:`Highlight.default`,children:r(`friends.inviteError`)}),d&&c(x,{type:`Normal`,color:`Highlight.default`,children:r(`friends.inviteError`)}),a&&c(ae,{className:`mp-block mp-sensitive`,children:I(n,_)}),s&&c(x,{type:`Small`,color:`Highlight.default`,children:r(`friends.copied`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[l(S,{type:a?`default`:`disabled`,onClick:async()=>{try{await L(n,_),u(!0)}catch{p(!0)}},children:[c(v,{size:16,children:c(D,{})}),r(`friends.copy`)]}),l(S,{type:a?`highlighted`:`disabled`,onClick:async()=>{try{await R(n,_)===`copied`&&u(!0)}catch{p(!0)}},children:[c(v,{size:16,children:c(ie,{})}),r(`friends.share`)]})]})]})})}var z=d(f)`
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
`,se=d(s)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    text-decoration: none;
`,B=d(f)`
    flex-wrap: wrap;
`,V=d.span`
    padding: 5px 10px;
    border-radius: 999px;
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    font-size: 13px;
`;function H({title:e,friends:t}){let{t:n}=y();return l(f,{direction:`column`,gap:8,align:`stretch`,children:[c(x,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?c(B,{direction:`row`,gap:6,children:t.map(e=>c(V,{children:e.name},e.id))}):c(x,{type:`Small`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function U({lecture:e}){let{t}=y(),{query:n}=g(`GET`,`/friends/lectures/${e?.id??0}/overlaps`,{enabled:e!==null,staleTime:0,gcTime:0});return e?l(z,{direction:`column`,gap:16,align:`stretch`,children:[l(f,{direction:`column`,gap:4,align:`center`,children:[c(x,{type:`Bigger`,color:`Text.default`,children:e.name+e.subtitle}),l(x,{type:`Big`,color:`Text.default`,children:[e.code,` `,e.classNo?`(${e.classNo})`:``]}),c(se,{to:`/dictionary?courseId=${e.courseId}`,children:t(`header.dictionary`)})]}),c(k,{selectedLecture:e}),n.isError&&c(x,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}),c(H,{title:t(`friends.sameLecture`),friends:n.isError?[]:n.data?.sameLecture??[]}),c(H,{title:t(`friends.sameCourseDifferentSection`),friends:n.isError?[]:n.data?.sameCourseDifferentSection??[]}),c(H,{title:t(`friends.previousSemesterSameProfessor`),friends:n.isError?[]:n.data?.previousSemesterSameProfessor??[]})]}):c(z,{direction:`column`,gap:0,justify:`center`,align:`center`,children:c(x,{type:`Normal`,color:`Text.placeholder`,children:t(`friends.selectLecture`)})})}var W=()=>[{title:`친구 시간표 | OTL`},{name:`description`,content:`OTL 친구들의 시간표와 함께 듣는 수업을 확인하세요.`}],ce=d.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 20px;
    box-sizing: border-box;

    ${w.tablet} {
        padding: 8px;
    }
`,le=d.div`
    width: 100%;
    max-width: 1714px;
    height: 100%;
    min-height: 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(220px, 288px) minmax(520px, 1fr) minmax(300px, 454px);
    gap: 12px;

    ${w.laptop} {
        grid-template-columns: minmax(180px, 220px) minmax(0, 1fr) minmax(220px, 300px);
    }

    ${w.tablet} {
        display: block;
    }
`,G=d.div`
    min-width: 0;
    min-height: 0;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 12px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`,ue=d(G)`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 16px 0 0;

    ${w.tablet} {
        display: none;
    }
`,de=d(G)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 16px;

    ${w.tablet} {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 8px;
    }
`,fe=d(G)`
    padding: 16px;
    overflow: hidden;

    ${w.tablet} {
        display: none;
    }
`,K=d(f)`
    padding: 0 16px 12px;
`,q=d.label`
    height: 34px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.placeholder};
`,pe=d.input`
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({theme:e})=>e.colors.Text.default};
    font: inherit;
`,me=d.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
`,J=d.div`
    width: 100%;
    height: 46px;
    border: 0;
    padding: 0 12px 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({$selected:e,theme:t})=>e?t.colors.Background.Block.default:t.colors.Background.Section.default};

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Block.default};
    }
`,Y=d.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,X=d.button`
    width: 28px;
    height: 28px;
    padding: 4px;
    border: 0;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${({theme:e})=>e.colors.Text.placeholder};
    background: transparent;

    &:hover {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,Z=d.button`
    height: 48px;
    border: 0;
    border-top: 1px solid ${({theme:e})=>e.colors.Line.block};
    background: transparent;
    color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    font: inherit;
`,he=d(f)`
    width: 100%;
    flex-shrink: 0;
    flex-wrap: wrap;
`,ge=d.div`
    min-width: 0;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
`,_e=d.div`
    min-height: 0;
    flex: 1;
    display: flex;
    padding-top: 8px;
`,ve=d.div`
    display: none;
    min-width: 0;
    max-width: 100%;

    & > div {
        max-width: 100%;
    }

    & > div > div {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ${w.tablet} {
        display: block;
    }
`,ye=d(f)`
    padding: 24px 16px;
    text-align: center;
`,be=d(f)`
    width: 100%;
    height: 100%;
`;function xe({friend:e,selected:t,onSelect:n,onDelete:r}){let{t:i}=y(),a=m(),{mutation:o,requestFunction:s}=g(`PATCH`,`/friends/${e.id}/favorite`,{onSuccess:()=>a.invalidateQueries({queryKey:[`/api/v2`,`/friends`]})});return l(J,{$selected:t,role:`button`,tabIndex:0,onClick:n,onKeyDown:e=>{e.currentTarget===e.target&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n())},children:[c(v,{size:18,children:c(E,{})}),c(Y,{children:e.name}),t&&c(X,{"aria-label":i(`friends.delete`),onClick:e=>{e.stopPropagation(),r()},children:c(v,{size:20,children:c(O,{})})}),c(X,{"aria-label":i(`friends.favorite`),"aria-pressed":e.isFavorite,disabled:o.isPending,onClick:t=>{t.stopPropagation(),s({isFavorite:!e.isFavorite})},children:c(v,{size:20,children:e.isFavorite?c(N,{}):c(P,{})})})]})}function Q({friends:e,selectedFriendId:t,onSelect:n,onDelete:r,onInvite:i}){let{t:a}=y(),[o,s]=(0,j.useState)(``),d=(0,j.useMemo)(()=>e.filter(({name:e})=>e.toLowerCase().includes(o.toLowerCase())),[e,o]);return l(u,{children:[l(K,{direction:`column`,gap:12,align:`stretch`,children:[c(x,{type:`BigBold`,color:`Text.default`,children:a(`friends.friendList`,{count:e.length})}),l(q,{children:[c(v,{size:18,children:c(C,{})}),c(pe,{value:o,onChange:e=>s(e.target.value),placeholder:a(`friends.searchPlaceholder`)})]})]}),l(me,{children:[l(J,{$selected:t===null,role:`button`,tabIndex:0,onClick:()=>n(null),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n(null))},children:[c(v,{size:18,children:c(E,{})}),c(Y,{children:a(`friends.myTimetable`)})]}),d.map(e=>c(xe,{friend:e,selected:t===e.id,onSelect:()=>n(e.id),onDelete:()=>r(e)},e.id)),!d.length&&c(ye,{direction:`column`,gap:0,align:`center`,children:c(x,{type:`Small`,color:`Text.disable`,children:a(`friends.noFriends`)})})]}),c(Z,{onClick:i,children:a(`friends.invite`)})]})}var Se=r(function(){let{t:e}=y(),t=m(),n=T(`tablet`),{user:r,status:s}=p(),[d,_]=o(),C=i(),w=a(),E=Number(d.get(`friendId`)),D=Number.isSafeInteger(E)&&E>0?E:null,[O,k]=(0,j.useState)(-1),[M,ie]=(0,j.useState)(h.SPRING),[N,P]=(0,j.useState)(null),[F,I]=(0,j.useState)(null),[L,R]=(0,j.useState)(!1),[ae,z]=(0,j.useState)(!1),[se,B]=(0,j.useState)(!1),[V,H]=(0,j.useState)(null),[W,G]=(0,j.useState)(C.state?.friendAddedName??null),{query:K}=g(`GET`,`/friends`,{enabled:s===`success`,staleTime:0}),q=K.data?.friends.find(({id:e})=>e===D),{query:pe,setParams:me}=g(`GET`,`/timetables`,{enabled:s===`success`&&D===null}),{query:J,setParams:Y}=g(`GET`,`/timetables/my-timetable`,{enabled:s===`success`&&D===null}),{query:X}=g(`GET`,`/timetables/${N??0}`,{enabled:s===`success`&&D===null&&N!==null}),{query:Z,setParams:ye}=g(`GET`,`/friends/${D??0}/timetables`,{enabled:s===`success`&&D!==null,staleTime:0,gcTime:0}),{query:xe,setParams:Se}=g(`GET`,`/friends/${D??0}/timetables/my-timetable`,{enabled:s===`success`&&D!==null,staleTime:0,gcTime:0}),{query:Ce}=g(`GET`,`/friends/${D??0}/timetables/${N??0}`,{enabled:s===`success`&&D!==null&&N!==null,staleTime:0,gcTime:0}),{mutation:we,requestFunction:Te}=g(`DELETE`,`/friends/${V?.id??0}`,{onSuccess:()=>{V?.id===D&&_({}),t.removeQueries({predicate:({queryKey:e})=>e[0]===`/api/v2`&&typeof e[1]==`string`&&e[1].startsWith(`/friends/${V?.id}/`)}),H(null),t.invalidateQueries({predicate:({queryKey:e})=>e[0]===`/api/v2`&&typeof e[1]==`string`&&(e[1]===`/friends`||e[1].startsWith(`/friends/lectures/`))})}});(0,j.useEffect)(()=>{if(O<0)return;let e={year:O,semester:M};D===null?(me(e),Y(e)):(ye(e),Se(e)),P(null),I(null)},[O,M,D]),(0,j.useEffect)(()=>{P(null),I(null),z(!1),R(!1)},[D]),(0,j.useEffect)(()=>{D!==null&&!K.isFetching&&K.isSuccess&&K.data&&!K.data.friends.some(({id:e})=>e===D)&&_({})},[K.data,K.isFetching,K.isSuccess,D,_]);let Ee=D===null?pe.data?.timetables??[]:Z.isError?[]:Z.data?.timetables??[],$=N===null?D===null?J:xe:D===null?X:Ce,De=$.isError?[]:$.data?.lectures??[],Oe=e=>{R(!1),_(e===null?{}:{friendId:String(e)})},ke=()=>{G(null),w(C.pathname+C.search,{replace:!0,state:null})};return s===`success`?l(ce,{children:[l(le,{children:[c(ue,{children:c(Q,{friends:K.data?.friends??[],selectedFriendId:D,onSelect:Oe,onDelete:H,onInvite:()=>B(!0)})}),l(de,{children:[l(he,{direction:`row`,gap:8,align:`center`,justify:`space-between`,children:[c(ve,{children:l(S,{onClick:()=>R(!0),children:[c(v,{size:16,children:c(re,{})}),q?.name??e(`friends.friendList`,{count:K.data?.friends.length??0})]})}),c(te,{year:O,semester:M,setYear:k,setSemester:ie,setCurrentTimetableId:P})]}),l(ge,{children:[c(A,{type:N===null?`selected`:`default`,onClick:()=>{P(null),I(null)},children:e(`friends.actualTimetable`)}),Ee.map(e=>c(A,{type:N===e.id?`selected`:`default`,onClick:()=>{P(e.id),I(null)},children:e.name},e.id))]}),$.isError&&c(x,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.loadError`)}),c(_e,{children:c(ne,{lectures:De,needTimeFilter:!1,needLectureDeletable:!1,selectedLectures:F?[F]:[],onLectureSelect:e=>{I(e),n&&z(!0)}})})]}),c(fe,{children:c(U,{lecture:F})})]}),c(b,{isOpen:L,onClose:()=>R(!1),title:e(`friends.title`),fullScreen:!0,children:c(Q,{friends:K.data?.friends??[],selectedFriendId:D,onSelect:Oe,onDelete:e=>{R(!1),H(e)},onInvite:()=>{R(!1),B(!0)}})}),c(b,{isOpen:ae,onClose:()=>z(!1),title:F?.name??``,fullScreen:!0,children:c(U,{lecture:F})}),c(oe,{isOpen:se,onClose:()=>B(!1),userName:r?.name??``}),l(b,{isOpen:V!==null,onClose:()=>H(null),title:e(`friends.deleteTitle`),fullScreen:n,children:[c(x,{type:`Normal`,color:`Text.default`,children:e(`friends.deleteConfirm`,{name:V?.name})}),we.isError&&c(x,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.updateError`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[c(S,{onClick:()=>H(null),children:e(`friends.cancel`)}),c(S,{type:we.isPending?`disabled`:`highlighted`,onClick:()=>Te({}),children:e(`friends.delete`)})]})]}),l(b,{isOpen:W!==null,onClose:ke,title:e(`friends.title`),fullScreen:n,children:[c(x,{type:`Normal`,color:`Text.default`,children:e(`friends.friendAdded`,{name:W})}),c(f,{direction:`row`,gap:0,justify:`flex-end`,children:c(S,{type:`highlighted`,onClick:ke,children:e(`friends.viewTimetable`)})})]})]}):c(be,{direction:`column`,gap:16,align:`center`,justify:`center`,children:s===`idle`&&l(u,{children:[c(x,{type:`Big`,color:`Text.placeholder`,children:e(`friends.loginRequired`)}),c(ee,{})]})})});export{Se as default,W as meta};
//# sourceMappingURL=friends-DZeuDGtr.js.map