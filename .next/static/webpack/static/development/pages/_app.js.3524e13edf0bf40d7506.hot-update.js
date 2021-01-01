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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdFN0YXRlIiwidG9rZW4iLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBpY3R1cmUiLCJhdXRoZW50aWNhdGUiLCJhdXRoZW50aWNhdGluZyIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYXV0aENvbnN0YW50cyIsIkxPR0lOX1JFUVVFU1QiLCJMT0dJTl9TVUNDRVNTIiwicGF5bG9hZCIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJMT0dPVVRfRkFJTFVSRSIsIlNJR05VUF9SRVFVRVNUIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUUsSUFEUztBQUVoQkMsTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRSxFQURQO0FBRUpDLFlBQVEsRUFBRSxFQUZOO0FBR0pDLFNBQUssRUFBRSxFQUhIO0FBSUpDLFdBQU8sRUFBRTtBQUpMLEdBRlU7QUFRaEJDLGNBQVksRUFBRSxLQVJFO0FBU2hCQyxnQkFBYyxFQUFFLEtBVEE7QUFVaEJDLFNBQU8sRUFBRSxLQVZPO0FBV2hCQyxPQUFLLEVBQUUsSUFYUztBQVloQkMsU0FBTyxFQUFFO0FBWk8sQ0FBbEI7QUFlZSwyRUFBK0I7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCWixTQUFzQjtBQUFBLE1BQVhhLE1BQVc7QUFDNUNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQUVBLFVBQVFBLE1BQU0sQ0FBQ0csSUFBZjtBQUNFLFNBQUtDLGdFQUFhLENBQUNDLGFBQW5CO0FBQ0VOLFdBQUssbUNBQ0FBLEtBREE7QUFFSEosc0JBQWMsRUFBRTtBQUZiLFFBQUw7QUFJQTs7QUFDRixTQUFLUyxnRUFBYSxDQUFDRSxhQUFuQjtBQUNFUCxXQUFLLG1DQUNBQSxLQURBO0FBRUhWLFlBQUksRUFBRVcsTUFBTSxDQUFDTyxPQUFQLENBQWVsQixJQUZsQjtBQUdIRCxhQUFLLEVBQUVZLE1BQU0sQ0FBQ08sT0FBUCxDQUFlbkIsS0FIbkI7QUFJSE0sb0JBQVksRUFBRSxJQUpYO0FBS0hDLHNCQUFjLEVBQUU7QUFMYixRQUFMO0FBT0E7O0FBQ0YsU0FBS1MsZ0VBQWEsQ0FBQ0ksY0FBbkI7QUFDRVQsV0FBSyxtQ0FDQUEsS0FEQTtBQUVISCxlQUFPLEVBQUU7QUFGTixRQUFMO0FBSUE7O0FBQ0YsU0FBS1EsZ0VBQWEsQ0FBQ0ssY0FBbkI7QUFDRVYsV0FBSyxxQkFDQVosU0FEQSxDQUFMO0FBR0E7O0FBQ0YsU0FBS2lCLGdFQUFhLENBQUNNLGNBQW5CO0FBQ0VYLFdBQUssbUNBQ0FBLEtBREE7QUFFSEYsYUFBSyxFQUFFRyxNQUFNLENBQUNPLE9BQVAsQ0FBZVYsS0FGbkI7QUFHSEQsZUFBTyxFQUFFO0FBSE4sUUFBTDtBQUtBOztBQUNGLFNBQUtRLGdFQUFhLENBQUNPLGNBQW5CO0FBQ0U7O0FBQ0YsU0FBS1AsZ0VBQWEsQ0FBQ1EsY0FBbkI7QUFDRTs7QUFDRixTQUFLUixnRUFBYSxDQUFDUyxjQUFuQjtBQUNFZCxXQUFLLG1DQUNBQSxLQURBO0FBRUhGLGFBQUssRUFBRUcsTUFBTSxDQUFDTyxPQUFQLENBQWVWO0FBRm5CLFFBQUw7QUFJQTtBQTNDSjs7QUE4Q0EsU0FBT0UsS0FBUDtBQUNELENBbEREIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjM1MjRlMTNlZGYwYmY0MGQ3NTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoQ29uc3RhbnRzIH0gZnJvbSBcIi4uL2FjdGlvbnMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgdG9rZW46IG51bGwsXHJcbiAgdXNlcjoge1xyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBpY3R1cmU6IFwiXCIsXHJcbiAgfSxcclxuICBhdXRoZW50aWNhdGU6IGZhbHNlLFxyXG4gIGF1dGhlbnRpY2F0aW5nOiBmYWxzZSxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBtZXNzYWdlOiBcIlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuTE9HSU5fUkVRVUVTVDpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYXV0aGVudGljYXRpbmc6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgdG9rZW46IGFjdGlvbi5wYXlsb2FkLnRva2VuLFxyXG4gICAgICAgIGF1dGhlbnRpY2F0ZTogdHJ1ZSxcclxuICAgICAgICBhdXRoZW50aWNhdGluZzogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLkxPR09VVF9SRVFVRVNUOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dPVVRfU1VDQ0VTUzpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uaW5pdFN0YXRlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5MT0dPVVRfRkFJTFVSRTpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLmVycm9yLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgYXV0aENvbnN0YW50cy5TSUdOVVBfUkVRVUVTVDpcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGF1dGhDb25zdGFudHMuU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBhdXRoQ29uc3RhbnRzLlNJR05VUF9GQUlMVVJFOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQuZXJyb3IsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=