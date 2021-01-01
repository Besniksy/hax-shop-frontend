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

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["authConstants"].LOGIN_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload.error,
        message: 'diqka'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdFN0YXRlIiwidG9rZW4iLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJhdXRoZW50aWNhdGUiLCJhdXRoZW50aWNhdGluZyIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYXV0aENvbnN0YW50cyIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwicGF5bG9hZCIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSIsIkxPR0lOX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFLElBRFM7QUFFaEJDLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUUsRUFEUDtBQUVKQyxZQUFRLEVBQUUsRUFGTjtBQUdKQyxTQUFLLEVBQUUsRUFISDtBQUlKQyxXQUFPLEVBQUU7QUFKTCxHQUZVO0FBUWhCQyxjQUFZLEVBQUUsS0FSRTtBQVNoQkMsZ0JBQWMsRUFBRSxLQVRBO0FBVWhCQyxTQUFPLEVBQUUsS0FWTztBQVdoQkMsT0FBSyxFQUFFLElBWFM7QUFZaEJDLFNBQU8sRUFBRTtBQVpPLENBQWxCO0FBZWUsMkVBQStCO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QlosU0FBc0I7QUFBQSxNQUFYYSxNQUFXO0FBQzVDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFFQSxVQUFRQSxNQUFNLENBQUNHLElBQWY7QUFDRSxTQUFLQyxnRUFBYSxDQUFDQyxhQUFuQjtBQUNFTixXQUFLLG1DQUNBQSxLQURBO0FBRUhKLHNCQUFjLEVBQUU7QUFGYixRQUFMO0FBSUE7O0FBQ0YsU0FBS1MsZ0VBQWEsQ0FBQ0UsYUFBbkI7QUFDRVAsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIVixZQUFJLEVBQUVXLE1BQU0sQ0FBQ08sT0FBUCxDQUFlbEIsSUFGbEI7QUFHSEQsYUFBSyxFQUFFWSxNQUFNLENBQUNPLE9BQVAsQ0FBZW5CLEtBSG5CO0FBSUhNLG9CQUFZLEVBQUUsSUFKWDtBQUtIQyxzQkFBYyxFQUFFO0FBTGIsUUFBTDtBQU9BOztBQUVGLFNBQUtTLGdFQUFhLENBQUNJLGNBQW5CO0FBQ0VULFdBQUssbUNBQ0FBLEtBREE7QUFFSEgsZUFBTyxFQUFFO0FBRk4sUUFBTDtBQUlBOztBQUNGLFNBQUtRLGdFQUFhLENBQUNLLGNBQW5CO0FBQ0VWLFdBQUsscUJBQ0FaLFNBREEsQ0FBTDtBQUdBOztBQUNGLFNBQUtpQixnRUFBYSxDQUFDTSxjQUFuQjtBQUNFWCxXQUFLLG1DQUNBQSxLQURBO0FBRUhGLGFBQUssRUFBRUcsTUFBTSxDQUFDTyxPQUFQLENBQWVWLEtBRm5CO0FBR0hELGVBQU8sRUFBRTtBQUhOLFFBQUw7QUFLQTs7QUFDRixTQUFLUSxnRUFBYSxDQUFDTyxjQUFuQjtBQUNFOztBQUNGLFNBQUtQLGdFQUFhLENBQUNRLGNBQW5CO0FBQ0U7O0FBQ0YsU0FBS1IsZ0VBQWEsQ0FBQ1MsY0FBbkI7QUFDRWQsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRixhQUFLLEVBQUVHLE1BQU0sQ0FBQ08sT0FBUCxDQUFlVjtBQUZuQixRQUFMO0FBSUE7O0FBQ0EsU0FBS08sZ0VBQWEsQ0FBQ1UsYUFBbkI7QUFDRWYsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRixhQUFLLEVBQUVHLE1BQU0sQ0FBQ08sT0FBUCxDQUFlVixLQUZuQjtBQUdIQyxlQUFPLEVBQUU7QUFITixRQUFMO0FBS0E7QUFuRE47O0FBc0RBLFNBQU9DLEtBQVA7QUFDRCxDQTFERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy45ZjIyM2Q1ZWY1MDU0MzNhNGFmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aENvbnN0YW50cyB9IGZyb20gXCIuLi9hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gIHRva2VuOiBudWxsLFxyXG4gIHVzZXI6IHtcclxuICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwaWN0dXJlOiBcIlwiLFxyXG4gIH0sXHJcbiAgYXV0aGVudGljYXRlOiBmYWxzZSxcclxuICBhdXRoZW50aWNhdGluZzogZmFsc2UsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgbWVzc2FnZTogXCJcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGF1dGhlbnRpY2F0aW5nOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dJTl9TVUNDRVNTOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxyXG4gICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZC50b2tlbixcclxuICAgICAgICBhdXRoZW50aWNhdGU6IHRydWUsXHJcbiAgICAgICAgYXV0aGVudGljYXRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuTE9HT1VUX1JFUVVFU1Q6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR09VVF9TVUNDRVNTOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5pbml0U3RhdGUsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR09VVF9GQUlMVVJFOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQuZXJyb3IsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLlNJR05VUF9SRVFVRVNUOlxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5TSUdOVVBfU1VDQ0VTUzpcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuU0lHTlVQX0ZBSUxVUkU6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZC5lcnJvcixcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dJTl9GQUlMVVJFOlxyXG4gICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQuZXJyb3IsXHJcbiAgICAgICAgICBtZXNzYWdlOiAnZGlxa2EnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9