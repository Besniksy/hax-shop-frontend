webpackHotUpdate("static\\development\\pages\\shop.js",{

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! exports provided: getAllCategories, getProductsBySlug, getProductsByMainCategory, getProductsByMainCategoryAndSearch, getAllProducts, getCategoryProductBySearch, getAllProductBySearch, getInitialData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _categoriesActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoriesActions */ "./src/redux/actions/categoriesActions.js");
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





;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/actions/productsActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/productsActions.js ***!
  \**********************************************/
/*! exports provided: getProductsBySlug, getProductsByMainCategory, getProductsByMainCategoryAndSearch, getAllProducts, getCategoryProductBySearch, getAllProductBySearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return getProductsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByMainCategory", function() { return getProductsByMainCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByMainCategoryAndSearch", function() { return getProductsByMainCategoryAndSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProducts", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryProductBySearch", function() { return getCategoryProductBySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProductBySearch", function() { return getAllProductBySearch; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/axios */ "./src/helpers/axios.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");




var getProductsBySlug = function getProductsBySlug(slug) {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/products/".concat(slug));

            case 2:
              res = _context.sent;

              if (res.status === 200) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["productConstants"].GET_PRODUCTS_BY_SLUG,
                  payload: res.data
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getProductsByMainCategory = function getProductsByMainCategory(cate) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/productsbycategory/".concat(cate));

            case 2:
              res = _context2.sent;

              if (res.status === 200) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["productConstants"].GET_PRODUCTS_BY_MAIN_CATEGORY,
                  payload: res.data
                });
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var getProductsByMainCategoryAndSearch = function getProductsByMainCategoryAndSearch(cate, search) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/productsbycategoryandsearch/".concat(cate, "?name=").concat(search));

            case 2:
              res = _context3.sent;

              if (res.status === 200) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["productConstants"].GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH,
                  payload: res.data
                });
              }

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getAllProducts = function getAllProducts() {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/products");

            case 2:
              res = _context4.sent;

              if (res.status === 200) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["productConstants"].GET_ALL_PRODUCTS_FROM_PRODUCTS,
                  payload: res.data
                });
              }

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var getCategoryProductBySearch = function getCategoryProductBySearch(slug, search) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(slug !== undefined)) {
                _context5.next = 4;
                break;
              }

              _context5.next = 3;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/productssearch/".concat(slug, "?name=").concat(search));

            case 3:
              res = _context5.sent;

            case 4:
              if (res.status === 200) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["productConstants"].GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS,
                  payload: res.data
                });
              } else {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["productConstants"].GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE,
                  payload: {
                    error: res.data.error
                  }
                });
              }

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var getAllProductBySearch = function getAllProductBySearch(search) {
  return /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(dispatch) {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("/allproducts?name=".concat(search));

            case 2:
              res = _context6.sent;

              if (res.status === 200) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["productConstants"].GET_ALL_PRODUCTS_BY_SEARCH,
                  payload: res.data
                });
              }

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9wcm9kdWN0c0FjdGlvbnMuanMiXSwibmFtZXMiOlsiZ2V0UHJvZHVjdHNCeVNsdWciLCJzbHVnIiwiZGlzcGF0Y2giLCJheGlvc0luc3RhbmNlIiwiZ2V0IiwicmVzIiwic3RhdHVzIiwidHlwZSIsInByb2R1Y3RDb25zdGFudHMiLCJHRVRfUFJPRFVDVFNfQllfU0xVRyIsInBheWxvYWQiLCJkYXRhIiwiZ2V0UHJvZHVjdHNCeU1haW5DYXRlZ29yeSIsImNhdGUiLCJHRVRfUFJPRFVDVFNfQllfTUFJTl9DQVRFR09SWSIsImdldFByb2R1Y3RzQnlNYWluQ2F0ZWdvcnlBbmRTZWFyY2giLCJzZWFyY2giLCJHRVRfUFJPRFVDVFNfQllfTUFJTl9DQVRFR09SWV9BTkRfU0VBUkNIIiwiZ2V0QWxsUHJvZHVjdHMiLCJHRVRfQUxMX1BST0RVQ1RTX0ZST01fUFJPRFVDVFMiLCJnZXRDYXRlZ29yeVByb2R1Y3RCeVNlYXJjaCIsInVuZGVmaW5lZCIsIkdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfU1VDQ0VTUyIsIkdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfRkFJTFVSRSIsImVycm9yIiwiZ2V0QWxsUHJvZHVjdEJ5U2VhcmNoIiwiR0VUX0FMTF9QUk9EVUNUU19CWV9TRUFSQ0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFTyxJQUFN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ZTIxYzYwYmQyNjk3OTUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2NhdGVnb3JpZXNBY3Rpb25zJ1xyXG5leHBvcnQgKiBmcm9tICcuL3Byb2R1Y3RzQWN0aW9ucydcclxuZXhwb3J0ICogZnJvbSAnLi9pbml0aWFsRGF0YUFjdGlvbnMnIiwiaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXhpb3NcIlxyXG5pbXBvcnQgeyBwcm9kdWN0Q29uc3RhbnRzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5U2x1ZyA9IChzbHVnKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KGAvcHJvZHVjdHMvJHtzbHVnfWApXHJcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogcHJvZHVjdENvbnN0YW50cy5HRVRfUFJPRFVDVFNfQllfU0xVRyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeU1haW5DYXRlZ29yeSA9IChjYXRlKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KGAvcHJvZHVjdHNieWNhdGVnb3J5LyR7Y2F0ZX1gKVxyXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHByb2R1Y3RDb25zdGFudHMuR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUlksXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlNYWluQ2F0ZWdvcnlBbmRTZWFyY2ggPSAoY2F0ZSwgc2VhcmNoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KGAvcHJvZHVjdHNieWNhdGVnb3J5YW5kc2VhcmNoLyR7Y2F0ZX0/bmFtZT0ke3NlYXJjaH1gKVxyXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHByb2R1Y3RDb25zdGFudHMuR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUllfQU5EX1NFQVJDSCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KGAvcHJvZHVjdHNgKVxyXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHByb2R1Y3RDb25zdGFudHMuR0VUX0FMTF9QUk9EVUNUU19GUk9NX1BST0RVQ1RTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeVByb2R1Y3RCeVNlYXJjaCA9IChzbHVnLCBzZWFyY2gpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgbGV0IHJlc1xyXG4gICAgICAgIGlmKHNsdWcgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KGAvcHJvZHVjdHNzZWFyY2gvJHtzbHVnfT9uYW1lPSR7c2VhcmNofWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHByb2R1Y3RDb25zdGFudHMuR0VUX0NBVEVHT1JZX1BST0RVQ1RTX0JZX1NFQVJDSF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogcHJvZHVjdENvbnN0YW50cy5HRVRfQ0FURUdPUllfUFJPRFVDVFNfQllfU0VBUkNIX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5kYXRhLmVycm9yfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFByb2R1Y3RCeVNlYXJjaCA9IChzZWFyY2gpID0+IHtcclxuICAgIHJldHVybiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYC9hbGxwcm9kdWN0cz9uYW1lPSR7c2VhcmNofWApXHJcbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogcHJvZHVjdENvbnN0YW50cy5HRVRfQUxMX1BST0RVQ1RTX0JZX1NFQVJDSCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==