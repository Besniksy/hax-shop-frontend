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
    id: "button",
    style: {
      outline: "none"
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyT25lLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsImFib3V0T3ZlcmxheSIsImNhcnRJdGVtcyIsIndpc2hsaXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhlYWRlclRvcCIsInNldEhlYWRlclRvcCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsIm9mZkNhbnZhc0Fib3V0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUiLCJvZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJvZmZDYW52YXNDYXJ0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSIsIm9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlIiwic2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUiLCJvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlIiwic2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsImJvZHkiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInByb2Nlc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRoZW50aWNhdGUiLCJvdXRsaW5lIiwibGVuZ3RoIiwibWFwU3RhdGVUb1Byb3BzIiwiY2FydERhdGEiLCJ3aXNobGlzdERhdGEiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7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QyxNQUE3QixHQUFzQyxFQUR6QyxDQURELEdBS0MsRUFQSixDQUpGLENBREYsQ0FsQkYsRUFtQ0Usa0JBQ0U7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNdkIsNEJBQTRCLENBQUMsSUFBRCxDQUFsQztBQUFBO0FBQWpCLEtBQ0UsTUFBQyx3REFBRCxPQURGLENBREYsQ0FuQ0YsQ0E3RUYsQ0FqQ0YsQ0FERixDQUhGLENBREYsRUFrS0duQixZQUFZLEtBQUssS0FBakIsR0FDQyxFQURELEdBR0MsTUFBQyw4REFBRDtBQUNFLGdCQUFZLEVBQUVVLG9CQURoQjtBQUVFLG1CQUFlLEVBQUVDO0FBRm5CLElBcktKLEVBMktFLE1BQUMsK0RBQUQ7QUFDRSxnQkFBWSxFQUFFQyxxQkFEaEI7QUFFRSxtQkFBZSxFQUFFQztBQUZuQixJQTNLRixFQWtMRSxNQUFDLDZEQUFEO0FBQ0UsZ0JBQVksRUFBRUMsbUJBRGhCO0FBRUUsbUJBQWUsRUFBRUM7QUFGbkIsSUFsTEYsRUF3TEUsTUFBQyxpRUFBRDtBQUNFLGdCQUFZLEVBQUVDLHVCQURoQjtBQUVFLG1CQUFlLEVBQUVDO0FBRm5CLElBeExGLEVBNkxFLE1BQUMsNkRBQUQ7QUFDRSxnQkFBWSxFQUFFQyx5QkFEaEI7QUFFRSxtQkFBZSxFQUFFQztBQUZuQixJQTdMRixDQURGO0FBb01ELENBck9EOztHQUFNcEIsUztVQVlTc0IsdUQ7OztLQVpUdEIsUzs7QUF1T04sSUFBTTRDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3JCLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xyQixhQUFTLEVBQUVxQixLQUFLLENBQUNzQixRQURaO0FBRUwxQyxpQkFBYSxFQUFFb0IsS0FBSyxDQUFDdUI7QUFGaEIsR0FBUDtBQUlELENBTEQ7O0FBT2VDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QjVDLFNBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG90aGVyXFxsb2dpbi1yZWdpc3Rlci5qcy4xMTMwMTkwYTljZTYxNDU4YWIzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIElvSW9zU2VhcmNoLFxyXG4gIElvTWRQZXJzb24sXHJcbiAgSW9Jb3NIZWFydEVtcHR5LFxyXG4gIElvSW9zQ2FydCxcclxuICBJb0lvc01lbnVcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vZWxlbWVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQWJvdXRPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL0Fib3V0T3ZlcmxheVwiO1xyXG5pbXBvcnQgU2VhcmNoT3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9TZWFyY2hPdmVybGF5XCI7XHJcbmltcG9ydCBDYXJ0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9DYXJ0T3ZlcmxheVwiO1xyXG5pbXBvcnQgV2lzaGxpc3RPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL1dpc2hsaXN0T3ZlcmxheVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9lbGVtZW50cy9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nXHJcbmltcG9ydCB7IHNpZ25vdXQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9uc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgSGVhZGVyT25lID0gKHsgYWJvdXRPdmVybGF5LCBjYXJ0SXRlbXMsIHdpc2hsaXN0SXRlbXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaGVhZGVyVG9wLCBzZXRIZWFkZXJUb3BdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2hlYWRlckhlaWdodCwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNBYm91dEFjdGl2ZSwgc2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNTZWFyY2hBY3RpdmUsIHNldE9mZkNhbnZhc1NlYXJjaEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc0NhcnRBY3RpdmUsIHNldE9mZkNhbnZhc0NhcnRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNXaXNobGlzdEFjdGl2ZSwgc2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlLCBzZXRPZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlXSA9IHVzZVN0YXRlKFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aCk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuICAgIHNldEhlYWRlclRvcChoZWFkZXIub2Zmc2V0VG9wKTtcclxuICAgIHNldEhlYWRlckhlaWdodChoZWFkZXIub2Zmc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBzY3JvbGwgPiBoZWFkZXJUb3BcclxuICAgICAgPyAoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gYCR7aGVhZGVySGVpZ2h0fXB4YClcclxuICAgICAgOiAoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxoZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9e2B0b3BiYXItc2hhZG93ICR7c2Nyb2xsID4gaGVhZGVyVG9wID8gXCJpcy1zdGlja3lcIiA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwid2lkZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHBvc2l0aW9uLXJlbGF0aXZlIHNwYWNlLXB5LW1vYmlsZS1vbmx5LS0zMFwiPlxyXG4gICAgICAgICAgICB7LyogbG9nbyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudF9fbG9nbyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHNwYWNlLXByLS0xNVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc0Fib3V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIGFib3V0T3ZlcmxheSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICA/IFwiZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiYWJvdXQtb3ZlcmxheS10cmlnZ2VyIGQtbm9uZSBkLWxnLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJb0lvc01lbnUgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIG5hdmlnYXRpb24gKi99XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogaWNvbnMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRfX2ljb25zIHNwYWNlLXBsLS0xNVwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICB7KCFhdXRoLmF1dGhlbnRpY2F0ZSkgPyA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3RoZXIvbG9naW4tcmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvbG9naW4tcmVnaXN0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvTWRQZXJzb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz4gOlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgdmFyaWFudD1cInRyYW5zcGFyZW50XCIgaWQ9XCJidXR0b25cIiBzdHlsZT17e291dGxpbmU6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvTWRQZXJzb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiPlNvbWV0aGluZyBlbHNlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0hlYXJ0RW1wdHkgLz5cclxuICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA/IHdpc2hsaXN0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc0NhcnRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0NhcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPyBjYXJ0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL3dpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL3dpc2hsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0hlYXJ0RW1wdHkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA/IHdpc2hsaXN0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdGhlci9jYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL2NhcnRcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvSW9zQ2FydCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA/IGNhcnRJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHsvKiBhYm91dCBvdmVybGF5ICovfVxyXG4gICAgICB7YWJvdXRPdmVybGF5ID09PSBmYWxzZSA/IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFib3V0T3ZlcmxheVxyXG4gICAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNBYm91dEFjdGl2ZX1cclxuICAgICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgey8qIHNlYXJjaCBvdmVybGF5ICovfVxyXG4gICAgICA8U2VhcmNoT3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzU2VhcmNoQWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlfVxyXG5cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBjYXJ0IG92ZXJsYXkgKi99XHJcbiAgICAgIDxDYXJ0T3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzQ2FydEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc0NhcnRBY3RpdmV9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Lyogd2lzaGxpc3Qgb3ZlcmxheSAqL31cclxuICAgICAgPFdpc2hsaXN0T3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmV9XHJcbiAgICAgICAgZ2V0QWN0aXZlU3RhdHVzPXtzZXRPZmZDYW52YXNXaXNobGlzdEFjdGl2ZX1cclxuICAgICAgLz5cclxuICAgICAgey8qIE1vYmlsZSBNZW51ICovfVxyXG4gICAgICA8TW9iaWxlTWVudVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmV9XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY2FydEl0ZW1zOiBzdGF0ZS5jYXJ0RGF0YSxcclxuICAgIHdpc2hsaXN0SXRlbXM6IHN0YXRlLndpc2hsaXN0RGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyT25lKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==