(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`32aa9e9ea225e92216dc7079ba453b95823ce214`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`461cd656-6f62-4092-9f31-06f6f9101fce`,e._sentryDebugIdIdentifier=`sentry-dbid-461cd656-6f62-4092-9f31-06f6f9101fce`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-MWAPj23v.js";import{A as r,D as i,O as a,k as o,n as s}from"./chunk-62JRHF6Z-Bj0720wF.js";import{n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-OYM_BT8K.js";import{n as d,t as f}from"./FlexWrapper-CLzoBzKR.js";import{C as p,S as m,i as h,j as g,w as _}from"./axios-CKem3phy.js";import{t as v}from"./useAPI-DdxRobac.js";import{r as y,t as b}from"./Icon-C-5CDH23.js";import{t as x}from"./useTranslation-D11wFH6T.js";import{t as S}from"./IconButton-C2Zx2JAW.js";import{t as C}from"./Close-CPAlUcgf.js";import{t as w}from"./Modal-BUgWw7qd.js";import{t as T}from"./Typography-CBhB7U3s.js";import{t as E}from"./Button-B7TygF_g.js";import{t as D}from"./StyledDivider-o4Tnoh0u.js";import{t as O}from"./media-UZDExtMV.js";import{t as ee}from"./useIsDevice-CA4FSncK.js";import{n as k,r as A,t as te}from"./friendQueries-DO94FsJM.js";import{t as j}from"./ContentCopy-BuX1fEqr.js";import{i as M,n as ne,o as N,r as P,t as re}from"./TabButton-GAuz4bah.js";import{t as F}from"./ReviewScoreSummary-CB6WE0CU.js";import{n as ie,t as ae}from"./TextInput-vVyxDUxB.js";import{r as oe,t as se}from"./CustomTimeTableGrid-DStuiVH1.js";var I=t(e()),L=t(n(),1),R=y((0,L.jsx)(`path`,{d:`M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z`}),`Download`),z=y((0,L.jsx)(`path`,{d:`M17 10H7v2h10zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V8h14zm-5-5H7v2h7z`}),`EventNote`),ce=y((0,L.jsx)(`path`,{d:`M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5`}),`Group`),B=y((0,L.jsx)(`path`,{d:`M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92`}),`Share`),V=d(f)`
    color: ${({theme:e})=>e.colors.Text.default};
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
    overflow-wrap: anywhere;
`,H=d(T)`
    flex-shrink: 0;
    min-width: 3em;
    white-space: nowrap;
`;function le({block:e,timetableName:t,onClose:n}){let{t:r}=x();return l(V,{direction:`column`,gap:12,align:`stretch`,role:`region`,"aria-label":r(`friends.customBlockDetail`),children:[l(f,{direction:`row`,gap:8,justify:`space-between`,align:`center`,children:[c(T,{type:`BigBold`,color:`Text.default`,children:e.block_name}),n&&c(S,{"aria-label":r(`common.search.close`),onClick:n,children:c(b,{size:20,children:c(C,{})})})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(H,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.timetable`)}),c(T,{type:`NormalMedium`,color:`Highlight.default`,children:t})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(H,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.time`)}),c(f,{direction:`column`,gap:8,align:`stretch`,flex:`1`,style:{minWidth:0},children:oe(e).map((e,t)=>c(ie,{timeFilter:e,setTimeFilter:void 0},t))})]}),l(f,{direction:`row`,gap:10,align:`flex-start`,children:[c(H,{type:`NormalBold`,color:`Text.light`,children:r(`timetable.customBlock.place`)}),c(T,{type:`Normal`,color:`Text.default`,children:e.place||`—`})]})]})}var ue=Object.defineProperty,de=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,U=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||={})fe.call(t,n)&&U(e,n,t[n]);if(de)for(var n of de(t))pe.call(t,n)&&U(e,n,t[n]);return e},G=(e,t)=>{var n={};for(var r in e)fe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&de)for(var r of de(e))t.indexOf(r)<0&&pe.call(e,r)&&(n[r]=e[r]);return n},me;(e=>{let t=class t{constructor(e,n,r,a){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version value out of range`);if(a<-1||a>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let o=[];for(let e=0;e<this.size;e++)o.push(!1);for(let e=0;e<this.size;e++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();let s=this.addEccAndInterleave(r);if(this.drawCodewords(s),a==-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(a=t,e=n),this.applyMask(t)}}i(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}static encodeText(n,r){let i=e.QrSegment.makeSegments(n);return t.encodeSegments(i,r)}static encodeBinary(n,r){let i=e.QrSegment.makeBytes(n);return t.encodeSegments([i],r)}static encodeSegments(e,r,a=1,s=40,c=-1,l=!0){if(!(t.MIN_VERSION<=a&&a<=s&&s<=t.MAX_VERSION)||c<-1||c>7)throw RangeError(`Invalid value`);let u,d;for(u=a;;u++){let n=t.getNumDataCodewords(u,r)*8,i=o.getTotalBits(e,u);if(i<=n){d=i;break}if(u>=s)throw RangeError(`Data too long`)}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])l&&d<=t.getNumDataCodewords(u,e)*8&&(r=e);let f=[];for(let t of e){n(t.mode.modeBits,4,f),n(t.numChars,t.mode.numCharCountBits(u),f);for(let e of t.getData())f.push(e)}i(f.length==d);let p=t.getNumDataCodewords(u,r)*8;i(f.length<=p),n(0,Math.min(4,p-f.length),f),n(0,(8-f.length%8)%8,f),i(f.length%8==0);for(let e=236;f.length<p;e^=253)n(e,8,f);let m=[];for(;m.length*8<f.length;)m.push(0);return f.forEach((e,t)=>m[t>>>3]|=e<<7-(t&7)),new t(u,r,m,c)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let a=(t<<10|n)^21522;i(!(a>>>15));for(let e=0;e<=5;e++)this.setFunctionModule(8,e,r(a,e));this.setFunctionModule(8,7,r(a,6)),this.setFunctionModule(8,8,r(a,7)),this.setFunctionModule(7,8,r(a,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,r(a,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,r(a,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,r(a,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;i(!(t>>>18));for(let e=0;e<18;e++){let n=r(t,e),i=this.size-11+e%3,a=Math.floor(e/3);this.setFunctionModule(i,a,n),this.setFunctionModule(a,i,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;0<=a&&a<this.size&&0<=o&&o<this.size&&this.setFunctionModule(a,o,i!=2&&i!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){let n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw RangeError(`Invalid argument`);let a=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),c=a-s%a,l=Math.floor(s/a),u=[],d=t.reedSolomonComputeDivisor(o);for(let n=0,r=0;n<a;n++){let i=e.slice(r,r+l-o+(n<c?0:1));r+=i.length;let a=t.reedSolomonComputeRemainder(i,d);n<c&&i.push(0),u.push(i.concat(a))}let f=[];for(let e=0;e<u[0].length;e++)u.forEach((t,n)=>{(e!=l-o||n>=c)&&f.push(t[e])});return i(f.length==s),f}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError(`Invalid argument`);let n=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let i=0;i<this.size;i++)for(let a=0;a<2;a++){let o=t-a,s=t+1&2?i:this.size-1-i;!this.isFunction[s][o]&&n<e.length*8&&(this.modules[s][o]=r(e[n>>>3],7-(n&7)),n++)}}i(n==e.length*8)}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[n][o]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[n][o],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][n]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[o][n],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let r=0;r<this.size-1;r++){let i=this.modules[n][r];i==this.modules[n][r+1]&&i==this.modules[n+1][r]&&i==this.modules[n+1][r+1]&&(e+=t.PENALTY_N2)}let n=0;for(let e of this.modules)n=e.reduce((e,t)=>e+ +!!t,n);let r=this.size*this.size,a=Math.ceil(Math.abs(n*20-r*10)/r)-1;return i(0<=a&&a<=9),e+=a*t.PENALTY_N4,i(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{let e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version number out of range`);let n=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return i(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let r=1;for(let i=0;i<e;i++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1]);r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map(e=>0);for(let i of e){let e=i^r.shift();r.push(0),n.forEach((n,i)=>r[i]^=t.reedSolomonMultiply(n,e))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return i(!(n>>>8)),n}finderPenaltyCountPatterns(e){let t=e[1];i(t<=this.size*3);let n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function n(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function r(e,t){return!!(e>>>t&1)}function i(e){if(!e)throw Error(`Assertion error`)}let a=class e{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}static makeBytes(t){let r=[];for(let e of t)n(e,8,r);return new e(e.Mode.BYTE,t.length,r)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError(`String contains non-numeric characters`);let r=[];for(let e=0;e<t.length;){let i=Math.min(t.length-e,3);n(parseInt(t.substring(e,e+i),10),i*3+1,r),e+=i}return new e(e.Mode.NUMERIC,t.length,r)}static makeAlphanumeric(t){if(!e.isAlphanumeric(t))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let r=[],i;for(i=0;i+2<=t.length;i+=2){let a=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i))*45;a+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i+1)),n(a,11,r)}return i<t.length&&n(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)),6,r),new e(e.Mode.ALPHANUMERIC,t.length,r)}static makeSegments(t){return t==``?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let r=[];if(t<0)throw RangeError(`ECI assignment value out of range`);if(t<128)n(t,8,r);else if(t<16384)n(2,2,r),n(t,14,r);else if(t<1e6)n(6,3,r),n(t,21,r);else throw RangeError(`ECI assignment value out of range`);return new e(e.Mode.ECI,0,r)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(let r of e){let e=r.mode.numCharCountBits(t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)==`%`?(t.push(parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}};a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`;let o=a;e.QrSegment=a})(me||={}),(e=>{(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(e.QrCode||={})})(me||={}),(e=>{(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||={})})(me||={});var K=me,q={L:K.QrCode.Ecc.LOW,M:K.QrCode.Ecc.MEDIUM,Q:K.QrCode.Ecc.QUARTILE,H:K.QrCode.Ecc.HIGH},J=128,he=`L`,ge=`#FFFFFF`,Y=`#000000`,_e=!1,X=1,ve=4,Z=0,ye=.1;function be(e,t=0){let n=[];return e.forEach(function(e,r){let i=null;e.forEach(function(a,o){if(!a&&i!==null){n.push(`M${i+t} ${r+t}h${o-i}v1H${i+t}z`),i=null;return}if(o===e.length-1){if(!a)return;i===null?n.push(`M${o+t},${r+t} h1v1H${o+t}z`):n.push(`M${i+t},${r+t} h${o+1-i}v1H${i+t}z`);return}a&&i===null&&(i=o)})}),n.join(``)}function xe(e,t){return e.slice().map((e,n)=>n<t.y||n>=t.y+t.h?e:e.map((e,n)=>n<t.x||n>=t.x+t.w?e:!1))}function Se(e,t,n,r){if(r==null)return null;let i=e.length+n*2,a=Math.floor(t*ye),o=i/t,s=(r.width||a)*o,c=(r.height||a)*o,l=r.x==null?e.length/2-s/2:r.x*o,u=r.y==null?e.length/2-c/2:r.y*o,d=r.opacity==null?1:r.opacity,f=null;if(r.excavate){let e=Math.floor(l),t=Math.floor(u);f={x:e,y:t,w:Math.ceil(s+l-e),h:Math.ceil(c+u-t)}}let p=r.crossOrigin;return{x:l,y:u,h:c,w:s,excavation:f,opacity:d,crossOrigin:p}}function Q(e,t){return t==null?e?ve:Z:Math.max(Math.floor(t),0)}function Ce({value:e,level:t,minVersion:n,includeMargin:r,marginSize:i,imageSettings:a,size:o,boostLevel:s}){let c=I.useMemo(()=>{let r=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...K.QrSegment.makeSegments(t)),e),[]);return K.QrCode.encodeSegments(r,q[t],n,void 0,void 0,s)},[e,t,n,s]),{cells:l,margin:u,numCells:d,calculatedImageSettings:f}=I.useMemo(()=>{let e=c.getModules(),t=Q(r,i);return{cells:e,margin:t,numCells:e.length+t*2,calculatedImageSettings:Se(e,o,t,a)}},[c,o,a,r,i]);return{qrcode:c,margin:u,cells:l,numCells:d,calculatedImageSettings:f}}var we=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),Te=I.forwardRef(function(e,t){let n=e,{value:r,size:i=J,level:a=he,bgColor:o=ge,fgColor:s=Y,includeMargin:c=_e,minVersion:l=X,boostLevel:u,marginSize:d,imageSettings:f}=n,p=G(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`marginSize`,`imageSettings`]),{style:m}=p,h=G(p,[`style`]),g=f?.src,_=I.useRef(null),v=I.useRef(null),y=I.useCallback(e=>{_.current=e,typeof t==`function`?t(e):t&&(t.current=e)},[t]),[b,x]=I.useState(!1),{margin:S,cells:C,numCells:w,calculatedImageSettings:T}=Ce({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:d,imageSettings:f,size:i});I.useEffect(()=>{if(_.current!=null){let e=_.current,t=e.getContext(`2d`);if(!t)return;let n=C,r=v.current,a=T!=null&&r!==null&&r.complete&&r.naturalHeight!==0&&r.naturalWidth!==0;a&&T.excavation!=null&&(n=xe(C,T.excavation));let c=window.devicePixelRatio||1;e.height=e.width=i*c;let l=i/w*c;t.scale(l,l),t.fillStyle=o,t.fillRect(0,0,w,w),t.fillStyle=s,we?t.fill(new Path2D(be(n,S))):C.forEach(function(e,n){e.forEach(function(e,r){e&&t.fillRect(r+S,n+S,1,1)})}),T&&(t.globalAlpha=T.opacity),a&&t.drawImage(r,T.x+S,T.y+S,T.w,T.h)}}),I.useEffect(()=>{x(!1)},[g]);let E=W({height:i,width:i},m),D=null;return g!=null&&(D=I.createElement(`img`,{src:g,key:g,style:{display:`none`},onLoad:()=>{x(!0)},ref:v,crossOrigin:T?.crossOrigin})),I.createElement(I.Fragment,null,I.createElement(`canvas`,W({style:E,height:i,width:i,ref:y,role:`img`},h)),D)});Te.displayName=`QRCodeCanvas`;var Ee=I.forwardRef(function(e,t){let n=e,{value:r,size:i=J,level:a=he,bgColor:o=ge,fgColor:s=Y,includeMargin:c=_e,minVersion:l=X,boostLevel:u,title:d,marginSize:f,imageSettings:p}=n,m=G(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`title`,`marginSize`,`imageSettings`]),{margin:h,cells:g,numCells:_,calculatedImageSettings:v}=Ce({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:f,imageSettings:p,size:i}),y=g,b=null;p!=null&&v!=null&&(v.excavation!=null&&(y=xe(g,v.excavation)),b=I.createElement(`image`,{href:p.src,height:v.h,width:v.w,x:v.x+h,y:v.y+h,preserveAspectRatio:`none`,opacity:v.opacity,crossOrigin:v.crossOrigin}));let x=be(y,h);return I.createElement(`svg`,W({height:i,width:i,viewBox:`0 0 ${_} ${_}`,ref:t,role:`img`},m),!!d&&I.createElement(`title`,null,d),I.createElement(`path`,{fill:o,d:`M0,0 h${_}v${_}H0z`,shapeRendering:`crispEdges`}),I.createElement(`path`,{fill:s,d:x,shapeRendering:`crispEdges`}),b)});Ee.displayName=`QRCodeSVG`;var De=e=>`${e}님과 OTL 시간표 친구를 맺어보세요!`,Oe=(e,t)=>`${De(e)}\n${t}`;async function ke(e,t){let n=Oe(e,t);if(navigator.clipboard){await navigator.clipboard.writeText(n);return}let r=document.createElement(`textarea`);r.value=n,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{if(!document.execCommand(`copy`))throw Error(`Clipboard unavailable`)}finally{r.remove()}}async function Ae(e,t){if(navigator.share)try{return await navigator.share({title:`OTL 시간표 친구 초대`,text:De(e),url:t}),`shared`}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return`cancelled`}return await ke(e,t),`copied`}async function je(e){let t=e.toDataURL(`image/png`);if(!t.startsWith(`data:image/png;`))throw Error(`Could not encode the QR code as PNG`);let n=document.createElement(`a`);n.href=t,n.download=`otl-friend-qr.png`,document.body.appendChild(n);try{n.click()}finally{n.remove()}}async function $(e){if(!navigator.clipboard?.write||typeof ClipboardItem>`u`)throw new DOMException(`Image clipboard is unavailable`,`NotSupportedError`);await navigator.clipboard.write([new ClipboardItem({"image/png":new Promise((t,n)=>{e.toBlob(e=>{e?t(e):n(Error(`Could not encode the QR code as PNG`))},`image/png`)})})])}var Me=d.div`
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
`;function Fe({isOpen:e,onClose:t,userName:n}){let{t:r}=x(),i=ee(`mobile`),[a,o]=(0,I.useState)(!1),[s,d]=(0,I.useState)(!1),p=(0,I.useRef)(null),[m,h]=(0,I.useState)(null),[g,_]=(0,I.useState)(!1),[y,S]=(0,I.useState)(null),[C,D]=(0,I.useState)(null),{query:O}=v(`GET`,`/friends/code`,{enabled:e,staleTime:0,gcTime:0}),k=O.isSuccess?O.data.code:null,A=k?`${new URL(`/friends/invite`,window.location.origin)}#${k}`:``,te=!!(A&&m===A);(0,I.useEffect)(()=>{o(!1),d(!1),e||h(null),_(!1),S(null),D(null)},[e,A]);let M=async e=>{let t=p.current;if(!(!t||!te||g)){S(null),D(null),_(!0);try{e===`download`?await je(t):await $(t),S(e===`download`?`qrDownloaded`:`qrCopied`)}catch(t){D(e===`download`?`qrDownloadError`:t instanceof DOMException&&t.name===`NotSupportedError`?`qrCopyUnsupported`:`qrCopyError`)}finally{_(!1)}}};return c(w,{isOpen:e,onClose:t,title:r(`friends.inviteTitle`),fullScreen:i,children:l(f,{direction:`column`,gap:16,align:`stretch`,children:[c(T,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.inviteDescription`)}),O.isPending&&c(T,{type:`Normal`,color:`Text.placeholder`,role:`status`,children:r(`friends.inviteLoading`)}),O.isError&&c(T,{type:`Normal`,color:`Highlight.default`,role:`alert`,children:r(`friends.inviteError`)}),s&&c(T,{type:`Normal`,color:`Highlight.default`,children:r(`friends.inviteError`)}),k&&l(u,{children:[l(T,{type:`BigBold`,color:`Text.default`,className:`mp-block mp-sensitive`,children:[r(`friends.code`),`: `,k]}),c(Me,{className:`mp-block mp-sensitive`,children:Oe(n,A)}),c(f,{direction:`row`,justify:`center`,gap:0,onLoadCapture:e=>{e.target instanceof HTMLImageElement&&h(A)},onErrorCapture:e=>{e.target instanceof HTMLImageElement&&(h(null),D(`qrImageError`))},children:c(Te,{ref:p,value:A,"aria-label":r(`friends.inviteQr`),title:r(`friends.inviteQr`),role:`img`,size:512,style:{width:200,height:200},level:`H`,marginSize:4,bgColor:`#FFFFFF`,fgColor:`#000000`,imageSettings:{src:`/static/favicon-192.png`,width:88,height:88,excavate:!0},className:`mp-block mp-sensitive`},A)}),l(Ne,{children:[l(Pe,{type:`button`,disabled:!te||g,onClick:()=>M(`download`),children:[c(b,{size:16,children:c(R,{})}),r(`friends.downloadQr`)]}),l(Pe,{type:`button`,disabled:!te||g,onClick:()=>M(`copy`),children:[c(b,{size:16,children:c(j,{})}),r(`friends.copyQr`)]})]}),y&&c(T,{type:`Small`,color:`Highlight.default`,role:`status`,children:r(`friends.${y}`)}),C&&c(T,{type:`Small`,color:`Highlight.default`,role:`alert`,children:r(`friends.${C}`)})]}),a&&c(T,{type:`Small`,color:`Highlight.default`,children:r(`friends.copied`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[l(E,{type:k?`default`:`disabled`,onClick:async()=>{if(A)try{await ke(n,A),o(!0)}catch{d(!0)}},children:[c(b,{size:16,children:c(j,{})}),r(`friends.copy`)]}),l(E,{type:k?`highlighted`:`disabled`,onClick:async()=>{if(A)try{await Ae(n,A)===`copied`&&o(!0)}catch{d(!0)}},children:[c(b,{size:16,children:c(B,{})}),r(`friends.share`)]})]})]})})}var Ie=d(f)`
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;

    > * {
        flex-shrink: 0;
    }
`,Le=d(s)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    text-decoration: none;
`,Re=d.a`
    text-decoration: none;
`,ze=d(f)`
    width: 100%;
    padding: 10px 0;
`;function Be({lecture:e,year:t,semester:n}){let{t:r}=x();if(!e)return c(Ie,{direction:`column`,gap:0,justify:`center`,align:`center`,children:c(T,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.selectLecture`)})});let i=btoa(JSON.stringify({syy:String(t),smtDivCd:String(n),subjtCd:e.code,syllabusOpenYn:`0`}));return l(Ie,{direction:`column`,gap:12,align:`stretch`,children:[l(ze,{direction:`column`,gap:10,align:`center`,children:[l(f,{direction:`column`,gap:2,align:`center`,children:[c(T,{type:`Bigger`,color:`Text.default`,children:e.name+e.subtitle}),l(T,{type:`Big`,color:`Text.default`,children:[e.code,` `,e.classNo?`(${e.classNo})`:``]})]}),l(f,{direction:`row`,gap:8,justify:`flex-end`,style:{width:`100%`},children:[c(Le,{to:`/dictionary?courseId=${e.courseId}`,children:c(T,{type:`Normal`,color:`Highlight.default`,children:r(`header.dictionary`)})}),c(Re,{href:`https://erp.kaist.ac.kr/com/lgin/SsoCtr/initExtPageWork.do?link=estblSubjt&params=${i}`,target:`_blank`,rel:`noopener noreferrer`,children:c(T,{type:`Normal`,color:`Highlight.default`,children:r(`header.syllabus`)})})]}),c(M,{selectedLecture:e,metrics:`course`}),c(F,{averageGrade:e.averageGrade,averageLoad:e.averageLoad,averageSpeech:e.averageSpeech,reviewCount:void 0,labels:{grade:r(`common.grade`),load:r(`common.load`),speech:r(`common.speech`)},fluid:!0,compact:!0})]}),c(D,{}),c(N,{lectureId:e.id}),c(D,{}),c(P,{selectedCourseId:e.courseId,selectedProfessorId:e.professors[0]?.id??-1,showSummary:!1,reviewVariant:`simple`},e.id)]})}var Ve=()=>[{title:`친구 시간표 | OTL`},{name:`description`,content:`OTL 친구들의 시간표와 함께 듣는 수업을 확인하세요.`}],He=d.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0 20px 12px;
    box-sizing: border-box;

    ${O.tablet} {
        padding: 0 8px 8px;
    }
`,Ue=d.div`
    width: 100%;
    max-width: 1714px;
    height: 100%;
    min-height: 0;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 288px minmax(0, 1fr) 454px;
    gap: 12px;

    ${O.laptop} {
        grid-template-columns: 220px minmax(0, 1fr) 300px;
    }

    ${O.tablet} {
        display: block;
    }
`,We=d.div`
    min-width: 0;
    min-height: 0;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 12px;
`,Ge=d(We)`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 12px;

    ${O.tablet} {
        display: none;
    }
`,Ke=d.div`
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;

    ${O.tablet} {
        width: 100%;
        height: 100%;
    }
`,qe=d(We)`
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    padding: 16px;
    border-top-left-radius: 0;

    ${O.tablet} {
        padding: 8px;
    }
`,Je=d(We)`
    padding: 16px;
    overflow: hidden;

    ${O.tablet} {
        display: none;
    }
`,Ye=d(T)`
    align-self: center;
`,Xe=d.label`
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
`,Ze=d(ae)`
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
`,Qe=d.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`,$e=d.div`
    min-height: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
`,et=d.div`
    width: 100%;
    height: 46px;
    flex-shrink: 0;
    border: 0;
    border-radius: 6px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-align: left;
    font: inherit;
    color: ${({theme:e})=>e.colors.Text.default};
    background: ${({$selected:e,theme:t})=>e?t.colors.Background.Block.dark:t.colors.Background.Block.default};

    &:hover {
        background: ${({theme:e})=>e.colors.Background.Block.dark};
    }
`,tt=d(T)`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    line-height: 14px;
`,nt=et.withComponent(`button`),rt=d(b)`
    flex-shrink: 0;
    color: ${({theme:e})=>e.colors.Highlight.default};
`,it=d.button`
    width: 26px;
    height: 32px;
    flex-shrink: 0;
    padding: 0;
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

    &:disabled {
        cursor: wait;
    }
`,at=d.img`
    display: block;
    flex-shrink: 0;
`,ot=d.button`
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
`,st=d(f)`
    width: 100%;
    flex-shrink: 0;
    height: 34px;
    min-width: 0;
`,ct=d.div`
    min-width: 0;
    flex: 1;
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scrollbar-width: none;
`,lt=d(re)`
    height: 34px;
    flex-shrink: 0;
    padding: 8px 12px;
`,ut=d.div`
    min-height: 0;
    flex: 1;
    display: flex;
`,dt=d.div`
    display: none;
    flex-shrink: 0;
    gap: 8px;
    margin-bottom: 8px;

    ${O.tablet} {
        display: flex;
    }
`,ft=d.button`
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
`,pt=d(ft)`
    flex: none;
    width: 100%;
    justify-content: flex-start;
    text-align: left;
`,mt=d(f)`
    padding: 24px 16px;
    text-align: center;
`,ht=d(f)`
    width: 100%;
    height: 100%;
`;function gt({friend:e,showSchedule:t,selected:n,onSelect:r,onDelete:i}){let{t:a}=x(),o=g(),{mutation:s,requestFunction:u}=v(`PATCH`,`/friends/${e.id}/favorite`,{onSuccess:()=>te(o)});return l(et,{$selected:n,role:`button`,tabIndex:0,onClick:r,onKeyDown:e=>{e.currentTarget===e.target&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),r())},children:[c(tt,{type:`NormalBold`,children:e.name}),t&&e.hasScheduleNow===!0&&c(rt,{size:18,role:`img`,"aria-label":a(`friends.scheduleNow`),title:a(`friends.scheduleNow`),children:c(z,{})}),n&&c(it,{"aria-label":a(`friends.delete`),onClick:e=>{e.stopPropagation(),i()},children:c(at,{src:`/images/friends/design/delete.svg`,alt:``})}),c(it,{"aria-label":a(`friends.favorite`),"aria-pressed":e.isFavorite,disabled:s.isPending,onClick:t=>{t.stopPropagation(),u({isFavorite:!e.isFavorite})},children:c(at,{src:`/images/friends/design/star-${e.isFavorite?`filled`:`empty`}.svg`,alt:``})})]})}function _t({friends:e,showSchedule:t,selectedFriendId:n,onSelect:r,onDelete:i,onInvite:a}){let{t:o}=x(),[s,u]=(0,I.useState)(``),d=(0,I.useMemo)(()=>e.filter(({name:e})=>e.toLowerCase().includes(s.toLowerCase())),[e,s]);return l($e,{children:[c(Ye,{type:`Big`,color:`Text.default`,role:`heading`,"aria-level":2,children:o(`friends.friendList`,{count:e.length})}),c(D,{}),l(Xe,{children:[c(at,{src:`/images/friends/design/search.svg`,alt:``}),c(Ze,{value:s,handleChange:u,placeholder:o(`friends.searchPlaceholder`),"aria-label":o(`friends.searchPlaceholder`)})]}),l(Qe,{children:[c(nt,{type:`button`,$selected:n===null,"aria-pressed":n===null,onClick:()=>r(null),children:c(tt,{type:`NormalBold`,children:o(`friends.myTimetable`)})}),d.map(e=>c(gt,{friend:e,showSchedule:t,selected:n===e.id,onSelect:()=>r(n===e.id?null:e.id),onDelete:()=>i(e)},e.id)),!d.length&&c(mt,{direction:`column`,gap:0,align:`center`,children:c(T,{type:`Small`,color:`Text.disable`,children:o(`friends.noFriends`)})})]}),c(ot,{onClick:a,children:o(`friends.invite`)})]})}function vt(e){let t=Number(e);return Number.isSafeInteger(t)&&t>0?t:null}var yt=r(function(){let{t:e}=x(),t=g(),n=ee(`tablet`),{user:r,status:s}=h(),[d,y]=o(),S=i(),C=a(),D=vt(d.get(`friendId`)),O=vt(d.get(`year`)),j=Number(d.get(`semester`)),M=O!==null&&Number.isInteger(j)&&j>=p.SPRING&&j<=p.WINTER,N=M?O:-1,P=M?j:p.SPRING,re=M?vt(d.get(`timetableId`)):null,F=D===null?re:null,{query:ie}=v(`GET`,`/semesters`,{enabled:s===`success`&&D!==null}),ae=(0,I.useMemo)(()=>{let e=[...ie.data?.semesters??[]],t={year:N,semester:P};return(N>0&&!e.some(e=>e.year===N&&e.semester===P)?[...e,t]:e).sort((e,t)=>t.year-e.year||t.semester-e.semester)},[ie.data,N,P]),oe=(0,I.useRef)(null),[L,R]=(0,I.useState)(null),z=L?.kind===m.LECTURE?L.data:null,B=L?.kind===m.CUSTOM?L.data:null,[V,H]=(0,I.useState)(!1),[ue,de]=(0,I.useState)(()=>typeof document>`u`||document.visibilityState!==`hidden`),[fe,pe]=(0,I.useState)(!1),[U,W]=(0,I.useState)(!1),G=(0,I.useRef)(null),[me,K]=(0,I.useState)(!1),[q,J]=(0,I.useState)(null),[he,ge]=(0,I.useState)(S.state?.friendAddedName??null),Y=(0,I.useCallback)(e=>{H(!1),y(t=>{let n=new URLSearchParams(t);return e===null?n.delete(`friendId`):n.set(`friendId`,String(e)),n.delete(`timetableId`),n})},[y]),_e=e=>{let t=new URLSearchParams(d);e===null?t.delete(`timetableId`):t.set(`timetableId`,String(e)),y(t)},X=(0,I.useCallback)((e,t)=>{let n=new URLSearchParams(d);n.set(`year`,String(e)),n.set(`semester`,String(t)),n.delete(`timetableId`),y(n,{replace:N<0})},[d,y,N]);(0,I.useEffect)(()=>{if(D===null||N>=0)return;let e=ae[0];e&&X(e.year,e.semester)},[D,N,ae,X]),(0,I.useEffect)(()=>{oe.current?.scrollIntoView?.({block:`nearest`,inline:`nearest`})},[D,N,P,F,ie.data]),(0,I.useEffect)(()=>{n&&U&&G.current?.focus()},[n,U,L]);let ve=!n||V,{query:Z}=v(`GET`,`/friends`,{enabled:s===`success`,staleTime:0,refetchInterval:s===`success`&&ve&&ue?6e4:!1,refetchOnWindowFocus:ve});(0,I.useEffect)(()=>{let e=()=>de(document.visibilityState!==`hidden`),t=()=>{s===`success`&&ve&&document.visibilityState!==`hidden`&&Z.refetch({cancelRefetch:!1})};return document.addEventListener(`visibilitychange`,e),window.addEventListener(`focus`,t),()=>{document.removeEventListener(`visibilitychange`,e),window.removeEventListener(`focus`,t)}},[s,ve,Z.refetch]),(0,I.useEffect)(()=>{s===`success`&&n&&V&&document.visibilityState!==`hidden`&&Z.refetch({cancelRefetch:!1})},[s,n,V,Z.refetch]),(0,I.useEffect)(()=>{let e=Date.now()-Date.parse(Z.data?.checkedAt??``),t=Number.isFinite(e)&&e>=-6e4&&e<12e4;if(pe(t),!t)return;let n=window.setTimeout(()=>pe(!1),12e4-Math.max(0,e));return()=>window.clearTimeout(n)},[Z.data?.checkedAt]);let ye=fe&&Z.isSuccess&&!Z.isError,be=Z.data?.friends.find(({id:e})=>e===D),{query:xe,setParams:Se}=v(`GET`,`/timetables`,{enabled:s===`success`&&D===null}),{query:Q,setParams:Ce}=v(`GET`,`/timetables/my-timetable`,{enabled:s===`success`}),{query:we,setParams:Te}=v(`GET`,`/users/${r?.id??0}/timetables`,{apiPrefix:`/api`,enabled:s===`success`&&D!==null,staleTime:0}),{query:Ee}=v(`GET`,`/timetables/${F??0}`,{enabled:s===`success`&&D===null&&F!==null}),{query:De,setParams:Oe}=v(`GET`,`/friends/${D??0}/timetables/shared`,{enabled:s===`success`&&D!==null&&N>0,staleTime:0,gcTime:0}),{mutation:ke,requestFunction:Ae}=v(`DELETE`,`/friends/${q?.id??0}`,{onSuccess:()=>{q?.id===D&&Y(null),q&&k(t,q.id),J(null),te(t)}});(0,I.useEffect)(()=>{if(N<0)return;let e={year:N,semester:P};Ce(e),Te(e),D===null?Se(e):Oe(e)},[N,P,D]),(0,I.useEffect)(()=>{R(null),W(!1),H(!1)},[D,N,P,F,S.key]),(0,I.useEffect)(()=>{D!==null&&!Z.isFetching&&Z.isSuccess&&Z.data&&!Z.data.friends.some(({id:e})=>e===D)&&Y(null)},[Z.data,Z.isFetching,Z.isSuccess,D,Y]);let je=xe.data?.timetables??[],$=D===null?F===null?Q:Ee:De,Me=$.isError?[]:$.data?.timetableItems??[],Ne=Me.flatMap(e=>e.kind===m.LECTURE?[e.data]:[]),Pe=(0,I.useMemo)(()=>{if(D===null)return[];let e=new Set([...(we.isError?[]:we.data??[]).flatMap(e=>e.lectures?.map(({id:e})=>e)??[]),...(Q.isError?[]:Q.data?.timetableItems??[]).flatMap(e=>e.kind===m.LECTURE?[e.data.id]:[])]);return Me.flatMap(t=>t.kind===m.LECTURE&&e.has(t.data.id)?[t.data.id]:[])},[D,we.data,we.isError,Q.data,Q.isError,Me]),Ie=(t,n)=>e(`friends.semesterLabel`,{year:t,semester:_(n)}),Le=D===null?F===null?e(`friends.actualTimetable`):je.find(({id:e})=>e===F)?.name||`No Title`:Ie(N,P),Re=D===null?[{key:`academic`,name:e(`friends.actualTimetable`),selected:F===null,onSelect:()=>_e(null)},...je.map(e=>({key:String(e.id),name:e.name||`No Title`,selected:F===e.id,onSelect:()=>_e(e.id)}))]:ae.map(e=>({key:`${e.year}-${e.semester}`,name:Ie(e.year,e.semester),selected:e.year===N&&e.semester===P,onSelect:()=>X(e.year,e.semester)})),ze=()=>{ge(null),C(S.pathname+S.search,{replace:!0,state:null})};return s===`success`?l(He,{children:[l(Ue,{children:[!n&&c(Ge,{children:c(_t,{friends:Z.data?.friends??[],showSchedule:ye,selectedFriendId:D,onSelect:Y,onDelete:J,onInvite:()=>K(!0)})}),l(Ke,{children:[l(dt,{children:[l(ft,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":V,onClick:()=>H(!0),children:[c(b,{size:18,children:c(ce,{})}),e(`friends.selectFriend`)]}),c(ft,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":U,onClick:()=>{B&&R(null),W(!0)},children:e(`friends.viewOverlaps`)})]}),l(st,{direction:`row`,gap:8,align:`center`,justify:`space-between`,children:[c(ct,{role:`tablist`,"aria-label":be?.name??e(`friends.myTimetable`),children:Re.map(e=>c(lt,{buttonRef:e.selected?oe:void 0,role:`tab`,tabIndex:0,"aria-selected":e.selected,type:e.selected?`selected`:`default`,onClick:e.onSelect,onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e.onSelect())},children:e.name},e.key))}),D===null&&c(ne,{variant:`outlined`,year:N,semester:P,onChange:X})]}),l(qe,{children:[($.isError||D!==null&&ie.isError)&&c(T,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.loadError`)}),c(ut,{children:c(se,{timetableItems:Me,overlappedLectureIds:Pe,displayedDayCount:7,needTimeFilter:!1,needLectureDeletable:!1,selectedLectures:z?[z]:[],selectedCustomBlock:B,onLectureSelect:e=>{R({kind:m.LECTURE,data:e}),n&&W(!0)},onCustomBlockSelect:e=>{R({kind:m.CUSTOM,data:e}),n&&W(!0)}})})]})]}),!n&&c(Je,{children:B?c(le,{block:B,timetableName:Le,onClose:()=>R(null)}):c(Be,{lecture:z,year:N,semester:P})})]}),c(w,{isOpen:n&&V,onClose:()=>H(!1),title:e(`friends.title`),fullScreen:!0,children:c(_t,{friends:Z.data?.friends??[],showSchedule:ye,selectedFriendId:D,onSelect:Y,onDelete:e=>{H(!1),J(e)},onInvite:()=>{H(!1),K(!0)}})}),c(w,{isOpen:n&&U,onClose:()=>W(!1),title:e(B?`friends.customBlockDetail`:`friends.viewOverlaps`),fullScreen:!0,children:B?c(le,{block:B,timetableName:Le}):z?l(u,{children:[c(pt,{ref:G,type:`button`,onClick:()=>R(null),children:e(`friends.chooseAnotherLecture`)}),c(Be,{lecture:z,year:N,semester:P})]}):l(f,{direction:`column`,gap:8,align:`stretch`,children:[c(T,{type:`Normal`,color:`Text.default`,children:e(`friends.chooseLecture`)}),$.isPending?c(T,{role:`status`,children:e(`friends.loadingLectures`)}):$.isError?c(T,{role:`alert`,children:e(`friends.loadError`)}):Ne.length===0?c(T,{children:e(`friends.noLectures`)}):Ne.map((e,t)=>l(pt,{ref:t===0?G:void 0,type:`button`,onClick:()=>R({kind:m.LECTURE,data:e}),children:[e.name,e.subtitle,` `,e.classNo&&`(${e.classNo})`]},e.id))]})}),c(Fe,{isOpen:me,onClose:()=>K(!1),userName:r?.name??``}),l(w,{isOpen:q!==null,onClose:()=>J(null),title:e(`friends.deleteTitle`),fullScreen:n,children:[c(T,{type:`Normal`,color:`Text.default`,children:e(`friends.deleteConfirm`,{name:q?.name})}),ke.isError&&c(T,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.updateError`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[c(E,{onClick:()=>J(null),children:e(`friends.cancel`)}),c(E,{type:ke.isPending?`disabled`:`highlighted`,onClick:()=>Ae({}),children:e(`friends.delete`)})]})]}),l(w,{isOpen:he!==null,onClose:ze,title:e(`friends.title`),fullScreen:n,children:[c(T,{type:`Normal`,color:`Text.default`,children:e(`friends.friendAdded`,{name:he})}),c(f,{direction:`row`,gap:0,justify:`flex-end`,children:c(E,{type:`highlighted`,onClick:ze,children:e(`friends.viewTimetable`)})})]})]}):c(ht,{direction:`column`,gap:16,align:`center`,justify:`center`,children:s===`idle`&&l(u,{children:[c(T,{type:`Big`,color:`Text.placeholder`,children:e(`friends.loginRequired`)}),c(A,{})]})})});export{yt as default,Ve as meta};
//# sourceMappingURL=friends-BHmRTfSY.js.map