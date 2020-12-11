(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pcui"] = factory();
	else
		root["pcui"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FLEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GRID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return HIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SCROLLABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return RESIZABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return READONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLLAPSIBLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLLAPSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FOCUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MULTIPLE_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return NOT_FLEXIBLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEFAULT_MOUSEDOWN; });
var FLEX = 'pcui-flex';
var GRID = 'pcui-grid';
var HIDDEN = 'pcui-hidden';
var SCROLLABLE = 'pcui-scrollable';
var RESIZABLE = 'pcui-resizable';
var READONLY = 'pcui-readonly';
var DISABLED = 'pcui-disabled';
var COLLAPSIBLE = 'pcui-collapsible';
var COLLAPSED = 'pcui-collapsed';
var FOCUS = 'pcui-focus';
var MULTIPLE_VALUES = 'pcui-multiple-values';
var ERROR = 'pcui-error';
var FLASH = 'flash';
var NOT_FLEXIBLE = 'pcui-not-flexible';
var DEFAULT_MOUSEDOWN = 'pcui-default-mousedown';


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Element

// CONCATENATED MODULE: ./src/components/Element/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// EXTERNAL MODULE: ./src/binding/events.js
var events = __webpack_require__(5);

// CONCATENATED MODULE: ./src/components/Element/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/* global BindingBase */

/* global Observer */

var CLASS_ELEMENT = 'pcui-element'; // these are properties that are
// available as Element properties and
// can also be set through the Element constructor

var SIMPLE_CSS_PROPERTIES = ['flexDirection', 'flexGrow', 'flexBasis', 'flexShrink', 'flexWrap', 'alignItems', 'alignSelf', 'justifyContent', 'justifySelf']; // Stores Element types by name and default arguments

var ELEMENT_REGISTRY = {};
/**
 * @event
 * @name Element#enable
 * @description Fired when the Element gets enabled
 */

/**
 * @event
 * @name Element#disable
 * @description Fired when the Element gets disabled
 */

/**
 * @event
 * @name Element#hide
 * @description Fired when the Element gets hidden
 */

/**
 * @event
 * @name Element#hideToRoot
 * @description Fired when the Element or any of its parent get hidden
 */

/**
 * @event
 * @name Element#show
 * @description Fired when the Element stops being hidden
 */

/**
 * @event
 * @name Element#showToRoot
 * @description Fired when the Element and all of its parents become visible
 */

/**
 * @event
 * @name Element#readOnly
 * @param {boolean} readOnly - Whether the Element is now read only
 * @description Fired when the readOnly property of an Element changes
 */

/**
 * @event
 * @name Element#parent
 * @description Fired when the Element's parent gets set
 * @param {Element} parent - The new parent
 */

/**
 * @event
 * @name Element#click
 * @description Fired when the mouse is clicked on the Element but only if the Element is enabled.
 * @param {Event} evt - The native mouse event.
 */

/**
 * @event
 * @name Element#hover
 * @description Fired when the mouse starts hovering on the Element
 * @param {Event} evt - The native mouse event.
 */

/**
 * @event
 * @name Element#hoverend
 * @description Fired when the mouse stops hovering on the Element
 * @param {Event} evt - The native mouse event.
 */

/**
 * @event
 * @name Element#destroy
 * @description Fired after the element has been destroyed.
 * @param {HTMLElement} dom - The DOM element
 * @param {Element} element - The element
 */

/**
 * @event
 * @name Element#hoverend
 * @description Fired when the mouse stops hovering on the Element
 * @param {Event} evt - The native mouse event.
 */

/**
 * @name Element
 * @classdesc The base class for all UI elements.
 * @augments Events
 * @property {boolean} enabled Gets / sets whether the Element or its parent chain is enabled or not. Defaults to true.
 * @property {HTMLElement} dom Gets the root DOM node for this Element.
 * @property {Element} parent Gets the parent Element.
 * @property {boolean} hidden Gets / sets whether the Element is hidden.
 * @property {boolean} hiddenToRoot Gets whether the Element is hidden all the way up to the root. If the Element itself or any of its parents are hidden then this is true.
 * @property {boolean} readOnly Gets / sets whether the Element is read only.
 * @property {boolean} ignoreParent Gets / sets whether the Element will ignore parent events & variable states.
 * @property {number} width Gets / sets the width of the Element in pixels. Can also be an empty string to remove it.
 * @property {number} height Gets / sets the height of the Element in pixels. Can also be an empty string to remove it.
 * @property {number} tabIndex Gets / sets the tabIndex of the Element.
 * @property {boolean} error Gets / sets whether the Element is in an error state.
 * @property {BindingBase} binding Gets / sets the Binding object for the element.
 * @property {CSSStyleDeclaration} style Shortcut to pcui.Element.dom.style.
 * @property {DOMTokenList} class Shortcut to pcui.Element.dom.classList.
 */

var Element_Element = /*#__PURE__*/function (_Events) {
  _inherits(Element, _Events);

  var _super = _createSuper(Element);

  /**
   * Creates a new Element.
   *
   * @param {HTMLElement} dom - The DOM element that this pcui.Element wraps.
   * @param {object} args - The arguments. All settable properties can also be set through the constructor.
   * @param {string} [args.id] - The desired id for the Element HTML node.
   * @param {string|string[]} [args.class] - The CSS class or classes we want to add to the element.
   * @param {boolean} [args.isRoot] - If true then this is the root element. Set this to true for the topmost Element in your page.
   */
  function Element(dom, args) {
    var _this;

    _classCallCheck(this, Element);

    _this = _super.call(this);
    if (!args) args = {};
    _this._destroyed = false;
    _this._parent = null;
    _this._domEventClick = _this._onClick.bind(_assertThisInitialized(_this));
    _this._domEventMouseOver = _this._onMouseOver.bind(_assertThisInitialized(_this));
    _this._domEventMouseOut = _this._onMouseOut.bind(_assertThisInitialized(_this));
    _this._eventsParent = [];
    _this._dom = dom || args.dom || document.createElement('div');

    if (args.id !== undefined) {
      _this._dom.id = args.id;
    } // add ui reference


    _this._dom.ui = _assertThisInitialized(_this); // add event listeners

    _this._dom.addEventListener('click', _this._domEventClick);

    _this._dom.addEventListener('mouseover', _this._domEventMouseOver);

    _this._dom.addEventListener('mouseout', _this._domEventMouseOut); // add element class


    _this._dom.classList.add(CLASS_ELEMENT); // add user classes


    if (args.class) {
      if (Array.isArray(args.class)) {
        for (var i = 0; i < args.class.length; i++) {
          _this._dom.classList.add(args.class[i]);
        }
      } else {
        _this._dom.classList.add(args.class);
      }
    }

    _this.enabled = args.enabled !== undefined ? args.enabled : true;
    _this._hiddenParents = !args.isRoot;
    _this.hidden = args.hidden || false;
    _this.readOnly = args.readOnly || false;
    _this.ignoreParent = args.ignoreParent || false;

    if (args.width !== undefined) {
      _this.width = args.width;
    }

    if (args.height !== undefined) {
      _this.height = args.height;
    }

    if (args.tabIndex !== undefined) {
      _this.tabIndex = args.tabIndex;
    } // copy CSS properties from args


    for (var key in args) {
      if (args[key] === undefined) continue;

      if (SIMPLE_CSS_PROPERTIES.indexOf(key) !== -1) {
        _this[key] = args[key];
      }
    } // set the binding object


    if (args.binding) {
      _this.binding = args.binding;
    }

    _this._flashTimeout = null;
    return _this;
  }
  /**
   * @name Element#link
   * @description Links the specified observers and paths to the Element's data binding.
   * @param {Observer|Observer[]} observers - An array of observers or a single observer.
   * @param {string|string[]} paths - A path for the observer(s) or an array of paths that maps to each separate observer.
   */


  _createClass(Element, [{
    key: "link",
    value: function link(observers, paths) {
      if (this._binding) {
        this._binding.link(observers, paths);
      }
    }
    /**
     * @name Element#unlink
     * @description Unlinks the Element from its observers
     */

  }, {
    key: "unlink",
    value: function unlink() {
      if (this._binding) {
        this._binding.unlink();
      }
    }
    /**
     * @name Element#flash
     * @description Triggers a flash animation on the Element.
     */

  }, {
    key: "flash",
    value: function flash() {
      if (this._flashTimeout) return;
      this.classAdd(src_class["f" /* FLASH */]);
      this._flashTimeout = setTimeout(function () {
        this._flashTimeout = null;
        this.classRemove(src_class["f" /* FLASH */]);
      }.bind(this), 200);
    }
  }, {
    key: "_onClick",
    value: function _onClick(evt) {
      if (this.enabled) {
        this.emit('click', evt);
      }
    }
  }, {
    key: "_onMouseOver",
    value: function _onMouseOver(evt) {
      this.emit('hover', evt);
    }
  }, {
    key: "_onMouseOut",
    value: function _onMouseOut(evt) {
      this.emit('hoverend', evt);
    }
  }, {
    key: "_onHiddenToRootChange",
    value: function _onHiddenToRootChange(hiddenToRoot) {
      if (hiddenToRoot) {
        this.emit('hideToRoot');
      } else {
        this.emit('showToRoot');
      }
    }
  }, {
    key: "_onEnabledChange",
    value: function _onEnabledChange(enabled) {
      if (enabled) {
        this.classRemove(src_class["d" /* DISABLED */]);
      } else {
        this.classAdd(src_class["d" /* DISABLED */]);
      }

      this.emit(enabled ? 'enable' : 'disable');
    }
  }, {
    key: "_onParentDestroy",
    value: function _onParentDestroy() {
      this.destroy();
    }
  }, {
    key: "_onParentDisable",
    value: function _onParentDisable() {
      if (this._ignoreParent) return;

      if (this._enabled) {
        this._onEnabledChange(false);
      }
    }
  }, {
    key: "_onParentEnable",
    value: function _onParentEnable() {
      if (this._ignoreParent) return;

      if (this._enabled) {
        this._onEnabledChange(true);
      }
    }
  }, {
    key: "_onParentShowToRoot",
    value: function _onParentShowToRoot() {
      var oldHiddenToRoot = this.hiddenToRoot;
      this._hiddenParents = false;

      if (oldHiddenToRoot !== this.hiddenToRoot) {
        this._onHiddenToRootChange(this.hiddenToRoot);
      }
    }
  }, {
    key: "_onParentHideToRoot",
    value: function _onParentHideToRoot() {
      var oldHiddenToRoot = this.hiddenToRoot;
      this._hiddenParents = true;

      if (oldHiddenToRoot !== this.hiddenToRoot) {
        this._onHiddenToRootChange(this.hiddenToRoot);
      }
    }
  }, {
    key: "_onReadOnlyChange",
    value: function _onReadOnlyChange(readOnly) {
      if (readOnly) {
        this.classAdd(src_class["m" /* READONLY */]);
      } else {
        this.classRemove(src_class["m" /* READONLY */]);
      }

      this.emit('readOnly', readOnly);
    }
  }, {
    key: "_onParentReadOnlyChange",
    value: function _onParentReadOnlyChange(readOnly) {
      if (this._ignoreParent) return;

      if (readOnly) {
        if (!this._readOnly) {
          this._onReadOnlyChange(true);
        }
      } else {
        if (!this._readOnly) {
          this._onReadOnlyChange(false);
        }
      }
    }
    /**
     * @name Element#classAdd
     * @description Adds the specified class to the DOM element but checks if the classList contains it first.
     * @param {string} cls - The class to add
     */

  }, {
    key: "classAdd",
    value: function classAdd(cls) {
      var classList = this._dom.classList;

      if (!classList.contains(cls)) {
        classList.add(cls);
      }
    }
    /**
     * @name Element#classRemove
     * @description Removes the specified class from the DOM element but checks if the classList contains it first.
     * @param {string} cls - The class to remove
     */

  }, {
    key: "classRemove",
    value: function classRemove(cls) {
      var classList = this._dom.classList;

      if (classList.contains(cls)) {
        classList.remove(cls);
      }
    }
    /**
     * @name Element#destroy
     * @description Destroys the Element and its events.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;
      this._destroyed = true;

      if (this.binding) {
        this.binding = null;
      } else {
        this.unlink();
      }

      if (this.parent) {
        var parent = this.parent;

        for (var i = 0; i < this._eventsParent.length; i++) {
          this._eventsParent[i].unbind();
        }

        this._eventsParent.length = 0; // remove element from parent
        // check if parent has been destroyed already
        // because we do not want to be emitting events
        // on a destroyed parent after it's been destroyed
        // as it is easy to lead to null exceptions

        if (parent.remove && !parent._destroyed) {
          parent.remove(this);
        } // set parent to null and remove from
        // parent dom just in case parent.remove above
        // didn't work because of an override or other condition


        this._parent = null;

        if (this._dom && this._dom.parentElement) {
          this._dom.parentElement.removeChild(this._dom);
        }
      }

      var dom = this._dom;

      if (dom) {
        // remove event listeners
        dom.removeEventListener('click', this._domEventClick);
        dom.removeEventListener('mouseover', this._domEventMouseOver);
        dom.removeEventListener('mouseout', this._domEventMouseOut); // remove ui reference

        delete dom.ui;
        this._dom = null;
      }

      this._domEventClick = null;
      this._domEventMouseOver = null;
      this._domEventMouseOut = null;

      if (this._flashTimeout) {
        clearTimeout(this._flashTimeout);
      }

      this.emit('destroy', dom, this);
      this.unbind();
    }
    /**
     * @static
     * @param {string} type - The type we want to reference this Element by
     * @param {object} cls - The actual class of the Element
     * @param {object} [defaultArguments] - Default arguments when creating this type
     */

  }, {
    key: "enabled",
    get: function get() {
      if (this._ignoreParent) return this._enabled;
      return this._enabled && (!this._parent || this._parent.enabled);
    },
    set: function set(value) {
      if (this._enabled === value) return; // remember if enabled in hierarchy

      var enabled = this.enabled;
      this._enabled = value; // only fire event if hierarchy state changed

      if (enabled !== value) {
        this._onEnabledChange(value);
      }
    }
  }, {
    key: "ignoreParent",
    get: function get() {
      return this._ignoreParent;
    },
    set: function set(value) {
      this._ignoreParent = value;

      this._onEnabledChange(this.enabled);

      this._onReadOnlyChange(this.readOnly);
    }
  }, {
    key: "dom",
    get: function get() {
      return this._dom;
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent;
    },
    set: function set(value) {
      if (value === this._parent) return;
      var oldEnabled = this.enabled;
      var oldReadonly = this.readOnly;
      var oldHiddenToRoot = this.hiddenToRoot;

      if (this._parent) {
        for (var i = 0; i < this._eventsParent.length; i++) {
          this._eventsParent[i].unbind();
        }

        this._eventsParent.length = 0;
      }

      this._parent = value;

      if (this._parent) {
        this._eventsParent.push(this._parent.once('destroy', this._onParentDestroy.bind(this)));

        this._eventsParent.push(this._parent.on('disable', this._onParentDisable.bind(this)));

        this._eventsParent.push(this._parent.on('enable', this._onParentEnable.bind(this)));

        this._eventsParent.push(this._parent.on('readOnly', this._onParentReadOnlyChange.bind(this)));

        this._eventsParent.push(this._parent.on('showToRoot', this._onParentShowToRoot.bind(this)));

        this._eventsParent.push(this._parent.on('hideToRoot', this._onParentHideToRoot.bind(this)));

        this._hiddenParents = this._parent.hiddenToRoot;
      } else {
        this._hiddenParents = true;
      }

      this.emit('parent', this._parent);
      var newEnabled = this.enabled;

      if (newEnabled !== oldEnabled) {
        this._onEnabledChange(newEnabled);
      }

      var newReadonly = this.readOnly;

      if (newReadonly !== oldReadonly) {
        this._onReadOnlyChange(newReadonly);
      }

      var hiddenToRoot = this.hiddenToRoot;

      if (hiddenToRoot !== oldHiddenToRoot) {
        this._onHiddenToRootChange(hiddenToRoot);
      }
    }
  }, {
    key: "hidden",
    get: function get() {
      return this._hidden;
    },
    set: function set(value) {
      if (value === this._hidden) return;
      var oldHiddenToRoot = this.hiddenToRoot;
      this._hidden = value;

      if (value) {
        this.classAdd(src_class["j" /* HIDDEN */]);
      } else {
        this.classRemove(src_class["j" /* HIDDEN */]);
      }

      this.emit(value ? 'hide' : 'show');

      if (this.hiddenToRoot !== oldHiddenToRoot) {
        this._onHiddenToRootChange(this.hiddenToRoot);
      }
    }
  }, {
    key: "hiddenToRoot",
    get: function get() {
      return this._hidden || this._hiddenParents;
    }
  }, {
    key: "readOnly",
    get: function get() {
      if (this._ignoreParent) return this._readOnly;
      return this._readOnly || !!(this._parent && this._parent.readOnly);
    },
    set: function set(value) {
      if (this._readOnly === value) return;
      this._readOnly = value;

      this._onReadOnlyChange(value);
    }
  }, {
    key: "error",
    get: function get() {
      return this._hasError;
    },
    set: function set(value) {
      if (this._hasError === value) return;
      this._hasError = value;

      if (value) {
        this.classAdd(src_class["e" /* ERROR */]);
      } else {
        this.classRemove(src_class["e" /* ERROR */]);
      }
    }
  }, {
    key: "style",
    get: function get() {
      return this._dom.style;
    }
  }, {
    key: "class",
    get: function get() {
      return this._dom.classList;
    }
  }, {
    key: "width",
    get: function get() {
      return this._dom.clientWidth;
    },
    set: function set(value) {
      if (typeof value === 'number') {
        value += 'px';
      }

      this.style.width = value;
    }
  }, {
    key: "height",
    get: function get() {
      return this._dom.clientHeight;
    },
    set: function set(value) {
      if (typeof value === 'number') {
        value += 'px';
      }

      this.style.height = value;
    }
  }, {
    key: "tabIndex",
    get: function get() {
      return this._dom.tabIndex;
    },
    set: function set(value) {
      this._dom.tabIndex = value;
    }
  }, {
    key: "binding",
    get: function get() {
      return this._binding;
    },
    set: function set(value) {
      if (this._binding === value) return;
      var prevObservers;
      var prevPaths;

      if (this._binding) {
        prevObservers = this._binding.observers;
        prevPaths = this._binding.paths;
        this.unlink();
        this._binding.element = null;
        this._binding = null;
      }

      this._binding = value;

      if (this._binding) {
        this._binding.element = this;

        if (prevObservers && prevPaths) {
          this.link(prevObservers, prevPaths);
        }
      }
    }
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
    /*  Backwards Compatibility */
    // we should remove those after we migrate

  }, {
    key: "disabled",
    get: function get() {
      return !this.enabled;
    },
    set: function set(value) {
      this.enabled = !value;
    }
  }, {
    key: "element",
    get: function get() {
      return this.dom;
    },
    set: function set(value) {
      this.dom = value;
    }
  }, {
    key: "innerElement",
    get: function get() {
      return this.domContent;
    },
    set: function set(value) {
      this.domContent = value;
    }
  }], [{
    key: "register",
    value: function register(type, cls, defaultArguments) {
      ELEMENT_REGISTRY[type] = {
        cls: cls,
        defaultArguments: defaultArguments
      };
    }
    /**
     * @static
     * @param {string} type - The type we want to unregister
     */

  }, {
    key: "unregister",
    value: function unregister(type) {
      delete ELEMENT_REGISTRY[type];
    }
    /**
     * @static
     * @param {string} type - The type of the Element (registered by pcui.Element#register)
     * @param {object} args - Arguments for the Element
     * @returns {Element} A new pcui.Element of the desired type
     */

  }, {
    key: "create",
    value: function create(type, args) {
      var entry = ELEMENT_REGISTRY[type];

      if (!entry) {
        console.error('Invalid type passed to pcui.Element#create', type);
        return;
      }

      var cls = entry.cls;
      var clsArgs = {};

      if (entry.defaultArguments) {
        Object.assign(clsArgs, entry.defaultArguments);
      }

      if (args) {
        Object.assign(clsArgs, args);
      }

      return new cls(clsArgs);
    }
  }]);

  return Element;
}(events["a" /* default */]); // utility function to expose a CSS property
// via an Element.prototype property


function exposeCssProperty(name) {
  Object.defineProperty(Element_Element.prototype, name, {
    get: function get() {
      return this.style[name];
    },
    set: function set(value) {
      this.style[name] = value;
    }
  });
} // expose rest of CSS properties


SIMPLE_CSS_PROPERTIES.forEach(exposeCssProperty);

/* harmony default export */ var components_Element = __webpack_exports__["a"] = (Element_Element);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Container

// CONCATENATED MODULE: ./src/components/Container/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/Container/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RESIZE_HANDLE_SIZE = 4;
var VALID_RESIZABLE_VALUES = [null, 'top', 'right', 'bottom', 'left'];
var CLASS_RESIZING = src_class["n" /* RESIZABLE */] + '-resizing';
var CLASS_RESIZABLE_HANDLE = 'pcui-resizable-handle';
var CLASS_CONTAINER = 'pcui-container';
var CLASS_DRAGGED = CLASS_CONTAINER + '-dragged';
var CLASS_DRAGGED_CHILD = CLASS_DRAGGED + '-child';
/**
 * @event
 * @name Container#append
 * @description Fired when a child Element gets added to the Container
 * @param {Element} element - The element that was added
 */

/**
 * @event
 * @name Container#remove
 * @description Fired when a child Element gets removed from the Container
 * @param {Element} element - The element that was removed
 */

/**
 * @event
 * @name Container#scroll
 * @description Fired when the container is scrolled.
 * @param {Event} evt - The native scroll event.
 */

/**
 * @event
 * @name Container#resize
 * @description Fired when the container gets resized using the resize handle.
 */

/**
 * @name Container
 * @classdesc A container is the basic building block for Elements that are grouped together.
 * A container can contain any other element including other containers.
 * @property {boolean} flex Gets / sets whether the container supports the flex layout. Cannot coexist with grid.
 * @property {boolean} grid Gets / sets whether the container supports the grid layout. Cannot coexist with flex.
 * @property {number} resizeMin Gets / sets the minimum size the Container can take when resized in pixels.
 * @property {number} resizeMax Gets / sets the maximum size the Container can take when resized in pixels.
 * @property {boolean} scrollable Gets / sets whether the container should be scrollable. Defaults to false.
 * @property {string} resizable Gets / sets whether the Container is resizable and where the resize handle is located. Can
 * be one of 'top', 'bottom', 'right', 'left'. Set to null to disable resizing.
 * @augments Element
 * @mixes pcui.IContainer
 * @mixes pcui.IFlex
 * @mixes pcui.IGrid
 * @mixes pcui.IScrollable
 * @mixes pcui.IResizable
 */

var Container_Container = /*#__PURE__*/function (_Element) {
  _inherits(Container, _Element);

  var _super = _createSuper(Container);

  /**
   * Creates a new Container.
   *
   * @param {object} args - The arguments. Extends the pcui.Element constructor arguments. All settable properties can also be set through the constructor.
   * @param {HTMLElement} [args.dom] - The DOM element to use for the container. If unspecified a new element will be created.
   */
  function Container(args) {
    var _this;

    _classCallCheck(this, Container);

    if (!args) args = {};
    var dom = args.dom || document.createElement('div');
    _this = _super.call(this, dom, args);

    _this.class.add(CLASS_CONTAINER);

    _this._domEventScroll = _this._onScroll.bind(_assertThisInitialized(_this));
    _this.domContent = _this._dom; // scroll

    _this.scrollable = args.scrollable !== undefined ? args.scrollable : false; // flex

    _this.flex = !!args.flex; // grid

    var grid = !!args.grid;

    if (grid) {
      if (_this.flex) {
        console.error('Invalid pcui.Container arguments: "grid" and "flex" cannot both be true.');
        grid = false;
      }
    }

    _this.grid = grid; // resize related

    _this._domResizeHandle = null;
    _this._domEventResizeStart = _this._onResizeStart.bind(_assertThisInitialized(_this));
    _this._domEventResizeMove = _this._onResizeMove.bind(_assertThisInitialized(_this));
    _this._domEventResizeEnd = _this._onResizeEnd.bind(_assertThisInitialized(_this));
    _this._domEventResizeTouchStart = _this._onResizeTouchStart.bind(_assertThisInitialized(_this));
    _this._domEventResizeTouchMove = _this._onResizeTouchMove.bind(_assertThisInitialized(_this));
    _this._domEventResizeTouchEnd = _this._onResizeTouchEnd.bind(_assertThisInitialized(_this));
    _this._resizeTouchId = null;
    _this._resizeData = null;
    _this._resizeHorizontally = true;
    _this.resizable = args.resizable || null;
    _this._resizeMin = 100;
    _this._resizeMax = 300;

    if (args.resizeMin !== undefined) {
      _this.resizeMin = args.resizeMin;
    }

    if (args.resizeMax !== undefined) {
      _this.resizeMax = args.resizeMax;
    }

    _this._draggedStartIndex = -1;
    return _this;
  }
  /**
   * @name Container#append
   * @description Appends an element to the container.
   * @param {Element} element - The element to append.
   * @fires 'append'
   */


  _createClass(Container, [{
    key: "append",
    value: function append(element) {
      var dom = this._getDomFromElement(element);

      this._domContent.appendChild(dom);

      this._onAppendChild(element);
    }
    /**
     * @name Container#appendBefore
     * @description Appends an element to the container before the specified reference element.
     * @param {Element} element - The element to append.
     * @param {Element} referenceElement - The element before which the element will be appended.
     * @fires 'append'
     */

  }, {
    key: "appendBefore",
    value: function appendBefore(element, referenceElement) {
      var dom = this._getDomFromElement(element);

      this._domContent.appendChild(dom);

      var referenceDom = referenceElement && this._getDomFromElement(referenceElement);

      this._domContent.insertBefore(dom, referenceDom);

      this._onAppendChild(element);
    }
    /**
     * @name Container#appendAfter
     * @description Appends an element to the container just after the specified reference element.
     * @param {Element} element - The element to append.
     * @param {Element} referenceElement - The element after which the element will be appended.
     * @fires 'append'
     */

  }, {
    key: "appendAfter",
    value: function appendAfter(element, referenceElement) {
      var dom = this._getDomFromElement(element);

      var referenceDom = referenceElement && this._getDomFromElement(referenceElement);

      var elementBefore = referenceDom ? referenceDom.nextSibling : null;

      if (elementBefore) {
        this._domContent.insertBefore(dom, elementBefore);
      } else {
        this._domContent.appendChild(dom);
      }

      this._onAppendChild(element);
    }
    /**
     * @name Container#prepend
     * @description Inserts an element in the beginning of the container.
     * @param {Element} element - The element to prepend.
     * @fires 'append'
     */

  }, {
    key: "prepend",
    value: function prepend(element) {
      var dom = this._getDomFromElement(element);

      var first = this._domContent.firstChild;

      if (first) {
        this._domContent.insertBefore(dom, first);
      } else {
        this._domContent.appendChild(dom);
      }

      this._onAppendChild(element);
    }
    /**
     * @name Container#remove
     * @description Removes the specified child element from the container.
     * @param {Element} element - The element to remove.
     * @fires 'remove'
     */

  }, {
    key: "remove",
    value: function remove(element) {
      if (element.parent !== this) return;

      var dom = this._getDomFromElement(element);

      this._domContent.removeChild(dom);

      this._onRemoveChild(element);
    }
    /**
     * @name Container#move
     * @description Moves the specified child at the specified index.
     * @param {Element} element - The element to move.
     * @param {number} index - The index
     */

  }, {
    key: "move",
    value: function move(element, index) {
      var idx = -1;

      for (var i = 0; i < this.dom.childNodes.length; i++) {
        if (this.dom.childNodes[i].ui === element) {
          idx = i;
          break;
        }
      }

      if (idx === -1) {
        this.appendBefore(element, this.dom.childNodes[index]);
      } else if (index !== idx) {
        this.remove(element);

        if (index < idx) {
          this.appendBefore(element, this.dom.childNodes[index]);
        } else {
          this.appendAfter(element, this.dom.childNodes[index - 1]);
        }
      }
    }
    /**
     * @name Container#clear
     * @description Clears all children from the container.
     * @fires 'remove' for each child element.
     */

  }, {
    key: "clear",
    value: function clear() {
      var i = this._domContent.childNodes.length;

      while (i--) {
        var node = this._domContent.childNodes[i];

        if (node.ui) {
          node.ui.destroy();
        }
      }

      this._domContent.innerHTML = '';
    } // Used for backwards compatibility with the legacy ui framework

  }, {
    key: "_getDomFromElement",
    value: function _getDomFromElement(element) {
      if (element.dom) {
        return element.dom;
      }

      if (element.element) {
        // console.log('Legacy ui.Element passed to pcui.Container', this.class, element.class);
        return element.element;
      }

      return element;
    }
  }, {
    key: "_onAppendChild",
    value: function _onAppendChild(element) {
      element.parent = this;
      this.emit('append', element);
    }
  }, {
    key: "_onRemoveChild",
    value: function _onRemoveChild(element) {
      element.parent = null;
      this.emit('remove', element);
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(evt) {
      this.emit('scroll', evt);
    }
  }, {
    key: "_createResizeHandle",
    value: function _createResizeHandle() {
      var handle = document.createElement('div');
      handle.classList.add(CLASS_RESIZABLE_HANDLE);
      handle.ui = this;
      handle.addEventListener('mousedown', this._domEventResizeStart);
      handle.addEventListener('touchstart', this._domEventResizeTouchStart, {
        passive: false
      });
      this._domResizeHandle = handle;
    }
  }, {
    key: "_onResizeStart",
    value: function _onResizeStart(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      window.addEventListener('mousemove', this._domEventResizeMove);
      window.addEventListener('mouseup', this._domEventResizeEnd);

      this._resizeStart();
    }
  }, {
    key: "_onResizeMove",
    value: function _onResizeMove(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      this._resizeMove(evt.clientX, evt.clientY);
    }
  }, {
    key: "_onResizeEnd",
    value: function _onResizeEnd(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      window.removeEventListener('mousemove', this._domEventResizeMove);
      window.removeEventListener('mouseup', this._domEventResizeEnd);

      this._resizeEnd();
    }
  }, {
    key: "_onResizeTouchStart",
    value: function _onResizeTouchStart(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      for (var i = 0; i < evt.changedTouches.length; i++) {
        var touch = evt.changedTouches[i];

        if (touch.target === this._domResizeHandle) {
          this._resizeTouchId = touch.identifier;
        }
      }

      window.addEventListener('touchmove', this._domEventResizeTouchMove);
      window.addEventListener('touchend', this._domEventResizeTouchEnd);

      this._resizeStart();
    }
  }, {
    key: "_onResizeTouchMove",
    value: function _onResizeTouchMove(evt) {
      for (var i = 0; i < evt.changedTouches.length; i++) {
        var touch = evt.changedTouches[i];

        if (touch.identifier !== this._resizeTouchId) {
          continue;
        }

        evt.stopPropagation();
        evt.preventDefault();

        this._resizeMove(touch.clientX, touch.clientY);

        break;
      }
    }
  }, {
    key: "_onResizeTouchEnd",
    value: function _onResizeTouchEnd(evt) {
      for (var i = 0; i < evt.changedTouches.length; i++) {
        var touch = evt.changedTouches[i];

        if (touch.identifier === this._resizeTouchId) {
          continue;
        }

        this._resizeTouchId = null;
        evt.preventDefault();
        evt.stopPropagation();
        window.removeEventListener('touchmove', this._domEventResizeTouchMove);
        window.removeEventListener('touchend', this._domEventResizeTouchEnd);

        this._resizeEnd();

        break;
      }
    }
  }, {
    key: "_resizeStart",
    value: function _resizeStart() {
      this.class.add(CLASS_RESIZING);
    }
  }, {
    key: "_resizeMove",
    value: function _resizeMove(x, y) {
      // if we haven't initialized resizeData do so now
      if (!this._resizeData) {
        this._resizeData = {
          x: x,
          y: y,
          width: this.dom.clientWidth,
          height: this.dom.clientHeight
        };
        return;
      }

      if (this._resizeHorizontally) {
        // horizontal resizing
        var offsetX = this._resizeData.x - x;

        if (this._resizable === 'right') {
          offsetX = -offsetX;
        }

        this.width = RESIZE_HANDLE_SIZE + Math.max(this._resizeMin, Math.min(this._resizeMax, this._resizeData.width + offsetX));
      } else {
        // vertical resizing
        var offsetY = this._resizeData.y - y;

        if (this._resizable === 'bottom') {
          offsetY = -offsetY;
        }

        this.height = Math.max(this._resizeMin, Math.min(this._resizeMax, this._resizeData.height + offsetY));
      }

      this.emit('resize');
    }
  }, {
    key: "_resizeEnd",
    value: function _resizeEnd() {
      this._resizeData = null;
      this.class.remove(CLASS_RESIZING);
    }
    /**
     * Resize the container
     *
     * @param {number} x - The amount of pixels to resize the width
     * @param {number} y - The amount of pixels to resize the height
     */

  }, {
    key: "resize",
    value: function resize(x, y) {
      x = x || 0;
      y = y || 0;

      this._resizeStart();

      this._resizeMove(0, 0);

      this._resizeMove(-x + RESIZE_HANDLE_SIZE, -y);

      this._resizeEnd();
    }
  }, {
    key: "_getDraggedChildIndex",
    value: function _getDraggedChildIndex(draggedChild) {
      for (var i = 0; i < this.dom.childNodes.length; i++) {
        if (this.dom.childNodes[i].ui === draggedChild) {
          return i;
        }
      }

      return -1;
    }
  }, {
    key: "_onChildDragStart",
    value: function _onChildDragStart(evt, childPanel) {
      this.class.add(CLASS_DRAGGED_CHILD);
      this._draggedStartIndex = this._getDraggedChildIndex(childPanel);
      childPanel.class.add(CLASS_DRAGGED);
      this._draggedHeight = childPanel.height;
      this.emit('child:dragstart', childPanel, this._draggedStartIndex);
    }
  }, {
    key: "_onChildDragMove",
    value: function _onChildDragMove(evt, childPanel) {
      var rect = this.dom.getBoundingClientRect();
      var dragOut = evt.clientX < rect.left || evt.clientX > rect.right || evt.clientY < rect.top || evt.clientY > rect.bottom;

      var childPanelIndex = this._getDraggedChildIndex(childPanel);

      if (dragOut) {
        childPanel.class.remove(CLASS_DRAGGED);

        if (this._draggedStartIndex !== childPanelIndex) {
          this.remove(childPanel);

          if (this._draggedStartIndex < childPanelIndex) {
            this.appendBefore(childPanel, this.dom.childNodes[this._draggedStartIndex]);
          } else {
            this.appendAfter(childPanel, this.dom.childNodes[this._draggedStartIndex - 1]);
          }
        }

        return;
      }

      childPanel.class.add(CLASS_DRAGGED);
      var y = evt.clientY - rect.top;
      var ind = null; // hovered script

      for (var i = 0; i < this.dom.childNodes.length; i++) {
        var otherPanel = this.dom.childNodes[i].ui;
        var otherTop = otherPanel.dom.offsetTop;

        if (i < childPanelIndex) {
          if (y <= otherTop + otherPanel.header.height) {
            ind = i;
            break;
          }
        } else if (i > childPanelIndex) {
          if (y + childPanel.height >= otherTop + otherPanel.height) {
            ind = i;
            break;
          }
        }
      }

      if (ind !== null && childPanelIndex !== ind) {
        this.remove(childPanel);

        if (ind < childPanelIndex) {
          this.appendBefore(childPanel, this.dom.childNodes[ind]);
        } else {
          this.appendAfter(childPanel, this.dom.childNodes[ind - 1]);
        }
      }
    }
  }, {
    key: "_onChildDragEnd",
    value: function _onChildDragEnd(evt, childPanel) {
      this.class.remove(CLASS_DRAGGED_CHILD);
      childPanel.class.remove(CLASS_DRAGGED);

      var index = this._getDraggedChildIndex(childPanel);

      this.emit('child:dragend', childPanel, index, this._draggedStartIndex);
      this._draggedStartIndex = -1;
    }
  }, {
    key: "forEachChild",
    value: function forEachChild(fn) {
      for (var i = 0; i < this.dom.childNodes.length; i++) {
        var node = this.dom.childNodes[i].ui;

        if (node) {
          var result = fn(node, i);

          if (result === false) {
            // early out
            break;
          }
        }
      }
    }
    /**
     * If the current node contains a root, recursively append it's children to this node
     * and return it. Otherwise return the current node. Also add each child to the parent
     * under its keyed name.
     *
     * @param {object} node - The current element in the dom structure which must be recursively
     * traversed and appended to it's parent
     *
     * @returns {Element} - The recursively appended element node
     *
     */

  }, {
    key: "_buildDomNode",
    value: function _buildDomNode(node) {
      var _this2 = this;

      var keys = Object.keys(node);
      var rootNode;

      if (keys.includes('root')) {
        rootNode = this._buildDomNode(node.root);
        node.children.forEach(function (childNode) {
          var childNodeElement = _this2._buildDomNode(childNode);

          if (childNodeElement !== null) {
            rootNode.append(childNodeElement);
          }
        });
      } else {
        rootNode = node[keys[0]];
        this["_".concat(keys[0])] = rootNode;
      }

      return rootNode;
    }
    /**
     * Takes an array of pcui elements, each of which can contain their own child elements, and
     * appends them to this container. These child elements are traversed recursively using
     * _buildDomNode.
     *
     * @param {Array} dom - An array of child pcui elements to append to this container.
     *
     * @example
     * buildDom([
     *     {
     *         child1: pcui.Label()
     *     },
     *     {
     *         root: {
     *             container1: pcui.Container()
     *         },
     *         children: [
     *             {
     *                 child2: pcui.Label()
     *             },
     *             {
     *                 child3: pcui.Label()
     *             }
     *         ]
     *     }
     * ]);
     */

  }, {
    key: "buildDom",
    value: function buildDom(dom) {
      var _this3 = this;

      dom.forEach(function (node) {
        var builtNode = _this3._buildDomNode(node);

        _this3.append(builtNode);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;
      this.domContent = null;

      if (this._domResizeHandle) {
        this._domResizeHandle.removeEventListener('mousedown', this._domEventResizeStart);

        window.removeEventListener('mousemove', this._domEventResizeMove);
        window.removeEventListener('mouseup', this._domEventResizeEnd);

        this._domResizeHandle.removeEventListener('touchstart', this._domEventResizeTouchStart);

        window.removeEventListener('touchmove', this._domEventResizeTouchMove);
        window.removeEventListener('touchend', this._domEventResizeTouchEnd);
      }

      this._domResizeHandle = null;
      this._domEventResizeStart = null;
      this._domEventResizeMove = null;
      this._domEventResizeEnd = null;
      this._domEventResizeTouchStart = null;
      this._domEventResizeTouchMove = null;
      this._domEventResizeTouchEnd = null;
      this._domEventScroll = null;

      _get(_getPrototypeOf(Container.prototype), "destroy", this).call(this);
    }
  }, {
    key: "flex",
    get: function get() {
      return this._flex;
    },
    set: function set(value) {
      if (value === this._flex) return;
      this._flex = value;

      if (value) {
        this.classAdd(src_class["g" /* FLEX */]);
      } else {
        this.classRemove(src_class["g" /* FLEX */]);
      }
    }
  }, {
    key: "grid",
    get: function get() {
      return this._grid;
    },
    set: function set(value) {
      if (value === this._grid) return;
      this._grid = value;

      if (value) {
        this.classAdd(src_class["i" /* GRID */]);
      } else {
        this.classRemove(src_class["i" /* GRID */]);
      }
    }
  }, {
    key: "scrollable",
    get: function get() {
      return this._scrollable;
    },
    set: function set(value) {
      if (this._scrollable === value) return;
      this._scrollable = value;

      if (value) {
        this.classAdd(src_class["o" /* SCROLLABLE */]);
      } else {
        this.classRemove(src_class["o" /* SCROLLABLE */]);
      }
    }
  }, {
    key: "resizable",
    get: function get() {
      return this._resizable;
    },
    set: function set(value) {
      if (value === this._resizable) return;

      if (VALID_RESIZABLE_VALUES.indexOf(value) === -1) {
        console.error('Invalid resizable value: must be one of ' + VALID_RESIZABLE_VALUES.join(','));
        return;
      } // remove old class


      if (this._resizable) {
        this.classRemove("".concat(src_class["n" /* RESIZABLE */], "-").concat(this._resizable));
      }

      this._resizable = value;
      this._resizeHorizontally = value === 'right' || value === 'left';

      if (value) {
        // add resize class and create / append resize handle
        this.classAdd(src_class["n" /* RESIZABLE */]);
        this.classAdd("".concat(src_class["n" /* RESIZABLE */], "-").concat(value));

        if (!this._domResizeHandle) {
          this._createResizeHandle();
        }

        this._dom.appendChild(this._domResizeHandle);
      } else {
        // remove resize class and resize handle
        this.classRemove(src_class["n" /* RESIZABLE */]);

        if (this._domResizeHandle) {
          this._dom.removeChild(this._domResizeHandle);
        }
      }
    }
  }, {
    key: "resizeMin",
    get: function get() {
      return this._resizeMin;
    },
    set: function set(value) {
      this._resizeMin = Math.max(0, Math.min(value, this._resizeMax));
    }
  }, {
    key: "resizeMax",
    get: function get() {
      return this._resizeMax;
    },
    set: function set(value) {
      this._resizeMax = Math.max(this._resizeMin, value);
    } // The internal dom element used as a the container of all children.
    // Can be overriden by derived classes

  }, {
    key: "domContent",
    get: function get() {
      return this._domContent;
    },
    set: function set(value) {
      if (this._domContent === value) return;

      if (this._domContent) {
        this._domContent.removeEventListener('scroll', this._domEventScroll);
      }

      this._domContent = value;

      if (this._domContent) {
        this._domContent.addEventListener('scroll', this._domEventScroll);
      }
    }
  }]);

  return Container;
}(Element["a" /* default */]);


/* harmony default export */ var components_Container = __webpack_exports__["a"] = (Container_Container);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Label

// CONCATENATED MODULE: ./src/components/Label/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Label/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CLASS_LABEL = 'pcui-label';
/**
 * @name Label
 * @classdesc The Label is a simple span element that displays some text.
 * @property {string} placeholder Gets / sets the placeholder label that appears on the right of the label.
 * @property {string} text Gets / sets the text of the Label.
 * @property {boolean} renderChanges If true then the Label will flash when its text changes.
 * @augments Element
 * @mixes pcui.IBindable
 */

var Label_Label = /*#__PURE__*/function (_Element) {
  _inherits(Label, _Element);

  var _super = _createSuper(Label);

  /**
   * Creates a new Label.
   *
   * @param {object} args - The arguments. Extends the pcui.Element constructor arguments. All settable properties can also be set through the constructor.
   * @param {boolean} [args.unsafe] - If true then the innerHTML property will be used to set the text. Otherwise textContent will be used instead.
   * @param {boolean} [args.nativeTooltip] - If true then use the text of the label as the native HTML tooltip.
   * @param {boolean} [args.allowTextSelection] - If true then the label can be clicked to select text.
   */
  function Label(args) {
    var _this;

    _classCallCheck(this, Label);

    if (!args) args = {};
    _this = _super.call(this, args.dom ? args.dom : document.createElement('span'), args);

    _this.class.add(CLASS_LABEL);

    _this._unsafe = args.unsafe || false;
    _this.text = args.text || args.value || '';

    if (args.allowTextSelection) {
      _this.class.add(src_class["c" /* DEFAULT_MOUSEDOWN */]);
    }

    if (args.nativeTooltip) {
      _this.dom.title = _this.text;
    }

    _this.placeholder = args.placeholder || null;
    _this.renderChanges = args.renderChanges || false;

    _this.on('change', function () {
      if (_this.renderChanges) {
        _this.flash();
      }
    });

    return _this;
  }

  _createClass(Label, [{
    key: "_updateText",
    value: function _updateText(value) {
      this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);
      if (this._text === value) return false;
      this._text = value;

      if (this._unsafe) {
        this._dom.innerHTML = value;
      } else {
        this._dom.textContent = value;
      }

      this.emit('change', value);
      return true;
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(value) {
      if (value === undefined || value === null) {
        value = '';
      }

      var changed = this._updateText(value);

      if (changed && this._binding) {
        this._binding.setValue(value);
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this.text;
    },
    set: function set(value) {
      this.text = value;
    }
    /* eslint accessor-pairs: 0 */

  }, {
    key: "values",
    set: function set(values) {
      var different = false;
      var value = values[0];

      for (var i = 1; i < values.length; i++) {
        if (values[i] !== value) {
          different = true;
          break;
        }
      }

      if (different) {
        this._updateText('');

        this.class.add(src_class["k" /* MULTIPLE_VALUES */]);
      } else {
        this._updateText(values[0]);
      }
    }
  }, {
    key: "placeholder",
    get: function get() {
      return this.dom.getAttribute('placeholder');
    },
    set: function set(value) {
      if (value) {
        this.dom.setAttribute('placeholder', value);
      } else {
        this.dom.removeAttribute('placeholder');
      }
    }
  }]);

  return Label;
}(Element["a" /* default */]);


/* harmony default export */ var components_Label = __webpack_exports__["a"] = (Label_Label);

/***/ }),
/* 4 */,
/* 5 */
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

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/TextInput/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/TextInput/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CLASS_TEXT_INPUT = 'pcui-text-input';
/**
 * @name TextInput
 * @classdesc The TextInput is an input element of type text.
 * @augments Element
 * @mixes pcui.IBindable
 * @mixes pcui.IFocusable
 * @property {string} placeholder Gets / sets the placeholder label that appears on the right of the input.
 * @property {HTMLElement} input Gets the HTML input element.
 * @property {boolean} renderChanges If true then the TextInput will flash when its text changes.
 * @property {boolean} blurOnEnter Gets / sets whether pressing Enter will blur (unfocus) the field. Defaults to true.
 * @property {boolean} blurOnEscape Gets / sets whether pressing Escape will blur (unfocus) the field. Defaults to true.
 * @property {boolean} keyChange Gets / sets whether any key up event will cause a change event to be fired.} args
 * @property {Function} onValidate A function that validates the value that is entered into the input and returns true if it is valid or false otherwise.
 * If false then the input will be set in an error state and the value will not propagate to the binding.
 */

var TextInput_TextInput = /*#__PURE__*/function (_Element) {
  _inherits(TextInput, _Element);

  var _super = _createSuper(TextInput);

  /**
   * Creates a new TextInput.
   *
   * @param {object} args - The arguments. Extends the pcui.Element constructor arguments. All settable properties can also be set through the constructor.
   */
  function TextInput(args) {
    var _this;

    _classCallCheck(this, TextInput);

    if (!args) args = {};
    _this = _super.call(this, args.dom ? args.dom : document.createElement('div'), args);

    _this.class.add(CLASS_TEXT_INPUT);

    var input = args.input;

    if (!input) {
      input = document.createElement('input');
      input.ui = _assertThisInitialized(_this);
      input.type = 'text';
      input.tabIndex = 0;
    }

    _this._domInput = input;
    _this._domEvtChange = _this._onInputChange.bind(_assertThisInitialized(_this));
    _this._domEvtFocus = _this._onInputFocus.bind(_assertThisInitialized(_this));
    _this._domEvtBlur = _this._onInputBlur.bind(_assertThisInitialized(_this));
    _this._domEvtKeyDown = _this._onInputKeyDown.bind(_assertThisInitialized(_this));
    _this._domEvtKeyUp = _this._onInputKeyUp.bind(_assertThisInitialized(_this));
    _this._domEvtCtxMenu = _this._onInputCtxMenu.bind(_assertThisInitialized(_this));

    _this._domInput.addEventListener('change', _this._domEvtChange);

    _this._domInput.addEventListener('focus', _this._domEvtFocus);

    _this._domInput.addEventListener('blur', _this._domEvtBlur);

    _this._domInput.addEventListener('keydown', _this._domEvtKeyDown);

    _this._domInput.addEventListener('contextmenu', _this._domEvtCtxMenu, false);

    _this.dom.appendChild(_this._domInput);

    _this._suspendInputChangeEvt = false;

    if (args.value !== undefined) {
      _this.value = args.value;
    }

    _this.placeholder = args.placeholder || null;
    _this.renderChanges = args.renderChanges || false;
    _this.blurOnEnter = args.blurOnEnter !== undefined ? args.blurOnEnter : true;
    _this.blurOnEscape = args.blurOnEscape !== undefined ? args.blurOnEscape : true;
    _this.keyChange = args.keyChange || false;

    if (args.onValidate) {
      _this.onValidate = args.onValidate;
    }

    _this.on('change', function () {
      if (_this.renderChanges) {
        _this.flash();
      }
    });

    _this.on('disable', _this._updateInputReadOnly.bind(_assertThisInitialized(_this)));

    _this.on('enable', _this._updateInputReadOnly.bind(_assertThisInitialized(_this)));

    _this.on('readOnly', _this._updateInputReadOnly.bind(_assertThisInitialized(_this)));

    _this._updateInputReadOnly();

    return _this;
  }

  _createClass(TextInput, [{
    key: "_onInputChange",
    value: function _onInputChange(evt) {
      if (this._suspendInputChangeEvt) return;

      if (this._onValidate) {
        var error = !this._onValidate(this.value);
        this.error = error;

        if (error) {
          return;
        }
      } else {
        this.error = false;
      }

      this.emit('change', this.value);

      if (this._binding) {
        this._binding.setValue(this.value);
      }
    }
  }, {
    key: "_onInputFocus",
    value: function _onInputFocus(evt) {
      this.class.add(src_class["h" /* FOCUS */]);
      this.emit('focus', evt);
    }
  }, {
    key: "_onInputBlur",
    value: function _onInputBlur(evt) {
      this.class.remove(src_class["h" /* FOCUS */]);
      this.emit('blur', evt);
    }
  }, {
    key: "_onInputKeyDown",
    value: function _onInputKeyDown(evt) {
      if (evt.keyCode === 27 && this.blurOnEscape || evt.keyCode === 13 && this.blurOnEnter) {
        this._domInput.blur();
      }

      this.emit('keydown', evt);
    }
  }, {
    key: "_onInputKeyUp",
    value: function _onInputKeyUp(evt) {
      this._onInputChange(evt);

      this.emit('keyup', evt);
    }
  }, {
    key: "_onInputCtxMenu",
    value: function _onInputCtxMenu(evt) {
      this._domInput.select();
    }
  }, {
    key: "_updateInputReadOnly",
    value: function _updateInputReadOnly() {
      var readOnly = !this.enabled || this.readOnly;

      if (readOnly) {
        this._domInput.setAttribute('readonly', true);
      } else {
        this._domInput.removeAttribute('readonly');
      }
    }
  }, {
    key: "_updateValue",
    value: function _updateValue(value) {
      this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);

      if (value && _typeof(value) === 'object') {
        if (Array.isArray(value)) {
          var isObject = false;

          for (var i = 0; i < value.length; i++) {
            if (value[i] && _typeof(value[i]) === 'object') {
              isObject = true;
              break;
            }
          }

          value = isObject ? '[Not available]' : value.map(function (val) {
            return val === null ? 'null' : val;
          }).join(',');
        } else {
          value = '[Not available]';
        }
      }

      if (value === this.value) return false;
      this._suspendInputChangeEvt = true;
      this._domInput.value = value === null || value === undefined ? '' : value;
      this._suspendInputChangeEvt = false;
      this.emit('change', value);
      return true;
    }
    /**
     * @name TextInput#focus
     * @description Focuses the Element.
     * @param {boolean} select - If true then this will also select the text after focusing.
     */

  }, {
    key: "focus",
    value: function focus(select) {
      this._domInput.focus();

      if (select) {
        this._domInput.select();
      }
    }
    /**
     * @name TextInput#blur
     * @description Blurs (unfocuses) the Element.
     */

  }, {
    key: "blur",
    value: function blur() {
      this._domInput.blur();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;

      this._domInput.removeEventListener('change', this._domEvtChange);

      this._domInput.removeEventListener('focus', this._domEvtFocus);

      this._domInput.removeEventListener('blur', this._domEvtBlur);

      this._domInput.removeEventListener('keydown', this._domEvtKeyDown);

      this._domInput.removeEventListener('keyup', this._domEvtKeyUp);

      this._domInput.removeEventListener('contextmenu', this._domEvtCtxMenu);

      this._domInput = null;

      _get(_getPrototypeOf(TextInput.prototype), "destroy", this).call(this);
    }
  }, {
    key: "value",
    get: function get() {
      return this._domInput.value;
    },
    set: function set(value) {
      var changed = this._updateValue(value);

      if (changed) {
        // reset error
        this.error = false;
      }

      if (changed && this._binding) {
        this._binding.setValue(value);
      }
    }
    /* eslint accessor-pairs: 0 */

  }, {
    key: "values",
    set: function set(values) {
      var different = false;
      var value = values[0];

      for (var i = 1; i < values.length; i++) {
        if (values[i] !== value) {
          different = true;
          break;
        }
      }

      if (different) {
        this._updateValue(null);

        this.class.add(src_class["k" /* MULTIPLE_VALUES */]);
      } else {
        this._updateValue(values[0]);
      }
    }
  }, {
    key: "placeholder",
    get: function get() {
      return this.dom.getAttribute('placeholder');
    },
    set: function set(value) {
      if (value) {
        this.dom.setAttribute('placeholder', value);
      } else {
        this.dom.removeAttribute('placeholder');
      }
    }
  }, {
    key: "keyChange",
    get: function get() {
      return this._keyChange;
    },
    set: function set(value) {
      if (this._keyChange === value) return;
      this._keyChange = value;

      if (value) {
        this._domInput.addEventListener('keyup', this._domEvtKeyUp);
      } else {
        this._domInput.removeEventListener('keyup', this._domEvtKeyUp);
      }
    }
  }, {
    key: "input",
    get: function get() {
      return this._domInput;
    }
  }, {
    key: "onValidate",
    get: function get() {
      return this._onValidate;
    },
    set: function set(value) {
      this._onValidate = value;
    }
  }]);

  return TextInput;
}(Element["a" /* default */]);

/* harmony default export */ var components_TextInput = __webpack_exports__["a"] = (TextInput_TextInput);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Button

// CONCATENATED MODULE: ./src/components/Button/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Button/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CLASS_BUTTON = 'pcui-button';
/**
 * @name Button
 * @classdesc Represents a button.
 * @property {string} [text=Click Me] Gets / sets the text of the button
 * @property {string} size Gets / sets the 'size' type of the button. Can be null or 'small'.
 * @property {string} [icon=E401] The CSS code for an icon for the button. e.g. E401 (notice we omit the '\' character).
 * @mixes pcui.IFocusable
 */

var Button = /*#__PURE__*/function (_Element) {
  _inherits(Button, _Element);

  var _super = _createSuper(Button);

  /**
   * Creates a new Button.
   *
   * @param {object} args - The arguments. Extends the pcui.Element constructor arguments. All settable properties can also be set through the constructor.
   * @param {boolean} [args.unsafe] - If true then the innerHTML property will be used to set the text. Otherwise textContent will be used instead.
   */
  function Button(args) {
    var _this;

    _classCallCheck(this, Button);

    if (!args) args = {};
    _this = _super.call(this, args.dom ? args.dom : document.createElement('button'), args);

    _this.class.add(CLASS_BUTTON);

    _this._unsafe = args.unsafe || false;
    _this.text = args.text || '';
    _this.size = args.size || null;
    _this.icon = args.icon || '';
    _this._domEventKeyDown = _this._onKeyDown.bind(_assertThisInitialized(_this));

    _this.dom.addEventListener('keydown', _this._onKeyDown.bind(_assertThisInitialized(_this)));

    return _this;
  } // click on enter
  // blur on escape


  _createClass(Button, [{
    key: "_onKeyDown",
    value: function _onKeyDown(evt) {
      if (evt.keyCode === 27) {
        this.blur();
      } else if (evt.keyCode === 13) {
        this._onClick(evt);
      }
    }
  }, {
    key: "_onClick",
    value: function _onClick(evt) {
      this.blur();
      if (this.readOnly) return;

      _get(_getPrototypeOf(Button.prototype), "_onClick", this).call(this, evt);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.dom.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.dom.blur();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;
      this.dom.removeEventListener('keydown', this._domEventKeyDown);

      _get(_getPrototypeOf(Button.prototype), "destroy", this).call(this);
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(value) {
      if (this._text === value) return;
      this._text = value;

      if (this._unsafe) {
        this.dom.innerHTML = value;
      } else {
        this.dom.textContent = value;
      }
    }
  }, {
    key: "icon",
    get: function get() {
      return this._icon;
    },
    set: function set(value) {
      if (this._icon === value | !value.match(/^E[0-9]{0,4}$/)) return;
      this._icon = value;

      if (value) {
        // set data-icon attribute but first convert the value to a code point
        this.dom.setAttribute('data-icon', String.fromCodePoint(parseInt(value, 16)));
      } else {
        this.dom.removeAttribute('data-icon');
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(value) {
      if (this._size === value) return;

      if (this._size) {
        this.class.remove('pcui-' + this._size);
        this._size = null;
      }

      this._size = value;

      if (this._size) {
        this.class.add('pcui-' + this._size);
      }
    }
  }]);

  return Button;
}(Element["a" /* default */]);


/* harmony default export */ var components_Button = __webpack_exports__["a"] = (Button);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/NumericInput/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/TextInput/index.js + 1 modules
var TextInput = __webpack_require__(6);

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/NumericInput/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CLASS_NUMERIC_INPUT = 'pcui-numeric-input';
var CLASS_NUMERIC_INPUT_SLIDER_CONTROL = CLASS_NUMERIC_INPUT + '-slider-control';
var CLASS_NUMERIC_INPUT_SLIDER_CONTROL_ACTIVE = CLASS_NUMERIC_INPUT_SLIDER_CONTROL + '-active';
var CLASS_NUMERIC_INPUT_SLIDER_CONTROL_HIDDEN = CLASS_NUMERIC_INPUT_SLIDER_CONTROL + '-hidden';
var REGEX_COMMA = /,/g;
/**
 * @name NumericInput
 * @classdesc The NumericInput represents an input element that holds numbers.
 * @property {number} [min=0] Gets / sets the minimum value this field can take.
 * @property {number} [max=1] Gets / sets the maximum value this field can take.
 * @property {number} [precision=7] Gets / sets the maximum number of decimals a value can take.
 * @property {number} [step=0.01] Gets / sets the amount that the value will be increased or decreased when using the arrow keys. Holding Shift will use 10x the step.
 * @property {boolean} [hideSlider=true] Hide the input mouse drag slider.
 * @augments TextInput
 */

var NumericInput_NumericInput = /*#__PURE__*/function (_TextInput) {
  _inherits(NumericInput, _TextInput);

  var _super = _createSuper(NumericInput);

  /**
   * Creates a new NumericInput.
   *
   * @param {object} args - The arguments. Extends the pcui.TextInput constructor arguments.
   * @param {boolean} [args.allowNull] - Gets / sets whether the value can be null. If not then it will be 0 instead of null.
   */
  function NumericInput(args) {
    var _this;

    _classCallCheck(this, NumericInput);

    // make copy of args
    args = Object.assign({}, args);
    var value = args.value; // delete value because we want to set it after
    // the other arguments

    delete args.value;
    var renderChanges = args.renderChanges || false;
    delete args.renderChanges;
    _this = _super.call(this, args);

    _this.class.add(CLASS_NUMERIC_INPUT);

    _this._min = args.min !== undefined ? args.min : null;
    _this._max = args.max !== undefined ? args.max : null;
    _this._allowNull = args.allowNull || false;
    _this._precision = Number.isFinite(args.precision) ? args.precision : 7;

    if (Number.isFinite(args.step)) {
      _this._step = args.step;
    } else if (Number.isFinite(args.precision)) {
      _this._step = 1 / Math.pow(10, args.precision);
    } else {
      _this._step = 1;
    }

    _this._oldValue = undefined;
    _this.value = value;
    _this._sliderPrevValue = value;
    _this.renderChanges = renderChanges;
    _this._domEvtPointerLock = null;
    _this._domEvtSliderMouseDown = null;
    _this._domEvtSliderMouseUp = null;
    _this._domEvtMouseWheel = null;

    if (!args.hideSlider) {
      _this._sliderControl = new Element["a" /* default */]();

      _this._sliderControl.class.add(CLASS_NUMERIC_INPUT_SLIDER_CONTROL);

      _this.dom.append(_this._sliderControl.dom);

      _this._domEvtSliderMouseDown = function () {
        _this._sliderControl.dom.requestPointerLock();

        _this._sliderPrevValue = _this.value;
        _this._sliderMovement = 0.0;
      };

      _this._domEvtSliderMouseUp = function () {
        document.exitPointerLock();

        if (_this._binding) {
          var undoValue = _this._sliderPrevValue;
          var redoValue = _this._sliderPrevValue + _this._sliderMovement;

          var undo = function undo() {
            var history = _this._binding._bindingElementToObservers._history;
            _this._binding._bindingElementToObservers._history = null;
            _this.value = undoValue;
            _this._binding._bindingElementToObservers._history = history;
          };

          var redo = function redo() {
            var history = _this._binding._bindingElementToObservers._history;
            _this._binding._bindingElementToObservers._history = null;
            _this.value = redoValue;
            _this._binding._bindingElementToObservers._history = history;
          };

          _this._binding._bindingElementToObservers._history.add({
            name: _this._binding.paths[0],
            undo: undo,
            redo: redo
          });

          redo();
        }
      };

      _this._domEvtPointerLock = _this._pointerLockChangeAlert.bind(_assertThisInitialized(_this));
      _this._domEvtMouseWheel = _this._updatePosition.bind(_assertThisInitialized(_this));

      _this._sliderControl.dom.addEventListener('mousedown', _this._domEvtSliderMouseDown);

      _this._sliderControl.dom.addEventListener('mouseup', _this._domEvtSliderMouseUp);

      document.addEventListener('pointerlockchange', _this._domEvtPointerLock, false);
      document.addEventListener('mozpointerlockchange', _this._domEvtPointerLock, false);
    }

    return _this;
  }

  _createClass(NumericInput, [{
    key: "_updatePosition",
    value: function _updatePosition(evt) {
      var movement = 0;

      if (evt.constructor === WheelEvent) {
        movement = evt.deltaY;
      } else if (evt.constructor === MouseEvent) {
        movement = evt.movementX;
      } // move one step every 100 pixels


      this._sliderMovement += movement / 100 * this._step;
      this.value = this._sliderPrevValue + this._sliderMovement;
    }
  }, {
    key: "_onInputChange",
    value: function _onInputChange(evt) {
      // get the content of the input and pass it
      // through our value setter
      this.value = this._domInput.value;
    }
  }, {
    key: "_onInputKeyDown",
    value: function _onInputKeyDown(evt) {
      if (!this.enabled || this.readOnly) return _get(_getPrototypeOf(NumericInput.prototype), "_onInputKeyDown", this).call(this, evt); // increase / decrease value with arrow keys

      if (evt.keyCode === 38 || evt.keyCode === 40) {
        var inc = (evt.shiftKey ? 10 : 1) * (evt.keyCode === 40 ? -1 : 1);
        this.value += this.step * inc;
        return;
      }

      _get(_getPrototypeOf(NumericInput.prototype), "_onInputKeyDown", this).call(this, evt);
    }
  }, {
    key: "_isScrolling",
    value: function _isScrolling() {
      if (!this._sliderControl) return false;
      return document.pointerLockElement === this._sliderControl.dom || document.mozPointerLockElement === this._sliderControl.dom;
    }
  }, {
    key: "_pointerLockChangeAlert",
    value: function _pointerLockChangeAlert() {
      if (this._isScrolling()) {
        this._sliderControl.dom.addEventListener("mousemove", this._domEvtMouseWheel, false);

        this._sliderControl.dom.addEventListener("wheel", this._domEvtMouseWheel, false);

        this._sliderControl.class.add(CLASS_NUMERIC_INPUT_SLIDER_CONTROL_ACTIVE);
      } else {
        this._sliderControl.dom.removeEventListener("mousemove", this._domEvtMouseWheel, false);

        this._sliderControl.dom.removeEventListener("wheel", this._domEvtMouseWheel, false);

        this._sliderControl.class.remove(CLASS_NUMERIC_INPUT_SLIDER_CONTROL_ACTIVE);
      }
    }
  }, {
    key: "_normalizeValue",
    value: function _normalizeValue(value) {
      try {
        if (typeof value === 'string') {
          // replace commas with dots (for some international keyboards)
          value = value.replace(REGEX_COMMA, '.'); // remove spaces

          value = value.replace(/\s/g, ''); // sanitize input to only allow short mathematical expressions to be evaluated

          value = value.match(/^[*/+\-0-9().]+$/);

          if (value !== null && value[0].length < 20) {
            var expression = value[0];
            var operators = ['+', '-', '/', '*'];
            operators.forEach(function (operator) {
              var expressionArr = expression.split(operator);
              expressionArr.forEach(function (_, i) {
                expressionArr[i] = expressionArr[i].replace(/^0+/, '');
              });
              expression = expressionArr.join(operator);
            }); // eslint-disable-next-line

            value = Function('"use strict";return (' + expression + ')')();
          }
        }
      } catch (error) {
        value = null;
      }

      if (value === null || isNaN(value)) {
        if (this._allowNull) {
          return null;
        }

        value = 0;
      } // clamp between min max


      if (this.min !== null && value < this.min) {
        value = this.min;
      }

      if (this.max !== null && value > this.max) {
        value = this.max;
      } // fix precision


      if (this.precision !== null) {
        value = parseFloat(Number(value).toFixed(this.precision), 10);
      }

      return value;
    }
  }, {
    key: "_updateValue",
    value: function _updateValue(value, force) {
      var different = value !== this._oldValue || force; // always set the value to the input because
      // we always want it to show an actual number or nothing

      this._oldValue = value;
      this._domInput.value = value;
      this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);

      if (different) {
        this.emit('change', value);
      }

      return different;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.destroyed) return;

      if (this._domEvtSliderMouseDown) {
        this._sliderControl.dom.removeEventListener('mousedown', this._domEvtSliderMouseDown);

        this._sliderControl.dom.removeEventListener('mouseup', this._domEvtSliderMouseUp);
      }

      if (this._domEvtMouseWheel) {
        this._sliderControl.dom.removeEventListener("mousemove", this._domEvtMouseWheel, false);

        this._sliderControl.dom.removeEventListener("wheel", this._domEvtMouseWheel, false);
      }

      if (this._domEvtPointerLock) {
        document.removeEventListener('pointerlockchange', this._domEvtPointerLock, false);
        document.removeEventListener('mozpointerlockchange', this._domEvtPointerLock, false);
      }

      _get(_getPrototypeOf(NumericInput.prototype), "destroy", this).call(this);
    }
  }, {
    key: "value",
    get: function get() {
      var val = _get(_getPrototypeOf(NumericInput.prototype), "value", this);

      return val !== '' ? parseFloat(val, 10) : null;
    },
    set: function set(value) {
      value = this._normalizeValue(value);

      var forceUpdate = this.class.contains(src_class["k" /* MULTIPLE_VALUES */]) && value === null && this._allowNull;

      var changed = this._updateValue(value, forceUpdate);

      if (changed && this._binding) {
        var history = this._binding._bindingElementToObservers._history;

        if (this._isScrolling()) {
          this._binding._bindingElementToObservers._history = null;
        }

        this._binding.setValue(value);

        this._binding._bindingElementToObservers._history = history;
      }

      if (this._sliderControl) {
        this._sliderControl.class.remove(CLASS_NUMERIC_INPUT_SLIDER_CONTROL_HIDDEN);
      }
    }
    /* eslint accessor-pairs: 0 */

  }, {
    key: "values",
    set: function set(values) {
      var different = false;

      var value = this._normalizeValue(values[0]);

      for (var i = 1; i < values.length; i++) {
        if (value !== this._normalizeValue(values[i])) {
          different = true;
          break;
        }
      }

      if (different) {
        this._updateValue(null);

        this.class.add(src_class["k" /* MULTIPLE_VALUES */]);

        if (this._sliderControl) {
          this._sliderControl.class.add(CLASS_NUMERIC_INPUT_SLIDER_CONTROL_HIDDEN);
        }
      } else {
        this._updateValue(values[0]);

        if (this._sliderControl) {
          this._sliderControl.class.remove(CLASS_NUMERIC_INPUT_SLIDER_CONTROL_HIDDEN);
        }
      }
    }
  }, {
    key: "min",
    get: function get() {
      return this._min;
    },
    set: function set(value) {
      if (this._min === value) return;
      this._min = value; // reset value

      if (this._min !== null) {
        this.value = this.value; // eslint-disable-line no-self-assign
      }
    }
  }, {
    key: "max",
    get: function get() {
      return this._max;
    },
    set: function set(value) {
      if (this._max === value) return;
      this._max = value; // reset value

      if (this._max !== null) {
        this.value = this.value; // eslint-disable-line no-self-assign
      }
    }
  }, {
    key: "precision",
    get: function get() {
      return this._precision;
    },
    set: function set(value) {
      if (this._precision === value) return;
      this._precision = value; // reset value

      if (this._precision !== null) {
        this.value = this.value; // eslint-disable-line no-self-assign
      }
    }
  }, {
    key: "step",
    get: function get() {
      return this._step;
    },
    set: function set(value) {
      this._step = value;
    }
  }]);

  return NumericInput;
}(TextInput["a" /* default */]);

/* harmony default export */ var components_NumericInput = __webpack_exports__["a"] = (NumericInput_NumericInput);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: ContextMenu

// CONCATENATED MODULE: ./src/components/ContextMenu/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Label/index.js + 1 modules
var Label = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/ContextMenu/index.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CLASS_ContextMenu = 'pcui-contextmenu';
var CLASS_ContextMenu_active = CLASS_ContextMenu + '-active';
var CLASS_ContextMenu_parent = CLASS_ContextMenu + '-parent';
var CLASS_ContextMenu_child = CLASS_ContextMenu + '-child';
var CLASS_ContextMenu_parent_active = CLASS_ContextMenu_parent + '-active';
/**
 * @name ContextMenu
 * @classdesc Represents a context menu.
 */

var ContextMenu_ContextMenu =
/**
 * Creates a new ContextMenu.
 *
 * @param {object} args - The arguments. Extends the pcui.Container constructor arguments. All settable properties can also be set through the constructor.
 * @param {object[]} [args.items] - The array of items used to populate the array. Example item: { 'text': 'Hello World', 'onClick': () => console.log('Hello World') }.
 * @param {object} [args.dom] - The dom element to attach this context menu to.
 * @param {object} [args.triggerElement] - The dom element that will trigger the context menu to open when right clicked. If undefined args.dom will be used.
 */
function ContextMenu(args) {
  var _this = this;

  _classCallCheck(this, ContextMenu);

  if (!args) args = {};
  this._menu = new Container["a" /* default */]({
    dom: args.dom
  });
  this._menu.contextMenu = this;
  this.args = args;

  this._menu.class.add(CLASS_ContextMenu);

  var menu = this._menu;

  var removeMenu = function removeMenu() {
    _this._menu.class.remove(CLASS_ContextMenu_active);

    document.removeEventListener('click', removeMenu);
  };

  var triggerElement = args.triggerElement || args.dom.parentElement;

  if (triggerElement) {
    this._contextMenuEvent = triggerElement.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      e.stopPropagation();
      menu.class.add(CLASS_ContextMenu_active);
      var maxMenuHeight = args.items.length * 27.0;
      var maxMenuWidth = 150.0;
      var left = e.clientX;
      var top = e.clientY;

      if (maxMenuHeight + top > window.innerHeight) {
        var topDiff = maxMenuHeight + top - window.innerHeight;
        top -= topDiff;
      }

      if (maxMenuWidth + left > window.innerWidth) {
        var leftDiff = maxMenuWidth + left - window.innerWidth;
        left -= leftDiff;
      }

      menu.dom.setAttribute("style", "left: ".concat(left, "px; top: ").concat(top, "px"));
      document.addEventListener('click', removeMenu);
    });
  }

  if (!args.items) return;
  args.items.forEach(function (menuItem, i) {
    var menuItemElement = new Container["a" /* default */]();
    menuItemElement.dom.setAttribute("style", "top: ".concat(i * 27.0, "px"));

    if (menuItem.onClick) {
      menuItemElement.on('click', function (e) {
        e.stopPropagation();
        removeMenu();
        menuItem.onClick(e);
      });
    }

    var menuItemLabel = new Label["a" /* default */]({
      text: menuItem.text
    });
    menuItemElement.append(menuItemLabel);

    _this._menu.dom.append(menuItemElement.dom);

    if (menuItem.items) {
      menuItem.items.forEach(function (childItem, j) {
        var childMenuItemElement = new Container["a" /* default */]({
          class: CLASS_ContextMenu_child
        });
        childMenuItemElement.dom.setAttribute("style", "top: ".concat(j * 27.0, "px; left: 150px;"));
        childMenuItemElement.on('click', function (e) {
          e.stopPropagation();
          removeMenu();
          childItem.onClick();
        });
        var childMenuItemLabel = new Label["a" /* default */]({
          text: childItem.text
        });
        childMenuItemElement.append(childMenuItemLabel);
        menuItemElement.append(childMenuItemElement);
      });
      menuItemElement.class.add(CLASS_ContextMenu_parent);
    }

    menuItemElement.dom.addEventListener('mouseover', function (e) {
      // if (!e.fromElement.classList.contains('pcui-contextmenu-parent')) return;
      _this._menu.forEachChild(function (node) {
        return node.class.remove(CLASS_ContextMenu_parent_active);
      });

      menuItemElement.class.add(CLASS_ContextMenu_parent_active);
      var maxMenuHeight = menuItem.items ? menuItem.items.length * 27.0 : 0.0;
      var maxMenuWidth = 150.0;
      var left = e.clientX + maxMenuWidth > window.innerWidth ? -maxMenuWidth + 2.0 : maxMenuWidth;
      var top = 0;

      if (e.clientY + maxMenuHeight > window.innerHeight) {
        top = -maxMenuHeight + 27.0;
      }

      menuItemElement.forEachChild(function (node, j) {
        if (j === 0) return;
        node.dom.setAttribute("style", "top: ".concat(top + (j - 1) * 27.0, "px; left: ").concat(left, "px;"));
      });
    });
  });
};


/* harmony default export */ var components_ContextMenu = __webpack_exports__["a"] = (ContextMenu_ContextMenu);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: SelectInput

// CONCATENATED MODULE: ./src/components/SelectInput/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/TextInput/index.js + 1 modules
var TextInput = __webpack_require__(6);

// EXTERNAL MODULE: ./src/components/Button/index.js + 1 modules
var Button = __webpack_require__(7);

// EXTERNAL MODULE: ./src/components/Label/index.js + 1 modules
var Label = __webpack_require__(3);

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// CONCATENATED MODULE: ./src/helpers/search.js
// calculate, how many string `a`
// requires edits, to become string `b`
var searchStringEditDistance = function searchStringEditDistance(a, b) {
  // Levenshtein distance
  // https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  if (a === b) return 0;
  var i, j;
  var matrix = [];

  for (i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (i = 1; i <= b.length; i++) {
    for (j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }

  return matrix[b.length][a.length];
}; // calculate, how many characters string `b`
// contains of a string `a`

var searchCharsContains = function searchCharsContains(a, b) {
  if (a === b) return a.length;
  var contains = 0;
  var ind = {};
  var i;

  for (i = 0; i < b.length; i++) {
    ind[b.charAt(i)] = true;
  }

  for (i = 0; i < a.length; i++) {
    if (ind[a.charAt(i)]) contains++;
  }

  return contains;
}; // tokenize string into array of tokens

var searchStringTokenize = function searchStringTokenize(name) {
  var tokens = []; // camelCase
  // upperCASE123

  var string = name.replace(/([^A-Z])([A-Z][^A-Z])/g, '$1 $2').replace(/([A-Z0-9]{2,})/g, ' $1'); // space notation
  // dash-notation
  // underscore_notation

  var parts = string.split(/(\s|\-|_)/g); // filter valid tokens

  for (var i = 0; i < parts.length; i++) {
    parts[i] = parts[i].toLowerCase().trim();
    if (parts[i] && parts[i] !== '-' && parts[i] !== '_') tokens.push(parts[i]);
  }

  return tokens;
};

var _searchItems = function _searchItems(items, search, args) {
  var results = [];

  for (var i = 0; i < items.length; i++) {
    var item = items[i]; // direct hit

    if (item.subFull !== Infinity) {
      results.push(item);
      if (item.edits === Infinity) item.edits = 0;
      if (item.sub === Infinity) item.sub = item.subFull;
      continue;
    } else if (item.name === search || item.name.indexOf(search) === 0) {
      results.push(item);
      if (item.edits === Infinity) item.edits = 0;
      if (item.sub === Infinity) item.sub = 0;
      continue;
    } // check if name contains enough of search characters


    var contains = searchCharsContains(search, item.name);
    if (contains / search.length < args.containsCharsTolerance) continue;
    var editsCandidate = Infinity;
    var subCandidate = Infinity; // for each token

    for (var t = 0; t < item.tokens.length; t++) {
      // direct token match
      if (item.tokens[t] === search) {
        editsCandidate = 0;
        subCandidate = t;
        break;
      }

      var edits = searchStringEditDistance(search, item.tokens[t]);

      if ((subCandidate === Infinity || edits < editsCandidate) && item.tokens[t].indexOf(search) !== -1) {
        // search is a substring of a token
        subCandidate = t;
        editsCandidate = edits;
        continue;
      } else if (subCandidate === Infinity && edits < editsCandidate) {
        // new edits candidate, not a substring of a token
        if (edits / Math.max(search.length, item.tokens[t].length) <= args.editsDistanceTolerance) {
          // check if edits tolerance is satisfied
          editsCandidate = edits;
        }
      }
    } // no match candidate


    if (editsCandidate === Infinity) continue; // add new result

    results.push(item);
    item.edits = item.edits === Infinity ? editsCandidate : item.edits + editsCandidate;
    item.sub = item.sub === Infinity ? subCandidate : item.sub + subCandidate;
  }

  return results;
}; // perform search through items
// items is an array with arrays of two values
// where first value is a string to be searched by
// and second value is an object to be found
//
// [
//     [ 'camera', {object} ],
//     [ 'New Entity', {object} ],
//     [ 'Sun', {object} ]
// ]
//


var searchItems = function searchItems(items, search, args) {
  var i;
  search = (search || '').toLowerCase().trim();
  if (!search) return [];
  var searchTokens = searchStringTokenize(search);
  if (!searchTokens.length) return [];
  args = args || {};
  args.containsCharsTolerance = args.containsCharsTolerance || 0.5;
  args.editsDistanceTolerance = args.editsDistanceTolerance || 0.5;
  var records = [];

  for (i = 0; i < items.length; i++) {
    var subInd = items[i][0].toLowerCase().trim().indexOf(search);
    records.push({
      name: items[i][0],
      item: items[i][1],
      tokens: searchStringTokenize(items[i][0]),
      edits: Infinity,
      subFull: subInd !== -1 ? subInd : Infinity,
      sub: Infinity
    });
  } // search each token


  for (i = 0; i < searchTokens.length; i++) {
    records = _searchItems(records, searchTokens[i], args);
  } // sort result first by substring? then by edits number


  records.sort(function (a, b) {
    if (a.subFull !== b.subFull) {
      return a.subFull - b.subFull;
    } else if (a.sub !== b.sub) {
      return a.sub - b.sub;
    } else if (a.edits !== b.edits) {
      return a.edits - b.edits;
    }

    return a.name.length - b.name.length;
  }); // return only items without match information

  for (i = 0; i < records.length; i++) {
    records[i] = records[i].item;
  } // limit number of results


  if (args.hasOwnProperty('limitResults') && records.length > args.limitResults) {
    records = records.slice(0, args.limitResults);
  }

  return records;
};
// CONCATENATED MODULE: ./src/components/SelectInput/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var CLASS_SELECT_INPUT = 'pcui-select-input';
var CLASS_SELECT_INPUT_CONTAINER_VALUE = CLASS_SELECT_INPUT + '-container-value';
var CLASS_MULTI_SELECT = CLASS_SELECT_INPUT + '-multi';
var CLASS_ALLOW_INPUT = 'pcui-select-input-allow-input';
var CLASS_VALUE = CLASS_SELECT_INPUT + '-value';
var CLASS_ICON = CLASS_SELECT_INPUT + '-icon';
var CLASS_INPUT = CLASS_SELECT_INPUT + '-textinput';
var CLASS_LIST = CLASS_SELECT_INPUT + '-list';
var CLASS_TAGS = CLASS_SELECT_INPUT + '-tags';
var CLASS_TAGS_EMPTY = CLASS_SELECT_INPUT + '-tags-empty';
var CLASS_TAG = CLASS_SELECT_INPUT + '-tag';
var CLASS_TAG_NOT_EVERYWHERE = CLASS_SELECT_INPUT + '-tag-not-everywhere';
var CLASS_SHADOW = CLASS_SELECT_INPUT + '-shadow';
var CLASS_FIT_HEIGHT = CLASS_SELECT_INPUT + '-fit-height';
var CLASS_SELECTED = 'pcui-selected';
var CLASS_HIGHLIGHTED = CLASS_SELECT_INPUT + '-label-highlighted';
var CLASS_CREATE_NEW = CLASS_SELECT_INPUT + '-create-new';
var CLASS_OPEN = 'pcui-open';
var DEFAULT_BOTTOM_OFFSET = 25;
/**
 * @name SelectInput
 * @classdesc An input that allows selecting from a dropdown or entering tags.
 * @property {boolean} renderChanges If true then the input will flash when its value changes.
 * @property {string} placeholder The placeholder text to show next to the current value.
 * @property {boolean} multiSelect If true then the input value becomes an array allowing the selection of multiple options. Defaults to false.
 * @property {object[]} options The dropdown options of the input. Contains an array of objects with the following format {v: Any, t: String} where v is the value and t is the text of the option.
 * @property {Array} invalidOptions An array of values against which new values are checked before they are created. If a value is in the array it will not be created.
 * @augments Element
 * @mixes IBindable
 * @mixes IFocusable
 */

var SelectInput_SelectInput = /*#__PURE__*/function (_Element) {
  _inherits(SelectInput, _Element);

  var _super = _createSuper(SelectInput);

  /**
   * Creates a new SelectInput.
   *
   * @param {object} args - The arguments. Extends the pcui.Element constructor arguments.
   * @param {boolean} [args.allowNull] - If true then null is a valid input value. Defaults to false.
   * @param {boolean} [args.allowInput] - If true then a text field is shown for the user to search for values or enter new ones. Defaults to false.
   * @param {boolean} [args.allowCreate] - If true then the input allows creating new values from the text field. Only used when allowInput is true. Defaults to false.
   * @param {Function} [args.createFn] - A function to be executed when the user selects to create a new value. The function takes the new value as a parameter.
   * @param {string} [args.createLabelText] - The placeholder text to show when creating a new value. Used when allowInput and allowCreate are both true.
   * @param {string} [args.type] - The type of each value. Can be one of 'string', 'number' or 'boolean'.
   */
  function SelectInput(args) {
    var _this;

    _classCallCheck(this, SelectInput);

    if (!args) args = {}; // main container

    var container = new Container["a" /* default */]({
      dom: args.dom
    });
    _this = _super.call(this, container.dom, args);
    _this._container = container;
    _this._container.parent = _assertThisInitialized(_this);

    _this.class.add(CLASS_SELECT_INPUT);

    _this._containerValue = new Container["a" /* default */]({
      class: CLASS_SELECT_INPUT_CONTAINER_VALUE
    });

    _this._container.append(_this._containerValue); // focus / hover shadow element


    _this._domShadow = document.createElement('div');

    _this._domShadow.classList.add(CLASS_SHADOW);

    _this._containerValue.append(_this._domShadow);

    _this._allowInput = args.allowInput || false;

    if (_this._allowInput) {
      _this.class.add(CLASS_ALLOW_INPUT);
    }

    _this._allowCreate = args.allowCreate || false;
    _this._createFn = args.createFn;
    _this._createLabelText = args.createLabelText || null; // displays current value

    _this._labelValue = new Label["a" /* default */]({
      class: CLASS_VALUE,
      tabIndex: 0
    });

    _this._labelValue.on('click', _this._onValueClick.bind(_assertThisInitialized(_this)));

    _this._containerValue.append(_this._labelValue);

    _this._timeoutLabelValueTabIndex = null; // dropdown icon

    _this._labelIcon = new Label["a" /* default */]({
      class: CLASS_ICON,
      hidden: args.allowInput && args.multiSelect
    });

    _this._containerValue.append(_this._labelIcon); // input for searching or adding new entries


    _this._input = new TextInput["a" /* default */]({
      class: CLASS_INPUT,
      blurOnEnter: false,
      keyChange: true
    });

    _this._containerValue.append(_this._input);

    _this._lastInputValue = '';
    _this._suspendInputChange = false;

    _this._input.on('change', _this._onInputChange.bind(_assertThisInitialized(_this)));

    _this._input.on('keydown', _this._onInputKeyDown.bind(_assertThisInitialized(_this)));

    _this._input.on('focus', _this._onFocus.bind(_assertThisInitialized(_this)));

    _this._input.on('blur', _this._onBlur.bind(_assertThisInitialized(_this)));

    if (args.placeholder) {
      _this.placeholder = args.placeholder;
    } // dropdown list


    _this._containerOptions = new Container["a" /* default */]({
      class: CLASS_LIST,
      hidden: true
    });

    _this._containerValue.append(_this._containerOptions); // tags container


    _this._containerTags = new Container["a" /* default */]({
      class: CLASS_TAGS,
      flex: true,
      flexDirection: 'row',
      hidden: true
    });

    _this._container.append(_this._containerTags);

    if (args.multiSelect) {
      _this.class.add(CLASS_MULTI_SELECT);

      _this._containerTags.hidden = false;
    } // events


    _this._domEvtKeyDown = _this._onKeyDown.bind(_assertThisInitialized(_this));
    _this._domEvtFocus = _this._onFocus.bind(_assertThisInitialized(_this));
    _this._domEvtBlur = _this._onBlur.bind(_assertThisInitialized(_this));
    _this._domEvtMouseDown = _this._onMouseDown.bind(_assertThisInitialized(_this));
    _this._domEvtWindowMouseDown = _this._onWindowMouseDown.bind(_assertThisInitialized(_this));
    _this._domEvtWheel = _this._onWheel.bind(_assertThisInitialized(_this));

    _this._labelValue.dom.addEventListener('keydown', _this._domEvtKeyDown);

    _this._labelValue.dom.addEventListener('focus', _this._domEvtFocus);

    _this._labelValue.dom.addEventListener('blur', _this._domEvtBlur);

    _this._labelValue.dom.addEventListener('mousedown', _this._domEvtMouseDown);

    _this._containerOptions.dom.addEventListener('wheel', _this._domEvtWheel, {
      passive: true
    });

    _this.on('hide', _this.close.bind(_assertThisInitialized(_this)));

    _this._type = args.type || 'string';
    _this._optionsIndex = {};
    _this._labelsIndex = {};
    _this._labelHighlighted = null;
    _this.invalidOptions = args.invalidOptions;
    _this.options = args.options || [];
    _this._optionsFn = args.optionsFn;
    _this._allowNull = args.allowNull || false;
    _this._values = null;

    if (args.value !== undefined) {
      _this.value = args.value;
    } else if (args.defaultValue) {
      _this.value = args.defaultValue;
    } else {
      _this.value = null;
    }

    _this.renderChanges = args.renderChanges || false;

    _this.on('change', function () {
      _this._updateInputFieldsVisibility();

      if (_this.renderChanges && !_this.multiSelect) {
        _this._labelValue.flash();
      }
    });

    _this._updateInputFieldsVisibility(false);

    return _this;
  }

  _createClass(SelectInput, [{
    key: "_initializeCreateLabel",
    value: function _initializeCreateLabel() {
      var _this2 = this;

      var container = new Container["a" /* default */]({
        class: CLASS_CREATE_NEW,
        flex: true,
        flexDirection: 'row'
      });
      var label = new Label["a" /* default */]({
        text: this._input.value,
        tabIndex: -1
      });
      container.append(label);

      var evtChange = this._input.on('change', function (value) {
        // check if label is destroyed
        // during change event
        if (label.destroyed) return;
        label.text = value;

        if (_this2.invalidOptions && _this2.invalidOptions.indexOf(value) !== -1) {
          if (!container.hidden) {
            container.hidden = true;

            _this2._resizeShadow();
          }
        } else {
          if (container.hidden) {
            container.hidden = false;

            _this2._resizeShadow();
          }
        }
      });

      container.on('click', function (e) {
        e.stopPropagation();
        var text = label.text;

        _this2.focus();

        _this2.close();

        if (_this2._createFn) {
          _this2._createFn(text);
        } else if (text) {
          _this2._onSelectValue(text);
        }
      });
      label.on('destroy', function () {
        evtChange.unbind();
        evtChange = null;
      });
      var labelCreateText = new Label["a" /* default */]({
        text: this._createLabelText
      });
      container.append(labelCreateText);

      this._containerOptions.append(container);
    }
  }, {
    key: "_convertSingleValue",
    value: function _convertSingleValue(value) {
      if (value === null && this._allowNull) return value;

      if (this._type === 'string') {
        if (!value) {
          value = '';
        } else {
          value = value.toString();
        }
      } else if (this._type === 'number') {
        if (!value) {
          value = 0;
        } else {
          value = parseInt(value, 10);
        }
      } else if (this._type === 'boolean') {
        return !!value;
      }

      return value;
    }
  }, {
    key: "_convertValue",
    value: function _convertValue(value) {
      var _this3 = this;

      if (value === null && this._allowNull) return value;

      if (this.multiSelect) {
        if (!Array.isArray(value)) return value;
        return value.map(function (val) {
          return _this3._convertSingleValue(val);
        });
      }

      return this._convertSingleValue(value);
    } // toggle dropdown list

  }, {
    key: "_onValueClick",
    value: function _onValueClick() {
      if (!this.enabled || this.readOnly) return;
      this.toggle();
    } // Update our value with the specified selected option

  }, {
    key: "_onSelectValue",
    value: function _onSelectValue(value) {
      value = this._convertSingleValue(value);

      if (!this.multiSelect) {
        this.value = value;
        return;
      }

      if (this._values) {
        var dirty = false;

        this._values.forEach(function (arr) {
          if (!arr) {
            arr = [value];
            dirty = true;
          } else {
            if (arr.indexOf(value) === -1) {
              arr.push(value);
              dirty = true;
            }
          }
        });

        if (dirty) {
          this._onMultipleValuesChange(this._values);

          this.emit('change', this.value);

          if (this._binding) {
            this._binding.addValues([value]);
          }
        }
      } else {
        if (!this._value || !Array.isArray(this._value)) {
          this.value = [value];
        } else {
          if (this._value.indexOf(value) === -1) {
            this._value.push(value);

            this._addTag(value);

            this.emit('change', this.value);

            if (this._binding) {
              this._binding.addValues([value]);
            }
          }
        }
      }
    }
  }, {
    key: "_highlightLabel",
    value: function _highlightLabel(label) {
      if (this._labelHighlighted === label) return;

      if (this._labelHighlighted) {
        this._labelHighlighted.class.remove(CLASS_HIGHLIGHTED);
      }

      this._labelHighlighted = label;

      if (this._labelHighlighted) {
        this._labelHighlighted.class.add(CLASS_HIGHLIGHTED); // scroll into view if necessary


        var labelTop = this._labelHighlighted.dom.offsetTop;
        var scrollTop = this._containerOptions.dom.scrollTop;

        if (labelTop < scrollTop) {
          this._containerOptions.dom.scrollTop = labelTop;
        } else if (labelTop + this._labelHighlighted.height > this._containerOptions.height + scrollTop) {
          this._containerOptions.dom.scrollTop = labelTop + this._labelHighlighted.height - this._containerOptions.height;
        }
      }
    } // when the value is changed show the correct title

  }, {
    key: "_onValueChange",
    value: function _onValueChange(value) {
      var _this4 = this;

      if (!this.multiSelect) {
        this._labelValue.value = this._optionsIndex[value] || '';
        value = '' + value;

        for (var key in this._labelsIndex) {
          if (key === value) {
            this._labelsIndex[key].class.add(CLASS_SELECTED);
          } else {
            this._labelsIndex[key].class.remove(CLASS_SELECTED);
          }
        }
      } else {
        this._labelValue.value = '';

        this._containerTags.clear();

        this._containerTags.class.add(CLASS_TAGS_EMPTY);

        if (value && Array.isArray(value)) {
          value.forEach(function (val) {
            _this4._addTag(val);

            if (_this4._labelsIndex[val]) {
              _this4._labelsIndex[val].class.add(CLASS_SELECTED);
            }
          });

          for (var _key in this._labelsIndex) {
            if (value.indexOf(this._convertSingleValue(_key)) !== -1) {
              this._labelsIndex[_key].class.add(CLASS_SELECTED);
            } else {
              this._labelsIndex[_key].class.remove(CLASS_SELECTED);
            }
          }
        }
      }
    }
  }, {
    key: "_onMultipleValuesChange",
    value: function _onMultipleValuesChange(values) {
      var _this5 = this;

      this._labelValue.value = '';

      this._containerTags.clear();

      this._containerTags.class.add(CLASS_TAGS_EMPTY);

      var tags = {};
      var valueCounts = {};
      values.forEach(function (arr) {
        if (!arr) return;
        arr.forEach(function (val) {
          if (!tags[val]) {
            tags[val] = _this5._addTag(val);
            valueCounts[val] = 1;
          } else {
            valueCounts[val]++;
          }
        });
      }); // add special class to tags that do not exist everywhere

      for (var val in valueCounts) {
        if (valueCounts[val] !== values.length) {
          tags[val].class.add(CLASS_TAG_NOT_EVERYWHERE);

          if (this._labelsIndex[val]) {
            this._labelsIndex[val].class.remove(CLASS_SELECTED);
          }
        }
      }
    }
  }, {
    key: "_addTag",
    value: function _addTag(value) {
      var _this6 = this;

      var container = new Container["a" /* default */]({
        flex: true,
        flexDirection: 'row',
        class: CLASS_TAG
      });
      container.append(new Label["a" /* default */]({
        text: this._optionsIndex[value] || value
      }));
      var btnRemove = new Button["a" /* default */]({
        size: 'small',
        icon: 'E132',
        tabIndex: -1
      });
      container.append(btnRemove);
      btnRemove.on('click', function () {
        return _this6._removeTag(container, value);
      });

      this._containerTags.append(container);

      this._containerTags.class.remove(CLASS_TAGS_EMPTY);

      if (this._labelsIndex[value]) {
        this._labelsIndex[value].class.add(CLASS_SELECTED);
      }

      container.value = value;
      return container;
    }
  }, {
    key: "_removeTag",
    value: function _removeTag(tagElement, value) {
      tagElement.destroy();

      if (this._labelsIndex[value]) {
        this._labelsIndex[value].class.remove(CLASS_SELECTED);
      }

      if (this._values) {
        this._values.forEach(function (arr) {
          if (!arr) return;
          var idx = arr.indexOf(value);

          if (idx !== -1) {
            arr.splice(idx, 1);
          }
        });
      } else if (this._value && Array.isArray(this._value)) {
        var idx = this._value.indexOf(value);

        if (idx !== -1) {
          this._value.splice(idx, 1);
        }
      }

      this.emit('change', this.value);

      if (this._binding) {
        this._binding.removeValues([value]);
      }
    }
  }, {
    key: "_onInputChange",
    value: function _onInputChange(value) {
      if (this._suspendInputChange) return;
      if (this._lastInputValue === value) return;
      this.open();
      this._lastInputValue = value;

      this._filterOptions(value);
    }
  }, {
    key: "_filterOptions",
    value: function _filterOptions(filter) {
      var _this7 = this;

      var searchIndex = {};

      if (filter) {
        var searchOptions = this.options.map(function (option) {
          return [option.t, option.v];
        });
        var searchResults = searchItems(searchOptions, filter);
        searchResults.forEach(function (result) {
          searchIndex[result] = true;
        });
      }

      var highlighted = false;

      this._containerOptions.forEachChild(function (label) {
        label.hidden = !!filter && !searchIndex[label._optionValue] && !label.class.contains(CLASS_CREATE_NEW);

        if (!highlighted && !label.hidden) {
          _this7._highlightLabel(label);

          highlighted = true;
        }
      });

      this._resizeShadow();
    }
  }, {
    key: "_onInputKeyDown",
    value: function _onInputKeyDown(evt) {
      if (evt.keyCode === 13 && this.enabled && !this.readOnly) {
        evt.stopPropagation();
        evt.preventDefault(); // on enter

        var value;

        if (this._labelHighlighted && this._labelHighlighted._optionValue !== undefined) {
          value = this._labelHighlighted._optionValue;
        } else {
          value = this._input.value;
        }

        if (value !== undefined) {
          this.focus();
          this.close();

          if (this._optionsIndex[value]) {
            this._onSelectValue(value);
          } else if (this._allowCreate) {
            if (this._createFn) {
              this._createFn(value);
            } else {
              this._onSelectValue(value);
            }
          }

          return;
        }
      }

      this._onKeyDown(evt);
    }
  }, {
    key: "_onWindowMouseDown",
    value: function _onWindowMouseDown(evt) {
      if (this.dom.contains(evt.target)) return;
      this.close();
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(evt) {
      // close options on ESC and blur
      if (evt.keyCode === 27) {
        this.close();
        return;
      } // handle tab


      if (evt.keyCode === 9) {
        this.close();
        return;
      }

      if (!this.enabled || this.readOnly) return;

      if (evt.keyCode === 13 && !this._allowInput) {
        if (this._labelHighlighted && this._labelHighlighted._optionValue !== undefined) {
          this._onSelectValue(this._labelHighlighted._optionValue);

          this.close();
        }

        return;
      }

      if ([38, 40].indexOf(evt.keyCode) === -1) {
        return;
      }

      evt.stopPropagation();
      evt.preventDefault();

      if ((this._allowInput || this.multiSelect) && this._containerOptions.hidden) {
        this.open();
        return;
      }

      if (this._containerOptions.hidden) {
        if (!this._options.length) return;
        var index = -1;

        for (var i = 0; i < this._options.length; i++) {
          if (this._options[i].v === this.value) {
            index = i;
            break;
          }
        }

        if (evt.keyCode === 38) {
          index--;
        } else if (evt.keyCode === 40) {
          index++;
        }

        if (index >= 0 && index < this._options.length) {
          this._onSelectValue(this._options[index].v);
        }
      } else {
        if (!this._containerOptions.dom.childNodes.length) return;

        if (!this._labelHighlighted) {
          this._highlightLabel(this._containerOptions.dom.childNodes[0].ui);
        } else {
          var highlightedLabelDom = this._labelHighlighted.dom;

          do {
            if (evt.keyCode === 38) {
              highlightedLabelDom = highlightedLabelDom.previousSibling;
            } else if (evt.keyCode === 40) {
              highlightedLabelDom = highlightedLabelDom.nextSibling;
            }
          } while (highlightedLabelDom && highlightedLabelDom.ui.hidden);

          if (highlightedLabelDom) {
            this._highlightLabel(highlightedLabelDom.ui);
          }
        }
      }
    }
  }, {
    key: "_resizeShadow",
    value: function _resizeShadow() {
      this._domShadow.style.height = this._containerValue.height + this._containerOptions.height + 'px';
    }
  }, {
    key: "_onMouseDown",
    value: function _onMouseDown() {
      if (!this._allowInput) {
        this.focus();
      }
    }
  }, {
    key: "_onFocus",
    value: function _onFocus() {
      this.class.add(src_class["h" /* FOCUS */]);
      this.emit('focus');

      if (!this._input.hidden) {
        this.open();
      }
    }
  }, {
    key: "_onBlur",
    value: function _onBlur() {
      this.class.remove(src_class["h" /* FOCUS */]);
      this.emit('blur');
    }
  }, {
    key: "_onWheel",
    value: function _onWheel(evt) {
      // prevent scrolling on other stuff like the viewport
      // when we are scrolling on the select input
      evt.stopPropagation();
    }
  }, {
    key: "_updateInputFieldsVisibility",
    value: function _updateInputFieldsVisibility(focused) {
      var _this8 = this;

      var showInput = false;
      var focusInput = false;

      if (this._allowInput) {
        if (focused) {
          showInput = true;
          focusInput = true;
        } else {
          showInput = this.multiSelect || !this._labelsIndex[this.value];
        }
      }

      this._labelValue.hidden = showInput;
      this._labelIcon.hidden = showInput;
      this._input.hidden = !showInput;

      if (focusInput) {
        this._input.focus();
      }

      if (!this._labelValue.hidden) {
        // prevent label from being focused
        // right after input gets unfocused
        this._labelValue.tabIndex = -1;

        if (!this._timeoutLabelValueTabIndex) {
          this._timeoutLabelValueTabIndex = requestAnimationFrame(function () {
            _this8._timeoutLabelValueTabIndex = null;
            _this8._labelValue.tabIndex = 0;
          });
        }
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this._input.hidden) {
        this._labelValue.dom.focus();
      } else {
        this._input.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this._allowInput) {
        this._input.blur();
      } else {
        this._labelValue.dom.blur();
      }
    }
    /**
     * @name SelectInput#open
     * @description Opens the dropdown menu
     */

  }, {
    key: "open",
    value: function open() {
      var _this9 = this;

      if (!this._containerOptions.hidden || !this.enabled || this.readOnly) return;

      this._updateInputFieldsVisibility(true); // auto-update options if necessary


      if (this._optionsFn) {
        this.options = this._optionsFn();
      }

      if (this._containerOptions.dom.childNodes.length === 0) return; // highlight label that displays current value

      this._containerOptions.forEachChild(function (label) {
        label.hidden = false;

        if (label._optionValue === _this9.value) {
          _this9._highlightLabel(label);
        }
      });

      if (!this._labelHighlighted) {
        this._highlightLabel(this._containerOptions.dom.childNodes[0].ui);
      } // show options


      this._containerOptions.hidden = false;
      this.class.add(CLASS_OPEN); // register keydown on entire window

      window.addEventListener('keydown', this._domEvtKeyDown); // register mousedown on entire window

      window.addEventListener('mousedown', this._domEvtWindowMouseDown); // if the dropdown list goes below the window show it above the field

      var startField = this._allowInput ? this._input.dom : this._labelValue.dom;
      var rect = startField.getBoundingClientRect();
      var fitHeight = rect.bottom + this._containerOptions.height + DEFAULT_BOTTOM_OFFSET >= window.innerHeight;

      if (fitHeight && rect.top - this._containerOptions.height < 0) {
        // if showing it above the field means that some of it will not be visible
        // then show it below instead and adjust the max height to the maximum available space
        fitHeight = false;
        this._containerOptions.style.maxHeight = window.innerHeight - rect.bottom - DEFAULT_BOTTOM_OFFSET + 'px';
      }

      if (fitHeight) {
        this.class.add(CLASS_FIT_HEIGHT);
      } else {
        this.class.remove(CLASS_FIT_HEIGHT);
      } // resize the outer shadow to fit the element and the dropdown list
      // we need this because the dropdown list is position: absolute


      this._resizeShadow();
    }
    /**
     * @name SelectInput#close
     * @description Closes the dropdown menu
     */

  }, {
    key: "close",
    value: function close() {
      // there is a potential bug here if the user has set a max height
      // themselves then this will be overriden
      this._containerOptions.style.maxHeight = '';

      this._highlightLabel(null);

      this._updateInputFieldsVisibility(false);

      this._suspendInputChange = true;
      this._input.value = '';
      this._lastInputValue = '';
      this._suspendInputChange = false;
      if (this._containerOptions.hidden) return;
      this._containerOptions.hidden = true;
      this._domShadow.style.height = '';
      this.class.remove(CLASS_OPEN);
      window.removeEventListener('keydown', this._domEvtKeyDown);
      window.removeEventListener('mousedown', this._domEvtWindowMouseDown);
    }
    /**
     * @name SelectInput#toggle
     * @description Toggles the dropdown menu
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this._containerOptions.hidden) {
        this.open();
      } else {
        this.close();
      }
    }
  }, {
    key: "unlink",
    value: function unlink() {
      _get(_getPrototypeOf(SelectInput.prototype), "unlink", this).call(this);

      if (!this._containerOptions.hidden) {
        this.close();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;

      this._labelValue.dom.removeEventListener('keydown', this._domEvtKeyDown);

      this._labelValue.dom.removeEventListener('mousedown', this._domEvtMouseDown);

      this._labelValue.dom.removeEventListener('focus', this._domEvtFocus);

      this._labelValue.dom.removeEventListener('blur', this._domEvtBlur);

      this._containerOptions.dom.removeEventListener('wheel', this._domEvtWheel);

      window.removeEventListener('keydown', this._domEvtKeyDown);
      window.removeEventListener('mousedown', this._domEvtWindowMouseDown);

      if (this._timeoutLabelValueTabIndex) {
        cancelAnimationFrame(this._timeoutLabelValueTabIndex);
        this._timeoutLabelValueTabIndex = null;
      }

      _get(_getPrototypeOf(SelectInput.prototype), "destroy", this).call(this);
    }
  }, {
    key: "options",
    get: function get() {
      return this._options.slice();
    },
    set: function set(value) {
      var _this10 = this;

      if (this._options && this._options === value) return;

      this._containerOptions.clear();

      this._labelHighlighted = null;
      this._optionsIndex = {};
      this._labelsIndex = {};
      this._options = value; // store each option value -> title pair in the optionsIndex

      this._options.forEach(function (option) {
        _this10._optionsIndex[option.v] = option.t;
        if (option.v === '') return;
        var label = new Label["a" /* default */]({
          text: option.t,
          tabIndex: -1
        });
        label._optionValue = option.v; // store labels in an index too

        _this10._labelsIndex[option.v] = label; // on clicking an option set it as the value and close the dropdown list

        label.on('click', function (e) {
          e.stopPropagation();

          _this10._onSelectValue(option.v);

          _this10.close();
        });

        _this10._containerOptions.append(label);
      });

      if (this._createLabelText) {
        this._initializeCreateLabel();
      }

      if (this.multiSelect && this._values) {
        this._onMultipleValuesChange(this._values);
      } else {
        this._onValueChange(this.value);
      }

      if (this._lastInputValue) {
        this._filterOptions(this._lastInputValue);
      }
    }
  }, {
    key: "invalidOptions",
    get: function get() {
      return this._invalidOptions;
    },
    set: function set(value) {
      this._invalidOptions = value || null;
    }
  }, {
    key: "multiSelect",
    get: function get() {
      return this.class.contains(CLASS_MULTI_SELECT);
    }
  }, {
    key: "value",
    get: function get() {
      if (!this.multiSelect) {
        return this._value;
      } // if multi-select then construct an array
      // value from the tags that are currently visible


      var result = [];

      this._containerTags.dom.childNodes.forEach(function (dom) {
        result.push(dom.ui.value);
      });

      return result;
    },
    set: function set(value) {
      this._values = null;
      this._suspendInputChange = true;
      this._input.value = '';
      this._lastInputValue = '';
      this._suspendInputChange = false;
      this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);
      value = this._convertValue(value);

      if (this._value === value || this.multiSelect && this._value && this._value.equals(value)) {
        // if the value is null because we are showing multiple values
        // but someone wants to actually set the value of all observers to null
        // then make sure we do not return early
        if (value !== null || !this._allowNull || !this.class.contains(src_class["k" /* MULTIPLE_VALUES */])) {
          return;
        }
      }

      this._value = value;

      this._onValueChange(value);

      this.emit('change', value);

      if (this._binding) {
        this._binding.setValue(value);
      }
    }
    /* eslint accessor-pairs: 0 */

  }, {
    key: "values",
    set: function set(values) {
      values = values.map(this._convertValue.bind(this));
      var different = false;
      var value = values[0];
      var multiSelect = this.multiSelect;
      this._values = null;

      for (var i = 1; i < values.length; i++) {
        if (values[i] !== value && (!multiSelect || !values[i] || !values[i].equals(value))) {
          different = true;
          break;
        }
      }

      if (different) {
        this._labelValue.values = values; // show all different tags

        if (multiSelect) {
          this._values = values;
          this._value = null;

          this._onMultipleValuesChange(this._values);

          this.emit('change', this.value);
        } else {
          if (this._value !== null) {
            this._value = null;
            this.emit('change', null);
          }
        }

        this.class.add(src_class["k" /* MULTIPLE_VALUES */]);
      } else {
        this.value = values[0];
      }
    }
  }, {
    key: "placeholder",
    get: function get() {
      return this._input.placeholder;
    },
    set: function set(value) {
      this._input.placeholder = value;
    }
  }]);

  return SelectInput;
}(Element["a" /* default */]);


/* harmony default export */ var components_SelectInput = __webpack_exports__["a"] = (SelectInput_SelectInput);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: BooleanInput

// CONCATENATED MODULE: ./src/components/BooleanInput/style.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/components/BooleanInput/toggle-style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/BooleanInput/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CLASS_BOOLEAN_INPUT = 'pcui-boolean-input';
var CLASS_BOOLEAN_INPUT_TICKED = CLASS_BOOLEAN_INPUT + '-ticked';
var CLASS_BOOLEAN_INPUT_TOGGLE = CLASS_BOOLEAN_INPUT + '-toggle';
/**
 * @name BooleanInput
 * @classdesc A checkbox element.
 * @property {boolean} renderChanges If true the input will flash when changed.
 * @augments Element
 */

var BooleanInput_BooleanInput = /*#__PURE__*/function (_Element) {
  _inherits(BooleanInput, _Element);

  var _super = _createSuper(BooleanInput);

  /**
   * Creates a new pcui.BooleanInput.
   *
   * @param {object} args - The arguments.
   * @param {string} [args.type] - The type of checkbox currently can be null or 'toggle'.
   */
  function BooleanInput(args) {
    var _this;

    _classCallCheck(this, BooleanInput);

    args = Object.assign({
      tabIndex: 0
    }, args);
    _this = _super.call(this, args.dom ? args.dom : document.createElement('div'), args);

    if (args.type === 'toggle') {
      _this.class.add(CLASS_BOOLEAN_INPUT_TOGGLE);
    } else {
      _this.class.add(CLASS_BOOLEAN_INPUT);
    }

    _this.class.add(src_class["l" /* NOT_FLEXIBLE */]);

    _this._domEventKeyDown = _this._onKeyDown.bind(_assertThisInitialized(_this));
    _this._domEventFocus = _this._onFocus.bind(_assertThisInitialized(_this));
    _this._domEventBlur = _this._onBlur.bind(_assertThisInitialized(_this));

    _this.dom.addEventListener('keydown', _this._domEventKeyDown);

    _this.dom.addEventListener('focus', _this._domEventFocus);

    _this.dom.addEventListener('blur', _this._domEventBlur);

    _this._value = null;

    if (args.value !== undefined) {
      _this.value = args.value;
    }

    _this.renderChanges = args.renderChanges;
    return _this;
  }

  _createClass(BooleanInput, [{
    key: "_onClick",
    value: function _onClick(evt) {
      if (this.enabled) {
        this.focus();
      }

      if (this.enabled && !this.readOnly) {
        this.value = !this.value;
      }

      return _get(_getPrototypeOf(BooleanInput.prototype), "_onClick", this).call(this, evt);
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(evt) {
      if (evt.keyCode === 27) {
        this.blur();
        return;
      }

      if (!this.enabled || this.readOnly) return;

      if (evt.keyCode === 32) {
        evt.stopPropagation();
        evt.preventDefault();
        this.value = !this.value;
      }
    }
  }, {
    key: "_onFocus",
    value: function _onFocus() {
      this.emit('focus');
    }
  }, {
    key: "_onBlur",
    value: function _onBlur() {
      this.emit('blur');
    }
  }, {
    key: "_updateValue",
    value: function _updateValue(value) {
      this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);
      if (value === this.value) return false;
      this._value = value;

      if (value) {
        this.class.add(CLASS_BOOLEAN_INPUT_TICKED);
      } else {
        this.class.remove(CLASS_BOOLEAN_INPUT_TICKED);
      }

      if (this.renderChanges) {
        this.flash();
      }

      this.emit('change', value);
      return true;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.dom.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.dom.blur();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;
      this.dom.removeEventListener('keydown', this._domEventKeyDown);
      this.dom.removeEventListener('focus', this._domEventFocus);
      this.dom.removeEventListener('blur', this._domEventBlur);

      _get(_getPrototypeOf(BooleanInput.prototype), "destroy", this).call(this);
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      var changed = this._updateValue(value);

      if (changed && this._binding) {
        this._binding.setValue(value);
      }
    }
    /* eslint accessor-pairs: 0 */

  }, {
    key: "values",
    set: function set(values) {
      var different = false;
      var value = values[0];

      for (var i = 1; i < values.length; i++) {
        if (values[i] !== value) {
          different = true;
          break;
        }
      }

      if (different) {
        this._updateValue(null);

        this.class.add(src_class["k" /* MULTIPLE_VALUES */]);
      } else {
        this._updateValue(values[0]);
      }
    }
  }]);

  return BooleanInput;
}(Element["a" /* default */]);


/* harmony default export */ var components_BooleanInput = __webpack_exports__["a"] = (BooleanInput_BooleanInput);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/Code/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/Label/index.js + 1 modules
var Label = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/Code/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CLASS_ROOT = 'pcui-code';
var CLASS_INNER = CLASS_ROOT + '-inner';
/**
 * @name Code
 * @augments Container
 * @classdesc Represents a code block.
 */

var Code_Code = /*#__PURE__*/function (_Container) {
  _inherits(Code, _Container);

  var _super = _createSuper(Code);

  /**
   * Creates a new spinner.
   *
   * @param {object} [args] - The arguments
   * @param {string} [args.text] - The text to display in the code block;
   */
  function Code(args) {
    var _this;

    _classCallCheck(this, Code);

    if (!args) args = {};
    _this = _super.call(this, args);

    _this.class.add(CLASS_ROOT);

    _this._inner = new Label["a" /* default */]();

    _this.append(_this._inner);

    _this._inner.class.add(CLASS_INNER);

    if (args.text) {
      _this.text = args.text;
    }

    return _this;
  }

  _createClass(Code, [{
    key: "text",
    set: function set(value) {
      this._text = value;
      this._inner.text = value;
    },
    get: function get() {
      return this._text;
    }
  }]);

  return Code;
}(Container["a" /* default */]);

/* harmony default export */ var components_Code = __webpack_exports__["a"] = (Code_Code);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/Divider/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Divider/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CLASS_ROOT = 'pcui-divider';
/**
 * @name Divider
 * @augments Element
 * @classdesc Represents a vertical division between two elements
 */

var Divider = /*#__PURE__*/function (_Element) {
  _inherits(Divider, _Element);

  var _super = _createSuper(Divider);

  function Divider(args) {
    var _this;

    _classCallCheck(this, Divider);

    if (!args) args = {};
    _this = _super.call(this, args.dom ? args.dom : document.createElement('div'), args);

    _this.class.add(CLASS_ROOT);

    return _this;
  }

  return Divider;
}(Element["a" /* default */]);

/* harmony default export */ var components_Divider = __webpack_exports__["a"] = (Divider);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: InfoBox

// CONCATENATED MODULE: ./src/components/InfoBox/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/InfoBox/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CLASS_INFOBOX = 'pcui-infobox';
/**
 * @name InfoBox
 * @classdesc Represents an information box.
 * @property {string} icon The CSS code for an icon for the info box. e.g. E401 (notice we omit the '\' character).
 * @property {string} title Gets / sets the 'title' of the info box
 * @property {string} text Gets / sets the 'text' of the info box
 */

var InfoBox_InfoBox = /*#__PURE__*/function (_Container) {
  _inherits(InfoBox, _Container);

  var _super = _createSuper(InfoBox);

  /**
   * Creates a new InfoBox.
   *
   * @param {object} args - The arguments. Extends the pcui.Container constructor arguments. All settable properties can also be set through the constructor.
   * @param {boolean} [args.unsafe] - If true then the innerHTML property will be used to set the title/text. Otherwise textContent will be used instead.
   */
  function InfoBox(args) {
    var _this;

    _classCallCheck(this, InfoBox);

    if (!args) args = {};
    _this = _super.call(this, args);

    _this.class.add(CLASS_INFOBOX);

    _this._titleElement = new Element["a" /* default */]();
    _this._textElement = new Element["a" /* default */]();

    _this.append(_this._titleElement);

    _this.append(_this._textElement);

    _this._unsafe = args.unsafe || false;
    _this.icon = args.icon || '';
    _this.title = args.title || '';
    _this.text = args.text || '';
    return _this;
  }

  _createClass(InfoBox, [{
    key: "icon",
    get: function get() {
      return this._icon;
    },
    set: function set(value) {
      if (this._icon === value) return;
      this._icon = value;

      if (value) {
        // set data-icon attribute but first convert the value to a code point
        this.dom.setAttribute('data-icon', String.fromCodePoint(parseInt(value, 16)));
      } else {
        this.dom.removeAttribute('data-icon');
      }
    }
  }, {
    key: "title",
    get: function get() {
      return this._title;
    },
    set: function set(value) {
      if (this._title === value) return;
      this._title = value;

      if (this._unsafe) {
        this._titleElement.dom.innerHTML = value;
      } else {
        this._titleElement.dom.textContent = value;
      }
    }
  }, {
    key: "text",
    get: function get() {
      return this._text;
    },
    set: function set(value) {
      if (this._text === value) return;
      this._text = value;

      if (this._unsafe) {
        this._textElement.dom.innerHTML = value;
      } else {
        this._textElement.dom.textContent = value;
      }
    }
  }]);

  return InfoBox;
}(Container["a" /* default */]);


/* harmony default export */ var components_InfoBox = __webpack_exports__["a"] = (InfoBox_InfoBox);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/VectorInput/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/NumericInput/index.js + 1 modules
var NumericInput = __webpack_require__(8);

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/VectorInput/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CLASS_VECTOR_INPUT = 'pcui-vector-input';
/**
 * @name VectorInput
 * @classdesc A vector input
 * @augments Element
 */

var VectorInput_VectorInput = /*#__PURE__*/function (_Element) {
  _inherits(VectorInput, _Element);

  var _super = _createSuper(VectorInput);

  /**
   * Creates a new pcui.VectorInput.
   *
   * @param {object} args - The arguments.
   * @param {number} [args.dimensions=3] - The number of dimensions in the vector. Can be between 2 to 4. Defaults to 3.
   * @param {number} [args.min] - The minimum value for each vector element.
   * @param {number} [args.max] - The maximum value for each vector element.
   * @param {number} [args.precision] - The decimal precision for each vector element.
   * @param {number} [args.step] - The incremental step when using arrow keys for each vector element.
   * @param {boolean} [args.renderChanges] - If true each vector element will flash on changes.
   * @param {string[]|string} [args.placeholder] - The placeholder string for each vector element.
   */
  function VectorInput(args) {
    var _this;

    _classCallCheck(this, VectorInput);

    args = Object.assign({}, args); // set binding after inputs have been created

    var binding = args.binding;
    delete args.binding;
    _this = _super.call(this, args.dom ? args.dom : document.createElement('div'), args);

    _this.class.add(CLASS_VECTOR_INPUT);

    var dimensions = Math.max(2, Math.min(4, args.dimensions || 3));

    var onInputChange = _this._onInputChange.bind(_assertThisInitialized(_this));

    _this._inputs = new Array(dimensions);

    for (var i = 0; i < _this._inputs.length; i++) {
      _this._inputs[i] = new NumericInput["a" /* default */]({
        min: args.min,
        max: args.max,
        precision: args.precision,
        step: args.step,
        renderChanges: args.renderChanges,
        placeholder: args.placeholder ? Array.isArray(args.placeholder) ? args.placeholder[i] : args.placeholder : null
      });

      _this._inputs[i].on('change', onInputChange);

      _this._inputs[i].on('focus', function () {
        _this.emit('focus');
      });

      _this._inputs[i].on('blur', function () {
        _this.emit('blur');
      });

      _this.dom.appendChild(_this._inputs[i].dom);

      _this._inputs[i].parent = _assertThisInitialized(_this);
    } // set the binding after the inputs have been created
    // because we rely on them in the overriden setter


    if (binding) {
      _this.binding = binding;
    }

    _this._applyingChange = false;

    if (args.value !== undefined) {
      _this.value = args.value;
    }

    return _this;
  }

  _createClass(VectorInput, [{
    key: "_onInputChange",
    value: function _onInputChange() {
      if (this._applyingChange) return; // check if any of our inputs have the multiple_values class
      // and if so inherit it for us as well

      var showingMultipleValues = false;

      for (var i = 0; i < this._inputs.length; i++) {
        if (this._inputs[i].class.contains(src_class["k" /* MULTIPLE_VALUES */])) {
          showingMultipleValues = true;
          break;
        }
      }

      if (showingMultipleValues) {
        this.class.add(src_class["k" /* MULTIPLE_VALUES */]);
      } else {
        this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);
      }

      this.emit('change', this.value);
    }
  }, {
    key: "_updateValue",
    value: function _updateValue(value) {
      this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);
      if (this.value.equals(value)) return false;
      this._applyingChange = true;

      for (var i = 0; i < this._inputs.length; i++) {
        // disable binding for each individual input when we use
        // the 'value' setter for the whole vector value. That is because
        // we do not want the individual inputs to emit their own binding events
        // since we are setting the whole vector value here
        var binding = this._inputs[i].binding;
        var applyingChange = false;

        if (binding) {
          applyingChange = binding.applyingChange;
          binding.applyingChange = true;
        }

        this._inputs[i].value = value && value[i] !== undefined ? value[i] : null;

        if (binding) {
          binding.applyingChange = applyingChange;
        }
      }

      this.emit('change', this.value);
      this._applyingChange = false;
      return true;
    }
  }, {
    key: "link",
    value: function link(observers, paths) {
      var _this2 = this;

      _get(_getPrototypeOf(VectorInput.prototype), "link", this).call(this, observers, paths);

      observers = Array.isArray(observers) ? observers : [observers];
      paths = Array.isArray(paths) ? paths : [paths];
      var useSinglePath = paths.length === 1 || observers.length !== paths.length;

      if (useSinglePath) {
        for (var i = 0; i < this._inputs.length; i++) {
          // link observers to path.i for each dimension
          this._inputs[i].link(observers, paths[0] + ".".concat(i));
        }
      } else {
        var _loop = function _loop(_i) {
          // link observers to paths[i].i for each dimension
          _this2._inputs[_i].link(observers, paths.map(function (path) {
            return "".concat(path, ".").concat(_i);
          }));
        };

        for (var _i = 0; _i < this._inputs.length; _i++) {
          _loop(_i);
        }
      }
    }
  }, {
    key: "unlink",
    value: function unlink() {
      _get(_getPrototypeOf(VectorInput.prototype), "unlink", this).call(this);

      for (var i = 0; i < this._inputs.length; i++) {
        this._inputs[i].unlink();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this._inputs[0].focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      for (var i = 0; i < this._inputs.length; i++) {
        this._inputs[i].blur();
      }
    }
  }, {
    key: "value",
    get: function get() {
      var value = new Array(this._inputs.length);

      for (var i = 0; i < this._inputs.length; i++) {
        value[i] = this._inputs[i].value;
      }

      return value;
    },
    set: function set(value) {
      if (!Array.isArray(value)) {
        value = [];
      }

      var changed = this._updateValue(value);

      if (changed && this._binding) {
        this._binding.setValue(value);
      }
    }
    /* eslint accessor-pairs: 0 */

  }, {
    key: "values",
    set: function set(values) {
      // create an array for each dimension (e.g. one array for x one for y one for z)
      values = this._inputs.map(function (_, i) {
        return values.map(function (arr) {
          return arr[i];
        });
      });

      this._inputs.forEach(function (input, i) {
        input.values = values[i];
      });
    } // override binding setter to set a binding clone to
    // each input

  }, {
    key: "binding",
    set: function set(value) {
      _set(_getPrototypeOf(VectorInput.prototype), "binding", value, this, true);

      for (var i = 0; i < this._inputs.length; i++) {
        this._inputs[i].binding = value ? value.clone() : null;
      }
    } // we have to override the getter too because
    // we have overriden the setter
    ,
    get: function get() {
      return _get(_getPrototypeOf(VectorInput.prototype), "binding", this);
    }
  }, {
    key: "placeholder",
    get: function get() {
      return this._inputs.map(function (input) {
        return input.placeholder;
      });
    },
    set: function set(value) {
      for (var i = 0; i < this._inputs.length; i++) {
        this._inputs[i].placeholder = value[i] || value || null;
      }
    }
  }, {
    key: "inputs",
    get: function get() {
      return this._inputs.slice();
    }
  }]);

  return VectorInput;
}(Element["a" /* default */]); // add proxied properties


['min', 'max', 'precision', 'step', 'renderChanges'].forEach(function (property) {
  Object.defineProperty(VectorInput_VectorInput.prototype, property, {
    get: function get() {
      return this._inputs[0][property];
    },
    set: function set(value) {
      for (var i = 0; i < this._inputs.length; i++) {
        this._inputs[i][property] = value;
      }
    }
  });
});
/* harmony default export */ var components_VectorInput = __webpack_exports__["a"] = (VectorInput_VectorInput);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/Overlay/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Overlay/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CLASS_OVERLAY = 'pcui-overlay';
var CLASS_OVERLAY_INNER = CLASS_OVERLAY + '-inner';
var CLASS_OVERLAY_CLICKABLE = CLASS_OVERLAY + '-clickable';
var CLASS_OVERLAY_TRANSPARENT = CLASS_OVERLAY + '-transparent';
var CLASS_OVERLAY_CONTENT = CLASS_OVERLAY + '-content';
/**
 * @name Overlay
 * @classdesc An overlay element.
 * @property {boolean} clickable Whether the overlay can be hidden by clicking on it.
 * @property {boolean} transparent Whether the overlay is transparent.
 * @augments Container
 */

var Overlay = /*#__PURE__*/function (_Container) {
  _inherits(Overlay, _Container);

  var _super = _createSuper(Overlay);

  /**
   * Creates a new pcui.Overlay.
   *
   * @param {object} args - The arguments.
   */
  function Overlay(args) {
    var _this;

    _classCallCheck(this, Overlay);

    if (!args) args = {};
    _this = _super.call(this, args);

    _this.class.add(CLASS_OVERLAY);

    _this._domClickableOverlay = document.createElement('div');
    _this._domClickableOverlay.ui = _assertThisInitialized(_this);
    _this._domClickableOverlay.classList = CLASS_OVERLAY_INNER;

    _this.dom.appendChild(_this._domClickableOverlay);

    _this._domEventMouseDown = _this._onMouseDown.bind(_assertThisInitialized(_this));

    _this._domClickableOverlay.addEventListener('mousedown', _this._domEventMouseDown);

    _this.domContent = document.createElement('div');
    _this.domContent.ui = _assertThisInitialized(_this);

    _this.domContent.classList.add(CLASS_OVERLAY_CONTENT);

    _this.dom.appendChild(_this.domContent);

    _this.clickable = args.clickable || false;
    _this.transparent = args.transparent || false;
    return _this;
  }

  _createClass(Overlay, [{
    key: "_onMouseDown",
    value: function _onMouseDown(evt) {
      var _this2 = this;

      if (!this.clickable) return; // some field might be in focus

      document.body.blur(); // wait till blur is done

      requestAnimationFrame(function () {
        _this2.hidden = true;
      });
      evt.preventDefault();
    }
    /**
     * @name Overlay#position
     * @description Position the overlay at specific x, y coordinates.
     * @param {number} x - The x coordinate
     * @param {number} y - The y coordinate
     */

  }, {
    key: "position",
    value: function position(x, y) {
      var area = this._domClickableOverlay.getBoundingClientRect();

      var rect = this.domContent.getBoundingClientRect();
      x = Math.max(0, Math.min(area.width - rect.width, x));
      y = Math.max(0, Math.min(area.height - rect.height, y));
      this.domContent.style.position = 'absolute';
      this.domContent.style.left = "".concat(x, "px");
      this.domContent.style.top = "".concat(y, "px");
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;

      this._domClickableOverlay.removeEventListener('mousedown', this._domEventMouseDown);

      _get(_getPrototypeOf(Overlay.prototype), "destroy", this).call(this);
    }
  }, {
    key: "clickable",
    get: function get() {
      return this.class.contains(CLASS_OVERLAY_CLICKABLE);
    },
    set: function set(value) {
      if (value) {
        this.class.add(CLASS_OVERLAY_CLICKABLE);
      } else {
        this.class.remove(CLASS_OVERLAY_CLICKABLE);
      }
    }
  }, {
    key: "transparent",
    get: function get() {
      return this.class.contains(CLASS_OVERLAY_TRANSPARENT);
    },
    set: function set(value) {
      if (value) {
        this.class.add(CLASS_OVERLAY_TRANSPARENT);
      } else {
        this.class.remove(CLASS_OVERLAY_TRANSPARENT);
      }
    }
  }]);

  return Overlay;
}(Container["a" /* default */]);

/* harmony default export */ var components_Overlay = __webpack_exports__["a"] = (Overlay);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Panel

// CONCATENATED MODULE: ./src/components/Panel/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/Label/index.js + 1 modules
var Label = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/Button/index.js + 1 modules
var Button = __webpack_require__(7);

// CONCATENATED MODULE: ./src/components/Panel/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var CLASS_PANEL = 'pcui-panel';
var CLASS_PANEL_HEADER = CLASS_PANEL + '-header';
var CLASS_PANEL_HEADER_TITLE = CLASS_PANEL_HEADER + '-title';
var CLASS_PANEL_CONTENT = CLASS_PANEL + '-content';
var CLASS_PANEL_HORIZONTAL = CLASS_PANEL + '-horizontal';
var CLASS_PANEL_SORTABLE_ICON = CLASS_PANEL + '-sortable-icon';
var CLASS_PANEL_REMOVE = CLASS_PANEL + '-remove'; // TODO: document panelType

/**
 * @event
 * @name Panel#collapse
 * @description Fired when the panel gets collapsed
 */

/**
 * @event
 * @name Panel#expand
 * @description Fired when the panel gets expanded
 */

/**
 * @name Panel
 * @classdesc The Panel is a pcui.Container that itself contains a header container and a content container. The
 * respective pcui.Container functions work using the content container. One can also append elements to the header of the Panel.
 * @property {boolean} flex Gets / sets whether the container supports flex layout. Defaults to false. Cannot co-exist with grid.
 * @property {boolean} grid Gets / sets whether the container supports grid layout. Defaults to false. Cannot co-exist with flex.
 * @property {boolean} collapsible Gets / sets whether the panel can be collapsed by clicking on its header or by setting collapsed to true. Defaults to false.
 * @property {boolean} sortable Gets / sets whether the panel can be reordered
 * @property {boolean} collapsed Gets / sets whether the panel is collapsed or expanded. Defaults to false.
 * @property {boolean} collapseHorizontally Gets / sets whether the panel collapses horizontally - this would be the case for side panels. Defaults to false.
 * @property {boolean} removable Gets / sets whether the panel can be removed
 * @property {number} headerSize The height of the header in pixels. Defaults to 32.
 * @property {string} headerText The header text of the panel. Defaults to the empty string.
 * @property {Container} header Gets the header conttainer.
 * @property {Container} content Gets the content conttainer.
 * @augments Container
 * @mixes pcui.IContainer
 * @mixes pcui.IFlex
 * @mixes pcui.IGrid
 * @mixes pcui.IScrollable
 * @mixes pcui.IResizable
 */

var Panel_Panel = /*#__PURE__*/function (_Container) {
  _inherits(Panel, _Container);

  var _super = _createSuper(Panel);

  /**
   * Creates a new Panel.
   *
   * @param {object} args - The arguments. Extends the pcui.Container constructor arguments. All settable properties can also be set through the constructor.
   */
  function Panel(args) {
    var _this;

    _classCallCheck(this, Panel);

    if (!args) args = {};
    var panelArgs = Object.assign({}, args);
    panelArgs.flex = true;
    delete panelArgs.grid;
    delete panelArgs.flexDirection;
    delete panelArgs.scrollable;
    _this = _super.call(this, panelArgs);

    _this.class.add(CLASS_PANEL);

    if (args.panelType) {
      _this.class.add(CLASS_PANEL + '-' + args.panelType);
    } // do not call reflow on every update while
    // we are initializing


    _this._suspendReflow = true; // initialize header container

    _this._initializeHeader(args); // initialize content container


    _this._initializeContent(args); // header size


    _this.headerSize = args.headerSize !== undefined ? args.headerSize : 32;
    _this._domEvtDragStart = _this._onDragStart.bind(_assertThisInitialized(_this));
    _this._domEvtDragMove = _this._onDragMove.bind(_assertThisInitialized(_this));
    _this._domEvtDragEnd = _this._onDragEnd.bind(_assertThisInitialized(_this)); // collapse related

    _this._reflowTimeout = null;
    _this._widthBeforeCollapse = null;
    _this._heightBeforeCollapse = null;
    _this.collapsible = args.collapsible || false;
    _this.collapsed = args.collapsed || false;
    _this.collapseHorizontally = args.collapseHorizontally || false;
    _this._iconSort = null;
    _this.sortable = args.sortable || false;
    _this._btnRemove = null;
    _this.removable = args.removable || false; // set the contents container to be the content DOM element
    // from now on calling append functions on the panel will append themn
    // elements to the contents container

    _this.domContent = _this._containerContent.dom; // execute reflow now after all fields have been initialized

    _this._suspendReflow = false;

    _this._reflow();

    return _this;
  }

  _createClass(Panel, [{
    key: "_initializeHeader",
    value: function _initializeHeader(args) {
      // header container
      this._containerHeader = new Container["a" /* default */]({
        flex: true,
        flexDirection: 'row',
        class: [CLASS_PANEL_HEADER, 'font-bold']
      }); // header title

      this._labelTitle = new Label["a" /* default */]({
        text: args.headerText,
        class: [CLASS_PANEL_HEADER_TITLE, 'font-bold']
      });

      this._containerHeader.append(this._labelTitle); // use native click listener because the pcui.Element#click event is only fired
      // if the element is enabled. However we still want to catch header click events in order
      // to collapse them


      this._containerHeader.dom.addEventListener('click', this._onHeaderClick.bind(this));

      this.append(this._containerHeader);
    }
  }, {
    key: "_onHeaderClick",
    value: function _onHeaderClick(evt) {
      if (!this._collapsible) return;
      if (evt.target !== this.header.dom && evt.target !== this._labelTitle.dom) return; // toggle collapsed

      this.collapsed = !this.collapsed;
    }
  }, {
    key: "_onClickRemove",
    value: function _onClickRemove(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.emit('click:remove');
    }
  }, {
    key: "_initializeContent",
    value: function _initializeContent(args) {
      // containers container
      this._containerContent = new Container["a" /* default */]({
        class: CLASS_PANEL_CONTENT,
        grid: args.grid,
        flex: args.flex,
        flexDirection: args.flexDirection,
        scrollable: args.scrollable,
        dom: args.container
      });
      this.append(this._containerContent);
    } // Collapses or expands the panel as needed

  }, {
    key: "_reflow",
    value: function _reflow() {
      var _this2 = this;

      if (this._suspendReflow) {
        return;
      }

      if (this._reflowTimeout) {
        cancelAnimationFrame(this._reflowTimeout);
        this._reflowTimeout = null;
      }

      if (this.hidden || !this.collapsible) return;

      if (this.collapsed && this.collapseHorizontally) {
        this._containerHeader.style.top = -this.headerSize + 'px';
      } else {
        this._containerHeader.style.top = '';
      } // we rely on the content width / height and we have to
      // wait for 1 frame before we can get the final values back


      this._reflowTimeout = requestAnimationFrame(function () {
        _this2._reflowTimeout = null;

        if (_this2.collapsed) {
          // remember size before collapse
          if (!_this2._widthBeforeCollapse) {
            _this2._widthBeforeCollapse = _this2.style.width;
          }

          if (!_this2._heightBeforeCollapse) {
            _this2._heightBeforeCollapse = _this2.style.height;
          }

          if (_this2._collapseHorizontally) {
            _this2.height = '';
            _this2.width = _this2.headerSize;
          } else {
            _this2.height = _this2.headerSize;
          } // add collapsed class after getting the width and height
          // because if we add it before then because of overflow:hidden
          // we might get innacurate width/heights.


          _this2.class.add(src_class["a" /* COLLAPSED */]);
        } else {
          // remove collapsed class first and the restore width and height
          // (opposite order of collapsing)
          _this2.class.remove(src_class["a" /* COLLAPSED */]);

          if (_this2._collapseHorizontally) {
            _this2.height = '';

            if (_this2._widthBeforeCollapse !== null) {
              _this2.width = _this2._widthBeforeCollapse;
            }
          } else {
            if (_this2._heightBeforeCollapse !== null) {
              _this2.height = _this2._heightBeforeCollapse;
            }
          } // reset before collapse vars


          _this2._widthBeforeCollapse = null;
          _this2._heightBeforeCollapse = null;
        }
      });
    }
  }, {
    key: "_onDragStart",
    value: function _onDragStart(evt) {
      if (this.disabled || this.readOnly) return;
      evt.stopPropagation();
      evt.preventDefault();
      window.addEventListener('mouseup', this._domEvtDragEnd);
      window.addEventListener('mouseleave', this._domEvtDragEnd);
      window.addEventListener('mousemove', this._domEvtDragMove);
      this.emit('dragstart');

      if (this.parent && this.parent._onChildDragStart) {
        this.parent._onChildDragStart(evt, this);
      }
    }
  }, {
    key: "_onDragMove",
    value: function _onDragMove(evt) {
      this.emit('dragmove');

      if (this.parent && this.parent._onChildDragStart) {
        this.parent._onChildDragMove(evt, this);
      }
    }
  }, {
    key: "_onDragEnd",
    value: function _onDragEnd(evt) {
      window.removeEventListener('mouseup', this._domEvtDragEnd);
      window.removeEventListener('mouseleave', this._domEvtDragEnd);
      window.removeEventListener('mousemove', this._domEvtDragMove);

      if (this._draggedChild === this) {
        this._draggedChild = null;
      }

      this.emit('dragend');

      if (this.parent && this.parent._onChildDragStart) {
        this.parent._onChildDragEnd(evt, this);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;

      if (this._reflowTimeout) {
        cancelAnimationFrame(this._reflowTimeout);
        this._reflowTimeout = null;
      }

      window.removeEventListener('mouseup', this._domEvtDragEnd);
      window.removeEventListener('mouseleave', this._domEvtDragEnd);
      window.removeEventListener('mousemove', this._domEvtDragMove);

      _get(_getPrototypeOf(Panel.prototype), "destroy", this).call(this);
    }
  }, {
    key: "collapsible",
    get: function get() {
      return this._collapsible;
    },
    set: function set(value) {
      if (value === this._collapsible) return;
      this._collapsible = value;

      if (value) {
        this.classAdd(src_class["b" /* COLLAPSIBLE */]);
      } else {
        this.classRemove(src_class["b" /* COLLAPSIBLE */]);
      }

      this._reflow();

      if (this.collapsed) {
        this.emit(value ? 'collapse' : 'expand');
      }
    }
  }, {
    key: "collapsed",
    get: function get() {
      return this._collapsed;
    },
    set: function set(value) {
      if (this._collapsed === value) return;
      this._collapsed = value;

      this._reflow();

      if (this.collapsible) {
        this.emit(value ? 'collapse' : 'expand');
      }
    }
  }, {
    key: "sortable",
    get: function get() {
      return this._sortable;
    },
    set: function set(value) {
      if (this._sortable === value) return;
      this._sortable = value;

      if (value) {
        this._iconSort = new Label["a" /* default */]({
          class: CLASS_PANEL_SORTABLE_ICON
        });

        this._iconSort.dom.addEventListener('mousedown', this._domEvtDragStart);

        this.header.prepend(this._iconSort);
      } else if (this._iconSort) {
        this._iconSort.destroy();

        this._iconSort = null;
      }
    }
  }, {
    key: "removable",
    get: function get() {
      return !!this._btnRemove;
    },
    set: function set(value) {
      if (this.removable === value) return;

      if (value) {
        this._btnRemove = new Button["a" /* default */]({
          icon: 'E289',
          class: CLASS_PANEL_REMOVE
        });

        this._btnRemove.on('click', this._onClickRemove.bind(this));

        this.header.append(this._btnRemove);
      } else {
        this._btnRemove.destroy();

        this._btnRemove = null;
      }
    }
  }, {
    key: "collapseHorizontally",
    get: function get() {
      return this._collapseHorizontally;
    },
    set: function set(value) {
      if (this._collapseHorizontally === value) return;
      this._collapseHorizontally = value;

      if (value) {
        this.classAdd(CLASS_PANEL_HORIZONTAL);
      } else {
        this.classRemove(CLASS_PANEL_HORIZONTAL);
      }

      this._reflow();
    }
  }, {
    key: "content",
    get: function get() {
      return this._containerContent;
    }
  }, {
    key: "header",
    get: function get() {
      return this._containerHeader;
    }
  }, {
    key: "headerText",
    get: function get() {
      return this._labelTitle.text;
    },
    set: function set(value) {
      this._labelTitle.text = value;
    }
  }, {
    key: "headerSize",
    get: function get() {
      return this._headerSize;
    },
    set: function set(value) {
      this._headerSize = value;
      var style = this._containerHeader.dom.style;
      style.height = Math.max(0, value) + 'px';
      style.lineHeight = style.height;

      this._reflow();
    }
  }]);

  return Panel;
}(Container["a" /* default */]);


/* harmony default export */ var components_Panel = __webpack_exports__["a"] = (Panel_Panel);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/Progress/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/Container/index.js + 1 modules
var Container = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Progress/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CLASS_ROOT = 'pcui-progress';
var CLASS_INNER = CLASS_ROOT + '-inner';
/**
 * @name Progress
 * @classdesc Represents a bar that can highlight progress of an activity.
 * @property {number} value Gets / sets the value of the progress bar (between 0 and 100).
 */

var Progress_Progress = /*#__PURE__*/function (_Container) {
  _inherits(Progress, _Container);

  var _super = _createSuper(Progress);

  function Progress(args) {
    var _this;

    _classCallCheck(this, Progress);

    if (!args) args = {};
    _this = _super.call(this, args);

    _this.class.add(CLASS_ROOT);

    _this._inner = new Element["a" /* default */]();

    _this.append(_this._inner);

    _this._inner.class.add(CLASS_INNER);

    if (args.value !== undefined) {
      _this.value = args.value;
    }

    return _this;
  }

  _createClass(Progress, [{
    key: "value",
    set: function set(val) {
      if (this._value === val) return;
      this._value = val;
      this._inner.width = "".concat(this._value, "%");
      this.emit('change', val);
    },
    get: function get() {
      return this._value;
    }
  }]);

  return Progress;
}(Container["a" /* default */]);

/* harmony default export */ var components_Progress = __webpack_exports__["a"] = (Progress_Progress);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: SliderInput

// CONCATENATED MODULE: ./src/components/SliderInput/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/NumericInput/index.js + 1 modules
var NumericInput = __webpack_require__(8);

// EXTERNAL MODULE: ./src/class.js
var src_class = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/SliderInput/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var CLASS_SLIDER = 'pcui-slider';
var CLASS_SLIDER_CONTAINER = CLASS_SLIDER + '-container';
var CLASS_SLIDER_BAR = CLASS_SLIDER + '-bar';
var CLASS_SLIDER_HANDLE = CLASS_SLIDER + '-handle';
var CLASS_SLIDER_ACTIVE = CLASS_SLIDER + '-active'; // fields that are proxied between the slider and the numeric input

var PROXY_FIELDS = ['allowNull', 'max', 'min', 'keyChange', 'placeholder', 'precision', 'renderChanges', 'step'];
/**
 * @name SliderInput
 * @classdesc The SliderInput shows a pcui.NumericInput and a slider widget next to it. It acts as a proxy
 * of the NumericInput.
 * @property {number} min Gets / sets the minimum value that the numeric input field can take.
 * @property {number} max Gets / sets the maximum value that the numeric input field can take.
 * @property {number} sliderMin Gets / sets the minimum value that the slider field can take.
 * @property {number} sliderMax Gets / sets the maximum value that the slider field can take.
 * @property {number} pre Gets / sets the maximum number of decimals a value can take.
 * @property {number} step Gets / sets the amount that the value will be increased or decreased when using the arrow keys. Holding Shift will use 10x the step.
 * @property {boolean} allowNull Gets / sets whether the value can be null. If not then it will be 0 instead of null.
 * @augments Element
 * @mixes IBindable
 * @mixes IFocusable
 */

var SliderInput_SliderInput = /*#__PURE__*/function (_Element) {
  _inherits(SliderInput, _Element);

  var _super = _createSuper(SliderInput);

  /**
   * Creates a new SliderInput.
   *
   * @param {object} args - The arguments. Extends the pcui.NumericInput constructor arguments.
   */
  function SliderInput(args) {
    var _this;

    _classCallCheck(this, SliderInput);

    args = Object.assign({}, args);
    var inputArgs = {};
    PROXY_FIELDS.forEach(function (field) {
      inputArgs[field] = args[field];
    });

    if (inputArgs.precision === undefined) {
      inputArgs.precision = 2;
    } // binding should only go to the slider
    // and the slider will propagate changes to the numeric input


    delete inputArgs.binding;
    _this = _super.call(this, args.dom ? args.dom : document.createElement('div'), args);
    if (args.pre) _this.precision = args.pre;

    _this.class.add(CLASS_SLIDER);

    _this._combineHistory = false;
    _this._numericInput = new NumericInput["a" /* default */](_objectSpread(_objectSpread({}, inputArgs), {}, {
      hideSlider: true
    })); // propagate change event

    _this._numericInput.on('change', _this._onValueChange.bind(_assertThisInitialized(_this))); // propagate focus / blur events


    _this._numericInput.on('focus', function () {
      _this.emit('focus');
    });

    _this._numericInput.on('blur', function () {
      _this.emit('blur');
    });

    _this._sliderMin = args.sliderMin !== undefined ? args.sliderMin : _this.min || 0;
    _this._sliderMax = args.sliderMax !== undefined ? args.sliderMax : _this.max || 1;

    _this.dom.appendChild(_this._numericInput.dom);

    _this._numericInput.parent = _assertThisInitialized(_this);
    _this._domSlider = document.createElement('div');

    _this._domSlider.classList.add(CLASS_SLIDER_CONTAINER);

    _this.dom.appendChild(_this._domSlider);

    _this._domBar = document.createElement('div');

    _this._domBar.classList.add(CLASS_SLIDER_BAR);

    _this._domBar.ui = _assertThisInitialized(_this);

    _this._domSlider.appendChild(_this._domBar);

    _this._domHandle = document.createElement('div');
    _this._domHandle.ui = _assertThisInitialized(_this);
    _this._domHandle.tabIndex = 0;

    _this._domHandle.classList.add(CLASS_SLIDER_HANDLE);

    _this._domBar.appendChild(_this._domHandle);

    _this._domMouseDown = _this._onMouseDown.bind(_assertThisInitialized(_this));
    _this._domMouseMove = _this._onMouseMove.bind(_assertThisInitialized(_this));
    _this._domMouseUp = _this._onMouseUp.bind(_assertThisInitialized(_this));
    _this._domTouchStart = _this._onTouchStart.bind(_assertThisInitialized(_this));
    _this._domTouchMove = _this._onTouchMove.bind(_assertThisInitialized(_this));
    _this._domTouchEnd = _this._onTouchEnd.bind(_assertThisInitialized(_this));
    _this._domKeyDown = _this._onKeyDown.bind(_assertThisInitialized(_this));
    _this._touchId = null;

    _this._domBar.addEventListener('mousedown', _this._domMouseDown);

    _this._domBar.addEventListener('touchstart', _this._domTouchStart, {
      passive: true
    });

    _this._domHandle.addEventListener('keydown', _this._domKeyDown);

    if (args.value !== undefined) {
      _this.value = args.value;
    } // update the handle in case a 0 value has been
    // passed through the constructor


    if (_this.value === 0) {
      _this._updateHandle(0);
    }

    return _this;
  }

  _createClass(SliderInput, [{
    key: "_onMouseDown",
    value: function _onMouseDown(evt) {
      if (evt.button !== 0 || !this.enabled || this.readOnly) return;

      this._onSlideStart(evt.pageX);
    }
  }, {
    key: "_onMouseMove",
    value: function _onMouseMove(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      this._onSlideMove(evt.pageX);
    }
  }, {
    key: "_onMouseUp",
    value: function _onMouseUp(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      this._onSlideEnd(evt.pageX);
    }
  }, {
    key: "_onTouchStart",
    value: function _onTouchStart(evt) {
      if (!this.enabled || this.readOnly) return;

      for (var i = 0; i < evt.changedTouches.length; i++) {
        var touch = evt.changedTouches[i];
        if (!touch.target.ui || touch.target.ui !== this) continue;
        this._touchId = touch.identifier;

        this._onSlideStart(touch.pageX);

        break;
      }
    }
  }, {
    key: "_onTouchMove",
    value: function _onTouchMove(evt) {
      for (var i = 0; i < evt.changedTouches.length; i++) {
        var touch = evt.changedTouches[i];
        if (touch.identifier !== this._touchId) continue;
        evt.stopPropagation();
        evt.preventDefault();

        this._onSlideMove(touch.pageX);

        break;
      }
    }
  }, {
    key: "_onTouchEnd",
    value: function _onTouchEnd(evt) {
      for (var i = 0; i < evt.changedTouches.length; i++) {
        var touch = evt.changedTouches[i];
        if (touch.identifier !== this._touchId) continue;
        evt.stopPropagation();
        evt.preventDefault();

        this._onSlideEnd(touch.pageX);

        this._touchId = null;
        break;
      }
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(evt) {
      if (evt.keyCode === 27) {
        this.blur();
        return;
      }

      if (!this.enabled || this.readOnly) return; // move slider with left / right arrow keys

      if (evt.keyCode !== 37 && evt.keyCode !== 39) return;
      evt.stopPropagation();
      evt.preventDefault();
      var x = evt.keyCode === 37 ? -1 : 1;

      if (evt.shiftKey) {
        x *= 10;
      }

      this.value += x * this.step;
    }
  }, {
    key: "_updateHandle",
    value: function _updateHandle(value) {
      var left = Math.max(0, Math.min(1, ((value || 0) - this._sliderMin) / (this._sliderMax - this._sliderMin))) * 100;
      this._domHandle.style.left = left + '%';
    }
  }, {
    key: "_onValueChange",
    value: function _onValueChange(value) {
      this._updateHandle(value);

      this.emit('change', value);

      if (this._binding) {
        this._binding.setValue(value);
      }
    }
  }, {
    key: "_onSlideStart",
    value: function _onSlideStart(pageX) {
      this._domHandle.focus();

      if (this._touchId === null) {
        window.addEventListener('mousemove', this._domMouseMove);
        window.addEventListener('mouseup', this._domMouseUp);
      } else {
        window.addEventListener('touchmove', this._domTouchMove);
        window.addEventListener('touchend', this._domTouchEnd);
      }

      this.class.add(CLASS_SLIDER_ACTIVE);

      this._onSlideMove(pageX);

      if (this.binding) {
        this._combineHistory = this.binding.historyCombine;
        this.binding.historyCombine = true;
      }
    }
  }, {
    key: "_onSlideMove",
    value: function _onSlideMove(pageX) {
      var rect = this._domSlider.getBoundingClientRect();

      var x = Math.max(0, Math.min(1, (pageX - rect.left) / rect.width));
      var range = this._sliderMax - this._sliderMin;
      var value = x * range + this._sliderMin;
      value = parseFloat(value.toFixed(this.precision), 10);
      this.value = value;
    }
  }, {
    key: "_onSlideEnd",
    value: function _onSlideEnd(pageX) {
      this._onSlideMove(pageX);

      this.class.remove(CLASS_SLIDER_ACTIVE);

      if (this._touchId === null) {
        window.removeEventListener('mousemove', this._domMouseMove);
        window.removeEventListener('mouseup', this._domMouseUp);
      } else {
        window.removeEventListener('touchmove', this._domTouchMove);
        window.removeEventListener('touchend', this._domTouchEnd);
      }

      if (this.binding) {
        this.binding.historyCombine = this._combineHistory;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this._numericInput.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this._domHandle.blur();

      this._numericInput.blur();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._destroyed) return;

      this._domBar.removeEventListener('mousedown', this._domMouseDown);

      this._domBar.removeEventListener('touchstart', this._domTouchStart);

      this._domHandle.removeEventListener('keydown', this._domKeyDown);

      this.dom.removeEventListener('mouseup', this._domMouseUp);
      this.dom.removeEventListener('mousemove', this._domMouseMove);
      this.dom.removeEventListener('touchmove', this._domTouchMove);
      this.dom.removeEventListener('touchend', this._domTouchEnd);

      _get(_getPrototypeOf(SliderInput.prototype), "destroy", this).call(this);
    }
  }, {
    key: "sliderMin",
    get: function get() {
      return this._sliderMin;
    },
    set: function set(value) {
      if (this._sliderMin === value) return;
      this._sliderMin = value;

      this._updateHandle(this.value);
    }
  }, {
    key: "sliderMax",
    get: function get() {
      return this._sliderMax;
    },
    set: function set(value) {
      if (this._sliderMax === value) return;
      this._sliderMax = value;

      this._updateHandle(this.value);
    }
  }, {
    key: "value",
    get: function get() {
      return this._numericInput.value;
    },
    set: function set(value) {
      this._numericInput.value = value;

      if (this._numericInput.class.contains(src_class["k" /* MULTIPLE_VALUES */])) {
        this.class.add(src_class["k" /* MULTIPLE_VALUES */]);
      } else {
        this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);
      }
    }
    /* eslint accessor-pairs: 0 */

  }, {
    key: "values",
    set: function set(values) {
      this._numericInput.values = values;

      if (this._numericInput.class.contains(src_class["k" /* MULTIPLE_VALUES */])) {
        this.class.add(src_class["k" /* MULTIPLE_VALUES */]);
      } else {
        this.class.remove(src_class["k" /* MULTIPLE_VALUES */]);
      }
    }
  }]);

  return SliderInput;
}(Element["a" /* default */]);

SliderInput_SliderInput.PROXY_FIELDS = PROXY_FIELDS;

/* harmony default export */ var components_SliderInput = __webpack_exports__["a"] = (SliderInput_SliderInput);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/Spinner/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/Element/index.js + 1 modules
var Element = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Spinner/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CLASS_ROOT = 'pcui-spinner';

function createSmallThick(size, dom) {
  var spinner = dom || document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  spinner.classList.add('spin');
  spinner.setAttribute('width', size);
  spinner.setAttribute('height', size);
  spinner.setAttribute('viewBox', '0 0 14 14');
  spinner.setAttribute('fill', 'none');
  spinner.innerHTML = '<path d="M7 14C3.13871 14 0 10.8613 0 7C0 3.13871 3.13871 0 7 0C10.8613 0 14 3.13871 14 7C14 10.8613 10.8613 14 7 14ZM7 2.25806C4.38064 2.25806 2.25806 4.38064 2.25806 7C2.25806 9.61935 4.38064 11.7419 7 11.7419C9.61935 11.7419 11.7419 9.61935 11.7419 7C11.7419 4.38064 9.61935 2.25806 7 2.25806Z" fill="#773417"/><path class="pcui-spinner-highlight" d="M7 14V11.7419C9.61935 11.7419 11.7419 9.61935 11.7419 7H14C14 10.8613 10.8613 14 7 14Z" fill="#FF6600"/>';
  return spinner;
}
/**
 * @name Spinner
 * @augments Element
 * @classdesc Represents a spinning icon
 */


var Spinner = /*#__PURE__*/function (_Element) {
  _inherits(Spinner, _Element);

  var _super = _createSuper(Spinner);

  /**
   * Creates a new spinner.
   *
   * @param {object} [args] - The arguments
   * @param {number} [args.size=12] - The pixel size of the spinner
   */
  function Spinner(args) {
    var _this;

    _classCallCheck(this, Spinner);

    args = Object.assign({
      type: Spinner.TYPE_SMALL_THICK
    }, args);
    var dom = null;

    if (args.type === Spinner.TYPE_SMALL_THICK) {
      dom = createSmallThick(args.size || 12, args.dom);
    }

    _this = _super.call(this, dom, args);

    _this.class.add(CLASS_ROOT);

    return _this;
  }

  return Spinner;
}(Element["a" /* default */]);

Spinner.TYPE_SMALL_THICK = 'small-thick'; // add more types here

/* harmony default export */ var components_Spinner = __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/components/TextAreaInput/style.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/TextInput/index.js + 1 modules
var TextInput = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/TextAreaInput/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CLASS_TEXT_AREA_INPUT = 'pcui-text-area-input';
/**
 * @name TextAreaInput
 * @classdesc The TextAreaInput wraps a textarea element. It has the same interface as pcui.TextInput.
 * @augments TextInput
 */

var TextAreaInput = /*#__PURE__*/function (_TextInput) {
  _inherits(TextAreaInput, _TextInput);

  var _super = _createSuper(TextAreaInput);

  /**
   * Creates a new TextAreaInput.
   *
   * @param {object} args - The arguments. Extends the pcui.TextInput constructor arguments.
   */
  function TextAreaInput(args) {
    var _this;

    _classCallCheck(this, TextAreaInput);

    args = Object.assign({
      input: document.createElement('textarea')
    }, args);
    _this = _super.call(this, args);

    _this.class.add(CLASS_TEXT_AREA_INPUT);

    return _this;
  }

  _createClass(TextAreaInput, [{
    key: "_onInputKeyDown",
    value: function _onInputKeyDown(evt) {
      if (evt.keyCode === 27 && this.blurOnEscape || evt.keyCode === 13 && this.blurOnEnter && !evt.shiftKey) {
        this._domInput.blur();
      }

      this.emit('keydown', evt);
    }
  }]);

  return TextAreaInput;
}(TextInput["a" /* default */]);

/* harmony default export */ var components_TextAreaInput = __webpack_exports__["a"] = (TextAreaInput);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_BooleanInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanInput", function() { return _components_BooleanInput__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _components_Code__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _components_Container__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _components_ContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return _components_ContextMenu__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _components_Divider__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _components_Element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return _components_Element__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _components_InfoBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return _components_InfoBox__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _components_Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _components_Label__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _components_NumericInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumericInput", function() { return _components_NumericInput__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _components_Overlay__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _components_Panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _components_Panel__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _components_Progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _components_Progress__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectInput", function() { return _components_SelectInput__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _components_SliderInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderInput", function() { return _components_SliderInput__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _components_Spinner__WEBPACK_IMPORTED_MODULE_15__["a"]; });

/* harmony import */ var _components_TextAreaInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaInput", function() { return _components_TextAreaInput__WEBPACK_IMPORTED_MODULE_16__["a"]; });

/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _components_TextInput__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony import */ var _components_VectorInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VectorInput", function() { return _components_VectorInput__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _scss_pcui_hidden_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(22);


















 // import pcui-hidden last




/***/ })
/******/ ]);
});