import{w as T,x as S,a as f}from"./chunk-UIGDSWPH-NakEPbl8.js";import{n as s,F as i,j as r,a as o,b as B}from"./FlexWrapper-C0dsngQo.js";import{u as k,B as v,S as p}from"./weekdayEnum-SNVXd-6_.js";import{T as a}from"./Typography-DTsae4U-.js";import{W as $}from"./Widget-D7VP5HFl.js";import{u as M,d as N,C as _}from"./db-D9l9-yJV.js";import{u as C}from"./useUserStore-Cs3WP2WQ.js";import"./jsx-runtime-u17CrQMm.js";function j(e){return M(async()=>e?N.timetables.where("userId").equals(e).toArray():[],[e],[])}const I=s(i)`
    width: 100%;
    min-height: 100vh;
    background: ${({theme:e})=>e.colors.Background.Page.default};
    margin: 0 auto;
    max-width: 1298px;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`,A=s(i)`
    width: 100%;
    margin-bottom: 24px;
`,D=s.div`
    background-color: ${({theme:e})=>e.colors.Highlight.default};
    color: ${({theme:e})=>e.colors.Text.default};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

    &::before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
    }
`,W=s($)`
    width: 100%;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`,E=s(i)`
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({theme:e})=>e.colors.Background.Block.default};
`,F=s(i)`
    height: 400px;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 16px;
    text-align: center;
    border: 2px dashed ${({theme:e})=>e.colors.Background.Block.default};
`;function H(e,t){const n=new Date(e),m=Math.floor((new Date().getTime()-n.getTime())/1e3);if(m<60)return t("common.time.just_now")||"Just now";const c=Math.floor(m/60);if(c<60)return`${c} ${t("common.time.minutes_ago")||"minutes ago"}`;const l=Math.floor(c/60);return l<24?`${l} ${t("common.time.hours_ago")||"hours ago"}`:`${Math.floor(l/24)} ${t("common.time.days_ago")||"days ago"}`}function P(e,t){const n=parseInt(e,10);if(!isNaN(n)){if(n===p.SPRING)return t("common.semesters.spring");if(n===p.SUMMER)return t("common.semesters.summer");if(n===p.FALL)return t("common.semesters.fall");if(n===p.WINTER)return t("common.semesters.winter")}return e}const Q=T(function(){const{t}=k(),n=S(),{user:g}=C(),[m,c]=f.useState(null),[l,h]=f.useState(null),[,x]=f.useState(null),u=j(g?.id),d=f.useMemo(()=>!u||u.length===0?null:[...u].sort((y,w)=>new Date(w.updatedAt).getTime()-new Date(y.updatedAt).getTime())[0],[u]),b=!!d;return r(I,{direction:"column",align:"center",gap:24,children:[r(A,{direction:"row",align:"center",justify:"space-between",gap:16,children:[r(i,{direction:"column",gap:4,children:[o(a,{type:"BiggerBold",color:"Text.default",style:{fontSize:"24px"},children:t("common.offline.title")||"Offline Mode"}),o(a,{type:"Normal",color:"Text.placeholder",children:t("common.offline.description")||"View your saved timetable without internet connection"})]}),o(D,{children:t("common.offline.badge")||"Offline"})]}),o(W,{direction:"column",gap:20,children:b?r(B,{children:[r(E,{direction:"row",align:"center",justify:"space-between",gap:16,children:[o(i,{direction:"row",align:"baseline",gap:8,children:r(a,{type:"BigBold",color:"Text.default",style:{fontSize:"20px"},children:[d.year," ",P(d.semester,t)]})}),r(a,{type:"Small",color:"Text.placeholder",children:[t("common.offline.last_synced")||"Last synced",":"," ",H(d.syncedAt,t)]})]}),o(i,{direction:"column",style:{width:"100%",overflowX:"auto"},gap:0,children:o(_,{lectureSummary:d.lectures,setTimeFilter:x,hover:l,setHover:h,selected:m,setSelected:c,cellWidth:120})})]}):r(F,{direction:"column",align:"center",justify:"center",gap:16,children:[o(a,{type:"BigBold",color:"Text.disable",children:t("common.offline.no_data")||"No cached timetable found"}),o(a,{type:"Normal",color:"Text.placeholder",children:t("common.offline.no_data_desc")||"Connect to the internet and view your timetable to save it for offline use."})]})}),o(i,{direction:"row",justify:"center",style:{marginTop:"40px",width:"100%"},gap:0,children:o(v,{type:"default",onClick:()=>n("/"),style:{minWidth:"200px"},children:t("common.offline.go_home")||"Back to Home"})})]})});export{Q as default};
