(function e(t,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r();else if(typeof define==="function"&&define.amd)define([],r);else{var o=r();for(var n in o)(typeof exports==="object"?exports:t)[n]=o[n]}})(window,function(){return function(r){var o={};function n(e){if(o[e]){return o[e].exports}var t=o[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,n);t.l=true;return t.exports}n.m=r;n.c=o;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(t,e){if(e&1)t=n(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r};n.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};n.d(e,"a",e);return e};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="/";return n(n.s="./src/helpers/index.ts")}({"./node_modules/webpack/buildin/module.js":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){e.deprecate=function(){};e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});e.webpackPolyfill=1}return e}},"./src/helpers/CacheHandler.ts":function(e,o,t){"use strict";(function(t){(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};Object.defineProperty(o,"__esModule",{value:true});o.CacheHandler=void 0;var r=function(){function e(e){var t,r,o;this._json=e;this.stringify=((t=this===null||this===void 0?void 0:this._json)===null||t===void 0?void 0:t.stringify)?this._json.stringify:JSON.stringify;this.parse=((r=this===null||this===void 0?void 0:this._json)===null||r===void 0?void 0:r.parse)?(o=this._json)===null||o===void 0?void 0:o.parse:JSON.parse}e.prototype.setCache=function(e,t,r){var o=r.type;var n=new Date;var i=n.toISOString();var a=this.setRefreshDate(n);var l={value:t,expireDate:a,requestedAt:i};if(o==="local")localStorage.setItem(e,this.stringify(l));else sessionStorage.setItem(e,this.stringify(l))};e.prototype.getCache=function(e,t){var r=t.type;var o;if(r==="local")o=localStorage.getItem(e);else o=sessionStorage.getItem(e);var n=this.parseCache(o);if((n===null||n===void 0?void 0:n.value)&&(n===null||n===void 0?void 0:n.expireDate)&&(n===null||n===void 0?void 0:n.requestedAt))return{value:n===null||n===void 0?void 0:n.value,expireDate:n===null||n===void 0?void 0:n.expireDate,requestedAt:n===null||n===void 0?void 0:n.requestedAt};return null};e.prototype.parseCache=function(e){try{var t=this.parse(e);var r=t.value,o=t.expireDate,n=t.requestedAt;return{value:r,expireDate:o,requestedAt:n}}catch(e){return{value:null,expireDate:null,requestedAt:null}}};e.prototype.removeCacheKey=function(e){localStorage.removeItem(e)};e.prototype.setRefreshDate=function(e,t){if(t===void 0){t=36}var r=e;r.setHours(r.getHours()+t);return r.toISOString()};return e}();o.CacheHandler=r;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(r,"CacheHandler","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\CacheHandler.ts")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,t("./node_modules/webpack/buildin/module.js")(e))},"./src/helpers/ConverterOptions.ts":function(e,o,t){"use strict";(function(t){(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};Object.defineProperty(o,"__esModule",{value:true});o.ConvertionOptions=void 0;var r=function(){function e(e,t,r,o){this.blob=e;this.byteArrays=t;this.mimeType=r;this.mimeUtils=o}e.prototype.getBlob=function(){return this.blob};e.prototype.getByteAraray=function(){return this.byteArrays};e.prototype.getMimeType=function(){return this.mimeUtils.contentType(this.mimeType)||this.mimeType};return e}();o.ConvertionOptions=r;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(r,"ConvertionOptions","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\ConverterOptions.ts")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,t("./node_modules/webpack/buildin/module.js")(e))},"./src/helpers/FileUtils.ts":function(e,n,i){"use strict";(function(t){(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};var r=this&&this.__awaiter||function(e,a,r,l){function u(t){return t instanceof r?t:new r(function(e){e(t)})}return new(r||(r=Promise))(function(t,r){function o(e){try{i(l.next(e))}catch(e){r(e)}}function n(e){try{i(l["throw"](e))}catch(e){r(e)}}function i(e){e.done?t(e.value):u(e.value).then(o,n)}i((l=l.apply(e,a||[])).next())})};var l=this&&this.__generator||function(e,r){var o={label:0,sent:function e(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,t;return t={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(t[Symbol.iterator]=function(){return this}),t;function l(t){return function(e){return u([t,e])}}function u(t){if(n)throw new TypeError("Generator is already executing.");while(o){try{if(n=1,i&&(a=t[0]&2?i["return"]:t[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,t[1])).done)return a;if(i=0,a)t=[t[0]&2,a.value];switch(t[0]){case 0:case 1:a=t;break;case 4:o.label++;return{value:t[1],done:false};case 5:o.label++;i=t[1];t=[0];continue;case 7:t=o.ops.pop();o.trys.pop();continue;default:if(!(a=o.trys,a=a.length>0&&a[a.length-1])&&(t[0]===6||t[0]===2)){o=0;continue}if(t[0]===3&&(!a||t[1]>a[0]&&t[1]<a[3])){o.label=t[1];break}if(t[0]===6&&o.label<a[1]){o.label=a[1];a=t;break}if(a&&o.label<a[2]){o.label=a[2];o.ops.push(t);break}if(a[2])o.ops.pop();o.trys.pop();continue}t=r.call(e,o)}catch(e){t=[6,e];i=0}finally{n=a=0}}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:true}}};Object.defineProperty(n,"__esModule",{value:true});n.FileUtils=void 0;var v=i("./src/helpers/ConverterOptions.ts");var o=function(){function e(e){this.mime=e;this.blobToBase64=function(e){var o=new FileReader;o.readAsDataURL(e);return new Promise(function(r){o.onloadend=function(){var e=o.result;var t=/^data:.+;base64,/;r(e.replace(t,""))}})}}e.prototype.urlToFile=function(n,i,a){if(a===void 0){a=null}return r(this,void 0,void 0,function(){var t,r,o;return l(this,function(e){switch(e.label){case 0:e.trys.push([0,2,,3]);return[4,fetch(n,a).then(function(e){return e.blob()})];case 1:t=e.sent();r=new File([t],i.fileName,{type:(i===null||i===void 0?void 0:i.fileMime)||this.checkIfHasMime(i===null||i===void 0?void 0:i.fileName),lastModified:(i===null||i===void 0?void 0:i.lastModified)||(new Date).getTime()});return[2,r];case 2:o=e.sent();console.error(o===null||o===void 0?void 0:o.message);return[2,null];case 3:return[2]}})})};e.prototype.downloadXml=function(e,t){if(e){var r=document.createElement("a");var o=t||"undefinedName.xml";o=this.fileNameValidator(o,".xml");var n=new Blob([e],{type:"application/octet-stream"});var i=URL.createObjectURL(n);r.setAttribute("href",i);r.setAttribute("download",o);r.dataset.downloadurl=["text/plain",r.download,r.href].join(":");r.draggable=true;r.classList.add("dragout");r.click();setTimeout(function(){window.URL.revokeObjectURL(i);r===null||r===void 0?void 0:r.remove()},200)}};e.prototype.fileNameValidator=function(e,t){if(!t.startsWith("."))t="."+t;if(e){if(!e.endsWith(t))return e+t;return e}};e.prototype.checkIfHasMime=function(e){var t;if(!e)return null;var r=((t=this===null||this===void 0?void 0:this.mime)===null||t===void 0?void 0:t.contentType(e))||"application/octet-stream";return r};e.prototype.converBase64To=function(e,t){var r;var o=this.checkIfHasMime(t);var n=512;var i=atob(e);var a=[];for(var l=0;l<i.length;l+=n){var u=i.slice(l,l+n);var d=new Array(u.length);for(var s=0;s<u.length;s++){d[s]=u.charCodeAt(s)}var c=new Uint8Array(d);a.push(c)}var f=o?new Blob(a,{type:o}):new Blob(a);return new v.ConvertionOptions(f,a,o,(r=this===null||this===void 0?void 0:this.mime)!==null&&r!==void 0?r:undefined)};return e}();n.FileUtils=o;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(r,"__awaiter","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\FileUtils.ts");e.register(l,"__generator","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\FileUtils.ts");e.register(o,"FileUtils","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\FileUtils.ts")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,i("./node_modules/webpack/buildin/module.js")(e))},"./src/helpers/WebpartAddons.ts":function(e,o,t){"use strict";(function(t){(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();function n(e){"@babel/helpers - typeof";return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};Object.defineProperty(o,"__esModule",{value:true});o.WebpartAddons=void 0;var r=function(){function e(){}e.prototype.changeElementProperty=function(r,e){if(r===null||r===void 0?void 0:r.style){e===null||e===void 0?void 0:e.forEach(function(e,t){r.style[t]=e})}};e.prototype.changeNodeProperty=function(e,t,r){var o,n;try{var i=null;if((e===null||e===void 0?void 0:e.length)>1){if((n=(o=e[0])===null||o===void 0?void 0:o.className)===null||n===void 0?void 0:n.includes("ControlZone-control"))i=e[0];else i=e[1]}else i=e[0];var a=this.targetCondition(t,i);return a?a:this.changeNodeRecursive(i,t,r)}catch(e){console.error("Erro ao atualizar o tamannho das divs");return false}};e.prototype.changeNodeRecursive=function(e,t,r){var o;if(!(e===null||e===void 0?void 0:e.children))return this.changeNodeProperty((o=e===null||e===void 0?void 0:e.nextElementSibling)===null||o===void 0?void 0:o.children,t,r);else{this.changeElementProperty(e,r);return this.changeNodeProperty(e===null||e===void 0?void 0:e.children,t,r)}};e.prototype.targetCondition=function(e,t){var r;if(typeof e==="string")return(r=t===null||t===void 0?void 0:t.className)===null||r===void 0?void 0:r.startsWith(e);else if(n(e)==="object"){var o=t===null||t===void 0?void 0:t.isEqualNode(e);return o}return false};e.registerLiveReload=function(e,t,r){var o=e["loaderConfig"]["internalModuleBaseUrls"][0];if((o===null||o===void 0?void 0:o.indexOf(t||"https://localhost:4321"))!==-1){var n=document.createElement("script");n.src=r||"//localhost:35729/livereload.js?snipver=1";document.head.appendChild(n)}};return e}();o.WebpartAddons=r;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(r,"WebpartAddons","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\helpers\\WebpartAddons.ts")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,t("./node_modules/webpack/buildin/module.js")(e))},"./src/helpers/index.ts":function(e,t,r){"use strict";var o=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};Object.defineProperty(t,"__esModule",{value:true});t.ConvertionOptions=t.WebpartAddons=t.FileUtils=t.CacheHandler=void 0;var n=r("./src/helpers/CacheHandler.ts");Object.defineProperty(t,"CacheHandler",{enumerable:true,get:function e(){return n.CacheHandler}});var i=r("./src/helpers/FileUtils.ts");Object.defineProperty(t,"FileUtils",{enumerable:true,get:function e(){return i.FileUtils}});var a=r("./src/helpers/WebpartAddons.ts");Object.defineProperty(t,"WebpartAddons",{enumerable:true,get:function e(){return a.WebpartAddons}});var l=r("./src/helpers/ConverterOptions.ts");Object.defineProperty(t,"ConvertionOptions",{enumerable:true,get:function e(){return l.ConvertionOptions}})}})});
//# sourceMappingURL=index.js.map