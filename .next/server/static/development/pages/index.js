module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/Cta/ImageCta.js":
/*!****************************************!*\
  !*** ./src/components/Cta/ImageCta.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Cta\\ImageCta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ImageCta = ({
  image,
  tags,
  title,
  url
}) => {
  return __jsx("div", {
    className: "image-cta text-center space-mb--r100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 8,
    className: "ml-auto mr-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "image-cta__image space-mb--35",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + image,
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "image-cta__tags space-mb--35",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, tags && tags.map((tag, i) => {
    return __jsx("li", {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: url,
      as: "" + url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 27
      }
    }, "#", tag)));
  }))), __jsx("div", {
    className: "image-cta__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "space-mb--30",
    dangerouslySetInnerHTML: {
      __html: title
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url,
    as: "" + url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "lezada-button lezada-button--medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "shop now")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageCta);

/***/ }),

/***/ "./src/components/Cta/ImageCtaThree.js":
/*!*********************************************!*\
  !*** ./src/components/Cta/ImageCtaThree.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Cta\\ImageCtaThree.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ImageCtaThree = ({
  spaceBottomClass
}) => {
  return __jsx("div", {
    className: `image-cta-two overflow-hidden ${spaceBottomClass ? spaceBottomClass : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "image-cta-two__content space-mb-mobile-only--40",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "subtitle space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "FEATURED PRODUCT"), __jsx("h2", {
    className: "title space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Montana shelf collection"), __jsx("p", {
    className: "text space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit excepturi laboriosam sapiente ipsam delectus doloremque vel alias eveniet facere!"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "lezada-button lezada-button--medium lezada-button--icon--left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }), " Only $39")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "image-cta-two__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/cta/sofa.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageCtaThree);

/***/ }),

/***/ "./src/components/Cta/ImageCtaTwo.js":
/*!*******************************************!*\
  !*** ./src/components/Cta/ImageCtaTwo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Cta\\ImageCtaTwo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ImageCtaTwo = ({
  spaceBottomClass
}) => {
  return __jsx("div", {
    className: `image-cta-two ${spaceBottomClass ? spaceBottomClass : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "image-cta-two__content space-mb-mobile-only--40",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "subtitle space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 15
    }
  }, "FEATURED PRODUCT"), __jsx("h2", {
    className: "title space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, "Montana shelf collection"), __jsx("p", {
    className: "text space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit excepturi laboriosam sapiente ipsam delectus doloremque vel alias eveniet facere!"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "lezada-button lezada-button--medium lezada-button--icon--left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }), " Only $39")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "image-cta-two__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/cta/cabinet2.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageCtaTwo);

/***/ }),

/***/ "./src/components/Cta/index.js":
/*!*************************************!*\
  !*** ./src/components/Cta/index.js ***!
  \*************************************/
/*! exports provided: ImageCta, ImageCtaTwo, ImageCtaThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCta */ "./src/components/Cta/ImageCta.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCta", function() { return _ImageCta__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ImageCtaTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCtaTwo */ "./src/components/Cta/ImageCtaTwo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCtaTwo", function() { return _ImageCtaTwo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ImageCtaThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCtaThree */ "./src/components/Cta/ImageCtaThree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCtaThree", function() { return _ImageCtaThree__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/components/Footer/FooterFour.js":
/*!*********************************************!*\
  !*** ./src/components/Footer/FooterFour.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Newsletter */ "./src/components/Newsletter/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Footer\\FooterFour.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FooterFour = () => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: top,
    1: setTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_4__["animateScroll"].scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx("footer", {
    className: "bg-color--grey space-pt--100 space-pb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget footer-single-widget--style2 space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "footer-email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:contact@lezada.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "contact@lezada.com")), __jsx("p", {
    className: "footer-phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "(+88) 123 4566 6868"), __jsx("div", {
    className: "store-icons space-mb--m20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + "/assets/images/icon/play.png",
    className: "img-fluid space-mr--20 space-mb--20",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + "/assets/images/icon/app.png",
    className: "img-fluid space-mb--20",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget footer-single-widget--style2 space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: "footer-single-widget__nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "About us")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "Store location")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, "Contact")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "Orders tracking"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget footer-single-widget--style2 space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: "footer-single-widget__nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "Returns")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, "Support Policy")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, "Size guide")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, "FAQs"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget footer-single-widget--style2 space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: "footer-single-widget__nav footer-single-widget__nav--social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.twitter.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }), " Twitter")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }), " Facebook")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.instagram.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }), " Instagram")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.youtube.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaYoutube"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }), " Youtube"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget footer-single-widget--style2 space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-subscribe-widget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "footer-subscribe-widget__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "Newsletter."), __jsx("p", {
    className: "footer-subscribe-widget__subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "Subscribe to our newsletter to receive news on update."), __jsx(_Newsletter__WEBPACK_IMPORTED_MODULE_5__["SubscribeEmailTwo"], {
    mailchimpUrl: "https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "align-items-center space-mb--m30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "logo text-left text-md-center space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "payment-icon text-left text-md-right space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/icon/pay.png",
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }))))), __jsx("button", {
    className: `scroll-top ${scroll > top ? "show" : ""}`,
    onClick: () => scrollToTop(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosArrowRoundUp"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterFour);

/***/ }),

/***/ "./src/components/Footer/FooterOne.js":
/*!********************************************!*\
  !*** ./src/components/Footer/FooterOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Footer\\FooterOne.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FooterOne = () => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: top,
    1: setTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_4__["animateScroll"].scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx("footer", {
    className: "space-pt--100 space-pb--100 bg-color--grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 9,
    md: 12,
    className: "space-mb-mobile-only--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: "footer-nav-container footer-nav-container--horizontal space-mb--20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, "ABOUT US")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "STORE LOCATION")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, "CONTACT")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "SUPPORT")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, "POLICY")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "FAQS"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 3,
    md: 12,
    className: "text-left text-lg-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-social-icons space-mb--20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Twitter",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.twitter.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Facebook",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Instagram",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Youtube",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.youtube.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaYoutube"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 23
    }
  })))))), __jsx("div", {
    className: "payment-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/icon/pay.png",
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }))))), __jsx("button", {
    className: `scroll-top ${scroll > top ? "show" : ""}`,
    onClick: () => scrollToTop(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosArrowRoundUp"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterOne);

/***/ }),

/***/ "./src/components/Footer/FooterThree.js":
/*!**********************************************!*\
  !*** ./src/components/Footer/FooterThree.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Footer\\FooterThree.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FooterThree = () => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: top,
    1: setTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_4__["animateScroll"].scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx("footer", {
    className: "space-pt--100 space-pb--100 border-top--grey text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: "footer-nav-container footer-nav-container--horizontal space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, "ABOUT US")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "STORE LOCATION")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, "CONTACT")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "SUPPORT")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, "POLICY")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "FAQS")))), __jsx("div", {
    className: "footer-social-icons space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Twitter",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.twitter.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Facebook",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Instagram",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: "Youtube",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.youtube.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaYoutube"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  }))))))))), __jsx("button", {
    className: `scroll-top ${scroll > top ? "show" : ""}`,
    onClick: () => scrollToTop(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosArrowRoundUp"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterThree);

/***/ }),

/***/ "./src/components/Footer/FooterTwo.js":
/*!********************************************!*\
  !*** ./src/components/Footer/FooterTwo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Newsletter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Newsletter */ "./src/components/Newsletter/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Footer\\FooterTwo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const FooterTwo = () => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: top,
    1: setTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_4__["animateScroll"].scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx("footer", {
    className: "bg-color--grey space-pt--100 space-pb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "logo space-mb--35",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "footer-single-widget__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "ABOUT"), __jsx("nav", {
    className: "footer-single-widget__nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, "About us")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "Store location")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "Contact")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, "Orders tracking"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "footer-single-widget__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "USEFUL LINKS"), __jsx("nav", {
    className: "footer-single-widget__nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, "Returns")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, "Support Policy")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, "Size guide")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, "FAQs"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("h5", {
    className: "footer-single-widget__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "FOLLOW US ON"), __jsx("nav", {
    className: "footer-single-widget__nav footer-single-widget__nav--social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.twitter.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }), " Twitter")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }), " Facebook")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.instagram.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaInstagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }), " Instagram")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.youtube.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaYoutube"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }), " Youtube"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "footer-single-widget space-mb--50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-subscribe-widget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "footer-subscribe-widget__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Subscribe."), __jsx("p", {
    className: "footer-subscribe-widget__subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "Subscribe to our newsletter to receive news on update."), __jsx(_Newsletter__WEBPACK_IMPORTED_MODULE_5__["SubscribeEmailTwo"], {
    mailchimpUrl: "https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }))))), __jsx("button", {
    className: `scroll-top ${scroll > top ? "show" : ""}`,
    onClick: () => scrollToTop(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosArrowRoundUp"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FooterTwo);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: FooterOne, FooterTwo, FooterThree, FooterFour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterOne */ "./src/components/Footer/FooterOne.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterOne", function() { return _FooterOne__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _FooterTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterTwo */ "./src/components/Footer/FooterTwo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterTwo", function() { return _FooterTwo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _FooterThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterThree */ "./src/components/Footer/FooterThree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterThree", function() { return _FooterThree__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _FooterFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterFour */ "./src/components/Footer/FooterFour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterFour", function() { return _FooterFour__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./src/components/Header/HeaderFive.js":
/*!*********************************************!*\
  !*** ./src/components/Header/HeaderFive.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/Navigation */ "./src/components/Header/elements/Navigation.js");
/* harmony import */ var _elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/AboutOverlay */ "./src/components/Header/elements/AboutOverlay.js");
/* harmony import */ var _elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/SearchOverlay */ "./src/components/Header/elements/SearchOverlay.js");
/* harmony import */ var _elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/CartOverlay */ "./src/components/Header/elements/CartOverlay.js");
/* harmony import */ var _elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/WishlistOverlay */ "./src/components/Header/elements/WishlistOverlay.js");
/* harmony import */ var _elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/MobileMenu */ "./src/components/Header/elements/MobileMenu.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\HeaderFive.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const HeaderFive = ({
  aboutOverlay,
  cartItems,
  wishlistItems
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerTop,
    1: setHeaderTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: offCanvasAboutActive,
    1: setOffCanvasAboutActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasSearchActive,
    1: setOffCanvasSearchActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasCartActive,
    1: setOffCanvasCartActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasWishlistActive,
    1: setOffCanvasWishlistActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasMobileMenuActive,
    1: setOffCanvasMobileMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop ? document.body.style.paddingTop = `${headerHeight}px` : document.body.style.paddingTop = 0;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: `topbar-shadow ${scroll > headerTop ? "is-sticky" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "header-top-area border-bottom--grey space-pt--10 space-pb--10 d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-top__left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "language-change change-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "English"), " ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowDown"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 40
    }
  }), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, "English")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, "Deustch")))), __jsx("span", {
    className: "header-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "|"), __jsx("div", {
    className: "currency-change change-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "USD"), " ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowDown"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 36
    }
  }), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  }, "USD")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 23
    }
  }, "EUR")))), __jsx("span", {
    className: "header-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "|"), __jsx("div", {
    className: "order-online-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "Order Online Call", __jsx("span", {
    className: "number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, "(0123) 456789"))), __jsx("div", {
    className: "header-top__right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "signup-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "Signup / Login"))), __jsx("span", {
    className: "header-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "|"), __jsx("div", {
    className: "top-social-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.twitter.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoLogoTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoLogoFacebook"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoLogoInstagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.youtube.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoLogoYoutube"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  }))))))))), __jsx("div", {
    className: "header-bottom-area",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-content__logo space-pr--15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  })))), __jsx(_elements_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "header-content__icons space-pl--15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasSearchActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasWishlistActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 23
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, wishlistItems.length ? wishlistItems.length : "") : "")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasCartActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 23
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 25
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("ul", {
    className: "d-block d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 25
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 27
    }
  }, wishlistItems.length ? wishlistItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 27
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => setOffCanvasMobileMenuActive(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 23
    }
  }))))))))), aboutOverlay === false ? "" : __jsx(_elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeStatus: offCanvasAboutActive,
    getActiveStatus: setOffCanvasAboutActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }), __jsx(_elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeStatus: offCanvasSearchActive,
    getActiveStatus: setOffCanvasSearchActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }
  }), __jsx(_elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeStatus: offCanvasCartActive,
    getActiveStatus: setOffCanvasCartActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }), __jsx(_elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeStatus: offCanvasWishlistActive,
    getActiveStatus: setOffCanvasWishlistActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }
  }), __jsx(_elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeStatus: offCanvasMobileMenuActive,
    getActiveStatus: setOffCanvasMobileMenuActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(HeaderFive));

/***/ }),

/***/ "./src/components/Header/HeaderFour.js":
/*!*********************************************!*\
  !*** ./src/components/Header/HeaderFour.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_NavigationOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/NavigationOverlay */ "./src/components/Header/elements/NavigationOverlay.js");
/* harmony import */ var _elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/SearchOverlay */ "./src/components/Header/elements/SearchOverlay.js");
/* harmony import */ var _elements_CartOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/CartOverlay */ "./src/components/Header/elements/CartOverlay.js");
/* harmony import */ var _elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/WishlistOverlay */ "./src/components/Header/elements/WishlistOverlay.js");
/* harmony import */ var _elements_MobileMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/MobileMenu */ "./src/components/Header/elements/MobileMenu.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\HeaderFour.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const HeaderFour = ({
  cartItems,
  wishlistItems
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerTop,
    1: setHeaderTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: offCanvasNavigationActive,
    1: setOffCanvasNavigationActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasSearchActive,
    1: setOffCanvasSearchActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasCartActive,
    1: setOffCanvasCartActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasWishlistActive,
    1: setOffCanvasWishlistActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasMobileMenuActive,
    1: setOffCanvasMobileMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop ? document.body.style.paddingTop = `${headerHeight}px` : document.body.style.paddingTop = 0;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: `transparent-style white-content ${scroll > headerTop ? "is-sticky" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "header-content align-items-center space-pt--30 space-pb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-content__logo d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasNavigationActive(true);
    },
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid dark-logo",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "" + "/assets/images/logo-alt.png",
    className: "img-fluid white-logo",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-content__icons text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasSearchActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasWishlistActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, wishlistItems.length ? wishlistItems.length : "") : "")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasCartActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("ul", {
    className: "d-block d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 25
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 27
    }
  }, wishlistItems.length ? wishlistItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 27
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => setOffCanvasMobileMenuActive(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 23
    }
  }))))))))), __jsx(_elements_NavigationOverlay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeStatus: offCanvasNavigationActive,
    getActiveStatus: setOffCanvasNavigationActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }), __jsx(_elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeStatus: offCanvasSearchActive,
    getActiveStatus: setOffCanvasSearchActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }), __jsx(_elements_CartOverlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeStatus: offCanvasCartActive,
    getActiveStatus: setOffCanvasCartActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }), __jsx(_elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeStatus: offCanvasWishlistActive,
    getActiveStatus: setOffCanvasWishlistActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }), __jsx(_elements_MobileMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeStatus: offCanvasMobileMenuActive,
    getActiveStatus: setOffCanvasMobileMenuActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(HeaderFour));

/***/ }),

/***/ "./src/components/Header/HeaderOne.js":
/*!********************************************!*\
  !*** ./src/components/Header/HeaderOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/Navigation */ "./src/components/Header/elements/Navigation.js");
/* harmony import */ var _elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/AboutOverlay */ "./src/components/Header/elements/AboutOverlay.js");
/* harmony import */ var _elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/SearchOverlay */ "./src/components/Header/elements/SearchOverlay.js");
/* harmony import */ var _elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/CartOverlay */ "./src/components/Header/elements/CartOverlay.js");
/* harmony import */ var _elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/WishlistOverlay */ "./src/components/Header/elements/WishlistOverlay.js");
/* harmony import */ var _elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/MobileMenu */ "./src/components/Header/elements/MobileMenu.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "react-bootstrap/Dropdown");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/authActions */ "./src/redux/actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const HeaderOne = ({
  aboutOverlay,
  cartItems,
  wishlistItems
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerTop,
    1: setHeaderTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: offCanvasAboutActive,
    1: setOffCanvasAboutActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasSearchActive,
    1: setOffCanvasSearchActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasCartActive,
    1: setOffCanvasCartActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasWishlistActive,
    1: setOffCanvasWishlistActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasMobileMenuActive,
    1: setOffCanvasMobileMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.auth);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const userName = auth.user.firstName;
  console.log(userName);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop ? document.body.style.paddingTop = `${headerHeight}px` : document.body.style.paddingTop = 0;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const logout = () => {
    dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["signout"])());
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("header", {
    className: `topbar-shadow ${scroll > headerTop ? "is-sticky" : ""}`
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide"
  }, __jsx("div", {
    className: "header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30"
  }, __jsx("div", {
    className: "header-content__logo d-flex align-items-center space-pr--15"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/"
  }, __jsx("a", null, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid",
    alt: ""
  })))), __jsx(_elements_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "header-content__icons space-pl--15"
  }, __jsx("ul", {
    className: "d-none d-lg-block"
  }, __jsx("li", null, __jsx("button", {
    onClick: () => {
      setOffCanvasSearchActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosSearch"], null))), __jsx("li", null, !auth.authenticate ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register"
  }, __jsx("a", null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], null))) : //   <Dropdown>
  //   <Dropdown.Toggle variant="transparent" id="button" className="btn">
  //   <a><IoMdPerson /></a>
  //   </Dropdown.Toggle>
  //   <Dropdown.Menu>
  //     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  //     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  //   </Dropdown.Menu>
  // </Dropdown>
  __jsx("nav", {
    className: "header-content__navigation space-pr--0 space-pl--0 d-none d-lg-block"
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], null)), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowDown"], null), __jsx("ul", {
    className: "sub-menu sub-menu--mega sub-menu--mega--column-2"
  }, __jsx("li", {
    className: "sub-menu--mega__title"
  }, __jsx("ul", {
    className: "sub-menu--mega__list"
  }, __jsx("li", null, __jsx("a", null, userName, " ")), __jsx("li", {
    onClick: logout
  }, __jsx("a", null, "Logout"))))))))), __jsx("li", null, __jsx("button", {
    onClick: () => {
      setOffCanvasWishlistActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], null), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count"
  }, wishlistItems.length ? wishlistItems.length : "") : "")), __jsx("li", null, __jsx("button", {
    onClick: () => {
      setOffCanvasCartActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], null), cartItems.length >= 1 ? __jsx("span", {
    className: "count"
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("ul", {
    className: "d-block d-lg-none"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist"
  }, __jsx("a", null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], null), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count"
  }, wishlistItems.length ? wishlistItems.length : "") : ""))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart"
  }, __jsx("a", null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], null), cartItems.length >= 1 ? __jsx("span", {
    className: "count"
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("li", null, __jsx("button", {
    onClick: () => setOffCanvasMobileMenuActive(true)
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], null)))))))), aboutOverlay === false ? "" : __jsx(_elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeStatus: offCanvasAboutActive,
    getActiveStatus: setOffCanvasAboutActive
  }), __jsx(_elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeStatus: offCanvasSearchActive,
    getActiveStatus: setOffCanvasSearchActive
  }), __jsx(_elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeStatus: offCanvasCartActive,
    getActiveStatus: setOffCanvasCartActive
  }), __jsx(_elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeStatus: offCanvasWishlistActive,
    getActiveStatus: setOffCanvasWishlistActive
  }), __jsx(_elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeStatus: offCanvasMobileMenuActive,
    getActiveStatus: setOffCanvasMobileMenuActive
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(HeaderOne));

/***/ }),

/***/ "./src/components/Header/HeaderSeven.js":
/*!**********************************************!*\
  !*** ./src/components/Header/HeaderSeven.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/Navigation */ "./src/components/Header/elements/Navigation.js");
/* harmony import */ var _elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/AboutOverlay */ "./src/components/Header/elements/AboutOverlay.js");
/* harmony import */ var _elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/SearchOverlay */ "./src/components/Header/elements/SearchOverlay.js");
/* harmony import */ var _elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/CartOverlay */ "./src/components/Header/elements/CartOverlay.js");
/* harmony import */ var _elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/WishlistOverlay */ "./src/components/Header/elements/WishlistOverlay.js");
/* harmony import */ var _elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/MobileMenu */ "./src/components/Header/elements/MobileMenu.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\HeaderSeven.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const HeaderSeven = ({
  aboutOverlay,
  cartItems,
  wishlistItems
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerTop,
    1: setHeaderTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: offCanvasAboutActive,
    1: setOffCanvasAboutActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasSearchActive,
    1: setOffCanvasSearchActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasCartActive,
    1: setOffCanvasCartActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasWishlistActive,
    1: setOffCanvasWishlistActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasMobileMenuActive,
    1: setOffCanvasMobileMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop ? document.body.style.paddingTop = `${headerHeight}px` : document.body.style.paddingTop = 0;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: `topbar-shadow transparent-style white-content ${scroll > headerTop ? "is-sticky" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header-content__logo d-flex align-items-center space-pr--15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasAboutActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    className: `${aboutOverlay === false ? "d-none" : "about-overlay-trigger d-none d-lg-block"}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid dark-logo",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }), __jsx("img", {
    src: "" + "/assets/images/logo-alt.png",
    className: "img-fluid white-logo",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  })))), __jsx(_elements_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "header-content__icons space-pl--15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasSearchActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasWishlistActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 23
    }
  }, wishlistItems.length ? wishlistItems.length : "") : "")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasCartActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("ul", {
    className: "d-block d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 23
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }, wishlistItems.length ? wishlistItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 23
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("button", {
    onClick: () => setOffCanvasMobileMenuActive(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  })))))))), aboutOverlay === false ? "" : __jsx(_elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeStatus: offCanvasAboutActive,
    getActiveStatus: setOffCanvasAboutActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }), __jsx(_elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeStatus: offCanvasSearchActive,
    getActiveStatus: setOffCanvasSearchActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }), __jsx(_elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeStatus: offCanvasCartActive,
    getActiveStatus: setOffCanvasCartActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }), __jsx(_elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeStatus: offCanvasWishlistActive,
    getActiveStatus: setOffCanvasWishlistActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }), __jsx(_elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeStatus: offCanvasMobileMenuActive,
    getActiveStatus: setOffCanvasMobileMenuActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(HeaderSeven));

/***/ }),

/***/ "./src/components/Header/HeaderSix.js":
/*!********************************************!*\
  !*** ./src/components/Header/HeaderSix.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/Navigation */ "./src/components/Header/elements/Navigation.js");
/* harmony import */ var _elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/AboutOverlay */ "./src/components/Header/elements/AboutOverlay.js");
/* harmony import */ var _elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/SearchOverlay */ "./src/components/Header/elements/SearchOverlay.js");
/* harmony import */ var _elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/CartOverlay */ "./src/components/Header/elements/CartOverlay.js");
/* harmony import */ var _elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/WishlistOverlay */ "./src/components/Header/elements/WishlistOverlay.js");
/* harmony import */ var _elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/MobileMenu */ "./src/components/Header/elements/MobileMenu.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\HeaderSix.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const HeaderSix = ({
  aboutOverlay,
  cartItems,
  wishlistItems
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerTop,
    1: setHeaderTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: offCanvasAboutActive,
    1: setOffCanvasAboutActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasSearchActive,
    1: setOffCanvasSearchActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasCartActive,
    1: setOffCanvasCartActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasWishlistActive,
    1: setOffCanvasWishlistActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasMobileMenuActive,
    1: setOffCanvasMobileMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop ? document.body.style.paddingTop = `${headerHeight}px` : document.body.style.paddingTop = 0;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: `topbar-shadow ${scroll > headerTop ? "is-sticky" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "multilevel-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "multilevel-header__top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "language-change change-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "English"), " ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowDown"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 42
    }
  }), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "English")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "Deustch")))), __jsx("span", {
    className: "header-separator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "|"), __jsx("div", {
    className: "currency-change change-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "USD"), " ", __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowDown"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 38
    }
  }), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "USD")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, "EUR")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 6,
    lg: 4,
    className: "text-left text-lg-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "header-content__logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 23
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 6,
    lg: 4,
    className: "text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "header-content__icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasSearchActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 27
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasWishlistActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 27
    }
  }, wishlistItems.length ? wishlistItems.length : "") : "")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasCartActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 27
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("ul", {
    className: "d-block d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 27
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, wishlistItems.length ? wishlistItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 23
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 27
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => setOffCanvasMobileMenuActive(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 25
    }
  }))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "multilevel-header__bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "text-center d-none d-lg-block space-mt--40",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, __jsx(_elements_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  })))))), aboutOverlay === false ? "" : __jsx(_elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeStatus: offCanvasAboutActive,
    getActiveStatus: setOffCanvasAboutActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }), __jsx(_elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeStatus: offCanvasSearchActive,
    getActiveStatus: setOffCanvasSearchActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }), __jsx(_elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeStatus: offCanvasCartActive,
    getActiveStatus: setOffCanvasCartActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  }), __jsx(_elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeStatus: offCanvasWishlistActive,
    getActiveStatus: setOffCanvasWishlistActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }
  }), __jsx(_elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    activeStatus: offCanvasMobileMenuActive,
    getActiveStatus: setOffCanvasMobileMenuActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(HeaderSix));

/***/ }),

/***/ "./src/components/Header/HeaderThree.js":
/*!**********************************************!*\
  !*** ./src/components/Header/HeaderThree.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_NavigationOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/NavigationOverlay */ "./src/components/Header/elements/NavigationOverlay.js");
/* harmony import */ var _elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/SearchOverlay */ "./src/components/Header/elements/SearchOverlay.js");
/* harmony import */ var _elements_CartOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/CartOverlay */ "./src/components/Header/elements/CartOverlay.js");
/* harmony import */ var _elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/WishlistOverlay */ "./src/components/Header/elements/WishlistOverlay.js");
/* harmony import */ var _elements_MobileMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/MobileMenu */ "./src/components/Header/elements/MobileMenu.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\HeaderThree.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const HeaderThree = ({
  cartItems,
  wishlistItems
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerTop,
    1: setHeaderTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: offCanvasNavigationActive,
    1: setOffCanvasNavigationActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasSearchActive,
    1: setOffCanvasSearchActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasCartActive,
    1: setOffCanvasCartActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasWishlistActive,
    1: setOffCanvasWishlistActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: offCanvasMobileMenuActive,
    1: setOffCanvasMobileMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop ? document.body.style.paddingTop = `${headerHeight}px` : document.body.style.paddingTop = 0;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: `topbar-shadow ${scroll > headerTop ? "is-sticky" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "header-content align-items-center space-pt--30 space-pb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 4,
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-content__navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasNavigationActive(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 6,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-content__logo text-left text-lg-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 6,
    lg: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "header-content__icons text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasSearchActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasWishlistActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 23
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, wishlistItems.length ? wishlistItems.length : "") : "")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => {
      setOffCanvasCartActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 23
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("ul", {
    className: "d-block d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 27
    }
  }, wishlistItems.length ? wishlistItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosCart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  }), cartItems.length >= 1 ? __jsx("span", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 27
    }
  }, cartItems.length ? cartItems.length : "") : ""))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 19
    }
  }, __jsx("button", {
    onClick: () => setOffCanvasMobileMenuActive(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 23
    }
  }))))))))), __jsx(_elements_NavigationOverlay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeStatus: offCanvasNavigationActive,
    getActiveStatus: setOffCanvasNavigationActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }), __jsx(_elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activeStatus: offCanvasSearchActive,
    getActiveStatus: setOffCanvasSearchActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }), __jsx(_elements_CartOverlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
    activeStatus: offCanvasCartActive,
    getActiveStatus: setOffCanvasCartActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }), __jsx(_elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    activeStatus: offCanvasWishlistActive,
    getActiveStatus: setOffCanvasWishlistActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }), __jsx(_elements_MobileMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    activeStatus: offCanvasMobileMenuActive,
    getActiveStatus: setOffCanvasMobileMenuActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(HeaderThree));

/***/ }),

/***/ "./src/components/Header/HeaderTwo.js":
/*!********************************************!*\
  !*** ./src/components/Header/HeaderTwo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\HeaderTwo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HeaderTwo = () => {
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerTop,
    1: setHeaderTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: headerHeight,
    1: setHeaderHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop ? document.body.style.paddingTop = `${headerHeight}px` : document.body.style.paddingTop = 0;
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: `topbar-shadow position-absolute ${scroll > headerTop ? "is-sticky" : ""}`,
    style: {
      top: 0,
      left: 0,
      width: "100%",
      paddingTop: "25px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "header-content__logo d-flex align-items-center space-pr--15",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "" + "/assets/images/logo.png",
    className: "img-fluid",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderTwo);

/***/ }),

/***/ "./src/components/Header/elements/AboutOverlay.js":
/*!********************************************************!*\
  !*** ./src/components/Header/elements/AboutOverlay.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\elements\\AboutOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AboutOverlay = ({
  activeStatus,
  getActiveStatus
}) => {
  return __jsx("div", {
    className: `about-overlay ${activeStatus ? "active" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "about-overlay__close",
    onClick: () => {
      getActiveStatus(false);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "about-overlay__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "about-overlay__close-icon",
    onClick: () => {
      getActiveStatus(false);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosClose"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "about-overlay__content-container d-flex flex-column justify-content-between h-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "about-overlay__widget-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "about-widget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "about-widget__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "About Us"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "At Lezada, we put a strong emphasis on simplicity, quality and usefulness of fashion products over other factors. Our fashion items never get outdated. They are not short-lived as normal fashion clothes."))), __jsx("div", {
    className: "about-overlay__contact-widget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:contact@lezada.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "contact@lezada.com")), __jsx("p", {
    className: "phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "(+00) 123 567990"), __jsx("div", {
    className: "social-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "Twitter",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.twitter.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "Facebook",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "Instagram",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaInstagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 23
    }
  })))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "Youtube",
    position: "top",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.youtube.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaYoutube"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutOverlay);

/***/ }),

/***/ "./src/components/Header/elements/CartOverlay.js":
/*!*******************************************************!*\
  !*** ./src/components/Header/elements/CartOverlay.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scroll */ "react-custom-scroll");
/* harmony import */ var react_custom_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../urlConfig */ "./src/urlConfig.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\elements\\CartOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const CartOverlay = ({
  activeStatus,
  getActiveStatus,
  cartItems,
  deleteFromCart
}) => {
  let cartTotalPrice = 0;
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  return __jsx("div", {
    className: `cart-overlay ${activeStatus ? "active" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "cart-overlay__close",
    onClick: () => {
      getActiveStatus(false);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "cart-overlay__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "cart-overlay__close-icon",
    onClick: () => {
      getActiveStatus(false);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosClose"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "cart-overlay__content-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "cart-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Cart"), cartItems.length >= 1 ? __jsx("div", {
    className: "cart-product-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "cart-product-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx(react_custom_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    allowOuterScroll: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, cartItems.map((product, i) => {
    const discountedPrice = Object(_lib_product__WEBPACK_IMPORTED_MODULE_6__["getDiscountPrice"])(product.price, product.discount).toFixed(2);
    cartTotalPrice += discountedPrice * product.quantity;
    return __jsx("div", {
      className: "single-cart-product",
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: "cart-close-icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }, __jsx("button", {
      onClick: () => deleteFromCart(product, addToast),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 27
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosClose"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/shop/product-basic/[slug]?slug=${product.slug}`,
      as: `${""}/shop/product-basic/${product.slug}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 27
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: Object(_urlConfig__WEBPACK_IMPORTED_MODULE_8__["generatePublicUrl"])(product.productPictures[0].img),
      className: "img-fluid",
      alt: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 31
      }
    })))), __jsx("div", {
      className: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }, __jsx("h5", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/shop/product-basic/[slug]?slug=${product.slug}`,
      as: `${""}/shop/product-basic/${product.slug}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 31
      }
    }, product.name))), product.selectedProductColor && product.selectedProductSize ? __jsx("div", {
      className: "cart-item-variation",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 31
      }
    }, "Color: ", product.selectedProductColor), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 31
      }
    }, "Size: ", product.selectedProductSize)) : "", __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "cart-count",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      }
    }, product.quantity, " x", " "), " ", __jsx("span", {
      className: "discounted-price",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 29
      }
    }, "$", discountedPrice))));
  }))), __jsx("p", {
    className: "cart-subtotal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "subtotal-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "Subtotal:"), __jsx("span", {
    className: "subtotal-amount",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "$", cartTotalPrice.toFixed(2))), __jsx("div", {
    className: "cart-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }, "view cart")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/checkout",
    as: "" + "/other/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, "checkout"))), __jsx("p", {
    className: "free-shipping-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Free Shipping on All Orders Over $100!")) : "No items found in cart")));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["deleteFromCart"])(item, addToast));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(CartOverlay));

/***/ }),

/***/ "./src/components/Header/elements/MobileMenu.js":
/*!******************************************************!*\
  !*** ./src/components/Header/elements/MobileMenu.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MobileMenuSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileMenuSearch */ "./src/components/Header/elements/MobileMenuSearch.js");
/* harmony import */ var _MobileMenuNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileMenuNav */ "./src/components/Header/elements/MobileMenuNav.js");
/* harmony import */ var _MobileMenuWidgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileMenuWidgets */ "./src/components/Header/elements/MobileMenuWidgets.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\elements\\MobileMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MobileMenu = ({
  activeStatus,
  getActiveStatus
}) => {
  return __jsx("div", {
    className: `offcanvas-mobile-menu ${activeStatus ? "active" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "offcanvas-mobile-menu__overlay-close",
    onClick: () => getActiveStatus(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "offcanvas-mobile-menu__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "offcanvas-mobile-menu__close",
    onClick: () => getActiveStatus(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosClose"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "offcanvas-mobile-menu__content-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "offcanvas-mobile-menu__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_MobileMenuSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx(_MobileMenuNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    getActiveStatus: getActiveStatus,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(_MobileMenuWidgets__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/components/Header/elements/MobileMenuNav.js":
/*!*********************************************************!*\
  !*** ./src/components/Header/elements/MobileMenuNav.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\elements\\MobileMenuNav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MobileMenuNav = ({
  getActiveStatus
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const offCanvasNav = document.querySelector("#offcanvas-mobile-menu__navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".mobile-sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  return __jsx("nav", {
    className: "offcanvas-mobile-menu__navigation",
    id: "offcanvas-mobile-menu__navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "menu-item-has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: "" + "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Home"))), __jsx("li", {
    className: "menu-item-has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, "Shop")), __jsx("ul", {
    className: "mobile-sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "menu-item-has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, "Group One")), __jsx("ul", {
    className: "mobile-sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, "Left Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/right-sidebar",
    as: "" + "/shop/right-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, "Right Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/no-sidebar",
    as: "" + "/shop/no-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  }, "No Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/fullwidth-no-space",
    as: "" + "/shop/fullwidth-no-space",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  }, "Full Width No Space"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/fullwidth-no-sidebar",
    as: "" + "/shop/fullwidth-no-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, "Full Width No Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/fullwidth-left-sidebar",
    as: "" + "/shop/fullwidth-left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, "Full Width Left Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/fullwidth-right-sidebar",
    as: "" + "/shop/fullwidth-right-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, "Full Width Right Sidebar"))))), __jsx("li", {
    className: "menu-item-has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, "Group Two")), __jsx("ul", {
    className: "mobile-sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/product-basic/[slug]?slug=lorem-ipsum-decor-one",
    as: "" + "/shop/product-basic/lorem-ipsum-decor-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, "Basic"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/product-fullwidth/[slug]?slug=lorem-ipsum-decor-one",
    as: "" + "/shop/product-fullwidth/lorem-ipsum-decor-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }, "Full Width"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/product-fullwidth-right-thumb/[slug]?slug=lorem-ipsum-decor-one",
    as: "" + "/shop/product-fullwidth-right-thumb/lorem-ipsum-decor-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, "Full Width Right Thumb"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/product-sticky/[slug]?slug=lorem-ipsum-decor-one",
    as: "" + "/shop/product-sticky/lorem-ipsum-decor-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  }, "Sticky Details"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 21
    }
  }, "Shopping Cart"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 21
    }
  }, "Wishlist"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/compare",
    as: "" + "/other/compare",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 21
    }
  }, "Compare"))))), __jsx("li", {
    className: "menu-item-has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 17
    }
  }, "Group Three")), __jsx("ul", {
    className: "mobile-sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/checkout",
    as: "" + "/other/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }, "Checkout"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/order-tracking",
    as: "" + "/other/order-tracking",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 21
    }
  }, "Order Tracking"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/my-account",
    as: "" + "/other/my-account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 21
    }
  }, "My Account"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 21
    }
  }, "Login Register"))))))), __jsx("li", {
    className: "menu-item-has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/about",
    as: "" + "/other/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, "About Us")))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenuNav);

/***/ }),

/***/ "./src/components/Header/elements/MobileMenuSearch.js":
/*!************************************************************!*\
  !*** ./src/components/Header/elements/MobileMenuSearch.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\elements\\MobileMenuSearch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MobileMenuSearch = () => {
  return __jsx("div", {
    className: "offcanvas-mobile-menu__search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "search",
    placeholder: "Search here",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenuSearch);

/***/ }),

/***/ "./src/components/Header/elements/MobileMenuWidgets.js":
/*!*************************************************************!*\
  !*** ./src/components/Header/elements/MobileMenuWidgets.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\elements\\MobileMenuWidgets.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MobileMenuWidgets = () => {
  return __jsx("div", {
    className: "offcanvas-mobile-menu__widgets",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contact-widget space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdPerson"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Login / Register"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPhonePortrait"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "tel://12452456012",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "(1245) 2456 012 ")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdMail"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("a", {
    href: "mailto:info@yourdomain.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "info@yourdomain.com")))), __jsx("div", {
    className: "social-widget",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://www.twitter.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://www.instagram.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoInstagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://www.facebook.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoFacebook"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://www.pinterest.com",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoPinterest"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenuWidgets);

/***/ }),

/***/ "./src/components/Header/elements/Navigation.js":
/*!******************************************************!*\
  !*** ./src/components/Header/elements/Navigation.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../urlConfig */ "./src/urlConfig.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Navigation = ({
  query
}) => {
  const category = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.category);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: categoryBanner,
    1: setCategoryBanner
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["getAllCategories"])());
  }, []);
  return __jsx("nav", {
    className: "header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block"
  }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: "" + "/"
  }, __jsx("a", null, "Home"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop?path=eyewear",
    as: "" + "/shop/eyewear"
  }, __jsx("a", null, "Eyewear")), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowDown"], null), __jsx("ul", {
    className: "sub-menu sub-menu--mega sub-menu--mega--column-4"
  }, __jsx("li", {
    className: "sub-menu--mega__title"
  }, __jsx("ul", {
    className: "sub-menu--mega__list"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop?path=mens-sunglasses",
    as: "" + "/shop/mens-sunglasses"
  }, __jsx("a", null, "Mens Sunglasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop?path=womens-sunglasses",
    as: "" + "/shop/womens-sunglasses"
  }, __jsx("a", null, "Womens Sunglasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop?path=mens-glasses",
    as: "" + "/shop/mens-glasses"
  }, __jsx("a", null, "Mens Glasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop?path=womens-glasses",
    as: "" + "/shop/womens-glasses"
  }, __jsx("a", null, "Womens Glasses"))))), __jsx("li", null, __jsx("div", {
    className: "sub-menu--mega__image"
  }, __jsx("img", {
    src: "" + "/assets/images/menu-image/eyewear.jpg",
    className: "img-fluid",
    alt: ""
  }))))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop?path=watches",
    as: "" + "/shop/watches"
  }, __jsx("a", null, "Watches")), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowDown"], null), __jsx("ul", {
    className: "sub-menu sub-menu--mega sub-menu--mega--column-4"
  }, __jsx("li", {
    className: "sub-menu--mega__title"
  }, __jsx("ul", {
    className: "sub-menu--mega__list"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/no-sidebar",
    as: "" + "/shop/no-sidebar"
  }, __jsx("a", null, "Mens Watches"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar"
  }, __jsx("a", null, "Womens Watches"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar"
  }, __jsx("a", null, "Smartwatches"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar"
  }, __jsx("a", null, "Bracelets"))))), __jsx("li", null, __jsx("div", {
    className: "sub-menu--mega__image"
  }, __jsx("img", {
    src: "" + "/assets/images/menu-image/watches-banner-2.jpg",
    className: "img-fluid",
    alt: ""
  }))))), __jsx("li", {
    className: "position-relative"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/about",
    as: "" + "/other/about"
  }, __jsx("a", null, "About Us")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/Header/elements/NavigationOverlay.js":
/*!*************************************************************!*\
  !*** ./src/components/Header/elements/NavigationOverlay.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Accordion */ "react-bootstrap/Accordion");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\elements\\NavigationOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NavigationOverlay = ({
  activeStatus,
  getActiveStatus
}) => {
  return __jsx("div", {
    className: `navigation-overlay ${activeStatus ? "active" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "navigation-overlay__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "navigation-overlay__close-icon",
    onClick: () => {
      getActiveStatus(false);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosClose"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "navigation-overlay__content-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("nav", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, "Home"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 27
    }
  }, "Home Group One"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/decor",
    as: "" + "/home/decor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 35
    }
  }, "Decor"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/creative",
    as: "" + "/home/creative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 35
    }
  }, "Creative"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/perfumes",
    as: "" + "/home/perfumes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 35
    }
  }, "Perfumes"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 27
    }
  }, "Home Group Two"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/trending",
    as: "" + "/home/trending",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 35
    }
  }, "Trending"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/essentials",
    as: "" + "/home/essentials",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 35
    }
  }, "Essentials"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/accessories",
    as: "" + "/home/accessories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 35
    }
  }, "Accessories"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 27
    }
  }, "Home Group Three"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/lookbook",
    as: "" + "/home/lookbook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 35
    }
  }, "Lookbook"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/furniture",
    as: "" + "/home/furniture",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 35
    }
  }, "Furniture"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/smart-design",
    as: "" + "/home/smart-design",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 35
    }
  }, "Smart Design"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 27
    }
  }, "Home Group Four"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/home/collection",
    as: "" + "/home/collection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 35
    }
  }, "Collection"))))))))))), __jsx("li", {
    className: "has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 19
    }
  }, "Shop"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 27
    }
  }, "Group One"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 35
    }
  }, "Left Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/right-sidebar",
    as: "" + "/shop/right-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 35
    }
  }, "Right Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/no-sidebar",
    as: "" + "/shop/no-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 35
    }
  }, "No Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/fullwidth-no-space",
    as: "" + "/shop/fullwidth-no-space",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 35
    }
  }, "Full Width No Space"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/fullwidth-no-sidebar",
    as: "" + "/shop/fullwidth-no-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 35
    }
  }, "Full Width No Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/fullwidth-left-sidebar",
    as: "" + "/shop/fullwidth-left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 35
    }
  }, "Full Width Left Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/fullwidth-right-sidebar",
    as: "" + "/shop/fullwidth-right-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 35
    }
  }, "Full Width Right Sidebar"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 27
    }
  }, "Group Two"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/product-basic/[slug]?slug=lorem-ipsum-decor-one",
    as: "" + "/shop/product-basic/lorem-ipsum-decor-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 35
    }
  }, "Basic"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/product-fullwidth/[slug]?slug=lorem-ipsum-decor-one",
    as: "" + "/shop/product-fullwidth/lorem-ipsum-decor-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 35
    }
  }, "Full Width"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/product-fullwidth-right-thumb/[slug]?slug=lorem-ipsum-decor-one",
    as: "" + "/shop/product-fullwidth-right-thumb/lorem-ipsum-decor-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 35
    }
  }, "Full Width Right Thumb"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/product-sticky/[slug]?slug=lorem-ipsum-decor-one",
    as: "" + "/shop/product-sticky/lorem-ipsum-decor-one",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 35
    }
  }, "Sticky Details"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/cart",
    as: "" + "/other/cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 35
    }
  }, "Shopping Cart"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 35
    }
  }, "Wishlist"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/compare",
    as: "" + "/other/compare",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 35
    }
  }, "Compare"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 27
    }
  }, "Group Three"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/checkout",
    as: "" + "/other/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 35
    }
  }, "Checkout"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/order-tracking",
    as: "" + "/other/order-tracking",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 35
    }
  }, "Order Tracking"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/my-account",
    as: "" + "/other/my-account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 35
    }
  }, "My Account"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/login-register",
    as: "" + "/other/login-register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 35
    }
  }, "Login Register"))))))))))), __jsx("li", {
    className: "has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 19
    }
  }, "Elements"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 27
    }
  }, "Group One"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/product-categories",
    as: "" + "/element/product-categories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 35
    }
  }, "Product Categories"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/product-sliders",
    as: "" + "/element/product-sliders",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 35
    }
  }, "Product Sliders"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/product-tabs",
    as: "" + "/element/product-tabs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 35
    }
  }, "Product Tabs"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/product-widgets",
    as: "" + "/element/product-widgets",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 35
    }
  }, "Product Widget"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/recent-products",
    as: "" + "/element/recent-products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 35
    }
  }, "Recent Products"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 27
    }
  }, "Group Two"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/sale-products",
    as: "" + "/element/sale-products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 35
    }
  }, "Sale Products"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/featured-products",
    as: "" + "/element/featured-products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 35
    }
  }, "Featured products"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/top-rated-products",
    as: "" + "/element/top-rated-products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 35
    }
  }, "Top Rated products"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/best-selling-products",
    as: "" + "/element/best-selling-products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 35
    }
  }, "Best Selling"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/product-attributes",
    as: "" + "/element/product-attributes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 35
    }
  }, "Product Attributes"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 27
    }
  }, "Group Three"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/blog-posts",
    as: "" + "/element/blog-posts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 35
    }
  }, "Blog Posts"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/mailchimp-forms",
    as: "" + "/element/mailchimp-forms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 35
    }
  }, "Mailchimp Form"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/icon-boxes",
    as: "" + "/element/icon-boxes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 35
    }
  }, "Icon Box"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/team-members",
    as: "" + "/element/team-members",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 35
    }
  }, "Team Member"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/faqs",
    as: "" + "/element/faqs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 35
    }
  }, "FAQs / Toggles"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 27
    }
  }, "Group Four"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/countdown-timers",
    as: "" + "/element/countdown-timers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 35
    }
  }, "Countdown Timer"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/buttons",
    as: "" + "/element/buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 35
    }
  }, "Buttons"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/testimonials",
    as: "" + "/element/testimonials",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 35
    }
  }, "Testimonials"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/element/google-maps",
    as: "" + "/element/google-maps",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 35
    }
  }, "Google Maps"))))))))))), __jsx("li", {
    className: "has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 19
    }
  }, "Pages"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/about",
    as: "" + "/other/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 27
    }
  }, "About Us"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/about-two",
    as: "" + "/other/about-two",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 27
    }
  }, "About Us Two"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/contact",
    as: "" + "/other/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 27
    }
  }, "Contact Us"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/faq",
    as: "" + "/other/faq",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 27
    }
  }, "F.A.Q"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/coming-soon",
    as: "" + "/other/coming-soon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 27
    }
  }, "Coming Soon"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/other/not-found",
    as: "" + "/other/not-found",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 27
    }
  }, "Not Found"))))))), __jsx("li", {
    className: "has-children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 19
    }
  }, "Blog"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 27
    }
  }, "Standard Layout"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/standard-left-sidebar",
    as: "" + "/blog/standard-left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 35
    }
  }, "Left Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 745,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/standard-right-sidebar",
    as: "" + "/blog/standard-right-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 35
    }
  }, "Right Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/standard-fullwidth",
    as: "" + "/blog/standard-fullwidth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 35
    }
  }, "Full Width"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773,
      columnNumber: 27
    }
  }, "Grid Layout"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/grid-left-sidebar",
    as: "" + "/blog/grid-left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 35
    }
  }, "Left Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/grid-right-sidebar",
    as: "" + "/blog/grid-right-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 790,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797,
      columnNumber: 35
    }
  }, "Right Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/grid-fullwidth",
    as: "" + "/blog/grid-fullwidth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 801,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808,
      columnNumber: 35
    }
  }, "Full Width"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 27
    }
  }, "List Layout"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 820,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 821,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 822,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/list-left-sidebar",
    as: "" + "/blog/list-left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 35
    }
  }, "Left Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/list-right-sidebar",
    as: "" + "/blog/list-right-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 35
    }
  }, "Right Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/list-fullwidth",
    as: "" + "/blog/list-fullwidth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 845,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 35
    }
  }, "Full Width"))))))), __jsx("li", {
    className: "has-children-submenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 859,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 860,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Toggle, {
    variant: "link",
    eventKey: "0",
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 861,
      columnNumber: 27
    }
  }, "Single Post Layout"), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_3___default.a.Collapse, {
    eventKey: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864,
      columnNumber: 27
    }
  }, __jsx("ul", {
    className: "sub-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/post-left-sidebar",
    as: "" + "/blog/post-left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 874,
      columnNumber: 35
    }
  }, "Left Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/post-right-sidebar",
    as: "" + "/blog/post-right-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 878,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 885,
      columnNumber: 35
    }
  }, "Right Sidebar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 31
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/post-fullwidth",
    as: "" + "/blog/post-fullwidth",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 33
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 35
    }
  }, "Full Width"))))))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationOverlay);

/***/ }),

/***/ "./src/components/Header/elements/SearchOverlay.js":
/*!*********************************************************!*\
  !*** ./src/components/Header/elements/SearchOverlay.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions */ "./src/redux/actions/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SearchOverlay = ({
  activeStatus,
  getActiveStatus
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.product);

  const removeLayoutOnSubmit = e => {
    e.preventDefault(); // dispatch(getAllProductBySearch(search))

    router.push(`/shop?search=${search}`);
    getActiveStatus(false);
    document.querySelector("body").classList.remove("overflow-hidden");
  };

  return __jsx("div", {
    className: `search-overlay ${activeStatus ? "active" : ""}`
  }, __jsx("button", {
    className: "search-overlay__close-icon",
    onClick: () => {
      getActiveStatus(false);
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdClose"], null)), __jsx("div", {
    className: "search-overlay__content"
  }, __jsx("form", {
    className: "space-mb--20",
    onSubmit: removeLayoutOnSubmit
  }, __jsx("input", {
    type: "search",
    placeholder: "Search Products...",
    value: search,
    onChange: e => setSearch(e.target.value)
  })), __jsx("div", {
    className: "search-overlay__hint"
  }, "# Hit enter to search")));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchOverlay);

/***/ }),

/***/ "./src/components/Header/elements/WishlistOverlay.js":
/*!***********************************************************!*\
  !*** ./src/components/Header/elements/WishlistOverlay.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scroll */ "react-custom-scroll");
/* harmony import */ var react_custom_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Header\\elements\\WishlistOverlay.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const WishlistOverlay = ({
  activeStatus,
  getActiveStatus,
  wishlistItems,
  deleteFromWishlist
}) => {
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["useToasts"])();
  return __jsx("div", {
    className: `wishlist-overlay ${activeStatus ? "active" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "wishlist-overlay__close",
    onClick: () => {
      getActiveStatus(false);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "wishlist-overlay__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "wishlist-overlay__close-icon",
    onClick: () => {
      getActiveStatus(false);
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosClose"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "wishlist-overlay__content-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "wishlist-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Wishlist"), wishlistItems.length >= 1 ? __jsx("div", {
    className: "wishlist-product-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "wishlist-product-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx(react_custom_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    allowOuterScroll: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, wishlistItems.map((product, i) => {
    const discountedPrice = Object(_lib_product__WEBPACK_IMPORTED_MODULE_6__["getDiscountPrice"])(product.price, product.discount).toFixed(2);
    return __jsx("div", {
      className: "single-wishlist-product",
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: "wishlist-close-icon",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, __jsx("button", {
      onClick: () => deleteFromWishlist(product, addToast),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 27
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosClose"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/shop/product-basic/[slug]?slug=${product.slug}`,
      as: `${""}/shop/product-basic/${product.slug}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 27
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx("img", {
      // src={
      //   process.env.PUBLIC_URL + product.thumbImage[0]
      // }
      className: "img-fluid",
      alt: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 31
      }
    })))), __jsx("div", {
      className: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 25
      }
    }, __jsx("h5", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/shop/product-basic/[slug]?slug=${product.slug}`,
      as: `${""}/shop/product-basic/${product.slug}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 31
      }
    }, product.name))), __jsx("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "discounted-price",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }, "$", discountedPrice))));
  }))), __jsx("div", {
    className: "wishlist-buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/other/wishlist",
    as: "" + "/other/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, "view wishlist")))) : "No items found in wishlist")));
};

const mapStateToProps = state => {
  return {
    wishlistItems: state.wishlistData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_7__["deleteFromWishlist"])(item, addToast));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(WishlistOverlay));

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: HeaderOne, HeaderTwo, HeaderThree, HeaderFour, HeaderFive, HeaderSix, HeaderSeven */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderOne */ "./src/components/Header/HeaderOne.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderOne", function() { return _HeaderOne__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _HeaderTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderTwo */ "./src/components/Header/HeaderTwo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderTwo", function() { return _HeaderTwo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _HeaderThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderThree */ "./src/components/Header/HeaderThree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderThree", function() { return _HeaderThree__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _HeaderFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderFour */ "./src/components/Header/HeaderFour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderFour", function() { return _HeaderFour__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _HeaderFive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderFive */ "./src/components/Header/HeaderFive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderFive", function() { return _HeaderFive__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _HeaderSix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderSix */ "./src/components/Header/HeaderSix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderSix", function() { return _HeaderSix__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _HeaderSeven__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeaderSeven */ "./src/components/Header/HeaderSeven.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderSeven", function() { return _HeaderSeven__WEBPACK_IMPORTED_MODULE_6__["default"]; });










/***/ }),

/***/ "./src/components/HeroSlider/HeroSliderFive.js":
/*!*****************************************************!*\
  !*** ./src/components/HeroSlider/HeroSliderFive.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\HeroSlider\\HeroSliderFive.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const HeroSliderFive = ({
  sliderData,
  spaceBottomClass
}) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: "fade",
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    renderPrevButton: () => __jsx("button", {
      className: "swiper-button-prev ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }),
    renderNextButton: () => __jsx("button", {
      className: "swiper-button-next ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    })
  };
  return __jsx("div", {
    className: `hero-slider-five ${spaceBottomClass ? spaceBottomClass : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hero-slider-five__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), sliderData && sliderData.map((single, i) => {
    return __jsx("div", {
      className: "hero-slider-five__slide bg-img",
      style: {
        backgroundImage: `url(${single.bgImage})`
      },
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "h-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 23
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      className: "order-2 order-lg-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "hero-slider-five__content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 27
      }
    }, __jsx("h5", {
      className: "sub-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, single.subtitle), __jsx("h1", {
      className: "title",
      dangerouslySetInnerHTML: {
        __html: single.title
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "slider-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: single.url,
      as: "" + single.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 31
      }
    }, __jsx("a", {
      className: "lezada-button lezada-button--medium",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 33
      }
    }, "shop now"))))))));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroSliderFive);

/***/ }),

/***/ "./src/components/HeroSlider/HeroSliderFour.js":
/*!*****************************************************!*\
  !*** ./src/components/HeroSlider/HeroSliderFour.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\HeroSlider\\HeroSliderFour.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const HeroSliderFour = ({
  sliderData
}) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: "fade",
    watchSlidesVisibility: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return __jsx("div", {
    className: "hero-slider-four",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-slider-four__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), sliderData && sliderData.map((single, i) => {
    return __jsx("div", {
      className: "hero-slider-four__slide bg-img",
      style: {
        backgroundImage: `url(${single.bgImage})`
      },
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "hero-slider-four__content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, __jsx("h5", {
      className: "sub-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, single.subtitle), __jsx("h1", {
      className: "title",
      dangerouslySetInnerHTML: {
        __html: single.title
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "slider-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: single.url,
      as: "" + single.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 23
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, "shop collection")))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroSliderFour);

/***/ }),

/***/ "./src/components/HeroSlider/HeroSliderOne.js":
/*!****************************************************!*\
  !*** ./src/components/HeroSlider/HeroSliderOne.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\HeroSlider\\HeroSliderOne.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const HeroSliderOne = ({
  sliderData
}) => {
  const params = {
    loop: true,
    speed: 1000,
    spaceBetween: 200,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => __jsx("button", {
      className: "swiper-button-prev ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }),
    renderNextButton: () => __jsx("button", {
      className: "swiper-button-next ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    })
  };
  return __jsx("div", {
    className: "hero-slider-one space-mb--r100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hero-slider-one__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), sliderData && sliderData.map(single => {
    return __jsx("div", {
      className: "hero-slider-one__slide swiper-slide",
      key: single.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "slider-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "" + single.image,
      className: "img-fluid",
      alt: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 23
      }
    })), __jsx("div", {
      className: "slider-content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, __jsx("h2", {
      className: "color-title color-title--blue space-mb--20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 23
      }
    }, single.subtitle), __jsx("h1", {
      className: "main-title space-mb--30",
      dangerouslySetInnerHTML: {
        __html: single.title
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 23
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: single.url,
      as: "" + single.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 23
      }
    }, __jsx("a", {
      className: "lezada-button lezada-button--medium",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, "shop now"))));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroSliderOne);

/***/ }),

/***/ "./src/components/HeroSlider/HeroSliderSeven.js":
/*!******************************************************!*\
  !*** ./src/components/HeroSlider/HeroSliderSeven.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\HeroSlider\\HeroSliderSeven.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const HeroSliderSeven = ({
  sliderData
}) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: "fade",
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => __jsx("button", {
      className: "swiper-button-prev ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }),
    renderNextButton: () => __jsx("button", {
      className: "swiper-button-next ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    })
  };
  return __jsx("div", {
    className: "hero-slider-seven",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-slider-seven__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), sliderData && sliderData.map((single, i) => {
    return __jsx("div", {
      className: "hero-slider-seven__slide bg-img",
      style: {
        backgroundImage: `url(${single.bgImage})`
      },
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "h-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 5,
      className: "ml-auto",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "hero-slider-seven__content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, __jsx("h5", {
      className: "sub-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 27
      }
    }, single.subtitle), __jsx("h1", {
      className: "title",
      dangerouslySetInnerHTML: {
        __html: single.title
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 27
      }
    }), __jsx("div", {
      className: "slider-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: single.url,
      as: "" + single.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "lezada-button lezada-button--medium",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 31
      }
    }, "shop now"))))))), __jsx("div", {
      className: "hero-slider-seven__pagination",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "current",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, i + 1), __jsx("span", {
      className: "border",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }), __jsx("span", {
      className: "total",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, sliderData.length)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroSliderSeven);

/***/ }),

/***/ "./src/components/HeroSlider/HeroSliderSix.js":
/*!****************************************************!*\
  !*** ./src/components/HeroSlider/HeroSliderSix.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\HeroSlider\\HeroSliderSix.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const HeroSliderSix = ({
  sliderData
}) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    renderPrevButton: () => __jsx("button", {
      className: "swiper-button-prev ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }),
    renderNextButton: () => __jsx("button", {
      className: "swiper-button-next ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    })
  };
  return __jsx("div", {
    className: "hero-slider-six",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-slider-six__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), sliderData && sliderData.map((single, i) => {
    return __jsx("div", {
      className: "hero-slider-six__slide",
      style: {
        backgroundColor: single.bgColor
      },
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "h-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, single.image ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "hero-slider-six__image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: "" + single.image,
      alt: "",
      className: "img-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 29
      }
    }))) : "", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "hero-slider-six__content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, __jsx("h5", {
      className: "sub-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 27
      }
    }, single.subtitle), __jsx("h1", {
      className: "title",
      dangerouslySetInnerHTML: {
        __html: single.title
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 27
      }
    }), __jsx("div", {
      className: "slider-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: single.url,
      as: "" + single.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "lezada-button lezada-button--medium",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 31
      }
    }, "shop now"))))))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroSliderSix);

/***/ }),

/***/ "./src/components/HeroSlider/HeroSliderThree.js":
/*!******************************************************!*\
  !*** ./src/components/HeroSlider/HeroSliderThree.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\HeroSlider\\HeroSliderThree.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const HeroSliderThree = ({
  sliderData,
  spaceBottomClass
}) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    renderPrevButton: () => __jsx("button", {
      className: "swiper-button-prev ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }),
    renderNextButton: () => __jsx("button", {
      className: "swiper-button-next ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    })
  };
  return __jsx("div", {
    className: `hero-slider-three ${spaceBottomClass ? spaceBottomClass : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-slider-three__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), sliderData && sliderData.map((single, i) => {
    return __jsx("div", {
      className: "hero-slider-three__slide bg-img",
      style: {
        backgroundImage: `url(${single.bgImage})`
      },
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      className: "h-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      className: "order-2 order-lg-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "hero-slider-three__content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, __jsx("h5", {
      className: "sub-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 27
      }
    }, single.subtitle), __jsx("h1", {
      className: "title",
      dangerouslySetInnerHTML: {
        __html: single.title
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 27
      }
    }), __jsx("div", {
      className: "slider-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 27
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: single.url,
      as: "" + single.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 31
      }
    }, "shop collection"))))), single.image ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      className: "order-1 order-lg-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "hero-slider-three__image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: "" + single.image,
      alt: "",
      className: "img-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }))) : "")));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroSliderThree);

/***/ }),

/***/ "./src/components/HeroSlider/HeroSliderTwo.js":
/*!****************************************************!*\
  !*** ./src/components/HeroSlider/HeroSliderTwo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\HeroSlider\\HeroSliderTwo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const HeroSliderTwo = ({
  sliderData,
  spaceBottomClass
}) => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => __jsx("button", {
      className: "swiper-button-prev ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }),
    renderNextButton: () => __jsx("button", {
      className: "swiper-button-next ht-swiper-button-nav",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    })
  };
  return __jsx("div", {
    className: `hero-slider-two ${spaceBottomClass ? spaceBottomClass : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hero-slider-two__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, params, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), sliderData && sliderData.map((single, i) => {
    return __jsx("div", {
      className: "hero-slider-two__slide",
      style: {
        backgroundColor: single.bgColor
      },
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "hero-slider-two__image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, __jsx("img", {
      src: "" + single.image,
      alt: "",
      className: "img-fluid",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "hero-slider-two__content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 19
      }
    }, __jsx("h5", {
      className: "sub-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, single.subtitle), __jsx("h1", {
      className: "title",
      dangerouslySetInnerHTML: {
        __html: single.title
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "slider-link",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: single.url,
      as: "" + single.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 23
      }
    }, __jsx("a", {
      className: "lezada-button lezada-button--medium",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, "shop now")))), __jsx("div", {
      className: "hero-slider-two__pagination",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "current",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, i + 1), __jsx("span", {
      className: "border",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }), __jsx("span", {
      className: "total",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, sliderData.length)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeroSliderTwo);

/***/ }),

/***/ "./src/components/HeroSlider/index.js":
/*!********************************************!*\
  !*** ./src/components/HeroSlider/index.js ***!
  \********************************************/
/*! exports provided: HeroSliderOne, HeroSliderTwo, HeroSliderThree, HeroSliderFour, HeroSliderFive, HeroSliderSix, HeroSliderSeven */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroSliderOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSliderOne */ "./src/components/HeroSlider/HeroSliderOne.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSliderOne", function() { return _HeroSliderOne__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _HeroSliderTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroSliderTwo */ "./src/components/HeroSlider/HeroSliderTwo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSliderTwo", function() { return _HeroSliderTwo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _HeroSliderThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroSliderThree */ "./src/components/HeroSlider/HeroSliderThree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSliderThree", function() { return _HeroSliderThree__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _HeroSliderFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroSliderFour */ "./src/components/HeroSlider/HeroSliderFour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSliderFour", function() { return _HeroSliderFour__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _HeroSliderFive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroSliderFive */ "./src/components/HeroSlider/HeroSliderFive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSliderFive", function() { return _HeroSliderFive__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _HeroSliderSix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroSliderSix */ "./src/components/HeroSlider/HeroSliderSix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSliderSix", function() { return _HeroSliderSix__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _HeroSliderSeven__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeroSliderSeven */ "./src/components/HeroSlider/HeroSliderSeven.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeroSliderSeven", function() { return _HeroSliderSeven__WEBPACK_IMPORTED_MODULE_6__["default"]; });










/***/ }),

/***/ "./src/components/Layout/LayoutEight.js":
/*!**********************************************!*\
  !*** ./src/components/Layout/LayoutEight.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Layout\\LayoutEight.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutEight = ({
  children
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderSix"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterTwo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutEight);

/***/ }),

/***/ "./src/components/Layout/LayoutFive.js":
/*!*********************************************!*\
  !*** ./src/components/Layout/LayoutFive.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Layout\\LayoutFive.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutFive = ({
  children
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderFive"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterTwo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutFive);

/***/ }),

/***/ "./src/components/Layout/LayoutFour.js":
/*!*********************************************!*\
  !*** ./src/components/Layout/LayoutFour.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Layout\\LayoutFour.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutFour = ({
  children
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderFour"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterTwo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutFour);

/***/ }),

/***/ "./src/components/Layout/LayoutNine.js":
/*!*********************************************!*\
  !*** ./src/components/Layout/LayoutNine.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Layout\\LayoutNine.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutTwo = ({
  children,
  aboutOverlay
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderSeven"], {
    aboutOverlay: aboutOverlay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterFour"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutTwo);

/***/ }),

/***/ "./src/components/Layout/LayoutOne.js":
/*!********************************************!*\
  !*** ./src/components/Layout/LayoutOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Layout\\LayoutOne.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutOne = ({
  children,
  aboutOverlay
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderOne"], {
    aboutOverlay: aboutOverlay,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterOne"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutOne);

/***/ }),

/***/ "./src/components/Layout/LayoutSeven.js":
/*!**********************************************!*\
  !*** ./src/components/Layout/LayoutSeven.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Layout\\LayoutSeven.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutSeven = ({
  children
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderSix"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterOne"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutSeven);

/***/ }),

/***/ "./src/components/Layout/LayoutSix.js":
/*!********************************************!*\
  !*** ./src/components/Layout/LayoutSix.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Layout\\LayoutSix.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutThree = ({
  children
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderThree"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterTwo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutThree);

/***/ }),

/***/ "./src/components/Layout/LayoutThree.js":
/*!**********************************************!*\
  !*** ./src/components/Layout/LayoutThree.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Layout\\LayoutThree.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutThree = ({
  children
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderThree"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterThree"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutThree);

/***/ }),

/***/ "./src/components/Layout/LayoutTwo.js":
/*!********************************************!*\
  !*** ./src/components/Layout/LayoutTwo.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LayoutTwo = ({
  children,
  aboutOverlay
}) => {
  return __jsx("div", null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["HeaderOne"], {
    aboutOverlay: aboutOverlay
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["FooterTwo"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutTwo);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: LayoutOne, LayoutTwo, LayoutThree, LayoutFour, LayoutFive, LayoutSix, LayoutSeven, LayoutEight, LayoutNine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutOne */ "./src/components/Layout/LayoutOne.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutOne", function() { return _LayoutOne__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LayoutTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutTwo */ "./src/components/Layout/LayoutTwo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutTwo", function() { return _LayoutTwo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LayoutThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutThree */ "./src/components/Layout/LayoutThree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutThree", function() { return _LayoutThree__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LayoutFour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LayoutFour */ "./src/components/Layout/LayoutFour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutFour", function() { return _LayoutFour__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _LayoutFive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutFive */ "./src/components/Layout/LayoutFive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutFive", function() { return _LayoutFive__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _LayoutSix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LayoutSix */ "./src/components/Layout/LayoutSix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutSix", function() { return _LayoutSix__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _LayoutSeven__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LayoutSeven */ "./src/components/Layout/LayoutSeven.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutSeven", function() { return _LayoutSeven__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _LayoutEight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LayoutEight */ "./src/components/Layout/LayoutEight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutEight", function() { return _LayoutEight__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _LayoutNine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LayoutNine */ "./src/components/Layout/LayoutNine.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutNine", function() { return _LayoutNine__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./src/components/Newsletter/SubscribeEmail.js":
/*!*****************************************************!*\
  !*** ./src/components/Newsletter/SubscribeEmail.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Newsletter\\SubscribeEmail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CustomForm = ({
  status,
  message,
  onValidated,
  alertColor
}) => {
  let email;

  const submit = () => {
    email && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value
    });
    let emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return __jsx("div", {
    className: "subscribe-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mc-form position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("input", {
    id: "mc-form-email",
    className: "email",
    ref: node => email = node,
    type: "email",
    placeholder: "Your email address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("button", {
    className: "button",
    onClick: submit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "SUBSCRIBE")), status === "sending" && __jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: alertColor,
      fontSize: "14px",
      marginTop: "15px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }));
};

const SubscribeEmail = ({
  mailchimpUrl,
  alertColor
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: mailchimpUrl,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      alertColor: alertColor,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubscribeEmail);

/***/ }),

/***/ "./src/components/Newsletter/SubscribeEmailTwo.js":
/*!********************************************************!*\
  !*** ./src/components/Newsletter/SubscribeEmailTwo.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Newsletter\\SubscribeEmailTwo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomForm = ({
  status,
  message,
  onValidated
}) => {
  let email;

  const submit = () => {
    email && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value
    });
    let emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return __jsx("div", {
    className: "subscribe-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mc-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("input", {
    id: "mc-form-email",
    className: "email",
    ref: node => email = node,
    type: "email",
    placeholder: "Your email address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("button", {
    className: "button",
    onClick: submit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosArrowRoundForward"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))), status === "sending" && __jsx("div", {
    style: {
      color: "#3498db",
      fontSize: "14px",
      lineHeight: "1.3"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: "#e74c3c",
      fontSize: "14px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: "#2ecc71",
      fontSize: "14px",
      lineHeight: "1.3"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }));
};

const SubscribeEmailTwo = ({
  mailchimpUrl
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: mailchimpUrl,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubscribeEmailTwo);

/***/ }),

/***/ "./src/components/Newsletter/index.js":
/*!********************************************!*\
  !*** ./src/components/Newsletter/index.js ***!
  \********************************************/
/*! exports provided: SubscribeEmail, SubscribeEmailTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubscribeEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscribeEmail */ "./src/components/Newsletter/SubscribeEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscribeEmail", function() { return _SubscribeEmail__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _SubscribeEmailTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscribeEmailTwo */ "./src/components/Newsletter/SubscribeEmailTwo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscribeEmailTwo", function() { return _SubscribeEmailTwo__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/components/Product/ProductRating.js":
/*!*************************************************!*\
  !*** ./src/components/Product/ProductRating.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\Product\\ProductRating.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProductRating = ({
  ratingValue
}) => {
  let rating = [];

  for (let i = 0; i < 5; i++) {
    rating.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosStarOutline"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }));
  }

  if (ratingValue && ratingValue > 0) {
    for (let i = 0; i <= ratingValue - 1; i++) {
      rating[i] = __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosStar"], {
        className: "yellow",
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 19
        }
      });
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }, rating);
};

/* harmony default export */ __webpack_exports__["default"] = (ProductRating);

/***/ }),

/***/ "./src/components/Product/index.js":
/*!*****************************************!*\
  !*** ./src/components/Product/index.js ***!
  \*****************************************/
/*! exports provided: ProductRating */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductRating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductRating */ "./src/components/Product/ProductRating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductRating", function() { return _ProductRating__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/components/ProductTab/ProductTab.js":
/*!*************************************************!*\
  !*** ./src/components/ProductTab/ProductTab.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Tab */ "react-bootstrap/Tab");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProductThumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductThumb */ "./src/components/ProductThumb/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductTab\\ProductTab.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ProductTab = ({
  newProducts,
  popularProducts,
  saleProducts
}) => {
  return __jsx("div", {
    className: "product-tab space-mb--r100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_1___default.a.Container, {
    defaultActiveKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "pills",
    className: "product-tab__navigation text-center justify-content-center space-mb--r60",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
    eventKey: "new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "New")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
    eventKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Popular")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2___default.a.Link, {
    eventKey: "sale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "Sale"))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_1___default.a.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_1___default.a.Pane, {
    eventKey: "new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "space-mb--rm50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_4__["ProductGridWrapper"], {
    products: newProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_1___default.a.Pane, {
    eventKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "space-mb--rm50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_4__["ProductGridWrapper"], {
    products: popularProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_1___default.a.Pane, {
    eventKey: "sale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "space-mb--rm50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_4__["ProductGridWrapper"], {
    products: saleProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductTab);

/***/ }),

/***/ "./src/components/ProductTab/ProductTabThree.js":
/*!******************************************************!*\
  !*** ./src/components/ProductTab/ProductTabThree.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Tab */ "react-bootstrap/Tab");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProductThumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProductThumb */ "./src/components/ProductThumb/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductTab\\ProductTabThree.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ProductTabThree = ({
  newProducts,
  popularProducts,
  saleProducts
}) => {
  return __jsx("div", {
    className: "product-tab product-tab--style2 space-mb--r100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "wide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Container, {
    defaultActiveKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "pills",
    className: "product-tab__navigation text-center space-mb--r60",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    eventKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Popular")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    eventKey: "new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "New")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    eventKey: "sale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Sale"))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Pane, {
    eventKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "five-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_6__["ProductGridWrapper"], {
    products: popularProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Pane, {
    eventKey: "new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "five-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_6__["ProductGridWrapper"], {
    products: newProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Pane, {
    eventKey: "sale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "five-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_6__["ProductGridWrapper"], {
    products: saleProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 12,
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "lezada-button lezada-button--medium lezada-button--icon--left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosAdd"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), "Shop More"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductTabThree);

/***/ }),

/***/ "./src/components/ProductTab/ProductTabTwo.js":
/*!****************************************************!*\
  !*** ./src/components/ProductTab/ProductTabTwo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Tab */ "react-bootstrap/Tab");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProductThumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProductThumb */ "./src/components/ProductThumb/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductTab\\ProductTabTwo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ProductTabTwo = ({
  newProducts,
  popularProducts,
  saleProducts
}) => {
  return __jsx("div", {
    className: "product-tab product-tab--style2 space-mb--r100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Container, {
    defaultActiveKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "pills",
    className: "product-tab__navigation text-center space-mb--r60",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    eventKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Popular")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    eventKey: "new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "New")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    eventKey: "sale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Sale"))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Pane, {
    eventKey: "popular",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_6__["ProductGridWrapper"], {
    column: 4,
    products: popularProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Pane, {
    eventKey: "new",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_6__["ProductGridWrapper"], {
    column: 4,
    products: newProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_2___default.a.Pane, {
    eventKey: "sale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx(_ProductThumb__WEBPACK_IMPORTED_MODULE_6__["ProductGridWrapper"], {
    column: 4,
    products: saleProducts,
    bottomSpace: "space-mb--r50",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 12,
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop/left-sidebar",
    as: "" + "/shop/left-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "lezada-button lezada-button--medium lezada-button--icon--left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoIosAdd"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), "Online Store"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductTabTwo);

/***/ }),

/***/ "./src/components/ProductTab/index.js":
/*!********************************************!*\
  !*** ./src/components/ProductTab/index.js ***!
  \********************************************/
/*! exports provided: ProductTab, ProductTabTwo, ProductTabThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductTab */ "./src/components/ProductTab/ProductTab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductTab", function() { return _ProductTab__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProductTabTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductTabTwo */ "./src/components/ProductTab/ProductTabTwo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductTabTwo", function() { return _ProductTabTwo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProductTabThree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductTabThree */ "./src/components/ProductTab/ProductTabThree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductTabThree", function() { return _ProductTabThree__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/components/ProductThumb/ProductGrid.js":
/*!****************************************************!*\
  !*** ./src/components/ProductThumb/ProductGrid.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductModal */ "./src/components/ProductThumb/ProductModal.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../urlConfig */ "./src/urlConfig.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductGrid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ProductGrid = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems,
  column
}) => {
  const {
    0: modalShow,
    1: setModalShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: column && column === 4 ? 3 : 4,
    md: 6,
    className: bottomSpace ? bottomSpace : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "product-grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-grid__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "image-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: Object(_urlConfig__WEBPACK_IMPORTED_MODULE_6__["generatePublicUrl"])(product.productPictures[0].img),
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), product.productPictures.length > 1 ? __jsx("img", {
    src: Object(_urlConfig__WEBPACK_IMPORTED_MODULE_6__["generatePublicUrl"])(product.productPictures[1].img),
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }) : "")), __jsx("div", {
    className: "product-grid__floating-badges",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, product.discount && product.discount > 0 ? __jsx("span", {
    className: "onsale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "-", product.discount, "%") : "", product.newProduct ? __jsx("span", {
    className: "hot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, "New") : "", product.stock === 0 ? __jsx("span", {
    className: "out-of-stock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "out") : ""), __jsx("div", {
    className: "product-grid__floating-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: wishlistItem !== undefined ? () => deleteFromWishlist(product, addToast) : () => addToWishlist(product, addToast),
    className: wishlistItem !== undefined ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: compareItem !== undefined ? () => deleteFromCompare(product, addToast) : () => addToCompare(product, addToast),
    className: compareItem !== undefined ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosShuffle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "Quick view",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: () => setModalShow(true),
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }))))), __jsx("div", {
    className: "product-grid__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, product.name))), product.affiliateLink ? __jsx("a", {
    href: product.affiliateLink,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, "Buy now") : product.variation && product.variation.length >= 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, "Select Option")) : product.stock && product.stock > 0 ? __jsx("button", {
    onClick: () => addToCart(product, addToast),
    disabled: cartItem !== undefined && cartItem.quantity >= cartItem.stock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, cartItem !== undefined ? "Added to cart" : "Add to cart") : __jsx("button", {
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, "Out of Stock")), __jsx("div", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, product.discount > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "main-price discounted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }, "$", productPrice), __jsx("span", {
    className: "discounted-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 19
    }
  }, "$", discountedPrice)) : __jsx("span", {
    className: "main-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, "$", productPrice))))), __jsx(_ProductModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false),
    product: product,
    discountedprice: discountedPrice,
    productprice: productPrice,
    cartitems: cartItems,
    cartitem: cartItem,
    wishlistitem: wishlistItem,
    compareitem: compareItem,
    addtocart: addToCart,
    addtowishlist: addToWishlist,
    deletefromwishlist: deleteFromWishlist,
    addtocompare: addToCompare,
    deletefromcompare: deleteFromCompare,
    addtoast: addToast,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGrid);

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridFour.js":
/*!********************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridFour.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductModal */ "./src/components/ProductThumb/ProductModal.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductGridFour.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ProductGridFour = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems,
  sliderClass
}) => {
  const {
    0: modalShow,
    1: setModalShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `${bottomSpace ? bottomSpace : ""} ${sliderClass ? sliderClass : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "product-grid product-grid--absolute-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-grid__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "image-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + product.thumbImage[0],
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), product.thumbImage.length > 1 ? __jsx("img", {
    src: "" + product.thumbImage[1],
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }) : "")), __jsx("div", {
    className: "product-grid__floating-badges",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, product.discount && product.discount > 0 ? __jsx("span", {
    className: "onsale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "-", product.discount, "%") : "", product.new ? __jsx("span", {
    className: "hot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 30
    }
  }, "New") : "", product.stock === 0 ? __jsx("span", {
    className: "out-of-stock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "out") : ""), __jsx("div", {
    className: "product-grid__floating-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: wishlistItem !== undefined ? () => deleteFromWishlist(product, addToast) : () => addToWishlist(product, addToast),
    className: wishlistItem !== undefined ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: compareItem !== undefined ? () => deleteFromCompare(product, addToast) : () => addToCompare(product, addToast),
    className: compareItem !== undefined ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosShuffle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "Quick view",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: () => setModalShow(true),
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }))))), __jsx("div", {
    className: "product-grid__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 19
    }
  }, product.name))), product.affiliateLink ? __jsx("a", {
    href: product.affiliateLink,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, "Buy now") : product.variation && product.variation.length >= 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, "Select Option")) : product.stock && product.stock > 0 ? __jsx("button", {
    onClick: () => addToCart(product, addToast),
    disabled: cartItem !== undefined && cartItem.quantity >= cartItem.stock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, cartItem !== undefined ? "Added to cart" : "Add to cart") : __jsx("button", {
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, "Out of Stock")), __jsx("div", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, product.discount > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "main-price discounted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, "$", productPrice), __jsx("span", {
    className: "discounted-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }, "$", discountedPrice)) : __jsx("span", {
    className: "main-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, "$", productPrice))))), __jsx(_ProductModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false),
    product: product,
    discountedprice: discountedPrice,
    productprice: productPrice,
    cartitems: cartItems,
    cartitem: cartItem,
    wishlistitem: wishlistItem,
    compareitem: compareItem,
    addtocart: addToCart,
    addtowishlist: addToWishlist,
    deletefromwishlist: deleteFromWishlist,
    addtocompare: addToCompare,
    deletefromcompare: deleteFromCompare,
    addtoast: addToast,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGridFour);

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridFourWrapper.js":
/*!***************************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridFourWrapper.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _ProductGridFour__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductGridFour */ "./src/components/ProductThumb/ProductGridFour.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductGridFourWrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const ProductGridFourWrapper = ({
  products,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClass
}) => {
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["useToasts"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, products && products.map(product => {
    const discountedPrice = Object(_lib_product__WEBPACK_IMPORTED_MODULE_3__["getDiscountPrice"])(product.price, product.discount).toFixed(2);
    const productPrice = product.price.toFixed(2);
    const cartItem = cartItems.filter(cartItem => cartItem.id === product.id)[0];
    const wishlistItem = wishlistItems.filter(wishlistItem => wishlistItem.id === product.id)[0];
    const compareItem = compareItems.filter(compareItem => compareItem.id === product.id)[0];
    return __jsx(_ProductGridFour__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: product.id,
      product: product,
      discountedPrice: discountedPrice,
      productPrice: productPrice,
      cartItem: cartItem,
      wishlistItem: wishlistItem,
      compareItem: compareItem,
      bottomSpace: bottomSpace,
      addToCart: addToCart,
      addToWishlist: addToWishlist,
      deleteFromWishlist: deleteFromWishlist,
      addToCompare: addToCompare,
      deleteFromCompare: deleteFromCompare,
      addToast: addToast,
      cartItems: cartItems,
      sliderClass: sliderClass,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    });
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["addToCart"])(item, addToast, quantityCount, selectedProductColor, selectedProductSize));
    },
    addToWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["addToWishlist"])(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["deleteFromWishlist"])(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["addToCompare"])(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["deleteFromCompare"])(item, addToast));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProductGridFourWrapper));

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridList.js":
/*!********************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductModal */ "./src/components/ProductThumb/ProductModal.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../urlConfig */ "./src/urlConfig.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems,
  path
}) => {
  const {
    0: modalShow,
    1: setModalShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // console.log(product.productPictures[0].img)

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 3,
    md: 6,
    className: bottomSpace ? bottomSpace : ""
  }, __jsx("div", {
    className: "product-grid"
  }, __jsx("div", {
    className: "product-grid__image"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product/[slug]?slug=${product.slug}`,
    as: "" + `/shop/product/` + product.slug
  }, __jsx("a", {
    className: "image-wrap"
  }, __jsx("img", {
    src: Object(_urlConfig__WEBPACK_IMPORTED_MODULE_6__["generatePublicUrl"])(product.productPictures[0].img) // src="https://cdn2.chrono24.com/images/uhren/images_85/s9/13832985_xxl_v1579892438284.jpg"
    ,
    className: "img-fluid",
    alt: product.name
  }), product.productPictures.length > 1 ? __jsx("img", {
    src: Object(_urlConfig__WEBPACK_IMPORTED_MODULE_6__["generatePublicUrl"])(product.productPictures[1].img) // src="https://cdn2.chrono24.com/images/uhren/images_85/s9/13832985_xxl_v1579892438284.jpg"
    ,
    className: "img-fluid",
    alt: product.name
  }) : "")), __jsx("div", {
    className: "product-grid__floating-badges"
  }, product.discount && product.discount > 0 ? __jsx("span", {
    className: "onsale"
  }, "-", product.discount, "%") : "", product.newProduct ? __jsx("span", {
    className: "hot"
  }, "New") : ""), __jsx("div", {
    className: "product-grid__floating-icons"
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200
  }, __jsx("button", {
    onClick: wishlistItem !== undefined ? () => deleteFromWishlist(product, addToast) : () => addToWishlist(product, addToast),
    className: wishlistItem !== undefined ? "active" : ""
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosHeartEmpty"], null))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200
  }, __jsx("button", {
    onClick: compareItem !== undefined ? () => deleteFromCompare(product, addToast) : () => addToCompare(product, addToast),
    className: compareItem !== undefined ? "active" : ""
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosShuffle"], null))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "Quick view",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200
  }, __jsx("button", {
    onClick: () => setModalShow(true),
    className: "d-none d-lg-block"
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosSearch"], null))))), __jsx("div", {
    className: "product-grid__content"
  }, __jsx("div", {
    className: "title"
  }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product/" + product.slug
  }, __jsx("a", null, product.name))), product.affiliateLink ? __jsx("a", {
    href: product.affiliateLink,
    target: "_blank"
  }, "Buy now") : product.variation && product.variation.length >= 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product/" + product.slug
  }, __jsx("a", null, "Select Option")) : product.stock && product.stock > 0 ? __jsx("button", {
    onClick: () => addToCart(product, addToast),
    disabled: cartItem !== undefined && cartItem.quantity >= cartItem.stock
  }, cartItem !== undefined ? "Added to cart" : "Add to cart") : __jsx("button", {
    disabled: true
  }, "Out of Stock")), __jsx("div", {
    className: "price"
  }, __jsx("span", {
    className: "main-price"
  }, "$", product.price)))), __jsx("div", {
    className: "product-list"
  }, __jsx("div", {
    className: "product-list__image"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product/" + product.slug
  }, __jsx("a", {
    className: "image-wrap"
  }, __jsx("img", {
    src: Object(_urlConfig__WEBPACK_IMPORTED_MODULE_6__["generatePublicUrl"])(product.productPictures[0].img),
    className: "img-fluid",
    alt: product.name
  }))), __jsx("div", {
    className: "product-list__floating-badges"
  }), __jsx("div", {
    className: "product-list__floating-icons"
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200
  }, __jsx("button", {
    onClick: wishlistItem !== undefined ? () => deleteFromWishlist(product, addToast) : () => addToWishlist(product, addToast),
    className: wishlistItem !== undefined ? "active" : ""
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosHeartEmpty"], null))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200
  }, __jsx("button", {
    onClick: compareItem !== undefined ? () => deleteFromCompare(product, addToast) : () => addToCompare(product, addToast),
    className: compareItem !== undefined ? "active" : ""
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosShuffle"], null))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "Quick view",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200
  }, __jsx("button", {
    onClick: () => setModalShow(true),
    className: "d-none d-lg-block"
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosSearch"], null))))), __jsx("div", {
    className: "product-list__content"
  }, __jsx("div", {
    className: "title"
  }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product/" + product.slug
  }, __jsx("a", null, product.name)))), __jsx("div", {
    className: "price"
  }), __jsx("div", {
    className: "add-to-cart"
  }, product.affiliateLink ? __jsx("a", {
    href: product.affiliateLink,
    target: "_blank",
    className: "lezada-button lezada-button--medium"
  }, "Buy now") : product.variation && product.variation.length >= 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product/" + product.slug
  }, __jsx("a", {
    className: "lezada-button lezada-button--medium"
  }, "Select Option")) : product.stock && product.stock > 0 ? __jsx("button", {
    onClick: () => addToCart(product, addToast),
    disabled: cartItem !== undefined && cartItem.quantity >= cartItem.stock,
    className: "lezada-button lezada-button--medium"
  }, cartItem !== undefined ? "Added to cart" : "Add to cart") : __jsx("button", {
    disabled: true,
    className: "lezada-button lezada-button--medium"
  }, "Out of Stock"))))), __jsx(_ProductModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false),
    product: product,
    discountedprice: discountedPrice,
    productprice: productPrice,
    cartitems: cartItems,
    cartitem: cartItem,
    wishlistitem: wishlistItem,
    compareitem: compareItem,
    addtocart: addToCart,
    addtowishlist: addToWishlist,
    deletefromwishlist: deleteFromWishlist,
    addtocompare: addToCompare,
    deletefromcompare: deleteFromCompare,
    addtoast: addToast
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGridList);

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridListWrapper.js":
/*!***************************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridListWrapper.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _ProductGridList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductGridList */ "./src/components/ProductThumb/ProductGridList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const ProductGridWrapper = ({
  products,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  cartItems,
  wishlistItems,
  compareItems,
  path
}) => {
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["useToasts"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, products && products.map(product => {
    const discountedPrice = Object(_lib_product__WEBPACK_IMPORTED_MODULE_3__["getDiscountPrice"])(product.price, product.discount).toFixed(2);
    const productPrice = product.price.toFixed(2);
    const cartItem = cartItems.filter(cartItem => cartItem.id === product.id)[0];
    const wishlistItem = wishlistItems.filter(wishlistItem => wishlistItem.id === product.id)[0];
    const compareItem = compareItems.filter(compareItem => compareItem.id === product.id)[0];
    return __jsx(_ProductGridList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: product.id,
      product: product,
      discountedPrice: discountedPrice,
      productPrice: productPrice,
      cartItem: cartItem,
      wishlistItem: wishlistItem,
      compareItem: compareItem,
      bottomSpace: bottomSpace,
      addToCart: addToCart,
      addToWishlist: addToWishlist,
      deleteFromWishlist: deleteFromWishlist,
      addToCompare: addToCompare,
      deleteFromCompare: deleteFromCompare,
      addToast: addToast,
      cartItems: cartItems,
      path: path
    });
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["addToCart"])(item, addToast, quantityCount, selectedProductColor, selectedProductSize));
    },
    addToWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["addToWishlist"])(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["deleteFromWishlist"])(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["addToCompare"])(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["deleteFromCompare"])(item, addToast));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProductGridWrapper));

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridThree.js":
/*!*********************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridThree.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductModal */ "./src/components/ProductThumb/ProductModal.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductGridThree.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ProductGridThree = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems,
  sliderClass
}) => {
  const {
    0: modalShow,
    1: setModalShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: `product-grid ${sliderClass ? sliderClass : ""} ${bottomSpace ? bottomSpace : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "product-grid__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "image-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + product.thumbImage[0],
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), product.thumbImage.length > 1 ? __jsx("img", {
    src: "" + product.thumbImage[1],
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }) : "")), __jsx("div", {
    className: "product-grid__floating-badges",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, product.discount && product.discount > 0 ? __jsx("span", {
    className: "onsale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "-", product.discount, "%") : "", product.new ? __jsx("span", {
    className: "hot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 28
    }
  }, "New") : "", product.stock === 0 ? __jsx("span", {
    className: "out-of-stock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "out") : ""), __jsx("div", {
    className: "product-grid__floating-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: wishlistItem !== undefined ? () => deleteFromWishlist(product, addToast) : () => addToWishlist(product, addToast),
    className: wishlistItem !== undefined ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: compareItem !== undefined ? () => deleteFromCompare(product, addToast) : () => addToCompare(product, addToast),
    className: compareItem !== undefined ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosShuffle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Quick view",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: () => setModalShow(true),
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "product-grid__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, product.name))), product.affiliateLink ? __jsx("a", {
    href: product.affiliateLink,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "Buy now") : product.variation && product.variation.length >= 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, "Select Option")) : product.stock && product.stock > 0 ? __jsx("button", {
    onClick: () => addToCart(product, addToast),
    disabled: cartItem !== undefined && cartItem.quantity >= cartItem.stock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, cartItem !== undefined ? "Added to cart" : "Add to cart") : __jsx("button", {
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, "Out of Stock")), __jsx("div", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, product.discount > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "main-price discounted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, "$", productPrice), __jsx("span", {
    className: "discounted-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, "$", discountedPrice)) : __jsx("span", {
    className: "main-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  }, "$", productPrice)))), __jsx(_ProductModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false),
    product: product,
    discountedprice: discountedPrice,
    productprice: productPrice,
    cartitems: cartItems,
    cartitem: cartItem,
    wishlistitem: wishlistItem,
    compareitem: compareItem,
    addtocart: addToCart,
    addtowishlist: addToWishlist,
    deletefromwishlist: deleteFromWishlist,
    addtocompare: addToCompare,
    deletefromcompare: deleteFromCompare,
    addtoast: addToast,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGridThree);

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridThreeWrapper.js":
/*!****************************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridThreeWrapper.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _ProductGridThree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductGridThree */ "./src/components/ProductThumb/ProductGridThree.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductGridThreeWrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const ProductGridThreeWrapper = ({
  products,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  cartItems,
  wishlistItems,
  compareItems,
  sliderClass
}) => {
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["useToasts"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, products && products.map(product => {
    const discountedPrice = Object(_lib_product__WEBPACK_IMPORTED_MODULE_3__["getDiscountPrice"])(product.price, product.discount).toFixed(2);
    const productPrice = product.price.toFixed(2);
    const cartItem = cartItems.filter(cartItem => cartItem.id === product.id)[0];
    const wishlistItem = wishlistItems.filter(wishlistItem => wishlistItem.id === product.id)[0];
    const compareItem = compareItems.filter(compareItem => compareItem.id === product.id)[0];
    return __jsx(_ProductGridThree__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: product.id,
      product: product,
      discountedPrice: discountedPrice,
      productPrice: productPrice,
      cartItem: cartItem,
      wishlistItem: wishlistItem,
      compareItem: compareItem,
      bottomSpace: bottomSpace,
      addToCart: addToCart,
      addToWishlist: addToWishlist,
      deleteFromWishlist: deleteFromWishlist,
      addToCompare: addToCompare,
      deleteFromCompare: deleteFromCompare,
      addToast: addToast,
      cartItems: cartItems,
      sliderClass: sliderClass,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    });
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["addToCart"])(item, addToast, quantityCount, selectedProductColor, selectedProductSize));
    },
    addToWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["addToWishlist"])(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["deleteFromWishlist"])(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["addToCompare"])(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["deleteFromCompare"])(item, addToast));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProductGridThreeWrapper));

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridTwo.js":
/*!*******************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridTwo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tippy */ "react-tippy");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductModal */ "./src/components/ProductThumb/ProductModal.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductGridTwo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ProductGridTwo = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems
}) => {
  const {
    0: modalShow,
    1: setModalShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 3,
    md: 6,
    className: bottomSpace ? bottomSpace : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "product-grid product-grid--absolute-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "product-grid__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "image-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "" + product.thumbImage[0],
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), product.thumbImage.length > 1 ? __jsx("img", {
    src: "" + product.thumbImage[1],
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }) : "")), __jsx("div", {
    className: "product-grid__floating-badges",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, product.discount && product.discount > 0 ? __jsx("span", {
    className: "onsale",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "-", product.discount, "%") : "", product.new ? __jsx("span", {
    className: "hot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 30
    }
  }, "New") : "", product.stock === 0 ? __jsx("span", {
    className: "out-of-stock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "out") : ""), __jsx("div", {
    className: "product-grid__floating-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: wishlistItem !== undefined ? () => deleteFromWishlist(product, addToast) : () => addToWishlist(product, addToast),
    className: wishlistItem !== undefined ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: compareItem !== undefined ? () => deleteFromCompare(product, addToast) : () => addToCompare(product, addToast),
    className: compareItem !== undefined ? "active" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosShuffle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }))), __jsx(react_tippy__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "Quick view",
    position: "left",
    trigger: "mouseenter",
    animation: "shift",
    arrow: true,
    duration: 200,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: () => setModalShow(true),
    className: "d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__["IoIosSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }))))), __jsx("div", {
    className: "product-grid__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, product.name))), product.affiliateLink ? __jsx("a", {
    href: product.affiliateLink,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, "Buy now") : product.variation && product.variation.length >= 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 19
    }
  }, "Select Option")) : product.stock && product.stock > 0 ? __jsx("button", {
    onClick: () => addToCart(product, addToast),
    disabled: cartItem !== undefined && cartItem.quantity >= cartItem.stock,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, cartItem !== undefined ? "Added to cart" : "Add to cart") : __jsx("button", {
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "Out of Stock")), __jsx("div", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, product.discount > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "main-price discounted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 19
    }
  }, "$", productPrice), __jsx("span", {
    className: "discounted-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }, "$", discountedPrice)) : __jsx("span", {
    className: "main-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, "$", productPrice))))), __jsx(_ProductModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: modalShow,
    onHide: () => setModalShow(false),
    product: product,
    discountedprice: discountedPrice,
    productprice: productPrice,
    cartitems: cartItems,
    cartitem: cartItem,
    wishlistitem: wishlistItem,
    compareitem: compareItem,
    addtocart: addToCart,
    addtowishlist: addToWishlist,
    deletefromwishlist: deleteFromWishlist,
    addtocompare: addToCompare,
    deletefromcompare: deleteFromCompare,
    addtoast: addToast,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductGridTwo);

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridTwoWrapper.js":
/*!**************************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridTwoWrapper.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _ProductGridTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductGridTwo */ "./src/components/ProductThumb/ProductGridTwo.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductGridTwoWrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const ProductGridTwoWrapper = ({
  products,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  cartItems,
  wishlistItems,
  compareItems
}) => {
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["useToasts"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, products && products.map(product => {
    const discountedPrice = Object(_lib_product__WEBPACK_IMPORTED_MODULE_3__["getDiscountPrice"])(product.price, product.discount).toFixed(2);
    const productPrice = product.price.toFixed(2);
    const cartItem = cartItems.filter(cartItem => cartItem.id === product.id)[0];
    const wishlistItem = wishlistItems.filter(wishlistItem => wishlistItem.id === product.id)[0];
    const compareItem = compareItems.filter(compareItem => compareItem.id === product.id)[0];
    return __jsx(_ProductGridTwo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: product.id,
      product: product,
      discountedPrice: discountedPrice,
      productPrice: productPrice,
      cartItem: cartItem,
      wishlistItem: wishlistItem,
      compareItem: compareItem,
      bottomSpace: bottomSpace,
      addToCart: addToCart,
      addToWishlist: addToWishlist,
      deleteFromWishlist: deleteFromWishlist,
      addToCompare: addToCompare,
      deleteFromCompare: deleteFromCompare,
      addToast: addToast,
      cartItems: cartItems,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    });
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["addToCart"])(item, addToast, quantityCount, selectedProductColor, selectedProductSize));
    },
    addToWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["addToWishlist"])(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["deleteFromWishlist"])(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["addToCompare"])(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["deleteFromCompare"])(item, addToast));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProductGridTwoWrapper));

/***/ }),

/***/ "./src/components/ProductThumb/ProductGridWrapper.js":
/*!***********************************************************!*\
  !*** ./src/components/ProductThumb/ProductGridWrapper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/compareActions */ "./src/redux/actions/compareActions.js");
/* harmony import */ var _ProductGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductGrid */ "./src/components/ProductThumb/ProductGrid.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductGridWrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const ProductGridWrapper = ({
  products,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  cartItems,
  wishlistItems,
  compareItems,
  column
}) => {
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["useToasts"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, products && products.map(product => {
    const discountedPrice = Object(_lib_product__WEBPACK_IMPORTED_MODULE_3__["getDiscountPrice"])(product.price, product.discount).toFixed(2);
    const productPrice = product.price.toFixed(2);
    const cartItem = cartItems.filter(cartItem => cartItem.id === product.id)[0];
    const wishlistItem = wishlistItems.filter(wishlistItem => wishlistItem.id === product.id)[0];
    const compareItem = compareItems.filter(compareItem => compareItem.id === product.id)[0];
    return __jsx(_ProductGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: product.id,
      product: product,
      discountedPrice: discountedPrice,
      productPrice: productPrice,
      cartItem: cartItem,
      wishlistItem: wishlistItem,
      compareItem: compareItem,
      bottomSpace: bottomSpace,
      addToCart: addToCart,
      addToWishlist: addToWishlist,
      deleteFromWishlist: deleteFromWishlist,
      addToCompare: addToCompare,
      deleteFromCompare: deleteFromCompare,
      addToast: addToast,
      cartItems: cartItems,
      column: column,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    });
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["addToCart"])(item, addToast, quantityCount, selectedProductColor, selectedProductSize));
    },
    addToWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["addToWishlist"])(item, addToast));
    },
    deleteFromWishlist: (item, addToast) => {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_5__["deleteFromWishlist"])(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["addToCompare"])(item, addToast));
    },
    deleteFromCompare: (item, addToast) => {
      dispatch(Object(_redux_actions_compareActions__WEBPACK_IMPORTED_MODULE_6__["deleteFromCompare"])(item, addToast));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProductGridWrapper));

/***/ }),

/***/ "./src/components/ProductThumb/ProductModal.js":
/*!*****************************************************!*\
  !*** ./src/components/ProductThumb/ProductModal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_custom_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-custom-scroll */ "react-custom-scroll");
/* harmony import */ var react_custom_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_custom_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Product */ "./src/components/Product/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const ProductModal = props => {
  const {
    product,
    discountedprice,
    productprice,
    cartitems,
    wishlistitem,
    compareitem,
    addtocart,
    addtowishlist,
    deletefromwishlist,
    addtocompare,
    deletefromcompare,
    addtoast
  } = props;
  const {
    0: selectedProductColor,
    1: setSelectedProductColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(product.variation ? product.variation[0].color : "");
  const {
    0: selectedProductSize,
    1: setSelectedProductSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(product.variation ? product.variation[0].size[0].name : "");
  const {
    0: productStock,
    1: setProductStock
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(product.variation ? product.variation[0].size[0].stock : product.stock);
  const {
    0: quantityCount,
    1: setQuantityCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const productCartQty = Object(_lib_product__WEBPACK_IMPORTED_MODULE_5__["getProductCartQuantity"])(cartitems, product, selectedProductColor, selectedProductSize);
  const gallerySwiperParams = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: props.show,
    onHide: props.onHide,
    className: "product-quickview",
    centered: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "product-quickview__image-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, gallerySwiperParams, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), product.image && product.image.map((single, key) => {
    return __jsx("div", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "single-image",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "" + single,
      className: "img-fluid",
      alt: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 23
      }
    })));
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 7,
    sm: 12,
    className: "ml-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(react_custom_scroll__WEBPACK_IMPORTED_MODULE_4___default.a, {
    allowOuterScroll: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-quickview__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "product-quickview__title space-mb--20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, product.name), __jsx("div", {
    className: "product-quickview__price space-mb--20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, product.discount > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "main-price discounted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, "$", productprice), __jsx("span", {
    className: "main-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, "$", discountedprice)) : __jsx("span", {
    className: "main-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, "$", productprice, " ")), product.rating && product.rating > 0 ? __jsx("div", {
    className: "product-quickview__rating-wrap space-mb--20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "product-quickview__rating",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx(_Product__WEBPACK_IMPORTED_MODULE_6__["ProductRating"], {
    ratingValue: product.rating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 23
    }
  }))) : "", __jsx("div", {
    className: "product-quickview__description space-mb--30",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, product.shortDescription)), product.variation ? __jsx("div", {
    className: "product-quickview__size-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "product-quickview__size space-mb--20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-quickview__size__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 23
    }
  }, "Size"), __jsx("div", {
    className: "product-quickview__size__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 23
    }
  }, product.variation && product.variation.map(single => {
    return single.color === selectedProductColor ? single.size.map((singleSize, i) => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 37
        }
      }, __jsx("input", {
        type: "radio",
        value: singleSize.name,
        checked: singleSize.name === selectedProductSize ? "checked" : "",
        id: singleSize.name,
        onChange: () => {
          setSelectedProductSize(singleSize.name);
          setProductStock(singleSize.stock);
          setQuantityCount(1);
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 39
        }
      }), __jsx("label", {
        htmlFor: singleSize.name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 39
        }
      }, singleSize.name));
    }) : "";
  }))), __jsx("div", {
    className: "product-quickview__color space-mb--20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-quickview__color__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 23
    }
  }, "Color"), __jsx("div", {
    className: "product-quickview__color__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 23
    }
  }, product.variation.map((single, i) => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 29
      }
    }, __jsx("input", {
      type: "radio",
      value: single.color,
      name: "product-color",
      id: single.color,
      checked: single.color === selectedProductColor ? "checked" : "",
      onChange: () => {
        setSelectedProductColor(single.color);
        setSelectedProductSize(single.size[0].name);
        setProductStock(single.size[0].stock);
        setQuantityCount(1);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 31
      }
    }), __jsx("label", {
      htmlFor: single.color,
      style: {
        backgroundColor: single.colorCode
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 31
      }
    }));
  })))) : "", product.affiliateLink ? __jsx("div", {
    className: "product-quickview__quality",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "product-quickview__cart btn-hover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: product.affiliateLink,
    rel: "noopener noreferrer",
    target: "_blank",
    className: "lezada-button lezada-button--medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 23
    }
  }, "Buy Now"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "product-quickview__quantity space-mb--20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "product-quickview__quantity__title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, "Quantity"), __jsx("div", {
    className: "cart-plus-minus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 23
    }
  }, __jsx("button", {
    onClick: () => setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1),
    className: "qtybutton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 25
    }
  }, "-"), __jsx("input", {
    className: "cart-plus-minus-box",
    type: "text",
    value: quantityCount,
    readOnly: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 25
    }
  }), __jsx("button", {
    onClick: () => setQuantityCount(quantityCount < productStock - productCartQty ? quantityCount + 1 : quantityCount),
    className: "qtybutton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 25
    }
  }, "+"))), __jsx("div", {
    className: "product-quickview__button-wrapper d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, productStock && productStock > 0 ? __jsx("button", {
    onClick: () => addtocart(product, addtoast, quantityCount, selectedProductColor, selectedProductSize),
    disabled: productCartQty >= productStock,
    className: "lezada-button lezada-button--medium product-quickview__cart space-mr--10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 25
    }
  }, "Add To Cart") : __jsx("button", {
    className: "lezada-button lezada-button--medium product-quickview__ofs space-mr--10",
    disabled: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 25
    }
  }, "Out of Stock"), __jsx("button", {
    className: `product-quickview__wishlist space-mr--10 ${wishlistitem !== undefined ? "active" : ""}`,
    title: wishlistitem !== undefined ? "Added to wishlist" : "Add to wishlist",
    onClick: wishlistitem !== undefined ? () => deletefromwishlist(product, addtoast) : () => addtowishlist(product, addtoast),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosHeartEmpty"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: `product-quickview__compare space-mr--10 ${compareitem !== undefined ? "active" : ""}`,
    title: compareitem !== undefined ? "Added to compare" : "Add to compare",
    onClick: compareitem !== undefined ? () => deletefromcompare(product, addtoast) : () => addtocompare(product, addtoast),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 23
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosShuffle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }
  }))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductModal);

/***/ }),

/***/ "./src/components/ProductThumb/ProductWidget.js":
/*!******************************************************!*\
  !*** ./src/components/ProductThumb/ProductWidget.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Product */ "./src/components/Product/index.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductWidget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ProductWidget = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  addToCart,
  addToast,
  sliderClass
}) => {
  return __jsx("div", {
    className: `single-widget-product-wrapper ${sliderClass ? sliderClass : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "single-widget-product",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "single-widget-product__image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "image-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "" + product.thumbImage[0],
    className: "img-fluid",
    alt: product.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "single-widget-product__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "single-widget-product__content__top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "product-title space-mb--10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, product.name))), __jsx("div", {
    className: "price space-mb--10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, product.discount > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "main-price discounted",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, "$", productPrice), __jsx("span", {
    className: "discounted-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, "$", discountedPrice)) : __jsx("span", {
    className: "main-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "$", productPrice)), __jsx("div", {
    className: "rating",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_Product__WEBPACK_IMPORTED_MODULE_2__["ProductRating"], {
    ratingValue: product.rating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "single-widget-product__content__bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, product.affiliateLink ? __jsx("a", {
    href: product.affiliateLink,
    target: "_blank",
    className: "cart-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "Buy now") : product.variation && product.variation.length >= 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/shop/product-basic/[slug]?slug=${product.slug}`,
    as: "" + "/shop/product-basic/" + product.slug,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "cart-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "Select Option")) : product.stock && product.stock > 0 ? __jsx("button", {
    onClick: () => addToCart(product, addToast),
    disabled: cartItem !== undefined && cartItem.quantity >= cartItem.stock,
    className: "cart-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, cartItem !== undefined ? "Added to cart" : "Add to cart") : __jsx("button", {
    disabled: true,
    className: "cart-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "Out of Stock")))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductWidget);

/***/ }),

/***/ "./src/components/ProductThumb/ProductWidgetWrapper.js":
/*!*************************************************************!*\
  !*** ./src/components/ProductThumb/ProductWidgetWrapper.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/product */ "./src/lib/product.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _ProductWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductWidget */ "./src/components/ProductThumb/ProductWidget.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\components\\ProductThumb\\ProductWidgetWrapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ProductWidgetWrapper = ({
  products,
  bottomSpace,
  addToCart,
  cartItems,
  sliderClass
}) => {
  const {
    addToast
  } = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["useToasts"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, products && products.map(product => {
    const discountedPrice = Object(_lib_product__WEBPACK_IMPORTED_MODULE_3__["getDiscountPrice"])(product.price, product.discount).toFixed(2);
    const productPrice = product.price.toFixed(2);
    const cartItem = cartItems.filter(cartItem => cartItem.id === product.id)[0];
    return __jsx(_ProductWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: product.id,
      product: product,
      discountedPrice: discountedPrice,
      productPrice: productPrice,
      cartItem: cartItem,
      bottomSpace: bottomSpace,
      addToCart: addToCart,
      addToast: addToast,
      sliderClass: sliderClass,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    });
  }));
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_4__["addToCart"])(item, addToast, quantityCount, selectedProductColor, selectedProductSize));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ProductWidgetWrapper));

/***/ }),

/***/ "./src/components/ProductThumb/index.js":
/*!**********************************************!*\
  !*** ./src/components/ProductThumb/index.js ***!
  \**********************************************/
/*! exports provided: ProductGridWrapper, ProductGridTwoWrapper, ProductGridThreeWrapper, ProductGridFourWrapper, ProductGridListWrapper, ProductWidgetWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductGridWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductGridWrapper */ "./src/components/ProductThumb/ProductGridWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductGridWrapper", function() { return _ProductGridWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProductGridTwoWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductGridTwoWrapper */ "./src/components/ProductThumb/ProductGridTwoWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductGridTwoWrapper", function() { return _ProductGridTwoWrapper__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProductGridThreeWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductGridThreeWrapper */ "./src/components/ProductThumb/ProductGridThreeWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductGridThreeWrapper", function() { return _ProductGridThreeWrapper__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProductGridFourWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductGridFourWrapper */ "./src/components/ProductThumb/ProductGridFourWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductGridFourWrapper", function() { return _ProductGridFourWrapper__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ProductGridListWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductGridListWrapper */ "./src/components/ProductThumb/ProductGridListWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductGridListWrapper", function() { return _ProductGridListWrapper__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ProductWidgetWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductWidgetWrapper */ "./src/components/ProductThumb/ProductWidgetWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductWidgetWrapper", function() { return _ProductWidgetWrapper__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/data/hero-sliders/hero-slider-one.json":
/*!****************************************************!*\
  !*** ./src/data/hero-sliders/hero-slider-one.json ***!
  \****************************************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"image\":\"/assets/images/hero-slider/hero-slider-one/1.jpg\",\"subtitle\":\"WATCHES\",\"url\":\"/shop/left-sidebar\"},{\"id\":\"2\",\"image\":\"/assets/images/hero-slider/hero-slider-one/2.jpg\",\"subtitle\":\"SUNGLASSES\",\"url\":\"/shop/left-sidebar\"},{\"id\":\"3\",\"image\":\"/assets/images/hero-slider/hero-slider-one/3.jpg\",\"subtitle\":\"GLASSES\",\"url\":\"/shop/left-sidebar\"},{\"id\":\"4\",\"image\":\"/assets/images/hero-slider/hero-slider-one/4.jpg\",\"subtitle\":\"BRACELETS\",\"url\":\"/shop/left-sidebar\"}]");

/***/ }),

/***/ "./src/data/image-cta/image-cta-one.json":
/*!***********************************************!*\
  !*** ./src/data/image-cta/image-cta-one.json ***!
  \***********************************************/
/*! exports provided: image, tags, title, url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"image\":\"/assets/images/cta/cabinet.jpg\",\"tags\":[\"summer\",\"shelf\",\"sale\"],\"title\":\"Up To 40% Off Final Sale Items. <br> Caught in the moment!\",\"url\":\"/shop/left-sidebar\"}");

/***/ }),

/***/ "./src/helpers/axios.js":
/*!******************************!*\
  !*** ./src/helpers/axios.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../urlConfig */ "./src/urlConfig.js");


let token;

if (false) {}

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _urlConfig__WEBPACK_IMPORTED_MODULE_1__["api"],
  headers: {
    'Authorization': token ? `Bearer ${token}` : ''
  }
});
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ }),

/***/ "./src/lib/product.js":
/*!****************************!*\
  !*** ./src/lib/product.js ***!
  \****************************/
/*! exports provided: getProducts, getDiscountPrice, getProductCartQuantity, getSortedProducts, getIndividualCategories, getIndividualBrands, getIndividualTags, getIndividualColors, getProductsIndividualSizes, getIndividualSizes, setActiveSort, setActiveLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiscountPrice", function() { return getDiscountPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCartQuantity", function() { return getProductCartQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSortedProducts", function() { return getSortedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndividualCategories", function() { return getIndividualCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndividualBrands", function() { return getIndividualBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndividualTags", function() { return getIndividualTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndividualColors", function() { return getIndividualColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsIndividualSizes", function() { return getProductsIndividualSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndividualSizes", function() { return getIndividualSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveSort", function() { return setActiveSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveLayout", function() { return setActiveLayout; });
// get products
const getProducts = (products, category, type, limit) => {
  // const finalProducts = category
  //   ? products.filter(
  //       (product) => product.category.filter((single) => single === category)[0]
  //     )
  //   : products;
  if (type && type === "new") {
    const newProducts = products.filter(single => single.newProduct);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  } // if (type && type === "popular") {
  //   return (
  //     finalProducts &&
  //     finalProducts
  //       .sort((a, b) => {
  //         return b.saleCount - a.saleCount;
  //       })
  //       .slice(0, limit ? limit : finalProducts.length)
  //   );
  // }
  // if (type && type === "topRated") {
  //   return (
  //     finalProducts &&
  //     finalProducts
  //       .sort((a, b) => {
  //         return b.rating - a.rating;
  //       })
  //       .slice(0, limit ? limit : finalProducts.length)
  //   );
  // }


  if (type && type === "sale") {
    const saleItems = products && products.filter(single => single.discount && single.discount > 0);
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }

  return products && products.slice(0, limit ? limit : finalProducts.length);
}; // get product discount price

const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : price;
}; // get product cart quantity

const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.filter(single => single.id === product.id && (single.selectedProductColor ? single.selectedProductColor === color : true) && (single.selectedProductSize ? single.selectedProductSize === size : true))[0];

  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(single => single.id === product.id && single.selectedProductColor === color && single.selectedProductSize === size)[0].quantity;
    } else {
      return cartItems.filter(single => product.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
}; //get products based on category

const getSortedProducts = (products, sortType, sortValue) => {
  if (products && sortType && sortValue) {
    if (sortType === "brand") {
      return products.filter(product => product.brand.filter(single => single === sortValue)[0]);
    }

    if (sortType === "category") {
      return products.filter(product => product.category.name.filter(single => single === sortValue)[0]);
    }

    if (sortType === "tag") {
      return products.filter(product => product.tag.filter(single => single === sortValue)[0]);
    }

    if (sortType === "color") {
      return products.filter(product => product.variation && product.variation.filter(single => single.color === sortValue)[0]);
    }

    if (sortType === "size") {
      return products.filter(product => product.variation && product.variation.filter(single => single.size.filter(single => single.name === sortValue)[0])[0]);
    }

    if (sortType === "filterSort") {
      let sortProducts = [...products];

      if (sortValue === "default") {
        return sortProducts;
      }

      if (sortValue === "priceHighToLow") {
        console.log(sortValue);
        return sortProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }

      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
  }

  return products;
}; // get individual element

const getIndividualItemArray = array => {
  let individualItemArray = array.filter((v, i, self) => i === self.indexOf(v));
  return individualItemArray;
}; // get individual element object


const getIndividualColorObjectArray = array => {
  let individualObjectArray = array.filter((v, i, self) => {
    return i === self.findIndex(t => t.colorName === v.colorName && t.colorCode === v.colorCode);
  });
  return individualObjectArray;
}; // get individual categories


const getIndividualCategories = products => {
  let productCategories = [];
  products && products.map(product => {
    return product.category.name && product.category.name.map(single => {
      return productCategories.push(single);
    });
  });
  const individualProductCategories = getIndividualItemArray(productCategories);
  return individualProductCategories;
};
const getIndividualBrands = products => {
  let productBrands = [];
  products && products.map(product => {
    return product.brand && product.brand.map(single => {
      return productBrands.push(single);
    });
  });
  const individualProductBrands = getIndividualItemArray(productBrands);
  return individualProductBrands;
}; // get individual tags

const getIndividualTags = products => {
  let productTags = [];
  products && products.map(product => {
    return product.tag && product.tag.map(single => {
      return productTags.push(single);
    });
  });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
}; // get individual colors

const getIndividualColors = products => {
  let productColors = [];
  products && products.map(product => {
    return product.variation && product.variation.map(single => {
      return productColors.push({
        colorName: single.color,
        colorCode: single.colorCode
      });
    });
  });
  const individualProductColors = getIndividualColorObjectArray(productColors);
  return individualProductColors;
}; // get individual sizes

const getProductsIndividualSizes = products => {
  let productSizes = [];
  products && products.map(product => {
    return product.variation && product.variation.map(single => {
      return single.size.map(single => {
        return productSizes.push(single.name);
      });
    });
  });
  const individualProductSizes = getIndividualItemArray(productSizes);
  return individualProductSizes;
}; // get product individual sizes

const getIndividualSizes = product => {
  let productSizes = [];
  product.variation && product.variation.map(singleVariation => {
    return singleVariation.size && singleVariation.size.map(singleSize => {
      return productSizes.push(singleSize.name);
    });
  });
  const individualSizes = getIndividualItemArray(productSizes);
  return individualSizes;
};
const setActiveSort = e => {
  const filterButtons = document.querySelectorAll(".single-sidebar-widget__list button, .tag-container button, .single-filter-widget__list button");
  filterButtons.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};
const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".grid-icons button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/product */ "./src/lib/product.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_HeroSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeroSlider */ "./src/components/HeroSlider/index.js");
/* harmony import */ var _components_ProductTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProductTab */ "./src/components/ProductTab/index.js");
/* harmony import */ var _components_Cta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Cta */ "./src/components/Cta/index.js");
/* harmony import */ var _data_hero_sliders_hero_slider_one_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/hero-sliders/hero-slider-one.json */ "./src/data/hero-sliders/hero-slider-one.json");
var _data_hero_sliders_hero_slider_one_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/hero-sliders/hero-slider-one.json */ "./src/data/hero-sliders/hero-slider-one.json", 1);
/* harmony import */ var _data_image_cta_image_cta_one_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/image-cta/image-cta-one.json */ "./src/data/image-cta/image-cta-one.json");
var _data_image_cta_image_cta_one_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/image-cta/image-cta-one.json */ "./src/data/image-cta/image-cta-one.json", 1);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Home = ({
  newProducts,
  popularProducts,
  saleProducts
}) => {
  const productsss = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.product);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(); // const auth = useSelector(state => state.authReducer)
  // console.log(auth)

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_9__["getAllProducts"])());
  }, []);
  console.log(productsss);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["LayoutOne"], {
    aboutOverlay: false
  }, __jsx(_components_HeroSlider__WEBPACK_IMPORTED_MODULE_4__["HeroSliderOne"], {
    sliderData: _data_hero_sliders_hero_slider_one_json__WEBPACK_IMPORTED_MODULE_7__
  }), __jsx(_components_ProductTab__WEBPACK_IMPORTED_MODULE_5__["ProductTab"], {
    newProducts: newProducts,
    popularProducts: popularProducts,
    saleProducts: saleProducts
  }), __jsx(_components_Cta__WEBPACK_IMPORTED_MODULE_6__["ImageCta"], {
    image: _data_image_cta_image_cta_one_json__WEBPACK_IMPORTED_MODULE_8__.image,
    tags: _data_image_cta_image_cta_one_json__WEBPACK_IMPORTED_MODULE_8__.tags,
    title: _data_image_cta_image_cta_one_json__WEBPACK_IMPORTED_MODULE_8__.title,
    url: _data_image_cta_image_cta_one_json__WEBPACK_IMPORTED_MODULE_8__.url
  }));
};

const mapStateToProps = state => {
  const products = state.product.products;
  return {
    newProducts: Object(_lib_product__WEBPACK_IMPORTED_MODULE_2__["getProducts"])(products, "decor", "new", 9),
    popularProducts: Object(_lib_product__WEBPACK_IMPORTED_MODULE_2__["getProducts"])(products, "decor", "popular", 9),
    saleProducts: Object(_lib_product__WEBPACK_IMPORTED_MODULE_2__["getProducts"])(products, "decor", "sale", 9)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Home));

/***/ }),

/***/ "./src/redux/actions/authActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/authActions.js ***!
  \******************************************/
/*! exports provided: signup, login, isUserLoggedIn, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUserLoggedIn", function() { return isUserLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/axios */ "./src/helpers/axios.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // new update signup action

const signup = user => {
  return async dispatch => {
    let res;

    try {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].SIGNUP_REQUEST
      });
      res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/signup`, user);

      if (res.status === 201) {
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].SIGNUP_SUCCESS
        });
        const {
          token,
          user
        } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_SUCCESS,
          payload: {
            token,
            user
          }
        });
      } else {
        const {
          error
        } = res.data;
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].SIGNUP_FAILURE,
          payload: {
            error
          }
        });
      }
    } catch (error) {
      const {
        data
      } = error.response;
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].SIGNUP_FAILURE,
        payload: {
          error: data.error
        }
      });
    }
  };
};
const login = user => {
  return async dispatch => {
    let res;

    try {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_REQUEST
      });
      res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/signin`, _objectSpread({}, user));

      if (res.status === 200) {
        const {
          token,
          user
        } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_SUCCESS,
          payload: {
            token,
            user
          }
        });
      } else {
        const {
          error
        } = res.data;
        dispatch({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_FAILURE,
          payload: {
            error
          }
        });
      }
    } catch (error) {
      const {
        data
      } = error.response;
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_FAILURE,
        payload: {
          error: data.error
        }
      });
    }
  };
};
const isUserLoggedIn = () => {
  return async dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_SUCCESS,
        payload: {
          token,
          user
        }
      });
    } else {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_FAILURE,
        payload: {
          error: "Failed to login"
        }
      });
    }
  };
};
const signout = () => {
  return async dispatch => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGOUT_REQUEST
    }); // localStorage.removeItem('user');
    // localStorage.removeItem('token');

    localStorage.clear();
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGOUT_SUCCESS
    }); // dispatch({ type: cartConstants.RESET_CART });
    //const res = await axios.post(`/admin/signout`);
    // if(res.status === 200){
    // }else{
    //     dispatch({
    //         type: authConstants.LOGOUT_FAILURE,
    //         payload: { error: res.data.error }
    //     });
    // }
  };
};

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: ADD_TO_CART, DECREASE_QUANTITY, DELETE_FROM_CART, DELETE_ALL_FROM_CART, addToCart, decreaseQuantity, deleteFromCart, deleteAllFromCart, cartItemStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREASE_QUANTITY", function() { return DECREASE_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_CART", function() { return DELETE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALL_FROM_CART", function() { return DELETE_ALL_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseQuantity", function() { return decreaseQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromCart", function() { return deleteFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllFromCart", function() { return deleteAllFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartItemStock", function() { return cartItemStock; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ADD_TO_CART = "ADD_TO_CART";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART"; //add to cart

const addToCart = (item, addToast, quantityCount, selectedProductColor, selectedProductSize) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Cart", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_CART,
      payload: _objectSpread(_objectSpread({}, item), {}, {
        quantity: quantityCount,
        selectedProductColor: selectedProductColor ? selectedProductColor : item.selectedProductColor ? item.selectedProductColor : null,
        selectedProductSize: selectedProductSize ? selectedProductSize : item.selectedProductSize ? item.selectedProductSize : null
      })
    });
  };
}; //decrease from cart

const decreaseQuantity = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Item Decremented From Cart", {
        appearance: "warning",
        autoDismiss: true
      });
    }

    dispatch({
      type: DECREASE_QUANTITY,
      payload: item
    });
  };
}; //delete from cart

const deleteFromCart = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_CART,
      payload: item
    });
  };
}; //delete all from cart

const deleteAllFromCart = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_ALL_FROM_CART
    });
  };
}; // get stock of cart item

const cartItemStock = (item, color, size) => {
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation.filter(single => single.color === color)[0].size.filter(single => single.name === size)[0].stock;
  }
};

/***/ }),

/***/ "./src/redux/actions/categoriesActions.js":
/*!************************************************!*\
  !*** ./src/redux/actions/categoriesActions.js ***!
  \************************************************/
/*! exports provided: getAllCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCategories", function() { return getAllCategories; });
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/axios */ "./src/helpers/axios.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");


const getAllCategories = () => {
  return async dispatch => {
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/category/getcategories');
    console.log(res);
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["categoryConstants"].GET_CATEGORIES_REQUEST
    });

    if (res.status === 200) {
      const {
        categoryList
      } = res.data;
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["categoryConstants"].GET_CATEGORIES_SUCCESS,
        payload: {
          categories: categoryList
        }
      });
    } else {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["categoryConstants"].GET_CATEGORIES_FAILURE,
        payload: {
          error: res.data.error
        }
      });
    }
  };
};

/***/ }),

/***/ "./src/redux/actions/compareActions.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/compareActions.js ***!
  \*********************************************/
/*! exports provided: ADD_TO_COMPARE, DELETE_FROM_COMPARE, addToCompare, deleteFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_COMPARE", function() { return ADD_TO_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_COMPARE", function() { return DELETE_FROM_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromCompare", function() { return deleteFromCompare; });
const ADD_TO_COMPARE = "ADD_TO_COMPARE";
const DELETE_FROM_COMPARE = "DELETE_FROM_COMPARE"; // add to compare

const addToCompare = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Compare", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_COMPARE,
      payload: item
    });
  };
}; // delete from compare

const deleteFromCompare = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Compare", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_COMPARE,
      payload: item
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/constants.js":
/*!****************************************!*\
  !*** ./src/redux/actions/constants.js ***!
  \****************************************/
/*! exports provided: categoryConstants, productConstants, authConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryConstants", function() { return categoryConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productConstants", function() { return productConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConstants", function() { return authConstants; });
const categoryConstants = {
  GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'GET_CATEGORIES_FAILURE',
  ADD_NEW_CATEGORY_REQUEST: 'ADD_NEW_CATEGORY_REQUEST',
  ADD_NEW_CATEGORY_SUCCESS: 'ADD_NEW_CATEGORY_SUCCESS',
  ADD_NEW_CATEGORY_FAILURE: 'ADD_NEW_CATEGORY_FAILURE'
};
const productConstants = {
  GET_PRODUCTS_BY_SLUG: 'GET_PRODUCTS_BY_SLUG',
  GET_ALL_PRODUCTS_SUCCESS: 'GET_ALL_PRODUCTS_SUCCESS',
  GET_ALL_PRODUCTS_FROM_PRODUCTS: 'GET_ALL_PRODUCTS_FROM_PRODUCTS',
  GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS: 'GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS',
  GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE: 'GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE',
  GET_ALL_PRODUCTS_BY_SEARCH: 'GET_ALL_PRODUCTS_BY_SEARCH',
  GET_PRODUCTS_BY_MAIN_CATEGORY: 'GET_PRODUCTS_BY_MAIN_CATEGORY',
  GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH: 'GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH'
};
const authConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAILURE: "LOGOUT_FAILURE",
  SIGNUP_REQUEST: "SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAILURE: "SIGNUP_FAILURE"
};

/***/ }),

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: getAllCategories, getProductsBySlug, getProductsByMainCategory, getProductsByMainCategoryAndSearch, getAllProducts, getCategoryProductBySearch, getAllProductBySearch, getInitialData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categoriesActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoriesActions */ "./src/redux/actions/categoriesActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllCategories", function() { return _categoriesActions__WEBPACK_IMPORTED_MODULE_0__["getAllCategories"]; });

/* harmony import */ var _productsActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsActions */ "./src/redux/actions/productsActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__["getProductsBySlug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductsByMainCategory", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__["getProductsByMainCategory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProductsByMainCategoryAndSearch", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__["getProductsByMainCategoryAndSearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProducts", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__["getAllProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategoryProductBySearch", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__["getCategoryProductBySearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllProductBySearch", function() { return _productsActions__WEBPACK_IMPORTED_MODULE_1__["getAllProductBySearch"]; });

/* harmony import */ var _initialDataActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialDataActions */ "./src/redux/actions/initialDataActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialData", function() { return _initialDataActions__WEBPACK_IMPORTED_MODULE_2__["getInitialData"]; });





/***/ }),

/***/ "./src/redux/actions/initialDataActions.js":
/*!*************************************************!*\
  !*** ./src/redux/actions/initialDataActions.js ***!
  \*************************************************/
/*! exports provided: getInitialData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialData", function() { return getInitialData; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/axios */ "./src/helpers/axios.js");


const getInitialData = () => {
  return async dispatch => {
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/initialData`);

    if (res.status === 200) {
      const {
        products
      } = res.data;
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_ALL_PRODUCTS_SUCCESS,
        payload: {
          products
        }
      });
    }

    console.log(res);
  };
};

/***/ }),

/***/ "./src/redux/actions/productsActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/productsActions.js ***!
  \**********************************************/
/*! exports provided: getProductsBySlug, getProductsByMainCategory, getProductsByMainCategoryAndSearch, getAllProducts, getCategoryProductBySearch, getAllProductBySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return getProductsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByMainCategory", function() { return getProductsByMainCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByMainCategoryAndSearch", function() { return getProductsByMainCategoryAndSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProducts", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryProductBySearch", function() { return getCategoryProductBySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProductBySearch", function() { return getAllProductBySearch; });
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/axios */ "./src/helpers/axios.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");


const getProductsBySlug = slug => {
  return async dispatch => {
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/products/${slug}`);

    if (res.status === 200) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_PRODUCTS_BY_SLUG,
        payload: res.data
      });
    }
  };
};
const getProductsByMainCategory = cate => {
  return async dispatch => {
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/productsbycategory/${cate}`);

    if (res.status === 200) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_PRODUCTS_BY_MAIN_CATEGORY,
        payload: res.data
      });
    }
  };
};
const getProductsByMainCategoryAndSearch = (cate, search) => {
  return async dispatch => {
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/productsbycategoryandsearch/${cate}?name=${search}`);

    if (res.status === 200) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH,
        payload: res.data
      });
    }
  };
};
const getAllProducts = () => {
  return async dispatch => {
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/products`);

    if (res.status === 200) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_ALL_PRODUCTS_FROM_PRODUCTS,
        payload: res.data
      });
    }
  };
};
const getCategoryProductBySearch = (slug, search) => {
  return async dispatch => {
    let res;

    if (slug !== undefined) {
      res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/productssearch/${slug}?name=${search}`);
    }

    if (res.status === 200) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE,
        payload: {
          error: res.data.error
        }
      });
    }
  };
};
const getAllProductBySearch = search => {
  return async dispatch => {
    const res = await _helpers_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/allproducts?name=${search}`);

    if (res.status === 200) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_ALL_PRODUCTS_BY_SEARCH,
        payload: res.data
      });
    }
  };
};

/***/ }),

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, DELETE_ALL_FROM_WISHLIST, addToWishlist, deleteFromWishlist, deleteAllFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_WISHLIST", function() { return ADD_TO_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_WISHLIST", function() { return DELETE_FROM_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALL_FROM_WISHLIST", function() { return DELETE_ALL_FROM_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToWishlist", function() { return addToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromWishlist", function() { return deleteFromWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllFromWishlist", function() { return deleteAllFromWishlist; });
const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";
const DELETE_ALL_FROM_WISHLIST = "DELETE_ALL_FROM_WISHLIST"; // add to wishlist

const addToWishlist = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Wishlist", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: item
    });
  };
}; // delete from wishlist

const deleteFromWishlist = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_FROM_WISHLIST,
      payload: item
    });
  };
}; //delete all from wishlist

const deleteAllFromWishlist = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: DELETE_ALL_FROM_WISHLIST
    });
  };
};

/***/ }),

/***/ "./src/urlConfig.js":
/*!**************************!*\
  !*** ./src/urlConfig.js ***!
  \**************************/
/*! exports provided: api, generatePublicUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePublicUrl", function() { return generatePublicUrl; });
const api = 'http://localhost:5000/api';
const generatePublicUrl = fileName => {
  return `http://localhost:5000/public/${fileName}`;
};

/***/ }),

/***/ 8:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\besni\Desktop\hax-frontend\src\pages\index.js */"./src/pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Accordion":
/*!********************************************!*\
  !*** external "react-bootstrap/Accordion" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ "react-bootstrap/Dropdown":
/*!*******************************************!*\
  !*** external "react-bootstrap/Dropdown" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Tab":
/*!**************************************!*\
  !*** external "react-bootstrap/Tab" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Tab");

/***/ }),

/***/ "react-custom-scroll":
/*!**************************************!*\
  !*** external "react-custom-scroll" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scroll");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-tippy":
/*!******************************!*\
  !*** external "react-tippy" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tippy");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });