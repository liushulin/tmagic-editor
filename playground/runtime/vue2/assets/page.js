import{d as defineComponent,i as inject,r as reactive,n as normalizeComponent,P as Plugin,A as App,g as getUrlParam}from"./vueComponentNormalizer.1897d859.js";import entry from"./comp-entry.8552b96d.js";const getLocalConfig=()=>{const configStr=localStorage.getItem("magicUiConfig");if(!configStr)return[];try{return[eval(`(${configStr})`)]}catch(r){return[]}};var axios$2={exports:{}},bind$2=function r(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},bind$1=bind$2,toString=Object.prototype.toString,kindOf=function(r){return function(e){var t=toString.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function kindOfTest(r){return r=r.toLowerCase(),function(t){return kindOf(t)===r}}function isArray(r){return Array.isArray(r)}function isUndefined(r){return typeof r=="undefined"}function isBuffer(r){return r!==null&&!isUndefined(r)&&r.constructor!==null&&!isUndefined(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var isArrayBuffer=kindOfTest("ArrayBuffer");function isArrayBufferView(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&isArrayBuffer(r.buffer),e}function isString(r){return typeof r=="string"}function isNumber(r){return typeof r=="number"}function isObject(r){return r!==null&&typeof r=="object"}function isPlainObject(r){if(kindOf(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var isDate=kindOfTest("Date"),isFile=kindOfTest("File"),isBlob=kindOfTest("Blob"),isFileList=kindOfTest("FileList");function isFunction(r){return toString.call(r)==="[object Function]"}function isStream(r){return isObject(r)&&isFunction(r.pipe)}function isFormData(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||toString.call(r)===e||isFunction(r.toString)&&r.toString()===e)}var isURLSearchParams=kindOfTest("URLSearchParams");function trim(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function isStandardBrowserEnv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function forEach(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),isArray(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function merge(){var r={};function e(n,s){isPlainObject(r[s])&&isPlainObject(n)?r[s]=merge(r[s],n):isPlainObject(n)?r[s]=merge({},n):isArray(n)?r[s]=n.slice():r[s]=n}for(var t=0,i=arguments.length;t<i;t++)forEach(arguments[t],e);return r}function extend(r,e,t){return forEach(e,function(n,s){t&&typeof n=="function"?r[s]=bind$1(n,t):r[s]=n}),r}function stripBOM(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function inherits(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function toFlatObject(r,e,t){var i,n,s,a={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)s=i[n],a[s]||(e[s]=r[s],a[s]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function endsWith(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function toArray(r){if(!r)return null;var e=r.length;if(isUndefined(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var isTypedArray=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),utils$h={isArray,isArrayBuffer,isBuffer,isFormData,isArrayBufferView,isString,isNumber,isObject,isPlainObject,isUndefined,isDate,isFile,isBlob,isFunction,isStream,isURLSearchParams,isStandardBrowserEnv,forEach,merge,extend,trim,stripBOM,inherits,toFlatObject,kindOf,kindOfTest,endsWith,toArray,isTypedArray,isFileList},utils$g=utils$h;function encode(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var buildURL$2=function r(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(utils$g.isURLSearchParams(t))n=t.toString();else{var s=[];utils$g.forEach(t,function(l,c){l===null||typeof l=="undefined"||(utils$g.isArray(l)?c=c+"[]":l=[l],utils$g.forEach(l,function(f){utils$g.isDate(f)?f=f.toISOString():utils$g.isObject(f)&&(f=JSON.stringify(f)),s.push(encode(c)+"="+encode(f))}))}),n=s.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},utils$f=utils$h;function InterceptorManager$1(){this.handlers=[]}InterceptorManager$1.prototype.use=function r(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};InterceptorManager$1.prototype.eject=function r(e){this.handlers[e]&&(this.handlers[e]=null)};InterceptorManager$1.prototype.forEach=function r(e){utils$f.forEach(this.handlers,function(i){i!==null&&e(i)})};var InterceptorManager_1=InterceptorManager$1,utils$e=utils$h,normalizeHeaderName$1=function r(e,t){utils$e.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},utils$d=utils$h;function AxiosError$5(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}utils$d.inherits(AxiosError$5,Error,{toJSON:function r(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var prototype=AxiosError$5.prototype,descriptors={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){descriptors[r]={value:r}});Object.defineProperties(AxiosError$5,descriptors);Object.defineProperty(prototype,"isAxiosError",{value:!0});AxiosError$5.from=function(r,e,t,i,n,s){var a=Object.create(prototype);return utils$d.toFlatObject(r,a,function(l){return l!==Error.prototype}),AxiosError$5.call(a,r.message,e,t,i,n),a.name=r.name,s&&Object.assign(a,s),a};var AxiosError_1=AxiosError$5,transitional={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},utils$c=utils$h;function toFormData$1(r,e){e=e||new FormData;var t=[];function i(s){return s===null?"":utils$c.isDate(s)?s.toISOString():utils$c.isArrayBuffer(s)||utils$c.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(utils$c.isPlainObject(s)||utils$c.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);t.push(s),utils$c.forEach(s,function(l,c){if(!utils$c.isUndefined(l)){var o=a?a+"."+c:c,f;if(l&&!a&&typeof l=="object"){if(utils$c.endsWith(c,"{}"))l=JSON.stringify(l);else if(utils$c.endsWith(c,"[]")&&(f=utils$c.toArray(l))){f.forEach(function(p){!utils$c.isUndefined(p)&&e.append(o,i(p))});return}}n(l,o)}}),t.pop()}else e.append(a,i(s))}return n(r),e}var toFormData_1=toFormData$1,AxiosError$4=AxiosError_1,settle$1=function r(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new AxiosError$4("Request failed with status code "+i.status,[AxiosError$4.ERR_BAD_REQUEST,AxiosError$4.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},utils$b=utils$h,cookies$1=utils$b.isStandardBrowserEnv()?function r(){return{write:function(t,i,n,s,a,u){var l=[];l.push(t+"="+encodeURIComponent(i)),utils$b.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),utils$b.isString(s)&&l.push("path="+s),utils$b.isString(a)&&l.push("domain="+a),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function r(){return{write:function(){},read:function(){return null},remove:function(){}}}(),isAbsoluteURL$1=function r(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},combineURLs$1=function r(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},isAbsoluteURL=isAbsoluteURL$1,combineURLs=combineURLs$1,buildFullPath$2=function r(e,t){return e&&!isAbsoluteURL(t)?combineURLs(e,t):t},utils$a=utils$h,ignoreDuplicateOf=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],parseHeaders$1=function r(e){var t={},i,n,s;return e&&utils$a.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),i=utils$a.trim(u.substr(0,s)).toLowerCase(),n=utils$a.trim(u.substr(s+1)),i){if(t[i]&&ignoreDuplicateOf.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},utils$9=utils$h,isURLSameOrigin$1=utils$9.isStandardBrowserEnv()?function r(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(s){var a=s;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(a){var u=utils$9.isString(a)?n(a):a;return u.protocol===i.protocol&&u.host===i.host}}():function r(){return function(){return!0}}(),AxiosError$3=AxiosError_1,utils$8=utils$h;function CanceledError$3(r){AxiosError$3.call(this,r==null?"canceled":r,AxiosError$3.ERR_CANCELED),this.name="CanceledError"}utils$8.inherits(CanceledError$3,AxiosError$3,{__CANCEL__:!0});var CanceledError_1=CanceledError$3,parseProtocol$1=function r(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},utils$7=utils$h,settle=settle$1,cookies=cookies$1,buildURL$1=buildURL$2,buildFullPath$1=buildFullPath$2,parseHeaders=parseHeaders$1,isURLSameOrigin=isURLSameOrigin$1,transitionalDefaults$1=transitional,AxiosError$2=AxiosError_1,CanceledError$2=CanceledError_1,parseProtocol=parseProtocol$1,xhr=function r(e){return new Promise(function(i,n){var s=e.data,a=e.headers,u=e.responseType,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}utils$7.isFormData(s)&&utils$7.isStandardBrowserEnv()&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(f+":"+p)}var d=buildFullPath$1(e.baseURL,e.url);o.open(e.method.toUpperCase(),buildURL$1(d,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function A(){if(!!o){var h="getAllResponseHeaders"in o?parseHeaders(o.getAllResponseHeaders()):null,$=!u||u==="text"||u==="json"?o.responseText:o.response,m={data:$,status:o.status,statusText:o.statusText,headers:h,config:e,request:o};settle(function(E){i(E),c()},function(E){n(E),c()},m),o=null}}if("onloadend"in o?o.onloadend=A:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(A)},o.onabort=function(){!o||(n(new AxiosError$2("Request aborted",AxiosError$2.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new AxiosError$2("Network Error",AxiosError$2.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var $=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",m=e.transitional||transitionalDefaults$1;e.timeoutErrorMessage&&($=e.timeoutErrorMessage),n(new AxiosError$2($,m.clarifyTimeoutError?AxiosError$2.ETIMEDOUT:AxiosError$2.ECONNABORTED,e,o)),o=null},utils$7.isStandardBrowserEnv()){var y=(e.withCredentials||isURLSameOrigin(d))&&e.xsrfCookieName?cookies.read(e.xsrfCookieName):void 0;y&&(a[e.xsrfHeaderName]=y)}"setRequestHeader"in o&&utils$7.forEach(a,function($,m){typeof s=="undefined"&&m.toLowerCase()==="content-type"?delete a[m]:o.setRequestHeader(m,$)}),utils$7.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(h){!o||(n(!h||h&&h.type?new CanceledError$2:h),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null);var v=parseProtocol(d);if(v&&["http","https","file"].indexOf(v)===-1){n(new AxiosError$2("Unsupported protocol "+v+":",AxiosError$2.ERR_BAD_REQUEST,e));return}o.send(s)})},_null=null,utils$6=utils$h,normalizeHeaderName=normalizeHeaderName$1,AxiosError$1=AxiosError_1,transitionalDefaults=transitional,toFormData=toFormData_1,DEFAULT_CONTENT_TYPE={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(r,e){!utils$6.isUndefined(r)&&utils$6.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function getDefaultAdapter(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=xhr),r}function stringifySafely(r,e,t){if(utils$6.isString(r))try{return(e||JSON.parse)(r),utils$6.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var defaults$3={transitional:transitionalDefaults,adapter:getDefaultAdapter(),transformRequest:[function r(e,t){if(normalizeHeaderName(t,"Accept"),normalizeHeaderName(t,"Content-Type"),utils$6.isFormData(e)||utils$6.isArrayBuffer(e)||utils$6.isBuffer(e)||utils$6.isStream(e)||utils$6.isFile(e)||utils$6.isBlob(e))return e;if(utils$6.isArrayBufferView(e))return e.buffer;if(utils$6.isURLSearchParams(e))return setContentTypeIfUnset(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=utils$6.isObject(e),n=t&&t["Content-Type"],s;if((s=utils$6.isFileList(e))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return toFormData(s?{"files[]":e}:e,a&&new a)}else if(i||n==="application/json")return setContentTypeIfUnset(t,"application/json"),stringifySafely(e);return e}],transformResponse:[function r(e){var t=this.transitional||defaults$3.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&utils$6.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?AxiosError$1.from(a,AxiosError$1.ERR_BAD_RESPONSE,this,null,this.response):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_null},validateStatus:function r(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};utils$6.forEach(["delete","get","head"],function r(e){defaults$3.headers[e]={}});utils$6.forEach(["post","put","patch"],function r(e){defaults$3.headers[e]=utils$6.merge(DEFAULT_CONTENT_TYPE)});var defaults_1=defaults$3,utils$5=utils$h,defaults$2=defaults_1,transformData$1=function r(e,t,i){var n=this||defaults$2;return utils$5.forEach(i,function(a){e=a.call(n,e,t)}),e},isCancel$1=function r(e){return!!(e&&e.__CANCEL__)},utils$4=utils$h,transformData=transformData$1,isCancel=isCancel$1,defaults$1=defaults_1,CanceledError$1=CanceledError_1;function throwIfCancellationRequested(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new CanceledError$1}var dispatchRequest$1=function r(e){throwIfCancellationRequested(e),e.headers=e.headers||{},e.data=transformData.call(e,e.data,e.headers,e.transformRequest),e.headers=utils$4.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),utils$4.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||defaults$1.adapter;return t(e).then(function(n){return throwIfCancellationRequested(e),n.data=transformData.call(e,n.data,n.headers,e.transformResponse),n},function(n){return isCancel(n)||(throwIfCancellationRequested(e),n&&n.response&&(n.response.data=transformData.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},utils$3=utils$h,mergeConfig$2=function r(e,t){t=t||{};var i={};function n(o,f){return utils$3.isPlainObject(o)&&utils$3.isPlainObject(f)?utils$3.merge(o,f):utils$3.isPlainObject(f)?utils$3.merge({},f):utils$3.isArray(f)?f.slice():f}function s(o){if(utils$3.isUndefined(t[o])){if(!utils$3.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function a(o){if(!utils$3.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(utils$3.isUndefined(t[o])){if(!utils$3.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function l(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var c={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return utils$3.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var p=c[f]||s,d=p(f);utils$3.isUndefined(d)&&p!==l||(i[f]=d)}),i},data={version:"0.27.2"},VERSION=data.version,AxiosError=AxiosError_1,validators$1={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){validators$1[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var deprecatedWarnings={};validators$1.transitional=function r(e,t,i){function n(s,a){return"[Axios v"+VERSION+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,u){if(e===!1)throw new AxiosError(n(a," has been removed"+(t?" in "+t:"")),AxiosError.ERR_DEPRECATED);return t&&!deprecatedWarnings[a]&&(deprecatedWarnings[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,u):!0}};function assertOptions(r,e,t){if(typeof r!="object")throw new AxiosError("options must be an object",AxiosError.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var s=i[n],a=e[s];if(a){var u=r[s],l=u===void 0||a(u,s,r);if(l!==!0)throw new AxiosError("option "+s+" must be "+l,AxiosError.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new AxiosError("Unknown option "+s,AxiosError.ERR_BAD_OPTION)}}var validator$1={assertOptions,validators:validators$1},utils$2=utils$h,buildURL=buildURL$2,InterceptorManager=InterceptorManager_1,dispatchRequest=dispatchRequest$1,mergeConfig$1=mergeConfig$2,buildFullPath=buildFullPath$2,validator=validator$1,validators=validator.validators;function Axios$1(r){this.defaults=r,this.interceptors={request:new InterceptorManager,response:new InterceptorManager}}Axios$1.prototype.request=function r(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=mergeConfig$1(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&validator.assertOptions(i,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(s=s&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var a=[];this.interceptors.response.forEach(function(d){a.push(d.fulfilled,d.rejected)});var u;if(!s){var l=[dispatchRequest,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(a),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var c=t;n.length;){var o=n.shift(),f=n.shift();try{c=o(c)}catch(p){f(p);break}}try{u=dispatchRequest(c)}catch(p){return Promise.reject(p)}for(;a.length;)u=u.then(a.shift(),a.shift());return u};Axios$1.prototype.getUri=function r(e){e=mergeConfig$1(this.defaults,e);var t=buildFullPath(e.baseURL,e.url);return buildURL(t,e.params,e.paramsSerializer)};utils$2.forEach(["delete","get","head","options"],function r(e){Axios$1.prototype[e]=function(t,i){return this.request(mergeConfig$1(i||{},{method:e,url:t,data:(i||{}).data}))}});utils$2.forEach(["post","put","patch"],function r(e){function t(i){return function(s,a,u){return this.request(mergeConfig$1(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Axios$1.prototype[e]=t(),Axios$1.prototype[e+"Form"]=t(!0)});var Axios_1=Axios$1,CanceledError=CanceledError_1;function CancelToken(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,s=new Promise(function(a){t.subscribe(a),n=a}).then(i);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new CanceledError(n),e(t.reason))})}CancelToken.prototype.throwIfRequested=function r(){if(this.reason)throw this.reason};CancelToken.prototype.subscribe=function r(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};CancelToken.prototype.unsubscribe=function r(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};CancelToken.source=function r(){var e,t=new CancelToken(function(n){e=n});return{token:t,cancel:e}};var CancelToken_1=CancelToken,spread=function r(e){return function(i){return e.apply(null,i)}},utils$1=utils$h,isAxiosError=function r(e){return utils$1.isObject(e)&&e.isAxiosError===!0},utils=utils$h,bind=bind$2,Axios=Axios_1,mergeConfig=mergeConfig$2,defaults=defaults_1;function createInstance(r){var e=new Axios(r),t=bind(Axios.prototype.request,e);return utils.extend(t,Axios.prototype,e),utils.extend(t,e),t.create=function(n){return createInstance(mergeConfig(r,n))},t}var axios$1=createInstance(defaults);axios$1.Axios=Axios;axios$1.CanceledError=CanceledError_1;axios$1.CancelToken=CancelToken_1;axios$1.isCancel=isCancel$1;axios$1.VERSION=data.version;axios$1.toFormData=toFormData_1;axios$1.AxiosError=AxiosError_1;axios$1.Cancel=axios$1.CanceledError;axios$1.all=function r(e){return Promise.all(e)};axios$1.spread=spread;axios$1.isAxiosError=isAxiosError;axios$2.exports=axios$1;axios$2.exports.default=axios$1;var axios=axios$2.exports;const service=axios.create({withCredentials:!0,timeout:7e3}),requestHandler=function(r){return r},responseHandler=function(r){return r};service.interceptors.request.use(requestHandler);service.interceptors.response.use(responseHandler);var request={install(r){r.prototype.request=service}},__vue2_script=defineComponent({name:"App",setup(){var t;const r=inject("app");return{pageConfig:reactive(((t=r==null?void 0:r.page)==null?void 0:t.data)||{})}}}),render=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("magic-ui-page",{attrs:{config:r.pageConfig}})},staticRenderFns=[],App_vue_vue_type_style_index_0_lang=(()=>`html,body,#app{width:100%;height:100%}#app{position:relative;overflow:auto}#app::-webkit-scrollbar{width:0!important;display:none}
`)();const __cssModules={};var __component__=normalizeComponent(__vue2_script,render,staticRenderFns,!1,__vue2_injectStyles,null,null,null);function __vue2_injectStyles(r){for(let e in __cssModules)this[e]=__cssModules[e]}var AppComponent=function(){return __component__.exports}();Vue.use(Plugin);Vue.use(request);const app=new App({config:((getUrlParam("localPreview")?getLocalConfig():window.magicDSL)||[])[0]||{},curPage:getUrlParam("page")});Object.keys(entry.components).forEach(r=>{const e=entry.components[r];Vue.component(e.name,e),app.registerComponent(r,e)});Object.values(entry.plugins).forEach(r=>{Vue.use(r)});Vue.prototype.app=app;const magicApp=new Vue({provide:{app},render:r=>r(AppComponent)});magicApp.$mount("#app");
//# sourceMappingURL=page.js.map
