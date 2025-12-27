import{a as o,j as T,F as g,b as I,n as h}from"./FlexWrapper-C0dsngQo.js";import{a,x as A}from"./chunk-UIGDSWPH-NakEPbl8.js";import{d as l,g as f,e as W,C as U}from"./db-D9l9-yJV.js";import{T as m}from"./Typography-DTsae4U-.js";import{g as D}from"./useIsDevice--kk7j9LI.js";import{u as j}from"./useUserStore-Cs3WP2WQ.js";import{W as q}from"./Widget-D7VP5HFl.js";import{T as z}from"./Trans-BWb067g3.js";import"./jsx-runtime-u17CrQMm.js";import"./weekdayEnum-SNVXd-6_.js";const x={async save(e,n,t,s){const i=f(e,n,t),r=new Date().toISOString(),u={id:i,userId:e,year:n,semester:t,lectures:s,syncedAt:r,updatedAt:r};await l.timetables.put(u),await l.syncMeta.put({key:"lastSyncTime",value:r})},async get(e,n,t){const s=f(e,n,t);return l.timetables.get(s)},async getAllForUser(e){return l.timetables.where("userId").equals(e).toArray()},async getLatestForUser(e){return(await l.timetables.where("userId").equals(e).reverse().sortBy("syncedAt"))[0]},async delete(e,n,t){const s=f(e,n,t);await l.timetables.delete(s)},async clearUserCache(e){const t=(await l.timetables.where("userId").equals(e).toArray()).map(s=>s.id);await l.timetables.bulkDelete(t)},async getLastSyncTime(){return(await l.syncMeta.get("lastSyncTime"))?.value??null},async hasCache(e){return await l.timetables.where("userId").equals(e).count()>0},async isStale(e,n,t,s=60){const i=await this.get(e,n,t);if(!i)return!0;const r=new Date(i.syncedAt);return(new Date().getTime()-r.getTime())/(1e3*60)>s}};function M(){const[e,n]=a.useState(typeof navigator<"u"?navigator.onLine:!0),[t,s]=a.useState(!1),i=a.useCallback(()=>{n(!0)},[]),r=a.useCallback(()=>{n(!1),s(!0)},[]);return a.useEffect(()=>{if(!(typeof window>"u"))return window.addEventListener("online",i),window.addEventListener("offline",r),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",r)}},[i,r]),{isOnline:e,wasOffline:t}}const H=h(q)`
    width: 856px;

    ${D.laptop} {
        width: 100%;
    }
`,R=h(g)`
    flex-grow: 1;
    width: 100%;
`,$=h.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    color: ${({theme:e})=>e.colors.Text.default};

    &::before {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;
    }
`,_=()=>{const{user:e,status:n}=j(),{isOnline:t}=M(),s=A(),i=a.useRef(null),[r,u]=a.useState(0),[p,C]=a.useState(null),[k,L]=a.useState(null),[,E]=a.useState(null),[c,O]=a.useState(W),[B,w]=a.useState(!1),y=new Date().getFullYear(),b="1",v=a.useCallback(async()=>{e?.id&&c.length>0&&await x.save(e.id,y,b,c)},[e?.id,c,y,b]),S=a.useCallback(async()=>{if(!e?.id)return;const d=await x.getLatestForUser(e.id);d&&(O(d.lectures),w(!0))},[e?.id]);a.useEffect(()=>{t&&c.length>0&&e?.id&&v()},[t,c,e?.id,v]),a.useEffect(()=>{!t&&e?.id?S():w(!1)},[t,e?.id,S]),a.useEffect(()=>{const d=()=>{i.current&&u(i.current.clientWidth)};return window.addEventListener("resize",d),d(),()=>{window.removeEventListener("resize",d)}},[]);const F=()=>{s("/timetable/offline")};return o(H,{direction:"column",gap:0,padding:"30px",flex:"1 1 auto",children:n==="loading"?o(m,{type:"BiggerBold",color:"Text.default",children:"Loading..."}):n==="idle"?o(m,{type:"BiggerBold",color:"Text.default",children:"로그인을 해주세요"}):T(R,{direction:"column",align:"stretch",gap:16,ref:i,children:[T(g,{direction:"row",justify:"space-between",align:"center",gap:0,children:[o(g,{direction:"row",gap:0,children:o(z,{i18nKey:"main.hisTimeTable",values:{name:e?.name},components:{name:o(m,{type:"BiggerBold",color:"Highlight.default",children:void 0}),normal:o(m,{type:"BiggerBold",color:"Text.dark",children:void 0}),space:o(I,{children:" "})}})}),(B||!t)&&o($,{onClick:F,style:{cursor:"pointer"},children:"오프라인"})]}),o(U,{cellWidth:r===0?150:(r-25)/5,lectureSummary:c||[],setTimeFilter:E,hover:k,setHover:L,selected:p,setSelected:C})]})})};export{_ as default};
