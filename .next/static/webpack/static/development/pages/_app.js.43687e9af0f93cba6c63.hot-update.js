webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/redux/reducers/authReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/authReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initState = {
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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log(action);

  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].LOGIN_REQUEST:
      state = _objectSpread(_objectSpread({}, state), {}, {
        authenticating: true
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].LOGIN_SUCCESS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].LOGOUT_REQUEST:
      state = _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].LOGOUT_SUCCESS:
      state = _objectSpread({}, initState);
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].LOGOUT_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload.error,
        loading: false
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].SIGNUP_REQUEST:
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].SIGNUP_SUCCESS:
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].SIGNUP_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload.error
      });
      break;
  }

  return state;
});

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

/***/ "./src/redux/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _productReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productReducer */ "./src/redux/reducers/productReducer.js");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlistReducer */ "./src/redux/reducers/wishlistReducer.js");
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compareReducer */ "./src/redux/reducers/compareReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _categoriesReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoriesReducer */ "./src/redux/reducers/categoriesReducer.js");
/* harmony import */ var _productsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productsReducer */ "./src/redux/reducers/productsReducer.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authReducer */ "./src/redux/reducers/authReducer.js");








var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  productData: _productReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  cartData: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  wishlistData: _wishlistReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  compareData: _compareReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  category: _categoriesReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  product: _productsReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  auth: _authReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRTdGF0ZSIsInRva2VuIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiYXV0aGVudGljYXRlIiwiYXV0aGVudGljYXRpbmciLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsImF1dGhDb25zdGFudHMiLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsInBheWxvYWQiLCJMT0dPVVRfUkVRVUVTVCIsIkxPR09VVF9TVUNDRVNTIiwiTE9HT1VUX0ZBSUxVUkUiLCJTSUdOVVBfUkVRVUVTVCIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUxVUkUiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInByb2R1Y3REYXRhIiwicHJvZHVjdFJlZHVjZXIiLCJjYXJ0RGF0YSIsImNhcnRSZWR1Y2VyIiwid2lzaGxpc3REYXRhIiwid2lzaGxpc3RSZWR1Y2VyIiwiY29tcGFyZURhdGEiLCJjb21wYXJlUmVkdWNlciIsImNhdGVnb3J5IiwiY2F0ZWdvcmllc1JlZHVjZXIiLCJwcm9kdWN0IiwicHJvZHVjdHNSZWR1Y2VyIiwiYXV0aCIsImF1dGhSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLE9BQUssRUFBRSxJQURTO0FBRWhCQyxNQUFJLEVBQUU7QUFDSkMsYUFBUyxFQUFFLEVBRFA7QUFFSkMsWUFBUSxFQUFFLEVBRk47QUFHSkMsU0FBSyxFQUFFLEVBSEg7QUFJSkMsV0FBTyxFQUFFO0FBSkwsR0FGVTtBQVFoQkMsY0FBWSxFQUFFLEtBUkU7QUFTaEJDLGdCQUFjLEVBQUUsS0FUQTtBQVVoQkMsU0FBTyxFQUFFLEtBVk87QUFXaEJDLE9BQUssRUFBRSxJQVhTO0FBWWhCQyxTQUFPLEVBQUU7QUFaTyxDQUFsQjtBQWVlLDJFQUErQjtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJaLFNBQXNCO0FBQUEsTUFBWGEsTUFBVztBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7O0FBRUEsVUFBUUEsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsU0FBS0MsZ0VBQWEsQ0FBQ0MsYUFBbkI7QUFDRU4sV0FBSyxtQ0FDQUEsS0FEQTtBQUVISixzQkFBYyxFQUFFO0FBRmIsUUFBTDtBQUlBOztBQUNGLFNBQUtTLGdFQUFhLENBQUNFLGFBQW5CO0FBQ0VQLFdBQUssbUNBQ0FBLEtBREE7QUFFSFYsWUFBSSxFQUFFVyxNQUFNLENBQUNPLE9BQVAsQ0FBZWxCLElBRmxCO0FBR0hELGFBQUssRUFBRVksTUFBTSxDQUFDTyxPQUFQLENBQWVuQixLQUhuQjtBQUlITSxvQkFBWSxFQUFFLElBSlg7QUFLSEMsc0JBQWMsRUFBRTtBQUxiLFFBQUw7QUFPQTs7QUFDRixTQUFLUyxnRUFBYSxDQUFDSSxjQUFuQjtBQUNFVCxXQUFLLG1DQUNBQSxLQURBO0FBRUhILGVBQU8sRUFBRTtBQUZOLFFBQUw7QUFJQTs7QUFDRixTQUFLUSxnRUFBYSxDQUFDSyxjQUFuQjtBQUNFVixXQUFLLHFCQUNBWixTQURBLENBQUw7QUFHQTs7QUFDRixTQUFLaUIsZ0VBQWEsQ0FBQ00sY0FBbkI7QUFDRVgsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRixhQUFLLEVBQUVHLE1BQU0sQ0FBQ08sT0FBUCxDQUFlVixLQUZuQjtBQUdIRCxlQUFPLEVBQUU7QUFITixRQUFMO0FBS0E7O0FBQ0YsU0FBS1EsZ0VBQWEsQ0FBQ08sY0FBbkI7QUFDRTs7QUFDRixTQUFLUCxnRUFBYSxDQUFDUSxjQUFuQjtBQUNFOztBQUNGLFNBQUtSLGdFQUFhLENBQUNTLGNBQW5CO0FBQ0VkLFdBQUssbUNBQ0FBLEtBREE7QUFFSEYsYUFBSyxFQUFFRyxNQUFNLENBQUNPLE9BQVAsQ0FBZVY7QUFGbkIsUUFBTDtBQUlBO0FBM0NKOztBQThDQSxTQUFPRSxLQUFQO0FBQ0QsQ0FsREQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTWUsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxhQUFXLEVBQUVDLHVEQURxQjtBQUVsQ0MsVUFBUSxFQUFFQyxvREFGd0I7QUFHbENDLGNBQVksRUFBRUMsd0RBSG9CO0FBSWxDQyxhQUFXLEVBQUVDLHVEQUpxQjtBQUtsQ0MsVUFBUSxFQUFFQywwREFMd0I7QUFNbENDLFNBQU8sRUFBRUMsd0RBTnlCO0FBT2xDQyxNQUFJLEVBQUVDLG9EQUFXQTtBQVBpQixDQUFELENBQW5DO0FBV2VmLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjQzNjg3ZTlhZjBmOTNjYmE2YzYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2FjdGlvbnMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgdG9rZW46IG51bGwsXHJcbiAgdXNlcjoge1xyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBpY3R1cmU6IFwiXCIsXHJcbiAgfSxcclxuICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gIGF1dGhlbnRpY2F0aW5nOiBmYWxzZSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBtZXNzYWdlOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuTE9HSU5fUkVRVUVTVDpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYXV0aGVudGljYXRpbmc6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLnRva2VuLFxyXG4gICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICBhdXRoZW50aWNhdGluZzogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR09VVF9SRVFVRVNUOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dPVVRfU1VDQ0VTUzpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uaW5pdFN0YXRlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dPVVRfRkFJTFVSRTpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLmVycm9yLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5TSUdOVVBfUkVRVUVTVDpcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLlNJR05VUF9GQUlMVVJFOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQuZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59OyIsImltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0UmVkdWNlclwiO1xyXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydFJlZHVjZXJcIjtcclxuaW1wb3J0IHdpc2hsaXN0UmVkdWNlciBmcm9tIFwiLi93aXNobGlzdFJlZHVjZXJcIjtcclxuaW1wb3J0IGNvbXBhcmVSZWR1Y2VyIGZyb20gXCIuL2NvbXBhcmVSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY2F0ZWdvcmllc1JlZHVjZXIgZnJvbSAnLi9jYXRlZ29yaWVzUmVkdWNlcidcclxuaW1wb3J0IHByb2R1Y3RzUmVkdWNlciBmcm9tICcuL3Byb2R1Y3RzUmVkdWNlcidcclxuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gXCIuL2F1dGhSZWR1Y2VyXCI7XHJcblxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHByb2R1Y3REYXRhOiBwcm9kdWN0UmVkdWNlcixcclxuICBjYXJ0RGF0YTogY2FydFJlZHVjZXIsXHJcbiAgd2lzaGxpc3REYXRhOiB3aXNobGlzdFJlZHVjZXIsXHJcbiAgY29tcGFyZURhdGE6IGNvbXBhcmVSZWR1Y2VyLFxyXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzUmVkdWNlcixcclxuICBwcm9kdWN0OiBwcm9kdWN0c1JlZHVjZXIsXHJcbiAgYXV0aDogYXV0aFJlZHVjZXJcclxuICBcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==