webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/authActions */ "./src/redux/actions/authActions.js");
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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var userName = auth.user.firstName;
  console.log(userName);
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

  var logout = function logout() {
    dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["signout"])());
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
  }, __jsx("ul", null, __jsx("li", null, __jsx("a", null, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdPerson"], null)), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowDown"], null), __jsx("ul", {
    className: "sub-menu sub-menu--mega sub-menu--mega--column-2"
  }, __jsx("li", {
    className: "sub-menu--mega__title"
  }, __jsx("ul", {
    className: "sub-menu--mega__list"
  }, __jsx("li", {
    onClick: logout
  }, __jsx("a", null, userName, " ")), __jsx("li", {
    onClick: logout
  }, __jsx("a", null, "Logout"))))))))), __jsx("li", null, __jsx("button", {
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

_s(HeaderOne, "QRsFET+xFcQtBLko47lT2l2+6/g=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyT25lLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsImFib3V0T3ZlcmxheSIsImNhcnRJdGVtcyIsIndpc2hsaXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhlYWRlclRvcCIsInNldEhlYWRlclRvcCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsIm9mZkNhbnZhc0Fib3V0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUiLCJvZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJvZmZDYW52YXNDYXJ0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSIsIm9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlIiwic2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUiLCJvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlIiwic2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXJOYW1lIiwidXNlciIsImZpcnN0TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwiYm9keSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwibG9nb3V0Iiwic2lnbm91dCIsInByb2Nlc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRoZW50aWNhdGUiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsImNvbm5lY3QiXSwibWFw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OztBQXVRTixJQUFNb0QsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDN0IsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTHJCLGFBQVMsRUFBRXFCLEtBQUssQ0FBQzhCLFFBRFo7QUFFTGxELGlCQUFhLEVBQUVvQixLQUFLLENBQUMrQjtBQUZoQixHQUFQO0FBSUQsQ0FMRDs7QUFPZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCcEQsU0FBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOWQ2NjQ3Y2Y1MjRkNjFlM2U1NzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBJb0lvc1NlYXJjaCxcclxuICBJb01kUGVyc29uLFxyXG4gIElvSW9zSGVhcnRFbXB0eSxcclxuICBJb0lvc0NhcnQsXHJcbiAgSW9Jb3NNZW51LFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9lbGVtZW50cy9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBBYm91dE92ZXJsYXkgZnJvbSBcIi4vZWxlbWVudHMvQWJvdXRPdmVybGF5XCI7XHJcbmltcG9ydCBTZWFyY2hPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL1NlYXJjaE92ZXJsYXlcIjtcclxuaW1wb3J0IENhcnRPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL0NhcnRPdmVybGF5XCI7XHJcbmltcG9ydCBXaXNobGlzdE92ZXJsYXkgZnJvbSBcIi4vZWxlbWVudHMvV2lzaGxpc3RPdmVybGF5XCI7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuL2VsZW1lbnRzL01vYmlsZU1lbnVcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRHJvcGRvd25cIjtcclxuaW1wb3J0IHsgc2lnbm91dCB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dEb3duLCBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuY29uc3QgSGVhZGVyT25lID0gKHsgYWJvdXRPdmVybGF5LCBjYXJ0SXRlbXMsIHdpc2hsaXN0SXRlbXMgfSkgPT4ge1xyXG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaGVhZGVyVG9wLCBzZXRIZWFkZXJUb3BdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2hlYWRlckhlaWdodCwgc2V0SGVhZGVySGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNBYm91dEFjdGl2ZSwgc2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNTZWFyY2hBY3RpdmUsIHNldE9mZkNhbnZhc1NlYXJjaEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc0NhcnRBY3RpdmUsIHNldE9mZkNhbnZhc0NhcnRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNXaXNobGlzdEFjdGl2ZSwgc2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlLCBzZXRPZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlXSA9IHVzZVN0YXRlKFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICBjb25zdCBhdXRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHVzZXJOYW1lID0gYXV0aC51c2VyLmZpcnN0TmFtZVxyXG4gIGNvbnNvbGUubG9nKHVzZXJOYW1lKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbiAgICBzZXRIZWFkZXJUb3AoaGVhZGVyLm9mZnNldFRvcCk7XHJcbiAgICBzZXRIZWFkZXJIZWlnaHQoaGVhZGVyLm9mZnNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgc2Nyb2xsID4gaGVhZGVyVG9wXHJcbiAgICAgID8gKGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IGAke2hlYWRlckhlaWdodH1weGApXHJcbiAgICAgIDogKGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IDApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGwod2luZG93LnNjcm9sbFkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNpZ25vdXQoKSk7XHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT17YHRvcGJhci1zaGFkb3cgJHtzY3JvbGwgPiBoZWFkZXJUb3AgPyBcImlzLXN0aWNreVwiIDogXCJcIn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ3aWRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gcG9zaXRpb24tcmVsYXRpdmUgc3BhY2UtcHktbW9iaWxlLW9ubHktLTMwXCI+XHJcbiAgICAgICAgICAgIHsvKiBsb2dvICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50X19sb2dvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgc3BhY2UtcHItLTE1XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgICAgYWJvdXRPdmVybGF5ID09PSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJhYm91dC1vdmVybGF5LXRyaWdnZXIgZC1ub25lIGQtbGctYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElvSW9zTWVudSAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogbmF2aWdhdGlvbiAqL31cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBpY29ucyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudF9faWNvbnMgc3BhY2UtcGwtLTE1XCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc1NlYXJjaCAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIHshYXV0aC5hdXRoZW50aWNhdGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3RoZXIvbG9naW4tcmVnaXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9sb2dpbi1yZWdpc3RlclwifVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9NZFBlcnNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDxEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDxEcm9wZG93bi5Ub2dnbGUgdmFyaWFudD1cInRyYW5zcGFyZW50XCIgaWQ9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDxhPjxJb01kUGVyc29uIC8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPERyb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0xXCI+QWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMlwiPkFub3RoZXIgYWN0aW9uPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tM1wiPlNvbWV0aGluZyBlbHNlPC9Ecm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDwvRHJvcGRvd24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRfX25hdmlnYXRpb24gc3BhY2UtcHItLTAgc3BhY2UtcGwtLTAgZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElvTWRQZXJzb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93RG93biAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnUgc3ViLW1lbnUtLW1lZ2Egc3ViLW1lbnUtLW1lZ2EtLWNvbHVtbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3ViLW1lbnUtLW1lZ2FfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudS0tbWVnYV9fbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgPnt1c2VyTmFtZX0gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NIZWFydEVtcHR5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3dpc2hsaXN0SXRlbXMubGVuZ3RoID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPyB3aXNobGlzdEl0ZW1zLmxlbmd0aCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPZmZDYW52YXNDYXJ0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NDYXJ0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID8gY2FydEl0ZW1zLmxlbmd0aCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtYmxvY2sgZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdGhlci93aXNobGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci93aXNobGlzdFwifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NIZWFydEVtcHR5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPyB3aXNobGlzdEl0ZW1zLmxlbmd0aCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3RoZXIvY2FydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9jYXJ0XCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0NhcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPyBjYXJ0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICB7LyogYWJvdXQgb3ZlcmxheSAqL31cclxuICAgICAge2Fib3V0T3ZlcmxheSA9PT0gZmFsc2UgPyAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxBYm91dE92ZXJsYXlcclxuICAgICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzQWJvdXRBY3RpdmV9XHJcbiAgICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc0Fib3V0QWN0aXZlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiBzZWFyY2ggb3ZlcmxheSAqL31cclxuICAgICAgPFNlYXJjaE92ZXJsYXlcclxuICAgICAgICBhY3RpdmVTdGF0dXM9e29mZkNhbnZhc1NlYXJjaEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc1NlYXJjaEFjdGl2ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBjYXJ0IG92ZXJsYXkgKi99XHJcbiAgICAgIDxDYXJ0T3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzQ2FydEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc0NhcnRBY3RpdmV9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Lyogd2lzaGxpc3Qgb3ZlcmxheSAqL31cclxuICAgICAgPFdpc2hsaXN0T3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmV9XHJcbiAgICAgICAgZ2V0QWN0aXZlU3RhdHVzPXtzZXRPZmZDYW52YXNXaXNobGlzdEFjdGl2ZX1cclxuICAgICAgLz5cclxuICAgICAgey8qIE1vYmlsZSBNZW51ICovfVxyXG4gICAgICA8TW9iaWxlTWVudVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmV9XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY2FydEl0ZW1zOiBzdGF0ZS5jYXJ0RGF0YSxcclxuICAgIHdpc2hsaXN0SXRlbXM6IHN0YXRlLndpc2hsaXN0RGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlck9uZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=