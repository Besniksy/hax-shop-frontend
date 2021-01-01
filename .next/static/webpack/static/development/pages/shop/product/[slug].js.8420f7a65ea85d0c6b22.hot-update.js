webpackHotUpdate("static\\development\\pages\\shop\\product\\[slug].js",{

/***/ "./src/redux/actions/constants.js":
/*!****************************************!*\
  !*** ./src/redux/actions/constants.js ***!
  \****************************************/
/*! exports provided: categoryConstants, productConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryConstants", function() { return categoryConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productConstants", function() { return productConstants; });
var categoryConstants = {
  GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'GET_CATEGORIES_FAILURE',
  ADD_NEW_CATEGORY_REQUEST: 'ADD_NEW_CATEGORY_REQUEST',
  ADD_NEW_CATEGORY_SUCCESS: 'ADD_NEW_CATEGORY_SUCCESS',
  ADD_NEW_CATEGORY_FAILURE: 'ADD_NEW_CATEGORY_FAILURE'
};
var productConstants = {
  GET_PRODUCTS_BY_SLUG: 'GET_PRODUCTS_BY_SLUG',
  GET_ALL_PRODUCTS_SUCCESS: 'GET_ALL_PRODUCTS_SUCCESS',
  GET_ALL_PRODUCTS_FROM_PRODUCTS: 'GET_ALL_PRODUCTS_FROM_PRODUCTS',
  GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS: 'GET_CATEGORY_PRODUCTS_BY_SEARCH_SUCCESS',
  GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE: 'GET_CATEGORY_PRODUCTS_BY_SEARCH_FAILURE',
  GET_ALL_PRODUCTS_BY_SEARCH: 'GET_ALL_PRODUCTS_BY_SEARCH',
  GET_PRODUCTS_BY_MAIN_CATEGORY: 'GET_PRODUCTS_BY_MAIN_CATEGORY',
  GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH: 'GET_PRODUCTS_BY_MAIN_CATEGORY_AND_SEARCH'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiY2F0ZWdvcnlDb25zdGFudHMiLCJHRVRfQ0FURUdPUklFU19SRVFVRVNUIiwiR0VUX0NBVEVHT1JJRVNfU1VDQ0VTUyIsIkdFVF9DQVRFR09SSUVTX0ZBSUxVUkUiLCJBRERfTkVXX0NBVEVHT1JZX1JFUVVFU1QiLCJBRERfTkVXX0NBVEVHT1JZX1NVQ0NFU1MiLCJBRERfTkVXX0NBVEVHT1JZX0ZBSUxVUkUiLCJwcm9kdWN0Q29uc3RhbnRzIiwiR0VUX1BST0RVQ1RTX0JZX1NMVUciLCJHRVRfQUxMX1BST0RVQ1RTX1NVQ0NFU1MiLCJHRVRfQUxMX1BST0RVQ1RTX0ZST01fUFJPRFVDVFMiLCJHRVRfQ0FURUdPUllfUFJPRFVDVFNfQllfU0VBUkNIX1NVQ0NFU1MiLCJHRVRfQ0FURUdPUllfUFJPRFVDVFNfQllfU0VBUkNIX0ZBSUxVUkUiLCJHRVRfQUxMX1BST0RVQ1RTX0JZX1NFQVJDSCIsIkdFVF9QUk9EVUNUU19CWV9NQUlOX0NBVEVHT1JZIiwiR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUllfQU5EX1NFQVJDSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFPLElBQU1BLGlCQUFpQixHQUFHO0FBQzdCQyx3QkFBc0IsRUFBRSx3QkFESztBQUU3QkMsd0JBQXNCLEVBQUUsd0JBRks7QUFHN0JDLHdCQUFzQixFQUFFLHdCQUhLO0FBSTdCQywwQkFBd0IsRUFBRSwwQkFKRztBQUs3QkMsMEJBQXdCLEVBQUUsMEJBTEc7QUFNN0JDLDBCQUF3QixFQUFFO0FBTkcsQ0FBMUI7QUFTQSxJQUFNQyxnQkFBZ0IsR0FBRztBQUM1QkMsc0JBQW9CLEVBQUUsc0JBRE07QUFFNUJDLDBCQUF3QixFQUFFLDBCQUZFO0FBRzVCQyxnQ0FBOEIsRUFBRSxnQ0FISjtBQUk1QkMseUNBQXVDLEVBQUUseUNBSmI7QUFLNUJDLHlDQUF1QyxFQUFFLHlDQUxiO0FBTTVCQyw0QkFBMEIsRUFBRSw0QkFOQTtBQU81QkMsK0JBQTZCLEVBQUUsK0JBUEg7QUFRNUJDLDBDQUF3QyxFQUFFO0FBUmQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNob3BcXHByb2R1Y3RcXFtzbHVnXS5qcy44NDIwZjdhNjVlYTg1ZDBjNmIyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcnlDb25zdGFudHMgPSB7XHJcbiAgICBHRVRfQ0FURUdPUklFU19SRVFVRVNUOiAnR0VUX0NBVEVHT1JJRVNfUkVRVUVTVCcsXHJcbiAgICBHRVRfQ0FURUdPUklFU19TVUNDRVNTOiAnR0VUX0NBVEVHT1JJRVNfU1VDQ0VTUycsXHJcbiAgICBHRVRfQ0FURUdPUklFU19GQUlMVVJFOiAnR0VUX0NBVEVHT1JJRVNfRkFJTFVSRScsXHJcbiAgICBBRERfTkVXX0NBVEVHT1JZX1JFUVVFU1Q6ICdBRERfTkVXX0NBVEVHT1JZX1JFUVVFU1QnLFxyXG4gICAgQUREX05FV19DQVRFR09SWV9TVUNDRVNTOiAnQUREX05FV19DQVRFR09SWV9TVUNDRVNTJyxcclxuICAgIEFERF9ORVdfQ0FURUdPUllfRkFJTFVSRTogJ0FERF9ORVdfQ0FURUdPUllfRkFJTFVSRSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RDb25zdGFudHMgPSB7XHJcbiAgICBHRVRfUFJPRFVDVFNfQllfU0xVRzogJ0dFVF9QUk9EVUNUU19CWV9TTFVHJyxcclxuICAgIEdFVF9BTExfUFJPRFVDVFNfU1VDQ0VTUzogJ0dFVF9BTExfUFJPRFVDVFNfU1VDQ0VTUycsXHJcbiAgICBHRVRfQUxMX1BST0RVQ1RTX0ZST01fUFJPRFVDVFM6ICdHRVRfQUxMX1BST0RVQ1RTX0ZST01fUFJPRFVDVFMnLFxyXG4gICAgR0VUX0NBVEVHT1JZX1BST0RVQ1RTX0JZX1NFQVJDSF9TVUNDRVNTOiAnR0VUX0NBVEVHT1JZX1BST0RVQ1RTX0JZX1NFQVJDSF9TVUNDRVNTJyxcclxuICAgIEdFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfRkFJTFVSRTogJ0dFVF9DQVRFR09SWV9QUk9EVUNUU19CWV9TRUFSQ0hfRkFJTFVSRScsXHJcbiAgICBHRVRfQUxMX1BST0RVQ1RTX0JZX1NFQVJDSDogJ0dFVF9BTExfUFJPRFVDVFNfQllfU0VBUkNIJyxcclxuICAgIEdFVF9QUk9EVUNUU19CWV9NQUlOX0NBVEVHT1JZOiAnR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUlknLFxyXG4gICAgR0VUX1BST0RVQ1RTX0JZX01BSU5fQ0FURUdPUllfQU5EX1NFQVJDSDogJ0dFVF9QUk9EVUNUU19CWV9NQUlOX0NBVEVHT1JZX0FORF9TRUFSQ0gnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==