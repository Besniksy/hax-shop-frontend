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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyT25lLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsImFib3V0T3ZlcmxheSIsImNhcnRJdGVtcyIsIndpc2hsaXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhlYWRlclRvcCIsInNldEhlYWRlclRvcCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsIm9mZkNhbnZhc0Fib3V0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUiLCJvZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJvZmZDYW52YXNDYXJ0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSIsIm9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlIiwic2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUiLCJvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlIiwic2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXJOYW1lIiwidXNlciIsImZpcnN0TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwiYm9keSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwibG9nb3V0Iiwic2lnbm91dCIsInByb2Nlc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRoZW50aWNhdGUiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsImNvbm5lY3QiXSwibWFw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QUFDakMsU0FBTztBQUNMckIsYUFBUyxFQUFFcUIsS0FBSyxDQUFDOEIsUUFEWjtBQUVMbEQsaUJBQWEsRUFBRW9CLEtBQUssQ0FBQytCO0FBRmhCLEdBQVA7QUFJRCxDQUxEOztBQU9lQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJwRCxTQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mYTU0OTkzYzBkYzFmZjY1Y2UzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIElvSW9zU2VhcmNoLFxyXG4gIElvTWRQZXJzb24sXHJcbiAgSW9Jb3NIZWFydEVtcHR5LFxyXG4gIElvSW9zQ2FydCxcclxuICBJb0lvc01lbnUsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2VsZW1lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEFib3V0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9BYm91dE92ZXJsYXlcIjtcclxuaW1wb3J0IFNlYXJjaE92ZXJsYXkgZnJvbSBcIi4vZWxlbWVudHMvU2VhcmNoT3ZlcmxheVwiO1xyXG5pbXBvcnQgQ2FydE92ZXJsYXkgZnJvbSBcIi4vZWxlbWVudHMvQ2FydE92ZXJsYXlcIjtcclxuaW1wb3J0IFdpc2hsaXN0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9XaXNobGlzdE92ZXJsYXlcIjtcclxuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSBcIi4vZWxlbWVudHMvTW9iaWxlTWVudVwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Ecm9wZG93blwiO1xyXG5pbXBvcnQgeyBzaWdub3V0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0Rvd24sIElvSW9zQXJyb3dGb3J3YXJkIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBIZWFkZXJPbmUgPSAoeyBhYm91dE92ZXJsYXksIGNhcnRJdGVtcywgd2lzaGxpc3RJdGVtcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtoZWFkZXJUb3AsIHNldEhlYWRlclRvcF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaGVhZGVySGVpZ2h0LCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29mZkNhbnZhc0Fib3V0QWN0aXZlLCBzZXRPZmZDYW52YXNBYm91dEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc1NlYXJjaEFjdGl2ZSwgc2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzQ2FydEFjdGl2ZSwgc2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc1dpc2hsaXN0QWN0aXZlLCBzZXRPZmZDYW52YXNXaXNobGlzdEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmUsIHNldE9mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmVdID0gdXNlU3RhdGUoXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgdXNlck5hbWUgPSBhdXRoLnVzZXIuZmlyc3ROYW1lXHJcbiAgY29uc29sZS5sb2codXNlck5hbWUpXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuICAgIHNldEhlYWRlclRvcChoZWFkZXIub2Zmc2V0VG9wKTtcclxuICAgIHNldEhlYWRlckhlaWdodChoZWFkZXIub2Zmc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICBzY3JvbGwgPiBoZWFkZXJUb3BcclxuICAgICAgPyAoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gYCR7aGVhZGVySGVpZ2h0fXB4YClcclxuICAgICAgOiAoZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nVG9wID0gMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2lnbm91dCgpKTtcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8aGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdG9wYmFyLXNoYWRvdyAke3Njcm9sbCA+IGhlYWRlclRvcCA/IFwiaXMtc3RpY2t5XCIgOiBcIlwifWB9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIndpZGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBwb3NpdGlvbi1yZWxhdGl2ZSBzcGFjZS1weS1tb2JpbGUtb25seS0tMzBcIj5cclxuICAgICAgICAgICAgey8qIGxvZ28gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRfX2xvZ28gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBzcGFjZS1wci0tMTVcIj5cclxuICAgICAgICAgICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPZmZDYW52YXNBYm91dEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICBhYm91dE92ZXJsYXkgPT09IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImFib3V0LW92ZXJsYXktdHJpZ2dlciBkLW5vbmUgZC1sZy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW9Jb3NNZW51IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBuYXZpZ2F0aW9uICovfVxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG5cclxuICAgICAgICAgICAgey8qIGljb25zICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50X19pY29ucyBzcGFjZS1wbC0tMTVcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc1NlYXJjaEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zU2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgeyFhdXRoLmF1dGhlbnRpY2F0ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdGhlci9sb2dpbi1yZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL2xvZ2luLXJlZ2lzdGVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJb01kUGVyc29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwidHJhbnNwYXJlbnRcIiBpZD1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgPGE+PElvTWRQZXJzb24gLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8RHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTFcIj5BY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0yXCI+QW5vdGhlciBhY3Rpb248L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIjL2FjdGlvbi0zXCI+U29tZXRoaW5nIGVsc2U8L0Ryb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPC9Ecm9wZG93bj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudF9fbmF2aWdhdGlvbiBzcGFjZS1wci0tMCBzcGFjZS1wbC0tMCBkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9NZFBlcnNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dEb3duIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudSBzdWItbWVudS0tbWVnYSBzdWItbWVudS0tbWVnYS0tY29sdW1uLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWItbWVudS0tbWVnYV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51LS1tZWdhX19saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA+TG9nb3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NIZWFydEVtcHR5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3dpc2hsaXN0SXRlbXMubGVuZ3RoID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPyB3aXNobGlzdEl0ZW1zLmxlbmd0aCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRPZmZDYW52YXNDYXJ0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NDYXJ0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID8gY2FydEl0ZW1zLmxlbmd0aCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtYmxvY2sgZC1sZy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdGhlci93aXNobGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci93aXNobGlzdFwifVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NIZWFydEVtcHR5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPyB3aXNobGlzdEl0ZW1zLmxlbmd0aCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvb3RoZXIvY2FydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9vdGhlci9jYXJ0XCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0NhcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMubGVuZ3RoID49IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPyBjYXJ0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvSW9zTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICB7LyogYWJvdXQgb3ZlcmxheSAqL31cclxuICAgICAge2Fib3V0T3ZlcmxheSA9PT0gZmFsc2UgPyAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxBYm91dE92ZXJsYXlcclxuICAgICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzQWJvdXRBY3RpdmV9XHJcbiAgICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc0Fib3V0QWN0aXZlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiBzZWFyY2ggb3ZlcmxheSAqL31cclxuICAgICAgPFNlYXJjaE92ZXJsYXlcclxuICAgICAgICBhY3RpdmVTdGF0dXM9e29mZkNhbnZhc1NlYXJjaEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc1NlYXJjaEFjdGl2ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBjYXJ0IG92ZXJsYXkgKi99XHJcbiAgICAgIDxDYXJ0T3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzQ2FydEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc0NhcnRBY3RpdmV9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7Lyogd2lzaGxpc3Qgb3ZlcmxheSAqL31cclxuICAgICAgPFdpc2hsaXN0T3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmV9XHJcbiAgICAgICAgZ2V0QWN0aXZlU3RhdHVzPXtzZXRPZmZDYW52YXNXaXNobGlzdEFjdGl2ZX1cclxuICAgICAgLz5cclxuICAgICAgey8qIE1vYmlsZSBNZW51ICovfVxyXG4gICAgICA8TW9iaWxlTWVudVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc01vYmlsZU1lbnVBY3RpdmV9XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY2FydEl0ZW1zOiBzdGF0ZS5jYXJ0RGF0YSxcclxuICAgIHdpc2hsaXN0SXRlbXM6IHN0YXRlLndpc2hsaXN0RGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlck9uZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=