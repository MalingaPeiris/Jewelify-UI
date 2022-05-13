self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/responsive.css */ "./styles/responsive.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ "./styles/bootstrap.min.css");
/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/font-awesome.min.css */ "./styles/font-awesome.min.css");
/* harmony import */ var _styles_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sign-up.css */ "./styles/sign-up.css");
/* harmony import */ var _styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_sign_up_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\OFFICE WORK\\new\\new-jewelify-ui\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_OFFICE_WORK_new_new_jewelify_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import '../styles/fontawesome.min.css'






function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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


/***/ }),

/***/ "./styles/sign-up.css":
/*!****************************!*\
  !*** ./styles/sign-up.css ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./sign-up.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/sign-up.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./sign-up.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/sign-up.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./sign-up.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/sign-up.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/sign-up.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/sign-up.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-box-sizing: border-box;\r\n       -moz-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\nsection{\r\n    min-height:60vh;\r\n    background-color: #F4FBFF;\r\n}\r\n\r\n/* Center Form Section */\r\n.con{\r\n    margin: 150px auto;\r\n    width: 500px;\r\n    max-width: 90%; \r\n    \r\n}\r\n\r\n.con form{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 20px;\r\n    background-color: #ffff;\r\n    border-radius: 4px;\r\n    margin-top: 20px;\r\n    border: 0.4px solid rgb(200, 200, 200);  \r\n}\r\n\r\n/* Sign up title text */\r\n.sign-up-title{\r\n    font-size: 20px;\r\n}\r\n\r\n/* Google btn */\r\n.google{\r\n    min-width: 100%;\r\n   \r\n}\r\n.btn.google{\r\n    background: none;\r\n    border: 1px solid #c7c7c77c;\r\n    padding: 12px;\r\n    border-radius: 25px;\r\n\r\n    /* google btn icon and text alignment */\r\n    display: -webkit-flex;\r\n    display: -moz-box;\r\n    display: flex;\r\n    -webkit-align-items: center;\r\n       -moz-box-align: center;\r\n            align-items: center;\r\n    -webkit-justify-content: center;\r\n       -moz-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n/* fb btn */\r\n.fb{\r\n    min-width: 100%;\r\n    margin-top: 10px;\r\n}\r\n.btn.fb{\r\n    background: none;\r\n    border: 1px solid #c7c7c77c;\r\n    padding: 12px;\r\n    border-radius: 25px;\r\n    background-color: #f8f8f8;\r\n    color: rgb(7, 7, 7);\r\n\r\n     /* fb btn icon and text alignment */\r\n     display: -webkit-flex;\r\n     display: -moz-box;\r\n     display: flex;\r\n     -webkit-align-items: center;\r\n        -moz-box-align: center;\r\n             align-items: center;\r\n     -webkit-justify-content: center;\r\n        -moz-box-pack: center;\r\n             justify-content: center;\r\n}\r\n\r\n/* Agreement */\r\n.sign-up{\r\n    margin-top: 29px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n}\r\n\r\n/* not sign  */\r\n.not_sign{\r\n    text-align: center;\r\n}\r\n\r\n/* Sign in link */\r\n.sign_in_link{\r\n    color: #3D9CE0;\r\n}\r\n", "",{"version":3,"sources":["webpack://styles/sign-up.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,8BAAsB;OAAtB,2BAAsB;YAAtB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA,wBAAwB;AACxB;IACI,kBAAkB;IAClB,YAAY;IACZ,cAAc;;AAElB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,sCAAsC;AAC1C;;AAEA,uBAAuB;AACvB;IACI,eAAe;AACnB;;AAEA,eAAe;AACf;IACI,eAAe;;AAEnB;AACA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;;IAEnB,uCAAuC;IACvC,qBAAa;IAAb,iBAAa;IAAb,aAAa;IACb,2BAAmB;OAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,+BAAuB;OAAvB,qBAAuB;YAAvB,uBAAuB;AAC3B;;AAEA,WAAW;AACX;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;;KAElB,mCAAmC;KACnC,qBAAa;KAAb,iBAAa;KAAb,aAAa;KACb,2BAAmB;QAAnB,sBAAmB;aAAnB,mBAAmB;KACnB,+BAAuB;QAAvB,qBAAuB;aAAvB,uBAAuB;AAC5B;;AAEA,cAAc;AACd;IACI,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;;AAEA,cAAc;AACd;IACI,kBAAkB;AACtB;;AAEA,iBAAiB;AACjB;IACI,cAAc;AAClB","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nsection{\r\n    min-height:60vh;\r\n    background-color: #F4FBFF;\r\n}\r\n\r\n/* Center Form Section */\r\n.con{\r\n    margin: 150px auto;\r\n    width: 500px;\r\n    max-width: 90%; \r\n    \r\n}\r\n\r\n.con form{\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 20px;\r\n    background-color: #ffff;\r\n    border-radius: 4px;\r\n    margin-top: 20px;\r\n    border: 0.4px solid rgb(200, 200, 200);  \r\n}\r\n\r\n/* Sign up title text */\r\n.sign-up-title{\r\n    font-size: 20px;\r\n}\r\n\r\n/* Google btn */\r\n.google{\r\n    min-width: 100%;\r\n   \r\n}\r\n.btn.google{\r\n    background: none;\r\n    border: 1px solid #c7c7c77c;\r\n    padding: 12px;\r\n    border-radius: 25px;\r\n\r\n    /* google btn icon and text alignment */\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/* fb btn */\r\n.fb{\r\n    min-width: 100%;\r\n    margin-top: 10px;\r\n}\r\n.btn.fb{\r\n    background: none;\r\n    border: 1px solid #c7c7c77c;\r\n    padding: 12px;\r\n    border-radius: 25px;\r\n    background-color: #f8f8f8;\r\n    color: rgb(7, 7, 7);\r\n\r\n     /* fb btn icon and text alignment */\r\n     display: flex;\r\n     align-items: center;\r\n     justify-content: center;\r\n}\r\n\r\n/* Agreement */\r\n.sign-up{\r\n    margin-top: 29px;\r\n    text-align: center;\r\n    font-size: 12px;\r\n}\r\n\r\n/* not sign  */\r\n.not_sign{\r\n    text-align: center;\r\n}\r\n\r\n/* Sign in link */\r\n.sign_in_link{\r\n    color: #3D9CE0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yOGNhMGU5YTdhMzU0YzYzNmM5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7OztBQUtBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLHNCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0tBSlFGO0FBTVQsK0RBQWVBLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsVUFBVSxtQkFBTyxDQUFDLG9OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQywyWkFBeU07O0FBRTNPOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLDJaQUF5TTtBQUMvTTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJaQUF5TTs7QUFFbk87O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQytGO0FBQy9GLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw0Q0FBNEMsa0JBQWtCLG1CQUFtQix1Q0FBdUMsdUNBQXVDLHVDQUF1QyxLQUFLLGdCQUFnQix3QkFBd0Isa0NBQWtDLEtBQUssMENBQTBDLDJCQUEyQixxQkFBcUIsd0JBQXdCLGFBQWEsa0JBQWtCLG9CQUFvQixxQkFBcUIsc0JBQXNCLGdDQUFnQywyQkFBMkIseUJBQXlCLGlEQUFpRCxLQUFLLG1EQUFtRCx3QkFBd0IsS0FBSyxvQ0FBb0Msd0JBQXdCLFlBQVksZ0JBQWdCLHlCQUF5QixvQ0FBb0Msc0JBQXNCLDRCQUE0QixrRkFBa0YsMEJBQTBCLHNCQUFzQixvQ0FBb0Msa0NBQWtDLG9DQUFvQyx3Q0FBd0MsaUNBQWlDLHdDQUF3QyxLQUFLLDRCQUE0Qix3QkFBd0IseUJBQXlCLEtBQUssWUFBWSx5QkFBeUIsb0NBQW9DLHNCQUFzQiw0QkFBNEIsa0NBQWtDLDRCQUE0QixnRkFBZ0YsMkJBQTJCLHVCQUF1QixxQ0FBcUMsbUNBQW1DLHFDQUFxQyx5Q0FBeUMsa0NBQWtDLHlDQUF5QyxLQUFLLG9DQUFvQyx5QkFBeUIsMkJBQTJCLHdCQUF3QixLQUFLLHFDQUFxQywyQkFBMkIsS0FBSyw0Q0FBNEMsdUJBQXVCLEtBQUssV0FBVyxtRkFBbUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLFVBQVUsS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxhQUFhLGFBQWEsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSw0QkFBNEIsa0JBQWtCLG1CQUFtQiwrQkFBK0IsS0FBSyxnQkFBZ0Isd0JBQXdCLGtDQUFrQyxLQUFLLDBDQUEwQywyQkFBMkIscUJBQXFCLHdCQUF3QixhQUFhLGtCQUFrQixvQkFBb0IscUJBQXFCLHNCQUFzQixnQ0FBZ0MsMkJBQTJCLHlCQUF5QixpREFBaUQsS0FBSyxtREFBbUQsd0JBQXdCLEtBQUssb0NBQW9DLHdCQUF3QixZQUFZLGdCQUFnQix5QkFBeUIsb0NBQW9DLHNCQUFzQiw0QkFBNEIsMEVBQTBFLDRCQUE0QixnQ0FBZ0MsS0FBSyw0QkFBNEIsd0JBQXdCLHlCQUF5QixLQUFLLFlBQVkseUJBQXlCLG9DQUFvQyxzQkFBc0IsNEJBQTRCLGtDQUFrQyw0QkFBNEIsd0VBQXdFLDZCQUE2QixpQ0FBaUMsS0FBSyxvQ0FBb0MseUJBQXlCLDJCQUEyQix3QkFBd0IsS0FBSyxxQ0FBcUMsMkJBQTJCLEtBQUssNENBQTRDLHVCQUF1QixLQUFLLHVCQUF1QjtBQUMxb0o7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvc2lnbi11cC5jc3M/NzUyNCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3NpZ24tdXAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9yZXNwb25zaXZlLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbi8vIGltcG9ydCAnLi4vc3R5bGVzL2ZvbnRhd2Vzb21lLm1pbi5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2ZvbnQtYXdlc29tZS5taW4uY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL3NpZ24tdXAuY3NzJ1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMl0hLi9zaWduLXVwLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudE5vZGUgPSBhbmNob3JFbGVtZW50LnBhcmVudE5vZGUvLyBOb3JtYWxseSA8aGVhZD5cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBhbmNob3JFbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHA7XG4gICAgZm9yKHAgaW4gYSl7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IocCBpbiBiKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vc2lnbi11cC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsyXSEuL3NpZ24tdXAuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbntcXHJcXG4gICAgbWluLWhlaWdodDo2MHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGQkZGO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDZW50ZXIgRm9ybSBTZWN0aW9uICovXFxyXFxuLmNvbntcXHJcXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogOTAlOyBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb24gZm9ybXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAwLjRweCBzb2xpZCByZ2IoMjAwLCAyMDAsIDIwMCk7ICBcXHJcXG59XFxyXFxuXFxyXFxuLyogU2lnbiB1cCB0aXRsZSB0ZXh0ICovXFxyXFxuLnNpZ24tdXAtdGl0bGV7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogR29vZ2xlIGJ0biAqL1xcclxcbi5nb29nbGV7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICBcXHJcXG59XFxyXFxuLmJ0bi5nb29nbGV7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc3YztcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG5cXHJcXG4gICAgLyogZ29vZ2xlIGJ0biBpY29uIGFuZCB0ZXh0IGFsaWdubWVudCAqL1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmYiBidG4gKi9cXHJcXG4uZmJ7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLmJ0bi5mYntcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNzdjO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcclxcbiAgICBjb2xvcjogcmdiKDcsIDcsIDcpO1xcclxcblxcclxcbiAgICAgLyogZmIgYnRuIGljb24gYW5kIHRleHQgYWxpZ25tZW50ICovXFxyXFxuICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEFncmVlbWVudCAqL1xcclxcbi5zaWduLXVwe1xcclxcbiAgICBtYXJnaW4tdG9wOiAyOXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbm90IHNpZ24gICovXFxyXFxuLm5vdF9zaWdue1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFNpZ24gaW4gbGluayAqL1xcclxcbi5zaWduX2luX2xpbmt7XFxyXFxuICAgIGNvbG9yOiAjM0Q5Q0UwO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3NpZ24tdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDViw4QkFBc0I7T0FBdEIsMkJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjOztBQUVsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNDQUFzQztBQUMxQzs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxlQUFlO0FBQ25COztBQUVBLGVBQWU7QUFDZjtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLHVDQUF1QztJQUN2QyxxQkFBYTtJQUFiLGlCQUFhO0lBQWIsYUFBYTtJQUNiLDJCQUFtQjtPQUFuQixzQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLCtCQUF1QjtPQUF2QixxQkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1COztLQUVsQixtQ0FBbUM7S0FDbkMscUJBQWE7S0FBYixpQkFBYTtLQUFiLGFBQWE7S0FDYiwyQkFBbUI7UUFBbkIsc0JBQW1CO2FBQW5CLG1CQUFtQjtLQUNuQiwrQkFBdUI7UUFBdkIscUJBQXVCO2FBQXZCLHVCQUF1QjtBQUM1Qjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9ue1xcclxcbiAgICBtaW4taGVpZ2h0OjYwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEZCRkY7XFxyXFxufVxcclxcblxcclxcbi8qIENlbnRlciBGb3JtIFNlY3Rpb24gKi9cXHJcXG4uY29ue1xcclxcbiAgICBtYXJnaW46IDE1MHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA5MCU7IFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbiBmb3Jte1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDAuNHB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTsgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWduIHVwIHRpdGxlIHRleHQgKi9cXHJcXG4uc2lnbi11cC10aXRsZXtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHb29nbGUgYnRuICovXFxyXFxuLmdvb2dsZXtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgIFxcclxcbn1cXHJcXG4uYnRuLmdvb2dsZXtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNzdjO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcblxcclxcbiAgICAvKiBnb29nbGUgYnRuIGljb24gYW5kIHRleHQgYWxpZ25tZW50ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmYiBidG4gKi9cXHJcXG4uZmJ7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLmJ0bi5mYntcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNzdjO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcclxcbiAgICBjb2xvcjogcmdiKDcsIDcsIDcpO1xcclxcblxcclxcbiAgICAgLyogZmIgYnRuIGljb24gYW5kIHRleHQgYWxpZ25tZW50ICovXFxyXFxuICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBZ3JlZW1lbnQgKi9cXHJcXG4uc2lnbi11cHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjlweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi8qIG5vdCBzaWduICAqL1xcclxcbi5ub3Rfc2lnbntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTaWduIGluIGxpbmsgKi9cXHJcXG4uc2lnbl9pbl9saW5re1xcclxcbiAgICBjb2xvcjogIzNEOUNFMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=