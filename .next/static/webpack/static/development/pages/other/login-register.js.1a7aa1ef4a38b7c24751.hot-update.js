webpackHotUpdate("static\\development\\pages\\other\\login-register.js",{

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
              data = _context2.t0.response.data;
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_3__["authConstants"].LOGIN_FAILURE,
                payload: {
                  error: _context2.t0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzaWdudXAiLCJ1c2VyIiwiZGlzcGF0Y2giLCJ0eXBlIiwiYXV0aENvbnN0YW50cyIsIlNJR05VUF9SRVFVRVNUIiwiYXhpb3MiLCJwb3N0IiwicmVzIiwic3RhdHVzIiwiU0lHTlVQX1NVQ0NFU1MiLCJkYXRhIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkxPR0lOX1NVQ0NFU1MiLCJwYXlsb2FkIiwiZXJyb3IiLCJTSUdOVVBfRkFJTFVSRSIsInJlc3BvbnNlIiwibG9naW4iLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fRkFJTFVSRSIsImlzVXNlckxvZ2dlZEluIiwiZ2V0SXRlbSIsInBhcnNlIiwic2lnbm91dCIsIkxPR09VVF9SRVFVRVNUIiwiY2xlYXIiLCJMT0dPVVRfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUM5QjtBQUFBLGdNQUFPLGlCQUFPQyxRQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdIQSxzQkFBUSxDQUFDO0FBQUVDLG9CQUFJLEVBQUVDLHdEQUFhLENBQUNDO0FBQXRCLGVBQUQsQ0FBUjtBQUhHO0FBQUEscUJBSVNDLHNEQUFLLENBQUNDLElBQU4sWUFBc0JOLElBQXRCLENBSlQ7O0FBQUE7QUFJSE8saUJBSkc7O0FBS0gsa0JBQUlBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCUCx3QkFBUSxDQUFDO0FBQUVDLHNCQUFJLEVBQUVDLHdEQUFhLENBQUNNO0FBQXRCLGlCQUFELENBQVI7QUFEc0IsNEJBRUVGLEdBQUcsQ0FBQ0csSUFGTixFQUVkQyxLQUZjLGFBRWRBLEtBRmMsRUFFUFgsS0FGTyxhQUVQQSxJQUZPO0FBR3RCWSw0QkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCRixLQUE5QjtBQUNBQyw0QkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsS0FBZixDQUE3QjtBQUNBQyx3QkFBUSxDQUFDO0FBQ1BDLHNCQUFJLEVBQUVDLHdEQUFhLENBQUNhLGFBRGI7QUFFUEMseUJBQU8sRUFBRTtBQUNQTix5QkFBSyxFQUFMQSxLQURPO0FBRVBYLHdCQUFJLEVBQUpBO0FBRk87QUFGRixpQkFBRCxDQUFSO0FBT0QsZUFaRCxNQVlPO0FBQ0drQixxQkFESCxHQUNhWCxHQUFHLENBQUNHLElBRGpCLENBQ0dRLEtBREg7QUFFTGpCLHdCQUFRLENBQUM7QUFBRUMsc0JBQUksRUFBRUMsd0RBQWEsQ0FBQ2dCLGNBQXRCO0FBQXNDRix5QkFBTyxFQUFFO0FBQUVDLHlCQUFLLEVBQUxBO0FBQUY7QUFBL0MsaUJBQUQsQ0FBUjtBQUNEOztBQXBCRTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXNCS1Isa0JBdEJMLEdBc0JjLFlBQU1VLFFBdEJwQixDQXNCS1YsSUF0Qkw7QUF1QkhULHNCQUFRLENBQUM7QUFDUEMsb0JBQUksRUFBRUMsd0RBQWEsQ0FBQ2dCLGNBRGI7QUFFUEYsdUJBQU8sRUFBRTtBQUFFQyx1QkFBSyxFQUFFUixJQUFJLENBQUNRO0FBQWQ7QUFGRixlQUFELENBQVI7O0FBdkJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2QkQsQ0E5Qk07QUFnQ0EsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ3JCLElBQUQsRUFBVTtBQUM3QjtBQUFBLGlNQUFPLGtCQUFPQyxRQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdIQSxzQkFBUSxDQUFDO0FBQUVDLG9CQUFJLEVBQUVDLHdEQUFhLENBQUNtQjtBQUF0QixlQUFELENBQVI7QUFIRztBQUFBLHFCQUlTakIsc0RBQUssQ0FBQ0MsSUFBTiw4QkFDUE4sSUFETyxFQUpUOztBQUFBO0FBSUhPLGlCQUpHOztBQVFILGtCQUFJQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUFBLDZCQUNFRCxHQUFHLENBQUNHLElBRE4sRUFDZEMsS0FEYyxjQUNkQSxLQURjLEVBQ1BYLE1BRE8sY0FDUEEsSUFETztBQUV0QlksNEJBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkYsS0FBOUI7QUFDQUMsNEJBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVmLE1BQWYsQ0FBN0I7QUFDQUMsd0JBQVEsQ0FBQztBQUNQQyxzQkFBSSxFQUFFQyx3REFBYSxDQUFDYSxhQURiO0FBRVBDLHlCQUFPLEVBQUU7QUFDUE4seUJBQUssRUFBTEEsS0FETztBQUVQWCx3QkFBSSxFQUFKQTtBQUZPO0FBRkYsaUJBQUQsQ0FBUjtBQU9ELGVBWEQsTUFXTztBQUNHa0IscUJBREgsR0FDYVgsR0FBRyxDQUFDRyxJQURqQixDQUNHUSxLQURIO0FBR0xqQix3QkFBUSxDQUFDO0FBQ1BDLHNCQUFJLEVBQUVDLHdEQUFhLENBQUNvQixhQURiO0FBRVBOLHlCQUFPLEVBQUU7QUFBRUMseUJBQUssRUFBTEE7QUFBRjtBQUZGLGlCQUFELENBQVI7QUFJRDs7QUExQkU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUE0Qk9SLGtCQTVCUCxHQTRCZ0IsYUFBTVUsUUE1QnRCLENBNEJPVixJQTVCUDtBQTZCRFQsc0JBQVEsQ0FBQztBQUNQQyxvQkFBSSxFQUFFQyx3REFBYSxDQUFDb0IsYUFEYjtBQUVQTix1QkFBTyxFQUFFO0FBQUVDLHVCQUFLO0FBQVA7QUFGRixlQUFELENBQVI7O0FBN0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQ0QsQ0FwQ007QUFzQ0EsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ2xDO0FBQUEsaU1BQU8sa0JBQU92QixRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDVSxtQkFERCxHQUNTQyxZQUFZLENBQUNhLE9BQWIsQ0FBcUIsT0FBckIsQ0FEVDs7QUFFTCxrQkFBSWQsS0FBSixFQUFXO0FBQ0hYLG9CQURHLEdBQ0ljLElBQUksQ0FBQ1ksS0FBTCxDQUFXZCxZQUFZLENBQUNhLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQURKO0FBRVR4Qix3QkFBUSxDQUFDO0FBQ1BDLHNCQUFJLEVBQUVDLHdEQUFhLENBQUNhLGFBRGI7QUFFUEMseUJBQU8sRUFBRTtBQUNQTix5QkFBSyxFQUFMQSxLQURPO0FBRVBYLHdCQUFJLEVBQUpBO0FBRk87QUFGRixpQkFBRCxDQUFSO0FBT0QsZUFURCxNQVNPO0FBQ0xDLHdCQUFRLENBQUM7QUFDUEMsc0JBQUksRUFBRUMsd0RBQWEsQ0FBQ29CLGFBRGI7QUFFUE4seUJBQU8sRUFBRTtBQUFFQyx5QkFBSyxFQUFFO0FBQVQ7QUFGRixpQkFBRCxDQUFSO0FBSUQ7O0FBaEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkQsQ0FuQk07QUFxQkEsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUMzQjtBQUFBLGlNQUFPLGtCQUFPMUIsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xBLHNCQUFRLENBQUM7QUFBRUMsb0JBQUksRUFBRUMsd0RBQWEsQ0FBQ3lCO0FBQXRCLGVBQUQsQ0FBUixDQURLLENBRUw7QUFDQTs7QUFDQWhCLDBCQUFZLENBQUNpQixLQUFiO0FBQ0E1QixzQkFBUSxDQUFDO0FBQUVDLG9CQUFJLEVBQUVDLHdEQUFhLENBQUMyQjtBQUF0QixlQUFELENBQVIsQ0FMSyxDQU1MO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFmSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJELENBbEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxvdGhlclxcbG9naW4tcmVnaXN0ZXIuanMuMWE3YWExZWY0YTM4YjdjMjQ3NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhDb25zdGFudHMsIGNhcnRDb25zdGFudHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9oZWxwZXJzL2F4aW9zXCI7XHJcblxyXG4vLyBuZXcgdXBkYXRlIHNpZ251cCBhY3Rpb25cclxuZXhwb3J0IGNvbnN0IHNpZ251cCA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgbGV0IHJlcztcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYXV0aENvbnN0YW50cy5TSUdOVVBfUkVRVUVTVCB9KTtcclxuICAgICAgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgL3NpZ251cGAsIHVzZXIpO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBhdXRoQ29uc3RhbnRzLlNJR05VUF9TVUNDRVNTIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9TVUNDRVNTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBhdXRoQ29uc3RhbnRzLlNJR05VUF9GQUlMVVJFLCBwYXlsb2FkOiB7IGVycm9yIH0gfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBhdXRoQ29uc3RhbnRzLlNJR05VUF9GQUlMVVJFLFxyXG4gICAgICAgIHBheWxvYWQ6IHsgZXJyb3I6IGRhdGEuZXJyb3IgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgbGV0IHJlcztcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9SRVFVRVNUIH0pO1xyXG4gICAgICByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAvc2lnbmluYCwge1xyXG4gICAgICAgIC4uLnVzZXIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9TVUNDRVNTLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB0b2tlbixcclxuICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcmVzLmRhdGE7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IGF1dGhDb25zdGFudHMuTE9HSU5fRkFJTFVSRSxcclxuICAgICAgICAgIHBheWxvYWQ6IHsgZXJyb3IgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogYXV0aENvbnN0YW50cy5MT0dJTl9GQUlMVVJFLFxyXG4gICAgICAgICAgcGF5bG9hZDogeyBlcnJvciB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBhdXRoQ29uc3RhbnRzLkxPR0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdG9rZW4sXHJcbiAgICAgICAgICB1c2VyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGF1dGhDb25zdGFudHMuTE9HSU5fRkFJTFVSRSxcclxuICAgICAgICBwYXlsb2FkOiB7IGVycm9yOiBcIkZhaWxlZCB0byBsb2dpblwiIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbm91dCA9ICgpID0+IHtcclxuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IGF1dGhDb25zdGFudHMuTE9HT1VUX1JFUVVFU1QgfSk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogYXV0aENvbnN0YW50cy5MT0dPVVRfU1VDQ0VTUyB9KTtcclxuICAgIC8vIGRpc3BhdGNoKHsgdHlwZTogY2FydENvbnN0YW50cy5SRVNFVF9DQVJUIH0pO1xyXG4gICAgLy9jb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAvYWRtaW4vc2lnbm91dGApO1xyXG4gICAgLy8gaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuXHJcbiAgICAvLyB9ZWxzZXtcclxuICAgIC8vICAgICBkaXNwYXRjaCh7XHJcbiAgICAvLyAgICAgICAgIHR5cGU6IGF1dGhDb25zdGFudHMuTE9HT1VUX0ZBSUxVUkUsXHJcbiAgICAvLyAgICAgICAgIHBheWxvYWQ6IHsgZXJyb3I6IHJlcy5kYXRhLmVycm9yIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9