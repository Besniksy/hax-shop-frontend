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
      setEmail = _useState3[1]; // const [loginEmail, setLoginEmail] = useState("");


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      password = _useState4[0],
      setPassword = _useState4[1]; // const [loginPassword, setLoginPassword] = useState("");


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      error = _useState5[0],
      setError = _useState5[1];

  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.auth;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var userSignup = function userSignup(e) {
    e.preventDefault();
    var user = {
      firstName: firstName,
      lastName: lastName,
      signUpEmail: signUpEmail,
      signUpPassword: signUpPassword
    };
    dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["signup"])(user));
  };

  var userLogin = function userLogin(e) {
    e.preventDefault();
    var user = {
      loginEmail: loginEmail,
      loginPassword: loginPassword
    };
    dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["login"])(user)); // console.log(user)
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
  }, __jsx("h2", {
    className: "space-mb--20"
  }, "Login"), __jsx("p", null, "Great to have you back!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: 12,
    className: "space-mb--60"
  }, __jsx("input", {
    type: "email",
    placeholder: "Email address",
    value: loginEmail,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
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
      return setPassword(e.target.value);
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
    value: signUpEmail,
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
    value: signUpPassword,
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

_s(LoginRegister, "vZ0o+u6eEKPSO8KTs9zamduX/eI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvb3RoZXIvbG9naW4tcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiTG9naW5SZWdpc3RlciIsInVzZVN0YXRlIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImF1dGgiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXJTaWdudXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwic2lnblVwRW1haWwiLCJzaWduVXBQYXNzd29yZCIsInNpZ251cCIsInVzZXJMb2dpbiIsImxvZ2luRW1haWwiLCJsb2dpblBhc3N3b3JkIiwibG9naW4iLCJhdXRoZW50aWNhdGUiLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ25CQyxTQURtQjtBQUFBLE1BQ1JDLFlBRFE7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFbkJHLFFBRm1CO0FBQUEsTUFFVEMsV0FGUzs7QUFBQSxtQkFHQUosc0RBQVEsQ0FBQyxFQUFELENBSFI7QUFBQSxNQUduQkssS0FIbUI7QUFBQSxNQUdaQyxRQUhZLGtCQUkxQjs7O0FBSjBCLG1CQUtNTixzREFBUSxDQUFDLEVBQUQsQ0FMZDtBQUFBLE1BS25CTyxRQUxtQjtBQUFBLE1BS1RDLFdBTFMsa0JBTTFC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RixDQURGLENBN0NGLENBREYsQ0FERixDQWhCRixDQURGO0FBd0lELENBbExEOztHQUFNbkMsYTtVQVFTYSx1RCxFQUNJRyx1RDs7O0tBVGJoQixhO0FBb0xTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb3RoZXJcXGxvZ2luLXJlZ2lzdGVyLmpzLjQ2MGM1MjM1YTc1ODlkNTRjMzAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IExheW91dFR3byB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iT25lIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnJlYWRjcnVtYlwiO1xyXG5pbXBvcnQgeyBpc1VzZXJMb2dnZWRJbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzaWdudXAsIGxvZ2luIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IExvZ2luUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYXN0TmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCBbbG9naW5FbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtsb2dpblBhc3N3b3JkLCBzZXRMb2dpblBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIFxyXG4gIGNvbnN0IHVzZXJTaWdudXAgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICBmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lLFxyXG4gICAgICBzaWduVXBFbWFpbCxcclxuICAgICAgc2lnblVwUGFzc3dvcmQsXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoKHNpZ251cCh1c2VyKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXNlckxvZ2luID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyID0ge1xyXG4gICAgICBsb2dpbkVtYWlsLFxyXG4gICAgICBsb2dpblBhc3N3b3JkLFxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNwYXRjaChsb2dpbih1c2VyKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyKVxyXG4gIH07XHJcblxyXG4gIGlmIChhdXRoLmF1dGhlbnRpY2F0ZSkge1xyXG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coYXV0aCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0VHdvPlxyXG4gICAgICB7LyogYnJlYWRjcnVtYiAqL31cclxuICAgICAgPEJyZWFkY3J1bWJPbmVcclxuICAgICAgICBwYWdlVGl0bGU9XCJDdXN0b21lciBMb2dpblwiXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlPVwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvYnJlYWRjcnVtYi1iZy0yLmpwZ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYl9fbGlzdFwiPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpPkN1c3RvbWVyIExvZ2luPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L0JyZWFkY3J1bWJPbmU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYXJlYSBzcGFjZS1tdC0tcjEzMCBzcGFjZS1tYi0tcjEzMFwiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIGxnPXs2fSBjbGFzc05hbWU9XCJzcGFjZS1tYi1tb2JpbGUtb25seS0tNTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlemFkYS1mb3JtIGxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1c2VyTG9naW59PlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZS0tbG9naW4gdGV4dC1jZW50ZXIgc3BhY2UtbWItLTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzcGFjZS1tYi0tMjBcIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdyZWF0IHRvIGhhdmUgeW91IGJhY2shPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS02MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2dpbkVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tNjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9naW5QYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxlemFkYS1idXR0b24gbGV6YWRhLWJ1dHRvbi0tbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVtZW1iZXItdGV4dFwiPlJlbWVtYmVyIG1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJyZXNldC1wYXNzLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9zdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV6YWRhLWZvcm0gbG9naW4tZm9ybS0tcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1c2VyU2lnbnVwfT5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUtLWxvZ2luIHRleHQtY2VudGVyIHNwYWNlLW1iLS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3BhY2UtbWItLTIwXCI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgZG9u4oCZdCBoYXZlIGFuIGFjY291bnQsIHJlZ2lzdGVyIG5vdyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ0ZpcnN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdMYXN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlZ0VtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaWduVXBFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaWduVXBQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZXphZGEtYnV0dG9uIGxlemFkYS1idXR0b24tLW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0VHdvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblJlZ2lzdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9