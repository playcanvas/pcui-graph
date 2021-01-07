(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pcui-binding"] = factory();
	else
		root["pcui-binding"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name IBindable
 * @classdesc Provides an interface for getting / setting a value for the Element.
 * @property {*} value - Gets / sets the value of the Element.
 * @property {Array<*>} values - Sets multiple values to the Element. It is up to the Element to determine how to display them.
 */
var IBindable = function IBindable() {
  _classCallCheck(this, IBindable);
};
/**
 * @event
 * @name IBindable#change
 * @description Fired when the value of the Element changes
 * @param {*} value - The new value
 */


/* harmony default export */ __webpack_exports__["a"] = (IBindable);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var l = __webpack_require__(30),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== _typeof(a) && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var e,
      d = {},
      g = null,
      k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) {
      h[m] = arguments[m + 2];
    }

    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) {
    void 0 === d[e] && (d[e] = f[e]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
  var d = _typeof(a);

  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== _typeof(a) ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) {
    d = d.value, f = b + U(d, k++), g += T(d, f, c, e);
  } else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === _typeof(a) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function map(a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function forEach(a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function count(a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function toArray(a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function only(a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

    for (h in b) {
      K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
    }
  }

  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) {
      f[m] = arguments[m + 2];
    }

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return Z().useRef(a);
};

exports.useState = function (a) {
  return Z().useState(a);
};

exports.version = "16.14.0";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "BindingBase", function() { return /* reexport */ binding_base; });
__webpack_require__.d(__webpack_exports__, "BindingElementToObservers", function() { return /* reexport */ binding_element_observers; });
__webpack_require__.d(__webpack_exports__, "BindingObserversToElement", function() { return /* reexport */ binding_observers_element; });
__webpack_require__.d(__webpack_exports__, "BindingTwoWay", function() { return /* reexport */ binding_two_way; });
__webpack_require__.d(__webpack_exports__, "Events", function() { return /* reexport */ events["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "History", function() { return /* reexport */ binding_history; });
__webpack_require__.d(__webpack_exports__, "Observer", function() { return /* reexport */ binding_observer; });
__webpack_require__.d(__webpack_exports__, "ObserverHistory", function() { return /* reexport */ observer_history; });
__webpack_require__.d(__webpack_exports__, "ObserverList", function() { return /* reexport */ observer_list; });

// EXTERNAL MODULE: ./src/binding/events.js
var events = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6);

// CONCATENATED MODULE: ./src/binding/observer.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function Observer(data, options) {
  events["a" /* default */].call(this);
  options = options || {};
  this._destroyed = false;
  this._path = '';
  this._keys = [];
  this._data = {}; // array paths where duplicate entries are allowed - normally
  // we check if an array already has a value before inserting it
  // but if the array path is in here we'll allow it

  this._pathsWithDuplicates = null;

  if (options.pathsWithDuplicates) {
    this._pathsWithDuplicates = {};

    for (var i = 0; i < options.pathsWithDuplicates.length; i++) {
      this._pathsWithDuplicates[options.pathsWithDuplicates[i]] = true;
    }
  }

  this.patch(data);
  this._parent = options.parent || null;
  this._parentPath = options.parentPath || '';
  this._parentField = options.parentField || null;
  this._parentKey = options.parentKey || null;
  this._latestFn = options.latestFn || null;
  this._silent = false;

  var propagate = function propagate(evt) {
    return function (path, arg1, arg2, arg3) {
      if (!this._parent) return;
      var key = this._parentKey;

      if (!key && this._parentField instanceof Array) {
        key = this._parentField.indexOf(this);
        if (key === -1) return;
      }

      path = this._parentPath + '.' + key + '.' + path;
      var state;
      if (this._silent) state = this._parent.silence();

      this._parent.emit(path + ':' + evt, arg1, arg2, arg3);

      this._parent.emit('*:' + evt, path, arg1, arg2, arg3);

      if (this._silent) this._parent.silenceRestore(state);
    };
  }; // propagate set


  this.on('*:set', propagate('set'));
  this.on('*:unset', propagate('unset'));
  this.on('*:insert', propagate('insert'));
  this.on('*:remove', propagate('remove'));
  this.on('*:move', propagate('move'));
} // cache calls to path.split(path, '.')
// as they take considerable time especially during loading
// if there are a lot of observers like entities, assets etc.


Observer._splitPathsCache = {};

Observer._splitPath = function (path) {
  var cache = Observer._splitPathsCache;
  var result = cache[path];

  if (!result) {
    result = path.split('.');
    cache[path] = result;
  } else {
    result = result.slice();
  }

  return result;
};

Observer.prototype = Object.create(events["a" /* default */].prototype);

Observer.prototype.silence = function () {
  this._silent = true; // history hook to prevent array values to be recorded

  var historyState = this.history && this.history.enabled;
  if (historyState) this.history.enabled = false; // sync hook to prevent array values to be recorded as array root already did

  var syncState = this.sync && this.sync.enabled;
  if (syncState) this.sync.enabled = false;
  return [historyState, syncState];
};

Observer.prototype.silenceRestore = function (state) {
  this._silent = false;
  if (state[0]) this.history.enabled = true;
  if (state[1]) this.sync.enabled = true;
};

Observer.prototype._prepare = function (target, key, value, silent, remote) {
  var i;
  var state;
  var path = (target._path ? target._path + '.' : '') + key;

  var type = _typeof(value);

  target._keys.push(key);

  if (type === 'object' && value instanceof Array) {
    target._data[key] = value.slice(0);

    for (i = 0; i < target._data[key].length; i++) {
      if (_typeof(target._data[key][i]) === 'object' && target._data[key][i] !== null) {
        if (target._data[key][i] instanceof Array) {
          target._data[key][i].slice(0);
        } else {
          target._data[key][i] = new Observer(target._data[key][i], {
            parent: this,
            parentPath: path,
            parentField: target._data[key],
            parentKey: null
          });
        }
      } else {
        state = this.silence();
        this.emit(path + '.' + i + ':set', target._data[key][i], null, remote);
        this.emit('*:set', path + '.' + i, target._data[key][i], null, remote);
        this.silenceRestore(state);
      }
    }

    if (silent) state = this.silence();
    this.emit(path + ':set', target._data[key], null, remote);
    this.emit('*:set', path, target._data[key], null, remote);
    if (silent) this.silenceRestore(state);
  } else if (type === 'object' && value instanceof Object) {
    if (_typeof(target._data[key]) !== 'object') {
      target._data[key] = {
        _path: path,
        _keys: [],
        _data: {}
      };
    }

    for (i in value) {
      if (_typeof(value[i]) === 'object') {
        this._prepare(target._data[key], i, value[i], true, remote);
      } else {
        state = this.silence();
        target._data[key]._data[i] = value[i];

        target._data[key]._keys.push(i);

        this.emit(path + '.' + i + ':set', value[i], null, remote);
        this.emit('*:set', path + '.' + i, value[i], null, remote);
        this.silenceRestore(state);
      }
    }

    if (silent) state = this.silence(); // passing undefined as valueOld here
    // but we should get the old value to be consistent

    this.emit(path + ':set', value, undefined, remote);
    this.emit('*:set', path, value, undefined, remote);
    if (silent) this.silenceRestore(state);
  } else {
    if (silent) state = this.silence();
    target._data[key] = value;
    this.emit(path + ':set', value, undefined, remote);
    this.emit('*:set', path, value, undefined, remote);
    if (silent) this.silenceRestore(state);
  }

  return true;
};

Observer.prototype.set = function (path, value, silent, remote, force) {
  var _this = this;

  var i;
  var valueOld;

  var keys = Observer._splitPath(path);

  var length = keys.length;
  var key = keys[length - 1];
  var node = this;
  var nodePath = '';
  var obj = this;
  var state;

  for (i = 0; i < length - 1; i++) {
    if (node instanceof Array) {
      node = node[keys[i]];

      if (node instanceof Observer) {
        path = keys.slice(i + 1).join('.');
        obj = node;
      }
    } else {
      if (i < length && _typeof(node._data[keys[i]]) !== 'object') {
        if (node._data[keys[i]]) obj.unset((node.__path ? node.__path + '.' : '') + keys[i]);
        node._data[keys[i]] = {
          _path: path,
          _keys: [],
          _data: {}
        };

        node._keys.push(keys[i]);
      }

      if (i === length - 1 && node.__path) nodePath = node.__path + '.' + keys[i];
      node = node._data[keys[i]];
    }
  }

  if (node instanceof Array) {
    var ind = parseInt(key, 10);
    if (node[ind] === value && !force) return;
    valueOld = node[ind];

    if (valueOld instanceof Observer) {
      valueOld = valueOld.json();
    } else {
      valueOld = obj.json(valueOld);
    }

    node[ind] = value;

    if (value instanceof Observer) {
      value._parent = obj;
      value._parentPath = nodePath;
      value._parentField = node;
      value._parentKey = null;
    }

    if (silent) state = obj.silence();
    obj.emit(path + ':set', value, valueOld, remote);
    obj.emit('*:set', path, value, valueOld, remote);
    if (silent) obj.silenceRestore(state);
    return true;
  } else if (node._data && !node._data.hasOwnProperty(key)) {
    if (_typeof(value) === 'object') {
      return obj._prepare(node, key, value, false, remote);
    }

    node._data[key] = value;

    node._keys.push(key);

    if (silent) state = obj.silence();
    obj.emit(path + ':set', value, null, remote);
    obj.emit('*:set', path, value, null, remote);
    if (silent) obj.silenceRestore(state);
    return true;
  }

  if (_typeof(value) === 'object' && value instanceof Array) {
    if (value.equals(node._data[key]) && !force) return false;
    valueOld = node._data[key];
    if (!(valueOld instanceof Observer)) valueOld = obj.json(valueOld);

    if (node._data[key] && node._data[key].length === value.length) {
      state = obj.silence(); // handle new array instance

      if (value.length === 0) {
        node._data[key] = value;
      }

      for (i = 0; i < node._data[key].length; i++) {
        if (node._data[key][i] instanceof Observer) {
          node._data[key][i].patch(value[i], true);
        } else if (node._data[key][i] !== value[i]) {
          node._data[key][i] = value[i];
          obj.emit(path + '.' + i + ':set', node._data[key][i], valueOld && valueOld[i] || null, remote);
          obj.emit('*:set', path + '.' + i, node._data[key][i], valueOld && valueOld[i] || null, remote);
        }
      }

      obj.silenceRestore(state);
    } else {
      node._data[key] = [];
      value.forEach(function (val) {
        _this._doInsert(node, key, val);
      });
      state = obj.silence();

      for (i = 0; i < node._data[key].length; i++) {
        obj.emit(path + '.' + i + ':set', node._data[key][i], valueOld && valueOld[i] || null, remote);
        obj.emit('*:set', path + '.' + i, node._data[key][i], valueOld && valueOld[i] || null, remote);
      }

      obj.silenceRestore(state);
    }

    if (silent) state = obj.silence();
    obj.emit(path + ':set', value, valueOld, remote);
    obj.emit('*:set', path, value, valueOld, remote);
    if (silent) obj.silenceRestore(state);
    return true;
  } else if (_typeof(value) === 'object' && value instanceof Object) {
    var changed = false;
    valueOld = node._data[key];
    if (!(valueOld instanceof Observer)) valueOld = obj.json(valueOld);
    keys = Object.keys(value);

    if (!node._data[key] || !node._data[key]._data) {
      if (node._data[key]) {
        obj.unset((node.__path ? node.__path + '.' : '') + key);
      } else {
        changed = true;
      }

      node._data[key] = {
        _path: path,
        _keys: [],
        _data: {}
      };
    }

    var c;

    for (var n in node._data[key]._data) {
      if (!value.hasOwnProperty(n)) {
        c = obj.unset(path + '.' + n, true);
        if (c) changed = true;
      } else if (node._data[key]._data.hasOwnProperty(n)) {
        if (!obj._equals(node._data[key]._data[n], value[n])) {
          c = obj.set(path + '.' + n, value[n], true);
          if (c) changed = true;
        }
      } else {
        c = obj._prepare(node._data[key], n, value[n], true, remote);
        if (c) changed = true;
      }
    }

    for (i = 0; i < keys.length; i++) {
      if (value[keys[i]] === undefined && node._data[key]._data.hasOwnProperty(keys[i])) {
        c = obj.unset(path + '.' + keys[i], true);
        if (c) changed = true;
      } else if (_typeof(value[keys[i]]) === 'object') {
        if (node._data[key]._data.hasOwnProperty(keys[i])) {
          c = obj.set(path + '.' + keys[i], value[keys[i]], true);
          if (c) changed = true;
        } else {
          c = obj._prepare(node._data[key], keys[i], value[keys[i]], true, remote);
          if (c) changed = true;
        }
      } else if (!obj._equals(node._data[key]._data[keys[i]], value[keys[i]])) {
        if (_typeof(value[keys[i]]) === 'object') {
          c = obj.set(node._data[key]._path + '.' + keys[i], value[keys[i]], true);
          if (c) changed = true;
        } else if (node._data[key]._data[keys[i]] !== value[keys[i]]) {
          changed = true;
          if (node._data[key]._keys.indexOf(keys[i]) === -1) node._data[key]._keys.push(keys[i]);
          node._data[key]._data[keys[i]] = value[keys[i]];
          state = obj.silence();
          obj.emit(node._data[key]._path + '.' + keys[i] + ':set', node._data[key]._data[keys[i]], null, remote);
          obj.emit('*:set', node._data[key]._path + '.' + keys[i], node._data[key]._data[keys[i]], null, remote);
          obj.silenceRestore(state);
        }
      }
    }

    if (changed) {
      if (silent) state = obj.silence();
      var val = obj.json(node._data[key]);
      obj.emit(node._data[key]._path + ':set', val, valueOld, remote);
      obj.emit('*:set', node._data[key]._path, val, valueOld, remote);
      if (silent) obj.silenceRestore(state);
      return true;
    }

    return false;
  }

  var data;

  if (!node.hasOwnProperty('_data') && node.hasOwnProperty(key)) {
    data = node;
  } else {
    data = node._data;
  }

  if (data[key] === value && !force) return false;
  if (silent) state = obj.silence();
  valueOld = data[key];
  if (!(valueOld instanceof Observer)) valueOld = obj.json(valueOld);
  data[key] = value;
  obj.emit(path + ':set', value, valueOld, remote);
  obj.emit('*:set', path, value, valueOld, remote);
  if (silent) obj.silenceRestore(state);
  return true;
};

Observer.prototype.has = function (path) {
  var keys = Observer._splitPath(path);

  var node = this;

  for (var i = 0, len = keys.length; i < len; i++) {
    if (node == undefined) return undefined;

    if (node._data) {
      node = node._data[keys[i]];
    } else {
      node = node[keys[i]];
    }
  }

  return node !== undefined;
};

Observer.prototype.get = function (path, raw) {
  var keys = Observer._splitPath(path);

  var node = this;

  for (var i = 0; i < keys.length; i++) {
    if (node == undefined) return undefined;

    if (node._data) {
      node = node._data[keys[i]];
    } else {
      node = node[keys[i]];
    }
  }

  if (raw) return node;

  if (node == null) {
    return null;
  }

  return this.json(node);
};

Observer.prototype.getRaw = function (path) {
  return this.get(path, true);
};

Observer.prototype._equals = function (a, b) {
  if (a === b) {
    return true;
  } else if (a instanceof Array && b instanceof Array && a.equals(b)) {
    return true;
  }

  return false;
};

Observer.prototype.unset = function (path, silent, remote) {
  var i;

  var keys = Observer._splitPath(path);

  var key = keys[keys.length - 1];
  var node = this;
  var obj = this;

  for (i = 0; i < keys.length - 1; i++) {
    if (node instanceof Array) {
      node = node[keys[i]];

      if (node instanceof Observer) {
        path = keys.slice(i + 1).join('.');
        obj = node;
      }
    } else {
      node = node._data[keys[i]];
    }
  }

  if (!node._data || !node._data.hasOwnProperty(key)) return false;
  var valueOld = node._data[key];
  if (!(valueOld instanceof Observer)) valueOld = obj.json(valueOld); // recursive

  if (node._data[key] && node._data[key]._data) {
    // do this in reverse order because node._data[key]._keys gets
    // modified as we loop
    for (i = node._data[key]._keys.length - 1; i >= 0; i--) {
      obj.unset(path + '.' + node._data[key]._keys[i], true);
    }
  }

  node._keys.splice(node._keys.indexOf(key), 1);

  delete node._data[key];
  var state;
  if (silent) state = obj.silence();
  obj.emit(path + ':unset', valueOld, remote);
  obj.emit('*:unset', path, valueOld, remote);
  if (silent) obj.silenceRestore(state);
  return true;
};

Observer.prototype.remove = function (path, ind, silent, remote) {
  var keys = Observer._splitPath(path);

  var key = keys[keys.length - 1];
  var node = this;
  var obj = this;

  for (var i = 0; i < keys.length - 1; i++) {
    if (node instanceof Array) {
      node = node[parseInt(keys[i], 10)];

      if (node instanceof Observer) {
        path = keys.slice(i + 1).join('.');
        obj = node;
      }
    } else if (node._data && node._data.hasOwnProperty(keys[i])) {
      node = node._data[keys[i]];
    } else {
      return;
    }
  }

  if (!node._data || !node._data.hasOwnProperty(key) || !(node._data[key] instanceof Array)) return;
  var arr = node._data[key];
  if (arr.length < ind) return;
  var value = arr[ind];

  if (value instanceof Observer) {
    value._parent = null;
  } else {
    value = obj.json(value);
  }

  arr.splice(ind, 1);
  var state;
  if (silent) state = obj.silence();
  obj.emit(path + ':remove', value, ind, remote);
  obj.emit('*:remove', path, value, ind, remote);
  if (silent) obj.silenceRestore(state);
  return true;
};

Observer.prototype.removeValue = function (path, value, silent, remote) {
  var keys = Observer._splitPath(path);

  var key = keys[keys.length - 1];
  var node = this;
  var obj = this;

  for (var i = 0; i < keys.length - 1; i++) {
    if (node instanceof Array) {
      node = node[parseInt(keys[i], 10)];

      if (node instanceof Observer) {
        path = keys.slice(i + 1).join('.');
        obj = node;
      }
    } else if (node._data && node._data.hasOwnProperty(keys[i])) {
      node = node._data[keys[i]];
    } else {
      return;
    }
  }

  if (!node._data || !node._data.hasOwnProperty(key) || !(node._data[key] instanceof Array)) return;
  var arr = node._data[key];
  var ind = arr.indexOf(value);

  if (ind === -1) {
    return;
  }

  if (arr.length < ind) return;
  value = arr[ind];

  if (value instanceof Observer) {
    value._parent = null;
  } else {
    value = obj.json(value);
  }

  arr.splice(ind, 1);
  var state;
  if (silent) state = obj.silence();
  obj.emit(path + ':remove', value, ind, remote);
  obj.emit('*:remove', path, value, ind, remote);
  if (silent) obj.silenceRestore(state);
  return true;
};

Observer.prototype.insert = function (path, value, ind, silent, remote) {
  var keys = Observer._splitPath(path);

  var key = keys[keys.length - 1];
  var node = this;
  var obj = this;

  for (var i = 0; i < keys.length - 1; i++) {
    if (node instanceof Array) {
      node = node[parseInt(keys[i], 10)];

      if (node instanceof Observer) {
        path = keys.slice(i + 1).join('.');
        obj = node;
      }
    } else if (node._data && node._data.hasOwnProperty(keys[i])) {
      node = node._data[keys[i]];
    } else {
      return;
    }
  }

  if (!node._data || !node._data.hasOwnProperty(key) || !(node._data[key] instanceof Array)) return;
  var arr = node._data[key];
  value = obj._doInsert(node, key, value, ind);

  if (ind === undefined) {
    ind = arr.length - 1;
  }

  var state;
  if (silent) state = obj.silence();
  obj.emit(path + ':insert', value, ind, remote);
  obj.emit('*:insert', path, value, ind, remote);
  if (silent) obj.silenceRestore(state);
  return true;
};

Observer.prototype._doInsert = function (node, key, value, ind) {
  var arr = node._data[key];

  if (_typeof(value) === 'object' && !(value instanceof Observer) && value !== null) {
    if (value instanceof Array) {
      value = value.slice(0);
    } else {
      value = new Observer(value);
    }
  }

  var path = node._path ? "".concat(node._path, ".").concat(key) : key;

  if (value !== null && (!this._pathsWithDuplicates || !this._pathsWithDuplicates[path])) {
    if (arr.indexOf(value) !== -1) {
      return;
    }
  }

  if (ind === undefined) {
    arr.push(value);
  } else {
    arr.splice(ind, 0, value);
  }

  if (value instanceof Observer) {
    value._parent = this;
    value._parentPath = path;
    value._parentField = arr;
    value._parentKey = null;
  } else {
    value = this.json(value);
  }

  return value;
};

Observer.prototype.move = function (path, indOld, indNew, silent, remote) {
  var keys = Observer._splitPath(path);

  var key = keys[keys.length - 1];
  var node = this;
  var obj = this;

  for (var i = 0; i < keys.length - 1; i++) {
    if (node instanceof Array) {
      node = node[parseInt(keys[i], 10)];

      if (node instanceof Observer) {
        path = keys.slice(i + 1).join('.');
        obj = node;
      }
    } else if (node._data && node._data.hasOwnProperty(keys[i])) {
      node = node._data[keys[i]];
    } else {
      return;
    }
  }

  if (!node._data || !node._data.hasOwnProperty(key) || !(node._data[key] instanceof Array)) return;
  var arr = node._data[key];
  if (arr.length < indOld || arr.length < indNew || indOld === indNew) return;
  var value = arr[indOld];
  arr.splice(indOld, 1);
  if (indNew === -1) indNew = arr.length;
  arr.splice(indNew, 0, value);
  if (!(value instanceof Observer)) value = obj.json(value);
  var state;
  if (silent) state = obj.silence();
  obj.emit(path + ':move', value, indNew, indOld, remote);
  obj.emit('*:move', path, value, indNew, indOld, remote);
  if (silent) obj.silenceRestore(state);
  return true;
};

Observer.prototype.patch = function (data, removeMIssingKeys) {
  var key;
  if (_typeof(data) !== 'object') return;

  for (key in data) {
    if (_typeof(data[key]) === 'object' && !this._data.hasOwnProperty(key)) {
      this._prepare(this, key, data[key]);
    } else if (this._data[key] !== data[key]) {
      this.set(key, data[key]);
    }
  }

  if (removeMIssingKeys) {
    for (key in this._data) {
      if (!data.hasOwnProperty(key)) {
        this.unset(key);
      }
    }
  }
};

Observer.prototype.json = function (target) {
  var key, n;
  var obj = {};
  var node = target === undefined ? this : target;
  var len, nlen;

  if (node instanceof Object && node._keys) {
    len = node._keys.length;

    for (var i = 0; i < len; i++) {
      key = node._keys[i];
      var value = node._data[key];

      var type = _typeof(value);

      if (type === 'object' && value instanceof Array) {
        obj[key] = value.slice(0);
        nlen = obj[key].length;

        for (n = 0; n < nlen; n++) {
          if (_typeof(obj[key][n]) === 'object') obj[key][n] = this.json(obj[key][n]);
        }
      } else if (type === 'object' && value instanceof Object) {
        obj[key] = this.json(value);
      } else {
        obj[key] = value;
      }
    }
  } else {
    if (node === null) {
      return null;
    } else if (_typeof(node) === 'object' && node instanceof Array) {
      obj = node.slice(0);
      len = obj.length;

      for (n = 0; n < len; n++) {
        obj[n] = this.json(obj[n]);
      }
    } else if (_typeof(node) === 'object') {
      for (key in node) {
        if (node.hasOwnProperty(key)) obj[key] = node[key];
      }
    } else {
      obj = node;
    }
  }

  return obj;
};

Observer.prototype.forEach = function (fn, target, path) {
  var node = target || this;
  path = path || '';

  for (var i = 0; i < node._keys.length; i++) {
    var key = node._keys[i];
    var value = node._data[key];

    var type = this.schema && this.schema.has(path + key) && this.schema.get(path + key).type.name.toLowerCase() || _typeof(value);

    if (type === 'object' && value instanceof Array) {
      fn(path + key, 'array', value, key);
    } else if (type === 'object' && value instanceof Object) {
      fn(path + key, 'object', value, key);
      this.forEach(fn, value, path + key + '.');
    } else {
      fn(path + key, type, value, key);
    }
  }
};
/**
 * Returns the latest observer instance. This is important when
 * dealing with undo / redo where the observer might have been deleted
 * and/or possibly re-created.
 *
 * @returns {Observer} The latest instance of the observer.
 */


Observer.prototype.latest = function () {
  return this._latestFn ? this._latestFn() : this;
};

Observer.prototype.destroy = function () {
  if (this._destroyed) return;
  this._destroyed = true;
  this.emit('destroy');
  this.unbind();
};

Object.defineProperty(Observer.prototype, 'latestFn', {
  get: function get() {
    return this._latestFn;
  },
  set: function set(value) {
    this._latestFn = value;
  }
});
var observer_useObserverState = function useObserverState(observer, path, json) {
  var parseFunc = function parseFunc(observerValue) {
    return json ? JSON.parse(observerValue) : observerValue;
  };

  var _useState = Object(react["useState"])(parseFunc(observer.get(path))),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  observer.on("".concat(path, ":set"), function (value) {
    return setValue(parseFunc(value));
  });
  return value;
};
/* harmony default export */ var binding_observer = (Observer);
// EXTERNAL MODULE: ./src/interfaces/IBindable/index.js
var IBindable = __webpack_require__(27);

// CONCATENATED MODULE: ./src/binding/binding-base.js
function binding_base_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { binding_base_typeof = function _typeof(obj) { return typeof obj; }; } else { binding_base_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return binding_base_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (binding_base_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * @name BindingBase
 * @classdesc Base class for data binding between IBindable Elements and Observers.
 * @property {Element} element The element
 * @property {Observer[]} observers The linked observers
 * @property {string[]} paths The linked paths
 * @property {boolean} applyingChange Whether the binding is currently applying a change either to the observers or the element.
 * @property {boolean} linked Whether the binding is linked to observers.
 * @property {boolean} historyCombine If a history module is used whether to combine history actions when applying changes to observers.
 * @property {string} historyName The name of the history action when applying changes to observers.
 * @property {string} historyPrefix A string to prefix the historyName with.
 * @property {string} historyPostfix A string to postfix the historyName with.
 */

var BindingBase = /*#__PURE__*/function (_Events) {
  _inherits(BindingBase, _Events);

  var _super = _createSuper(BindingBase);

  /**
   * Creates a new binding.
   *
   * @param {object} args - The arguments.
   * @param {IBindable} [args.element] - The IBindable element.
   * @param {History} [args.history] - The history object which will be used to record undo / redo actions.
   * If none is provided then no history will be recorded.
   * @param {string} [args.historyPrefix] - A prefix that will be used for the name of every history action.
   * @param {string} [args.historyPostfix] - A postfix that will be used for the name of every history action.
   * @param {string} [args.historyName] - The name of each history action.
   * @param {boolean} [args.historyCombine] - Whether to combine history actions.
   */
  function BindingBase(args) {
    var _this;

    _classCallCheck(this, BindingBase);

    _this = _super.call(this);
    if (!args) args = {}; // the observers we are binding to

    _this._observers = null; // the paths to use for the observers

    _this._paths = null;
    _this._applyingChange = false;
    _this._element = args.element || null;
    _this._history = args.history || null;
    _this._historyPrefix = args.historyPrefix || null;
    _this._historyPostfix = args.historyPostfix || null;
    _this._historyName = args.historyName || null;
    _this._historyCombine = args.historyCombine || false;
    _this._linked = false;
    return _this;
  } // Returns the path at the specified index
  // or the path at the first index if it doesn't exist.


  _createClass(BindingBase, [{
    key: "_pathAt",
    value: function _pathAt(paths, index) {
      return paths[index] || paths[0];
    }
    /**
     * @name BindingBase#link
     * @description Links the specified observers to the specified paths.
     * @param {Observer[]|Observer} observers - The observer(s).
     * @param {string[]|string} paths - The path(s). The behaviour of the binding depends on how many paths are passed.
     * If an equal amount of paths and observers are passed then the binding will map each path to each observer at each index.
     * If more observers than paths are passed then the path at index 0 will be used for all observers.
     * If one observer and multiple paths are passed then all of the paths will be used for the observer (e.g. for curves).
     */

  }, {
    key: "link",
    value: function link(observers, paths) {
      if (this._observers) {
        this.unlink();
      }

      this._observers = Array.isArray(observers) ? observers : [observers];
      this._paths = Array.isArray(paths) ? paths : [paths];
      this._linked = true;
    }
    /**
     * @name BindingBase#unlink
     * @description Unlinks the observers and paths.
     */

  }, {
    key: "unlink",
    value: function unlink() {
      this._observers = null;
      this._paths = null;
      this._linked = false;
    }
    /**
     * @name BindingBase#clone
     * @description Clones the binding. To be implemented by derived classes.
     */

  }, {
    key: "clone",
    value: function clone() {
      throw new Error('pcui.BindingBase#clone: Not implemented');
    }
    /**
     * @name BindingBase#setValue
     * @description Sets a value to the linked observers at the linked paths.
     * @param {*} value - The value
     */

  }, {
    key: "setValue",
    value: function setValue(value) {}
    /**
     * @name BindingBase#setValues
     * @description Sets an array of values to the linked observers at the linked paths.
     * @param {Array<*>} values - The values
     */

  }, {
    key: "setValues",
    value: function setValues(values) {}
    /**
     * @name BindingBase#addValue
     * @description Adds (inserts) a value to the linked observers at the linked paths.
     * @param {*} value - The value
     */

  }, {
    key: "addValue",
    value: function addValue(value) {}
    /**
     * @name BindingBase#addValues
     * @description Adds (inserts) multiple values to the linked observers at the linked paths.
     * @param {Array<*>} values - The values
     */

  }, {
    key: "addValues",
    value: function addValues(values) {}
    /**
     * @name BindingBase#removeValue
     * @description Removes a value from the linked observers at the linked paths.
     * @param {*} value - The value
     */

  }, {
    key: "removeValue",
    value: function removeValue(value) {}
    /**
     * @name BindingBase#removeValues
     * @description Removes multiple values from the linked observers from the linked paths.
     * @param {Array<*>} values - The values
     */

  }, {
    key: "removeValues",
    value: function removeValues(values) {}
  }, {
    key: "element",
    get: function get() {
      return this._element;
    },
    set: function set(value) {
      this._element = value;
    }
  }, {
    key: "applyingChange",
    get: function get() {
      return this._applyingChange;
    },
    set: function set(value) {
      if (this._applyingChange === value) return;
      this._applyingChange = value;
      this.emit('applyingChange', value);
    }
  }, {
    key: "linked",
    get: function get() {
      return this._linked;
    }
  }, {
    key: "historyCombine",
    get: function get() {
      return this._historyCombine;
    },
    set: function set(value) {
      this._historyCombine = value;
    }
  }, {
    key: "historyName",
    get: function get() {
      return this._historyName;
    },
    set: function set(value) {
      this._historyName = value;
    }
  }, {
    key: "historyPrefix",
    get: function get() {
      return this._historyPrefix;
    },
    set: function set(value) {
      this._historyPrefix = value;
    }
  }, {
    key: "historyPostfix",
    get: function get() {
      return this._historyPostfix;
    },
    set: function set(value) {
      this._historyPostfix = value;
    }
  }, {
    key: "observers",
    get: function get() {
      return this._observers;
    }
  }, {
    key: "paths",
    get: function get() {
      return this._paths;
    }
  }]);

  return BindingBase;
}(events["a" /* default */]);

/* harmony default export */ var binding_base = (BindingBase);
// CONCATENATED MODULE: ./src/binding/binding-element-observers.js
function binding_element_observers_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { binding_element_observers_typeof = function _typeof(obj) { return typeof obj; }; } else { binding_element_observers_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return binding_element_observers_typeof(obj); }

function binding_element_observers_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function binding_element_observers_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function binding_element_observers_createClass(Constructor, protoProps, staticProps) { if (protoProps) binding_element_observers_defineProperties(Constructor.prototype, protoProps); if (staticProps) binding_element_observers_defineProperties(Constructor, staticProps); return Constructor; }

function binding_element_observers_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) binding_element_observers_setPrototypeOf(subClass, superClass); }

function binding_element_observers_setPrototypeOf(o, p) { binding_element_observers_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return binding_element_observers_setPrototypeOf(o, p); }

function binding_element_observers_createSuper(Derived) { var hasNativeReflectConstruct = binding_element_observers_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = binding_element_observers_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = binding_element_observers_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return binding_element_observers_possibleConstructorReturn(this, result); }; }

function binding_element_observers_possibleConstructorReturn(self, call) { if (call && (binding_element_observers_typeof(call) === "object" || typeof call === "function")) { return call; } return binding_element_observers_assertThisInitialized(self); }

function binding_element_observers_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function binding_element_observers_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function binding_element_observers_getPrototypeOf(o) { binding_element_observers_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return binding_element_observers_getPrototypeOf(o); }


/**
 * @name BindingElementToObservers
 * @classdesc Provides one way binding between an IBindable element and Observers. Any changes from the element
 * will be propagated to the observers.
 * @augments BindingBase
 */

var BindingElementToObservers = /*#__PURE__*/function (_BindingBase) {
  binding_element_observers_inherits(BindingElementToObservers, _BindingBase);

  var _super = binding_element_observers_createSuper(BindingElementToObservers);

  function BindingElementToObservers() {
    binding_element_observers_classCallCheck(this, BindingElementToObservers);

    return _super.apply(this, arguments);
  }

  binding_element_observers_createClass(BindingElementToObservers, [{
    key: "clone",
    value: function clone() {
      return new BindingElementToObservers({
        history: this._history,
        historyPrefix: this._historyPrefix,
        historyPostfix: this._historyPostfix,
        historyName: this._historyName,
        historyCombine: this._historyCombine
      });
    }
  }, {
    key: "_getHistoryActionName",
    value: function _getHistoryActionName(paths) {
      return "".concat(this._historyPrefix || '').concat(this._historyName || paths[0]).concat(this._historyPostfix || '');
    } // Sets the value (or values of isArrayOfValues is true)
    // to the observers

  }, {
    key: "_setValue",
    value: function _setValue(value, isArrayOfValues) {
      var _this = this;

      if (this.applyingChange) return;
      if (!this._observers) return;
      this.applyingChange = true; // make copy of observers if we are using history
      // so that we can undo on the same observers in the future

      var observers = this._observers.slice();

      var paths = this._paths.slice();

      var execute = function execute() {
        _this._setValueToObservers(observers, paths, value, isArrayOfValues);
      };

      if (this._history) {
        var previousValues = [];

        if (observers.length === 1 && paths.length > 1) {
          previousValues = paths.map(function (path) {
            return observers[0].has(path) ? observers[0].get(path) : undefined;
          });
        } else {
          previousValues = observers.map(function (observer, i) {
            var path = _this._pathAt(paths, i);

            return observer.has(path) ? observer.get(path) : undefined;
          });
        }

        this._history.add({
          name: this._getHistoryActionName(paths),
          redo: execute,
          combine: this._historyCombine,
          undo: function undo() {
            _this._setValueToObservers(observers, paths, previousValues, true);
          }
        });
      }

      execute();
      this.applyingChange = false;
    }
  }, {
    key: "_setValueToObservers",
    value: function _setValueToObservers(observers, paths, value, isArrayOfValues) {
      // special case for 1 observer with multiple paths (like curves)
      // in that case set each value for each path
      if (observers.length === 1 && paths.length > 1) {
        for (var i = 0; i < paths.length; i++) {
          var latest = observers[0].latest();
          if (!latest) continue;
          var history = false;

          if (latest.history) {
            history = latest.history.enabled;
            latest.history.enabled = false;
          }

          var path = paths[i];
          var val = value[i];

          if (value !== undefined) {
            latest.set(path, val);
          } else {
            latest.unset(path);
          }

          if (history) {
            latest.history.enabled = true;
          }
        }

        return;
      }

      for (var _i = 0; _i < observers.length; _i++) {
        var _latest = observers[_i].latest();

        if (!_latest) continue;
        var _history = false;

        if (_latest.history) {
          _history = _latest.history.enabled;
          _latest.history.enabled = false;
        }

        var _path = this._pathAt(paths, _i);

        var _val = isArrayOfValues ? value[_i] : value;

        if (value !== undefined) {
          _latest.set(_path, _val);
        } else {
          _latest.unset(_path);
        }

        if (_history) {
          _latest.history.enabled = true;
        }
      }
    }
  }, {
    key: "_addValues",
    value: function _addValues(values) {
      var _this2 = this;

      if (this.applyingChange) return;
      if (!this._observers) return;
      this.applyingChange = true; // make copy of observers if we are using history
      // so that we can undo on the same observers in the future

      var observers = this._observers.slice();

      var paths = this._paths.slice();

      var records = [];

      var _loop = function _loop(i) {
        var path = _this2._pathAt(paths, i);

        var observer = observers[i];
        values.forEach(function (value) {
          if (observer.get(path).indexOf(value) === -1) {
            records.push({
              observer: observer,
              path: path,
              value: value
            });
          }
        });
      };

      for (var i = 0; i < observers.length; i++) {
        _loop(i);
      }

      var execute = function execute() {
        for (var _i2 = 0; _i2 < records.length; _i2++) {
          var latest = records[_i2].observer.latest();

          if (!latest) continue;
          var path = records[_i2].path;
          var history = false;

          if (latest.history) {
            history = latest.history.enabled;
            latest.history.enabled = false;
          }

          latest.insert(path, records[_i2].value);

          if (history) {
            latest.history.enabled = true;
          }
        }
      };

      if (this._history && records.length) {
        this._history.add({
          name: this._getHistoryActionName(paths),
          redo: execute,
          combine: this._historyCombine,
          undo: function undo() {
            for (var _i3 = 0; _i3 < records.length; _i3++) {
              var latest = records[_i3].observer.latest();

              if (!latest) continue;
              var path = records[_i3].path;
              var history = false;

              if (latest.history) {
                history = latest.history.enabled;
                latest.history.enabled = false;
              }

              latest.removeValue(path, records[_i3].value);

              if (history) {
                latest.history.enabled = true;
              }
            }
          }
        });
      }

      execute();
      this.applyingChange = false;
    }
  }, {
    key: "_removeValues",
    value: function _removeValues(values) {
      var _this3 = this;

      if (this.applyingChange) return;
      if (!this._observers) return;
      this.applyingChange = true; // make copy of observers if we are using history
      // so that we can undo on the same observers in the future

      var observers = this._observers.slice();

      var paths = this._paths.slice();

      var records = [];

      var _loop2 = function _loop2(i) {
        var path = _this3._pathAt(paths, i);

        var observer = observers[i];
        values.forEach(function (value) {
          var ind = observer.get(path).indexOf(value);

          if (ind !== -1) {
            records.push({
              observer: observer,
              path: path,
              value: value,
              index: ind
            });
          }
        });
      };

      for (var i = 0; i < observers.length; i++) {
        _loop2(i);
      }

      var execute = function execute() {
        for (var _i4 = 0; _i4 < records.length; _i4++) {
          var latest = records[_i4].observer.latest();

          if (!latest) continue;
          var path = records[_i4].path;
          var history = false;

          if (latest.history) {
            history = latest.history.enabled;
            latest.history.enabled = false;
          }

          latest.removeValue(path, records[_i4].value);

          if (history) {
            latest.history.enabled = true;
          }
        }
      };

      if (this._history && records.length) {
        this._history.add({
          name: this._getHistoryActionName(paths),
          redo: execute,
          combine: this._historyCombine,
          undo: function undo() {
            for (var _i5 = 0; _i5 < records.length; _i5++) {
              var latest = records[_i5].observer.latest();

              if (!latest) continue;
              var path = records[_i5].path;
              var history = false;

              if (latest.history) {
                history = latest.history.enabled;
                latest.history.enabled = false;
              }

              if (latest.get(path).indexOf(records[_i5].value) === -1) {
                latest.insert(path, records[_i5].value, records[_i5].index);
              }

              if (history) {
                latest.history.enabled = true;
              }
            }
          }
        });
      }

      execute();
      this.applyingChange = false;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._setValue(value, false);
    }
  }, {
    key: "setValues",
    value: function setValues(values) {
      // make sure we deep copy arrays because they will not be cloned when set to the observers
      values = values.slice().map(function (val) {
        return Array.isArray(val) ? val.slice() : val;
      });

      this._setValue(values, true);
    }
  }, {
    key: "addValue",
    value: function addValue(value) {
      this._addValues([value]);
    }
  }, {
    key: "addValues",
    value: function addValues(values) {
      this._addValues(values);
    }
  }, {
    key: "removeValue",
    value: function removeValue(value) {
      this._removeValues([value]);
    }
  }, {
    key: "removeValues",
    value: function removeValues(values) {
      this._removeValues(values);
    }
  }]);

  return BindingElementToObservers;
}(binding_base);

/* harmony default export */ var binding_element_observers = (BindingElementToObservers);
// CONCATENATED MODULE: ./src/binding/binding-observers-element.js
function binding_observers_element_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { binding_observers_element_typeof = function _typeof(obj) { return typeof obj; }; } else { binding_observers_element_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return binding_observers_element_typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function binding_observers_element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function binding_observers_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function binding_observers_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) binding_observers_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) binding_observers_element_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = binding_observers_element_getPrototypeOf(object); if (object === null) break; } return object; }

function binding_observers_element_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) binding_observers_element_setPrototypeOf(subClass, superClass); }

function binding_observers_element_setPrototypeOf(o, p) { binding_observers_element_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return binding_observers_element_setPrototypeOf(o, p); }

function binding_observers_element_createSuper(Derived) { var hasNativeReflectConstruct = binding_observers_element_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = binding_observers_element_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = binding_observers_element_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return binding_observers_element_possibleConstructorReturn(this, result); }; }

function binding_observers_element_possibleConstructorReturn(self, call) { if (call && (binding_observers_element_typeof(call) === "object" || typeof call === "function")) { return call; } return binding_observers_element_assertThisInitialized(self); }

function binding_observers_element_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function binding_observers_element_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function binding_observers_element_getPrototypeOf(o) { binding_observers_element_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return binding_observers_element_getPrototypeOf(o); }


/**
 * @name BindingObserversToElement
 * @classdesc Provides one way binding between Observers and an IBindable element and Observers. Any changes from the observers
 * will be propagated to the element.
 * @augments BindingBase
 */

var BindingObserversToElement = /*#__PURE__*/function (_BindingBase) {
  binding_observers_element_inherits(BindingObserversToElement, _BindingBase);

  var _super = binding_observers_element_createSuper(BindingObserversToElement);

  /**
   * Creates a new BindingObserversToElement instance.
   *
   * @param {Function} customUpdate - Custom update function.
   * @param {object} args - The arguments.
   */
  function BindingObserversToElement() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        customUpdate = _ref.customUpdate,
        args = _objectWithoutProperties(_ref, ["customUpdate"]);

    binding_observers_element_classCallCheck(this, BindingObserversToElement);

    _this = _super.call(this, args);
    _this._customUpdate = customUpdate;
    _this._events = [];
    _this._updateElementHandler = _this._updateElement.bind(binding_observers_element_assertThisInitialized(_this));
    _this._updateTimeout = null;
    return _this;
  }

  binding_observers_element_createClass(BindingObserversToElement, [{
    key: "_linkObserver",
    value: function _linkObserver(observer, path) {
      this._events.push(observer.on(path + ':set', this._deferUpdateElement.bind(this)));

      this._events.push(observer.on(path + ':unset', this._deferUpdateElement.bind(this)));

      this._events.push(observer.on(path + ':insert', this._deferUpdateElement.bind(this)));

      this._events.push(observer.on(path + ':remove', this._deferUpdateElement.bind(this)));
    }
  }, {
    key: "_deferUpdateElement",
    value: function _deferUpdateElement() {
      if (this.applyingChange) return;
      this.applyingChange = true;
      this._updateTimeout = setTimeout(this._updateElementHandler);
    }
  }, {
    key: "_updateElement",
    value: function _updateElement() {
      var _this2 = this;

      if (this._updateTimeout) {
        clearTimeout(this._updateTimeout);
        this._updateTimeout = null;
      }

      this._updateTimeout = null;
      this.applyingChange = true;

      if (typeof this._customUpdate === 'function') {
        this._customUpdate(this._element, this._observers, this._paths);
      } else if (this._observers.length === 1) {
        if (this._paths.length > 1) {
          // if using multiple paths for the single observer (e.g. curves)
          // then return an array of values for each path
          this._element.value = this._paths.map(function (path) {
            return _this2._observers[0].has(path) ? _this2._observers[0].get(path) : undefined;
          });
        } else {
          this._element.value = this._observers[0].has(this._paths[0]) ? this._observers[0].get(this._paths[0]) : undefined;
        }
      } else {
        this._element.values = this._observers.map(function (observer, i) {
          var path = _this2._pathAt(_this2._paths, i);

          return observer.has(path) ? observer.get(path) : undefined;
        });
      }

      this.applyingChange = false;
    }
  }, {
    key: "link",
    value: function link(observers, paths) {
      _get(binding_observers_element_getPrototypeOf(BindingObserversToElement.prototype), "link", this).call(this, observers, paths); // don't render changes when we link


      var renderChanges = this._element.renderChanges;

      if (renderChanges) {
        this._element.renderChanges = false;
      }

      this._updateElement();

      if (renderChanges) {
        this._element.renderChanges = renderChanges;
      }

      if (this._observers.length === 1) {
        if (this._paths.length > 1) {
          for (var i = 0; i < this._paths.length; i++) {
            this._linkObserver(this._observers[0], this._paths[i]);
          }

          return;
        }
      }

      for (var _i = 0; _i < this._observers.length; _i++) {
        this._linkObserver(this._observers[_i], this._pathAt(this._paths, _i));
      }
    }
  }, {
    key: "unlink",
    value: function unlink() {
      for (var i = 0; i < this._events.length; i++) {
        this._events[i].unbind();
      }

      this._events.length = 0;

      if (this._updateTimeout) {
        clearTimeout(this._updateTimeout);
        this._updateTimeout = null;
      }

      _get(binding_observers_element_getPrototypeOf(BindingObserversToElement.prototype), "unlink", this).call(this);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new BindingObserversToElement();
    }
  }]);

  return BindingObserversToElement;
}(binding_base);

/* harmony default export */ var binding_observers_element = (BindingObserversToElement);
// CONCATENATED MODULE: ./src/binding/binding-two-way.js
function binding_two_way_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { binding_two_way_typeof = function _typeof(obj) { return typeof obj; }; } else { binding_two_way_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return binding_two_way_typeof(obj); }

function binding_two_way_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function binding_two_way_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function binding_two_way_createClass(Constructor, protoProps, staticProps) { if (protoProps) binding_two_way_defineProperties(Constructor.prototype, protoProps); if (staticProps) binding_two_way_defineProperties(Constructor, staticProps); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = binding_two_way_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function binding_two_way_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { binding_two_way_get = Reflect.get; } else { binding_two_way_get = function _get(target, property, receiver) { var base = binding_two_way_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return binding_two_way_get(target, property, receiver || target); }

function binding_two_way_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = binding_two_way_getPrototypeOf(object); if (object === null) break; } return object; }

function binding_two_way_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) binding_two_way_setPrototypeOf(subClass, superClass); }

function binding_two_way_setPrototypeOf(o, p) { binding_two_way_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return binding_two_way_setPrototypeOf(o, p); }

function binding_two_way_createSuper(Derived) { var hasNativeReflectConstruct = binding_two_way_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = binding_two_way_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = binding_two_way_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return binding_two_way_possibleConstructorReturn(this, result); }; }

function binding_two_way_possibleConstructorReturn(self, call) { if (call && (binding_two_way_typeof(call) === "object" || typeof call === "function")) { return call; } return binding_two_way_assertThisInitialized(self); }

function binding_two_way_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function binding_two_way_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function binding_two_way_getPrototypeOf(o) { binding_two_way_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return binding_two_way_getPrototypeOf(o); }




/**
 * @name BindingTwoWay
 * @classdesc Provides two way data binding between Observers and IBindable elements. This means
 * that when the value of the Observers changes the IBindable will be updated and vice versa.
 * @augments BindingBase
 */

var binding_two_way_BindingTwoWay = /*#__PURE__*/function (_BindingBase) {
  binding_two_way_inherits(BindingTwoWay, _BindingBase);

  var _super = binding_two_way_createSuper(BindingTwoWay);

  /**
   * Creates a new BindingTwoWay instance.
   *
   * @param {object} args - The arguments.
   */
  function BindingTwoWay(args) {
    var _this;

    binding_two_way_classCallCheck(this, BindingTwoWay);

    if (!args) args = {};
    _this = _super.call(this, args);
    _this._bindingElementToObservers = args.bindingElementToObservers || new binding_element_observers(args);
    _this._bindingObserversToElement = args.bindingObserversToElement || new binding_observers_element(args);
    _this._applyingChange = false;

    _this._bindingElementToObservers.on('applyingChange', function (value) {
      _this.applyingChange = value;
    });

    _this._bindingObserversToElement.on('applyingChange', function (value) {
      _this.applyingChange = value;
    });

    return _this;
  }

  binding_two_way_createClass(BindingTwoWay, [{
    key: "link",
    value: function link(observers, paths) {
      binding_two_way_get(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "link", this).call(this, observers, paths);

      this._bindingElementToObservers.link(observers, paths);

      this._bindingObserversToElement.link(observers, paths);
    }
  }, {
    key: "unlink",
    value: function unlink() {
      this._bindingElementToObservers.unlink();

      this._bindingObserversToElement.unlink();

      binding_two_way_get(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "unlink", this).call(this);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new BindingTwoWay({
        bindingElementToObservers: this._bindingElementToObservers.clone(),
        bindingObserversToElement: this._bindingObserversToElement.clone()
      });
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._bindingElementToObservers.setValue(value);
    }
  }, {
    key: "setValues",
    value: function setValues(values) {
      this._bindingElementToObservers.setValues(values);
    }
  }, {
    key: "addValue",
    value: function addValue(value) {
      this._bindingElementToObservers.addValue(value);
    }
  }, {
    key: "addValues",
    value: function addValues(values) {
      this._bindingElementToObservers.addValues(values);
    }
  }, {
    key: "removeValue",
    value: function removeValue(value) {
      this._bindingElementToObservers.removeValue(value);
    }
  }, {
    key: "removeValues",
    value: function removeValues(values) {
      this._bindingElementToObservers.removeValues(values);
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    },
    set: function set(value) {
      this._element = value;
      this._bindingElementToObservers.element = value;
      this._bindingObserversToElement.element = value;
    }
  }, {
    key: "applyingChange",
    get: function get() {
      return binding_two_way_get(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "applyingChange", this);
    },
    set: function set(value) {
      if (binding_two_way_get(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "applyingChange", this) === value) return;
      this._bindingElementToObservers.applyingChange = value;
      this._bindingObserversToElement.applyingChange = value;

      _set(binding_two_way_getPrototypeOf(BindingTwoWay.prototype), "applyingChange", value, this, true);
    }
  }, {
    key: "historyCombine",
    get: function get() {
      return this._bindingElementToObservers.historyCombine;
    },
    set: function set(value) {
      this._bindingElementToObservers.historyCombine = value;
    }
  }, {
    key: "historyPrefix",
    get: function get() {
      return this._bindingElementToObservers.historyPrefix;
    },
    set: function set(value) {
      this._bindingElementToObservers.historyPrefix = value;
    }
  }, {
    key: "historyPostfix",
    get: function get() {
      return this._bindingElementToObservers.historyPostfix;
    },
    set: function set(value) {
      this._bindingElementToObservers.historyPostfix = value;
    }
  }]);

  return BindingTwoWay;
}(binding_base);

/* harmony default export */ var binding_two_way = (binding_two_way_BindingTwoWay);
// CONCATENATED MODULE: ./src/binding/history.js
function history_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { history_typeof = function _typeof(obj) { return typeof obj; }; } else { history_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return history_typeof(obj); }

function history_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function history_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function history_createClass(Constructor, protoProps, staticProps) { if (protoProps) history_defineProperties(Constructor.prototype, protoProps); if (staticProps) history_defineProperties(Constructor, staticProps); return Constructor; }

function history_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) history_setPrototypeOf(subClass, superClass); }

function history_setPrototypeOf(o, p) { history_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return history_setPrototypeOf(o, p); }

function history_createSuper(Derived) { var hasNativeReflectConstruct = history_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = history_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = history_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return history_possibleConstructorReturn(this, result); }; }

function history_possibleConstructorReturn(self, call) { if (call && (history_typeof(call) === "object" || typeof call === "function")) { return call; } return history_assertThisInitialized(self); }

function history_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function history_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function history_getPrototypeOf(o) { history_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return history_getPrototypeOf(o); }


/**
 * @name HistoryAction
 * @classdesc A history action
 * @property {string} name The name of the action
 * @property {Function} undo The undo function
 * @property {Function} redo The redo function
 * @property {boolean} combine Whether to combine with the previous action with the same name.
 * The effect of combining is merely changing the redo function to be the redo function of this action.
 * The original undo function is not modified.
 */

/**
 * @name History
 * @classdesc Manages history actions for undo / redo operations.
 * @property {HistoryAction} currentAction Returns the current history action
 * @property {HistoryAction} lastAction Returns the last history action
 * @property {boolean} canUndo Whether we can undo at this time.
 * @property {boolean} canRedo Whether we can redo at this time.
 * @augments Events
 */

var History = /*#__PURE__*/function (_Events) {
  history_inherits(History, _Events);

  var _super = history_createSuper(History);

  /**
   * Creates a new pcui.History.
   */
  function History() {
    var _this;

    history_classCallCheck(this, History);

    _this = _super.call(this);
    _this._actions = [];
    _this._currentActionIndex = -1;
    _this._canUndo = false;
    _this._canRedo = false;
    return _this;
  }
  /**
   * @name History#add
   * @description Adds a new history action
   * @param {HistoryAction} action - The action
   */


  history_createClass(History, [{
    key: "add",
    value: function add(action) {
      if (!action.name) {
        console.error('Trying to add history action without name');
        return;
      }

      if (!action.undo) {
        console.error('Trying to add history action without undo method', action.name);
        return;
      }

      if (!action.redo) {
        console.error('Trying to add history action without redo method', action.name);
        return;
      } // if we are adding an action
      // but we have undone some actions in the meantime
      // then we should erase the actions that come after our
      // last action before adding this


      if (this._currentActionIndex !== this._actions.length - 1) {
        this._actions = this._actions.slice(0, this._currentActionIndex + 1);
      } // if combine is true then replace the redo of the current action
      // if it has the same name


      if (action.combine && this.currentAction && this.currentAction.name === action.name) {
        this.currentAction.redo = action.redo;
      } else {
        var length = this._actions.push(action);

        this._currentActionIndex = length - 1;
      }

      this.emit('add', action.name);
      this.canUndo = true;
      this.canRedo = false;
    }
    /**
     * @name History#undo
     * @description Undo the last history action
     */

  }, {
    key: "undo",
    value: function undo() {
      if (!this.canUndo) return;
      var name = this.currentAction.name;

      try {
        this.currentAction.undo();
      } catch (ex) {
        console.info('%c(pcui.History#undo)', 'color: #f00');
        console.log(ex.stack);
        return;
      }

      this._currentActionIndex--;
      this.emit('undo', name);

      if (this._currentActionIndex < 0) {
        this.canUndo = false;
      }

      this.canRedo = true;
    }
    /**
     * @name History#redo
     * @description Redo the current history action
     */

  }, {
    key: "redo",
    value: function redo() {
      if (!this.canRedo) return;
      this._currentActionIndex++;

      try {
        this.currentAction.redo();
      } catch (ex) {
        console.info('%c(pcui.History#redo)', 'color: #f00');
        console.log(ex.stack);
        return;
      }

      this.emit('redo', this.currentAction.name);
      this.canUndo = true;

      if (this._currentActionIndex === this._actions.length - 1) {
        this.canRedo = false;
      }
    }
    /**
     * @name History#clear
     * @description Clears all history actions.
     */

  }, {
    key: "clear",
    value: function clear() {
      if (!this._actions.length) return;
      this._actions.length = 0;
      this._currentActionIndex = -1;
      this.canUndo = false;
      this.canRedo = false;
    }
  }, {
    key: "currentAction",
    get: function get() {
      return this._actions[this._currentActionIndex] || null;
    }
  }, {
    key: "lastAction",
    get: function get() {
      return this._actions[this._actions.length - 1] || null;
    }
  }, {
    key: "canUndo",
    get: function get() {
      return this._canUndo;
    },
    set: function set(value) {
      if (this._canUndo === value) return;
      this._canUndo = value;
      this.emit('canUndo', value);
    }
  }, {
    key: "canRedo",
    get: function get() {
      return this._canRedo;
    },
    set: function set(value) {
      if (this._canRedo === value) return;
      this._canRedo = value;
      this.emit('canRedo', value);
    }
  }]);

  return History;
}(events["a" /* default */]);

/* harmony default export */ var binding_history = (History);
// CONCATENATED MODULE: ./src/binding/observer-history.js



function ObserverHistory(args) {
  events["a" /* default */].call(this);
  args = args || {};
  this.item = args.item;
  this._history = args.history;
  this._enabled = args.enabled || true;
  this._prefix = args.prefix || '';
  this._combine = args.combine || false;
  this._events = [];

  this._initialize();
}

ObserverHistory.prototype = Object.create(events["a" /* default */].prototype);

ObserverHistory.prototype._initialize = function () {
  var self = this;

  this._events.push(this.item.on('*:set', function (path, value, valueOld) {
    if (!self._enabled || !self._history) return; // need jsonify

    if (value instanceof binding_observer) value = value.json(); // action

    var action = {
      name: self._prefix + path,
      combine: self._combine,
      undo: function undo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;

        if (valueOld === undefined) {
          item.unset(path);
        } else {
          item.set(path, valueOld);
        }

        item.history.enabled = true;
      },
      redo: function redo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;

        if (value === undefined) {
          item.unset(path);
        } else {
          item.set(path, value);
        }

        item.history.enabled = true;
      }
    };

    self._history.add(action);
  }));

  this._events.push(this.item.on('*:unset', function (path, valueOld) {
    if (!self._enabled || !self._history) return; // action

    var action = {
      name: self._prefix + path,
      combine: self._combine,
      undo: function undo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;
        item.set(path, valueOld);
        item.history.enabled = true;
      },
      redo: function redo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;
        item.unset(path);
        item.history.enabled = true;
      }
    };

    self._history.add(action);
  }));

  this._events.push(this.item.on('*:insert', function (path, value, ind) {
    if (!self._enabled || !self._history) return; // need jsonify
    // if (value instanceof Observer)
    //     value = value.json();
    // action

    var action = {
      name: self._prefix + path,
      combine: self._combine,
      undo: function undo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;
        item.removeValue(path, value);
        item.history.enabled = true;
      },
      redo: function redo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;
        item.insert(path, value, ind);
        item.history.enabled = true;
      }
    };

    self._history.add(action);
  }));

  this._events.push(this.item.on('*:remove', function (path, value, ind) {
    if (!self._enabled || !self._history) return; // need jsonify
    // if (value instanceof Observer)
    //     value = value.json();
    // action

    var action = {
      name: self._prefix + path,
      combine: self._combine,
      undo: function undo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;
        item.insert(path, value, ind);
        item.history.enabled = true;
      },
      redo: function redo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;
        item.removeValue(path, value);
        item.history.enabled = true;
      }
    };

    self._history.add(action);
  }));

  this._events.push(this.item.on('*:move', function (path, value, ind, indOld) {
    if (!self._enabled || !self._history) return; // action

    var action = {
      name: self._prefix + path,
      combine: self._combine,
      undo: function undo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;
        item.move(path, ind, indOld);
        item.history.enabled = true;
      },
      redo: function redo() {
        var item = self.item.latest();
        if (!item) return;
        item.history.enabled = false;
        item.move(path, indOld, ind);
        item.history.enabled = true;
      }
    };

    self._history.add(action);
  }));
};

ObserverHistory.prototype.destroy = function () {
  this._events.forEach(function (evt) {
    evt.unbind();
  });

  this._events.length = 0;
  this.item = null;
};

Object.defineProperty(ObserverHistory.prototype, 'enabled', {
  get: function get() {
    return this._enabled;
  },
  set: function set(value) {
    this._enabled = !!value;
  }
});
Object.defineProperty(ObserverHistory.prototype, 'prefix', {
  get: function get() {
    return this._prefix;
  },
  set: function set(value) {
    this._prefix = value || '';
  }
});
Object.defineProperty(ObserverHistory.prototype, 'combine', {
  get: function get() {
    return this._combine;
  },
  set: function set(value) {
    this._combine = !!value;
  }
});
/* harmony default export */ var observer_history = (ObserverHistory);
// CONCATENATED MODULE: ./src/binding/observer-list.js



function ObserverList(options) {
  events["a" /* default */].call(this);
  options = options || {};
  this.data = [];
  this._indexed = {};
  this.sorted = options.sorted || null;
  this.index = options.index || null;
}

ObserverList.prototype = Object.create(events["a" /* default */].prototype);
Object.defineProperty(ObserverList.prototype, 'length', {
  get: function get() {
    return this.data.length;
  }
});

ObserverList.prototype.get = function (index) {
  if (this.index) {
    return this._indexed[index] || null;
  }

  return this.data[index] || null;
};

ObserverList.prototype.set = function (index, value) {
  if (this.index) {
    this._indexed[index] = value;
  } else {
    this.data[index] = value;
  }
};

ObserverList.prototype.indexOf = function (item) {
  if (this.index) {
    var index = item instanceof binding_observer && item.get(this.index) || item[this.index];
    return this._indexed[index] && index || null;
  }

  var ind = this.data.indexOf(item);
  return ind !== -1 ? ind : null;
};

ObserverList.prototype.position = function (b, fn) {
  var l = this.data;
  var min = 0;
  var max = l.length - 1;
  var cur;
  var a, i;
  fn = fn || this.sorted;

  while (min <= max) {
    cur = Math.floor((min + max) / 2);
    a = l[cur];
    i = fn(a, b);

    if (i === 1) {
      max = cur - 1;
    } else if (i === -1) {
      min = cur + 1;
    } else {
      return cur;
    }
  }

  return -1;
};

ObserverList.prototype.positionNextClosest = function (b, fn) {
  var l = this.data;
  var min = 0;
  var max = l.length - 1;
  var cur;
  var a, i;
  fn = fn || this.sorted;
  if (l.length === 0) return -1;
  if (fn(l[0], b) === 0) return 0;

  while (min <= max) {
    cur = Math.floor((min + max) / 2);
    a = l[cur];
    i = fn(a, b);

    if (i === 1) {
      max = cur - 1;
    } else if (i === -1) {
      min = cur + 1;
    } else {
      return cur;
    }
  }

  if (fn(a, b) === 1) return cur;
  if (cur + 1 === l.length) return -1;
  return cur + 1;
};

ObserverList.prototype.has = function (item) {
  if (this.index) {
    var index = item instanceof binding_observer && item.get(this.index) || item[this.index];
    return !!this._indexed[index];
  }

  return this.data.indexOf(item) !== -1;
};

ObserverList.prototype.add = function (item) {
  if (this.has(item)) return null;
  var index = this.data.length;

  if (this.index) {
    index = item instanceof binding_observer && item.get(this.index) || item[this.index];
    this._indexed[index] = item;
  }

  var pos = 0;

  if (this.sorted) {
    pos = this.positionNextClosest(item);

    if (pos !== -1) {
      this.data.splice(pos, 0, item);
    } else {
      this.data.push(item);
    }
  } else {
    this.data.push(item);
    pos = this.data.length - 1;
  }

  this.emit('add', item, index, pos);
  return pos;
};

ObserverList.prototype.move = function (item, pos) {
  var ind = this.data.indexOf(item);
  this.data.splice(ind, 1);

  if (pos === -1) {
    this.data.push(item);
  } else {
    this.data.splice(pos, 0, item);
  }

  this.emit('move', item, pos);
};

ObserverList.prototype.remove = function (item) {
  if (!this.has(item)) return;
  var ind = this.data.indexOf(item);
  var index = ind;

  if (this.index) {
    index = item instanceof binding_observer && item.get(this.index) || item[this.index];
    delete this._indexed[index];
  }

  this.data.splice(ind, 1);
  this.emit('remove', item, index);
};

ObserverList.prototype.removeByKey = function (index) {
  var item;

  if (this.index) {
    item = this._indexed[index];
    if (!item) return;
    var ind = this.data.indexOf(item);
    this.data.splice(ind, 1);
    delete this._indexed[index];
    this.emit('remove', item, ind);
  } else {
    if (this.data.length < index) return;
    item = this.data[index];
    this.data.splice(index, 1);
    this.emit('remove', item, index);
  }
};

ObserverList.prototype.removeBy = function (fn) {
  var i = this.data.length;

  while (i--) {
    if (!fn(this.data[i])) continue;

    if (this.index) {
      delete this._indexed[this.data[i][this.index]];
    }

    this.data.splice(i, 1);
    this.emit('remove', this.data[i], i);
  }
};

ObserverList.prototype.clear = function () {
  var items = this.data.slice(0);
  this.data = [];
  this._indexed = {};
  var i = items.length;

  while (i--) {
    this.emit('remove', items[i], i);
  }
};

ObserverList.prototype.forEach = function (fn) {
  for (var i = 0; i < this.data.length; i++) {
    fn(this.data[i], this.index && this.data[i][this.index] || i);
  }
};

ObserverList.prototype.find = function (fn) {
  var items = [];

  for (var i = 0; i < this.data.length; i++) {
    if (!fn(this.data[i])) continue;
    var index = i;
    if (this.index) index = this.data[i][this.index];
    items.push([index, this.data[i]]);
  }

  return items;
};

ObserverList.prototype.findOne = function (fn) {
  for (var i = 0; i < this.data.length; i++) {
    if (!fn(this.data[i])) continue;
    var index = i;
    if (this.index) index = this.data[i][this.index];
    return [index, this.data[i]];
  }

  return null;
};

ObserverList.prototype.map = function (fn) {
  return this.data.map(fn);
};

ObserverList.prototype.sort = function (fn) {
  this.data.sort(fn);
};

ObserverList.prototype.array = function () {
  return this.data.slice(0);
};

ObserverList.prototype.json = function () {
  var items = this.array();

  for (var i = 0; i < items.length; i++) {
    if (items[i] instanceof binding_observer) {
      items[i] = items[i].json();
    }
  }

  return items;
};

/* harmony default export */ var observer_list = (ObserverList);
// CONCATENATED MODULE: ./src/binding/index.js











/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(29);
} else {}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Events() {
  // _world
  Object.defineProperty(this, '_events', {
    enumerable: false,
    configurable: false,
    writable: true,
    value: {}
  });
  this._suspendEvents = false;
  Object.defineProperty(this, 'suspendEvents', {
    get: function get() {
      return this._suspendEvents;
    },
    set: function set(value) {
      this._suspendEvents = !!value;
    }
  });
}

Events.prototype.on = function (name, fn) {
  var events = this._events[name];

  if (events === undefined) {
    this._events[name] = [fn];
  } else {
    if (events.indexOf(fn) === -1) events.push(fn);
  }

  return new EventHandle(this, name, fn);
};

Events.prototype.once = function (name, fn) {
  var self = this;
  var evt = this.on(name, function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    fn.call(self, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    evt.unbind();
  });
  return evt;
};

Events.prototype.emit = function (name, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  if (this._suspendEvents) return;
  var events = this._events[name];
  if (!events) return this;
  events = events.slice(0);

  for (var i = 0; i < events.length; i++) {
    if (!events[i]) continue;

    try {
      events[i].call(this, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    } catch (ex) {
      console.info('%c%s %c(event error)', 'color: #06f', name, 'color: #f00');
      console.log(ex.stack);
    }
  }

  return this;
};

Events.prototype.unbind = function (name, fn) {
  if (name) {
    var events = this._events[name];
    if (!events) return this;

    if (fn) {
      var i = events.indexOf(fn);

      if (i !== -1) {
        if (events.length === 1) {
          delete this._events[name];
        } else {
          events.splice(i, 1);
        }
      }
    } else {
      delete this._events[name];
    }
  } else {
    this._events = {};
  }

  return this;
};

function EventHandle(owner, name, fn) {
  this.owner = owner;
  this.name = name;
  this.fn = fn;
}

EventHandle.prototype.unbind = function () {
  if (!this.owner) return;
  this.owner.unbind(this.name, this.fn);
  this.owner = null;
  this.name = null;
  this.fn = null;
};

EventHandle.prototype.call = function () {
  if (!this.fn) return;
  this.fn.call(this.owner, arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
};

EventHandle.prototype.on = function (name, fn) {
  return this.owner.on(name, fn);
};

/* harmony default export */ __webpack_exports__["a"] = (Events);

/***/ })

/******/ });
});