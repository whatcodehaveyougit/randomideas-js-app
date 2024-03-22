(()=>{var e={669:(e,t,n)=>{e.exports=n(609)},448:(e,t,n)=>{"use strict";var r=n(867),o=n(26),i=n(372),a=n(327),s=n(97),c=n(109),u=n(985),l=n(61),d=n(874),f=n(263);e.exports=function(e){return new Promise((function(t,n){var p,A=e.data,h=e.headers,m=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(A)&&delete h["Content-Type"];var v=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(y+":"+b)}var C=s(e.baseURL,e.url);function x(){if(v){var r="getAllResponseHeaders"in v?c(v.getAllResponseHeaders()):null,i={data:m&&"text"!==m&&"json"!==m?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:r,config:e,request:v};o((function(e){t(e),g()}),(function(e){n(e),g()}),i),v=null}}if(v.open(e.method.toUpperCase(),a(C,e.params,e.paramsSerializer),!0),v.timeout=e.timeout,"onloadend"in v?v.onloadend=x:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(x)},v.onabort=function(){v&&(n(l("Request aborted",e,"ECONNABORTED",v)),v=null)},v.onerror=function(){n(l("Network Error",e,null,v)),v=null},v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||d;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},r.isStandardBrowserEnv()){var w=(e.withCredentials||u(C))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;w&&(h[e.xsrfHeaderName]=w)}"setRequestHeader"in v&&r.forEach(h,(function(e,t){void 0===A&&"content-type"===t.toLowerCase()?delete h[t]:v.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),m&&"json"!==m&&(v.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){v&&(n(!e||e&&e.type?new f("canceled"):e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),A||(A=null),v.send(A)}))}},609:(e,t,n)=>{"use strict";var r=n(867),o=n(849),i=n(321),a=n(185),s=function e(t){var n=new i(t),s=o(i.prototype.request,n);return r.extend(s,i.prototype,n),r.extend(s,n),s.create=function(n){return e(a(t,n))},s}(n(546));s.Axios=i,s.Cancel=n(263),s.CancelToken=n(972),s.isCancel=n(502),s.VERSION=n(288).version,s.all=function(e){return Promise.all(e)},s.spread=n(713),s.isAxiosError=n(268),e.exports=s,e.exports.default=s},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,n)=>{"use strict";var r=n(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(867),o=n(327),i=n(782),a=n(572),s=n(185),c=n(875),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!o){var d=[a,void 0];for(Array.prototype.unshift.apply(d,r),d=d.concat(l),i=Promise.resolve(t);d.length;)i=i.then(d.shift(),d.shift());return i}for(var f=t;r.length;){var p=r.shift(),A=r.shift();try{f=p(f)}catch(e){A(e);break}}try{i=a(f)}catch(e){return Promise.reject(e)}for(;l.length;)i=i.then(l.shift(),l.shift());return i},l.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=l},782:(e,t,n)=>{"use strict";var r=n(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,n)=>{"use strict";var r=n(793),o=n(303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},61:(e,t,n)=>{"use strict";var r=n(481);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},572:(e,t,n)=>{"use strict";var r=n(867),o=n(527),i=n(502),a=n(546),s=n(263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function c(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,o=t(e);r.isUndefined(o)&&t!==c||(n[e]=o)})),n}},26:(e,t,n)=>{"use strict";var r=n(61);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},527:(e,t,n)=>{"use strict";var r=n(867),o=n(546);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},546:(e,t,n)=>{"use strict";var r=n(867),o=n(16),i=n(481),a=n(874),s={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,l={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(448)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){l.headers[e]=r.merge(s)})),e.exports=l},874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:e=>{e.exports={version:"0.26.1"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},327:(e,t,n)=>{"use strict";var r=n(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},985:(e,t,n)=>{"use strict";var r=n(867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},16:(e,t,n)=>{"use strict";var r=n(867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},109:(e,t,n)=>{"use strict";var r=n(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,n)=>{"use strict";var r=n(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},867:(e,t,n)=>{"use strict";var r=n(849),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function a(e){return void 0===e}function s(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:s,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&s(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:u,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return c(e)&&l(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)d(arguments[r],n);return t},extend:function(e,t,n){return d(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},315:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(537),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap);"]),a.push([e.id,'body{font-family:"Poppins",sans-serif;font-size:16px;font-weight:400;line-height:1.5;color:#333;background-color:#f4f4f4;overflow-x:hidden}header{padding:10px 0;text-align:center;margin-bottom:10px;position:relative}#modal-btn{border:none;background:none;color:green;cursor:pointer;position:absolute;top:10px;left:10px}.modal{display:none;position:fixed;z-index:1;left:0;top:0;height:100%;width:100%;overflow:auto;background-color:rgba(0,0,0,.5)}.modal-box{margin:10% auto;width:600px;background-color:#4682b4;color:#fff;padding:20px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.1);animation-name:modalopen;animation-duration:var(--modal-duration)}@keyframes modalopen{from{opacity:0}to{opacity:1}}form input,form textarea{width:95%;padding:10px;border:1px solid #ccc;border-radius:5px;margin:10px 0}form textarea{height:100px}form label{display:block;font-size:18px;font-weight:600;margin:5px 0}.btn{background-color:#333;color:#fff;border:none;padding:10px;border-radius:5px;cursor:pointer;font-size:inherit;margin-top:10px;width:100%}.btn:hover{background-color:#000}.container{max-width:1200px;margin:0 auto;padding:0 15px}.ideas{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))}.ideas .card{position:relative;background-color:#fff;margin:10px;padding:20px 15px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.1)}.tag{display:inline-block;background-color:#333;color:#fff;padding:5px 10px;border-radius:5px;margin:5px;font-size:14px}.tag-technology{background:#4682b4}.tag-software{background:coral}.tag-business{background:green}.tag-education{background:purple}.tag-health{background:red}.tag-inventions{background:orange}.delete{position:absolute;top:10px;right:10px;font-size:20px;cursor:pointer;color:red;background:none;border:none}.delete:hover{color:#000}.date{color:#999;font-size:14px}@media(max-width: 768px){.modal-box{width:90%}}',"",{version:3,sources:["webpack://./src/styles/style.scss"],names:[],mappings:"AAEA,KACE,gCAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CACA,UAAA,CACA,wBAAA,CACA,iBAAA,CAGF,OACE,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CAGF,WACE,WAAA,CACA,eAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CACA,QAAA,CACA,SAAA,CAGF,OACE,YAAA,CACA,cAAA,CACA,SAAA,CACA,MAAA,CACA,KAAA,CACA,WAAA,CACA,UAAA,CACA,aAAA,CACA,+BAAA,CAGF,WACE,eAAA,CACA,WAAA,CAEA,wBAAA,CACA,UAAA,CACA,YAAA,CACA,kBAAA,CACA,kCAAA,CACA,wBAAA,CACA,wCAAA,CAGF,qBACE,KACE,SAAA,CAEF,GACE,SAAA,CAAA,CAIJ,yBAEE,SAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,aAAA,CAGF,cACE,YAAA,CAGF,WACE,aAAA,CACA,cAAA,CACA,eAAA,CACA,YAAA,CAGF,KACE,qBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,UAAA,CAGF,WACE,qBAAA,CAGF,WACE,gBAAA,CACA,aAAA,CACA,cAAA,CAGF,OACE,YAAA,CACA,0DAAA,CAGF,aACE,iBAAA,CACA,qBAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,kCAAA,CAGF,KACE,oBAAA,CACA,qBAAA,CACA,UAAA,CACA,gBAAA,CACA,iBAAA,CACA,UAAA,CACA,cAAA,CAGF,gBACE,kBAAA,CAGF,cACE,gBAAA,CAGF,cACE,gBAAA,CAGF,eACE,iBAAA,CAGF,YACE,cAAA,CAGF,gBACE,iBAAA,CAGF,QACE,iBAAA,CACA,QAAA,CACA,UAAA,CACA,cAAA,CACA,cAAA,CACA,SAAA,CACA,eAAA,CACA,WAAA,CAGF,cACE,UAAA,CAGF,MACE,UAAA,CACA,cAAA,CAGF,yBACE,WACE,SAAA,CAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #333;\n  background-color: #f4f4f4;\n  overflow-x: hidden;\n}\n\nheader {\n  padding: 10px 0;\n  text-align: center;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n#modal-btn {\n  border: none;\n  background: none;\n  color: green;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-box {\n  margin: 10% auto;\n  width: 600px;\n\n  background-color: steelblue;\n  color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  animation-name: modalopen;\n  animation-duration: var(--modal-duration);\n}\n\n@keyframes modalopen {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\nform input,\nform textarea {\n  width: 95%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin: 10px 0;\n}\n\nform textarea {\n  height: 100px;\n}\n\nform label {\n  display: block;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 5px 0;\n}\n\n.btn {\n  background-color: #333;\n  color: #fff;\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: inherit;\n  margin-top: 10px;\n  width: 100%;\n}\n\n.btn:hover {\n  background-color: #000;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n}\n\n.ideas {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n\n.ideas .card {\n  position: relative;\n  background-color: #fff;\n  margin: 10px;\n  padding: 20px 15px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.tag {\n  display: inline-block;\n  background-color: #333;\n  color: #fff;\n  padding: 5px 10px;\n  border-radius: 5px;\n  margin: 5px;\n  font-size: 14px;\n}\n\n.tag-technology {\n  background: steelblue;\n}\n\n.tag-software {\n  background: coral;\n}\n\n.tag-business {\n  background: green;\n}\n\n.tag-education {\n  background: purple;\n}\n\n.tag-health {\n  background: red;\n}\n\n.tag-inventions {\n  background: orange;\n}\n\n.delete {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n  cursor: pointer;\n  color: red;\n  background: none;\n  border: none;\n}\n\n.delete:hover {\n  color: #000;\n}\n\n.date {\n  color: #999;\n  font-size: 14px;\n}\n\n@media (max-width: 768px) {\n  .modal-box {\n    width: 90%;\n  }\n}\n"],sourceRoot:""}]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([i]).join("\n")}return[t].join("\n")}},666:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),s=new O(r||[]);return o(a,"_invoke",{value:S(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",A="completed",h={};function m(){}function g(){}function v(){}var y={};u(y,a,(function(){return this}));var b=Object.getPrototypeOf,C=b&&b(b(j([])));C&&C!==n&&r.call(C,a)&&(y=C);var x=v.prototype=m.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,i,a,s){var c=d(e[o],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function S(e,n,r){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===A){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=k(s,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=A,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var u=d(e,n,r);if("normal"===u.type){if(o=r.done?A:"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=A,r.method="throw",r.arg=u.arg)}}}function k(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,h;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(null!=e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=v,o(x,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:g,configurable:!0}),g.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},w(E.prototype),u(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var A=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:A,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=r(e,o),u=0;u<i.length;u++){var l=n(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(666);var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),u=n(216),l=n.n(u),d=n(589),f=n.n(d),p=n(315),A={};A.styleTagTransform=f(),A.setAttributes=c(),A.insert=a().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=l(),t()(p.Z,A),p.Z&&p.Z.locals&&p.Z.locals;var h=n(669),m=n.n(h);const g=new class{constructor(){this._apiUrl="/api/ideas"}async getIdeas(){return m().get(this._apiUrl)}async createIdea(e){return m().post(this._apiUrl,e)}async updateIdea(e){return m().put("".concat(this._apiUrl,"/").concat(e.id),e)}deleteIdea(e){const t=localStorage.getItem("username")?localStorage.getItem("username"):"";return m().delete("".concat(this._apiUrl,"/").concat(e),{data:{username:t}})}},v=class{constructor(){this._ideaList=document.querySelector("#idea-list"),this._ideas=[],this.getIdeas(),this._validTags=new Set(["business","design","development","marketing"]),document.addEventListener("closemodal",this.getIdeas.bind(this)),this.addEventListeners()}addEventListeners(){this._ideaList.addEventListener("click",(e=>{e.target.classList.contains("fa-times")&&(e.stopImmediatePropagation(),this.deleteIdea(e))}))}async deleteIdea(e){const t=e.target.parentElement.parentElement.dataset.id;try{await g.deleteIdea(t),this._ideas=this._ideas.filter((e=>e._id!==t)),this.getIdeas()}catch(e){console.log(e)}}async getIdeas(){try{const e=await g.getIdeas();this._ideas=e.data.ideas,this.render()}catch(e){console.log(e)}}addIdeaToList(e){this._ideas.push(e),this.render()}getTagColor(e){e=e.toLowerCase();let t="";return t=this._validTags.has(e)?"tag-".concat(e):"",t}render(){this._ideaList.innerHTML=this._ideas.map((e=>{const t=this.getTagColor(e.tag),n=localStorage.getItem("username")===e.username,r=new Date(e.date).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"});return'<div class="card" data-id="'.concat(e._id,'">\n      ').concat(n?'<button class="delete"><i class="fas fa-times"></i></button>':"","\n      <h3>\n        ").concat(e.text,'\n      </h3>\n      <p class="tag  ').concat(t,'">').concat(e.tag,'</p>\n      <p>\n        Posted on <span class="date">').concat(r,'</span> by\n        <span class="author">').concat(e.username,"</span>\n      </p>\n    </div>")})).join("")}};document.getElementById("user-id").innerHTML=localStorage.getItem("username"),new class{constructor(){this._modal=document.querySelector("#modal"),this._modalBtn=document.querySelector("#modal-btn"),this.addEventListeners()}addEventListeners(){this._modalBtn.addEventListener("click",this.open.bind(this)),window.addEventListener("click",this.outsideClick.bind(this)),document.addEventListener("closemodal",this.close.bind(this))}open(){this._modal.style.display="block"}close(){this._modal.style.display="none"}outsideClick(e){e.target===this._modal&&this.close()}},(new class{constructor(){this._formModal=document.querySelector("#modal"),this._ideaList=new v,this._user=""}addEventListeners(){this._form.addEventListener("submit",this.handleSubmit.bind(this))}async handleSubmit(e){e.preventDefault();const t=""!==this._user?this._user:document.querySelector("#username").value;localStorage.setItem("username",t);const n={username:t,text:document.querySelector("#idea-text").value,tag:document.querySelector("#tag").value};this._form.reset(),document.dispatchEvent(new Event("closemodal"));const r=await g.createIdea(n);this._ideaList.addIdeaToList(r.data.newIdea)}render(){localStorage.getItem("username")?this._user=localStorage.getItem("username"):this._user="",this._formModal.innerHTML='<div id="form-modal" class="modal-box">\n      <form id="idea-form">\n        <div class="form-control">\n          <label for="idea-text">Enter a Username</label>\n          <input required type="text" name="username" id="username" value='.concat(this._user," ").concat(this._user&&"disabled=true",' ></input>\n        </div>\n        <div class="form-control">\n          <label for="idea-text">What\'s Your Idea?</label>\n          <textarea required name="text" id="idea-text"></textarea>\n        </div>\n        <div class="form-control">\n          <label for="tag">Tag</label>\n          <input required type="text" name="tag" id="tag" />\n        </div>\n        <button class="btn" type="submit" id="submit">Submit</button>\n      </form>\n    </div>'),this._form=document.querySelector("#idea-form"),this.addEventListeners()}}).render(),new v})()})();
//# sourceMappingURL=bundlef7d32c7cef47fb873bd9.js.map