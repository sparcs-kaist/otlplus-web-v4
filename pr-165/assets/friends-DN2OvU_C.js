(function(){try{var e=typeof window<`u`?window:typeof global<`u`?global:typeof globalThis<`u`?globalThis:typeof self<`u`?self:{};e.SENTRY_RELEASE={id:`cfc2fade0bf6ecc651a806033d4e995b667736f0`};var t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]=`960ecc81-ccb7-4e93-a3d5-98ac1c656e98`,e._sentryDebugIdIdentifier=`sentry-dbid-960ecc81-ccb7-4e93-a3d5-98ac1c656e98`)}catch{}})();import{n as e,s as t,t as n}from"./jsx-runtime-DKN59dVB.js";import{A as r,D as i,O as a,k as o,n as s}from"./chunk-62JRHF6Z-BNfoTf4m.js";import{n as c,r as l,t as u}from"./emotion-react-jsx-runtime.browser.esm-BY944pNN.js";import{n as d,t as f}from"./FlexWrapper-Bt_2LI38.js";import{i as p,k as m,x as h}from"./axios-CPzFdlVg.js";import{t as g}from"./useAPI-B8Ex3qph.js";import{r as _,t as v}from"./Icon-BBAhKOu4.js";import{t as y}from"./useTranslation-CBKz8ZJd.js";import{t as b}from"./Modal-CnkHAXyi.js";import{t as x}from"./Typography-7ESYmJ8U.js";import{t as S}from"./Button-CqKOg7HT.js";import{t as C}from"./Search-B9iZV5jm.js";import{t as w}from"./media-92z4hI0C.js";import{t as T}from"./useIsDevice-C_JbTry2.js";import{t as E}from"./Person-D84Ztp75.js";import{n as D,r as ee,t as te}from"./friendQueries-T02VDYIM.js";import{t as O}from"./ContentCopy-vGZi1lec.js";import{a as k,n as ne,o as re,r as A,t as ie}from"./TabButton-8KSUvCy-.js";import{t as ae}from"./CustomTimeTableGrid-DGGR0tRB.js";var j=t(e()),M=t(n(),1),oe=_((0,M.jsx)(`path`,{d:`M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5`}),`Group`),N=_((0,M.jsx)(`path`,{d:`M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92`}),`Share`),P=_((0,M.jsx)(`path`,{d:`M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`}),`Star`),F=_((0,M.jsx)(`path`,{d:`m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z`}),`StarBorder`),I=Object.defineProperty,L=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,V=(e,t)=>{for(var n in t||={})R.call(t,n)&&B(e,n,t[n]);if(L)for(var n of L(t))z.call(t,n)&&B(e,n,t[n]);return e},H=(e,t)=>{var n={};for(var r in e)R.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&L)for(var r of L(e))t.indexOf(r)<0&&z.call(e,r)&&(n[r]=e[r]);return n},U;(e=>{let t=class t{constructor(e,n,r,a){if(this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version value out of range`);if(a<-1||a>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let o=[];for(let e=0;e<this.size;e++)o.push(!1);for(let e=0;e<this.size;e++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();let s=this.addEccAndInterleave(r);if(this.drawCodewords(s),a==-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(a=t,e=n),this.applyMask(t)}}i(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}static encodeText(n,r){let i=e.QrSegment.makeSegments(n);return t.encodeSegments(i,r)}static encodeBinary(n,r){let i=e.QrSegment.makeBytes(n);return t.encodeSegments([i],r)}static encodeSegments(e,r,a=1,s=40,c=-1,l=!0){if(!(t.MIN_VERSION<=a&&a<=s&&s<=t.MAX_VERSION)||c<-1||c>7)throw RangeError(`Invalid value`);let u,d;for(u=a;;u++){let n=t.getNumDataCodewords(u,r)*8,i=o.getTotalBits(e,u);if(i<=n){d=i;break}if(u>=s)throw RangeError(`Data too long`)}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])l&&d<=t.getNumDataCodewords(u,e)*8&&(r=e);let f=[];for(let t of e){n(t.mode.modeBits,4,f),n(t.numChars,t.mode.numCharCountBits(u),f);for(let e of t.getData())f.push(e)}i(f.length==d);let p=t.getNumDataCodewords(u,r)*8;i(f.length<=p),n(0,Math.min(4,p-f.length),f),n(0,(8-f.length%8)%8,f),i(f.length%8==0);for(let e=236;f.length<p;e^=253)n(e,8,f);let m=[];for(;m.length*8<f.length;)m.push(0);return f.forEach((e,t)=>m[t>>>3]|=e<<7-(t&7)),new t(u,r,m,c)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n==0&&r==0||n==0&&r==t-1||n==t-1&&r==0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let a=(t<<10|n)^21522;i(!(a>>>15));for(let e=0;e<=5;e++)this.setFunctionModule(8,e,r(a,e));this.setFunctionModule(8,7,r(a,6)),this.setFunctionModule(8,8,r(a,7)),this.setFunctionModule(7,8,r(a,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,r(a,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,r(a,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,r(a,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;i(!(t>>>18));for(let e=0;e<18;e++){let n=r(t,e),i=this.size-11+e%3,a=Math.floor(e/3);this.setFunctionModule(i,a,n),this.setFunctionModule(a,i,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;0<=a&&a<this.size&&0<=o&&o<this.size&&this.setFunctionModule(a,o,i!=2&&i!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){let n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw RangeError(`Invalid argument`);let a=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],o=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),c=a-s%a,l=Math.floor(s/a),u=[],d=t.reedSolomonComputeDivisor(o);for(let n=0,r=0;n<a;n++){let i=e.slice(r,r+l-o+(n<c?0:1));r+=i.length;let a=t.reedSolomonComputeRemainder(i,d);n<c&&i.push(0),u.push(i.concat(a))}let f=[];for(let e=0;e<u[0].length;e++)u.forEach((t,n)=>{(e!=l-o||n>=c)&&f.push(t[e])});return i(f.length==s),f}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError(`Invalid argument`);let n=0;for(let t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(let i=0;i<this.size;i++)for(let a=0;a<2;a++){let o=t-a,s=t+1&2?i:this.size-1-i;!this.isFunction[s][o]&&n<e.length*8&&(this.modules[s][o]=r(e[n>>>3],7-(n&7)),n++)}}i(n==e.length*8)}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[n][o]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[n][o],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size;n++){let r=!1,i=0,a=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][n]==r?(i++,i==5?e+=t.PENALTY_N1:i>5&&e++):(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[o][n],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let r=0;r<this.size-1;r++){let i=this.modules[n][r];i==this.modules[n][r+1]&&i==this.modules[n+1][r]&&i==this.modules[n+1][r+1]&&(e+=t.PENALTY_N2)}let n=0;for(let e of this.modules)n=e.reduce((e,t)=>e+ +!!t,n);let r=this.size*this.size,a=Math.ceil(Math.abs(n*20-r*10)/r)-1;return i(0<=a&&a<=9),e+=a*t.PENALTY_N4,i(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{let e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError(`Version number out of range`);let n=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;n-=(25*t-10)*t-55,e>=7&&(n-=36)}return i(208<=n&&n<=29648),n}static getNumDataCodewords(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let n=[];for(let t=0;t<e-1;t++)n.push(0);n.push(1);let r=1;for(let i=0;i<e;i++){for(let e=0;e<n.length;e++)n[e]=t.reedSolomonMultiply(n[e],r),e+1<n.length&&(n[e]^=n[e+1]);r=t.reedSolomonMultiply(r,2)}return n}static reedSolomonComputeRemainder(e,n){let r=n.map(e=>0);for(let i of e){let e=i^r.shift();r.push(0),n.forEach((n,i)=>r[i]^=t.reedSolomonMultiply(n,e))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return i(!(n>>>8)),n}finderPenaltyCountPatterns(e){let t=e[1];i(t<=this.size*3);let n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;function n(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function r(e,t){return!!(e>>>t&1)}function i(e){if(!e)throw Error(`Assertion error`)}let a=class e{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}static makeBytes(t){let r=[];for(let e of t)n(e,8,r);return new e(e.Mode.BYTE,t.length,r)}static makeNumeric(t){if(!e.isNumeric(t))throw RangeError(`String contains non-numeric characters`);let r=[];for(let e=0;e<t.length;){let i=Math.min(t.length-e,3);n(parseInt(t.substring(e,e+i),10),i*3+1,r),e+=i}return new e(e.Mode.NUMERIC,t.length,r)}static makeAlphanumeric(t){if(!e.isAlphanumeric(t))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let r=[],i;for(i=0;i+2<=t.length;i+=2){let a=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i))*45;a+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i+1)),n(a,11,r)}return i<t.length&&n(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(i)),6,r),new e(e.Mode.ALPHANUMERIC,t.length,r)}static makeSegments(t){return t==``?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}static makeEci(t){let r=[];if(t<0)throw RangeError(`ECI assignment value out of range`);if(t<128)n(t,8,r);else if(t<16384)n(2,2,r),n(t,14,r);else if(t<1e6)n(6,3,r),n(t,21,r);else throw RangeError(`ECI assignment value out of range`);return new e(e.Mode.ECI,0,r)}static isNumeric(t){return e.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return e.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(let r of e){let e=r.mode.numCharCountBits(t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)==`%`?(t.push(parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}};a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`;let o=a;e.QrSegment=a})(U||={}),(e=>{(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})(e.QrCode||={})})(U||={}),(e=>{(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})(e.QrSegment||={})})(U||={});var W=U,G={L:W.QrCode.Ecc.LOW,M:W.QrCode.Ecc.MEDIUM,Q:W.QrCode.Ecc.QUARTILE,H:W.QrCode.Ecc.HIGH},K=128,q=`L`,J=`#FFFFFF`,Y=`#000000`,se=!1,ce=1,le=4,ue=0,de=.1;function X(e,t=0){let n=[];return e.forEach(function(e,r){let i=null;e.forEach(function(a,o){if(!a&&i!==null){n.push(`M${i+t} ${r+t}h${o-i}v1H${i+t}z`),i=null;return}if(o===e.length-1){if(!a)return;i===null?n.push(`M${o+t},${r+t} h1v1H${o+t}z`):n.push(`M${i+t},${r+t} h${o+1-i}v1H${i+t}z`);return}a&&i===null&&(i=o)})}),n.join(``)}function fe(e,t){return e.slice().map((e,n)=>n<t.y||n>=t.y+t.h?e:e.map((e,n)=>n<t.x||n>=t.x+t.w?e:!1))}function pe(e,t,n,r){if(r==null)return null;let i=e.length+n*2,a=Math.floor(t*de),o=i/t,s=(r.width||a)*o,c=(r.height||a)*o,l=r.x==null?e.length/2-s/2:r.x*o,u=r.y==null?e.length/2-c/2:r.y*o,d=r.opacity==null?1:r.opacity,f=null;if(r.excavate){let e=Math.floor(l),t=Math.floor(u);f={x:e,y:t,w:Math.ceil(s+l-e),h:Math.ceil(c+u-t)}}let p=r.crossOrigin;return{x:l,y:u,h:c,w:s,excavation:f,opacity:d,crossOrigin:p}}function me(e,t){return t==null?e?le:ue:Math.max(Math.floor(t),0)}function he({value:e,level:t,minVersion:n,includeMargin:r,marginSize:i,imageSettings:a,size:o,boostLevel:s}){let c=j.useMemo(()=>{let r=(Array.isArray(e)?e:[e]).reduce((e,t)=>(e.push(...W.QrSegment.makeSegments(t)),e),[]);return W.QrCode.encodeSegments(r,G[t],n,void 0,void 0,s)},[e,t,n,s]),{cells:l,margin:u,numCells:d,calculatedImageSettings:f}=j.useMemo(()=>{let e=c.getModules(),t=me(r,i);return{cells:e,margin:t,numCells:e.length+t*2,calculatedImageSettings:pe(e,o,t,a)}},[c,o,a,r,i]);return{qrcode:c,margin:u,cells:l,numCells:d,calculatedImageSettings:f}}var ge=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),_e=j.forwardRef(function(e,t){let n=e,{value:r,size:i=K,level:a=q,bgColor:o=J,fgColor:s=Y,includeMargin:c=se,minVersion:l=ce,boostLevel:u,marginSize:d,imageSettings:f}=n,p=H(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`marginSize`,`imageSettings`]),{style:m}=p,h=H(p,[`style`]),g=f?.src,_=j.useRef(null),v=j.useRef(null),y=j.useCallback(e=>{_.current=e,typeof t==`function`?t(e):t&&(t.current=e)},[t]),[b,x]=j.useState(!1),{margin:S,cells:C,numCells:w,calculatedImageSettings:T}=he({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:d,imageSettings:f,size:i});j.useEffect(()=>{if(_.current!=null){let e=_.current,t=e.getContext(`2d`);if(!t)return;let n=C,r=v.current,a=T!=null&&r!==null&&r.complete&&r.naturalHeight!==0&&r.naturalWidth!==0;a&&T.excavation!=null&&(n=fe(C,T.excavation));let c=window.devicePixelRatio||1;e.height=e.width=i*c;let l=i/w*c;t.scale(l,l),t.fillStyle=o,t.fillRect(0,0,w,w),t.fillStyle=s,ge?t.fill(new Path2D(X(n,S))):C.forEach(function(e,n){e.forEach(function(e,r){e&&t.fillRect(r+S,n+S,1,1)})}),T&&(t.globalAlpha=T.opacity),a&&t.drawImage(r,T.x+S,T.y+S,T.w,T.h)}}),j.useEffect(()=>{x(!1)},[g]);let E=V({height:i,width:i},m),D=null;return g!=null&&(D=j.createElement(`img`,{src:g,key:g,style:{display:`none`},onLoad:()=>{x(!0)},ref:v,crossOrigin:T?.crossOrigin})),j.createElement(j.Fragment,null,j.createElement(`canvas`,V({style:E,height:i,width:i,ref:y,role:`img`},h)),D)});_e.displayName=`QRCodeCanvas`;var ve=j.forwardRef(function(e,t){let n=e,{value:r,size:i=K,level:a=q,bgColor:o=J,fgColor:s=Y,includeMargin:c=se,minVersion:l=ce,boostLevel:u,title:d,marginSize:f,imageSettings:p}=n,m=H(n,[`value`,`size`,`level`,`bgColor`,`fgColor`,`includeMargin`,`minVersion`,`boostLevel`,`title`,`marginSize`,`imageSettings`]),{margin:h,cells:g,numCells:_,calculatedImageSettings:v}=he({value:r,level:a,minVersion:l,boostLevel:u,includeMargin:c,marginSize:f,imageSettings:p,size:i}),y=g,b=null;p!=null&&v!=null&&(v.excavation!=null&&(y=fe(g,v.excavation)),b=j.createElement(`image`,{href:p.src,height:v.h,width:v.w,x:v.x+h,y:v.y+h,preserveAspectRatio:`none`,opacity:v.opacity,crossOrigin:v.crossOrigin}));let x=X(y,h);return j.createElement(`svg`,V({height:i,width:i,viewBox:`0 0 ${_} ${_}`,ref:t,role:`img`},m),!!d&&j.createElement(`title`,null,d),j.createElement(`path`,{fill:o,d:`M0,0 h${_}v${_}H0z`,shapeRendering:`crispEdges`}),j.createElement(`path`,{fill:s,d:x,shapeRendering:`crispEdges`}),b)});ve.displayName=`QRCodeSVG`;var Z=e=>`${e}님과 OTL 시간표 친구를 맺어보세요!`,Q=(e,t)=>`${Z(e)}\n${t}`;async function $(e,t){let n=Q(e,t);if(navigator.clipboard){await navigator.clipboard.writeText(n);return}let r=document.createElement(`textarea`);r.value=n,r.style.position=`fixed`,r.style.opacity=`0`,document.body.appendChild(r),r.select();try{if(!document.execCommand(`copy`))throw Error(`Clipboard unavailable`)}finally{r.remove()}}async function ye(e,t){if(navigator.share)try{return await navigator.share({title:`OTL 시간표 친구 초대`,text:Z(e),url:t}),`shared`}catch(e){if(e instanceof DOMException&&e.name===`AbortError`)return`cancelled`}return await $(e,t),`copied`}var be=d.div`
    padding: 14px;
    border-radius: 8px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.default};
    font-size: 14px;
    line-height: 21px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`;function xe({isOpen:e,onClose:t,userName:n}){let{t:r}=y(),i=T(`mobile`),[a,o]=(0,j.useState)(!1),[s,d]=(0,j.useState)(!1),{query:p}=g(`GET`,`/friends/code`,{enabled:e,staleTime:0,gcTime:0});(0,j.useEffect)(()=>{e&&(o(!1),d(!1))},[e]);let m=p.isSuccess?p.data.code:null,h=m?`${new URL(`/friends/invite`,window.location.origin)}#${m}`:``;return c(b,{isOpen:e,onClose:t,title:r(`friends.inviteTitle`),fullScreen:i,children:l(f,{direction:`column`,gap:16,align:`stretch`,children:[c(x,{type:`Normal`,color:`Text.placeholder`,children:r(`friends.inviteDescription`)}),p.isPending&&c(x,{type:`Normal`,color:`Text.placeholder`,role:`status`,children:r(`friends.inviteLoading`)}),p.isError&&c(x,{type:`Normal`,color:`Highlight.default`,role:`alert`,children:r(`friends.inviteError`)}),s&&c(x,{type:`Normal`,color:`Highlight.default`,children:r(`friends.inviteError`)}),m&&l(u,{children:[l(x,{type:`BigBold`,color:`Text.default`,className:`mp-block mp-sensitive`,children:[r(`friends.code`),`: `,m]}),c(be,{className:`mp-block mp-sensitive`,children:Q(n,h)}),c(f,{direction:`row`,justify:`center`,gap:0,children:c(ve,{value:h,title:r(`friends.inviteQr`),role:`img`,size:180,marginSize:4,className:`mp-block mp-sensitive`})})]}),a&&c(x,{type:`Small`,color:`Highlight.default`,children:r(`friends.copied`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[l(S,{type:m?`default`:`disabled`,onClick:async()=>{if(h)try{await $(n,h),o(!0)}catch{d(!0)}},children:[c(v,{size:16,children:c(O,{})}),r(`friends.copy`)]}),l(S,{type:m?`highlighted`:`disabled`,onClick:async()=>{if(h)try{await ye(n,h)===`copied`&&o(!0)}catch{d(!0)}},children:[c(v,{size:16,children:c(N,{})}),r(`friends.share`)]})]})]})})}var Se=d(f)`
    width: 100%;
    height: 100%;
    min-height: 0;
    overflow-y: auto;
`,Ce=d(s)`
    color: ${({theme:e})=>e.colors.Highlight.default};
    text-decoration: none;
`;function we({lecture:e}){let{t}=y();return e?l(Se,{direction:`column`,gap:16,align:`stretch`,children:[l(f,{direction:`column`,gap:4,align:`center`,children:[c(x,{type:`Bigger`,color:`Text.default`,children:e.name+e.subtitle}),l(x,{type:`Big`,color:`Text.default`,children:[e.code,` `,e.classNo?`(${e.classNo})`:``]}),c(Ce,{to:`/dictionary?courseId=${e.courseId}`,children:t(`header.dictionary`)})]}),c(k,{lectureId:e.id}),c(A,{selectedLecture:e})]}):c(Se,{direction:`column`,gap:0,justify:`center`,align:`center`,children:c(x,{type:`Normal`,color:`Text.placeholder`,children:t(`friends.selectLecture`)})})}var Te=()=>[{title:`친구 시간표 | OTL`},{name:`description`,content:`OTL 친구들의 시간표와 함께 듣는 수업을 확인하세요.`}],Ee=d.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 20px;
    box-sizing: border-box;

    ${w.tablet} {
        padding: 8px;
    }
`,De=d.div`
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
`,Oe=d.div`
    min-width: 0;
    min-height: 0;
    background: ${({theme:e})=>e.colors.Background.Section.default};
    border-radius: 12px;
    box-shadow:
        0 1px 3px rgba(0, 0, 0, 0.1),
        0 1px 2px rgba(0, 0, 0, 0.06);
`,ke=d(Oe)`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 16px 0 0;

    ${w.tablet} {
        display: none;
    }
`,Ae=d(Oe)`
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
`,je=d(Oe)`
    padding: 16px;
    overflow: hidden;

    ${w.tablet} {
        display: none;
    }
`,Me=d(f)`
    padding: 0 16px 12px;
`,Ne=d.label`
    height: 34px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
    border-radius: 6px;
    background: ${({theme:e})=>e.colors.Background.Block.default};
    color: ${({theme:e})=>e.colors.Text.placeholder};
`,Pe=d.input`
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({theme:e})=>e.colors.Text.default};
    font: inherit;
`,Fe=d.div`
    min-height: 0;
    flex: 1;
    overflow-y: auto;
`,Ie=d.div`
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
`,Le=d.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Re=d.button`
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
`,ze=d.button`
    height: 48px;
    border: 0;
    border-top: 1px solid ${({theme:e})=>e.colors.Line.block};
    background: transparent;
    color: ${({theme:e})=>e.colors.Highlight.default};
    cursor: pointer;
    font: inherit;
`,Be=d(f)`
    width: 100%;
    flex-shrink: 0;
    flex-wrap: wrap;
`,Ve=d.div`
    min-width: 0;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
`,He=d.div`
    min-height: 0;
    flex: 1;
    display: flex;
    padding-top: 8px;
`,Ue=d.div`
    display: none;
    flex-shrink: 0;
    gap: 8px;
    margin-bottom: 8px;

    ${w.tablet} {
        display: flex;
    }
`,We=d.button`
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
`,Ge=d(We)`
    flex: none;
    width: 100%;
    justify-content: flex-start;
    text-align: left;
`,Ke=d(f)`
    padding: 24px 16px;
    text-align: center;
`,qe=d(f)`
    width: 100%;
    height: 100%;
`;function Je({friend:e,selected:t,onSelect:n,onDelete:r}){let{t:i}=y(),a=m(),{mutation:o,requestFunction:s}=g(`PATCH`,`/friends/${e.id}/favorite`,{onSuccess:()=>te(a)});return l(Ie,{$selected:t,role:`button`,tabIndex:0,onClick:n,onKeyDown:e=>{e.currentTarget===e.target&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n())},children:[c(v,{size:18,children:c(E,{})}),c(Le,{children:e.name}),t&&c(Re,{"aria-label":i(`friends.delete`),onClick:e=>{e.stopPropagation(),r()},children:c(v,{size:20,children:c(re,{})})}),c(Re,{"aria-label":i(`friends.favorite`),"aria-pressed":e.isFavorite,disabled:o.isPending,onClick:t=>{t.stopPropagation(),s({isFavorite:!e.isFavorite})},children:c(v,{size:20,children:e.isFavorite?c(P,{}):c(F,{})})})]})}function Ye({friends:e,selectedFriendId:t,onSelect:n,onDelete:r,onInvite:i}){let{t:a}=y(),[o,s]=(0,j.useState)(``),d=(0,j.useMemo)(()=>e.filter(({name:e})=>e.toLowerCase().includes(o.toLowerCase())),[e,o]);return l(u,{children:[l(Me,{direction:`column`,gap:12,align:`stretch`,children:[c(x,{type:`BigBold`,color:`Text.default`,children:a(`friends.friendList`,{count:e.length})}),l(Ne,{children:[c(v,{size:18,children:c(C,{})}),c(Pe,{value:o,onChange:e=>s(e.target.value),placeholder:a(`friends.searchPlaceholder`)})]})]}),l(Fe,{children:[l(Ie,{$selected:t===null,role:`button`,tabIndex:0,onClick:()=>n(null),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n(null))},children:[c(v,{size:18,children:c(E,{})}),c(Le,{children:a(`friends.myTimetable`)})]}),d.map(e=>c(Je,{friend:e,selected:t===e.id,onSelect:()=>n(e.id),onDelete:()=>r(e)},e.id)),!d.length&&c(Ke,{direction:`column`,gap:0,align:`center`,children:c(x,{type:`Small`,color:`Text.disable`,children:a(`friends.noFriends`)})})]}),c(ze,{onClick:i,children:a(`friends.invite`)})]})}var Xe=r(function(){let{t:e}=y(),t=m(),n=T(`tablet`),{user:r,status:s}=p(),[d,_]=o(),C=i(),w=a(),E=Number(d.get(`friendId`)),O=Number.isSafeInteger(E)&&E>0?E:null,[k,re]=(0,j.useState)(-1),[A,M]=(0,j.useState)(h.SPRING),[N,P]=(0,j.useState)(null),[F,I]=(0,j.useState)(null),[L,R]=(0,j.useState)(!1),[z,B]=(0,j.useState)(!1),V=(0,j.useRef)(null),[H,U]=(0,j.useState)(!1),[W,G]=(0,j.useState)(null),[K,q]=(0,j.useState)(C.state?.friendAddedName??null);(0,j.useEffect)(()=>{n&&z&&V.current?.focus()},[n,z,F]);let{query:J}=g(`GET`,`/friends`,{enabled:s===`success`,staleTime:0}),Y=J.data?.friends.find(({id:e})=>e===O),{query:se,setParams:ce}=g(`GET`,`/timetables`,{enabled:s===`success`&&O===null}),{query:le,setParams:ue}=g(`GET`,`/timetables/my-timetable`,{enabled:s===`success`&&O===null}),{query:de}=g(`GET`,`/timetables/${N??0}`,{enabled:s===`success`&&O===null&&N!==null}),{query:X,setParams:fe}=g(`GET`,`/friends/${O??0}/timetables`,{enabled:s===`success`&&O!==null,staleTime:0,gcTime:0}),{query:pe,setParams:me}=g(`GET`,`/friends/${O??0}/timetables/my-timetable`,{enabled:s===`success`&&O!==null,staleTime:0,gcTime:0}),{query:he}=g(`GET`,`/friends/${O??0}/timetables/${N??0}`,{enabled:s===`success`&&O!==null&&N!==null,staleTime:0,gcTime:0}),{mutation:ge,requestFunction:_e}=g(`DELETE`,`/friends/${W?.id??0}`,{onSuccess:()=>{W?.id===O&&_({}),W&&D(t,W.id),G(null),te(t)}});(0,j.useEffect)(()=>{if(k<0)return;let e={year:k,semester:A};O===null?(ce(e),ue(e)):(fe(e),me(e)),P(null),I(null)},[k,A,O]),(0,j.useEffect)(()=>{P(null),I(null),B(!1),R(!1)},[O]),(0,j.useEffect)(()=>{O!==null&&!J.isFetching&&J.isSuccess&&J.data&&!J.data.friends.some(({id:e})=>e===O)&&_({})},[J.data,J.isFetching,J.isSuccess,O,_]);let ve=O===null?se.data?.timetables??[]:X.isError?[]:X.data?.timetables??[],Z=N===null?O===null?le:pe:O===null?de:he,Q=Z.isError?[]:Z.data?.lectures??[],$=e=>{R(!1),_(e===null?{}:{friendId:String(e)})},ye=()=>{q(null),w(C.pathname+C.search,{replace:!0,state:null})};return s===`success`?l(Ee,{children:[l(De,{children:[!n&&c(ke,{children:c(Ye,{friends:J.data?.friends??[],selectedFriendId:O,onSelect:$,onDelete:G,onInvite:()=>U(!0)})}),l(Ae,{children:[l(Ue,{children:[l(We,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":L,onClick:()=>R(!0),children:[c(v,{size:18,children:c(oe,{})}),e(`friends.selectFriend`)]}),c(We,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":z,onClick:()=>B(!0),children:e(`friends.viewOverlaps`)})]}),l(Be,{direction:`row`,gap:8,align:`center`,justify:`space-between`,children:[c(x,{type:`NormalBold`,color:`Text.default`,children:Y?.name??e(`friends.myTimetable`)}),c(ne,{year:k,semester:A,setYear:re,setSemester:M,setCurrentTimetableId:P})]}),l(Ve,{children:[c(ie,{type:N===null?`selected`:`default`,onClick:()=>{P(null),I(null)},children:e(`friends.actualTimetable`)}),ve.map(e=>c(ie,{type:N===e.id?`selected`:`default`,onClick:()=>{P(e.id),I(null)},children:e.name},e.id))]}),Z.isError&&c(x,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.loadError`)}),c(He,{children:c(ae,{lectures:Q,needTimeFilter:!1,needLectureDeletable:!1,selectedLectures:F?[F]:[],onLectureSelect:e=>{I(e),n&&B(!0)}})})]}),!n&&c(je,{children:c(we,{lecture:F})})]}),c(b,{isOpen:n&&L,onClose:()=>R(!1),title:e(`friends.title`),fullScreen:!0,children:c(Ye,{friends:J.data?.friends??[],selectedFriendId:O,onSelect:$,onDelete:e=>{R(!1),G(e)},onInvite:()=>{R(!1),U(!0)}})}),c(b,{isOpen:n&&z,onClose:()=>B(!1),title:e(`friends.viewOverlaps`),fullScreen:!0,children:F?l(u,{children:[c(Ge,{ref:V,type:`button`,onClick:()=>I(null),children:e(`friends.chooseAnotherLecture`)}),c(we,{lecture:F})]}):l(f,{direction:`column`,gap:8,align:`stretch`,children:[c(x,{type:`Normal`,color:`Text.default`,children:e(`friends.chooseLecture`)}),Z.isPending?c(x,{role:`status`,children:e(`friends.loadingLectures`)}):Z.isError?c(x,{role:`alert`,children:e(`friends.loadError`)}):Q.length===0?c(x,{children:e(`friends.noLectures`)}):Q.map((e,t)=>l(Ge,{ref:t===0?V:void 0,type:`button`,onClick:()=>I(e),children:[e.name,e.subtitle,` `,e.classNo&&`(${e.classNo})`]},e.id))]})}),c(xe,{isOpen:H,onClose:()=>U(!1),userName:r?.name??``}),l(b,{isOpen:W!==null,onClose:()=>G(null),title:e(`friends.deleteTitle`),fullScreen:n,children:[c(x,{type:`Normal`,color:`Text.default`,children:e(`friends.deleteConfirm`,{name:W?.name})}),ge.isError&&c(x,{type:`Small`,color:`Highlight.default`,role:`alert`,children:e(`friends.updateError`)}),l(f,{direction:`row`,gap:8,justify:`flex-end`,children:[c(S,{onClick:()=>G(null),children:e(`friends.cancel`)}),c(S,{type:ge.isPending?`disabled`:`highlighted`,onClick:()=>_e({}),children:e(`friends.delete`)})]})]}),l(b,{isOpen:K!==null,onClose:ye,title:e(`friends.title`),fullScreen:n,children:[c(x,{type:`Normal`,color:`Text.default`,children:e(`friends.friendAdded`,{name:K})}),c(f,{direction:`row`,gap:0,justify:`flex-end`,children:c(S,{type:`highlighted`,onClick:ye,children:e(`friends.viewTimetable`)})})]})]}):c(qe,{direction:`column`,gap:16,align:`center`,justify:`center`,children:s===`idle`&&l(u,{children:[c(x,{type:`Big`,color:`Text.placeholder`,children:e(`friends.loginRequired`)}),c(ee,{})]})})});export{Xe as default,Te as meta};
//# sourceMappingURL=friends-DN2OvU_C.js.map