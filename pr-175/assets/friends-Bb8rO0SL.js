(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`af3904f47daa7fe00eceb184901ba857ab9bd0f0`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`6c490818-f3e6-4c08-9128-c904ef168ce0`,e._sentryDebugIdIdentifier=`sentry-dbid-6c490818-f3e6-4c08-9128-c904ef168ce0`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-kAKzwoYS.js";import{A as r,D as i,O as a,k as o}from"./chunk-62JRHF6Z-DU0TQpTG.js";import{l as s,n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-B0kn641l.js";import{n as d,t as f}from"./FlexWrapper-BJGUsQ0M.js";import{C as p,S as m,i as h,j as g,w as _}from"./axios-CcOLyv3n.js";import{t as v}from"./useAPI-D5AoO8PN.js";import{r as y,t as b}from"./Icon-B8rBDsjV.js";import{t as x}from"./useTranslation-bPjPVdSH.js";import{t as S}from"./IconButton-v53IM8JI.js";import{t as C}from"./Close-A3RBuuoA.js";import{t as w}from"./Modal-Do9FUxih.js";import{t as T}from"./Typography-DlvUpcUq.js";import{t as E}from"./Button-CpiA2sLb.js";import{t as D}from"./Search-Cam7CE7l.js";import{t as O}from"./StyledDivider-DL_aLt8O.js";import{t as k}from"./media-BWYKoiWU.js";import{t as ee}from"./useIsDevice-4efdKDZt.js";import{n as te,r as ne,t as re}from"./friendQueries-DMKu4bTe.js";import{t as A}from"./Widget-y5Pkwczn.js";import{t as ie}from"./ContentCopy-BkhEkh_2.js";import{c as j,n as M,s as ae,t as N}from"./TabButton-C_-xGcEc.js";import{n as P,t as F}from"./TextInput-BiniamO8.js";import{r as oe,t as se}from"./CustomTimeTableGrid-DKfB0GP9.js";var I=t(e()),L=t(n(),1),R=y((0,L.jsx)(`path`,{d:`M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z`}),`DeleteOutlineOutlined`),z=y((0,L.jsx)(`path`,{d:`M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z`}),`Download`),B=y((0,L.jsx)(`path`,{d:`M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z`}),`EventNote`),ce=y((0,L.jsx)(`path`,{d:`M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5`}),`Group`),V=y((0,L.jsx)(`path`,{d:`M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z`}),`Refresh`),H=y((0,L.jsx)(`path`,{d:`M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92`}),`Share`),le=d(f)`
    color: ${({theme:e})=>e.colors.Text.default};
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
    overflow-wrap: anywhere;
`,ue=d(T)`
    flex-shrink: 0;
    min-width: 3em;
    white-space: nowrap;
`;function de({block:e,timetableName:t,onClose:n}){let{t:r}=x();return l(le,{direction:`column`,gap:12,align:`stretch`,role:`region`,"aria-label":r(`friends.customBlockDetail`),children:[l(f,{direction:`row`,gap:8,justify:`space-between`,align:`center`,children:[c(T,{type:`BigBold`,color:`Text.default`,children:e.block_name}),n&&c(S,{"aria-label":r(`common.search.close`),onClick:n,children:c(b,{size:20,children:c(C,{})})})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(ue,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.timetable`)}),c(T,{type:`NormalMedium`,color:`Highlight.default`,children:t})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(ue,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.time`)}),c(f,{direction:`column`,gap:8,align:`stretch`,flex:`1`,style:{minWidth:0},children:oe(e).map((e,t)=>c(P,{timeFilter:e,setTimeFilter:void 0},t))})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(ue,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.place`)}),c(T,{type:`Normal`,color:`Text.default`,children:e.place||`—`})]})]})}var U=d.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-height: 44px;
    padding: 8px 12px;
    border: 0;
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Button.default};
    color: ${({theme:e})=>e.colors.Text.default};
    font: inherit;
    font-size: 14px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: ${({theme:e})=>e.colors.Background.Button.dark};
    }

    &:focus-visible {
        outline: 2px solid ${({theme:e})=>e.colors.Highlight.default};
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,fe=Object.defineProperty,W=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,me=(e,t,n)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K=(e,t)=>{for(var n in t||={})G.call(t,n)&&me(e,n,t[n]);if(W)for(var n of W(t))pe.call(t,n)&&me(e,n,t[n]);return e},q=(e,t)=>{var n={};for(var r in e)G.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&W)for(var r of W(e))t.indexOf(r)<0&&pe.call(e,r)&&(n[r]=e[r]);return n},J;(e=>{let t=class t{constructor(e,n,r,a){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version value out of range`);if(a<-1||a>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let o=[];for(let e=0;e<this.size;e++)o.push(!1);for(let e=0;e<this.size;e++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();let s=this.addEccAndInterleave(r);if(this.drawCodewords(s),a==-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(a=t,e=n),this.applyMask(t)}}i(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}static encodeText(n,r){let i=e.QrSegment.makeSegments(n);return t.encodeSegments(i,r)}static encodeBinary(n,r){let i=e.QrSegment.makeBytes(n);return t.encodeSegments([i],r)}static encodeSegments(e,r,a=1,s=40,c=-1,l=!0){if(!(t.MIN_VERSION<=a&&a<=s&&s<=t.MAX_VERSION)||c<-1||c>7)throw RangeError(`Invalid value`);let u,d;for(u=a;;u++){let n=t.getNumDataCodewords(u,r)*8,i=o.getTotalBits(e,u);if(i<=n){d=i;break}if(u>=s)throw RangeError(`Data too long`)}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])l&&d<=t.getNumDataCodewords(u,e)*8&&(r=e);let f=[];for(let t of e){n(t.mode.modeBits,4,f),n(t.numChars,t.mode.numCharCountBits(u),f);for(let e of t.getData())f.push(e)}i(f.length==d);let p=t.getNumDataCodewords(u,r)*8;i(f.length<=p),n(0,Math.min(4,p-f.length),f),n(0,(8-f.length%8)%8,f),i(f.length%8==0);for(let e=236;f.length<p;e^=253)n(e,8,f);let m=[];for(;m.length*8<f.length;)m.push(0);return f.forEach((e,t)=>m[t>>>3]|=e<<7-(t&7)),new t(u,r,m,c)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let a=(t<<10|n)^21522;i(!(a>>>15));for(let e=0;e<=5;e++)this.setFunctionModule(8,e,r(a,e));this.setFunctionModule(8,7,r(a,6)),this.setFunctionModule(8,8,r(a,7)),this.setFunctionModule(7,8,r(a,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,r(a,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,r(a,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,r(a,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;i(!(t>>>18));for(let e=0;e<18;e++){let n=r(t,e),i=this.size-11+e%3,a=Math.floor(e/3);this.setFunctionModule(i,a,n),this.setFunctionModule(a,i,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;0<=a&&a<this.size&&0<=o&&o<this.size&&this.setFunctionModule(a,o,i!=2&&i!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){let n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw RangeError(`Invalid argument`);let a=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),c=a-s%a,l=Math.floor(s/a),u=[],d=t.reedSolomonComputeDivisor(o);for(let n=0,r=0;n<a;n++){let i=e.slice(r,r+l-o+(n<c?0:1));r+=i.length;let a=t.reedSolomonComputeRemainder(i,d);n<c&&i.push(0),u.push(i.concat(a))}let f=[];for(let e=0;e<u[0].length;e++)u.forEach((t,n)=>{(e!=l-o||n>=c)&&f.push(t[e])});return i(f.length==s),f}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError(`Invalid argument`);let n=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let i=0;i<this.size;i++)for(let a=0;a<2;a++){let o=t-a,s=t+1&2?i:this.size-1-i;!this.isFunction[s][o]&&n<e.length*8&&(this.modules[s][o]=r(e[n>>>3],7-(n&7)),n++)}}i(n==e.length*8)}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[n][o]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[n][o],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][n]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[o][n],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let r=0;r<this.size-1;r++){let i=this.modules[n][r];i==this.modules[n][r+1]&&i==this.modules[n+1][r]&&i==this.modules[n+1][r+1]&&(e+=t.PENALTY_N2)}let n=0;for(let e of this.modules)n=e.reduce((e,t)=>e+ +!!t,n);let r=this.size*this.size,a=Math.ceil(Math.abs(n*20-r*10)/r)-1;return i(0<=a&&a<=9),e+=a*t.PENALTY_N4,i(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{let e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version number out of range`);let n=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return i(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let r=1;for(let i=0;i<e;i++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1]);r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map(e=>0);for(let i of e){let e=i^r.shift();r.push(0),n.forEach((n,i)=>r[i]^=t.reedSolomonMultiply(n,e))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return i(!(n>>>8)),n}finderPenaltyCountPatterns(e){let t=e[1];i(t<=this.size*3);let n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function n(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function r(e,t){return!!(e>>>t&1)}function i(e){if(!e)throw Error(`Assertion error`)}let a=class e{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}static makeBytes(t){let r=[];for(let e of t)n(e,8,r);return new e(e.Mode.BYTE,t.length,r)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError(`String contains non-numeric characters`);let r=[];for(let e=0;e<t.length;){let i=Math.min(t.length-e,3);n(parseInt(t.substring(e,e+i),10),i*3+1,r),e+=i}return new e(e.Mode.NUMERIC,t.length,r)}static makeAlphanumeric(t){if(!e.isAlphanumeric(t))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let r=[],i;for(i=0;i+2<=t.length;i+=2){let a=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i))*45;a+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i+1)),n(a,11,r)}return i<t.length&&n(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)),6,r),new e(e.Mode.ALPHANUMERIC,t.length,r)}static makeSegments(t){return t==``?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let r=[];if(t<0)throw RangeError(`ECI assignment value out of range`);if(t<128)n(t,8,r);else if(t<16384)n(2,2,r),n(t,14,r);else if(t<1e6)n(6,3,r),n(t,21,r);else throw RangeError(`ECI assignment value out of range`);return new e(e.Mode.ECI,0,r)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(let r of e){let e=r.mode.numCharCountBits(t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)==`%`?(t.push(parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}};a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`;let o=a;e.QrSegment=a})(J||={}),(e=>{(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(e.QrCode||={})})(J||={}),(e=>{(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||={})})(J||={});var Y=J,he={L:Y.QrCode.Ecc.LOW,M:Y.QrCode.Ecc.MEDIUM,Q:Y.QrCode.Ecc.QUARTILE,H:Y.QrCode.Ecc.HIGH},X=128,ge=`L`,Z=`#FFFFFF`,Q=`#000000`,_e=!1,ve=1,ye=4,be=0,xe=.1;function Se(e,t=0){let n=[];return e.forEach(function(e,r){let i=null;e.forEach(function(a,o){if(!a&&i!==null){n.push(`M${i+t} ${r+t}h${o-i}v1H${i+t}z`),i=null;return}if(o===e.length-1){if(!a)return;i===null?n.push(`M${o+t},${r+t} h1v1H${o+t}z`):n.push(`M${i+t},${r+t} h${o+1-i}v1H${i+t}z`);return}a&&i===null&&(i=o)})}),n.join(``)}function $(e,t){return e.slice().map((e,n)=>n<t.y||n>=t.y+t.h?e:e.map((e,n)=>n<t.x||n>=t.x+t.w?e:!1))}function Ce(e,t,n,r){if(r==null)return null;let i=e.length+n*2,a=Math.floor(t*xe),o=i/t,s=(r.width||a)*o,c=(r.height||a)*o,l=r.x==null?e.length/2-s/2:r.x*o,u=r.y==null?e.length/2-c/2:r.y*o,d=r.opacity==null?1:r.opacity,f=null;if(r.excavate){let e=Math.floor(l),t=Math.floor(u);f={x:e,y:t,w:Math.ceil(s+l-e),h:Math.ceil(c+u-t)}}let p=r.crossOrigin;return{x:l,y:u,h:c,w:s,excavation:f,opacity:d,crossOrigin:p}}function we(e,t){return t==null?e?ye:be:Math.max(Math.floor(t),0)}function Te({value:e,level:t,minVersion:n,includeMargin:r,marginSize:i,imageSettings:a,size:o,boostLevel:s}){let c=I.useMemo(()=>{let r=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...Y.QrSegment.makeSegments(t)),e),[]);return Y.QrCode.encodeSegments(r,he[t],n,void 0,void 0,s)},[e,t,n,s]),{cells:l,margin:u,numCells:d,calculatedImageSettings:f}=I.useMemo(()=>{let e=c.getModules(),t=we(r,i);return{cells:e,margin:t,numCells:e.length+t*2,calculatedImageSettings:Ce(e,o,t,a)}},[c,o,a,r,i]);return{qrcode:c,margin:u,cells:l,numCells:d,calculatedImageSettings:f}}var Ee=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),De=I.forwardRef(function(e,t){let n=e,{value:r,size:i=X,level:a=ge,bgColor:o=Z,fgColor:s=Q,includeMargin:c=_e,minVersion:l=ve,boostLevel:u,marginSize:d,imageSettings:f}=n,p=q(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`marginSize`,`imageSettings`]),{style:m}=p,h=q(p,[`style`]),g=f?.src,_=I.useRef(null),v=I.useRef(null),y=I.useCallback(e=>{_.current=e,typeof t==`function`?t(e):t&&(t.current=e)},[t]),[b,x]=I.useState(!1),{margin:S,cells:C,numCells:w,calculatedImageSettings:T}=Te({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:d,imageSettings:f,size:i});I.useEffect(()=>{if(_.current!=null){let e=_.current,t=e.getContext(`2d`);if(!t)return;let n=C,r=v.current,a=T!=null&&r!==null&&r.complete&&r.naturalHeight!==0&&r.naturalWidth!==0;a&&T.excavation!=null&&(n=$(C,T.excavation));let c=window.devicePixelRatio||1;e.height=e.width=i*c;let l=i/w*c;t.scale(l,l),t.fillStyle=o,t.fillRect(0,0,w,w),t.fillStyle=s,Ee?t.fill(new Path2D(Se(n,S))):C.forEach(function(e,n){e.forEach(function(e,r){e&&t.fillRect(r+S,n+S,1,1)})}),T&&(t.globalAlpha=T.opacity),a&&t.drawImage(r,T.x+S,T.y+S,T.w,T.h)}}),I.useEffect(()=>{x(!1)},[g]);let E=K({height:i,width:i},m),D=null;return g!=null&&(D=I.createElement(`img`,{src:g,key:g,style:{display:`none`},onLoad:()=>{x(!0)},ref:v,crossOrigin:T?.crossOrigin})),I.createElement(I.Fragment,null,I.createElement(`canvas`,K({style:E,height:i,width:i,ref:y,role:`img`},h)),D)});De.displayName=`QRCodeCanvas`;var Oe=I.forwardRef(function(e,t){let n=e,{value:r,size:i=X,level:a=ge,bgColor:o=Z,fgColor:s=Q,includeMargin:c=_e,minVersion:l=ve,boostLevel:u,title:d,marginSize:f,imageSettings:p}=n,m=q(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`title`,`marginSize`,`imageSettings`]),{margin:h,cells:g,numCells:_,calculatedImageSettings:v}=Te({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:f,imageSettings:p,size:i}),y=g,b=null;p!=null&&v!=null&&(v.excavation!=null&&(y=$(g,v.excavation)),b=I.createElement(`image`,{href:p.src,height:v.h,width:v.w,x:v.x+h,y:v.y+h,preserveAspectRatio:`none`,opacity:v.opacity,crossOrigin:v.crossOrigin}));let x=Se(y,h);return I.createElement(`svg`,K({height:i,width:i,viewBox:`0 0 ${_} ${_}`,ref:t,role:`img`},m),!!d&&I.createElement(`title`,null,d),I.createElement(`path`,{fill:o,d:`M0,0 h${_}v${_}H0z`,shapeRendering:`crispEdges`}),I.createElement(`path`,{fill:s,d:x,shapeRendering:`crispEdges`}),b)});Oe.displayName=`QRCodeSVG`;async function ke(e){let t=e.toDataURL(`image/png`);if(!t.startsWith(`data:image/png;`))throw Error(`Could not encode the QR code as PNG`);let n=document.createElement(`a`);n.href=t,n.download=`otl-friend-qr.png`,document.body.appendChild(n);try{n.click()}finally{n.remove()}}async function Ae(e){if(!navigator.clipboard?.write||typeof ClipboardItem>`u`)throw new DOMException(`Image clipboard is unavailable`,`NotSupportedError`);await navigator.clipboard.write([new ClipboardItem({"image/png":new Promise((t,n)=>{e.toBlob(e=>{e?t(e):n(Error(`Could not encode the QR code as PNG`))},`image/png`)})})])}var je=d.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
`;function Me({inviteUrl:e,qrBusy:t,setQrBusy:n}){let{t:r}=x(),i=(0,I.useRef)(null),[a,o]=(0,I.useState)(null),[s,d]=(0,I.useState)(null),[p,m]=(0,I.useState)(null),h=a===e,g=async e=>{let r=i.current;if(!(!r||!h||t)){d(null),m(null),n(!0);try{e===`download`?await ke(r):await Ae(r),d(e===`download`?`qrDownloaded`:`qrCopied`)}catch(t){m(e===`download`?`qrDownloadError`:t instanceof DOMException&&t.name===`NotSupportedError`?`qrCopyUnsupported`:`qrCopyError`)}finally{n(!1)}}};return l(u,{children:[c(f,{direction:`row`,justify:`center`,gap:0,onLoadCapture:t=>{t.target instanceof HTMLImageElement&&o(e)},onErrorCapture:e=>{e.target instanceof HTMLImageElement&&(o(null),m(`qrImageError`))},children:c(De,{ref:i,value:e,"aria-label":r(`friends.inviteQr`),title:r(`friends.inviteQr`),role:`img`,size:512,style:{width:200,height:200},level:`H`,marginSize:4,bgColor:`#FFFFFF`,fgColor:`#000000`,imageSettings:{src:`/static/favicon-192.png`,width:88,height:88,excavate:!0},className:`mp-block mp-sensitive`},e)}),l(je,{children:[l(U,{type:`button`,disabled:!h||t,onClick:()=>g(`download`),children:[c(b,{size:16,children:c(z,{})}),r(`friends.downloadQr`)]}),l(U,{type:`button`,disabled:!h||t,onClick:()=>g(`copy`),children:[c(b,{size:16,children:c(ie,{})}),r(`friends.copyQr`)]})]}),s&&c(T,{type:`Small`,color:`Highlight.default`,role:`status`,children:r(`friends.${s}`)}),p&&c(T,{type:`Small`,color:`Highlight.default`,role:`alert`,children:r(`friends.${p}`)})]})}function Ne(e,t){let n=g(),{query:r}=v(`GET`,`/friends/code`,{enabled:e,staleTime:0,gcTime:0}),{mutation:i,requestFunction:a}=v(`POST`,`/friends/code`,{retry:!1,onMutate:()=>n.cancelQueries({queryKey:[`/friends/code`]}),onSuccess:async e=>{await n.cancelQueries({queryKey:[`/friends/code`]}),n.setQueriesData({queryKey:[`/friends/code`]},e)},onError:async()=>{await r.refetch()},onSettled:t});return{query:r,regenerate:i,regenerateCode:a,code:r.isSuccess&&!i.isPending?r.data.code:null}}var Pe=e=>`${e}님과 OTL 시간표 친구를 맺어보세요!`,Fe=(e,t)=>`${Pe(e)}\n${t}`;async function Ie(e,t){let n=Fe(e,t);if(navigator.clipboard){await navigator.clipboard.writeText(n);return}let r=document.createElement(`textarea`);r.value=n,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{if(!document.execCommand(`copy`))throw Error(`Clipboard unavailable`)}finally{r.remove()}}async function Le(e,t){if(navigator.share)try{return await navigator.share({title:`OTL 시간표 친구 초대`,text:Pe(e),url:t}),`shared`}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return`cancelled`}return await Ie(e,t),`copied`}var Re=d.div`
    padding: 14px;
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: 14px;
    line-height: 21px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`;function ze({isOpen:e,onClose:t,userName:n}){let{t:r}=x(),i=ee(`mobile`),[a,o]=(0,I.useState)(!1),[s,d]=(0,I.useState)(!1),[p,m]=(0,I.useState)(!1),[h,g]=(0,I.useState)(!1),{query:_,regenerate:v,regenerateCode:y,code:S}=Ne(e,()=>g(!1)),{reset:C}=v,D=S?`${new URL(`/friends/invite`,window.location.origin)}#${S}`:``;(0,I.useEffect)(()=>{o(!1),d(!1),m(!1)},[e,D]);let O=async()=>{if(D)try{await Ie(n,D),o(!0)}catch{d(!0)}},k=async()=>{if(D)try{await Le(n,D)===`copied`&&o(!0)}catch{d(!0)}},te=l(f,{direction:`column`,gap:8,align:`stretch`,children:[c(T,{type:`Normal`,color:`Text.default`,children:r(`friends.regenerateConfirm`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[c(U,{type:`button`,disabled:v.isPending,onClick:()=>g(!1),children:r(`friends.cancel`)}),c(U,{type:`button`,disabled:v.isPending||p,onClick:()=>y({}),children:r(`friends.regenerateCode`)})]})]});return c(w,{isOpen:e,onClose:()=>{g(!1),v.isPending||C(),t()},title:r(`friends.inviteTitle`),fullScreen:i,children:l(f,{direction:`column`,gap:16,align:`stretch`,children:[c(T,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.inviteDescription`)}),_.isPending&&c(T,{type:`Normal`,color:`Text.placeholder`,role:`status`,children:r(`friends.inviteLoading`)}),_.isError&&c(T,{type:`Normal`,color:`Highlight.default`,role:`alert`,children:r(`friends.inviteError`)}),s&&c(T,{type:`Normal`,color:`Highlight.default`,children:r(`friends.inviteError`)}),v.isPending&&c(T,{type:`Normal`,color:`Text.placeholder`,role:`status`,children:r(`friends.regeneratingCode`)}),v.isError&&c(T,{type:`Normal`,color:`Highlight.default`,role:`alert`,children:r(`friends.regenerateError`)}),v.isSuccess&&c(T,{type:`Small`,color:`Highlight.default`,role:`status`,children:r(`friends.regeneratedCode`)}),h&&te,S&&l(u,{children:[l(f,{direction:`row`,gap:8,justify:`space-between`,children:[l(T,{type:`BigBold`,color:`Text.default`,className:`mp-block mp-sensitive`,children:[r(`friends.code`),`: `,S]}),!h&&l(U,{type:`button`,disabled:p,onClick:()=>{C(),g(!0)},children:[c(b,{size:16,children:c(V,{})}),r(`friends.regenerateCode`)]})]}),c(Re,{className:`mp-block mp-sensitive`,children:Fe(n,D)}),c(Me,{inviteUrl:D,qrBusy:p,setQrBusy:m},D)]}),a&&c(T,{type:`Small`,color:`Highlight.default`,children:r(`friends.copied`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[l(E,{type:S?`default`:`disabled`,onClick:O,children:[c(b,{size:16,children:c(ie,{})}),r(`friends.copy`)]}),l(E,{type:S?`highlighted`:`disabled`,onClick:k,children:[c(b,{size:16,children:c(H,{})}),r(`friends.share`)]})]})]})})}function Be(e){return c(M,{readOnlySelection:e})}var Ve=d(f)`
    cursor: pointer;
    min-height: 44px;
    flex-shrink: 0;
    &:hover {
        background-color: ${({theme:e})=>e.colors.Background.Tab.dark};
    }
    background: ${({$selected:e,theme:t})=>e?t.colors.Background.Block.dark:t.colors.Background.Tab.default};
    border-radius: 4px;
`,He=d(T)`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;function Ue({friend:e,showSchedule:t,selected:n,onSelect:r,onDelete:i}){let{t:a}=x(),o=s(),u=g(),{mutation:d,requestFunction:f}=v(`PATCH`,`/friends/${e.id}/favorite`,{onSuccess:()=>re(u)});return l(Ve,{$selected:n,direction:`row`,gap:8,align:`center`,padding:`8px 8px 8px 12px`,role:`button`,tabIndex:0,onClick:r,onKeyDown:e=>{e.target===e.currentTarget&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r())},children:[c(He,{type:`NormalBold`,color:`Text.default`,children:e.name}),t&&e.hasScheduleNow===!0&&c(b,{size:18,color:o.colors.Text.default,role:`img`,"aria-label":a(`friends.scheduleNow`),title:a(`friends.scheduleNow`),children:c(B,{})}),n&&c(S,{"aria-label":a(`friends.delete`),onClick:e=>{e.stopPropagation(),i()},styles:{padding:6},children:c(b,{size:18,color:o.colors.Text.lighter,children:c(R,{})})}),c(S,{"aria-label":a(`friends.favorite`),"aria-pressed":e.isFavorite,disabled:d.isPending,onClick:t=>{t.stopPropagation(),f({isFavorite:!e.isFavorite})},styles:{padding:6},children:c(b,{size:18,color:e.isFavorite?o.colors.Icon.yellow:o.colors.Text.lighter,children:e.isFavorite?c(j,{}):c(ae,{})})}),d.isError&&c(T,{type:`Small`,color:`Highlight.default`,role:`alert`,children:a(`friends.updateError`)})]})}var We=(0,I.memo)(Ue),Ge=d(T)`
    align-self: center;
`,Ke=d.label`
    height: 40px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 16px;
    border-radius: 6px;
    border: 1px solid ${({theme:e})=>e.colors.Line.divider};
    background: ${({theme:e})=>e.colors.Background.Section.default};
    color: ${({theme:e})=>e.colors.Highlight.default};
`,qe=d(F)`
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({theme:e})=>e.colors.Text.default};
    padding: 0;
    font: inherit;
    font-size: ${({theme:e})=>e.fonts.Normal.fontSize}px;

    &::placeholder {
        color: ${({theme:e})=>e.colors.Highlight.default};
    }
`,Je=d.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scrollbar-width: thin;
    scrollbar-color: ${({theme:e})=>e.colors.Line.default} transparent;

    &:hover {
        scrollbar-color: ${({theme:e})=>e.colors.Line.dark} transparent;
    }

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.colors.Line.default};
        border-radius: 8px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.colors.Line.dark};
    }
`,Ye=d(f)`
    min-height: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,Xe=d.button`
    height: 48px;
    flex-shrink: 0;
    border: 0;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Button.highlight};
    color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    font: inherit;
    font-size: ${({theme:e})=>e.fonts.NormalMedium.fontSize}px;
    font-weight: ${({theme:e})=>e.fonts.NormalMedium.fontWeight};
`,Ze=d.button`
    border: 0;
    border-radius: 4px;
    min-height: 44px;
    padding: 8px 12px;
    font: inherit;
    text-align: left;
    cursor: pointer;
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({$selected:e,theme:t})=>e?t.colors.Background.Block.dark:t.colors.Background.Tab.default};
`,Qe=d(f)`
    padding: 24px 16px;
    text-align: center;
`;function $e({friends:e,showSchedule:t,selectedFriendId:n,onSelect:r,onDelete:i,onInvite:a}){let{t:o}=x(),[s,u]=(0,I.useState)(``),d=(0,I.useMemo)(()=>e.filter(({name:e})=>e.toLowerCase().includes(s.toLowerCase())),[e,s]);return l(Ye,{direction:`column`,gap:12,align:`stretch`,children:[c(Ge,{type:`Big`,color:`Text.default`,role:`heading`,"aria-level":2,children:o(`friends.friendList`,{count:e.length})}),c(O,{}),l(Ke,{children:[c(b,{size:20,children:c(D,{})}),c(qe,{value:s,handleChange:u,placeholder:o(`friends.searchPlaceholder`),"aria-label":o(`friends.searchPlaceholder`)})]}),l(Je,{children:[c(Ze,{type:`button`,$selected:n===null,"aria-pressed":n===null,onClick:()=>r(null),children:o(`friends.myTimetable`)}),d.map(e=>c(We,{friend:e,showSchedule:t,selected:n===e.id,onSelect:()=>r(n===e.id?null:e.id),onDelete:()=>i(e)},e.id)),!d.length&&c(Qe,{direction:`column`,gap:0,align:`center`,children:c(T,{type:`Small`,color:`Text.disable`,children:o(`friends.noFriends`)})})]}),c(Xe,{onClick:a,children:o(`friends.invite`)})]})}var et=()=>[{title:`친구 시간표 | OTL`},{name:`description`,content:`OTL 친구들의 시간표와 함께 듣는 수업을 확인하세요.`}],tt=d(f)`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0 20px 12px;
    box-sizing: border-box;

    ${k.tablet} {
        padding: 0 8px 8px;
    }
`,nt=d(f)`
    width: 100%;
    max-width: 1714px;
    height: 100%;
    min-height: 0;
    margin: 0 auto;
    ${k.tablet} {
        flex-direction: column;
    }
`,rt=d(A)`
    min-width: 0;
    min-height: 0;
    overflow: hidden;
`,it=d(f)`
    width: 300px;
    min-height: 0;
    flex-shrink: 0;
`,at=d.div`
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    flex: 1;

    ${k.tablet} {
        width: 100%;
        height: 100%;
    }
`,ot=d(A)`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    padding: 16px;
    border-top-left-radius: 0;

    ${k.tablet} {
        padding: 8px;
    }
`,st=d(A)`
    min-height: 0;
    min-width: 0;
    overflow: hidden;
`,ct=d(f)`
    width: 100%;
    flex-shrink: 0;
    height: 34px;
    min-width: 0;
`,lt=d.div`
    min-width: 0;
    flex: 1;
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scrollbar-width: none;
`,ut=d(N)`
    height: 34px;
    flex-shrink: 0;
    padding: 8px 12px;
`,dt=d.div`
    min-height: 0;
    flex: 1;
    display: flex;
`,ft=d.div`
    display: none;
    flex-shrink: 0;
    gap: 8px;
    margin-bottom: 8px;

    ${k.tablet} {
        display: flex;
    }
`,pt=d.button`
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
`,mt=d(pt)`
    flex: none;
    width: 100%;
    justify-content: flex-start;
    text-align: left;
`,ht=d(f)`
    width: 100%;
    height: 100%;
`;function gt(e){let t=Number(e);return Number.isSafeInteger(t)&&t>0?t:null}var _t=r(function(){let{t:e}=x(),t=g(),n=ee(`tablet`),r=ee(`desktop`),{user:s,status:d}=h(),[y,S]=o(),C=i(),D=a(),O=gt(y.get(`friendId`)),k=gt(y.get(`year`)),A=Number(y.get(`semester`)),ie=k!==null&&Number.isInteger(A)&&A>=p.SPRING&&A<=p.WINTER,j=ie?k:-1,M=ie?A:p.SPRING,ae=O===null?`/timetables/shared`:`/friends/${O}/timetables/shared`,{query:N}=v(`GET`,`${ae}/semesters`,{enabled:d===`success`,staleTime:0}),P=(0,I.useMemo)(()=>[...N.data?.semesters??[]].sort((e,t)=>t.year-e.year||t.semester-e.semester),[N.data]),F=P.some(e=>e.year===j&&e.semester===M),oe=(0,I.useRef)(null),[L,R]=(0,I.useState)(null),z=L?.kind===m.LECTURE?L.data:null,B=L?.kind===m.CUSTOM?L.data:null,[V,H]=(0,I.useState)(!1),[le,ue]=(0,I.useState)(()=>typeof document>`u`||document.visibilityState!==`hidden`),[U,fe]=(0,I.useState)(!1),[W,G]=(0,I.useState)(!1),pe=(0,I.useRef)(null),[me,K]=(0,I.useState)(!1),[q,J]=(0,I.useState)(null),[Y,he]=(0,I.useState)(C.state?.friendAddedName??null),X=(0,I.useCallback)(e=>{H(!1),S(t=>{let n=new URLSearchParams(t);return e===null?n.delete(`friendId`):n.set(`friendId`,String(e)),n.delete(`timetableId`),n})},[S]),ge=(0,I.useCallback)((e,t)=>{let n=new URLSearchParams(y);n.set(`year`,String(e)),n.set(`semester`,String(t)),n.delete(`timetableId`),S(n,{replace:j<0})},[y,S,j]);(0,I.useEffect)(()=>{if(!N.isSuccess||F)return;let e=P[0];e&&ge(e.year,e.semester)},[N.isSuccess,F,P,ge]),(0,I.useEffect)(()=>{oe.current?.scrollIntoView?.({block:`nearest`,inline:`nearest`})},[O,j,M,N.data]),(0,I.useEffect)(()=>{n&&W&&pe.current?.focus()},[n,W,L]);let Z=!n||V,{query:Q}=v(`GET`,`/friends`,{enabled:d===`success`,staleTime:0,refetchInterval:d===`success`&&Z&&le?6e4:!1,refetchOnWindowFocus:Z});(0,I.useEffect)(()=>{let e=()=>ue(document.visibilityState!==`hidden`),t=()=>{d===`success`&&Z&&document.visibilityState!==`hidden`&&Q.refetch({cancelRefetch:!1})};return document.addEventListener(`visibilitychange`,e),window.addEventListener(`focus`,t),()=>{document.removeEventListener(`visibilitychange`,e),window.removeEventListener(`focus`,t)}},[d,Z,Q.refetch]),(0,I.useEffect)(()=>{d===`success`&&n&&V&&document.visibilityState!==`hidden`&&Q.refetch({cancelRefetch:!1})},[d,n,V,Q.refetch]),(0,I.useEffect)(()=>{let e=Date.now()-Date.parse(Q.data?.checkedAt??``),t=Number.isFinite(e)&&e>=-6e4&&e<12e4;if(fe(t),!t)return;let n=window.setTimeout(()=>fe(!1),12e4-Math.max(0,e));return()=>window.clearTimeout(n)},[Q.data?.checkedAt]);let _e=U&&Q.isSuccess&&!Q.isError,ve=Q.data?.friends.find(({id:e})=>e===O),{query:ye,setParams:be}=v(`GET`,`/timetables/my-timetable`,{enabled:d===`success`&&O!==null&&F}),{query:xe,setParams:Se}=v(`GET`,`/users/${s?.id??0}/timetables`,{apiPrefix:`/api`,enabled:d===`success`&&O!==null&&F,staleTime:0}),{query:$,setParams:Ce}=v(`GET`,ae,{enabled:d===`success`&&F,staleTime:0,gcTime:0}),{mutation:we,requestFunction:Te}=v(`DELETE`,`/friends/${q?.id??0}`,{onSuccess:()=>{q?.id===O&&X(null),q&&te(t,q.id),J(null),re(t)}});(0,I.useEffect)(()=>{if(j<0)return;let e={year:j,semester:M};be(e),Se(e),Ce(e)},[j,M,O]),(0,I.useEffect)(()=>{R(null),G(!1),H(!1)},[O,j,M,C.key]),(0,I.useEffect)(()=>{O!==null&&!Q.isFetching&&Q.isSuccess&&Q.data&&!Q.data.friends.some(({id:e})=>e===O)&&X(null)},[Q.data,Q.isFetching,Q.isSuccess,O,X]);let Ee=!F||$.isError?[]:$.data?.timetableItems??[],De=Ee.flatMap(e=>e.kind===m.LECTURE?[e.data]:[]),Oe=(0,I.useMemo)(()=>{if(O===null)return[];let e=new Set([...(xe.isError?[]:xe.data??[]).flatMap(e=>e.lectures?.map(({id:e})=>e)??[]),...(ye.isError?[]:ye.data?.timetableItems??[]).flatMap(e=>e.kind===m.LECTURE?[e.data.id]:[])]);return Ee.flatMap(t=>t.kind===m.LECTURE&&e.has(t.data.id)?[t.data.id]:[])},[O,xe.data,xe.isError,ye.data,ye.isError,Ee]),ke=(t,n)=>e(`friends.semesterLabel`,{year:t,semester:_(n)}),Ae=$.data?.source===`enrolled`?e(`friends.actualTimetable`):$.data?.name||ke(j,M),je=P.map(e=>({key:`${e.year}-${e.semester}`,name:ke(e.year,e.semester),selected:e.year===j&&e.semester===M,onSelect:()=>ge(e.year,e.semester)})),Me=()=>{he(null),D(C.pathname+C.search,{replace:!0,state:null})};if(d!==`success`)return c(ht,{direction:`column`,gap:16,align:`center`,justify:`center`,children:d===`idle`&&l(u,{children:[c(T,{type:`Big`,color:`Text.placeholder`,children:e(`friends.loginRequired`)}),c(ne,{})]})});let Ne=B?c(de,{block:B,timetableName:Ae,onClose:()=>R(null)}):c(Be,{lecture:z,year:j,semester:M});return l(tt,{direction:`column`,gap:0,children:[l(nt,{direction:`row`,gap:12,align:`stretch`,children:[!n&&l(it,{direction:`column`,gap:8,align:`stretch`,children:[c(rt,{direction:`column`,gap:0,padding:`16px`,align:`stretch`,flex:`1 1 0`,children:c($e,{friends:Q.data?.friends??[],showSchedule:_e,selectedFriendId:O,onSelect:X,onDelete:J,onInvite:()=>K(!0)})}),r&&c(st,{direction:`column`,gap:0,padding:`16px`,align:`stretch`,flex:`1 1 0`,children:Ne})]}),l(at,{children:[l(ft,{children:[l(pt,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":V,onClick:()=>H(!0),children:[c(b,{size:18,children:c(ce,{})}),e(`friends.selectFriend`)]}),c(pt,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":W,onClick:()=>{B&&R(null),G(!0)},children:e(`friends.viewOverlaps`)})]}),c(ct,{direction:`row`,gap:8,align:`center`,justify:`space-between`,children:c(lt,{role:`tablist`,"aria-label":ve?.name??e(`friends.myTimetable`),children:je.map(e=>c(ut,{buttonRef:e.selected?oe:void 0,role:`tab`,tabIndex:0,"aria-selected":e.selected,type:e.selected?`selected`:`default`,onClick:e.onSelect,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e.onSelect())},children:e.name},e.key))})}),l(ot,{direction:`column`,gap:8,align:`stretch`,children:[N.isSuccess&&P.length===0&&c(T,{type:`Small`,color:`Text.placeholder`,role:`status`,children:e(`friends.noSharedTimetables`)}),F&&$.isSuccess&&!$.isError&&c(T,{type:`Small`,color:`Text.default`,children:Ae}),($.isError||N.isError)&&c(T,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.loadError`)}),c(dt,{children:c(se,{timetableItems:Ee,overlappedLectureIds:Oe,displayedDayCount:7,needTimeFilter:!1,needLectureDeletable:!1,selectedLectures:z?[z]:[],selectedCustomBlock:B,onLectureSelect:e=>{R({kind:m.LECTURE,data:e}),n&&G(!0)},onCustomBlockSelect:e=>{R({kind:m.CUSTOM,data:e}),n&&G(!0)}})})]})]}),!n&&!r&&c(st,{width:454,direction:`column`,gap:0,padding:`16px`,align:`stretch`,children:Ne})]}),c(w,{isOpen:n&&V,onClose:()=>H(!1),title:e(`friends.title`),fullScreen:!0,children:c($e,{friends:Q.data?.friends??[],showSchedule:_e,selectedFriendId:O,onSelect:X,onDelete:e=>{H(!1),J(e)},onInvite:()=>{H(!1),K(!0)}})}),c(w,{isOpen:n&&W,onClose:()=>G(!1),title:e(B?`friends.customBlockDetail`:`friends.viewOverlaps`),fullScreen:!0,children:B?c(de,{block:B,timetableName:Ae}):z?l(u,{children:[c(mt,{ref:pe,type:`button`,onClick:()=>R(null),children:e(`friends.chooseAnotherLecture`)}),c(Be,{lecture:z,year:j,semester:M})]}):l(f,{direction:`column`,gap:8,align:`stretch`,children:[c(T,{type:`Normal`,color:`Text.default`,children:e(`friends.chooseLecture`)}),N.isPending||F&&$.isPending?c(T,{role:`status`,children:e(`friends.loadingLectures`)}):$.isError?c(T,{role:`alert`,children:e(`friends.loadError`)}):De.length===0?c(T,{children:e(`friends.noLectures`)}):De.map((e,t)=>l(mt,{ref:t===0?pe:void 0,type:`button`,onClick:()=>R({kind:m.LECTURE,data:e}),children:[e.name,e.subtitle,` `,e.classNo&&`(${e.classNo})`]},e.id))]})}),c(ze,{isOpen:me,onClose:()=>K(!1),userName:s?.name??``}),l(w,{isOpen:q!==null,onClose:()=>J(null),title:e(`friends.deleteTitle`),fullScreen:n,children:[c(T,{type:`Normal`,color:`Text.default`,children:e(`friends.deleteConfirm`,{name:q?.name})}),we.isError&&c(T,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.updateError`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[c(E,{onClick:()=>J(null),children:e(`friends.cancel`)}),c(E,{type:we.isPending?`disabled`:`highlighted`,onClick:()=>Te({}),children:e(`friends.delete`)})]})]}),l(w,{isOpen:Y!==null,onClose:Me,title:e(`friends.title`),fullScreen:n,children:[c(T,{type:`Normal`,color:`Text.default`,children:e(`friends.friendAdded`,{name:Y})}),c(f,{direction:`row`,gap:0,justify:`flex-end`,children:c(E,{type:`highlighted`,onClick:Me,children:e(`friends.viewTimetable`)})})]})]})});export{_t as default,et as meta};
//# sourceMappingURL=friends-Bb8rO0SL.js.map