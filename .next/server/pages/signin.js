"use strict";
(() => {
var exports = {};
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\OFFICE WORK\\new\\new-jewelify-ui\\pages\\signin.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import React, { useEffect, useRef } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Container,
//   Stack,
// } from "@chakra-ui/react";
// console.log("mail - " + global.$email);
// export default function SignIn({ providers, csrfToken }) {
//   const buttonRef = useRef(null);
//   useEffect(() => {
//     buttonRef.current.click();
//   }, []);
//   return (
//     <div>
//       <div>
//         <form
//           method="post" action="/api/auth/signin/email"
//         >
//           <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//           <Input type="text"  id="email" name="email" defaultValue={global.$email} />
//           <Button
//             ref={buttonRef}
//             //type="hidden"
//             type="submit"></Button>
//         </form>
//       </div>
//       <div>
//         <meta charSet="utf-8" />
//         <meta httpEquiv="x-ua-compatible" content="ie=edge" />
//         <title>Jewelify</title>
//         <meta name="description" content />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
// s
//       {/* Add your site or application content here */}
//       <div className="wrapper ">
//         <header className="header-area">
//           {/* Menu Area
//           ============================================ */}
//           <div id="main-menu" className="sticker white-bg">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-12 col-xs-12">
//                   <div className="logo float-left navbar-header">
//                     <h2 className="logo"><a href="index.html"></a></h2>
//                     <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu-2">
//                       <img src="/img/menu.svg" className="menu-open" alt="" />
//                     </button>
//                   </div>
//                   <div className="main-menu text-center collapse navbar-collapse" id="main-menu-2">
//                     <nav>
//                       <ul className="menu one-page">
//                       </ul>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//         {/* pricing area
//       ============================================ */}
//         <div id="pricing-area" className="pricing-area custom-border" style={{ backgroundColor: '#f3fbfe' }}>
//           <div className="container pt-100">
//             <div className="row pb-100">
//               <div className="col-12 text-center">
//                 <img src="/img/msg.png" alt="" className="img-msg" />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-12 text-center">
//                 <div className="about-bottom-left pricing-mrg clearfix text-style">
//                   <h2>Sending login Link. Please wait.</h2>
//                   <p>By using passwordless login it increases the security of your account</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* contact area
//       ============================================ */}
//       <div className="contact-area">
//         <div className="container">
//           <div className="row">
//             <div className="conatct-info fix">
//               <div className="col-md-5 col-sm-4 text-style">
//                 <h2>Jewelify</h2>
//                 <p>Copyright © 2021
//                   <a href="http://bootexperts.com/" target="_blank">Jewelify</a><br />
//                   .All right reserved.</p>
//               </div>
//               <div className="col-md-2 col-sm-4 footer-links text-style t-m-res">
//                 <h3 className="mb-30">Services</h3>
//                 <ul>
//                   <li><a href="#">service - 1</a></li>
//                   <li><a href="#">service - 2</a></li>
//                   <li><a href="#">service - 3</a></li>
//                   <li><a href="#">service - 4</a></li>
//                 </ul>
//               </div>
//               <div className="col-md-2 col-sm-4 footer-links text-style t-m-res">
//                 <h3 className="mb-30">Company</h3>
//                 <ul>
//                   <li> <a href="#">Work</a></li>
//                   <li><a href="#">About</a></li>
//                   <li><a href="#">Resources</a></li>
//                   <li><a href="#">Pricing</a></li>
//                 </ul>
//               </div>
//               <div className="col-md-3 col-sm-4 text-style t-m-res">
//                 <h3 className="mb-30">Useful Links</h3>
//                 <div className="footer-icon">
//                   <ul>
//                     <li><a><img src="/img/facebook.svg" alt="" width="20px" /></a> </li>
//                     <li><a><img src="/img/instagram.svg" alt="" width="20px" /></a> </li>
//                     <li><a><img src="/img/twitter.svg" alt="" width="20px" /></a> </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* start scrollUp
//       ============================================ */}
//       {/*<div id="toTop">
//           <i class="fa fa-chevron-up"></i>
//       </div>
//   </div>*/}
//       {/* jquery
// 		============================================ */}
//       {/* bootstrap JS
// 		============================================ */}
//       {/* plugins JS
// 		============================================ */}
//       {/* main JS
// 		============================================ */}
//     </div>
//     </div>
//   );
// }
// SignIn.getInitialProps = async (context) => {
//   const { req, res } = context;
//   const session = await getSession({ req });
//   if (session && res && session.accessToken) {
//     res.writeHead(302, {
//       Location: "/",
//     });
//     res.end();
//     return;
//   }
//   return {
//     session: undefined,
//     providers: await providers(context),
//     csrfToken: await csrfToken(context),
//   };
// };
//new code



class SignIn extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:9000/.netlify/functions/sign-in", data).then(res => {
        localStorage.setItem("accessToken", res.data.accessToken);
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
      onSubmit: this.handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        children: "SIGN IN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "email",
          className: "form-control",
          placeholder: "Email",
          onChange: e => this.email = e.target.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "form-group",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "password",
          className: "form-control",
          placeholder: "Password",
          onChange: e => this.password = e.target.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        className: "btn btn-primary btn-block",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvc2lnbmluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR2UsTUFBTUcsTUFBTixTQUFxQkYsNENBQXJCLENBQStCO0FBQUE7QUFBQTs7QUFBQSwwQ0FDNUJHLENBQUQsSUFBTztBQUNwQkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsWUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFFBQUFBLEtBQUssRUFBRSxLQUFLQSxLQUREO0FBRVhDLFFBQUFBLFFBQVEsRUFBRSxLQUFLQTtBQUZKLE9BQWI7QUFLQU4sTUFBQUEsaURBQUEsQ0FDUSxrREFEUixFQUM0REksSUFENUQsRUFFR0ksSUFGSCxDQUVTQyxHQUFELElBQVM7QUFDYkMsUUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLEVBQW9DRixHQUFHLENBQUNMLElBQUosQ0FBU1EsV0FBN0M7QUFDQUMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEdBQVo7QUFDRCxPQUxILEVBTUdNLEtBTkgsQ0FNVUMsR0FBRCxJQUFTO0FBQ2RILFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFaO0FBQ0QsT0FSSDtBQVNELEtBakIyQztBQUFBOztBQW1CNUNDLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFO0FBQU0sY0FBUSxFQUFFLEtBQUtDLFlBQXJCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsbUJBQVMsRUFBQyxjQUZaO0FBR0UscUJBQVcsRUFBQyxPQUhkO0FBSUUsa0JBQVEsRUFBR2hCLENBQUQsSUFBUSxLQUFLRyxLQUFMLEdBQWFILENBQUMsQ0FBQ2lCLE1BQUYsQ0FBU0M7QUFKMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQVlFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsbUJBQVMsRUFBQyxjQUZaO0FBR0UscUJBQVcsRUFBQyxVQUhkO0FBSUUsa0JBQVEsRUFBR2xCLENBQUQsSUFBUSxLQUFLSSxRQUFMLEdBQWdCSixDQUFDLENBQUNpQixNQUFGLENBQVNDO0FBSjdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFzQkU7QUFBUSxpQkFBUyxFQUFDLDJCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTBCRDs7QUE5QzJDOzs7Ozs7Ozs7O0FDcEw5Qzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZXdlbGlmeS11aS8uL3BhZ2VzL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly9qZXdlbGlmeS11aS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vamV3ZWxpZnktdWkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2pld2VsaWZ5LXVpL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7XHJcbi8vICAgQm94LFxyXG4vLyAgIEJ1dHRvbixcclxuLy8gICBGbGV4LFxyXG4vLyAgIEhlYWRpbmcsXHJcbi8vICAgSW5wdXQsXHJcbi8vICAgQ29udGFpbmVyLFxyXG4vLyAgIFN0YWNrLFxyXG4vLyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhcIm1haWwgLSBcIiArIGdsb2JhbC4kZW1haWwpO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKHsgcHJvdmlkZXJzLCBjc3JmVG9rZW4gfSkge1xyXG5cclxuLy8gICBjb25zdCBidXR0b25SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBidXR0b25SZWYuY3VycmVudC5jbGljaygpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgPGZvcm1cclxuLy8gICAgICAgICAgIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvYXBpL2F1dGgvc2lnbmluL2VtYWlsXCJcclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICA8SW5wdXQgbmFtZT1cImNzcmZUb2tlblwiIHR5cGU9XCJoaWRkZW5cIiBkZWZhdWx0VmFsdWU9e2NzcmZUb2tlbn0gLz5cclxuLy8gICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiICBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXtnbG9iYWwuJGVtYWlsfSAvPlxyXG5cclxuLy8gICAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgICAgcmVmPXtidXR0b25SZWZ9XHJcbi8vICAgICAgICAgICAgIC8vdHlwZT1cImhpZGRlblwiXHJcbi8vICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIj48L0J1dHRvbj5cclxuLy8gICAgICAgICA8L2Zvcm0+XHJcbi8vICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgPGRpdj5cclxuXHJcbi8vICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuLy8gICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJ4LXVhLWNvbXBhdGlibGVcIiBjb250ZW50PVwiaWU9ZWRnZVwiIC8+XHJcbi8vICAgICAgICAgPHRpdGxlPkpld2VsaWZ5PC90aXRsZT5cclxuLy8gICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50IC8+XHJcbi8vICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuLy8gc1xyXG4vLyAgICAgICB7LyogQWRkIHlvdXIgc2l0ZSBvciBhcHBsaWNhdGlvbiBjb250ZW50IGhlcmUgKi99XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlciBcIj5cclxuLy8gICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlci1hcmVhXCI+XHJcbi8vICAgICAgICAgICB7LyogTWVudSBBcmVhXHJcbi8vICAgICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cclxuLy8gICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLW1lbnVcIiBjbGFzc05hbWU9XCJzdGlja2VyIHdoaXRlLWJnXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC14cy0xMlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gZmxvYXQtbGVmdCBuYXZiYXItaGVhZGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ29cIj48YSBocmVmPVwiaW5kZXguaHRtbFwiPjwvYT48L2gyPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbWFpbi1tZW51LTJcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9tZW51LnN2Z1wiIGNsYXNzTmFtZT1cIm1lbnUtb3BlblwiIGFsdD1cIlwiIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbWVudSB0ZXh0LWNlbnRlciBjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm1haW4tbWVudS0yXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51IG9uZS1wYWdlXCI+XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuLy8gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2hlYWRlcj5cclxuLy8gICAgICAgICB7LyogcHJpY2luZyBhcmVhXHJcbi8vICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG4vLyAgICAgICAgIDxkaXYgaWQ9XCJwcmljaW5nLWFyZWFcIiBjbGFzc05hbWU9XCJwcmljaW5nLWFyZWEgY3VzdG9tLWJvcmRlclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmM2ZiZmUnIH19PlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtMTAwXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBiLTEwMFwiPlxyXG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbXNnLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1tc2dcIiAvPlxyXG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1ib3R0b20tbGVmdCBwcmljaW5nLW1yZyBjbGVhcmZpeCB0ZXh0LXN0eWxlXCI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxoMj5TZW5kaW5nIGxvZ2luIExpbmsuIFBsZWFzZSB3YWl0LjwvaDI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxwPkJ5IHVzaW5nIHBhc3N3b3JkbGVzcyBsb2dpbiBpdCBpbmNyZWFzZXMgdGhlIHNlY3VyaXR5IG9mIHlvdXIgYWNjb3VudDwvcD5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgey8qIGNvbnRhY3QgYXJlYVxyXG4vLyAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWFyZWFcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25hdGN0LWluZm8gZml4XCI+XHJcbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBjb2wtc20tNCB0ZXh0LXN0eWxlXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8aDI+SmV3ZWxpZnk8L2gyPlxyXG4vLyAgICAgICAgICAgICAgICAgPHA+Q29weXJpZ2h0IMKpIDIwMjFcclxuLy8gICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9ib290ZXhwZXJ0cy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SmV3ZWxpZnk8L2E+PGJyIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgIC5BbGwgcmlnaHQgcmVzZXJ2ZWQuPC9wPlxyXG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXNtLTQgZm9vdGVyLWxpbmtzIHRleHQtc3R5bGUgdC1tLXJlc1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMwXCI+U2VydmljZXM8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgPHVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5zZXJ2aWNlIC0gMTwvYT48L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5zZXJ2aWNlIC0gMjwvYT48L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5zZXJ2aWNlIC0gMzwvYT48L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5zZXJ2aWNlIC0gNDwvYT48L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgPC91bD5cclxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGNvbC1zbS00IGZvb3Rlci1saW5rcyB0ZXh0LXN0eWxlIHQtbS1yZXNcIj5cclxuLy8gICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zMFwiPkNvbXBhbnk8L2gzPlxyXG4vLyAgICAgICAgICAgICAgICAgPHVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8bGk+IDxhIGhyZWY9XCIjXCI+V29yazwvYT48L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5SZXNvdXJjZXM8L2E+PC9saT5cclxuLy8gICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJpY2luZzwvYT48L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgPC91bD5cclxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS00IHRleHQtc3R5bGUgdC1tLXJlc1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTMwXCI+VXNlZnVsIExpbmtzPC9oMz5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWljb25cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPHVsPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxsaT48YT48aW1nIHNyYz1cIi9pbWcvZmFjZWJvb2suc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCIyMHB4XCIgLz48L2E+IDwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGxpPjxhPjxpbWcgc3JjPVwiL2ltZy9pbnN0YWdyYW0uc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCIyMHB4XCIgLz48L2E+IDwvbGk+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGxpPjxhPjxpbWcgc3JjPVwiL2ltZy90d2l0dGVyLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPVwiMjBweFwiIC8+PC9hPiA8L2xpPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICB7Lyogc3RhcnQgc2Nyb2xsVXBcclxuLy8gICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XHJcbi8vICAgICAgIHsvKjxkaXYgaWQ9XCJ0b1RvcFwiPlxyXG4vLyAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXVwXCI+PC9pPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICA8L2Rpdj4qL31cclxuLy8gICAgICAgey8qIGpxdWVyeVxyXG4vLyBcdFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XHJcbi8vICAgICAgIHsvKiBib290c3RyYXAgSlNcclxuLy8gXHRcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovfVxyXG4vLyAgICAgICB7LyogcGx1Z2lucyBKU1xyXG4vLyBcdFx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XHJcbi8vICAgICAgIHsvKiBtYWluIEpTXHJcbi8vIFx0XHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cclxuLy8gICAgIDwvZGl2PlxyXG5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIFNpZ25Jbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgIGNvbnN0IHsgcmVxLCByZXMgfSA9IGNvbnRleHQ7XHJcbi8vICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XHJcblxyXG4vLyAgIGlmIChzZXNzaW9uICYmIHJlcyAmJiBzZXNzaW9uLmFjY2Vzc1Rva2VuKSB7XHJcbi8vICAgICByZXMud3JpdGVIZWFkKDMwMiwge1xyXG4vLyAgICAgICBMb2NhdGlvbjogXCIvXCIsXHJcbi8vICAgICB9KTtcclxuLy8gICAgIHJlcy5lbmQoKTtcclxuLy8gICAgIHJldHVybjtcclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBzZXNzaW9uOiB1bmRlZmluZWQsXHJcbi8vICAgICBwcm92aWRlcnM6IGF3YWl0IHByb3ZpZGVycyhjb250ZXh0KSxcclxuLy8gICAgIGNzcmZUb2tlbjogYXdhaXQgY3NyZlRva2VuKGNvbnRleHQpLFxyXG4vLyAgIH07XHJcbi8vIH07XHJcblxyXG4vL25ldyBjb2RlXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgIH07XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvLm5ldGxpZnkvZnVuY3Rpb25zL3NpZ24taW5cIiwgZGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzVG9rZW5cIiwgcmVzLmRhdGEuYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aDI+U0lHTiBJTjwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+ICh0aGlzLmVtYWlsID0gZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+ICh0aGlzLnBhc3N3b3JkID0gZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYXhpb3MiLCJTaWduSW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsInBvc3QiLCJ0aGVuIiwicmVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFjY2Vzc1Rva2VuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9