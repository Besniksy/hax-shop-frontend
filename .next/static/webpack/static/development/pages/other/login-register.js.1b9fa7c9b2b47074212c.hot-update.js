webpackHotUpdate("static\\development\\pages\\other\\login-register.js",{

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
  }, __jsx("a", null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], null))) : __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"].Toggle, {
    variant: "transparent",
    id: "dropdown-basic"
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], null)), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"].Menu, null, __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
    href: "#/action-1"
  }, "Action"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
    href: "#/action-2"
  }, "Another action"), __jsx(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
    href: "#/action-3"
  }, "Something else")))), __jsx("li", null, __jsx("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyT25lLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsImFib3V0T3ZlcmxheSIsImNhcnRJdGVtcyIsIndpc2hsaXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhlYWRlclRvcCIsInNldEhlYWRlclRvcCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsIm9mZkNhbnZhc0Fib3V0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUiLCJvZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJvZmZDYW52YXNDYXJ0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSIsIm9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlIiwic2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUiLCJvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlIiwic2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsImJvZHkiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInByb2Nlc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRoZW50aWNhdGUiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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bUNFLGtCQUNFO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTXRCLDRCQUE0QixDQUFDLElBQUQsQ0FBbEM7QUFBQTtBQUFqQixLQUNFLE1BQUMsd0RBQUQsT0FERixDQURGLENBbkNGLENBN0VGLENBakNGLENBREYsQ0FIRixDQURGLEVBa0tHbkIsWUFBWSxLQUFLLEtBQWpCLEdBQ0MsRUFERCxHQUdDLE1BQUMsOERBQUQ7QUFDRSxnQkFBWSxFQUFFVSxvQkFEaEI7QUFFRSxtQkFBZSxFQUFFQztBQUZuQixJQXJLSixFQTJLRSxNQUFDLCtEQUFEO0FBQ0UsZ0JBQVksRUFBRUMscUJBRGhCO0FBRUUsbUJBQWUsRUFBRUM7QUFGbkIsSUEzS0YsRUFrTEUsTUFBQyw2REFBRDtBQUNFLGdCQUFZLEVBQUVDLG1CQURoQjtBQUVFLG1CQUFlLEVBQUVDO0FBRm5CLElBbExGLEVBd0xFLE1BQUMsaUVBQUQ7QUFDRSxnQkFBWSxFQUFFQyx1QkFEaEI7QUFFRSxtQkFBZSxFQUFFQztBQUZuQixJQXhMRixFQTZMRSxNQUFDLDZEQUFEO0FBQ0UsZ0JBQVksRUFBRUMseUJBRGhCO0FBRUUsbUJBQWUsRUFBRUM7QUFGbkIsSUE3TEYsQ0FERjtBQW9NRCxDQXJPRDs7R0FBTXBCLFM7VUFZU3NCLHVEOzs7S0FaVHRCLFM7O0FBdU9OLElBQU0yQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMckIsYUFBUyxFQUFFcUIsS0FBSyxDQUFDcUIsUUFEWjtBQUVMekMsaUJBQWEsRUFBRW9CLEtBQUssQ0FBQ3NCO0FBRmhCLEdBQVA7QUFJRCxDQUxEOztBQU9lQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUIzQyxTQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxvdGhlclxcbG9naW4tcmVnaXN0ZXIuanMuMWI5ZmE3YzliMmI0NzA3NDIxMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBJb0lvc1NlYXJjaCxcclxuICBJb01kUGVyc29uLFxyXG4gIElvSW9zSGVhcnRFbXB0eSxcclxuICBJb0lvc0NhcnQsXHJcbiAgSW9Jb3NNZW51XHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2VsZW1lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEFib3V0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9BYm91dE92ZXJsYXlcIjtcclxuaW1wb3J0IFNlYXJjaE92ZXJsYXkgZnJvbSBcIi4vZWxlbWVudHMvU2VhcmNoT3ZlcmxheVwiO1xyXG5pbXBvcnQgQ2FydE92ZXJsYXkgZnJvbSBcIi4vZWxlbWVudHMvQ2FydE92ZXJsYXlcIjtcclxuaW1wb3J0IFdpc2hsaXN0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9XaXNobGlzdE92ZXJsYXlcIjtcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4vZWxlbWVudHMvTW9iaWxlTWVudVwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJ1xyXG5pbXBvcnQgeyBzaWdub3V0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlck9uZSA9ICh7IGFib3V0T3ZlcmxheSwgY2FydEl0ZW1zLCB3aXNobGlzdEl0ZW1zIH0pID0+IHtcclxuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2hlYWRlclRvcCwgc2V0SGVhZGVyVG9wXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtoZWFkZXJIZWlnaHQsIHNldEhlYWRlckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzQWJvdXRBY3RpdmUsIHNldE9mZkNhbnZhc0Fib3V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzU2VhcmNoQWN0aXZlLCBzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNDYXJ0QWN0aXZlLCBzZXRPZmZDYW52YXNDYXJ0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUsIHNldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSwgc2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmF1dGgpO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICBzZXRIZWFkZXJUb3AoaGVhZGVyLm9mZnNldFRvcCk7XHJcbiAgICBzZXRIZWFkZXJIZWlnaHQoaGVhZGVyLm9mZnNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgc2Nyb2xsID4gaGVhZGVyVG9wXHJcbiAgICAgID8gKGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IGAke2hlYWRlckhlaWdodH1weGApXHJcbiAgICAgIDogKGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IDApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkpO1xyXG4gIH07XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8aGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdG9wYmFyLXNoYWRvdyAke3Njcm9sbCA+IGhlYWRlclRvcCA/IFwiaXMtc3RpY2t5XCIgOiBcIlwifWB9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIndpZGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwb3NpdGlvbi1yZWxhdGl2ZSBzcGFjZS1weS1tb2JpbGUtb25seS0tMzBcIj5cclxuICAgICAgICAgICAgey8qIGxvZ28gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRfX2xvZ28gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBzcGFjZS1wci0tMTVcIj5cclxuICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPZmZDYW52YXNBYm91dEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICBhYm91dE92ZXJsYXkgPT09IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImFib3V0LW92ZXJsYXktdHJpZ2dlciBkLW5vbmUgZC1sZy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW9Jb3NNZW51IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBuYXZpZ2F0aW9uICovfVxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG5cclxuICAgICAgICAgICAgey8qIGljb25zICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50X19pY29ucyBzcGFjZS1wbC0tMTVcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc1NlYXJjaEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zU2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgeyghYXV0aC5hdXRoZW50aWNhdGUpID8gPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL2xvZ2luLXJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL2xvZ2luLXJlZ2lzdGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJb01kUGVyc29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+IDpcclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJ0cmFuc3BhcmVudFwiIGlkPVwiZHJvcGRvd24tYmFzaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW9NZFBlcnNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiPkFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMlwiPkFub3RoZXIgYWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+U29tZXRoaW5nIGVsc2U8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPZmZDYW52YXNXaXNobGlzdEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zSGVhcnRFbXB0eSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dpc2hsaXN0SXRlbXMubGVuZ3RoID8gd2lzaGxpc3RJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zQ2FydCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA/IGNhcnRJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbGctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3RoZXIvd2lzaGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvd2lzaGxpc3RcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvSW9zSGVhcnRFbXB0eSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3dpc2hsaXN0SXRlbXMubGVuZ3RoID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3dpc2hsaXN0SXRlbXMubGVuZ3RoID8gd2lzaGxpc3RJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL2NhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvY2FydFwifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NDYXJ0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID8gY2FydEl0ZW1zLmxlbmd0aCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc01lbnUgLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgey8qIGFib3V0IG92ZXJsYXkgKi99XHJcbiAgICAgIHthYm91dE92ZXJsYXkgPT09IGZhbHNlID8gKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKSA6IChcclxuICAgICAgICA8QWJvdXRPdmVybGF5XHJcbiAgICAgICAgICBhY3RpdmVTdGF0dXM9e29mZkNhbnZhc0Fib3V0QWN0aXZlfVxyXG4gICAgICAgICAgZ2V0QWN0aXZlU3RhdHVzPXtzZXRPZmZDYW52YXNBYm91dEFjdGl2ZX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7Lyogc2VhcmNoIG92ZXJsYXkgKi99XHJcbiAgICAgIDxTZWFyY2hPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNTZWFyY2hBY3RpdmV9XHJcbiAgICAgICAgZ2V0QWN0aXZlU3RhdHVzPXtzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmV9XHJcblxyXG4gICAgICAvPlxyXG5cclxuICAgICAgey8qIGNhcnQgb3ZlcmxheSAqL31cclxuICAgICAgPENhcnRPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNDYXJ0QWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiB3aXNobGlzdCBvdmVybGF5ICovfVxyXG4gICAgICA8V2lzaGxpc3RPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNXaXNobGlzdEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlfVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogTW9iaWxlIE1lbnUgKi99XHJcbiAgICAgIDxNb2JpbGVNZW51XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZX1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjYXJ0SXRlbXM6IHN0YXRlLmNhcnREYXRhLFxyXG4gICAgd2lzaGxpc3RJdGVtczogc3RhdGUud2lzaGxpc3REYXRhXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkZXJPbmUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9