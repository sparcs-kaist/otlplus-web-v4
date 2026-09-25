(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`bb847b14d7c1c5d83bc31587c22652ecf12452e6`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`3c00d342-aff3-412c-ac6d-bf752e238dfa`,e._sentryDebugIdIdentifier=`sentry-dbid-3c00d342-aff3-412c-ac6d-bf752e238dfa`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-Cm1ZQUXn.js";import{A as r,D as i,O as a,k as o,n as s}from"./chunk-62JRHF6Z-we9FGCyI.js";import{n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-B6DQSma1.js";import{n as d,t as f}from"./FlexWrapper-DnOCdROT.js";import{i as p,k as m,x as h}from"./axios-Cuc9xWpo.js";import{c as g,t as _}from"./useAPI-DephItSB.js";import{r as v,t as y}from"./Icon-C7BKq74y.js";import{t as b}from"./useTranslation-CfxTHiDx.js";import{t as x}from"./IconButton-BSp2SzAM.js";import{t as S}from"./Close-BUK3H1Gk.js";import{t as C}from"./Modal-BRvsO0kY.js";import{t as w}from"./Typography-BhPxHMQG.js";import{t as T}from"./Button-DW9SU0Fo.js";import{t as E}from"./Search-Bi1z3Ahv.js";import{t as D}from"./media-1f00SMn4.js";import{t as ee}from"./useIsDevice-DSW6Rn8_.js";import{t as O}from"./Person-BZeRWYQQ.js";import{n as k,r as A,t as j}from"./friendQueries--IRSBBNi.js";import{t as te}from"./ContentCopy-CNIHw9Je.js";import{a as M,n as ne,o as re,r as N,t as ie}from"./TabButton-ByOhur-E.js";import{t as P}from"./TimeFilterArea-BATlVcxQ.js";import{r as F,t as ae}from"./CustomTimeTableGrid-BDolc_di.js";var I=t(e()),L=t(n(),1),R=v((0,L.jsx)(`path`,{d:`M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z`}),`Download`),z=v((0,L.jsx)(`path`,{d:`M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z`}),`EventNote`),oe=v((0,L.jsx)(`path`,{d:`M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5`}),`Group`),B=v((0,L.jsx)(`path`,{d:`M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92`}),`Share`),se=v((0,L.jsx)(`path`,{d:`M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`}),`Star`),ce=v((0,L.jsx)(`path`,{d:`m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z`}),`StarBorder`),le=d(f)`
    color: ${({theme:e})=>e.colors.Text.default};
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
    overflow-wrap: anywhere;
`,V=d(w)`
    flex-shrink: 0;
    min-width: 3em;
    white-space: nowrap;
`;function ue({block:e,timetableName:t,onClose:n}){let{t:r}=b();return l(le,{direction:`column`,gap:12,align:`stretch`,role:`region`,"aria-label":r(`friends.customBlockDetail`),children:[l(f,{direction:`row`,gap:8,justify:`space-between`,align:`center`,children:[c(w,{type:`BigBold`,color:`Text.default`,children:e.block_name}),n&&c(x,{"aria-label":r(`common.search.close`),onClick:n,children:c(y,{size:20,children:c(S,{})})})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(V,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.timetable`)}),c(w,{type:`NormalMedium`,color:`Highlight.default`,children:t})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(V,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.time`)}),c(f,{direction:`column`,gap:8,align:`stretch`,flex:`1`,style:{minWidth:0},children:F(e).map((e,t)=>c(P,{timeFilter:e,setTimeFilter:void 0},t))})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(V,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.place`)}),c(w,{type:`Normal`,color:`Text.default`,children:e.place||`—`})]})]})}var H=Object.defineProperty,U=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,K=(e,t)=>{for(var n in t||={})W.call(t,n)&&G(e,n,t[n]);if(U)for(var n of U(t))de.call(t,n)&&G(e,n,t[n]);return e},q=(e,t)=>{var n={};for(var r in e)W.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&U)for(var r of U(e))t.indexOf(r)<0&&de.call(e,r)&&(n[r]=e[r]);return n},J;(e=>{let t=class t{constructor(e,n,r,a){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version value out of range`);if(a<-1||a>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let o=[];for(let e=0;e<this.size;e++)o.push(!1);for(let e=0;e<this.size;e++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();let s=this.addEccAndInterleave(r);if(this.drawCodewords(s),a==-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(a=t,e=n),this.applyMask(t)}}i(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}static encodeText(n,r){let i=e.QrSegment.makeSegments(n);return t.encodeSegments(i,r)}static encodeBinary(n,r){let i=e.QrSegment.makeBytes(n);return t.encodeSegments([i],r)}static encodeSegments(e,r,a=1,s=40,c=-1,l=!0){if(!(t.MIN_VERSION<=a&&a<=s&&s<=t.MAX_VERSION)||c<-1||c>7)throw RangeError(`Invalid value`);let u,d;for(u=a;;u++){let n=t.getNumDataCodewords(u,r)*8,i=o.getTotalBits(e,u);if(i<=n){d=i;break}if(u>=s)throw RangeError(`Data too long`)}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])l&&d<=t.getNumDataCodewords(u,e)*8&&(r=e);let f=[];for(let t of e){n(t.mode.modeBits,4,f),n(t.numChars,t.mode.numCharCountBits(u),f);for(let e of t.getData())f.push(e)}i(f.length==d);let p=t.getNumDataCodewords(u,r)*8;i(f.length<=p),n(0,Math.min(4,p-f.length),f),n(0,(8-f.length%8)%8,f),i(f.length%8==0);for(let e=236;f.length<p;e^=253)n(e,8,f);let m=[];for(;m.length*8<f.length;)m.push(0);return f.forEach((e,t)=>m[t>>>3]|=e<<7-(t&7)),new t(u,r,m,c)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let a=(t<<10|n)^21522;i(!(a>>>15));for(let e=0;e<=5;e++)this.setFunctionModule(8,e,r(a,e));this.setFunctionModule(8,7,r(a,6)),this.setFunctionModule(8,8,r(a,7)),this.setFunctionModule(7,8,r(a,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,r(a,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,r(a,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,r(a,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;i(!(t>>>18));for(let e=0;e<18;e++){let n=r(t,e),i=this.size-11+e%3,a=Math.floor(e/3);this.setFunctionModule(i,a,n),this.setFunctionModule(a,i,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;0<=a&&a<this.size&&0<=o&&o<this.size&&this.setFunctionModule(a,o,i!=2&&i!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){let n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw RangeError(`Invalid argument`);let a=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),c=a-s%a,l=Math.floor(s/a),u=[],d=t.reedSolomonComputeDivisor(o);for(let n=0,r=0;n<a;n++){let i=e.slice(r,r+l-o+(n<c?0:1));r+=i.length;let a=t.reedSolomonComputeRemainder(i,d);n<c&&i.push(0),u.push(i.concat(a))}let f=[];for(let e=0;e<u[0].length;e++)u.forEach((t,n)=>{(e!=l-o||n>=c)&&f.push(t[e])});return i(f.length==s),f}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError(`Invalid argument`);let n=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let i=0;i<this.size;i++)for(let a=0;a<2;a++){let o=t-a,s=t+1&2?i:this.size-1-i;!this.isFunction[s][o]&&n<e.length*8&&(this.modules[s][o]=r(e[n>>>3],7-(n&7)),n++)}}i(n==e.length*8)}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[n][o]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[n][o],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][n]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[o][n],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let r=0;r<this.size-1;r++){let i=this.modules[n][r];i==this.modules[n][r+1]&&i==this.modules[n+1][r]&&i==this.modules[n+1][r+1]&&(e+=t.PENALTY_N2)}let n=0;for(let e of this.modules)n=e.reduce((e,t)=>e+ +!!t,n);let r=this.size*this.size,a=Math.ceil(Math.abs(n*20-r*10)/r)-1;return i(0<=a&&a<=9),e+=a*t.PENALTY_N4,i(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{let e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version number out of range`);let n=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return i(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let r=1;for(let i=0;i<e;i++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1]);r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map(e=>0);for(let i of e){let e=i^r.shift();r.push(0),n.forEach((n,i)=>r[i]^=t.reedSolomonMultiply(n,e))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return i(!(n>>>8)),n}finderPenaltyCountPatterns(e){let t=e[1];i(t<=this.size*3);let n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function n(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function r(e,t){return!!(e>>>t&1)}function i(e){if(!e)throw Error(`Assertion error`)}let a=class e{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}static makeBytes(t){let r=[];for(let e of t)n(e,8,r);return new e(e.Mode.BYTE,t.length,r)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError(`String contains non-numeric characters`);let r=[];for(let e=0;e<t.length;){let i=Math.min(t.length-e,3);n(parseInt(t.substring(e,e+i),10),i*3+1,r),e+=i}return new e(e.Mode.NUMERIC,t.length,r)}static makeAlphanumeric(t){if(!e.isAlphanumeric(t))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let r=[],i;for(i=0;i+2<=t.length;i+=2){let a=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i))*45;a+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i+1)),n(a,11,r)}return i<t.length&&n(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)),6,r),new e(e.Mode.ALPHANUMERIC,t.length,r)}static makeSegments(t){return t==``?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let r=[];if(t<0)throw RangeError(`ECI assignment value out of range`);if(t<128)n(t,8,r);else if(t<16384)n(2,2,r),n(t,14,r);else if(t<1e6)n(6,3,r),n(t,21,r);else throw RangeError(`ECI assignment value out of range`);return new e(e.Mode.ECI,0,r)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(let r of e){let e=r.mode.numCharCountBits(t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)==`%`?(t.push(parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}};a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`;let o=a;e.QrSegment=a})(J||={}),(e=>{(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(e.QrCode||={})})(J||={}),(e=>{(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||={})})(J||={});var Y=J,X={L:Y.QrCode.Ecc.LOW,M:Y.QrCode.Ecc.MEDIUM,Q:Y.QrCode.Ecc.QUARTILE,H:Y.QrCode.Ecc.HIGH},fe=128,pe=`L`,Z=`#FFFFFF`,Q=`#000000`,me=!1,he=1,ge=4,_e=0,ve=.1;function ye(e,t=0){let n=[];return e.forEach(function(e,r){let i=null;e.forEach(function(a,o){if(!a&&i!==null){n.push(`M${i+t} ${r+t}h${o-i}v1H${i+t}z`),i=null;return}if(o===e.length-1){if(!a)return;i===null?n.push(`M${o+t},${r+t} h1v1H${o+t}z`):n.push(`M${i+t},${r+t} h${o+1-i}v1H${i+t}z`);return}a&&i===null&&(i=o)})}),n.join(``)}function be(e,t){return e.slice().map((e,n)=>n<t.y||n>=t.y+t.h?e:e.map((e,n)=>n<t.x||n>=t.x+t.w?e:!1))}function xe(e,t,n,r){if(r==null)return null;let i=e.length+n*2,a=Math.floor(t*ve),o=i/t,s=(r.width||a)*o,c=(r.height||a)*o,l=r.x==null?e.length/2-s/2:r.x*o,u=r.y==null?e.length/2-c/2:r.y*o,d=r.opacity==null?1:r.opacity,f=null;if(r.excavate){let e=Math.floor(l),t=Math.floor(u);f={x:e,y:t,w:Math.ceil(s+l-e),h:Math.ceil(c+u-t)}}let p=r.crossOrigin;return{x:l,y:u,h:c,w:s,excavation:f,opacity:d,crossOrigin:p}}function Se(e,t){return t==null?e?ge:_e:Math.max(Math.floor(t),0)}function Ce({value:e,level:t,minVersion:n,includeMargin:r,marginSize:i,imageSettings:a,size:o,boostLevel:s}){let c=I.useMemo(()=>{let r=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...Y.QrSegment.makeSegments(t)),e),[]);return Y.QrCode.encodeSegments(r,X[t],n,void 0,void 0,s)},[e,t,n,s]),{cells:l,margin:u,numCells:d,calculatedImageSettings:f}=I.useMemo(()=>{let e=c.getModules(),t=Se(r,i);return{cells:e,margin:t,numCells:e.length+t*2,calculatedImageSettings:xe(e,o,t,a)}},[c,o,a,r,i]);return{qrcode:c,margin:u,cells:l,numCells:d,calculatedImageSettings:f}}var we=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),Te=I.forwardRef(function(e,t){let n=e,{value:r,size:i=fe,level:a=pe,bgColor:o=Z,fgColor:s=Q,includeMargin:c=me,minVersion:l=he,boostLevel:u,marginSize:d,imageSettings:f}=n,p=q(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`marginSize`,`imageSettings`]),{style:m}=p,h=q(p,[`style`]),g=f?.src,_=I.useRef(null),v=I.useRef(null),y=I.useCallback(e=>{_.current=e,typeof t==`function`?t(e):t&&(t.current=e)},[t]),[b,x]=I.useState(!1),{margin:S,cells:C,numCells:w,calculatedImageSettings:T}=Ce({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:d,imageSettings:f,size:i});I.useEffect(()=>{if(_.current!=null){let e=_.current,t=e.getContext(`2d`);if(!t)return;let n=C,r=v.current,a=T!=null&&r!==null&&r.complete&&r.naturalHeight!==0&&r.naturalWidth!==0;a&&T.excavation!=null&&(n=be(C,T.excavation));let c=window.devicePixelRatio||1;e.height=e.width=i*c;let l=i/w*c;t.scale(l,l),t.fillStyle=o,t.fillRect(0,0,w,w),t.fillStyle=s,we?t.fill(new Path2D(ye(n,S))):C.forEach(function(e,n){e.forEach(function(e,r){e&&t.fillRect(r+S,n+S,1,1)})}),T&&(t.globalAlpha=T.opacity),a&&t.drawImage(r,T.x+S,T.y+S,T.w,T.h)}}),I.useEffect(()=>{x(!1)},[g]);let E=K({height:i,width:i},m),D=null;return g!=null&&(D=I.createElement(`img`,{src:g,key:g,style:{display:`none`},onLoad:()=>{x(!0)},ref:v,crossOrigin:T?.crossOrigin})),I.createElement(I.Fragment,null,I.createElement(`canvas`,K({style:E,height:i,width:i,ref:y,role:`img`},h)),D)});Te.displayName=`QRCodeCanvas`;var Ee=I.forwardRef(function(e,t){let n=e,{value:r,size:i=fe,level:a=pe,bgColor:o=Z,fgColor:s=Q,includeMargin:c=me,minVersion:l=he,boostLevel:u,title:d,marginSize:f,imageSettings:p}=n,m=q(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`title`,`marginSize`,`imageSettings`]),{margin:h,cells:g,numCells:_,calculatedImageSettings:v}=Ce({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:f,imageSettings:p,size:i}),y=g,b=null;p!=null&&v!=null&&(v.excavation!=null&&(y=be(g,v.excavation)),b=I.createElement(`image`,{href:p.src,height:v.h,width:v.w,x:v.x+h,y:v.y+h,preserveAspectRatio:`none`,opacity:v.opacity,crossOrigin:v.crossOrigin}));let x=ye(y,h);return I.createElement(`svg`,K({height:i,width:i,viewBox:`0 0 ${_} ${_}`,ref:t,role:`img`},m),!!d&&I.createElement(`title`,null,d),I.createElement(`path`,{fill:o,d:`M0,0 h${_}v${_}H0z`,shapeRendering:`crispEdges`}),I.createElement(`path`,{fill:s,d:x,shapeRendering:`crispEdges`}),b)});Ee.displayName=`QRCodeSVG`;var De=e=>`${e}님과 OTL 시간표 친구를 맺어보세요!`,Oe=(e,t)=>`${De(e)}\n${t}`;async function $(e,t){let n=Oe(e,t);if(navigator.clipboard){await navigator.clipboard.writeText(n);return}let r=document.createElement(`textarea`);r.value=n,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{if(!document.execCommand(`copy`))throw Error(`Clipboard unavailable`)}finally{r.remove()}}async function ke(e,t){if(navigator.share)try{return await navigator.share({title:`OTL 시간표 친구 초대`,text:De(e),url:t}),`shared`}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return`cancelled`}return await $(e,t),`copied`}async function Ae(e){let t=e.toDataURL(`image/png`);if(!t.startsWith(`data:image/png;`))throw Error(`Could not encode the QR code as PNG`);let n=document.createElement(`a`);n.href=t,n.download=`otl-friend-qr.png`,document.body.appendChild(n);try{n.click()}finally{n.remove()}}async function je(e){if(!navigator.clipboard?.write||typeof ClipboardItem>`u`)throw new DOMException(`Image clipboard is unavailable`,`NotSupportedError`);await navigator.clipboard.write([new ClipboardItem({"image/png":new Promise((t,n)=>{e.toBlob(e=>{e?t(e):n(Error(`Could not encode the QR code as PNG`))},`image/png`)})})])}var Me=d.div`
    padding: 14px;
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: 14px;
    line-height: 21px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Ne=d.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
`,Pe=d.button`
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
`;function Fe({isOpen:e,onClose:t,userName:n}){let{t:r}=b(),i=ee(`mobile`),[a,o]=(0,I.useState)(!1),[s,d]=(0,I.useState)(!1),p=(0,I.useRef)(null),[m,h]=(0,I.useState)(null),[g,v]=(0,I.useState)(!1),[x,S]=(0,I.useState)(null),[E,D]=(0,I.useState)(null),{query:O}=_(`GET`,`/friends/code`,{enabled:e,staleTime:0,gcTime:0}),k=O.isSuccess?O.data.code:null,A=k?`${new URL(`/friends/invite`,window.location.origin)}#${k}`:``,j=!!(A&&m===A);(0,I.useEffect)(()=>{o(!1),d(!1),e||h(null),v(!1),S(null),D(null)},[e,A]);let M=async e=>{let t=p.current;if(!(!t||!j||g)){S(null),D(null),v(!0);try{e===`download`?await Ae(t):await je(t),S(e===`download`?`qrDownloaded`:`qrCopied`)}catch(t){D(e===`download`?`qrDownloadError`:t instanceof DOMException&&t.name===`NotSupportedError`?`qrCopyUnsupported`:`qrCopyError`)}finally{v(!1)}}};return c(C,{isOpen:e,onClose:t,title:r(`friends.inviteTitle`),fullScreen:i,children:l(f,{direction:`column`,gap:16,align:`stretch`,children:[c(w,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.inviteDescription`)}),O.isPending&&c(w,{type:`Normal`,color:`Text.placeholder`,role:`status`,children:r(`friends.inviteLoading`)}),O.isError&&c(w,{type:`Normal`,color:`Highlight.default`,role:`alert`,children:r(`friends.inviteError`)}),s&&c(w,{type:`Normal`,color:`Highlight.default`,children:r(`friends.inviteError`)}),k&&l(u,{children:[l(w,{type:`BigBold`,color:`Text.default`,className:`mp-block mp-sensitive`,children:[r(`friends.code`),`: `,k]}),c(Me,{className:`mp-block mp-sensitive`,children:Oe(n,A)}),c(f,{direction:`row`,justify:`center`,gap:0,onLoadCapture:e=>{e.target instanceof HTMLImageElement&&h(A)},onErrorCapture:e=>{e.target instanceof HTMLImageElement&&(h(null),D(`qrImageError`))},children:c(Te,{ref:p,value:A,"aria-label":r(`friends.inviteQr`),title:r(`friends.inviteQr`),role:`img`,size:512,style:{width:200,height:200},level:`H`,marginSize:4,bgColor:`#FFFFFF`,fgColor:`#000000`,imageSettings:{src:`/static/favicon-192.png`,width:88,height:88,excavate:!0},className:`mp-block mp-sensitive`},A)}),l(Ne,{children:[l(Pe,{type:`button`,disabled:!j||g,onClick:()=>M(`download`),children:[c(y,{size:16,children:c(R,{})}),r(`friends.downloadQr`)]}),l(Pe,{type:`button`,disabled:!j||g,onClick:()=>M(`copy`),children:[c(y,{size:16,children:c(te,{})}),r(`friends.copyQr`)]})]}),x&&c(w,{type:`Small`,color:`Highlight.default`,role:`status`,children:r(`friends.${x}`)}),E&&c(w,{type:`Small`,color:`Highlight.default`,role:`alert`,children:r(`friends.${E}`)})]}),a&&c(w,{type:`Small`,color:`Highlight.default`,children:r(`friends.copied`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[l(T,{type:k?`default`:`disabled`,onClick:async()=>{if(A)try{await $(n,A),o(!0)}catch{d(!0)}},children:[c(y,{size:16,children:c(te,{})}),r(`friends.copy`)]}),l(T,{type:k?`highlighted`:`disabled`,onClick:async()=>{if(A)try{await ke(n,A)===`copied`&&o(!0)}catch{d(!0)}},children:[c(y,{size:16,children:c(B,{})}),r(`friends.share`)]})]})]})})}var Ie=d(f)`
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
`,Le=d(s)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    text-decoration: none;
`;function Re({lecture:e}){let{t}=b();return e?l(Ie,{direction:`column`,gap:16,align:`stretch`,children:[l(f,{direction:`column`,gap:4,align:`center`,children:[c(w,{type:`Bigger`,color:`Text.default`,children:e.name+e.subtitle}),l(w,{type:`Big`,color:`Text.default`,children:[e.code,` `,e.classNo?`(${e.classNo})`:``]}),c(Le,{to:`/dictionary?courseId=${e.courseId}`,children:t(`header.dictionary`)})]}),c(M,{lectureId:e.id}),c(N,{selectedLecture:e})]}):c(Ie,{direction:`column`,gap:0,justify:`center`,align:`center`,children:c(w,{type:`Normal`,color:`Text.placeholder`,children:t(`friends.selectLecture`)})})}var ze=()=>[{title:`친구 시간표 | OTL`},{name:`description`,content:`OTL 친구들의 시간표와 함께 듣는 수업을 확인하세요.`}],Be=d.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 20px;
    box-sizing: border-box;

    ${D.tablet} {
        padding: 8px;
    }
`,Ve=d.div`
    width: 100%;
    max-width: 1714px;
    height: 100%;
    min-height: 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(220px, 288px) minmax(520px, 1fr) minmax(300px, 454px);
    gap: 12px;

    ${D.laptop} {
        grid-template-columns: minmax(180px, 220px) minmax(0, 1fr) minmax(220px, 300px);
    }

    ${D.tablet} {
        display: block;
    }
`,He=d.div`
    min-width: 0;
    min-height: 0;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 12px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`,Ue=d(He)`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 16px 0 0;

    ${D.tablet} {
        display: none;
    }
`,We=d(He)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 16px;

    ${D.tablet} {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 8px;
    }
`,Ge=d(He)`
    padding: 16px;
    overflow: hidden;

    ${D.tablet} {
        display: none;
    }
`,Ke=d(f)`
    padding: 0 16px 12px;
`,qe=d.label`
    height: 34px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.placeholder};
`,Je=d.input`
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({theme:e})=>e.colors.Text.default};
    font: inherit;
`,Ye=d.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
`,Xe=d.div`
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
`,Ze=d.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qe=d(y)`
    flex-shrink: 0;
    color: ${({theme:e})=>e.colors.Highlight.default};
`,$e=d.button`
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

    ${D.tablet} {
        width: 44px;
        height: 44px;
        flex-shrink: 0;
    }
`,et=d.button`
    height: 48px;
    border: 0;
    border-top: 1px solid ${({theme:e})=>e.colors.Line.block};
    background: transparent;
    color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    font: inherit;
`,tt=d(f)`
    width: 100%;
    flex-shrink: 0;
    flex-wrap: wrap;
`,nt=d.div`
    min-width: 0;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
`,rt=d.div`
    min-height: 0;
    flex: 1;
    display: flex;
    padding-top: 8px;
`,it=d.div`
    display: none;
    flex-shrink: 0;
    gap: 8px;
    margin-bottom: 8px;

    ${D.tablet} {
        display: flex;
    }
`,at=d.button`
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
`,ot=d(at)`
    flex: none;
    width: 100%;
    justify-content: flex-start;
    text-align: left;
`,st=d(f)`
    padding: 24px 16px;
    text-align: center;
`,ct=d(f)`
    width: 100%;
    height: 100%;
`;function lt({friend:e,showSchedule:t,selected:n,onSelect:r,onDelete:i}){let{t:a}=b(),o=m(),{mutation:s,requestFunction:u}=_(`PATCH`,`/friends/${e.id}/favorite`,{onSuccess:()=>j(o)});return l(Xe,{$selected:n,role:`button`,tabIndex:0,onClick:r,onKeyDown:e=>{e.currentTarget===e.target&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r())},children:[c(y,{size:18,children:c(O,{})}),c(Ze,{children:e.name}),t&&e.hasScheduleNow===!0&&c(Qe,{size:18,role:`img`,"aria-label":a(`friends.scheduleNow`),title:a(`friends.scheduleNow`),children:c(z,{})}),n&&c($e,{"aria-label":a(`friends.delete`),onClick:e=>{e.stopPropagation(),i()},children:c(y,{size:20,children:c(re,{})})}),c($e,{"aria-label":a(`friends.favorite`),"aria-pressed":e.isFavorite,disabled:s.isPending,onClick:t=>{t.stopPropagation(),u({isFavorite:!e.isFavorite})},children:c(y,{size:20,children:e.isFavorite?c(se,{}):c(ce,{})})})]})}function ut({friends:e,showSchedule:t,selectedFriendId:n,onSelect:r,onDelete:i,onInvite:a}){let{t:o}=b(),[s,d]=(0,I.useState)(``),f=(0,I.useMemo)(()=>e.filter(({name:e})=>e.toLowerCase().includes(s.toLowerCase())),[e,s]);return l(u,{children:[l(Ke,{direction:`column`,gap:12,align:`stretch`,children:[c(w,{type:`BigBold`,color:`Text.default`,children:o(`friends.friendList`,{count:e.length})}),l(qe,{children:[c(y,{size:18,children:c(E,{})}),c(Je,{value:s,onChange:e=>d(e.target.value),placeholder:o(`friends.searchPlaceholder`)})]})]}),l(Ye,{children:[l(Xe,{$selected:n===null,role:`button`,tabIndex:0,onClick:()=>r(null),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r(null))},children:[c(y,{size:18,children:c(O,{})}),c(Ze,{children:o(`friends.myTimetable`)})]}),f.map(e=>c(lt,{friend:e,showSchedule:t,selected:n===e.id,onSelect:()=>r(e.id),onDelete:()=>i(e)},e.id)),!f.length&&c(st,{direction:`column`,gap:0,align:`center`,children:c(w,{type:`Small`,color:`Text.disable`,children:o(`friends.noFriends`)})})]}),c(et,{onClick:a,children:o(`friends.invite`)})]})}function dt(e){let t=Number(e);return Number.isSafeInteger(t)&&t>0?t:null}var ft=r(function(){let{t:e}=b(),t=m(),n=ee(`tablet`),{user:r,status:s}=p(),[d,v]=o(),x=i(),S=a(),E=dt(d.get(`friendId`)),D=dt(d.get(`year`)),O=Number(d.get(`semester`)),te=D!==null&&Number.isInteger(O)&&O>=h.SPRING&&O<=h.WINTER,M=te?D:-1,re=te?O:h.SPRING,N=te?dt(d.get(`timetableId`)):null,[P,F]=(0,I.useState)(null),L=P?.kind===g.LECTURE?P.data:null,R=P?.kind===g.CUSTOM?P.data:null,[z,B]=(0,I.useState)(!1),[se,ce]=(0,I.useState)(()=>typeof document>`u`||document.visibilityState!==`hidden`),[le,V]=(0,I.useState)(!1),[H,U]=(0,I.useState)(!1),W=(0,I.useRef)(null),[de,G]=(0,I.useState)(!1),[K,q]=(0,I.useState)(null),[J,Y]=(0,I.useState)(x.state?.friendAddedName??null),X=(0,I.useCallback)(e=>{B(!1),v(t=>{let n=new URLSearchParams(t);return e===null?n.delete(`friendId`):n.set(`friendId`,String(e)),n.delete(`timetableId`),n})},[v]),fe=e=>{let t=new URLSearchParams(d);e===null?t.delete(`timetableId`):t.set(`timetableId`,String(e)),v(t)},pe=(e,t)=>{let n=new URLSearchParams(d);n.set(`year`,String(e)),n.set(`semester`,String(t)),n.delete(`timetableId`),v(n,{replace:M<0})};(0,I.useEffect)(()=>{n&&H&&W.current?.focus()},[n,H,P]);let Z=!n||z,{query:Q}=_(`GET`,`/friends`,{enabled:s===`success`,staleTime:0,refetchInterval:s===`success`&&Z&&se?6e4:!1,refetchOnWindowFocus:Z});(0,I.useEffect)(()=>{let e=()=>ce(document.visibilityState!==`hidden`),t=()=>{s===`success`&&Z&&document.visibilityState!==`hidden`&&Q.refetch({cancelRefetch:!1})};return document.addEventListener(`visibilitychange`,e),window.addEventListener(`focus`,t),()=>{document.removeEventListener(`visibilitychange`,e),window.removeEventListener(`focus`,t)}},[s,Z,Q.refetch]),(0,I.useEffect)(()=>{s===`success`&&n&&z&&document.visibilityState!==`hidden`&&Q.refetch({cancelRefetch:!1})},[s,n,z,Q.refetch]),(0,I.useEffect)(()=>{let e=Date.now()-Date.parse(Q.data?.checkedAt??``),t=Number.isFinite(e)&&e>=-6e4&&e<12e4;if(V(t),!t)return;let n=window.setTimeout(()=>V(!1),12e4-Math.max(0,e));return()=>window.clearTimeout(n)},[Q.data?.checkedAt]);let me=le&&Q.isSuccess&&!Q.isError,he=Q.data?.friends.find(({id:e})=>e===E),{query:ge,setParams:_e}=_(`GET`,`/timetables`,{enabled:s===`success`&&E===null}),{query:ve,setParams:ye}=_(`GET`,`/timetables/my-timetable`,{enabled:s===`success`&&E===null}),{query:be}=_(`GET`,`/timetables/${N??0}`,{enabled:s===`success`&&E===null&&N!==null}),{query:xe,setParams:Se}=_(`GET`,`/friends/${E??0}/timetables`,{enabled:s===`success`&&E!==null,staleTime:0,gcTime:0}),{query:Ce,setParams:we}=_(`GET`,`/friends/${E??0}/timetables/my-timetable`,{enabled:s===`success`&&E!==null,staleTime:0,gcTime:0}),{query:Te}=_(`GET`,`/friends/${E??0}/timetables/${N??0}`,{enabled:s===`success`&&E!==null&&N!==null,staleTime:0,gcTime:0}),{mutation:Ee,requestFunction:De}=_(`DELETE`,`/friends/${K?.id??0}`,{onSuccess:()=>{K?.id===E&&X(null),K&&k(t,K.id),q(null),j(t)}});(0,I.useEffect)(()=>{if(M<0)return;let e={year:M,semester:re};E===null?(_e(e),ye(e)):(Se(e),we(e))},[M,re,E]),(0,I.useEffect)(()=>{F(null),U(!1),B(!1)},[E,M,re,N,x.key]),(0,I.useEffect)(()=>{E!==null&&!Q.isFetching&&Q.isSuccess&&Q.data&&!Q.data.friends.some(({id:e})=>e===E)&&X(null)},[Q.data,Q.isFetching,Q.isSuccess,E,X]);let Oe=E===null?ge.data?.timetables??[]:xe.isError?[]:xe.data?.timetables??[],$=N===null?E===null?ve:Ce:E===null?be:Te,ke=$.isError?[]:$.data?.timetableItems??[],Ae=ke.flatMap(e=>e.kind===g.LECTURE?[e.data]:[]),je=N===null?e(`friends.actualTimetable`):Oe.find(({id:e})=>e===N)?.name||`No Title`,Me=()=>{Y(null),S(x.pathname+x.search,{replace:!0,state:null})};return s===`success`?l(Be,{children:[l(Ve,{children:[!n&&c(Ue,{children:c(ut,{friends:Q.data?.friends??[],showSchedule:me,selectedFriendId:E,onSelect:X,onDelete:q,onInvite:()=>G(!0)})}),l(We,{children:[l(it,{children:[l(at,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":z,onClick:()=>B(!0),children:[c(y,{size:18,children:c(oe,{})}),e(`friends.selectFriend`)]}),c(at,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":H,onClick:()=>{R&&F(null),U(!0)},children:e(`friends.viewOverlaps`)})]}),l(tt,{direction:`row`,gap:8,align:`center`,justify:`space-between`,children:[c(w,{type:`NormalBold`,color:`Text.default`,children:he?.name??e(`friends.myTimetable`)}),c(ne,{year:M,semester:re,onChange:pe})]}),l(nt,{children:[c(ie,{type:N===null?`selected`:`default`,onClick:()=>fe(null),children:e(`friends.actualTimetable`)}),Oe.map(e=>c(ie,{type:N===e.id?`selected`:`default`,onClick:()=>fe(e.id),children:e.name||`No Title`},e.id))]}),$.isError&&c(w,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.loadError`)}),c(rt,{children:c(ae,{timetableItems:ke,needTimeFilter:!1,needLectureDeletable:!1,selectedLectures:L?[L]:[],selectedCustomBlock:R,onLectureSelect:e=>{F({kind:g.LECTURE,data:e}),n&&U(!0)},onCustomBlockSelect:e=>{F({kind:g.CUSTOM,data:e}),n&&U(!0)}})})]}),!n&&c(Ge,{children:R?c(ue,{block:R,timetableName:je,onClose:()=>F(null)}):c(Re,{lecture:L})})]}),c(C,{isOpen:n&&z,onClose:()=>B(!1),title:e(`friends.title`),fullScreen:!0,children:c(ut,{friends:Q.data?.friends??[],showSchedule:me,selectedFriendId:E,onSelect:X,onDelete:e=>{B(!1),q(e)},onInvite:()=>{B(!1),G(!0)}})}),c(C,{isOpen:n&&H,onClose:()=>U(!1),title:e(R?`friends.customBlockDetail`:`friends.viewOverlaps`),fullScreen:!0,children:R?c(ue,{block:R,timetableName:je}):L?l(u,{children:[c(ot,{ref:W,type:`button`,onClick:()=>F(null),children:e(`friends.chooseAnotherLecture`)}),c(Re,{lecture:L})]}):l(f,{direction:`column`,gap:8,align:`stretch`,children:[c(w,{type:`Normal`,color:`Text.default`,children:e(`friends.chooseLecture`)}),$.isPending?c(w,{role:`status`,children:e(`friends.loadingLectures`)}):$.isError?c(w,{role:`alert`,children:e(`friends.loadError`)}):Ae.length===0?c(w,{children:e(`friends.noLectures`)}):Ae.map((e,t)=>l(ot,{ref:t===0?W:void 0,type:`button`,onClick:()=>F({kind:g.LECTURE,data:e}),children:[e.name,e.subtitle,` `,e.classNo&&`(${e.classNo})`]},e.id))]})}),c(Fe,{isOpen:de,onClose:()=>G(!1),userName:r?.name??``}),l(C,{isOpen:K!==null,onClose:()=>q(null),title:e(`friends.deleteTitle`),fullScreen:n,children:[c(w,{type:`Normal`,color:`Text.default`,children:e(`friends.deleteConfirm`,{name:K?.name})}),Ee.isError&&c(w,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.updateError`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[c(T,{onClick:()=>q(null),children:e(`friends.cancel`)}),c(T,{type:Ee.isPending?`disabled`:`highlighted`,onClick:()=>De({}),children:e(`friends.delete`)})]})]}),l(C,{isOpen:J!==null,onClose:Me,title:e(`friends.title`),fullScreen:n,children:[c(w,{type:`Normal`,color:`Text.default`,children:e(`friends.friendAdded`,{name:J})}),c(f,{direction:`row`,gap:0,justify:`flex-end`,children:c(T,{type:`highlighted`,onClick:Me,children:e(`friends.viewTimetable`)})})]})]}):c(ct,{direction:`column`,gap:16,align:`center`,justify:`center`,children:s===`idle`&&l(u,{children:[c(w,{type:`Big`,color:`Text.placeholder`,children:e(`friends.loginRequired`)}),c(A,{})]})})});export{ft as default,ze as meta};
//# sourceMappingURL=friends-DBkOkOgn.js.map