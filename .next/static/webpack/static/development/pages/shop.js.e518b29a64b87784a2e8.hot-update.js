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
  }, __jsx("a", null, "Mens Sunglasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop?path=womens-sunglasses",
    as: "" + "/shop/womens-sunglasses"
  }, __jsx("a", null, "Womens Sunglasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop?path=mens-glasses",
    as: "" + "/shop/mens-glasses"
  }, __jsx("a", null, "Mens Glasses"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop?path=womens-glasses",
    as: "" + "/shop/womens-glasses"
  }, __jsx("a", null, "Womens Glasses"))))), __jsx("li", null, __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyT25lLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsImFib3V0T3ZlcmxheSIsImNhcnRJdGVtcyIsIndpc2hsaXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhlYWRlclRvcCIsInNldEhlYWRlclRvcCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsIm9mZkNhbnZhc0Fib3V0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUiLCJvZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJvZmZDYW52YXNDYXJ0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSIsIm9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlIiwic2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUiLCJvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlIiwic2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsImJvZHkiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInByb2Nlc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRoZW50aWNhdGUiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVFLG1CQUFlLEVBQUVDO0FBRm5CLElBbFFGLEVBdVFFLE1BQUMsNkRBQUQ7QUFDRSxnQkFBWSxFQUFFQyx5QkFEaEI7QUFFRSxtQkFBZSxFQUFFQztBQUZuQixJQXZRRixDQURGO0FBOFFELENBL1NEOztHQUFNcEIsUztVQVlTc0IsdUQ7OztLQVpUdEIsUzs7QUFpVE4sSUFBTTJDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xyQixhQUFTLEVBQUVxQixLQUFLLENBQUNxQixRQURaO0FBRUx6QyxpQkFBYSxFQUFFb0IsS0FBSyxDQUFDc0I7QUFGaEIsR0FBUDtBQUlELENBTEQ7O0FBT2VDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QjNDLFNBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNob3AuanMuZTUxOGIyOWE2NGI4Nzc4NGEyZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBJb0lvc1NlYXJjaCxcclxuICBJb01kUGVyc29uLFxyXG4gIElvSW9zSGVhcnRFbXB0eSxcclxuICBJb0lvc0NhcnQsXHJcbiAgSW9Jb3NNZW51XHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2VsZW1lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEFib3V0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9BYm91dE92ZXJsYXlcIjtcclxuaW1wb3J0IFNlYXJjaE92ZXJsYXkgZnJvbSBcIi4vZWxlbWVudHMvU2VhcmNoT3ZlcmxheVwiO1xyXG5pbXBvcnQgQ2FydE92ZXJsYXkgZnJvbSBcIi4vZWxlbWVudHMvQ2FydE92ZXJsYXlcIjtcclxuaW1wb3J0IFdpc2hsaXN0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9XaXNobGlzdE92ZXJsYXlcIjtcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4vZWxlbWVudHMvTW9iaWxlTWVudVwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJ1xyXG5pbXBvcnQgeyBzaWdub3V0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0Rvd24sIElvSW9zQXJyb3dGb3J3YXJkIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyT25lID0gKHsgYWJvdXRPdmVybGF5LCBjYXJ0SXRlbXMsIHdpc2hsaXN0SXRlbXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaGVhZGVyVG9wLCBzZXRIZWFkZXJUb3BdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2hlYWRlckhlaWdodCwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNBYm91dEFjdGl2ZSwgc2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNTZWFyY2hBY3RpdmUsIHNldE9mZkNhbnZhc1NlYXJjaEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc0NhcnRBY3RpdmUsIHNldE9mZkNhbnZhc0NhcnRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNXaXNobGlzdEFjdGl2ZSwgc2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlLCBzZXRPZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlXSA9IHVzZVN0YXRlKFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXV0aCk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuICAgIHNldEhlYWRlclRvcChoZWFkZXIub2Zmc2V0VG9wKTtcclxuICAgIHNldEhlYWRlckhlaWdodChoZWFkZXIub2Zmc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBzY3JvbGwgPiBoZWFkZXJUb3BcclxuICAgICAgPyAoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gYCR7aGVhZGVySGVpZ2h0fXB4YClcclxuICAgICAgOiAoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxoZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9e2B0b3BiYXItc2hhZG93ICR7c2Nyb2xsID4gaGVhZGVyVG9wID8gXCJpcy1zdGlja3lcIiA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwid2lkZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHBvc2l0aW9uLXJlbGF0aXZlIHNwYWNlLXB5LW1vYmlsZS1vbmx5LS0zMFwiPlxyXG4gICAgICAgICAgICB7LyogbG9nbyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudF9fbG9nbyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHNwYWNlLXByLS0xNVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc0Fib3V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIGFib3V0T3ZlcmxheSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICA/IFwiZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiYWJvdXQtb3ZlcmxheS10cmlnZ2VyIGQtbm9uZSBkLWxnLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJb0lvc01lbnUgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIG5hdmlnYXRpb24gKi99XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogaWNvbnMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRfX2ljb25zIHNwYWNlLXBsLS0xNVwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICB7KCFhdXRoLmF1dGhlbnRpY2F0ZSkgPyA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3RoZXIvbG9naW4tcmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvbG9naW4tcmVnaXN0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvTWRQZXJzb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz4gOlxyXG4gICAgICAgICAgICAgICAgLy8gICA8RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAvLyAgIDxEcm9wZG93bi5Ub2dnbGUgdmFyaWFudD1cInRyYW5zcGFyZW50XCIgaWQ9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgIC8vICAgPGE+PElvTWRQZXJzb24gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAvLyAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0xXCI+QWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0yXCI+QW5vdGhlciBhY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5Tb21ldGhpbmcgZWxzZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIC8vICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgLy8gPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudF9fbmF2aWdhdGlvbiBzcGFjZS1wci0tMCBzcGFjZS1wbC0tMCBkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG5cclxuICAgICAgICAgIDxMaW5rXHJcblxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvTWRQZXJzb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8SW9Jb3NBcnJvd0Rvd24gLz5cclxuXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnUgc3ViLW1lbnUtLW1lZ2Egc3ViLW1lbnUtLW1lZ2EtLWNvbHVtbi00XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWItbWVudS0tbWVnYV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICB7LyogPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcC9sZWZ0LXNpZGViYXJcIlxyXG4gICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2xlZnQtc2lkZWJhclwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhPkV5ZXdlYXI8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnUtLW1lZ2FfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3A/cGF0aD1tZW5zLXN1bmdsYXNzZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9tZW5zLXN1bmdsYXNzZXNcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1lbnMgU3VuZ2xhc3NlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3A/cGF0aD13b21lbnMtc3VuZ2xhc3Nlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3dvbWVucy1zdW5nbGFzc2VzXCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Xb21lbnMgU3VuZ2xhc3NlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3A/cGF0aD1tZW5zLWdsYXNzZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9tZW5zLWdsYXNzZXNcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPk1lbnMgR2xhc3NlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3A/cGF0aD13b21lbnMtZ2xhc3Nlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL3dvbWVucy1nbGFzc2VzXCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Xb21lbnMgR2xhc3NlczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLW1lbnUtLW1lZ2FfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlL2V5ZXdlYXIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0hlYXJ0RW1wdHkgLz5cclxuICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA/IHdpc2hsaXN0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc0NhcnRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0NhcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPyBjYXJ0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL3dpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL3dpc2hsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0hlYXJ0RW1wdHkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA/IHdpc2hsaXN0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdGhlci9jYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL2NhcnRcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvSW9zQ2FydCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA/IGNhcnRJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHsvKiBhYm91dCBvdmVybGF5ICovfVxyXG4gICAgICB7YWJvdXRPdmVybGF5ID09PSBmYWxzZSA/IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFib3V0T3ZlcmxheVxyXG4gICAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNBYm91dEFjdGl2ZX1cclxuICAgICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgey8qIHNlYXJjaCBvdmVybGF5ICovfVxyXG4gICAgICA8U2VhcmNoT3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzU2VhcmNoQWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlfVxyXG5cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBjYXJ0IG92ZXJsYXkgKi99XHJcbiAgICAgIDxDYXJ0T3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzQ2FydEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc0NhcnRBY3RpdmV9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Lyogd2lzaGxpc3Qgb3ZlcmxheSAqL31cclxuICAgICAgPFdpc2hsaXN0T3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmV9XHJcbiAgICAgICAgZ2V0QWN0aXZlU3RhdHVzPXtzZXRPZmZDYW52YXNXaXNobGlzdEFjdGl2ZX1cclxuICAgICAgLz5cclxuICAgICAgey8qIE1vYmlsZSBNZW51ICovfVxyXG4gICAgICA8TW9iaWxlTWVudVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmV9XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY2FydEl0ZW1zOiBzdGF0ZS5jYXJ0RGF0YSxcclxuICAgIHdpc2hsaXN0SXRlbXM6IHN0YXRlLndpc2hsaXN0RGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyT25lKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==