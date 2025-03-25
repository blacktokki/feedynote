(()=>{"use strict";var e={5776:(e,t,r)=>{var n=r(8752),o=r(4657),a=r(9399),i=r(863),l=r(9978),u=r(9420),c=r(575);i.default.create({container:{flex:1,borderWidth:1,borderColor:"#4444",alignItems:"center",justifyContent:"center"}});!function(e){if(void 0!==e&&"/"===e.search[1]){var t=e.search.slice(1).split("&").map((function(e){return e.replace(/~and~/g,"&")})).join("?");window.history.replaceState(null,"",e.pathname.slice(0,-1)+t+e.hash)}e.pathname.length>=20&&0===e.pathname.substring(20).replaceAll("/","").length&&window.history.replaceState(null,"",e.pathname.substring(0,20)+"/home")}(window.location),(0,n.default)((function(){var e=a.lazy((function(){return r.e(594).then(r.bind(r,8594)).then((function(e){return{default:e.AuthProvider}}))})),t=a.lazy((function(){return r.e(111).then(r.bind(r,8111)).then((function(e){var t=e.QueryClient,r=e.QueryClientProvider,n=new t;return{default:function(e){return(0,c.jsx)(r,{client:n,children:e.children})}}}))})),n=a.lazy((function(){return Promise.all([r.e(594),r.e(111),r.e(435),r.e(66)]).then(r.bind(r,8066))}));return(0,o.useInitColorScheme)()?(0,c.jsxs)(u.SafeAreaProvider,{children:[(0,c.jsx)(l.default,{style:"auto"}),(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(e,{children:(0,c.jsx)(t,{children:(0,c.jsx)(n,{})})})})]}):(0,c.jsx)(c.Fragment,{})}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],l=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,r.d(a,i),a}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+"."+{66:"f387dc89",111:"534ee3fd",435:"47e96390",594:"ea9ff9ca",928:"5d2db063",973:"6a1d7788"}[e]+".chunk.js",r.miniCssF=e=>{},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="web:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var l,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var s=c[d];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+a){l=s;break}}l||(u=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var f=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/blacktokki-notebook/",(()=>{var e={792:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error;r.l(i,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}}),"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,u]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var d=u(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[690],(()=>r(5776)));n=r.O(n)})();
//# sourceMappingURL=main.63acbf4d.js.map