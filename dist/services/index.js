(function e(t,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r();else if(typeof define==="function"&&define.amd)define([],r);else{var n=r();for(var i in n)(typeof exports==="object"?exports:t)[i]=n[i]}})(window,function(){return function(r){var n={};function i(e){if(n[e]){return n[e].exports}var t=n[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,i);t.l=true;return t.exports}i.m=r;i.c=n;i.d=function(e,t,r){if(!i.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};i.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};i.t=function(t,e){if(e&1)t=i(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);i.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r};i.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};i.d(e,"a",e);return e};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="/";return i(i.s="./src/services/index.ts")}({"./node_modules/webpack/buildin/module.js":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){e.deprecate=function(){};e.paths=[];if(!e.children)e.children=[];Object.defineProperty(e,"loaded",{enumerable:true,get:function(){return e.l}});Object.defineProperty(e,"id",{enumerable:true,get:function(){return e.i}});e.webpackPolyfill=1}return e}},"./src/services sync recursive":function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");t.code="MODULE_NOT_FOUND";throw t}r.keys=function(){return[]};r.resolve=r;e.exports=r;r.id="./src/services sync recursive"},"./src/services/BaseService.ts":function(e,s,d){"use strict";(function(t){(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.enterModule:undefined;e&&e(t)})();function u(e){"@babel/helpers - typeof";return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};var l=this&&this.__assign||function(){l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t){if(Object.prototype.hasOwnProperty.call(t,i))e[i]=t[i]}}return e};return l.apply(this,arguments)};var r=this&&this.__decorate||function(e,t,r,n){var i=arguments.length,o=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if((typeof Reflect==="undefined"?"undefined":u(Reflect))==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--){if(s=e[a])o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o}return i>3&&o&&Object.defineProperty(t,r,o),o};var n=this&&this.__metadata||function(e,t){if((typeof Reflect==="undefined"?"undefined":u(Reflect))==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(e,t)};var m=this&&this.__awaiter||function(e,s,r,a){function u(t){return t instanceof r?t:new r(function(e){e(t)})}return new(r||(r=Promise))(function(t,r){function n(e){try{o(a.next(e))}catch(e){r(e)}}function i(e){try{o(a["throw"](e))}catch(e){r(e)}}function o(e){e.done?t(e.value):u(e.value).then(n,i)}o((a=a.apply(e,s||[])).next())})};var b=this&&this.__generator||function(e,r){var n={label:0,sent:function e(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,o,s,t;return t={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(t[Symbol.iterator]=function(){return this}),t;function a(t){return function(e){return u([t,e])}}function u(t){if(i)throw new TypeError("Generator is already executing.");while(n){try{if(i=1,o&&(s=t[0]&2?o["return"]:t[0]?o["throw"]||((s=o["return"])&&s.call(o),0):o.next)&&!(s=s.call(o,t[1])).done)return s;if(o=0,s)t=[t[0]&2,s.value];switch(t[0]){case 0:case 1:s=t;break;case 4:n.label++;return{value:t[1],done:false};case 5:n.label++;o=t[1];t=[0];continue;case 7:t=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(t[0]===6||t[0]===2)){n=0;continue}if(t[0]===3&&(!s||t[1]>s[0]&&t[1]<s[3])){n.label=t[1];break}if(t[0]===6&&n.label<s[1]){n.label=s[1];s=t;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(t);break}if(s[2])n.ops.pop();n.trys.pop();continue}t=r.call(e,n)}catch(e){t=[6,e];o=0}finally{i=s=0}}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:true}}};var S=this&&this.__read||function(e,t){var r=typeof Symbol==="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,o=[],s;try{while((t===void 0||t-- >0)&&!(i=n.next()).done){o.push(i.value)}}catch(e){s={error:e}}finally{try{if(i&&!i.done&&(r=n["return"]))r.call(n)}finally{if(s)throw s.error}}return o};var w=this&&this.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++){if(o||!(n in t)){if(!o)o=Array.prototype.slice.call(t,0,n);o[n]=t[n]}}return e.concat(o||Array.prototype.slice.call(t))};var c=this&&this.__values||function(t){var e=typeof Symbol==="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length==="number")return{next:function e(){if(t&&n>=t.length)t=void 0;return{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(s,"__esModule",{value:true});s.BaseService=void 0;var i=d("catch-decorator-ts");var o=function(){function e(t,e,r,n){var i=this;this.sp=t;this.injectedModules=e;this.register=r;this.requestClientFactory=n;this.baseItemsSelect=["Id","Title","Created","Modified"];this.uniqueSelect=function(e){if(!(e===null||e===void 0?void 0:e.length))return[];return w([],S(new Set(e.concat(i.baseItemsSelect))),false)};if((this===null||this===void 0?void 0:this.register)&&this.requestClientFactory)this===null||this===void 0?void 0:this.register(this===null||this===void 0?void 0:this.requestClientFactory);this.loadModules(this.injectedModules).then(function(e){i.sp=t.configure({headers:{Origin:window.location.origin}},window.location.origin)})["catch"](function(e){return console.error(e)})}e.prototype.loadModules=function(u){var l;return m(this,void 0,void 0,function(){var t,r,n,i,o;var s,a;return b(this,function(e){switch(e.label){case 0:e.trys.push([0,5,6,7]);t=c(u),r=t.next();e.label=1;case 1:if(!!r.done)return[3,4];n=r.value;return[4,Promise.resolve().then(function(){return d("./src/services sync recursive")(n)})];case 2:i=e.sent();if(!i){console.log("Module ".concat((l=i===null||i===void 0?void 0:i["default"])===null||l===void 0?void 0:l.name," failed to load."))}if(i)console.log(i);e.label=3;case 3:r=t.next();return[3,1];case 4:return[3,7];case 5:o=e.sent();s={error:o};return[3,7];case 6:try{if(r&&!r.done&&(a=t["return"]))a.call(t)}finally{if(s)throw s.error}return[7];case 7:return[2]}})})};e.prototype.removeOData=function(e){return e===null||e===void 0?void 0:e.filter(function(e){for(var t in e){if(t===null||t===void 0?void 0:t.includes("odata"))delete e[t]}return true})};e.prototype.getItems=function(o,e){var s,a;var t=e.filters,u=t===void 0?null:t,r=e.expand,l=r===void 0?null:r,n=e.cache,c=n===void 0?null:n,i=e.top,d=i===void 0?null:i,f=e.orderBy,p=f===void 0?null:f,v=e.getBy,y=v===void 0?"Title":v;var h=[];for(var g=2;g<arguments.length;g++){h[g-2]=arguments[g]}return m(this,void 0,void 0,function(){var t,r;var n,i;return b(this,function(e){switch(e.label){case 0:if(!y)y="Title";t=this.sp.web.lists["getBy".concat(y)](o);r=(n=(i=t.items).expand.apply(i,w([],S(l!==null&&l!==void 0?l:[]),false))).select.apply(n,w([],S((s=this.uniqueSelect(h))!==null&&s!==void 0?s:[]),false)).filter(u!==null&&u!==void 0?u:"Id ne null").orderBy((a=p===null||p===void 0?void 0:p.column)!==null&&a!==void 0?a:"Id",(p===null||p===void 0?void 0:p.ascending)!==undefined?p.ascending:true).top(d||9999999);if(!!c)return[3,2];return[4,r.get()];case 1:return[2,e.sent()];case 2:return[2,r.usingCaching(c).get()]}})})};e.prototype.getItem=function(r,n,i){var o;var s=[];for(var e=3;e<arguments.length;e++){s[e-3]=arguments[e]}return m(this,void 0,void 0,function(){var t;return b(this,function(e){switch(e.label){case 0:i=l(l({},i),{getBy:(o=i===null||i===void 0?void 0:i.getBy)!==null&&o!==void 0?o:"Title"});return[4,this.getItems.apply(this,w([r,l(l({},i),{filters:(i===null||i===void 0?void 0:i.filters)?"".concat(i===null||i===void 0?void 0:i.filters," and Id eq ").concat(n):"Id eq ".concat(n)})],S(s),false))];case 1:t=e.sent();if((t===null||t===void 0?void 0:t.length)>0)return[2,t[0]];return[2,null]}})})};e.prototype.saveItem=function(t,r){return m(this,void 0,void 0,function(){return b(this,function(e){switch(e.label){case 0:return[4,this.sp.web.lists.getByTitle(t).items.add(r)];case 1:return[2,e.sent()]}})})};e.prototype.updateItem=function(t,r,n){return m(this,void 0,void 0,function(){return b(this,function(e){switch(e.label){case 0:return[4,this.sp.web.lists.getByTitle(t).items.getById(r).update(n)];case 1:return[2,e.sent()]}})})};e.prototype.getItemByIdSelect=function(r,n){if(n===void 0){n="Title"}var i=[];for(var e=2;e<arguments.length;e++){i[e-2]=arguments[e]}return m(this,void 0,void 0,function(){var t;return b(this,function(e){return[2,(t=this.sp.web.lists["getBy".concat(n)](r).items).select.apply(t,w([],S(this.uniqueSelect(i)),false)).top(9999999)]})})};e.prototype.getPreviousVersions=function(c,d,e){var t=e.filters,f=t===void 0?null:t,r=e.expand,p=r===void 0?null:r,n=e.getBy,v=n===void 0?"Title":n,y=e.orderBy;var h=[];for(var i=3;i<arguments.length;i++){h[i-3]=arguments[i]}return m(this,void 0,void 0,function(){var t,r,n;var i,o,s,a,u,l;return b(this,function(e){switch(e.label){case 0:t=["IsCurrentVersion","Created","VersionId","VersionLabel","Modified"];r=y?[y===null||y===void 0?void 0:y.column,(y===null||y===void 0?void 0:y.ascending)||false]:["Created",true];return[4,this.getItemByIdSelect.apply(this,w([c,v],S(h),false))];case 1:n=e.sent();if(!!f)return[3,5];if(!!p)return[3,3];return[4,(i=n.getById(d).versions).select.apply(i,w(w([],S(h),false),S(t),false)).orderBy(r[0],r[1]).get()];case 2:return[2,e.sent()];case 3:return[4,(o=(s=n.expand.apply(n,w([],S(p),false)).getById(d).versions).select.apply(s,w(w([],S(h),false),S(t),false))).expand.apply(o,w([],S(p),false)).orderBy(r[0],r[1]).get()];case 4:return[2,e.sent()];case 5:if(!!p)return[3,7];return[4,(a=n.getById(d).versions.filter(f)).select.apply(a,w(w([],S(h),false),S(t),false)).orderBy(r[0],r[1]).get()];case 6:return[2,e.sent()];case 7:return[4,(u=(l=n.expand.apply(n,w([],S(p),false)).getById(d).versions).select.apply(l,w(w([],S(h),false),S(t),false)).filter(f)).expand.apply(u,w([],S(p),false)).orderBy(r[0],r[1]).get()];case 8:return[2,e.sent()]}})})};e.prototype.deleteItem=function(t,r){return m(this,void 0,void 0,function(){return b(this,function(e){switch(e.label){case 0:return[4,this.sp.web.lists.getByTitle(t).items.getById(r)["delete"]()];case 1:e.sent();return[2]}})})};e.prototype.sendAttatchments=function(t,r,n){return m(this,void 0,void 0,function(){return b(this,function(e){switch(e.label){case 0:return[4,this.sp.web.lists.getByTitle(t).items.getById(r).attachmentFiles.addMultiple(n)];case 1:e.sent();return[2,true]}})})};e.prototype.addFileToLibrary=function(n,i,o){return m(this,void 0,void 0,function(){var t,r;return b(this,function(e){switch(e.label){case 0:t=40960;return[4,this.sp.web.getFolderByServerRelativeUrl(n).files.addChunked(i,o,function(e){var t=e.blockNumber/e.totalBlocks;console.log(t)},true,t)];case 1:r=e.sent();console.log("File upload succeded");return[2,r]}})})};e.prototype.addMultipleFilesToLibrary=function(u,l){return m(this,void 0,void 0,function(){var o,s,a,t;var r=this;return b(this,function(e){switch(e.label){case 0:o=1e6;s=[];a=0;u.forEach(function(e){return s.push(0)});return[4,Promise.allSettled(u.map(function(n,i){return r.sp.web.getFolderByServerRelativeUrl(n.libraryUrl).files.addChunked(n.name,n.content,function(e){var t=e.fileSize<=o?1:e.totalBlocks;var r=e.blockNumber/t;if(s[i]<1)s[i]=r;a=(s===null||s===void 0?void 0:s.reduce(function(e,t){return e+t},0))/(u===null||u===void 0?void 0:u.length);if(l)l(a,{currentName:n.name,currentPercentage:r})},true,o)}))];case 1:t=e.sent();return[2,{result:t,percentage:a}]}})})};e.prototype.getItemAttachments=function(t,r){return m(this,void 0,void 0,function(){return b(this,function(e){switch(e.label){case 0:return[4,this.sp.web.lists.getByTitle(t).items.getById(r).attachmentFiles.get()];case 1:return[2,e.sent()]}})})};e.prototype.getCurrentUser=function(){return m(this,void 0,void 0,function(){var t,r,n;return b(this,function(e){switch(e.label){case 0:return[4,this.sp.web.currentUser.get()];case 1:t=e.sent();return[4,this.sp.site.getContextInfo()];case 2:r=e.sent();n=t.LoginName.includes("#ext#");t.IsExternalUser=n;t.ProfilePic="".concat(r.SiteFullUrl,"/_layouts/15/userphoto.aspx?accountname=").concat(t===null||t===void 0?void 0:t.Email);return[2,t]}})})};e.prototype.getFileItemData=function(i,r,e){var t=e.expand,o=t===void 0?null:t,n=e.getBy,s=n===void 0?"Id":n;var a=[];for(var u=3;u<arguments.length;u++){a[u-3]=arguments[u]}return m(this,void 0,void 0,function(){var t;var n=this;return b(this,function(e){switch(e.label){case 0:return[4,Promise.all(r===null||r===void 0?void 0:r.map(function(r){return m(n,void 0,void 0,function(){var t;return b(this,function(e){switch(e.label){case 0:return[4,this.getItems.apply(this,w([i,{expand:o,filters:"FileLeafRef eq '".concat(r===null||r===void 0?void 0:r.Name,"'"),getBy:s!==null&&s!==void 0?s:"Title"}],S(a),false))];case 1:t=e.sent();if((t===null||t===void 0?void 0:t.length)>=1)return[2,this.removeOData([l(l({},r),{data:this.removeOData(t)[0]})])[0]];return[2,l(l({},r),{data:null})]}})})}))];case 1:t=e.sent();return[2,t]}})})};e.prototype.hasItemPermission=function(o,s,a){return m(this,void 0,void 0,function(){var t,r,n,i;return b(this,function(e){switch(e.label){case 0:t=(a===null||a===void 0?void 0:a.getBy)||"Id";r=this.sp.web.lists["getBy".concat(t)](o);n=r.items.getById(s);return[4,n.currentUserHasPermissions(a.permissionType)];case 1:i=e.sent();return[2,i]}})})};r([(0,i.DefaultCatch)(function(e){console.error(e);return[]}),n("design:type",Function),n("design:paramtypes",[String,Object,String]),n("design:returntype",Promise)],e.prototype,"getItems",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return null}),n("design:type",Function),n("design:paramtypes",[String,Number,Object,String]),n("design:returntype",Promise)],e.prototype,"getItem",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return null}),n("design:type",Function),n("design:paramtypes",[String,Object]),n("design:returntype",Promise)],e.prototype,"saveItem",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return null}),n("design:type",Function),n("design:paramtypes",[String,Number,Object]),n("design:returntype",Promise)],e.prototype,"updateItem",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return null}),n("design:type",Function),n("design:paramtypes",[String,String,String]),n("design:returntype",Promise)],e.prototype,"getItemByIdSelect",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return null}),n("design:type",Function),n("design:paramtypes",[String,Number,Object,String]),n("design:returntype",Promise)],e.prototype,"getPreviousVersions",null);r([(0,i.DefaultCatch)(function(e){return console.error(e)}),n("design:type",Function),n("design:paramtypes",[String,Number]),n("design:returntype",Promise)],e.prototype,"deleteItem",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return false}),n("design:type",Function),n("design:paramtypes",[String,Number,Array]),n("design:returntype",Promise)],e.prototype,"sendAttatchments",null);r([(0,i.DefaultCatch)(function(e){return console.error(e)}),n("design:type",Function),n("design:paramtypes",[String,String,File]),n("design:returntype",Promise)],e.prototype,"addFileToLibrary",null);r([(0,i.DefaultCatch)(function(e){return console.error(e)}),n("design:type",Function),n("design:paramtypes",[Array,Function]),n("design:returntype",Promise)],e.prototype,"addMultipleFilesToLibrary",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return[]}),n("design:type",Function),n("design:paramtypes",[String,Number]),n("design:returntype",Promise)],e.prototype,"getItemAttachments",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return null}),n("design:type",Function),n("design:paramtypes",[]),n("design:returntype",Promise)],e.prototype,"getCurrentUser",null);r([(0,i.DefaultCatch)(function(e){console.error(e);return[]}),n("design:type",Function),n("design:paramtypes",[String,Array,Object,String]),n("design:returntype",Promise)],e.prototype,"getFileItemData",null);r([(0,i.DefaultCatch)(function(e){console.error(e)}),n("design:type",Function),n("design:paramtypes",[String,Number,Object]),n("design:returntype",Promise)],e.prototype,"hasItemPermission",null);return e}();s.BaseService=o;(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.default:undefined;if(!e){return}e.register(l,"__assign","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts");e.register(r,"__decorate","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts");e.register(n,"__metadata","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts");e.register(m,"__awaiter","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts");e.register(b,"__generator","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts");e.register(S,"__read","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts");e.register(w,"__spreadArray","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts");e.register(c,"__values","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts");e.register(o,"BaseService","F:\\Projetos Individuais\\ReactLibraries\\trentim-react-sdk\\src\\services\\BaseService.ts")})();(function(){var e=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal.leaveModule:undefined;e&&e(t)})()}).call(this,d("./node_modules/webpack/buildin/module.js")(e))},"./src/services/index.ts":function(e,t,r){"use strict";var n=typeof reactHotLoaderGlobal!=="undefined"?reactHotLoaderGlobal["default"].signature:function(e){return e};Object.defineProperty(t,"__esModule",{value:true});t.BaseService=void 0;var i=r("./src/services/BaseService.ts");Object.defineProperty(t,"BaseService",{enumerable:true,get:function e(){return i.BaseService}})},"catch-decorator-ts":function(e,t){e.exports=require("catch-decorator-ts")}})});
//# sourceMappingURL=index.js.map