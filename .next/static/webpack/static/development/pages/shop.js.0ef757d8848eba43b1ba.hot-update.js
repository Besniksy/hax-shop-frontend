webpackHotUpdate("static\\development\\pages\\shop.js",{

/***/ "./src/components/Header/HeaderOne.js":
/*!********************************************!*\
  !*** ./src/components/Header/HeaderOne.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _elements_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/Navigation */ "./src/components/Header/elements/Navigation.js");
/* harmony import */ var _elements_AboutOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/AboutOverlay */ "./src/components/Header/elements/AboutOverlay.js");
/* harmony import */ var _elements_SearchOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/SearchOverlay */ "./src/components/Header/elements/SearchOverlay.js");
/* harmony import */ var _elements_CartOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/CartOverlay */ "./src/components/Header/elements/CartOverlay.js");
/* harmony import */ var _elements_WishlistOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/WishlistOverlay */ "./src/components/Header/elements/WishlistOverlay.js");
/* harmony import */ var _elements_MobileMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/MobileMenu */ "./src/components/Header/elements/MobileMenu.js");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var HeaderOne = function HeaderOne(_ref) {
  _s();

  var aboutOverlay = _ref.aboutOverlay,
      cartItems = _ref.cartItems,
      wishlistItems = _ref.wishlistItems;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      scroll = _useState[0],
      setScroll = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      headerTop = _useState2[0],
      setHeaderTop = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      headerHeight = _useState3[0],
      setHeaderHeight = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      offCanvasAboutActive = _useState4[0],
      setOffCanvasAboutActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      offCanvasSearchActive = _useState5[0],
      setOffCanvasSearchActive = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      offCanvasCartActive = _useState6[0],
      setOffCanvasCartActive = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      offCanvasWishlistActive = _useState7[0],
      setOffCanvasWishlistActive = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      offCanvasMobileMenuActive = _useState8[0],
      setOffCanvasMobileMenuActive = _useState8[1];

  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.auth;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    scroll > headerTop ? document.body.style.paddingTop = "".concat(headerHeight, "px") : document.body.style.paddingTop = 0;
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var handleScroll = function handleScroll() {
    setScroll(window.scrollY);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("header", {
    className: "topbar-shadow ".concat(scroll > headerTop ? "is-sticky" : "")
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
    onClick: function onClick() {
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
  }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("a", null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], null))), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowDown"], null), __jsx("ul", {
    className: "sub-menu sub-menu--mega sub-menu--mega--column-4"
  }, __jsx("li", {
    className: "sub-menu--mega__title"
  }, __jsx("ul", {
    className: "sub-menu--mega__list"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop?path=mens-sunglasses",
    as: "" + "/shop/mens-sunglasses"
  }, __jsx("a", null, "Mens Sunglasses"))))), __jsx("li", null, __jsx("div", {
    className: "sub-menu--mega__image"
  }, __jsx("img", {
    src: "" + "/assets/images/menu-image/eyewear.jpg",
    className: "img-fluid",
    alt: ""
  })))))))), __jsx("li", null, __jsx("button", {
    onClick: function onClick() {
      setOffCanvasWishlistActive(true);
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosHeartEmpty"], null), wishlistItems.length >= 1 ? __jsx("span", {
    className: "count"
  }, wishlistItems.length ? wishlistItems.length : "") : "")), __jsx("li", null, __jsx("button", {
    onClick: function onClick() {
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
    onClick: function onClick() {
      return setOffCanvasMobileMenuActive(true);
    }
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

_s(HeaderOne, "9JUGP2Nuac9xEErKMlup8r6hCuU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = HeaderOne;

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(HeaderOne));

var _c;

$RefreshReg$(_c, "HeaderOne");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyT25lLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsImFib3V0T3ZlcmxheSIsImNhcnRJdGVtcyIsIndpc2hsaXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhlYWRlclRvcCIsInNldEhlYWRlclRvcCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsIm9mZkNhbnZhc0Fib3V0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUiLCJvZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJvZmZDYW52YXNDYXJ0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSIsIm9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlIiwic2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUiLCJvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlIiwic2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsImJvZHkiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInByb2Nlc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRoZW50aWNhdGUiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWdEO0FBQUE7O0FBQUEsTUFBN0NDLFlBQTZDLFFBQTdDQSxZQUE2QztBQUFBLE1BQS9CQyxTQUErQixRQUEvQkEsU0FBK0I7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUFBLGtCQUNwQ0Msc0RBQVEsQ0FBQyxDQUFELENBRDRCO0FBQUEsTUFDekRDLE1BRHlEO0FBQUEsTUFDakRDLFNBRGlEOztBQUFBLG1CQUU5QkYsc0RBQVEsQ0FBQyxDQUFELENBRnNCO0FBQUEsTUFFekRHLFNBRnlEO0FBQUEsTUFFOUNDLFlBRjhDOztBQUFBLG1CQUd4Qkosc0RBQVEsQ0FBQyxDQUFELENBSGdCO0FBQUEsTUFHekRLLFlBSHlEO0FBQUEsTUFHM0NDLGVBSDJDOztBQUFBLG1CQUlSTixzREFBUSxDQUFDLEtBQUQsQ0FKQTtBQUFBLE1BSXpETyxvQkFKeUQ7QUFBQSxNQUluQ0MsdUJBSm1DOztBQUFBLG1CQUtOUixzREFBUSxDQUFDLEtBQUQsQ0FMRjtBQUFBLE1BS3pEUyxxQkFMeUQ7QUFBQSxNQUtsQ0Msd0JBTGtDOztBQUFBLG1CQU1WVixzREFBUSxDQUFDLEtBQUQsQ0FORTtBQUFBLE1BTXpEVyxtQkFOeUQ7QUFBQSxNQU1wQ0Msc0JBTm9DOztBQUFBLG1CQU9GWixzREFBUSxDQUFDLEtBQUQsQ0FQTjtBQUFBLE1BT3pEYSx1QkFQeUQ7QUFBQSxNQU9oQ0MsMEJBUGdDOztBQUFBLG1CQVFFZCxzREFBUSxDQUN4RSxLQUR3RSxDQVJWO0FBQUEsTUFRekRlLHlCQVJ5RDtBQUFBLE1BUTlCQyw0QkFSOEI7O0FBWWhFLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRixJQUFWO0FBQUEsR0FBTixDQUF4QjtBQUdBRyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FuQixnQkFBWSxDQUFDaUIsTUFBTSxDQUFDRyxTQUFSLENBQVo7QUFDQWxCLG1CQUFlLENBQUNlLE1BQU0sQ0FBQ0ksWUFBUixDQUFmO0FBQ0FDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLFlBQWxDO0FBQ0EzQixVQUFNLEdBQUdFLFNBQVQsR0FDS21CLFFBQVEsQ0FBQ08sSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxVQUFwQixhQUFvQzFCLFlBQXBDLE9BREwsR0FFS2lCLFFBQVEsQ0FBQ08sSUFBVCxDQUFjQyxLQUFkLENBQW9CQyxVQUFwQixHQUFpQyxDQUZ0QztBQUdBLFdBQU8sWUFBTTtBQUNYTCxZQUFNLENBQUNNLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixZQUFyQztBQUNELEtBRkQ7QUFHRCxHQVhRLEVBV04sRUFYTSxDQUFUOztBQWFBLE1BQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIxQixhQUFTLENBQUN3QixNQUFNLENBQUNPLE9BQVIsQ0FBVDtBQUNELEdBRkQ7O0FBS0EsU0FDRSxNQUFDLDhDQUFELFFBQ0U7QUFDRSxhQUFTLDBCQUFtQmhDLE1BQU0sR0FBR0UsU0FBVCxHQUFxQixXQUFyQixHQUFtQyxFQUF0RDtBQURYLEtBR0UsTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQztBQUFyQixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBZ0JFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLE1BQUUsRUFBRStCLEVBQUEsR0FBeUI7QUFBNUMsS0FDRSxpQkFDRTtBQUNFLE9BQUcsRUFBRUEsRUFBQSxHQUF5Qix5QkFEaEM7QUFFRSxhQUFTLEVBQUMsV0FGWjtBQUdFLE9BQUcsRUFBQztBQUhOLElBREYsQ0FERixDQWhCRixDQUZGLEVBOEJFLE1BQUMsNERBQUQsT0E5QkYsRUFpQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDRSxrQkFDRTtBQUNFLFdBQU8sRUFBRSxtQkFBTTtBQUNieEIsOEJBQXdCLENBQUMsSUFBRCxDQUF4QjtBQUNBWSxjQUFRLENBQ0xDLGFBREgsQ0FDaUIsTUFEakIsRUFFR1ksU0FGSCxDQUVhQyxHQUZiLENBRWlCLGlCQUZqQjtBQUdEO0FBTkgsS0FRRSxNQUFDLDBEQUFELE9BUkYsQ0FERixDQURGLEVBYUUsa0JBQ0ksQ0FBQ25CLElBQUksQ0FBQ29CLFlBQVAsR0FBdUIsTUFBQyxnREFBRDtBQUN0QixRQUFJLEVBQUMsdUJBRGlCO0FBRXRCLE1BQUUsRUFBRUgsRUFBQSxHQUF5QjtBQUZQLEtBSXRCLGlCQUNFLE1BQUMseURBQUQsT0FERixDQUpzQixDQUF2QixHQVNIO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNBLGtCQUNBLGtCQUVOLE1BQUMsZ0RBQUQsUUFDc0IsaUJBQ1YsTUFBQyx5REFBRCxPQURVLENBRHRCLENBRk0sRUFPTixNQUFDLDZEQUFELE9BUE0sRUFTTjtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQU9FO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDRSxrQkFDRSxNQUFDLGdEQUFEO0FBQ0UsUUFBSSxFQUFDLDRCQURQO0FBRUUsTUFBRSxFQUFFQSxFQUFBLEdBQXlCO0FBRi9CLEtBSUUsbUNBSkYsQ0FERixDQURGLENBUEYsQ0FERixFQW9CRSxrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFDRSxPQUFHLEVBQ0RBLEVBQUEsR0FDQSx1Q0FISjtBQUtFLGFBQVMsRUFBQyxXQUxaO0FBTUUsT0FBRyxFQUFDO0FBTk4sSUFERixDQURGLENBcEJGLENBVE0sQ0FEQSxDQURBLENBdEJBLENBYkYsRUFvRkUsa0JBQ0U7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYnBCLGdDQUEwQixDQUFDLElBQUQsQ0FBMUI7QUFDQVEsY0FBUSxDQUNMQyxhQURILENBQ2lCLE1BRGpCLEVBRUdZLFNBRkgsQ0FFYUMsR0FGYixDQUVpQixpQkFGakI7QUFHRDtBQU5ILEtBUUUsTUFBQyw4REFBRCxPQVJGLEVBU0dyQyxhQUFhLENBQUN1QyxNQUFkLElBQXdCLENBQXhCLEdBQ0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDR3ZDLGFBQWEsQ0FBQ3VDLE1BQWQsR0FBdUJ2QyxhQUFhLENBQUN1QyxNQUFyQyxHQUE4QyxFQURqRCxDQURELEdBS0MsRUFkSixDQURGLENBcEZGLEVBdUdFLGtCQUNFO0FBQ0UsV0FBTyxFQUFFLG1CQUFNO0FBQ2IxQiw0QkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0FVLGNBQVEsQ0FDTEMsYUFESCxDQUNpQixNQURqQixFQUVHWSxTQUZILENBRWFDLEdBRmIsQ0FFaUIsaUJBRmpCO0FBR0Q7QUFOSCxLQVFFLE1BQUMsd0RBQUQsT0FSRixFQVNHdEMsU0FBUyxDQUFDd0MsTUFBVixJQUFvQixDQUFwQixHQUNDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQ0d4QyxTQUFTLENBQUN3QyxNQUFWLEdBQW1CeEMsU0FBUyxDQUFDd0MsTUFBN0IsR0FBc0MsRUFEekMsQ0FERCxHQUtDLEVBZEosQ0FERixDQXZHRixDQURGLEVBNkhFO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FDRSxrQkFDRSxNQUFDLGdEQUFEO0FBQ0UsUUFBSSxFQUFDLGlCQURQO0FBRUUsTUFBRSxFQUFFSixFQUFBLEdBQXlCO0FBRi9CLEtBSUUsaUJBQ0UsTUFBQyw4REFBRCxPQURGLEVBRUduQyxhQUFhLENBQUN1QyxNQUFkLElBQXdCLENBQXhCLEdBQ0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDR3ZDLGFBQWEsQ0FBQ3VDLE1BQWQsR0FBdUJ2QyxhQUFhLENBQUN1QyxNQUFyQyxHQUE4QyxFQURqRCxDQURELEdBS0MsRUFQSixDQUpGLENBREYsQ0FERixFQWtCRSxrQkFDRSxNQUFDLGdEQUFEO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxNQUFFLEVBQUVKLEVBQUEsR0FBeUI7QUFGL0IsS0FJRSxpQkFDRSxNQUFDLHdEQUFELE9BREYsRUFFR3BDLFNBQVMsQ0FBQ3dDLE1BQVYsSUFBb0IsQ0FBcEIsR0FDQztBQUFNLGFBQVMsRUFBQztBQUFoQixLQUNHeEMsU0FBUyxDQUFDd0MsTUFBVixHQUFtQnhDLFNBQVMsQ0FBQ3dDLE1BQTdCLEdBQXNDLEVBRHpDLENBREQsR0FLQyxFQVBKLENBSkYsQ0FERixDQWxCRixFQW1DRSxrQkFDRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU10Qiw0QkFBNEIsQ0FBQyxJQUFELENBQWxDO0FBQUE7QUFBakIsS0FDRSxNQUFDLHdEQUFELE9BREYsQ0FERixDQW5DRixDQTdIRixDQWpDRixDQURGLENBSEYsQ0FERixFQWtOR25CLFlBQVksS0FBSyxLQUFqQixHQUNDLEVBREQsR0FHQyxNQUFDLDhEQUFEO0FBQ0UsZ0JBQVksRUFBRVUsb0JBRGhCO0FBRUUsbUJBQWUsRUFBRUM7QUFGbkIsSUFyTkosRUEyTkUsTUFBQywrREFBRDtBQUNFLGdCQUFZLEVBQUVDLHFCQURoQjtBQUVFLG1CQUFlLEVBQUVDO0FBRm5CLElBM05GLEVBa09FLE1BQUMsNkRBQUQ7QUFDRSxnQkFBWSxFQUFFQyxtQkFEaEI7QUFFRSxtQkFBZSxFQUFFQztBQUZuQixJQWxPRixFQXdPRSxNQUFDLGlFQUFEO0FBQ0UsZ0JBQVksRUFBRUMsdUJBRGhCO0FBRUUsbUJBQWUsRUFBRUM7QUFGbkIsSUF4T0YsRUE2T0UsTUFBQyw2REFBRDtBQUNFLGdCQUFZLEVBQUVDLHlCQURoQjtBQUVFLG1CQUFlLEVBQUVDO0FBRm5CLElBN09GLENBREY7QUFvUEQsQ0FyUkQ7O0dBQU1wQixTO1VBWVNzQix1RDs7O0tBWlR0QixTOztBQXVSTixJQUFNMkMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTHJCLGFBQVMsRUFBRXFCLEtBQUssQ0FBQ3FCLFFBRFo7QUFFTHpDLGlCQUFhLEVBQUVvQixLQUFLLENBQUNzQjtBQUZoQixHQUFQO0FBSUQsQ0FMRDs7QUFPZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCM0MsU0FBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcC5qcy4wZWY3NTdkODg0OGViYTQzYjFiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIElvSW9zU2VhcmNoLFxyXG4gIElvTWRQZXJzb24sXHJcbiAgSW9Jb3NIZWFydEVtcHR5LFxyXG4gIElvSW9zQ2FydCxcclxuICBJb0lvc01lbnVcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vZWxlbWVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQWJvdXRPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL0Fib3V0T3ZlcmxheVwiO1xyXG5pbXBvcnQgU2VhcmNoT3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9TZWFyY2hPdmVybGF5XCI7XHJcbmltcG9ydCBDYXJ0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9DYXJ0T3ZlcmxheVwiO1xyXG5pbXBvcnQgV2lzaGxpc3RPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL1dpc2hsaXN0T3ZlcmxheVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9lbGVtZW50cy9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nXHJcbmltcG9ydCB7IHNpZ25vdXQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93RG93biwgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcblxyXG5jb25zdCBIZWFkZXJPbmUgPSAoeyBhYm91dE92ZXJsYXksIGNhcnRJdGVtcywgd2lzaGxpc3RJdGVtcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtoZWFkZXJUb3AsIHNldEhlYWRlclRvcF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaGVhZGVySGVpZ2h0LCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29mZkNhbnZhc0Fib3V0QWN0aXZlLCBzZXRPZmZDYW52YXNBYm91dEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc1NlYXJjaEFjdGl2ZSwgc2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzQ2FydEFjdGl2ZSwgc2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc1dpc2hsaXN0QWN0aXZlLCBzZXRPZmZDYW52YXNXaXNobGlzdEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmUsIHNldE9mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmVdID0gdXNlU3RhdGUoXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5hdXRoKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG4gICAgc2V0SGVhZGVyVG9wKGhlYWRlci5vZmZzZXRUb3ApO1xyXG4gICAgc2V0SGVhZGVySGVpZ2h0KGhlYWRlci5vZmZzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHNjcm9sbCA+IGhlYWRlclRvcFxyXG4gICAgICA/IChkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgKVxyXG4gICAgICA6IChkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAwKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT17YHRvcGJhci1zaGFkb3cgJHtzY3JvbGwgPiBoZWFkZXJUb3AgPyBcImlzLXN0aWNreVwiIDogXCJcIn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ3aWRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gcG9zaXRpb24tcmVsYXRpdmUgc3BhY2UtcHktbW9iaWxlLW9ubHktLTMwXCI+XHJcbiAgICAgICAgICAgIHsvKiBsb2dvICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50X19sb2dvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgc3BhY2UtcHItLTE1XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgYWJvdXRPdmVybGF5ID09PSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJhYm91dC1vdmVybGF5LXRyaWdnZXIgZC1ub25lIGQtbGctYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElvSW9zTWVudSAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogbmF2aWdhdGlvbiAqL31cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBpY29ucyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudF9faWNvbnMgc3BhY2UtcGwtLTE1XCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc1NlYXJjaCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIHsoIWF1dGguYXV0aGVudGljYXRlKSA/IDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdGhlci9sb2dpbi1yZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9sb2dpbi1yZWdpc3RlclwifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW9NZFBlcnNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPiA6XHJcbiAgICAgICAgICAgICAgICAvLyAgIDxEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgIC8vICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwidHJhbnNwYXJlbnRcIiBpZD1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgLy8gICA8YT48SW9NZFBlcnNvbiAvPjwvYT5cclxuICAgICAgICAgICAgICAgIC8vICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIC8vICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiPlNvbWV0aGluZyBlbHNlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgLy8gICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAvLyA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50X19uYXZpZ2F0aW9uIHNwYWNlLXByLS0wIHNwYWNlLXBsLS0wIGQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcblxyXG4gICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW9NZFBlcnNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxJb0lvc0Fycm93RG93biAvPlxyXG5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudSBzdWItbWVudS0tbWVnYSBzdWItbWVudS0tbWVnYS0tY29sdW1uLTRcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1Yi1tZW51LS1tZWdhX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wL2xlZnQtc2lkZWJhclwiXHJcbiAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvbGVmdC1zaWRlYmFyXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGE+RXlld2VhcjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudS0tbWVnYV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcD9wYXRoPW1lbnMtc3VuZ2xhc3Nlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL21lbnMtc3VuZ2xhc3Nlc1wifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+TWVucyBTdW5nbGFzc2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItbWVudS0tbWVnYV9faW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2UvZXlld2Vhci5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPZmZDYW52YXNXaXNobGlzdEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zSGVhcnRFbXB0eSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dpc2hsaXN0SXRlbXMubGVuZ3RoID8gd2lzaGxpc3RJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zQ2FydCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA/IGNhcnRJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3RoZXIvd2lzaGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvd2lzaGxpc3RcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvSW9zSGVhcnRFbXB0eSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3dpc2hsaXN0SXRlbXMubGVuZ3RoID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3dpc2hsaXN0SXRlbXMubGVuZ3RoID8gd2lzaGxpc3RJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL2NhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvY2FydFwifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NDYXJ0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID8gY2FydEl0ZW1zLmxlbmd0aCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc01lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgey8qIGFib3V0IG92ZXJsYXkgKi99XHJcbiAgICAgIHthYm91dE92ZXJsYXkgPT09IGZhbHNlID8gKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKSA6IChcclxuICAgICAgICA8QWJvdXRPdmVybGF5XHJcbiAgICAgICAgICBhY3RpdmVTdGF0dXM9e29mZkNhbnZhc0Fib3V0QWN0aXZlfVxyXG4gICAgICAgICAgZ2V0QWN0aXZlU3RhdHVzPXtzZXRPZmZDYW52YXNBYm91dEFjdGl2ZX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7Lyogc2VhcmNoIG92ZXJsYXkgKi99XHJcbiAgICAgIDxTZWFyY2hPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNTZWFyY2hBY3RpdmV9XHJcbiAgICAgICAgZ2V0QWN0aXZlU3RhdHVzPXtzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmV9XHJcblxyXG4gICAgICAvPlxyXG5cclxuICAgICAgey8qIGNhcnQgb3ZlcmxheSAqL31cclxuICAgICAgPENhcnRPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNDYXJ0QWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiB3aXNobGlzdCBvdmVybGF5ICovfVxyXG4gICAgICA8V2lzaGxpc3RPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNXaXNobGlzdEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlfVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogTW9iaWxlIE1lbnUgKi99XHJcbiAgICAgIDxNb2JpbGVNZW51XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZX1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjYXJ0SXRlbXM6IHN0YXRlLmNhcnREYXRhLFxyXG4gICAgd2lzaGxpc3RJdGVtczogc3RhdGUud2lzaGxpc3REYXRhXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXJPbmUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9