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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./src/assets/scss/styles.scss":
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/data/products.json":
/*!********************************!*\
  !*** ./src/data/products.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"sku\":\"asdf101\",\"name\":\"Lorem ipsum decor one\",\"slug\":\"lorem-ipsum-decor-one\",\"price\":17,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/decor/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/decor/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/decor/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\"],\"image\":[\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"2\",\"sku\":\"asdf102\",\"name\":\"Lorem ipsum decor two\",\"slug\":\"lorem-ipsum-decor-two\",\"price\":18,\"discount\":12,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\"],\"image\":[\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"3\",\"sku\":\"asdf103\",\"name\":\"Lorem ipsum decor three\",\"slug\":\"lorem-ipsum-decor-three\",\"price\":14,\"discount\":0,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":13,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\"],\"image\":[\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"4\",\"sku\":\"asdf104\",\"name\":\"Lorem ipsum decor four\",\"slug\":\"lorem-ipsum-decor-four\",\"price\":12,\"discount\":5,\"new\":false,\"rating\":4,\"ratingCount\":15,\"saleCount\":19,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":12,\"affiliateLink\":\"https://www.amazon.com\",\"thumbImage\":[\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\"],\"image\":[\"/assets/images/product/decor/4.jpg\",\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"5\",\"sku\":\"asdf105\",\"name\":\"Lorem ipsum decor five\",\"slug\":\"lorem-ipsum-decor-five\",\"price\":16,\"discount\":0,\"new\":true,\"rating\":2,\"ratingCount\":5,\"saleCount\":12,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":14,\"thumbImage\":[\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\"],\"image\":[\"/assets/images/product/decor/5.jpg\",\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"6\",\"sku\":\"asdf106\",\"name\":\"Lorem ipsum decor six\",\"slug\":\"lorem-ipsum-decor-six\",\"price\":12,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":4,\"saleCount\":16,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":0,\"thumbImage\":[\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\"],\"image\":[\"/assets/images/product/decor/6.jpg\",\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"7\",\"sku\":\"asdf107\",\"name\":\"Lorem ipsum decor seven\",\"slug\":\"lorem-ipsum-decor-seven\",\"price\":17,\"discount\":12,\"new\":true,\"rating\":3,\"ratingCount\":7,\"saleCount\":13,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":18,\"thumbImage\":[\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\"],\"image\":[\"/assets/images/product/decor/7.jpg\",\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"8\",\"sku\":\"asdf108\",\"name\":\"Lorem ipsum decor eight\",\"slug\":\"lorem-ipsum-decor-eight\",\"price\":15,\"discount\":0,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":30,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":12,\"thumbImage\":[\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\"],\"image\":[\"/assets/images/product/decor/8.jpg\",\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"9\",\"sku\":\"asdf109\",\"name\":\"Lorem ipsum decor nine\",\"slug\":\"lorem-ipsum-decor-nine\",\"price\":20,\"discount\":12,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":20,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":16,\"thumbImage\":[\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\"],\"image\":[\"/assets/images/product/decor/9.jpg\",\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"10\",\"sku\":\"asdf110\",\"name\":\"Lorem ipsum decor ten\",\"slug\":\"lorem-ipsum-decor-ten\",\"price\":30,\"discount\":20,\"new\":false,\"rating\":4,\"ratingCount\":10,\"saleCount\":30,\"category\":[\"decor\"],\"tag\":[\"decor\"],\"stock\":14,\"thumbImage\":[\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\"],\"image\":[\"/assets/images/product/decor/10.jpg\",\"/assets/images/product/decor/1.jpg\",\"/assets/images/product/decor/2.jpg\",\"/assets/images/product/decor/3.jpg\",\"/assets/images/product/decor/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"11\",\"sku\":\"asdf111\",\"name\":\"Lorem ipsum fashion one\",\"slug\":\"lorem-ipsum-fashion-one\",\"price\":17,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\"],\"image\":[\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"12\",\"sku\":\"asdf112\",\"name\":\"Lorem ipsum fashion two\",\"slug\":\"lorem-ipsum-fashion-two\",\"price\":13,\"discount\":14,\"new\":false,\"rating\":4,\"ratingCount\":7,\"saleCount\":70,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\"],\"image\":[\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"13\",\"sku\":\"asdf113\",\"name\":\"Lorem ipsum fashion three\",\"slug\":\"lorem-ipsum-fashion-three\",\"price\":16,\"discount\":20,\"new\":true,\"rating\":5,\"ratingCount\":27,\"saleCount\":78,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\"],\"image\":[\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"14\",\"sku\":\"asdf114\",\"name\":\"Lorem ipsum fashion four\",\"slug\":\"lorem-ipsum-fashion-four\",\"price\":10,\"discount\":25,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":70,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\"],\"image\":[\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"15\",\"sku\":\"asdf115\",\"name\":\"Lorem ipsum fashion five\",\"slug\":\"lorem-ipsum-fashion-five\",\"price\":15,\"discount\":5,\"new\":true,\"rating\":4,\"ratingCount\":10,\"saleCount\":63,\"category\":[\"fashion\",\"men\"],\"tag\":[\"fashion\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/1.jpg\"],\"image\":[\"/assets/images/product/fashion/5.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"16\",\"sku\":\"asdf116\",\"name\":\"Lorem ipsum fashion six\",\"slug\":\"lorem-ipsum-fashion-six\",\"price\":17,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":60,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\"],\"image\":[\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"17\",\"sku\":\"asdf117\",\"name\":\"Lorem ipsum fashion seven\",\"slug\":\"lorem-ipsum-fashion-seven\",\"price\":27,\"discount\":20,\"new\":true,\"rating\":4,\"ratingCount\":25,\"saleCount\":70,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\"],\"image\":[\"/assets/images/product/fashion/7.jpg\",\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"18\",\"sku\":\"asdf118\",\"name\":\"Lorem ipsum fashion eight\",\"slug\":\"lorem-ipsum-fashion-eight\",\"price\":25,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":20,\"saleCount\":50,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\"],\"image\":[\"/assets/images/product/fashion/8.jpg\",\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"19\",\"sku\":\"asdf119\",\"name\":\"Lorem ipsum fashion nine\",\"slug\":\"lorem-ipsum-fashion-nine\",\"price\":35,\"discount\":20,\"new\":true,\"rating\":4,\"ratingCount\":25,\"saleCount\":150,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\"],\"image\":[\"/assets/images/product/fashion/9.jpg\",\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/1.jpg\",\"/assets/images/product/fashion/2.jpg\",\"/assets/images/product/fashion/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"20\",\"sku\":\"asdf120\",\"name\":\"Lorem ipsum fashion ten\",\"slug\":\"lorem-ipsum-fashion-ten\",\"price\":45,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":5,\"saleCount\":10,\"category\":[\"fashion\",\"women\"],\"tag\":[\"fashion\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/fashion/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/fashion/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/fashion/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/6.jpg\"],\"image\":[\"/assets/images/product/fashion/10.jpg\",\"/assets/images/product/fashion/6.jpg\",\"/assets/images/product/fashion/3.jpg\",\"/assets/images/product/fashion/4.jpg\",\"/assets/images/product/fashion/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"21\",\"sku\":\"asdf121\",\"name\":\"Lorem ipsum cosmetics one\",\"slug\":\"lorem-ipsum-cosmetics-one\",\"price\":18,\"discount\":12,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\"],\"image\":[\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"22\",\"sku\":\"asdf122\",\"name\":\"Lorem ipsum cosmetics two\",\"slug\":\"lorem-ipsum-cosmetics-two\",\"price\":28,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":12,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\"],\"image\":[\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"23\",\"sku\":\"asdf123\",\"name\":\"Lorem ipsum cosmetics three\",\"slug\":\"lorem-ipsum-cosmetics-three\",\"price\":22,\"discount\":15,\"new\":false,\"rating\":5,\"ratingCount\":7,\"saleCount\":12,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":40,\"thumbImage\":[\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\"],\"image\":[\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"24\",\"sku\":\"asdf124\",\"name\":\"Lorem ipsum cosmetics four\",\"slug\":\"lorem-ipsum-cosmetics-four\",\"price\":30,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":17,\"saleCount\":22,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":50,\"thumbImage\":[\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\"],\"image\":[\"/assets/images/product/cosmetics/4.jpg\",\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"25\",\"sku\":\"asdf125\",\"name\":\"Lorem ipsum cosmetics five\",\"slug\":\"lorem-ipsum-cosmetics-five\",\"price\":20,\"discount\":20,\"new\":false,\"rating\":5,\"ratingCount\":27,\"saleCount\":30,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":40,\"thumbImage\":[\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\"],\"image\":[\"/assets/images/product/cosmetics/5.jpg\",\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"26\",\"sku\":\"asdf126\",\"name\":\"Lorem ipsum cosmetics six\",\"slug\":\"lorem-ipsum-cosmetics-six\",\"price\":30,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":20,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\"],\"image\":[\"/assets/images/product/cosmetics/6.jpg\",\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"27\",\"sku\":\"asdf127\",\"name\":\"Lorem ipsum cosmetics seven\",\"slug\":\"lorem-ipsum-cosmetics-seven\",\"price\":20,\"discount\":5,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\"],\"image\":[\"/assets/images/product/cosmetics/7.jpg\",\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"28\",\"sku\":\"asdf128\",\"name\":\"Lorem ipsum cosmetics eight\",\"slug\":\"lorem-ipsum-cosmetics-eight\",\"price\":10,\"discount\":15,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":20,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\"],\"image\":[\"/assets/images/product/cosmetics/8.jpg\",\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"29\",\"sku\":\"asdf129\",\"name\":\"Lorem ipsum cosmetics nine\",\"slug\":\"lorem-ipsum-cosmetics-nine\",\"price\":20,\"discount\":25,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":30,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\"],\"image\":[\"/assets/images/product/cosmetics/9.jpg\",\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"30\",\"sku\":\"asdf130\",\"name\":\"Lorem ipsum cosmetics ten\",\"slug\":\"lorem-ipsum-cosmetics-ten\",\"price\":30,\"discount\":15,\"new\":true,\"rating\":5,\"ratingCount\":10,\"saleCount\":20,\"category\":[\"cosmetics\"],\"tag\":[\"cosmetics\"],\"stock\":30,\"thumbImage\":[\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\"],\"image\":[\"/assets/images/product/cosmetics/10.jpg\",\"/assets/images/product/cosmetics/1.jpg\",\"/assets/images/product/cosmetics/2.jpg\",\"/assets/images/product/cosmetics/3.jpg\",\"/assets/images/product/cosmetics/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"31\",\"sku\":\"asdf131\",\"name\":\"Lorem ipsum furniture one\",\"slug\":\"lorem-ipsum-furniture-one\",\"price\":17,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/furniture/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/furniture/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/furniture/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\"],\"image\":[\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"32\",\"sku\":\"asdf132\",\"name\":\"Lorem ipsum furniture two\",\"slug\":\"lorem-ipsum-furniture-two\",\"price\":18,\"discount\":12,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\"],\"image\":[\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"33\",\"sku\":\"asdf133\",\"name\":\"Lorem ipsum furniture three\",\"slug\":\"lorem-ipsum-furniture-three\",\"price\":14,\"discount\":0,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":13,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\"],\"image\":[\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"34\",\"sku\":\"asdf134\",\"name\":\"Lorem ipsum furniture four\",\"slug\":\"lorem-ipsum-furniture-four\",\"price\":12,\"discount\":5,\"new\":false,\"rating\":4,\"ratingCount\":15,\"saleCount\":19,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":12,\"affiliateLink\":\"https://www.amazon.com\",\"thumbImage\":[\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\"],\"image\":[\"/assets/images/product/furniture/4.jpg\",\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"35\",\"sku\":\"asdf135\",\"name\":\"Lorem ipsum furniture five\",\"slug\":\"lorem-ipsum-furniture-five\",\"price\":16,\"discount\":0,\"new\":true,\"rating\":2,\"ratingCount\":5,\"saleCount\":12,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":14,\"thumbImage\":[\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\"],\"image\":[\"/assets/images/product/furniture/5.jpg\",\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"36\",\"sku\":\"asdf136\",\"name\":\"Lorem ipsum furniture six\",\"slug\":\"lorem-ipsum-furniture-six\",\"price\":12,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":4,\"saleCount\":16,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":0,\"thumbImage\":[\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\"],\"image\":[\"/assets/images/product/furniture/6.jpg\",\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"37\",\"sku\":\"asdf137\",\"name\":\"Lorem ipsum furniture seven\",\"slug\":\"lorem-ipsum-furniture-seven\",\"price\":17,\"discount\":12,\"new\":true,\"rating\":3,\"ratingCount\":7,\"saleCount\":13,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":18,\"thumbImage\":[\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\"],\"image\":[\"/assets/images/product/furniture/7.jpg\",\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"38\",\"sku\":\"asdf138\",\"name\":\"Lorem ipsum furniture eight\",\"slug\":\"lorem-ipsum-furniture-eight\",\"price\":15,\"discount\":0,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":30,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":12,\"thumbImage\":[\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\"],\"image\":[\"/assets/images/product/furniture/8.jpg\",\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"39\",\"sku\":\"asdf139\",\"name\":\"Lorem ipsum furniture nine\",\"slug\":\"lorem-ipsum-furniture-nine\",\"price\":20,\"discount\":12,\"new\":true,\"rating\":3,\"ratingCount\":5,\"saleCount\":20,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":16,\"thumbImage\":[\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\"],\"image\":[\"/assets/images/product/furniture/9.jpg\",\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"40\",\"sku\":\"asdf140\",\"name\":\"Lorem ipsum furniture ten\",\"slug\":\"lorem-ipsum-furniture-ten\",\"price\":30,\"discount\":20,\"new\":false,\"rating\":4,\"ratingCount\":10,\"saleCount\":30,\"category\":[\"furniture\"],\"tag\":[\"furniture\"],\"stock\":14,\"thumbImage\":[\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\"],\"image\":[\"/assets/images/product/furniture/10.jpg\",\"/assets/images/product/furniture/1.jpg\",\"/assets/images/product/furniture/2.jpg\",\"/assets/images/product/furniture/3.jpg\",\"/assets/images/product/furniture/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"41\",\"sku\":\"asdf141\",\"name\":\"Lorem ipsum perfumes one\",\"slug\":\"lorem-ipsum-perfumes-one\",\"price\":18,\"discount\":12,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\"],\"image\":[\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"42\",\"sku\":\"asdf142\",\"name\":\"Lorem ipsum perfumes two\",\"slug\":\"lorem-ipsum-perfumes-two\",\"price\":28,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":12,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\"],\"image\":[\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"43\",\"sku\":\"asdf143\",\"name\":\"Lorem ipsum perfumes three\",\"slug\":\"lorem-ipsum-perfumes-three\",\"price\":22,\"discount\":15,\"new\":false,\"rating\":5,\"ratingCount\":7,\"saleCount\":12,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":40,\"thumbImage\":[\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\"],\"image\":[\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"44\",\"sku\":\"asdf144\",\"name\":\"Lorem ipsum perfumes four\",\"slug\":\"lorem-ipsum-perfumes-four\",\"price\":30,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":17,\"saleCount\":22,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":50,\"thumbImage\":[\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\"],\"image\":[\"/assets/images/product/perfumes/4.jpg\",\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"45\",\"sku\":\"asdf145\",\"name\":\"Lorem ipsum perfumes five\",\"slug\":\"lorem-ipsum-perfumes-five\",\"price\":20,\"discount\":20,\"new\":false,\"rating\":5,\"ratingCount\":27,\"saleCount\":30,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":40,\"thumbImage\":[\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\"],\"image\":[\"/assets/images/product/perfumes/5.jpg\",\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"46\",\"sku\":\"asdf146\",\"name\":\"Lorem ipsum perfumes six\",\"slug\":\"lorem-ipsum-perfumes-six\",\"price\":30,\"discount\":10,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":20,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\"],\"image\":[\"/assets/images/product/perfumes/6.jpg\",\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"47\",\"sku\":\"asdf147\",\"name\":\"Lorem ipsum perfumes seven\",\"slug\":\"lorem-ipsum-perfumes-seven\",\"price\":20,\"discount\":5,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":10,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\"],\"image\":[\"/assets/images/product/perfumes/7.jpg\",\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"48\",\"sku\":\"asdf148\",\"name\":\"Lorem ipsum perfumes eight\",\"slug\":\"lorem-ipsum-perfumes-eight\",\"price\":10,\"discount\":15,\"new\":true,\"rating\":5,\"ratingCount\":25,\"saleCount\":20,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":10,\"thumbImage\":[\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\"],\"image\":[\"/assets/images/product/perfumes/8.jpg\",\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"49\",\"sku\":\"asdf149\",\"name\":\"Lorem ipsum perfumes nine\",\"slug\":\"lorem-ipsum-perfumes-nine\",\"price\":20,\"discount\":25,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":30,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":20,\"thumbImage\":[\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\"],\"image\":[\"/assets/images/product/perfumes/9.jpg\",\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"50\",\"sku\":\"asdf150\",\"name\":\"Lorem ipsum perfumes ten\",\"slug\":\"lorem-ipsum-perfumes-ten\",\"price\":30,\"discount\":15,\"new\":true,\"rating\":5,\"ratingCount\":10,\"saleCount\":20,\"category\":[\"perfumes\"],\"tag\":[\"perfumes\"],\"stock\":30,\"thumbImage\":[\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\"],\"image\":[\"/assets/images/product/perfumes/10.jpg\",\"/assets/images/product/perfumes/1.jpg\",\"/assets/images/product/perfumes/2.jpg\",\"/assets/images/product/perfumes/3.jpg\",\"/assets/images/product/perfumes/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"51\",\"sku\":\"asdf151\",\"name\":\"Lorem ipsum wearables one\",\"slug\":\"lorem-ipsum-wearables-one\",\"price\":17,\"discount\":10,\"new\":true,\"rating\":4,\"ratingCount\":5,\"saleCount\":90,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\"],\"image\":[\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"52\",\"sku\":\"asdf152\",\"name\":\"Lorem ipsum wearables two\",\"slug\":\"lorem-ipsum-wearables-two\",\"price\":13,\"discount\":14,\"new\":false,\"rating\":4,\"ratingCount\":7,\"saleCount\":70,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\"],\"image\":[\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"53\",\"sku\":\"asdf153\",\"name\":\"Lorem ipsum wearables three\",\"slug\":\"lorem-ipsum-wearables-three\",\"price\":16,\"discount\":20,\"new\":true,\"rating\":5,\"ratingCount\":27,\"saleCount\":78,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/3.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\"],\"image\":[\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"54\",\"sku\":\"asdf154\",\"name\":\"Lorem ipsum wearables four\",\"slug\":\"lorem-ipsum-wearables-four\",\"price\":10,\"discount\":25,\"new\":false,\"rating\":4,\"ratingCount\":20,\"saleCount\":70,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/4.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\"],\"image\":[\"/assets/images/product/wearables/4.jpg\",\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"55\",\"sku\":\"asdf155\",\"name\":\"Lorem ipsum wearables five\",\"slug\":\"lorem-ipsum-wearables-five\",\"price\":15,\"discount\":5,\"new\":true,\"rating\":4,\"ratingCount\":10,\"saleCount\":63,\"category\":[\"wearables\",\"men\"],\"tag\":[\"wearables\",\"men\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/5.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\"],\"image\":[\"/assets/images/product/wearables/5.jpg\",\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"56\",\"sku\":\"asdf156\",\"name\":\"Lorem ipsum wearables six\",\"slug\":\"lorem-ipsum-wearables-six\",\"price\":17,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":15,\"saleCount\":60,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/6.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\"],\"image\":[\"/assets/images/product/wearables/6.jpg\",\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"57\",\"sku\":\"asdf157\",\"name\":\"Lorem ipsum wearables seven\",\"slug\":\"lorem-ipsum-wearables-seven\",\"price\":27,\"discount\":20,\"new\":true,\"rating\":4,\"ratingCount\":25,\"saleCount\":70,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/7.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\"],\"image\":[\"/assets/images/product/wearables/7.jpg\",\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"58\",\"sku\":\"asdf158\",\"name\":\"Lorem ipsum wearables eight\",\"slug\":\"lorem-ipsum-wearables-eight\",\"price\":25,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":20,\"saleCount\":50,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/8.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\"],\"image\":[\"/assets/images/product/wearables/8.jpg\",\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"59\",\"sku\":\"asdf159\",\"name\":\"Lorem ipsum wearables nine\",\"slug\":\"lorem-ipsum-wearables-nine\",\"price\":35,\"discount\":20,\"new\":true,\"rating\":4,\"ratingCount\":25,\"saleCount\":150,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/9.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\"],\"image\":[\"/assets/images/product/wearables/9.jpg\",\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"},{\"id\":\"60\",\"sku\":\"asdf160\",\"name\":\"Lorem ipsum wearables ten\",\"slug\":\"lorem-ipsum-wearables-ten\",\"price\":45,\"discount\":10,\"new\":false,\"rating\":5,\"ratingCount\":5,\"saleCount\":10,\"category\":[\"wearables\",\"women\"],\"tag\":[\"wearables\",\"women\"],\"variation\":[{\"color\":\"black\",\"colorCode\":\"#333333\",\"image\":\"/assets/images/product/wearables/10.jpg\",\"size\":[{\"name\":\"x\",\"stock\":3},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":5}]},{\"color\":\"blue\",\"colorCode\":\"#1e73be\",\"image\":\"/assets/images/product/wearables/1.jpg\",\"size\":[{\"name\":\"x\",\"stock\":4},{\"name\":\"m\",\"stock\":7},{\"name\":\"xl\",\"stock\":9},{\"name\":\"xxl\",\"stock\":1}]},{\"color\":\"yellow\",\"colorCode\":\"#dd9933\",\"image\":\"/assets/images/product/wearables/2.jpg\",\"size\":[{\"name\":\"x\",\"stock\":1},{\"name\":\"m\",\"stock\":2},{\"name\":\"xl\",\"stock\":4},{\"name\":\"xxl\",\"stock\":0}]}],\"thumbImage\":[\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\"],\"image\":[\"/assets/images/product/wearables/10.jpg\",\"/assets/images/product/wearables/1.jpg\",\"/assets/images/product/wearables/2.jpg\",\"/assets/images/product/wearables/3.jpg\",\"/assets/images/product/wearables/4.jpg\"],\"shortDescription\":\"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.\",\"fullDescription\":\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"}]");

/***/ }),

/***/ "./src/lib/with-redux-store.js":
/*!*************************************!*\
  !*** ./src/lib/with-redux-store.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\lib\\with-redux-store.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }));
    }

  };
});

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/with-redux-store */ "./src/lib/with-redux-store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toast-notifications */ "react-toast-notifications");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_productActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/productActions */ "./src/redux/actions/productActions.js");
/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/products.json */ "./src/data/products.json");
var _data_products_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/products.json */ "./src/data/products.json", 1);
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/scss/styles.scss */ "./src/assets/scss/styles.scss");
/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _other_ProtectRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./other/ProtectRoute */ "./src/pages/other/ProtectRoute.js");
/* harmony import */ var _other_ProtectRoute__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_other_ProtectRoute__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\besni\\Desktop\\hax-frontend\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistStore"])(props.reduxStore);
    props.reduxStore.dispatch(Object(_redux_actions_productActions__WEBPACK_IMPORTED_MODULE_8__["fetchProducts"])(_data_products_json__WEBPACK_IMPORTED_MODULE_9__));
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }, "Lezada | React Next JS Multipurpose eCommerce Template"), __jsx("link", {
      rel: "icon",
      href: "" + "/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    })), __jsx(react_toast_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastProvider"], {
      placement: "bottom-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      store: reduxStore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__["PersistGate"], {
      loading: __jsx(Component, _extends({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 24
        }
      })),
      persistor: this.persistor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp));

/***/ }),

/***/ "./src/pages/other/ProtectRoute.js":
/*!*****************************************!*\
  !*** ./src/pages/other/ProtectRoute.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import { useSelector } from "react-redux";
// import NotFound from './not-found'
// import React from 'react'
// const ProtectRoute = ({ children }) => {
//     const auth = useSelector(state => state.authReducer)
//     if ((!auth.authenticate && window.location.pathname === '/other/admin-page') || (!auth.authenticate && window.location.pathname === '/other/products') || (!auth.authenticate && window.location.pathname === '/other/orders') ){
//       return <NotFound/>
//     }
//     return children;
//   };
//   export default ProtectRoute

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

/***/ "./src/redux/actions/productActions.js":
/*!*********************************************!*\
  !*** ./src/redux/actions/productActions.js ***!
  \*********************************************/
/*! exports provided: FETCH_PRODUCTS_SUCCESS, fetchProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUCTS_SUCCESS", function() { return FETCH_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
}); // fetch products


const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
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

/***/ "./src/redux/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/authReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: ""
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: ""
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_REQUEST:
      state = _objectSpread(_objectSpread({}, state), {}, {
        authenticating: true
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_SUCCESS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGOUT_REQUEST:
      state = _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGOUT_SUCCESS:
      state = _objectSpread({}, initState);
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGOUT_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload.error,
        loading: false
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].SIGNUP_REQUEST:
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].SIGNUP_SUCCESS:
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].SIGNUP_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload.error
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["authConstants"].LOGIN_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload.error
      });
      break;
  }

  return state;
});

/***/ }),

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/cartActions */ "./src/redux/actions/cartActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initState = [];

const cartReducer = (state = initState, action) => {
  const cartItems = state,
        product = action.payload;

  if (action.type === _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART"]) {
    // for non variant products
    if (product.variation === undefined) {
      const cartItem = cartItems.filter(item => item.id === product.id)[0];

      if (cartItem === undefined) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
        })];
      } else {
        return cartItems.map(item => item.cartItemId === cartItem.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
          quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1
        }) : item);
      } // for variant products

    } else {
      const cartItem = cartItems.filter(item => item.id === product.id && product.selectedProductColor && product.selectedProductColor === item.selectedProductColor && product.selectedProductSize && product.selectedProductSize === item.selectedProductSize && (product.cartItemId ? product.cartItemId === item.cartItemId : true))[0];

      if (cartItem === undefined) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
        })];
      } else if (cartItem !== undefined && (cartItem.selectedProductColor !== product.selectedProductColor || cartItem.selectedProductSize !== product.selectedProductSize)) {
        return [...cartItems, _objectSpread(_objectSpread({}, product), {}, {
          quantity: product.quantity ? product.quantity : 1,
          cartItemId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
        })];
      } else {
        return cartItems.map(item => item.cartItemId === cartItem.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
          quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1,
          selectedProductColor: product.selectedProductColor,
          selectedProductSize: product.selectedProductSize
        }) : item);
      }
    }
  }

  if (action.type === _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__["DECREASE_QUANTITY"]) {
    if (product.quantity === 1) {
      const remainingItems = (cartItems, product) => cartItems.filter(cartItem => cartItem.cartItemId !== product.cartItemId);

      return remainingItems(cartItems, product);
    } else {
      return cartItems.map(item => item.cartItemId === product.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
        quantity: item.quantity - 1
      }) : item);
    }
  }

  if (action.type === _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__["DELETE_FROM_CART"]) {
    const remainingItems = (cartItems, product) => cartItems.filter(cartItem => cartItem.cartItemId !== product.cartItemId);

    return remainingItems(cartItems, product);
  }

  if (action.type === _actions_cartActions__WEBPACK_IMPORTED_MODULE_1__["DELETE_ALL_FROM_CART"]) {
    return cartItems.filter(item => {
      return false;
    });
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./src/redux/reducers/categoriesReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/categoriesReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  categories: [],
  loading: false,
  error: null
};

const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];

  if (parentId == undefined) {
    return [...categories, {
      _id: category._id,
      name: category.name,
      slug: category.slug,
      categoryImage: category.categoryImage,
      children: []
    }];
  }

  for (let cat of categories) {
    if (cat._id == parentId) {
      myCategories.push(_objectSpread(_objectSpread({}, cat), {}, {
        children: cat.children ? buildNewCategories(parentId, [...cat.children, {
          _id: category._id,
          name: category.name,
          slug: category.slug,
          parentId: category.parentId,
          categoryImage: category.categoryImage,
          children: category.children
        }], category) : []
      }));
    } else {
      myCategories.push(_objectSpread(_objectSpread({}, cat), {}, {
        children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
      }));
    }
  }

  return myCategories;
};

/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["categoryConstants"].GET_CATEGORIES_SUCCESS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload.categories
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["categoryConstants"].ADD_NEW_CATEGORY_REQUEST:
      state = _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["categoryConstants"].ADD_NEW_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
      console.log(updatedCategories);
      state = _objectSpread(_objectSpread({}, state), {}, {
        categories: updatedCategories,
        loading: false
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["categoryConstants"].ADD_NEW_CATEGORY_FAILURE:
      state = _objectSpread({}, initState);
      break;
  }

  return state;
});

/***/ }),

/***/ "./src/redux/reducers/compareReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/compareReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_compareActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/compareActions */ "./src/redux/actions/compareActions.js");

const initState = [];

const compareReducer = (state = initState, action) => {
  const compareItems = state,
        product = action.payload;

  if (action.type === _actions_compareActions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_COMPARE"]) {
    const compareItem = compareItems.filter(item => item.id === product.id)[0];

    if (compareItem === undefined) {
      return [...compareItems, product];
    } else {
      return compareItems;
    }
  }

  if (action.type === _actions_compareActions__WEBPACK_IMPORTED_MODULE_0__["DELETE_FROM_COMPARE"]) {
    const remainingItems = (compareItems, product) => compareItems.filter(compareItem => compareItem.id !== product.id);

    return remainingItems(compareItems, product);
  }

  return compareItems;
};

/* harmony default export */ __webpack_exports__["default"] = (compareReducer);

/***/ }),

/***/ "./src/redux/reducers/productReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/productReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_productActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/productActions */ "./src/redux/actions/productActions.js");

const initState = [];

const productReducer = (state = initState, action) => {
  if (action.type === _actions_productActions__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUCTS_SUCCESS"]) {
    return state.concat(action.payload);
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ }),

/***/ "./src/redux/reducers/productsReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/productsReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  products: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initState, action) => {
  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_PRODUCTS_BY_SLUG:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_PRODUCTS_BY_MAIN_CATEGORY:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_ALL_PRODUCTS_SUCCESS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_ALL_PRODUCTS_FROM_PRODUCTS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_0__["productConstants"].GET_ALL_PRODUCTS_BY_SEARCH:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;
  }

  return state;
});

/***/ }),

/***/ "./src/redux/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productReducer */ "./src/redux/reducers/productReducer.js");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlistReducer */ "./src/redux/reducers/wishlistReducer.js");
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compareReducer */ "./src/redux/reducers/compareReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _categoriesReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoriesReducer */ "./src/redux/reducers/categoriesReducer.js");
/* harmony import */ var _productsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productsReducer */ "./src/redux/reducers/productsReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authReducer */ "./src/redux/reducers/authReducer.js");








const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  productData: _productReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  cartData: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  wishlistData: _wishlistReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  compareData: _compareReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  category: _categoriesReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  product: _productsReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/wishlistReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/wishlistReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_wishlistActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");

const initState = [];

const wishlistReducer = (state = initState, action) => {
  const wishlistItems = state,
        product = action.payload;

  if (action.type === _actions_wishlistActions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_WISHLIST"]) {
    const wishlistItem = wishlistItems.filter(item => item.id === product.id)[0];

    if (wishlistItem === undefined) {
      return [...wishlistItems, product];
    } else {
      return wishlistItems;
    }
  }

  if (action.type === _actions_wishlistActions__WEBPACK_IMPORTED_MODULE_0__["DELETE_FROM_WISHLIST"]) {
    const remainingItems = (wishlistItems, product) => wishlistItems.filter(wishlistItem => wishlistItem.id !== product.id);

    return remainingItems(wishlistItems, product);
  }

  if (action.type === _actions_wishlistActions__WEBPACK_IMPORTED_MODULE_0__["DELETE_ALL_FROM_WISHLIST"]) {
    return wishlistItems.filter(item => {
      return false;
    });
  }

  return wishlistItems;
};

/* harmony default export */ __webpack_exports__["default"] = (wishlistReducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/redux/reducers/rootReducer.js");






const persistConfig = {
  key: "primary",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default())
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"]);
function initializeStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toast-notifications":
/*!********************************************!*\
  !*** external "react-toast-notifications" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvd2l0aC1yZWR1eC1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvb3RoZXIvUHJvdGVjdFJvdXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NvbXBhcmVBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9wcm9kdWN0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy93aXNobGlzdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvY2F0ZWdvcmllc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2NvbXBhcmVSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9wcm9kdWN0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvd2lzaGxpc3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsIkNvbnRhaW5lciIsImNyZWF0ZVVybCIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ1cmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJleGVjT25jZSIsImNvbnNvbGUiLCJ3YXJuIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiaXNTZXJ2ZXIiLCJfX05FWFRfUkVEVVhfU1RPUkVfXyIsImdldE9yQ3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsaXplU3RvcmUiLCJ3aW5kb3ciLCJBcHBXaXRoUmVkdXgiLCJSZWFjdCIsImFwcENvbnRleHQiLCJyZWR1eFN0b3JlIiwiYXBwUHJvcHMiLCJpbml0aWFsUmVkdXhTdGF0ZSIsImdldFN0YXRlIiwiY29uc3RydWN0b3IiLCJNeUFwcCIsInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsImRpc3BhdGNoIiwiZmV0Y2hQcm9kdWN0cyIsInByb2R1Y3RzIiwicHJvY2VzcyIsIndpdGhSZWR1eFN0b3JlIiwiQUREX1RPX0NBUlQiLCJERUNSRUFTRV9RVUFOVElUWSIsIkRFTEVURV9GUk9NX0NBUlQiLCJERUxFVEVfQUxMX0ZST01fQ0FSVCIsImFkZFRvQ2FydCIsIml0ZW0iLCJhZGRUb2FzdCIsInF1YW50aXR5Q291bnQiLCJzZWxlY3RlZFByb2R1Y3RDb2xvciIsInNlbGVjdGVkUHJvZHVjdFNpemUiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJ0eXBlIiwicGF5bG9hZCIsInF1YW50aXR5IiwiZGVjcmVhc2VRdWFudGl0eSIsImRlbGV0ZUZyb21DYXJ0IiwiZGVsZXRlQWxsRnJvbUNhcnQiLCJjYXJ0SXRlbVN0b2NrIiwiY29sb3IiLCJzaXplIiwic3RvY2siLCJ2YXJpYXRpb24iLCJmaWx0ZXIiLCJzaW5nbGUiLCJuYW1lIiwiQUREX1RPX0NPTVBBUkUiLCJERUxFVEVfRlJPTV9DT01QQVJFIiwiYWRkVG9Db21wYXJlIiwiZGVsZXRlRnJvbUNvbXBhcmUiLCJjYXRlZ29yeUNvbnN0YW50cyIsIkdFVF9DQVRFR09SSUVTX1JFUVVFU1QiLCJHRVRfQ0FURUdPUklFU19TVUNDRVNTIiwiR0VUX0NBVEVHT1JJRVNfRkFJTFVSRSIsIkFERF9ORVdfQ0FURUdPUllfUkVRVUVTVCIsIkFERF9ORVdfQ0FURUdPUllfU1VDQ0VTUyIsIkFERF9ORVdfQ0FURUdPUllfRkFJTFVSRSIsInByb2R1Y3RDb25zdGFudHMiLCJHRVRfUFJPRFVDVFNfQllfU0xVRyIsIkdFVF9BTExfUFJPRFVDVFNfU1VDQ0VTUyIsIkdFVF9BTExfUFJPRFVDVFNfRlJPTV9QUk9EVUNUUyIsIkdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfU1VDQ0VTUyIsIkdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfRkFJTFVSRSIsIkdFVF9BTExfUFJPRFVDVFNfQllfU0VBUkNIIiwiR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUlkiLCJHRVRfUFJPRFVDVFNfQllfTUFJTl9DQVRFR09SWV9BTkRfU0VBUkNIIiwiYXV0aENvbnN0YW50cyIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9GQUlMVVJFIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1MiLCJmZXRjaFByb2R1Y3RzU3VjY2VzcyIsIkFERF9UT19XSVNITElTVCIsIkRFTEVURV9GUk9NX1dJU0hMSVNUIiwiREVMRVRFX0FMTF9GUk9NX1dJU0hMSVNUIiwiYWRkVG9XaXNobGlzdCIsImRlbGV0ZUZyb21XaXNobGlzdCIsImRlbGV0ZUFsbEZyb21XaXNobGlzdCIsImluaXRTdGF0ZSIsInRva2VuIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiYXV0aGVudGljYXRlIiwiYXV0aGVudGljYXRpbmciLCJsb2FkaW5nIiwibWVzc2FnZSIsInN0YXRlIiwiYWN0aW9uIiwibG9nIiwiY2FydFJlZHVjZXIiLCJjYXJ0SXRlbXMiLCJwcm9kdWN0IiwidW5kZWZpbmVkIiwiY2FydEl0ZW0iLCJpZCIsImNhcnRJdGVtSWQiLCJ1dWlkdjQiLCJtYXAiLCJyZW1haW5pbmdJdGVtcyIsImNhdGVnb3JpZXMiLCJidWlsZE5ld0NhdGVnb3JpZXMiLCJwYXJlbnRJZCIsImNhdGVnb3J5IiwibXlDYXRlZ29yaWVzIiwiX2lkIiwic2x1ZyIsImNhdGVnb3J5SW1hZ2UiLCJjYXQiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsImNvbXBhcmVSZWR1Y2VyIiwiY29tcGFyZUl0ZW1zIiwiY29tcGFyZUl0ZW0iLCJwcm9kdWN0UmVkdWNlciIsImNvbmNhdCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdERhdGEiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsIndpc2hsaXN0UmVkdWNlciIsImNvbXBhcmVEYXRhIiwiY2F0ZWdvcmllc1JlZHVjZXIiLCJwcm9kdWN0c1JlZHVjZXIiLCJhdXRoIiwiYXV0aFJlZHVjZXIiLCJ3aXNobGlzdEl0ZW1zIiwid2lzaGxpc3RJdGVtIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVua01pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFD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Z0JiLDZEQUFoQixDQUF2QztBQUVPLFNBQVN6SCxlQUFULEdBQTJCO0FBQ2hDLFNBQU8ySSx5REFBVyxDQUNoQkYsZ0JBRGdCLEVBRWhCRyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FGSCxDQUFsQjtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQ29udGFpbmVyPUNvbnRhaW5lcjtleHBvcnRzLmNyZWF0ZVVybD1jcmVhdGVVcmw7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF9yZWYpe3ZhcntDb21wb25lbnQsY3R4fT1fcmVmO3ZhciBwYWdlUHJvcHM9YXdhaXQoMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQ29tcG9uZW50LGN0eCk7cmV0dXJue3BhZ2VQcm9wc307fWNsYXNzIEFwcCBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHsvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbi8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbmNvbXBvbmVudERpZENhdGNoKGVycm9yLF9lcnJvckluZm8pe3Rocm93IGVycm9yO31yZW5kZXIoKXt2YXJ7cm91dGVyLENvbXBvbmVudCxwYWdlUHJvcHMsX19OX1NTRyxfX05fU1NQfT10aGlzLnByb3BzO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCxPYmplY3QuYXNzaWduKHt9LHBhZ2VQcm9wcywvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbi8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4hKF9fTl9TU0d8fF9fTl9TU1ApP3t1cmw6Y3JlYXRlVXJsKHJvdXRlcil9Ont9KSk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wczt2YXIgd2FybkNvbnRhaW5lcjt2YXIgd2FyblVybDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7d2FybkNvbnRhaW5lcj0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS53YXJuKFwiV2FybmluZzogdGhlIGBDb250YWluZXJgIGluIGBfYXBwYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZFwiKTt9KTt3YXJuVXJsPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLmVycm9yKFwiV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy91cmwtZGVwcmVjYXRlZFwiKTt9KTt9Ly8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmZ1bmN0aW9uIENvbnRhaW5lcihwKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuQ29udGFpbmVyKCk7cmV0dXJuIHAuY2hpbGRyZW47fWZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXIpey8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG52YXJ7cGF0aG5hbWUsYXNQYXRoLHF1ZXJ5fT1yb3V0ZXI7cmV0dXJue2dldCBxdWVyeSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcXVlcnk7fSxnZXQgcGF0aG5hbWUoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHBhdGhuYW1lO30sZ2V0IGFzUGF0aCgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gYXNQYXRoO30sYmFjazooKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyb3V0ZXIuYmFjaygpO30scHVzaDoodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnB1c2godXJsLGFzKTt9LHB1c2hUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHB1c2hSb3V0ZT1hcz9ocmVmOicnO3ZhciBwdXNoVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUscHVzaFVybCk7fSxyZXBsYWNlOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsYXMpO30scmVwbGFjZVRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcmVwbGFjZVJvdXRlPWFzP2hyZWY6Jyc7dmFyIHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVN0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmNvbnN0IF9fTkVYVF9SRURVWF9TVE9SRV9fID0gXCJfX05FWFRfUkVEVVhfU1RPUkVfX1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAvLyBBbHdheXMgbWFrZSBhIG5ldyBzdG9yZSBpZiBzZXJ2ZXIsIG90aGVyd2lzZSBzdGF0ZSBpcyBzaGFyZWQgYmV0d2VlbiByZXF1ZXN0c1xyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgcmV0dXJuIGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHN0b3JlIGlmIHVuYXZhaWxhYmxlIG9uIHRoZSBjbGllbnQgYW5kIHNldCBpdCBvbiB0aGUgd2luZG93IG9iamVjdFxyXG4gIGlmICghd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSkge1xyXG4gICAgd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSA9IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKEFwcCkgPT4ge1xyXG4gIHJldHVybiBjbGFzcyBBcHBXaXRoUmVkdXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB7XHJcbiAgICAgIC8vIEdldCBvciBDcmVhdGUgdGhlIHN0b3JlIHdpdGggYHVuZGVmaW5lZGAgYXMgaW5pdGlhbFN0YXRlXHJcbiAgICAgIC8vIFRoaXMgYWxsb3dzIHlvdSB0byBzZXQgYSBjdXN0b20gZGVmYXVsdCBpbml0aWFsU3RhdGVcclxuICAgICAgY29uc3QgcmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUoKTtcclxuXHJcbiAgICAgIC8vIFByb3ZpZGUgdGhlIHN0b3JlIHRvIGdldEluaXRpYWxQcm9wcyBvZiBwYWdlc1xyXG4gICAgICBhcHBDb250ZXh0LmN0eC5yZWR1eFN0b3JlID0gcmVkdXhTdG9yZTtcclxuXHJcbiAgICAgIGxldCBhcHBQcm9wcyA9IHt9O1xyXG4gICAgICBpZiAodHlwZW9mIEFwcC5nZXRJbml0aWFsUHJvcHMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hcHBQcm9wcyxcclxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZTogcmVkdXhTdG9yZS5nZXRTdGF0ZSgpLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPEFwcCB7Li4udGhpcy5wcm9wc30gcmVkdXhTdG9yZT17dGhpcy5yZWR1eFN0b3JlfSAvPjtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tIFwiLi4vbGliL3dpdGgtcmVkdXgtc3RvcmVcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciB9IGZyb20gXCJyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RBY3Rpb25zXCI7XHJcbmltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vZGF0YS9wcm9kdWN0cy5qc29uXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCBQcm90ZWN0Um91dGUgZnJvbSBcIi4vb3RoZXIvUHJvdGVjdFJvdXRlXCI7XHJcblxyXG5cclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUocHJvcHMucmVkdXhTdG9yZSk7XHJcbiAgICBwcm9wcy5yZWR1eFN0b3JlLmRpc3BhdGNoKGZldGNoUHJvZHVjdHMocHJvZHVjdHMpKTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByZWR1eFN0b3JlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkxlemFkYSB8IFJlYWN0IE5leHQgSlMgTXVsdGlwdXJwb3NlIGVDb21tZXJjZSBUZW1wbGF0ZTwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Zhdmljb24uaWNvXCJ9IC8+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Xb3JrK1NhbnM6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgPjwvbGluaz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPFRvYXN0UHJvdmlkZXIgcGxhY2VtZW50PVwiYm90dG9tLWxlZnRcIj5cclxuICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XHJcbiAgICAgICAgICAgIDxQZXJzaXN0R2F0ZVxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XHJcbiAgICAgICAgICAgICAgcGVyc2lzdG9yPXt0aGlzLnBlcnNpc3Rvcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoTXlBcHApO1xyXG4iLCIvLyBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyBpbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9ub3QtZm91bmQnXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vIGNvbnN0IFByb3RlY3RSb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuLy8gICAgIGNvbnN0IGF1dGggPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoUmVkdWNlcilcclxuLy8gICAgIGlmICgoIWF1dGguYXV0aGVudGljYXRlICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9vdGhlci9hZG1pbi1wYWdlJykgfHwgKCFhdXRoLmF1dGhlbnRpY2F0ZSAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvb3RoZXIvcHJvZHVjdHMnKSB8fCAoIWF1dGguYXV0aGVudGljYXRlICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9vdGhlci9vcmRlcnMnKSApe1xyXG4vLyAgICAgICByZXR1cm4gPE5vdEZvdW5kLz5cclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBjaGlsZHJlbjtcclxuLy8gICB9O1xyXG5cclxuLy8gICBleHBvcnQgZGVmYXVsdCBQcm90ZWN0Um91dGUiLCJleHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSBcIkFERF9UT19DQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBERUNSRUFTRV9RVUFOVElUWSA9IFwiREVDUkVBU0VfUVVBTlRJVFlcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0NBUlQgPSBcIkRFTEVURV9GUk9NX0NBUlRcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9BTExfRlJPTV9DQVJUID0gXCJERUxFVEVfQUxMX0ZST01fQ0FSVFwiO1xyXG5cclxuLy9hZGQgdG8gY2FydFxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKFxyXG4gIGl0ZW0sXHJcbiAgYWRkVG9hc3QsXHJcbiAgcXVhbnRpdHlDb3VudCxcclxuICBzZWxlY3RlZFByb2R1Y3RDb2xvcixcclxuICBzZWxlY3RlZFByb2R1Y3RTaXplXHJcbikgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBpZiAoYWRkVG9hc3QpIHtcclxuICAgICAgYWRkVG9hc3QoXCJBZGRlZCBUbyBDYXJ0XCIsIHsgYXBwZWFyYW5jZTogXCJzdWNjZXNzXCIsIGF1dG9EaXNtaXNzOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBRERfVE9fQ0FSVCxcclxuICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5Q291bnQsXHJcbiAgICAgICAgc2VsZWN0ZWRQcm9kdWN0Q29sb3I6IHNlbGVjdGVkUHJvZHVjdENvbG9yXHJcbiAgICAgICAgICA/IHNlbGVjdGVkUHJvZHVjdENvbG9yXHJcbiAgICAgICAgICA6IGl0ZW0uc2VsZWN0ZWRQcm9kdWN0Q29sb3JcclxuICAgICAgICAgID8gaXRlbS5zZWxlY3RlZFByb2R1Y3RDb2xvclxyXG4gICAgICAgICAgOiBudWxsLFxyXG4gICAgICAgIHNlbGVjdGVkUHJvZHVjdFNpemU6IHNlbGVjdGVkUHJvZHVjdFNpemVcclxuICAgICAgICAgID8gc2VsZWN0ZWRQcm9kdWN0U2l6ZVxyXG4gICAgICAgICAgOiBpdGVtLnNlbGVjdGVkUHJvZHVjdFNpemVcclxuICAgICAgICAgID8gaXRlbS5zZWxlY3RlZFByb2R1Y3RTaXplXHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuLy9kZWNyZWFzZSBmcm9tIGNhcnRcclxuZXhwb3J0IGNvbnN0IGRlY3JlYXNlUXVhbnRpdHkgPSAoaXRlbSwgYWRkVG9hc3QpID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKGFkZFRvYXN0KSB7XHJcbiAgICAgIGFkZFRvYXN0KFwiSXRlbSBEZWNyZW1lbnRlZCBGcm9tIENhcnRcIiwge1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBERUNSRUFTRV9RVUFOVElUWSwgcGF5bG9hZDogaXRlbSB9KTtcclxuICB9O1xyXG59O1xyXG4vL2RlbGV0ZSBmcm9tIGNhcnRcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZyb21DYXJ0ID0gKGl0ZW0sIGFkZFRvYXN0KSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGlmIChhZGRUb2FzdCkge1xyXG4gICAgICBhZGRUb2FzdChcIlJlbW92ZWQgRnJvbSBDYXJ0XCIsIHsgYXBwZWFyYW5jZTogXCJlcnJvclwiLCBhdXRvRGlzbWlzczogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVMRVRFX0ZST01fQ0FSVCwgcGF5bG9hZDogaXRlbSB9KTtcclxuICB9O1xyXG59O1xyXG4vL2RlbGV0ZSBhbGwgZnJvbSBjYXJ0XHJcbmV4cG9ydCBjb25zdCBkZWxldGVBbGxGcm9tQ2FydCA9IGFkZFRvYXN0ID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKGFkZFRvYXN0KSB7XHJcbiAgICAgIGFkZFRvYXN0KFwiUmVtb3ZlZCBBbGwgRnJvbSBDYXJ0XCIsIHtcclxuICAgICAgICBhcHBlYXJhbmNlOiBcImVycm9yXCIsXHJcbiAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTEVURV9BTExfRlJPTV9DQVJUIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBnZXQgc3RvY2sgb2YgY2FydCBpdGVtXHJcbmV4cG9ydCBjb25zdCBjYXJ0SXRlbVN0b2NrID0gKGl0ZW0sIGNvbG9yLCBzaXplKSA9PiB7XHJcbiAgaWYgKGl0ZW0uc3RvY2spIHtcclxuICAgIHJldHVybiBpdGVtLnN0b2NrO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gaXRlbS52YXJpYXRpb25cclxuICAgICAgLmZpbHRlcihzaW5nbGUgPT4gc2luZ2xlLmNvbG9yID09PSBjb2xvcilbMF1cclxuICAgICAgLnNpemUuZmlsdGVyKHNpbmdsZSA9PiBzaW5nbGUubmFtZSA9PT0gc2l6ZSlbMF0uc3RvY2s7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgQUREX1RPX0NPTVBBUkUgPSBcIkFERF9UT19DT01QQVJFXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9DT01QQVJFID0gXCJERUxFVEVfRlJPTV9DT01QQVJFXCI7XHJcblxyXG4vLyBhZGQgdG8gY29tcGFyZVxyXG5leHBvcnQgY29uc3QgYWRkVG9Db21wYXJlID0gKGl0ZW0sIGFkZFRvYXN0KSA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGlmIChhZGRUb2FzdCkge1xyXG4gICAgICBhZGRUb2FzdChcIkFkZGVkIFRvIENvbXBhcmVcIiwge1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBRERfVE9fQ09NUEFSRSwgcGF5bG9hZDogaXRlbSB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuLy8gZGVsZXRlIGZyb20gY29tcGFyZVxyXG5leHBvcnQgY29uc3QgZGVsZXRlRnJvbUNvbXBhcmUgPSAoaXRlbSwgYWRkVG9hc3QpID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKGFkZFRvYXN0KSB7XHJcbiAgICAgIGFkZFRvYXN0KFwiUmVtb3ZlZCBGcm9tIENvbXBhcmVcIiwge1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IFwiZXJyb3JcIixcclxuICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVMRVRFX0ZST01fQ09NUEFSRSwgcGF5bG9hZDogaXRlbSB9KTtcclxuICB9O1xyXG59O1xyXG4iLCJcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUNvbnN0YW50cyA9IHtcclxuICAgIEdFVF9DQVRFR09SSUVTX1JFUVVFU1Q6ICdHRVRfQ0FURUdPUklFU19SRVFVRVNUJyxcclxuICAgIEdFVF9DQVRFR09SSUVTX1NVQ0NFU1M6ICdHRVRfQ0FURUdPUklFU19TVUNDRVNTJyxcclxuICAgIEdFVF9DQVRFR09SSUVTX0ZBSUxVUkU6ICdHRVRfQ0FURUdPUklFU19GQUlMVVJFJyxcclxuICAgIEFERF9ORVdfQ0FURUdPUllfUkVRVUVTVDogJ0FERF9ORVdfQ0FURUdPUllfUkVRVUVTVCcsXHJcbiAgICBBRERfTkVXX0NBVEVHT1JZX1NVQ0NFU1M6ICdBRERfTkVXX0NBVEVHT1JZX1NVQ0NFU1MnLFxyXG4gICAgQUREX05FV19DQVRFR09SWV9GQUlMVVJFOiAnQUREX05FV19DQVRFR09SWV9GQUlMVVJFJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdENvbnN0YW50cyA9IHtcclxuICAgIEdFVF9QUk9EVUNUU19CWV9TTFVHOiAnR0VUX1BST0RVQ1RTX0JZX1NMVUcnLFxyXG4gICAgR0VUX0FMTF9QUk9EVUNUU19TVUNDRVNTOiAnR0VUX0FMTF9QUk9EVUNUU19TVUNDRVNTJyxcclxuICAgIEdFVF9BTExfUFJPRFVDVFNfRlJPTV9QUk9EVUNUUzogJ0dFVF9BTExfUFJPRFVDVFNfRlJPTV9QUk9EVUNUUycsXHJcbiAgICBHRVRfQ0FURUdPUllfUFJPRFVDVFNfQllfU0VBUkNIX1NVQ0NFU1M6ICdHRVRfQ0FURUdPUllfUFJPRFVDVFNfQllfU0VBUkNIX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0NBVEVHT1JZX1BST0RVQ1RTX0JZX1NFQVJDSF9GQUlMVVJFOiAnR0VUX0NBVEVHT1JZX1BST0RVQ1RTX0JZX1NFQVJDSF9GQUlMVVJFJyxcclxuICAgIEdFVF9BTExfUFJPRFVDVFNfQllfU0VBUkNIOiAnR0VUX0FMTF9QUk9EVUNUU19CWV9TRUFSQ0gnLFxyXG4gICAgR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUlk6ICdHRVRfUFJPRFVDVFNfQllfTUFJTl9DQVRFR09SWScsXHJcbiAgICBHRVRfUFJPRFVDVFNfQllfTUFJTl9DQVRFR09SWV9BTkRfU0VBUkNIOiAnR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUllfQU5EX1NFQVJDSCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhDb25zdGFudHMgPSB7XHJcbiAgICBMT0dJTl9SRVFVRVNUOiBcIkxPR0lOX1JFUVVFU1RcIixcclxuICAgIExPR0lOX0ZBSUxVUkU6IFwiTE9HSU5fRkFJTFVSRVwiLFxyXG4gICAgTE9HSU5fU1VDQ0VTUzogXCJMT0dJTl9TVUNDRVNTXCIsXHJcbiAgICBMT0dPVVRfUkVRVUVTVDogXCJMT0dPVVRfUkVRVUVTVFwiLFxyXG4gICAgTE9HT1VUX1NVQ0NFU1M6IFwiTE9HT1VUX1NVQ0NFU1NcIixcclxuICAgIExPR09VVF9GQUlMVVJFOiBcIkxPR09VVF9GQUlMVVJFXCIsXHJcbiAgXHJcbiAgICBTSUdOVVBfUkVRVUVTVDogXCJTSUdOVVBfUkVRVUVTVFwiLFxyXG4gICAgU0lHTlVQX1NVQ0NFU1M6IFwiU0lHTlVQX1NVQ0NFU1NcIixcclxuICAgIFNJR05VUF9GQUlMVVJFOiBcIlNJR05VUF9GQUlMVVJFXCIsXHJcbiAgfTtcclxuIiwiZXhwb3J0IGNvbnN0IEZFVENIX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIkZFVENIX1BST0RVQ1RTX1NVQ0NFU1NcIjtcclxuXHJcbmNvbnN0IGZldGNoUHJvZHVjdHNTdWNjZXNzID0gcHJvZHVjdHMgPT4gKHtcclxuICB0eXBlOiBGRVRDSF9QUk9EVUNUU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IHByb2R1Y3RzXHJcbn0pO1xyXG5cclxuLy8gZmV0Y2ggcHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSBwcm9kdWN0cyA9PiB7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoUHJvZHVjdHNTdWNjZXNzKHByb2R1Y3RzKSk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IEFERF9UT19XSVNITElTVCA9IFwiQUREX1RPX1dJU0hMSVNUXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9XSVNITElTVCA9IFwiREVMRVRFX0ZST01fV0lTSExJU1RcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9BTExfRlJPTV9XSVNITElTVCA9IFwiREVMRVRFX0FMTF9GUk9NX1dJU0hMSVNUXCI7XHJcblxyXG4vLyBhZGQgdG8gd2lzaGxpc3RcclxuZXhwb3J0IGNvbnN0IGFkZFRvV2lzaGxpc3QgPSAoaXRlbSwgYWRkVG9hc3QpID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKGFkZFRvYXN0KSB7XHJcbiAgICAgIGFkZFRvYXN0KFwiQWRkZWQgVG8gV2lzaGxpc3RcIiwge1xyXG4gICAgICAgIGFwcGVhcmFuY2U6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBRERfVE9fV0lTSExJU1QsIHBheWxvYWQ6IGl0ZW0gfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGRlbGV0ZSBmcm9tIHdpc2hsaXN0XHJcbmV4cG9ydCBjb25zdCBkZWxldGVGcm9tV2lzaGxpc3QgPSAoaXRlbSwgYWRkVG9hc3QpID0+IHtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgaWYgKGFkZFRvYXN0KSB7XHJcbiAgICAgIGFkZFRvYXN0KFwiUmVtb3ZlZCBGcm9tIFdpc2hsaXN0XCIsIHtcclxuICAgICAgICBhcHBlYXJhbmNlOiBcImVycm9yXCIsXHJcbiAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTEVURV9GUk9NX1dJU0hMSVNULCBwYXlsb2FkOiBpdGVtIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG4vL2RlbGV0ZSBhbGwgZnJvbSB3aXNobGlzdFxyXG5leHBvcnQgY29uc3QgZGVsZXRlQWxsRnJvbVdpc2hsaXN0ID0gYWRkVG9hc3QgPT4ge1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICBpZiAoYWRkVG9hc3QpIHtcclxuICAgICAgYWRkVG9hc3QoXCJSZW1vdmVkIEFsbCBGcm9tIFdpc2hsaXN0XCIsIHtcclxuICAgICAgICBhcHBlYXJhbmNlOiBcImVycm9yXCIsXHJcbiAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTEVURV9BTExfRlJPTV9XSVNITElTVCB9KTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBhdXRoQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2FjdGlvbnMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgdG9rZW46IG51bGwsXHJcbiAgdXNlcjoge1xyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBpY3R1cmU6IFwiXCIsXHJcbiAgfSxcclxuICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gIGF1dGhlbnRpY2F0aW5nOiBmYWxzZSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBtZXNzYWdlOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuTE9HSU5fUkVRVUVTVDpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYXV0aGVudGljYXRpbmc6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLnRva2VuLFxyXG4gICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICBhdXRoZW50aWNhdGluZzogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dPVVRfUkVRVUVTVDpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuTE9HT1VUX1NVQ0NFU1M6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLmluaXRTdGF0ZSxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuTE9HT1VUX0ZBSUxVUkU6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZC5lcnJvcixcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuU0lHTlVQX1JFUVVFU1Q6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLlNJR05VUF9TVUNDRVNTOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5TSUdOVVBfRkFJTFVSRTpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZC5lcnJvclxyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn07IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuaW1wb3J0IHtcclxuICBBRERfVE9fQ0FSVCxcclxuICBERUNSRUFTRV9RVUFOVElUWSxcclxuICBERUxFVEVfRlJPTV9DQVJULFxyXG4gIERFTEVURV9BTExfRlJPTV9DQVJUXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IFtdO1xyXG5cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLFxyXG4gICAgcHJvZHVjdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEFERF9UT19DQVJUKSB7XHJcbiAgICAvLyBmb3Igbm9uIHZhcmlhbnQgcHJvZHVjdHNcclxuICAgIGlmIChwcm9kdWN0LnZhcmlhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtID0gY2FydEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZClbMF07XHJcbiAgICAgIGlmIChjYXJ0SXRlbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIC4uLmNhcnRJdGVtcyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHkgPyBwcm9kdWN0LnF1YW50aXR5IDogMSxcclxuICAgICAgICAgICAgY2FydEl0ZW1JZDogdXVpZHY0KClcclxuICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbS5jYXJ0SXRlbUlkID09PSBjYXJ0SXRlbS5jYXJ0SXRlbUlkXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgID8gaXRlbS5xdWFudGl0eSArIHByb2R1Y3QucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgOiBpdGVtLnF1YW50aXR5ICsgMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBpdGVtXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBmb3IgdmFyaWFudCBwcm9kdWN0c1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY2FydEl0ZW0gPSBjYXJ0SXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCAmJlxyXG4gICAgICAgICAgcHJvZHVjdC5zZWxlY3RlZFByb2R1Y3RDb2xvciAmJlxyXG4gICAgICAgICAgcHJvZHVjdC5zZWxlY3RlZFByb2R1Y3RDb2xvciA9PT0gaXRlbS5zZWxlY3RlZFByb2R1Y3RDb2xvciAmJlxyXG4gICAgICAgICAgcHJvZHVjdC5zZWxlY3RlZFByb2R1Y3RTaXplICYmXHJcbiAgICAgICAgICBwcm9kdWN0LnNlbGVjdGVkUHJvZHVjdFNpemUgPT09IGl0ZW0uc2VsZWN0ZWRQcm9kdWN0U2l6ZSAmJlxyXG4gICAgICAgICAgKHByb2R1Y3QuY2FydEl0ZW1JZCA/IHByb2R1Y3QuY2FydEl0ZW1JZCA9PT0gaXRlbS5jYXJ0SXRlbUlkIDogdHJ1ZSlcclxuICAgICAgKVswXTtcclxuXHJcbiAgICAgIGlmIChjYXJ0SXRlbSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIC4uLmNhcnRJdGVtcyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHkgPyBwcm9kdWN0LnF1YW50aXR5IDogMSxcclxuICAgICAgICAgICAgY2FydEl0ZW1JZDogdXVpZHY0KClcclxuICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgIGNhcnRJdGVtICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAoY2FydEl0ZW0uc2VsZWN0ZWRQcm9kdWN0Q29sb3IgIT09IHByb2R1Y3Quc2VsZWN0ZWRQcm9kdWN0Q29sb3IgfHxcclxuICAgICAgICAgIGNhcnRJdGVtLnNlbGVjdGVkUHJvZHVjdFNpemUgIT09IHByb2R1Y3Quc2VsZWN0ZWRQcm9kdWN0U2l6ZSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIC4uLmNhcnRJdGVtcyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4ucHJvZHVjdCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHkgPyBwcm9kdWN0LnF1YW50aXR5IDogMSxcclxuICAgICAgICAgICAgY2FydEl0ZW1JZDogdXVpZHY0KClcclxuICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbS5jYXJ0SXRlbUlkID09PSBjYXJ0SXRlbS5jYXJ0SXRlbUlkXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgID8gaXRlbS5xdWFudGl0eSArIHByb2R1Y3QucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgOiBpdGVtLnF1YW50aXR5ICsgMSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUHJvZHVjdENvbG9yOiBwcm9kdWN0LnNlbGVjdGVkUHJvZHVjdENvbG9yLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRQcm9kdWN0U2l6ZTogcHJvZHVjdC5zZWxlY3RlZFByb2R1Y3RTaXplXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IGl0ZW1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IERFQ1JFQVNFX1FVQU5USVRZKSB7XHJcbiAgICBpZiAocHJvZHVjdC5xdWFudGl0eSA9PT0gMSkge1xyXG4gICAgICBjb25zdCByZW1haW5pbmdJdGVtcyA9IChjYXJ0SXRlbXMsIHByb2R1Y3QpID0+XHJcbiAgICAgICAgY2FydEl0ZW1zLmZpbHRlcihcclxuICAgICAgICAgIChjYXJ0SXRlbSkgPT4gY2FydEl0ZW0uY2FydEl0ZW1JZCAhPT0gcHJvZHVjdC5jYXJ0SXRlbUlkXHJcbiAgICAgICAgKTtcclxuICAgICAgcmV0dXJuIHJlbWFpbmluZ0l0ZW1zKGNhcnRJdGVtcywgcHJvZHVjdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICBpdGVtLmNhcnRJdGVtSWQgPT09IHByb2R1Y3QuY2FydEl0ZW1JZFxyXG4gICAgICAgICAgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5IC0gMSB9XHJcbiAgICAgICAgICA6IGl0ZW1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gREVMRVRFX0ZST01fQ0FSVCkge1xyXG4gICAgY29uc3QgcmVtYWluaW5nSXRlbXMgPSAoY2FydEl0ZW1zLCBwcm9kdWN0KSA9PlxyXG4gICAgICBjYXJ0SXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChjYXJ0SXRlbSkgPT4gY2FydEl0ZW0uY2FydEl0ZW1JZCAhPT0gcHJvZHVjdC5jYXJ0SXRlbUlkXHJcbiAgICAgICk7XHJcbiAgICByZXR1cm4gcmVtYWluaW5nSXRlbXMoY2FydEl0ZW1zLCBwcm9kdWN0KTtcclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gREVMRVRFX0FMTF9GUk9NX0NBUlQpIHtcclxuICAgIHJldHVybiBjYXJ0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNhdGVnb3J5Q29uc3RhbnRzIH0gZnJvbSBcIi4uL2FjdGlvbnMvY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHsgXHJcbiAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IG51bGxcclxufVxyXG5cclxuY29uc3QgYnVpbGROZXdDYXRlZ29yaWVzID0gKHBhcmVudElkLCBjYXRlZ29yaWVzLCBjYXRlZ29yeSApID0+IHtcclxuICAgIGxldCBteUNhdGVnb3JpZXMgPSBbXVxyXG5cclxuICAgIGlmKHBhcmVudElkID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uY2F0ZWdvcmllcyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgX2lkOiBjYXRlZ29yeS5faWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBjYXRlZ29yeS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2x1ZzogY2F0ZWdvcnkuc2x1ZyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SW1hZ2U6IGNhdGVnb3J5LmNhdGVnb3J5SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGNhdCBvZiBjYXRlZ29yaWVzKXtcclxuXHJcbiAgICAgICAgaWYoY2F0Ll9pZCA9PSBwYXJlbnRJZCl7XHJcbiAgICAgICAgICAgIG15Q2F0ZWdvcmllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC4uLmNhdCxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBjYXQuY2hpbGRyZW4gPyBidWlsZE5ld0NhdGVnb3JpZXMocGFyZW50SWQsIFsuLi5jYXQuY2hpbGRyZW4sIHtcclxuICAgICAgICAgICAgICAgICAgICBfaWQ6IGNhdGVnb3J5Ll9pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjYXRlZ29yeS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsdWc6IGNhdGVnb3J5LnNsdWcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IGNhdGVnb3J5LnBhcmVudElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5SW1hZ2U6IGNhdGVnb3J5LmNhdGVnb3J5SW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGNhdGVnb3J5LmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9XSwgY2F0ZWdvcnkpIDogW11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIG15Q2F0ZWdvcmllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC4uLmNhdCxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBjYXQuY2hpbGRyZW4gPyBidWlsZE5ld0NhdGVnb3JpZXMocGFyZW50SWQsIGNhdC5jaGlsZHJlbiwgY2F0ZWdvcnkpIDogW11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBteUNhdGVnb3JpZXNcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBjYXRlZ29yeUNvbnN0YW50cy5HRVRfQ0FURUdPUklFU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBjYXRlZ29yeUNvbnN0YW50cy5BRERfTkVXX0NBVEVHT1JZX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIGNhdGVnb3J5Q29uc3RhbnRzLkFERF9ORVdfQ0FURUdPUllfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGJ1aWxkTmV3Q2F0ZWdvcmllcyhjYXRlZ29yeS5wYXJlbnRJZCwgc3RhdGUuY2F0ZWdvcmllcywgY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRDYXRlZ29yaWVzKVxyXG4gICAgICAgICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogdXBkYXRlZENhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBjYXRlZ29yeUNvbnN0YW50cy5BRERfTkVXX0NBVEVHT1JZX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uaW5pdFN0YXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZVxyXG59IiwiaW1wb3J0IHsgQUREX1RPX0NPTVBBUkUsIERFTEVURV9GUk9NX0NPTVBBUkUgfSBmcm9tIFwiLi4vYWN0aW9ucy9jb21wYXJlQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0gW107XHJcblxyXG5jb25zdCBjb21wYXJlUmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgY29tcGFyZUl0ZW1zID0gc3RhdGUsXHJcbiAgICBwcm9kdWN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NPTVBBUkUpIHtcclxuICAgIGNvbnN0IGNvbXBhcmVJdGVtID0gY29tcGFyZUl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpWzBdO1xyXG4gICAgaWYgKGNvbXBhcmVJdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIFsuLi5jb21wYXJlSXRlbXMsIHByb2R1Y3RdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGNvbXBhcmVJdGVtcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gREVMRVRFX0ZST01fQ09NUEFSRSkge1xyXG4gICAgY29uc3QgcmVtYWluaW5nSXRlbXMgPSAoY29tcGFyZUl0ZW1zLCBwcm9kdWN0KSA9PlxyXG4gICAgICBjb21wYXJlSXRlbXMuZmlsdGVyKGNvbXBhcmVJdGVtID0+IGNvbXBhcmVJdGVtLmlkICE9PSBwcm9kdWN0LmlkKTtcclxuICAgIHJldHVybiByZW1haW5pbmdJdGVtcyhjb21wYXJlSXRlbXMsIHByb2R1Y3QpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBhcmVJdGVtcztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmVSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBGRVRDSF9QUk9EVUNUU19TVUNDRVNTIH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdEFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IFtdO1xyXG5cclxuY29uc3QgcHJvZHVjdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gRkVUQ0hfUFJPRFVDVFNfU1VDQ0VTUykge1xyXG4gICAgcmV0dXJuIHN0YXRlLmNvbmNhdChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgcHJvZHVjdENvbnN0YW50cyB9IGZyb20gXCIuLi9hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gIHByb2R1Y3RzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9QUk9EVUNUU19CWV9TTFVHOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQucHJvZHVjdHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9QUk9EVUNUU19CWV9NQUlOX0NBVEVHT1JZOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQucHJvZHVjdHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9QUk9EVUNUU19CWV9NQUlOX0NBVEVHT1JZX0FORF9TRUFSQ0g6XHJcbiAgICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0cyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9BTExfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RzLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgcHJvZHVjdENvbnN0YW50cy5HRVRfQUxMX1BST0RVQ1RTX0ZST01fUFJPRFVDVFM6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0cyxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHByb2R1Y3RDb25zdGFudHMuR0VUX0NBVEVHT1JZX1BST0RVQ1RTX0JZX1NFQVJDSF9TVUNDRVNTOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQucHJvZHVjdHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfRkFJTFVSRTpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgcHJvZHVjdENvbnN0YW50cy5HRVRfQUxMX1BST0RVQ1RTX0JZX1NFQVJDSDpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RzLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG4iLCJpbXBvcnQgcHJvZHVjdFJlZHVjZXIgZnJvbSBcIi4vcHJvZHVjdFJlZHVjZXJcIjtcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnRSZWR1Y2VyXCI7XHJcbmltcG9ydCB3aXNobGlzdFJlZHVjZXIgZnJvbSBcIi4vd2lzaGxpc3RSZWR1Y2VyXCI7XHJcbmltcG9ydCBjb21wYXJlUmVkdWNlciBmcm9tIFwiLi9jb21wYXJlUmVkdWNlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNhdGVnb3JpZXNSZWR1Y2VyIGZyb20gJy4vY2F0ZWdvcmllc1JlZHVjZXInXHJcbmltcG9ydCBwcm9kdWN0c1JlZHVjZXIgZnJvbSAnLi9wcm9kdWN0c1JlZHVjZXInXHJcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tIFwiLi9hdXRoUmVkdWNlclwiO1xyXG5cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0RGF0YTogcHJvZHVjdFJlZHVjZXIsXHJcbiAgY2FydERhdGE6IGNhcnRSZWR1Y2VyLFxyXG4gIHdpc2hsaXN0RGF0YTogd2lzaGxpc3RSZWR1Y2VyLFxyXG4gIGNvbXBhcmVEYXRhOiBjb21wYXJlUmVkdWNlcixcclxuICBjYXRlZ29yeTogY2F0ZWdvcmllc1JlZHVjZXIsXHJcbiAgcHJvZHVjdDogcHJvZHVjdHNSZWR1Y2VyLFxyXG4gIGF1dGg6IGF1dGhSZWR1Y2VyXHJcbiAgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7XHJcbiAgQUREX1RPX1dJU0hMSVNULFxyXG4gIERFTEVURV9GUk9NX1dJU0hMSVNULFxyXG4gIERFTEVURV9BTExfRlJPTV9XSVNITElTVFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3dpc2hsaXN0QWN0aW9uc1wiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0gW107XHJcblxyXG5jb25zdCB3aXNobGlzdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHdpc2hsaXN0SXRlbXMgPSBzdGF0ZSxcclxuICAgIHByb2R1Y3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSBBRERfVE9fV0lTSExJU1QpIHtcclxuICAgIGNvbnN0IHdpc2hsaXN0SXRlbSA9IHdpc2hsaXN0SXRlbXMuZmlsdGVyKFxyXG4gICAgICBpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcclxuICAgIClbMF07XHJcbiAgICBpZiAod2lzaGxpc3RJdGVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIFsuLi53aXNobGlzdEl0ZW1zLCBwcm9kdWN0XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB3aXNobGlzdEl0ZW1zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGFjdGlvbi50eXBlID09PSBERUxFVEVfRlJPTV9XSVNITElTVCkge1xyXG4gICAgY29uc3QgcmVtYWluaW5nSXRlbXMgPSAod2lzaGxpc3RJdGVtcywgcHJvZHVjdCkgPT5cclxuICAgICAgd2lzaGxpc3RJdGVtcy5maWx0ZXIod2lzaGxpc3RJdGVtID0+IHdpc2hsaXN0SXRlbS5pZCAhPT0gcHJvZHVjdC5pZCk7XHJcbiAgICByZXR1cm4gcmVtYWluaW5nSXRlbXMod2lzaGxpc3RJdGVtcywgcHJvZHVjdCk7XHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IERFTEVURV9BTExfRlJPTV9XSVNITElTVCkge1xyXG4gICAgcmV0dXJuIHdpc2hsaXN0SXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aXNobGlzdEl0ZW1zO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2lzaGxpc3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogXCJwcmltYXJ5XCIsXHJcbiAgc3RvcmFnZVxyXG59O1xyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU3RvcmUoKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxyXG4gICAgcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9