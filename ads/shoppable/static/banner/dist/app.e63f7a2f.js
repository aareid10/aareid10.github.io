// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"0ljA":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * This module manages the Global State config.
 * @module StateGlobal
 * @property {object}  global.timing                      - global timing values.
 * @property {number}  global.timing.destinationDelay     - destinationDelay timing value.
 * @property {number}  global.timing.panelClickOutDelay   - panelClickOutDelay timing value.
 * @property {number}  global.timing.panelDisplayDelay    - panelDisplayDelay timing value.
 * @property {number}  global.timing.panelTypeDelay       - panelTypeDelay timing value.
 * @property {number}  global.timing.productOpenDelay     - productOpenDelay timing value.
 * @property {number}  global.timing.productResolveDelay  - productResolveDelay timing value.
 */
var global = {
  timing: {
    initDrawDelay: 1000,
    cycleDelay: 31500,
    destinationDelay: 250,
    panelClickOutDelay: 500,
    panelDisplayDelay: 250,
    panelTypeDelay: 500,
    productOpenDelay: 3000,
    productResolveDelay: 6000
  }
};
var _default = global;
exports.default = _default;
},{}],"N4G0":[function(require,module,exports) {
var define;
/*!
 * 
 *   typeit - The most versatile animated typing utility on the planet.
 *   Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
 *   Version: v6.0.3
 *   URL: https://typeitjs.com
 *   License: GPL-2.0
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TypeIt=e():t.TypeIt=e()}(this,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i={strings:[],speed:100,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,lifeLike:!0,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:null,html:!0,waitUntilVisible:!1,beforeString:!1,afterString:!1,beforeStep:!1,afterStep:!1,afterComplete:!1};function r(t){var e=t.getBoundingClientRect();return!(e.right>window.innerWidth||e.bottom>window.innerHeight)&&!(e.top<0||e.left<0)}function o(t,e){return Math.abs(Math.random()*(t+e-(t-e))+(t-e))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("style");n.id=e,n.appendChild(document.createTextNode(t)),document.head.appendChild(n)}var a=function(t,e){for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},u=function(t){return["textarea","input"].indexOf(t.tagName.toLowerCase())>-1},l=function(t){return Array.isArray(t)?t.slice(0):t.split("<br>")};function c(t){return t.replace(/&(.+);/,function(t){var e=document.createElement("textarea");return e.innerHTML=t,e.value})}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h="{%}";var p=function(t){var e=function(t){var e=(new DOMParser).parseFromString(t,"text/html"),n=[].slice.call(e.body.querySelectorAll("*"));return(n=n.filter(function(e){return!(e.outerHTML.indexOf("></")>-1&&(t=t.replace(e.outerHTML,""),1))})).forEach(function(e){t=t.replace(new RegExp("<".concat(e.tagName,"(.*?)/?>((.*?)</").concat(e.tagName,">)?"),"i"),h)}),{string:t,nodes:n}}(t),n=e.string,i=e.nodes,r=c(n).split(""),o=[];return r.forEach(function(t,e){if(r.slice(e,e+3).join("")===h){var n=e,s=i.shift(),a=c(s.innerHTML).split(""),u=[].slice.call(s.attributes).map(function(t){return{name:t.name,value:t.nodeValue}});a.length?a.forEach(function(t,i){o.push({tag:s.tagName,attributes:u,content:t,isFirstCharacter:n===e,isLastCharacter:i+1===a.length}),n++}):o.push({tag:s.tagName,attributes:u,content:null})}else o.push(t)}),o=function(t){for(var e=!0;e;)t.some(function(e,n){return!("object"!==f(e)||!e.isLastCharacter&&null!==e.content||"%}"!==t.slice(n+1,n+3).join("")||(t.splice(n+1,2),0))})||(e=!1);return t}(o)},d=function(t){var e=t.tag,n=t.attributes,i=void 0===n?[]:n,r=t.content,o=void 0===r?"":r,s=document.createElement(e);return void 0!==i&&i.forEach(function(t){s.setAttribute(t.name,t.value)}),o&&(s.innerHTML=o),s.outerHTML},y=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t.value="":[].slice.call(t.childNodes).forEach(function(e){void 0!==e.classList&&e.classList.contains("ti-wrapper")&&(t.innerHTML="")})};function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var b=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.executed=[],this.waiting=e,!e.length&&n&&this.add(n)}var e,n,i;return e=t,(n=[{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.waiting[e?"unshift":"push"](t),this}},{key:"delete",value:function(t){return this.waiting.splice(t,1),this}},{key:"reset",value:function(){return this.waiting=[].concat(g(this.executed),g(this.waiting)),this.executed=[],this}}])&&m(e.prototype,n),i&&m(e,i),t}();function w(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var k="display:inline;position:relative;font:inherit;color:inherit;line-height:inherit;",q=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.element,r=e.id,o=e.options,s=e.queue,c=void 0===s?[]:s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.status={started:!1,complete:!1,frozen:!1,destroyed:!1},this.timeouts=[],this.id=r,this.$e=n,this.isInput=u(n),this.opts=a({},i,o),this.opts.strings=l(this.opts.strings),this.opts.html=!this.isInput&&this.opts.html,this.queue=new b(c,[this.pause,this.opts.startDelay]),y(n,this.isInput),this.prepareDelay("nextStringDelay"),this.prepareDelay("loopDelay");var f=this.$e.innerHTML;this.prepDOM(),this.handleHardCoded(f),this.opts.strings=this.opts.strings.map(function(t){return t.replace(/<\!--.*?-->/g,"")}),!this.opts.strings.length||this.queue.waiting.length>1||this.generateQueue()}var e,n,c;return e=t,(n=[{key:"reset",value:function(){return this.queue.reset(),new t({element:this.$e,id:this.id,options:this.opts,queue:this.queue.waiting})}},{key:"init",value:function(){var t=this;if(!this.status.started){if(this.cursor(),!this.opts.waitUntilVisible||r(this.$e))return this.status.started=!0,this.fire();window.addEventListener("scroll",function e(){r(t.$e)&&!t.status.started&&(t.fire(),window.removeEventListener("scroll",e))})}}},{key:"fire",value:function(){for(var t=this,e=this.queue.waiting.slice(),n=Promise.resolve(),i=function(i){var r=e[i],o=[r,t.queue,t];n=n.then(function(){return new Promise(function(e,n){if(t.status.frozen)return n();var i,s;(t.setPace(),r[2]&&r[2].isFirst&&t.opts.beforeString)&&(i=t.opts).beforeString.apply(i,o);t.opts.beforeStep&&(s=t.opts).beforeStep.apply(s,o);r[0].call(t,r[1],r[2]).then(function(){var n,i,s=t.queue.waiting.shift();if(r[2]&&r[2].isPhantom)return e();r[2]&&r[2].isLast&&t.opts.afterString&&(n=t.opts).afterString.apply(n,o);t.opts.afterStep&&(i=t.opts).afterStep.apply(i,o);return t.queue.executed.push(s),e()})})})},r=0;r<e.length;r++)i(r);n.then(function(){if(t.opts.loop){var e=t.opts.loopDelay?t.opts.loopDelay:t.opts.nextStringDelay;t.wait(function(){t.loopify(e),t.fire()},e.after)}t.status.completed=!0,t.opts.afterComplete&&t.opts.afterComplete(t)}).catch(function(){})}},{key:"loopify",value:function(t){var e=this;this.queue.reset().delete(0).add([this.pause,t.before],!0),this.getNoderized().forEach(function(t){e.queue.add([e.delete,null,{isPhantom:!0}],!0)})}},{key:"prepDOM",value:function(){this.isInput||(this.$e.innerHTML='\n      <span style="'.concat(k,'" class="ti-wrapper">\n        <span style="').concat(k,'" class="ti-container"></span>\n      </span>\n      '),this.$e.setAttribute("data-typeit-id",this.id),this.$eContainer=this.$e.querySelector(".ti-container"),this.$eWrapper=this.$e.querySelector(".ti-wrapper"),s("\n        .".concat(this.$eContainer.className,":before {\n          content: '.';\n          display: inline-block;\n          width: 0;\n          visibility: hidden;\n        }\n      ")))}},{key:"setContents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.isInput?this.$e.value=t:this.$eContainer[this.opts.html?"innerHTML":"innerText"]=t}},{key:"getRaw",value:function(){return this.isInput?this.$e.value:this.opts.html?this.$eContainer.innerHTML:this.$eContainer.innerText}},{key:"getNoderized",value:function(){return this.maybeNoderize(this.getRaw())}},{key:"prepareDelay",value:function(t){var e=this.opts[t];if(e){var n=Array.isArray(e),i=n?null:e/2;this.opts[t]={before:n?e[0]:i,after:n?e[1]:i,total:n?e[0]+e[1]:e}}}},{key:"generateQueue",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.queue.add(e),this.opts.strings.forEach(function(e,n){t.queueString(e);var i=t.queue.waiting.length;if(n+1!==t.opts.strings.length){if(t.opts.breakLines)return t.queue.add([t.type,"<br>"]),void t.addSplitPause(i);t.queueDeletions(e),t.addSplitPause(i,e.length)}})}},{key:"queueDeletions",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e="string"==typeof t?this.maybeNoderize(t).length:t,n=0;n<e;n++)this.queue.add([this.delete])}},{key:"maybeNoderize",value:function(t){return this.opts.html?p(t):t.split("")}},{key:"queueString",value:function(t){var e=this,n=(t=this.maybeNoderize(t)).length;t.forEach(function(t,i){var r=[e.type,t];0===i&&r.push({isFirst:!0}),i+1===n&&r.push({isLast:!0}),e.queue.add(r)})}},{key:"addSplitPause",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.queue.waiting.splice(t,0,[this.pause,this.opts.nextStringDelay.before]),this.queue.waiting.splice(t+e+1,0,[this.pause,this.opts.nextStringDelay.after])}},{key:"cursor",value:function(){if(!this.isInput){var t="display: none;";this.opts.cursor&&(s("\n        @keyframes blink-".concat(this.id," {\n          0% {opacity: 0}\n          49% {opacity: 0}\n          50% {opacity: 1}\n        }\n\n        [data-typeit-id='").concat(this.id,"'] .ti-cursor {\n          animation: blink-").concat(this.id," ").concat(this.opts.cursorSpeed/1e3,"s infinite;\n        }\n      "),this.id),t=""),this.$eWrapper.insertAdjacentHTML("beforeend",'<span style="'.concat(k).concat(t,'left: -.25ch;" class="ti-cursor">').concat(this.opts.cursorChar,"</span>"))}}},{key:"insert",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.isInput?this.$e.value="".concat(this.$e.value).concat(t):((e?this.$eContainer.lastChild:this.$eContainer).insertAdjacentHTML("beforeend",t),this.setContents(this.getRaw().split("").join("")))}},{key:"handleHardCoded",value:function(t){return!!t.length&&(this.opts.startDelete?(this.insert(t),this.queue.add([this.delete,!0]),void this.addSplitPause(1)):void(this.opts.strings=[].concat(w(l(t.trim())),w(this.opts.strings))))}},{key:"wait",value:function(t,e){this.timeouts.push(setTimeout(t,e))}},{key:"setPace",value:function(){var t=this.opts.speed,e=null!==this.opts.deleteSpeed?this.opts.deleteSpeed:this.opts.speed/3,n=t/2,i=e/2;this.typePace=this.opts.lifeLike?o(t,n):t,this.deletePace=this.opts.lifeLike?o(e,i):e}},{key:"pause",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,i){t.wait(function(){return n()},e||t.opts.nextStringDelay.total)})}},{key:"type",value:function(t){var e=this;return new Promise(function(n,i){e.wait(function(){return"string"==typeof t?(e.insert(t),n()):t.isFirstCharacter||null===t.content?(e.insert(d({tag:t.tag,attributes:t.attributes,content:t.content})),n()):(e.insert(t.content,!0),n())},e.typePace)})}},{key:"empty",value:function(){var t=this;return new Promise(function(e){return t.setContents(""),e()})}},{key:"delete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,i){t.wait(function(){var i=t.getNoderized();return i.splice(-1,1),i=function(t){return(t=t.map(function(e,n){if("object"===v(e)&&(e.isFirstCharacter||null===e.content)){for(var i=n,r=[e.content],o=!1;!o;){var s=t[++i];void 0!==s&&r.push(s.content),(void 0===s||s.isLastCharacter)&&(o=!0)}return d({tag:e.tag,attributes:e.attributes,content:r.join("")})}return e})).filter(function(t){return"object"!==v(t)})}(i),t.setContents(i.join("")),e&&i.length>0?t.delete(!0).then(function(){return n()}):n()},t.deletePace)})}},{key:"setOptions",value:function(t){var e=this;return new Promise(function(n){return e.opts=a({},e.opts,t),n()})}}])&&S(e.prototype,n),c&&S(e,c),t}(),C=function(t){return"string"==typeof t?t=document.querySelectorAll(t):t instanceof NodeList||(t=[t]),[].slice.call(t)};function j(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"default",function(){return x});var x=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.instances=C(e).map(function(t){return new q({element:t,id:Math.random().toString(36).substring(2,15),options:n,queue:[]})})}var e,n,i;return e=t,(n=[{key:"each",value:function(t){var e=this;this.instances.forEach(function(n){t.call(e,n)})}},{key:"queueUp",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.each(function(r){for(var o="string"!=typeof t,s=o?t:r[t],a=o?e:n,u=0;u<i;u++)r.queue.add([s,a])})}},{key:"is",value:function(t){return e=this.instances,n=t,i=!0,!!e.length&&e.filter(function(t){return t.status[n]===i}).length===e.length;var e,n,i}},{key:"freeze",value:function(){this.each(function(t){t.status.frozen=!0})}},{key:"unfreeze",value:function(){this.each(function(t){t.status.frozen&&(t.status.frozen=!1,t.fire())})}},{key:"type",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.each(function(e){return e.queueString(t)}),this}},{key:"delete",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.queueUp("delete",null===t,null===t?1:t),this}},{key:"pause",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.queueUp("pause",t),this}},{key:"break",value:function(){return this.queueUp("type","<br>"),this}},{key:"options",value:function(t){return this.queueUp("setOptions",t),this}},{key:"exec",value:function(t){return this.queueUp(t),this}},{key:"destroy",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.each(function(e){e.timeouts.forEach(function(t){clearTimeout(t)}),e.timeouts=[];var n=e.isInput?null:e.$eWrapper.querySelector(".ti-cursor");t&&e.opts.cursor&&null!==n&&e.$eWrapper.removeChild(n),e.status.destroyed=!0})}},{key:"empty",value:function(){return this.queueUp("empty"),this}},{key:"reset",value:function(){return this.destroy(),this.instances=this.instances.map(function(t){return t.reset()}),this}},{key:"go",value:function(){return this.each(function(t){t.init()}),this}}])&&j(e.prototype,n),i&&j(e,i),t}()}]).default});
},{}],"G1B8":[function(require,module,exports) {
module.exports = {
  "hotspots": [{
    "isVisible": true,
    "pulseRate": 500,
    "id": "hspt1",
    "item": "product_sweater.jpg",
    "image": "https://drive.google.com/uc?export=view&id=1sPNLfTiEo_Q6N6_xc4eSof7Mt4nliC-7",
    "url": "https://www.target.com/c/blazers-sport-coats-men-s-clothing/-/N-55929",
    "polarity": "bot",
    "styles": {
      "top": "13.5%",
      "left": "48.4%",
      "animation-duration": "1500ms"
    },
    "meta": {
      "description": "Men's Standard Fit Long Sleeve Crew Neck Pullover Sweater™",
      "brand": "Goodfellow & Co™",
      "price": "$24.99",
      "sale": false
    },
    "lifecycle": [{
      "active": 0
    }]
  }, {
    "isVisible": true,
    "pulseRate": 550,
    "id": "hspt2",
    "item": "product_shoes.jpg",
    "image": "https://drive.google.com/uc?export=view&id=1xYMBUYK0lwUreagAuJ09DDi4mBYBgcfe",
    "url": "https://www.target.com/c/men-s-shoes/-/N-5xu1w",
    "polarity": "top",
    "meta": {
      "description": "Men's Puma Suede G Spikeless Golf Shoes",
      "brand": "Quiet Shade",
      "price": "$79.96",
      "sale": true
    },
    "styles": {
      "top": "87.5%",
      "left": "57.5%",
      "animation-duration": "1550ms"
    },
    "lifecycle": [{
      "active": 0
    }]
  }, {
    "isVisible": false,
    "pulseRate": 600,
    "id": "hspt3",
    "item": "product_pants.jpg",
    "image": "https://drive.google.com/uc?export=view&id=1thjMu8EYlB0lEqSyQZHJrAErla4MKtj1",
    "url": "https://www.target.com/c/pants-men-s-clothing/-/N-5xu29",
    "polarity": "bot",
    "meta": {
      "description": "Men's Regular Straight Fit Chino Pants",
      "brand": "Goodfellow & Co™ Garnet Rose",
      "price": "$27.99",
      "sale": false
    },
    "styles": {
      "top": "60%",
      "left": "40%",
      "animation-duration": "1600ms"
    },
    "lifecycle": [{
      "active": 0
    }]
  }]
};
},{}],"Ii8X":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeit = _interopRequireDefault(require("typeit"));

var _state = _interopRequireDefault(require("../states/state.global"));

var _hotspots = _interopRequireDefault(require("../data/hotspots.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShopHotspot =
/*#__PURE__*/
function () {
  /**
   * Member function (constructor) in ShopHotspot which creates the class object.
   * @function constructor
   * @access public
   * @param {null} None no parameter
   * @example
   * new ShopHotspot()
   * @returns {Class} ShopHotspot
   */
  function ShopHotspot() {
    _classCallCheck(this, ShopHotspot);

    this.state = {};
    this.state.initDrawDelay = _state.default.timing.initDrawDelay;
    this.state.cycleDelay = window.cycleDelay || _state.default.timing.cycleDelay;
    this.state.cycleDuration = window.cycleDuration || _state.default.timing.cycleDuration;
    this.state.panelDisplayDelay = window.panelDisplayDelay || _state.default.timing.panelDisplayDelay;
    this.state.panelTypeDelay = window.panelTypeDelay || _state.default.timing.panelTypeDelay;
    this.state.productOpenDelay = window.productOpenDelay || _state.default.timing.productOpenDelay;
    this.state.productResolveDelay = window.productResolveDelay || _state.default.timing.productResolveDelay;
    this.state.hotspotList = window.hotspotsURL || window.hotspots || _hotspots.default;
    this.state.hooks = {
      panel: document.querySelector('#shop__panel'),
      product: document.querySelector('#shop__panel_product'),
      description: document.querySelector('#shop__panel_description'),
      brand: document.querySelector('#shop__panel_brand'),
      price: document.querySelector('#shop__panel_pricing #price'),
      sale: document.querySelector('#shop__panel_pricing #sale'),
      link: document.querySelector('#shop__panel_cta a')
    };
  }
  /**
   * Member function (parse) in ShopHotspot which parses the hotspot data from a variety of sources. This will get data from a remote URL, a global object, or an embedded object within the source.
   * @function parse
   * @access public
   * @param {Class} ShopHotspot
   * @example
   * ShopHotspot.parse()
   * @returns {Class} ShopHotspot
   */


  _createClass(ShopHotspot, [{
    key: "parse",
    value: function parse() {
      var _this = this;

      switch (true) {
        case typeof this.state.hotspotList === 'string':
          fetch(this.state.hotspotList).then(function (response) {
            return response.json();
          }).then(function (records) {
            _this.state.hotspotList = records;
          });
          break;

        default:
      }

      return this;
    }
    /**
     * Member function (populate) in ShopHotspot which populates hotspots into the DOM based on the parsed hotspot data.
     * @function populate
     * @access public
     * @param {Class} ShopHotspot
     * @example
     * ShopHotspot.populate()
     * @returns {Class} ShopHotspot
     */

  }, {
    key: "populate",
    value: function populate() {
      var _this2 = this;

      this.state.hotspotList.hotspots.map(function (hotspot, index) {
        setTimeout(function () {
          _this2.generate('hotspot', "hotspot".concat(index), hotspot.id, hotspot.polarity, hotspot.styles, hotspot.image, hotspot.url, JSON.stringify(hotspot.meta));
        }, hotspot.pulseRate * Math.floor(Math.random() * _this2.state.hotspotList.hotspots.length));
      });
      return this;
    }
    /**
     * Member function (generate) in ShopHotspot which generates the inner-workings and respective logic of each hotspot.
     * @function generate
     * @access public
     * @param {Class} ShopHotspot
     * @example
     * ShopHotspot.generate('hotspot', hotspot${index}`, hotspot.id, hotspot.polarity, hotspot.styles, hotspot.image, hotspot.url, JSON.stringify(hotspot.meta))
     * @returns {null} no return value
     */

  }, {
    key: "generate",
    value: function generate(className, id, key, polarity, style, image, url, meta) {
      var _this3 = this;

      var hotspot = document.createElement('div');
      hotspot.className = className;
      hotspot.id = id;
      hotspot.key = key;
      hotspot.dataset.image = image;
      hotspot.dataset.url = url;
      hotspot.dataset.meta = meta;
      hotspot.dataset.polarity = polarity;

      hotspot.onclick = function (event) {
        var self = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this3;
        meta = JSON.parse(hotspot.dataset.meta);
        self.state.hooks.link.href = hotspot.dataset.url;
        self.state.hooks.product.alt = [hotspot.dataset.image.match(/[a-z]+.png/g)];
        self.state.hooks.product.src = hotspot.dataset.image;
        self.state.hooks.brand.innerText = meta.brand;
        self.state.hooks.price.innerText = meta.price;
        self.state.hooks.sale.innerText = meta.sale ? 'Sale' : '';

        _this3.animatePanel(hotspot);

        _this3.animateProduct();
      };

      Object.keys(style).map(function (rule) {
        return hotspot.style["".concat(rule)] = style["".concat(rule)];
      });
      document.querySelector('#shop__hotspots').appendChild(hotspot);
    }
    /**
     * Member function (checkPanel) in ShopHotspot which checks if the panel is open.
     * @function checkPanel
     * @access public
     * @param {null} None
     * @example
     * ShopHotspot.
     * @returns {Boolean} rcheckPanel()eturns boolean
     */

  }, {
    key: "checkPanel",
    value: function checkPanel() {
      return this.state.hooks.panel.className.match('open') === null;
    }
    /**
     * Member function (checkProduct) in ShopHotspot which checks to if the product has been shown.
     * @function checkProduct
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopHotspot.checkProduct()
     * @returns {Boolean} retcheckProduct()urns boolean
     */

  }, {
    key: "checkProduct",
    value: function checkProduct() {
      return this.state.hooks.panel.className === 'opened';
    }
    /**
     * Member function (checkPolarity) in ShopHotspot which checks the polarity of the hotspot.
     * @function checkPolarity
     * @access public
     * @param {Object} hotspot hotspot data object
     * @example
     * ShopHotspot.checkPolarity()
     * @returns {Boolean} returns boolean
     */

  }, {
    key: "checkPolarity",
    value: function checkPolarity(hotspot) {
      return hotspot.dataset.polarity === 'bot';
    }
    /**
     * Member function (animatePanel) in ShopHotspot which triggers the panel animation.
     * @function animatePanel
     * @access public
     * @param {Object} hotspot hotspot data object
     * @example
     * ShopHotspot.animatePanel()
     * @returns {null} no return value
     */

  }, {
    key: "animatePanel",
    value: function animatePanel(hotspot) {
      setTimeout(this.resolvePanel(hotspot), this.state.panelDisplayDelay);
      new _typeit.default('#shop__panel_description', {
        strings: [JSON.parse(hotspot.dataset.meta).description],
        speed: 10,
        loop: false,
        cursor: false,
        startDelay: this.state.panelTypeDelay
      }).go();
    }
    /**
     * Member function (animateProduct) in ShopHotspot which triggers the product animation.
     * @function animateProduct
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopHotspot.animateProduct()
     * @returns {null} no return value
     */

  }, {
    key: "animateProduct",
    value: function animateProduct() {
      switch (this.checkProduct()) {
        case true:
          this.animateProductOn();
          break;

        case false:
          this.animateProductOff();
          break;

        default:
      }
    }
    /**
     * Member function (animateProductOn) in ShopHotspot which triggers the 'ProductOn' state.
     * @function animateProductOn
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopHotspot.animateProductOn()
     * @returns {null} no return value
     */

  }, {
    key: "animateProductOn",
    value: function animateProductOn() {
      var _this4 = this;

      this.state.hooks.product.className = 'closed';
      setTimeout(function () {
        _this4.state.hooks.product.className = 'open';
      }, this.state.productOpenDelay);
      setTimeout(function () {
        _this4.state.hooks.product.className += ' opened';
      }, this.state.productResolveDelay);
    }
    /**
     * Member function (animateProductOff) in ShopHotspot which triggers the 'ProductOff' state.
     * @function animateProductOff
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopHotspot.animateProductOff()
     * @returns {null} no return value
     */

  }, {
    key: "animateProductOff",
    value: function animateProductOff() {
      var _this5 = this;

      this.state.hooks.product.className = 'open';
      setTimeout(function () {
        _this5.state.hooks.product.className += ' opened';
      }, this.state.productOpenDelay);
    }
    /**
     * Member function (resolvePanel) in ShopHotspot which triggers the 'ResolvePanel' state.
     * @function resolvePanel
     * @access public
     * @param {object} hotspot hotspot data object
     * @example
     * ShopHotspot.resolvePanel()
     * @returns {null} no return value
     */

  }, {
    key: "resolvePanel",
    value: function resolvePanel(hotspot) {
      this.state.hooks.panel.className = this.checkPanel() ? this.checkPolarity(hotspot) ? 'open-bottom' : 'open-top' : this.state.hooks.panel.className;
    }
  }]);

  return ShopHotspot;
}();

exports.default = ShopHotspot;
},{"typeit":"N4G0","../states/state.global":"0ljA","../data/hotspots.json":"G1B8"}],"8jfO":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _state = _interopRequireDefault(require("../states/state.global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShopPanel =
/*#__PURE__*/
function () {
  /**
   * Member function (constructor) in ShopPanel which creates the class object.
   * @function constructor
   * @access public
   * @param {null} None no parameter
   * @example
   * new ShopPanel()
   * @returns {Class} ShopPanel
   */
  function ShopPanel() {
    _classCallCheck(this, ShopPanel);

    this.state = {};
    this.state.initDrawDelay = _state.default.timing.initDrawDelay;
    this.state.cycleDelay = window.cycleDelay || _state.default.timing.cycleDelay;
    this.state.cycleDuration = window.cycleDuration || _state.default.timing.cycleDuration;
    this.state.panelDisplayDelay = window.panelDisplayDelay || _state.default.timing.panelDisplayDelay;
    this.state.hooks = {
      panel: document.querySelector('#shop__panel'),
      close: document.querySelector('#shop__panel_close'),
      cta: document.querySelector('#shop__panel_cta'),
      link: document.querySelector('#shop__panel_cta a')
    };
  }
  /**
   * Member function (handler) in ShopPanel which manages the event ShopPanel event handlers.
   * @function handler
   * @access public
   * @param {null} None no parameter
   * @example
   * ShopPanel.handler()
   * @returns {null} no return value
   */


  _createClass(ShopPanel, [{
    key: "handler",
    value: function handler() {
      var _this = this;

      this.state.hooks.close.onclick = function () {
        return _this.handleClose();
      };

      this.state.hooks.cta.onclick = function (e) {
        return _this.handleCta(e);
      };
    }
    /**
     * Member function (handleCta) in ShopPanel which registers the cta event handler.
     * @function handleCta
     * @access public
     * @param {event} e event object
     * @example
     * ShopPanel.handleCta(e)
     * @returns {null} no return value
     */

  }, {
    key: "handleCta",
    value: function handleCta(e) {
      e.preventDefault();
      this.state.hooks.cta.className = this.checkPanel() ? 'selected' : '';
      this.checkPanel() ? setTimeout(this.resolveCta(this.state), this.state.panelClickOutDelay) : '';
    }
    /**
     * Member function (handleClose) in ShopPanel which registers the close event handler.
     * @function handleClose
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopPanel.handleClose()
     * @returns {null} no return value
     */

  }, {
    key: "handleClose",
    value: function handleClose() {
      this.checkClose() ? this.state.hooks.close.setAttribute('class', 'selected') : '';
      setTimeout(this.resolveClose(this.state), this.state.panelDisplayDelay);
    }
    /**
     * Member function (resolveCta) in ShopPanel which triggers the cta resolve state.
     * @function resolveCta
     * @access public
     * @param {object} state state object
     * @example
     * ShopPanel.resolveCta(state)
     * @returns {null} no return value
     */

  }, {
    key: "resolveCta",
    value: function resolveCta(state) {
      state.hooks.cta.className = '';
      window.open(state.hooks.link.href);
    }
    /**
     * Member function (resolveClose) in ShopPanel which triggers the close resolve state.
     * @function resolveClose
     * @access public
     * @param {object} state state object
     * @example
     * ShopPanel.resolveClose(state)
     * @returns {null} no return value
     */

  }, {
    key: "resolveClose",
    value: function resolveClose(state) {
      state.hooks.panel.className = this.checkPolarity() ? 'closed-bottom' : 'closed-top';
      state.hooks.close.setAttribute('class', '');
    }
    /**
     * Member function (checkPanel) in ShopPanel which checks if the panel is open.
     * @function checkPanel
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopPanel.checkPanel()
     * @returns {Boolean} returns boolean
     */

  }, {
    key: "checkPanel",
    value: function checkPanel() {
      return this.state.hooks.panel.className.match('open') !== null;
    }
    /**
     * Member function (checkPolarity) in ShopPanel which checks the polarity of the hotspot.
     * @function checkPolarity
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopPanel.checkPolarity()
     * @returns {Boolean} returns boolean
     */

  }, {
    key: "checkPolarity",
    value: function checkPolarity() {
      return this.state.hooks.panel.className.match('bottom') !== null;
    }
    /**
     * Member function (checkCta) in ShopPanel which checks the state of the cta animation.
     * @function checkCta
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopPanel.checkCta()
     * @returns {Boolean} returns boolean
     */

  }, {
    key: "checkCta",
    value: function checkCta() {
      return this.state.hooks.cta.className !== 'selected';
    }
    /**
     * Member function (checkClose) in ShopPanel which checks the state of the close animation.
     * @function checkClose
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopPanel.checkClose()
     * @returns {Boolean} returns boolean
     */

  }, {
    key: "checkClose",
    value: function checkClose() {
      return this.state.hooks.close.className !== 'selected';
    }
  }]);

  return ShopPanel;
}();

exports.default = ShopPanel;
},{"../states/state.global":"0ljA"}],"W+pu":[function(require,module,exports) {
"use strict";

var _state = _interopRequireDefault(require("../states/state.global"));

var _shopHotspot = _interopRequireDefault(require("./shopHotspot"));

var _shopPanel = _interopRequireDefault(require("./shopPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.addEventListener('DOMContentLoaded', function () {
  console.warn('Application Initialized');
  console.warn('Cycle Delay: ', window.cycleDelay || _state.default.timing.cycleDelay);
  console.warn('Cycle Duration: ', window.cycleDuration || _state.default.timing.cycleDuration);
  console.warn('Panel Display Delay: ', window.panelDisplayDelay || _state.default.timing.panelDisplayDelay);
  console.warn('Panel Type Delay: ', window.panelTypeDelay || _state.default.timing.panelTypeDelay);
  console.warn('Product Open Delay: ', window.productOpenDelay || _state.default.timing.productOpenDelay);
  console.warn('Product Resolve Delay: ', window.productResolveDelay || _state.default.timing.productResolveDelay);
  var init = new Promise(function (res) {
    setTimeout(function () {
      res();
    }, _state.default.timing.initDrawDelay);
  });
  init.then(function () {
    new _shopHotspot.default().parse().populate();
    new _shopPanel.default().handler();
  });
});
var shopunit = {
  app: document.querySelector('#shopunit'),
  flexFonts: document.querySelectorAll('.flexFont'),

  /**
   * Member function (init) in app which manages the event app initialization.
   * @function init
   * @access public
   * @param {string} macro Ad Macro string
   * @param {element} elem DOM Element
   * @example
   * app.init()
   * @returns {null} no return value
   */
  init: function init(macro, elem) {
    shopunit.flexFontInit();
    shopunit.flexFontRefresh();
    shopunit.preloadImages();
    shopunit.clickThrough(macro, elem);
  },

  /**
   * Member function (flexFontRefresh) in app which manages the dynamic font resize. This method actallu applies the newly caluclated font size.
   * @function flexFontRefresh
   * @access public
   * @param {null} None no parameter
   * @example
   * app.flexFontRefresh()
   * @returns {null} no return value
   */
  flexFontRefresh: function flexFontRefresh() {
    for (var i = 0; i < shopunit.flexFonts.length; i++) {
      var getFontPerc = shopunit.flexFonts[i].getAttribute('data-fontPerc');
      var relFontsize = document.getElementById('shopunit').offsetWidth * getFontPerc;
      shopunit.flexFonts[i].style.fontSize = "".concat(relFontsize, "px");
    }
  },

  /**
   * Member function (flexFontInit) in app which manages the dynamic font resize.
   * @function flexFontInit
   * @access public
   * @param {null} None no parameter
   * @example
   * app.flexFontInit()
   * @returns {null} no return value
   */
  flexFontInit: function flexFontInit() {
    for (var i = 0; i < shopunit.flexFonts.length; i++) {
      var currFontSize = window.getComputedStyle(shopunit.flexFonts[i], null).fontSize;
      var fontPerc = parseInt(currFontSize) / 640;
      shopunit.flexFonts[i].setAttribute('data-fontPerc', fontPerc);
    }
  },

  /**
   * Member function (setClickThrough) in app which manages the event app event handlers.
   * @function setClickThrough
   * @access public
   * @param {string} url no parameter
   * @example
   * app.handler()
   * @returns {null} no return value
   */
  setClickThrough: function setClickThrough(url) {
    if (_typeof(window.parent.app) === 'object') {
      if (_typeof(window.parent.app.ads) === 'object') {
        event.preventDefault();

        if (shopunit.dfpAdID !== undefined) {
          if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
            window.parent.app.ads.clickThrough("".concat(url, "?ord=").concat(shopunit.cacheBust), shopunit.dfpAdID);
          } else {
            window.parent.app.ads.clickThrough(url, shopunit.dfpAdID);
          }
        } else if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
          window.parent.app.ads.clickThrough("".concat(url, "?ord=").concat(shopunit.cacheBust));
        } else {
          window.parent.app.ads.clickThrough(url);
        }
      } else {
        window.open(url, '_blank');
      }
    } else if (typeof mraid !== 'undefined') {
      mraid.open(url);
    } else {
      window.open(url, '_blank');
    }
  },

  /**
   * Member function (preloadImages) in app which manages the event app image preloading.
   * @function preloadImages
   * @access public
   * @param {null} None no parameter
   * @example
   * app.preloadImages()
   * @returns {null} no return value
   */
  preloadImages: function preloadImages() {
    var imgs = document.getElementsByTagName('img');
    var imgArr = [];
    var imgLoaded = 0;
    var i;
    var j;

    for (i = 0; i < imgs.length; i++) {
      imgArr.push(imgs[i].src);
    }

    var imgTotal = imgArr.length;

    for (j = 0; j < imgTotal; j++) {
      var image = new Image();
      image.src = imgArr[j];

      image.onload = function () {
        imgLoaded++;

        if (imgLoaded === imgTotal) {
          shopunit.app.classList.add('banner--ready');
        }
      };
    }
  },

  /**
   * Member function (clickThrough) in app which manages the event app event handlers.
   * @function clickThrough
   * @access public
   * @param {string} macro Ad Macro string
   * @param {element} elem DOM Element
   * @example
   * app.clickThrough()
   * @returns {null} no return value
   */
  clickThrough: function clickThrough(macro, elem) {
    // --ESPN clicktag macro /////////////////////
    var clickTag = macro; // --Banner variables /////////////////////

    var clickArea = document.getElementById(elem);
    console.warn('clickArea:', elem); // --Main button listeners /////////////////////

    clickArea.addEventListener('click', clickThrough); // --banner main clicktag function  /////////////////////

    function clickThrough() {
      setTimeout(function () {
        shopunit.setClickThrough(clickTag);
      }, _state.default.timing.destinationDelay);
    }
  }
};
window.shopunit = shopunit;
module.exports = shopunit;
},{"../states/state.global":"0ljA","./shopHotspot":"Ii8X","./shopPanel":"8jfO"}]},{},["W+pu"], null)
//# sourceMappingURL=app.a951cffb.map