
          window.__NEXT_REGISTER_PAGE('/register', function() {
            var comp = module.exports=webpackJsonp([6],{100:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},101:function(e,t,n){"use strict";var r=n(4);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},102:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},103:function(e,t,n){"use strict";var r=n(4);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},104:function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},105:function(e,t,n){"use strict";var r=n(4);e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+n:n)}),a):a}},106:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},118:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},29:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(4),a=n(104),s={"Content-Type":"application/x-www-form-urlencoded"},i={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(43):void 0!==t&&(e=n(43)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};i.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){i.headers[e]={}}),o.forEach(["post","put","patch"],function(e){i.headers[e]=o.merge(s)}),e.exports=i}).call(t,n(174))},362:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),s=n(650),i=r(s),u=function(){return a.default.createElement("div",null,a.default.createElement(i.default,null))};t.default=u},4:function(e,t,n){"use strict";function r(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function i(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===C.call(e)}function l(e){return"[object File]"===C.call(e)}function p(e){return"[object Blob]"===C.call(e)}function h(e){return"[object Function]"===C.call(e)}function m(e){return f(e)&&h(e.pipe)}function x(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function y(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=y(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function b(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?j(t,n):t}),e}var j=n(47),E=n(118),C=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:E,isFormData:a,isArrayBufferView:s,isString:i,isNumber:u,isObject:f,isUndefined:c,isDate:d,isFile:l,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:x,isStandardBrowserEnv:g,forEach:w,merge:y,extend:b,trim:v}},43:function(e,t,n){"use strict";var r=n(4),o=n(96),a=n(99),s=n(105),i=n(103),u=n(46),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(98);e.exports=function(e){return new Promise(function(t,f){var d=e.data,l=e.headers;r.isFormData(d)&&delete l["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||i(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var x=e.auth.username||"",v=e.auth.password||"";l.Authorization="Basic "+c(x+":"+v)}if(p.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,f,a),p=null}},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n(101),w=(e.withCredentials||i(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;w&&(l[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},44:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},45:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},46:function(e,t,n){"use strict";var r=n(95);e.exports=function(e,t,n,o,a){var s=new Error(e);return r(s,t,n,o,a)}},47:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},650:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),a=r(o),s=n(2),i=r(s),u=n(3),c=r(u),f=n(7),d=r(f),l=n(6),p=r(l),h=n(86),m=r(h),x=n(0),v=r(x),g=n(89),w=r(g),y=n(125),b=r(y),j=n(171),E=r(j),C=function(e){function t(){(0,i.default)(this,t);var e=(0,d.default)(this,(t.__proto__||(0,a.default)(t)).call(this));return e.state={},e}return(0,p.default)(t,e),(0,c.default)(t,[{key:"addUser",value:function(){var e=this.refs.username.value,t=this.refs.password.value;e&&w.default.post("/api/register",{username:e,password:t}).then(function(t){if("A user with the given username is already registered"===t.data.message)return alert(t.data.message);alert("Welcome to HCB "+e),b.default.push("/")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return v.default.createElement("div",{"data-jsx":764230844},v.default.createElement("div",{className:"container","data-jsx":764230844},v.default.createElement("div",{className:"vid-container","data-jsx":764230844},v.default.createElement("img",{className:"bgvid",src:"http://wallpapercave.com/wp/2GFdZrW.jpg","data-jsx":764230844}),v.default.createElement("div",{className:"inner-container","data-jsx":764230844},v.default.createElement("img",{src:"http://wallpapercave.com/wp/2GFdZrW.jpg",className:"bgvid inner","data-jsx":764230844}),v.default.createElement("div",{className:"box","data-jsx":764230844},v.default.createElement("h1",{"data-jsx":764230844},"Register Son!"),v.default.createElement("input",{type:"text",ref:"username",placeholder:"Username","data-jsx":764230844}),v.default.createElement("input",{type:"password",ref:"password",placeholder:"Password","data-jsx":764230844}),v.default.createElement("button",{type:"button",onClick:this.addUser.bind(this),"data-jsx":764230844},"Register"),v.default.createElement("p",{"data-jsx":764230844},"Are you member? ",v.default.createElement("span",{"data-jsx":764230844},v.default.createElement(E.default,{href:"/login"},v.default.createElement("a",{"data-jsx":764230844},"Log In")))))))),v.default.createElement(m.default,{styleId:764230844,css:'body[data-jsx="764230844"]{padding:0;margin:0}.vid-container[data-jsx="764230844"]{position:relative;height:100vh;overflow:hidden}.bgvid[data-jsx="764230844"]{position:absolute;left:0;top:0;width:100vw}.inner-container[data-jsx="764230844"]{width:400px;height:400px;position:absolute;top:calc(50vh - 200px);left:calc(50vw - 200px);overflow:hidden}.bgvid.inner[data-jsx="764230844"]{top:calc(-50vh + 200px);left:calc(-50vw + 200px);filter:url("data:image/svg+xml;utf9,<svg%20version=\'1.1\'%20xmlns=\'http://www.w3.org/2000/svg\'><filter%20id=\'blur\'><feGaussianBlur%20stdDeviation=\'10\'%20/></filter></svg>#blur");-webkit-filter:blur(10px);-ms-filter:blur(10px);-o-filter:blur(10px);filter:blur(10px)}.box[data-jsx="764230844"]{position:absolute;height:100%;width:100%;font-family:Helvetica;color:#fff;background:rgba(0,0,0,0.13);padding:30px 0px}.box[data-jsx="764230844"] h1[data-jsx="764230844"]{-webkit-text-align:center;text-align:center;margin:30px 0;font-size:30px}.box[data-jsx="764230844"] input[data-jsx="764230844"]{display:block;width:300px;margin:20px auto;padding:15px;background:rgba(0,0,0,0.2);color:#fff;border:0}.box[data-jsx="764230844"] input[data-jsx="764230844"]:focus,.box[data-jsx="764230844"] input[data-jsx="764230844"]:active,.box[data-jsx="764230844"] button[data-jsx="764230844"]:focus,.box[data-jsx="764230844"] button[data-jsx="764230844"]:active{outline:none}.box[data-jsx="764230844"] button[data-jsx="764230844"]{background:#2ecc71;border:0;color:#fff;padding:10px;font-size:20px;width:330px;margin:20px auto;display:block;cursor:pointer}.box[data-jsx="764230844"] button[data-jsx="764230844"]:active{background:#27ae60}.box[data-jsx="764230844"] p[data-jsx="764230844"]{font-size:14px;-webkit-text-align:center;text-align:center}.box[data-jsx="764230844"] p[data-jsx="764230844"] span[data-jsx="764230844"]{cursor:pointer;color:#666}'}))}}]),t}(x.Component);t.default=C},714:function(e,t,n){e.exports=n(362)},89:function(e,t,n){e.exports=n(90)},90:function(e,t,n){"use strict";function r(e){var t=new s(e),n=a(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(4),a=n(47),s=n(92),i=n(29),u=r(i);u.Axios=s,u.create=function(e){return r(o.merge(i,e))},u.Cancel=n(44),u.CancelToken=n(91),u.isCancel=n(45),u.all=function(e){return Promise.all(e)},u.spread=n(106),e.exports=u,e.exports.default=u},91:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(44);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},92:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(29),a=n(4),s=n(93),i=n(94),u=n(102),c=n(100);r.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},93:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(4);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},94:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(4),a=n(97),s=n(45),i=n(29);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},95:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},96:function(e,t,n){"use strict";var r=n(46);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},97:function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},98:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),s="",i=0,u=a;o.charAt(0|i)||(u="=",i%1);s+=u.charAt(63&t>>8-i%1*8)){if((n=o.charCodeAt(i+=.75))>255)throw new r;t=t<<8|n}return s}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},99:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(4);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),a=s.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}}},[714]);
            return { page: comp.default }
          })
        