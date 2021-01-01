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
    dispatch(Object(_redux_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["signup"])(user)); // setError(errorSelect)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvb3RoZXIvbG9naW4tcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiTG9naW5SZWdpc3RlciIsInVzZVN0YXRlIiwiZmlyc3ROYW1lIiwic2V0Rmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzZXRMYXN0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJsb2dpbkVtYWlsIiwic2V0TG9naW5FbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2dpblBhc3N3b3JkIiwic2V0TG9naW5QYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYXV0aCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyTmFtZSIsInVzZXIiLCJlcnJvclNlbGVjdCIsInVzZXJTaWdudXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaWdudXAiLCJ1c2VyTG9naW4iLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJhdXRoZW50aWNhdGUiLCJSb3V0ZXIiLCJwdXNoIiwicHJvY2VzcyIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDbkJDLFNBRG1CO0FBQUEsTUFDUkMsWUFEUTs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVuQkcsUUFGbUI7QUFBQSxNQUVUQyxXQUZTOztBQUFBLG1CQUdBSixzREFBUSxDQUFDLEVBQUQsQ0FIUjtBQUFBLE1BR25CSyxLQUhtQjtBQUFBLE1BR1pDLFFBSFk7O0FBQUEsbUJBSVVOLHNEQUFRLENBQUMsRUFBRCxDQUpsQjtBQUFBLE1BSW5CTyxVQUptQjtB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RSxFQUFUO0FBQWEsYUFBUyxFQUFDO0FBQXZCLEtBQ0U7QUFBTyxXQUFPLEVBQUM7QUFBZixrQkFDVztBQUFNLGFBQVMsRUFBQztBQUFoQixTQURYLEVBQytDLEdBRC9DLENBREYsRUFJRTtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsTUFBRSxFQUFDLGFBRkw7QUFHRSxTQUFLLEVBQUUzQixRQUhUO0FBSUUsWUFBUSxFQUFFLGtCQUFDZSxDQUFEO0FBQUEsYUFBT2QsV0FBVyxDQUFDYyxDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLEtBSlo7QUFLRSxZQUFRO0FBTFYsSUFKRixDQTNDRixFQXVERSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxhQUFTLEVBQUM7QUFBdkIsS0FDRTtBQUFRLGFBQVMsRUFBQztBQUFsQixnQkFERixDQXZERixDQURGLENBREYsQ0FERixDQS9DRixDQURGLENBREYsQ0FoQkYsQ0FERjtBQTBJRCxDQTNMRDs7R0FBTXJDLGE7VUFRYWlCLHVELEVBQ0pFLHVEOzs7S0FUVG5CLGE7QUE2TFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxvdGhlclxcbG9naW4tcmVnaXN0ZXIuanMuMTgxNDFmMjZlNzhjZWY0ZjA0NDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgTGF5b3V0VHdvIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJPbmUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CcmVhZGNydW1iXCI7XHJcbmltcG9ydCB7IGlzVXNlckxvZ2dlZEluIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHNpZ251cCwgbG9naW4gfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgTG9naW5SZWdpc3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3ROYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2dpbkVtYWlsLCBzZXRMb2dpbkVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvZ2luUGFzc3dvcmQsIHNldExvZ2luUGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgYXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc3QgdXNlck5hbWUgPSBhdXRoLnVzZXIuZmlyc3ROYW1lXHJcbiAgY29uc3QgZXJyb3JTZWxlY3QgPSBhdXRoLnVzZXIuZXJyb3JcclxuXHJcbiAgXHJcbiAgY29uc3QgdXNlclNpZ251cCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIGZpcnN0TmFtZSxcclxuICAgICAgbGFzdE5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2goc2lnbnVwKHVzZXIpKTtcclxuICAgIC8vIHNldEVycm9yKGVycm9yU2VsZWN0KVxyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCB1c2VyTG9naW4gPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtYWlsID0gbG9naW5FbWFpbFxyXG4gICAgbGV0IHBhc3N3b3JkID0gbG9naW5QYXNzd29yZFxyXG4gICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkLFxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNwYXRjaChsb2dpbih1c2VyKSk7XHJcbiAgY29uc29sZS5sb2coZXJyb3JTZWxlY3QpXHJcblxyXG4gIH07XHJcbiAgXHJcbiAgaWYgKGF1dGguYXV0aGVudGljYXRlKSB7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhhdXRoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRUd28+XHJcbiAgICAgIHsvKiBicmVhZGNydW1iICovfVxyXG4gICAgICA8QnJlYWRjcnVtYk9uZVxyXG4gICAgICAgIHBhZ2VUaXRsZT1cIkN1c3RvbWVyIExvZ2luXCJcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9XCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9icmVhZGNydW1iLWJnLTIuanBnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJicmVhZGNydW1iX19saXN0XCI+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+Q3VzdG9tZXIgTG9naW48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvQnJlYWRjcnVtYk9uZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1hcmVhIHNwYWNlLW10LS1yMTMwIHNwYWNlLW1iLS1yMTMwXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezZ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLW1vYmlsZS1vbmx5LS01MFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV6YWRhLWZvcm0gbG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3VzZXJMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlLS1sb2dpbiB0ZXh0LWNlbnRlciBzcGFjZS1tYi0tNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsoZXJyb3IgIT09IG51bGwpICYmIDxwPntlcnJvcn08L3A+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNwYWNlLW1iLS0yMFwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+R3JlYXQgdG8gaGF2ZSB5b3UgYmFjayE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTYwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvZ2luRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9naW5FbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTYwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvZ2luUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvZ2luUGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxlemFkYS1idXR0b24gbGV6YWRhLWJ1dHRvbi0tbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVtZW1iZXItdGV4dFwiPlJlbWVtYmVyIG1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJyZXNldC1wYXNzLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9zdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbGc9ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV6YWRhLWZvcm0gbG9naW4tZm9ybS0tcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt1c2VyU2lnbnVwfT5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUtLWxvZ2luIHRleHQtY2VudGVyIHNwYWNlLW1iLS01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3BhY2UtbWItLTIwXCI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgZG9u4oCZdCBoYXZlIGFuIGFjY291bnQsIHJlZ2lzdGVyIG5vdyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwic3BhY2UtbWItLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlZ0ZpcnN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmaXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdMYXN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlZ0VtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInNwYWNlLW1iLS0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWdFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJzcGFjZS1tYi0tNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVnUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWdQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsZXphZGEtYnV0dG9uIGxlemFkYS1idXR0b24tLW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0VHdvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblJlZ2lzdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9