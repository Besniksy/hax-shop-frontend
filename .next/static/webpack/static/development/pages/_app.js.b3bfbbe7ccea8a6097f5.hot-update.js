webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/redux/reducers/productsReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/productsReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/constants */ "./src/redux/actions/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initState = {
  products: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_PRODUCTS_BY_SLUG:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_PRODUCTS_BY_MAIN_CATEGORY:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_ALL_PRODUCTS_SUCCESS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_ALL_PRODUCTS_FROM_PRODUCTS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: action.payload
      });
      break;

    case _actions_constants__WEBPACK_IMPORTED_MODULE_1__["productConstants"].GET_ALL_PRODUCTS_BY_SEARCH:
      state = _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload.products
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcHJvZHVjdHNSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRTdGF0ZSIsInByb2R1Y3RzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdENvbnN0YW50cyIsIkdFVF9QUk9EVUNUU19CWV9TTFVHIiwicGF5bG9hZCIsIkdFVF9QUk9EVUNUU19CWV9NQUlOX0NBVEVHT1JZIiwiR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUllfQU5EX1NFQVJDSCIsIkdFVF9BTExfUFJPRFVDVFNfU1VDQ0VTUyIsIkdFVF9BTExfUFJPRFVDVFNfRlJPTV9QUk9EVUNUUyIsIkdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfU1VDQ0VTUyIsIkdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfRkFJTFVSRSIsImVycm9yIiwiR0VUX0FMTF9QUk9EVUNUU19CWV9TRUFSQ0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsVUFBUSxFQUFFO0FBRE0sQ0FBbEI7QUFJZSwyRUFBK0I7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCRixTQUFzQjtBQUFBLE1BQVhHLE1BQVc7O0FBQzVDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLG1FQUFnQixDQUFDQyxvQkFBdEI7QUFDRUosV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRCxnQkFBUSxFQUFFRSxNQUFNLENBQUNJLE9BQVAsQ0FBZU47QUFGdEIsUUFBTDtBQUlBOztBQUNGLFNBQUtJLG1FQUFnQixDQUFDRyw2QkFBdEI7QUFDRU4sV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRCxnQkFBUSxFQUFFRSxNQUFNLENBQUNJLE9BQVAsQ0FBZU47QUFGdEIsUUFBTDtBQUlBOztBQUVBLFNBQUtJLG1FQUFnQixDQUFDSSx3Q0FBdEI7QUFDRVAsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRCxnQkFBUSxFQUFFRSxNQUFNLENBQUNJLE9BQVAsQ0FBZU47QUFGdEIsUUFBTDtBQUlBOztBQUNKLFNBQUtJLG1FQUFnQixDQUFDSyx3QkFBdEI7QUFDRVIsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRCxnQkFBUSxFQUFFRSxNQUFNLENBQUNJLE9BQVAsQ0FBZU47QUFGdEIsUUFBTDtBQUlBOztBQUNGLFNBQUtJLG1FQUFnQixDQUFDTSw4QkFBdEI7QUFDRVQsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRCxnQkFBUSxFQUFFRSxNQUFNLENBQUNJLE9BQVAsQ0FBZU47QUFGdEIsUUFBTDtBQUlBOztBQUNGLFNBQUtJLG1FQUFnQixDQUFDTyx1Q0FBdEI7QUFDRVYsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIRCxnQkFBUSxFQUFFRSxNQUFNLENBQUNJLE9BQVAsQ0FBZU47QUFGdEIsUUFBTDtBQUlBOztBQUNGLFNBQUtJLG1FQUFnQixDQUFDUSx1Q0FBdEI7QUFDRVgsV0FBSyxtQ0FDQUEsS0FEQTtBQUVIWSxhQUFLLEVBQUVYLE1BQU0sQ0FBQ0k7QUFGWCxRQUFMO0FBSUE7O0FBQ0YsU0FBS0YsbUVBQWdCLENBQUNVLDBCQUF0QjtBQUNFYixXQUFLLG1DQUNBQSxLQURBO0FBRUhELGdCQUFRLEVBQUVFLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlTjtBQUZ0QixRQUFMO0FBSUE7QUFqREo7O0FBbURBLFNBQU9DLEtBQVA7QUFDRCxDQXJERCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5iM2JmYmJlN2NjZWE4YTYwOTdmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvZHVjdENvbnN0YW50cyB9IGZyb20gXCIuLi9hY3Rpb25zL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gIHByb2R1Y3RzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9QUk9EVUNUU19CWV9TTFVHOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQucHJvZHVjdHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9QUk9EVUNUU19CWV9NQUlOX0NBVEVHT1JZOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQucHJvZHVjdHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9QUk9EVUNUU19CWV9NQUlOX0NBVEVHT1JZX0FORF9TRUFSQ0g6XHJcbiAgICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0cyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9BTExfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RzLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgcHJvZHVjdENvbnN0YW50cy5HRVRfQUxMX1BST0RVQ1RTX0ZST01fUFJPRFVDVFM6XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0cyxcclxuICAgICAgfTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIHByb2R1Y3RDb25zdGFudHMuR0VUX0NBVEVHT1JZX1BST0RVQ1RTX0JZX1NFQVJDSF9TVUNDRVNTOlxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQucHJvZHVjdHMsXHJcbiAgICAgIH07XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBwcm9kdWN0Q29uc3RhbnRzLkdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfRkFJTFVSRTpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgcHJvZHVjdENvbnN0YW50cy5HRVRfQUxMX1BST0RVQ1RTX0JZX1NFQVJDSDpcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RzLFxyXG4gICAgICB9O1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9