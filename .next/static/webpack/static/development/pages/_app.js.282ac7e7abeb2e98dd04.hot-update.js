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
    loginEmail: "",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdFN0YXRlIiwidG9rZW4iLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJsb2dpbkVtYWlsIiwicGljdHVyZSIsImF1dGhlbnRpY2F0ZSIsImF1dGhlbnRpY2F0aW5nIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJhdXRoQ29uc3RhbnRzIiwiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX1NVQ0NFU1MiLCJwYXlsb2FkIiwiTE9HT1VUX1JFUVVFU1QiLCJMT0dPVVRfU1VDQ0VTUyIsIkxPR09VVF9GQUlMVVJFIiwiU0lHTlVQX1JFUVVFU1QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLE9BQUssRUFBRSxJQURTO0FBRWhCQyxNQUFJLEVBQUU7QUFDSkMsYUFBUyxFQUFFLEVBRFA7QUFFSkMsWUFBUSxFQUFFLEVBRk47QUFHSkMsY0FBVSxFQUFFLEVBSFI7QUFJSkMsV0FBTyxFQUFFO0FBSkwsR0FGVTtBQVFoQkMsY0FBWSxFQUFFLEtBUkU7QUFTaEJDLGdCQUFjLEVBQUUsS0FUQTtBQVVoQkMsU0FBTyxFQUFFLEtBVk87QUFXaEJDLE9BQUssRUFBRSxJQVhTO0FBWWhCQyxTQUFPLEVBQUU7QUFaTyxDQUFsQjtBQWVlLDJFQUErQjtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJaLFNBQXNCO0FBQUEsTUFBWGEsTUFBVztBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7O0FBRUEsVUFBUUEsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsU0FBS0MsZ0VBQWEsQ0FBQ0MsYUFBbkI7QUFDRU4sV0FBSyxtQ0FDQUEsS0FEQTtBQUVISixzQkFBYyxFQUFFO0FBRmIsUUFBTDtBQUlBOztBQUNGLFNBQUtTLGdFQUFhLENBQUNFLGFBQW5CO0FBQ0VQLFdBQUssbUNBQ0FBLEtBREE7QUFFSFYsWUFBSSxFQUFFVyxNQUFNLENBQUNPLE9BQVAsQ0FBZWxCLElBRmxCO0FBR0hELGFBQUssRUFBRVksTUFBTSxDQUFDTyxPQUFQLENBQWVuQixLQUhuQjtBQUlITSxvQkFBWSxFQUFFLElBSlg7QUFLSEMsc0JBQWMsRUFBRTtBQUxiLFFBQUw7QUFPQTs7QUFDRixTQUFLUyxnRUFBYSxDQUFDSSxjQUFuQjtBQUNFVCxXQUFLLG1DQUNBQSxLQURBO0FBRUhILGVBQU8sRUFBRTtBQUZOLFFBQUw7QUFJQTs7QUFDRixTQUFLUSxnRUFBYSxDQUFDSyxjQUFuQjtBQUNFVixXQUFLLHFCQUNBWixTQURBLENBQUw7QUFHQTs7QUFDRixTQUFLaUIsZ0VBQWEsQ0FBQ00sY0FBbkI7QUFDRVgsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRixhQUFLLEVBQUVHLE1BQU0sQ0FBQ08sT0FBUCxDQUFlVixLQUZuQjtBQUdIRCxlQUFPLEVBQUU7QUFITixRQUFMO0FBS0E7O0FBQ0YsU0FBS1EsZ0VBQWEsQ0FBQ08sY0FBbkI7QUFDRTs7QUFDRixTQUFLUCxnRUFBYSxDQUFDUSxjQUFuQjtBQUNFOztBQUNGLFNBQUtSLGdFQUFhLENBQUNTLGNBQW5CO0FBQ0VkLFdBQUssbUNBQ0FBLEtBREE7QUFFSEYsYUFBSyxFQUFFRyxNQUFNLENBQUNPLE9BQVAsQ0FBZVY7QUFGbkIsUUFBTDtBQUlBO0FBM0NKOztBQThDQSxTQUFPRSxLQUFQO0FBQ0QsQ0FsREQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMjgyYWM3ZTdhYmViMmU5OGRkMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhDb25zdGFudHMgfSBmcm9tIFwiLi4vYWN0aW9ucy9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICB0b2tlbjogbnVsbCxcclxuICB1c2VyOiB7XHJcbiAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGxvZ2luRW1haWw6IFwiXCIsXHJcbiAgICBwaWN0dXJlOiBcIlwiLFxyXG4gIH0sXHJcbiAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICBhdXRoZW50aWNhdGluZzogZmFsc2UsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgbWVzc2FnZTogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGF1dGhlbnRpY2F0aW5nOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dJTl9TVUNDRVNTOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxyXG4gICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZC50b2tlbixcclxuICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgYXV0aGVudGljYXRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dPVVRfUkVRVUVTVDpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuTE9HT1VUX1NVQ0NFU1M6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLmluaXRTdGF0ZSxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuTE9HT1VUX0ZBSUxVUkU6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZC5lcnJvcixcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuU0lHTlVQX1JFUVVFU1Q6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLlNJR05VUF9TVUNDRVNTOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5TSUdOVVBfRkFJTFVSRTpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLmVycm9yLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9