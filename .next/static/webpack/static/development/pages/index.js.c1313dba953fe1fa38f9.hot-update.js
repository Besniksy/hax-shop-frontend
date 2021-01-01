webpackHotUpdate("static\\development\\pages\\index.js",{

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
      var res, _res$data2, token, _user2, error, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_REQUEST
              });
              _context2.next = 4;
              return _helpers_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("/signin", _objectSpread({}, user));

            case 4:
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
                error = res.data.error;
                dispatch({
                  type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_FAILURE,
                  payload: {
                    error: error
                  }
                });
              }

              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              data = _context2.t0.message.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_FAILURE,
                payload: {
                  error: data.error
                }
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJ1c2VyIiwiZGlzcGF0Y2giLCJ0eXBlIiwiYXV0aENvbnN0YW50cyIsIlNJR05VUF9SRVFVRVNUIiwiYXhpb3MiLCJwb3N0IiwicmVzIiwic3RhdHVzIiwiU0lHTlVQX1NVQ0NFU1MiLCJkYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkxPR0lOX1NVQ0NFU1MiLCJwYXlsb2FkIiwiZXJyb3IiLCJTSUdOVVBfRkFJTFVSRSIsInJlc3BvbnNlIiwibG9naW4iLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fRkFJTFVSRSIsIm1lc3NhZ2UiLCJpc1VzZXJMb2dnZWRJbiIsImdldEl0ZW0iLCJwYXJzZSIsInNpZ25vdXQiLCJMT0dPVVRfUkVRVUVTVCIsImNsZWFyIiwiTE9HT1VUX1NVQ0NFU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDOUI7QUFBQSxnTUFBTyxpQkFBT0MsUUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSEEsc0JBQVEsQ0FBQztBQUFFQyxvQkFBSSxFQUFFQyx3REFBYSxDQUFDQztBQUF0QixlQUFELENBQVI7QUFIRztBQUFBLHFCQUlTQyxzREFBSyxDQUFDQyxJQUFOLFlBQXNCTixJQUF0QixDQUpUOztBQUFBO0FBSUhPLGlCQUpHOztBQUtILGtCQUFJQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QlAsd0JBQVEsQ0FBQztBQUFFQyxzQkFBSSxFQUFFQyx3REFBYSxDQUFDTTtBQUF0QixpQkFBRCxDQUFSO0FBRHNCLDRCQUVFRixHQUFHLENBQUNHLElBRk4sRUFFZEMsS0FGYyxh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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJELENBbEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMTMxM2RiYTk1M2ZlMWZhMzhmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aENvbnN0YW50cywgY2FydENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL2hlbHBlcnMvYXhpb3NcIjtcclxuXHJcbi8vIG5ldyB1cGRhdGUgc2lnbnVwIGFjdGlvblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gKHVzZXIpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBsZXQgcmVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBhdXRoQ29uc3RhbnRzLlNJR05VUF9SRVFVRVNUIH0pO1xyXG4gICAgICByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAvc2lnbnVwYCwgdXNlcik7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGF1dGhDb25zdGFudHMuU0lHTlVQX1NVQ0NFU1MgfSk7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByZXMuZGF0YTtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGF1dGhDb25zdGFudHMuU0lHTlVQX0ZBSUxVUkUsIHBheWxvYWQ6IHsgZXJyb3IgfSB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGF1dGhDb25zdGFudHMuU0lHTlVQX0ZBSUxVUkUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBlcnJvcjogZGF0YS5lcnJvciB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBsZXQgcmVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR0lOX1JFUVVFU1QgfSk7XHJcbiAgICAgIHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYC9zaWduaW5gLCB7XHJcbiAgICAgICAgLi4udXNlcixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByZXMuZGF0YTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9GQUlMVVJFLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyBlcnJvciB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IGF1dGhDb25zdGFudHMuTE9HSU5fRkFJTFVSRSxcclxuICAgICAgICAgIHBheWxvYWQ6IHsgZXJyb3I6IGRhdGEuZXJyb3IgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9TVUNDRVNTLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHRva2VuLFxyXG4gICAgICAgICAgdXNlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgcGF5bG9hZDogeyBlcnJvcjogXCJGYWlsZWQgdG8gbG9naW5cIiB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25vdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR09VVF9SRVFVRVNUIH0pO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IGF1dGhDb25zdGFudHMuTE9HT1VUX1NVQ0NFU1MgfSk7XHJcbiAgICAvLyBkaXNwYXRjaCh7IHR5cGU6IGNhcnRDb25zdGFudHMuUkVTRVRfQ0FSVCB9KTtcclxuICAgIC8vY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgL2FkbWluL3NpZ25vdXRgKTtcclxuICAgIC8vIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcblxyXG4gICAgLy8gfWVsc2V7XHJcbiAgICAvLyAgICAgZGlzcGF0Y2goe1xyXG4gICAgLy8gICAgICAgICB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR09VVF9GQUlMVVJFLFxyXG4gICAgLy8gICAgICAgICBwYXlsb2FkOiB7IGVycm9yOiByZXMuZGF0YS5lcnJvciB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==