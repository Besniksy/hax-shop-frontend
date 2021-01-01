webpackHotUpdate("static\\development\\pages\\other\\login-register.js",{

/***/ "./src/pages/other/login-register.js":
/*!*******************************************!*\
  !*** ./src/pages/other/login-register.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Breadcrumb */ "./src/components/Breadcrumb/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_authActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/authActions */ "./src/redux/actions/authActions.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;










var LoginRegister = function LoginRegister() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      firstName = _useState[0],
      setFirstName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      lastName = _useState2[0],
      setLastName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      loginEmail = _useState4[0],
      setLoginEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      password = _useState5[0],
      setPassword = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      loginPassword = _useState6[0],
      setLoginPassword = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      error = _useState7[0],
      setError = _useState7[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.auth;
  });
  var userName = auth.user.firstName;
  var errorSelect = auth.user.error;
  console.log(errorSelect);

  var userSignup = function userSignup(e) {
    e.preventDefault();
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["signup"])(user));
    setError(errorSelect);
  };

  var userLogin = function userLogin(e) {
    e.preventDefault();
    var email = loginEmail;
    var password = loginPassword;
    var user = {
      email: email,
      password: password
    };
    dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["login"])(user));
    console.log(user);
  };

  if (auth.authenticate) {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
  }

  console.log(auth);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["LayoutTwo"], null, __jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbOne"], {
    pageTitle: "Customer Login",
    backgroundImage: "/assets/images/backgrounds/breadcrumb-bg-2.jpg"
  }, __jsx("ul", {
    className: "breadcrumb__list"
  }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/",
    as: "" + "/"
  }, __jsx("a", null, "Home"))), __jsx("li", null, "Customer Login"))), __jsx("div", {
    className: "login-area space-mt--r130 space-mb--r130"
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 6,
    className: "space-mb-mobile-only--50"
  }, __jsx("div", {
    className: "lezada-form login-form"
  }, __jsx("form", {
    onSubmit: userLogin
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12
  }, __jsx("div", {
    className: "section-title--login text-center space-mb--50"
  }, error !== null && __jsx("p", null, error), __jsx("h2", {
    className: "space-mb--20"
  }, "Login"), __jsx("p", null, "Great to have you back!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "space-mb--60"
  }, __jsx("input", {
    type: "email",
    placeholder: "Email address",
    value: loginEmail,
    onChange: function onChange(e) {
      return setLoginEmail(e.target.value);
    },
    required: true
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "space-mb--60"
  }, __jsx("input", {
    type: "password",
    placeholder: "Password",
    value: loginPassword,
    onChange: function onChange(e) {
      return setLoginPassword(e.target.value);
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "space-mb--30"
  }, __jsx("button", {
    className: "lezada-button lezada-button--medium"
  }, "login")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("input", {
    type: "checkbox"
  }), " ", __jsx("span", {
    className: "remember-text"
  }, "Remember me"), __jsx("a", {
    href: "#",
    className: "reset-pass-link"
  }, "Lost your password?")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 6
  }, __jsx("div", {
    className: "lezada-form login-form--register"
  }, __jsx("form", {
    onSubmit: userSignup
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12
  }, __jsx("div", {
    className: "section-title--login text-center space-mb--50"
  }, __jsx("h2", {
    className: "space-mb--20"
  }, "Register"), __jsx("p", null, "If you don\u2019t have an account, register now!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "space-mb--30"
  }, __jsx("label", {
    htmlFor: "regFirstName"
  }, "First Name ", __jsx("span", {
    className: "required"
  }, "*"), " "), __jsx("input", {
    type: "text",
    id: "regEmail",
    value: firstName,
    onChange: function onChange(e) {
      return setFirstName(e.target.value);
    },
    required: true
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "space-mb--30"
  }, __jsx("label", {
    htmlFor: "regLastName"
  }, "Last Name ", __jsx("span", {
    className: "required"
  }, "*"), " "), __jsx("input", {
    type: "text",
    id: "regEmail",
    value: lastName,
    onChange: function onChange(e) {
      return setLastName(e.target.value);
    },
    required: true
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "space-mb--30"
  }, __jsx("label", {
    htmlFor: "regEmail"
  }, "Email Address ", __jsx("span", {
    className: "required"
  }, "*"), " "), __jsx("input", {
    type: "text",
    id: "regEmail",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    required: true
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "space-mb--50"
  }, __jsx("label", {
    htmlFor: "regPassword"
  }, "Password ", __jsx("span", {
    className: "required"
  }, "*"), " "), __jsx("input", {
    type: "password",
    id: "regPassword",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    required: true
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "text-center"
  }, __jsx("button", {
    className: "lezada-button lezada-button--medium"
  }, "register"))))))))));
};

_s(LoginRegister, "f+KGR0Vqkj5oVbmbBiYlsK6X6t4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = LoginRegister;
/* harmony default export */ __webpack_exports__["default"] = (LoginRegister);

var _c;

$RefreshReg$(_c, "LoginRegister");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvb3RoZXIvbG9naW4tcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiTG9naW5SZWdpc3RlciIsInVzZVN0YXRlIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJsb2dpbkVtYWlsIiwic2V0TG9naW5FbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dpblBhc3N3b3JkIiwic2V0TG9naW5QYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyTmFtZSIsInVzZXIiLCJlcnJvclNlbGVjdCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyU2lnbnVwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbnVwIiwidXNlckxvZ2luIiwibG9naW4iLCJhdXRoZW50aWNhdGUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvY2VzcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDbkJDLFNBRG1CO0FBQUEsTUFDUkMsWUFEUTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVuQkcsUUFGbUI7QUFBQSxNQUVUQyxXQUZTOztBQUFBLG1CQUdBSixzREFBUSxDQUFDLEVBQUQsQ0FIUjtBQUFBLE1BR25CSyxLQUhtQjtBQUFBLE1BR1pDLFFBSFk7O0FBQUEsbUJBSVVOLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSW5CTyxVQUptQjtBQUFBLE1BSVBDLGFBSk87O0FBQUEsbUJBS01SLHNEQUFRLENBQUMsRUFBRCxDQUxkO0FBQUEsTUFLbkJTLFFBTG1CO0FBQUEsTUFLVEMsV0FMUzs7QUFBQSxtQkFNZ0JWLHNEQUFRLENBQUMsRUFBRCxDQU54QjtBQUFBLE1BTW5CVyxhQU5tQjtBQUFBLE1BTUpDLGdCQU5JOztBQUFBLG1CQU9BWixzREFBUSxDQUFDLEVBQUQsQ0FQUjtBQUFBLE1BT25CYSxLQVBtQjtBQUFBLE1BT1pDLFFBUFk7O0FBUTFCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsSUFBakI7QUFBQSxHQUFELENBQXhCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHSCxJQUFJLENBQUNJLElBQUwsQ0FBVXBCLFNBQTNCO0FBQ0EsTUFBTXFCLFdBQVcsR0FBR0wsSUFBSSxDQUFDSSxJQUFMLENBQVVSLEtBQTlCO0FBRUFVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaOztBQUVBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBTU4sSUFBSSxHQUFHO0FBQ1hwQixlQUFTLEVBQVRBLFNBRFc7QUFFWEUsY0FBUSxFQUFSQSxRQUZXO0FBR1hFLFdBQUssRUFBTEEsS0FIVztBQUlYSSxjQUFRLEVBQVJBO0FBSlcsS0FBYjtBQU9BTSxZQUFRLENBQUNhLHlFQUFNLENBQUNQLElBQUQsQ0FBUCxDQUFSO0FBQ0FQLFlBQVEsQ0FBQ1EsV0FBRCxDQUFSO0FBQ0QsR0FaRDs7QUFjQSxNQUFNTyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSCxDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUl0QixLQUFLLEdBQUdFLFVBQVo7QUFDQSxRQUFJRSxRQUFRLEdBQUdFLGFBQWY7QUFDQSxRQUFNVSxJQUFJLEdBQUc7QUFDWGhCLFdBQUssRUFBTEEsS0FEVztBQUVYSSxjQUFRLEVBQVJBO0FBRlcsS0FBYjtBQUtBTSxZQUFRLENBQUNlLHdFQUFLLENBQUNULElBQUQsQ0FBTixDQUFSO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0QsR0FYRDs7QUFhQSxNQUFJSixJQUFJLENBQUNjLFlBQVQsRUFBdUI7QUFDckJDLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0FBRURWLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBRUEsU0FDRSxNQUFDLDREQUFELFFBRUUsTUFBQyxvRUFBRDtBQUNFLGFBQVMsRUFBQyxnQkFEWjtBQUVFLG1CQUFlLEVBQUM7QUFGbEIsS0FJRTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0Usa0JBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQWUsTUFBRSxFQUFFaUIsRUFBQSxHQUF5QjtBQUE1QyxLQUNFLHdCQURGLENBREYsQ0FERixFQU9FLG1DQVBGLENBSkYsQ0FGRixFQWdCRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyx5REFBRCxRQUNFLE1BQUMsbURBQUQsUUFDRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxhQUFTLEVBQUM7QUFBdEIsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTSxZQUFRLEVBQUVMO0FBQWhCLEtBQ0UsTUFBQyxtREFBRCxRQUNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBVCxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRWhCLEtBQUssS0FBSyxJQUFYLElBQW9CLGlCQUFJQSxLQUFKLENBRHJCLEVBR0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxhQUhGLEVBSUUsMkNBSkYsQ0FERixDQURGLEVBU0UsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsYUFBUyxFQUFDO0FBQXZCLEtBQ0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGVBQVcsRUFBQyxlQUZkO0FBR0UsU0FBSyxFQUFFTixVQUhUO0FBSUUsWUFBUSxFQUFFLGtCQUFDbUIsQ0FBRDtBQUFBLGFBQU9sQixhQUFhLENBQUNrQixDQUFDLENBQUNTLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBLEtBSlo7QUFNRSxZQUFRO0FBTlYsSUFERixDQVRGLEVBbUJFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLGFBQVMsRUFBQztBQUF2QixLQUNFO0FBQ0EsUUFBSSxFQUFDLFVBREw7QUFFQSxlQUFXLEVBQUMsVUFGWjtBQUdBLFNBQUssRUFBRXpCLGFBSFA7QUFJQSxZQUFRLEVBQUUsa0JBQUNlLENBQUQ7QUFBQSxhQUFPZCxnQkFBZ0IsQ0FBQ2MsQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBdkI7QUFBQTtBQUpWLElBREYsQ0FuQkYsRUEyQkUsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsYUFBUyxFQUFDO0FBQXZCLEtBQ0U7QUFBUSxhQUFTLEVBQUM7QUFBbEIsYUFERixDQTNCRixFQWdDRSxNQUFDLG1EQUFELFFBQ0U7QUFBTyxRQUFJLEVBQUM7QUFBWixJQURGLEVBQzRCLEdBRDVCLEVBRUU7QUFBTSxhQUFTLEVBQUM7QUFBaEIsbUJBRkYsRUFHRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQVksYUFBUyxFQUFDO0FBQXRCLDJCQUhGLENBaENGLENBREYsQ0FERixDQURGLENBREYsRUErQ0UsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRTtBQUFULEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQU0sWUFBUSxFQUFFWDtBQUFoQixLQUNFLE1BQUMsbURBQUQsUUFDRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFO0FBQVQsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxnQkFERixFQUVFLG9FQUZGLENBREYsQ0FERixFQU9FLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLGFBQVMsRUFBQztBQUF2QixLQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsb0JBQ2E7QUFBTSxhQUFTLEVBQUM7QUFBaEIsU0FEYixFQUNpRCxHQURqRCxDQURGLEVBSUU7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLE1BQUUsRUFBQyxVQUZMO0FBR0UsU0FBSyxFQUFFeEIsU0FIVDtBQUlFLFlBQVEsRUFBRSxrQkFBQ3lCLENBQUQ7QUFBQSxhQUFPeEIsWUFBWSxDQUFDd0IsQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxLQUpaO0FBS0UsWUFBUTtBQUxWLElBSkYsQ0FQRixFQW1CRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxhQUFTLEVBQUM7QUFBdkIsS0FDRTtBQUFPLFdBQU8sRUFBQztBQUFmLG1CQUNZO0FBQU0sYUFBUyxFQUFDO0FBQWhCLFNBRFosRUFDZ0QsR0FEaEQsQ0FERixFQUlFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxNQUFFLEVBQUMsVUFGTDtBQUdFLFNBQUssRUFBRWpDLFFBSFQ7QUFJRSxZQUFRLEVBQUUsa0JBQUN1QixDQUFEO0FBQUEsYUFBT3RCLFdBQVcsQ0FBQ3NCLENBQUMsQ0FBQ1MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsS0FKWjtBQUtFLFlBQVE7QUFMVixJQUpGLENBbkJGLEVBK0JFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLGFBQVMsRUFBQztBQUF2QixLQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsdUJBQ2dCO0FBQU0sYUFBUyxFQUFDO0FBQWhCLFNBRGhCLEVBQ29ELEdBRHBELENBREYsRUFJRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsTUFBRSxFQUFDLFVBRkw7QUFHRSxTQUFLLEVBQUUvQixLQUhUO0FBSUUsWUFBUSxFQUFFLGtCQUFDcUIsQ0FBRDtBQUFBLGFBQU9wQixRQUFRLENBQUNvQixDQUFDLENBQUNTLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsS0FKWjtBQUtFLFlBQVE7QUFMVixJQUpGLENBL0JGLEVBMkNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLGFBQVMsRUFBQztBQUF2QixLQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsa0JBQ1c7QUFBTSxhQUFTLEVBQUM7QUFBaEIsU0FEWCxFQUMrQyxHQUQvQyxDQURGLEVBSUU7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLE1BQUUsRUFBQyxhQUZMO0FBR0UsU0FBSyxFQUFFM0IsUUFIVDtBQUlFLFlBQVEsRUFBRSxrQkFBQ2lCLENBQUQ7QUFBQSxhQUFPaEIsV0FBVyxDQUFDZ0IsQ0FBQyxDQUFDUyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUpaO0FBS0UsWUFBUTtBQUxWLElBSkYsQ0EzQ0YsRUF1REUsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsYUFBUyxFQUFDO0FBQXZCLEtBQ0U7QUFBUSxhQUFTLEVBQUM7QUFBbEIsZ0JBREYsQ0F2REYsQ0FERixDQURGLENBREYsQ0EvQ0YsQ0FERixDQURGLENBaEJGLENBREY7QUEwSUQsQ0ExTEQ7O0dBQU1yQyxhO1VBUWFpQix1RCxFQUNKRSx1RDs7O0tBVFRuQixhO0FBNExTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb3RoZXJcXGxvZ2luLXJlZ2lzdGVyLmpzLjMyZjg3NzY2MzVhMmZiNzc4ZDAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IExheW91dFR3byB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iT25lIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnJlYWRjcnVtYlwiO1xyXG5pbXBvcnQgeyBpc1VzZXJMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzaWdudXAsIGxvZ2luIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IExvZ2luUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9naW5FbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2dpblBhc3N3b3JkLCBzZXRMb2dpblBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IHVzZXJOYW1lID0gYXV0aC51c2VyLmZpcnN0TmFtZVxyXG4gIGNvbnN0IGVycm9yU2VsZWN0ID0gYXV0aC51c2VyLmVycm9yXHJcblxyXG4gIGNvbnNvbGUubG9nKGVycm9yU2VsZWN0KVxyXG4gIFxyXG4gIGNvbnN0IHVzZXJTaWdudXAgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICBmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoKHNpZ251cCh1c2VyKSk7XHJcbiAgICBzZXRFcnJvcihlcnJvclNlbGVjdClcclxuICB9O1xyXG5cclxuICBjb25zdCB1c2VyTG9naW4gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtYWlsID0gbG9naW5FbWFpbFxyXG4gICAgbGV0IHBhc3N3b3JkID0gbG9naW5QYXNzd29yZFxyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNwYXRjaChsb2dpbih1c2VyKSk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gIH07XHJcblxyXG4gIGlmIChhdXRoLmF1dGhlbnRpY2F0ZSkge1xyXG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coYXV0aCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0VHdvPlxyXG4gICAgICB7LyogYnJlYWRjcnVtYiAqL31cclxuICAgICAgPEJyZWFkY3J1bWJPbmVcclxuICAgICAgICBwYWdlVGl0bGU9XCJDdXN0b21lciBMb2dpblwiXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlPVwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYnJlYWRjcnVtYi1iZy0yLmpwZ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9fbGlzdFwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpPkN1c3RvbWVyIExvZ2luPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L0JyZWFkY3J1bWJPbmU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYXJlYSBzcGFjZS1tdC0tcjEzMCBzcGFjZS1tYi0tcjEzMFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs2fSBjbGFzc05hbWU9XCJzcGFjZS1tYi1tb2JpbGUtb25seS0tNTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlemFkYS1mb3JtIGxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1c2VyTG9naW59PlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZS0tbG9naW4gdGV4dC1jZW50ZXIgc3BhY2UtbWItLTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7KGVycm9yICE9PSBudWxsKSAmJiA8cD57ZXJyb3J9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzcGFjZS1tYi0tMjBcIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdyZWF0IHRvIGhhdmUgeW91IGJhY2shPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS02MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2dpbkVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luRW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS02MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2dpblBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpblBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZXphZGEtYnV0dG9uIGxlemFkYS1idXR0b24tLW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbWVtYmVyLXRleHRcIj5SZW1lbWJlciBtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicmVzZXQtcGFzcy1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvc3QgeW91ciBwYXNzd29yZD9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs2fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlemFkYS1mb3JtIGxvZ2luLWZvcm0tLXJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXNlclNpZ251cH0+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlLS1sb2dpbiB0ZXh0LWNlbnRlciBzcGFjZS1tYi0tNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNwYWNlLW1iLS0yMFwiPlJlZ2lzdGVyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IGRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50LCByZWdpc3RlciBub3chPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdGaXJzdE5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnTGFzdE5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnRW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGV6YWRhLWJ1dHRvbiBsZXphZGEtYnV0dG9uLS1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dFR3bz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5SZWdpc3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==