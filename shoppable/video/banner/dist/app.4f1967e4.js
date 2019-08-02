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
})({"assets/scripts/states/state.global.js":[function(require,module,exports) {

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
    cycleDelay: 2000,
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
},{}],"node_modules/@vimeo/player/dist/player.es.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! @vimeo/player v2.10.0 | (c) 2019 Vimeo | MIT License | https://github.com/vimeo/player.js */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/**
 * @module lib/functions
 */

/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */

/* global global */


var isNode = typeof global !== 'undefined' && {}.toString.call(global) === '[object global]';
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */

function getMethodName(prop, type) {
  if (prop.indexOf(type.toLowerCase()) === 0) {
    return prop;
  }

  return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */


function isDomElement(element) {
  return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */


function isInteger(value) {
  // eslint-disable-next-line eqeqeq
  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */


function isVimeoUrl(url) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */


function getVimeoUrl() {
  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = oEmbedParameters.id;
  var url = oEmbedParameters.url;
  var idOrUrl = id || url;

  if (!idOrUrl) {
    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
  }

  if (isInteger(idOrUrl)) {
    return "https://vimeo.com/".concat(idOrUrl);
  }

  if (isVimeoUrl(idOrUrl)) {
    return idOrUrl.replace('http:', 'https:');
  }

  if (id) {
    throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
  }

  throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}
/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */


(function (self) {
  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var defineProperty = function (object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {
    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
  /*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
  */
  (function UMD(name, context, definition) {
    // special form of UMD for polyfilling across evironments
    context[name] = context[name] || definition();

    if (module.exports) {
      module.exports = context[name];
    }
  })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
    var builtInProp,
        cycle,
        scheduling_queue,
        ToString = Object.prototype.toString,
        timer = typeof setImmediate != "undefined" ? function timer(fn) {
      return setImmediate(fn);
    } : setTimeout; // dammit, IE8.

    try {
      Object.defineProperty({}, "x", {});

      builtInProp = function builtInProp(obj, name, val, config) {
        return Object.defineProperty(obj, name, {
          value: val,
          writable: true,
          configurable: config !== false
        });
      };
    } catch (err) {
      builtInProp = function builtInProp(obj, name, val) {
        obj[name] = val;
        return obj;
      };
    } // Note: using a queue instead of array for efficiency


    scheduling_queue = function Queue() {
      var first, last, item;

      function Item(fn, self) {
        this.fn = fn;
        this.self = self;
        this.next = void 0;
      }

      return {
        add: function add(fn, self) {
          item = new Item(fn, self);

          if (last) {
            last.next = item;
          } else {
            first = item;
          }

          last = item;
          item = void 0;
        },
        drain: function drain() {
          var f = first;
          first = last = cycle = void 0;

          while (f) {
            f.fn.call(f.self);
            f = f.next;
          }
        }
      };
    }();

    function schedule(fn, self) {
      scheduling_queue.add(fn, self);

      if (!cycle) {
        cycle = timer(scheduling_queue.drain);
      }
    } // promise duck typing


    function isThenable(o) {
      var _then,
          o_type = typeof o;

      if (o != null && (o_type == "object" || o_type == "function")) {
        _then = o.then;
      }

      return typeof _then == "function" ? _then : false;
    }

    function notify() {
      for (var i = 0; i < this.chain.length; i++) {
        notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
      }

      this.chain.length = 0;
    } // NOTE: This is a separate function to isolate
    // the `try..catch` so that other code can be
    // optimized better


    function notifyIsolated(self, cb, chain) {
      var ret, _then;

      try {
        if (cb === false) {
          chain.reject(self.msg);
        } else {
          if (cb === true) {
            ret = self.msg;
          } else {
            ret = cb.call(void 0, self.msg);
          }

          if (ret === chain.promise) {
            chain.reject(TypeError("Promise-chain cycle"));
          } else if (_then = isThenable(ret)) {
            _then.call(ret, chain.resolve, chain.reject);
          } else {
            chain.resolve(ret);
          }
        }
      } catch (err) {
        chain.reject(err);
      }
    }

    function resolve(msg) {
      var _then,
          self = this; // already triggered?


      if (self.triggered) {
        return;
      }

      self.triggered = true; // unwrap

      if (self.def) {
        self = self.def;
      }

      try {
        if (_then = isThenable(msg)) {
          schedule(function () {
            var def_wrapper = new MakeDefWrapper(self);

            try {
              _then.call(msg, function $resolve$() {
                resolve.apply(def_wrapper, arguments);
              }, function $reject$() {
                reject.apply(def_wrapper, arguments);
              });
            } catch (err) {
              reject.call(def_wrapper, err);
            }
          });
        } else {
          self.msg = msg;
          self.state = 1;

          if (self.chain.length > 0) {
            schedule(notify, self);
          }
        }
      } catch (err) {
        reject.call(new MakeDefWrapper(self), err);
      }
    }

    function reject(msg) {
      var self = this; // already triggered?

      if (self.triggered) {
        return;
      }

      self.triggered = true; // unwrap

      if (self.def) {
        self = self.def;
      }

      self.msg = msg;
      self.state = 2;

      if (self.chain.length > 0) {
        schedule(notify, self);
      }
    }

    function iteratePromises(Constructor, arr, resolver, rejecter) {
      for (var idx = 0; idx < arr.length; idx++) {
        (function IIFE(idx) {
          Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
            resolver(idx, msg);
          }, rejecter);
        })(idx);
      }
    }

    function MakeDefWrapper(self) {
      this.def = self;
      this.triggered = false;
    }

    function MakeDef(self) {
      this.promise = self;
      this.state = 0;
      this.triggered = false;
      this.chain = [];
      this.msg = void 0;
    }

    function Promise(executor) {
      if (typeof executor != "function") {
        throw TypeError("Not a function");
      }

      if (this.__NPO__ !== 0) {
        throw TypeError("Not a promise");
      } // instance shadowing the inherited "brand"
      // to signal an already "initialized" promise


      this.__NPO__ = 1;
      var def = new MakeDef(this);

      this["then"] = function then(success, failure) {
        var o = {
          success: typeof success == "function" ? success : true,
          failure: typeof failure == "function" ? failure : false
        }; // Note: `then(..)` itself can be borrowed to be used against
        // a different promise constructor for making the chained promise,
        // by substituting a different `this` binding.

        o.promise = new this.constructor(function extractChain(resolve, reject) {
          if (typeof resolve != "function" || typeof reject != "function") {
            throw TypeError("Not a function");
          }

          o.resolve = resolve;
          o.reject = reject;
        });
        def.chain.push(o);

        if (def.state !== 0) {
          schedule(notify, def);
        }

        return o.promise;
      };

      this["catch"] = function $catch$(failure) {
        return this.then(void 0, failure);
      };

      try {
        executor.call(void 0, function publicResolve(msg) {
          resolve.call(def, msg);
        }, function publicReject(msg) {
          reject.call(def, msg);
        });
      } catch (err) {
        reject.call(def, err);
      }
    }

    var PromisePrototype = builtInProp({}, "constructor", Promise,
    /*configurable=*/
    false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

    Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

    builtInProp(PromisePrototype, "__NPO__", 0,
    /*configurable=*/
    false);
    builtInProp(Promise, "resolve", function Promise$resolve(msg) {
      var Constructor = this; // spec mandated checks
      // note: best "isPromise" check that's practical for now

      if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
        return msg;
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        resolve(msg);
      });
    });
    builtInProp(Promise, "reject", function Promise$reject(msg) {
      return new this(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        reject(msg);
      });
    });
    builtInProp(Promise, "all", function Promise$all(arr) {
      var Constructor = this; // spec mandated checks

      if (ToString.call(arr) != "[object Array]") {
        return Constructor.reject(TypeError("Not an array"));
      }

      if (arr.length === 0) {
        return Constructor.resolve([]);
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        var len = arr.length,
            msgs = Array(len),
            count = 0;
        iteratePromises(Constructor, arr, function resolver(idx, msg) {
          msgs[idx] = msg;

          if (++count === len) {
            resolve(msgs);
          }
        }, reject);
      });
    });
    builtInProp(Promise, "race", function Promise$race(arr) {
      var Constructor = this; // spec mandated checks

      if (ToString.call(arr) != "[object Array]") {
        return Constructor.reject(TypeError("Not an array"));
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        iteratePromises(Constructor, arr, function resolver(idx, msg) {
          resolve(msg);
        }, reject);
      });
    });
    return Promise;
  });
});
/**
 * @module lib/callbacks
 */

var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */

function storeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!(name in playerCallbacks)) {
    playerCallbacks[name] = [];
  }

  playerCallbacks[name].push(callback);
  callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */


function getCallbacks(player, name) {
  var playerCallbacks = callbackMap.get(player.element) || {};
  return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */


function removeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!playerCallbacks[name]) {
    return true;
  } // If no callback is passed, remove all callbacks for the event


  if (!callback) {
    playerCallbacks[name] = [];
    callbackMap.set(player.element, playerCallbacks);
    return true;
  }

  var index = playerCallbacks[name].indexOf(callback);

  if (index !== -1) {
    playerCallbacks[name].splice(index, 1);
  }

  callbackMap.set(player.element, playerCallbacks);
  return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */


function shiftCallbacks(player, name) {
  var playerCallbacks = getCallbacks(player, name);

  if (playerCallbacks.length < 1) {
    return false;
  }

  var callback = playerCallbacks.shift();
  removeCallback(player, name, callback);
  return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */


function swapCallbacks(oldElement, newElement) {
  var playerCallbacks = callbackMap.get(oldElement);
  callbackMap.set(newElement, playerCallbacks);
  callbackMap.delete(oldElement);
}
/**
 * @module lib/embed
 */


var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */

function getOEmbedParameters(element) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return oEmbedParameters.reduce(function (params, param) {
    var value = element.getAttribute("data-vimeo-".concat(param));

    if (value || value === '') {
      params[param] = value === '' ? 1 : value;
    }

    return params;
  }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */


function createEmbed(_ref, element) {
  var html = _ref.html;

  if (!element) {
    throw new TypeError('An element must be provided');
  }

  if (element.getAttribute('data-vimeo-initialized') !== null) {
    return element.querySelector('iframe');
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  element.appendChild(div.firstChild);
  element.setAttribute('data-vimeo-initialized', 'true');
  return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */


function getOEmbedData(videoUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    if (!isVimeoUrl(videoUrl)) {
      throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
    }

    var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
      }
    }

    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 404) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
        return;
      }

      if (xhr.status === 403) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
        return;
      }

      try {
        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

        if (json.domain_status_code === 403) {
          // We still want to create the embed to give users visual feedback
          createEmbed(json, element);
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }

        resolve(json);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      var status = xhr.status ? " (".concat(xhr.status, ")") : '';
      reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
    };

    xhr.send();
  });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */


function initializeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error creating an embed: ".concat(error));
    }
  };

  elements.forEach(function (element) {
    try {
      // Skip any that have data-vimeo-defer
      if (element.getAttribute('data-vimeo-defer') !== null) {
        return;
      }

      var params = getOEmbedParameters(element);
      var url = getVimeoUrl(params);
      getOEmbedData(url, params, element).then(function (data) {
        return createEmbed(data, element);
      }).catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */


function resizeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document; // Prevent execution if users include the player.js script multiple times.

  if (window.VimeoPlayerResizeEmbeds_) {
    return;
  }

  window.VimeoPlayerResizeEmbeds_ = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    } // 'spacechange' is fired only on embeds with cards


    if (!event.data || event.data.event !== 'spacechange') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow !== event.source) {
        continue;
      } // Change padding-bottom of the enclosing div to accommodate
      // card carousel without distorting aspect ratio


      var space = iframes[i].parentElement;
      space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
      break;
    }
  };

  if (window.addEventListener) {
    window.addEventListener('message', onMessage, false);
  } else if (window.attachEvent) {
    window.attachEvent('onmessage', onMessage);
  }
}
/**
 * @module lib/postmessage
 */

/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */


function parseMessageData(data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // If the message cannot be parsed, throw the error as a warning
      console.warn(error);
      return {};
    }
  }

  return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */


function postMessage(player, method, params) {
  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
    return;
  }

  var message = {
    method: method
  };

  if (params !== undefined) {
    message.value = params;
  } // IE 8 and 9 do not support passing messages, so stringify them


  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

  if (ieVersion >= 8 && ieVersion < 10) {
    message = JSON.stringify(message);
  }

  player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */


function processData(player, data) {
  data = parseMessageData(data);
  var callbacks = [];
  var param;

  if (data.event) {
    if (data.event === 'error') {
      var promises = getCallbacks(player, data.data.method);
      promises.forEach(function (promise) {
        var error = new Error(data.data.message);
        error.name = data.data.name;
        promise.reject(error);
        removeCallback(player, data.data.method, promise);
      });
    }

    callbacks = getCallbacks(player, "event:".concat(data.event));
    param = data.data;
  } else if (data.method) {
    var callback = shiftCallbacks(player, data.method);

    if (callback) {
      callbacks.push(callback);
      param = data.value;
    }
  }

  callbacks.forEach(function (callback) {
    try {
      if (typeof callback === 'function') {
        callback.call(player, param);
        return;
      }

      callback.resolve(param);
    } catch (e) {// empty
    }
  });
}

var playerMap = new WeakMap();
var readyMap = new WeakMap();

var Player =
/*#__PURE__*/
function () {
  /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
  function Player(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Player);
    /* global jQuery */


    if (window.jQuery && element instanceof jQuery) {
      if (element.length > 1 && window.console && console.warn) {
        console.warn('A jQuery object with multiple elements was passed, using the first element.');
      }

      element = element[0];
    } // Find an element by ID


    if (typeof document !== 'undefined' && typeof element === 'string') {
      element = document.getElementById(element);
    } // Not an element!


    if (!isDomElement(element)) {
      throw new TypeError('You must pass either a valid element or a valid id.');
    }

    var win = element.ownerDocument.defaultView; // Already initialized an embed in this div, so grab the iframe

    if (element.nodeName !== 'IFRAME') {
      var iframe = element.querySelector('iframe');

      if (iframe) {
        element = iframe;
      }
    } // iframe url is not a Vimeo url


    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
      throw new Error('The player element passed isn’t a Vimeo embed.');
    } // If there is already a player object in the map, return that


    if (playerMap.has(element)) {
      return playerMap.get(element);
    }

    this.element = element;
    this.origin = '*';
    var readyPromise = new npo_src(function (resolve, reject) {
      var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
          return;
        }

        if (_this.origin === '*') {
          _this.origin = event.origin;
        }

        var data = parseMessageData(event.data);
        var isError = data && data.event === 'error';
        var isReadyError = isError && data.data && data.data.method === 'ready';

        if (isReadyError) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          reject(error);
          return;
        }

        var isReadyEvent = data && data.event === 'ready';
        var isPingResponse = data && data.method === 'ping';

        if (isReadyEvent || isPingResponse) {
          _this.element.setAttribute('data-ready', 'true');

          resolve();
          return;
        }

        processData(_this, data);
      };

      if (win.addEventListener) {
        win.addEventListener('message', onMessage, false);
      } else if (win.attachEvent) {
        win.attachEvent('onmessage', onMessage);
      }

      if (_this.element.nodeName !== 'IFRAME') {
        var params = getOEmbedParameters(element, options);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function (data) {
          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
          // but store reference to the original element

          _this.element = iframe;
          _this._originalElement = element;
          swapCallbacks(element, iframe);
          playerMap.set(_this.element, _this);
          return data;
        }).catch(reject);
      }
    }); // Store a copy of this Player in the map

    readyMap.set(this, readyPromise);
    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
    // the player is already ready.

    if (this.element.nodeName === 'IFRAME') {
      postMessage(this, 'ping');
    }

    return this;
  }
  /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */


  _createClass(Player, [{
    key: "callMethod",
    value: function callMethod(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new npo_src(function (resolve, reject) {
        // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return
        return _this2.ready().then(function () {
          storeCallback(_this2, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this2, name, args);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return

        return _this3.ready().then(function () {
          storeCallback(_this3, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this3, name);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'set');

        if (value === undefined || value === null) {
          throw new TypeError('There must be a value to set.');
        } // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return


        return _this4.ready().then(function () {
          storeCallback(_this4, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this4, name, value);
        }).catch(reject);
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */

  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (!callback) {
        throw new TypeError('You must pass a callback function.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var callbacks = getCallbacks(this, "event:".concat(eventName));

      if (callbacks.length === 0) {
        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }

      storeCallback(this, "event:".concat(eventName), callback);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */

  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (callback && typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

      if (lastCallback) {
        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id successfully loaded.
     * @reject {TypeError} The id was not a number.
     */

    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|object} options The id of the video or an object with embed options.
     * @return {LoadVideoPromise}
     */

  }, {
    key: "loadVideo",
    value: function loadVideo(options) {
      return this.callMethod('loadVideo', options);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */

    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */

  }, {
    key: "ready",
    value: function ready() {
      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
        reject(new Error('Unknown player. Probably unloaded.'));
      });
      return npo_src.resolve(readyPromise);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */

  }, {
    key: "addCuePoint",
    value: function addCuePoint(time) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.callMethod('addCuePoint', {
        time: time,
        data: data
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */

  }, {
    key: "removeCuePoint",
    value: function removeCuePoint(id) {
      return this.callMethod('removeCuePoint', id);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */

    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */

    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */

  }, {
    key: "enableTextTrack",
    value: function enableTextTrack(language, kind) {
      if (!language) {
        throw new TypeError('You must pass a language.');
      }

      return this.callMethod('enableTextTrack', {
        language: language,
        kind: kind
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */

    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */

  }, {
    key: "disableTextTrack",
    value: function disableTextTrack() {
      return this.callMethod('disableTextTrack');
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */

    /**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.callMethod('pause');
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */

    /**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */

  }, {
    key: "play",
    value: function play() {
      return this.callMethod('play');
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */

    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */

  }, {
    key: "unload",
    value: function unload() {
      return this.callMethod('unload');
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      return new npo_src(function (resolve) {
        readyMap.delete(_this5);
        playerMap.delete(_this5.element);

        if (_this5._originalElement) {
          playerMap.delete(_this5._originalElement);

          _this5._originalElement.removeAttribute('data-vimeo-initialized');
        }

        if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
          _this5.element.parentNode.removeChild(_this5.element);
        }

        resolve();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */

  }, {
    key: "getAutopause",
    value: function getAutopause() {
      return this.get('autopause');
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */

  }, {
    key: "setAutopause",
    value: function setAutopause(autopause) {
      return this.set('autopause', autopause);
    }
    /**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     */

    /**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */

  }, {
    key: "getBuffered",
    value: function getBuffered() {
      return this.get('buffered');
    }
    /**
     * A promise to get the color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */

    /**
     * Get the color for this player.
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.get('color');
    }
    /**
     * A promise to set the color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.set('color', color);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */

    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */

  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      return this.get('cuePoints');
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */

    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.get('currentTime');
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     */

    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(currentTime) {
      return this.set('currentTime', currentTime);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */

    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.get('duration');
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */

    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */

  }, {
    key: "getEnded",
    value: function getEnded() {
      return this.get('ended');
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */

    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getLoop",
    value: function getLoop() {
      return this.get('loop');
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */

    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      return this.set('loop', loop);
    }
    /**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     */

    /**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */

  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      return this.set('muted', muted);
    }
    /**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     */

    /**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */

  }, {
    key: "getMuted",
    value: function getMuted() {
      return this.get('muted');
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */

    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getPaused",
    value: function getPaused() {
      return this.get('paused');
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
     */

    /**
     * Get the playback rate of the player on a scale from `0.5` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.get('playbackRate');
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
     */

    /**
     * Set the playback rate of the player on a scale from `0.5` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(playbackRate) {
      return this.set('playbackRate', playbackRate);
    }
    /**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     */

    /**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */

  }, {
    key: "getPlayed",
    value: function getPlayed() {
      return this.get('played');
    }
    /**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     */

    /**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */

  }, {
    key: "getSeekable",
    value: function getSeekable() {
      return this.get('seekable');
    }
    /**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     */

    /**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */

  }, {
    key: "getSeeking",
    value: function getSeeking() {
      return this.get('seeking');
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */

    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */

  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      return this.get('textTracks');
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */

    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */

  }, {
    key: "getVideoEmbedCode",
    value: function getVideoEmbedCode() {
      return this.get('videoEmbedCode');
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */

    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */

  }, {
    key: "getVideoId",
    value: function getVideoId() {
      return this.get('videoId');
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */

    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */

  }, {
    key: "getVideoTitle",
    value: function getVideoTitle() {
      return this.get('videoTitle');
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */

    /**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */

  }, {
    key: "getVideoWidth",
    value: function getVideoWidth() {
      return this.get('videoWidth');
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */

    /**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */

  }, {
    key: "getVideoHeight",
    value: function getVideoHeight() {
      return this.get('videoHeight');
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     */

    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */

  }, {
    key: "getVideoUrl",
    value: function getVideoUrl() {
      return this.get('videoUrl');
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */

    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.get('volume');
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */

    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return this.set('volume', volume);
    }
  }]);

  return Player;
}(); // Setup embed only if this is not a node environment


if (!isNode) {
  initializeEmbeds();
  resizeEmbeds();
}

var _default = Player;
exports.default = _default;
},{}],"assets/scripts/data/hotspots.json":[function(require,module,exports) {
module.exports = {
  "video": {
    "id": "349732290",
    "params": "?loop=1&autoplay=1&background=1&mute=0&quality=360p",
    "length": "30000"
  },
  "hotspots": [{
    "isVisible": true,
    "pulseRate": 500,
    "id": "hspt1",
    "item": "product_sweater.jpg",
    "image": "https://raw.githubusercontent.com/aareid10/aareid10.github.io/master/shoppable/video/banner/assets/media/imgs/product_separates.jpg",
    "url": "https://belk.com",
    "polarity": "bot",
    "styles": {
      "top": "20%",
      "left": "60%",
      "animation-duration": "1500ms",
      "background-image": "url('https://raw.githubusercontent.com/aareid10/aareid10.github.io/master/shoppable/video/banner/assets/media/imgs/pulse.png')",
      "height": "35px",
      "width": "35px",
      "box-shadow": "0 0 35px white"
    },
    "meta": {
      "description": "Belk Suit Separates",
      "brand": "Belk™",
      "price": "$24.99",
      "sale": false
    },
    "lifecycle": [{
      "inactive": 0
    }, {
      "active": 1500
    }, {
      "inactive": 12000
    }, {
      "active": 14000
    }, {
      "inactive": 30000
    }]
  }, {
    "isVisible": true,
    "pulseRate": 550,
    "id": "hspt2",
    "item": "product_shoes.jpg",
    "image": "https://raw.githubusercontent.com/aareid10/aareid10.github.io/master/shoppable/video/banner/assets/media/imgs/product_shoes.jpg",
    "url": "https://belk.com",
    "polarity": "top",
    "meta": {
      "description": "Belk Leather Shoes",
      "brand": "Belk™",
      "price": "$79.96",
      "sale": true
    },
    "styles": {
      "top": "80%",
      "left": "57.5%",
      "animation-duration": "1550ms",
      "background-image": "url('https://raw.githubusercontent.com/aareid10/aareid10.github.io/master/shoppable/video/banner/assets/media/imgs/pulse.png')",
      "height": "35px",
      "width": "35px",
      "box-shadow": "0 0 35px white"
    },
    "lifecycle": [{
      "inactive": 0
    }, {
      "active": 1500
    }, {
      "inactive": 9000
    }, {
      "active": 22320
    }, {
      "inactive": 30000
    }]
  }, {
    "isVisible": false,
    "pulseRate": 600,
    "id": "hspt3",
    "item": "product_pants.jpg",
    "image": "https://raw.githubusercontent.com/aareid10/aareid10.github.io/master/shoppable/video/banner/assets/media/imgs/product_pants.jpg",
    "url": "https://belk.com",
    "polarity": "bot",
    "meta": {
      "description": "Belk Dress Pants",
      "brand": "Belk™",
      "price": "$27.99",
      "sale": false
    },
    "styles": {
      "top": "60%",
      "left": "60%",
      "animation-duration": "1600ms",
      "background-image": "url('https://raw.githubusercontent.com/aareid10/aareid10.github.io/master/shoppable/video/banner/assets/media/imgs/pulse.png')",
      "height": "35px",
      "width": "35px",
      "box-shadow": "0 0 35px white"
    },
    "lifecycle": [{
      "inactive": 0
    }, {
      "active": 1500
    }, {
      "inactive": 11000
    }, {
      "active": 18000
    }, {
      "inactive": 30000
    }]
  }]
};
},{}],"node_modules/typeit/dist/typeit.min.js":[function(require,module,exports) {
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
},{}],"assets/scripts/classes/timekeepers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer = exports.RecurringTimer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecurringTimer = function RecurringTimer(callback, delay) {
  _classCallCheck(this, RecurringTimer);

  var timerId;
  var start;
  var remaining = delay;

  this.pause = function () {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  var resume = function resume() {
    start = new Date();
    timerId = window.setTimeout(function () {
      remaining = delay;
      resume();
      callback();
    }, remaining);
  };

  this.resume = resume;
};

exports.RecurringTimer = RecurringTimer;

var Timer = function Timer(callback, delay) {
  _classCallCheck(this, Timer);

  var timerId;
  var start;
  var remaining = delay;

  this.pause = function () {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function () {
    start = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
};

exports.Timer = Timer;
},{}],"assets/scripts/classes/shopHotspot.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeit = _interopRequireDefault(require("typeit"));

var _hotspots = _interopRequireDefault(require("../data/hotspots.json"));

var _state = _interopRequireDefault(require("../states/state.global"));

var _timekeepers = require("./timekeepers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShopHotspot =
/*#__PURE__*/
function () {
  /**
   * The ShopHotspot Class.
   * Property (constructor) in ShopHotspot which creates the class object. This module manages the ShopHotspot logic. This module requires the modules {@link module:StateGlobal} {@link module:TypeIt}.
   * @classdesc This is a description of the ShopHotspot class.
   * @member {Function} ShopHotspot
   * @access public
   * @constructs
   * @requires module:StateGlobal
   * @requires module:TypeIt
   * @param {null} None no parameter
   * @example
   * new ShopHotspot()
   * @returns {Class} ShopHotspot
   * @throws will never throw an error.
   * @property {object}  ShopHotspot.state        						  - ShopHotspot state object
   * @property {number}  ShopHotspot.state.initDrawDelay       - ShopHotspot init Draw Delay
   * @property {number}  ShopHotspot.state.cycleDelay        	- ShopHotspot cycle Delay
   * @property {number}  ShopHotspot.state.cycleDuration       - ShopHotspot cycle Duration
   * @property {number}  ShopHotspot.state.panelDisplayDelay   - ShopHotspot panel Display Delay
   * @property {object}  ShopHotspot.state.hooks        			  - ShopHotspot DOM elements
   * @property {element}  ShopHotspot.state.hooks.panel       	- DOM element for shopHotspot panel
   * @property {element}  ShopHotspot.state.hooks.product      - DOM element for shopHotspot product element
   * @property {element}  ShopHotspot.state.hooks.description 	- DOM element for shopHotspot product description
   * @property {element}  ShopHotspot.state.hooks.brand       	- DOM element for shopHotspot product brand
   * @property {element}  ShopHotspot.state.hooks.price       	- DOM element for shopHotspot product price
   * @property {element}  ShopHotspot.state.hooks.sale         - DOM element for shopHotspot product price sale attribute
   * @property {element}  ShopHotspot.state.hooks.link         - DOM element for shopHotspot link
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|https://code.espn.com/CreativeWorks-Internal/creativeworks-templates/tree/master/ads/vertical-shoppable-banner|GitHub Repo}
   * @since 1.0.0
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
      app: document.querySelector('#shopunit'),
      panel: document.querySelector('#shop__panel'),
      product: document.querySelector('#shop__panel_product'),
      description: document.querySelector('#shop__panel_description'),
      brand: document.querySelector('#shop__panel_brand'),
      price: document.querySelector('#shop__panel_pricing #price'),
      sale: document.querySelector('#shop__panel_pricing #sale'),
      link: document.querySelector('#shop__panel_cta a')
    };
    window.lifecycles = {};
  }
  /**
   * Property (parse) in ShopHotspot which parses the hotspot data from a variety of sources. This will get data from a remote URL, a global object, or an embedded object within the source.
   * @function parse
   * @memberof ShopHotspot
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
     * Property (populate) in ShopHotspot which populates hotspots into the DOM based on the parsed hotspot data.
     * @function populate
     * @memberof ShopHotspot
     * @access public
     * @param {Class} ShopHotspot
     * @example
     * ShopHotspot.populate()
     * @returns {Class} ShopHotspot
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "populate",
    value: function populate() {
      var _this2 = this;

      this.state.hotspotList.hotspots.map(function (hotspot, index) {
        setTimeout(function () {
          _this2.generate('hotspot', "hotspot".concat(index), hotspot.id, hotspot.polarity, hotspot.styles, hotspot.image, hotspot.url, JSON.stringify(hotspot.lifecycle), JSON.stringify(hotspot.meta));
        }, hotspot.pulseRate * Math.floor(Math.random() * _this2.state.hotspotList.hotspots.length));
      });
      return this;
    }
    /**
     * Property (generate) in ShopHotspot which generates the inner-workings and respective logic of each hotspot.
     * @function generate
     * @memberof ShopHotspot
     * @access public
     * @param {Class} ShopHotspot
     * @example
     * ShopHotspot.generate('hotspot', hotspot${index}`, hotspot.id, hotspot.polarity, hotspot.styles, hotspot.image, hotspot.url, JSON.stringify(hotspot.meta))
     * @returns {null} no return value
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "generate",
    value: function generate(className, id, key, polarity, style, image, url, lifecycle, meta) {
      var _this3 = this;

      var hotspot = document.createElement('div');
      hotspot.className = className;
      hotspot.id = id;
      hotspot.key = key;
      hotspot.dataset.image = image;
      hotspot.dataset.url = url;
      hotspot.dataset.meta = meta;
      hotspot.dataset.polarity = polarity;
      hotspot.dataset.lifecycle = lifecycle;

      hotspot.onclick = function (event) {
        var self = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this3;
        meta = JSON.parse(hotspot.dataset.meta);
        self.state.hooks.link.href = hotspot.dataset.url;
        self.state.hooks.product.alt = [hotspot.dataset.image.match(/[a-z]+.png/g)];
        self.state.hooks.product.src = hotspot.dataset.image;
        self.state.hooks.brand.innerText = meta.brand;
        self.state.hooks.price.innerText = meta.price;
        self.state.hooks.sale.innerText = meta.sale ? 'Sale' : '';
        self.state.hooks.app.classList.add('banner--paused');

        _this3.animatePanel(hotspot);

        _this3.animateProduct();

        player.pause();
        Object.keys(window.lifecycles).map(function (timer) {
          window.lifecycles["".concat(timer)].pause();
        });
      };

      this.lifecycle(hotspot.id, hotspot);
      Object.keys(style).map(function (rule) {
        return hotspot.style["".concat(rule)] = style["".concat(rule)];
      });
      document.querySelector('#shop__hotspots').appendChild(hotspot);
    }
    /**
     *  Property (lifecycle) in ShopHotspot which controlls the lifecycle of each hotspot.
     * @memberof ShopHotspot
     * @param  {type} hotspot A shop hotspot.
     * @returns {null} no return value
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "lifecycle",
    value: function lifecycle(id, hotspot) {
      JSON.parse(hotspot.dataset.lifecycle).map(function (cycle, idx) {
        switch (Object.keys(cycle)[0]) {
          case 'active':
            window.lifecycles["hotspot".concat(hotspot.id, "_timerA").concat(idx)] = new _timekeepers.Timer(function () {
              hotspot.style.display = 'block';
            }, cycle.active);
            break;

          case 'inactive':
            window.lifecycles["hotspot".concat(hotspot.id, "_timerA").concat(idx)] = new _timekeepers.Timer(function () {
              hotspot.style.display = 'none';
            }, cycle.inactive);
            break;

          default:
        }
      });
    }
    /**
     * Property (checkPanel) in ShopHotspot which checks if the panel is open.
     * @function checkPanel
     * @memberof ShopHotspot
     * @access public
     * @param {null} None
     * @example
     * ShopHotspot.
     * @returns {Boolean} returns boolean
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "checkPanel",
    value: function checkPanel() {
      return this.state.hooks.panel.className.match('open') === null;
    }
    /**
     * Property (checkProduct) in ShopHotspot which checks to if the product has been shown.
     * @function checkProduct
     * @memberof ShopHotspot
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopHotspot.checkProduct()
     * @returns {Boolean} returns boolean
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "checkProduct",
    value: function checkProduct() {
      return this.state.hooks.panel.className === 'opened';
    }
    /**
     * Property (checkPolarity) in ShopHotspot which checks the polarity of the hotspot.
     * @function checkPolarity
     * @memberof ShopHotspot
     * @access public
     * @param {Object} hotspot hotspot data object
     * @example
     * ShopHotspot.checkPolarity()
     * @returns {Boolean} returns boolean
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "checkPolarity",
    value: function checkPolarity(hotspot) {
      return hotspot.dataset.polarity === 'bot';
    }
    /**
     * Property (animatePanel) in ShopHotspot which triggers the panel animation.
     * @function animatePanel
     * @memberof ShopHotspot
     * @access public
     * @param {Object} hotspot hotspot data object
     * @example
     * ShopHotspot.animatePanel()
     * @returns {null} no return value
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "animatePanel",
    value: function animatePanel(hotspot) {
      setTimeout(this.updatePanel(hotspot), this.state.panelDisplayDelay);
      new _typeit.default('#shop__panel_description', {
        strings: [JSON.parse(hotspot.dataset.meta).description],
        speed: 10,
        loop: false,
        cursor: false,
        startDelay: this.state.panelTypeDelay
      }).go();
    }
    /**
     * Property (animateProduct) in ShopHotspot which triggers the product animation.
     * @function animateProduct
     * @memberof ShopHotspot
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopHotspot.animateProduct()
     * @returns {null} no return value
     * @throws will never throw an error.
     * @since 1.0.0
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
     * Property (animateProductOn) in ShopHotspot which triggers the 'ProductOn' state.
     * @function animateProductOn
     * @memberof ShopHotspot
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopHotspot.animateProductOn()
     * @returns {null} no return value
     * @throws will never throw an error.
     * @since 1.0.0
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
     * Property (animateProductOff) in ShopHotspot which triggers the 'ProductOff' state.
     * @function animateProductOff
     * @memberof ShopHotspot
     * @access public
     * @param {null} None no parameter
     * @example
     * ShopHotspot.animateProductOff()
     * @returns {null} no return value
     * @throws will never throw an error.
     * @since 1.0.0
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
     * Property (updatePanel) in ShopHotspot which triggers the 'updatePanel' state.
     * @function updatePanel
     * @memberof ShopHotspot
     * @access public
     * @param {object} hotspot hotspot data object
     * @example
     * ShopHotspot.updatePanel()
     * @returns {null} no return value
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "updatePanel",
    value: function updatePanel(hotspot) {
      this.state.hooks.panel.className = this.checkPanel() ? this.checkPolarity(hotspot) ? 'open-bottom' : 'open-top' : this.state.hooks.panel.className;
    }
  }]);

  return ShopHotspot;
}();

exports.default = ShopHotspot;
},{"typeit":"node_modules/typeit/dist/typeit.min.js","../data/hotspots.json":"assets/scripts/data/hotspots.json","../states/state.global":"assets/scripts/states/state.global.js","./timekeepers":"assets/scripts/classes/timekeepers.js"}],"assets/scripts/classes/shopPanel.js":[function(require,module,exports) {
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
   * The ShopPanel Class.
   * Property (constructor) in ShopPanel which creates the class object. This class manages the ShopPanel logic. This module requires the modules {@link module:StateGlobal}
   * @classdesc This is a description of the ShopPanel class.
   * @member {Function} ShopPanel
   * @access public
   * @constructs
   * @requires module:StateGlobal
   * @param {null} None no parameter
   * @example
   * new ShopPanel()
   * @returns {Class} ShopPanel
   * @property {object}  ShopPanel.state        						- ShopPanel state object
   * @property {number}  ShopPanel.state.initDrawDelay      - ShopPanel init Draw Delay
   * @property {number}  ShopPanel.state.cycleDelay        	- ShopPanel cycle Delay
   * @property {number}  ShopPanel.state.cycleDuration      - ShopPanel cycle Duration
   * @property {number}  ShopPanel.state.panelDisplayDelay  - ShopPanel panel Display Delay
   * @property {object}  ShopPanel.state.hooks        			- ShopPanel DOM elements
   * @property {element}  ShopPanel.state.hooks.panel       - DOM element for shopPanel
   * @property {element}  ShopPanel.state.hooks.close       - DOM element for shopPanel close button
   * @property {element}  ShopPanel.state.hooks.cta        	- DOM element for shopPanel cta
   * @property {element}  ShopPanel.state.hooks.link        - DOM element for shopPanel cta link
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|https://code.espn.com/CreativeWorks-Internal/creativeworks-templates/tree/master/ads/vertical-shoppable-banner|GitHub Repo}
   * @since 1.0.0
   */
  function ShopPanel() {
    _classCallCheck(this, ShopPanel);

    this.state = {};
    this.state.initDrawDelay = _state.default.timing.initDrawDelay;
    this.state.cycleDelay = window.cycleDelay || _state.default.timing.cycleDelay;
    this.state.cycleDuration = window.cycleDuration || _state.default.timing.cycleDuration;
    this.state.panelDisplayDelay = window.panelDisplayDelay || _state.default.timing.panelDisplayDelay;
    this.state.hooks = {
      app: document.querySelector('#shopunit'),
      panel: document.querySelector('#shop__panel'),
      close: document.querySelector('#shop__panel_close'),
      cta: document.querySelector('#shop__panel_cta'),
      link: document.querySelector('#shop__panel_cta a')
    };
  }
  /**
   * Property (handler) in ShopPanel which manages the event ShopPanel event handlers.
   * @function handler
   * @memberof ShopPanel
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
     * Property (handleCta) in ShopPanel which registers the cta event handler.
     * @function handleCta
     * @memberof ShopPanel
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
     * Property (handleClose) in ShopPanel which registers the close event handler.
     * @function handleClose
     * @memberof ShopPanel
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
      Object.keys(window.lifecycles).map(function (timer) {
        window.lifecycles["".concat(timer)].resume();
      });
      this.state.hooks.app.classList.remove('banner--paused');
      player.play();
    }
    /**
     * Property (resolveCta) in ShopPanel which triggers the cta resolve state.
     * @function resolveCta
     * @memberof ShopPanel
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
     * Property (resolveClose) in ShopPanel which triggers the close resolve state.
     * @function resolveClose
     * @memberof ShopPanel
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
     * Property (checkPanel) in ShopPanel which checks if the panel is open.
     * @function checkPanel
     * @memberof ShopPanel
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
     * Property (checkPolarity) in ShopPanel which checks the polarity of the hotspot.
     * @function checkPolarity
     * @memberof ShopPanel
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
     * Property (checkCta) in ShopPanel which checks the state of the cta animation.
     * @function checkCta
     * @memberof ShopPanel
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
     * Property (checkClose) in ShopPanel which checks the state of the close animation.
     * @function checkClose
     * @memberof ShopPanel
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
},{"../states/state.global":"assets/scripts/states/state.global.js"}],"assets/scripts/classes/shopPlayer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _player = _interopRequireDefault(require("@vimeo/player"));

var _state = _interopRequireDefault(require("../states/state.global"));

var _hotspots = _interopRequireDefault(require("../data/hotspots.json"));

var _shopHotspot = _interopRequireDefault(require("./shopHotspot"));

var _shopPanel = _interopRequireDefault(require("./shopPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShopPlayer =
/*#__PURE__*/
function () {
  /**
   * Property (constructor) in ShopPlayer which creates the class object.
   * @classdesc This is a description of the ShopPlayer class. This module manages the ShopHotspot logic. This module requires the modules {@link module:StateGlobal} {@link module:ShopHotspots}.
   * @member {Function} ShopPlayer
   * @constructs
   * @requires module:@vimeo/player
   * @requires module:StateGlobal
   * @requires module:ShopHotspot
   * @param {null} None no parameter
   * @example
   * new ShopPlayer()
   * @returns {Class} ShopPlayer
   * @property {object}  ShopPlayer.state  - ShopHotspot state object
   * @author Alex Reid <https://github.com/aareid10>
   * @see {@link http://github.com|https://code.espn.com/CreativeWorks-Internal/creativeworks-templates/tree/master/ads/vertical-shoppable-banner|GitHub Repo}
   * @since 1.0.0
   */
  function ShopPlayer() {
    _classCallCheck(this, ShopPlayer);

    this.state = {
      host: 'https://player.vimeo.com/video/',
      ready: new Event('vimeoplayer--ready')
    };
    this.state.hotspotList = window.hotspotsURL || window.hotspots || _hotspots.default;
    this.hooks = {
      vimeoplayer: document.querySelector('#shop__bg__player'),
      app: document.querySelector('#shopunit')
    };
  }
  /**
   * The initialize property. This sets up the background player.
   * @memberof ShopPlayer
   * @param {null} None no parameter
   * @return {null} None no parameter
   * @throws will never throw an error.
   * @since 1.0.0
   */


  _createClass(ShopPlayer, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      /**
       * vimeoplayer Listener - description.
       * @method
       * @param {module:ShopPlayer~event:vimeoplayer--ready} e - An Status event.
       * @listens module:ShopPlayer~event:vimeoplayer--ready
       * @since 1.0.0
       */
      this.hooks.vimeoplayer.addEventListener('vimeoplayer--ready', function (e) {
        setTimeout(function () {
          _this.hooks.vimeoplayer.className = 'shop__bg__player--ready';
          return e.data;
        }, 500);
      }, false);
      return this;
    }
    /**
     * The initialize property. This adjusts and runs the background player.
     * @memberof ShopPlayer
     * @param {null} None no parameter
     * @return {null} None no parameter
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "resolve",
    value: function resolve() {
      this.hooks.vimeoplayer.src = this.state.host + this.state.hotspotList.video.id + this.state.hotspotList.video.params;
      window.player = new _player.default(this.hooks.vimeoplayer);
      /**
       * vimeoplayer--ready - Signal that the Vimeo Embed is ready to be displayed.
       * @event vimeoplayer--ready
       * @type {object}
       * @property {object} Vimeo Player Instance - updated property.
       * @since 1.0.0
       */

      this.hooks.vimeoplayer.dispatchEvent(this.state.ready);
      return this;
    }
    /**
     * The reset property. This resets hotspots asssociated with the player.
     * @memberof ShopPlayer
     * @param {null} None no parameter
     * @return {null} None no parameter
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "reset",
    value: function reset() {
      document.querySelectorAll('.hotspot').forEach(function (item) {
        return item.remove();
      });
      setTimeout(function () {
        new _shopHotspot.default().parse().populate();
      }, _state.default.timing.cycleDelay);
      this.state.cycleStart = new Date();
      if (window.shopunit.logging) console.warn('Hotspots Reset');
    }
    /**
     * The execute property. This tracks and maniplulates hotspots lifecycles in relation to the playback duration.
     * @memberof ShopPlayer
     * @param {null} None no parameter
     * @return {null} None no parameter
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "execute",
    value: function execute() {
      var _this2 = this;

      this.state.cycleStart = new Date();
      new _shopHotspot.default().parse().populate();
      new _shopPanel.default().handler();
      setInterval(function () {
        if (!_this2.isPaused()) {
          if (window.shopunit.logging) console.warn("video not paused. time remaining ".concat(_this2.state.remaining, ". waiting...."));
          _this2.state.remaining = _this2.checkInterval();

          if (_this2.isFinshed()) {
            _this2.reset();

            if (window.shopunit.logging) console.warn('resetting....');
          }
        } else {
          if (window.shopunit.logging) console.warn("video still paused. time remaining ".concat(_this2.state.remaining, " waiting...."));
          _this2.state.cycleStart = new Date(Date.now() - (_hotspots.default.video.length - _this2.state.remaining));
        }
      }, _state.default.timing.cycleDelay);
    }
    /**
     * The isPaused property. This adjusts and runs the background player.
     * @memberof ShopPlayer
     * @param {null} None no parameter
     * @return {null}  whether or not the player is currently paused.
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "isPaused",
    value: function isPaused() {
      return this.hooks.app.classList.contains('banner--paused');
    }
    /**
     * The isFinshed property. This adjusts and runs the background player.
     * @memberof ShopPlayer
     * @param {null} None no parameter
     * @return {Boolean} whether or not the total playback time has been reached.
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "isFinshed",
    value: function isFinshed() {
      return this.state.remaining <= 0;
    }
    /**
     * The checkInterval property. This adjusts and runs the background player.
     * @memberof ShopPlayer
     * @param {null} None no parameter
     * @return {Number} Time remaining for the main player in milliseconds.
     * @throws will never throw an error.
     * @since 1.0.0
     */

  }, {
    key: "checkInterval",
    value: function checkInterval() {
      return _hotspots.default.video.length - (new Date() - this.state.cycleStart);
    }
  }]);

  return ShopPlayer;
}();

exports.default = ShopPlayer;
},{"@vimeo/player":"node_modules/@vimeo/player/dist/player.es.js","../states/state.global":"assets/scripts/states/state.global.js","../data/hotspots.json":"assets/scripts/data/hotspots.json","./shopHotspot":"assets/scripts/classes/shopHotspot.js","./shopPanel":"assets/scripts/classes/shopPanel.js"}],"assets/scripts/modules/app.js":[function(require,module,exports) {
"use strict";

var _state = _interopRequireDefault(require("../states/state.global"));

var _shopPlayer = _interopRequireDefault(require("../classes/shopPlayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var shopunit = {
  app: document.querySelector('#shopunit'),
  flexFonts: document.querySelectorAll('.flexFont'),

  /**
   * Member function (init) in app which manages the app initialization.
   * @function initialize
   * @access public
   * @param {string} macro Ad Macro string
   * @param {element} elem DOM Element
   * @example
   * app.init()
   * @returns {null} no return value
   */
  initialize: function initialize(macro, elem) {
    shopunit.flexFontInit();
    shopunit.flexFontRefresh();
    shopunit.preloadImages();
    shopunit.clickThroughLink(macro, elem);
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
   * Member function (configClickThrough) in app which manages the clickThrough routing logic.
   * @function clickThroughConfig
   * @access public
   * @param {string} url Desired click-through URL.
   * @example
   * app.configClickThrough()
   * @returns {null} no return value
   */
  clickThroughConfig: function clickThroughConfig(url) {
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
   * Member function (linkClickThrough) in app which manages the clickThrough setup logic.
   * @function clickThroughLink
   * @access public
   * @param {string} macro Ad Macro string.
   * @param {element} elem DOM Element
   * @example
   * app.linkClickThrough()
   * @returns {null} no return value
   */
  clickThroughLink: function clickThroughLink(macro, elem) {
    var clickTag = macro;
    var clickArea = document.getElementById(elem);
    if (window.shopunit.logging) console.warn('clickArea:', elem);
    clickArea.addEventListener('click', clickThrough);

    function clickThrough() {
      setTimeout(function () {
        shopunit.clickThroughConfig(clickTag);
      }, _state.default.timing.destinationDelay);
    }
  }
};
window.addEventListener('DOMContentLoaded', function () {
  if (window.shopunit.logging) console.warn('Application Initialized');
  if (window.shopunit.logging) console.warn('Cycle Delay: ', window.cycleDelay || _state.default.timing.cycleDelay);
  if (window.shopunit.logging) console.warn('Cycle Duration: ', window.cycleDuration || _state.default.timing.cycleDuration);
  if (window.shopunit.logging) console.warn('Panel Display Delay: ', window.panelDisplayDelay || _state.default.timing.panelDisplayDelay);
  if (window.shopunit.logging) console.warn('Panel Type Delay: ', window.panelTypeDelay || _state.default.timing.panelTypeDelay);
  if (window.shopunit.logging) console.warn('Product Open Delay: ', window.productOpenDelay || _state.default.timing.productOpenDelay);
  if (window.shopunit.logging) console.warn('Product Resolve Delay: ', window.productResolveDelay || _state.default.timing.productResolveDelay);
  new _shopPlayer.default().initialize().resolve().execute();
});
window.shopunit = shopunit;
window.shopunit.logging = false;
module.exports = shopunit;
},{"../states/state.global":"assets/scripts/states/state.global.js","../classes/shopPlayer":"assets/scripts/classes/shopPlayer.js"}],"../../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56682" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/scripts/modules/app.js"], null)
//# sourceMappingURL=/app.4f1967e4.map