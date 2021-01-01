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

  var userSignup = function userSignup(e) {
    e.preventDefault();
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["signup"])(user));
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
    setError(errorSelect);
    console.log(errorSelect);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvb3RoZXIvbG9naW4tcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiTG9naW5SZWdpc3RlciIsInVzZVN0YXRlIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJsb2dpbkVtYWlsIiwic2V0TG9naW5FbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dpblBhc3N3b3JkIiwic2V0TG9naW5QYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyTmFtZSIsInVzZXIiLCJlcnJvclNlbGVjdCIsInVzZXJTaWdudXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaWdudXAiLCJ1c2VyTG9naW4iLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJhdXRoZW50aWNhdGUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvY2VzcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDbkJDLFNBRG1CO0FBQUEsTUFDUkMsWUFEUTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVuQkcsUUFGbUI7QUFBQSxNQUVUQyxXQUZTOztBQUFBLG1CQUdBSixzREFBUSxDQUFDLEVBQUQsQ0FIUjtBQUFBLE1BR25CSyxLQUhtQjtBQUFBLE1BR1pDLFFBSFk7O0FBQUEsbUJBSVVOLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSW5CTyxVQUptQjtB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QUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLGFBQVMsRUFBQztBQUF2QixLQUNFO0FBQU8sV0FBTyxFQUFDO0FBQWYsa0JBQ1c7QUFBTSxhQUFTLEVBQUM7QUFBaEIsU0FEWCxFQUMrQyxHQUQvQyxDQURGLEVBSUU7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLE1BQUUsRUFBQyxhQUZMO0FBR0UsU0FBSyxFQUFFM0IsUUFIVDtBQUlFLFlBQVEsRUFBRSxrQkFBQ2UsQ0FBRDtBQUFBLGFBQU9kLFdBQVcsQ0FBQ2MsQ0FBQyxDQUFDVyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUpaO0FBS0UsWUFBUTtBQUxWLElBSkYsQ0EzQ0YsRUF1REUsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsYUFBUyxFQUFDO0FBQXZCLEtBQ0U7QUFBUSxhQUFTLEVBQUM7QUFBbEIsZ0JBREYsQ0F2REYsQ0FERixDQURGLENBREYsQ0EvQ0YsQ0FERixDQURGLENBaEJGLENBREY7QUEwSUQsQ0E1TEQ7O0dBQU1yQyxhO1VBUWFpQix1RCxFQUNKRSx1RDs7O0tBVFRuQixhO0FBOExTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb3RoZXJcXGxvZ2luLXJlZ2lzdGVyLmpzLjQzNzZhZTMzMTE2N2JmNzY2ZmNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IExheW91dFR3byB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iT25lIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnJlYWRjcnVtYlwiO1xyXG5pbXBvcnQgeyBpc1VzZXJMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzaWdudXAsIGxvZ2luIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IExvZ2luUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9naW5FbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2dpblBhc3N3b3JkLCBzZXRMb2dpblBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnN0IHVzZXJOYW1lID0gYXV0aC51c2VyLmZpcnN0TmFtZVxyXG4gIGNvbnN0IGVycm9yU2VsZWN0ID0gYXV0aC51c2VyLmVycm9yXHJcblxyXG4gIFxyXG4gIGNvbnN0IHVzZXJTaWdudXAgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICBmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoKHNpZ251cCh1c2VyKSk7XHJcblxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZXJMb2dpbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZW1haWwgPSBsb2dpbkVtYWlsXHJcbiAgICBsZXQgcGFzc3dvcmQgPSBsb2dpblBhc3N3b3JkXHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoKGxvZ2luKHVzZXIpKTtcclxuICAgIHNldEVycm9yKGVycm9yU2VsZWN0KVxyXG5cclxuICBjb25zb2xlLmxvZyhlcnJvclNlbGVjdClcclxuXHJcbiAgfTtcclxuICBcclxuICBpZiAoYXV0aC5hdXRoZW50aWNhdGUpIHtcclxuICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGF1dGgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFR3bz5cclxuICAgICAgey8qIGJyZWFkY3J1bWIgKi99XHJcbiAgICAgIDxCcmVhZGNydW1iT25lXHJcbiAgICAgICAgcGFnZVRpdGxlPVwiQ3VzdG9tZXIgTG9naW5cIlxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZT1cIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2JyZWFkY3J1bWItYmctMi5qcGdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJfX2xpc3RcIj5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5DdXN0b21lciBMb2dpbjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9CcmVhZGNydW1iT25lPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWFyZWEgc3BhY2UtbXQtLXIxMzAgc3BhY2UtbWItLXIxMzBcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBsZz17Nn0gY2xhc3NOYW1lPVwic3BhY2UtbWItbW9iaWxlLW9ubHktLTUwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXphZGEtZm9ybSBsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dXNlckxvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUtLWxvZ2luIHRleHQtY2VudGVyIHNwYWNlLW1iLS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgeyhlcnJvciAhPT0gbnVsbCkgJiYgPHA+e2Vycm9yfTwvcD59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3BhY2UtbWItLTIwXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5HcmVhdCB0byBoYXZlIHlvdSBiYWNrITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tNjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9naW5FbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2dpbkVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tNjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9naW5QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9naW5QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGV6YWRhLWJ1dHRvbiBsZXphZGEtYnV0dG9uLS1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZW1lbWJlci10ZXh0XCI+UmVtZW1iZXIgbWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInJlc2V0LXBhc3MtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3N0IHlvdXIgcGFzc3dvcmQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXphZGEtZm9ybSBsb2dpbi1mb3JtLS1yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3VzZXJTaWdudXB9PlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZS0tbG9naW4gdGV4dC1jZW50ZXIgc3BhY2UtbWItLTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzcGFjZS1tYi0tMjBcIj5SZWdpc3RlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBkb27igJl0IGhhdmUgYW4gYWNjb3VudCwgcmVnaXN0ZXIgbm93ITwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnRmlyc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpcnN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlZ0VtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ0xhc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVnRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ0VtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlZ0VtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZCA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlZ1Bhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxlemFkYS1idXR0b24gbGV6YWRhLWJ1dHRvbi0tbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXRUd28+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUmVnaXN0ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=