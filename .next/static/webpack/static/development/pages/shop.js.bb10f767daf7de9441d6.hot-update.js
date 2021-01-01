webpackHotUpdate("static\\development\\pages\\shop.js",{

/***/ "./src/pages/shop.js":
/*!***************************!*\
  !*** ./src/pages/shop.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_hooks_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hooks-paginator */ "./node_modules/react-hooks-paginator/dist/index.esm.js");
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slidedown */ "./node_modules/react-slidedown/lib/slidedown.js");
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slidedown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Breadcrumb */ "./src/components/Breadcrumb/index.js");
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/product */ "./src/lib/product.js");
/* harmony import */ var _components_Shop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Shop */ "./src/components/Shop/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/axios */ "./src/helpers/axios.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");



var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







 // import products from "../../data/products.json";








var FullwidthLeftSidebar = function FullwidthLeftSidebar(_ref) {
  _s();

  var path = _ref.path,
      search = _ref.search;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("grid four-column"),
      layout = _useState[0],
      setLayout = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      sortType = _useState2[0],
      setSortType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      sortValue = _useState3[0],
      setSortValue = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      filterSortType = _useState4[0],
      setFilterSortType = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      filterSortValue = _useState5[0],
      setFilterSortValue = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      offset = _useState6[0],
      setOffset = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      currentPage = _useState7[0],
      setCurrentPage = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      currentData = _useState8[0],
      setCurrentData = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      products = _useState9[0],
      setProducts = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      sortedProducts = _useState10[0],
      setSortedProducts = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      shopTopFilterStatus = _useState11[0],
      setShopTopFilterStatus = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      searchField = _useState12[0],
      setSearchField = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      searchAllField = _useState13[0],
      setSearchAllField = _useState13[1];

  var pageLimit = 20; // const router = useRouter()

  var categorySlug = path; // if(categorySlug !== "watches" || "glasses" || "sunglasses" || "eyewear" || "bracelets"){
  //   router.push('/404')
  // }

  var productsss = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(function (state) {
    return state.product;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"])();
  var reduxProducts = productsss.products;
  var category = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"])(function (state) {
    return state.category;
  });
  console.log(category); // const {path} = router.query

  var searchedItem;

  if (search == undefined) {
    searchedItem = '';
  } else {
    searchedItem = search;
  }

  console.log(categorySlug);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (categorySlug == undefined) {
      // dispatch(getAllProducts())
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getAllProductBySearch"])(searchedItem));
    } else if (categorySlug == 'eyewear' || categorySlug == 'watches') {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getProductsByMainCategory"])(categorySlug));
    } else {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getProductsBySlug"])(categorySlug));
    }
  }, [categorySlug, search]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (reduxProducts) {
      if (reduxProducts.length == 0) {
        console.log('loading');
        setProducts([]);
      } else {
        setProducts(reduxProducts);
      }
    }
  }, [reduxProducts]);
  console.log(productsss, 'redux products'); // useEffect(() => {
  //   if(categorySlug == undefined && searchField !== ""){
  //     dispatch(getAllProductBySearch(searchField))
  //   }
  //   if(categorySlug !== undefined && searchField !== "") {     
  //     dispatch(getCategoryProductBySearch(categorySlug, searchField))
  //   }
  // }, [searchField])

  var onSearchChange = function onSearchChange(e) {
    var query = e.target.value;
    setSearchField(query);

    if (query.length == 0 && categorySlug) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getProductsBySlug"])(categorySlug));
    }

    if (query.length == 0 && (categorySlug == 'eyewear' || categorySlug == 'watches')) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getProductsByMainCategory"])(categorySlug));
    }

    if (query.length == 0 && categorySlug == undefined) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getAllProducts"])());
    }
  };

  var onSubmitHandle = function onSubmitHandle(e) {
    e.preventDefault();

    if (searchField.length == 0 && search == undefined) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getProductsBySlug"])(categorySlug));
    }

    if (searchField.length == 0 && categorySlug == undefined && search == undefined) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getAllProducts"])());
    }

    if (searchField.length > 0 && categorySlug == undefined) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getAllProductBySearch"])(searchField));
    }

    if (searchField.length > 0 && categorySlug) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getCategoryProductBySearch"])(categorySlug, searchField));
    }

    if (searchField.length > 0 && (categorySlug == 'eyewear' || categorySlug == 'watches')) {
      dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_15__["getProductsByMainCategoryAndSearch"])(categorySlug, searchField));
    }
  };

  var getLayout = function getLayout(layout) {
    setLayout(layout);
  };

  var getSortParams = function getSortParams(sortType, sortValue) {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  var getFilterSortParams = function getFilterSortParams(sortType, sortValue) {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    if (string !== undefined) {
      var str = string.replace(/-/g, ' ');
      var capitalizeEveryWord = str.replace(/(^\w{1})|(\s+\w{1})/g, function (letter) {
        return letter.toUpperCase();
      });
      return capitalizeEveryWord;
    } else {
      return "Shop";
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var sortedProducts = Object(_lib_product__WEBPACK_IMPORTED_MODULE_9__["getSortedProducts"])(products, sortType, sortValue);
    var filterSortedProducts = Object(_lib_product__WEBPACK_IMPORTED_MODULE_9__["getSortedProducts"])(sortedProducts, filterSortType, filterSortValue);
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["LayoutTwo"], null, __jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbOne"], {
    pageTitle: capitalizeFirstLetter(categorySlug),
    backgroundImage: "/assets/images/backgrounds/breadcrumb-bg-1.png"
  }, __jsx("ul", {
    className: "breadcrumb__list"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    as: "" + "/"
  }, __jsx("a", null, "Home"))), __jsx("li", null, capitalizeFirstLetter(categorySlug)))), __jsx("div", {
    className: "shop-page-content"
  }, __jsx(_components_Shop__WEBPACK_IMPORTED_MODULE_10__["ShopHeader"], {
    getLayout: getLayout,
    getFilterSortParams: getFilterSortParams,
    productCount: products.length,
    sortedProductCount: currentData.length,
    shopTopFilterStatus: shopTopFilterStatus,
    setShopTopFilterStatus: setShopTopFilterStatus,
    layoutClass: "wide"
  }), __jsx("div", {
    className: "shop-page-content__body space-mt--r130 space-mb--r130"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "wide"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 3,
    className: "order-2 order-lg-1 space-mt-mobile-only--50"
  }, __jsx(_components_Shop__WEBPACK_IMPORTED_MODULE_10__["ShopSidebar"], {
    products: products,
    getSortParams: getSortParams,
    onSearchChange: onSearchChange,
    onSubmitHandle: onSubmitHandle,
    searchField: searchField,
    categorySlug: categorySlug
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    lg: 9,
    className: "order-1 order-lg-2"
  }, __jsx(_components_Shop__WEBPACK_IMPORTED_MODULE_10__["ShopProducts"], {
    path: categorySlug,
    layout: layout,
    products: currentData
  }), __jsx("div", {
    className: "pro-pagination-style"
  }, __jsx(react_hooks_paginator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    totalRecords: sortedProducts.length,
    pageLimit: pageLimit,
    pageNeighbours: 2,
    setOffset: setOffset,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    pageContainerClass: "mb-0 mt-0",
    pagePrevText: "\xAB",
    pageNextText: "\xBB"
  }))))))));
};

_s(FullwidthLeftSidebar, "kwRqjR8TOKLJsEDVxCzYZC5Wdlc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_13__["useSelector"]];
});

_c = FullwidthLeftSidebar;

FullwidthLeftSidebar.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            return _context.abrupt("return", {
              path: query.path,
              search: query.search
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (FullwidthLeftSidebar);

var _c;

$RefreshReg$(_c, "FullwidthLeftSidebar");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJGdWxsd2lkdGhMZWZ0U2lkZWJhciIsInBhdGgiLCJzZWFyY2giLCJ1c2VTdGF0ZSIsImxheW91dCIsInNldExheW91dCIsInNvcnRUeXBlIiwic2V0U29ydFR5cGUiLCJzb3J0VmFsdWUiLCJzZXRTb3J0VmFsdWUiLCJmaWx0ZXJTb3J0VHlwZSIsInNldEZpbHRlclNvcnRUeXBlIiwiZmlsdGVyU29ydFZhbHVlIiwic2V0RmlsdGVyU29ydFZhbHVlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImN1cnJlbnREYXRhIiwic2V0Q3VycmVudERhdGEiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic29ydGVkUHJvZHVjdHMiLCJzZXRTb3J0ZWRQcm9kdWN0cyIsInNob3BUb3BGaWx0ZXJTdGF0dXMiLCJzZXRTaG9wVG9wRmlsdGVyU3RhdHVzIiwic2VhcmNoRmllbGQiLCJzZXRTZWFyY2hGaWVsZCIsInNlYXJjaEFsbEZpZWxkIiwic2V0U2VhcmNoQWxsRmllbGQiLCJwYWdlTGltaXQiLCJjYXRlZ29yeVNsdWciLCJwcm9kdWN0c3NzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInByb2R1Y3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicmVkdXhQcm9kdWN0cyIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInNlYXJjaGVkSXRlbSIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsImdldEFsbFByb2R1Y3RCeVNlYXJjaCIsImdldFByb2R1Y3RzQnlNYWluQ2F0ZWdvcnkiLCJnZXRQcm9kdWN0c0J5U2x1ZyIsImxlbmd0aCIsIm9uU2VhcmNoQ2hhbmdlIiwiZSIsInF1ZXJ5IiwidGFyZ2V0IiwidmFsdWUiLCJnZXRBbGxQcm9kdWN0cyIsIm9uU3VibWl0SGFuZGxlIiwicHJldmVudERlZmF1bHQiLCJnZXRDYXRlZ29yeVByb2R1Y3RCeVNlYXJjaCIsImdldFByb2R1Y3RzQnlNYWluQ2F0ZWdvcnlBbmRTZWFyY2giLCJnZXRMYXlvdXQiLCJnZXRTb3J0UGFyYW1zIiwiZ2V0RmlsdGVyU29ydFBhcmFtcyIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsInN0ciIsInJlcGxhY2UiLCJjYXBpdGFsaXplRXZlcnlXb3JkIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJnZXRTb3J0ZWRQcm9kdWN0cyIsImZpbHRlclNvcnRlZFByb2R1Y3RzIiwic2xpY2UiLCJwcm9jZXNzIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsa0JBQ25CQyxzREFBUSxDQUFDLGtCQUFELENBRFc7QUFBQSxNQUN4Q0MsTUFEd0M7QUFBQSxNQUNoQ0MsU0FEZ0M7O0FBQUEsbUJBRWZGLHNEQUFRLENBQUMsRUFBRCxDQUZPO0FBQUEsTUFFeENHLFFBRndDO0FBQUEsTUFFOUJDLFdBRjhCOztBQUFBLG1CQUdiSixzREFBUSxDQUFDLEVBQUQsQ0FISztBQUFBLE1BR3hDSyxTQUh3QztBQUFBLE1BRzdCQyxZQUg2Qjs7QUFBQSxtQkFJSE4sc0RBQVEsQ0FBQyxFQUFELENBSkw7QUFBQSxNQUl4Q08sY0FKd0M7QUFBQSxNQUl4QkMsaUJBSndCOztBQUFBLG1CQUtEUixzREFBUSxDQUFDLEVBQUQsQ0FMUDtBQUFBLE1BS3hDUyxlQUx3QztBQUFBLE1BS3ZCQyxrQkFMdUI7O0FBQUEsbUJBTW5CVixzREFBUSxDQUFDLENBQUQsQ0FOVztBQUFBLE1B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Q0FERjtBQThFRCxDQTlQRDs7R0FBTWpCLG9CO1VBeUJlaUMsd0QsRUFDRkksd0QsRUFFQUosd0Q7OztLQTVCYmpDLG9COztBQWdRTkEsb0JBQW9CLENBQUN5RSxlQUFyQjtBQUFBLCtMQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU3RCLGlCQUFULFNBQVNBLEtBQVQ7QUFBQSw2Q0FBNkI7QUFBQ2xELGtCQUFJLEVBQUVrRCxLQUFLLENBQUNsRCxJQUFiO0FBQW1CQyxvQkFBTSxFQUFFaUQsS0FBSyxDQUFDakQ7QUFBakMsYUFBN0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWVGLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaG9wLmpzLmJiMTBmNzY3ZGFmN2RlOTQ0MWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFBhZ2luYXRvciBmcm9tIFwicmVhY3QtaG9va3MtcGFnaW5hdG9yXCI7XHJcbmltcG9ydCB7IFNsaWRlRG93biB9IGZyb20gXCJyZWFjdC1zbGlkZWRvd25cIjtcclxuaW1wb3J0IHsgTGF5b3V0VHdvIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJPbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CcmVhZGNydW1iXCI7XHJcbmltcG9ydCB7IGdldFNvcnRlZFByb2R1Y3RzIH0gZnJvbSBcIi4uL2xpYi9wcm9kdWN0XCI7XHJcbi8vIGltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vLi4vZGF0YS9wcm9kdWN0cy5qc29uXCI7XHJcbmltcG9ydCB7XHJcbiAgU2hvcEhlYWRlcixcclxuICBTaG9wRmlsdGVyLFxyXG4gIFNob3BTaWRlYmFyLFxyXG4gIFNob3BQcm9kdWN0c1xyXG59IGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3BcIjtcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIi4uL2hlbHBlcnMvYXhpb3NcIlxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdEJ5U2VhcmNoLCBnZXRBbGxQcm9kdWN0cywgZ2V0Q2F0ZWdvcnlQcm9kdWN0QnlTZWFyY2gsIGdldFByb2R1Y3RzQnlNYWluQ2F0ZWdvcnksIGdldFByb2R1Y3RzQnlNYWluQ2F0ZWdvcnlBbmRTZWFyY2gsIGdldFByb2R1Y3RzQnlTbHVnIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCBGdWxsd2lkdGhMZWZ0U2lkZWJhciA9ICh7cGF0aCwgc2VhcmNofSkgPT4ge1xyXG4gIGNvbnN0IFtsYXlvdXQsIHNldExheW91dF0gPSB1c2VTdGF0ZShcImdyaWQgZm91ci1jb2x1bW5cIik7XHJcbiAgY29uc3QgW3NvcnRUeXBlLCBzZXRTb3J0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc29ydFZhbHVlLCBzZXRTb3J0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpbHRlclNvcnRUeXBlLCBzZXRGaWx0ZXJTb3J0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmlsdGVyU29ydFZhbHVlLCBzZXRGaWx0ZXJTb3J0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NvcnRlZFByb2R1Y3RzLCBzZXRTb3J0ZWRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Nob3BUb3BGaWx0ZXJTdGF0dXMsIHNldFNob3BUb3BGaWx0ZXJTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWFyY2hGaWVsZCwgc2V0U2VhcmNoRmllbGRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3NlYXJjaEFsbEZpZWxkLCBzZXRTZWFyY2hBbGxGaWVsZF0gPSB1c2VTdGF0ZSgnJylcclxuICBcclxuXHJcbiAgY29uc3QgcGFnZUxpbWl0ID0gMjA7XHJcblxyXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgXHJcbiAgY29uc3QgY2F0ZWdvcnlTbHVnID0gcGF0aFxyXG4gIC8vIGlmKGNhdGVnb3J5U2x1ZyAhPT0gXCJ3YXRjaGVzXCIgfHwgXCJnbGFzc2VzXCIgfHwgXCJzdW5nbGFzc2VzXCIgfHwgXCJleWV3ZWFyXCIgfHwgXCJicmFjZWxldHNcIil7XHJcbiAgLy8gICByb3V0ZXIucHVzaCgnLzQwNCcpXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBwcm9kdWN0c3NzID0gdXNlU2VsZWN0b3Ioc3RhdGU9PiBzdGF0ZS5wcm9kdWN0KVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHJlZHV4UHJvZHVjdHMgPSBwcm9kdWN0c3NzLnByb2R1Y3RzXHJcbiAgY29uc3QgY2F0ZWdvcnkgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhdGVnb3J5KTtcclxuICBjb25zb2xlLmxvZyhjYXRlZ29yeSlcclxuXHJcbiAgLy8gY29uc3Qge3BhdGh9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGxldCBzZWFyY2hlZEl0ZW1cclxuICBcclxuICBpZihzZWFyY2ggPT0gdW5kZWZpbmVkKXtcclxuICAgIHNlYXJjaGVkSXRlbSA9ICcnXHJcbiAgfWVsc2V7XHJcbiAgICBzZWFyY2hlZEl0ZW0gPSBzZWFyY2hcclxuICB9XHJcbiAgY29uc29sZS5sb2coY2F0ZWdvcnlTbHVnKVxyXG5cclxuXHJcblxyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBpZihjYXRlZ29yeVNsdWcgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgLy8gZGlzcGF0Y2goZ2V0QWxsUHJvZHVjdHMoKSlcclxuICAgICAgZGlzcGF0Y2goZ2V0QWxsUHJvZHVjdEJ5U2VhcmNoKHNlYXJjaGVkSXRlbSkpXHJcbiAgICB9ZWxzZSBpZihjYXRlZ29yeVNsdWcgPT0gJ2V5ZXdlYXInIHx8IGNhdGVnb3J5U2x1ZyA9PSAnd2F0Y2hlcycpe1xyXG4gICAgICBkaXNwYXRjaChnZXRQcm9kdWN0c0J5TWFpbkNhdGVnb3J5KGNhdGVnb3J5U2x1ZykpXHJcbiAgICB9XHJcbiAgICBlbHNlIHsgICAgIFxyXG4gICAgICBkaXNwYXRjaChnZXRQcm9kdWN0c0J5U2x1ZyhjYXRlZ29yeVNsdWcpKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIH0sIFtjYXRlZ29yeVNsdWcsIHNlYXJjaF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihyZWR1eFByb2R1Y3RzKXtcclxuICAgICAgaWYocmVkdXhQcm9kdWN0cy5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRpbmcnKVxyXG4gICAgICAgIHNldFByb2R1Y3RzKFtdKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBzZXRQcm9kdWN0cyhyZWR1eFByb2R1Y3RzKVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9LCBbcmVkdXhQcm9kdWN0c10pXHJcblxyXG5jb25zb2xlLmxvZyhwcm9kdWN0c3NzLCAncmVkdXggcHJvZHVjdHMnKVxyXG4gIFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZihjYXRlZ29yeVNsdWcgPT0gdW5kZWZpbmVkICYmIHNlYXJjaEZpZWxkICE9PSBcIlwiKXtcclxuICAvLyAgICAgZGlzcGF0Y2goZ2V0QWxsUHJvZHVjdEJ5U2VhcmNoKHNlYXJjaEZpZWxkKSlcclxuICAvLyAgIH1cclxuICAvLyAgIGlmKGNhdGVnb3J5U2x1ZyAhPT0gdW5kZWZpbmVkICYmIHNlYXJjaEZpZWxkICE9PSBcIlwiKSB7ICAgICBcclxuICAvLyAgICAgZGlzcGF0Y2goZ2V0Q2F0ZWdvcnlQcm9kdWN0QnlTZWFyY2goY2F0ZWdvcnlTbHVnLCBzZWFyY2hGaWVsZCkpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3NlYXJjaEZpZWxkXSlcclxuXHJcblxyXG5cclxuICBjb25zdCBvblNlYXJjaENoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgcXVlcnkgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgc2V0U2VhcmNoRmllbGQocXVlcnkpXHJcbiAgICBpZihxdWVyeS5sZW5ndGggPT0gMCAmJiBjYXRlZ29yeVNsdWcpe1xyXG4gICAgICBkaXNwYXRjaChnZXRQcm9kdWN0c0J5U2x1ZyhjYXRlZ29yeVNsdWcpKVxyXG5cclxuICAgIH1cclxuICAgIGlmKHF1ZXJ5Lmxlbmd0aCA9PSAwICYmIChjYXRlZ29yeVNsdWcgPT0gJ2V5ZXdlYXInIHx8IGNhdGVnb3J5U2x1ZyA9PSAnd2F0Y2hlcycpICl7XHJcbiAgICAgIGRpc3BhdGNoKGdldFByb2R1Y3RzQnlNYWluQ2F0ZWdvcnkoY2F0ZWdvcnlTbHVnKSlcclxuXHJcbiAgICB9XHJcbiAgICBpZihxdWVyeS5sZW5ndGggPT0gMCAmJiBjYXRlZ29yeVNsdWcgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgZGlzcGF0Y2goZ2V0QWxsUHJvZHVjdHMoKSlcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlID0gKGUpID0+IHtcclxuICAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYoc2VhcmNoRmllbGQubGVuZ3RoID09IDAgJiYgc2VhcmNoID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIGRpc3BhdGNoKGdldFByb2R1Y3RzQnlTbHVnKGNhdGVnb3J5U2x1ZykpXHJcbiAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIGlmKHNlYXJjaEZpZWxkLmxlbmd0aCA9PSAwICYmIGNhdGVnb3J5U2x1ZyA9PSB1bmRlZmluZWQgJiYgc2VhcmNoID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIGRpc3BhdGNoKGdldEFsbFByb2R1Y3RzKCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmKHNlYXJjaEZpZWxkLmxlbmd0aCA+IDAgJiYgY2F0ZWdvcnlTbHVnID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIGRpc3BhdGNoKGdldEFsbFByb2R1Y3RCeVNlYXJjaChzZWFyY2hGaWVsZCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmKHNlYXJjaEZpZWxkLmxlbmd0aCA+IDAgJiYgY2F0ZWdvcnlTbHVnKXtcclxuICAgICAgZGlzcGF0Y2goZ2V0Q2F0ZWdvcnlQcm9kdWN0QnlTZWFyY2goY2F0ZWdvcnlTbHVnLCBzZWFyY2hGaWVsZCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmKHNlYXJjaEZpZWxkLmxlbmd0aCA+IDAgJiYgKGNhdGVnb3J5U2x1Zz09J2V5ZXdlYXInIHx8IGNhdGVnb3J5U2x1ZyA9PSAnd2F0Y2hlcycgKSApe1xyXG4gICAgICBkaXNwYXRjaChnZXRQcm9kdWN0c0J5TWFpbkNhdGVnb3J5QW5kU2VhcmNoKGNhdGVnb3J5U2x1Zywgc2VhcmNoRmllbGQpKVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgZ2V0TGF5b3V0ID0gKGxheW91dCkgPT4ge1xyXG4gICAgc2V0TGF5b3V0KGxheW91dCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U29ydFBhcmFtcyA9IChzb3J0VHlwZSwgc29ydFZhbHVlKSA9PiB7XHJcbiAgICBzZXRTb3J0VHlwZShzb3J0VHlwZSk7XHJcbiAgICBzZXRTb3J0VmFsdWUoc29ydFZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRGaWx0ZXJTb3J0UGFyYW1zID0gKHNvcnRUeXBlLCBzb3J0VmFsdWUpID0+IHtcclxuICAgIHNldEZpbHRlclNvcnRUeXBlKHNvcnRUeXBlKTtcclxuICAgIHNldEZpbHRlclNvcnRWYWx1ZShzb3J0VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChzdHJpbmcpID0+IHtcclxuICAgIGlmKHN0cmluZyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgbGV0IHN0ciA9IHN0cmluZy5yZXBsYWNlKC8tL2csICcgJylcclxuICAgICAgbGV0IGNhcGl0YWxpemVFdmVyeVdvcmQgPSBzdHIucmVwbGFjZSgvKF5cXHd7MX0pfChcXHMrXFx3ezF9KS9nLCBsZXR0ZXIgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICByZXR1cm4gY2FwaXRhbGl6ZUV2ZXJ5V29yZFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiBcIlNob3BcIlxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgc29ydGVkUHJvZHVjdHMgPSBnZXRTb3J0ZWRQcm9kdWN0cyhwcm9kdWN0cywgc29ydFR5cGUsIHNvcnRWYWx1ZSk7XHJcbiAgICBjb25zdCBmaWx0ZXJTb3J0ZWRQcm9kdWN0cyA9IGdldFNvcnRlZFByb2R1Y3RzKFxyXG4gICAgICBzb3J0ZWRQcm9kdWN0cyxcclxuICAgICAgZmlsdGVyU29ydFR5cGUsXHJcbiAgICAgIGZpbHRlclNvcnRWYWx1ZVxyXG4gICAgKTtcclxuICAgIHNvcnRlZFByb2R1Y3RzID0gZmlsdGVyU29ydGVkUHJvZHVjdHM7XHJcbiAgICBzZXRTb3J0ZWRQcm9kdWN0cyhzb3J0ZWRQcm9kdWN0cyk7XHJcbiAgICBzZXRDdXJyZW50RGF0YShzb3J0ZWRQcm9kdWN0cy5zbGljZShvZmZzZXQsIG9mZnNldCArIHBhZ2VMaW1pdCkpO1xyXG4gIH0sIFtvZmZzZXQsIHByb2R1Y3RzLCBzb3J0VHlwZSwgc29ydFZhbHVlLCBmaWx0ZXJTb3J0VHlwZSwgZmlsdGVyU29ydFZhbHVlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0VHdvPlxyXG4gICAgICB7LyogYnJlYWRjcnVtYiAqL31cclxuICAgICAgPEJyZWFkY3J1bWJPbmVcclxuICAgICAgICBwYWdlVGl0bGU9e2NhcGl0YWxpemVGaXJzdExldHRlcihjYXRlZ29yeVNsdWcpIH1cclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9XCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9icmVhZGNydW1iLWJnLTEucG5nXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJicmVhZGNydW1iX19saXN0XCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+e2NhcGl0YWxpemVGaXJzdExldHRlcihjYXRlZ29yeVNsdWcpfTwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9CcmVhZGNydW1iT25lPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtcGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgey8qIHNob3AgcGFnZSBoZWFkZXIgKi99XHJcbiAgICAgICAgPFNob3BIZWFkZXJcclxuICAgICAgICAgIGdldExheW91dD17Z2V0TGF5b3V0fVxyXG4gICAgICAgICAgZ2V0RmlsdGVyU29ydFBhcmFtcz17Z2V0RmlsdGVyU29ydFBhcmFtc31cclxuICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdHMubGVuZ3RofVxyXG4gICAgICAgICAgc29ydGVkUHJvZHVjdENvdW50PXtjdXJyZW50RGF0YS5sZW5ndGh9XHJcbiAgICAgICAgICBzaG9wVG9wRmlsdGVyU3RhdHVzPXtzaG9wVG9wRmlsdGVyU3RhdHVzfVxyXG4gICAgICAgICAgc2V0U2hvcFRvcEZpbHRlclN0YXR1cz17c2V0U2hvcFRvcEZpbHRlclN0YXR1c31cclxuICAgICAgICAgIGxheW91dENsYXNzPVwid2lkZVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgey8qIHNob3AgaGVhZGVyIGZpbHRlciAqL31cclxuICAgICAgICB7LyogPFNsaWRlRG93biBjbG9zZWQ9e3Nob3BUb3BGaWx0ZXJTdGF0dXMgPyBmYWxzZSA6IHRydWV9PlxyXG4gICAgICAgICAgPFNob3BGaWx0ZXIgcHJvZHVjdHM9e3Byb2R1Y3RzfSBnZXRTb3J0UGFyYW1zPXtnZXRTb3J0UGFyYW1zfSAvPlxyXG4gICAgICAgIDwvU2xpZGVEb3duPiAqL31cclxuXHJcbiAgICAgICAgey8qIHNob3AgcGFnZSBib2R5ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1wYWdlLWNvbnRlbnRfX2JvZHkgc3BhY2UtbXQtLXIxMzAgc3BhY2UtbWItLXIxMzBcIj5cclxuICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwid2lkZVwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxDb2xcclxuICAgICAgICAgICAgICAgIGxnPXszfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItMiBvcmRlci1sZy0xIHNwYWNlLW10LW1vYmlsZS1vbmx5LS01MFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIHNob3Agc2lkZWJhciAqL31cclxuICAgICAgICAgICAgICAgIDxTaG9wU2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XHJcbiAgICAgICAgICAgICAgICAgIGdldFNvcnRQYXJhbXM9e2dldFNvcnRQYXJhbXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VhcmNoQ2hhbmdlID0ge29uU2VhcmNoQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdEhhbmRsZT17b25TdWJtaXRIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaEZpZWxkPXtzZWFyY2hGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlTbHVnPXtjYXRlZ29yeVNsdWd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICA8Q29sIGxnPXs5fSBjbGFzc05hbWU9XCJvcmRlci0xIG9yZGVyLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBzaG9wIHByb2R1Y3RzICovfVxyXG4gICAgICAgICAgICAgICAgPFNob3BQcm9kdWN0cyBwYXRoPXtjYXRlZ29yeVNsdWd9IGxheW91dD17bGF5b3V0fSBwcm9kdWN0cz17Y3VycmVudERhdGF9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHNob3AgcHJvZHVjdCBwYWdpbmF0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm8tcGFnaW5hdGlvbi1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8UGFnaW5hdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxSZWNvcmRzPXtzb3J0ZWRQcm9kdWN0cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUxpbWl0PXtwYWdlTGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZU5laWdoYm91cnM9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0T2Zmc2V0PXtzZXRPZmZzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQYWdlPXtzZXRDdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBwYWdlQ29udGFpbmVyQ2xhc3M9XCJtYi0wIG10LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VQcmV2VGV4dD1cIsKrXCJcclxuICAgICAgICAgICAgICAgICAgICBwYWdlTmV4dFRleHQ9XCLCu1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dFR3bz5cclxuICApO1xyXG59O1xyXG5cclxuRnVsbHdpZHRoTGVmdFNpZGViYXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge3JldHVybiB7cGF0aDogcXVlcnkucGF0aCwgc2VhcmNoOiBxdWVyeS5zZWFyY2h9fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVsbHdpZHRoTGVmdFNpZGViYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=