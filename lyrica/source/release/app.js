parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"5XCH":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on  "+o);return o};
},{}],"CaiI":[function(require,module,exports) {
var e=require("./_defined");module.exports=function(r){return Object(e(r))};
},{"./_defined":"5XCH"}],"SAz4":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"XKlW":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"Gl4i":[function(require,module,exports) {
var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
},{"./_cof":"XKlW"}],"CDBu":[function(require,module,exports) {
var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
},{"./_iobject":"Gl4i","./_defined":"5XCH"}],"uc15":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"Rwlq":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
},{"./_to-integer":"uc15"}],"m+aK":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
},{"./_to-integer":"uc15"}],"f1XA":[function(require,module,exports) {
var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
},{"./_to-iobject":"CDBu","./_to-length":"Rwlq","./_to-absolute-index":"m+aK"}],"dqAF":[function(require,module,exports) {
var e=module.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e);
},{}],"XFIe":[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],"bdh6":[function(require,module,exports) {
module.exports=!0;
},{}],"P3jJ":[function(require,module,exports) {

var r=require("./_core"),e=require("./_global"),o="__core-js_shared__",i=e[o]||(e[o]={});(module.exports=function(r,e){return i[r]||(i[r]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:require("./_library")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});
},{"./_core":"dqAF","./_global":"XFIe","./_library":"bdh6"}],"3j2j":[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],"HCCw":[function(require,module,exports) {
var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
},{"./_shared":"P3jJ","./_uid":"3j2j"}],"77jj":[function(require,module,exports) {
var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
},{"./_has":"SAz4","./_to-iobject":"CDBu","./_array-includes":"f1XA","./_shared-key":"HCCw"}],"Nz1j":[function(require,module,exports) {
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},{}],"aZdp":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
},{"./_object-keys-internal":"77jj","./_enum-bug-keys":"Nz1j"}],"5nCe":[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],"jFcs":[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":"5nCe"}],"jj57":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"w4mz":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":"jj57"}],"h+XT":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(t){return!0}};
},{}],"hd3X":[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":"h+XT"}],"ItUS":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":"jj57","./_global":"XFIe"}],"H2dS":[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":"hd3X","./_fails":"h+XT","./_dom-create":"ItUS"}],"eM+t":[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":"jj57"}],"YAFO":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(c){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":"w4mz","./_ie8-dom-define":"H2dS","./_to-primitive":"eM+t","./_descriptors":"hd3X"}],"Irt8":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"/L7a":[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":"YAFO","./_property-desc":"Irt8","./_descriptors":"hd3X"}],"qJpY":[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),n=require("./_ctx"),t=require("./_hide"),i=require("./_has"),u="prototype",o=function(c,a,f){var l,s,p,h=c&o.F,v=c&o.G,q=c&o.S,w=c&o.P,_=c&o.B,y=c&o.W,d=v?r:r[a]||(r[a]={}),F=d[u],g=v?e:q?e[a]:(e[a]||{})[u];for(l in v&&(f=a),f)(s=!h&&g&&void 0!==g[l])&&i(d,l)||(p=s?g[l]:f[l],d[l]=v&&"function"!=typeof g[l]?f[l]:_&&s?n(p,e):y&&g[l]==p?function(e){var r=function(r,n,t){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,t)}return e.apply(this,arguments)};return r[u]=e[u],r}(p):w&&"function"==typeof p?n(Function.call,p):p,w&&((d.virtual||(d.virtual={}))[l]=p,c&o.R&&F&&!F[l]&&t(F,l,p)))};o.F=1,o.G=2,o.S=4,o.P=8,o.B=16,o.W=32,o.U=64,o.R=128,module.exports=o;
},{"./_global":"XFIe","./_core":"dqAF","./_ctx":"jFcs","./_hide":"/L7a","./_has":"SAz4"}],"DHmZ":[function(require,module,exports) {
var e=require("./_export"),r=require("./_core"),t=require("./_fails");module.exports=function(c,i){var o=(r.Object||{})[c]||Object[c],u={};u[c]=i(o),e(e.S+e.F*t(function(){o(1)}),"Object",u)};
},{"./_export":"qJpY","./_core":"dqAF","./_fails":"h+XT"}],"3nCR":[function(require,module,exports) {
var e=require("./_to-object"),r=require("./_object-keys");require("./_object-sap")("keys",function(){return function(t){return r(e(t))}});
},{"./_to-object":"CaiI","./_object-keys":"aZdp","./_object-sap":"DHmZ"}],"IbOj":[function(require,module,exports) {
require("../../modules/es6.object.keys"),module.exports=require("../../modules/_core").Object.keys;
},{"../../modules/es6.object.keys":"3nCR","../../modules/_core":"dqAF"}],"rmah":[function(require,module,exports) {
module.exports=require("core-js/library/fn/object/keys");
},{"core-js/library/fn/object/keys":"IbOj"}],"ObEi":[function(require,module,exports) {

},{}],"yYjX":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"wlIn":[function(require,module,exports) {
var process = require("process");
var r=require("process");function t(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function e(r){"string"!=typeof r&&(r+="");var t,e=0,n=-1,o=!0;for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!o){e=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":r.slice(e,n)}function n(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}exports.resolve=function(){for(var e="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var i=s>=0?arguments[s]:r.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,o="/"===i.charAt(0))}return(o?"/":"")+(e=t(n(e.split("/"),function(r){return!!r}),!o).join("/"))||"."},exports.normalize=function(r){var e=exports.isAbsolute(r),s="/"===o(r,-1);return(r=t(n(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&s&&(r+="/"),(e?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(n(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),s=Math.min(n.length,o.length),i=s,u=0;u<s;u++)if(n[u]!==o[u]){i=u;break}var f=[];for(u=i;u<n.length;u++)f.push("..");return(f=f.concat(o.slice(i))).join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){if("string"!=typeof r&&(r+=""),0===r.length)return".";for(var t=r.charCodeAt(0),e=47===t,n=-1,o=!0,s=r.length-1;s>=1;--s)if(47===(t=r.charCodeAt(s))){if(!o){n=s;break}}else o=!1;return-1===n?e?"/":".":e&&1===n?"/":r.slice(0,n)},exports.basename=function(r,t){var n=e(r);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},exports.extname=function(r){"string"!=typeof r&&(r+="");for(var t=-1,e=0,n=-1,o=!0,s=0,i=r.length-1;i>=0;--i){var u=r.charCodeAt(i);if(47!==u)-1===n&&(o=!1,n=i+1),46===u?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){e=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===e+1?"":r.slice(t,n)};var o="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
},{"process":"yYjX"}],"Ig2k":[function(require,module,exports) {
var process = require("process");
var e=require("process"),n=require("fs"),r=require("path");function t(e){console.log("[dotenv][DEBUG] ".concat(e))}var o="\n",a=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,c=/\\n/g;function i(e,n){var r=Boolean(n&&n.debug),i={};return e.toString().split(o).forEach(function(e,n){var l=e.match(a);if(null!=l){var s=l[1],u=l[2]||"",d=u.length-1,v='"'===u[0]&&'"'===u[d];"'"===u[0]&&"'"===u[d]||v?(u=u.substring(1,d),v&&(u=u.replace(c,o))):u=u.trim(),i[s]=u}else r&&t("did not match key and value when parsing line ".concat(n+1,": ").concat(e))}),i}function l(o){var a=r.resolve(e.cwd(),".env"),c="utf8",l=!1;o&&(null!=o.path&&(a=o.path),null!=o.encoding&&(c=o.encoding),null!=o.debug&&(l=!0));try{var s=i(n.readFileSync(a,{encoding:c}),{debug:l});return Object.keys(s).forEach(function(n){e.env.hasOwnProperty(n)?l&&t('"'.concat(n,'" is already defined in `process.env` and will not be overwritten')):e.env[n]=s[n]}),{parsed:s}}catch(u){return{error:u}}}module.exports.config=l,module.exports.parse=i;
},{"fs":"ObEi","path":"wlIn","process":"yYjX"}],"NmDP":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t=r(require("@babel/runtime-corejs2/core-js/object/keys"));function r(e){return e&&e.__esModule?e:{default:e}}try{require("dotenv").config({path:"../../.env"})}catch(i){console.log("Enviroment loaded.")}function n(){console.log("======== LYRICA RAW ANALYSIS RESULTS ========"),(0,t.default)(Lyrica.Analyser.state.results.prolific).map(function(e){"primaryArtists"==e&&console.log("Category :: ======== Primary Lyrical Sections ========"),"actualArtists"==e&&console.log("Category :: ======== Actual Lyrical Sections ========"),"uniqueWords"==e&&console.log("Category :: ======== Unique Words ========"),Lyrica.Analyser.state.results.prolific["".concat(e)].map(function(t,r){"primaryArtists"==e&&console.log("Artist RAnk #".concat(r+1," — ").concat(t[0]," :: ").concat(t[1]," Primary Lyrical Sections")),"actualArtists"==e&&console.log("Artist RAnk #".concat(r+1," — ").concat(t[0]," :: ").concat(t[1]," Actual Lyrical Sections")),"uniqueWords"==e&&console.log("Artist RAnk #".concat(r+1," — ").concat(t[0]," :: ").concat(t[1]," Unique Words"))})}),console.log("======== LYRICA RAW ANALYSIS RESULTS ========")}window.addEventListener("DOMContentLoaded",function(){var t=confirm("Would you like to autorun this demonstration?");window.addEventListener("signal--parsing-complete",function(r){Lyrica.enableResults(),document.querySelector("#trigger__primaryartists").addEventListener("click",function(){e.addEventListener("signal--analysis--primaryArtist-complete",function(){Lyrica.renderResults("primarySections")}),Lyrica.Analyser.lyricalAnalysisA(Lyrica.Parser.data)}),t&&document.querySelector("#trigger__primaryartists").click(),document.querySelector("#trigger__actualartists").addEventListener("click",function(){e.addEventListener("signal--analysis--actualArtist-complete",function(){Lyrica.renderResults("anySections")}),Lyrica.Analyser.lyricalAnalysisB(Lyrica.Parser.data)}),t&&document.querySelector("#trigger__actualartists").click(),document.querySelector("#trigger__uniquewords").addEventListener("click",function(){e.addEventListener("signal--analysis--uniqueWords-complete",function(){Lyrica.renderResults("uniqueWords")}),Lyrica.Analyser.lyricalAnalysisC(Lyrica.Parser.data),n()}),t&&document.querySelector("#trigger__uniquewords").click()&&n()}),Lyrica.initialize("https://cdn.jsdelivr.net/gh/aareid10/genius-lyrical-profiler/assets/scripts/data/songs.json")});
},{"@babel/runtime-corejs2/core-js/object/keys":"rmah","dotenv":"Ig2k"}]},{},["NmDP"], null)
//# sourceMappingURL=app.5b5e6160.js.map