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
  }, __jsx("li", null, __jsx("a", null, userName, " ")), __jsx("li", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyT25lLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsImFib3V0T3ZlcmxheSIsImNhcnRJdGVtcyIsIndpc2hsaXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhlYWRlclRvcCIsInNldEhlYWRlclRvcCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsIm9mZkNhbnZhc0Fib3V0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUiLCJvZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJvZmZDYW52YXNDYXJ0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSIsIm9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlIiwic2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUiLCJvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlIiwic2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXJOYW1lIiwidXNlciIsImZpcnN0TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwiYm9keSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwibG9nb3V0Iiwic2lnbm91dCIsInByb2Nlc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRoZW50aWNhdGUiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsImNvbm5lY3QiXSwibWFw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R0FBRyxTQUFsQkEsZUFBa0IsQ0FBQzdCLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xyQixhQUFTLEVBQUVxQixLQUFLLENBQUM4QixRQURaO0FBRUxsRCxpQkFBYSxFQUFFb0IsS0FBSyxDQUFDK0I7QUFGaEIsR0FBUDtBQUlELENBTEQ7O0FBT2VDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QnBELFNBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjJjMTY4Y2E0ZGU2ZTVhOTkyODYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgSW9Jb3NTZWFyY2gsXHJcbiAgSW9NZFBlcnNvbixcclxuICBJb0lvc0hlYXJ0RW1wdHksXHJcbiAgSW9Jb3NDYXJ0LFxyXG4gIElvSW9zTWVudSxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vZWxlbWVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQWJvdXRPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL0Fib3V0T3ZlcmxheVwiO1xyXG5pbXBvcnQgU2VhcmNoT3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9TZWFyY2hPdmVybGF5XCI7XHJcbmltcG9ydCBDYXJ0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9DYXJ0T3ZlcmxheVwiO1xyXG5pbXBvcnQgV2lzaGxpc3RPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL1dpc2hsaXN0T3ZlcmxheVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9lbGVtZW50cy9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCB7IHNpZ25vdXQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93RG93biwgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmNvbnN0IEhlYWRlck9uZSA9ICh7IGFib3V0T3ZlcmxheSwgY2FydEl0ZW1zLCB3aXNobGlzdEl0ZW1zIH0pID0+IHtcclxuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2hlYWRlclRvcCwgc2V0SGVhZGVyVG9wXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtoZWFkZXJIZWlnaHQsIHNldEhlYWRlckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzQWJvdXRBY3RpdmUsIHNldE9mZkNhbnZhc0Fib3V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzU2VhcmNoQWN0aXZlLCBzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNDYXJ0QWN0aXZlLCBzZXRPZmZDYW52YXNDYXJ0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUsIHNldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSwgc2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCB1c2VyTmFtZSA9IGF1dGgudXNlci5maXJzdE5hbWVcclxuICBjb25zb2xlLmxvZyh1c2VyTmFtZSlcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG4gICAgc2V0SGVhZGVyVG9wKGhlYWRlci5vZmZzZXRUb3ApO1xyXG4gICAgc2V0SGVhZGVySGVpZ2h0KGhlYWRlci5vZmZzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHNjcm9sbCA+IGhlYWRlclRvcFxyXG4gICAgICA/IChkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgKVxyXG4gICAgICA6IChkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAwKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzaWdub3V0KCkpO1xyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxoZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9e2B0b3BiYXItc2hhZG93ICR7c2Nyb2xsID4gaGVhZGVyVG9wID8gXCJpcy1zdGlja3lcIiA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwid2lkZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHBvc2l0aW9uLXJlbGF0aXZlIHNwYWNlLXB5LW1vYmlsZS1vbmx5LS0zMFwiPlxyXG4gICAgICAgICAgICB7LyogbG9nbyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudF9fbG9nbyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHNwYWNlLXByLS0xNVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc0Fib3V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIGFib3V0T3ZlcmxheSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICA/IFwiZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiYWJvdXQtb3ZlcmxheS10cmlnZ2VyIGQtbm9uZSBkLWxnLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJb0lvc01lbnUgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIG5hdmlnYXRpb24gKi99XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogaWNvbnMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRfX2ljb25zIHNwYWNlLXBsLS0xNVwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICB7IWF1dGguYXV0aGVudGljYXRlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL2xvZ2luLXJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvbG9naW4tcmVnaXN0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElvTWRQZXJzb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJ0cmFuc3BhcmVudFwiIGlkPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8YT48SW9NZFBlcnNvbiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiPkFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5Tb21ldGhpbmcgZWxzZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAvLyA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50X19uYXZpZ2F0aW9uIHNwYWNlLXByLS0wIHNwYWNlLXBsLS0wIGQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb01kUGVyc29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0Rvd24gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51IHN1Yi1tZW51LS1tZWdhIHN1Yi1tZW51LS1tZWdhLS1jb2x1bW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1Yi1tZW51LS1tZWdhX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnUtLW1lZ2FfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSA+e3VzZXJOYW1lfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0hlYXJ0RW1wdHkgLz5cclxuICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA/IHdpc2hsaXN0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc0NhcnRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0NhcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPyBjYXJ0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL3dpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL3dpc2hsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0hlYXJ0RW1wdHkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA/IHdpc2hsaXN0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdGhlci9jYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL2NhcnRcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvSW9zQ2FydCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA/IGNhcnRJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHsvKiBhYm91dCBvdmVybGF5ICovfVxyXG4gICAgICB7YWJvdXRPdmVybGF5ID09PSBmYWxzZSA/IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFib3V0T3ZlcmxheVxyXG4gICAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNBYm91dEFjdGl2ZX1cclxuICAgICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgey8qIHNlYXJjaCBvdmVybGF5ICovfVxyXG4gICAgICA8U2VhcmNoT3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzU2VhcmNoQWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgey8qIGNhcnQgb3ZlcmxheSAqL31cclxuICAgICAgPENhcnRPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNDYXJ0QWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiB3aXNobGlzdCBvdmVybGF5ICovfVxyXG4gICAgICA8V2lzaGxpc3RPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNXaXNobGlzdEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlfVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogTW9iaWxlIE1lbnUgKi99XHJcbiAgICAgIDxNb2JpbGVNZW51XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZX1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjYXJ0SXRlbXM6IHN0YXRlLmNhcnREYXRhLFxyXG4gICAgd2lzaGxpc3RJdGVtczogc3RhdGUud2lzaGxpc3REYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyT25lKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==