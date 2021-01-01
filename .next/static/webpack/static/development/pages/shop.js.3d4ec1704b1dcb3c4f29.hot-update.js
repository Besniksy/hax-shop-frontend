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

/***/ }),

/***/ "./src/redux/actions/authActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/authActions.js ***!
  \******************************************/
/*! exports provided: signup, login, isUserLoggedIn, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUserLoggedIn", function() { return isUserLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/redux/actions/constants.js");
/* harmony import */ var _helpers_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/axios */ "./src/helpers/axios.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // new update signup action

var signup = function signup(user) {
  return /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dispatch) {
      var res, _res$data, token, _user, error, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].SIGNUP_REQUEST
              });
              _context.next = 4;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/signup", user);

            case 4:
              res = _context.sent;

              if (res.status === 201) {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].SIGNUP_SUCCESS
                });
                _res$data = res.data, token = _res$data.token, _user = _res$data.user;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(_user));
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_SUCCESS,
                  payload: {
                    token: token,
                    user: _user
                  }
                });
              } else {
                error = res.data.error;
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].SIGNUP_FAILURE,
                  payload: {
                    error: error
                  }
                });
              }

              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              data = _context.t0.response.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].SIGNUP_FAILURE,
                payload: {
                  error: data.error
                }
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var login = function login(user) {
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dispatch) {
      var res, _res$data2, token, _user2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_REQUEST
              });
              _context2.next = 3;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/signin", _objectSpread({}, user));

            case 3:
              res = _context2.sent;

              if (res.status === 200) {
                _res$data2 = res.data, token = _res$data2.token, _user2 = _res$data2.user;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(_user2));
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_SUCCESS,
                  payload: {
                    token: token,
                    user: _user2
                  }
                });
              } else {
                if (res.status === 400) {
                  dispatch({
                    type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_FAILURE,
                    payload: {
                      error: res.data.error
                    }
                  });
                }
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var isUserLoggedIn = function isUserLoggedIn() {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(dispatch) {
      var token, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              token = localStorage.getItem("token");

              if (token) {
                user = JSON.parse(localStorage.getItem("user"));
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_SUCCESS,
                  payload: {
                    token: token,
                    user: user
                  }
                });
              } else {
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_FAILURE,
                  payload: {
                    error: "Failed to login"
                  }
                });
              }

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var signout = function signout() {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGOUT_REQUEST
              }); // localStorage.removeItem('user');
              // localStorage.removeItem('token');

              localStorage.clear();
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGOUT_SUCCESS
              }); // dispatch({ type: cartConstants.RESET_CART });
              //const res = await axios.post(`/admin/signout`);
              // if(res.status === 200){
              // }else{
              //     dispatch({
              //         type: authConstants.LOGOUT_FAILURE,
              //         payload: { error: res.data.error }
              //     });
              // }

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyT25lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsImFib3V0T3ZlcmxheSIsImNhcnRJdGVtcyIsIndpc2hsaXN0SXRlbXMiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhlYWRlclRvcCIsInNldEhlYWRlclRvcCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsIm9mZkNhbnZhc0Fib3V0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmUiLCJvZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmUiLCJvZmZDYW52YXNDYXJ0QWN0aXZlIiwic2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZSIsIm9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlIiwic2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUiLCJvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlIiwic2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlRWZmZWN0IiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsImJvZHkiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImxvZ291dCIsImRpc3BhdGNoIiwic2lnbm91dCIsInByb2Nlc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdXRoZW50aWNhdGUiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjYXJ0RGF0YSIsIndpc2hsaXN0RGF0YSIsImNvbm5lY3QiLCJzaWdudXAiLCJ1c2VyIiwidHlwZSIsImF1dGhDb25zdGFudHMiLCJTSUdOVVBfUkVRVUVTVCIsImF4aW9zIiwicG9zdCIsInJlcyIsInN0YXR1cyIsIlNJR05VUF9TVUNDRVNTIiwiZGF0YSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJMT0dJTl9TVUNDRVNTIiwicGF5bG9hZCIsImVycm9yIiwiU0lHTlVQX0ZBSUxVUkUiLCJyZXNwb25zZSIsImxvZ2luIiwiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX0ZBSUxVUkUiLCJpc1VzZXJMb2dnZWRJbiIsImdldEl0ZW0iLCJwYXJzZSIsIkxPR09VVF9SRVFVRVNUIiwiY2xlYXIiLCJMT0dPVVRfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZ0Q7QUFBQTs7QUFBQSxNQUE3Q0MsWUFBNkMsUUFBN0NBLFlBQTZDO0FBQUEsTUFBL0JDLFNBQStCLFFBQS9CQSxTQUErQjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7O0FBQUEsa0JBQ3BDQyxzREFBUSxDQUFDLENBQUQsQ0FENEI7QUFBQSxNQUN6REMsTUFEeUQ7QUFBQSxNQUNqREMsU0FEaUQ7O0FBQUEsbUJBRTlCRixzREFBUSxDQUFDLENBQUQsQ0FGc0I7QUFBQSxNQUV6REcsU0FGeUQ7QUFBQSxNQUU5Q0MsWUFGOEM7O0FBQUEsbUJBR3hCSixzREFBUSxDQUFDLENBQUQsQ0FIZ0I7QUFBQSxNQUd6REssWUFIeUQ7QUFBQSxNQUczQ0MsZUFIMkM7O0FBQUEsbUJBSVJOLHNEQUFRLENBQUMsS0FBRCxDQUpBO0FBQUEsTUFJekRPLG9CQUp5RDtBQUFBLE1BSW5DQyx1QkFKbUM7O0FBQUEsbUJBS05SLHNEQUFRLENBQUMsS0FBRCxD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QXFCLE1BQXJCLENBQVgsQ0FESjtBQUVUcEMsd0JBQVEsQ0FBQztBQUNQYSxzQkFBSSxFQUFFQyx3REFBYSxDQUFDYSxhQURiO0FBRVBDLHlCQUFPLEVBQUU7QUFDUE4seUJBQUssRUFBTEEsS0FETztBQUVQVix3QkFBSSxFQUFKQTtBQUZPO0FBRkYsaUJBQUQsQ0FBUjtBQU9ELGVBVEQsTUFTTztBQUNMWix3QkFBUSxDQUFDO0FBQ1BhLHNCQUFJLEVBQUVDLHdEQUFhLENBQUNvQixhQURiO0FBRVBOLHlCQUFPLEVBQUU7QUFBRUMseUJBQUssRUFBRTtBQUFUO0FBRkYsaUJBQUQsQ0FBUjtBQUlEOztBQWhCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JELENBbkJNO0FBcUJBLElBQU01QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQzNCO0FBQUEsaU1BQU8sa0JBQU9ELFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMQSxzQkFBUSxDQUFDO0FBQUVhLG9CQUFJLEVBQUVDLHdEQUFhLENBQUN3QjtBQUF0QixlQUFELENBQVIsQ0FESyxDQUVMO0FBQ0E7O0FBQ0FmLDBCQUFZLENBQUNnQixLQUFiO0FBQ0F2QyxzQkFBUSxDQUFDO0FBQUVhLG9CQUFJLEVBQUVDLHdEQUFhLENBQUMwQjtBQUF0QixlQUFELENBQVIsQ0FMSyxDQU1MO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJELENBbEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaG9wLmpzLjNkNGVjMTcwNGIxZGNiM2M0ZjI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgSW9Jb3NTZWFyY2gsXHJcbiAgSW9NZFBlcnNvbixcclxuICBJb0lvc0hlYXJ0RW1wdHksXHJcbiAgSW9Jb3NDYXJ0LFxyXG4gIElvSW9zTWVudSxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vZWxlbWVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQWJvdXRPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL0Fib3V0T3ZlcmxheVwiO1xyXG5pbXBvcnQgU2VhcmNoT3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9TZWFyY2hPdmVybGF5XCI7XHJcbmltcG9ydCBDYXJ0T3ZlcmxheSBmcm9tIFwiLi9lbGVtZW50cy9DYXJ0T3ZlcmxheVwiO1xyXG5pbXBvcnQgV2lzaGxpc3RPdmVybGF5IGZyb20gXCIuL2VsZW1lbnRzL1dpc2hsaXN0T3ZlcmxheVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9lbGVtZW50cy9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCB7IHNpZ25vdXQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93RG93biwgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmNvbnN0IEhlYWRlck9uZSA9ICh7IGFib3V0T3ZlcmxheSwgY2FydEl0ZW1zLCB3aXNobGlzdEl0ZW1zIH0pID0+IHtcclxuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2hlYWRlclRvcCwgc2V0SGVhZGVyVG9wXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtoZWFkZXJIZWlnaHQsIHNldEhlYWRlckhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzQWJvdXRBY3RpdmUsIHNldE9mZkNhbnZhc0Fib3V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzU2VhcmNoQWN0aXZlLCBzZXRPZmZDYW52YXNTZWFyY2hBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvZmZDYW52YXNDYXJ0QWN0aXZlLCBzZXRPZmZDYW52YXNDYXJ0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUsIHNldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZSwgc2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xyXG4gICAgc2V0SGVhZGVyVG9wKGhlYWRlci5vZmZzZXRUb3ApO1xyXG4gICAgc2V0SGVhZGVySGVpZ2h0KGhlYWRlci5vZmZzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHNjcm9sbCA+IGhlYWRlclRvcFxyXG4gICAgICA/IChkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtoZWFkZXJIZWlnaHR9cHhgKVxyXG4gICAgICA6IChkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdUb3AgPSAwKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsKHdpbmRvdy5zY3JvbGxZKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzaWdub3V0KCkpO1xyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxoZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9e2B0b3BiYXItc2hhZG93ICR7c2Nyb2xsID4gaGVhZGVyVG9wID8gXCJpcy1zdGlja3lcIiA6IFwiXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwid2lkZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHBvc2l0aW9uLXJlbGF0aXZlIHNwYWNlLXB5LW1vYmlsZS1vbmx5LS0zMFwiPlxyXG4gICAgICAgICAgICB7LyogbG9nbyAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudF9fbG9nbyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHNwYWNlLXByLS0xNVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc0Fib3V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgIGFib3V0T3ZlcmxheSA9PT0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICA/IFwiZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiYWJvdXQtb3ZlcmxheS10cmlnZ2VyIGQtbm9uZSBkLWxnLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJb0lvc01lbnUgLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIG5hdmlnYXRpb24gKi99XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogaWNvbnMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRfX2ljb25zIHNwYWNlLXBsLS0xNVwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwib3ZlcmZsb3ctaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICB7IWF1dGguYXV0aGVudGljYXRlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL2xvZ2luLXJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvb3RoZXIvbG9naW4tcmVnaXN0ZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElvTWRQZXJzb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8RHJvcGRvd24uVG9nZ2xlIHZhcmlhbnQ9XCJ0cmFuc3BhcmVudFwiIGlkPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICA8YT48SW9NZFBlcnNvbiAvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDxEcm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8RHJvcGRvd24uSXRlbSBocmVmPVwiIy9hY3Rpb24tMVwiPkFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTJcIj5Bbm90aGVyIGFjdGlvbjwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIiMvYWN0aW9uLTNcIj5Tb21ldGhpbmcgZWxzZTwvRHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAvLyA8L0Ryb3Bkb3duPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1jb250ZW50X19uYXZpZ2F0aW9uIHNwYWNlLXByLS0wIHNwYWNlLXBsLS0wIGQtbm9uZSBkLWxnLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJb01kUGVyc29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0Rvd24gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51IHN1Yi1tZW51LS1tZWdhIHN1Yi1tZW51LS1tZWdhLS1jb2x1bW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1Yi1tZW51LS1tZWdhX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnUtLW1lZ2FfX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID5Mb2dvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0T2ZmQ2FudmFzV2lzaGxpc3RBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0hlYXJ0RW1wdHkgLz5cclxuICAgICAgICAgICAgICAgICAgICB7d2lzaGxpc3RJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA/IHdpc2hsaXN0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldE9mZkNhbnZhc0NhcnRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1oaWRkZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb0lvc0NhcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPyBjYXJ0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL290aGVyL3dpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL3dpc2hsaXN0XCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJb0lvc0hlYXJ0RW1wdHkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA+PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt3aXNobGlzdEl0ZW1zLmxlbmd0aCA/IHdpc2hsaXN0SXRlbXMubGVuZ3RoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9vdGhlci9jYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL290aGVyL2NhcnRcIn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElvSW9zQ2FydCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcy5sZW5ndGggPj0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zLmxlbmd0aCA/IGNhcnRJdGVtcy5sZW5ndGggOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRPZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW9Jb3NNZW51IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIHsvKiBhYm91dCBvdmVybGF5ICovfVxyXG4gICAgICB7YWJvdXRPdmVybGF5ID09PSBmYWxzZSA/IChcclxuICAgICAgICBcIlwiXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFib3V0T3ZlcmxheVxyXG4gICAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNBYm91dEFjdGl2ZX1cclxuICAgICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzQWJvdXRBY3RpdmV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgey8qIHNlYXJjaCBvdmVybGF5ICovfVxyXG4gICAgICA8U2VhcmNoT3ZlcmxheVxyXG4gICAgICAgIGFjdGl2ZVN0YXR1cz17b2ZmQ2FudmFzU2VhcmNoQWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzU2VhcmNoQWN0aXZlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgey8qIGNhcnQgb3ZlcmxheSAqL31cclxuICAgICAgPENhcnRPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNDYXJ0QWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzQ2FydEFjdGl2ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiB3aXNobGlzdCBvdmVybGF5ICovfVxyXG4gICAgICA8V2lzaGxpc3RPdmVybGF5XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNXaXNobGlzdEFjdGl2ZX1cclxuICAgICAgICBnZXRBY3RpdmVTdGF0dXM9e3NldE9mZkNhbnZhc1dpc2hsaXN0QWN0aXZlfVxyXG4gICAgICAvPlxyXG4gICAgICB7LyogTW9iaWxlIE1lbnUgKi99XHJcbiAgICAgIDxNb2JpbGVNZW51XHJcbiAgICAgICAgYWN0aXZlU3RhdHVzPXtvZmZDYW52YXNNb2JpbGVNZW51QWN0aXZlfVxyXG4gICAgICAgIGdldEFjdGl2ZVN0YXR1cz17c2V0T2ZmQ2FudmFzTW9iaWxlTWVudUFjdGl2ZX1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjYXJ0SXRlbXM6IHN0YXRlLmNhcnREYXRhLFxyXG4gICAgd2lzaGxpc3RJdGVtczogc3RhdGUud2lzaGxpc3REYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyT25lKTtcclxuIiwiICBcclxuaW1wb3J0IHsgYXV0aENvbnN0YW50cywgY2FydENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXhpb3NcIlxyXG5cclxuLy8gbmV3IHVwZGF0ZSBzaWdudXAgYWN0aW9uXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSAodXNlcikgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGxldCByZXM7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IGF1dGhDb25zdGFudHMuU0lHTlVQX1JFUVVFU1QgfSk7XHJcbiAgICAgIHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYC9zaWdudXBgLCB1c2VyKTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogYXV0aENvbnN0YW50cy5TSUdOVVBfU1VDQ0VTUyB9KTtcclxuICAgICAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSByZXMuZGF0YTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IGF1dGhDb25zdGFudHMuTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogYXV0aENvbnN0YW50cy5TSUdOVVBfRkFJTFVSRSwgcGF5bG9hZDogeyBlcnJvciB9IH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5TSUdOVVBfRkFJTFVSRSxcclxuICAgICAgICBwYXlsb2FkOiB7IGVycm9yOiBkYXRhLmVycm9yIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9SRVFVRVNUIH0pO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgL3NpZ25pbmAsIHtcclxuICAgICAgLi4udXNlcixcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzLmRhdGE7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9TVUNDRVNTLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgdXNlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnJvciB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc1VzZXJMb2dnZWRJbiA9ICgpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGF1dGhDb25zdGFudHMuTE9HSU5fU1VDQ0VTUyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9GQUlMVVJFLFxyXG4gICAgICAgIHBheWxvYWQ6IHsgZXJyb3I6IFwiRmFpbGVkIHRvIGxvZ2luXCIgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdub3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogYXV0aENvbnN0YW50cy5MT0dPVVRfUkVRVUVTVCB9KTtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR09VVF9TVUNDRVNTIH0pO1xyXG4gICAgLy8gZGlzcGF0Y2goeyB0eXBlOiBjYXJ0Q29uc3RhbnRzLlJFU0VUX0NBUlQgfSk7XHJcbiAgICAvL2NvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hZG1pbi9zaWdub3V0YCk7XHJcbiAgICAvLyBpZihyZXMuc3RhdHVzID09PSAyMDApe1xyXG5cclxuICAgIC8vIH1lbHNle1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKHtcclxuICAgIC8vICAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5MT0dPVVRfRkFJTFVSRSxcclxuICAgIC8vICAgICAgICAgcGF5bG9hZDogeyBlcnJvcjogcmVzLmRhdGEuZXJyb3IgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==