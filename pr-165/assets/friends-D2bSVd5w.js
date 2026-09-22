(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`7ebce3c4bcdc48e4202c8d6bba97b371d77f62ed`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`d6a3b5bc-3ffa-4fbb-84bb-283f1eebf2c6`,e._sentryDebugIdIdentifier=`sentry-dbid-d6a3b5bc-3ffa-4fbb-84bb-283f1eebf2c6`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-Cw1g-ycl.js";import{A as r,D as i,O as a,k as o,n as s}from"./chunk-62JRHF6Z-CcUftlgD.js";import{n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-UpLOPTGK.js";import{n as d,t as f}from"./FlexWrapper-1UBKXbw_.js";import{i as p,k as m,x as h}from"./axios-CEZojRwL.js";import{t as g}from"./useAPI-CZiyskX0.js";import{r as _,t as v}from"./Icon-Bpbg7m08.js";import{t as y}from"./useTranslation-B3VL59dE.js";import{t as b}from"./Modal-CusWTQuI.js";import{t as x}from"./Typography-Dns3FT0X.js";import{t as S}from"./Button-PF5CH8l_.js";import{t as C}from"./Search-eSo58CIx.js";import{t as w}from"./media-B1CxY-6k.js";import{t as ee}from"./useIsDevice-PRLSYFRw.js";import{t as T}from"./Person-mINd-Xq_.js";import{n as te,r as ne,t as re}from"./friendQueries-HfE51ySV.js";import{t as E}from"./ContentCopy-B9n_EohU.js";import{a as D,n as ie,r as ae,t as oe}from"./TabButton-C0c0cQZz.js";import{t as se}from"./CustomTimeTableGrid-CgAn4p6F.js";var O=t(e()),k=t(n(),1),ce=_((0,k.jsx)(`path`,{d:`M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5`}),`Group`),A=_((0,k.jsx)(`path`,{d:`M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92`}),`Share`),j=_((0,k.jsx)(`path`,{d:`M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`}),`Star`),M=_((0,k.jsx)(`path`,{d:`m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z`}),`StarBorder`),N=e=>`${e}님과 OTL 시간표 친구를 맺어보세요!`,P=(e,t)=>`${N(e)}\n${t}`;async function F(e,t){let n=P(e,t);if(navigator.clipboard){await navigator.clipboard.writeText(n);return}let r=document.createElement(`textarea`);r.value=n,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{if(!document.execCommand(`copy`))throw Error(`Clipboard unavailable`)}finally{r.remove()}}async function I(e,t){if(navigator.share)try{return await navigator.share({title:`OTL 시간표 친구 초대`,text:N(e),url:t}),`shared`}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return`cancelled`}return await F(e,t),`copied`}var L=d.div`
    padding: 14px;
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: 14px;
    line-height: 21px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`;function le({isOpen:e,onClose:t,userName:n}){let{t:r}=y(),i=ee(`mobile`),[a,o]=(0,O.useState)(null),[s,u]=(0,O.useState)(!1),[d,p]=(0,O.useState)(!1),{mutation:m,requestFunction:h}=g(`POST`,`/friends/invites`,{onSuccess:o});(0,O.useEffect)(()=>{e&&(o(null),u(!1),p(!1),h({}))},[e,h]);let _=a?`${new URL(`/friends/invite`,window.location.origin)}#${encodeURIComponent(a.token)}`:``;return c(b,{isOpen:e,onClose:t,title:r(`friends.inviteTitle`),fullScreen:i,children:l(f,{direction:`column`,gap:16,align:`stretch`,children:[c(x,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.inviteDescription`)}),m.isPending&&c(x,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.inviteLoading`)}),m.isError&&c(x,{type:`Normal`,color:`Highlight.default`,children:r(`friends.inviteError`)}),d&&c(x,{type:`Normal`,color:`Highlight.default`,children:r(`friends.inviteError`)}),a&&c(L,{className:`mp-block mp-sensitive`,children:P(n,_)}),s&&c(x,{type:`Small`,color:`Highlight.default`,children:r(`friends.copied`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[l(S,{type:a?`default`:`disabled`,onClick:async()=>{try{await F(n,_),u(!0)}catch{p(!0)}},children:[c(v,{size:16,children:c(E,{})}),r(`friends.copy`)]}),l(S,{type:a?`highlighted`:`disabled`,onClick:async()=>{try{await I(n,_)===`copied`&&u(!0)}catch{p(!0)}},children:[c(v,{size:16,children:c(A,{})}),r(`friends.share`)]})]})]})})}var R=d(f)`
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
`,z=d(s)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    text-decoration: none;
`,ue=d(f)`
    flex-wrap: wrap;
`,B=d.span`
    padding: 5px 10px;
    border-radius: 999px;
    color: ${({theme:e})=>e.colors.Highlight.default};
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    font-size: 13px;
`;function V({title:e,friends:t}){let{t:n}=y();return l(f,{direction:`column`,gap:8,align:`stretch`,children:[c(x,{type:`NormalBold`,color:`Text.default`,children:e}),t.length?c(ue,{direction:`row`,gap:6,children:t.map(e=>c(B,{children:e.name},e.id))}):c(x,{type:`Small`,color:`Text.disable`,children:n(`friends.nobody`)})]})}function H({lecture:e}){let{t}=y(),{query:n}=g(`GET`,`/friends/lectures/${e?.id??0}/overlaps`,{enabled:e!==null,staleTime:0,gcTime:0});return e?l(R,{direction:`column`,gap:16,align:`stretch`,children:[l(f,{direction:`column`,gap:4,align:`center`,children:[c(x,{type:`Bigger`,color:`Text.default`,children:e.name+e.subtitle}),l(x,{type:`Big`,color:`Text.default`,children:[e.code,` `,e.classNo?`(${e.classNo})`:``]}),c(z,{to:`/dictionary?courseId=${e.courseId}`,children:t(`header.dictionary`)})]}),n.isPending?c(x,{type:`Small`,color:`Text.placeholder`,role:`status`,children:t(`friends.loadingOverlaps`)}):n.isError?c(x,{type:`Small`,color:`Highlight.default`,role:`alert`,children:t(`friends.loadError`)}):l(u,{children:[c(V,{title:t(`friends.sameLecture`),friends:n.data?.sameLecture??[]}),c(V,{title:t(`friends.sameCourseDifferentSection`),friends:n.data?.sameCourseDifferentSection??[]}),c(V,{title:t(`friends.previousSemesterSameProfessor`),friends:n.data?.previousSemesterSameProfessor??[]})]}),c(ae,{selectedLecture:e})]}):c(R,{direction:`column`,gap:0,justify:`center`,align:`center`,children:c(x,{type:`Normal`,color:`Text.placeholder`,children:t(`friends.selectLecture`)})})}var U=()=>[{title:`친구 시간표 | OTL`},{name:`description`,content:`OTL 친구들의 시간표와 함께 듣는 수업을 확인하세요.`}],de=d.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 20px;
    box-sizing: border-box;

    ${w.tablet} {
        padding: 8px;
    }
`,fe=d.div`
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
`,W=d.div`
    min-width: 0;
    min-height: 0;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 12px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`,pe=d(W)`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 16px 0 0;

    ${w.tablet} {
        display: none;
    }
`,me=d(W)`
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
`,he=d(W)`
    padding: 16px;
    overflow: hidden;

    ${w.tablet} {
        display: none;
    }
`,G=d(f)`
    padding: 0 16px 12px;
`,K=d.label`
    height: 34px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.placeholder};
`,ge=d.input`
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({theme:e})=>e.colors.Text.default};
    font: inherit;
`,_e=d.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
`,q=d.div`
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
`,J=d.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Y=d.button`
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

    ${w.tablet} {
        width: 44px;
        height: 44px;
        flex-shrink: 0;
    }
`,ve=d.button`
    height: 48px;
    border: 0;
    border-top: 1px solid ${({theme:e})=>e.colors.Line.block};
    background: transparent;
    color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    font: inherit;
`,ye=d(f)`
    width: 100%;
    flex-shrink: 0;
    flex-wrap: wrap;
`,be=d.div`
    min-width: 0;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
`,xe=d.div`
    min-height: 0;
    flex: 1;
    display: flex;
    padding-top: 8px;
`,Se=d.div`
    display: none;
    flex-shrink: 0;
    gap: 8px;
    margin-bottom: 8px;

    ${w.tablet} {
        display: flex;
    }
`,X=d.button`
    min-height: 44px;
    min-width: 0;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 12px;
    border: 1px solid ${({theme:e})=>e.colors.Line.default};
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Button.default};
    color: ${({theme:e})=>e.colors.Text.default};
    font: inherit;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }
`,Ce=d(X)`
    flex: none;
    width: 100%;
    justify-content: flex-start;
    text-align: left;
`,Z=d(f)`
    padding: 24px 16px;
    text-align: center;
`,we=d(f)`
    width: 100%;
    height: 100%;
`;function Te({friend:e,selected:t,onSelect:n,onDelete:r}){let{t:i}=y(),a=m(),{mutation:o,requestFunction:s}=g(`PATCH`,`/friends/${e.id}/favorite`,{onSuccess:()=>re(a)});return l(q,{$selected:t,role:`button`,tabIndex:0,onClick:n,onKeyDown:e=>{e.currentTarget===e.target&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n())},children:[c(v,{size:18,children:c(T,{})}),c(J,{children:e.name}),t&&c(Y,{"aria-label":i(`friends.delete`),onClick:e=>{e.stopPropagation(),r()},children:c(v,{size:20,children:c(D,{})})}),c(Y,{"aria-label":i(`friends.favorite`),"aria-pressed":e.isFavorite,disabled:o.isPending,onClick:t=>{t.stopPropagation(),s({isFavorite:!e.isFavorite})},children:c(v,{size:20,children:e.isFavorite?c(j,{}):c(M,{})})})]})}function Ee({friends:e,selectedFriendId:t,onSelect:n,onDelete:r,onInvite:i}){let{t:a}=y(),[o,s]=(0,O.useState)(``),d=(0,O.useMemo)(()=>e.filter(({name:e})=>e.toLowerCase().includes(o.toLowerCase())),[e,o]);return l(u,{children:[l(G,{direction:`column`,gap:12,align:`stretch`,children:[c(x,{type:`BigBold`,color:`Text.default`,children:a(`friends.friendList`,{count:e.length})}),l(K,{children:[c(v,{size:18,children:c(C,{})}),c(ge,{value:o,onChange:e=>s(e.target.value),placeholder:a(`friends.searchPlaceholder`)})]})]}),l(_e,{children:[l(q,{$selected:t===null,role:`button`,tabIndex:0,onClick:()=>n(null),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n(null))},children:[c(v,{size:18,children:c(T,{})}),c(J,{children:a(`friends.myTimetable`)})]}),d.map(e=>c(Te,{friend:e,selected:t===e.id,onSelect:()=>n(e.id),onDelete:()=>r(e)},e.id)),!d.length&&c(Z,{direction:`column`,gap:0,align:`center`,children:c(x,{type:`Small`,color:`Text.disable`,children:a(`friends.noFriends`)})})]}),c(ve,{onClick:i,children:a(`friends.invite`)})]})}var De=r(function(){let{t:e}=y(),t=m(),n=ee(`tablet`),{user:r,status:s}=p(),[d,_]=o(),C=i(),w=a(),T=Number(d.get(`friendId`)),E=Number.isSafeInteger(T)&&T>0?T:null,[D,ae]=(0,O.useState)(-1),[k,A]=(0,O.useState)(h.SPRING),[j,M]=(0,O.useState)(null),[N,P]=(0,O.useState)(null),[F,I]=(0,O.useState)(!1),[L,R]=(0,O.useState)(!1),z=(0,O.useRef)(null),[ue,B]=(0,O.useState)(!1),[V,U]=(0,O.useState)(null),[W,G]=(0,O.useState)(C.state?.friendAddedName??null);(0,O.useEffect)(()=>{n&&L&&z.current?.focus()},[n,L,N]);let{query:K}=g(`GET`,`/friends`,{enabled:s===`success`,staleTime:0}),ge=K.data?.friends.find(({id:e})=>e===E),{query:_e,setParams:q}=g(`GET`,`/timetables`,{enabled:s===`success`&&E===null}),{query:J,setParams:Y}=g(`GET`,`/timetables/my-timetable`,{enabled:s===`success`&&E===null}),{query:ve}=g(`GET`,`/timetables/${j??0}`,{enabled:s===`success`&&E===null&&j!==null}),{query:Z,setParams:Te}=g(`GET`,`/friends/${E??0}/timetables`,{enabled:s===`success`&&E!==null,staleTime:0,gcTime:0}),{query:De,setParams:Oe}=g(`GET`,`/friends/${E??0}/timetables/my-timetable`,{enabled:s===`success`&&E!==null,staleTime:0,gcTime:0}),{query:ke}=g(`GET`,`/friends/${E??0}/timetables/${j??0}`,{enabled:s===`success`&&E!==null&&j!==null,staleTime:0,gcTime:0}),{mutation:Ae,requestFunction:je}=g(`DELETE`,`/friends/${V?.id??0}`,{onSuccess:()=>{V?.id===E&&_({}),V&&te(t,V.id),U(null),re(t)}});(0,O.useEffect)(()=>{if(D<0)return;let e={year:D,semester:k};E===null?(q(e),Y(e)):(Te(e),Oe(e)),M(null),P(null)},[D,k,E]),(0,O.useEffect)(()=>{M(null),P(null),R(!1),I(!1)},[E]),(0,O.useEffect)(()=>{E!==null&&!K.isFetching&&K.isSuccess&&K.data&&!K.data.friends.some(({id:e})=>e===E)&&_({})},[K.data,K.isFetching,K.isSuccess,E,_]);let Me=E===null?_e.data?.timetables??[]:Z.isError?[]:Z.data?.timetables??[],Q=j===null?E===null?J:De:E===null?ve:ke,$=Q.isError?[]:Q.data?.lectures??[],Ne=e=>{I(!1),_(e===null?{}:{friendId:String(e)})},Pe=()=>{G(null),w(C.pathname+C.search,{replace:!0,state:null})};return s===`success`?l(de,{children:[l(fe,{children:[!n&&c(pe,{children:c(Ee,{friends:K.data?.friends??[],selectedFriendId:E,onSelect:Ne,onDelete:U,onInvite:()=>B(!0)})}),l(me,{children:[l(Se,{children:[l(X,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":F,onClick:()=>I(!0),children:[c(v,{size:18,children:c(ce,{})}),e(`friends.selectFriend`)]}),c(X,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":L,onClick:()=>R(!0),children:e(`friends.viewOverlaps`)})]}),l(ye,{direction:`row`,gap:8,align:`center`,justify:`space-between`,children:[c(x,{type:`NormalBold`,color:`Text.default`,children:ge?.name??e(`friends.myTimetable`)}),c(ie,{year:D,semester:k,setYear:ae,setSemester:A,setCurrentTimetableId:M})]}),l(be,{children:[c(oe,{type:j===null?`selected`:`default`,onClick:()=>{M(null),P(null)},children:e(`friends.actualTimetable`)}),Me.map(e=>c(oe,{type:j===e.id?`selected`:`default`,onClick:()=>{M(e.id),P(null)},children:e.name},e.id))]}),Q.isError&&c(x,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.loadError`)}),c(xe,{children:c(se,{lectures:$,needTimeFilter:!1,needLectureDeletable:!1,selectedLectures:N?[N]:[],onLectureSelect:e=>{P(e),n&&R(!0)}})})]}),!n&&c(he,{children:c(H,{lecture:N})})]}),c(b,{isOpen:n&&F,onClose:()=>I(!1),title:e(`friends.title`),fullScreen:!0,children:c(Ee,{friends:K.data?.friends??[],selectedFriendId:E,onSelect:Ne,onDelete:e=>{I(!1),U(e)},onInvite:()=>{I(!1),B(!0)}})}),c(b,{isOpen:n&&L,onClose:()=>R(!1),title:e(`friends.viewOverlaps`),fullScreen:!0,children:N?l(u,{children:[c(Ce,{ref:z,type:`button`,onClick:()=>P(null),children:e(`friends.chooseAnotherLecture`)}),c(H,{lecture:N})]}):l(f,{direction:`column`,gap:8,align:`stretch`,children:[c(x,{type:`Normal`,color:`Text.default`,children:e(`friends.chooseLecture`)}),Q.isPending?c(x,{role:`status`,children:e(`friends.loadingLectures`)}):Q.isError?c(x,{role:`alert`,children:e(`friends.loadError`)}):$.length===0?c(x,{children:e(`friends.noLectures`)}):$.map((e,t)=>l(Ce,{ref:t===0?z:void 0,type:`button`,onClick:()=>P(e),children:[e.name,e.subtitle,` `,e.classNo&&`(${e.classNo})`]},e.id))]})}),c(le,{isOpen:ue,onClose:()=>B(!1),userName:r?.name??``}),l(b,{isOpen:V!==null,onClose:()=>U(null),title:e(`friends.deleteTitle`),fullScreen:n,children:[c(x,{type:`Normal`,color:`Text.default`,children:e(`friends.deleteConfirm`,{name:V?.name})}),Ae.isError&&c(x,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.updateError`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[c(S,{onClick:()=>U(null),children:e(`friends.cancel`)}),c(S,{type:Ae.isPending?`disabled`:`highlighted`,onClick:()=>je({}),children:e(`friends.delete`)})]})]}),l(b,{isOpen:W!==null,onClose:Pe,title:e(`friends.title`),fullScreen:n,children:[c(x,{type:`Normal`,color:`Text.default`,children:e(`friends.friendAdded`,{name:W})}),c(f,{direction:`row`,gap:0,justify:`flex-end`,children:c(S,{type:`highlighted`,onClick:Pe,children:e(`friends.viewTimetable`)})})]})]}):c(we,{direction:`column`,gap:16,align:`center`,justify:`center`,children:s===`idle`&&l(u,{children:[c(x,{type:`Big`,color:`Text.placeholder`,children:e(`friends.loginRequired`)}),c(ne,{})]})})});export{De as default,U as meta};
//# sourceMappingURL=friends-D2bSVd5w.js.map